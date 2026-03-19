/* ============================================
   UPSC GEOGRAPHY LEARNING SYSTEM
   India Drainage Data File - COMPREHENSIVE
   Topics: Ganga System, Indus System, Brahmaputra System,
           East Flowing Rivers, West Flowing Rivers, River Linking
   ============================================ */

const indiaDrainageData = [

    // ============================================
    // TOPIC 1: GANGA RIVER SYSTEM
    // ============================================
    {
        id: 'ganga-river-system',
        name: 'Ganga River System',
        icon: '🌊',
        category: 'india-drainage',
        theme: 'river',
        difficulty: 'medium',
        upscRelevance: 'very-high',

        mindMap: {
            central: 'Ganga System',
            branches: [
                {
                    name: 'Origin & Course',
                    color: '#2196F3',
                    children: [
                        'Gangotri Glacier (Bhagirathi)',
                        'Devprayag confluence',
                        'Ganga proper starts here',
                        '2525 km length (India)',
                        'Enters plains at Haridwar'
                    ]
                },
                {
                    name: 'Left Bank Tributaries',
                    color: '#4CAF50',
                    children: [
                        'Ramganga',
                        'Gomti',
                        'Ghaghara (largest)',
                        'Gandak',
                        'Kosi (Sorrow of Bihar)'
                    ]
                },
                {
                    name: 'Right Bank Tributaries',
                    color: '#FF9800',
                    children: [
                        'Yamuna (largest tributary)',
                        'Son',
                        'Tons',
                        'Chambal',
                        'Betwa'
                    ]
                },
                {
                    name: 'Delta & Mouth',
                    color: '#9C27B0',
                    children: [
                        'Sundarbans Delta',
                        'World\'s largest delta',
                        'Splits into Padma (BD)',
                        'Hooghly (India)',
                        'Bay of Bengal'
                    ]
                }
            ]
        },

        memoryHooks: [
            {
                type: 'mnemonic',
                title: 'Ganga Left Bank Tributaries',
                content: 'RaGo GhaGanKo = Ramganga, Gomti, Ghaghara, Gandak, Kosi. "Ram Goes to Ghana to Get Kosi"',
                icon: '🧠'
            },
            {
                type: 'mnemonic',
                title: 'Ganga Right Bank Tributaries',
                content: 'YaSoTo ChaBe = Yamuna, Son, Tons, Chambal, Betwa. "Yashoda Sobs Too, Chambal Betrayed"',
                icon: '🧠'
            },
            {
                type: 'story',
                title: 'Five Prayags',
                content: 'Bhagirathi collects friends on journey: Vishnu (Alaknanda), Dev (becomes Ganga), Rudra (Mandakini), Nand (Nandakini), Karna (Pindar). "Vishnu-Dev-Rudra-Nand-Karna" at 5 Prayags!',
                icon: '📍'
            },
            {
                type: 'comparison',
                title: 'Yamuna vs Ghaghara',
                content: 'Yamuna = Longest tributary (1376 km). Ghaghara = Largest by discharge (most water). Remember: Length ≠ Discharge!',
                icon: '📊'
            }
        ],

        conceptBlocks: [
            {
                title: 'Origin & Upper Course',
                icon: '🏔️',
                points: [
                    '❄️ ORIGIN:',
                    '  • Gangotri Glacier (Gaumukh) at 7010m',
                    '  • Source stream: BHAGIRATHI',
                    '  • Not Alaknanda (common misconception)',
                    '  • Uttarakhand, Garhwal Himalayas',
                    '',
                    '📍 FIVE PRAYAGS (Confluences):',
                    '  1. VISHNUPRAYAG: Alaknanda + Dhauliganga',
                    '  2. NANDPRAYAG: Alaknanda + Nandakini',
                    '  3. KARNAPRAYAG: Alaknanda + Pindar',
                    '  4. RUDRAPRAYAG: Alaknanda + Mandakini',
                    '  5. DEVPRAYAG: Alaknanda + Bhagirathi = GANGA',
                    '',
                    '📏 KEY FACTS:',
                    '  • Ganga proper starts at Devprayag',
                    '  • Total length: 2525 km (India: 2071 km)',
                    '  • Basin area: 8.6 lakh sq km (26% of India)',
                    '  • Enters plains at HARIDWAR',
                    '',
                    '⛰️ UPPER COURSE CHARACTERISTICS:',
                    '  • Steep gradient, V-shaped valley',
                    '  • Rapids, waterfalls',
                    '  • Erosional features'
                ]
            },
            {
                title: 'Middle Course (Plains)',
                icon: '🌾',
                points: [
                    '📍 HARIDWAR TO FARAKKA:',
                    '  • Enters plains at Haridwar',
                    '  • Gradient reduces drastically',
                    '  • Begins meandering',
                    '',
                    '🔵 LEFT BANK TRIBUTARIES (Himalayan - More water):',
                    '  • RAMGANGA: Originates in Kumaon, joins near Kannauj',
                    '  • GOMTI: Originates near Pilibhit (UP), joins at Varanasi',
                    '  • GHAGHARA (Karnali in Nepal):',
                    '    - Largest tributary by DISCHARGE',
                    '    - Originates in Tibet',
                    '    - Sub-tributary: Sharda (Mahakali)',
                    '    - Joins at Chhapra',
                    '  • GANDAK: Originates in Nepal, joins at Hajipur',
                    '    - Brings sediments',
                    '  • KOSI (Sorrow of Bihar):',
                    '    - Originates in Tibet/Nepal',
                    '    - Shifts course frequently',
                    '    - High sediment load',
                    '    - Floods regularly',
                    '    - Joins at Kursela',
                    '',
                    '🔴 RIGHT BANK TRIBUTARIES (Peninsular - Less water):',
                    '  • YAMUNA: Most important (detailed below)',
                    '  • SON: Originates in Amarkantak (MP)',
                    '    - Joins at Danapur (Bihar)',
                    '  • TONS: Originates in Tamasa Kund (MP)',
                    '',
                    '📊 COMPARISON:',
                    '  • Left bank: Perennial, snow-fed, more discharge',
                    '  • Right bank: Rain-fed, seasonal, less discharge'
                ]
            },
            {
                title: 'Yamuna - The Major Tributary',
                icon: '💧',
                points: [
                    '📍 ORIGIN & COURSE:',
                    '  • Origin: Yamunotri Glacier (Banderpunch, 6316m)',
                    '  • Length: 1376 km (LONGEST tributary of Ganga)',
                    '  • Joins Ganga at: PRAYAGRAJ (Sangam)',
                    '  • Passes through: Delhi, Agra, Mathura',
                    '',
                    '🔵 YAMUNA\'S TRIBUTARIES:',
                    '  • LEFT BANK (Himalayan):',
                    '    - Tons (in hills)',
                    '    - Hindon',
                    '  • RIGHT BANK (Peninsular):',
                    '    - CHAMBAL (largest tributary of Yamuna):',
                    '      * Origin: Janapao Hills (Vindhyas)',
                    '      * Ravines in Chambal valley',
                    '      * Gandhi Sagar, Rana Pratap Sagar dams',
                    '    - BETWA:',
                    '      * Origin: Vindhya Range',
                    '      * Orchha, Jhansi on banks',
                    '    - KEN:',
                    '      * Origin: Vindhya Range',
                    '      * Ken-Betwa Link proposed',
                    '    - SINDH:',
                    '      * Origin: Vidisha (MP)',
                    '',
                    '⚠️ ISSUES:',
                    '  • Most polluted river in India',
                    '  • Delhi drains 80% of sewage into it',
                    '  • Yamuna Action Plan (1993) - limited success'
                ]
            },
            {
                title: 'Lower Course & Delta',
                icon: '🌊',
                points: [
                    '📍 FARAKKA ONWARDS:',
                    '  • Farakka Barrage (1975): Diverts water to Hooghly',
                    '  • Purpose: Flush Kolkata port sediments',
                    '  • India-Bangladesh dispute over water sharing',
                    '',
                    '🔀 DISTRIBUTARIES:',
                    '  • After Farakka, Ganga splits:',
                    '  • PADMA: Main flow enters Bangladesh',
                    '  • HOOGHLY (BHAGIRATHI): Branch in India',
                    '    - Kolkata port on Hooghly',
                    '    - Tidal river',
                    '',
                    '🌿 SUNDARBANS DELTA:',
                    '  • World\'s LARGEST DELTA (Ganga-Brahmaputra)',
                    '  • Area: 80,000+ sq km',
                    '  • Shared: India (West Bengal) + Bangladesh',
                    '  • Mangrove forest (UNESCO World Heritage)',
                    '  • Home to Royal Bengal Tiger',
                    '  • Sinking due to sea level rise',
                    '',
                    '📍 MOUTH:',
                    '  • Bay of Bengal',
                    '  • Forms complex of islands (chars)',
                    '  • Sagar Island: Most prominent',
                    '',
                    '📏 BASIN STATISTICS:',
                    '  • Basin area: 8,61,404 sq km',
                    '  • States: 11 (UP, Bihar, MP, Rajasthan, WB, UK, HP, Haryana, Chhattisgarh, Jharkhand, Delhi)',
                    '  • Population in basin: 450+ million (43% of India)',
                    '  • Most densely populated river basin globally'
                ]
            },
            {
                title: 'Dams & Projects',
                icon: '🏗️',
                points: [
                    '⚡ MAJOR DAMS ON GANGA SYSTEM:',
                    '',
                    '🏔️ TEHRI DAM (Bhagirathi):',
                    '  • Highest dam in India (260.5 m)',
                    '  • Multipurpose: Power + Irrigation + Water supply',
                    '  • Capacity: 1000 MW',
                    '  • Controversial: Seismic zone concerns',
                    '',
                    '🏔️ OTHER DAMS:',
                    '  • Rihand Dam (Son) - Power generation',
                    '  • Gandhi Sagar (Chambal) - MP-Rajasthan',
                    '  • Rana Pratap Sagar (Chambal)',
                    '  • Jawahar Sagar (Chambal)',
                    '',
                    '🚰 BARRAGES:',
                    '  • Farakka Barrage (1975)',
                    '  • Narora Barrage (Ganga, UP)',
                    '  • Kosi Barrage (Bihar)',
                    '',
                    '♻️ NAMAMI GANGE:',
                    '  • Flagship programme (2014)',
                    '  • Budget: ₹20,000 crore',
                    '  • Objectives:',
                    '    - Pollution abatement (sewage treatment)',
                    '    - Ghat development',
                    '    - Riverfront development',
                    '    - Biodiversity conservation',
                    '  • NMCG: National Mission for Clean Ganga'
                ]
            },
            {
                title: 'Issues & Challenges',
                icon: '⚠️',
                points: [
                    '🔴 POLLUTION:',
                    '  • Industrial effluents: Kanpur tanneries worst',
                    '  • Domestic sewage: 80% untreated',
                    '  • Religious waste: Flowers, ashes, idols',
                    '  • Agricultural runoff: Pesticides, fertilizers',
                    '  • Open defecation near banks',
                    '',
                    '📊 POLLUTION FACTS:',
                    '  • BOD/COD levels very high',
                    '  • Fecal coliform: 100x safe limits',
                    '  • Most polluted stretches: Kanpur, Varanasi, Patna',
                    '  • Only 5% of Kannauj-Varanasi stretch fits bathing standard',
                    '',
                    '💧 WATER SCARCITY:',
                    '  • Over-extraction for irrigation',
                    '  • Reduced dry season flow',
                    '  • Groundwater depletion in basin',
                    '',
                    '🌊 FLOODS:',
                    '  • Annual floods in Bihar, Bengal',
                    '  • Kosi shifts course, causes devastation',
                    '  • Embankment breaches',
                    '',
                    '🌡️ CLIMATE CHANGE:',
                    '  • Gangotri glacier retreating (22 m/year)',
                    '  • Long-term flow reduction predicted',
                    '  • Monsoon variability',
                    '',
                    '🤝 TRANSBOUNDARY ISSUES:',
                    '  • Farakka dispute with Bangladesh',
                    '  • 1996 Ganga Water Treaty: 30-year agreement',
                    '  • Sharing during lean season contentious'
                ]
            }
        ],

        diagrams: [
            {
                title: 'Ganga River System Map',
                type: 'map',
                description: 'Map showing Ganga from Gangotri to Bay of Bengal. Mark all tributaries: Left bank (blue) - Ramganga, Gomti, Ghaghara, Gandak, Kosi. Right bank (red) - Yamuna, Son. Mark major cities: Haridwar, Kanpur, Prayagraj, Varanasi, Patna, Kolkata.'
            },
            {
                title: 'Five Prayags Diagram',
                type: 'flowchart',
                description: 'Diagram showing the 5 Prayags from top to bottom: Vishnuprayag (Alaknanda + Dhauliganga), Nandprayag (+Nandakini), Karnaprayag (+Pindar), Rudraprayag (+Mandakini), Devprayag (Alaknanda + Bhagirathi = GANGA).'
            },
            {
                title: 'Ganga Profile - Gradient Change',
                type: 'cross-section',
                description: 'Long profile of Ganga: Steep gradient in Himalayas (Gangotri to Haridwar), Gentle gradient in Plains (Haridwar to Farakka), Delta formation (Farakka to Bay of Bengal).'
            },
            {
                title: 'Sundarbans Delta',
                type: 'map',
                description: 'Delta map showing: Hooghly branch (west, India), Padma branch (east, Bangladesh), mangrove coverage, major islands, India-Bangladesh border through delta.'
            },
            {
                title: 'Yamuna Sub-System',
                type: 'flowchart',
                description: 'Yamuna from Yamunotri to Prayagraj with tributaries: Chambal, Betwa, Ken, Sindh (right bank), Hindon (left bank). Mark Delhi, Agra locations.'
            }
        ],

        quickFacts: [
            '🏔️ Origin: Gangotri Glacier (Gaumukh), source stream = Bhagirathi',
            '📏 Length: 2525 km (2071 km in India) | Basin: 8.6 lakh sq km',
            '📍 Ganga proper starts at Devprayag (Bhagirathi + Alaknanda)',
            '💧 Yamuna: Longest tributary (1376 km), joins at Prayagraj',
            '🌊 Ghaghara: Largest by discharge (water volume)',
            '⚠️ Kosi: "Sorrow of Bihar" - shifts course, floods annually',
            '🌿 Sundarbans: World\'s largest delta, mangrove forest, Royal Bengal Tiger',
            '🏗️ Tehri Dam: Highest dam in India (260.5 m) on Bhagirathi',
            '🤝 Farakka Barrage: India-Bangladesh water sharing dispute',
            '👥 Basin population: 450+ million (43% of India\'s population)',
            '♻️ Namami Gange: ₹20,000 crore programme for Ganga rejuvenation',
            '❄️ Gangotri glacier retreating at 22 m/year due to climate change'
        ],

        upscTraps: [
            {
                trap: 'Alaknanda is the source of Ganga',
                clarity: 'WRONG! BHAGIRATHI (from Gangotri Glacier) is considered the SOURCE. Alaknanda brings more water but Bhagirathi is the traditional/recognized source. They meet at Devprayag to form Ganga.'
            },
            {
                trap: 'Yamuna is the largest tributary of Ganga',
                clarity: 'DEPENDS ON DEFINITION! Yamuna is LONGEST tributary (1376 km). But GHAGHARA has the largest DISCHARGE (most water volume). Length ≠ Discharge. Specify which metric.'
            },
            {
                trap: 'Ganga originates at Devprayag',
                clarity: 'MISLEADING! Ganga PROPER (by that name) starts at Devprayag. But the SOURCE is Gangotri Glacier where Bhagirathi originates. Devprayag is where Bhagirathi + Alaknanda meet.'
            },
            {
                trap: 'Sundarbans is entirely in India',
                clarity: 'WRONG! Sundarbans is SHARED: ~40% in India (West Bengal), ~60% in Bangladesh. It\'s the world\'s largest delta formed by Ganga-Brahmaputra system.'
            }
        ],

        revisionBox: {
            title: '⚡ 30-Second Revision',
            points: [
                'Source: Gangotri Glacier (Bhagirathi) → Devprayag (+ Alaknanda) = Ganga',
                '5 Prayags: Vishnu, Nand, Karna, Rudra, Dev (top to bottom)',
                'Left bank (Himalayan): Ramganga, Gomti, Ghaghara, Gandak, Kosi',
                'Right bank (Peninsular): Yamuna, Son, Chambal, Betwa',
                'Yamuna = Longest tributary | Ghaghara = Largest discharge',
                'Delta: Sundarbans (world\'s largest) → Hooghly (India) + Padma (BD)',
                'Issues: Pollution (Kanpur worst), Glacier retreat, Floods (Kosi), Bangladesh dispute'
            ]
        },

        pyqs: [
            {
                year: 2023,
                question: 'Discuss the issues and challenges in cleaning of river Ganga.',
                type: 'Mains'
            },
            {
                year: 2022,
                question: 'Describe the drainage pattern of the Ganga river system.',
                type: 'Mains'
            },
            {
                year: 2021,
                question: 'Why is Kosi called the "Sorrow of Bihar"?',
                type: 'Mains'
            },
            {
                year: 2020,
                question: 'The source stream of Ganga is:',
                type: 'Prelims',
                options: ['Alaknanda', 'Bhagirathi', 'Mandakini', 'Pindar']
            },
            {
                year: 2019,
                question: 'Discuss the importance of Namami Gange Programme.',
                type: 'Mains'
            }
        ]
    },

    // ============================================
    // TOPIC 2: INDUS RIVER SYSTEM
    // ============================================
    {
        id: 'indus-river-system',
        name: 'Indus River System',
        icon: '🏔️',
        category: 'india-drainage',
        theme: 'river',
        difficulty: 'medium',
        upscRelevance: 'very-high',

        mindMap: {
            central: 'Indus System',
            branches: [
                {
                    name: 'Main River',
                    color: '#2196F3',
                    children: [
                        'Origin: Tibet (Mansarovar)',
                        'Flows through J&K, Pakistan',
                        'Length: 2880 km (India: 709 km)',
                        'Enters Pakistan near Dras',
                        'Drains into Arabian Sea'
                    ]
                },
                {
                    name: 'Left Bank (Eastern)',
                    color: '#4CAF50',
                    children: [
                        'Jhelum (Wular Lake)',
                        'Chenab (largest tributary)',
                        'Ravi',
                        'Beas',
                        'Sutlej (longest)'
                    ]
                },
                {
                    name: 'Right Bank (Western)',
                    color: '#FF9800',
                    children: [
                        'Shyok',
                        'Gilgit',
                        'Kabul',
                        'Kurram',
                        'Gomal'
                    ]
                },
                {
                    name: 'Indus Waters Treaty',
                    color: '#9C27B0',
                    children: [
                        '1960 (Nehru-Ayub)',
                        'World Bank mediated',
                        'Western rivers: Pakistan',
                        'Eastern rivers: India',
                        'Run-of-river projects allowed'
                    ]
                }
            ]
        },

        memoryHooks: [
            {
                type: 'mnemonic',
                title: 'Five Rivers of Punjab',
                content: 'JeCRaBeSu = Jhelum, Chenab, Ravi, Beas, Sutlej. "Jee Crab Eats Sushi" - all flow into Indus!',
                icon: '🧠'
            },
            {
                type: 'acronym',
                title: 'Indus Waters Treaty Division',
                content: 'WEST = Pakistan (3Ws: Western rivers). EAST = India (3Es: Eastern rivers). JCR to Pakistan, BRS to India... wait, it\'s opposite! CBS (Chenab, Jhelum, Indus) to Pakistan, RBS (Ravi, Beas, Sutlej) to India.',
                icon: '🤝'
            },
            {
                type: 'story',
                title: 'Indus Journey',
                content: 'Indus born in TIBET (Mt. Kailash area), travels through LADAKH (enters India), goes to PAKISTAN, meets all 5 Punjab rivers, finally dies in ARABIAN SEA. Tibet→India→Pakistan→Arabian Sea!',
                icon: '🗺️'
            },
            {
                type: 'comparison',
                title: 'Sutlej vs Chenab',
                content: 'Sutlej = LONGEST of 5 rivers (1500 km). Chenab = LARGEST by volume (most water). Just like Yamuna vs Ghaghara in Ganga system!',
                icon: '📊'
            }
        ],

        conceptBlocks: [
            {
                title: 'Indus - The Main River',
                icon: '🏔️',
                points: [
                    '📍 ORIGIN:',
                    '  • Bokhar Chu glacier near Lake Mansarovar',
                    '  • TIBET (China) - not in India!',
                    '  • Near Mt. Kailash, 5500m altitude',
                    '  • Called "Singi Khamban" (Lion\'s Mouth) at source',
                    '',
                    '📏 DIMENSIONS:',
                    '  • Total length: 2880 km (one of Asia\'s longest)',
                    '  • Length in India: 709 km only (Ladakh)',
                    '  • Basin in India: 1.17 lakh sq km',
                    '  • Total basin: 11.65 lakh sq km',
                    '',
                    '🗺️ COURSE:',
                    '  • Tibet → Ladakh (India) → Pakistan → Arabian Sea',
                    '  • Enters India near Demchok (Ladakh)',
                    '  • Flows NW parallel to Himalayas',
                    '  • Crosses Himalayas near Nanga Parbat',
                    '  • World\'s deepest gorge near Gilgit',
                    '  • Enters Pakistan near Chillar (Dras)',
                    '  • Receives all 5 Punjab rivers',
                    '  • Drains into Arabian Sea (Karachi coast)',
                    '',
                    '⚠️ STRATEGIC IMPORTANCE:',
                    '  • Flows through disputed territories',
                    '  • Ladakh, Gilgit-Baltistan, POK',
                    '  • Water sharing: Major India-Pakistan issue'
                ]
            },
            {
                title: 'Five Rivers of Punjab',
                icon: '🌊',
                points: [
                    '📍 JHELUM (Vitasta):',
                    '  • Origin: Verinag Spring, Kashmir',
                    '  • Flows through: Srinagar, Wular Lake',
                    '  • Length: 725 km',
                    '  • Wular Lake: Largest freshwater lake in India',
                    '  • Dam: Uri Hydroelectric Project',
                    '',
                    '📍 CHENAB (Chandrabhaga):',
                    '  • Origin: Bara Lacha Pass (HP)',
                    '  • Formed by: Chandra + Bhaga rivers',
                    '  • Length: 1180 km',
                    '  • LARGEST tributary by volume',
                    '  • Dams: Salal, Baglihar',
                    '  • Baglihar dispute with Pakistan',
                    '',
                    '📍 RAVI (Iravati):',
                    '  • Origin: Rohtang Pass (HP)',
                    '  • Flows near: Chamba, Lahore (Pak)',
                    '  • Length: 720 km',
                    '  • Smallest of 5 rivers',
                    '  • Dam: Ranjit Sagar (Thein Dam)',
                    '',
                    '📍 BEAS (Vipasha):',
                    '  • Origin: Beas Kund near Rohtang (HP)',
                    '  • Joins Sutlej at: Harike (Punjab)',
                    '  • Length: 460 km',
                    '  • Entirely in India (only one!)',
                    '  • Dam: Pong Dam (Maharana Pratap Sagar)',
                    '',
                    '📍 SUTLEJ (Shatadru):',
                    '  • Origin: Rakas Lake near Mansarovar (Tibet)',
                    '  • Enters India: Shipki La (HP)',
                    '  • Length: 1500 km (LONGEST of 5)',
                    '  • Dams: Bhakra-Nangal, Nathpa Jhakri',
                    '  • Bhakra: Highest gravity dam in India (226m)',
                    '  • Joins Indus in Pakistan'
                ]
            },
            {
                title: 'Indus Waters Treaty 1960',
                icon: '🤝',
                points: [
                    '📜 BACKGROUND:',
                    '  • Signed: September 19, 1960',
                    '  • Signatories: Nehru (India), Ayub Khan (Pakistan)',
                    '  • Mediator: World Bank',
                    '  • One of most successful water treaties globally',
                    '',
                    '📊 WATER ALLOCATION:',
                    '  • WESTERN RIVERS (to Pakistan):',
                    '    - Indus, Jhelum, Chenab',
                    '    - ~80% of total water',
                    '  • EASTERN RIVERS (to India):',
                    '    - Ravi, Beas, Sutlej',
                    '    - ~20% of total water',
                    '',
                    '⚙️ INDIA\'S RIGHTS ON WESTERN RIVERS:',
                    '  • Domestic use allowed',
                    '  • Non-consumptive use (navigation)',
                    '  • Run-of-river hydroelectric projects',
                    '    - No large storage dams',
                    '    - Limited pondage allowed',
                    '  • Limited agricultural use (existing)',
                    '',
                    '⚠️ DISPUTES:',
                    '  • BAGLIHAR DAM (Chenab): Pakistan objected, neutral expert ruled mostly in India\'s favor',
                    '  • KISHANGANGA (Jhelum): Arbitration 2013, India can divert limited water',
                    '  • RATLE PROJECT (Chenab): Ongoing dispute',
                    '  • Pakistan wants renegotiation',
                    '  • India: Treaty is bilateral, non-negotiable',
                    '',
                    '📍 PERMANENT INDUS COMMISSION:',
                    '  • Set up under treaty',
                    '  • Regular meetings between India-Pakistan',
                    '  • Resolves technical issues',
                    '  • Has survived wars, tensions'
                ]
            },
            {
                title: 'Major Dams & Projects',
                icon: '🏗️',
                points: [
                    '🏔️ ON SUTLEJ:',
                    '  • BHAKRA DAM:',
                    '    - Highest gravity dam in India (226 m)',
                    '    - Gobind Sagar Lake reservoir',
                    '    - Multipurpose: Power + Irrigation',
                    '    - Capacity: 1325 MW',
                    '  • NATHPA JHAKRI:',
                    '    - Largest hydroelectric: 1500 MW',
                    '    - Run-of-river project',
                    '',
                    '🏔️ ON BEAS:',
                    '  • PONG DAM (Maharana Pratap Sagar):',
                    '    - Earth-fill dam',
                    '    - Wetland for migratory birds',
                    '  • BEAS-SUTLEJ LINK:',
                    '    - Pandoh Dam diverts Beas water to Sutlej',
                    '',
                    '🏔️ ON RAVI:',
                    '  • RANJIT SAGAR (THEIN DAM):',
                    '    - Earth and rock-fill dam',
                    '    - On India-Pakistan border',
                    '',
                    '🏔️ ON CHENAB:',
                    '  • SALAL DAM:',
                    '    - 690 MW capacity',
                    '  • BAGLIHAR DAM:',
                    '    - 450 MW capacity',
                    '    - Disputed by Pakistan',
                    '  • PAKAL DUL (under construction):',
                    '    - Will be J&K\'s largest',
                    '',
                    '🏔️ ON JHELUM:',
                    '  • URI HYDROELECTRIC:',
                    '    - 480 MW capacity',
                    '  • KISHANGANGA PROJECT:',
                    '    - 330 MW',
                    '    - Diverts water to Wular Lake basin'
                ]
            },
            {
                title: 'Basin Characteristics',
                icon: '📊',
                points: [
                    '📏 PHYSICAL FEATURES:',
                    '  • Drainage area in India: 1.17 lakh sq km (3.5%)',
                    '  • Total basin: 11.65 lakh sq km',
                    '  • States: J&K, Ladakh, HP, Punjab, Haryana, Rajasthan',
                    '',
                    '🌾 AGRICULTURE:',
                    '  • Punjab plains: "Granary of India"',
                    '  • Wheat, rice, cotton cultivation',
                    '  • Extensive canal irrigation:',
                    '    - Indira Gandhi Canal (Rajasthan)',
                    '    - Bhakra Canal System',
                    '    - Western Yamuna Canal',
                    '',
                    '💧 INDIRA GANDHI CANAL:',
                    '  • Longest canal in India (649 km)',
                    '  • Source: Harike Barrage (Beas-Sutlej confluence)',
                    '  • Destination: Thar Desert (Rajasthan)',
                    '  • Transformed desert into farmland',
                    '  • Issue: Waterlogging, salinity',
                    '',
                    '⛰️ UNIQUE FEATURES:',
                    '  • Antecedent river (older than Himalayas)',
                    '  • Cuts through Himalayan ranges',
                    '  • World\'s deepest gorge (Gilgit area)',
                    '  • Extensive braiding in plains',
                    '',
                    '🔬 ETYMOLOGY:',
                    '  • "Sindhu" in Sanskrit',
                    '  • "Hindu" - Persian pronunciation',
                    '  • India\'s name derives from Indus!'
                ]
            }
        ],

        diagrams: [
            {
                title: 'Indus River System Map',
                type: 'map',
                description: 'Map showing: Indus from Tibet origin to Arabian Sea, 5 Punjab rivers (Jhelum, Chenab, Ravi, Beas, Sutlej), their origins in HP/Kashmir, confluence points. Mark India-Pakistan border, major dams.'
            },
            {
                title: 'Indus Waters Treaty - River Division',
                type: 'diagram',
                description: 'Diagram showing: Western rivers (Indus, Jhelum, Chenab) flowing to Pakistan, Eastern rivers (Ravi, Beas, Sutlej) to India. Use different colors. Mark percentages (80% vs 20%).'
            },
            {
                title: 'Major Dams on Indus System',
                type: 'map',
                description: 'Map marking all major dams: Bhakra-Nangal, Pong, Ranjit Sagar, Salal, Baglihar, Uri. Label river names, dam heights, capacities.'
            },
            {
                title: 'Five Rivers - Comparative Table',
                type: 'comparison-chart',
                description: 'Table comparing: Jhelum, Chenab, Ravi, Beas, Sutlej. Columns: Origin, Length, Special features, Major dams, IWT allocation.'
            },
            {
                title: 'Indira Gandhi Canal',
                type: 'map',
                description: 'Map showing: Harike Barrage origin, canal route through Rajasthan, command area in Thar Desert. Mark feeder and main canal.'
            }
        ],

        quickFacts: [
            '🏔️ Indus origin: Tibet (near Mt. Kailash), NOT in India',
            '📏 Total length: 2880 km | India: 709 km only',
            '🌊 5 rivers: Jhelum, Chenab, Ravi, Beas, Sutlej (JeCRaBeSu)',
            '📊 Sutlej = Longest (1500 km) | Chenab = Largest (volume)',
            '✅ Beas: ONLY Punjab river entirely in India',
            '🤝 Indus Waters Treaty 1960: World Bank mediated',
            '📊 IWT allocation: Western (80%) to Pakistan, Eastern (20%) to India',
            '🏗️ Bhakra Dam: Highest gravity dam in India (226 m)',
            '🚰 Indira Gandhi Canal: Longest canal (649 km), irrigates Thar',
            '📍 Wular Lake: Largest freshwater lake (on Jhelum)',
            '⛰️ Indus is antecedent river (older than Himalayas)',
            '📜 India\'s name derived from "Sindhu" (Sanskrit for Indus)'
        ],

        upscTraps: [
            {
                trap: 'Indus River originates in India',
                clarity: 'WRONG! Indus originates in TIBET (China), near Lake Mansarovar and Mt. Kailash. It enters India in Ladakh, but source is NOT in India. Only 709 km (of 2880 km) flows through India.'
            },
            {
                trap: 'India got more water under Indus Waters Treaty',
                clarity: 'WRONG! PAKISTAN got more water (~80%). India got Eastern rivers (Ravi, Beas, Sutlej) = only 20% of water. Western rivers (Indus, Jhelum, Chenab) with 80% water go to Pakistan.'
            },
            {
                trap: 'Sutlej is the largest tributary of Indus',
                clarity: 'DEPENDS ON DEFINITION! Sutlej is LONGEST (1500 km). But CHENAB has largest DISCHARGE (water volume). Specify which metric - length or volume.'
            },
            {
                trap: 'All five Punjab rivers originate in India',
                clarity: 'WRONG! SUTLEJ originates in TIBET (Rakas Lake). Jhelum, Chenab, Ravi, Beas originate in India (Kashmir/HP). Sutlej enters India at Shipki La.'
            }
        ],

        revisionBox: {
            title: '⚡ 30-Second Revision',
            points: [
                'Indus origin: Tibet (Mt. Kailash area) → Ladakh → Pakistan → Arabian Sea',
                '5 Punjab rivers: Jhelum, Chenab, Ravi, Beas, Sutlej (all join Indus)',
                'Sutlej = Longest (1500 km) | Chenab = Largest discharge | Beas = Entirely in India',
                'IWT 1960: Western (Indus, Jhelum, Chenab) → Pakistan | Eastern (Ravi, Beas, Sutlej) → India',
                'India can build run-of-river projects on Western rivers',
                'Major dams: Bhakra (Sutlej), Baglihar (Chenab), Uri (Jhelum)',
                'Indira Gandhi Canal: Longest canal, Harike to Thar Desert'
            ]
        },

        pyqs: [
            {
                year: 2023,
                question: 'Discuss the provisions of Indus Waters Treaty and recent disputes between India and Pakistan.',
                type: 'Mains'
            },
            {
                year: 2021,
                question: 'What are run-of-river projects? How do they relate to Indus Waters Treaty?',
                type: 'Mains'
            },
            {
                year: 2020,
                question: 'The river that originates in Tibet and enters India at Shipki La is:',
                type: 'Prelims',
                options: ['Indus', 'Sutlej', 'Brahmaputra', 'Ganga']
            },
            {
                year: 2019,
                question: 'Discuss the strategic importance of Indus river system.',
                type: 'Mains'
            },
            {
                year: 2018,
                question: 'Describe the drainage pattern of Indus river system in India.',
                type: 'Mains'
            }
        ]
    },

    // ============================================
    // TOPIC 3: BRAHMAPUTRA RIVER SYSTEM
    // ============================================
    {
        id: 'brahmaputra-river-system',
        name: 'Brahmaputra River System',
        icon: '🌊',
        category: 'india-drainage',
        theme: 'river',
        difficulty: 'medium',
        upscRelevance: 'very-high',

        mindMap: {
            central: 'Brahmaputra System',
            branches: [
                {
                    name: 'Names & Course',
                    color: '#2196F3',
                    children: [
                        'Tibet: Tsangpo (Yarlung)',
                        'Arunachal: Siang/Dihang',
                        'Assam: Brahmaputra',
                        'Bangladesh: Jamuna',
                        'Joins Ganga as Padma'
                    ]
                },
                {
                    name: 'Tributaries',
                    color: '#4CAF50',
                    children: [
                        'Subansiri (largest)',
                        'Kameng/Jia Bhareli',
                        'Manas',
                        'Teesta',
                        'Dhansiri, Lohit, Dibang'
                    ]
                },
                {
                    name: 'Features',
                    color: '#FF9800',
                    children: [
                        'Majuli: Largest river island',
                        'Braided channel',
                        'Annual floods in Assam',
                        'Antecedent river',
                        '4th largest discharge (world)'
                    ]
                },
                {
                    name: 'Issues',
                    color: '#E91E63',
                    children: [
                        'China damming (upstream)',
                        'Floods in Assam',
                        'Erosion of banks',
                        'No water sharing treaty',
                        'Strategic concerns'
                    ]
                }
            ]
        },

        memoryHooks: [
            {
                type: 'story',
                title: 'Brahmaputra\'s Journey & Names',
                content: 'In Tibet he\'s TSANGPO (the purifier), enters India becomes SIANG (through Arunachal gorge), in Assam becomes BRAHMAPUTRA (son of Brahma), in Bangladesh becomes JAMUNA (finally joining Ganga as PADMA). 4 countries, 4 names!',
                icon: '🗺️'
            },
            {
                type: 'mnemonic',
                title: 'Major Tributaries',
                content: 'SuKaMaTe DiLoDb = Subansiri, Kameng, Manas, Teesta, Dibang, Lohit, Dhansiri. "Super Karma Makes Tea Daily, Lohit Drinks!"',
                icon: '🧠'
            },
            {
                type: 'comparison',
                title: 'Brahmaputra vs Other Rivers',
                content: 'Brahmaputra is MALE river (son of Brahma). All other Indian rivers are FEMALE! Only male-named river in India.',
                icon: '👨'
            },
            {
                type: 'visual',
                title: 'Why Brahmaputra Floods',
                content: 'Narrow valley + Huge water volume + High sediment = River has NO SPACE to spread. Result: Annual devastating floods in Assam.',
                icon: '🌊'
            }
        ],

        conceptBlocks: [
            {
                title: 'Origin & Different Names',
                icon: '🏔️',
                points: [
                    '📍 ORIGIN:',
                    '  • Angsi Glacier, near Kailash Mansarovar',
                    '  • Chemayungdung glacier (Tibet)',
                    '  • Altitude: 5150 m',
                    '  • Same region as Indus & Sutlej!',
                    '',
                    '🌏 NAMES IN DIFFERENT REGIONS:',
                    '  • TIBET: Yarlung Tsangpo (Tsangpo = "Purifier")',
                    '    - Flows east, parallel to Himalayas',
                    '    - 1625 km in Tibet',
                    '  • ARUNACHAL: Siang / Dihang',
                    '    - Takes sharp U-turn near Namcha Barwa',
                    '    - Enters India through deep gorge',
                    '  • ASSAM: Brahmaputra',
                    '    - "Son of Brahma" (only male river!)',
                    '    - Flows west, then south',
                    '    - 725 km in Assam valley',
                    '  • BANGLADESH: Jamuna',
                    '    - Flows south',
                    '    - Joins Ganga (Padma)',
                    '',
                    '📏 DIMENSIONS:',
                    '  • Total length: 2900 km (9th longest globally)',
                    '  • India length: 916 km',
                    '  • Basin: 5.8 lakh sq km (India: 1.94 lakh)',
                    '  • Discharge: 4th largest in world'
                ]
            },
            {
                title: 'Course Through India',
                icon: '🗺️',
                points: [
                    '⛰️ ENTRY INTO INDIA:',
                    '  • Enters at Arunachal Pradesh',
                    '  • Near Namcha Barwa peak (7756 m)',
                    '  • Takes dramatic U-turn (hairpin bend)',
                    '  • Cuts through Himalayas: World\'s deepest gorge',
                    '    - Yarlung Tsangpo Grand Canyon',
                    '    - Depth: 5500 m (deeper than Grand Canyon)',
                    '',
                    '🏞️ ARUNACHAL SECTION:',
                    '  • Called SIANG / DIHANG',
                    '  • Steep gradient, rapids, gorges',
                    '  • Receives Dibang, Lohit',
                    '  • After confluence: Called Brahmaputra',
                    '',
                    '🌾 ASSAM SECTION:',
                    '  • Enters Assam valley near Sadiya',
                    '  • Flows WESTWARD (unique - most rivers flow east!)',
                    '  • Valley: 80-100 km wide',
                    '  • Becomes braided (multiple channels)',
                    '  • Forms MAJULI ISLAND',
                    '  • Receives numerous tributaries',
                    '  • Exits India near Dhubri',
                    '',
                    '🇧🇩 BANGLADESH:',
                    '  • Called JAMUNA',
                    '  • Joins GANGA (Padma) near Goalundo',
                    '  • Combined river: PADMA',
                    '  • Padma + Meghna = Bay of Bengal',
                    '  • Forms Sundarbans Delta (shared)'
                ]
            },
            {
                title: 'Major Tributaries',
                icon: '💧',
                points: [
                    '🔵 LEFT BANK TRIBUTARIES (From Arunachal/Tibet):',
                    '  • DIBANG:',
                    '    - Origin: Keya Pass (Arunachal)',
                    '    - Joins at Sadiya',
                    '  • LOHIT:',
                    '    - Origin: Eastern Tibet',
                    '    - Enters via Arunachal',
                    '    - Together with Dibang forms Brahmaputra proper',
                    '  • SUBANSIRI:',
                    '    - LARGEST tributary of Brahmaputra',
                    '    - Origin: Tibet',
                    '    - "Gold river" (gold dust in sand)',
                    '    - Dam: Subansiri Lower Project (controversial)',
                    '  • KAMENG (Jia Bhareli):',
                    '    - Origin: Arunachal Pradesh',
                    '    - Passes through Tawang',
                    '',
                    '🔵 RIGHT BANK TRIBUTARIES (From Meghalaya/Assam Hills):',
                    '  • MANAS:',
                    '    - Origin: Bhutan',
                    '    - Manas Tiger Reserve on banks',
                    '    - Important for wildlife',
                    '  • TEESTA:',
                    '    - Origin: Sikkim (Pahuhri glacier)',
                    '    - Major river of Sikkim, North Bengal',
                    '    - Joins in Bangladesh',
                    '    - India-Bangladesh Teesta dispute',
                    '  • DHANSIRI:',
                    '    - Origin: Nagaland',
                    '',
                    '📊 NOTE:',
                    '  • Left bank tributaries bring more water (Himalayan)',
                    '  • Right bank tributaries shorter, from plateaus'
                ]
            },
            {
                title: 'Unique Features',
                icon: '⭐',
                points: [
                    '🏝️ MAJULI ISLAND:',
                    '  • World\'s LARGEST RIVER ISLAND',
                    '  • Area: ~352 sq km (shrinking due to erosion)',
                    '  • Location: Assam, in Brahmaputra',
                    '  • Cultural significance: Satras (monasteries)',
                    '  • Proposed for UNESCO World Heritage',
                    '  • THREAT: Erosion reducing size by 20% since 1950s',
                    '',
                    '🔀 BRAIDED CHANNEL:',
                    '  • Multiple channels separated by sandbars (chars)',
                    '  • Constantly shifting channels',
                    '  • High sediment load causes braiding',
                    '  • Width: Up to 10-15 km in Assam!',
                    '',
                    '⛰️ ANTECEDENT RIVER:',
                    '  • Older than Himalayas',
                    '  • Maintained course while mountains rose',
                    '  • Hence cuts through mountain ranges',
                    '  • Similar to Indus, Sutlej',
                    '',
                    '🌊 DISCHARGE:',
                    '  • 4th largest in world (after Amazon, Congo, Ganga)',
                    '  • Average: 19,800 cumecs',
                    '  • Peak monsoon: Much higher',
                    '',
                    '🏔️ YARLUNG TSANGPO CANYON:',
                    '  • Deepest canyon in world (5500 m)',
                    '  • Near Namcha Barwa peak',
                    '  • Hydropower potential immense (China eyeing it)'
                ]
            },
            {
                title: 'Floods & Issues',
                icon: '⚠️',
                points: [
                    '🌊 FLOOD PROBLEM:',
                    '  • Assam floods annually (July-September)',
                    '  • Causes:',
                    '    - Narrow valley, huge water volume',
                    '    - High sediment raising riverbed',
                    '    - Tributaries add monsoon water',
                    '    - Deforestation in catchment',
                    '    - Earthquakes destabilize banks',
                    '  • Impact:',
                    '    - 100+ districts affected',
                    '    - Kaziranga NP floods (rhinos migrate)',
                    '    - Crop damage, displacement',
                    '    - 1950 earthquake worsened situation',
                    '',
                    '🏖️ BANK EROSION:',
                    '  • Majuli shrinking by 7 sq km/year',
                    '  • Villages disappearing',
                    '  • Dibrugarh, Tezpur affected',
                    '  • Brahmaputra Board for erosion control',
                    '',
                    '🇨🇳 CHINA FACTOR:',
                    '  • China building dams on Tsangpo',
                    '  • Zangmu Dam (2015): 510 MW',
                    '  • More planned (10+ dams proposed)',
                    '  • Concerns:',
                    '    - No water sharing treaty with China',
                    '    - Flash floods if dam released',
                    '    - Reduced flow in lean season',
                    '    - Sediment trapping affects downstream',
                    '  • India\'s response: Upper Siang Project planned',
                    '',
                    '🤝 TEESTA DISPUTE (India-Bangladesh):',
                    '  • Teesta joins Brahmaputra in Bangladesh',
                    '  • Bangladesh wants more water',
                    '  • West Bengal opposes (Mamata)',
                    '  • Stuck since 2011'
                ]
            }
        ],

        diagrams: [
            {
                title: 'Brahmaputra Course & Names',
                type: 'map',
                description: 'Map showing entire course: Origin in Tibet (Tsangpo), U-turn near Namcha Barwa, through Arunachal (Siang), Assam (Brahmaputra), Bangladesh (Jamuna), joining Ganga. Mark name changes at boundaries.'
            },
            {
                title: 'Brahmaputra Tributaries',
                type: 'diagram',
                description: 'Schematic showing left bank tributaries (Dibang, Lohit, Subansiri, Kameng) and right bank tributaries (Manas, Teesta, Dhansiri). Mark their origins.'
            },
            {
                title: 'Majuli Island',
                type: 'map',
                description: 'Detailed map of Majuli in Brahmaputra, showing its position, shrinking area over decades (1950 vs present), braided channels around it.'
            },
            {
                title: 'Yarlung Tsangpo Canyon',
                type: 'cross-section',
                description: 'Cross-section showing the deepest canyon (5500m), Namcha Barwa peak (7756m), river cutting through Himalayas. Compare with Grand Canyon depth.'
            },
            {
                title: 'China Dams on Brahmaputra',
                type: 'map',
                description: 'Map of Tibet showing Tsangpo, locations of Chinese dams (Zangmu, planned dams), flow direction, and potential impact on downstream India.'
            }
        ],

        quickFacts: [
            '🏔️ Origin: Tibet (Angsi Glacier, near Kailash-Mansarovar)',
            '🌏 Names: Tsangpo (Tibet) → Siang (Arunachal) → Brahmaputra (Assam) → Jamuna (BD)',
            '📏 Length: 2900 km total | 916 km in India | 4th largest discharge globally',
            '👨 Only MALE-named river in India ("Son of Brahma")',
            '🏝️ Majuli: World\'s largest river island (shrinking due to erosion)',
            '⛰️ Yarlung Tsangpo Canyon: World\'s deepest (5500 m)',
            '💧 Subansiri: Largest tributary of Brahmaputra',
            '🔄 Flows WESTWARD in Assam (unique among Indian rivers)',
            '🌊 Annual floods in Assam (July-September)',
            '🇨🇳 China building dams upstream (no treaty exists)',
            '⛰️ Antecedent river: Older than Himalayas',
            '🔀 Braided channel: Up to 10-15 km wide in Assam'
        ],

        upscTraps: [
            {
                trap: 'Brahmaputra is the largest river of India',
                clarity: 'DEPENDS ON METRIC! By LENGTH, Ganga is longer in India. By DISCHARGE/VOLUME, Brahmaputra carries more water. Brahmaputra has 4th largest discharge globally but is 9th longest.'
            },
            {
                trap: 'Brahmaputra originates in India',
                clarity: 'WRONG! Like Indus and Sutlej, Brahmaputra originates in TIBET (China), near Kailash-Mansarovar. It\'s called Tsangpo in Tibet and only becomes "Brahmaputra" after entering Assam.'
            },
            {
                trap: 'Grand Canyon is the deepest canyon in the world',
                clarity: 'WRONG! Yarlung Tsangpo Canyon near Namcha Barwa (where Brahmaputra takes U-turn) is the DEEPEST at 5500m. Grand Canyon is only 1800m deep. Tsangpo canyon is 3x deeper!'
            },
            {
                trap: 'India has water treaty with China for Brahmaputra',
                clarity: 'WRONG! NO water-sharing treaty exists between India and China for Brahmaputra. Only MoU for sharing hydrological data. This is a major concern as China builds dams upstream.'
            }
        ],

        revisionBox: {
            title: '⚡ 30-Second Revision',
            points: [
                'Origin: Tibet (Angsi Glacier) → Same region as Indus, Sutlej',
                'Names: Tsangpo → Siang → Brahmaputra → Jamuna (4 names)',
                'U-turn: Near Namcha Barwa → World\'s deepest canyon (5500m)',
                'Only male river in India | Flows westward in Assam (unique)',
                'Majuli: Largest river island | Braided channel: 10-15 km wide',
                'Largest tributary: Subansiri | Teesta dispute: India-Bangladesh',
                'China threat: Dams on Tsangpo, no water treaty with India'
            ]
        },

        pyqs: [
            {
                year: 2023,
                question: 'Discuss the strategic concerns related to Chinese dam-building activities on Brahmaputra.',
                type: 'Mains'
            },
            {
                year: 2022,
                question: 'Explain why Brahmaputra river is prone to flooding.',
                type: 'Mains'
            },
            {
                year: 2021,
                question: 'What is the significance of Majuli island?',
                type: 'Mains'
            },
            {
                year: 2020,
                question: 'The Brahmaputra is known by which name in Tibet?',
                type: 'Prelims',
                options: ['Siang', 'Yarlung Tsangpo', 'Jamuna', 'Dihang']
            },
            {
                year: 2019,
                question: 'Discuss the importance of Teesta river and India-Bangladesh dispute.',
                type: 'Mains'
            }
        ]
    },

    // ============================================
    // TOPIC 4: EAST FLOWING PENINSULAR RIVERS
    // ============================================
    {
        id: 'east-flowing-rivers',
        name: 'East Flowing Peninsular Rivers',
        icon: '➡️',
        category: 'india-drainage',
        theme: 'river',
        difficulty: 'medium',
        upscRelevance: 'high',

        mindMap: {
            central: 'East Flowing Rivers',
            branches: [
                {
                    name: 'Mahanadi',
                    color: '#2196F3',
                    children: [
                        'Origin: Chhattisgarh',
                        'Hirakud Dam (longest)',
                        'Delta: Chilika Lake',
                        'Odisha floods',
                        '858 km length'
                    ]
                },
                {
                    name: 'Godavari',
                    color: '#4CAF50',
                    children: [
                        'Origin: Nasik (Maharashtra)',
                        'Longest Peninsular river',
                        '"Dakshin Ganga"',
                        '1465 km length',
                        'Polavaram Dam'
                    ]
                },
                {
                    name: 'Krishna',
                    color: '#FF9800',
                    children: [
                        'Origin: Mahabaleshwar',
                        '1400 km length',
                        'Nagarjuna Sagar Dam',
                        'Tungabhadra tributary',
                        'Delta shared with Godavari'
                    ]
                },
                {
                    name: 'Kaveri',
                    color: '#9C27B0',
                    children: [
                        'Origin: Coorg (Karnataka)',
                        '765 km length',
                        'Shivasamudram Falls',
                        'Kaveri dispute',
                        'Highly utilized river'
                    ]
                }
            ]
        },

        memoryHooks: [
            {
                type: 'mnemonic',
                title: 'Major East Flowing Rivers (N to S)',
                content: 'MaGoKaPe = Mahanadi, Godavari, Krishna, Kaveri, Pennar. "Mango Kya Peena?" - rivers from north to south!',
                icon: '🧠'
            },
            {
                type: 'comparison',
                title: 'Length Comparison',
                content: 'Godavari > Krishna > Mahanadi > Kaveri. Remember: "God King Makes Caves" (God=Godavari longest)',
                icon: '📊'
            },
            {
                type: 'story',
                title: 'Why East Flowing?',
                content: 'Western Ghats are like a WALL on the west coast. Rivers born on EASTERN slopes have to flow EAST to reach Bay of Bengal. Only small rivers born on WESTERN slopes flow into Arabian Sea.',
                icon: '🏔️'
            },
            {
                type: 'visual',
                title: 'Delta Formation',
                content: 'East coast = DELTAS (Ganga, Godavari, Krishna, Kaveri) because gentle slope, long journey. West coast = ESTUARIES (Narmada, Tapi) because steep slope, short journey.',
                icon: '🌊'
            }
        ],

        conceptBlocks: [
            {
                title: 'Why Rivers Flow East?',
                icon: '🧭',
                points: [
                    '⛰️ PENINSULAR TILT:',
                    '  • Western Ghats: High edge (average 900-1600 m)',
                    '  • Eastern Ghats: Lower, discontinuous (500-600 m)',
                    '  • Peninsula tilts from WEST to EAST',
                    '  • Water flows down the slope → EASTWARD',
                    '',
                    '📊 WATER DIVIDE:',
                    '  • Western Ghats = MAIN WATER DIVIDE',
                    '  • Rivers born east of watershed → Bay of Bengal',
                    '  • Rivers born west of watershed → Arabian Sea',
                    '',
                    '📏 CONSEQUENCES:',
                    '  • Eastern rivers: LONGER journey, more tributaries',
                    '  • Eastern rivers: LARGER basins',
                    '  • Eastern rivers: Form DELTAS (gentler gradient)',
                    '  • Western rivers: SHORTER, form ESTUARIES',
                    '',
                    '🔢 EAST vs WEST DRAINAGE:',
                    '  • East flowing: 77% of peninsula',
                    '  • West flowing: 23% of peninsula',
                    '  • Major east: Mahanadi, Godavari, Krishna, Kaveri',
                    '  • Major west: Narmada, Tapi (rift valley rivers)'
                ]
            },
            {
                title: 'Mahanadi River',
                icon: '🌊',
                points: [
                    '📍 ORIGIN & COURSE:',
                    '  • Origin: Sihawa, Dhamtari (Chhattisgarh)',
                    '  • Length: 858 km',
                    '  • Basin: 1.41 lakh sq km',
                    '  • States: Chhattisgarh, Odisha',
                    '',
                    '💧 TRIBUTARIES:',
                    '  • Left: Seonath, Hasdeo, Mand',
                    '  • Right: Ong, Tel, Jonk',
                    '',
                    '🏗️ HIRAKUD DAM:',
                    '  • LONGEST DAM in India (25.8 km including dykes)',
                    '  • Location: Sambalpur, Odisha',
                    '  • Purpose: Flood control, irrigation, power',
                    '  • First major multipurpose project post-independence',
                    '  • Creates Hirakud Reservoir',
                    '',
                    '🌊 DELTA & MOUTH:',
                    '  • Forms delta near Cuttack',
                    '  • CHILIKA LAKE: Largest coastal lagoon in India',
                    '    - South of Mahanadi delta',
                    '    - Ramsar wetland site',
                    '    - Irrawaddy dolphins',
                    '',
                    '⚠️ ISSUES:',
                    '  • Devastating floods in Odisha',
                    '  • Water sharing: Chhattisgarh-Odisha dispute',
                    '  • Tribunal set up in 2018'
                ]
            },
            {
                title: 'Godavari River',
                icon: '🌊',
                points: [
                    '📍 ORIGIN & COURSE:',
                    '  • Origin: Trimbakeshwar, Nasik (Maharashtra)',
                    '  • Length: 1465 km (LONGEST Peninsular river)',
                    '  • Basin: 3.13 lakh sq km (LARGEST in Peninsula)',
                    '  • States: MH, Telangana, AP, Chhattisgarh, Odisha',
                    '  • Called "DAKSHIN GANGA" (Ganga of South)',
                    '',
                    '💧 TRIBUTARIES:',
                    '  • Left: Purna, Penganga, Wardha, Wainganga, Indravati, Sabari',
                    '  • Right: Pravara, Manjra, Maner',
                    '  • INDRAVATI: Largest tributary, Chitrakote Falls',
                    '',
                    '🏗️ MAJOR PROJECTS:',
                    '  • POLAVARAM DAM (AP):',
                    '    - Multipurpose, controversial',
                    '    - Submergence in Odisha, Chhattisgarh',
                    '    - National project status',
                    '  • Jayakwadi Dam (Maharashtra)',
                    '  • Srisailam (Krishna) nearby',
                    '',
                    '🌊 DELTA:',
                    '  • Large delta in East Godavari district',
                    '  • Fertile rice cultivation',
                    '  • Shares delta with Krishna (Konaseema region)',
                    '  • Coringa mangroves',
                    '',
                    '📍 IMPORTANT CITIES:',
                    '  • Nasik (origin)',
                    '  • Nanded',
                    '  • Rajahmundry (bridge)',
                    '  • Delta towns: Kakinada, Yanam'
                ]
            },
            {
                title: 'Krishna River',
                icon: '🌊',
                points: [
                    '📍 ORIGIN & COURSE:',
                    '  • Origin: Mahabaleshwar (Maharashtra)',
                    '  • At 1337 m altitude',
                    '  • Length: 1400 km (2nd longest Peninsular)',
                    '  • Basin: 2.58 lakh sq km',
                    '  • States: MH, Karnataka, Telangana, AP',
                    '',
                    '💧 TRIBUTARIES:',
                    '  • Left: Bhima (largest), Musi, Munneru',
                    '    - Bhima has tributaries: Sina, Nira, Man',
                    '  • Right: Koyna, Tungabhadra, Ghataprabha, Malaprabha',
                    '    - TUNGABHADRA: Largest right tributary',
                    '    - Formed by Tunga + Bhadra in Karnataka',
                    '    - Tungabhadra Dam at Hospet',
                    '',
                    '🏗️ MAJOR DAMS:',
                    '  • NAGARJUNA SAGAR (Telangana-AP):',
                    '    - One of largest in world',
                    '    - Irrigation + Power',
                    '  • SRISAILAM (AP): Power generation',
                    '  • ALMATTI (Karnataka): Irrigation',
                    '  • Koyna Dam (MH): Power',
                    '',
                    '⚠️ KRISHNA WATER DISPUTE:',
                    '  • MH, Karnataka, AP, Telangana dispute',
                    '  • Bachawat Tribunal (1976)',
                    '  • Brijesh Kumar Tribunal (2010)',
                    '  • Ongoing allocation issues',
                    '',
                    '🌊 DELTA:',
                    '  • Krishna-Godavari delta combined',
                    '  • Very fertile, rice bowl',
                    '  • Vijayawada, Machilipatnam'
                ]
            },
            {
                title: 'Kaveri River',
                icon: '🌊',
                points: [
                    '📍 ORIGIN & COURSE:',
                    '  • Origin: Talakaveri, Brahmagiri Hills (Coorg, Karnataka)',
                    '  • Length: 765 km',
                    '  • Basin: 81,155 sq km (smallest of 4 major)',
                    '  • States: Karnataka, Tamil Nadu, Kerala, Puducherry',
                    '  • Most intensively used river in India',
                    '',
                    '💧 TRIBUTARIES:',
                    '  • Left: Harangi, Hemavati, Shimsha, Arkavathi',
                    '  • Right: Lakshmanathirtha, Kabini, Suvarnavati, Bhavani, Noyyal, Amaravati',
                    '  • BHAVANI: Major right tributary in TN',
                    '',
                    '🏞️ SHIVASAMUDRAM FALLS:',
                    '  • Twin waterfalls on Kaveri',
                    '  • Asia\'s first hydroelectric station (1902)',
                    '  • Height: ~100 m',
                    '',
                    '🏗️ MAJOR DAMS:',
                    '  • KRS Dam (Krishna Raja Sagar): Karnataka',
                    '    - Brindavan Gardens',
                    '  • Mettur Dam: Tamil Nadu',
                    '    - Stanley Reservoir',
                    '  • Kabini Dam: Karnataka',
                    '',
                    '⚠️ KAVERI WATER DISPUTE:',
                    '  • Karnataka vs Tamil Nadu (century old)',
                    '  • Kaveri Water Tribunal (1990)',
                    '  • Supreme Court verdict (2018)',
                    '  • Karnataka: 284.75 TMC',
                    '  • Tamil Nadu: 404.25 TMC',
                    '  • Still contentious',
                    '',
                    '🌊 DELTA:',
                    '  • Thanjavur delta: "Rice bowl of TN"',
                    '  • Srirangam island (Kaveri bifurcates)',
                    '  • Grand Anicut (Kallanai): Ancient dam by Cholas'
                ]
            },
            {
                title: 'Other East Flowing Rivers',
                icon: '➡️',
                points: [
                    '📍 PENNAR (PENNAIR):',
                    '  • Origin: Nandi Hills, Karnataka',
                    '  • Length: 597 km',
                    '  • Flows through Andhra Pradesh',
                    '  • Intermittent flow (seasonal)',
                    '',
                    '📍 PALAR:',
                    '  • Origin: Karnataka',
                    '  • Length: 348 km',
                    '  • Flows through TN (Vellore, Kanchipuram)',
                    '  • Seasonal river',
                    '',
                    '📍 VAIGAI:',
                    '  • Origin: Varusanadu Hills, TN',
                    '  • Length: 258 km',
                    '  • Madurai on its banks',
                    '  • Vaigai Dam',
                    '',
                    '📍 SUBARNAREKHA:',
                    '  • Origin: Chotanagpur Plateau (Jharkhand)',
                    '  • Length: 395 km',
                    '  • States: Jharkhand, WB, Odisha',
                    '  • Hudco Falls (Hundru)',
                    '',
                    '📍 BRAHMANI:',
                    '  • Formed by South Koel + Sankh',
                    '  • Length: 480 km',
                    '  • Odisha\'s 2nd largest river',
                    '  • Industrial river (Rourkela Steel Plant)',
                    '',
                    '📍 BAITARANI:',
                    '  • Origin: Keonjhar, Odisha',
                    '  • Length: 360 km',
                    '  • Joins Brahmani delta'
                ]
            }
        ],

        diagrams: [
            {
                title: 'East Flowing Rivers Map',
                type: 'map',
                description: 'Peninsula map showing: Mahanadi, Godavari, Krishna, Kaveri, Pennar from north to south. Mark Western Ghats as water divide. Show tributaries and deltas.'
            },
            {
                title: 'Peninsular Tilt Diagram',
                type: 'cross-section',
                description: 'West-East cross-section of Peninsular India: Western Ghats (high, 900-1600m) on left, gradual slope eastward, Eastern Ghats (low, 500-600m) on right. Show river flow direction.'
            },
            {
                title: 'River Length Comparison',
                type: 'bar-chart',
                description: 'Horizontal bar chart: Godavari (1465 km), Krishna (1400 km), Mahanadi (858 km), Kaveri (765 km). Highlight Godavari as longest.'
            },
            {
                title: 'Major Dams on East Flowing Rivers',
                type: 'map',
                description: 'Mark major dams: Hirakud (Mahanadi), Polavaram (Godavari), Nagarjuna Sagar (Krishna), Srisailam (Krishna), KRS & Mettur (Kaveri).'
            },
            {
                title: 'Krishna-Godavari Delta',
                type: 'map',
                description: 'Detailed delta map showing combined Krishna-Godavari delta, distributaries, Konaseema region, major towns (Rajahmundry, Vijayawada, Kakinada).'
            }
        ],

        quickFacts: [
            '⛰️ Western Ghats = Main water divide | Peninsula tilts west to east',
            '📊 East flowing rivers: 77% of peninsular drainage',
            '🏆 Godavari: Longest (1465 km) & largest basin in Peninsula = "Dakshin Ganga"',
            '📏 Length order: Godavari > Krishna > Mahanadi > Kaveri',
            '🏗️ Hirakud: Longest dam in India (25.8 km) on Mahanadi',
            '💧 Kaveri: Most utilized river | Shivasamudram: Asia\'s first hydroelectric (1902)',
            '⚖️ Kaveri dispute: Karnataka vs Tamil Nadu (SC 2018 verdict)',
            '🌾 Tungabhadra: Largest tributary of Krishna | Indravati: Largest of Godavari',
            '🌊 All major east flowing rivers form DELTAS (vs estuaries for west)',
            '🌿 Chilika Lake: India\'s largest coastal lagoon (near Mahanadi delta)',
            '🏛️ Grand Anicut/Kallanai: Ancient Chola dam on Kaveri (2nd century)',
            '⚠️ Major disputes: Mahanadi (CG-OD), Krishna (MH-KA-TS-AP), Kaveri (KA-TN)'
        ],

        upscTraps: [
            {
                trap: 'Ganga is the longest river in Peninsular India',
                clarity: 'WRONG! Ganga is NOT a Peninsular river - it\'s a Himalayan river. GODAVARI is the longest PENINSULAR river (1465 km). Ganga is longer overall but flows through plains, not Peninsula.'
            },
            {
                trap: 'Western Ghats are higher than Eastern Ghats hence rivers flow west',
                clarity: 'OPPOSITE! Western Ghats ARE higher (900-1600m vs 500-600m), and that\'s exactly WHY rivers flow EAST. Rivers flow DOWN the slope. Peninsula tilts from high west to low east.'
            },
            {
                trap: 'All Peninsular rivers are seasonal',
                clarity: 'PARTIALLY TRUE! Peninsular rivers are primarily RAIN-FED, so discharge varies. But major ones (Godavari, Krishna, Kaveri) have dams that regulate flow, making them usable year-round. Smaller ones like Pennar, Palar are truly seasonal.'
            },
            {
                trap: 'Kaveri dispute is between Karnataka and Kerala',
                clarity: 'WRONG! Kaveri dispute is between KARNATAKA and TAMIL NADU. Kerala has minor share but isn\'t party to main dispute. TN demands more water; Karnataka resists.'
            }
        ],

        revisionBox: {
            title: '⚡ 30-Second Revision',
            points: [
                'Why east? Western Ghats = water divide, Peninsula tilts west to east',
                'Major rivers (N to S): Mahanadi → Godavari → Krishna → Kaveri',
                'Length: Godavari (1465) > Krishna (1400) > Mahanadi (858) > Kaveri (765)',
                'Godavari = "Dakshin Ganga", longest & largest basin in Peninsula',
                'Major dams: Hirakud (Mahanadi), Nagarjuna Sagar (Krishna), Mettur/KRS (Kaveri)',
                'Disputes: Mahanadi (CG-OD), Krishna (4 states), Kaveri (KA-TN)',
                'All form DELTAS | Chilika Lake near Mahanadi | Grand Anicut on Kaveri'
            ]
        },

        pyqs: [
            {
                year: 2023,
                question: 'Discuss the interstate water disputes in Peninsular India with reference to Kaveri and Krishna rivers.',
                type: 'Mains'
            },
            {
                year: 2022,
                question: 'Why do most Peninsular rivers flow eastward?',
                type: 'Mains'
            },
            {
                year: 2021,
                question: 'The longest dam in India is built on which river?',
                type: 'Prelims',
                options: ['Godavari', 'Mahanadi', 'Krishna', 'Kaveri']
            },
            {
                year: 2020,
                question: 'Compare and contrast Himalayan and Peninsular rivers.',
                type: 'Mains'
            },
            {
                year: 2019,
                question: 'Discuss the significance of Polavaram project.',
                type: 'Mains'
            }
        ]
    },

    // ============================================
    // TOPIC 5: WEST FLOWING PENINSULAR RIVERS
    // ============================================
    {
        id: 'west-flowing-rivers',
        name: 'West Flowing Peninsular Rivers',
        icon: '⬅️',
        category: 'india-drainage',
        theme: 'river',
        difficulty: 'medium',
        upscRelevance: 'high',

        mindMap: {
            central: 'West Flowing Rivers',
            branches: [
                {
                    name: 'Narmada',
                    color: '#2196F3',
                    children: [
                        'Origin: Amarkantak (MP)',
                        'Rift valley river',
                        '1312 km length',
                        'Sardar Sarovar Dam',
                        'Forms estuary (not delta)'
                    ]
                },
                {
                    name: 'Tapi (Tapti)',
                    color: '#4CAF50',
                    children: [
                        'Origin: Multai (MP)',
                        'Parallel to Narmada',
                        '724 km length',
                        'Ukai Dam',
                        'Surat on its banks'
                    ]
                },
                {
                    name: 'Coastal Rivers',
                    color: '#FF9800',
                    children: [
                        'Mahi (Gujarat)',
                        'Sabarmati (Gujarat)',
                        'Luni (Rajasthan)',
                        'Sharavati (Karnataka)',
                        'Mandovi, Zuari (Goa)'
                    ]
                },
                {
                    name: 'Unique Features',
                    color: '#9C27B0',
                    children: [
                        'Flow in rift valleys',
                        'No deltas (estuaries)',
                        'Shorter course',
                        'Only 23% of drainage',
                        'Steep gradients'
                    ]
                }
            ]
        },

        memoryHooks: [
            {
                type: 'story',
                title: 'Why Narmada Flows West',
                content: 'Legend: Narmada and Son (river) were to marry. Son fell for Narmada\'s maid (Jhiwa). Angry Narmada flowed WEST, opposite to Son who flows EAST. Mythology explains geography!',
                icon: '💔'
            },
            {
                type: 'mnemonic',
                title: 'Major West Flowing Rivers',
                content: 'NaTaMaSa = Narmada, Tapi, Mahi, Sabarmati. "Nata Masa" (dancer uncle) flows west!',
                icon: '🧠'
            },
            {
                type: 'comparison',
                title: 'Narmada vs Tapi',
                content: 'Both are RIFT VALLEY rivers. Narmada = between Vindhya & Satpura. Tapi = between Satpura & Ajanta/Mahadeo Hills. Parallel twins flowing west!',
                icon: '👯'
            },
            {
                type: 'visual',
                title: 'Estuary vs Delta',
                content: 'West coast rivers = ESTUARY (funnel-shaped, tidal). East coast rivers = DELTA (triangular, sediment). West is steep and short, no time to deposit sediments.',
                icon: '🌊'
            }
        ],

        conceptBlocks: [
            {
                title: 'Why Rivers Flow West?',
                icon: '🧭',
                points: [
                    '⛰️ RIFT VALLEY ORIGIN:',
                    '  • Narmada & Tapi flow through RIFT VALLEYS',
                    '  • Rift = Crack in Earth\'s crust',
                    '  • Formed during breakup of Gondwanaland',
                    '  • Rivers follow these pre-existing faults',
                    '',
                    '📊 STRUCTURAL CONTROL:',
                    '  • Narmada Rift: Between Vindhya & Satpura',
                    '  • Tapi Rift: Between Satpura & Ajanta Hills',
                    '  • Rivers don\'t follow slope, follow faults',
                    '  • Hence flow in "wrong" direction (west)',
                    '',
                    '⚡ OTHER WEST FLOWING RIVERS:',
                    '  • Coastal rivers west of Western Ghats',
                    '  • Born on western slopes of Western Ghats',
                    '  • Short, steep course to Arabian Sea',
                    '  • Examples: Sharavati, Mandovi, Zuari',
                    '',
                    '📏 DRAINAGE SHARE:',
                    '  • West flowing: Only 23% of peninsular area',
                    '  • Smaller basins, shorter rivers',
                    '  • But important for western India water'
                ]
            },
            {
                title: 'Narmada River',
                icon: '🌊',
                points: [
                    '📍 ORIGIN & COURSE:',
                    '  • Origin: Amarkantak Plateau (MP)',
                    '    - Same place as Son (flows east!)',
                    '  • Length: 1312 km (5th longest in India)',
                    '  • Basin: 98,796 sq km',
                    '  • States: MP, Maharashtra, Gujarat',
                    '',
                    '⛰️ RIFT VALLEY COURSE:',
                    '  • Flows between VINDHYA (north) and SATPURA (south)',
                    '  • Linear, straight course (fault-controlled)',
                    '  • Marble Rocks at Jabalpur (gorge)',
                    '  • Dhuandhar Falls (waterfall at Marble Rocks)',
                    '',
                    '🏗️ SARDAR SAROVAR DAM:',
                    '  • India\'s largest dam by volume',
                    '  • Location: Gujarat (Narmada district)',
                    '  • Height: 163 m',
                    '  • Purpose: Irrigation, Power, Drinking water',
                    '  • Controversy: Narmada Bachao Andolan (NBA)',
                    '    - Medha Patkar led protests',
                    '    - Submergence of villages',
                    '  • Statue of Unity nearby (Sardar Patel)',
                    '',
                    '🏗️ OTHER DAMS:',
                    '  • Indira Sagar Dam (MP) - Largest reservoir',
                    '  • Omkareshwar Dam (MP)',
                    '  • Maheshwar Dam (MP)',
                    '',
                    '🌊 MOUTH:',
                    '  • Forms ESTUARY (not delta) at Gulf of Khambhat',
                    '  • Near Bharuch, Gujarat',
                    '  • Tidal influence, no sediment deposition',
                    '',
                    '🙏 RELIGIOUS SIGNIFICANCE:',
                    '  • One of 7 holy rivers of India',
                    '  • Narmada Parikrama (circumambulation)',
                    '  • Omkareshwar Jyotirlinga on its banks'
                ]
            },
            {
                title: 'Tapi (Tapti) River',
                icon: '🌊',
                points: [
                    '📍 ORIGIN & COURSE:',
                    '  • Origin: Multai (Betul district, MP)',
                    '  • Length: 724 km',
                    '  • Basin: 65,145 sq km',
                    '  • States: MP, Maharashtra, Gujarat',
                    '  • Parallel to Narmada (south of it)',
                    '',
                    '⛰️ RIFT VALLEY:',
                    '  • Flows between SATPURA (north) and AJANTA HILLS (south)',
                    '  • Fault-controlled, linear course',
                    '  • Similar to Narmada but shorter',
                    '',
                    '💧 TRIBUTARIES:',
                    '  • Left: Purna, Girna, Panzara',
                    '  • Right: Bori, Aner',
                    '  • Less tributaries than Narmada',
                    '',
                    '🏗️ UKAI DAM:',
                    '  • Location: Gujarat',
                    '  • Also called Vallabh Sagar',
                    '  • Multipurpose project',
                    '  • Irrigation for South Gujarat',
                    '',
                    '📍 IMPORTANT CITIES:',
                    '  • Surat: Major city at mouth',
                    '  • Burhanpur: Historical city (MH)',
                    '',
                    '🌊 MOUTH:',
                    '  • Forms ESTUARY at Gulf of Khambhat',
                    '  • Near Surat',
                    '  • Similar to Narmada (tidal, no delta)'
                ]
            },
            {
                title: 'Other West Flowing Rivers',
                icon: '➡️',
                points: [
                    '📍 MAHI RIVER:',
                    '  • Origin: Vindhya Range (MP)',
                    '  • Length: 580 km',
                    '  • States: MP, Rajasthan, Gujarat',
                    '  • Kadana Dam (Gujarat)',
                    '  • Only river crossing Tropic of Cancer twice!',
                    '  • Mouth: Gulf of Khambhat',
                    '',
                    '📍 SABARMATI RIVER:',
                    '  • Origin: Aravalli Range (Rajasthan)',
                    '  • Length: 371 km',
                    '  • Ahmedabad on its banks',
                    '  • Sabarmati Ashram (Gandhi)',
                    '  • Sabarmati Riverfront Development',
                    '  • Mostly dry (seasonal)',
                    '',
                    '📍 LUNI RIVER:',
                    '  • Origin: Aravalli Range (near Ajmer)',
                    '  • Length: 495 km',
                    '  • ONLY RIVER OF THAR DESERT (external drainage)',
                    '  • Ends in Rann of Kutch (saline marshes)',
                    '  • Does NOT reach sea (inland drainage partially)',
                    '  • Water becomes saline downstream',
                    '',
                    '📍 SHARAVATI RIVER (Karnataka):',
                    '  • Origin: Shimoga district',
                    '  • JOG FALLS: India\'s highest plunge waterfall (253 m)',
                    '  • Linganamakki Dam',
                    '  • Flows into Arabian Sea',
                    '',
                    '📍 GOA RIVERS:',
                    '  • MANDOVI (Mahadayi): Panaji on banks',
                    '  • ZUARI: Largest river of Goa',
                    '  • Both form common estuary',
                    '  • Mandovi dispute: Goa-Karnataka-Maharashtra',
                    '',
                    '📍 PERIYAR RIVER (Kerala):',
                    '  • Longest river of Kerala (244 km)',
                    '  • Origin: Sivagiri Hills',
                    '  • Idukki Dam: Arch dam',
                    '  • Periyar Tiger Reserve'
                ]
            },
            {
                title: 'Characteristics & Significance',
                icon: '⭐',
                points: [
                    '📊 ESTUARY FORMATION:',
                    '  • West flowing rivers form ESTUARIES',
                    '  • NOT deltas like east flowing rivers',
                    '  • Reasons:',
                    '    - Shorter course, less sediment',
                    '    - Steep gradient to sea',
                    '    - Tidal influence (clears sediments)',
                    '    - Hard rock bed (less erosion)',
                    '',
                    '⚡ HYDROPOWER POTENTIAL:',
                    '  • Steep gradients = High hydropower potential',
                    '  • Western Ghats rivers ideal:',
                    '    - Jog Falls (Sharavati): 253 m drop',
                    '    - Dhuandhar (Narmada): At Marble Rocks',
                    '  • Idukki Dam: One of India\'s highest arch dams',
                    '',
                    '💧 WATER SCARCITY CONTEXT:',
                    '  • Western India more water-scarce',
                    '  • West flowing rivers crucial:',
                    '    - Sardar Sarovar supplies Gujarat, Rajasthan',
                    '    - Narmada canal reaches Kutch',
                    '    - Interstate water sharing complex',
                    '',
                    '🔬 GEOLOGICAL SIGNIFICANCE:',
                    '  • Rift valleys indicate ancient tectonic activity',
                    '  • Gondwanaland breakup evidence',
                    '  • Study of continental drift',
                    '',
                    '📏 COMPARISON WITH EAST:',
                    '  Feature         | West          | East',
                    '  ------------------------------------------------',
                    '  Length          | Shorter       | Longer',
                    '  Basin           | Smaller       | Larger',
                    '  Gradient        | Steeper       | Gentler',
                    '  Mouth           | Estuary       | Delta',
                    '  Drainage %      | 23%           | 77%'
                ]
            }
        ],

        diagrams: [
            {
                title: 'West Flowing Rivers Map',
                type: 'map',
                description: 'Western India map showing: Narmada, Tapi (parallel), Mahi, Sabarmati, Luni. Mark rift valleys between mountain ranges. Show estuaries at Gulf of Khambhat.'
            },
            {
                title: 'Narmada Rift Valley Cross-Section',
                type: 'cross-section',
                description: 'North-South cross-section: Vindhya Range (north), Narmada River in rift valley, Satpura Range (south). Show fault lines. Compare with Tapi rift below Satpura.'
            },
            {
                title: 'Estuary vs Delta',
                type: 'comparison-diagram',
                description: 'Side-by-side diagrams: Estuary (funnel shape, tidal influence, Narmada example) vs Delta (triangular, sediment deposition, Godavari example).'
            },
            {
                title: 'Major Dams on West Flowing Rivers',
                type: 'map',
                description: 'Map marking: Sardar Sarovar, Indira Sagar (Narmada); Ukai (Tapi); Kadana (Mahi); Idukki (Periyar); Linganamakki (Sharavati).'
            },
            {
                title: 'Jog Falls Diagram',
                type: 'diagram',
                description: 'Cross-section of Jog Falls: Sharavati river, 253 m plunge, four segments (Raja, Rani, Rover, Rocket). Mark as India\'s highest plunge waterfall.'
            }
        ],

        quickFacts: [
            '📊 West flowing rivers: Only 23% of peninsular drainage',
            '⛰️ Narmada & Tapi: Flow in RIFT VALLEYS (fault-controlled)',
            '📏 Narmada: 1312 km (5th longest in India), largest west flowing',
            '🏗️ Sardar Sarovar: India\'s largest dam by volume (Narmada)',
            '💧 All west flowing rivers form ESTUARIES (not deltas)',
            '🌊 Luni: Only river of Thar Desert, ends in Rann of Kutch',
            '💦 Jog Falls: India\'s highest plunge waterfall (253 m) on Sharavati',
            '📍 Mahi: Only river crossing Tropic of Cancer TWICE',
            '🏛️ Sabarmati: Gandhi\'s Ashram, Ahmedabad riverfront',
            '🌿 Periyar: Longest river of Kerala (244 km)',
            '⚖️ Mandovi (Mahadayi) dispute: Goa vs Karnataka vs Maharashtra',
            '📍 Amarkantak: Source of BOTH Narmada (west) & Son (east)'
        ],

        upscTraps: [
            {
                trap: 'Narmada and Tapi flow west because of slope',
                clarity: 'WRONG! They flow west due to RIFT VALLEY structure, not slope. Peninsula tilts east, but these rivers follow ancient FAULT LINES. Rift valleys were formed during Gondwanaland breakup.'
            },
            {
                trap: 'Narmada forms a delta at its mouth',
                clarity: 'WRONG! Narmada forms an ESTUARY, not delta. All west flowing rivers form estuaries due to: (1) Steep gradient, (2) Short course, (3) Less sediment, (4) Tidal action clears sediments.'
            },
            {
                trap: 'Luni river drains into Arabian Sea',
                clarity: 'WRONG! Luni ends in RANN OF KUTCH (saline marshes), not Arabian Sea. It\'s an example of INLAND DRAINAGE. Water evaporates or seeps; doesn\'t reach ocean.'
            },
            {
                trap: 'Son river flows west like Narmada since both originate at Amarkantak',
                clarity: 'WRONG! Son flows EAST despite originating at same place (Amarkantak) as Narmada. Son flows to Ganga, Narmada to Arabian Sea. Same origin, OPPOSITE directions due to different geological paths.'
            }
        ],

        revisionBox: {
            title: '⚡ 30-Second Revision',
            points: [
                'Why west? Narmada & Tapi flow in RIFT VALLEYS (fault-controlled), not slope',
                'Narmada: Vindhya-Satpura rift | Tapi: Satpura-Ajanta rift',
                'Narmada (1312 km) > Tapi (724 km) > Mahi (580 km) > Luni (495 km)',
                'All form ESTUARIES (not deltas) - steep, short, tidal action',
                'Dams: Sardar Sarovar (Narmada), Ukai (Tapi), Idukki (Periyar)',
                'Luni: Only Thar desert river, ends in Rann of Kutch (inland drainage)',
                'Jog Falls (253 m): India\'s highest plunge waterfall on Sharavati'
            ]
        },

        pyqs: [
            {
                year: 2023,
                question: 'Why do Narmada and Tapi flow westward unlike other Peninsular rivers?',
                type: 'Mains'
            },
            {
                year: 2022,
                question: 'Explain why west flowing rivers form estuaries while east flowing rivers form deltas.',
                type: 'Mains'
            },
            {
                year: 2021,
                question: 'Narmada and Son rivers originate from same place but flow in opposite directions. Explain.',
                type: 'Mains'
            },
            {
                year: 2020,
                question: 'The only river in Thar Desert that has external drainage is:',
                type: 'Prelims',
                options: ['Sabarmati', 'Mahi', 'Luni', 'Banas']
            },
            {
                year: 2019,
                question: 'Discuss the Narmada Bachao Andolan and its implications.',
                type: 'Mains'
            }
        ]
    },

    // ============================================
    // TOPIC 6: RIVER LINKING PROJECTS
    // ============================================
    {
        id: 'river-linking-projects',
        name: 'River Linking Projects',
        icon: '🔗',
        category: 'india-drainage',
        theme: 'river',
        difficulty: 'hard',
        upscRelevance: 'very-high',

        mindMap: {
            central: 'River Linking',
            branches: [
                {
                    name: 'National Perspective Plan',
                    color: '#2196F3',
                    children: [
                        '1980 proposal',
                        'Himalayan Component (14)',
                        'Peninsular Component (16)',
                        'Total 30 links',
                        '15,000 km canals'
                    ]
                },
                {
                    name: 'Arguments For',
                    color: '#4CAF50',
                    children: [
                        'Flood control',
                        'Drought mitigation',
                        'Irrigation expansion',
                        'Hydropower generation',
                        'Navigation development'
                    ]
                },
                {
                    name: 'Arguments Against',
                    color: '#E91E63',
                    children: [
                        'Huge cost (₹5.6 lakh cr)',
                        'Ecological damage',
                        'Displacement (millions)',
                        'Interstate disputes',
                        'Unproven concept'
                    ]
                },
                {
                    name: 'Progress & Projects',
                    color: '#FF9800',
                    children: [
                        'Ken-Betwa (1st approved)',
                        'Damanganga-Pinjal',
                        'Par-Tapi-Narmada',
                        'Godavari-Krishna',
                        'Mahanadi-Godavari'
                    ]
                }
            ]
        },

        memoryHooks: [
            {
                type: 'acronym',
                title: 'ILR Benefits',
                content: 'FINDING = Flood control, Irrigation, Navigation, Drinking water, Income (power), Natural drought relief, Growth. The goal of ILR is "FINDING" water solutions!',
                icon: '🔤'
            },
            {
                type: 'mnemonic',
                title: 'Two Components',
                content: 'HP = Himalayan (14 links) + Peninsular (16 links) = 30 total. Like a "HP" laptop connecting rivers!',
                icon: '🧠'
            },
            {
                type: 'story',
                title: 'Ken-Betwa Story',
                content: 'Ken was water-rich (MP-UP border), Betwa was thirsty (UP). So Ken offered to share water through a link. First inter-state river link approved in 2021!',
                icon: '🤝'
            },
            {
                type: 'comparison',
                title: 'Surplus vs Deficit',
                content: 'SURPLUS: Ganga, Brahmaputra, Mahanadi, Godavari (East). DEFICIT: Kaveri, Krishna, Pennar, Sabarmati (South/West). ILR = Transfer from surplus to deficit.',
                icon: '⚖️'
            }
        ],

        conceptBlocks: [
            {
                title: 'Background & Concept',
                icon: '📜',
                points: [
                    '📖 WHAT IS RIVER LINKING?',
                    '  • Inter-basin water transfer',
                    '  • Connect "surplus" basins with "deficit" basins',
                    '  • Through canals, dams, reservoirs',
                    '  • Redistribute water spatially',
                    '',
                    '📅 HISTORY:',
                    '  • 1858: Arthur Cotton first proposed (British era)',
                    '  • 1972: Dr. K.L. Rao proposed "Ganga-Kaveri Link"',
                    '  • 1977: Dastur proposed "Garland Canal"',
                    '  • 1980: National Perspective Plan (NPP)',
                    '  • 2002: Supreme Court directive for implementation',
                    '  • 2012: NWDA (National Water Development Agency) plans',
                    '',
                    '📊 NATIONAL PERSPECTIVE PLAN:',
                    '  • Prepared by Ministry of Water Resources',
                    '  • Two components:',
                    '    1. Himalayan Rivers Development (14 links)',
                    '    2. Peninsular Rivers Development (16 links)',
                    '  • Total: 30 river links',
                    '  • Estimated canals: 15,000 km',
                    '  • Estimated cost: ₹5.6 lakh crore (2002 prices)',
                    '  • Current estimate: ₹10+ lakh crore'
                ]
            },
            {
                title: 'Himalayan Component',
                icon: '🏔️',
                points: [
                    '📊 OVERVIEW:',
                    '  • 14 river links proposed',
                    '  • Transfer water from Ganga-Brahmaputra to western/southern regions',
                    '  • Involves: India, Nepal, Bhutan, Bangladesh',
                    '  • International treaties needed',
                    '',
                    '🔗 MAJOR LINKS:',
                    '  • KOSI-MECHI LINK',
                    '  • KOSI-GHAGRA LINK',
                    '  • GANDAK-GANGA LINK',
                    '  • GHAGRA-YAMUNA LINK',
                    '  • GANGA-DAMODAR-SUBARNAREKHA LINK',
                    '  • SUBARNAREKHA-MAHANADI LINK',
                    '  • BRAHMAPUTRA-GANGA (MANAS-SANKOSH-TEESTA-GANGA):',
                    '    - Most ambitious',
                    '    - Transfer Brahmaputra surplus to Ganga',
                    '    - 345 km canal',
                    '    - Needs Bhutan, Bangladesh cooperation',
                    '',
                    '🎯 OBJECTIVES:',
                    '  • Control devastating floods in Bihar, Bengal, Assam',
                    '  • Irrigate North India (drought-prone areas)',
                    '  • Hydropower from Himalayan rivers',
                    '',
                    '⚠️ CHALLENGES:',
                    '  • International cooperation (Nepal, Bhutan, BD)',
                    '  • Seismic zone issues',
                    '  • Massive displacement',
                    '  • Brahmaputra already dammed by China'
                ]
            },
            {
                title: 'Peninsular Component',
                icon: '🌍',
                points: [
                    '📊 OVERVIEW:',
                    '  • 16 river links proposed',
                    '  • Easier than Himalayan (within India)',
                    '  • Interstate issues though',
                    '',
                    '🔗 MAJOR LINKS:',
                    '',
                    '📍 MAHANADI-GODAVARI-KRISHNA-PENNAR-KAVERI:',
                    '  • Transfer surplus from north to south',
                    '  • Mahanadi, Godavari (surplus) → Krishna, Kaveri (deficit)',
                    '  • Most comprehensive peninsular plan',
                    '',
                    '📍 KEN-BETWA LINK:',
                    '  • FIRST PROJECT APPROVED (2021)',
                    '  • Ken (surplus, MP) → Betwa (deficit, UP)',
                    '  • Cost: ₹35,000+ crore',
                    '  • Irrigation: 10 lakh hectares',
                    '  • Power: 103 MW',
                    '  • Controversy: Submerges part of Panna Tiger Reserve',
                    '',
                    '📍 PAR-TAPI-NARMADA LINK:',
                    '  • Gujarat project',
                    '  • Transfer from surplus to deficit in Gujarat',
                    '  • 395 km canal',
                    '',
                    '📍 DAMANGANGA-PINJAL LINK:',
                    '  • Mumbai water supply',
                    '  • Gujarat to Maharashtra',
                    '',
                    '📍 GODAVARI (INCHAMPALLI)-KRISHNA (NAGARJUNSAGAR):',
                    '  • AP, Telangana',
                    '  • Godavari surplus to Krishna deficit'
                ]
            },
            {
                title: 'Arguments For River Linking',
                icon: '✅',
                points: [
                    '🌊 FLOOD CONTROL:',
                    '  • Eastern rivers flood annually (Ganga, Brahmaputra, Mahanadi)',
                    '  • Transfer excess water during floods',
                    '  • Reduce devastation in Bihar, Assam, Odisha',
                    '',
                    '☀️ DROUGHT MITIGATION:',
                    '  • Western, Southern India face water scarcity',
                    '  • Transfer water to drought-prone areas',
                    '  • Rajasthan, Gujarat, Tamil Nadu benefit',
                    '',
                    '🌾 IRRIGATION EXPANSION:',
                    '  • Create 35 million hectares additional irrigation',
                    '  • Double cropping possible',
                    '  • Food security improved',
                    '',
                    '⚡ HYDROPOWER:',
                    '  • Generate 34,000 MW additional power',
                    '  • Clean energy source',
                    '  • Revenue generation',
                    '',
                    '🚢 NAVIGATION:',
                    '  • Inland waterways development',
                    '  • Cheaper goods transport',
                    '  • Reduce road/rail burden',
                    '',
                    '💧 DRINKING WATER:',
                    '  • Urban water supply',
                    '  • Industrial use',
                    '  • Groundwater recharge'
                ]
            },
            {
                title: 'Arguments Against River Linking',
                icon: '❌',
                points: [
                    '💰 MASSIVE COST:',
                    '  • ₹5.6 lakh crore (2002 estimate)',
                    '  • Current: ₹10-15 lakh crore',
                    '  • Opportunity cost: Same money for micro-irrigation, rainwater harvesting',
                    '',
                    '🌿 ECOLOGICAL DAMAGE:',
                    '  • Large areas submerged (forests, wetlands)',
                    '  • Ken-Betwa: Panna Tiger Reserve affected',
                    '  • Riverine ecosystems disrupted',
                    '  • Fish migration blocked',
                    '  • Downstream flow reduced (deltas, estuaries)',
                    '',
                    '👥 DISPLACEMENT:',
                    '  • Millions will be displaced',
                    '  • Rehabilitation challenges',
                    '  • Social conflicts',
                    '',
                    '⚖️ INTERSTATE DISPUTES:',
                    '  • "Surplus" state may not agree',
                    '  • Water is state subject (Entry 17, State List)',
                    '  • Existing disputes (Kaveri, Krishna) unresolved',
                    '',
                    '🔬 TECHNICAL CONCERNS:',
                    '  • "Surplus" water is seasonal (only monsoon)',
                    '  • Storage needed (more dams = more issues)',
                    '  • Evaporation losses in canals (30-40%)',
                    '  • Seismic risks (Himalayan component)',
                    '',
                    '🌍 ALTERNATIVES IGNORED:',
                    '  • Watershed management',
                    '  • Rainwater harvesting',
                    '  • Demand management',
                    '  • Drip irrigation, efficient use',
                    '  • Groundwater recharge'
                ]
            },
            {
                title: 'Current Status & Progress',
                icon: '📊',
                points: [
                    '✅ APPROVED/PROGRESS:',
                    '',
                    '📍 KEN-BETWA LINK (First!):',
                    '  • Union Cabinet approved: March 2021',
                    '  • MoU: MP + UP in 2005, 2020',
                    '  • Cost: ₹44,605 crore',
                    '  • Irrigation: 10.62 lakh hectares',
                    '  • Drinking water: 62 lakh people',
                    '  • Power: 103 MW',
                    '  • Components: Daudhan Dam, Makodia Dam, canal',
                    '  • Timeline: 8 years',
                    '  • Issue: 6,000 hectares of Panna TR submerged',
                    '',
                    '📋 DPR READY:',
                    '  • Damanganga-Pinjal-Par-Tapi-Narmada (Gujarat)',
                    '  • Mahanadi-Godavari (Odisha-AP)',
                    '  • Godavari-Krishna (Telangana-AP)',
                    '',
                    '🔍 UNDER STUDY:',
                    '  • Most Himalayan links (complex)',
                    '  • Brahmaputra links (international)',
                    '',
                    '🏛️ INSTITUTIONAL FRAMEWORK:',
                    '  • NWDA: Prepares DPRs, feasibility',
                    '  • Ministry of Jal Shakti: Overall coordination',
                    '  • Special Committee on ILR (2014)',
                    '  • Supreme Court monitoring'
                ]
            }
        ],

        diagrams: [
            {
                title: 'National Perspective Plan - All 30 Links',
                type: 'map',
                description: 'India map showing all 30 proposed links: 14 Himalayan (blue) and 16 Peninsular (green). Mark major rivers, proposed canals, transfer directions.'
            },
            {
                title: 'Ken-Betwa Link Project',
                type: 'map',
                description: 'Detailed map: Ken river (MP), Betwa river (UP), Daudhan Dam location, canal route, command area. Mark Panna Tiger Reserve impact zone.'
            },
            {
                title: 'Surplus vs Deficit Basins',
                type: 'map',
                description: 'Color-coded map: Surplus basins (green) - Brahmaputra, Ganga, Mahanadi, Godavari. Deficit basins (red) - Sabarmati, Mahi, Pennar, Kaveri, Vaigai. Show proposed transfers.'
            },
            {
                title: 'Himalayan Component Links',
                type: 'map',
                description: 'North India map showing 14 Himalayan links: Brahmaputra-Ganga, Kosi-Ghagra, Gandak-Ganga, etc. Mark international boundaries with Nepal, Bhutan, Bangladesh.'
            },
            {
                title: 'Mahanadi-Godavari-Krishna-Kaveri Link',
                type: 'flowchart',
                description: 'Schematic showing north-south water transfer: Mahanadi → Godavari → Krishna → Pennar → Kaveri. Mark proposed dams and canals at each stage.'
            },
            {
                title: 'For vs Against - Comparison Chart',
                type: 'comparison-chart',
                description: 'Two columns comparing: Arguments FOR (flood control, irrigation, power, drought relief) vs AGAINST (cost, ecology, displacement, disputes, alternatives).'
            }
        ],

        quickFacts: [
            '📊 National Perspective Plan: 30 links (14 Himalayan + 16 Peninsular)',
            '💰 Estimated cost: ₹5.6 lakh crore (2002) → ₹10-15 lakh crore now',
            '🚰 Expected benefits: 35 M ha irrigation + 34,000 MW power',
            '✅ Ken-Betwa: FIRST approved link (2021), ₹44,605 crore',
            '🐅 Ken-Betwa controversy: 6000 ha of Panna Tiger Reserve submerged',
            '🔗 15,000 km of canals proposed in total plan',
            '📅 History: 1858 Arthur Cotton → 1972 K.L. Rao → 1980 NPP',
            '⚖️ Challenge: Water is State subject (Entry 17, State List)',
            '🌊 Surplus basins: Brahmaputra, Ganga, Mahanadi, Godavari',
            '☀️ Deficit basins: Sabarmati, Mahi, Pennar, Kaveri, Vaigai',
            '🏛️ NWDA: National Water Development Agency (prepares DPRs)',
            '⚠️ Himalayan links need: Nepal, Bhutan, Bangladesh cooperation'
        ],

        upscTraps: [
            {
                trap: 'River linking will solve all water problems of India',
                clarity: 'OVERSIMPLIFIED! Critics argue: (1) "Surplus" water exists only in monsoon, (2) Evaporation losses in canals 30-40%, (3) Better alternatives like watershed management, rainwater harvesting exist, (4) Huge ecological and social costs.'
            },
            {
                trap: 'All 30 river links are approved and under construction',
                clarity: 'WRONG! Only KEN-BETWA is approved (2021). Others are at DPR or study stage. Himalayan links especially complex due to international cooperation needed. Most links face interstate disputes.'
            },
            {
                trap: 'River linking is a new concept',
                clarity: 'FALSE! British engineer Arthur Cotton proposed it in 1858. Dr. K.L. Rao proposed Ganga-Kaveri link in 1972. Dastur proposed Garland Canal in 1977. It\'s a 150+ year old idea!'
            },
            {
                trap: 'Central government can implement river linking unilaterally',
                clarity: 'CONSTITUTIONALLY COMPLEX! Water is STATE SUBJECT (Entry 17, State List). Interstate rivers under Union List, but state consent needed. Existing disputes (Kaveri, Krishna) show difficulty of interstate water sharing.'
            }
        ],

        revisionBox: {
            title: '⚡ 30-Second Revision',
            points: [
                'Concept: Transfer water from "surplus" (Brahmaputra, Ganga) to "deficit" (Kaveri) basins',
                'Plan: 30 links (14 Himalayan + 16 Peninsular), 15,000 km canals, ₹10+ lakh crore',
                'For: Flood control, Irrigation (35 M ha), Power (34,000 MW), Drought relief',
                'Against: Cost, Ecology (Panna TR), Displacement, Interstate disputes, Alternatives exist',
                'Ken-Betwa: FIRST approved (2021), MP to UP, ₹44,605 crore, 10.6 lakh ha irrigation',
                'Challenge: Water = State subject, International links need Nepal/BD cooperation',
                'Agency: NWDA (National Water Development Agency) prepares DPRs'
            ]
        },

        pyqs: [
            {
                year: 2023,
                question: 'Critically examine the inter-linking of rivers programme in India with reference to Ken-Betwa link.',
                type: 'Mains'
            },
            {
                year: 2022,
                question: 'What are the ecological concerns associated with river linking projects?',
                type: 'Mains'
            },
            {
                year: 2021,
                question: 'Discuss the constitutional and practical challenges in implementation of river linking projects.',
                type: 'Mains'
            },
            {
                year: 2020,
                question: 'The Ken-Betwa river link project is controversial because:',
                type: 'Prelims',
                options: ['High cost', 'Submergence of Panna Tiger Reserve', 'Both A and B', 'Neither A nor B']
            },
            {
                year: 2019,
                question: 'Explain the National Perspective Plan for river linking and its components.',
                type: 'Mains'
            },
            {
                year: 2018,
                question: 'What are the alternatives to river linking for addressing water scarcity?',
                type: 'Mains'
            }
        ]
    }

];

// ============================================
// FINAL EXPORT - COMPLETE INDIA DRAINAGE DATA
// ============================================

// Make data available globally
window.indiaDrainageData = indiaDrainageData;

console.log('💧✅ India Drainage Data COMPLETE:', indiaDrainageData.length, 'topics');
console.log('📚 Topics loaded:', indiaDrainageData.map(t => t.name).join(', '));
