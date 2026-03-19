/* ============================================
   UPSC GEOGRAPHY LEARNING SYSTEM
   Models & Theories Data File - COMPREHENSIVE
   Topics: Malthusian Theory, DTM, Von Thunen,
           Weber, Christaller, Rostow
   ============================================ */

const modelsData = [

    // ============================================
    // TOPIC 1: MALTHUSIAN THEORY
    // ============================================
    {
        id: 'malthusian-theory',
        name: 'Malthusian Population Theory',
        icon: '📈',
        category: 'models',
        theme: 'population',
        difficulty: 'medium',
        upscRelevance: 'high',

        mindMap: {
            central: 'Malthusian Theory',
            branches: [
                {
                    name: 'Core Premise',
                    color: '#E74C3C',
                    children: [
                        'Population grows GEOMETRICALLY (2,4,8,16...)',
                        'Food grows ARITHMETICALLY (1,2,3,4...)',
                        'Population outpaces food supply',
                        'Result: Poverty, Famine, Misery'
                    ]
                },
                {
                    name: 'Population Checks',
                    color: '#9B59B6',
                    children: [
                        'Positive Checks (increase death)',
                        'Preventive Checks (reduce birth)',
                        'Natural vs Deliberate control'
                    ]
                },
                {
                    name: 'Positive Checks',
                    color: '#E67E22',
                    children: [
                        'Famine & Starvation',
                        'Disease & Epidemics',
                        'War & Violence',
                        'Natural Disasters'
                    ]
                },
                {
                    name: 'Preventive Checks',
                    color: '#3498DB',
                    children: [
                        'Moral Restraint',
                        'Late Marriage',
                        'Celibacy',
                        'Abstinence'
                    ]
                },
                {
                    name: 'Criticisms',
                    color: '#2ECC71',
                    children: [
                        'Ignored technology',
                        'Ignored contraception',
                        'Food production increased',
                        'Neo-Malthusian updates'
                    ]
                }
            ]
        },

        memoryHooks: [
            {
                type: 'mnemonic',
                title: 'Growth Rates',
                content: 'GEOMETRY has many angles (complex, fast) = Population. ARITHMETIC is simple addition = Food. Complex beats Simple!',
                icon: '🧠'
            },
            {
                type: 'story',
                title: 'The Rabbit and Carrot Story',
                content: 'Imagine rabbits doubling every year (2,4,8,16) but carrots growing by just 1 field/year (1,2,3,4). Soon rabbits starve! That\'s Malthus.',
                icon: '🐰'
            },
            {
                type: 'acronym',
                title: 'Positive Checks - FWDE',
                content: 'Famine, War, Disease, Epidemics = "Few Will Die Eventually" (dark but memorable!)',
                icon: '💀'
            },
            {
                type: 'comparison',
                title: 'Checks Comparison',
                content: 'Positive = Nature KILLS excess. Preventive = Humans PREVENT births. Positive is reactive, Preventive is proactive.',
                icon: '⚖️'
            }
        ],

        conceptBlocks: [
            {
                title: 'Thomas Malthus - Background',
                icon: '👤',
                points: [
                    '📅 Published: 1798 - "Essay on the Principle of Population"',
                    '🇬🇧 British economist and demographer',
                    '⛪ Also a clergyman (influenced his moral views)',
                    '📊 First systematic theory on population',
                    '🔥 Sparked massive debate - still relevant today!',
                    '📚 Writing during Industrial Revolution',
                    '⚠️ Concerned about rapid population growth in England'
                ]
            },
            {
                title: 'Core Theory - Growth Rates',
                icon: '📊',
                points: [
                    '🔢 POPULATION grows GEOMETRICALLY:',
                    '  • Doubles every 25 years (as per Malthus)',
                    '  • Series: 1 → 2 → 4 → 8 → 16 → 32 → 64...',
                    '  • Exponential growth curve (J-shaped)',
                    '  • Biological drive to reproduce',
                    '',
                    '🌾 FOOD grows ARITHMETICALLY:',
                    '  • Linear increase',
                    '  • Series: 1 → 2 → 3 → 4 → 5 → 6 → 7...',
                    '  • Limited by land availability',
                    '  • Law of Diminishing Returns applies',
                    '',
                    '⚠️ THE GAP WIDENS:',
                    '  • Year 0: Pop=1, Food=1 (balanced)',
                    '  • Year 50: Pop=4, Food=3 (slight deficit)',
                    '  • Year 100: Pop=16, Food=5 (major crisis!)',
                    '  • Year 150: Pop=64, Food=7 (catastrophe!)',
                    '',
                    '💥 INEVITABLE RESULT:',
                    '  • Population will always tend to outstrip food',
                    '  • Chronic poverty is natural state',
                    '  • Misery is inevitable without checks'
                ]
            },
            {
                title: 'Positive Checks (Increase Deaths)',
                icon: '💀',
                points: [
                    '❌ NATURE\'S WAY of reducing population:',
                    '',
                    '🍽️ FAMINE:',
                    '  • Food shortage → starvation',
                    '  • Irish Potato Famine (1845-52) cited as example',
                    '  • Bengal Famine (1943) - 3 million died',
                    '',
                    '🦠 DISEASE & EPIDEMICS:',
                    '  • Plague, cholera, typhoid',
                    '  • Black Death killed 1/3 of Europe',
                    '  • COVID-19 - modern example?',
                    '',
                    '⚔️ WAR:',
                    '  • Reduces population directly',
                    '  • Also destroys food production',
                    '',
                    '🌊 NATURAL DISASTERS:',
                    '  • Floods, earthquakes, droughts',
                    '  • Kill population, destroy crops',
                    '',
                    '📍 KEY POINT: These are REACTIVE, not planned',
                    '  • Occur when population exceeds carrying capacity',
                    '  • Malthus saw these as "natural" corrections'
                ]
            },
            {
                title: 'Preventive Checks (Reduce Births)',
                icon: '🛑',
                points: [
                    '✅ HUMAN CHOICES to limit population:',
                    '',
                    '💍 MORAL RESTRAINT (Malthus preferred this):',
                    '  • Delay marriage until financially stable',
                    '  • Abstinence before marriage',
                    '  • Celibacy (not marrying at all)',
                    '',
                    '👨‍👩‍👧 LATE MARRIAGE:',
                    '  • Fewer childbearing years',
                    '  • Common in Europe historically',
                    '',
                    '📖 EDUCATION:',
                    '  • Awareness of consequences',
                    '  • Malthus opposed poor relief (welfare)',
                    '  • Thought it encouraged more births!',
                    '',
                    '⚠️ WHAT MALTHUS DID NOT SUPPORT:',
                    '  • Contraception (against his religious views)',
                    '  • Abortion',
                    '  • Any "artificial" methods',
                    '',
                    '📍 KEY POINT: These are PROACTIVE',
                    '  • Humans consciously choose to limit births',
                    '  • Malthus saw moral restraint as ideal solution'
                ]
            },
            {
                title: 'Why Malthus Was WRONG',
                icon: '❌',
                points: [
                    '🚜 TECHNOLOGICAL REVOLUTION:',
                    '  • Green Revolution - HYV seeds, fertilizers',
                    '  • Mechanization increased yields',
                    '  • Food production grew FASTER than arithmetic',
                    '  • World produces enough food for 10 billion!',
                    '',
                    '💊 CONTRACEPTION:',
                    '  • Birth control widely available',
                    '  • Population growth has slowed dramatically',
                    '  • Many countries below replacement rate',
                    '',
                    '🌍 DEMOGRAPHIC TRANSITION:',
                    '  • Developed countries: Low birth + low death',
                    '  • Population stabilizes, even declines',
                    '  • Japan, Germany, Italy shrinking!',
                    '',
                    '🚢 TRADE & GLOBALIZATION:',
                    '  • Food can be imported',
                    '  • Local carrying capacity irrelevant',
                    '',
                    '📉 ACTUAL TRENDS:',
                    '  • 1800: 1 billion people, mass hunger',
                    '  • 2024: 8 billion people, obesity epidemic!',
                    '  • Problem is DISTRIBUTION, not production'
                ]
            },
            {
                title: 'Neo-Malthusianism & Relevance Today',
                icon: '🔄',
                points: [
                    '🌿 NEO-MALTHUSIANS say:',
                    '  • Earth has FINITE resources (not just food)',
                    '  • Oil, water, minerals will run out',
                    '  • Climate change = positive check?',
                    '  • Ecological collapse possible',
                    '',
                    '📚 KEY NEO-MALTHUSIAN WORKS:',
                    '  • Paul Ehrlich: "Population Bomb" (1968)',
                    '  • Club of Rome: "Limits to Growth" (1972)',
                    '  • Predicted resource exhaustion',
                    '',
                    '🇮🇳 INDIA CONTEXT:',
                    '  • 1.4 billion people',
                    '  • Water scarcity in many regions',
                    '  • Agricultural land shrinking',
                    '  • But - TFR declining (2.0 in 2023)',
                    '',
                    '⚖️ BALANCED VIEW:',
                    '  • Malthus wrong on specifics',
                    '  • But core concern valid: Finite planet!',
                    '  • Sustainability is key issue today',
                    '  • Population × Consumption = Impact'
                ]
            }
        ],

        diagrams: [
            {
                title: 'Malthusian Growth Curves',
                type: 'graph',
                description: 'X-axis: Time. Y-axis: Growth. Show EXPONENTIAL curve (J-shaped) for population growth. Show LINEAR line (straight) for food growth. Lines diverge - gap = "Malthusian Crisis Zone" where positive checks kick in.'
            },
            {
                title: 'Population Checks Diagram',
                type: 'flowchart',
                description: 'Central "Population Growth" with two branches: (1) Positive Checks (Famine, War, Disease, Disasters) pointing down to "Increased Death Rate". (2) Preventive Checks (Moral Restraint, Late Marriage) pointing down to "Reduced Birth Rate". Both lead to "Population Control".'
            },
            {
                title: 'Malthus vs Reality',
                type: 'comparison-chart',
                description: 'Two columns: "Malthus Predicted" vs "What Actually Happened". Show: (1) Geometric pop growth → Slowing due to contraception. (2) Arithmetic food growth → Exponential due to technology. (3) Mass starvation → Obesity epidemic. (4) Poverty inevitable → Many achieved prosperity.'
            },
            {
                title: 'Global Population Timeline',
                type: 'timeline',
                description: '1800: 1 billion. 1930: 2 billion. 1960: 3 billion. 1975: 4 billion. 1987: 5 billion. 1999: 6 billion. 2011: 7 billion. 2022: 8 billion. Show slowing rate of increase.'
            }
        ],

        quickFacts: [
            '📅 1798: Malthus published "Essay on the Principle of Population"',
            '📈 Population: Geometric growth (doubling: 1,2,4,8,16...)',
            '🌾 Food: Arithmetic growth (linear: 1,2,3,4,5...)',
            '💀 Positive Checks: Famine, War, Disease (increase deaths)',
            '🛑 Preventive Checks: Moral restraint, late marriage (reduce births)',
            '❌ Malthus OPPOSED contraception (religious views)',
            '🚜 Green Revolution proved food CAN grow exponentially',
            '🌍 World produces food for 10 billion - distribution is problem',
            '📉 Many developed countries now BELOW replacement fertility',
            '🔄 Neo-Malthusians: Focus on finite RESOURCES, not just food',
            '📚 Paul Ehrlich\'s "Population Bomb" (1968) - Neo-Malthusian',
            '🇮🇳 India TFR: 2.0 (2023) - below replacement level!'
        ],

        upscTraps: [
            {
                trap: 'Malthus supported all forms of birth control',
                clarity: 'FALSE! Malthus was a clergyman and OPPOSED contraception, abortion. He only supported "moral restraint" (celibacy, late marriage). Neo-Malthusians later advocated contraception.'
            },
            {
                trap: 'Malthusian theory has been completely disproven',
                clarity: 'PARTIALLY TRUE. Malthus was wrong about food production (technology helped) and population (contraception). But core idea of FINITE resources remains relevant (Neo-Malthusianism focuses on oil, water, climate).'
            },
            {
                trap: 'Positive checks are human interventions',
                clarity: 'OPPOSITE! Positive checks are NATURAL (famine, disease, war) - they increase death rate. PREVENTIVE checks are human choices (late marriage, abstinence) - they reduce birth rate.'
            },
            {
                trap: 'Geometric and exponential growth are different',
                clarity: 'They are the SAME thing! Geometric progression (2,4,8,16) IS exponential growth. Arithmetic (1,2,3,4) is linear growth. Malthus used "geometric" terminology.'
            }
        ],

        revisionBox: {
            title: '⚡ 30-Second Revision',
            points: [
                '1798: Malthus wrote "Essay on Population"',
                'Population: Geometric (2,4,8,16). Food: Arithmetic (1,2,3,4)',
                'Gap → Positive Checks (Famine, War, Disease = death)',
                'Solution → Preventive Checks (Moral restraint = less births)',
                'WRONG: Technology (Green Rev), Contraception, Trade solved it',
                'Neo-Malthus: Earth has FINITE resources (oil, water, climate)',
                'Today: Production OK, DISTRIBUTION is the real problem'
            ]
        },

        pyqs: [
            {
                year: 2019,
                question: 'Critically examine the Malthusian theory of population. Is it relevant in the contemporary world?',
                type: 'Mains'
            },
            {
                year: 2021,
                question: 'Discuss the concept of positive and preventive checks as given by Malthus.',
                type: 'Mains'
            },
            {
                year: 2017,
                question: 'According to Malthus, population grows in which progression?',
                type: 'Prelims',
                options: ['Arithmetic', 'Geometric', 'Harmonic', 'Linear']
            },
            {
                year: 2020,
                question: 'Compare and contrast Malthusian theory with Neo-Malthusian perspective.',
                type: 'Mains'
            },
            {
                year: 2018,
                question: 'Why did Malthus oppose poor relief laws? Discuss.',
                type: 'Mains'
            }
        ]
    },

    // ============================================
    // TOPIC 2: DEMOGRAPHIC TRANSITION MODEL (DTM)
    // ============================================
    {
        id: 'demographic-transition-model',
        name: 'Demographic Transition Model',
        icon: '📊',
        category: 'models',
        theme: 'population',
        difficulty: 'high',
        upscRelevance: 'very-high',

        mindMap: {
            central: 'Demographic Transition Model',
            branches: [
                {
                    name: 'Stage 1: High Stationary',
                    color: '#E74C3C',
                    children: [
                        'High Birth Rate',
                        'High Death Rate',
                        'Low population growth',
                        'Pre-industrial societies',
                        'Example: Tribal communities'
                    ]
                },
                {
                    name: 'Stage 2: Early Expanding',
                    color: '#E67E22',
                    children: [
                        'High Birth Rate continues',
                        'Death Rate FALLS rapidly',
                        'Population EXPLOSION',
                        'Medical advances, sanitation',
                        'Example: Sub-Saharan Africa'
                    ]
                },
                {
                    name: 'Stage 3: Late Expanding',
                    color: '#F1C40F',
                    children: [
                        'Birth Rate FALLS',
                        'Death Rate continues low',
                        'Growth rate slows',
                        'Urbanization, education',
                        'Example: India, Brazil'
                    ]
                },
                {
                    name: 'Stage 4: Low Stationary',
                    color: '#2ECC71',
                    children: [
                        'Low Birth Rate',
                        'Low Death Rate',
                        'Stable/slow growth',
                        'Developed nations',
                        'Example: USA, UK, France'
                    ]
                },
                {
                    name: 'Stage 5: Declining',
                    color: '#3498DB',
                    children: [
                        'Very Low Birth Rate',
                        'Death Rate rises slightly',
                        'Population DECLINE',
                        'Aging population',
                        'Example: Japan, Germany, Italy'
                    ]
                }
            ]
        },

        memoryHooks: [
            {
                type: 'mnemonic',
                title: 'DTM Stages - HEELS',
                content: 'High stationary, Early expanding, (Late expanding), Low stationary, Shrinking = HEELS (you walk through stages like walking in heels!)',
                icon: '👠'
            },
            {
                type: 'story',
                title: 'Village to City Story',
                content: 'Stage 1: Village with many births, many deaths (diseases). Stage 2: Doctor arrives, deaths drop but births same → population boom! Stage 3: Kids get educated, want smaller families. Stage 4: Modern city, stable population. Stage 5: Everyone\'s old, population shrinks!',
                icon: '🏘️'
            },
            {
                type: 'visual',
                title: 'Birth-Death Gap',
                content: 'Stage 2 has BIGGEST gap between birth rate and death rate = Population Explosion. Stage 4-5 have SMALLEST gap = Stable/Decline. The GAP = Natural Increase.',
                icon: '📐'
            },
            {
                type: 'acronym',
                title: 'What Causes Transition?',
                content: 'MUSE = Medical advances, Urbanization, Social change, Education. These drive transition from Stage 1 to Stage 5.',
                icon: '🔤'
            }
        ],

        conceptBlocks: [
            {
                title: 'What is DTM?',
                icon: '📋',
                points: [
                    '📊 DEFINITION:',
                    '  • Model showing how populations change over time',
                    '  • Links demographic changes to economic development',
                    '  • Based on historical experience of Europe/West',
                    '',
                    '👤 DEVELOPED BY:',
                    '  • Frank Notestein (1945) - formalized the model',
                    '  • Warren Thompson (1929) - earlier observations',
                    '',
                    '📈 KEY VARIABLES:',
                    '  • Birth Rate (Crude Birth Rate - CBR)',
                    '  • Death Rate (Crude Death Rate - CDR)',
                    '  • Natural Increase = CBR - CDR',
                    '  • Total Population',
                    '',
                    '🎯 CORE IDEA:',
                    '  • As societies develop economically...',
                    '  • First DEATH RATE falls (medicine, sanitation)',
                    '  • Then BIRTH RATE falls (education, urbanization)',
                    '  • Eventually both stabilize at LOW levels'
                ]
            },
            {
                title: 'Stage 1: High Stationary',
                icon: '1️⃣',
                points: [
                    '📍 CHARACTERISTICS:',
                    '  • HIGH Birth Rate (40-50 per 1000)',
                    '  • HIGH Death Rate (40-50 per 1000)',
                    '  • Population growth: Very LOW or ZERO',
                    '  • Pyramid shape: Wide base, narrow top',
                    '',
                    '🏠 SOCIETY TYPE:',
                    '  • Pre-industrial, agrarian',
                    '  • No modern medicine',
                    '  • Poor sanitation, hygiene',
                    '  • High infant mortality',
                    '  • Low life expectancy (30-40 years)',
                    '',
                    '👶 WHY HIGH BIRTH RATE:',
                    '  • Children = labor for farms',
                    '  • Many die, so have many',
                    '  • No contraception',
                    '  • Women\'s role = childbearing',
                    '  • Religious/cultural factors',
                    '',
                    '💀 WHY HIGH DEATH RATE:',
                    '  • Epidemics (plague, cholera)',
                    '  • Famines',
                    '  • No vaccines, antibiotics',
                    '  • Poor nutrition',
                    '  • Wars',
                    '',
                    '🌍 EXAMPLES TODAY:',
                    '  • Very few - remote tribal communities',
                    '  • Some parts of Sub-Saharan Africa',
                    '  • Most of human history was Stage 1'
                ]
            },
            {
                title: 'Stage 2: Early Expanding',
                icon: '2️⃣',
                points: [
                    '📍 CHARACTERISTICS:',
                    '  • HIGH Birth Rate (still 40+ per 1000)',
                    '  • FALLING Death Rate (drops to 20-30)',
                    '  • Population: RAPID GROWTH (explosion!)',
                    '  • Gap between BR and DR is MAXIMUM',
                    '',
                    '💊 WHY DEATH RATE FALLS:',
                    '  • Medical advances (vaccines, antibiotics)',
                    '  • Better sanitation (sewage, clean water)',
                    '  • Improved nutrition',
                    '  • Hospitals, clinics established',
                    '  • Infant mortality drops sharply',
                    '  • Life expectancy increases',
                    '',
                    '👶 WHY BIRTH RATE STAYS HIGH:',
                    '  • Cultural norms slow to change',
                    '  • Agriculture still dominant',
                    '  • Education levels still low',
                    '  • Women\'s empowerment limited',
                    '  • No contraception access',
                    '',
                    '📈 POPULATION EXPLOSION:',
                    '  • This is when POPULATION EXPLOSION occurs',
                    '  • Fewer dying, same number being born',
                    '  • India was here in 1950s-70s',
                    '',
                    '🌍 EXAMPLES TODAY:',
                    '  • Afghanistan, Niger, Mali',
                    '  • Parts of Sub-Saharan Africa',
                    '  • Yemen, Pakistan (partially)'
                ]
            },
            {
                title: 'Stage 3: Late Expanding',
                icon: '3️⃣',
                points: [
                    '📍 CHARACTERISTICS:',
                    '  • FALLING Birth Rate (25-30 per 1000)',
                    '  • LOW Death Rate (stable at 10-15)',
                    '  • Population: Still growing but SLOWING',
                    '  • Gap between BR and DR narrows',
                    '',
                    '👶 WHY BIRTH RATE FALLS:',
                    '  • URBANIZATION: Kids = cost, not labor',
                    '  • EDUCATION: Especially female education',
                    '  • CONTRACEPTION: Access improves',
                    '  • WOMEN\'S EMPOWERMENT: Career choices',
                    '  • ECONOMIC: High cost of raising children',
                    '  • LOWER INFANT MORTALITY: Don\'t need "extras"',
                    '',
                    '🏙️ SOCIAL CHANGES:',
                    '  • Rural to urban migration',
                    '  • Nuclear families replace joint families',
                    '  • Women enter workforce',
                    '  • Marriage age increases',
                    '',
                    '📊 INDIA\'S POSITION:',
                    '  • India is currently in Stage 3!',
                    '  • TFR dropped from 6.0 (1951) to 2.0 (2023)',
                    '  • Southern states already in Stage 4',
                    '  • Northern states still in early Stage 3',
                    '',
                    '🌍 EXAMPLES TODAY:',
                    '  • India, Brazil, Mexico, Indonesia',
                    '  • Turkey, Iran, Bangladesh',
                    '  • South Africa, Egypt'
                ]
            },
            {
                title: 'Stage 4: Low Stationary',
                icon: '4️⃣',
                points: [
                    '📍 CHARACTERISTICS:',
                    '  • LOW Birth Rate (10-15 per 1000)',
                    '  • LOW Death Rate (10-12 per 1000)',
                    '  • Population: STABLE or very slow growth',
                    '  • Gap between BR and DR very small',
                    '',
                    '🏙️ SOCIETY TYPE:',
                    '  • Highly urbanized',
                    '  • Post-industrial economies',
                    '  • Service sector dominant',
                    '  • High standard of living',
                    '',
                    '👪 FAMILY PATTERNS:',
                    '  • Small nuclear families (1-2 children)',
                    '  • High contraception use',
                    '  • Women highly educated',
                    '  • Career before children',
                    '  • Some choose no children',
                    '',
                    '👴 AGE STRUCTURE:',
                    '  • Aging population begins',
                    '  • Working-age population large',
                    '  • Dependency ratio moderate',
                    '  • Pension systems stressed',
                    '',
                    '🌍 EXAMPLES TODAY:',
                    '  • USA, UK, France, Australia',
                    '  • Canada, Sweden, Netherlands',
                    '  • South Korea (transitioning to 5)',
                    '  • Kerala, Tamil Nadu in India!'
                ]
            },
            {
                title: 'Stage 5: Declining (Debated)',
                icon: '5️⃣',
                points: [
                    '📍 CHARACTERISTICS:',
                    '  • VERY LOW Birth Rate (below 10 per 1000)',
                    '  • Death Rate RISES slightly (aging population)',
                    '  • Population: DECLINING (shrinking!)',
                    '  • BR < DR = Negative natural increase',
                    '',
                    '⚠️ NOT IN ORIGINAL MODEL:',
                    '  • DTM originally had 4 stages',
                    '  • Stage 5 added later based on new trends',
                    '  • Still debated by demographers',
                    '',
                    '👶 WHY ULTRA-LOW BIRTH RATE:',
                    '  • Children seen as very costly',
                    '  • Career priorities dominate',
                    '  • High female workforce participation',
                    '  • Delayed marriage (30s common)',
                    '  • Some choose childlessness',
                    '  • Work-life balance issues',
                    '',
                    '👴 AGING CRISIS:',
                    '  • Old age dependency ratio very high',
                    '  • Healthcare costs soar',
                    '  • Pension systems collapse',
                    '  • Labor shortages',
                    '  • Economic stagnation',
                    '',
                    '🌍 EXAMPLES TODAY:',
                    '  • Japan (population declining since 2010)',
                    '  • Germany, Italy, Spain',
                    '  • Russia, Eastern Europe',
                    '  • South Korea (TFR = 0.78 in 2023!)'
                ]
            },
            {
                title: 'Criticisms of DTM',
                icon: '⚠️',
                points: [
                    '❌ EUROCENTRISM:',
                    '  • Based on European historical experience',
                    '  • May not apply to all countries',
                    '  • Different cultural contexts ignored',
                    '',
                    '❌ ASSUMES LINEAR PROGRESSION:',
                    '  • Countries may skip stages',
                    '  • May move backwards (AIDS crisis increased deaths)',
                    '  • Not one-way street',
                    '',
                    '❌ IGNORES MIGRATION:',
                    '  • Only considers birth and death',
                    '  • Immigration can change population rapidly',
                    '  • UAE, Singapore - population via immigration',
                    '',
                    '❌ IGNORES GOVERNMENT POLICY:',
                    '  • China\'s one-child policy',
                    '  • Pro-natalist policies',
                    '  • Immigration policies',
                    '',
                    '❌ NO TIME FRAME:',
                    '  • Doesn\'t say HOW LONG each stage lasts',
                    '  • Europe took 200 years',
                    '  • South Korea did it in 50 years!',
                    '',
                    '✅ STILL USEFUL:',
                    '  • General pattern holds true',
                    '  • Useful for planning',
                    '  • Explains demographic dividend'
                ]
            },
            {
                title: 'India in DTM',
                icon: '🇮🇳',
                points: [
                    '📊 INDIA\'S CURRENT POSITION: Stage 3',
                    '',
                    '📈 HISTORICAL JOURNEY:',
                    '  • Pre-1920: Stage 1 (high BR, high DR)',
                    '  • 1920-1970: Stage 2 (DR fell, BR high)',
                    '  • 1970-present: Stage 3 (BR falling)',
                    '',
                    '📉 KEY STATISTICS:',
                    '  • CBR: 17.2 (2023)',
                    '  • CDR: 6.5 (2023)',
                    '  • TFR: 2.0 (below replacement!)',
                    '  • Population growth rate: 1.0%',
                    '',
                    '🗺️ REGIONAL VARIATION:',
                    '  • SOUTH (Kerala, TN, Karnataka): Stage 4',
                    '    - TFR below 1.8, aging population',
                    '  • NORTH (UP, Bihar, Rajasthan): Late Stage 2/Early Stage 3',
                    '    - TFR around 2.5-3.0',
                    '  • NORTHEAST: Stage 3',
                    '',
                    '🎯 DEMOGRAPHIC DIVIDEND:',
                    '  • Working-age population is largest',
                    '  • Window: 2020-2050 approximately',
                    '  • Must create jobs to benefit!',
                    '',
                    '⚠️ CHALLENGES:',
                    '  • South aging, North still growing',
                    '  • Migration pressures',
                    '  • Skewed sex ratio'
                ]
            }
        ],

        diagrams: [
            {
                title: 'DTM Classic Diagram',
                type: 'graph',
                description: 'X-axis: Time/Development. Y-axis: Rate per 1000. Two lines: Birth Rate (starts high, stays high in Stage 2, falls in Stage 3-4-5) and Death Rate (starts high, falls in Stage 2, stays low). Shade the area between lines = Natural Increase. Label all 5 stages below.'
            },
            {
                title: 'Population Pyramids by Stage',
                type: 'comparison-chart',
                description: 'Show 5 population pyramids: Stage 1 (wide base, very narrow top - triangle). Stage 2 (very wide base, narrow top - steep triangle). Stage 3 (narrowing base - bell shape). Stage 4 (rectangle shape). Stage 5 (inverted pyramid - wider at top, narrow base).'
            },
            {
                title: 'World Map - DTM Stages',
                type: 'map',
                description: 'World map color-coded by DTM stage. Red = Stage 2 (Africa). Orange = Stage 3 (India, Brazil). Green = Stage 4 (USA, UK). Blue = Stage 5 (Japan, Germany). Few areas in Stage 1.'
            },
            {
                title: 'India Regional DTM Map',
                type: 'map',
                description: 'India map showing: Green (Stage 4) = Kerala, Tamil Nadu, Andhra, Karnataka, Punjab. Yellow (Stage 3) = Maharashtra, Gujarat, West Bengal. Red (Late Stage 2) = UP, Bihar, MP, Rajasthan.'
            }
        ],

        quickFacts: [
            '📊 DTM developed by Frank Notestein (1945), based on Thompson (1929)',
            '1️⃣ Stage 1: High BR + High DR = Low growth (pre-industrial)',
            '2️⃣ Stage 2: High BR + Falling DR = POPULATION EXPLOSION',
            '3️⃣ Stage 3: Falling BR + Low DR = Slowing growth',
            '4️⃣ Stage 4: Low BR + Low DR = Stable population',
            '5️⃣ Stage 5: Very Low BR + Rising DR = Population DECLINE',
            '🇮🇳 India is in Stage 3 overall (TFR = 2.0 in 2023)',
            '📍 Kerala, Tamil Nadu = Stage 4 (aging already)',
            '📍 Bihar, UP = Late Stage 2/Early Stage 3',
            '🇯🇵 Japan = Stage 5 (population declining since 2010)',
            '🇰🇷 South Korea TFR = 0.78 (2023) - lowest in world!',
            '⏰ Europe took 200 years, South Korea did it in 50 years',
            '🎯 Demographic Dividend = Window when working-age dominates'
        ],

        upscTraps: [
            {
                trap: 'Stage 2 has falling birth rate',
                clarity: 'WRONG! Stage 2 has FALLING DEATH RATE but BIRTH RATE REMAINS HIGH. This causes population explosion. Birth rate falls in Stage 3.'
            },
            {
                trap: 'All states of India are in same DTM stage',
                clarity: 'FALSE! Southern states (Kerala, TN) are in Stage 4. Northern states (UP, Bihar) are in late Stage 2/early Stage 3. India has regional demographic diversity.'
            },
            {
                trap: 'DTM original model had 5 stages',
                clarity: 'FALSE! Original DTM had only 4 stages. Stage 5 (population decline) was added later based on Japan, Germany experience. Still debated by some demographers.'
            },
            {
                trap: 'Countries must pass through all stages sequentially',
                clarity: 'NOT ALWAYS! Some countries may skip stages or move quickly. China went from Stage 2 to Stage 4 rapidly due to one-child policy. Some countries moved back due to HIV/AIDS crisis.'
            }
        ],

        revisionBox: {
            title: '⚡ 30-Second Revision',
            points: [
                'Stage 1: High BR, High DR → Low growth (tribal)',
                'Stage 2: High BR, FALLING DR → EXPLOSION (Africa)',
                'Stage 3: FALLING BR, Low DR → Slowing growth (India)',
                'Stage 4: Low BR, Low DR → Stable (USA, UK)',
                'Stage 5: Very Low BR, Rising DR → DECLINE (Japan, Germany)',
                'Key drivers: Medicine (drops DR), Education & Urbanization (drops BR)',
                'India Stage 3: TFR=2.0, but Kerala=Stage 4, Bihar=Stage 2-3',
                'Criticism: Eurocentric, ignores migration, no time frame'
            ]
        },

        pyqs: [
            {
                year: 2022,
                question: 'Explain the Demographic Transition Model. At what stage is India currently?',
                type: 'Mains'
            },
            {
                year: 2020,
                question: 'Discuss the regional variations in demographic transition within India.',
                type: 'Mains'
            },
            {
                year: 2019,
                question: 'In which stage of DTM does population explosion occur?',
                type: 'Prelims',
                options: ['Stage 1', 'Stage 2', 'Stage 3', 'Stage 4']
            },
            {
                year: 2021,
                question: 'What is demographic dividend? How can India benefit from it?',
                type: 'Mains'
            },
            {
                year: 2018,
                question: 'Critically examine the applicability of Demographic Transition Model to developing countries.',
                type: 'Mains'
            },
            {
                year: 2023,
                question: 'Discuss the challenges posed by Stage 5 of demographic transition with examples.',
                type: 'Mains'
            }
        ]
    },

    // ============================================
    // TOPIC 3: VON THÜNEN'S AGRICULTURAL MODEL
    // ============================================
    {
        id: 'von-thunen-model',
        name: "Von Thünen's Agricultural Location Model",
        icon: '🌾',
        category: 'models',
        theme: 'agriculture',
        difficulty: 'medium',
        upscRelevance: 'high',

        mindMap: {
            central: "Von Thünen's Model",
            branches: [
                {
                    name: 'Core Concept',
                    color: '#27AE60',
                    children: [
                        'Land use varies with distance from market',
                        'Transportation cost is key',
                        'Rent decreases with distance',
                        'Concentric rings of agriculture'
                    ]
                },
                {
                    name: 'Zone 1: Intensive',
                    color: '#2ECC71',
                    children: [
                        'Dairy, Market Gardening',
                        'Perishable goods',
                        'High transport cost products',
                        'Highest land rent'
                    ]
                },
                {
                    name: 'Zone 2-3: Forest & Grains',
                    color: '#F1C40F',
                    children: [
                        'Zone 2: Forest (timber)',
                        'Zone 3: Intensive crops (wheat)',
                        'Zone 4: Extensive crops (rye)',
                        'Moderate rent'
                    ]
                },
                {
                    name: 'Zone 5-6: Extensive',
                    color: '#E74C3C',
                    children: [
                        'Zone 5: Three-field system',
                        'Zone 6: Ranching/Grazing',
                        'Beyond: Wilderness',
                        'Lowest/No rent'
                    ]
                },
                {
                    name: 'Assumptions',
                    color: '#9B59B6',
                    children: [
                        'Isolated State',
                        'Single central market',
                        'Uniform plain (isotropic)',
                        'Rational farmers maximize profit'
                    ]
                }
            ]
        },

        memoryHooks: [
            {
                type: 'story',
                title: 'The Milk Journey',
                content: 'Imagine milk that spoils in one day. Would you produce it 100 km from city? NO! You\'d produce near city. That\'s Zone 1. Wheat can wait → Zone 3-4. Cattle can walk → Zone 6 (outermost).',
                icon: '🥛'
            },
            {
                type: 'mnemonic',
                title: 'Zone Order - DMF IGR',
                content: 'Dairy → Market garden → Forest → Intensive crops → Grain → Ranching. Remember: "Dairy Makes Farmers Increasingly Good Ranchers!"',
                icon: '🧠'
            },
            {
                type: 'visual',
                title: 'Bullseye Target',
                content: 'Imagine city as bullseye center. Closest ring = highest value crops (dairy, vegetables). Each outer ring = lower value, less perishable. Outermost ring = cattle (can walk to market!).',
                icon: '🎯'
            },
            {
                type: 'comparison',
                title: 'Rent vs Distance',
                content: 'Like property prices! Land near city center = EXPENSIVE (high rent). Suburbs = cheaper. Remote = very cheap. Farmers grow what gives best profit at that rent level.',
                icon: '🏠'
            }
        ],

        conceptBlocks: [
            {
                title: 'Model Background',
                icon: '📋',
                points: [
                    '👤 DEVELOPED BY: Johann Heinrich von Thünen',
                    '📅 PUBLISHED: 1826 - "The Isolated State"',
                    '🇩🇪 German landowner and economist',
                    '🌾 Based on his own farm observations',
                    '',
                    '🎯 CENTRAL QUESTION:',
                    '  • What determines WHAT crops are grown WHERE?',
                    '  • Why do land use patterns form around cities?',
                    '',
                    '💡 KEY INSIGHT:',
                    '  • TRANSPORTATION COST determines land use',
                    '  • Different crops have different transport costs',
                    '  • Farmers maximize profit (Locational Rent)',
                    '',
                    '🏆 SIGNIFICANCE:',
                    '  • FIRST spatial economic model',
                    '  • Foundation for location theory',
                    '  • Still taught and applied today'
                ]
            },
            {
                title: 'Model Assumptions',
                icon: '📐',
                points: [
                    '🏝️ THE ISOLATED STATE:',
                    '  • Single city (market) in center',
                    '  • No outside trade or influence',
                    '  • City is only market for farm produce',
                    '',
                    '🌍 UNIFORM PLAIN (Isotropic Surface):',
                    '  • Flat land everywhere',
                    '  • Same soil fertility throughout',
                    '  • Same climate throughout',
                    '  • No rivers, mountains, roads (initially)',
                    '',
                    '🚛 TRANSPORTATION:',
                    '  • Only one mode (horse and cart in 1826)',
                    '  • Transport cost proportional to distance',
                    '  • Cost same in all directions',
                    '',
                    '👨‍🌾 RATIONAL FARMERS:',
                    '  • All farmers maximize profit',
                    '  • All have equal knowledge',
                    '  • All have access to same technology',
                    '',
                    '⚠️ These assumptions CREATE the concentric rings',
                    '  • If assumptions change → rings distort!'
                ]
            },
            {
                title: 'The Economic Logic',
                icon: '💰',
                points: [
                    '📊 LOCATIONAL RENT (Economic Rent):',
                    '  • Profit after paying production & transport costs',
                    '  • RENT = Market Price - Production Cost - Transport Cost',
                    '',
                    '📍 NEAR THE MARKET:',
                    '  • Transport cost = LOW',
                    '  • Can afford HIGH land rent',
                    '  • Grow HIGH-VALUE, PERISHABLE goods',
                    '  • Intensive farming (high investment/acre)',
                    '',
                    '📍 FAR FROM MARKET:',
                    '  • Transport cost = HIGH',
                    '  • Can only afford LOW land rent',
                    '  • Grow LOW-VALUE, NON-PERISHABLE goods',
                    '  • Extensive farming (low investment/acre)',
                    '',
                    '💡 THE TRADE-OFF:',
                    '  • Close to market: Pay high rent, save on transport',
                    '  • Far from market: Pay low rent, high transport',
                    '  • Each crop finds its OPTIMAL zone',
                    '',
                    '🔄 COMPETITION:',
                    '  • Multiple farmers bid for land',
                    '  • Highest bidder (highest profit potential) wins',
                    '  • Creates distinct zones'
                ]
            },
            {
                title: 'The Six Zones',
                icon: '🎯',
                points: [
                    '🎯 ZONE 1: INTENSIVE FARMING (Innermost)',
                    '  • Dairy farming, market gardening',
                    '  • Vegetables, fruits, milk, eggs',
                    '  • Why here? PERISHABLE - must reach market fast',
                    '  • High labor input per acre',
                    '  • Highest land rent paid',
                    '',
                    '🌲 ZONE 2: FOREST (Timber)',
                    '  • Firewood, construction timber',
                    '  • Why here? Heavy, expensive to transport',
                    '  • In 1826, wood was main fuel!',
                    '  • Today - often merged with Zone 1',
                    '',
                    '🌾 ZONE 3: INTENSIVE CROPS',
                    '  • Wheat, barley (high-value grains)',
                    '  • Crop rotation without fallow',
                    '  • More intensive than outer zones',
                    '',
                    '🌿 ZONE 4: EXTENSIVE CROPS',
                    '  • Rye, oats (lower-value grains)',
                    '  • Less intensive, some fallow',
                    '  • Lower yields acceptable due to low rent',
                    '',
                    '🔄 ZONE 5: THREE-FIELD SYSTEM',
                    '  • Rotational grazing + crops',
                    '  • 1/3 land fallow each year',
                    '  • Very extensive',
                    '',
                    '🐄 ZONE 6: RANCHING/GRAZING (Outermost)',
                    '  • Cattle, sheep ranching',
                    '  • Why here? Animals WALK to market!',
                    '  • Very low land rent',
                    '  • Least intensive land use',
                    '',
                    '🏜️ BEYOND ZONE 6: WILDERNESS',
                    '  • Not economically viable to farm',
                    '  • Too far from market'
                ]
            },
            {
                title: 'Modifications & Real-World Application',
                icon: '🔄',
                points: [
                    '🛤️ EFFECT OF TRANSPORT ROUTES:',
                    '  • River or road = cheaper transport',
                    '  • Zones EXTEND along transport corridors',
                    '  • Creates "star" pattern instead of circles',
                    '  • Von Thünen himself showed this!',
                    '',
                    '🏙️ MULTIPLE CITIES:',
                    '  • Rings overlap between cities',
                    '  • Complex patterns emerge',
                    '  • Zones extend toward each other',
                    '',
                    '⛰️ TERRAIN VARIATION:',
                    '  • Hills, rivers change patterns',
                    '  • Poor soil = outer zone activities',
                    '  • Good soil = inner zone pushed out',
                    '',
                    '🚚 MODERN TRANSPORT:',
                    '  • Refrigeration: Perishables can travel far',
                    '  • Trucks, planes: Reduce transport cost',
                    '  • Result: Zones may be less distinct today',
                    '',
                    '🌍 REAL-WORLD EXAMPLES:',
                    '  • Delhi NCR: Vegetables from nearby villages',
                    '  • Around any Indian city: Dairy belt nearby',
                    '  • Remote areas: Grazing, forestry',
                    '  • Global scale: Argentina beef to Europe'
                ]
            },
            {
                title: 'Criticisms & Relevance',
                icon: '⚠️',
                points: [
                    '❌ CRITICISMS:',
                    '',
                    '  • UNREALISTIC ASSUMPTIONS:',
                    '    - No uniform plain exists',
                    '    - Multiple transport modes today',
                    '    - Multiple markets (global trade)',
                    '',
                    '  • IGNORES FACTORS:',
                    '    - Government policies, subsidies',
                    '    - Cultural preferences',
                    '    - Technology differences',
                    '    - Climate variations',
                    '',
                    '  • OUTDATED CONCEPTS:',
                    '    - Forest zone less relevant today',
                    '    - Refrigeration changed everything',
                    '',
                    '✅ STILL RELEVANT:',
                    '',
                    '  • BASIC PRINCIPLE HOLDS:',
                    '    - Transport cost still matters',
                    '    - Land rent gradient exists',
                    '    - Intensive near cities, extensive far',
                    '',
                    '  • URBAN PLANNING:',
                    '    - Applied to urban land use',
                    '    - CBD = highest rent (Zone 1)',
                    '    - Suburbs = lower rent (outer zones)',
                    '',
                    '  • FIRST SPATIAL MODEL:',
                    '    - Foundation for Weber, Christaller',
                    '    - Introduced location economics'
                ]
            }
        ],

        diagrams: [
            {
                title: "Von Thünen's Concentric Zones",
                type: 'diagram',
                description: 'Concentric circles around central city. Innermost (green): Zone 1 - Dairy/Market Garden. Zone 2 (brown): Forest. Zone 3 (yellow): Intensive crops (wheat). Zone 4 (light yellow): Extensive crops (rye). Zone 5 (tan): Three-field system. Zone 6 (light brown): Grazing/Ranching. Beyond: Wilderness.'
            },
            {
                title: 'Locational Rent Graph',
                type: 'graph',
                description: 'X-axis: Distance from city. Y-axis: Rent per acre. Multiple downward-sloping lines for each crop type. Dairy (steepest slope, highest near city). Vegetables. Grain. Ranching (shallowest slope). Where lines intersect = zone boundaries.'
            },
            {
                title: 'Effect of River on Zones',
                type: 'diagram',
                description: 'Same concentric pattern but with a river extending from city. Show how zones ELONGATE along the river (cheaper transport). Creates finger/star pattern instead of perfect circles.'
            },
            {
                title: 'Von Thünen to Urban Model',
                type: 'comparison-chart',
                description: 'Compare agricultural model to urban land use. CBD = Zone 1 (highest rent, intensive use). Inner city = Zone 2-3. Suburbs = Zone 4-5. Rural fringe = Zone 6. Same principle: intensity decreases with distance.'
            }
        ],

        quickFacts: [
            '📅 1826: Von Thünen published "The Isolated State"',
            '🇩🇪 Johann Heinrich von Thünen - German farmer/economist',
            '🎯 FIRST spatial economic model in geography',
            '💡 Core idea: Transport cost determines land use',
            '🔵 Zone 1 (closest): Dairy, vegetables (perishable)',
            '🌲 Zone 2: Forest (heavy timber - expensive to transport)',
            '🌾 Zone 3-4: Grains (intensive → extensive)',
            '🐄 Zone 6 (farthest): Ranching (animals walk to market!)',
            '📊 Locational Rent = Price - Production Cost - Transport Cost',
            '🛤️ River/road extends zones along transport route',
            '🏙️ Same principle applies to urban land use (CBD = Zone 1)',
            '⚠️ Modern criticism: Refrigeration, planes changed everything',
            '✅ Still valid: Intensity decreases with distance from market'
        ],

        upscTraps: [
            {
                trap: 'Forest zone seems random in agricultural model',
                clarity: 'NOT random! In 1826, timber was ESSENTIAL for fuel and building. It\'s HEAVY (expensive to transport) and NON-PERISHABLE (unlike dairy). So Zone 2 makes sense historically. Today, less relevant.'
            },
            {
                trap: 'Ranching is in outer zone because land is poor',
                clarity: 'NOT because of soil quality! Assumptions say uniform soil. Ranching is outer because: (1) Animals can WALK to market (no transport cost). (2) Requires large areas (low intensity). (3) Product is non-perishable.'
            },
            {
                trap: 'Model applies only to agriculture',
                clarity: 'Also applied to URBAN LAND USE! CBD = highest rent (Zone 1). Suburbs = lower rent (outer zones). Same principle: intensity and rent decrease with distance from center.'
            },
            {
                trap: 'Von Thünen assumed perfect circles only',
                clarity: 'He HIMSELF showed that rivers/roads distort circles into STAR patterns! Zones extend along transport routes. Perfect circles only without any transport advantage.'
            }
        ],

        revisionBox: {
            title: '⚡ 30-Second Revision',
            points: [
                '1826: Von Thünen\'s "Isolated State" - FIRST spatial model',
                'Core: Transport cost determines land use around a city',
                'Formula: Locational Rent = Price - Production Cost - Transport Cost',
                'Zones (inner→outer): Dairy → Forest → Intensive crops → Extensive crops → Ranching',
                'Inner zones: Perishable, high-value, intensive farming',
                'Outer zones: Non-perishable, low-value, extensive farming',
                'Rivers/roads: Zones extend along them (star pattern)',
                'Today: Same principle in urban areas (CBD = Zone 1)'
            ]
        },

        pyqs: [
            {
                year: 2021,
                question: "Explain Von Thünen's model of agricultural location. How relevant is it in the modern context?",
                type: 'Mains'
            },
            {
                year: 2019,
                question: "What are the assumptions of Von Thünen's model? How do they limit its application?",
                type: 'Mains'
            },
            {
                year: 2018,
                question: "According to Von Thünen, which type of farming is practiced nearest to the market?",
                type: 'Prelims',
                options: ['Ranching', 'Grain farming', 'Dairy farming', 'Forestry']
            },
            {
                year: 2020,
                question: "How does transportation infrastructure modify Von Thünen's agricultural zones?",
                type: 'Mains'
            },
            {
                year: 2017,
                question: "Compare Von Thünen's agricultural model with the concentric zone model of urban land use.",
                type: 'Mains'
            }
        ]
    },

    // ============================================
    // TOPIC 4: WEBER'S INDUSTRIAL LOCATION MODEL
    // ============================================
    {
        id: 'weber-industrial-model',
        name: "Weber's Industrial Location Theory",
        icon: '🏭',
        category: 'models',
        theme: 'industry',
        difficulty: 'high',
        upscRelevance: 'high',

        mindMap: {
            central: "Weber's Industrial Location",
            branches: [
                {
                    name: 'Location Factors',
                    color: '#3498DB',
                    children: [
                        'Transport Costs (primary)',
                        'Labor Costs (secondary)',
                        'Agglomeration (tertiary)',
                        'Deglomeration (opposite)'
                    ]
                },
                {
                    name: 'Material Index',
                    color: '#E74C3C',
                    children: [
                        'Weight of raw materials',
                        'Weight of finished product',
                        'MI > 1: Near raw material',
                        'MI < 1: Near market'
                    ]
                },
                {
                    name: 'Weight Loss Industries',
                    color: '#E67E22',
                    children: [
                        'Iron & Steel',
                        'Sugar mills',
                        'Aluminum smelting',
                        'Located near raw materials'
                    ]
                },
                {
                    name: 'Weight Gain Industries',
                    color: '#2ECC71',
                    children: [
                        'Bakeries',
                        'Soft drinks (add water)',
                        'Assembly plants',
                        'Located near market'
                    ]
                },
                {
                    name: 'Isodapanes',
                    color: '#9B59B6',
                    children: [
                        'Lines of equal transport cost',
                        'Critical isodapane',
                        'Shows optimal location',
                        'Modified by labor savings'
                    ]
                }
            ]
        },

        memoryHooks: [
            {
                type: 'mnemonic',
                title: 'Weber\'s Three Factors - TLA',
                content: 'Transport, Labor, Agglomeration = "Three Location Answers." Primary (Transport) → Secondary (Labor) → Tertiary (Agglomeration).',
                icon: '🧠'
            },
            {
                type: 'story',
                title: 'The Steel Plant Story',
                content: 'To make 1 ton steel, you need 4 tons iron ore + 2 tons coal = 6 tons INPUT → 1 ton OUTPUT. Weight LOST! So locate near ore/coal (Jamshedpur near Jharkhand mines), NOT near Mumbai market.',
                icon: '🏗️'
            },
            {
                type: 'visual',
                title: 'Material Index Rule',
                content: 'MI = Weight of Inputs / Weight of Output. If MI > 1, go to RAW MATERIAL (weight loss). If MI < 1, go to MARKET (weight gain or ubiquitous materials).',
                icon: '⚖️'
            },
            {
                type: 'comparison',
                title: 'Coke vs Pepsi Factory',
                content: 'Coke adds WATER (local, cheap). So factories near MARKET (Gurgaon for Delhi). Steel loses weight → factory near RAW MATERIAL (Bhilai near iron ore).',
                icon: '🥤'
            }
        ],

        conceptBlocks: [
            {
                title: 'Model Background',
                icon: '📋',
                points: [
                    '👤 DEVELOPED BY: Alfred Weber',
                    '📅 PUBLISHED: 1909 - "Theory of Industrial Location"',
                    '🇩🇪 German economist',
                    '',
                    '🎯 CENTRAL QUESTION:',
                    '  • Where should a factory be located?',
                    '  • What factors determine industrial location?',
                    '',
                    '💡 KEY INSIGHT:',
                    '  • Industries locate to MINIMIZE COSTS',
                    '  • Transport cost is primary factor',
                    '  • Rational decision-making',
                    '',
                    '📊 APPROACH:',
                    '  • Least Cost Location Theory',
                    '  • Mathematical model',
                    '  • Uses geometry (location triangles)'
                ]
            },
            {
                title: 'Assumptions of Model',
                icon: '📐',
                points: [
                    '🌍 UNIFORM SPACE (Isotropic Surface):',
                    '  • Flat terrain',
                    '  • Uniform transport costs per km',
                    '  • Same in all directions',
                    '',
                    '📍 FIXED LOCATIONS:',
                    '  • Raw materials at fixed points',
                    '  • Market at fixed point',
                    '  • Cannot be changed',
                    '',
                    '🏭 SINGLE PRODUCT:',
                    '  • Factory produces one product',
                    '  • Single production process',
                    '',
                    '👨‍💼 RATIONAL DECISION:',
                    '  • Entrepreneurs minimize costs',
                    '  • Perfect knowledge of costs',
                    '',
                    '👥 UNLIMITED LABOR:',
                    '  • Labor available everywhere',
                    '  • BUT wages vary by location',
                    '',
                    '🛒 FIXED DEMAND:',
                    '  • Market demand is fixed',
                    '  • Price doesn\'t vary with location'
                ]
            },
            {
                title: 'Factor 1: Transport Costs (Primary)',
                icon: '🚛',
                points: [
                    '📊 MOST IMPORTANT FACTOR according to Weber',
                    '',
                    '💡 KEY CONCEPT: MATERIAL INDEX (MI)',
                    '',
                    '⚖️ FORMULA:',
                    '  MI = Weight of Localized Raw Materials',
                    '       ─────────────────────────────────',
                    '       Weight of Finished Product',
                    '',
                    '📍 IF MI > 1 (Weight-Losing Industry):',
                    '  • Raw materials heavier than product',
                    '  • Locate NEAR RAW MATERIALS',
                    '  • Examples:',
                    '    - Iron & Steel (ore + coal → steel)',
                    '    - Sugar mills (cane → sugar)',
                    '    - Cement (limestone → cement)',
                    '    - Copper smelting',
                    '',
                    '📍 IF MI < 1 (Weight-Gaining Industry):',
                    '  • Product heavier than raw materials',
                    '  • Locate NEAR MARKET',
                    '  • Examples:',
                    '    - Soft drinks (add water)',
                    '    - Bakeries (add water, expand)',
                    '    - Beer brewing',
                    '',
                    '📍 IF MI = 1 (Footloose Industry):',
                    '  • No weight change',
                    '  • Can locate anywhere',
                    '  • Other factors decide',
                    '',
                    '🌊 UBIQUITOUS MATERIALS:',
                    '  • Available everywhere (water, air)',
                    '  • NOT counted in Material Index',
                    '  • Don\'t affect location decision'
                ]
            },
            {
                title: 'Factor 2: Labor Costs (Secondary)',
                icon: '👷',
                points: [
                    '📊 SECONDARY FACTOR - Can modify optimal location',
                    '',
                    '💡 KEY CONCEPT: LABOR COEFFICIENT',
                    '',
                    '⚖️ FORMULA:',
                    '  Labor Coefficient = Labor Cost per Unit',
                    '                      ────────────────────',
                    '                      Locational Weight',
                    '',
                    '📍 HIGH LABOR COEFFICIENT:',
                    '  • Labor forms major cost',
                    '  • Will deviate from transport-optimal location',
                    '  • Move toward cheap labor area',
                    '  • Examples: Textiles, Electronics assembly',
                    '',
                    '📍 LOW LABOR COEFFICIENT:',
                    '  • Labor cost is minor',
                    '  • Stick to transport-optimal location',
                    '  • Examples: Heavy industries (steel)',
                    '',
                    '🔄 ISODAPANES:',
                    '  • Lines joining equal TOTAL transport cost',
                    '  • Like contour lines for cost',
                    '',
                    '⚠️ CRITICAL ISODAPANE:',
                    '  • If cheap labor is WITHIN critical isodapane...',
                    '  • Labor savings > Transport cost increase',
                    '  • Industry WILL MOVE to cheap labor location',
                    '',
                    '🌍 REAL EXAMPLE:',
                    '  • Tech companies in Bangalore (skilled labor)',
                    '  • Textile mills in Gujarat (cheap labor)',
                    '  • Moved from transport-optimal to labor-optimal'
                ]
            },
            {
                title: 'Factor 3: Agglomeration (Tertiary)',
                icon: '🏙️',
                points: [
                    '📊 TERTIARY FACTOR - Further modifies location',
                    '',
                    '🤝 AGGLOMERATION (Clustering):',
                    '  • Industries benefit from locating TOGETHER',
                    '',
                    '✅ ADVANTAGES (Agglomeration Economies):',
                    '  • Shared infrastructure (power, water, transport)',
                    '  • Labor pool available',
                    '  • Ancillary industries develop',
                    '  • Knowledge spillovers',
                    '  • Reduced transaction costs',
                    '  • Common services (banking, legal)',
                    '',
                    '📍 EXAMPLES:',
                    '  • Automobile cluster - Pune, Chennai',
                    '  • IT cluster - Bangalore, Hyderabad',
                    '  • Textile cluster - Tirupur, Surat',
                    '  • Diamond - Surat',
                    '',
                    '⚠️ DEGLOMERATION (Opposite):',
                    '  • TOO MUCH clustering causes problems',
                    '',
                    '❌ DISADVANTAGES (Diseconomies):',
                    '  • High land rent (competition)',
                    '  • Labor costs rise',
                    '  • Congestion, pollution',
                    '  • Competition for resources',
                    '',
                    '🔄 RESULT:',
                    '  • Industries may SPREAD OUT',
                    '  • Move to nearby areas',
                    '  • Industrial decentralization',
                    '  • New industrial estates in outskirts'
                ]
            },
            {
                title: 'Locational Triangle',
                icon: '📐',
                points: [
                    '📊 WEBER\'S GEOMETRIC SOLUTION:',
                    '',
                    '🔺 THE TRIANGLE:',
                    '  • Three vertices:',
                    '    - Raw Material 1 (M1)',
                    '    - Raw Material 2 (M2)',
                    '    - Market (C)',
                    '',
                    '📍 OPTIMAL LOCATION (P):',
                    '  • Point inside triangle',
                    '  • Where total transport cost is MINIMUM',
                    '  • Called "point of minimum aggregate travel"',
                    '',
                    '⚖️ MECHANICS:',
                    '  • Weber used physical model with weights and strings!',
                    '  • Weight = transport weight of material',
                    '  • Strings pulled to equilibrium point',
                    '  • That point = optimal location',
                    '',
                    '📊 MATHEMATICAL:',
                    '  • Can be solved with trigonometry',
                    '  • Or using isodapanes',
                    '',
                    '🔄 IF WEIGHTS CHANGE:',
                    '  • P moves toward heavier weight',
                    '  • If raw material very heavy → P near M1/M2',
                    '  • If product heavy → P near Market C'
                ]
            },
            {
                title: 'Criticisms & Modern Relevance',
                icon: '⚠️',
                points: [
                    '❌ CRITICISMS:',
                    '',
                    '  • UNREALISTIC ASSUMPTIONS:',
                    '    - Uniform plain doesn\'t exist',
                    '    - Transport costs not uniform',
                    '    - Multiple products in reality',
                    '',
                    '  • IGNORES IMPORTANT FACTORS:',
                    '    - Government policies, incentives',
                    '    - Capital availability',
                    '    - Entrepreneurship',
                    '    - Market access (demand)',
                    '    - Technology',
                    '',
                    '  • STATIC MODEL:',
                    '    - Doesn\'t account for changes over time',
                    '    - Industries may relocate',
                    '',
                    '  • LEAST COST vs MAXIMUM PROFIT:',
                    '    - Weber focuses on minimizing cost',
                    '    - Ignores revenue maximization',
                    '    - Lösch later added demand considerations',
                    '',
                    '✅ STILL RELEVANT:',
                    '',
                    '  • Basic principles hold true',
                    '  • Transport cost still matters for heavy industry',
                    '  • Agglomeration clearly visible (industrial clusters)',
                    '  • Labor cost migration (China → Vietnam → Bangladesh)',
                    '',
                    '🇮🇳 INDIA EXAMPLES:',
                    '  • Jamshedpur (steel) - near iron ore',
                    '  • Refineries - near ports (import oil)',
                    '  • Sugar mills - near cane fields',
                    '  • IT - Bangalore (labor + agglomeration)'
                ]
            }
        ],

        diagrams: [
            {
                title: "Weber's Locational Triangle",
                type: 'diagram',
                description: 'Triangle with vertices: M1 (Raw Material 1), M2 (Raw Material 2), C (Market/Consumption). Point P inside = optimal factory location. Show arrows from P to all three vertices with weights. If M1 heavier, P shifts toward M1.'
            },
            {
                title: 'Isodapanes and Critical Isodapane',
                type: 'diagram',
                description: 'Concentric irregular curves around optimal point P. Each curve = isodapane (line of equal transport cost). Show a separate cheap labor point L. Critical isodapane passes through L. If labor savings > transport cost at L, factory moves to L.'
            },
            {
                title: 'Material Index Decision Tree',
                type: 'flowchart',
                description: 'Start: Calculate MI = Input Weight / Output Weight. If MI > 1 → Weight-losing → Locate near RAW MATERIAL. If MI < 1 → Weight-gaining → Locate near MARKET. If MI = 1 → Footloose → Other factors decide.'
            },
            {
                title: 'India Industrial Location Examples',
                type: 'map',
                description: 'India map showing: Steel plants (Jamshedpur, Bhilai, Rourkela) near iron ore belt. Sugar mills in UP/Maharashtra near cane. Refineries at Jamnagar, Mangalore (ports). IT clusters (Bangalore, Hyderabad) for labor+agglomeration.'
            }
        ],

        quickFacts: [
            '📅 1909: Alfred Weber published "Theory of Industrial Location"',
            '🇩🇪 Weber was German economist, focused on COST MINIMIZATION',
            '🚛 Primary factor: TRANSPORT COST',
            '👷 Secondary factor: LABOR COST',
            '🏙️ Tertiary factor: AGGLOMERATION',
            '⚖️ Material Index (MI) = Input Weight / Output Weight',
            '📍 MI > 1: Weight-losing → Locate near RAW MATERIALS',
            '📍 MI < 1: Weight-gaining → Locate near MARKET',
            '📐 Locational Triangle: M1, M2, C vertices; P = optimal point',
            '🔄 Isodapanes: Lines of equal transport cost',
            '⚠️ Critical Isodapane: Boundary for labor-induced deviation',
            '🤝 Agglomeration: Clustering benefits (shared infrastructure)',
            '❌ Deglomeration: Too much clustering → congestion, high costs',
            '🇮🇳 Example: Jamshedpur steel = near iron ore (MI > 1)'
        ],

        upscTraps: [
            {
                trap: 'Weber focused on profit maximization',
                clarity: 'WRONG! Weber focused on COST MINIMIZATION (Least Cost Theory). He assumed demand/price fixed, so minimizing cost = maximizing profit. Lösch later developed Maximum Profit approach.'
            },
            {
                trap: 'Material Index considers all raw materials',
                clarity: 'NO! MI only counts LOCALIZED materials (not available everywhere). UBIQUITOUS materials (water, air) are NOT counted because they don\'t affect location choice.'
            },
            {
                trap: 'Transport cost is the only factor in Weber\'s model',
                clarity: 'PRIMARY but not only! Labor cost (secondary) and Agglomeration (tertiary) can modify the transport-optimal location. Industry may move to cheap labor if savings exceed extra transport cost.'
            },
            {
                trap: 'Agglomeration always benefits industries',
                clarity: 'NOT ALWAYS! Excessive agglomeration causes DISECONOMIES: high rent, congestion, pollution, labor cost inflation. This leads to DEGLOMERATION (spreading out).'
            }
        ],

        revisionBox: {
            title: '⚡ 30-Second Revision',
            points: [
                '1909: Weber\'s Theory - LEAST COST location',
                'Primary: Transport Cost → Material Index determines location',
                'MI = Input Weight / Output Weight',
                'MI > 1 → Weight-loss → Near RAW MATERIALS (steel)',
                'MI < 1 → Weight-gain → Near MARKET (soft drinks)',
                'Secondary: Labor - can modify if savings > transport cost increase',
                'Tertiary: Agglomeration (clustering benefits) vs Deglomeration',
                'Locational Triangle: M1, M2, C vertices; P = minimum cost point',
                'Isodapanes = lines of equal transport cost'
            ]
        },

        pyqs: [
            {
                year: 2022,
                question: "Explain Weber's theory of industrial location. How relevant is it in today's globalized world?",
                type: 'Mains'
            },
            {
                year: 2020,
                question: 'What is Material Index? How does it determine industrial location according to Weber?',
                type: 'Mains'
            },
            {
                year: 2019,
                question: 'According to Weber, industries with Material Index > 1 are located near:',
                type: 'Prelims',
                options: ['Market', 'Raw materials', 'Labor source', 'Ports']
            },
            {
                year: 2021,
                question: 'Discuss the concept of agglomeration and deglomeration in industrial location with examples.',
                type: 'Mains'
            },
            {
                year: 2018,
                question: 'How do isodapanes help in determining the optimal industrial location?',
                type: 'Mains'
            },
            {
                year: 2017,
                question: 'Critically evaluate Weber\'s assumptions. Are they valid in the Indian context?',
                type: 'Mains'
            }
        ]
    },

    // ============================================
    // TOPIC 5: CHRISTALLER'S CENTRAL PLACE THEORY
    // ============================================
    {
        id: 'christaller-central-place',
        name: "Christaller's Central Place Theory",
        icon: '🏘️',
        category: 'models',
        theme: 'population',
        difficulty: 'high',
        upscRelevance: 'high',

        mindMap: {
            central: 'Central Place Theory',
            branches: [
                {
                    name: 'Core Concepts',
                    color: '#3498DB',
                    children: [
                        'Central Place = Settlement with services',
                        'Hinterland = Area served',
                        'Threshold = Minimum demand',
                        'Range = Maximum travel distance'
                    ]
                },
                {
                    name: 'Settlement Hierarchy',
                    color: '#E74C3C',
                    children: [
                        'Hamlet (lowest)',
                        'Village',
                        'Town',
                        'City',
                        'Metropolis (highest)'
                    ]
                },
                {
                    name: 'K-Values (Principles)',
                    color: '#2ECC71',
                    children: [
                        'K=3: Marketing Principle',
                        'K=4: Transport Principle',
                        'K=7: Administrative Principle'
                    ]
                },
                {
                    name: 'Hexagonal Pattern',
                    color: '#9B59B6',
                    children: [
                        'Most efficient shape',
                        'No overlap, no gaps',
                        'Large center → small centers',
                        'Nested hierarchy'
                    ]
                },
                {
                    name: 'Assumptions & Criticisms',
                    color: '#E67E22',
                    children: [
                        'Uniform plain',
                        'Even distribution',
                        'Rational consumers',
                        'Real world: irregular!'
                    ]
                }
            ]
        },

        memoryHooks: [
            {
                type: 'story',
                title: 'The Honeycomb Story',
                content: 'Imagine bees building honeycombs - hexagons! Why? No wasted space. Similarly, market areas form hexagons - no overlap (double service) and no gaps (underserved areas). Nature and economics converge!',
                icon: '🐝'
            },
            {
                type: 'mnemonic',
                title: 'K-Values - MTA',
                content: 'K=3 (Marketing), K=4 (Transport), K=7 (Administration) = "M.T.A." Or remember: 3-4-7 = "Marketing Takes All" (or Administration!)',
                icon: '🔢'
            },
            {
                type: 'visual',
                title: 'Threshold vs Range',
                content: 'THRESHOLD = minimum customers needed (like minimum order for free delivery). RANGE = maximum distance customers will travel (delivery radius). If Range > Threshold area, business survives!',
                icon: '📐'
            },
            {
                type: 'comparison',
                title: 'Corner Store vs Shopping Mall',
                content: 'Corner store: Low threshold (few customers needed), Low range (people won\'t travel far for milk). Shopping mall: High threshold (need many customers), High range (people travel from far). Higher-order = larger threshold + range.',
                icon: '🏬'
            }
        ],

        conceptBlocks: [
            {
                title: 'Model Background',
                icon: '📋',
                points: [
                    '👤 DEVELOPED BY: Walter Christaller',
                    '📅 PUBLISHED: 1933 - "Central Places in Southern Germany"',
                    '🇩🇪 German geographer',
                    '',
                    '🎯 CENTRAL QUESTION:',
                    '  • Why do settlements of different sizes exist?',
                    '  • What determines the number, size, and spacing of towns?',
                    '  • How are services distributed across space?',
                    '',
                    '💡 KEY INSIGHT:',
                    '  • Settlements exist to provide SERVICES',
                    '  • Different services need different MARKET AREAS',
                    '  • This creates a HIERARCHY of settlements',
                    '',
                    '📍 TERMINOLOGY:',
                    '  • Central Place = A settlement providing goods/services',
                    '  • Higher-order = More/specialized services (city)',
                    '  • Lower-order = Basic services (village)'
                ]
            },
            {
                title: 'Key Concepts',
                icon: '🔑',
                points: [
                    '🏙️ CENTRAL PLACE:',
                    '  • Settlement that provides goods and services',
                    '  • Serves surrounding area (hinterland)',
                    '  • Can be village, town, city, or metropolis',
                    '',
                    '🌾 HINTERLAND (Complementary Region):',
                    '  • Area served by a central place',
                    '  • Customers come FROM this area',
                    '  • Also called "market area" or "sphere of influence"',
                    '',
                    '👥 THRESHOLD:',
                    '  • MINIMUM population/demand needed for a service',
                    '  • Below threshold = service not viable',
                    '  • Examples:',
                    '    - Grocery store: Low threshold (~100 people)',
                    '    - Hospital: High threshold (~50,000 people)',
                    '    - University: Very high threshold (~500,000)',
                    '',
                    '📏 RANGE:',
                    '  • MAXIMUM distance customers will travel',
                    '  • Beyond range = people won\'t come',
                    '  • Examples:',
                    '    - Grocery: Short range (~1 km)',
                    '    - Hospital: Long range (~50 km)',
                    '    - University: Very long range (~200 km)',
                    '',
                    '⚖️ RELATIONSHIP:',
                    '  • For service to exist: Range ≥ Threshold area',
                    '  • If Range < Threshold → Service not viable'
                ]
            },
            {
                title: 'Settlement Hierarchy',
                icon: '📊',
                points: [
                    '📈 HIERARCHICAL STRUCTURE:',
                    '',
                    '🏠 HAMLET (Lowest Order):',
                    '  • Smallest settlement',
                    '  • Very basic services only',
                    '  • Small market area',
                    '  • Example: Small cluster of houses',
                    '',
                    '🏘️ VILLAGE:',
                    '  • General store, primary school',
                    '  • Serves hamlets around it',
                    '  • Larger market area',
                    '',
                    '🏢 TOWN:',
                    '  • More services (bank, hospital, high school)',
                    '  • Serves villages around it',
                    '  • Even larger market area',
                    '',
                    '🌆 CITY:',
                    '  • Specialized services (university, specialty hospital)',
                    '  • Serves towns around it',
                    '  • Large market area',
                    '',
                    '🏙️ METROPOLIS/REGIONAL CENTER (Highest Order):',
                    '  • All services including rare ones',
                    '  • International airport, stock exchange',
                    '  • Serves entire region/multiple cities',
                    '  • Largest market area',
                    '',
                    '🔺 KEY PRINCIPLE:',
                    '  • Higher-order places have ALL services of lower-order PLUS additional',
                    '  • Higher-order places are FEWER and FARTHER APART',
                    '  • Lower-order places are MANY and CLOSER TOGETHER'
                ]
            },
            {
                title: 'Why Hexagons?',
                icon: '⬡',
                points: [
                    '🔵 WHY NOT CIRCLES?',
                    '  • Circular market areas would either:',
                    '    - OVERLAP (customers served twice, wasteful)',
                    '    - Leave GAPS (customers unserved)',
                    '',
                    '⬡ HEXAGON SOLUTION:',
                    '  • Hexagons TESSELLATE (fit together perfectly)',
                    '  • No overlap, no gaps',
                    '  • Every point is served by exactly ONE center',
                    '',
                    '🔺 WHY NOT SQUARES OR TRIANGLES?',
                    '  • They also tessellate, BUT...',
                    '  • Hexagon is closest to circle',
                    '  • Minimizes travel distance from edges to center',
                    '  • Most efficient shape geometrically',
                    '',
                    '🐝 NATURE\'S CHOICE:',
                    '  • Honeycomb = hexagons',
                    '  • Basalt columns = hexagonal',
                    '  • Efficiency principle in nature too!',
                    '',
                    '📐 MATHEMATICAL BEAUTY:',
                    '  • Hexagon = 6 equilateral triangles',
                    '  • Each higher-order hexagon contains K lower-order hexagons',
                    '  • Creates nested hierarchy'
                ]
            },
            {
                title: 'K-Values (Principles)',
                icon: '🔢',
                points: [
                    '📊 K = NUMBER of places served by next higher order',
                    '',
                    '🛒 K=3: MARKETING PRINCIPLE:',
                    '  • Each higher-order serves 3 lower-order regions',
                    '  • 1 (itself) + 1/3 × 6 neighbors = 3',
                    '  • Why 1/3? Each neighbor shared by 3 higher centers',
                    '  • MAXIMIZES number of central places',
                    '  • Pattern: 1, 3, 9, 27, 81... (×3)',
                    '  • Best for: Efficient market coverage',
                    '',
                    '🛤️ K=4: TRANSPORT PRINCIPLE:',
                    '  • Each higher-order serves 4 lower-order regions',
                    '  • Lower-order places ON transport routes between higher',
                    '  • MAXIMIZES transport efficiency',
                    '  • Pattern: 1, 4, 16, 64... (×4)',
                    '  • Best for: Areas with good transport networks',
                    '',
                    '🏛️ K=7: ADMINISTRATIVE PRINCIPLE:',
                    '  • Each higher-order serves 7 lower-order regions',
                    '  • 1 (itself) + 6 complete neighbors',
                    '  • Lower-order places ENTIRELY WITHIN higher boundary',
                    '  • CLEAR administrative control',
                    '  • Pattern: 1, 7, 49, 343... (×7)',
                    '  • Best for: Clear administrative boundaries',
                    '',
                    '📍 NOTE: K=3 gives MOST settlements, K=7 gives FEWEST'
                ]
            },
            {
                title: 'Assumptions & Criticisms',
                icon: '⚠️',
                points: [
                    '📐 ASSUMPTIONS:',
                    '',
                    '  • UNIFORM PLAIN (Isotropic Surface):',
                    '    - Flat terrain',
                    '    - Same soil, climate everywhere',
                    '    - No mountains, rivers',
                    '',
                    '  • UNIFORM POPULATION:',
                    '    - Evenly distributed',
                    '    - Same purchasing power',
                    '    - Same demand patterns',
                    '',
                    '  • UNIFORM TRANSPORT:',
                    '    - Same transport cost per km',
                    '    - Travel possible in all directions',
                    '',
                    '  • RATIONAL CONSUMERS:',
                    '    - Always go to NEAREST center',
                    '    - Perfect knowledge of options',
                    '',
                    '❌ CRITICISMS:',
                    '',
                    '  • UNREALISTIC:',
                    '    - No uniform plains exist',
                    '    - Population is clustered',
                    '    - Transport varies by mode/route',
                    '',
                    '  • IGNORES FACTORS:',
                    '    - Historical development',
                    '    - Government policies',
                    '    - Industrial location',
                    '    - Cultural preferences',
                    '',
                    '  • STATIC MODEL:',
                    '    - Doesn\'t account for change',
                    '    - New technologies (online shopping)',
                    '',
                    '✅ STILL USEFUL:',
                    '  • Explains general patterns',
                    '  • Foundation for spatial analysis',
                    '  • Applied in planning new settlements'
                ]
            },
            {
                title: 'Applications & India Examples',
                icon: '🇮🇳',
                points: [
                    '🌍 REAL-WORLD APPLICATIONS:',
                    '',
                    '  • RETAIL PLANNING:',
                    '    - Where to open new stores',
                    '    - Shopping center location',
                    '    - Catchment area analysis',
                    '',
                    '  • URBAN PLANNING:',
                    '    - Planning new towns',
                    '    - Service distribution',
                    '    - Chandigarh, Bhubaneswar planning',
                    '',
                    '  • HEALTH SERVICES:',
                    '    - Hospital location',
                    '    - PHC distribution',
                    '',
                    '🇮🇳 INDIA HIERARCHY:',
                    '',
                    '  • METROPOLITAN (1st Order):',
                    '    - Delhi, Mumbai, Kolkata, Chennai',
                    '    - All services, international connections',
                    '',
                    '  • STATE CAPITALS (2nd Order):',
                    '    - Lucknow, Jaipur, Bhopal',
                    '    - High-order services',
                    '',
                    '  • DISTRICT HQ (3rd Order):',
                    '    - Meerut, Aligarh, Moradabad',
                    '    - District-level services',
                    '',
                    '  • TEHSIL TOWNS (4th Order):',
                    '    - Sub-district services',
                    '',
                    '  • BLOCK HQ (5th Order):',
                    '    - Basic administrative center',
                    '',
                    '  • VILLAGES (6th Order):',
                    '    - Basic services only',
                    '',
                    '📊 NOTE: Census Town classification follows similar hierarchy'
                ]
            }
        ],

        diagrams: [
            {
                title: 'Hexagonal Market Areas',
                type: 'diagram',
                description: 'Large hexagon (city) containing smaller hexagons (towns), which contain even smaller hexagons (villages). Show nested hierarchy. Color-code by order. Central city in middle, towns at regular intervals, villages most numerous.'
            },
            {
                title: 'K=3, K=4, K=7 Comparison',
                type: 'comparison-chart',
                description: 'Three diagrams side by side. K=3: Lower-order places at vertices of hexagon (shared with neighbors). K=4: Lower-order places on midpoints of hexagon edges (along transport). K=7: Lower-order places entirely within higher hexagon (administrative).'
            },
            {
                title: 'Threshold and Range Diagram',
                type: 'diagram',
                description: 'Show two overlapping concepts: (1) Threshold = minimum circular area needed for service to be viable. (2) Range = maximum circular area from which customers come. Service viable only if Range ≥ Threshold. Show examples: grocery (small both) vs university (large both).'
            },
            {
                title: 'Settlement Hierarchy Pyramid',
                type: 'diagram',
                description: 'Pyramid diagram. Top: Few large cities (wide spacing). Middle: More towns. Bottom: Many villages (close spacing). Show inverse relationship: number of settlements vs size. Label services at each level.'
            },
            {
                title: 'India Settlement Hierarchy Map',
                type: 'map',
                description: 'India map showing settlement hierarchy: Metros (large dots), State capitals (medium), District HQ (small), Sub-district (tiny). Show how coverage decreases for higher-order services.'
            }
        ],

        quickFacts: [
            '📅 1933: Christaller published "Central Places in Southern Germany"',
            '🇩🇪 Walter Christaller - German geographer',
            '🏙️ Central Place = Settlement providing goods/services',
            '🌾 Hinterland = Area served by central place (market area)',
            '👥 Threshold = MINIMUM population needed for service viability',
            '📏 Range = MAXIMUM distance customers will travel',
            '⬡ Hexagons: Most efficient shape (no overlap, no gaps)',
            '🔢 K=3: Marketing (maximize central places)',
            '🔢 K=4: Transport (places on routes between higher-order)',
            '🔢 K=7: Administrative (clear boundaries)',
            '📊 Hierarchy: Many small villages → Few large cities',
            '🔺 Higher-order: All services of lower-order PLUS more',
            '📐 Pattern: 1, 3, 9, 27... (K=3) or 1, 4, 16... (K=4) or 1, 7, 49... (K=7)',
            '🇮🇳 India hierarchy: Metro → State capital → District HQ → Tehsil → Village'
        ],

        upscTraps: [
            {
                trap: 'Christaller used circles for market areas',
                clarity: 'NO! He used HEXAGONS because circles either overlap or leave gaps. Hexagons tessellate perfectly - no wasted space, no unserved areas.'
            },
            {
                trap: 'K=7 gives most number of central places',
                clarity: 'OPPOSITE! K=3 gives MOST central places (frequent but smaller). K=7 gives FEWEST (larger areas, more control). K=7 is for administrative clarity, not maximum coverage.'
            },
            {
                trap: 'Range is about minimum customers',
                clarity: 'NO! Range = MAXIMUM distance traveled. THRESHOLD = minimum customers needed. Range is about distance, Threshold is about demand/population.'
            },
            {
                trap: 'Higher-order places have only high-order services',
                clarity: 'WRONG! Higher-order places have ALL services - low-order AND high-order. A city has grocery stores AND universities. They CUMULATE services.'
            }
        ],

        revisionBox: {
            title: '⚡ 30-Second Revision',
            points: [
                '1933: Christaller\'s Central Place Theory - settlement patterns',
                'Central Place = settlement with services; Hinterland = area served',
                'Threshold = min demand; Range = max travel distance',
                'Hexagons (not circles) - no overlap, no gaps',
                'K=3 (Marketing): Most settlements, vertices shared',
                'K=4 (Transport): Places on routes between higher-order',
                'K=7 (Administrative): Complete control, clear boundaries',
                'Hierarchy: Villages (many, close) → Cities (few, far apart)',
                'Higher-order has ALL lower-order services PLUS more'
            ]
        },

        pyqs: [
            {
                year: 2022,
                question: "Explain Christaller's Central Place Theory. How does it explain the distribution of urban settlements?",
                type: 'Mains'
            },
            {
                year: 2020,
                question: 'What are threshold and range in Central Place Theory? How do they determine service locations?',
                type: 'Mains'
            },
            {
                year: 2019,
                question: 'Why did Christaller use hexagonal market areas instead of circular ones?',
                type: 'Mains'
            },
            {
                year: 2021,
                question: 'Explain the three principles (K-values) in Central Place Theory with diagrams.',
                type: 'Mains'
            },
            {
                year: 2018,
                question: 'In Christaller\'s model, K=7 is based on:',
                type: 'Prelims',
                options: ['Marketing principle', 'Transport principle', 'Administrative principle', 'Industrial principle']
            },
            {
                year: 2017,
                question: 'Critically evaluate the applicability of Central Place Theory in India.',
                type: 'Mains'
            }
        ]
    },

    // ============================================
    // TOPIC 6: ROSTOW'S STAGES OF ECONOMIC GROWTH
    // ============================================
    {
        id: 'rostow-stages-growth',
        name: "Rostow's Stages of Economic Growth",
        icon: '📈',
        category: 'models',
        theme: 'industry',
        difficulty: 'medium',
        upscRelevance: 'high',

        mindMap: {
            central: "Rostow's Model",
            branches: [
                {
                    name: 'Stage 1: Traditional Society',
                    color: '#8B4513',
                    children: [
                        'Subsistence agriculture',
                        'Limited technology',
                        'Hierarchical society',
                        'Pre-Newtonian science'
                    ]
                },
                {
                    name: 'Stage 2: Preconditions',
                    color: '#E67E22',
                    children: [
                        'Agricultural surplus',
                        'External trade begins',
                        'Infrastructure building',
                        'Elite accepts change'
                    ]
                },
                {
                    name: 'Stage 3: Take-Off',
                    color: '#F1C40F',
                    children: [
                        'Investment 5-10% of GDP',
                        'Leading sectors emerge',
                        'Industrialization accelerates',
                        'Political/social transformation'
                    ]
                },
                {
                    name: 'Stage 4: Drive to Maturity',
                    color: '#2ECC71',
                    children: [
                        'Investment 10-20% of GDP',
                        'Diversified industry',
                        'Technology applied widely',
                        '40 years after take-off'
                    ]
                },
                {
                    name: 'Stage 5: High Mass Consumption',
                    color: '#3498DB',
                    children: [
                        'Consumer goods dominate',
                        'Service sector grows',
                        'Welfare state develops',
                        'Example: USA, Western Europe'
                    ]
                }
            ]
        },

        memoryHooks: [
            {
                type: 'mnemonic',
                title: 'Rostow\'s Stages - TPTDH',
                content: 'Traditional → Preconditions → Take-off → Drive to maturity → High consumption = "Train Passengers Take Daily Highway!"',
                icon: '🚂'
            },
            {
                type: 'story',
                title: 'The Country Story',
                content: 'A country starts as a village (traditional). Merchants come (preconditions). A factory opens (take-off)! More factories follow (drive to maturity). Now everyone buys cars and TVs (high consumption).',
                icon: '🌍'
            },
            {
                type: 'visual',
                title: 'Airplane Metaphor',
                content: 'TAKE-OFF is key stage - like airplane taking off. Needs minimum speed (5-10% investment). Once airborne, keeps climbing (drive to maturity). Cruising = high consumption.',
                icon: '✈️'
            },
            {
                type: 'comparison',
                title: 'UK vs India Timeline',
                content: 'UK Take-off: 1780s (Industrial Rev). India Take-off: 1947-1990s. Different timings but same stages. Each country passes through all stages.',
                icon: '⏱️'
            }
        ],

        conceptBlocks: [
            {
                title: 'Model Background',
                icon: '📋',
                points: [
                    '👤 DEVELOPED BY: Walt Whitman Rostow',
                    '📅 PUBLISHED: 1960 - "The Stages of Economic Growth"',
                    '🇺🇸 American economist and political theorist',
                    '❄️ Cold War context - anti-Communist manifesto!',
                    '',
                    '📖 SUBTITLE: "A Non-Communist Manifesto"',
                    '  • Response to Marxist theory',
                    '  • Argued capitalism leads to prosperity',
                    '  • All countries can develop through same path',
                    '',
                    '🎯 CENTRAL IDEA:',
                    '  • Economic development follows LINEAR stages',
                    '  • ALL countries pass through SAME stages',
                    '  • Developed countries show the path',
                    '  • Developing countries just need to follow',
                    '',
                    '📊 MEASUREMENT:',
                    '  • Based on investment rates, technology, leading sectors',
                    '  • Historical analysis of UK, USA, Germany, Japan'
                ]
            },
            {
                title: 'Stage 1: Traditional Society',
                icon: '1️⃣',
                points: [
                    '🌾 CHARACTERISTICS:',
                    '',
                    '  • ECONOMY:',
                    '    - Subsistence agriculture dominant (>75% labor)',
                    '    - Barter system common',
                    '    - Very limited trade',
                    '    - Local, self-sufficient economy',
                    '',
                    '  • TECHNOLOGY:',
                    '    - Pre-Newtonian science',
                    '    - Manual labor, animal power',
                    '    - No machines, no factories',
                    '    - Traditional techniques',
                    '',
                    '  • SOCIETY:',
                    '    - Hierarchical, rigid class system',
                    '    - Family/clan-based power',
                    '    - Fatalistic worldview',
                    '    - Change is slow, resisted',
                    '',
                    '  • INVESTMENT:',
                    '    - <5% of GDP invested',
                    '    - Most output consumed immediately',
                    '',
                    '📍 EXAMPLES:',
                    '  • Medieval Europe',
                    '  • Pre-colonial Africa',
                    '  • Ancient civilizations',
                    '  • Some remote tribal areas today'
                ]
            },
            {
                title: 'Stage 2: Preconditions for Take-Off',
                icon: '2️⃣',
                points: [
                    '🌱 CHARACTERISTICS:',
                    '',
                    '  • AGRICULTURAL CHANGE:',
                    '    - Agricultural revolution',
                    '    - Surplus production begins',
                    '    - New farming techniques',
                    '    - Labor freed for industry',
                    '',
                    '  • INFRASTRUCTURE:',
                    '    - Roads, ports, railways built',
                    '    - Banking system develops',
                    '    - Communication improves',
                    '',
                    '  • TRADE:',
                    '    - External trade begins',
                    '    - Export of raw materials',
                    '    - Import of manufactured goods',
                    '    - Specialization starts',
                    '',
                    '  • SOCIETY:',
                    '    - Elite embraces change',
                    '    - Entrepreneurial class emerges',
                    '    - Education expands',
                    '    - Nationalism often triggers change',
                    '',
                    '  • INVESTMENT:',
                    '    - Rising toward 5% of GDP',
                    '',
                    '📍 TRIGGER:',
                    '  • Often EXTERNAL: Colonialism, trade contact',
                    '  • Or INTERNAL: Political revolution, reform',
                    '',
                    '📍 EXAMPLES:',
                    '  • UK: 1700s (before Industrial Revolution)',
                    '  • India: 1850-1947 (railways, education)',
                    '  • China: 1950s-70s (infrastructure building)'
                ]
            },
            {
                title: 'Stage 3: Take-Off (Most Critical)',
                icon: '3️⃣',
                points: [
                    '✈️ THE CRITICAL STAGE:',
                    '',
                    '  • Like airplane taking off - needs minimum speed',
                    '  • Self-sustaining growth begins',
                    '  • Point of no return',
                    '',
                    '📊 KEY INDICATORS:',
                    '',
                    '  • INVESTMENT:',
                    '    - 5-10% of GDP invested productively',
                    '    - This is the THRESHOLD',
                    '',
                    '  • LEADING SECTORS:',
                    '    - 1-3 industries grow rapidly',
                    '    - Pull other sectors along',
                    '    - Create demand for inputs',
                    '    - Example: Textiles in UK, Railways in USA',
                    '',
                    '  • INSTITUTIONAL CHANGE:',
                    '    - Banks, stock markets mature',
                    '    - Legal framework for business',
                    '    - Property rights established',
                    '',
                    '  • POLITICAL TRANSFORMATION:',
                    '    - Old elites lose power',
                    '    - New industrial class rises',
                    '    - May involve revolution',
                    '',
                    '⏱️ DURATION: 20-30 years typically',
                    '',
                    '📍 HISTORICAL TAKE-OFF DATES:',
                    '  • UK: 1783-1803 (textiles)',
                    '  • France: 1830-1860 (railways)',
                    '  • USA: 1843-1860 (railways)',
                    '  • Germany: 1850-1870 (railways, steel)',
                    '  • Japan: 1878-1900 (various)',
                    '  • India: 1952-? (mixed industry)',
                    '  • China: 1980-2000 (manufacturing)'
                ]
            },
            {
                title: 'Stage 4: Drive to Maturity',
                icon: '4️⃣',
                points: [
                    '🚀 SUSTAINED GROWTH:',
                    '',
                    '  • INVESTMENT:',
                    '    - 10-20% of GDP invested',
                    '    - Consistent, sustained',
                    '',
                    '  • INDUSTRY:',
                    '    - Diversification from leading sectors',
                    '    - Multiple industries now developed',
                    '    - Technology applied across economy',
                    '    - Heavy and chemical industries grow',
                    '',
                    '  • ECONOMY:',
                    '    - Self-sustaining growth',
                    '    - Export manufactured goods',
                    '    - Import raw materials',
                    '    - International trade integration',
                    '',
                    '  • SOCIETY:',
                    '    - Urbanization accelerates',
                    '    - Skilled workforce',
                    '    - Managerial class develops',
                    '    - Social mobility increases',
                    '',
                    '⏱️ DURATION: About 40 years after take-off',
                    '',
                    '📍 EXAMPLES:',
                    '  • UK: 1850-1914',
                    '  • USA: 1900-1950',
                    '  • Japan: 1940-1990',
                    '  • China: 2000-present (transitioning)',
                    '  • India: Currently in this stage?'
                ]
            },
            {
                title: 'Stage 5: Age of High Mass Consumption',
                icon: '5️⃣',
                points: [
                    '🛒 CONSUMER SOCIETY:',
                    '',
                    '  • ECONOMY:',
                    '    - Consumer durables dominate (cars, TVs, appliances)',
                    '    - Service sector becomes largest',
                    '    - Disposable income high',
                    '    - Mature, diversified economy',
                    '',
                    '  • SOCIETY:',
                    '    - High standard of living',
                    '    - Welfare state develops',
                    '    - Social security, healthcare universal',
                    '    - Leisure time valued',
                    '',
                    '  • PRIORITIES:',
                    '    - Security and welfare over growth',
                    '    - Quality of life focus',
                    '    - Environment becomes concern',
                    '',
                    '  • POLITICS:',
                    '    - Democratic governance',
                    '    - Middle class dominates',
                    '    - Redistribution policies',
                    '',
                    '📍 EXAMPLES:',
                    '  • USA: 1950s onwards',
                    '  • Western Europe: 1960s onwards',
                    '  • Japan: 1990s onwards',
                    '  • South Korea: 2000s onwards',
                    '',
                    '🔄 BEYOND STAGE 5?:',
                    '  • Rostow later added Stage 6',
                    '  • "Beyond Consumption" - search for meaning',
                    '  • Quality of life over quantity',
                    '  • Sustainability concerns'
                ]
            },
            {
                title: 'Criticisms & Relevance',
                icon: '⚠️',
                points: [
                    '❌ MAJOR CRITICISMS:',
                    '',
                    '  • WESTERN-CENTRIC:',
                    '    - Based on UK, USA history',
                    '    - Assumes all follow same path',
                    '    - Ignores different cultural contexts',
                    '',
                    '  • IGNORES COLONIALISM:',
                    '    - West developed BY exploiting others',
                    '    - Not possible for all to repeat',
                    '    - Zero-sum game aspect ignored',
                    '',
                    '  • LINEAR ASSUMPTION:',
                    '    - Countries can regress (Venezuela)',
                    '    - Can skip stages (oil economies)',
                    '    - Development not one-way',
                    '',
                    '  • IGNORES STRUCTURAL ISSUES:',
                    '    - Dependency theory counter-argument',
                    '    - Global capitalism creates inequality',
                    '    - Core-periphery relations matter',
                    '',
                    '  • MEASUREMENT ISSUES:',
                    '    - How to precisely identify stages?',
                    '    - Investment rate too simplistic',
                    '',
                    '✅ STILL RELEVANT:',
                    '',
                    '  • General pattern often holds',
                    '  • Investment matters for growth',
                    '  • Leading sectors concept valid',
                    '  • Useful for basic understanding',
                    '',
                    '🇮🇳 INDIA CONTEXT:',
                    '  • Preconditions: 1850-1947',
                    '  • Take-off: 1950s-1990s (debated)',
                    '  • Drive to maturity: 1990s-present',
                    '  • Regional variation (Kerala vs Bihar)'
                ]
            }
        ],

        diagrams: [
            {
                title: "Rostow's Five Stages Graph",
                type: 'graph',
                description: 'X-axis: Time. Y-axis: Income/GDP per capita. Show S-curve with labeled stages: Flat (Traditional) → Slight rise (Preconditions) → Steep rise (Take-off) → Continued rise (Maturity) → High plateau (Mass consumption). Mark investment rates at each stage.'
            },
            {
                title: 'Stages Comparison Table',
                type: 'comparison-chart',
                description: 'Table with 5 columns (one per stage). Rows: Main sector, Investment %, Technology level, Leading industry, Social structure, Example country, Time period. Fill with key characteristics.'
            },
            {
                title: 'Country Timeline Comparison',
                type: 'timeline',
                description: 'Multiple horizontal timelines for UK, USA, Japan, China, India. Mark when each entered each stage. Show UK earliest (1780s take-off), China most recent. Demonstrate varied timing but same stages.'
            },
            {
                title: 'Leading Sectors by Country',
                type: 'diagram',
                description: 'Show different leading sectors that drove take-off: UK = Textiles + Steam. USA = Railways. Germany = Steel + Chemicals. Japan = Textiles + Shipping. China = Manufacturing. India = Mixed/IT?'
            }
        ],

        quickFacts: [
            '📅 1960: Rostow published "Stages of Economic Growth: A Non-Communist Manifesto"',
            '🇺🇸 Walt Rostow - American economist, Cold War advisor',
            '1️⃣ Traditional: Subsistence agriculture, <5% investment, pre-Newtonian',
            '2️⃣ Preconditions: Agriculture surplus, infrastructure, trade begins',
            '3️⃣ Take-Off: 5-10% investment, leading sectors emerge, 20-30 years',
            '4️⃣ Drive to Maturity: 10-20% investment, diversification, ~40 years after take-off',
            '5️⃣ High Consumption: Consumer durables, services, welfare state',
            '🇬🇧 UK Take-off: 1783-1803 (textiles, steam)',
            '🇺🇸 USA Take-off: 1843-1860 (railways)',
            '🇯🇵 Japan Take-off: 1878-1900 (textiles, shipping)',
            '🇨🇳 China Take-off: 1980-2000 (manufacturing)',
            '🇮🇳 India: Preconditions (1850-1947), Take-off (1950s-90s), Now Stage 4?',
            '⚠️ Criticized as Eurocentric, ignoring colonialism and dependency',
            '✅ Still useful for basic developmental understanding'
        ],

        upscTraps: [
            {
                trap: 'Rostow\'s model is about Communist development',
                clarity: 'OPPOSITE! Subtitled "A Non-Communist Manifesto" - it was explicitly ANTI-Communist. Written during Cold War to show capitalism leads to prosperity. Counter to Marxist theory.'
            },
            {
                trap: 'Take-off requires 10-20% investment',
                clarity: 'NO! Take-off requires 5-10% investment. The 10-20% is for Stage 4 (Drive to Maturity). 5-10% is the THRESHOLD for take-off.'
            },
            {
                trap: 'All countries must follow exact same path',
                clarity: 'CRITICISM of Rostow! He assumed this, but critics argue: (1) Context matters (colonialism). (2) Some skip stages (oil economies). (3) Can regress. Dependency theory offers alternative view.'
            },
            {
                trap: 'Take-off means highest growth rate ever',
                clarity: 'NOT necessarily! Take-off is when SELF-SUSTAINING growth begins - when the economy can grow without external stimulus. Growth may be higher in Stage 4 (Drive to Maturity).'
            }
        ],

        revisionBox: {
            title: '⚡ 30-Second Revision',
            points: [
                '1960: Rostow\'s "Stages of Economic Growth" - anti-Communist',
                'Stage 1 (Traditional): Agriculture, <5% investment, static',
                'Stage 2 (Preconditions): Surplus, infrastructure, trade',
                'Stage 3 (Take-Off): 5-10% investment, leading sectors, transformation',
                'Stage 4 (Maturity): 10-20% investment, diversification, ~40 years after take-off',
                'Stage 5 (High Consumption): Consumer goods, services, welfare state',
                'Leading sectors crucial: UK-textiles, USA-railways, China-manufacturing',
                'Criticism: Eurocentric, ignores colonialism, linear assumption',
                'India: Currently in Stage 4 (Drive to Maturity)'
            ]
        },

        pyqs: [
            {
                year: 2021,
                question: "Explain Rostow's stages of economic growth. At which stage is India currently?",
                type: 'Mains'
            },
            {
                year: 2019,
                question: 'What is the significance of "Take-Off" stage in Rostow\'s model? What are its preconditions?',
                type: 'Mains'
            },
            {
                year: 2020,
                question: "Critically evaluate Rostow's model from a developing country's perspective.",
                type: 'Mains'
            },
            {
                year: 2018,
                question: 'According to Rostow, the minimum investment rate required for Take-Off is:',
                type: 'Prelims',
                options: ['1-3%', '5-10%', '15-20%', '25-30%']
            },
            {
                year: 2017,
                question: 'Compare Rostow\'s model with Dependency Theory of development.',
                type: 'Mains'
            },
            {
                year: 2022,
                question: 'What were the leading sectors in India\'s economic take-off? Discuss.',
                type: 'Mains'
            }
        ]
    }

];

// ============================================
// FINAL EXPORT - COMPLETE MODELS DATA
// ============================================

// Make data available globally
window.modelsData = modelsData;

console.log('📊✅ Models & Theories Data COMPLETE:', modelsData.length, 'topics');
console.log('📚 Topics loaded:', modelsData.map(t => t.name).join(', '));
