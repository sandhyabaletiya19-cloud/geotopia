/**
 * ═══════════════════════════════════════════════════════════════
 * DHARAVERSE UPSC MAPS — GEOMORPHOLOGY
 * MAP 065 to MAP 072 | Tectonic Plates · Indian Plate · Geological Age
 * Rock Types · Fault Lines · Soil Erosion · Landforms · Glacier Retreat
 * Version 2026 | Gateway to IAS
 * ═══════════════════════════════════════════════════════════════
 */

(function () {

  const DATA = {

    // ── TECTONIC PLATES (WORLD) ──
    tectonicPlates: {
      major: [
        {
          name: 'Pacific Plate',
          type: 'Oceanic',
          area: '103.3 million sq km',
          color: '#1E90FF',
          center: [0, -160],
          movement: 'NW at ~7-11 cm/yr',
          boundary: 'Convergent (Ring of Fire on all sides)',
          upsc: 'Largest tectonic plate. Surrounded by subduction zones (Ring of Fire). Deepest trench: Mariana (on this plate boundary).'
        },
        {
          name: 'North American Plate',
          type: 'Continental + Oceanic',
          area: '75.9 million sq km',
          color: '#228B22',
          center: [45, -100],
          movement: 'W at ~2.3 cm/yr',
          boundary: 'Divergent (Mid-Atlantic Ridge E), Transform (San Andreas W)',
          upsc: 'Includes Greenland. San Andreas Fault: Transform boundary with Pacific Plate. Divergent with Eurasian at Mid-Atlantic Ridge.'
        },
        {
          name: 'Eurasian Plate',
          type: 'Continental + Oceanic',
          area: '67.8 million sq km',
          color: '#DAA520',
          center: [50, 80],
          movement: 'E at ~2.1 cm/yr',
          boundary: 'Convergent (Himalayan collision with Indian), Divergent (Mid-Atlantic W)',
          upsc: 'Collision with Indian Plate formed Himalayas. Contains Alps (African collision). Ural Mts separate it from N American (arbitrary).'
        },
        {
          name: 'African Plate',
          type: 'Continental + Oceanic',
          area: '61.3 million sq km',
          color: '#FF8C00',
          center: [5, 20],
          movement: 'NE at ~2.15 cm/yr',
          boundary: 'Divergent (East African Rift, Mid-Atlantic Ridge), Convergent (Alps with Eurasian)',
          upsc: 'East African Rift Valley: plate splitting. Great Rift lakes. Future ocean between Somali and Nubian sub-plates. Alps formed by Africa-Eurasia collision.'
        },
        {
          name: 'Antarctic Plate',
          type: 'Continental + Oceanic',
          area: '60.9 million sq km',
          color: '#B0C4DE',
          center: [-80, 0],
          movement: 'Rotating slowly',
          boundary: 'Divergent on all sides (surrounded by mid-ocean ridges)',
          upsc: 'Almost entirely surrounded by divergent boundaries. Antarctic ice sheet on it. Was part of Gondwanaland.'
        },
        {
          name: 'Indo-Australian Plate',
          type: 'Continental + Oceanic',
          area: '58.9 million sq km',
          color: '#FF6347',
          center: [-25, 130],
          movement: 'NE at ~6-7 cm/yr (Indian portion fastest)',
          boundary: 'Convergent (Indian→Eurasian = Himalayas), Convergent (Pacific→Australian = NZ Alps)',
          upsc: 'Now considered as TWO separate plates: Indian Plate & Australian Plate. Indian Plate moving NE at ~5 cm/yr — fastest continental plate. Himalayan orogeny ongoing.'
        },
        {
          name: 'South American Plate',
          type: 'Continental + Oceanic',
          area: '43.6 million sq km',
          color: '#32CD32',
          center: [-15, -55],
          movement: 'W at ~2.7 cm/yr',
          boundary: 'Divergent (Mid-Atlantic Ridge E), Convergent (Nazca subducting W = Andes)',
          upsc: 'Nazca Plate subducting → formed Andes (longest mountain range). Divergent with African → Atlantic widening 2.5 cm/yr.'
        }
      ],
      minor: [
        { name: 'Nazca Plate', center: [-20, -100], color: '#9370DB', upsc: 'Subducting under S American → Andes. Also drives volcanic activity. Peru-Chile Trench.' },
        { name: 'Caribbean Plate', center: [15, -75], color: '#20B2AA', upsc: 'Small plate. Caribbean Islands. Seismically active.' },
        { name: 'Philippine Sea Plate', center: [15, 135], color: '#BA55D3', upsc: 'Surrounded by subduction zones. Mariana Trench on its eastern edge.' },
        { name: 'Arabian Plate', center: [25, 45], color: '#CD853F', upsc: 'Rifting from African (Red Sea opening). Colliding with Eurasian (Zagros Mts). Oil-rich sedimentary basins.' },
        { name: 'Indian Plate', center: [22, 78], color: '#FF4500', upsc: 'Separated from Australian ~3 MYA. Moving NE at ~5 cm/yr. Collision with Eurasian = Himalayas. Fastest moving continental plate.' },
        { name: 'Cocos Plate', center: [10, -105], color: '#4682B4', upsc: 'Subducting under Caribbean and N American plates. Mexican earthquakes.' },
        { name: 'Juan de Fuca Plate', center: [46, -128], color: '#5F9EA0', upsc: 'Remnant of Farallon Plate. Subducting under N American. Cascadia subduction zone — mega-earthquake risk.' },
        { name: 'Scotia Plate', center: [-58, -45], color: '#708090', upsc: 'Between S American and Antarctic. Scotia Arc. Active subduction.' }
      ],
      boundaries: {
        types: [
          { type: 'Convergent (Destructive)', symbol: '→←', color: '#FF0000', result: 'Subduction zones, fold mountains, trenches, volcanic arcs', examples: 'Himalayas (continental-continental), Andes (oceanic-continental), Mariana (oceanic-oceanic)' },
          { type: 'Divergent (Constructive)', symbol: '←→', color: '#00FF88', result: 'Mid-ocean ridges, rift valleys, new crust formation', examples: 'Mid-Atlantic Ridge, East African Rift, Iceland' },
          { type: 'Transform (Conservative)', symbol: '↔', color: '#FFD700', result: 'Earthquakes, no volcanic activity, lateral sliding', examples: 'San Andreas Fault, Dead Sea Transform, Alpine Fault (NZ)' }
        ]
      }
    },

    // ── INDIAN PLATE MOVEMENT ──
    indianPlateMovement: {
      stages: [
        { age: '225 MYA (Triassic)', lat: -60, lng: 70, label: 'Part of Gondwanaland (Supercontinent)', color: '#FF6347' },
        { age: '180 MYA (Jurassic)', lat: -50, lng: 72, label: 'Gondwana begins breaking up', color: '#FF8C00' },
        { age: '135 MYA (Cretaceous)', lat: -40, lng: 74, label: 'India separates from Africa & Antarctica', color: '#FFA500' },
        { age: '80 MYA', lat: -20, lng: 76, label: 'India drifting northward rapidly', color: '#FFD700' },
        { age: '55 MYA (Eocene)', lat: 0, lng: 78, label: 'Approaching Eurasian Plate. Tethys Sea closing.', color: '#ADFF2F' },
        { age: '40 MYA', lat: 10, lng: 79, label: 'Initial collision begins. Tethys sediments uplifted.', color: '#00FF88' },
        { age: '20 MYA (Miocene)', lat: 20, lng: 80, label: 'Himalayas rising. Full collision.', color: '#00BFFF' },
        { age: 'Present', lat: 22, lng: 82, label: 'Current position. Still moving N at ~5 cm/yr.', color: '#FFFFFF' }
      ],
      gondwanaComponents: [
        { name: 'South America', color: '#32CD32' },
        { name: 'Africa', color: '#FF8C00' },
        { name: 'India', color: '#FF4500' },
        { name: 'Antarctica', color: '#B0C4DE' },
        { name: 'Australia', color: '#DAA520' },
        { name: 'Madagascar', color: '#DDA0DD' }
      ],
      tethysSea: {
        description: 'Ancient ocean between Laurasia (N) and Gondwana (S)',
        upsc: 'Tethys sediments uplifted to form Himalayan sedimentary rocks. Fossils of marine creatures found at 8000m+ in Himalayas.',
        fossils: 'Ammonites, marine fish, sea shells found in Himalayan rocks — proof of Tethys Sea.'
      },
      currentMovement: {
        rate: '~5 cm/yr (50 mm/yr) toward NE',
        direction: 'N20°E approximately',
        consequences: [
          'Himalayas rising ~5 mm/year',
          'Frequent earthquakes along Himalayan arc',
          'Tibetan Plateau thickening (double crustal thickness)',
          'Indo-Gangetic Plain subsiding (weight of sediment)',
          'Earthquake risk increasing for Delhi, entire N India'
        ]
      }
    },

    // ── GEOLOGICAL AGES — INDIA ──
    geologicalAges: [
      {
        era: 'Archean (Pre-Cambrian)',
        age: '>2500 MYA',
        color: '#4B0082',
        regions: 'Peninsular Shield — Bundelkhand, Aravalli (basal), Dharwar, Singhbhum',
        rocks: 'Gneiss, Schist, Granite — oldest rocks of India',
        coords: [
          [26, 73], [25, 76], [23, 78], [22, 80],
          [21, 82], [20, 84], [18, 83], [16, 82],
          [14, 80], [12, 78], [11, 77], [13, 76],
          [15, 75], [17, 74], [20, 73], [22, 73],
          [24, 73], [26, 73]
        ],
        upsc: 'Oldest rocks in India. Peninsula is stable craton. Contains all mineral deposits — iron, gold, manganese, mica. Not folded (already folded in Pre-Cambrian). Dharwar System — gold, manganese.'
      },
      {
        era: 'Proterozoic (Cuddapah + Vindhyan)',
        age: '2500-541 MYA',
        color: '#800080',
        regions: 'Cuddapah Basin (AP), Vindhyan Ranges (MP, UP), Chhattisgarh basin',
        rocks: 'Sandstone, Limestone, Shale — sedimentary. Diamonds (Panna)',
        coords: [
          [25.5, 78], [25, 80], [24.5, 82], [23, 82],
          [22, 80], [22, 78], [23, 77], [25, 77], [25.5, 78]
        ],
        upsc: 'Vindhyan System: famous for limestone (cement industry), sandstone (building). Panna diamonds from Vindhyan rocks. Bhander series: red sandstone (Red Fort, Agra Fort).'
      },
      {
        era: 'Paleozoic (Cambrian to Permian)',
        age: '541-252 MYA',
        color: '#006400',
        regions: 'Kashmir (Pir Panjal), Salt Range (now Pakistan), Spiti Valley',
        rocks: 'Marine fossils, limestone, spilite',
        coords: [],
        upsc: 'Limited exposure in India. Found mainly in Kashmir and Spiti Valley (HP). Trilobite fossils. Gondwana rocks begin forming at end of this era.'
      },
      {
        era: 'Mesozoic (Gondwana System)',
        age: '252-66 MYA',
        color: '#8B4513',
        regions: 'Damodar Valley, Son Valley, Mahanadi Valley, Godavari Valley',
        rocks: 'Sandstone, Shale — contains 98% of India\'s coal deposits',
        coords: [
          [24, 82], [24, 86], [23, 87], [22, 86],
          [21, 85], [20, 83], [19, 81], [20, 80],
          [21, 81], [22, 82], [23, 83], [24, 82]
        ],
        upsc: 'Gondwana rocks — named after Gond tribal area. Contains 98% of India\'s coal. Glossopteris flora fossils prove Gondwanaland theory. Alfred Wegener used this evidence.'
      },
      {
        era: 'Late Cretaceous-Eocene (Deccan Traps)',
        age: '66-55 MYA',
        color: '#2F4F4F',
        regions: 'Maharashtra, Gujarat, MP, Karnataka (N), parts of AP & Rajasthan',
        rocks: 'Basalt lava flows — up to 3000m thick in some areas',
        coords: [
          [23, 73], [24, 76], [23, 79], [22, 80],
          [20, 79], [18, 77], [16, 76], [15, 75],
          [17, 74], [19, 73], [21, 73], [23, 73]
        ],
        upsc: 'Largest volcanic eruption in Earth\'s recent history. Coincided with K-T extinction (dinosaur extinction). Formed black cotton soil (regur). Mumbai sits on Deccan Traps basalt.'
      },
      {
        era: 'Cenozoic (Tertiary & Quaternary)',
        age: '66 MYA - Present',
        color: '#DAA520',
        regions: 'Himalayas, Indo-Gangetic Plain, Coastal areas, Alluvial deposits',
        rocks: 'Sedimentary — alluvium, laterite, limestone (Shivalik), Himalayan metamorphics',
        coords: [
          [35, 74], [35, 88], [33, 94], [30, 97],
          [27, 95], [26, 92], [27, 88], [28, 84],
          [29.5, 80], [31, 77], [34, 75], [35, 74]
        ],
        upsc: 'Himalayas formed in this era (Tertiary). Shivalik hills — youngest Himalayan range, fossil of Sivapithecus (ape). Quaternary — Indo-Gangetic alluvium. Most recent. Still forming.'
      }
    ],

    // ── ROCK TYPES DISTRIBUTION ──
    rockTypes: [
      {
        type: 'Igneous (Volcanic)',
        subtype: 'Extrusive (Basalt)',
        color: '#2F4F4F',
        regions: 'Deccan Traps — Maharashtra, Gujarat, MP, Karnataka(N)',
        area: '5 lakh sq km covered by basalt',
        center: [20, 76],
        upsc: 'Deccan Traps: world\'s largest volcanic province. Basalt weathering → Black cotton soil (rich in Ca, Mg). Columnar joints in basalt (Ajanta-Ellora caves carved in basalt).'
      },
      {
        type: 'Igneous (Plutonic)',
        subtype: 'Intrusive (Granite)',
        color: '#696969',
        regions: 'Bundelkhand craton, Dharwar craton, Chota Nagpur',
        center: [23, 79],
        upsc: 'Granite: oldest rocks in India. Very hard, durable. Used for construction. Hyderabad "City of Pearls" sits on Deccan granite. Hampi boulders = granite.'
      },
      {
        type: 'Sedimentary',
        subtype: 'Alluvial, Sandstone, Limestone, Shale',
        color: '#DAA520',
        regions: 'Indo-Gangetic Plain, Vindhyan System, Coastal areas, Kutch',
        center: [27, 80],
        upsc: 'Alluvium: most fertile soil. Vindhyan sandstone: Red Fort, Agra Fort built with it. Limestone: cement industry (AP, Rajasthan, Gujarat). Contains fossils. Petroleum found in sedimentary basins.'
      },
      {
        type: 'Metamorphic',
        subtype: 'Gneiss, Schist, Marble, Slate, Quartzite',
        color: '#8B008B',
        regions: 'Aravalli, Eastern Ghats, Southern Peninsula, Himalayas',
        center: [15, 78],
        upsc: 'Marble: Makrana (Rajasthan) — Taj Mahal marble. Slate: Kangra (HP). Gneiss: oldest Indian rocks. Quartzite: Rajgir (Bihar). Graphite: found in Odisha, AP (metamorphic).'
      },
      {
        type: 'Gondwana Sedimentary',
        subtype: 'Coal-bearing sandstone-shale',
        color: '#8B4513',
        regions: 'Damodar, Son, Mahanadi, Godavari valleys',
        center: [23, 84],
        upsc: '98% of India\'s coal in Gondwana rocks. Age: 250-55 MYA. Named after Gond tribe. Glossopteris fossils. Proof of continental drift (same flora in Africa, S America, India, Australia, Antarctica).'
      }
    ],

    // ── SOIL EROSION ──
    soilErosion: [
      {
        name: 'Himalayan Belt — Severe Water Erosion',
        lat: 31, lng: 78,
        type: 'Water (gully, rill, sheet)',
        severity: 'Very Severe',
        rate: '>40 tonnes/ha/yr',
        cause: 'Steep slopes + high rainfall + deforestation + road cutting',
        upsc: 'Himalayas lose topsoil at alarming rate. Silt loads in rivers increasing. Tehri, Gobindsagar reservoirs silting up faster than designed. Forest loss major driver.'
      },
      {
        name: 'Chambal Ravines (Badlands)',
        lat: 25.5, lng: 77,
        type: 'Gully erosion (ravines)',
        severity: 'Very Severe',
        rate: 'Ravines 30-80m deep, expanding',
        cause: 'Alluvial soil + flash floods + devegetation',
        upsc: 'Chambal ravines = "beehad". 4 million hectares affected across MP, UP, Rajasthan. Dacoit hideouts historically. Ravine reclamation projects ongoing. MGNREGA.'
      },
      {
        name: 'Western Rajasthan — Wind Erosion',
        lat: 26, lng: 70,
        type: 'Wind (deflation, abrasion)',
        severity: 'Severe',
        cause: 'Sandy soil + low vegetation + high winds',
        rate: '>30 tonnes/ha/yr in Barmer-Jaisalmer',
        upsc: 'Sand dune migration → covers fertile land. Aravalli denuded → no windbreak → sand advancing east. Indira Gandhi Canal greenbelt helping but insufficient. Xerophytic plantation needed.'
      },
      {
        name: 'Shivalik Foothills',
        lat: 29.5, lng: 77,
        type: 'Water (sheet + rill)',
        severity: 'Severe',
        rate: '20-40 tonnes/ha/yr',
        cause: 'Soft sedimentary rock + monsoon rain + deforestation',
        upsc: 'Shivalik = youngest & weakest Himalayan zone. Loose sediments. Flash floods carve deep gullies. "Chos" (seasonal torrents) destroy farmland in Punjab-Haryana foothills.'
      },
      {
        name: 'Western Ghats — Sheet Erosion',
        lat: 14, lng: 75,
        type: 'Water (sheet + landslide)',
        severity: 'Moderate-Severe',
        rate: '10-25 tonnes/ha/yr',
        cause: 'Heavy SW monsoon (>3000mm) + deforestation for plantation',
        upsc: 'Coffee, tea, rubber plantations replaced natural forest → slope instability. Laterite soil exposed → poor fertility. Wayanad, Kodagu, Nilgiris worst affected.'
      },
      {
        name: 'Coastal Erosion Belt',
        lat: 12, lng: 80,
        type: 'Wave erosion',
        severity: 'Moderate',
        rate: '1-10 m/yr in some areas',
        cause: 'Wave action + sand mining + dam-reduced sediment',
        upsc: '33% of India coastline eroding (NCSCM). Sundarbans losing 20 sq km/yr. CRZ notification for protection.'
      },
      {
        name: 'Chota Nagpur — Mining Degradation',
        lat: 23.5, lng: 85,
        type: 'Mining + water erosion',
        severity: 'Severe',
        cause: 'Open-cast mines + deforestation + laterite soil',
        upsc: 'Coal mining strips topsoil. Overburden dumps cause siltation. AMD (Acid Mine Drainage) contaminates water. Jharkhand, Chhattisgarh, Odisha most affected.'
      }
    ],

    // ── MAJOR LANDFORMS OF INDIA ──
    landforms: {
      mountains: [
        { name: 'Himalayas', lat: 32, lng: 80, height: '8849 m (Everest)', type: 'Fold Mountains (Young)', upsc: 'Youngest. Still rising. Collision of Indian & Eurasian plates. Syntaxial bends: Nanga Parbat (W) & Namcha Barwa (E).' },
        { name: 'Aravalli Range', lat: 25, lng: 73.5, height: '1722 m (Guru Shikhar)', type: 'Fold Mountains (Old/Residual)', upsc: 'Oldest fold mountain range in world. Pre-Cambrian. Highly eroded. Acts as barrier between Thar and Gangetic plain. No longer effective windbreak due to quarrying.' },
        { name: 'Western Ghats (Sahyadri)', lat: 14, lng: 74.5, height: '2695 m (Anamudi)', type: 'Fault Scarp / Block Mountains', upsc: 'NOT fold mountains — faulted edge of Deccan Plateau. Western face steep (escarpment), eastern gentle. UNESCO. Biodiversity Hotspot. Rain barrier.' },
        { name: 'Eastern Ghats', lat: 16, lng: 80, height: '1501 m (Mahendragiri)', type: 'Residual Hills (eroded)', upsc: 'Discontinuous. Cut by rivers Mahanadi, Godavari, Krishna. Older than W Ghats. Tribal habitat.' },
        { name: 'Vindhya Range', lat: 23, lng: 79, height: '~600 m', type: 'Block Mountains', upsc: 'Divides North and South India. Ancient. Separates Indo-Gangetic from Deccan. Vindhyan sandstone — Red Fort.' },
        { name: 'Satpura Range', lat: 22, lng: 77, height: '1350 m (Dhupgarh)', type: 'Block/Horst Mountains', upsc: 'Horst between Narmada-Tapi rift valleys. Pachmarhi hill station. Satpura Tiger Reserve. Mahadeo Hills.' },
        { name: 'Nilgiris', lat: 11.4, lng: 76.7, height: '2637 m (Doda Betta)', type: 'Junction hills', upsc: 'Meeting point of W & E Ghats. Ooty hill station. Nilgiri Tahr endemic. Tea plantations.' }
      ],
      plains: [
        { name: 'Indo-Gangetic Plain', lat: 27, lng: 80, area: '~7 lakh sq km', type: 'Alluvial (depositional)', upsc: 'World\'s largest alluvial plain. Depth of alluvium up to 6000m near Delhi. Bhabar, Terai, Bangar, Khadar zones. 40% of India\'s population.' },
        { name: 'Brahmaputra Plain (Assam Valley)', lat: 26, lng: 92, area: '~56,000 sq km', type: 'Alluvial (floodplain)', upsc: 'Majuli — world\'s largest river island. Braided channel. Annual floods. Tea gardens.' },
        { name: 'Western Coastal Plain', lat: 14, lng: 74, area: '~10-25 km width', type: 'Wave depositional + uplifted sea floor', upsc: 'Narrow & rocky. Estuaries, backwaters (kayals). Konkan + Kanara + Malabar sub-divisions. No major deltas.' },
        { name: 'Eastern Coastal Plain', lat: 16, lng: 81, area: '~100-130 km width', type: 'Deltaic (depositional)', upsc: 'Broad & fertile. Major deltas: Mahanadi, Godavari, Krishna, Kaveri. Lagoons: Chilika, Pulicat. Utkal + Andhra + Coromandel.' }
      ],
      plateaus: [
        { name: 'Deccan Plateau', lat: 17, lng: 77, height: '500-800 m', type: 'Lava Plateau (Deccan Traps)', upsc: 'Slopes west to east. Covered by Deccan Traps basalt in W. Eastern part granitic. Black soil. Rich in minerals.' },
        { name: 'Malwa Plateau', lat: 23, lng: 76, height: '300-600 m', type: 'Lava Plateau', upsc: 'Basalt lava flow area. Chambal valley on eastern edge. Black soil → cotton.' },
        { name: 'Chota Nagpur Plateau', lat: 23.5, lng: 85, height: '700-1000 m', type: 'Archean Crystalline', upsc: 'Mineral heartland of India. Coal, iron, copper, mica, bauxite. Oldest rocks. Tribal homeland.' },
        { name: 'Meghalaya Plateau (Shillong)', lat: 25.5, lng: 91.5, height: '1965 m (Shillong Peak)', type: 'Detached extension of Peninsular Plateau', upsc: 'Separated from mainland by Garo-Rajmahal gap. Receives highest rainfall (Cherrapunji/Mawsynram). Rich in coal, limestone, uranium.' }
      ],
      valleys: [
        { name: 'Kashmir Valley', lat: 34, lng: 75, dimensions: '135 km × 32 km', type: 'Tectonic + lacustrine', upsc: 'Between Pir Panjal & Greater Himalayas. Originally a lake (Karewa deposits prove this). Saffron. Shali rice. Dal Lake. Wular Lake.' },
        { name: 'Narmada Rift Valley', lat: 22.3, lng: 77, dimensions: '1300 km long', type: 'Graben (rift valley)', upsc: 'Between Vindhya & Satpura. Narmada flows through it. Only major west-flowing rift river in India.' },
        { name: 'Doon / Dun Valley', lat: 30.3, lng: 78, dimensions: '100 km × 25 km', type: 'Longitudinal valley (structural)', upsc: 'Between Shivalik & Middle Himalayas. Dehra Dun most famous. Also Patli Dun, Kotli Dun. Basmati rice, lychee.' },
        { name: 'Imphal Valley', lat: 24.8, lng: 93.9, dimensions: '60 km × 30 km', type: 'Lacustrine + tectonic', upsc: 'Manipur valley. Loktak Lake with Phumdis. Surrounded by hills. Strategic location.' }
      ]
    },

    // ── GLACIER RETREAT ──
    glacierRetreat: [
      { name: 'Gangotri Glacier', lat: 30.92, lng: 79.08, length: '30 km', retreat: '22 m/yr', status: 'Retreating', upsc: 'Source of Ganga (Bhagirathi). Retreated 2 km in last 200 years. Satellite monitoring by ISRO (IRS). If retreat continues → Ganga may become seasonal.' },
      { name: 'Siachen Glacier', lat: 35.42, lng: 77.11, length: '76 km', retreat: '10-15 m/yr', status: 'Retreating slowly', upsc: 'World\'s highest battlefield (India vs Pakistan since 1984). Military operations accelerating melt. 2200+ soldiers stationed. Base camp at 5,753m.' },
      { name: 'Pindari Glacier', lat: 30.23, lng: 79.98, length: '5 km (was 8 km)', retreat: '25-30 m/yr', status: 'Rapidly retreating', upsc: 'Lost 3 km in 50 years. Popular trekking destination. Kumaon Himalayas. Used as indicator glacier by GSI.' },
      { name: 'Milam Glacier', lat: 30.44, lng: 80.16, length: '19 km', retreat: '15-20 m/yr', status: 'Retreating', upsc: 'Source of Goriganga. Ancient trade route to Tibet passed over it. Declining since 1850 (end of Little Ice Age).' },
      { name: 'Zemu Glacier', lat: 27.85, lng: 88.45, length: '26 km', retreat: '12-18 m/yr', status: 'Retreating', upsc: 'Largest in Eastern Himalayas. Near Kangchenjunga. GLOF risk — glacial lakes forming. Sikkim at risk.' },
      { name: 'Bara Shigri Glacier', lat: 32.47, lng: 77.52, length: '28 km', retreat: '20-25 m/yr', status: 'Retreating', upsc: 'Largest in Himachal Pradesh. Source of Chandra river. Terminus moved back significantly since 1970.' },
      { name: 'Kolahoi Glacier', lat: 34.10, lng: 75.30, length: '5 km (was 11 km)', retreat: '20-30 m/yr', status: 'Rapidly retreating', upsc: 'Largest in Kashmir. Lost >50% area since 1857. Source of Lidder river. Pahalgam tourism dependent.' },
      { name: 'Chhota Shigri Glacier', lat: 32.23, lng: 77.52, length: '9 km', retreat: '6-10 m/yr', status: 'Benchmark glacier', upsc: 'WGMS (World Glacier Monitoring Service) benchmark. India\'s only monitored glacier for mass balance. Retreating consistently.' },
      { name: 'Chorabari Glacier', lat: 30.74, lng: 79.07, length: '7 km', retreat: '15-20 m/yr', status: 'Retreating', upsc: 'Kedarnath temple below it. 2013 cloudburst + GLOF from Chorabari Lake → Kedarnath disaster (5000+ dead). Lake now drained for safety.' }
    ],

    // ── GLOF DATA ──
    glofRisks: [
      { name: 'Chamoli 2021', lat: 30.38, lng: 79.58, type: 'Rock-ice avalanche + GLOF', upsc: 'Rishiganga & Dhauliganga dams swept away. 200+ dead. Not classic GLOF — rock/ice avalanche into river. ISRO satellite analysis after event.' },
      { name: 'Kedarnath 2013', lat: 30.74, lng: 79.07, type: 'GLOF + cloudburst', upsc: 'Chorabari Lake burst + extreme rain. 5000+ dead. Temple survived but surroundings devastated. Mandakini river.' },
      { name: 'Sikkim GLOF 2023', lat: 27.72, lng: 88.50, type: 'GLOF (South Lhonak Lake)', upsc: 'South Lhonak glacial lake burst. Chungthang Dam destroyed. Teesta river flood. 100+ dead. Warned by ISRO 2020 study.' },
      { name: 'Potential — Pangong Region', lat: 33.76, lng: 78.66, type: 'Supra-glacial lake risk', upsc: 'ISRO identified 200+ glacial lakes in Ladakh at risk. China side also forming lakes → bilateral risk.' }
    ]
  };


  // ══════════════════════════════════════════════════════════════
  // MAP DEFINITIONS — ALL 8 MAPS
  // ══════════════════════════════════════════════════════════════

  const GEOMORPHOLOGY_MAPS = [

    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // MAP 065 — Tectonic Plates Map (World)
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    {
      mapNum: 65,
      title: 'Tectonic Plates Map (World)',
      subtitle: 'Major & Minor Plates · Boundaries · Direction of Movement',
      mapConfig: { center: [20, 40], zoom: 2.5, tileStyle: 'dark' },
      legend: [
        {
          sectionTitle: 'Major Plates',
          items: DATA.tectonicPlates.major.map(p => ({ dot: p.color, label: p.name }))
        },
        {
          sectionTitle: 'Boundary Types',
          items: DATA.tectonicPlates.boundaries.types.map(b => ({
            line: b.color,
            label: `${b.type} ${b.symbol}`
          }))
        }
      ],
      info: [
        {
          title: 'TECTONIC PLATES — THEORY',
          items: [
            'Alfred Wegener: Continental Drift (1912) — "Jigsaw fit" of continents',
            'Arthur Holmes: Convection Currents (1930s) — mantle convection drives plates',
            'Harry Hess: Sea Floor Spreading (1960s) — new crust at mid-ocean ridges',
            'Plate Tectonics Theory (1960s) — unified theory combining all above',
            '7 major plates + 8+ minor plates + many microplates',
            'Plates float on asthenosphere (semi-molten upper mantle)',
            'Convergent → destruction of crust (subduction) → mountains, trenches',
            'Divergent → creation of new crust → mid-ocean ridges, rift valleys',
            'Transform → lateral sliding → earthquakes (no volcanic activity)'
          ]
        },
        {
          title: 'UPSC KEY FACTS',
          facts: [
            { label: 'Largest Plate', value: 'Pacific Plate (103.3 million sq km)' },
            { label: 'Fastest Plate', value: 'Indian Plate (~5 cm/yr NE)' },
            { label: 'Ring of Fire', value: '75% of world\'s volcanoes & 90% earthquakes occur along Pacific Plate boundaries' },
            { label: 'Youngest Crust', value: 'At mid-ocean ridges (0 age)' },
            { label: 'Oldest Ocean Floor', value: '~200 MYA (Jurassic) — W Pacific' }
          ]
        }
      ],
      render(map, app) {
        // Major plates as markers with circles
        DATA.tectonicPlates.major.forEach(plate => {
          const circle = L.circle(plate.center, {
            radius: 2000000,
            color: plate.color,
            fillColor: plate.color,
            fillOpacity: 0.15,
            weight: 2,
            dashArray: '6,4'
          });
          circle.bindPopup(app.buildPopup(
            `🌍 ${plate.name}`,
            `<b>Type:</b> ${plate.type}<br>
             <b>Area:</b> ${plate.area}<br>
             <b>Movement:</b> ${plate.movement}<br>
             <b>Boundary:</b> ${plate.boundary}<br>
             <b>UPSC:</b> ${plate.upsc}`,
            ['Tectonic', plate.type]
          ));
          app.addLayer(circle);
          app.addLayer(app.labelMarker(plate.center, plate.name, plate.color, '11px'));
        });

        // Minor plates
        DATA.tectonicPlates.minor.forEach(plate => {
          const marker = L.circleMarker(plate.center, {
            radius: 8, color: '#000', fillColor: plate.color, fillOpacity: 0.85, weight: 2
          });
          marker.bindPopup(app.buildPopup(`🌍 ${plate.name} (Minor)`, plate.upsc, ['Minor Plate']));
          app.addLayer(marker);
          app.addLayer(app.labelMarker([plate.center[0] + 2, plate.center[1]], plate.name, plate.color, '9px'));
        });

        // Ring of Fire approximate
        const ringOfFire = L.polyline([
          [-45, -75], [-33, -72], [-20, -70], [0, -80],
          [15, -105], [30, -120], [45, -125], [50, -165],
          [55, 165], [40, 143], [30, 130], [10, 125],
          [0, 130], [-10, 148], [-30, 175], [-45, 170], [-65, -180]
        ], { color: '#FF0000', weight: 2, opacity: 0.5, dashArray: '8,4' });
        ringOfFire.bindPopup(app.buildPopup('🔥 Ring of Fire', '75% of world\'s volcanoes, 90% of earthquakes. Circum-Pacific Belt.', ['Ring of Fire']));
        app.addLayer(ringOfFire);
        app.addLayer(app.labelMarker([30, -140], '🔥 RING\nOF FIRE', '#FF0000', '10px'));
      }
    },

    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // MAP 066 — Indian Plate Movement Map
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    {
      mapNum: 66,
      title: 'Indian Plate Movement Map',
      subtitle: 'Gondwana Breakup · Northward Drift · Himalayan Collision · Current Movement',
      mapConfig: { center: [10, 78], zoom: 3.5, tileStyle: 'dark' },
      legend: [
        {
          sectionTitle: 'Movement Timeline',
          items: DATA.indianPlateMovement.stages.map(s => ({
            dot: s.color, label: `${s.age} — ${s.label.substring(0, 40)}...`
          }))
        }
      ],
      info: [
        {
          title: 'INDIAN PLATE JOURNEY',
          items: [
            '225 MYA: India part of Gondwanaland supercontinent (with Africa, S America, Antarctica, Australia)',
            '180 MYA: Gondwana begins breaking apart',
            '135 MYA: India separates, begins northward drift across Tethys Sea',
            '80 MYA: India an island continent, moving rapidly northward',
            '55 MYA: India approaches Eurasian plate, Tethys Sea narrowing',
            '40 MYA: Continental collision begins — Himalayas start rising',
            '20 MYA: Full collision — Himalayas significantly high',
            'Present: India still pushing into Eurasia at ~5 cm/yr. Himalayas still rising ~5mm/yr.'
          ]
        },
        {
          title: 'UPSC — EVIDENCE FOR PLATE MOVEMENT',
          items: [
            'Glossopteris fossils: Same plant in India, Africa, S America, Antarctica, Australia — Gondwana connection',
            'Marine fossils at 8000m+ in Himalayas — proves Tethys Sea existed',
            'Matching coastlines: India-Madagascar, India-Africa, S America-Africa',
            'Matching rock types & ages across continents',
            'Paleomagnetic evidence: India was south of equator, moved north',
            'GPS measurements: India moving 5 cm/yr NE (directly measured)',
            'Earthquakes along Himalayan front: active collision proof'
          ]
        }
      ],
      render(map, app) {
        // Movement path
        const pathCoords = DATA.indianPlateMovement.stages.map(s => [s.lat, s.lng]);
        const path = L.polyline(pathCoords, {
          color: '#FFD700', weight: 3, opacity: 0.8, dashArray: '8,6'
        });
        path.bindPopup(app.buildPopup('Indian Plate Journey', '225 MYA → Present. From 60°S to 22°N.', ['Movement']));
        app.addLayer(path);

        // Stage markers
        DATA.indianPlateMovement.stages.forEach((stage, idx) => {
          const marker = L.circleMarker([stage.lat, stage.lng], {
            radius: 10, color: '#000', fillColor: stage.color, fillOpacity: 0.9, weight: 2
          });
          marker.bindPopup(app.buildPopup(
            `🌍 ${stage.age}`,
            `<b>Position:</b> ${stage.lat}°${stage.lat >= 0 ? 'N' : 'S'}<br>
             <b>Event:</b> ${stage.label}`,
            ['Timeline', stage.age]
          ));
          app.addLayer(marker);
          app.addLayer(app.labelMarker([stage.lat + 1.5, stage.lng], `${stage.age}\n${stage.label.substring(0, 35)}`, stage.color, '8px'));
        });

        // Collision zone
        const collisionZone = L.polyline([
          [35, 72], [34, 76], [32, 80], [30, 84], [28, 88], [27, 92], [26, 96]
        ], { color: '#FF0000', weight: 4, opacity: 0.8 });
        collisionZone.bindPopup(app.buildPopup('💥 COLLISION ZONE', 'Indian Plate colliding with Eurasian Plate. Himalayas formed here.', ['Collision']));
        app.addLayer(collisionZone);
        app.addLayer(app.labelMarker([33, 82], '💥 COLLISION\nZONE\n(Still Active)', '#FF0000', '10px'));

        // Tethys Sea label
        app.addLayer(app.labelMarker([15, 75], '🌊 TETHYS SEA\n(Ancient Ocean)\nClosed by collision', '#00BFFF', '10px'));

        // Current movement arrow
        const arrowNote = L.divIcon({
          className: '',
          html: `<div style="background:rgba(0,0,0,0.85);border:2px solid #FFD700;
            border-radius:10px;padding:10px 14px;font-size:10px;color:#FFD700;
            max-width:220px;line-height:1.6;font-family:Inter,sans-serif">
            <b>📍 CURRENT INDIAN PLATE</b><br>
            Speed: <b>~5 cm/yr NE</b><br>
            Direction: N20°E<br>
            Himalayas rising: 5 mm/yr<br>
            <span style="color:#FF6347">Fastest continental plate on Earth</span>
          </div>`,
          iconAnchor: [0, 0]
        });
        app.addLayer(L.marker([12, 68], { icon: arrowNote, interactive: false }));
      }
    },

    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // MAP 067 — Geological Age Map of India
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    {
      mapNum: 67,
      title: 'Geological Age Map of India',
      subtitle: 'Archean · Proterozoic · Paleozoic · Mesozoic · Cenozoic · Color Coded',
      mapConfig: { center: [22, 80], zoom: 5, tileStyle: 'dark' },
      legend: [
        {
          sectionTitle: 'Geological Eras',
          items: DATA.geologicalAges.map(g => ({
            color: g.color, label: `${g.era} (${g.age})`
          }))
        }
      ],
      info: [
        {
          title: 'GEOLOGICAL TIME SCALE — INDIA',
          facts: DATA.geologicalAges.map(g => ({
            label: g.era, value: `${g.age} | ${g.rocks.substring(0, 50)}...`
          }))
        },
        {
          title: 'UPSC KEY POINTS',
          items: [
            'Archean (>2500 MYA): Oldest rocks. Peninsula. All major minerals.',
            'Proterozoic (Vindhyan): Sandstone (Red Fort), Diamonds (Panna)',
            'Gondwana (Mesozoic): 98% of India\'s coal. Named after Gond tribe.',
            'Deccan Traps (66 MYA): World\'s largest lava flow. Dinosaur extinction link.',
            'Cenozoic: Himalayas formed. Indo-Gangetic alluvium deposited. Quaternary.',
            'Siwalik fossils: Sivapithecus (ape), elephant, giraffe in Himalayan foothills.',
            'Karewa deposits in Kashmir: lacustrine (lake) sediments. Saffron grown here.'
          ]
        }
      ],
      render(map, app) {
        DATA.geologicalAges.forEach(geo => {
          if (geo.coords && geo.coords.length > 3) {
            const poly = L.polygon(geo.coords, {
              color: geo.color,
              fillColor: geo.color,
              fillOpacity: 0.4,
              weight: 2
            });
            poly.bindPopup(app.buildPopup(
              `⏳ ${geo.era}`,
              `<b>Age:</b> ${geo.age}<br>
               <b>Regions:</b> ${geo.regions}<br>
               <b>Rocks:</b> ${geo.rocks}<br>
               <b>UPSC:</b> ${geo.upsc}`,
              ['Geology', geo.era.split(' ')[0]]
            ));
            poly.on('mouseover', function () { this.setStyle({ fillOpacity: 0.65, weight: 3 }); this.bringToFront(); });
            poly.on('mouseout', function () { this.setStyle({ fillOpacity: 0.4, weight: 2 }); });
            app.addLayer(poly);

            const centroid = geo.coords[Math.floor(geo.coords.length / 3)];
            app.addLayer(app.labelMarker(centroid, `${geo.era.split('(')[0].trim()}\n(${geo.age})`, geo.color === '#4B0082' ? '#9370DB' : geo.color, '9px'));
          }
        });
      }
    },

    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // MAP 068 — Rock Types Distribution
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    {
      mapNum: 68,
      title: 'Rock Types Distribution — India',
      subtitle: 'Igneous · Sedimentary · Metamorphic · Gondwana Formations',
      mapConfig: { center: [22, 80], zoom: 5, tileStyle: 'dark' },
      legend: [
        {
          sectionTitle: 'Rock Types',
          items: DATA.rockTypes.map(r => ({ color: r.color, label: `${r.type} (${r.subtype})` }))
        }
      ],
      info: [
        {
          title: 'ROCK TYPES — UPSC',
          facts: DATA.rockTypes.map(r => ({ label: r.type, value: r.upsc.substring(0, 80) + '...' }))
        }
      ],
      render(map, app) {
        DATA.rockTypes.forEach(rock => {
          const circle = L.circle(rock.center, {
            radius: 180000,
            color: rock.color,
            fillColor: rock.color,
            fillOpacity: 0.35,
            weight: 2
          });
          circle.bindPopup(app.buildPopup(
            `🪨 ${rock.type}`,
            `<b>Subtype:</b> ${rock.subtype}<br>
             <b>Regions:</b> ${rock.regions}<br>
             ${rock.area ? `<b>Area:</b> ${rock.area}<br>` : ''}
             <b>UPSC:</b> ${rock.upsc}`,
            ['Rock', rock.type.split(' ')[0]]
          ));
          circle.on('mouseover', function () { this.setStyle({ fillOpacity: 0.6 }); });
          circle.on('mouseout', function () { this.setStyle({ fillOpacity: 0.35 }); });
          app.addLayer(circle);
          app.addLayer(app.labelMarker(
            [rock.center[0] + 1.5, rock.center[1]],
            `${rock.type}\n(${rock.subtype})`,
            rock.color === '#2F4F4F' ? '#708090' : rock.color, '9px'
          ));
        });
      }
    },

    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // MAP 069 — Fault Lines of India
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    {
      mapNum: 69,
      title: 'Fault Lines of India',
      subtitle: 'MFT · MBT · MCT · Narmada-Son · Kachchh · Andaman Subduction',
      mapConfig: { center: [25, 80], zoom: 5, tileStyle: 'dark' },
      legend: [
        {
          sectionTitle: 'Major Faults',
          items: [
            { line: '#FF0000', label: 'Main Frontal Thrust (MFT)' },
            { line: '#FF4400', label: 'Main Boundary Thrust (MBT)' },
            { line: '#FF6600', label: 'Main Central Thrust (MCT)' },
            { line: '#FF8800', label: 'Narmada-Son Fault Zone' },
            { line: '#FFAA00', label: 'Kachchh Fault System' },
            { line: '#CC0000', label: 'Andaman Subduction Zone' }
          ]
        }
      ],
      info: [
        {
          title: 'FAULT LINES — UPSC DETAILS',
          facts: [
            { label: 'MFT', value: 'Most active. Along Shivalik-Plains boundary. Micro-earthquakes daily.' },
            { label: 'MBT', value: 'Separates Lesser from Shivalik Himalayas. Major earthquake generator.' },
            { label: 'MCT', value: 'Between Greater & Lesser Himalayas. Uttarkashi, Chamoli eq. on this.' },
            { label: 'Narmada-Son', value: 'Ancient rift. Latur 1993 UNEXPECTED eq. Deep fault reactivation.' },
            { label: 'Kachchh', value: 'Bhuj 2001. Allah Bund fault created. Rann created by 1819 eq.' },
            { label: 'Andaman', value: '2004 M9.1 earthquake & tsunami. Indian plate subducting under Burma plate.' }
          ]
        },
        {
          title: 'SEISMIC GAP THEORY — UPSC',
          items: [
            'Seismic Gap: area where no major earthquake has occurred for long time despite being active zone',
            'Central Seismic Gap: Garhwal-Kumaon region — overdue for M8+ earthquake',
            'Kashmir Gap: Between 2005 Kashmir eq. & 1905 Kangra eq. zones',
            'Bihar-Nepal Gap: Between 1934 & 1950 eq. zones — Delhi at risk',
            'NDMA estimates: Delhi could face M7+ earthquake anytime',
            'Earthquake prediction: NOT possible (only probabilistic assessment)',
            'Earthquake preparedness: Building codes (IS 1893), awareness, early warning'
          ]
        }
      ],
      render(map, app) {
        const faultColors = {
          'Main Frontal Thrust (MFT)': '#FF0000',
          'Main Boundary Thrust (MBT)': '#FF4400',
          'Main Central Thrust (MCT)': '#FF6600',
          'Narmada-Son Fault Zone': '#FF8800',
          'Kutch Fault System': '#FFAA00',
          'Andaman-Sumatra Subduction Zone': '#CC0000'
        };

        // Use same fault data from environment file
        const faultLines = [
          { name: 'Main Frontal Thrust (MFT)', coords: [[32.5, 75.5], [30, 79], [28.5, 83], [27, 87], [26, 91], [27.5, 92.5]], upsc: 'Southernmost Himalayan thrust. Along Shivalik-plains boundary. Most active fault in India. Micro-earthquakes almost daily.' },
          { name: 'Main Boundary Thrust (MBT)', coords: [[33, 75.5], [31, 78], [29.5, 82], [28, 86], [27, 90], [26, 92.5]], upsc: 'Separates Lesser Himalayas from Siwalik. Active. 1905 Kangra earthquake on this zone.' },
          { name: 'Main Central Thrust (MCT)', coords: [[34, 76], [32, 79], [31, 83], [30, 87], [28, 91], [27, 95]], upsc: 'Separates Greater from Lesser Himalayas. Uttarkashi 1991 & Chamoli 1999 earthquakes along this. Reactivating ancient fault.' },
          { name: 'Narmada-Son Fault Zone', coords: [[23.5, 73.5], [22.5, 75], [22, 77], [22.5, 79], [23, 81], [22.66, 81.75]], upsc: 'Ancient rift zone. Latur 1993 M6.2 earthquake — UNEXPECTED on stable craton. Reactivation of deep fault. Changed seismic assessment of Deccan.' },
          { name: 'Kutch Fault System', coords: [[23.8, 68.5], [23.5, 69], [23.2, 70], [23, 71.5]], upsc: 'Bhuj 2001 M7.7 — 20,000+ dead. Allah Bund (1819 eq created dam). Rann of Kachchh formed by earthquake-induced subsidence.' },
          { name: 'Andaman-Sumatra Subduction Zone', coords: [[15, 93.5], [12, 93], [9, 93.5], [6, 94], [3, 95]], upsc: '2004 Indian Ocean Tsunami (M9.1-9.3). 230,000 deaths globally. Oblique subduction. Indian plate going under Burma microplate. Barren Island volcano on this zone.' }
        ];

        faultLines.forEach(fault => {
          const color = faultColors[fault.name] || '#FF4400';
          const line = L.polyline(fault.coords, {
            color, weight: 4, opacity: 0.85, dashArray: '8,4'
          });
          line.bindPopup(app.buildPopup(
            `⚡ ${fault.name}`,
            `<b>UPSC:</b> ${fault.upsc}`,
            ['Fault Line']
          ));
          app.addLayer(line);

          const mid = fault.coords[Math.floor(fault.coords.length / 2)];
          app.addLayer(app.labelMarker([mid[0] + 0.3, mid[1]], fault.name, color, '8px'));
        });

        // Seismic gap zone
        const seismicGap = L.polygon([
          [30.5, 78], [31, 80], [30.5, 82], [29, 82],
          [28.5, 80], [29, 78], [30.5, 78]
        ], {
          color: '#FF00FF', fillColor: '#FF00FF', fillOpacity: 0.15,
          weight: 2, dashArray: '6,4'
        });
        seismicGap.bindPopup(app.buildPopup(
          '⚠ CENTRAL SEISMIC GAP',
          'Garhwal-Kumaon: No M8+ earthquake since 1803. Overdue. Delhi at extreme risk if this ruptures.',
          ['Seismic Gap', 'UPSC Critical']
        ));
        app.addLayer(seismicGap);
        app.addLayer(app.labelMarker([30, 80], '⚠ CENTRAL\nSEISMIC GAP\n(OVERDUE for M8+)', '#FF00FF', '10px'));
      }
    },

    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // MAP 070 — Soil Erosion Map
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    {
      mapNum: 70,
      title: 'Soil Erosion Map of India',
      subtitle: 'Water · Wind · Gully · Sheet · Mining Erosion',
      mapConfig: { center: [23, 79], zoom: 5, tileStyle: 'dark' },
      legend: [
        {
          sectionTitle: 'Erosion Type & Severity',
          items: [
            { color: '#8B0000', label: 'Very Severe (>40 t/ha/yr)' },
            { color: '#FF4500', label: 'Severe (20-40 t/ha/yr)' },
            { color: '#FFA500', label: 'Moderate-Severe (10-25 t/ha/yr)' },
            { color: '#FFD700', label: 'Moderate' }
          ]
        }
      ],
      info: [
        {
          title: 'SOIL EROSION — INDIA',
          facts: [
            { label: 'Total Eroded', value: '147 million ha (45% of total area)' },
            { label: 'Water Erosion', value: '~94 million ha (64% of total erosion)' },
            { label: 'Wind Erosion', value: '~9 million ha (mostly Rajasthan)' },
            { label: 'Annual Loss', value: '5.3 billion tonnes topsoil lost/year' },
            { label: 'Productivity Loss', value: '~2-3% agricultural GDP annually' }
          ]
        },
        {
          title: 'TYPES & UPSC FACTORS',
          items: [
            'Sheet Erosion: uniform removal of thin topsoil layer (most widespread but least visible)',
            'Rill Erosion: small channels form on slopes',
            'Gully Erosion: deep channels (ravines) — Chambal, Son river',
            'Wind Erosion: deflation + abrasion in Thar, Kachchh',
            'Mining Erosion: overburden dumps, exposed laterite (Chota Nagpur)',
            'Coastal Erosion: wave action, Sundarbans, Puri-Konark coast',
            'Factors: Rainfall intensity, slope, soil type, vegetation loss, human activity',
            'USLE (Universal Soil Loss Equation): R×K×LS×C×P for prediction'
          ]
        }
      ],
      render(map, app) {
        DATA.soilErosion.forEach(zone => {
          const sevColors = {
            'Very Severe': '#8B0000',
            'Severe': '#FF4500',
            'Moderate-Severe': '#FFA500',
            'Moderate': '#FFD700'
          };
          const color = sevColors[zone.severity] || '#FFA500';
          const radius = zone.severity === 'Very Severe' ? 80000 : zone.severity === 'Severe' ? 70000 : 60000;

          const circle = L.circle([zone.lat, zone.lng], {
            radius, color, fillColor: color, fillOpacity: 0.3, weight: 2
          });
          circle.bindPopup(app.buildPopup(
            `🌍 ${zone.name}`,
            `<b>Type:</b> ${zone.type}<br>
             <b>Severity:</b> ${zone.severity}<br>
             <b>Rate:</b> ${zone.rate}<br>
             <b>Cause:</b> ${zone.cause}<br>
             <b>UPSC:</b> ${zone.upsc}`,
            ['Erosion', zone.type.split(' ')[0]]
          ));
          circle.on('mouseover', function () { this.setStyle({ fillOpacity: 0.55 }); });
          circle.on('mouseout', function () { this.setStyle({ fillOpacity: 0.3 }); });
          app.addLayer(circle);
          app.addLayer(app.labelMarker([zone.lat + 0.6, zone.lng], `${zone.name}\n(${zone.severity})`, color, '8px'));
        });

        // Wind erosion arrows
        const windArrows = [
          [[27, 68], [27, 73]],
          [[26, 69], [26, 74]],
          [[25, 69.5], [25, 73]]
        ];
        windArrows.forEach(arr => {
          const line = L.polyline(arr, { color: '#F4A460', weight: 2, dashArray: '4,3', opacity: 0.6 });
          app.addLayer(line);
        });
        app.addLayer(app.labelMarker([28, 69], '🌬 WIND EROSION\n(Thar → Eastward)', '#F4A460', '9px'));
      }
    },

    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // MAP 071 — Landforms of India
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    {
      mapNum: 71,
      title: 'Landforms of India',
      subtitle: 'Mountains · Plains · Plateaus · Valleys · Coastal Features',
      mapConfig: { center: [22, 80], zoom: 5, tileStyle: 'dark' },
      legend: [
        {
          sectionTitle: 'Landform Types',
          items: [
            { dot: '#8B4513', label: '⛰ Mountains' },
            { dot: '#DAA520', label: '🌾 Plains' },
            { dot: '#CD853F', label: '🏜 Plateaus' },
            { dot: '#228B22', label: '🏔 Valleys' }
          ]
        }
      ],
      info: [
        {
          title: 'MAJOR LANDFORMS — SUMMARY',
          items: [
            'Mountains: Himalayas (fold), Aravalli (residual), W Ghats (fault scarp), Vindhya-Satpura (block)',
            'Plains: Indo-Gangetic (alluvial), Coastal (depositional), Brahmaputra (floodplain)',
            'Plateaus: Deccan (lava), Malwa (lava), Chota Nagpur (Archean), Meghalaya (detached)',
            'Valleys: Kashmir (tectonic), Narmada (rift/graben), Doon (structural), Imphal (lacustrine)',
            'Coastal: Western (narrow/rocky), Eastern (broad/deltaic), Islands (volcanic+coral)'
          ]
        }
      ],
      render(map, app) {
        const typeColors = { mountains: '#8B4513', plains: '#DAA520', plateaus: '#CD853F', valleys: '#228B22' };

        Object.entries(DATA.landforms).forEach(([type, items]) => {
          const color = typeColors[type] || '#FFFFFF';
          items.forEach(item => {
            const marker = L.circleMarker([item.lat, item.lng], {
              radius: 9, color: '#000', fillColor: color, fillOpacity: 0.85, weight: 2
            });
            marker.bindPopup(app.buildPopup(
              `${type === 'mountains' ? '⛰' : type === 'plains' ? '🌾' : type === 'plateaus' ? '🏜' : '🏔'} ${item.name}`,
              `<b>Height/Area:</b> ${item.height || item.area || item.dimensions || '—'}<br>
               <b>Type:</b> ${item.type}<br>
               <b>UPSC:</b> ${item.upsc}`,
              [type, item.type.split(' ')[0]]
            ));
            marker.on('mouseover', function () { this.setRadius(12); });
            marker.on('mouseout', function () { this.setRadius(9); });
            app.addLayer(marker);
            app.addLayer(app.labelMarker([item.lat + 0.3, item.lng], `${item.name}\n(${item.type.substring(0, 25)})`, color, '8px'));
          });
        });
      }
    },

    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // MAP 072 — Glacier Retreat Map
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    {
      mapNum: 72,
      title: 'Glacier Retreat Map',
      subtitle: 'Retreating Glaciers · Rate of Retreat · GLOF Risks · Impact on Rivers',
      mapConfig: { center: [31, 80], zoom: 5.5, tileStyle: 'dark' },
      legend: [
        {
          sectionTitle: 'Glacier Status',
          items: [
            { dot: '#FF0000', label: 'Rapidly Retreating (>20 m/yr)' },
            { dot: '#FFA500', label: 'Retreating (10-20 m/yr)' },
            { dot: '#FFD700', label: 'Slowly Retreating (<10 m/yr)' },
            { dot: '#00BFFF', label: 'Benchmark Glacier (WGMS)' }
          ]
        },
        {
          sectionTitle: 'Hazards',
          items: [
            { dot: '#FF00FF', label: 'GLOF Event / Risk Zone' }
          ]
        }
      ],
      info: [
        {
          title: 'GLACIER RETREAT — INDIA',
          facts: [
            { label: 'Total Glaciers', value: '~9,575 in Indian Himalayas' },
            { label: 'Retreating', value: '~75% are retreating (ISRO study)' },
            { label: 'Area Loss', value: '~13% glacier area lost in last 50 years' },
            { label: 'Gangotri', value: 'Retreated 2 km in 200 years. ~22 m/yr currently.' },
            { label: 'Kolahoi (Kashmir)', value: 'Lost >50% area since 1857.' }
          ]
        },
        {
          title: 'GLOF & UPSC IMPLICATIONS',
          items: [
            'GLOF (Glacial Lake Outburst Flood): glacier retreat → moraine-dammed lake → sudden burst → devastating flood',
            'ISRO identified 200+ potentially dangerous glacial lakes in India',
            'Chamoli 2021: NOT classic GLOF but rock-ice avalanche → river dam → flood → 200+ dead',
            'Sikkim 2023: Classic GLOF from South Lhonak Lake. Chungthang Dam destroyed.',
            'Kedarnath 2013: Cloudburst + Chorabari Lake breach. 5000+ dead.',
            'Climate change → faster melt → more GLOF events predicted',
            'If Himalayan glaciers disappear → Ganga, Indus, Brahmaputra may become seasonal',
            'Glaciers provide 30-50% of dry-season flow for northern rivers',
            'India Third Pole doctrine: Himalayas = Earth\'s third pole (after Arctic & Antarctic)'
          ]
        }
      ],
      render(map, app) {
        // Glacier markers
        DATA.glacierRetreat.forEach(glacier => {
          const retreat = parseInt(glacier.retreat);
          let color = '#FFD700';
          if (retreat >= 20) color = '#FF0000';
          else if (retreat >= 10) color = '#FFA500';
          if (glacier.status.includes('Benchmark')) color = '#00BFFF';

          const radius = retreat >= 20 ? 12 : retreat >= 10 ? 10 : 8;

          const marker = L.circleMarker([glacier.lat, glacier.lng], {
            radius, color: '#000', fillColor: color, fillOpacity: 0.9, weight: 2
          });
          marker.bindPopup(app.buildPopup(
            `🧊 ${glacier.name}`,
            `<b>Length:</b> ${glacier.length}<br>
             <b>Retreat Rate:</b> ${glacier.retreat}<br>
             <b>Status:</b> ${glacier.status}<br>
             <b>UPSC:</b> ${glacier.upsc}`,
            ['Glacier', glacier.status]
          ));
          marker.on('mouseover', function () { this.setRadius(radius + 4); this.bringToFront(); });
          marker.on('mouseout', function () { this.setRadius(radius); });
          app.addLayer(marker);
          app.addLayer(app.labelMarker(
            [glacier.lat + 0.3, glacier.lng],
            `${glacier.name}\n(${glacier.retreat})`,
            color, '8px'
          ));
        });

        // GLOF events
        DATA.glofRisks.forEach(glof => {
          const marker = L.marker([glof.lat, glof.lng], {
            icon: L.divIcon({
              className: '',
              html: `<div style="
                background:#FF00FF;color:#fff;border-radius:50%;
                width:20px;height:20px;display:flex;align-items:center;
                justify-content:center;font-weight:bold;font-size:11px;
                border:2px solid #fff;box-shadow:0 0 12px rgba(255,0,255,0.7);
              ">⚠</div>`,
              iconAnchor: [10, 10]
            })
          });
          marker.bindPopup(app.buildPopup(
            `⚠ ${glof.name}`,
            `<b>Type:</b> ${glof.type}<br><b>UPSC:</b> ${glof.upsc}`,
            ['GLOF', 'Disaster']
          ));
          app.addLayer(marker);
          app.addLayer(app.labelMarker([glof.lat + 0.3, glof.lng], glof.name, '#FF00FF', '8px'));
        });

        // Third Pole info box
        const thirdPole = L.divIcon({
          className: '',
          html: `<div style="background:rgba(0,0,0,0.88);border:2px solid #00BFFF;
            border-radius:12px;padding:12px 14px;font-size:9px;color:#87CEEB;
            max-width:250px;line-height:1.6;font-family:Inter,sans-serif">
            <b style="color:#FFD700;font-size:11px">🧊 EARTH'S THIRD POLE</b><br>
            Himalayas = world's 3rd pole<br>
            <b>9,575 glaciers</b> in Indian Himalayas<br>
            <b>75% retreating</b> (ISRO 2021)<br>
            <b>13% area lost</b> in 50 years<br>
            Ganga dry-season flow: 30-50% from glaciers<br>
            <span style="color:#FF6347">If gone → rivers become SEASONAL</span><br>
            <span style="color:#aaa">WGMS benchmark: Chhota Shigri only</span>
          </div>`,
          iconAnchor: [0, 0]
        });
        app.addLayer(L.marker([27, 83], { icon: thirdPole, interactive: false }));

        // Himalayan backdrop
        const himBg = L.polygon([
          [36, 70], [36, 97], [28, 97], [27, 88],
          [28, 84], [30, 79], [33, 75], [36, 73], [36, 70]
        ], {
          color: 'transparent', fillColor: '#3a3028', fillOpacity: 0.1, weight: 0
        });
        app.addLayer(himBg);
      }
    }

  ]; // END GEOMORPHOLOGY_MAPS

  // ══════════════════════════════════════════════════════════════
  // REGISTER
  // ══════════════════════════════════════════════════════════════
  window.registerMaps('geomorphology', GEOMORPHOLOGY_MAPS);
  console.log('🗻 Geomorphology Maps: 8 maps registered (MAP 065-072)');

})();
