/* ============================================
   UPSC GEOGRAPHY LEARNING SYSTEM
   India Resources Data File - COMPREHENSIVE
   Topics: Forests, Biodiversity, Minerals, Energy,
           Irrigation, Cropping Patterns, Agri Revolutions, Major Crops
   ============================================ */

const indiaResourcesData = [

    // ============================================
    // TOPIC 1: FOREST TYPES OF INDIA
    // ============================================
    {
        id: 'forest-types-india',
        name: 'Forest Types of India',
        icon: '🌲',
        category: 'india-resources',
        theme: 'forest',
        difficulty: 'medium',
        upscRelevance: 'very-high',

        mindMap: {
            central: 'Indian Forests',
            branches: [
                {
                    name: 'Tropical Forests',
                    color: '#27AE60',
                    children: [
                        'Tropical Evergreen',
                        'Tropical Deciduous (Monsoon)',
                        'Tropical Thorn',
                        'Tropical Dry Evergreen',
                        'Littoral & Swamp'
                    ]
                },
                {
                    name: 'Montane Forests',
                    color: '#3498DB',
                    children: [
                        'Montane Wet Temperate',
                        'Himalayan Moist Temperate',
                        'Himalayan Dry Temperate',
                        'Sub-Alpine',
                        'Alpine'
                    ]
                },
                {
                    name: 'Forest Cover',
                    color: '#E67E22',
                    children: [
                        'Total: 21.71% (2021)',
                        'Target: 33%',
                        'MP highest (area)',
                        'Mizoram highest (%)',
                        'ISFR 2021 data'
                    ]
                },
                {
                    name: 'Champion & Seth',
                    color: '#9B59B6',
                    children: [
                        '16 major types',
                        '221 minor types',
                        '1936 classification',
                        'Revised 1968',
                        'Standard reference'
                    ]
                }
            ]
        },

        memoryHooks: [
            {
                type: 'mnemonic',
                title: 'Tropical Forest Types',
                content: 'EDTS-L = Evergreen, Deciduous, Thorn, Swamp, Littoral. "Every Day Trees Seem Lovely!"',
                icon: '🧠'
            },
            {
                type: 'comparison',
                title: 'Evergreen vs Deciduous',
                content: 'Evergreen = >200cm rain, NO dry season, trees never bare. Deciduous = 70-200cm rain, SHED leaves in dry season (6-8 weeks).',
                icon: '🌳'
            },
            {
                type: 'acronym',
                title: 'Top Forest Cover States (Area)',
                content: 'MAAC = Madhya Pradesh, Arunachal, Chhattisgarh, Odisha, Maharashtra. "Most Area And Cover!"',
                icon: '🔤'
            },
            {
                type: 'visual',
                title: 'Altitude Zones',
                content: 'Sea level → Tropical → 1000m → Sub-tropical → 2000m → Temperate → 3000m → Sub-alpine → 4000m → Alpine. Like climbing stairs!',
                icon: '⛰️'
            }
        ],

        conceptBlocks: [
            {
                title: 'Forest Cover Statistics (ISFR 2021)',
                icon: '📊',
                points: [
                    '📏 TOTAL FOREST COVER:',
                    '  • Total: 7,13,789 sq km (21.71% of India)',
                    '  • Very Dense Forest: 99,779 sq km (3.04%)',
                    '  • Moderately Dense: 3,06,890 sq km (9.33%)',
                    '  • Open Forest: 3,07,120 sq km (9.34%)',
                    '',
                    '📈 CHANGES:',
                    '  • Increase from 2019: 1,540 sq km',
                    '  • Target: 33% forest cover (National Forest Policy)',
                    '  • Tree cover (outside forests): 95,748 sq km (2.91%)',
                    '  • Total green cover: 24.62%',
                    '',
                    '🏆 TOP STATES BY AREA:',
                    '  1. Madhya Pradesh: 77,493 sq km',
                    '  2. Arunachal Pradesh: 66,688 sq km',
                    '  3. Chhattisgarh: 55,611 sq km',
                    '  4. Odisha: 52,156 sq km',
                    '  5. Maharashtra: 50,778 sq km',
                    '',
                    '📊 TOP STATES BY PERCENTAGE:',
                    '  1. Mizoram: 84.53%',
                    '  2. Arunachal Pradesh: 79.33%',
                    '  3. Meghalaya: 76.00%',
                    '  4. Manipur: 74.34%',
                    '  5. Nagaland: 73.90%',
                    '',
                    '⚠️ LOWEST FOREST COVER:',
                    '  • Haryana: 3.53%',
                    '  • Punjab: 3.67%',
                    '  • Rajasthan: 4.87%'
                ]
            },
            {
                title: 'Tropical Evergreen Forests',
                icon: '🌴',
                points: [
                    '🌧️ CLIMATE REQUIREMENTS:',
                    '  • Rainfall: >200 cm annually',
                    '  • No distinct dry season',
                    '  • Temperature: 25-27°C',
                    '  • High humidity year-round',
                    '',
                    '📍 DISTRIBUTION:',
                    '  • Western Ghats (windward): Kerala, Karnataka coast',
                    '  • Northeast India: Assam, Meghalaya, Nagaland, Manipur',
                    '  • Andaman & Nicobar Islands',
                    '  • Parts of West Bengal (Darjeeling)',
                    '',
                    '🌳 CHARACTERISTICS:',
                    '  • Dense, multi-layered canopy',
                    '  • Trees: Tall (45-60 m), no shedding',
                    '  • Undergrowth: Dense, dark forest floor',
                    '  • High biodiversity (species richness)',
                    '  • Epiphytes, lianas common',
                    '',
                    '🪵 IMPORTANT TREES:',
                    '  • Rosewood (Dalbergia)',
                    '  • Ebony',
                    '  • Mahogany',
                    '  • Rubber',
                    '  • Cinchona (quinine source)',
                    '  • Coconut, Arecanut (plantations)',
                    '',
                    '💰 ECONOMIC VALUE:',
                    '  • Hardwood timber',
                    '  • Medicinal plants',
                    '  • Spices (cardamom, pepper)',
                    '  • Difficult to exploit (dense, no roads)'
                ]
            },
            {
                title: 'Tropical Deciduous Forests',
                icon: '🍂',
                points: [
                    '📊 LARGEST FOREST TYPE IN INDIA (~65% of forests)',
                    '',
                    '🌧️ CLIMATE:',
                    '  • Rainfall: 70-200 cm',
                    '  • Distinct dry season (6-8 weeks)',
                    '  • Trees shed leaves in dry season',
                    '',
                    '📍 TWO SUB-TYPES:',
                    '',
                    '🌳 MOIST DECIDUOUS (100-200 cm rainfall):',
                    '  • Location: Eastern slopes of Western Ghats,',
                    '    NE India foothills, Odisha, Jharkhand,',
                    '    Chhattisgarh, eastern MP',
                    '  • Trees: Teak, Sal, Shisham, Sandalwood',
                    '  • Teak: Most valuable timber (used in furniture)',
                    '  • Sal: Strongest timber (used in railways)',
                    '',
                    '🌳 DRY DECIDUOUS (70-100 cm rainfall):',
                    '  • Location: Peninsular plateau, Rajasthan,',
                    '    Punjab, Haryana, UP plains',
                    '  • Trees: Tendu (bidi leaves), Palash (flame of forest),',
                    '    Amaltas, Palas, Acacia',
                    '  • Stunted trees, open canopy',
                    '  • Grasslands mixed',
                    '',
                    '🐅 WILDLIFE:',
                    '  • Tiger, Leopard, Elephant, Sambar',
                    '  • Most tiger reserves in deciduous forests',
                    '',
                    '💰 ECONOMIC IMPORTANCE:',
                    '  • Teak, Sal: Premium timber',
                    '  • Tendu leaves: Bidi industry (₹1000s crore)',
                    '  • Honey, lac, bamboo'
                ]
            },
            {
                title: 'Tropical Thorn Forests',
                icon: '🌵',
                points: [
                    '🌧️ CLIMATE:',
                    '  • Rainfall: <70 cm (semi-arid)',
                    '  • Long dry season (8-10 months)',
                    '  • High evaporation',
                    '',
                    '📍 DISTRIBUTION:',
                    '  • Rajasthan (most extensive)',
                    '  • Gujarat (Kutch, Saurashtra)',
                    '  • MP (western parts)',
                    '  • UP (western parts)',
                    '  • Punjab, Haryana (southern)',
                    '  • Karnataka, AP (rain shadow)',
                    '',
                    '🌳 CHARACTERISTICS:',
                    '  • Scattered, stunted trees',
                    '  • Thorny bushes dominant',
                    '  • Deep roots (to reach water table)',
                    '  • Leaves small, waxy (reduce transpiration)',
                    '  • Some are leafless (photosynthesis in stems)',
                    '',
                    '🪵 TREES:',
                    '  • Babul (Acacia nilotica) - Most common',
                    '  • Kikar (Acacia)',
                    '  • Khejri (state tree of Rajasthan)',
                    '    - Chipko-like movement in 1731 (Bishnois)',
                    '  • Wild Date Palm (Phoenix)',
                    '  • Cactus, Euphorbia',
                    '',
                    '💰 USES:',
                    '  • Firewood (major use)',
                    '  • Gum (from Acacia)',
                    '  • Fodder',
                    '  • Khejri: "King of desert" - multiple uses'
                ]
            },
            {
                title: 'Montane & Himalayan Forests',
                icon: '🏔️',
                points: [
                    '⛰️ ALTITUDE ZONATION:',
                    '  • 1000-2000m: Sub-tropical (Himalayan Moist)',
                    '  • 2000-3000m: Temperate',
                    '  • 3000-4000m: Sub-alpine',
                    '  • >4000m: Alpine',
                    '',
                    '🌲 HIMALAYAN MOIST TEMPERATE (1500-3000m):',
                    '  • Location: J&K, HP, Uttarakhand, NE hills',
                    '  • Trees: Oak, Chestnut, Chir Pine, Deodar, Maple',
                    '  • DEODAR: Most valuable Himalayan timber',
                    '  • Dense, evergreen, coniferous',
                    '',
                    '🌲 HIMALAYAN DRY TEMPERATE (2700-4000m):',
                    '  • Location: Inner Himalayas (rain shadow)',
                    '  • Ladakh, Lahaul-Spiti, upper Kinnaur',
                    '  • Trees: Juniper, Deodar, Chilgoza Pine',
                    '  • Sparse vegetation, dry',
                    '',
                    '🌿 SUB-ALPINE (3000-4000m):',
                    '  • Transition zone',
                    '  • Trees: Silver Fir, Birch, Rhododendron',
                    '  • Stunted trees at upper limit',
                    '',
                    '🌸 ALPINE FORESTS/MEADOWS (>4000m):',
                    '  • Treeless (too cold)',
                    '  • Alpine meadows: Bugyals, Margs (Kashmir)',
                    '  • Vegetation: Mosses, lichens, grass',
                    '  • Seasonal (snow-covered in winter)',
                    '  • Used for Bakharwal (nomadic) grazing',
                    '',
                    '🌺 SHOLA FORESTS (Western Ghats):',
                    '  • Montane evergreen forests',
                    '  • Nilgiris, Palani, Anaimalai hills',
                    '  • Stunted, dense, misty',
                    '  • Grassland-Shola mosaic pattern'
                ]
            },
            {
                title: 'Mangroves & Coastal Forests',
                icon: '🌊',
                points: [
                    '📍 MANGROVE DISTRIBUTION:',
                    '  • India\'s mangrove cover: 4,992 sq km (ISFR 2021)',
                    '  • SUNDARBANS: Largest (2,114 sq km, 42%)',
                    '  • Gujarat: Second largest (1,177 sq km)',
                    '  • Andaman & Nicobar: Third (616 sq km)',
                    '',
                    '🌳 CHARACTERISTICS:',
                    '  • Tidal, saline water',
                    '  • Breathing roots (pneumatophores)',
                    '  • Stilt roots for stability',
                    '  • Viviparous seeds (germinate on tree)',
                    '  • Salt-tolerant (halophytes)',
                    '',
                    '🪵 TREES:',
                    '  • Sundari (Heritiera) - Sundarbans named after it',
                    '  • Rhizophora (red mangrove)',
                    '  • Avicennia',
                    '  • Sonneratia',
                    '',
                    '📍 MAJOR MANGROVE AREAS:',
                    '  • Sundarbans (WB): UNESCO World Heritage',
                    '  • Bhitarkanika (Odisha): Crocodile habitat',
                    '  • Pichavaram (TN): Second largest in India',
                    '  • Gulf of Kutch (Gujarat)',
                    '  • Gulf of Khambhat (Gujarat)',
                    '',
                    '⚡ ECOLOGICAL IMPORTANCE:',
                    '  • Coastal protection (cyclones, tsunamis)',
                    '  • Fish breeding grounds',
                    '  • Carbon sequestration',
                    '  • Biodiversity (Royal Bengal Tiger, crocodiles)',
                    '',
                    '⚠️ THREATS:',
                    '  • Reclamation for aquaculture',
                    '  • Pollution',
                    '  • Sea level rise',
                    '  • Upstream damming (reduced freshwater)'
                ]
            }
        ],

        diagrams: [
            {
                title: 'Forest Types Map of India',
                type: 'map',
                description: 'India map with different colors: Evergreen (dark green - Western Ghats, NE), Deciduous (light green - central belt), Thorn (brown - Rajasthan, Gujarat), Mangroves (blue - coastal). Mark major areas.'
            },
            {
                title: 'Himalayan Vegetation Zones',
                type: 'cross-section',
                description: 'Altitude diagram from plains to peaks: Tropical (<1000m) → Sub-tropical (1000-2000m) → Temperate (2000-3000m) → Sub-alpine (3000-4000m) → Alpine (>4000m) → Snow. Show tree types at each level.'
            },
            {
                title: 'Forest Cover by State - Top 10',
                type: 'bar-chart',
                description: 'Horizontal bar chart: MP (77,493), Arunachal (66,688), Chhattisgarh (55,611), Odisha (52,156), Maharashtra (50,778). Show in descending order.'
            },
            {
                title: 'Moist vs Dry Deciduous',
                type: 'comparison-chart',
                description: 'Two columns comparing: Rainfall, Location, Trees, Uses. Moist (100-200cm, E. slopes, Teak-Sal) vs Dry (70-100cm, plateau, Tendu-Palash).'
            },
            {
                title: 'Mangrove Distribution',
                type: 'map',
                description: 'India coastline showing mangrove locations: Sundarbans (largest), Gujarat coast, Bhitarkanika, Pichavaram, Andaman. Use proportional circles for area.'
            }
        ],

        quickFacts: [
            '🌲 Total forest cover: 21.71% (7,13,789 sq km) | Target: 33%',
            '📊 Tropical Deciduous: Largest forest type (~65% of forests)',
            '🏆 Area-wise: MP > Arunachal > Chhattisgarh > Odisha > Maharashtra',
            '📊 Percentage-wise: Mizoram (84.53%) > Arunachal > Meghalaya',
            '⚠️ Lowest cover: Haryana (3.53%), Punjab (3.67%), Rajasthan (4.87%)',
            '🌳 Teak: Most valuable deciduous timber | Sal: Strongest timber',
            '🏔️ Deodar: Most valuable Himalayan timber',
            '🌴 Evergreen needs: >200 cm rain, no dry season',
            '🌵 Thorn forests: <70 cm rain, Rajasthan-Gujarat dominant',
            '🌊 Mangroves: 4,992 sq km | Sundarbans = 42% of India\'s mangroves',
            '🦎 Champion & Seth: 16 major, 221 minor forest types classification',
            '🌲 ISFR: India State of Forest Report (by FSI, Dehradun)'
        ],

        upscTraps: [
            {
                trap: 'Arunachal Pradesh has highest forest cover',
                clarity: 'DEPENDS ON METRIC! By AREA: MP is highest (77,493 sq km). By PERCENTAGE: Mizoram is highest (84.53%). Arunachal is 2nd in both. Always specify the metric.'
            },
            {
                trap: 'Tropical Evergreen forests are most common in India',
                clarity: 'WRONG! Tropical DECIDUOUS forests cover ~65% of Indian forests (largest type). Evergreen forests need >200cm rain (only Western Ghats, NE India). Deciduous are most common.'
            },
            {
                trap: 'Sundarbans is in Bangladesh',
                clarity: 'PARTIALLY CORRECT! Sundarbans is SHARED between India (West Bengal) and Bangladesh. Indian part is ~40%, Bangladesh ~60%. Indian Sundarbans = 4,200+ sq km total (including water).'
            },
            {
                trap: 'Alpine zone has dense forests',
                clarity: 'WRONG! Alpine zone (>4000m) is TREELESS - too cold for trees. Only mosses, lichens, grasses survive. Sub-alpine has stunted trees. Dense forests are in temperate zone (2000-3000m).'
            }
        ],

        revisionBox: {
            title: '⚡ 30-Second Revision',
            points: [
                'Forest cover: 21.71% (Target 33%) | Deciduous = largest type (65%)',
                'Area: MP > Arunachal > CG | Percentage: Mizoram (84.5%) > Arunachal',
                'Evergreen: >200cm rain, W. Ghats, NE | Trees: Rosewood, Mahogany',
                'Deciduous: 70-200cm, Central India | Trees: Teak (valuable), Sal (strong)',
                'Thorn: <70cm, Rajasthan-Gujarat | Trees: Babul, Khejri',
                'Himalayan zones: Temperate (2000-3000m) → Sub-alpine → Alpine (treeless)',
                'Mangroves: 4,992 sq km | Sundarbans largest (42%)'
            ]
        },

        pyqs: [
            {
                year: 2023,
                question: 'Discuss the classification of forests in India according to Champion and Seth.',
                type: 'Mains'
            },
            {
                year: 2022,
                question: 'Why is the forest cover declining in India despite various conservation efforts?',
                type: 'Mains'
            },
            {
                year: 2021,
                question: 'Which state has the highest percentage of forest cover?',
                type: 'Prelims',
                options: ['Madhya Pradesh', 'Mizoram', 'Arunachal Pradesh', 'Kerala']
            },
            {
                year: 2020,
                question: 'Describe the characteristics and distribution of mangrove forests in India.',
                type: 'Mains'
            },
            {
                year: 2019,
                question: 'Compare tropical evergreen and tropical deciduous forests.',
                type: 'Mains'
            }
        ]
    },

    // ============================================
    // TOPIC 2: BIODIVERSITY HOTSPOTS
    // ============================================
    {
        id: 'biodiversity-hotspots-india',
        name: 'Biodiversity Hotspots of India',
        icon: '🦋',
        category: 'india-resources',
        theme: 'forest',
        difficulty: 'medium',
        upscRelevance: 'very-high',

        mindMap: {
            central: 'Biodiversity Hotspots',
            branches: [
                {
                    name: 'India\'s 4 Hotspots',
                    color: '#27AE60',
                    children: [
                        'Western Ghats',
                        'Eastern Himalayas',
                        'Indo-Burma',
                        'Sundaland (Nicobar)'
                    ]
                },
                {
                    name: 'Hotspot Criteria',
                    color: '#3498DB',
                    children: [
                        'Norman Myers (1988)',
                        '1500+ endemic plants',
                        '70%+ habitat lost',
                        '36 hotspots globally',
                        '2.5% land, 50% species'
                    ]
                },
                {
                    name: 'Western Ghats',
                    color: '#E74C3C',
                    children: [
                        'UNESCO Heritage (2012)',
                        '5000+ flowering plants',
                        'Lion-tailed Macaque',
                        'Nilgiri Tahr',
                        'Malabar Coast'
                    ]
                },
                {
                    name: 'Conservation',
                    color: '#9B59B6',
                    children: [
                        'Biosphere Reserves',
                        'National Parks',
                        'Wildlife Sanctuaries',
                        'Community Reserves',
                        'Sacred Groves'
                    ]
                }
            ]
        },

        memoryHooks: [
            {
                type: 'mnemonic',
                title: 'India\'s 4 Hotspots',
                content: 'WEIS = Western Ghats, Eastern Himalayas, Indo-Burma, Sundaland. "WE Indians Save" biodiversity!',
                icon: '🧠'
            },
            {
                type: 'acronym',
                title: 'Hotspot Criteria',
                content: 'EL-HL = Endemic species (1500+ plants) + Habitat Loss (70%+). Both conditions must be met!',
                icon: '🔤'
            },
            {
                type: 'comparison',
                title: 'Hotspots Coverage',
                content: 'Hotspots cover only 2.5% of Earth\'s land but have 50% of plant species and 42% of vertebrates. Small area, MEGA importance!',
                icon: '📊'
            },
            {
                type: 'visual',
                title: 'Western Ghats = Biodiversity Bank',
                content: 'Think of Western Ghats as a "biodiversity bank" - storing unique species found NOWHERE else on Earth (endemic). 5000+ plants, 139 mammals, 508 birds!',
                icon: '🏦'
            }
        ],

        conceptBlocks: [
            {
                title: 'What are Biodiversity Hotspots?',
                icon: '🌍',
                points: [
                    '📖 DEFINITION:',
                    '  • Regions with exceptional biodiversity',
                    '  • High endemism (species found nowhere else)',
                    '  • Severely threatened by habitat loss',
                    '  • Concept by Norman Myers (1988)',
                    '',
                    '📊 CRITERIA (Conservation International):',
                    '  1. ≥1,500 endemic vascular plant species',
                    '  2. ≥70% of original habitat lost',
                    '  • Both conditions must be met',
                    '',
                    '🌎 GLOBAL STATISTICS:',
                    '  • 36 biodiversity hotspots worldwide',
                    '  • Cover only 2.5% of Earth\'s land surface',
                    '  • Contain 50% of world\'s plant species',
                    '  • Contain 42% of terrestrial vertebrates',
                    '  • Critical for conservation prioritization',
                    '',
                    '🇮🇳 INDIA\'S POSITION:',
                    '  • 4 hotspots in India (partly or fully)',
                    '  • India: One of 17 megadiverse countries',
                    '  • 7-8% of world\'s recorded species',
                    '  • 2.4% of world\'s land area'
                ]
            },
            {
                title: 'Western Ghats',
                icon: '🏔️',
                points: [
                    '📍 EXTENT:',
                    '  • 1600 km along western coast',
                    '  • Gujarat to Tamil Nadu (6 states)',
                    '  • States: Gujarat, Maharashtra, Goa, Karnataka, Kerala, TN',
                    '  • UNESCO World Heritage Site (2012)',
                    '  • 39 serial sites inscribed',
                    '',
                    '🌿 BIODIVERSITY:',
                    '  • 5,000+ flowering plant species',
                    '  • 139 mammal species (12 endemic)',
                    '  • 508 bird species (19 endemic)',
                    '  • 179 amphibian species (65% endemic!)',
                    '  • High amphibian endemism - globally unique',
                    '',
                    '🐒 ENDEMIC SPECIES:',
                    '  • Lion-tailed Macaque (only here!)',
                    '  • Nilgiri Tahr (mountain goat)',
                    '  • Nilgiri Langur',
                    '  • Malabar Giant Squirrel',
                    '  • Purple Frog (living fossil)',
                    '  • Many orchids, wild relatives of crops',
                    '',
                    '📍 KEY AREAS:',
                    '  • Agasthyamalai: Southern tip, mega-diversity',
                    '  • Nilgiri Biosphere Reserve: First BR in India',
                    '  • Silent Valley: Tropical evergreen',
                    '  • Periyar Tiger Reserve',
                    '  • Kudremukh National Park',
                    '',
                    '⚠️ THREATS:',
                    '  • Mining (iron ore, bauxite)',
                    '  • Plantations (tea, coffee, rubber)',
                    '  • Dam projects',
                    '  • Road widening',
                    '  • Kasturirangan Report (2013): ESA demarcation'
                ]
            },
            {
                title: 'Eastern Himalayas',
                icon: '🏔️',
                points: [
                    '📍 EXTENT:',
                    '  • NE India, Nepal, Bhutan, Tibet',
                    '  • India portion: NE states + Sikkim + Darjeeling',
                    '  • Altitude range: 200m to 8500m',
                    '',
                    '🌿 BIODIVERSITY:',
                    '  • 10,000+ plant species',
                    '  • 300+ mammal species',
                    '  • 900+ bird species',
                    '  • 126 endemic birds',
                    '  • Highest diversity of primitive flowering plants',
                    '',
                    '🐾 ENDEMIC/RARE SPECIES:',
                    '  • Red Panda (state animal of Sikkim)',
                    '  • Snow Leopard',
                    '  • Golden Langur',
                    '  • Himalayan Black Bear',
                    '  • Hoolock Gibbon (only ape in India)',
                    '  • Wild Water Buffalo (Kaziranga)',
                    '  • One-horned Rhino (Kaziranga)',
                    '',
                    '🌸 PLANT DIVERSITY:',
                    '  • Rhododendrons (80+ species)',
                    '  • Orchids (450+ species)',
                    '  • Wild rice varieties',
                    '  • Medicinal plants (yew for cancer drug)',
                    '',
                    '📍 KEY AREAS:',
                    '  • Kaziranga NP (Assam): Rhino capital',
                    '  • Manas NP (Assam): Tigers, elephants',
                    '  • Khangchendzonga NP (Sikkim): UNESCO',
                    '  • Namdapha NP (Arunachal): 4 big cats together',
                    '  • Dibru-Saikhowa NP: Feral horses',
                    '',
                    '⚠️ THREATS:',
                    '  • Shifting cultivation (jhum)',
                    '  • Hydropower projects',
                    '  • Poaching',
                    '  • Climate change (glacial retreat)'
                ]
            },
            {
                title: 'Indo-Burma Hotspot',
                icon: '🌏',
                points: [
                    '📍 EXTENT:',
                    '  • NE India + Myanmar + Thailand + Vietnam + Laos + Cambodia',
                    '  • India portion: Manipur, Mizoram, Tripura, parts of Assam',
                    '  • Overlaps with Eastern Himalayas in parts',
                    '',
                    '🌿 BIODIVERSITY:',
                    '  • 13,500 plant species (7,000 endemic)',
                    '  • 1,170 bird species',
                    '  • 430 mammal species',
                    '  • 522 reptile species',
                    '  • High freshwater fish diversity',
                    '',
                    '🐘 KEY SPECIES:',
                    '  • Asian Elephant',
                    '  • Clouded Leopard',
                    '  • Hoolock Gibbon (only Indian ape)',
                    '  • Sangai (Manipur brow-antlered deer)',
                    '  • Freshwater turtles',
                    '  • Giant catfish',
                    '',
                    '📍 KEY AREAS IN INDIA:',
                    '  • Keibul Lamjao NP (Manipur):',
                    '    - Only floating NP in world',
                    '    - Loktak Lake, Sangai habitat',
                    '  • Dampa Tiger Reserve (Mizoram)',
                    '  • Murlen NP (Mizoram)',
                    '',
                    '⚠️ THREATS:',
                    '  • Insurgency (limits conservation)',
                    '  • Shifting cultivation',
                    '  • Hunting (traditional)',
                    '  • Infrastructure projects'
                ]
            },
            {
                title: 'Sundaland Hotspot',
                icon: '🏝️',
                points: [
                    '📍 EXTENT:',
                    '  • SE Asia: Malay Peninsula, Sumatra, Borneo, Java',
                    '  • India portion: Only NICOBAR ISLANDS',
                    '  • (Andaman is part of Indo-Burma)',
                    '',
                    '🌿 BIODIVERSITY:',
                    '  • 25,000 plant species (15,000 endemic)',
                    '  • 380 mammal species',
                    '  • 770 bird species',
                    '  • One of world\'s richest hotspots',
                    '',
                    '🦎 NICOBAR\'S UNIQUE SPECIES:',
                    '  • Nicobar Megapode (mound-nesting bird)',
                    '  • Nicobar Pigeon (closest relative of Dodo!)',
                    '  • Nicobar Tree Shrew',
                    '  • Saltwater Crocodile',
                    '  • Leatherback Turtle (nesting)',
                    '  • Dugong (sea cow)',
                    '',
                    '📍 PROTECTED AREAS:',
                    '  • Great Nicobar Biosphere Reserve',
                    '  • Campbell Bay NP',
                    '  • Galathea NP',
                    '  • Indira Point: Southernmost point of India',
                    '',
                    '⚠️ THREATS:',
                    '  • 2004 Tsunami (devastated)',
                    '  • Proposed mega port development',
                    '  • Military installations',
                    '  • Limited scientific access',
                    '',
                    '📊 NOTE:',
                    '  • Nicobar is distinct from Andaman',
                    '  • Andaman = Indo-Burma hotspot',
                    '  • Nicobar = Sundaland hotspot',
                    '  • Different biogeographic origins'
                ]
            },
            {
                title: 'Conservation Framework',
                icon: '🛡️',
                points: [
                    '🏛️ PROTECTED AREA NETWORK:',
                    '  • National Parks: 106 (no human activity)',
                    '  • Wildlife Sanctuaries: 566 (limited activity)',
                    '  • Conservation Reserves: 105',
                    '  • Community Reserves: 220+',
                    '  • Total PA coverage: ~5% of India',
                    '',
                    '🌿 BIOSPHERE RESERVES (18):',
                    '  • Man and Biosphere (MAB) - UNESCO program',
                    '  • 3 zones: Core, Buffer, Transition',
                    '  • 12 are part of World Network (UNESCO recognized)',
                    '  • Examples:',
                    '    - Nilgiri BR (first, 1986)',
                    '    - Sundarbans BR',
                    '    - Gulf of Mannar BR',
                    '    - Great Nicobar BR',
                    '',
                    '📜 KEY LEGISLATION:',
                    '  • Wildlife Protection Act, 1972',
                    '  • Forest Conservation Act, 1980',
                    '  • Environment Protection Act, 1986',
                    '  • Biological Diversity Act, 2002',
                    '  • National Wildlife Action Plan',
                    '',
                    '🌍 INTERNATIONAL:',
                    '  • CBD (Convention on Biological Diversity)',
                    '  • Nagoya Protocol (ABS)',
                    '  • CITES (trade regulation)',
                    '  • Ramsar Convention (wetlands)',
                    '  • IUCN Red List',
                    '',
                    '👥 COMMUNITY CONSERVATION:',
                    '  • Sacred Groves (Devara Kadus, Orans)',
                    '  • Community conserved areas',
                    '  • Joint Forest Management',
                    '  • Eco-development committees'
                ]
            }
        ],

        diagrams: [
            {
                title: 'India\'s 4 Biodiversity Hotspots Map',
                type: 'map',
                description: 'India map marking: Western Ghats (green strip along west coast), Eastern Himalayas (NE + Sikkim, blue), Indo-Burma (far NE states, orange), Sundaland (Nicobar only, purple). Show overlap areas.'
            },
            {
                title: 'Western Ghats Biodiversity',
                type: 'infographic',
                description: 'Infographic showing: Endemic species icons (Lion-tailed Macaque, Nilgiri Tahr, Purple Frog), plant count (5000+), UNESCO sites (39), Threats (mining, plantations).'
            },
            {
                title: 'Hotspot Criteria Diagram',
                type: 'flowchart',
                description: 'Flowchart: Start → Check endemic plants (≥1500?) → Yes → Check habitat loss (≥70%?) → Yes → HOTSPOT. Both conditions required.'
            },
            {
                title: 'Global Hotspots Distribution',
                type: 'world-map',
                description: 'World map showing all 36 hotspots. Highlight 4 that include India. Show that hotspots = 2.5% area, 50% species.'
            },
            {
                title: 'Protected Area Network',
                type: 'diagram',
                description: 'Pyramid showing: National Parks (top, strictest), Wildlife Sanctuaries (middle), Conservation Reserves, Community Reserves (base). Show numbers.'
            }
        ],

        quickFacts: [
            '🌍 36 global hotspots | India has 4 (partly or fully)',
            '📊 Hotspot criteria: ≥1500 endemic plants + ≥70% habitat lost',
            '🏔️ Western Ghats: UNESCO Heritage (2012), 5000+ plants, 65% endemic amphibians',
            '🐒 Lion-tailed Macaque: Endemic to Western Ghats only',
            '🐼 Red Panda: Eastern Himalayas, state animal of Sikkim',
            '🏝️ Sundaland in India: Only Nicobar Islands (not Andaman)',
            '🦌 Sangai (Manipur deer): Keibul Lamjao NP (only floating NP)',
            '🌿 India: 1 of 17 megadiverse countries (7-8% of world species)',
            '📊 Hotspots: 2.5% of Earth\'s land → 50% of plant species',
            '🏛️ India\'s PAs: 106 NPs + 566 WLS = ~5% area',
            '🌲 Nilgiri BR: First Biosphere Reserve in India (1986)',
            '⚠️ Western Ghats threats: Mining, plantations, roads, dams'
        ],

        upscTraps: [
            {
                trap: 'India has 4 complete biodiversity hotspots',
                clarity: 'MISLEADING! Only WESTERN GHATS is entirely in India. Eastern Himalayas extends to Nepal, Bhutan, Tibet. Indo-Burma extends to SE Asia. Sundaland is mostly in SE Asia (only Nicobar in India).'
            },
            {
                trap: 'Andaman and Nicobar are in the same hotspot',
                clarity: 'WRONG! Andaman = INDO-BURMA hotspot. Nicobar = SUNDALAND hotspot. They have different biogeographic origins. This is a classic UPSC question!'
            },
            {
                trap: 'High biodiversity = Hotspot',
                clarity: 'WRONG! Hotspot requires TWO criteria: (1) ≥1500 endemic plants AND (2) ≥70% habitat LOST. Amazon has high biodiversity but is NOT a hotspot (less than 70% habitat lost). Threat level matters!'
            },
            {
                trap: 'All NE states are in Eastern Himalayas hotspot',
                clarity: 'OVERLAPPING! Some NE states (Manipur, Mizoram, Tripura) are in INDO-BURMA hotspot, not Eastern Himalayas. The hotspots overlap in some areas. Assam hills and Sikkim are clearly Eastern Himalayas.'
            }
        ],

        revisionBox: {
            title: '⚡ 30-Second Revision',
            points: [
                '4 Hotspots: Western Ghats, Eastern Himalayas, Indo-Burma, Sundaland',
                'Criteria: ≥1500 endemic plants + ≥70% habitat lost (both required)',
                'Western Ghats: UNESCO Heritage, Lion-tailed Macaque, 65% endemic amphibians',
                'Eastern Himalayas: Red Panda, Snow Leopard, Hoolock Gibbon (only Indian ape)',
                'Indo-Burma: Sangai deer, floating Keibul Lamjao NP',
                'Sundaland: Only NICOBAR (not Andaman), Nicobar Megapode',
                'India: 1 of 17 megadiverse countries, 7-8% of world\'s species'
            ]
        },

        pyqs: [
            {
                year: 2023,
                question: 'Discuss the concept of biodiversity hotspots. Describe the four biodiversity hotspots of India.',
                type: 'Mains'
            },
            {
                year: 2022,
                question: 'Why is Western Ghats considered a biodiversity hotspot? Discuss the threats.',
                type: 'Mains'
            },
            {
                year: 2021,
                question: 'Nicobar Islands belong to which biodiversity hotspot?',
                type: 'Prelims',
                options: ['Indo-Burma', 'Sundaland', 'Western Ghats', 'Eastern Himalayas']
            },
            {
                year: 2020,
                question: 'What are the criteria for declaring a region as biodiversity hotspot?',
                type: 'Mains'
            },
            {
                year: 2019,
                question: 'Discuss the conservation efforts in biodiversity hotspots of India.',
                type: 'Mains'
            }
        ]
    },

    // ============================================
    // TOPIC 3: MINERAL RESOURCES OF INDIA
    // ============================================
    {
        id: 'mineral-resources-india',
        name: 'Mineral Resources of India',
        icon: '⛏️',
        category: 'india-resources',
        theme: 'industry',
        difficulty: 'hard',
        upscRelevance: 'very-high',

        mindMap: {
            central: 'Indian Minerals',
            branches: [
                {
                    name: 'Ferrous Minerals',
                    color: '#7F8C8D',
                    children: [
                        'Iron Ore (4th largest)',
                        'Manganese',
                        'Chromite',
                        'Nickel',
                        'Tungsten, Cobalt'
                    ]
                },
                {
                    name: 'Non-Ferrous',
                    color: '#F39C12',
                    children: [
                        'Bauxite (Aluminium)',
                        'Copper',
                        'Lead-Zinc',
                        'Gold',
                        'Silver'
                    ]
                },
                {
                    name: 'Energy Minerals',
                    color: '#2ECC71',
                    children: [
                        'Coal',
                        'Petroleum & Gas',
                        'Uranium',
                        'Thorium (1st)',
                        'Lignite'
                    ]
                },
                {
                    name: 'Distribution Belt',
                    color: '#9B59B6',
                    children: [
                        'NE Plateau (richest)',
                        'SW Plateau (Karnataka)',
                        'NW Region (Rajasthan)',
                        'Himalayan belt',
                        'Coastal & offshore'
                    ]
                }
            ]
        },

        memoryHooks: [
            {
                type: 'mnemonic',
                title: 'Iron Ore States',
                content: 'OJCK = Odisha, Jharkhand, Chhattisgarh, Karnataka. "OJ Chills in Karnataka!" - top 4 iron ore states.',
                icon: '🧠'
            },
            {
                type: 'acronym',
                title: 'Manganese States',
                content: 'OMGK = Odisha, MP, Maharashtra (Goa earlier), Karnataka. "Oh My God, Karnataka!" for manganese.',
                icon: '🔤'
            },
            {
                type: 'comparison',
                title: 'Iron vs Coal Location',
                content: 'IRON: Peninsular plateau (Odisha-Jharkhand-CG). COAL: River valleys (Damodar = "Coal capital"). Both in CHOTA NAGPUR region - convenient for steel industry!',
                icon: '📍'
            },
            {
                type: 'story',
                title: 'India\'s Mineral Story',
                content: 'India is RICH in iron (4th globally), manganese, mica (1st), thorium (1st). But POOR in: Copper, petroleum, tin, lead. Import dependent for energy and non-ferrous!',
                icon: '📊'
            }
        ],

        conceptBlocks: [
            {
                title: 'Iron Ore',
                icon: '⚫',
                points: [
                    '📊 INDIA\'S POSITION:',
                    '  • 4th largest producer globally',
                    '  • Reserves: 33.7 billion tonnes',
                    '  • Production: ~200+ MT annually',
                    '  • Export: Significant (China main buyer)',
                    '',
                    '🔬 TYPES:',
                    '  • Magnetite: 72% iron, best quality, Karnataka',
                    '  • Hematite: 60-70% iron, most common, Odisha',
                    '  • Limonite: 40-60% iron, lower grade',
                    '',
                    '📍 DISTRIBUTION:',
                    '  • ODISHA (Highest producer ~50%):',
                    '    - Mayurbhanj, Keonjhar, Sundargarh',
                    '    - Bonai-Keonjhar belt',
                    '  • JHARKHAND:',
                    '    - Singhbhum, Chaibasa',
                    '    - Noamundi, Gua mines',
                    '  • CHHATTISGARH:',
                    '    - Bailadila (Dantewada) - Largest reserves',
                    '    - Dalli-Rajhara',
                    '  • KARNATAKA:',
                    '    - Bellary-Hospet belt',
                    '    - Sandur, Kudremukh',
                    '    - Highest magnetite concentration',
                    '  • GOA:',
                    '    - Export-oriented mining',
                    '    - SC banned illegal mining (2012-14)',
                    '',
                    '🏭 STEEL INDUSTRY LINKAGE:',
                    '  • Tata Steel (Jamshedpur): Jharkhand ore',
                    '  • SAIL plants: Bhilai, Rourkela, Durgapur, Bokaro',
                    '  • JSW (Karnataka), JSPL (Odisha)'
                ]
            },
            {
                title: 'Coal - Primary Energy Mineral',
                icon: '🪨',
                points: [
                    '📊 INDIA\'S POSITION:',
                    '  • 4th largest reserves globally',
                    '  • 2nd largest producer (after China)',
                    '  • Production: ~900+ MT annually',
                    '  • But still imports (~250 MT/year)',
                    '',
                    '🔬 TYPES:',
                    '  • ANTHRACITE: Highest grade (>90% carbon)',
                    '    - J&K only (Kalakot), very limited',
                    '  • BITUMINOUS: Good quality (60-90% carbon)',
                    '    - Jharkhand, WB, Odisha, MP, CG',
                    '    - Most thermal coal is this',
                    '  • LIGNITE (Brown coal): Low grade (<50% carbon)',
                    '    - Tamil Nadu (Neyveli - largest)',
                    '    - Gujarat, Rajasthan',
                    '',
                    '📍 DISTRIBUTION:',
                    '  • GONDWANA COAL (96% of India\'s coal):',
                    '    - Age: 200+ million years',
                    '    - DAMODAR VALLEY (Jharkhand-WB):',
                    '      * "Ruhr of India" / "Coal capital"',
                    '      * Jharia, Raniganj, Bokaro',
                    '    - SON VALLEY (MP): Singrauli, Korba (CG)',
                    '    - MAHANADI VALLEY (Odisha-CG): Talcher, IB Valley',
                    '    - GODAVARI VALLEY (Telangana-AP): Singareni',
                    '  • TERTIARY COAL (4%):',
                    '    - NE India: Assam (Makum, Jaintia)',
                    '    - J&K: Kalakot',
                    '    - Lower quality',
                    '',
                    '🏛️ KEY ENTITIES:',
                    '  • Coal India Limited (CIL): World\'s largest',
                    '  • SCCL: Singareni Collieries (Telangana)',
                    '  • Commercial mining opened (2020)'
                ]
            },
            {
                title: 'Petroleum & Natural Gas',
                icon: '🛢️',
                points: [
                    '📊 INDIA\'S POSITION:',
                    '  • 3rd largest oil consumer globally',
                    '  • Domestic production: Only 15% of demand',
                    '  • 85% IMPORTED (energy security concern)',
                    '',
                    '📍 ONSHORE FIELDS:',
                    '  • ASSAM-ARAKAN:',
                    '    - Digboi: Oldest oil field (1889)',
                    '    - Naharkatiya, Moran-Hugrijan',
                    '  • GUJARAT:',
                    '    - Ankleshwar: Largest onshore',
                    '    - Kalol, Mehsana, Cambay',
                    '  • RAJASTHAN:',
                    '    - Barmer-Sanchore basin',
                    '    - Mangala, Bhagyam fields (Cairn India)',
                    '',
                    '📍 OFFSHORE FIELDS:',
                    '  • MUMBAI HIGH (WESTERN OFFSHORE):',
                    '    - Largest producer (~60% domestic)',
                    '    - 176 km from Mumbai coast',
                    '    - ONGC operated',
                    '  • BASSEIN, NEELAM-HEERA, PANNA-MUKTA',
                    '  • KRISHNA-GODAVARI (KG) BASIN:',
                    '    - Gas-rich (Reliance KG-D6)',
                    '    - Declining production controversy',
                    '  • CAUVERY BASIN: Limited',
                    '',
                    '⛽ NATURAL GAS:',
                    '  • KG Basin: Largest gas reserves',
                    '  • Gujarat (Hazira), Assam',
                    '  • CBM (Coal Bed Methane): Jharia, Raniganj',
                    '  • LNG imports increasing',
                    '',
                    '🏛️ KEY ENTITIES:',
                    '  • ONGC: Largest (Maharatna PSU)',
                    '  • Oil India Limited (OIL): NE focus',
                    '  • Reliance, Cairn (private)',
                    '  • GAIL: Gas transmission'
                ]
            },
            {
                title: 'Bauxite & Aluminium',
                icon: '🔶',
                points: [
                    '📊 INDIA\'S POSITION:',
                    '  • 5th largest bauxite reserves globally',
                    '  • Reserves: 3.9 billion tonnes',
                    '  • Significant aluminium producer',
                    '',
                    '📍 DISTRIBUTION:',
                    '  • ODISHA (Highest ~50%):',
                    '    - Koraput, Kalahandi, Rayagada',
                    '    - Panchpatmali (largest deposit)',
                    '    - NALCO operations',
                    '  • GUJARAT:',
                    '    - Jamnagar, Junagadh, Kutch',
                    '  • JHARKHAND:',
                    '    - Lohardaga, Ranchi, Palamu',
                    '  • MAHARASHTRA:',
                    '    - Kolhapur, Thane, Ratnagiri',
                    '  • CHHATTISGARH:',
                    '    - Surguja, Bilaspur (Mainpat)',
                    '  • MADHYA PRADESH:',
                    '    - Amarkantak, Shahdol',
                    '',
                    '🏭 ALUMINIUM INDUSTRY:',
                    '  • Requires CHEAP ELECTRICITY (energy-intensive)',
                    '  • Major plants:',
                    '    - NALCO (Odisha): Damanjodi',
                    '    - HINDALCO (AB Birla): Renukoot (UP)',
                    '    - VEDANTA (Sterlite): Jharsuguda (Odisha)',
                    '    - BALCO: Korba (CG)',
                    '',
                    '⚠️ ISSUES:',
                    '  • Niyamgiri controversy (Vedanta)',
                    '  • Dongria Kondh tribal rights',
                    '  • SC ruled against mining (2013)'
                ]
            },
            {
                title: 'Other Important Minerals',
                icon: '💎',
                points: [
                    '⚙️ MANGANESE (Steel industry):',
                    '  • India: 7th largest producer',
                    '  • States: Odisha (44%), MP, Maharashtra, Karnataka',
                    '  • Odisha: Bonai-Keonjhar, Kalahandi',
                    '  • MP: Balaghat (highest grade)',
                    '  • Used in steel making (removes impurities)',
                    '',
                    '🔵 CHROMITE (Stainless steel):',
                    '  • India: Significant reserves',
                    '  • 95% from ODISHA (Sukinda Valley)',
                    '  • World\'s most polluted place (2007 report)',
                    '  • Used in stainless steel, refractory',
                    '',
                    '🟡 COPPER:',
                    '  • India: DEFICIT (imports needed)',
                    '  • Major: Singhbhum (Jharkhand), Khetri (Rajasthan)',
                    '  • Malanjkhand (MP): Largest mine',
                    '  • HCL (Hindustan Copper Limited)',
                    '',
                    '✨ MICA (Electrical insulator):',
                    '  • India: LEADING producer globally',
                    '  • Bihar: Koderma-Gaya-Hazaribagh (70%)',
                    '  • Rajasthan: Bhilwara',
                    '  • Andhra: Nellore',
                    '  • Child labor issues (illegal mining)',
                    '',
                    '☢️ NUCLEAR MINERALS:',
                    '  • URANIUM: Jharkhand (Jaduguda), Meghalaya (Domiasiat),',
                    '    Andhra (Tummalapalle - largest)',
                    '  • THORIUM: INDIA #1 GLOBALLY',
                    '    Kerala (monazite sands), Tamil Nadu, Odisha',
                    '  • UCIL: Uranium Corporation of India',
                    '',
                    '🏆 GOLD:',
                    '  • Karnataka: Kolar, Hutti (KGF closed)',
                    '  • Jharkhand: Hirabudini',
                    '  • Very limited domestic production'
                ]
            },
            {
                title: 'Mineral Belts & Policy',
                icon: '🗺️',
                points: [
                    '📍 NORTHEAST PLATEAU BELT (Richest):',
                    '  • Chota Nagpur Plateau region',
                    '  • Jharkhand, Odisha, Chhattisgarh, WB',
                    '  • Iron, coal, manganese, copper, bauxite, mica',
                    '  • "RUHR OF INDIA"',
                    '',
                    '📍 SOUTHWEST PLATEAU BELT:',
                    '  • Karnataka, Goa, Tamil Nadu, Kerala',
                    '  • Iron (Bellary), manganese, bauxite',
                    '  • Gold (Kolar), monazite (Kerala)',
                    '',
                    '📍 NORTHWEST REGION:',
                    '  • Rajasthan, Gujarat',
                    '  • Petroleum (Gujarat), copper (Khetri)',
                    '  • Limestone, gypsum, marble (Rajasthan)',
                    '  • Lead-zinc: Zawar mines (Rajasthan)',
                    '',
                    '📜 MINERAL POLICY:',
                    '  • MMDR Act, 1957 (amended 2015, 2021)',
                    '  • GSI (Geological Survey of India): Exploration',
                    '  • District Mineral Foundation (DMF)',
                    '  • NMET: National Mineral Exploration Trust',
                    '  • 2021 Amendment:',
                    '    - Captive mines can sell (up to 50%)',
                    '    - Ease of doing business',
                    '  • Critical minerals policy: Lithium, cobalt focus',
                    '',
                    '⚠️ CHALLENGES:',
                    '  • Illegal mining',
                    '  • Forest clearance conflicts',
                    '  • Tribal land rights',
                    '  • Environmental damage',
                    '  • Low exploration (80% area unexplored)'
                ]
            }
        ],

        diagrams: [
            {
                title: 'Mineral Distribution Map',
                type: 'map',
                description: 'India map with mineral symbols: Iron (Odisha-Jharkhand-CG-Karnataka), Coal (Damodar-Son-Mahanadi valleys), Bauxite (Odisha plateau), Oil (Gujarat, Assam, Mumbai High offshore). Use different colors.'
            },
            {
                title: 'Coal Fields of India',
                type: 'map',
                description: 'Map showing Gondwana coalfields: Damodar Valley (Jharia, Raniganj, Bokaro), Son Valley (Singrauli), Mahanadi Valley (Talcher, IB), Godavari (Singareni). Mark as different colored regions.'
            },
            {
                title: 'Petroleum Fields',
                type: 'map',
                description: 'Map marking: Onshore (Assam-Digboi, Gujarat-Ankleshwar, Rajasthan-Barmer) and Offshore (Mumbai High, KG Basin). Show import dependency percentage.'
            },
            {
                title: 'Iron Ore Production by State',
                type: 'pie-chart',
                description: 'Pie chart: Odisha (50%), Karnataka (20%), Jharkhand (15%), Chhattisgarh (10%), Others (5%). Show production figures.'
            },
            {
                title: 'Northeast Plateau - Mineral Hub',
                type: 'detailed-map',
                description: 'Detailed map of Jharkhand-Odisha-Chhattisgarh showing all mineral locations: Iron (Singhbhum, Mayurbhanj), Coal (Jharia, Talcher), Copper (Singhbhum), Bauxite (Koraput).'
            }
        ],

        quickFacts: [
            '⛏️ Iron ore: 4th largest producer | Odisha ~50% | Bailadila (CG) largest reserves',
            '🪨 Coal: 2nd largest producer (after China) | 85% Gondwana coal | Jharia = "Coal capital"',
            '🛢️ Petroleum: 85% imported | Mumbai High largest | Digboi oldest (1889)',
            '🔶 Bauxite: 5th largest reserves | Odisha ~50% | Panchpatmali largest',
            '⚙️ Manganese: Odisha (44%), MP (Balaghat highest grade)',
            '✨ Mica: India = World leader | Bihar (Koderma-Gaya) 70%',
            '☢️ Thorium: India #1 globally | Kerala monazite sands',
            '🔵 Chromite: 95% from Odisha (Sukinda Valley)',
            '🟡 Copper: DEFICIT | Singhbhum, Khetri, Malanjkhand',
            '📍 Chota Nagpur: Richest mineral belt = "Ruhr of India"',
            '🏛️ Coal India: World\'s largest coal company',
            '⚠️ 80% of India\'s mineral area unexplored'
        ],

        upscTraps: [
            {
                trap: 'Jharkhand has the largest iron ore reserves',
                clarity: 'WRONG! CHHATTISGARH (Bailadila) has largest RESERVES. ODISHA has highest PRODUCTION (~50%). Jharkhand is 3rd. Don\'t confuse reserves with production.'
            },
            {
                trap: 'India is self-sufficient in coal',
                clarity: 'WRONG! Despite being 2nd largest producer, India IMPORTS ~250 MT/year. Domestic coal is high-ash, low-grade. Coking coal for steel is imported. We produce ~900 MT but consume more.'
            },
            {
                trap: 'Mumbai High is onshore oil field',
                clarity: 'WRONG! Mumbai High is India\'s largest OFFSHORE field, 176 km from Mumbai coast. It produces ~60% of domestic oil. Ankleshwar (Gujarat) is largest ONSHORE.'
            },
            {
                trap: 'India has good copper reserves',
                clarity: 'WRONG! India is COPPER DEFICIT and imports. Domestic mines (Singhbhum, Khetri, Malanjkhand) produce limited quantities. Hindustan Copper Limited (HCL) operates them.'
            }
        ],

        revisionBox: {
            title: '⚡ 30-Second Revision',
            points: [
                'Iron: 4th producer, Odisha (50%), Bailadila (CG) largest reserves',
                'Coal: 2nd producer, Gondwana (96%), Damodar = "Coal capital", imports 250 MT',
                'Petroleum: 85% imported, Mumbai High (offshore), Ankleshwar (onshore)',
                'Bauxite: Odisha 50%, Panchpatmali largest, NALCO',
                'India leads: Mica, Thorium | Deficit: Copper, Petroleum',
                'Chota Nagpur: Richest belt (Jharkhand-Odisha-CG)',
                'Key PSUs: Coal India, ONGC, NALCO, HCL, UCIL'
            ]
        },

        pyqs: [
            {
                year: 2023,
                question: 'Discuss the distribution of iron ore in India and its significance for steel industry.',
                type: 'Mains'
            },
            {
                year: 2022,
                question: 'Why is India dependent on coal imports despite being a major producer?',
                type: 'Mains'
            },
            {
                year: 2021,
                question: 'Mumbai High oil field is located:',
                type: 'Prelims',
                options: ['On land in Gujarat', 'Offshore in Arabian Sea', 'In Assam', 'In Rajasthan']
            },
            {
                year: 2020,
                question: 'Discuss the petroleum and natural gas resources of India.',
                type: 'Mains'
            },
            {
                year: 2019,
                question: 'Analyze the challenges in India\'s mining sector.',
                type: 'Mains'
            }
        ]
    },

    // ============================================
    // TOPIC 4: ENERGY RESOURCES OF INDIA
    // ============================================
    {
        id: 'energy-resources-india',
        name: 'Energy Resources of India',
        icon: '⚡',
        category: 'india-resources',
        theme: 'industry',
        difficulty: 'hard',
        upscRelevance: 'very-high',

        mindMap: {
            central: 'Energy Resources',
            branches: [
                {
                    name: 'Conventional',
                    color: '#7F8C8D',
                    children: [
                        'Coal (55% electricity)',
                        'Petroleum & Gas',
                        'Nuclear',
                        'Large Hydro',
                        'Thermal power'
                    ]
                },
                {
                    name: 'Renewable',
                    color: '#27AE60',
                    children: [
                        'Solar',
                        'Wind',
                        'Small Hydro',
                        'Biomass',
                        'Geothermal, Tidal'
                    ]
                },
                {
                    name: 'Energy Mix',
                    color: '#3498DB',
                    children: [
                        'Coal dominant (55%)',
                        'Renewables rising (40%)',
                        'Nuclear (~3%)',
                        '500 GW RE target by 2030',
                        'Net Zero by 2070'
                    ]
                },
                {
                    name: 'Key Challenges',
                    color: '#E74C3C',
                    children: [
                        '85% oil imported',
                        'Coal quality issues',
                        'Grid integration',
                        'Storage needs',
                        'Energy poverty'
                    ]
                }
            ]
        },

        memoryHooks: [
            {
                type: 'mnemonic',
                title: 'Renewable Energy Sources',
                content: 'SWBG-Hot = Solar, Wind, Biomass, Geothermal, Hydro (small), Ocean/Tidal. "SWB Gets Hot!"',
                icon: '🧠'
            },
            {
                type: 'acronym',
                title: 'India\'s RE Targets',
                content: '500-50-45: 500 GW RE capacity by 2030, 50% energy from non-fossil by 2030, 45% emission intensity cut.',
                icon: '🎯'
            },
            {
                type: 'comparison',
                title: 'Thermal vs Renewable',
                content: 'Thermal (coal): 55% of electricity, polluting but reliable. Renewable: 40% capacity, clean but intermittent. Need both for transition!',
                icon: '⚖️'
            },
            {
                type: 'visual',
                title: 'Energy Trilemma',
                content: 'Three goals: SECURITY (reliable supply) + EQUITY (affordable access) + SUSTAINABILITY (clean). India struggles to balance all three!',
                icon: '△'
            }
        ],

        conceptBlocks: [
            {
                title: 'India\'s Energy Mix',
                icon: '📊',
                points: [
                    '⚡ INSTALLED CAPACITY (2023):',
                    '  • Total: ~425 GW',
                    '  • Coal: ~55% (235 GW)',
                    '  • Renewable: ~40% (170 GW)',
                    '    - Solar: ~70 GW',
                    '    - Wind: ~45 GW',
                    '    - Hydro: ~47 GW',
                    '    - Biomass: ~10 GW',
                    '  • Gas: ~6% (25 GW)',
                    '  • Nuclear: ~2% (7.5 GW)',
                    '',
                    '📈 ELECTRICITY GENERATION:',
                    '  • Coal contributes ~70% of actual generation',
                    '  • Renewable = lower plant load factor',
                    '  • Peak demand: ~220 GW',
                    '',
                    '🔋 PRIMARY ENERGY CONSUMPTION:',
                    '  • Coal: 55%',
                    '  • Oil: 30%',
                    '  • Natural Gas: 6%',
                    '  • Renewables: 5%',
                    '  • Nuclear + Hydro: 4%',
                    '',
                    '🌍 GLOBAL POSITION:',
                    '  • 3rd largest energy consumer (after US, China)',
                    '  • 4th largest electricity producer',
                    '  • 4th in renewable capacity',
                    '  • Per capita consumption: 1/3rd of global average'
                ]
            },
            {
                title: 'Thermal Power',
                icon: '🏭',
                points: [
                    '🪨 COAL-BASED (Dominant):',
                    '  • ~55% of installed capacity',
                    '  • ~70% of actual generation',
                    '  • Super critical technology adoption',
                    '  • Issues: High ash content (40%), emissions',
                    '',
                    '📍 MAJOR THERMAL PLANTS:',
                    '  • Vindhyachal (MP): Largest (4760 MW)',
                    '  • Mundra (Gujarat): Largest private (4620 MW)',
                    '  • Sipat (CG), Talcher (Odisha), Rihand (UP)',
                    '  • Korba (CG): Multiple units',
                    '',
                    '🏛️ KEY PLAYERS:',
                    '  • NTPC: Largest (Maharatna)',
                    '  • State GENCOs',
                    '  • Private: Tata Power, Adani, Essar',
                    '',
                    '⛽ GAS-BASED:',
                    '  • ~6% of capacity',
                    '  • Cleaner than coal',
                    '  • Issue: Gas availability, pricing',
                    '  • Plants: Kawas (Gujarat), Jhanor-Gandhar',
                    '',
                    '⚠️ CHALLENGES:',
                    '  • Coal supply issues (stock crisis)',
                    '  • Environmental pollution',
                    '  • Stranded assets risk',
                    '  • Phase-out pressure (climate)'
                ]
            },
            {
                title: 'Hydropower',
                icon: '💧',
                points: [
                    '📊 STATUS:',
                    '  • Installed: ~47 GW (large + small)',
                    '  • Large Hydro (>25 MW): ~42 GW',
                    '  • Small Hydro (<25 MW): ~5 GW (renewable)',
                    '  • Potential: 145 GW (only 30% utilized)',
                    '',
                    '📍 MAJOR PLANTS:',
                    '  • TEHRI (UK): 2400 MW (largest)',
                    '  • KOYNA (MH): 1960 MW',
                    '  • SRISAILAM (AP): 1670 MW',
                    '  • BHAKRA-NANGAL (HP-Punjab): 1325 MW',
                    '  • SARDAR SAROVAR (Gujarat): 1450 MW',
                    '',
                    '📍 HIGHEST POTENTIAL STATES:',
                    '  • Arunachal Pradesh: 50,000 MW potential',
                    '  • Uttarakhand, HP, J&K',
                    '  • NE region: 60% of total potential',
                    '',
                    '⚠️ ISSUES:',
                    '  • Environmental concerns (submergence)',
                    '  • Rehabilitation of displaced',
                    '  • Seismic zone risks (Tehri)',
                    '  • Inter-state disputes',
                    '  • Geological challenges in Himalayas',
                    '',
                    '✅ ADVANTAGES:',
                    '  • Clean, renewable',
                    '  • Peak load management',
                    '  • Flood control',
                    '  • Irrigation benefit'
                ]
            },
            {
                title: 'Nuclear Power',
                icon: '☢️',
                points: [
                    '📊 STATUS:',
                    '  • Installed: 7.5 GW (22 reactors)',
                    '  • ~3% of electricity',
                    '  • Under construction: 8 reactors (6.7 GW)',
                    '  • Target: 22.5 GW by 2031',
                    '',
                    '📍 NUCLEAR PLANTS:',
                    '  • TARAPUR (MH): First (1969), 1400 MW',
                    '  • KUDANKULAM (TN): Largest (2x1000 MW)',
                    '    - Russian collaboration (VVER)',
                    '  • RAWATBHATA (Rajasthan): 1180 MW',
                    '  • KAIGA (Karnataka): 880 MW',
                    '  • KAKRAPAR (Gujarat): 1540 MW',
                    '  • KALPAKKAM (TN): Prototype Fast Breeder',
                    '  • NARORA (UP): 440 MW',
                    '',
                    '🔬 THREE-STAGE PROGRAMME (Homi Bhabha):',
                    '  • Stage 1: PHWR (Pressurized Heavy Water)',
                    '    - Uses natural uranium, heavy water moderator',
                    '    - 18 reactors operational',
                    '  • Stage 2: Fast Breeder Reactors (FBR)',
                    '    - PFBR at Kalpakkam (500 MW)',
                    '    - Breeds more fuel than consumes',
                    '  • Stage 3: Thorium-based',
                    '    - India has 25% of world\'s thorium',
                    '    - AHWR (Advanced Heavy Water Reactor)',
                    '',
                    '🏛️ KEY BODIES:',
                    '  • NPCIL: Nuclear Power Corporation',
                    '  • DAE: Department of Atomic Energy',
                    '  • BARC: Bhabha Atomic Research Centre',
                    '  • AERB: Regulatory body'
                ]
            },
            {
                title: 'Solar Energy',
                icon: '☀️',
                points: [
                    '📊 STATUS:',
                    '  • Installed: ~70 GW (2023)',
                    '  • 5th largest globally',
                    '  • Target: 300 GW by 2030',
                    '  • Cost: ₹2-3/unit (cheapest now!)',
                    '',
                    '📍 MAJOR SOLAR PARKS:',
                    '  • BHADLA (Rajasthan): World\'s largest (2245 MW)',
                    '  • PAVAGADA (Karnataka): 2050 MW',
                    '  • KURNOOL (AP): 1000 MW',
                    '  • REWA (MP): 750 MW',
                    '  • KAMUTHI (TN): 648 MW',
                    '',
                    '📍 HIGH POTENTIAL STATES:',
                    '  • Rajasthan: Highest (5-7 kWh/m²/day)',
                    '  • Gujarat, MP, Maharashtra',
                    '  • Ladakh: Highest insolation',
                    '',
                    '🛠️ TYPES:',
                    '  • GRID-CONNECTED (majority):',
                    '    - Large solar parks',
                    '    - Rooftop solar',
                    '  • OFF-GRID:',
                    '    - Rural areas, solar pumps',
                    '  • CSP (Concentrated Solar Power):',
                    '    - Limited (1 plant, Dhursar Rajasthan)',
                    '',
                    '🏛️ POLICIES:',
                    '  • National Solar Mission (2010): JNNSM',
                    '  • PM-KUSUM: Solar pumps for farmers',
                    '  • Rooftop solar subsidy',
                    '  • Solar park scheme',
                    '  • ISA: International Solar Alliance (HQ: Gurugram)'
                ]
            },
            {
                title: 'Wind Energy',
                icon: '🌬️',
                points: [
                    '📊 STATUS:',
                    '  • Installed: ~45 GW',
                    '  • 4th largest globally',
                    '  • Potential: 302 GW (onshore)',
                    '  • Offshore: 70 GW potential (untapped)',
                    '',
                    '📍 STATE-WISE CAPACITY:',
                    '  • Tamil Nadu: Highest (~10 GW)',
                    '  • Gujarat: 2nd (~9 GW)',
                    '  • Maharashtra, Karnataka, Rajasthan',
                    '  • Southern and western states dominate',
                    '',
                    '📍 WIND ZONES:',
                    '  • Coastal areas: Tamil Nadu, Gujarat, Maharashtra',
                    '  • Deccan plateau: Karnataka, AP',
                    '  • Wind speed: >5 m/s required',
                    '',
                    '🌊 OFFSHORE WIND:',
                    '  • Untapped: 70 GW potential',
                    '  • First project: Gujarat coast (planned)',
                    '  • Higher capacity factors',
                    '  • Higher costs, technical challenges',
                    '',
                    '🏭 INDUSTRY:',
                    '  • Suzlon: India\'s largest',
                    '  • Inox Wind',
                    '  • Foreign: Vestas, Siemens Gamesa',
                    '',
                    '⚠️ CHALLENGES:',
                    '  • Intermittency (seasonal, daily)',
                    '  • Land acquisition',
                    '  • Grid integration',
                    '  • Old turbines (low capacity, repowering needed)'
                ]
            },
            {
                title: 'Other Renewables & Future',
                icon: '🔋',
                points: [
                    '🌿 BIOMASS:',
                    '  • Capacity: ~10 GW',
                    '  • Sources: Agri waste, bagasse, wood',
                    '  • Biogas: Rural cooking, electricity',
                    '  • Ethanol blending: 20% by 2025',
                    '',
                    '🌊 OCEAN ENERGY:',
                    '  • Tidal: Gulf of Kutch, Gulf of Khambhat potential',
                    '  • Wave energy: Untapped',
                    '  • Very limited development',
                    '',
                    '🌋 GEOTHERMAL:',
                    '  • Potential: Limited (10,000 MW estimated)',
                    '  • Hot springs: Puga (Ladakh), Tattapani (CG)',
                    '  • No commercial plant yet',
                    '',
                    '🔋 ENERGY STORAGE:',
                    '  • Battery Storage: Growing',
                    '  • Pumped Hydro: Kadana, Purulia',
                    '  • Critical for renewable integration',
                    '  • Green hydrogen: Future focus',
                    '',
                    '🎯 FUTURE TARGETS:',
                    '  • 500 GW non-fossil by 2030',
                    '  • 50% power from non-fossil by 2030',
                    '  • Net Zero emissions by 2070',
                    '  • National Green Hydrogen Mission',
                    '',
                    '⚠️ KEY CHALLENGES:',
                    '  • Grid stability with high RE',
                    '  • Storage technology & costs',
                    '  • Financing transition',
                    '  • Coal phase-down (just transition)',
                    '  • Energy security vs climate'
                ]
            }
        ],

        diagrams: [
            {
                title: 'India\'s Energy Mix',
                type: 'pie-chart',
                description: 'Pie chart of installed capacity: Coal (55%), Solar (16%), Wind (10%), Hydro (11%), Gas (6%), Nuclear (2%). Show 425 GW total.'
            },
            {
                title: 'Solar & Wind Resource Map',
                type: 'map',
                description: 'India map showing: Solar irradiation (Rajasthan, Gujarat - high), Wind zones (TN coast, Gujarat coast - high). Use gradient colors.'
            },
            {
                title: 'Nuclear Plants Location',
                type: 'map',
                description: 'Map marking all nuclear plants: Tarapur, Rawatbhata, Kalpakkam, Kudankulam, Kaiga, Kakrapar, Narora. Show capacity at each.'
            },
            {
                title: 'Three-Stage Nuclear Programme',
                type: 'flowchart',
                description: 'Flowchart: Stage 1 (PHWR, natural uranium) → Stage 2 (FBR, plutonium breeding) → Stage 3 (Thorium utilization). Show fuel cycle.'
            },
            {
                title: 'Renewable Energy Growth',
                type: 'line-chart',
                description: 'Line chart showing RE capacity growth: 2014 (35 GW) → 2020 (90 GW) → 2023 (170 GW) → 2030 Target (500 GW). Show solar and wind separately.'
            }
        ],

        quickFacts: [
            '⚡ Total installed capacity: ~425 GW | Coal: 55%, RE: 40%',
            '☀️ Solar: ~70 GW | Bhadla (Rajasthan): World\'s largest solar park',
            '🌬️ Wind: ~45 GW | Tamil Nadu highest | Offshore: 70 GW untapped',
            '💧 Hydro: ~47 GW | Tehri largest (2400 MW) | NE has 60% potential',
            '☢️ Nuclear: 7.5 GW, 22 reactors | Kudankulam largest | Thorium reserves: World #1',
            '🎯 Targets: 500 GW RE by 2030 | Net Zero by 2070',
            '📊 India: 3rd largest energy consumer, 85% oil imported',
            '🏛️ Key bodies: NTPC, NPCIL, MNRE, CEA, ISA',
            '☀️ Solar cost: ₹2-3/unit (cheapest source now)',
            '🔋 Green Hydrogen Mission: Future focus for decarbonization',
            '⚠️ Coal: 70% of actual generation despite 55% capacity',
            '🌍 Per capita consumption: 1/3rd of global average'
        ],

        upscTraps: [
            {
                trap: 'Renewable energy is dominant in India\'s power generation',
                clarity: 'WRONG IN GENERATION TERMS! While RE is ~40% of CAPACITY, it produces only ~25% of GENERATION. Coal with 55% capacity produces ~70% of generation. RE has lower plant load factor (intermittent).'
            },
            {
                trap: 'India has achieved energy security',
                clarity: 'WRONG! India imports: 85% of petroleum, 50% of natural gas, ~25% of coal. Energy security remains major concern. We\'re 3rd largest consumer but heavily import-dependent.'
            },
            {
                trap: 'Solar energy is expensive in India',
                clarity: 'OUTDATED! Solar is now CHEAPEST at ₹2-3/unit. It was expensive earlier (₹17/unit in 2010). Massive cost reduction makes it competitive even without subsidy now.'
            },
            {
                trap: 'Large hydro is classified as renewable energy',
                clarity: 'CHANGED IN 2019! Large hydro (>25 MW) is NOW classified as renewable energy (earlier it wasn\'t). This was done to boost RE capacity towards targets. Small hydro (<25 MW) was always RE.'
            }
        ],

        revisionBox: {
            title: '⚡ 30-Second Revision',
            points: [
                'Total: 425 GW | Coal: 55% capacity (70% generation) | RE: 40% capacity',
                'Solar: 70 GW (Bhadla largest) | Wind: 45 GW (TN highest) | Hydro: 47 GW (Tehri)',
                'Nuclear: 7.5 GW, 22 reactors | Three-stage programme | Thorium: India #1',
                'Targets: 500 GW RE by 2030 | 50% non-fossil | Net Zero 2070',
                'Import dependency: Oil 85%, Gas 50%, Coal 25%',
                'Cost: Solar cheapest (₹2-3/unit) | Wind competitive',
                'Future: Green Hydrogen Mission, Energy storage critical'
            ]
        },

        pyqs: [
            {
                year: 2023,
                question: 'Discuss India\'s three-stage nuclear power programme and its relevance.',
                type: 'Mains'
            },
            {
                year: 2022,
                question: 'Examine the potential and challenges of renewable energy in India.',
                type: 'Mains'
            },
            {
                year: 2021,
                question: 'India\'s largest solar park is located in:',
                type: 'Prelims',
                options: ['Tamil Nadu', 'Rajasthan', 'Gujarat', 'Andhra Pradesh']
            },
            {
                year: 2020,
                question: 'Discuss India\'s energy security challenges and the way forward.',
                type: 'Mains'
            },
            {
                year: 2019,
                question: 'What is Green Hydrogen? Discuss its potential for India.',
                type: 'Mains'
            }
        ]
    },

    // ============================================
    // TOPIC 5: IRRIGATION IN INDIA
    // ============================================
    {
        id: 'irrigation-india',
        name: 'Irrigation in India',
        icon: '🚿',
        category: 'india-resources',
        theme: 'agriculture',
        difficulty: 'medium',
        upscRelevance: 'very-high',

        mindMap: {
            central: 'Irrigation',
            branches: [
                {
                    name: 'Sources',
                    color: '#3498DB',
                    children: [
                        'Canals (24%)',
                        'Wells & Tubewells (63%)',
                        'Tanks (3%)',
                        'Other sources (10%)',
                        'Sprinkler, Drip'
                    ]
                },
                {
                    name: 'Canal Systems',
                    color: '#27AE60',
                    children: [
                        'Indira Gandhi Canal',
                        'Upper Ganga Canal',
                        'Bhakra Canal',
                        'Krishna-Godavari',
                        'Narmada Canal'
                    ]
                },
                {
                    name: 'Modern Methods',
                    color: '#E67E22',
                    children: [
                        'Drip irrigation',
                        'Sprinkler system',
                        'Micro-irrigation',
                        'PMKSY scheme',
                        'Per Drop More Crop'
                    ]
                },
                {
                    name: 'Issues',
                    color: '#E74C3C',
                    children: [
                        'Groundwater depletion',
                        'Waterlogging',
                        'Salinity',
                        'Inefficient use',
                        'Interstate disputes'
                    ]
                }
            ]
        },

        memoryHooks: [
            {
                type: 'mnemonic',
                title: 'Irrigation Sources Order',
                content: 'WeCaTaO = Wells (63%), Canals (24%), Tanks (3%), Others (10%). "We Can Take Over" - Wells dominate!',
                icon: '🧠'
            },
            {
                type: 'acronym',
                title: 'PMKSY Components',
                content: 'AIBP-HKKP-PDMC-WD = Accelerated Irrigation, Har Khet Ko Pani, Per Drop More Crop, Watershed Development',
                icon: '🔤'
            },
            {
                type: 'comparison',
                title: 'Flood vs Drip Irrigation',
                content: 'Flood: 30-40% efficiency, waterlogging risk. Drip: 90% efficiency, saves 40-50% water. Same water, 3x more land with drip!',
                icon: '💧'
            },
            {
                type: 'story',
                title: 'Indira Gandhi Canal',
                content: 'Longest canal (649 km), starts at Harike (Punjab), ends in Thar Desert (Rajasthan), turned desert into farmland. Called "Lifeline of Desert"!',
                icon: '🏜️'
            }
        ],

        conceptBlocks: [
            {
                title: 'Irrigation Statistics',
                icon: '📊',
                points: [
                    '📏 IRRIGATION COVERAGE:',
                    '  • Net Irrigated Area: 68.4 million ha',
                    '  • Gross Irrigated Area: 97.3 million ha',
                    '  • Irrigation intensity: 142%',
                    '  • % of net sown area irrigated: ~48%',
                    '  • Rainfed agriculture: ~52% still',
                    '',
                    '💧 SOURCE-WISE DISTRIBUTION:',
                    '  • Groundwater (Wells + Tubewells): 63%',
                    '  • Canals: 24%',
                    '  • Tanks: 3%',
                    '  • Other sources: 10%',
                    '  • Shift from surface to groundwater over decades',
                    '',
                    '📍 STATE-WISE COVERAGE:',
                    '  • HIGHEST IRRIGATED (% of cropped area):',
                    '    - Punjab: 99%',
                    '    - Haryana: 90%',
                    '    - Uttar Pradesh: 76%',
                    '    - Tamil Nadu: 60%',
                    '  • LOWEST IRRIGATED:',
                    '    - Mizoram: 2%',
                    '    - Arunachal: 5%',
                    '    - Jharkhand: 5%',
                    '    - Assam: 10%',
                    '',
                    '🌾 IRRIGATION POTENTIAL:',
                    '  • Ultimate potential: 139.9 million ha',
                    '  • Utilized: ~100 million ha',
                    '  • Gap: ~40 million ha still to develop'
                ]
            },
            {
                title: 'Canal Irrigation',
                icon: '🌊',
                points: [
                    '📊 OVERVIEW:',
                    '  • 24% of irrigation',
                    '  • Northern plains & South deltas',
                    '  • Declining share (was 40% in 1960s)',
                    '',
                    '🏗️ MAJOR CANAL SYSTEMS:',
                    '',
                    '📍 INDIRA GANDHI CANAL (Rajasthan):',
                    '  • LONGEST canal in India (649 km)',
                    '  • Source: Harike Barrage (Beas-Sutlej)',
                    '  • Irrigates: Thar Desert region',
                    '  • Districts: Ganganagar, Bikaner, Jaisalmer',
                    '  • Transformed desert into wheat-cotton belt',
                    '  • Issues: Waterlogging, salinity',
                    '',
                    '📍 UPPER GANGA CANAL (UP):',
                    '  • Source: Haridwar',
                    '  • One of oldest (1854, British)',
                    '  • Irrigates: Western UP',
                    '',
                    '📍 BHAKRA CANAL SYSTEM:',
                    '  • Source: Bhakra Dam (Sutlej)',
                    '  • Irrigates: Punjab, Haryana, Rajasthan',
                    '',
                    '📍 NARMADA CANAL (Gujarat):',
                    '  • Source: Sardar Sarovar Dam',
                    '  • Irrigates: Gujarat, Rajasthan',
                    '  • 458 km main canal',
                    '',
                    '📍 KRISHNA-GODAVARI CANALS (AP, TS):',
                    '  • Delta irrigation',
                    '  • Nagarjuna Sagar, Srisailam canals',
                    '',
                    '⚠️ ISSUES:',
                    '  • Waterlogging in command areas',
                    '  • Salinity buildup',
                    '  • Tail-enders don\'t get water',
                    '  • Maintenance problems',
                    '  • Low efficiency (30-40%)'
                ]
            },
            {
                title: 'Groundwater Irrigation',
                icon: '🔽',
                points: [
                    '📊 OVERVIEW:',
                    '  • 63% of irrigation (dominant)',
                    '  • Wells + Tubewells',
                    '  • India: Largest groundwater user globally',
                    '  • 25% of global groundwater extraction',
                    '',
                    '📈 GROWTH:',
                    '  • 1960: 30% of irrigation',
                    '  • 2020: 63% of irrigation',
                    '  • Tubewells: >30 million in India',
                    '  • Green Revolution drove this shift',
                    '',
                    '📍 DISTRIBUTION:',
                    '  • High use: Punjab, Haryana, UP, Rajasthan, Gujarat',
                    '  • Low use: NE states, hilly areas',
                    '',
                    '⚠️ GROUNDWATER CRISIS:',
                    '  • Over-exploited blocks: 1,186 (17%)',
                    '  • Critical blocks: 313 (5%)',
                    '  • Semi-critical: 972 (14%)',
                    '  • Water table falling: 3-5m/year in critical areas',
                    '',
                    '📍 WORST AFFECTED:',
                    '  • Punjab: 76% blocks over-exploited',
                    '  • Haryana: 67% blocks over-exploited',
                    '  • Rajasthan: 41%',
                    '  • Tamil Nadu: 45%',
                    '',
                    '💡 REASONS FOR OVER-EXPLOITATION:',
                    '  • Free/subsidized electricity for pumping',
                    '  • No regulation of extraction',
                    '  • Paddy cultivation in water-scarce areas',
                    '  • MSP incentivizing water-intensive crops',
                    '',
                    '🛠️ SOLUTIONS:',
                    '  • Metered electricity',
                    '  • Crop diversification',
                    '  • Rainwater harvesting',
                    '  • Artificial recharge',
                    '  • Participatory groundwater management'
                ]
            },
            {
                title: 'Modern Irrigation Methods',
                icon: '💧',
                points: [
                    '💦 DRIP IRRIGATION:',
                    '  • Water directly to root zone',
                    '  • Efficiency: 90%+',
                    '  • Saves: 40-50% water',
                    '  • Suitable: Orchards, vegetables, sugarcane',
                    '  • Coverage: ~8 million ha in India',
                    '',
                    '🌧️ SPRINKLER IRRIGATION:',
                    '  • Water sprayed like rain',
                    '  • Efficiency: 70-80%',
                    '  • Suitable: Field crops, undulating terrain',
                    '  • Coverage: ~5 million ha',
                    '',
                    '📊 MICRO-IRRIGATION STATUS:',
                    '  • Total area: ~13 million ha (2023)',
                    '  • Potential: 69.5 million ha',
                    '  • Coverage: Only ~20% of potential',
                    '',
                    '📍 STATE-WISE ADOPTION:',
                    '  • Maharashtra: Highest area under micro-irrigation',
                    '  • Karnataka, Gujarat, AP, Tamil Nadu',
                    '',
                    '🏛️ PMKSY (Pradhan Mantri Krishi Sinchayee Yojana):',
                    '  • Launched: 2015',
                    '  • Motto: "Har Khet Ko Pani" (Water to every field)',
                    '  • Components:',
                    '    - AIBP: Accelerated Irrigation Benefit Programme',
                    '    - HKKP: Har Khet Ko Pani (surface water)',
                    '    - PDMC: Per Drop More Crop (micro-irrigation)',
                    '    - Watershed Development',
                    '  • Subsidy: 55% for small farmers on drip/sprinkler',
                    '',
                    '🌱 PM-KUSUM:',
                    '  • Solar pumps for irrigation',
                    '  • Reduces diesel/electricity dependence',
                    '  • 3 components for farmers'
                ]
            },
            {
                title: 'Irrigation Issues & Solutions',
                icon: '⚠️',
                points: [
                    '💧 WATERLOGGING:',
                    '  • Cause: Over-irrigation, poor drainage',
                    '  • Areas: Indira Gandhi Canal command, Punjab',
                    '  • Effect: Roots suffocate, yield drops',
                    '  • Solution: Drainage, bio-drainage (Eucalyptus)',
                    '',
                    '🧂 SALINITY/ALKALINITY:',
                    '  • Cause: High evaporation, poor drainage',
                    '  • Salt accumulates on soil surface',
                    '  • Areas: Punjab, Haryana, Rajasthan, Gujarat',
                    '  • Effect: Soil becomes unfit for crops',
                    '  • Solution: Gypsum application, leaching, drainage',
                    '',
                    '⚖️ INTERSTATE DISPUTES:',
                    '  • Kaveri: Karnataka vs Tamil Nadu',
                    '  • Krishna: MH vs Karnataka vs AP vs TS',
                    '  • Mahanadi: Odisha vs Chhattisgarh',
                    '  • Narmada: MP vs Gujarat',
                    '  • Ravi-Beas: Punjab vs Haryana',
                    '',
                    '🔻 GROUNDWATER DEPLETION:',
                    '  • Already covered above',
                    '  • Long-term sustainability threat',
                    '',
                    '💸 INEFFICIENCY:',
                    '  • Canal: 30-40% efficiency',
                    '  • Flood irrigation: 30-40%',
                    '  • 60-70% water wasted!',
                    '  • Solution: Micro-irrigation, lining canals',
                    '',
                    '🛡️ POLICY MEASURES:',
                    '  • PMKSY: Comprehensive irrigation programme',
                    '  • MGNREGA: Watershed works',
                    '  • Jal Shakti Abhiyan',
                    '  • Atal Bhujal Yojana (groundwater)',
                    '  • Model Groundwater Bill'
                ]
            }
        ],

        diagrams: [
            {
                title: 'Irrigation Sources - Pie Chart',
                type: 'pie-chart',
                description: 'Pie chart: Wells & Tubewells (63%), Canals (24%), Tanks (3%), Others (10%). Show dominance of groundwater.'
            },
            {
                title: 'Major Canal Systems Map',
                type: 'map',
                description: 'India map marking: Indira Gandhi Canal (Rajasthan), Upper Ganga Canal (UP), Bhakra Canal (Punjab), Narmada Canal (Gujarat), Krishna-Godavari canals (AP). Show source barrages.'
            },
            {
                title: 'Groundwater Exploitation Map',
                type: 'map',
                description: 'Map showing groundwater stress: Over-exploited (red - Punjab, Haryana, Rajasthan), Critical (orange), Semi-critical (yellow), Safe (green - NE, hills).'
            },
            {
                title: 'Drip vs Flood Irrigation',
                type: 'comparison-diagram',
                description: 'Side-by-side: Flood (water everywhere, 30-40% efficiency, waterlogging) vs Drip (targeted, 90% efficiency, saves 40-50% water).'
            },
            {
                title: 'State-wise Irrigation Coverage',
                type: 'bar-chart',
                description: 'Horizontal bars: Punjab (99%), Haryana (90%), UP (76%), Tamil Nadu (60%), Maharashtra (20%), Jharkhand (5%). Show contrast.'
            }
        ],

        quickFacts: [
            '💧 Net irrigated area: 68.4 million ha (~48% of net sown area)',
            '📊 Sources: Wells/Tubewells (63%), Canals (24%), Tanks (3%)',
            '🌍 India: World\'s largest groundwater user (25% of global)',
            '🏗️ Indira Gandhi Canal: Longest (649 km), Harike to Thar Desert',
            '⚠️ Punjab: 76% blocks over-exploited for groundwater',
            '💦 Drip efficiency: 90% | Flood irrigation: 30-40%',
            '📊 Micro-irrigation: 13 million ha (20% of potential)',
            '🏛️ PMKSY: "Har Khet Ko Pani" + "Per Drop More Crop"',
            '📍 Highest irrigation: Punjab (99%) | Lowest: Mizoram (2%)',
            '🧂 Salinity affects: 6.73 million ha in India',
            '📉 Water table falling: 3-5 m/year in critical areas',
            '🎯 Ultimate irrigation potential: 139.9 million ha'
        ],

        upscTraps: [
            {
                trap: 'Canal irrigation is the major source in India',
                clarity: 'OUTDATED! Canals WAS major (40% in 1960s). Now GROUNDWATER (wells + tubewells) dominates at 63%. Canals are only 24%. Green Revolution shifted dependence to groundwater.'
            },
            {
                trap: 'North India has the highest irrigation',
                clarity: 'NEED NUANCE! North (Punjab, Haryana, UP) has high PERCENTAGE irrigated (99%, 90%). But SOUTH (AP, TN) has extensive CANAL systems in deltas. NE has very low irrigation despite high rainfall.'
            },
            {
                trap: 'Drip irrigation is used only for vegetables',
                clarity: 'WRONG! Drip is used for many crops: Sugarcane (major), Cotton, Orchards (mango, citrus), Vineyards, Vegetables, even Paddy experiments. Maharashtra uses drip for sugarcane extensively.'
            },
            {
                trap: 'Groundwater is a renewable resource, so overuse is fine',
                clarity: 'DANGEROUS ASSUMPTION! Groundwater recharge is SLOW (decades). Extraction is FAST. Many aquifers are being mined at unsustainable rates. Punjab\'s extraction is 165% of recharge!'
            }
        ],

        revisionBox: {
            title: '⚡ 30-Second Revision',
            points: [
                'Sources: Groundwater 63% (dominant), Canals 24%, Tanks 3%',
                'Net irrigated: 68.4 M ha (~48% of cropped area)',
                'Groundwater crisis: Punjab 76%, Haryana 67% over-exploited',
                'Major canals: Indira Gandhi (longest), Upper Ganga, Bhakra, Narmada',
                'Micro-irrigation: 13 M ha | Efficiency: Drip 90% vs Flood 35%',
                'PMKSY: Har Khet Ko Pani + Per Drop More Crop',
                'Issues: Waterlogging, Salinity, Groundwater depletion, Interstate disputes'
            ]
        },

        pyqs: [
            {
                year: 2023,
                question: 'Discuss the significance of micro-irrigation in Indian agriculture.',
                type: 'Mains'
            },
            {
                year: 2022,
                question: 'Examine the causes and consequences of groundwater depletion in India.',
                type: 'Mains'
            },
            {
                year: 2021,
                question: 'The major source of irrigation in India is:',
                type: 'Prelims',
                options: ['Canals', 'Tanks', 'Wells and Tubewells', 'Rivers']
            },
            {
                year: 2020,
                question: 'Discuss the objectives and components of PMKSY.',
                type: 'Mains'
            },
            {
                year: 2019,
                question: 'What are the issues related to canal irrigation? Suggest measures.',
                type: 'Mains'
            }
        ]
    },

    // ============================================
    // TOPIC 6: CROPPING PATTERNS & SEASONS
    // ============================================
    {
        id: 'cropping-patterns-india',
        name: 'Cropping Patterns & Seasons',
        icon: '🌾',
        category: 'india-resources',
        theme: 'agriculture',
        difficulty: 'medium',
        upscRelevance: 'high',

        mindMap: {
            central: 'Cropping Seasons',
            branches: [
                {
                    name: 'Kharif (Jun-Oct)',
                    color: '#27AE60',
                    children: [
                        'Rice, Maize, Jowar',
                        'Bajra, Ragi',
                        'Cotton, Jute',
                        'Groundnut, Soybean',
                        'Monsoon dependent'
                    ]
                },
                {
                    name: 'Rabi (Nov-Mar)',
                    color: '#3498DB',
                    children: [
                        'Wheat, Barley',
                        'Gram, Peas',
                        'Mustard, Linseed',
                        'Irrigated mainly',
                        'Winter crops'
                    ]
                },
                {
                    name: 'Zaid (Mar-Jun)',
                    color: '#E67E22',
                    children: [
                        'Watermelon, Muskmelon',
                        'Cucumber, Vegetables',
                        'Moong, Fodder',
                        'Irrigated essential',
                        'Summer season'
                    ]
                },
                {
                    name: 'Patterns',
                    color: '#9B59B6',
                    children: [
                        'Monoculture',
                        'Mixed cropping',
                        'Intercropping',
                        'Relay cropping',
                        'Crop rotation'
                    ]
                }
            ]
        },

        memoryHooks: [
            {
                type: 'mnemonic',
                title: 'Kharif Crops',
                content: 'Rice-Cotton-Jowar-Bajra-Groundnut = "Rich Cotton Jacket Brings Glamour!" All sown with monsoon.',
                icon: '🌧️'
            },
            {
                type: 'mnemonic',
                title: 'Rabi Crops',
                content: 'Wheat-Barley-Gram-Mustard-Peas = "Wise Boys Get More Prizes!" Sown in winter.',
                icon: '❄️'
            },
            {
                type: 'comparison',
                title: 'Kharif vs Rabi',
                content: 'Kharif = Khan (monsoon king), needs rain. Rabi = Rabbi (winter religious leader), needs irrigation/WD. Easy memory: K=Khan=Rain, R=Rabbi=Winter.',
                icon: '⚖️'
            },
            {
                type: 'story',
                title: 'Zaid - The Short Season',
                content: 'Zaid is the "quick crop" season. Hot summer (Mar-Jun), only irrigated crops. Farmers grow fast crops (watermelon) between Rabi harvest and Kharif sowing.',
                icon: '🍉'
            }
        ],

        conceptBlocks: [
            {
                title: 'Kharif Season (June-October)',
                icon: '🌧️',
                points: [
                    '📅 TIMING:',
                    '  • Sowing: June-July (with monsoon onset)',
                    '  • Harvesting: September-October',
                    '  • Duration: ~4-5 months',
                    '  • Also called: Monsoon crops / Autumn crops',
                    '',
                    '🌧️ WATER REQUIREMENT:',
                    '  • Dependent on SW monsoon',
                    '  • High water requirement',
                    '  • Monsoon failure = Kharif crisis',
                    '',
                    '🌾 MAJOR CROPS:',
                    '  • CEREALS: Rice (major), Maize, Jowar, Bajra, Ragi',
                    '  • PULSES: Arhar/Tur (pigeon pea), Urad, Moong',
                    '  • OILSEEDS: Groundnut, Soybean, Sunflower, Castor',
                    '  • CASH CROPS: Cotton, Jute, Sugarcane (planted)',
                    '  • VEGETABLES: Various',
                    '',
                    '📍 REGIONAL DOMINANCE:',
                    '  • Rice: Eastern, Southern India (WB, Odisha, AP, TN)',
                    '  • Maize: MP, Karnataka, Bihar',
                    '  • Jowar-Bajra: Maharashtra, Karnataka, Rajasthan',
                    '  • Cotton: Gujarat, Maharashtra, Punjab',
                    '  • Jute: WB, Bihar, Assam',
                    '',
                    '📊 SHARE:',
                    '  • ~50% of total foodgrain production',
                    '  • Rice is largest Kharif crop'
                ]
            },
            {
                title: 'Rabi Season (November-March)',
                icon: '❄️',
                points: [
                    '📅 TIMING:',
                    '  • Sowing: October-November (after monsoon)',
                    '  • Harvesting: March-April',
                    '  • Duration: ~4-5 months',
                    '  • Also called: Winter crops / Spring harvest',
                    '',
                    '💧 WATER REQUIREMENT:',
                    '  • Needs irrigation OR residual moisture',
                    '  • Western Disturbances provide some rain',
                    '  • Lower water requirement than Kharif',
                    '',
                    '🌾 MAJOR CROPS:',
                    '  • CEREALS: Wheat (major), Barley',
                    '  • PULSES: Gram (chana), Peas, Lentil (masoor)',
                    '  • OILSEEDS: Mustard, Linseed, Sunflower',
                    '  • VEGETABLES: Potato, Onion, Tomato',
                    '',
                    '📍 REGIONAL DOMINANCE:',
                    '  • Wheat: Punjab, Haryana, UP (Indo-Gangetic)',
                    '  • Barley: UP, Rajasthan, MP',
                    '  • Gram: MP, Maharashtra, Rajasthan',
                    '  • Mustard: Rajasthan, UP, Haryana',
                    '',
                    '📊 SHARE:',
                    '  • ~50% of foodgrain production',
                    '  • Wheat is largest Rabi crop',
                    '  • More stable than Kharif (irrigated)'
                ]
            },
            {
                title: 'Zaid Season (March-June)',
                icon: '☀️',
                points: [
                    '📅 TIMING:',
                    '  • Sowing: March (after Rabi harvest)',
                    '  • Harvesting: June (before Kharif sowing)',
                    '  • Duration: ~3 months (short)',
                    '  • Also called: Summer crops',
                    '',
                    '💧 WATER REQUIREMENT:',
                    '  • MUST have irrigation (summer heat)',
                    '  • No rainfall in this period',
                    '  • High evaporation',
                    '',
                    '🌾 MAJOR CROPS:',
                    '  • VEGETABLES: Watermelon, Muskmelon, Cucumber',
                    '  • PULSES: Moong, Urad (short duration varieties)',
                    '  • FODDER CROPS: For livestock',
                    '  • VEGETABLES: Bitter gourd, Pumpkin',
                    '',
                    '📍 AREAS:',
                    '  • River beds, canal-irrigated areas',
                    '  • UP, Bihar, Punjab, Haryana (riverine)',
                    '  • Karnataka, AP (irrigated pockets)',
                    '',
                    '📊 SIGNIFICANCE:',
                    '  • Small share of total production',
                    '  • Important for vegetables, fruits',
                    '  • Provides income between main seasons'
                ]
            },
            {
                title: 'Cropping Patterns',
                icon: '🔄',
                points: [
                    '🌱 MONOCULTURE:',
                    '  • Same crop repeatedly',
                    '  • Commercial farming practice',
                    '  • Issue: Soil exhaustion, pest buildup',
                    '  • Example: Wheat-Wheat in Punjab',
                    '',
                    '🌾 MIXED CROPPING:',
                    '  • Two or more crops grown together',
                    '  • Same field, mixed seeds',
                    '  • Risk diversification',
                    '  • Traditional practice',
                    '  • Example: Wheat + Gram, Groundnut + Bajra',
                    '',
                    '📏 INTERCROPPING:',
                    '  • Two or more crops in ROWS',
                    '  • Alternate rows pattern',
                    '  • Scientific planning',
                    '  • Better than mixed cropping',
                    '  • Example: Sugarcane + Onion rows',
                    '',
                    '🔄 CROP ROTATION:',
                    '  • Different crops in sequence',
                    '  • Over multiple seasons/years',
                    '  • Maintains soil fertility',
                    '  • Legume → Cereal recommended',
                    '  • Example: Rice-Wheat-Pulse rotation',
                    '',
                    '🔗 RELAY CROPPING:',
                    '  • Second crop sown before first harvested',
                    '  • Overlapping growing periods',
                    '  • Efficient land use',
                    '  • Example: Maize followed by potato',
                    '',
                    '📊 CROPPING INTENSITY:',
                    '  • (Gross cropped area / Net sown area) × 100',
                    '  • India average: ~142%',
                    '  • Punjab: 190% (high multiple cropping)',
                    '  • NE states: <110% (single crop)'
                ]
            },
            {
                title: 'Regional Cropping Patterns',
                icon: '📍',
                points: [
                    '📍 PUNJAB-HARYANA (Northwest):',
                    '  • Rice-Wheat system dominant',
                    '  • Highly irrigated, intensive',
                    '  • Issue: Groundwater depletion, stubble burning',
                    '  • Diversification needed: Cotton, vegetables',
                    '',
                    '📍 EASTERN INDIA (WB, Odisha, Bihar):',
                    '  • Rice dominant (Kharif)',
                    '  • Jute in Bengal-Bihar',
                    '  • Potential for Rabi expansion',
                    '  • Low irrigation, monsoon-dependent',
                    '',
                    '📍 CENTRAL INDIA (MP, CG):',
                    '  • Soybean-Wheat rotation',
                    '  • Pulses: Gram, Lentil',
                    '  • Rice in CG',
                    '  • Mixed farming',
                    '',
                    '📍 PENINSULAR INDIA (MH, KA, AP, TN):',
                    '  • Cotton, Sugarcane (MH-KA)',
                    '  • Rice in deltas (AP-TN)',
                    '  • Jowar-Bajra in dry areas',
                    '  • Groundnut (AP)',
                    '',
                    '📍 RAJASTHAN-GUJARAT (West):',
                    '  • Cotton (Gujarat)',
                    '  • Bajra, Mustard (Rajasthan)',
                    '  • Groundnut (Gujarat)',
                    '  • Drought-resistant crops',
                    '',
                    '📍 NORTHEAST:',
                    '  • Shifting cultivation (Jhum)',
                    '  • Rice, Maize',
                    '  • Spices, Tea, Horticulture',
                    '  • Low mechanization'
                ]
            }
        ],

        diagrams: [
            {
                title: 'Cropping Seasons Calendar',
                type: 'timeline',
                description: 'Circular calendar showing: Kharif (Jun-Oct, green), Rabi (Nov-Mar, blue), Zaid (Mar-Jun, orange). Mark sowing and harvesting months for major crops.'
            },
            {
                title: 'Kharif vs Rabi Crops',
                type: 'comparison-chart',
                description: 'Two columns: Kharif (Rice, Cotton, Jowar, Groundnut - monsoon) vs Rabi (Wheat, Mustard, Gram, Barley - winter). Show water source.'
            },
            {
                title: 'Regional Cropping Pattern Map',
                type: 'map',
                description: 'India map showing dominant patterns: Rice-Wheat (Punjab-UP), Rice (East), Soybean-Wheat (MP), Cotton-Jowar (Maharashtra), Rice (Deltas).'
            },
            {
                title: 'Cropping Pattern Types',
                type: 'diagram',
                description: 'Visual showing: Monoculture (one crop), Mixed (random mix), Intercropping (alternate rows), Rotation (sequential crops). Use crop icons.'
            },
            {
                title: 'Cropping Intensity by State',
                type: 'bar-chart',
                description: 'Horizontal bars: Punjab (190%), Haryana (185%), WB (170%), India avg (142%), Assam (110%). Show high vs low multiple cropping.'
            }
        ],

        quickFacts: [
            '🌧️ Kharif (Jun-Oct): Rice, Cotton, Jowar, Bajra, Groundnut - Monsoon crops',
            '❄️ Rabi (Nov-Mar): Wheat, Barley, Gram, Mustard - Winter crops',
            '☀️ Zaid (Mar-Jun): Watermelon, Vegetables - Summer, irrigated',
            '🌾 Rice: Largest Kharif crop | Wheat: Largest Rabi crop',
            '📊 Each season: ~50% of foodgrain production',
            '🔄 Cropping intensity: India avg 142% | Punjab 190%',
            '📍 Rice-Wheat: Punjab-Haryana dominant pattern',
            '⚠️ Rice-Wheat in Punjab: Groundwater crisis, stubble burning',
            '🌱 Crop rotation: Legume-Cereal maintains soil fertility',
            '📏 Intercropping: Rows pattern, more efficient than mixed',
            '🎯 Diversification needed: From cereals to pulses, oilseeds',
            '🌿 Northeast: Jhum (shifting cultivation) still practiced'
        ],

        upscTraps: [
            {
                trap: 'Sugarcane is a Kharif crop only',
                clarity: 'MISLEADING! Sugarcane is a PERENNIAL crop (12-18 months). It\'s planted in Kharif or Spring and harvested after a year+. It doesn\'t fit neatly in one season.'
            },
            {
                trap: 'Kharif crops require irrigation',
                clarity: 'WRONG! Kharif crops are primarily MONSOON-dependent (rain-fed). Rabi crops require irrigation because there\'s no monsoon in winter. That\'s the key difference.'
            },
            {
                trap: 'Rice-Wheat system is best for food security',
                clarity: 'OVERSIMPLIFIED! While it ensures foodgrain production, Rice-Wheat system causes: (1) Groundwater depletion, (2) Stubble burning (pollution), (3) Soil nutrient depletion, (4) No pulses/oilseeds production. Diversification is essential.'
            },
            {
                trap: 'Mixed cropping and intercropping are same',
                clarity: 'DIFFERENT! Mixed cropping: Seeds mixed randomly, harvested together, traditional. Intercropping: Crops in separate ROWS, scientific planning, can be harvested differently. Intercropping is more efficient.'
            }
        ],

        revisionBox: {
            title: '⚡ 30-Second Revision',
            points: [
                'Kharif (Jun-Oct): Rice, Cotton, Jowar, Bajra, Groundnut - Monsoon',
                'Rabi (Nov-Mar): Wheat, Gram, Mustard, Barley - Winter/Irrigated',
                'Zaid (Mar-Jun): Watermelon, Vegetables - Summer/Irrigated',
                'Each season ~50% of foodgrains | Rice largest Kharif, Wheat largest Rabi',
                'Cropping intensity: Punjab 190%, India 142%',
                'Patterns: Monoculture, Mixed, Intercropping (rows), Rotation (sequential)',
                'Issue: Rice-Wheat system → Groundwater depletion, stubble burning'
            ]
        },

        pyqs: [
            {
                year: 2022,
                question: 'Discuss the cropping patterns in India and the need for crop diversification.',
                type: 'Mains'
            },
            {
                year: 2021,
                question: 'Wheat is a:',
                type: 'Prelims',
                options: ['Kharif crop', 'Rabi crop', 'Zaid crop', 'Perennial crop']
            },
            {
                year: 2020,
                question: 'Explain the concept of cropping intensity. How can it be increased?',
                type: 'Mains'
            },
            {
                year: 2019,
                question: 'What are the problems associated with Rice-Wheat cropping system?',
                type: 'Mains'
            },
            {
                year: 2018,
                question: 'Differentiate between mixed cropping and intercropping.',
                type: 'Mains'
            }
        ]
    },

    // ============================================
    // TOPIC 7: AGRICULTURAL REVOLUTIONS IN INDIA
    // ============================================
    {
        id: 'agricultural-revolutions',
        name: 'Agricultural Revolutions in India',
        icon: '🚀',
        category: 'india-resources',
        theme: 'agriculture',
        difficulty: 'medium',
        upscRelevance: 'high',

        mindMap: {
            central: 'Agri Revolutions',
            branches: [
                {
                    name: 'Green Revolution',
                    color: '#27AE60',
                    children: [
                        '1960s-70s',
                        'Wheat, Rice',
                        'HYV seeds',
                        'M.S. Swaminathan',
                        'Punjab, Haryana'
                    ]
                },
                {
                    name: 'White Revolution',
                    color: '#ECF0F1',
                    children: [
                        'Operation Flood',
                        '1970-1996',
                        'Verghese Kurien',
                        'AMUL model',
                        'World\'s largest producer'
                    ]
                },
                {
                    name: 'Other Revolutions',
                    color: '#E67E22',
                    children: [
                        'Blue (Fish)',
                        'Yellow (Oilseeds)',
                        'Pink (Onion/Prawn)',
                        'Golden (Horticulture)',
                        'Silver (Eggs)'
                    ]
                },
                {
                    name: 'Recent Focus',
                    color: '#9B59B6',
                    children: [
                        'Evergreen Revolution',
                        'Second Green Rev',
                        'Eastern India focus',
                        'Sustainable intensification',
                        'Rainbow Revolution'
                    ]
                }
            ]
        },

        memoryHooks: [
            {
                type: 'mnemonic',
                title: 'Revolution Colors',
                content: 'Green-White-Blue-Yellow-Pink-Golden-Silver = "Good Wives Buy Yellow Pears, Golden Silver!" Each color = a sector.',
                icon: '🌈'
            },
            {
                type: 'story',
                title: 'Green Revolution Story',
                content: 'Dr. Norman Borlaug (Nobel Peace Prize) developed dwarf wheat in Mexico. M.S. Swaminathan brought it to India. Punjab-Haryana adopted first. India became self-sufficient in food!',
                icon: '🌾'
            },
            {
                type: 'acronym',
                title: 'Green Revolution Components',
                content: 'HYV-IF-M = High Yielding Varieties + Irrigation + Fertilizers + Mechanization. The 4 pillars!',
                icon: '🔤'
            },
            {
                type: 'comparison',
                title: 'Kurien vs Swaminathan',
                content: 'Verghese Kurien = White Revolution (Milk, AMUL, Anand). M.S. Swaminathan = Green Revolution (Wheat-Rice, HYV). Both transformed India!',
                icon: '👨‍🔬'
            }
        ],

        conceptBlocks: [
            {
                title: 'Green Revolution',
                icon: '🌾',
                points: [
                    '📅 TIMELINE:',
                    '  • Phase 1: 1960s-1970s (Wheat focus)',
                    '  • Phase 2: 1970s-1980s (Rice included)',
                    '  • Continuing impact till today',
                    '',
                    '👨‍🔬 KEY FIGURES:',
                    '  • Norman Borlaug: Developed dwarf wheat (Nobel 1970)',
                    '  • M.S. Swaminathan: Father of Indian Green Revolution',
                    '  • Brought Mexican wheat varieties to India',
                    '',
                    '🧬 COMPONENTS:',
                    '  • HYV SEEDS: High Yielding Variety',
                    '    - Dwarf varieties (Sonalika, Kalyan Sona wheat)',
                    '    - IR-8 rice ("Miracle Rice")',
                    '  • IRRIGATION: Tubewells, canal expansion',
                    '  • FERTILIZERS: NPK (Nitrogen, Phosphorus, Potassium)',
                    '  • PESTICIDES: Plant protection',
                    '  • MECHANIZATION: Tractors, harvesters',
                    '  • CREDIT: Institutional lending',
                    '',
                    '📍 AREAS COVERED:',
                    '  • Initial: Punjab, Haryana, Western UP',
                    '  • Later: AP (rice), Tamil Nadu, Karnataka',
                    '  • Rainfed areas largely left out',
                    '',
                    '📈 ACHIEVEMENTS:',
                    '  • Foodgrain: 82 MT (1960) → 310 MT (2020)',
                    '  • Self-sufficiency in food',
                    '  • India became exporter from importer',
                    '  • "Ship to mouth" ended',
                    '',
                    '⚠️ CRITICISMS:',
                    '  • Regional disparity (Punjab vs Bihar)',
                    '  • Groundwater depletion',
                    '  • Soil degradation, chemical dependence',
                    '  • Monoculture, biodiversity loss',
                    '  • Only rice-wheat, neglected pulses-oilseeds'
                ]
            },
            {
                title: 'White Revolution (Operation Flood)',
                icon: '🥛',
                points: [
                    '📅 TIMELINE:',
                    '  • Phase 1: 1970-1980 (18 milk sheds)',
                    '  • Phase 2: 1981-1985 (expansion)',
                    '  • Phase 3: 1985-1996 (consolidation)',
                    '',
                    '👨‍🔬 KEY FIGURE:',
                    '  • Dr. Verghese Kurien: "Father of White Revolution"',
                    '  • Chairman, NDDB (National Dairy Development Board)',
                    '  • AMUL founder (Anand Milk Union Limited)',
                    '',
                    '🏛️ INSTITUTIONAL MODEL:',
                    '  • COOPERATIVE MODEL (Anand Pattern):',
                    '    - Village → District → State federation',
                    '    - Farmer-owned cooperatives',
                    '    - Procurement, processing, marketing',
                    '  • NDDB: Apex body, established 1965',
                    '',
                    '📈 ACHIEVEMENTS:',
                    '  • Milk production: 17 MT (1950) → 221 MT (2022)',
                    '  • WORLD\'S LARGEST milk producer (since 1998)',
                    '  • Per capita availability: 444 grams/day',
                    '  • 10 crore+ dairy farmers',
                    '',
                    '📍 SUCCESS STORIES:',
                    '  • AMUL (Gujarat): Model cooperative',
                    '  • Milk Grid: Connecting rural to urban',
                    '  • Women empowerment (70% of dairy labor)',
                    '',
                    '🌾 EXTENSION:',
                    '  • Operation Golden Flow (2023): AMUL exports',
                    '  • NDS (National Dairy Plan): Productivity improvement'
                ]
            },
            {
                title: 'Blue Revolution (Fisheries)',
                icon: '🐟',
                points: [
                    '📅 TIMELINE:',
                    '  • Phase 1: 1985-1990 (launched)',
                    '  • Phase 2: 2015 onwards (Neel Kranti Mission)',
                    '',
                    '📊 CURRENT STATUS:',
                    '  • Fish production: 16 MT+ (2022)',
                    '  • 2nd largest aquaculture producer (after China)',
                    '  • 3rd largest fish producer globally',
                    '  • Export: $7.7 billion (2022-23)',
                    '',
                    '🦐 COMPONENTS:',
                    '  • INLAND FISHERIES (67%):',
                    '    - Rivers, lakes, ponds, reservoirs',
                    '    - Culture fisheries (aquaculture)',
                    '  • MARINE FISHERIES (33%):',
                    '    - Coastal fishing',
                    '    - Deep-sea fishing',
                    '',
                    '📍 KEY STATES:',
                    '  • Inland: Andhra Pradesh (#1), West Bengal, Bihar',
                    '  • Marine: Gujarat, Kerala, Karnataka, Tamil Nadu',
                    '',
                    '🏛️ RECENT INITIATIVES:',
                    '  • PMMSY (Pradhan Mantri Matsya Sampada Yojana): ₹20,050 cr',
                    '  • Target: 22 MT by 2024-25',
                    '  • Sagar Mitra Scheme',
                    '  • Deep-sea fishing vessels'
                ]
            },
            {
                title: 'Yellow Revolution (Oilseeds)',
                icon: '🌻',
                points: [
                    '📅 TIMELINE:',
                    '  • 1986-1990: Technology Mission on Oilseeds',
                    '  • Focus: Reduce edible oil imports',
                    '',
                    '📊 STATUS:',
                    '  • India: 2nd largest oilseed producer',
                    '  • But still imports 60% of edible oil',
                    '  • Production: ~35 MT oilseeds',
                    '',
                    '🌾 MAJOR OILSEEDS:',
                    '  • Groundnut: Gujarat, Rajasthan, AP',
                    '  • Soybean: MP, Maharashtra, Rajasthan',
                    '  • Mustard: Rajasthan, UP, Haryana',
                    '  • Sunflower: Karnataka, AP',
                    '  • Sesame: WB, Gujarat',
                    '',
                    '⚠️ CURRENT CHALLENGES:',
                    '  • Palm oil imports (Indonesia, Malaysia)',
                    '  • Low productivity',
                    '  • Price volatility',
                    '',
                    '🏛️ INITIATIVES:',
                    '  • National Mission on Edible Oils (2021)',
                    '  • Oil Palm Mission: NE, Andaman focus',
                    '  • Target: Self-sufficiency by 2030'
                ]
            },
            {
                title: 'Other Revolutions',
                icon: '🌈',
                points: [
                    '🧅 PINK REVOLUTION:',
                    '  • TWO MEANINGS:',
                    '    1. Onion/Shallot production',
                    '    2. Prawn/Shrimp production',
                    '  • Prawn exports significant',
                    '',
                    '🍎 GOLDEN REVOLUTION:',
                    '  • Horticulture (fruits, vegetables, spices)',
                    '  • 1991 onwards',
                    '  • India: 2nd largest fruit & veg producer',
                    '  • Mango, Banana, Citrus, Grapes',
                    '',
                    '🥚 SILVER REVOLUTION:',
                    '  • Eggs / Poultry',
                    '  • India: 3rd largest egg producer',
                    '  • Namakkal (TN): "Egg capital"',
                    '',
                    '🍯 SWEET REVOLUTION:',
                    '  • Honey production',
                    '  • National Beekeeping & Honey Mission (2020)',
                    '',
                    '🦐 RED REVOLUTION:',
                    '  • Meat production (tomato also mentioned)',
                    '  • India: 2nd largest meat producer',
                    '',
                    '🌸 SAFFRON REVOLUTION:',
                    '  • Kashmir saffron promotion',
                    '  • GI tag, Mission Saffron',
                    '',
                    '🌈 RAINBOW REVOLUTION:',
                    '  • Integrated approach',
                    '  • All agricultural sectors combined',
                    '  • Holistic food security'
                ]
            },
            {
                title: 'Second Green Revolution',
                icon: '🌱',
                points: [
                    '📖 CONCEPT:',
                    '  • Proposed by M.S. Swaminathan',
                    '  • Also called "Evergreen Revolution"',
                    '  • Sustainable intensification',
                    '',
                    '🎯 FOCUS AREAS:',
                    '  • EASTERN INDIA:',
                    '    - Bihar, Jharkhand, Odisha, WB, Eastern UP',
                    '    - High potential, low current yields',
                    '    - "Bringing Green Revolution to East"',
                    '  • RAINFED AREAS:',
                    '    - 52% of cropped area still rainfed',
                    '    - Watershed development, drought-proof crops',
                    '  • PULSES & OILSEEDS:',
                    '    - Neglected in first GR',
                    '    - Technology Mission on Pulses (2007)',
                    '',
                    '🧬 TECHNOLOGY:',
                    '  • GM crops: Bt Cotton success',
                    '  • Biofortified varieties:
                      // Continuing from "Second Green Revolution" topic...
    // Starting from where we left off in conceptBlocks:

            {
                title: 'Second Green Revolution',
                icon: '🌱',
                points: [
                    '📖 CONCEPT:',
                    '  • Proposed by M.S. Swaminathan',
                    '  • Also called "Evergreen Revolution"',
                    '  • Sustainable intensification',
                    '',
                    '🎯 FOCUS AREAS:',
                    '  • EASTERN INDIA:',
                    '    - Bihar, Jharkhand, Odisha, WB, Eastern UP',
                    '    - High potential, low current yields',
                    '    - "Bringing Green Revolution to East"',
                    '  • RAINFED AREAS:',
                    '    - 52% of cropped area still rainfed',
                    '    - Watershed development, drought-proof crops',
                    '  • PULSES & OILSEEDS:',
                    '    - Neglected in first GR',
                    '    - Technology Mission on Pulses (2007)',
                    '',
                    '🧬 TECHNOLOGY:',
                    '  • GM crops: Bt Cotton success',
                    '  • Biofortified varieties:',
                    '    - Iron-rich rice, zinc-rich wheat',
                    '    - Protein-rich pulses',
                    '  • Precision farming, drones',
                    '  • Climate-resilient varieties',
                    '  • Organic farming promotion',
                    '',
                    '💧 SUSTAINABLE PRACTICES:',
                    '  • Micro-irrigation (drip, sprinkler)',
                    '  • System of Rice Intensification (SRI)',
                    '  • Zero Budget Natural Farming (ZBNF)',
                    '  • Conservation agriculture',
                    '  • Integrated Nutrient Management',
                    '',
                    '🏛️ INITIATIVES:',
                    '  • Rashtriya Krishi Vikas Yojana (RKVY)',
                    '  • National Food Security Mission (NFSM)',
                    '  • Paramparagat Krishi Vikas Yojana (organic)',
                    '  • PM-KISAN: Income support',
                    '  • e-NAM: Online market platform'
                ]
            }
        ],

        diagrams: [
            {
                title: 'Agricultural Revolutions Timeline',
                type: 'timeline',
                description: 'Timeline: Green (1960s), White (1970-96), Blue (1985), Yellow (1986), Golden (1991), Second Green (ongoing). Show key figures and achievements.'
            },
            {
                title: 'Green Revolution Impact',
                type: 'line-chart',
                description: 'Line chart: Foodgrain production 1960 (82 MT) → 1980 (130 MT) → 2000 (200 MT) → 2020 (310 MT). Show steep rise after 1965.'
            },
            {
                title: 'White Revolution - Milk Production',
                type: 'bar-chart',
                description: 'Bar chart: Milk production growth: 1950 (17 MT), 1970 (22 MT), 1990 (53 MT), 2000 (80 MT), 2022 (221 MT). Show India as #1.'
            },
            {
                title: 'Revolution Colors & Sectors',
                type: 'infographic',
                description: 'Color wheel showing: Green (Foodgrains), White (Milk), Blue (Fish), Yellow (Oilseeds), Pink (Onion/Prawn), Golden (Horticulture), Silver (Eggs).'
            },
            {
                title: 'Second Green Revolution Focus',
                type: 'map',
                description: 'Map highlighting Eastern India (Bihar, Jharkhand, Odisha, WB, Eastern UP) as focus area. Show current vs potential yields.'
            }
        ],

        quickFacts: [
            '🌾 Green Revolution: 1960s-70s | M.S. Swaminathan | Wheat-Rice | Punjab-Haryana',
            '🥛 White Revolution: 1970-1996 | Verghese Kurien | AMUL model | India #1 milk',
            '🐟 Blue Revolution: 1985 onwards | Fish | India #2 aquaculture, #3 fish globally',
            '🌻 Yellow Revolution: 1986-90 | Oilseeds | Still 60% import dependent',
            '🍎 Golden Revolution: 1991 onwards | Horticulture | India #2 fruits & vegetables',
            '🥚 Silver Revolution: Eggs/Poultry | India #3 egg producer | Namakkal (TN)',
            '📊 Foodgrain: 82 MT (1960) → 310 MT (2020) | Self-sufficient',
            '🥛 Milk: 17 MT (1950) → 221 MT (2022) | World\'s largest',
            '🐟 Fish: 16 MT+ | 2nd largest aquaculture | $7.7 billion exports',
            '🌱 Evergreen Revolution: Sustainable, Eastern India focus, rainfed areas',
            '⚠️ Green Rev criticism: Groundwater depletion, chemical dependence, regional disparity',
            '🏛️ NDDB: Verghese Kurien | ICAR: Agricultural research'
        ],

        upscTraps: [
            {
                trap: 'Green Revolution made India food surplus',
                clarity: 'NUANCED! India became SELF-SUFFICIENT in foodgrains (wheat, rice). But we still IMPORT pulses (15-20%) and edible oils (60%). Green Revolution focused only on cereals, not all food.'
            },
            {
                trap: 'Green Revolution covered all of India',
                clarity: 'WRONG! Green Revolution was LIMITED to irrigated areas - Punjab, Haryana, Western UP initially. Eastern India, rainfed areas were largely left out. Regional disparity increased.'
            },
            {
                trap: 'White Revolution made India self-sufficient in dairy',
                clarity: 'CORRECT! Unlike Green Revolution, White Revolution was more inclusive (covered entire India through cooperatives) and made India world\'s #1 milk producer. More successful in that sense.'
            },
            {
                trap: 'Blue Revolution is about water conservation',
                clarity: 'WRONG! Blue Revolution is about FISHERIES and aquaculture, not water conservation. Water conservation is part of watershed development programs.'
            }
        ],

        revisionBox: {
            title: '⚡ 30-Second Revision',
            points: [
                'Green: 1960s, Wheat-Rice, HYV seeds, Swaminathan, Punjab-Haryana',
                'White: 1970-96, Milk, Kurien, AMUL, India #1 (221 MT)',
                'Blue: Fish, India #2 aquaculture, PMMSY scheme',
                'Yellow: Oilseeds, still 60% import | Golden: Horticulture, India #2',
                'Silver: Eggs (India #3) | Pink: Onion/Prawn',
                'Evergreen/2nd Green: Sustainable, Eastern India, rainfed, pulses-oilseeds',
                'Criticism of Green Rev: Regional disparity, groundwater, chemical dependence'
            ]
        },

        pyqs: [
            {
                year: 2023,
                question: 'What is meant by Second Green Revolution? Discuss its focus areas.',
                type: 'Mains'
            },
            {
                year: 2022,
                question: 'Examine the achievements and limitations of Green Revolution in India.',
                type: 'Mains'
            },
            {
                year: 2021,
                question: 'Operation Flood is associated with:',
                type: 'Prelims',
                options: ['Irrigation', 'Milk production', 'Flood control', 'Fish production']
            },
            {
                year: 2020,
                question: 'Discuss the role of cooperatives in White Revolution.',
                type: 'Mains'
            },
            {
                year: 2019,
                question: 'What is Blue Revolution? Discuss its current status and challenges.',
                type: 'Mains'
            }
        ]
    },

    // ============================================
    // TOPIC 8: MAJOR CROPS OF INDIA
    // ============================================
    {
        id: 'major-crops-india',
        name: 'Major Crops of India',
        icon: '🌾',
        category: 'india-resources',
        theme: 'agriculture',
        difficulty: 'hard',
        upscRelevance: 'very-high',

        mindMap: {
            central: 'Major Crops',
            branches: [
                {
                    name: 'Food Grains',
                    color: '#F39C12',
                    children: [
                        'Rice (largest)',
                        'Wheat (2nd)',
                        'Maize',
                        'Pulses',
                        'Millets (Jowar, Bajra)'
                    ]
                },
                {
                    name: 'Cash Crops',
                    color: '#27AE60',
                    children: [
                        'Sugarcane',
                        'Cotton',
                        'Jute',
                        'Tobacco',
                        'Tea, Coffee'
                    ]
                },
                {
                    name: 'Oilseeds',
                    color: '#E67E22',
                    children: [
                        'Groundnut',
                        'Soybean',
                        'Mustard',
                        'Sunflower',
                        'Sesame'
                    ]
                },
                {
                    name: 'Plantation',
                    color: '#9B59B6',
                    children: [
                        'Tea',
                        'Coffee',
                        'Rubber',
                        'Coconut',
                        'Spices'
                    ]
                }
            ]
        },

        memoryHooks: [
            {
                type: 'mnemonic',
                title: 'Rice States (Top 5)',
                content: 'WUOAP = West Bengal, UP, Odisha, AP, Punjab. "We Usually Order A Pizza!" - top rice producers.',
                icon: '🍚'
            },
            {
                type: 'mnemonic',
                title: 'Wheat States',
                content: 'UPHR-MP = UP, Punjab, Haryana, Rajasthan, MP. "UP Punjab Haryana Regularly Make Pooris!"',
                icon: '🌾'
            },
            {
                type: 'comparison',
                title: 'Rice vs Wheat Conditions',
                content: 'Rice: Hot+Wet (>100cm rain, 20-25°C), Clayey soil, Flooded. Wheat: Cool+Dry (<75cm, 10-15°C), Loamy soil, Well-drained. OPPOSITE conditions!',
                icon: '⚖️'
            },
            {
                type: 'story',
                title: 'Cotton Triangle',
                content: 'Draw triangle: Gujarat (top) - Maharashtra (left) - Telangana (right). This BLACK SOIL triangle produces 70% of India\'s cotton!',
                icon: '📐'
            }
        ],

        conceptBlocks: [
            {
                title: 'Rice',
                icon: '🍚',
                points: [
                    '📊 POSITION:',
                    '  • Largest food crop in India',
                    '  • India: 2nd largest producer (after China)',
                    '  • Production: ~130 MT (2022)',
                    '  • Area: 45 million hectares',
                    '',
                    '🌡️ CONDITIONS:',
                    '  • Temperature: 20-27°C (warm & humid)',
                    '  • Rainfall: >100 cm (or irrigation)',
                    '  • Soil: Alluvial, clayey (water retention)',
                    '  • Season: Kharif (main), Rabi in South',
                    '  • Standing water required (puddled fields)',
                    '',
                    '📍 PRODUCTION (States):',
                    '  1. West Bengal: Largest producer (~15%)',
                    '  2. Uttar Pradesh: 2nd (~13%)',
                    '  3. Punjab: Highest yield per hectare',
                    '  4. Odisha, Andhra Pradesh, Tamil Nadu',
                    '  • Regions: Eastern India, deltas, coastal plains',
                    '',
                    '🌾 TYPES:',
                    '  • Aman: Monsoon crop (main)',
                    '  • Aus: Pre-monsoon (Bengal)',
                    '  • Boro: Winter (irrigated, Bengal)',
                    '  • Basmati: Premium, fragrant (Punjab, Haryana)',
                    '',
                    '⚠️ ISSUES:',
                    '  • Water-intensive (3000-5000 liters/kg)',
                    '  • Methane emissions (flooded fields)',
                    '  • Punjab: Groundwater depletion from paddy',
                    '  • Stubble burning'
                ]
            },
            {
                title: 'Wheat',
                icon: '🌾',
                points: [
                    '📊 POSITION:',
                    '  • 2nd largest food crop in India',
                    '  • India: 2nd largest producer (after China)',
                    '  • Production: ~110 MT (2022)',
                    '  • Rabi crop (main)',
                    '',
                    '🌡️ CONDITIONS:',
                    '  • Temperature: 10-15°C (sowing), 20-25°C (harvest)',
                    '  • Rainfall: 50-75 cm (or irrigation)',
                    '  • Soil: Well-drained loamy, alluvial',
                    '  • Season: Rabi (Nov-Mar)',
                    '  • Frost-free during growing season',
                    '',
                    '📍 PRODUCTION (States):',
                    '  1. Uttar Pradesh: Largest producer (~30%)',
                    '  2. Punjab: 2nd, highest yield',
                    '  3. Madhya Pradesh: 3rd (growing share)',
                    '  4. Haryana, Rajasthan, Bihar',
                    '  • Belt: Indo-Gangetic Plains',
                    '',
                    '🌾 VARIETIES:',
                    '  • Mexican dwarf varieties (Green Revolution)',
                    '  • Sonalika, Kalyan Sona (HYV)',
                    '  • Durum wheat (pasta, semolina)',
                    '',
                    '📈 TRENDS:',
                    '  • Shift southward: MP, Maharashtra expanding',
                    '  • Climate concerns: Heat waves during harvest',
                    '  • 2022 export ban due to low production'
                ]
            },
            {
                title: 'Sugarcane',
                icon: '🎋',
                points: [
                    '📊 POSITION:',
                    '  • India: 2nd largest producer (after Brazil)',
                    '  • Largest consumer globally',
                    '  • Production: ~400 MT (2022)',
                    '  • Perennial crop (12-18 months)',
                    '',
                    '🌡️ CONDITIONS:',
                    '  • Temperature: 21-27°C (hot & humid)',
                    '  • Rainfall: 75-150 cm',
                    '  • Soil: Alluvial, black soil, well-drained',
                    '  • Long growing season, irrigation needed',
                    '  • Frost-free climate essential',
                    '',
                    '📍 PRODUCTION (States):',
                    '  1. Uttar Pradesh: Largest (45%+)',
                    '  2. Maharashtra: 2nd (~20%)',
                    '  3. Karnataka: 3rd',
                    '  4. Tamil Nadu, Gujarat, AP',
                    '',
                    '📍 TWO BELTS:',
                    '  • NORTHERN BELT (UP, Bihar, Punjab):',
                    '    - Subtropical climate',
                    '    - Lower sucrose content (9-12%)',
                    '    - Crushing season: Nov-Apr',
                    '  • PENINSULAR BELT (MH, KA, TN):',
                    '    - Tropical climate',
                    '    - Higher sucrose content (12-14%)',
                    '    - Year-round crushing possible',
                    '',
                    '🏭 SUGAR INDUSTRY:',
                    '  • 530+ sugar mills',
                    '  • Byproducts: Molasses, bagasse',
                    '  • Ethanol blending programme (20% by 2025)',
                    '',
                    '⚠️ ISSUES:',
                    '  • Water-intensive crop',
                    '  • Cane price arrears to farmers',
                    '  • Price volatility'
                ]
            },
            {
                title: 'Cotton',
                icon: '🧶',
                points: [
                    '📊 POSITION:',
                    '  • India: Largest area under cotton globally',
                    '  • 2nd largest producer (after China)',
                    '  • Production: ~35 million bales (2022)',
                    '  • "White Gold"',
                    '',
                    '🌡️ CONDITIONS:',
                    '  • Temperature: 21-30°C',
                    '  • Rainfall: 50-100 cm (light showers)',
                    '  • Soil: BLACK SOIL (regur) - ideal',
                    '  • 200+ frost-free days',
                    '  • Clear skies during boll opening',
                    '  • Season: Kharif',
                    '',
                    '📍 PRODUCTION (States):',
                    '  1. Gujarat: Largest (~30%)',
                    '  2. Maharashtra: 2nd (~25%)',
                    '  3. Telangana: 3rd',
                    '  4. Rajasthan, MP, Punjab, Haryana',
                    '',
                    '🧬 Bt COTTON:',
                    '  • Introduced: 2002',
                    '  • 95% of cotton area now Bt',
                    '  • Bollworm resistance',
                    '  • Controversy: Pink bollworm resistance',
                    '  • Yield increased significantly',
                    '',
                    '🏭 TEXTILE INDUSTRY:',
                    '  • Largest employer after agriculture',
                    '  • Ahmedabad: "Manchester of India"',
                    '  • Coimbatore, Mumbai: Major centers',
                    '',
                    '⚠️ ISSUES:',
                    '  • Farmer suicides (Vidarbha)',
                    '  • Bt seed costs',
                    '  • Price fluctuations'
                ]
            },
            {
                title: 'Pulses',
                icon: '🫘',
                points: [
                    '📊 POSITION:',
                    '  • India: Largest producer & consumer',
                    '  • Still imports 15-20%',
                    '  • Production: ~27 MT',
                    '  • Low productivity vs world average',
                    '',
                    '🌾 MAJOR PULSES:',
                    '  • GRAM (Chana): Largest pulse crop',
                    '    - MP, Rajasthan, Maharashtra',
                    '    - Rabi crop',
                    '  • TUR/ARHAR (Pigeon pea):',
                    '    - Maharashtra, Karnataka, UP',
                    '    - Kharif crop',
                    '  • URAD (Black gram): Maharashtra, UP, AP',
                    '  • MOONG (Green gram): Rajasthan, MH, AP',
                    '  • MASOOR (Lentil): MP, UP, Bihar',
                    '',
                    '📍 PRODUCTION (States):',
                    '  1. Madhya Pradesh: Largest (~25%)',
                    '  2. Rajasthan: 2nd',
                    '  3. Maharashtra, UP, Karnataka',
                    '',
                    '🌱 IMPORTANCE:',
                    '  • Protein source for vegetarians',
                    '  • Nitrogen fixation (improves soil)',
                    '  • Drought-tolerant',
                    '  • Low water requirement',
                    '',
                    '⚠️ CHALLENGES:',
                    '  • Low productivity',
                    '  • Price volatility',
                    '  • Imports from Myanmar, Canada',
                    '',
                    '🏛️ INITIATIVES:',
                    '  • National Food Security Mission (Pulses)',
                    '  • MSP increase',
                    '  • Pulse seed hubs'
                ]
            },
            {
                title: 'Oilseeds & Plantation Crops',
                icon: '🥜',
                points: [
                    '🥜 GROUNDNUT:',
                    '  • India: 2nd largest producer',
                    '  • States: Gujarat (largest), Rajasthan, AP, TN',
                    '  • Kharif + Rabi, light sandy soil',
                    '  • Junagadh (Gujarat): Major area',
                    '',
                    '🫛 SOYBEAN:',
                    '  • MP: ~60% of production',
                    '  • Maharashtra, Rajasthan',
                    '  • Kharif crop, black soil',
                    '  • Protein source, oil extraction',
                    '',
                    '🌼 MUSTARD:',
                    '  • Rajasthan: Largest (45%)',
                    '  • UP, Haryana, MP',
                    '  • Rabi crop, irrigated areas',
                    '',
                    '🌴 COCONUT:',
                    '  • Kerala: Largest, "Land of Coconuts"',
                    '  • Tamil Nadu, Karnataka, AP',
                    '  • Coastal, humid climate',
                    '  • India: Largest producer globally',
                    '',
                    '☕ TEA:',
                    '  • Assam: Largest (~50%)',
                    '  • West Bengal (Darjeeling), TN (Nilgiris), Kerala',
                    '  • India: 2nd largest producer (after China)',
                    '  • Hill slopes, high rainfall, acidic soil',
                    '',
                    '☕ COFFEE:',
                    '  • Karnataka: Largest (70%+)',
                    '  • Kerala, Tamil Nadu',
                    '  • Arabica (cooler hills), Robusta (warmer)',
                    '  • India: 6th largest producer',
                    '  • Coorg, Chikmagalur: Major areas',
                    '',
                    '🌳 RUBBER:',
                    '  • Kerala: Largest (90%)',
                    '  • TN, Karnataka, NE states',
                    '  • Hot, humid, heavy rainfall (>200 cm)',
                    '  • India: 4th largest producer'
                ]
            },
            {
                title: 'Commercial & Fibre Crops',
                icon: '🧵',
                points: [
                    '🧶 JUTE ("Golden Fibre"):',
                    '  • West Bengal: Largest (~75%)',
                    '  • Bihar, Assam, Odisha',
                    '  • Hot, humid, alluvial soil',
                    '  • Kharif crop, needs standing water (retting)',
                    '  • India: Largest producer globally',
                    '  • Uses: Bags, carpets, geo-textiles',
                    '',
                    '🚬 TOBACCO:',
                    '  • Andhra Pradesh: Largest (45%)',
                    '  • Gujarat, Karnataka, UP',
                    '  • FCV (Flue-cured Virginia) most valuable',
                    '  • India: 2nd largest producer',
                    '',
                    '🌿 SPICES:',
                    '  • India: "Spice Bowl of World"',
                    '  • Largest producer & exporter',
                    '  • BLACK PEPPER: Kerala "King of Spices"',
                    '  • CARDAMOM: Kerala, Karnataka',
                    '  • CHILLI: AP, Telangana, Karnataka',
                    '  • TURMERIC: AP, TN, Odisha',
                    '  • GINGER: Kerala, Karnataka, Meghalaya',
                    '',
                    '🌸 SAFFRON:',
                    '  • Kashmir (Pampore) only',
                    '  • GI tagged',
                    '  • Most expensive spice',
                    '  • Mission Saffron'
                ]
            }
        ],

        diagrams: [
            {
                title: 'Major Crop Regions Map',
                type: 'map',
                description: 'India map showing: Rice (East, coastal), Wheat (Indo-Gangetic), Cotton (Deccan black soil), Tea (Assam, Darjeeling), Coffee (Karnataka). Use crop icons.'
            },
            {
                title: 'Rice vs Wheat Conditions',
                type: 'comparison-chart',
                description: 'Two columns: Rice (Hot 20-27°C, >100cm rain, clayey soil, Kharif) vs Wheat (Cool 10-15°C, 50-75cm, loamy soil, Rabi). Show contrasts.'
            },
            {
                title: 'Top Producing States by Crop',
                type: 'table',
                description: 'Table: Crop | #1 State | #2 State | #3 State. Rice (WB, UP, Punjab), Wheat (UP, Punjab, MP), Cotton (Gujarat, MH, Telangana), etc.'
            },
            {
                title: 'Sugarcane Belts',
                type: 'map',
                description: 'Map showing two belts: Northern (UP, Bihar - subtropical) vs Peninsular (MH, KA, TN - tropical). Compare sucrose content.'
            },
            {
                title: 'Plantation Crops Distribution',
                type: 'map',
                description: 'Map marking: Tea (Assam, Darjeeling, Nilgiris), Coffee (Coorg, Chikmagalur), Rubber (Kerala), Coconut (Kerala, TN coast).'
            }
        ],

        quickFacts: [
            '🍚 Rice: Largest food crop | WB #1 | India #2 globally | >100cm rain needed',
            '🌾 Wheat: UP #1 (30%) | Punjab highest yield | Rabi | 50-75cm rain',
            '🎋 Sugarcane: UP 45% | India #2 after Brazil | Ethanol focus',
            '🧶 Cotton: Gujarat #1 | Black soil | 95% Bt cotton | India largest area',
            '🫘 Pulses: MP #1 | India largest producer but imports 15-20%',
            '🥜 Groundnut: Gujarat #1 | Soybean: MP #1 | Mustard: Rajasthan #1',
            '☕ Tea: Assam 50% | India #2 after China | Darjeeling premium',
            '☕ Coffee: Karnataka 70% | Arabica + Robusta | Coorg, Chikmagalur',
            '🌴 Coconut: Kerala #1 | India largest producer globally',
            '🧵 Jute: WB 75% | India largest producer | "Golden Fibre"',
            '🌶️ Spices: India = "Spice Bowl" | Pepper (Kerala), Chilli (AP)',
            '🌸 Saffron: Kashmir (Pampore) only | Most expensive spice'
        ],

        upscTraps: [
            {
                trap: 'Punjab is the largest rice producer',
                clarity: 'WRONG! WEST BENGAL is the largest rice producer. Punjab has highest YIELD per hectare but less total production. WB, UP, Odisha produce more than Punjab in quantity.'
            },
            {
                trap: 'Cotton grows best in alluvial soil',
                clarity: 'WRONG! Cotton grows best in BLACK SOIL (regur/black cotton soil). The Deccan plateau\'s black soil is ideal. It retains moisture, which cotton needs during dry spells.'
            },
            {
                trap: 'India is self-sufficient in pulses',
                clarity: 'WRONG! Despite being LARGEST producer, India IMPORTS 15-20% of pulses. Demand exceeds production. Productivity is low. Major imports from Myanmar, Canada, Australia.'
            },
            {
                trap: 'Assam produces more tea than rest of India combined',
                clarity: 'CLOSE BUT NOT EXACT! Assam produces ~50% of India\'s tea, not more than combined. West Bengal (Darjeeling, Dooars), Tamil Nadu (Nilgiris), Kerala also contribute significantly.'
            }
        ],

        revisionBox: {
            title: '⚡ 30-Second Revision',
            points: [
                'Rice: WB #1 | Hot-wet, >100cm, clayey | Kharif | India #2 globally',
                'Wheat: UP #1, Punjab highest yield | Cool-dry, loamy | Rabi',
                'Sugarcane: UP 45% | Two belts: North (lower sucrose), Peninsula (higher)',
                'Cotton: Gujarat #1 | Black soil | 95% Bt cotton',
                'Pulses: MP #1 | India largest but imports 15-20%',
                'Plantation: Tea (Assam), Coffee (Karnataka), Rubber (Kerala), Coconut (Kerala)',
                'Spices: India = Spice Bowl | Pepper (Kerala), Chilli (AP), Saffron (Kashmir)'
            ]
        },

        pyqs: [
            {
                year: 2023,
                question: 'Discuss the conditions required for rice cultivation and its distribution in India.',
                type: 'Mains'
            },
            {
                year: 2022,
                question: 'Compare the sugarcane cultivation in North and Peninsular India.',
                type: 'Mains'
            },
            {
                year: 2021,
                question: 'The largest producer of rice in India is:',
                type: 'Prelims',
                options: ['Punjab', 'West Bengal', 'Uttar Pradesh', 'Andhra Pradesh']
            },
            {
                year: 2020,
                question: 'Discuss the geographical conditions for cotton cultivation in India.',
                type: 'Mains'
            },
            {
                year: 2019,
                question: 'Why is India not self-sufficient in pulses despite being the largest producer?',
                type: 'Mains'
            },
            {
                year: 2018,
                question: 'Discuss the distribution of tea and coffee cultivation in India.',
                type: 'Mains'
            }
        ]
    }

];

// ============================================
// FINAL EXPORT - COMPLETE INDIA RESOURCES DATA
// ============================================

// Make data available globally
window.indiaResourcesData = indiaResourcesData;

console.log('🌾✅ India Resources Data COMPLETE:', indiaResourcesData.length, 'topics');
console.log('📚 Topics loaded:', indiaResourcesData.map(t => t.name).join(', '));
