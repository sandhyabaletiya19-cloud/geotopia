/* ═══════════════════════════════════════════════════════════
   DHARAVERSE MAP MYSTERY — GROQ AI JOKE GENERATOR
   File: /api/generate-jokes.js
   
   DEPENDS ON: Nothing (Vercel serverless function)
   CALLED BY: /api/cron-daily.js
   
   USES:
     Groq API (FREE — 14,400 requests/day)
     Model: llama-3.1-8b-instant (fast + free)
   
   ENV VARS NEEDED:
     GROQ_API_KEY  ← from console.groq.com
   
   EXPORTS:
     generateFunnyFact(headlines, countryName, lang)
     → Promise<string>  one-liner fact
   ═══════════════════════════════════════════════════════════ */

// ─────────────────────────────────────────────
// GROQ CONFIG
// ─────────────────────────────────────────────
var GROQ_API_URL = 'https://api.groq.com/openai/v1/chat/completions';
var GROQ_MODEL   = 'llama-3.1-8b-instant';

// Max tokens for the one-liner (short = fast + cheap)
var MAX_TOKENS = 120;

// Temperature — higher = more creative/funny
var TEMPERATURE = 0.85;


// ═══════════════════════════════════════════════
// 1. PROMPT TEMPLATES
// ═══════════════════════════════════════════════

/**
 * System prompts per language.
 * Tell the AI exactly what tone and format we want.
 */
var SYSTEM_PROMPTS = {

  en: [
    'You are a witty geography game hint writer.',
    'You write ONE short sentence (max 20 words) that:',
    '- References a real recent news story about the country',
    '- Gives a HINT about the country without naming it directly',
    '- Is fun, engaging, slightly cheeky — like Wordle meets BuzzFeed',
    '- Never says the country name',
    '- Ends with a relevant emoji',
    'Output ONLY the one-liner. No quotes. No explanation.'
  ].join('\n'),

  hi: [
    'Tum ek witty geography game ke liye hint likhte ho.',
    'Ek CHHOTA sa sentence likho (max 20 words) jo:',
    '- Haal ki khabar ka reference de us desh ke baare mein',
    '- Desh ka naam BILKUL mat batao',
    '- Hinglish mein ho (Hindi + English mix)',
    '- Fun aur thoda cheeky ho',
    '- Ek relevant emoji ke saath khatam ho',
    'Sirf ek liner likho. Koi explanation nahi.'
  ].join('\n'),

  hinglish: [
    'You write ONE fun Hinglish hint (Hindi+English mix, max 20 words).',
    'Rules:',
    '- Reference a real recent news about the country',
    '- NEVER say the country name',
    '- Be funny, cheeky, like a WhatsApp forward',
    '- End with a relevant emoji',
    'Output ONLY the one-liner. No quotes. No explanation.'
  ].join('\n')
};

/**
 * User prompt templates.
 * Fill in country name and headlines.
 */
function buildUserPrompt(countryName, headlines, lang) {
  var headlineText = headlines && headlines.length > 0
    ? headlines.slice(0, 5).join(' | ')
    : 'No recent headlines available';

  if (lang === 'hi' || lang === 'hinglish') {
    return [
      'Country: ' + countryName,
      'Recent news headlines: ' + headlineText,
      '',
      'Write a Hinglish hint about this country based on the news.',
      'Do NOT say "' + countryName + '" anywhere.'
    ].join('\n');
  }

  return [
    'Country: ' + countryName,
    'Recent news headlines: ' + headlineText,
    '',
    'Write a fun hint about this country based on the news.',
    'Do NOT say "' + countryName + '" anywhere.'
  ].join('\n');
}


// ═══════════════════════════════════════════════
// 2. CALL GROQ API
// ═══════════════════════════════════════════════

/**
 * Call Groq API with a prompt.
 *
 * @param {string} systemPrompt
 * @param {string} userPrompt
 * @returns {Promise<string>} AI response text
 */
async function callGroq(systemPrompt, userPrompt) {
  var apiKey = process.env.GROQ_API_KEY;

  if (!apiKey) {
    throw new Error('GROQ_API_KEY environment variable not set');
  }

  var body = JSON.stringify({
    model: GROQ_MODEL,
    messages: [
      {
        role: 'system',
        content: systemPrompt
      },
      {
        role: 'user',
        content: userPrompt
      }
    ],
    max_tokens:  MAX_TOKENS,
    temperature: TEMPERATURE,
    top_p:       1,
    stream:      false
  });

  var response = await fetch(GROQ_API_URL, {
    method: 'POST',
    headers: {
      'Authorization': 'Bearer ' + apiKey,
      'Content-Type':  'application/json'
    },
    body: body
  });

  if (!response.ok) {
    var errText = await response.text();
    throw new Error('Groq API error ' + response.status + ': ' + errText);
  }

  var data = await response.json();

  // Extract the generated text
  var text = data
    && data.choices
    && data.choices[0]
    && data.choices[0].message
    && data.choices[0].message.content;

  if (!text) {
    throw new Error('Groq returned empty response');
  }

  return text.trim();
}


// ═══════════════════════════════════════════════
// 3. CLEAN UP AI OUTPUT
// ═══════════════════════════════════════════════

/**
 * Clean and validate AI-generated text.
 * Remove quotes, extra whitespace, country name leaks.
 *
 * @param {string} text       - Raw AI output
 * @param {string} countryName - To ensure it's not in output
 * @returns {string} Cleaned text
 */
