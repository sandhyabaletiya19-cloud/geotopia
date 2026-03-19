/* ============================================
   UPSC GEOGRAPHY LEARNING SYSTEM
   India Climate Data File - COMPREHENSIVE
   Topics: Indian Monsoon, Seasons, Western Disturbances,
           Rainfall Distribution, Tropical Cyclones, Floods & Droughts
   ============================================ */

const indiaClimateData = [

    // ============================================
    // TOPIC 1: INDIAN MONSOON MECHANISM
    // ============================================
    {
        id: 'indian-monsoon-mechanism',
        name: 'Indian Monsoon Mechanism',
        icon: '🌧️',
        category: 'india-climate',
        theme: 'monsoon',
        difficulty: 'hard',
        upscRelevance: 'very-high',

        mindMap: {
            central: 'Indian Monsoon',
            branches: [
                {
                    name: 'Classical Theory',
                    color: '#3498DB',
                    children: [
                        'Differential heating (land-sea)',
                        'Summer: Low pressure over land',
                        'Winter: High pressure over land',
                        'Pressure gradient drives winds',
                        'Coriolis deflection'
                    ]
                },
                {
                    name: 'Modern Theories',
                    color: '#E74C3C',
                    children: [
                        'Jet Stream Theory',
                        'Tibetan Plateau heating',
                        'ITCZ shift (Monsoon Trough)',
                        'Somali Jet (Low Level)',
                        'El Niño-La Niña influence'
                    ]
                },
                {
                    name: 'SW Monsoon',
                    color: '#2ECC71',
                    children: [
                        'June-September',
                        'Arabian Sea branch',
                        'Bay of Bengal branch',
                        '75% of annual rainfall',
                        'Onset: Kerala (June 1)'
                    ]
                },
                {
                    name: 'NE Monsoon',
                    color: '#9B59B6',
                    children: [
                        'October-December',
                        'Retreating monsoon',
                        'Tamil Nadu rainfall',
                        'Cyclonic activity',
                        'Winter rains (North India)'
                    ]
                }
            ]
        },

        memoryHooks: [
            {
                type: 'mnemonic',
                title: 'Monsoon Onset Dates',
                content: 'Kerala = June 1, Mumbai = June 10, Delhi = June 25-30. Remember: "KMD = 1-10-25" (Kerala-Mumbai-Delhi)',
                icon: '📅'
            },
            {
                type: 'story',
                title: 'Why Monsoon Comes',
                content: 'Summer: India becomes a HOT OVEN → Air rises → Creates VACUUM → Ocean winds rush in (SW Monsoon). Winter: India cools → Dense air sinks → Blows OUTWARD to ocean (NE Monsoon).',
                icon: '🌡️'
            },
            {
                type: 'acronym',
                title: 'Factors Affecting Monsoon',
                content: 'JETSET = Jet streams, El Niño, Tibetan heating, Somali jet, ENSO, Temperature gradient',
                icon: '🔤'
            },
            {
                type: 'comparison',
                title: 'Two Branches Memory',
                content: 'Arabian Sea Branch = WESTERN GHATS first (windward). Bay of Bengal = NORTHEAST first (Meghalaya). Think: "Arabs go West, Bengalis go East"',
                icon: '🌊'
            },
            {
                type: 'visual',
                title: 'Monsoon Trough Position',
                content: 'Trough position = Rainfall location. Trough near Himalayas = Good rains. Trough goes to ocean = Break in monsoon (dry spell).',
                icon: '📉'
            }
        ],

        conceptBlocks: [
            {
                title: 'Classical Theory (Thermal Concept)',
                icon: '🌡️',
                points: [
                    '🔥 DIFFERENTIAL HEATING MECHANISM:',
                    '  • Land heats faster than sea (low specific heat)',
                    '  • Land cools faster than sea (same reason)',
                    '',
                    '☀️ SUMMER (SW Monsoon):',
                    '  • Indian landmass intensely heated',
                    '  • Low pressure zone develops over NW India (Thar region)',
                    '  • High pressure over Indian Ocean (cooler)',
                    '  • Pressure gradient: Ocean → Land',
                    '  • SE Trade Winds cross equator',
                    '  • Coriolis deflection turns them SW (in Northern Hemisphere)',
                    '  • Result: Southwest Monsoon winds',
                    '',
                    '❄️ WINTER (NE Monsoon):',
                    '  • Land cools rapidly',
                    '  • High pressure over NW India & Central Asia',
                    '  • Low pressure over warm Indian Ocean',
                    '  • Winds blow Land → Sea (NE direction)',
                    '  • Dry winds (come from land)',
                    '  • Exception: Tamil Nadu gets rain (Bay of Bengal moisture)',
                    '',
                    '⚠️ LIMITATIONS OF CLASSICAL THEORY:',
                    '  • Cannot explain sudden onset/burst',
                    '  • Cannot explain breaks in monsoon',
                    '  • Ignores upper atmosphere dynamics',
                    '  • Modern theories needed for complete picture'
                ]
            },
            {
                title: 'Jet Stream Theory (Modern)',
                icon: '✈️',
                points: [
                    '💨 WHAT ARE JET STREAMS:',
                    '  • High-altitude (9-12 km) fast winds (150-300 km/hr)',
                    '  • Flow west to east (in mid-latitudes)',
                    '  • Two types relevant: Subtropical Westerly Jet (STJ) & Tropical Easterly Jet (TEJ)',
                    '',
                    '❄️ WINTER POSITION:',
                    '  • STJ splits due to Himalayan barrier',
                    '  • Northern branch: North of Himalayas (over Tibet)',
                    '  • Southern branch: South of Himalayas (over N. India at 25°N)',
                    '  • Southern STJ brings Western Disturbances',
                    '  • Maintains HIGH PRESSURE over India',
                    '  • Result: Dry, cold NE monsoon',
                    '',
                    '☀️ SUMMER SHIFT (Key to SW Monsoon):',
                    '  • Tibetan Plateau heats up (acts as elevated heat source)',
                    '  • Southern STJ weakens and shifts NORTH of Himalayas',
                    '  • This removes "blocking" effect',
                    '  • Creates LOW PRESSURE over NW India',
                    '  • Allows SW monsoon winds to rush in',
                    '',
                    '🌴 TROPICAL EASTERLY JET (TEJ):',
                    '  • Forms at ~15 km altitude over peninsular India',
                    '  • Flows EAST to WEST (opposite to STJ)',
                    '  • Develops due to Tibetan high pressure',
                    '  • Strengthens SW monsoon',
                    '  • Strong TEJ = Good monsoon',
                    '',
                    '🔑 KEY INSIGHT:',
                    '  • Sudden withdrawal of STJ from south = Burst of monsoon',
                    '  • Not gradual - hence "onset" is sudden',
                    '  • This explains why monsoon "bursts" over Kerala suddenly'
                ]
            },
            {
                title: 'Somali Jet & ITCZ Shift',
                icon: '🌊',
                points: [
                    '💨 SOMALI JET (Low Level Jet):',
                    '  • Strong low-level wind (1-2 km altitude)',
                    '  • Flows from East Africa (Somalia) to India',
                    '  • Speed: 40-50 km/hr (can reach 100 km/hr)',
                    '  • Brings moisture from Arabian Sea',
                    '  • Responsible for "burst" of monsoon',
                    '',
                    '🔄 WHY SOMALI JET FORMS:',
                    '  • Strong pressure gradient (East African high → Indian low)',
                    '  • East African coast upwelling cools water',
                    '  • Temperature contrast intensifies jet',
                    '  • Cross-equatorial flow (Southern → Northern Hemisphere)',
                    '',
                    '📍 ITCZ (Inter-Tropical Convergence Zone):',
                    '  • Zone where NE & SE trade winds meet',
                    '  • Also called "Monsoon Trough" over India',
                    '  • ITCZ position shifts seasonally',
                    '',
                    '📅 ITCZ MIGRATION:',
                    '  • Winter (Jan): ITCZ at equator/south of equator',
                    '  • Summer (June-July): ITCZ shifts to 25°N over India',
                    '  • Reaches Ganga Plains (Monsoon Trough)',
                    '  • This northward shift "pulls" SW monsoon',
                    '',
                    '⚡ MONSOON TROUGH POSITION:',
                    '  • Normal position: Foot of Himalayas',
                    '  • Trough at foothills = Active monsoon, good rains',
                    '  • Trough shifts to Bay of Bengal = Break in monsoon',
                    '  • Break condition: NW India gets excess, rest gets deficit'
                ]
            },
            {
                title: 'Southwest Monsoon Branches',
                icon: '🌧️',
                points: [
                    '🌊 ARABIAN SEA BRANCH:',
                    '  • More powerful (longer sea journey = more moisture)',
                    '  • Hits Western Ghats first',
                    '  • WINDWARD SIDE (west): Heavy rainfall (3000-5000 mm)',
                    '    - Mumbai, Konkan, Malabar Coast',
                    '  • LEEWARD SIDE (east): Rain shadow, dry',
                    '    - Bangalore, Deccan Plateau interior',
                    '  • Sub-branch goes to Narmada-Tapi valleys',
                    '  • Another sub-branch curves to NW India (weak)',
                    '',
                    '🌊 BAY OF BENGAL BRANCH:',
                    '  • Strikes NE India first (Meghalaya)',
                    '  • MEGHALAYA HILLS block winds:',
                    '    - Mawsynram: 11,872 mm (wettest place on Earth)',
                    '    - Cherrapunji: 11,777 mm (2nd wettest)',
                    '  • Funnel shape of Bay of Bengal concentrates moisture',
                    '  • Continues up Ganga valley',
                    '  • Rainfall decreases westward:',
                    '    - Kolkata: 1600 mm',
                    '    - Patna: 1200 mm',
                    '    - Allahabad: 1000 mm',
                    '    - Delhi: 600 mm',
                    '  • Branch deflected by Himalayas → moves westward',
                    '  • Reaches Punjab, Haryana (June end)',
                    '',
                    '📅 PROGRESSION DATES:',
                    '  • Kerala: June 1 (±7 days)',
                    '  • Mumbai: June 10',
                    '  • Kolkata: June 7',
                    '  • Delhi: June 25-30',
                    '  • Entire India covered: July 15',
                    '',
                    '🔙 WITHDRAWAL:',
                    '  • Begins: September 1 (from NW India)',
                    '  • NW India: September 1',
                    '  • Central India: October 1',
                    '  • Complete withdrawal: Mid-October',
                    '  • Tamil Nadu: Still gets rain (NE monsoon starts)'
                ]
            },
            {
                title: 'Factors Affecting Monsoon',
                icon: '⚙️',
                points: [
                    '🌡️ EL NIÑO EFFECT (Negative for Monsoon):',
                    '  • Warming of Pacific Ocean (Peru coast)',
                    '  • Reduces pressure difference (Pacific-Indian Ocean)',
                    '  • Weakens Trade Winds',
                    '  • Walker Circulation weakens',
                    '  • Result: WEAK/DEFICIENT monsoon in India',
                    '  • Drought years: 1987, 2002, 2009, 2015 (El Niño years)',
                    '',
                    '🌊 LA NIÑA EFFECT (Positive for Monsoon):',
                    '  • Cooling of Pacific Ocean',
                    '  • Strengthens pressure difference',
                    '  • Intensifies Trade Winds',
                    '  • Result: NORMAL/EXCESS monsoon',
                    '  • Flood years often La Niña years',
                    '',
                    '🌀 INDIAN OCEAN DIPOLE (IOD):',
                    '  • Positive IOD: Western Indian Ocean warmer',
                    '    - Good for Indian monsoon',
                    '  • Negative IOD: Eastern Indian Ocean warmer',
                    '    - Bad for Indian monsoon',
                    '  • IOD can counteract El Niño sometimes',
                    '  • 2019: El Niño + Positive IOD = Normal monsoon',
                    '',
                    '🏔️ TIBETAN PLATEAU:',
                    '  • Acts as elevated heat source (4500m altitude)',
                    '  • Creates upper level HIGH PRESSURE in summer',
                    '  • This high drives TEJ',
                    '  • Snow cover affects: More snow = delayed monsoon',
                    '',
                    '❄️ EURASIAN SNOW COVER:',
                    '  • Heavy snow in winter = Weak monsoon (Blanford\'s theory)',
                    '  • Snow reflects sunlight, keeps land cool',
                    '  • Less heating = Weaker low pressure',
                    '  • Delayed/weak monsoon',
                    '',
                    '📊 UPSC IMPORTANT CORRELATIONS:',
                    '  • El Niño = Drought in India',
                    '  • La Niña = Floods in India (usually)',
                    '  • Positive IOD = Good monsoon',
                    '  • Strong TEJ = Good monsoon'
                ]
            },
            {
                title: 'Monsoon Breaks & Variability',
                icon: '📉',
                points: [
                    '⏸️ BREAK IN MONSOON:',
                    '  • Temporary halt in rainfall during monsoon season',
                    '  • Lasts 1-3 weeks typically',
                    '  • Causes distress to agriculture (Kharif crops)',
                    '',
                    '🔍 CAUSES OF BREAK:',
                    '  • Monsoon trough shifts to foot of Himalayas OR Bay of Bengal',
                    '  • When trough at Himalayas: Excess rain in NE, dry in rest',
                    '  • When trough over Bay: Entire north dry',
                    '  • Weak Tropical Easterly Jet',
                    '  • Absence of low-pressure systems in Bay',
                    '',
                    '📊 SPATIAL VARIABILITY:',
                    '  • Western Ghats: 3000-5000 mm (windward)',
                    '  • NE India: 2000-11000 mm',
                    '  • Ganga Plains: 1000-1500 mm',
                    '  • Western Rajasthan: <250 mm',
                    '  • Rain shadow: Deccan interior (500-750 mm)',
                    '',
                    '📅 TEMPORAL VARIABILITY:',
                    '  • Year-to-year fluctuation: ±10% of normal',
                    '  • Deficient year: <90% of Long Period Average (LPA)',
                    '  • Excess year: >110% of LPA',
                    '  • Normal year: 96-104% of LPA',
                    '  • LPA (1971-2020): 87 cm (870 mm)',
                    '',
                    '🌾 AGRICULTURAL IMPACT:',
                    '  • 60% of India\'s agriculture is rain-fed',
                    '  • Monsoon failure = Food crisis',
                    '  • Break in monsoon during flowering = Crop loss',
                    '  • GDP correlation: 1% monsoon deficit = 0.5% GDP loss (approx.)'
                ]
            }
        ],

        diagrams: [
            {
                title: 'Southwest Monsoon Mechanism',
                type: 'map-diagram',
                description: 'Map of India showing: (1) Low pressure over NW India (Thar), (2) High pressure over Indian Ocean, (3) Two branches - Arabian Sea (hitting Western Ghats) and Bay of Bengal (entering NE India), (4) Arrows showing wind direction, (5) Rainfall amounts at key cities.'
            },
            {
                title: 'Jet Stream Positions',
                type: 'comparison-chart',
                description: 'Two diagrams - Winter (STJ south of Himalayas, blocking monsoon) vs Summer (STJ north of Himalayas + TEJ over peninsula, allowing monsoon). Show altitude 9-12 km.'
            },
            {
                title: 'Monsoon Onset Progression',
                type: 'map',
                description: 'India map with isochrones (lines of equal onset dates): June 1 at Kerala, June 10 at Mumbai, June 15 at Central India, June 25-30 at Delhi, July 15 covers all India. Show both branches advancing.'
            },
            {
                title: 'El Niño vs La Niña Impact',
                type: 'comparison-chart',
                description: 'Pacific Ocean diagram showing: (1) Normal conditions, (2) El Niño (warm water east, weak monsoon in India), (3) La Niña (cold water east, strong monsoon). Use arrows for Walker Circulation.'
            },
            {
                title: 'Monsoon Trough & Break',
                type: 'cross-section',
                description: 'Cross-section from Himalayas to Bay of Bengal showing: (1) Normal trough position at Himalayan foothills (good rain), (2) Trough shifted to Bay (break condition). Label rain areas.'
            },
            {
                title: 'Rainfall Distribution Map',
                type: 'map',
                description: 'India map with rainfall zones: >2000mm (NE, Western Ghats - dark blue), 1000-2000mm (Ganga plains - light blue), 500-1000mm (Deccan - yellow), <500mm (Thar - orange).'
            }
        ],

        quickFacts: [
            '📅 SW Monsoon: June 1 (Kerala) → July 15 (entire India) | Withdrawal: Sep 1 → Oct 15',
            '💧 SW Monsoon gives 75% of India\'s annual rainfall',
            '🌧️ Mawsynram (Meghalaya): 11,872 mm - Wettest place on Earth',
            '🏜️ Jaisalmer (Rajasthan): <100 mm - Driest in India',
            '✈️ STJ shift north of Himalayas = Monsoon onset trigger',
            '🌊 Somali Jet: Low-level jet bringing moisture burst',
            '📍 ITCZ/Monsoon Trough at Himalayan foothills = Good rains',
            '🔴 El Niño years: 1987, 2002, 2009, 2015 - Drought years',
            '🟢 La Niña = Usually good monsoon for India',
            '📊 Long Period Average (LPA): 87 cm (870 mm) annual rainfall',
            '🌾 60% of Indian agriculture is rain-fed (monsoon dependent)',
            '⚡ Arabian Sea branch: More powerful (hits Western Ghats)',
            '🔄 Bay of Bengal branch: Reaches Meghalaya, then moves westward'
        ],

        upscTraps: [
            {
                trap: 'Monsoon winds blow from SW because India is hotter',
                clarity: 'Partially correct but INCOMPLETE. Classical thermal theory explains direction, but JET STREAM shift is the TRIGGER for onset. STJ moving north of Himalayas allows monsoon to burst. Both factors work together.'
            },
            {
                trap: 'Arabian Sea branch is weaker because it comes from smaller sea',
                clarity: 'WRONG! Arabian Sea branch is STRONGER because it has LONGER sea journey over warm Arabian Sea, picks up MORE moisture. Bay of Bengal branch has shorter sea journey. Arabian Sea branch brings more rain to Western Ghats.'
            },
            {
                trap: 'El Niño always causes drought in India',
                clarity: 'USUALLY but not ALWAYS! Indian Ocean Dipole (IOD) can counteract El Niño. Example: 2019 had El Niño but Positive IOD gave normal monsoon. Always mention IOD as modifying factor.'
            },
            {
                trap: 'NE monsoon is dry for entire India',
                clarity: 'WRONG! NE monsoon brings significant rain to TAMIL NADU (60% of its annual rainfall). Bay of Bengal branch picks up moisture and hits Tamil Nadu coast. Rest of India is dry, but TN gets rain.'
            },
            {
                trap: 'Monsoon trough and ITCZ are different things',
                clarity: 'Over India, Monsoon Trough IS the northward-shifted ITCZ. ITCZ at equator is general; when it shifts to 25°N over India in summer, it\'s called Monsoon Trough. Same phenomenon, different name over India.'
            }
        ],

        revisionBox: {
            title: '⚡ 30-Second Revision',
            points: [
                'Classical Theory: Differential heating → Low P over land → Ocean winds rush in',
                'Modern: STJ shifts north of Himalayas (trigger) + TEJ forms + Somali Jet brings moisture',
                'SW Monsoon (June-Sep): 75% rainfall, Two branches (Arabian Sea & Bay of Bengal)',
                'Arabian Sea = Western Ghats first, Bay of Bengal = NE first then westward',
                'Onset: Kerala June 1 → Mumbai June 10 → Delhi June 25 → All India July 15',
                'Factors: El Niño (bad), La Niña (good), IOD (+ good, - bad), Tibetan heating',
                'Break: Trough shifts to Bay → Dry spell in most of India',
                'NE Monsoon (Oct-Dec): Tamil Nadu gets 60% of its rain, rest of India dry'
            ]
        },

        pyqs: [
            {
                year: 2023,
                question: 'Discuss the role of Tibetan Plateau in influencing the Indian monsoon.',
                type: 'Mains'
            },
            {
                year: 2022,
                question: 'Explain the mechanism of Indian monsoon with reference to Jet Stream theory.',
                type: 'Mains'
            },
            {
                year: 2021,
                question: 'How does El Niño Southern Oscillation (ENSO) affect Indian monsoon?',
                type: 'Mains'
            },
            {
                year: 2020,
                question: 'The monsoon trough position determines the rainfall pattern. Explain.',
                type: 'Mains'
            },
            {
                year: 2019,
                question: 'What is Indian Ocean Dipole? How does it affect monsoon?',
                type: 'Mains'
            },
            {
                year: 2018,
                question: 'Mawsynram receives highest rainfall in India because of:',
                type: 'Prelims',
                options: ['Arabian Sea branch', 'Bay of Bengal branch funneling', 'Western Disturbances', 'Cyclonic activity']
            },
            {
                year: 2017,
                question: 'Explain the concept of "break in monsoon" and its causes.',
                type: 'Mains'
            }
        ]
    },

    // ============================================
    // TOPIC 2: MONSOON SEASONS OF INDIA
    // ============================================
    {
        id: 'monsoon-seasons',
        name: 'Seasons of India',
        icon: '🗓️',
        category: 'india-climate',
        theme: 'monsoon',
        difficulty: 'medium',
        upscRelevance: 'high',

        mindMap: {
            central: 'Indian Seasons',
            branches: [
                {
                    name: 'Winter (Dec-Feb)',
                    color: '#3498DB',
                    children: [
                        'Cold weather season',
                        'NE monsoon winds',
                        'Western Disturbances',
                        'Mahawat/Mango showers',
                        'Frost in North India'
                    ]
                },
                {
                    name: 'Summer (Mar-May)',
                    color: '#E74C3C',
                    children: [
                        'Hot weather season',
                        'Loo winds (NW India)',
                        'Nor\'westers (Bengal)',
                        'Pre-monsoon showers',
                        'Heat waves'
                    ]
                },
                {
                    name: 'SW Monsoon (Jun-Sep)',
                    color: '#2ECC71',
                    children: [
                        'Advancing monsoon',
                        'Rainy season',
                        'Kharif crops',
                        '75% annual rainfall',
                        'Monsoon breaks'
                    ]
                },
                {
                    name: 'Retreating (Oct-Nov)',
                    color: '#9B59B6',
                    children: [
                        'Post-monsoon',
                        'October heat',
                        'Cyclones (Bay of Bengal)',
                        'NE monsoon begins',
                        'Tamil Nadu rains'
                    ]
                }
            ]
        },

        memoryHooks: [
            {
                type: 'mnemonic',
                title: 'Season Months',
                content: 'Winter-Summer-Rainy-Retreat = WSRR. "We Study Rain Regularly" = Dec-Feb, Mar-May, Jun-Sep, Oct-Nov',
                icon: '📅'
            },
            {
                type: 'acronym',
                title: 'Summer Weather Phenomena',
                content: 'LAN = Loo, Andhis, Nor\'westers. Hot winds that define Indian summer!',
                icon: '🔤'
            },
            {
                type: 'story',
                title: 'Pre-Monsoon Showers Names',
                content: 'Mango Showers (South India) = Ripen mangoes. Cherry Blossoms (Karnataka) = Coffee flowers. Nor\'westers/Kalbaisakhi (Bengal) = Storm in Baisakh (April). Each region has local name!',
                icon: '🥭'
            },
            {
                type: 'visual',
                title: 'October Heat',
                content: 'Monsoon retreats → Land still moist → High humidity + High temperature = Oppressive "October Heat". Like a steam bath!',
                icon: '🌡️'
            }
        ],

        conceptBlocks: [
            {
                title: 'Winter Season (December-February)',
                icon: '❄️',
                points: [
                    '🌡️ TEMPERATURE CONDITIONS:',
                    '  • North India: 10-15°C (Plains), below 0°C (Himalayas)',
                    '  • South India: 24-25°C (minimal variation)',
                    '  • Temperature decreases from South to North',
                    '  • December-January coldest months',
                    '',
                    '💨 WIND PATTERN:',
                    '  • NE Trade Winds (Retreating Monsoon)',
                    '  • High pressure over NW India (Siberian influence)',
                    '  • Winds blow from land to sea (dry)',
                    '  • Clear skies, low humidity in most areas',
                    '',
                    '🌧️ WESTERN DISTURBANCES:',
                    '  • Low pressure systems from Mediterranean Sea',
                    '  • Travel eastward across Iran, Afghanistan, Pakistan',
                    '  • Bring winter rainfall to N. India',
                    '  • RABI CROP LIFELINE (wheat needs this)',
                    '  • 5-10 WDs occur each winter',
                    '  • Cause snowfall in Himalayas',
                    '',
                    '🌾 AGRICULTURAL IMPORTANCE:',
                    '  • Rabi crop season: Wheat, barley, gram, mustard',
                    '  • "Mahawat" (winter rain): Crucial for wheat in Punjab, Haryana',
                    '  • Clear skies good for crop maturation',
                    '',
                    '📍 REGIONAL VARIATIONS:',
                    '  • Kashmir: Heavy snowfall, sub-zero temperatures',
                    '  • Punjab-Haryana: Fog, frost, occasional rain',
                    '  • Central India: Cool, dry, pleasant',
                    '  • Tamil Nadu: NE monsoon rains continue',
                    '  • Kerala: Dry, pleasant'
                ]
            },
            {
                title: 'Summer Season (March-May)',
                icon: '☀️',
                points: [
                    '🌡️ TEMPERATURE CONDITIONS:',
                    '  • Rapid temperature increase',
                    '  • March: 30-35°C in Central India',
                    '  • April: 35-40°C across North & Central',
                    '  • May: 40-48°C in NW India (peak heat)',
                    '  • Highest: Churu (Rajasthan), Ganganagar recorded 50°C+',
                    '  • South India: 30-35°C (coastal moderation)',
                    '',
                    '💨 LOO (Hot Winds):',
                    '  • Hot, dry, dusty winds',
                    '  • Blow in afternoon across NW India & Ganga plains',
                    '  • Temperature: 45-50°C sometimes',
                    '  • Direction: West/NW to East',
                    '  • Affects: Punjab, Haryana, UP, Delhi, Rajasthan',
                    '  • Health hazard: Heatstroke, dehydration',
                    '',
                    '🌪️ DUST STORMS (ANDHIS):',
                    '  • Common in May-June',
                    '  • Occur in evening, bring temporary relief',
                    '  • Visibility drops drastically',
                    '  • Followed by light rain sometimes',
                    '  • Most common: UP, Rajasthan, Delhi',
                    '',
                    '⛈️ NOR\'WESTERS (KALBAISAKHI):',
                    '  • Violent thunderstorms in Eastern India',
                    '  • April-May, late afternoon/evening',
                    '  • "Kal" = destruction, "Baisakhi" = month Baisakh (April)',
                    '  • Winds: 60-80 km/hr, heavy rain, hail',
                    '  • Beneficial: Tea gardens of Assam, Jute in Bengal',
                    '  • Cause: Convergence of moist Bay of Bengal air with dry air',
                    '',
                    '🥭 PRE-MONSOON SHOWERS:',
                    '  • MANGO SHOWERS: Kerala, Karnataka coast (April-May)',
                    '    - Help ripen mangoes, hence name',
                    '    - Also called "Cherry Blossoms" (help coffee flowering)',
                    '  • BLOSSOM SHOWERS: Karnataka (help coffee)',
                    '  • Convective rainfall: Local heating causes afternoon showers'
                ]
            },
            {
                title: 'SW Monsoon Season (June-September)',
                icon: '🌧️',
                points: [
                    '📅 ONSET & ADVANCE:',
                    '  • Onset: Kerala - June 1 (±7 days)',
                    '  • Burst phenomenon: Sudden, heavy rains',
                    '  • Advance: Takes 45 days to cover entire India',
                    '  • Entire India: By July 15',
                    '',
                    '💧 RAINFALL CHARACTERISTICS:',
                    '  • 75% of annual rainfall received',
                    '  • Continuous rain for days in coastal areas',
                    '  • Interior: Intermittent, with breaks',
                    '  • Types: Orographic (Western Ghats), Cyclonic (Bay depressions)',
                    '',
                    '🌾 KHARIF CROPS:',
                    '  • Main cropping season (June-October)',
                    '  • Rice, maize, cotton, sugarcane, pulses, oilseeds',
                    '  • Sowing: June-July (with monsoon onset)',
                    '  • Harvesting: October-November',
                    '',
                    '⏸️ BREAKS IN MONSOON:',
                    '  • Temporary cessation of rainfall',
                    '  • Duration: Few days to 3 weeks',
                    '  • Cause: Monsoon trough shifts position',
                    '  • Impact: Crop damage, drought-like conditions',
                    '',
                    '🌀 MONSOON DEPRESSIONS:',
                    '  • Low pressure systems in Bay of Bengal',
                    '  • Form and move westward across India',
                    '  • Bring widespread rainfall to central India',
                    '  • 5-6 depressions form each monsoon',
                    '',
                    '📊 RAINFALL DISTRIBUTION:',
                    '  • Western Ghats: 3000-5000 mm',
                    '  • NE India: 2000-11000 mm',
                    '  • Ganga Plains: 1000-1500 mm',
                    '  • NW India: 250-500 mm'
                ]
            },
            {
                title: 'Retreating Monsoon (October-November)',
                icon: '🍂',
                points: [
                    '🔙 MONSOON WITHDRAWAL:',
                    '  • Begins: September 1 from NW India (Rajasthan)',
                    '  • Gradual retreat southward',
                    '  • Complete withdrawal: Mid-October (except Tamil Nadu)',
                    '  • Clear skies return, humidity drops',
                    '',
                    '🌡️ OCTOBER HEAT:',
                    '  • High temperature + High humidity',
                    '  • Land still wet from monsoon',
                    '  • Oppressive, uncomfortable weather',
                    '  • "Indian Summer" feeling',
                    '  • Occurs mainly in North & Central India',
                    '  • Also called "Kwartha" in local areas',
                    '',
                    '🌀 CYCLONIC ACTIVITY:',
                    '  • Bay of Bengal cyclones peak (Oct-Nov)',
                    '  • Conditions favorable: Warm sea, low wind shear',
                    '  • Affect: Odisha, Andhra Pradesh, West Bengal, Tamil Nadu',
                    '  • Devastating cyclones: Fani (2019), Amphan (2020), Hudhud (2014)',
                    '',
                    '🌧️ NE MONSOON ONSET:',
                    '  • NE winds begin (land to sea)',
                    '  • Dry for most of India',
                    '  • EXCEPTION: Tamil Nadu coast',
                    '  • Tamil Nadu gets 50-60% of annual rainfall now',
                    '  • Reason: NE winds cross Bay of Bengal, pick moisture',
                    '',
                    '📅 TRANSITION PERIOD:',
                    '  • Variable weather',
                    '  • Some thunderstorm activity',
                    '  • Temperature starts dropping in North',
                    '  • South remains warm'
                ]
            },
            {
                title: 'NE Monsoon & Regional Variations',
                icon: '🌬️',
                points: [
                    '🌧️ NORTHEAST MONSOON (Oct-Dec):',
                    '  • Also called "Retreating Monsoon" or "Winter Monsoon"',
                    '  • Wind direction: NE to SW (land to sea)',
                    '  • Generally dry for most of India',
                    '',
                    '📍 TAMIL NADU RAINFALL:',
                    '  • 50-60% of annual rainfall from NE monsoon',
                    '  • NE winds cross Bay of Bengal → Gain moisture',
                    '  • Coromandel Coast (Chennai-Nagapattinam) gets maximum',
                    '  • October-December: Main rainy season',
                    '  • Chennai: ~800 mm in this season',
                    '  • Reason SW monsoon gave less: In rain shadow of Western Ghats',
                    '',
                    '🌀 CYCLONE SEASON:',
                    '  • Peak cyclone months: October-November',
                    '  • Bay of Bengal: 5-6 cyclones per year',
                    '  • Arabian Sea: 1-2 cyclones per year',
                    '  • Bay more cyclone-prone (warmer, fresher water)',
                    '',
                    '📊 REGIONAL VARIATIONS SUMMARY:',
                    '  • NW INDIA: Hot summer, cold winter, low rainfall (desert)',
                    '  • NE INDIA: High rainfall all year, mild temperature',
                    '  • WESTERN GHATS: Heavy SW monsoon, dry NE monsoon',
                    '  • TAMIL NADU: SW monsoon dry, NE monsoon wet',
                    '  • KERALA: Both monsoons bring rain',
                    '  • CENTRAL INDIA: Moderate monsoon, extreme temperatures',
                    '',
                    '❄️ WINTER IN HILLS:',
                    '  • Himalayas: Heavy snowfall (Western Disturbances)',
                    '  • Kashmir: Chillai Kalan (40-day severe cold)',
                    '  • North-East: Moderate cold, some rain'
                ]
            }
        ],

        diagrams: [
            {
                title: 'Four Seasons of India',
                type: 'circular-chart',
                description: 'Circular diagram divided into 4 seasons: Winter (Dec-Feb, blue), Summer (Mar-May, red), SW Monsoon (Jun-Sep, green), Retreating (Oct-Nov, purple). Show key characteristics of each.'
            },
            {
                title: 'Temperature Variation Across Seasons',
                type: 'line-graph',
                description: 'Graph showing temperature variation for Delhi, Mumbai, Chennai across 12 months. Delhi: High variation (5-45°C), Chennai: Low variation (25-38°C), Mumbai: Moderate.'
            },
            {
                title: 'Western Disturbances Path',
                type: 'map',
                description: 'Map showing WD origin in Mediterranean, path across Iran-Afghanistan-Pakistan, entering India from NW. Mark areas of rainfall influence: J&K, Himachal, Punjab, Haryana.'
            },
            {
                title: 'Pre-Monsoon Phenomena Map',
                type: 'map',
                description: 'India map marking: Loo winds (NW arrows), Andhis (UP-Rajasthan), Nor\'westers (Bengal-Odisha), Mango Showers (Kerala-Karnataka coast).'
            },
            {
                title: 'NE Monsoon Rainfall',
                type: 'map',
                description: 'Map showing NE monsoon wind direction (NE to SW), Bay of Bengal moisture pickup, Tamil Nadu coast rainfall (dark shading). Compare with SW monsoon shadow effect.'
            },
            {
                title: 'Cyclone Frequency by Month',
                type: 'bar-chart',
                description: 'Bar chart showing monthly cyclone frequency in Bay of Bengal and Arabian Sea. Peak in May-June (pre-monsoon) and October-November (post-monsoon). Bay of Bengal higher than Arabian Sea.'
            }
        ],

        quickFacts: [
            '🗓️ 4 Seasons: Winter (Dec-Feb), Summer (Mar-May), SW Monsoon (Jun-Sep), Retreating (Oct-Nov)',
            '❄️ Coldest months: December-January | Hottest: May-June',
            '🌡️ Highest temp: Churu, Ganganagar (50°C+) | Lowest: Dras, Leh (-40°C)',
            '💨 Loo: Hot dry winds of NW India (May-June), temperature 45-50°C',
            '⛈️ Nor\'westers/Kalbaisakhi: Violent storms in Bengal (April-May)',
            '🥭 Mango Showers: Pre-monsoon Kerala-Karnataka (April-May)',
            '🌧️ Western Disturbances: 5-10 per winter, crucial for Rabi crops',
            '🌡️ October Heat: High temp + humidity after monsoon withdrawal',
            '🌀 Cyclone peak: May-June (pre) and Oct-Nov (post-monsoon)',
            '📍 Tamil Nadu: 60% rain from NE monsoon (Oct-Dec), opposite to rest of India',
            '🌾 Kharif (Jun-Oct): Rice, cotton | Rabi (Nov-Mar): Wheat, mustard',
            '❄️ Chillai Kalan: 40-day severe cold in Kashmir (Dec 21 - Jan 31)'
        ],

        upscTraps: [
            {
                trap: 'All of India experiences 4 distinct seasons',
                clarity: 'FALSE! Only North & Central India have 4 distinct seasons. South India has minimal temperature variation. NE India has unique pattern. Coastal areas have maritime climate with less seasonal variation.'
            },
            {
                trap: 'NE monsoon brings no rainfall',
                clarity: 'WRONG! NE monsoon brings 50-60% of Tamil Nadu\'s rainfall. NE winds cross Bay of Bengal, pick moisture, and hit Coromandel Coast. Also brings some rain to Kerala, Andhra coast.'
            },
            {
                trap: 'Nor\'westers are destructive and only harmful',
                clarity: 'PARTIALLY WRONG! While destructive (damage property, crops), Nor\'westers are BENEFICIAL for: (1) Tea gardens of Assam, (2) Jute cultivation in Bengal, (3) Early rice sowing. Called "Bardoli Chheerha" in Assam.'
            },
            {
                trap: 'Western Disturbances originate from Atlantic Ocean',
                clarity: 'WRONG ORIGIN! WDs originate from MEDITERRANEAN SEA, travel across Iran-Afghanistan-Pakistan, enter India from NW. They\'re extra-tropical cyclones, not Atlantic depressions.'
            }
        ],

        revisionBox: {
            title: '⚡ 30-Second Revision',
            points: [
                'Winter (Dec-Feb): Cold, dry, Western Disturbances bring Rabi rain, NE winds',
                'Summer (Mar-May): Hot, Loo winds (NW), Nor\'westers (Bengal), Mango Showers (Kerala)',
                'SW Monsoon (Jun-Sep): 75% rainfall, Kharif crops, breaks possible, two branches',
                'Retreating (Oct-Nov): October Heat, Cyclones peak, NE monsoon starts',
                'Tamil Nadu exception: 60% rain from NE monsoon (Oct-Dec)',
                'WD: Mediterranean origin → Winter rain in N. India (wheat crucial)',
                'Loo vs Nor\'wester: Loo = dry hot wind (NW India), Nor\'wester = violent storm (Bengal)'
            ]
        },

        pyqs: [
            {
                year: 2022,
                question: 'Explain the significance of Western Disturbances for Indian agriculture.',
                type: 'Mains'
            },
            {
                year: 2021,
                question: 'Why does Tamil Nadu receive rainfall in winter when rest of India is dry?',
                type: 'Mains'
            },
            {
                year: 2020,
                question: 'What are Nor\'westers? Discuss their causes and effects.',
                type: 'Mains'
            },
            {
                year: 2019,
                question: 'Loo winds are experienced in which part of India during summer?',
                type: 'Prelims',
                options: ['Northeast India', 'Northwest and Central India', 'Coastal South India', 'Western Ghats']
            },
            {
                year: 2018,
                question: 'Discuss the phenomenon of October Heat.',
                type: 'Mains'
            }
        ]
    },

    // ============================================
    // TOPIC 3: WESTERN DISTURBANCES
    // ============================================
    {
        id: 'western-disturbances',
        name: 'Western Disturbances',
        icon: '🌀',
        category: 'india-climate',
        theme: 'wind',
        difficulty: 'medium',
        upscRelevance: 'high',

        mindMap: {
            central: 'Western Disturbances',
            branches: [
                {
                    name: 'Origin & Path',
                    color: '#3498DB',
                    children: [
                        'Mediterranean Sea origin',
                        'Extra-tropical cyclones',
                        'Westerly Jet Stream carries them',
                        'Iran → Afghanistan → Pakistan → India',
                        'Enter from NW India'
                    ]
                },
                {
                    name: 'Season & Frequency',
                    color: '#2ECC71',
                    children: [
                        'Peak: December-February',
                        '5-10 WDs per winter',
                        'Each lasts 2-5 days',
                        'More frequent in La Niña years',
                        'Summer WDs cause hailstorms'
                    ]
                },
                {
                    name: 'Rainfall Pattern',
                    color: '#E74C3C',
                    children: [
                        'J&K, Himachal: Heavy snow',
                        'Punjab, Haryana: Rain',
                        'UP, Delhi: Occasional rain',
                        'Effect decreases eastward',
                        'Mahawat for wheat crop'
                    ]
                },
                {
                    name: 'Impacts',
                    color: '#9B59B6',
                    children: [
                        'Critical for Rabi crops',
                        'Snowfall for tourism',
                        'Avalanches in Himalayas',
                        'Fog disruption',
                        'Cold waves'
                    ]
                }
            ]
        },

        memoryHooks: [
            {
                type: 'story',
                title: 'WD Journey Story',
                content: 'WD is born over Mediterranean Sea, travels like a tourist through Iran, Afghanistan, Pakistan, enters India from Kashmir. It\'s an "imported" weather system!',
                icon: '✈️'
            },
            {
                type: 'mnemonic',
                title: 'WD Affected Areas',
                content: 'JPHUD = J&K, Punjab, Haryana, UP (western), Delhi. "Junior PHD" - areas affected by WD',
                icon: '🧠'
            },
            {
                type: 'comparison',
                title: 'WD vs Monsoon Rain',
                content: 'Monsoon = Summer rain from ocean (SE direction). WD = Winter rain from land (NW direction). Opposite seasons, opposite origins!',
                icon: '↔️'
            },
            {
                type: 'visual',
                title: 'STJ Taxi Service',
                content: 'Think of Sub-Tropical Jet Stream as a "taxi" that carries WD clouds from Mediterranean to India. STJ south of Himalayas = WD reaches N. India.',
                icon: '🚕'
            }
        ],

        conceptBlocks: [
            {
                title: 'What are Western Disturbances?',
                icon: '🌀',
                points: [
                    '📖 DEFINITION:',
                    '  • Extra-tropical cyclones (low pressure systems)',
                    '  • Originate over Mediterranean Sea',
                    '  • Embedded in Westerly Jet Stream',
                    '  • Bring winter precipitation to N. India',
                    '  • Called "Western" because they come from WEST',
                    '',
                    '🔬 CHARACTERISTICS:',
                    '  • Diameter: 500-1000 km',
                    '  • Central pressure: 990-1000 mb',
                    '  • Associated with fronts (cold and warm)',
                    '  • Precipitation on southern and eastern sides',
                    '  • Duration: 2-5 days per system',
                    '',
                    '📅 FREQUENCY:',
                    '  • Winter (Dec-Feb): 5-7 WDs',
                    '  • Total annually: 8-10 WDs',
                    '  • More frequent in La Niña years',
                    '  • Less frequent in El Niño years'
                ]
            },
            {
                title: 'Origin & Movement',
                icon: '🗺️',
                points: [
                    '🌊 ORIGIN:',
                    '  • Mediterranean Sea (primary source)',
                    '  • Also: Caspian Sea, Black Sea, Atlantic Ocean',
                    '  • These water bodies evaporate → moisture rises',
                    '  • Forms extra-tropical cyclones',
                    '',
                    '✈️ TRANSPORT MECHANISM:',
                    '  • Westerly Jet Stream carries WDs eastward',
                    '  • STJ (Sub-Tropical Jet) south of Himalayas in winter',
                    '  • Path: Mediterranean → Iran → Afghanistan → Pakistan → India',
                    '  • Himalayas act as barrier - can\'t cross over',
                    '',
                    '📍 ENTRY INTO INDIA:',
                    '  • Enters from NW (Jammu & Kashmir)',
                    '  • Moves eastward along Himalayan foothills',
                    '  • Weakens as it moves east (loses moisture)',
                    '  • Remnants may reach UP, Bihar',
                    '',
                    '⏰ TIMING:',
                    '  • Interval: 10-15 days between successive WDs',
                    '  • Each WD affects India for 2-5 days',
                    '  • Speed: 30-40 km/hr typically'
                ]
            },
            {
                title: 'Rainfall & Snowfall Pattern',
                icon: '🌧️',
                points: [
                    '❄️ SNOWFALL AREAS:',
                    '  • J&K: 100-150 cm snowfall per WD (heavy)',
                    '  • Himachal Pradesh: 50-100 cm snowfall',
                    '  • Uttarakhand: 30-50 cm snowfall',
                    '  • Ladakh: Light snow (rain shadow)',
                    '  • Siachen, Kargil: Heavy snow accumulation',
                    '',
                    '🌧️ RAINFALL AREAS:',
                    '  • Punjab: 20-40 mm rainfall per WD',
                    '  • Haryana: 15-30 mm',
                    '  • Delhi: 10-20 mm',
                    '  • Western UP: 10-15 mm',
                    '  • Effect negligible beyond Allahabad',
                    '',
                    '📊 SEASONAL CONTRIBUTION:',
                    '  • J&K winter precipitation: 70% from WDs',
                    '  • Punjab winter rain: 65% from WDs',
                    '  • Haryana: 55% from WDs',
                    '  • UP: 30% from WDs',
                    '',
                    '📏 DECREASING INTENSITY:',
                    '  • Maximum: J&K, Himachal',
                    '  • Moderate: Punjab, Haryana',
                    '  • Low: Delhi, Western UP',
                    '  • Negligible: Eastern UP, Bihar',
                    '  • Reason: WD loses moisture as it moves east'
                ]
            },
            {
                title: 'Agricultural Importance',
                icon: '🌾',
                points: [
                    '🌾 RABI CROPS LIFELINE:',
                    '  • Critical for wheat, barley, gram, mustard',
                    '  • Winter rain called "Mahawat" locally',
                    '  • Provides soil moisture during dry winter',
                    '  • Without WDs: Rabi crop would fail',
                    '',
                    '📅 TIMING WITH CROP STAGES:',
                    '  • December WDs: Soil moisture for sowing',
                    '  • January WDs: Critical for tillering stage',
                    '  • February WDs: Grain formation stage',
                    '  • Flowering stage needs clear weather (excess WDs harmful)',
                    '',
                    '📊 WHEAT BELT DEPENDENCE:',
                    '  • Punjab-Haryana: "Wheat Bowl of India"',
                    '  • 35-40% winter moisture from WDs',
                    '  • Correlation: Good WD season = Good wheat output',
                    '',
                    '🍎 OTHER CROPS:',
                    '  • Barley: Needs winter moisture',
                    '  • Mustard: Flowering needs moisture',
                    '  • Temperate fruits: Apple, walnut need winter chill + snow',
                    '  • Saffron in Kashmir: Needs snow cover',
                    '',
                    '⚠️ NEGATIVE IMPACTS ON CROPS:',
                    '  • Excess WDs: Waterlogging, lodging of wheat',
                    '  • Hailstorms: Damage standing crops',
                    '  • Fog: Reduces sunlight, photosynthesis',
                    '  • Late WDs (March): Delay harvesting'
                ]
            },
            {
                title: 'Associated Weather Hazards',
                icon: '⚠️',
                points: [
                    '🌫️ FOG:',
                    '  • Dense fog in Indo-Gangetic Plains',
                    '  • Post-WD conditions: High moisture + Low temperature',
                    '  • Visibility: <50 meters sometimes',
                    '  • Impact: Flight delays, train delays, road accidents',
                    '  • Duration: December-January peak',
                    '',
                    '❄️ COLD WAVES:',
                    '  • Cold winds behind WD (polar air mass)',
                    '  • Temperature drops 10-15°C below normal',
                    '  • Affects: North India plains',
                    '  • Health impact: Hypothermia, mortality among homeless',
                    '  • Crop impact: Frost damage',
                    '',
                    '🏔️ AVALANCHES:',
                    '  • Heavy snowfall → unstable snow slopes',
                    '  • Common: Siachen, Khardung La, Rohtang',
                    '  • Army casualties: Siachen avalanches frequent',
                    '  • Prediction: Difficult, depends on snow structure',
                    '',
                    '🧊 HAILSTORMS:',
                    '  • Spring WDs (March-April) cause hail',
                    '  • Severe in Punjab, Haryana, UP',
                    '  • Damage: Standing Rabi crops, orchards',
                    '  • 2014, 2015: Major hail damage in Maharashtra',
                    '',
                    '🌊 FLASH FLOODS:',
                    '  • Rapid snowmelt after multiple WDs',
                    '  • Cloudbursts in hills',
                    '  • Example: 2023 Joshimath land subsidence linked to moisture'
                ]
            },
            {
                title: 'Summer WDs & Climate Change',
                icon: '🌡️',
                points: [
                    '☀️ SUMMER WESTERN DISTURBANCES:',
                    '  • WDs also occur in pre-monsoon (April-June)',
                    '  • Weaker than winter WDs',
                    '  • Cause: Thunderstorms, hailstorms in NW India',
                    '  • Can interact with advancing monsoon',
                    '  • Sometimes delay monsoon onset',
                    '',
                    '🌀 INTERACTION WITH MONSOON:',
                    '  • Strong summer WD can pull monsoon northward',
                    '  • Or can block monsoon advance (creating break)',
                    '  • Unpredictable effect on monsoon',
                    '',
                    '🔥 CLIMATE CHANGE IMPACTS:',
                    '  • Studies show: WD frequency increasing',
                    '  • Intensity changing (more extreme events)',
                    '  • Timing shifting (WDs in March-April increasing)',
                    '  • More rain, less snow at lower altitudes',
                    '  • Glacier concerns: Rain vs snow ratio changing',
                    '',
                    '📊 TRENDS OBSERVED:',
                    '  • 1950-2010: WD frequency increased 10%',
                    '  • Extreme precipitation events: Up 50%',
                    '  • Snow line shifting higher',
                    '  • Implications: Water security, agriculture'
                ]
            }
        ],

        diagrams: [
            {
                title: 'Western Disturbance Path',
                type: 'map',
                description: 'Map showing WD journey: Origin in Mediterranean Sea (blue), path through Iran-Afghanistan-Pakistan (arrows), entering India at J&K, moving along Himalayan foothills. Mark STJ position.'
            },
            {
                title: 'WD Structure Cross-Section',
                type: 'cross-section',
                description: 'Vertical cross-section of WD showing: Warm front (ahead), Cold front (behind), Central low pressure, Cloud bands, Precipitation zones. Mark altitude of STJ (9-12 km).'
            },
            {
                title: 'Rainfall Gradient from WDs',
                type: 'gradient-map',
                description: 'India map showing WD rainfall decreasing from NW to SE: J&K (dark blue, high), Punjab-Haryana (medium blue), Delhi-UP (light blue), Beyond (white). Use isohyets.'
            },
            {
                title: 'WD & Rabi Crop Calendar',
                type: 'timeline',
                description: 'Timeline showing: Nov (sowing), Dec-Jan (WDs provide moisture), Feb (tillering-grain), March-April (harvest). Mark beneficial WDs at each stage.'
            },
            {
                title: 'Associated Hazards Map',
                type: 'map',
                description: 'India map marking WD-associated hazards: Snowfall (Himalayas), Avalanches (Siachen, Khardung La), Fog (Indo-Gangetic), Cold waves (Punjab-UP), Hail (March in Punjab-Haryana).'
            }
        ],

        quickFacts: [
            '🌊 Origin: Mediterranean Sea, Caspian Sea, Black Sea',
            '✈️ Transport: Westerly Jet Stream (Sub-Tropical Jet at 9-12 km)',
            '📅 Peak season: December-February (5-7 WDs in winter)',
            '❄️ J&K gets 70% of winter precipitation from WDs',
            '🌾 "Mahawat": Local name for WD rains, crucial for wheat',
            '📏 Rainfall decreases from NW to SE (J&K > Punjab > Delhi > UP)',
            '⏰ Each WD affects India for 2-5 days',
            '🌫️ Post-WD conditions: Dense fog in Indo-Gangetic Plains',
            '❄️ Siachen avalanches: Major hazard from heavy WD snowfall',
            '🧊 Spring WDs (March-April): Cause devastating hailstorms',
            '📊 Climate change: WD frequency and intensity increasing',
            '🌡️ Cold wave: Temperature drops 10-15°C below normal behind WD'
        ],

        upscTraps: [
            {
                trap: 'Western Disturbances originate from Atlantic Ocean',
                clarity: 'WRONG! WDs originate from MEDITERRANEAN SEA (also Caspian, Black Sea). Atlantic is too far west. Mediterranean is closest water body from where disturbances reach India.'
            },
            {
                trap: 'WDs affect entire North India uniformly',
                clarity: 'FALSE! WDs weaken as they move eastward. J&K, Himachal get maximum precipitation. By the time they reach Eastern UP/Bihar, effect is negligible. GRADIENT exists from NW to SE.'
            },
            {
                trap: 'WDs only bring beneficial rain',
                clarity: 'NOT ALWAYS! While beneficial for Rabi crops, WDs also cause: Dense fog (disruption), Cold waves (deaths), Avalanches (army casualties), Hailstorms (crop damage), Flash floods.'
            },
            {
                trap: 'WDs occur only in winter',
                clarity: 'FALSE! While peak is winter (Dec-Feb), WDs also occur in pre-monsoon (April-June). Summer WDs cause thunderstorms and can interact with advancing monsoon.'
            }
        ],

        revisionBox: {
            title: '⚡ 30-Second Revision',
            points: [
                'Origin: Mediterranean Sea → Carried by STJ → Enter via J&K',
                'Path: Mediterranean → Iran → Afghanistan → Pakistan → NW India',
                'Frequency: 5-7 WDs in winter (Dec-Feb), each lasts 2-5 days',
                'Rainfall: J&K (max) → Punjab → Haryana → Delhi → UP (min)',
                'Agriculture: Critical for Rabi crops (wheat), called "Mahawat"',
                'Hazards: Fog, Cold waves, Avalanches, Hailstorms (March-April)',
                'Climate change: Increasing frequency and intensity of WDs'
            ]
        },

        pyqs: [
            {
                year: 2023,
                question: 'Discuss the origin and movement of Western Disturbances and their impact on Indian agriculture.',
                type: 'Mains'
            },
            {
                year: 2021,
                question: 'What are Western Disturbances? How do they affect the weather of North India?',
                type: 'Mains'
            },
            {
                year: 2019,
                question: 'Western Disturbances originate from:',
                type: 'Prelims',
                options: ['Atlantic Ocean', 'Mediterranean Sea', 'Arabian Sea', 'Bay of Bengal']
            },
            {
                year: 2018,
                question: 'Explain the role of Jet Streams in bringing Western Disturbances to India.',
                type: 'Mains'
            },
            {
                year: 2016,
                question: 'Discuss the climatic hazards associated with Western Disturbances.',
                type: 'Mains'
            }
        ]
    },

    // ============================================
    // TOPIC 4: RAINFALL DISTRIBUTION IN INDIA
    // ============================================
    {
        id: 'rainfall-distribution',
        name: 'Rainfall Distribution in India',
        icon: '💧',
        category: 'india-climate',
        theme: 'monsoon',
        difficulty: 'medium',
        upscRelevance: 'very-high',

        mindMap: {
            central: 'Rainfall Distribution',
            branches: [
                {
                    name: 'High Rainfall (>200cm)',
                    color: '#1E88E5',
                    children: [
                        'Western Ghats windward',
                        'NE India (Meghalaya)',
                        'Andaman & Nicobar',
                        'Western Coastal Plains',
                        'Sub-Himalayan region'
                    ]
                },
                {
                    name: 'Moderate (100-200cm)',
                    color: '#43A047',
                    children: [
                        'Eastern Ghats',
                        'West Bengal',
                        'Odisha',
                        'Bihar',
                        'Eastern UP'
                    ]
                },
                {
                    name: 'Low (50-100cm)',
                    color: '#FDD835',
                    children: [
                        'Deccan Plateau interior',
                        'Gujarat',
                        'Western Rajasthan border',
                        'Punjab, Haryana',
                        'Western UP'
                    ]
                },
                {
                    name: 'Scanty (<50cm)',
                    color: '#E53935',
                    children: [
                        'Thar Desert',
                        'Ladakh',
                        'Parts of Kutch',
                        'Rain shadow areas',
                        'Leeward Deccan'
                    ]
                }
            ]
        },

        memoryHooks: [
            {
                type: 'mnemonic',
                title: 'Wettest Places',
                content: 'MCC = Mawsynram, Cherrapunji, Coastal Ghats. "MCC" like MCC Cricket Club is always "wet" from rain!',
                icon: '🌧️'
            },
            {
                type: 'comparison',
                title: 'Mawsynram vs Cherrapunji',
                content: 'Mawsynram (11,872 mm) > Cherrapunji (11,777 mm). Remember: "M comes before C, M gets more rain!"',
                icon: '📊'
            },
            {
                type: 'visual',
                title: 'Rain Shadow Concept',
                content: 'Western Ghats like WALL → Windward (West): WET → Leeward (East): DRY. Bengaluru in rain shadow = less rain than Mumbai.',
                icon: '🏔️'
            },
            {
                type: 'acronym',
                title: 'Factors Affecting Rainfall',
                content: 'LMDO = Location, Monsoon branch, Distance from sea, Orography. "Lord Mayor Does Officiate"',
                icon: '🔤'
            }
        ],

        conceptBlocks: [
            {
                title: 'Rainfall Zones Overview',
                icon: '🗺️',
                points: [
                    '📊 ANNUAL AVERAGE RAINFALL:',
                    '  • India average: 118 cm (1180 mm)',
                    '  • LPA (Long Period Average): 87 cm (monsoon season)',
                    '  • Total: 400 million hectare-meters annually',
                    '  • Highly uneven distribution',
                    '',
                    '🌧️ VERY HIGH RAINFALL (>400 cm):',
                    '  • Mawsynram: 1187 cm (wettest on Earth)',
                    '  • Cherrapunji: 1177 cm',
                    '  • Agumbe (Karnataka): 750 cm',
                    '  • Mahabaleshwar: 650 cm',
                    '',
                    '🌧️ HIGH RAINFALL (200-400 cm):',
                    '  • Western Ghats (windward)',
                    '  • NE States (Assam, Arunachal, Nagaland)',
                    '  • Western Coastal Plains (Konkan, Malabar)',
                    '  • Andaman & Nicobar Islands',
                    '  • Sub-Himalayan West Bengal, Sikkim',
                    '',
                    '🌦️ MODERATE RAINFALL (100-200 cm):',
                    '  • Eastern Ghats, Odisha coast',
                    '  • West Bengal plains',
                    '  • Bihar, Jharkhand, Eastern UP',
                    '  • Coastal Andhra Pradesh',
                    '  • Parts of MP, Chhattisgarh',
                    '',
                    '☀️ LOW RAINFALL (50-100 cm):',
                    '  • Deccan Plateau interior (Karnataka, Telangana)',
                    '  • Gujarat (non-coastal)',
                    '  • Punjab, Haryana',
                    '  • Western UP, Delhi',
                    '  • Eastern Rajasthan',
                    '',
                    '🏜️ SCANTY RAINFALL (<50 cm):',
                    '  • Thar Desert (Jaisalmer <10 cm)',
                    '  • Ladakh (<10 cm)',
                    '  • Kutch (<25 cm)',
                    '  • Leeward side of Western Ghats'
                ]
            },
            {
                title: 'Factors Affecting Rainfall Distribution',
                icon: '⚙️',
                points: [
                    '🌊 DISTANCE FROM SEA:',
                    '  • Coastal areas: More rainfall (moisture available)',
                    '  • Interior: Less rainfall (moisture depleted)',
                    '  • Example: Mumbai 200 cm vs Nagpur 100 cm',
                    '',
                    '⛰️ OROGRAPHY (RELIEF):',
                    '  • Windward slopes: High rainfall',
                    '  • Leeward slopes: Rain shadow, low rainfall',
                    '  • Example: Mahabaleshwar 650 cm vs Pune 70 cm (same latitude!)',
                    '',
                    '🧭 DIRECTION OF MONSOON:',
                    '  • Areas perpendicular to wind direction get more rain',
                    '  • Western Ghats perpendicular to Arabian Sea branch',
                    '  • Meghalaya Hills perpendicular to Bay branch',
                    '',
                    '📍 LOCATION & LATITUDE:',
                    '  • Equatorial influence: South India more consistent',
                    '  • Higher latitudes: More variable',
                    '',
                    '🌀 CYCLONIC ACTIVITY:',
                    '  • Bay of Bengal cyclones: East coast rains',
                    '  • Monsoon depressions: Central India rains',
                    '',
                    '💨 JET STREAMS & WDs:',
                    '  • Western Disturbances: Winter rain in NW',
                    '  • TEJ strength: Affects monsoon intensity'
                ]
            },
            {
                title: 'Spatial Distribution Patterns',
                icon: '📍',
                points: [
                    '🌧️ WESTERN GHATS PATTERN:',
                    '  • Windward (West): 300-500 cm (Agumbe, Mahabaleshwar)',
                    '  • Crest: Maximum rainfall',
                    '  • Leeward (East): 50-100 cm (Bangalore 90 cm)',
                    '  • Sharp gradient over 50-80 km',
                    '',
                    '🌧️ NORTHEAST INDIA:',
                    '  • Meghalaya Hills: Funnel effect of Bay branch',
                    '  • Assam Valley: 200-300 cm',
                    '  • Mawsynram: 1187 cm (WHY?)',
                    '    - Funnel-shaped Bay of Bengal concentrates winds',
                    '    - Garo-Khasi Hills perpendicular to winds',
                    '    - Valley orientation traps moisture',
                    '',
                    '🌧️ GANGETIC PLAINS:',
                    '  • Decreasing W to E trend',
                    '  • Kolkata: 160 cm',
                    '  • Patna: 120 cm',
                    '  • Allahabad: 100 cm',
                    '  • Delhi: 60 cm',
                    '  • Reason: Bay branch loses moisture moving west',
                    '',
                    '🏜️ THAR DESERT:',
                    '  • Jaisalmer: 10-15 cm only',
                    '  • Reasons:',
                    '    - Far from sea, moisture exhausted',
                    '    - Arabian Sea branch parallel to Aravalli',
                    '    - High pressure conditions',
                    '    - Descending air (subtropical high influence)',
                    '',
                    '❄️ LADAKH:',
                    '  • <10 cm rainfall (cold desert)',
                    '  • In rain shadow of Himalayas',
                    '  • Both SW and NE monsoons blocked',
                    '  • Only some Western Disturbance snow'
                ]
            },
            {
                title: 'Temporal Distribution',
                icon: '📅',
                points: [
                    '🌧️ SW MONSOON CONTRIBUTION:',
                    '  • June-September: 75% of annual rainfall',
                    '  • July: Peak month (wettest)',
                    '  • Concentrated: 100 days out of 365',
                    '',
                    '📊 MONTHLY DISTRIBUTION:',
                    '  • June: 10-15% (onset month)',
                    '  • July: 25-30% (peak)',
                    '  • August: 25-30%',
                    '  • September: 15-20% (withdrawal begins)',
                    '  • October-November: 5-10% (retreating/NE monsoon)',
                    '  • December-March: 5-10% (WDs)',
                    '',
                    '📍 REGIONAL VARIATIONS:',
                    '  • West Coast: Consistent heavy rain June-September',
                    '  • NE India: Rains start early May, continue till October',
                    '  • Tamil Nadu: October-December peak (NE monsoon)',
                    '  • NW India: Bimodal - SW monsoon + Winter WDs',
                    '',
                    '📉 VARIABILITY:',
                    '  • Year-to-year fluctuation: ±10%',
                    '  • Deficient year: <90% of LPA',
                    '  • Excess year: >110% of LPA',
                    '  • Large excess: >120% of LPA',
                    '  • Drought: Consecutive deficient years'
                ]
            },
            {
                title: 'Rain Shadow Areas',
                icon: '🏔️',
                points: [
                    '📖 WHAT IS RAIN SHADOW?',
                    '  • Area on leeward side of mountains',
                    '  • Receives little rainfall',
                    '  • Air descends after crossing mountains',
                    '  • Descending air warms, holds more moisture = no rain',
                    '',
                    '📍 RAIN SHADOW AREAS IN INDIA:',
                    '  • Eastern slopes of Western Ghats:',
                    '    - Bangalore: 90 cm (Mumbai 200 cm)',
                    '    - Pune: 70 cm (Mahabaleshwar 650 cm)',
                    '    - Coimbatore: 65 cm',
                    '  • Deccan Plateau interior:',
                    '    - Bellary: 55 cm',
                    '    - Kurnool: 65 cm',
                    '  • Ladakh:',
                    '    - Leh: 10 cm (Himalayan rain shadow)',
                    '  • Tamil Nadu coast (SW monsoon time):',
                    '    - In rain shadow of Western Ghats',
                    '    - Compensated by NE monsoon',
                    '',
                    '📊 STARK CONTRASTS:',
                    '  • Agumbe (750 cm) vs Chitradurga (50 cm) - Same state!',
                    '  • Mahabaleshwar (650 cm) vs Pune (70 cm) - 100 km apart',
                    '  • Mumbai (200 cm) vs Ahmednagar (50 cm) - 200 km apart'
                ]
            },
            {
                title: 'Rainfall Deficiency & Drought',
                icon: '⚠️',
                points: [
                    '📊 IMD CRITERIA:',
                    '  • Normal: 96-104% of LPA',
                    '  • Below Normal: 90-96%',
                    '  • Deficient: <90%',
                    '  • Excess: 104-110%',
                    '  • Large Excess: >110%',
                    '',
                    '🏜️ DROUGHT PRONE AREAS:',
                    '  • Rajasthan (especially western)',
                    '  • Gujarat (Kutch, Saurashtra)',
                    '  • Interior Maharashtra (Marathwada)',
                    '  • Interior Karnataka (North)',
                    '  • Telangana (Rayalaseema)',
                    '  • Tamil Nadu (certain years)',
                    '  • ~68% of India is drought-prone',
                    '',
                    '📅 MAJOR DROUGHT YEARS:',
                    '  • 1987: Severe (El Niño)',
                    '  • 2002: Worst in 100 years',
                    '  • 2009: Deficit monsoon',
                    '  • 2015: Below normal (El Niño)',
                    '  • Pattern: Correlates with El Niño',
                    '',
                    '🔄 VARIABILITY INDEX:',
                    '  • Low variability (<15%): West coast, NE India',
                    '  • Moderate variability (15-25%): Gangetic Plains',
                    '  • High variability (>25%): Western Rajasthan, Gujarat, Interior Peninsula',
                    '  • Rule: Low rainfall areas have HIGH variability'
                ]
            }
        ],

        diagrams: [
            {
                title: 'Rainfall Distribution Map of India',
                type: 'map',
                description: 'India map with isohyets: >400cm (darkest blue - Meghalaya, W. Ghats), 200-400cm (blue), 100-200cm (light blue), 50-100cm (yellow), <50cm (orange/red - Thar, Ladakh). Use gradient shading.'
            },
            {
                title: 'Rain Shadow Effect - Western Ghats',
                type: 'cross-section',
                description: 'West-East cross section from Arabian Sea to Deccan: Moist air rises on windward (rain), descends on leeward (dry). Mark rainfall amounts: Agumbe (750cm), Shimoga (100cm), Chitradurga (50cm).'
            },
            {
                title: 'Why Mawsynram is Wettest',
                type: 'diagram',
                description: 'Map showing: Funnel shape of Bay of Bengal, converging winds, Garo-Khasi Hills perpendicular, valley orientation. Mark Mawsynram (1187cm) and Cherrapunji (1177cm).'
            },
            {
                title: 'Monthly Rainfall Distribution',
                type: 'bar-chart',
                description: 'Bar chart showing monthly rainfall contribution: June (15%), July (28%), August (27%), September (18%), October (5%), November (3%), Dec-May (4%). Show cumulative SW monsoon = 75%.'
            },
            {
                title: 'Drought Prone Areas',
                type: 'map',
                description: 'India map marking drought-prone zones: Chronic (Thar, Kutch - red), Moderate (Marathwada, Rayalaseema, North Karnataka - orange), Occasional (Gujarat coast, parts of AP - yellow).'
            },
            {
                title: 'Rainfall Variability Map',
                type: 'map',
                description: 'Map showing variability coefficient: Low <15% (West coast, NE - green), Moderate 15-25% (Gangetic - yellow), High >25% (Thar, Gujarat, Interior - red).'
            }
        ],

        quickFacts: [
            '🌧️ India average rainfall: 118 cm (1180 mm) annually',
            '💧 SW Monsoon (Jun-Sep): 75% of annual rainfall',
            '🏆 Wettest: Mawsynram (1187 cm) > Cherrapunji (1177 cm)',
            '🏜️ Driest: Jaisalmer (10-15 cm), Leh (<10 cm)',
            '📊 LPA (Long Period Average): 87 cm for monsoon season',
            '⛰️ Rain Shadow: Western Ghat leeward side gets 50-100 cm vs 300-500 cm windward',
            '📉 68% of India is drought-prone',
            '🌧️ Agumbe (Karnataka): 750 cm - "Cherrapunji of South India"',
            '📅 July & August: Peak rainfall months (55% of monsoon total)',
            '📊 Variability rule: Low rainfall areas have HIGH year-to-year variability',
            '🌀 Bengal cyclones add rain to Odisha, Andhra (Oct-Nov)',
            '❄️ Ladakh: Cold desert, <10 cm rain, in Himalayan rain shadow'
        ],

        upscTraps: [
            {
                trap: 'Cherrapunji is the wettest place on Earth',
                clarity: 'OUTDATED! MAWSYNRAM (1187 cm) is now wettest, not Cherrapunji (1177 cm). Both in Meghalaya, Mawsynram slightly higher due to position in Khasi Hills.'
            },
            {
                trap: 'Western Rajasthan receives less rain because it is far from sea',
                clarity: 'PARTIAL ANSWER! Distance is ONE factor. MORE IMPORTANT: (1) Arabian Sea branch runs PARALLEL to Aravalli (not perpendicular), (2) Aravalli too low to cause orographic rain, (3) Subtropical high influence. Multiple factors!'
            },
            {
                trap: 'High rainfall areas are fertile and productive',
                clarity: 'NOT ALWAYS! High rainfall can cause: (1) Leaching (nutrients washed away), (2) Laterite soil formation (infertile), (3) Erosion, (4) Waterlogging. Moderate rainfall often better for agriculture.'
            },
            {
                trap: 'Tamil Nadu gets no monsoon rain',
                clarity: 'WRONG PHRASING! Tamil Nadu gets LESS rain from SW monsoon (rain shadow of Western Ghats). But gets 50-60% of annual rain from NE monsoon (Oct-Dec). Total annual rainfall is moderate, not zero.'
            }
        ],

        revisionBox: {
            title: '⚡ 30-Second Revision',
            points: [
                'India average: 118 cm/year, SW monsoon (Jun-Sep): 75% of this',
                'Wettest: Mawsynram (1187 cm) > Cherrapunji (1177 cm) - both Meghalaya',
                'Driest: Jaisalmer (10-15 cm), Leh (<10 cm)',
                'Rain shadow: W. Ghats leeward (Bangalore 90 cm vs Mumbai 200 cm)',
                'Gangetic trend: Kolkata (160 cm) → Delhi (60 cm) - decreases westward',
                'Variability: Low rainfall areas = High variability (>25%)',
                '68% of India drought-prone; major years: 1987, 2002, 2009, 2015 (El Niño link)'
            ]
        },

        pyqs: [
            {
                year: 2023,
                question: 'Explain the factors responsible for the uneven distribution of rainfall in India.',
                type: 'Mains'
            },
            {
                year: 2021,
                question: 'Why does Mawsynram receive highest rainfall in India?',
                type: 'Mains'
            },
            {
                year: 2020,
                question: 'What is rain shadow area? Explain with reference to Western Ghats.',
                type: 'Mains'
            },
            {
                year: 2019,
                question: 'The Thar Desert receives scanty rainfall because:',
                type: 'Prelims',
                options: ['It is far from sea', 'Aravalli is parallel to monsoon winds', 'High pressure conditions', 'All of the above']
            },
            {
                year: 2018,
                question: 'Discuss the drought prone areas of India and measures for drought mitigation.',
                type: 'Mains'
            }
        ]
    },

    // ============================================
    // TOPIC 5: TROPICAL CYCLONES IN INDIA
    // ============================================
    {
        id: 'tropical-cyclones-india',
        name: 'Tropical Cyclones in India',
        icon: '🌀',
        category: 'india-climate',
        theme: 'cyclone',
        difficulty: 'hard',
        upscRelevance: 'very-high',

        mindMap: {
            central: 'Indian Cyclones',
            branches: [
                {
                    name: 'Bay of Bengal',
                    color: '#E74C3C',
                    children: [
                        '5-6 cyclones/year',
                        'Pre-monsoon (May-June)',
                        'Post-monsoon (Oct-Nov)',
                        'Affects: Odisha, AP, WB, TN',
                        'More frequent & intense'
                    ]
                },
                {
                    name: 'Arabian Sea',
                    color: '#3498DB',
                    children: [
                        '1-2 cyclones/year',
                        'Mainly pre-monsoon',
                        'Affects: Gujarat, Maharashtra',
                        'Less frequent',
                        'Often move away from India'
                    ]
                },
                {
                    name: 'Formation Conditions',
                    color: '#2ECC71',
                    children: [
                        'SST >27°C',
                        'Coriolis force (5° away from equator)',
                        'Low wind shear',
                        'Upper level divergence',
                        'High humidity'
                    ]
                },
                {
                    name: 'Classification',
                    color: '#9B59B6',
                    children: [
                        'Depression (<33 knots)',
                        'Cyclonic Storm (34-47 knots)',
                        'Severe CS (48-63 knots)',
                        'Very Severe CS (64-89 knots)',
                        'Super Cyclone (>120 knots)'
                    ]
                }
            ]
        },

        memoryHooks: [
            {
                type: 'mnemonic',
                title: 'Cyclone Formation',
                content: 'SCCHU = Sea temp >27°C, Coriolis effect, Convergence at surface, High humidity, Upper level divergence. "Cyclones Should Come Heavily Underway!"',
                icon: '🌀'
            },
            {
                type: 'comparison',
                title: 'Bay vs Arabian Sea',
                content: 'Bay of Bengal = "BUSY" (5-6 cyclones). Arabian Sea = "LAZY" (1-2 cyclones). Bay warmer, fresher water, more favorable conditions.',
                icon: '🌊'
            },
            {
                type: 'acronym',
                title: 'Cyclone Categories',
                content: 'D-CS-SCS-VSCS-ESCS-SuCS = Depression, Cyclonic Storm, Severe, Very Severe, Extremely Severe, Super Cyclone. Intensity increases!',
                icon: '📊'
            },
            {
                type: 'story',
                title: 'Recent Major Cyclones',
                content: 'Remember "FATA" pattern: Fani (2019), Amphan (2020), Tauktae (2021), Asani (2022). Each year, stronger cyclones!',
                icon: '🌀'
            }
        ],

        conceptBlocks: [
            {
                title: 'Cyclone Formation Conditions',
                icon: '⚙️',
                points: [
                    '🌡️ SEA SURFACE TEMPERATURE (SST):',
                    '  • >27°C required (26-27°C minimum)',
                    '  • Warm water = Energy source',
                    '  • Bay of Bengal: Consistently warm (28-30°C)',
                    '  • Arabian Sea: Cooler due to upwelling (Somalia coast)',
                    '',
                    '🔄 CORIOLIS FORCE:',
                    '  • Required for rotation',
                    '  • Negligible at equator (0-5°N)',
                    '  • Cyclones form >5° latitude',
                    '  • Counter-clockwise rotation in NH',
                    '',
                    '💨 LOW VERTICAL WIND SHEAR:',
                    '  • Wind speed should not vary much with altitude',
                    '  • High shear disrupts cyclone structure',
                    '  • Monsoon period: High shear (fewer cyclones)',
                    '  • Pre/post monsoon: Low shear (more cyclones)',
                    '',
                    '💧 HIGH HUMIDITY:',
                    '  • Mid-tropospheric humidity needed',
                    '  • Fuels condensation, releases latent heat',
                    '',
                    '🔼 UPPER LEVEL DIVERGENCE:',
                    '  • Air must escape at top',
                    '  • Allows more air to converge at surface',
                    '  • Maintains low pressure'
                ]
            },
            {
                title: 'Bay of Bengal vs Arabian Sea',
                icon: '🌊',
                points: [
                    '🔵 BAY OF BENGAL (MORE CYCLONES):',
                    '  • 5-6 cyclones per year',
                    '  • More favorable conditions:',
                    '    - Warmer waters (28-30°C consistently)',
                    '    - Less salinity (more river inflow)',
                    '    - Fresher water heats faster',
                    '    - No upwelling (unlike Arabian Sea)',
                    '  • Cyclones move towards Indian coast',
                    '  • Affected states: Odisha, Andhra, West Bengal, Tamil Nadu',
                    '',
                    '🔵 ARABIAN SEA (FEWER CYCLONES):',
                    '  • 1-2 cyclones per year',
                    '  • Less favorable:',
                    '    - Colder due to Somali upwelling',
                    '    - Higher salinity',
                    '    - Many cyclones move away (towards Oman/Yemen)',
                    '  • Affected states: Gujarat, Maharashtra',
                    '  • Recent trend: Intensity increasing (climate change)',
                    '',
                    '📊 RATIO: Bay:Arabian = 4:1 approximately',
                    '',
                    '⚠️ CLIMATE CHANGE IMPACT:',
                    '  • Arabian Sea warming rapidly',
                    '  • More intense cyclones now',
                    '  • Examples: Vayu (2019), Tauktae (2021), Biparjoy (2023)'
                ]
            },
            {
                title: 'Cyclone Seasons in India',
                icon: '📅',
                points: [
                    '🌸 PRE-MONSOON SEASON (April-June):',
                    '  • Peak: May-June',
                    '  • Both seas active',
                    '  • Cyclones can be very intense',
                    '  • Examples:',
                    '    - Odisha Cyclone 1999 (Oct was exception)',
                    '    - Amphan 2020 (May)',
                    '    - Fani 2019 (May)',
                    '',
                    '🌧️ MONSOON SEASON (July-September):',
                    '  • LEAST cyclone activity',
                    '  • Reason: High wind shear',
                    '  • Strong monsoon winds disrupt formation',
                    '  • Only monsoon depressions form (weaker)',
                    '',
                    '🍂 POST-MONSOON SEASON (October-December):',
                    '  • Peak: October-November',
                    '  • Most dangerous season',
                    '  • Bay of Bengal very active',
                    '  • Conditions optimal: Warm sea, low shear',
                    '  • Examples:',
                    '    - Hudhud 2014 (Oct)',
                    '    - Phailin 2013 (Oct)',
                    '    - Titli 2018 (Oct)',
                    '',
                    '📊 MONTHLY DISTRIBUTION:',
                    '  • November: Peak cyclone month',
                    '  • May: Second peak',
                    '  • October: Third peak',
                    '  • July-August: Minimum'
                ]
            },
            {
                title: 'Cyclone Classification (IMD)',
                icon: '📊',
                points: [
                    '📊 IMD CYCLONE CLASSIFICATION:',
                    '',
                    '1️⃣ LOW PRESSURE AREA:',
                    '  • Wind speed: <17 knots (<31 km/hr)',
                    '  • No closed isobars',
                    '',
                    '2️⃣ DEPRESSION:',
                    '  • Wind speed: 17-27 knots (31-50 km/hr)',
                    '  • Closed isobars',
                    '',
                    '3️⃣ DEEP DEPRESSION:',
                    '  • Wind speed: 28-33 knots (51-62 km/hr)',
                    '',
                    '4️⃣ CYCLONIC STORM:',
                    '  • Wind speed: 34-47 knots (63-87 km/hr)',
                    '  • Named at this stage',
                    '',
                    '5️⃣ SEVERE CYCLONIC STORM:',
                    '  • Wind speed: 48-63 knots (88-117 km/hr)',
                    '',
                    '6️⃣ VERY SEVERE CYCLONIC STORM:',
                    '  • Wind speed: 64-89 knots (118-166 km/hr)',
                    '',
                    '7️⃣ EXTREMELY SEVERE CYCLONIC STORM:',
                    '  • Wind speed: 90-119 knots (167-221 km/hr)',
                    '',
                    '8️⃣ SUPER CYCLONIC STORM:',
                    '  • Wind speed: >120 knots (>222 km/hr)',
                    '  • Extremely rare',
                    '  • Examples: Odisha 1999, Amphan 2020'
                ]
            },
            {
                title: 'Major Cyclones & Impacts',
                icon: '🌀',
                points: [
                    '🔴 SUPER CYCLONE ODISHA (1999):',
                    '  • Wind: 260 km/hr',
                    '  • Deaths: 10,000+',
                    '  • Storm surge: 9 meters',
                    '  • Deadliest in India\'s modern history',
                    '',
                    '🔴 CYCLONE AMPHAN (2020):',
                    '  • Super Cyclonic Storm',
                    '  • Wind: 240 km/hr',
                    '  • Damage: $13 billion',
                    '  • Affected: West Bengal, Odisha, Bangladesh',
                    '  • Costliest cyclone in Bay of Bengal history',
                    '',
                    '🔴 CYCLONE FANI (2019):',
                    '  • Extremely Severe',
                    '  • Wind: 215 km/hr',
                    '  • Deaths: 89 (low due to evacuation)',
                    '  • 1.2 million evacuated - SUCCESS STORY',
                    '',
                    '🔴 CYCLONE HUDHUD (2014):',
                    '  • Very Severe',
                    '  • Hit Visakhapatnam',
                    '  • Wind: 185 km/hr',
                    '',
                    '🔴 CYCLONE TAUKTAE (2021):',
                    '  • Extremely Severe',
                    '  • Arabian Sea (unusual intensity)',
                    '  • Hit Gujarat',
                    '  • Wind: 185 km/hr',
                    '',
                    '📊 IMPACTS:',
                    '  • Storm surge: Sea level rise 3-9 meters',
                    '  • Wind damage: Buildings, trees, power lines',
                    '  • Heavy rainfall: Flooding',
                    '  • Saline water ingress: Agriculture damage',
                    '  • Loss of life, livelihood, infrastructure'
                ]
            },
            {
                title: 'Cyclone Preparedness & Warning',
                icon: '⚠️',
                points: [
                    '🏢 INSTITUTIONS:',
                    '  • IMD (India Meteorological Dept): Forecasting',
                    '  • NCMC: National Crisis Management Committee',
                    '  • NDMA: National Disaster Management Authority',
                    '  • State DMAs: State-level coordination',
                    '',
                    '📡 WARNING SYSTEM:',
                    '  • IMD issues warnings in stages:',
                    '  • YELLOW: Be aware',
                    '  • ORANGE: Be prepared',
                    '  • RED: Take action',
                    '  • 72-hour advance warning now possible',
                    '  • Accuracy improved: 24-hour track error <100 km',
                    '',
                    '🛡️ PREPAREDNESS MEASURES:',
                    '  • Cyclone shelters: Odisha has 900+',
                    '  • Early warning dissemination',
                    '  • Evacuation planning',
                    '  • Mock drills',
                    '  • NDRF deployment',
                    '',
                    '📈 SUCCESS STORIES:',
                    '  • Fani 2019: 1.2 million evacuated, deaths <100',
                    '  • Amphan 2020: 3 million evacuated',
                    '  • Compared to 1999 (10,000+ deaths): Huge improvement',
                    '',
                    '🌳 MITIGATION:',
                    '  • Mangrove restoration (natural barrier)',
                    '  • Coastal regulation zone (CRZ)',
                    '  • Embankments, sea walls',
                    '  • Cyclone-resistant construction'
                ]
            }
        ],

        diagrams: [
            {
                title: 'Cyclone Formation Mechanism',
                type: 'cross-section',
                description: 'Vertical cross-section of cyclone: Eye (calm center), Eye wall (strongest winds), Spiral rain bands, Surface convergence, Upper level divergence. Mark altitude levels and wind speeds.'
            },
            {
                title: 'Bay vs Arabian Sea Cyclones Map',
                type: 'map',
                description: 'Map of India showing cyclone tracks: Bay of Bengal (5-6 tracks curving towards Odisha, AP, WB), Arabian Sea (1-2 tracks towards Gujarat). Mark frequency numbers.'
            },
            {
                title: 'Cyclone Frequency by Month',
                type: 'bar-chart',
                description: 'Monthly distribution showing peaks in May-June (pre-monsoon) and October-November (post-monsoon), with July-September showing minimum. Separate bars for Bay and Arabian Sea.'
            },
            {
                title: 'Cyclone Classification Scale',
                type: 'scale-diagram',
                description: 'Horizontal scale showing cyclone categories from Depression to Super Cyclone with wind speed ranges (knots and km/hr). Use color gradient from green to red.'
            },
            {
                title: 'Storm Surge Diagram',
                type: 'cross-section',
                description: 'Coastal cross-section showing normal sea level vs storm surge (3-9m rise). Show flooding of low-lying coastal areas, impact on settlements.'
            },
            {
                title: 'Recent Major Cyclones Timeline',
                type: 'timeline',
                description: 'Timeline 2014-2023: Hudhud (2014), Phailin (2013), Fani (2019), Amphan (2020), Yaas (2021), Tauktae (2021), Biparjoy (2023). Mark intensity and affected states.'
            }
        ],

        quickFacts: [
            '🌊 Bay of Bengal: 5-6 cyclones/year | Arabian Sea: 1-2 cyclones/year',
            '📅 Peak months: May-June (pre-monsoon) & October-November (post-monsoon)',
            '🌡️ Formation needs: SST >27°C, Coriolis force (>5° latitude), low wind shear',
            '💨 Super Cyclone: Wind speed >222 km/hr (120 knots)',
            '🔴 Odisha 1999: Deadliest (10,000+ deaths, 260 km/hr winds)',
            '💰 Amphan 2020: Costliest ($13 billion damage)',
            '✅ Fani 2019: 1.2 million evacuated, deaths <100 - SUCCESS story',
            '🌊 Storm surge: Sea level can rise 3-9 meters during cyclone',
            '🔄 Counter-clockwise rotation in Northern Hemisphere',
            '📉 Monsoon season (Jul-Sep): LEAST cyclones (high wind shear)',
            '🌡️ Arabian Sea cyclones increasing due to climate change',
            '⚠️ IMD warning: 72-hour advance forecast now possible'
        ],

        upscTraps: [
            {
                trap: 'Cyclones form at equator where temperatures are highest',
                clarity: 'WRONG! Cyclones form 5-20° away from equator. At equator, Coriolis force is ZERO - no rotation possible. Cyclones need Coriolis effect for spinning motion.'
            },
            {
                trap: 'Monsoon season has most cyclones because of high moisture',
                clarity: 'OPPOSITE! Monsoon season (Jul-Sep) has LEAST cyclones. Reason: High vertical wind shear during monsoon disrupts cyclone formation. Pre and post-monsoon have most cyclones.'
            },
            {
                trap: 'Arabian Sea has fewer cyclones because it is smaller',
                clarity: 'SIZE is not the main reason. Arabian Sea is COOLER (Somali upwelling), higher salinity, and many cyclones move AWAY from India (towards Oman). Bay is warmer, fresher, more favorable.'
            },
            {
                trap: 'Cyclone warning is given 24 hours in advance',
                clarity: 'OUTDATED! IMD now provides 72-hour (3 days) advance warning. Track prediction accuracy has improved significantly. 24-hour track error now <100 km.'
            }
        ],

        revisionBox: {
            title: '⚡ 30-Second Revision',
            points: [
                'Formation: SST >27°C + Coriolis (>5° lat) + Low wind shear + Humidity',
                'Bay:Arabian ratio = 4:1 (5-6 vs 1-2 cyclones/year)',
                'Peak seasons: May-June & Oct-Nov (NOT monsoon season)',
                'Classification: Depression → CS → SCS → VSCS → ESCS → Super Cyclone',
                'Deadliest: Odisha 1999 (10,000+ deaths, 260 km/hr)',
                'Success: Fani 2019 - 1.2 million evacuated, <100 deaths',
                'Climate change: Arabian Sea cyclones intensifying'
            ]
        },

        pyqs: [
            {
                year: 2023,
                question: 'Why is the frequency and intensity of cyclones in Arabian Sea increasing in recent years?',
                type: 'Mains'
            },
            {
                year: 2022,
                question: 'Explain the conditions necessary for tropical cyclone formation.',
                type: 'Mains'
            },
            {
                year: 2021,
                question: 'Why does Bay of Bengal experience more cyclones than Arabian Sea?',
                type: 'Mains'
            },
            {
                year: 2020,
                question: 'Discuss India\'s cyclone preparedness with reference to Fani.',
                type: 'Mains'
            },
            {
                year: 2019,
                question: 'Cyclones do not form at equator because:',
                type: 'Prelims',
                options: ['Water is cold', 'Coriolis force is zero', 'ITCZ is present', 'High wind shear']
            },
            {
                year: 2018,
                question: 'What are storm surges? Explain their impacts on coastal areas.',
                type: 'Mains'
            }
        ]
    },

    // ============================================
    // TOPIC 6: FLOODS & DROUGHTS IN INDIA
    // ============================================
    {
        id: 'floods-droughts-india',
        name: 'Floods & Droughts in India',
        icon: '🌊',
        category: 'india-climate',
        theme: 'monsoon',
        difficulty: 'medium',
        upscRelevance: 'very-high',

        mindMap: {
            central: 'Floods & Droughts',
            branches: [
                {
                    name: 'Flood Types',
                    color: '#2196F3',
                    children: [
                        'Riverine floods (overflow)',
                        'Flash floods (sudden)',
                        'Coastal floods (storm surge)',
                        'Urban floods (drainage failure)',
                        'Glacial lake outburst (GLOF)'
                    ]
                },
                {
                    name: 'Flood Prone Areas',
                    color: '#4CAF50',
                    children: [
                        'Brahmaputra Valley (Assam)',
                        'Ganga Basin (Bihar, UP)',
                        'Mahanadi Basin (Odisha)',
                        'Godavari-Krishna deltas',
                        'Coastal areas (cyclonic)'
                    ]
                },
                {
                    name: 'Drought Types',
                    color: '#FF9800',
                    children: [
                        'Meteorological drought',
                        'Hydrological drought',
                        'Agricultural drought',
                        'Socio-economic drought',
                        'Ecological drought'
                    ]
                },
                {
                    name: 'Drought Prone Areas',
                    color: '#F44336',
                    children: [
                        'Western Rajasthan',
                        'Kutch, Saurashtra',
                        'Marathwada, Vidarbha',
                        'Rayalaseema, Telangana',
                        'North Karnataka'
                    ]
                }
            ]
        },

        memoryHooks: [
            {
                type: 'mnemonic',
                title: 'Flood Prone States',
                content: 'ABOBW = Assam, Bihar, Odisha, Bengal, West UP. "Always Bring Oranges Before Winter" - states that flood annually!',
                icon: '🌊'
            },
            {
                type: 'acronym',
                title: 'Drought Types',
                content: 'MHAS = Meteorological, Hydrological, Agricultural, Socio-economic. Sequence of how drought develops!',
                icon: '🔤'
            },
            {
                type: 'comparison',
                title: 'Flood vs Drought Areas',
                content: 'EAST = Floods (Assam, Bihar, Bengal - river basins). WEST = Droughts (Rajasthan, Gujarat, Maharashtra - rain shadow, arid).',
                icon: '↔️'
            },
            {
                type: 'visual',
                title: 'Drought Years Pattern',
                content: 'El Niño = Drought year (usually). 2002, 2009, 2015 - all El Niño years with deficient monsoon. El Niño "DRIES" India!',
                icon: '🌡️'
            }
        ],

        conceptBlocks: [
            {
                title: 'Types of Floods',
                icon: '🌊',
                points: [
                    '🏞️ RIVERINE FLOODS:',
                    '  • Rivers overflow banks',
                    '  • Heavy rainfall in catchment',
                    '  • Most common type in India',
                    '  • Example: Brahmaputra floods in Assam, Ganga floods in Bihar',
                    '  • Duration: Days to weeks',
                    '',
                    '⚡ FLASH FLOODS:',
                    '  • Sudden, intense, short duration',
                    '  • Caused by cloudbursts',
                    '  • Common in: Himalayan region, Western Ghats',
                    '  • Little warning time',
                    '  • Example: Kedarnath 2013, Leh 2010',
                    '',
                    '🌊 COASTAL FLOODS:',
                    '  • Storm surge during cyclones',
                    '  • Sea level temporarily rises',
                    '  • Affects: Odisha, Andhra, Tamil Nadu coasts',
                    '  • Saline water inundation',
                    '  • Example: During Amphan 2020',
                    '',
                    '🏙️ URBAN FLOODS:',
                    '  • Drainage system overwhelmed',
                    '  • Encroachment of water bodies',
                    '  • Concretization reduces absorption',
                    '  • Example: Mumbai 2005, Chennai 2015, Hyderabad 2020',
                    '',
                    '🏔️ GLACIAL LAKE OUTBURST FLOOD (GLOF):',
                    '  • Glacial lake dam bursts',
                    '  • Sudden release of water',
                    '  • Increasing with climate change',
                    '  • Example: Chamoli 2021 (glacier collapse)',
                    '  • Affects: Himalayan valleys'
                ]
            },
            {
                title: 'Flood Prone Areas',
                icon: '📍',
                points: [
                    '📊 STATISTICS:',
                    '  • 40 million hectares flood-prone in India',
                    '  • 8 million hectares flooded annually (average)',
                    '  • 30 million people affected every year',
                    '',
                    '🔴 BRAHMAPUTRA BASIN (ASSAM):',
                    '  • Most flood-prone region',
                    '  • Annual floods (July-September)',
                    '  • Causes: High rainfall, deforestation, sediment load',
                    '  • Brahmaputra rises 4-5 meters',
                    '  • Kaziranga NP, Majuli Island severely affected',
                    '',
                    '🔴 GANGA BASIN:',
                    '  • Bihar: Most flood-affected state',
                    '  • Kosi River: "Sorrow of Bihar" (shifts course)',
                    '  • Eastern UP: Ghaghra, Rapti floods',
                    '  • North Bengal: Teesta floods',
                    '',
                    '🔴 MAHANADI-GODAVARI-KRISHNA:',
                    '  • Odisha: Mahanadi floods',
                    '  • Andhra: Godavari, Krishna deltas',
                    '  • Heavy monsoon + cyclones',
                    '',
                    '🔴 WESTERN INDIA:',
                    '  • Gujarat: Narmada, Tapi floods',
                    '  • Maharashtra: Mumbai urban floods',
                    '  • Less frequent but intense',
                    '',
                    '📍 FLOOD PRONE STATES (in order):',
                    '  1. Assam (highest)',
                    '  2. Bihar',
                    '  3. Uttar Pradesh',
                    '  4. West Bengal',
                    '  5. Odisha'
                ]
            },
            {
                title: 'Causes of Floods',
                icon: '⚙️',
                points: [
                    '🌧️ NATURAL CAUSES:',
                    '  • Heavy monsoon rainfall',
                    '  • Cyclonic storms',
                    '  • Cloudbursts',
                    '  • Glacier melting',
                    '  • High tide coinciding with river flow',
                    '',
                    '🏗️ ANTHROPOGENIC CAUSES:',
                    '  • DEFORESTATION:',
                    '    - Reduces water absorption',
                    '    - Increases runoff',
                    '  • ENCROACHMENT OF FLOODPLAINS:',
                    '    - Rivers have no space to spread',
                    '    - Settlements in flood zones',
                    '  • SILTATION:',
                    '    - River bed rises',
                    '    - Reduces carrying capacity',
                    '  • POOR DRAINAGE:',
                    '    - Urban areas: Clogged drains',
                    '    - Concretization reduces absorption',
                    '  • DAM MISMANAGEMENT:',
                    '    - Sudden release of water',
                    '    - Lack of coordination',
                    '',
                    '🔄 COMBINED EFFECT:',
                    '  • Climate change: More intense rainfall events',
                    '  • Same total rain in fewer days = floods',
                    '  • Extreme events increasing'
                ]
            },
            {
                title: 'Types of Droughts',
                icon: '☀️',
                points: [
                    '🌡️ METEOROLOGICAL DROUGHT:',
                    '  • Deficiency in rainfall',
                    '  • IMD definition: <75% of normal',
                    '  • Severe: <50% of normal',
                    '  • First type to occur',
                    '',
                    '💧 HYDROLOGICAL DROUGHT:',
                    '  • Deficiency in water availability',
                    '  • Rivers, lakes, groundwater depleted',
                    '  • Follows meteorological drought',
                    '  • Takes time to develop and recover',
                    '',
                    '🌾 AGRICULTURAL DROUGHT:',
                    '  • Soil moisture deficit',
                    '  • Crops fail due to insufficient water',
                    '  • Most immediate human impact',
                    '  • Can occur even with normal rainfall (distribution issue)',
                    '',
                    '👥 SOCIO-ECONOMIC DROUGHT:',
                    '  • Demand exceeds supply',
                    '  • Affects livelihoods, drinking water',
                    '  • Migration, distress sale',
                    '  • Food price inflation',
                    '',
                    '🌿 ECOLOGICAL DROUGHT:',
                    '  • Ecosystem stress',
                    '  • Wildlife affected',
                    '  • Vegetation loss',
                    '  • Long-term environmental damage'
                ]
            },
            {
                title: 'Drought Prone Areas',
                icon: '🏜️',
                points: [
                    '📊 STATISTICS:',
                    '  • 68% of India is drought-prone',
                    '  • 50 million people affected annually',
                    '  • Chronic drought: Same areas repeatedly',
                    '',
                    '🔴 WESTERN RAJASTHAN:',
                    '  • Most drought-prone region',
                    '  • Thar Desert: <25 cm rainfall',
                    '  • Jaisalmer, Barmer, Jodhpur',
                    '  • Water scarcity endemic',
                    '',
                    '🔴 GUJARAT:',
                    '  • Kutch: <35 cm rainfall',
                    '  • Saurashtra: Erratic rainfall',
                    '  • North Gujarat: Low rainfall',
                    '',
                    '🔴 MAHARASHTRA:',
                    '  • Marathwada: Rain shadow of Western Ghats',
                    '  • Vidarbha: Interior location',
                    '  • Farmer suicides linked to drought',
                    '',
                    '🔴 KARNATAKA:',
                    '  • North Karnataka: Semi-arid',
                    '  • Bijapur, Gulbarga, Raichur',
                    '  • Rain shadow region',
                    '',
                    '🔴 ANDHRA PRADESH/TELANGANA:',
                    '  • Rayalaseema: Chronic drought',
                    '  • Anantapur driest district in South India',
                    '  • Telangana interior',
                    '',
                    '🔴 TAMIL NADU:',
                    '  • During SW monsoon failure',
                    '  • Depends on NE monsoon',
                    '  • 2016-17 severe drought',
                    '',
                    '📅 MAJOR DROUGHT YEARS:',
                    '  • 1987, 2002, 2009, 2015 (El Niño correlation)',
                    '  • 2016: Non-El Niño drought'
                ]
            },
            {
                title: 'Management & Mitigation',
                icon: '🛡️',
                points: [
                    '🌊 FLOOD MANAGEMENT:',
                    '  • STRUCTURAL MEASURES:',
                    '    - Embankments, levees',
                    '    - Dams and reservoirs',
                    '    - Channel improvement',
                    '    - Drainage improvement',
                    '  • NON-STRUCTURAL MEASURES:',
                    '    - Flood forecasting (CWC)',
                    '    - Early warning systems',
                    '    - Floodplain zoning',
                    '    - Flood insurance',
                    '    - Watershed management',
                    '  • INSTITUTIONS:',
                    '    - CWC (Central Water Commission)',
                    '    - State Flood Control Departments',
                    '',
                    '☀️ DROUGHT MANAGEMENT:',
                    '  • STRUCTURAL MEASURES:',
                    '    - Check dams, watershed structures',
                    '    - Irrigation projects',
                    '    - Rainwater harvesting',
                    '    - Groundwater recharge',
                    '  • NON-STRUCTURAL MEASURES:',
                    '    - Crop diversification',
                    '    - Drought-resistant crops',
                    '    - Crop insurance (PMFBY)',
                    '    - MGNREGA (employment)',
                    '    - Mid-day meal (food security)',
                    '  • PROGRAMMES:',
                    '    - Pradhan Mantri Krishi Sinchayee Yojana',
                    '    - Jal Shakti Abhiyan',
                    '    - Watershed Development Programs',
                    '',
                    '📊 SDRF & NDRF:',
                    '  • State/National Disaster Response Fund',
                    '  • Financial assistance during disasters',
                    '  • Compensation for crop loss'
                ]
            }
        ],

        diagrams: [
            {
                title: 'Flood Prone Areas Map',
                type: 'map',
                description: 'India map marking flood-prone zones: Very high (Assam, Bihar, Bengal - dark blue), High (Odisha, Eastern UP - medium blue), Moderate (Andhra deltas - light blue). Mark major river basins.'
            },
            {
                title: 'Drought Prone Areas Map',
                type: 'map',
                description: 'India map marking drought-prone zones: Severe (Western Rajasthan, Kutch - dark red), Moderate (Marathwada, Rayalaseema, N. Karnataka - orange), Occasional (others - yellow).'
            },
            {
                title: 'Drought Development Sequence',
                type: 'flowchart',
                description: 'Flow diagram: Rainfall deficit → Meteorological drought → Soil moisture deficit → Agricultural drought → Water bodies deplete → Hydrological drought → Socio-economic impacts.'
            },
            {
                title: 'Urban Flood Causes',
                type: 'diagram',
                description: 'City cross-section showing: Concretization (no absorption), Encroached water bodies, Clogged drains, Reduced green cover. Compare with natural water cycle.'
            },
            {
                title: 'Flood Management Measures',
                type: 'diagram',
                description: 'River valley showing: Embankments, Reservoirs upstream, Afforestation in catchment, Floodplain zoning, Early warning system. Label structural and non-structural measures.'
            },
            {
                title: 'El Niño - Drought Correlation',
                type: 'timeline',
                description: 'Timeline showing El Niño years (1987, 2002, 2009, 2015) and corresponding monsoon deficit/drought. Show correlation pattern.'
            }
        ],

        quickFacts: [
            '🌊 40 million hectares flood-prone in India (12% of land)',
            '🏜️ 68% of India is drought-prone',
            '🔴 Most flood-prone state: Assam (Brahmaputra floods annually)',
            '🔴 Most drought-prone: Western Rajasthan (<25 cm rain)',
            '📅 Major drought years: 1987, 2002, 2009, 2015 (El Niño correlation)',
            '🌊 "Sorrow of Bihar": Kosi River (frequent floods, course shifts)',
            '🏙️ Major urban floods: Mumbai 2005, Chennai 2015, Hyderabad 2020',
            '⛰️ GLOF increasing due to climate change (Chamoli 2021)',
            '💧 Agricultural drought can occur even with normal rainfall (distribution issue)',
            '📊 Meteorological drought: <75% of normal rainfall (IMD definition)',
            '🌾 50+ million people affected by drought annually',
            '🛡️ PMFBY: Crop insurance against drought and floods'
        ],

        upscTraps: [
            {
                trap: 'Floods only occur in high rainfall areas',
                clarity: 'FALSE! Gujarat (dry state) and Rajasthan also experience floods. Flash floods from cloudbursts, dam releases, or sudden heavy rain can affect any area. Also urban floods in cities like Mumbai, Chennai.'
            },
            {
                trap: 'Drought is only about lack of rainfall',
                clarity: 'INCOMPLETE! Drought has 4 types: Meteorological (rainfall), Hydrological (water bodies), Agricultural (soil moisture), Socio-economic (demand-supply). Agricultural drought can occur even with normal rainfall if distribution is poor.'
            },
            {
                trap: 'Building more dams will solve flood problems',
                clarity: 'PARTIAL SOLUTION! Dams can help but also cause problems: Sudden releases cause downstream floods, reservoir-induced seismicity, displacement. Non-structural measures (floodplain zoning, forecasting, watershed management) equally important.'
            },
            {
                trap: 'Eastern India has floods because it receives more rainfall',
                clarity: 'OVERSIMPLIFIED! More factors: (1) Flat terrain (slow drainage), (2) Himalayan rivers carry huge sediment (beds rise), (3) Deforestation in catchments, (4) Encroachment of floodplains, (5) Poor drainage infrastructure.'
            }
        ],

        revisionBox: {
            title: '⚡ 30-Second Revision',
            points: [
                'Flood types: Riverine, Flash, Coastal, Urban, GLOF',
                'Flood areas: Assam (top), Bihar, UP, Bengal, Odisha - EASTERN India',
                'Drought types: Meteorological → Hydrological → Agricultural → Socio-economic',
                'Drought areas: W. Rajasthan, Kutch, Marathwada, Rayalaseema - WESTERN/INTERIOR India',
                'El Niño years = Drought years (1987, 2002, 2009, 2015)',
                'Urban floods: Mumbai 2005, Chennai 2015 - drainage failure + encroachment',
                'Management: Structural (dams, embankments) + Non-structural (forecasting, zoning, insurance)'
            ]
        },

        pyqs: [
            {
                year: 2023,
                question: 'Discuss the causes of urban floods in Indian cities with recent examples.',
                type: 'Mains'
            },
            {
                year: 2022,
                question: 'What are the different types of droughts? Discuss drought mitigation strategies in India.',
                type: 'Mains'
            },
            {
                year: 2021,
                question: 'Why does Bihar experience frequent floods despite Kosi barrages?',
                type: 'Mains'
            },
            {
                year: 2020,
                question: 'Explain the concept of Glacial Lake Outburst Flood (GLOF) and its relevance to India.',
                type: 'Mains'
            },
            {
                year: 2019,
                question: 'Discuss the linkage between El Niño and droughts in India.',
                type: 'Mains'
            },
            {
                year: 2018,
                question: 'What are the flood management strategies? Discuss structural and non-structural measures.',
                type: 'Mains'
            }
        ]
    }

];

// ============================================
// FINAL EXPORT - COMPLETE INDIA CLIMATE DATA
// ============================================

// Make data available globally
window.indiaClimateData = indiaClimateData;

console.log('🌧️✅ India Climate Data COMPLETE:', indiaClimateData.length, 'topics');
console.log('📚 Topics loaded:', indiaClimateData.map(t => t.name).join(', '));
