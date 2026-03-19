/* ============================================
   UPSC GEOGRAPHY LEARNING SYSTEM
   Human Geography Data File - COMPREHENSIVE
   Topics: Population, Migration, Urbanization,
           Settlement Types, Demographics
   ============================================ */

const humanData = [

    // ============================================
    // TOPIC 1: POPULATION DISTRIBUTION & DENSITY
    // ============================================
    {
        id: 'population-distribution',
        name: 'Population Distribution & Density',
        icon: '👥',
        category: 'human',
        theme: 'population',
        difficulty: 'medium',
        upscRelevance: 'high',

        mindMap: {
            central: 'Population Distribution',
            branches: [
                {
                    name: 'Factors Affecting',
                    color: '#9B59B6',
                    children: [
                        'Physical: Climate, Terrain, Soil',
                        'Economic: Jobs, Resources',
                        'Social: History, Culture',
                        'Political: Policies, Borders'
                    ]
                },
                {
                    name: 'India Distribution',
                    color: '#3498DB',
                    children: [
                        'UP - Most populous (200M+)',
                        'Sikkim - Least populous',
                        'Dense: Indo-Gangetic Plains',
                        'Sparse: Himalaya, Deserts'
                    ]
                },
                {
                    name: 'Density Patterns',
                    color: '#E74C3C',
                    children: [
                        'High: Plains, Deltas, Coasts',
                        'Low: Mountains, Deserts',
                        'India average: 382/sq km',
                        'Bihar highest: 1,106/sq km'
                    ]
                },
                {
                    name: 'World Patterns',
                    color: '#27AE60',
                    children: [
                        '90% in Northern Hemisphere',
                        '60% in Asia alone',
                        'Ecumene vs Anecumene',
                        'Coastal concentration'
                    ]
                }
            ]
        },

        memoryHooks: [
            {
                type: 'mnemonic',
                title: 'Most Populous States',
                content: 'UMBMW = UP, Maharashtra, Bihar, MP, West Bengal (Top 5). "UP Makes Big Motors Work!"',
                icon: '🧠'
            },
            {
                type: 'number',
                title: 'Key Density Numbers',
                content: 'India = 382/sq km. Bihar = 1,106 (highest state). Delhi = 11,320 (highest UT). Arunachal = 17 (lowest state). Remember: Bihar >1000, AP ~17.',
                icon: '🔢'
            },
            {
                type: 'comparison',
                title: 'Ecumene vs Anecumene',
                content: 'ECUMENE = "I CAN live here" (habitable - plains, coasts). ANECUMENE = "I CANNOT live here" (uninhabitable - deserts, ice sheets, high mountains).',
                icon: '🏠'
            },
            {
                type: 'visual',
                title: '90-60-40 Rule',
                content: '90% population in Northern Hemisphere. 60% in Asia alone. 40% of land is anecumene (uninhabited). Easy pattern!',
                icon: '📊'
            }
        ],

        conceptBlocks: [
            {
                title: 'World Population Distribution',
                icon: '🌍',
                points: [
                    '📊 CURRENT WORLD POPULATION: 8+ billion (2023)',
                    '',
                    '🌏 REGIONAL DISTRIBUTION:',
                    '  • ASIA: 60% of world population (4.7 billion)',
                    '  • AFRICA: 17% (1.4 billion)',
                    '  • EUROPE: 9.5% (750 million)',
                    '  • AMERICAS: 13% (1 billion)',
                    '  • OCEANIA: 0.5% (40 million)',
                    '',
                    '📍 HEMISPHERIC DISTRIBUTION:',
                    '  • Northern Hemisphere: 90% of population',
                    '  • Southern Hemisphere: 10% of population',
                    '  • Reason: More landmass in North',
                    '',
                    '🏔️ ALTITUDE DISTRIBUTION:',
                    '  • 80% live below 500m altitude',
                    '  • 90% live below 1000m',
                    '  • Dense populations in river valleys, plains',
                    '',
                    '🌊 COASTAL DISTRIBUTION:',
                    '  • 60% live within 100 km of coast',
                    '  • Historical trade, fishing, mild climate',
                    '',
                    '📋 ECUMENE vs ANECUMENE:',
                    '  • ECUMENE: Permanently inhabited areas',
                    '  • ANECUMENE: Uninhabited areas (40% of land)',
                    '  • Anecumene: Deserts, ice sheets, dense forests, high mountains'
                ]
            },
            {
                title: 'India Population Overview',
                icon: '🇮🇳',
                points: [
                    '📊 INDIA POPULATION (Census 2011): 1.21 billion',
                    '📊 ESTIMATED (2023): 1.43 billion (world\'s most populous!)',
                    '📊 Surpassed China in April 2023',
                    '',
                    '📊 KEY CENSUS 2011 FACTS:',
                    '  • Total: 1,210,854,977',
                    '  • Males: 623.7 million (51.5%)',
                    '  • Females: 587.1 million (48.5%)',
                    '  • Decadal Growth: 17.64% (2001-2011)',
                    '  • Density: 382 persons/sq km',
                    '',
                    '📍 STATE-WISE POPULATION (Top 5):',
                    '  1. Uttar Pradesh: 199.8 million (16.5%)',
                    '  2. Maharashtra: 112.4 million (9.3%)',
                    '  3. Bihar: 103.8 million (8.6%)',
                    '  4. West Bengal: 91.3 million (7.5%)',
                    '  5. Madhya Pradesh: 72.6 million (6%)',
                    '',
                    '📍 LEAST POPULOUS STATES:',
                    '  1. Sikkim: 610,577',
                    '  2. Mizoram: 1.09 million',
                    '  3. Arunachal Pradesh: 1.38 million',
                    '  4. Goa: 1.46 million',
                    '',
                    '📌 UP alone > many countries combined!'
                ]
            },
            {
                title: 'Population Density in India',
                icon: '📊',
                points: [
                    '📐 DENSITY = Population / Area (persons per sq km)',
                    '',
                    '🇮🇳 INDIA AVERAGE: 382 persons/sq km (Census 2011)',
                    '  • Increased from 325 (2001) to 382 (2011)',
                    '',
                    '📍 HIGHEST DENSITY STATES:',
                    '  1. BIHAR: 1,106/sq km (highest)',
                    '  2. WEST BENGAL: 1,029/sq km',
                    '  3. KERALA: 860/sq km',
                    '  4. UP: 829/sq km',
                    '  5. JHARKHAND: 414/sq km',
                    '',
                    '📍 LOWEST DENSITY STATES:',
                    '  1. ARUNACHAL PRADESH: 17/sq km (lowest)',
                    '  2. MIZORAM: 52/sq km',
                    '  3. SIKKIM: 86/sq km',
                    '  4. MANIPUR: 128/sq km',
                    '',
                    '📍 UNION TERRITORIES:',
                    '  • DELHI: 11,320/sq km (HIGHEST in India)',
                    '  • CHANDIGARH: 9,258/sq km',
                    '  • ANDAMAN & NICOBAR: 46/sq km (LOWEST UT)',
                    '',
                    '📌 PATTERN: Plains dense, Mountains sparse'
                ]
            },
            {
                title: 'Factors Affecting Distribution',
                icon: '⚙️',
                points: [
                    '🌍 PHYSICAL/GEOGRAPHICAL FACTORS:',
                    '',
                    '🌡️ CLIMATE:',
                    '  • Moderate climate attracts settlement',
                    '  • Extreme cold (Siberia, Tibet) = sparse',
                    '  • Extreme hot (Sahara, Thar) = sparse',
                    '  • Indo-Gangetic Plains: Moderate = dense',
                    '',
                    '⛰️ TERRAIN/RELIEF:',
                    '  • Plains & valleys: Dense (easy agriculture, transport)',
                    '  • Mountains: Sparse (difficult access)',
                    '  • Himalayas, Western Ghats = low density',
                    '',
                    '🌊 WATER AVAILABILITY:',
                    '  • River valleys highly populated',
                    '  • Nile, Ganga, Indus valleys = dense',
                    '  • Deserts without water = sparse',
                    '',
                    '🌱 SOIL & VEGETATION:',
                    '  • Fertile soils attract agriculture → population',
                    '  • Alluvial soils of plains = dense',
                    '  • Dense forests = traditionally sparse',
                    '',
                    '💼 SOCIO-ECONOMIC FACTORS:',
                    '  • Employment opportunities',
                    '  • Urbanization & industrialization',
                    '  • Historical & cultural factors',
                    '  • Infrastructure development',
                    '  • Political stability'
                ]
            },
            {
                title: 'Distribution Pattern in India',
                icon: '🗺️',
                points: [
                    '🟢 HIGH DENSITY REGIONS:',
                    '',
                    '📍 INDO-GANGETIC PLAINS:',
                    '  • UP, Bihar, WB - highest densities',
                    '  • Flat terrain, fertile alluvial soil',
                    '  • Perennial rivers (Ganga system)',
                    '  • Historical agricultural civilization',
                    '',
                    '📍 COASTAL PLAINS:',
                    '  • Malabar, Coromandel coasts',
                    '  • Trade, fishing, ports',
                    '  • Moderate climate',
                    '',
                    '📍 RIVER DELTAS:',
                    '  • Ganga-Brahmaputra delta',
                    '  • Godavari, Krishna, Cauvery deltas',
                    '  • Very fertile, water abundant',
                    '',
                    '🔴 LOW DENSITY REGIONS:',
                    '',
                    '📍 HIMALAYAN REGION:',
                    '  • Arunachal, Sikkim, Ladakh',
                    '  • Difficult terrain, extreme climate',
                    '',
                    '📍 THAR DESERT:',
                    '  • Western Rajasthan',
                    '  • Water scarcity, extreme heat',
                    '',
                    '📍 CENTRAL INDIAN HIGHLANDS:',
                    '  • Parts of MP, Chhattisgarh',
                    '  • Forested, hilly terrain'
                ]
            },
            {
                title: 'Census of India',
                icon: '📋',
                points: [
                    '📅 CENSUS HISTORY:',
                    '  • First Census: 1872 (non-synchronous)',
                    '  • First Synchronous Census: 1881',
                    '  • Conducted every 10 years',
                    '  • Latest: Census 2011',
                    '  • Census 2021: Postponed due to COVID',
                    '',
                    '🏛️ CONDUCTING AUTHORITY:',
                    '  • Registrar General and Census Commissioner',
                    '  • Under Ministry of Home Affairs',
                    '  • Article 246 (Union List, Entry 69)',
                    '',
                    '📊 CENSUS 2011 KEY DATA:',
                    '  • Population: 1.21 billion',
                    '  • Decadal Growth: 17.64%',
                    '  • Density: 382/sq km',
                    '  • Sex Ratio: 943 females per 1000 males',
                    '  • Literacy: 74.04%',
                    '  • Urban Population: 31.16%',
                    '',
                    '📋 CENSUS PROVIDES:',
                    '  • Demographic data',
                    '  • Social characteristics',
                    '  • Economic activity',
                    '  • Housing conditions',
                    '  • Migration data',
                    '',
                    '📌 Use: Policy planning, constituency delimitation, resource allocation'
                ]
            }
        ],

        diagrams: [
            {
                title: 'Population Density Map of India',
                type: 'map',
                description: 'India map color-coded: Dark red (>800/sq km) - Bihar, WB, Kerala, UP. Orange (400-800) - TN, Punjab. Yellow (200-400) - Most states. Green (<200) - NE, Rajasthan. White (<50) - Arunachal.'
            },
            {
                title: 'World Population Distribution',
                type: 'map',
                description: 'World map showing: Asia 60%, Africa 17%, Europe 9.5%, Americas 13%. Highlight dense regions: East Asia, South Asia, Western Europe. Mark anecumene areas.'
            },
            {
                title: 'Factors Affecting Population Distribution',
                type: 'flowchart',
                description: 'Central "Population Distribution" with arrows to: Climate (thermometer), Water (droplet), Terrain (mountain), Soil (plant), Jobs (factory), History (monument). Color-code physical vs socio-economic.'
            },
            {
                title: 'High vs Low Density Regions',
                type: 'comparison-chart',
                description: 'Two columns: HIGH (Plains, Deltas, Coasts, Moderate climate, Fertile soil) vs LOW (Mountains, Deserts, Forests, Extreme climate, Poor soil). Examples for each.'
            }
        ],

        quickFacts: [
            '🌍 World population: 8+ billion (2023)',
            '🇮🇳 India: 1.43 billion, world\'s MOST POPULOUS (2023)',
            '📊 India density: 382/sq km (Census 2011)',
            '🏆 Highest density STATE: Bihar (1,106/sq km)',
            '⬇️ Lowest density STATE: Arunachal Pradesh (17/sq km)',
            '🏙️ Highest density UT: Delhi (11,320/sq km)',
            '📍 UP has 16.5% of India\'s population (200M+)',
            '🌏 Asia: 60% of world population',
            '⬆️ 90% of world population in Northern Hemisphere',
            '🌊 60% live within 100 km of coast',
            '🏔️ 80% live below 500m altitude',
            '📅 First Indian Census: 1872, First synchronous: 1881'
        ],

        upscTraps: [
            {
                trap: 'China is the most populous country',
                clarity: 'As of April 2023, INDIA surpassed China to become the MOST POPULOUS country with ~1.43 billion people.'
            },
            {
                trap: 'Maharashtra has highest population density',
                clarity: 'BIHAR has highest density (1,106/sq km). Maharashtra is large in area so lower density. UP has more population but lower density than Bihar.'
            },
            {
                trap: 'Delhi is a state with highest density',
                clarity: 'Delhi is a UNION TERRITORY, not a state. Among STATES, Bihar has highest density. Delhi (UT) has 11,320/sq km.'
            },
            {
                trap: 'Census is conducted by Statistics Ministry',
                clarity: 'Census is conducted by Registrar General under MINISTRY OF HOME AFFAIRS, not Statistics Ministry.'
            }
        ],

        revisionBox: {
            title: '⚡ 30-Second Revision',
            points: [
                'India: 1.43B (world #1, 2023), 382/sq km density',
                'Most populous: UP (200M) > Maharashtra > Bihar > WB',
                'Highest density: Bihar (1106), Delhi UT (11320)',
                'Lowest density: Arunachal (17), A&N Islands UT (46)',
                'World: Asia 60%, N. Hemisphere 90%, within 100km coast 60%',
                'Dense: Plains, deltas, coasts. Sparse: Mountains, deserts',
                'Census: Every 10 years, Home Ministry, since 1881'
            ]
        },

        pyqs: [
            {
                year: 2021,
                question: 'Discuss the factors affecting population distribution in India.',
                type: 'Mains'
            },
            {
                year: 2020,
                question: 'Which state has the highest population density in India?',
                type: 'Prelims',
                options: ['Uttar Pradesh', 'Bihar', 'West Bengal', 'Kerala']
            },
            {
                year: 2019,
                question: 'Explain the uneven distribution of population in India with suitable examples.',
                type: 'Mains'
            }
        ]
    },

    // ============================================
    // TOPIC 2: POPULATION GROWTH
    // ============================================
    {
        id: 'population-growth',
        name: 'Population Growth & Trends',
        icon: '📈',
        category: 'human',
        theme: 'population',
        difficulty: 'medium',
        upscRelevance: 'high',

        mindMap: {
            central: 'Population Growth',
            branches: [
                {
                    name: 'Measures',
                    color: '#E74C3C',
                    children: [
                        'Birth Rate (CBR)',
                        'Death Rate (CDR)',
                        'Natural Growth Rate',
                        'Total Fertility Rate (TFR)'
                    ]
                },
                {
                    name: 'India Trends',
                    color: '#3498DB',
                    children: [
                        'Declining growth rate',
                        'TFR: 2.0 (below replacement)',
                        'Demographic dividend',
                        'Ageing beginning'
                    ]
                },
                {
                    name: 'Historical Phases',
                    color: '#27AE60',
                    children: [
                        'Pre-1921: Stagnant',
                        '1921-51: Steady growth',
                        '1951-81: Rapid growth',
                        'Post-1981: Declining rate'
                    ]
                },
                {
                    name: 'Factors',
                    color: '#F39C12',
                    children: [
                        'Healthcare improvement',
                        'Education (especially female)',
                        'Family planning',
                        'Economic development'
                    ]
                }
            ]
        },

        memoryHooks: [
            {
                type: 'mnemonic',
                title: 'Population Growth Phases',
                content: '1921 = Year of Great Divide! Before 1921: Fluctuating/Stagnant. After 1921: Continuous growth. "21 Divided the Story!"',
                icon: '📅'
            },
            {
                type: 'number',
                title: 'Key Rates to Remember',
                content: 'Replacement level TFR = 2.1 (2 kids + buffer). India TFR = 2.0 (below replacement!). Growth rate: 17.64% (2001-11), lowest ever.',
                icon: '🔢'
            },
            {
                type: 'story',
                title: 'Demographic Dividend Story',
                content: 'Working age (15-64) population is BULGING. Less dependents (children + elderly). More workers = More production = Economic BONUS! But only if employed!',
                icon: '💰'
            },
            {
                type: 'formula',
                title: 'Natural Growth Rate',
                content: 'NGR = Birth Rate - Death Rate. If BR > DR = Growth. If BR < DR = Decline. India: BR falling, DR stable = Growth rate falling!',
                icon: '➗'
            }
        ],

        conceptBlocks: [
            {
                title: 'Population Growth Concepts',
                icon: '📊',
                points: [
                    '📐 KEY MEASURES:',
                    '',
                    '👶 CRUDE BIRTH RATE (CBR):',
                    '  • Live births per 1000 population per year',
                    '  • India CBR: 20.0 (SRS 2020)',
                    '  • Declining trend',
                    '',
                    '💀 CRUDE DEATH RATE (CDR):',
                    '  • Deaths per 1000 population per year',
                    '  • India CDR: 6.0 (SRS 2020)',
                    '  • Declined significantly (was 25+ in 1950s)',
                    '',
                    '📈 NATURAL GROWTH RATE:',
                    '  • NGR = CBR - CDR',
                    '  • India: 20.0 - 6.0 = 14.0 per 1000',
                    '  • Or 1.4% annual growth',
                    '',
                    '👪 TOTAL FERTILITY RATE (TFR):',
                    '  • Average children per woman in lifetime',
                    '  • Replacement level: 2.1',
                    '  • India TFR: 2.0 (NFHS-5, 2019-21)',
                    '  • BELOW replacement level!',
                    '',
                    '👴 INFANT MORTALITY RATE (IMR):',
                    '  • Deaths under age 1, per 1000 live births',
                    '  • India IMR: 28 (SRS 2020)',
                    '  • Indicator of healthcare quality'
                ]
            },
            {
                title: 'Historical Phases of Growth',
                icon: '📅',
                points: [
                    '📊 PHASE 1: PRE-1921 (Stagnant Phase)',
                    '  • Population: ~250 million',
                    '  • High birth rate + High death rate',
                    '  • Famines, epidemics, plagues',
                    '  • Natural checks on population',
                    '  • 1921 = "Year of Great Divide"',
                    '',
                    '📊 PHASE 2: 1921-1951 (Steady Growth)',
                    '  • Death rate started declining',
                    '  • Birth rate remained high',
                    '  • Better medical facilities',
                    '  • Famine control improved',
                    '  • Growth: ~1.25% per year',
                    '',
                    '📊 PHASE 3: 1951-1981 (Rapid Growth)',
                    '  • "Population Explosion" period',
                    '  • Death rate fell sharply',
                    '  • Birth rate still high',
                    '  • Healthcare revolution',
                    '  • Growth: 2.2% per year (peak)',
                    '  • Population doubled (361M → 684M)',
                    '',
                    '📊 PHASE 4: 1981-Present (Declining Rate)',
                    '  • Growth rate declining',
                    '  • Family planning success',
                    '  • Female education impact',
                    '  • 2001-11 growth: 17.64% (lowest ever)',
                    '  • TFR reached 2.0 (2021)'
                ]
            },
            {
                title: 'Demographic Dividend',
                icon: '💰',
                points: [
                    '📖 DEFINITION:',
                    '  • Economic growth potential from age structure',
                    '  • Working age (15-64) population is MAXIMUM',
                    '  • Dependency ratio is LOW (fewer children + elderly)',
                    '',
                    '🇮🇳 INDIA\'S WINDOW:',
                    '  • Duration: 2018-2055 (approximately)',
                    '  • Peak: Around 2040',
                    '  • 65% population in working age currently',
                    '  • 10,000 people turn 18 every day!',
                    '',
                    '✅ BENEFITS:',
                    '  • Large workforce',
                    '  • Higher savings, investment',
                    '  • Economic growth boost',
                    '  • Innovation potential',
                    '',
                    '⚠️ CHALLENGES:',
                    '  • Needs employment creation',
                    '  • Quality education essential',
                    '  • Skill development required',
                    '  • Health infrastructure needed',
                    '',
                    '📌 WITHOUT JOBS: Demographic dividend becomes DEMOGRAPHIC DISASTER!',
                    '',
                    '🔄 DEMOGRAPHIC TRANSITION:',
                    '  • From high BR/DR → Low BR/DR',
                    '  • India is in LATE TRANSITION stage',
                    '  • Moving towards developed country pattern'
                ]
            },
            {
                title: 'State-wise Variations',
                icon: '🗺️',
                points: [
                    '📊 TOTAL FERTILITY RATE (TFR) by State:',
                    '',
                    '🔴 HIGH TFR (Above Replacement 2.1):',
                    '  • Bihar: 3.0 (highest)',
                    '  • Meghalaya: 2.9',
                    '  • UP: 2.4',
                    '  • Jharkhand: 2.3',
                    '  • MP: 2.0 (at replacement)',
                    '',
                    '🟢 LOW TFR (Below Replacement):',
                    '  • Sikkim: 1.1 (lowest)',
                    '  • Goa: 1.3',
                    '  • Andaman & Nicobar: 1.3',
                    '  • Delhi: 1.4',
                    '  • Tamil Nadu: 1.8',
                    '  • Kerala: 1.8',
                    '  • Punjab: 1.6',
                    '',
                    '📌 PATTERN:',
                    '  • BIMARU states: Higher TFR',
                    '  • Southern + NE states: Lower TFR',
                    '  • Female literacy correlation is strong',
                    '',
                    '📊 DECADAL GROWTH (2001-11):',
                    '  • Highest: Meghalaya (27.8%)',
                    '  • Lowest: Nagaland (-0.6%) - decline!',
                    '  • Kerala, TN, Goa: Very low growth'
                ]
            },
            {
                title: 'Factors Affecting Growth',
                icon: '⚙️',
                points: [
                    '⬇️ FACTORS REDUCING GROWTH:',
                    '',
                    '📚 FEMALE EDUCATION:',
                    '  • Most important factor',
                    '  • Educated women: Later marriage, fewer children',
                    '  • Kerala, TN: High female literacy = Low TFR',
                    '',
                    '👩‍⚕️ HEALTHCARE:',
                    '  • Lower IMR = Less "replacement" births',
                    '  • Family planning services',
                    '  • Contraceptive access',
                    '',
                    '💼 ECONOMIC DEVELOPMENT:',
                    '  • Higher income = Smaller families',
                    '  • Urban areas: Lower fertility',
                    '  • Women employment',
                    '',
                    '📺 AWARENESS & MEDIA:',
                    '  • TV, radio campaigns',
                    '  • "Hum Do, Hamare Do" messaging',
                    '  • Role model effect',
                    '',
                    '⬆️ FACTORS INCREASING GROWTH:',
                    '  • Low female literacy',
                    '  • Poverty',
                    '  • Son preference',
                    '  • Early marriage',
                    '  • Lack of contraceptive access',
                    '  • Religious/cultural beliefs'
                ]
            },
            {
                title: 'Population Policies',
                icon: '📜',
                points: [
                    '📋 NATIONAL POPULATION POLICY 2000:',
                    '',
                    '🎯 IMMEDIATE OBJECTIVES:',
                    '  • Address unmet need for contraception',
                    '  • Healthcare infrastructure',
                    '  • Integrated service delivery',
                    '',
                    '🎯 MEDIUM-TERM OBJECTIVE:',
                    '  • TFR to replacement level (2.1) by 2010',
                    '  • (Achieved by 2020, delayed)',
                    '',
                    '🎯 LONG-TERM OBJECTIVE:',
                    '  • Population stabilization by 2045',
                    '',
                    '📌 KEY STRATEGIES:',
                    '  • Making school education compulsory (RTE)',
                    '  • Reducing IMR to below 30',
                    '  • Reducing MMR to below 100',
                    '  • Universal immunization',
                    '  • Promoting delayed marriage',
                    '  • Increasing institutional deliveries',
                    '',
                    '🏛️ PROGRAMS:',
                    '  • Mission Parivar Vikas (high focus districts)',
                    '  • Beti Bachao Beti Padhao',
                    '  • Janani Suraksha Yojana',
                    '  • PMMVY (maternity benefit)',
                    '',
                    '⚠️ NO COERCION: Policy emphasizes voluntary approach'
                ]
            }
        ],

        diagrams: [
            {
                title: 'Population Growth Phases Timeline',
                type: 'timeline',
                description: 'Horizontal timeline: Pre-1921 (flat line, stagnant), 1921-51 (gradual rise), 1951-81 (steep rise - explosion), 1981-present (curve flattening). Mark key events and growth rates.'
            },
            {
                title: 'Demographic Transition Model',
                type: 'graph',
                description: 'Classic DTM graph with Birth Rate and Death Rate lines. Show 4 stages: High stationary, Early expanding, Late expanding, Low stationary. Mark where India currently is (Late Stage 3).'
            },
            {
                title: 'State-wise TFR Map',
                type: 'map',
                description: 'India map color-coded by TFR: Red (>2.5) - Bihar, UP. Orange (2.1-2.5) - MP, Jharkhand. Green (<2.1) - South India, NE, Punjab. Show correlation with female literacy.'
            },
            {
                title: 'Demographic Dividend Window',
                type: 'graph',
                description: 'Age pyramid comparison: 2011 (bulging at base), 2021 (bulging in middle - working age), 2050 (projection - ageing). Mark dividend window 2018-2055.'
            }
        ],

        quickFacts: [
            '📅 1921 = Year of Great Divide (growth started)',
            '📊 India TFR: 2.0 (below replacement level 2.1)',
            '📉 Lowest decadal growth: 17.64% (2001-2011)',
            '🏆 Lowest TFR state: Sikkim (1.1)',
            '🔴 Highest TFR state: Bihar (3.0)',
            '📈 CBR: 20.0, CDR: 6.0 (SRS 2020)',
            '👶 IMR: 28 per 1000 live births (SRS 2020)',
            '💰 Demographic dividend window: 2018-2055',
            '👥 65% of India in working age (15-64)',
            '📚 Female education = Most important factor for low TFR',
            '🎯 NPP 2000 target: Stabilization by 2045',
            '📉 Nagaland: Only state with population decline (-0.6%)'
        ],

        upscTraps: [
            {
                trap: 'India\'s population is still growing rapidly',
                clarity: 'GROWTH RATE is declining! TFR (2.0) is below replacement (2.1). Population still increases due to "momentum" (large base), but rate is falling fast.'
            },
            {
                trap: 'Kerala has the lowest fertility rate',
                clarity: 'SIKKIM has lowest TFR (1.1). Kerala is low (1.8) but not lowest. Goa, A&N, Delhi all have lower than Kerala.'
            },
            {
                trap: 'Demographic dividend is automatic benefit',
                clarity: 'Dividend requires EMPLOYMENT creation, education, skills. Without jobs, young population becomes burden (demographic disaster), not dividend.'
            },
            {
                trap: 'High population growth means high birth rate',
                clarity: 'Growth = Birth Rate - Death Rate. In India, growth is due to DEATH RATE falling faster than birth rate. Both are declining, but gap remains.'
            }
        ],

        revisionBox: {
            title: '⚡ 30-Second Revision',
            points: [
                '1921 = Year of Great Divide (continuous growth started)',
                'TFR: India 2.0 (below 2.1 replacement), Bihar 3.0 (highest), Sikkim 1.1 (lowest)',
                'CBR 20.0, CDR 6.0, IMR 28 (per 1000)',
                'Demographic dividend: 2018-2055, 65% working age',
                'Female education = #1 factor reducing fertility',
                'Decadal growth: 17.64% (2001-11) - lowest ever',
                'NPP 2000: Target stabilization by 2045'
            ]
        },

        pyqs: [
            {
                year: 2021,
                question: 'What is demographic dividend? Discuss the challenges in harnessing it in India.',
                type: 'Mains'
            },
            {
                year: 2020,
                question: 'Explain the demographic transition model with reference to India.',
                type: 'Mains'
            },
            {
                year: 2019,
                question: 'What is the replacement level fertility rate?',
                type: 'Prelims',
                options: ['1.5', '2.1', '2.5', '3.0']
            },
            {
                year: 2018,
                question: 'Discuss the regional variations in population growth in India.',
                type: 'Mains'
            }
        ]
    },

    // ============================================
    // TOPIC 3: SEX RATIO & LITERACY
    // ============================================
    {
        id: 'sex-ratio-literacy',
        name: 'Sex Ratio & Literacy',
        icon: '⚖️',
        category: 'human',
        theme: 'population',
        difficulty: 'easy',
        upscRelevance: 'high',

        mindMap: {
            central: 'Demographic Indicators',
            branches: [
                {
                    name: 'Sex Ratio',
                    color: '#E91E63',
                    children: [
                        'India: 943 (Census 2011)',
                        'Kerala highest: 1084',
                        'Haryana lowest: 879',
                        'Child SR more concerning'
                    ]
                },
                {
                    name: 'Literacy',
                    color: '#2196F3',
                    children: [
                        'India: 74.04%',
                        'Kerala: 93.91%',
                        'Bihar: 61.8%',
                        'Male-Female gap: 16%'
                    ]
                },
                {
                    name: 'Causes of Issues',
                    color: '#FF9800',
                    children: [
                        'Son preference',
                        'Sex-selective abortion',
                        'Dowry system',
                        'Poverty, patriarchy'
                    ]
                },
                {
                    name: 'Solutions',
                    color: '#4CAF50',
                    children: [
                        'Beti Bachao Beti Padhao',
                        'PC-PNDT Act',
                        'Education emphasis',
                        'Women empowerment'
                    ]
                }
            ]
        },

        memoryHooks: [
            {
                type: 'mnemonic',
                title: 'Sex Ratio Leaders',
                content: 'KPT = Kerala, Puducherry, Tamil Nadu (highest sex ratio). "Kerala People Treat (women well)". HDPR = Haryana, Delhi, Punjab, Rajasthan (lowest). "Hard Days for Princesses Remain"',
                icon: '⚖️'
            },
            {
                type: 'number',
                title: 'Key Sex Ratio Numbers',
                content: 'India: 943. Kerala: 1084 (>1000 means MORE females). Haryana: 879. Child SR (0-6): 919 (more concerning). Target: 1000.',
                icon: '🔢'
            },
            {
                type: 'mnemonic',
                title: 'Literacy Leaders',
                content: 'Kerala = "Land of 100% Literacy" (93.91% actual). KMLG = Kerala, Mizoram, Lakshadweep, Goa (Top 4). Bihar at bottom (61.8%).',
                icon: '📖'
            },
            {
                type: 'comparison',
                title: 'Child SR vs Overall SR',
                content: 'Child SR (0-6 years) = 919 (Census 2011). Overall SR = 943. Child SR is LOWER and more worrying - shows sex-selective practices continuing!',
                icon: '👶'
            }
        ],

        conceptBlocks: [
            {
                title: 'Sex Ratio Basics',
                icon: '⚖️',
                points: [
                    '📐 DEFINITION:',
                    '  • Number of FEMALES per 1000 MALES',
                    '  • India uses females per 1000 males',
                    '  • (Some countries use males per 100 females)',
                    '',
                    '🌍 WORLD AVERAGE: ~1000 (equal)',
                    '🇮🇳 INDIA (Census 2011): 943',
                    '',
                    '📊 TRENDS IN INDIA:',
                    '  • 1901: 972',
                    '  • 1951: 946',
                    '  • 1991: 927 (lowest ever)',
                    '  • 2001: 933',
                    '  • 2011: 943 (improvement)',
                    '  • 2021 (NFHS-5): 1020 (first time above 1000!)',
                    '',
                    '📊 TYPES:',
                    '  • OVERALL SEX RATIO: All ages',
                    '  • CHILD SEX RATIO (0-6 years): More critical',
                    '  • SEX RATIO AT BIRTH (SRB): Natural ~105 males per 100 females',
                    '',
                    '📌 Natural SRB slightly favors males (105:100)',
                    '  But female longevity usually balances it'
                ]
            },
            {
                title: 'State-wise Sex Ratio',
                icon: '🗺️',
                points: [
                    '📍 HIGHEST SEX RATIO (Census 2011):',
                    '  1. KERALA: 1084 (only >1000)',
                    '  2. PUDUCHERRY: 1037',
                    '  3. TAMIL NADU: 996',
                    '  4. ANDHRA PRADESH: 993',
                    '  5. CHHATTISGARH: 991',
                    '  6. MEGHALAYA: 989',
                    '',
                    '📍 LOWEST SEX RATIO (Census 2011):',
                    '  1. HARYANA: 879 (lowest state)',
                    '  2. JAMMU & KASHMIR: 889',
                    '  3. SIKKIM: 890',
                    '  4. PUNJAB: 895',
                    '  5. RAJASTHAN: 928',
                    '  6. UTTAR PRADESH: 912',
                    '',
                    '📍 UNION TERRITORIES:',
                    '  • Lowest: Daman & Diu (618 - industrial migrant males)',
                    '  • Highest: Puducherry (1037)',
                    '',
                    '📌 PATTERN: South & NE better; North-West worse',
                    '',
                    '👶 CHILD SEX RATIO (0-6 years, 2011):',
                    '  • India: 919 (worse than overall!)',
                    '  • Lowest: Haryana (834)',
                    '  • Highest: Mizoram (971)'
                ]
            },
            {
                title: 'Causes of Low Sex Ratio',
                icon: '⚠️',
                points: [
                    '🔴 SOCIAL CAUSES:',
                    '',
                    '👦 SON PREFERENCE:',
                    '  • Old age security for parents',
                    '  • Carry family name',
                    '  • Religious rituals (death rites)',
                    '  • Agricultural labor',
                    '',
                    '💰 DOWRY SYSTEM:',
                    '  • Daughters seen as economic burden',
                    '  • Expensive weddings',
                    '  • Still prevalent despite laws',
                    '',
                    '👩 PATRIARCHY:',
                    '  • Male-dominated society',
                    '  • Women\'s lower status',
                    '  • Limited inheritance rights historically',
                    '',
                    '🔴 MEDICAL/TECHNICAL CAUSES:',
                    '',
                    '🏥 SEX-SELECTIVE ABORTION:',
                    '  • Ultrasound misuse',
                    '  • Female feticide',
                    '  • Despite PC-PNDT Act',
                    '',
                    '⚠️ FEMALE INFANTICIDE:',
                    '  • Killing newborn girls',
                    '  • Still occurs in some areas',
                    '',
                    '🔴 NEGLECT:',
                    '  • Less healthcare for girls',
                    '  • Less nutrition (implicit discrimination)',
                    '  • Higher female child mortality'
                ]
            },
            {
                title: 'Literacy in India',
                icon: '📚',
                points: [
                    '📐 DEFINITION:',
                    '  • Person aged 7+ who can read & write',
                    '  • Any language (with understanding)',
                    '',
                    '🇮🇳 INDIA LITERACY (Census 2011):',
                    '  • Overall: 74.04%',
                    '  • Male: 82.14%',
                    '  • Female: 65.46%',
                    '  • Gender Gap: 16.68%',
                    '',
                    '📈 TREND:',
                    '  • 1951: 18.33%',
                    '  • 1981: 43.57%',
                    '  • 2001: 64.83%',
                    '  • 2011: 74.04%',
                    '  • Consistent improvement!',
                    '',
                    '📍 HIGHEST LITERACY STATES:',
                    '  1. Kerala: 93.91%',
                    '  2. Lakshadweep (UT): 92.28%',
                    '  3. Mizoram: 91.58%',
                    '  4. Tripura: 87.75%',
                    '  5. Goa: 87.40%',
                    '',
                    '📍 LOWEST LITERACY STATES:',
                    '  1. Bihar: 61.80%',
                    '  2. Arunachal Pradesh: 65.38%',
                    '  3. Rajasthan: 66.11%',
                    '  4. Jharkhand: 66.41%',
                    '  5. Andhra Pradesh: 67.02%'
                ]
            },
            {
                title: 'Female Literacy',
                icon: '👩‍🎓',
                points: [
                    '🇮🇳 INDIA FEMALE LITERACY: 65.46% (Census 2011)',
                    '',
                    '📍 HIGHEST FEMALE LITERACY:',
                    '  1. Kerala: 91.98%',
                    '  2. Mizoram: 89.40%',
                    '  3. Lakshadweep: 88.25%',
                    '  4. Tripura: 83.15%',
                    '  5. Goa: 81.84%',
                    '',
                    '📍 LOWEST FEMALE LITERACY:',
                    '  1. Rajasthan: 52.66%',
                    '  2. Bihar: 51.50%',
                    '  3. Jharkhand: 55.42%',
                    '  4. UP: 57.18%',
                    '  5. Arunachal Pradesh: 57.70%',
                    '',
                    '📊 GENDER GAP IN LITERACY:',
                    '  • India average: 16.68%',
                    '  • Lowest gap: Kerala (5%), Meghalaya (6%)',
                    '  • Highest gap: Rajasthan (27%), Bihar (24%)',
                    '',
                    '🔗 CORRELATION:',
                    '  • Higher female literacy → Higher sex ratio',
                    '  • Higher female literacy → Lower fertility',
                    '  • Higher female literacy → Better child health',
                    '',
                    '📌 Female education = Key to development!'
                ]
            },
            {
                title: 'Government Initiatives',
                icon: '🏛️',
                points: [
                    '⚖️ FOR SEX RATIO:',
                    '',
                    '📜 PC-PNDT ACT (Pre-conception & Pre-natal Diagnostic Techniques):',
                    '  • 1994 (amended 2003)',
                    '  • Bans sex determination tests',
                    '  • Registration of ultrasound centers',
                    '  • Penalties for violations',
                    '',
                    '🎀 BETI BACHAO BETI PADHAO:',
                    '  • Launched 2015',
                    '  • Save daughters, educate daughters',
                    '  • Focus on 100 low CSR districts initially',
                    '  • Awareness campaigns',
                    '',
                    '💰 SUKANYA SAMRIDDHI YOJANA:',
                    '  • Girl child savings scheme',
                    '  • High interest rate',
                    '  • Tax benefits',
                    '',
                    '📚 FOR LITERACY:',
                    '',
                    '🏫 RIGHT TO EDUCATION (RTE) ACT 2009:',
                    '  • Free, compulsory education (6-14 years)',
                    '  • Article 21A (Fundamental Right)',
                    '',
                    '📖 SAMAGRA SHIKSHA:',
                    '  • Integrated school education scheme',
                    '  • Pre-school to Class 12',
                    '',
                    '🌙 PADHNA LIKHNA ABHIYAN:',
                    '  • Adult literacy program'
                ]
            }
        ],

        diagrams: [
            {
                title: 'Sex Ratio Map of India',
                type: 'map',
                description: 'India map color-coded: Green (>950) - Kerala, TN, AP, South India. Yellow (900-950) - Most states. Red (<900) - Haryana, Punjab, Delhi, Rajasthan. Show child SR separately.'
            },
            {
                title: 'Sex Ratio Trend Graph',
                type: 'graph',
                description: 'Line graph from 1901-2021: Show decline from 972 (1901) to 927 (1991 lowest), then rise to 943 (2011) and 1020 (NFHS-5 2021). Mark key years.'
            },
            {
                title: 'Literacy Comparison Chart',
                type: 'bar-chart',
                description: 'Grouped bar chart: States on x-axis, Male and Female literacy on y-axis. Show Kerala (high both), Bihar (low both), Rajasthan (big gender gap). Mark national average line.'
            },
            {
                title: 'Correlation: Female Literacy & Sex Ratio',
                type: 'scatter-plot',
                description: 'Scatter plot: X-axis = Female Literacy %, Y-axis = Sex Ratio. Show positive correlation. Mark Kerala (top right), Haryana (bottom left), Bihar (bottom middle).'
            }
        ],

        quickFacts: [
            '⚖️ India Sex Ratio: 943 (Census 2011), 1020 (NFHS-5 2021)',
            '👧 Child Sex Ratio (0-6): 919 (Census 2011) - more worrying',
            '🏆 Highest SR state: Kerala (1084)',
            '⬇️ Lowest SR state: Haryana (879)',
            '📚 India Literacy: 74.04% (Male 82.14%, Female 65.46%)',
            '🏆 Highest literacy: Kerala (93.91%)',
            '⬇️ Lowest literacy: Bihar (61.80%)',
            '👩‍🎓 Lowest female literacy: Rajasthan (52.66%)',
            '📊 Gender gap in literacy: 16.68% nationally',
            '📜 PC-PNDT Act: Bans sex determination tests',
            '🎀 Beti Bachao Beti Padhao: Launched 2015',
            '📖 RTE Act 2009: Free education 6-14 years'
        ],

        upscTraps: [
            {
                trap: 'India\'s sex ratio is improving only slightly',
                clarity: 'NFHS-5 (2021) shows sex ratio of 1020 - FIRST TIME above 1000! Major improvement from 943 (Census 2011).'
            },
            {
                trap: 'Kerala has best sex ratio because of low son preference',
                clarity: 'Kerala\'s high SR is due to: HIGH female literacy, MATRILINEAL traditions (some communities), HIGH emigration of males (Gulf), better healthcare for women.'
            },
            {
                trap: 'Bihar has lowest sex ratio',
                clarity: 'HARYANA has lowest sex ratio (879), not Bihar. Bihar has low LITERACY (61.8%) but sex ratio is 918 (better than Haryana, Punjab).'
            },
            {
                trap: 'Child sex ratio is similar to overall sex ratio',
                clarity: 'Child SR (919) is LOWER than overall SR (943), which is more concerning. It shows sex-selective practices are still happening.'
            }
        ],

        revisionBox: {
            title: '⚡ 30-Second Revision',
            points: [
                'Sex Ratio: India 943 (2011), 1020 (NFHS-5 2021)',
                'Highest SR: Kerala (1084), Lowest: Haryana (879)',
                'Child SR (0-6): 919 - more concerning than overall',
                'Literacy: 74.04%, Male 82.14%, Female 65.46%',
                'Highest literacy: Kerala (93.91%), Lowest: Bihar (61.8%)',
                'Female literacy: Kerala 92%, Rajasthan 52.66% (lowest)',
                'Key acts: PC-PNDT (sex determination ban), RTE (free education)'
            ]
        },

        pyqs: [
            {
                year: 2021,
                question: 'Discuss the reasons for low child sex ratio in India and measures to improve it.',
                type: 'Mains'
            },
            {
                year: 2020,
                question: 'Which state has the highest sex ratio in India according to Census 2011?',
                type: 'Prelims',
                options: ['Tamil Nadu', 'Karnataka', 'Kerala', 'Andhra Pradesh']
            },
            {
                year: 2019,
                question: 'Examine the correlation between female literacy and demographic indicators.',
                type: 'Mains'
            }
        ]
    },

    // ============================================
    // TOPIC 4: MIGRATION
    // ============================================
    {
        id: 'migration',
        name: 'Migration in India',
        icon: '🚶',
        category: 'human',
        theme: 'population',
        difficulty: 'medium',
        upscRelevance: 'high',

        mindMap: {
            central: 'Migration',
            branches: [
                {
                    name: 'Types',
                    color: '#E74C3C',
                    children: [
                        'Internal vs International',
                        'Rural-Urban (largest)',
                        'Rural-Rural',
                        'Urban-Urban, Urban-Rural'
                    ]
                },
                {
                    name: 'Push Factors',
                    color: '#9B59B6',
                    children: [
                        'Poverty, Unemployment',
                        'Natural disasters',
                        'Lack of services',
                        'Social conflicts'
                    ]
                },
                {
                    name: 'Pull Factors',
                    color: '#27AE60',
                    children: [
                        'Employment opportunities',
                        'Better education',
                        'Healthcare access',
                        'Higher wages'
                    ]
                },
                {
                    name: 'Consequences',
                    color: '#3498DB',
                    children: [
                        'Urbanization',
                        'Remittances',
                        'Brain drain',
                        'Demographic changes'
                    ]
                }
            ]
        },

        memoryHooks: [
            {
                type: 'mnemonic',
                title: 'Push vs Pull',
                content: 'PUSH = Problems at origin (poverty, disaster, conflict). PULL = Prospects at destination (jobs, education, services). "Pushed by Problems, Pulled by Prospects!"',
                icon: '🔄'
            },
            {
                type: 'mnemonic',
                title: 'Migration Streams',
                content: 'R-U, R-R, U-U, U-R = Four internal migration streams. R-U (Rural to Urban) is LARGEST. Remember: "Rural folks Rush to Urban!"',
                icon: '🚶'
            },
            {
                type: 'story',
                title: 'Marriage Migration',
                content: 'In India, females migrate MORE than males! Why? MARRIAGE! Women move to husband\'s home. This is biggest reason for female migration in India.',
                icon: '💍'
            },
            {
                type: 'comparison',
                title: 'Brain Drain vs Brain Gain',
                content: 'DRAIN = Skilled people leaving (bad for origin). GAIN = Skilled people arriving (good for destination). India faces both! Drains doctors to US, Gains IT workers from neighbors.',
                icon: '🧠'
            }
        ],

        conceptBlocks: [
            {
                title: 'Types of Migration',
                icon: '🔄',
                points: [
                    '📋 BY GEOGRAPHY:',
                    '',
                    '🇮🇳 INTERNAL MIGRATION:',
                    '  • Within country (state to state, district to district)',
                    '  • No border crossing',
                    '  • India: 450 million internal migrants (37% of population)',
                    '',
                    '🌍 INTERNATIONAL MIGRATION:',
                    '  • Across national borders',
                    '  • Immigration (into) vs Emigration (out of)',
                    '  • India: Largest source of migrants globally (18 million abroad)',
                    '',
                    '📋 BY DIRECTION (Internal):',
                    '',
                    '🏘️ RURAL TO URBAN (R-U):',
                    '  • Largest for MALE migrants',
                    '  • Employment seeking',
                    '  • Urbanization driver',
                    '',
                    '🏘️ RURAL TO RURAL (R-R):',
                    '  • Largest OVERALL in India',
                    '  • Mainly female (marriage)',
                    '  • Agricultural labor movement',
                    '',
                    '🏙️ URBAN TO URBAN (U-U):',
                    '  • Job transfers, better opportunities',
                    '  • Metro to metro movement',
                    '',
                    '🏙️ URBAN TO RURAL (U-R):',
                    '  • Smallest stream',
                    '  • Return migration, retirement'
                ]
            },
            {
                title: 'Push & Pull Factors',
                icon: '⬆️',
                points: [
                    '⬅️ PUSH FACTORS (Origin - Negative):',
                    '',
                    '💰 ECONOMIC:',
                    '  • Unemployment, underemployment',
                    '  • Poverty, low wages',
                    '  • Lack of economic opportunities',
                    '  • Agricultural distress',
                    '',
                    '🌊 ENVIRONMENTAL:',
                    '  • Natural disasters (floods, droughts)',
                    '  • Climate change impacts',
                    '  • Resource depletion',
                    '',
                    '👥 SOCIAL:',
                    '  • Caste discrimination',
                    '  • Communal conflicts',
                    '  • Lack of basic services',
                    '  • Poor education, healthcare',
                    '',
                    '➡️ PULL FACTORS (Destination - Positive):',
                    '',
                    '💼 ECONOMIC:',
                    '  • Employment opportunities',
                    '  • Higher wages',
                    '  • Better standard of living',
                    '  • Career growth',
                    '',
                    '🏥 SERVICES:',
                    '  • Better education',
                    '  • Healthcare facilities',
                    '  • Entertainment, amenities',
                    '',
                    '👨‍👩‍👧 SOCIAL:',
                    '  • Family reunification',
                    '  • Marriage (especially women)',
                    '  • Social mobility'
                ]
            },
            {
                title: 'Migration Statistics (India)',
                icon: '📊',
                points: [
                    '📊 INTERNAL MIGRATION (Census 2011):',
                    '  • Total migrants: 454 million (37% of population)',
                    '  • Female migrants: 70%',
                    '  • Male migrants: 30%',
                    '',
                    '📊 REASONS FOR MIGRATION:',
                    '  • MARRIAGE: 49% (mainly females)',
                    '  • EMPLOYMENT: 10% (mainly males)',
                    '  • FAMILY MOVING: 13%',
                    '  • EDUCATION: 2%',
                    '  • BUSINESS: 1%',
                    '',
                    '📊 MIGRATION STREAMS:',
                    '  • Rural-Rural: 48% (largest)',
                    '  • Rural-Urban: 22%',
                    '  • Urban-Urban: 18%',
                    '  • Urban-Rural: 12%',
                    '',
                    '📍 TOP MIGRANT RECEIVING STATES:',
                    '  1. Maharashtra (Mumbai)',
                    '  2. Delhi',
                    '  3. Gujarat',
                    '  4. Tamil Nadu',
                    '  5. Karnataka (Bengaluru)',
                    '',
                    '📍 TOP MIGRANT SENDING STATES:',
                    '  1. UP',
                    '  2. Bihar',
                    '  3. Rajasthan',
                    '  4. MP',
                    '  5. Odisha'
                ]
            },
            {
                title: 'International Migration',
                icon: '✈️',
                points: [
                    '🇮🇳 INDIA\'S DIASPORA:',
                    '  • 18+ million Indians abroad (largest diaspora)',
                    '  • NRIs + PIOs worldwide',
                    '',
                    '📍 TOP DESTINATION COUNTRIES:',
                    '  1. UAE: 3.5 million',
                    '  2. USA: 2.7 million',
                    '  3. Saudi Arabia: 2.5 million',
                    '  4. Pakistan: 1.6 million (historical)',
                    '  5. Kuwait, Oman, UK, Canada',
                    '',
                    '💰 REMITTANCES:',
                    '  • India: Largest recipient globally',
                    '  • $100+ billion annually (2022)',
                    '  • Major source: Gulf countries, USA',
                    '  • Important for forex reserves',
                    '',
                    '🧠 BRAIN DRAIN:',
                    '  • Skilled professionals leaving',
                    '  • Doctors, engineers, IT professionals',
                    '  • Loss of trained human capital',
                    '  • But also: Remittances, diaspora investment',
                    '',
                    '📋 TYPES:',
                    '  • Skilled migration: IT, medical (USA, UK, Canada)',
                    '  • Semi-skilled: Gulf countries (construction, services)',
                    '  • Students: USA, UK, Australia, Canada',
                    '  • Refugees: Tibetans, Sri Lankans (historical)'
                ]
            },
            {
                title: 'Consequences of Migration',
                icon: '📈',
                points: [
                    '✅ POSITIVE EFFECTS:',
                    '',
                    '📍 ON DESTINATION:',
                    '  • Labor supply (fills shortages)',
                    '  • Diversity, cultural exchange',
                    '  • Economic growth',
                    '  • Innovation, skills',
                    '',
                    '📍 ON ORIGIN:',
                    '  • Remittances (poverty reduction)',
                    '  • Reduced unemployment pressure',
                    '  • Skill transfer (return migrants)',
                    '  • Social remittances (new ideas)',
                    '',
                    '📍 ON MIGRANTS:',
                    '  • Better income',
                    '  • Improved living standards',
                    '  • Education, healthcare access',
                    '  • Social mobility',
                    '',
                    '❌ NEGATIVE EFFECTS:',
                    '',
                    '📍 ON DESTINATION:',
                    '  • Strain on infrastructure',
                    '  • Housing, slum growth',
                    '  • Social tension sometimes',
                    '',
                    '📍 ON ORIGIN:',
                    '  • Brain drain',
                    '  • Labor shortage (agriculture)',
                    '  • Family separation',
                    '  • Gender imbalance (male out-migration)',
                    '',
                    '📍 ON MIGRANTS:',
                    '  • Exploitation, discrimination',
                    '  • Poor living conditions',
                    '  • Identity issues',
                    '  • Mental health challenges'
                ]
            },
            {
                title: 'Policies & Issues',
                icon: '📜',
                points: [
                    '📜 POLICIES FOR MIGRANTS:',
                    '',
                    '🏠 INTER-STATE MIGRANT WORKMEN ACT 1979:',
                    '  • Regulates employment of interstate migrants',
                    '  • Contractor registration',
                    '  • Worker welfare provisions',
                    '  • Poorly implemented',
                    '',
                    '🔧 NOW REPLACED BY:',
                    '  • Occupational Safety, Health and Working Conditions Code 2020',
                    '  • Broader coverage',
                    '  • Still implementation challenges',
                    '',
                    '🆔 ONE NATION ONE RATION CARD:',
                    '  • PDS portability across states',
                    '  • Helps migrant workers',
                    '  • Implemented during COVID-19',
                    '',
                    '⚠️ KEY ISSUES:',
                    '  • Lack of identity documents',
                    '  • No access to government schemes',
                    '  • Exploitative working conditions',
                    '  • No social security',
                    '  • Housing in slums',
                    '  • Children\'s education disrupted',
                    '',
                    '📌 COVID-19 IMPACT:',
                    '  • Mass reverse migration during lockdown',
                    '  • Highlighted vulnerability of migrants',
                    '  • Pushed policy attention'
                ]
            }
        ],

        diagrams: [
            {
                title: 'Push-Pull Model',
                type: 'diagram',
                description: 'Two sides: LEFT (Origin) with push factors (arrows pointing right) - poverty, disaster, conflict. RIGHT (Destination) with pull factors (arrows pointing left) - jobs, services, opportunity. Migrant figure in middle.'
            },
            {
                title: 'Migration Streams in India',
                type: 'flowchart',
                description: 'Four streams with percentages: R-R (48%, marriage dominated), R-U (22%, employment), U-U (18%, job transfers), U-R (12%, return). Show male vs female patterns.'
            },
            {
                title: 'Migrant Sending vs Receiving States',
                type: 'map',
                description: 'India map: Blue arrows FROM UP, Bihar, Rajasthan, Odisha. Red arrows TO Maharashtra, Delhi, Gujarat, Karnataka, TN. Mark Mumbai, Delhi as major destinations.'
            },
            {
                title: 'Remittance Flow',
                type: 'diagram',
                description: 'World map showing arrows to India from: Gulf (UAE, Saudi, Kuwait), USA, UK. Show $100B+ figure. List top receiving states in India.'
            }
        ],

        quickFacts: [
            '🚶 India internal migrants: 454 million (37% of population)',
            '👩 70% of migrants are female (mainly for marriage)',
            '💍 Marriage: 49% of migration reason in India',
            '🏘️ Rural-Rural: Largest stream (48%)',
            '🏙️ Rural-Urban: Largest for male migrants',
            '📍 Maharashtra, Delhi: Top migrant receiving states',
            '📍 UP, Bihar: Top migrant sending states',
            '✈️ India diaspora: 18+ million (world\'s largest)',
            '💰 Remittances: $100+ billion (world\'s highest)',
            '🌍 Top destinations: UAE, USA, Saudi Arabia',
            '📜 Inter-State Migrant Workmen Act: 1979',
            '🆔 One Nation One Ration Card: For migrant food security'
        ],

        upscTraps: [
            {
                trap: 'Rural-Urban migration is the largest in India',
                clarity: 'RURAL-RURAL is largest (48%)! But for MALES, R-U is largest. Overall, women dominating R-R for marriage makes it largest.'
            },
            {
                trap: 'Males migrate more than females in India',
                clarity: 'FEMALES are 70% of migrants! Reason: Marriage migration. For ECONOMIC migration, males dominate, but overall females lead.'
            },
            {
                trap: 'Most migration is for employment',
                clarity: 'Only 10% of migration is for employment! MARRIAGE accounts for 49% (largest reason). This is a uniquely Indian pattern.'
            },
            {
                trap: 'Brain drain only harms India',
                clarity: 'Brain drain has POSITIVES too: Remittances ($100B+), diaspora investment, technology transfer, diplomatic leverage. Net effect debatable.'
            }
        ],

        revisionBox: {
            title: '⚡ 30-Second Revision',
            points: [
                'Internal migrants: 454 million (37%), Females 70%',
                'Reasons: Marriage 49%, Employment 10%, Family 13%',
                'Streams: R-R 48% (largest), R-U 22%, U-U 18%, U-R 12%',
                'Sending: UP, Bihar, Rajasthan. Receiving: Maharashtra, Delhi, Gujarat',
                'Diaspora: 18M+ abroad (largest), Remittances $100B+ (world #1)',
                'Push: poverty, disaster, conflict. Pull: jobs, services, family',
                'COVID highlighted migrant vulnerability, reverse migration'
            ]
        },

        pyqs: [
            {
                year: 2021,
                question: 'Discuss the impact of COVID-19 pandemic on migrant workers in India.',
                type: 'Mains'
            },
            {
                year: 2020,
                question: 'Explain the push and pull factors of migration with examples from India.',
                type: 'Mains'
            },
            {
                year: 2019,
                question: 'What is the largest reason for migration in India?',
                type: 'Prelims',
                options: ['Employment', 'Education', 'Marriage', 'Business']
            }
        ]
    },

    // ============================================
    // TOPIC 5: URBANIZATION
    // ============================================
    {
        id: 'urbanization',
        name: 'Urbanization in India',
        icon: '🏙️',
        category: 'human',
        theme: 'population',
        difficulty: 'medium',
        upscRelevance: 'high',

        mindMap: {
            central: 'Urbanization',
            branches: [
                {
                    name: 'Statistics',
                    color: '#3498DB',
                    children: [
                        'India: 31.16% urban (2011)',
                        '34.9% urban (2021 estimate)',
                        '377 million in cities',
                        'Rapid growth continuing'
                    ]
                },
                {
                    name: 'Urban Problems',
                    color: '#E74C3C',
                    children: [
                        'Housing shortage',
                        'Slums (17% urban pop)',
                        'Pollution, Traffic',
                        'Water, Sanitation'
                    ]
                },
                {
                    name: 'Classifications',
                    color: '#27AE60',
                    children: [
                        'Census Towns',
                        'Statutory Towns',
                        'Metropolitan cities',
                        'Mega cities (8 in India)'
                    ]
                },
                {
                    name: 'Initiatives',
                    color: '#9B59B6',
                    children: [
                        'Smart Cities Mission',
                        'AMRUT',
                        'PMAY-Urban',
                        'Swachh Bharat'
                    ]
                }
            ]
        },

        memoryHooks: [
            {
                type: 'mnemonic',
                title: 'Mega Cities of India',
                content: '8 Mega cities (10M+): "MUMBAI DELHI KOLKATA CHENNAI BANGALORE HYDERABAD AHMEDABAD PUNE" = "MDK-CB-HAP" - "Most Dynamic Cities Boost HAP(piness)"',
                icon: '🏙️'
            },
            {
                type: 'number',
                title: 'Urban Numbers',
                content: '31.16% urban (Census 2011). 377 million in cities. 7,935 towns total. 3 mega cities in 2001 → 8 in 2011. Urbanization growing at 2.76% annually.',
                icon: '🔢'
            },
            {
                type: 'mnemonic',
                title: 'Census Town Criteria',
                content: 'PDA Rule: Population ≥5000, Density ≥400/sq km, Agriculture <25% (workers). "5000 People in Dense Area, less Agriculture!"',
                icon: '📋'
            },
            {
                type: 'story',
                title: 'Urban Hierarchy',
                content: 'Think of cities as T-shirts: Class I (>100K) = XL cities, Class VI (<5K) = XS towns. Metro = 1M+, Mega = 10M+. India has 8 mega city "giants"!',
                icon: '👕'
            }
        ],

        conceptBlocks: [
            {
                title: 'Urbanization Concepts',
                icon: '📖',
                points: [
                    '📐 DEFINITIONS:',
                    '',
                    '🏙️ URBANIZATION:',
                    '  • Process of population shift from rural to urban',
                    '  • Growth of towns and cities',
                    '  • Change in occupation (agri to non-agri)',
                    '',
                    '🏗️ URBAN GROWTH:',
                    '  • Absolute increase in urban population',
                    '  • Due to: Migration, natural increase, reclassification',
                    '',
                    '📊 LEVEL OF URBANIZATION:',
                    '  • % of population living in urban areas',
                    '  • India: 31.16% (Census 2011)',
                    '  • World: ~56% (2020)',
                    '',
                    '📋 CENSUS TOWN CRITERIA:',
                    '  • Population: ≥5,000',
                    '  • Density: ≥400 persons/sq km',
                    '  • Male workers in non-agriculture: ≥75%',
                    '',
                    '📋 STATUTORY TOWN:',
                    '  • Notified by state government',
                    '  • Has municipality, corporation, cantonment board',
                    '  • May not meet census town criteria'
                ]
            },
            {
                title: 'Urban Statistics (India)',
                icon: '📊',
                points: [
                    '🇮🇳 INDIA URBAN POPULATION (Census 2011):',
                    '  • Total urban: 377 million',
                    '  • % of total: 31.16%',
                    '  • Urban growth rate: 2.76% per year',
                    '  • Number of towns: 7,935',
                    '',
                    '📈 HISTORICAL TREND:',
                    '  • 1901: 10.84% urban',
                    '  • 1951: 17.29%',
                    '  • 1981: 23.34%',
                    '  • 2001: 27.81%',
                    '  • 2011: 31.16%',
                    '  • 2021 (est): 34.9%',
                    '',
                    '📍 MOST URBANIZED STATES:',
                    '  1. Goa: 62.17%',
                    '  2. Mizoram: 52.11%',
                    '  3. Tamil Nadu: 48.45%',
                    '  4. Kerala: 47.72%',
                    '  5. Maharashtra: 45.23%',
                    '',
                    '📍 LEAST URBANIZED STATES:',
                    '  1. Himachal Pradesh: 10.04%',
                    '  2. Bihar: 11.30%',
                    '  3. Assam: 14.10%',
                    '  4. Odisha: 16.68%',
                    '',
                    '📍 MOST URBANIZED UT: Delhi (97.5%)'
                ]
            },
            {
                title: 'Urban Hierarchy',
                icon: '🏗️',
                points: [
                    '📊 CLASSIFICATION BY POPULATION:',
                    '',
                    '🏛️ CLASS I: ≥100,000 (468 cities)',
                    '  • 70% of urban population lives here',
                    '  • Includes metros and mega cities',
                    '',
                    '🏢 CLASS II: 50,000 - 99,999 (498 towns)',
                    '🏘️ CLASS III: 20,000 - 49,999 (1,386 towns)',
                    '🏠 CLASS IV: 10,000 - 19,999 (1,639 towns)',
                    '🏡 CLASS V: 5,000 - 9,999 (2,129 towns)',
                    '🏚️ CLASS VI: <5,000 (1,315 towns)',
                    '',
                    '📊 SPECIAL CATEGORIES:',
                    '',
                    '🌆 METROPOLITAN CITY: ≥1 million population',
                    '  • India has 53 metros (Census 2011)',
                    '',
                    '🏙️ MEGA CITY: ≥10 million population',
                    '  • India has 8 mega cities (Census 2011):',
                    '  1. Greater Mumbai (18.4M)',
                    '  2. Delhi (16.3M)',
                    '  3. Kolkata (14.1M)',
                    '  4. Chennai (8.7M)',
                    '  5. Bangalore (8.5M)',
                    '  6. Hyderabad (7.7M)',
                    '  7. Ahmedabad (6.4M)',
                    '  8. Pune (5.1M)'
                ]
            },
            {
                title: 'Urban Problems',
                icon: '⚠️',
                points: [
                    '🏠 HOUSING:',
                    '  • Shortage of 10+ million houses',
                    '  • Slums: 17% of urban population',
                    '  • Informal settlements',
                    '  • High real estate prices',
                    '',
                    '🚰 WATER & SANITATION:',
                    '  • Intermittent water supply',
                    '  • Groundwater depletion',
                    '  • Open defecation (improving)',
                    '  • Sewage treatment gaps',
                    '',
                    '🚗 TRANSPORT:',
                    '  • Traffic congestion',
                    '  • Inadequate public transport',
                    '  • Air pollution from vehicles',
                    '  • Road safety issues',
                    '',
                    '🌫️ POLLUTION:',
                    '  • Air: Delhi among most polluted',
                    '  • Water: River pollution in cities',
                    '  • Noise: Industry, traffic',
                    '  • Solid waste management',
                    '',
                    '💼 UNEMPLOYMENT:',
                    '  • Urban unemployment 7-9%',
                    '  • Informal sector dominant',
                    '  • Youth unemployment high',
                    '',
                    '⚡ INFRASTRUCTURE:',
                    '  • Power cuts',
                    '  • Poor roads in periphery',
                    '  • Digital divide'
                ]
            },
            {
                title: 'Slums in India',
                icon: '🏚️',
                points: [
                    '📊 SLUM STATISTICS:',
                    '  • Total slum population: 65.5 million (Census 2011)',
                    '  • % of urban population: 17.4%',
                    '  • Number of towns with slums: 2,613',
                    '',
                    '📍 HIGHEST SLUM POPULATION:',
                    '  • Maharashtra: 11.8 million',
                    '  • Andhra Pradesh: 8.4 million',
                    '  • Uttar Pradesh: 6.9 million',
                    '  • West Bengal: 6.4 million',
                    '',
                    '📍 HIGHEST SLUM % (of urban):',
                    '  • Andhra Pradesh: 35.7%',
                    '  • Chhattisgarh: 31.9%',
                    '  • Madhya Pradesh: 28.3%',
                    '',
                    '📋 CHARACTERISTICS:',
                    '  • Overcrowding',
                    '  • Lack of basic services',
                    '  • Poor sanitation',
                    '  • Insecure tenure',
                    '  • Substandard housing',
                    '',
                    '📌 DHARAVI (Mumbai):',
                    '  • Asia\'s largest slum (2.39 sq km)',
                    '  • ~1 million population',
                    '  • GDP: ~$1 billion (informal economy!)'
                ]
            },
            {
                title: 'Urban Development Programs',
                icon: '🏛️',
                points: [
                    '🏙️ SMART CITIES MISSION (2015):',
                    '  • 100 cities selected',
                    '  • Area-based development + Pan-city solutions',
                    '  • Technology-driven urban development',
                    '  • ₹48,000 crore central allocation',
                    '',
                    '💧 AMRUT (Atal Mission for Rejuvenation):',
                    '  • 500 cities covered',
                    '  • Water supply, sewerage, urban transport',
                    '  • Green spaces, drainage',
                    '  • ₹50,000 crore budget',
                    '',
                    '🏠 PMAY-URBAN (Housing for All):',
                    '  • Target: Urban housing by 2022 (extended)',
                    '  • Slum rehabilitation',
                    '  • Credit-linked subsidy',
                    '  • Affordable housing',
                    '',
                    '🧹 SWACHH BHARAT MISSION-URBAN:',
                    '  • Open Defecation Free (ODF) cities',
                    '  • Solid waste management',
                    '  • Public toilets',
                    '',
                    '🚇 METRO RAIL PROJECTS:',
                    '  • Delhi, Mumbai, Kolkata, Chennai operational',
                    '  • Expanding to 50+ cities',
                    '  • MRTS in various cities',
                    '',
                    '📌 JNNURM (2005-2014):',
                    '  • Predecessor program',
                    '  • Infrastructure focus',
                    '  • 65 mission cities',
                ]
            }
        ],

        diagrams: [
            {
                title: 'Urbanization Trend Graph',
                type: 'graph',
                description: 'Line graph showing urban % from 1901 (10.84%) to 2021 (34.9%). Mark key decades. Show projection to 2050 (50%+). Dotted line for world average comparison.'
            },
            {
                title: 'Urban Hierarchy Pyramid',
                type: 'diagram',
                description: 'Pyramid with: Top - 8 Mega cities, Then - 53 Metros, Then - Class I cities (468), Base - Smaller towns. Show population % at each level.'
            },
            {
                title: 'Mega Cities Map of India',
                type: 'map',
                description: 'India map marking 8 mega cities with population circles: Mumbai (largest), Delhi, Kolkata, Chennai, Bangalore, Hyderabad, Ahmedabad, Pune. Show urban corridors.'
            },
            {
                title: 'Urban Problems Infographic',
                type: 'infographic',
                description: 'Central city icon with branches: Housing (shortage figure), Water (supply hours), Pollution (AQI), Traffic (congestion level), Slums (17%). Statistics for each.'
            }
        ],

        quickFacts: [
            '🏙️ India urban population: 31.16% (Census 2011), 34.9% (2021 est)',
            '👥 377 million live in urban areas',
            '📊 Total towns: 7,935 (Census 2011)',
            '🏛️ Mega cities (10M+): 8 in India',
            '🏢 Metropolitan cities (1M+): 53',
            '🏆 Most urbanized state: Goa (62.17%)',
            '⬇️ Least urbanized state: Himachal Pradesh (10.04%)',
            '🏚️ Slum population: 65.5 million (17.4% of urban)',
            '🏙️ Mumbai: Largest city (18.4 million)',
            '📍 Dharavi: Asia\'s largest slum',
            '🏗️ Smart Cities Mission: 100 cities',
            '💧 AMRUT: 500 cities for water, sanitation'
        ],

        upscTraps: [
            {
                trap: 'India is highly urbanized like other developing countries',
                clarity: 'India is LESS urbanized (31.16%) compared to world average (56%). Even China is 65% urban. India still predominantly rural.'
            },
            {
                trap: 'Mumbai is the most populous city in India',
                clarity: 'DELHI NCR has surpassed Mumbai in population (as per some estimates). Census 2011 showed Mumbai larger, but Delhi has grown faster. Both are mega cities.'
            },
            {
                trap: 'All Census towns have urban local bodies',
                clarity: 'Census towns are statistical classification (meet 3 criteria). They may NOT have municipalities. Statutory towns have urban local bodies but may not meet criteria.'
            },
            {
                trap: 'Smart Cities Mission covers all major cities',
                clarity: 'Only 100 cities selected through competition. Many large cities not included. It\'s not universal coverage.'
            }
        ],

        revisionBox: {
            title: '⚡ 30-Second Revision',
            points: [
                'Urban: 31.16% (2011), 377 million, 7,935 towns',
                'Census town criteria: Pop ≥5000, Density ≥400, Non-agri ≥75%',
                '8 Mega cities: Mumbai, Delhi, Kolkata, Chennai, Bangalore, Hyderabad, Ahmedabad, Pune',
                '53 Metropolitan cities (1M+), 468 Class I cities (100K+)',
                'Slums: 65.5M (17.4%), Dharavi largest in Asia',
                'Most urbanized: Goa (62%), Least: HP (10%)',
                'Programs: Smart Cities (100), AMRUT (500), PMAY-Urban'
            ]
        },

        pyqs: [
            {
                year: 2021,
                question: 'Discuss the challenges of urbanization in India and the measures taken to address them.',
                type: 'Mains'
            },
            {
                year: 2020,
                question: 'What is the criteria for classifying a place as a Census Town in India?',
                type: 'Prelims'
            },
            {
                year: 2019,
                question: 'Examine the objectives and achievements of Smart Cities Mission.',
                type: 'Mains'
            }
        ]
    },

    // ============================================
    // TOPIC 6: SETTLEMENT TYPES
    // ============================================
    {
        id: 'settlement-types',
        name: 'Settlement Types',
        icon: '🏘️',
        category: 'human',
        theme: 'population',
        difficulty: 'easy',
        upscRelevance: 'medium',

        mindMap: {
            central: 'Settlements',
            branches: [
                {
                    name: 'Rural Settlements',
                    color: '#27AE60',
                    children: [
                        'Compact/Nucleated',
                        'Dispersed/Scattered',
                        'Semi-compact',
                        'Hamleted'
                    ]
                },
                {
                    name: 'Settlement Patterns',
                    color: '#3498DB',
                    children: [
                        'Linear (along roads/rivers)',
                        'Rectangular (grid)',
                        'Circular',
                        'Star-shaped'
                    ]
                },
                {
                    name: 'Urban Settlements',
                    color: '#E74C3C',
                    children: [
                        'Town, City, Metropolis',
                        'Conurbation',
                        'Megalopolis',
                        'Million+ cities'
                    ]
                },
                {
                    name: 'Factors',
                    color: '#F39C12',
                    children: [
                        'Water availability',
                        'Topography',
                        'Climate',
                        'Economic activities'
                    ]
                }
            ]
        },

        memoryHooks: [
            {
                type: 'mnemonic',
                title: 'Rural Settlement Types',
                content: 'CDSH = Compact, Dispersed, Semi-compact, Hamleted. "City Dwellers Seek Hamlets" - Compact is most common!',
                icon: '🏘️'
            },
            {
                type: 'comparison',
                title: 'Compact vs Dispersed',
                content: 'COMPACT = Houses CLOSE together (village square, water source, protection). DISPERSED = Houses SPREAD OUT (hilly areas, large farms). Think: Compact = Community, Dispersed = Distance.',
                icon: '🏠'
            },
            {
                type: 'story',
                title: 'Settlement Evolution',
                content: 'Village → Town → City → Metropolis → Megalopolis. Like a tree growing! Started near water (life), then roads (trade), then industry (jobs), then services (modern).',
                icon: '🌳'
            },
            {
                type: 'visual',
                title: 'Linear Settlements',
                content: 'Think of a NECKLACE along a river or road! Houses like beads on a string. Common along: Ganga banks, highways, canals. Easy to visualize!',
                icon: '📿'
            }
        ],

        conceptBlocks: [
            {
                title: 'Rural Settlement Types',
                icon: '🏘️',
                points: [
                    '🏘️ COMPACT/NUCLEATED SETTLEMENTS:',
                    '  • Houses clustered together',
                    '  • Common center (well, temple, market)',
                    '  • Found in: Fertile plains, river valleys',
                    '  • Examples: Indo-Gangetic Plain villages',
                    '  • Reasons: Water source, defense, social cohesion',
                    '',
                    '🏡 DISPERSED/SCATTERED SETTLEMENTS:',
                    '  • Houses spread apart',
                    '  • Each house with own land',
                    '  • Found in: Hilly areas, forests, large farms',
                    '  • Examples: Meghalaya, parts of Kerala',
                    '  • Reasons: Difficult terrain, large land holdings',
                    '',
                    '🏠 SEMI-COMPACT SETTLEMENTS:',
                    '  • Partially compact, partially spread',
                    '  • Transition type',
                    '  • Found in: Gujarat, Rajasthan plains',
                    '',
                    '🏚️ HAMLETED/FRAGMENTED:',
                    '  • Main village + small hamlets',
                    '  • Socially/occupationally segregated',
                    '  • Common in: Caste-based settlements',
                    '  • Examples: Some parts of UP, Bihar'
                ]
            },
            {
                title: 'Settlement Patterns (Shapes)',
                icon: '📐',
                points: [
                    '📏 LINEAR PATTERN:',
                    '  • Houses along a line (road, river, canal)',
                    '  • Single row or double row',
                    '  • Common along: Ganga, coastal areas, highways',
                    '  • Example: Settlements along NH-44',
                    '',
                    '🔲 RECTANGULAR/GRID PATTERN:',
                    '  • Right-angle street layout',
                    '  • Planned settlements',
                    '  • Common in: Plain areas, new towns',
                    '  • Example: Chandigarh (planned city)',
                    '',
                    '⭕ CIRCULAR PATTERN:',
                    '  • Houses around central feature',
                    '  • Lakes, tanks, open space at center',
                    '  • Common in: Tribal areas, around water bodies',
                    '',
                    '⭐ STAR-SHAPED PATTERN:',
                    '  • Growth along radiating roads',
                    '  • From central point outward',
                    '  • Common at: Road junctions',
                    '',
                    '🔶 T-SHAPED, Y-SHAPED:',
                    '  • At road intersections',
                    '  • Double or triple linear patterns meeting'
                ]
            },
            {
                title: 'Factors Affecting Settlements',
                icon: '⚙️',
                points: [
                    '💧 WATER AVAILABILITY:',
                    '  • Most crucial factor historically',
                    '  • River banks, springs, wells',
                    '  • Determines initial location',
                    '',
                    '⛰️ TOPOGRAPHY:',
                    '  • Flat land: Compact, rectangular',
                    '  • Hilly: Dispersed, along ridges',
                    '  • Flood-prone: Elevated sites',
                    '',
                    '🌡️ CLIMATE:',
                    '  • Moderate climate attracts',
                    '  • Extreme climates: Specialized housing',
                    '  • Affects building materials, spacing',
                    '',
                    '🌾 SOIL & AGRICULTURE:',
                    '  • Fertile soil attracts farmers',
                    '  • Agricultural land use determines spread',
                    '',
                    '🛣️ TRANSPORT & ACCESSIBILITY:',
                    '  • Roads, railways attract growth',
                    '  • Linear settlements along routes',
                    '',
                    '🛡️ DEFENSE (Historical):',
                    '  • Fortified settlements',
                    '  • Hilltop locations',
                    '  • Compact for protection',
                    '',
                    '👥 SOCIAL & CULTURAL:',
                    '  • Caste-based segregation (hamlets)',
                    '  • Religious centers',
                    '  • Market functions'
                ]
            },
            {
                title: 'Urban Settlement Hierarchy',
                icon: '🏙️',
                points: [
                    '🏘️ TOWN:',
                    '  • Larger than village',
                    '  • Non-agricultural functions',
                    '  • Market, administrative functions',
                    '  • Population: 5,000 - 100,000',
                    '',
                    '🏢 CITY:',
                    '  • Larger, more complex',
                    '  • Industrial, commercial, administrative',
                    '  • Population: 100,000 - 1,000,000',
                    '',
                    '🏛️ METROPOLITAN CITY:',
                    '  • Population: 1 million+',
                    '  • Major economic, cultural centers',
                    '  • India has 53 metros (2011)',
                    '',
                    '🏙️ MEGA CITY:',
                    '  • Population: 10 million+',
                    '  • Global significance',
                    '  • India has 8 mega cities',
                    '',
                    '🌆 CONURBATION:',
                    '  • Continuous urban spread',
                    '  • Multiple cities merging',
                    '  • Example: Mumbai-Pune, Delhi NCR',
                    '',
                    '🌐 MEGALOPOLIS:',
                    '  • Chain of metropolitan areas',
                    '  • Super-region',
                    '  • Example: US East Coast (Boston-Washington)'
                ]
            },
            {
                title: 'Site vs Situation',
                icon: '📍',
                points: [
                    '📍 SITE:',
                    '  • Actual ground on which settlement is built',
                    '  • Physical characteristics of location',
                    '  • Includes: Terrain, soil, drainage, climate',
                    '  • Local factors',
                    '',
                    '📍 SITUATION:',
                    '  • Location relative to surroundings',
                    '  • Relation to other places',
                    '  • Includes: Trade routes, resources, markets',
                    '  • Regional factors',
                    '',
                    '📋 EXAMPLES:',
                    '',
                    '🏛️ DELHI:',
                    '  • Site: Banks of Yamuna, flat terrain',
                    '  • Situation: Heart of Indo-Gangetic Plain, trade routes',
                    '',
                    '🌊 MUMBAI:',
                    '  • Site: Natural harbor, islands',
                    '  • Situation: Gateway to Western India, trade with West',
                    '',
                    '☕ BANGALORE:',
                    '  • Site: Deccan Plateau (1000m), moderate climate',
                    '  • Situation: Junction of southern routes',
                    '',
                    '📌 Site explains ORIGIN, Situation explains GROWTH'
                ]
            },
            {
                title: 'Rural-Urban Differences',
                icon: '🔄',
                points: [
                    '📊 POPULATION:',
                    '  • Rural: Smaller, dispersed',
                    '  • Urban: Larger, concentrated',
                    '',
                    '💼 OCCUPATION:',
                    '  • Rural: Primary (agriculture, fishing)',
                    '  • Urban: Secondary & Tertiary (industry, services)',
                    '',
                    '🏗️ INFRASTRUCTURE:',
                    '  • Rural: Basic, limited',
                    '  • Urban: Advanced, diverse',
                    '',
                    '🏠 HOUSING:',
                    '  • Rural: Kutcha/semi-pucca, spread out',
                    '  • Urban: Pucca, multi-storied, dense',
                    '',
                    '👥 SOCIAL STRUCTURE:',
                    '  • Rural: Homogeneous, traditional',
                    '  • Urban: Heterogeneous, modern',
                    '',
                    '🔄 RURAL-URBAN CONTINUUM:',
                    '  • Not sharp division',
                    '  • Gradual transition',
                    '  • Peri-urban areas',
                    '  • Rural areas urbanizing',
                    '',
                    '📌 CENSUS DEFINITION:',
                    '  • Urban: Statutory towns + Census towns',
                    '  • Rural: All other areas',
                    '  • Based on administrative + statistical criteria'
                ]
            }
        ],

        diagrams: [
            {
                title: 'Rural Settlement Types',
                type: 'diagram',
                description: 'Four settlement type diagrams: (1) Compact - houses clustered around center, (2) Dispersed - houses spread apart, (3) Semi-compact - loose clustering, (4) Hamleted - main village + small outlying hamlets.'
            },
            {
                title: 'Settlement Patterns',
                type: 'diagram',
                description: 'Pattern shapes: Linear (along river/road), Rectangular (grid), Circular (around pond), Star (radiating roads). Show bird\'s eye view of each pattern.'
            },
            {
                title: 'Urban Hierarchy Pyramid',
                type: 'pyramid',
                description: 'From bottom: Village → Town → City → Metropolis → Mega City → Megalopolis. Show population thresholds at each level.'
            },
            {
                title: 'Site vs Situation',
                type: 'comparison',
                description: 'Two diagrams: (1) SITE - close-up of settlement location (terrain, water, soil). (2) SITUATION - wider view showing relation to roads, cities, resources.'
            }
        ],

        quickFacts: [
            '🏘️ Compact settlements: Most common in India (Indo-Gangetic Plain)',
            '🏡 Dispersed settlements: Hills, forests, large farm areas',
            '📏 Linear pattern: Along rivers, roads, canals',
            '🔲 Rectangular: Planned settlements, new towns',
            '💧 Water: Most crucial factor for settlement location',
            '🏙️ 8 Mega cities, 53 Metros in India (Census 2011)',
            '🌆 Conurbation: Multiple cities merging (Delhi NCR)',
            '📍 Site = Physical location; Situation = Regional context',
            '🔄 Rural-Urban Continuum: Gradual transition, not sharp divide',
            '🏛️ Chandigarh: Example of planned rectangular settlement',
            '🏔️ Himalayan settlements: Often dispersed, linear along valleys',
            '🌊 Coastal settlements: Linear along shoreline'
        ],

        upscTraps: [
            {
                trap: 'All Indian villages are compact settlements',
                clarity: 'MOST are compact, but dispersed settlements exist in hilly areas (Meghalaya, Himachal) and large farm regions. Pattern varies by geography.'
            },
            {
                trap: 'Site and Situation mean the same',
                clarity: 'DIFFERENT! Site = actual physical location (terrain, soil). Situation = regional context (trade routes, surrounding areas). Site is local, Situation is regional.'
            },
            {
                trap: 'Linear settlements are only along rivers',
                clarity: 'Linear patterns along ANY linear feature: rivers, canals, roads, railways, coast. Any route can create linear settlement.'
            },
            {
                trap: 'Conurbation and Megalopolis are same',
                clarity: 'CONURBATION = Continuous urban area from merged cities. MEGALOPOLIS = Chain of separate metros forming super-region. Megalopolis is larger scale.'
            }
        ],

        revisionBox: {
            title: '⚡ 30-Second Revision',
            points: [
                'Rural types: Compact (most common), Dispersed (hills), Semi-compact, Hamleted',
                'Patterns: Linear (road/river), Rectangular (planned), Circular, Star',
                'Key factor: Water availability (historically most important)',
                'Site = Local physical features; Situation = Regional relations',
                'Urban hierarchy: Town → City → Metro (1M+) → Mega (10M+)',
                'Conurbation = Merged cities; Megalopolis = Chain of metros',
                'India: 8 mega cities, 53 metros, 7935 towns'
            ]
        },

        pyqs: [
            {
                year: 2020,
                question: 'Differentiate between compact and dispersed rural settlements with examples from India.',
                type: 'Mains'
            },
            {
                year: 2019,
                question: 'Explain the concepts of site and situation with reference to urban settlements.',
                type: 'Mains'
            },
            {
                year: 2018,
                question: 'What factors influence the pattern of rural settlements?',
                type: 'Mains'
            }
        ]
    }

];

// ============================================
// FINAL EXPORT - COMPLETE HUMAN DATA
// ============================================

// Make data available globally
window.humanData = humanData;

console.log('👥✅ Human Geography Data COMPLETE:', humanData.length, 'topics');
console.log('📚 Topics loaded:', humanData.map(t => t.name).join(', '));
