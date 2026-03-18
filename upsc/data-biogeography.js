/* ============================================
   UPSC GEOGRAPHY LEARNING SYSTEM
   Biogeography Data File - COMPREHENSIVE
   Topics: Soil Formation, World Soils, India Soils,
           World Biomes, Vegetation, Grasslands, Deserts
   ============================================ */

const biogeographyData = [

    // ============================================
    // TOPIC 1: SOIL FORMATION PROCESSES
    // ============================================
    {
        id: 'soil-formation',
        name: 'Soil Formation Processes',
        icon: '🌱',
        category: 'biogeography',
        theme: 'soil',
        difficulty: 'medium',
        upscRelevance: 'high',

        mindMap: {
            central: 'Soil Formation',
            branches: [
                {
                    name: 'Soil Forming Factors',
                    color: '#8B4513',
                    children: [
                        'Parent Rock (PRCOT)',
                        'Relief/Topography',
                        'Climate (most important)',
                        'Organisms (biota)',
                        'Time (duration)'
                    ]
                },
                {
                    name: 'Soil Forming Processes',
                    color: '#2ECC71',
                    children: [
                        'Weathering (breakdown)',
                        'Humification (organic matter)',
                        'Eluviation (leaching down)',
                        'Illuviation (deposition)',
                        'Podsolization, Laterization'
                    ]
                },
                {
                    name: 'Soil Profile',
                    color: '#E67E22',
                    children: [
                        'O Horizon (organic)',
                        'A Horizon (topsoil)',
                        'B Horizon (subsoil)',
                        'C Horizon (parent material)',
                        'R Horizon (bedrock)'
                    ]
                },
                {
                    name: 'Soil Properties',
                    color: '#95A5A6',
                    children: [
                        'Texture (sand, silt, clay)',
                        'Structure (arrangement)',
                        'Color (humus, minerals)',
                        'pH (acidity/alkalinity)',
                        'Fertility'
                    ]
                }
            ]
        },

        memoryHooks: [
            {
                type: 'mnemonic',
                title: 'Soil Forming Factors',
                content: 'PRCOT = Parent rock, Relief, Climate, Organisms, Time. OR "Planting Roses Creates Organic Topsoil!"',
                icon: '🧠'
            },
            {
                type: 'comparison',
                title: 'Eluviation vs Illuviation',
                content: 'Eluviation = EXIT (washing OUT of upper layer, E=exit). Illuviation = INFLOW (deposition IN lower layer, I=in).',
                icon: '⬇️'
            },
            {
                type: 'acronym',
                title: 'Soil Horizons',
                content: 'O-A-B-C-R = Organic, Active topsoil, Below (subsoil), Crumbled parent rock, Rock (bedrock). Like layers of a cake!',
                icon: '🔤'
            },
            {
                type: 'visual',
                title: 'Climate Impact',
                content: 'Hot + Wet = RAPID weathering = THICK soil (tropics). Cold + Dry = SLOW weathering = THIN soil (deserts/tundra).',
                icon: '🌡️'
            }
        ],

        conceptBlocks: [
            {
                title: 'Soil Forming Factors (PRCOT)',
                icon: '⚙️',
                points: [
                    '🪨 PARENT ROCK (Parent Material):',
                    '  • Source of mineral composition',
                    '  • Igneous rocks → Clayey, fertile soils',
                    '  • Sedimentary rocks → Variable (sandstone→sandy, shale→clayey)',
                    '  • Metamorphic rocks → Poor soils initially',
                    '',
                    '⛰️ RELIEF/TOPOGRAPHY:',
                    '  • Slope affects erosion and drainage',
                    '  • Steep slopes: Thin soil (erosion removes it)',
                    '  • Gentle slopes: Thick soil (deposition)',
                    '  • Valleys: Alluvial deposition, fertile',
                    '',
                    '🌡️ CLIMATE (Most Important Factor):',
                    '  • Temperature affects weathering rate',
                    '  • Rainfall affects leaching and organic matter',
                    '  • Hot + Wet → Rapid weathering, deep soil (laterite)',
                    '  • Cold + Dry → Slow weathering, thin soil (tundra)',
                    '  • Rule: Soil formation rate doubles every 10°C temperature rise',
                    '',
                    '🌿 ORGANISMS (Biota):',
                    '  • Plants: Roots break rock, add organic matter',
                    '  • Animals: Burrowing mixes soil, adds waste',
                    '  • Microbes: Decompose organic matter → humus',
                    '  • Forests → Rich humus, acidic soil',
                    '  • Grasslands → Deep humus layer, fertile',
                    '',
                    '⏰ TIME:',
                    '  • Soil formation takes hundreds to thousands of years',
                    '  • Young soils: Thin, mineral-rich, infertile',
                    '  • Mature soils: Thick horizons, well-developed',
                    '  • Old soils: Over-leached, infertile (tropical laterites)',
                    '  • 1 cm of soil forms in 100-400 years (varies by climate)'
                ]
            },
            {
                title: 'Soil Forming Processes',
                icon: '🔄',
                points: [
                    '⚡ WEATHERING (Breakdown):',
                    '  • Physical: Rock broken into smaller pieces (freeze-thaw, roots)',
                    '  • Chemical: Minerals chemically altered (oxidation, hydrolysis)',
                    '  • Biological: Organic acids from plants/microbes',
                    '',
                    '🍂 HUMIFICATION:',
                    '  • Decomposition of organic matter (leaves, roots, animals)',
                    '  • Produces HUMUS - dark, nutrient-rich, stable organic matter',
                    '  • High in cool, moist climates (temperate forests)',
                    '  • Low in hot, wet climates (rapid decomposition)',
                    '',
                    '⬇️ ELUVIATION (Leaching):',
                    '  • Downward washing of dissolved materials',
                    '  • Water percolates, carries minerals, clay, nutrients DOWN',
                    '  • Removes soluble minerals from A horizon',
                    '  • Heavy rainfall → excessive leaching → infertile topsoil',
                    '',
                    '⬆️ ILLUVIATION (Deposition):',
                    '  • Deposition of leached materials in lower layers',
                    '  • Minerals accumulate in B horizon (subsoil)',
                    '  • Forms hardpan if cemented layer develops',
                    '',
                    '🌲 PODSOLIZATION:',
                    '  • Process in cool, humid climates under coniferous forests',
                    '  • Acidic needles → acidic soil → heavy leaching',
                    '  • Ash-gray A horizon (minerals removed)',
                    '  • Reddish B horizon (iron/aluminum deposited)',
                    '  • Common: Russia, Canada, Scandinavia',
                    '',
                    '🌴 LATERIZATION:',
                    '  • Process in hot, wet tropical climates',
                    '  • Intense weathering, extreme leaching',
                    '  • Silica removed, iron/aluminum oxides remain',
                    '  • Red/yellow color (iron oxide - rust)',
                    '  • Hardens into laterite brick when exposed',
                    '  • Common: Tropical rainforests, India (Western Ghats, Assam)',
                    '',
                    '🏜️ CALCIFICATION:',
                    '  • Process in dry climates (grasslands, semi-arid)',
                    '  • Limited rainfall → calcium carbonate accumulates in B horizon',
                    '  • Forms caliche (hardpan) layer',
                    '  • Common: Prairies, steppes',
                    '',
                    '🧂 SALINIZATION:',
                    '  • Accumulation of salts in soil',
                    '  • Evaporation exceeds precipitation',
                    '  • Groundwater rises, evaporates, leaves salt',
                    '  • Problem in irrigated arid regions',
                    '  • India: Punjab, Haryana, Rajasthan face this'
                ]
            },
            {
                title: 'Soil Profile & Horizons',
                icon: '📊',
                points: [
                    'SOIL PROFILE: Vertical section showing distinct layers (horizons)',
                    '',
                    '🍂 O HORIZON (Organic Layer):',
                    '  • Loose organic matter (leaves, twigs, dead organisms)',
                    '  • Not always present',
                    '  • Thick in forests, absent in grasslands',
                    '',
                    '🌱 A HORIZON (Topsoil):',
                    '  • Dark color due to humus',
                    '  • Zone of maximum biological activity',
                    '  • Roots, earthworms, microbes abundant',
                    '  • Subject to ELUVIATION (minerals leached down)',
                    '  • Most fertile layer for agriculture',
                    '  • Also called "zone of leaching"',
                    '',
                    '🟤 B HORIZON (Subsoil):',
                    '  • Lighter color than A horizon',
                    '  • Zone of ILLUVIATION (minerals deposited here)',
                    '  • Accumulation of clay, iron, aluminum',
                    '  • Can form hardpan (cemented layer)',
                    '  • Also called "zone of accumulation"',
                    '',
                    '⚪ C HORIZON (Parent Material):',
                    '  • Partially weathered parent rock',
                    '  • Little organic matter',
                    '  • Supplies minerals to A and B',
                    '  • Transition zone to bedrock',
                    '',
                    '🪨 R HORIZON (Bedrock):',
                    '  • Solid, unweathered rock',
                    '  • Source of parent material',
                    '  • Not part of soil, but foundation',
                    '',
                    '📏 HORIZON THICKNESS:',
                    '  • Varies by climate and time',
                    '  • Tropical soils: Very thick A+B (2-3m+)',
                    '  • Desert soils: Very thin (<10 cm)',
                    '  • Temperate soils: Moderate (30-50 cm)'
                ]
            },
            {
                title: 'Soil Texture & Structure',
                icon: '🔬',
                points: [
                    '📐 SOIL TEXTURE (Particle Size):',
                    '  • Proportion of sand, silt, clay',
                    '  • SAND: 0.05-2 mm (gritty, large gaps)',
                    '    - High drainage, low water retention',
                    '    - Low fertility (nutrients leach fast)',
                    '  • SILT: 0.002-0.05 mm (smooth, medium)',
                    '    - Moderate drainage and fertility',
                    '  • CLAY: <0.002 mm (sticky, tiny particles)',
                    '    - Poor drainage, high water retention',
                    '    - High fertility (holds nutrients)',
                    '',
                    '🌾 LOAM (Ideal Texture):',
                    '  • Balanced mix: ~40% sand, 40% silt, 20% clay',
                    '  • Best for agriculture',
                    '  • Good drainage + good water retention + good fertility',
                    '',
                    '🧱 SOIL STRUCTURE (Particle Arrangement):',
                    '  • Granular: Crumb-like (best for agriculture)',
                    '  • Blocky: Cube-shaped (moderate)',
                    '  • Platy: Horizontal layers (poor drainage)',
                    '  • Prismatic: Vertical columns',
                    '',
                    '🎨 SOIL COLOR:',
                    '  • Dark/Black: High organic matter (humus)',
                    '  • Red/Yellow: Iron oxides (laterite)',
                    '  • White/Gray: Leached, low nutrients (podzol)',
                    '  • Brown: Balanced minerals and humus',
                    '',
                    '🧪 SOIL pH:',
                    '  • Acidic (<7): Coniferous forests, heavy rainfall (leaching)',
                    '  • Neutral (7): Ideal for most crops',
                    '  • Alkaline (>7): Arid regions, low rainfall',
                    '  • India: Black soil (pH 7.5-8.5), Laterite (pH 5-6)'
                ]
            },
            {
                title: 'Soil Degradation & Conservation',
                icon: '⚠️',
                points: [
                    '🚨 SOIL DEGRADATION CAUSES:',
                    '  • EROSION:',
                    '    - Water erosion: Gullies, sheet erosion',
                    '    - Wind erosion: Dust bowls',
                    '    - India loses 5,334 million tonnes soil/year to erosion',
                    '  • SALINIZATION:',
                    '    - Excessive irrigation in arid areas',
                    '    - Punjab, Haryana affected',
                    '  • WATERLOGGING:',
                    '    - Poor drainage, water table rises',
                    '    - Roots suffocate, salts accumulate',
                    '  • NUTRIENT DEPLETION:',
                    '    - Intensive cropping without fertilizer replacement',
                    '  • COMPACTION:',
                    '    - Heavy machinery, overgrazing',
                    '  • POLLUTION:',
                    '    - Industrial waste, pesticides, plastics',
                    '',
                    '🛡️ SOIL CONSERVATION METHODS:',
                    '  • CONTOUR PLOWING: Plow along slope contours',
                    '  • TERRACING: Step-like fields on slopes',
                    '  • CROP ROTATION: Prevents nutrient depletion',
                    '  • COVER CROPS: Protect soil between main crops',
                    '  • WINDBREAKS: Tree rows prevent wind erosion',
                    '  • MULCHING: Organic cover retains moisture',
                    '  • AFFORESTATION: Plant trees on degraded land',
                    '  • CONTOUR BUNDING: Earthen embankments',
                    '',
                    '🇮🇳 INDIA PROGRAMS:',
                    '  • National Project on Soil Health Card',
                    '  • Soil Conservation Division (Ministry of Agriculture)',
                    '  • MGNREGA used for watershed development'
                ]
            }
        ],

        diagrams: [
            {
                title: 'Soil Profile - All Horizons',
                type: 'cross-section',
                description: 'Vertical soil profile showing from top to bottom: O Horizon (dark brown, organic litter), A Horizon (dark, topsoil with roots), B Horizon (lighter, subsoil with deposited minerals), C Horizon (pale, weathered parent rock), R Horizon (solid bedrock). Label processes: eluviation (↓ in A), illuviation (↓→ in B).'
            },
            {
                title: 'Soil Forming Factors (PRCOT) Diagram',
                type: 'flowchart',
                description: 'Central "SOIL" with 5 arrows pointing to it from: Parent Rock (rock icon), Relief (mountain), Climate (sun+rain), Organisms (tree+worm), Time (clock). Show how each affects final soil.'
            },
            {
                title: 'Podsolization vs Laterization',
                type: 'comparison-chart',
                description: 'Two soil profiles side-by-side: (1) Podzol - coniferous forest, ash-gray A horizon, reddish B, acidic (2) Laterite - tropical forest, red/yellow, iron-rich, heavily leached. Show climate icons above each.'
            },
            {
                title: 'Soil Texture Triangle',
                type: 'diagram',
                description: 'Triangular diagram with Sand (bottom left), Silt (bottom right), Clay (top) at vertices. Show % gradations and soil types (sandy loam, clay loam, silty clay, etc.). Highlight "LOAM" in center as ideal.'
            },
            {
                title: 'Soil Erosion Types',
                type: 'cross-section',
                description: 'Sloped land showing: (1) Sheet erosion (thin layer removed uniformly), (2) Rill erosion (small channels), (3) Gully erosion (deep channels). Show before/after.'
            }
        ],

        quickFacts: [
            '🌍 1 cm of soil takes 100-400 years to form (varies by climate)',
            '⏰ Soil formation rate doubles every 10°C temperature increase',
            '🌱 Topsoil (A horizon) is most fertile - only 15-30 cm thick usually',
            '🌧️ Tropical rainforests: Deepest soils (2-3m+) but infertile (leached)',
            '🏜️ Deserts: Thinnest soils (<10 cm) due to low weathering',
            '🇮🇳 India loses 5,334 million tonnes of soil to erosion annually',
            '🌾 Loam (40% sand, 40% silt, 20% clay) is ideal agricultural soil',
            '🧪 Podzols: Acidic (pH 4-5), ash-gray color, coniferous forests',
            '🔴 Laterite: Red/yellow, iron-rich, hardens when exposed (used as bricks)',
            '🪱 Earthworms: Called "intestines of Earth" - mix soil, improve fertility',
            '📊 Soil pH: Acidic (<7) in wet climates, Alkaline (>7) in dry climates',
            '⚠️ 1/3 of world\'s soils are degraded (UN FAO estimate)'
        ],

        upscTraps: [
            {
                trap: 'Tropical soils are most fertile because of lush vegetation',
                clarity: 'OPPOSITE! Tropical soils (laterite) are heavily LEACHED by intense rainfall. Nutrients are in PLANTS, not soil. Once forest cleared, soil infertile. Temperate grassland soils (chernozem) are most fertile.'
            },
            {
                trap: 'Eluviation and illuviation are the same thing',
                clarity: 'OPPOSITE processes! Eluviation = REMOVAL (washing down from A horizon). Illuviation = DEPOSITION (accumulation in B horizon). E = Exit, I = In.'
            },
            {
                trap: 'Soil texture and soil structure mean the same',
                clarity: 'DIFFERENT! Texture = particle SIZE (sand, silt, clay proportion). Structure = particle ARRANGEMENT (granular, blocky, platy). Texture is fixed, structure can be improved.'
            },
            {
                trap: 'Parent rock determines soil type completely',
                clarity: 'Parent rock is ONE of 5 factors (PRCOT). CLIMATE is actually most important! Same parent rock gives different soils in different climates (granite in tropics→laterite, in temperate→podzol).'
            }
        ],

        revisionBox: {
            title: '⚡ 30-Second Revision',
            points: [
                'Forming factors: PRCOT = Parent rock, Relief, Climate (most important), Organisms, Time',
                'Processes: Weathering → Humification → Eluviation (leaching down) + Illuviation (deposition)',
                'Horizons: O (organic) → A (topsoil, leached) → B (subsoil, deposited) → C (weathered rock) → R (bedrock)',
                'Special processes: Podsolization (cold+wet), Laterization (hot+wet), Calcification (dry)',
                'Texture: Sand (large, drains fast), Silt (medium), Clay (tiny, holds water). Loam = ideal mix',
                'Conservation: Contour plowing, terracing, crop rotation, cover crops, windbreaks'
            ]
        },

        pyqs: [
            {
                year: 2021,
                question: 'Discuss the factors responsible for soil formation. How does climate influence soil development?',
                type: 'Mains'
            },
            {
                year: 2019,
                question: 'Explain the processes of podsolization and laterization with suitable examples.',
                type: 'Mains'
            },
            {
                year: 2020,
                question: 'What are the different horizons of soil profile? Describe with diagram.',
                type: 'Mains'
            },
            {
                year: 2018,
                question: 'Which horizon of soil is most fertile?',
                type: 'Prelims',
                options: ['O Horizon', 'A Horizon', 'B Horizon', 'C Horizon']
            },
            {
                year: 2022,
                question: 'Discuss soil conservation methods practiced in India.',
                type: 'Mains'
            }
        ]
    },


    // ============================================
    // TOPIC 2: SOIL TYPES OF WORLD
    // ============================================
    {
        id: 'world-soil-types',
        name: 'Soil Types of World',
        icon: '🌍',
        category: 'biogeography',
        theme: 'soil',
        difficulty: 'medium',
        upscRelevance: 'high',

        mindMap: {
            central: 'World Soil Types',
            branches: [
                {
                    name: 'Zonal Soils (Climate-based)',
                    color: '#8B4513',
                    children: [
                        'Podzols (Coniferous forests)',
                        'Chernozems (Grasslands - most fertile)',
                        'Laterite/Oxisols (Tropical)',
                        'Desert Soils (Aridisols)'
                    ]
                },
                {
                    name: 'Intrazonal Soils',
                    color: '#E67E22',
                    children: [
                        'Saline Soils (Salt affected)',
                        'Peaty/Bog Soils (Waterlogged)',
                        'Calcrete Soils (Lime rich)'
                    ]
                },
                {
                    name: 'Azonal Soils (Young)',
                    color: '#95A5A6',
                    children: [
                        'Alluvial (River deposits)',
                        'Loess (Wind deposits)',
                        'Skeletal (Rocky, thin)'
                    ]
                },
                {
                    name: 'Key Characteristics',
                    color: '#27AE60',
                    children: [
                        'Color (indicates composition)',
                        'Depth (climate-dependent)',
                        'Fertility (nutrient content)',
                        'pH (acidity/alkalinity)'
                    ]
                }
            ]
        },

        memoryHooks: [
            {
                type: 'mnemonic',
                title: 'Most Fertile Soil',
                content: 'CHERNOZEM = CHERished by farmerNO ZEro yield! Black soils of grasslands (prairies, steppes) - most fertile on Earth.',
                icon: '🧠'
            },
            {
                type: 'comparison',
                title: 'Podzol vs Laterite',
                content: 'Podzol = POLar/cold regions, ash-GRAY, coniferous. Laterite = LAVA-red, tropical, iron oxide. Both heavily leached but different climates!',
                icon: '🌍'
            },
            {
                type: 'acronym',
                title: 'Zonal Soil Types',
                content: 'PCDL = Podzol (cold forest), Chernozem (grassland), Desert, Laterite (tropical). Climate determines all!',
                icon: '🔤'
            },
            {
                type: 'visual',
                title: 'Soil Belt Pattern',
                content: 'Latitude pattern: Tundra (thin) → Podzol (gray) → Brown forest → CHERNOZEM (black, fertile belt!) → Desert (thin) → Laterite (red, tropics). Like Earth wearing colored soil belts!',
                icon: '🌈'
            }
        ],

        conceptBlocks: [
            {
                title: 'Podzols (Spodosols) - Cold Forest Soils',
                icon: '🌲',
                points: [
                    'LOCATION: Cool, humid climates - coniferous (taiga) forests',
                    '  • Russia, Canada, Scandinavia, Alaska',
                    '  • 60-70°N latitude belt',
                    '',
                    'FORMATION (Podsolization):',
                    '  • Coniferous needles → acidic litter',
                    '  • Heavy rainfall → intense leaching',
                    '  • Silica, calcium leached from A horizon',
                    '  • Iron, aluminum deposited in B horizon',
                    '',
                    'CHARACTERISTICS:',
                    '  • A HORIZON: Ash-gray color (minerals removed)',
                    '    - Called "E horizon" (eluviated/leached)',
                    '  • B HORIZON: Reddish-brown (iron/aluminum oxide deposits)',
                    '    - Can form hardpan',
                    '  • pH: 4-5.5 (very acidic)',
                    '  • Texture: Sandy, coarse',
                    '  • Depth: Moderate (30-60 cm)',
                    '',
                    'FERTILITY: LOW',
                    '  • Highly acidic, nutrient-poor',
                    '  • Requires heavy fertilization',
                    '  • Not suitable for intensive agriculture',
                    '  • Forestry main use',
                    '',
                    'OTHER NAMES: Spodosols, Podsols, Gray Forest Soils'
                ]
            },
            {
                title: 'Chernozems - MOST FERTILE SOILS',
                icon: '🌾',
                points: [
                    'NAME ORIGIN: Russian "chernaya zemlya" = BLACK EARTH',
                    '',
                    'LOCATION: Mid-latitude grasslands',
                    '  • Russian/Ukrainian Steppes (origin)',
                    '  • North American Prairies',
                    '  • Argentine Pampas',
                    '  • Australian Murray-Darling',
                    '  • 40-55°N latitude belt',
                    '',
                    'FORMATION (Calcification):',
                    '  • Temperate grassland vegetation',
                    '  • Moderate rainfall (400-600 mm)',
                    '  • Grasses have deep roots → thick humus',
                    '  • Limited leaching → calcium carbonate accumulates in B horizon',
                    '  • Dry season prevents excessive leaching',
                    '',
                    'CHARACTERISTICS:',
                    '  • COLOR: Black to dark brown (very high humus)',
                    '  • A HORIZON: 60-80 cm thick! (deepest topsoil)',
                    '  • Humus: 5-15% (extremely high)',
                    '  • B HORIZON: Lighter, calcium carbonate nodules',
                    '  • Texture: Loamy, crumbly',
                    '  • Structure: Granular (ideal for farming)',
                    '  • pH: 6.5-7.5 (neutral to slightly alkaline)',
                    '',
                    'FERTILITY: ★★★★★ HIGHEST IN THE WORLD',
                    '  • Deep humus layer',
                    '  • Rich in nitrogen, phosphorus, potassium',
                    '  • Excellent structure and water retention',
                    '  • "Breadbasket soils" of the world',
                    '',
                    'AGRICULTURE:',
                    '  • Wheat belt of the world',
                    '  • Ukraine: 30% of world wheat exports (chernozem belt)',
                    '  • USA Great Plains: Corn, soybean',
                    '  • Argentine Pampas: Wheat, cattle',
                    '',
                    'THREAT: Erosion during plowing (1930s Dust Bowl in USA)'
                ]
            },
            {
                title: 'Laterite (Oxisols) - Tropical Red Soils',
                icon: '🌴',
                points: [
                    'NAME ORIGIN: Latin "later" = brick (hardens when exposed)',
                    '',
                    'LOCATION: Hot, wet tropical climates',
                    '  • Tropical rainforests (Amazon, Congo, Indonesia)',
                    '  • India: Western Ghats, Assam, Meghalaya',
                    '  • 10°N - 10°S latitude belt',
                    '',
                    'FORMATION (Laterization):',
                    '  • High temperature + heavy rainfall',
                    '  • Extreme chemical weathering',
                    '  • Intense leaching removes silica, calcium, nitrogen',
                    '  • Iron and aluminum oxides remain',
                    '  • Over thousands of years',
                    '',
                    'CHARACTERISTICS:',
                    '  • COLOR: Red, yellow, or reddish-brown (iron oxide = rust!)',
                    '  • DEPTH: Very deep (2-3 meters)',
                    '  • Texture: Clayey',
                    '  • Structure: Porous, spongy when wet',
                    '  • Hardens irreversibly when exposed to air (laterite brick)',
                    '  • pH: 5-6.5 (acidic)',
                    '',
                    'FERTILITY: VERY LOW (paradox!)',
                    '  • Despite lush rainforest above',
                    '  • All nutrients in VEGETATION, not soil',
                    '  • Heavily leached (nutrients washed away)',
                    '  • Low nitrogen, phosphorus',
                    '  • Quickly exhausted if forest cleared',
                    '',
                    'AGRICULTURE:',
                    '  • Poor for farming without fertilization',
                    '  • Shifting cultivation (slash-and-burn) traditional method',
                    '  • Cashew, rubber, coffee can grow',
                    '  • Heavy fertilizer needed for crops',
                    '',
                    'USES:',
                    '  • Building material (laterite bricks)',
                    '  • Iron ore extraction (high iron content)',
                    '  • Aluminum ore (bauxite) forms in laterite'
                ]
            },
            {
                title: 'Desert Soils (Aridisols)',
                icon: '🏜️',
                points: [
                    'LOCATION: Hot and cold deserts',
                    '  • Sahara, Arabian, Thar (hot deserts)',
                    '  • Gobi, Great Basin (cold deserts)',
                    '  • 20-30°N and S latitude belts',
                    '',
                    'FORMATION:',
                    '  • Very low rainfall (<250 mm)',
                    '  • Little vegetation → minimal humus',
                    '  • Limited weathering → coarse texture',
                    '  • High evaporation → salt accumulation',
                    '',
                    'CHARACTERISTICS:',
                    '  • COLOR: Light gray, yellowish, reddish-brown',
                    '  • DEPTH: Very thin (0-10 cm)',
                    '  • Texture: Sandy, gravelly, stony',
                    '  • Humus: Almost nil',
                    '  • Salts: Calcium carbonate, gypsum accumulate',
                    '  • pH: 7-9 (alkaline)',
                    '  • Often CALICHE layer (hardpan of lime)',
                    '',
                    'FERTILITY: LOW',
                    '  • Dry, salty, no organic matter',
                    '  • Water scarcity main limitation',
                    '  • CAN be productive if irrigated (California, Israel)',
                    '',
                    'TYPES:',
                    '  • REG: Gravel/pebble desert (Sahara)',
                    '  • ERG: Sand dune desert (Arabian)',
                    '  • HAMADA: Rocky plateau desert',
                    '',
                    'POTENTIAL: High mineral content but needs water'
                ]
            },
            {
                title: 'Brown & Red Mediterranean Soils',
                icon: '🫒',
                points: [
                    'LOCATION: Mediterranean climate regions',
                    '  • Mediterranean Basin (Spain, Italy, Greece)',
                    '  • California, Chile, South Africa, SW Australia',
                    '  • 30-40° latitudes',
                    '',
                    'CLIMATE: Hot dry summers + mild wet winters',
                    '',
                    'CHARACTERISTICS:',
                    '  • COLOR: Brown to reddish-brown',
                    '  • Depth: Moderate (20-40 cm)',
                    '  • pH: 7-8 (slightly alkaline)',
                    '  • Lime accumulation in lower layers',
                    '  • Moderate fertility',
                    '',
                    'AGRICULTURE:',
                    '  • Olives, grapes (wine), citrus fruits',
                    '  • Wheat, barley',
                    '  • Requires irrigation in summer',
                    '',
                    'THREAT: Erosion during winter rains'
                ]
            },
            {
                title: 'Peaty & Bog Soils (Histosols)',
                icon: '💧',
                points: [
                    'LOCATION: Waterlogged areas',
                    '  • Tundra, swamps, marshes, bogs',
                    '  • Ireland, Scotland, Finland, Canada',
                    '  • Coastal wetlands',
                    '',
                    'FORMATION:',
                    '  • Waterlogged conditions',
                    '  • Anaerobic (no oxygen) → incomplete decomposition',
                    '  • Organic matter accumulates as peat',
                    '',
                    'CHARACTERISTICS:',
                    '  • COLOR: Dark brown to black',
                    '  • ORGANIC MATTER: 20-90% (highest!)',
                    '  • Texture: Spongy, fibrous',
                    '  • pH: 3.5-5.5 (very acidic)',
                    '  • Water content: Very high',
                    '',
                    'USES:',
                    '  • Peat fuel (Ireland)',
                    '  • Horticulture (peat moss)',
                    '  • Not suitable for agriculture (acidic, waterlogged)',
                    '',
                    'CONSERVATION CONCERN: Major carbon sink - draining releases CO₂'
                ]
            },
            {
                title: 'Alluvial Soils (Azonal)',
                icon: '🏞️',
                points: [
                    'LOCATION: River valleys, flood plains, deltas',
                    '  • Nile, Ganga-Brahmaputra, Mekong, Mississippi deltas',
                    '  • Global extent',
                    '',
                    'FORMATION:',
                    '  • River deposition of sediments',
                    '  • Young soils (no time for profile development)',
                    '  • Continuously renewed by flooding',
                    '',
                    'CHARACTERISTICS:',
                    '  • NO CLEAR HORIZONS (azonal)',
                    '  • Texture: Variable (clay, silt, sand)',
                    '  • Color: Gray, light brown',
                    '  • Depth: Can be very deep',
                    '  • Stratified (layers of different sediments)',
                    '',
                    'FERTILITY: VERY HIGH',
                    '  • Rich in minerals from upstream',
                    '  • Renewed nutrients from flooding',
                    '  • Well-drained (usually)',
                    '  • Ancient civilizations: Egypt (Nile), Mesopotamia, Indus Valley',
                    '',
                    'TYPES:',
                    '  • KHADAR: New alluvium, lighter color, renewed annually',
                    '  • BHANGAR: Old alluvium, darker, terraces above flood plain',
                    '',
                    'AGRICULTURE: Rice, wheat, sugarcane, cotton - intensive farming'
                ]
            }
        ],

        diagrams: [
            {
                title: 'Global Soil Zones Map',
                type: 'map',
                description: 'World map with latitude belts showing: Tundra soils (poles), Podzols (60-70°), Brown forest (40-60°), CHERNOZEMS (40-55° - highlighted), Desert (20-30°), Laterite (10°N-10°S tropical belt). Color-coded bands.'
            },
            {
                title: 'Podzol vs Chernozem vs Laterite Profiles',
                type: 'comparison-chart',
                description: 'Three side-by-side soil profiles: (1) Podzol - gray A, red B, coniferous trees (2) Chernozem - thick black A, light B with lime, grass (3) Laterite - deep red, tropical tree. Show depths and characteristics.'
            },
            {
                title: 'Chernozem Belt - Breadbasket of World',
                type: 'map',
                description: 'Map highlighting chernozem regions: Ukraine-Russia steppes, US Great Plains, Argentine Pampas, Australian Murray-Darling. Mark major wheat-producing areas.'
            },
            {
                title: 'Soil Fertility Comparison',
                type: 'bar-graph',
                description: 'Bar chart comparing fertility levels: Chernozem (★★★★★ highest), Alluvial (★★★★), Brown forest (★★★), Desert (★★ if irrigated), Podzol (★★), Laterite (★ lowest). Show why.'
            }
        ],

        quickFacts: [
            '🏆 Chernozem = MOST FERTILE soil on Earth (60-80 cm thick black topsoil)',
            '🌍 Ukraine + Russia: 60% of world\'s chernozem belt',
            '🌾 Chernozem: 5-15% humus (vs 1-3% in most soils)',
            '🔴 Laterite hardens into brick when exposed - used in construction',
            '🌲 Podzol: Ash-gray color, very acidic (pH 4-5), poor fertility',
            '🏜️ Desert soils: Can be fertile if irrigated (California agriculture proves it)',
            '⚠️ Tropical rainforest paradox: Lush vegetation, infertile soil (laterite)',
            '🌊 Alluvial soils: Ancient civilizations (Egypt, Mesopotamia, Indus) thrived on them',
            '💧 Peaty soils: Up to 90% organic matter but too acidic for farming',
            '📏 Soil depth: Laterite (2-3m) > Chernozem (80cm) > Podzol (60cm) > Desert (<10cm)',
            '🇺🇦 Ukraine called "breadbasket of Europe" due to chernozem',
            '🌡️ 1930s Dust Bowl: Chernozem erosion in US Great Plains (poor farming practices)'
        ],

        upscTraps: [
            {
                trap: 'Tropical rainforest soils are most fertile because of dense vegetation',
                clarity: 'BIGGEST SOIL PARADOX! Laterite (tropical soil) is INFERTILE - heavily leached. All nutrients locked in PLANTS, not soil. Once forest cleared, soil exhausted in 2-3 years. Chernozem (grassland) is most fertile!'
            },
            {
                trap: 'Black soil means fertile soil everywhere',
                clarity: 'NOT ALWAYS! Chernozem (grassland) = black + fertile ✓. But India\'s Black Cotton Soil (Regur) = black + moderately fertile, heavy clay. Color indicates organic matter but fertility depends on more factors.'
            },
            {
                trap: 'Podzol and laterite are similar because both are leached',
                clarity: 'DIFFERENT climates! Podzol = COLD + wet (coniferous forests, gray). Laterite = HOT + wet (tropical, red). Both leached but different processes and locations.'
            },
            {
                trap: 'Desert soils cannot support agriculture',
                clarity: 'Desert soils have NUTRIENTS but lack WATER. With irrigation, they can be very productive (California\'s Central Valley, Israel). Problem is water, not soil nutrients.'
            }
        ],

        revisionBox: {
            title: '⚡ 30-Second Revision',
            points: [
                'Podzol: Cold forests, gray (ash), acidic, leached, low fertility',
                'CHERNOZEM: Grasslands (steppes/prairies), BLACK, 60-80cm thick, MOST FERTILE',
                'Laterite: Tropical, RED (iron oxide), deep (2-3m), heavily leached, LOW fertility (paradox!)',
                'Desert: Thin (<10cm), alkaline, salty, fertile IF irrigated',
                'Alluvial: River deposits, young (no horizons), HIGH fertility, ancient civilizations',
                'Peaty: Waterlogged, 20-90% organic, acidic, not for farming'
            ]
        },

        pyqs: [
            {
                year: 2021,
                question: 'Discuss the formation and characteristics of chernozem soils. Why are they considered most fertile?',
                type: 'Mains'
            },
            {
                year: 2020,
                question: 'Explain the paradox of low fertility in tropical rainforest soils despite luxuriant vegetation.',
                type: 'Mains'
            },
            {
                year: 2019,
                question: 'Compare and contrast podzol and laterite soils with respect to their formation and characteristics.',
                type: 'Mains'
            },
            {
                year: 2018,
                question: 'The most fertile soil type in the world is:',
                type: 'Prelims',
                options: ['Podzol', 'Chernozem', 'Laterite', 'Desert Soil']
            },
            {
                year: 2022,
                question: 'What are alluvial soils? Discuss their significance for ancient civilizations.',
                type: 'Mains'
            }
        ]
    }

];

    // ============================================
    // TOPIC 3: SOIL TYPES OF INDIA
    // ============================================
    {
        id: 'india-soil-types',
        name: 'Soil Types of India',
        icon: '🇮🇳',
        category: 'biogeography',
        theme: 'soil',
        difficulty: 'high',
        upscRelevance: 'high',

        mindMap: {
            central: 'India Soil Types',
            branches: [
                {
                    name: 'Alluvial Soils',
                    color: '#3498DB',
                    children: [
                        'Coverage: 43% of India',
                        'Khadar (New) vs Bhangar (Old)',
                        'Fertile - Rice, Wheat, Sugarcane',
                        'Indo-Gangetic Plains'
                    ]
                },
                {
                    name: 'Black Soils (Regur)',
                    color: '#2C3E50',
                    children: [
                        'Coverage: 16% (Deccan Plateau)',
                        'Cotton Soil (moisture retention)',
                        'Self-plowing cracks',
                        'Maharashtra, Gujarat, MP'
                    ]
                },
                {
                    name: 'Red & Yellow Soils',
                    color: '#E74C3C',
                    children: [
                        'Coverage: 18%',
                        'Iron oxide gives color',
                        'Eastern Ghats, Chhattisgarh',
                        'Coarse, less fertile'
                    ]
                },
                {
                    name: 'Laterite Soils',
                    color: '#E67E22',
                    children: [
                        'Coverage: 3.7%',
                        'Western Ghats, Assam',
                        'Iron-rich, acidic',
                        'Cashew, Rubber, Coffee'
                    ]
                },
                {
                    name: 'Other Soils',
                    color: '#16A085',
                    children: [
                        'Desert Soils (Rajasthan)',
                        'Mountain Soils (Himalayas)',
                        'Saline & Alkaline (Punjab)',
                        'Peaty & Marshy (Kerala, Bengal)'
                    ]
                }
            ]
        },

        memoryHooks: [
            {
                type: 'mnemonic',
                title: 'Major India Soils',
                content: 'ABRDLM = Alluvial (largest 43%), Black (cotton), Red (iron), Desert, Laterite (cashew), Mountain (thin)',
                icon: '🧠'
            },
            {
                type: 'comparison',
                title: 'Khadar vs Bhangar',
                content: 'Khadar = NEW kid (renewed annually, flood plains, lighter). Bhangar = OLD grandpa (terraces above flood, darker, older alluvium).',
                icon: '🏞️'
            },
            {
                type: 'acronym',
                title: 'Black Soil States',
                content: 'MGK = Maharashtra (largest extent), Gujarat, Karnataka (MP + Andhra also). Cotton belt of India!',
                icon: '🔤'
            },
            {
                type: 'visual',
                title: 'Black Soil Self-Plowing',
                content: 'Wet season: Sticky clay SWELLS. Dry season: CRACKS form (wide enough to fall into!). Cracks naturally break clumps = "self-plowing".',
                icon: '🌧️'
            }
        ],

        conceptBlocks: [
            {
                title: 'Alluvial Soils - LARGEST (43%)',
                icon: '🏞️',
                points: [
                    'COVERAGE: 43% of India (~1.43 lakh km²)',
                    '  • Largest soil group in India',
                    '',
                    'LOCATION:',
                    '  • ENTIRE Indo-Gangetic-Brahmaputra Plains',
                    '  • Deltas: Ganga-Brahmaputra, Mahanadi, Godavari, Krishna, Cauvery',
                    '  • States: Punjab, Haryana, UP, Bihar, West Bengal, Assam plains',
                    '  • Parts of Gujarat and coastal strips',
                    '',
                    'TYPES:',
                    '  • KHADAR (New Alluvium):',
                    '    - Found in flood plains (low-lying)',
                    '    - Light color (less weathered)',
                    '    - Renewed annually by floods',
                    '    - Fine silt, sandy texture',
                    '    - More fertile (fresh minerals)',
                    '  • BHANGAR (Old Alluvium):',
                    '    - Found on terraces above flood level',
                    '    - Dark color (more weathered)',
                    '    - Not renewed (older deposits)',
                    '    - Contains kankar (lime nodules) in drier areas',
                    '    - Slightly less fertile than khadar',
                    '',
                    'CHARACTERISTICS:',
                    '  • Texture: Loamy to clayey (varies by region)',
                    '  • Color: Light gray to ash gray',
                    '  • Depth: Very deep (can exceed 1000m in Ganga-Brahmaputra delta!)',
                    '  • Structure: Granular, porous',
                    '  • pH: 6-8 (slightly acidic to neutral)',
                    '  • Humus: Low to moderate',
                    '',
                    'FERTILITY: HIGH',
                    '  • Rich in potash, phosphoric acid',
                    '  • Deficient in nitrogen, organic matter',
                    '  • Responds well to fertilizers',
                    '',
                    'AGRICULTURE (India\'s Food Bowl):',
                    '  • RICE: West Bengal, Bihar, Eastern UP, Punjab',
                    '  • WHEAT: Punjab, Haryana, Western UP',
                    '  • SUGARCANE: UP, Punjab, Haryana',
                    '  • COTTON: Punjab, Haryana',
                    '  • JUTE: West Bengal, Assam (deltaic areas)',
                    '  • Supports 3 crop seasons (Rabi, Kharif, Zaid)',
                    '',
                    'PROBLEMS:',
                    '  • Waterlogging in Punjab, Haryana (over-irrigation)',
                    '  • Salinity/alkalinity in drier parts',
                    '  • Erosion in hilly fringes'
                ]
            },
            {
                title: 'Black Soils (Regur) - Cotton Soil',
                icon: '🌑',
                points: [
                    'COVERAGE: 16% of India (~5.46 lakh km²)',
                    '  • Second largest after alluvial',
                    '',
                    'OTHER NAMES: Regur, Black Cotton Soil, Tropical Black Earth',
                    '',
                    'LOCATION: Deccan Plateau (Lava region)',
                    '  • MAJOR: Maharashtra (largest extent), Gujarat, Madhya Pradesh',
                    '  • MINOR: Karnataka, Andhra Pradesh, Tamil Nadu, Chhattisgarh',
                    '  • Corresponds to Deccan Trap (basalt lava) region',
                    '',
                    'PARENT ROCK: Basaltic lava (volcanic)',
                    '  • Rich in iron, magnesium, aluminum',
                    '',
                    'FORMATION:',
                    '  • Weathering of basalt under semi-arid tropical conditions',
                    '  • Montmorillonite clay (swelling clay) predominates',
                    '  • Formed in-situ (not transported)',
                    '',
                    'CHARACTERISTICS:',
                    '  • COLOR: Deep black to dark brown (titanium oxide + organic matter)',
                    '  • Texture: Clayey (30-60% clay)',
                    '  • Structure: Granular, massive',
                    '  • Depth: Deep to very deep (can reach 3-5m)',
                    '  • pH: 7.5-8.5 (slightly alkaline)',
                    '',
                    'UNIQUE PROPERTIES:',
                    '  • MOISTURE RETENTION: Excellent (clayey texture)',
                    '    - Can hold moisture for months',
                    '    - Ideal for rain-fed cotton (no irrigation needed)',
                    '  • SELF-PLOWING/CRACKING:',
                    '    - Wet season: Clay swells, becomes sticky',
                    '    - Dry season: Shrinks, forms deep wide cracks (10-15 cm wide!)',
                    '    - Surface material falls into cracks',
                    '    - Natural tillage = "self-plowing"',
                    '  • STICKY when wet, HARD when dry',
                    '',
                    'FERTILITY: MODERATE to HIGH',
                    '  • Rich in: Calcium, magnesium, potash, lime',
                    '  • Deficient in: Nitrogen, phosphorus, organic matter',
                    '  • Good moisture retention compensates',
                    '',
                    'AGRICULTURE:',
                    '  • COTTON (main crop - 50% of India\'s cotton)',
                    '    - Maharashtra, Gujarat cotton belt',
                    '  • SUGARCANE, TOBACCO, CITRUS, JOWAR, WHEAT',
                    '  • Rain-fed crops ideal (moisture retention)',
                    '',
                    'PROBLEMS:',
                    '  • Difficult to plow when dry (hard)',
                    '  • Difficult to work when wet (sticky)',
                    '  • Narrow cultivation window',
                    '  • Salinity in poorly drained areas',
                    '  • Erosion in sloping areas'
                ]
            },
            {
                title: 'Red & Yellow Soils',
                icon: '🔴',
                points: [
                    'COVERAGE: 18% of India (~5.6 lakh km²)',
                    '',
                    'LOCATION:',
                    '  • Eastern Ghats, Chhattisgarh, Odisha',
                    '  • Parts of: Karnataka, Tamil Nadu, Andhra Pradesh',
                    '  • Meghalaya, Nagaland hills',
                    '  • Parts of Madhya Pradesh, Jharkhand',
                    '',
                    'PARENT ROCK: Ancient crystalline rocks',
                    '  • Granite, gneiss, metamorphic rocks',
                    '',
                    'FORMATION:',
                    '  • Weathering under humid tropical conditions',
                    '  • Iron oxidation in well-drained areas',
                    '  • Yellow variant in poorly drained/waterlogged areas',
                    '',
                    'CHARACTERISTICS:',
                    '  • COLOR:',
                    '    - RED: Iron oxide (Fe₂O₃) in well-drained areas',
                    '    - YELLOW: Hydrated iron oxide in waterlogged areas',
                    '  • Texture: Sandy to loamy (coarse)',
                    '  • Depth: Thin to medium (15-50 cm)',
                    '  • Structure: Friable (easily crumbled)',
                    '  • pH: 5.5-7 (slightly acidic)',
                    '  • Porous, friable',
                    '',
                    'FERTILITY: LOW to MODERATE',
                    '  • Deficient in: Nitrogen, phosphorus, humus',
                    '  • Adequate in: Potash, iron, lime',
                    '  • Coarse texture → poor water retention',
                    '  • Needs fertilization and irrigation',
                    '',
                    'AGRICULTURE:',
                    '  • RICE, RAGI, MILLETS (in valleys with irrigation)',
                    '  • GROUNDNUT, PULSES (rain-fed)',
                    '  • CASHEW, TAPIOCA (in laterite-red transition zones)',
                    '  • Not suitable for water-intensive crops',
                    '',
                    'PROBLEMS:',
                    '  • Low fertility',
                    '  • Prone to erosion (coarse, friable)',
                    '  • Poor moisture retention'
                ]
            },
            {
                title: 'Laterite Soils',
                icon: '🧱',
                points: [
                    'COVERAGE: 3.7% of India (~1.26 lakh km²)',
                    '',
                    'LOCATION:',
                    '  • WESTERN GHATS: Karnataka, Kerala, Goa, Maharashtra',
                    '  • NORTHEAST: Assam, Meghalaya, Arunachal Pradesh',
                    '  • Eastern Ghats: Odisha hills',
                    '  • Andaman & Nicobar Islands',
                    '  • High rainfall (>200 cm), high temperature areas',
                    '',
                    'FORMATION (Laterization):',
                    '  • Intense leaching under heavy rainfall (>200 cm)',
                    '  • Silica, calcium, magnesium washed away',
                    '  • Iron and aluminum oxides remain',
                    '  • Over thousands of years',
                    '',
                    'CHARACTERISTICS:',
                    '  • COLOR: Red, reddish-brown, brick-red',
                    '  • Texture: Clayey, porous',
                    '  • Depth: Deep (1-3 meters)',
                    '  • Structure: Spongy when wet, hardens when exposed to air',
                    '  • pH: 5-6.5 (acidic)',
                    '  • High in iron and aluminum',
                    '',
                    'UNIQUE PROPERTY:',
                    '  • HARDENS IRREVERSIBLY when exposed to air',
                    '  • Used as building material (laterite bricks)',
                    '  • Ancient temples in Karnataka built with laterite',
                    '',
                    'FERTILITY: LOW',
                    '  • Heavily leached (nutrients washed away)',
                    '  • Deficient in: Nitrogen, potash, phosphorus, lime, humus',
                    '  • Rich in: Iron, aluminum (not useful for plants)',
                    '  • Acidic pH unsuitable for many crops',
                    '',
                    'AGRICULTURE:',
                    '  • Suitable crops (acid-tolerant):',
                    '    - CASHEW, TEA, COFFEE, RUBBER',
                    '    - COCONUT, ARECANUT',
                    '    - TAPIOCA, RAGI',
                    '  • Requires heavy fertilization for other crops',
                    '',
                    'USES:',
                    '  • Building bricks (traditional construction)',
                    '  • Road metal',
                    '  • Aluminum ore (bauxite) extraction',
                    '',
                    'PROBLEMS:',
                    '  • Low natural fertility',
                    '  • Acidic nature',
                    '  • Erosion-prone on slopes'
                ]
            },
            {
                title: 'Arid/Desert Soils',
                icon: '🏜️',
                points: [
                    'COVERAGE: 4.42% of India',
                    '',
                    'LOCATION:',
                    '  • RAJASTHAN: Thar Desert (major extent)',
                    '  • Parts of: Gujarat, Punjab, Haryana',
                    '  • Rain shadow areas of Western Ghats',
                    '',
                    'CLIMATE: Arid to semi-arid (<50 cm rainfall)',
                    '',
                    'CHARACTERISTICS:',
                    '  • COLOR: Red to brown',
                    '  • Texture: Sandy to gravelly',
                    '  • Depth: Very shallow (0-10 cm)',
                    '  • Humus: Almost nil',
                    '  • Salts: High (evaporation > rainfall)',
                    '  • Kankar (calcium carbonate) layer common',
                    '  • pH: 7-9.5 (alkaline)',
                    '',
                    'FERTILITY: LOW (but has potential)',
                    '  • Not inherently infertile',
                    '  • Water scarcity is main limitation',
                    '  • CAN be productive if irrigated',
                    '',
                    'AGRICULTURE:',
                    '  • WITHOUT IRRIGATION:',
                    '    - Bajra, jowar, pulses (drought-resistant)',
                    '    - Pastoralism (camel, sheep, goat)',
                    '  • WITH IRRIGATION (Indira Gandhi Canal):',
                    '    - Wheat, cotton, mustard',
                    '    - Horticulture (Israel model)',
                    '',
                    'INDIRA GANDHI CANAL:',
                    '  • World\'s longest irrigation canal (649 km)',
                    '  • Transformed parts of Thar Desert',
                    '  • "Green revolution in the desert"',
                    '',
                    'PROBLEMS:',
                    '  • Water scarcity',
                    '  • Wind erosion (sand dunes shift)',
                    '  • Salinization when over-irrigated',
                    '  • Desertification threat'
                ]
            },
            {
                title: 'Mountain Soils (Forest Soils)',
                icon: '🏔️',
                points: [
                    'COVERAGE: 2.85% of India',
                    '',
                    'LOCATION:',
                    '  • HIMALAYAS: J&K, HP, Uttarakhand, Sikkim, Arunachal',
                    '  • Western Ghats and Eastern Ghats (hill regions)',
                    '  • Other hill ranges: Vindhya, Satpura, Aravalli',
                    '',
                    'FORMATION:',
                    '  • Deposition from glaciers, streams',
                    '  • In-situ weathering on slopes',
                    '  • Varies with altitude and vegetation',
                    '',
                    'CHARACTERISTICS:',
                    '  • Texture: Loamy to silty',
                    '  • Depth: SHALLOW to VERY SHALLOW (<15 cm on slopes)',
                    '  • Structure: Immature (young soils)',
                    '  • pH: 5-7 (acidic to neutral)',
                    '  • High organic content in forest areas',
                    '',
                    'TYPES BY ALTITUDE:',
                    '  • <1000m: Loamy, rich in humus',
                    '  • 1000-2000m: Brown forest soils',
                    '  • 2000-3000m: Podzolic soils (acidic)',
                    '  • >3000m: Skeletal, rocky, thin',
                    '',
                    'FERTILITY: Variable',
                    '  • Valleys: Fertile (alluvial deposits)',
                    '  • Slopes: Infertile (erosion, thin)',
                    '',
                    'AGRICULTURE:',
                    '  • VALLEY AGRICULTURE: Rice, maize, potatoes',
                    '  • TERRACED FARMING: Tea, coffee, cardamom, fruits',
                    '  • HORTICULTURE: Apples (HP, J&K), oranges (NE)',
                    '  • PLANTATION: Tea (Darjeeling, Assam, Nilgiris)',
                    '',
                    'PROBLEMS:',
                    '  • Erosion (steep slopes)',
                    '  • Landslides',
                    '  • Soil creep (slow downward movement)'
                ]
            },
            {
                title: 'Saline & Alkaline Soils (Usar, Kallar)',
                icon: '🧂',
                points: [
                    'COVERAGE: 1% of India',
                    '',
                    'LOCATION:',
                    '  • Punjab, Haryana (over-irrigated areas)',
                    '  • Western UP, Rajasthan',
                    '  • Coastal areas (Gujarat, Tamil Nadu, West Bengal)',
                    '  • Deltas (Sundarbans)',
                    '',
                    'TYPES:',
                    '  • SALINE (Usar): Contains sodium chloride, pH <8.5',
                    '  • ALKALINE (Reh, Kallar): Contains sodium carbonate, pH >8.5',
                    '',
                    'CAUSES:',
                    '  • Dry climate: Evaporation > rainfall',
                    '  • Over-irrigation: Waterlogging, salinization',
                    '  • Poor drainage',
                    '  • Seawater intrusion (coastal areas)',
                    '  • Capillary rise of groundwater (salt dissolved)',
                    '',
                    'CHARACTERISTICS:',
                    '  • White salt crust visible on surface',
                    '  • Infertile (toxic to plants)',
                    '  • pH: >8.5',
                    '',
                    'RECLAMATION:',
                    '  • Gypsum application (neutralizes alkalinity)',
                    '  • Leaching with good drainage',
                    '  • Growing salt-tolerant crops (barley, mustard)',
                    '  • Bio-drainage (eucalyptus absorbs groundwater)',
                    '',
                    'INDIA\'S PROBLEM:',
                    '  • 6.73 million hectares affected',
                    '  • Increasing due to canal irrigation (Punjab, Haryana)'
                ]
            },
            {
                title: 'Peaty & Marshy Soils',
                icon: '💧',
                points: [
                    'COVERAGE: 0.26% of India (limited)',
                    '',
                    'LOCATION:',
                    '  • Kerala backwaters (Kuttanad)',
                    '  • West Bengal (Sundarbans)',
                    '  • Coastal Odisha, Bihar',
                    '  • Parts of Assam valley',
                    '  • Uttarakhand (valley bottoms)',
                    '',
                    'FORMATION:',
                    '  • Waterlogged, anaerobic conditions',
                    '  • Organic matter accumulation',
                    '  • Incomplete decomposition',
                    '',
                    'CHARACTERISTICS:',
                    '  • COLOR: Black to dark brown',
                    '  • Organic matter: 10-40% (very high)',
                    '  • Texture: Spongy, heavy',
                    '  • pH: 5-6 (acidic)',
                    '  • High water content',
                    '',
                    'AGRICULTURE:',
                    '  • RICE (suitable for waterlogging)',
                    '  • Jute in reclaimed marshy areas',
                    '  • Kuttanad (Kerala): Below sea level rice farming!',
                    '',
                    'USES:',
                    '  • Carbon sink (conservation important)'
                ]
            }
        ],

        diagrams: [
            {
                title: 'India Soil Distribution Map',
                type: 'map',
                description: 'India map color-coded: Alluvial (blue, Indo-Gangetic Plains + deltas, 43%), Black (dark gray, Deccan, 16%), Red-Yellow (red, Eastern Ghats, 18%), Laterite (orange, Western Ghats + NE, 3.7%), Desert (yellow, Rajasthan, 4.4%), Mountain (brown, Himalayas, 2.85%). Show legend with percentages.'
            },
            {
                title: 'Black Soil Self-Plowing Mechanism',
                type: 'cross-section',
                description: 'Two-panel diagram: (1) Wet season - swollen clay, sticky, no cracks (2) Dry season - shrunk clay, deep wide cracks, surface material falling in. Label "self-plowing" process.'
            },
            {
                title: 'Khadar vs Bhangar Alluvial Soils',
                type: 'cross-section',
                description: 'River cross-section showing: Active flood plain with Khadar (lighter, renewed annually) + elevated terrace with Bhangar (darker, old alluvium with kankar). Mark flood level.'
            },
            {
                title: 'India\'s Cotton Belt (Black Soil)',
                type: 'map',
                description: 'Map of Maharashtra, Gujarat, MP, Karnataka showing black soil extent overlaid with cotton-growing districts. Highlight Deccan Trap basalt region.'
            },
            {
                title: 'Soil Fertility Ranking - India',
                type: 'bar-graph',
                description: 'Bar chart: Alluvial (HIGH), Black (MODERATE-HIGH), Red-Yellow (LOW-MODERATE), Laterite (LOW), Desert (LOW but irrigable), Mountain (Variable). Show deficiencies for each.'
            }
        ],

        quickFacts: [
            '🥇 Alluvial: 43% of India - LARGEST soil group (Indo-Gangetic Plains)',
            '🥈 Black soil: 16% - Cotton belt, self-plowing cracks, moisture retention champion',
            '🥉 Red-Yellow: 18% - Iron oxide color, Eastern Ghats, coarse texture',
            '🇮🇳 India has 8 major soil types (ICAR classification)',
            '🌾 Khadar (new) vs Bhangar (old) - both alluvial, flood plain vs terrace',
            '⚫ Black soil cracks: Can be 10-15 cm wide and several feet deep!',
            '🧱 Laterite: Hardens when exposed - used in ancient temple construction',
            '🏜️ Indira Gandhi Canal: 649 km - transformed Thar Desert agriculture',
            '🧂 6.73 million hectares: Affected by salinity/alkalinity (increasing)',
            '☕ Laterite belt: India\'s coffee, tea, cashew, rubber plantations',
            '🌊 Kuttanad (Kerala): Rice farming BELOW sea level (peaty soil)',
            '⚠️ Soil erosion: India loses 5,334 million tonnes annually'
        ],

        upscTraps: [
            {
                trap: 'Black soil is same as Chernozem (world\'s black soil)',
                clarity: 'DIFFERENT! Chernozem (world) = grassland, most fertile, thick humus. Indian Black Soil (Regur) = volcanic basalt origin, moderate fertility, clayey. Both black but different formation and fertility!'
            },
            {
                trap: 'Alluvial soils are same everywhere in Indo-Gangetic Plains',
                clarity: 'Two types! KHADAR = new alluvium, flood plains, lighter, renewed. BHANGAR = old alluvium, terraces, darker, kankar nodules. Location and age differ!'
            },
            {
                trap: 'Red soil is always infertile',
                clarity: 'Red-Yellow soils have LOW-MODERATE fertility naturally, but can be improved with fertilizers. Yellow variant (waterlogged) is less fertile than red (well-drained). Not completely infertile!'
            },
            {
                trap: 'Desert soils cannot support agriculture',
                clarity: 'Water scarcity is the issue, not soil! With Indira Gandhi Canal irrigation, Rajasthan desert grows wheat, cotton. Israel model shows desert agriculture is possible.'
            },
            {
                trap: 'Laterite is same as Red-Yellow soil',
                clarity: 'Both red-colored but DIFFERENT! Laterite = intense leaching, HIGH rainfall areas (>200 cm), hardens, very low fertility. Red-Yellow = moderate rainfall, doesn\'t harden, moderate fertility.'
            }
        ],

        revisionBox: {
            title: '⚡ 30-Second Revision',
            points: [
                'Alluvial (43%): Indo-Gangetic Plains, Khadar (new) vs Bhangar (old), HIGH fertility, rice-wheat',
                'Black/Regur (16%): Deccan basalt, cotton soil, self-plowing cracks, moisture retention, Maharashtra-Gujarat',
                'Red-Yellow (18%): Iron oxide, Eastern Ghats, coarse, LOW-MODERATE fertility',
                'Laterite (3.7%): Western Ghats+NE, heavy leaching, hardens, cashew-tea-coffee, LOW fertility',
                'Desert (4.4%): Rajasthan, thin, alkaline, needs irrigation (IG Canal)',
                'Mountain (2.85%): Himalayas, shallow, erosion-prone, terrace farming'
            ]
        },

        pyqs: [
            {
                year: 2022,
                question: 'Discuss the distribution and characteristics of black soils in India. Why are they called "self-plowing"?',
                type: 'Mains'
            },
            {
                year: 2021,
                question: 'Differentiate between Khadar and Bhangar soils with reference to their formation and distribution.',
                type: 'Mains'
            },
            {
                year: 2020,
                question: 'Explain the formation of laterite soils in India. Why are they unsuitable for agriculture?',
                type: 'Mains'
            },
            {
                year: 2019,
                question: 'Which soil type covers the largest area in India?',
                type: 'Prelims',
                options: ['Black Soil', 'Alluvial Soil', 'Red Soil', 'Laterite Soil']
            },
            {
                year: 2018,
                question: 'Discuss the problem of soil salinity in India and suggest remedial measures.',
                type: 'Mains'
            },
            {
                year: 2023,
                question: 'Examine the impact of Indira Gandhi Canal on the agriculture of Rajasthan.',
                type: 'Mains'
            }
        ]
    },


    // ============================================
    // TOPIC 4: WORLD BIOMES
    // ============================================
    {
        id: 'world-biomes',
        name: 'World Biomes',
        icon: '🌍',
        category: 'biogeography',
        theme: 'biome',
        difficulty: 'medium',
        upscRelevance: 'high',

        mindMap: {
            central: 'World Biomes',
            branches: [
                {
                    name: 'Forest Biomes',
                    color: '#27AE60',
                    children: [
                        'Tropical Rainforest (Equatorial)',
                        'Tropical Deciduous (Monsoon)',
                        'Temperate Deciduous',
                        'Temperate Coniferous (Taiga)',
                        'Mediterranean Forests'
                    ]
                },
                {
                    name: 'Grassland Biomes',
                    color: '#F39C12',
                    children: [
                        'Tropical Grasslands (Savanna)',
                        'Temperate Grasslands (Prairies, Steppes)'
                    ]
                },
                {
                    name: 'Desert Biomes',
                    color: '#E67E22',
                    children: [
                        'Hot Deserts (Sahara, Arabian)',
                        'Cold Deserts (Gobi, Great Basin)'
                    ]
                },
                {
                    name: 'Polar Biomes',
                    color: '#3498DB',
                    children: [
                        'Tundra (Arctic/Alpine)',
                        'Ice Caps (Antarctica, Greenland)'
                    ]
                }
            ]
        },

        memoryHooks: [
            {
                type: 'mnemonic',
                title: 'Biome Latitude Sequence',
                content: 'From Equator to Pole: Rainforest → Savanna → Desert → Temperate Forest → Taiga → Tundra → Ice. Remember as "Rain Saves Dry Trees Till Ice"!',
                icon: '🧠'
            },
            {
                type: 'comparison',
                title: 'Rainforest vs Taiga',
                content: 'Rainforest = Hot+Wet, DIVERSE (millions of species), dense canopy, year-round growth. Taiga = Cold+Dry, UNIFORM (few species), sparse coniferous, short growing season.',
                icon: '🌲'
            },
            {
                type: 'acronym',
                title: 'Grassland Names',
                content: 'PVLPS = Prairies (N.America), Veld (S.Africa), Llanos (Venezuela), Pampas (Argentina), Steppes (Eurasia) - all temperate grasslands!',
                icon: '🔤'
            },
            {
                type: 'visual',
                title: 'Biome = Climate + Vegetation',
                content: 'Biome is NOT just plants! It\'s: Climate (temp+rainfall) + Dominant Vegetation + Characteristic Animals + Soil type. Think "ecosystem package"!',
                icon: '📦'
            }
        ],

        conceptBlocks: [
            {
                title: 'What is a Biome?',
                icon: '🌏',
                points: [
                    'DEFINITION:',
                    '  • Large region characterized by:',
                    '    - Distinct climate',
                    '    - Dominant vegetation type',
                    '    - Characteristic animal life',
                    '    - Specific soil type',
                    '',
                    'KEY DETERMINANTS:',
                    '  • TEMPERATURE (latitude)',
                    '  • PRECIPITATION (rainfall)',
                    '  • Combination creates unique biome',
                    '',
                    'GLOBAL PATTERN:',
                    '  • Biomes form latitude belts (climate zones)',
                    '  • Modified by: Altitude, continentality, ocean currents',
                    '',
                    'MAJOR BIOMES (5 Categories):',
                    '  1. FORESTS (6 types)',
                    '  2. GRASSLANDS (2 types)',
                    '  3. DESERTS (2 types)',
                    '  4. TUNDRA',
                    '  5. FRESHWATER/MARINE (aquatic biomes - separate classification)'
                ]
            },
            {
                title: 'Tropical Rainforest Biome',
                icon: '🌴',
                points: [
                    'LOCATION: Equatorial belt (5-10° N/S)',
                    '  • Amazon (South America) - largest',
                    '  • Congo Basin (Central Africa)',
                    '  • Southeast Asia (Indonesia, Malaysia)',
                    '  • Western Ghats (India), parts of Northeast India',
                    '',
                    'CLIMATE:',
                    '  • Temperature: 25-28°C year-round (no seasons)',
                    '  • Rainfall: >200 cm annually, evenly distributed',
                    '  • Humidity: Very high (80-90%)',
                    '  • Sunshine: Limited (dense canopy)',
                    '',
                    'VEGETATION:',
                    '  • EVERGREEN: Trees never shed all leaves',
                    '  • MULTI-LAYERED:',
                    '    - Emergent layer (tallest trees, 40-50m)',
                    '    - Canopy (main layer, dense, 20-40m)',
                    '    - Understory (shrubs, young trees)',
                    '    - Forest floor (dark, sparse vegetation)',
                    '  • BIODIVERSITY: Highest on Earth',
                    '    - 50% of world\'s species in <7% land area',
                    '    - Single hectare: 200+ tree species',
                    '  • CHARACTERISTICS:',
                    '    - Broad leaves (drip tips)',
                    '    - Buttress roots (support tall trees)',
                    '    - Lianas (woody climbers), epiphytes (plants on trees)',
                    '    - Dense canopy blocks 95% sunlight to forest floor',
                    '',
                    'FAUNA:',
                    '  • ARBOREAL (tree-dwelling): Monkeys, sloths, birds',
                    '  • Insects: Millions of species',
                    '  • Reptiles: Snakes, lizards',
                    '  • Amphibians: Frogs (abundant)',
                    '',
                    'SOIL: Laterite (red, heavily leached, infertile)',
                    '',
                    'ADAPTATIONS:',
                    '  • Trees: Shallow roots, buttresses',
                    '  • Animals: Camouflage, arboreal lifestyle',
                    '',
                    'THREATS:',
                    '  • DEFORESTATION: Amazon losing 10,000 km²/year',
                    '  • Slash-and-burn agriculture',
                    '  • Logging, cattle ranching',
                    '',
                    'IMPORTANCE:',
                    '  • "Lungs of Earth" (produces 20% of oxygen)',
                    '  • Carbon sink (stores CO₂)',
                    '  • Climate regulation',
                    '  • Biodiversity hotspot'
                ]
            },
            {
                title: 'Tropical Deciduous (Monsoon) Forest',
                icon: '🍂',
                points: [
                    'LOCATION: Monsoon climate regions (10-25° N/S)',
                    '  • India (largest extent globally)',
                    '  • Myanmar, Thailand, Vietnam',
                    '  • Parts of Brazil, West Africa',
                    '',
                    'CLIMATE:',
                    '  • Temperature: 24-27°C',
                    '  • Rainfall: 100-200 cm (seasonal)',
                    '  • DISTINCT SEASONS:',
                    '    - Wet monsoon (trees grow)',
                    '    - Dry season (trees shed leaves - deciduous)',
                    '',
                    'VEGETATION:',
                    '  • DECIDUOUS: Shed leaves in dry season (water conservation)',
                    '  • Less dense than rainforest',
                    '  • Tree height: 15-30 meters',
                    '  • TWO LAYERS: Canopy + Understory',
                    '  • SPECIES:',
                    '    - Teak, Sal, Sandalwood, Rosewood',
                    '    - Bamboo, Eucalyptus',
                    '  • Moderate biodiversity',
                    '',
                    'FAUNA:',
                    '  • Tigers, elephants, leopards',
                    '  • Deer, wild boar',
                    '  • Various birds, reptiles',
                    '',
                    'SOIL: Red-Yellow soils (moderate fertility)',
                    '',
                    'IMPORTANCE:',
                    '  • Valuable timber (teak, sal)',
                    '  • INDIA: 60% of forests are tropical deciduous',
                    '',
                    'THREATS:',
                    '  • Timber extraction',
                    '  • Agricultural expansion',
                    '  • Human settlement'
                ]
            },
            {
                title: 'Temperate Deciduous Forest',
                icon: '🍁',
                points: [
                    'LOCATION: Mid-latitudes (40-60° N/S)',
                    '  • Eastern USA, Western Europe',
                    '  • Eastern China, Japan',
                    '  • Parts of South America, Australia',
                    '',
                    'CLIMATE:',
                    '  • Temperature: -5°C (winter) to 25°C (summer)',
                    '  • Rainfall: 75-150 cm, evenly distributed',
                    '  • FOUR DISTINCT SEASONS',
                    '',
                    'VEGETATION:',
                    '  • DECIDUOUS: Shed leaves in autumn (winter preparation)',
                    '  • BROAD-LEAVED trees',
                    '  • SPECIES:',
                    '    - Oak, Maple, Beech, Birch, Elm, Chestnut',
                    '  • Tree height: 20-35 meters',
                    '  • AUTUMN COLORS: Spectacular (chlorophyll breakdown)',
                    '  • Well-developed understory',
                    '',
                    'FAUNA:',
                    '  • Deer, bears, squirrels, raccoons',
                    '  • Many migrate or hibernate (winter adaptation)',
                    '  • Birds: Migrate in winter',
                    '',
                    'SOIL: Brown forest soils (fertile, humus-rich)',
                    '',
                    'HUMAN IMPACT:',
                    '  • MOST ALTERED biome (agriculture, cities)',
                    '  • Only fragments remain in original form',
                    '  • Europe: Almost entirely cleared historically'
                ]
            },
            {
                title: 'Temperate Coniferous Forest (Taiga/Boreal)',
                icon: '🌲',
                points: [
                    'LOCATION: High latitudes (50-70° N)',
                    '  • Canada, Russia (Siberia), Scandinavia, Alaska',
                    '  • LARGEST terrestrial biome (11% of land)',
                    '',
                    'OTHER NAMES: Taiga (Russian), Boreal Forest',
                    '',
                    'CLIMATE:',
                    '  • Temperature: -40°C (winter) to 20°C (summer)',
                    '  • Rainfall: 40-100 cm (moderate)',
                    '  • LONG, HARSH WINTERS (6-8 months)',
                    '  • Short growing season (3-4 months)',
                    '',
                    'VEGETATION:',
                    '  • CONIFEROUS (cone-bearing): Needle leaves',
                    '  • EVERGREEN: Don\'t shed all needles (year-round photosynthesis)',
                    '  • SPECIES:',
                    '    - Spruce, Fir, Pine, Larch',
                    '  • ADAPTATIONS:',
                    '    - Needle leaves (reduce water loss)',
                    '    - Conical shape (snow slides off)',
                    '    - Dark green (absorb maximum sunlight)',
                    '    - Shallow roots (permafrost below)',
                    '  • UNIFORM: Few species dominate (low diversity)',
                    '  • Dense, dark forest (limited understory)',
                    '',
                    'FAUNA:',
                    '  • Moose, caribou, bears',
                    '  • Wolves, lynx, wolverines',
                    '  • Birds: Migrate south in winter',
                    '  • Many hibernate or have thick fur',
                    '',
                    'SOIL: Podzol (acidic, leached, infertile)',
                    '',
                    'IMPORTANCE:',
                    '  • Timber industry (softwood)',
                    '  • Paper and pulp',
                    '  • Carbon sink',
                    '',
                    'THREATS:',
                    '  • Logging',
                    '  • Climate change (warming faster than global average)',
                    '  • Insect outbreaks (warming)'
                ]
            },
            {
                title: 'Mediterranean Forest & Scrub',
                icon: '🫒',
                points: [
                    'LOCATION: Mediterranean climate (30-40° N/S)',
                    '  • Mediterranean Basin (Spain, Italy, Greece)',
                    '  • California, Central Chile',
                    '  • South Africa (Cape), SW Australia',
                    '',
                    'CLIMATE:',
                    '  • Temperature: 10-25°C',
                    '  • Rainfall: 40-90 cm',
                    '  • HOT, DRY SUMMERS + MILD, WET WINTERS',
                    '',
                    'VEGETATION:',
                    '  • SCLEROPHYLLOUS (hard, waxy leaves - drought adaptation)',
                    '  • EVERGREEN shrubs and small trees',
                    '  • SPECIES:',
                    '    - Cork Oak, Olive, Citrus',
                    '    - Lavender, Rosemary, Thyme',
                    '  • TYPES:',
                    '    - MAQUIS: Dense shrubland (Mediterranean)',
                    '    - CHAPARRAL: Scrubland (California)',
                    '    - FYNBOS: Heathland (South Africa)',
                    '',
                    'ADAPTATIONS:',
                    '  • Small, thick, waxy leaves (reduce water loss)',
                    '  • Deep roots (tap groundwater)',
                    '  • Fire-adapted (many plants regrow after fire)',
                    '',
                    'FAUNA:',
                    '  • Small mammals, reptiles',
                    '  • Many bird species',
                    '',
                    'AGRICULTURE:',
                    '  • Grapes (wine), olives, citrus fruits',
                    '  • Wheat, barley',
                    '',
                    'THREATS:',
                    '  • Tourism pressure',
                    '  • Urbanization',
                    '  • Wildfires (increasing with climate change)'
                ]
            },
            {
                title: 'Tropical Grasslands (Savanna)',
                icon: '🦁',
                points: [
                    'LOCATION: Between rainforest and desert (10-20° N/S)',
                    '  • African Savanna (East Africa - largest)',
                    '  • Llanos (Venezuela, Colombia)',
                    '  • Campos (Brazil)',
                    '  • Northern Australia',
                    '',
                    'CLIMATE:',
                    '  • Temperature: 20-30°C',
                    '  • Rainfall: 50-150 cm (seasonal)',
                    '  • WET SEASON + DRY SEASON (pronounced)',
                    '',
                    'VEGETATION:',
                    '  • GRASSES (dominant): Tall (up to 3m in wet season)',
                    '  • SCATTERED TREES:',
                    '    - Acacia, Baobab (Africa)',
                    '    - Fire-resistant, drought-resistant',
                    '  • TREELESS or SPARSE trees',
                    '',
                    'FAUNA (African Savanna - most famous):',
                    '  • HERBIVORES: Zebra, wildebeest, elephants, giraffes',
                    '  • CARNIVORES: Lions, cheetahs, hyenas',
                    '  • Supports LARGEST land animal populations',
                    '  • GREAT MIGRATION: Serengeti (1.5 million wildebeest)',
                    '',
                    'ADAPTATIONS:',
                    '  • Animals: Migration (follow rains)',
                    '  • Plants: Deep roots, fire resistance',
                    '',
                    'IMPORTANCE:',
                    '  • Wildlife tourism (Kenya, Tanzania)',
                    '  • Pastoralism (Maasai people)',
                    '',
                    'THREATS:',
                    '  • Overgrazing',
                    '  • Agricultural expansion',
                    '  • Poaching'
                ]
            },
            {
                title: 'Temperate Grasslands',
                icon: '🌾',
                points: [
                    'LOCATION: Mid-latitudes (30-50° N/S)',
                    '',
                    'NAMES BY REGION:',
                    '  • PRAIRIES: North America (USA, Canada)',
                    '  • STEPPES: Eurasia (Russia, Kazakhstan)',
                    '  • PAMPAS: Argentina, Uruguay',
                    '  • VELD: South Africa',
                    '  • DOWNS: Australia',
                    '',
                    'CLIMATE:',
                    '  • Temperature: -10°C (winter) to 25°C (summer)',
                    '  • Rainfall: 25-75 cm (limited)',
                    '  • Continental climate (hot summers, cold winters)',
                    '',
                    'VEGETATION:',
                    '  • GRASSES (only): Short to medium height',
                    '  • NO TREES (insufficient rainfall)',
                    '  • SPECIES:',
                    '    - Buffalo grass, wheat grass',
                    '  • Deep root systems (access groundwater)',
                    '',
                    'FAUNA:',
                    '  • North America: Bison (historical), prairie dogs',
                    '  • Eurasia: Wild horses, antelopes',
                    '  • Argentina: Pampas deer, rheas',
                    '  • Burrowing animals common',
                    '',
                    'SOIL: CHERNOZEM (most fertile soil on Earth!)',
                    '  • Black, deep (60-80 cm topsoil)',
                    '  • Rich humus from grass roots',
                    '',
                    'AGRICULTURE (Most Productive):',
                    '  • WHEAT BELT of the world',
                    '  • Ukraine, USA, Canada, Argentina = top wheat exporters',
                    '  • Corn, barley, cattle ranching',
                    '',
                    'CONVERSION:',
                    '  • >70% converted to agriculture',
                    '  • "Breadbasket of the world"',
                    '  • USA Great Plains: 1930s Dust Bowl (over-plowing)',
                    '',
                    'THREATS:',
                    '  • Soil erosion',
                    '  • Desertification (over-farming)'
                ]
            },
            {
                title: 'Tundra Biome',
                icon: '❄️',
                points: [
                    'LOCATION: Arctic/Antarctic circles (60-90° N/S)',
                    '  • ARCTIC TUNDRA: Alaska, Canada, Russia, Scandinavia',
                    '  • ALPINE TUNDRA: High mountains (above tree line)',
                    '',
                    'CLIMATE:',
                    '  • Temperature: -30°C (winter) to 10°C (summer)',
                    '  • Rainfall: 15-25 cm (very low)',
                    '  • PERMAFROST: Permanently frozen subsoil',
                    '  • Growing season: 50-60 days only!',
                    '',
                    'VEGETATION:',
                    '  • NO TREES (too cold, permafrost)',
                    '  • LOW VEGETATION (<10 cm height):',
                    '    - Mosses, lichens (dominant)',
                    '    - Sedges, dwarf shrubs',
                    '  • ADAPTATIONS:',
                    '    - Low height (avoid wind)',
                    '    - Shallow roots (permafrost barrier)',
                    '    - Rapid flowering (short growing season)',
                    '',
                    'FAUNA:',
                    '  • MAMMALS: Caribou, musk ox, Arctic fox, polar bears',
                    '  • BIRDS: Migrate south in winter',
                    '  • INSECTS: Mosquitoes (abundant in summer!)',
                    '  • ADAPTATIONS:',
                    '    - Thick fur/feathers',
                    '    - Migration or hibernation',
                    '    - White color (camouflage in snow)',
                    '',
                    'SOIL: Gelisols (frozen, nutrient-poor)',
                    '',
                    'IMPORTANCE:',
                    '  • Carbon sink (frozen organic matter)',
                    '  • Indigenous peoples: Inuit, Sami',
                    '',
                    'THREATS:',
                    '  • CLIMATE CHANGE (warming 2x faster than global average)',
                    '  • Permafrost melting → releases methane',
                    '  • Oil and gas extraction'
                ]
            }
        ],

        diagrams: [
            {
                title: 'World Biomes Map',
                type: 'map',
                description: 'World map color-coded by biome: Tropical Rainforest (dark green, equator), Savanna (yellow-green, 10-20°), Desert (orange, 20-30°), Temperate Deciduous (light green, 40-60°), Taiga (dark blue, 50-70°), Tundra (white, >60°), Mediterranean (olive, 30-40°). Show latitude bands.'
            },
            {
                title: 'Biome Climograph',
                type: 'bar-graph',
                description: 'Temperature-Precipitation graph comparing biomes: Rainforest (high T, high P), Desert (high T, low P), Taiga (low T, moderate P), Tundra (very low T, low P), Temperate (moderate T, moderate P). Plot all on same axes.'
            },
            {
                title: 'Tropical Rainforest Layers',
                type: 'cross-section',
                description: 'Vertical profile showing 4 layers: Emergent (40-50m, tallest trees), Canopy (20-40m, dense), Understory (shrubs, young trees), Forest Floor (dark, sparse). Show different animals at each level.'
            },
            {
                title: 'Biome Latitude Sequence',
                type: 'cross-section',
                description: 'Earth cross-section from equator to pole showing biome sequence: Rainforest (0°) → Savanna (10-20°) → Desert (20-30°) → Temperate Forest (40-60°) → Taiga (50-70°) → Tundra (>60°) → Ice Cap (90°).'
            },
            {
                title: 'Chernozem vs Laterite Soil',
                type: 'comparison-chart',
                description: 'Side-by-side comparison: Chernozem (temperate grassland) - black, thick (80cm), fertile vs Laterite (tropical rainforest) - red, deep (2m), infertile. Show paradox of vegetation vs soil.'
            }
        ],

        quickFacts: [
            '🌳 Tropical Rainforest: 50% of world\'s species in <7% land area',
            '🌲 Taiga: LARGEST terrestrial biome (11% of Earth\'s land)',
            '🌾 Temperate Grasslands: Chernozem soil - MOST FERTILE on Earth',
            '🦁 African Savanna: 1.5 million wildebeest migrate annually (Serengeti)',
            '❄️ Tundra: Growing season only 50-60 days per year',
            '🍂 Deciduous: "Deciduous" from Latin "to fall off" (leaves)',
            '🔥 Mediterranean: Fire-adapted vegetation (regenerates after wildfire)',
            '🌍 70% of temperate grasslands converted to agriculture',
            '⚠️ Amazon: Produces 20% of world\'s oxygen, called "Lungs of Earth"',
            '📉 Tundra: Warming 2x faster than global average (permafrost melting)',
            '🌡️ Rainforest: Temperature varies more in a day than across the year!',
            '🏆 USA Great Plains: Produces 20% of world\'s wheat (chernozem belt)'
        ],

        upscTraps: [
            {
                trap: 'Tropical rainforests have fertile soil because of lush vegetation',
                clarity: 'PARADOX! Rainforest has INFERTILE laterite soil (heavily leached). Nutrients are locked in PLANTS, not soil. Once forest cleared, soil exhausted in 2-3 years. Temperate grasslands have most fertile soil (chernozem).'
            },
            {
                trap: 'Savanna and temperate grasslands are the same',
                clarity: 'DIFFERENT! Savanna = TROPICAL (10-20°), has scattered TREES, hot year-round, wet-dry seasons. Temperate Grassland = MID-LATITUDE (30-50°), NO trees, cold winters, chernozem soil.'
            },
            {
                trap: 'Taiga and tundra are the same (both cold)',
                clarity: 'Taiga = 50-70°N, CONIFEROUS TREES, longer growing season, podzol soil. Tundra = >60°N, NO TREES (too cold), permafrost, only mosses/lichens. Taiga is south of tundra.'
            },
            {
                trap: 'Biomes are determined only by vegetation',
                clarity: 'Biome = Climate (temp + rainfall) + Vegetation + Animals + Soil combined! Climate determines vegetation, which determines animals and soil type. All interconnected!'
            },
            {
                trap: 'Mediterranean forests are same as tropical deciduous',
                clarity: 'DIFFERENT! Mediterranean = HOT DRY summers, mild WET winters, sclerophyll leaves. Tropical Deciduous = WET monsoon, dry season, shed leaves in DRY period. Different adaptation strategies!'
            }
        ],

        revisionBox: {
            title: '⚡ 30-Second Revision',
            points: [
                'Equator→Pole: Rainforest → Savanna → Desert → Temperate → Taiga → Tundra',
                'Rainforest: Hot+wet, highest diversity, laterite (infertile), Amazon',
                'Savanna: Seasonal, scattered trees, African wildlife, Serengeti migration',
                'Temperate Grassland: CHERNOZEM (most fertile), wheat belt, Prairies/Steppes/Pampas',
                'Taiga: Largest biome, coniferous, podzol, Canada-Russia',
                'Tundra: Permafrost, no trees, mosses/lichens, 50-day growing season'
            ]
        },

        pyqs: [
            {
                year: 2022,
                question: 'Discuss the characteristics and distribution of tropical rainforest biome. Why is it called the "lungs of Earth"?',
                type: 'Mains'
            },
            {
                year: 2021,
                question: 'Differentiate between savanna and temperate grasslands with reference to climate, vegetation, and fauna.',
                type: 'Mains'
            },
            {
                year: 2020,
                question: 'Explain the concept of biome. Describe the major biomes of the world.',
                type: 'Mains'
            },
            {
                year: 2019,
                question: 'Which biome is characterized by permafrost?',
                type: 'Prelims',
                options: ['Taiga', 'Tundra', 'Temperate Grassland', 'Desert']
            },
            {
                year: 2018,
                question: 'Discuss the impact of climate change on tundra biome.',
                type: 'Mains'
            }
        ]
    },
];
    // ============================================
    // TOPIC 5: VEGETATION DISTRIBUTION
    // ============================================
    {
        id: 'vegetation-distribution',
        name: 'Vegetation Distribution',
        icon: '🌳',
        category: 'biogeography',
        theme: 'forest',
        difficulty: 'medium',
        upscRelevance: 'high',

        mindMap: {
            central: 'Vegetation Distribution',
            branches: [
                {
                    name: 'Factors Affecting',
                    color: '#27AE60',
                    children: [
                        'Climate (Temp + Rainfall)',
                        'Soil Type',
                        'Relief/Altitude',
                        'Drainage',
                        'Human Activities'
                    ]
                },
                {
                    name: 'Global Patterns',
                    color: '#3498DB',
                    children: [
                        'Latitude-based zones',
                        'Altitude-based zones',
                        'Continentality effect',
                        'Ocean current influence'
                    ]
                },
                {
                    name: 'India\'s Vegetation',
                    color: '#E67E22',
                    children: [
                        'Tropical Evergreen (W.Ghats, NE)',
                        'Tropical Deciduous (60% forests)',
                        'Thorn & Scrub (Rajasthan)',
                        'Mangroves (Sundarbans)',
                        'Montane (Himalayas)'
                    ]
                },
                {
                    name: 'Vegetation Types',
                    color: '#9B59B6',
                    children: [
                        'Forests (closed canopy)',
                        'Woodlands (open canopy)',
                        'Grasslands (herbaceous)',
                        'Shrublands (bushes)',
                        'Desert vegetation (xerophytes)'
                    ]
                }
            ]
        },

        memoryHooks: [
            {
                type: 'mnemonic',
                title: 'India Forest Types',
                content: 'EDTMM = Evergreen (W.Ghats), Deciduous (largest 60%), Thorn (Rajasthan), Montane (Himalayas), Mangrove (coasts)',
                icon: '🧠'
            },
            {
                type: 'comparison',
                title: 'Evergreen vs Deciduous',
                content: 'Evergreen = Always green (rain year-round, no water stress). Deciduous = Seasonal shedding (dry season, water conservation). Same latitude, different rainfall pattern!',
                icon: '🍃'
            },
            {
                type: 'acronym',
                title: 'Vegetation Controls',
                content: 'CSRH = Climate (primary), Soil, Relief, Human impact. "Climate Strongly Rules Here!"',
                icon: '🔤'
            },
            {
                type: 'visual',
                title: 'Altitude = Latitude',
                content: '1000m altitude ≈ 600 km poleward latitude. Climbing mountain = traveling toward pole! Tropical base → Temperate → Alpine → Snow (like Equator → Pole).',
                icon: '⛰️'
            }
        ],

        conceptBlocks: [
            {
                title: 'Factors Controlling Vegetation Distribution',
                icon: '🌍',
                points: [
                    '🌡️ CLIMATE (Most Important):',
                    '  • TEMPERATURE:',
                    '    - Determines growing season length',
                    '    - Tropics: Year-round growth',
                    '    - Temperate: Seasonal growth',
                    '    - Polar: Minimal/no growth',
                    '  • RAINFALL:',
                    '    - >200 cm → Rainforests',
                    '    - 100-200 cm → Deciduous forests',
                    '    - 50-100 cm → Grasslands',
                    '    - <50 cm → Deserts',
                    '  • SEASONALITY:',
                    '    - Evenly distributed → Evergreen',
                    '    - Seasonal → Deciduous',
                    '',
                    '🪨 SOIL:',
                    '  • Fertile soil → Dense vegetation',
                    '  • Infertile soil → Sparse vegetation',
                    '  • Waterlogged → Specialized (mangroves, swamps)',
                    '  • Sandy → Desert vegetation',
                    '',
                    '⛰️ RELIEF/ALTITUDE:',
                    '  • SLOPE:',
                    '    - Gentle slope → Dense vegetation',
                    '    - Steep slope → Sparse (erosion)',
                    '  • ALTITUDE:',
                    '    - Temperature drops 6.5°C per 1000m',
                    '    - Creates vertical vegetation zones',
                    '    - Base: Tropical → Mid: Temperate → Top: Alpine',
                    '  • ASPECT:',
                    '    - South-facing (N. Hemisphere): More sun, drier',
                    '    - North-facing: Less sun, moister',
                    '',
                    '💧 DRAINAGE:',
                    '  • Well-drained → Trees',
                    '  • Waterlogged → Swamp vegetation',
                    '  • Seasonal flooding → Floodplain forests',
                    '',
                    '👥 HUMAN ACTIVITIES:',
                    '  • Deforestation',
                    '  • Agriculture (replaces natural vegetation)',
                    '  • Urbanization',
                    '  • Afforestation (positive impact)'
                ]
            },
            {
                title: 'Global Vegetation Patterns',
                icon: '🗺️',
                points: [
                    '📍 LATITUDE-BASED ZONES (Equator to Pole):',
                    '',
                    '0-10° (Equatorial):',
                    '  • TROPICAL RAINFORESTS',
                    '  • Hot + Wet year-round',
                    '  • Evergreen, multi-layered',
                    '  • Highest biodiversity',
                    '',
                    '10-20° (Tropical):',
                    '  • TROPICAL DECIDUOUS / SAVANNA',
                    '  • Seasonal rainfall',
                    '  • Deciduous trees or grasslands with scattered trees',
                    '',
                    '20-30° (Subtropical):',
                    '  • HOT DESERTS (high-pressure belts)',
                    '  • Very low rainfall',
                    '  • Xerophytes (cacti, thorny bushes)',
                    '',
                    '30-40° (Warm Temperate):',
                    '  • MEDITERRANEAN FORESTS',
                    '  • Hot dry summers, mild wet winters',
                    '  • Sclerophyll vegetation',
                    '',
                    '40-60° (Cool Temperate):',
                    '  • TEMPERATE DECIDUOUS FORESTS',
                    '  • Four seasons',
                    '  • Broad-leaved deciduous trees',
                    '  • OR TEMPERATE GRASSLANDS (interior continents)',
                    '',
                    '50-70° (Subarctic):',
                    '  • TAIGA (Boreal Forest)',
                    '  • Long cold winters',
                    '  • Coniferous evergreen',
                    '',
                    '>60° (Polar):',
                    '  • TUNDRA',
                    '  • No trees, mosses and lichens',
                    '  • Permafrost',
                    '',
                    '⛰️ ALTITUDE-BASED ZONES (Vertical):',
                    '  • BASE (<1000m): Tropical vegetation',
                    '  • 1000-2000m: Temperate vegetation',
                    '  • 2000-3000m: Coniferous',
                    '  • 3000-4000m: Alpine meadows',
                    '  • >4000m: Permanent snow',
                    '',
                    '🌊 OCEAN CURRENT INFLUENCE:',
                    '  • WARM CURRENTS: Increase rainfall',
                    '    - Western Europe: Gulf Stream → temperate forests',
                    '  • COLD CURRENTS: Decrease rainfall',
                    '    - Western coasts: Atacama, Namib deserts',
                    '',
                    '🏜️ CONTINENTALITY:',
                    '  • Coastal areas: Moderate, more vegetation',
                    '  • Interior continents: Extreme, grasslands/deserts'
                ]
            },
            {
                title: 'India\'s Vegetation Types (Detailed)',
                icon: '🇮🇳',
                points: [
                    '1️⃣ TROPICAL EVERGREEN RAINFORESTS:',
                    '',
                    'LOCATION:',
                    '  • Western Ghats (Maharashtra to Kerala)',
                    '  • Northeast India (Assam, Meghalaya, Arunachal)',
                    '  • Andaman & Nicobar Islands',
                    '  • Rainfall: >200 cm, No dry season',
                    '',
                    'CHARACTERISTICS:',
                    '  • Dense, multi-layered',
                    '  • Trees 45-60 meters tall',
                    '  • No definite shedding period',
                    '  • Difficult to exploit (dense undergrowth)',
                    '',
                    'SPECIES:',
                    '  • Ebony, Mahogany, Rosewood, Rubber',
                    '  • Bamboo, Reeds, Creepers',
                    '  • Orchids, Ferns (abundant)',
                    '',
                    'FAUNA:',
                    '  • Elephants, monkeys, lemurs',
                    '  • One-horned rhino (Assam)',
                    '  • Birds, reptiles, insects (very diverse)',
                    '',
                    'AREA: ~6% of India\'s forests',
                    '',
                    '---',
                    '',
                    '2️⃣ TROPICAL DECIDUOUS (MONSOON) FORESTS:',
                    '',
                    'LOCATION (LARGEST - 60% of India\'s forests):',
                    '  • Sub-Himalayan belt (UP, Uttarakhand)',
                    '  • Madhya Pradesh, Chhattisgarh',
                    '  • Odisha, Jharkhand',
                    '  • Maharashtra, Karnataka (eastern parts)',
                    '  • Rainfall: 100-200 cm',
                    '',
                    'TYPES:',
                    '  • MOIST DECIDUOUS (>100 cm rain):',
                    '    - Sal, Teak, Bamboo, Shisham',
                    '    - Terai belt, parts of Odisha',
                    '  • DRY DECIDUOUS (75-100 cm rain):',
                    '    - Teak (valuable timber)',
                    '    - Acacia, Tendu, Palas',
                    '    - Drier parts of MP, Maharashtra',
                    '',
                    'CHARACTERISTICS:',
                    '  • Shed leaves in dry season (6-8 weeks)',
                    '  • Less dense than evergreen',
                    '  • Commercially most important',
                    '',
                    'USES:',
                    '  • TEAK: Shipbuilding, furniture (high value)',
                    '  • SAL: Construction timber',
                    '  • Tendu leaves: Bidi (tobacco) wrapping',
                    '  • Bamboo: Paper, construction',
                    '',
                    'FAUNA:',
                    '  • Tiger, leopard, elephant',
                    '  • Deer, wild boar, various birds',
                    '',
                    '---',
                    '',
                    '3️⃣ THORN FORESTS & SCRUB:',
                    '',
                    'LOCATION:',
                    '  • Rajasthan (Thar Desert)',
                    '  • Parts of Gujarat, MP, UP, Haryana',
                    '  • Rain shadow areas of Western Ghats',
                    '  • Rainfall: <70 cm',
                    '',
                    'CHARACTERISTICS:',
                    '  • LOW trees and bushes (3-10 meters)',
                    '  • Long roots (tap groundwater)',
                    '  • Small, thick, waxy leaves (reduce water loss)',
                    '  • Many thorns (reduce grazing)',
                    '  • Scattered, sparse vegetation',
                    '',
                    'SPECIES:',
                    '  • BABOOL (Acacia)',
                    '  • KIKAR, BER, KHAIR',
                    '  • Cacti, Euphorbias',
                    '  • Palms (date palm)',
                    '',
                    'ADAPTATIONS:',
                    '  • Deep tap roots (15-20m)',
                    '  • Succulent stems (store water)',
                    '  • Leaves modified into thorns',
                    '  • Seeds survive long dry periods',
                    '',
                    'FAUNA:',
                    '  • Camels, wild asses (Little Rann of Kutch)',
                    '  • Chinkara, Blackbuck',
                    '  • Snakes, lizards',
                    '',
                    'USES:',
                    '  • Fuelwood, fodder',
                    '  • Babool: Tannin extraction',
                    '  • Limited economic value',
                    '',
                    '---',
                    '',
                    '4️⃣ MONTANE (MOUNTAIN) FORESTS:',
                    '',
                    'LOCATION: Himalayas (altitude-based zones)',
                    '',
                    'VERTICAL ZONES:',
                    '',
                    '  🌳 WET TEMPERATE (1000-2000m):',
                    '    • Oak, Chestnut, Chir Pine',
                    '    • Rhododendron (state flower of Uttarakhand)',
                    '    • High rainfall areas',
                    '',
                    '  🌲 CONIFEROUS (1500-3500m):',
                    '    • Pine, Deodar, Fir, Spruce',
                    '    • Most extensive Himalayan forest type',
                    '    • Valuable softwood timber',
                    '    • Used in construction, paper',
                    '',
                    '  🌼 ALPINE VEGETATION (3500-4500m):',
                    '    • Grasslands (bugyals)',
                    '    • Dwarf shrubs',
                    '    • Medicinal plants, herbs',
                    '    • Short growing season (summer only)',
                    '    • Pastoralism (Gujjars, Bakarwals)',
                    '',
                    '  ❄️ ALPINE SCRUB & MOSS (>4500m):',
                    '    • Mosses, lichens',
                    '    • No trees (too cold)',
                    '    • Permanent snow above',
                    '',
                    'SPECIES BY ALTITUDE:',
                    '  • <1000m: Sal, Shisham, Jamun',
                    '  • 1000-2000m: Oak, Maple, Walnut',
                    '  • 1500-3000m: Pine, Deodar, Fir',
                    '  • 3000-4000m: Silver Fir, Birch, Juniper',
                    '  • >4000m: Mosses, lichens',
                    '',
                    '---',
                    '',
                    '5️⃣ MANGROVE FORESTS (TIDAL/LITTORAL):',
                    '',
                    'LOCATION:',
                    '  • SUNDARBANS (W. Bengal) - largest',
                    '  • Andaman & Nicobar',
                    '  • Deltas: Mahanadi, Godavari, Krishna, Cauvery',
                    '  • Gujarat coast (Gulf of Kutch)',
                    '',
                    'CHARACTERISTICS:',
                    '  • Grow in SALINE water (tidal zones)',
                    '  • Dense, evergreen',
                    '  • Adapted to waterlogging + salinity',
                    '',
                    'ADAPTATIONS:',
                    '  • STILT ROOTS: Support in muddy soil',
                    '  • PNEUMATOPHORES: Aerial roots (breathing roots)',
                    '  • VIVIPARY: Seeds germinate on parent tree',
                    '  • Salt excretion through leaves',
                    '',
                    'SPECIES:',
                    '  • SUNDRI (dominant in Sundarbans)',
                    '  • Goran, Gewa, Keora',
                    '  • Palm, Date Palm',
                    '',
                    'IMPORTANCE:',
                    '  • CYCLONE BUFFER: Protects coast',
                    '  • Fish nurseries (brackish water)',
                    '  • Biodiversity hotspot',
                    '  • Carbon sink',
                    '',
                    'FAUNA:',
                    '  • Royal Bengal Tiger (Sundarbans)',
                    '  • Crocodiles (saltwater)',
                    '  • Dolphins (Gangetic, Irrawaddy)',
                    '  • Birds, fish (abundant)',
                    '',
                    'THREATS:',
                    '  • Sea level rise',
                    '  • Pollution',
                    '  • Shrimp farming (conversion)',
                    '',
                    'AREA:',
                    '  • Sundarbans: 4,260 km² (India + Bangladesh)',
                    '  • India\'s share: ~2,125 km²',
                    '  • UNESCO World Heritage Site'
                ]
            },
            {
                title: 'Vegetation Zones of Himalayas',
                icon: '🏔️',
                points: [
                    'VERTICAL ZONATION (Bottom to Top):',
                    '',
                    '📏 ALTITUDE ZONES:',
                    '',
                    '🌴 TROPICAL (<1000m):',
                    '  • Sal, Shisham, Jamun, Semul',
                    '  • Terai belt (foothills)',
                    '  • Dense, subtropical',
                    '',
                    '🍂 SUB-TROPICAL (1000-2000m):',
                    '  • Wet Temperate: Oak, Chestnut, Maple',
                    '  • Chir Pine (lower slopes)',
                    '  • Rhododendron (flowering)',
                    '  • Shimla, Mussoorie, Nainital altitude',
                    '',
                    '🌲 TEMPERATE CONIFEROUS (2000-3500m):',
                    '  • DEODAR, Blue Pine, Spruce, Fir',
                    '  • Most valuable timber',
                    '  • Western Himalayas: Drier, more pine',
                    '  • Eastern Himalayas: Wetter, more fir/spruce',
                    '  • Heavy snowfall in winter',
                    '',
                    '🌼 ALPINE (3500-4500m):',
                    '  • Grasslands (BUGYALS, MARGS)',
                    '  • Dwarf shrubs, rhododendrons',
                    '  • Medicinal plants: Brahma Kamal, Saussurea',
                    '  • Summer grazing grounds',
                    '  • Nomadic pastoralism',
                    '',
                    '❄️ ALPINE SCRUB (4500-5000m):',
                    '  • Mosses, lichens',
                    '  • No trees (treeline ~4000m)',
                    '  • Extreme cold',
                    '',
                    '🏔️ PERMANENT SNOW (>5000m):',
                    '  • No vegetation',
                    '  • Glaciers',
                    '',
                    '---',
                    '',
                    'REGIONAL VARIATIONS:',
                    '',
                    '🌧️ EASTERN HIMALAYAS:',
                    '  • Higher rainfall (monsoon impact)',
                    '  • Denser forests',
                    '  • More fir, spruce',
                    '  • Rhododendrons (25+ species)',
                    '  • Magnolia, Oak',
                    '',
                    '☀️ WESTERN HIMALAYAS:',
                    '  • Lower rainfall (rain shadow)',
                    '  • Drier forests',
                    '  • More pine, deodar',
                    '  • Scrub vegetation in rain shadow',
                    '',
                    '---',
                    '',
                    'TIMBER USES:',
                    '  • DEODAR: Construction (termite-resistant)',
                    '  • PINE: Resin, turpentine, paper',
                    '  • FIR/SPRUCE: Plywood, packing cases',
                    '  • OAK: Furniture, agricultural tools',
                    '',
                    'CONSERVATION ISSUES:',
                    '  • Deforestation (timber, agriculture)',
                    '  • Landslides (loss of forest cover)',
                    '  • Chipko Movement (1970s) - hug trees to protect',
                    '  • Joint Forest Management programs'
                ]
            },
            {
                title: 'India\'s Forest Cover & Conservation',
                icon: '📊',
                points: [
                    '📈 FOREST COVER (India State of Forest Report 2021):',
                    '  • Total Forest & Tree Cover: 80.9 million hectares',
                    '  • Percentage of geographical area: 24.62%',
                    '  • Forest Cover: 71.3 million ha (21.71%)',
                    '  • Tree Cover: 9.6 million ha (2.91%)',
                    '',
                    'CLASSIFICATION BY DENSITY:',
                    '  • VERY DENSE FOREST (>70% canopy): 3.04%',
                    '  • MODERATELY DENSE (40-70% canopy): 9.26%',
                    '  • OPEN FOREST (10-40% canopy): 9.41%',
                    '',
                    'TOP 5 STATES BY FOREST COVER (Area):',
                    '  1. Madhya Pradesh: 77,493 km²',
                    '  2. Arunachal Pradesh: 66,431 km²',
                    '  3. Chhattisgarh: 55,717 km²',
                    '  4. Odisha: 52,156 km²',
                    '  5. Maharashtra: 51,082 km²',
                    '',
                    'TOP 5 STATES BY FOREST COVER (% of geographical area):',
                    '  1. Mizoram: 85.41%',
                    '  2. Arunachal Pradesh: 79.33%',
                    '  3. Meghalaya: 76.00%',
                    '  4. Manipur: 74.34%',
                    '  5. Nagaland: 73.90%',
                    '',
                    '⚠️ THREATS TO VEGETATION:',
                    '  • DEFORESTATION:',
                    '    - Agriculture expansion',
                    '    - Urbanization',
                    '    - Infrastructure (roads, dams)',
                    '  • JHUM CULTIVATION (Shifting cultivation):',
                    '    - Slash-and-burn',
                    '    - Northeast India',
                    '    - Unsustainable when fallow period reduced',
                    '  • OVERGRAZING: Destroys grass cover',
                    '  • FOREST FIRES: Especially in deciduous forests (summer)',
                    '  • MINING: Removes forest cover',
                    '  • ILLEGAL LOGGING: Teak, sandalwood, rosewood',
                    '',
                    '🛡️ CONSERVATION EFFORTS:',
                    '  • NATIONAL FOREST POLICY (1988):',
                    '    - Target: 33% forest cover (still 24.62%)',
                    '    - 33% for hilly areas, 20% for plains',
                    '  • FOREST CONSERVATION ACT (1980):',
                    '    - Regulates diversion of forest land',
                    '  • JOINT FOREST MANAGEMENT (JFM):',
                    '    - Local communities manage forests',
                    '    - Share benefits',
                    '  • AFFORESTATION:',
                    '    - Green India Mission',
                    '    - CAMPA (Compensatory Afforestation)',
                    '  • BIODIVERSITY HOTSPOTS:',
                    '    - Western Ghats',
                    '    - Eastern Himalayas',
                    '    - Indo-Burma region',
                    '  • PROTECTED AREAS:',
                    '    - 104 National Parks',
                    '    - 551 Wildlife Sanctuaries',
                    '    - 18 Biosphere Reserves',
                    '',
                    '🌱 SOCIAL FORESTRY:',
                    '  • Plantation on community/private land',
                    '  • Agroforestry',
                    '  • Farm forestry',
                    '  • Van Mahotsav (Tree Planting Festival)',
                    '',
                    '📜 CHIPKO MOVEMENT (1973):',
                    '  • Uttarakhand (then UP)',
                    '  • Women hugged trees to prevent logging',
                    '  • Led to ban on tree felling in Himalayas',
                    '  • Sunderlal Bahuguna (leader)'
                ]
            }
        ],

        diagrams: [
            {
                title: 'India Vegetation Map',
                type: 'map',
                description: 'India map color-coded: Tropical Evergreen (dark green, W.Ghats + NE), Tropical Deciduous (light green, central India, largest), Thorn/Scrub (yellow, Rajasthan), Montane (brown zones, Himalayas), Mangroves (blue, coasts - Sundarbans highlighted).'
            },
            {
                title: 'Himalayan Vegetation Zones (Altitude)',
                type: 'cross-section',
                description: 'Mountain cross-section showing altitude zones from base to peak: Tropical Sal (<1000m) → Oak-Chestnut (1000-2000m) → Coniferous Deodar/Pine (2000-3500m) → Alpine Meadows (3500-4500m) → Moss/Lichen (>4500m) → Permanent Snow (>5000m). Label each zone.'
            },
            {
                title: 'Global Vegetation Belts (Latitude)',
                type: 'cross-section',
                description: 'Earth latitude cross-section: Rainforest (0-10°) → Savanna (10-20°) → Desert (20-30°) → Mediterranean (30-40°) → Temperate Deciduous (40-60°) → Taiga (50-70°) → Tundra (>60°). Show as colored bands.'
            },
            {
                title: 'Mangrove Adaptations',
                type: 'diagram',
                description: 'Mangrove tree showing: Stilt roots (above ground support), Pneumatophores (breathing roots sticking up), Vivipary (seedling on parent tree), salt glands on leaves. Label tidal waterlogged soil.'
            },
            {
                title: 'India Forest Cover by State',
                type: 'bar-graph',
                description: 'Bar chart: Top 5 by % - Mizoram (85%), Arunachal (79%), Meghalaya (76%), Manipur (74%), Nagaland (74%). Top 5 by area - MP, Arunachal, Chhattisgarh, Odisha, Maharashtra.'
            }
        ],

        quickFacts: [
            '🌳 India forest cover: 24.62% (target 33% as per National Forest Policy)',
            '🥇 Tropical Deciduous: 60% of India\'s forests (largest type)',
            '🌴 Sundarbans: World\'s largest mangrove forest (4,260 km² India+Bangladesh)',
            '🐅 Royal Bengal Tiger: Found in Sundarbans mangroves',
            '🏔️ Treeline in Himalayas: ~4000m (above this, no trees)',
            '📏 Altitude rule: 1000m up = 6°C temperature drop = 600 km poleward',
            '🌲 Deodar: National tree of Pakistan, sacred tree in Himalayas',
            '🌺 Rhododendron: 25+ species in Eastern Himalayas',
            '⚠️ Chipko Movement (1973): Women hugged trees in Uttarakhand, saved forests',
            '🌍 India has 4 biodiversity hotspots: W.Ghats, E.Himalayas, Indo-Burma, Sundaland',
            '📊 Mizoram: Highest forest cover % in India (85.41%)',
            '🌿 Terai: Marshy grassland belt at Himalayan foothills (elephant, rhino habitat)'
        ],

        upscTraps: [
            {
                trap: 'Evergreen forests are found where rainfall is evenly distributed',
                clarity: 'CORRECT! Evergreen = NO dry season, rain year-round (>200 cm). Deciduous = SEASONAL rain with dry period (trees shed leaves). Same may have similar total rainfall but DISTRIBUTION matters!'
            },
            {
                trap: 'Tropical deciduous forests are less valuable than evergreen',
                clarity: 'OPPOSITE! Deciduous (60% of India\'s forests) are MOST VALUABLE commercially - Teak, Sal (valuable timber). Evergreen are denser but harder to exploit (dense undergrowth). Deciduous = economic backbone.'
            },
            {
                trap: 'Thorn forests are found only in deserts',
                clarity: 'Thorn forests occur in SEMI-ARID regions (50-70 cm rain), not true deserts (<25 cm). Rajasthan has both: Thorn forest (eastern part, 50-70 cm) AND true desert (western Thar, <25 cm).'
            },
            {
                trap: 'Mangroves grow only in saltwater',
                clarity: 'Mangroves grow in BRACKISH water (mix of salt + fresh), in TIDAL zones. They need: (1) Tidal inundation (2) Muddy soil (3) Tropical/subtropical climate. Found in river deltas where fresh meets salt.'
            },
            {
                trap: 'India has achieved 33% forest cover target',
                clarity: 'NOT YET! Current: 24.62%. Target (National Forest Policy 1988): 33% (33% mountains, 20% plains). Gap of ~8.4%. Increasing but slowly (0.22% in 2 years).'
            }
        ],

        revisionBox: {
            title: '⚡ 30-Second Revision',
            points: [
                'India vegetation: Evergreen (W.Ghats, >200cm), Deciduous (60%, 100-200cm), Thorn (Rajasthan, <70cm), Montane (Himalayas), Mangrove (coasts)',
                'Himalayas (altitude): Sal (<1000m) → Oak (1000-2000m) → Deodar/Pine (2000-3500m) → Alpine meadows (3500-4500m) → Snow (>5000m)',
                'Global (latitude): Rainforest (0-10°) → Savanna (10-20°) → Desert (20-30°) → Temperate (40-60°) → Taiga (50-70°) → Tundra (>60°)',
                'India forest: 24.62% (target 33%), Mizoram highest % (85%), MP largest area',
                'Mangrove adaptations: Stilt roots, pneumatophores (breathing), vivipary (germinate on tree)',
                'Conservation: JFM, Green India, Chipko Movement, 104 National Parks'
            ]
        },

        pyqs: [
            {
                year: 2022,
                question: 'Discuss the distribution and characteristics of tropical deciduous forests in India.',
                type: 'Mains'
            },
            {
                year: 2021,
                question: 'Explain the vertical distribution of vegetation in the Himalayas with suitable examples.',
                type: 'Mains'
            },
            {
                year: 2020,
                question: 'What are mangrove forests? Discuss their ecological significance and threats.',
                type: 'Mains'
            },
            {
                year: 2019,
                question: 'Which state has the highest percentage of forest cover in India?',
                type: 'Prelims',
                options: ['Madhya Pradesh', 'Arunachal Pradesh', 'Mizoram', 'Uttarakhand']
            },
            {
                year: 2018,
                question: 'Discuss the factors controlling natural vegetation distribution in the world.',
                type: 'Mains'
            },
            {
                year: 2023,
                question: 'Evaluate the effectiveness of Joint Forest Management in India.',
                type: 'Mains'
            }
        ]
    },


    // ============================================
    // TOPIC 6: GRASSLANDS & DESERTS (DETAILED)
    // ============================================
    {
        id: 'grasslands-deserts',
        name: 'Grasslands & Deserts',
        icon: '🏜️',
        category: 'biogeography',
        theme: 'desert',
        difficulty: 'medium',
        upscRelevance: 'high',

        mindMap: {
            central: 'Grasslands & Deserts',
            branches: [
                {
                    name: 'Tropical Grasslands',
                    color: '#F39C12',
                    children: [
                        'Savanna (Africa)',
                        'Llanos (Venezuela)',
                        'Campos (Brazil)',
                        'Scattered trees',
                        'Seasonal rainfall'
                    ]
                },
                {
                    name: 'Temperate Grasslands',
                    color: '#27AE60',
                    children: [
                        'Prairies (N.America)',
                        'Steppes (Eurasia)',
                        'Pampas (Argentina)',
                        'Veld (S.Africa)',
                        'Downs (Australia)'
                    ]
                },
                {
                    name: 'Hot Deserts',
                    color: '#E67E22',
                    children: [
                        'Sahara (largest)',
                        'Arabian, Thar',
                        'Atacama, Kalahari',
                        '20-30° latitude belt'
                    ]
                },
                {
                    name: 'Cold Deserts',
                    color: '#95A5A6',
                    children: [
                        'Gobi, Taklamakan',
                        'Great Basin',
                        'Patagonian',
                        'Interior Asia, rain shadow'
                    ]
                }
            ]
        },

        memoryHooks: [
            {
                type: 'mnemonic',
                title: 'Temperate Grasslands',
                content: 'PVLPD = Prairies (USA), Veld (S.Africa), Llanos... wait no! Llanos is tropical! PVPSD = Prairies, Veld, Pampas, Steppes, Downs (all temperate).',
                icon: '🧠'
            },
            {
                type: 'comparison',
                title: 'Savanna vs Prairie',
                content: 'Savanna = TROPICAL (10-20°), has scattered TREES, wet-dry seasons, African wildlife. Prairie = TEMPERATE (30-50°), NO trees, cold winters, wheat farms, chernozem soil.',
                icon: '🌾'
            },
            {
                type: 'acronym',
                title: 'Major Hot Deserts',
                content: 'SAATAK = Sahara (largest), Arabian, Atacama (driest), Thar, Australian, Kalahari. All in 20-30° subtropical high-pressure belts!',
                icon: '🔤'
            },
            {
                type: 'visual',
                title: 'Desert Formation',
                content: 'Hot Deserts at 20-30° (subtropical highs - descending dry air). Cold Deserts in rain shadows (mountains block rain - Gobi behind Himalayas, Patagonian behind Andes).',
                icon: '🏜️'
            }
        ],

        conceptBlocks: [
            {
                title: 'Tropical Grasslands (Savannas)',
                icon: '🦁',
                points: [
                    'LOCATION: 10-20° N/S latitudes',
                    '  • AFRICA: Largest extent (Sudan, Kenya, Tanzania)',
                    '  • SOUTH AMERICA:',
                    '    - Llanos (Venezuela, Colombia)',
                    '    - Campos (Brazil)',
                    '  • AUSTRALIA: Northern parts',
                    '',
                    'CLIMATE:',
                    '  • Temperature: 20-30°C year-round',
                    '  • Rainfall: 50-150 cm (highly seasonal)',
                    '  • DISTINCT WET & DRY SEASONS:',
                    '    - Wet season: 6-8 months (grasses grow)',
                    '    - Dry season: 4-6 months (grasses dry, fires)',
                    '',
                    'VEGETATION:',
                    '  • GRASSES (dominant): Tall (2-3 meters in wet season)',
                    '    - Elephant grass, Rhodes grass',
                    '  • SCATTERED TREES (widely spaced):',
                    '    - ACACIA (umbrella-shaped - iconic African savanna)',
                    '    - BAOBAB (water-storing trunk)',
                    '  • CHARACTERISTICS:',
                    '    - Fire-resistant (trees have thick bark)',
                    '    - Drought-resistant',
                    '    - Deep root systems',
                    '',
                    'FAUNA (World-Famous):',
                    '  • HERBIVORES:',
                    '    - Zebra, Wildebeest, Elephants',
                    '    - Giraffes, Buffaloes, Antelopes',
                    '  • CARNIVORES:',
                    '    - Lions, Cheetahs, Leopards',
                    '    - Hyenas, Wild dogs',
                    '  • OTHERS:',
                    '    - Ostriches, Vultures',
                    '  • GREAT MIGRATION (Serengeti):',
                    '    - 1.5 million wildebeest migrate annually',
                    '    - Follow seasonal rains',
                    '    - World\'s largest land animal migration',
                    '',
                    'HUMAN ACTIVITIES:',
                    '  • PASTORALISM: Maasai people (cattle herding)',
                    '  • WILDLIFE TOURISM: Major income (Kenya, Tanzania)',
                    '  • Some agriculture (marginal)',
                    '',
                    'THREATS:',
                    '  • Overgrazing → desertification',
                    '  • Poaching (elephants, rhinos)',
                    '  • Human-wildlife conflict',
                    '  • Climate change (changing rainfall patterns)'
                ]
            },
            {
                title: 'Temperate Grasslands (Comprehensive)',
                icon: '🌾',
                points: [
                    'LOCATION: 30-50° N/S, interior continents',
                    '',
                    'NAMES BY REGION:',
                    '  • PRAIRIES: North America (USA Great Plains, Canada)',
                    '  • STEPPES: Eurasia (Russia, Kazakhstan, Ukraine)',
                    '  • PAMPAS: South America (Argentina, Uruguay)',
                    '  • VELD: South Africa',
                    '  • DOWNS: Australia (Murray-Darling basin)',
                    '',
                    'CLIMATE:',
                    '  • Temperature: -10°C (winter) to 25°C (summer)',
                    '  • Rainfall: 25-75 cm (moderate, limiting factor)',
                    '  • CONTINENTAL CLIMATE:',
                    '    - Hot summers',
                    '    - Cold winters (freezing)',
                    '    - Large temperature range',
                    '  • Evaporation high (limits tree growth)',
                    '',
                    'VEGETATION:',
                    '  • GRASSES ONLY (no trees):',
                    '    - SHORT GRASS (dry areas): 30-50 cm',
                    '    - TALL GRASS (wetter areas): 1-2 meters',
                    '  • SPECIES:',
                    '    - Buffalo grass, wheat grass, needle grass',
                    '  • CHARACTERISTICS:',
                    '    - Perennial (survive winter)',
                    '    - Deep fibrous roots (tap deep moisture)',
                    '    - Rapid spring growth',
                    '  • NO TREES because:',
                    '    - Insufficient rainfall',
                    '    - High evaporation',
                    '    - Grass roots compete for water',
                    '',
                    'FAUNA:',
                    '  • NORTH AMERICA (historical):',
                    '    - Bison (60 million reduced to <1000 by 1890s)',
                    '    - Prairie dogs, coyotes, rattlesnakes',
                    '  • EURASIA:',
                    '    - Saiga antelope, wild horses (extinct)',
                    '    - Ground squirrels, marmots',
                    '  • SOUTH AMERICA (Pampas):',
                    '    - Pampas deer, rheas (large birds)',
                    '    - Armadillos',
                    '  • ADAPTATIONS:',
                    '    - Fast running (open terrain, predators)',
                    '    - Burrowing (protection, hibernation)',
                    '',
                    'SOIL: CHERNOZEM (Black Earth):',
                    '  • MOST FERTILE soil on Earth',
                    '  • Deep black topsoil (60-80 cm)',
                    '  • 5-15% humus (grass roots decompose)',
                    '  • Rich in nitrogen, phosphorus',
                    '  • Perfect for agriculture',
                    '',
                    'AGRICULTURE (★★★★★ Most Productive):',
                    '  • WHEAT BELT OF THE WORLD:',
                    '    - Ukraine, Russia (steppes) → "Breadbasket of Europe"',
                    '    - USA, Canada (prairies) → Top wheat exporters',
                    '    - Argentina (pampas) → Major wheat/beef exporter',
                    '  • OTHER CROPS:',
                    '    - Corn (maize), barley, oats',
                    '  • CATTLE RANCHING:',
                    '    - Argentina: Beef cattle (pampas)',
                    '    - USA: Cattle ranches (replaced bison)',
                    '',
                    'CONVERSION:',
                    '  • >70% converted to agriculture',
                    '  • Only small protected areas remain in natural state',
                    '  • One of Earth\'s most transformed biomes',
                    '',
                    'HISTORICAL EVENT - DUST BOWL (1930s):',
                    '  • USA Great Plains',
                    '  • Over-plowing destroyed grass roots',
                    '  • Drought + high winds = massive dust storms',
                    '  • Topsoil blown away',
                    '  • Thousands migrated west (depicted in "Grapes of Wrath")',
                    '  • Led to soil conservation practices',
                    '',
                    'THREATS:',
                    '  • Soil erosion (over-farming)',
                    '  • Desertification',
                    '  • Loss of native grasslands',
                    '  • Climate change (changing rainfall)'
                ]
            },
            {
                title: 'Hot Deserts (Subtropical)',
                icon: '☀️',
                points: [
                    'LOCATION: 20-30° N/S (Subtropical High-Pressure Belts)',
                    '',
                    'MAJOR HOT DESERTS:',
                    '',
                    '🏜️ SAHARA (North Africa):',
                    '  • World\'s LARGEST hot desert (9 million km²)',
                    '  • Size: Nearly as large as USA!',
                    '  • Countries: Algeria, Libya, Egypt, Mali, Niger, Chad, etc.',
                    '  • Features: Sand dunes (erg), gravel plains (reg), rocky plateaus (hamada)',
                    '  • Rain: <25 mm/year in many areas',
                    '  • Temperature: 50°C+ in summer',
                    '',
                    '🐪 ARABIAN DESERT:',
                    '  • Saudi Arabia, Yemen, Oman, UAE',
                    '  • 2.3 million km²',
                    '  • Rub\' al Khali ("Empty Quarter") - largest continuous sand desert',
                    '  • Oil-rich region',
                    '',
                    '🏜️ KALAHARI (Southern Africa):',
                    '  • Botswana, Namibia, South Africa',
                    '  • 900,000 km²',
                    '  • NOT a true desert (receives 12-25 cm rain)',
                    '  • Wildlife: Lions, meerkats, springbok',
                    '  • San people (Bushmen) traditional inhabitants',
                    '',
                    '🏜️ ATACAMA (Chile, South America):',
                    '  • World\'s DRIEST desert',
                    '  • Some areas: NO recorded rainfall EVER',
                    '  • Average: <1 mm/year',
                    '  • Cause: Cold Peru Current offshore (creates temperature inversion)',
                    '  • NASA tests Mars rovers here (similar terrain)',
                    '',
                    '🏜️ THAR (India/Pakistan):',
                    '  • Also called "Great Indian Desert"',
                    '  • 200,000 km²',
                    '  • Rajasthan (70%), parts of Gujarat, Punjab, Haryana',
                    '  • Rain: 12-25 cm/year',
                    '  • Indira Gandhi Canal: Irrigation project',
                    '  • Population: Most densely populated desert (83 people/km²)',
                    '',
                    '🏜️ AUSTRALIAN DESERTS:',
                    '  • Great Victoria, Great Sandy, Simpson deserts',
                    '  • Cover 18% of Australia',
                    '',
                    'FORMATION CAUSES:',
                    '  • SUBTROPICAL HIGH-PRESSURE BELTS (main cause):',
                    '    - Descending dry air at 20-30° latitude',
                    '    - Clear skies, high evaporation',
                    '  • COLD OCEAN CURRENTS:',
                    '    - Atacama: Peru/Humboldt Current',
                    '    - Namib: Benguela Current',
                    '    - Cool air, moisture condenses offshore as fog',
                    '  • CONTINENTALITY:',
                    '    - Interior of continents, far from moisture',
                    '',
                    'CLIMATE:',
                    '  • Temperature:',
                    '    - Day: 40-50°C (up to 58°C in Death Valley!)',
                    '    - Night: Can drop to 0°C (no cloud cover)',
                    '    - HUGE diurnal range (30-40°C)',
                    '  • Rainfall: <25 cm/year (often <10 cm)',
                    '  • Evaporation: Exceeds rainfall (10-20x)',
                    '  • Humidity: Very low (<20%)',
                    '  • Wind: Frequent dust storms',
                    '',
                    'VEGETATION (Xerophytes):',
                    '  • ADAPTATIONS:',
                    '    - Thick waxy cuticle (reduce water loss)',
                    '    - Small leaves or spines (reduce surface area)',
                    '    - Deep tap roots (20-30m)',
                    '    - Succulent stems (store water)',
                    '    - CAM photosynthesis (open stomata at night)',
                    '  • SPECIES:',
                    '    - CACTUS (Americas): Saguaro, barrel cactus',
                    '    - ACACIA (Africa/Asia): Thorny trees',
                    '    - DATE PALM (oases)',
                    '    - Creosote bush, Joshua tree',
                    '  • Coverage: <10% (sparse)',
                    '',
                    'FAUNA:',
                    '  • ADAPTATIONS:',
                    '    - Nocturnal (avoid daytime heat)',
                    '    - Burrowing (cooler underground)',
                    '    - Water conservation (concentrated urine)',
                    '    - Fat storage (camel\'s hump)',
                    '  • ANIMALS:',
                    '    - CAMEL (ship of the desert)',
                    '    - Fennec fox, sand cat',
                    '    - Sidewinder rattlesnake, Gila monster',
                    '    - Scorpions, beetles',
                    '    - Birds: Roadrunner, sandgrouse',
                    '',
                    'LANDFORMS:',
                    '  • SAND DUNES:',
                    '    - Barchan (crescent-shaped)',
                    '    - Seif (linear)',
                    '    - Star dunes (multiple arms)',
                    '  • ROCKY DESERTS:',
                    '    - Hamada (rocky plateau)',
                    '    - Reg (gravel plain)',
                    '  • OASES: Groundwater springs, fertile',
                    '  • WADIS: Dry riverbeds (flash floods)',
                    '',
                    'HUMAN ACTIVITIES:',
                    '  • NOMADIC PASTORALISM:',
                    '    - Bedouins (Arabia)',
                    '    - Tuareg (Sahara)',
                    '  • OASIS AGRICULTURE:',
                    '    - Dates, fruits',
                    '  • MINING:',
                    '    - Oil (Arabia, Sahara)',
                    '    - Minerals',
                    '  • IRRIGATION AGRICULTURE:',
                    '    - Indira Gandhi Canal (Thar)',
                    '    - Nile Valley (Sahara)',
                    '',
                    'THREATS/ISSUES:',
                    '  • DESERTIFICATION:',
                    '    - Sahara expanding south (Sahel region)',
                    '    - Overgrazing, deforestation',
                    '  • WATER SCARCITY:',
                    '    - Groundwater depletion',
                    '  • CLIMATE CHANGE:',
                    '    - Increasing aridity',
                    '    - More extreme temperatures'
                ]
            },
            {
                title: 'Cold Deserts',
                icon: '❄️',
                points: [
                    'LOCATION: Interior continents, high latitudes, rain shadows',
                    '',
                    'MAJOR COLD DESERTS:',
                    '',
                    '🏜️ GOBI DESERT (Mongolia/China):',
                    '  • 1.3 million km²',
                    '  • RAIN SHADOW: Himalayas block moisture',
                    '  • Temperature: -40°C (winter) to 45°C (summer)',
                    '  • Extreme temperature range (85°C annually!)',
                    '  • Gravel/rocky, not sandy',
                    '  • Dinosaur fossils discovered here',
                    '',
                    '🏜️ TAKLAMAKAN (China):',
                    '  • 337,000 km²',
                    '  • Name means "Place of No Return"',
                    '  • Surrounded by mountains (rain shadow)',
                    '  • Shifting sand dunes',
                    '  • Ancient Silk Road passed along edges',
                    '',
                    '🏜️ GREAT BASIN (USA):',
                    '  • Nevada, Utah',
                    '  • 490,000 km²',
                    '  • RAIN SHADOW: Sierra Nevada blocks Pacific moisture',
                    '  • Sagebrush vegetation',
                    '  • Death Valley: Hottest, driest, lowest point in N.America',
                    '',
                    '🏜️ PATAGONIAN DESERT (Argentina):',
                    '  • 670,000 km²',
                    '  • RAIN SHADOW: Andes block Pacific moisture',
                    '  • Cold winds from Antarctica',
                    '  • Gravel plains',
                    '',
                    '🏜️ LADAKH (India):',
                    '  • High-altitude cold desert',
                    '  • Rain shadow of Himalayas',
                    '  • <10 cm rainfall',
                    '  • Buddhist culture, monasteries',
                    '',
                    'FORMATION CAUSES:',
                    '  • RAIN SHADOW:',
                    '    - Mountains block moisture-bearing winds',
                    '    - Gobi: Himalayas block monsoon',
                    '    - Patagonian: Andes block Pacific moisture',
                    '  • CONTINENTALITY:',
                    '    - Far from oceans (moisture source)',
                    '    - Interior of large continents',
                    '  • HIGH LATITUDE:',
                    '    - Cold air holds less moisture',
                    '',
                    'CLIMATE:',
                    '  • Temperature:',
                    '    - Winter: -20°C to -40°C',
                    '    - Summer: 20-30°C',
                    '    - HUGE annual range (60-80°C)',
                    '  • Rainfall: <25 cm/year',
                    '  • SNOW instead of rain (winter)',
                    '  • Frost common',
                    '',
                    'VEGETATION:',
                    '  • Sparse grasses',
                    '  • Shrubs: Sagebrush, saltbush',
                    '  • Drought-resistant, cold-resistant',
                    '  • Coverage: Very low',
                    '',
                    'FAUNA:',
                    '  • GOBI: Wild Bactrian camel (two humps, endangered)',
                    '    - Snow leopard, ibex',
                    '  • PATAGONIAN: Guanaco (wild llama)',
                    '  • GREAT BASIN: Bighorn sheep, coyotes',
                    '  • Adaptations: Thick fur, hibernation',
                    '',
                    'COMPARISON WITH HOT DESERTS:',
                    '  • COLD: Snow in winter, extreme cold',
                    '  • HOT: No snow, extreme heat',
                    '  • COLD: Gravel/rocky (often)',
                    '  • HOT: Sand dunes (often)',
                    '  • COLD: Interior continents, rain shadows',
                    '  • HOT: Subtropical high-pressure belts'
                ]
            },
            {
                title: 'Grasslands & Deserts of India',
                icon: '🇮🇳',
                points: [
                    '🌾 GRASSLANDS IN INDIA:',
                    '',
                    'TYPES:',
                    '  • TERAI GRASSLANDS:',
                    '    - Himalayan foothills (UP, Uttarakhand)',
                    '    - Tall grasslands (elephant grass)',
                    '    - Marshy, wet',
                    '    - Wildlife: Elephants, tigers, one-horned rhino',
                    '  • BHABAR GRASSLANDS:',
                    '    - North of Terai',
                    '    - Pebble/boulder belt',
                    '  • SHOLA GRASSLANDS:',
                    '    - Western Ghats (Nilgiris, Palni Hills)',
                    '    - Montane grasslands',
                    '    - Interspersed with shola forests (patches)',
                    '    - Endangered ecosystem',
                    '  • BET GRASSLANDS:',
                    '    - Narmada Valley',
                    '    - Seasonal flooding',
                    '',
                    'THREATS:',
                    '  • Agriculture conversion',
                    '  • Afforestation (grasslands replaced by exotic trees!)',
                    '  • Overgrazing',
                    '',
                    '---',
                    '',
                    '🏜️ THAR DESERT (India):',
                    '',
                    'LOCATION:',
                    '  • RAJASTHAN (61% of state area)',
                    '  • Parts of Gujarat, Punjab, Haryana',
                    '  • Extends into Pakistan (Sindh, Punjab)',
                    '',
                    'AREA: ~200,000 km² (India)',
                    '',
                    'CHARACTERISTICS:',
                    '  • MOST DENSELY POPULATED desert (83 people/km²)',
                    '  • Rainfall: 12-25 cm (semi-arid)',
                    '  • NOT a true desert (receives some monsoon)',
                    '  • Temperature: 0°C (winter) to 50°C (summer)',
                    '',
                    'VEGETATION:',
                    '  • Thorn forests and scrub',
                    '  • BABOOL (Acacia), Khejri, Ber',
                    '  • Cactus, succulent plants',
                    '',
                    'FAUNA:',
                    '  • DESERT NATIONAL PARK (Jaisalmer):',
                    '    - Great Indian Bustard (critically endangered)',
                    '    - Chinkara (Indian gazelle)',
                    '    - Desert fox, desert cat',
                    '  • Camels (domesticated, transport)',
                    '',
                    'LANDFORMS:',
                    '  • Sand dunes (50% area):',
                    '    - Barchan, longitudinal dunes',
                    '  • LUNI: Only river (seasonal)',
                    '  • Salt lakes: Sambhar (largest in India)',
                    '',
                    'HUMAN ACTIVITIES:',
                    '  • PASTORALISM:',
                    '    - Sheep, goat, camel herding',
                    '    - Raikas, Rabaris (pastoral communities)',
                    '  • AGRICULTURE:',
                    '    - Rainfed: Bajra, jowar, pulses',
                    '    - IRRIGATED (Indira Gandhi Canal):',
                    '      • Wheat, cotton, mustard',
                    '      • Transformed 7,000+ villages',
                    '  • MINING:',
                    '    - Gypsum, limestone, feldspar',
                    '  • TOURISM:',
                    '    - Desert festivals, camel safaris',
                    '',
                    'INDIRA GANDHI CANAL:',
                    '  • Length: 649 km (world\'s longest irrigation canal)',
                    '  • Source: Harike Barrage (Sutlej-Beas)',
                    '  • Destination: Jaisalmer (Thar Desert)',
                    '  • Impact: "Green revolution in the desert"',
                    '    - 19.63 lakh hectares irrigated',
                    '    - Wheat, cotton production increased',
                    '    - Afforestation (check desertification)',
                    '  • Issues:',
                    '    - Waterlogging in some areas',
                    '    - Salinization',
                    '    - Siltation of canal',
                    '',
                    'DESERTIFICATION IN INDIA:',
                    '  • Affected area: 81.48 million hectares (24.8% of land)',
                    '  • States: Rajasthan, Gujarat, MP, Maharashtra, J&K',
                    '  • Causes:',
                    '    - Overgrazing (70% cause)',
                    '    - Deforestation',
                    '    - Over-irrigation',
                    '  • INITIATIVES:',
                    '    - Integrated Watershed Management',
                    '    - Afforestation',
                    '    - Pasture development',
                    '    - MGNREGA (watershed works)'
                ]
            }
        ],

        diagrams: [
            {
                title: 'World Grasslands & Deserts Map',
                type: 'map',
                description: 'World map showing: Tropical grasslands (yellow-green, 10-20° - African savanna, Llanos, Campos), Temperate grasslands (green, 30-50° - Prairies, Steppes, Pampas, Veld), Hot deserts (orange, 20-30° - Sahara, Arabian, Atacama, Thar), Cold deserts (gray, interior Asia/rain shadows - Gobi, Taklamakan, Great Basin, Patagonian).'
            },
            {
                title: 'Savanna vs Temperate Grassland',
                type: 'comparison-chart',
                description: 'Side-by-side: (1) Savanna - scattered acacia trees, giraffe/zebra silhouettes, 10-20°, wet-dry seasons (2) Temperate - only grass, bison/prairie dog, 30-50°, cold winters, chernozem soil shown below'
            },
            {
                title: 'Hot Desert Formation (Subtropical High)',
                type: 'cross-section',
                description: 'Atmospheric cross-section showing: Equator with rising air (ITCZ) → air flows north/south → descends at 20-30° (subtropical high) → creates deserts (Sahara, Thar, Atacama marked). Show Hadley Cell circulation.'
            },
            {
                title: 'Cold Desert Formation (Rain Shadow)',
                type: 'cross-section',
                description: 'Mountain barrier (Himalayas/Andes) with moist air approaching from one side → rises, cools, rains on windward side → descends dry on leeward side → creates desert (Gobi/Patagonian). Show orographic effect.'
            },
            {
                title: 'Thar Desert & Indira Gandhi Canal',
                type: 'map',
                description: 'Rajasthan map showing: Thar Desert extent, Indira Gandhi Canal route (Harike to Jaisalmer, 649 km), irrigated areas along canal, Luni river, Sambhar lake. Mark before/after vegetation change.'
            },
            {
                title: 'Desert Vegetation Adaptations',
                type: 'diagram',
                description: 'Cactus/xerophyte showing: Thick waxy cuticle, spines (reduced leaves), succulent stem (water storage), deep tap root (20m+), shallow spreading roots. Label all adaptations for water conservation.'
            }
        ],

        quickFacts: [
            '🌾 Chernozem soil: Found in temperate grasslands, MOST FERTILE on Earth (60-80 cm black topsoil)',
            '🦁 Serengeti: 1.5 million wildebeest migrate annually (world\'s largest land migration)',
            '🌍 70% of temperate grasslands converted to agriculture (wheat belt)',
            '🏜️ Sahara: World\'s largest hot desert (9 million km²) - nearly size of USA!',
            '💧 Atacama: World\'s driest place (<1 mm rain/year, some areas NEVER recorded rain)',
            '🐪 Thar: World\'s most densely populated desert (83 people/km²)',
            '🌡️ Gobi: Extreme temperature range (85°C annually: -40°C to +45°C)',
            '💧 Indira Gandhi Canal: 649 km - world\'s longest irrigation canal',
            '⚠️ Dust Bowl (1930s): USA prairies - topsoil erosion, mass migration',
            '🇺🇦 Ukraine/Russia: Chernozem belt, "Breadbasket of Europe" (60% world chernozem)',
            '📉 Desertification: 81.48 million ha in India (24.8% of land)',
            '🦅 Great Indian Bustard: Critically endangered, found in Thar Desert (<150 remain)'
        ],

        upscTraps: [
            {
                trap: 'Savannas and temperate grasslands are the same',
                clarity: 'VERY DIFFERENT! Savanna = TROPICAL (10-20°), has TREES (scattered acacia), hot year-round, wet-dry seasons, African wildlife. Temperate = MID-LATITUDE (30-50°), NO trees, cold winters, chernozem soil, wheat farming!'
            },
            {
                trap: 'All grasslands lack trees due to low rainfall',
                clarity: 'DIFFERENT reasons! Temperate grasslands = true (25-75 cm rain insufficient for trees). Savanna = FIRE and seasonal drought prevent tree dominance (has 50-150 cm rain, enough for trees but grasses + fire win).'
            },
            {
                trap: 'All deserts are hot and sandy',
                clarity: 'COLD DESERTS exist! Gobi, Ladakh are COLD (winter -40°C). Often rocky/gravel, not sand. Hot deserts = subtropical (20-30°). Cold deserts = interior/rain shadow.'
            },
            {
                trap: 'Thar is a true desert like Sahara',
                clarity: 'Thar is SEMI-ARID (12-25 cm rain), not true desert (<10 cm). Receives monsoon fringe. Most DENSELY POPULATED desert because it\'s relatively wetter. Sahara has areas with <1 cm rain!'
            },
            {
                trap: 'Desertification only occurs in deserts',
                clarity: 'Desertification = land degradation in DRY areas (including grasslands, savannas). NOT limited to deserts! Sahel (south of Sahara) = savanna turning to desert. India: Even semi-arid Gujarat, MP affected.'
            }
        ],

        revisionBox: {
            title: '⚡ 30-Second Revision',
            points: [
                'Savanna (tropical): 10-20°, scattered trees (acacia), wet-dry seasons, African migration',
                'Temperate Grasslands: 30-50°, NO trees, chernozem (most fertile), wheat belt, Prairies/Steppes/Pampas',
                'Hot Deserts: 20-30° (subtropical highs), Sahara (largest), Atacama (driest), Thar (most populous)',
                'Cold Deserts: Rain shadow (Gobi/Patagonian), extreme temps (-40 to +45°C), gravel plains',
                'Thar: 200,000 km², semi-arid (12-25 cm), Indira Gandhi Canal (649 km irrigation)',
                'Desertification: 81.48 M ha India (24.8%), causes: overgrazing (70%), deforestation'
            ]
        },

        pyqs: [
            {
                year: 2022,
                question: 'Compare and contrast tropical savannas with temperate grasslands with respect to climate, vegetation, and soil.',
                type: 'Mains'
            },
            {
                year: 2021,
                question: 'Explain the formation of hot deserts and cold deserts with suitable examples.',
                type: 'Mains'
            },
            {
                year: 2020,
                question: 'Discuss the significance of Indira Gandhi Canal in transforming the Thar Desert region.',
                type: 'Mains'
            },
            {
                year: 2019,
                question: 'Which is the world\'s largest hot desert?',
                type: 'Prelims',
                options: ['Arabian Desert', 'Sahara Desert', 'Gobi Desert', 'Kalahari Desert']
            },
            {
                year: 2018,
                question: 'What is desertification? Discuss its causes and impacts in India.',
                type: 'Mains'
            },
            {
                year: 2023,
                question: 'Examine the threats to grassland ecosystems in India and suggest conservation measures.',
                type: 'Mains'
            }
        ]
    }

];

// ============================================
// FINAL EXPORT - Complete Biogeography Data
// ============================================

// Make data available globally
window.biogeographyData = biogeographyData;

console.log('🌿✅ Biogeography Data COMPLETE:', biogeographyData.length, 'topics');
console.log('📚 Topics loaded:', biogeographyData.map(t => t.name).join(', '));
