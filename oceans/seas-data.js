/* ═══════════════════════════════════════════════════════════
   🌊 SEAS EXPLORER - COMPLETE SEAS DATABASE
   All Major Seas with Detailed Data + Global Trade Routes
   Part 1 of 4 - Pacific & Atlantic Seas
   ═══════════════════════════════════════════════════════════ */

const seasData = [
    // ═══════════════════════════════════════════════════════
    // 🌏 SOUTH CHINA SEA - Most Contested Sea in the World
    // ═══════════════════════════════════════════════════════
    {
        id: 'south-china-sea',
        name: 'South China Sea',
        chineseName: '南海 (Nánhǎi)',
        parentOcean: 'Pacific Ocean',
        parentOceanId: 'pacific-ocean',
        
        // Area & Dimensions
        area: 3500000,
        percentEarthSurface: 0.69,
        percentOceanArea: 2.08,
        length: 3000,
        width: 1000,
        coastlineLength: 47000,
        volume: '3.69 million km³',
        
        // Depth Information
        avgDepth: 1212,
        maxDepth: 5560,
        deepestPoint: {
            name: 'West of Luzon Island',
            depth: 5560,
            coordinates: [18.5, 117.5]
        },
        
        // Location
        coordinates: [12, 113],
        bounds: {
            north: 25,
            south: 0,
            east: 121,
            west: 100
        },
        defaultZoom: 5,
        
        // Images
        image: 'https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=500',
        backgroundImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920',
        
        // Geographic Context
        surroundingLandmasses: ['China', 'Taiwan', 'Philippines', 'Malaysia', 'Brunei', 'Indonesia', 'Vietnam'],
        borderingCountries: [
            { name: 'China', coastlineKm: 14500, claim: 'Nine-Dash Line - claims ~90%' },
            { name: 'Vietnam', coastlineKm: 3260, claim: 'Paracel & Spratly Islands' },
            { name: 'Philippines', coastlineKm: 36289, claim: 'West Philippine Sea, Spratly Islands' },
            { name: 'Malaysia', coastlineKm: 4675, claim: 'Parts of Spratly Islands' },
            { name: 'Brunei', coastlineKm: 161, claim: 'Louisa Reef area' },
            { name: 'Indonesia', coastlineKm: 54716, claim: 'Natuna Islands EEZ' },
            { name: 'Taiwan', coastlineKm: 1566, claim: 'Similar to China claims' }
        ],
        
        // Connecting Waterways
        straits: [
            { 
                name: 'Taiwan Strait', 
                connectsTo: 'East China Sea',
                width: 180,
                importance: 'Critical for Taiwan-China relations, major shipping lane',
                annualShips: 270000
            },
            { 
                name: 'Luzon Strait', 
                connectsTo: 'Philippine Sea',
                width: 250,
                importance: 'Connection to Pacific Ocean',
                annualShips: 50000
            },
            { 
                name: 'Strait of Malacca', 
                connectsTo: 'Indian Ocean',
                width: 65,
                importance: 'World\'s busiest shipping lane, 25% of global trade',
                annualShips: 94000
            },
            { 
                name: 'Karimata Strait', 
                connectsTo: 'Java Sea',
                width: 200,
                importance: 'Alternative to Malacca',
                annualShips: 30000
            }
        ],
        
        // Major Islands & Features
        islands: [
            { name: 'Hainan Island', country: 'China', area: 33920, population: 9258000, coordinates: [19.2, 109.7] },
            { name: 'Paracel Islands', dispute: 'China/Vietnam/Taiwan', area: 7.75, features: 'Military installations', coordinates: [16.5, 112.0] },
            { name: 'Spratly Islands', dispute: 'Multiple claimants', area: 5, features: '100+ islets, reefs', coordinates: [8.63, 111.92] },
            { name: 'Scarborough Shoal', dispute: 'China/Philippines', area: 150, features: 'Rich fishing ground', coordinates: [15.18, 117.76] },
            { name: 'Pratas Islands', control: 'Taiwan', area: 2.4, features: 'Military garrison', coordinates: [20.7, 116.72] },
            { name: 'Natuna Islands', country: 'Indonesia', area: 2110, population: 81500, coordinates: [3.9, 108.1] }
        ],
        
        // Ocean Currents
        currents: {
            warm: [
                { 
                    name: 'South China Sea Warm Current',
                    path: [[5, 110], [10, 112], [15, 115], [20, 118]],
                    direction: 'Northeast (summer)',
                    speed: '0.5 m/s',
                    description: 'Brings warm tropical water northward'
                },
                {
                    name: 'Kuroshio Branch',
                    path: [[22, 121], [20, 118], [18, 115]],
                    direction: 'Southwest',
                    speed: '0.3 m/s',
                    description: 'Branch of Kuroshio enters through Luzon Strait'
                }
            ],
            cold: [
                {
                    name: 'Winter Monsoon Current',
                    path: [[22, 115], [15, 112], [8, 108]],
                    direction: 'Southwest (winter)',
                    speed: '0.4 m/s',
                    description: 'Driven by northeast monsoon'
                }
            ],
            gyres: [
                { name: 'South China Sea Gyre', center: [13, 113], direction: 'Variable with monsoon' }
            ],
            tidalRange: '1-4 meters',
            monsoonInfluence: 'Currents reverse with monsoon seasons'
        },
        
        // Tectonic Features
        tectonicFeatures: {
            plates: ['Eurasian Plate', 'Philippine Sea Plate', 'Sunda Plate'],
            ridges: [
                { name: 'Central Basin Ridge', coordinates: [[15, 115], [12, 117]], description: 'Extinct spreading ridge' }
            ],
            trenches: [],
            basins: [
                { name: 'Central Basin', depth: 5560, area: 900000 },
                { name: 'Southwest Sub-basin', depth: 4500, area: 400000 },
                { name: 'Northwest Sub-basin', depth: 4300, area: 350000 }
            ],
            seismicActivity: 'Moderate - near Philippine fault system',
            volcanicActivity: 'Some submarine volcanism',
            earthquakeRisk: 'Medium',
            tsunamiRisk: 'Low to Medium'
        },
        
        // Marine Life
        marineLife: {
            biodiversityLevel: 'Very High - Part of Coral Triangle',
            totalSpecies: 3000,
            fishSpecies: 1500,
            coralSpecies: 400,
            keySpecies: [
                'Bluefin Tuna', 'Yellowfin Tuna', 'Skipjack Tuna', 'Mackerel',
                'Sea Cucumber', 'Giant Clam', 'Manta Ray', 'Whale Shark',
                'Hawksbill Turtle', 'Green Turtle', 'Dugong', 'Dolphins'
            ],
            endangeredSpecies: [
                'Hawksbill Turtle (Critically Endangered)',
                'Green Turtle (Endangered)',
                'Dugong (Vulnerable)',
                'Giant Clam (Vulnerable)',
                'Chinese White Dolphin (Vulnerable)'
            ],
            coralReefs: [
                { name: 'Spratly Reefs', status: 'Damaged by construction', area: 2000 },
                { name: 'Paracel Reefs', status: 'Threatened', area: 1500 },
                { name: 'Scarborough Shoal', status: 'Overfished', area: 150 }
            ],
            fishingGrounds: 'One of world\'s richest - 12% of global fish catch',
            annualFishCatch: '12 million tonnes',
            fishingNations: ['China', 'Vietnam', 'Philippines', 'Indonesia', 'Malaysia']
        },
        
        // Climate Role
        climateRole: {
            seaSurfaceTemp: { min: 24, max: 30, unit: '°C' },
            salinity: '33-34 PSU',
            monsoonInfluence: [
                { season: 'Summer (May-Oct)', wind: 'Southwest Monsoon', effect: 'Increased rainfall, northward currents' },
                { season: 'Winter (Nov-Apr)', wind: 'Northeast Monsoon', effect: 'Dry season, southward currents' }
            ],
            typhoons: {
                annualAverage: 10,
                season: 'June to November',
                formation: 'Western Pacific typhoons often cross SCS',
                majorTyphoons: ['Haiyan 2013', 'Mangkhut 2018', 'Rai 2021']
            },
            heatContent: 'Major heat reservoir for Asian monsoon',
            evaporation: 'High - significant moisture source for mainland Asia'
        },
        
        // Economic Importance - CRITICAL SECTION
        economicImportance: {
            overview: 'One of the most economically important seas in the world',
            tradeValue: '$5.3 trillion annual trade passes through',
            percentGlobalTrade: 33,
            percentGlobalLNG: 40,
            percentGlobalOil: 25,
            
            shippingRoutes: [
                {
                    name: 'China-Middle East Oil Route',
                    description: 'Primary route for China\'s oil imports',
                    annualTraffic: '15 million barrels/day',
                    value: '$200 billion',
                    countries: ['Saudi Arabia', 'UAE', 'Iran', 'Iraq', 'China']
                },
                {
                    name: 'East Asia-Europe Route',
                    description: 'Major container shipping lane',
                    annualTraffic: '25,000 ships',
                    value: '$1.5 trillion',
                    countries: ['China', 'Japan', 'Korea', 'Europe']
                },
                {
                    name: 'Singapore Hub',
                    description: 'World\'s busiest transshipment port',
                    annualContainers: '37 million TEU',
                    value: '$400 billion',
                    role: 'Connect Asia-Europe-Middle East'
                }
            ],
            
            majorPorts: [
                { name: 'Singapore', country: 'Singapore', ranking: 2, containers: '37.5M TEU' },
                { name: 'Shenzhen', country: 'China', ranking: 4, containers: '26.5M TEU' },
                { name: 'Hong Kong', country: 'China', ranking: 8, containers: '17.8M TEU' },
                { name: 'Ho Chi Minh City', country: 'Vietnam', ranking: 25, containers: '7.5M TEU' },
                { name: 'Manila', country: 'Philippines', ranking: 30, containers: '5.3M TEU' }
            ],
            
            fishing: {
                annualCatch: '12 million tonnes',
                value: '$21 billion',
                percentWorldCatch: 12,
                topNations: [
                    { country: 'China', catch: '6.5 million tonnes', value: '$11 billion' },
                    { country: 'Vietnam', catch: '2.5 million tonnes', value: '$4 billion' },
                    { country: 'Indonesia', catch: '1.5 million tonnes', value: '$2.5 billion' },
                    { country: 'Philippines', catch: '1 million tonnes', value: '$1.7 billion' }
                ],
                keyFisheries: ['Tuna', 'Mackerel', 'Anchovies', 'Shrimp', 'Squid']
            },
            
            oilAndGas: {
                provenOilReserves: '7.7 billion barrels',
                provenGasReserves: '266 trillion cubic feet',
                potentialReserves: 'Up to 190 billion barrels oil (Chinese estimate)',
                majorFields: [
                    { name: 'Vanguard Bank', country: 'Vietnam', status: 'Producing' },
                    { name: 'Natuna D-Alpha', country: 'Indonesia', status: 'Disputed' },
                    { name: 'Reed Bank', country: 'Philippines', status: 'Disputed' },
                    { name: 'Wanan Basin', country: 'China', status: 'Exploration' }
                ],
                productionChallenges: 'Territorial disputes prevent full development'
            },
            
            underseaCables: {
                totalCables: 16,
                dataCapacity: 'Petabits per second',
                majorCables: [
                    { name: 'SEA-ME-WE 3', connects: 'Asia-Europe', length: 39000 },
                    { name: 'AAG', connects: 'Asia-America', length: 20000 },
                    { name: 'APG', connects: 'Intra-Asia', length: 10400 }
                ],
                importance: 'Critical internet infrastructure for Asia'
            },
            
            tourism: {
                annualVisitors: '50 million to coastal areas',
                value: '$30 billion',
                majorDestinations: ['Hainan', 'Phuket (access)', 'Palawan', 'Halong Bay', 'Nha Trang']
            }
        },
        
        // Environmental Issues
        environmentalIssues: {
            overallHealth: 'Degrading - Multiple severe threats',
            
            overfishing: {
                severity: 'Critical',
                fishStockDecline: '70-95% of fish stocks depleted',
                illegalFishing: 'Widespread - unregulated fishing fleets',
                dynamiteFishing: 'Common in some areas',
                cyanideFishing: 'Ongoing problem for reef fish'
            },
            
            coralDestruction: {
                severity: 'Critical',
                bleaching: '40% of corals affected by recent bleaching events',
                construction: 'China has destroyed 160+ sq km of reef for artificial islands',
                dredging: 'Massive damage from island construction',
                recoveryTime: 'Centuries to recover if construction stops'
            },
            
            pollution: {
                plastic: '2.5 million tonnes plastic enters annually',
                oil: 'Regular shipping spills',
                agricultural: 'Runoff from Mekong, Pearl, Red rivers',
                industrial: 'Heavy metals, chemicals from coastal factories',
                sewage: 'Untreated sewage from coastal cities'
            },
            
            climateChange: {
                seaLevelRise: '3-4 mm/year',
                warming: '0.5-1°C increase since 1950',
                acidification: 'pH declining',
                extremeWeather: 'More intense typhoons'
            }
        },
        
        // Exploration & Research
        exploration: {
            historicExpeditions: [
                { name: 'Zheng He Voyages', year: '1405-1433', achievement: 'Chinese naval expeditions through SCS' },
                { name: 'Portuguese Arrival', year: '1511', achievement: 'Captured Malacca, European presence began' },
                { name: 'HMS Challenger', year: '1874', achievement: 'First scientific surveys' }
            ],
            researchStations: [
                { name: 'Sansha City', country: 'China', location: 'Woody Island', focus: 'Military & civilian research' },
                { name: 'Mischief Reef', country: 'China (built)', location: 'Spratly', focus: 'Military, weather station' }
            ],
            ongoingResearch: [
                'Climate monitoring',
                'Fishery stock assessments',
                'Coral reef surveys',
                'Seismic monitoring'
            ],
            discoveries: [
                'New coral species regularly discovered',
                'Deep-sea hydrothermal activity',
                'Ancient shipwrecks with trade goods'
            ]
        },
        
        // GEOPOLITICAL IMPORTANCE - EXTENSIVE SECTION
        geopolitics: {
            strategicImportance: 'Highest - Critical global chokepoint',
            conflictLevel: 'High tension - Risk of military conflict',
            
            overview: 'The South China Sea is the most contested body of water in the world. China claims approximately 90% through its "Nine-Dash Line," conflicting with claims from Vietnam, Philippines, Malaysia, Brunei, Indonesia, and Taiwan. The sea is critical for global trade, energy security, and military strategy.',
            
            territorialDisputes: [
                {
                    name: 'Nine-Dash Line',
                    claimant: 'China',
                    basis: 'Historic rights claim',
                    coverage: '~90% of South China Sea',
                    status: 'Rejected by 2016 UN tribunal, not recognized internationally',
                    militarization: 'Extensive - artificial islands with airstrips, missiles, radar'
                },
                {
                    name: 'Paracel Islands',
                    claimants: ['China (controls)', 'Vietnam', 'Taiwan'],
                    history: 'China seized from South Vietnam in 1974',
                    militarization: 'Chinese military base, airstrip, radar',
                    status: 'Controlled by China since 1974'
                },
                {
                    name: 'Spratly Islands',
                    claimants: ['China', 'Vietnam', 'Philippines', 'Malaysia', 'Taiwan', 'Brunei'],
                    features: '100+ islands, reefs occupied by multiple countries',
                    militarization: 'China built 7 artificial islands 2013-2018',
                    status: 'Most contested area - all claimants have presence'
                },
                {
                    name: 'Scarborough Shoal',
                    claimants: ['China (controls)', 'Philippines'],
                    history: 'China took control in 2012 standoff',
                    militarization: 'Coast guard presence, fishing control',
                    status: 'Under Chinese control, Philippines protests'
                }
            ],
            
            militaryPresence: {
                china: {
                    assets: ['Aircraft carriers', 'Destroyers', 'Submarines', 'Coast Guard fleet', 'Militia fishing fleet'],
                    bases: ['Woody Island (Paracel)', 'Fiery Cross Reef (Spratly)', 'Subi Reef', 'Mischief Reef'],
                    capabilities: ['Anti-ship missiles (range 400km)', 'SAM systems', 'Fighter aircraft', 'Radar networks'],
                    strategy: 'A2/AD - Anti-Access/Area Denial to prevent US intervention'
                },
                unitedStates: {
                    assets: ['7th Fleet operations', 'Aircraft carrier groups', 'Nuclear submarines'],
                    operations: ['Freedom of Navigation (FONOPS)', 'Air patrols', 'Joint exercises'],
                    bases: ['None in SCS - uses Philippines bases'],
                    strategy: 'Maintain freedom of navigation, support allies'
                },
                regional: [
                    { country: 'Vietnam', assets: 'Submarines, frigates', bases: 'Spratly outposts' },
                    { country: 'Philippines', assets: 'Coast guard, patrol vessels', bases: 'Kalayaan' },
                    { country: 'Malaysia', assets: 'Patrol vessels', bases: 'Swallow Reef' },
                    { country: 'Taiwan', assets: 'Military garrison', bases: 'Itu Aba (Taiping Island)' }
                ]
            },
            
            internationalLaw: {
                unclos: 'UN Convention on Law of the Sea - China signed but ignores ruling',
                eez: 'Exclusive Economic Zones overlap extensively',
                ruling2016: {
                    court: 'Permanent Court of Arbitration',
                    case: 'Philippines v China',
                    ruling: 'Nine-Dash Line has no legal basis, China violated Philippines\' rights',
                    chinaResponse: 'Rejects ruling, refuses to comply'
                },
                codeOfConduct: 'ASEAN-China Code of Conduct negotiations ongoing since 2002'
            },
            
            alliances: {
                usAllies: ['Philippines (MDT)', 'Australia (AUKUS)', 'Japan (Treaty)'],
                chinaSupport: ['Cambodia', 'Laos (economic)'],
                neutral: ['Indonesia (but disputes Natuna)', 'Singapore'],
                regional: ['ASEAN tries to maintain unity but divided']
            },
            
            recentIncidents: [
                { year: 2012, event: 'Scarborough Shoal Standoff - China takes control' },
                { year: 2014, event: 'China deploys oil rig in Vietnamese waters - violent protests' },
                { year: 2016, event: 'UN tribunal rules against China - China ignores' },
                { year: 2019, event: 'Chinese vessels ram Vietnamese boats at Vanguard Bank' },
                { year: 2021, event: '220 Chinese vessels at Whitsun Reef alarm Philippines' },
                { year: 2023, event: 'Chinese water cannon attacks Philippine vessels at Ayungin Shoal' }
            ],
            
            countryImportance: {
                china: {
                    importance: 'Critical',
                    reasons: [
                        '80% of oil imports transit through SCS',
                        'Claims entire sea as sovereign territory',
                        'Critical for naval access to Pacific',
                        'Nationalism tied to "reclaiming" territory'
                    ],
                    strategy: 'Control the sea, push US out of Western Pacific'
                },
                unitedStates: {
                    importance: 'Critical',
                    reasons: [
                        '$1.2 trillion annual trade transits',
                        'Treaty obligations to Philippines',
                        'Maintain rules-based order',
                        'Counter China\'s rise'
                    ],
                    strategy: 'Freedom of navigation, ally support, deterrence'
                },
                japan: {
                    importance: 'Very High',
                    reasons: [
                        '80% of oil imports transit SCS',
                        'Critical trade routes',
                        'Concerned about China precedent for Senkaku Islands'
                    ],
                    strategy: 'Support US, build up Self-Defense Forces'
                },
                vietnam: {
                    importance: 'Critical',
                    reasons: [
                        'Sovereignty over islands claimed',
                        'Major oil/gas reserves in disputed areas',
                        'Historical resistance to China',
                        'Economic zone fishing'
                    ],
                    strategy: 'Balance US and China, build military, international law'
                },
                philippines: {
                    importance: 'Critical',
                    reasons: [
                        'Claims West Philippine Sea',
                        'Major fishing grounds',
                        'Oil/gas potential at Reed Bank',
                        'US treaty ally'
                    ],
                    strategy: 'International law, US alliance, but Duterte balanced with China'
                },
                taiwan: {
                    importance: 'High',
                    reasons: [
                        'Similar claims to China',
                        'Controls Itu Aba (largest natural island)',
                        'Trade routes critical'
                    ],
                    strategy: 'Maintain presence, avoid conflict'
                }
            },
            
            futureOutlook: {
                scenarios: [
                    'Status Quo - Continued tensions, no war',
                    'Conflict - Miscalculation leads to military clash',
                    'Accommodation - Deal carved between powers',
                    'Resolution - Unlikely given nationalism'
                ],
                risks: ['Naval incident escalation', 'Taiwan contingency', 'Economic coercion'],
                opportunities: ['Joint development zones', 'Code of conduct agreement']
            }
        },
        
        // Trade Routes Specifically
        tradeRoutes: [
            {
                id: 'scs-malacca-china',
                name: 'Middle East to China Oil Route',
                type: 'oil',
                path: [
                    [1.3, 103.8], // Singapore
                    [5, 108],     // South Vietnam
                    [12, 113],    // Central SCS
                    [20, 117],    // South China coast
                    [30, 122]     // Shanghai
                ],
                statistics: {
                    dailyBarrels: 15000000,
                    annualValue: '$200 billion',
                    ships: '4,000+ tankers/year',
                    origin: 'Middle East (Saudi Arabia, UAE, Iraq, Iran)',
                    destination: 'China',
                    criticalChokepoints: ['Strait of Hormuz', 'Strait of Malacca', 'South China Sea']
                },
                importance: 'China imports 70% of its oil through this route'
            },
            {
                id: 'asia-europe-container',
                name: 'Asia-Europe Container Route',
                type: 'container',
                path: [
                    [31.2, 121.5], // Shanghai
                    [22.3, 114.2], // Hong Kong
                    [12, 113],     // SCS
                    [1.3, 103.8],  // Singapore
                    [6, 80],       // Sri Lanka
                    [30, 32]       // Suez
                ],
                statistics: {
                    annualTEU: '25 million TEU',
                    annualValue: '$1.5 trillion',
                    ships: '25,000+ container ships/year',
                    majorGoods: ['Electronics', 'Clothing', 'Machinery', 'Consumer goods'],
                    transitTime: '30-35 days'
                },
                importance: 'Primary route for Asian manufactured goods to Europe'
            },
            {
                id: 'japan-korea-oil',
                name: 'Japan-Korea Energy Imports',
                type: 'oil-lng',
                path: [
                    [1.3, 103.8],  // Singapore
                    [8, 112],      // South SCS
                    [18, 118],     // Luzon Strait
                    [25, 125],     // Taiwan Strait
                    [35, 135]      // Japan
                ],
                statistics: {
                    oilBarrels: '8 million bpd',
                    lngTonnes: '150 million tonnes/year',
                    annualValue: '$150 billion',
                    origin: 'Middle East, Southeast Asia, Australia',
                    destination: 'Japan, South Korea, Taiwan'
                },
                importance: 'Japan and Korea 100% dependent on seaborne energy imports'
            }
        ],
        
        funFacts: [
            '$5.3 trillion in trade passes through annually - about 1/3 of global trade',
            'More than 50% of the world\'s fishing vessels operate here',
            'China has created 3,200+ acres of artificial islands since 2013',
            'Contains what may be the world\'s largest undiscovered oil reserves',
            'The name has 10+ different names in different countries',
            'Zheng He\'s Ming Dynasty fleet (1405-1433) dominated these waters',
            'The 2016 UN tribunal was the first major international law ruling on maritime claims',
            'More military assets are deployed here than any other sea'
        ]
    },

    // ═══════════════════════════════════════════════════════
    // 🌊 MEDITERRANEAN SEA - The Cradle of Civilization
    // ═══════════════════════════════════════════════════════
    {
        id: 'mediterranean-sea',
        name: 'Mediterranean Sea',
        latinName: 'Mare Mediterraneum (Sea in the Middle of the Land)',
        parentOcean: 'Atlantic Ocean',
        parentOceanId: 'atlantic-ocean',
        
        area: 2500000,
        percentEarthSurface: 0.49,
        percentOceanArea: 0.7,
        length: 4000,
        width: 800,
        coastlineLength: 46000,
        volume: '3.75 million km³',
        
        avgDepth: 1500,
        maxDepth: 5267,
        deepestPoint: {
            name: 'Calypso Deep',
            depth: 5267,
            coordinates: [36.5, 21.1]
        },
        
        coordinates: [35, 18],
        bounds: { north: 46, south: 30, east: 36, west: -6 },
        defaultZoom: 4,
        
        image: 'https://images.unsplash.com/photo-1499939667766-4afceb292d05?w=500',
        backgroundImage: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1920',
        
        surroundingLandmasses: ['Europe', 'Africa', 'Asia'],
        borderingCountries: [
            { name: 'Spain', coastlineKm: 1660, region: 'Western Mediterranean' },
            { name: 'France', coastlineKm: 1700, region: 'Western Mediterranean' },
            { name: 'Italy', coastlineKm: 7600, region: 'Central Mediterranean' },
            { name: 'Slovenia', coastlineKm: 47, region: 'Adriatic' },
            { name: 'Croatia', coastlineKm: 5835, region: 'Adriatic' },
            { name: 'Montenegro', coastlineKm: 294, region: 'Adriatic' },
            { name: 'Albania', coastlineKm: 476, region: 'Adriatic/Ionian' },
            { name: 'Greece', coastlineKm: 13676, region: 'Eastern Mediterranean' },
            { name: 'Turkey', coastlineKm: 7200, region: 'Eastern Mediterranean' },
            { name: 'Syria', coastlineKm: 193, region: 'Eastern Mediterranean' },
            { name: 'Lebanon', coastlineKm: 225, region: 'Eastern Mediterranean' },
            { name: 'Israel', coastlineKm: 273, region: 'Eastern Mediterranean' },
            { name: 'Palestine', coastlineKm: 40, region: 'Eastern Mediterranean' },
            { name: 'Egypt', coastlineKm: 2450, region: 'Eastern Mediterranean' },
            { name: 'Libya', coastlineKm: 1770, region: 'Central Mediterranean' },
            { name: 'Tunisia', coastlineKm: 1300, region: 'Central Mediterranean' },
            { name: 'Algeria', coastlineKm: 1622, region: 'Western Mediterranean' },
            { name: 'Morocco', coastlineKm: 512, region: 'Western Mediterranean' },
            { name: 'Malta', coastlineKm: 253, region: 'Central Mediterranean' },
            { name: 'Cyprus', coastlineKm: 648, region: 'Eastern Mediterranean' },
            { name: 'Monaco', coastlineKm: 4, region: 'Western Mediterranean' }
        ],
        
        straits: [
            { 
                name: 'Strait of Gibraltar',
                connectsTo: 'Atlantic Ocean',
                width: 14,
                importance: 'Only natural connection to Atlantic',
                annualShips: 100000
            },
            { 
                name: 'Suez Canal',
                connectsTo: 'Red Sea/Indian Ocean',
                width: 0.3,
                importance: '12% of global trade, Asia-Europe route',
                annualShips: 19000
            },
            { 
                name: 'Strait of Messina',
                connectsTo: 'Tyrrhenian/Ionian Seas',
                width: 3,
                importance: 'Italy internal waterway',
                annualShips: 30000
            },
            { 
                name: 'Dardanelles & Bosphorus',
                connectsTo: 'Black Sea',
                width: 1.2,
                importance: 'Only Black Sea access, critical for Russia',
                annualShips: 45000
            }
        ],
        
        subSeas: [
            { name: 'Adriatic Sea', area: 138600, countries: ['Italy', 'Croatia', 'Slovenia', 'Albania', 'Montenegro'] },
            { name: 'Aegean Sea', area: 214000, countries: ['Greece', 'Turkey'] },
            { name: 'Ionian Sea', area: 169000, countries: ['Italy', 'Greece', 'Albania'] },
            { name: 'Tyrrhenian Sea', area: 275000, countries: ['Italy'] },
            { name: 'Ligurian Sea', area: 15000, countries: ['Italy', 'France', 'Monaco'] },
            { name: 'Balearic Sea', area: 100000, countries: ['Spain'] },
            { name: 'Alboran Sea', area: 54000, countries: ['Spain', 'Morocco', 'Algeria'] },
            { name: 'Levantine Sea', area: 320000, countries: ['Turkey', 'Syria', 'Lebanon', 'Israel', 'Egypt', 'Cyprus'] }
        ],
        
        currents: {
            warm: [
                { name: 'Atlantic Inflow', path: [[36, -6], [36, 0], [37, 5]], direction: 'Eastward', speed: '1 m/s' }
            ],
            cold: [
                { name: 'Mediterranean Outflow', path: [[35.5, -6], [35, -10], [34, -15]], direction: 'Westward (deep)', speed: '0.5 m/s' }
            ],
            gyres: [
                { name: 'Western Mediterranean Gyre', center: [38, 5], direction: 'Counterclockwise' },
                { name: 'Eastern Mediterranean Gyre', center: [33, 25], direction: 'Counterclockwise' }
            ]
        },
        
        tectonicFeatures: {
            plates: ['African Plate', 'Eurasian Plate', 'Anatolian Plate', 'Aegean Plate'],
            volcanism: ['Mount Etna (active)', 'Stromboli (active)', 'Vesuvius (dormant)', 'Santorini (dormant)'],
            seismicActivity: 'High - Regular earthquakes in Greece, Turkey, Italy',
            basins: [
                { name: 'Western Mediterranean Basin', depth: 3000 },
                { name: 'Tyrrhenian Basin', depth: 3700 },
                { name: 'Ionian Basin', depth: 5000 },
                { name: 'Levantine Basin', depth: 4500 }
            ]
        },
        
        marineLife: {
            biodiversityLevel: 'High',
            totalSpecies: 17000,
            fishSpecies: 650,
            keySpecies: ['Bluefin Tuna', 'Swordfish', 'Sea Bass', 'Red Mullet', 'Octopus', 'Mediterranean Monk Seal', 'Loggerhead Turtle'],
            endangeredSpecies: ['Mediterranean Monk Seal (Critically Endangered)', 'Loggerhead Turtle', 'Bluefin Tuna'],
            invasiveSpecies: '1000+ species entered via Suez Canal (Lessepsian migration)'
        },
        
        economicImportance: {
            overview: 'Historic center of civilization, major modern shipping corridor',
            tradeValue: '$1 trillion annual trade',
            percentGlobalTrade: 20,
            
            shippingRoutes: [
                {
                    name: 'Suez-Gibraltar Route',
                    description: 'Asia-Europe shortcut via Suez Canal',
                    annualTraffic: '19,000 ships',
                    value: '$1 trillion',
                    importance: 'Saves 7,000 km vs Cape route'
                }
            ],
            
            majorPorts: [
                { name: 'Valencia', country: 'Spain', ranking: 'Top 30 global', containers: '5.4M TEU' },
                { name: 'Piraeus', country: 'Greece', ranking: 'Top 30 global', containers: '5.1M TEU' },
                { name: 'Genoa', country: 'Italy', ranking: 'Top 50 global', containers: '2.7M TEU' },
                { name: 'Port Said', country: 'Egypt', ranking: 'Suez gateway', containers: '3.8M TEU' },
                { name: 'Tangier Med', country: 'Morocco', ranking: 'Top 50 global', containers: '5.7M TEU' }
            ],
            
            fishing: {
                annualCatch: '1 million tonnes',
                value: '$3 billion',
                status: '93% of stocks overfished',
                topNations: ['Spain', 'Italy', 'Greece', 'Turkey', 'Tunisia']
            },
            
            oilAndGas: {
                reserves: 'Significant discoveries in Eastern Mediterranean',
                majorFields: [
                    { name: 'Zohr Field', country: 'Egypt', reserves: '30 tcf gas' },
                    { name: 'Leviathan', country: 'Israel', reserves: '22 tcf gas' },
                    { name: 'Aphrodite', country: 'Cyprus', reserves: '4.5 tcf gas' }
                ],
                disputes: 'Turkey-Greece-Cyprus gas disputes'
            },
            
            tourism: {
                annualVisitors: '400 million',
                value: '$250 billion',
                cruiseIndustry: '30 million cruise passengers/year',
                destinations: ['Spain', 'France', 'Italy', 'Greece', 'Turkey', 'Croatia']
            }
        },
        
        environmentalIssues: {
            overallHealth: 'Critical - Most degraded sea in the world',
            overfishing: 'Severe - 93% of fish stocks overexploited',
            pollution: 'Severe - Plastic, industrial, agricultural runoff',
            plasticPollution: '247 billion microplastic particles floating',
            warming: 'Warming faster than global average',
            invasiveSpecies: '1000+ species from Suez Canal threatening native life'
        },
        
        geopolitics: {
            strategicImportance: 'Very High - Historic and modern crossroads',
            
            issues: [
                {
                    name: 'East Med Gas',
                    parties: ['Turkey', 'Greece', 'Cyprus', 'Israel', 'Egypt'],
                    description: 'Disputes over gas field rights and pipeline routes'
                },
                {
                    name: 'Libya',
                    parties: ['Turkey', 'Russia', 'EU', 'Egypt'],
                    description: 'Civil war, naval operations, migration route'
                },
                {
                    name: 'Migration',
                    parties: ['EU', 'Libya', 'Turkey'],
                    description: 'Major route for African/Middle Eastern migration to Europe'
                }
            ],
            
            navalPresences: [
                { country: 'USA', base: '6th Fleet (Naples)', purpose: 'NATO operations' },
                { country: 'Russia', base: 'Tartus (Syria)', purpose: 'Mediterranean presence' },
                { country: 'Turkey', base: 'Aksaz', purpose: 'NATO, regional power' },
                { country: 'France', base: 'Toulon', purpose: 'Mediterranean operations' },
                { country: 'UK', base: 'Gibraltar, Cyprus', purpose: 'Strategic points' }
            ]
        },
        
        funFacts: [
            'The Mediterranean loses more water to evaporation than rivers add, so Atlantic water constantly flows in',
            'Contains 7% of all known marine species despite being only 0.7% of ocean area',
            'Was completely dry 5-6 million years ago (Messinian Salinity Crisis)',
            'Has been a major trade route for over 4,000 years',
            'The name means "Sea in the Middle of the Land" in Latin',
            'Home to some of the world\'s oldest shipwrecks (3,000+ years old)',
            'The ancient Egyptians, Phoenicians, Greeks, and Romans all depended on it',
            'Nearly landlocked - water takes ~100 years to exchange with Atlantic'
        ]
    }
];
/* ═══════════════════════════════════════════════════════════
   🌊 SEAS EXPLORER - COMPLETE SEAS DATABASE
   Part 2 of 4 - More Strategic Seas
   ═══════════════════════════════════════════════════════════ */

