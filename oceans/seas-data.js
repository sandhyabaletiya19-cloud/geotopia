/* ═══════════════════════════════════════════════════════════
   🌊 SEAS EXPLORER - COMPLETE DATA FILE
   All Seas, Trade Routes, and Chokepoints
   ═══════════════════════════════════════════════════════════ */

// ═══════════════════════════════════════════════════════════
// SEAS DATA
// ═══════════════════════════════════════════════════════════

const seasData = [
    // ═══════════════════════════════════════════════════════
    // SOUTH CHINA SEA
    // ═══════════════════════════════════════════════════════
    {
        id: 'south-china-sea',
        name: 'South China Sea',
        parentOcean: 'Pacific Ocean',
        parentOceanId: 'pacific-ocean',
        
        area: 3500000,
        avgDepth: 1212,
        maxDepth: 5560,
        
        coordinates: [12, 113],
        defaultZoom: 5,
        
        image: 'https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=500',
        backgroundImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920',
        
        borderingCountries: [
            { name: 'China', coastlineKm: 14500 },
            { name: 'Vietnam', coastlineKm: 3260 },
            { name: 'Philippines', coastlineKm: 36289 },
            { name: 'Malaysia', coastlineKm: 4675 },
            { name: 'Brunei', coastlineKm: 161 },
            { name: 'Indonesia', coastlineKm: 54716 },
            { name: 'Taiwan', coastlineKm: 1566 }
        ],
        
        straits: [
            { name: 'Strait of Malacca', connectsTo: 'Indian Ocean', width: 65, annualShips: 94000 },
            { name: 'Taiwan Strait', connectsTo: 'East China Sea', width: 180, annualShips: 270000 },
            { name: 'Luzon Strait', connectsTo: 'Philippine Sea', width: 250, annualShips: 50000 }
        ],
        
        economicImportance: {
            overview: 'One of the most economically important seas in the world',
            tradeValue: '$5.3 trillion',
            percentGlobalTrade: 33,
            
            majorPorts: [
                { name: 'Singapore', country: 'Singapore', containers: '37.5M TEU' },
                { name: 'Shenzhen', country: 'China', containers: '26.5M TEU' },
                { name: 'Hong Kong', country: 'China', containers: '17.8M TEU' },
                { name: 'Ho Chi Minh City', country: 'Vietnam', containers: '7.5M TEU' }
            ],
            
            fishing: {
                annualCatch: '12 million tonnes',
                value: '$21 billion'
            }
        },
        
        geopolitics: {
            strategicImportance: 'Critical',
            conflictLevel: 'High tension',
            
            territorialDisputes: [
                { name: 'Nine-Dash Line', claimants: ['China', 'Vietnam', 'Philippines', 'Malaysia', 'Brunei', 'Taiwan'] },
                { name: 'Spratly Islands', claimants: ['China', 'Vietnam', 'Philippines', 'Malaysia', 'Taiwan'] },
                { name: 'Paracel Islands', claimants: ['China', 'Vietnam', 'Taiwan'] }
            ],
            
            navalPresences: [
                { country: 'China', base: 'Woody Island, Fiery Cross Reef', purpose: 'Military control' },
                { country: 'USA', base: '7th Fleet operations', purpose: 'Freedom of navigation' },
                { country: 'Vietnam', base: 'Spratly outposts', purpose: 'Territorial defense' }
            ],
            
            countryImportance: {
                china: { importance: 'Critical', reasons: ['80% of oil imports transit', 'Claims entire sea', 'Naval access to Pacific'] },
                usa: { importance: 'Critical', reasons: ['$1.2 trillion trade transits', 'Treaty obligations to Philippines', 'Counter China rise'] },
                japan: { importance: 'Very High', reasons: ['80% of oil imports transit', 'Critical trade routes'] }
            }
        },
        
        funFacts: [
            '$5.3 trillion in trade passes through annually - about 1/3 of global trade',
            'China has created 3,200+ acres of artificial islands since 2013',
            'More military assets deployed here than any other sea',
            'Contains disputed islands claimed by 6 different countries'
        ]
    },

    // ═══════════════════════════════════════════════════════
    // MEDITERRANEAN SEA
    // ═══════════════════════════════════════════════════════
    {
        id: 'mediterranean-sea',
        name: 'Mediterranean Sea',
        parentOcean: 'Atlantic Ocean',
        parentOceanId: 'atlantic-ocean',
        
        area: 2500000,
        avgDepth: 1500,
        maxDepth: 5267,
        
        coordinates: [35, 18],
        defaultZoom: 4,
        
        image: 'https://images.unsplash.com/photo-1499939667766-4afceb292d05?w=500',
        backgroundImage: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1920',
        
        borderingCountries: [
            { name: 'Spain', coastlineKm: 1660 },
            { name: 'France', coastlineKm: 1700 },
            { name: 'Italy', coastlineKm: 7600 },
            { name: 'Greece', coastlineKm: 13676 },
            { name: 'Turkey', coastlineKm: 7200 },
            { name: 'Egypt', coastlineKm: 2450 },
            { name: 'Libya', coastlineKm: 1770 },
            { name: 'Tunisia', coastlineKm: 1300 },
            { name: 'Algeria', coastlineKm: 1622 },
            { name: 'Morocco', coastlineKm: 512 }
        ],
        
        straits: [
            { name: 'Strait of Gibraltar', connectsTo: 'Atlantic Ocean', width: 14, annualShips: 100000 },
            { name: 'Suez Canal', connectsTo: 'Red Sea', width: 0.3, annualShips: 19000 },
            { name: 'Dardanelles', connectsTo: 'Black Sea', width: 1.2, annualShips: 45000 }
        ],
        
        economicImportance: {
            overview: 'Historic trade route, Suez Canal gateway',
            tradeValue: '$1 trillion',
            percentGlobalTrade: 20,
            
            majorPorts: [
                { name: 'Valencia', country: 'Spain', containers: '5.4M TEU' },
                { name: 'Piraeus', country: 'Greece', containers: '5.1M TEU' },
                { name: 'Genoa', country: 'Italy', containers: '2.7M TEU' }
            ],
            
            tourism: {
                annualVisitors: '400 million',
                value: '$250 billion'
            }
        },
        
        geopolitics: {
            strategicImportance: 'Very High',
            
            issues: [
                { name: 'East Med Gas', parties: ['Turkey', 'Greece', 'Cyprus', 'Israel', 'Egypt'] },
                { name: 'Libya Civil War', parties: ['Turkey', 'Russia', 'EU', 'Egypt'] },
                { name: 'Migration Crisis', parties: ['EU', 'Libya', 'Turkey'] }
            ],
            
            navalPresences: [
                { country: 'USA', base: '6th Fleet (Naples)', purpose: 'NATO operations' },
                { country: 'Russia', base: 'Tartus (Syria)', purpose: 'Mediterranean presence' },
                { country: 'France', base: 'Toulon', purpose: 'Mediterranean operations' }
            ]
        },
        
        funFacts: [
            'Nearly landlocked - water takes ~100 years to exchange with Atlantic',
            'Contains 7% of marine species in only 0.7% of ocean area',
            'Was completely dry 5-6 million years ago',
            '30 million cruise passengers annually'
        ]
    },

    // ═══════════════════════════════════════════════════════
    // ARABIAN SEA
    // ═══════════════════════════════════════════════════════
    {
        id: 'arabian-sea',
        name: 'Arabian Sea',
        parentOcean: 'Indian Ocean',
        parentOceanId: 'indian-ocean',
        
        area: 3862000,
        avgDepth: 2734,
        maxDepth: 4652,
        
        coordinates: [15, 65],
        defaultZoom: 4,
        
        image: 'https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=500',
        backgroundImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1920',
        
        borderingCountries: [
            { name: 'India', coastlineKm: 7516 },
            { name: 'Pakistan', coastlineKm: 1046 },
            { name: 'Iran', coastlineKm: 2440 },
            { name: 'Oman', coastlineKm: 2092 },
            { name: 'Yemen', coastlineKm: 1906 },
            { name: 'Somalia', coastlineKm: 3025 }
        ],
        
        straits: [
            { name: 'Strait of Hormuz', connectsTo: 'Persian Gulf', width: 54, annualShips: 17000 },
            { name: 'Bab el-Mandeb', connectsTo: 'Red Sea', width: 26, annualShips: 25000 }
        ],
        
        economicImportance: {
            overview: 'Critical for global oil transport',
            tradeValue: '$1.5 trillion',
            percentGlobalOil: 25,
            
            majorPorts: [
                { name: 'Mumbai', country: 'India', trade: '$120 billion' },
                { name: 'Karachi', country: 'Pakistan', trade: '$40 billion' },
                { name: 'Gwadar', country: 'Pakistan', trade: '$5 billion' }
            ]
        },
        
        geopolitics: {
            strategicImportance: 'Critical',
            
            issues: [
                { name: 'Strait of Hormuz', parties: ['Iran', 'USA', 'Gulf States'], description: 'Critical oil chokepoint' },
                { name: 'Yemen Civil War', parties: ['Saudi Arabia', 'Iran', 'UAE'], description: 'Houthi attacks on ships' },
                { name: 'CPEC', parties: ['China', 'Pakistan', 'India'], description: 'Gwadar port development' }
            ],
            
            navalPresences: [
                { country: 'USA', base: '5th Fleet (Bahrain)', purpose: 'Persian Gulf operations' },
                { country: 'India', base: 'Multiple bases', purpose: 'Regional dominance' },
                { country: 'China', base: 'Djibouti', purpose: 'First overseas base' }
            ]
        },
        
        funFacts: [
            '20% of global oil passes through the Strait of Hormuz',
            'Summer monsoon creates massive upwelling visible from space',
            'Ancient trade routes used for 5,000+ years',
            'Contains one of world\'s largest ocean dead zones'
        ]
    },

    // ═══════════════════════════════════════════════════════
    // CARIBBEAN SEA
    // ═══════════════════════════════════════════════════════
    {
        id: 'caribbean-sea',
        name: 'Caribbean Sea',
        parentOcean: 'Atlantic Ocean',
        parentOceanId: 'atlantic-ocean',
        
        area: 2754000,
        avgDepth: 2200,
        maxDepth: 7686,
        
        coordinates: [15, -75],
        defaultZoom: 4,
        
        image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=500',
        backgroundImage: 'https://images.unsplash.com/photo-1548574505-5e239809ee19?w=1920',
        
        borderingCountries: [
            { name: 'Mexico', coastlineKm: 1100 },
            { name: 'Cuba', coastlineKm: 5746 },
            { name: 'Jamaica', coastlineKm: 1022 },
            { name: 'Colombia', coastlineKm: 1600 },
            { name: 'Venezuela', coastlineKm: 2800 },
            { name: 'Panama', coastlineKm: 1290 }
        ],
        
        straits: [
            { name: 'Panama Canal', connectsTo: 'Pacific Ocean', width: 0.15, annualShips: 14000 },
            { name: 'Yucatan Channel', connectsTo: 'Gulf of Mexico', width: 217, annualShips: 75000 },
            { name: 'Windward Passage', connectsTo: 'Atlantic Ocean', width: 80, annualShips: 15000 }
        ],
        
        economicImportance: {
            overview: 'Panama Canal gateway, tourism hub',
            tradeValue: '$500 billion',
            
            majorPorts: [
                { name: 'Colon', country: 'Panama', containers: '4.4M TEU' },
                { name: 'Cartagena', country: 'Colombia', containers: '3.2M TEU' },
                { name: 'Kingston', country: 'Jamaica', containers: '1.8M TEU' }
            ],
            
            tourism: {
                annualVisitors: '30 million',
                cruisePassengers: '12 million'
            }
        },
        
        geopolitics: {
            strategicImportance: 'High',
            
            issues: [
                { name: 'Cuba Embargo', parties: ['USA', 'Cuba'], description: '60+ year economic embargo' },
                { name: 'Venezuela Crisis', parties: ['USA', 'Venezuela', 'Russia', 'China'] },
                { name: 'Drug Trafficking', parties: ['USA', 'Colombia', 'Mexico'], description: 'Major cocaine transit route' }
            ],
            
            navalPresences: [
                { country: 'USA', base: 'Guantanamo Bay', purpose: 'Strategic base' },
                { country: 'Netherlands', base: 'Curacao', purpose: 'Drug interdiction' }
            ]
        },
        
        funFacts: [
            'Panama Canal saves 8,000 miles vs going around South America',
            'Home to 7,000+ islands',
            'Birthplace of rum - first distilled in Barbados 1650s',
            'Pirates of Caribbean was based on real history'
        ]
    },

    // ═══════════════════════════════════════════════════════
    // GULF OF MEXICO
    // ═══════════════════════════════════════════════════════
    {
        id: 'gulf-of-mexico',
        name: 'Gulf of Mexico',
        parentOcean: 'Atlantic Ocean',
        parentOceanId: 'atlantic-ocean',
        
        area: 1550000,
        avgDepth: 1486,
        maxDepth: 4384,
        
        coordinates: [25, -90],
        defaultZoom: 5,
        
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500',
        backgroundImage: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?w=1920',
        
        borderingCountries: [
            { name: 'USA', coastlineKm: 2700, states: 'Texas, Louisiana, Mississippi, Alabama, Florida' },
            { name: 'Mexico', coastlineKm: 2805 },
            { name: 'Cuba', coastlineKm: 200 }
        ],
        
        straits: [
            { name: 'Straits of Florida', connectsTo: 'Atlantic Ocean', width: 150, annualShips: 100000 },
            { name: 'Yucatan Channel', connectsTo: 'Caribbean Sea', width: 217, annualShips: 75000 }
        ],
        
        economicImportance: {
            overview: 'America\'s energy coast',
            tradeValue: '$750 billion',
            
            oilAndGas: {
                production: '1.7 million barrels/day',
                percentUSProduction: '17% oil, 5% gas',
                platforms: '2,000+ offshore platforms'
            },
            
            majorPorts: [
                { name: 'Houston', country: 'USA', ranking: '#1 US by tonnage' },
                { name: 'New Orleans', country: 'USA', trade: '$100 billion' },
                { name: 'Tampa', country: 'USA', trade: '$50 billion' }
            ]
        },
        
        geopolitics: {
            strategicImportance: 'Very High',
            
            issues: [
                { name: 'Energy Security', description: 'Critical US domestic energy', parties: ['USA'] },
                { name: 'Hurricanes', description: 'Major infrastructure damage risk', parties: ['USA', 'Mexico'] }
            ]
        },
        
        funFacts: [
            'Contains the largest ocean dead zone in Western Hemisphere',
            '40% of US commercial seafood comes from the Gulf',
            'Deepwater Horizon 2010 was largest marine oil spill in history',
            '27,000 abandoned oil wells on the seafloor'
        ]
    },

    // ═══════════════════════════════════════════════════════
    // PERSIAN GULF
    // ═══════════════════════════════════════════════════════
    {
        id: 'persian-gulf',
        name: 'Persian Gulf',
        parentOcean: 'Indian Ocean',
        parentOceanId: 'indian-ocean',
        
        area: 251000,
        avgDepth: 50,
        maxDepth: 90,
        
        coordinates: [26, 51],
        defaultZoom: 6,
        
        image: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=500',
        backgroundImage: 'https://images.unsplash.com/photo-1512632578881-f796dbdb9c1f?w=1920',
        
        borderingCountries: [
            { name: 'Iran', coastlineKm: 1880 },
            { name: 'Iraq', coastlineKm: 58 },
            { name: 'Kuwait', coastlineKm: 499 },
            { name: 'Saudi Arabia', coastlineKm: 710 },
            { name: 'Bahrain', coastlineKm: 161 },
            { name: 'Qatar', coastlineKm: 563 },
            { name: 'UAE', coastlineKm: 1318 },
            { name: 'Oman', coastlineKm: 350 }
        ],
        
        straits: [
            { name: 'Strait of Hormuz', connectsTo: 'Arabian Sea', width: 54, annualShips: 17000 }
        ],
        
        economicImportance: {
            overview: 'Heart of global energy supply',
            tradeValue: '$1 trillion oil/gas exports',
            percentGlobalOil: 30,
            
            oilReserves: '800 billion barrels (48% of world)',
            gasReserves: '2,836 tcf (40% of world)',
            
            majorPorts: [
                { name: 'Ras Tanura', country: 'Saudi Arabia', type: 'Oil terminal' },
                { name: 'Jebel Ali', country: 'UAE', ranking: 'Top 10 global' },
                { name: 'Ras Laffan', country: 'Qatar', type: 'World\'s largest LNG' }
            ]
        },
        
        geopolitics: {
            strategicImportance: 'Critical',
            
            issues: [
                { name: 'Iran-USA Tensions', parties: ['Iran', 'USA', 'Gulf States'], description: 'Hormuz closure threats' },
                { name: 'Saudi-Iran Rivalry', parties: ['Saudi Arabia', 'Iran'], description: 'Regional proxy conflicts' }
            ],
            
            navalPresences: [
                { country: 'USA', base: '5th Fleet (Bahrain)', assets: '30+ ships' },
                { country: 'Iran', base: 'Bandar Abbas', assets: 'IRGC Navy, missiles' },
                { country: 'UK', base: 'HMS Jufair (Bahrain)', purpose: 'Gulf operations' }
            ]
        },
        
        funFacts: [
            'Contains nearly half of world\'s proven oil reserves',
            'Very shallow - average depth just 50 meters',
            '60% of global desalination capacity is here',
            'Summer temperatures can reach 35°C - warmest sea'
        ]
    },

    // ═══════════════════════════════════════════════════════
    // RED SEA
    // ═══════════════════════════════════════════════════════
    {
        id: 'red-sea',
        name: 'Red Sea',
        parentOcean: 'Indian Ocean',
        parentOceanId: 'indian-ocean',
        
        area: 438000,
        avgDepth: 490,
        maxDepth: 3040,
        
        coordinates: [20, 38],
        defaultZoom: 5,
        
        image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=500',
        backgroundImage: 'https://images.unsplash.com/photo-1559825481-12a05cc00344?w=1920',
        
        borderingCountries: [
            { name: 'Egypt', coastlineKm: 1200 },
            { name: 'Sudan', coastlineKm: 853 },
            { name: 'Eritrea', coastlineKm: 1151 },
            { name: 'Djibouti', coastlineKm: 314 },
            { name: 'Saudi Arabia', coastlineKm: 1840 },
            { name: 'Yemen', coastlineKm: 440 },
            { name: 'Jordan', coastlineKm: 26 },
            { name: 'Israel', coastlineKm: 12 }
        ],
        
        straits: [
            { name: 'Bab el-Mandeb', connectsTo: 'Gulf of Aden', width: 26, annualShips: 25000 },
            { name: 'Suez Canal', connectsTo: 'Mediterranean', width: 0.3, annualShips: 19000 }
        ],
        
        economicImportance: {
            overview: 'Suez Canal route gateway',
            tradeValue: '$1 trillion transit',
            percentGlobalTrade: 12,
            
            suezCanal: {
                dailyRevenue: '$25 million',
                importance: 'Saves 7,000 km vs Cape route'
            }
        },
        
        geopolitics: {
            strategicImportance: 'Critical',
            
            issues: [
                { name: 'Houthi Attacks', parties: ['Yemen Houthis', 'Saudi Arabia', 'USA'], description: 'Ship attacks near Bab el-Mandeb' }
            ],
            
            navalPresences: [
                { country: 'USA', base: 'Camp Lemonnier (Djibouti)', purpose: 'Anti-piracy' },
                { country: 'China', base: 'Djibouti', purpose: 'First overseas base' },
                { country: 'France', base: 'Djibouti', purpose: 'Regional operations' }
            ]
        },
        
        funFacts: [
            'Sea is growing 1 cm wider each year due to tectonic spreading',
            'One of the saltiest seas in the world',
            'Coral reefs here are among the healthiest on Earth',
            'Ever Given blockage 2021 cost $10 billion per day'
        ]
    },

    // ═══════════════════════════════════════════════════════
    // NORTH SEA
    // ═══════════════════════════════════════════════════════
    {
        id: 'north-sea',
        name: 'North Sea',
        parentOcean: 'Atlantic Ocean',
        parentOceanId: 'atlantic-ocean',
        
        area: 570000,
        avgDepth: 90,
        maxDepth: 700,
        
        coordinates: [56, 3],
        defaultZoom: 5,
        
        image: 'https://images.unsplash.com/photo-1515890435782-59a5bb6ec191?w=500',
        backgroundImage: 'https://images.unsplash.com/photo-1516690553959-71a414d6b9b6?w=1920',
        
        borderingCountries: [
            { name: 'United Kingdom', coastlineKm: 2000 },
            { name: 'Norway', coastlineKm: 2500 },
            { name: 'Denmark', coastlineKm: 700 },
            { name: 'Germany', coastlineKm: 450 },
            { name: 'Netherlands', coastlineKm: 450 },
            { name: 'Belgium', coastlineKm: 65 },
            { name: 'France', coastlineKm: 200 }
        ],
        
        straits: [
            { name: 'English Channel', connectsTo: 'Atlantic', width: 33, annualShips: 500 },
            { name: 'Dover Strait', connectsTo: 'Atlantic', width: 33, annualShips: 180000 }
        ],
        
        economicImportance: {
            overview: 'Europe\'s energy sea',
            tradeValue: '$2 trillion cargo',
            
            oilAndGas: {
                ukProduction: '1 million barrels/day',
                norwayProduction: '2 million barrels/day',
                platforms: '500+ installations'
            },
            
            offshoreWind: {
                capacity: '30+ GW installed',
                futureTarget: '100+ GW by 2030'
            },
            
            majorPorts: [
                { name: 'Rotterdam', country: 'Netherlands', ranking: '#1 Europe' },
                { name: 'Antwerp', country: 'Belgium', ranking: '#2 Europe' },
                { name: 'Hamburg', country: 'Germany', ranking: '#3 Europe' }
            ]
        },
        
        geopolitics: {
            strategicImportance: 'High',
            
            issues: [
                { name: 'Brexit Fishing', parties: ['UK', 'EU'], description: 'Fishing rights disputes' },
                { name: 'Nord Stream Sabotage', parties: ['Russia', 'NATO'], description: 'Pipeline attacks 2022' },
                { name: 'Energy Transition', parties: ['All'], description: 'Shift to offshore wind' }
            ]
        },
        
        funFacts: [
            'Contains more offshore wind capacity than rest of world combined',
            'Dogger Bank was land during Ice Age - hunters lived there',
            '"Brent Crude" oil benchmark named after North Sea field',
            'Busiest shipping lanes in the world'
        ]
    },

    // ═══════════════════════════════════════════════════════
    // BAY OF BENGAL
    // ═══════════════════════════════════════════════════════
    {
        id: 'bay-of-bengal',
        name: 'Bay of Bengal',
        parentOcean: 'Indian Ocean',
        parentOceanId: 'indian-ocean',
        
        area: 2172000,
        avgDepth: 2600,
        maxDepth: 4694,
        
        coordinates: [15, 88],
        defaultZoom: 5,
        
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500',
        backgroundImage: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=1920',
        
        borderingCountries: [
            { name: 'India', coastlineKm: 2000 },
            { name: 'Bangladesh', coastlineKm: 580 },
            { name: 'Myanmar', coastlineKm: 2000 },
            { name: 'Sri Lanka', coastlineKm: 1340 },
            { name: 'Thailand', coastlineKm: 200 }
        ],
        
        straits: [
            { name: 'Palk Strait', connectsTo: 'Indian Ocean', width: 64 },
            { name: 'Ten Degree Channel', connectsTo: 'Andaman Sea', width: 150 }
        ],
        
        economicImportance: {
            overview: 'Major shipping route, monsoon-driven',
            tradeValue: '$500 billion',
            
            majorPorts: [
                { name: 'Chennai', country: 'India', ranking: 'Major hub' },
                { name: 'Kolkata', country: 'India', ranking: 'Historic port' },
                { name: 'Chittagong', country: 'Bangladesh', ranking: 'Bangladesh largest' }
            ],
            
            fishing: {
                annualCatch: '2 million tonnes',
                keySpecies: 'Hilsa, Shrimp, Tuna'
            }
        },
        
        geopolitics: {
            strategicImportance: 'High',
            
            issues: [
                { name: 'China String of Pearls', parties: ['China', 'India'], description: 'Chinese port investments' },
                { name: 'Rohingya Crisis', parties: ['Myanmar', 'Bangladesh'], description: 'Refugee crisis' }
            ]
        },
        
        funFacts: [
            'Receives water from Ganges and Brahmaputra rivers',
            'Most cyclone-prone body of water in the world',
            'Sundarbans mangrove forest is largest on Earth',
            'Monsoon reverses currents seasonally'
        ]
    },

    // ═══════════════════════════════════════════════════════
    // BLACK SEA
    // ═══════════════════════════════════════════════════════
    {
        id: 'black-sea',
        name: 'Black Sea',
        parentOcean: 'Atlantic Ocean',
        parentOceanId: 'atlantic-ocean',
        
        area: 436000,
        avgDepth: 1240,
        maxDepth: 2212,
        
        coordinates: [43, 34],
        defaultZoom: 5,
        
        image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=500',
        backgroundImage: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=1920',
        
        borderingCountries: [
            { name: 'Turkey', coastlineKm: 1400 },
            { name: 'Bulgaria', coastlineKm: 378 },
            { name: 'Romania', coastlineKm: 245 },
            { name: 'Ukraine', coastlineKm: 1600 },
            { name: 'Russia', coastlineKm: 800 },
            { name: 'Georgia', coastlineKm: 310 }
        ],
        
        straits: [
            { name: 'Bosphorus', connectsTo: 'Sea of Marmara', width: 0.7, annualShips: 45000 },
            { name: 'Dardanelles', connectsTo: 'Mediterranean', width: 1.2, annualShips: 45000 }
        ],
        
        economicImportance: {
            overview: 'Grain exports, oil transit',
            tradeValue: '$200 billion',
            
            grainExports: 'Ukraine and Russia are major exporters',
            
            majorPorts: [
                { name: 'Odesa', country: 'Ukraine', status: 'Blockaded since 2022' },
                { name: 'Novorossiysk', country: 'Russia', ranking: 'Russia largest' },
                { name: 'Constanta', country: 'Romania', ranking: 'EU gateway' }
            ]
        },
        
        geopolitics: {
            strategicImportance: 'Critical',
            conflictLevel: 'Active war zone',
            
            issues: [
                { name: 'Russia-Ukraine War', parties: ['Russia', 'Ukraine', 'NATO'], description: 'Ongoing since 2022' },
                { name: 'Crimea Annexation', parties: ['Russia', 'Ukraine'], description: 'Annexed 2014' },
                { name: 'Grain Deal', parties: ['Ukraine', 'Russia', 'Turkey', 'UN'], description: 'Export corridor negotiations' }
            ],
            
            navalPresences: [
                { country: 'Russia', base: 'Sevastopol (Crimea)', assets: 'Black Sea Fleet' },
                { country: 'Turkey', base: 'Multiple', assets: 'Largest non-Russian fleet' },
                { country: 'Ukraine', assets: 'Largely destroyed' }
            ]
        },
        
        funFacts: [
            'Anoxic below 150m - no oxygen, shipwrecks perfectly preserved',
            'Ancient Greek sailors called it "inhospitable" due to storms',
            'Receives Danube, Dnieper, and Don rivers',
            'Turkey controls only exit via Bosphorus'
        ]
    },

    // ═══════════════════════════════════════════════════════
    // BALTIC SEA
    // ═══════════════════════════════════════════════════════
    {
        id: 'baltic-sea',
        name: 'Baltic Sea',
        parentOcean: 'Atlantic Ocean',
        parentOceanId: 'atlantic-ocean',
        
        area: 377000,
        avgDepth: 55,
        maxDepth: 459,
        
        coordinates: [58, 20],
        defaultZoom: 5,
        
        image: 'https://images.unsplash.com/photo-1516690553959-71a414d6b9b6?w=500',
        backgroundImage: 'https://images.unsplash.com/photo-1515890435782-59a5bb6ec191?w=1920',
        
        borderingCountries: [
            { name: 'Sweden', coastlineKm: 3200 },
            { name: 'Finland', coastlineKm: 1250 },
            { name: 'Russia', coastlineKm: 500 },
            { name: 'Estonia', coastlineKm: 3800 },
            { name: 'Latvia', coastlineKm: 500 },
            { name: 'Lithuania', coastlineKm: 100 },
            { name: 'Poland', coastlineKm: 500 },
            { name: 'Germany', coastlineKm: 700 },
            { name: 'Denmark', coastlineKm: 700 }
        ],
        
        straits: [
            { name: 'Danish Straits', connectsTo: 'North Sea', width: 4, annualShips: 50000 }
        ],
        
        economicImportance: {
            overview: 'Now "NATO lake" after Finland/Sweden joined',
            tradeValue: '$300 billion',
            
            majorPorts: [
                { name: 'St. Petersburg', country: 'Russia', ranking: 'Russia\'s main Baltic port' },
                { name: 'Gdansk', country: 'Poland', ranking: 'Poland largest' },
                { name: 'Gothenburg', country: 'Sweden', ranking: 'Scandinavia largest' }
            ]
        },
        
        geopolitics: {
            strategicImportance: 'High',
            
            issues: [
                { name: 'NATO Expansion', parties: ['Finland', 'Sweden', 'Russia'], description: 'Now surrounded by NATO' },
                { name: 'Nord Stream Sabotage', parties: ['Unknown'], description: 'Pipelines destroyed 2022' },
                { name: 'Kaliningrad', parties: ['Russia', 'NATO'], description: 'Russian exclave surrounded' }
            ]
        },
        
        funFacts: [
            'Youngest sea - formed only 10,000 years ago',
            'Very low salinity - almost freshwater',
            'Most polluted sea in the world',
            'Freezes partially every winter'
        ]
    },

    // ═══════════════════════════════════════════════════════
    // EAST CHINA SEA
    // ═══════════════════════════════════════════════════════
    {
        id: 'east-china-sea',
        name: 'East China Sea',
        parentOcean: 'Pacific Ocean',
        parentOceanId: 'pacific-ocean',
        
        area: 1249000,
        avgDepth: 350,
        maxDepth: 2719,
        
        coordinates: [30, 126],
        defaultZoom: 5,
        
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500',
        backgroundImage: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=1920',
        
        borderingCountries: [
            { name: 'China', coastlineKm: 3000 },
            { name: 'Japan', coastlineKm: 1000 },
            { name: 'South Korea', coastlineKm: 500 },
            { name: 'Taiwan', coastlineKm: 400 }
        ],
        
        straits: [
            { name: 'Taiwan Strait', connectsTo: 'South China Sea', width: 180, annualShips: 270000 },
            { name: 'Korea Strait', connectsTo: 'Sea of Japan', width: 200, annualShips: 100000 }
        ],
        
        economicImportance: {
            overview: 'Major shipping route, disputed resources',
            tradeValue: '$1 trillion transit',
            
            potentialOilGas: 'Large undeveloped reserves'
        },
        
        geopolitics: {
            strategicImportance: 'Very High',
            
            issues: [
                { name: 'Senkaku/Diaoyu Islands', parties: ['Japan', 'China', 'Taiwan'], description: 'Territorial dispute' },
                { name: 'Taiwan Strait', parties: ['China', 'Taiwan', 'USA'], description: 'Potential flashpoint' },
                { name: 'China ADIZ', parties: ['China', 'Japan', 'USA'], description: 'Air defense zone overlap' }
            ]
        },
        
        funFacts: [
            'Senkaku/Diaoyu dispute could trigger US-China conflict',
            'China declared Air Defense Identification Zone in 2013',
            'Major fishing grounds for all surrounding countries',
            'Taiwan Strait is world\'s most surveilled waterway'
        ]
    },

    // ═══════════════════════════════════════════════════════
    // SEA OF JAPAN
    // ═══════════════════════════════════════════════════════
    {
        id: 'sea-of-japan',
        name: 'Sea of Japan',
        parentOcean: 'Pacific Ocean',
        parentOceanId: 'pacific-ocean',
        
        area: 978000,
        avgDepth: 1753,
        maxDepth: 3742,
        
        coordinates: [40, 135],
        defaultZoom: 5,
        
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500',
        backgroundImage: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=1920',
        
        borderingCountries: [
            { name: 'Japan', coastlineKm: 4000 },
            { name: 'Russia', coastlineKm: 1500 },
            { name: 'South Korea', coastlineKm: 1500 },
            { name: 'North Korea', coastlineKm: 800 }
        ],
        
        straits: [
            { name: 'Korea Strait', connectsTo: 'East China Sea', width: 200 },
            { name: 'Tsugaru Strait', connectsTo: 'Pacific Ocean', width: 20 },
            { name: 'La Pérouse Strait', connectsTo: 'Sea of Okhotsk', width: 43 }
        ],
        
        economicImportance: {
            overview: 'Japan-Korea-Russia shipping',
            tradeValue: '$200 billion',
            
            fishing: {
                keySpecies: 'Salmon, Pollock, Squid, Crab'
            }
        },
        
        geopolitics: {
            strategicImportance: 'High',
            
            issues: [
                { name: 'Name Dispute', parties: ['Japan', 'South Korea'], description: 'East Sea vs Sea of Japan' },
                { name: 'Dokdo/Takeshima', parties: ['Japan', 'South Korea'], description: 'Island sovereignty dispute' },
                { name: 'North Korean Missiles', parties: ['North Korea', 'Japan', 'USA'], description: 'Missile tests land here' }
            ]
        },
        
        funFacts: [
            'Name disputed - Korea calls it "East Sea"',
            'Dokdo/Takeshima islands disputed since 1945',
            'North Korean missiles regularly land here during tests',
            'Rich fishing grounds for all surrounding nations'
        ]
    },

    // ═══════════════════════════════════════════════════════
    // CORAL SEA
    // ═══════════════════════════════════════════════════════
    {
        id: 'coral-sea',
        name: 'Coral Sea',
        parentOcean: 'Pacific Ocean',
        parentOceanId: 'pacific-ocean',
        
        area: 4791000,
        avgDepth: 2394,
        maxDepth: 9140,
        
        coordinates: [-18, 152],
        defaultZoom: 4,
        
        image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=500',
        backgroundImage: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=1920',
        
        borderingCountries: [
            { name: 'Australia', coastlineKm: 2000 },
            { name: 'Papua New Guinea', coastlineKm: 500 },
            { name: 'New Caledonia', coastlineKm: 1000 },
            { name: 'Vanuatu', coastlineKm: 500 }
        ],
        
        straits: [
            { name: 'Torres Strait', connectsTo: 'Arafura Sea', width: 150 }
        ],
        
        economicImportance: {
            overview: 'Great Barrier Reef tourism',
            tradeValue: '$50 billion',
            
            tourism: {
                greatBarrierReef: 'World Heritage Site',
                annualVisitors: '2 million'
            }
        },
        
        geopolitics: {
            strategicImportance: 'High',
            
            issues: [
                { name: 'WWII History', description: 'Battle of Coral Sea 1942 - first carrier battle' },
                { name: 'China Expansion', parties: ['Australia', 'China'], description: 'Monitoring Chinese presence' }
            ]
        },
        
        funFacts: [
            'Contains Great Barrier Reef - largest living structure on Earth',
            'Battle of Coral Sea (1942) was first aircraft carrier battle',
            '50% of reef coral lost since 1990s due to bleaching',
            'Coral Sea Islands Territory administered by Australia'
        ]
    },

    // ═══════════════════════════════════════════════════════
    // BERING SEA
    // ═══════════════════════════════════════════════════════
    {
        id: 'bering-sea',
        name: 'Bering Sea',
        parentOcean: 'Pacific Ocean',
        parentOceanId: 'pacific-ocean',
        
        area: 2292000,
        avgDepth: 1640,
        maxDepth: 4773,
        
        coordinates: [58, -178],
        defaultZoom: 4,
        
        image: 'https://images.unsplash.com/photo-1494564605686-2e931f77a8e2?w=500',
        backgroundImage: 'https://images.unsplash.com/photo-1520923642038-b4259acecbd7?w=1920',
        
        borderingCountries: [
            { name: 'Russia', coastlineKm: 2000 },
            { name: 'USA', coastlineKm: 1500 }
        ],
        
        straits: [
            { name: 'Bering Strait', connectsTo: 'Arctic Ocean', width: 82, annualShips: 5000 }
        ],
        
        economicImportance: {
            overview: 'Major fishing grounds, Arctic gateway',
            tradeValue: '$1 billion fishing',
            
            fishing: {
                value: '$1 billion annually',
                keySpecies: 'Pollock, King Crab, Snow Crab, Salmon'
            }
        },
        
        geopolitics: {
            strategicImportance: 'High',
            
            issues: [
                { name: 'Arctic Shipping', parties: ['Russia', 'USA'], description: 'Northern Sea Route emergence' },
                { name: 'US-Russia Boundary', parties: ['USA', 'Russia'], description: 'Maritime border' }
            ]
        },
        
        funFacts: [
            'Land bridge during Ice Age - humans migrated to Americas',
            'One of most productive fishing grounds on Earth',
            'Crab populations crashed dramatically in 2022',
            'Deadliest Catch TV show filmed here'
        ]
    }
];

