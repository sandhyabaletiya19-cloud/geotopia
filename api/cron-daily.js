/* ═══════════════════════════════════════════════════════════
   VERCEL CRON — Runs daily at 21:30 UTC (3:00 AM IST)
   File: /api/cron-daily.js
   
   vercel.json config needed:
   {
     "crons": [{
       "path": "/api/cron-daily",
       "schedule": "30 21 * * *"
     }]
   }
   ═══════════════════════════════════════════════════════════ */

export default async function handler(req, res) {

  /* ── Security: only allow Vercel cron or your IP ── */
  var authHeader = req.headers['authorization'];
  if (authHeader !== 'Bearer ' + process.env.CRON_SECRET) {
    /* Allow Vercel internal cron calls */
    var cronHeader = req.headers['x-vercel-cron'];
    if (!cronHeader) {
      return res.status(401).json({ error: 'Unauthorized' });
    }
  }

  try {
    console.log('[cron-daily] Starting daily update...');

    /* ── 1. Get today's date + country ──────────── */
    var today    = getTodayUTC();
    var country  = getTodayCountry();

    if (!country) {
      throw new Error('Could not determine today\'s country');
    }

    console.log('[cron-daily] Date:', today, '| Country:', country.name);

    /* ── 2. Check if already done for today ─────── */
    var existing = await checkExisting(today);
    if (existing) {
      console.log('[cron-daily] Already have fact for today. Skipping.');
      return res.status(200).json({
        status: 'skipped',
        message: 'Fact already exists for ' + today
      });
    }

    /* ── 3. Fetch news ──────────────────────────── */
    var headlines = await fetchNewsForCountry(country.name);
    console.log('[cron-daily] Got', headlines.length, 'headlines');

    /* ── 4. Generate fun fact with AI ───────────── */
    var facts = await generateFacts(country.name, headlines, country.fun_fact);
    console.log('[cron-daily] Generated facts:', {
      en: facts.en.substring(0, 60) + '...',
      hi: facts.hi.substring(0, 40) + '...'
    });

    /* ── 5. Save to Supabase ─────────────────────── */
    await saveFact(today, country, facts, headlines);
    console.log('[cron-daily] Saved to Supabase successfully');

    return res.status(200).json({
      status:    'success',
      date:      today,
      country:   country.name,
      fact_en:   facts.en,
      fact_hi:   facts.hi
    });

  } catch (err) {
    console.error('[cron-daily] Error:', err.message);
    return res.status(500).json({
      status: 'error',
      error:  err.message
    });
  }
}

/* ── HELPER: Get today UTC ──────────────────────── */
function getTodayUTC() {
  var now   = new Date();
  var year  = now.getUTCFullYear();
  var month = String(now.getUTCMonth() + 1).padStart(2, '0');
  var day   = String(now.getUTCDate()).padStart(2, '0');
  return year + '-' + month + '-' + day;
}

/* ── HELPER: Get today's country (mirrors state.js) ─ */
function getTodayCountry() {
  /* Import country list inline (same algorithm as state.js) */
  var COUNTRIES = getCountryList();
  var count     = COUNTRIES.length;

  var LAUNCH    = new Date(Date.UTC(2025, 0, 1));
  var todayMs   = new Date().setUTCHours(0, 0, 0, 0);
  var dayNum    = Math.floor((todayMs - LAUNCH.getTime()) / 86400000) + 1;

  var cycle     = Math.floor((dayNum - 1) / count);
  var position  = (dayNum - 1) % count;
  var seed      = 20250101 + cycle;

  var shuffled  = seededShuffle(count, seed);
  return COUNTRIES[shuffled[position]];
}

/* ── Seeded shuffle (mirrors state.js exactly) ────── */
function seededShuffle(length, seed) {
  function rng() {
    seed |= 0;
    seed = (seed + 0x6D2B79F5) | 0;
    var t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  }

  var indices = Array.from({ length: length }, function (_, i) { return i; });
  for (var i = length - 1; i > 0; i--) {
    var j = Math.floor(rng() * (i + 1));
    var tmp = indices[i];
    indices[i] = indices[j];
    indices[j] = tmp;
  }
  return indices;
}