// Continue seasData array
seasData.push(
    // ═══════════════════════════════════════════════════════
    // 🌊 ARABIAN SEA - Gateway to India & Middle East Oil
    // ═══════════════════════════════════════════════════════
    {
        id: 'arabian-sea',
        name: 'Arabian Sea',
        alternativeNames: ['Erythraean Sea (ancient)', 'Indian Ocean (northwestern)'],
        parentOcean: 'Indian Ocean',
        parentOceanId: 'indian-ocean',
        
        area: 3862000,
        percentEarthSurface: 0.76,
        avgDepth: 2734,
        maxDepth: 4652,
        deepestPoint: {
            name: 'Arabian Basin',
            depth: 4652,
            coordinates: [14, 65]
        },
        
        coordinates: [15, 65],
        bounds: { north: 25, south: 5, east: 78, west: 42 },
        defaultZoom: 4,
        
        image: 'https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=500',
        backgroundImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1920',
        
        surroundingLandmasses: ['India', 'Pakistan', 'Iran', 'Oman', 'Yemen', 'Somalia'],
        borderingCountries: [
            { name: 'India', coastlineKm: 7516, region: 'Eastern Arabian Sea' },
            { name: 'Pakistan', coastlineKm: 1046, region: 'Northern Arabian Sea' },
            { name: 'Iran', coastlineKm: 2440, region: 'Persian Gulf access' },
            { name: 'Oman', coastlineKm: 2092, region: 'Western Arabian Sea' },
            { name: 'Yemen', coastlineKm: 1906, region: 'Gulf of Aden' },
            { name: 'Somalia', coastlineKm: 3025, region: 'Horn of Africa' },
            { name: 'Maldives', coastlineKm: 644, region: 'Island nation' }
        ],
        
        straits: [
            {
                name: 'Strait of Hormuz',
                connectsTo: 'Persian Gulf',
                width: 54,
                importance: 'World\'s most important oil chokepoint - 20% of global oil',
                annualShips: 17000,
                oilFlow: '21 million barrels/day'
            },
            {
                name: 'Bab el-Mandeb',
                connectsTo: 'Red Sea',
                width: 26,
                importance: 'Gateway to Suez Canal route',
                annualShips: 25000,
                oilFlow: '6.2 million barrels/day'
            }
        ],
        
        subSeas: [
            { name: 'Gulf of Oman', area: 180000, countries: ['Oman', 'Iran', 'UAE'] },
            { name: 'Gulf of Aden', area: 410000, countries: ['Yemen', 'Somalia', 'Djibouti'] },
            { name: 'Laccadive Sea', area: 786000, countries: ['India', 'Maldives', 'Sri Lanka'] }
        ],
        
        currents: {
            warm: [
                { 
                    name: 'Southwest Monsoon Current',
                    path: [[0, 50], [10, 60], [18, 72]],
                    direction: 'Northeast (summer)',
                    speed: '1 m/s',
                    season: 'May-September'
                }
            ],
            cold: [
                { 
                    name: 'Somali Current (upwelling)',
                    path: [[0, 45], [5, 50], [12, 54]],
                    direction: 'Northeast (summer)',
                    speed: '3.5 m/s',
                    description: 'One of strongest currents - reverses with monsoon'
                },
                {
                    name: 'Northeast Monsoon Current',
                    path: [[18, 72], [10, 60], [5, 50]],
                    direction: 'Southwest (winter)',
                    speed: '0.5 m/s',
                    season: 'November-March'
                }
            ]
        },
        
        tectonicFeatures: {
            plates: ['Indian Plate', 'Arabian Plate', 'African Plate'],
            ridges: [
                { name: 'Carlsberg Ridge', coordinates: [[5, 60], [10, 65]], description: 'Spreading ridge' },
                { name: 'Owen Fracture Zone', coordinates: [[15, 58], [20, 62]], description: 'Transform fault' }
            ],
            seismicActivity: 'Moderate',
            volcanism: 'Submarine volcanic activity'
        },
        
        marineLife: {
            biodiversityLevel: 'High',
            totalSpecies: 5000,
            keySpecies: ['Whale Shark', 'Blue Whale', 'Dolphins', 'Sea Turtles', 'Tuna', 'Sardines', 'Mackerel'],
            endangeredSpecies: ['Olive Ridley Turtle', 'Dugong'],
            fishingGrounds: 'Major fishing area - sardines, mackerel, tuna',
            monsoonUpwelling: 'Creates one of most productive ocean areas during summer monsoon'
        },
        
        economicImportance: {
            overview: 'Critical for global oil transport and India\'s trade',
            tradeValue: '$1.5 trillion annual trade',
            
            oilTransit: {
                straitOfHormuz: {
                    dailyBarrels: 21000000,
                    percentWorldOil: 20,
                    percentWorldLNG: 35,
                    criticalFor: ['Japan', 'South Korea', 'China', 'India']
                },
                babElMandeb: {
                    dailyBarrels: 6200000,
                    importance: 'Alternative if Suez closed'
                }
            },
            
            majorPorts: [
                { name: 'Mumbai', country: 'India', ranking: 'India\'s largest', trade: '$120 billion' },
                { name: 'Karachi', country: 'Pakistan', ranking: 'Pakistan\'s largest', trade: '$40 billion' },
                { name: 'Gwadar', country: 'Pakistan', ranking: 'CPEC port', trade: '$5 billion (growing)' },
                { name: 'Chabahar', country: 'Iran', ranking: 'India-Iran project', trade: '$10 billion' },
                { name: 'Salalah', country: 'Oman', ranking: 'Transshipment hub', containers: '4M TEU' }
            ],
            
            fishing: {
                annualCatch: '4 million tonnes',
                value: '$8 billion',
                topNations: ['India', 'Pakistan', 'Oman', 'Yemen', 'Iran']
            },
            
            underseaCables: {
                majorCables: ['SEA-ME-WE 3', 'SEA-ME-WE 5', 'I-ME-WE', 'AAE-1'],
                importance: 'Critical internet connectivity between Asia and Europe'
            }
        },
        
        environmentalIssues: {
            oilSpills: 'Risk from heavy tanker traffic',
            overfishing: 'Several species overexploited',
            deadZones: 'Largest ocean dead zone forming (Gulf of Oman area)',
            plasticPollution: 'Increasing from coastal cities',
            warming: 'Cyclones becoming more intense'
        },
        
        geopolitics: {
            strategicImportance: 'Critical - Oil lifeline for global economy',
            
            issues: [
                {
                    name: 'Strait of Hormuz',
                    parties: ['Iran', 'USA', 'Gulf States'],
                    description: 'Iran threatens to close during tensions',
                    risk: 'Would cause global oil crisis'
                },
                {
                    name: 'Yemen Civil War',
                    parties: ['Saudi Arabia', 'Iran (via Houthis)', 'UAE'],
                    description: 'Houthi attacks on ships, Bab el-Mandeb threats',
                    impact: 'Shipping rerouting, insurance costs'
                },
                {
                    name: 'China-Pakistan Economic Corridor',
                    parties: ['China', 'Pakistan', 'India (concerned)'],
                    description: 'Gwadar port gives China Arabian Sea access',
                    impact: 'Strategic realignment'
                },
                {
                    name: 'Somalia Piracy',
                    parties: ['International naval coalitions'],
                    description: 'Major piracy issue 2005-2012, now reduced',
                    impact: 'Ongoing naval patrols required'
                }
            ],
            
            navalPresences: [
                { country: 'USA', base: 'Bahrain (5th Fleet)', purpose: 'Persian Gulf operations' },
                { country: 'India', base: 'Multiple bases', purpose: 'Regional power projection' },
                { country: 'China', base: 'Djibouti', purpose: 'First overseas base' },
                { country: 'France', base: 'Djibouti', purpose: 'Anti-piracy, regional' },
                { country: 'Japan', base: 'Djibouti', purpose: 'Anti-piracy' }
            ],
            
            countryImportance: {
                india: {
                    importance: 'Critical',
                    reasons: [
                        '95% of trade volume by sea',
                        '70% of oil imports via Arabian Sea',
                        'Strategic access to Persian Gulf',
                        'Naval dominance goal'
                    ]
                },
                china: {
                    importance: 'Very High',
                    reasons: [
                        'Gwadar port bypasses Malacca Strait',
                        'Belt and Road connectivity',
                        'Oil security diversification'
                    ]
                },
                usa: {
                    importance: 'Very High',
                    reasons: [
                        'Protect oil flows',
                        'Counter Iran',
                        'Anti-terrorism operations'
                    ]
                }
            }
        },
        
        tradeRoutes: [
            {
                id: 'hormuz-asia',
                name: 'Persian Gulf to Asia Oil Route',
                type: 'oil',
                path: [
                    [26.5, 56.5], // Hormuz
                    [22, 62],     // Gulf of Oman
                    [15, 65],     // Arabian Sea
                    [8, 73],      // Laccadive Sea
                    [1.3, 103.8]  // Singapore
                ],
                statistics: {
                    dailyBarrels: 18000000,
                    annualValue: '$350 billion',
                    destinations: ['China', 'Japan', 'Korea', 'India']
                }
            }
        ],
        
        funFacts: [
            'The Somali Current is one of the fastest ocean currents at 3.5 m/s',
            'Summer monsoon creates massive upwelling - visible from space',
            'Ancient Egyptians traded here 5,000 years ago',
            'Alexander the Great\'s admiral Nearchus sailed from India to Persia here',
            'Contains one of the world\'s largest "dead zones" with almost no oxygen',
            '20% of global oil passes through the narrow Strait of Hormuz',
            'The world\'s largest jellyfish swarms occur here during monsoon'
        ]
    },

    // ═══════════════════════════════════════════════════════
    // 🌊 CARIBBEAN SEA - America's Mediterranean
    // ═══════════════════════════════════════════════════════
    {
        id: 'caribbean-sea',
        name: 'Caribbean Sea',
        alternativeNames: ['American Mediterranean'],
        parentOcean: 'Atlantic Ocean',
        parentOceanId: 'atlantic-ocean',
        
        area: 2754000,
        percentEarthSurface: 0.54,
        avgDepth: 2200,
        maxDepth: 7686,
        deepestPoint: {
            name: 'Cayman Trench',
            depth: 7686,
            coordinates: [19.2, -80]
        },
        
        coordinates: [15, -75],
        bounds: { north: 24, south: 9, east: -60, west: -88 },
        defaultZoom: 4,
        
        image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=500',
        backgroundImage: 'https://images.unsplash.com/photo-1548574505-5e239809ee19?w=1920',
        
        surroundingLandmasses: ['Central America', 'South America', 'Greater Antilles', 'Lesser Antilles'],
        borderingCountries: [
            { name: 'Mexico', coastlineKm: 1100, region: 'Yucatan Peninsula' },
            { name: 'Belize', coastlineKm: 386, region: 'Central America' },
            { name: 'Guatemala', coastlineKm: 148, region: 'Central America' },
            { name: 'Honduras', coastlineKm: 823, region: 'Central America' },
            { name: 'Nicaragua', coastlineKm: 910, region: 'Central America' },
            { name: 'Costa Rica', coastlineKm: 212, region: 'Central America' },
            { name: 'Panama', coastlineKm: 1290, region: 'Central America' },
            { name: 'Colombia', coastlineKm: 1600, region: 'South America' },
            { name: 'Venezuela', coastlineKm: 2800, region: 'South America' },
            { name: 'Cuba', coastlineKm: 5746, region: 'Greater Antilles' },
            { name: 'Jamaica', coastlineKm: 1022, region: 'Greater Antilles' },
            { name: 'Haiti', coastlineKm: 1771, region: 'Greater Antilles' },
            { name: 'Dominican Republic', coastlineKm: 1288, region: 'Greater Antilles' },
            { name: 'Puerto Rico (US)', coastlineKm: 501, region: 'Greater Antilles' }
        ],
        
        straits: [
            {
                name: 'Yucatan Channel',
                connectsTo: 'Gulf of Mexico',
                width: 217,
                importance: 'Gulf of Mexico access',
                annualShips: 75000
            },
            {
                name: 'Windward Passage',
                connectsTo: 'Atlantic Ocean',
                width: 80,
                importance: 'Cuba-Haiti passage',
                annualShips: 15000
            },
            {
                name: 'Panama Canal',
                connectsTo: 'Pacific Ocean',
                width: 0.15,
                importance: '5% of global trade',
                annualShips: 14000
            },
            {
                name: 'Mona Passage',
                connectsTo: 'Atlantic Ocean',
                width: 120,
                importance: 'US shipping route',
                annualShips: 10000
            }
        ],
        
        islands: [
            { name: 'Cuba', area: 109884, population: 11000000, country: 'Cuba' },
            { name: 'Hispaniola', area: 76192, population: 22000000, countries: 'Haiti, Dominican Republic' },
            { name: 'Jamaica', area: 10990, population: 2900000, country: 'Jamaica' },
            { name: 'Puerto Rico', area: 9104, population: 3200000, country: 'USA' },
            { name: 'Trinidad', area: 4768, population: 1400000, country: 'Trinidad & Tobago' },
            { name: 'Lesser Antilles', area: 14000, population: 3500000, description: '20+ islands' }
        ],
        
        currents: {
            warm: [
                {
                    name: 'Caribbean Current',
                    path: [[12, -65], [14, -75], [17, -82], [22, -85]],
                    direction: 'Northwest',
                    speed: '0.5-0.7 m/s',
                    description: 'Feeds into Gulf Stream'
                },
                {
                    name: 'Guiana Current',
                    path: [[5, -52], [10, -60], [12, -65]],
                    direction: 'Northwest',
                    speed: '0.5 m/s',
                    description: 'Brings warm South Atlantic water'
                }
            ],
            cold: []
        },
        
        tectonicFeatures: {
            plates: ['Caribbean Plate', 'North American Plate', 'South American Plate'],
            trenches: [
                { name: 'Cayman Trench', depth: 7686, coordinates: [19.2, -80], description: 'Deepest point in Caribbean' },
                { name: 'Puerto Rico Trench', depth: 8376, coordinates: [19.7, -67.4], description: 'Deepest in Atlantic (edge of Caribbean)' }
            ],
            seismicActivity: 'High - Major earthquakes possible',
            volcanism: 'Active volcanoes in Lesser Antilles (Montserrat, St. Vincent)',
            earthquakeRisk: 'High - Haiti earthquake 2010 killed 250,000'
        },
        
        marineLife: {
            biodiversityLevel: 'Very High',
            totalSpecies: 12000,
            coralSpecies: 65,
            keySpecies: ['Manatee', 'Sea Turtles', 'Dolphins', 'Sharks', 'Grouper', 'Lobster', 'Conch'],
            endangeredSpecies: ['West Indian Manatee', 'Hawksbill Turtle', 'Elkhorn Coral', 'Staghorn Coral'],
            coralReefs: [
                { name: 'Belize Barrier Reef', status: 'World Heritage Site', area: 96300 },
                { name: 'Cuban Coral Reefs', status: 'Well preserved', area: 'Large' }
            ]
        },
        
        economicImportance: {
            overview: 'Critical for US trade, major tourism destination',
            tradeValue: '$500 billion annual trade',
            
            shippingRoutes: [
                {
                    name: 'Gulf-Atlantic Route',
                    description: 'US Gulf ports to East Coast and Europe',
                    annualTraffic: '75,000 ships',
                    value: '$200 billion'
                },
                {
                    name: 'Panama Canal Feeder',
                    description: 'Connect Asia-Caribbean-US East',
                    annualTraffic: '14,000 transits',
                    value: '$300 billion'
                }
            ],
            
            majorPorts: [
                { name: 'Colon', country: 'Panama', ranking: 'Largest in Latin America', containers: '4.4M TEU' },
                { name: 'Cartagena', country: 'Colombia', ranking: 'Regional hub', containers: '3.2M TEU' },
                { name: 'Kingston', country: 'Jamaica', ranking: 'Transshipment hub', containers: '1.8M TEU' },
                { name: 'San Juan', country: 'Puerto Rico', ranking: 'US gateway', containers: '1.5M TEU' }
            ],
            
            tourism: {
                annualVisitors: '30 million',
                cruisePassengers: '12 million',
                value: '$60 billion',
                topDestinations: ['Bahamas', 'Jamaica', 'Dominican Republic', 'Cuba', 'Puerto Rico', 'US Virgin Islands']
            },
            
            oilAndGas: {
                venezeulanOil: '2 million barrels/day production',
                trinitadLNG: 'Major LNG exporter',
                mexcicanGulf: 'Nearby offshore drilling'
            }
        },
        
        environmentalIssues: {
            coralBleaching: 'Severe - 50% of coral lost since 1970s',
            hurricanes: 'Intensifying due to warmer waters',
            sargassumBlooms: 'Massive seaweed blooms since 2011',
            pollution: 'Cruise ship pollution, agricultural runoff',
            overfishing: 'Nassau Grouper, Conch depleted'
        },
        
        geopolitics: {
            strategicImportance: 'High - US backyard, China growing presence',
            
            issues: [
                {
                    name: 'Cuba Embargo',
                    parties: ['USA', 'Cuba'],
                    description: '60+ year economic embargo',
                    status: 'Ongoing, some Obama-era relaxation reversed'
                },
                {
                    name: 'Venezuela Crisis',
                    parties: ['USA', 'Venezuela', 'Russia', 'China'],
                    description: 'Political crisis, migration, oil',
                    impact: 'Regional destabilization'
                },
                {
                    name: 'China Investment',
                    parties: ['China', 'Caribbean nations'],
                    description: 'Belt and Road ports, loans',
                    impact: 'Growing Chinese influence in US sphere'
                },
                {
                    name: 'Drug Trafficking',
                    parties: ['USA', 'Colombia', 'Mexico', 'Caribbean nations'],
                    description: 'Major cocaine transit route',
                    impact: 'US Coast Guard operations'
                }
            ],
            
            navalPresences: [
                { country: 'USA', base: 'Guantanamo Bay (Cuba)', purpose: 'Strategic base, detention' },
                { country: 'USA', base: 'Roosevelt Roads (PR, closed)', purpose: 'Caribbean operations' },
                { country: 'Netherlands', base: 'Curacao', purpose: 'Drug interdiction' },
                { country: 'UK', base: 'British Virgin Islands', purpose: 'Limited' }
            ]
        },
        
        tradeRoutes: [
            {
                id: 'panama-atlantic',
                name: 'Panama Canal Route',
                type: 'container',
                path: [
                    [9, -79.5],   // Panama Canal
                    [12, -80],    // Caribbean
                    [16, -78],    // Jamaica
                    [20, -75],    // Cuba
                    [25, -80]     // Florida
                ],
                statistics: {
                    annualShips: 14000,
                    annualCargo: '475 million tonnes',
                    annualValue: '$300 billion',
                    majorGoods: ['Containers', 'Grain', 'LNG', 'Vehicles']
                }
            }
        ],
        
        funFacts: [
            'The word "Caribbean" comes from the Carib people who lived there',
            'Contains the deepest point in the Atlantic basin (Puerto Rico Trench)',
            'Birthplace of rum - first distilled in Barbados in 1650s',
            'The Bermuda Triangle legend encompasses part of the Caribbean',
            'Home to 7,000+ islands, islets, reefs, and cays',
            'The Panama Canal saves 8,000 miles vs going around South America',
            'Pirates of the Caribbean was based on real history - Port Royal, Jamaica was pirate capital',
            'The Sargasso Sea borders it - only sea with no coastline'
        ]
    },

    // ═══════════════════════════════════════════════════════
    // 🌊 GULF OF MEXICO - America's Energy Coast
    // ═══════════════════════════════════════════════════════
    {
        id: 'gulf-of-mexico',
        name: 'Gulf of Mexico',
        alternativeNames: ['Golfo de México', 'Gulf'],
        parentOcean: 'Atlantic Ocean',
        parentOceanId: 'atlantic-ocean',
        
        area: 1550000,
        percentEarthSurface: 0.3,
        avgDepth: 1486,
        maxDepth: 4384,
        deepestPoint: {
            name: 'Sigsbee Deep',
            depth: 4384,
            coordinates: [25.3, -92.5]
        },
        
        coordinates: [25, -90],
        bounds: { north: 31, south: 18, east: -81, west: -98 },
        defaultZoom: 5,
        
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500',
        backgroundImage: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?w=1920',
        
        borderingCountries: [
            { name: 'United States', coastlineKm: 2700, states: ['Texas', 'Louisiana', 'Mississippi', 'Alabama', 'Florida'] },
            { name: 'Mexico', coastlineKm: 2805, states: ['Tamaulipas', 'Veracruz', 'Tabasco', 'Campeche', 'Yucatan', 'Quintana Roo'] },
            { name: 'Cuba', coastlineKm: 200, region: 'Western tip' }
        ],
        
        straits: [
            {
                name: 'Yucatan Channel',
                connectsTo: 'Caribbean Sea',
                width: 217,
                importance: 'Gulf Stream origin',
                annualShips: 75000
            },
            {
                name: 'Straits of Florida',
                connectsTo: 'Atlantic Ocean',
                width: 150,
                importance: 'Gulf Stream exit',
                annualShips: 100000
            }
        ],
        
        currents: {
            warm: [
                {
                    name: 'Loop Current',
                    path: [[22, -86], [25, -87], [27, -85], [25, -83]],
                    direction: 'Clockwise loop',
                    speed: '0.8-1.8 m/s',
                    description: 'Feeds into Gulf Stream'
                }
            ],
            cold: []
        },
        
        tectonicFeatures: {
            plates: ['North American Plate', 'Caribbean Plate'],
            basins: [
                { name: 'Sigsbee Deep', depth: 4384 },
                { name: 'Campeche Bank', depth: 200, type: 'Continental shelf' }
            ],
            saltDomes: 'Thousands of salt domes - trap oil and gas',
            seismicActivity: 'Low',
            volcanism: 'None - but ancient rifting created the Gulf'
        },
        
        marineLife: {
            biodiversityLevel: 'Moderate to High',
            totalSpecies: 15000,
            keySpecies: ['Red Snapper', 'Grouper', 'Shrimp', 'Blue Crab', 'Menhaden', 'Manatee', 'Sea Turtles', 'Bottlenose Dolphin', 'Sperm Whale'],
            endangeredSpecies: ['Kemp\'s Ridley Sea Turtle', 'West Indian Manatee', 'Gulf Sturgeon'],
            deadZone: {
                location: 'Louisiana coast',
                size: '15,000 km² (varies)',
                cause: 'Mississippi River agricultural runoff',
                impact: 'Second largest dead zone in world'
            }
        },
        
        economicImportance: {
            overview: 'America\'s energy coast - oil, gas, petrochemicals',
            tradeValue: '$750 billion annual economic activity',
            
            oilAndGas: {
                production: '1.7 million barrels/day oil, 3.2 bcf/day gas',
                percentUSProduction: '17% oil, 5% gas',
                reserves: 'Billions of barrels remaining',
                platforms: '2,000+ offshore platforms',
                refineries: '45% of US refining capacity on Gulf Coast',
                majorFields: ['Thunder Horse', 'Mars', 'Perdido', 'Appomattox']
            },
            
            majorPorts: [
                { name: 'Houston', ranking: '#1 US by tonnage', trade: '$300 billion', cargo: 'Oil, chemicals, containers' },
                { name: 'South Louisiana', ranking: '#1 US by tonnage (combined)', trade: '$150 billion', cargo: 'Grain, oil' },
                { name: 'New Orleans', ranking: 'Top 10 US', trade: '$100 billion', cargo: 'Grain, containers' },
                { name: 'Tampa', ranking: 'Top 15 US', trade: '$50 billion', cargo: 'Phosphate, containers' },
                { name: 'Veracruz', ranking: 'Mexico\'s largest Gulf port', trade: '$40 billion' }
            ],
            
            fishing: {
                annualCatch: '1.2 million tonnes',
                value: '$1 billion',
                keySpecies: ['Shrimp (40% US)', 'Oysters (67% US)', 'Blue Crab', 'Red Snapper'],
                topStates: ['Louisiana', 'Texas', 'Florida']
            },
            
            shipping: {
                annualShips: 175000,
                cargo: '600 million tonnes',
                employment: '2 million jobs depend on Gulf shipping'
            },
            
            tourism: {
                annualVisitors: '60 million to Gulf beaches',
                value: '$40 billion',
                destinations: ['Florida Panhandle', 'Alabama beaches', 'Texas coast', 'Cancun', 'Cozumel']
            }
        },
        
        environmentalIssues: {
            overallHealth: 'Stressed - Multiple severe issues',
            
            deadZone: {
                severity: 'Severe',
                size: '15,000 km² annually',
                cause: 'Nitrogen/phosphorus from Mississippi watershed',
                impact: 'Kills fish, shrimp, crabs'
            },
            
            oilSpills: {
                deepwaterHorizon2010: {
                    spill: '4.9 million barrels',
                    damage: '$65 billion',
                    impact: ''Largest accidental marine oil spill in history''
                },
                ongoingSpills: 'Small spills from aging infrastructure'
            },
            
            hurricanes: {
                frequency: '3-5 major hurricanes per decade',
                recentMajor: ['Katrina 2005', 'Harvey 2017', 'Ida 2021'],
                impact: 'Damage to platforms, coastal communities'
            },
            
            sealevelRise: 'Louisiana losing 25 sq miles/year to subsidence and sea rise'
        },
        
        geopolitics: {
            strategicImportance: 'Very High - US energy security',
            
            issues: [
                {
                    name: 'Energy Security',
                    description: 'Gulf provides critical US domestic energy',
                    importance: 'Hurricane disruptions spike gas prices nationwide'
                },
                {
                    name: 'US-Mexico Maritime Border',
                    description: 'Recently agreed boundary for oil drilling',
                    status: 'Cooperative - joint development area'
                },
                {
                    name: 'Cuba',
                    description: 'Oil drilling near US waters',
                    status: 'Ongoing tensions, spill risk concerns'
                }
            ],
            
            navalPresences: [
                { country: 'USA', base: 'Naval Station Pensacola', purpose: 'Training, operations' },
                { country: 'USA', base: 'Coast Guard Gulf sector', purpose: 'Oil platform security, hurricanes' }
            ]
        },
        
        tradeRoutes: [
            {
                id: 'gulf-exports',
                name: 'Gulf Energy Exports',
                type: 'oil-lng',
                path: [
                    [29.7, -95],   // Houston
                    [27, -90],     // Offshore
                    [24, -85],     // Florida Straits
                    [28, -78],     // Atlantic
                ],
                statistics: {
                    exports: '$150 billion/year',
                    products: 'Crude oil, LNG, refined products, petrochemicals',
                    destinations: 'Europe, Asia, Latin America'
                }
            }
        ],
        
        funFacts: [
            'Contains the largest "dead zone" in the Western Hemisphere',
            'The Loop Current can spin off eddies that last for months',
            'More than 27,000 abandoned oil wells dot the Gulf floor',
            'The Deepwater Horizon spill created a plume 35 km long and 200m high',
            'The Gulf was formed when South America separated from North America 160 million years ago',
            '40% of US commercial seafood comes from the Gulf',
            'The Sigsbee Deep was thought to be the deepest point until deeper spots found',
            'Oil seeps naturally from the seafloor - about 1 million barrels/year'
        ]
    }
);
/* ═══════════════════════════════════════════════════════════
   🌊 SEAS EXPLORER - COMPLETE SEAS DATABASE
   Part 3 of 4 - More Strategic Seas + Global Trade Routes
   ═══════════════════════════════════════════════════════════ */

