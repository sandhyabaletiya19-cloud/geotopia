/* ═══════════════════════════════════════════════════════════
   🌊 SEAS EXPLORER - COMPLETE DATA FILE
   All Seas, Trade Routes, and Chokepoints
   ═══════════════════════════════════════════════════════════ */

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
        
        majorIslands: [
            { name: 'Hainan', country: 'China', area: '35,400 km²' },
            { name: 'Luzon', country: 'Philippines', area: '109,965 km²' },
            { name: 'Palawan', country: 'Philippines', area: '12,189 km²' },
            { name: 'Borneo (partial)', country: 'Malaysia/Brunei', area: '743,330 km²' }
        ],
        
        resources: {
            oil: '11 billion barrels proven reserves',
            gas: '190 trillion cubic feet',
            fishing: '12% of global catch',
            minerals: 'Rare earth elements in seabed',
            fishingValue: '$21 billion annually'
        },
        
        economicImportance: {
            overview: 'One of the most economically important seas in the world',
            tradeValue: '$5.3 trillion',
            percentGlobalTrade: 33,
            
            majorPorts: [
                { name: 'Singapore', country: 'Singapore', containers: '37.5M TEU' },
                { name: 'Shenzhen', country: 'China', containers: '26.5M TEU' },
                { name: 'Hong Kong', country: 'China', containers: '17.8M TEU' },
                { name: 'Ho Chi Minh City', country: 'Vietnam', containers: '7.5M TEU' },
                { name: 'Manila', country: 'Philippines', containers: '5.5M TEU' }
            ],
            
            fishing: {
                annualCatch: '12 million tonnes',
                value: '$21 billion',
                percentGlobalFish: 12
            }
        },
        
        geopolitics: {
            strategicImportance: 'Critical',
            conflictLevel: 'High tension',
            
            territorialDisputes: [
                { name: 'Nine-Dash Line', claimants: ['China', 'Vietnam', 'Philippines', 'Malaysia', 'Brunei', 'Taiwan'], description: 'China claims 90% of sea' },
                { name: 'Spratly Islands', claimants: ['China', 'Vietnam', 'Philippines', 'Malaysia', 'Taiwan'], features: '100+ islands/reefs' },
                { name: 'Paracel Islands', claimants: ['China', 'Vietnam', 'Taiwan'], status: 'China controls since 1974' },
                { name: 'Scarborough Shoal', claimants: ['China', 'Philippines'], status: 'China controls since 2012' }
            ],
            
            navalPresences: [
                { country: 'China', base: 'Woody Island, Fiery Cross Reef, Subi Reef', purpose: 'Military control', assets: 'Missiles, aircraft, radar' },
                { country: 'USA', base: '7th Fleet operations', purpose: 'Freedom of navigation', assets: 'Carrier strike groups' },
                { country: 'Vietnam', base: 'Spratly outposts (21 features)', purpose: 'Territorial defense' },
                { country: 'Philippines', base: 'Thitu Island, BRP Sierra Madre', purpose: 'Territorial defense' }
            ],
            
            artificialIslands: {
                chinaBuilt: '3,200+ acres since 2013',
                features: ['Airstrips', 'Radar systems', 'Missile batteries', 'Barracks'],
                majorBases: ['Fiery Cross Reef', 'Subi Reef', 'Mischief Reef']
            },
            
            countryImportance: {
                china: { importance: 'Critical', reasons: ['80% of oil imports transit', 'Claims entire sea', 'Naval access to Pacific', 'Fishing grounds'] },
                usa: { importance: 'Critical', reasons: ['$1.2 trillion trade transits', 'Treaty obligations to Philippines', 'Counter China rise', 'Freedom of navigation'] },
                japan: { importance: 'Very High', reasons: ['80% of oil imports transit', 'Critical trade routes', 'Alliance with USA'] },
                india: { importance: 'High', reasons: ['Act East Policy', 'Oil imports', 'Balance China'] }
            }
        },
        
        funFacts: [
            '$5.3 trillion in trade passes through annually - about 1/3 of global trade',
            'China has created 3,200+ acres of artificial islands since 2013',
            'More military assets deployed here than any other sea',
            'Contains disputed islands claimed by 6 different countries',
            '2016 tribunal ruled against China\'s claims - China rejected ruling'
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
            { name: 'Syria', coastlineKm: 193 },
            { name: 'Lebanon', coastlineKm: 225 },
            { name: 'Israel', coastlineKm: 273 },
            { name: 'Egypt', coastlineKm: 2450 },
            { name: 'Libya', coastlineKm: 1770 },
            { name: 'Tunisia', coastlineKm: 1300 },
            { name: 'Algeria', coastlineKm: 1622 },
            { name: 'Morocco', coastlineKm: 512 },
            { name: 'Monaco', coastlineKm: 4 },
            { name: 'Slovenia', coastlineKm: 47 },
            { name: 'Croatia', coastlineKm: 5835 },
            { name: 'Montenegro', coastlineKm: 294 },
            { name: 'Albania', coastlineKm: 362 },
            { name: 'Malta', coastlineKm: 253 },
            { name: 'Cyprus', coastlineKm: 648 }
        ],
        
        straits: [
            { name: 'Strait of Gibraltar', connectsTo: 'Atlantic Ocean', width: 14, annualShips: 100000 },
            { name: 'Suez Canal', connectsTo: 'Red Sea', width: 0.3, annualShips: 19000 },
            { name: 'Dardanelles', connectsTo: 'Black Sea', width: 1.2, annualShips: 45000 },
            { name: 'Strait of Messina', connectsTo: 'Tyrrhenian Sea', width: 3, annualShips: 30000 },
            { name: 'Strait of Sicily', connectsTo: 'Eastern Med', width: 145, annualShips: 40000 }
        ],
        
        majorIslands: [
            { name: 'Sicily', country: 'Italy', area: '25,711 km²' },
            { name: 'Sardinia', country: 'Italy', area: '24,090 km²' },
            { name: 'Cyprus', country: 'Cyprus', area: '9,251 km²' },
            { name: 'Corsica', country: 'France', area: '8,680 km²' },
            { name: 'Crete', country: 'Greece', area: '8,336 km²' },
            { name: 'Mallorca', country: 'Spain', area: '3,640 km²' }
        ],
        
        resources: {
            gas: 'East Med gas fields (Leviathan, Zohr, Aphrodite)',
            gasReserves: '122 trillion cubic feet',
            oil: 'Libya and Egypt offshore fields',
            fishing: '$3 billion annually',
            tourism: '30% of global tourism revenue'
        },
        
        submarineCables: {
            total: '15+ major cables',
            importance: 'Europe-Asia-Africa connectivity',
            keyRoutes: ['SEA-ME-WE', 'FLAG', 'AAE-1']
        },
        
        economicImportance: {
            overview: 'Historic trade route, Suez Canal gateway',
            tradeValue: '$1 trillion',
            percentGlobalTrade: 20,
            
            majorPorts: [
                { name: 'Valencia', country: 'Spain', containers: '5.4M TEU' },
                { name: 'Piraeus', country: 'Greece', containers: '5.1M TEU' },
                { name: 'Genoa', country: 'Italy', containers: '2.7M TEU' },
                { name: 'Algeciras', country: 'Spain', containers: '4.8M TEU' },
                { name: 'Port Said', country: 'Egypt', containers: '3.8M TEU' },
                { name: 'Tanger-Med', country: 'Morocco', containers: '7.2M TEU' }
            ],
            
            tourism: {
                annualVisitors: '400 million',
                value: '$250 billion',
                cruisePassengers: '30 million annually'
            }
        },
        
        geopolitics: {
            strategicImportance: 'Very High',
            
            issues: [
                { name: 'East Med Gas', parties: ['Turkey', 'Greece', 'Cyprus', 'Israel', 'Egypt', 'Lebanon'], description: 'Major gas field disputes' },
                { name: 'Libya Civil War', parties: ['Turkey', 'Russia', 'EU', 'Egypt', 'UAE'], description: 'Ongoing instability' },
                { name: 'Migration Crisis', parties: ['EU', 'Libya', 'Turkey', 'North Africa'], description: 'Major migration route to Europe' },
                { name: 'Greece-Turkey EEZ', parties: ['Greece', 'Turkey'], description: 'Overlapping maritime claims' },
                { name: 'Cyprus Division', parties: ['Cyprus', 'Turkey', 'Greece'], description: 'Island divided since 1974' }
            ],
            
            navalPresences: [
                { country: 'USA', base: '6th Fleet (Naples)', purpose: 'NATO operations' },
                { country: 'Russia', base: 'Tartus (Syria)', purpose: 'Mediterranean presence', assets: '15+ ships' },
                { country: 'France', base: 'Toulon', purpose: 'Mediterranean operations' },
                { country: 'Turkey', base: 'Multiple', purpose: 'Regional power projection' },
                { country: 'Italy', base: 'Taranto, La Spezia', purpose: 'NATO operations' }
            ]
        },
        
        history: {
            ancientName: 'Mare Nostrum (Our Sea) by Romans',
            civilizations: ['Phoenicians', 'Greeks', 'Romans', 'Byzantines', 'Ottomans'],
            significance: 'Birthplace of Western civilization'
        },
        
        funFacts: [
            'Nearly landlocked - water takes ~100 years to exchange with Atlantic',
            'Contains 7% of marine species in only 0.7% of ocean area',
            'Was completely dry 5-6 million years ago (Messinian Salinity Crisis)',
            '30 million cruise passengers annually',
            '21 countries border the Mediterranean',
            'Romans called it "Mare Nostrum" - Our Sea'
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
            { name: 'Somalia', coastlineKm: 3025 },
            { name: 'Maldives', coastlineKm: 644 }
        ],
        
        straits: [
            { name: 'Strait of Hormuz', connectsTo: 'Persian Gulf', width: 54, annualShips: 17000 },
            { name: 'Bab el-Mandeb', connectsTo: 'Red Sea', width: 26, annualShips: 25000 },
            { name: 'Eight Degree Channel', connectsTo: 'Laccadive Sea', width: 120 },
            { name: 'Nine Degree Channel', connectsTo: 'Laccadive Sea', width: 180 }
        ],
        
        majorIslands: [
            { name: 'Socotra', country: 'Yemen', uniqueSpecies: 700, description: 'Galapagos of Indian Ocean' },
            { name: 'Masirah', country: 'Oman', area: '649 km²' },
            { name: 'Lakshadweep', country: 'India', area: '32 km²', islands: 36 },
            { name: 'Astola Island', country: 'Pakistan', area: '6.7 km²' }
        ],
        
        monsoons: {
            southwest: 'June-September - Strong upwelling, rough seas',
            northeast: 'December-March - Calm waters, ideal shipping',
            impact: 'Seasonal fishing and shipping changes',
            upwelling: 'Summer monsoon creates massive upwelling visible from space'
        },
        
        economicImportance: {
            overview: 'Critical for global oil transport',
            tradeValue: '$1.5 trillion',
            percentGlobalOil: 25,
            
            majorPorts: [
                { name: 'Mumbai', country: 'India', trade: '$120 billion', ranking: 'India largest' },
                { name: 'Karachi', country: 'Pakistan', trade: '$40 billion', ranking: 'Pakistan largest' },
                { name: 'Gwadar', country: 'Pakistan', trade: '$5 billion', status: 'CPEC hub' },
                { name: 'Duqm', country: 'Oman', status: 'New strategic port' },
                { name: 'Salalah', country: 'Oman', containers: '4M TEU' }
            ],
            
            fishing: {
                annualCatch: '4.5 million tonnes',
                keySpecies: ['Tuna', 'Sardines', 'Mackerel', 'Shrimp'],
                countries: ['India', 'Pakistan', 'Oman', 'Yemen']
            }
        },
        
        geopolitics: {
            strategicImportance: 'Critical',
            
            issues: [
                { name: 'Strait of Hormuz', parties: ['Iran', 'USA', 'Gulf States'], description: 'Critical oil chokepoint, Iran closure threats' },
                { name: 'Yemen Civil War', parties: ['Saudi Arabia', 'Iran', 'UAE', 'Houthis'], description: 'Houthi attacks on ships' },
                { name: 'CPEC/Gwadar', parties: ['China', 'Pakistan', 'India'], description: 'Chinese port development concerns India' },
                { name: 'Piracy', parties: ['Somalia', 'International'], description: 'Reduced but still present' }
            ],
            
            navalPresences: [
                { country: 'USA', base: '5th Fleet (Bahrain)', purpose: 'Persian Gulf operations' },
                { country: 'India', base: 'INS Kadamba (Karwar), Lakshadweep', purpose: 'Regional dominance' },
                { country: 'China', base: 'Djibouti', purpose: 'First overseas base, CPEC protection' },
                { country: 'Pakistan', base: 'Karachi, Ormara', purpose: 'Coastal defense' },
                { country: 'France', base: 'Abu Dhabi', purpose: 'Regional presence' }
            ],
            
            indiaStrategy: {
                goal: 'Net security provider in Indian Ocean',
                bases: 'Expanding Andaman & Nicobar, Lakshadweep',
                concerns: 'Chinese String of Pearls',
                partnerships: 'QUAD, bilateral with Oman, France'
            }
        },
        
        deadZone: {
            area: '165,000 km² - One of world\'s largest',
            cause: 'Monsoon-driven upwelling depletes oxygen',
            depth: '150-1000m depth',
            impact: 'No fish in affected zone'
        },
        
        funFacts: [
            '20% of global oil passes through the Strait of Hormuz',
            'Summer monsoon creates massive upwelling visible from space',
            'Ancient trade routes used for 5,000+ years (Indus Valley to Mesopotamia)',
            'Contains one of world\'s largest ocean dead zones',
            'Socotra island has 700 species found nowhere else on Earth',
            'First named by ancient Greeks - "Erythraean Sea"'
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
            { name: 'Belize', coastlineKm: 386 },
            { name: 'Guatemala', coastlineKm: 148 },
            { name: 'Honduras', coastlineKm: 644 },
            { name: 'Nicaragua', coastlineKm: 910 },
            { name: 'Costa Rica', coastlineKm: 212 },
            { name: 'Panama', coastlineKm: 1290 },
            { name: 'Colombia', coastlineKm: 1600 },
            { name: 'Venezuela', coastlineKm: 2800 },
            { name: 'Cuba', coastlineKm: 5746 },
            { name: 'Jamaica', coastlineKm: 1022 },
            { name: 'Haiti', coastlineKm: 1771 },
            { name: 'Dominican Republic', coastlineKm: 1288 },
            { name: 'Puerto Rico (US)', coastlineKm: 501 }
        ],
        
        straits: [
            { name: 'Panama Canal', connectsTo: 'Pacific Ocean', width: 0.15, annualShips: 14000 },
            { name: 'Yucatan Channel', connectsTo: 'Gulf of Mexico', width: 217, annualShips: 75000 },
            { name: 'Windward Passage', connectsTo: 'Atlantic Ocean', width: 80, annualShips: 15000 },
            { name: 'Mona Passage', connectsTo: 'Atlantic Ocean', width: 120, annualShips: 10000 }
        ],
        
        majorIslands: [
            { name: 'Cuba', area: '109,884 km²', population: '11.3 million' },
            { name: 'Hispaniola', area: '76,192 km²', countries: 'Haiti, Dominican Republic' },
            { name: 'Jamaica', area: '10,991 km²', population: '2.9 million' },
            { name: 'Puerto Rico', area: '9,104 km²', status: 'US Territory' },
            { name: 'Trinidad', area: '4,768 km²', population: '1.4 million' }
        ],
        
        hurricanes: {
            season: 'June 1 - November 30',
            annualAverage: '12 named storms, 6 hurricanes',
            majorOnes: 'Category 3+ average 3 per year',
            damage: '$50+ billion in bad years',
            recentMajor: ['Maria 2017', 'Irma 2017', 'Dorian 2019'],
            formation: 'Warm waters (26°C+) fuel development'
        },
        
        biodiversity: {
            coralReefs: 'Second largest barrier reef (Mesoamerican Reef - 1,000 km)',
            species: '9% of world\'s coral reefs',
            fishSpecies: '1,400+ fish species',
            threats: ['Bleaching', 'Pollution', 'Overfishing', 'Sargassum invasion'],
            marineParks: 'Many protected areas'
        },
        
        economicImportance: {
            overview: 'Panama Canal gateway, tourism hub',
            tradeValue: '$500 billion',
            
            majorPorts: [
                { name: 'Colon', country: 'Panama', containers: '4.4M TEU' },
                { name: 'Cartagena', country: 'Colombia', containers: '3.2M TEU' },
                { name: 'Kingston', country: 'Jamaica', containers: '1.8M TEU' },
                { name: 'Freeport', country: 'Bahamas', containers: '1.5M TEU' },
                { name: 'San Juan', country: 'Puerto Rico', containers: '1.3M TEU' }
            ],
            
            tourism: {
                annualVisitors: '30 million',
                cruisePassengers: '12 million',
                value: '$60 billion annually',
                topDestinations: ['Cancun', 'Dominican Republic', 'Cuba', 'Jamaica', 'Bahamas']
            },
            
            oilAndGas: {
                trinidadLNG: 'Major LNG exporter',
                venezuelaOil: 'Large offshore reserves',
                mexicoGulf: 'Connected to Gulf reserves'
            }
        },
        
        geopolitics: {
            strategicImportance: 'High',
            
            issues: [
                { name: 'Cuba Embargo', parties: ['USA', 'Cuba'], description: '60+ year economic embargo', status: 'Ongoing' },
                { name: 'Venezuela Crisis', parties: ['USA', 'Venezuela', 'Russia', 'China'], description: 'Political/economic collapse' },
                { name: 'Drug Trafficking', parties: ['USA', 'Colombia', 'Mexico'], description: 'Major cocaine transit route' },
                { name: 'Haiti Instability', parties: ['Haiti', 'UN', 'USA'], description: 'Gang violence, political collapse' },
                { name: 'Nicaragua Tensions', parties: ['Nicaragua', 'USA'], description: 'Authoritarian government' }
            ],
            
            navalPresences: [
                { country: 'USA', base: 'Guantanamo Bay (Cuba)', purpose: 'Strategic base, detention' },
                { country: 'USA', base: 'Roosevelt Roads (PR)', purpose: 'Regional operations' },
                { country: 'Netherlands', base: 'Curacao', purpose: 'Drug interdiction' },
                { country: 'France', base: 'Martinique', purpose: 'Overseas territory defense' },
                { country: 'UK', base: 'Cayman Islands', purpose: 'Overseas territory' }
            ]
        },
        
        history: {
            colonialPowers: ['Spain', 'Britain', 'France', 'Netherlands', 'Denmark'],
            pirateEra: '1650-1730 - Golden Age of Piracy',
            famousPirates: ['Blackbeard', 'Henry Morgan', 'Calico Jack'],
            slaveRoute: 'Major destination for Atlantic slave trade'
        },
        
        funFacts: [
            'Panama Canal saves 8,000 miles vs going around South America',
            'Home to 7,000+ islands',
            'Birthplace of rum - first distilled in Barbados 1650s',
            'Pirates of Caribbean was based on real history',
            'Bermuda Triangle myths originate here',
            'Caribbean nations have won 150+ Olympic medals'
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
            { name: 'USA', coastlineKm: 2700, states: ['Texas', 'Louisiana', 'Mississippi', 'Alabama', 'Florida'] },
            { name: 'Mexico', coastlineKm: 2805, states: ['Tamaulipas', 'Veracruz', 'Tabasco', 'Campeche', 'Yucatan', 'Quintana Roo'] },
            { name: 'Cuba', coastlineKm: 200 }
        ],
        
        straits: [
            { name: 'Straits of Florida', connectsTo: 'Atlantic Ocean', width: 150, annualShips: 100000 },
            { name: 'Yucatan Channel', connectsTo: 'Caribbean Sea', width: 217, annualShips: 75000 }
        ],
        
        hurricanes: {
            frequency: '6-10 major hurricanes per decade',
            recentMajor: [
                { name: 'Katrina', year: 2005, cost: '$125 billion', deaths: 1833 },
                { name: 'Harvey', year: 2017, cost: '$125 billion', rainfall: '60+ inches' },
                { name: 'Ida', year: 2021, cost: '$75 billion' },
                { name: 'Michael', year: 2018, cost: '$25 billion', category: 5 }
            ],
            oilDisruption: 'Major storms can shut 95% of Gulf production',
            season: 'June-November'
        },
        
        biodiversity: {
            species: '15,000+ marine species',
            dolphins: 'Largest dolphin populations in US waters',
            seaTurtles: '5 species nest on beaches',
            threats: ['Dead zone', 'Oil spills', 'Warming'],
            wetlands: 'Louisiana coast losing football field of wetland per hour'
        },
        
        deadZone: {
            area: '15,000 km² average (can reach 22,000 km²)',
            cause: 'Mississippi River agricultural runoff (nitrogen, phosphorus)',
            location: 'Louisiana-Texas coast',
            impact: 'No fish or shrimp can survive',
            ranking: 'Second largest in world'
        },
        
        deepwaterHorizon: {
            date: 'April 20, 2010',
            spillAmount: '4.9 million barrels (210 million gallons)',
            duration: '87 days',
            cost: '$65 billion total (BP)',
            deaths: 11 workers killed,
            impact: 'Largest marine oil spill in history',
            recovery: 'Ongoing - some areas still affected'
        },
        
        economicImportance: {
            overview: 'America\'s energy coast, major fishing',
            tradeValue: '$750 billion',
            
            oilAndGas: {
                production: '1.7 million barrels/day oil',
                percentUSProduction: '17% of US oil, 5% of US gas',
                platforms: '2,000+ offshore platforms',
                reserves: '48 billion barrels oil, 141 tcf gas',
                deepwater: 'World\'s most advanced deepwater drilling'
            },
            
            majorPorts: [
                { name: 'Houston', country: 'USA', ranking: '#1 US by tonnage', trade: '$300 billion' },
                { name: 'New Orleans', country: 'USA', trade: '$100 billion', type: 'Mississippi River gateway' },
                { name: 'Corpus Christi', country: 'USA', type: 'Oil export hub' },
                { name: 'Tampa', country: 'USA', trade: '$50 billion' },
                { name: 'Mobile', country: 'USA', type: 'General cargo' },
                { name: 'Veracruz', country: 'Mexico', ranking: 'Mexico largest Gulf port' }
            ],
            
            fishing: {
                value: '$1 billion annually',
                percentUSSeafood: '40% of US commercial seafood',
                keySpecies: ['Shrimp', 'Oysters', 'Red Snapper', 'Menhaden', 'Blue Crab']
            }
        },
        
        geopolitics: {
            strategicImportance: 'Very High',
            
            issues: [
                { name: 'Energy Security', description: 'Critical US domestic energy', parties: ['USA'] },
                { name: 'Hurricanes', description: 'Major infrastructure damage risk', parties: ['USA', 'Mexico'] },
                { name: 'Immigration', description: 'Route for migrants from Central America', parties: ['USA', 'Mexico'] },
                { name: 'Drug Trafficking', description: 'Smuggling routes', parties: ['USA', 'Mexico'] }
            ],
            
            militaryBases: [
                { name: 'Naval Station Mayport', state: 'Florida' },
                { name: 'NAS Pensacola', state: 'Florida', type: 'Naval aviation training' },
                { name: 'NAS Corpus Christi', state: 'Texas' },
                { name: 'Coast Guard Sector', multiple: true }
            ]
        },
        
        loopCurrent: {
            description: 'Warm current that enters from Caribbean',
            speed: '3-4 knots',
            hurricaneImpact: 'Intensifies hurricanes passing over it',
            oilSpillImpact: 'Carried Deepwater Horizon oil to Florida'
        },
        
        funFacts: [
            'Contains the largest ocean dead zone in Western Hemisphere',
            '40% of US commercial seafood comes from the Gulf',
            'Deepwater Horizon 2010 was largest marine oil spill in history',
            '27,000 abandoned oil wells on the seafloor',
            'Loop Current can accelerate hurricanes from Cat 3 to Cat 5 in 24 hours',
            'Houston Ship Channel is the busiest waterway in the USA'
        ]
    },

    // ═══════════════════════════════════════════════════════
    // PERSIAN GULF
    // ═══════════════════════════════════════════════════════
    {
        id: 'persian-gulf',
        name: 'Persian Gulf',
        alternateNames: ['Arabian Gulf (Arab states)'],
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
            { name: 'Iran', coastlineKm: 1880, oilReserves: '157 billion barrels' },
            { name: 'Iraq', coastlineKm: 58, oilReserves: '145 billion barrels' },
            { name: 'Kuwait', coastlineKm: 499, oilReserves: '102 billion barrels' },
            { name: 'Saudi Arabia', coastlineKm: 710, oilReserves: '267 billion barrels' },
            { name: 'Bahrain', coastlineKm: 161 },
            { name: 'Qatar', coastlineKm: 563, gasReserves: '871 tcf' },
            { name: 'UAE', coastlineKm: 1318, oilReserves: '98 billion barrels' },
            { name: 'Oman', coastlineKm: 350 }
        ],
        
        straits: [
            { name: 'Strait of Hormuz', connectsTo: 'Arabian Sea/Gulf of Oman', width: 54, annualShips: 17000, oilDaily: '21 million barrels' }
        ],
        
        oilAndGas: {
            oilReserves: '800 billion barrels (48% of global proven)',
            gasReserves: '2,836 tcf (40% of global)',
            dailyProduction: '30% of global oil production (30 million barrels/day)',
            
            countryReserves: {
                saudiArabia: { oil: '267 billion barrels', rank: '#2 global' },
                iran: { oil: '157 billion barrels', rank: '#4 global' },
                iraq: { oil: '145 billion barrels', rank: '#5 global' },
                kuwait: { oil: '102 billion barrels' },
                uae: { oil: '98 billion barrels' },
                qatar: { gas: '871 tcf', rank: '#3 global gas' }
            },
            
            majorFields: [
                { name: 'Ghawar', country: 'Saudi Arabia', type: 'World\'s largest oil field' },
                { name: 'Safaniya', country: 'Saudi Arabia', type: 'World\'s largest offshore' },
                { name: 'North Dome/South Pars', country: 'Qatar/Iran', type: 'World\'s largest gas field' },
                { name: 'Burgan', country: 'Kuwait', type: 'Second largest oil field' }
            ]
        },
        
        climate: {
            summerWaterTemp: '35-36°C',
            summerAirTemp: '50°C+ possible',
            description: 'Hottest sea water on Earth',
            evaporation: 'Very high - increases salinity to 40-70 ppt',
            humidity: 'Extremely high in summer'
        },
        
        desalination: {
            capacity: '60% of global desalination capacity',
            countries: 'Saudi Arabia, UAE, Kuwait lead',
            production: '5 billion gallons/day',
            importance: 'Only freshwater source for many cities'
        },
        
        economicImportance: {
            overview: 'Heart of global energy supply',
            tradeValue: '$1 trillion oil/gas exports annually',
            percentGlobalOil: 30,
            
            majorPorts: [
                { name: 'Ras Tanura', country: 'Saudi Arabia', type: 'World\'s largest oil terminal', capacity: '6.5 million bpd' },
                { name: 'Jebel Ali', country: 'UAE', ranking: 'Top 10 global container port', containers: '14M TEU' },
                { name: 'Ras Laffan', country: 'Qatar', type: 'World\'s largest LNG port', lngCapacity: '77 million tonnes' },
                { name: 'Kharg Island', country: 'Iran', type: 'Iran\'s main oil export terminal' },
                { name: 'Mina Al Ahmadi', country: 'Kuwait', type: 'Major oil terminal' }
            ]
        },
        
        geopolitics: {
            strategicImportance: 'Critical - Most important sea for global energy',
            tensionLevel: 'High',
            
            issues: [
                { name: 'Iran-USA Tensions', parties: ['Iran', 'USA', 'Gulf States'], description: 'Hormuz closure threats, sanctions, nuclear deal' },
                { name: 'Saudi-Iran Rivalry', parties: ['Saudi Arabia', 'Iran'], description: 'Regional proxy conflicts (Yemen, Syria, Iraq)' },
                { name: 'Iran Nuclear Program', parties: ['Iran', 'USA', 'EU', 'Israel'], description: 'Nuclear weapons concerns' },
                { name: 'Qatar Blockade (ended)', parties: ['Saudi Arabia', 'UAE', 'Qatar'], description: '2017-2021 diplomatic crisis' },
                { name: 'Tanker Wars', parties: ['Iran', 'USA', 'UK'], description: 'Ship seizures, attacks' }
            ],
            
            navalPresences: [
                { country: 'USA', base: '5th Fleet HQ (Bahrain)', assets: '30+ ships, 20,000 personnel' },
                { country: 'Iran', base: 'Bandar Abbas', assets: 'IRGC Navy, fast attack boats, anti-ship missiles' },
                { country: 'UK', base: 'HMS Jufair (Bahrain)', purpose: 'Joint Naval Command' },
                { country: 'France', base: 'Abu Dhabi', assets: 'Permanent naval base' },
                { country: 'Saudi Arabia', base: 'Multiple', assets: 'Expanding naval fleet' }
            ],
            
            hormuzThreats: {
                iranCapability: 'Anti-ship missiles, mines, fast attack boats, drones',
                closureImpact: 'Would spike oil prices 100%+, global recession',
                usResponse: 'Carrier strike groups, mine countermeasures'
            }
        },
        
        funFacts: [
            'Contains nearly half of world\'s proven oil reserves',
            'Very shallow - average depth just 50 meters',
            '60% of global desalination capacity is here',
            'Summer surface temperatures can reach 36°C - warmest sea in world',
            'Name disputed - "Persian Gulf" vs "Arabian Gulf"',
            'Qatar/Iran share world\'s largest gas field (North Dome/South Pars)'
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
            { name: 'Bab el-Mandeb', connectsTo: 'Gulf of Aden', width: 26, annualShips: 25000, meaning: 'Gate of Tears' },
            { name: 'Suez Canal', connectsTo: 'Mediterranean', width: 0.3, annualShips: 19000 },
            { name: 'Strait of Tiran', connectsTo: 'Gulf of Aqaba', width: 8 }
        ],
        
        geology: {
            formation: 'Rifting between African and Arabian plates',
            growth: '1-1.5 cm per year widening',
            age: 'Began forming 30 million years ago',
            future: 'Will become new ocean in 200 million years',
            hotBrines: 'Deep sea brine pools with extreme conditions',
            tectonics: 'Part of Great Rift Valley system'
        },
        
        biodiversity: {
            coralReefs: 'Among healthiest in world - resist bleaching',
            species: '1,200+ fish species',
            coralSpecies: '300+ hard coral species',
            uniqueness: '10% of species found nowhere else (endemic)',
            resilience: 'Corals adapted to heat - important for research',
            threats: 'Coastal development, tourism pressure, climate'
        },
        
        suezCanalDetails: {
            opened: '1869',
            builder: 'Ferdinand de Lesseps (French)',
            length: '193 km (120 miles)',
            width: '205m (minimum)',
            depth: '24m',
            transitTime: '12-16 hours',
            dailyShips: '50-60 ships average',
            annualShips: 19000,
            revenue: '$9.4 billion (2023)',
            
            expansions: [
                { year: 2015, description: 'New Suez Canal - parallel channel' }
            ],
            
            everGivenBlockage: {
                date: 'March 23-29, 2021',
                duration: '6 days',
                ship: 'Ever Given (400m container ship)',
                cause: 'Strong winds, human error',
                shipsBlocked: '400+ ships',
                costPerDay: '$10 billion',
                totalImpact: '$60 billion trade delayed'
            },
            
            importance: 'Saves 7,000 km vs Cape route (Europe-Asia)'
        },
        
        economicImportance: {
            overview: 'Suez Canal route gateway',
            tradeValue: '$1 trillion annual transit',
            percentGlobalTrade: 12,
            
            majorPorts: [
                { name: 'Jeddah', country: 'Saudi Arabia', type: 'Major container hub' },
                { name: 'Port Sudan', country: 'Sudan', type: 'Sudan\'s main port' },
                { name: 'Aqaba', country: 'Jordan', type: 'Jordan\'s only port' },
                { name: 'Eilat', country: 'Israel', type: 'Israel Red Sea port' },
                { name: 'Massawa', country: 'Eritrea', type: 'Historic port' }
            ],
            
            tourism: {
                diving: 'World-class diving destination',
                destinations: ['Sharm El Sheikh', 'Hurghada', 'Aqaba'],
                value: '$20 billion annually'
            }
        },
        
        geopolitics: {
            strategicImportance: 'Critical',
            
            issues: [
                { name: 'Houthi Attacks', parties: ['Yemen Houthis', 'Saudi Arabia', 'USA', 'UK'], description: 'Attacks on commercial shipping 2023-2024', impact: 'Major shipping rerouted to Cape' },
                { name: 'Ethiopia-Egypt Tensions', parties: ['Ethiopia', 'Egypt', 'Sudan'], description: 'GERD dam water dispute' },
                { name: 'Horn of Africa Instability', parties: ['Somalia', 'Eritrea', 'Djibouti'], description: 'Regional conflicts' }
            ],
            
            navalPresences: [
                { country: 'USA', base: 'Camp Lemonnier (Djibouti)', purpose: 'Anti-piracy, counterterrorism', assets: '4,000 personnel' },
                { country: 'China', base: 'Djibouti', purpose: 'First overseas base (2017)', assets: 'Naval base, 2,000 personnel' },
                { country: 'France', base: 'Djibouti', purpose: 'Largest foreign deployment', assets: '1,500 personnel' },
                { country: 'Japan', base: 'Djibouti', purpose: 'Only overseas base' },
                { country: 'Saudi Arabia', assets: 'Regular patrols' },
                { country: 'Egypt', assets: 'Suez Canal protection' }
            ],
            
            djiboutiStrategic: {
                bases: '6+ foreign military bases',
                countries: ['USA', 'China', 'France', 'Japan', 'Italy', 'Spain'],
                reason: 'Controls Bab el-Mandeb chokepoint'
            }
        },
        
        funFacts: [
            'Sea is growing 1-1.5 cm wider each year due to tectonic spreading',
            'One of the saltiest seas in the world (36-40 ppt)',
            'Coral reefs here are among the healthiest on Earth - resist bleaching',
            'Ever Given blockage 2021 cost $10 billion per day',
            'Name may come from red algae blooms or red-colored mountains',
            'Moses crossing is said to have occurred here (Gulf of Aqaba)',
            'Contains hot brine pools at 60°C with unique life forms'
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
            { name: 'English Channel', connectsTo: 'Atlantic', width: 240, annualShips: 200000 },
            { name: 'Dover Strait', connectsTo: 'English Channel', width: 33, annualShips: 180000 },
            { name: 'Skagerrak', connectsTo: 'Baltic Sea', width: 140 },
            { name: 'Kattegat', connectsTo: 'Baltic Sea', width: 70 }
        ],
        
        oilAndGasHistory: {
            discovery: '1959 (Groningen gas), 1969 (Ekofisk oil)',
            peakProduction: '1999 - 6 million barrels/day combined UK/Norway',
            currentProduction: '3 million barrels/day (declining)',
            decline: 'Mature basin - natural decline',
            totalExtracted: '45 billion barrels oil, 120 tcf gas',
            
            decommissioning: {
                cost: '$100+ billion over 30 years',
                platforms: '500+ to be removed',
                challenge: 'Environmental cleanup'
            },
            
            majorFields: [
                { name: 'Ekofisk', country: 'Norway', status: 'Still producing since 1971' },
                { name: 'Forties', country: 'UK', status: 'Declining' },
                { name: 'Brent', country: 'UK', status: 'Ceased 2021 - gave name to Brent Crude' },
                { name: 'Johan Sverdrup', country: 'Norway', status: 'New giant - 2019' }
            ]
        },
        
        offshoreWindDetails: {
            currentCapacity: '31 GW (2024)',
            target2030: '150 GW planned',
            target2050: '300 GW planned',
            
            largestFarms: [
                { name: 'Dogger Bank', country: 'UK', capacity: '3.6 GW (when complete)', status: 'Under construction' },
                { name: 'Hornsea One', country: 'UK', capacity: '1.2 GW', status: 'Operational' },
                { name: 'Hornsea Two', country: 'UK', capacity: '1.4 GW', status: 'Operational' },
                { name: 'Borssele', country: 'Netherlands', capacity: '1.5 GW', status: 'Operational' }
            ],
            
            percentPower: '15% of UK electricity from offshore wind',
            jobs: '100,000+ jobs in wind sector',
            investment: '$100 billion+ by 2030'
        },
        
        economicImportance: {
            overview: 'Europe\'s energy sea - oil/gas to wind transition',
            tradeValue: '$2 trillion cargo annually',
            
            majorPorts: [
                { name: 'Rotterdam', country: 'Netherlands', ranking: '#1 Europe, #10 World', containers: '14.5M TEU' },
                { name: 'Antwerp', country: 'Belgium', ranking: '#2 Europe', containers: '12M TEU' },
                { name: 'Hamburg', country: 'Germany', ranking: '#3 Europe', containers: '8.7M TEU' },
                { name: 'Bremerhaven', country: 'Germany', ranking: 'Major auto hub' },
                { name: 'Felixstowe', country: 'UK', ranking: 'UK largest' }
            ],
            
            fishing: {
                value: '$3 billion annually',
                keySpecies: ['Cod', 'Herring', 'Mackerel', 'Haddock', 'Plaice'],
                issues: 'Overfishing, Brexit disputes'
            }
        },
        
        geopolitics: {
            strategicImportance: 'High',
            
            issues: [
                { name: 'Brexit Fishing', parties: ['UK', 'EU'], description: 'Fishing rights disputes since 2021' },
                { name: 'Nord Stream Sabotage', parties: ['Unknown', 'Russia', 'NATO'], description: 'Pipelines destroyed Sept 2022' },
                { name: 'Energy Transition', parties: ['All'], description: 'Shift from oil/gas to offshore wind' },
                { name: 'Subsea Cables', parties: ['NATO', 'Russia'], description: 'Critical infrastructure protection' }
            ],
            
            nordStreamSabotage: {
                date: 'September 26, 2022',
                location: 'Danish/Swedish EEZ',
                damage: '3 of 4 pipelines destroyed',
                methane: 'Largest methane release in history',
                perpetrator: 'Unknown - under investigation',
                theories: ['Ukraine', 'Russia', 'USA', 'UK'],
                impact: 'Ended Russian gas to Germany'
            }
        },
        
        doggerBank: {
            description: 'Large sandbank in central North Sea',
            depth: '15-36 meters',
            area: '17,600 km²',
            history: 'Was dry land during Ice Age - hunters lived there',
            archaeology: 'Mammoth bones, human artifacts found',
            flooding: 'Submerged ~8,000 years ago (Storegga tsunami)',
            future: 'World\'s largest wind farm under construction'
        },
        
        funFacts: [
            'Contains more offshore wind capacity than rest of world combined',
            'Dogger Bank was land during Ice Age - hunters lived there until 6000 BC',
            '"Brent Crude" oil benchmark named after North Sea field',
            'Busiest shipping lanes in the world (500+ ships/day through Dover)',
            'World\'s first offshore wind farm built here (1991, Denmark)',
            'Nord Stream sabotage was largest methane release ever'
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
            { name: 'India', coastlineKm: 2000, states: ['West Bengal', 'Odisha', 'Andhra Pradesh', 'Tamil Nadu'] },
            { name: 'Bangladesh', coastlineKm: 580 },
            { name: 'Myanmar', coastlineKm: 2000 },
            { name: 'Sri Lanka', coastlineKm: 1340 },
            { name: 'Thailand', coastlineKm: 200 },
            { name: 'Indonesia (Andaman Sea)', coastlineKm: 500 }
        ],
        
        straits: [
            { name: 'Palk Strait', connectsTo: 'Indian Ocean', width: 64, between: 'India-Sri Lanka' },
            { name: 'Ten Degree Channel', connectsTo: 'Andaman Sea', width: 150 },
            { name: 'Preparis Channel', connectsTo: 'Andaman Sea', width: 60 }
        ],
        
        islands: [
            { name: 'Andaman Islands', country: 'India', count: 572, strategic: 'Tri-Service Command' },
            { name: 'Nicobar Islands', country: 'India', count: 22, strategic: 'Close to Malacca Strait' },
            { name: 'Sri Lanka', type: 'Island nation', area: '65,610 km²' }
        ],
        
        cyclones: {
            frequency: 'Most cyclone-prone body of water in world',
            annualAverage: '5-6 cyclones per year',
            seasonPrimary: 'October-November (post-monsoon)',
            seasonSecondary: 'April-May (pre-monsoon)',
            
            deadliestCyclones: [
                { name: 'Bhola Cyclone', year: 1970, deaths: '300,000-500,000', location: 'Bangladesh' },
                { name: 'Cyclone Nargis', year: 2008, deaths: '138,000', location: 'Myanmar' },
                { name: 'Super Cyclone', year: 1999, deaths: '10,000', location: 'Odisha, India' },
                { name: 'Cyclone Sidr', year: 2007, deaths: '3,500', location: 'Bangladesh' }
            ],
            
            whyDeadly: 'Shallow bay funnels storm surge, dense populations'
        },
        
        rivers: {
            ganges: { discharge: '1,080 km³ annually', sediment: '1.8 billion tonnes' },
            brahmaputra: { discharge: 'Second largest', source: 'Tibet' },
            irrawaddy: { country: 'Myanmar', discharge: 'Major freshwater input' },
            impact: 'Creates low salinity, high sediment, massive delta',
            bengalFan: 'World\'s largest submarine fan - sediment from Himalayas'
        },
        
        economicImportance: {
            overview: 'Major shipping route, monsoon-driven economy',
            tradeValue: '$500 billion',
            
            majorPorts: [
                { name: 'Chennai', country: 'India', ranking: 'Second largest in India', containers: '1.5M TEU' },
                { name: 'Kolkata/Haldia', country: 'India', ranking: 'Historic Ganges port' },
                { name: 'Visakhapatnam', country: 'India', ranking: 'Major deepwater port' },
                { name: 'Chittagong', country: 'Bangladesh', ranking: 'Bangladesh largest' },
                { name: 'Colombo', country: 'Sri Lanka', ranking: 'Major transshipment hub', containers: '7M TEU' },
                { name: 'Yangon', country: 'Myanmar', ranking: 'Myanmar largest' }
            ],
            
            fishing: {
                annualCatch: '2 million tonnes',
                keySpecies: ['Hilsa', 'Shrimp', 'Tuna', 'Mackerel'],
                employment: '4 million fishers'
            }
        },
        
        geopolitics: {
            strategicImportance: 'High - Growing importance',
            
            issues: [
                { name: 'China String of Pearls', parties: ['China', 'India'], description: 'Chinese port investments encircling India' },
                { name: 'Rohingya Crisis', parties: ['Myanmar', 'Bangladesh'], description: 'Refugee crisis, boat people' },
                { name: 'Sri Lanka Debt', parties: ['Sri Lanka', 'China', 'India'], description: 'Hambantota port 99-year lease to China' }
            ],
            
            chinaStringOfPearls: [
                { port: 'Gwadar', country: 'Pakistan', status: 'Operational', investment: '$1.6 billion' },
                { port: 'Hambantota', country: 'Sri Lanka', status: '99-year Chinese lease', investment: '$1.4 billion' },
                { port: 'Chittagong', country: 'Bangladesh', status: 'Chinese investment' },
                { port: 'Kyaukpyu', country: 'Myanmar', status: 'Under construction', investment: '$10 billion' },
                { port: 'Sittwe', country: 'Myanmar', status: 'India-funded alternative' }
            ],
            
            indiaResponse: {
                strategy: 'SAGAR (Security and Growth for All in Region)',
                bases: 'Expanding Andaman & Nicobar Command',
                partnerships: ['BIMSTEC', 'QUAD', 'Bilateral with Sri Lanka, Bangladesh'],
                infrastructure: 'Building competing ports, connectivity'
            },
            
            quadImportance: 'India-Japan-Australia-USA cooperation zone'
        },
        
        sundarbans: {
            description: 'World\'s largest mangrove forest',
            area: '10,000 km²',
            countries: 'Bangladesh (60%), India (40%)',
            biodiversity: 'Bengal tigers, crocodiles, dolphins',
            threats: 'Sea level rise, cyclones, human activity',
            protection: 'UNESCO World Heritage Site'
        },
        
        funFacts: [
            'Receives water from Ganges and Brahmaputra - world\'s largest delta',
            'Most cyclone-prone body of water in the world',
            'Sundarbans mangrove forest is largest on Earth',
            'Monsoon reverses currents completely twice a year',
            'Bengal Fan is world\'s largest submarine sediment deposit',
            '1970 Bhola Cyclone killed 500,000 people - deadliest cyclone ever'
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
            { name: 'Bosphorus', connectsTo: 'Sea of Marmara', width: 0.7, annualShips: 45000, control: 'Turkey' },
            { name: 'Dardanelles', connectsTo: 'Mediterranean', width: 1.2, annualShips: 45000, control: 'Turkey' },
            { name: 'Kerch Strait', connectsTo: 'Sea of Azov', width: 4, status: 'Russia controlled' }
        ],
        
        anoxicZone: {
            depthStart: '150-200 meters',
            cause: 'Stratification prevents oxygen mixing',
            percentage: '90% of water volume is anoxic (oxygen-free)',
            preservation: 'Ancient shipwrecks perfectly preserved',
            hydrogenSulfide: 'Toxic gas in deep water',
            bacteria: 'Unique anaerobic bacteria thrive',
            discovery: 'Ships below 150m intact for 2,000+ years'
        },
        
        warImpact2022: {
            war: 'Russia-Ukraine War (February 2022-present)',
            
            navalLosses: [
                { ship: 'Moskva', type: 'Cruiser (flagship)', sunk: 'April 2022', cause: 'Ukrainian missiles' },
                { description: '10+ Russian ships damaged/destroyed by Ukrainian USVs (drone boats)' }
            ],
            
            grainBlockade: {
                issue: 'Russian navy blocked Ukrainian grain exports',
                impact: '25 million tons stuck in silos',
                globalEffect: 'Food prices spiked worldwide'
            },
            
            grainDeal: {
                name: 'Black Sea Grain Initiative',
                negotiated: 'July 2022, UN and Turkey',
                purpose: 'Allow Ukrainian grain exports',
                collapsed: 'July 2023, Russia withdrew',
                exports: '33 million tonnes exported while active'
            },
            
            mining: 'Both sides deployed sea mines',
            droneAttacks: 'Ukraine USV attacks reached Sevastopol, Russian oil terminals'
        },
        
        economicImportance: {
            overview: 'Grain exports, oil transit - now war zone',
            tradeValue: '$200 billion (pre-war)',
            
            grainExports: {
                ukraine: '5th largest wheat exporter',
                russia: 'Largest wheat exporter',
                together: '30% of global wheat exports'
            },
            
            majorPorts: [
                { name: 'Odesa', country: 'Ukraine', status: 'Limited operations, war damage', ranking: 'Ukraine largest' },
                { name: 'Novorossiysk', country: 'Russia', ranking: 'Russia\'s largest, oil terminal' },
                { name: 'Constanta', country: 'Romania', ranking: 'EU gateway, handling diverted Ukraine cargo' },
                { name: 'Sevastopol', country: 'Crimea (Russian-occupied)', type: 'Naval base, under attack' },
                { name: 'Varna', country: 'Bulgaria', ranking: 'Bulgaria largest' },
                { name: 'Batumi', country: 'Georgia', type: 'Oil terminal' }
            ]
        },
        
        geopolitics: {
            strategicImportance: 'Critical',
            conflictLevel: 'Active war zone',
            
            issues: [
                { name: 'Russia-Ukraine War', parties: ['Russia', 'Ukraine', 'NATO'], description: 'Ongoing since February 2022' },
                { name: 'Crimea Annexation', parties: ['Russia', 'Ukraine'], description: 'Annexed 2014, internationally not recognized' },
                { name: 'Grain Exports', parties: ['Ukraine', 'Russia', 'Turkey', 'UN'], description: 'Food security crisis' },
                { name: 'Turkish Straits', parties: ['Turkey', 'all'], description: 'Turkey controls only exit (Montreux Convention)' },
                { name: 'NATO Expansion', parties: ['Romania', 'Bulgaria', 'Turkey', 'Russia'], description: '3 NATO members border sea' }
            ],
            
            navalPresences: [
                { country: 'Russia', base: 'Sevastopol (Crimea)', assets: 'Black Sea Fleet - heavily damaged', status: 'Under Ukrainian attack' },
                { country: 'Turkey', base: 'Multiple', assets: 'Largest non-Russian fleet', role: 'Controls straits' },
                { country: 'Ukraine', assets: 'Fleet largely destroyed, but USV success' },
                { country: 'Romania', base: 'Constanta', assets: 'NATO forward presence' },
                { country: 'USA/NATO', assets: 'Rotational presence, restricted by Montreux' }
            ],
            
            montreuxConvention: {
                signed: 1936,
                rule: 'Non-Black Sea navies limited to 21 days',
                effect: 'Limits NATO naval presence',
                turkey: 'Turkey closed straits to warships after war started (2022)'
            }
        },
        
        rivers: [
            { name: 'Danube', countries: 10, discharge: 'Second largest in Europe' },
            { name: 'Dnieper', countries: ['Ukraine'], discharge: 'Ukraine\'s main river' },
            { name: 'Don', countries: ['Russia'], discharge: 'Via Sea of Azov' }
        ],
        
        funFacts: [
            'Anoxic below 150m - no oxygen, shipwrecks perfectly preserved for millennia',
            'Ancient Greeks called it "Pontos Axeinos" (Inhospitable Sea) due to storms',
            'Receives Danube, Dnieper, and Don rivers',
            'Turkey controls only exit via Bosphorus Strait',
            'Russia\'s Black Sea Fleet is world\'s oldest continuously serving fleet (1783)',
            'Ukraine sank Russia\'s flagship Moskva with missiles in 2022'
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
            { name: 'Sweden', coastlineKm: 3200, natoMember: true },
            { name: 'Finland', coastlineKm: 1250, natoMember: true, joined: '2023' },
            { name: 'Russia', coastlineKm: 500, enclaves: 'Kaliningrad, St. Petersburg' },
            { name: 'Estonia', coastlineKm: 3800, natoMember: true },
            { name: 'Latvia', coastlineKm: 500, natoMember: true },
            { name: 'Lithuania', coastlineKm: 100, natoMember: true },
            { name: 'Poland', coastlineKm: 500, natoMember: true },
            { name: 'Germany', coastlineKm: 700, natoMember: true },
            { name: 'Denmark', coastlineKm: 700, natoMember: true }
        ],
        
        straits: [
            { name: 'Danish Straits (Øresund, Great Belt, Little Belt)', connectsTo: 'North Sea', width: '4-16 km', annualShips: 50000 },
            { name: 'Kiel Canal', connectsTo: 'North Sea', type: 'Artificial', length: '98 km' }
        ],
        
        natoTransformation: {
            before2022: {
                natoMembers: ['Germany', 'Denmark', 'Poland', 'Estonia', 'Latvia', 'Lithuania'],
                neutral: ['Sweden', 'Finland'],
                russia: ['Russia (Kaliningrad, St. Petersburg)']
            },
            after2024: {
                finlandJoined: 'April 2023',
                swedenJoined: 'March 2024',
                impact: 'Russia now only has Kaliningrad exclave access',
                navalBalance: 'NATO complete dominance'
            },
            strategic: 'Baltic now effectively a "NATO Lake"'
        },
        
        pollution: {
            status: 'Most polluted sea in world',
            causes: ['Agricultural runoff (fertilizers)', 'Soviet-era industrial pollution', 'Shipping emissions', 'Sewage'],
            deadZones: '60,000+ km² dead zone (oxygen-depleted)',
            cleanup: '$100+ billion estimated needed',
            eutrophication: 'Algae blooms cover large areas each summer',
            munitions: '40,000 tonnes of WWII chemical weapons dumped'
        },
        
        nordStreamSabotage: {
            date: 'September 26, 2022',
            pipes: 'Nord Stream 1 & Nord Stream 2',
            damage: '4 underwater explosions, 3 pipelines destroyed',
            location: 'Danish and Swedish EEZ, near Bornholm',
            methane: 'Largest methane release in history',
            perpetrator: 'Unknown - investigations ongoing (Germany, Sweden, Denmark)',
            theories: ['Pro-Ukraine actors', 'Russia (false flag)', 'USA', 'UK'],
            impact: 'Ended Russian gas to Germany via Baltic',
            cost: '$10+ billion infrastructure destroyed'
        },
        
        kaliningrad: {
            description: 'Russian exclave between Poland and Lithuania',
            area: '15,100 km²',
            population: '1 million',
            military: 'Major Russian military base, nuclear-capable missiles',
            strategic: 'Now surrounded by NATO territory',
            vulnerablility: 'Land connection to Russia blocked by NATO'
        },
        
        economicImportance: {
            overview: 'Now "NATO lake" - major trade route',
            tradeValue: '$300 billion',
            
            majorPorts: [
                { name: 'St. Petersburg', country: 'Russia', ranking: 'Russia\'s Baltic gateway' },
                { name: 'Gdansk', country: 'Poland', ranking: 'Poland largest', containers: '2.1M TEU' },
                { name: 'Gothenburg', country: 'Sweden', ranking: 'Scandinavia largest' },
                { name: 'Riga', country: 'Latvia', ranking: 'Baltic states hub' },
                { name: 'Tallinn', country: 'Estonia', ranking: 'Cruise destination' },
                { name: 'Helsinki', country: 'Finland', ranking: 'Finland largest' },
                { name: 'Klaipeda', country: 'Lithuania', ranking: 'LNG import terminal' }
            ],
            
            submarineCables: {
                importance: 'Critical internet/communications cables',
                threats: 'Russian submarine activity, potential sabotage'
            }
        },
        
        geopolitics: {
            strategicImportance: 'High - Increasing',
            tensionLevel: 'Elevated since 2022',
            
            issues: [
                { name: 'NATO Expansion', parties: ['Finland', 'Sweden', 'Russia'], description: 'Finland/Sweden joined 2023-2024' },
                { name: 'Nord Stream Sabotage', parties: ['Unknown'], description: 'Pipelines destroyed September 2022' },
                { name: 'Kaliningrad', parties: ['Russia', 'NATO'], description: 'Russian exclave now surrounded by NATO' },
                { name: 'Baltic Defense', parties: ['NATO', 'Russia'], description: 'NATO building up forces' },
                { name: 'Suwalki Gap', parties: ['Poland', 'Lithuania', 'Russia'], description: '65km land corridor - NATO vulnerability' }
            ],
            
            navalBalance: {
                russia: 'Baltic Fleet (Kaliningrad) - weakened',
                nato: 'Overwhelming superiority - 8 nations',
                submarines: 'Russia still active underwater'
            }
        },
        
        uniqueFeatures: {
            salinity: 'Very low (7 ppt vs 35 ppt ocean) - almost freshwater',
            ice: 'Freezes partially every winter',
            age: 'Youngest sea - formed 10,000 years ago after Ice Age',
            tidalRange: 'Almost no tides'
        },
        
        funFacts: [
            'Youngest sea - formed only 10,000 years ago after Ice Age',
            'Very low salinity - almost freshwater (can drink in some areas)',
            'Most polluted sea in the world',
            'Freezes partially every winter - icebreakers needed',
            'Now a "NATO Lake" after Finland/Sweden joined',
            '40,000 tonnes of WWII chemical weapons dumped on seafloor'
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
            { name: 'Korea Strait', connectsTo: 'Sea of Japan', width: 200, annualShips: 100000 },
            { name: 'Tokara Strait', connectsTo: 'Pacific Ocean', width: 200 }
        ],
        
        senkakuDispute: {
            islands: {
                name: 'Senkaku (Japan) / Diaoyu (China) / Tiaoyutai (Taiwan)',
                count: '5 uninhabited islands, 3 rocks',
                totalArea: '7 km²',
                location: '170 km from Taiwan, 330 km from mainland China, 170 km from Okinawa'
            },
            
            claimants: ['Japan (administers)', 'China', 'Taiwan'],
            
            japanPosition: 'Incorporated 1895, no dispute exists',
            chinaPosition: 'Historic Chinese territory, stolen by Japan',
            taiwanPosition: 'Belongs to ROC',
            
            flashpoints: {
                intrusions: 'Monthly Chinese coast guard incursions',
                airspace: 'Regular Chinese aircraft approach',
                fishing: 'Frequent fishing vessel confrontations'
            },
            
            resources: 'Potential oil/gas reserves, rich fishing',
            usPosition: 'Covered by US-Japan security treaty',
            warRisk: 'Could trigger US-China conflict'
        },
        
        taiwanStraitTension: {
            width: '180 km at narrowest',
            traffic: '270,000 ships annually - world\'s busiest strait',
            
            chinaThreats: {
                exercises: 'Regular military exercises, including after Pelosi visit (2022)',
                missiles: 'Fired over Taiwan (2022)',
                aircraft: 'Daily incursions into Taiwan ADIZ',
                stance: 'Reserves right to use force for reunification'
            },
            
            usPolicy: {
                official: 'Strategic ambiguity - One China Policy',
                defense: 'Obligated by Taiwan Relations Act to provide defense capability',
                transits: 'Monthly freedom of navigation through strait',
                bidenStatements: '4 times said US would defend Taiwan'
            },
            
            warScenario: {
                importance: 'Would be most consequential conflict since WWII',
                semiconductors: 'Taiwan makes 90% of advanced chips',
                globalImpact: 'Would devastate global economy'
            }
        },
        
        chinaADIZ: {
            declared: 'November 2013',
            area: 'Covers most of East China Sea including Senkaku',
            requirement: 'Aircraft must identify to Chinese military',
            response: 'USA, Japan, South Korea rejected, fly without notifying',
            purpose: 'Assert control over disputed areas'
        },
        
        economicImportance: {
            overview: 'Major shipping route, disputed resources',
            tradeValue: '$1 trillion transit',
            
            potentialResources: {
                oil: '70-160 billion barrels estimated',
                gas: '1-2 trillion cubic meters',
                status: 'Undeveloped due to disputes'
            },
            
            majorPorts: [
                { name: 'Shanghai', country: 'China', ranking: '#1 World', containers: '47M TEU' },
                { name: 'Ningbo-Zhoushan', country: 'China', ranking: '#3 World', containers: '33M TEU' },
                { name: 'Busan', country: 'South Korea', ranking: '#7 World', containers: '22M TEU' },
                { name: 'Kaohsiung', country: 'Taiwan', containers: '9.5M TEU' }
            ],
            
            fishing: {
                keySpecies: ['Hairtail', 'Mackerel', 'Squid'],
                disputes: 'Frequent fishing conflicts'
            }
        },
        
        geopolitics: {
            strategicImportance: 'Very High - Potential flashpoint',
            tensionLevel: 'High',
            
            issues: [
                { name: 'Senkaku/Diaoyu Islands', parties: ['Japan', 'China', 'Taiwan'], description: 'Territorial dispute - could trigger war' },
                { name: 'Taiwan Strait', parties: ['China', 'Taiwan', 'USA'], description: 'World\'s most dangerous flashpoint' },
                { name: 'China ADIZ', parties: ['China', 'Japan', 'USA'], description: 'Air defense zone overlap' },
                { name: 'EEZ Disputes', parties: ['China', 'Japan', 'South Korea'], description: 'Overlapping maritime claims' }
            ],
            
            usInvolvement: {
                treaty: 'US-Japan Security Treaty covers Senkaku',
                forces: '54,000 US troops in Japan, 7th Fleet',
                obligation: 'Would likely respond to attack on Japan'
            }
        },
        
        funFacts: [
            'Senkaku/Diaoyu dispute could trigger US-China conflict',
            'China declared Air Defense Identification Zone over entire sea in 2013',
            'Major fishing grounds for all surrounding countries',
            'Taiwan Strait is world\'s most surveilled waterway',
            'Shanghai is the world\'s busiest port',
            '90% of world\'s advanced semiconductors made in Taiwan'
        ]
    },

    // ═══════════════════════════════════════════════════════
    // SEA OF JAPAN
    // ═══════════════════════════════════════════════════════
    {
        id: 'sea-of-japan',
        name: 'Sea of Japan',
        alternateNames: ['East Sea (Korean name)', 'Sea of Japan/East Sea'],
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
            { name: 'Korea Strait (Tsushima Strait)', connectsTo: 'East China Sea', width: 200, depth: 90, annualShips: 100000 },
            { name: 'Tsugaru Strait', connectsTo: 'Pacific Ocean', width: 20, depth: 200 },
            { name: 'La Pérouse Strait (Soya)', connectsTo: 'Sea of Okhotsk', width: 43 },
            { name: 'Tatar Strait', connectsTo: 'Sea of Okhotsk', width: 7 }
        ],
        
        nameDispute: {
            japanName: 'Sea of Japan (日本海)',
            koreaName: 'East Sea (동해 / Donghae)',
            
            history: {
                japanArgument: 'Name used internationally since 1800s, IHO standard since 1929',
                koreaArgument: 'Name imposed during Japanese colonial rule (1910-1945), historic Korean maps use East Sea'
            },
            
            currentStatus: {
                iho: 'International Hydrographic Organization discussing',
                un: 'Uses "Sea of Japan" with footnote about dispute',
                maps: 'Some show both names',
                resolution: 'Ongoing diplomatic issue'
            }
        },
        
        dokdoTakeshima: {
            koreanName: 'Dokdo (독도)',
            japaneseName: 'Takeshima (竹島)',
            
            physical: {
                islands: '2 main islets, 35 smaller rocks',
                area: '0.2 km²',
                location: '217 km from Korea, 250 km from Japan'
            },
            
            control: 'South Korea (since 1954)',
            claim: 'Japan also claims',
            
            history: {
                korea: 'Documented since 512 AD (Usan-guk)',
                japan: 'Incorporated 1905 during colonization',
                postWWII: 'Unclear in peace treaty'
            },
            
            strategic: {
                fishingRights: '200-mile EEZ extension',
                resources: 'Methane hydrates, fishing',
                nationalism: 'Highly emotional issue both countries'
            },
            
            incidents: 'Occasional military alerts, diplomatic protests'
        },
        
        northKoreaMissiles: {
            frequency: '50+ missile tests 2022-2023',
            types: ['ICBM (can reach USA)', 'IRBM (can reach Guam)', 'SLBM (submarine)', 'Cruise missiles'],
            fallZone: 'Sea of Japan - Japan\'s EEZ often violated',
            
            japanResponse: {
                alerts: 'J-Alert system warnings',
                defense: 'Aegis destroyers, PAC-3 missiles',
                shelters: 'Public shelter drills'
            },
            
            recentTests: [
                { date: '2022', count: '30+ missiles' },
                { date: '2023', count: '20+ missiles' },
                { type: 'Hwasong-17', range: '15,000 km' }
            ]
        },
        
        economicImportance: {
            overview: 'Japan-Korea-Russia shipping, major fishing',
            tradeValue: '$200 billion',
            
            majorPorts: [
                { name: 'Busan', country: 'South Korea', ranking: '#7 World', containers: '22M TEU' },
                { name: 'Niigata', country: 'Japan', type: 'Japan Sea coast hub' },
                { name: 'Vladivostok', country: 'Russia', ranking: 'Russia\'s Pacific gateway' },
                { name: 'Pohang', country: 'South Korea', type: 'Steel industry' }
            ],
            
            fishing: {
                value: '$5 billion annually',
                keySpecies: ['Salmon', 'Pollock', 'Squid', 'Crab', 'Sea Urchin'],
                disputes: 'Frequent conflicts over fishing rights'
            }
        },
        
        geopolitics: {
            strategicImportance: 'High',
            tensionLevel: 'Moderate-High',
            
            issues: [
                { name: 'Name Dispute', parties: ['Japan', 'South Korea'], description: 'East Sea vs Sea of Japan' },
                { name: 'Dokdo/Takeshima', parties: ['Japan', 'South Korea'], description: 'Island sovereignty dispute' },
                { name: 'North Korean Missiles', parties: ['North Korea', 'Japan', 'USA'], description: 'Regular missile tests' },
                { name: 'Russia-Japan Territory', parties: ['Russia', 'Japan'], description: 'Kuril Islands dispute' }
            ],
            
            navalPresences: [
                { country: 'Japan', assets: 'Maritime Self-Defense Force', purpose: 'Defense, North Korea monitoring' },
                { country: 'South Korea', assets: 'ROK Navy', purpose: 'Defense, territorial claims' },
                { country: 'Russia', base: 'Vladivostok', assets: 'Pacific Fleet element' },
                { country: 'USA', assets: 'Forward deployed ships (Japan-based)', purpose: 'Alliance, North Korea' }
            ]
        },
        
        russiaJapanDispute: {
            territories: 'Kuril Islands / Northern Territories',
            islands: ['Iturup', 'Kunashir', 'Shikotan', 'Habomai'],
            control: 'Russia (since 1945)',
            claim: 'Japan claims all four',
            peaceTreaty: 'Never signed - technically still at war',
            status: 'No progress, worsened after Ukraine invasion'
        },
        
        funFacts: [
            'Name disputed - Korea calls it "East Sea"',
            'Dokdo/Takeshima islands disputed since 1945',
            'North Korean missiles regularly land here during tests',
            'Rich fishing grounds for all surrounding nations',
            'Japan and Russia technically still at war (no peace treaty since WWII)',
            'World\'s largest squid fishing grounds'
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
            { name: 'Australia', coastlineKm: 2000, states: 'Queensland' },
            { name: 'Papua New Guinea', coastlineKm: 500 },
            { name: 'New Caledonia', coastlineKm: 1000, status: 'French territory' },
            { name: 'Solomon Islands', coastlineKm: 500 },
            { name: 'Vanuatu', coastlineKm: 500 }
        ],
        
        straits: [
            { name: 'Torres Strait', connectsTo: 'Arafura Sea', width: 150, between: 'Australia-PNG', dangerous: 'Shallow, reef-filled' }
        ],
        
        greatBarrierReef: {
            description: 'World\'s largest coral reef system',
            length: '2,300 km',
            area: '344,400 km²',
            reefs: '2,900 individual reefs',
            islands: '900+ islands',
            status: 'UNESCO World Heritage Site (1981)',
            
            biodiversity: {
                coralSpecies: '400+ species',
                fishSpecies: '1,500+ species',
                turtleSpecies: '6 of 7 marine turtle species',
                whales: 'Humpback whale breeding ground'
            },
            
            threats: {
                bleaching: ['2016 - 29% died', '2017 - 22% died', '2020 - Third mass bleaching', '2022 - Fourth mass bleaching'],
                totalLoss: '50% of coral lost since 1995',
                causes: ['Ocean warming', 'Ocean acidification', 'Crown-of-thorns starfish', 'Cyclones'],
                future: 'May not survive 2°C warming'
            },
            
            economicValue: {
                tourism: '$6.4 billion annually',
                jobs: '64,000 jobs',
                visitors: '2 million tourists annually'
            }
        },
        
        battleOfCoralSea: {
            date: 'May 4-8, 1942',
            war: 'World War II',
            belligerents: ['USA + Australia', 'Japan'],
            
            significance: {
                first: 'First battle where aircraft carriers engaged without ships seeing each other',
                first2: 'First naval battle fought entirely by aircraft',
                turning: 'Stopped Japanese advance toward Australia'
            },
            
            losses: {
                allies: 'USS Lexington sunk, USS Yorktown damaged',
                japan: 'Shoho sunk, Shokaku damaged',
                aircraft: 'Both sides lost ~70 aircraft'
            },
            
            outcome: {
                tactical: 'Japanese tactical victory (more ships sunk)',
                strategic: 'Allied strategic victory (invasion stopped)',
                impact: 'Japan couldn\'t use damaged carriers at Midway (1 month later)'
            }
        },
        
        economicImportance: {
            overview: 'Great Barrier Reef tourism, shipping lanes',
            tradeValue: '$50 billion',
            
            tourism: {
                greatBarrierReef: 'World Heritage Site',
                annualVisitors: '2 million',
                value: '$6.4 billion',
                activities: 'Diving, snorkeling, sailing'
            },
            
            majorPorts: [
                { name: 'Cairns', country: 'Australia', type: 'Tourism gateway to reef' },
                { name: 'Townsville', country: 'Australia', type: 'General cargo' },
                { name: 'Gladstone', country: 'Australia', type: 'Coal export' }
            ],
            
            shipping: {
                route: 'Inside vs outside reef routes',
                pilotage: 'Compulsory for large ships',
                risk: 'Reef grounding danger'
            }
        },
        
        geopolitics: {
            strategicImportance: 'High - Increasing',
            
            issues: [
                { name: 'China Expansion', parties: ['Australia', 'China', 'USA'], description: 'Monitoring Chinese naval presence in Pacific' },
                { name: 'Pacific Islands Influence', parties: ['Australia', 'China', 'USA'], description: 'Competition for influence in PNG, Solomons, Vanuatu' },
                { name: 'Solomon Islands-China Deal', date: '2022', description: 'Security pact raised concerns' }
            ],
            
            australiaDefense: {
                bases: 'Expanding presence in Queensland',
                AUKUS: 'Nuclear submarines to be based',
                exercises: 'Regular with USA, Japan'
            }
        },
        
        coralSeaIslands: {
            status: 'Australian External Territory',
            area: '780,000 km² (sea), tiny land area',
            population: '4 (weather station staff)',
            importance: 'Australia\'s EEZ claim',
            features: 'Cays, reefs, islands'
        },
        
        funFacts: [
            'Contains Great Barrier Reef - largest living structure on Earth',
            'Battle of Coral Sea (1942) was first aircraft carrier battle in history',
            '50% of reef coral lost since 1995 due to bleaching',
            'Coral Sea Islands Territory administered by Australia',
            'Can be seen from space - largest living organism',
            'Home to 6 of 7 species of marine turtles'
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
            { name: 'Russia', coastlineKm: 2000, region: 'Chukotka, Kamchatka' },
            { name: 'USA', coastlineKm: 1500, state: 'Alaska' }
        ],
        
        straits: [
            { name: 'Bering Strait', connectsTo: 'Arctic Ocean', width: 82, depth: 50, annualShips: 5000, significance: 'Only Arctic-Pacific connection' }
        ],
        
        beringLandBridge: {
            name: 'Beringia',
            period: '30,000 - 11,000 years ago',
            width: '1,600 km at maximum',
            
            significance: {
                humanMigration: 'Route for first humans to reach Americas',
                timing: 'Humans crossed ~15,000-20,000 years ago',
                ancestors: 'Native Americans, First Nations descended from these migrants'
            },
            
            animals: {
                crossed: ['Mammoths', 'Bison', 'Horses (to Asia)', 'Camels (to Asia)'],
                evidence: 'Fossils found in Alaska and Siberia'
            },
            
            flooding: 'Submerged ~11,000 years ago as ice melted',
            
            today: {
                distance: '82 km between Russia and Alaska',
                closest: 'Big Diomede (Russia) to Little Diomede (USA) - 3.8 km',
                dateLine: 'International Date Line runs between Diomedes'
            }
        },
        
        fishingCrisis: {
            snowCrabCrash: {
                year: 2022,
                decline: '90% population crash',
                cause: 'Marine heatwave 2018-2019 killed billions',
                value: '$200 million industry collapsed',
                closure: 'First ever fishery closure'
            },
            
            kingCrab: {
                status: 'Also declining dramatically',
                cause: 'Warming waters, predators',
                value: 'Was $100+ million industry'
            },
            
            deadliestCatch: {
                impact: 'TV show\'s fishing grounds devastated',
                boats: 'Many fishers out of work'
            },
            
            broader: {
                pollock: 'Still healthy - $1 billion fishery',
                salmon: 'Variable runs',
                warming: 'Ecosystem shifting northward'
            }
        },
        
        arcticShipping: {
            northernSeaRoute: {
                description: 'Arctic passage along Russia\'s north coast',
                savings: '7,000+ miles vs Suez route (Europe-Asia)',
                growth: 'Increasing as ice melts',
                russiaRole: 'Promoting as alternative to Suez'
            },
            
            beringStraitSignificance: {
                gateway: 'Only connection between Pacific and Arctic',
                traffic: 'Increasing each year',
                icebreakers: 'Often required'
            },
            
            chinaInterest: {
                claim: 'Declared itself "Near-Arctic State"',
                interest: 'Polar Silk Road investment',
                ships: 'Building icebreakers'
            },
            
            usResponse: {
                icebreakers: 'Building new fleet (currently only 2 operational)',
                presence: 'Coast Guard patrols increasing'
            }
        },
        
        economicImportance: {
            overview: 'Major fishing grounds, Arctic gateway',
            tradeValue: '$3 billion fishing',
            
            fishing: {
                value: '$3 billion annually (was higher)',
                keySpecies: ['Pollock (largest)', 'King Crab', 'Snow Crab', 'Salmon', 'Halibut'],
                percentUSSeafood: '40% of US seafood catch',
                pollockUse: 'Fish sticks, surimi (imitation crab)'
            },
            
            majorPorts: [
                { name: 'Dutch Harbor', country: 'USA', ranking: '#1 US by volume', type: 'Fishing' },
                { name: 'Nome', country: 'USA', type: 'Arctic gateway' },
                { name: 'Provideniya', country: 'Russia', type: 'Chukotka port' }
            ]
        },
        
        geopolitics: {
            strategicImportance: 'High - Increasing with Arctic opening',
            
            issues: [
                { name: 'Arctic Shipping', parties: ['Russia', 'USA', 'China'], description: 'Northern Sea Route emergence' },
                { name: 'US-Russia Boundary', parties: ['USA', 'Russia'], description: 'Maritime boundary (1990 agreement, Russia disputes)' },
                { name: 'Arctic Resources', parties: ['Arctic nations'], description: 'Oil, gas, minerals becoming accessible' }
            ],
            
            militaryActivity: {
                russia: 'Rebuilding Soviet-era Arctic bases',
                usa: 'Increasing Alaska defense',
                china: 'Sending ships through region'
            }
        },
        
        wildlife: {
            marineLife: ['Whales (gray, humpback, bowhead)', 'Walrus', 'Seals', 'Sea otters', 'Sea lions'],
            birds: 'Millions of seabirds nest on islands',
            concern: 'Warming threatening ice-dependent species'
        },
        
        funFacts: [
            'Land bridge during Ice Age - humans migrated to Americas across Beringia',
            'One of most productive fishing grounds on Earth',
            'Crab populations crashed 90% in 2022 due to ocean heatwave',
            'Deadliest Catch TV show filmed here',
            'Big Diomede (Russia) and Little Diomede (USA) only 3.8 km apart',
            'International Date Line runs between the two islands',
            'Named after Vitus Bering, Danish explorer in Russian service'
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
        importance: 'Primary',
        statistics: {
            annualValue: '$1.5 trillion',
            percentGlobalTrade: 15,
            transitTime: '30-35 days',
            annualShips: 19000
        },
        route: {
            description: 'Shanghai → Singapore → Suez Canal → Rotterdam',
            path: [
                { lat: 31.2, lng: 121.5, name: 'Shanghai' },
                { lat: 22.3, lng: 114.2, name: 'Hong Kong' },
                { lat: 1.3, lng: 103.8, name: 'Singapore' },
                { lat: 12.5, lng: 43.5, name: 'Bab el-Mandeb' },
                { lat: 30, lng: 32, name: 'Suez Canal' },
                { lat: 36, lng: -5.5, name: 'Gibraltar' },
                { lat: 52, lng: 4, name: 'Rotterdam' }
            ]
        },
        chokepoints: [
            { name: 'Strait of Malacca', risk: 'Congestion, piracy' },
            { name: 'Bab el-Mandeb', risk: 'Houthi attacks (2023-2024)' },
            { name: 'Suez Canal', risk: 'Blockage (Ever Given 2021)' }
        ],
        alternatives: 'Cape of Good Hope adds 7,000+ miles, 14 days',
        disruption2024: 'Houthi attacks forcing ships to Cape route'
    },
    {
        id: 'transpacific',
        name: 'Trans-Pacific Route',
        type: 'container',
        importance: 'Primary',
        statistics: {
            annualValue: '$1.2 trillion',
            annualVolume: '28 million TEU',
            transitTime: '14-18 days'
        },
        route: {
            description: 'Shanghai → Pacific → Los Angeles/Long Beach',
            path: [
                { lat: 31.2, lng: 121.5, name: 'Shanghai' },
                { lat: 35, lng: 150, name: 'Pacific crossing' },
                { lat: 34, lng: -118, name: 'Los Angeles' }
            ]
        },
        keyFacts: {
            LA_LongBeach: '40% of US imports',
            congestion: 'Major backups during COVID (100+ ships waiting)',
            usChinaTrade: 'Largest bilateral trade relationship'
        }
    },
    {
        id: 'persian-gulf-asia',
        name: 'Persian Gulf to Asia Oil',
        type: 'oil',
        importance: 'Critical - Global energy security',
        statistics: {
            dailyBarrels: 18000000,
            annualValue: '$350 billion',
            percentAsianOil: 75
        },
        route: {
            description: 'Persian Gulf → Strait of Hormuz → Indian Ocean → Malacca → China/Japan',
            path: [
                { lat: 26.5, lng: 56.5, name: 'Strait of Hormuz' },
                { lat: 15, lng: 65, name: 'Arabian Sea' },
                { lat: 1.3, lng: 103.8, name: 'Malacca Strait' },
                { lat: 31.2, lng: 121.5, name: 'China' }
            ]
        },
        chokepoints: [
            { name: 'Strait of Hormuz', risk: 'Iran threats, world\'s most critical chokepoint' },
            { name: 'Strait of Malacca', risk: 'Congestion, piracy' }
        ],
        dependencies: {
            china: '75% of oil imports via this route',
            japan: '90% of oil imports via this route',
            southKorea: '85% of oil imports via this route'
        }
    },
    {
        id: 'transatlantic',
        name: 'Transatlantic Route',
        type: 'container',
        importance: 'Major',
        statistics: {
            annualValue: '$800 billion',
            annualVolume: '8 million TEU',
            transitTime: '10-14 days'
        },
        route: {
            description: 'Rotterdam → Atlantic → New York/East Coast',
            path: [
                { lat: 52, lng: 4, name: 'Rotterdam' },
                { lat: 45, lng: -35, name: 'Atlantic crossing' },
                { lat: 40.7, lng: -74, name: 'New York' }
            ]
        },
        keyFacts: {
            history: 'Oldest major trade route',
            alliance: 'US-EU economic relationship'
        }
    },
    {
        id: 'panama-route',
        name: 'Asia-US East Coast via Panama',
        type: 'container',
        importance: 'Major',
        statistics: {
            annualValue: '$300 billion',
            annualShips: 14000,
            transitTime: '28-35 days'
        },
        route: {
            description: 'Asia → Panama Canal → US East Coast',
            path: [
                { lat: 31.2, lng: 121.5, name: 'Shanghai' },
                { lat: 9, lng: -79.5, name: 'Panama Canal' },
                { lat: 40.7, lng: -74, name: 'New York' }
            ]
        },
        chokepoints: [
            { name: 'Panama Canal', risk: 'Drought/water levels (2023 restrictions)', details: 'Daily transits cut 50% in 2023' }
        ],
        alternatives: 'Rail across US, Suez to East Coast'
    },
    {
        id: 'australia-asia-iron',
        name: 'Australia-Asia Iron Ore',
        type: 'bulk',
        importance: 'Critical for steel production',
        statistics: {
            annualTonnage: '900 million tonnes',
            annualValue: '$100 billion',
            percentChinaIron: 60
        },
        route: {
            description: 'Western Australia → South China Sea → China',
            path: [
                { lat: -20, lng: 118.5, name: 'Port Hedland' },
                { lat: 0, lng: 120, name: 'Indonesian waters' },
                { lat: 30, lng: 122, name: 'Chinese ports' }
            ]
        },
        keyPorts: {
            portHedland: 'World\'s largest iron ore export terminal',
            capeSize: 'Only ships over 150,000 tonnes used'
        }
    },
    {
        id: 'qatar-asia-lng',
        name: 'Qatar-Asia LNG Route',
        type: 'lng',
        importance: 'Critical for Asian energy',
        statistics: {
            annualLNG: '80 million tonnes',
            percentGlobalLNG: 25
        },
        route: {
            description: 'Qatar → Hormuz → Malacca → Japan/Korea/China',
            path: [
                { lat: 25.5, lng: 51.5, name: 'Ras Laffan, Qatar' },
                { lat: 26.5, lng: 56.5, name: 'Strait of Hormuz' },
                { lat: 15, lng: 65, name: 'Arabian Sea' },
                { lat: 1.3, lng: 103.8, name: 'Malacca Strait' },
                { lat: 35, lng: 135, name: 'Japan' }
            ]
        },
        chokepoints: [
            { name: 'Strait of Hormuz', risk: 'Iran threats' },
            { name: 'Strait of Malacca', risk: 'Congestion' }
        ]
    },
    {
        id: 'us-europe-lng',
        name: 'US-Europe LNG Route',
        type: 'lng',
        importance: 'Major - Surged after Ukraine war',
        statistics: {
            annualLNG: '70 million tonnes',
            annualValue: '$50 billion',
            growth: 'Up 150% since 2021'
        },
        route: {
            description: 'US Gulf Coast → Atlantic → Europe',
            path: [
                { lat: 29.7, lng: -95, name: 'Houston/Gulf Coast' },
                { lat: 45, lng: -35, name: 'Atlantic crossing' },
                { lat: 52, lng: 4, name: 'Europe (UK, NL, DE)' }
            ]
        },
        context: {
            trigger: 'Russia-Ukraine War, Nord Stream sabotage',
            replacement: 'Replacing Russian pipeline gas',
            terminals: 'Europe rapidly built LNG import terminals'
        }
    },
    {
        id: 'brazil-china-soy',
        name: 'Brazil-China Agriculture',
        type: 'bulk',
        importance: 'Major - Food security',
        statistics: {
            annualSoybeans: '80 million tonnes',
            annualValue: '$50 billion'
        },
        route: {
            description: 'Brazil → Atlantic → Cape → Indian Ocean → China',
            path: [
                { lat: -24, lng: -46, name: 'Santos, Brazil' },
                { lat: -35, lng: 20, name: 'Cape of Good Hope' },
                { lat: 1.3, lng: 103.8, name: 'Malacca Strait' },
                { lat: 31.2, lng: 121.5, name: 'Shanghai' }
            ]
        },
        context: {
            usTradeTensions: 'Brazil replaced US as China\'s #1 soy supplier',
            amazonDeforestation: 'Linked to agricultural expansion'
        }
    },
    {
        id: 'middle-east-europe-oil',
        name: 'Middle East-Europe Oil',
        type: 'oil',
        importance: 'Major',
        statistics: {
            dailyBarrels: 3000000,
            annualValue: '$100 billion'
        },
        route: {
            description: 'Persian Gulf → Suez → Mediterranean → Europe',
            path: [
                { lat: 26.5, lng: 56.5, name: 'Strait of Hormuz' },
                { lat: 12.5, lng: 43.5, name: 'Bab el-Mandeb' },
                { lat: 30, lng: 32, name: 'Suez Canal' },
                { lat: 52, lng: 4, name: 'Rotterdam' }
            ]
        },
        chokepoints: [
            { name: 'Strait of Hormuz', risk: 'Iran threats' },
            { name: 'Bab el-Mandeb', risk: 'Houthi attacks' },
            { name: 'Suez Canal', risk: 'Blockage' }
        ]
    },
    {
        id: 'russia-europe-pipeline',
        name: 'Russia-Europe Gas (Historical)',
        type: 'gas',
        importance: 'Was critical - Now disrupted',
        statistics: {
            historicalFlow: '150 bcm annually (2021)',
            percentEuropeGas: '40% of EU supply (was)',
            current: 'Down 85%'
        },
        route: {
            pipelines: [
                { name: 'Nord Stream 1 & 2', route: 'Russia → Baltic → Germany', status: 'Sabotaged September 2022' },
                { name: 'Yamal-Europe', route: 'Russia → Belarus → Poland → Germany', status: 'Minimal flow' },
                { name: 'Ukraine transit', route: 'Russia → Ukraine → EU', status: 'Reduced, contract expires 2024' },
                { name: 'TurkStream', route: 'Russia → Black Sea → Turkey', status: 'Operating' }
            ]
        },
        disruption: {
            cause: 'Russia-Ukraine war, sanctions, sabotage',
            impact: 'Europe scrambled for alternatives',
            replacement: 'US LNG, Norway gas, demand reduction'
        }
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
        width: { km: 54, narrowest: 33 },
        depth: { min: 50, shipping: 'Two 3km channels' },
        
        traffic: {
            dailyOilBarrels: 21000000,
            percentWorldOil: 21,
            percentWorldLNG: 35,
            annualShips: 17000
        },
        
        controllingCountries: ['Iran (north)', 'Oman (south)', 'UAE (south)'],
        
        importance: {
            ranking: 'World\'s most important chokepoint',
            oilExporters: ['Saudi Arabia', 'Iraq', 'UAE', 'Kuwait', 'Qatar', 'Iran'],
            dependents: ['China (75% oil)', 'Japan (90% oil)', 'South Korea (85% oil)', 'India (60% oil)']
        },
        
        risks: [
            { type: 'Iran closure threats', likelihood: 'Moderate', impact: 'Catastrophic' },
            { type: 'Mine warfare', likelihood: 'Moderate', history: 'Tanker War 1980s' },
            { type: 'Drone attacks', likelihood: 'High', examples: 'Aramco 2019' },
            { type: 'Tanker seizures', likelihood: 'Moderate', examples: '2019, 2021 incidents' },
            { type: 'Missile attacks', likelihood: 'Low-Moderate', capability: 'Iran has anti-ship missiles' }
        ],
        
        iranCapabilities: {
            missiles: 'Anti-ship missiles covering entire strait',
            mines: '5,000+ mines available',
            boats: 'IRGC fast attack boats',
            submarines: 'Kilo-class submarines',
            drones: 'Kamikaze drones'
        },
        
        closureImpact: {
            oilPriceSpike: '100%+ immediately',
            globalRecession: 'Highly likely',
            military: 'US would likely respond',
            alternatives: 'Limited - pipelines have fraction of capacity'
        }
    },
    {
        id: 'strait-of-malacca',
        name: 'Strait of Malacca',
        location: { lat: 2.5, lng: 101 },
        width: { km: 65, narrowest: 2.8 },
        length: '800 km',
        
        traffic: {
            dailyOilBarrels: 16000000,
            percentGlobalTrade: 25,
            annualShips: 94000,
            dailyShips: 250
        },
        
        controllingCountries: ['Malaysia', 'Indonesia', 'Singapore'],
        
        importance: {
            ranking: 'World\'s busiest shipping lane',
            connects: 'Indian Ocean ↔ Pacific Ocean',
            alternatives: 'Lombok Strait, Sunda Strait (longer)'
        },
        
        risks: [
            { type: 'Congestion', likelihood: 'High', impact: 'Delays' },
            { type: 'Piracy', likelihood: 'Moderate (reduced)', history: 'Was #1 piracy hotspot' },
            { type: 'Shallow draft', impact: 'Supertankers can\'t fully load' },
            { type: 'Accidents', likelihood: 'Moderate', impact: 'Closures' },
            { type: 'Terrorism', likelihood: 'Low', concern: 'Major target' }
        ],
        
        chinaVulnerability: {
            concern: 'Malacca Dilemma',
            dependence: '80% of China\'s oil transits',
            response: 'Building pipelines (Myanmar), Pakistan port (Gwadar)',
            military: 'String of Pearls strategy'
        },
        
        alternatives: {
            lombokStrait: '+ 2 days',
            sundaStrait: '+ 1 day',
            pipelines: 'Limited capacity'
        }
    },
    {
        id: 'suez-canal',
        name: 'Suez Canal',
        location: { lat: 30, lng: 32 },
        width: { max: 313, min: 205 },
        length: '193 km',
        depth: '24 meters',
        
        traffic: {
            percentGlobalTrade: 12,
            annualShips: 19000,
            dailyShips: 50,
            annualRevenue: '$9.4 billion (2023)'
        },
        
        controllingCountries: ['Egypt'],
        
        importance: {
            ranking: 'Most important artificial waterway',
            saves: '7,000+ km vs Cape route (Europe-Asia)',
            timeSaved: '14+ days'
        },
        
        risks: [
            { type: 'Blockage', likelihood: 'Low', example: 'Ever Given 2021 - 6 days' },
            { type: 'Capacity limits', impact: 'Can\'t handle all demand' },
            { type: 'Regional instability', concern: 'Sinai Peninsula' },
            { type: 'Houthi Red Sea attacks', impact: 'Ships avoiding Suez entirely (2024)' }
        ],
        
        everGivenIncident: {
            date: 'March 23-29, 2021',
            ship: 'Ever Given (400m container ship)',
            blockage: '6 days',
            shipsBlocked: '400+',
            dailyCost: '$10 billion',
            totalImpact: '$60 billion trade delayed'
        },
        
        2024Disruption: {
            cause: 'Houthi attacks on Red Sea shipping',
            response: 'Major shipping lines rerouting to Cape',
            impact: 'Suez traffic down 40%+',
            costIncrease: 'Shipping rates up 300%+'
        },
        
        history: {
            opened: 1869,
            nationalized: 1956,
            closures: ['1956-57 (Suez Crisis)', '1967-75 (Six-Day War aftermath)'],
            expansion: '2015 New Suez Canal (parallel channel)'
        }
    },
    {
        id: 'bab-el-mandeb',
        name: 'Bab el-Mandeb',
        alternateSpelling: 'Bab al-Mandab',
        meaning: 'Gate of Tears (Arabic)',
        location: { lat: 12.5, lng: 43.5 },
        width: { km: 26 },
        
        traffic: {
            dailyOilBarrels: 6200000,
            percentGlobalTrade: 12,
            annualShips: 25000
        },
        
        controllingCountries: ['Yemen (east)', 'Djibouti (west)', 'Eritrea (west)'],
        
        importance: {
            ranking: 'Critical Red Sea gateway',
            connects: 'Red Sea ↔ Gulf of Aden/Indian Ocean',
            significance: 'Access to Suez Canal'
        },
        
        risks: [
            { type: 'Houthi attacks', likelihood: 'Very High (2023-24)', impact: 'Major rerouting' },
            { type: 'Piracy', likelihood: 'Moderate', history: 'Somalia-based' },
            { type: 'Yemen instability', likelihood: 'High', impact: 'Ongoing conflict' },
            { type: 'Terrorism', likelihood: 'Moderate', history: 'USS Cole 2000' }
        ],
        
        houthiCrisis2024: {
            start: 'November 2023',
            attacks: '50+ ships attacked/threatened',
            targets: 'Ships with Israel connection (claimed), also random',
            weapons: 'Missiles, drones, boats',
            response: ['US/UK airstrikes on Yemen', 'Operation Prosperity Guardian'],
            impact: ['Major shipping rerouting to Cape', 'Suez revenue down 40%', 'Insurance costs up 1000%+']
        },
        
        militaryPresences: [
            { country: 'USA', base: 'Camp Lemonnier (Djibouti)', personnel: 4000 },
            { country: 'China', base: 'Djibouti', personnel: 2000 },
            { country: 'France', base: 'Djibouti', personnel: 1500 },
            { country: 'Japan', base: 'Djibouti' }
        ]
    },
    {
        id: 'panama-canal',
        name: 'Panama Canal',
        location: { lat: 9, lng: -79.5 },
        width: { locks: '33m (old), 55m (new)' },
        length: '82 km',
        
        traffic: {
            percentGlobalTrade: 5,
            percentUSContainerTrade: 40,
            annualShips: 14000,
            annualRevenue: '$4.3 billion'
        },
        
        controllingCountries: ['Panama'],
        
        importance: {
            ranking: 'Critical Americas waterway',
            saves: '8,000+ miles vs Cape Horn',
            connects: 'Atlantic ↔ Pacific',
            usEastCoast: 'Direct access to Asia'
        },
        
        risks: [
            { type: 'Drought/water levels', likelihood: 'Increasing', impact: '2023 - capacity cut 50%' },
            { type: 'Capacity limits', impact: 'Max ~40 ships/day' },
            { type: 'Lock maintenance', impact: 'Periodic closures' },
            { type: 'Climate change', impact: 'Rainfall patterns changing' }
        ],
        
        drought2023: {
            cause: 'El Niño, climate change',
            impact: ['Draft restrictions', 'Daily transits cut from 36 to 18', 'Ships waiting 20+ days'],
            cost: '$500,000 premium per transit auctioned',
            economicImpact: 'Global supply chain disruption'
        },
        
        expansion: {
            year: 2016,
            cost: '$5.25 billion',
            feature: 'New larger locks',
            ships: 'Neopanamax ships (up to 14,000 TEU)'
        },
        
        history: {
            opened: 1914,
            usControl: '1914-1999',
            panamaControl: 'Since 1999 (Carter treaty)'
        }
    },
    {
        id: 'turkish-straits',
        name: 'Turkish Straits',
        components: ['Bosphorus', 'Dardanelles', 'Sea of Marmara'],
        location: { lat: 41, lng: 29 },
        
        bosphorus: {
            width: { min: 700, avg: 1200 },
            length: '31 km',
            depth: { min: 36 },
            city: 'Istanbul (15 million people on both sides)'
        },
        
        traffic: {
            dailyOilBarrels: 3000000,
            annualShips: 45000,
            dailyShips: 120
        },
        
        controllingCountries: ['Turkey'],
        
        importance: {
            ranking: 'Only Black Sea exit',
            blackSeaAccess: 'Russia, Ukraine, Bulgaria, Romania, Georgia',
            oilExports: 'Kazakhstan, Azerbaijan oil'
        },
        
        risks: [
            { type: 'Congestion', likelihood: 'High', impact: 'Accidents in Istanbul' },
            { type: 'Accidents', likelihood: 'Moderate', history: 'Several major incidents' },
            { type: 'Turkey leverage', likelihood: 'Moderate', impact: 'Diplomatic tool' }
        ],
        
        montreuxConvention: {
            signed: 1936,
            rules: [
                'Turkey controls transit',
                'Non-Black Sea warships limited to 21 days',
                'Tonnage limits for non-Black Sea navies'
            ],
            wartime: 'Turkey can close to belligerents',
            ukraineWar: 'Turkey closed to warships (2022)'
        },
        
        alternatives: {
            pipelines: ['BTC (Baku-Tbilisi-Ceyhan)', 'CPC (Kazakhstan)'],
            purpose: 'Bypass Bosphorus congestion'
        }
    },
    {
        id: 'dover-strait',
        name: 'Dover Strait',
        location: { lat: 51, lng: 1.5 },
        width: { km: 33 },
        
        traffic: {
            annualShips: 180000,
            dailyShips: 500,
            percentEuropeTrade: 'Significant'
        },
        
        controllingCountries: ['UK', 'France'],
        
        importance: {
            ranking: 'Busiest shipping lane in world',
            connects: 'North Sea ↔ English Channel ↔ Atlantic',
            ports: 'Access to Rotterdam, Antwerp, Hamburg, London'
        },
        
        risks: [
            { type: 'Congestion', likelihood: 'Very High', impact: 'Constant' },
            { type: 'Collisions', likelihood: 'Moderate', mitigation: 'Traffic separation' },
            { type: 'Migrant crossings', likelihood: 'Very High', impact: 'Rescue operations' }
        ],
        
        trafficSeparation: {
            type: 'IMO Traffic Separation Scheme',
            purpose: 'Prevent collisions',
            lanes: 'Mandatory shipping lanes'
        }
    },
    {
        id: 'strait-of-gibraltar',
        name: 'Strait of Gibraltar',
        location: { lat: 36, lng: -5.5 },
        width: { km: 14 },
        depth: { min: 300 },
        
        traffic: {
            annualShips: 100000
        },
        
        controllingCountries: ['Spain', 'UK (Gibraltar)', 'Morocco'],
        
        importance: {
            ranking: 'Only Mediterranean-Atlantic connection',
            mediterraneanAccess: 'All Med trade must pass',
            history: 'Strategic since ancient times'
        },
        
        risks: [
            { type: 'Congestion', likelihood: 'High' },
            { type: 'Naval chokepoint', significance: 'Major powers monitor' },
            { type: 'Migration route', impact: 'Africa to Europe' }
        ],
        
        gibraltarStatus: {
            uk: 'British Overseas Territory since 1713',
            spain: 'Claims sovereignty',
            brexit: 'Created new complications'
        }
    },
    {
        id: 'taiwan-strait',
        name: 'Taiwan Strait',
        location: { lat: 24, lng: 119 },
        width: { km: 180, narrowest: 130 },
        
        traffic: {
            annualShips: 270000,
            percentGlobalContainer: '50% transits nearby',
            semiconductors: '90% of advanced chips from Taiwan'
        },
        
        controllingCountries: ['Taiwan (east)', 'China (west, claims all)'],
        
        importance: {
            ranking: 'Most dangerous flashpoint in world',
            chipSupply: 'TSMC - 90% of advanced semiconductors',
            usAlliance: 'Taiwan Relations Act'
        },
        
        risks: [
            { type: 'China invasion/blockade', likelihood: 'Low-Moderate', impact: 'Catastrophic' },
            { type: 'Military exercises', likelihood: 'Very High', impact: 'Disruptions' },
            { type: 'Miscalculation', likelihood: 'Moderate', impact: 'Could escalate' }
        ],
        
        warScenario: {
            probability: 'Debated - some say 2027 window',
            impact: 'Would devastate global economy',
            semiconductors: 'World would lose 90% chip supply',
            usResponse: 'Likely military involvement',
            globalCost: 'Estimated $10+ trillion'
        }
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

function getSeaByCountry(countryName) {
    return seasData.filter(sea => 
        sea.borderingCountries?.some(country => 
            country.name.toLowerCase() === countryName.toLowerCase()
        )
    );
}

// Log for debugging
console.log('🌊 Seas Data Loaded!');
console.log('📊 Total Seas:', seasData.length);
console.log('🚢 Trade Routes:', globalTradeRoutes.length);
console.log('⚠️ Chokepoints:', globalChokepoints.length);