// ═══════════════════════════════════════════════════════════
// GLOBAL TRADE ROUTES
// ═══════════════════════════════════════════════════════════

const globalTradeRoutes = [
    {
        id: 'asia-europe-suez',
        name: 'Asia-Europe via Suez',
        type: 'container',
        statistics: {
            annualValue: '$1.5 trillion',
            percentGlobalTrade: 15,
            transitTime: '30-35 days'
        },
        route: {
            path: [
                { lat: 31.2, lng: 121.5 },
                { lat: 22.3, lng: 114.2 },
                { lat: 1.3, lng: 103.8 },
                { lat: 30, lng: 32 },
                { lat: 52, lng: 4 }
            ]
        },
        chokepoints: [
            { name: 'Strait of Malacca' },
            { name: 'Suez Canal' },
            { name: 'Bab el-Mandeb' }
        ]
    },
    {
        id: 'transpacific',
        name: 'Trans-Pacific Route',
        type: 'container',
        statistics: {
            annualValue: '$1.2 trillion',
            annualVolume: '28 million TEU',
            transitTime: '14-18 days'
        },
        route: {
            path: [
                { lat: 31.2, lng: 121.5 },
                { lat: 35, lng: 150 },
                { lat: 34, lng: -118 }
            ]
        }
    },
    {
        id: 'persian-gulf-asia',
        name: 'Persian Gulf to Asia Oil',
        type: 'oil',
        statistics: {
            dailyBarrels: 18000000,
            annualValue: '$350 billion',
            percentAsianOil: 75
        },
        route: {
            path: [
                { lat: 26.5, lng: 56.5 },
                { lat: 15, lng: 65 },
                { lat: 1.3, lng: 103.8 },
                { lat: 31.2, lng: 121.5 }
            ]
        },
        chokepoints: [
            { name: 'Strait of Hormuz' },
            { name: 'Strait of Malacca' }
        ]
    },
    {
        id: 'transatlantic',
        name: 'Transatlantic Route',
        type: 'container',
        statistics: {
            annualValue: '$800 billion',
            annualVolume: '8 million TEU',
            transitTime: '10-14 days'
        },
        route: {
            path: [
                { lat: 52, lng: 4 },
                { lat: 45, lng: -35 },
                { lat: 40.7, lng: -74 }
            ]
        }
    },
    {
        id: 'panama-route',
        name: 'Asia-US East Coast via Panama',
        type: 'container',
        statistics: {
            annualValue: '$300 billion',
            annualShips: 14000,
            transitTime: '28-35 days'
        },
        route: {
            path: [
                { lat: 31.2, lng: 121.5 },
                { lat: 9, lng: -79.5 },
                { lat: 40.7, lng: -74 }
            ]
        },
        chokepoints: [
            { name: 'Panama Canal' }
        ]
    },
    {
        id: 'australia-asia-iron',
        name: 'Australia-Asia Iron Ore',
        type: 'bulk',
        statistics: {
            annualTonnage: '900 million tonnes',
            annualValue: '$100 billion',
            percentChinaIron: 60
        },
        route: {
            path: [
                { lat: -20, lng: 118.5 },
                { lat: 0, lng: 120 },
                { lat: 30, lng: 122 }
            ]
        }
    },
    {
        id: 'qatar-asia-lng',
        name: 'Qatar-Asia LNG Route',
        type: 'lng',
        statistics: {
            annualLNG: '80 million tonnes',
            percentGlobalLNG: 25
        },
        route: {
            path: [
                { lat: 25.5, lng: 51.5 },
                { lat: 15, lng: 65 },
                { lat: 1.3, lng: 103.8 },
                { lat: 35, lng: 135 }
            ]
        },
        chokepoints: [
            { name: 'Strait of Hormuz' },
            { name: 'Strait of Malacca' }
        ]
    },
    {
        id: 'us-europe-lng',
        name: 'US-Europe LNG Route',
        type: 'lng',
        statistics: {
            annualLNG: '70 million tonnes',
            annualValue: '$50 billion',
            growth: '50% since Ukraine war'
        },
        route: {
            path: [
                { lat: 29.7, lng: -95 },
                { lat: 45, lng: -35 },
                { lat: 52, lng: 4 }
            ]
        }
    },
    {
        id: 'brazil-china-soy',
        name: 'Brazil-China Agriculture',
        type: 'bulk',
        statistics: {
            annualSoybeans: '80 million tonnes',
            annualValue: '$50 billion'
        },
        route: {
            path: [
                { lat: -24, lng: -46 },
                { lat: -35, lng: 20 },
                { lat: 1.3, lng: 103.8 },
                { lat: 31.2, lng: 121.5 }
            ]
        }
    },
    {
        id: 'middle-east-europe-oil',
        name: 'Middle East-Europe Oil',
        type: 'oil',
        statistics: {
            dailyBarrels: 3000000,
            annualValue: '$100 billion'
        },
        route: {
            path: [
                { lat: 26.5, lng: 56.5 },
                { lat: 12.5, lng: 43.5 },
                { lat: 30, lng: 32 },
                { lat: 52, lng: 4 }
            ]
        },
        chokepoints: [
            { name: 'Strait of Hormuz' },
            { name: 'Bab el-Mandeb' },
            { name: 'Suez Canal' }
        ]
    }
];