seasData.push(
    // ═══════════════════════════════════════════════════════
    // 🌊 PERSIAN GULF - Oil Heart of the World
    // ═══════════════════════════════════════════════════════
    {
        id: 'persian-gulf',
        name: 'Persian Gulf',
        alternativeNames: ['Arabian Gulf (Arab states)', 'The Gulf'],
        parentOcean: 'Indian Ocean',
        parentOceanId: 'indian-ocean',
        
        area: 251000,
        avgDepth: 50,
        maxDepth: 90,
        deepestPoint: { name: 'Near Hormuz', depth: 90, coordinates: [26.5, 56] },
        
        coordinates: [26, 51],
        defaultZoom: 6,
        
        image: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=500',
        backgroundImage: 'https://images.unsplash.com/photo-1512632578881-f796dbdb9c1f?w=1920',
        
        borderingCountries: [
            { name: 'Iran', coastlineKm: 1880, oilReserves: '208 billion barrels' },
            { name: 'Iraq', coastlineKm: 58, oilReserves: '145 billion barrels' },
            { name: 'Kuwait', coastlineKm: 499, oilReserves: '101 billion barrels' },
            { name: 'Saudi Arabia', coastlineKm: 710, oilReserves: '267 billion barrels' },
            { name: 'Bahrain', coastlineKm: 161, oilReserves: '0.2 billion barrels' },
            { name: 'Qatar', coastlineKm: 563, gasReserves: '871 tcf (3rd largest)' },
            { name: 'UAE', coastlineKm: 1318, oilReserves: '98 billion barrels' },
            { name: 'Oman', coastlineKm: 350, oilReserves: '5 billion barrels' }
        ],
        
        straits: [
            {
                name: 'Strait of Hormuz',
                connectsTo: 'Gulf of Oman/Arabian Sea',
                width: 54,
                navigableWidth: 10,
                importance: 'World\'s most important oil chokepoint',
                statistics: {
                    dailyOil: 21000000,
                    dailyLNG: 4000000,
                    annualShips: 17000,
                    percentWorldOil: 21,
                    percentWorldLNG: 35
                }
            }
        ],
        
        oilAndGas: {
            provenOilReserves: '800 billion barrels (48% of world)',
            provenGasReserves: '2,836 tcf (40% of world)',
            dailyProduction: '25 million barrels/day',
            majorFields: [
                { name: 'Ghawar', country: 'Saudi Arabia', type: 'Oil', status: 'Largest in world' },
                { name: 'South Pars/North Dome', countries: 'Qatar/Iran', type: 'Gas', status: 'Largest gas field in world' },
                { name: 'Burgan', country: 'Kuwait', type: 'Oil', status: 'Second largest' },
                { name: 'Rumaila', country: 'Iraq', type: 'Oil' },
                { name: 'Upper Zakum', country: 'UAE', type: 'Oil' }
            ]
        },
        
        economicImportance: {
            overview: 'Heart of global energy supply',
            tradeValue: '$1 trillion annual oil/gas exports',
            percentGlobalOil: 30,
            
            majorPorts: [
                { name: 'Ras Tanura', country: 'Saudi Arabia', type: 'Oil terminal', capacity: '6 million bpd' },
                { name: 'Jebel Ali', country: 'UAE', type: 'Container/general', ranking: 'Top 10 global' },
                { name: 'Mina Al Ahmadi', country: 'Kuwait', type: 'Oil terminal' },
                { name: 'Ras Laffan', country: 'Qatar', type: 'LNG terminal', capacity: 'World\'s largest LNG' },
                { name: 'Kharg Island', country: 'Iran', type: 'Oil terminal' }
            ],
            
            desalination: '60% of world\'s desalinated water comes from Gulf states'
        },
        
        environmentalIssues: {
            oilPollution: 'Chronic from shipping, production, 1991 Gulf War spill',
            temperature: 'Warming faster than most waters',
            salinity: 'Increasing due to desalination brine',
            coralBleaching: 'Widespread',
            gulfWarSpill1991: '8 million barrels deliberately released - largest in history'
        },
        
        geopolitics: {
            strategicImportance: 'Critical - Global energy security depends on stability',
            
            issues: [
                {
                    name: 'Iran-USA Tensions',
                    description: 'Iran threatens to close Hormuz during crises',
                    incidents: ['Tanker attacks 2019', 'Drone strikes', 'IRGC harassment']
                },
                {
                    name: 'Saudi-Iran Rivalry',
                    description: 'Proxy conflicts throughout region',
                    impact: 'Affects oil prices, regional stability'
                },
                {
                    name: 'Qatar Blockade (2017-2021)',
                    description: 'Saudi-UAE-Egypt blockaded Qatar',
                    resolution: 'Ended January 2021'
                }
            ],
            
            navalPresences: [
                { country: 'USA', base: '5th Fleet (Bahrain)', ships: '30+ ships, 20,000 personnel' },
                { country: 'Iran', base: 'Bandar Abbas', assets: 'IRGC Navy, mines, missiles' },
                { country: 'UK', base: 'HMS Jufair (Bahrain)', purpose: 'Gulf operations' },
                { country: 'France', base: 'Abu Dhabi', ships: 'Naval support facility' }
            ]
        },
        
        funFacts: [
            'Contains nearly half of the world\'s proven oil reserves',
            'The Gulf is very shallow - average depth just 50 meters',
            'Water takes 3-5 years to completely exchange with Arabian Sea',
            'Summer temperatures can reach 35°C - warmest sea in world',
            '60% of global desalination capacity is here',
            'The 1991 Gulf War spill was deliberately caused by Iraq - largest ever',
            'Name disputed - Iran says Persian, Arabs say Arabian',
            'Dubai\'s Palm Islands are visible from space'
        ]
    },

    // ═══════════════════════════════════════════════════════
    // 🌊 RED SEA - Biblical Passage, Modern Chokepoint
    // ═══════════════════════════════════════════════════════
    {
        id: 'red-sea',
        name: 'Red Sea',
        alternativeNames: ['Erythraean Sea (Greek)', 'Bahri Eritrea'],
        parentOcean: 'Indian Ocean',
        parentOceanId: 'indian-ocean',
        
        area: 438000,
        avgDepth: 490,
        maxDepth: 3040,
        deepestPoint: { name: 'Central median trench', depth: 3040, coordinates: [20.5, 38] },
        
        coordinates: [20, 38],
        defaultZoom: 5,
        
        image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=500',
        backgroundImage: 'https://images.unsplash.com/photo-1559825481-12a05cc00344?w=1920',
        
        borderingCountries: [
            { name: 'Egypt', coastlineKm: 1200, region: 'Gulf of Suez, Sinai' },
            { name: 'Sudan', coastlineKm: 853, region: 'African coast' },
            { name: 'Eritrea', coastlineKm: 1151, region: 'African coast' },
            { name: 'Djibouti', coastlineKm: 314, region: 'Bab el-Mandeb' },
            { name: 'Saudi Arabia', coastlineKm: 1840, region: 'Arabian coast' },
            { name: 'Yemen', coastlineKm: 440, region: 'Arabian coast, Bab el-Mandeb' },
            { name: 'Jordan', coastlineKm: 26, region: 'Gulf of Aqaba' },
            { name: 'Israel', coastlineKm: 12, region: 'Gulf of Aqaba' }
        ],
        
        straits: [
            {
                name: 'Bab el-Mandeb',
                connectsTo: 'Gulf of Aden',
                width: 26,
                importance: 'Suez Canal gateway',
                statistics: {
                    dailyOil: 6200000,
                    annualShips: 25000,
                    percentGlobalTrade: 12
                }
            },
            {
                name: 'Suez Canal',
                connectsTo: 'Mediterranean',
                length: 193,
                importance: '12-15% of global trade',
                statistics: {
                    annualShips: 19000,
                    annualCargo: '1.2 billion tonnes',
                    annualRevenue: '$9 billion for Egypt'
                }
            }
        ],
        
        tectonicFeatures: {
            plates: ['African Plate', 'Arabian Plate'],
            riftZone: 'Active spreading center - Red Sea is widening 1 cm/year',
            volcanism: 'Submarine volcanoes, hot brine pools',
            futurePrediction: 'Will become an ocean in 10 million years'
        },
        
        marineLife: {
            biodiversityLevel: 'Very High - High endemism',
            coralSpecies: 350,
            fishSpecies: 1200,
            endemicSpecies: '10% found nowhere else',
            keySpecies: ['Dugong', 'Dolphins', 'Sharks', 'Manta Rays', 'Clownfish', 'Napoleon Wrasse'],
            coralReefs: {
                health: 'Relatively healthy - less tourism impact',
                note: 'One of few reefs still thriving'
            }
        },
        
        economicImportance: {
            overview: 'Critical Suez Canal route',
            tradeValue: '$1 trillion annual trade transits',
            
            suezCanal: {
                importance: 'Saves 7,000 km vs Cape route',
                dailyRevenue: '$25 million',
                expansion2015: 'Doubled capacity',
                everGiven2021: '6-day blockage cost $10 billion/day',
                alternatives: 'Cape route adds 2 weeks'
            },
            
            tourism: {
                value: '$5 billion',
                destinations: ['Sharm el-Sheikh', 'Hurghada', 'Aqaba', 'Jeddah'],
                activities: 'Diving, snorkeling - world-class reefs'
            }
        },
        
        geopolitics: {
            strategicImportance: 'Critical - Europe-Asia trade artery',
            
            issues: [
                {
                    name: 'Yemen War/Houthi Attacks',
                    description: 'Houthis attack ships near Bab el-Mandeb',
                    impact: 'Insurance costs, ship rerouting'
                },
                {
                    name: 'Eritrea-Ethiopia',
                    description: 'Port access disputes',
                    impact: 'Regional tensions'
                },
                {
                    name: 'Saudi-Iran Proxy',
                    description: 'Yemen as battleground',
                    impact: 'Mine threats, ship attacks'
                }
            ],
            
            navalBases: [
                { country: 'USA', location: 'Camp Lemonnier (Djibouti)' },
                { country: 'China', location: 'Djibouti (first overseas base)' },
                { country: 'France', location: 'Djibouti' },
                { country: 'Japan', location: 'Djibouti' },
                { country: 'UAE', location: 'Assab (Eritrea)' },
                { country: 'Saudi Arabia', location: 'Near Bab el-Mandeb' }
            ]
        },
        
        funFacts: [
            'Name possibly from seasonal algae blooms that turn water red',
            'One of the saltiest bodies of water (40 ppt vs 35 ppt ocean average)',
            'Contains unique "brine pools" with no oxygen - underwater lakes',
            'The sea is growing 1 cm wider each year due to tectonic spreading',
            'Moses allegedly parted the Red Sea (though scholars debate location)',
            'Coral reefs here are among the healthiest left on Earth',
            'The Ever Given blockage in 2021 showed how critical the route is',
            'Will eventually become a full ocean as Africa and Arabia separate'
        ]
    },

    // ═══════════════════════════════════════════════════════
    // 🌊 NORTH SEA - Europe's Energy Sea
    // ═══════════════════════════════════════════════════════
    {
        id: 'north-sea',
        name: 'North Sea',
        parentOcean: 'Atlantic Ocean',
        parentOceanId: 'atlantic-ocean',
        
        area: 570000,
        avgDepth: 90,
        maxDepth: 700,
        deepestPoint: { name: 'Norwegian Trench', depth: 700, coordinates: [58.5, 4.5] },
        
        coordinates: [56, 3],
        defaultZoom: 5,
        
        image: 'https://images.unsplash.com/photo-1515890435782-59a5bb6ec191?w=500',
        backgroundImage: 'https://images.unsplash.com/photo-1516690553959-71a414d6b9b6?w=1920',
        
        borderingCountries: [
            { name: 'United Kingdom', coastlineKm: 2000, sector: 'UK Continental Shelf' },
            { name: 'Norway', coastlineKm: 2500, sector: 'Norwegian Continental Shelf' },
            { name: 'Denmark', coastlineKm: 700, sector: 'Danish sector' },
            { name: 'Germany', coastlineKm: 450, sector: 'German sector' },
            { name: 'Netherlands', coastlineKm: 450, sector: 'Dutch sector' },
            { name: 'Belgium', coastlineKm: 65, sector: 'Belgian sector' },
            { name: 'France', coastlineKm: 200, sector: 'Small sector' }
        ],
        
        straits: [
            { name: 'English Channel', connectsTo: 'Atlantic', width: 33, annualShips: 500 },
            { name: 'Skagerrak', connectsTo: 'Baltic via Kattegat', width: 110 },
            { name: 'Dover Strait', connectsTo: 'Atlantic', width: 33, note: 'Busiest shipping lane' }
        ],
        
        oilAndGas: {
            discovered: 1966,
            peakProduction: 2000,
            currentStatus: 'Mature basin, declining production',
            ukProduction: '1 million barrels/day (down from 4.5 million peak)',
            norwayProduction: '2 million barrels/day',
            majorFields: ['Brent', 'Forties', 'Ekofisk', 'Statfjord', 'Gullfaks'],
            platforms: '500+ installations',
            decommissioning: 'Major industry - removing old platforms'
        },
        
        renewableEnergy: {
            offshoreWind: 'Largest offshore wind resource in Europe',
            installedCapacity: '30+ GW and growing',
            majorProjects: ['Dogger Bank (UK)', 'Hornsea (UK)', 'Borssele (NL)'],
            futureTarget: '100+ GW by 2030'
        },
        
        economicImportance: {
            overview: 'Europe\'s busiest sea - energy, shipping, fishing',
            
            shipping: {
                annualShips: 250000,
                majorPorts: ['Rotterdam (#1 Europe)', 'Antwerp (#2)', 'Hamburg (#3)', 'London'],
                trade: '$2 trillion annual cargo value'
            },
            
            fishing: {
                annualCatch: '2.5 million tonnes',
                keySpecies: ['Herring', 'Cod', 'Haddock', 'Mackerel', 'Plaice'],
                status: 'Heavily regulated, many stocks recovering'
            },
            
            underseaCables: [
                { name: 'North Sea Link', connects: 'UK-Norway', capacity: '1.4 GW electricity' },
                { name: 'Viking Link', connects: 'UK-Denmark', capacity: '1.4 GW' },
                { name: 'NorNed', connects: 'Netherlands-Norway', capacity: '700 MW' }
            ]
        },
        
        environmentalIssues: {
            overfishing: 'Historic collapse of cod stocks, now recovering',
            pollution: 'Oil spills, chemical dumping (historic)',
            plastics: 'Microplastic accumulation',
            windFarms: 'Debate over impact on birds, marine life'
        },
        
        geopolitics: {
            strategicImportance: 'High - European energy security',
            
            issues: [
                {
                    name: 'Brexit Fishing',
                    description: 'UK-EU disputes over fishing rights',
                    status: 'Ongoing negotiations'
                },
                {
                    name: 'Energy Transition',
                    description: 'Shift from oil/gas to wind',
                    impact: 'Jobs, infrastructure changes'
                },
                {
                    name: 'Nord Stream Sabotage',
                    description: 'Pipelines attacked 2022',
                    impact: 'Energy security concerns'
                },
                {
                    name: 'Russian Submarines',
                    description: 'Monitoring undersea infrastructure',
                    response: 'Increased NATO patrols'
                }
            ]
        },
        
        funFacts: [
            'Home to the busiest shipping lanes in the world',
            'The Dogger Bank was land during last Ice Age - hunters lived there',
            'Contains more offshore wind capacity than rest of world combined',
            'Viking ships crossed it 1000+ years ago',
            'The UK\'s first commercial oil was from North Sea (1975)',
            '"Brent Crude" - the global oil benchmark - named after North Sea field',
            'Contains wrecks from both World Wars',
            'During storms, waves can reach 15-20 meters'
        ]
    }
);

