/* ============================================
   UPSC GEOGRAPHY LEARNING SYSTEM
   India Physical Geography Data File - COMPREHENSIVE
   Topics: Geological Structure, Physiography, Himalayas,
           Northern Plains, Peninsular Plateau, Coastal Plains,
           Islands, Important Passes & Gaps
   ============================================ */

const indiaPhysicalData = [

    // ============================================
    // TOPIC 1: GEOLOGICAL STRUCTURE OF INDIA
    // ============================================
    {
        id: 'india-geological-structure',
        name: 'Geological Structure of India',
        icon: '🪨',
        category: 'india-physical',
        theme: 'plateau',
        difficulty: 'medium',
        upscRelevance: 'high',

        mindMap: {
            central: 'Geological Structure',
            branches: [
                {
                    name: 'Geological Time Scale',
                    color: '#9B59B6',
                    children: [
                        'Archean (oldest rocks)',
                        'Proterozoic (Cuddapah, Vindhyan)',
                        'Paleozoic (Gondwana)',
                        'Mesozoic (Deccan Traps)',
                        'Cenozoic (Himalayas, Siwaliks)'
                    ]
                },
                {
                    name: 'Rock Systems',
                    color: '#E74C3C',
                    children: [
                        'Archean (gneiss, schist)',
                        'Dharwar (gold, iron)',
                        'Cuddapah (limestones)',
                        'Vindhyan (sandstones)',
                        'Gondwana (coal)'
                    ]
                },
                {
                    name: 'Geological Divisions',
                    color: '#3498DB',
                    children: [
                        'Peninsular Block (Gondwana)',
                        'Himalayan Region (Tethys)',
                        'Indo-Gangetic Plain (alluvium)',
                        'Coastal Plains (recent)'
                    ]
                },
                {
                    name: 'Plate Tectonics',
                    color: '#2ECC71',
                    children: [
                        'Indian Plate (Indo-Australian)',
                        'Moving NE at 5 cm/year',
                        'Collision with Eurasian Plate',
                        'Himalayas still rising!'
                    ]
                }
            ]
        },

        memoryHooks: [
            {
                type: 'mnemonic',
                title: 'Rock Systems Age Order',
                content: 'A-D-C-V-G = "A Dear Child Very Good" → Archean, Dharwar, Cuddapah, Vindhyan, Gondwana (oldest to younger)',
                icon: '🧠'
            },
            {
                type: 'story',
                title: 'India\'s Journey',
                content: 'India was part of Gondwanaland (supercontinent). It broke away ~140 MYA, drifted north like a ship, crashed into Asia ~50 MYA → HIMALAYAS rose! Still moving 5 cm/year (fingernail speed).',
                icon: '🚢'
            },
            {
                type: 'comparison',
                title: 'Peninsula vs Himalayas',
                content: 'Peninsula = OLD, STABLE, no earthquakes (Gondwana). Himalayas = YOUNG, ACTIVE, earthquake-prone (Tethys sediments folded). Think: Grandfather (stable) vs Teenager (unstable).',
                icon: '👴'
            },
            {
                type: 'visual',
                title: 'Gondwana = COAL',
                content: 'Gondwana rocks = India\'s COAL belt (Damodar, Mahanadi valleys). Formed from ancient swamp forests. Remember: GONDwana = GOld of black (coal)!',
                icon: '⚫'
            }
        ],

        conceptBlocks: [
            {
                title: 'Geological Time Scale in India',
                icon: '⏳',
                points: [
                    '🔷 ARCHEAN ERA (4000-2500 MYA):',
                    '  • Oldest rocks in India',
                    '  • Gneisses, granites, schists',
                    '  • Found in: Karnataka, Tamil Nadu, Rajasthan',
                    '  • NO fossils (too old for life)',
                    '  • Highly metamorphosed, crystalline',
                    '',
                    '🔷 PROTEROZOIC ERA (2500-540 MYA):',
                    '  • Dharwar System (2500-1800 MYA):',
                    '    - Karnataka, Jharkhand, Odisha',
                    '    - RICH in minerals: Gold (Kolar), Iron (Bailadila)',
                    '    - Metamorphic rocks',
                    '  • Cuddapah System (1800-1400 MYA):',
                    '    - Andhra Pradesh crescent-shaped basin',
                    '    - Limestones, shales, slates',
                    '    - Asbestos, iron ore, copper',
                    '  • Vindhyan System (1400-600 MYA):',
                    '    - Madhya Pradesh, Rajasthan',
                    '    - RED sandstones (used in Red Fort!)',
                    '    - Limestones for cement',
                    '    - Diamonds (Panna mines)',
                    '',
                    '🔷 PALEOZOIC ERA (540-250 MYA):',
                    '  • Gondwana System (most important for UPSC):',
                    '    - Lower Gondwana: COAL deposits',
                    '    - Damodar Valley (Jharia, Raniganj)',
                    '    - Mahanadi Valley (Talcher)',
                    '    - Godavari Valley',
                    '    - 98% of India\'s coal from Gondwana rocks',
                    '',
                    '🔷 MESOZOIC ERA (250-65 MYA):',
                    '  • Deccan Traps (volcanic lava):',
                    '    - Massive volcanic eruptions 65 MYA',
                    '    - Covered 500,000 sq km',
                    '    - Maharashtra, MP, Gujarat, Karnataka',
                    '    - Black soil (regur) formed on basalt',
                    '    - Coincided with dinosaur extinction!',
                    '',
                    '🔷 CENOZOIC ERA (65 MYA-present):',
                    '  • Himalayan orogeny (mountain building)',
                    '  • Siwalik System: Fossils, sandstones',
                    '  • Karewas: Kashmir valley lake deposits',
                    '  • Indo-Gangetic alluvium: Recent deposits',
                    '  • Coastal deposits: Youngest'
                ]
            },
            {
                title: 'Major Rock Systems & Minerals',
                icon: '💎',
                points: [
                    '🪨 ARCHEAN SYSTEM:',
                    '  • Rocks: Gneiss, granite, schist',
                    '  • Minerals: Mica, graphite, building stones',
                    '  • Location: Karnataka, Rajasthan, Bundelkhand',
                    '',
                    '🪨 DHARWAR SYSTEM:',
                    '  • Age: 2500-1800 MYA',
                    '  • MOST METALLIC MINERALS:',
                    '    - Gold (Kolar, Hutti - Karnataka)',
                    '    - Iron ore (Bailadila, Singhbhum)',
                    '    - Manganese (Balaghat)',
                    '  • Highly metamorphosed sedimentary rocks',
                    '',
                    '🪨 CUDDAPAH SYSTEM:',
                    '  • Age: 1800-1400 MYA',
                    '  • Location: Crescent-shaped basin in AP',
                    '  • Minerals: Iron, manganese, asbestos, copper',
                    '  • Rocks: Slates, limestones, quartzites',
                    '',
                    '🪨 VINDHYAN SYSTEM:',
                    '  • Age: 1400-600 MYA',
                    '  • Location: Vindhyan Range (MP, UP, Rajasthan)',
                    '  • Famous for:',
                    '    - RED SANDSTONES (Red Fort, Fatehpur Sikri)',
                    '    - DIAMONDS (Panna mines, MP)',
                    '    - Limestones for cement',
                    '  • Horizontally bedded, unmetamorphosed',
                    '',
                    '🪨 GONDWANA SYSTEM:',
                    '  • Age: 300-150 MYA',
                    '  • COAL FIELDS OF INDIA:',
                    '    - Damodar Valley: Jharia, Raniganj, Bokaro',
                    '    - Mahanadi Valley: Talcher, Ib River',
                    '    - Godavari Valley: Singareni',
                    '  • 98% of coal, 100% of Gondwana coal reserves',
                    '  • Named after Gond tribe (MP)',
                    '',
                    '🪨 DECCAN TRAPS:',
                    '  • Age: 65 MYA',
                    '  • VOLCANIC BASALT covering:',
                    '    - Maharashtra (most), MP, Gujarat, Karnataka',
                    '  • Weathering → BLACK SOIL (regur)',
                    '  • Step-like terrain (trap = Dutch for stairs)',
                    '  • Bauxite on top of basalt (laterization)'
                ]
            },
            {
                title: 'Plate Tectonics & India',
                icon: '🌍',
                points: [
                    '🗺️ INDIA\'S POSITION:',
                    '  • Part of Indo-Australian Plate',
                    '  • Originally part of GONDWANALAND:',
                    '    - Africa, South America, Antarctica, Australia',
                    '    - Broke apart ~140 MYA',
                    '',
                    '🚢 INDIA\'S DRIFT:',
                    '  • Separated from Madagascar ~90 MYA',
                    '  • Separated from Antarctica ~70 MYA',
                    '  • Collided with Eurasian Plate ~50 MYA',
                    '  • Still moving NE at 5 cm/year',
                    '',
                    '⛰️ HIMALAYAN FORMATION:',
                    '  • Collision of Indian + Eurasian plates',
                    '  • Tethys Sea sediments folded up',
                    '  • Marine fossils found at high altitudes!',
                    '  • Himalayas still rising 5 mm/year',
                    '',
                    '📊 GEOLOGICAL DIVISIONS:',
                    '  1. PENINSULAR INDIA (Gondwana):',
                    '     • Oldest, most stable',
                    '     • Archaean rocks (3000+ MY old)',
                    '     • Rigid, fractured (not folded)',
                    '     • Low earthquake activity',
                    '',
                    '  2. EXTRA-PENINSULAR (Himalayan):',
                    '     • Young, active, rising',
                    '     • Tethys sea sediments folded',
                    '     • High earthquake activity',
                    '     • Unstable, landslide-prone',
                    '',
                    '  3. INDO-GANGETIC PLAIN:',
                    '     • Depositional basin',
                    '     • Filled with Himalayan sediments',
                    '     • Alluvium up to 8000m deep!',
                    '     • Youngest geological feature'
                ]
            },
            {
                title: 'Evidence of Continental Drift (India)',
                icon: '🔍',
                points: [
                    '🦴 FOSSIL EVIDENCE:',
                    '  • Glossopteris flora: Found in India, S. America, Africa, Australia, Antarctica',
                    '  • Mesosaurus: Freshwater reptile fossils in India and S. America',
                    '  • Lystrosaurus: Found in India, Africa, Antarctica',
                    '  • Proves these continents were joined!',
                    '',
                    '🪨 ROCK MATCHING:',
                    '  • Gondwana rocks match across continents',
                    '  • Coal deposits of same age',
                    '  • Dharwar rocks similar to African rocks',
                    '',
                    '🧊 GLACIAL EVIDENCE:',
                    '  • Tillite (glacial deposits) in Rajasthan, MP',
                    '  • India was near South Pole 300 MYA!',
                    '  • Same glacial evidence in S. America, Africa',
                    '',
                    '🧲 PALEOMAGNETIC EVIDENCE:',
                    '  • Magnetic orientation of rocks shows India\'s position over time',
                    '  • Confirms northward drift'
                ]
            }
        ],

        diagrams: [
            {
                title: 'Geological Time Scale of India',
                type: 'timeline',
                description: 'Vertical timeline from 4000 MYA (bottom) to present (top). Show: Archean (oldest, Karnataka), Proterozoic (Dharwar, Cuddapah, Vindhyan), Paleozoic (Gondwana-coal), Mesozoic (Deccan Traps), Cenozoic (Himalayas). Use different colors for each era.'
            },
            {
                title: 'Rock Systems Map of India',
                type: 'map',
                description: 'India map showing distribution: Archean (Karnataka, Rajasthan - purple), Dharwar (Karnataka belt - orange), Cuddapah (AP crescent - green), Vindhyan (MP-Rajasthan - red), Gondwana (Damodar, Mahanadi valleys - black), Deccan Traps (Maharashtra plateau - dark gray).'
            },
            {
                title: 'India\'s Drift from Gondwanaland',
                type: 'sequence',
                description: 'Four frames showing: (1) 200 MYA - India part of Gondwana (2) 140 MYA - India breaks away (3) 50 MYA - India collides with Asia (4) Present - Himalayas formed. Show Tethys Sea closing.'
            },
            {
                title: 'Himalayan Formation Cross-Section',
                type: 'cross-section',
                description: 'Show Indian Plate diving under Eurasian Plate. Tethys Sea sediments being pushed up. Label: Indian Plate (Gondwana), Eurasian Plate, Tethys sediments folded into Himalayas, Zone of collision.'
            }
        ],

        quickFacts: [
            '🪨 Archean rocks (Karnataka, Rajasthan) are 3000+ million years old',
            '⚫ 98% of India\'s coal comes from Gondwana rock system',
            '🔴 Vindhyan sandstones used to build Red Fort, Fatehpur Sikri',
            '💎 Panna diamonds (MP) come from Vindhyan rocks',
            '🌋 Deccan Traps erupted 65 MYA, covered 500,000 sq km',
            '⛰️ Himalayas formed 50 MYA when India collided with Asia',
            '🚢 India is moving northeast at 5 cm/year (still!)',
            '📏 Indo-Gangetic alluvium is up to 8000m deep in places',
            '🪨 Dharwar rocks are richest in metallic minerals (gold, iron)',
            '🦴 Marine fossils found in Himalayas prove Tethys Sea existence',
            '🧊 Glacial deposits in Rajasthan prove India was near South Pole',
            '⛰️ Himalayas still rising at 5 mm/year due to ongoing collision'
        ],

        upscTraps: [
            {
                trap: 'Gondwana refers only to the supercontinent',
                clarity: 'In Indian context, GONDWANA SYSTEM refers to specific rock formations (300-150 MYA) containing COAL. Named after Gond tribe of MP. Different from Gondwanaland (supercontinent)!'
            },
            {
                trap: 'Deccan Traps are sedimentary rocks',
                clarity: 'Deccan Traps are VOLCANIC (igneous) basalt lava flows. "Traps" = Dutch word for stairs (step-like terrain). Black soil on top is weathered basalt, not sedimentary.'
            },
            {
                trap: 'Peninsular India is geologically young',
                clarity: 'OPPOSITE! Peninsular India is OLDEST and MOST STABLE part (Gondwana, Archean rocks). HIMALAYAS are young and unstable. Peninsula = Grandfather, Himalayas = Teenager.'
            },
            {
                trap: 'Himalayas stopped forming 50 million years ago',
                clarity: 'Himalayas are STILL FORMING! Collision ongoing, rising 5 mm/year. That\'s why frequent earthquakes in Himalayan region. It\'s an active mountain-building zone.'
            }
        ],

        revisionBox: {
            title: '⚡ 30-Second Revision',
            points: [
                'Rock Systems (old→young): Archean → Dharwar (minerals) → Cuddapah → Vindhyan (sandstone, diamonds) → Gondwana (COAL) → Deccan Traps (basalt)',
                'Gondwana = 98% of India\'s coal (Damodar, Mahanadi, Godavari valleys)',
                'Deccan Traps = Volcanic basalt (65 MYA) → Black soil (regur)',
                'India separated from Gondwanaland 140 MYA, collided with Asia 50 MYA',
                'Peninsula = OLD, STABLE (Gondwana) | Himalayas = YOUNG, ACTIVE (Tethys sediments)',
                'India moving NE at 5 cm/year; Himalayas rising 5 mm/year'
            ]
        },

        pyqs: [
            {
                year: 2020,
                question: 'Discuss the geological structure of India with special reference to the rock systems.',
                type: 'Mains'
            },
            {
                year: 2018,
                question: 'Which rock system in India is associated with coal deposits?',
                type: 'Prelims',
                options: ['Dharwar', 'Cuddapah', 'Vindhyan', 'Gondwana']
            },
            {
                year: 2019,
                question: 'Explain the formation of Deccan Traps and their significance.',
                type: 'Mains'
            },
            {
                year: 2021,
                question: 'How does the geological history of India explain the distribution of mineral resources?',
                type: 'Mains'
            },
            {
                year: 2017,
                question: 'The Vindhyan System is famous for:',
                type: 'Prelims',
                options: ['Coal', 'Diamonds', 'Gold', 'Iron ore']
            }
        ]
    },

    // ============================================
    // TOPIC 2: PHYSIOGRAPHIC DIVISIONS OF INDIA
    // ============================================
    {
        id: 'india-physiographic-divisions',
        name: 'Physiographic Divisions of India',
        icon: '🗺️',
        category: 'india-physical',
        theme: 'himalaya',
        difficulty: 'high',
        upscRelevance: 'high',

        mindMap: {
            central: 'Physiographic Divisions',
            branches: [
                {
                    name: 'The Himalayas',
                    color: '#FFFFFF',
                    children: [
                        'Greater Himalayas (Himadri)',
                        'Lesser Himalayas (Himachal)',
                        'Outer Himalayas (Shiwaliks)',
                        'Trans-Himalayas'
                    ]
                },
                {
                    name: 'Northern Plains',
                    color: '#90EE90',
                    children: [
                        'Bhabar (pebble zone)',
                        'Terai (marshy)',
                        'Bhangar (old alluvium)',
                        'Khadar (new alluvium)'
                    ]
                },
                {
                    name: 'Peninsular Plateau',
                    color: '#CD853F',
                    children: [
                        'Central Highlands',
                        'Deccan Plateau',
                        'Western Ghats',
                        'Eastern Ghats'
                    ]
                },
                {
                    name: 'Coastal Plains',
                    color: '#00CED1',
                    children: [
                        'Western Coastal Plain',
                        'Eastern Coastal Plain',
                        'Konkan, Malabar',
                        'Northern Circar, Coromandel'
                    ]
                },
                {
                    name: 'Islands',
                    color: '#FFB6C1',
                    children: [
                        'Andaman & Nicobar',
                        'Lakshadweep',
                        'Volcanic vs Coral'
                    ]
                }
            ]
        },

        memoryHooks: [
            {
                type: 'mnemonic',
                title: 'Six Physiographic Divisions',
                content: 'NHPTIC = "New Houses Provide Total Indian Comfort" → Northern Mountains, Himalayan Foothills, Plains, Thar, Indian Peninsula, Coastal & Islands',
                icon: '🏠'
            },
            {
                type: 'visual',
                title: 'North to South Profile',
                content: 'Imagine walking from Himalayas to Kanyakumari: Snow peaks (Himalayas) → Thick forests (Shiwaliks) → Flat farmland (Plains) → Rocky highlands (Plateau) → Palm beaches (Coast)',
                icon: '🚶'
            },
            {
                type: 'comparison',
                title: 'Plains Zones',
                content: 'BHABAR = Boulders & Pebbles (streams disappear). TERAI = Thick jungle, Tigers (marshy). BHANGAR = Banjar/Barren looking (old, elevated). KHADAR = "Kheti" (new, fertile, flooded)',
                icon: '🌾'
            },
            {
                type: 'story',
                title: 'Western vs Eastern Ghats',
                content: 'Western Ghats = WALL (continuous, high, heavy rain). Eastern Ghats = BROKEN (discontinuous, lower, cut by rivers). West = Wildlife, East = Exit for rivers!',
                icon: '🧱'
            }
        ],

        conceptBlocks: [
            {
                title: 'Overview of Physiographic Divisions',
                icon: '🗺️',
                points: [
                    '📊 INDIA\'S DIMENSIONS:',
                    '  • Area: 3.28 million sq km (7th largest)',
                    '  • North-South: 3,214 km',
                    '  • East-West: 2,933 km',
                    '  • Land frontier: 15,200 km',
                    '  • Coastline: 7,516.6 km',
                    '',
                    '🏔️ SIX MAJOR PHYSIOGRAPHIC DIVISIONS:',
                    '',
                    '  1. THE HIMALAYAN MOUNTAINS:',
                    '     • Northern boundary',
                    '     • Young fold mountains',
                    '     • Source of perennial rivers',
                    '     • Seismic Zone IV & V',
                    '',
                    '  2. NORTHERN PLAINS (Indo-Gangetic):',
                    '     • Alluvial deposits from Himalayas',
                    '     • 7 lakh sq km area',
                    '     • Most fertile, densely populated',
                    '',
                    '  3. PENINSULAR PLATEAU:',
                    '     • Oldest landmass (Gondwana)',
                    '     • Deccan + Central Highlands',
                    '     • Rich in minerals',
                    '',
                    '  4. INDIAN DESERT (Thar):',
                    '     • Rajasthan, Gujarat',
                    '     • Sandy, arid climate',
                    '     • Luni is only river',
                    '',
                    '  5. COASTAL PLAINS:',
                    '     • Western (narrow) + Eastern (broad)',
                    '     • Ports, fishing, coconut',
                    '',
                    '  6. ISLANDS:',
                    '     • Andaman & Nicobar (Bay of Bengal)',
                    '     • Lakshadweep (Arabian Sea)'
                ]
            },
            {
                title: 'The Himalayan Mountains',
                icon: '🏔️',
                points: [
                    '📏 DIMENSIONS:',
                    '  • Length: 2,400 km (Indus to Brahmaputra)',
                    '  • Width: 400 km (Kashmir) to 150 km (Arunachal)',
                    '',
                    '🏔️ LONGITUDINAL DIVISIONS (S→N):',
                    '',
                    '  1️⃣ SHIWALIKS (Outer Himalayas):',
                    '     • Height: 900-1100 m',
                    '     • Youngest range',
                    '     • Composed of unconsolidated sediments',
                    '     • Valleys: Duns (Dehradun, Kotli Dun)',
                    '     • Susceptible to erosion, landslides',
                    '',
                    '  2️⃣ LESSER HIMALAYAS (Himachal):',
                    '     • Height: 3,500-4,500 m',
                    '     • Important ranges: Pir Panjal, Dhaula Dhar',
                    '     • Valleys: Kashmir Valley, Kangra, Kullu',
                    '     • Hill stations: Shimla, Nainital, Mussoorie',
                    '',
                    '  3️⃣ GREATER HIMALAYAS (Himadri):',
                    '     • Height: 6,000+ m average',
                    '     • Permanently snow-capped',
                    '     • All major peaks: Everest, K2, Kanchenjunga',
                    '     • Source of glaciers: Gangotri, Siachen',
                    '     • Granite core',
                    '',
                    '  4️⃣ TRANS-HIMALAYAS:',
                    '     • Beyond Greater Himalayas',
                    '     • Karakoram, Ladakh, Zaskar ranges',
                    '     • Cold desert climate',
                    '     • Indus River originates here',
                    '',
                    '🧭 REGIONAL DIVISIONS (W→E):',
                    '  • Punjab Himalayas: Indus to Sutlej',
                    '  • Kumaon Himalayas: Sutlej to Kali',
                    '  • Nepal Himalayas: Kali to Teesta',
                    '  • Assam Himalayas: Teesta to Brahmaputra'
                ]
            },
            {
                title: 'Northern Plains',
                icon: '🌾',
                points: [
                    '📊 OVERVIEW:',
                    '  • Area: 7 lakh sq km',
                    '  • Length: 2,400 km (E-W)',
                    '  • Width: 150-300 km (N-S)',
                    '  • Formed by: Indus, Ganga, Brahmaputra systems',
                    '  • Alluvium depth: Up to 8,000 m!',
                    '',
                    '🔄 CROSS-SECTION (N→S):',
                    '',
                    '  1️⃣ BHABAR BELT:',
                    '     • Immediately south of Shiwaliks',
                    '     • Width: 8-16 km',
                    '     • Pebbles and boulders deposited',
                    '     • Streams DISAPPEAR underground',
                    '     • Porous, no agriculture',
                    '',
                    '  2️⃣ TERAI BELT:',
                    '     • South of Bhabar',
                    '     • Width: 15-30 km',
                    '     • Streams RE-EMERGE here',
                    '     • Marshy, swampy, thick forests',
                    '     • Wildlife: Tigers, elephants',
                    '     • Now cleared for farming',
                    '',
                    '  3️⃣ BHANGAR (Old Alluvium):',
                    '     • Older alluvial deposits',
                    '     • Elevated, away from flood zone',
                    '     • Contains kankar (calcium nodules)',
                    '     • Less fertile than Khadar',
                    '     • Forms terraces',
                    '',
                    '  4️⃣ KHADAR (New Alluvium):',
                    '     • Latest deposits along rivers',
                    '     • MOST FERTILE (renewed by floods)',
                    '     • Low-lying, flood-prone',
                    '     • Ideal for intensive farming',
                    '     • Rich in nutrients',
                    '',
                    '🗺️ REGIONAL DIVISIONS:',
                    '  • Punjab Plains: Land of 5 rivers',
                    '  • Ganga Plains: Largest, most populous',
                    '  • Brahmaputra Plains: NE India, Assam'
                ]
            },
            {
                title: 'Peninsular Plateau',
                icon: '🏜️',
                points: [
                    '📊 OVERVIEW:',
                    '  • Oldest landmass (Gondwana remnant)',
                    '  • Area: 16 lakh sq km',
                    '  • Average height: 600-900 m',
                    '  • Composed of crystalline rocks',
                    '  • Triangular shape',
                    '',
                    '🔷 CENTRAL HIGHLANDS:',
                    '  • North of Narmada River',
                    '  • Includes:',
                    '    - Malwa Plateau (MP)',
                    '    - Bundelkhand Upland (UP)',
                    '    - Baghelkhand (MP)',
                    '    - Chotanagpur Plateau (Jharkhand)',
                    '  • Slope: South to North (reverse)',
                    '  • Chambal, Betwa, Ken flow north',
                    '',
                    '🔷 DECCAN PLATEAU:',
                    '  • South of Narmada River',
                    '  • Triangular tableland',
                    '  • Slope: West to East',
                    '  • Rivers flow eastward: Godavari, Krishna, Kaveri',
                    '  • Covered by Deccan Traps (basalt)',
                    '  • Black soil (regur) - cotton',
                    '',
                    '⛰️ WESTERN GHATS (Sahyadri):',
                    '  • CONTINUOUS mountain wall',
                    '  • Height: 900-1,600 m (higher in south)',
                    '  • Highest peaks:',
                    '    - Anaimudi (2,695 m) - highest in South India',
                    '    - Dodabetta (2,637 m)',
                    '  • Heavy rainfall (windward)',
                    '  • Biodiversity hotspot',
                    '  • Major gaps: Thal, Bhor, Pal Ghat',
                    '',
                    '⛰️ EASTERN GHATS:',
                    '  • DISCONTINUOUS ranges',
                    '  • Height: 600-900 m',
                    '  • Cut by rivers: Godavari, Krishna, Kaveri',
                    '  • Highest: Mahendragiri (1,501 m)',
                    '  • Rain shadow region',
                    '  • Less forested than Western Ghats'
                ]
            },
            {
                title: 'Coastal Plains & Islands',
                icon: '🏖️',
                points: [
                    '🌊 WESTERN COASTAL PLAIN:',
                    '  • Length: 1,500 km (Gujarat to Kerala)',
                    '  • Width: 10-80 km (NARROW)',
                    '  • Submerged coast (rias, estuaries)',
                    '  • Natural harbors: Mumbai, Marmagao',
                    '  • Divisions (N→S):',
                    '    - Gujarat Coast (widest)',
                    '    - Konkan Coast (Maharashtra)',
                    '    - Karnataka Coast (Kanara)',
                    '    - Malabar Coast (Kerala) - backwaters',
                    '',
                    '🌊 EASTERN COASTAL PLAIN:',
                    '  • Length: 1,500 km (Odisha to Tamil Nadu)',
                    '  • Width: 100-130 km (BROAD)',
                    '  • Emergent coast (deltas)',
                    '  • Major deltas: Mahanadi, Godavari, Krishna, Kaveri',
                    '  • Few natural harbors',
                    '  • Divisions (N→S):',
                    '    - Northern Circar (Odisha-AP)',
                    '    - Coromandel Coast (AP-TN)',
                    '  • Lagoons: Chilika (largest), Pulicat',
                    '',
                    '🏝️ ANDAMAN & NICOBAR ISLANDS:',
                    '  • Bay of Bengal',
                    '  • Total: 572 islands (38 inhabited)',
                    '  • Origin: Submerged mountain range',
                    '  • Volcanic: Barren Island (only active volcano)',
                    '  • Highest: Saddle Peak (732 m)',
                    '  • Dense rainforests',
                    '',
                    '🏝️ LAKSHADWEEP ISLANDS:',
                    '  • Arabian Sea',
                    '  • Total: 36 islands (11 inhabited)',
                    '  • Origin: CORAL atolls',
                    '  • Smallest UT of India (32 sq km)',
                    '  • Main island: Kavaratti (capital)',
                    '  • Low-lying, vulnerable to sea level rise'
                ]
            },
            {
                title: 'Indian Desert (Thar)',
                icon: '🏜️',
                points: [
                    '📊 OVERVIEW:',
                    '  • Location: Rajasthan, Gujarat',
                    '  • Area: 2 lakh sq km',
                    '  • Also called: Great Indian Desert',
                    '',
                    '🏜️ CHARACTERISTICS:',
                    '  • Sandy and rocky terrain',
                    '  • Crescent-shaped dunes (barchans)',
                    '  • Rainfall: <25 cm/year',
                    '  • Temperature: 50°C summer, 0°C winter',
                    '  • Sparse vegetation: Thorny bushes',
                    '',
                    '💧 DRAINAGE:',
                    '  • LUNI: Only river (drains into Rann)',
                    '  • Inland drainage (no outlet to sea)',
                    '  • Ghaggar: Disappears in desert',
                    '  • Indira Gandhi Canal: Transformed agriculture',
                    '',
                    '🔷 RANN OF KUTCH:',
                    '  • Great Rann (north): Larger, salt marsh',
                    '  • Little Rann (south): Wild Ass sanctuary',
                    '  • Seasonal: Flooded in monsoon, dry in winter',
                    '  • White salt desert',
                    '',
                    '⚠️ DESERTIFICATION:',
                    '  • Spreading eastward',
                    '  • Causes: Overgrazing, deforestation',
                    '  • Solution: Afforestation, water conservation'
                ]
            }
        ],

        diagrams: [
            {
                title: 'Physiographic Divisions Map',
                type: 'map',
                description: 'India map showing 6 divisions with different colors: Himalayas (white/blue, north), Northern Plains (green), Peninsular Plateau (brown), Thar Desert (yellow), Coastal Plains (blue strips), Islands (dots in seas).'
            },
            {
                title: 'Himalayan Cross-Section (S→N)',
                type: 'cross-section',
                description: 'Profile showing from south to north: Shiwaliks (900m) → Duns (valleys) → Lesser Himalayas (3500m) → Greater Himalayas (6000m+) → Trans-Himalayas. Label each zone with characteristics.'
            },
            {
                title: 'Northern Plains Cross-Section',
                type: 'cross-section',
                description: 'Profile from Shiwaliks to Ganga showing: Bhabar (pebbles, streams disappear) → Terai (marshy, streams emerge) → Bhangar (elevated, old alluvium) → Khadar (low, new alluvium, floods).'
            },
            {
                title: 'Peninsular Plateau Divisions',
                type: 'map',
                description: 'Map showing: Central Highlands north of Narmada, Deccan Plateau south of Narmada, Western Ghats (continuous line), Eastern Ghats (broken line). Show major rivers flowing east.'
            },
            {
                title: 'Western vs Eastern Coastal Plains',
                type: 'comparison-chart',
                description: 'Two columns comparing: Width (narrow vs broad), Coast type (submerged vs emergent), Features (estuaries vs deltas), Harbors (natural vs few), Names (Konkan/Malabar vs Circar/Coromandel).'
            }
        ],

        quickFacts: [
            '🏔️ Himalayas: 2,400 km long, width varies 400 km (Kashmir) to 150 km (Arunachal)',
            '⛰️ Anaimudi (2,695 m) is highest peak in South India (Western Ghats)',
            '🌾 Indo-Gangetic Plain: 7 lakh sq km, alluvium up to 8,000 m deep',
            '🔄 Bhabar = streams disappear; Terai = streams reappear (marshy)',
            '📊 Khadar = new alluvium (fertile); Bhangar = old alluvium (kankar)',
            '⛰️ Western Ghats are CONTINUOUS; Eastern Ghats are DISCONTINUOUS',
            '🌊 Western coast: NARROW with estuaries; Eastern coast: BROAD with deltas',
            '🏝️ Barren Island is India\'s ONLY active volcano (Andaman)',
            '🏝️ Lakshadweep: CORAL atolls; Andaman & Nicobar: Submerged mountains',
            '🏜️ Luni is the ONLY river in Thar Desert',
            '🌊 Chilika Lake is India\'s LARGEST lagoon (Odisha)',
            '⛰️ Pal Ghat Gap connects Kerala with Tamil Nadu through Western Ghats'
        ],

        upscTraps: [
            {
                trap: 'Terai and Bhabar are the same type of region',
                clarity: 'DIFFERENT! Bhabar = pebbles, porous, streams DISAPPEAR underground. Terai = marshy, streams REAPPEAR, thick forests. Terai is south of Bhabar.'
            },
            {
                trap: 'Eastern Ghats are higher than Western Ghats',
                clarity: 'OPPOSITE! Western Ghats are HIGHER (average 1000m, peaks 2600m). Eastern Ghats are LOWER (average 600m). Western = Continuous wall, Eastern = Broken by rivers.'
            },
            {
                trap: 'Deccan Plateau slopes from east to west',
                clarity: 'OPPOSITE! Deccan slopes from WEST TO EAST. That\'s why major rivers (Godavari, Krishna, Kaveri) flow EASTWARD into Bay of Bengal.'
            },
            {
                trap: 'Andaman islands are coral islands',
                clarity: 'Andaman & Nicobar are VOLCANIC/tectonic (submerged mountain range). LAKSHADWEEP islands are CORAL atolls. Don\'t confuse!'
            }
        ],

        revisionBox: {
            title: '⚡ 30-Second Revision',
            points: [
                '6 Divisions: Himalayas, Northern Plains, Peninsular Plateau, Thar Desert, Coastal Plains, Islands',
                'Himalayas (S→N): Shiwaliks (900m) → Lesser (3500m) → Greater (6000m+) → Trans-Himalaya',
                'Plains (N→S): Bhabar (pebbles) → Terai (marshy) → Bhangar (old) → Khadar (new, fertile)',
                'Plateau: Central Highlands (N of Narmada) + Deccan (S of Narmada) - slopes WEST to EAST',
                'Ghats: Western = Continuous, higher, biodiversity | Eastern = Discontinuous, broken by rivers',
                'Islands: A&N = Volcanic (Barren Island active) | Lakshadweep = Coral atolls'
            ]
        },

        pyqs: [
            {
                year: 2021,
                question: 'Describe the physiographic divisions of India and explain how they influence the climate.',
                type: 'Mains'
            },
            {
                year: 2019,
                question: 'Differentiate between Bhabar and Terai regions of Northern Plains.',
                type: 'Mains'
            },
            {
                year: 2020,
                question: 'Compare and contrast the Western and Eastern Ghats.',
                type: 'Mains'
            },
            {
                year: 2018,
                question: 'Which is the highest peak in South India?',
                type: 'Prelims',
                options: ['Dodabetta', 'Anaimudi', 'Mahendragiri', 'Nilgiri']
            },
            {
                year: 2022,
                question: 'Discuss the formation and characteristics of the Northern Plains of India.',
                type: 'Mains'
            }
        ]
    },

    // ============================================
    // TOPIC 3: THE HIMALAYAS (DETAILED)
    // ============================================
    {
        id: 'himalayas-detailed',
        name: 'The Himalayas (Detailed)',
        icon: '🏔️',
        category: 'india-physical',
        theme: 'himalaya',
        difficulty: 'high',
        upscRelevance: 'very-high',

        mindMap: {
            central: 'The Himalayas',
            branches: [
                {
                    name: 'Formation',
                    color: '#E74C3C',
                    children: [
                        'Tethys Sea sediments',
                        'India-Eurasia collision',
                        '50 MYA - Tertiary period',
                        'Still rising 5mm/year'
                    ]
                },
                {
                    name: 'Parallel Ranges',
                    color: '#3498DB',
                    children: [
                        'Trans-Himalayas (north)',
                        'Greater Himalayas (Himadri)',
                        'Lesser Himalayas (Himachal)',
                        'Shiwaliks (Outer)'
                    ]
                },
                {
                    name: 'Regional Divisions',
                    color: '#2ECC71',
                    children: [
                        'Kashmir/Punjab Himalayas',
                        'Kumaon Himalayas',
                        'Nepal Himalayas',
                        'Assam/Eastern Himalayas'
                    ]
                },
                {
                    name: 'Significance',
                    color: '#9B59B6',
                    children: [
                        'Climate barrier',
                        'Perennial rivers (glaciers)',
                        'Biodiversity hotspot',
                        'Hydropower potential'
                    ]
                },
                {
                    name: 'Major Features',
                    color: '#F39C12',
                    children: [
                        'Peaks: Everest, K2, Kanchenjunga',
                        'Glaciers: Siachen, Gangotri',
                        'Passes: Khyber, Rohtang, Nathu La',
                        'Valleys: Kashmir, Kangra, Kullu'
                    ]
                }
            ]
        },

        memoryHooks: [
            {
                type: 'mnemonic',
                title: 'Himalayan Ranges (S→N)',
                content: 'SLGT = "Start Learning Geography Today" → Shiwaliks, Lesser, Greater, Trans-Himalayas (south to north order)',
                icon: '⬆️'
            },
            {
                type: 'story',
                title: 'Height Progression',
                content: 'Like climbing stairs: Shiwaliks (1000m - Ground floor) → Lesser (3500m - Middle floor) → Greater (6000m+ - Top floor) → Trans (beyond!)',
                icon: '🪜'
            },
            {
                type: 'visual',
                title: 'Remember Major Peaks',
                content: 'K-K-K-N-N = K2, Kanchenjunga, Kangchenjunga, Nanda Devi, Nanga Parbat. All in top 10 highest peaks!',
                icon: '🏔️'
            },
            {
                type: 'comparison',
                title: 'Regional Division Rivers',
                content: 'Boundaries = Rivers! Punjab (Indus→Sutlej), Kumaon (Sutlej→Kali), Nepal (Kali→Teesta), Assam (Teesta→Brahmaputra)',
                icon: '💧'
            },
            {
                type: 'acronym',
                title: 'Trans-Himalayan Ranges',
                content: 'KLZ = Karakoram, Ladakh, Zaskar. "Kings Love Zigzag mountains!"',
                icon: '👑'
            }
        ],

        conceptBlocks: [
            {
                title: 'Origin & Formation of Himalayas',
                icon: '🌍',
                points: [
                    '🌊 TETHYS SEA THEORY:',
                    '  • Tethys = Ancient sea between Gondwana and Laurasia',
                    '  • Sediments accumulated for millions of years',
                    '  • Marine fossils found at high altitudes (proof!)',
                    '',
                    '💥 COLLISION THEORY:',
                    '  • Indian Plate separated from Gondwana ~140 MYA',
                    '  • Moved northward at 15-20 cm/year',
                    '  • Collided with Eurasian Plate ~50 MYA',
                    '  • Tethys sediments FOLDED UP → Himalayas!',
                    '',
                    '📈 PHASES OF UPLIFT:',
                    '  • 1st Phase (50-40 MYA): Trans-Himalaya formed',
                    '  • 2nd Phase (30-25 MYA): Greater Himalayas rose',
                    '  • 3rd Phase (15-10 MYA): Lesser Himalayas formed',
                    '  • 4th Phase (5-2 MYA): Shiwaliks emerged',
                    '',
                    '🔄 ONGOING PROCESS:',
                    '  • Himalayas still RISING at 5 mm/year',
                    '  • India still pushing north at 5 cm/year',
                    '  • Frequent earthquakes (active zone)',
                    '  • Landslides, glacial lake outbursts',
                    '',
                    '📊 KEY TERMINOLOGY:',
                    '  • Orogeny = Mountain building process',
                    '  • Syntaxis = Sharp bends at ends (Nanga Parbat, Namcha Barwa)',
                    '  • Suture Zone = Where plates joined (Indus-Tsangpo Suture)'
                ]
            },
            {
                title: 'Parallel Ranges (South to North)',
                icon: '⛰️',
                points: [
                    '1️⃣ SHIWALIKS (Outer Himalayas):',
                    '  • Height: 900-1,100 m',
                    '  • Age: YOUNGEST (2-5 MYA)',
                    '  • Composition: Unconsolidated sediments, gravel, sandstone',
                    '  • Features:',
                    '    - Easily eroded, landslide-prone',
                    '    - Dense forests (Sal)',
                    '    - DUNS: Longitudinal valleys (Dehradun, Kotli Dun, Patli Dun)',
                    '  • Width: 10-50 km',
                    '',
                    '2️⃣ LESSER HIMALAYAS (Himachal/Middle):',
                    '  • Height: 3,500-4,500 m',
                    '  • Composition: Metamorphic rocks (slate, schist)',
                    '  • Important Ranges:',
                    '    - Pir Panjal (longest, Kashmir)',
                    '    - Dhaula Dhar (Kangra)',
                    '    - Mahabharat (Nepal)',
                    '    - Mussoorie Range',
                    '  • Features:',
                    '    - Hill stations: Shimla, Nainital, Mussoorie, Darjeeling',
                    '    - Fertile valleys: Kashmir, Kangra, Kullu',
                    '    - Apple orchards, tea gardens',
                    '  • Width: 60-80 km',
                    '',
                    '3️⃣ GREATER HIMALAYAS (Himadri/Central):',
                    '  • Height: Average 6,000 m+',
                    '  • Composition: Granite core with crystalline rocks',
                    '  • Features:',
                    '    - PERMANENTLY SNOW-COVERED',
                    '    - All major peaks here',
                    '    - Source of major glaciers',
                    '    - Sparse population',
                    '  • Major Peaks (in India):',
                    '    - Kanchenjunga: 8,586 m (3rd highest, Sikkim)',
                    '    - Nanda Devi: 7,816 m (highest entirely in India)',
                    '    - Kamet: 7,756 m',
                    '  • Width: 25-30 km (narrowest but highest)',
                    '',
                    '4️⃣ TRANS-HIMALAYAS (Tibetan Himalayas):',
                    '  • Height: 5,500-6,000 m',
                    '  • Location: NORTH of Greater Himalayas',
                    '  • Ranges:',
                    '    - KARAKORAM: K2 (8,611 m - 2nd highest)',
                    '      * World\'s longest glaciers outside poles',
                    '      * Siachen (76 km), Baltoro, Biafo',
                    '    - LADAKH RANGE: Between Indus and Shyok rivers',
                    '    - ZASKAR RANGE: Between Indus and Zaskar rivers',
                    '  • Features:',
                    '    - Cold desert climate',
                    '    - Rain shadow zone',
                    '    - Buddhist culture (Leh, Ladakh)',
                    '    - Strategic importance (LAC with China)'
                ]
            },
            {
                title: 'Regional Divisions (West to East)',
                icon: '🧭',
                points: [
                    '1️⃣ KASHMIR/PUNJAB HIMALAYAS:',
                    '  • Extent: Indus River → Sutlej River',
                    '  • States: J&K, Himachal Pradesh',
                    '  • Important Features:',
                    '    - Kashmir Valley (between Pir Panjal & Greater)',
                    '    - Dal Lake, Wular Lake (largest freshwater)',
                    '    - Passes: Zoji La, Banihal, Pir Panjal',
                    '    - Karewa deposits (saffron cultivation)',
                    '  • Rivers: Indus, Jhelum, Chenab, Ravi, Beas, Sutlej',
                    '  • Glaciers: Siachen, Baltoro',
                    '  • Width: WIDEST (400+ km)',
                    '',
                    '2️⃣ KUMAON HIMALAYAS:',
                    '  • Extent: Sutlej River → Kali River',
                    '  • States: Uttarakhand',
                    '  • Important Features:',
                    '    - Nanda Devi (7,816 m) - highest peak fully in India',
                    '    - Valley of Flowers (UNESCO site)',
                    '    - Glaciers: Gangotri, Yamunotri',
                    '    - Holy sites: Char Dham (Kedarnath, Badrinath)',
                    '  • Rivers: Ganga (Bhagirathi + Alaknanda), Yamuna',
                    '  • Hill stations: Nainital, Mussoorie, Almora',
                    '',
                    '3️⃣ NEPAL HIMALAYAS:',
                    '  • Extent: Kali River → Teesta River',
                    '  • Mostly in Nepal (some in India - Sikkim, Darjeeling)',
                    '  • Important Features:',
                    '    - HIGHEST section - Mount Everest (8,849 m)',
                    '    - Kanchenjunga (8,586 m) on India-Nepal border',
                    '    - 8 of world\'s 14 peaks above 8,000 m',
                    '  • Rivers: Kosi, Gandak (Narayani)',
                    '  • Glaciers: Khumbu, Zemu',
                    '',
                    '4️⃣ ASSAM/EASTERN HIMALAYAS:',
                    '  • Extent: Teesta River → Brahmaputra (Dihang)',
                    '  • States: Sikkim, West Bengal (Darjeeling), Arunachal',
                    '  • Important Features:',
                    '    - Kanchenjunga (Sikkim border)',
                    '    - Namcha Barwa (7,782 m) - eastern syntaxis',
                    '    - NARROWEST width (150 km)',
                    '    - Highest rainfall area',
                    '  • Rivers: Teesta, Brahmaputra',
                    '  • Hill stations: Darjeeling (tea), Gangtok',
                    '  • Biodiversity: Rhododendrons, Red Pandas'
                ]
            },
            {
                title: 'Major Peaks, Glaciers & Passes',
                icon: '🗻',
                points: [
                    '🏔️ MAJOR PEAKS:',
                    '  • Mount Everest: 8,849 m (Nepal-Tibet border)',
                    '  • K2 (Godwin Austin): 8,611 m (PoK, Karakoram)',
                    '  • Kanchenjunga: 8,586 m (Sikkim-Nepal)',
                    '  • Nanda Devi: 7,816 m (Uttarakhand) - highest ENTIRELY in India',
                    '  • Kamet: 7,756 m (Uttarakhand)',
                    '  • Nanga Parbat: 8,126 m (Western syntaxis, PoK)',
                    '  • Namcha Barwa: 7,782 m (Eastern syntaxis, Arunachal)',
                    '',
                    '🧊 MAJOR GLACIERS:',
                    '  • Siachen: 76 km (longest in Karakoram, world\'s highest battlefield)',
                    '  • Gangotri: 30 km (source of Bhagirathi/Ganga)',
                    '  • Yamunotri: Source of Yamuna',
                    '  • Zemu: Sikkim (one of largest in E Himalayas)',
                    '  • Baltoro: 62 km (K2 region)',
                    '  • Biafo: 67 km (Karakoram)',
                    '',
                    '🚶 MAJOR PASSES:',
                    '  Trans-Himalayan/International:',
                    '    • Karakoram Pass: Ladakh-China (highest motorable)',
                    '    • Khunjerab Pass: Hunza-China (KKH)',
                    '    • Nathu La: Sikkim-Tibet (reopened 2006)',
                    '    • Lipulekh: Uttarakhand-Tibet (Kailash Mansarovar)',
                    '',
                    '  Within Himalayas:',
                    '    • Zoji La: Kashmir-Ladakh (connects Srinagar-Leh)',
                    '    • Banihal Pass: Kashmir Valley-Jammu',
                    '    • Rohtang Pass: Kullu-Lahaul-Spiti',
                    '    • Bara-lacha La: HP-Ladakh (Manali-Leh)',
                    '    • Shipki La: HP-Tibet (Sutlej River)',
                    '    • Bomdila: Arunachal-Tibet',
                    '',
                    '🚗 HIGHEST MOTORABLE PASSES:',
                    '  • Umling La: 19,024 ft (Ladakh) - highest',
                    '  • Khardung La: 18,380 ft (Ladakh)',
                    '  • Chang La: 17,590 ft (Ladakh)'
                ]
            },
            {
                title: 'Significance of Himalayas',
                icon: '⭐',
                points: [
                    '🌡️ CLIMATIC SIGNIFICANCE:',
                    '  • BARRIER to cold Central Asian winds',
                    '  • Keeps India warm in winter',
                    '  • BARRIER to monsoon winds',
                    '  • Forces monsoon to shed moisture → rainfall',
                    '  • Creates rain shadow in Tibet (cold desert)',
                    '',
                    '💧 HYDROLOGICAL SIGNIFICANCE:',
                    '  • Source of PERENNIAL rivers (glaciers)',
                    '  • Ganga, Yamuna, Indus, Brahmaputra',
                    '  • Irrigation for Northern Plains',
                    '  • HYDROPOWER potential (150,000 MW)',
                    '',
                    '🛡️ STRATEGIC SIGNIFICANCE:',
                    '  • Natural FRONTIER (difficult to cross)',
                    '  • Limited passes for invasion',
                    '  • Border with China, Nepal, Bhutan',
                    '  • Siachen - world\'s highest battlefield',
                    '',
                    '🌿 ECOLOGICAL SIGNIFICANCE:',
                    '  • BIODIVERSITY HOTSPOT',
                    '  • Varied ecosystems (tropical to alpine)',
                    '  • Endemic species: Snow leopard, Red panda',
                    '  • Medicinal plants, herbs',
                    '  • UNESCO sites: Nanda Devi, Valley of Flowers',
                    '',
                    '💰 ECONOMIC SIGNIFICANCE:',
                    '  • TOURISM: Hill stations, pilgrimage, trekking',
                    '  • AGRICULTURE: Apple, saffron, tea, cardamom',
                    '  • FORESTRY: Timber, medicinal herbs',
                    '  • MINERALS: Some deposits',
                    '  • HYDROPOWER: Major projects',
                    '',
                    '🕉️ CULTURAL/RELIGIOUS:',
                    '  • Abode of Gods (Devbhoomi)',
                    '  • Char Dham, Vaishno Devi, Amarnath',
                    '  • Buddhist monasteries (Ladakh, Sikkim)',
                    '  • Source of holy rivers'
                ]
            },
            {
                title: 'Himalayan Problems & Issues',
                icon: '⚠️',
                points: [
                    '🌋 SEISMIC VULNERABILITY:',
                    '  • Zone IV and V (highest risk)',
                    '  • Active collision zone',
                    '  • Major earthquakes: 1905 (Kangra), 2015 (Nepal)',
                    '  • Building codes often ignored',
                    '',
                    '🏔️ LANDSLIDES & EROSION:',
                    '  • Fragile, young mountains',
                    '  • Deforestation increases risk',
                    '  • Monsoon triggers slides',
                    '  • Road construction destabilizes slopes',
                    '',
                    '🌊 GLACIAL LAKE OUTBURST FLOODS (GLOF):',
                    '  • Glaciers retreating due to warming',
                    '  • Glacial lakes forming',
                    '  • Dam burst → catastrophic floods',
                    '  • Kedarnath 2013 disaster',
                    '',
                    '🌡️ CLIMATE CHANGE IMPACTS:',
                    '  • Glaciers retreating rapidly',
                    '  • Gangotri retreating 20-25 m/year',
                    '  • Reduced water availability long-term',
                    '  • Shifting vegetation zones',
                    '  • More extreme weather events',
                    '',
                    '🏗️ DEVELOPMENTAL ISSUES:',
                    '  • Hydropower vs Environment conflict',
                    '  • Unplanned tourism pressure',
                    '  • Solid waste management',
                    '  • Water pollution of rivers',
                    '  • Loss of biodiversity'
                ]
            }
        ],

        diagrams: [
            {
                title: 'Himalayan Parallel Ranges (S→N)',
                type: 'cross-section',
                description: 'Cross-section showing from south to north: Shiwaliks (1000m, Duns shown) → Lesser Himalayas (3500m, Pir Panjal, hill stations) → Greater Himalayas (6000m+, snow peaks, glaciers) → Trans-Himalayas (Karakoram, Ladakh, cold desert). Show relative heights and widths.'
            },
            {
                title: 'Regional Divisions (W→E)',
                type: 'map',
                description: 'Map showing 4 regional divisions with boundary rivers: Punjab/Kashmir (Indus-Sutlej), Kumaon (Sutlej-Kali), Nepal (Kali-Teesta), Assam (Teesta-Brahmaputra). Mark major peaks, glaciers, and passes in each.'
            },
            {
                title: 'Himalayan Formation Sequence',
                type: 'sequence',
                description: 'Four frames: (1) Tethys Sea with sediments (2) Indian Plate approaching (3) Collision and folding (4) Present Himalayas with ranges labeled. Show plate movement arrows.'
            },
            {
                title: 'Major Passes Map',
                type: 'map',
                description: 'Himalayan outline with all major passes marked: Karakoram, Khunjerab, Zoji La, Banihal, Rohtang, Shipki La, Nathu La, Bomdila. Show connecting routes.'
            },
            {
                title: 'Glaciers and River Sources',
                type: 'map',
                description: 'Map showing major glaciers (Siachen, Gangotri, Yamunotri) and rivers originating from them (Indus, Ganga, Yamuna, Brahmaputra). Show glacier-to-river connections.'
            }
        ],

        quickFacts: [
            '🏔️ Himalayas: 2,400 km long, 150-400 km wide',
            '⛰️ Mount Everest: 8,849 m (highest in world, Nepal-Tibet)',
            '🇮🇳 Nanda Devi: 7,816 m (highest peak ENTIRELY in India)',
            '🧊 Siachen Glacier: 76 km (longest in Karakoram, highest battlefield)',
            '📈 Himalayas still rising at 5 mm/year (active collision)',
            '🌊 Tethys Sea sediments folded up - marine fossils found at peaks!',
            '🚶 Umling La: 19,024 ft - highest motorable pass in world (Ladakh)',
            '⬅️ Punjab/Kashmir Himalayas are WIDEST (400+ km)',
            '➡️ Assam Himalayas are NARROWEST (150 km)',
            '🌧️ Eastern Himalayas receive HIGHEST rainfall',
            '🏔️ 8 of world\'s 14 peaks above 8000m are in Nepal Himalayas',
            '⚡ Hydropower potential: 150,000 MW (largest in world)',
            '🦁 Syntaxis points: Nanga Parbat (west), Namcha Barwa (east)'
        ],

        upscTraps: [
            {
                trap: 'Mount Everest is in India',
                clarity: 'Mount Everest is on NEPAL-TIBET border, NOT in India. KANCHENJUNGA (8,586 m) is highest peak on Indian border (India-Nepal). NANDA DEVI (7,816 m) is highest peak ENTIRELY within India.'
            },
            {
                trap: 'Greater Himalayas are the widest range',
                clarity: 'OPPOSITE! Greater Himalayas are NARROWEST (25-30 km) but HIGHEST. Lesser Himalayas are WIDEST (60-80 km) and house most hill stations.'
            },
            {
                trap: 'Trans-Himalayas are part of main Himalayan system',
                clarity: 'Trans-Himalayas are BEYOND the main Himalayas, NORTH of Greater Himalayas. Different origin (not Tethyan sediments). Includes Karakoram, Ladakh, Zaskar ranges.'
            },
            {
                trap: 'Shiwaliks are the oldest Himalayan range',
                clarity: 'OPPOSITE! Shiwaliks are YOUNGEST (2-5 MYA). Trans-Himalayas formed first (50 MYA), then Greater (30 MYA), then Lesser (15 MYA), then Shiwaliks (youngest).'
            }
        ],

        revisionBox: {
            title: '⚡ 30-Second Revision',
            points: [
                'Formation: Tethys sediments folded by India-Eurasia collision (50 MYA)',
                'Ranges (S→N): Shiwaliks (1000m, youngest) → Lesser (3500m) → Greater (6000m+) → Trans-Himalaya',
                'Regions (W→E): Punjab (widest) → Kumaon → Nepal (highest) → Assam (narrowest)',
                'Peaks: Everest (8849m, Nepal) | K2 (8611m, PoK) | Kanchenjunga (8586m, Sikkim) | Nanda Devi (7816m, fully India)',
                'Glaciers: Siachen (76km, longest) | Gangotri (Ganga source) | Yamunotri (Yamuna)',
                'Significance: Climate barrier, perennial rivers, hydropower, biodiversity, defense'
            ]
        },

        pyqs: [
            {
                year: 2022,
                question: 'Discuss the origin and evolution of the Himalayas.',
                type: 'Mains'
            },
            {
                year: 2020,
                question: 'Describe the parallel ranges of the Himalayas from south to north.',
                type: 'Mains'
            },
            {
                year: 2019,
                question: 'Which is the highest peak entirely within Indian territory?',
                type: 'Prelims',
                options: ['Kanchenjunga', 'Nanda Devi', 'K2', 'Kamet']
            },
            {
                year: 2021,
                question: 'Examine the significance of the Himalayas for the Indian subcontinent.',
                type: 'Mains'
            },
            {
                year: 2018,
                question: 'What are the causes of landslides in the Himalayan region?',
                type: 'Mains'
            },
            {
                year: 2017,
                question: 'Discuss the impact of climate change on Himalayan glaciers.',
                type: 'Mains'
            }
        ]
    },

    // ============================================
    // TOPIC 4: NORTHERN PLAINS
    // ============================================
    {
        id: 'northern-plains',
        name: 'Northern Plains',
        icon: '🌾',
        category: 'india-physical',
        theme: 'river',
        difficulty: 'medium',
        upscRelevance: 'high',

        mindMap: {
            central: 'Northern Plains',
            branches: [
                {
                    name: 'Formation',
                    color: '#27AE60',
                    children: [
                        'Himalayan sediments',
                        'Tectonic depression (foredeep)',
                        'Alluvium deposits',
                        'Still filling!'
                    ]
                },
                {
                    name: 'Cross-Section Zones',
                    color: '#3498DB',
                    children: [
                        'Bhabar (pebbles)',
                        'Terai (marshy)',
                        'Bhangar (old alluvium)',
                        'Khadar (new alluvium)'
                    ]
                },
                {
                    name: 'Regional Divisions',
                    color: '#E74C3C',
                    children: [
                        'Punjab Plains',
                        'Ganga Plains',
                        'Brahmaputra Plains'
                    ]
                },
                {
                    name: 'Characteristics',
                    color: '#9B59B6',
                    children: [
                        'Flat terrain',
                        'Deep alluvium (8000m)',
                        'Most fertile',
                        'Most populated'
                    ]
                },
                {
                    name: 'River Systems',
                    color: '#F39C12',
                    children: [
                        'Indus system (Punjab)',
                        'Ganga system (UP, Bihar)',
                        'Brahmaputra system (Assam)'
                    ]
                }
            ]
        },

        memoryHooks: [
            {
                type: 'mnemonic',
                title: 'Zones North to South',
                content: 'BBTBK = "Big Boys Take Big Khana (food)" → Bhabar, (Terai), Bhangar, Khadar. Actually just BTBK - Bhabar, Terai, Bhangar, Khadar!',
                icon: '🍽️'
            },
            {
                type: 'story',
                title: 'Water Journey',
                content: 'Water from Himalayas travels: Gets absorbed in BHABAR (pebbles) → Emerges in TERAI (swamps) → Deposits old soil (BHANGAR) → Renews with floods (KHADAR - fertile!)',
                icon: '💧'
            },
            {
                type: 'comparison',
                title: 'Bhangar vs Khadar',
                content: 'BHANGAR = "BANJAR" (barren-looking), old, elevated, contains KANKAR (calcium). KHADAR = "KHETI" (farming), new, low, FERTILE, floods bring nutrients!',
                icon: '🌾'
            },
            {
                type: 'visual',
                title: 'Punjab = Five Rivers',
                content: 'Punjab = "Punj + Ab" = Five + Waters. Remember: Jhelum, Chenab, Ravi, Beas, Sutlej (all tributaries of Indus). Now 3 in Pakistan!',
                icon: '5️⃣'
            }
        ],

        conceptBlocks: [
            {
                title: 'Formation of Northern Plains',
                icon: '🏗️',
                points: [
                    '🌍 TECTONIC ORIGIN:',
                    '  • Formed as FOREDEEP (depression)',
                    '  • Created by Himalayan uplift',
                    '  • Depression between Himalayas and Peninsula',
                    '  • Sinking basin filled with sediments',
                    '',
                    '🪨 ALLUVIUM DEPOSITION:',
                    '  • Rivers brought sediments from Himalayas',
                    '  • Deposited over millions of years',
                    '  • Alluvium depth: Up to 8,000 m!',
                    '  • Still being deposited (active floodplains)',
                    '',
                    '📊 DIMENSIONS:',
                    '  • Area: 7 lakh sq km (7,00,000 km²)',
                    '  • Length: 2,400 km (E-W)',
                    '  • Width: 150-300 km (N-S)',
                    '    - Widest in Punjab-Haryana',
                    '    - Narrowest in Assam',
                    '  • Slope: Very gentle (1m per 5km)',
                    '',
                    '⏳ AGE:',
                    '  • Quaternary period (last 2 MYA)',
                    '  • Youngest physiographic division',
                    '  • Still forming/changing with each flood'
                ]
            },
            {
                title: 'Cross-Section Zones (N→S)',
                icon: '📊',
                points: [
                    '1️⃣ BHABAR BELT:',
                    '  • Location: Immediately below Shiwaliks',
                    '  • Width: 8-16 km (narrow strip)',
                    '  • Composition:',
                    '    - Pebbles, boulders, gravels',
                    '    - Coarse sediments',
                    '    - Very porous',
                    '  • Features:',
                    '    - Streams DISAPPEAR (go underground)',
                    '    - Water percolates through porous rocks',
                    '    - Very little surface water',
                    '    - Unsuitable for agriculture',
                    '    - Dry, covered with thick forests',
                    '',
                    '2️⃣ TERAI BELT:',
                    '  • Location: South of Bhabar',
                    '  • Width: 15-30 km',
                    '  • Features:',
                    '    - Streams RE-EMERGE to surface',
                    '    - Underground water comes up',
                    '    - MARSHY, SWAMPY terrain',
                    '    - Dense forests (originally)',
                    '    - Wildlife: Tigers, elephants, rhinos',
                    '    - Tarai region of Nepal, UP, Bihar',
                    '  • Human Activity:',
                    '    - Historically: Malaria-prone, sparsely populated',
                    '    - Now: Cleared for agriculture (rice, sugarcane)',
                    '    - Wildlife pushed to reserves (Corbett, Dudhwa)',
                    '',
                    '3️⃣ BHANGAR (Old Alluvium):',
                    '  • Location: Main plain area (elevated)',
                    '  • Composition:',
                    '    - OLD alluvial deposits',
                    '    - Deposited earlier, now raised',
                    '    - Contains KANKAR (calcium carbite nodules)',
                    '    - Clayey, less porous',
                    '  • Features:',
                    '    - Elevated above flood zone',
                    '    - NOT renewed by annual floods',
                    '    - LESS FERTILE than Khadar',
                    '    - Forms terraces/uplands',
                    '    - Main settlement areas',
                    '',
                    '4️⃣ KHADAR (New Alluvium):',
                    '  • Location: Along river banks, floodplains',
                    '  • Composition:',
                    '    - NEW alluvial deposits',
                    '    - Renewed every monsoon/flood',
                    '    - Fine silt, sand, clay',
                    '    - No kankar',
                    '  • Features:',
                    '    - LOW-LYING areas',
                    '    - FLOOD-PRONE',
                    '    - MOST FERTILE (nutrients from floods)',
                    '    - Ideal for intensive agriculture',
                    '    - Risk of waterlogging',
                    '    - Rich, dark soil'
                ]
            },
            {
                title: 'Regional Divisions',
                icon: '🗺️',
                points: [
                    '1️⃣ PUNJAB-HARYANA PLAINS:',
                    '  • Rivers: Indus system tributaries',
                    '    - Jhelum, Chenab, Ravi, Beas, Sutlej',
                    '    - Punjab = "Land of Five Rivers"',
                    '  • Features:',
                    '    - DOABS: Land between two rivers',
                    '      * Bari Doab (Beas-Ravi)',
                    '      * Bist Doab (Beas-Sutlej)',
                    '    - Most fertile in plains',
                    '    - Green Revolution heartland',
                    '    - Wheat, rice, cotton',
                    '  • Width: WIDEST section of plains',
                    '  • Issues: Groundwater depletion, waterlogging',
                    '',
                    '2️⃣ GANGA PLAINS:',
                    '  • Rivers: Ganga and tributaries',
                    '    - Left: Gomti, Ghaghara, Gandak, Kosi',
                    '    - Right: Yamuna, Son, Chambal',
                    '  • States: UP, Bihar, Jharkhand (part), WB',
                    '  • Sub-regions:',
                    '    - UPPER GANGA PLAIN:',
                    '      * Ganga-Yamuna Doab',
                    '      * Rohilkhand, Meerut',
                    '      * Sugarcane, wheat',
                    '    - MIDDLE GANGA PLAIN:',
                    '      * Eastern UP, Bihar',
                    '      * Rice, maize',
                    '      * Flood-prone',
                    '    - LOWER GANGA PLAIN (Bengal):',
                    '      * Ganga Delta begins',
                    '      * Sundarbans (world\'s largest mangrove)',
                    '      * Rice, jute',
                    '  • MOST DENSELY POPULATED region of India',
                    '',
                    '3️⃣ BRAHMAPUTRA PLAINS:',
                    '  • River: Brahmaputra (from Tibet)',
                    '  • Location: Assam Valley',
                    '  • Features:',
                    '    - NARROWEST section (80-100 km)',
                    '    - Flanked by hills on both sides',
                    '    - Brahmaputra is BRAIDED river',
                    '    - MAJULI: World\'s largest river island',
                    '    - Highly flood-prone',
                    '    - Tea gardens, rice, jute',
                    '  • Unique: River flows west to east (unusual)',
                    '  • Issues: Annual floods, erosion, shifting channels'
                ]
            },
            {
                title: 'Characteristics & Significance',
                icon: '⭐',
                points: [
                    '📊 PHYSICAL CHARACTERISTICS:',
                    '  • FLAT terrain (almost negligible slope)',
                    '  • Slope: Only 1 meter per 5 km',
                    '  • Alluvium depth: 400 m (avg) to 8,000 m (max)',
                    '  • No hard rock outcrops',
                    '  • Perennial rivers from Himalayas',
                    '',
                    '🌾 AGRICULTURAL SIGNIFICANCE:',
                    '  • MOST FERTILE land in India',
                    '  • Khadar renewed by floods',
                    '  • Multiple cropping possible',
                    '  • Green Revolution success',
                    '  • Crops: Rice, wheat, sugarcane, cotton, jute',
                    '  • Irrigation: Canals, tubewells',
                    '',
                    '👥 DEMOGRAPHIC SIGNIFICANCE:',
                    '  • MOST DENSELY POPULATED region',
                    '  • ~40% of India\'s population',
                    '  • Major cities: Delhi, Lucknow, Patna, Kolkata',
                    '  • Ancient civilizations flourished here',
                    '',
                    '🚂 TRANSPORT SIGNIFICANCE:',
                    '  • Flat terrain = easy transport',
                    '  • Major road/rail networks',
                    '  • Navigable rivers',
                    '  • National highways, expressways',
                    '',
                    '💧 WATER RESOURCES:',
                    '  • Rich groundwater aquifers',
                    '  • Perennial rivers',
                    '  • Canal irrigation network',
                    '  • Hydropower (Himalayas)',
                    '',
                    '⚠️ CHALLENGES:',
                    '  • Annual FLOODS (Bihar, Assam)',
                    '  • WATERLOGGING (Punjab)',
                    '  • Soil SALINITY (over-irrigation)',
                    '  • GROUNDWATER DEPLETION',
                    '  • POLLUTION (river, air)'
                ]
            },
            {
                title: 'Special Features & Landforms',
                icon: '🔷',
                points: [
                    '🏝️ DOABS:',
                    '  • "Do + Ab" = Two + Waters',
                    '  • Land between two rivers',
                    '  • Most fertile parts',
                    '  • Examples:',
                    '    - Ganga-Yamuna Doab (most famous)',
                    '    - Bari Doab (Beas-Ravi)',
                    '    - Bist Doab (Beas-Sutlej)',
                    '',
                    '🏝️ CHARS/DIARA:',
                    '  • Temporary sand islands in rivers',
                    '  • Formed by sediment deposition',
                    '  • Common in Brahmaputra (CHARS)',
                    '  • Common in Ganga (DIARA)',
                    '  • Temporary cultivation, flood-prone',
                    '',
                    '🏝️ MAJULI ISLAND:',
                    '  • World\'s LARGEST river island',
                    '  • In Brahmaputra, Assam',
                    '  • Area: ~880 sq km',
                    '  • Vaishnavite culture center',
                    '  • Shrinking due to erosion',
                    '',
                    '🌊 SUNDARBANS:',
                    '  • World\'s LARGEST mangrove delta',
                    '  • Ganga-Brahmaputra delta',
                    '  • India-Bangladesh border',
                    '  • UNESCO World Heritage Site',
                    '  • Bengal Tiger habitat',
                    '',
                    '💧 OXBOW LAKES:',
                    '  • Cut-off river meanders',
                    '  • Common in Ganga plains',
                    '  • Crescent-shaped',
                    '  • Example: Many in Bihar plains',
                    '',
                    '🏔️ BHUR:',
                    '  • Sand dune formations',
                    '  • Upper Ganga-Yamuna Doab',
                    '  • Old river channel deposits',
                    '  • Generally infertile'
                ]
            }
        ],

        diagrams: [
            {
                title: 'Cross-Section of Northern Plains (N→S)',
                type: 'cross-section',
                description: 'Profile from Shiwaliks to main river showing: Bhabar (pebbles, 8-16km, streams disappear) → Terai (marshy, 15-30km, streams emerge) → Bhangar (elevated, old alluvium, kankar) → Khadar (low, new alluvium, floods). Use arrows for water flow.'
            },
            {
                title: 'Regional Divisions Map',
                type: 'map',
                description: 'Map showing three divisions: Punjab Plains (Indus tributaries, green), Ganga Plains with subdivisions (UP/Bihar/Bengal, yellow), Brahmaputra Plains (Assam, blue). Mark major rivers and cities.'
            },
            {
                title: 'Doabs of Punjab',
                type: 'diagram',
                description: 'Map showing rivers (Jhelum, Chenab, Ravi, Beas, Sutlej) and doabs between them (Bari, Bist, Chaj, Rechna). Label each doab with rivers on either side.'
            },
            {
                title: 'Bhangar vs Khadar Comparison',
                type: 'comparison-chart',
                description: 'Table comparing: Position (elevated vs low), Age (old vs new), Fertility (less vs more), Flooding (rare vs common), Features (kankar vs no kankar).'
            }
        ],

        quickFacts: [
            '📏 Northern Plains: 7 lakh sq km, 2,400 km long, 150-300 km wide',
            '🕳️ Alluvium depth up to 8,000 m (8 km!) in some places',
            '💧 Bhabar: Streams DISAPPEAR underground (porous pebbles)',
            '🌊 Terai: Streams REAPPEAR, marshy, was malaria-prone',
            '🪨 Bhangar contains KANKAR (calcium nodules) - old alluvium',
            '🌾 Khadar is MOST FERTILE - renewed by annual floods',
            '5️⃣ Punjab = Punj Ab = Five Waters (rivers)',
            '🏝️ Majuli is world\'s LARGEST river island (Brahmaputra, Assam)',
            '🌳 Sundarbans: World\'s LARGEST mangrove delta (Ganga-Brahmaputra)',
            '👥 Northern Plains have ~40% of India\'s population',
            '🚜 Green Revolution heartland (Punjab-Haryana)',
            '⚠️ Kosi River called "Sorrow of Bihar" (floods)'
        ],

        upscTraps: [
            {
                trap: 'Bhabar and Terai have similar drainage conditions',
                clarity: 'OPPOSITE! In Bhabar, streams DISAPPEAR (porous). In Terai, streams REAPPEAR (impermeable clay below). Bhabar = dry, Terai = marshy/swampy.'
            },
            {
                trap: 'Bhangar is more fertile than Khadar',
                clarity: 'OPPOSITE! KHADAR is MORE FERTILE because it is renewed by annual floods bringing fresh nutrients. Bhangar is old, elevated, has kankar, and less fertile.'
            },
            {
                trap: 'Northern Plains are ancient geological formations',
                clarity: 'YOUNGEST! Northern Plains formed in Quaternary period (last 2 MYA). Peninsular Plateau is oldest (3000+ MYA). Plains are still being formed by river deposition.'
            },
            {
                trap: 'All five rivers of Punjab flow in India',
                clarity: 'After partition, only 2 rivers (Beas, Sutlej) flow entirely in India. Jhelum, Chenab, and Ravi flow mostly through Pakistan. Indus Waters Treaty (1960) governs sharing.'
            }
        ],

        revisionBox: {
            title: '⚡ 30-Second Revision',
            points: [
                'Formation: Tectonic foredeep filled with Himalayan alluvium (up to 8000m deep)',
                'Zones (N→S): Bhabar (pebbles, streams disappear) → Terai (marshy, emerge) → Bhangar (old, kankar) → Khadar (new, fertile)',
                'Regions: Punjab Plains (5 rivers, doabs) → Ganga Plains (largest, most populated) → Brahmaputra Plains (narrowest)',
                'Doab = land between two rivers (Ganga-Yamuna Doab most famous)',
                'Khadar = NEW alluvium, flood-prone, MOST FERTILE | Bhangar = OLD, elevated, kankar',
                'Special: Majuli (largest river island), Sundarbans (largest mangrove delta)'
            ]
        },

        pyqs: [
            {
                year: 2021,
                question: 'Describe the formation and characteristics of the Northern Plains of India.',
                type: 'Mains'
            },
            {
                year: 2019,
                question: 'Differentiate between Bhabar and Terai regions.',
                type: 'Mains'
            },
            {
                year: 2020,
                question: 'What is the difference between Khadar and Bhangar? Which is more fertile and why?',
                type: 'Mains'
            },
            {
                year: 2018,
                question: 'Which belt of Northern Plains has marshy conditions?',
                type: 'Prelims',
                options: ['Bhabar', 'Terai', 'Bhangar', 'Khadar']
            },
            {
                year: 2017,
                question: 'Discuss the agricultural significance of the Indo-Gangetic Plains.',
                type: 'Mains'
            }
        ]
    },

    // ============================================
    // TOPIC 5: PENINSULAR PLATEAU
    // ============================================
    {
        id: 'peninsular-plateau',
        name: 'Peninsular Plateau',
        icon: '🏜️',
        category: 'india-physical',
        theme: 'plateau',
        difficulty: 'medium',
        upscRelevance: 'high',

        mindMap: {
            central: 'Peninsular Plateau',
            branches: [
                {
                    name: 'Origin',
                    color: '#8B4513',
                    children: [
                        'Gondwana remnant',
                        'Oldest landmass',
                        'Archaean rocks',
                        'Rigid, stable'
                    ]
                },
                {
                    name: 'Divisions',
                    color: '#E74C3C',
                    children: [
                        'Central Highlands',
                        'Deccan Plateau',
                        'Western Ghats',
                        'Eastern Ghats'
                    ]
                },
                {
                    name: 'Rivers',
                    color: '#3498DB',
                    children: [
                        'East flowing (Godavari, Krishna, Kaveri)',
                        'West flowing (Narmada, Tapti)',
                        'Peninsula slopes W→E'
                    ]
                },
                {
                    name: 'Rocks & Minerals',
                    color: '#F39C12',
                    children: [
                        'Deccan Traps (basalt)',
                        'Dharwar (gold, iron)',
                        'Gondwana (coal)',
                        'Mineral rich'
                    ]
                },
                {
                    name: 'Features',
                    color: '#2ECC71',
                    children: [
                        'Triangular shape',
                        '600-900m average height',
                        'Black soil (regur)',
                        'Rift valleys'
                    ]
                }
            ]
        },

        memoryHooks: [
            {
                type: 'mnemonic',
                title: 'East Flowing Rivers',
                content: 'GKKM = "God Krishna Kaveri Mahanadi" → Godavari (largest), Krishna, Kaveri, Mahanadi. All flow EAST into Bay of Bengal.',
                icon: '➡️'
            },
            {
                type: 'comparison',
                title: 'Central Highlands vs Deccan',
                content: 'NARMADA is the boundary! North of Narmada = Central Highlands (slopes S→N). South of Narmada = Deccan Plateau (slopes W→E).',
                icon: '↔️'
            },
            {
                type: 'story',
                title: 'Why Rivers Flow East?',
                content: 'Western Ghats are like a WALL blocking rivers. Peninsula TILTS from west to east (higher in west). So rivers flow DOWN the slope → EAST into Bay of Bengal!',
                icon: '📐'
            },
            {
                type: 'visual',
                title: 'Ghats Comparison',
                content: 'Western Ghats = CONTINUOUS WALL (blocks monsoon, heavy rain). Eastern Ghats = BROKEN/DISCONTINUOUS (rivers cut through). West = Strong wall, East = broken fence!',
                icon: '🧱'
            }
        ],

        conceptBlocks: [
            {
                title: 'Origin & Characteristics',
                icon: '🌍',
                points: [
                    '🌍 ORIGIN:',
                    '  • Part of ancient GONDWANALAND',
                    '  • One of oldest landmasses on Earth',
                    '  • Archaean rocks (3000+ MYA)',
                    '  • Separated from Gondwana ~140 MYA',
                    '  • Drifted north with Indian Plate',
                    '',
                    '📊 PHYSICAL CHARACTERISTICS:',
                    '  • Shape: TRIANGULAR tableland',
                    '  • Area: 16 lakh sq km (largest division)',
                    '  • Height: 600-900 m average',
                    '  • Highest: Western Ghats edge (1000-1500 m)',
                    '',
                    '🪨 GEOLOGICAL CHARACTERISTICS:',
                    '  • Composed of ancient crystalline rocks',
                    '  • Igneous and metamorphic rocks',
                    '  • Very RIGID and STABLE',
                    '  • Faults/fractures, NOT folds',
                    '  • Low earthquake activity',
                    '',
                    '📐 TILT/SLOPE:',
                    '  • General slope: WEST to EAST',
                    '  • Western Ghats form western edge (higher)',
                    '  • Eastern side lower, opens to Bay of Bengal',
                    '  • Exception: Central Highlands slope S→N',
                    '',
                    '💎 MINERAL WEALTH:',
                    '  • Richest mineral region',
                    '  • Dharwar rocks: Gold, iron, manganese',
                    '  • Gondwana rocks: Coal',
                    '  • Deccan Traps: Basalt, black soil'
                ]
            },
            {
                title: 'Central Highlands',
                icon: '🏔️',
                points: [
                    '📍 LOCATION:',
                    '  • NORTH of Narmada River',
                    '  • Bound by: Aravallis (NW), Vindhyas (S), Plains (N)',
                    '  • States: MP, UP, Rajasthan (parts)',
                    '',
                    '📐 SLOPE:',
                    '  • Unique: Slopes SOUTH to NORTH',
                    '  • Rivers flow NORTHWARD (unlike Deccan)',
                    '  • Example: Chambal, Betwa, Ken flow to Yamuna/Ganga',
                    '',
                    '🗻 SUB-DIVISIONS:',
                    '',
                    '  1️⃣ ARAVALLI RANGE:',
                    '     • Location: Rajasthan (Delhi to Gujarat)',
                    '     • Age: OLDEST fold mountains in India',
                    '     • Highly eroded, residual hills',
                    '     • Highest: Guru Shikhar (1722 m, Mt Abu)',
                    '     • Minerals: Lead, zinc (Zawar)',
                    '',
                    '  2️⃣ MALWA PLATEAU:',
                    '     • Location: MP, Rajasthan',
                    '     • Bounded: Vindhyas (S), Aravallis (N)',
                    '     • Composed of lava flows (Deccan Traps extend)',
                    '     • Black soil, fertile',
                    '     • Rivers: Chambal, Betwa, Kali Sindh',
                    '',
                    '  3️⃣ BUNDELKHAND UPLAND:',
                    '     • Location: UP, MP',
                    '     • Granite and gneiss rocks',
                    '     • Ravines along Chambal, Yamuna',
                    '     • Dry, eroded, dacoits (historically)',
                    '',
                    '  4️⃣ VINDHYAN RANGE:',
                    '     • Separates Central Highlands from Deccan',
                    '     • Sandstones (Red Fort stone!)',
                    '     • Diamonds (Panna)',
                    '     • Not very high, but escarpment',
                    '',
                    '  5️⃣ SATPURA RANGE:',
                    '     • Between Narmada and Tapti (rift valleys)',
                    '     • Block mountain (horst)',
                    '     • Highest: Dhupgarh (1350 m)',
                    '     • Dense forests, wildlife (Pachmarhi)',
                    '',
                    '  6️⃣ CHOTANAGPUR PLATEAU:',
                    '     • Location: Jharkhand, Odisha, WB',
                    '     • India\'s MINERAL HEARTLAND',
                    '     • Coal, iron, copper, uranium',
                    '     • Damodar Valley (ruhr of India)',
                    '     • Heavily industrialized'
                ]
            },
            {
                title: 'Deccan Plateau',
                icon: '🏜️',
                points: [
                    '📍 LOCATION:',
                    '  • SOUTH of Narmada River',
                    '  • Triangular tableland',
                    '  • States: Maharashtra, Karnataka, AP, Telangana',
                    '',
                    '📐 SLOPE:',
                    '  • WEST to EAST',
                    '  • Western Ghats (high) → Eastern plains (low)',
                    '  • Rivers flow EASTWARD',
                    '',
                    '🪨 COMPOSITION:',
                    '  • Northern Deccan: DECCAN TRAPS (basalt)',
                    '    - Volcanic lava flows (65 MYA)',
                    '    - Black soil (regur) formed',
                    '    - Step-like terrain (trap = stairs)',
                    '  • Southern Deccan: Archean crystalline rocks',
                    '    - Gneiss, granite',
                    '    - Red/laterite soil',
                    '',
                    '🗻 SUB-REGIONS:',
                    '',
                    '  1️⃣ MAHARASHTRA PLATEAU:',
                    '     • Largest part of Deccan',
                    '     • Basalt covered (Deccan Traps)',
                    '     • Black soil (cotton belt)',
                    '     • Rivers: Godavari, Bhima, Krishna (upper)',
                    '',
                    '  2️⃣ KARNATAKA PLATEAU:',
                    '     • Three regions:',
                    '       - Malnad (hilly forested)',
                    '       - Maidan (open plains)',
                    '       - Northern Karnataka (dry)',
                    '     • Tungabhadra, Krishna rivers',
                    '     • Iron ore, gold deposits',
                    '',
                    '  3️⃣ TELANGANA-ANDHRA PLATEAU:',
                    '     • Eastern Deccan',
                    '     • Godavari, Krishna basins',
                    '     • Rice bowl, irrigation intensive',
                    '     • Diamonds (Golconda historically)',
                    '',
                    '  4️⃣ TAMIL NADU UPLANDS:',
                    '     • Southern tip',
                    '     • Nilgiris, Anaimalai, Palani hills',
                    '     • Highest: Anaimudi (2695 m)',
                    '     • Tea, coffee plantations'
                ]
            },
            {
                title: 'Western Ghats (Sahyadri)',
                icon: '⛰️',
                points: [
                    '📍 EXTENT:',
                    '  • Length: 1,600 km (Tapti to Kanyakumari)',
                    '  • States: Gujarat, Maharashtra, Goa, Karnataka, Kerala, TN',
                    '  • Average height: 900-1,600 m',
                    '',
                    '⭐ KEY CHARACTERISTICS:',
                    '  • CONTINUOUS range (no major breaks)',
                    '  • Steep western slopes (face Arabian Sea)',
                    '  • Gentle eastern slopes',
                    '  • HIGHER in SOUTH than north',
                    '  • UNESCO World Heritage Site (2012)',
                    '',
                    '🗻 IMPORTANT PEAKS:',
                    '  • Anaimudi: 2,695 m (HIGHEST in South India)',
                    '  • Dodabetta: 2,637 m (Nilgiris)',
                    '  • Mullayanagiri: 1,930 m (Karnataka)',
                    '  • Kalsubai: 1,646 m (Maharashtra highest)',
                    '',
                    '🚶 MAJOR GAPS/PASSES:',
                    '  • Thal Ghat: Mumbai-Nashik (rail)',
                    '  • Bhor Ghat: Mumbai-Pune (rail)',
                    '  • PAL GHAT: Kerala-Tamil Nadu (LARGEST gap, 24 km wide)',
                    '  • Shencotta Gap: Kerala-Tamil Nadu (southern)',
                    '',
                    '🌧️ CLIMATIC SIGNIFICANCE:',
                    '  • BLOCKS SW monsoon winds',
                    '  • WINDWARD side: Heavy rainfall (>3000 mm)',
                    '  • LEEWARD side: Rain shadow (Deccan dry)',
                    '  • Evergreen rainforests on western slopes',
                    '',
                    '🌿 BIODIVERSITY:',
                    '  • Biodiversity HOTSPOT',
                    '  • 27% of India\'s flowering plants',
                    '  • Endemic species: Lion-tailed macaque, Nilgiri tahr',
                    '  • Highest density of tigers',
                    '',
                    '🌊 RIVERS ORIGINATING:',
                    '  • Godavari, Krishna, Kaveri, Tungabhadra',
                    '  • Periyar, Bharathapuzha (Kerala)',
                    '  • All major peninsular rivers!'
                ]
            },
            {
                title: 'Eastern Ghats',
                icon: '🏔️',
                points: [
                    '📍 EXTENT:',
                    '  • Length: ~1,300 km',
                    '  • States: Odisha, AP, Tamil Nadu',
                    '  • Average height: 500-600 m',
                    '',
                    '⭐ KEY CHARACTERISTICS:',
                    '  • DISCONTINUOUS range',
                    '  • CUT BY RIVERS (major difference from Western Ghats)',
                    '  • Rivers pass through: Mahanadi, Godavari, Krishna, Kaveri',
                    '  • Lower than Western Ghats',
                    '  • Older, more eroded',
                    '',
                    '🗻 IMPORTANT HILLS:',
                    '  • Javadi Hills (TN)',
                    '  • Palconda Range (AP)',
                    '  • Nallamala Hills (AP)',
                    '  • Velikonda Range (AP)',
                    '  • Mahendragiri: 1,501 m (highest, Odisha-AP)',
                    '',
                    '🔗 MEETING POINT:',
                    '  • Eastern and Western Ghats meet at NILGIRI HILLS',
                    '  • Tamil Nadu-Kerala-Karnataka junction',
                    '  • Pal Ghat Gap between them',
                    '',
                    '🌧️ CLIMATE:',
                    '  • Rain shadow of Western Ghats',
                    '  • Receives NE monsoon (Oct-Dec)',
                    '  • Drier than Western Ghats',
                    '  • Deciduous forests',
                    '',
                    '💎 RESOURCES:',
                    '  • Bauxite deposits',
                    '  • Iron ore',
                    '  • Forests (now depleted)',
                    '  • Less biodiversity than Western Ghats'
                ]
            },
            {
                title: 'Rivers of Peninsula',
                icon: '💧',
                points: [
                    '➡️ EAST-FLOWING RIVERS:',
                    '  (Into Bay of Bengal)',
                    '',
                    '  1️⃣ GODAVARI (Dakshin Ganga):',
                    '     • Longest peninsular river (1,465 km)',
                    '     • Origin: Nasik, Maharashtra',
                    '     • Largest basin: 3.13 lakh sq km',
                    '     • Tributaries: Pravara, Indravati, Manjira',
                    '     • States: MH, TS, AP',
                    '',
                    '  2️⃣ KRISHNA:',
                    '     • Length: 1,400 km',
                    '     • Origin: Mahabaleshwar (Western Ghats)',
                    '     • Tributaries: Tungabhadra, Bhima, Koyna',
                    '     • States: MH, KA, TS, AP',
                    '     • Nagarjuna Sagar Dam',
                    '',
                    '  3️⃣ KAVERI (Cauvery):',
                    '     • Length: 765 km',
                    '     • Origin: Talakaveri, Coorg (Karnataka)',
                    '     • "Ganga of South"',
                    '     • Tributaries: Hemavati, Shimsha, Bhavani',
                    '     • Most dispute-prone river (Karnataka-TN)',
                    '',
                    '  4️⃣ MAHANADI:',
                    '     • Length: 851 km',
                    '     • Origin: Chhattisgarh (Sihawa)',
                    '     • Large delta (rice bowl)',
                    '     • Hirakud Dam (longest dam)',
                    '',
                    '⬅️ WEST-FLOWING RIVERS:',
                    '  (Into Arabian Sea - unusual!)',
                    '',
                    '  1️⃣ NARMADA:',
                    '     • Length: 1,312 km',
                    '     • Origin: Amarkantak (MP)',
                    '     • Flows in RIFT VALLEY',
                    '     • Between Vindhyas and Satpura',
                    '     • No delta (estuary)',
                    '     • Sardar Sarovar Dam',
                    '',
                    '  2️⃣ TAPTI (Tapi):',
                    '     • Length: 724 km',
                    '     • Origin: Satpura Range (MP)',
                    '     • Parallel to Narmada',
                    '     • Also in rift valley',
                    '     • No delta (estuary)',
                    '',
                    '❓ WHY WEST-FLOWING?',
                    '  • Flow in RIFT VALLEYS (fault-controlled)',
                    '  • Not due to slope',
                    '  • Narmada-Tapti rift valleys formed by faulting'
                ]
            }
        ],

        diagrams: [
            {
                title: 'Peninsular Plateau Map',
                type: 'map',
                description: 'Map showing: Central Highlands (north of Narmada, green), Deccan Plateau (south, brown), Western Ghats (continuous line, west), Eastern Ghats (broken line, east). Mark Narmada as boundary. Show major rivers with direction arrows.'
            },
            {
                title: 'Cross-Section (W→E)',
                type: 'cross-section',
                description: 'Profile from Arabian Sea to Bay of Bengal showing: Coastal plain (narrow) → Western Ghats (steep rise) → Deccan Plateau (gradual slope east) → Eastern Ghats (lower) → Eastern coastal plain (broad). Show rivers flowing east.'
            },
            {
                title: 'Western Ghats vs Eastern Ghats',
                type: 'comparison-chart',
                description: 'Table comparing: Continuity (continuous vs broken), Height (higher vs lower), Rainfall (windward vs leeward), Biodiversity (hotspot vs less), Rivers (origin vs cut through).'
            },
            {
                title: 'Rift Valley Rivers',
                type: 'diagram',
                description: 'Cross-section showing Narmada in rift valley between Vindhyas (north) and Satpura (south). Show fault lines, block mountains, and westward flow to Arabian Sea.'
            },
            {
                title: 'Central Highlands Components',
                type: 'map',
                description: 'Map showing: Aravallis (NW), Malwa Plateau (center), Bundelkhand (east), Vindhyas (south), Satpura (between rift valleys), Chotanagpur (far east). Mark mineral belts.'
            }
        ],

        quickFacts: [
            '🌍 Peninsular Plateau is part of ancient GONDWANALAND (3000+ MYA)',
            '📐 Deccan slopes WEST→EAST, Central Highlands slopes SOUTH→NORTH',
            '🏔️ Western Ghats are CONTINUOUS; Eastern Ghats are DISCONTINUOUS',
            '⛰️ Anaimudi (2,695 m) is HIGHEST peak in South India',
            '💧 Godavari (1,465 km) is LONGEST peninsular river',
            '🏞️ Pal Ghat Gap is the LARGEST gap in Western Ghats (24 km)',
            '🌧️ Western Ghats cause RAIN SHADOW effect on Deccan',
            '🏔️ Narmada & Tapti flow WEST in RIFT VALLEYS (unusual!)',
            '🪨 Deccan Traps = volcanic basalt (65 MYA) → Black soil',
            '💎 Chotanagpur Plateau = "Ruhr of India" (minerals)',
            '⛰️ Aravallis are OLDEST fold mountains in India',
            '🌳 Western Ghats = UNESCO World Heritage, Biodiversity Hotspot'
        ],

        upscTraps: [
            {
                trap: 'All peninsular rivers flow eastward',
                clarity: 'MOSTLY true but TWO major exceptions: NARMADA and TAPTI flow WESTWARD into Arabian Sea. They flow in rift valleys, not due to slope.'
            },
            {
                trap: 'Eastern Ghats are higher than Western Ghats',
                clarity: 'OPPOSITE! Western Ghats are HIGHER (average 900-1600m, peak 2695m). Eastern Ghats are LOWER (average 500-600m, peak 1501m). Western Ghats are also more continuous.'
            },
            {
                trap: 'Narmada forms a delta at its mouth',
                clarity: 'Narmada and Tapti form ESTUARIES, NOT deltas. They flow through narrow rift valleys without wide floodplains. Only east-flowing rivers (Godavari, Krishna, Kaveri) form deltas.'
            },
            {
                trap: 'Central Highlands are south of Narmada',
                clarity: 'OPPOSITE! Central Highlands are NORTH of Narmada. Deccan Plateau is SOUTH of Narmada. Narmada is the traditional boundary between the two.'
            }
        ],

        revisionBox: {
            title: '⚡ 30-Second Revision',
            points: [
                'Origin: Gondwana remnant, oldest landmass, Archaean rocks (3000+ MYA)',
                'Divisions: Central Highlands (N of Narmada) + Deccan (S of Narmada) + Western & Eastern Ghats',
                'Slope: Deccan = W→E (rivers flow east) | Central Highlands = S→N',
                'Western Ghats: Continuous, higher (Anaimudi 2695m), windward, biodiversity hotspot',
                'Eastern Ghats: Discontinuous, lower, cut by rivers, rain shadow',
                'Special: Narmada-Tapti flow WEST in rift valleys (no deltas, estuaries)'
            ]
        },

        pyqs: [
            {
                year: 2021,
                question: 'Discuss the physiographic features of the Peninsular Plateau.',
                type: 'Mains'
            },
            {
                year: 2019,
                question: 'Compare and contrast the Western and Eastern Ghats.',
                type: 'Mains'
            },
            {
                year: 2020,
                question: 'Why do Narmada and Tapti rivers flow westward unlike other peninsular rivers?',
                type: 'Mains'
            },
            {
                year: 2018,
                question: 'The highest peak in South India is:',
                type: 'Prelims',
                options: ['Dodabetta', 'Anaimudi', 'Mahendragiri', 'Guru Shikhar']
            },
            {
                year: 2017,
                question: 'Describe the geological structure and mineral resources of the Peninsular Plateau.',
                type: 'Mains'
            }
        ]
    },

    // ============================================
    // TOPIC 6: COASTAL PLAINS OF INDIA
    // ============================================
    {
        id: 'coastal-plains-india',
        name: 'Coastal Plains of India',
        icon: '🏖️',
        category: 'india-physical',
        theme: 'coastal',
        difficulty: 'medium',
        upscRelevance: 'high',

        mindMap: {
            central: 'Coastal Plains',
            branches: [
                {
                    name: 'Western Coast',
                    color: '#00CED1',
                    children: [
                        'Gujarat Coast',
                        'Konkan Coast',
                        'Karnataka Coast',
                        'Malabar Coast'
                    ]
                },
                {
                    name: 'Eastern Coast',
                    color: '#4169E1',
                    children: [
                        'Utkal Coast (Odisha)',
                        'Northern Circar',
                        'Coromandel Coast',
                        'Sandy Coast (TN)'
                    ]
                },
                {
                    name: 'Western Features',
                    color: '#2ECC71',
                    children: [
                        'Narrow width',
                        'Submerged coast',
                        'Estuaries, rias',
                        'Natural harbors'
                    ]
                },
                {
                    name: 'Eastern Features',
                    color: '#F39C12',
                    children: [
                        'Broad width',
                        'Emergent coast',
                        'Deltas, lagoons',
                        'Few harbors'
                    ]
                },
                {
                    name: 'Special Features',
                    color: '#9B59B6',
                    children: [
                        'Kerala Backwaters',
                        'Chilika Lake (lagoon)',
                        'Sundarbans (delta)',
                        'Gulf of Kutch, Khambhat'
                    ]
                }
            ]
        },

        memoryHooks: [
            {
                type: 'mnemonic',
                title: 'Western Coast (N→S)',
                content: 'GKKM = "Gujarat, Konkan, Karnataka, Malabar" - North to South order!',
                icon: '⬇️'
            },
            {
                type: 'comparison',
                title: 'West vs East Coast',
                content: 'WEST = NARROW + Natural harbors + Estuaries (rivers drown). EAST = BROAD + Few harbors + Deltas (rivers build land). Think: West is squeezed against Ghats!',
                icon: '↔️'
            },
            {
                type: 'story',
                title: 'Why Different Widths?',
                content: 'Western Ghats are close to sea (squeezes coast). Eastern Ghats are far from sea (more room). Rivers on east carry more sediment, build deltas, widen coast!',
                icon: '📐'
            },
            {
                type: 'visual',
                title: 'Submerged vs Emergent',
                content: 'West coast SINKING (drowned river mouths = estuaries, rias). East coast RISING (river deposits build land = deltas, lagoons). Think: West = Water wins, East = Earth wins!',
                icon: '🌊'
            }
        ],

        conceptBlocks: [
            {
                title: 'Overview of Coastal Plains',
                icon: '🏖️',
                points: [
                    '📏 INDIA\'S COASTLINE:',
                    '  • Total coastline: 7,516.6 km',
                    '  • Mainland coastline: 6,100 km',
                    '  • Island coastline: 1,416.6 km',
                    '  • 9 coastal states + 4 UTs',
                    '',
                    '🗺️ TWO MAJOR DIVISIONS:',
                    '  • Western Coastal Plain',
                    '  • Eastern Coastal Plain',
                    '',
                    '⚙️ FORMATION:',
                    '  • Formed by:',
                    '    - Sea level changes',
                    '    - Tectonic movements',
                    '    - River deposition',
                    '    - Wave action',
                    '  • Western coast: SUBMERGENCE (drowning)',
                    '  • Eastern coast: EMERGENCE (building up)',
                    '',
                    '📊 GENERAL CONTRAST:',
                    '  ┌─────────────────┬─────────────────┐',
                    '  │ WESTERN COAST   │ EASTERN COAST   │',
                    '  ├─────────────────┼─────────────────┤',
                    '  │ Narrow (10-80km)│ Broad (100-130km│',
                    '  │ Estuaries       │ Deltas          │',
                    '  │ Natural harbors │ Few harbors     │',
                    '  │ Rocky/cliffy    │ Sandy/alluvial  │',
                    '  │ SW Monsoon rain │ NE Monsoon rain │',
                    '  │ Coconut, spices │ Rice, aquaculture│',
                    '  └─────────────────┴─────────────────┘'
                ]
            },
            {
                title: 'Western Coastal Plain',
                icon: '🌅',
                points: [
                    '📏 DIMENSIONS:',
                    '  • Length: 1,500 km (Gujarat to Kerala)',
                    '  • Width: 10-80 km (NARROW)',
                    '    - Widest in Gujarat',
                    '    - Narrowest in Maharashtra (10-25 km)',
                    '',
                    '🌊 CHARACTERISTICS:',
                    '  • SUBMERGED coast (land sinking/drowned)',
                    '  • Rocky, cliffy in places',
                    '  • Estuaries (not deltas)',
                    '  • Rias (drowned river valleys)',
                    '  • Natural harbors (Mumbai, Marmagao, Cochin)',
                    '',
                    '🗺️ REGIONAL DIVISIONS (N→S):',
                    '',
                    '  1️⃣ GUJARAT COAST:',
                    '     • WIDEST section of western coast',
                    '     • Gulf of Kutch and Gulf of Khambhat',
                    '     • Rann of Kutch (salt marsh)',
                    '     • Narmada, Tapti estuaries',
                    '     • Major ports: Kandla, Mundra',
                    '     • Oil refineries (Jamnagar)',
                    '',
                    '  2️⃣ KONKAN COAST:',
                    '     • Maharashtra, Goa (Mumbai to Goa)',
                    '     • NARROWEST section (10-25 km)',
                    '     • Rocky, cliffy, scenic',
                    '     • Natural harbors',
                    '     • Ports: Mumbai, JNPT, Marmagao',
                    '     • Rice, coconut, Alphonso mangoes',
                    '',
                    '  3️⃣ KARNATAKA COAST (KANARA):',
                    '     • Between Goa and Kerala',
                    '     • Moderate width',
                    '     • Port: New Mangalore, Karwar',
                    '     • Fishing, plantation',
                    '',
                    '  4️⃣ MALABAR COAST:',
                    '     • Kerala',
                    '     • Famous for BACKWATERS (kayals)',
                    '     • Vembanad Lake (largest backwater)',
                    '     • Spice gardens (pepper, cardamom)',
                    '     • Coconut capital of India',
                    '     • Ports: Cochin (natural harbor), Vizhinjam',
                    '     • Highest literacy, tourism'
                ]
            },
            {
                title: 'Eastern Coastal Plain',
                icon: '🏝️',
                points: [
                    '📏 DIMENSIONS:',
                    '  • Length: 1,500 km (Odisha to Kanyakumari)',
                    '  • Width: 100-130 km (BROAD)',
                    '    - Wider than western coast',
                    '',
                    '🌊 CHARACTERISTICS:',
                    '  • EMERGENT coast (land rising/building)',
                    '  • Sandy, alluvial deposits',
                    '  • Large DELTAS (Mahanadi, Godavari, Krishna, Kaveri)',
                    '  • LAGOONS (Chilika, Pulicat)',
                    '  • FEW natural harbors (need dredging)',
                    '',
                    '🗺️ REGIONAL DIVISIONS (N→S):',
                    '',
                    '  1️⃣ UTKAL COAST (UTTAR ANDHRA):',
                    '     • Odisha coast',
                    '     • Mahanadi Delta (rice bowl)',
                    '     • CHILIKA LAKE - largest lagoon in India',
                    '     • Ports: Paradip, Dhamra, Gopalpur',
                    '     • Fishing, prawn farming',
                    '',
                    '  2️⃣ NORTHERN CIRCAR:',
                    '     • Northern Andhra Pradesh',
                    '     • Godavari and Krishna deltas',
                    '     • Extremely fertile (rice)',
                    '     • Port: Visakhapatnam (major)',
                    '     • Kolleru Lake (between deltas)',
                    '',
                    '  3️⃣ COROMANDEL COAST:',
                    '     • Southern AP, Northern Tamil Nadu',
                    '     • Sandy beaches',
                    '     • PULICAT LAKE (2nd largest lagoon)',
                    '     • Chennai, Ennore ports',
                    '     • Receives NE Monsoon (Oct-Dec)',
                    '',
                    '  4️⃣ TAMIL NADU COAST:',
                    '     • Southern Tamil Nadu',
                    '     • Kaveri Delta (Thanjavur - rice)',
                    '     • Sandy, dune formations',
                    '     • Port: Tuticorin, Nagapattinam',
                    '     • Pearl fishing (Gulf of Mannar)',
                    '     • Cyclone-prone (Bay of Bengal)'
                ]
            },
            {
                title: 'Special Coastal Features',
                icon: '🌴',
                points: [
                    '🌊 KERALA BACKWATERS (Kayals):',
                    '  • Unique to Malabar Coast',
                    '  • Network of lagoons, lakes, canals',
                    '  • Vembanad Lake (2,033 sq km) - largest',
                    '  • Ashtamudi, Sasthamkotta lakes',
                    '  • Formed by: Sandbar deposits blocking river mouths',
                    '  • Used for: Navigation, fishing, tourism, agriculture',
                    '  • Kuttanad: Below sea level farming!',
                    '',
                    '🏝️ CHILIKA LAKE:',
                    '  • India\'s LARGEST lagoon',
                    '  • Odisha coast (Puri district)',
                    '  • Area: 1,100 sq km',
                    '  • Ramsar Wetland, Bird Sanctuary',
                    '  • Irrawaddy dolphins',
                    '  • Connected to Bay of Bengal',
                    '  • Prawn fishing, fishermen livelihoods',
                    '',
                    '🏝️ PULICAT LAKE:',
                    '  • 2nd largest lagoon',
                    '  • AP-Tamil Nadu border',
                    '  • Flamingo migration',
                    '  • Dutch trading post history',
                    '',
                    '🌳 SUNDARBANS:',
                    '  • World\'s LARGEST mangrove delta',
                    '  • Ganga-Brahmaputra delta',
                    '  • India-Bangladesh border',
                    '  • Royal Bengal Tigers',
                    '  • UNESCO World Heritage Site',
                    '  • Threatened by sea level rise',
                    '',
                    '🌊 GULF OF KUTCH:',
                    '  • Largest gulf in India',
                    '  • Coral reefs (Marine National Park)',
                    '  • Tidal energy potential',
                    '  • Kandla port',
                    '',
                    '🌊 GULF OF KHAMBHAT (Cambay):',
                    '  • Between Gujarat mainland and Saurashtra',
                    '  • Narmada, Tapti, Mahi, Sabarmati rivers drain here',
                    '  • Highest tidal range in India (12 m)',
                    '  • Tidal energy potential'
                ]
            },
            {
                title: 'Ports & Economic Significance',
                icon: '🚢',
                points: [
                    '⚓ MAJOR PORTS (13 as of now):',
                    '',
                    '  Western Coast:',
                    '    • Kandla (Gujarat) - free trade zone',
                    '    • Mumbai (Maharashtra) - largest by volume',
                    '    • JNPT/Nhava Sheva - container hub',
                    '    • Marmagao (Goa) - iron ore export',
                    '    • New Mangalore (Karnataka) - POL',
                    '    • Cochin (Kerala) - natural harbor',
                    '',
                    '  Eastern Coast:',
                    '    • Tuticorin (TN) - salt, minerals',
                    '    • Chennai (TN) - automobiles',
                    '    • Ennore (TN) - coal, thermal',
                    '    • Visakhapatnam (AP) - largest cargo',
                    '    • Paradip (Odisha) - iron ore',
                    '    • Haldia (WB) - Kolkata auxiliary',
                    '    • Kolkata (WB) - riverine port',
                    '',
                    '💰 ECONOMIC SIGNIFICANCE:',
                    '  • 95% of India\'s trade by volume',
                    '  • 70% of India\'s trade by value',
                    '  • Fishing (marine + inland)',
                    '  • Salt production (Gujarat)',
                    '  • Tourism (beaches)',
                    '  • Petroleum refineries',
                    '  • Shipbuilding',
                    '  • Coconut, cashew, spices (Kerala)',
                    '  • Rice (deltas)',
                    '',
                    '⚠️ COASTAL HAZARDS:',
                    '  • Cyclones (especially eastern coast)',
                    '  • Storm surges',
                    '  • Coastal erosion',
                    '  • Sea level rise',
                    '  • Pollution'
                ]
            }
        ],

        diagrams: [
            {
                title: 'Western vs Eastern Coastal Plains',
                type: 'comparison-chart',
                description: 'Table comparing: Width (narrow vs broad), Formation (submerged vs emergent), Features (estuaries vs deltas), Harbors (natural vs few), Rivers (drown vs deposit).'
            },
            {
                title: 'Regional Divisions of Coastal Plains',
                type: 'map',
                description: 'India outline with coast highlighted. Western coast divisions (N→S): Gujarat, Konkan, Karnataka, Malabar. Eastern coast (N→S): Utkal, Northern Circar, Coromandel, Tamil Nadu. Mark major ports and lagoons.'
            },
            {
                title: 'Kerala Backwaters Formation',
                type: 'diagram',
                description: 'Cross-section showing: River meets sea → Sandbars form → Water trapped behind → Lagoon/backwater. Show Vembanad Lake example with coconut palms, houseboats.'
            },
            {
                title: 'Delta vs Estuary',
                type: 'comparison-chart',
                description: 'Two diagrams: Delta (fan-shaped river mouth, land building, distributaries) and Estuary (funnel-shaped, land sinking, single channel). Show Eastern rivers with deltas, Western rivers with estuaries.'
            },
            {
                title: 'Major Lagoons of India',
                type: 'map',
                description: 'Map showing: Chilika (Odisha - largest), Pulicat (AP-TN), Vembanad (Kerala - largest backwater). Mark each with area and key features.'
            }
        ],

        quickFacts: [
            '📏 Total coastline: 7,516.6 km (mainland 6,100 km + islands 1,416.6 km)',
            '🌊 Western coast: NARROW (10-80 km), submerged, estuaries, natural harbors',
            '🏖️ Eastern coast: BROAD (100-130 km), emergent, deltas, few harbors',
            '🏝️ Chilika Lake (Odisha): India\'s LARGEST lagoon (1,100 sq km)',
            '🌴 Vembanad Lake (Kerala): Largest backwater (2,033 sq km)',
            '🌊 Gulf of Khambhat has HIGHEST tidal range in India (12 m)',
            '🦐 Sundarbans: World\'s LARGEST mangrove delta',
            '⚓ Mumbai is LARGEST port by volume; Visakhapatnam largest cargo',
            '🌧️ Western coast: SW Monsoon; Eastern coast: NE Monsoon (Oct-Dec)',
            '🌀 Eastern coast more CYCLONE-PRONE (Bay of Bengal)',
            '🦀 Kuttanad (Kerala): Below sea level farming in backwaters',
            '🚢 95% of India\'s foreign trade by VOLUME through sea ports'
        ],

        upscTraps: [
            {
                trap: 'Eastern coast has better natural harbors than western coast',
                clarity: 'OPPOSITE! WESTERN coast has better natural harbors (Mumbai, Cochin) due to submerged nature (deep waters). Eastern coast is emergent with deltas blocking harbors, requires constant dredging.'
            },
            {
                trap: 'Chilika Lake is a freshwater lake',
                clarity: 'Chilika is a BRACKISH water LAGOON, connected to Bay of Bengal. It\'s saltwater mixed with river inflow. Freshwater in monsoon, saline in summer.'
            },
            {
                trap: 'Western and Eastern coastal plains have similar widths',
                clarity: 'Very different! Western coast is NARROW (10-80 km, squeezed by Western Ghats). Eastern coast is BROAD (100-130 km, Eastern Ghats are far from sea).'
            },
            {
                trap: 'All peninsular rivers form deltas',
                clarity: 'Only EAST-FLOWING rivers (Mahanadi, Godavari, Krishna, Kaveri) form deltas. WEST-FLOWING rivers (Narmada, Tapti) form ESTUARIES because they flow in narrow rift valleys.'
            }
        ],

        revisionBox: {
            title: '⚡ 30-Second Revision',
            points: [
                'Total coastline: 7,516.6 km (9 states + 4 UTs)',
                'West coast: Narrow (10-80km), submerged, estuaries, natural harbors (Mumbai, Cochin)',
                'East coast: Broad (100-130km), emergent, deltas (Godavari, Krishna, Kaveri), lagoons',
                'West divisions (N→S): Gujarat, Konkan, Karnataka, Malabar (backwaters)',
                'East divisions (N→S): Utkal (Chilika), Northern Circar, Coromandel, Tamil Nadu',
                'Lagoons: Chilika (largest, Odisha), Pulicat (2nd, AP-TN), Vembanad (backwater, Kerala)'
            ]
        },

        pyqs: [
            {
                year: 2020,
                question: 'Compare and contrast the Western and Eastern Coastal Plains of India.',
                type: 'Mains'
            },
            {
                year: 2019,
                question: 'What are lagoons? Discuss the significance of Chilika Lake.',
                type: 'Mains'
            },
            {
                year: 2018,
                question: 'The largest lagoon in India is:',
                type: 'Prelims',
                options: ['Vembanad', 'Chilika', 'Pulicat', 'Kolleru']
            },
            {
                year: 2021,
                question: 'Explain the formation and significance of Kerala backwaters.',
                type: 'Mains'
            },
            {
                year: 2017,
                question: 'Why does the western coast of India have more natural harbors than the eastern coast?',
                type: 'Mains'
            }
        ]
    },

    // ============================================
    // TOPIC 7: ISLANDS OF INDIA
    // ============================================
    {
        id: 'islands-of-india',
        name: 'Islands of India',
        icon: '🏝️',
        category: 'india-physical',
        theme: 'ocean',
        difficulty: 'medium',
        upscRelevance: 'high',

        mindMap: {
            central: 'Islands of India',
            branches: [
                {
                    name: 'Andaman & Nicobar',
                    color: '#2ECC71',
                    children: [
                        '572 islands (38 inhabited)',
                        'Volcanic/tectonic origin',
                        'Bay of Bengal',
                        'Barren Island (active volcano)'
                    ]
                },
                {
                    name: 'Lakshadweep',
                    color: '#00CED1',
                    children: [
                        '36 islands (11 inhabited)',
                        'CORAL atoll origin',
                        'Arabian Sea',
                        'Smallest UT'
                    ]
                },
                {
                    name: 'Other Islands',
                    color: '#F39C12',
                    children: [
                        'Diu (Gujarat)',
                        'New Moore (disputed)',
                        'Majuli (river island)',
                        'Offshore islands'
                    ]
                },
                {
                    name: 'Strategic Importance',
                    color: '#E74C3C',
                    children: [
                        'Tri-service command (A&N)',
                        'Maritime security',
                        'EEZ extension',
                        'Malacca Strait proximity'
                    ]
                }
            ]
        },

        memoryHooks: [
            {
                type: 'mnemonic',
                title: 'A&N vs Lakshadweep Origin',
                content: 'A&N = "Angry volcanoes & Tectonic" (volcanic origin). Lakshadweep = "Lovely Coral" (coral atoll origin).',
                icon: '🌋'
            },
            {
                type: 'comparison',
                title: 'Location Memory',
                content: 'A&N = Bay of Bengal (EAST side). Lakshadweep = Arabian Sea (WEST side). Remember: A&N has Andaman SEA too!',
                icon: '🧭'
            },
            {
                type: 'story',
                title: 'Size Comparison',
                content: 'A&N = BIG family (572 islands, 8,249 sq km). Lakshadweep = SMALL family (36 islands, 32 sq km). A&N is 250 times bigger!',
                icon: '📏'
            },
            {
                type: 'visual',
                title: 'Volcanic vs Coral',
                content: 'A&N = Mountains poking out of sea (submerged mountain range). Lakshadweep = Ring of coral around lagoon (flat atolls, max 5m high!)',
                icon: '🏔️'
            }
        ],

        conceptBlocks: [
            {
                title: 'Overview of Indian Islands',
                icon: '🗺️',
                points: [
                    '📊 TOTAL ISLANDS:',
                    '  • India has about 1,382 islands',
                    '  • Major groups:',
                    '    - Andaman & Nicobar: 572 islands',
                    '    - Lakshadweep: 36 islands',
                    '    - Other offshore islands: ~700+',
                    '',
                    '🌊 DISTRIBUTION:',
                    '  • Bay of Bengal: Andaman & Nicobar',
                    '  • Arabian Sea: Lakshadweep',
                    '  • Offshore: Along both coasts',
                    '  • Riverine: Majuli, Diara lands',
                    '',
                    '📏 ISLAND COASTLINE:',
                    '  • Total: 1,416.6 km',
                    '  • A&N: ~1,200 km',
                    '  • Lakshadweep: ~132 km',
                    '',
                    '🛡️ STRATEGIC IMPORTANCE:',
                    '  • Extends India\'s maritime reach',
                    '  • Guards sea lanes of communication',
                    '  • EEZ (Exclusive Economic Zone) extension',
                    '  • Andaman guards Malacca Strait approach',
                    '  • Tri-service command at Port Blair'
                ]
            },
            {
                title: 'Andaman & Nicobar Islands',
                icon: '🏝️',
                points: [
                    '📍 LOCATION:',
                    '  • Bay of Bengal',
                    '  • Between 6°-14° N latitude',
                    '  • Closest foreign country: Indonesia (90 km from Nicobar)',
                    '  • Distance from mainland: 1,200 km (from Kolkata)',
                    '',
                    '📊 COMPOSITION:',
                    '  • Total islands: 572 (LARGER group)',
                    '  • Inhabited: Only 38 islands',
                    '  • Total area: 8,249 sq km',
                    '  • ANDAMAN GROUP: 324 islands (North Andaman, Middle, South)',
                    '  • NICOBAR GROUP: 24 islands (Car Nicobar, Great Nicobar)',
                    '  • Separated by: 10° CHANNEL (150 km wide)',
                    '',
                    '🌋 ORIGIN:',
                    '  • TECTONIC/VOLCANIC origin',
                    '  • Submerged mountain range (Arakan Yoma extension)',
                    '  • Part of Indo-Burman Range',
                    '  • Extends to Sumatra (Indonesia)',
                    '  • BARREN ISLAND: Only ACTIVE volcano in India',
                    '  • Narcondam: Dormant volcano',
                    '',
                    '⛰️ TERRAIN:',
                    '  • Hilly, mountainous',
                    '  • Dense tropical rainforests (80% forest cover)',
                    '  • Highest point: Saddle Peak (732 m) - North Andaman',
                    '  • Coastline: Rocky, with mangroves',
                    '',
                    '🏛️ IMPORTANT PLACES:',
                    '  • Port Blair: Capital, main town',
                    '  • Cellular Jail: National memorial (freedom fighters)',
                    '  • Havelock Island: Tourism hub',
                    '  • Ross Island: British headquarters',
                    '  • Great Nicobar: Southernmost, Indira Point',
                    '',
                    '👥 TRIBES:',
                    '  • Particularly Vulnerable Tribal Groups (PVTGs):',
                    '    - Great Andamanese (very few left)',
                    '    - Onge (Vulnerable)',
                    '    - Jarawa (No contact policy)',
                    '    - Sentinelese (Hostile, isolated - North Sentinel Island)',
                    '    - Nicobarese (largest tribe)',
                    '    - Shompen',
                    '',
                    '🌿 BIODIVERSITY:',
                    '  • Tropical evergreen rainforests',
                    '  • Mangroves (2nd largest in India)',
                    '  • Coral reefs',
                    '  • Marine life: Dugong, sea turtle',
                    '  • Endemic birds: Narcondam hornbill',
                    '  • UNESCO Man and Biosphere Reserve (Great Nicobar)'
                ]
            },
            {
                title: 'Lakshadweep Islands',
                icon: '🐚',
                points: [
                    '📍 LOCATION:',
                    '  • Arabian Sea',
                    '  • Between 8°-12° N latitude',
                    '  • Off Kerala coast',
                    '  • Distance from mainland: 220-440 km (from Kochi)',
                    '',
                    '📊 COMPOSITION:',
                    '  • Total islands: 36 (SMALLER group)',
                    '  • Inhabited: Only 11 islands',
                    '  • Total area: 32 sq km (SMALLEST UT in India)',
                    '  • 12 atolls, 3 reefs, 5 submerged banks',
                    '',
                    '🐚 ORIGIN:',
                    '  • CORAL ATOLL origin',
                    '  • Built on submarine mountains by coral polyps',
                    '  • Ring-shaped coral reef enclosing lagoon',
                    '  • Very FLAT terrain (max height ~5 m)',
                    '  • Vulnerable to sea level rise!',
                    '',
                    '🏝️ MAJOR ISLANDS:',
                    '  • Kavaratti: CAPITAL, administrative HQ',
                    '  • Agatti: Airport, tourism',
                    '  • Bangaram: Tourist resort, uninhabited naturally',
                    '  • Minicoy: Southernmost, largest (4.8 sq km)',
                    '  • Andrott: Largest populated island',
                    '',
                    '🌊 FEATURES:',
                    '  • Pristine lagoons (turquoise water)',
                    '  • White sandy beaches',
                    '  • Coral reefs (biodiversity)',
                    '  • No rivers (too small)',
                    '  • Limited freshwater (rainwater, wells)',
                    '',
                    '👥 POPULATION:',
                    '  • ~65,000 people',
                    '  • Almost 100% MUSLIM',
                    '  • Malayalam speaking (most islands)',
                    '  • Mahl language (Minicoy - related to Dhivehi/Maldivian)',
                    '  • Fishing, coconut cultivation main livelihood',
                    '',
                    '🐠 ECONOMY:',
                    '  • Coconut, copra, coir products',
                    '  • Tuna fishing',
                    '  • Tourism (limited, permits required)',
                    '  • Eco-sensitive - development restricted',
                    '',
                    '⚠️ VULNERABILITIES:',
                    '  • Very low elevation (max 5m)',
                    '  • Sea level rise threat',
                    '  • Limited freshwater',
                    '  • Coral bleaching (climate change)',
                    '  • Small land area'
                ]
            },
            {
                title: 'Comparison: A&N vs Lakshadweep',
                icon: '⚖️',
                points: [
                    '┌─────────────────┬─────────────────┬─────────────────┐',
                    '│ FEATURE         │ ANDAMAN &       │ LAKSHADWEEP     │',
                    '│                 │ NICOBAR         │                 │',
                    '├─────────────────┼─────────────────┼─────────────────┤',
                    '│ Location        │ Bay of Bengal   │ Arabian Sea     │',
                    '│ No. of Islands  │ 572             │ 36              │',
                    '│ Area            │ 8,249 sq km     │ 32 sq km        │',
                    '│ Origin          │ Volcanic/Tectonic│ Coral Atolls   │',
                    '│ Terrain         │ Hilly (732 m)   │ Flat (5 m max)  │',
                    '│ Highest Point   │ Saddle Peak     │ ~5 meters       │',
                    '│ Active Volcano  │ Barren Island   │ None            │',
                    '│ Forest Cover    │ 80%+            │ Low (coconut)   │',
                    '│ Capital         │ Port Blair      │ Kavaratti       │',
                    '│ Population      │ ~4 lakh         │ ~65,000         │',
                    '│ Religion        │ Mixed (Hindu)   │ Muslim (100%)   │',
                    '│ Tribes          │ PVTGs present   │ No tribes       │',
                    '│ Economy         │ Timber, tourism │ Fishing, coconut│',
                    '│ Strategic       │ Very high       │ Moderate        │',
                    '│                 │ (Malacca guard) │                 │',
                    '└─────────────────┴─────────────────┴─────────────────┘'
                ]
            },
            {
                title: 'Other Islands & Strategic Importance',
                icon: '🛡️',
                points: [
                    '🏝️ OTHER OFFSHORE ISLANDS:',
                    '',
                    '  Gujarat Coast:',
                    '    • Diu: Former Portuguese, now UT',
                    '    • Bet Dwarka: Krishna\'s legendary city',
                    '    • Piram Island',
                    '',
                    '  Maharashtra-Goa:',
                    '    • Elephanta Island: UNESCO caves (Mumbai)',
                    '    • Arnala, Khanderi, Underi forts',
                    '',
                    '  Tamil Nadu:',
                    '    • Pamban Island: Rameswaram temple',
                    '    • Sriharikota: ISRO launch site',
                    '',
                    '  West Bengal:',
                    '    • Sagar Island: Gangasagar mela',
                    '    • Ghoramara, Mousuni (sinking islands)',
                    '',
                    '🏞️ RIVERINE ISLANDS:',
                    '    • MAJULI: World\'s largest river island (Brahmaputra)',
                    '      - Area: ~880 sq km (shrinking due to erosion)',
                    '      - Vaishnavite monasteries (Satras)',
                    '      - 1st island district of India',
                    '',
                    '🛡️ STRATEGIC IMPORTANCE OF A&N:',
                    '',
                    '  • MALACCA STRAIT GATEWAY:',
                    '    - Monitors world\'s busiest shipping lane',
                    '    - 60,000+ ships/year pass through',
                    '    - 1/4th of world\'s trade',
                    '    - China\'s "Malacca Dilemma"',
                    '',
                    '  • TRI-SERVICE COMMAND:',
                    '    - Andaman & Nicobar Command (ANC)',
                    '    - Only tri-service command in India',
                    '    - HQ: Port Blair',
                    '    - Navy, Army, Air Force integrated',
                    '',
                    '  • INDIRA POINT:',
                    '    - Southernmost point of India',
                    '    - Great Nicobar Island',
                    '    - 90 km from Indonesia',
                    '    - Damaged in 2004 tsunami',
                    '',
                    '  • EEZ EXTENSION:',
                    '    - India\'s EEZ = 2.02 million sq km',
                    '    - A&N contributes 30% of EEZ',
                    '    - Lakshadweep adds significant area',
                    '    - Blue economy potential',
                    '',
                    '  • ACT EAST POLICY:',
                    '    - Gateway to ASEAN',
                    '    - Naval cooperation with partners',
                    '    - Humanitarian assistance hub'
                ]
            }
        ],

        diagrams: [
            {
                title: 'Andaman & Nicobar Islands Map',
                type: 'map',
                description: 'Map showing: North Andaman (Saddle Peak), Middle Andaman, South Andaman (Port Blair), 10° Channel, Car Nicobar, Great Nicobar (Indira Point). Mark Barren Island (volcano), Cellular Jail, tribal areas.'
            },
            {
                title: 'Lakshadweep Islands Map',
                type: 'map',
                description: 'Map showing all major islands: Kavaratti (capital), Agatti (airport), Andrott, Minicoy (southernmost). Show atoll structure with lagoons. Mark distance from Kerala coast.'
            },
            {
                title: 'Volcanic vs Coral Island Formation',
                type: 'comparison-chart',
                description: 'Two diagrams: (1) Volcanic - submerged mountain range, peaks above water, hilly terrain (A&N). (2) Coral - coral reef builds on submarine base, flat atoll with lagoon (Lakshadweep).'
            },
            {
                title: 'Strategic Location of A&N',
                type: 'map',
                description: 'Regional map showing A&N position relative to: Malacca Strait, Indonesia, Myanmar, shipping lanes. Show distance from mainland India vs proximity to SE Asia.'
            },
            {
                title: 'A&N vs Lakshadweep Comparison',
                type: 'infographic',
                description: 'Visual comparison showing: Size (large vs small circles), Height (tall vs flat), Origin (volcano vs coral), Location (east vs west of India).'
            }
        ],

        quickFacts: [
            '🏝️ A&N: 572 islands (Bay of Bengal), Lakshadweep: 36 islands (Arabian Sea)',
            '📏 A&N area: 8,249 sq km | Lakshadweep: 32 sq km (250x smaller!)',
            '🌋 Barren Island is India\'s ONLY ACTIVE volcano (A&N)',
            '🐚 Lakshadweep = CORAL atolls (max 5m height)',
            '⛰️ A&N = Volcanic/tectonic (Saddle Peak 732m highest)',
            '🏛️ A&N Capital: Port Blair | Lakshadweep Capital: Kavaratti',
            '📍 Indira Point (Great Nicobar) = SOUTHERNMOST point of India',
            '🛡️ A&N has India\'s ONLY tri-service command (integrated forces)',
            '👥 Sentinelese (North Sentinel Island) are world\'s most isolated tribe',
            '🏝️ Majuli (Brahmaputra) = World\'s LARGEST river island',
            '🌊 10° Channel separates Andaman from Nicobar groups',
            '☪️ Lakshadweep is nearly 100% MUSLIM population',
            '🔒 Foreigners need PERMIT for Lakshadweep visit'
        ],

        upscTraps: [
            {
                trap: 'Both A&N and Lakshadweep are coral islands',
                clarity: 'DIFFERENT origins! A&N = VOLCANIC/TECTONIC (submerged mountain range). Lakshadweep = CORAL ATOLLS. A&N has active volcano (Barren Island), Lakshadweep has none.'
            },
            {
                trap: 'Lakshadweep is larger than Andaman & Nicobar',
                clarity: 'OPPOSITE! A&N is 250 times LARGER (8,249 sq km vs 32 sq km). A&N has 572 islands vs 36 in Lakshadweep. Lakshadweep is SMALLEST UT of India.'
            },
            {
                trap: 'Barren Island is a dormant volcano',
                clarity: 'Barren Island is ACTIVE! It erupted in 1991, 2005, 2017, 2018. NARCONDAM is the dormant volcano in A&N. Barren = Active, Narcondam = Dormant.'
            },
            {
                trap: 'Kanyakumari is the southernmost point of India',
                clarity: 'Kanyakumari is southernmost point of MAINLAND India. INDIRA POINT (Great Nicobar Island) is the actual southernmost point of India. It\'s 90 km from Indonesia.'
            }
        ],

        revisionBox: {
            title: '⚡ 30-Second Revision',
            points: [
                'A&N: 572 islands, Bay of Bengal, VOLCANIC/TECTONIC origin, hilly (Saddle Peak 732m)',
                'Lakshadweep: 36 islands, Arabian Sea, CORAL ATOLL origin, flat (max 5m)',
                'Active volcano: Barren Island (A&N) - only in India | Dormant: Narcondam',
                'Capitals: Port Blair (A&N) | Kavaratti (Lakshadweep)',
                'Indira Point (Great Nicobar) = Southernmost point of INDIA',
                'Strategic: A&N guards Malacca Strait, has India\'s only tri-service command',
                'Tribes: Sentinelese (isolated), Jarawa, Onge, Great Andamanese in A&N'
            ]
        },

        pyqs: [
            {
                year: 2021,
                question: 'Discuss the strategic importance of Andaman and Nicobar Islands.',
                type: 'Mains'
            },
            {
                year: 2019,
                question: 'Compare the origin and characteristics of Andaman & Nicobar Islands with Lakshadweep Islands.',
                type: 'Mains'
            },
            {
                year: 2020,
                question: 'India\'s only active volcano is located at:',
                type: 'Prelims',
                options: ['Narcondam Island', 'Barren Island', 'Car Nicobar', 'Great Nicobar']
            },
            {
                year: 2018,
                question: 'The 10° channel separates:',
                type: 'Prelims',
                options: ['Andaman from Nicobar', 'India from Sri Lanka', 'Lakshadweep from Maldives', 'Great Nicobar from Indonesia']
            },
            {
                year: 2017,
                question: 'Discuss the vulnerability of Lakshadweep Islands to climate change.',
                type: 'Mains'
            }
        ]
    },

    // ============================================
    // TOPIC 8: IMPORTANT PASSES & GAPS
    // ============================================
    {
        id: 'important-passes-gaps',
        name: 'Important Passes & Gaps',
        icon: '🚶',
        category: 'india-physical',
        theme: 'himalaya',
        difficulty: 'high',
        upscRelevance: 'very-high',

        mindMap: {
            central: 'Passes & Gaps',
            branches: [
                {
                    name: 'Trans-Himalayan',
                    color: '#3498DB',
                    children: [
                        'Karakoram Pass',
                        'Khunjerab Pass',
                        'Nathu La',
                        'Lipulekh'
                    ]
                },
                {
                    name: 'Greater Himalayan',
                    color: '#9B59B6',
                    children: [
                        'Zoji La',
                        'Rohtang Pass',
                        'Shipki La',
                        'Bara-lacha La'
                    ]
                },
                {
                    name: 'Eastern Passes',
                    color: '#2ECC71',
                    children: [
                        'Nathu La',
                        'Jelep La',
                        'Bomdila',
                        'Bum La'
                    ]
                },
                {
                    name: 'Western Ghats Gaps',
                    color: '#E74C3C',
                    children: [
                        'Thal Ghat',
                        'Bhor Ghat',
                        'Pal Ghat',
                        'Shencotta Gap'
                    ]
                },
                {
                    name: 'Historical/Trade',
                    color: '#F39C12',
                    children: [
                        'Khyber Pass',
                        'Bolan Pass',
                        'Silk Route passes',
                        'Kailash Mansarovar route'
                    ]
                }
            ]
        },

        memoryHooks: [
            {
                type: 'mnemonic',
                title: 'J&K/Ladakh Passes',
                content: 'ZKBC = "Zoji, Karakoram, Bara-lacha, Chang La" - Major Ladakh passes! "Zebras Keep Bringing Carrots!"',
                icon: '🦓'
            },
            {
                type: 'story',
                title: 'Western Ghats Gaps (N→S)',
                content: 'A train from Mumbai goes through: THAL Ghat (to Nashik) → BHOR Ghat (to Pune) → PAL Ghat (Kerala-TN) → SHENCOTTA (far south). Remember: "Trains Bring People South!"',
                icon: '🚂'
            },
            {
                type: 'visual',
                title: 'Highest Motorable',
                content: 'UMLING LA = 19,024 ft = HIGHEST motorable road in world (Ladakh). "U Must Look Now - Amazing!"',
                icon: '🚗'
            },
            {
                type: 'comparison',
                title: 'Pass vs Gap',
                content: 'PASS = Through mountains (Himalayas - narrow, high). GAP = Through hills/ghats (Western Ghats - wider, lower). Passes need crossing; Gaps are natural breaks.',
                icon: '⛰️'
            }
        ],

        conceptBlocks: [
            {
                title: 'Understanding Passes & Gaps',
                icon: '🗺️',
                points: [
                    '📖 DEFINITIONS:',
                    '',
                    '  🚶 MOUNTAIN PASS (La/Col):',
                    '    • Navigable route through mountain range',
                    '    • Lower point between two peaks',
                    '    • "La" = Pass in Tibetan/Ladakhi',
                    '    • Example: Zoji La, Khardung La',
                    '',
                    '  🌄 GAP:',
                    '    • Break or opening in a mountain range',
                    '    • Usually wider than a pass',
                    '    • May be formed by rivers or faulting',
                    '    • Example: Pal Ghat Gap, Bhor Ghat',
                    '',
                    '📊 SIGNIFICANCE OF PASSES:',
                    '  • Trade routes (ancient and modern)',
                    '  • Cultural exchange corridors',
                    '  • Military/strategic importance',
                    '  • Pilgrimage routes (Kailash Mansarovar)',
                    '  • Tourism (motorable passes)',
                    '',
                    '⚠️ CHALLENGES:',
                    '  • Extreme cold, high altitude',
                    '  • Snowfall blocks many months',
                    '  • Avalanche risk',
                    '  • Limited oxygen (high passes)',
                    '  • Strategic sensitivity (borders)'
                ]
            },
            {
                title: 'Jammu & Kashmir / Ladakh Passes',
                icon: '🏔️',
                points: [
                    '🔷 ZOJI LA:',
                    '  • Height: 3,528 m (11,575 ft)',
                    '  • Connects: Srinagar ↔ Leh (Kashmir ↔ Ladakh)',
                    '  • On: NH-1 (now NH-1D)',
                    '  • Significance:',
                    '    - Gateway to Ladakh from Kashmir',
                    '    - Closed in winter (Nov-May)',
                    '    - Zojila Tunnel under construction (Asia\'s longest)',
                    '',
                    '🔷 KARAKORAM PASS:',
                    '  • Height: 5,540 m (18,176 ft)',
                    '  • Connects: Ladakh ↔ Xinjiang (China)',
                    '  • Location: Karakoram Range',
                    '  • Significance:',
                    '    - One of HIGHEST passes in world',
                    '    - Ancient Silk Route',
                    '    - Currently on LOC/LAC area',
                    '',
                    '🔷 KHARDUNG LA:',
                    '  • Height: 5,359 m (17,582 ft)',
                    '  • Connects: Leh ↔ Nubra Valley',
                    '  • Claimed: "Highest motorable road" (disputed)',
                    '  • Significance:',
                    '    - Gateway to Siachen region',
                    '    - Strategic military route',
                    '    - Tourist attraction',
                    '',
                    '🔷 CHANG LA:',
                    '  • Height: 5,360 m (17,590 ft)',
                    '  • Connects: Leh ↔ Pangong Lake',
                    '  • Significance:',
                    '    - Third highest motorable pass',
                    '    - BRO maintained',
                    '    - Tourism (Pangong Lake)',
                    '',
                    '🔷 BANIHAL PASS:',
                    '  • Height: 2,832 m (9,291 ft)',
                    '  • Connects: Jammu ↔ Kashmir Valley',
                    '  • Features:',
                    '    - Jawahar Tunnel runs through',
                    '    - NH-44 (Jammu-Srinagar)',
                    '    - Historically crucial route'
                ]
            },
            {
                title: 'Himachal Pradesh Passes',
                icon: '⛰️',
                points: [
                    '🔷 ROHTANG PASS:',
                    '  • Height: 3,978 m (13,051 ft)',
                    '  • Connects: Kullu-Manali ↔ Lahaul-Spiti',
                    '  • Meaning: "Pile of corpses" (dangerous historically)',
                    '  • Features:',
                    '    - Gateway to Lahaul-Spiti',
                    '    - Tourist hotspot',
                    '    - ATAL TUNNEL (9.02 km) bypasses it now',
                    '    - Open June-October',
                    '',
                    '🔷 BARA-LACHA LA:',
                    '  • Height: 4,890 m (16,040 ft)',
                    '  • Connects: HP ↔ Ladakh (Manali-Leh route)',
                    '  • Location: On Manali-Leh Highway',
                    '  • Features:',
                    '    - Meeting point of 4 mountain ranges',
                    '    - Suraj Tal lake nearby',
                    '',
                    '🔷 SHIPKI LA:',
                    '  • Height: 4,590 m (15,059 ft)',
                    '  • Connects: Kinnaur (HP) ↔ Tibet',
                    '  • Significance:',
                    '    - Sutlej River enters India here',
                    '    - Trade route (Indo-Tibet)',
                    '    - Border crossing point',
                    '',
                    '🔷 KUNZUM LA (KUNZUM PASS):',
                    '  • Height: 4,590 m (15,060 ft)',
                    '  • Connects: Lahaul ↔ Spiti Valley',
                    '  • Features:',
                    '    - Only road to Spiti from Lahaul',
                    '    - Goddess Kunzum temple',
                    '',
                    '🔷 PIN PARVATI PASS:',
                    '  • Height: 5,319 m (17,451 ft)',
                    '  • Connects: Parvati Valley ↔ Pin Valley (Spiti)',
                    '  • Features:',
                    '    - Trekking pass (not motorable)',
                    '    - Very challenging'
                ]
            },
            {
                title: 'Uttarakhand Passes',
                icon: '🕉️',
                points: [
                    '🔷 LIPULEKH PASS:',
                    '  • Height: 5,334 m (17,500 ft)',
                    '  • Connects: Uttarakhand ↔ Tibet',
                    '  • Significance:',
                    '    - KAILASH MANSAROVAR pilgrimage route',
                    '    - Disputed (Nepal claims area)',
                    '    - India-China border crossing',
                    '    - Trade route (Indo-Tibet)',
                    '',
                    '🔷 MANA PASS:',
                    '  • Height: 5,610 m (18,406 ft)',
                    '  • Connects: Near Badrinath ↔ Tibet',
                    '  • Features:',
                    '    - One of HIGHEST vehicle passes',
                    '    - Near Mana village (last Indian village)',
                    '    - Indo-Tibet border',
                    '',
                    '🔷 NITI PASS:',
                    '  • Height: 5,068 m (16,627 ft)',
                    '  • Connects: Chamoli ↔ Tibet',
                    '  • Features:',
                    '    - Ancient trade route',
                    '    - Indo-Tibet border',
                    '',
                    '🔷 TRAILL\'S PASS:',
                    '  • Height: 5,312 m (17,428 ft)',
                    '  • Location: Connects Pindari and Milam glaciers',
                    '  • Features:',
                    '    - Named after British officer',
                    '    - Trekking route'
                ]
            },
            {
                title: 'Sikkim & Eastern Passes',
                icon: '🌄',
                points: [
                    '🔷 NATHU LA:',
                    '  • Height: 4,310 m (14,140 ft)',
                    '  • Connects: Sikkim ↔ Tibet (China)',
                    '  • Significance:',
                    '    - REOPENED in 2006 (closed since 1962 war)',
                    '    - Part of ancient Silk Route',
                    '    - India-China border crossing',
                    '    - Trade point (since 2006)',
                    '    - Kailash Mansarovar route (alternate)',
                    '',
                    '🔷 JELEP LA:',
                    '  • Height: 4,267 m (13,999 ft)',
                    '  • Connects: Sikkim ↔ Tibet',
                    '  • Features:',
                    '    - Historical trade route',
                    '    - British used for Tibet missions',
                    '    - Currently restricted',
                    '',
                    '🔷 BOMDILA PASS:',
                    '  • Height: 2,217 m (7,274 ft)',
                    '  • Location: Arunachal Pradesh',
                    '  • Connects: Assam ↔ Tawang',
                    '  • Features:',
                    '    - Route to Tawang monastery',
                    '    - 1962 war significance',
                    '',
                    '🔷 BUM LA:',
                    '  • Height: 4,633 m (15,200 ft)',
                    '  • Connects: Tawang ↔ Tibet',
                    '  • Features:',
                    '    - India-China border',
                    '    - Flag meetings point',
                    '    - Strategic importance',
                    '',
                    '🔷 SELA PASS:',
                    '  • Height: 4,170 m (13,680 ft)',
                    '  • Location: Arunachal Pradesh',
                    '  • Connects: Bomdila ↔ Tawang',
                    '  • Features:',
                    '    - On way to Tawang',
                    '    - Sela Lake at pass',
                    '    - Snowbound in winter'
                ]
            },
            {
                title: 'Western Ghats Gaps',
                icon: '🌿',
                points: [
                    '🔷 THAL GHAT:',
                    '  • Height: ~583 m',
                    '  • Location: Maharashtra',
                    '  • Connects: Mumbai ↔ Nashik',
                    '  • Features:',
                    '    - Mumbai-Agra Highway passes',
                    '    - Kasara Ghat section',
                    '    - Central Railway route',
                    '',
                    '🔷 BHOR GHAT:',
                    '  • Height: ~625 m',
                    '  • Location: Maharashtra',
                    '  • Connects: Mumbai ↔ Pune',
                    '  • Features:',
                    '    - Mumbai-Pune Expressway',
                    '    - Oldest rail route (reversing stations)',
                    '    - Khandala, Lonavala hill stations',
                    '',
                    '🔷 PAL GHAT (PALGHAT GAP):',
                    '  • Height: ~140 m',
                    '  • Width: 24-40 km (WIDEST gap)',
                    '  • Location: Kerala-Tamil Nadu border',
                    '  • Connects: Kerala ↔ Tamil Nadu',
                    '  • Features:',
                    '    - MOST IMPORTANT gap in Western Ghats',
                    '    - NH-544 passes through',
                    '    - Railway line to Coimbatore',
                    '    - Allows NE monsoon to enter Kerala',
                    '    - Silent Valley National Park nearby',
                    '',
                    '🔷 SHENCOTTA GAP:',
                    '  • Height: ~210 m',
                    '  • Location: Kerala-Tamil Nadu (southern)',
                    '  • Features:',
                    '    - Connects Kollam ↔ Tirunelveli',
                    '    - Railway line',
                    '    - Less significant than Pal Ghat',
                    '',
                    '🔷 SIGNIFICANCE OF GHATS GAPS:',
                    '  • Transport routes (road, rail)',
                    '  • Climate influence (monsoon passage)',
                    '  • Cultural exchange (Kerala-Tamil Nadu)',
                    '  • Natural corridors (wildlife movement)'
                ]
            },
            {
                title: 'Historical & International Passes',
                icon: '📜',
                points: [
                    '🔷 KHYBER PASS:',
                    '  • Height: 1,070 m (3,510 ft)',
                    '  • Location: NOW IN PAKISTAN (Afghanistan-Pakistan border)',
                    '  • Historical significance:',
                    '    - Invaders\' route to India',
                    '    - Alexander, Mahmud of Ghazni, Babur used',
                    '    - Silk Route gateway',
                    '    - British strategic concern',
                    '',
                    '🔷 BOLAN PASS:',
                    '  • Height: 1,800 m',
                    '  • Location: NOW IN PAKISTAN (Balochistan)',
                    '  • Historical significance:',
                    '    - Alternative to Khyber',
                    '    - British-Afghan wars',
                    '    - Railway line built',
                    '',
                    '🔷 KHUNJERAB PASS:',
                    '  • Height: 4,693 m (15,397 ft)',
                    '  • Location: NOW IN PoK/Pakistan-China border',
                    '  • Features:',
                    '    - KARAKORAM HIGHWAY passes through',
                    '    - Highest paved international border crossing',
                    '    - China-Pakistan Economic Corridor (CPEC)',
                    '',
                    '📊 HIGHEST MOTORABLE PASSES (World Records):',
                    '',
                    '  1️⃣ UMLING LA:',
                    '     • Height: 5,799 m (19,024 ft)',
                    '     • Location: Ladakh, India',
                    '     • HIGHEST MOTORABLE ROAD IN WORLD',
                    '     • Built by BRO in 2021',
                    '',
                    '  2️⃣ KHARDUNG LA:',
                    '     • Height: 5,359 m',
                    '     • Previously claimed highest',
                    '',
                    '  3️⃣ CHANG LA:',
                    '     • Height: 5,360 m',
                    '     • Third highest motorable'
                ]
            }
        ],

        diagrams: [
            {
                title: 'Major Himalayan Passes Map',
                type: 'map',
                description: 'Map of Himalayas showing all major passes: J&K (Zoji La, Karakoram), HP (Rohtang, Bara-lacha, Shipki La), Uttarakhand (Lipulekh, Mana, Niti), Sikkim (Nathu La, Jelep La), Arunachal (Bomdila, Bum La). Use different colors for each state.'
            },
            {
                title: 'Western Ghats Gaps',
                type: 'map',
                description: 'Map of Western Ghats showing gaps from north to south: Thal Ghat (Mumbai-Nashik), Bhor Ghat (Mumbai-Pune), Pal Ghat (Kerala-TN), Shencotta Gap (southern). Show railway lines passing through.'
            },
            {
                title: 'Height Comparison of Passes',
                type: 'bar-chart',
                description: 'Vertical bar chart comparing heights: Umling La (5,799m), Khardung La (5,359m), Karakoram (5,540m), Rohtang (3,978m), Zoji La (3,528m), Pal Ghat Gap (140m). Show dramatic height differences.'
            },
            {
                title: 'Pass Routes - Manali to Leh',
                type: 'route-map',
                description: 'Route showing sequence: Manali → Rohtang Pass → Gramphu → Bara-lacha La → Lachulung La → Tanglang La → Leh. Mark heights and distances.'
            },
            {
                title: 'Historical Invasion Routes',
                type: 'map',
                description: 'Map showing historical invasion routes into India: Khyber Pass, Bolan Pass, Gomal Pass routes. Show invader arrows (Alexander, Ghazni, Babur, etc.).'
            }
        ],

        quickFacts: [
            '🏔️ Umling La (5,799m/19,024 ft) = World\'s HIGHEST motorable road (Ladakh)',
            '🚗 Khardung La (5,359m) = Gateway to Nubra Valley and Siachen',
            '❄️ Zoji La connects Srinagar-Leh; Zojila Tunnel under construction (Asia\'s longest)',
            '🕉️ Lipulekh Pass = Kailash Mansarovar pilgrimage route (India-Tibet)',
            '🤝 Nathu La reopened in 2006 (closed since 1962) for India-China trade',
            '🚂 Pal Ghat = WIDEST gap in Western Ghats (24-40 km); allows NE monsoon into Kerala',
            '⚔️ Khyber Pass (now Pakistan) = Historic invasion route to India',
            '🏔️ Rohtang means "pile of corpses" (dangerous historically); now has Atal Tunnel',
            '🏔️ Karakoram Pass (5,540m) = One of highest passes; ancient Silk Route',
            '🚗 Atal Tunnel (9.02 km) world\'s longest above 10,000 ft - bypasses Rohtang',
            '🏔️ Shipki La = Where Sutlej River enters India from Tibet',
            '📍 Bum La (Arunachal) = India-China border, flag meetings point'
        ],

        upscTraps: [
            {
                trap: 'Khardung La is the highest motorable pass in the world',
                clarity: 'NOT anymore! UMLING LA (5,799 m / 19,024 ft) in Ladakh is now the HIGHEST motorable road in world (built 2021). Khardung La is famous but now third highest.'
            },
            {
                trap: 'Khyber Pass is in India',
                clarity: 'Khyber Pass is NOW IN PAKISTAN, on Afghanistan-Pakistan border. It WAS historically important for invasions INTO India. Similarly, Bolan Pass is in Pakistan\'s Balochistan.'
            },
            {
                trap: 'All Western Ghats gaps are at similar heights',
                clarity: 'Very different! Pal Ghat Gap is only ~140 m elevation (almost sea level!). Bhor Ghat ~625 m, Thal Ghat ~583 m. Pal Ghat is the widest and most significant.'
            },
            {
                trap: 'Nathu La has been continuously open for trade',
                clarity: 'Nathu La was CLOSED after 1962 India-China war. REOPENED in 2006 after 44 years! Now used for limited border trade and alternate Kailash Mansarovar route.'
            }
        ],

        revisionBox: {
            title: '⚡ 30-Second Revision',
            points: [
                'Highest motorable: Umling La (5,799m) > Karakoram (5,540m) > Chang La (5,360m) > Khardung La (5,359m)',
                'J&K/Ladakh: Zoji La (Srinagar-Leh), Khardung La (Nubra), Chang La (Pangong)',
                'HP: Rohtang (Kullu-Spiti, Atal Tunnel bypass), Bara-lacha La (Manali-Leh), Shipki La (Tibet, Sutlej enters)',
                'Sikkim: Nathu La (reopened 2006, China trade), Jelep La (historical)',
                'Uttarakhand: Lipulekh (Kailash Mansarovar), Mana Pass (near Badrinath)',
                'Western Ghats: Thal (Mumbai-Nashik), Bhor (Mumbai-Pune), PAL GHAT (widest, Kerala-TN), Shencotta'
            ]
        },

        pyqs: [
            {
                year: 2021,
                question: 'Discuss the strategic importance of major mountain passes along India\'s northern borders.',
                type: 'Mains'
            },
            {
                year: 2020,
                question: 'Zoji La pass connects which two regions?',
                type: 'Prelims',
                options: ['Leh and Kargil', 'Srinagar and Leh', 'Manali and Leh', 'Kullu and Spiti']
            },
            {
                year: 2019,
                question: 'The Pal Ghat Gap is located between:',
                type: 'Prelims',
                options: ['Nilgiris and Cardamom Hills', 'Nilgiris and Anaimalai Hills', 'Anaimalai and Cardamom Hills', 'Sahyadri and Nilgiris']
            },
            {
                year: 2018,
                question: 'Explain the significance of Western Ghats gaps for transport and climate.',
                type: 'Mains'
            },
            {
                year: 2017,
                question: 'Which pass is used for the Kailash Mansarovar pilgrimage?',
                type: 'Prelims',
                options: ['Nathu La', 'Lipulekh', 'Shipki La', 'Rohtang']
            }
        ]
    }
];

// ============================================
// FINAL EXPORT - COMPLETE INDIA PHYSICAL DATA
// ============================================

// Make data available globally
window.indiaPhysicalData = indiaPhysicalData;

console.log('🏔️✅ India Physical Geography Data COMPLETE:', indiaPhysicalData.length, 'topics');
console.log('📚 Topics loaded:', indiaPhysicalData.map(t => t.name).join(', '));