// ═══════════════════════════════════════════════════════════
// GLOBAL CHOKEPOINTS
// ═══════════════════════════════════════════════════════════

const globalChokepoints = [
    {
        id: 'strait-of-hormuz',
        name: 'Strait of Hormuz',
        location: { lat: 26.5, lng: 56.5 },
        width: 54,
        traffic: {
            dailyOilBarrels: 21000000,
            percentWorldOil: 21,
            percentWorldLNG: 35,
            annualShips: 17000
        },
        controllingCountries: ['Iran', 'Oman', 'UAE'],
        risks: ['Iran closure threats', 'Mine warfare', 'Drone attacks', 'Tanker seizures']
    },
    {
        id: 'strait-of-malacca',
        name: 'Strait of Malacca',
        location: { lat: 2.5, lng: 101 },
        width: 65,
        traffic: {
            dailyOilBarrels: 16000000,
            percentGlobalTrade: 25,
            annualShips: 94000
        },
        controllingCountries: ['Malaysia', 'Indonesia', 'Singapore'],
        risks: ['Piracy', 'Congestion', 'Shallow draft limits', 'Accidents']
    },
    {
        id: 'suez-canal',
        name: 'Suez Canal',
        location: { lat: 30, lng: 32 },
        width: 0.3,
        traffic: {
            percentGlobalTrade: 12,
            annualShips: 19000,
            annualRevenue: '$9 billion'
        },
        controllingCountries: ['Egypt'],
        risks: ['Blockage (Ever Given 2021)', 'Attacks from Sinai', 'Capacity limits']
    },
    {
        id: 'bab-el-mandeb',
        name: 'Bab el-Mandeb',
        location: { lat: 12.5, lng: 43.5 },
        width: 26,
        traffic: {
            dailyOilBarrels: 6200000,
            percentGlobalTrade: 12,
            annualShips: 25000
        },
        controllingCountries: ['Yemen', 'Djibouti', 'Eritrea'],
        risks: ['Houthi attacks', 'Piracy', 'Yemen instability', 'Terrorism']
    },
    {
        id: 'panama-canal',
        name: 'Panama Canal',
        location: { lat: 9, lng: -79.5 },
        width: 0.15,
        traffic: {
            percentGlobalTrade: 5,
            annualShips: 14000,
            annualRevenue: '$4 billion'
        },
        controllingCountries: ['Panama'],
        risks: ['Drought/water levels', 'Capacity limits', 'Locks maintenance']
    },
    {
        id: 'turkish-straits',
        name: 'Turkish Straits',
        location: { lat: 41, lng: 29 },
        width: 0.7,
        traffic: {
            dailyOilBarrels: 3000000,
            annualShips: 45000
        },
        controllingCountries: ['Turkey'],
        risks: ['Congestion', 'Accidents in Istanbul', 'Russia-Ukraine war', 'Turkey leverage']
    },
    {
        id: 'dover-strait',
        name: 'Dover Strait',
        location: { lat: 51, lng: 1.5 },
        width: 33,
        traffic: {
            annualShips: 180000,
            dailyShips: 500
        },
        controllingCountries: ['UK', 'France'],
        risks: ['Congestion', 'Collisions', 'Migrant crossings']
    },
    {
        id: 'strait-of-gibraltar',
        name: 'Strait of Gibraltar',
        location: { lat: 36, lng: -5.5 },
        width: 14,
        traffic: {
            annualShips: 100000
        },
        controllingCountries: ['Spain', 'UK (Gibraltar)', 'Morocco'],
        risks: ['Congestion', 'Naval chokepoint', 'Migration route']
    }
];

// ═══════════════════════════════════════════════════════════
// HELPER FUNCTIONS
// ═══════════════════════════════════════════════════════════

function getSeaById(id) {
    return seasData.find(sea => sea.id === id);
}

function getSeaByOcean(oceanId) {
    return seasData.filter(sea => sea.parentOceanId === oceanId);
}

function getStrategicSeas() {
    return seasData.filter(sea => 
        sea.geopolitics?.strategicImportance === 'Critical' ||
        sea.geopolitics?.strategicImportance === 'Very High'
    );
}

function formatNumber(num) {
    if (!num) return '0';
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

// Log for debugging
console.log('🌊 Seas Data Loaded!');
console.log('📊 Total Seas:', seasData.length);
console.log('🚢 Trade Routes:', globalTradeRoutes.length);
console.log('⚠️ Chokepoints:', globalChokepoints.length);