// ═══════════════════════════════════════════════════════════
// 🌍 GLOBAL TRADE ROUTES DATABASE
// ═══════════════════════════════════════════════════════════

const globalTradeRoutes = [
    // ═══════════════════════════════════════════════════════
    // ASIA-EUROPE ROUTES
    // ═══════════════════════════════════════════════════════
    {
        id: 'asia-europe-suez',
        name: 'Asia-Europe via Suez Canal',
        type: 'container',
        importance: 'Primary',
        
        route: {
            origin: { region: 'East Asia', majorPorts: ['Shanghai', 'Shenzhen', 'Busan', 'Singapore'] },
            destination: { region: 'Europe', majorPorts: ['Rotterdam', 'Antwerp', 'Hamburg', 'Felixstowe'] },
            distance: 21000,
            transitTime: '30-35 days',
            
            path: [
                { lat: 31.2, lng: 121.5, name: 'Shanghai' },
                { lat: 22.3, lng: 114.2, name: 'Hong Kong' },
                { lat: 1.3, lng: 103.8, name: 'Singapore' },
                { lat: 6, lng: 80, name: 'Sri Lanka' },
                { lat: 12, lng: 45, name: 'Gulf of Aden' },
                { lat: 15, lng: 42, name: 'Red Sea' },
                { lat: 30, lng: 32, name: 'Suez Canal' },
                { lat: 35, lng: 15, name: 'Mediterranean' },
                { lat: 36, lng: -5, name: 'Gibraltar' },
                { lat: 52, lng: 4, name: 'Rotterdam' }
            ]
        },
        
        statistics: {
            annualVolume: '25 million TEU',
            annualValue: '$1.5 trillion',
            percentGlobalTrade: 15,
            vesselSize: '20,000+ TEU mega-ships',
            frequency: '100+ sailings per week'
        },
        
        chokepoints: [
            { name: 'Strait of Malacca', risk: 'Congestion, piracy (reduced)', alternatives: 'Lombok, Sunda' },
            { name: 'Bab el-Mandeb', risk: 'Houthi attacks, piracy', alternatives: 'Cape of Good Hope' },
            { name: 'Suez Canal', risk: 'Blockage (Ever Given 2021)', alternatives: 'Cape adds 7,000 km' }
        ],
        
        majorGoods: ['Electronics', 'Machinery', 'Automobiles', 'Textiles', 'Consumer goods'],
        
        geopoliticalRisks: [
            'Red Sea security (Yemen conflict)',
            'Suez Canal disruption',
            'South China Sea tensions',
            'US-China trade war impacts'
        ],
        
        countryDependence: [
            { country: 'China', role: 'Origin - 70% of Asian exports' },
            { country: 'Germany', role: 'Destination - largest European importer' },
            { country: 'UK', role: 'Major destination, Brexit impacts' },
            { country: 'Netherlands', role: 'Gateway - Rotterdam hub' }
        ]
    },

    {
        id: 'asia-europe-cape',
        name: 'Asia-Europe via Cape of Good Hope',
        type: 'container-bulk',
        importance: 'Alternative',
        
        route: {
            origin: { region: 'East Asia' },
            destination: { region: 'Europe' },
            distance: 28000,
            transitTime: '42-50 days',
            
            path: [
                { lat: 31.2, lng: 121.5, name: 'Shanghai' },
                { lat: 1.3, lng: 103.8, name: 'Singapore' },
                { lat: -6, lng: 106, name: 'Jakarta' },
                { lat: -20, lng: 60, name: 'Indian Ocean' },
                { lat: -35, lng: 20, name: 'Cape of Good Hope' },
                { lat: 0, lng: -10, name: 'West Africa' },
                { lat: 36, lng: -5, name: 'Gibraltar' },
                { lat: 52, lng: 4, name: 'Rotterdam' }
            ]
        },
        
        statistics: {
            addedDistance: '7,000 km vs Suez',
            addedTime: '10-14 days',
            addedCost: '$300,000-500,000 per voyage'
        },
        
        whenUsed: [
            'Suez Canal closed/blocked',
            'Security threats in Red Sea',
            'Very large ships that can\'t transit Suez',
            'Commodity shipments from South Africa/Australia'
        ]
    },

    // ═══════════════════════════════════════════════════════
    // TRANS-PACIFIC ROUTES
    // ═══════════════════════════════════════════════════════
    {
        id: 'asia-north-america-pacific',
        name: 'Trans-Pacific: Asia to North America West Coast',
        type: 'container',
        importance: 'Primary',
        
        route: {
            origin: { region: 'East Asia', majorPorts: ['Shanghai', 'Shenzhen', 'Busan', 'Kaohsiung'] },
            destination: { region: 'North America West', majorPorts: ['Los Angeles', 'Long Beach', 'Seattle', 'Vancouver'] },
            distance: 11000,
            transitTime: '14-18 days',
            
            path: [
                { lat: 31.2, lng: 121.5, name: 'Shanghai' },
                { lat: 35, lng: 129, name: 'Busan' },
                { lat: 40, lng: 150, name: 'North Pacific' },
                { lat: 45, lng: -175, name: 'Mid-Pacific' },
                { lat: 48, lng: -125, name: 'Pacific Northwest' },
                { lat: 34, lng: -118, name: 'Los Angeles' }
            ]
        },
        
        statistics: {
            annualVolume: '28 million TEU',
            annualValue: '$1.2 trillion',
            percentUSImports: 60,
            vesselSize: '10,000-15,000 TEU'
        },
        
        majorGoods: ['Electronics', 'Furniture', 'Toys', 'Clothing', 'Automotive parts'],
        
        countryDependence: [
            { country: 'USA', dependency: 'Critical - most consumer goods from Asia' },
            { country: 'China', dependency: 'Critical - largest export market' },
            { country: 'Japan', dependency: 'High - automotive exports' },
            { country: 'South Korea', dependency: 'High - electronics, ships' }
        ],
        
        challenges: [
            'Port congestion (2021-2022 crisis)',
            'US-China trade tensions',
            'Labor disputes at US ports',
            'Growing to East Coast via Panama'
        ]
    },

    {
        id: 'asia-north-america-panama',
        name: 'Asia to US East Coast via Panama Canal',
        type: 'container',
        importance: 'Growing',
        
        route: {
            origin: { region: 'East Asia' },
            destination: { region: 'US East Coast', majorPorts: ['New York', 'Savannah', 'Charleston', 'Houston'] },
            distance: 20000,
            transitTime: '28-35 days',
            
            path: [
                { lat: 31.2, lng: 121.5, name: 'Shanghai' },
                { lat: 22.3, lng: 114.2, name: 'Hong Kong' },
                { lat: 10, lng: 130, name: 'Philippine Sea' },
                { lat: 0, lng: 180, name: 'Central Pacific' },
                { lat: 9, lng: -79.5, name: 'Panama Canal' },
                { lat: 15, lng: -75, name: 'Caribbean' },
                { lat: 30, lng: -80, name: 'US East Coast' },
                { lat: 40.7, lng: -74, name: 'New York' }
            ]
        },
        
        statistics: {
            annualVolume: '5 million TEU',
            growth: '10% annually',
            panamaExpansion: '2016 expansion allows bigger ships'
        },
        
        advantages: [
            'Direct to East Coast consumers',
            'Avoids West Coast congestion',
            'Serves Gulf ports',
            'Expanded Panama allows 14,000 TEU ships'
        ]
    },

    // ═══════════════════════════════════════════════════════
    // MIDDLE EAST OIL ROUTES
    // ═══════════════════════════════════════════════════════
    {
        id: 'persian-gulf-asia',
        name: 'Persian Gulf to Asia Oil Route',
        type: 'oil',
        importance: 'Critical',
        
        route: {
            origin: { region: 'Persian Gulf', majorPorts: ['Ras Tanura', 'Kharg Island', 'Mina Al Ahmadi'] },
            destination: { region: 'Asia', majorPorts: ['China', 'Japan', 'South Korea', 'India'] },
            distance: 6500,
            transitTime: '20-25 days',
            
            path: [
                { lat: 26.5, lng: 50, name: 'Persian Gulf' },
                { lat: 26, lng: 56.5, name: 'Strait of Hormuz' },
                { lat: 22, lng: 62, name: 'Gulf of Oman' },
                { lat: 15, lng: 65, name: 'Arabian Sea' },
                { lat: 8, lng: 77, name: 'Indian Ocean' },
                { lat: 1.3, lng: 103.8, name: 'Strait of Malacca' },
                { lat: 12, lng: 113, name: 'South China Sea' },
                { lat: 31.2, lng: 121.5, name: 'China' }
            ]
        },
        
        statistics: {
            dailyBarrels: 18000000,
            annualValue: '$350 billion',
            percentAsianOilImports: 75,
            tankerTypes: ['VLCC', 'ULCC - 300,000+ DWT']
        },
        
        chokepoints: [
            {
                name: 'Strait of Hormuz',
                dailyFlow: '21 million barrels',
                risk: 'Iran tensions, closure threats',
                width: '54 km (navigable 10 km)'
            },
            {
                name: 'Strait of Malacca',
                dailyFlow: '16 million barrels',
                risk: 'Congestion, piracy (reduced)',
                alternatives: 'Lombok Strait (longer)'
            }
        ],
        
        countryDependence: [
            { country: 'China', dependency: '70% of oil imports via this route' },
            { country: 'Japan', dependency: '85% of oil imports' },
            { country: 'South Korea', dependency: '75% of oil imports' },
            { country: 'India', dependency: '60% of oil imports' }
        ],
        
        geopoliticalRisks: [
            'Iran-US tensions could close Hormuz',
            'Houthi attacks on tankers',
            'China-US competition for route security',
            'Single point of failure for Asian economies'
        ]
    },

    {
        id: 'persian-gulf-europe',
        name: 'Persian Gulf to Europe via Suez',
        type: 'oil-lng',
        importance: 'Primary',
        
        route: {
            origin: { region: 'Persian Gulf' },
            destination: { region: 'Europe' },
            distance: 11000,
            transitTime: '22-28 days',
            
            path: [
                { lat: 26.5, lng: 50, name: 'Persian Gulf' },
                { lat: 26, lng: 56.5, name: 'Strait of Hormuz' },
                { lat: 12.5, lng: 43.5, name: 'Bab el-Mandeb' },
                { lat: 20, lng: 38, name: 'Red Sea' },
                { lat: 30, lng: 32, name: 'Suez Canal' },
                { lat: 38, lng: 10, name: 'Mediterranean' },
                { lat: 36, lng: -5, name: 'Gibraltar' },
                { lat: 52, lng: 4, name: 'Rotterdam' }
            ]
        },
        
        statistics: {
            dailyBarrels: 3000000,
            dailyLNG: '50 million cubic meters',
            annualValue: '$100 billion'
        },
        
        alternatives: [
            'Cape of Good Hope (adds 6,000 km)',
            'Pipelines through Turkey (limited)',
            'Russia alternatives (geopolitical issues)'
        ]
    },

    // ═══════════════════════════════════════════════════════
    // TRANSATLANTIC ROUTES
    // ═══════════════════════════════════════════════════════
    {
        id: 'transatlantic-north',
        name: 'Transatlantic: Europe to North America',
        type: 'container',
        importance: 'Primary',
        
        route: {
            origin: { region: 'Europe', majorPorts: ['Rotterdam', 'Antwerp', 'Hamburg', 'Southampton'] },
            destination: { region: 'North America', majorPorts: ['New York', 'Savannah', 'Norfolk'] },
            distance: 6000,
            transitTime: '10-14 days',
            
            path: [
                { lat: 52, lng: 4, name: 'Rotterdam' },
                { lat: 51, lng: -1, name: 'English Channel' },
                { lat: 49, lng: -10, name: 'Celtic Sea' },
                { lat: 45, lng: -35, name: 'North Atlantic' },
                { lat: 40.7, lng: -74, name: 'New York' }
            ]
        },
        
        statistics: {
            annualVolume: '8 million TEU',
            annualValue: '$800 billion',
            twoWayTrade: 'Most balanced major route'
        },
        
        majorGoods: {
            eastbound: ['Machinery', 'Vehicles', 'Pharmaceuticals', 'Chemicals'],
            westbound: ['Aircraft parts', 'Machinery', 'Agricultural products', 'Chemicals']
        },
        
        countryDependence: [
            { country: 'USA', tradingPartner: 'EU is #1 trading partner' },
            { country: 'Germany', tradingPartner: 'USA is largest non-EU market' },
            { country: 'UK', tradingPartner: 'Historic ties, post-Brexit changes' }
        ]
    },

    // ═══════════════════════════════════════════════════════
    // COMMODITY ROUTES
    // ═══════════════════════════════════════════════════════
    {
        id: 'australia-asia-iron',
        name: 'Australia to Asia Iron Ore & Coal',
        type: 'bulk-commodity',
        importance: 'Critical',
        
        route: {
            origin: { region: 'Australia', majorPorts: ['Port Hedland', 'Newcastle', 'Dampier'] },
            destination: { region: 'East Asia', majorPorts: ['China', 'Japan', 'South Korea'] },
            distance: 6000,
            transitTime: '12-15 days',
            
            path: [
                { lat: -20, lng: 118.5, name: 'Port Hedland' },
                { lat: -10, lng: 120, name: 'Timor Sea' },
                { lat: 0, lng: 120, name: 'Celebes Sea' },
                { lat: 12, lng: 113, name: 'South China Sea' },
                { lat: 30, lng: 122, name: 'China' }
            ]
        },
        
        statistics: {
            annualIronOre: '900 million tonnes',
            annualCoal: '200 million tonnes',
            annualValue: '$100 billion',
            percentChinaIronOre: 60
        },
        
        geopoliticalRisks: [
            'Australia-China tensions (2020-present)',
            'China seeking alternative suppliers',
            'Critical for Chinese steel industry'
        ]
    },

    {
        id: 'brazil-china-agriculture',
        name: 'Brazil to China Agricultural Route',
        type: 'bulk-commodity',
        importance: 'Critical',
        
        route: {
            origin: { region: 'Brazil', majorPorts: ['Santos', 'Paranaguá'] },
            destination: { region: 'China' },
            distance: 20000,
            transitTime: '40-50 days',
            
            path: [
                { lat: -24, lng: -46.3, name: 'Santos' },
                { lat: -30, lng: -30, name: 'South Atlantic' },
                { lat: -35, lng: 20, name: 'Cape of Good Hope' },
                { lat: -20, lng: 60, name: 'Indian Ocean' },
                { lat: 1.3, lng: 103.8, name: 'Malacca' },
                { lat: 31.2, lng: 121.5, name: 'China' }
            ]
        },
        
        statistics: {
            annualSoybeans: '80 million tonnes',
            annualIronOre: '350 million tonnes',
            annualValue: '$50 billion',
            percentChinaSoyImports: 60
        },
        
        significance: [
            'China is Brazil\'s largest trading partner',
            'Soybeans for animal feed (pork industry)',
            'Iron ore for steel production',
            'US-China trade war increased Brazil exports'
        ]
    },

    // ═══════════════════════════════════════════════════════
    // LNG ROUTES
    // ═══════════════════════════════════════════════════════
    {
        id: 'qatar-asia-lng',
        name: 'Qatar to Asia LNG Route',
        type: 'lng',
        importance: 'Critical',
        
        route: {
            origin: { region: 'Qatar', majorPorts: ['Ras Laffan'] },
            destination: { region: 'Asia', majorPorts: ['Japan', 'South Korea', 'China', 'India'] },
            distance: 8000,
            transitTime: '18-25 days'
        },
        
        statistics: {
            annualLNG: '80 million tonnes',
            percentGlobalLNG: 25,
            destination: '70% to Asia'
        },
        
        significance: [
            'Qatar is world\'s largest LNG exporter',
            'North Field is world\'s largest gas field',
            'Japan depends on LNG for 30% of energy',
            'Growing demand from China, India'
        ]
    },

    {
        id: 'us-europe-lng',
        name: 'US to Europe LNG Route',
        type: 'lng',
        importance: 'Growing (post-Russia)',
        
        route: {
            origin: { region: 'US Gulf', majorPorts: ['Sabine Pass', 'Cameron', 'Freeport'] },
            destination: { region: 'Europe', majorPorts: ['UK', 'Netherlands', 'Spain'] },
            distance: 8000,
            transitTime: '12-15 days'
        },
        
        statistics: {
            annualLNG: '70 million tonnes (2023, growing)',
            growthRate: '50% since Russia invasion of Ukraine',
            annualValue: '$50 billion'
        },
        
        significance: [
            'Replaces Russian pipeline gas',
            'Transformed US from importer to major exporter',
            'Europe building import terminals rapidly',
            'Geopolitical tool - reduces Russia leverage'
        ]
    }
];

