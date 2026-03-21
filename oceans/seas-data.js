/* ═══════════════════════════════════════════════════════════
   🌊 SEAS EXPLORER - ENHANCED COMPLETE DATA FILE
   Comprehensive: Seas, Trade Routes, Chokepoints, History, Environment
   ═══════════════════════════════════════════════════════════ */

const seasData = [
    // ═══════════════════════════════════════════════════════
    // SOUTH CHINA SEA - EXPANDED
    // ═══════════════════════════════════════════════════════
    {
        id: 'south-china-sea',
        name: 'South China Sea',
        parentOcean: 'Pacific Ocean',
        parentOceanId: 'pacific-ocean',
        
        area: 3500000,
        avgDepth: 1212,
        maxDepth: 5560,
        volume: '3,900,000 km³',
        
        coordinates: [12, 113],
        defaultZoom: 5,
        
        image: 'https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=500',
        backgroundImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920',
        
        borderingCountries: [
            { name: 'China', coastlineKm: 14500, cities: ['Hong Kong', 'Guangzhou', 'Shenzhen', 'Haikou'], eez: '877,000 km²' },
            { name: 'Vietnam', coastlineKm: 3260, cities: ['Ho Chi Minh City', 'Da Nang', 'Haiphong', 'Nha Trang'], eez: '417,000 km²' },
            { name: 'Philippines', coastlineKm: 36289, cities: ['Manila', 'Cebu', 'Davao'], eez: '2,263,816 km²' },
            { name: 'Malaysia', coastlineKm: 4675, cities: ['Kota Kinabalu', 'Kuching', 'Miri'], eez: '515,256 km²' },
            { name: 'Brunei', coastlineKm: 161, cities: ['Bandar Seri Begawan'], eez: '37,000 km²' },
            { name: 'Indonesia', coastlineKm: 54716, cities: ['Pontianak', 'Batam'], eez: '540,000 km² (partial)' },
            { name: 'Taiwan', coastlineKm: 1566, cities: ['Kaohsiung', 'Taipei'], eez: '830,600 km²' },
            { name: 'Singapore', coastlineKm: 193, eez: '1,067 km²' }
        ],
        
        straits: [
            { 
                name: 'Strait of Malacca', 
                connectsTo: 'Indian Ocean', 
                width: 65, 
                narrowest: 2.8,
                length: 800,
                depth: 25,
                annualShips: 94000,
                dailyShips: 250,
                oilBarrels: 16000000,
                significance: 'World\'s busiest shipping lane',
                chokepoint: true,
                pirates: 'Historically high, now reduced'
            },
            { 
                name: 'Taiwan Strait', 
                connectsTo: 'East China Sea', 
                width: 180,
                narrowest: 130,
                annualShips: 270000,
                significance: 'World\'s most dangerous flashpoint',
                militaryActivity: 'Constant Chinese exercises'
            },
            { 
                name: 'Luzon Strait', 
                connectsTo: 'Philippine Sea', 
                width: 250,
                depth: 2000,
                annualShips: 50000,
                significance: 'US submarines transit route'
            }
        ],
        
        majorIslands: [
            { 
                name: 'Hainan', 
                country: 'China', 
                area: '35,400 km²', 
                population: '10.1 million',
                economy: 'Tourism, naval base',
                militaryBase: 'Major Chinese naval base - Yulin'
            },
            { 
                name: 'Luzon', 
                country: 'Philippines', 
                area: '109,965 km²',
                population: '64 million',
                cities: ['Manila (capital)']
            },
            { 
                name: 'Palawan', 
                country: 'Philippines', 
                area: '12,189 km²',
                population: '850,000',
                proximity: 'Closest to Spratly Islands'
            },
            { 
                name: 'Borneo (partial)', 
                country: 'Malaysia/Brunei/Indonesia', 
                area: '743,330 km²',
                ecology: 'Rainforests, orangutans'
            }
        ],
        
        disputedFeatures: {
            spratlyIslands: {
                count: '100+ islands, reefs, rocks',
                totalLand: '5 km² natural land',
                artificialLand: '13 km² (China built)',
                claimants: ['China', 'Vietnam', 'Philippines', 'Malaysia', 'Taiwan', 'Brunei'],
                
                chinaOccupation: {
                    features: 7,
                    named: ['Fiery Cross Reef', 'Subi Reef', 'Mischief Reef', 'Johnson South Reef', 'Cuarteron Reef', 'Gaven Reef', 'Hughes Reef'],
                    militarized: 'All 7 - airstrips, missiles, radar, barracks',
                    airstrips: '3 (3,000m runways)',
                    area: '3,200+ acres created since 2013',
                    facilities: ['Aircraft hangars', 'Radar domes', 'Anti-aircraft guns', 'Surface-to-air missiles', 'Barracks for 1,000+ troops']
                },
                
                vietnamOccupation: {
                    features: 21,
                    type: 'Small outposts, no major construction',
                    status: 'Vietnam has occupied since 1970s'
                },
                
                philippinesOccupation: {
                    features: 9,
                    thituIsland: 'Largest natural island, 100+ civilians',
                    bRPSierraMadre: 'Grounded ship at Second Thomas Shoal'
                },
                
                malaysiaOccupation: {
                    features: 5,
                    oilProduction: 'Active oil/gas extraction'
                },
                
                taiwanOccupation: {
                    features: 1,
                    name: 'Itu Aba (Taiping Island)',
                    status: 'Largest natural island (0.51 km²)'
                }
            },
            
            paracelIslands: {
                count: '130+ islands and reefs',
                totalArea: '7.75 km²',
                control: 'China (since 1974)',
                claimants: ['China', 'Vietnam', 'Taiwan'],
                
                history: {
                    1974: 'Battle of Paracel Islands - China seized from Vietnam',
                    casualties: '74 Vietnamese killed',
                    current: 'Fully militarized by China'
                },
                
                chinaBase: {
                    woodIsland: 'Administrative center, 1,000+ personnel',
                    airstrip: '2,400m runway',
                    harbor: 'Deep water port',
                    facilities: 'Radar, SAMs, barracks'
                }
            },
            
            scarboroughShoal: {
                location: '220 km from Philippines',
                area: '150 km²',
                control: 'China (since 2012)',
                claimants: ['Philippines', 'China', 'Taiwan'],
                
                Standoff2012: {
                    trigger: 'Philippine arrest of Chinese fishers',
                    outcome: 'China established permanent presence',
                    philippineResponse: '2013 arbitration case filed'
                },
                
                status: 'China coast guard blocks Philippine access'
            }
        },
        
        resources: {
            oil: {
                proven: '11 billion barrels',
                undiscovered: 'Estimated 28 billion barrels potential',
                production: 'Minimal due to disputes',
                chinaProduction: '50,000 bpd from disputed areas',
                vietnamProduction: '300,000 bpd from claimed areas'
            },
            gas: {
                proven: '190 trillion cubic feet',
                undiscovered: 'Estimated 266 tcf potential',
                malamanpayaField: 'Philippines - supplies 40% of Luzon power'
            },
            fishing: {
                annualCatch: '10 million tonnes',
                percentGlobal: 12,
                value: '$21 billion annually',
                species: ['Tuna', 'Mackerel', 'Squid', 'Shrimp', 'Grouper'],
                overfishing: 'Stocks declined 70% since 1950s',
                illegalFishing: 'Rampant - Chinese fleets accused'
            },
            minerals: {
                seabed: 'Rare earth elements',
                status: 'Unexplored, potential worth billions'
            }
        },
        
        economicImportance: {
            overview: 'One of the most economically important seas in the world',
            tradeValue: '$5.3 trillion annually',
            percentGlobalTrade: 33,
            percentAsianTrade: 60,
            
            majorPorts: [
                { 
                    name: 'Singapore', 
                    country: 'Singapore', 
                    containers: '37.5M TEU',
                    ranking: '#2 World',
                    revenue: '$4 billion',
                    connectivity: 'Connected to 600+ ports'
                },
                { 
                    name: 'Shenzhen', 
                    country: 'China', 
                    containers: '26.5M TEU',
                    ranking: '#4 World',
                    growth: 'Up from nothing in 1980'
                },
                { 
                    name: 'Hong Kong', 
                    country: 'China', 
                    containers: '17.8M TEU',
                    ranking: '#9 World',
                    status: 'Declining post-2019 protests'
                },
                { 
                    name: 'Ho Chi Minh City', 
                    country: 'Vietnam', 
                    containers: '7.5M TEU',
                    growth: 'Fastest growing in region'
                },
                { 
                    name: 'Manila', 
                    country: 'Philippines', 
                    containers: '5.5M TEU',
                    issues: 'Congestion problems'
                }
            ],
            
            shipping: {
                routes: 'Europe-Asia, Intra-Asia, Trans-Pacific',
                oilTransit: '30% of global maritime oil',
                chinaOil: '80% of China oil imports',
                japanOil: '60% of Japan oil imports',
                koreaOil: '70% of South Korea oil imports'
            },
            
            fishing: {
                annualCatch: '12 million tonnes',
                value: '$21 billion',
                percentGlobalFish: 12,
                livelihoods: '3.7 million fishers',
                subsistence: 'Feeds hundreds of millions'
            },
            
            tourism: {
                destinations: ['Hainan', 'Phuket', 'Boracay', 'Palawan', 'Halong Bay'],
                value: '$80 billion annually',
                visitors: '100+ million/year',
                diving: 'World-class coral reefs'
            }
        },
        
        geopolitics: {
            strategicImportance: 'Critical',
            conflictLevel: 'High tension',
            warRisk: 'Moderate-High',
            
            nineDashLine: {
                description: 'China claims 90% of South China Sea',
                origin: '1947 ROC map',
                legalBasis: 'Historic rights (China claims)',
                area: '2 million km²',
                overlap: 'Overrides all other EEZ claims',
                internationalLaw: 'No basis in UNCLOS'
            },
            
            tribunalRuling2016: {
                case: 'Philippines v. China',
                date: 'July 12, 2016',
                venue: 'Permanent Court of Arbitration, The Hague',
                
                keyRulings: [
                    'Nine-dash line has no legal basis',
                    'China violated Philippines\' sovereign rights',
                    'Artificial islands don\'t create EEZ',
                    'China damaged marine environment',
                    'China interfered with Filipino fishing'
                ],
                
                chinaResponse: 'Rejected ruling entirely - "scrap of paper"',
                philippineResponse: 'Won case but can\'t enforce',
                usResponse: 'Supported ruling',
                internationalResponse: 'Most countries backed ruling',
                enforcement: 'None - China continues activities'
            },
            
            territorialDisputes: [
                { 
                    name: 'Nine-Dash Line', 
                    claimants: ['China', 'Vietnam', 'Philippines', 'Malaysia', 'Brunei', 'Taiwan'], 
                    description: 'China claims 90% of sea',
                    legalBasis: 'China: Historic rights | Others: UNCLOS EEZ',
                    status: '2016 tribunal ruled against China, China rejected'
                },
                { 
                    name: 'Spratly Islands', 
                    claimants: ['China', 'Vietnam', 'Philippines', 'Malaysia', 'Taiwan'], 
                    features: '100+ islands/reefs',
                    militarization: 'China built 7 bases since 2013',
                    resources: 'Oil, gas, fishing',
                    status: 'Multiple occupations, increasing tensions'
                },
                { 
                    name: 'Paracel Islands', 
                    claimants: ['China', 'Vietnam', 'Taiwan'], 
                    status: 'China controls since 1974',
                    battle: 'China seized from Vietnam in 1974 battle',
                    casualties: '74 Vietnamese killed',
                    current: 'Fully militarized'
                },
                { 
                    name: 'Scarborough Shoal', 
                    claimants: ['China', 'Philippines'], 
                    status: 'China controls since 2012',
                    distance: '220 km from Philippines, 1,200 km from China',
                    standoff: '2012 - China seized after standoff',
                    currentStatus: 'China coast guard blocks Philippine access'
                }
            ],
            
            navalPresences: [
                { 
                    country: 'China', 
                    base: 'Woody Island (Paracels), Fiery Cross/Subi/Mischief (Spratlys)', 
                    purpose: 'Military control', 
                    assets: 'Missiles, aircraft, radar, ships',
                    personnel: '3,000+ on islands',
                    fleets: 'South Sea Fleet (Yulin Naval Base, Hainan)',
                    submarines: 'Nuclear and conventional',
                    aircraft: 'J-11, J-16 fighters on bases'
                },
                { 
                    country: 'USA', 
                    base: '7th Fleet operations', 
                    purpose: 'Freedom of navigation', 
                    assets: 'Carrier strike groups',
                    fONOPS: '12+ freedom of navigation operations annually',
                    allies: 'Philippines (treaty ally)',
                    presence: 'Regular transits, exercises'
                },
                { 
                    country: 'Vietnam', 
                    base: 'Spratly outposts (21 features)', 
                    purpose: 'Territorial defense',
                    assets: 'Coastal defense',
                    submarines: '6 Kilo-class (Russian)',
                    coastGuard: 'Active patrols'
                },
                { 
                    country: 'Philippines', 
                    base: 'Thitu Island, BRP Sierra Madre', 
                    purpose: 'Territorial defense',
                    assets: 'Small garrisons',
                    usAlliance: 'Mutual Defense Treaty 1951',
                    weakness: 'Limited naval capability'
                },
                { 
                    country: 'Malaysia', 
                    base: '5 features', 
                    purpose: 'Resource extraction, defense',
                    oilProduction: 'Active in claimed areas'
                },
                { 
                    country: 'Taiwan', 
                    base: 'Itu Aba (Taiping Island)', 
                    purpose: 'Sovereignty claim',
                    assets: 'Small garrison, airstrip',
                    claim: 'Same as China (inherited ROC claim)'
                }
            ],
            
            artificialIslands: {
                chinaBuilt: '3,200+ acres since 2013',
                cost: 'Estimated $10+ billion',
                
                features: [
                    'Airstrips - 3 with 3,000m runways',
                    'Radar systems - Over-horizon radar',
                    'Missile batteries - HQ-9 SAMs, anti-ship missiles',
                    'Barracks - Capacity for 1,000+ troops each',
                    'Hangars - 24+ aircraft on each base',
                    'Harbors - Deep water ports',
                    'Helipads - Multiple on each island',
                    'Support facilities - Power, water, communications'
                ],
                
                majorBases: [
                    { 
                        name: 'Fiery Cross Reef', 
                        area: '2.74 km²',
                        airstrip: '3,000m runway',
                        features: 'Hangar, barracks, radar, port',
                        firstFlight: 'January 2016'
                    },
                    { 
                        name: 'Subi Reef', 
                        area: '3.95 km²',
                        airstrip: '3,000m runway',
                        features: 'Multi-story buildings, underground storage'
                    },
                    { 
                        name: 'Mischief Reef', 
                        area: '5.52 km²',
                        airstrip: '2,650m runway',
                        features: 'Radar domes, underground facilities',
                        proximity: '200 km from Philippines'
                    }
                ],
                
                militaryCapabilities: {
                    airPower: 'Can deploy fighters, bombers across entire sea',
                    missiles: 'Anti-ship missiles cover major shipping lanes',
                    radar: 'Surveillance over entire region',
                    sustainability: 'Can sustain operations indefinitely'
                },
                
                environmentalDamage: {
                    coralDestroyed: '29,500 acres coral reefs destroyed',
                    dredging: '1 billion cubic feet of material',
                    recovery: 'Will take decades to centuries',
                    ecosystemDamage: 'Irreversible in many areas'
                }
            },
            
            countryImportance: {
                china: { 
                    importance: 'Critical', 
                    reasons: [
                        '80% of oil imports transit',
                        'Claims entire sea under nine-dash line',
                        'Naval access to Pacific',
                        'Fishing grounds for millions',
                        'National prestige issue',
                        'First island chain control'
                    ],
                    strategy: 'Area denial, salami slicing',
                    goal: 'De facto control without war'
                },
                usa: { 
                    importance: 'Critical', 
                    reasons: [
                        '$1.2 trillion trade transits',
                        'Treaty obligations to Philippines',
                        'Counter China rise',
                        'Freedom of navigation principle',
                        'Ally access (Japan, South Korea)',
                        'Credibility at stake'
                    ],
                    strategy: 'Freedom of Navigation Operations (FONOPS)',
                    alliances: 'Philippines, Japan, Australia (AUKUS)'
                },
                japan: { 
                    importance: 'Very High', 
                    reasons: [
                        '80% of oil imports transit',
                        'Critical trade routes',
                        'Alliance with USA',
                        'China threat perception'
                    ],
                    concern: 'China could choke trade'
                },
                vietnam: { 
                    importance: 'Critical', 
                    reasons: [
                        'Historic claim to Paracels, Spratlys',
                        'Fishing livelihoods',
                        'Oil/gas reserves',
                        'National sovereignty'
                    ],
                    strategy: 'Balancing - buy Russian/Chinese weapons, court USA'
                },
                philippines: { 
                    importance: 'Critical', 
                    reasons: [
                        'Within Philippine EEZ',
                        'Fishing livelihoods',
                        'Oil/gas potential',
                        'National sovereignty'
                    ],
                    dilemma: 'US ally but economically tied to China'
                },
                asean: {
                    importance: 'High',
                    challenge: 'Divided - some members China-aligned',
                    cOC: 'Code of Conduct negotiations stalled',
                    effectiveness: 'Limited due to consensus rule'
                }
            },
            
            incidents: [
                { year: 1974, event: 'Battle of Paracels - China seized islands from Vietnam', casualties: '74 Vietnamese killed' },
                { year: 1988, event: 'Johnson South Reef Skirmish - China vs Vietnam', casualties: '64 Vietnamese killed' },
                { year: 1995, event: 'Mischief Reef - China occupied Philippine-claimed reef' },
                { year: 2012, event: 'Scarborough Shoal standoff - China seized control' },
                { year: 2014, event: 'China began massive island-building', impact: '3,200 acres created' },
                { year: 2016, event: 'Tribunal ruled against China', outcome: 'China rejected ruling' },
                { year: 2020, event: 'China sank Vietnamese fishing boat near Paracels' },
                { year: 2021, event: 'Chinese ships swarm at Whitsun Reef (Philippines)', count: '220 ships' },
                { year: 2023, event: 'China water cannon attacks on Philippine boats', frequency: 'Multiple incidents' }
            ],
            
            futureScenarios: {
                warRisk: 'Moderate-High - Most likely over Taiwan',
                flashpoints: ['Taiwan conflict spillover', 'Philippine-China clash', 'Accidental collision'],
                chinaGoal: 'De facto control without war',
                usCommitment: 'Unclear if would fight over features',
                economicImpact: 'War would devastate global trade',
                probability: 'Most analysts: 20-30% chance of conflict by 2030'
            }
        },
        
        environment: {
            climate: 'Tropical monsoon',
            waterTemp: '25-29°C year-round',
            salinity: '32-34 ppt',
            
            currents: {
                winter: 'Northeast monsoon (Nov-Mar) - currents flow southwest',
                summer: 'Southwest monsoon (May-Sep) - currents flow northeast',
                strength: 'Up to 1 meter/second'
            },
            
            typhoons: {
                season: 'Year-round, peak July-November',
                annualAverage: '20-30 typhoons',
                deadliest: 'Typhoon Haiyan (2013) - 6,300 dead in Philippines',
                superTyphoons: '3-5 Category 4-5 storms annually',
                warmingEffect: 'Intensifying due to climate change'
            },
            
            biodiversity: {
                marineSpecies: '3,365 species',
                coralReefs: '76,000 km² coral reefs (1/3 of world total)',
                coralSpecies: '500+ species (75% of world total)',
                fishSpecies: '2,000+ species',
                marineAnimals: ['Dugongs', 'Green sea turtles', 'Hawksbill turtles', 'Whale sharks', 'Dolphins'],
                threats: 'Overfishing, pollution, climate change, island construction'
            },
            
            coralReefs: {
                area: '76,000 km²',
                percentWorld: 33,
                health: 'Declining - 16% lost since 2016',
                threats: ['Overfishing', 'Pollution', 'Warming', 'Acidification', 'Dynamite fishing', 'Island construction'],
                recovery: 'Slow - decades needed',
                value: 'Billions in fishing, tourism, coastal protection'
            },
            
            pollution: {
                plastic: 'Significant - river runoff',
                overfishing: '70% decline in fish stocks since 1950',
                chemicalPollution: 'Agricultural runoff, industrial',
                dredging: 'Chinese island-building destroyed reefs',
                recovery: 'Will take generations'
            },
            
            seaLevelRise: {
                rate: '3.3 mm/year (accelerating)',
                projection2100: '0.5-1.5 meters',
                impact: 'Low-lying islands at risk',
                vietnam: 'Mekong Delta inundation risk'
            }
        },
        
        history: {
            ancientTrade: '2,000+ years - spice trade, silk road maritime',
            chineseExploration: 'Zheng He voyages (1405-1433) - claimed by China as historic rights',
            europeanColonial: 'Portuguese, Spanish, Dutch, British, French',
            worldWar2: 'Japanese occupation (1941-1945)',
            coldWar: 'Vietnam War (1955-1975)',
            modernDisputes: 'Escalating since 1990s'
        },
        
        culturalSignificance: {
            fishing: 'Traditional livelihoods for centuries',
            trade: 'Historic maritime silk road',
            identity: 'National prestige for all claimants',
            religion: 'Buddhist, Hindu, Islamic maritime heritage'
        },
        
        scientificResearch: {
            oceanography: 'Limited due to disputes',
            marineLife: 'Understudied - potential new species',
            climatology: 'Important for typhoon research',
            access: 'Restricted by military zones'
        },
        
        legalFramework: {
            unclos: 'UN Convention on Law of the Sea (1982)',
            eez: '200 nautical miles from coast',
            continentalShelf: 'Up to 350 nautical miles',
            tribunalRuling: '2016 - rejected China\'s claims',
            enforcement: 'None - relies on compliance'
        },
        
        funFacts: [
            '$5.3 trillion in trade passes through annually - about 1/3 of global trade',
            'China has created 3,200+ acres of artificial islands since 2013',
            'More military assets deployed here than any other sea',
            'Contains disputed islands claimed by 6 different countries',
            '2016 tribunal ruled against China\'s claims - China rejected ruling',
            'Typhoon Haiyan (2013) had winds of 315 km/h - one of strongest on record',
            'Contains 1/3 of world\'s coral reefs',
            'Over 220 Chinese ships swarmed Philippine reef in 2021',
            'Ancient name: "South Sea" (南海 / Nanhai in Chinese)',
            'Home to rare dugongs (sea cows) - critically endangered'
        ]
    },

    // ═══════════════════════════════════════════════════════
    // MEDITERRANEAN SEA - MASSIVELY EXPANDED
    // ═══════════════════════════════════════════════════════
    {
        id: 'mediterranean-sea',
        name: 'Mediterranean Sea',
        parentOcean: 'Atlantic Ocean',
        parentOceanId: 'atlantic-ocean',
        
        area: 2500000,
        avgDepth: 1500,
        maxDepth: 5267,
        volume: '3,750,000 km³',
        
        coordinates: [35, 18],
        defaultZoom: 4,
        
        image: 'https://images.unsplash.com/photo-1499939667766-4afceb292d05?w=500',
        backgroundImage: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1920',
        
        etymology: {
            latin: 'Mare Mediterraneum - Sea Between Lands',
            roman: 'Mare Nostrum - Our Sea',
            ancient: 'Mare Internum - Internal Sea',
            meaning: 'Middle of the Earth'
        },
        
        borderingCountries: [
            { name: 'Spain', coastlineKm: 1660, cities: ['Barcelona', 'Valencia', 'Malaga', 'Alicante'], eez: '50,000 km²' },
            { name: 'France', coastlineKm: 1700, cities: ['Marseille', 'Nice', 'Toulon'], eez: '12,000 km²' },
            { name: 'Monaco', coastlineKm: 4, cities: ['Monaco'], status: 'Microstate' },
            { name: 'Italy', coastlineKm: 7600, cities: ['Rome', 'Naples', 'Genoa', 'Venice', 'Palermo'], eez: '541,915 km²' },
            { name: 'Slovenia', coastlineKm: 47, cities: ['Koper'], eez: '200 km²' },
            { name: 'Croatia', coastlineKm: 5835, cities: ['Split', 'Dubrovnik', 'Rijeka'], islands: 1244 },
            { name: 'Montenegro', coastlineKm: 294, cities: ['Budva', 'Kotor'] },
            { name: 'Albania', coastlineKm: 362, cities: ['Durrës', 'Vlorë'] },
            { name: 'Greece', coastlineKm: 13676, cities: ['Athens', 'Thessaloniki', 'Patras'], islands: '6,000+' },
            { name: 'Turkey', coastlineKm: 7200, cities: ['Istanbul', 'Izmir', 'Antalya', 'Mersin'] },
            { name: 'Cyprus', coastlineKm: 648, cities: ['Nicosia', 'Limassol'], status: 'Divided island' },
            { name: 'Syria', coastlineKm: 193, cities: ['Latakia', 'Tartus'], status: 'Civil war since 2011' },
            { name: 'Lebanon', coastlineKm: 225, cities: ['Beirut', 'Tripoli', 'Sidon'] },
            { name: 'Israel', coastlineKm: 273, cities: ['Tel Aviv', 'Haifa'], gasFields: 'Leviathan, Tamar' },
            { name: 'Palestine', coastlineKm: 40, cities: ['Gaza'], status: 'Gaza Strip only' },
            { name: 'Egypt', coastlineKm: 2450, cities: ['Alexandria', 'Port Said', 'Suez'], suezCanal: 'Southern terminus' },
            { name: 'Libya', coastlineKm: 1770, cities: ['Tripoli', 'Benghazi'], status: 'Civil war, divided government' },
            { name: 'Tunisia', coastlineKm: 1300, cities: ['Tunis', 'Sfax'] },
            { name: 'Algeria', coastlineKm: 1622, cities: ['Algiers', 'Oran'] },
            { name: 'Morocco', coastlineKm: 512, cities: ['Tangier', 'Tetouan'], strait: 'Gibraltar' },
            { name: 'Malta', coastlineKm: 253, cities: ['Valletta'], status: 'Island nation, EU member' }
        ],
        
        subdivisions: {
            westernBasin: {
                seas: ['Alboran Sea', 'Balearic Sea', 'Ligurian Sea', 'Tyrrhenian Sea'],
                description: 'West of Sicily-Tunisia strait'
            },
            centralBasin: {
                seas: ['Adriatic Sea', 'Ionian Sea'],
                description: 'Central Mediterranean'
            },
            easternBasin: {
                seas: ['Aegean Sea', 'Levantine Sea', 'Sea of Crete'],
                description: 'East of Crete'
            }
        },
        
        straits: [
            { 
                name: 'Strait of Gibraltar', 
                connectsTo: 'Atlantic Ocean', 
                width: 14,
                narrowest: 13,
                depth: 300,
                annualShips: 100000,
                significance: 'Only Atlantic connection',
                history: 'Pillars of Hercules (ancient)',
                control: 'Spain/Morocco, UK (Gibraltar)'
            },
            { 
                name: 'Suez Canal', 
                connectsTo: 'Red Sea', 
                width: 0.3,
                length: 193,
                depth: 24,
                annualShips: 19000,
                opened: 1869,
                revenue: '$9.4 billion (2023)',
                significance: 'Asia-Europe shortcut',
                control: 'Egypt'
            },
            { 
                name: 'Dardanelles', 
                connectsTo: 'Black Sea (via Marmara)', 
                width: 1.2,
                narrowest: 1.2,
                length: 61,
                annualShips: 45000,
                significance: 'Black Sea access',
                history: 'Gallipoli Campaign (WW1)',
                control: 'Turkey (Montreux Convention)'
            },
            { 
                name: 'Bosphorus', 
                connectsTo: 'Black Sea (via Marmara)', 
                width: 0.7,
                narrowest: 0.7,
                length: 31,
                depth: 36,
                annualShips: 45000,
                city: 'Istanbul straddles it',
                significance: 'Europe-Asia divide',
                control: 'Turkey'
            },
            { 
                name: 'Strait of Messina', 
                connectsTo: 'Tyrrhenian Sea', 
                width: 3,
                myth: 'Scylla and Charybdis',
                cities: ['Messina (Sicily)', 'Reggio Calabria (Italy)']
            },
            { 
                name: 'Strait of Sicily', 
                connectsTo: 'Eastern Med', 
                width: 145,
                annualShips: 40000,
                migration: 'Major route Africa to Europe'
            }
        ],
        
        majorIslands: [
            { 
                name: 'Sicily', 
                country: 'Italy', 
                area: '25,711 km²',
                population: '5 million',
                cities: ['Palermo', 'Catania', 'Messina'],
                volcano: 'Mount Etna (active)',
                history: 'Greek, Roman, Arab, Norman rule',
                economy: 'Tourism, agriculture, fishing'
            },
            { 
                name: 'Sardinia', 
                country: 'Italy', 
                area: '24,090 km²',
                population: '1.6 million',
                cities: ['Cagliari', 'Sassari'],
                beaches: 'Crystal-clear waters',
                culture: 'Distinct language and identity'
            },
            { 
                name: 'Cyprus', 
                country: 'Cyprus/Turkey (divided)', 
                area: '9,251 km²',
                population: '1.2 million',
                divided: 'Since 1974 Turkish invasion',
                south: 'Republic of Cyprus (EU member)',
                north: 'Turkish Republic of Northern Cyprus (unrecognized)',
                gasFields: 'Aphrodite field - disputed with Turkey'
            },
            { 
                name: 'Corsica', 
                country: 'France', 
                area: '8,680 km²',
                population: '350,000',
                cities: ['Ajaccio', 'Bastia'],
                birthplace: 'Napoleon Bonaparte',
                mountains: 'Highest peaks over 2,700m'
            },
            { 
                name: 'Crete', 
                country: 'Greece', 
                area: '8,336 km²',
                population: '630,000',
                cities: ['Heraklion', 'Chania'],
                history: 'Minoan civilization (oldest in Europe)',
                palace: 'Knossos - legendary labyrinth',
                tourism: 'Major destination'
            },
            { 
                name: 'Mallorca', 
                country: 'Spain', 
                area: '3,640 km²',
                population: '900,000',
                cities: ['Palma'],
                tourism: '15+ million visitors/year',
                beaches: 'World-famous resorts'
            }
        ],
        
        resources: {
            gas: {
                eastMedFields: 'Major discoveries since 2000',
                
                majorFields: [
                    { name: 'Leviathan', country: 'Israel', reserves: '22 tcf', production: 'Since 2019', value: '$20+ billion' },
                    { name: 'Tamar', country: 'Israel', reserves: '11 tcf', production: 'Since 2013' },
                    { name: 'Zohr', country: 'Egypt', reserves: '30 tcf', production: 'Since 2017', description: 'Largest in Med' },
                    { name: 'Aphrodite', country: 'Cyprus/disputed', reserves: '4.5 tcf', status: 'Turkey disputes' },
                    { name: 'Calypso', country: 'Cyprus', reserves: 'Estimated 6-8 tcf', status: 'Exploration' }
                ],
                
                totalReserves: '122 trillion cubic feet',
                impact: 'Transforming energy geopolitics',
                disputes: 'Turkey-Cyprus-Greece tensions',
                pipelines: 'EastMed pipeline planned (controversial)'
            },
            
            oil: {
                production: 'Libya, Egypt offshore fields',
                libya: 'Was 1.6 million bpd (before civil war)',
                egypt: '600,000 bpd',
                potential: 'Significant unexplored areas'
            },
            
            fishing: {
                annualCatch: '1.5 million tonnes',
                value: '$3 billion annually',
                species: ['Bluefin tuna', 'Swordfish', 'Anchovies', 'Sardines', 'Sea bass', 'Sea bream'],
                bluefinTuna: 'Critically endangered - over-fished',
                aquaculture: 'Growing industry - $2 billion',
                overfishing: '90% of stocks overfished',
                deadZones: 'Increasing pollution'
            },
            
            tourism: {
                annualVisitors: '400 million',
                percentGlobal: 30,
                value: '$250 billion annually',
                cruisePassengers: '30 million annually',
                topDestinations: ['Spain', 'Italy', 'Greece', 'Turkey', 'France', 'Croatia'],
                employment: '15 million jobs',
                seasonality: 'Peak June-September',
                covid19Impact: 'Devastated 2020-2021, recovered 2022+'
            }
        },
        
        submarineCables: {
            total: '15+ major cables',
            importance: 'Europe-Asia-Africa connectivity',
            
            keyRoutes: [
                { name: 'SEA-ME-WE 3', route: 'Southeast Asia-Middle East-Western Europe', capacity: '1.28 Tbps' },
                { name: 'SEA-ME-WE 4', route: 'Same, newer', capacity: '1.92 Tbps' },
                { name: 'FLAG Europe-Asia', route: 'UK-Japan via Med', capacity: '10 Gbps' },
                { name: 'AAE-1', route: 'Asia-Africa-Europe', capacity: '40 Tbps', landed: '2017' }
            ],
            
            vulnerability: 'Sabotage risk, earthquake damage',
            repair: 'Specialized cable ships',
            investment: 'Billions in new cables planned'
        },
        
        economicImportance: {
            overview: 'Historic trade route, Suez Canal gateway',
            tradeValue: '$1 trillion annually',
            percentGlobalTrade: 20,
            
            majorPorts: [
                { 
                    name: 'Valencia', 
                    country: 'Spain', 
                    containers: '5.4M TEU',
                    ranking: '#1 Spain, #5 Europe',
                    growth: 'Fastest growing in Europe'
                },
                { 
                    name: 'Piraeus', 
                    country: 'Greece', 
                    containers: '5.1M TEU',
                    ownership: 'Chinese COSCO (majority)',
                    significance: 'China\'s gateway to Europe',
                    beltAndRoad: 'Key BRI port'
                },
                { 
                    name: 'Genoa', 
                    country: 'Italy', 
                    containers: '2.7M TEU',
                    history: 'Historic maritime republic',
                    disaster: '2018 bridge collapse'
                },
                { 
                    name: 'Algeciras', 
                    country: 'Spain', 
                    containers: '4.8M TEU',
                    location: 'Near Gibraltar',
                    transshipment: 'Major hub'
                },
                { 
                    name: 'Port Said', 
                    country: 'Egypt', 
                    containers: '3.8M TEU',
                    location: 'Suez Canal entrance',
                    freeZone: 'Major industrial zone'
                },
                { 
                    name: 'Tanger-Med', 
                    country: 'Morocco', 
                    containers: '7.2M TEU',
                    ranking: '#1 Africa',
                    growth: 'Built from nothing since 2007',
                    automotive: 'Major auto export hub'
                }
            ],
            
            shipping: {
                routes: 'Europe-Asia (Suez), Intra-Med, North Africa-Europe',
                suezTransit: '19,000 ships/year',
                traffic: 'Among world\'s busiest',
                cruises: '$25 billion cruise industry'
            },
            
            tourism: {
                annualVisitors: '400 million',
                value: '$250 billion',
                cruisePassengers: '30 million annually',
                growth: 'Overtourism concerns',
                seasonality: 'Summer peak strains resources',
                employment: '15+ million jobs'
            },
            
            energy: {
                gasExports: 'Israel, Egypt exporting LNG',
                pipelines: 'Multiple to Europe',
                future: 'Could reduce Europe\'s Russia dependence'
            }
        },
        
        geopolitics: {
            strategicImportance: 'Very High',
            conflictLevel: 'Moderate-High',
            
            issues: [
                { 
                    name: 'East Med Gas', 
                    parties: ['Turkey', 'Greece', 'Cyprus', 'Israel', 'Egypt', 'Lebanon'], 
                    description: 'Major gas field disputes',
                    
                    details: {
                        turkeyPosition: 'Claims waters off Cyprus, sends drill ships',
                        cyprusPosition: 'EEZ rights under UNCLOS',
                        greecePosition: 'Supports Cyprus, extends own EEZ',
                        tensions: 'Naval confrontations, drilling standoffs',
                        eastMedForum: 'Israel, Egypt, Cyprus, Greece, Jordan, Palestine, Italy',
                        turkeyExcluded: 'Not invited - major grievance',
                        pipeline: 'EastMed pipeline (Israel-Cyprus-Greece-Italy) - Turkey opposes'
                    }
                },
                { 
                    name: 'Libya Civil War', 
                    parties: ['Turkey', 'Russia', 'EU', 'Egypt', 'UAE'], 
                    description: 'Ongoing instability',
                    
                    details: {
                        divided: 'East (Haftar/Russia/Egypt/UAE) vs West (Tripoli/Turkey/Qatar)',
                        turkeyIntervention: '2020 - sent troops, drones, turned tide',
                        russiaMercenaries: 'Wagner Group fighters',
                        oilControl: 'Libya has Africa\'s largest reserves',
                        migrationRoute: 'Major departure point to Europe',
                        status: 'Fragile ceasefire, elections delayed'
                    }
                },
                { 
                    name: 'Migration Crisis', 
                    parties: ['EU', 'Libya', 'Turkey', 'North Africa'], 
                    description: 'Major migration route to Europe',
                    
                    details: {
                        routes: ['Libya-Italy', 'Turkey-Greece', 'Tunisia-Italy', 'Algeria-Spain'],
                        numbers: '100,000+ attempt crossing annually',
                        deaths: '1,000+ drown each year',
                        libyanCoastGuard: 'EU-funded but accused of abuse',
                        turkeyDeal: '2016 - EU pays Turkey to prevent crossings',
                        controversy: 'Human rights concerns',
                        pushbacks: 'Greece, Italy accused of illegal pushbacks',
                        rescue: 'NGO ships vs government policies'
                    }
                },
                { 
                    name: 'Greece-Turkey EEZ', 
                    parties: ['Greece', 'Turkey'], 
                    description: 'Overlapping maritime claims',
                    
                    details: {
                        dispute: 'Greek islands create EEZ Turkey objects to',
                        turkeyPosition: 'Islands shouldn\'t create EEZ, mainland does',
                        greecePosition: 'UNCLOS gives islands full EEZ',
                        drilling: 'Turkey sent drill ships to disputed areas',
                        navalStandoffs: 'Warships face off regularly',
                        airspaceViolations: 'Daily Turkish jets enter Greek airspace',
                        oilAndGas: 'Potential reserves fuel disputes',
                        natoAllies: 'Both NATO members - complicates alliance'
                    }
                },
                { 
                    name: 'Cyprus Division', 
                    parties: ['Cyprus', 'Turkey', 'Greece'], 
                    description: 'Island divided since 1974',
                    
                    details: {
                        history: '1974 Turkish invasion after Greek Cypriot coup',
                        greenLine: 'UN buffer zone divides island',
                        northCyprus: 'Turkish Republic of Northern Cyprus (only Turkey recognizes)',
                        southCyprus: 'Republic of Cyprus (EU member)',
                        turkishTroops: '30,000+ Turkish soldiers in north',
                        unification: 'Talks failed repeatedly (last major: 2017)',
                        gasDisputes: 'Turkey blocks Cypriot drilling',
                        varosha: 'Ghost town - formerly Cypriot resort'
                    }
                }
            ],
            
            navalPresences: [
                { 
                    country: 'USA', 
                    base: '6th Fleet (Naples, Italy)', 
                    purpose: 'NATO operations, power projection',
                    assets: 'Carrier strike group rotations',
                    personnel: '3,000+',
                    significance: 'Maintaining stability since Cold War'
                },
                { 
                    country: 'Russia', 
                    base: 'Tartus (Syria)', 
                    purpose: 'Only Med naval base',
                    assets: '15+ ships',
                    expansion: 'Upgraded since Syria intervention 2015',
                    significance: 'First permanent Med presence since Cold War'
                },
                { 
                    country: 'France', 
                    base: 'Toulon', 
                    purpose: 'Mediterranean operations',
                    assets: 'Aircraft carrier Charles de Gaulle',
                    significance: 'Traditional Med power'
                },
                { 
                    country: 'Turkey', 
                    base: 'Multiple (Aksaz, Golcuk)', 
                    purpose: 'Regional power projection',
                    growth: 'Rapidly expanding blue-water navy',
                    droneBoats: 'Developing armed USVs',
                    ambitions: 'Challenging Greece, expanding influence'
                },
                { 
                    country: 'Italy', 
                    base: 'Taranto, La Spezia', 
                    purpose: 'NATO operations, border control',
                    assets: 'Aircraft carrier Cavour',
                    role: 'Migration interdiction'
                },
                { 
                    country: 'Greece', 
                    base: 'Souda Bay (Crete)', 
                    purpose: 'Defense, NATO use',
                    modernization: 'Buying French frigates',
                    tensions: 'Regular confrontations with Turkey'
                }
            ],
            
            chinaInfluence: {
                ports: 'Piraeus (Greece) - COSCO owns 67%',
                beltAndRoad: 'Med is key BRI gateway',
                concerns: 'EU worried about Chinese control of infrastructure',
                investments: 'Billions in ports, shipping',
                impact: 'Growing economic leverage'
            }
        },
        
        environment: {
            climate: 'Mediterranean - hot dry summers, mild wet winters',
            waterTemp: '12-28°C seasonal variation',
            salinity: '38 ppt (higher than Atlantic)',
            evaporation: 'Exceeds precipitation + river input',
            
            oceanography: {
                waterExchange: 'Atlantic inflow (surface), Med outflow (deep)',
                turnover: '~100 years for complete water exchange',
                thermohaline: 'Complex circulation driven by density',
                stratification: 'Strong thermocline in summer'
            },
            
            currents: {
                general: 'Counter-clockwise circulation',
                atlanticInflow: 'Surface water through Gibraltar',
                mediterraneanOutflow: 'Dense salty water at depth',
                messinaStraight: 'Strong tidal currents (myth of Scylla/Charybdis)'
            },
            
            pollution: {
                plastic: 'Among most polluted seas - 500,000 tonnes floating',
                sources: ['Rivers (Nile, Po, Rhone)', 'Tourism', 'Shipping', 'Cities'],
                microplastics: 'Highest concentration in world',
                cleanup: 'Multiple initiatives',
                beachPollution: 'Major problem for tourism'
            },
            
            biodiversity: {
                marineSpecies: '17,000 species',
                percentGlobalSpecies: '7% in 0.7% of ocean area',
                endemicSpecies: '28% found nowhere else',
                
                mammals: ['Fin whales', 'Sperm whales', 'Dolphins', 'Monk seals (critically endangered)'],
                fish: ['Bluefin tuna', 'Swordfish', 'Groupers', 'Sea bass', 'Sea bream'],
                turtles: ['Loggerhead', 'Green sea turtle'],
                
                threats: [
                    'Overfishing - 90% stocks overfished',
                    'Pollution - plastic, chemicals',
                    'Warming - species shifting north',
                    'Acidification - coral bleaching',
                    'Invasive species - Suez Canal route',
                    'Habitat loss - coastal development'
                ],
                
                marineLegumes: 'Posidonia meadows declining',
                coralReefs: 'Limited but unique',
                protection: 'Only 6% of Med is protected'
            },
            
            invasiveSpecies: {
                source: 'Red Sea via Suez Canal',
                process: 'Lessepsian migration (named after de Lesseps)',
                count: '700+ Red Sea species entered',
                impact: 'Altering ecosystems, displacing natives',
                examples: ['Lionfish', 'Pufferfish', 'Rabbitfish'],
                acceleration: 'Speeding up with warming'
            },
            
            climateChange: {
                warming: '0.4°C per decade (faster than global)',
                seaLevelRise: '2.5mm/year',
                extremeEvents: 'More intense storms, heatwaves',
                tropicalization: 'Becoming more tropical',
                jellyfish: 'Massive blooms increasing',
                acidification: 'pH dropping',
                future: 'Projected 1.8-3.5°C warming by 2100'
            },
            
            deadZones: {
                occurrence: 'Summer oxygen depletion in deep basins',
                causes: 'Stratification, eutrophication',
                adriaticSea: 'Particular problem due to Po River nutrients',
                impact: 'Fish kills, ecosystem damage'
            },
            
            messianSalinityCrisis: {
                when: '5.96-5.33 million years ago',
                event: 'Med completely dried up',
                cause: 'Gibraltar closed',
                depth: '3-5 km below sea level',
                salt: 'Thick evaporite deposits formed',
                refilling: 'Zanclean flood - catastrophic refill in 2 years',
                evidence: 'Salt layers under seabed'
            }
        },
        
        history: {
            ancientName: 'Mare Internum (Romans)',
            
            civilizations: [
                { name: 'Minoans', period: '3000-1100 BCE', center: 'Crete', legacy: 'First European civilization' },
                { name: 'Phoenicians', period: '1500-300 BCE', center: 'Lebanon/Syria', legacy: 'Maritime trade, alphabet' },
                { name: 'Greeks', period: '800-146 BCE', center: 'Greece', legacy: 'Colonies across Med, democracy, philosophy' },
                { name: 'Carthaginians', period: '814-146 BCE', center: 'Tunisia', legacy: 'Naval power, rival to Rome' },
                { name: 'Romans', period: '753 BCE-476 CE', center: 'Italy', legacy: 'Unified Med - "Mare Nostrum"' },
                { name: 'Byzantine Empire', period: '330-1453 CE', center: 'Constantinople', legacy: 'Eastern Roman continuation' },
                { name: 'Arab Caliphates', period: '632-1258 CE', center: 'Multiple', legacy: 'Islamic Golden Age' },
                { name: 'Venetian Republic', period: '697-1797 CE', center: 'Venice', legacy: 'Maritime trade empire' },
                { name: 'Ottoman Empire', period: '1299-1922 CE', center: 'Turkey', legacy: 'Dominated eastern Med' }
            ],
            
            majorEvents: [
                { year: '480 BCE', event: 'Battle of Salamis', significance: 'Greek victory over Persians' },
                { year: '31 BCE', event: 'Battle of Actium', significance: 'Octavian defeats Antony/Cleopatra' },
                { year: '711 CE', event: 'Muslim Conquest', significance: 'Islam spreads to North Africa, Spain' },
                { year: '1095-1291', event: 'Crusades', significance: 'Christian-Muslim conflicts' },
                { year: '1453', event: 'Fall of Constantinople', significance: 'Ottoman conquest, end of Byzantine Empire' },
                { year: '1571', event: 'Battle of Lepanto', significance: 'Christian victory over Ottomans' },
                { year: '1798', event: 'Napoleon Egypt Campaign', significance: 'Sparked European colonialism' },
                { year: '1869', event: 'Suez Canal Opens', significance: 'Transformed global trade' },
                { year: '1915-16', event: 'Gallipoli Campaign', significance: 'WWI - Allied defeat at Dardanelles' },
                { year: '1940-43', event: 'Mediterranean Campaign', significance: 'WWII naval/air battles' },
                { year: '1956', event: 'Suez Crisis', significance: 'Egypt nationalized canal, UK/France/Israel invaded' },
                { year: '2011', event: 'Arab Spring', significance: 'Revolutions across Med (Tunisia, Libya, Egypt, Syria)' }
            ],
            
            tradeRoutes: {
                ancient: 'Phoenician, Greek, Roman trade networks',
                silkRoadMaritime: 'Spice route terminus',
                venetianTrade: 'Medieval monopoly on Eastern goods',
                modern: 'Suez route, intra-European'
            }
        },
        
        culturalSignificance: {
            birthplaceOfCivilizations: 'Western culture originated here',
            
            religions: {
                christianity: 'Spread from here to Europe',
                islam: 'Dominant in southern/eastern shores',
                judaism: 'Ancient Mediterranean presence',
                conflict: 'Centuries of religious wars'
            },
            
            languages: {
                latin: 'Spread by Roman Empire',
                greek: 'Ancient lingua franca',
                arabic: 'Dominant in south/east',
                romance: 'Italian, Spanish, French descended from Latin'
            },
            
            cuisine: {
                dietName: 'Mediterranean Diet',
                unesco: 'Recognized as Intangible Cultural Heritage',
                staples: ['Olive oil', 'Fish', 'Vegetables', 'Grains', 'Wine'],
                health: 'Among world\'s healthiest diets',
                regional: 'Italian, Greek, Spanish, Turkish, Lebanese cuisines'
            },
            
            art: {
                renaissance: 'Italian city-states',
                architecture: 'Greek, Roman, Byzantine, Moorish',
                literature: 'Homer, Virgil, Dante',
                philosophy: 'Socrates, Plato, Aristotle'
            }
        },
        
        scientificResearch: {
            oceanography: 'Extensively studied',
            marineLife: 'Well-documented but overfished',
            climatology: 'Key to understanding climate change',
            archaeology: 'Underwater ancient shipwrecks',
            geology: 'Tectonically active - earthquakes, volcanoes'
        },
        
        legalFramework: {
            unclos: 'Most countries ratified',
            eezDisputes: 'Multiple unresolved claims',
            fishingAgreements: 'Regional management',
            pollution: 'Barcelona Convention for Protection',
            shipping: 'IMO regulations apply'
        },
        
        funFacts: [
            'Nearly landlocked - water takes ~100 years to exchange with Atlantic',
            'Contains 7% of marine species in only 0.7% of ocean area',
            'Was completely dry 5-6 million years ago (Messinian Salinity Crisis)',
            'Zanclean flood refilled it in just 2 years',
            '30 million cruise passengers annually',
            '21 countries border the Mediterranean',
            'Romans called it "Mare Nostrum" - Our Sea',
            'Only 14 km separates Europe from Africa at Gibraltar',
            '700+ Red Sea species invaded via Suez Canal',
            'Most polluted sea for plastic - 500,000 tonnes floating',
            'Birthplace of democracy (Greece), republic (Rome), monotheistic religions',
            'Over 150 UNESCO World Heritage Sites on its shores',
            'Wine production for 6,000+ years',
            'Olive oil production for 5,000+ years',
            'First naval battle in recorded history (1210 BCE - Egyptians vs Sea Peoples)'
         }
     ]
    },
   
    // ═══════════════════════════════════════════════════════
    // ARABIAN SEA - MASSIVELY EXPANDED
    // ═══════════════════════════════════════════════════════
    {
        id: 'arabian-sea',
        name: 'Arabian Sea',
        parentOcean: 'Indian Ocean',
        parentOceanId: 'indian-ocean',
        
        area: 3862000,
        avgDepth: 2734,
        maxDepth: 4652,
        volume: '9,800,000 km³',
        
        coordinates: [15, 65],
        defaultZoom: 4,
        
        image: 'https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=500',
        backgroundImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1920',
        
        etymology: {
            english: 'Arabian Sea - named after Arabian Peninsula',
            arabic: 'بحر العرب (Bahr al-Arab)',
            sanskrit: 'Sindhu Sagar (Sea of Sindh)',
            ancient: 'Erythraean Sea (Greek) - "Red Sea" confusingly',
            persian: 'دریای عمان (Daryā-ye Omān) - Sea of Oman'
        },
        
        borderingCountries: [
            { 
                name: 'India', 
                coastlineKm: 7516, 
                states: ['Gujarat', 'Maharashtra', 'Goa', 'Karnataka', 'Kerala'],
                cities: ['Mumbai', 'Kochi', 'Mangalore', 'Karwar', 'Porbandar'],
                eez: '2,305,143 km²',
                navy: 'Western Naval Command (Mumbai)',
                ports: ['Mumbai (JNPT)', 'Kandla', 'Cochin', 'Mormugao']
            },
            { 
                name: 'Pakistan', 
                coastlineKm: 1046, 
                cities: ['Karachi', 'Gwadar', 'Ormara'],
                eez: '290,000 km²',
                gwadarPort: 'China-Pakistan Economic Corridor hub',
                navy: 'Pakistan Navy HQ (Karachi)'
            },
            { 
                name: 'Iran', 
                coastlineKm: 2440, 
                cities: ['Chabahar', 'Bandar Abbas'],
                significance: 'Strait of Hormuz access',
                chabaharPort: 'India-funded alternative to Gwadar'
            },
            { 
                name: 'Oman', 
                coastlineKm: 2092, 
                cities: ['Muscat', 'Salalah', 'Duqm', 'Sur'],
                eez: '533,180 km²',
                duqmPort: 'New strategic port',
                salalahPort: 'Major container hub'
            },
            { 
                name: 'Yemen', 
                coastlineKm: 1906, 
                cities: ['Aden', 'Mukalla', 'Socotra'],
                status: 'Civil war since 2014',
                babelMandeb: 'Controls chokepoint',
                socotra: 'Strategic island - UAE presence'
            },
            { 
                name: 'Somalia', 
                coastlineKm: 3025, 
                cities: ['Mogadishu', 'Berbera', 'Bosaso'],
                status: 'Recovering from civil war',
                piracy: 'Was piracy hotspot 2008-2012',
                berberaPort: 'UAE-developed'
            },
            { 
                name: 'Maldives', 
                coastlineKm: 644, 
                islands: 1192,
                atolls: 26,
                population: '530,000',
                tourism: 'Major economy',
                sealevelThreat: 'Could be submerged by 2100'
            },
            { 
                name: 'Lakshadweep (India)', 
                coastlineKm: 132, 
                islands: 36,
                population: '70,000',
                military: 'Indian Navy base',
                strategic: 'Controls Arabian Sea approaches'
            }
        ],
        
        straits: [
            { 
                name: 'Strait of Hormuz', 
                connectsTo: 'Persian Gulf', 
                width: 54,
                narrowest: 33,
                depth: 60,
                annualShips: 17000,
                oilBarrels: 21000000,
                percentWorldOil: 21,
                percentWorldLNG: 35,
                significance: 'World\'s most important chokepoint',
                iranControl: 'Iran controls northern side',
                omanControl: 'Oman controls southern side',
                uaeAccess: 'UAE ports inside strait',
                tensions: 'Iran closure threats regular',
                
                iranCapabilities: {
                    missiles: 'Anti-ship missiles covering strait',
                    mines: '5,000+ available',
                    boats: 'IRGC fast attack boats',
                    submarines: 'Kilo-class submarines',
                    drones: 'Kamikaze drones'
                },
                
                closureImpact: {
                    oilSpike: '100%+ price increase immediately',
                    recession: 'Global recession likely',
                    alternatives: 'Pipelines handle fraction of capacity'
                }
            },
            { 
                name: 'Bab el-Mandeb', 
                connectsTo: 'Red Sea', 
                width: 26,
                depth: 310,
                annualShips: 25000,
                oilBarrels: 6200000,
                percentGlobalTrade: 12,
                meaning: 'Gate of Tears (Arabic)',
                significance: 'Red Sea/Suez access',
                
                houthiCrisis2024: {
                    start: 'November 2023',
                    attacksCount: '50+ ships attacked',
                    weapons: 'Missiles, drones, boats',
                    impact: 'Major shipping rerouted to Cape',
                    usResponse: 'Operation Prosperity Guardian',
                    insurance: 'Up 1000%+'
                },
                
                militaryBases: {
                    djibouti: ['USA (Camp Lemonnier)', 'China', 'France', 'Japan', 'Italy'],
                    yemen: 'Houthi-controlled north coast'
                }
            },
            { 
                name: 'Eight Degree Channel', 
                connectsTo: 'Laccadive Sea', 
                width: 120,
                between: 'Minicoy (India) - Maldives',
                depth: 2000,
                significance: 'Submarine transit route'
            },
            { 
                name: 'Nine Degree Channel', 
                connectsTo: 'Laccadive Sea', 
                width: 180,
                between: 'Lakshadweep islands',
                depth: 1800,
                significance: 'Indian Navy patrol zone'
            }
        ],
        
        majorIslands: [
            { 
                name: 'Socotra', 
                country: 'Yemen', 
                area: '3,625 km²',
                population: '60,000',
                nickname: 'Galapagos of Indian Ocean',
                uniqueSpecies: 700,
                dragonBloodTree: 'Iconic endemic tree',
                unesco: 'World Heritage Site',
                uaePresence: 'Military base (controversial)',
                biodiversity: '37% of plant species found nowhere else'
            },
            { 
                name: 'Masirah', 
                country: 'Oman', 
                area: '649 km²',
                population: '12,000',
                military: 'RAF base during Cold War',
                turtles: 'Major turtle nesting site'
            },
            { 
                name: 'Lakshadweep', 
                country: 'India', 
                area: '32 km²',
                islands: 36,
                inhabited: 10,
                population: '70,000',
                religion: 'Muslim majority',
                economy: 'Fishing, tourism',
                military: 'INS Dweeprakshak naval base',
                strategic: 'Controls sea lanes'
            },
            { 
                name: 'Astola Island', 
                country: 'Pakistan', 
                area: '6.7 km²',
                population: 'Uninhabited',
                status: 'Marine protected area',
                turtles: 'Green turtle nesting'
            },
            { 
                name: 'Maldives', 
                country: 'Maldives', 
                type: 'Island nation',
                islands: 1192,
                inhabited: 200,
                area: '298 km² (land)',
                avgElevation: '1.5 meters',
                threat: 'Climate change - could disappear by 2100',
                tourism: '1.7 million visitors/year',
                gdp: '$5.7 billion'
            }
        ],
        
        monsoons: {
            overview: 'Monsoon-driven sea - dramatic seasonal changes',
            
            southwest: {
                period: 'June-September',
                winds: 'Blow from Africa to India',
                strength: 'Very strong - 50+ knots possible',
                seas: 'Rough - 6+ meter waves common',
                upwelling: 'Massive upwelling visible from space',
                fishing: 'Difficult - boats stay in port',
                shipping: 'Delays common',
                rainfall: 'Brings Indian monsoon rains'
            },
            
            northeast: {
                period: 'December-March',
                winds: 'Blow from India to Africa',
                strength: 'Moderate',
                seas: 'Calm - ideal for shipping',
                fishing: 'Peak season',
                ancientTrade: 'Dhow trade relied on this'
            },
            
            transition: {
                periods: 'April-May, October-November',
                conditions: 'Variable winds, calm seas',
                cyclones: 'Peak cyclone season (October-November)'
            },
            
            upwelling: {
                location: 'Oman/Yemen coast',
                cause: 'Southwest monsoon pushes surface water away',
                effect: 'Cold nutrient-rich water rises',
                visible: 'From space - distinct color change',
                productivity: 'Creates one of most productive fisheries',
                deadZone: 'Also creates world\'s largest open-ocean dead zone'
            },
            
            historicTrade: {
                ancientRoute: 'Dhow trade 5,000+ years',
                timing: 'Traders waited for monsoon reversal',
                routes: ['India-Arabia', 'Africa-India', 'Arabia-Africa'],
                goods: ['Spices', 'Silk', 'Gold', 'Ivory', 'Slaves']
            }
        },
        
        resources: {
            oil: {
                production: 'Limited in Arabian Sea itself',
                transitRoute: '20+ million barrels/day from Gulf',
                omanFields: 'Some offshore production',
                indiaExploration: 'Ongoing offshore exploration'
            },
            
            gas: {
                iranSouthPars: 'World\'s largest gas field (shared with Qatar)',
                omanLNG: 'Major LNG exporter',
                indiaKrishnaGodavari: 'Major gas basin (Bay of Bengal side mainly)'
            },
            
            fishing: {
                annualCatch: '4.5 million tonnes',
                value: '$8 billion annually',
                keySpecies: ['Tuna', 'Sardines', 'Mackerel', 'Shrimp', 'Squid', 'Kingfish'],
                countries: ['India', 'Pakistan', 'Oman', 'Yemen', 'Iran'],
                employment: '4+ million fishers',
                artisanal: '90% small-scale fishing',
                
                tunaFishing: {
                    species: ['Yellowfin', 'Skipjack', 'Bigeye'],
                    value: '$1 billion+',
                    concerns: 'Overfishing, foreign fleets'
                },
                
                issues: [
                    'Overfishing by industrial fleets',
                    'Illegal fishing by foreign vessels',
                    'Climate change affecting stocks',
                    'Dead zone expansion'
                ]
            },
            
            minerals: {
                seabed: 'Polymetallic nodules present',
                status: 'Unexplored commercially',
                indiaExploration: 'India has ISA exploration license'
            }
        },
        
        economicImportance: {
            overview: 'Critical for global oil transport',
            tradeValue: '$1.5 trillion annually',
            percentGlobalOil: 25,
            percentAsianOil: 60,
            
            oilTransit: {
                fromGulf: 'Saudi Arabia, Iraq, UAE, Kuwait, Iran',
                toAsia: 'China, Japan, South Korea, India',
                dailyBarrels: '20+ million',
                tankerTraffic: 'VLCCs and ULCCs',
                routeLength: 'Hormuz to Singapore: 6,000 km'
            },
            
            majorPorts: [
                { 
                    name: 'Mumbai (JNPT)', 
                    country: 'India', 
                    containers: '5.1M TEU',
                    ranking: 'India\'s largest',
                    trade: '$120 billion',
                    expansion: 'JNPT-4 under construction',
                    significance: 'India\'s commercial gateway'
                },
                { 
                    name: 'Karachi', 
                    country: 'Pakistan', 
                    containers: '2.2M TEU',
                    trade: '$40 billion',
                    ranking: 'Pakistan largest',
                    issues: 'Congestion, infrastructure',
                    navy: 'Pakistan Navy headquarters'
                },
                { 
                    name: 'Gwadar', 
                    country: 'Pakistan', 
                    containers: 'Limited (growing)',
                    investment: '$1.6 billion (Chinese)',
                    status: 'CPEC hub - under development',
                    operator: 'China Overseas Port Holding',
                    controversy: 'India concerned about Chinese presence',
                    future: 'Could rival Dubai if fully developed'
                },
                { 
                    name: 'Chabahar', 
                    country: 'Iran', 
                    investment: '$500 million (India)',
                    status: 'India-funded alternative to Gwadar',
                    purpose: 'Bypass Pakistan to reach Afghanistan/Central Asia',
                    sanctions: 'US granted India waiver',
                    significance: 'India\'s counter to CPEC'
                },
                { 
                    name: 'Salalah', 
                    country: 'Oman', 
                    containers: '4M TEU',
                    ranking: 'Major transshipment hub',
                    location: 'Outside Hormuz strait risk'
                },
                { 
                    name: 'Duqm', 
                    country: 'Oman', 
                    status: 'New strategic port',
                    investment: '$10 billion (Chinese)',
                    features: 'Dry dock, refinery, industrial zone',
                    military: 'UK, US naval access agreements',
                    significance: 'Outside Hormuz chokepoint'
                },
                { 
                    name: 'Kochi', 
                    country: 'India', 
                    containers: '0.7M TEU',
                    vallarpadam: 'ICTT terminal',
                    navy: 'Southern Naval Command'
                }
            ],
            
            fishing: {
                annualCatch: '4.5 million tonnes',
                keySpecies: ['Tuna', 'Sardines', 'Mackerel', 'Shrimp'],
                countries: ['India', 'Pakistan', 'Oman', 'Yemen'],
                value: '$8 billion annually',
                employment: '4+ million fishers'
            },
            
            tourism: {
                maldives: '1.7 million visitors, $4 billion revenue',
                goa: '8 million visitors (domestic + international)',
                kerala: 'Backwaters tourism',
                oman: 'Growing destination',
                growth: '10%+ annually (pre-COVID)'
            }
        },
        
        geopolitics: {
            strategicImportance: 'Critical',
            tensionLevel: 'High',
            greatPowerCompetition: 'India-China rivalry focal point',
            
            issues: [
                { 
                    name: 'Strait of Hormuz', 
                    parties: ['Iran', 'USA', 'Gulf States'], 
                    description: 'Critical oil chokepoint, Iran closure threats',
                    
                    details: {
                        iranPosition: 'Can close if attacked or sanctioned',
                        usPosition: 'Freedom of navigation non-negotiable',
                        gulfStates: 'Terrified of closure',
                        incidents: ['2019 tanker attacks', '2019 drone attack on Aramco', '2021 ship seizures'],
                        usPresence: '5th Fleet (Bahrain)',
                        iranCapability: 'Missiles, mines, boats, drones'
                    }
                },
                { 
                    name: 'Yemen Civil War', 
                    parties: ['Saudi Arabia', 'Iran', 'UAE', 'Houthis', 'USA', 'UK'], 
                    description: 'Houthi attacks on ships',
                    
                    details: {
                        start: '2014 - Houthi takeover',
                        saudiIntervention: '2015 - ongoing',
                        iranSupport: 'Weapons to Houthis',
                        houthiAttacks: 'Missiles, drones on ships and Saudi Arabia',
                        redSeaCrisis: '2023-2024 - major shipping rerouted',
                        humanitarian: 'World\'s worst humanitarian crisis',
                        casualties: '150,000+ dead'
                    }
                },
                { 
                    name: 'CPEC/Gwadar', 
                    parties: ['China', 'Pakistan', 'India'], 
                    description: 'Chinese port development concerns India',
                    
                    details: {
                        investment: '$62 billion China-Pakistan corridor',
                        gwadarPort: 'China 40-year lease',
                        indiaFears: 'Military base potential',
                        debtTrap: 'Pakistan debt concerns',
                        chinaGoal: 'Bypass Malacca Strait',
                        oilPipeline: 'Planned from Gwadar to Xinjiang',
                        security: 'Baloch insurgency attacks'
                    }
                },
                { 
                    name: 'String of Pearls', 
                    parties: ['China', 'India'], 
                    description: 'Chinese port investments encircling India',
                    
                    ports: [
                        { name: 'Gwadar', country: 'Pakistan', status: 'Operational', chineseInvestment: '$1.6 billion' },
                        { name: 'Hambantota', country: 'Sri Lanka', status: '99-year lease', chineseInvestment: '$1.4 billion' },
                        { name: 'Chittagong', country: 'Bangladesh', status: 'Chinese investment' },
                        { name: 'Kyaukpyu', country: 'Myanmar', status: 'Under development', chineseInvestment: '$10 billion' },
                        { name: 'Djibouti', country: 'Djibouti', status: 'Chinese naval base', significance: 'First overseas base' }
                    ],
                    
                    indiaResponse: 'SAGAR policy, Quad, base expansion'
                },
                { 
                    name: 'Piracy', 
                    parties: ['Somalia', 'International'], 
                    description: 'Reduced but still present',
                    
                    history: {
                        peak: '2008-2012 - Somali pirates',
                        attacks: '237 attacks in 2011 alone',
                        ransom: '$400 million paid 2005-2012',
                        response: ['EU NAVFOR', 'Combined Maritime Forces', 'Chinese patrols'],
                        current: 'Rare but not eliminated',
                        2024: 'Some resurgence due to reduced patrols'
                    }
                }
            ],
            
            navalPresences: [
                { 
                    country: 'USA', 
                    base: '5th Fleet HQ (Bahrain)', 
                    purpose: 'Persian Gulf operations',
                    assets: ['Carrier strike group', '30+ ships', '20,000 personnel'],
                    operations: 'Iran containment, freedom of navigation',
                    facilities: ['Bahrain', 'Diego Garcia', 'Djibouti']
                },
                { 
                    country: 'India', 
                    base: 'INS Kadamba (Karwar), Lakshadweep, A&N', 
                    purpose: 'Regional dominance, net security provider',
                    assets: ['Aircraft carrier INS Vikramaditya', 'Nuclear submarines', '140+ ships'],
                    goal: 'Blue water navy, Indian Ocean control',
                    exercises: 'Malabar (with US, Japan, Australia)',
                    expansion: 'Building 3rd aircraft carrier'
                },
                { 
                    country: 'China', 
                    base: 'Djibouti (support base)', 
                    purpose: 'First overseas base, protect CPEC, anti-piracy',
                    assets: ['2,000 personnel', 'Naval vessels rotate'],
                    gwadar: 'Potential future base',
                    strategy: 'Gradually expanding Indian Ocean presence',
                    submarines: 'Regular deployments, concern for India'
                },
                { 
                    country: 'Pakistan', 
                    base: 'Karachi, Ormara, Gwadar', 
                    purpose: 'Coastal defense, potential Chinese coordination',
                    assets: ['Submarines (Chinese-built)', 'Frigates'],
                    chineseSupport: 'New ships being delivered'
                },
                { 
                    country: 'France', 
                    base: 'Abu Dhabi, Djibouti, Reunion', 
                    purpose: 'Regional presence, ally support',
                    assets: ['Carrier rotations', 'Submarines']
                },
                { 
                    country: 'UK', 
                    base: 'Duqm (Oman) - access agreement', 
                    purpose: 'East of Suez return',
                    HMS: 'Queen Elizabeth carrier visits'
                },
                { 
                    country: 'Japan', 
                    base: 'Djibouti', 
                    purpose: 'Anti-piracy, only overseas base',
                    assets: ['Destroyers', 'P-3C patrol aircraft']
                }
            ],
            
            indiaStrategy: {
                sagar: 'Security and Growth for All in Region',
                goal: 'Net security provider in Indian Ocean',
                bases: 'Expanding Andaman & Nicobar, Lakshadweep, Karwar',
                concerns: 'Chinese String of Pearls encirclement',
                partnerships: ['QUAD (USA, Japan, Australia)', 'France', 'Oman', 'Seychelles', 'Mauritius'],
                infrastructure: 'Chabahar port (Iran), Assumption Island (Seychelles - stalled)',
                exercises: ['Malabar', 'SIMBEX', 'AUSINDEX', 'Varuna'],
                submarines: 'Building 24 submarines over next 20 years'
            },
            
            chinaStrategy: {
                goal: 'Protect sea lanes, reduce Malacca dependence',
                cpec: 'Oil pipeline from Gwadar to avoid Malacca',
                stringOfPearls: 'Port investments around India',
                djibouti: 'First overseas naval base (2017)',
                concern: 'US could block Malacca in conflict',
                future: 'Likely more bases in Indian Ocean'
            }
        },
        
        environment: {
            climate: 'Tropical monsoon',
            waterTemp: '22-30°C (seasonal)',
            salinity: '35-37 ppt',
            
            monsoonImpact: {
                dramatic: 'Complete reversal of currents twice yearly',
                upwelling: 'One of world\'s most intense',
                productivity: 'Varies 10x between seasons'
            },
            
            deadZone: {
                area: '165,000 km²',
                ranking: 'One of world\'s largest open-ocean dead zones',
                cause: 'Monsoon-driven upwelling depletes oxygen',
                depth: '150-1000m depth',
                impact: 'No fish in affected zone',
                oxygenLevel: 'Nearly zero in core',
                growth: 'Expanding due to climate change',
                discovery: 'Confirmed by research in 2000s'
            },
            
            cyclones: {
                season: 'Pre-monsoon (April-June), Post-monsoon (October-December)',
                frequency: '3-4 cyclones/year',
                intensity: 'Increasing due to warming',
                
                recentMajor: [
                    { name: 'Cyclone Tauktae', year: 2021, category: 'Extremely Severe', impact: 'Gujarat, Mumbai' },
                    { name: 'Cyclone Amphan', year: 2020, category: 'Super Cyclonic', damage: '$13 billion' },
                    { name: 'Cyclone Gonu', year: 2007, category: 'Super Cyclonic', impact: 'Oman, Iran' }
                ],
                
                warming: 'Arabian Sea warming faster than global average',
                concern: 'More intense, rapid intensification'
            },
            
            biodiversity: {
                marineSpecies: '5,000+ species',
                
                mammals: ['Dugongs', 'Dolphins', 'Whales (Blue, Humpback)', 'Sperm whales'],
                turtles: ['Green turtle', 'Hawksbill', 'Olive ridley', 'Loggerhead'],
                fish: ['Tuna', 'Sardines', 'Kingfish', 'Pomfret', 'Sharks'],
                
                coralReefs: {
                    locations: ['Lakshadweep', 'Gulf of Kutch', 'Maldives', 'Oman coast'],
                    status: 'Under threat from warming',
                    bleaching: 'Major events in 2016, 2020'
                },
                
                socotra: {
                    uniqueSpecies: 700,
                    endemic: '37% of plants found nowhere else',
                    nickname: 'Galapagos of Indian Ocean',
                    dragonBloodTree: 'Iconic umbrella-shaped tree',
                    threats: 'Climate change, development, conflict'
                },
                
                threats: [
                    'Overfishing - major stocks declining',
                    'Plastic pollution - significant',
                    'Warming - 1.5°C since 1950',
                    'Dead zone expansion',
                    'Coral bleaching',
                    'Shipping pollution'
                ]
            },
            
            pollution: {
                plastic: 'Significant - river input from India, Pakistan',
                shipping: 'Oil spills, ballast water',
                sewage: 'Coastal cities discharge',
                oilSpills: 'Risk from tanker traffic',
                microplastics: 'Present throughout'
            },
            
            climateChange: {
                warming: '1.5°C since 1950 (faster than global)',
                seaLevel: '3mm/year rise',
                cyclones: 'More intense, rapid intensification',
                monsoon: 'Becoming more variable',
                maldives: 'Could be submerged by 2100',
                deadZone: 'Expanding'
            }
        },
        
        history: {
            ancientTrade: {
                age: '5,000+ years',
                routes: ['Indus Valley to Mesopotamia', 'India-Arabia', 'Africa-India'],
                monsoons: 'Ancient sailors used monsoon winds',
                goods: ['Spices', 'Silk', 'Gold', 'Ivory', 'Pearls', 'Incense'],
                hippalus: 'Greek who documented monsoon sailing (1st century CE)'
            },
            
            arabTrade: {
                period: '7th-15th century',
                dhows: 'Traditional Arab sailing vessels',
                routes: 'Dominated Indian Ocean trade',
                spread: 'Islam spread via trade routes',
                cities: ['Aden', 'Muscat', 'Hormuz', 'Mogadishu']
            },
            
            portuguese: {
                arrival: '1498 - Vasco da Gama',
                control: 'Dominated 1500-1600',
                bases: ['Goa', 'Hormuz', 'Muscat', 'Diu'],
                violence: 'Brutal control of trade',
                decline: 'Defeated by Omanis, Dutch, British'
            },
            
            british: {
                arrival: 'East India Company 1600s',
                control: '1700s-1947',
                bombay: 'Major base from 1661',
                aden: 'Colony 1839-1967',
                gulf: 'Trucial States (now UAE)',
                decline: 'Post-WWII withdrawal'
            },
            
            coldWar: {
                soviet: 'Naval base in Aden (South Yemen)',
                us: 'Diego Garcia base (1970s)',
                rivalry: 'Indian Ocean competition',
                india: 'Non-aligned but leaned Soviet'
            },
            
            modern: {
                gulfWars: '1991, 2003 - major naval operations',
                piracy: '2008-2012 Somali piracy crisis',
                terrorism: 'USS Cole bombing 2000',
                indiaRise: 'Expanding naval presence',
                chinaArrival: 'Djibouti base 2017'
            }
        },
        
        culturalSignificance: {
            dhowTradition: 'Traditional sailing continues',
            fishing: 'Livelihoods for millions',
            pilgrimage: 'Hajj sea route historically',
            spiceRoute: 'Shaped global cuisine',
            religion: 'Islam spread via sea routes',
            colonialism: 'Shaped modern borders'
        },
        
        scientificResearch: {
            oceanography: 'Monsoon studies crucial',
            climateScience: 'Indian Ocean Dipole research',
            marineLife: 'Dead zone studies',
            geology: 'Plate tectonics research',
            archaeology: 'Underwater ancient sites'
        },
        
        funFacts: [
            '20% of global oil passes through the Strait of Hormuz',
            'Summer monsoon creates massive upwelling visible from space',
            'Ancient trade routes used for 5,000+ years (Indus Valley to Mesopotamia)',
            'Contains one of world\'s largest ocean dead zones (165,000 km²)',
            'Socotra island has 700 species found nowhere else on Earth',
            'First named by ancient Greeks as "Erythraean Sea"',
            'Dhow sailing tradition continues 2,000+ years',
            'Monsoon winds reverse completely twice yearly',
            'Cyclones intensifying faster than anywhere on Earth',
            'Maldives may be submerged by 2100 due to sea level rise',
            'China\'s first overseas military base is in Djibouti (2017)',
            '4 million fishers depend on Arabian Sea for livelihood'
        ]
    },

    // ═══════════════════════════════════════════════════════
    // CARIBBEAN SEA - MASSIVELY EXPANDED
    // ═══════════════════════════════════════════════════════
    {
        id: 'caribbean-sea',
        name: 'Caribbean Sea',
        parentOcean: 'Atlantic Ocean',
        parentOceanId: 'atlantic-ocean',
        
        area: 2754000,
        avgDepth: 2200,
        maxDepth: 7686,
        volume: '6,860,000 km³',
        
        coordinates: [15, -75],
        defaultZoom: 4,
        
        image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=500',
        backgroundImage: 'https://images.unsplash.com/photo-1548574505-5e239809ee19?w=1920',
        
        etymology: {
            origin: 'Named after Carib people',
            spanish: 'Mar Caribe',
            indigenous: 'Kalinago/Carib people - original inhabitants',
            otherNames: 'Antillean Sea, Americas Mediterranean'
        },
        
        borderingCountries: [
            { 
                name: 'Mexico', 
                coastlineKm: 1100, 
                states: ['Quintana Roo', 'Yucatan'],
                cities: ['Cancun', 'Playa del Carmen', 'Cozumel', 'Chetumal'],
                tourism: '12 million visitors/year to Cancun area',
                reefs: 'Mesoamerican Barrier Reef'
            },
            { 
                name: 'Belize', 
                coastlineKm: 386, 
                cities: ['Belize City', 'San Pedro'],
                blueHole: 'Great Blue Hole - famous dive site',
                reef: 'Belize Barrier Reef (UNESCO)',
                tourism: 'Major economy'
            },
            { 
                name: 'Guatemala', 
                coastlineKm: 148, 
                cities: ['Puerto Barrios', 'Livingston'],
                access: 'Limited Caribbean coast'
            },
            { 
                name: 'Honduras', 
                coastlineKm: 644, 
                cities: ['La Ceiba', 'Puerto Cortes'],
                bayIslands: 'Roatan - major dive destination',
                shipping: 'Puerto Cortes - largest Central American port'
            },
            { 
                name: 'Nicaragua', 
                coastlineKm: 910, 
                cities: ['Bluefields', 'Puerto Cabezas'],
                mosquitoCoast: 'Remote, indigenous population',
                canal: 'Proposed Nicaragua Canal (stalled)'
            },
            { 
                name: 'Costa Rica', 
                coastlineKm: 212, 
                cities: ['Limon', 'Puerto Viejo'],
                tourism: 'Ecotourism focus'
            },
            { 
                name: 'Panama', 
                coastlineKm: 1290, 
                cities: ['Colon', 'Bocas del Toro'],
                canal: 'Panama Canal - game changer',
                colon: 'Major free trade zone'
            },
            { 
                name: 'Colombia', 
                coastlineKm: 1600, 
                cities: ['Cartagena', 'Barranquilla', 'Santa Marta'],
                cartagena: 'UNESCO World Heritage City',
                sanAndres: 'Colombian islands near Nicaragua'
            },
            { 
                name: 'Venezuela', 
                coastlineKm: 2800, 
                cities: ['Caracas (inland)', 'La Guaira', 'Maracaibo'],
                islands: ['Margarita Island', 'Los Roques'],
                oil: 'Major oil exporter',
                crisis: 'Economic/political collapse since 2014'
            }
        ],
        
        islandNations: [
            { 
                name: 'Cuba', 
                area: '109,884 km²',
                population: '11.3 million',
                capital: 'Havana',
                system: 'Communist since 1959',
                embargo: 'US embargo since 1962',
                tourism: 'Growing despite sanctions',
                guantanamo: 'US naval base',
                economy: 'Tourism, sugar, nickel, cigars'
            },
            { 
                name: 'Jamaica', 
                area: '10,991 km²',
                population: '2.9 million',
                capital: 'Kingston',
                economy: 'Tourism, bauxite, remittances',
                culture: 'Reggae, Bob Marley',
                problems: 'Gang violence, poverty'
            },
            { 
                name: 'Haiti', 
                area: '27,750 km²',
                population: '11.4 million',
                capital: 'Port-au-Prince',
                status: 'Poorest country in Western Hemisphere',
                crises: ['2010 earthquake (300,000 dead)', '2021 assassination', 'Gang control'],
                history: 'First Black republic (1804)'
            },
            { 
                name: 'Dominican Republic', 
                area: '48,671 km²',
                population: '10.9 million',
                capital: 'Santo Domingo',
                economy: 'Tourism, free trade zones, remittances',
                tourism: '7 million visitors/year',
                contrast: 'Stark difference from Haiti (same island)'
            },
            { 
                name: 'Puerto Rico (US)', 
                area: '9,104 km²',
                population: '3.2 million',
                capital: 'San Juan',
                status: 'US unincorporated territory',
                debt: '$72 billion debt crisis',
                hurricane: 'Maria 2017 devastated island',
                future: 'Statehood debate ongoing'
            },
            { 
                name: 'Trinidad and Tobago', 
                area: '5,131 km²',
                population: '1.4 million',
                capital: 'Port of Spain',
                economy: 'Oil/gas (Caribbean\'s largest producer)',
                culture: 'Carnival, calypso, steel drums',
                diversity: 'Indian, African, European mix'
            },
            { 
                name: 'Bahamas', 
                area: '13,880 km²',
                population: '400,000',
                capital: 'Nassau',
                islands: 700,
                economy: 'Tourism, offshore banking',
                atlantis: 'Major resort destination',
                proximity: '80 km from Florida'
            }
        ],
        
        europeanTerritories: [
            { name: 'US Virgin Islands', status: 'US unincorporated territory', islands: 'St. Thomas, St. John, St. Croix' },
            { name: 'British Virgin Islands', status: 'UK overseas territory', islands: 'Tortola, Virgin Gorda' },
            { name: 'Cayman Islands', status: 'UK overseas territory', economy: 'Offshore banking, #5 financial center globally' },
            { name: 'Turks and Caicos', status: 'UK overseas territory', economy: 'Tourism, offshore banking' },
            { name: 'Guadeloupe', status: 'French overseas department', economy: 'Tourism, agriculture' },
            { name: 'Martinique', status: 'French overseas department', economy: 'Tourism, rum, bananas' },
            { name: 'Saint Martin/Sint Maarten', status: 'Split French/Dutch', unique: 'Smallest island shared by 2 nations' },
            { name: 'Aruba', status: 'Dutch constituent country', economy: 'Tourism, oil refining' },
            { name: 'Curaçao', status: 'Dutch constituent country', economy: 'Tourism, oil refining, offshore banking' },
            { name: 'Bonaire', status: 'Dutch special municipality', diving: 'World-class dive destination' }
        ],
        
        straits: [
            { 
                name: 'Panama Canal', 
                connectsTo: 'Pacific Ocean', 
                width: 0.15,
                length: 82,
                depth: 12.8,
                annualShips: 14000,
                revenue: '$4.3 billion (2023)',
                opened: 1869,
                expanded: 2016,
                significance: 'Saves 8,000 miles vs Cape Horn',
                
                drought2023: {
                    cause: 'El Niño + climate change',
                    impact: 'Daily transits cut from 36 to 18',
                    waitTime: '20+ days',
                    auctionPrice: '$500,000+ for priority transit',
                    economic: 'Global supply chain disruption'
                }
            },
            { 
                name: 'Yucatan Channel', 
                connectsTo: 'Gulf of Mexico', 
                width: 217,
                depth: 2000,
                annualShips: 75000,
                loopCurrent: 'Generates Loop Current into Gulf',
                significance: 'Gulf-Caribbean connection'
            },
            { 
                name: 'Windward Passage', 
                connectsTo: 'Atlantic Ocean', 
                width: 80,
                depth: 1700,
                annualShips: 15000,
                between: 'Cuba and Haiti',
                significance: 'Major shipping lane',
                drugTrafficking: 'Smuggling route'
            },
            { 
                name: 'Mona Passage', 
                connectsTo: 'Atlantic Ocean', 
                width: 120,
                between: 'Dominican Republic and Puerto Rico',
                annualShips: 10000,
                migration: 'Dangerous migrant crossing route'
            }
        ],
        
        hurricanes: {
            season: 'June 1 - November 30',
            peak: 'August-October',
            formation: 'Warm waters (26°C+) fuel development',
            
            statistics: {
                annualNamed: 12,
                annualHurricanes: 6,
                annualMajor: 3,
                warmingEffect: 'Intensifying and slowing down'
            },
            
            deadliestEver: [
                { name: 'Great Hurricane of 1780', year: 1780, deaths: 22000, note: 'Deadliest Atlantic hurricane ever' },
                { name: 'Hurricane Mitch', year: 1998, deaths: 11000, location: 'Honduras, Nicaragua' },
                { name: 'Hurricane Maria', year: 2017, deaths: 3000, location: 'Puerto Rico', cost: '$90 billion' },
                { name: 'Hurricane Katrina', year: 2005, deaths: 1833, location: 'Gulf Coast', cost: '$125 billion' }
            ],
            
            recentMajor: [
                { name: 'Hurricane Irma', year: 2017, category: 5, record: '185 mph for 37 hours', path: 'Barbuda to Florida' },
                { name: 'Hurricane Maria', year: 2017, category: 5, impact: 'Puerto Rico devastated', death: '~3,000' },
                { name: 'Hurricane Dorian', year: 2019, category: 5, impact: 'Bahamas devastated', wind: '185 mph' },
                { name: 'Hurricane Beryl', year: 2024, category: 5, record: 'Earliest Cat 5 in history', impact: 'Grenada, Jamaica' }
            ],
            
            saffirSimpsonScale: [
                { category: 1, winds: '74-95 mph', damage: 'Minimal' },
                { category: 2, winds: '96-110 mph', damage: 'Moderate' },
                { category: 3, winds: '111-129 mph', damage: 'Extensive' },
                { category: 4, winds: '130-156 mph', damage: 'Extreme' },
                { category: 5, winds: '157+ mph', damage: 'Catastrophic' }
            ],
            
            climateChange: {
                intensification: 'More Category 4-5 storms',
                rapidIntensification: 'More common - storms strengthen quickly',
                slowdown: 'Moving slower - more rain damage',
                wetter: '10-15% more precipitation',
                seaLevel: 'Higher storm surge base'
            },
            
            preparation: {
                earlyWarning: 'National Hurricane Center (Miami)',
                satellites: 'Constant monitoring',
                hunterAircraft: 'NOAA Hurricane Hunters',
                evacuation: 'Millions evacuate annually'
            }
        },
        
        biodiversity: {
            coralReefs: {
                mesoamericanReef: {
                    name: 'Mesoamerican Barrier Reef',
                    length: '1,000 km',
                    countries: ['Mexico', 'Belize', 'Guatemala', 'Honduras'],
                    ranking: 'Second largest barrier reef in world',
                    status: 'UNESCO World Heritage Site',
                    bleaching: 'Significant events 2015, 2019, 2023'
                },
                
                overallHealth: {
                    coralCover: 'Declined from 50% to 10% since 1970s',
                    threats: ['Bleaching', 'Disease', 'Pollution', 'Overfishing', 'Sargassum'],
                    recovery: 'Some areas showing improvement',
                    protection: '25% now in marine protected areas'
                }
            },
            
            marineLife: {
                species: '9% of world\'s coral reefs',
                fishSpecies: '1,400+ species',
                sharks: ['Tiger shark', 'Caribbean reef shark', 'Nurse shark', 'Hammerhead'],
                turtles: ['Green', 'Hawksbill', 'Loggerhead', 'Leatherback'],
                mammals: ['Dolphins', 'Manatees', 'Sperm whales', 'Humpback whales'],
                rays: ['Manta rays', 'Eagle rays', 'Stingrays']
            },
            
            sargassumCrisis: {
                what: 'Massive seaweed blooms since 2011',
                cause: 'Nutrient runoff + warming',
                impact: 'Beaches covered, tourism hit, wildlife harmed',
                hydrogen: 'Releases toxic hydrogen sulfide when rotting',
                belt: 'Great Atlantic Sargassum Belt - 5,000 miles long',
                cost: '$120 million annually in cleanup',
                growing: 'Worsening each year'
            },
            
            fishingIssues: {
                overfishing: '60% of fisheries overexploited',
                lionfish: 'Invasive species devastating reefs',
                conch: 'Queen conch severely depleted',
                lobster: 'Spiny lobster populations declining',
                sharks: '80% decline in shark populations'
            },
            
            conservation: {
                marineParks: '600+ MPAs established',
                coralRestoration: 'Active programs in many countries',
                mangroves: 'Protection efforts increasing',
                lionfish: 'Hunting programs, promoting as food',
                challenges: 'Funding, enforcement, climate'
            }
        },
        
        economicImportance: {
            overview: 'Panama Canal gateway, tourism hub',
            tradeValue: '$500 billion annually',
            
            panamaCanal: {
                significance: 'Game-changer for global trade',
                saves: '8,000 miles vs South America',
                timeSaved: '7-10 days',
                annualCargo: '6% of world trade',
                revenue: '$4.3 billion (2023)',
                expansion: '2016 - Neopanamax ships',
                locks: '3 sets',
                waterSource: 'Gatun Lake (freshwater)',
                drought: '2023-2024 water crisis'
            },
            
            majorPorts: [
                { 
                    name: 'Colon', 
                    country: 'Panama', 
                    containers: '4.4M TEU',
                    freeZone: 'Second largest free zone in world',
                    significance: 'Panama Canal Atlantic terminus'
                },
                { 
                    name: 'Cartagena', 
                    country: 'Colombia', 
                    containers: '3.2M TEU',
                    growth: 'Fastest growing in Caribbean',
                    tourism: 'Also cruise destination'
                },
                { 
                    name: 'Kingston', 
                    country: 'Jamaica', 
                    containers: '1.8M TEU',
                    transshipment: 'Major hub',
                    freeport: 'Free trade zone'
                },
                { 
                    name: 'Freeport', 
                    country: 'Bahamas', 
                    containers: '1.5M TEU',
                    transshipment: 'US East Coast hub'
                },
                { 
                    name: 'San Juan', 
                    country: 'Puerto Rico', 
                    containers: '1.3M TEU',
                    jonesAct: 'US shipping law applies'
                }
            ],
            
            tourism: {
                annualVisitors: '30 million',
                cruisePassengers: '12 million',
                value: '$60 billion annually',
                employment: '2.4 million jobs',
                topDestinations: ['Cancun', 'Dominican Republic', 'Cuba', 'Jamaica', 'Bahamas', 'Puerto Rico'],
                
                cruiseIndustry: {
                    ships: '300+ cruise ships operate',
                    homeports: ['Miami', 'Fort Lauderdale', 'San Juan'],
                    overcrowding: 'Some ports restricting ships',
                    environment: 'Pollution concerns',
                    covid: 'Devastated 2020, recovered 2022+'
                },
                
                allInclusive: {
                    model: 'Pioneered in Caribbean',
                    sandals: 'Jamaica-based chain',
                    leakage: 'Much money leaves region',
                    jobs: 'Low-wage employment concerns'
                }
            },
            
            oilAndGas: {
                trinidad: 'Major LNG exporter, 10% of US imports',
                venezuela: 'Largest oil reserves in world (disputed)',
                mexicoGulf: 'Connected to Gulf production',
                refining: ['Curaçao', 'Aruba', 'St. Croix'],
                crisis: 'Venezuela collapse reduced output 80%'
            },
            
            offshoreBanking: {
                centers: ['Cayman Islands', 'British Virgin Islands', 'Bahamas', 'Panama'],
                caymans: '$2 trillion in deposits, #5 global financial center',
                taxHaven: 'Controversial tax avoidance',
                companies: '100,000+ registered in Caymans',
                regulation: 'International pressure increasing'
            },
            
            remittances: {
                importance: 'Lifeline for many islands',
                haiti: '37% of GDP from diaspora',
                jamaica: '14% of GDP',
                dominican: '8% of GDP',
                source: 'US, UK, Canada diaspora'
            }
        },
        
        geopolitics: {
            strategicImportance: 'High',
            tensionLevel: 'Moderate',
            
            issues: [
                { 
                    name: 'Cuba Embargo', 
                    parties: ['USA', 'Cuba'], 
                    description: '60+ year economic embargo',
                    
                    details: {
                        start: '1962',
                        obamaOpening: '2015-2016 thaw',
                        trumpReverse: 'Tightened sanctions',
                        bidenStatus: 'Minimal changes',
                        impact: '$130 billion estimated cost to Cuba',
                        unVote: '2023 - 187 countries voted to end (only US, Israel opposed)'
                    }
                },
                { 
                    name: 'Venezuela Crisis', 
                    parties: ['USA', 'Venezuela', 'Russia', 'China'], 
                    description: 'Political/economic collapse',
                    
                    details: {
                        start: '2014 oil price crash',
                        maduro: 'Contested president since 2019',
                        guaido: 'US-recognized interim president (no longer)',
                        economy: 'GDP dropped 80%',
                        inflation: '1,000,000%+ at peak',
                        refugees: '7.7 million fled',
                        oil: 'Production dropped from 3M to 400k bpd',
                        russia: 'Military support, debt',
                        china: '$65 billion loans',
                        sanctions: 'US oil sanctions (partial relief 2023)'
                    }
                },
                { 
                    name: 'Drug Trafficking', 
                    parties: ['USA', 'Colombia', 'Mexico'], 
                    description: 'Major cocaine transit route',
                    
                    details: {
                        flow: '90% of US cocaine transits Caribbean/Central America',
                        routes: ['Colombia-Caribbean-US', 'Venezuela-Caribbean', 'Central America'],
                        cartels: 'Mexican cartels dominant',
                        submarines: 'Narco-submarines used',
                        aircraft: 'Low-flying planes',
                        interdiction: 'Joint patrols (US, Netherlands, UK)',
                        corruption: 'Widespread in some countries'
                    }
                },
                { 
                    name: 'Haiti Instability', 
                    parties: ['Haiti', 'UN', 'USA'], 
                    description: 'Gang violence, political collapse',
                    
                    details: {
                        assassination: '2021 - President Moïse killed',
                        gangs: 'Control 80% of Port-au-Prince',
                        kidnapping: 'Epidemic levels',
                        hunger: '5 million facing acute hunger',
                        kenyaMission: '2024 - Kenya-led multinational force',
                        intervention: 'Previous UN missions (MINUSTAH)',
                        history: 'Centuries of outside interference'
                    }
                },
                { 
                    name: 'Climate Vulnerability', 
                    parties: ['All Caribbean nations'], 
                    description: 'Existential threat',
                    
                    details: {
                        hurricanes: 'Increasing intensity',
                        seaLevel: 'Low-lying islands at risk',
                        coral: 'Reefs dying',
                        tourism: 'Beach erosion threatens economy',
                        caricom: 'Regional cooperation on climate',
                        loss: '$22 billion in hurricane damage 2017 alone'
                    }
                }
            ],
            
            navalPresences: [
                { 
                    country: 'USA', 
                    base: 'Guantanamo Bay (Cuba)', 
                    purpose: 'Strategic base since 1903, detention facility',
                    status: 'Controversial - Cuba demands return',
                    lease: '$4,085/year (Cuba doesn\'t cash checks)'
                },
                { 
                    country: 'USA', 
                    other: 'Roosevelt Roads (closed 2004), JIATF South (Key West)',
                    purpose: 'Drug interdiction, regional operations',
                    4thFleet: 'Reactivated 2008'
                },
                { 
                    country: 'Netherlands', 
                    base: 'Curaçao, Aruba', 
                    purpose: 'Drug interdiction',
                    cooperation: 'US partnership'
                },
                { 
                    country: 'France', 
                    base: 'Martinique, Guadeloupe', 
                    purpose: 'Overseas territory defense',
                    forces: 'Regular naval presence'
                },
                { 
                    country: 'UK', 
                    base: 'Various overseas territories', 
                    purpose: 'Territory defense, disaster response',
                    deployment: 'Occasional frigate'
                },
                { 
                    country: 'Venezuela', 
                    assets: 'Submarines (Russian-built), patrol boats',
                    status: 'Degraded due to economic crisis',
                    russianVisits: 'Russian warships visit'
                }
            ],
            
            chinaInfluence: {
                investment: 'Growing across Caribbean',
                taiwan: '4 Caribbean nations recognize Taiwan',
                diplomacy: 'Switching recognition from Taiwan to China',
                bri: 'Belt and Road projects',
                debt: 'Concerns about debt-trap diplomacy',
                examples: ['Jamaica port', 'Trinidad projects', 'Bahamas resort']
            }
        },
        
        history: {
            indigenous: {
                taino: 'Major group in Greater Antilles',
                carib: 'Warrior culture in Lesser Antilles - gave sea its name',
                arawak: 'Peaceful farmers',
                population: '3 million+ before Columbus',
                genocide: '90%+ died within 100 years (disease, slavery, war)'
            },
            
            colonial: {
                columbus: '1492 - "discovered" Caribbean',
                spanish: 'First colonizers',
                
                colonialPowers: [
                    { power: 'Spain', colonies: 'Cuba, Puerto Rico, Dominican Republic, Jamaica (until 1655)' },
                    { power: 'Britain', colonies: 'Jamaica, Barbados, Trinidad, Bahamas' },
                    { power: 'France', colonies: 'Haiti, Martinique, Guadeloupe' },
                    { power: 'Netherlands', colonies: 'Curaçao, Aruba, Sint Maarten' },
                    { power: 'Denmark', colonies: 'US Virgin Islands (sold 1917)' }
                ],
                
                sugarEconomy: 'Drove colonialism - "white gold"',
                slavery: '12 million Africans enslaved in Americas, many in Caribbean'
            },
            
            pirateEra: {
                period: '1650-1730 - Golden Age of Piracy',
                portRoyal: 'Jamaica - "wickedest city on Earth" until 1692 earthquake',
                tortuga: 'Pirate haven off Haiti',
                nassau: 'Bahamas - pirate republic',
                
                famousPirates: [
                    { name: 'Blackbeard', real: 'Edward Teach', operated: '1716-1718', death: 'Killed in battle' },
                    { name: 'Henry Morgan', type: 'Privateer/pirate', achievement: 'Sacked Panama City', later: 'Became Governor of Jamaica' },
                    { name: 'Calico Jack', real: 'John Rackham', famous: 'Crew included Anne Bonny and Mary Read' },
                    { name: 'Anne Bonny', type: 'Female pirate', fate: 'Escaped execution, disappeared' },
                    { name: 'Bartholomew Roberts', nickname: 'Black Bart', captures: '400+ ships' }
                ],
                
                privateers: 'Government-licensed pirates - legal piracy',
                treasure: 'Much still supposedly buried',
                end: 'Royal Navy crackdown 1720s'
            },
            
            slavery: {
                middlePassage: '2+ million Africans brought to Caribbean',
                conditions: 'Brutal - average lifespan 7 years',
                sugarPlantations: 'Hell on earth',
                rebellions: ['Haitian Revolution (1791-1804)', 'Baptist War Jamaica (1831)', 'Numerous others'],
                abolition: 'Britain 1834, France 1848, Cuba 1886',
                legacy: 'Demographics, culture, inequality today'
            },
            
            haitianRevolution: {
                period: '1791-1804',
                significance: 'Only successful slave revolution in history',
                leader: 'Toussaint Louverture',
                outcome: 'First Black republic, second independent nation in Americas',
                napoleonDefeated: 'France lost 50,000+ troops',
                usReaction: 'Refused recognition until 1862',
                debt: 'France forced Haiti to pay "reparations" - impoverished nation'
            },
            
            usIntervention: {
                monroeDoctrine: '1823 - Americas off-limits to European colonization',
                spanish: '1898 - US took Puerto Rico, intervened in Cuba',
                occupations: ['Cuba (1898-1902, 1906-1909)', 'Haiti (1915-1934)', 'Dominican Republic (1916-1924, 1965)'],
                coldWar: 'Anti-communist interventions',
                grenada: '1983 invasion',
                panama: '1989 invasion',
                current: 'Continued influence'
            }
        },
        
        culturalSignificance: {
            music: {
                reggae: 'Jamaica - Bob Marley, global influence',
                calypso: 'Trinidad - social commentary',
                salsa: 'Cuba/Puerto Rico - dance music',
                merengue: 'Dominican Republic',
                soca: 'Trinidad - party music',
                dancehall: 'Jamaica - modern reggae',
                rumba: 'Cuba - African roots'
            },
            
            carnival: {
                trinidad: 'Largest Caribbean carnival',
                brazil: 'Influenced by Caribbean',
                timing: 'Pre-Lent celebration',
                elements: 'Costumes, steel drums, calypso, dancing'
            },
            
            religion: {
                christianity: 'Dominant (Catholic/Protestant)',
                santeria: 'Cuba - African/Catholic syncretism',
                vodou: 'Haiti - African/Catholic syncretism',
                rastafari: 'Jamaica - Haile Selassie worship'
            },
            
            cuisine: {
                influences: 'African, European, Indigenous, Indian',
                jerk: 'Jamaica - spice marinade',
                rotiDoubles: 'Trinidad - Indian influence',
                mofongo: 'Puerto Rico - mashed plantains',
                rice: 'Rice and beans everywhere',
                rum: 'Birthplace of rum (Barbados 1650s)'
            },
            
            rum: {
                origin: 'First distilled Barbados 1650s',
                brands: ['Bacardi', 'Captain Morgan', 'Appleton', 'Mount Gay', 'Havana Club'],
                culture: 'Central to Caribbean identity',
                trade: 'Was used as currency'
            },
            
            literature: {
                derekWalcott: 'Nobel Prize (St. Lucia)',
                vsNaipaul: 'Nobel Prize (Trinidad)',
                jamaicaKincaid: 'Antigua-American author'
            },
            
            sports: {
                cricket: 'West Indies cricket legacy',
                baseball: 'Dominican Republic, Cuba, Puerto Rico produce MLB stars',
                athletics: 'Jamaica sprinters (Usain Bolt)',
                olympicSuccess: '150+ medals for Caribbean nations'
            }
        },
        
        funFacts: [
            'Panama Canal saves 8,000 miles vs going around South America',
            'Home to 7,000+ islands',
            'Birthplace of rum - first distilled in Barbados 1650s',
            'Pirates of Caribbean was based on real history',
            'Bermuda Triangle myths originate nearby (technically Atlantic)',
            'Caribbean nations have won 150+ Olympic medals',
            'Haiti was first Black republic (1804) - from successful slave revolt',
            '1780 Great Hurricane killed 22,000 - deadliest Atlantic hurricane ever',
            'Great Blue Hole in Belize is 300m wide and 125m deep',
            'Queen conch takes 5 years to mature - now endangered',
            'Lionfish invasion began with aquarium release in 1985',
            'Sargassum seaweed belt is 5,000 miles long',
            'Cuba has free healthcare and 99% literacy rate despite poverty',
            'Cayman Islands has more registered companies than people',
            'Underwater sculpture parks exist in Grenada and Cancun'
        ]
    },

    // ═══════════════════════════════════════════════════════
    // PERSIAN GULF - MASSIVELY EXPANDED
    // ═══════════════════════════════════════════════════════
    {
        id: 'persian-gulf',
        name: 'Persian Gulf',
        alternateNames: ['Arabian Gulf (Arab states)', 'The Gulf'],
        parentOcean: 'Indian Ocean',
        parentOceanId: 'indian-ocean',
        
        area: 251000,
        avgDepth: 50,
        maxDepth: 90,
        volume: '12,500 km³',
        
        coordinates: [26, 51],
        defaultZoom: 6,
        
        image: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=500',
        backgroundImage: 'https://images.unsplash.com/photo-1512632578881-f796dbdb9c1f?w=1920',
        
        etymology: {
            persian: 'خلیج فارس (Khalij-e Fars)',
            arabic: 'الخليج العربي (al-Khalij al-Arabi) - Arab states use this',
            dispute: 'Name highly politicized',
            ancient: 'Persian Gulf used since at least 500 BCE',
            un: 'United Nations uses "Persian Gulf"',
            compromise: 'Some use simply "The Gulf"'
        },
        
        physicalCharacteristics: {
            shape: 'Elongated - 1,000 km long, 200-300 km wide',
            shallowness: 'Very shallow - average only 50m',
            formation: 'Flooded river valley (20,000 years ago)',
            sedimentation: 'Tigris/Euphrates sediment fills basin',
            evaporation: 'Exceeds freshwater input - increasing salinity',
            age: 'Geologically young'
        },
        
        borderingCountries: [
            { 
                name: 'Iran', 
                coastlineKm: 1880, 
                cities: ['Bandar Abbas', 'Bushehr', 'Abadan', 'Khorramshahr'],
                oilReserves: '157 billion barrels (#4 global)',
                gasReserves: '1,201 tcf (#2 global)',
                navy: 'IRGC Navy + regular navy',
                hormuzControl: 'Northern side of strait',
                islands: ['Qeshm', 'Kish', 'Lavan'],
                significance: 'Can threaten strait closure'
            },
            { 
                name: 'Iraq', 
                coastlineKm: 58, 
                cities: ['Basra', 'Umm Qasr'],
                oilReserves: '145 billion barrels (#5 global)',
                coastProblem: 'Tiny coastline - almost landlocked',
                shattAlArab: 'Tigris/Euphrates outlet (disputed)',
                history: 'Invaded Kuwait for access (1990)'
            },
            { 
                name: 'Kuwait', 
                coastlineKm: 499, 
                cities: ['Kuwait City'],
                oilReserves: '102 billion barrels',
                burganField: 'Second largest oil field in world',
                wealth: '$33,000 GDP per capita',
                invasion: 'Iraq invaded 1990 (Gulf War)',
                reconstruction: 'Rebuilt after war'
            },
            { 
                name: 'Saudi Arabia', 
                coastlineKm: 710, 
                cities: ['Dammam', 'Dhahran', 'Jubail'],
                oilReserves: '267 billion barrels (#2 global)',
                ghawarField: 'World\'s largest oil field',
                aramco: 'World\'s most valuable company',
                desalination: 'Massive plants supply water',
                petrochemicals: 'Jubail industrial city'
            },
            { 
                name: 'Bahrain', 
                coastlineKm: 161, 
                cities: ['Manama'],
                type: 'Island nation',
                oilHistory: 'First Gulf oil discovery (1932)',
                banking: 'Regional financial center',
                usNavy: '5th Fleet headquarters',
                causeway: 'Connected to Saudi Arabia'
            },
            { 
                name: 'Qatar', 
                coastlineKm: 563, 
                cities: ['Doha'],
                gasReserves: '871 tcf (#3 global)',
                northField: 'World\'s largest gas field (shared with Iran)',
                lng: 'World\'s largest LNG exporter',
                wealth: '$84,000 GDP per capita (highest)',
                worldCup: 'Hosted 2022 FIFA World Cup',
                alJazeera: 'Media headquarters',
                blockade: '2017-2021 Saudi/UAE blockade'
            },
            { 
                name: 'UAE', 
                coastlineKm: 1318, 
                cities: ['Abu Dhabi', 'Dubai', 'Sharjah'],
                emirates: 7,
                oilReserves: '98 billion barrels',
                dubai: 'Global trade/tourism hub, low oil reliance',
                abuDhabi: 'Oil wealth center',
                diversification: 'Most diversified Gulf economy',
                ports: ['Jebel Ali (#1 Middle East)', 'Fujairah'],
                military: 'Most capable Arab military'
            },
            { 
                name: 'Oman', 
                coastlineKm: 350, 
                cities: ['Sohar', 'Khasab'],
                hormuzControl: 'Southern side of strait',
                musandam: 'Exclave controls strait',
                oilReserves: 'Modest, declining',
                diplomacy: 'Neutral - mediates Iran-West',
                tourism: 'Growing industry'
            }
        ],
        
        straits: [
            { 
                name: 'Strait of Hormuz', 
                connectsTo: 'Arabian Sea/Gulf of Oman', 
                width: 54,
                narrowest: 33,
                depth: 60,
                annualShips: 17000,
                
                oilTraffic: {
                    dailyBarrels: 21000000,
                    percentWorldOil: 21,
                    percentWorldLNG: 35,
                    percentAsianOil: 75
                },
                
                shippingLanes: {
                    inbound: '3 km wide',
                    outbound: '3 km wide',
                    buffer: '3 km median'
                },
                
                control: {
                    north: 'Iran',
                    south: 'Oman (Musandam)',
                    islands: ['Greater Tunb (Iran)', 'Lesser Tunb (Iran)', 'Abu Musa (Iran/UAE dispute)']
                },
                
                iranCapabilities: {
                    missiles: 'Anti-ship missiles covering entire strait',
                    mines: '5,000+ naval mines available',
                    boats: 'IRGC fast attack boats (1,500+)',
                    submarines: 'Kilo-class submarines',
                    drones: 'Kamikaze drones',
                    tactics: 'Swarming, asymmetric warfare'
                },
                
                closureScenario: {
                    trigger: 'War with US, extreme sanctions, attack on Iran',
                    method: 'Mines, missiles, boat attacks, suicide drones',
                    duration: 'Days to weeks before cleared',
                    oilSpike: '100%+ price increase immediately',
                    recession: 'Global recession certain',
                    alternatives: 'Pipelines handle small fraction',
                    usResponse: 'Massive military operation to reopen'
                },
                
                incidents: [
                    { year: 1987, event: 'Iran mines strait, US reflagging operation' },
                    { year: 1988, event: 'US destroys Iranian platforms, sinks ships' },
                    { year: 2019, event: 'Tanker attacks - 6 ships damaged' },
                    { year: 2019, event: 'Iran shoots down US drone' },
                    { year: 2019, event: 'Iran seizes UK tanker' },
                    { year: 2021, event: 'Attack on Israeli-linked tanker' },
                    { year: 2023, event: 'Iran seizes tankers' }
                ]
            }
        ],
        
        oilAndGas: {
            overview: 'Heart of global energy supply',
            
            reserves: {
                oil: '800 billion barrels (48% of global proven)',
                gas: '2,836 tcf (40% of global)',
                significance: 'Largest concentration of hydrocarbons on Earth'
            },
            
            production: {
                dailyOil: '30 million barrels/day',
                percentGlobal: 30,
                value: '$1 trillion annually'
            },
            
            countryReserves: {
                saudiArabia: { 
                    oil: '267 billion barrels', 
                    oilRank: '#2 global',
                    production: '10 million bpd',
                    spareCap: '2 million bpd (swing producer)',
                    fields: ['Ghawar (world\'s largest)', 'Safaniya (largest offshore)']
                },
                iran: { 
                    oil: '157 billion barrels', 
                    oilRank: '#4 global',
                    gas: '1,201 tcf',
                    gasRank: '#2 global',
                    sanctions: 'Limits production',
                    fields: ['South Pars (gas, shared with Qatar)']
                },
                iraq: { 
                    oil: '145 billion barrels', 
                    oilRank: '#5 global',
                    production: '4.5 million bpd',
                    potential: 'Underexplored',
                    fields: ['Rumaila', 'West Qurna']
                },
                kuwait: { 
                    oil: '102 billion barrels',
                    fields: ['Burgan (2nd largest in world)'],
                    perCapita: 'Highest oil reserves per capita'
                },
                uae: { 
                    oil: '98 billion barrels',
                    fields: ['Upper Zakum', 'Lower Zakum'],
                    dubai: 'Diversified away from oil'
                },
                qatar: { 
                    gas: '871 tcf', 
                    gasRank: '#3 global',
                    northField: 'World\'s largest gas field',
                    lng: 'World\'s largest LNG exporter',
                    expansion: 'Doubling LNG capacity by 2027'
                }
            },
            
            majorFields: [
                { 
                    name: 'Ghawar', 
                    country: 'Saudi Arabia', 
                    type: 'Oil',
                    size: 'World\'s largest oil field',
                    production: '5 million bpd',
                    discovered: 1948,
                    reserves: '75-83 billion barrels remaining'
                },
                { 
                    name: 'Safaniya', 
                    country: 'Saudi Arabia', 
                    type: 'Oil',
                    size: 'World\'s largest offshore field',
                    production: '1.5 million bpd'
                },
                { 
                    name: 'North Dome/South Pars', 
                    country: 'Qatar/Iran', 
                    type: 'Gas',
                    size: 'World\'s largest gas field',
                    reserves: '1,800 tcf',
                    area: '9,700 km²',
                    shared: 'Qatar calls it North Field, Iran calls it South Pars'
                },
                { 
                    name: 'Burgan', 
                    country: 'Kuwait', 
                    type: 'Oil',
                    size: 'Second largest oil field',
                    production: '1.6 million bpd'
                }
            ],
            
            opec: {
                members: ['Saudi Arabia', 'Iran', 'Iraq', 'Kuwait', 'UAE'],
                headquarters: 'Vienna',
                control: '40% of global oil production',
                opecPlus: 'Includes Russia, coordinates production',
                influence: 'Can move global oil prices',
                2020crisis: 'Price war crashed oil prices'
            }
        },
        
        climate: {
            extreme: 'One of hottest regions on Earth',
            
            summer: {
                airTemp: '40-50°C common',
                record: '54°C recorded in Kuwait',
                waterTemp: '35-36°C - warmest sea water on Earth',
                humidity: 'Extremely high - feels 60°C+',
                habitability: 'Approaching limits of human survival'
            },
            
            winter: {
                airTemp: '15-25°C',
                waterTemp: '20-25°C',
                weather: 'Pleasant - peak tourism season'
            },
            
            precipitation: {
                annual: '75-150 mm',
                pattern: 'Winter rains only',
                desert: 'Hyper-arid climate'
            },
            
            shamal: {
                what: 'Strong northwesterly wind',
                season: 'Summer and winter',
                effects: 'Dust storms, high seas',
                impact: 'Disrupts shipping, aviation'
            },
            
            climateChange: {
                warming: 'Faster than global average',
                heatwaves: 'More frequent and extreme',
                wetBulb: 'Approaching uninhabitable thresholds',
                future: 'May be too hot for outdoor work by 2050'
            }
        },
        
        desalination: {
            necessity: 'Only freshwater source for most cities',
            capacity: '60% of global desalination capacity',
            production: '5 billion gallons/day',
            
            byCountry: {
                saudiArabia: 'Largest capacity',
                uae: 'Major producer',
                kuwait: '100% dependent on desalination',
                qatar: '99% dependent'
            },
            
            technology: {
                types: ['Reverse osmosis', 'Multi-stage flash', 'Multi-effect distillation'],
                energy: 'Extremely energy-intensive',
                cost: '$0.50-1.00 per cubic meter'
            },
            
            environmental: {
                brine: 'Super-salty brine discharged',
                impact: 'Killing marine life',
                heating: 'Warmer water discharged',
                salinity: 'Gulf salinity increasing'
            },
            
            vulnerability: {
                war: 'Plants vulnerable to attack',
                contamination: 'Oil spill could devastate supply',
                backup: 'Limited - weeks of storage only'
            }
        },
        
        economicImportance: {
            overview: 'Heart of global energy supply',
            tradeValue: '$1 trillion oil/gas exports annually',
            percentGlobalOil: 30,
            
            majorPorts: [
                { 
                    name: 'Ras Tanura', 
                    country: 'Saudi Arabia', 
                    type: 'Oil terminal',
                    capacity: '6.5 million bpd',
                    ranking: 'World\'s largest oil terminal',
                    vulnerability: 'Key target, attacked 2021'
                },
                { 
                    name: 'Jebel Ali', 
                    country: 'UAE', 
                    type: 'Container port',
                    containers: '14M TEU',
                    ranking: 'Top 10 global, #1 Middle East',
                    freeZone: 'Massive free trade zone',
                    significance: 'Dubai\'s trade hub'
                },
                { 
                    name: 'Ras Laffan', 
                    country: 'Qatar', 
                    type: 'LNG port',
                    capacity: '77 million tonnes LNG',
                    ranking: 'World\'s largest LNG port',
                    expansion: 'Doubling capacity by 2027'
                },
                { 
                    name: 'Kharg Island', 
                    country: 'Iran', 
                    type: 'Oil terminal',
                    capacity: '5 million bpd',
                    ranking: 'Iran\'s main export terminal',
                    tankerWar: 'Attacked in 1980s'
                },
                { 
                    name: 'Mina Al Ahmadi', 
                    country: 'Kuwait', 
                    type: 'Oil terminal',
                    significance: 'Kuwait\'s main export terminal'
                },
                { 
                    name: 'Basra', 
                    country: 'Iraq', 
                    type: 'Oil/general port',
                    issue: 'Congestion, infrastructure poor',
                    significance: 'Iraq\'s only significant port'
                }
            ],
            
            shipping: {
                tankers: 'Massive tanker traffic',
                vlcc: 'Very Large Crude Carriers common',
                ulcc: 'Ultra Large Crude Carriers load here',
                insurance: 'War risk premiums',
                escort: 'Naval escorts during tensions'
            },
            
            petrochemicals: {
                industry: 'Massive downstream industry',
                jubail: 'Saudi Arabia - world\'s largest petrochemical complex',
                ruwais: 'UAE - major complex',
                products: 'Plastics, fertilizers, chemicals'
            },
            
            fisheries: {
                traditional: 'Declining - pearl diving ended',
                commercial: 'Shrimp, fish',
                challenges: 'Pollution, overfishing, desalination brine'
            }
        },
        
        geopolitics: {
            strategicImportance: 'Critical - Most important sea for global energy',
            tensionLevel: 'High',
            
            issues: [
                { 
                    name: 'Iran-USA Tensions', 
                    parties: ['Iran', 'USA', 'Gulf States'], 
                    description: 'Hormuz closure threats, sanctions, nuclear deal',
                    
                    details: {
                        nuclearDeal: 'JCPOA 2015, US withdrew 2018',
                        sanctions: 'Crippling US sanctions on Iran',
                        iranResponse: 'Missile attacks, proxy attacks, nuclear acceleration',
                        hormuzThreats: 'Regular Iranian threats to close',
                        usMilitary: '5th Fleet (Bahrain), 50,000 troops in region',
                        incidents: 'Regular - tanker seizures, drone shootdowns'
                    }
                },
                { 
                    name: 'Saudi-Iran Rivalry', 
                    parties: ['Saudi Arabia', 'Iran'], 
                    description: 'Regional proxy conflicts',
                    
                    details: {
                        type: 'Sunni vs Shia, Arab vs Persian',
                        proxies: ['Yemen (Houthis)', 'Syria', 'Iraq', 'Lebanon (Hezbollah)'],
                        2023detente: 'China-brokered rapprochement',
                        embassies: 'Reopened 2023 after 7 years',
                        stability: 'Cautious optimism'
                    }
                },
                { 
                    name: 'Iran Nuclear Program', 
                    parties: ['Iran', 'USA', 'EU', 'Israel'], 
                    description: 'Nuclear weapons concerns',
                    
                    details: {
                        enrichment: '60% enriched uranium (90% is weapons grade)',
                        breakoutTime: 'Weeks to enough for a bomb',
                        israelThreat: 'Regular threats to strike',
                        facilities: ['Natanz', 'Fordow', 'Arak'],
                        sanctions: 'Punishing Iranian economy',
                        jcpoa: 'Deal collapsed 2018, negotiations failed'
                    }
                },
                { 
                    name: 'Qatar Blockade (ended)', 
                    parties: ['Saudi Arabia', 'UAE', 'Qatar'], 
                    description: '2017-2021 diplomatic crisis',
                    
                    details: {
                        start: 'June 2017',
                        accusation: 'Qatar supporting terrorism, Iran ties',
                        blockade: 'Land, sea, air cut off',
                        qatarResponse: 'Turkey military base, Iran food imports',
                        end: 'January 2021 - Al Ula agreement',
                        worldCup: 'Qatar hosted 2022 despite tensions'
                    }
                },
                { 
                    name: 'Island Disputes', 
                    parties: ['Iran', 'UAE'], 
                    description: 'Three islands in strait',
                    
                    details: {
                        islands: ['Greater Tunb', 'Lesser Tunb', 'Abu Musa'],
                        history: 'Iran seized 1971 as British left',
                        uaeClaim: 'Claims all three',
                        iranControl: 'Militarized, refuses negotiation',
                        significance: 'Controls approach to strait'
                    }
                }
            ],
            
            navalPresences: [
                { 
                    country: 'USA', 
                    base: '5th Fleet HQ (Bahrain)', 
                    assets: ['30+ ships', '20,000 personnel', 'Carrier strike group rotations'],
                    purpose: 'Iran containment, freedom of navigation, ally protection',
                    bases: ['Bahrain (5th Fleet HQ)', 'Qatar (Al Udeid Air Base)', 'Kuwait', 'UAE'],
                    capability: 'Can reopen Hormuz if closed'
                },
                { 
                    country: 'Iran', 
                    base: 'Bandar Abbas, multiple islands', 
                    assets: ['IRGC Navy', 'Regular navy', 'Fast attack boats', 'Submarines', 'Missiles'],
                    strategy: 'Asymmetric warfare, swarming',
                    drills: 'Regular exercises closing strait',
                    tunnels: 'Underground missile bases',
                    purpose: 'Deterrence, strait control'
                },
                { 
                    country: 'UK', 
                    base: 'HMS Jufair (Bahrain)', 
                    purpose: 'Joint Naval Command, tanker protection',
                    assets: 'Minehunters, frigates rotate'
                },
                { 
                    country: 'France', 
                    base: 'Abu Dhabi (permanent)', 
                    assets: '650 personnel, ships rotate',
                    significance: 'First Gulf base since colonialism'
                },
                { 
                    country: 'Saudi Arabia', 
                    base: 'Multiple', 
                    assets: 'Expanding naval fleet',
                    purchases: 'Buying advanced ships',
                    goal: 'Reduce reliance on US'
                },
                { 
                    country: 'UAE', 
                    assets: 'Capable small navy',
                    yemen: 'Active in Yemen war',
                    coast: 'Strong coast guard'
                }
            ],
            
            armsSales: {
                buyers: ['Saudi Arabia', 'UAE', 'Qatar', 'Kuwait', 'Bahrain'],
                sellers: ['USA', 'UK', 'France', 'Russia (Iran)'],
                saudiSpending: '$80 billion/year (#5 global military budget)',
                uaeSpending: '$25 billion/year',
                concern: 'Arms race'
            }
        },
        
        environment: {
            challenges: 'One of most stressed marine environments',
            
            pollution: {
                oil: 'Chronic spills, operational discharges',
                desalination: 'Super-salty brine killing marine life',
                sewage: 'Inadequate treatment',
                industrial: 'Petrochemical pollution',
                shipping: 'Ballast water, antifouling'
            },
            
            temperature: {
                surface: '35-36°C in summer',
                ranking: 'Warmest sea in world',
                trend: 'Rising 0.2°C per decade',
                impact: 'Approaching thermal limits for many species'
            },
            
            salinity: {
                level: '40-70 ppt (vs 35 ppt normal ocean)',
                cause: 'High evaporation, low freshwater input',
                trend: 'Increasing due to desalination',
                impact: 'Stressing marine life'
            },
            
            biodiversity: {
                species: '700+ fish species',
                coral: 'Heat-resistant corals (research interest)',
                mammals: ['Dugongs', 'Dolphins', 'Whales'],
                turtles: ['Hawksbill', 'Green turtle'],
                threats: 'All populations declining'
            },
            
            coralReefs: {
                status: 'Some of most heat-resistant in world',
                research: 'Studied for climate adaptation',
                bleaching: 'Less than elsewhere due to adaptation',
                degradation: 'Still declining due to other stressors'
            },
            
            gulfWarDamage: {
                1991: '10 million barrels oil spilled (largest ever)',
                oilFires: '700 oil wells burned',
                impact: 'Devastating but recovered',
                residue: 'Still detectable in sediments'
            },
            
            climateChange: {
                warming: 'Faster than global average',
                extremeHeat: 'Summer temperatures approaching limits',
                seaLevel: '2-3 mm/year rise',
                corals: 'May adapt better than tropical corals',
                desertification: 'Increasing dust storms'
            }
        },
        
        history: {
            ancient: {
                mesopotamia: 'Sumerians, Babylonians used Gulf',
                trade: 'Dilmun civilization (Bahrain) - trading hub',
                pearling: 'Pearl diving for 2,000+ years',
                alexander: 'Explored by Alexander the Great\'s fleet'
            },
            
            islamic: {
                spread: 'Islam arrived 7th century',
                caliphates: 'Various Islamic empires controlled',
                trade: 'Arab dhow trade flourished',
                basra: 'Major trading port'
            },
            
            portuguese: {
                arrival: '1507 - Afonso de Albuquerque',
                hormuz: 'Seized Hormuz, controlled trade',
                period: '1507-1622',
                end: 'Driven out by Safavid Persia with English help'
            },
            
            british: {
                arrival: 'East India Company 1600s',
                trucialStates: 'Created UAE precursors',
                piracy: 'Suppressed "pirate coast"',
                protection: 'Protection treaties 1820s-1970s',
                withdrawal: '1971 - created independent Gulf states',
                legacy: 'Borders, systems still reflect British influence'
            },
            
            oilDiscovery: {
                bahrain: '1932 - First Gulf oil discovery',
                saudiArabia: '1938 - Dammam #7 struck oil',
                kuwait: '1938 - Burgan field discovered',
                transformation: 'From poverty to unimaginable wealth',
                aramco: 'American companies developed Saudi oil'
            },
            
            modernConflicts: {
                iranIraqWar: {
                    period: '1980-1988',
                    cause: 'Iraq invaded Iran',
                    deaths: '1 million+',
                    tankerWar: 'Both sides attacked oil tankers',
                    usIntervention: 'Reflagged Kuwaiti tankers',
                    usIranClashes: 'Shot down Iranian airliner (290 dead)'
                },
                
                gulfWar: {
                    period: '1990-1991',
                    cause: 'Iraq invaded Kuwait',
                    coalition: '35 countries, 700,000 troops',
                    oilFires: 'Iraq set 700 wells on fire',
                    oilSpill: 'Largest in history (10M barrels)',
                    outcome: 'Kuwait liberated'
                },
                
                iraqWar: {
                    period: '2003-2011',
                    cause: 'US invaded Iraq (WMD claims)',
                    outcome: 'Saddam removed, sectarian war, ISIS',
                    gulfImpact: 'Destabilized region',
                    cost: '$2 trillion, 200,000+ deaths'
                }
            }
        },
        
        culturalSignificance: {
            pearling: {
                history: '2,000+ years tradition',
                end: 'Collapsed 1930s (Japanese cultured pearls)',
                heritage: 'Museums, UNESCO sites celebrate',
                diving: 'Traditional freediving techniques'
            },
            
            dhows: {
                boats: 'Traditional Arab sailing vessels',
                construction: 'Handmade, no blueprints',
                decline: 'Few built today',
                heritage: 'Some still in use'
            },
            
            oilCulture: {
                transformation: 'Bedouin to billionaires in one generation',
                architecture: 'Ultra-modern cities',
                lifestyle: 'Massive wealth disparity with foreign workers',
                identity: 'Traditional vs modern tensions'
            },
            
            religion: {
                islam: 'Dominant throughout',
                mecca: 'Nearby - pilgrimage traffic',
                sunniShia: 'Major divide - Sunni governments, Shia minorities'
            }
        },
        
        funFacts: [
            'Contains nearly half of world\'s proven oil reserves',
            'Very shallow - average depth just 50 meters',
            '60% of global desalination capacity is here',
            'Summer surface temperatures can reach 36°C - warmest sea in world',
            'Name disputed - "Persian Gulf" vs "Arabian Gulf"',
            'Qatar/Iran share world\'s largest gas field (North Dome/South Pars)',
            '21% of world\'s oil transits Strait of Hormuz daily',
            'Kuwait is 100% dependent on desalinated water',
            'Pearl diving tradition dates back 2,000+ years',
            '1991 Gulf War oil spill was largest in history (10M barrels)',
            'Bahrain had first Gulf oil discovery (1932)',
            'UAE\'s Burj Khalifa is visible from 100 km across Gulf',
            'Iran has 5,000+ naval mines - enough to close Hormuz',
            'Qatar will double LNG production by 2027'
        ]
    }

    // ... Continuing with more seas...
];
    // ═══════════════════════════════════════════════════════
    // GULF OF MEXICO - MASSIVELY EXPANDED
    // ═══════════════════════════════════════════════════════
    {
        id: 'gulf-of-mexico',
        name: 'Gulf of Mexico',
        parentOcean: 'Atlantic Ocean',
        parentOceanId: 'atlantic-ocean',
        
        area: 1550000,
        avgDepth: 1486,
        maxDepth: 4384,
        volume: '2,434,000 km³',
        
        coordinates: [25, -90],
        defaultZoom: 5,
        
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500',
        backgroundImage: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?w=1920',
        
        etymology: {
            spanish: 'Golfo de México',
            indigenous: 'Various names by Maya, Aztec peoples',
            origin: 'Named after Mexico (Aztec: Mexihco)',
            nickname: 'America\'s Sea, The Gulf'
        },
        
        physicalCharacteristics: {
            shape: 'Roughly circular basin',
            formation: 'Formed 300 million years ago, flooded 66 million years ago',
            geology: 'Thick sedimentary layers, salt domes (oil traps)',
            connection: 'Connected to Atlantic via Florida Straits, Caribbean via Yucatan Channel',
            water: 'Warm, subtropical to tropical'
        },
        
        borderingCountries: [
            { 
                name: 'USA', 
                coastlineKm: 2700, 
                states: ['Texas', 'Louisiana', 'Mississippi', 'Alabama', 'Florida'],
                cities: ['Houston', 'New Orleans', 'Tampa', 'Mobile', 'Corpus Christi', 'Pensacola'],
                eez: '1,550,000 km² (entire Gulf)',
                
                stateDetails: {
                    texas: {
                        coastline: '591 km',
                        ports: ['Houston', 'Corpus Christi', 'Galveston', 'Port Arthur'],
                        oil: 'Major offshore production',
                        petrochemicals: 'Largest concentration in world'
                    },
                    louisiana: {
                        coastline: '639 km',
                        ports: ['New Orleans', 'Baton Rouge', 'Lake Charles'],
                        mississippiDelta: 'Losing football field of wetland per hour',
                        oil: 'Largest offshore production zone',
                        hurricanes: 'Most vulnerable state'
                    },
                    mississippi: {
                        coastline: '71 km',
                        ports: ['Gulfport', 'Biloxi'],
                        casinos: 'Major gaming industry'
                    },
                    alabama: {
                        coastline: '85 km',
                        ports: ['Mobile'],
                        shipbuilding: 'Major industry'
                    },
                    florida: {
                        coastline: '1,320 km (Gulf side)',
                        cities: ['Tampa', 'St. Petersburg', 'Pensacola', 'Fort Myers'],
                        tourism: 'Major industry',
                        springs: 'Freshwater springs discharge'
                    }
                }
            },
            { 
                name: 'Mexico', 
                coastlineKm: 2805, 
                states: ['Tamaulipas', 'Veracruz', 'Tabasco', 'Campeche', 'Yucatan', 'Quintana Roo'],
                cities: ['Veracruz', 'Tampico', 'Ciudad del Carmen', 'Campeche', 'Cancun'],
                oil: 'Major producer (Cantarell field)',
                
                stateDetails: {
                    veracruz: {
                        port: 'Historic - Spain\'s gateway to Mexico',
                        coffee: 'Major production region'
                    },
                    campeche: {
                        oil: 'Cantarell field (was world\'s 2nd largest)',
                        maya: 'Ancient Maya sites'
                    },
                    yucatan: {
                        chicxulub: 'Asteroid impact crater (dinosaur extinction)',
                        maya: 'Chichen Itza nearby'
                    }
                }
            },
            { 
                name: 'Cuba', 
                coastlineKm: 200, 
                cities: ['Havana (north coast)'],
                straits: 'Controls Florida Straits',
                oil: 'Potential offshore reserves'
            }
        ],
        
        straits: [
            { 
                name: 'Straits of Florida', 
                connectsTo: 'Atlantic Ocean', 
                width: 150,
                narrowest: 93,
                depth: 800,
                annualShips: 100000,
                gulfStream: 'Gulf Stream exits here',
                between: 'Florida and Cuba/Bahamas',
                significance: 'Eastern outlet of Gulf'
            },
            { 
                name: 'Yucatan Channel', 
                connectsTo: 'Caribbean Sea', 
                width: 217,
                depth: 2000,
                annualShips: 75000,
                loopCurrent: 'Generates Loop Current',
                between: 'Mexico and Cuba',
                significance: 'Western outlet of Gulf'
            }
        ],
        
        loopCurrent: {
            description: 'Warm current that enters from Caribbean via Yucatan Channel',
            speed: '3-4 knots (5.5-7.4 km/h)',
            temperature: '24-27°C',
            behavior: 'Loops through Gulf, exits via Florida Straits',
            
            eddies: {
                formation: 'Pinches off warm-core eddies',
                frequency: 'Every 3-17 months',
                size: '200-400 km diameter',
                duration: 'Months to over a year',
                impact: 'Affects fishing, oil operations, weather'
            },
            
            hurricaneImpact: {
                fuel: 'Warm water intensifies hurricanes',
                rapidIntensification: 'Storms can jump 2+ categories in 24 hours',
                examples: ['Katrina (2005)', 'Michael (2018)', 'Laura (2020)'],
                depth: 'Warm water extends 100+ meters deep'
            },
            
            oilSpillImpact: {
                deepwaterHorizon: 'Carried oil to Florida',
                dispersion: 'Can spread pollution widely'
            }
        },
        
        hurricanes: {
            season: 'June 1 - November 30',
            peak: 'August-October',
            frequency: '6-10 major hurricanes per decade',
            
            gulfIntensification: {
                warmWater: 'Deep warm water fuels rapid strengthening',
                loopCurrent: 'Hurricanes can intensify dramatically over Loop Current',
                record: 'Category 3 to 5 in 24 hours possible'
            },
            
            deadliestHurricanes: [
                { 
                    name: 'Galveston Hurricane', 
                    year: 1900, 
                    deaths: '8,000-12,000',
                    category: 4,
                    note: 'Deadliest US natural disaster'
                },
                { 
                    name: 'Hurricane Katrina', 
                    year: 2005, 
                    deaths: 1833,
                    cost: '$125 billion',
                    category: 5,
                    surge: '8.5 meters in Mississippi',
                    newOrleans: 'Levee failures flooded 80% of city'
                },
                { 
                    name: 'Hurricane Harvey', 
                    year: 2017, 
                    deaths: 107,
                    cost: '$125 billion',
                    category: 4,
                    rainfall: '60+ inches (1,500 mm) in some areas',
                    flooding: 'Catastrophic Houston flooding',
                    note: 'Wettest tropical cyclone in US history'
                },
                { 
                    name: 'Hurricane Michael', 
                    year: 2018, 
                    deaths: 74,
                    cost: '$25 billion',
                    category: 5,
                    wind: '160 mph at landfall',
                    note: 'First Cat 5 to hit Florida Panhandle'
                },
                { 
                    name: 'Hurricane Ida', 
                    year: 2021, 
                    deaths: 96,
                    cost: '$75 billion',
                    category: 4,
                    note: 'Tied for strongest Louisiana landfall'
                }
            ],
            
            oilDisruption: {
                impact: 'Major storms shut 95% of Gulf production',
                katrina: 'Destroyed 115 platforms, damaged 52',
                recovery: 'Months to restore production',
                cost: 'Billions in industry losses'
            },
            
            climateChange: {
                intensification: 'More Category 4-5 storms',
                rainfall: '10-15% more precipitation',
                slowdown: 'Storms moving slower - more damage',
                seaLevel: 'Higher base for storm surge',
                warming: 'Gulf surface warming 1.5°F since 1970s'
            }
        },
        
        oilAndGas: {
            overview: 'America\'s energy coast - critical to US production',
            
            production: {
                oil: '1.7 million barrels/day',
                percentUSProduction: '17% of US oil',
                gas: '5% of US natural gas',
                trend: 'Deepwater increasing, shallow declining'
            },
            
            infrastructure: {
                platforms: '2,000+ active platforms',
                pipelinesMiles: '25,000+ miles of pipelines',
                abandonedWells: '27,000+ abandoned wells on seafloor',
                refineries: 'Largest concentration in world (Texas/Louisiana coast)'
            },
            
            reserves: {
                oil: '48 billion barrels estimated',
                gas: '141 trillion cubic feet',
                undiscovered: 'Significant deepwater potential'
            },
            
            deepwater: {
                significance: 'World\'s most advanced deepwater drilling',
                depth: 'Producing from 3,000+ meters depth',
                technology: 'Industry-leading innovation',
                fields: ['Thunder Horse', 'Atlantis', 'Mad Dog', 'Jack/St. Malo']
            },
            
            mexicoProduction: {
                cantarellField: {
                    status: 'Was world\'s 2nd largest (1979-2008)',
                    peak: '2.1 million bpd (2004)',
                    current: '100,000 bpd (collapsed)',
                    decline: '95% decline from peak'
                },
                pemex: 'State oil company, massive debt',
                reform: 'Opened to foreign investment 2013',
                current: '1.8 million bpd total'
            },
            
            cubaPotential: {
                reserves: 'Estimated 5-9 billion barrels',
                exploration: 'Limited due to US embargo',
                status: 'Largely untapped',
                repsol: 'Spanish company drilled (dry holes so far)'
            }
        },
        
        deepwaterHorizon: {
            overview: 'Worst environmental disaster in US history',
            
            disaster: {
                date: 'April 20, 2010',
                location: 'Macondo Prospect, 66 km off Louisiana',
                depth: '1,500 meters water depth',
                rig: 'Deepwater Horizon (Transocean)',
                operator: 'BP',
                contractors: ['Halliburton', 'Transocean']
            },
            
            explosion: {
                time: '9:45 PM',
                deaths: '11 workers killed',
                injuries: '17 injured',
                cause: 'Well blowout, failed cement, failed blowout preventer'
            },
            
            spill: {
                duration: '87 days',
                barrels: '4.9 million barrels (210 million gallons)',
                dailyFlow: '60,000+ barrels/day at peak',
                ranking: 'Largest marine oil spill in history',
                area: '176,000 km² slick at maximum'
            },
            
            response: {
                capDate: 'July 15, 2010 (temporary)',
                killDate: 'September 19, 2010 (permanent)',
                methods: ['Dispersants', 'Skimming', 'Burning', 'Boom'],
                dispersants: '1.84 million gallons (controversial)',
                workers: '47,000 at peak'
            },
            
            environmentalImpact: {
                wildlife: '1 million+ seabirds killed',
                turtles: '65,000 turtles in spill zone',
                dolphins: 'Unusual mortality event for years after',
                corals: 'Deep-water coral killed up to 20 km away',
                fisheries: 'Closures affected $2.5 billion industry',
                wetlands: '1,000+ km² of wetlands affected',
                recovery: 'Ongoing - some damage permanent'
            },
            
            economicImpact: {
                bpCost: '$65 billion total',
                settlement: '$18.7 billion (largest environmental settlement ever)',
                tourism: '$22 billion losses',
                fishing: '$3 billion losses',
                jobs: '100,000+ affected'
            },
            
            aftermath: {
                regulations: 'Bureau of Safety and Environmental Enforcement created',
                moratorium: '6-month drilling moratorium',
                reforms: 'Enhanced safety requirements',
                industry: 'Drilling resumed with new rules',
                ongoing: 'Cleanup, monitoring continues'
            }
        },
        
        deadZone: {
            overview: 'One of largest hypoxic zones in world',
            
            characteristics: {
                area: '15,000 km² average (can reach 22,000 km²)',
                location: 'Louisiana-Texas continental shelf',
                depth: 'Bottom waters, up to 20m deep',
                oxygen: '<2 mg/L (vs normal 8+ mg/L)',
                ranking: 'Second largest in world'
            },
            
            cause: {
                primary: 'Mississippi River agricultural runoff',
                nutrients: 'Nitrogen and phosphorus from fertilizers',
                source: '41% of continental US drains to Gulf',
                farms: '70% of nutrients from agriculture',
                algae: 'Nutrients fuel algae blooms',
                decomposition: 'Bacteria decompose algae, consume oxygen'
            },
            
            seasonality: {
                formation: 'Begins in spring',
                peak: 'July-August',
                breakup: 'Fall winds mix water, bring oxygen',
                hurricanes: 'Can temporarily eliminate dead zone'
            },
            
            impact: {
                fish: 'Fish flee or die',
                shrimp: 'Shrimp populations affected',
                crab: 'Crabs impacted',
                benthic: 'Bottom dwellers killed',
                fisheries: 'Economic impact on $2.8 billion industry'
            },
            
            trends: {
                1950s: 'Rarely observed',
                1970s: 'Became regular',
                2017: 'Largest ever recorded (22,730 km²)',
                average: 'Roughly size of New Jersey',
                climate: 'Likely to worsen with warming'
            },
            
            solutions: {
                goal: 'Reduce to 5,000 km² by 2035',
                challenge: 'Requires upstream action in 31 states',
                progress: 'Little improvement - nitrogen levels stable',
                farming: 'Need better nutrient management',
                cost: '$2.7 billion/year needed'
            }
        },
        
        economicImportance: {
            overview: 'Economic engine of American South',
            tradeValue: '$750 billion annually',
            
            oilAndGas: {
                production: '$40 billion/year',
                refining: '$200 billion/year',
                petrochemicals: '$100 billion/year',
                employment: '800,000+ jobs'
            },
            
            majorPorts: [
                { 
                    name: 'Houston Ship Channel / Port of Houston', 
                    country: 'USA',
                    state: 'Texas', 
                    ranking: '#1 US by tonnage, #6 global',
                    trade: '$300 billion',
                    types: 'Oil, petrochemicals, containers',
                    length: '53-mile channel',
                    refineries: '14 refineries nearby',
                    expansion: '$1 billion expansion underway'
                },
                { 
                    name: 'Port of South Louisiana', 
                    country: 'USA',
                    state: 'Louisiana', 
                    ranking: '#1 US by tonnage (bulk)',
                    trade: '$100 billion',
                    mississippi: 'At mouth of Mississippi',
                    grain: 'Largest grain export in Western Hemisphere'
                },
                { 
                    name: 'New Orleans', 
                    country: 'USA',
                    state: 'Louisiana', 
                    ranking: '#5 US by tonnage',
                    types: 'Containers, breakbulk, cruise',
                    river: 'Mississippi River gateway',
                    history: 'Founded 1718, strategic for centuries'
                },
                { 
                    name: 'Corpus Christi', 
                    country: 'USA',
                    state: 'Texas', 
                    ranking: '#3 US by tonnage',
                    types: 'Crude oil exports',
                    growth: 'Fastest growing US port',
                    exports: 'Major crude export hub since 2015'
                },
                { 
                    name: 'Tampa', 
                    country: 'USA',
                    state: 'Florida', 
                    ranking: 'Florida\'s largest',
                    trade: '$50 billion',
                    phosphate: 'World\'s largest phosphate port'
                },
                { 
                    name: 'Veracruz', 
                    country: 'Mexico', 
                    ranking: 'Mexico\'s largest Gulf port',
                    history: 'Spain\'s gateway to Mexico (founded 1519)',
                    automotive: 'Major auto import/export'
                }
            ],
            
            fishing: {
                value: '$1 billion annually',
                percentUSSeafood: '40% of US commercial seafood',
                species: {
                    shrimp: 'Gulf shrimp - premium product',
                    oysters: 'Major producer',
                    redSnapper: 'Prized sport/commercial fish',
                    menhaden: 'Largest fish harvest by volume',
                    blueCrab: 'Significant fishery'
                },
                employment: '50,000+ jobs'
            },
            
            tourism: {
                visitors: '100+ million/year',
                value: '$30 billion annually',
                destinations: ['Florida beaches', 'Gulf Shores', 'South Padre Island', 'New Orleans', 'Cancun'],
                cruises: 'Major embarkation ports (Galveston, New Orleans, Tampa)'
            },
            
            shipping: {
                intracoastal: 'Gulf Intracoastal Waterway',
                mississippi: 'Access to heartland via river',
                containers: 'Growing container business'
            }
        },
        
        geopolitics: {
            strategicImportance: 'Very High - US energy security',
            tensionLevel: 'Low (between nations)',
            
            issues: [
                { 
                    name: 'Energy Security', 
                    parties: ['USA'], 
                    description: 'Critical US domestic energy',
                    
                    details: {
                        production: '17% of US oil from Gulf',
                        refining: '45% of US refining capacity on Gulf coast',
                        vulnerability: 'Hurricanes can disrupt 95% of production',
                        strategic: 'SPR (Strategic Petroleum Reserve) stored on Gulf coast'
                    }
                },
                { 
                    name: 'Hurricane Risk', 
                    parties: ['USA', 'Mexico'], 
                    description: 'Major infrastructure damage risk',
                    
                    details: {
                        frequency: 'Major storm every 2-3 years',
                        damage: 'Katrina/Harvey each $125 billion',
                        energy: 'Disrupts production, refining, shipping',
                        adaptation: 'Improved building codes, levees, evacuation'
                    }
                },
                { 
                    name: 'Immigration', 
                    parties: ['USA', 'Mexico', 'Cuba'], 
                    description: 'Migration routes',
                    
                    details: {
                        cubans: 'Historic boat migration to Florida',
                        mexicoBorder: 'Gulf border areas see crossings',
                        coastGuard: 'Active interdiction'
                    }
                },
                { 
                    name: 'Drug Trafficking', 
                    parties: ['USA', 'Mexico'], 
                    description: 'Smuggling routes',
                    
                    details: {
                        routes: 'Fast boats, submarines used',
                        methods: 'Night landings on remote beaches',
                        enforcement: 'Coast Guard, DEA operations'
                    }
                },
                { 
                    name: 'Cuba Drilling', 
                    parties: ['USA', 'Cuba'], 
                    description: 'Potential offshore development',
                    
                    details: {
                        cubanReserves: '5-9 billion barrels estimated',
                        usOpposition: 'Embargo limits development',
                        spillFear: 'Spill could affect Florida',
                        jointPrep: 'Limited spill response cooperation'
                    }
                }
            ],
            
            militaryPresence: {
                coastGuard: 'District 8 (New Orleans) - largest',
                navy: 'NAS Pensacola, NAS Corpus Christi, NAS Key West',
                training: 'Major pilot training',
                homeland: 'Port security'
            },
            
            usMexicoBoundary: {
                treaty: '1978 Treaty',
                eez: 'Divided roughly equally',
                transboundary: '2012 agreement allows shared exploitation',
                reserves: 'Significant oil/gas straddles boundary'
            }
        },
        
        environment: {
            climate: 'Subtropical to tropical',
            waterTemp: '18-30°C seasonal variation',
            salinity: '36 ppt (close to average ocean)',
            
            ecosystem: {
                estuaries: 'Extensive estuarine systems',
                wetlands: 'Largest coastal wetlands in US',
                seagrass: 'Extensive seagrass meadows',
                reefs: 'Coral reefs (Flower Garden Banks), artificial reefs',
                deepSea: 'Cold seeps, chemosynthetic communities'
            },
            
            biodiversity: {
                species: '15,000+ marine species',
                fish: '1,500+ fish species',
                mammals: ['Dolphins', 'Whales', 'Manatees'],
                turtles: '5 species nest on beaches',
                birds: 'Major flyway - millions migrate through',
                dolphins: 'Largest dolphin populations in US waters'
            },
            
            threats: [
                'Dead zone - hypoxia kills marine life',
                'Oil spills - Deepwater Horizon ongoing effects',
                'Hurricanes - natural but increasing intensity',
                'Climate change - warming, acidification',
                'Overfishing - some stocks depleted',
                'Coastal erosion - Louisiana losing land rapidly',
                'Pollution - urban, agricultural, industrial'
            ],
            
            coastalErosion: {
                louisiana: 'Losing football field of wetland per hour',
                causes: ['Levees preventing sediment delivery', 'Sea level rise', 'Subsidence', 'Canals for oil/gas'],
                rate: '75 km² lost per year',
                impact: 'New Orleans more vulnerable',
                solutions: 'Coastal restoration - $50 billion plan'
            },
            
            flowerGardenBanks: {
                type: 'Northernmost coral reefs in continental US',
                location: '160 km off Texas/Louisiana',
                depth: '17-40 meters',
                status: 'National Marine Sanctuary',
                health: 'Relatively healthy - far from pollution'
            }
        },
        
        history: {
            geological: {
                formation: '300 million years ago (basin formed)',
                flooding: '66 million years ago (as dinosaurs died)',
                chicxulub: 'Asteroid impact formed Yucatan crater',
                ice: 'Sea level changes during ice ages'
            },
            
            indigenous: {
                peoples: ['Maya', 'Aztec', 'Karankawa', 'Calusa'],
                fishing: 'Extensive coastal cultures',
                trade: 'Maritime trade networks'
            },
            
            european: {
                spanish: '1519 - Cortés landed at Veracruz',
                exploration: 'Spanish explored entire Gulf',
                colonization: 'Spanish, French, British colonies',
                newOrleans: '1718 - French founded New Orleans'
            },
            
            american: {
                louisianaPurchase: '1803 - US acquired Louisiana',
                texas: '1845 - Texas joined US',
                mexicanWar: '1846-48 - US-Mexico War',
                civilWar: 'Naval blockade of Gulf ports'
            },
            
            oilEra: {
                spindletop: '1901 - Texas oil boom began (inland)',
                offshore: '1938 - First offshore well (shallow)',
                deepwater: '1990s - Deepwater revolution',
                current: 'World leader in deepwater technology'
            }
        },
        
        funFacts: [
            'Contains the largest ocean dead zone in Western Hemisphere',
            '40% of US commercial seafood comes from the Gulf',
            'Deepwater Horizon 2010 was largest marine oil spill in history',
            '27,000 abandoned oil wells on the seafloor',
            'Loop Current can accelerate hurricanes from Cat 3 to Cat 5 in 24 hours',
            'Houston Ship Channel is the busiest waterway in the USA',
            'Chicxulub asteroid (dinosaur extinction) impacted here 66 million years ago',
            'Louisiana loses a football field of wetland every hour',
            'Gulf produces 17% of US oil and 5% of gas',
            '1900 Galveston hurricane killed 8,000-12,000 - deadliest US disaster',
            'The Gulf was dry land during last ice age (18,000 years ago)',
            'Flower Garden Banks are northernmost coral reefs in Americas'
        ]
    },

    // ═══════════════════════════════════════════════════════
    // RED SEA - MASSIVELY EXPANDED
    // ═══════════════════════════════════════════════════════
    {
        id: 'red-sea',
        name: 'Red Sea',
        parentOcean: 'Indian Ocean',
        parentOceanId: 'indian-ocean',
        
        area: 438000,
        avgDepth: 490,
        maxDepth: 3040,
        volume: '233,000 km³',
        
        coordinates: [20, 38],
        defaultZoom: 5,
        
        image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=500',
        backgroundImage: 'https://images.unsplash.com/photo-1559825481-12a05cc00344?w=1920',
        
        etymology: {
            english: 'Red Sea - origin disputed',
            theories: [
                'Trichodesmium erythraeum (red algae blooms)',
                'Red-colored Harei Edom mountains nearby',
                'Ancient directional naming (South was Red)',
                'Himyarites (ancient red-skinned people)'
            ],
            arabic: 'البحر الأحمر (al-Baḥr al-Aḥmar)',
            hebrew: 'יַם סוּף (Yam Suph - "Sea of Reeds")',
            ancient: 'Mare Rubrum (Latin), Erythra Thalassa (Greek)'
        },
        
        physicalCharacteristics: {
            shape: 'Elongated - 2,250 km long, 355 km max width',
            formation: 'Rift between African and Arabian plates',
            age: 'Began forming 30 million years ago',
            growth: '1-1.5 cm per year widening',
            future: 'Will become new ocean in 200 million years',
            connection: 'Almost landlocked - Bab el-Mandeb only natural exit'
        },
        
        borderingCountries: [
            { 
                name: 'Egypt', 
                coastlineKm: 1200, 
                cities: ['Suez', 'Hurghada', 'Sharm el-Sheikh', 'Safaga', 'El Gouna'],
                suezCanal: 'Northern terminus at Port Said',
                tourism: 'Major diving/resort destination',
                oilPipeline: 'SUMED pipeline to Mediterranean',
                eez: '178,652 km²'
            },
            { 
                name: 'Sudan', 
                coastlineKm: 853, 
                cities: ['Port Sudan', 'Suakin'],
                ports: 'Limited infrastructure',
                tourism: 'Undeveloped - pristine reefs',
                goldMining: 'Inland mining activity'
            },
            { 
                name: 'Eritrea', 
                coastlineKm: 1151, 
                cities: ['Massawa', 'Assab'],
                islands: 'Dahlak Archipelago (350+ islands)',
                status: 'Isolated, authoritarian government',
                potential: 'Undeveloped tourism potential'
            },
            { 
                name: 'Djibouti', 
                coastlineKm: 314, 
                cities: ['Djibouti City'],
                babElMandeb: 'Controls chokepoint',
                military: 'Most foreign military bases of any country',
                significance: 'Strategic position'
            },
            { 
                name: 'Saudi Arabia', 
                coastlineKm: 1840, 
                cities: ['Jeddah', 'Yanbu', 'King Abdullah Economic City'],
                jeddah: 'Gateway to Mecca for pilgrims',
                neom: '$500 billion futuristic city project',
                redSeaProject: '$10 billion tourism development',
                eez: '175,000 km²'
            },
            { 
                name: 'Yemen', 
                coastlineKm: 440, 
                cities: ['Aden (Gulf of Aden)', 'Mocha', 'Hodeidah'],
                status: 'Civil war since 2014',
                houthis: 'Control northern Red Sea coast',
                attacks: 'Attacking ships since 2023',
                hodeidah: 'Main port - lifeline for humanitarian aid'
            },
            { 
                name: 'Jordan', 
                coastlineKm: 26, 
                cities: ['Aqaba'],
                onlyPort: 'Jordan\'s only sea access',
                tourism: 'Diving destination',
                petra: 'Petra nearby'
            },
            { 
                name: 'Israel', 
                coastlineKm: 12, 
                cities: ['Eilat'],
                onlyRedSea: 'Israel\'s only Red Sea access',
                tourism: 'Major resort city',
                oilPipeline: 'EAPC pipeline to Mediterranean'
            }
        ],
        
        straits: [
            { 
                name: 'Bab el-Mandeb', 
                meaning: 'Gate of Tears (Arabic)',
                connectsTo: 'Gulf of Aden', 
                width: 26,
                depth: 310,
                annualShips: 25000,
                oilBarrels: 6200000,
                percentGlobalTrade: 12,
                
                control: {
                    west: 'Djibouti',
                    east: 'Yemen',
                    islands: 'Perim (Yemen) in middle'
                },
                
                houthiCrisis2024: {
                    start: 'November 19, 2023',
                    trigger: 'Israel-Gaza conflict',
                    attacksCount: '50+ ships attacked/threatened by May 2024',
                    targets: 'Ships with claimed Israel connection (many random)',
                    weapons: ['Anti-ship ballistic missiles', 'Cruise missiles', 'Drones', 'Speedboats'],
                    deaths: '4 crew killed (March 2024)',
                    sunk: '2 ships (Rubymar, True Confidence)',
                    
                    shippingImpact: {
                        rerouting: '90% of container ships rerouting to Cape',
                        suezDecline: 'Suez traffic down 60%+',
                        addedDays: '10-14 days via Cape',
                        addedCost: '$1 million+ per voyage',
                        ratesIncrease: 'Container rates up 300%+'
                    },
                    
                    militaryResponse: {
                        prosperityGuardian: 'US-led coalition formed December 2023',
                        participants: ['USA', 'UK', 'France', 'Italy', 'others'],
                        strikes: 'US/UK airstrikes on Yemen since January 2024',
                        effectiveness: 'Limited - attacks continue',
                        carriers: 'USS Eisenhower, USS Roosevelt deployed'
                    },
                    
                    economicImpact: {
                        suezRevenue: 'Egypt losing $500M+ per month',
                        insuranceCosts: 'War risk premiums up 1000%+',
                        inflation: 'Contributing to global inflation',
                        supplyChains: 'Delays affecting European imports'
                    }
                },
                
                historicSignificance: 'Controlled access to Red Sea for millennia'
            },
            { 
                name: 'Suez Canal', 
                connectsTo: 'Mediterranean Sea', 
                width: 313,
                depth: 24,
                length: 193,
                annualShips: 19000,
                opened: 1869,
                
                builder: {
                    name: 'Ferdinand de Lesseps',
                    nationality: 'French',
                    duration: '10 years to build',
                    workers: '1.5 million, 120,000 died'
                },
                
                history: {
                    1869: 'Opened November 17',
                    1875: 'UK bought Egypt\'s shares',
                    1882: 'British occupation began',
                    1956: 'Nasser nationalized, Suez Crisis',
                    1967: 'Closed 8 years (Six-Day War)',
                    1975: 'Reopened',
                    2015: 'New Suez Canal expansion opened',
                    2021: 'Ever Given blockage (6 days)'
                },
                
                statistics: {
                    dailyShips: '50-60 average',
                    transitTime: '12-16 hours',
                    saves: '7,000+ km vs Cape route',
                    timeSaved: '14+ days',
                    revenue2023: '$9.4 billion'
                },
                
                everGivenBlockage: {
                    date: 'March 23-29, 2021',
                    ship: 'Ever Given (400m, 20,000 TEU)',
                    cause: 'Strong winds, human error',
                    duration: '6 days, 7 hours',
                    stuck: 'Ran aground, blocked canal diagonally',
                    shipsBlocked: '422 ships',
                    salvage: '8 tugboats, dredging',
                    refloat: 'High tide helped',
                    cost: '$10 billion/day in delayed trade',
                    totalImpact: '$60 billion trade delayed',
                    settlement: 'Egypt received $550 million from owners'
                },
                
                expansion2015: {
                    name: 'New Suez Canal',
                    cost: '$8.5 billion',
                    length: '35 km new parallel channel',
                    benefit: 'Allows two-way traffic',
                    reduction: 'Transit time reduced 11 hours'
                },
                
                vulnerability: {
                    conflict: 'Regional instability threat',
                    terrorism: 'Possible target',
                    blockage: 'Single point of failure',
                    alternatives: 'Cape route, Sumed pipeline'
                }
            },
            { 
                name: 'Strait of Tiran', 
                connectsTo: 'Gulf of Aqaba', 
                width: 8,
                between: 'Sinai Peninsula and Tiran Island',
                depth: 290,
                
                significance: {
                    israelAccess: 'Only Israeli access to Red Sea',
                    1967war: 'Egyptian closure triggered Six-Day War',
                    peaceTreaty: '1979 Egypt-Israel treaty guarantees access',
                    tiranIsland: 'Saudi Arabia (transferred from Egypt 2017)'
                }
            }
        ],
        
        geology: {
            riftValley: 'Part of Great Rift Valley system',
            
            formation: {
                start: '30 million years ago',
                process: 'African and Arabian plates separating',
                rate: '1-1.5 cm/year widening',
                volcanism: 'Volcanic activity along rift',
                earthquakes: 'Regular seismic activity'
            },
            
            future: {
                prediction: 'Will become new ocean',
                timeline: '200 million years',
                comparison: 'Like Atlantic 180 million years ago'
            },
            
            hotBrines: {
                discovery: '1960s',
                locations: 'Multiple deeps in central Red Sea',
                temperature: 'Up to 60°C',
                salinity: '10x normal seawater',
                minerals: 'Rich in metals (zinc, copper, silver, gold)',
                value: 'Billions of dollars potential',
                life: 'Extremophile bacteria thrive',
                research: 'Biotech interest'
            },
            
            deeps: [
                { name: 'Atlantis II Deep', depth: 2200, temp: '68°C', area: '60 km²' },
                { name: 'Discovery Deep', depth: 2228, temp: '45°C' },
                { name: 'Chain Deep', depth: 2072 }
            ]
        },
        
        biodiversity: {
            overview: 'Among healthiest coral reefs in world',
            
            coralReefs: {
                area: '3,800 km² of coral reefs',
                hardCorals: '300+ species',
                softCorals: '120+ species',
                health: 'Relatively good - heat-adapted',
                research: 'Studied for climate resilience',
                bleaching: 'Less bleaching than other reefs',
                reason: 'Already adapted to warm water'
            },
            
            uniqueness: {
                endemic: '10% of species found nowhere else',
                isolation: 'Nearly enclosed sea promotes speciation',
                adaptations: 'High salinity, temperature tolerance'
            },
            
            marineLife: {
                fishSpecies: '1,200+ species',
                sharks: ['Oceanic whitetip', 'Hammerhead', 'Tiger', 'Grey reef', 'Whale shark'],
                rays: ['Manta rays', 'Eagle rays'],
                turtles: ['Green', 'Hawksbill'],
                mammals: ['Dugongs', 'Dolphins', 'Humpback whales'],
                iconic: ['Napoleon wrasse', 'Clownfish', 'Moray eels', 'Parrotfish']
            },
            
            threats: [
                'Coastal development (NEOM, Red Sea Project)',
                'Tourism pressure (diving, anchoring)',
                'Pollution (shipping, cities)',
                'Climate change (still affects despite resilience)',
                'Overfishing',
                'Invasive species (via Suez)'
            ],
            
            diving: {
                worldClass: 'Top 5 diving destination globally',
                sites: ['Ras Mohammed', 'Thistlegorm wreck', 'Brothers Islands', 'Elphinstone Reef'],
                visibility: '30-50 meters common',
                sharks: 'Excellent shark diving',
                wrecks: 'Many historic wrecks'
            }
        },
        
        climate: {
            type: 'Arid, extremely hot',
            
            temperature: {
                airSummer: '35-45°C',
                airWinter: '20-30°C',
                waterSummer: '28-32°C',
                waterWinter: '22-26°C'
            },
            
            rainfall: {
                annual: '25-75 mm (extremely low)',
                pattern: 'Mostly winter',
                evaporation: 'Far exceeds rainfall'
            },
            
            salinity: {
                level: '36-40 ppt (higher than ocean average)',
                cause: 'High evaporation, no river input',
                gradient: 'Higher in north'
            },
            
            winds: {
                northerly: 'Predominant, year-round',
                sandstorms: 'Haboob dust storms affect visibility'
            }
        },
        
        economicImportance: {
            overview: 'Suez Canal route gateway - critical for global trade',
            tradeValue: '$1 trillion annual transit',
            percentGlobalTrade: 12,
            
            suezCanal: {
                revenue: '$9.4 billion (2023)',
                decline2024: 'Down 40%+ due to Houthi attacks',
                lossPerMonth: '$500 million+ for Egypt',
                employment: '25,000 direct jobs'
            },
            
            majorPorts: [
                { 
                    name: 'Port of Jeddah', 
                    country: 'Saudi Arabia', 
                    type: 'Container and general cargo',
                    ranking: 'Largest Red Sea port',
                    pilgrimage: '2 million+ Hajj pilgrims use annually',
                    containers: '4.4M TEU'
                },
                { 
                    name: 'Port Sudan', 
                    country: 'Sudan', 
                    type: 'Sudan\'s main port',
                    status: 'Infrastructure poor but critical',
                    civilWar: 'Affected by 2023 Sudan conflict'
                },
                { 
                    name: 'Port of Aqaba', 
                    country: 'Jordan', 
                    type: 'Jordan\'s only port',
                    significance: 'Critical for landlocked Jordan',
                    containers: '1M TEU'
                },
                { 
                    name: 'Port of Eilat', 
                    country: 'Israel', 
                    type: 'Israel\'s Red Sea port',
                    status: 'Limited capacity, tourism focus',
                    pipeline: 'Connects to Mediterranean via EAPC'
                },
                { 
                    name: 'Hodeidah', 
                    country: 'Yemen', 
                    type: 'Yemen\'s main Red Sea port',
                    status: 'Humanitarian lifeline, war-damaged',
                    imports: '70% of Yemen\'s imports'
                }
            ],
            
            tourism: {
                diving: 'World-class - $3 billion industry',
                egypt: ['Sharm el-Sheikh', 'Hurghada', 'Dahab', 'Marsa Alam'],
                israel: ['Eilat'],
                jordan: ['Aqaba'],
                saudiVision2030: 'Massive new tourism development',
                cruise: 'Growing cruise market'
            },
            
            saudiMegaprojects: {
                neom: {
                    investment: '$500 billion',
                    description: 'Futuristic city/region',
                    theLine: '170 km long linear city',
                    controversy: 'Displacement of tribe',
                    timeline: 'Phase 1 by 2030'
                },
                redSeaProject: {
                    investment: '$10 billion',
                    islands: '90+ islands developed',
                    resorts: '50 hotels, 8,000 rooms',
                    regeneration: 'Claims environmental focus'
                },
                amaala: {
                    investment: '$3 billion',
                    focus: 'Ultra-luxury tourism',
                    arts: 'Arts and wellness focus'
                }
            },
            
            fisheries: {
                production: '500,000 tonnes/year',
                traditional: 'Artisanal fishing dominant',
                species: ['Tuna', 'Mackerel', 'Sardines', 'Shrimp'],
                pearl: 'Historic pearl diving (now ended)'
            }
        },
        
        geopolitics: {
            strategicImportance: 'Critical',
            tensionLevel: 'Very High (2024)',
            
            issues: [
                { 
                    name: 'Houthi Attacks (2023-2024)', 
                    parties: ['Yemen Houthis', 'USA', 'UK', 'Israel', 'Iran'], 
                    description: 'Attacks on commercial shipping',
                    
                    details: {
                        motivation: 'Solidarity with Gaza, pressure on Israel',
                        iranRole: 'Weapons, intelligence support',
                        impact: 'Major shipping rerouted',
                        response: 'US/UK airstrikes, naval patrols',
                        effectiveness: 'Attacks continue despite strikes',
                        escalation: 'Risk of wider regional war',
                        outcome: 'Ongoing as of 2024'
                    }
                },
                { 
                    name: 'Ethiopia-Egypt Tensions', 
                    parties: ['Ethiopia', 'Egypt', 'Sudan'], 
                    description: 'GERD dam water dispute',
                    
                    details: {
                        gerd: 'Grand Ethiopian Renaissance Dam',
                        egyptFear: 'Nile water reduction',
                        history: 'Egypt depends on Nile for 97% of water',
                        threat: 'Egypt has threatened military action',
                        status: 'Negotiations stalled',
                        filling: 'Ethiopia filling dam despite objections'
                    }
                },
                { 
                    name: 'Horn of Africa Instability', 
                    parties: ['Somalia', 'Eritrea', 'Ethiopia', 'Djibouti'], 
                    description: 'Regional conflicts',
                    
                    details: {
                        somalia: 'Al-Shabaab insurgency ongoing',
                        eritrea: 'Authoritarian, isolated',
                        ethiopia: 'Tigray War ended 2022, other conflicts',
                        djibouti: 'Stable but surrounded by instability'
                    }
                },
                { 
                    name: 'Sudan Civil War', 
                    parties: ['SAF', 'RSF'], 
                    description: 'War since April 2023',
                    
                    details: {
                        start: 'April 15, 2023',
                        parties: 'Sudanese Armed Forces vs. Rapid Support Forces',
                        deaths: '15,000+ by 2024',
                        displaced: '8 million+',
                        portSudan: 'Became de facto capital',
                        redSeaImpact: 'Limited - fighting mainly in Khartoum, Darfur'
                    }
                },
                { 
                    name: 'Yemen Civil War', 
                    parties: ['Houthis', 'Saudi Arabia', 'UAE', 'Iran'], 
                    description: 'Ongoing since 2014',
                    
                    details: {
                        start: '2014 Houthi takeover',
                        saudiIntervention: 'March 2015 - ongoing',
                        deaths: '150,000+ (war and famine)',
                        famine: '85,000+ children died of hunger',
                        truce: '2022 truce mostly holding',
                        redSea: 'Houthis control northern coast'
                    }
                }
            ],
            
            navalPresences: [
                { 
                    country: 'USA', 
                    base: 'Camp Lemonnier (Djibouti)', 
                    purpose: 'Anti-piracy, counterterrorism, Houthi response',
                    assets: ['4,000 personnel', 'Carrier strike groups rotate', 'Drones'],
                    operations: ['Operation Prosperity Guardian (2023-)', 'Houthi strikes'],
                    significance: 'Only permanent US base in Africa'
                },
                { 
                    country: 'China', 
                    base: 'Djibouti Naval Base', 
                    purpose: 'First overseas base (2017)',
                    assets: ['2,000 personnel', 'Possible 10,000 capacity', 'Ships rotate'],
                    expansion: 'Pier can berth aircraft carriers',
                    significance: 'Major strategic milestone for China'
                },
                { 
                    country: 'France', 
                    base: 'Djibouti (largest foreign deployment)', 
                    purpose: 'Historic presence since 1977',
                    assets: ['1,500 personnel', 'Fighter aircraft', 'Naval vessels'],
                    significance: 'Colonial legacy, EU interests'
                },
                { 
                    country: 'Japan', 
                    base: 'Djibouti', 
                    purpose: 'Anti-piracy (only overseas base)',
                    assets: ['200 personnel', 'P-3C patrol aircraft'],
                    significance: 'First overseas base since WWII'
                },
                { 
                    country: 'Italy', 
                    base: 'Djibouti', 
                    purpose: 'Anti-piracy, regional presence'
                },
                { 
                    country: 'Saudi Arabia', 
                    assets: 'Growing Red Sea fleet',
                    purpose: 'Yemen operations, regional security',
                    expansion: 'Building naval capabilities'
                },
                { 
                    country: 'Egypt', 
                    base: 'Multiple - Berenice major expansion', 
                    purpose: 'Suez Canal protection, regional power',
                    berenice: 'New base opened 2020 - largest Egyptian Red Sea base'
                },
                { 
                    country: 'Israel', 
                    assets: 'Submarine presence, naval patrols',
                    purpose: 'Iran monitoring, regional defense',
                    submarines: 'Dolphin-class (nuclear-capable)'
                },
                { 
                    country: 'Iran', 
                    assets: 'No permanent base but proxy (Houthis)',
                    purpose: 'Disruption via Houthi allies',
                    intelligence: 'Provides targeting data'
                }
            ],
            
            djiboutiStrategic: {
                bases: '6+ foreign military bases',
                countries: ['USA', 'China', 'France', 'Japan', 'Italy', 'Spain (rotational)'],
                reason: 'Controls Bab el-Mandeb chokepoint',
                income: 'Military rent is major revenue',
                uniqueness: 'Only country hosting both US and Chinese bases',
                concern: 'Balancing act between powers'
            }
        },
        
        history: {
            ancient: {
                egypt: 'Pharaohs traded via Red Sea',
                landOfPunt: 'Egyptian expeditions to Punt (Somalia?)',
                canal: 'Ancient canal connecting Nile to Red Sea',
                greeks: 'Ptolemies developed trade',
                romans: 'Major trade with India'
            },
            
            islamic: {
                trade: 'Arab dhow trade flourished',
                pilgrimage: 'Route to Mecca for African Muslims',
                jeddah: 'Major pilgrimage port',
                spices: 'Spice trade route'
            },
            
            european: {
                portuguese: '1513 - First Europeans in Red Sea',
                ottoman: 'Ottoman control for centuries',
                british: '1839 - Aden taken, 1869 - Suez opened',
                italian: 'Italian Eritrea (1882-1941)'
            },
            
            suezCanal: {
                concept: 'Ancient pharaohs had canal',
                modern: 'Ferdinand de Lesseps 1859-1869',
                impact: 'Transformed global trade',
                crises: ['1956 Suez Crisis', '1967-75 closure', '2021 blockage']
            },
            
            biblical: {
                moses: 'Parting of Sea of Reeds (Yam Suph)',
                location: 'Debated - Gulf of Aqaba or elsewhere',
                exodus: 'Israelite escape from Egypt'
            }
        },
        
        culturalSignificance: {
            pilgrimage: {
                hajj: 'Millions arrive via Jeddah for Mecca',
                history: 'Ancient pilgrimage route',
                jeddah: 'Gateway to holy cities'
            },
            
            trade: {
                ancientRoute: 'Spices, incense, gold',
                frankincense: 'Arabia Felix (Happy Arabia) export',
                coffeeRoute: 'Coffee from Yemen to world'
            },
            
            diving: {
                worldHeritage: 'Underwater treasures',
                pioneers: 'Jacques Cousteau filmed here',
                industry: 'Major diving destination'
            }
        },
        
        funFacts: [
            'Sea is growing 1-1.5 cm wider each year due to tectonic spreading',
            'One of the saltiest seas in the world (36-40 ppt)',
            'Coral reefs here are among the healthiest on Earth - resist bleaching',
            'Ever Given blockage 2021 cost $10 billion per day',
            'Name may come from red algae blooms or red-colored mountains',
            'Moses crossing is said to have occurred here (Sea of Reeds)',
            'Contains hot brine pools at 60°C with unique life forms',
            'Djibouti hosts both American and Chinese military bases',
            'Suez Canal opened in 1869 - 120,000 workers died building it',
            '6 foreign countries have military bases in Djibouti',
            'Saudi Arabia is investing $500 billion in NEOM on the coast',
            'Houthi attacks in 2024 rerouted 90% of container ships',
            '10% of Red Sea species are found nowhere else on Earth',
            'Will become a new ocean in 200 million years'
        ]
    },

    // ═══════════════════════════════════════════════════════
    // NORTH SEA - MASSIVELY EXPANDED
    // ═══════════════════════════════════════════════════════
    {
        id: 'north-sea',
        name: 'North Sea',
        parentOcean: 'Atlantic Ocean',
        parentOceanId: 'atlantic-ocean',
        
        area: 570000,
        avgDepth: 90,
        maxDepth: 700,
        volume: '54,000 km³',
        
        coordinates: [56, 3],
        defaultZoom: 5,
        
        image: 'https://images.unsplash.com/photo-1515890435782-59a5bb6ec191?w=500',
        backgroundImage: 'https://images.unsplash.com/photo-1516690553959-71a414d6b9b6?w=1920',
        
        etymology: {
            english: 'North Sea - relative to Germany/Netherlands',
            dutch: 'Noordzee',
            german: 'Nordsee',
            french: 'Mer du Nord',
            ancient: 'Mare Germanicum (Roman - German Sea)'
        },
        
        physicalCharacteristics: {
            shape: 'Shallow epicontinental sea',
            shallowness: 'Average only 90m - very shallow',
            formation: 'Flooded during sea level rise after ice age',
            doggerland: 'Was land bridge UK-Europe until 8,000 years ago',
            connection: 'Open to Atlantic (north), Baltic (east via straits)'
        },
        
        borderingCountries: [
            { 
                name: 'United Kingdom', 
                coastlineKm: 2000, 
                cities: ['Edinburgh', 'Aberdeen', 'Newcastle', 'Hull', 'London (Thames)'],
                oilCapital: 'Aberdeen - oil and gas hub',
                fishing: 'Major fishing ports',
                natoMember: true
            },
            { 
                name: 'Norway', 
                coastlineKm: 2500, 
                cities: ['Stavanger', 'Bergen', 'Oslo (Oslofjord)'],
                oilCapital: 'Stavanger - Norwegian oil hub',
                oilFund: '$1.4 trillion sovereign wealth fund',
                natoMember: true
            },
            { 
                name: 'Denmark', 
                coastlineKm: 700, 
                cities: ['Esbjerg', 'Copenhagen (via Kattegat)'],
                wind: 'Pioneer of offshore wind',
                natoMember: true
            },
            { 
                name: 'Germany', 
                coastlineKm: 450, 
                cities: ['Hamburg', 'Bremerhaven', 'Cuxhaven'],
                hamburg: 'Europe\'s 3rd largest port',
                waddenSea: 'UNESCO World Heritage',
                natoMember: true
            },
            { 
                name: 'Netherlands', 
                coastlineKm: 450, 
                cities: ['Rotterdam', 'Amsterdam', 'The Hague'],
                rotterdam: 'Europe\'s largest port',
                flooding: 'Much land below sea level',
                deltaWorks: 'World\'s largest flood defense',
                natoMember: true
            },
            { 
                name: 'Belgium', 
                coastlineKm: 65, 
                cities: ['Zeebrugge', 'Antwerp (via Scheldt)'],
                antwerp: 'Europe\'s 2nd largest port',
                natoMember: true
            },
            { 
                name: 'France', 
                coastlineKm: 200, 
                cities: ['Dunkirk', 'Calais'],
                channelPorts: 'Major ferry ports',
                dunkirk: 'WWII evacuation site',
                natoMember: true
            }
        ],
        
        straits: [
            { 
                name: 'English Channel', 
                connectsTo: 'Atlantic Ocean', 
                width: 240,
                narrowest: 33,
                annualShips: 200000,
                significance: 'UK-Continent separation',
                tunnelBelow: 'Channel Tunnel (50 km)'
            },
            { 
                name: 'Dover Strait', 
                connectsTo: 'English Channel', 
                width: 33,
                depth: 55,
                annualShips: 180000,
                dailyShips: 500,
                ranking: 'Busiest shipping lane in world',
                between: 'UK and France',
                
                traffic: {
                    ferries: '30+ ferry crossings daily',
                    cargo: '400+ cargo ships daily',
                    tankers: 'Major oil/LNG traffic',
                    separation: 'IMO Traffic Separation Scheme'
                },
                
                migrants: {
                    crossings: '30,000+ attempted in 2023',
                    deaths: '30+ deaths per year',
                    policy: 'Controversial UK-France relations'
                }
            },
            { 
                name: 'Skagerrak', 
                connectsTo: 'Kattegat/Baltic Sea', 
                width: 140,
                depth: 700,
                between: 'Norway and Denmark/Sweden',
                significance: 'Baltic access route'
            },
            { 
                name: 'Kattegat', 
                connectsTo: 'Baltic Sea', 
                width: 70,
                between: 'Denmark and Sweden',
                depth: 'Shallow - limits large ships'
            },
            { 
                name: 'Kiel Canal', 
                type: 'Artificial canal',
                connectsTo: 'Baltic Sea', 
                length: 98,
                opened: 1895,
                annualShips: 30000,
                saves: '460 km vs Skagerrak',
                width: 162,
                depth: 11
            }
        ],
        
        oilAndGasHistory: {
            overview: 'Europe\'s most important hydrocarbon basin',
            
            discovery: {
                1959: 'Groningen gas field (Netherlands) - largest in Europe',
                1969: 'Ekofisk oil field (Norway) - major discovery',
                1970: 'Forties field (UK) - major discovery'
            },
            
            peakProduction: {
                year: 1999,
                combined: '6 million barrels/day (UK + Norway)',
                significance: 'Made UK energy exporter'
            },
            
            currentProduction: {
                combined: '3 million barrels/day (declining)',
                norway: '2 million bpd (relatively stable)',
                uk: '0.8 million bpd (declining rapidly)',
                trend: 'Mature basin - natural decline'
            },
            
            reserves: {
                extracted: '45 billion barrels oil, 120 tcf gas (so far)',
                remaining: 'Significant but diminishing',
                newFields: 'Smaller, deeper, harder to extract'
            },
            
            majorFields: [
                { 
                    name: 'Ekofisk', 
                    country: 'Norway', 
                    discovered: 1969,
                    production: 'Since 1971 - still producing',
                    status: 'Extended to 2050',
                    operator: 'ConocoPhillips'
                },
                { 
                    name: 'Forties', 
                    country: 'UK', 
                    discovered: 1970,
                    status: 'Declining',
                    operator: 'Apache (now Harbour Energy)'
                },
                { 
                    name: 'Brent', 
                    country: 'UK', 
                    discovered: 1971,
                    ceased: 2021,
                    legacy: 'Gave name to Brent Crude benchmark',
                    decommissioning: 'Ongoing'
                },
                { 
                    name: 'Johan Sverdrup', 
                    country: 'Norway', 
                    discovered: 2010,
                    production: 'Since 2019',
                    status: 'New giant - 2.7 billion barrels',
                    significance: 'Largest discovery in 30 years',
                    operator: 'Equinor'
                },
                { 
                    name: 'Groningen', 
                    country: 'Netherlands', 
                    type: 'Gas',
                    discovered: 1959,
                    status: 'Closing 2024 due to earthquakes',
                    reserves: 'Was 2,800 bcm - Europe\'s largest',
                    problem: 'Induced seismicity damaging homes'
                }
            ],
            
            brentCrude: {
                benchmark: 'Global oil price benchmark',
                origin: 'Named after Brent field',
                use: '2/3 of world\'s oil priced against Brent',
                basket: 'Now blend of 5 fields (Brent, Forties, Oseberg, Ekofisk, Troll)'
            },
            
            decommissioning: {
                challenge: 'Removing 500+ platforms',
                cost: '$100+ billion over 30 years',
                debate: 'Leave or remove? Environmental concerns',
                brentspar: '1995 - Shell tried to sink, Greenpeace protest',
                jobs: 'Opportunity for decommissioning industry'
            },
            
            transition: {
                trend: 'Oil/gas declining, wind increasing',
                policy: 'UK/Norway both net-zero targets',
                stranded: 'Risk of stranded assets',
                timeline: 'Production may cease by 2050s'
            }
        },
        
        offshoreWind: {
            overview: 'World\'s offshore wind capital',
            
            statistics: {
                currentCapacity: '31 GW installed (2024)',
                percentEurope: '70% of European offshore wind',
                percentWorld: '40% of global offshore wind',
                target2030: '150 GW planned',
                target2050: '300 GW planned'
            },
            
            largestFarms: [
                { 
                    name: 'Dogger Bank', 
                    country: 'UK', 
                    capacity: '3.6 GW (when complete 2026)',
                    turbines: '277 turbines',
                    area: '1,675 km²',
                    status: 'World\'s largest - under construction',
                    distance: '130 km offshore'
                },
                { 
                    name: 'Hornsea One', 
                    country: 'UK', 
                    capacity: '1.2 GW',
                    turbines: 174,
                    status: 'Operational 2020',
                    record: 'Was world\'s largest when opened'
                },
                { 
                    name: 'Hornsea Two', 
                    country: 'UK', 
                    capacity: '1.4 GW',
                    turbines: 165,
                    status: 'Operational 2022'
                },
                { 
                    name: 'Borssele', 
                    country: 'Netherlands', 
                    capacity: '1.5 GW',
                    status: 'Operational'
                },
                { 
                    name: 'Hollandse Kust', 
                    country: 'Netherlands', 
                    capacity: '1.5 GW',
                    status: 'Operational'
                }
            ],
            
            technology: {
                turbineSize: 'Growing from 3MW to 15MW+',
                latest: 'GE Haliade-X 14.7 MW',
                floating: 'Developing for deeper water',
                hydrogenProduction: 'Future offshore hydrogen'
            },
            
            jobs: {
                current: '100,000+ jobs',
                future: '400,000+ by 2030',
                hubs: ['Hull', 'Great Yarmouth', 'Esbjerg', 'Cuxhaven']
            },
            
            investment: {
                total: '$100 billion+ by 2030',
                annualNew: '$10-15 billion/year',
                growth: '20%+ annually'
            },
            
            interconnectors: {
                purpose: 'Link wind farms to multiple countries',
                examples: ['North Sea Link (UK-Norway)', 'Viking Link (UK-Denmark)'],
                future: 'North Sea Wind Power Hub (artificial islands)'
            }
        },
        
        economicImportance: {
            overview: 'Europe\'s energy sea - oil/gas to wind transition',
            tradeValue: '$2 trillion cargo annually',
            
            majorPorts: [
                { 
                    name: 'Rotterdam', 
                    country: 'Netherlands', 
                    ranking: '#1 Europe, #10 World',
                    containers: '14.5M TEU',
                    tonnage: '469 million tonnes',
                    petrochemicals: 'Major refinery complex',
                    significance: 'Europe\'s gateway',
                    area: '105 km² port area'
                },
                { 
                    name: 'Antwerp', 
                    country: 'Belgium', 
                    ranking: '#2 Europe',
                    containers: '12M TEU',
                    petrochemicals: '2nd largest petrochemical cluster globally',
                    significance: 'Deep into European hinterland'
                },
                { 
                    name: 'Hamburg', 
                    country: 'Germany', 
                    ranking: '#3 Europe',
                    containers: '8.7M TEU',
                    river: '100 km up Elbe River',
                    trains: 'Major rail connections to Europe'
                },
                { 
                    name: 'Bremerhaven', 
                    country: 'Germany', 
                    containers: '4.8M TEU',
                    automotive: 'World\'s largest car handling port',
                    cars: '2 million vehicles/year'
                },
                { 
                    name: 'Felixstowe', 
                    country: 'UK', 
                    ranking: 'UK\'s largest',
                    containers: '3.7M TEU',
                    brexit: 'Key post-Brexit facility'
                },
                { 
                    name: 'Aberdeen', 
                    country: 'UK', 
                    type: 'Oil and gas support',
                    nickname: 'Oil Capital of Europe',
                    transition: 'Pivoting to offshore wind'
                }
            ],
            
            fishing: {
                value: '$3 billion annually',
                keySpecies: ['Cod', 'Herring', 'Mackerel', 'Haddock', 'Plaice', 'Sole', 'Prawns'],
                issues: 'Overfishing, Brexit disputes',
                quotas: 'EU Common Fisheries Policy',
                employment: '100,000+ fishers'
            },
            
            shipping: {
                traffic: 'Among world\'s busiest',
                routes: ['Asia-Europe', 'Transatlantic', 'Intra-European'],
                doverStrait: '500+ ships/day through Dover Strait',
                challenges: ['Congestion', 'Weather', 'Collisions']
            },
            
            cables: {
                internet: '12+ major submarine cables',
                electricity: 'Multiple interconnectors',
                vulnerability: 'Concern about sabotage'
            },
            
            tourism: {
                cruises: 'Growing cruise market',
                beaches: 'UK, Netherlands, Belgium, Germany resorts',
                ferries: 'Major ferry network'
            }
        },
        
        geopolitics: {
            strategicImportance: 'High',
            tensionLevel: 'Elevated since 2022',
            
            issues: [
                { 
                    name: 'Brexit Fishing', 
                    parties: ['UK', 'EU'], 
                    description: 'Fishing rights disputes since 2021',
                    
                    details: {
                        background: 'UK left EU Common Fisheries Policy',
                        agreement: 'Trade and Cooperation Agreement (2020)',
                        transitional: 'EU access to UK waters until 2026',
                        disputes: ['License disputes', 'Jersey standoff 2021', 'Scallop wars'],
                        outcome: 'Ongoing tensions, uncertain future'
                    }
                },
                { 
                    name: 'Nord Stream Sabotage', 
                    parties: ['Unknown', 'Russia', 'NATO'], 
                    description: 'Pipelines destroyed September 2022',
                    
                    nordStreamDetails: {
                        date: 'September 26, 2022',
                        location: 'Danish and Swedish EEZ, near Bornholm island',
                        damage: '4 underwater explosions, 3 of 4 pipelines destroyed',
                        
                        pipelines: {
                            nordStream1: 'Operational since 2011, 55 bcm/year capacity',
                            nordStream2: 'Completed but never operated',
                            owner: 'Gazprom (51%) + European partners'
                        },
                        
                        methane: {
                            release: '115,000 tonnes - largest ever',
                            bubbling: 'Visible from surface, 1 km wide',
                            climateImpact: 'Equivalent to 2% of Denmark\'s annual emissions'
                        },
                        
                        investigation: {
                            countries: ['Germany', 'Sweden', 'Denmark'],
                            sweden: 'Dropped investigation (March 2024)',
                            germany: 'Ongoing',
                            challenge: 'Underwater, remote, sophisticated'
                        },
                        
                        theories: [
                            { suspect: 'Russia', motive: 'False flag, deny own asset to claim victim' },
                            { suspect: 'Ukraine', motive: 'Remove Russian leverage over Europe' },
                            { suspect: 'USA', motive: 'Biden: "We will end it"' },
                            { suspect: 'UK', motive: 'Alleged involvement' },
                            { suspect: 'Pro-Ukraine actors', note: 'Seymour Hersh report' }
                        ],
                        
                        perpetrator: 'Unknown - speculated Ukraine-linked',
                        impact: 'Ended Russian gas via Baltic, accelerated LNG imports'
                    }
                },
                { 
                    name: 'Energy Transition', 
                    parties: ['All North Sea countries'], 
                    description: 'Shift from oil/gas to offshore wind',
                    
                    details: {
                        drivers: 'Climate commitments, energy security',
                        challenge: 'Managing decline while building renewables',
                        opportunity: 'Retraining workforce',
                        policy: 'UK/Norway/Denmark all have plans'
                    }
                },
                { 
                    name: 'Subsea Infrastructure', 
                    parties: ['NATO', 'Russia'], 
                    description: 'Critical infrastructure protection',
                    
                    details: {
                        cables: 'Internet, electricity interconnectors',
                        pipelines: 'Oil, gas pipelines',
                        russianActivity: 'Submarine/ship activity near cables',
                        concern: 'Sabotage, espionage',
                        response: 'NATO increasing patrols'
                    }
                }
            ],
            
            navalPresence: {
                uk: 'Royal Navy, Faslane submarine base',
                nato: 'Regular exercises',
                russia: 'Submarine activity',
                monitoring: 'Increased since 2022'
            }
        },
        
        environment: {
            climate: 'Temperate maritime',
            waterTemp: '6-17°C (cold)',
            salinity: '34-35 ppt',
            
            weather: {
                storms: 'Frequent - North Sea notorious for storms',
                waves: '10+ meter waves in storms',
                wind: 'Strong consistent winds (good for turbines)',
                fog: 'Common'
            },
            
            biodiversity: {
                mammals: ['Seals (grey, harbour)', 'Porpoises', 'Dolphins', 'Occasionally whales'],
                fish: ['Cod', 'Herring', 'Mackerel', 'Haddock', 'Plaice', 'Sole'],
                seabirds: ['Puffins', 'Gannets', 'Kittiwakes', 'Fulmars'],
                sharks: ['Basking sharks (seasonal)', 'Spiny dogfish']
            },
            
            overfishing: {
                history: 'Severely overfished 20th century',
                cod: 'Near collapse in 1990s',
                herring: 'Collapsed 1970s, recovering',
                quotas: 'EU management improved stocks',
                recovery: 'Some stocks recovering'
            },
            
            pollution: {
                plastic: 'Significant problem',
                oilSpills: 'Regular small spills, few major',
                shipping: 'Ballast water, fuel, waste',
                runoff: 'Agricultural and urban'
            },
            
            climateChange: {
                warming: 'Warming faster than global average',
                speciesShift: 'Southern species moving north',
                cod: 'Moving further north',
                mackerel: 'Expanding range',
                acidification: 'Increasing'
            },
            
            waddenSea: {
                status: 'UNESCO World Heritage Site',
                countries: ['Netherlands', 'Germany', 'Denmark'],
                significance: 'Largest tidal flat system in world',
                wildlife: 'Major bird migration route'
            }
        },
        
        doggerBank: {
            description: 'Large sandbank in central North Sea',
            depth: '15-36 meters (very shallow)',
            area: '17,600 km²',
            
            history: {
                iceAge: 'Was dry land during Ice Age',
                inhabitants: 'Hunters lived there until ~6000 BC',
                artifacts: 'Mammoth bones, human artifacts found',
                flooding: 'Submerged ~8,000 years ago'
            },
            
            storegga: {
                event: 'Storegga Slide tsunami ~8,200 years ago',
                cause: 'Underwater landslide off Norway',
                wave: '25-meter tsunami hit UK, Doggerland',
                impact: 'May have finished off Doggerland'
            },
            
            doggerland: {
                area: 'Connected UK to Europe',
                size: 'Larger than current UK',
                climate: 'Forests, rivers, wildlife',
                people: 'Mesolithic hunter-gatherers',
                evidence: 'Fishing trawlers find artifacts'
            },
            
            future: {
                windFarm: 'World\'s largest wind farm building here',
                capacity: '3.6 GW when complete',
                artificialIsland: 'Proposed hub for wind power'
            }
        },
        
        history: {
            viking: {
                raids: '8th-11th century - Vikings crossed North Sea',
                settlements: 'Danelaw in England',
                trade: 'Norse trade networks'
            },
            
            hanseatic: {
                period: '12th-17th century',
                league: 'Hanseatic League trade network',
                ports: 'Bergen, Hamburg, Bruges, London'
            },
            
            battles: [
                { name: 'Battle of Jutland', year: 1916, significance: 'WWI - largest naval battle' },
                { name: 'Dunkirk Evacuation', year: 1940, significance: 'WWII - 338,000 evacuated' },
                { name: 'Various WWII battles', note: 'Heavily contested' }
            ],
            
            oilEra: {
                discovery: '1959 (gas), 1969 (oil)',
                boom: '1970s-1990s - transformed UK and Norway',
                decline: '2000s onwards - declining production'
            }
        },
        
        funFacts: [
            'Contains more offshore wind capacity than rest of world combined (2024)',
            'Dogger Bank was land during Ice Age - hunters lived there until 6000 BC',
            '"Brent Crude" oil benchmark named after North Sea field',
            'Busiest shipping lanes in the world (500+ ships/day through Dover)',
            'World\'s first offshore wind farm built here (1991, Denmark)',
            'Nord Stream sabotage was largest methane release ever recorded',
            'Only 90 meters average depth - could almost stand in some parts',
            'Mammoth bones and human artifacts still found by fishing boats',
            'Groningen gas field closing due to earthquakes it caused',
            'Channel Tunnel runs under the sea - 50 km long',
            '30,000+ migrants attempted Dover crossing in 2023',
            'North Sea oil made UK energy exporter from 1980-2005'
        ]
    },

    // ═══════════════════════════════════════════════════════
    // BAY OF BENGAL - MASSIVELY EXPANDED
    // ═══════════════════════════════════════════════════════
    {
        id: 'bay-of-bengal',
        name: 'Bay of Bengal',
        parentOcean: 'Indian Ocean',
        parentOceanId: 'indian-ocean',
        
        area: 2172000,
        avgDepth: 2600,
        maxDepth: 4694,
        volume: '5,616,000 km³',
        
        coordinates: [15, 88],
        defaultZoom: 5,
        
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500',
        backgroundImage: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=1920',
        
        etymology: {
            english: 'Bay of Bengal - named after Bengal region',
            hindi: 'बंगाल की खाड़ी (Bangāl kī khāṛī)',
            bengali: 'বঙ্গোপসাগর (Bôṅgôpôsagôr)',
            ancient: 'Gangetic Gulf, Sinus Gangeticus (Roman)'
        },
        
        physicalCharacteristics: {
            shape: 'Triangular bay - largest bay in world',
            formation: 'Formed during breakup of Gondwana',
            sediment: 'Receives enormous sediment from rivers',
            fan: 'Bengal Fan - world\'s largest submarine fan'
        },
        
        bengalFan: {
            description: 'World\'s largest submarine sediment fan',
            area: '3 million km²',
            length: '3,000 km from Bangladesh to equator',
            thickness: 'Up to 16.5 km of sediment',
            source: 'Ganges-Brahmaputra sediment from Himalayas',
            age: '17 million years accumulating',
            rate: '1 billion tonnes/year deposited',
            significance: 'Record of Himalayan erosion history',
            canyons: 'Submarine canyons cut through fan'
        },
        
        borderingCountries: [
            { 
                name: 'India', 
                coastlineKm: 2000, 
                states: ['West Bengal', 'Odisha', 'Andhra Pradesh', 'Tamil Nadu'],
                cities: ['Kolkata', 'Chennai', 'Visakhapatnam', 'Puri', 'Pondicherry'],
                ports: ['Chennai', 'Visakhapatnam', 'Haldia', 'Paradip'],
                navy: 'Eastern Naval Command (Visakhapatnam)',
                andaman: 'Andaman & Nicobar Islands - strategic',
                eez: '2,305,143 km² (total)'
            },
            { 
                name: 'Bangladesh', 
                coastlineKm: 580, 
                cities: ['Chittagong', 'Cox\'s Bazar', 'Mongla'],
                chittagong: 'Bangladesh\'s largest port',
                coxsBazar: 'World\'s longest natural beach (120 km)',
                sundarbans: 'Largest mangrove forest (shared)',
                vulnerability: 'Extremely flood/cyclone prone',
                delta: 'Ganges-Brahmaputra Delta'
            },
            { 
                name: 'Myanmar', 
                coastlineKm: 2000, 
                cities: ['Yangon', 'Sittwe', 'Kyaukpyu'],
                ports: 'Limited development',
                kyaukpyu: 'Chinese-funded port (controversial)',
                rakhine: 'Rohingya crisis region',
                offshore: 'Oil and gas development'
            },
            { 
                name: 'Sri Lanka', 
                coastlineKm: 1340, 
                cities: ['Colombo', 'Trincomalee', 'Galle'],
                colombo: 'Major transshipment hub',
                trincomalee: 'One of world\'s finest natural harbors',
                position: 'Strategic position on shipping lanes',
                civilWar: '1983-2009 - affected development'
            },
            { 
                name: 'Thailand', 
                coastlineKm: 200, 
                cities: ['Phuket', 'Ranong'],
                andamanSea: 'Shares via Andaman Sea',
                tourism: 'Major beach tourism'
            },
            { 
                name: 'Indonesia (Andaman Sea)', 
                coastlineKm: 500, 
                islands: 'Sumatra coast',
                acehnese: 'Aceh province'
            }
        ],
        
        straits: [
            { 
                name: 'Palk Strait', 
                connectsTo: 'Indian Ocean', 
                width: 64,
                depth: 9,
                between: 'India (Tamil Nadu) and Sri Lanka',
                bridge: 'Ram Setu/Adam\'s Bridge (chain of shoals)',
                significance: 'Historic land connection',
                shallow: 'Only 1-10m deep',
                ferry: 'Proposed ferry service'
            },
            { 
                name: 'Ten Degree Channel', 
                connectsTo: 'Andaman Sea', 
                width: 150,
                depth: 800,
                between: 'Andaman and Nicobar Islands',
                significance: 'Deep water passage, submarine route'
            },
            { 
                name: 'Six Degree Channel', 
                connectsTo: 'Arabian Sea', 
                width: 180,
                between: 'Minicoy (India) and Maldives',
                significance: 'Major shipping lane'
            }
        ],
        
        islands: [
            { 
                name: 'Andaman Islands', 
                country: 'India', 
                islands: 572,
                inhabited: 36,
                area: '6,408 km²',
                population: '380,000',
                capital: 'Port Blair',
                
                strategic: {
                    command: 'Tri-Service Andaman & Nicobar Command (India\'s only)',
                    significance: 'Controls approach to Malacca Strait',
                    proximity: '150 km from Indonesia',
                    expansion: 'Major Indian military build-up',
                    airfield: 'INS Kohassa on Car Nicobar',
                    radar: 'Long-range surveillance'
                },
                
                indigenous: 'Jarawa, Sentinelese (uncontacted)',
                northSentinel: 'Sentinelese - most isolated tribe on Earth'
            },
            { 
                name: 'Nicobar Islands', 
                country: 'India', 
                islands: 22,
                inhabited: 12,
                area: '1,841 km²',
                population: '36,000',
                
                carNicobar: 'Military air base',
                greatNicobar: {
                    southernmost: 'India\'s southernmost point',
                    project: '$9 billion development project (controversial)',
                    opposition: 'Environmental concerns'
                }
            },
            { 
                name: 'Sri Lanka', 
                type: 'Island nation',
                area: '65,610 km²',
                population: '22 million',
                significance: 'Strategic position on shipping lanes',
                hambantota: 'Chinese-built port (99-year lease)',
                colombo: 'Major transshipment hub'
            }
        ],
        
        rivers: {
            overview: 'Receives water from massive Himalayan rivers',
            
            ganges: {
                discharge: '1,080 km³ annually',
                sediment: '1.8 billion tonnes/year',
                source: 'Gangotri glacier, Himalayas',
                length: '2,525 km',
                delta: 'Largest river delta in world',
                holy: 'Sacred to Hindus'
            },
            brahmaputra: {
                discharge: '19,800 m³/s average',
                source: 'Tibet (Yarlung Tsangpo)',
                length: '2,900 km',
                name: 'Son of Brahma',
                flooding: 'Major floods in Assam, Bangladesh'
            },
            meghna: {
                discharge: 'Third major river',
                join: 'Joins Ganges-Brahmaputra at delta'
            },
            irrawaddy: {
                country: 'Myanmar',
                discharge: 'Major freshwater input',
                delta: 'Irrawaddy Delta - rice basket'
            },
            
            impact: {
                freshwater: 'Creates low salinity zone',
                sediment: 'Massive deposition',
                bengalFan: 'World\'s largest submarine fan',
                fertility: 'Rich fishing grounds',
                flooding: 'Annual floods affect millions'
            }
        },
        
        cyclones: {
            overview: 'Most cyclone-prone body of water in world',
            
            statistics: {
                frequency: '5-6 cyclones/year on average',
                percentGlobal: '5% of global tropical cyclones',
                deadliest: 'But most deadly due to storm surge + poverty + low-lying land'
            },
            
            seasons: {
                primary: 'October-November (post-monsoon)',
                secondary: 'April-May (pre-monsoon)',
                peak: 'November most active'
            },
            
            deadliestCyclones: [
                { 
                    name: 'Bhola Cyclone', 
                    year: 1970, 
                    deaths: '300,000-500,000',
                    location: 'Bangladesh (then East Pakistan)',
                    category: 'Super Cyclone',
                    surge: '10+ meters',
                    note: 'Deadliest tropical cyclone in recorded history',
                    aftermath: 'Contributed to Bangladesh independence (1971)'
                },
                { 
                    name: 'Cyclone Nargis', 
                    year: 2008, 
                    deaths: '138,000',
                    location: 'Myanmar (Irrawaddy Delta)',
                    surge: '4 meters pushed 40 km inland',
                    damage: '$10 billion',
                    note: 'Military junta initially blocked aid',
                    humanitarian: 'Massive international outcry'
                },
                { 
                    name: 'Super Cyclone 1999', 
                    year: 1999, 
                    deaths: '10,000+',
                    location: 'Odisha, India',
                    wind: '260 km/h',
                    surge: '9 meters',
                    note: 'Led to major improvements in Indian warning systems'
                },
                { 
                    name: 'Cyclone Sidr', 
                    year: 2007, 
                    deaths: '3,500',
                    location: 'Bangladesh',
                    category: 4,
                    note: 'Warning systems saved many lives'
                },
                { 
                    name: 'Cyclone Amphan', 
                    year: 2020, 
                    deaths: '128',
                    damage: '$13 billion',
                    location: 'India/Bangladesh',
                    category: 'Super Cyclonic Storm',
                    note: 'Costliest cyclone in North Indian Ocean'
                }
            ],
            
            whyDeadly: {
                geography: 'Funnel shape amplifies storm surge',
                population: 'World\'s most densely populated coastline',
                lowLying: 'Bangladesh largely at sea level',
                poverty: 'Limited evacuation resources',
                building: 'Housing unable to withstand winds'
            },
            
            improvements: {
                warnings: 'Early warning systems improved dramatically',
                shelters: 'Bangladesh built 4,000 cyclone shelters',
                evacuations: 'Millions now evacuate',
                deaths: 'Death tolls declining despite stronger storms',
                1970bhola: '500,000 died',
                2007sidr: '3,500 died (similar intensity)'
            }
        },
        
        economicImportance: {
            overview: 'Major shipping route, vital for regional economies',
            tradeValue: '$500 billion annually',
            
            majorPorts: [
                { 
                    name: 'Chennai', 
                    country: 'India', 
                    containers: '1.5M TEU',
                    ranking: 'India\'s 2nd largest container port',
                    automotive: 'Major auto hub',
                    growth: 'Expanding capacity'
                },
                { 
                    name: 'Kolkata/Haldia', 
                    country: 'India', 
                    type: 'Historic Ganges port',
                    challenge: 'Silting requires constant dredging',
                    history: 'Colonial capital port'
                },
                { 
                    name: 'Visakhapatnam', 
                    country: 'India', 
                    ranking: 'India\'s 2nd largest by volume',
                    type: 'Industrial port - steel, coal',
                    navy: 'Eastern Naval Command HQ'
                },
                { 
                    name: 'Chittagong', 
                    country: 'Bangladesh', 
                    ranking: 'Bangladesh largest',
                    containers: '3M TEU',
                    challenge: 'Congestion, infrastructure',
                    growth: 'Major expansion needed'
                },
                { 
                    name: 'Colombo', 
                    country: 'Sri Lanka', 
                    containers: '7M TEU',
                    ranking: 'Major transshipment hub',
                    significance: 'Strategic location on routes',
                    growth: 'New port city development'
                },
                { 
                    name: 'Yangon', 
                    country: 'Myanmar', 
                    ranking: 'Myanmar largest',
                    status: 'Limited development',
                    potential: 'Major if country stabilizes'
                }
            ],
            
            shipping: {
                routes: 'East-West trade via Malacca Strait',
                oil: 'Major oil tanker route to Asia',
                containers: 'Growing container trade'
            },
            
            fishing: {
                production: '2 million tonnes annually',
                employment: '4 million+ fishers',
                keySpecies: ['Hilsa', 'Pomfret', 'Shrimp', 'Tuna', 'Mackerel'],
                hilsa: 'National fish of Bangladesh - culturally important',
                issues: 'Overfishing, pollution'
            },
            
            tourism: {
                thailand: 'Phuket, Andaman coast - major destination',
                srilanka: 'Beaches, culture',
                india: 'Andaman islands, Puri, Chennai',
                bangladesh: 'Cox\'s Bazar (world\'s longest beach)',
                maldives: 'Luxury resorts (via Indian Ocean)'
            }
        },
        
        geopolitics: {
            strategicImportance: 'High - Growing',
            competition: 'India-China rivalry focal point',
            
            issues: [
                { 
                    name: 'China String of Pearls', 
                    parties: ['China', 'India'], 
                    description: 'Chinese port investments encircling India',
                    
                    stringOfPearls: [
                        { 
                            port: 'Gwadar', 
                            country: 'Pakistan', 
                            status: 'Operational',
                            investment: '$1.6 billion',
                            operator: 'China Overseas Port Holding',
                            concern: 'Potential naval base'
                        },
                        { 
                            port: 'Hambantota', 
                            country: 'Sri Lanka', 
                            status: '99-year Chinese lease (2017)',
                            investment: '$1.4 billion',
                            controversy: 'Sri Lanka couldn\'t pay debt',
                            concern: 'Debt trap diplomacy example'
                        },
                        { 
                            port: 'Chittagong', 
                            country: 'Bangladesh', 
                            status: 'Chinese investment',
                            submarines: 'China sold 2 submarines to Bangladesh'
                        },
                        { 
                            port: 'Kyaukpyu', 
                            country: 'Myanmar', 
                            status: 'Under development',
                            investment: '$10 billion (reduced from $7.5B)',
                            pipeline: 'Oil/gas pipeline to China\'s Yunnan',
                            significance: 'Bypasses Malacca Strait'
                        },
                        { 
                            port: 'Sittwe', 
                            country: 'Myanmar', 
                            status: 'India-funded alternative',
                            project: 'Kaladan Multi-Modal Transit'
                        }
                    ],
                    
                    indiaResponse: 'SAGAR policy, port development, military expansion'
                },
                { 
                    name: 'Rohingya Crisis', 
                    parties: ['Myanmar', 'Bangladesh'], 
                    description: 'Refugee crisis, regional instability',
                    
                    details: {
                        genocide: '2017 military crackdown',
                        refugees: '1+ million in Bangladesh',
                        coxsBazar: 'World\'s largest refugee camp',
                        boats: 'Refugees on boats in Bay of Bengal',
                        rescue: 'Ship rescues, pushbacks',
                        return: 'Repatriation stalled',
                        icj: 'Genocide case at International Court'
                    }
                },
                { 
                    name: 'Sri Lanka Debt', 
                    parties: ['Sri Lanka', 'China', 'India', 'IMF'], 
                    description: 'Economic crisis, geopolitical leverage',
                    
                    details: {
                        crisis: '2022 economic collapse',
                        default: 'First default in history',
                        protests: 'President fled',
                        hambantota: 'Debt led to port handover',
                        india: 'India provided $4 billion support',
                        china: 'Debt restructuring negotiations',
                        imf: '$2.9 billion bailout'
                    }
                },
                { 
                    name: 'Myanmar Civil War', 
                    parties: ['Military', 'NUG', 'Ethnic armies'], 
                    description: 'Instability affecting region',
                    
                    details: {
                        coup: 'February 2021',
                        resistance: 'Widespread armed resistance',
                        impact: 'Delays Chinese projects',
                        refugees: 'Fleeing to neighbors',
                        navy: 'Myanmar navy degraded'
                    }
                }
            ],
            
            navalPresences: [
                { 
                    country: 'India', 
                    base: 'Eastern Naval Command (Visakhapatnam), Andaman & Nicobar',
                    assets: ['INS Vikramaditya (carrier)', 'Nuclear submarines', '60+ ships'],
                    expansion: 'Major build-up in Andaman',
                    goal: 'Dominate Indian Ocean, counter China',
                    exercises: 'Milan, Malabar (with QUAD)'
                },
                { 
                    country: 'China', 
                    presence: 'Submarines, research ships',
                    concernIndia: 'Submarine deployments',
                    ports: 'Access via Sri Lanka, Myanmar, Bangladesh',
                    strategy: 'String of Pearls'
                },
                { 
                    country: 'USA', 
                    presence: '7th Fleet operations',
                    exercises: 'Malabar with India, Japan, Australia',
                    quad: 'Part of Indo-Pacific strategy',
                    diegoGarcia: 'Base 2,000 km to south'
                },
                { 
                    country: 'Bangladesh', 
                    assets: 'Growing fleet, 2 Chinese submarines',
                    goal: 'Protect EEZ, disaster response'
                },
                { 
                    country: 'Myanmar', 
                    assets: 'Limited capability',
                    status: 'Focused on internal conflict'
                }
            ],
            
            indiaStrategy: {
                goal: 'Net security provider in Indian Ocean',
                sagar: 'Security and Growth for All in Region',
                andaman: 'Turning into Singapore of East',
                partnerships: 'BIMSTEC, QUAD',
                exercises: 'Milan - biennial naval exercise',
                surveillance: 'Long-range maritime patrol',
                concern: 'Chinese submarines in Bay'
            }
        },
        
        environment: {
            climate: 'Tropical monsoon',
            waterTemp: '25-29°C',
            salinity: '32-34 ppt (lower due to river input)',
            
            monsoon: {
                southwest: 'June-September - heavy rainfall',
                northeast: 'November-February - drier',
                impact: 'Completely changes fishing, currents',
                floods: 'Annual flooding in Bangladesh'
            },
            
            sundarbans: {
                status: 'UNESCO World Heritage Site',
                area: '10,000 km² - world\'s largest mangrove',
                countries: 'Bangladesh (60%), India (40%)',
                tigers: 'Bengal tigers (unique swimming population)',
                dolphins: 'Gangetic dolphins',
                crocodiles: 'Saltwater crocodiles',
                threats: 'Sea level rise, cyclones, pollution',
                protection: 'Provides cyclone buffer',
                carbon: 'Major carbon sink'
            },
            
            biodiversity: {
                species: '15,000+ species',
                dolphins: ['Gangetic dolphin', 'Irrawaddy dolphin', 'Indo-Pacific humpback'],
                turtles: ['Olive ridley (mass nesting)', 'Green turtle', 'Hawksbill'],
                fish: 'Diverse fisheries',
                coral: 'Andaman corals'
            },
            
            oliveRidley: {
                nesting: 'Mass nesting (arribada) at Odisha beaches',
                gahirmatha: 'World\'s largest rookery',
                numbers: 'Hundreds of thousands nest annually',
                threats: 'Fishing nets, pollution',
                protection: 'Strict protection during nesting'
            },
            
            pollution: {
                plastic: 'Major problem - river input',
                ganges: 'One of most polluted rivers',
                sewage: 'Untreated from coastal cities',
                industrial: 'Heavy metals, chemicals',
                oilSpills: 'Shipping related'
            },
            
            climateChange: {
                warming: 'Warming faster than average',
                cyclones: 'Intensifying',
                seaLevel: '3mm/year rise',
                flooding: 'Bangladesh most vulnerable',
                sundarbans: 'May be submerged',
                srilanka: 'Coral bleaching'
            }
        },
        
        history: {
            ancient: {
                trade: 'Ancient maritime trade routes',
                indianOceanTrade: 'Part of Indian Ocean world',
                tamils: 'Tamil Chola dynasty ruled seas',
                bengal: 'Bengal sultanates'
            },
            
            colonial: {
                portuguese: 'First Europeans (1500s)',
                dutch: 'Dutch East India Company',
                british: 'British Raj dominated (1757-1947)',
                calcutta: 'Capital of British India',
                rangoon: 'British Burma capital'
            },
            
            modern: {
                partition: '1947 - India/Pakistan division',
                bangladesh: '1971 - Bangladesh independence',
                tsunami: '2004 - Devastating Indian Ocean tsunami'
            },
            
            tsunami2004: {
                date: 'December 26, 2004',
                magnitude: '9.1-9.3 earthquake off Sumatra',
                deaths: '227,000+ (entire Indian Ocean)',
                bayOfBengal: 'Sri Lanka 35,000+, India 16,000+, Thailand 8,000+',
                waves: 'Up to 30 meters',
                warning: 'No warning system existed',
                aftermath: 'Indian Ocean Tsunami Warning System created'
            }
        },
        
        funFacts: [
            'Receives water from Ganges and Brahmaputra - world\'s largest delta',
            'Most cyclone-prone body of water in the world',
            'Sundarbans mangrove forest is largest on Earth - has swimming tigers',
            'Monsoon reverses currents completely twice a year',
            'Bengal Fan is world\'s largest submarine sediment deposit (3 million km²)',
            '1970 Bhola Cyclone killed 500,000 people - deadliest cyclone ever',
            'Cox\'s Bazar is world\'s longest natural beach (120 km)',
            'Sentinelese people on North Sentinel Island are world\'s most isolated tribe',
            'India\'s Andaman & Nicobar Islands are closer to Indonesia than mainland India',
            '2004 tsunami killed 230,000+ across Indian Ocean region',
            'Olive ridley turtles mass nest by hundreds of thousands in Odisha',
            'Hilsa fish migration is celebrated culturally in Bengal region'
        ]
    },

    // Continuing with remaining seas...
    // ═══════════════════════════════════════════════════════
    // BLACK SEA - MASSIVELY EXPANDED
    // ═══════════════════════════════════════════════════════
    {
        id: 'black-sea',
        name: 'Black Sea',
        parentOcean: 'Atlantic Ocean',
        parentOceanId: 'atlantic-ocean',
        
        area: 436000,
        avgDepth: 1240,
        maxDepth: 2212,
        volume: '547,000 km³',
        
        coordinates: [43, 34],
        defaultZoom: 5,
        
        image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=500',
        backgroundImage: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=1920',
        
        etymology: {
            english: 'Black Sea - origin debated',
            theories: [
                'Dark, stormy appearance',
                'Ancient color-direction naming (Black = North)',
                'Anoxic waters appear dark',
                'Greek: Inhospitable (Pontos Axeinos) → Hospitable (Pontos Euxeinos)'
            ],
            turkish: 'Karadeniz (Black Sea)',
            russian: 'Чёрное море (Chyornoye more)',
            ukrainian: 'Чорне море (Chorne more)',
            ancient: 'Pontus Euxinus (Latin - Hospitable Sea)'
        },
        
        physicalCharacteristics: {
            shape: 'Roughly oval, elongated east-west',
            formation: 'Ancient lake, flooded ~7,500 years ago',
            connection: 'Nearly enclosed - only exit via Turkish Straits',
            unique: 'World\'s largest meromictic basin (non-mixing layers)',
            salinity: 'Lower than Mediterranean (17-18 ppt vs 38 ppt)'
        },
        
        borderingCountries: [
            { 
                name: 'Turkey', 
                coastlineKm: 1400, 
                cities: ['Istanbul', 'Trabzon', 'Samsun', 'Zonguldak'],
                straitControl: 'Controls Bosphorus and Dardanelles',
                significance: 'Gatekeeper to Mediterranean',
                natoMember: true,
                eez: '174,000 km²'
            },
            { 
                name: 'Bulgaria', 
                coastlineKm: 378, 
                cities: ['Varna', 'Burgas'],
                tourism: 'Major beach destination',
                ports: 'Varna naval base',
                natoMember: true,
                euMember: true
            },
            { 
                name: 'Romania', 
                coastlineKm: 245, 
                cities: ['Constanta', 'Mangalia'],
                constanta: 'EU\'s largest Black Sea port',
                danubeDelta: 'UNESCO World Heritage Site',
                natoMember: true,
                euMember: true
            },
            { 
                name: 'Ukraine', 
                coastlineKm: 1600, 
                cities: ['Odesa', 'Mykolaiv', 'Kherson', 'Mariupol', 'Sevastopol (Crimea)'],
                significance: 'Major grain exporter',
                war: 'Under Russian attack since 2022',
                crimea: 'Annexed by Russia 2014',
                natoMember: false,
                status: 'War zone'
            },
            { 
                name: 'Russia', 
                coastlineKm: 800, 
                cities: ['Novorossiysk', 'Sochi', 'Tuapse', 'Anapa'],
                novorossiysk: 'Russia\'s largest Black Sea port',
                sochi: '2014 Winter Olympics',
                blackSeaFleet: 'Sevastopol (occupied Crimea)',
                natoMember: false
            },
            { 
                name: 'Georgia', 
                coastlineKm: 310, 
                cities: ['Batumi', 'Poti', 'Sukhumi (Abkhazia)'],
                batumi: 'Major oil terminal',
                abkhazia: 'Russian-occupied breakaway region',
                natoAspirant: true
            }
        ],
        
        straits: [
            { 
                name: 'Bosphorus', 
                connectsTo: 'Sea of Marmara', 
                width: 0.7,
                narrowest: 0.7,
                length: 31,
                depth: 36,
                annualShips: 45000,
                dailyShips: 120,
                oilBarrels: 3000000,
                
                istanbul: {
                    population: '15+ million',
                    straddles: 'Only city on two continents',
                    bridges: '3 bridges, 2 tunnels',
                    traffic: 'One of world\'s busiest waterways'
                },
                
                control: 'Turkey (Montreux Convention)',
                
                dangers: {
                    currents: 'Strong opposing currents',
                    turns: '12 sharp turns',
                    accidents: 'Multiple major incidents',
                    tankers: 'Supertankers barely fit'
                }
            },
            { 
                name: 'Dardanelles', 
                connectsTo: 'Aegean/Mediterranean', 
                width: 1.2,
                narrowest: 1.2,
                length: 61,
                depth: 55,
                annualShips: 45000,
                
                history: {
                    troy: 'Ancient Troy at entrance',
                    gallipoli: 'WWI campaign (1915-16)',
                    anzac: 'Australian/New Zealand commemoration'
                },
                
                control: 'Turkey (Montreux Convention)'
            },
            { 
                name: 'Kerch Strait', 
                connectsTo: 'Sea of Azov', 
                width: 4,
                depth: 18,
                bridge: 'Crimean Bridge (19 km) - opened 2018',
                
                conflict: {
                    2018: 'Russia seized Ukrainian naval vessels',
                    2022: 'Bridge attacked by Ukraine (truck bomb, missiles)',
                    control: 'Russia (illegally via Crimea annexation)',
                    blockade: 'Russia blocked Ukrainian Azov ports'
                }
            }
        ],
        
        montreuxConvention: {
            signed: 'July 20, 1936',
            location: 'Montreux, Switzerland',
            purpose: 'Governs passage through Turkish Straits',
            
            keyRules: [
                'Turkey has sovereignty over straits',
                'Merchant ships of all nations have free passage',
                'Non-Black Sea warships limited to 21 days',
                'Total non-Black Sea naval tonnage limited to 45,000 tons',
                'Aircraft carriers cannot transit (with exceptions)',
                'Submarines must transit surfaced during day',
                'Turkey can close straits to belligerents in wartime'
            ],
            
            ukraineWar: {
                turkeyAction: 'Closed straits to warships (February 28, 2022)',
                impact: 'Russia cannot reinforce Black Sea Fleet from Med',
                loophole: 'Ships based in Black Sea can return'
            },
            
            russiaViolation: 'Some allege Russia violated with certain ships',
            revision: 'Turkey occasionally suggests revision'
        },
        
        anoxicZone: {
            overview: 'World\'s largest anoxic body of water',
            
            characteristics: {
                depthStart: '150-200 meters',
                percentage: '90% of water volume is anoxic (oxygen-free)',
                cause: 'Strong stratification - surface water doesn\'t mix with deep',
                hydrogen: 'Deep water contains toxic hydrogen sulfide',
                smell: 'Rotten egg smell if deep water disturbed'
            },
            
            layers: {
                surface: '0-50m - oxic, supports life',
                chemocline: '50-200m - transition zone',
                deep: '200m+ - completely anoxic, no oxygen'
            },
            
            formation: {
                history: 'Was freshwater lake until ~7,500 years ago',
                flood: 'Mediterranean flooded in through Bosphorus',
                theory: 'Catastrophic flood may be basis of Noah\'s Ark legend',
                stratification: 'Salt water sank below freshwater, never mixed'
            },
            
            shipwrecks: {
                preservation: 'Ancient ships perfectly preserved (no oxygen = no decay)',
                age: 'Ships 2,000+ years old found intact',
                discoveries: 'Byzantine, Greek, Roman wrecks',
                research: 'Black Sea Maritime Archaeology Project',
                significance: 'Best-preserved ancient wrecks anywhere'
            },
            
            bacteria: {
                type: 'Anaerobic bacteria thrive',
                sulfur: 'Produce hydrogen sulfide',
                unique: 'Unique ecosystem'
            }
        },
        
        ukraineWar: {
            overview: 'Black Sea is active war zone since February 2022',
            
            timeline: {
                feb2022: 'Russia invades Ukraine',
                mar2022: 'Russia blockades Ukrainian ports',
                apr2022: 'Moskva sunk by Ukrainian missiles',
                jul2022: 'Black Sea Grain Initiative signed',
                jul2023: 'Russia withdraws from grain deal',
                ongoing: 'Ukraine attacking Russian fleet with drones'
            },
            
            navalLosses: {
                russia: [
                    { 
                        ship: 'Moskva', 
                        type: 'Slava-class cruiser (flagship)', 
                        sunk: 'April 14, 2022',
                        cause: 'Ukrainian Neptune missiles (2)',
                        crew: '510 (Russia admits 1 dead, Ukraine claims 400+)',
                        significance: 'First flagship sunk since Falklands (1982)'
                    },
                    { ship: 'Saratov', type: 'Landing ship', sunk: 'March 2022', location: 'Berdyansk' },
                    { ship: 'Novocherkassk', type: 'Landing ship', sunk: 'December 2023', location: 'Feodosia' },
                    { ship: 'Multiple patrol boats, tugs', status: 'Damaged/destroyed by drones' }
                ],
                
                ukrainianDrones: {
                    type: 'USV (Unmanned Surface Vessels)',
                    names: ['Sea Baby', 'Magura V5'],
                    range: '800+ km',
                    payload: '450 kg explosive',
                    effectiveness: 'Highly effective, low cost',
                    targets: ['Warships', 'Oil facilities', 'Bridge'],
                    result: '15+ Russian ships damaged/destroyed'
                },
                
                russianFleetStatus: {
                    before: '80+ vessels',
                    operational: '50% capability degraded',
                    retreat: 'Moved from Sevastopol to Novorossiysk',
                    threat: 'Cannot operate safely in western Black Sea'
                }
            },
            
            grainBlockade: {
                problem: 'Russia blocked Ukraine grain exports',
                impact: '25 million tonnes stuck in silos',
                globalEffect: 'Food prices spiked worldwide',
                starvation: 'Threatened food security in Africa, Middle East'
            },
            
            grainDeal: {
                name: 'Black Sea Grain Initiative',
                negotiated: 'July 22, 2022',
                parties: ['Ukraine', 'Russia', 'Turkey', 'UN'],
                location: 'Istanbul',
                
                terms: {
                    corridor: 'Safe shipping corridor from Odesa',
                    inspection: 'Ships inspected in Istanbul',
                    ukrainePorts: ['Odesa', 'Chornomorsk', 'Pivdennyi']
                },
                
                exports: '33 million tonnes exported while active',
                
                collapse: {
                    date: 'July 17, 2023',
                    reason: 'Russia withdrew citing unmet demands',
                    russiaComplaints: 'Own grain/fertilizer exports blocked',
                    aftermath: 'Russia attacked Ukrainian ports'
                },
                
                ukraineAlternative: 'Humanitarian corridor without Russia'
            },
            
            crimeaBridge: {
                name: 'Kerch Strait Bridge / Crimean Bridge',
                opened: 'May 2018',
                cost: '$3.7 billion',
                length: '19 km',
                significance: 'Only land link to occupied Crimea',
                
                attacks: [
                    { date: 'October 8, 2022', method: 'Truck bomb', damage: 'Road and rail damaged' },
                    { date: 'July 17, 2023', method: 'Sea drones', damage: 'Road span collapsed' }
                ],
                
                ukraineGoal: 'Cut Russian supply line',
                repair: 'Russia rapidly repaired both times'
            },
            
            mining: {
                both: 'Both sides deployed sea mines',
                drifting: 'Some mines broke loose, drifted',
                turkeyBosphorus: 'Mines detected in Bosphorus',
                danger: 'Risk to neutral shipping'
            }
        },
        
        economicImportance: {
            overview: 'Major grain export route - now war zone',
            tradeValue: '$200 billion (pre-war)',
            
            grainExports: {
                ukraine: {
                    role: 'World\'s 5th largest wheat exporter',
                    products: ['Wheat', 'Corn', 'Barley', 'Sunflower oil'],
                    ports: ['Odesa', 'Chornomorsk', 'Mykolaiv'],
                    status: 'Severely disrupted by war'
                },
                russia: {
                    role: 'World\'s largest wheat exporter',
                    ports: ['Novorossiysk', 'Tuapse', 'Rostov-on-Don'],
                    status: 'Operational'
                },
                together: '30% of global wheat exports'
            },
            
            oilExports: {
                cpc: 'Caspian Pipeline Consortium (Kazakhstan oil)',
                novorossiysk: 'Major oil terminal',
                batumi: 'Georgia oil terminal',
                volume: '1.5 million bpd'
            },
            
            majorPorts: [
                { 
                    name: 'Odesa', 
                    country: 'Ukraine', 
                    status: 'Damaged, limited operations',
                    ranking: 'Ukraine\'s largest',
                    prewar: '75% of Ukraine trade',
                    attacks: 'Regular Russian missile/drone attacks'
                },
                { 
                    name: 'Novorossiysk', 
                    country: 'Russia', 
                    ranking: 'Russia\'s largest Black Sea port',
                    oil: 'Major oil terminal (CPC)',
                    grain: 'Grain exports',
                    military: 'Navy relocated here from Sevastopol'
                },
                { 
                    name: 'Constanta', 
                    country: 'Romania', 
                    ranking: 'EU\'s largest Black Sea port',
                    growth: 'Handling diverted Ukraine cargo',
                    containers: '600,000 TEU',
                    nato: 'NATO presence'
                },
                { 
                    name: 'Sevastopol', 
                    country: 'Crimea (Russian-occupied)', 
                    type: 'Naval base',
                    blackSeaFleet: 'Russia\'s Black Sea Fleet HQ',
                    attacks: 'Regular Ukrainian attacks',
                    status: 'Increasingly untenable'
                },
                { 
                    name: 'Varna', 
                    country: 'Bulgaria', 
                    ranking: 'Bulgaria\'s largest',
                    naval: 'Bulgarian Navy base',
                    tourism: 'Beach resort'
                },
                { 
                    name: 'Batumi', 
                    country: 'Georgia', 
                    type: 'Oil terminal',
                    btc: 'BTC pipeline alternative outlet',
                    tourism: 'Growing resort'
                }
            ],
            
            tourism: {
                preWar: 'Major tourism region',
                destinations: ['Crimea', 'Sochi', 'Bulgarian coast', 'Romanian coast', 'Turkish coast'],
                crimea: 'Was popular destination, now occupied/war zone',
                sochi: 'Winter Olympics 2014'
            }
        },
        
        geopolitics: {
            strategicImportance: 'Critical',
            conflictLevel: 'Active war zone',
            
            issues: [
                { 
                    name: 'Russia-Ukraine War', 
                    parties: ['Russia', 'Ukraine', 'NATO'], 
                    description: 'Ongoing since February 24, 2022',
                    
                    seaWar: {
                        blockade: 'Russia initially blockaded Ukraine',
                        ukraineSuccess: 'Ukraine pushing Russia back with drones',
                        moskva: 'Sinking of flagship was major blow',
                        snakeIsland: 'Ukraine retook strategic island',
                        trend: 'Russia losing Black Sea dominance'
                    }
                },
                { 
                    name: 'Crimea Annexation', 
                    parties: ['Russia', 'Ukraine'], 
                    description: 'Russia annexed 2014, internationally unrecognized',
                    
                    details: {
                        date: 'March 2014',
                        method: '"Little green men" takeover, referendum',
                        recognition: 'Only 10 countries recognize',
                        sevastopol: 'Russia\'s historic naval base',
                        population: '2.4 million',
                        waterCrisis: 'Ukraine cut water supply 2014-2022'
                    }
                },
                { 
                    name: 'Turkish Straits', 
                    parties: ['Turkey', 'All'], 
                    description: 'Turkey controls only exit (Montreux Convention)',
                    
                    significance: {
                        gatekeeper: 'Turkey decides who enters/exits',
                        wartime: 'Closed to warships in Ukraine war',
                        leverage: 'Major diplomatic tool',
                        canalIstanbul: 'Proposed parallel canal (bypass Montreux?)'
                    }
                },
                { 
                    name: 'NATO Expansion', 
                    parties: ['Romania', 'Bulgaria', 'Turkey', 'Russia'], 
                    description: '3 NATO members border sea',
                    
                    details: {
                        members: ['Turkey (1952)', 'Romania (2004)', 'Bulgaria (2004)'],
                        aspirants: ['Ukraine', 'Georgia'],
                        russiaOpposition: 'Cites NATO expansion as war justification',
                        buildUp: 'NATO increasing presence in Romania'
                    }
                },
                { 
                    name: 'Georgia Conflicts', 
                    parties: ['Russia', 'Georgia'], 
                    description: 'Abkhazia, South Ossetia occupied since 2008',
                    
                    details: {
                        war2008: '5-day war, Russia intervened',
                        abkhazia: 'Russian troops on Black Sea coast',
                        creep: 'Russia slowly expanding borders',
                        natoAspiration: 'Georgia wants NATO membership'
                    }
                }
            ],
            
            navalPresences: [
                { 
                    country: 'Russia', 
                    base: 'Sevastopol (Crimea), Novorossiysk',
                    fleet: 'Black Sea Fleet',
                    assets: '80+ ships (degraded)',
                    status: 'Under Ukrainian attack, moved to Novorossiysk',
                    history: 'Fleet since 1783 (Catherine the Great)',
                    submarines: '7 Kilo-class'
                },
                { 
                    country: 'Turkey', 
                    base: 'Multiple', 
                    assets: 'Largest non-Russian fleet',
                    role: 'Controls straits, balancing act',
                    drones: 'Sold Bayraktar drones to Ukraine'
                },
                { 
                    country: 'Ukraine', 
                    status: 'Fleet largely destroyed/captured 2014/2022',
                    success: 'But USV drones highly effective',
                    future: 'UK helping rebuild navy'
                },
                { 
                    country: 'Romania', 
                    base: 'Constanta', 
                    assets: '3 frigates, patrol boats',
                    nato: 'NATO forward presence host',
                    expansion: 'Buying new vessels'
                },
                { 
                    country: 'Bulgaria', 
                    base: 'Varna', 
                    assets: 'Small fleet',
                    nato: 'NATO member but historically Russia-friendly'
                },
                { 
                    country: 'USA/NATO', 
                    presence: 'Rotational (limited by Montreux)',
                    exercises: 'Sea Breeze (suspended during war)',
                    limit: '21 days max for non-Black Sea navies',
                    workaround: 'Romania hosts bases'
                }
            ]
        },
        
        environment: {
            climate: 'Continental, humid',
            waterTemp: '8-24°C (seasonal)',
            salinity: '17-18 ppt (low - half Mediterranean)',
            
            anoxia: {
                deep: '90% of volume has no oxygen',
                impact: 'Only surface 150m supports life',
                uniqueness: 'World\'s largest natural dead zone'
            },
            
            biodiversity: {
                limited: 'Low compared to Mediterranean',
                fish: ['Anchovy', 'Sprat', 'Turbot', 'Sturgeon (critically endangered)'],
                mammals: 'Harbour porpoise, dolphins',
                jellies: 'Invasive comb jellies devastated ecosystem 1980s',
                sturgeon: 'Beluga sturgeon for caviar - nearly extinct'
            },
            
            pollution: {
                rivers: 'Danube, Dnieper, Don bring pollution',
                agricultural: 'Heavy nutrient load',
                industrial: 'Soviet legacy',
                oilSpills: 'Occasional',
                improvement: 'Some recovery since Soviet collapse'
            },
            
            invasiveSpecies: {
                combJelly: 'Mnemiopsis leidyi - devastated fisheries 1980s',
                arrival: 'Via ship ballast water from Americas',
                impact: 'Ate all zooplankton, fish collapsed',
                solution: 'Another invasive (Beroe) helped control it'
            },
            
            climateChange: {
                warming: 'Surface warming',
                storms: 'More intense',
                oxygen: 'Anoxic zone may expand'
            }
        },
        
        rivers: [
            { 
                name: 'Danube', 
                countries: 10, 
                discharge: 'Second largest in Europe',
                delta: 'UNESCO World Heritage Site (Romania/Ukraine)',
                significance: 'Connects Central Europe to Black Sea'
            },
            { 
                name: 'Dnieper', 
                countries: ['Ukraine'], 
                discharge: 'Ukraine\'s main river',
                dam: 'Kakhovka Dam destroyed June 2023 (war)',
                significance: 'Major grain transport route'
            },
            { 
                name: 'Don', 
                countries: ['Russia'], 
                discharge: 'Via Sea of Azov',
                volga: 'Connected to Volga via canal'
            },
            { 
                name: 'Dniester', 
                countries: ['Ukraine', 'Moldova'],
                transnistria: 'Flows through breakaway region'
            }
        ],
        
        history: {
            ancient: {
                greeks: 'Greek colonies from 7th century BCE',
                colchis: 'Jason and the Golden Fleece legend',
                crimea: 'Greek Crimean cities',
                trade: 'Grain, slaves, metals to Mediterranean'
            },
            
            medieval: {
                byzantines: 'Byzantine control',
                genoese: 'Italian trading colonies',
                ottomans: 'Ottoman lake for centuries',
                crimeanKhanate: 'Slave-raiding Tatar state'
            },
            
            russian: {
                catherine: '1783 - Russia conquered Crimea',
                sevastopol: 'Naval base founded',
                crimeanWar: '1853-56 - Britain/France vs Russia',
                expansion: 'Russia pushed to control entire north coast'
            },
            
            modern: {
                soviet: 'Soviet control of north',
                coldWar: 'Soviet-dominated',
                1991: 'Ukraine gained independence',
                fleetDispute: 'Russia-Ukraine Sevastopol dispute',
                2014: 'Russia annexed Crimea',
                2022: 'Full-scale Russian invasion of Ukraine'
            }
        },
        
        funFacts: [
            'Anoxic below 150m - no oxygen, shipwrecks preserved for millennia',
            'Ancient Greeks called it "Pontos Axeinos" (Inhospitable Sea) due to storms',
            'Receives Danube, Dnieper, and Don rivers',
            'Turkey controls only exit via Bosphorus Strait',
            'Russia\'s Black Sea Fleet is world\'s oldest continuously serving fleet (1783)',
            'Ukraine sank Russia\'s flagship Moskva with missiles in 2022',
            'Was a freshwater lake until ~7,500 years ago (Noah\'s Ark flood theory)',
            'Istanbul is the only city spanning two continents',
            'Beluga sturgeon caviar came from here - now nearly extinct',
            'Gallipoli campaign (1915) killed 500,000 - ANZAC Day origin',
            'Crimean War (1850s) inspired Florence Nightingale\'s nursing',
            'Ukraine drone boats cost $250,000, destroyed $500M+ warship'
        ]
    },

    // ═══════════════════════════════════════════════════════
    // BALTIC SEA - MASSIVELY EXPANDED
    // ═══════════════════════════════════════════════════════
    {
        id: 'baltic-sea',
        name: 'Baltic Sea',
        parentOcean: 'Atlantic Ocean',
        parentOceanId: 'atlantic-ocean',
        
        area: 377000,
        avgDepth: 55,
        maxDepth: 459,
        volume: '21,700 km³',
        
        coordinates: [58, 20],
        defaultZoom: 5,
        
        image: 'https://images.unsplash.com/photo-1516690553959-71a414d6b9b6?w=500',
        backgroundImage: 'https://images.unsplash.com/photo-1515890435782-59a5bb6ec191?w=1920',
        
        etymology: {
            english: 'Baltic Sea - from Latin "Mare Balticum"',
            german: 'Ostsee (East Sea)',
            swedish: 'Östersjön (East Sea)',
            finnish: 'Itämeri (East Sea)',
            russian: 'Балтийское море (Baltiyskoye more)',
            origin: 'Possibly from Proto-Indo-European "belt" (white) or Baltic peoples'
        },
        
        physicalCharacteristics: {
            shape: 'Nearly enclosed, many arms and bays',
            age: 'Very young - formed only 10,000 years ago after Ice Age',
            formation: 'Glacial meltwater lake, later connected to ocean',
            unique: 'One of world\'s youngest seas',
            salinity: 'Very low - almost freshwater in north'
        },
        
        borderingCountries: [
            { 
                name: 'Sweden', 
                coastlineKm: 3200, 
                cities: ['Stockholm', 'Gothenburg', 'Malmö', 'Visby'],
                stockholm: 'Built on 14 islands',
                natoMember: true,
                joined: 'March 2024',
                previousStatus: '200+ years of neutrality ended'
            },
            { 
                name: 'Finland', 
                coastlineKm: 1250, 
                cities: ['Helsinki', 'Turku', 'Espoo'],
                natoMember: true,
                joined: 'April 2023',
                previousStatus: 'Neutral since WWII (Finlandization)',
                border: '1,340 km border with Russia',
                significance: 'Russia now borders 5 NATO states'
            },
            { 
                name: 'Russia', 
                coastlineKm: 500, 
                cities: ['St. Petersburg', 'Kaliningrad'],
                stPetersburg: 'Russia\'s 2nd city, founded by Peter the Great',
                kaliningrad: 'Exclave surrounded by NATO',
                balticFleet: 'Based at Baltiysk, Kronstadt',
                concern: 'Now surrounded by NATO'
            },
            { 
                name: 'Estonia', 
                coastlineKm: 3800, 
                cities: ['Tallinn'],
                natoMember: true,
                joined: '2004',
                cyber: '2007 Russian cyberattack',
                islands: '2,222 islands'
            },
            { 
                name: 'Latvia', 
                coastlineKm: 500, 
                cities: ['Riga'],
                natoMember: true,
                joined: '2004',
                russian: '25% ethnic Russian minority'
            },
            { 
                name: 'Lithuania', 
                coastlineKm: 100, 
                cities: ['Klaipeda'],
                natoMember: true,
                joined: '2004',
                suwalki: 'Suwalki Gap - NATO vulnerability',
                lng: 'LNG terminal - energy independence'
            },
            { 
                name: 'Poland', 
                coastlineKm: 500, 
                cities: ['Gdansk', 'Gdynia', 'Szczecin'],
                natoMember: true,
                joined: '1999',
                gdansk: 'Solidarity movement birthplace',
                history: 'WWII started here (1939)'
            },
            { 
                name: 'Germany', 
                coastlineKm: 700, 
                cities: ['Rostock', 'Kiel', 'Lübeck'],
                natoMember: true,
                kiel: 'Kiel Canal terminus',
                history: 'Former East German coast'
            },
            { 
                name: 'Denmark', 
                coastlineKm: 700, 
                cities: ['Copenhagen'],
                natoMember: true,
                bornholm: 'Island near Nord Stream sabotage',
                straits: 'Controls Baltic exits'
            }
        ],
        
        straits: [
            { 
                name: 'Danish Straits', 
                components: ['Øresund', 'Great Belt', 'Little Belt'],
                connectsTo: 'North Sea (via Kattegat/Skagerrak)', 
                width: '4-16 km',
                depth: '7-80m',
                annualShips: 50000,
                
                oresund: {
                    width: 4,
                    bridge: 'Øresund Bridge (7.8 km) - Denmark-Sweden',
                    traffic: 'Major shipping route'
                },
                
                greatBelt: {
                    width: 16,
                    bridge: 'Great Belt Fixed Link (18 km)',
                    depth: 'Deepest, preferred by large ships'
                },
                
                significance: 'Only Baltic exits to Atlantic'
            },
            { 
                name: 'Kiel Canal', 
                type: 'Artificial',
                connectsTo: 'North Sea', 
                length: 98,
                width: 162,
                depth: 11,
                annualShips: 30000,
                opened: 1895,
                saves: '460 km vs going around Denmark',
                busiest: 'World\'s busiest artificial waterway'
            }
        ],
        
        natoTransformation: {
            overview: 'Ukraine war transformed Baltic into "NATO Lake"',
            
            before2022: {
                natoMembers: ['Germany', 'Denmark', 'Poland', 'Estonia', 'Latvia', 'Lithuania'],
                neutral: ['Sweden (neutral since 1814)', 'Finland (since 1948)'],
                russia: ['Russia - St. Petersburg, Kaliningrad']
            },
            
            transformation: {
                finlandApplication: 'May 2022',
                swedenApplication: 'May 2022',
                finlandJoined: 'April 4, 2023',
                swedenJoined: 'March 7, 2024',
                holdout: 'Turkey/Hungary delayed Sweden entry'
            },
            
            after2024: {
                natoMembers: 'All except Russia',
                russiaAccess: 'Only Kaliningrad (exclave) and St. Petersburg',
                navalBalance: 'NATO overwhelming dominance',
                russiaIsolated: 'Baltic Fleet bottled up'
            },
            
            strategic: 'Baltic now effectively a "NATO Lake"',
            russiaResponse: 'Threatening rhetoric, military build-up'
        },
        
        kaliningrad: {
            description: 'Russian exclave between Poland and Lithuania',
            
            geography: {
                area: '15,100 km²',
                population: '1 million',
                capital: 'Kaliningrad (former Königsberg)',
                history: 'German until 1945, Soviet then Russian'
            },
            
            military: {
                significance: 'Major Russian military base',
                missiles: 'Iskander nuclear-capable missiles',
                navy: 'Baltic Fleet HQ (Baltiysk)',
                aircraft: 'Fighter jets, bombers',
                threat: 'Can strike any Baltic capital'
            },
            
            vulnerability: {
                surroundedByNato: 'Poland and Lithuania are NATO',
                suwalki: 'Only 65 km from Belarus (Suwalki Gap)',
                blockade: 'Could be blockaded in conflict',
                supply: 'Dependent on sea/air supply or transit via Lithuania'
            },
            
            2022Crisis: {
                june2022: 'Lithuania blocked sanctioned goods transit',
                russiaReaction: 'Threatened military response',
                resolution: 'EU partially backed down',
                ongoing: 'Transit tensions continue'
            }
        },
        
        suwalkiGap: {
            description: 'NATO\'s most vulnerable point',
            
            geography: {
                location: 'Poland-Lithuania border',
                width: '65 km (40 miles)',
                terrain: 'Flat, forested, few roads',
                separates: 'Kaliningrad from Belarus'
            },
            
            vulnerability: {
                scenario: 'Russia/Belarus could cut in hours',
                result: 'Baltic states isolated from NATO',
                article5: 'Would trigger NATO defense',
                reinforcement: 'Difficult to reinforce Baltics if cut'
            },
            
            defense: {
                litpolukrbrig: 'Lithuanian-Polish-Ukrainian brigade',
                natoPlans: 'Reinforcement plans',
                exercises: 'Regular NATO exercises',
                infrastructure: 'Building military roads'
            }
        },
        
        nordStreamSabotage: {
            overview: 'Most significant infrastructure sabotage in modern history',
            
            event: {
                date: 'September 26, 2022',
                location: 'Danish and Swedish EEZ, near Bornholm island',
                explosions: '4 underwater explosions detected',
                damage: '3 of 4 pipelines ruptured',
                depth: '70-80 meters'
            },
            
            pipelines: {
                nordStream1: {
                    opened: 2011,
                    capacity: '55 billion cubic meters/year',
                    status: 'Was operating at reduced capacity',
                    ownership: 'Gazprom 51%, European companies 49%'
                },
                nordStream2: {
                    completed: 2021,
                    capacity: '55 billion cubic meters/year',
                    status: 'Never operated (Germany suspended)',
                    cost: '$11 billion'
                }
            },
            
            methane: {
                release: '115,000 tonnes',
                ranking: 'Largest methane release in history',
                bubbling: 'Visible from surface, 1 km wide',
                satellite: 'Visible from space',
                climate: 'Equivalent to 2% of Denmark\'s annual emissions'
            },
            
            investigation: {
                countries: ['Germany (ongoing)', 'Sweden (dropped March 2024)', 'Denmark (dropped February 2024)'],
                challenge: 'Deep water, remote, sophisticated operation',
                sweden: 'Confirmed sabotage, declined to name perpetrator',
                seymourHersh: 'Journalist claimed US responsible (denied)'
            },
            
            theories: [
                { 
                    suspect: 'Ukraine/Pro-Ukraine actors', 
                    motive: 'Remove Russian leverage over Europe',
                    evidence: 'German investigation reportedly focusing here',
                    denial: 'Ukraine denies'
                },
                { 
                    suspect: 'Russia', 
                    motive: 'False flag, demonstrate capability, void contracts',
                    argument: 'Why destroy own asset?',
                    counterArgument: 'Couldn\'t use it anyway, insurance, deny supply'
                },
                { 
                    suspect: 'USA', 
                    motive: 'End European dependency on Russia',
                    evidence: 'Biden: "We will bring an end to it"',
                    denial: 'US denies'
                },
                { 
                    suspect: 'UK', 
                    motive: 'Support Ukraine',
                    evidence: 'Russian accusation (no evidence)'
                }
            ],
            
            impact: {
                gas: 'Ended Russian pipeline gas to Germany',
                acceleration: 'Accelerated European LNG pivot',
                signal: 'Showed vulnerability of undersea infrastructure',
                tensions: 'Increased NATO-Russia tensions'
            }
        },
        
        pollution: {
            overview: 'Most polluted sea in world',
            
            causes: {
                agricultural: 'Fertilizer runoff from 9 countries',
                industrial: 'Soviet-era legacy pollution',
                shipping: 'Heavy shipping emissions',
                sewage: 'Historical inadequate treatment',
                munitions: 'WWII chemical weapons dumped'
            },
            
            deadZones: {
                area: '60,000+ km² oxygen-depleted',
                cause: 'Eutrophication from nutrients',
                algae: 'Massive algae blooms each summer',
                bottom: 'Dead zones on seafloor',
                trend: 'Worsening despite efforts'
            },
            
            wwiiMunitions: {
                amount: '40,000+ tonnes chemical weapons',
                types: ['Mustard gas', 'Nerve agents', 'Arsenic-based'],
                dumped: '1945-1947, Allied forces',
                locations: 'Bornholm Deep, Gotland Deep, others',
                condition: 'Containers corroding',
                risk: 'Leaking, danger to fishing, cables',
                cleanup: 'Extremely expensive and dangerous'
            },
            
            cleanup: {
                cost: '$100+ billion estimated needed',
                helcom: 'Helsinki Commission coordinates',
                progress: 'Slow - phosphorus still too high',
                sewage: 'Major improvements in treatment',
                agriculture: 'Need fertilizer reduction'
            }
        },
        
        economicImportance: {
            overview: 'Now "NATO lake" - major European trade route',
            tradeValue: '$300 billion annually',
            
            majorPorts: [
                { 
                    name: 'St. Petersburg', 
                    country: 'Russia', 
                    ranking: 'Russia\'s Baltic gateway',
                    containers: '2M TEU',
                    status: 'Major sanctions impact',
                    history: 'Peter the Great\'s window to West'
                },
                { 
                    name: 'Gdansk', 
                    country: 'Poland', 
                    ranking: 'Poland\'s largest',
                    containers: '2.1M TEU',
                    dcT: 'DCT Gdansk - deepwater terminal',
                    history: 'Hanseatic League member, WWII start'
                },
                { 
                    name: 'Gothenburg', 
                    country: 'Sweden', 
                    ranking: 'Scandinavia\'s largest',
                    containers: '1M TEU',
                    type: 'Container, ro-ro, oil'
                },
                { 
                    name: 'Riga', 
                    country: 'Latvia', 
                    ranking: 'Baltic states hub',
                    freeport: 'Major transit to Russia (declined)',
                    history: 'Hanseatic League member'
                },
                { 
                    name: 'Tallinn', 
                    country: 'Estonia', 
                    cruise: 'Major cruise destination',
                    ferry: 'Helsinki ferry hub',
                    oldTown: 'UNESCO World Heritage'
                },
                { 
                    name: 'Helsinki', 
                    country: 'Finland', 
                    ranking: 'Finland\'s largest',
                    ferry: 'Major ferry network',
                    russiaTransit: 'Historically Russia gateway'
                },
                { 
                    name: 'Klaipeda', 
                    country: 'Lithuania', 
                    lng: 'FSRU Independence - LNG import',
                    significance: 'Energy independence from Russia'
                }
            ],
            
            shipping: {
                routes: 'Intra-Baltic, Russia exports, Scandinavia',
                types: 'Container, bulk, tanker, ferry, cruise',
                challenges: 'Ice in winter, narrow straits'
            },
            
            submarineCables: {
                count: '12+ major cables',
                importance: 'Internet, electricity interconnectors',
                vulnerabilty: 'Concern about Russian sabotage',
                surveillance: 'Russian ships near cables',
                protection: 'NATO increasing patrols'
            },
            
            energy: {
                interconnectors: 'Multiple electricity cables',
                nordBalt: 'Sweden-Lithuania',
                estLink: 'Finland-Estonia',
                lng: 'Multiple floating LNG terminals',
                wind: 'Growing offshore wind'
            },
            
            ferries: {
                network: 'Extensive ferry connections',
                routes: ['Stockholm-Helsinki', 'Tallinn-Helsinki', 'Sweden-Germany'],
                cruises: 'Major cruise destination',
                volume: '50+ million passengers/year'
            }
        },
        
        geopolitics: {
            strategicImportance: 'High - Increasing since 2022',
            tensionLevel: 'Elevated',
            
            issues: [
                { 
                    name: 'NATO Expansion', 
                    parties: ['Finland', 'Sweden', 'Russia'], 
                    description: 'Finland/Sweden joined 2023-2024',
                    
                    details: {
                        trigger: 'Russia\'s Ukraine invasion',
                        finlandJoined: 'April 4, 2023',
                        swedenJoined: 'March 7, 2024',
                        impact: 'Baltic now "NATO Lake"',
                        russiaIsolated: 'Only Kaliningrad and St. Petersburg access',
                        russiaResponse: 'Threats, troop redeployments'
                    }
                },
                { 
                    name: 'Nord Stream Sabotage', 
                    parties: ['Unknown - possibly Ukraine-linked'], 
                    description: 'Pipelines destroyed September 2022',
                    impact: 'Ended Russian gas via Baltic'
                },
                { 
                    name: 'Kaliningrad', 
                    parties: ['Russia', 'NATO'], 
                    description: 'Russian exclave surrounded by NATO',
                    
                    details: {
                        isolation: 'Surrounded by Poland and Lithuania',
                        militarized: 'Nuclear-capable missiles',
                        transit: 'Dependent on Lithuanian transit',
                        vulnerability: 'Could be blockaded'
                    }
                },
                { 
                    name: 'Suwalki Gap', 
                    parties: ['Poland', 'Lithuania', 'Russia', 'NATO'], 
                    description: 'NATO\'s Achilles heel',
                    
                    details: {
                        width: '65 km corridor',
                        vulnerability: 'Russia could cut Baltic states',
                        defense: 'NATO reinforcement plans',
                        exercises: 'Regular NATO drills'
                    }
                },
                { 
                    name: 'Subsea Infrastructure', 
                    parties: ['NATO', 'Russia'], 
                    description: 'Cables, pipelines vulnerable',
                    
                    details: {
                        russianActivity: 'Ships surveying cables',
                        nordStreamProof: 'Infrastructure can be attacked',
                        protection: 'NATO increasing patrols',
                        criticality: 'Internet, power, communications'
                    }
                }
            ],
            
            navalBalance: {
                russia: 'Baltic Fleet (Kaliningrad, Kronstadt) - 50+ ships',
                nato: 'Overwhelming superiority - 8 nations combined',
                submarines: 'Russia still has capable subs',
                bottledup: 'Russian fleet can\'t exit Baltic freely',
                exercises: 'Regular NATO exercises'
            },
            
            airDefense: {
                russiaRange: 'Kaliningrad missiles cover all Baltic states',
                natoResponse: 'Air policing mission, Patriots deployed',
                a2Ad: 'Russia\'s Anti-Access/Area-Denial bubble'
            }
        },
        
        environment: {
            climate: 'Continental, cold',
            waterTemp: '2-17°C (large seasonal range)',
            salinity: '7 ppt average (very low - almost freshwater)',
            
            uniqueFeatures: {
                youngest: 'Youngest sea - 10,000 years old',
                brackish: 'Neither salt nor fresh - unique ecosystem',
                gradient: 'Salinity decreases toward north/east',
                north: 'Gulf of Bothnia almost freshwater (2-3 ppt)',
                ice: 'Freezes significantly every winter'
            },
            
            ice: {
                winter: 'Freezes partially every winter',
                coverage: '10-100% depending on severity',
                icebreakers: 'Needed for winter shipping',
                thickness: 'Up to 70cm in severe winters',
                duration: 'November-May in north'
            },
            
            tides: {
                range: 'Almost no tides',
                cause: 'Nearly enclosed sea',
                seiches: 'Wind-driven water level changes instead'
            },
            
            biodiversity: {
                limited: 'Low diversity due to brackish water',
                species: 'Must tolerate both salt and fresh',
                fish: ['Herring', 'Cod', 'Salmon', 'Pike'],
                mammals: ['Grey seal', 'Ringed seal', 'Harbour porpoise'],
                concern: 'Cod stocks collapsed'
            },
            
            climateChange: {
                warming: 'Faster than global average',
                ice: 'Less ice coverage each year',
                algae: 'Longer bloom seasons',
                species: 'Southern species moving in',
                storms: 'Increasing intensity'
            }
        },
        
        history: {
            formation: {
                iceAge: 'Covered by ice sheet until 10,000 BC',
                ancylusLake: 'Freshwater lake 8,000 BC',
                littorinaSea: 'Became brackish ~7,000 BC',
                young: 'One of world\'s youngest seas'
            },
            
            vikings: {
                period: '8th-11th century',
                routes: 'Major Viking trade routes',
                varangians: 'Vikings traveled to Constantinople',
                trade: 'Amber, furs, slaves'
            },
            
            hanseatic: {
                period: '12th-17th century',
                league: 'Hanseatic League trade network',
                cities: ['Lübeck', 'Hamburg', 'Gdansk', 'Riga', 'Tallinn'],
                dominance: 'Dominated Baltic trade'
            },
            
            swedish: {
                period: '17th century - Swedish Empire',
                control: 'Sweden controlled most of Baltic',
                decline: 'Lost to Russia (Great Northern War)'
            },
            
            russian: {
                peterGreat: 'St. Petersburg founded 1703',
                purpose: 'Russia\'s "Window to the West"',
                baltic: 'Russia became Baltic power'
            },
            
            wwii: {
                invasion: 'Germany invaded Poland from Baltic (1939)',
                occupation: 'Soviet occupation of Baltics (1940)',
                genocide: 'Holocaust in Baltic states',
                evacuation: 'Largest maritime evacuation (Germans from East Prussia)'
            },
            
            coldWar: {
                divided: 'NATO (West) vs Warsaw Pact (East)',
                submarines: 'Submarine patrols',
                surveillance: 'Constant monitoring',
                neutrals: 'Sweden/Finland buffer'
            },
            
            postColdWar: {
                independence: 'Baltic states regained 1991',
                natoExpansion: '2004 - Baltics joined NATO',
                euExpansion: '2004 - Baltics joined EU',
                transformation: 'From Soviet to Western'
            }
        },
        
        funFacts: [
            'Youngest sea - formed only 10,000 years ago after Ice Age',
            'Very low salinity - almost freshwater (can drink in some areas)',
            'Most polluted sea in the world',
            'Freezes partially every winter - icebreakers needed',
            'Now a "NATO Lake" after Finland/Sweden joined (2023-2024)',
            '40,000+ tonnes of WWII chemical weapons dumped on seafloor',
            'Almost no tides due to enclosed nature',
            'Nord Stream sabotage was largest methane release ever',
            'St. Petersburg was built to be Russia\'s "Window to the West"',
            'Kaliningrad is surrounded by NATO territory',
            'Home to world\'s busiest artificial waterway (Kiel Canal)',
            'Sweden ended 200+ years of neutrality to join NATO',
            'Amber from Baltic has been traded for 10,000 years',
            'Suwalki Gap is NATO\'s most vulnerable 65 km'
        ]
    },

    // ═══════════════════════════════════════════════════════
    // EAST CHINA SEA - MASSIVELY EXPANDED
    // ═══════════════════════════════════════════════════════
    {
        id: 'east-china-sea',
        name: 'East China Sea',
        parentOcean: 'Pacific Ocean',
        parentOceanId: 'pacific-ocean',
        
        area: 1249000,
        avgDepth: 350,
        maxDepth: 2719,
        volume: '303,000 km³',
        
        coordinates: [30, 126],
        defaultZoom: 5,
        
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500',
        backgroundImage: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=1920',
        
        etymology: {
            english: 'East China Sea',
            chinese: '东海 (Dōng Hǎi - East Sea)',
            japanese: '東シナ海 (Higashi Shina Kai)',
            korean: '동중국해 (Dong Jungguk Hae)'
        },
        
        physicalCharacteristics: {
            shape: 'Marginal sea between China and Japan',
            shelf: 'Mostly continental shelf (average 350m)',
            okinawa: 'Okinawa Trough - deep section',
            yangtze: 'Receives Yangtze River discharge'
        },
        
        borderingCountries: [
            { 
                name: 'China', 
                coastlineKm: 3000, 
                cities: ['Shanghai', 'Ningbo', 'Hangzhou', 'Wenzhou', 'Fuzhou'],
                shanghai: 'World\'s largest port',
                eez: '877,019 km²',
                claim: 'Claims continental shelf to Okinawa Trough'
            },
            { 
                name: 'Japan', 
                coastlineKm: 1000, 
                islands: ['Okinawa', 'Kyushu', 'Ryukyu Islands'],
                cities: ['Naha', 'Kagoshima', 'Nagasaki'],
                eez: '4,470,000 km² (total)',
                senkaku: 'Administers disputed Senkaku Islands'
            },
            { 
                name: 'South Korea', 
                coastlineKm: 500, 
                cities: ['Busan', 'Incheon', 'Ulsan'],
                eez: '300,000 km²',
                claim: 'Southern portion'
            },
            { 
                name: 'Taiwan', 
                coastlineKm: 400, 
                cities: ['Taipei', 'Kaohsiung', 'Keelung'],
                status: 'China claims Taiwan',
                claim: 'Same as China (ROC claim)'
            }
        ],
        
        straits: [
            { 
                name: 'Taiwan Strait', 
                connectsTo: 'South China Sea', 
                width: 180,
                narrowest: 130,
                depth: 60,
                annualShips: 270000,
                
                significance: {
                    traffic: 'One of world\'s busiest shipping routes',
                    chips: 'Taiwan makes 90% of advanced semiconductors',
                    flashpoint: 'World\'s most dangerous potential conflict'
                },
                
                chinaThreats: {
                    exercises: 'Regular military exercises',
                    pelosi2022: 'Massive exercises after Pelosi visit',
                    missiles: 'Fired over Taiwan (2022)',
                    incursions: 'Daily aircraft in Taiwan ADIZ',
                    stance: 'Reserves right to use force'
                },
                
                usPolicy: {
                    official: 'Strategic ambiguity - One China Policy',
                    tRA: 'Taiwan Relations Act - defense capability',
                    transits: 'Monthly freedom of navigation',
                    bidenStatements: '4 times said US would defend Taiwan'
                },
                
                warScenario: {
                    impact: 'Would devastate global economy',
                    chips: 'World would lose 90% chip supply',
                    probability: 'Some say window by 2027',
                    cost: 'Estimated $10+ trillion globally'
                }
            },
            { 
                name: 'Korea Strait', 
                connectsTo: 'Sea of Japan', 
                width: 200,
                depth: 90,
                annualShips: 100000,
                between: 'South Korea and Japan',
                significance: 'Access to Japan Sea'
            },
            { 
                name: 'Tokara Strait', 
                connectsTo: 'Pacific Ocean', 
                width: 200,
                depth: 200,
                between: 'Ryukyu Islands',
                submarine: 'Deep enough for submarines'
            }
        ],
        
        senkakuDispute: {
            overview: 'Most dangerous territorial dispute in East Asia',
            
            islands: {
                japaneseName: 'Senkaku Islands (尖閣諸島)',
                chineseName: 'Diaoyu Islands (钓鱼岛)',
                taiwaneseName: 'Tiaoyutai Islands (釣魚台列嶼)',
                count: '5 uninhabited islands, 3 rocks',
                totalArea: '7 km²',
                largestIsland: 'Uotsuri-shima (4.32 km²)',
                location: '170 km from Taiwan, 330 km from China, 170 km from Okinawa'
            },
            
            claimants: {
                japan: {
                    position: 'Incorporated 1895, no dispute exists',
                    control: 'Administers islands since 1972',
                    argument: 'Terra nullius when annexed, peaceful possession',
                    coastGuard: 'Regular patrols'
                },
                china: {
                    position: 'Historic Chinese territory since 15th century',
                    argument: 'Stolen by Japan in 1895 (Sino-Japanese War)',
                    intrusions: 'Monthly coast guard ships enter',
                    law2021: 'Coast guard can fire on "intruders"'
                },
                taiwan: {
                    position: 'Belongs to ROC (same claim as PRC)',
                    activity: 'Occasional activist boats'
                }
            },
            
            resources: {
                oil: 'Potential large reserves',
                gas: '70-160 billion barrels estimated (undeveloped)',
                fishing: 'Rich fishing grounds',
                eez: '40,000 km² EEZ stake'
            },
            
            flashpoints: {
                intrusions: '100+ Chinese incursions per year',
                duration: 'Chinese ships stay for hours',
                response: 'Japanese coast guard shadows',
                escalation: 'Risk of collision, confrontation'
            },
            
            2010Incident: {
                event: 'Chinese fishing boat rammed Japanese coast guard',
                response: 'Japan arrested captain',
                chinaReaction: 'Rare earth export ban, massive protests',
                outcome: 'Japan released captain, China emboldened'
            },
            
            2012Nationalization: {
                event: 'Japan purchased 3 islands from private owner',
                purpose: 'Prevent Tokyo Governor\'s provocation',
                chinaReaction: 'Massive protests, ships deployed',
                outcome: 'Permanent Chinese presence began'
            },
            
            usPosition: {
                treaty: 'Article 5 of US-Japan Security Treaty covers Senkaku',
                commitment: 'US would respond to attack on islands',
                neutrality: 'But takes no position on sovereignty',
                significance: 'Could trigger US-China war'
            },
            
            warRisk: {
                scenario: 'Collision → response → escalation',
                probability: 'Moderate - neither side wants war',
                concern: 'Miscalculation, nationalism'
            }
        },
        
        chinaADIZ: {
            declared: 'November 23, 2013',
            
            coverage: {
                area: '777,000 km²',
                includes: 'Most of East China Sea',
                overlaps: ['Japan ADIZ', 'South Korea ADIZ', 'Taiwan ADIZ'],
                senkaku: 'Covers disputed islands'
            },
            
            requirements: {
                rule: 'Aircraft must identify to Chinese military',
                submission: 'Flight plans required',
                response: 'China may take "defensive emergency measures"'
            },
            
            responses: {
                usa: 'B-52 bombers flew through without notifying (defiance)',
                japan: 'Rejected, flies without notifying',
                southKorea: 'Rejected, expanded own ADIZ in response',
                australia: 'Rejected',
                civilian: 'Most airlines comply for safety'
            },
            
            purpose: {
                assertion: 'Assert control over disputed areas',
                normalization: 'Make Chinese presence routine',
                precedent: 'May declare more (South China Sea?)'
            },
            
            enforcement: {
                regular: 'Chinese aircraft patrol ADIZ',
                intercepts: 'Intercept Japanese aircraft regularly',
                close: 'Some dangerously close encounters'
            }
        },
        
        taiwanStraitDetails: {
            overview: 'World\'s most dangerous flashpoint',
            
            geography: {
                width: '180 km at widest',
                narrowest: '130 km',
                depth: 'Average 60m (shallow)',
                distance: 'Taipei to Fujian: 130 km'
            },
            
            traffic: {
                ships: '270,000 annually',
                percentage: '50% of global container ships pass nearby',
                value: 'Trillions in trade'
            },
            
            semiconductors: {
                tsmc: 'Taiwan Semiconductor Manufacturing Company',
                globalShare: '92% of advanced chips (<7nm)',
                importance: 'Every phone, computer, car, weapon needs chips',
                concentration: 'Arguably world\'s most critical single point of failure',
                china: 'China imports $300B chips/year'
            },
            
            chinaCapabilities: {
                missiles: '1,500+ missiles aimed at Taiwan',
                aircraft: '1,500+ combat aircraft',
                navy: '350+ ships (world\'s largest)',
                landing: 'Amphibious capability improving',
                exercises: 'Practiced blockade (August 2022)'
            },
            
            taiwanDefenses: {
                military: '165,000 active, 1.5M reserves',
                missiles: 'Anti-ship missiles, air defense',
                challenge: 'Outnumbered 10:1',
                strategy: '"Porcupine" defense',
                usArms: 'US sells billions in weapons'
            },
            
            usRole: {
                tRA: 'Taiwan Relations Act (1979)',
                obligation: 'Help Taiwan defend itself',
                ambiguity: 'No promise to defend directly',
                biden: 'Said 4 times US would defend (walked back)',
                forces: '7th Fleet, Japan bases'
            },
            
            scenarios: {
                invasion: 'Massive operation, high casualties, months',
                blockade: 'Surround, starve - slower but effective',
                decapitation: 'Quick strike on leadership',
                gradualism: 'Slowly squeeze (current approach)'
            }
        },
        
        economicImportance: {
            overview: 'One of world\'s most important shipping regions',
            tradeValue: '$1 trillion transit annually',
            
            majorPorts: [
                { 
                    name: 'Shanghai', 
                    country: 'China', 
                    containers: '47M TEU',
                    ranking: '#1 World (since 2010)',
                    growth: 'Was fishing village 100 years ago',
                    river: 'At mouth of Yangtze',
                    yangshan: 'Deepwater port built on islands'
                },
                { 
                    name: 'Ningbo-Zhoushan', 
                    country: 'China', 
                    containers: '33M TEU',
                    ranking: '#3 World',
                    tonnage: '#1 World by tonnage',
                    growth: 'Fastest growing major port'
                },
                { 
                    name: 'Busan', 
                    country: 'South Korea', 
                    containers: '22M TEU',
                    ranking: '#7 World',
                    transshipment: 'Major transshipment hub',
                    development: 'New port development'
                },
                { 
                    name: 'Kaohsiung', 
                    country: 'Taiwan', 
                    containers: '9.5M TEU',
                    ranking: '#15 World',
                    significance: 'Taiwan\'s largest'
                }
            ],
            
            resources: {
                oil: '70-160 billion barrels estimated',
                gas: '1-2 trillion cubic meters',
                status: 'Undeveloped due to disputes',
                jointDevelopment: '2008 agreement (never implemented)'
            },
            
            fishing: {
                value: '$10+ billion annually',
                species: ['Hairtail', 'Mackerel', 'Squid', 'Yellowtail'],
                disputes: 'Frequent conflicts',
                overfishing: 'Severe depletion'
            }
        },
        
        geopolitics: {
            strategicImportance: 'Very High - Potential WWIII flashpoint',
            tensionLevel: 'High and rising',
            
            issues: [
                { 
                    name: 'Senkaku/Diaoyu Islands', 
                    parties: ['Japan', 'China', 'Taiwan'], 
                    description: 'Territorial dispute - could trigger war',
                    risk: 'Monthly intrusions, potential escalation'
                },
                { 
                    name: 'Taiwan Strait', 
                    parties: ['China', 'Taiwan', 'USA'], 
                    description: 'World\'s most dangerous flashpoint',
                    chips: '90% of advanced semiconductors at stake'
                },
                { 
                    name: 'China ADIZ', 
                    parties: ['China', 'Japan', 'USA'], 
                    description: 'Overlapping air defense zones',
                    risk: 'Aircraft intercepts'
                },
                { 
                    name: 'EEZ Disputes', 
                    parties: ['China', 'Japan', 'South Korea'], 
                    description: 'Overlapping maritime claims',
                    resources: 'Oil, gas, fishing'
                }
            ],
            
            navalPresences: [
                { 
                    country: 'China', 
                    fleet: 'East Sea Fleet',
                    base: 'Ningbo',
                    assets: '100+ ships, submarines',
                    growth: 'Rapidly expanding',
                    exercises: 'Frequent around Taiwan'
                },
                { 
                    country: 'Japan', 
                    force: 'Maritime Self-Defense Force',
                    base: 'Sasebo',
                    assets: 'Modern destroyers, submarines',
                    role: 'Monitoring, defense'
                },
                { 
                    country: 'USA', 
                    force: '7th Fleet',
                    base: 'Yokosuka (Japan)',
                    assets: 'Aircraft carrier, 70+ ships',
                    role: 'Deterrence, Taiwan defense',
                    transits: 'Monthly Taiwan Strait transits'
                },
                { 
                    country: 'Taiwan', 
                    force: 'ROC Navy',
                    assets: 'Destroyers, frigates, submarines',
                    role: 'Defense',
                    challenge: 'Outmatched by China'
                }
            ],
            
            usAlliances: {
                japan: 'US-Japan Security Treaty (1960)',
                coverage: 'Article 5 covers Senkaku',
                troops: '54,000 US troops in Japan',
                bases: 'Okinawa, Yokosuka, Sasebo',
                commitment: 'Would likely defend Japan'
            },
            
            firstIslandChain: {
                concept: 'Chain of islands containing China',
                islands: ['Japan', 'Ryukyus', 'Taiwan', 'Philippines'],
                chinaConcern: 'Feels "surrounded"',
                chinaGoal: 'Break through chain',
                uSGoal: 'Maintain containment'
            }
        },
        
        environment: {
            climate: 'Subtropical to temperate',
            waterTemp: '7-28°C (large seasonal range)',
            salinity: '31-34 ppt',
            
            yangtzeInfluence: {
                river: 'World\'s 3rd longest river',
                discharge: '30,000 m³/s',
                sediment: 'Massive sediment load',
                pollution: 'Carries pollution to sea',
                damEffect: 'Three Gorges Dam reduced sediment'
            },
            
            pollution: {
                sources: 'Industrial, agricultural, shipping',
                yangtze: 'Major pollution source',
                algae: 'Red tides frequent',
                plastic: 'Significant',
                fisheries: 'Declining due to pollution'
            },
            
            biodiversity: {
                species: '1,000+ fish species',
                mammals: 'Finless porpoise (endangered)',
                threats: 'Overfishing, pollution, development',
                decline: 'Significant ecosystem degradation'
            }
        },
        
        history: {
            ancient: {
                trade: 'Ancient maritime silk road',
                tributeSystem: 'Chinese tribute system',
                ryukyu: 'Ryukyu Kingdom (tributary to both China and Japan)'
            },
            
            sinoJapaneseWar: {
                1894: 'First Sino-Japanese War',
                treaty: 'Treaty of Shimonoseki 1895',
                taiwan: 'Japan took Taiwan',
                senkaku: 'Japan incorporated Senkaku'
            },
            
            wwii: {
                japanese: 'Japanese control',
                okinawa: 'Battle of Okinawa (100,000+ dead)',
                surrender: '1945'
            },
            
            postWar: {
                usOccupation: 'US administered Ryukyus 1945-1972',
                reversion: '1972 - Returned to Japan (with Senkaku)',
                chinaObjection: 'China began claiming Senkaku'
            }
        },
        
        funFacts: [
            'Senkaku/Diaoyu dispute could trigger US-China conflict',
            'China declared Air Defense Identification Zone over entire sea (2013)',
            'Taiwan Strait is world\'s most surveilled waterway',
            'Shanghai is the world\'s busiest port (#1 since 2010)',
            '90% of world\'s advanced semiconductors made in Taiwan',
            'Taiwan Strait sees 270,000 ship transits per year',
            'US Navy transits Taiwan Strait monthly (freedom of navigation)',
            'Chinese aircraft cross Taiwan ADIZ daily',
            'Senkaku Islands are uninhabited but claimed by 3 parties',
            'China\'s 2022 exercises fired missiles over Taiwan',
            'Potential oil reserves of 70-160 billion barrels',
            'Three countries\' ADIZs overlap in the sea'
        ]
    },

    // ═══════════════════════════════════════════════════════
    // SEA OF JAPAN - MASSIVELY EXPANDED  
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
        volume: '1,713,000 km³',
        
        coordinates: [40, 135],
        defaultZoom: 5,
        
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500',
        backgroundImage: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=1920',
        
        etymology: {
            english: 'Sea of Japan',
            japanese: '日本海 (Nihonkai)',
            korean: '동해 (Donghae - East Sea)',
            russian: 'Японское море (Yaponskoye more)',
            dispute: 'Name highly politicized between Japan and Korea'
        },
        
        nameDispute: {
            overview: 'Contentious diplomatic issue between Japan and Korea',
            
            japanPosition: {
                name: 'Sea of Japan (日本海)',
                history: 'Used internationally since early 1800s',
                iho: 'IHO publication S-23 uses Sea of Japan (1929)',
                argument: 'Established international usage',
                maps: '97% of historical Western maps use Sea of Japan'
            },
            
            koreaPosition: {
                name: 'East Sea (동해)',
                history: 'Used in Korea for 2,000 years',
                argument: 'Sea of Japan imposed during colonial period (1910-1945)',
                colonialism: 'Name spread when Korea couldn\'t protest',
                request: 'Both names or East Sea alone'
            },
            
            internationalStatus: {
                un: 'Uses "Sea of Japan" with footnote',
                iho: 'Debating - no resolution',
                nationalGeographic: 'Shows both names',
                google: 'Varies by user location',
                compromise: 'Some suggest numerical designation'
            },
            
            recentDevelopments: {
                iho2020: 'IHO decided to use numerical identifiers instead of names',
                resolution: 'Still contentious',
                impact: 'Affects diplomatic relations'
            }
        },
        
        borderingCountries: [
            { 
                name: 'Japan', 
                coastlineKm: 4000, 
                prefectures: ['Niigata', 'Ishikawa', 'Fukui', 'Shimane', 'Yamaguchi'],
                cities: ['Niigata', 'Kanazawa', 'Vladivostok access'],
                side: 'Eastern coast (Sea of Japan side)'
            },
            { 
                name: 'Russia', 
                coastlineKm: 1500, 
                cities: ['Vladivostok', 'Nakhodka'],
                vladivostok: 'Russia\'s Pacific Fleet HQ',
                railwayEnd: 'Trans-Siberian Railway terminus'
            },
            { 
                name: 'South Korea', 
                coastlineKm: 1500, 
                cities: ['Busan', 'Pohang', 'Ulsan', 'Gangneung'],
                busan: 'Major port (#7 globally)'
            },
            { 
                name: 'North Korea', 
                coastlineKm: 800, 
                cities: ['Wonsan', 'Chongjin', 'Rason'],
                missiles: 'Missile tests land here',
                submarines: 'Submarine bases'
            }
        ],
        
        straits: [
            { 
                name: 'Korea Strait (Tsushima Strait)', 
                connectsTo: 'East China Sea', 
                width: 200,
                channels: ['Western Channel', 'Eastern Channel (Tsushima Strait)'],
                depth: 90,
                annualShips: 100000,
                between: 'South Korea and Japan',
                significance: 'Major shipping lane'
            },
            { 
                name: 'Tsugaru Strait', 
                connectsTo: 'Pacific Ocean', 
                width: 20,
                depth: 200,
                between: 'Honshu and Hokkaido',
                tunnel: 'Seikan Tunnel (54 km) runs underneath',
                significance: 'International strait'
            },
            { 
                name: 'La Pérouse Strait (Soya Strait)', 
                connectsTo: 'Sea of Okhotsk', 
                width: 43,
                depth: 50,
                between: 'Hokkaido (Japan) and Sakhalin (Russia)',
                ice: 'Ice in winter'
            },
            { 
                name: 'Tatar Strait', 
                connectsTo: 'Sea of Okhotsk', 
                width: 7,
                between: 'Sakhalin and Russian mainland',
                shallow: 'Only 7m at narrowest',
                ice: 'Freezes in winter'
            }
        ],
        
        dokdoTakeshima: {
            overview: 'Most contentious Korea-Japan territorial dispute',
            
            islands: {
                koreanName: 'Dokdo (독도)',
                japaneseName: 'Takeshima (竹島)',
                englishAlternate: 'Liancourt Rocks',
                count: '2 main islets (Dongdo, Seodo), 35 smaller rocks',
                area: '0.2 km² total',
                location: '217 km from Korea, 250 km from Japan'
            },
            
            control: {
                current: 'South Korea (since 1954)',
                occupation: 'Korean coast guard stationed',
                residents: '2 Korean residents (symbolic)',
                lighthouse: 'Lighthouse, helipad',
                tourism: 'Korean tourists visit'
            },
            
            koreaPosition: {
                claim: 'Documented since 512 AD (Usan-guk)',
                ancient: 'Part of Ulleungdo administration',
                cairo: 'Cairo Declaration 1943 (return "stolen" territories)',
                current: 'No dispute - clearly Korean'
            },
            
            japanPosition: {
                claim: 'Incorporated 1905 (Shimane Prefecture)',
                terra: 'Terra nullius when incorporated',
                scap: 'SCAPIN-677 excluded from Japan (but temporary)',
                peace: 'Not mentioned in San Francisco Treaty',
                dispute: 'Should be ICJ arbitration'
            },
            
            history: [
                { year: 512, event: 'Silla Kingdom conquered Usan-guk (Korean claim)' },
                { year: 1696, event: 'Japan\'s Tokugawa government banned travel' },
                { year: 1877, event: 'Dajokan Order - Japan says not its territory' },
                { year: 1905, event: 'Japan incorporated as Shimane Prefecture' },
                { year: 1910, event: 'Japan colonized Korea' },
                { year: 1945, event: 'Japan surrendered, Korea independent' },
                { year: 1952, event: 'South Korea declared "Syngman Rhee Line" including Dokdo' },
                { year: 1954, event: 'South Korea stationed coast guard' }
            ],
            
            strategic: {
                fishingRights: '200-mile EEZ - 16,600 km² at stake',
                methaneHydrates: 'Potential energy resources',
                squid: 'Rich squid fishing grounds',
                nationalism: 'Extremely emotional issue both countries'
            },
            
            incidents: [
                { year: 2005, event: 'Japan\'s Shimane "Takeshima Day" sparked protests' },
                { year: 2008, event: 'US geographic board listing sparked crisis' },
                { year: 2012, event: 'Korean President Lee Myung-bak visited' },
                { year: 2019, event: 'Trade war connected to historical issues' }
            ],
            
            koreaEmotional: {
                symbol: 'Symbol of Japanese colonialism',
                education: 'Taught in schools',
                song: 'Popular songs about Dokdo',
                fervor: 'Intense public emotion'
            }
        },
        
        northKoreaMissiles: {
            overview: 'Sea of Japan is North Korea\'s missile test range',
            
            statistics: {
                2022: '30+ missiles launched into Sea of Japan',
                2023: '20+ missiles launched',
                2024: 'Multiple launches continue',
                total: '100+ since 2019'
            },
            
            types: {
                icbm: ['Hwasong-15', 'Hwasong-17 (world\'s largest road-mobile)'],
                irbm: ['Hwasong-12 (can reach Guam)'],
                mrbm: ['Pukguksong-2', 'Others'],
                slbm: ['Pukguksong-1', 'Pukguksong-3'],
                cruise: ['Hwasal-1', 'Hwasal-2'],
                hypersonic: ['Hwasong-8']
            },
            
            fallZone: {
                location: 'East of North Korea, in Sea of Japan',
                eezViolation: 'Regularly falls in Japan\'s EEZ',
                distance: 'Some fly over Japan (Hokkaido)',
                range: 'Hwasong-17 demonstrated 15,000+ km range'
            },
            
            japanResponse: {
                jalert: 'J-Alert system warnings',
                aegis: 'Aegis destroyers on patrol',
                pac3: 'PAC-3 missile batteries',
                shelters: 'Public drills',
                interceptor: 'Has not intercepted (risk of failure)'
            },
            
            concern: {
                nuclear: 'North Korea has nuclear warheads',
                targeting: 'Can hit Japan, South Korea, Guam',
                usa: 'ICBMs can theoretically reach continental US',
                miniaturization: 'Believed to have miniaturized warheads'
            }
        },
        
        russiaJapanDispute: {
            overview: 'Japan and Russia technically still at war (no peace treaty)',
            
            territories: {
                japaneseName: 'Northern Territories',
                russianName: 'Southern Kurils',
                islands: ['Iturup (Etorofu)', 'Kunashir (Kunashiri)', 'Shikotan', 'Habomai group'],
                area: '5,000+ km²',
                control: 'Russia (since 1945)'
            },
            
            history: [
                { year: 1855, event: 'Treaty of Shimoda - border established' },
                { year: 1875, event: 'Treaty of St. Petersburg - Japan got Kurils' },
                { year: 1945, event: 'Soviet invasion, seized islands' },
                { year: 1956, event: 'Japan-Soviet Declaration - agreed to negotiate' },
                { year: 1960, event: 'USSR withdrew offer after US-Japan treaty' },
                { year: 2018, event: 'Abe-Putin talks - no progress' }
            ],
            
            japanPosition: {
                claim: 'All 4 islands/groups are Japanese',
                basis: 'Never part of Kuril Islands in treaties',
                return: 'Must be returned for peace treaty',
                residents: '17,000 Japanese displaced in 1945'
            },
            
            russiaPosition: {
                claim: 'Legal result of WWII',
                basis: 'Yalta Agreement, UN Charter',
                unchangeable: 'Results of war cannot be revised',
                militarization: 'Building bases, missiles'
            },
            
            currentStatus: {
                peaceTreaty: 'Never signed - technically at war',
                talks: 'Suspended after Ukraine invasion 2022',
                sanction: 'Japan sanctioned Russia',
                hostility: 'Relations at historic low'
            }
        },
        
        economicImportance: {
            overview: 'Major shipping route, important fisheries',
            tradeValue: '$200 billion annually',
            
            majorPorts: [
                { 
                    name: 'Busan', 
                    country: 'South Korea', 
                    containers: '22M TEU',
                    ranking: '#7 World',
                    transshipment: 'Major hub',
                    development: 'Busan New Port'
                },
                { 
                    name: 'Vladivostok', 
                    country: 'Russia', 
                    ranking: 'Russia\'s Pacific gateway',
                    railhead: 'Trans-Siberian Railway terminus',
                    navy: 'Pacific Fleet HQ',
                    freePort: 'Free port status'
                },
                { 
                    name: 'Niigata', 
                    country: 'Japan', 
                    type: 'Japan Sea coast hub',
                    trade: 'Russia, Korea trade'
                },
                { 
                    name: 'Pohang', 
                    country: 'South Korea', 
                    industry: 'POSCO steel',
                    ranking: 'Major industrial port'
                }
            ],
            
            fishing: {
                value: '$5 billion annually',
                species: ['Pollock', 'Squid', 'Crab', 'Salmon', 'Sea urchin', 'Hairtail'],
                squid: 'World\'s largest squid fishing grounds',
                disputes: 'Frequent conflicts over fishing rights',
                northKorea: 'NK fishing boats encroach'
            },
            
            shipping: {
                routes: ['Korea-Japan', 'Russia-Japan', 'Trans-Siberian connection'],
                ferries: 'Ferry services between countries',
                growth: 'Arctic route interest'
            }
        },
        
        geopolitics: {
            strategicImportance: 'High',
            tensionLevel: 'Moderate-High',
            
            issues: [
                { 
                    name: 'Sea Name Dispute', 
                    parties: ['Japan', 'South Korea'], 
                    description: '"East Sea" vs "Sea of Japan"',
                    status: 'Unresolved, highly emotional'
                },
                { 
                    name: 'Dokdo/Takeshima', 
                    parties: ['Japan', 'South Korea'], 
                    description: 'Island sovereignty dispute',
                    status: 'South Korea controls, Japan claims'
                },
                { 
                    name: 'North Korean Missiles', 
                    parties: ['North Korea', 'Japan', 'USA'], 
                    description: 'Regular missile tests',
                    risk: 'Increasing capability'
                },
                { 
                    name: 'Kuril Islands', 
                    parties: ['Russia', 'Japan'], 
                    description: 'Northern Territories dispute',
                    status: 'No peace treaty since 1945'
                }
            ],
            
            navalPresences: [
                { 
                    country: 'Japan', 
                    force: 'Maritime Self-Defense Force',
                    assets: 'Modern destroyers, submarines',
                    role: 'Defense, North Korea monitoring'
                },
                { 
                    country: 'South Korea', 
                    force: 'ROK Navy',
                    base: 'Busan, Donghae',
                    role: 'Defense, Dokdo patrol'
                },
                { 
                    country: 'Russia', 
                    base: 'Vladivostok',
                    force: 'Pacific Fleet',
                    assets: 'Submarines, surface ships'
                },
                { 
                    country: 'USA', 
                    presence: 'Ships from Japan bases',
                    role: 'Alliance, North Korea'
                },
                { 
                    country: 'North Korea', 
                    bases: 'Wonsan, others',
                    assets: 'Submarines, missile boats',
                    role: 'Coastal defense, threats'
                }
            ]
        },
        
        environment: {
            climate: 'Temperate, cold in north',
            waterTemp: '0-25°C (large range)',
            salinity: '34 ppt',
            
            unique: {
                deep: 'Deep basin (average 1,753m)',
                enclosed: 'Nearly enclosed',
                exchange: 'Limited water exchange',
                ventilation: 'Deep water formation occurs'
            },
            
            biodiversity: {
                species: 'Rich fishing grounds',
                squid: 'Enormous squid populations',
                mammals: ['Seals', 'Sea lions', 'Occasional whales'],
                pollution: 'Industrial from China, Korea, Russia'
            },
            
            ice: {
                vladivostok: 'Harbor freezes, icebreakers needed',
                north: 'Sea ice in northern areas',
                duration: 'December-March'
            },
            
            lightPollution: {
                squidFishing: 'Visible from space',
                boats: 'Thousands of boats use lights',
                satellites: 'North Korea dark, fishing boats bright'
            }
        },
        
        history: {
            ancient: {
                trade: 'Ancient trade routes',
                japanese: 'Japanese settlements along coast',
                korean: 'Korean kingdoms used sea'
            },
            
            battles: [
                { name: 'Battle of Tsushima', year: 1905, significance: 'Japan destroyed Russian fleet - Japan became great power' },
                { name: 'Russian Civil War', period: '1918-22', significance: 'Japanese intervention via Vladivostok' }
            ],
            
            coldWar: {
                soviet: 'Soviet Pacific Fleet dominance',
                usJapan: 'US-Japan alliance',
                patrols: 'Submarine patrols',
                incidents: 'Korean Air 007 shot down (1983)'
            },
            
            koreanAir007: {
                date: 'September 1, 1983',
                flight: 'New York - Seoul via Anchorage',
                shotDown: 'Soviet fighter shot down over Sakhalin',
                deaths: '269 people killed',
                cause: 'Navigation error into Soviet airspace',
                coldWar: 'Major Cold War incident',
                gps: 'Led Reagan to open GPS for civilian use'
            }
        },
        
        funFacts: [
            'Name disputed - Korea calls it "East Sea", major diplomatic issue',
            'Dokdo/Takeshima islands disputed since 1945',
            'North Korean missiles regularly land here during tests',
            'Rich fishing grounds - world\'s largest squid fishery',
            'Japan and Russia technically still at war (no peace treaty since WWII)',
            'Korean Air Flight 007 was shot down here in 1983 (269 dead)',
            'Squid fishing boats so bright they\'re visible from space',
            'Battle of Tsushima (1905) was decisive in Japan becoming world power',
            'Vladivostok is only 130 km from North Korea',
            'Northern parts freeze in winter',
            'Trans-Siberian Railway ends at Vladivostok on this sea'
        ]
    },

    // ═══════════════════════════════════════════════════════
    // CORAL SEA - MASSIVELY EXPANDED
    // ═══════════════════════════════════════════════════════
    {
        id: 'coral-sea',
        name: 'Coral Sea',
        parentOcean: 'Pacific Ocean',
        parentOceanId: 'pacific-ocean',
        
        area: 4791000,
        avgDepth: 2394,
        maxDepth: 9140,
        volume: '11,470,000 km³',
        
        coordinates: [-18, 152],
        defaultZoom: 4,
        
        image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=500',
        backgroundImage: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=1920',
        
        etymology: {
            english: 'Coral Sea - named for extensive coral reefs',
            origin: 'Great Barrier Reef and other coral formations'
        },
        
        borderingCountries: [
            { 
                name: 'Australia', 
                coastlineKm: 2000, 
                state: 'Queensland',
                cities: ['Cairns', 'Townsville', 'Gladstone', 'Mackay'],
                gbr: 'Great Barrier Reef',
                eez: '1,550,000 km²'
            },
            { 
                name: 'Papua New Guinea', 
                coastlineKm: 500, 
                cities: ['Port Moresby'],
                biodiversity: 'Extremely high'
            },
            { 
                name: 'New Caledonia', 
                coastlineKm: 1000, 
                status: 'French overseas territory',
                capital: 'Nouméa',
                reef: 'Second largest barrier reef'
            },
            { 
                name: 'Solomon Islands', 
                coastlineKm: 500, 
                capital: 'Honiara',
                wwii: 'Guadalcanal campaign',
                china: '2022 security deal with China'
            },
            { 
                name: 'Vanuatu', 
                coastlineKm: 500, 
                capital: 'Port Vila',
                islands: 80,
                volcanoes: 'Active volcanoes'
            }
        ],
        
        straits: [
            { 
                name: 'Torres Strait', 
                connectsTo: 'Arafura Sea', 
                width: 150,
                between: 'Australia and Papua New Guinea',
                islands: '274 islands',
                depth: 'Very shallow - 12m average',
                danger: 'Extremely hazardous navigation',
                reefs: 'Extensive reef systems',
                tidal: 'Strong tidal currents',
                pilotage: 'Compulsory for large ships'
            }
        ],
        
        greatBarrierReef: {
            overview: 'World\'s largest coral reef system and living structure',
            
            statistics: {
                length: '2,300 km',
                area: '344,400 km²',
                reefs: '2,900 individual reefs',
                islands: '900+ islands',
                cays: '600+ continental islands, 300 coral cays',
                worldHeritage: 'UNESCO since 1981',
                visible: 'Visible from space'
            },
            
            biodiversity: {
                coralSpecies: '400+ species (1/3 of world total)',
                fishSpecies: '1,500+ species',
                molluscSpecies: '4,000+ species',
                starfish: '240+ species',
                turtles: '6 of 7 marine turtle species',
                whales: 'Humpback breeding ground',
                dolphins: '30+ species',
                sharks: ['White', 'Tiger', 'Grey reef', 'Whale shark'],
                dugongs: 'Large population',
                seabirds: '215+ species'
            },
            
            threats: {
                bleaching: {
                    events: [
                        { year: 1998, severity: 'First mass bleaching' },
                        { year: 2002, severity: 'Major bleaching' },
                        { year: 2016, severity: 'Worst ever - 29% died' },
                        { year: 2017, severity: 'Back-to-back - 22% died' },
                        { year: 2020, severity: 'Third mass bleaching' },
                        { year: 2022, severity: 'Fourth mass bleaching' },
                        { year: 2024, severity: 'Fifth mass bleaching - most extensive' }
                    ],
                    totalLoss: '50%+ of coral lost since 1995',
                    cause: 'Ocean warming above 1°C',
                    threshold: 'Bleaching begins at 1°C above average'
                },
                
                crownOfThorns: {
                    species: 'Crown-of-thorns starfish',
                    behavior: 'Eats coral',
                    outbreaks: 'Population explosions',
                    cause: 'Nutrient runoff promotes larvae',
                    control: 'Injection kills individual starfish'
                },
                
                cyclones: {
                    frequency: '2-3 major per decade',
                    damage: 'Physical destruction of coral',
                    recovery: '10-20 years to recover',
                    recentMajor: ['Cyclone Debbie 2017', 'Cyclone Jasper 2023']
                },
                
                other: [
                    'Ocean acidification',
                    'Agricultural runoff (nutrients, sediment)',
                    'Shipping groundings',
                    'Tourism pressure',
                    'Dredging for ports'
                ]
            },
            
            future: {
                warming1_5C: 'Lose 70-90% of coral',
                warming2C: 'Lose 99%+ of coral',
                recovery: 'Possible if warming stops',
                adaptation: 'Some corals adapting',
                intervention: 'Coral gardening, selective breeding'
            },
            
            economicValue: {
                totalValue: '$56 billion asset value',
                annualTourism: '$6.4 billion',
                jobs: '64,000 direct jobs',
                visitors: '2 million annually',
                fisheries: 'Important commercial/recreational',
                protection: 'Coastal storm protection worth billions'
            },
            
            management: {
                authority: 'Great Barrier Reef Marine Park Authority',
                area: '344,000 km² protected',
                zones: ['Green (no-take)', 'Yellow (limited use)', 'Blue (general use)'],
                noTake: '33% is no-take zones',
                effectiveness: 'Helps fish populations'
            }
        },
        
        battleOfCoralSea: {
            overview: 'First naval battle fought entirely by aircraft',
            
            details: {
                date: 'May 4-8, 1942',
                war: 'World War II',
                belligerents: ['USA', 'Australia'] vs ['Japan'],
                location: 'Coral Sea, northeast of Australia'
            },
            
            significance: {
                first: 'First battle where aircraft carriers engaged without ships seeing each other',
                first2: 'First naval battle fought entirely by aircraft',
                first3: 'First time Japanese advance was stopped',
                turning: 'Prevented Japanese invasion of Port Moresby',
                australiaSaved: 'Protected Australia from direct invasion threat'
            },
            
            forces: {
                allied: ['2 carriers (Lexington, Yorktown)', '8 cruisers', '13 destroyers'],
                japan: ['2 carriers (Shokaku, Zuikaku)', '1 light carrier (Shoho)', '9 cruisers']
            },
            
            losses: {
                allied: {
                    ships: 'USS Lexington (sunk), USS Yorktown (damaged)',
                    aircraft: '69 aircraft',
                    personnel: '656 killed'
                },
                japan: {
                    ships: 'Shoho (sunk), Shokaku (damaged)',
                    aircraft: '92 aircraft',
                    personnel: '966 killed'
                }
            },
            
            outcome: {
                tactical: 'Japanese tactical victory (more tonnage sunk)',
                strategic: 'Allied strategic victory',
                portMoresby: 'Invasion cancelled',
                midway: 'Shokaku and Zuikaku couldn\'t fight at Midway (1 month later)',
                midwayImpact: 'Yorktown hastily repaired, helped win Midway'
            },
            
            legacy: {
                warfare: 'Changed naval warfare forever',
                carriers: 'Proved aircraft carriers were new capital ships',
                anniversary: 'USS Canberra named for Australian cruiser'
            }
        },
        
        economicImportance: {
            overview: 'Tourism, shipping, fisheries',
            
            tourism: {
                greatBarrierReef: '$6.4 billion annually',
                visitors: '2 million tourists',
                activities: ['Diving', 'Snorkeling', 'Glass-bottom boats', 'Sailing'],
                ports: ['Cairns', 'Airlie Beach', 'Port Douglas'],
                cruises: 'Growing cruise market'
            },
            
            majorPorts: [
                { 
                    name: 'Gladstone', 
                    country: 'Australia', 
                    type: 'Coal export',
                    tonnage: '120 million tonnes',
                    ranking: 'Australia\'s largest coal port',
                    controversy: 'Dredging near reef'
                },
                { 
                    name: 'Townsville', 
                    country: 'Australia', 
                    type: 'General cargo, military',
                    military: 'Australian army base'
                },
                { 
                    name: 'Cairns', 
                    country: 'Australia', 
                    type: 'Tourism gateway',
                    reef: 'Main access to GBR'
                }
            ],
            
            shipping: {
                routes: 'Australia-Asia, Pacific islands',
                innerRoute: 'Inside reef passage (dangerous)',
                outerRoute: 'Outside reef (safer)',
                pilotage: 'Compulsory in reef waters'
            },
            
            fisheries: {
                commercial: 'Limited commercial fishing',
                recreational: 'Major recreational fishery',
                species: ['Coral trout', 'Red emperor', 'Mackerel'],
                aquaculture: 'Prawn farming'
            }
        },
        
        geopolitics: {
            strategicImportance: 'High - Increasing',
            
            issues: [
                { 
                    name: 'China Influence', 
                    parties: ['Australia', 'China', 'USA'], 
                    description: 'Competition for Pacific influence',
                    
                    details: {
                        solomon2022: 'Solomon Islands-China security deal',
                        concern: 'Potential Chinese base',
                        australiaResponse: 'Increased Pacific engagement',
                        pacificStep: 'Pacific Step-up policy'
                    }
                },
                { 
                    name: 'Pacific Island Competition', 
                    parties: ['Australia', 'China', 'USA', 'France'], 
                    description: 'Influence in PNG, Solomons, Vanuatu',
                    
                    details: {
                        china: 'Building infrastructure, loans',
                        australia: 'Traditional influence, aid',
                        climate: 'Islands want climate action',
                        tuna: 'Fishing rights important'
                    }
                }
            ],
            
            aukus: {
                agreement: 'Australia-UK-US (2021)',
                submarines: 'Australia to get nuclear submarines',
                basing: 'May be based in northern Australia',
                purpose: 'Counter China',
                controversy: 'France angry (lost submarine deal)'
            },
            
            australiaDefense: {
                bases: 'Expanding northern Australia presence',
                darwin: 'US Marines rotating through',
                townsville: 'Major army base',
                exercises: 'Regular with US, Japan',
                radar: 'Over-the-horizon radar'
            }
        },
        
        environment: {
            climate: 'Tropical',
            waterTemp: '23-28°C',
            salinity: '34-35 ppt',
            
            currents: {
                eastAustralian: 'East Australian Current (EAC)',
                direction: 'Southward along coast',
                findingNemo: 'Featured in Finding Nemo',
                strength: '30 km wide, 1-2 m/s'
            },
            
            cyclones: {
                season: 'November-April',
                frequency: '4-5 per year affect region',
                damage: 'Can devastate reefs',
                warming: 'Intensifying with climate change'
            },
            
            coralReefs: {
                gbr: 'Great Barrier Reef (world\'s largest)',
                newCaledonia: 'Second largest barrier reef',
                vanuatu: 'Extensive reefs',
                health: 'Declining due to warming'
            },
            
            marineLife: {
                richness: 'Among richest on Earth',
                endemism: 'Many species found nowhere else',
                conservation: 'Critical for global biodiversity'
            }
        },
        
        coralSeaIslands: {
            status: 'Australian External Territory',
            
            geography: {
                seaArea: '780,000 km²',
                landArea: 'Tiny - less than 3 km²',
                islands: 'Cays, reefs, small islands',
                permanent: '4 people (weather station staff)'
            },
            
            purpose: {
                eez: 'Australia\'s EEZ claim',
                scientific: 'Weather monitoring',
                military: 'Defense installations'
            },
            
            features: [
                { name: 'Willis Island', description: 'Weather station since 1921' },
                { name: 'Osprey Reef', description: 'Diving destination' },
                { name: 'Holmes Reef', description: 'Large reef system' }
            ]
        },
        
        history: {
            indigenous: {
                aboriginals: 'Aboriginal Australians for 65,000 years',
                torresStrait: 'Torres Strait Islanders distinct culture',
                seafaring: 'Canoe voyages between islands'
            },
            
            european: {
                cook: 'Captain James Cook explored 1770',
                ran: 'HMS Endeavour nearly wrecked on reef',
                naming: 'Named Great Barrier Reef'
            },
            
            wwii: {
                coral: 'Battle of Coral Sea (1942)',
                guadalcanal: 'Solomons campaign',
                png: 'Kokoda Track campaign',
                significance: 'Stopped Japanese expansion'
            }
        },
        
        funFacts: [
            'Great Barrier Reef is the largest living structure on Earth',
            'Battle of Coral Sea (1942) was first aircraft carrier battle in history',
            '50%+ of reef coral lost since 1995 due to bleaching',
            'Coral Sea Islands Territory has 4 permanent residents (weather station)',
            'Great Barrier Reef is visible from space',
            'Home to 6 of 7 species of marine turtles',
            'Finding Nemo\'s East Australian Current is real',
            '2,900 individual reefs make up the Great Barrier Reef',
            'Reef generates $6.4 billion in tourism annually',
            'Crown-of-thorns starfish outbreaks devastate coral',
            'Torres Strait has 274 islands between Australia and PNG',
            '2024 saw most extensive bleaching event ever recorded'
        ]
    },

    // ═══════════════════════════════════════════════════════
    // BERING SEA - MASSIVELY EXPANDED
    // ═══════════════════════════════════════════════════════
    {
        id: 'bering-sea',
        name: 'Bering Sea',
        parentOcean: 'Pacific Ocean',
        parentOceanId: 'pacific-ocean',
        
        area: 2292000,
        avgDepth: 1640,
        maxDepth: 4773,
        volume: '3,800,000 km³',
        
        coordinates: [58, -178],
        defaultZoom: 4,
        
        image: 'https://images.unsplash.com/photo-1494564605686-2e931f77a8e2?w=500',
        backgroundImage: 'https://images.unsplash.com/photo-1520923642038-b4259acecbd7?w=1920',
        
        etymology: {
            english: 'Bering Sea',
            namesake: 'Vitus Bering',
            who: 'Danish explorer in Russian service',
            when: '1728 and 1741 expeditions',
            russian: 'Берингово море (Beringovo more)'
        },
        
        physicalCharacteristics: {
            shape: 'Northern marginal sea',
            climate: 'Subarctic to Arctic',
            ice: 'Seasonal ice coverage',
            shelf: 'Extensive continental shelf (north)',
            deep: 'Deep basin (south)'
        },
        
        borderingCountries: [
            { 
                name: 'Russia', 
                coastlineKm: 2000, 
                region: 'Chukotka, Kamchatka',
                cities: ['Provideniya', 'Anadyr'],
                military: 'Strategic military assets',
                population: 'Sparse'
            },
            { 
                name: 'USA', 
                coastlineKm: 1500, 
                state: 'Alaska',
                cities: ['Nome', 'Dutch Harbor/Unalaska', 'St. Paul'],
                aleutians: 'Aleutian Islands chain',
                fishing: 'Major fishing industry'
            }
        ],
        
        straits: [
            { 
                name: 'Bering Strait', 
                connectsTo: 'Arctic Ocean', 
                width: 82,
                narrowest: 82,
                depth: 50,
                annualShips: 5000,
                
                significance: {
                    only: 'Only connection between Pacific and Arctic',
                    boundary: 'Russia-USA boundary',
                    dateLine: 'International Date Line passes through',
                    arctic: 'Gateway to Northern Sea Route'
                },
                
                diomedes: {
                    bigDiomede: 'Russian island',
                    littleDiomede: 'US island (population 100)',
                    distance: '3.8 km apart',
                    dateLine: 'Date line between them',
                    funFact: 'Can see Russia from Alaska here',
                    funFact2: 'Tomorrow Island (Russia) and Yesterday Island (US)'
                },
                
                arcticTraffic: {
                    trend: 'Increasing as ice melts',
                    routes: 'Northern Sea Route gaining interest',
                    ships: 'Icebreakers, cargo ships',
                    future: 'May become major shipping route'
                }
            }
        ],
        
        beringLandBridge: {
            overview: 'Ancient land connection between Asia and Americas',
            
            geography: {
                name: 'Beringia',
                period: '30,000 - 11,000 years ago',
                width: '1,600 km at maximum',
                cause: 'Lower sea levels during Ice Age',
                exposure: 'Sea level 120m lower than today'
            },
            
            humanMigration: {
                significance: 'Route for first humans to reach Americas',
                timing: '15,000-20,000 years ago (debated)',
                evidence: 'Genetic, archaeological, linguistic',
                ancestors: 'Ancestors of all indigenous Americans',
                popuoulations: ['Native Americans', 'First Nations', 'Inuit', 'Maya', 'Aztec', 'Inca']
            },
            
            animals: {
                crossed: ['Mammoths', 'Bison', 'Caribou', 'Humans'],
                toAsia: ['Horses (originated Americas)', 'Camels (originated Americas)'],
                evidence: 'Fossils found on both sides',
                megafauna: 'Many extinct after crossing'
            },
            
            flooding: {
                when: '~11,000 years ago',
                cause: 'Ice sheets melted, sea level rose',
                rate: 'Gradual over centuries',
                result: 'Separated continents permanently'
            },
            
            today: {
                distance: '82 km between Russia and Alaska',
                closest: 'Big Diomede to Little Diomede - 3.8 km',
                ice: 'Ice bridge sometimes forms in winter',
                crossing: 'Some have walked/swam across'
            },
            
            nationalPark: {
                us: 'Bering Land Bridge National Preserve',
                russia: 'Beringia National Park',
                heritage: 'Shared heritage site'
            }
        },
        
        fishingCrisis: {
            overview: 'Ecological collapse of major fisheries',
            
            snowCrabCrash: {
                year: 2022,
                species: 'Alaskan snow crab (Opilio)',
                decline: '90% population crash',
                numbers: '10 billion crabs disappeared',
                closure: 'First ever fishery closure',
                value: '$200 million industry collapsed',
                
                cause: {
                    heatwave: '2018-2019 marine heatwave',
                    temperature: '3-4°C above normal',
                    impact: 'Crabs\' metabolism increased',
                    starvation: 'Couldn\'t find enough food',
                    disease: 'Possibly contributed'
                },
                
                recovery: {
                    timeline: 'Unknown - may take decades',
                    2024: 'Still no recovery',
                    concern: 'May not recover to previous levels'
                }
            },
            
            kingCrab: {
                species: 'Red king crab, Blue king crab',
                status: 'Also severely declined',
                closure: 'Blue king crab fishery closed',
                value: 'Was $100 million industry',
                cause: 'Warming, overfishing, predators'
            },
            
            deadliestCatch: {
                show: 'Discovery Channel reality show',
                setting: 'Bering Sea crab fishing',
                impact: 'Made industry famous',
                2022: 'Documented closure',
                fishers: 'Many out of work'
            },
            
            pollock: {
                status: 'Still relatively healthy',
                value: '$1 billion fishery',
                product: 'Fish sticks, surimi (imitation crab)',
                percentage: '40% of US seafood catch',
                concern: 'Climate change may affect'
            },
            
            salmon: {
                status: 'Variable runs',
                2021: 'Historically low chinook/chum runs',
                warming: 'Affecting migration, survival'
            }
        },
        
        arcticShipping: {
            overview: 'Emerging shipping routes as ice melts',
            
            northernSeaRoute: {
                description: 'Arctic passage along Russia\'s north coast',
                length: '5,600 km',
                savings: '7,000+ miles vs Suez route (Europe-Asia)',
                days: 'Rotterdam to Shanghai: 35 days vs 48 days',
                season: 'July-November (expanding)',
                ice: 'Requires icebreaker escort',
                
                russiaRole: {
                    control: 'Russia claims right to control',
                    promotion: 'Actively promoting route',
                    fees: 'Charges for transit/escort',
                    infrastructure: 'Building ports, SAR'
                },
                
                growth: {
                    2010: '4 cargo transits',
                    2020: '62 cargo transits',
                    2024: 'Increasing annually',
                    potential: 'Could grow dramatically'
                }
            },
            
            beringStraitRole: {
                gateway: 'Only connection Pacific-Arctic',
                traffic: 'Must pass through',
                monitoring: 'US and Russia both watch',
                bottleneck: 'Potential chokepoint'
            },
            
            northwestPassage: {
                description: 'Arctic route through Canadian Arctic',
                status: 'Less developed than NSR',
                sovereignty: 'Canada vs US/international waters dispute',
                climate: 'More ice-free as warming continues'
            },
            
            chinaInterest: {
                claim: 'Declared itself "Near-Arctic State"',
                policy: 'Polar Silk Road',
                investment: 'Building icebreakers',
                russia: 'Partnership with Russia on NSR',
                concern: 'Western nations wary'
            },
            
            usResponse: {
                icebreakers: 'Only 2 operational (1 medium, 1 heavy)',
                newBuilding: 'Program to build 6 Polar Security Cutters',
                presence: 'Coast Guard increasing patrols',
                concern: 'Russia has 40+ icebreakers'
            },
            
            challenges: {
                ice: 'Still significant ice',
                depth: 'Shallow in places',
                infrastructure: 'Limited SAR, ports',
                environment: 'Oil spill would be catastrophic',
                insurance: 'High premiums'
            }
        },
        
        economicImportance: {
            overview: 'Major fishing grounds, emerging Arctic gateway',
            
            fishing: {
                value: '$3 billion annually (was higher)',
                percentUSSeafood: '40% of US seafood catch',
                employment: '30,000+ jobs',
                
                species: {
                    pollock: 'Largest US fishery by volume',
                    crab: 'Collapsed - was major industry',
                    salmon: 'Important commercial/subsistence',
                    halibut: 'High-value fishery',
                    cod: 'Pacific cod'
                },
                
                dutchHarbor: {
                    ranking: '#1 US fishing port by volume',
                    tonnage: '800+ million pounds annually',
                    processing: 'Major processing facilities'
                }
            },
            
            majorPorts: [
                { 
                    name: 'Dutch Harbor/Unalaska', 
                    country: 'USA', 
                    ranking: '#1 US by volume',
                    type: 'Fishing',
                    crab: 'Was crab capital of world',
                    population: '4,500'
                },
                { 
                    name: 'Nome', 
                    country: 'USA', 
                    type: 'Arctic gateway',
                    goldRush: 'Historic gold rush town',
                    iditarod: 'Iditarod finish line'
                },
                { 
                    name: 'Provideniya', 
                    country: 'Russia', 
                    type: 'Chukotka main port',
                    population: '2,000',
                    military: 'Former Soviet military'
                }
            ],
            
            oil: {
                exploration: 'Limited offshore exploration',
                controversy: 'Environmental opposition',
                potential: 'Significant reserves possible',
                arctic: 'More interest as ice melts'
            }
        },
        
        geopolitics: {
            strategicImportance: 'High - Increasing with Arctic opening',
            
            issues: [
                { 
                    name: 'Arctic Shipping', 
                    parties: ['Russia', 'USA', 'China'], 
                    description: 'Northern Sea Route emergence',
                    
                    details: {
                        russiaClaim: 'Controls NSR',
                        usFreedom: 'Maintains international waters position',
                        chinaInterest: 'Polar Silk Road',
                        competition: 'Arctic becoming contested'
                    }
                },
                { 
                    name: 'US-Russia Boundary', 
                    parties: ['USA', 'Russia'], 
                    description: 'Maritime boundary issues',
                    
                    details: {
                        treaty1990: '1990 boundary agreement',
                        russiaRatification: 'Russia never ratified',
                        usRatification: 'US ratified',
                        current: 'Generally respected but disputed'
                    }
                },
                { 
                    name: 'Arctic Resources', 
                    parties: ['Arctic nations'], 
                    description: 'Oil, gas, minerals becoming accessible',
                    
                    details: {
                        oil: '13% of world\'s undiscovered oil',
                        gas: '30% of world\'s undiscovered gas',
                        minerals: 'Rare earths, minerals',
                        accessibility: 'Ice melt opens access'
                    }
                }
            ],
            
            militaryActivity: {
                russia: {
                    buildup: 'Rebuilding Soviet-era Arctic bases',
                    bases: 'Reopening abandoned bases',
                    exercises: 'Regular military exercises',
                    strategy: 'Controlling NSR, defense'
                },
                usa: {
                    strategy: 'Regaining Arctic capability',
                    alaska: 'Increasing Alaska forces',
                    icebreakers: 'Building new ships',
                    exercises: 'ICEX submarine exercises'
                },
                china: {
                    interest: 'Declared "Near-Arctic State"',
                    ships: 'Sending ships through region',
                    research: 'Scientific expeditions',
                    icebreakers: 'Building polar-capable ships'
                }
            },
            
            arcticCouncil: {
                members: ['USA', 'Russia', 'Canada', 'Denmark', 'Norway', 'Sweden', 'Finland', 'Iceland'],
                2022: 'Suspended cooperation with Russia',
                future: 'Uncertain due to Ukraine war'
            }
        },
        
        environment: {
            climate: 'Subarctic to Arctic',
            waterTemp: '-1 to 10°C',
            salinity: '32-33 ppt',
            
            ice: {
                seasonal: 'Ice forms October-June',
                coverage: 'Up to 50% covered',
                extent: 'Declining each decade',
                thickness: 'Getting thinner',
                polyna: 'Open water areas form'
            },
            
            wildlife: {
                marineLife: {
                    whales: ['Gray whale', 'Humpback', 'Bowhead', 'Beluga', 'Orca'],
                    walrus: 'Large populations',
                    seals: ['Spotted seal', 'Ribbon seal', 'Bearded seal', 'Ringed seal'],
                    seaOtters: 'Historic population',
                    seaLions: 'Steller sea lions'
                },
                
                birds: {
                    numbers: 'Millions of seabirds',
                    species: ['Puffins', 'Murres', 'Auklets', 'Kittiwakes'],
                    colonies: 'Massive breeding colonies on islands',
                    migration: 'Major flyway'
                },
                
                threatened: {
                    concern: 'Warming threatening ice-dependent species',
                    walrus: 'Losing ice platforms',
                    seals: 'Pupping habitat at risk',
                    seabirds: 'Food web changes'
                }
            },
            
            ecosystem: {
                productivity: 'One of most productive seas',
                upwelling: 'Nutrient-rich water',
                foodWeb: 'Supports massive fish/bird/mammal populations',
                algae: 'Ice algae crucial for food web'
            },
            
            climateChange: {
                warming: '2-3°C warming since 1970',
                ice: 'Declining ice coverage',
                heatwave2019: 'Marine heatwave killed billions of crabs',
                ecosystem: 'Fundamental changes occurring',
                predictions: 'Ice-free summers possible by 2050'
            }
        },
        
        history: {
            indigenous: {
                peoples: ['Aleut', 'Yupik', 'Chukchi', 'Inuit'],
                lifestyle: 'Maritime hunting culture',
                duration: '10,000+ years',
                subsistence: 'Still practice traditional hunting'
            },
            
            exploration: {
                bering: 'Vitus Bering (1728, 1741)',
                cook: 'Captain James Cook (1778)',
                russianAmerica: 'Russian fur trade',
                alaska: 'US purchased Alaska 1867 ($7.2 million)'
            },
            
            wwii: {
                aleutians: 'Japanese invaded Aleutian Islands (1942)',
                attu: 'Battle of Attu - bloody fighting',
                kiska: 'Japanese evacuated Kiska',
                fog: 'Terrible weather hampered operations'
            },
            
            coldWar: {
                frontier: 'Cold War frontier',
                submarines: 'Submarine patrols',
                radar: 'DEW Line radar stations',
                korean: 'Korean Air 007 (1983) - shot down nearby'
            }
        },
        
        funFacts: [
            'Land bridge during Ice Age - humans migrated to Americas across Beringia',
            'One of most productive fishing grounds on Earth',
            'Crab populations crashed 90% in 2022 due to marine heatwave',
            'Deadliest Catch TV show filmed here',
            'Big Diomede (Russia) and Little Diomede (USA) only 3.8 km apart',
            'International Date Line runs between the two Diomedes',
            'Named after Vitus Bering, Danish explorer in Russian service',
            'Dutch Harbor is #1 US fishing port by volume',
            '10 billion snow crabs disappeared between 2018-2022',
            'Can theoretically walk from Russia to Alaska when strait freezes',
            'Sarah Palin\'s "I can see Russia from my house" - technically possible from here',
            'Millions of seabirds nest on Pribilof Islands',
            'Gray whales migrate 10,000 km through here annually',
            'Russia has 40+ icebreakers, US has only 2'
        ]
    }
];

// ═══════════════════════════════════════════════════════════
// ENHANCED GLOBAL TRADE ROUTES
// ═══════════════════════════════════════════════════════════

const globalTradeRoutes = [
    {
        id: 'asia-europe-suez',
        name: 'Asia-Europe via Suez',
        type: 'container',
        importance: 'Primary - World\'s busiest trade route',
        
        statistics: {
            annualValue: '$1.5 trillion',
            percentGlobalTrade: 15,
            transitTime: '30-35 days',
            annualShips: 19000,
            annualTeu: '25 million TEU',
            distance: '21,000 km (Shanghai-Rotterdam)'
        },
        
        route: {
            description: 'Shanghai → Singapore → Suez Canal → Rotterdam',
            path: [
                { lat: 31.2, lng: 121.5, name: 'Shanghai', type: 'Origin', port: 'World\'s busiest' },
                { lat: 22.3, lng: 114.2, name: 'Hong Kong', type: 'Stop', port: 'Major transshipment' },
                { lat: 1.3, lng: 103.8, name: 'Singapore', type: 'Stop', port: 'Transshipment hub' },
                { lat: 4.5, lng: 98.7, name: 'Malacca Strait', type: 'Chokepoint' },
                { lat: 12.5, lng: 43.5, name: 'Bab el-Mandeb', type: 'Chokepoint' },
                { lat: 30, lng: 32, name: 'Suez Canal', type: 'Chokepoint' },
                { lat: 36, lng: -5.5, name: 'Gibraltar', type: 'Chokepoint' },
                { lat: 52, lng: 4, name: 'Rotterdam', type: 'Destination', port: 'Europe\'s largest' }
            ]
        },
        
        chokepoints: [
            { 
                name: 'Strait of Malacca', 
                risk: 'Congestion, piracy',
                dailyShips: 250,
                oilPercent: '25% of global oil'
            },
            { 
                name: 'Bab el-Mandeb', 
                risk: 'Houthi attacks (2023-2024)',
                status2024: 'Most ships rerouting to Cape',
                crisis: 'Yemen conflict spillover'
            },
            { 
                name: 'Suez Canal', 
                risk: 'Blockage (Ever Given 2021)',
                revenue: '$9.4 billion annually',
                singlePoint: 'Critical single point of failure'
            },
            { 
                name: 'Strait of Gibraltar', 
                risk: 'Congestion',
                width: '14 km at narrowest'
            }
        ],
        
        alternatives: {
            cape: {
                route: 'Cape of Good Hope',
                distance: '+7,000 km',
                time: '+14 days',
                cost: '+$1 million per voyage',
                use: 'When Suez blocked or Red Sea unsafe'
            },
            rail: {
                route: 'China-Europe Railway Express',
                time: '12-18 days',
                capacity: 'Limited vs sea',
                growth: 'Expanding but small share'
            }
        },
        
        disruption2024: {
            cause: 'Houthi attacks on Red Sea shipping',
            start: 'November 2023',
            impact: [
                '90% of container ships rerouting to Cape',
                'Suez traffic down 60%+',
                'Container rates up 300%+',
                'Delivery times extended 2 weeks'
            ],
            duration: 'Ongoing as of 2024'
        },
        
        majorShippingLines: ['Maersk', 'MSC', 'CMA CGM', 'COSCO', 'Hapag-Lloyd', 'Evergreen', 'ONE'],
        
        cargo: {
            eastbound: ['Machinery', 'Vehicles', 'Chemicals', 'Luxury goods'],
            westbound: ['Electronics', 'Textiles', 'Toys', 'Furniture', 'Consumer goods']
        }
    },
    {
        id: 'transpacific',
        name: 'Trans-Pacific Route',
        type: 'container',
        importance: 'Primary - Largest bilateral trade',
        
        statistics: {
            annualValue: '$1.2 trillion',
            annualVolume: '28 million TEU',
            transitTime: '14-18 days',
            distance: '11,000 km (Shanghai-LA)'
        },
        
        route: {
            description: 'Asia → Pacific → US West Coast',
            path: [
                { lat: 31.2, lng: 121.5, name: 'Shanghai' },
                { lat: 22.6, lng: 120.3, name: 'Kaohsiung' },
                { lat: 35, lng: 180, name: 'Pacific crossing' },
                { lat: 34, lng: -118, name: 'Los Angeles/Long Beach' }
            ],
            alternatives: [
                { name: 'Northern Route', via: 'Japan, Alaska approach', season: 'Summer' },
                { name: 'Southern Route', via: 'Hawaii area', season: 'Winter' }
            ]
        },
        
        usPorts: {
            laLongBeach: {
                combined: '40% of US imports',
                containers: '17M TEU',
                ranking: '#1 US gateway',
                2021Congestion: '100+ ships waiting'
            },
            other: ['Oakland', 'Seattle', 'Tacoma']
        },
        
        asiaPorts: {
            major: ['Shanghai', 'Ningbo', 'Shenzhen', 'Busan', 'Kaohsiung']
        },
        
        cargo: {
            usImports: ['Electronics', 'Furniture', 'Clothing', 'Toys', 'Footwear'],
            usExports: ['Soybeans', 'Meat', 'Recycling', 'Logs', 'Machinery']
        },
        
        usChina: {
            value: '$700+ billion bilateral trade',
            importance: 'World\'s largest bilateral relationship',
            tensions: 'Trade war tariffs (2018+)',
            decoupling: 'Some shifts to Vietnam, Mexico'
        },
        
        covid2021: {
            congestion: '100+ ships waiting off LA',
            delays: 'Months of delays',
            rates: 'Container rates $20,000+ (normally $2,000)',
            recovery: 'Normalized by 2023'
        }
    },
    {
        id: 'persian-gulf-asia',
        name: 'Persian Gulf to Asia Oil Route',
        type: 'oil',
        importance: 'Critical - Global energy security',
        
        statistics: {
            dailyBarrels: 18000000,
            annualValue: '$350 billion',
            percentAsianOil: 75,
            percentGlobalOil: 20
        },
        
        route: {
            description: 'Persian Gulf → Strait of Hormuz → Indian Ocean → Malacca → Asia',
            path: [
                { lat: 26.5, lng: 56.5, name: 'Strait of Hormuz', type: 'Most critical chokepoint' },
                { lat: 15, lng: 65, name: 'Arabian Sea' },
                { lat: 6, lng: 80, name: 'South of Sri Lanka' },
                { lat: 1.3, lng: 103.8, name: 'Malacca Strait' },
                { lat: 31.2, lng: 121.5, name: 'China' },
                { lat: 35.5, lng: 139.8, name: 'Japan' }
            ]
        },
        
        chokepoints: [
            { 
                name: 'Strait of Hormuz', 
                risk: 'Iran threats - world\'s most critical chokepoint',
                dailyBarrels: 21000000,
                percentWorld: 21,
                iranCapability: 'Missiles, mines, boats, drones',
                closureImpact: '100%+ oil price spike'
            },
            { 
                name: 'Strait of Malacca', 
                risk: 'Congestion, piracy (reduced)',
                dailyBarrels: 16000000,
                chinaVulnerability: '80% of China oil transits'
            }
        ],
        
        exporters: ['Saudi Arabia', 'UAE', 'Iraq', 'Kuwait', 'Qatar', 'Iran'],
        
        importers: {
            china: { percent: 45, dependence: '75% of imports via this route' },
            japan: { percent: 25, dependence: '90% of imports via this route' },
            southKorea: { percent: 15, dependence: '85% of imports via this route' },
            india: { percent: 10, dependence: '60% of imports via this route' }
        },
        
        tankerTypes: ['VLCC (Very Large)', 'ULCC (Ultra Large)', 'Suezmax'],
        
        alternatives: {
            pipelines: {
                eastWest: 'Limited capacity',
                btc: 'Baku-Tbilisi-Ceyhan (bypasses Hormuz region)'
            },
            strategic: 'No real alternative - critical vulnerability'
        }
    },
    // ... Additional trade routes continue...
];

// ═══════════════════════════════════════════════════════════
// MAJOR CANALS
// ═══════════════════════════════════════════════════════════

const majorCanals = [
    {
        id: 'suez-canal',
        name: 'Suez Canal',
        type: 'Sea-level canal',
        country: 'Egypt',
        
        geography: {
            location: 'Isthmus of Suez',
            connects: ['Mediterranean Sea', 'Red Sea'],
            length: '193.3 km (120 miles)',
            width: { minimum: 205, maximum: 313 },
            depth: '24 meters',
            locks: 0,
            seaLevel: 'Same level - no locks needed'
        },
        
        history: {
            ancient: 'Ancient canal existed 1850 BCE - 8th century CE',
            modernIdea: 'Napoleon surveyed (1798), abandoned',
            builder: 'Ferdinand de Lesseps (French)',
            construction: '1859-1869 (10 years)',
            workers: '1.5 million laborers, 120,000 died',
            opened: 'November 17, 1869',
            nationalized: 'July 26, 1956 by Nasser',
            suezCrisis: '1956 - UK/France/Israel invasion',
            closures: ['1956-57 (Suez Crisis)', '1967-75 (Six-Day War aftermath)'],
            expansion2015: 'New Suez Canal (parallel channel)'
        },
        
        statistics: {
            annualShips: 19000,
            dailyShips: '50-60 average',
            transitTime: '12-16 hours',
            revenue: '$9.4 billion (2023)',
            percentGlobalTrade: 12,
            saves: '7,000+ km vs Cape of Good Hope',
            timeSaved: '14+ days'
        },
        
        capacity: {
            maxShipSize: 'Suezmax class',
            maxDraft: '20.1 meters (laden)',
            maxWidth: '77.5 meters',
            maxDWT: '240,000 tonnes',
            convoys: 'Ships transit in convoys'
        },
        
        incidents: {
            everGiven2021: {
                date: 'March 23-29, 2021',
                ship: 'Ever Given (400m, 20,000 TEU)',
                cause: 'Strong winds, human error',
                blocked: '6 days, 7 hours',
                shipsAffected: '422 ships',
                dailyCost: '$10 billion',
                totalImpact: '$60+ billion trade delayed',
                resolution: 'Tugboats, dredging, high tide'
            }
        },
        
        2024Crisis: {
            cause: 'Houthi attacks on Red Sea shipping',
            impact: 'Suez traffic down 60%+',
            rerouting: '90% of container ships to Cape',
            revenueLoss: '$500+ million/month for Egypt'
        },
        
        alternatives: {
            cape: { distance: '+7,000 km', time: '+14 days' },
            sumed: 'SUMED pipeline (oil only)'
        },
        
        geopolitics: {
            control: 'Suez Canal Authority (Egypt)',
            importance: 'Critical global chokepoint',
            vulnerability: 'Single point of failure',
            military: 'Egypt deploys for protection'
        }
    },
    {
        id: 'panama-canal',
        name: 'Panama Canal',
        type: 'Lock canal',
        country: 'Panama',
        
        geography: {
            location: 'Isthmus of Panama',
            connects: ['Atlantic Ocean', 'Pacific Ocean'],
            length: '82 km (51 miles)',
            locks: '3 sets (6 locks old, 2 new)',
            elevation: 'Raises ships 26m to Gatun Lake',
            gatunLake: 'Artificial lake - canal runs through it'
        },
        
        history: {
            french: '1881-1889 - French attempt failed (22,000 died)',
            us: '1904-1914 - US completed',
            deaths: '5,600 died during US construction',
            opened: 'August 15, 1914',
            usControl: '1914-1999',
            treaty: 'Carter-Torrijos Treaty (1977)',
            panamaControl: 'December 31, 1999',
            expansion: '2016 - Third set of locks (
                       // Continuing Panama Canal...
        history: {
            french: '1881-1889 - French attempt failed (22,000 died)',
            us: '1904-1914 - US completed',
            deaths: '5,600 died during US construction',
            opened: 'August 15, 1914',
            usControl: '1914-1999',
            treaty: 'Carter-Torrijos Treaty (1977)',
            panamaControl: 'December 31, 1999',
            expansion: '2016 - Third set of locks opened'
        },
        
        statistics: {
            annualShips: 14000,
            dailyShips: '35-40 normal',
            transitTime: '8-10 hours',
            revenue: '$4.3 billion (2023)',
            percentGlobalTrade: 5,
            percentUSContainerTrade: 40,
            saves: '8,000+ nautical miles vs Cape Horn',
            timeSaved: '15+ days'
        },
        
        locks: {
            original: {
                name: 'Panamax locks',
                chambers: 6,
                length: '304.8 m',
                width: '33.5 m',
                depth: '12.8 m',
                capacity: 'Panamax ships (5,000 TEU max)'
            },
            expansion: {
                name: 'Neopanamax locks',
                opened: 'June 26, 2016',
                cost: '$5.25 billion',
                chambers: 2,
                length: '427 m',
                width: '55 m',
                depth: '18.3 m',
                capacity: 'Neopanamax ships (14,000 TEU)'
            }
        },
        
        waterIssue: {
            source: 'Gatun Lake (freshwater)',
            perTransit: '200 million liters freshwater per ship',
            problem: 'Rainfall dependent',
            
            drought2023: {
                cause: 'El Niño + climate change',
                rainfall: '30% below normal',
                lakeLevel: 'Lowest since 1950',
                
                impact: {
                    draftRestriction: 'Ships can\'t fully load',
                    dailyTransits: 'Cut from 36 to 18 (50% reduction)',
                    waitTime: '20+ days for transit',
                    auctionPrices: '$500,000+ for priority slot',
                    normalFee: '$400,000 average'
                },
                
                economicImpact: {
                    global: '$500 million+ in extra costs',
                    panama: 'Reduced revenue',
                    supplyChains: 'Delays worldwide'
                },
                
                solutions: {
                    shortTerm: 'Water conservation, reduced transits',
                    proposed: 'New reservoir, water recycling',
                    cost: '$2+ billion for water projects'
                }
            }
        },
        
        cargo: {
            containerShare: '30% of traffic',
            bulkShare: '25% - grain, coal, ore',
            tankerShare: '20% - oil, LNG, chemicals',
            vehicleShare: '15% - car carriers',
            other: '10%'
        },
        
        routes: {
            primary: 'US East Coast ↔ Asia',
            secondary: ['US East Coast ↔ US West Coast', 'South America ↔ Asia', 'Europe ↔ South America West Coast']
        },
        
        alternatives: {
            capeHorn: { distance: '+8,000 nautical miles', time: '+15 days' },
            usRail: 'Intermodal rail across US',
            nicaraguaCanal: 'Proposed but abandoned ($50B Chinese project)'
        },
        
        geopolitics: {
            control: 'Panama Canal Authority',
            neutrality: 'Guaranteed by treaty',
            usInterest: 'Critical for US trade and military',
            chinaInfluence: 'Chinese ports at both ends (Hutchison)',
            strategic: 'Vital Americas chokepoint'
        }
    },
    {
        id: 'kiel-canal',
        name: 'Kiel Canal',
        alternateNames: ['Nord-Ostsee-Kanal (German)', 'Kaiser Wilhelm Canal (original)'],
        type: 'Sea-level canal',
        country: 'Germany',
        
        geography: {
            location: 'Schleswig-Holstein, Germany',
            connects: ['North Sea', 'Baltic Sea'],
            length: '98 km (61 miles)',
            width: '162 m (average)',
            depth: '11 m',
            locks: '4 (2 at each end)',
            bridges: '10 cross the canal'
        },
        
        history: {
            construction: '1887-1895',
            builder: 'German Empire (Kaiser Wilhelm I)',
            opened: 'June 21, 1895',
            purpose: 'German Navy access without Denmark straits',
            wwi: 'Strategic importance for German fleet',
            widening: 'Multiple expansions'
        },
        
        statistics: {
            annualShips: 30000,
            dailyShips: '80+ average',
            transitTime: '7-9 hours',
            busiest: 'World\'s busiest artificial waterway',
            saves: '460 km vs going around Denmark',
            timeSaved: '1-2 days'
        },
        
        capacity: {
            maxLength: '235 m',
            maxWidth: '32.5 m',
            maxDraft: '9.5 m',
            maxHeight: '40 m (bridges)',
            class: 'Kielmax'
        },
        
        importance: {
            trade: 'North Sea-Baltic connectivity',
            energy: 'Baltic LNG traffic',
            russia: 'Was route for Russian exports',
            strategic: 'Avoids Danish Straits'
        },
        
        challenges: {
            capacity: 'Near maximum capacity',
            infrastructure: 'Aging locks need repair',
            investment: '€1.5 billion renovation planned',
            closures: 'Periodic closures for maintenance'
        }
    },
    {
        id: 'istanbul-canal',
        name: 'Canal Istanbul',
        alternateNames: ['Kanal İstanbul'],
        type: 'Proposed sea-level canal',
        country: 'Turkey',
        status: 'Proposed - not built',
        
        geography: {
            location: 'West of Bosphorus, Istanbul',
            connects: ['Black Sea', 'Sea of Marmara'],
            proposedLength: '45 km',
            proposedWidth: '275-400 m',
            proposedDepth: '20.75 m'
        },
        
        purpose: {
            official: 'Relieve Bosphorus congestion',
            real: 'Bypass Montreux Convention',
            montreux: 'Would allow Turkey to charge fees, control warship passage'
        },
        
        controversy: {
            environmental: 'Would destroy wetlands, affect water supply',
            geopolitical: 'Russia opposes (loses Montreux protection)',
            nato: 'Concerns about naval implications',
            domestic: 'Opposition party opposes',
            cost: '$15-25 billion estimated'
        },
        
        status2024: {
            construction: 'Not started',
            erdogan: 'Still supports project',
            timeline: 'Uncertain due to economic crisis',
            likelihood: 'Questionable given Turkey\'s economy'
        }
    }
];

// ═══════════════════════════════════════════════════════════
// ENHANCED GLOBAL CHOKEPOINTS
// ═══════════════════════════════════════════════════════════

const globalChokepoints = [
    {
        id: 'strait-of-hormuz',
        name: 'Strait of Hormuz',
        ranking: '#1 - World\'s most important chokepoint',
        
        geography: {
            location: { lat: 26.5, lng: 56.5 },
            width: { total: 54, narrowest: 33 },
            depth: { minimum: 50, navigable: 60 },
            length: '167 km',
            shippingLanes: {
                inbound: '3 km wide (to Gulf)',
                outbound: '3 km wide (from Gulf)',
                buffer: '3 km median'
            }
        },
        
        controllingCountries: {
            north: { country: 'Iran', coastline: 'Entire northern shore' },
            south: { country: 'Oman', territory: 'Musandam exclave' },
            islands: {
                iran: ['Qeshm', 'Hormuz', 'Larak', 'Greater Tunb', 'Lesser Tunb', 'Abu Musa'],
                disputed: ['Greater Tunb', 'Lesser Tunb', 'Abu Musa (with UAE)']
            }
        },
        
        traffic: {
            dailyOilBarrels: 21000000,
            percentWorldOil: 21,
            percentWorldLNG: 35,
            annualShips: 17000,
            dailyTankers: '20-25',
            valueDaily: '$2+ billion'
        },
        
        importance: {
            oilExporters: ['Saudi Arabia', 'UAE', 'Iraq', 'Kuwait', 'Qatar', 'Iran'],
            lngExporters: ['Qatar (25% of global LNG)'],
            
            dependentCountries: {
                china: { oilPercent: 45, importDependence: '75% of oil imports transit' },
                japan: { oilPercent: 25, importDependence: '90% of oil imports transit' },
                southKorea: { oilPercent: 15, importDependence: '85% of oil imports transit' },
                india: { oilPercent: 10, importDependence: '60% of oil imports transit' },
                europe: { oilPercent: 10, importDependence: '20% of oil imports transit' }
            }
        },
        
        iranCapabilities: {
            missiles: {
                types: ['Anti-ship cruise missiles', 'Ballistic missiles', 'Land-attack cruise missiles'],
                systems: ['Noor', 'Qader', 'Khalij Fars (anti-ship ballistic)'],
                range: 'Cover entire strait and Gulf',
                launchers: 'Mobile, hidden in mountains'
            },
            mines: {
                quantity: '5,000+ available',
                types: ['Contact mines', 'Influence mines', 'Smart mines'],
                capability: 'Can close strait for weeks',
                1980s: 'Mined strait during Tanker War'
            },
            fastBoats: {
                irgcNavy: 'Islamic Revolutionary Guard Corps Navy',
                quantity: '1,500+ fast attack craft',
                tactics: 'Swarming attacks',
                weapons: 'Rockets, machine guns, missiles'
            },
            submarines: {
                types: ['Kilo-class (Russian)', 'Midget submarines'],
                quantity: '3 Kilo-class, 20+ midget',
                capability: 'Can lay mines, torpedo attacks'
            },
            drones: {
                types: ['Kamikaze drones', 'Surveillance drones'],
                recent: 'Used extensively against Saudi Arabia, UAE',
                capability: 'Can swarm ships'
            },
            cyberCapability: 'Can target ship systems'
        },
        
        closureScenario: {
            triggers: [
                'War with US/Israel',
                'Extreme sanctions pressure',
                'Attack on Iranian nuclear facilities',
                'Miscalculation/escalation'
            ],
            
            methods: {
                mines: 'Would take weeks to clear',
                missiles: 'Attack ships, tankers',
                boats: 'Swarm attacks on tankers',
                drones: 'Coordinate attacks',
                sinking: 'Sink ships in channel'
            },
            
            impact: {
                oilPrice: '100-200% spike immediately',
                global: 'Certain global recession',
                duration: 'Days to weeks minimum',
                alternatives: 'Pipelines handle only fraction'
            },
            
            usResponse: {
                military: 'Massive operation to reopen',
                forces: 'Carrier strike groups, minesweepers, Marines',
                timeline: 'Weeks to clear mines safely',
                escalation: 'Could lead to wider war'
            }
        },
        
        incidents: [
            { year: 1987, event: 'Iran mines strait during Tanker War' },
            { year: 1988, event: 'US destroys Iranian platforms (Operation Praying Mantis)' },
            { year: 2019, event: '6 tankers attacked (limpet mines)' },
            { year: 2019, event: 'Iran shoots down US drone' },
            { year: 2019, event: 'Iran seizes UK tanker Stena Impero' },
            { year: 2021, event: 'Israeli-linked tanker attacked' },
            { year: 2023, event: 'Iran seizes multiple tankers' }
        ],
        
        alternatives: {
            pipelines: {
                eastWest: 'Saudi Petroline to Yanbu - 5 million bpd capacity',
                uae: 'ADCOP pipeline to Fujairah - 1.5 million bpd',
                iraq: 'Kirkuk-Ceyhan (not Hormuz related)',
                totalCapacity: 'Less than 1/3 of strait traffic'
            },
            storage: 'Strategic reserves in importing countries'
        },
        
        currentTension: {
            level: 'High',
            factors: ['Iran nuclear program', 'US sanctions', 'Regional conflicts'],
            incidents: 'Regular close encounters'
        }
    },
    {
        id: 'strait-of-malacca',
        name: 'Strait of Malacca',
        ranking: '#2 - Busiest shipping lane',
        
        geography: {
            location: { lat: 2.5, lng: 101 },
            length: '800 km',
            width: { widest: 320, narrowest: 2.8 },
            depth: { minimum: 25, onemilePoint: 'Phillips Channel 25m' }
        },
        
        controllingCountries: {
            west: 'Indonesia (Sumatra)',
            east: 'Malaysia (Peninsula)',
            south: 'Singapore'
        },
        
        traffic: {
            dailyOilBarrels: 16000000,
            percentGlobalTrade: 25,
            annualShips: 94000,
            dailyShips: 250,
            annualContainers: '25%+ of global container trade'
        },
        
        importance: {
            shortest: 'Shortest route Indian Ocean to Pacific',
            chinaOil: '80% of China\'s oil imports',
            japanKorea: '60-70% of oil imports',
            globalTrade: '25% passes through'
        },
        
        risks: {
            congestion: {
                level: 'Very High',
                growth: 'Traffic increasing',
                accidents: 'Regular collisions',
                delays: 'Routine'
            },
            piracy: {
                historical: 'Was #1 piracy hotspot',
                current: 'Reduced due to patrols',
                patrols: ['Malaysia', 'Indonesia', 'Singapore', 'Thailand'],
                malaccaStraitsPatrol: 'Coordinated patrols since 2004'
            },
            shallowDraft: {
                issue: 'Supertankers can\'t fully load',
                limit: '25m maximum draft',
                solution: 'Load in deep water, top off after strait'
            },
            terrorism: {
                concern: 'Major terrorist target',
                scenario: 'Attack could close strait',
                security: 'Heavily monitored'
            }
        },
        
        malaccaDilemma: {
            china: {
                concern: 'US could blockade in conflict',
                dependence: '80% of oil through strait',
                response: [
                    'Building pipelines (Myanmar)',
                    'Gwadar port (Pakistan) - bypass Malacca',
                    'Building larger navy',
                    'String of Pearls strategy'
                ]
            },
            strategic: 'Fundamental Chinese vulnerability'
        },
        
        alternatives: {
            lombokStrait: { location: 'Indonesia', addition: '+2 days', depth: 'Deep' },
            sundaStrait: { location: 'Indonesia', addition: '+1 day', depth: 'Adequate' },
            pipelines: {
                myanmar: 'China-Myanmar oil/gas pipelines',
                thailand: 'Proposed Kra Canal (never built)',
                malaysia: 'Trans-Peninsula Pipeline (small)'
            }
        },
        
        singapore: {
            role: 'Dominant transshipment hub',
            port: '#2 globally, #1 transshipment',
            services: 'Bunkering, ship repair, provisioning',
            strategic: 'Tiny but critical'
        }
    },
    {
        id: 'bab-el-mandeb',
        name: 'Bab el-Mandeb',
        alternateSpelling: 'Bab al-Mandab',
        meaning: 'Gate of Tears (Arabic)',
        ranking: '#3 - Critical but vulnerable',
        
        geography: {
            location: { lat: 12.5, lng: 43.5 },
            width: 26,
            depth: 310,
            channels: 2,
            perimIsland: 'Yemen\'s Perim island in middle'
        },
        
        controllingCountries: {
            east: 'Yemen',
            west: 'Djibouti',
            nearby: 'Eritrea'
        },
        
        traffic: {
            dailyOilBarrels: 6200000,
            percentGlobalTrade: 12,
            annualShips: 25000,
            suezAccess: 'Gateway to Suez Canal'
        },
        
        importance: {
            suezLink: 'Must pass to reach Suez from Indian Ocean',
            europeTrade: 'Europe-Asia route',
            oilFlow: 'Gulf oil to Europe'
        },
        
        houthiCrisis2024: {
            overview: 'Most significant maritime crisis since WWII piracy',
            
            background: {
                start: 'November 19, 2023',
                trigger: 'Israel-Gaza conflict',
                actor: 'Houthi rebels (Yemen)',
                claimed: 'Support for Gaza, target Israel-linked ships',
                actual: 'Many random ships attacked'
            },
            
            attacks: {
                totalByMay2024: '50+ ships attacked or threatened',
                weapons: ['Anti-ship ballistic missiles', 'Cruise missiles', 'Drones', 'Speedboats'],
                killed: '4 crew (MV True Confidence, March 2024)',
                sunk: ['MV Rubymar (February 2024)', 'MV True Confidence (March 2024)'],
                damaged: 'Numerous ships hit'
            },
            
            iranRole: {
                support: 'Weapons, intelligence, targeting data',
                missiles: 'Iranian-made missiles',
                deniability: 'Iran denies direct control',
                irgc: 'IRGC advisors with Houthis'
            },
            
            shippingImpact: {
                rerouting: '90% of container ships rerouting to Cape',
                suezDecline: '60%+ traffic reduction',
                addedDistance: '7,000+ km',
                addedDays: '10-14 days',
                addedCost: '$1 million+ per voyage',
                rateIncrease: '300%+ container shipping rates',
                insurance: 'War risk premiums up 1000%+',
                companies: ['Maersk', 'MSC', 'Hapag-Lloyd', 'CMA CGM all avoiding']
            },
            
            economicImpact: {
                egypt: 'Losing $500+ million/month Suez revenue',
                global: 'Contributing to inflation',
                europe: 'Delayed imports, higher prices',
                timeline: 'Months of disruption'
            },
            
            militaryResponse: {
                prosperityGuardian: {
                    formed: 'December 2023',
                    leader: 'United States',
                    participants: ['USA', 'UK', 'France', 'Italy', 'others'],
                    purpose: 'Protect shipping'
                },
                strikes: {
                    start: 'January 2024',
                    countries: ['USA', 'UK'],
                    targets: 'Houthi missile/drone sites in Yemen',
                    frequency: 'Regular strikes',
                    effectiveness: 'Limited - attacks continue'
                },
                naval: {
                    deployment: 'Multiple warships',
                    carriers: 'USS Eisenhower, USS Roosevelt',
                    intercepts: 'Regular missile/drone shootdowns',
                    cost: 'Very expensive (missiles cost more than drones)'
                }
            },
            
            resolution: {
                status: 'Ongoing as of 2024',
                prospects: 'Linked to Gaza conflict',
                escalation: 'Risk of wider regional war',
                longTerm: 'May permanently alter shipping patterns'
            }
        },
        
        militaryBases: {
            djibouti: {
                usa: { name: 'Camp Lemonnier', personnel: 4000, purpose: 'Counterterrorism, anti-piracy' },
                china: { name: 'PLA Support Base', personnel: 2000, opened: 2017, significance: 'First overseas Chinese base' },
                france: { personnel: 1500, legacy: 'Colonial presence' },
                japan: { personnel: 200, significance: 'Only overseas base since WWII' },
                italy: { personnel: 300 },
                spain: { rotational: true }
            },
            yemen: 'Houthi-controlled north coast',
            eritrea: 'Authoritarian, some foreign presence'
        },
        
        piracy: {
            historical: 'Somali piracy peak 2008-2012',
            current: 'Reduced due to patrols',
            concern: 'Could resurge if patrols reduced'
        }
    },
    {
        id: 'taiwan-strait',
        name: 'Taiwan Strait',
        ranking: 'Most dangerous potential flashpoint',
        
        geography: {
            location: { lat: 24, lng: 119 },
            width: { widest: 180, narrowest: 130 },
            length: '400 km',
            depth: '60m average (shallow)'
        },
        
        controllingCountries: {
            west: 'China (claims all)',
            east: 'Taiwan'
        },
        
        traffic: {
            annualShips: 270000,
            percentGlobalContainer: '50% pass nearby',
            value: 'Trillions in trade annually'
        },
        
        semiconductorImportance: {
            tsmc: 'Taiwan Semiconductor Manufacturing Company',
            globalShare: '92% of advanced chips (<7nm)',
            customers: ['Apple', 'Nvidia', 'AMD', 'Qualcomm', 'All major tech'],
            revenue: '$70+ billion annually',
            
            singlePointOfFailure: {
                issue: 'World\'s most critical manufacturing concentration',
                scenario: 'War would devastate global tech',
                alternatives: 'US, Japan, Europe building fabs (years away)',
                chinaDependence: 'China imports $300B chips/year'
            }
        },
        
        chinaThreat: {
            claim: 'Taiwan is part of China',
            policy: 'Reunification - by force if necessary',
            timeline: 'Xi wants it in his lifetime (some say by 2027)',
            
            military: {
                missiles: '1,500+ aimed at Taiwan',
                aircraft: '1,500+ combat aircraft',
                navy: '350+ ships (world\'s largest)',
                amphibious: 'Building capacity for invasion',
                exercises: 'Regular, increasing'
            },
            
            2022Exercises: {
                trigger: 'Nancy Pelosi visit (August 2022)',
                response: 'Largest exercises ever',
                missiles: 'Fired over Taiwan',
                blockade: 'Practiced surrounding island',
                significance: 'Demonstrated capability'
            },
            
            scenarios: {
                invasion: {
                    description: 'Amphibious assault',
                    difficulty: 'Extremely challenging',
                    beaches: 'Limited landing beaches',
                    casualties: 'Massive expected',
                    timeline: 'Months of fighting'
                },
                blockade: {
                    description: 'Surround and starve',
                    method: 'Navy/missiles prevent shipping',
                    impact: 'Taiwan depends on imports',
                    duration: 'Weeks to months',
                    usResponse: 'Would have to break blockade'
                },
                decapitation: {
                    description: 'Quick strike on leadership',
                    missiles: 'Precision strikes',
                    special: 'Special forces',
                    risk: 'Failure = full war'
                }
            }
        },
        
        usRole: {
            policy: {
                name: 'Strategic Ambiguity',
                oneChina: 'Acknowledges Chinese position, doesn\'t endorse',
                tRA: 'Taiwan Relations Act (1979) - help Taiwan defend'
            },
            military: {
                troops: '~30,000 in Japan (nearby)',
                7thFleet: 'Aircraft carriers, submarines',
                bases: 'Japan, Guam',
                transits: 'Monthly freedom of navigation'
            },
            armsSales: {
                value: 'Billions annually',
                equipment: ['F-16s', 'Tanks', 'Missiles', 'Submarines on order'],
                strategy: 'Porcupine defense'
            },
            bidenStatements: {
                times: '4 times said US would defend Taiwan',
                walkback: 'White House each time clarified "no change in policy"',
                signal: 'Intentional or gaffe?'
            }
        },
        
        warConsequences: {
            global: {
                chips: 'World loses 90% of advanced semiconductors',
                cost: 'Estimated $10+ trillion global GDP',
                trade: 'Massive supply chain disruption',
                inflation: 'Severe price increases'
            },
            military: {
                casualties: 'Tens of thousands (minimum)',
                nuclear: 'Escalation risk',
                duration: 'Months to years'
            }
        },
        
        currentStatus: {
            tensionLevel: 'High and rising',
            incursions: 'Daily Chinese aircraft near Taiwan',
            exercises: 'Increasing frequency',
            probability: 'Debated - 10-30% by 2030'
        }
    },
    {
        id: 'turkish-straits',
        name: 'Turkish Straits',
        components: ['Bosphorus', 'Dardanelles', 'Sea of Marmara'],
        ranking: 'Critical - Only Black Sea exit',
        
        bosphorus: {
            location: { lat: 41, lng: 29 },
            width: { min: 700, avg: 1200 },
            length: '31 km',
            depth: { min: 36, avg: 65 },
            
            istanbul: {
                population: '15+ million',
                straddles: 'Only city on two continents',
                bridges: ['First (1973)', 'Second (1988)', 'Third (2016)'],
                tunnels: ['Marmaray rail (2013)', 'Eurasia road (2016)']
            },
            
            traffic: {
                annualShips: 45000,
                dailyShips: 120,
                dailyOilBarrels: 3000000,
                ferries: '2,000 ferry crossings daily'
            },
            
            dangers: {
                currents: 'Two-layer current system',
                turns: '12 sharp turns',
                width: 'Only 700m at narrowest',
                traffic: 'Extremely congested'
            }
        },
        
        dardanelles: {
            location: { lat: 40.2, lng: 26.4 },
            width: { min: 1.2, max: 6 },
            length: '61 km',
            depth: { avg: 55 },
            
            history: {
                troy: 'Ancient Troy at entrance',
                gallipoli: 'WWI Gallipoli Campaign (1915-16)',
                anzac: 'ANZAC commemoration',
                casualties: '500,000 total'
            }
        },
        
        montreuxConvention: {
            signed: 'July 20, 1936',
            purpose: 'Governs Turkish Straits passage',
            
            keyRules: {
                merchant: 'Free passage for all merchant ships',
                warships: {
                    blackSeaStates: 'Unlimited for coastal states',
                    others: '21 days maximum stay',
                    tonnage: '45,000 tons total non-Black Sea navies',
                    carriers: 'Aircraft carriers generally prohibited',
                    submarines: 'Must transit surfaced during day'
                },
                wartime: 'Turkey can close to belligerents'
            },
            
            ukraineWar: {
                action: 'Turkey closed to warships (February 28, 2022)',
                impact: 'Russia can\'t reinforce Black Sea Fleet from Med',
                exception: 'Ships returning to home port allowed'
            }
        },
        
        canalIstanbul: {
            status: 'Proposed alternative canal',
            purpose: 'Bypass Bosphorus, avoid Montreux',
            route: 'West of Bosphorus',
            length: '45 km',
            cost: '$15-25 billion',
            opposition: 'Environmental, geopolitical concerns',
            status2024: 'Not started, uncertain future'
        }
    },
    {
        id: 'dover-strait',
        name: 'Dover Strait',
        alternateNames: ['Strait of Dover', 'Pas de Calais'],
        ranking: 'Busiest shipping lane in world',
        
        geography: {
            location: { lat: 51, lng: 1.5 },
            width: 33,
            depth: { min: 24, avg: 55 },
            length: '51 km'
        },
        
        controllingCountries: {
            north: 'United Kingdom',
            south: 'France'
        },
        
        traffic: {
            annualShips: 180000,
            dailyShips: 500,
            cargoShips: 400,
            ferries: 100,
            percentEuropeTrade: 'Significant'
        },
        
        trafficSeparation: {
            scheme: 'IMO Traffic Separation Scheme',
            mandatory: 'All ships must follow',
            lanes: 'Separate inbound and outbound',
            monitoring: '24/7 vessel traffic service'
        },
        
        channelTunnel: {
            name: 'Channel Tunnel (Chunnel)',
            length: '50.45 km (31.4 miles)',
            undersea: '37.9 km underwater portion',
            opened: 'May 6, 1994',
            cost: '£9 billion',
            trains: 'Eurostar (passengers), Eurotunnel (vehicles/freight)',
            daily: '400 trains'
        },
        
        migrantCrisis: {
            issue: 'Small boat crossings UK to France',
            2023: '30,000+ attempted',
            deaths: '30+ per year',
            policy: 'Controversial UK-France relations',
            rwandaScheme: 'UK deportation plan (legal battles)'
        },
        
        brexit: {
            impact: 'New customs checks',
            delays: 'Periodic lorry queues',
            ferries: 'Still major route'
        }
    },
    {
        id: 'strait-of-gibraltar',
        name: 'Strait of Gibraltar',
        ranking: 'Only Mediterranean-Atlantic connection',
        
        geography: {
            location: { lat: 36, lng: -5.5 },
            width: { min: 14, max: 24 },
            depth: { min: 300, max: 900 },
            length: '58 km'
        },
        
        controllingCountries: {
            north: ['Spain', 'Gibraltar (UK)'],
            south: 'Morocco'
        },
        
        traffic: {
            annualShips: 100000,
            dailyShips: 300
        },
        
        importance: {
            onlyExit: 'Only Mediterranean access to Atlantic',
            history: 'Strategic since ancient times',
            pillars: 'Pillars of Hercules (ancient name)'
        },
        
        gibraltar: {
            status: 'British Overseas Territory since 1713',
            population: '34,000',
            spanishClaim: 'Spain claims sovereignty',
            brexit: 'Complex status after Brexit',
            military: 'Royal Navy, RAF presence'
        },
        
        migration: {
            route: 'Africa to Europe',
            crossings: 'Dangerous boat crossings',
            morocco: 'Major departure point'
        }
    }
];

// ═══════════════════════════════════════════════════════════
// MARITIME DISPUTES
// ═══════════════════════════════════════════════════════════

const maritimeDisputes = [
    {
        id: 'south-china-sea',
        name: 'South China Sea Disputes',
        severity: 'Critical',
        
        overview: 'Multiple overlapping claims, Chinese militarization',
        
        claimants: ['China', 'Vietnam', 'Philippines', 'Malaysia', 'Brunei', 'Taiwan'],
        
        features: {
            nineDashLine: 'China claims 90% of sea',
            spratlys: '100+ features claimed by 6 parties',
            paracels: 'Controlled by China since 1974',
            scarborough: 'China controls since 2012'
        },
        
        tribunal2016: {
            ruling: 'Rejected China\'s claims',
            chinaResponse: 'Rejected ruling',
            enforcement: 'None'
        },
        
        militarization: 'China built 3,200+ acres of artificial islands',
        
        warRisk: 'Moderate-High'
    },
    {
        id: 'east-china-sea',
        name: 'East China Sea Disputes',
        severity: 'High',
        
        overview: 'Senkaku/Diaoyu islands, EEZ disputes',
        
        claimants: ['Japan', 'China', 'Taiwan'],
        
        features: {
            senkaku: 'Japan administers, China claims',
            adiz: 'Overlapping air defense zones',
            eez: 'Conflicting maritime boundaries'
        },
        
        incidents: 'Monthly Chinese incursions',
        
        usInvolvement: 'Treaty covers Senkaku',
        
        warRisk: 'Moderate (could escalate quickly)'
    },
    {
        id: 'taiwan-strait',
        name: 'Taiwan Strait',
        severity: 'Critical - Most dangerous flashpoint',
        
        overview: 'China claims Taiwan, threatens force',
        
        parties: ['China', 'Taiwan', 'USA'],
        
        stakes: {
            semiconductors: '92% of advanced chips',
            democracy: '24 million people',
            precedent: 'US alliance credibility'
        },
        
        warRisk: 'Moderate and rising'
    },
    {
        id: 'arctic',
        name: 'Arctic Disputes',
        severity: 'Moderate - Increasing',
        
        overview: 'Multiple overlapping claims as ice melts',
        
        claimants: ['Russia', 'Canada', 'USA', 'Denmark/Greenland', 'Norway'],
        
        issues: {
            continentalShelf: 'Extended shelf claims',
            northwestPassage: 'Canada vs international waters',
            northernSeaRoute: 'Russia claims control',
            resources: 'Oil, gas, minerals becoming accessible'
        },
        
        cooperation: 'Arctic Council (suspended 2022 re: Russia)'
    },
    {
        id: 'aegean-sea',
        name: 'Aegean Sea (Greece-Turkey)',
        severity: 'High',
        
        overview: 'EEZ, continental shelf, airspace disputes',
        
        parties: ['Greece', 'Turkey'],
        
        issues: {
            islands: 'Greek islands extend EEZ Turkey disputes',
            eez: 'Turkey claims islands shouldn\'t generate full EEZ',
            airspace: 'Daily Turkish violations of Greek airspace',
            eastMedGas: 'Gas field disputes'
        },
        
        natoAllies: 'Both NATO members - complicates'
    },
    {
        id: 'east-med-gas',
        name: 'Eastern Mediterranean Gas',
        severity: 'High',
        
        overview: 'Major gas discoveries sparked disputes',
        
        parties: ['Turkey', 'Greece', 'Cyprus', 'Israel', 'Lebanon', 'Egypt'],
        
        fields: ['Leviathan (Israel)', 'Zohr (Egypt)', 'Aphrodite (Cyprus)'],
        
        turkeyExcluded: 'Not part of EastMed Forum - major grievance',
        
        cyprusDrilling: 'Turkey sent warships to block',
        
        pipeline: 'EastMed pipeline proposed (Turkey opposes)'
    },
    {
        id: 'russia-japan-kurils',
        name: 'Kuril Islands (Russia-Japan)',
        severity: 'Moderate',
        
        overview: 'No peace treaty since 1945',
        
        parties: ['Russia', 'Japan'],
        
        islands: ['Iturup', 'Kunashir', 'Shikotan', 'Habomai'],
        
        control: 'Russia (since 1945)',
        claim: 'Japan claims all four',
        
        peaceTreaty: 'Never signed - technically still at war',
        
        status2024: 'Suspended talks after Ukraine invasion'
    },
    {
        id: 'korea-japan-dokdo',
        name: 'Dokdo/Takeshima',
        severity: 'Moderate',
        
        overview: 'Emotional dispute between Korea and Japan',
        
        parties: ['South Korea', 'Japan'],
        
        control: 'South Korea (since 1954)',
        
        japanClaim: 'Incorporated 1905',
        koreaClaim: 'Historic territory, stolen during colonialism',
        
        emotion: 'Highly charged nationalism both sides'
    }
];

// ═══════════════════════════════════════════════════════════
// PIRACY HOTSPOTS
// ═══════════════════════════════════════════════════════════

const piracyHotspots = [
    {
        id: 'gulf-of-guinea',
        name: 'Gulf of Guinea',
        region: 'West Africa',
        status: 'World\'s current piracy hotspot',
        
        statistics: {
            2023Incidents: '40+ attacks',
            percentGlobal: '40%+ of global incidents',
            trend: 'Declining but still dangerous'
        },
        
        characteristics: {
            type: 'Armed robbery, kidnapping for ransom',
            violence: 'Extremely violent',
            weapons: 'AK-47s, machetes',
            kidnapping: '130+ crew kidnapped 2020'
        },
        
        countries: ['Nigeria', 'Ghana', 'Togo', 'Benin', 'Cameroon'],
        
        response: {
            regional: 'Gulf of Guinea Maritime Collaboration Forum',
            international: 'EU, US naval presence',
            nigeria: 'Deep Blue Project'
        }
    },
    {
        id: 'malacca-strait-piracy',
        name: 'Malacca Strait',
        region: 'Southeast Asia',
        status: 'Reduced - was worst globally',
        
        statistics: {
            peak: '2004 - 38 attacks',
            current: '~10-20 incidents/year',
            reduction: '90%+ from peak'
        },
        
        response: {
            patrols: 'Malacca Straits Patrol (Malaysia, Indonesia, Singapore, Thailand)',
            success: 'Dramatic reduction'
        }
    },
    {
        id: 'somalia-piracy',
        name: 'Somalia/Gulf of Aden',
        region: 'Horn of Africa',
        status: 'Greatly reduced - but risk of resurgence',
        
        history: {
            peak: '2011 - 237 attacks',
            ransom: '$400 million paid 2005-2012',
            range: 'Attacks 1,000+ miles offshore'
        },
        
        causes: {
            fishingCollapse: 'Foreign vessels depleted fish',
            government: 'State collapse',
            opportunity: 'Massive shipping traffic'
        },
        
        response: {
            naval: ['EU NAVFOR (Operation Atalanta)', 'Combined Maritime Forces', 'Chinese Navy'],
            industry: 'Armed guards, citadels',
            success: 'Near-zero attacks for years'
        },
        
        2024Concern: {
            resurgence: 'Some increase in 2024',
            cause: 'Reduced patrols (diverted to Red Sea)',
            monitoring: 'Situation being watched'
        }
    },
    {
        id: 'singapore-strait-piracy',
        name: 'Singapore Strait',
        region: 'Southeast Asia',
        status: 'Persistent low-level crime',
        
        type: 'Opportunistic theft - board anchored ships',
        violence: 'Usually low',
        trend: 'Steady'
    },
    {
        id: 'caribbean-piracy',
        name: 'Caribbean',
        region: 'Central America/Caribbean',
        status: 'Moderate - yacht/sailing vessel focus',
        
        hotspots: ['Venezuela coast', 'Trinidad', 'St. Vincent'],
        type: 'Armed robbery of yachts',
        violence: 'Sometimes violent'
    }
];

// ═══════════════════════════════════════════════════════════
// CLIMATE CHANGE IMPACTS ON OCEANS
// ═══════════════════════════════════════════════════════════

const climateChangeImpacts = {
    overview: 'Oceans absorbing 90% of excess heat, 30% of CO2',
    
    warming: {
        rate: '0.13°C per decade (surface)',
        total: '1.1°C since pre-industrial',
        heatWaves: 'Marine heatwaves doubled since 1980s',
        
        impacts: {
            speciesShift: 'Marine species moving poleward 59 km/decade',
            coralBleaching: 'Mass bleaching events increasing',
            hurricanes: 'Intensifying more rapidly',
            fisheries: 'Distribution and productivity changing'
        }
    },
    
    seaLevelRise: {
        currentRate: '3.7 mm/year (accelerating)',
        since1900: '20 cm rise',
        by2100: {
            low: '0.3-0.6 meters',
            high: '1.0-1.8 meters',
            extreme: '2+ meters (ice sheet collapse)'
        },
        
        impacts: {
            coastal: '900 million people in low-elevation zones',
            islands: 'Some nations may disappear (Maldives, Tuvalu, Kiribati)',
            cities: ['Miami', 'Jakarta', 'Shanghai', 'Mumbai at risk'],
            infrastructure: 'Ports, coastal facilities threatened'
        }
    },
    
    acidification: {
        change: '30% increase in acidity since pre-industrial',
        rate: 'Fastest in 300 million years',
        
        impacts: {
            shells: 'Harder for shellfish to build shells',
            coral: 'Combined with warming - devastating',
            plankton: 'Base of food chain affected'
        }
    },
    
    deoxygenation: {
        oxygenLoss: '2% decline since 1950',
        deadZones: '700+ coastal dead zones (up from 45 in 1960s)',
        
        impacts: {
            habitat: 'Fish squeezed into smaller areas',
            fisheries: 'Major impacts on catch'
        }
    },
    
    iceDecline: {
        arctic: {
            summerIce: '13% decline per decade',
            iceFree: 'Summer ice-free by 2040-2050',
            shipping: 'New routes opening'
        },
        greenland: {
            loss: '270 billion tonnes/year',
            sealLevel: 'Major contributor'
        },
        antarctica: {
            westAntarctic: 'Potential collapse (meters of sea rise)',
            loss: '150 billion tonnes/year'
        }
    },
    
    extremeWeather: {
        hurricanes: {
            intensity: 'Stronger peak winds',
            rainfall: '10-15% more precipitation',
            rapidIntensification: 'More common',
            slowdown: 'Storms moving slower'
        },
        marineHeatwaves: 'Doubled in frequency, longer duration',
        flooding: 'More coastal flooding from surges + sea level'
    },
    
    ecosystemImpacts: {
        coralReefs: {
            loss1_5C: '70-90% loss',
            loss2C: '99%+ loss',
            greatBarrier: '50%+ already lost'
        },
        fisheries: {
            shift: 'Moving poleward',
            productivity: 'Declining in tropics',
            conflict: 'New disputes as fish move'
        },
        mangroves: 'Sea level rise threat',
        kelp: 'Major declines in warming areas'
    },
    
    arcticOpening: {
        northernSeaRoute: 'Becoming viable',
        resources: 'Oil, gas, minerals accessible',
        geopolitics: 'New competition zone',
        indigenous: 'Way of life threatened'
    }
};

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

function getChokePointById(id) {
    return globalChokepoints.find(cp => cp.id === id);
}

function getTradeRouteById(id) {
    return globalTradeRoutes.find(route => route.id === id);
}

function getCanalById(id) {
    return majorCanals.find(canal => canal.id === id);
}

function getDisputeById(id) {
    return maritimeDisputes.find(dispute => dispute.id === id);
}

function getPiracyHotspotById(id) {
    return piracyHotspots.find(hotspot => hotspot.id === id);
}

function getSeaWithConflict() {
    return seasData.filter(sea => 
        sea.geopolitics?.tensionLevel === 'High' ||
        sea.geopolitics?.tensionLevel === 'Very High' ||
        sea.geopolitics?.tensionLevel === 'Active war zone'
    );
}

function getSeaByDispute() {
    return seasData.filter(sea => 
        sea.geopolitics?.issues?.length > 0
    );
}

// ═══════════════════════════════════════════════════════════
// STATISTICS SUMMARY
// ═══════════════════════════════════════════════════════════

const oceanStatistics = {
    totalSeas: seasData.length,
    totalChokepoints: globalChokepoints.length,
    totalTradeRoutes: globalTradeRoutes.length,
    totalCanals: majorCanals.length,
    totalDisputes: maritimeDisputes.length,
    totalPiracyHotspots: piracyHotspots.length,
    
    globalTradeByOcean: {
        pacific: '60% of global maritime trade',
        atlantic: '25% of global maritime trade',
        indian: '15% of global maritime trade'
    },
    
    criticalChokepoints: globalChokepoints.filter(cp => 
        cp.ranking?.includes('Critical') || cp.ranking?.includes('#1') || cp.ranking?.includes('#2')
    ).length,
    
    conflictZones: seasData.filter(sea => 
        sea.geopolitics?.conflictLevel === 'Active war zone' ||
        sea.geopolitics?.conflictLevel === 'High tension'
    ).length
};

// ═══════════════════════════════════════════════════════════
// EXPORTS
// ═══════════════════════════════════════════════════════════

// Export for Node.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        seasData,
        globalTradeRoutes,
        globalChokepoints,
        majorCanals,
        maritimeDisputes,
        piracyHotspots,
        climateChangeImpacts,
        oceanStatistics,
        // Helper functions
        getSeaById,
        getSeaByOcean,
        getStrategicSeas,
        getSeaByCountry,
        getChokePointById,
        getTradeRouteById,
        getCanalById,
        getDisputeById,
        getPiracyHotspotById,
        getSeaWithConflict,
        getSeaByDispute
    };
}

// Export for Browser
if (typeof window !== 'undefined') {
    window.SeasExplorerData = {
        seasData,
        globalTradeRoutes,
        globalChokepoints,
        majorCanals,
        maritimeDisputes,
        piracyHotspots,
        climateChangeImpacts,
        oceanStatistics,
        // Helper functions
        getSeaById,
        getSeaByOcean,
        getStrategicSeas,
        getSeaByCountry,
        getChokePointById,
        getTradeRouteById,
        getCanalById,
        getDisputeById,
        getPiracyHotspotById,
        getSeaWithConflict,
        getSeaByDispute
    };
}

// Log for debugging
console.log('🌊 SEAS EXPLORER - ENHANCED DATA LOADED!');
console.log('═══════════════════════════════════════════════════════════');
console.log(`📊 Total Seas: ${seasData.length}`);
console.log(`🚢 Trade Routes: ${globalTradeRoutes.length}`);
console.log(`⚠️ Chokepoints: ${globalChokepoints.length}`);
console.log(`🔧 Major Canals: ${majorCanals.length}`);
console.log(`⚔️ Maritime Disputes: ${maritimeDisputes.length}`);
console.log(`🏴‍☠️ Piracy Hotspots: ${piracyHotspots.length}`);
console.log(`🌡️ Climate Change Section: Included`);
console.log('═══════════════════════════════════════════════════════════');
