/* ============================================
   UPSC GEOGRAPHY LEARNING SYSTEM
   Climatology Data File - Part 2
   Topics: Air Masses, Cyclones & Anticyclones,
           Climate Types, El Niño & La Niña,
           Global Monsoons
   ============================================ */

const climatology2Data = [

    // ============================================
    // TOPIC 1: AIR MASSES
    // ============================================
    {
        id: 'air-masses',
        name: 'Air Masses',
        icon: '🌬️',
        category: 'climatology',
        theme: 'atmosphere',
        difficulty: 'medium',
        upscRelevance: 'medium',

        mindMap: {
            central: 'Air Masses',
            branches: [
                {
                    name: 'Types by Source',
                    color: '#4ECDC4',
                    children: [
                        'Continental (c) - Dry',
                        'Maritime (m) - Moist'
                    ]
                },
                {
                    name: 'Types by Latitude',
                    color: '#FF6B6B',
                    children: [
                        'Arctic/Antarctic (A)',
                        'Polar (P)',
                        'Tropical (T)',
                        'Equatorial (E)'
                    ]
                },
                {
                    name: 'Combined Types',
                    color: '#FFE66D',
                    children: [
                        'cP - Continental Polar (cold, dry)',
                        'mP - Maritime Polar (cold, moist)',
                        'cT - Continental Tropical (hot, dry)',
                        'mT - Maritime Tropical (warm, moist)'
                    ]
                },
                {
                    name: 'Fronts',
                    color: '#95E1D3',
                    children: [
                        'Cold Front',
                        'Warm Front',
                        'Occluded Front',
                        'Stationary Front'
                    ]
                }
            ]
        },

        memoryHooks: [
            {
                type: 'mnemonic',
                title: 'Air Mass Types',
                content: 'CAPE = Continental/mAritime + Polar/Equatorial. Mix them: cP, mP, cT, mT!',
                icon: '🧠'
            },
            {
                type: 'comparison',
                title: 'Continental vs Maritime',
                content: 'Continental = Desert traveler (dry, extreme temps) | Maritime = Ocean swimmer (moist, moderate temps)',
                icon: '🏜️'
            },
            {
                type: 'acronym',
                title: 'Front Types',
                content: 'COWS = Cold, Occluded, Warm, Stationary fronts',
                icon: '🔤'
            },
            {
                type: 'visual',
                title: 'Cold Front Symbol',
                content: 'Cold front: Blue triangles pointing direction of movement (sharp, aggressive like cold!) | Warm front: Red semicircles (smooth, gentle like warmth)',
                icon: '📍'
            }
        ],

        conceptBlocks: [
            {
                title: 'What is an Air Mass?',
                icon: '🌬️',
                points: [
                    'Large body of air with uniform temperature & humidity',
                    'Covers thousands of square kilometers',
                    'Acquires properties from source region',
                    'Takes several days to form over stationary surface',
                    'Moves and brings weather changes'
                ]
            },
            {
                title: 'Source Regions',
                icon: '🌍',
                points: [
                    'Must be flat, uniform surface',
                    'Air must remain stationary for days',
                    'Oceans, deserts, polar regions, tropical seas',
                    'Mountains and forests NOT good sources',
                    'High pressure areas favor formation'
                ]
            },
            {
                title: 'Weather Fronts',
                icon: '⚡',
                points: [
                    'Front: Boundary between two air masses',
                    'Cold Front: Cold air pushes under warm (steep, storms)',
                    'Warm Front: Warm air slides over cold (gradual, drizzle)',
                    'Occluded Front: Cold front catches warm front',
                    'Stationary Front: Neither advancing (prolonged weather)'
                ]
            },
            {
                title: 'Effects on Weather',
                icon: '🌧️',
                points: [
                    'mT air → warm, humid, rain likely',
                    'cP air → cold, dry, clear skies',
                    'cT air → hot, dry, heat waves',
                    'mP air → cool, moist, drizzle',
                    'Fronts cause rapid weather changes'
                ]
            }
        ],

        diagrams: [
            {
                title: 'Air Mass Source Regions',
                type: 'map',
                description: 'World map showing source regions of cP, mP, cT, mT, and other air masses'
            },
            {
                title: 'Cold Front vs Warm Front',
                type: 'cross-section',
                description: 'Cross-sections showing cold front (steep angle, storms) and warm front (gentle slope, layered clouds)'
            },
            {
                title: 'Air Mass Classification Chart',
                type: 'comparison-chart',
                description: 'Table showing all air mass types with source, characteristics, and weather effects'
            }
        ],

        quickFacts: [
            '🌍 Air masses can cover millions of square km',
            '⏱️ Takes 3-7 days to form an air mass',
            '🌡️ cP air mass can be -40°C or colder',
            '🌊 mT is most common air mass over oceans',
            '⚡ Cold fronts move faster than warm fronts',
            '🌧️ Fronts are zones of cloudiness and precipitation',
            '📏 Frontal zones can be 100-200 km wide',
            '🇮🇳 India affected by mT air in monsoon'
        ],

        upscTraps: [
            {
                trap: 'All fronts produce the same weather',
                clarity: 'Cold fronts → intense but brief storms | Warm fronts → gentle, prolonged precipitation'
            },
            {
                trap: 'Air masses don\'t change after forming',
                clarity: 'Air masses MODIFY as they move. Polar air warms over land, maritime air dries over land'
            },
            {
                trap: 'India has clear frontal weather',
                clarity: 'India is tropical - frontal weather is WEAK here. Mid-latitudes (USA, Europe) have strong fronts'
            }
        ],

        revisionBox: {
            title: '⚡ 30-Second Revision',
            points: [
                'Air mass: Large uniform body of air (temp + humidity)',
                'Types: Continental (dry) vs Maritime (moist)',
                'By latitude: Arctic, Polar, Tropical, Equatorial',
                'Combined: cP (cold dry), mP (cold moist), cT (hot dry), mT (warm moist)',
                'Fronts: Cold (fast, storms), Warm (slow, drizzle), Occluded, Stationary',
                'mT air brings Indian monsoon rains'
            ]
        },

        pyqs: [
            {
                year: 2018,
                question: 'Explain the concept of air masses and their role in determining weather.',
                type: 'Mains'
            },
            {
                year: 2020,
                question: 'What is the difference between cold front and warm front?',
                type: 'Mains'
            }
        ]
    },

    // ============================================
    // TOPIC 2: CYCLONES & ANTICYCLONES
    // ============================================
    {
        id: 'cyclones-anticyclones',
        name: 'Cyclones & Anticyclones',
        icon: '🌀',
        category: 'climatology',
        theme: 'cyclone',
        difficulty: 'hard',
        upscRelevance: 'high',

        mindMap: {
            central: 'Cyclones & Anticyclones',
            branches: [
                {
                    name: 'Tropical Cyclones',
                    color: '#FF6B6B',
                    children: [
                        'Form over warm oceans (27°C+)',
                        'Hurricane (Atlantic)',
                        'Typhoon (Pacific)',
                        'Cyclone (Indian Ocean)'
                    ]
                },
                {
                    name: 'Temperate Cyclones',
                    color: '#4ECDC4',
                    children: [
                        'Form at polar front (40-65°)',
                        'Frontal in nature',
                        'Western Disturbances',
                        'Move west to east'
                    ]
                },
                {
                    name: 'Anticyclones',
                    color: '#FFE66D',
                    children: [
                        'High pressure center',
                        'Descending air',
                        'Clear, dry weather',
                        'Clockwise in N (opposite of cyclone)'
                    ]
                },
                {
                    name: 'Cyclone Structure',
                    color: '#95E1D3',
                    children: [
                        'Eye - Calm center',
                        'Eye Wall - Strongest winds',
                        'Rain Bands - Spiral arms',
                        'Outflow - Top divergence'
                    ]
                }
            ]
        },

        memoryHooks: [
            {
                type: 'mnemonic',
                title: 'Tropical Cyclone Names',
                content: 'HTC = Hurricane (Atlantic), Typhoon (Pacific), Cyclone (Indian). Remember: How To Cook!',
                icon: '🧠'
            },
            {
                type: 'comparison',
                title: 'Cyclone vs Anticyclone',
                content: 'Cyclone = Vacuum cleaner (sucks air IN, rises) | Anticyclone = Air freshener (pushes air OUT, sinks)',
                icon: '🌀'
            },
            {
                type: 'acronym',
                title: 'Cyclone Rotation',
                content: 'CAN = Counterclockwise Anticlock North (cyclones rotate counterclockwise in N. Hemisphere)',
                icon: '🔤'
            },
            {
                type: 'story',
                title: 'The Eye Story',
                content: 'The eye of cyclone is like a stadium - calm inside but chaos in the walls. Eye wall is where fans (winds) are wildest!',
                icon: '👁️'
            }
        ],

        conceptBlocks: [
            {
                title: 'Tropical Cyclones',
                icon: '🌀',
                points: [
                    'Form over warm oceans (≥27°C)',
                    'Need Coriolis force (5-30° latitude)',
                    'Powered by latent heat of condensation',
                    'Die when over land (no moisture) or cold water',
                    'Season: May-Nov in N. Hemisphere'
                ]
            },
            {
                title: 'Temperate Cyclones',
                icon: '🌬️',
                points: [
                    'Form at polar front (40-65° latitude)',
                    'Caused by air mass interaction',
                    'Have warm and cold fronts',
                    'Larger but less intense than tropical',
                    'Western Disturbances are temperate cyclones'
                ]
            },
            {
                title: 'Cyclone Structure',
                icon: '👁️',
                points: [
                    'Eye: 30-65 km diameter, calm, clear, warm',
                    'Eye Wall: Most intense winds (up to 300 km/hr)',
                    'Rain Bands: Spiral arms with heavy rain',
                    'Diameter: 200-2000 km total',
                    'Height: Up to 15 km (into stratosphere)'
                ]
            },
            {
                title: 'Anticyclones',
                icon: '☀️',
                points: [
                    'High pressure system (opposite of cyclone)',
                    'Air sinks and spreads outward',
                    'Clockwise rotation in N. Hemisphere',
                    'Clear skies, dry weather, calm',
                    'Can cause heat waves (summer) or cold waves (winter)'
                ]
            }
        ],

        diagrams: [
            {
                title: 'Tropical Cyclone Structure',
                type: 'cross-section',
                description: 'Cross-section showing eye, eye wall, rain bands, inflow at bottom, outflow at top'
            },
            {
                title: 'Cyclone vs Anticyclone',
                type: 'comparison-chart',
                description: 'Side-by-side diagrams showing rotation direction, vertical air movement, and weather conditions'
            },
            {
                title: 'Global Cyclone Tracks',
                type: 'map',
                description: 'World map showing typical paths of tropical cyclones in different ocean basins'
            }
        ],

        quickFacts: [
            '🌡️ Tropical cyclones need sea temp ≥27°C',
            '👁️ Eye can be 30-65 km wide',
            '💨 Strongest cyclone winds: 300+ km/hr',
            '📏 Cyclone diameter: 200-2000 km',
            '⚡ A cyclone releases energy of 200 atomic bombs/day',
            '🇮🇳 India: Pre-monsoon (Apr-Jun) & Post-monsoon (Oct-Dec) cyclones',
            '🌊 Storm surge is deadliest cyclone hazard',
            '📛 Cyclones named by regional committees'
        ],

        upscTraps: [
            {
                trap: 'Cyclones form at equator',
                clarity: 'Cyclones need Coriolis force which is ZERO at equator. They form between 5-30° latitude'
            },
            {
                trap: 'Eye of cyclone has strongest winds',
                clarity: 'Eye is CALM! Strongest winds are in EYE WALL surrounding the eye'
            },
            {
                trap: 'Western Disturbances are tropical cyclones',
                clarity: 'Western Disturbances are TEMPERATE/EXTRATROPICAL cyclones originating in Mediterranean'
            }
        ],

        revisionBox: {
            title: '⚡ 30-Second Revision',
            points: [
                'Tropical cyclone: Warm ocean (27°C), 5-30° lat, latent heat powered',
                'Names: Hurricane (Atlantic), Typhoon (Pacific), Cyclone (Indian)',
                'Structure: Eye (calm) → Eye Wall (fierce) → Rain Bands',
                'Temperate cyclone: Polar front, frontal, includes Western Disturbances',
                'Anticyclone: High pressure, sinking air, clear weather, opposite rotation',
                'Rotation: Counterclockwise in N. Hemisphere, Clockwise in S.'
            ]
        },

        pyqs: [
            {
                year: 2021,
                question: 'Discuss the formation and structure of tropical cyclones with reference to Indian Ocean.',
                type: 'Mains'
            },
            {
                year: 2019,
                question: 'What is the difference between tropical and temperate cyclones?',
                type: 'Mains'
            },
            {
                year: 2020,
                question: 'Western Disturbances originate from which region?',
                type: 'Prelims'
            }
        ]
    },

    // ============================================
    // TOPIC 3: CLIMATE TYPES (KÖPPEN)
    // ============================================
    {
        id: 'climate-types',
        name: 'Climate Types (Köppen)',
        icon: '🌍',
        category: 'climatology',
        theme: 'biome',
        difficulty: 'hard',
        upscRelevance: 'high',

        mindMap: {
            central: 'Köppen Classification',
            branches: [
                {
                    name: 'A - Tropical',
                    color: '#FF6B6B',
                    children: [
                        'Af - Tropical Rainforest',
                        'Am - Tropical Monsoon',
                        'Aw - Tropical Savanna'
                    ]
                },
                {
                    name: 'B - Dry',
                    color: '#FFE66D',
                    children: [
                        'BWh - Hot Desert',
                        'BWk - Cold Desert',
                        'BSh - Hot Steppe',
                        'BSk - Cold Steppe'
                    ]
                },
                {
                    name: 'C - Temperate',
                    color: '#4ECDC4',
                    children: [
                        'Cfa - Humid Subtropical',
                        'Cfb - Marine West Coast',
                        'Csa - Mediterranean'
                    ]
                },
                {
                    name: 'D & E - Cold',
                    color: '#95E1D3',
                    children: [
                        'Dfa/Dfb - Humid Continental',
                        'Dfc - Subarctic/Taiga',
                        'ET - Tundra',
                        'EF - Ice Cap'
                    ]
                }
            ]
        },

        memoryHooks: [
            {
                type: 'mnemonic',
                title: 'Köppen Main Types',
                content: 'A B C D E = All Boys Can Dance Everywhere (Tropical, Dry, Temperate, Continental, Polar)',
                icon: '🧠'
            },
            {
                type: 'acronym',
                title: 'India\'s Köppen Climates',
                content: 'India has ABCE: A (tropical), B (desert/steppe), C (subtropical), E (mountain) - No D!',
                icon: '🔤'
            },
            {
                type: 'comparison',
                title: 'Desert vs Steppe',
                content: 'BW (Desert) = Waste land, no rain | BS (Steppe) = Semi-arid, Some grass',
                icon: '🏜️'
            },
            {
                type: 'visual',
                title: 'Mediterranean Climate',
                content: 'Csa = California, South Africa, Australia (SW), Mediterranean. Summer DRY, Winter WET - opposite of monsoon!',
                icon: '🍇'
            }
        ],

        conceptBlocks: [
            {
                title: 'A - Tropical Climates',
                icon: '🌴',
                points: [
                    'All months average temp ≥18°C',
                    'Af (Rainforest): No dry season, Amazon, Congo',
                    'Am (Monsoon): Short dry season, coastal India',
                    'Aw (Savanna): Distinct dry season, African savanna',
                    'High rainfall, lush vegetation'
                ]
            },
            {
                title: 'B - Dry Climates',
                icon: '🏜️',
                points: [
                    'Evaporation > Precipitation',
                    'BW (Desert): <250mm rainfall, Sahara, Thar',
                    'BS (Steppe): 250-500mm, semi-arid grasslands',
                    'h = hot (annual temp >18°C), k = cold (<18°C)',
                    'Found at 20-30° latitude (subtropical high)'
                ]
            },
            {
                title: 'C - Temperate Climates',
                icon: '🌲',
                points: [
                    'Coldest month: -3°C to 18°C',
                    'Cfa: Humid subtropical, SE USA, China, N. India plains',
                    'Cfb: Marine west coast, W. Europe, NZ',
                    'Csa/Csb: Mediterranean, dry summer, wet winter',
                    'Four distinct seasons'
                ]
            },
            {
                title: 'D & E - Cold Climates',
                icon: '❄️',
                points: [
                    'D: Coldest month <-3°C, warmest >10°C',
                    'Dfc: Subarctic/Taiga, Siberia, Canada',
                    'ET: Tundra, warmest month 0-10°C, permafrost',
                    'EF: Ice cap, all months <0°C, Greenland, Antarctica',
                    'India has NO D climate'
                ]
            }
        ],

        diagrams: [
            {
                title: 'World Köppen Climate Map',
                type: 'map',
                description: 'World map showing distribution of A, B, C, D, E climate zones with colors'
            },
            {
                title: 'India Köppen Classification',
                type: 'map',
                description: 'India map showing Am, Aw, BSh, BWh, Cwg, and highland climate regions'
            },
            {
                title: 'Climate Classification Tree',
                type: 'hierarchy',
                description: 'Flowchart showing how to determine Köppen climate from temperature and precipitation data'
            }
        ],

        quickFacts: [
            '👨‍🔬 Vladimir Köppen created this in 1884',
            '📊 Based on monthly temperature and precipitation',
            '🌍 5 main groups: A, B, C, D, E (+ H for highlands)',
            '🇮🇳 Most of India: Am, Aw, Cwa',
            '🏜️ B climates cover 26% of Earth\'s land',
            '🌧️ Af climate has no month with <60mm rain',
            '🍇 Mediterranean: Only climate with dry summer',
            '❄️ EF (Ice cap) has no vegetation at all'
        ],

        upscTraps: [
            {
                trap: 'India has only tropical climate',
                clarity: 'India has A (tropical), B (desert/steppe in Rajasthan), C (humid subtropical in north), H (Himalayas)'
            },
            {
                trap: 'Mediterranean climate has dry winters',
                clarity: 'Mediterranean has DRY SUMMERS, WET WINTERS - unique and counterintuitive!'
            },
            {
                trap: 'All deserts are hot (BWh)',
                clarity: 'Cold deserts (BWk) exist! Ladakh, Gobi, Patagonia are cold deserts with <18°C annual average'
            }
        ],

        revisionBox: {
            title: '⚡ 30-Second Revision',
            points: [
                '5 types: A (Tropical), B (Dry), C (Temperate), D (Continental), E (Polar)',
                'A: Af (rainforest), Am (monsoon), Aw (savanna) - all months ≥18°C',
                'B: BW (desert <250mm), BS (steppe 250-500mm), h=hot, k=cold',
                'C: Cfa (humid subtropical), Cfb (marine), Csa (Mediterranean dry summer)',
                'India: Am, Aw, BSh, BWh, Cwa, H - NO D climate',
                'Mediterranean is ONLY climate with summer dry season'
            ]
        },

        pyqs: [
            {
                year: 2019,
                question: 'Explain Köppen\'s classification of climate with special reference to India.',
                type: 'Mains'
            },
            {
                year: 2021,
                question: 'Which Köppen climate type covers maximum area in India?',
                type: 'Prelims'
            },
            {
                year: 2017,
                question: 'Compare Mediterranean and Monsoon type of climates.',
                type: 'Mains'
            }
        ]
    },

    // ============================================
    // TOPIC 4: EL NIÑO & LA NIÑA
    // ============================================
    {
        id: 'el-nino-la-nina',
        name: 'El Niño & La Niña',
        icon: '🌊',
        category: 'climatology',
        theme: 'ocean',
        difficulty: 'hard',
        upscRelevance: 'high',

        mindMap: {
            central: 'ENSO',
            branches: [
                {
                    name: 'El Niño',
                    color: '#FF6B6B',
                    children: [
                        'Warm Pacific waters move EAST',
                        'Weakened Trade Winds',
                        'Droughts in India, Australia',
                        'Floods in Peru, USA west'
                    ]
                },
                {
                    name: 'La Niña',
                    color: '#4ECDC4',
                    children: [
                        'Cold Pacific waters stay WEST',
                        'Stronger Trade Winds',
                        'Good monsoon in India',
                        'Floods in Australia, Indonesia'
                    ]
                },
                {
                    name: 'Normal Conditions',
                    color: '#FFE66D',
                    children: [
                        'Trade winds blow west',
                        'Warm water pools in West Pacific',
                        'Upwelling off Peru coast',
                        'Walker Circulation active'
                    ]
                },
                {
                    name: 'Indian Ocean Dipole',
                    color: '#95E1D3',
                    children: [
                        'Positive IOD - Good monsoon',
                        'Negative IOD - Weak monsoon',
                        'Affects East Africa too',
                        'Independent of ENSO'
                    ]
                }
            ]
        },

        memoryHooks: [
            {
                type: 'mnemonic',
                title: 'El Niño Effect',
                content: 'El Niño = Evil for India (droughts). El = Spanish for "The Boy" = Christ Child (appears around Christmas)',
                icon: '🧠'
            },
            {
                type: 'comparison',
                title: 'El Niño vs La Niña',
                content: 'El Niño = Hot water moves EAST (bad for India) | La Niña = Hot water stays WEST (good for India)',
                icon: '🌊'
            },
            {
                type: 'acronym',
                title: 'ENSO Full Form',
                content: 'ENSO = El Niño Southern Oscillation. It\'s an ocean-atmosphere coupled system!',
                icon: '🔤'
            },
            {
                type: 'story',
                title: 'The Bathtub Story',
                content: 'Pacific Ocean is like a bathtub. Normally, trade winds push warm water to one side (West). El Niño = Wind weakens, warm water sloshes back East!',
                icon: '🛁'
            }
        ],

        conceptBlocks: [
            {
                title: 'Normal Conditions',
                icon: '🌍',
                points: [
                    'Trade winds blow west across Pacific',
                    'Warm water pools in Western Pacific (Indonesia)',
                    'Cold water upwells along Peru coast',
                    'Walker Circulation: Air rises in west, sinks in east',
                    'This feeds the Indian monsoon'
                ]
            },
            {
                title: 'El Niño Conditions',
                icon: '🔥',
                points: [
                    'Trade winds weaken or reverse',
                    'Warm water moves EASTWARD to Peru',
                    'Upwelling stops, Peru fisheries collapse',
                    'Walker Circulation weakens/reverses',
                    'India: Weak monsoon, droughts (1987, 2009, 2015)'
                ]
            },
            {
                title: 'La Niña Conditions',
                icon: '❄️',
                points: [
                    'Trade winds STRONGER than normal',
                    'Extra warm water pools in West Pacific',
                    'Enhanced upwelling in East Pacific',
                    'Walker Circulation strengthens',
                    'India: Strong monsoon, sometimes floods'
                ]
            },
            {
                title: 'Indian Ocean Dipole (IOD)',
                icon: '🇮🇳',
                points: [
                    'Temperature difference between W and E Indian Ocean',
                    'Positive IOD: West warmer → Good monsoon',
                    'Negative IOD: East warmer → Weak monsoon',
                    'Can counter or enhance El Niño effect',
                    '2019: Positive IOD saved monsoon despite El Niño'
                ]
            }
        ],

        diagrams: [
            {
                title: 'Normal vs El Niño vs La Niña',
                type: 'comparison-chart',
                description: 'Three cross-sections of Pacific showing Walker Circulation, sea surface temps, and trade winds in each condition'
            },
            {
                title: 'Global El Niño Effects Map',
                type: 'map',
                description: 'World map showing drought and flood regions during El Niño events'
            },
            {
                title: 'ENSO and Indian Monsoon Link',
                type: 'flowchart',
                description: 'Flowchart showing how Pacific conditions affect Walker Circulation and Indian monsoon'
            }
        ],

        quickFacts: [
            '📅 El Niño occurs every 2-7 years',
            '🎄 Named "Christ Child" - appears around Christmas',
            '🌡️ El Niño warms global temperatures by 0.1-0.2°C',
            '🐟 Peru anchovy fishery collapses during El Niño',
            '🇮🇳 1987 El Niño caused severe Indian drought',
            '📊 2015-16 was one of strongest El Niños recorded',
            '🌧️ La Niña often causes floods in Australia',
            '🔄 IOD can modify ENSO\'s effect on India'
        ],

        upscTraps: [
            {
                trap: 'El Niño always causes drought in India',
                clarity: 'Not always! If positive IOD is strong, it can COUNTER El Niño. 2019 had El Niño but good rains due to positive IOD'
            },
            {
                trap: 'El Niño is only a Pacific phenomenon',
                clarity: 'El Niño affects GLOBAL climate - droughts in India/Australia, floods in Peru, warm winters in USA'
            },
            {
                trap: 'La Niña is always good for India',
                clarity: 'La Niña can cause EXCESS rainfall and floods. 2010 La Niña caused flooding in Pakistan and India'
            }
        ],

        revisionBox: {
            title: '⚡ 30-Second Revision',
            points: [
                'ENSO: El Niño Southern Oscillation (ocean-atmosphere system)',
                'Normal: Trade winds push warm water WEST, upwelling in EAST',
                'El Niño: Warm water moves EAST, weak trades, BAD for India (drought)',
                'La Niña: Warm water stays WEST, strong trades, GOOD for India',
                'IOD: Indian Ocean version, Positive IOD helps monsoon',
                'El Niño years for India: 1987, 2002, 2009, 2015'
            ]
        },

        pyqs: [
            {
                year: 2022,
                question: 'Explain the mechanism of El Niño and its impact on Indian monsoon.',
                type: 'Mains'
            },
            {
                year: 2020,
                question: 'What is Indian Ocean Dipole? How does it affect monsoon?',
                type: 'Mains'
            },
            {
                year: 2019,
                question: 'El Niño is associated with:',
                type: 'Prelims'
            },
            {
                year: 2017,
                question: 'Discuss the relationship between ENSO and Indian monsoon variability.',
                type: 'Mains'
            }
        ]
    },

    // ============================================
    // TOPIC 5: GLOBAL MONSOONS
    // ============================================
    {
        id: 'global-monsoons',
        name: 'Global Monsoons',
        icon: '🌧️',
        category: 'climatology',
        theme: 'monsoon',
        difficulty: 'medium',
        upscRelevance: 'high',

        mindMap: {
            central: 'Global Monsoons',
            branches: [
                {
                    name: 'Asian Monsoon',
                    color: '#4ECDC4',
                    children: [
                        'Indian Monsoon (strongest)',
                        'East Asian Monsoon',
                        'Southeast Asian Monsoon'
                    ]
                },
                {
                    name: 'Other Monsoons',
                    color: '#FF6B6B',
                    children: [
                        'Australian Monsoon',
                        'African Monsoon (West)',
                        'North American Monsoon',
                        'South American Monsoon'
                    ]
                },
                {
                    name: 'Mechanism',
                    color: '#FFE66D',
                    children: [
                        'Differential Heating',
                        'ITCZ Shift',
                        'Pressure Reversal',
                        'Wind Direction Reversal'
                    ]
                },
                {
                    name: 'Characteristics',
                    color: '#95E1D3',
                    children: [
                        'Seasonal wind reversal',
                        'Wet and dry seasons',
                        'Agricultural dependence',
                        'Affects 60% of world population'
                    ]
                }
            ]
        },

        memoryHooks: [
            {
                type: 'mnemonic',
                title: 'Monsoon Meaning',
                content: 'Monsoon = "Mausam" (Arabic) = Season. It means SEASONAL REVERSAL of winds, not just rain!',
                icon: '🧠'
            },
            {
                type: 'comparison',
                title: 'Winter vs Summer Monsoon',
                content: 'Summer: Land is hot → Low pressure → Wind blows FROM sea (wet) | Winter: Land is cold → High pressure → Wind blows TO sea (dry)',
                icon: '🔄'
            },
            {
                type: 'acronym',
                title: 'Monsoon Requirements',
                content: 'DLCP = Differential heating, Land-sea contrast, Coriolis force, Pressure gradient',
                icon: '🔤'
            },
            {
                type: 'story',
                title: 'Global Monsoon Family',
                content: 'Indian monsoon is the "Big Boss" - strongest and most reliable. Australian is the "cousin" in Southern Hemisphere. African is the "quiet one" affecting Sahel!',
                icon: '👨‍👩‍👧‍👦'
            }
        ],

        conceptBlocks: [
            {
                title: 'What is a Monsoon?',
                icon: '🌧️',
                points: [
                    'Seasonal REVERSAL of prevailing winds',
                    'Caused by differential heating of land and sea',
                    'Creates wet season (onshore winds) and dry season (offshore)',
                    'Not just "rainy season" - it\'s about WIND DIRECTION',
                    'Affects agriculture of 60% of world population'
                ]
            },
            {
                title: 'Indian/South Asian Monsoon',
                icon: '🇮🇳',
                points: [
                    'World\'s strongest and most prominent monsoon',
                    'SW Monsoon: June-September (wet)',
                    'NE Monsoon: October-December (dry, except Tamil Nadu)',
                    'Driven by: ITCZ shift, Tibetan Plateau, Somali Jet',
                    'Provides 75% of India\'s annual rainfall'
                ]
            },
            {
                title: 'East Asian Monsoon',
                icon: '🇨🇳',
                points: [
                    'Affects China, Japan, Korea',
                    'Summer: SE winds from Pacific (wet)',
                    'Winter: NW winds from Siberia (cold, dry)',
                    'Mei-Yu/Baiu: Rainy season front',
                    'More frontal character than Indian monsoon'
                ]
            },
            {
                title: 'Other Global Monsoons',
                icon: '🌍',
                points: [
                    'Australian: Dec-Mar (summer), N coast, weaker',
                    'West African: June-Sept, affects Sahel, linked to ITCZ',
                    'North American: July-Sept, SW USA and Mexico',
                    'South American: Oct-Mar, Amazon basin',
                    'All driven by same basic mechanism'
                ]
            }
        ],

        diagrams: [
            {
                title: 'Global Monsoon Regions Map',
                type: 'map',
                description: 'World map showing all monsoon regions: Asian, Australian, African, American with seasons marked'
            },
            {
                title: 'Summer vs Winter Monsoon',
                type: 'comparison-chart',
                description: 'Two maps of Asia showing wind direction reversal between summer (SW) and winter (NE)'
            },
            {
                title: 'Monsoon Mechanism',
                type: 'cross-section',
                description: 'Cross-section showing land-sea heating difference, pressure systems, and resulting wind flow'
            }
        ],

        quickFacts: [
            '🌍 Monsoons affect 60% of world\'s population',
            '🌧️ Indian monsoon provides 75% of annual rainfall',
            '📅 "Monsoon" from Arabic "mausam" = season',
            '🏔️ Himalayas enhance Indian monsoon by blocking cold air',
            '🌊 Somali Jet is world\'s strongest low-level jet',
            '🇦🇺 Australian monsoon: December to March',
            '🌾 Asian rice production depends on monsoon',
            '📊 Monsoon failure = famines historically in India'
        ],

        upscTraps: [
            {
                trap: 'Monsoon means rainy season',
                clarity: 'Monsoon means SEASONAL WIND REVERSAL. Rain is the effect, not the definition. Winter monsoon is dry!'
            },
            {
                trap: 'Only India has monsoon',
                clarity: 'Many regions have monsoons: East Asia, Australia, Africa, Americas. Indian is just the STRONGEST'
            },
            {
                trap: 'NE monsoon is dry everywhere in India',
                clarity: 'NE monsoon brings rain to TAMIL NADU coast (Oct-Dec). It\'s their main rainy season!'
            }
        ],

        revisionBox: {
            title: '⚡ 30-Second Revision',
            points: [
                'Monsoon = Seasonal wind reversal (not just rain)',
                'Cause: Differential heating → pressure difference → wind reversal',
                'Indian: SW (Jun-Sep, wet) + NE (Oct-Dec, dry except TN)',
                'East Asian: SE summer (wet), NW winter (cold)',
                'Australian: Dec-Mar (Southern Hemisphere summer)',
                'Global: Affects 60% population, critical for agriculture'
            ]
        },

        pyqs: [
            {
                year: 2021,
                question: 'Compare the Indian monsoon with the East Asian monsoon system.',
                type: 'Mains'
            },
            {
                year: 2018,
                question: 'Discuss the mechanism of monsoon with reference to Asia.',
                type: 'Mains'
            },
            {
                year: 2020,
                question: 'Which region receives rainfall from the Northeast monsoon?',
                type: 'Prelims'
            }
        ]
    }

];

// Make data available globally
window.climatology2Data = climatology2Data;

console.log('🌧️ Climatology Part 2 Data Loaded:', climatology2Data.length, 'topics');