// ═══════════════════════════════════════════════════════════
// 🗺️ CHOKEPOINTS DATABASE
// ═══════════════════════════════════════════════════════════

const globalChokepoints = [
    {
        id: 'strait-of-hormuz',
        name: 'Strait of Hormuz',
        location: { lat: 26.5, lng: 56.5 },
        connects: ['Persian Gulf', 'Gulf of Oman'],
        width: 54,
        navigableWidth: 10,
        depth: 60,
        
        traffic: {
            dailyOilBarrels: 21000000,
            dailyLNGCubicMeters: 4000000,
            annualShips: 17000,
            percentWorldOil: 21,
            percentWorldLNG: 35
        },
        
        controllingCountries: ['Iran', 'Oman', 'UAE'],
        
        risks: [
            'Iran threats to close during tensions',
            'Tanker attacks (2019)',
            'Mines',
            'Drone/missile attacks'
        ],
        
        alternatives: {
            pipelines: ['IPSA pipeline (Saudi, limited)', 'Abu Dhabi-Fujairah'],
            impact: 'Only 25% can bypass via pipeline'
        },
        
        navalPresence: [
            { country: 'USA', assets: '5th Fleet, carrier groups' },
            { country: 'Iran', assets: 'IRGC Navy, missiles, drones' },
            { country: 'UK', assets: 'Royal Navy patrols' },
            { country: 'France', assets: 'Naval presence' }
        ],
        
        closureImpact: 'Oil prices would likely triple; global recession'
    },

    {
        id: 'strait-of-malacca',
        name: 'Strait of Malacca',
        location: { lat: 2.5, lng: 101 },
        connects: ['Indian Ocean', 'South China Sea'],
        length: 800,
        width: 65,
        narrowestPoint: 2.8,
        depth: 25,
        
        traffic: {
            dailyOilBarrels: 16000000,
            annualShips: 94000,
            annualCargo: '3 billion tonnes',
            percentGlobalTrade: 25
        },
        
        controllingCountries: ['Malaysia', 'Indonesia', 'Singapore'],
        
        risks: [
            'Piracy (reduced since 2000s)',
            'Congestion',
            'Groundings in shallow areas',
            'Accidents block narrow strait'
        ],
        
        alternatives: {
            routes: ['Lombok Strait (+1.5 days)', 'Sunda Strait'],
            projects: ['Kra Canal proposal (Thailand) - never built']
        },
        
        significance: [
            'Busiest strait in the world',
            'Critical for China energy security',
            'Japan, Korea oil lifeline',
            'Singapore prosperity depends on it'
        ],
        
        closureImpact: 'Asian economies would be devastated; oil prices spike 50%+'
    },

    {
        id: 'suez-canal',
        name: 'Suez Canal',
        location: { lat: 30, lng: 32 },
        connects: ['Mediterranean Sea', 'Red Sea'],
        length: 193,
        width: 0.3,
        depth: 24,
        
        traffic: {
            annualShips: 19000,
            annualCargo: '1.2 billion tonnes',
            percentGlobalTrade: 12,
            annualRevenue: '$9 billion'
        },
        
        controllingCountry: 'Egypt',
        
        history: [
            { year: 1869, event: 'Canal opened' },
            { year: 1956, event: 'Suez Crisis - nationalization' },
            { year: 1967, event: 'Closed during Six-Day War' },
            { year: 1975, event: 'Reopened after 8 years' },
            { year: 2015, event: 'Expansion completed' },
            { year: 2021, event: 'Ever Given blockage - 6 days' }
        ],
        
        everGivenIncident: {
            date: 'March 23-29, 2021',
            duration: '6 days',
            shipsDelayed: 422,
            estimatedCost: '$10 billion/day global trade',
            cause: 'Wind, human error'
        },
        
        alternatives: {
            capeRoute: 'Adds 7,000 km, 10-14 days',
            arcticRoute: 'Seasonal, emerging'
        },
        
        closureImpact: 'Europe-Asia trade disrupted; oil prices rise; supply chains disrupted'
    },

    {
        id: 'bab-el-mandeb',
        name: 'Bab el-Mandeb',
        location: { lat: 12.5, lng: 43.5 },
        connects: ['Red Sea', 'Gulf of Aden'],
        width: 26,
        depth: 100,
        
        traffic: {
            dailyOilBarrels: 6200000,
            annualShips: 25000,
            percentGlobalTrade: 12
        },
        
        controllingCountries: ['Yemen', 'Djibouti', 'Eritrea'],
        
        risks: [
            'Yemen civil war',
            'Houthi missile/drone attacks',
            'Piracy from Somalia',
            'Terrorism'
        ],
        
        navalPresence: [
            { country: 'USA', base: 'Camp Lemonnier, Djibouti' },
            { country: 'China', base: 'Djibouti' },
            { country: 'France', base: 'Djibouti' },
            { country: 'Japan', base: 'Djibouti' },
            { country: 'Saudi Arabia', base: 'Yemen operations' },
            { country: 'UAE', base: 'Assab, Eritrea' }
        ],
        
        closureImpact: 'Suez Canal becomes useless; Cape route required'
    },

    {
        id: 'panama-canal',
        name: 'Panama Canal',
        location: { lat: 9, lng: -79.5 },
        connects: ['Atlantic Ocean (Caribbean)', 'Pacific Ocean'],
        length: 82,
        
        traffic: {
            annualShips: 14000,
            annualCargo: '475 million tonnes',
            percentGlobalTrade: 5,
            annualRevenue: '$4 billion'
        },
        
        controllingCountry: 'Panama',
        
        history: [
            { year: 1914, event: 'Canal opened' },
            { year: 1999, event: 'US handed over to Panama' },
            { year: 2016, event: 'Expansion completed - allows bigger ships' }
        ],
        
        expansion: {
            newLocks: 'Agua Clara, Cocolí',
            newCapacity: '14,000 TEU ships (was 5,000)',
            cost: '$5.25 billion'
        },
        
        alternatives: {
            capeHorn: 'Adds 8,000 km',
            nicaraguaCanal: 'Proposed by China, stalled'
        },
        
        issues: [
            'Drought affecting water levels (2023)',
            'Capacity constraints',
            'Climate change reducing water'
        ],
        
        closureImpact: 'US East Coast-Asia trade disrupted; shipping costs spike'
    },

    {
        id: 'turkish-straits',
        name: 'Turkish Straits (Bosphorus & Dardanelles)',
        location: { lat: 41, lng: 29 },
        connects: ['Black Sea', 'Mediterranean'],
        
        bosphorus: { length: 31, width: 0.7, depth: 36 },
        dardanelles: { length: 61, width: 1.2, depth: 55 },
        
        traffic: {
            annualShips: 45000,
            annualOilTankers: 10000,
            dailyOilBarrels: 3000000
        },
        
        controllingCountry: 'Turkey',
        
        regulations: {
            montreuxConvention: '1936 - Governs passage',
            warshipRestrictions: 'Limited for non-Black Sea states',
            turkeyControl: 'Can close in wartime'
        },
        
        risks: [
            'Congestion in narrow Bosphorus',
            'Tanker accidents in Istanbul',
            'Russia-Ukraine war impacts'
        ],
        
        geopolitics: [
            'Russia\'s only warm-water naval access',
            'Turkey controls Russia\'s Mediterranean access',
            'Critical for Ukraine grain exports',
            'NATO-Russia tensions'
        ],
        
        closureImpact: 'Russia naval forces trapped; grain exports blocked; energy disrupted'
    },

    {
        id: 'dover-strait',
        name: 'Strait of Dover / English Channel',
        location: { lat: 51, lng: 1.5 },
        connects: ['North Sea', 'Atlantic'],
        width: 33,
        depth: 45,
        
        traffic: {
            annualShips: 500,
            dailyShips: 500,
            dailyFerries: 120
        },
        
        significance: [
            'Busiest shipping lane in the world by vessel count',
            'Connects North Sea ports to Atlantic',
            'Channel Tunnel runs underneath',
            'UK-France ferry route'
        ],
        
        controllingCountries: ['UK', 'France'],
        
        risks: [
            'Congestion',
            'Collisions',
            'Migrant crossings',
            'Brexit delays at ports'
        ]
    },

    {
        id: 'strait-of-gibraltar',
        name: 'Strait of Gibraltar',
        location: { lat: 36, lng: -5.5 },
        connects: ['Mediterranean', 'Atlantic'],
        width: 14,
        depth: 900,
        
        traffic: {
            annualShips: 100000,
            dailyShips: 300
        },
        
        controllingEntities: ['Spain', 'UK (Gibraltar)', 'Morocco'],
        
        significance: [
            'Only natural Mediterranean exit',
            'Mediterranean fleet access',
            'NATO strategic point',
            'UK controls Gibraltar'
        ],
        
        geopolitics: [
            'UK-Spain Gibraltar dispute',
            'Strategic for Mediterranean navies',
            'Migration route from Africa'
        ]
    }
];
/* ═══════════════════════════════════════════════════════════
   🌊 SEAS EXPLORER - COMPLETE SEAS DATABASE
   Part 4 of 4 - Additional Seas + Helper Functions
   ═══════════════════════════════════════════════════════════ */

