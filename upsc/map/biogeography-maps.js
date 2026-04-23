/**
 * ═══════════════════════════════════════════════════════════════
 * DHARAVERSE UPSC MAPS — BIOGEOGRAPHY
 * MAP 046 to MAP 055 | Vegetation · Wildlife · Biosphere Reserves
 * Mangroves · Coral Reefs · Migratory Birds · Endangered Species
 * Version 2026 | Gateway to IAS
 * ═══════════════════════════════════════════════════════════════
 */

(function () {

  const DATA = {

    // ── VEGETATION ZONES ──
    vegetationZones: [
      {
        name: 'Tropical Evergreen Forest',
        color: '#006400',
        code: 'TEF',
        rainfall: '>200 cm',
        regions: 'Western Ghats, NE India, Andaman & Nicobar',
        trees: 'Mahogany, Ebony, Rosewood, Rubber, Bamboo',
        coords: [
          [8.5, 76.5], [10, 76.0], [11, 75.5], [12, 75.0],
          [13, 74.5], [14, 74.5], [15, 74.0], [16, 73.8],
          [17, 73.5], [17.5, 73.2], [17.5, 74.8],
          [16, 76.0], [14, 76.5], [12, 76.5], [10, 77.5],
          [8.5, 77.5], [8.5, 76.5]
        ],
        upsc: 'Dense, multi-layered canopy. No seasonality — leaves shed & replaced throughout year. Commercially less accessible. UNESCO Heritage.'
      },
      {
        name: 'Tropical Semi-Evergreen',
        color: '#228B22',
        code: 'TSE',
        rainfall: '150-200 cm',
        regions: 'Transition zones in W Ghats, NE India, Odisha hills',
        trees: 'White Cedar, Semul, Kusum',
        coords: [
          [17.5, 74.8], [18, 74.5], [20, 74], [21, 73.5],
          [21, 74.5], [20, 75.5], [18, 75.5], [17.5, 75.5], [17.5, 74.8]
        ],
        upsc: 'Mix of evergreen & deciduous. Transition zone. Important for biodiversity corridors.'
      },
      {
        name: 'Tropical Moist Deciduous',
        color: '#32CD32',
        code: 'TMD',
        rainfall: '100-200 cm',
        regions: 'Eastern Himalayan foothills, NE, Odisha, WB, MP, TN',
        trees: 'Teak, Sal, Arjun, Mulberry',
        coords: [
          [22, 73], [22, 78], [22, 82], [22, 86],
          [20, 87], [19, 85], [18, 83], [17, 82],
          [16, 80], [14, 80], [12, 80], [10, 79.5],
          [10, 78], [11, 77], [13, 76.5],
          [16, 76.5], [18, 76], [20, 74.5],
          [22, 74], [22, 73]
        ],
        upsc: 'Most widespread. Teak & Sal are most commercially important. Shed leaves in dry season (March-May). Dominant in 60% of forest area.'
      },
      {
        name: 'Tropical Dry Deciduous',
        color: '#90EE90',
        code: 'TDD',
        rainfall: '70-100 cm',
        regions: 'UP, Bihar, Rajasthan (E), Telangana plateau, Karnataka',
        trees: 'Tendu, Palas, Neem, Mahua, Ber',
        coords: [
          [27, 77], [25, 80], [24, 82], [23, 83],
          [22, 82], [22, 78], [23, 76], [25, 75],
          [27, 75], [27, 77]
        ],
        upsc: 'Open forest. Drought resistant. Tendu leaves for bidi manufacturing. Mahua — tribal livelihood. Fire-adapted species.'
      },
      {
        name: 'Tropical Thorn Forest',
        color: '#F4A460',
        code: 'TTF',
        rainfall: '<50 cm',
        regions: 'NW India, Rajasthan, Gujarat, Punjab, Haryana, MP',
        trees: 'Acacia, Euphorbias, Cacti, Khejri (State tree Rajasthan)',
        coords: [
          [28, 70], [29, 73], [28, 75], [27, 74],
          [25, 73], [24, 72], [23, 71], [22, 71],
          [22, 70], [24, 69.5], [26, 69.5], [28, 70]
        ],
        upsc: 'Adapted to extreme drought. Deep tap roots. Small leaves/thorns. Khejri (Prosopis cineraria) — vital for Bishnoi community. Rajasthan state tree.'
      },
      {
        name: 'Montane Forests',
        color: '#4682B4',
        code: 'MON',
        rainfall: 'Varies (snow at top)',
        regions: 'Himalayan slopes, W Ghats peaks, NE hills',
        trees: 'Pine, Cedar, Rhododendron, Fir, Spruce, Oak',
        coords: [
          [35, 74], [35, 86], [33, 92], [30, 96],
          [27, 95], [26.5, 92], [27, 88], [28, 84],
          [29.5, 80], [31, 77], [33, 75], [35, 74]
        ],
        upsc: 'Altitude-based vegetation belts. 900-1800m: Subtropical forests; 1800-2800m: Temperate oak/rhododendron; 2800-3500m: Alpine (Bugyals); >3500m: Tundra.'
      },
      {
        name: 'Mangrove Forests',
        color: '#2E8B57',
        code: 'MNG',
        rainfall: 'Coastal (tidal)',
        regions: 'Sundarbans, Godavari-Krishna delta, Mahanadi, Gulf of Kachchh',
        trees: 'Sundari, Rhizophora, Avicennia, Heritiera',
        coords: [],
        upsc: 'Tidal forests. Breathing roots (pneumatophores). Salt tolerant. Coastal protection. India 3rd largest mangroves globally.'
      },
      {
        name: 'Alpine Meadows (Bugyals)',
        color: '#9370DB',
        code: 'ALP',
        rainfall: 'Snow / seasonal',
        regions: 'Above treeline in Himalayas (>3500m)',
        trees: 'Grasses, Edelweiss, Brahmakamal, mosses, lichens',
        coords: [],
        upsc: 'Bugyals — alpine meadows of Uttarakhand. Valley of Flowers (UNESCO). Important for pastoralism. Threatened by climate change.'
      }
    ],

    // ── WILDLIFE SANCTUARIES ──
    wildlifeSanctuaries: [
      { name: 'Gir National Park & Sanctuary', lat: 21.12, lng: 70.79, state: 'Gujarat', animal: 'Asiatic Lion', area: '1412 sq km', upsc: 'Only wild habitat of Asiatic Lion. Population: ~700 (2023). Supreme Court rejected transferring lions to MP.' },
      { name: 'Keibul Lamjao NP', lat: 24.60, lng: 93.82, state: 'Manipur', animal: 'Sangai Deer (Brow-antlered)', area: '40 sq km', upsc: 'World\'s only floating national park. On Loktak Lake phumdis. Sangai — state animal of Manipur.' },
      { name: 'Kaziranga NP & WLS', lat: 26.58, lng: 93.37, state: 'Assam', animal: 'One-horned Rhinoceros', area: '858 sq km', upsc: 'UNESCO WHS. 70% of world\'s one-horned rhinos. Also tigers, elephants, swamp deer.' },
      { name: 'Sundarbans Tiger Reserve & WLS', lat: 21.95, lng: 89.18, state: 'WB/Bangladesh', animal: 'Royal Bengal Tiger', area: '2585 sq km', upsc: 'World\'s largest mangrove delta. UNESCO WHS. Swimming tigers. Increasing human-tiger conflict.' },
      { name: 'Periyar WLS', lat: 9.53, lng: 77.13, state: 'Kerala', animal: 'Elephant, Tiger', area: '925 sq km', upsc: 'Periyar Lake (artificial) in center. Eco-tourism model. Kerala forest. Mullaperiyar Dam controversy.' },
      { name: 'Bharatpur Bird Sanctuary (Keoladeo)', lat: 27.16, lng: 77.52, state: 'Rajasthan', animal: 'Migratory Birds', area: '29 sq km', upsc: 'UNESCO WHS. Ramsar site (1981). Siberian Crane wintering ground (now absent). Man-made wetland.' },
      { name: 'Chilika WLS', lat: 19.72, lng: 85.32, state: 'Odisha', animal: 'Irrawaddy Dolphin, Birds', area: '1100 sq km', upsc: 'Largest coastal lagoon in Asia. Flamingos, Irrawaddy dolphin, sea turtle. Ramsar site.' },
      { name: 'Sariska Tiger Reserve', lat: 27.35, lng: 76.37, state: 'Rajasthan', animal: 'Tiger (reintroduced)', area: '881 sq km', upsc: 'All tigers poached — extinct 2004. Reintroduced from Ranthambore. First ever translocation of tigers.' },
      { name: 'Bandhavgarh NP', lat: 23.72, lng: 80.97, state: 'MP', animal: 'Tiger', area: '446 sq km', upsc: 'Highest tiger density in world. Ancient fort inside. White tiger origin.' },
      { name: 'Namdapha NP', lat: 27.50, lng: 96.50, state: 'Arunachal Pradesh', animal: 'Snow Leopard, Tiger, Elephant, Clouded Leopard', area: '1985 sq km', upsc: 'Only park with all 4 big cats. Remote. INACCESSIBLE. Rich biodiversity.' },
      { name: 'Manas NP & WLS', lat: 26.70, lng: 91.00, state: 'Assam', animal: 'Golden Langur, Pygmy Hog', area: '500 sq km', upsc: 'UNESCO WHS + Biosphere Reserve + Tiger Reserve. Golden langur most endangered primate.' },
      { name: 'Silent Valley NP', lat: 11.08, lng: 76.43, state: 'Kerala', animal: 'Lion-tailed Macaque', area: '237 sq km', upsc: 'Last undisturbed tropical evergreen forest. Save Silent Valley Movement stopped dam (1973-85). Lion-tailed macaque endemic.' },
      { name: 'Great Himalayan NP', lat: 31.90, lng: 77.50, state: 'HP', animal: 'Snow Leopard, Western Tragopan', area: '754 sq km', upsc: 'UNESCO WHS (2014). Snow leopard. Western Tragopan (rarest pheasant). HP.' },
      { name: 'Pench Tiger Reserve', lat: 21.75, lng: 79.35, state: 'MP/Maharashtra', animal: 'Tiger', area: '758 sq km', upsc: 'Rudyard Kipling\'s Jungle Book inspiration. MP-Maharashtra border.' },
      { name: 'Ranthambore Tiger Reserve', lat: 26.00, lng: 76.50, state: 'Rajasthan', animal: 'Tiger', area: '1334 sq km', upsc: 'Famous for tigers in daylight. Rajasthan\'s iconic tiger. Ranthambore Fort inside.' }
    ],

    // ── BIOSPHERE RESERVES ──
    biosphereReserves: [
      { name: 'Nilgiri BR', lat: 11.40, lng: 76.70, state: 'TN, Kerala, Karnataka', year: 1986, unesco: true, upsc: 'First BR of India (1986). Largest in India (5520 sq km). Nilgiri tahr, Nilgiri biota.' },
      { name: 'Nanda Devi BR', lat: 30.38, lng: 79.96, state: 'Uttarakhand', year: 1988, unesco: true, upsc: 'UNESCO WHS. Snow leopard. Valley of Flowers inside. Highest altitude BR.' },
      { name: 'Nokrek BR', lat: 25.43, lng: 90.65, state: 'Meghalaya', year: 1988, unesco: true, upsc: 'UNESCO. Citrus gene center. Home of Red Panda. Garo Hills.' },
      { name: 'Sundarbans BR', lat: 21.95, lng: 88.90, state: 'West Bengal', year: 1989, unesco: true, upsc: 'UNESCO WHS. Largest mangrove. Royal Bengal Tiger. UNESCO MAB program.' },
      { name: 'Gulf of Mannar BR', lat: 9.10, lng: 79.00, state: 'Tamil Nadu', year: 1989, unesco: true, upsc: 'UNESCO. Dugong (sea cow) habitat. Coral reefs. Sea grass. 3600 species.' },
      { name: 'Manas BR', lat: 26.70, lng: 91.00, state: 'Assam', year: 1989, unesco: true, upsc: 'UNESCO WHS. Golden langur. Pygmy hog (rarest pig). Elephant, tiger.' },
      { name: 'Great Nicobar BR', lat: 7.00, lng: 93.84, state: 'A&N Islands', year: 1989, unesco: true, upsc: 'UNESCO. Southernmost. Giant leatherback turtle. Nicobarese. India\'s project for port here controversial (2024).' },
      { name: 'Simlipal BR', lat: 21.85, lng: 86.28, state: 'Odisha', year: 1994, unesco: true, upsc: 'UNESCO. Melanistic tigers (black tigers). Elephant, gaur. Tribal — Paharia, Ho people.' },
      { name: 'Dibru-Saikhowa BR', lat: 27.65, lng: 95.20, state: 'Assam', year: 1986, unesco: false, upsc: 'Feral horses. Gangetic river dolphin. Brahmaputra floodplain.' },
      { name: 'Dehang-Dibang BR', lat: 28.50, lng: 95.50, state: 'Arunachal Pradesh', year: 1998, unesco: false, upsc: 'Arunachal. Part of Namdapha landscape. All 4 big cats.' },
      { name: 'Pachmarhi BR', lat: 22.47, lng: 78.43, state: 'Madhya Pradesh', year: 1999, unesco: true, upsc: 'UNESCO. Only BR of MP. Giant squirrel. Satpura range. Rock paintings.' },
      { name: 'Khangchendzonga BR', lat: 27.70, lng: 88.30, state: 'Sikkim', year: 2000, unesco: true, upsc: 'UNESCO WHS (2016). Kangchenjunga peak. Snow leopard. First mixed WHS of India.' },
      { name: 'Agasthyamalai BR', lat: 8.62, lng: 77.31, state: 'Kerala, TN', year: 2001, unesco: true, upsc: 'UNESCO. Rich plant diversity. Endemic species. Kaani tribe (Jeevani — herb discovery).' },
      { name: 'Achanakmar-Amarkantak BR', lat: 22.66, lng: 81.75, state: 'MP, Chhattisgarh', year: 2005, unesco: false, upsc: 'Source of Narmada & Sone. Baiga tribe. Forest-dependent communities.' },
      { name: 'Great Rann of Kachchh BR', lat: 23.85, lng: 70.00, state: 'Gujarat', year: 2008, unesco: false, upsc: 'Indian Wild Ass. Flamingo nesting. Greater flamingo. Salt marsh ecosystem.' },
      { name: 'Cold Desert BR', lat: 32.50, lng: 77.50, state: 'Himachal Pradesh', year: 2009, unesco: false, upsc: 'Pin Valley. Snow leopard. Spiti river. High altitude cold desert ecosystem.' },
      { name: 'Seshachalam BR', lat: 13.67, lng: 79.37, state: 'Andhra Pradesh', year: 2010, unesco: false, upsc: 'AP. Red Sanders (lal chandan). Tirupati forests. Slender loris.' },
      { name: 'Panna BR', lat: 24.72, lng: 80.20, state: 'Madhya Pradesh', year: 2011, unesco: false, upsc: 'Ken river. Diamond mines (Majhgawan). Ken-Betwa link project controversy. Tiger returned after local extinction.' }
    ],

    // ── MANGROVE DISTRIBUTION ──
    mangroves: [
      {
        name: 'Sundarbans',
        lat: 21.95, lng: 88.90,
        state: 'West Bengal + Bangladesh',
        area: '4267 sq km (India side)',
        totalArea: '~10,000 sq km total (world\'s largest mangrove)',
        mainSpecies: 'Sundari (Heritiera fomes), Goran, Gewa',
        upsc: 'World\'s largest mangrove delta. UNESCO WHS. Royal Bengal Tiger adapted to swim. Irrawaddy dolphin. Threatened by sea level rise. Bhola cyclone damage.'
      },
      {
        name: 'Godavari-Krishna Delta Mangroves',
        lat: 16.50, lng: 81.50,
        state: 'Andhra Pradesh',
        area: '~1000 sq km',
        mainSpecies: 'Avicennia, Rhizophora',
        upsc: 'Coringa Wildlife Sanctuary. 2nd largest mangroves. OTTERS present. Critically endangered habitats.'
      },
      {
        name: 'Mahanadi Delta Mangroves',
        lat: 20.50, lng: 86.60,
        state: 'Odisha',
        area: '~220 sq km',
        mainSpecies: 'Avicennia marina, Excoecaria',
        upsc: 'Bhitarkanika WLS. Largest olive ridley sea turtle rookery. Saltwater crocodile.'
      },
      {
        name: 'Gulf of Kachchh Mangroves',
        lat: 22.80, lng: 70.20,
        state: 'Gujarat',
        area: '~600 sq km',
        mainSpecies: 'Avicennia marina',
        upsc: 'Marine National Park. Expanding due to GEER Foundation conservation. Flamingos.'
      },
      {
        name: 'Andaman & Nicobar Mangroves',
        lat: 12.00, lng: 92.80,
        state: 'A&N Islands',
        area: '~800 sq km',
        mainSpecies: 'Rhizophora, Bruguiera, Sonneratia',
        upsc: 'Rich biodiversity. Dugong (sea cow). Coral reefs adjacent. Remote but pristine.'
      },
      {
        name: 'Pichavaram Mangroves',
        lat: 11.42, lng: 79.77,
        state: 'Tamil Nadu',
        area: '~43 sq km',
        mainSpecies: 'Avicennia, Rhizophora',
        upsc: 'Second largest mangrove in India after Sundarbans. Tourist spot. Near Chidambaram.'
      },
      {
        name: 'Muthupet Mangroves',
        lat: 10.40, lng: 79.50,
        state: 'Tamil Nadu',
        area: '~68 sq km',
        mainSpecies: 'Avicennia marina',
        upsc: 'Protected under Forest Department. Bird sanctuary. Tamil Nadu.'
      },
      {
        name: 'Vembanad Mangroves',
        lat: 9.62, lng: 76.52,
        state: 'Kerala',
        area: '~50 sq km',
        mainSpecies: 'Avicennia, Rhizophora, Bruguiera',
        upsc: 'Part of backwater ecosystem. Ramsar site. Climate change and tourism pressure.'
      }
    ],

    // ── CORAL REEFS ──
    coralReefs: [
      {
        name: 'Lakshadweep Coral Reefs',
        lat: 10.56, lng: 72.64,
        type: 'Atoll reefs',
        condition: 'Moderate bleaching',
        state: 'Lakshadweep UT',
        upsc: 'Largest coral reef ecosystem in India. Atoll formation. Affected by 1998 El Nino bleaching. Protected under MNP.'
      },
      {
        name: 'Gulf of Mannar Coral',
        lat: 9.10, lng: 79.00,
        type: 'Fringing + Patch reefs',
        condition: 'Declining',
        state: 'Tamil Nadu',
        upsc: 'First Marine Biosphere Reserve. 21 islands. Dugong habitat. Sea cucumber, sea horse. UNESCO BR. Threatened by fishing, pollution, sand mining.'
      },
      {
        name: 'Andaman & Nicobar Coral',
        lat: 11.00, lng: 92.80,
        type: 'Fringing reefs',
        condition: 'Mostly healthy',
        state: 'A&N Islands',
        upsc: 'Most diverse coral reefs of India. Remote = less disturbed. Bleaching events increasing with warming. Dugong grass beds adjacent.'
      },
      {
        name: 'Gulf of Kachchh Coral',
        lat: 22.50, lng: 69.80,
        type: 'Patch reefs',
        condition: 'Recovering',
        state: 'Gujarat',
        upsc: 'Marine National Park (first in India — 1982). Northernmost coral reefs of India. Unique as they survive in harsh conditions (turbid, temperature fluctuation).'
      },
      {
        name: 'Malvan Marine Sanctuary',
        lat: 16.05, lng: 73.46,
        type: 'Patch reefs',
        condition: 'Degraded',
        state: 'Maharashtra',
        upsc: 'Restricted coral growth. North of main coral belt. Maharashtra\'s only reef system.'
      }
    ],

    // ── MIGRATORY BIRD ROUTES ──
    migratoryBirds: {
      centralAsianFlyway: {
        name: 'Central Asian Flyway (CAF)',
        color: '#00BFFF',
        path: [
          [70, 90], [65, 85], [58, 82], [50, 80],
          [43, 77], [38, 74], [34, 72],
          [28, 75], [25, 78], [22, 80], [18, 83]
        ],
        birds: 'Bar-headed Goose, Demoiselle Crane, Greater Flamingo, Siberian Crane',
        upsc: 'One of 9 global flyways. Passes through India. Connects Arctic/Central Asia to South/SE Asia.'
      },
      eastAsianFlyway: {
        name: 'East Asian Australasian Flyway',
        color: '#FF69B4',
        path: [
          [68, 135], [55, 130], [40, 128], [30, 122],
          [20, 115], [15, 108], [10, 105], [5, 103]
        ],
        birds: 'Godwits, Sandpipers, Shorebirds (NE India edge)',
        upsc: 'Partially overlaps NE India coast.'
      },
      keyWintering: [
        { name: 'Bharatpur (Keoladeo)', lat: 27.16, lng: 77.52, birds: 'Siberian Crane (historical), Greater White-fronted Goose, ducks', upsc: 'UNESCO WHS. Once received Siberian Crane — now absent. Climate change & Siberia hunting.' },
        { name: 'Chilika Lake', lat: 19.72, lng: 85.32, birds: 'Greater Flamingo, Herons, Ducks (1 million+)', upsc: 'One of Asia\'s largest wintering sites. Flamingo, bar-headed goose, pintail.' },
        { name: 'Nal Sarovar', lat: 22.78, lng: 72.01, birds: 'Flamingo, pelican, ducks, cranes', upsc: 'Gujarat. Ramsar site. Winter birds from Siberia.' },
        { name: 'Point Calimere', lat: 10.30, lng: 79.85, birds: 'Flamingo, Dunlin, Sandpiper', upsc: 'TN. Ramsar. Flamingo congregation. Blackbuck also here.' },
        { name: 'Pulicat Lake', lat: 13.65, lng: 80.22, birds: 'Flamingo, Pelican, terns', upsc: 'AP/TN. 2nd lagoon. Flamingo nesting.' },
        { name: 'Vedanthangal', lat: 12.47, lng: 79.87, birds: 'Open-billed Stork, Spoonbill, Cormorant', upsc: 'Oldest bird sanctuary in India (1798). Breeding colony. TN.' },
        { name: 'Sambhar Lake', lat: 26.92, lng: 75.08, birds: 'Flamingo (mass mortality 2019)', upsc: 'Rajasthan. Saline lake. Flamingo & migratory waders. 18,000 birds died in 2019 (Avian cholera).' },
        { name: 'Wular Lake', lat: 34.30, lng: 74.55, birds: 'Migratory ducks, geese, Osprey', upsc: 'J&K. Largest freshwater lake. Winter birds from Central Asia.' },
        { name: 'Deepor Beel', lat: 26.13, lng: 91.66, birds: 'Greater Adjutant Stork', upsc: 'Assam. Ramsar. Only breeding site of Greater Adjutant outside Bhagalpur.' },
        { name: 'Mannar coast (TN)', lat: 9.10, lng: 79.00, birds: 'Flamingo, shorebirds (NE monsoon migration)', upsc: 'Tamil Nadu coast. Gulf of Mannar. Important staging point.' }
      ],
      migratorySpecies: [
        { bird: 'Bar-headed Goose', from: 'Central Asia/Tibet', where: 'North India lakes, Brahmaputra valley', upsc: 'Flies over Himalayas at >9000m altitude. World\'s highest flying bird.' },
        { bird: 'Amur Falcon', from: 'China/Siberia to Africa', where: 'Nagaland (Doyang Lake) — world\'s largest gathering', upsc: 'Passes through Nagaland. Doyang Lake = "Falcon Capital". Mass hunting stopped — now protected by locals.' },
        { bird: 'Greater Flamingo', from: 'Central Asia/Gulf', where: 'Rann of Kachchh, Chilika, Sambhar', upsc: 'Breeds in Rann. Largest congregation in India.' },
        { bird: 'Siberian Crane', from: 'Siberia', where: 'Bharatpur (historical)', upsc: 'Critically endangered. No longer seen at Bharatpur. Possibly extinct migration to India.' },
        { bird: 'Pintail Duck', from: 'Siberia', where: 'Chilika, Bharatpur, other lakes', upsc: 'Most common wintering duck in India.' }
      ]
    },

    // ── ENDANGERED SPECIES ──
    endangeredSpecies: [
      { name: 'Bengal Tiger', lat: 22.0, lng: 80.5, status: 'Vulnerable', population: '~3682 (2022 census)', habitat: 'Terai, C India, Sundarbans', upsc: 'Project Tiger (1973). Census every 4 years. India has 70% of world tigers. NTCA.' },
      { name: 'Asiatic Lion', lat: 21.12, lng: 70.79, status: 'Endangered', population: '~700 (2023)', habitat: 'Gir Forest ONLY', upsc: 'Only wild population in Gir. SC rejected transfer to Kuno NP (2013). Now reconsidering. Genetic bottleneck.' },
      { name: 'One-horned Rhinoceros', lat: 26.58, lng: 93.37, status: 'Vulnerable', population: '~4000 globally, 2800+ in India', habitat: 'Kaziranga, Manas (Assam)', upsc: 'Kaziranga has 70% of world population. Project Rhino. Translocation to Manas successful.' },
      { name: 'Snow Leopard', lat: 32.50, lng: 77.50, status: 'Vulnerable', population: '~400-700 in India', habitat: 'Ladakh, HP, Uttarakhand, Sikkim, Arunachal', upsc: 'Project Snow Leopard. India has 10-15% of global pop. Indicator of ecosystem health. Climate change threat.' },
      { name: 'Asiatic Cheetah', lat: 24.0, lng: 78.0, status: 'Extinct in India', population: '0 in India', habitat: 'Kuno NP, Gandki Sagar (reintroduction)', upsc: 'Extinct since 1947. 20 African cheetahs from Namibia/South Africa (2022-23). Project Cheetah. Controversy over using African vs Iranian cheetahs.' },
      { name: 'Gharial', lat: 27.50, lng: 80.50, status: 'Critically Endangered', population: '~650-900', habitat: 'Chambal, Gandak, Girwa rivers', upsc: 'Only fish-eating crocodilian. Long narrow snout. Chambal River Sanctuary. National Chambal Sanctuary.' },
      { name: 'Indian Vulture', lat: 25.0, lng: 79.0, status: 'Critically Endangered', population: 'Crashed 99% since 1990s', habitat: 'Mostly North & Central India', upsc: 'Diclofenac (veterinary drug) caused collapse. Now banned. Slow recovery. Jatayu Conservation Center.' },
      { name: 'Great Indian Bustard', lat: 25.0, lng: 72.0, status: 'Critically Endangered', population: '~100 individuals', habitat: 'Rajasthan (Desert NP), Gujarat', upsc: 'State bird of Rajasthan. Power line collision. SC ordered underground cables. Prime habitat in Desert NP, Jaisalmer.' },
      { name: 'Gangetic River Dolphin', lat: 26.0, lng: 84.0, status: 'Endangered', population: '~2500-3000', habitat: 'Ganga, Brahmaputra, Chambal, Beas', upsc: 'National Aquatic Animal. Virtually blind. Echolocation. Vikramshila Gangetic Dolphin Sanctuary (Bihar).' },
      { name: 'Irrawaddy Dolphin', lat: 19.72, lng: 85.32, status: 'Endangered', population: '<100 in Chilika', habitat: 'Chilika Lake only (in India)', upsc: 'Only marine dolphin in fresh/brackish water. Chilika Lake, Odisha. Cultural significance.' },
      { name: 'Lion-tailed Macaque', lat: 11.08, lng: 76.43, status: 'Endangered', population: '~3000-4000', habitat: 'Silent Valley, Anamalai, Nilgiris (W Ghats)', upsc: 'Endemic to Western Ghats. Flagship species for Silent Valley. Black body, silver mane.' },
      { name: 'Hangul (Kashmir Stag)', lat: 34.10, lng: 74.80, status: 'Critically Endangered', population: '~300', habitat: 'Dachigam NP, Kashmir only', upsc: 'State animal of J&K. Only surviving red deer subspecies in South Asia. Dachigam NP only home.' },
      { name: 'Blackbuck', lat: 14.22, lng: 76.66, status: 'Least Concern (recovering)', population: '~50,000', habitat: 'Velavadar, Point Calimere, Tal Chhapar', upsc: 'Salman Khan case (1998-2018 legal battle). Velavadar NP (Gujarat). Bishnoi community protects in Rajasthan. Sacred for Bishnoi.' },
      { name: 'Dugong (Sea Cow)', lat: 9.10, lng: 79.00, status: 'Vulnerable', population: '<200 in India', habitat: 'Gulf of Mannar, Andaman', upsc: 'Only marine herbivore in India. Feeds on seagrass. National Aquatic Animal of Palau. Facing extinction.' }
    ]
  };


  // ══════════════════════════════════════════════════════════════
  // MAP DEFINITIONS
  // ══════════════════════════════════════════════════════════════

  const BIOGEOGRAPHY_MAPS = [

    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // MAP 046 — Vegetation Zones of India
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    {
      mapNum: 46,
      title: 'Vegetation Zones of India',
      subtitle: 'Tropical Evergreen · Deciduous · Thorn · Montane · Mangrove · Alpine',
      mapConfig: { center: [22, 80], zoom: 5, tileStyle: 'dark' },
      legend: [
        {
          sectionTitle: 'Vegetation Types',
          items: DATA.vegetationZones.map(z => ({ color: z.color, label: `${z.code} — ${z.name}` }))
        }
      ],
      info: [
        {
          title: 'VEGETATION ZONES — KEY FACTS',
          facts: DATA.vegetationZones.map(z => ({
            label: z.name,
            value: `${z.rainfall} | ${z.trees.substring(0, 50)}...`
          }))
        },
        {
          title: 'UPSC KEY POINTS',
          items: [
            'Forest cover: 21.71% of India (target: 33%)',
            'Teak — most important commercial timber (deciduous forests)',
            'Sal — 2nd most important timber. Eastern India.',
            'Mangroves — 3rd largest in world (India)',
            'Western Ghats + Eastern Himalayas = biodiversity hotspots',
            'Bugyals (Alpine meadows) — Uttarakhand, shrinking due to climate change',
            'Champion & Seth (1968) — classified India\'s forests into 16 types'
          ]
        }
      ],
      render(map, app) {
        DATA.vegetationZones.forEach(zone => {
          if (zone.coords && zone.coords.length > 3) {
            const poly = L.polygon(zone.coords, {
              color: zone.color,
              fillColor: zone.color,
              fillOpacity: 0.4,
              weight: 2
            });
            poly.bindPopup(app.buildPopup(
              `🌿 ${zone.name}`,
              `<b>Code:</b> ${zone.code}<br>
               <b>Rainfall:</b> ${zone.rainfall}<br>
               <b>Regions:</b> ${zone.regions}<br>
               <b>Trees:</b> ${zone.trees}<br>
               <b>UPSC:</b> ${zone.upsc}`,
              [zone.code, 'Vegetation']
            ));
            poly.on('mouseover', function () {
              this.setStyle({ fillOpacity: 0.65, weight: 3 });
              this.bringToFront();
            });
            poly.on('mouseout', function () {
              this.setStyle({ fillOpacity: 0.4, weight: 2 });
            });
            app.addLayer(poly);

            const centroid = zone.coords[Math.floor(zone.coords.length / 3)];
            app.addLayer(app.labelMarker(centroid, `${zone.code}\n${zone.name}`, zone.color, '9px'));
          }
        });

        // Mangrove spots
        DATA.mangroves.slice(0, 4).forEach(m => {
          const dot = L.circleMarker([m.lat, m.lng], {
            radius: 8, color: '#000', fillColor: '#2E8B57', fillOpacity: 0.9, weight: 2
          });
          dot.bindPopup(app.buildPopup(`🌱 ${m.name}`, `<b>State:</b> ${m.state}<br><b>Area:</b> ${m.area}<br><b>UPSC:</b> ${m.upsc}`, ['Mangrove']));
          app.addLayer(dot);
        });

        // Alpine bugyals
        const bugyals = L.circleMarker([30.5, 79.5], {
          radius: 10, color: '#9370DB', fillColor: '#9370DB', fillOpacity: 0.8, weight: 2
        });
        bugyals.bindPopup(app.buildPopup('Alpine Meadows (Bugyals)', 'Above 3500m. Uttarakhand. Valley of Flowers. Climate change threat.', ['Alpine']));
        app.addLayer(bugyals);
        app.addLayer(app.labelMarker([30.8, 79.5], 'BUGYALS\n(Alpine Meadows)', '#9370DB', '9px'));

        app.showToast('MAP 046 — Vegetation Zones loaded', 'success');
      }
    },

    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // MAP 047 — Wildlife Sanctuaries Map
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    {
      mapNum: 47,
      title: 'Wildlife Sanctuaries Map',
      subtitle: 'Key Sanctuaries · Flagship Species · Conservation Status',
      mapConfig: { center: [22, 80], zoom: 5, tileStyle: 'dark' },
      legend: [
        {
          sectionTitle: 'Wildlife Sanctuaries',
          items: [
            { dot: '#FF6347', label: 'Flagship WLS (UPSC Important)' },
            { dot: '#FFD700', label: 'UNESCO World Heritage Site' },
            { dot: '#00FF88', label: 'Ramsar + WLS' }
          ]
        }
      ],
      info: [
        {
          title: 'INDIA PROTECTED AREAS NETWORK',
          facts: [
            { label: 'National Parks', value: '106 (as of 2024)' },
            { label: 'Wildlife Sanctuaries', value: '567' },
            { label: 'Tiger Reserves', value: '53' },
            { label: 'Biosphere Reserves', value: '18' },
            { label: 'Total PA Coverage', value: '~5% of India\'s area' }
          ]
        },
        {
          title: 'UPSC KEY SANCTUARIES',
          items: [
            'Gir (Gujarat): ONLY wild Asiatic Lion in world',
            'Kaziranga (Assam): 70% of world\'s one-horned rhinos',
            'Keibul Lamjao (Manipur): World\'s ONLY floating NP',
            'Silent Valley (Kerala): Saved by protest movement (1973-85)',
            'Sariska (Rajasthan): All tigers poached — first successful tiger reintroduction',
            'Namdapha (Arunachal): Only park with ALL 4 big cats'
          ]
        }
      ],
      render(map, app) {
        DATA.wildlifeSanctuaries.forEach(s => {
          const isUNESCO = ['Sundarbans Tiger Reserve & WLS', 'Manas NP & WLS', 'Bharatpur Bird Sanctuary (Keoladeo)', 'Kaziranga NP & WLS'].includes(s.name);
          const isRamsar = ['Bharatpur Bird Sanctuary (Keoladeo)', 'Chilika WLS'].includes(s.name);
          const color = isUNESCO ? '#FFD700' : isRamsar ? '#00FF88' : '#FF6347';

          const marker = L.circleMarker([s.lat, s.lng], {
            radius: 9,
            color: '#000',
            fillColor: color,
            fillOpacity: 0.9,
            weight: 2
          });
          marker.bindPopup(app.buildPopup(
            `🦁 ${s.name}`,
            `<b>State:</b> ${s.state}<br>
             <b>Flagship:</b> ${s.animal}<br>
             <b>Area:</b> ${s.area}<br>
             <b>UPSC:</b> ${s.upsc}`,
            [s.animal, s.state]
          ));
          marker.on('mouseover', function () { this.setRadius(12); this.bringToFront(); });
          marker.on('mouseout', function () { this.setRadius(9); });
          app.addLayer(marker);
          app.addLayer(app.labelMarker([s.lat + 0.25, s.lng], s.name, color, '8px'));
        });

        const note = L.divIcon({
          className: '',
          html: `<div style="background:rgba(0,0,0,0.85);border:1px solid #FF6347;
            border-radius:10px;padding:10px;font-size:9px;color:#FF6347;
            max-width:220px;line-height:1.5;font-family:Inter,sans-serif">
            <b style="color:#FFD700">🦁 PROTECTED AREAS INDIA</b><br>
            106 National Parks<br>567 Wildlife Sanctuaries<br>
            53 Tiger Reserves<br>18 Biosphere Reserves<br>
            <span style="color:#aaa">Total: ~5% of India</span></div>`,
          iconAnchor: [0, 0]
        });
        app.addLayer(L.marker([9, 70], { icon: note, interactive: false }));
        app.showToast('MAP 047 — Wildlife Sanctuaries loaded', 'success');
      }
    },

    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // MAP 048 — Biosphere Reserves of India
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    {
      mapNum: 48,
      title: 'Biosphere Reserves of India',
      subtitle: 'All 18 Biosphere Reserves · UNESCO Recognized · Location & Year',
      mapConfig: { center: [22, 80], zoom: 5, tileStyle: 'dark' },
      legend: [
        {
          sectionTitle: 'Biosphere Reserves',
          items: [
            { dot: '#FFD700', label: 'UNESCO MAB Recognized (12)' },
            { dot: '#00FF88', label: 'Non-UNESCO BR (6)' }
          ]
        }
      ],
      info: [
        {
          title: 'BIOSPHERE RESERVES',
          facts: [
            { label: 'Total in India', value: '18 Biosphere Reserves' },
            { label: 'UNESCO Recognized', value: '12 under MAB (Man & Biosphere) Programme' },
            { label: 'First', value: 'Nilgiri BR (1986)' },
            { label: 'Latest', value: 'Panna BR (2011) and others' },
            { label: 'Largest', value: 'Gulf of Mannar BR' }
          ]
        },
        {
          title: 'BR ZONES (3 Zones)',
          items: [
            'CORE Zone: Strictly protected. No human activity.',
            'BUFFER Zone: Limited research & eco-tourism.',
            'TRANSITION Zone: Human settlement, sustainable use.',
            'UNESCO MAB Programme — Man and Biosphere',
            'Indian BR covering ~10% of forest area',
            'Nilgiri — first & largest. TN + Kerala + Karnataka.'
          ]
        }
      ],
      render(map, app) {
        DATA.biosphereReserves.forEach(br => {
          const color = br.unesco ? '#FFD700' : '#00FF88';
          const radius = br.unesco ? 10 : 8;

          const marker = L.circleMarker([br.lat, br.lng], {
            radius,
            color: '#000',
            fillColor: color,
            fillOpacity: 0.9,
            weight: 2
          });
          marker.bindPopup(app.buildPopup(
            `🌿 ${br.name}`,
            `<b>State:</b> ${br.state}<br>
             <b>Year:</b> ${br.year}<br>
             <b>UNESCO:</b> ${br.unesco ? '✅ Yes (MAB)' : '❌ Not yet'}<br>
             <b>UPSC:</b> ${br.upsc}`,
            [br.unesco ? 'UNESCO MAB' : 'National BR', br.state]
          ));
          marker.on('mouseover', function () { this.setRadius(radius + 3); });
          marker.on('mouseout', function () { this.setRadius(radius); });
          app.addLayer(marker);
          app.addLayer(app.labelMarker(
            [br.lat + 0.25, br.lng],
            `${br.name}\n(${br.year}${br.unesco ? ' 🌐' : ''})`,
            color,
            '8px'
          ));
        });

        // UNESCO count box
        const unescoNote = L.divIcon({
          className: '',
          html: `<div style="background:rgba(0,0,0,0.85);border:2px solid #FFD700;
            border-radius:10px;padding:10px 14px;font-size:9px;color:#FFD700;
            max-width:230px;line-height:1.5;font-family:Inter,sans-serif">
            <b style="font-size:11px">🌿 BIOSPHERE RESERVES: 18</b><br>
            <span style="color:#00FF88">UNESCO MAB: 12</span><br>
            Non-UNESCO: 6<br>
            First: Nilgiri (1986)<br>
            <span style="color:#aaa">3 Zones: Core + Buffer + Transition</span>
          </div>`,
          iconAnchor: [0, 0]
        });
        app.addLayer(L.marker([8.5, 69], { icon: unescoNote, interactive: false }));
        app.showToast('MAP 048 — Biosphere Reserves loaded', 'success');
      }
    },

    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // MAP 049 — Mangrove Distribution Map
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    {
      mapNum: 49,
      title: 'Mangrove Distribution Map',
      subtitle: 'Sundarbans · Godavari-Krishna · Bhitarkanika · Kachchh · Andaman',
      mapConfig: { center: [18, 80], zoom: 5, tileStyle: 'dark' },
      legend: [
        {
          sectionTitle: 'Mangrove Zones',
          items: [
            { dot: '#006400', label: 'Sundarbans (World\'s Largest)' },
            { dot: '#228B22', label: 'Major Mangroves' },
            { dot: '#90EE90', label: 'Minor / Fringe Mangroves' }
          ]
        }
      ],
      info: [
        {
          title: 'MANGROVES IN INDIA',
          facts: [
            { label: 'Total Area', value: '4,992 sq km (2021 assessment)' },
            { label: 'Global Rank', value: '3rd largest mangrove area globally' },
            { label: 'Trend', value: 'Increasing since 2019 (conservation success)' },
            { label: 'Main Threat', value: 'Aquaculture, coastal development, sea level rise' }
          ]
        },
        {
          title: 'UPSC KEY FACTS',
          items: [
            'Sundarbans = world\'s largest single mangrove forest (10,000 sq km)',
            'Sundari tree (Heritiera fomes) = name source of Sundarbans',
            'Mangroves have pneumatophores (breathing roots) — stilt roots',
            'Salt-tolerant (halophytes) — viviparous seeds (germinate on tree)',
            'Natural coastal barrier — reduced tsunami damage in 2004',
            'Bhitarkanika (Odisha) — largest saltwater crocodile population',
            'Pichavaram (TN) — 2nd largest mangroves, boat rides popular',
            'Kochi backwaters + mangroves = crucial for Kerala fisheries'
          ]
        }
      ],
      render(map, app) {
        DATA.mangroves.forEach(m => {
          const isSundarbans = m.name === 'Sundarbans';
          const color = isSundarbans ? '#006400' : m.area.includes('1000') || m.area.includes('800') ? '#228B22' : '#90EE90';
          const radius = isSundarbans ? 15 : 10;

          const marker = L.circleMarker([m.lat, m.lng], {
            radius,
            color: '#000',
            fillColor: color,
            fillOpacity: 0.9,
            weight: 2
          });
          marker.bindPopup(app.buildPopup(
            `🌱 ${m.name}`,
            `<b>State:</b> ${m.state}<br>
             <b>Area:</b> ${m.area}<br>
             <b>Main Species:</b> ${m.mainSpecies}<br>
             <b>UPSC:</b> ${m.upsc}`,
            ['Mangrove', m.state]
          ));
          marker.on('mouseover', function () { this.setRadius(radius + 3); });
          marker.on('mouseout', function () { this.setRadius(radius); });
          app.addLayer(marker);

          const sizeLabel = m.area ? `(${m.area})` : '';
          app.addLayer(app.labelMarker(
            [m.lat + 0.3, m.lng],
            `🌱 ${m.name}\n${sizeLabel}`,
            color,
            '9px'
          ));
        });

        // Sundarbans special zone
        const sundZone = L.polygon([
          [22.5, 88.0], [22.5, 89.5], [21.5, 90.0],
          [21.0, 89.5], [21.0, 88.5], [22.0, 88.0], [22.5, 88.0]
        ], {
          color: '#006400',
          fillColor: '#006400',
          fillOpacity: 0.2,
          weight: 2,
          dashArray: '5,5'
        });
        sundZone.bindPopup(app.buildPopup(
          '🌱 SUNDARBANS',
          'World\'s Largest Mangrove. UNESCO WHS. Royal Bengal Tiger. 10,000 sq km total.',
          ['UNESCO', 'Tiger', 'Mangrove']
        ));
        app.addLayer(sundZone);

        // Ecosystem services note
        const ecoNote = L.divIcon({
          className: '',
          html: `<div style="background:rgba(0,0,0,0.85);border:1px solid #228B22;
            border-radius:10px;padding:10px;font-size:9px;color:#90EE90;
            max-width:200px;line-height:1.5;font-family:Inter,sans-serif">
            <b style="color:#FFD700">🌱 MANGROVE SERVICES</b><br>
            ✅ Coastal storm protection<br>
            ✅ Carbon sequestration (Blue Carbon)<br>
            ✅ Fish nursery ground<br>
            ✅ Reduced tsunami damage<br>
            <span style="color:#aaa">India: 4,992 sq km (3rd globally)</span>
          </div>`,
          iconAnchor: [0, 0]
        });
        app.addLayer(L.marker([8, 69], { icon: ecoNote, interactive: false }));
        app.showToast('MAP 049 — Mangrove Distribution loaded', 'success');
      }
    },

    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // MAP 050 — Coral Reefs of India Map
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    {
      mapNum: 50,
      title: 'Coral Reefs of India Map',
      subtitle: 'Lakshadweep · Gulf of Mannar · Andaman · Gulf of Kachchh',
      mapConfig: { center: [13, 80], zoom: 5, tileStyle: 'dark' },
      legend: [
        {
          sectionTitle: 'Coral Reef Status',
          items: [
            { dot: '#FF6347', label: 'Severely Degraded' },
            { dot: '#FFA500', label: 'Moderate Bleaching' },
            { dot: '#00FF88', label: 'Mostly Healthy' },
            { dot: '#00BFFF', label: 'Recovering' }
          ]
        }
      ],
      info: [
        {
          title: 'CORAL REEFS IN INDIA',
          facts: [
            { label: 'Location', value: '4 major areas: Lakshadweep, Gulf of Mannar, Andaman & Nicobar, Gulf of Kachchh' },
            { label: 'Total Area', value: '~2375 sq km' },
            { label: 'Bleaching', value: '1998 El Nino caused mass bleaching (up to 70-90% in Lakshadweep)' },
            { label: 'Temperature', value: 'Coral bleaching occurs when SST rises >1°C above normal for 3-4 weeks' }
          ]
        },
        {
          title: 'UPSC KEY FACTS',
          items: [
            'Coral bleaching: coral expels algae (zooxanthellae) when stressed → turns white',
            'Zooxanthellae provide 90% of coral nutrition through photosynthesis',
            'Acidification: CO2 dissolves → carbonic acid → dissolves coral skeleton (aragonite)',
            'Gulf of Kachchh — Marine NP (1982) — first in India',
            'Gulf of Mannar — Marine Biosphere Reserve. Dugong habitat.',
            'Andaman reefs most pristine due to remoteness',
            'Lakshadweep reefs under threat from Indian Ocean warming',
            'Coral Triangle (Pacific) — most diverse in world; India\'s reefs are marginal'
          ]
        }
      ],
      render(map, app) {
        DATA.coralReefs.forEach(reef => {
          const conditionColors = {
            'Mostly healthy': '#00FF88',
            'Moderate bleaching': '#FFA500',
            'Declining': '#FF6347',
            'Recovering': '#00BFFF',
            'Degraded': '#FF4444'
          };
          const color = conditionColors[reef.condition] || '#FFFFFF';
          const radius = 12;

          const marker = L.circleMarker([reef.lat, reef.lng], {
            radius,
            color: '#000',
            fillColor: color,
            fillOpacity: 0.9,
            weight: 2
          });
          marker.bindPopup(app.buildPopup(
            `🪸 ${reef.name}`,
            `<b>Type:</b> ${reef.type}<br>
             <b>Condition:</b> ${reef.condition}<br>
             <b>State:</b> ${reef.state}<br>
             <b>UPSC:</b> ${reef.upsc}`,
            ['Coral', reef.condition, reef.state]
          ));
          marker.on('mouseover', function () { this.setRadius(15); });
          marker.on('mouseout', function () { this.setRadius(12); });
          app.addLayer(marker);
          app.addLayer(app.labelMarker(
            [reef.lat + 0.3, reef.lng],
            `🪸 ${reef.name}\n(${reef.condition})`,
            color,
            '8px'
          ));
        });

        // Bleaching threat zone
        const bleachZone = L.polygon([
          [8, 70], [12, 70], [14, 74], [10, 76],
          [8, 77.5], [5, 75], [5, 72], [8, 70]
        ], {
          color: '#FF4444',
          fillColor: '#FF4444',
          fillOpacity: 0.08,
          weight: 1.5,
          dashArray: '6,4'
        });
        bleachZone.bindPopup(app.buildPopup(
          '⚠ Bleaching Risk Zone',
          'Indian Ocean warming. SST rise. Lakshadweep vulnerable.',
          ['Bleaching', 'Climate Change']
        ));
        app.addLayer(bleachZone);

        // Zooxanthellae info
        const infoNote = L.divIcon({
          className: '',
          html: `<div style="background:rgba(0,0,0,0.85);border:1px solid #FFA500;
            border-radius:10px;padding:10px;font-size:9px;color:#FFA500;
            max-width:220px;line-height:1.5;font-family:Inter,sans-serif">
            <b style="color:#FFD700">🪸 CORAL BLEACHING</b><br>
            SST rises >1°C → coral stressed<br>
            → Expels zooxanthellae algae<br>
            → Coral turns white (bleaches)<br>
            → Death if prolonged<br>
            <span style="color:#aaa">1998 El Nino: 70-90% bleaching in Lakshadweep</span>
          </div>`,
          iconAnchor: [0, 0]
        });
        app.addLayer(L.marker([5, 69], { icon: infoNote, interactive: false }));
        app.showToast('MAP 050 — Coral Reefs loaded', 'success');
      }
    },

    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // MAP 051 — Migratory Birds Route Map
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    {
      mapNum: 51,
      title: 'Migratory Birds Route Map',
      subtitle: 'Central Asian Flyway · Key Wintering Sites · Notable Species',
      mapConfig: { center: [28, 82], zoom: 4, tileStyle: 'dark' },
      legend: [
        {
          sectionTitle: 'Flyways',
          items: [
            { line: '#00BFFF', label: 'Central Asian Flyway (Main)' },
            { line: '#FF69B4', label: 'East Asian Australasian Flyway' }
          ]
        },
        {
          sectionTitle: 'Sites',
          items: [
            { dot: '#FFD700', label: 'Key Wintering Sites' },
            { dot: '#00FF88', label: 'Ramsar + Wintering Sites' }
          ]
        }
      ],
      info: [
        {
          title: 'CENTRAL ASIAN FLYWAY',
          facts: [
            { label: 'Coverage', value: 'Arctic/Central Asia → South/SE Asia' },
            { label: 'Species', value: '500+ migratory bird species use this flyway' },
            { label: 'Key Route', value: 'Russia/Siberia → Kazakhstan → Afghanistan → India' },
            { label: 'India Hosts', value: '~350 migratory species annually' }
          ]
        },
        {
          title: 'NOTABLE MIGRANTS',
          items: [
            'Bar-headed Goose: Flies over Himalayas at 9000m+ altitude',
            'Amur Falcon: Nagaland (Doyang Lake) — world\'s largest gathering. 100,000+ birds.',
            'Flamingo: Rann of Kachchh, Chilika, Sambhar Lake',
            'Siberian Crane: Critically endangered. No longer seen at Bharatpur (extinct from India route?)',
            'Pintail Duck: Most common migrant to India',
            'Rosy Pelican: Chilika Lake in thousands',
            'World Migratory Bird Day: 2nd Saturday of May & October'
          ]
        }
      ],
      render(map, app) {
        // Central Asian Flyway
        const cafLine = L.polyline(DATA.migratoryBirds.centralAsianFlyway.path, {
          color: '#00BFFF', weight: 3, opacity: 0.75
        });
        cafLine.bindPopup(app.buildPopup(
          '✈ Central Asian Flyway',
          `<b>Birds:</b> ${DATA.migratoryBirds.centralAsianFlyway.birds}<br><b>UPSC:</b> ${DATA.migratoryBirds.centralAsianFlyway.upsc}`,
          ['Flyway', 'Migration']
        ));
        app.addLayer(cafLine);

        // Arrow markers along flyway
        DATA.migratoryBirds.centralAsianFlyway.path.forEach((pt, idx) => {
          if (idx % 2 === 0 && idx > 0) {
            const arrowIcon = L.divIcon({
              className: '',
              html: `<div style="color:#00BFFF;font-size:14px">▼</div>`,
              iconAnchor: [7, 7]
            });
            app.addLayer(L.marker(pt, { icon: arrowIcon, interactive: false }));
          }
        });
        app.addLayer(app.labelMarker([70, 90], '🦢 ARCTIC / SIBERIA\n(Summer breeding ground)', '#00BFFF', '10px'));
        app.addLayer(app.labelMarker([20, 79], '🦢 INDIA\n(Winter habitat)', '#00BFFF', '10px'));

        // Wintering sites
        DATA.migratoryBirds.keyWintering.forEach(site => {
          const isRamsar = site.name.includes('Chilika') || site.name.includes('Bharatpur') || site.name.includes('Sambhar');
          const color = isRamsar ? '#00FF88' : '#FFD700';

          const marker = L.circleMarker([site.lat, site.lng], {
            radius: 8,
            color: '#000',
            fillColor: color,
            fillOpacity: 0.9,
            weight: 2
          });
          marker.bindPopup(app.buildPopup(
            `🦢 ${site.name}`,
            `<b>Birds:</b> ${site.birds}<br><b>UPSC:</b> ${site.upsc}`,
            ['Wintering', 'Migratory Birds']
          ));
          app.addLayer(marker);
          app.addLayer(app.labelMarker([site.lat + 0.2, site.lng], site.name, color, '8px'));
        });

        // Amur Falcon highlight
        const amurFalcon = L.circleMarker([25.60, 93.50], {
          radius: 12,
          color: '#FF6347',
          fillColor: '#FF6347',
          fillOpacity: 0.8,
          weight: 3
        });
        amurFalcon.bindPopup(app.buildPopup(
          '🦅 Amur Falcon — Nagaland',
          'World\'s largest gathering of single raptor species. 100,000+ birds. Doyang Lake. Mass hunting stopped by Tangkhul Naga tribe.',
          ['Amur Falcon', 'Conservation Success']
        ));
        app.addLayer(amurFalcon);
        app.addLayer(app.labelMarker([25.9, 93.5], '🦅 AMUR FALCON\n(Doyang Lake, Nagaland)\nWorld\'s Largest Gathering', '#FF6347', '9px'));

        app.showToast('MAP 051 — Migratory Birds loaded', 'success');
      }
    },

    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // MAP 052 — Endangered Species Distribution
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    {
      mapNum: 52,
      title: 'Endangered Species Distribution Map',
      subtitle: 'Tiger · Asiatic Lion · Rhino · Snow Leopard · Gharial · Bustard · Dolphins',
      mapConfig: { center: [22, 80], zoom: 5, tileStyle: 'dark' },
      legend: [
        {
          sectionTitle: 'IUCN Status',
          items: [
            { dot: '#FF0000', label: 'Critically Endangered (CR)' },
            { dot: '#FF6347', label: 'Endangered (EN)' },
            { dot: '#FFA500', label: 'Vulnerable (VU)' },
            { dot: '#AAAAAA', label: 'Extinct in India' }
          ]
        }
      ],
      info: [
        {
          title: 'IUCN STATUS CATEGORIES',
          facts: [
            { label: 'CR (Critically Endangered)', value: 'Gharial, Great Indian Bustard, Hangul, Indian Vulture' },
            { label: 'EN (Endangered)', value: 'Asiatic Lion, Gangetic Dolphin, Irrawaddy Dolphin, Lion-tailed Macaque' },
            { label: 'VU (Vulnerable)', value: 'Bengal Tiger, Snow Leopard, One-horned Rhino, Dugong' },
            { label: 'Extinct in India', value: 'Asiatic Cheetah (reintroduced as African Cheetah 2022)' }
          ]
        },
        {
          title: 'CONSERVATION PROJECTS',
          items: [
            'Project Tiger (1973) — 53 tiger reserves, 3682 tigers',
            'Project Elephant (1992) — 30 elephant reserves',
            'Project Snow Leopard (2009)',
            'Project Cheetah (2022) — African cheetahs in Kuno NP',
            'Project Vulture — ban on diclofenac, Jatayu centers',
            'Project Dolphin — Gangetic + Irrawaddy',
            'Sea Turtle Conservation — Olive Ridley at Bhitarkanika, Gahirmatha',
            'Great Indian Bustard — SC ordered underground power lines in habitat'
          ]
        }
      ],
      render(map, app) {
        const iucnColors = {
          'Critically Endangered': '#FF0000',
          'Endangered': '#FF6347',
          'Vulnerable': '#FFA500',
          'Least Concern (recovering)': '#00FF88',
          'Extinct in India': '#AAAAAA'
        };

        DATA.endangeredSpecies.forEach(sp => {
          const color = iucnColors[sp.status] || '#FFFFFF';
          const isExtinct = sp.status === 'Extinct in India';
          const radius = sp.status === 'Critically Endangered' ? 11 : 9;

          const marker = L.circleMarker([sp.lat, sp.lng], {
            radius,
            color: '#000',
            fillColor: color,
            fillOpacity: isExtinct ? 0.5 : 0.9,
            weight: 2,
            dashArray: isExtinct ? '4,3' : null
          });
          marker.bindPopup(app.buildPopup(
            `🦁 ${sp.name}`,
            `<b>IUCN Status:</b> ${sp.status}<br>
             <b>Population:</b> ${sp.population}<br>
             <b>Habitat:</b> ${sp.habitat}<br>
             <b>UPSC:</b> ${sp.upsc}`,
            [sp.status]
          ));
          marker.on('mouseover', function () { this.setRadius(radius + 4); this.bringToFront(); });
          marker.on('mouseout', function () { this.setRadius(radius); });
          app.addLayer(marker);
          app.addLayer(app.labelMarker(
            [sp.lat + 0.3, sp.lng],
            `${sp.name}\n(${sp.population})`,
            color,
            '8px'
          ));
        });

        // Cheetah reintroduction note
        const cheetahNote = L.divIcon({
          className: '',
          html: `<div style="background:rgba(0,0,0,0.85);border:2px solid #AAAAAA;
            border-radius:10px;padding:10px;font-size:9px;color:#AAAAAA;
            max-width:230px;line-height:1.5;font-family:Inter,sans-serif">
            <b style="color:#FFD700">🐆 PROJECT CHEETAH (2022)</b><br>
            20 African Cheetahs released<br>
            Namibia (8) + South Africa (12)<br>
            Location: Kuno NP, Madhya Pradesh<br>
            <span style="color:#FF6347">Status: Mixed results. 5+ deaths.</span><br>
            Debate: African vs Iranian cheetah
          </div>`,
          iconAnchor: [0, 0]
        });
        app.addLayer(L.marker([8, 73], { icon: cheetahNote, interactive: false }));
        app.showToast('MAP 052 — Endangered Species loaded', 'success');
      }
    }

  ]; // END BIOGEOGRAPHY_MAPS

  // ══════════════════════════════════════════════════════════════
  // REGISTER
  // ══════════════════════════════════════════════════════════════
  window.registerMaps('biogeography', BIOGEOGRAPHY_MAPS);
  console.log('🌿 Biogeography Maps: 7 maps registered (MAP 046-052)');

})();
