/* ============================================
   UPSC GEOGRAPHY LEARNING SYSTEM
   Climatology Data File - Part 1
   Topics: Atmosphere Structure, Temperature,
           Pressure Belts, Wind Systems, Jet Streams
   ============================================ */

const climatology1Data = [

    // ============================================
    // TOPIC 1: STRUCTURE OF ATMOSPHERE
    // ============================================
    {
        id: 'atmosphere-structure',
        name: 'Structure of Atmosphere',
        icon: '🌤️',
        category: 'climatology',
        theme: 'atmosphere',
        difficulty: 'medium',
        upscRelevance: 'high',

        mindMap: {
            central: 'Atmosphere',
            branches: [
                {
                    name: 'Layers',
                    color: '#4ECDC4',
                    children: [
                        'Troposphere (0-12 km)',
                        'Stratosphere (12-50 km)',
                        'Mesosphere (50-80 km)',
                        'Thermosphere (80-700 km)',
                        'Exosphere (700+ km)'
                    ]
                },
                {
                    name: 'Composition',
                    color: '#FF6B6B',
                    children: [
                        'Nitrogen - 78%',
                        'Oxygen - 21%',
                        'Argon - 0.93%',
                        'CO2 - 0.04%',
                        'Water Vapor (variable)'
                    ]
                },
                {
                    name: 'Key Features',
                    color: '#FFE66D',
                    children: [
                        'Troposphere - Weather zone',
                        'Stratosphere - Ozone layer',
                        'Mesosphere - Meteors burn',
                        'Thermosphere - ISS orbits',
                        'Ionosphere - Radio waves'
                    ]
                },
                {
                    name: 'Boundaries',
                    color: '#95E1D3',
                    children: [
                        'Tropopause',
                        'Stratopause',
                        'Mesopause',
                        'Thermopause'
                    ]
                }
            ]
        },

        memoryHooks: [
            {
                type: 'mnemonic',
                title: 'Atmosphere Layers Order',
                content: 'The Silly Men Travelled East = Troposphere, Stratosphere, Mesosphere, Thermosphere, Exosphere',
                icon: '🧠'
            },
            {
                type: 'acronym',
                title: 'Gas Composition',
                content: 'NOAC = Nitrogen (78%), Oxygen (21%), Argon (0.93%), CO2 (0.04%)',
                icon: '🔤'
            },
            {
                type: 'comparison',
                title: 'Layer Heights',
                content: 'Troposphere = Mt. Everest height (12 km) | Stratosphere = Commercial flight ceiling (50 km) | Mesosphere = Meteor shower zone',
                icon: '📏'
            },
            {
                type: 'story',
                title: 'Journey Upward',
                content: 'Start on ground (Tropo-weather), fly into calm Strato (ozone umbrella), freeze in Meso (shooting stars), heat up in Thermo (space station), then fade into Exo (goodbye Earth!)',
                icon: '🚀'
            }
        ],

        conceptBlocks: [
            {
                title: 'Troposphere',
                icon: '⛅',
                points: [
                    'Lowest layer: 0-12 km (8 km at poles, 18 km at equator)',
                    'Contains 75% of atmosphere\'s mass',
                    'ALL weather phenomena occur here',
                    'Temperature decreases with altitude (6.5°C/km)',
                    'Called "changing sphere" - constant mixing'
                ]
            },
            {
                title: 'Stratosphere',
                icon: '✈️',
                points: [
                    'Height: 12-50 km above surface',
                    'Contains OZONE LAYER (15-35 km)',
                    'Temperature INCREASES with altitude (UV absorption)',
                    'Very stable - ideal for aircraft',
                    'No weather, no clouds (except nacreous clouds)'
                ]
            },
            {
                title: 'Mesosphere & Above',
                icon: '☄️',
                points: [
                    'Mesosphere (50-80 km): Coldest layer (-90°C), meteors burn here',
                    'Thermosphere (80-700 km): Hottest layer (2000°C), ISS orbits here',
                    'Ionosphere (within Thermo): Reflects radio waves, auroras occur',
                    'Exosphere (700+ km): Merges with space, satellites orbit',
                    'Temperature concept changes in upper layers'
                ]
            },
            {
                title: 'Atmospheric Composition',
                icon: '🧪',
                points: [
                    'Nitrogen (78.08%): Most abundant, essential for life',
                    'Oxygen (20.95%): Supports combustion and respiration',
                    'Argon (0.93%): Inert noble gas',
                    'Carbon Dioxide (0.04%): Greenhouse gas, increasing',
                    'Water Vapor: Variable (0-4%), key for weather'
                ]
            }
        ],

        diagrams: [
            {
                title: 'Atmosphere Layers Diagram',
                type: 'cross-section',
                description: 'Vertical cross-section showing all 5 layers with heights, temperature changes, and key features'
            },
            {
                title: 'Temperature Profile',
                type: 'bar-graph',
                description: 'Graph showing temperature variation with altitude through different layers'
            },
            {
                title: 'Atmospheric Composition Pie Chart',
                type: 'pie-chart',
                description: 'Pie chart showing percentage of N2, O2, Ar, CO2, and other gases'
            }
        ],

        quickFacts: [
            '🌍 Atmosphere extends to ~10,000 km but 99% within 32 km',
            '🌡️ Troposphere temp drops 6.5°C per km (lapse rate)',
            '☀️ Ozone layer absorbs 97-99% of harmful UV rays',
            '❄️ Mesopause is coldest point in atmosphere (-90°C)',
            '🔥 Thermosphere can reach 2000°C (but feels cold!)',
            '📻 Ionosphere reflects AM radio waves, enabling long-distance communication',
            '🛰️ ISS orbits in Thermosphere at 400 km altitude',
            '💨 Atmosphere weighs 5.15 × 10^18 kg'
        ],

        upscTraps: [
            {
                trap: 'Thermosphere is hottest so you\'d burn there',
                clarity: 'Temperature is high but molecules are sparse. You\'d actually FREEZE because heat transfer needs molecules!'
            },
            {
                trap: 'Ozone layer is at top of atmosphere',
                clarity: 'Ozone layer is in STRATOSPHERE (15-35 km), not at top. It\'s actually quite low relative to total atmosphere'
            },
            {
                trap: 'Weather occurs throughout atmosphere',
                clarity: 'Weather is LIMITED to TROPOSPHERE only. Stratosphere and above are too thin and stable for weather'
            }
        ],

        revisionBox: {
            title: '⚡ 30-Second Revision',
            points: [
                '5 layers: Tropo (weather) → Strato (ozone) → Meso (meteors) → Thermo (ISS) → Exo (space)',
                'Troposphere: 0-12 km, 75% mass, all weather, temp decreases',
                'Stratosphere: 12-50 km, ozone layer, temp increases, stable',
                'Composition: N2 (78%), O2 (21%), Ar (1%), CO2 (0.04%)',
                'Lapse rate: 6.5°C decrease per km in troposphere',
                'Ionosphere reflects radio waves; aurora occurs here'
            ]
        },

        pyqs: [
            {
                year: 2020,
                question: 'Explain the structure of atmosphere with special reference to the ozone layer.',
                type: 'Mains'
            },
            {
                year: 2019,
                question: 'Which layer of the atmosphere contains the ozone layer?',
                type: 'Prelims'
            },
            {
                year: 2017,
                question: 'Discuss the composition and significance of different layers of atmosphere.',
                type: 'Mains'
            }
        ]
    },

    // ============================================
    // TOPIC 2: TEMPERATURE DISTRIBUTION
    // ============================================
    {
        id: 'temperature-distribution',
        name: 'Temperature Distribution',
        icon: '🌡️',
        category: 'climatology',
        theme: 'atmosphere',
        difficulty: 'medium',
        upscRelevance: 'high',

        mindMap: {
            central: 'Temperature',
            branches: [
                {
                    name: 'Insolation Factors',
                    color: '#FF6B6B',
                    children: [
                        'Angle of Sun\'s Rays',
                        'Duration of Daylight',
                        'Distance from Sun',
                        'Atmospheric Transparency'
                    ]
                },
                {
                    name: 'Horizontal Distribution',
                    color: '#4ECDC4',
                    children: [
                        'Latitude Effect',
                        'Land vs Water',
                        'Ocean Currents',
                        'Altitude Effect'
                    ]
                },
                {
                    name: 'Vertical Distribution',
                    color: '#FFE66D',
                    children: [
                        'Normal Lapse Rate (6.5°C/km)',
                        'Temperature Inversion',
                        'Environmental Lapse Rate'
                    ]
                },
                {
                    name: 'Heat Budget',
                    color: '#95E1D3',
                    children: [
                        'Incoming Solar Radiation',
                        'Absorption by Atmosphere',
                        'Reflection (Albedo)',
                        'Re-radiation'
                    ]
                }
            ]
        },

        memoryHooks: [
            {
                type: 'mnemonic',
                title: 'Factors Affecting Temperature',
                content: 'LOLA C = Latitude, Ocean currents, Land-water contrast, Altitude, Cloud cover',
                icon: '🧠'
            },
            {
                type: 'comparison',
                title: 'Land vs Sea',
                content: 'Land = Quick to heat, quick to cool (like a frying pan) | Sea = Slow to heat, slow to cool (like a pot of water)',
                icon: '🍳'
            },
            {
                type: 'acronym',
                title: 'Heat Budget Components',
                content: 'SARE = Solar input, Absorption, Reflection, Emission',
                icon: '🔤'
            },
            {
                type: 'visual',
                title: 'Isotherms Pattern',
                content: 'Isotherms bend toward EQUATOR over land in SUMMER (land is hotter) and toward POLES in WINTER (land is colder)',
                icon: '📈'
            }
        ],

        conceptBlocks: [
            {
                title: 'Insolation',
                icon: '☀️',
                points: [
                    'Insolation = Incoming Solar Radiation',
                    'Only 51% reaches Earth\'s surface',
                    '35% reflected back (albedo)',
                    '14% absorbed by atmosphere',
                    'Maximum at equator (perpendicular rays)'
                ]
            },
            {
                title: 'Horizontal Distribution',
                icon: '🌍',
                points: [
                    'Latitude: Temp decreases from equator to poles',
                    'Land heats/cools faster than water (specific heat)',
                    'Warm currents raise coastal temps (Gulf Stream)',
                    'Cold currents lower coastal temps (Labrador)',
                    'Isotherms: Lines joining equal temperature points'
                ]
            },
            {
                title: 'Vertical Distribution',
                icon: '📊',
                points: [
                    'Normal Lapse Rate: 6.5°C decrease per 1000m',
                    'Higher altitude = Lower temperature (thinner air)',
                    'Temperature Inversion: Temp increases with height',
                    'Inversion causes: Smog, frost, stable conditions',
                    'Environmental Lapse Rate varies with conditions'
                ]
            },
            {
                title: 'Temperature Inversion',
                icon: '🔄',
                points: [
                    'Abnormal condition: Warm air over cold air',
                    'Ground Inversion: Cold night, clear sky, calm wind',
                    'Frontal Inversion: Warm air over cold front',
                    'Traps pollutants → causes smog',
                    'Common in valleys (cold air sinks)'
                ]
            }
        ],

        diagrams: [
            {
                title: 'Global Temperature Distribution Map',
                type: 'map',
                description: 'World map showing January and July isotherms with latitude zones marked'
            },
            {
                title: 'Heat Budget Diagram',
                type: 'flowchart',
                description: 'Flow diagram showing incoming solar radiation, absorption, reflection, and re-radiation percentages'
            },
            {
                title: 'Temperature Inversion',
                type: 'cross-section',
                description: 'Cross-section showing normal lapse rate vs inversion conditions with trapped pollutants'
            }
        ],

        quickFacts: [
            '☀️ Earth receives only 1/2,000,000,000 of Sun\'s energy',
            '📊 Albedo of fresh snow: 80-90%, ocean: 6%',
            '🌡️ Hottest place: Death Valley (56.7°C recorded)',
            '❄️ Coldest: Antarctica (-89.2°C recorded)',
            '📏 Lapse rate: 6.5°C per 1000m in troposphere',
            '🌊 Oceans have annual range of only 5°C vs land 40°C+',
            '📈 Global average temperature: ~15°C (59°F)',
            '🌍 Equator receives 2.5x more insolation than poles'
        ],

        upscTraps: [
            {
                trap: 'Places at same latitude have same temperature',
                clarity: 'NO! Altitude, ocean currents, continentality all affect. Mumbai and Arabian Desert are same latitude but very different temps!'
            },
            {
                trap: 'Temperature inversion is harmful',
                clarity: 'Inversion itself is natural. But it TRAPS pollutants causing smog in cities. Also helps in agriculture (prevents frost)'
            },
            {
                trap: 'Earth is hottest when closest to Sun',
                clarity: 'Earth is closest in JANUARY (Northern winter)! Tilt matters more than distance. That\'s why seasons exist'
            }
        ],

        revisionBox: {
            title: '⚡ 30-Second Revision',
            points: [
                'Insolation: Only 51% reaches surface; 35% reflected, 14% absorbed',
                'Factors: Latitude, Altitude, Land-water, Ocean currents, Clouds',
                'Lapse Rate: 6.5°C decrease per 1000m elevation',
                'Inversion: Warm air over cold; traps pollution, causes smog',
                'Land vs Sea: Land has extreme temps; sea is moderate',
                'Isotherms bend: Toward equator over summer land, toward poles in winter'
            ]
        },

        pyqs: [
            {
                year: 2021,
                question: 'Explain the factors affecting the distribution of temperature on Earth\'s surface.',
                type: 'Mains'
            },
            {
                year: 2018,
                question: 'What is temperature inversion? Discuss its effects.',
                type: 'Mains'
            },
            {
                year: 2020,
                question: 'Normal lapse rate of temperature in troposphere is approximately:',
                type: 'Prelims'
            }
        ]
    },

    // ============================================
    // TOPIC 3: PRESSURE BELTS
    // ============================================
    {
        id: 'pressure-belts',
        name: 'Pressure Belts',
        icon: '🌀',
        category: 'climatology',
        theme: 'wind',
        difficulty: 'medium',
        upscRelevance: 'high',

        mindMap: {
            central: 'Pressure Belts',
            branches: [
                {
                    name: 'Low Pressure',
                    color: '#FF6B6B',
                    children: [
                        'Equatorial Low (ITCZ): 0°',
                        'Sub-polar Low: 60°N & 60°S'
                    ]
                },
                {
                    name: 'High Pressure',
                    color: '#4ECDC4',
                    children: [
                        'Subtropical High: 30°N & 30°S',
                        'Polar High: 90°N & 90°S'
                    ]
                },
                {
                    name: 'Formation Causes',
                    color: '#FFE66D',
                    children: [
                        'Thermal (heating/cooling)',
                        'Dynamic (air circulation)',
                        'Equatorial & Polar - Thermal',
                        'Subtropical & Subpolar - Dynamic'
                    ]
                },
                {
                    name: 'Seasonal Shift',
                    color: '#95E1D3',
                    children: [
                        'Belts shift with Sun\'s position',
                        '5° North in July',
                        '5° South in January',
                        'Causes monsoons'
                    ]
                }
            ]
        },

        memoryHooks: [
            {
                type: 'mnemonic',
                title: 'Pressure Belt Sequence',
                content: 'ELEPHANTS HAVE LOVELY HATS = Equatorial Low, Horse latitude High, Low (subpolar), High (polar)',
                icon: '🧠'
            },
            {
                type: 'acronym',
                title: 'Pressure Pattern',
                content: 'L-H-L-H from Equator to Pole: Low (0°) → High (30°) → Low (60°) → High (90°)',
                icon: '🔤'
            },
            {
                type: 'comparison',
                title: 'Thermal vs Dynamic',
                content: 'Thermal = Real heating/cooling (like kitchen stove zones) | Dynamic = Air movement creates it (like ceiling fan pushing air)',
                icon: '🌡️'
            },
            {
                type: 'story',
                title: 'Horse Latitudes',
                content: 'Sailors threw horses overboard at 30° (calm zone) when ships stuck without wind. Hence "Horse Latitudes" for subtropical high!',
                icon: '🐴'
            }
        ],

        conceptBlocks: [
            {
                title: 'Equatorial Low (ITCZ)',
                icon: '🌧️',
                points: [
                    'Located at 0° (±5°) latitude',
                    'Intense heating causes air to rise',
                    'Low pressure due to ascending air',
                    'Heavy rainfall (convectional)',
                    'Also called "Doldrums" (calm, no wind)'
                ]
            },
            {
                title: 'Subtropical High (30°)',
                icon: '☀️',
                points: [
                    'Located at 30° N and 30° S',
                    'Descending air from Hadley Cell',
                    'DYNAMIC origin (not thermal)',
                    'Clear skies, hot deserts located here',
                    'Horse Latitudes - calm, dry conditions'
                ]
            },
            {
                title: 'Subpolar Low (60°)',
                icon: '🌬️',
                points: [
                    'Located at 60° N and 60° S',
                    'Warm westerlies meet cold polar winds',
                    'Air rises at this front',
                    'DYNAMIC origin (convergence)',
                    'Stormy, cloudy conditions'
                ]
            },
            {
                title: 'Polar High (90°)',
                icon: '❄️',
                points: [
                    'Located at poles (90° N and 90° S)',
                    'Extremely cold, dense air sinks',
                    'THERMAL origin (cooling)',
                    'Permanent ice caps',
                    'Very dry (cold air holds little moisture)'
                ]
            }
        ],

        diagrams: [
            {
                title: 'Global Pressure Belts',
                type: 'cross-section',
                description: 'Latitudinal cross-section showing all 7 pressure belts from pole to pole with heights and characteristics'
            },
            {
                title: 'Seasonal Shift of ITCZ',
                type: 'map',
                description: 'World map showing ITCZ position in January vs July with monsoon regions highlighted'
            },
            {
                title: 'Pressure and Wind Relationship',
                type: 'flowchart',
                description: 'Diagram showing how pressure differences create wind flows between belts'
            }
        ],

        quickFacts: [
            '🌍 7 pressure belts: 3 Low + 4 High',
            '☀️ ITCZ shifts 5°N in July, 5°S in January',
            '🏜️ Major deserts at 30° (Sahara, Arabian, Thar)',
            '🐴 Horse Latitudes got name from stranded ships',
            '🌧️ Doldrums (ITCZ) receive 200+ rainy days/year',
            '📊 Standard sea-level pressure: 1013.25 mb',
            '🌀 Pressure decreases with altitude (1 mb per 10m)',
            '💨 Wind flows from High to Low pressure'
        ],

        upscTraps: [
            {
                trap: 'All pressure belts are thermally induced',
                clarity: 'Only Equatorial Low and Polar High are THERMAL. Subtropical High and Subpolar Low are DYNAMIC (caused by air circulation)'
            },
            {
                trap: 'Pressure belts are stationary',
                clarity: 'They SHIFT 5° north/south with seasons following the Sun. This shift causes MONSOONS!'
            },
            {
                trap: 'Low pressure always means rain',
                clarity: 'Low pressure = rising air = POTENTIAL for rain. But moisture must be present. Polar low is dry!'
            }
        ],

        revisionBox: {
            title: '⚡ 30-Second Revision',
            points: [
                '7 belts: EQ Low (0°) → ST High (30°) → SP Low (60°) → Polar High (90°)',
                'Thermal: Equatorial Low (heating), Polar High (cooling)',
                'Dynamic: Subtropical High (descending), Subpolar Low (converging)',
                'ITCZ shifts 5° with seasons → causes monsoons',
                'Deserts at 30° due to descending dry air',
                'Doldrums = calm ITCZ | Horse Latitudes = calm 30°'
            ]
        },

        pyqs: [
            {
                year: 2019,
                question: 'Explain the origin and distribution of pressure belts on Earth.',
                type: 'Mains'
            },
            {
                year: 2021,
                question: 'Which pressure belt is responsible for the formation of hot deserts?',
                type: 'Prelims'
            },
            {
                year: 2018,
                question: 'Discuss the seasonal shifting of pressure belts and its effects on climate.',
                type: 'Mains'
            }
        ]
    },

    // ============================================
    // TOPIC 4: WIND SYSTEMS
    // ============================================
    {
        id: 'wind-systems',
        name: 'Wind Systems',
        icon: '💨',
        category: 'climatology',
        theme: 'wind',
        difficulty: 'medium',
        upscRelevance: 'high',

        mindMap: {
            central: 'Wind Systems',
            branches: [
                {
                    name: 'Planetary Winds',
                    color: '#4ECDC4',
                    children: [
                        'Trade Winds (0-30°)',
                        'Westerlies (30-60°)',
                        'Polar Easterlies (60-90°)'
                    ]
                },
                {
                    name: 'Periodic Winds',
                    color: '#FF6B6B',
                    children: [
                        'Monsoons (seasonal)',
                        'Land & Sea Breeze (daily)',
                        'Mountain & Valley (daily)'
                    ]
                },
                {
                    name: 'Local Winds',
                    color: '#FFE66D',
                    children: [
                        'Chinook (USA)',
                        'Foehn (Alps)',
                        'Loo (India)',
                        'Mistral (France)'
                    ]
                },
                {
                    name: 'Forces on Wind',
                    color: '#95E1D3',
                    children: [
                        'Pressure Gradient Force',
                        'Coriolis Force',
                        'Friction',
                        'Centrifugal Force'
                    ]
                }
            ]
        },

        memoryHooks: [
            {
                type: 'mnemonic',
                title: 'Planetary Winds',
                content: 'TEW = Trades (0-30°), Easterlies (60-90°), Westerlies (30-60°) - TEW from equator to pole!',
                icon: '🧠'
            },
            {
                type: 'acronym',
                title: 'Coriolis Effect',
                content: 'RIGHT in NORTH, LEFT in SOUTH - Winds deflect right in Northern Hemisphere, left in Southern',
                icon: '🔤'
            },
            {
                type: 'comparison',
                title: 'Land vs Sea Breeze',
                content: 'Day: Land hot → air rises → Sea breeze blows FROM sea | Night: Land cold → Sea breeze reverses → Land breeze blows FROM land',
                icon: '🌊'
            },
            {
                type: 'story',
                title: 'Trade Winds History',
                content: 'Called "Trade" winds because they helped sailing ships trade goods across Atlantic. Reliable NE winds in Northern Hemisphere pushed ships to Americas!',
                icon: '⛵'
            }
        ],

        conceptBlocks: [
            {
                title: 'Trade Winds',
                icon: '🌴',
                points: [
                    'Blow from 30° to 0° (toward equator)',
                    'NE Trades in N. Hemisphere, SE Trades in S. Hemisphere',
                    'Deflected by Coriolis force',
                    'Most consistent winds on Earth',
                    'Bring moisture to eastern tropical coasts'
                ]
            },
            {
                title: 'Westerlies',
                icon: '🌬️',
                points: [
                    'Blow from 30° to 60° latitudes',
                    'SW winds in N. Hemisphere, NW in S. Hemisphere',
                    'Bring rainfall to western continental coasts',
                    'Strongest in Southern Hemisphere (Roaring Forties)',
                    'Important for air travel (jet stream within)'
                ]
            },
            {
                title: 'Coriolis Effect',
                icon: '🔄',
                points: [
                    'Earth\'s rotation deflects moving objects',
                    'RIGHT deflection in Northern Hemisphere',
                    'LEFT deflection in Southern Hemisphere',
                    'Maximum at poles, zero at equator',
                    'Affects wind direction, ocean currents'
                ]
            },
            {
                title: 'Local Winds',
                icon: '🏔️',
                points: [
                    'Chinook/Foehn: Warm, dry downslope wind (melts snow)',
                    'Loo: Hot, dry summer wind in N. India',
                    'Mistral: Cold wind down Rhone Valley (France)',
                    'Sirocco: Hot, dusty wind from Sahara to Europe',
                    'Harmattan: Dry wind in W. Africa'
                ]
            }
        ],

        diagrams: [
            {
                title: 'Global Wind Circulation',
                type: 'map',
                description: 'World map showing Trade Winds, Westerlies, and Polar Easterlies with arrows and Hadley/Ferrel/Polar cells'
            },
            {
                title: 'Land and Sea Breeze',
                type: 'comparison-chart',
                description: 'Side-by-side diagrams showing day (sea breeze) and night (land breeze) circulation patterns'
            },
            {
                title: 'Coriolis Effect Diagram',
                type: 'cross-section',
                description: 'Globe showing wind deflection patterns in both hemispheres with arrows'
            }
        ],

        quickFacts: [
            '💨 Winds named by direction they come FROM',
            '🌀 Coriolis force is ZERO at equator',
            '🌊 Roaring Forties: Strong westerlies at 40°S',
            '⛵ Trade winds helped colonial-era shipping',
            '🔥 Loo wind can reach 45-50°C in India',
            '❄️ Chinook can raise temp by 20°C in hours',
            '📊 Ferrel\'s Law: Winds deflect right in N, left in S',
            '🌍 Three circulation cells: Hadley, Ferrel, Polar'
        ],

        upscTraps: [
            {
                trap: 'Westerlies blow from west in both hemispheres',
                clarity: 'Named for where they come FROM. N. Hemisphere: SW winds, S. Hemisphere: NW winds. Both FROM the west!'
            },
            {
                trap: 'Coriolis force is strongest at equator',
                clarity: 'OPPOSITE! Coriolis is ZERO at equator, MAXIMUM at poles. That\'s why equatorial winds are mostly straight'
            },
            {
                trap: 'Monsoons are only in India',
                clarity: 'Monsoons occur in many regions: SE Asia, Australia, Africa, Americas. India has most pronounced monsoon'
            }
        ],

        revisionBox: {
            title: '⚡ 30-Second Revision',
            points: [
                'Planetary: Trades (0-30°), Westerlies (30-60°), Polar Easterlies (60-90°)',
                'Trades: NE in N. Hemisphere, SE in S. Hemisphere',
                'Coriolis: Right in North, Left in South, Zero at equator',
                'Periodic: Monsoons (seasonal), Land-Sea breeze (daily)',
                'Local: Loo (India hot), Chinook (USA warm), Mistral (France cold)',
                'Circulation Cells: Hadley (tropical), Ferrel (mid-lat), Polar'
            ]
        },

        pyqs: [
            {
                year: 2020,
                question: 'Explain the origin and characteristics of planetary winds.',
                type: 'Mains'
            },
            {
                year: 2019,
                question: 'What is Coriolis force? How does it affect wind direction?',
                type: 'Mains'
            },
            {
                year: 2021,
                question: 'The local wind "Loo" is associated with which region?',
                type: 'Prelims'
            }
        ]
    },

    // ============================================
    // TOPIC 5: JET STREAMS
    // ============================================
    {
        id: 'jet-streams',
        name: 'Jet Streams',
        icon: '✈️',
        category: 'climatology',
        theme: 'wind',
        difficulty: 'hard',
        upscRelevance: 'high',

        mindMap: {
            central: 'Jet Streams',
            branches: [
                {
                    name: 'Types',
                    color: '#4ECDC4',
                    children: [
                        'Subtropical Jet (STJ)',
                        'Polar Front Jet (PFJ)',
                        'Tropical Easterly Jet (TEJ)',
                        'Polar Night Jet'
                    ]
                },
                {
                    name: 'Characteristics',
                    color: '#FF6B6B',
                    children: [
                        'Height: 9-12 km (Tropopause)',
                        'Speed: 150-400 km/hr',
                        'Width: 160-480 km',
                        'West to East flow'
                    ]
                },
                {
                    name: 'Indian Monsoon Link',
                    color: '#FFE66D',
                    children: [
                        'STJ blocks monsoon (winter)',
                        'STJ shifts north (summer)',
                        'TEJ brings monsoon rains',
                        'Somali Jet connection'
                    ]
                },
                {
                    name: 'Effects',
                    color: '#95E1D3',
                    children: [
                        'Aviation (fuel savings)',
                        'Weather patterns',
                        'Cyclone steering',
                        'Heat waves/Cold waves'
                    ]
                }
            ]
        },

        memoryHooks: [
            {
                type: 'mnemonic',
                title: 'Jet Stream Types',
                content: 'SPTP = Subtropical (STJ), Polar Front (PFJ), Tropical Easterly (TEJ), Polar Night',
                icon: '🧠'
            },
            {
                type: 'acronym',
                title: 'Indian Monsoon Jets',
                content: 'STJ OUT = TEJ IN for monsoon | Remember: STJ blocks winter, TEJ brings summer rain',
                icon: '🔤'
            },
            {
                type: 'comparison',
                title: 'Jet Stream River',
                content: 'Jet stream is like a high-altitude river of air - narrow, fast, meandering. Planes ride it like boats on a river!',
                icon: '🛩️'
            },
            {
                type: 'story',
                title: 'Monsoon & Jets',
                content: 'In winter, STJ sits over India like a lid. In summer, Himalayas push it north, and TEJ replaces it, opening the monsoon floodgates!',
                icon: '🌧️'
            }
        ],

        conceptBlocks: [
            {
                title: 'What are Jet Streams?',
                icon: '✈️',
                points: [
                    'Narrow bands of fast-moving air at tropopause',
                    'Height: 9-12 km above sea level',
                    'Speed: 150-400 km/hr (can exceed 500)',
                    'Generally flow WEST to EAST',
                    'Form at boundaries of temperature contrasts'
                ]
            },
            {
                title: 'Subtropical Jet Stream (STJ)',
                icon: '🌀',
                points: [
                    'Located around 30°N and 30°S',
                    'Flows west to east year-round',
                    'Strongest in winter months',
                    'In winter: Sits over N. India at 25°N',
                    'In summer: Shifts north of Himalayas'
                ]
            },
            {
                title: 'Tropical Easterly Jet (TEJ)',
                icon: '🌴',
                points: [
                    'Unique: Flows EAST to WEST',
                    'Develops in summer over Indian Ocean',
                    'Height: ~14-15 km (higher than STJ)',
                    'Linked to Tibetan Plateau heating',
                    'Crucial for SW Monsoon onset'
                ]
            },
            {
                title: 'Role in Indian Monsoon',
                icon: '🇮🇳',
                points: [
                    'Winter: STJ over India → blocks moisture → dry season',
                    'Summer: STJ shifts north of Himalayas',
                    'TEJ develops over peninsular India',
                    'TEJ supports rising air → monsoon rains',
                    'Somali Jet (low-level) also crucial'
                ]
            }
        ],

        diagrams: [
            {
                title: 'Jet Stream Locations',
                type: 'map',
                description: 'Global map showing positions of STJ, PFJ, and TEJ with seasonal variations'
            },
            {
                title: 'Jet Streams and Indian Monsoon',
                type: 'comparison-chart',
                description: 'Side-by-side diagrams showing winter (STJ over India) and summer (TEJ active) patterns'
            },
            {
                title: 'Jet Stream Cross-Section',
                type: 'cross-section',
                description: 'Vertical cross-section showing jet stream position at tropopause with wind speeds'
            }
        ],

        quickFacts: [
            '✈️ Jet streams discovered by WWII pilots',
            '📏 Typical jet stream: 160 km wide, 3 km thick',
            '💨 Maximum recorded: 656 km/hr over Japan',
            '🌡️ Form where warm and cold air masses meet',
            '⏱️ Flying with jet saves 1-2 hours on long flights',
            '🌧️ TEJ is found ONLY in summer (June-Sept)',
            '🏔️ Himalayas cause STJ to split and shift',
            '🌍 Polar jet influences mid-latitude weather'
        ],

        upscTraps: [
            {
                trap: 'All jet streams flow west to east',
                clarity: 'EXCEPTION: Tropical Easterly Jet flows EAST to WEST! It\'s unique and important for Indian monsoon'
            },
            {
                trap: 'Jet streams cause monsoon',
                clarity: 'Jets don\'t CAUSE monsoon but they INFLUENCE it. Monsoon caused by differential heating. Jets help in onset/withdrawal'
            },
            {
                trap: 'STJ and TEJ exist together over India',
                clarity: 'They REPLACE each other! STJ dominates winter, TEJ dominates summer. Both can\'t be over India simultaneously'
            }
        ],

        revisionBox: {
            title: '⚡ 30-Second Revision',
            points: [
                'Jet streams: High-altitude (9-12 km), fast (150-400 km/hr), narrow wind bands',
                'Types: STJ (30°), PFJ (60°), TEJ (summer only), Polar Night',
                'STJ: West to East, over India in winter, blocks monsoon',
                'TEJ: EAST to WEST, summer only, supports monsoon',
                'Monsoon onset: STJ shifts north, TEJ develops over India',
                'Somali Jet: Low-level jet bringing moisture from Arabian Sea'
            ]
        },

        pyqs: [
            {
                year: 2021,
                question: 'Discuss the role of jet streams in the Indian monsoon mechanism.',
                type: 'Mains'
            },
            {
                year: 2019,
                question: 'Which jet stream is unique to the Indian subcontinent during summer?',
                type: 'Prelims'
            },
            {
                year: 2020,
                question: 'Explain the relationship between the Subtropical Jet Stream and Western Disturbances.',
                type: 'Mains'
            },
            {
                year: 2017,
                question: 'Examine the role of Tropical Easterly Jet in bringing rainfall to India.',
                type: 'Mains'
            }
        ]
    }

];

// Make data available globally
window.climatology1Data = climatology1Data;

console.log('🌤️ Climatology Part 1 Data Loaded:', climatology1Data.length, 'topics');