// Add more seas...
seasData.push(
    // ═══════════════════════════════════════════════════════
    // 🌊 BAY OF BENGAL
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
        
        borderingCountries: [
            { name: 'India', coastlineKm: 2000 },
            { name: 'Bangladesh', coastlineKm: 580 },
            { name: 'Myanmar', coastlineKm: 2000 },
            { name: 'Sri Lanka', coastlineKm: 1340 },
            { name: 'Thailand', coastlineKm: 200 }
        ],
        
        keyFeatures: [
            'Receives water from Ganges, Brahmaputra rivers',
            'Cyclone-prone - devastating storms',
            'Major fishing grounds',
            'Sundarbans mangrove forest'
        ],
        
        economicImportance: {
            fishing: { annualCatch: '2 million tonnes', keySpecies: ['Hilsa', 'Shrimp', 'Tuna'] },
            shipping: { majorPorts: ['Chennai', 'Kolkata', 'Chittagong', 'Visakhapatnam'] }
        },
        
        geopolitics: {
            issues: [
                'China presence (String of Pearls)',
                'India dominant regional power',
                'Bangladesh-Myanmar maritime boundary',
                'Rohingya refugee crisis'
            ]
        }
    },

    // ═══════════════════════════════════════════════════════
    // 🌊 EAST CHINA SEA
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
        
        borderingCountries: [
            { name: 'China', coastlineKm: 3000 },
            { name: 'Japan', coastlineKm: 1000 },
            { name: 'South Korea', coastlineKm: 500 },
            { name: 'Taiwan', coastlineKm: 400 }
        ],
        
        disputes: [
            {
                name: 'Senkaku/Diaoyu Islands',
                claimants: ['Japan (controls)', 'China', 'Taiwan'],
                importance: 'Oil/gas reserves, fishing, nationalism',
                tensions: 'Regular Chinese incursions'
            }
        ],
        
        economicImportance: {
            oilGas: 'Potential large reserves in disputed areas',
            fishing: 'Major fishing grounds',
            shipping: 'Connects to South China Sea'
        },
        
        geopolitics: {
            strategicImportance: 'Very High',
            issues: [
                'Senkaku/Diaoyu dispute',
                'China ADIZ (Air Defense Identification Zone)',
                'Japan-China naval standoffs',
                'US-Japan alliance flashpoint'
            ]
        }
    },

    // ═══════════════════════════════════════════════════════
    // 🌊 SEA OF JAPAN (East Sea)
    // ═══════════════════════════════════════════════════════
    {
        id: 'sea-of-japan',
        name: 'Sea of Japan',
        alternativeNames: ['East Sea (Korean name)'],
        parentOcean: 'Pacific Ocean',
        parentOceanId: 'pacific-ocean',
        
        area: 978000,
        avgDepth: 1753,
        maxDepth: 3742,
        coordinates: [40, 135],
        
        borderingCountries: [
            { name: 'Japan', coastlineKm: 4000 },
            { name: 'Russia', coastlineKm: 1500 },
            { name: 'South Korea', coastlineKm: 1500 },
            { name: 'North Korea', coastlineKm: 800 }
        ],
        
        economicImportance: {
            fishing: { keySpecies: ['Salmon', 'Pollock', 'Squid', 'Crab'] },
            shipping: { routes: 'Japan-Russia-Korea' }
        },
        
        geopolitics: {
            issues: [
                'Name dispute (Japan vs East Sea)',
                'Liancourt Rocks (Dokdo/Takeshima) dispute',
                'North Korean missile tests land here',
                'Russia-Japan territorial disputes'
            ]
        }
    },

    // ═══════════════════════════════════════════════════════
    // 🌊 BLACK SEA
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
        
        borderingCountries: [
            { name: 'Turkey', coastlineKm: 1400 },
            { name: 'Bulgaria', coastlineKm: 378 },
            { name: 'Romania', coastlineKm: 245 },
            { name: 'Ukraine', coastlineKm: 1600 },
            { name: 'Russia', coastlineKm: 800 },
            { name: 'Georgia', coastlineKm: 310 }
        ],
        
        uniqueFeatures: [
            'Largest meromictic basin (layers don\'t mix)',
            'Anoxic below 150m (no oxygen)',
            'Ancient shipwrecks perfectly preserved',
            'Receives Danube, Dnieper, Don rivers'
        ],
        
        economicImportance: {
            grainExports: { countries: ['Ukraine', 'Russia'], importance: 'World breadbasket' },
            oilTransit: 'Russian/Kazakh oil exports',
            fishing: 'Heavily overfished, stocks collapsed'
        },
        
        geopolitics: {
            strategicImportance: 'Critical - especially since 2022',
            issues: [
                {
                    name: 'Russia-Ukraine War',
                    impact: 'Ukraine blockaded, grain deal, naval warfare',
                    since: '2022'
                },
                {
                    name: 'Crimea',
                    status: 'Annexed by Russia 2014, international condemnation',
                    impact: 'Controls northern Black Sea'
                },
                {
                    name: 'NATO Expansion',
                    status: 'Bulgaria, Romania in NATO; Georgia, Ukraine seeking'
                },
                {
                    name: 'Turkish Straits',
                    status: 'Only exit; Turkey controls under Montreux Convention'
                }
            ],
            navalPresences: [
                { country: 'Russia', base: 'Sevastopol (Crimea)', fleet: 'Black Sea Fleet' },
                { country: 'Turkey', base: 'Multiple', fleet: 'Largest non-Russian' },
                { country: 'NATO', ships: 'Limited by Montreux Convention' }
            ]
        }
    },

    // ═══════════════════════════════════════════════════════
    // 🌊 BALTIC SEA
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
        
        uniqueFeatures: [
            'One of largest brackish water bodies',
            'Very low salinity (8-15 ppt vs 35 ocean)',
            'Freezes partially in winter',
            'Youngest sea - formed 10,000 years ago'
        ],
        
        economicImportance: {
            shipping: { majorPorts: ['St. Petersburg', 'Gdansk', 'Gothenburg', 'Helsinki'] },
            fishing: { keySpecies: ['Herring', 'Cod', 'Salmon'] },
            pipelines: [
                { name: 'Nord Stream 1 & 2', status: 'Sabotaged 2022' },
                { name: 'Baltic Pipe', status: 'Norway-Poland operational' }
            ]
        },
        
        environmentalIssues: [
            'Most polluted sea in world',
            'Massive dead zones',
            'WWII munitions dumped',
            'Agricultural runoff'
        ],
        
        geopolitics: {
            strategicImportance: 'High - Increased since 2022',
            issues: [
                {
                    name: 'NATO Expansion',
                    status: 'Finland, Sweden joined 2023-2024, now NATO lake',
                    impact: 'Russia isolated to St. Petersburg, Kaliningrad'
                },
                {
                    name: 'Nord Stream Sabotage',
                    date: 'September 2022',
                    impact: 'Russian gas to Europe cut'
                },
                {
                    name: 'Kaliningrad',
                    status: 'Russian exclave, surrounded by NATO',
                    importance: 'Nuclear-capable missiles'
                }
            ]
        }
    },

    /* ═══════════════════════════════════════════════════════════
   🌊 SEAS EXPLORER - COMPLETE SEAS DATABASE
   Part 4 of 4 - Remaining Seas + Helper Functions (COMPLETED)
   ═══════════════════════════════════════════════════════════ */