function cleanOutput(text, countryName) {
  if (!text) return '';

  var cleaned = text
    // Remove surrounding quotes
    .replace(/^["'"']+|["'"']+$/g, '')
    // Remove "Hint:" or "Answer:" prefixes
    .replace(/^(hint|answer|fact|clue):\s*/i, '')
    // Collapse multiple spaces
    .replace(/\s+/g, ' ')
    // Trim
    .trim();

  // Safety: if country name leaked into output, redact it
  if (countryName && cleaned.toLowerCase().includes(countryName.toLowerCase())) {
    cleaned = cleaned.replace(
      new RegExp(countryName, 'gi'),
      'this country'
    );
  }

  // Truncate if too long (max 200 chars for UI)
  if (cleaned.length > 200) {
    cleaned = cleaned.substring(0, 197) + '...';
  }

  return cleaned;
}


// ═══════════════════════════════════════════════
// 4. FALLBACK FACTS
// ═══════════════════════════════════════════════

/**
 * Static fallback facts when AI fails.
 * Generic enough to work for any country.
 * Picked randomly so it's not always the same.
 *
 * @returns {string} A fallback hint
 */
function getFallbackFact() {
  var fallbacks = [
    'This country made headlines recently — can you guess which one? 🌍',
    'Somewhere on the map, this country is trending right now 📰',
    'World leaders are talking about this place today 🗺️',
    'This country has been in the news — your geography skills will help! 🧭',
    'A nation currently in the spotlight — where in the world is it? 🌐',
    'Something big just happened here — the map holds the answer 📍',
    'This place is making waves internationally right now 🌊',
    'Global eyes are on this country today — can you find it? 👀'
  ];

  var index = Math.floor(Math.random() * fallbacks.length);
  return fallbacks[index];
}


// ═══════════════════════════════════════════════
// 5. MAIN EXPORT — generateFunnyFact()
// ═══════════════════════════════════════════════

/**
 * Generate a funny/witty one-liner fact about a country
 * based on recent news headlines using Groq AI.
 *
 * @param {string[]} headlines  - Array of news headlines (from fetch-news.js)
 * @param {string}   countryName - Country display name (e.g. "India")
 * @param {string}   [lang]     - "en"|"hi"|"hinglish" (default: "en")
 * @returns {Promise<string>}   One-liner hint text
 *
 * Called by: /api/cron-daily.js
 *
 * Example output:
 *   "This country just launched a rocket to the Moon's south pole 🚀"
 *   "Bhai yahan ka cricket team ne world cup jeet liya 🏆"
 */
async function generateFunnyFact(headlines, countryName, lang) {
  lang = lang || 'en';

  // Validate inputs
  if (!countryName) {
    console.warn('[generate-jokes.js] No country name provided');
    return getFallbackFact();
  }

  // Get appropriate prompts
  var systemPrompt = SYSTEM_PROMPTS[lang] || SYSTEM_PROMPTS.en;
  var userPrompt   = buildUserPrompt(countryName, headlines, lang);

  console.log('[generate-jokes.js] Generating fact for:', countryName, '| Lang:', lang);

  try {
    var rawText = await callGroq(systemPrompt, userPrompt);
    var cleaned = cleanOutput(rawText, countryName);

    if (!cleaned || cleaned.length < 10) {
      console.warn('[generate-jokes.js] Output too short, using fallback');
      return getFallbackFact();
    }

    console.log('[generate-jokes.js] Generated:', cleaned);
    return cleaned;

  } catch (err) {
    console.error('[generate-jokes.js] Groq API failed:', err.message);
    return getFallbackFact();
  }
}


// ═══════════════════════════════════════════════
// 6. VERCEL SERVERLESS HANDLER
// Allows direct HTTP testing of this endpoint
// ═══════════════════════════════════════════════

/**
 * Vercel serverless function handler.
 * For direct testing: POST /api/generate-jokes
 *
 * Body: {
 *   headlines:   string[]
 *   countryName: string
 *   lang:        string (optional)
 * }
 *
 * Response: {
 *   fact_en:     string
 *   fact_hi:     string
 *   countryName: string
 * }
 */
export default async function handler(req, res) {

  // Only allow POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed. Use POST.' });
  }

  // Parse body
  var body = req.body || {};
  var headlines   = body.headlines   || [];
  var countryName = body.countryName || '';
  var lang        = body.lang        || 'en';

  if (!countryName) {
    return res.status(400).json({ error: 'countryName is required' });
  }

  try {
    // Generate English fact
    var fact_en = await generateFunnyFact(headlines, countryName, 'en');

    // Generate Hinglish fact
    var fact_hi = await generateFunnyFact(headlines, countryName, 'hinglish');

    return res.status(200).json({
      success:     true,
      countryName: countryName,
      fact_en:     fact_en,
      fact_hi:     fact_hi,
      model:       GROQ_MODEL
    });

  } catch (err) {
    console.error('[generate-jokes.js] Handler error:', err);
    return res.status(500).json({
      error:   'Failed to generate fact',
      message: err.message
    });
  }
}


// ═══════════════════════════════════════════════
// 7. NAMED EXPORT for cron-daily.js
// ═══════════════════════════════════════════════

export { generateFunnyFact };