/* ── HELPER: Check if today's fact exists ─────────── */
async function checkExisting(date) {
  var url = process.env.SUPABASE_URL +
    '/rest/v1/daily_facts?date=eq.' + date + '&select=id&limit=1';

  var res = await fetch(url, {
    headers: {
      'apikey':        process.env.SUPABASE_SERVICE_KEY,
      'Authorization': 'Bearer ' + process.env.SUPABASE_SERVICE_KEY
    }
  });

  var data = await res.json();
  return data && data.length > 0;
}

/* ── HELPER: Fetch news ───────────────────────────── */
async function fetchNewsForCountry(countryName) {
  var url = 'https://gnews.io/api/v4/search?' +
    'q=' + encodeURIComponent(countryName) +
    '&lang=en' +
    '&max=5' +
    '&apikey=' + process.env.GNEWS_API_KEY;

  var res = await fetch(url);

  if (!res.ok) {
    console.warn('[cron-daily] GNews failed:', res.status);
    return [];
  }

  var data = await res.json();

  if (!data.articles) return [];

  return data.articles.map(function (a) {
    return a.title || '';
  }).filter(Boolean);
}

/* ── HELPER: Generate facts with Groq ────────────── */
async function generateFacts(countryName, headlines, fallbackFact) {
  var headlineText = headlines.length > 0
    ? headlines.slice(0, 5).join('\n')
    : 'No recent headlines. Use this fun fact: ' + fallbackFact;

  var prompt = [
    'You are a witty geography educator for a daily word game.',
    'Country: ' + countryName,
    'Recent news headlines:\n' + headlineText,
    '',
    'Write TWO short one-liner facts (max 120 chars each):',
    '1. English fact: A fun, surprising connection between this country and the news. Casual, Zomato-style tone.',
    '2. Hinglish fact: Same fact in Hinglish (mix of Hindi and English). Casual, fun.',
    '',
    'Reply in this exact JSON format:',
    '{"en": "English fact here", "hi": "Hinglish fact here"}'
  ].join('\n');

  var res = await fetch('https://api.groq.com/openai/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Authorization': 'Bearer ' + process.env.GROQ_API_KEY,
      'Content-Type':  'application/json'
    },
    body: JSON.stringify({
      model:       'llama-3.1-8b-instant',
      messages:    [{ role: 'user', content: prompt }],
      max_tokens:  200,
      temperature: 0.8
    })
  });

  if (!res.ok) {
    console.warn('[cron-daily] Groq failed:', res.status);
    return {
      en: fallbackFact,
      hi: fallbackFact
    };
  }

  var data = await res.json();
  var text = data.choices &&
             data.choices[0] &&
             data.choices[0].message &&
             data.choices[0].message.content
    ? data.choices[0].message.content.trim()
    : '{}';

  try {
    /* Extract JSON from response */
    var jsonMatch = text.match(/\{[\s\S]*\}/);
    if (!jsonMatch) throw new Error('No JSON in response');

    var parsed = JSON.parse(jsonMatch[0]);

    return {
      en: (parsed.en || fallbackFact).substring(0, 200),
      hi: (parsed.hi || fallbackFact).substring(0, 200)
    };
  } catch (e) {
    console.warn('[cron-daily] Could not parse Groq response:', e.message);
    return { en: fallbackFact, hi: fallbackFact };
  }
}

/* ── HELPER: Save to Supabase ─────────────────────── */
async function saveFact(date, country, facts, headlines) {
  var url = process.env.SUPABASE_URL + '/rest/v1/daily_facts';

  var body = {
    date:       date,
    country_id: country.id,
    fact_en:    facts.en,
    fact_hi:    facts.hi,
    source_url: headlines.length > 0 ? 'gnews.io' : 'static'
  };

  var res = await fetch(url, {
    method:  'POST',
    headers: {
      'apikey':        process.env.SUPABASE_SERVICE_KEY,
      'Authorization': 'Bearer ' + process.env.SUPABASE_SERVICE_KEY,
      'Content-Type':  'application/json',
      'Prefer':        'return=minimal'
    },
    body: JSON.stringify(body)
  });

  if (!res.ok) {
    var errText = await res.text();
    throw new Error('Supabase insert failed: ' + errText);
  }
}