// Continue Coral Sea...
    {
        id: 'coral-sea',
        name: 'Coral Sea',
        parentOcean: 'Pacific Ocean',
        parentOceanId: 'pacific-ocean',
        
        area: 4791000,
        avgDepth: 2394,
        maxDepth: 9140,
        coordinates: [-18, 152],
        
        borderingCountries: [
            { name: 'Australia', coastlineKm: 2000, feature: 'Great Barrier Reef' },
            { name: 'Papua New Guinea', coastlineKm: 500 },
            { name: 'New Caledonia', coastlineKm: 1000, country: 'France' },
            { name: 'Vanuatu', coastlineKm: 500 },
            { name: 'Solomon Islands', coastlineKm: 300 }
        ],
        
        keyFeatures: [
            'Contains Great Barrier Reef - largest living structure on Earth',
            'World War II Battle of Coral Sea (1942)',
            'High biodiversity',
            'Coral Sea Islands Territory (Australia)'
        ],
        
        marineLife: {
            greatBarrierReef: {
                area: 344400,
                coralSpecies: 400,
                fishSpecies: 1500,
                status: 'World Heritage Site, threatened by bleaching'
            }
        },
        
        environmentalIssues: [
            'Coral bleaching events (2016, 2017, 2020, 2022)',
            '50% of Great Barrier Reef coral lost since 1990s',
            'Crown-of-thorns starfish outbreaks',
            'Climate change main threat'
        ]
    },

    // ═══════════════════════════════════════════════════════
    // 🌊 BERING SEA
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
        
        borderingCountries: [
            { name: 'Russia', coastlineKm: 2000, region: 'Kamchatka, Chukotka' },
            { name: 'USA', coastlineKm: 1500, region: 'Alaska' }
        ],
        
        straits: [
            {
                name: 'Bering Strait',
                width: 82,
                connects: 'Arctic Ocean',
                importance: 'Separates Asia from North America',
                historicSignificance: 'Land bridge during Ice Age - human migration to Americas'
            }
        ],
        
        economicImportance: {
            fishing: {
                value: '$1 billion annually',
                keySpecies: ['Pollock', 'Crab (King, Snow)', 'Salmon', 'Halibut'],
                note: 'One of most productive fishing grounds on Earth'
            },
            oilGas: 'Potential reserves, limited exploration'
        },
        
        environmentalIssues: [
            'Rapid warming - sea ice declining',
            'Crab populations crashed 2022',
            'Ecosystem shifts due to climate change'
        ],
        
        geopolitics: {
            issues: [
                'US-Russia maritime boundary',
                'Arctic shipping route emergence',
                'Military tensions increasing'
            ]
        }
    },

    // ═══════════════════════════════════════════════════════
    // 🌊 BARENTS SEA
    // ═══════════════════════════════════════════════════════
    {
        id: 'barents-sea',
        name: 'Barents Sea',
        parentOcean: 'Arctic Ocean',
        parentOceanId: 'arctic-ocean',
        
        area: 1405000,
        avgDepth: 230,
        maxDepth: 600,
        coordinates: [75, 35],
        
        borderingCountries: [
            { name: 'Russia', coastlineKm: 3000, region: 'Kola Peninsula, Novaya Zemlya' },
            { name: 'Norway', coastlineKm: 1500, region: 'Northern Norway, Svalbard' }
        ],
        
        economicImportance: {
            fishing: {
                keySpecies: ['Cod', 'Haddock', 'Capelin', 'Herring'],
                note: 'Highly productive due to mixing warm/cold currents'
            },
            oilGas: {
                status: 'Major reserves',
                fields: ['Shtokman (Russia)', 'Johan Castberg (Norway)', 'Snøhvit (Norway)'],
                challenges: 'Ice, extreme conditions'
            }
        },
        
        geopolitics: {
            strategicImportance: 'Very High - Russia\'s nuclear submarine base',
            issues: [
                {
                    name: 'Russia Naval Base',
                    location: 'Murmansk/Severomorsk',
                    assets: 'Northern Fleet, nuclear submarines',
                    importance: 'Only ice-free Russian Arctic port'
                },
                {
                    name: 'NATO-Russia Tensions',
                    status: 'Increased military activity post-2022',
                    impact: 'Norway-Russia border now NATO frontier'
                },
                {
                    name: 'Arctic Resources',
                    status: 'Competition for seabed resources'
                }
            ]
        }
    },

    // ═══════════════════════════════════════════════════════
    // 🌊 PHILIPPINE SEA
    // ═══════════════════════════════════════════════════════
    {
        id: 'philippine-sea',
        name: 'Philippine Sea',
        parentOcean: 'Pacific Ocean',
        parentOceanId: 'pacific-ocean',
        
        area: 5695000,
        avgDepth: 4108,
        maxDepth: 10540,
        coordinates: [20, 135],
        
        deepestPoint: {
            name: 'Philippine Trench',
            depth: 10540,
            coordinates: [10, 127]
        },
        
        borderingCountries: [
            { name: 'Philippines', coastlineKm: 2000 },
            { name: 'Japan', coastlineKm: 1500 },
            { name: 'Taiwan', coastlineKm: 500 },
            { name: 'Palau', coastlineKm: 300 },
            { name: 'Guam (USA)', coastlineKm: 125 }
        ],
        
        tectonicFeatures: {
            trenches: [
                { name: 'Philippine Trench', depth: 10540 },
                { name: 'Mariana Trench', depth: 10935, note: 'Deepest on Earth' },
                { name: 'Ryukyu Trench', depth: 7460 }
            ],
            seismicActivity: 'Extremely High - Part of Ring of Fire',
            typhoons: 'Most intense typhoons form here'
        },
        
        geopolitics: {
            strategicImportance: 'Very High',
            issues: [
                'US military presence (Guam)',
                'China naval expansion',
                'Taiwan contingency planning',
                'First Island Chain defense'
            ],
            militaryPresence: [
                { country: 'USA', base: 'Guam - Andersen AFB, Naval Base', importance: 'Critical Pacific hub' },
                { country: 'Japan', base: 'Okinawa', importance: 'US-Japan alliance' }
            ]
        }
    },

    // ═══════════════════════════════════════════════════════
    // 🌊 TASMAN SEA
    // ═══════════════════════════════════════════════════════
    {
        id: 'tasman-sea',
        name: 'Tasman Sea',
        parentOcean: 'Pacific Ocean',
        parentOceanId: 'pacific-ocean',
        
        area: 2300000,
        avgDepth: 3500,
        maxDepth: 5200,
        coordinates: [-38, 165],
        
        borderingCountries: [
            { name: 'Australia', coastlineKm: 1500, region: 'New South Wales, Victoria, Tasmania' },
            { name: 'New Zealand', coastlineKm: 1500, region: 'North and South Islands' }
        ],
        
        keyFeatures: [
            'Named after Dutch explorer Abel Tasman',
            'Known for rough seas and storms',
            'Sydney to Hobart yacht race crosses it',
            'Lord Howe Island - World Heritage'
        ],
        
        economicImportance: {
            shipping: 'Australia-New Zealand trade route',
            fishing: { keySpecies: ['Tuna', 'Swordfish'] }
        }
    },

    // ═══════════════════════════════════════════════════════
    // 🌊 WEDDELL SEA
    // ═══════════════════════════════════════════════════════
    {
        id: 'weddell-sea',
        name: 'Weddell Sea',
        parentOcean: 'Southern Ocean',
        parentOceanId: 'southern-ocean',
        
        area: 2800000,
        avgDepth: 3000,
        maxDepth: 5256,
        coordinates: [-73, -45],
        
        borderingLandmasses: ['Antarctic Peninsula', 'Coats Land'],
        
        keyFeatures: [
            'Coldest seawater on Earth (-2°C)',
            'Antarctic Bottom Water forms here - drives global circulation',
            'Massive icebergs calve from ice shelves',
            'Shackleton\'s Endurance sank here (found 2022)'
        ],
        
        marineLife: {
            keySpecies: ['Weddell Seal', 'Emperor Penguin', 'Antarctic Krill', 'Leopard Seal'],
            importance: 'Critical breeding ground'
        },
        
        climateRole: {
            importance: 'Critical',
            role: 'Antarctic Bottom Water formation drives global thermohaline circulation'
        },
        
        exploration: {
            shackletonEndurance: {
                sank: 1915,
                found: 'March 2022',
                depth: 3008,
                condition: 'Remarkably preserved'
            }
        }
    },

    // ═══════════════════════════════════════════════════════
    // 🌊 SARGASSO SEA
    // ═══════════════════════════════════════════════════════
    {
        id: 'sargasso-sea',
        name: 'Sargasso Sea',
        parentOcean: 'Atlantic Ocean',
        parentOceanId: 'atlantic-ocean',
        
        area: 3000000,
        avgDepth: 4500,
        maxDepth: 7000,
        coordinates: [28, -66],
        
        uniqueFeatures: [
            'Only sea with no coastline - bounded by currents',
            'Named after Sargassum seaweed',
            'Bermuda Triangle overlaps',
            'European and American eels breed here'
        ],
        
        boundingCurrents: [
            'Gulf Stream (west)',
            'North Atlantic Current (north)',
            'Canary Current (east)',
            'North Equatorial Current (south)'
        ],
        
        marineLife: {
            keySpecies: ['European Eel', 'American Eel', 'Sargassum Fish', 'Sea Turtles'],
            eelMystery: 'Eels from both continents migrate thousands of km to breed here'
        },
        
        environmentalIssues: [
            'Sargassum blooms increasing dramatically',
            'Plastic accumulation (part of garbage patch)',
            'Climate change affecting currents'
        ]
    }
);