/* ── Minimal country list for server (id + name + fun_fact) ── */
function getCountryList() {
  /* This is a minimal list — same IDs as data.js.
     Only needs id, name, fun_fact for the cron job. */
  return [
    { id:"afghanistan",name:"Afghanistan",fun_fact:"Home to the Buddhas of Bamiyan." },
    { id:"armenia",name:"Armenia",fun_fact:"First country to adopt Christianity." },
    { id:"azerbaijan",name:"Azerbaijan",fun_fact:"Known as the Land of Fire." },
    { id:"bahrain",name:"Bahrain",fun_fact:"Home to the ancient Dilmun civilization." },
    { id:"bangladesh",name:"Bangladesh",fun_fact:"Has the world's largest river delta." },
    { id:"bhutan",name:"Bhutan",fun_fact:"Measures success by Gross National Happiness." },
    { id:"brunei",name:"Brunei",fun_fact:"Sultan's palace has 1,788 rooms." },
    { id:"cambodia",name:"Cambodia",fun_fact:"Angkor Wat is the largest religious monument." },
    { id:"china",name:"China",fun_fact:"Great Wall stretches over 21,000 km." },
    { id:"cyprus",name:"Cyprus",fun_fact:"Birthplace of Aphrodite." },
    { id:"georgia",name:"Georgia",fun_fact:"Has the world's deepest cave." },
    { id:"india",name:"India",fun_fact:"World's largest postal network." },
    { id:"indonesia",name:"Indonesia",fun_fact:"Over 17,000 islands." },
    { id:"iran",name:"Iran",fun_fact:"One of the world's oldest civilizations." },
    { id:"iraq",name:"Iraq",fun_fact:"Ancient Mesopotamia, Cradle of Civilization." },
    { id:"israel",name:"Israel",fun_fact:"Dead Sea is the lowest point on Earth." },
    { id:"japan",name:"Japan",fun_fact:"Over 6,800 islands." },
    { id:"jordan",name:"Jordan",fun_fact:"Petra carved into rose-red cliffs 2,000 years ago." },
    { id:"kazakhstan",name:"Kazakhstan",fun_fact:"Largest landlocked country in the world." },
    { id:"kuwait",name:"Kuwait",fun_fact:"No natural rivers or lakes." },
    { id:"kyrgyzstan",name:"Kyrgyzstan",fun_fact:"94% mountains." },
    { id:"laos",name:"Laos",fun_fact:"Most heavily bombed country per capita in history." },
    { id:"lebanon",name:"Lebanon",fun_fact:"Cedars appear on the country's flag." },
    { id:"malaysia",name:"Malaysia",fun_fact:"Petronas Towers were world's tallest 1998-2004." },
    { id:"maldives",name:"Maldives",fun_fact:"Flattest country in the world." },
    { id:"mongolia",name:"Mongolia",fun_fact:"Lowest population density of any country." },
    { id:"myanmar",name:"Myanmar",fun_fact:"One of only 3 countries not using metric system." },
    { id:"nepal",name:"Nepal",fun_fact:"Only country with a non-rectangular flag." },
    { id:"north korea",name:"North Korea",fun_fact:"Operates on its own Juche calendar." },
    { id:"oman",name:"Oman",fun_fact:"Frankincense trees traded for 5,000 years." },
    { id:"pakistan",name:"Pakistan",fun_fact:"Has K2, world's second-highest mountain." },
    { id:"philippines",name:"Philippines",fun_fact:"7,641 islands." },
    { id:"qatar",name:"Qatar",fun_fact:"Highest GDP per capita in the world." },
    { id:"saudi arabia",name:"Saudi Arabia",fun_fact:"No permanent rivers." },
    { id:"singapore",name:"Singapore",fun_fact:"Chewing gum banned since 1992." },
    { id:"south korea",name:"South Korea",fun_fact:"Fastest average internet speed in the world." },
    { id:"sri lanka",name:"Sri Lanka",fun_fact:"Produces the world's finest cinnamon." },
    { id:"syria",name:"Syria",fun_fact:"Damascus is one of the oldest continuously inhabited cities." },
    { id:"tajikistan",name:"Tajikistan",fun_fact:"93% mountainous." },
    { id:"thailand",name:"Thailand",fun_fact:"Only Southeast Asian country never colonized." },
    { id:"timor-leste",name:"Timor-Leste",fun_fact:"First new sovereign state of the 21st century." },
    { id:"turkey",name:"Turkey",fun_fact:"Istanbul built on two continents." },
    { id:"turkmenistan",name:"Turkmenistan",fun_fact:"Door to Hell gas crater burning since 1971." },
    { id:"united arab emirates",name:"United Arab Emirates",fun_fact:"Burj Khalifa is 828 meters tall." },
    { id:"uzbekistan",name:"Uzbekistan",fun_fact:"One of only two doubly landlocked countries." },
    { id:"vietnam",name:"Vietnam",fun_fact:"World's second-largest coffee exporter." },
    { id:"yemen",name:"Yemen",fun_fact:"Socotra Island has dragon blood trees." },
    { id:"albania",name:"Albania",fun_fact:"Over 173,000 bunkers built during communist era." },
    { id:"andorra",name:"Andorra",fun_fact:"No airport, no railway, no military." },
    { id:"austria",name:"Austria",fun_fact:"Flag dates back to 1230." },
    { id:"belarus",name:"Belarus",fun_fact:"Has Europe's last primeval forest." },
    { id:"belgium",name:"Belgium",fun_fact:"Produces 220,000 tonnes of chocolate per year." },
    { id:"bosnia and herzegovina",name:"Bosnia and Herzegovina",fun_fact:"Hosted 1984 Winter Olympics." },
    { id:"bulgaria",name:"Bulgaria",fun_fact:"Nods for no and shakes head for yes." },
    { id:"croatia",name:"Croatia",fun_fact:"The necktie was invented in Croatia." },
    { id:"czech republic",name:"Czech Republic",fun_fact:"Drinks more beer per capita than any other country." },
    { id:"denmark",name:"Denmark",fun_fact:"Denmark's flag is the oldest state flag in use." },
    { id:"estonia",name:"Estonia",fun_fact:"First country to offer e-residency." },
    { id:"finland",name:"Finland",fun_fact:"3 million saunas for 5.5 million people." },
    { id:"france",name:"France",fun_fact:"Most visited country in the world." },
    { id:"germany",name:"Germany",fun_fact:"Over 1,500 types of beer." },
    { id:"greece",name:"Greece",fun_fact:"More archaeological museums than any other country." },
    { id:"hungary",name:"Hungary",fun_fact:"Invented the Rubik's Cube." },
    { id:"iceland",name:"Iceland",fun_fact:"No army and runs on nearly 100% renewable energy." },
    { id:"ireland",name:"Ireland",fun_fact:"No native snakes." },
    { id:"italy",name:"Italy",fun_fact:"More UNESCO World Heritage Sites than any other country." },
    { id:"kosovo",name:"Kosovo",fun_fact:"One of Europe's youngest countries." },
    { id:"latvia",name:"Latvia",fun_fact:"Riga has the largest collection of Art Nouveau architecture." },
    { id:"liechtenstein",name:"Liechtenstein",fun_fact:"You can rent the entire country for $70,000/night." },
    { id:"lithuania",name:"Lithuania",fun_fact:"Last European country to convert to Christianity." },
    { id:"luxembourg",name:"Luxembourg",fun_fact:"Highest GDP per capita in the world." },
    { id:"malta",name:"Malta",fun_fact:"Valletta is the smallest capital city in the EU." },
    { id:"moldova",name:"Moldova",fun_fact:"World's largest wine cellar with 200km of tunnels." },
    { id:"monaco",name:"Monaco",fun_fact:"More densely populated than Central Park." },
    { id:"montenegro",name:"Montenegro",fun_fact:"Means Black Mountain." },
    { id:"netherlands",name:"Netherlands",fun_fact:"A third is below sea level." },
    { id:"north macedonia",name:"North Macedonia",fun_fact:"Mother Teresa was born in Skopje." },
    { id:"norway",name:"Norway",fun_fact:"Coastline is 25,000 km long." },
    { id:"poland",name:"Poland",fun_fact:"Wieliczka Salt Mine has a cathedral carved from salt." },
    { id:"portugal",name:"Portugal",fun_fact:"Has the world's oldest alliance with England." },
    { id:"romania",name:"Romania",fun_fact:"Palace of Parliament is the heaviest building in the world." },
    { id:"russia",name:"Russia",fun_fact:"Spans 11 time zones." },
    { id:"san marino",name:"San Marino",fun_fact:"Claims to be the oldest republic, founded 301 AD." },
    { id:"serbia",name:"Serbia",fun_fact:"Belgrade is one of the oldest continuously inhabited cities." },
    { id:"slovakia",name:"Slovakia",fun_fact:"More castles per capita than any other country." },
    { id:"slovenia",name:"Slovenia",fun_fact:"60% covered in forest." },
    { id:"spain",name:"Spain",fun_fact:"Second-highest number of restaurants per person." },
    { id:"sweden",name:"Sweden",fun_fact:"Has an Ice Hotel rebuilt every winter." },
    { id:"switzerland",name:"Switzerland",fun_fact:"Enough nuclear shelters for entire population." },
    { id:"ukraine",name:"Ukraine",fun_fact:"Deepest metro station in the world." },
    { id:"united kingdom",name:"United Kingdom",fun_fact:"Invented the World Wide Web." },
    { id:"vatican city",name:"Vatican City",fun_fact:"Smallest country in the world." },
    { id:"algeria",name:"Algeria",fun_fact:"Largest country in Africa." },
    { id:"angola",name:"Angola",fun_fact:"Luanda was once the most expensive city for expats." },
    { id:"benin",name:"Benin",fun_fact:"Birthplace of Vodun (Voodoo)." },
    { id:"botswana",name:"Botswana",fun_fact:"Okavango Delta is the world's largest inland delta." },
    { id:"burkina faso",name:"Burkina Faso",fun_fact:"Means Land of Honest People." },
    { id:"burundi",name:"Burundi",fun_fact:"Drum heritage is a UNESCO Intangible Cultural Heritage." },
    { id:"cameroon",name:"Cameroon",fun_fact:"Called Africa in Miniature." },
    { id:"cape verde",name:"Cape Verde",fun_fact:"Uninhabited until Portuguese explorers arrived in 1456." },
    { id:"central african republic",name:"Central African Republic",fun_fact:"One of Earth's best stargazing locations." },
    { id:"chad",name:"Chad",fun_fact:"Flag nearly identical to Romania's." },
    { id:"comoros",name:"Comoros",fun_fact:"World's largest producer of ylang-ylang." },
    { id:"democratic republic of the congo",name:"Democratic Republic of the Congo",fun_fact:"Congo River is the world's deepest river." },
    { id:"republic of the congo",name:"Republic of the Congo",fun_fact:"Brazzaville and Kinshasa are the closest capitals." },
    { id:"ivory coast",name:"Ivory Coast",fun_fact:"Produces 40% of the world's cocoa." },
    { id:"djibouti",name:"Djibouti",fun_fact:"Lake Assal is the saltiest lake outside Antarctica." },
    { id:"egypt",name:"Egypt",fun_fact:"Great Pyramid was tallest structure for 3,800 years." },
    { id:"equatorial guinea",name:"Equatorial Guinea",fun_fact:"Only African country where Spanish is official." },
    { id:"eritrea",name:"Eritrea",fun_fact:"Asmara has finest collections of Modernist architecture." },
    { id:"eswatini",name:"Eswatini",fun_fact:"One of the last absolute monarchies." },
    { id:"ethiopia",name:"Ethiopia",fun_fact:"Runs on its own calendar — 7 years behind." },
    { id:"gabon",name:"Gabon",fun_fact:"88% covered in rainforest." },
    { id:"gambia",name:"Gambia",fun_fact:"Africa's smallest mainland country." },
    { id:"ghana",name:"Ghana",fun_fact:"First sub-Saharan country to gain independence." },
    { id:"guinea",name:"Guinea",fun_fact:"World's largest reserves of bauxite." },
    { id:"guinea-bissau",name:"Guinea-Bissau",fun_fact:"Bijagós Islands are Africa's best-kept wildlife secret." },
    { id:"kenya",name:"Kenya",fun_fact:"Birthplace of M-Pesa, world's first mobile money system." },
    { id:"lesotho",name:"Lesotho",fun_fact:"Only country entirely above 1,000m." },
    { id:"liberia",name:"Liberia",fun_fact:"Founded by freed American slaves." },
    { id:"libya",name:"Libya",fun_fact:"Recorded highest temperature ever on Earth — 58°C." },
    { id:"madagascar",name:"Madagascar",fun_fact:"90% of wildlife found nowhere else on Earth." },
    { id:"malawi",name:"Malawi",fun_fact:"Lake Malawi has more fish species than any other lake." },
    { id:"mali",name:"Mali",fun_fact:"Timbuktu was a great center of learning in the 14th century." },
    { id:"mauritania",name:"Mauritania",fun_fact:"The Eye of the Sahara is visible from space." },
    { id:"mauritius",name:"Mauritius",fun_fact:"The dodo bird lived only here before going extinct." },
    { id:"morocco",name:"Morocco",fun_fact:"Has the world's oldest university, founded 859 AD." },
    { id:"mozambique",name:"Mozambique",fun_fact:"Flag has an AK-47 on it." },
    { id:"namibia",name:"Namibia",fun_fact:"Skeleton Coast is littered with shipwrecks." },
    { id:"niger",name:"Niger",fun_fact:"Has the youngest population in the world." },
    { id:"nigeria",name:"Nigeria",fun_fact:"Nollywood produces more movies per year than Hollywood." },
    { id:"rwanda",name:"Rwanda",fun_fact:"Banned plastic bags in 2008." },
    { id:"sao tome and principe",name:"São Tomé and Príncipe",fun_fact:"Africa's second-smallest country, sits on the equator." },
    { id:"senegal",name:"Senegal",fun_fact:"Lac Rose is naturally pink due to algae." },
    { id:"seychelles",name:"Seychelles",fun_fact:"Has the world's smallest capital city." },
    { id:"sierra leone",name:"Sierra Leone",fun_fact:"Means Lion Mountains in Portuguese." },
    { id:"somalia",name:"Somalia",fun_fact:"Longest coastline in mainland Africa." },
    { id:"south africa",name:"South Africa",fun_fact:"Has 11 official languages and 3 capital cities." },
    { id:"south sudan",name:"South Sudan",fun_fact:"World's newest country, independent 2011." },
    { id:"sudan",name:"Sudan",fun_fact:"Has more ancient pyramids than Egypt." },
    { id:"tanzania",name:"Tanzania",fun_fact:"Mount Kilimanjaro is Africa's highest peak." },
    { id:"togo",name:"Togo",fun_fact:"Only 115 km wide at its widest point." },
    { id:"tunisia",name:"Tunisia",fun_fact:"Star Wars' Tatooine named after the city Tataouine." },
    { id:"uganda",name:"Uganda",fun_fact:"Home to half the world's remaining mountain gorillas." },
    { id:"zambia",name:"Zambia",fun_fact:"Victoria Falls creates the world's largest curtain of water." },
    { id:"zimbabwe",name:"Zimbabwe",fun_fact:"Printed a 100 trillion dollar banknote in 2008." },
    { id:"antigua and barbuda",name:"Antigua and Barbuda",fun_fact:"Has 365 beaches — one for every day." },
    { id:"bahamas",name:"Bahamas",fun_fact:"Swimming pigs on Big Major Cay are world-famous." },
    { id:"barbados",name:"Barbados",fun_fact:"Birthplace of rum since the 1630s." },
    { id:"belize",name:"Belize",fun_fact:"Has world's second-largest barrier reef." },
    { id:"canada",name:"Canada",fun_fact:"More lakes than all other countries combined." },
    { id:"costa rica",name:"Costa Rica",fun_fact:"Runs on nearly 100% renewable energy." },
    { id:"cuba",name:"Cuba",fun_fact:"About 60,000 classic 1950s American cars still in use." },
    { id:"dominica",name:"Dominica",fun_fact:"Has 365 rivers and the world's second-largest boiling lake." },
    { id:"dominican republic",name:"Dominican Republic",fun_fact:"Santo Domingo is the oldest European settlement in the Americas." },
    { id:"el salvador",name:"El Salvador",fun_fact:"First country to adopt Bitcoin as legal tender." },
    { id:"grenada",name:"Grenada",fun_fact:"Produces 20% of the world's nutmeg." },
    { id:"guatemala",name:"Guatemala",fun_fact:"Tikal was one of the largest Maya cities." },
    { id:"haiti",name:"Haiti",fun_fact:"First free Black republic, independent 1804." },
    { id:"honduras",name:"Honduras",fun_fact:"Bay Islands have world's second-largest coral reef system." },
    { id:"jamaica",name:"Jamaica",fun_fact:"Birthplace of reggae music and Bob Marley." },
    { id:"mexico",name:"Mexico",fun_fact:"Mexico City is sinking at 20 inches per year." },
    { id:"nicaragua",name:"Nicaragua",fun_fact:"Lake Nicaragua has freshwater sharks." },
    { id:"panama",name:"Panama",fun_fact:"Panama Canal saves ships a 12,000 km journey." },
    { id:"saint kitts and nevis",name:"Saint Kitts and Nevis",fun_fact:"Smallest sovereign state in the Western Hemisphere." },
    { id:"saint lucia",name:"Saint Lucia",fun_fact:"Most Nobel laureates per capita of any country." },
    { id:"saint vincent and the grenadines",name:"Saint Vincent and the Grenadines",fun_fact:"Pirates of the Caribbean was filmed here." },
    { id:"trinidad and tobago",name:"Trinidad and Tobago",fun_fact:"Has the world's largest natural deposit of asphalt." },
    { id:"united states",name:"United States",fun_fact:"Has every climate zone from tropical to arctic." },
    { id:"argentina",name:"Argentina",fun_fact:"Avenida 9 de Julio is the widest avenue in the world." },
    { id:"bolivia",name:"Bolivia",fun_fact:"Salar de Uyuni is the world's largest salt flat." },
    { id:"brazil",name:"Brazil",fun_fact:"Amazon Rainforest produces 20% of world's oxygen." },
    { id:"chile",name:"Chile",fun_fact:"Atacama Desert is the driest place on Earth." },
    { id:"colombia",name:"Colombia",fun_fact:"World's leading producer of emeralds." },
    { id:"ecuador",name:"Ecuador",fun_fact:"Named after the equator, home of Galápagos Islands." },
    { id:"guyana",name:"Guyana",fun_fact:"Has Kaieteur Falls — five times taller than Niagara." },
    { id:"paraguay",name:"Paraguay",fun_fact:"Only national flag with different emblems on each side." },
    { id:"peru",name:"Peru",fun_fact:"Machu Picchu is one of the New Seven Wonders." },
    { id:"suriname",name:"Suriname",fun_fact:"Smallest country in South America, 93% jungle." },
    { id:"uruguay",name:"Uruguay",fun_fact:"First country to legalize recreational marijuana." },
    { id:"venezuela",name:"Venezuela",fun_fact:"Angel Falls is the world's highest waterfall." },
    { id:"australia",name:"Australia",fun_fact:"Both a country and a continent, more kangaroos than people." },
    { id:"fiji",name:"Fiji",fun_fact:"333 islands, only 110 permanently inhabited." },
    { id:"kiribati",name:"Kiribati",fun_fact:"Only country in all four hemispheres." },
    { id:"marshall islands",name:"Marshall Islands",fun_fact:"Bikini Atoll inspired the bikini swimsuit name." },
    { id:"micronesia",name:"Micronesia",fun_fact:"Uses giant stone coins called Rai stones." },
    { id:"nauru",name:"Nauru",fun_fact:"World's smallest island nation." },
    { id:"new zealand",name:"New Zealand",fun_fact:"First country to give women the right to vote." },
    { id:"palau",name:"Palau",fun_fact:"Has Jellyfish Lake filled with non-stinging jellyfish." },
    { id:"papua new guinea",name:"Papua New Guinea",fun_fact:"Has over 840 languages." },
    { id:"samoa",name:"Samoa",fun_fact:"Skipped December 30, 2011 when it changed time zones." },
    { id:"solomon islands",name:"Solomon Islands",fun_fact:"Some Islanders have naturally blonde hair from a unique gene." },
    { id:"tonga",name:"Tonga",fun_fact:"Only Pacific monarchy never colonized by Europeans." },
    { id:"tuvalu",name:"Tuvalu",fun_fact:"Earns millions from its .tv internet domain." },
    { id:"vanuatu",name:"Vanuatu",fun_fact:"Has the world's only underwater post office." },
    { id:"palestine",name:"Palestine",fun_fact:"Jericho is one of the oldest inhabited cities, 10,000+ years." },
    { id:"french guiana",name:"French Guiana",fun_fact:"Launches European rockets from its space center." }
  ];
}