// ═══════════════════════════════════════════════════════════
// 🛠️ HELPER FUNCTIONS
// ═══════════════════════════════════════════════════════════

function getSeaById(id) {
    return seasData.find(sea => sea.id === id);
}

function getSeaByName(name) {
    return seasData.find(sea => 
        sea.name.toLowerCase() === name.toLowerCase() ||
        sea.alternativeNames?.some(alt => alt.toLowerCase().includes(name.toLowerCase()))
    );
}

function getSeaByOcean(oceanId) {
    return seasData.filter(sea => sea.parentOceanId === oceanId);
}

function getSeaByArea(minArea, maxArea) {
    return seasData.filter(sea => 
        sea.area >= (minArea || 0) && 
        sea.area <= (maxArea || Infinity)
    );
}

function getStrategicSeas() {
    return seasData.filter(sea => 
        sea.geopolitics?.strategicImportance === 'Critical' ||
        sea.geopolitics?.strategicImportance === 'Very High'
    );
}

function getSeaStats() {
    return {
        totalSeas: seasData.length,
        totalArea: seasData.reduce((sum, sea) => sum + (sea.area || 0), 0),
        largestSea: seasData.reduce((prev, curr) => (prev.area > curr.area) ? prev : curr),
        deepestSea: seasData.reduce((prev, curr) => (prev.maxDepth > curr.maxDepth) ? prev : curr),
        byOcean: {
            pacific: getSeaByOcean('pacific-ocean').length,
            atlantic: getSeaByOcean('atlantic-ocean').length,
            indian: getSeaByOcean('indian-ocean').length,
            southern: getSeaByOcean('southern-ocean').length,
            arctic: getSeaByOcean('arctic-ocean').length
        }
    };
}

function getTradeRouteById(id) {
    return globalTradeRoutes.find(route => route.id === id);
}

function getTradeRoutesByType(type) {
    return globalTradeRoutes.filter(route => route.type === type || route.type.includes(type));
}

function getChokepointById(id) {
    return globalChokepoints.find(cp => cp.id === id);
}

function getAllChokepoints() {
    return globalChokepoints;
}

function getChokepointsByRegion(region) {
    // Simple region matching
    return globalChokepoints.filter(cp => {
        const name = cp.name.toLowerCase();
        region = region.toLowerCase();
        
        if (region === 'asia') return name.includes('malacca') || name.includes('hormuz');
        if (region === 'europe') return name.includes('gibraltar') || name.includes('suez') || name.includes('turkish') || name.includes('dover');
        if (region === 'americas') return name.includes('panama');
        if (region === 'middle-east') return name.includes('hormuz') || name.includes('bab');
        
        return false;
    });
}

function calculateRouteValue(routeId) {
    const route = getTradeRouteById(routeId);
    if (!route) return null;
    
    return {
        routeName: route.name,
        annualValue: route.statistics?.annualValue || 'Unknown',
        chokepoints: route.chokepoints?.map(cp => cp.name) || [],
        risks: route.geopoliticalRisks || []
    };
}

function getSeaImportanceForCountry(countryName) {
    const results = [];
    
    seasData.forEach(sea => {
        if (sea.geopolitics?.countryImportance?.[countryName.toLowerCase()]) {
            results.push({
                sea: sea.name,
                importance: sea.geopolitics.countryImportance[countryName.toLowerCase()]
            });
        }
        
        if (sea.borderingCountries?.some(c => c.name.toLowerCase() === countryName.toLowerCase())) {
            results.push({
                sea: sea.name,
                relation: 'bordering'
            });
        }
    });
    
    return results;
}

// Search across all data
function searchSeasAndRoutes(query) {
    query = query.toLowerCase();
    const results = {
        seas: [],
        routes: [],
        chokepoints: []
    };
    
    // Search seas
    seasData.forEach(sea => {
        if (sea.name.toLowerCase().includes(query) ||
            sea.borderingCountries?.some(c => c.name.toLowerCase().includes(query))) {
            results.seas.push(sea);
        }
    });
    
    // Search routes
    globalTradeRoutes.forEach(route => {
        if (route.name.toLowerCase().includes(query) ||
            route.route?.origin?.region?.toLowerCase().includes(query) ||
            route.route?.destination?.region?.toLowerCase().includes(query)) {
            results.routes.push(route);
        }
    });
    
    // Search chokepoints
    globalChokepoints.forEach(cp => {
        if (cp.name.toLowerCase().includes(query)) {
            results.chokepoints.push(cp);
        }
    });
    
    return results;
}

// Export for modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        seasData,
        globalTradeRoutes,
        globalChokepoints,
        getSeaById,
        getSeaByName,
        getSeaByOcean,
        getStrategicSeas,```
        getSeaStats,
        getTradeRouteById,
        getTradeRoutesByType,
        getChokepointById,
        getAllChokepoints,
        searchSeasAndRoutes
    };
}

// Console log for verification
console.log('🌊 Seas Data Loaded Successfully!');
console.log(`📊 Total Seas: ${seasData.length}`);
console.log(`🚢 Total Trade Routes: ${globalTradeRoutes.length}`);
console.log(`⚠️ Total Chokepoints: ${globalChokepoints.length}`);
