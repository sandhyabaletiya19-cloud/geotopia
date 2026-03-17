/**
 * GEOTOPIA - Rivers Data File 8
 * Rivers 71-80 (Dniester to Cauvery)
 * Dniester, Aldan, Iriri, Fraser, Helmand, Negro (Argentina), Ottawa, Mahanadi, Brazos, Cauvery
 */

const RIVERS_DATA_8 = [
    // ========================================
    // 71. DNIESTER RIVER
    // ========================================
    {
        id: "dniester",
        name: "Dniester River",
        length: 1352,
        continent: "europe",
        image: "https://images.unsplash.com/photo-1561542320-9a18cd340469?w=800",
        
        countries: [
            { name: "Ukraine", flag: "🇺🇦" },
            { name: "Moldova", flag: "🇲🇩" }
        ],
        
        states: [
            "Lviv Oblast", "Ivano-Frankivsk Oblast", "Ternopil Oblast",
            "Khmelnytskyi Oblast", "Chernivtsi Oblast", "Vinnytsia Oblast",
            "Odesa Oblast", "Transnistria", "Moldova proper"
        ],
        
        source: {
            location: "Carpathian Mountains, near Drohobych, Ukraine",
            type: "Mountain springs",
            elevation: "900 m",
            coordinates: [49.1667, 23.1667]
        },
        
        mouth: {
            location: "Black Sea, Dniester Liman, Ukraine",
            type: "Estuary/Liman",
            delta: "Dniester Liman - brackish lagoon",
            coordinates: [46.3500, 30.1667]
        },
        
        tributaries: {
            leftBank: [
                "Stryi River",
                "Svicha River",
                "Limnytsia River",
                "Zolota Lypa River",
                "Strypa River",
                "Seret River",
                "Zbruch River"
            ],
            rightBank: [
                "Bystritsa River",
                "Reut River",
                "Bâc River",
                "Botna River"
            ]
        },
        
        distributaries: [
            "Dniester Liman channels",
            "Turunchuk Channel"
        ],
        
        majorCities: [
            "Drohobych", "Sambir", "Halych", "Zalishchyky",
            "Mohyliv-Podilskyi", "Soroca", "Tiraspol",
            "Bender", "Bilhorod-Dnistrovskyi"
        ],
        
        dams: [
            { name: "Dniester Hydroelectric Station", details: "Ukraine, 702 MW, 1983" },
            { name: "Dniester Pumped Storage Station", details: "Ukraine, 2,268 MW, 2009" },
            { name: "Dubăsari Dam", details: "Moldova/Transnistria, 48 MW, 1954" }
        ],
        
        basinArea: "72,100 km²",
        discharge: "310 m³/s",
        
        riverPath: [
            [49.17, 23.17],    // Source - Carpathians
            [49.00, 23.50],
            [49.12, 24.72],    // Halych
            [48.80, 25.50],
            [48.64, 25.74],    // Zalishchyky
            [48.50, 26.50],
            [48.45, 27.47],    // Mohyliv-Podilskyi
            [48.17, 28.29],    // Soroca
            [47.50, 29.00],
            [46.92, 29.47],    // Dubăsari
            [46.83, 29.47],    // Tiraspol
            [46.50, 29.80],
            [46.35, 30.17]     // Black Sea (Mouth)
        ],
        
        tributaryPaths: [
            {
                name: "Zbruch River",
                path: [
                    [49.50, 26.00],
                    [49.00, 26.50],
                    [48.70, 26.80]     // Confluence
                ]
            },
            {
                name: "Seret River",
                path: [
                    [49.50, 25.50],
                    [49.00, 25.70],
                    [48.80, 25.90]     // Confluence
                ]
            },
            {
                name: "Reut River",
                path: [
                    [47.80, 28.00],
                    [47.50, 28.50],
                    [47.20, 29.00]     // Confluence
                ]
            },
            {
                name: "Bâc River",
                path: [
                    [47.00, 28.83],    // Chișinău
                    [46.90, 29.20],
                    [46.85, 29.45]     // Confluence
                ]
            }
        ],
        
        distributaryPaths: [
            {
                name: "Dniester Liman",
                path: [
                    [46.40, 30.10],
                    [46.35, 30.17]     // Black Sea
                ]
            },
            {
                name: "Turunchuk Channel",
                path: [
                    [46.45, 30.00],
                    [46.30, 30.20]     // Liman
                ]
            }
        ],
        
        cityCoordinates: [
            { name: "Drohobych", coords: [49.35, 23.50] },
            { name: "Halych", coords: [49.12, 24.72] },
            { name: "Mohyliv-Podilskyi", coords: [48.45, 27.47] },
            { name: "Soroca", coords: [48.17, 28.29] },
            { name: "Tiraspol", coords: [46.83, 29.64] },
            { name: "Bender", coords: [46.83, 29.47] },
            { name: "Bilhorod-Dnistrovskyi", coords: [46.20, 30.35] }
        ],
        
        damCoordinates: [
            { name: "Dniester Hydroelectric Station", coords: [48.52, 27.26], details: "702 MW hydroelectric" },
            { name: "Dniester Pumped Storage", coords: [48.55, 27.30], details: "2,268 MW - Europe's largest" },
            { name: "Dubăsari Dam", coords: [47.27, 29.15], details: "48 MW - Transnistria" }
        ],
        
        flightLandmarks: [
            { progress: 0, name: "Carpathian Mountains", icon: "🏔️", description: "Source region" },
            { progress: 0.10, name: "Upper Dniester Valley", icon: "🏞️", description: "Mountain river" },
            { progress: 0.20, name: "Halych", icon: "🏛️", description: "Medieval Galician capital" },
            { progress: 0.35, name: "Dniester Canyon", icon: "🏜️", description: "Scenic gorge" },
            { progress: 0.45, name: "Dniester Reservoir", icon: "🌊", description: "Pumped storage" },
            { progress: 0.55, name: "Ukraine-Moldova Border", icon: "🛂", description: "River forms boundary" },
            { progress: 0.70, name: "Tiraspol", icon: "🏙️", description: "Transnistria capital" },
            { progress: 0.80, name: "Bender Fortress", icon: "🏰", description: "Ottoman fortress" },
            { progress: 0.90, name: "Dniester Liman", icon: "🌊", description: "Coastal lagoon" },
            { progress: 1.0, name: "Black Sea", icon: "🌊", description: "River mouth" }
        ],
        
        economicImportance: [
            "Water supply for Moldova and southern Ukraine",
            "Hydroelectric power (pumped storage)",
            "Irrigation for agriculture",
            "Fishing industry",
            "Navigation (limited)",
            "Wine regions along valley"
        ],
        
        environmentalIssues: [
            "Agricultural runoff and pollution",
            "Industrial waste from Transnistria",
            "Reduced flow from dams",
            "Invasive species",
            "Climate change affecting water levels",
            "Conflict zone limiting management"
        ],
        
        waterDisputes: [
            {
                title: "Ukraine-Moldova Cooperation",
                description: "Both countries coordinate on water management despite Transnistria conflict complicating governance."
            },
            {
                title: "Transnistria Complication",
                description: "The unrecognized region of Transnistria controls part of the river, complicating unified management."
            }
        ],
        
        historicalImportance: [
            {
                title: "Galicia-Volhynia Kingdom",
                description: "The medieval Galician capital Halych on the Dniester was center of a powerful Rus' principality."
            },
            {
                title: "Ottoman-Polish Border",
                description: "The river marked the historic boundary between the Ottoman and Polish-Lithuanian empires."
            },
            {
                title: "Bessarabia History",
                description: "The Dniester defined Bessarabia, disputed between Romania, Russia, and later Soviet Union."
            },
            {
                title: "Akkerman Fortress",
                description: "The ancient fortress at Bilhorod-Dnistrovskyi controlled the river mouth for millennia."
            }
        ]
    },

    // ========================================
    // 72. ALDAN RIVER
    // ========================================
    {
        id: "aldan",
        name: "Aldan River",
        length: 2273,
        continent: "asia",
        image: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=800",
        
        countries: [
            { name: "Russia", flag: "🇷🇺" }
        ],
        
        states: [
            "Sakha Republic (Yakutia)"
        ],
        
        source: {
            location: "Stanovoy Range, Yakutia",
            type: "Mountain streams",
            elevation: "1,100 m",
            coordinates: [56.4500, 130.5000]
        },
        
        mouth: {
            location: "Lena River, near Batamay",
            type: "Confluence",
            delta: "Joins Lena River as major tributary",
            coordinates: [63.4167, 129.5000]
        },
        
        tributaries: {
            leftBank: [
                "Uchur River",
                "Maya River",
                "Allakh-Yun River"
            ],
            rightBank: [
                "Timpton River",
                "Tyry River",
                "Amga River",
                "Tompo River"
            ]
        },
        
        distributaries: [
            "Aldan channels at Lena confluence"
        ],
        
        majorCities: [
            "Tommot", "Aldan", "Ust-Maya", "Khandyga"
        ],
        
        dams: [
            { name: "No major dams", details: "River flows freely through remote taiga" }
        ],
        
        basinArea: "729,000 km²",
        discharge: "5,060 m³/s",
        
        riverPath: [
            [56.45, 130.50],   // Source - Stanovoy Range
            [57.00, 130.00],
            [58.00, 128.50],
            [58.50, 127.00],
            [58.65, 125.51],   // Tommot
            [58.62, 125.39],   // Aldan city
            [59.50, 126.00],
            [60.50, 128.00],
            [60.47, 134.63],   // Ust-Maya
            [61.50, 133.00],
            [62.50, 131.50],
            [62.66, 135.60],   // Khandyga
            [63.00, 131.00],
            [63.42, 129.50]    // Lena River (Mouth)
        ],
        
        tributaryPaths: [
            {
                name: "Maya River",
                path: [
                    [59.00, 137.00],
                    [60.00, 135.00],
                    [60.47, 134.63]    // Confluence at Ust-Maya
                ]
            },
            {
                name: "Amga River",
                path: [
                    [61.00, 131.00],
                    [62.00, 130.00],
                    [63.00, 130.50]    // Confluence
                ]
            },
            {
                name: "Timpton River",
                path: [
                    [57.00, 127.00],
                    [58.00, 126.50],
                    [58.50, 126.00]    // Confluence
                ]
            },
            {
                name: "Uchur River",
                path: [
                    [57.50, 132.00],
                    [58.50, 130.00],
                    [59.50, 128.00]    // Confluence
                ]
            }
        ],
        
        distributaryPaths: [
            {
                name: "Aldan-Lena Confluence",
                path: [
                    [63.35, 129.60],
                    [63.42, 129.50]    // Lena
                ]
            }
        ],
        
        cityCoordinates: [
            { name: "Tommot", coords: [58.97, 126.27] },
            { name: "Aldan", coords: [58.62, 125.39] },
            { name: "Ust-Maya", coords: [60.42, 134.53] },
            { name: "Khandyga", coords: [62.66, 135.60] }
        ],
        
        damCoordinates: [
            { name: "No Major Dams", coords: [59.50, 128.00], details: "Free-flowing river" }
        ],
        
        flightLandmarks: [
            { progress: 0, name: "Stanovoy Range", icon: "🏔️", description: "Mountain source" },
            { progress: 0.15, name: "Gold Mining Region", icon: "⛏️", description: "Historic gold fields" },
            { progress: 0.25, name: "Tommot", icon: "🏘️", description: "Mining town" },
            { progress: 0.30, name: "Aldan City", icon: "🏙️", description: "Regional center" },
            { progress: 0.45, name: "Siberian Taiga", icon: "🌲", description: "Vast boreal forest" },
            { progress: 0.60, name: "Maya Confluence", icon: "🔀", description: "Major tributary" },
            { progress: 0.75, name: "Khandyga", icon: "🏘️", description: "River junction town" },
            { progress: 0.85, name: "Amga Confluence", icon: "🔀", description: "Tributary joins" },
            { progress: 1.0, name: "Lena River", icon: "🌊", description: "Confluence" }
        ],
        
        economicImportance: [
            "Gold mining (Aldan goldfields)",
            "Diamond potential",
            "Largest tributary of Lena River by volume",
            "Seasonal navigation",
            "Fishing (salmon, sturgeon)",
            "Timber resources"
        ],
        
        environmentalIssues: [
            "Gold mining pollution",
            "Climate change affecting permafrost",
            "Wildfires in taiga",
            "Limited environmental monitoring",
            "Oil exploration threats",
            "Changing river ice patterns"
        ],
        
        waterDisputes: [
            {
                title: "No Major Disputes",
                description: "Remote location within single Russian region means minimal water conflicts."
            }
        ],
        
        historicalImportance: [
            {
                title: "Gold Discovery",
                description: "Gold was discovered in 1923, leading to the Aldan gold rush and founding of Aldan city."
            },
            {
                title: "Road of Bones",
                description: "The region was connected by roads built by Gulag prisoners in the Stalin era."
            },
            {
                title: "Indigenous Peoples",
                description: "Traditional territory of Evenk and Yakut peoples who have lived here for centuries."
            },
            {
                title: "Russian Exploration",
                description: "Russian Cossacks explored the Aldan in the 17th century during Siberian expansion."
            }
        ]
    },

    // ========================================
    // 73. IRIRI RIVER
    // ========================================
    {
        id: "iriri",
        name: "Iriri River",
        length: 1300,
        continent: "south-america",
        image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=800",
        
        countries: [
            { name: "Brazil", flag: "🇧🇷" }
        ],
        
        states: [
            "Mato Grosso", "Pará"
        ],
        
        source: {
            location: "Serra do Cachimbo, Mato Grosso, Brazil",
            type: "Highland streams",
            elevation: "400 m",
            coordinates: [-9.0000, -54.5000]
        },
        
        mouth: {
            location: "Xingu River, Pará",
            type: "Confluence",
            delta: "Joins Xingu River upstream of Belo Monte",
            coordinates: [-3.8000, -52.5000]
        },
        
        tributaries: {
            leftBank: [
                "Rio Curuá",
                "Rio Novo"
            ],
            rightBank: [
                "Rio Iriri Novo",
                "Rio Baú"
            ]
        },
        
        distributaries: [
            "Iriri channels at Xingu confluence"
        ],
        
        majorCities: [
            "Altamira (nearby)", "São Félix do Xingu (nearby)"
        ],
        
        dams: [
            { name: "No dams", details: "Free-flowing tributary of Xingu" }
        ],
        
        basinArea: "54,000 km²",
        discharge: "1,100 m³/s",
        
        riverPath: [
            [-9.00, -54.50],   // Source - Serra do Cachimbo
            [-8.50, -54.30],
            [-8.00, -54.00],
            [-7.50, -53.80],
            [-7.00, -53.50],
            [-6.50, -53.30],
            [-6.00, -53.00],
            [-5.50, -52.80],
            [-5.00, -52.70],
            [-4.50, -52.60],
            [-4.00, -52.55],
            [-3.80, -52.50]    // Xingu River (Mouth)
        ],
        
        tributaryPaths: [
            {
                name: "Rio Curuá",
                path: [
                    [-7.00, -55.00],
                    [-6.50, -54.00],
                    [-6.00, -53.50]    // Confluence
                ]
            },
            {
                name: "Rio Novo",
                path: [
                    [-6.50, -55.50],
                    [-6.00, -54.50],
                    [-5.50, -53.50]    // Confluence
                ]
            },
            {
                name: "Rio Baú",
                path: [
                    [-6.00, -52.50],
                    [-5.50, -52.60],
                    [-5.00, -52.65]    // Confluence
                ]
            }
        ],
        
        distributaryPaths: [
            {
                name: "Iriri-Xingu Junction",
                path: [
                    [-3.85, -52.52],
                    [-3.80, -52.50]    // Xingu
                ]
            }
        ],
        
        cityCoordinates: [
            { name: "Altamira", coords: [-3.20, -52.21] },
            { name: "São Félix do Xingu", coords: [-6.64, -51.99] }
        ],
        
        damCoordinates: [
            { name: "No Dams", coords: [-5.50, -53.00], details: "Free-flowing Amazon tributary" }
        ],
        
        flightLandmarks: [
            { progress: 0, name: "Serra do Cachimbo", icon: "🏔️", description: "Source highlands" },
            { progress: 0.15, name: "Mato Grosso Headwaters", icon: "🌳", description: "Cerrado-forest transition" },
            { progress: 0.30, name: "Terra do Meio", icon: "🌳", description: "Protected area" },
            { progress: 0.45, name: "Indigenous Territories", icon: "🏘️", description: "Kayapó and others" },
            { progress: 0.60, name: "Rainforest", icon: "🌳", description: "Dense Amazon forest" },
            { progress: 0.75, name: "Rio Curuá Confluence", icon: "🔀", description: "Tributary joins" },
            { progress: 0.90, name: "Lower Iriri", icon: "🏞️", description: "Wide river" },
            { progress: 1.0, name: "Xingu River", icon: "🌊", description: "Confluence" }
        ],
        
        economicImportance: [
            "Major tributary of Xingu River",
            "Part of Amazon basin",
            "Indigenous subsistence",
            "Brazil nut collection",
            "Fishing communities",
            "Ecotourism potential"
        ],
        
        environmentalIssues: [
            "Deforestation pressure",
            "Illegal logging",
            "Gold mining (garimpo) contamination",
            "Fire impacts from clearing",
            "Climate change",
            "Access roads bringing destruction"
        ],
        
        waterDisputes: [
            {
                title: "Indigenous Rights",
                description: "Indigenous communities defend territories against logging, mining, and dam proposals."
            },
            {
                title: "Belo Monte Impacts",
                description: "Downstream Belo Monte Dam affects the Xingu-Iriri system's hydrology."
            }
        ],
        
        historicalImportance: [
            {
                title: "Indigenous Homeland",
                description: "Traditional territory of Kayapó, Arara, and other indigenous peoples."
            },
            {
                title: "Terra do Meio",
                description: "The region between the Iriri and Xingu is one of the most biodiverse areas in the Amazon."
            },
            {
                title: "Rubber Era",
                description: "The region was exploited during the Amazon rubber boom of the late 19th century."
            },
            {
                title: "Recent Frontier",
                description: "One of the last Amazon frontiers opened by BR-163 highway construction."
            }
        ]
    },

    // ========================================
    // 74. FRASER RIVER
    // ========================================
    {
        id: "fraser",
        name: "Fraser River",
        length: 1375,
        continent: "north-america",
        image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800",
        
        countries: [
            { name: "Canada", flag: "🇨🇦" }
        ],
        
        states: [
            "British Columbia"
        ],
        
        source: {
            location: "Mount Robson Provincial Park, Rocky Mountains",
            type: "Glacial (Fraser Pass)",
            elevation: "1,370 m",
            coordinates: [52.6250, -118.4417]
        },
        
        mouth: {
            location: "Strait of Georgia, Pacific Ocean, near Vancouver",
            type: "Delta",
            delta: "Fraser River Delta - largest estuary on Pacific coast",
            coordinates: [49.1167, -123.1833]
        },
        
        tributaries: {
            leftBank: [
                "McGregor River",
                "Quesnel River",
                "Chilcotin River",
                "Bridge River"
            ],
            rightBank: [
                "Nechako River",
                "West Road River",
                "Thompson River",
                "Harrison River",
                "Pitt River"
            ]
        },
        
        distributaries: [
            "North Arm",
            "Middle Arm",
            "South Arm (Main Channel)",
            "Canoe Pass"
        ],
        
        majorCities: [
            "Prince George", "Quesnel", "Williams Lake",
            "Lillooet", "Hope", "Chilliwack", "Mission",
            "New Westminster", "Vancouver", "Richmond"
        ],
        
        dams: [
            { name: "No dams on main stem", details: "Main river is free-flowing for salmon" },
            { name: "Kenney Dam", details: "On Nechako tributary, 1952, controversial" },
            { name: "WAC Bennett Dam", details: "On Peace tributary (different basin)" }
        ],
        
        basinArea: "233,100 km²",
        discharge: "3,475 m³/s",
        
        riverPath: [
            [52.63, -118.44],   // Source - Mount Robson
            [53.00, -119.50],
            [53.50, -120.50],
            [53.92, -122.75],   // Prince George
            [53.00, -122.50],
            [52.98, -122.49],   // Quesnel
            [52.13, -122.14],   // Williams Lake
            [51.50, -122.00],
            [50.69, -121.94],   // Lillooet
            [50.50, -121.50],
            [49.90, -121.70],
            [49.38, -121.44],   // Hope
            [49.20, -121.80],   // Chilliwack
            [49.15, -122.50],
            [49.20, -122.91],   // New Westminster
            [49.12, -123.18]    // Strait of Georgia (Mouth)
        ],
        
        tributaryPaths: [
            {
                name: "Thompson River",
                path: [
                    [51.00, -119.50],  // Kamloops
                    [50.60, -120.50],
                    [50.20, -121.20],
                    [50.05, -121.45]   // Confluence at Lytton
                ]
            },
            {
                name: "Nechako River",
                path: [
                    [54.00, -125.00],  // Nechako Reservoir
                    [54.00, -123.00],
                    [53.92, -122.75]   // Confluence at Prince George
                ]
            },
            {
                name: "Quesnel River",
                path: [
                    [52.50, -121.00],  // Quesnel Lake
                    [52.80, -122.00],
                    [52.98, -122.49]   // Confluence
                ]
            },
            {
                name: "Chilcotin River",
                path: [
                    [52.00, -124.50],
                    [52.00, -123.00],
                    [52.00, -122.30]   // Confluence
                ]
            }
        ],
        
        distributaryPaths: [
            {
                name: "South Arm (Main)",
                path: [
                    [49.15, -123.00],
                    [49.12, -123.18]   // Strait of Georgia
                ]
            },
            {
                name: "North Arm",
                path: [
                    [49.18, -123.00],
                    [49.20, -123.20]   // Burrard Inlet
                ]
            },
            {
                name: "Middle Arm",
                path: [
                    [49.17, -123.05],
                    [49.18, -123.15]   // Between Sea Island
                ]
            }
        ],
        
        cityCoordinates: [
            { name: "Prince George", coords: [53.92, -122.75] },
            { name: "Quesnel", coords: [52.98, -122.49] },
            { name: "Williams Lake", coords: [52.13, -122.14] },
            { name: "Lillooet", coords: [50.69, -121.94] },
            { name: "Hope", coords: [49.38, -121.44] },
            { name: "Chilliwack", coords: [49.17, -121.95] },
            { name: "New Westminster", coords: [49.21, -122.91] },
            { name: "Vancouver", coords: [49.28, -123.12] },
            { name: "Richmond", coords: [49.17, -123.14] }
        ],
        
        damCoordinates: [
            { name: "No Main Stem Dams", coords: [51.00, -122.00], details: "Free-flowing for salmon" },
            { name: "Kenney Dam (Nechako)", coords: [53.97, -125.05], details: "Controversial tributary dam" }
        ],
        
        flightLandmarks: [
            { progress: 0, name: "Mount Robson", icon: "🏔️", description: "Highest Canadian Rockies peak" },
            { progress: 0.12, name: "Rocky Mountain Trench", icon: "🏞️", description: "Major valley" },
            { progress: 0.25, name: "Prince George", icon: "🏙️", description: "Northern BC hub" },
            { progress: 0.35, name: "Quesnel", icon: "🏘️", description: "Cariboo Gold Rush" },
            { progress: 0.50, name: "Fraser Canyon", icon: "🏜️", description: "Dramatic gorge" },
            { progress: 0.60, name: "Lytton", icon: "🔀", description: "Thompson confluence" },
            { progress: 0.70, name: "Hell's Gate", icon: "🌊", description: "Narrowest canyon point" },
            { progress: 0.80, name: "Hope", icon: "🏘️", description: "Canyon gateway" },
            { progress: 0.90, name: "Fraser Valley", icon: "🌾", description: "Agricultural lowlands" },
            { progress: 1.0, name: "Strait of Georgia", icon: "🌊", description: "Pacific Ocean" }
        ],
        
        economicImportance: [
            "World's greatest salmon river",
            "British Columbia's longest river",
            "No dams on main stem (rare for major river)",
            "Agriculture in Fraser Valley",
            "Port Metro Vancouver shipping",
            "Recreation and tourism"
        ],
        
        environmentalIssues: [
            "Salmon population decline",
            "Urban development pressure",
            "Agricultural runoff",
            "Fraser Valley flooding",
            "Climate change affecting salmon",
            "Historic Hell's Gate slide impacts"
        ],
        
        waterDisputes: [
            {
                title: "Salmon Conservation",
                description: "Balancing fishing, development, and conservation of declining salmon runs is ongoing."
            },
            {
                title: "First Nations Rights",
                description: "Indigenous peoples assert fishing rights and oppose projects threatening salmon."
            }
        ],
        
        historicalImportance: [
            {
                title: "Simon Fraser",
                description: "Explorer Simon Fraser navigated the treacherous river in 1808, giving it his name."
            },
            {
                title: "Cariboo Gold Rush",
                description: "The 1858 Fraser Canyon Gold Rush brought thousands of miners, founding British Columbia."
            },
            {
                title: "CPR Construction",
                description: "The Canadian Pacific Railway was built through Fraser Canyon in the 1880s, an engineering marvel."
            },
            {
                title: "Hell's Gate Disaster",
                description: "Railway construction in 1913 caused a rockslide that devastated salmon runs for decades."
            }
        ]
    },

    // ========================================
    // 75. HELMAND RIVER
    // ========================================
    {
        id: "helmand",
        name: "Helmand River",
        length: 1150,
        continent: "asia",
        image: "https://images.unsplash.com/photo-1579606032821-4e6161c81bd3?w=800",
        
        countries: [
            { name: "Afghanistan", flag: "🇦🇫" },
            { name: "Iran", flag: "🇮🇷" }
        ],
        
        states: [
            "Bamyan Province", "Daykundi Province", "Uruzgan Province",
            "Helmand Province", "Nimruz Province", "Sistan-Baluchestan Province"
        ],
        
        source: {
            location: "Hindu Kush Mountains, near Unai Pass",
            type: "Mountain streams",
            elevation: "3,350 m",
            coordinates: [34.5833, 67.7500]
        },
        
        mouth: {
            location: "Hamun-i-Helmand Lake, Sistan, Iran/Afghanistan",
            type: "Inland delta/Terminal lake",
            delta: "Sistan Delta - seasonally flooded wetlands",
            coordinates: [30.9000, 61.6000]
        },
        
        tributaries: {
            leftBank: [
                "Tirin River",
                "Arghandab River",
                "Khash River"
            ],
            rightBank: [
                "Kajaki River",
                "Musa Qala River"
            ]
        },
        
        distributaries: [
            "Rud-i-Sistan",
            "Shelah River",
            "Hamun-i-Helmand channels"
        ],
        
        majorCities: [
            "Kajaki", "Sangin", "Gereshk", "Lashkar Gah",
            "Zaranj", "Zabol"
        ],
        
        dams: [
            { name: "Kajaki Dam", details: "Afghanistan, 33 MW, 1953, US-built" },
            { name: "Arghandab Dam", details: "Afghanistan, on tributary, 1952" },
            { name: "Kamal Khan Dam", details: "Afghanistan, 2021, controversial" }
        ],
        
        basinArea: "350,000 km²",
        discharge: "140 m³/s (highly seasonal)",
        
        riverPath: [
            [34.58, 67.75],    // Source - Hindu Kush
            [34.00, 67.50],
            [33.50, 67.00],
            [33.00, 66.00],
            [32.50, 65.50],
            [32.20, 65.11],    // Kajaki Dam
            [32.00, 64.50],
            [31.83, 64.23],    // Gereshk
            [31.59, 64.35],    // Lashkar Gah
            [31.00, 63.50],
            [30.50, 62.50],
            [31.03, 61.87],    // Zaranj area
            [30.90, 61.60]     // Hamun-i-Helmand (Mouth)
        ],
        
        tributaryPaths: [
            {
                name: "Arghandab River",
                path: [
                    [31.62, 65.72],    // Kandahar
                    [31.50, 65.00],
                    [31.30, 64.50]     // Confluence
                ]
            },
            {
                name: "Tirin River",
                path: [
                    [33.00, 65.00],
                    [32.50, 65.00],
                    [32.30, 65.30]     // Confluence
                ]
            },
            {
                name: "Khash River",
                path: [
                    [30.50, 64.00],
                    [30.70, 63.00],
                    [30.80, 62.50]     // Confluence
                ]
            }
        ],
        
        distributaryPaths: [
            {
                name: "Sistan Delta",
                path: [
                    [30.95, 61.70],
                    [30.90, 61.60]     // Hamun-i-Helmand
                ]
            },
            {
                name: "Rud-i-Sistan",
                path: [
                    [31.00, 61.50],
                    [31.10, 61.30]     // To Hamun-i-Saberi
                ]
            }
        ],
        
        cityCoordinates: [
            { name: "Kajaki", coords: [32.30, 65.11] },
            { name: "Sangin", coords: [32.07, 64.84] },
            { name: "Gereshk", coords: [31.83, 64.57] },
            { name: "Lashkar Gah", coords: [31.59, 64.35] },
            { name: "Zaranj", coords: [30.96, 61.87] },
            { name: "Zabol", coords: [31.03, 61.49] }
        ],
        
        damCoordinates: [
            { name: "Kajaki Dam", coords: [32.33, 65.10], details: "33 MW - US-built 1953" },
            { name: "Kamal Khan Dam", coords: [31.05, 61.75], details: "2021 - Controversial, affects Iran" }
        ],
        
        flightLandmarks: [
            { progress: 0, name: "Hindu Kush", icon: "🏔️", description: "Mountain source" },
            { progress: 0.15, name: "Bamiyan Region", icon: "🏛️", description: "Buddha statue site nearby" },
            { progress: 0.30, name: "Kajaki Dam", icon: "🏗️", description: "US-built dam" },
            { progress: 0.40, name: "Sangin", icon: "🏘️", description: "Historic conflict zone" },
            { progress: 0.50, name: "Gereshk", icon: "🏙️", description: "Agricultural hub" },
            { progress: 0.55, name: "Lashkar Gah", icon: "🏙️", description: "Helmand capital" },
            { progress: 0.70, name: "Dasht-i-Margo Desert", icon: "🏜️", description: "Desert crossing" },
            { progress: 0.85, name: "Kamal Khan Dam", icon: "🏗️", description: "Controversial new dam" },
            { progress: 0.95, name: "Sistan Wetlands", icon: "🌿", description: "Terminal lakes" },
            { progress: 1.0, name: "Hamun-i-Helmand", icon: "🌊", description: "Terminal lake" }
        ],
        
        economicImportance: [
            "Afghanistan's longest river",
            "Irrigation for Helmand Valley agriculture",
            "Hydroelectric power (Kajaki)",
            "Opium poppy cultivation (controversial)",
            "Livestock watering",
            "Sistan wetlands biodiversity"
        ],
        
        environmentalIssues: [
            "Drought and water scarcity",
            "Afghan dams reducing flow to Iran",
            "Sistan wetlands drying",
            "Climate change impacts",
            "War damage to infrastructure",
            "Desertification in lower reaches"
        ],
        
        waterDisputes: [
            {
                title: "Afghanistan-Iran Water Dispute",
                description: "Iran claims Afghanistan violates the 1973 Helmand River Treaty by not releasing agreed water; Kamal Khan Dam escalated tensions."
            },
            {
                title: "Sistan Crisis",
                description: "The Sistan region in Iran faces severe water shortages as Afghan dams and drought reduce Helmand flows."
            }
        ],
        
        historicalImportance: [
            {
                title: "Ancient Sistan",
                description: "The Helmand basin was home to ancient civilizations including Shahr-i-Sokhta (3rd millennium BCE)."
            },
            {
                title: "Helmand Valley Authority",
                description: "1950s US-led development project modeled on TVA, including Kajaki Dam construction."
            },
            {
                title: "Soviet-Afghan War",
                description: "The Helmand Valley was a major battleground during the 1979-1989 Soviet war."
            },
            {
                title: "Taliban Stronghold",
                description: "Helmand Province was the Taliban's main stronghold and center of the opium trade after 2001."
            }
        ]
    },
      // ========================================
    // 76. NEGRO RIVER (ARGENTINA)
    // ========================================
    {
        id: "negro-argentina",
        name: "Río Negro",
        length: 1091,
        continent: "south-america",
        image: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=800",
        
        countries: [
            { name: "Argentina", flag: "🇦🇷" }
        ],
        
        states: [
            "Neuquén Province", "Río Negro Province", "Buenos Aires Province"
        ],
        
        source: {
            location: "Confluence of Neuquén and Limay Rivers, near Neuquén City",
            type: "River confluence",
            elevation: "271 m",
            coordinates: [-38.9500, -68.1000]
        },
        
        mouth: {
            location: "Atlantic Ocean, at Viedma/Carmen de Patagones",
            type: "Estuary",
            delta: "Río Negro estuary",
            coordinates: [-41.0333, -62.8000]
        },
        
        tributaries: {
            leftBank: [
                "Neuquén River",
                "Pichi Leufú"
            ],
            rightBank: [
                "Limay River",
                "Chico River (Río Chico)"
            ]
        },
        
        distributaries: [
            "Río Negro estuary channels"
        ],
        
        majorCities: [
            "Neuquén", "Cipolletti", "General Roca", "Villa Regina",
            "Choele Choel", "Viedma", "Carmen de Patagones"
        ],
        
        dams: [
            { name: "El Chocón Dam", details: "Neuquén, 1,200 MW, 1973, on Limay" },
            { name: "Piedra del Águila Dam", details: "Neuquén, 1,400 MW, 1993, on Limay" },
            { name: "Alicurá Dam", details: "Neuquén, 1,000 MW, 1985, on Limay" },
            { name: "Arroyito Dam", details: "Neuquén, 128 MW, 1983, on Limay" },
            { name: "Cerros Colorados Complex", details: "Neuquén, on Neuquén River" }
        ],
        
        basinArea: "130,000 km²",
        discharge: "1,014 m³/s",
        
        riverPath: [
            [-38.95, -68.10],   // Source - Neuquén-Limay confluence
            [-39.00, -67.50],
            [-39.03, -67.08],   // Cipolletti
            [-39.03, -67.59],   // General Roca
            [-39.20, -66.50],
            [-39.27, -65.61],   // Choele Choel
            [-39.50, -65.00],
            [-40.00, -64.00],
            [-40.50, -63.50],
            [-40.80, -63.00],
            [-40.82, -62.97],   // Viedma
            [-41.03, -62.80]    // Atlantic Ocean (Mouth)
        ],
        
        tributaryPaths: [
            {
                name: "Neuquén River",
                path: [
                    [-37.00, -70.50],  // Andes
                    [-38.00, -69.50],
                    [-38.95, -68.05],  // Neuquén city
                    [-38.95, -68.10]   // Confluence
                ]
            },
            {
                name: "Limay River",
                path: [
                    [-40.50, -71.30],  // Nahuel Huapi Lake
                    [-40.00, -70.50],
                    [-39.50, -69.00],
                    [-38.95, -68.10]   // Confluence
                ]
            }
        ],
        
        distributaryPaths: [
            {
                name: "Río Negro Estuary",
                path: [
                    [-40.90, -62.90],
                    [-41.03, -62.80]   // Atlantic Ocean
                ]
            }
        ],
        
        cityCoordinates: [
            { name: "Neuquén", coords: [-38.95, -68.06] },
            { name: "Cipolletti", coords: [-38.94, -67.99] },
            { name: "General Roca", coords: [-39.03, -67.59] },
            { name: "Villa Regina", coords: [-39.10, -67.07] },
            { name: "Choele Choel", coords: [-39.29, -65.66] },
            { name: "Viedma", coords: [-40.82, -62.97] },
            { name: "Carmen de Patagones", coords: [-40.80, -62.98] }
        ],
        
        damCoordinates: [
            { name: "El Chocón Dam", coords: [-39.25, -68.77], details: "1,200 MW - Limay River" },
            { name: "Piedra del Águila Dam", coords: [-40.05, -70.08], details: "1,400 MW - Limay" },
            { name: "Alicurá Dam", coords: [-40.60, -70.65], details: "1,000 MW - Limay" }
        ],
        
        flightLandmarks: [
            { progress: 0, name: "Neuquén-Limay Confluence", icon: "🔀", description: "River formation" },
            { progress: 0.08, name: "Neuquén City", icon: "🏙️", description: "Provincial capital" },
            { progress: 0.15, name: "Alto Valle", icon: "🍎", description: "Apple & pear orchards" },
            { progress: 0.25, name: "General Roca", icon: "🏙️", description: "Fruit capital" },
            { progress: 0.35, name: "Valle Medio", icon: "🌾", description: "Agricultural valley" },
            { progress: 0.50, name: "Choele Choel", icon: "🏝️", description: "River island region" },
            { progress: 0.65, name: "Lower Valley", icon: "🏞️", description: "Patagonian steppe" },
            { progress: 0.80, name: "Valle Inferior", icon: "🌾", description: "Estuary agriculture" },
            { progress: 0.95, name: "Viedma", icon: "🏙️", description: "Río Negro capital" },
            { progress: 1.0, name: "Atlantic Ocean", icon: "🌊", description: "River mouth" }
        ],
        
        economicImportance: [
            "Argentina's most important Patagonian river",
            "Irrigated fruit production (apples, pears, grapes)",
            "Hydroelectric power (Limay cascade)",
            "Wine production (Neuquén region)",
            "Oil and gas industry water supply",
            "Tourism (lakes region upstream)"
        ],
        
        environmentalIssues: [
            "Agricultural runoff",
            "Industrial pollution",
            "Reduced flows from dams",
            "Invasive species (didymo algae)",
            "Climate change affecting snowpack",
            "Water extraction for oil/gas"
        ],
        
        waterDisputes: [
            {
                title: "Provincial Water Sharing",
                description: "Neuquén, Río Negro, and Buenos Aires provinces coordinate water allocation from the system."
            },
            {
                title: "Dam Operations",
                description: "Balancing hydroelectric generation with irrigation needs requires ongoing negotiation."
            }
        ],
        
        historicalImportance: [
            {
                title: "Mapuche Territory",
                description: "Traditional homeland of Mapuche and Tehuelche peoples before European colonization."
            },
            {
                title: "Conquest of the Desert",
                description: "The 1879-1884 military campaign brought the Río Negro under Argentine control."
            },
            {
                title: "Fruit Industry",
                description: "The Alto Valle was developed for fruit production in the early 20th century with irrigation."
            },
            {
                title: "Dinosaur Discoveries",
                description: "The Neuquén basin has yielded major dinosaur fossils including Argentinosaurus."
            }
        ]
    },

    // ========================================
    // 77. OTTAWA RIVER
    // ========================================
    {
        id: "ottawa",
        name: "Ottawa River",
        length: 1271,
        continent: "north-america",
        image: "https://images.unsplash.com/photo-1504893524553-b855bce32c67?w=800",
        
        countries: [
            { name: "Canada", flag: "🇨🇦" }
        ],
        
        states: [
            "Quebec", "Ontario"
        ],
        
        source: {
            location: "Lake Capimitchigama, Laurentian Highlands, Quebec",
            type: "Lake outlet",
            elevation: "370 m",
            coordinates: [47.5167, -76.5000]
        },
        
        mouth: {
            location: "St. Lawrence River, at Lake of Two Mountains",
            type: "Confluence",
            delta: "Multiple channels around Île-de-Montréal",
            coordinates: [45.5167, -73.9167]
        },
        
        tributaries: {
            leftBank: [
                "Dumoine River",
                "Noire River",
                "Coulonge River",
                "Gatineau River",
                "Lièvre River",
                "Rouge River",
                "North River"
            ],
            rightBank: [
                "Mattawa River",
                "Petawawa River",
                "Bonnechere River",
                "Madawaska River",
                "Mississippi River",
                "Rideau River",
                "South Nation River"
            ]
        },
        
        distributaries: [
            "Rivière des Prairies",
            "Lake of Two Mountains outlet",
            "Ottawa River main channel"
        ],
        
        majorCities: [
            "Temiscaming", "Mattawa", "Pembroke", "Arnprior",
            "Ottawa", "Gatineau", "Hull", "Hawkesbury"
        ],
        
        dams: [
            { name: "Des Joachims Dam", details: "Ontario, 429 MW, 1950" },
            { name: "Chenaux Dam", details: "Ontario, 144 MW, 1951" },
            { name: "Chaudière Falls Dam", details: "Ottawa, 125 MW, historic" },
            { name: "Carillon Dam", details: "Quebec, 752 MW, 1962" }
        ],
        
        basinArea: "146,300 km²",
        discharge: "1,950 m³/s",
        
        riverPath: [
            [47.52, -76.50],   // Source - Lake Capimitchigama
            [47.00, -77.00],
            [46.50, -77.50],
            [46.72, -79.10],   // Temiscaming
            [46.32, -78.73],   // Mattawa
            [45.82, -77.12],   // Pembroke
            [45.50, -76.50],
            [45.44, -76.37],   // Arnprior
            [45.42, -75.70],   // Ottawa/Gatineau
            [45.50, -74.80],
            [45.55, -74.37],   // Hawkesbury
            [45.52, -73.92]    // St. Lawrence River (Mouth)
        ],
        
        tributaryPaths: [
            {
                name: "Gatineau River",
                path: [
                    [47.50, -76.00],
                    [46.50, -75.80],
                    [45.48, -75.71]    // Confluence at Gatineau
                ]
            },
            {
                name: "Rideau River",
                path: [
                    [44.60, -76.50],   // Rideau Lakes
                    [45.00, -75.80],
                    [45.42, -75.70]    // Confluence at Ottawa
                ]
            },
            {
                name: "Madawaska River",
                path: [
                    [45.20, -77.50],
                    [45.35, -76.80],
                    [45.44, -76.37]    // Confluence at Arnprior
                ]
            },
            {
                name: "Petawawa River",
                path: [
                    [46.00, -78.50],
                    [45.90, -77.50],
                    [45.90, -77.28]    // Confluence
                ]
            }
        ],
        
        distributaryPaths: [
            {
                name: "Rivière des Prairies",
                path: [
                    [45.55, -73.95],
                    [45.60, -73.50]    // Around Montreal Island
                ]
            },
            {
                name: "Lake of Two Mountains",
                path: [
                    [45.52, -73.92],
                    [45.50, -73.90]    // St. Lawrence
                ]
            }
        ],
        
        cityCoordinates: [
            { name: "Temiscaming", coords: [46.72, -79.10] },
            { name: "Mattawa", coords: [46.32, -78.73] },
            { name: "Pembroke", coords: [45.82, -77.12] },
            { name: "Arnprior", coords: [45.44, -76.36] },
            { name: "Ottawa", coords: [45.42, -75.70] },
            { name: "Gatineau", coords: [45.48, -75.71] },
            { name: "Hawkesbury", coords: [45.61, -74.61] }
        ],
        
        damCoordinates: [
            { name: "Carillon Dam", coords: [45.57, -74.38], details: "752 MW hydroelectric" },
            { name: "Des Joachims Dam", coords: [46.18, -77.70], details: "429 MW hydroelectric" },
            { name: "Chaudière Falls", coords: [45.42, -75.72], details: "Historic falls, multiple dams" }
        ],
        
        flightLandmarks: [
            { progress: 0, name: "Laurentian Highlands", icon: "🏔️", description: "Source lakes" },
            { progress: 0.15, name: "Upper Ottawa", icon: "🌲", description: "Remote wilderness" },
            { progress: 0.25, name: "Temiscaming", icon: "🏘️", description: "Historic lumber town" },
            { progress: 0.35, name: "Mattawa", icon: "🔀", description: "Voyageur junction" },
            { progress: 0.45, name: "Pembroke", icon: "🏙️", description: "Lumber heritage" },
            { progress: 0.55, name: "Petawawa", icon: "🪖", description: "Military base" },
            { progress: 0.70, name: "Chaudière Falls", icon: "💧", description: "Historic portage" },
            { progress: 0.75, name: "Ottawa-Gatineau", icon: "🏙️", description: "National Capital" },
            { progress: 0.85, name: "Carillon Dam", icon: "🏗️", description: "Major dam" },
            { progress: 1.0, name: "St. Lawrence River", icon: "🌊", description: "Confluence" }
        ],
        
        economicImportance: [
            "Forms Ontario-Quebec boundary for 400+ km",
            "Major tributary of St. Lawrence",
            "Hydroelectric power generation",
            "Lumber industry history",
            "National Capital Region water supply",
            "Recreation and tourism"
        ],
        
        environmentalIssues: [
            "Dam impacts on fish migration",
            "Historic logging debris in riverbed",
            "Agricultural and urban runoff",
            "Invasive species",
            "Flooding management challenges",
            "Climate change affecting water levels"
        ],
        
        waterDisputes: [
            {
                title: "Ontario-Quebec Boundary",
                description: "The river forms the provincial boundary, requiring coordination on water management."
            },
            {
                title: "Flood Management",
                description: "Spring flooding in Ottawa-Gatineau region requires coordinated reservoir management."
            }
        ],
        
        historicalImportance: [
            {
                title: "Voyageur Highway",
                description: "The Ottawa was the main route for French fur traders traveling to the interior from Montreal."
            },
            {
                title: "Timber Trade",
                description: "Giant timber rafts floated down the Ottawa to Quebec, making it a center of the lumber industry."
            },
            {
                title: "Rideau Canal",
                description: "The canal was built (1826-1832) to provide a military route bypassing the Ottawa near the US border."
            },
            {
                title: "Capital Selection",
                description: "Queen Victoria chose Ottawa as capital (1857) partly because the river provided a defensible boundary."
            }
        ]
    },

    // ========================================
    // 78. MAHANADI RIVER
    // ========================================
    {
        id: "mahanadi",
        name: "Mahanadi River",
        length: 858,
        continent: "asia",
        image: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=800",
        
        countries: [
            { name: "India", flag: "🇮🇳" }
        ],
        
        states: [
            "Chhattisgarh", "Odisha"
        ],
        
        source: {
            location: "Sihawa Mountain, near Pharsia, Chhattisgarh",
            type: "Highland springs",
            elevation: "442 m",
            coordinates: [20.7833, 82.0333]
        },
        
        mouth: {
            location: "Bay of Bengal, Odisha",
            type: "Delta",
            delta: "Mahanadi Delta - 9,000 km², major rice region",
            coordinates: [20.3000, 86.7500]
        },
        
        tributaries: {
            leftBank: [
                "Seonath River",
                "Hasdeo River",
                "Mand River"
            ],
            rightBank: [
                "Ong River",
                "Tel River",
                "Jonk River"
            ]
        },
        
        distributaries: [
            "Birupa River",
            "Chitroptala River",
            "Luna River",
            "Devi River"
        ],
        
        majorCities: [
            "Raipur", "Bilaspur", "Sambalpur", "Cuttack",
            "Bhubaneswar", "Puri", "Paradip"
        ],
        
        dams: [
            { name: "Hirakud Dam", details: "Odisha, 307 MW, 1957, one of world's longest" },
            { name: "Gangrel Dam", details: "Chhattisgarh, 10 MW, 1979" },
            { name: "Ravishankar Sagar", details: "Chhattisgarh, on Mahanadi" },
            { name: "Dudhawa Dam", details: "Chhattisgarh, 1964" }
        ],
        
        basinArea: "141,600 km²",
        discharge: "2,119 m³/s",
        
        riverPath: [
            [20.78, 82.03],    // Source - Sihawa
            [21.00, 82.50],
            [21.25, 82.13],    // Raipur area
            [21.50, 82.50],
            [21.90, 82.15],    // Bilaspur area
            [21.50, 83.50],
            [21.47, 83.98],    // Sambalpur
            [21.25, 84.50],
            [20.75, 84.80],
            [20.47, 85.88],    // Cuttack
            [20.30, 86.75]     // Bay of Bengal (Mouth)
        ],
        
        tributaryPaths: [
            {
                name: "Tel River",
                path: [
                    [19.50, 83.00],
                    [20.00, 83.50],
                    [20.50, 83.80]     // Confluence
                ]
            },
            {
                name: "Seonath River",
                path: [
                    [22.00, 81.00],
                    [21.50, 81.80],
                    [21.30, 82.00]     // Confluence
                ]
            },
            {
                name: "Hasdeo River",
                path: [
                    [23.00, 82.50],
                    [22.00, 82.50],
                    [21.80, 82.30]     // Confluence
                ]
            },
            {
                name: "Ong River",
                path: [
                    [21.50, 84.00],
                    [21.00, 84.50],
                    [20.80, 84.70]     // Confluence
                ]
            }
        ],
        
        distributaryPaths: [
            {
                name: "Birupa River",
                path: [
                    [20.47, 85.88],
                    [20.50, 86.20],
                    [20.45, 86.50]     // Bay of Bengal
                ]
            },
            {
                name: "Devi River",
                path: [
                    [20.40, 86.00],
                    [20.10, 86.30]     // Bay of Bengal
                ]
            }
        ],
        
        cityCoordinates: [
            { name: "Raipur", coords: [21.25, 81.63] },
            { name: "Bilaspur", coords: [22.08, 82.15] },
            { name: "Sambalpur", coords: [21.47, 83.98] },
            { name: "Cuttack", coords: [20.47, 85.88] },
            { name: "Bhubaneswar", coords: [20.30, 85.82] },
            { name: "Puri", coords: [19.81, 85.82] },
            { name: "Paradip", coords: [20.32, 86.61] }
        ],
        
        damCoordinates: [
            { name: "Hirakud Dam", coords: [21.52, 83.87], details: "307 MW - One of world's longest dams" },
            { name: "Gangrel Dam", coords: [20.65, 81.73], details: "10 MW hydroelectric" },
            { name: "Ravishankar Sagar", coords: [20.80, 81.60], details: "Major reservoir" }
        ],
        
        flightLandmarks: [
            { progress: 0, name: "Sihawa Mountain", icon: "🏔️", description: "Source springs" },
            { progress: 0.12, name: "Raipur", icon: "🏙️", description: "Chhattisgarh capital" },
            { progress: 0.25, name: "Gangrel Dam", icon: "🏗️", description: "Chhattisgarh dam" },
            { progress: 0.35, name: "Seonath Confluence", icon: "🔀", description: "Major tributary" },
            { progress: 0.50, name: "Sambalpur", icon: "🏙️", description: "Odisha city" },
            { progress: 0.55, name: "Hirakud Dam", icon: "🏗️", description: "One of world's longest" },
            { progress: 0.70, name: "Hirakud Reservoir", icon: "🌊", description: "Huge reservoir" },
            { progress: 0.85, name: "Cuttack", icon: "🏙️", description: "Silver city of India" },
            { progress: 0.95, name: "Mahanadi Delta", icon: "🌿", description: "Rice bowl of Odisha" },
            { progress: 1.0, name: "Bay of Bengal", icon: "🌊", description: "River mouth" }
        ],
        
        economicImportance: [
            "Major river of central-eastern India",
            "Irrigation for rice cultivation",
            "Hirakud Dam - flood control and power",
            "Industrial water supply",
            "Paradip Port and shipping",
            "Fishing industry"
        ],
        
        environmentalIssues: [
            "Industrial pollution from mining",
            "Sand mining impacts",
            "Reduced sediment to delta",
            "Flooding during monsoon",
            "Water quality degradation",
            "Climate change affecting rainfall"
        ],
        
        waterDisputes: [
            {
                title: "Chhattisgarh-Odisha Dispute",
                description: "Ongoing disputes over water sharing, with Odisha opposing new Chhattisgarh dams and barrages."
            },
            {
                title: "Mahanadi Water Disputes Tribunal",
                description: "Tribunal established 2018 to resolve interstate water allocation issues."
            }
        ],
        
        historicalImportance: [
            {
                title: "Ancient Kalinga",
                description: "The Mahanadi delta was heart of ancient Kalinga kingdom, conquered by Ashoka in 261 BCE."
            },
            {
                title: "Hirakud Dam",
                description: "One of independent India's first major infrastructure projects (1957), symbol of nation-building."
            },
            {
                title: "Maritime Trade",
                description: "The Mahanadi delta was a center for ancient maritime trade with Southeast Asia."
            },
            {
                title: "Cuttack History",
                description: "Cuttack was capital of Odisha for nearly 1,000 years, located at the river's delta head."
            }
        ]
    },

    // ========================================
    // 79. BRAZOS RIVER
    // ========================================
    {
        id: "brazos",
        name: "Brazos River",
        length: 1352,
        continent: "north-america",
        image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800",
        
        countries: [
            { name: "United States", flag: "🇺🇸" }
        ],
        
        states: [
            "New Mexico", "Texas"
        ],
        
        source: {
            location: "Confluence of Salt Fork and Double Mountain Fork, near Stonewall County, Texas",
            type: "River confluence",
            elevation: "490 m",
            coordinates: [33.2333, -100.2833]
        },
        
        mouth: {
            location: "Gulf of Mexico, near Freeport, Texas",
            type: "Estuary",
            delta: "Brazos River estuary",
            coordinates: [28.8833, -95.3833]
        },
        
        tributaries: {
            leftBank: [
                "Salt Fork Brazos",
                "Clear Fork Brazos",
                "Bosque River",
                "Little River"
            ],
            rightBank: [
                "Double Mountain Fork",
                "Paluxy River",
                "Navasota River",
                "Yegua Creek"
            ]
        },
        
        distributaries: [
            "Old Brazos River channel",
            "Brazos estuary channels"
        ],
        
        majorCities: [
            "Lubbock (nearby)", "Abilene (nearby)", "Waco",
            "College Station", "Bryan", "Richmond", "Freeport"
        ],
        
        dams: [
            { name: "Possum Kingdom Dam", details: "Texas, 1941, recreation" },
            { name: "Whitney Dam", details: "Texas, 4 MW, 1951" },
            { name: "Waco Dam", details: "Texas, 1965, flood control" },
            { name: "Granbury Dam", details: "Texas, 1969" }
        ],
        
        basinArea: "118,000 km²",
        discharge: "231 m³/s",
        
        riverPath: [
            [33.23, -100.28],   // Source - Fork confluence
            [33.00, -99.50],
            [32.50, -98.50],
            [32.75, -98.05],    // Possum Kingdom Lake
            [32.50, -97.50],
            [32.00, -97.20],
            [31.55, -97.15],    // Waco
            [31.00, -96.50],
            [30.68, -96.37],    // College Station area
            [30.00, -96.00],
            [29.60, -95.77],    // Richmond
            [29.20, -95.50],
            [28.88, -95.38]     // Gulf of Mexico (Mouth)
        ],
        
        tributaryPaths: [
            {
                name: "Clear Fork Brazos",
                path: [
                    [32.45, -99.73],   // Abilene area
                    [33.00, -99.00],
                    [33.10, -98.80]    // Confluence
                ]
            },
            {
                name: "Little River",
                path: [
                    [31.00, -97.50],
                    [30.80, -96.90],
                    [30.80, -96.70]    // Confluence
                ]
            },
            {
                name: "Navasota River",
                path: [
                    [31.50, -96.00],
                    [30.80, -96.10],
                    [30.40, -96.10]    // Confluence
                ]
            },
            {
                name: "Bosque River",
                path: [
                    [32.00, -97.80],
                    [31.70, -97.40],
                    [31.55, -97.20]    // Confluence at Waco
                ]
            }
        ],
        
        distributaryPaths: [
            {
                name: "Brazos Estuary",
                path: [
                    [28.95, -95.40],
                    [28.88, -95.38]    // Gulf of Mexico
                ]
            }
        ],
        
        cityCoordinates: [
            { name: "Waco", coords: [31.55, -97.15] },
            { name: "College Station", coords: [30.63, -96.33] },
            { name: "Bryan", coords: [30.67, -96.37] },
            { name: "Richmond", coords: [29.58, -95.76] },
            { name: "Freeport", coords: [28.95, -95.36] }
        ],
        
        damCoordinates: [
            { name: "Possum Kingdom Dam", coords: [32.87, -98.43], details: "Popular recreation lake" },
            { name: "Whitney Dam", coords: [31.87, -97.37], details: "4 MW, Lake Whitney" },
            { name: "Waco Dam", coords: [31.60, -97.22], details: "Flood control, Lake Waco" }
        ],
        
        flightLandmarks: [
            { progress: 0, name: "Salt & Double Mountain Fork", icon: "🔀", description: "River formation" },
            { progress: 0.15, name: "Rolling Plains", icon: "🌾", description: "West Texas" },
            { progress: 0.25, name: "Possum Kingdom Lake", icon: "🌊", description: "Popular recreation" },
            { progress: 0.35, name: "Cross Timbers", icon: "🌳", description: "Forest transition" },
            { progress: 0.50, name: "Lake Whitney", icon: "🌊", description: "Major reservoir" },
            { progress: 0.60, name: "Waco", icon: "🏙️", description: "Baylor University" },
            { progress: 0.70, name: "Brazos Valley", icon: "🌾", description: "Agricultural region" },
            { progress: 0.80, name: "College Station", icon: "🏟️", description: "Texas A&M" },
            { progress: 0.90, name: "Coastal Plain", icon: "🌿", description: "Gulf lowlands" },
            { progress: 1.0, name: "Gulf of Mexico", icon: "🌊", description: "River mouth" }
        ],
        
        economicImportance: [
            "Longest river entirely within Texas",
            "Irrigation for agriculture",
            "Municipal water supply",
            "Recreation (lakes)",
            "Oil and gas industry",
            "Historical significance"
        ],
        
        environmentalIssues: [
            "Salinity from upstream sources",
            "Agricultural runoff",
            "Urban pollution",
            "Dam impacts on ecosystems",
            "Invasive species (giant salvinia)",
            "Drought affecting water supply"
        ],
        
        waterDisputes: [
            {
                title: "Brazos River Authority",
                description: "State authority manages water allocation among competing agricultural, urban, and industrial users."
            },
            {
                title: "Environmental Flows",
                description: "Balancing human water needs with ecological requirements for the river ecosystem."
            }
        ],
        
        historicalImportance: [
            {
                title: "Spanish Name",
                description: "Named 'Los Brazos de Dios' (The Arms of God) by Spanish explorers who found water after a drought."
            },
            {
                title: "Texas Revolution",
                description: "The Brazos region was central to the Texas Revolution (1835-1836) against Mexico."
            },
            {
                title: "Cotton Kingdom",
                description: "The Brazos Valley was heart of antebellum Texas cotton production and slavery."
            },
            {
                title: "Waco Suspension Bridge",
                description: "The 1870 bridge over the Brazos was the longest single-span suspension bridge west of the Mississippi."
            }
        ]
    },

    // ========================================
    // 80. CAUVERY RIVER (KAVERI)
    // ========================================
    {
        id: "cauvery",
        name: "Cauvery River",
        length: 800,
        continent: "asia",
        image: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=800",
        
        countries: [
            { name: "India", flag: "🇮🇳" }
        ],
        
        states: [
            "Karnataka", "Tamil Nadu", "Kerala", "Puducherry"
        ],
        
        source: {
            location: "Talakaveri, Brahmagiri Hill, Western Ghats, Karnataka",
            type: "Sacred spring",
            elevation: "1,341 m",
            coordinates: [12.4167, 75.4833]
        },
        
        mouth: {
            location: "Bay of Bengal, Tamil Nadu",
            type: "Delta",
            delta: "Cauvery Delta - 'Rice Bowl of Tamil Nadu'",
            coordinates: [10.9667, 79.8500]
        },
        
        tributaries: {
            leftBank: [
                "Harangi River",
                "Hemavati River",
                "Shimsha River",
                "Arkavati River"
            ],
            rightBank: [
                "Lakshmana Tirtha",
                "Kabini River",
                "Bhavani River",
                "Noyyal River",
                "Amaravati River"
            ]
        },
        
        distributaries: [
            "Coleroon (Kollidam)",
            "Cauvery Main",
            "Grand Anicut channels",
            "Vennar River"
        ],
        
        majorCities: [
            "Madikeri (Coorg)", "Mysore", "Mandya", "Srirangapatna",
            "Tiruchirappalli", "Thanjavur", "Kumbakonam", "Mayiladuthurai"
        ],
        
        dams: [
            { name: "Krishna Raja Sagara Dam", details: "Karnataka, 1931, Mysore water supply" },
            { name: "Kabini Dam", details: "Karnataka, 1974, on Kabini tributary" },
            { name: "Mettur Dam", details: "Tamil Nadu, 200 MW, 1934" },
            { name: "Grand Anicut (Kallanai)", details: "Tamil Nadu, 2nd century CE, oldest dam" },
            { name: "Bhavani Dam", details: "Tamil Nadu, 1955, irrigation" }
        ],
        
        basinArea: "81,155 km²",
        discharge: "677 m³/s",
        
        riverPath: [
            [12.42, 75.48],    // Source - Talakaveri
            [12.30, 75.80],
            [12.30, 76.30],
            [12.30, 76.65],    // Mysore
            [12.42, 76.92],    // Srirangapatna
            [12.50, 77.20],
            [12.10, 77.60],
            [11.80, 77.80],
            [11.60, 78.10],    // Mettur Dam
            [11.20, 78.30],
            [10.80, 78.70],    // Tiruchirappalli
            [10.78, 79.13],    // Thanjavur area
            [10.97, 79.85]     // Bay of Bengal (Mouth)
        ],
        
        tributaryPaths: [
            {
                name: "Kabini River",
                path: [
                    [11.80, 76.20],    // Kerala
                    [12.00, 76.40],
                    [12.20, 76.50]     // Confluence
                ]
            },
            {
                name: "Hemavati River",
                path: [
                    [13.00, 76.00],    // Hassan district
                    [12.70, 76.40],
                    [12.50, 76.70]     // Confluence
                ]
            },
            {
                name: "Bhavani River",
                path: [
                    [11.40, 76.80],    // Nilgiris
                    [11.45, 77.40],
                    [11.40, 77.70]     // Confluence
                ]
            },
            {
                name: "Amaravati River",
                path: [
                    [10.50, 77.00],
                    [10.70, 77.80],
                    [10.80, 78.20]     // Confluence
                ]
            }
        ],
        
        distributaryPaths: [
            {
                name: "Coleroon (Kollidam)",
                path: [
                    [10.85, 78.80],
                    [11.15, 79.50],
                    [11.23, 79.78]     // Bay of Bengal
                ]
            },
            {
                name: "Cauvery Main Channel",
                path: [
                    [10.85, 78.80],
                    [10.80, 79.50],
                    [10.97, 79.85]     // Bay of Bengal
                ]
            }
        ],
        
        cityCoordinates: [
            { name: "Madikeri", coords: [12.42, 75.74] },
            { name: "Mysore", coords: [12.30, 76.65] },
            { name: "Srirangapatna", coords: [12.42, 76.70] },
            { name: "Tiruchirappalli", coords: [10.79, 78.70] },
            { name: "Thanjavur", coords: [10.79, 79.13] },
            { name: "Kumbakonam", coords: [10.96, 79.38] }
        ],
        
        damCoordinates: [
            { name: "Krishna Raja Sagara", coords: [12.43, 76.57], details: "KRS Dam - Mysore icon" },
            { name: "Mettur Dam", coords: [11.80, 77.80], details: "200 MW - Major Tamil Nadu dam" },
            { name: "Grand Anicut", coords: [10.88, 78.82], details: "Oldest dam in the world (2nd century CE)" }
        ],
        
        flightLandmarks: [
            { progress: 0, name: "Talakaveri", icon: "🛕", description: "Sacred source spring" },
            { progress: 0.10, name: "Coorg Highlands", icon: "🌳", description: "Coffee country" },
            { progress: 0.20, name: "Mysore", icon: "🏛️", description: "Palace city" },
            { progress: 0.25, name: "KRS Dam", icon: "🏗️", description: "Brindavan Gardens" },
            { progress: 0.30, name: "Srirangapatna", icon: "🏰", description: "Tipu Sultan's capital" },
            { progress: 0.50, name: "Mettur Dam", icon: "🏗️", description: "Tamil Nadu's lifeline" },
            { progress: 0.70, name: "Tiruchirappalli", icon: "🛕", description: "Rock Fort Temple" },
            { progress: 0.80, name: "Grand Anicut", icon: "🏛️", description: "2,000-year-old dam" },
            { progress: 0.90, name: "Thanjavur", icon: "🛕", description: "Chola capital, Big Temple" },
            { progress: 1.0, name: "Bay of Bengal", icon: "🌊", description: "Cauvery Delta" }
        ],
        
        economicImportance: [
            "Lifeline of Karnataka and Tamil Nadu",
            "Rice cultivation in delta (Rice Bowl)",
            "Hydroelectric power",
            "Drinking water for Bengaluru and Chennai",
            "Irrigation for millions of farmers",
            "Religious and cultural significance"
        ],
        
        environmentalIssues: [
            "Interstate water dispute (Karnataka-Tamil Nadu)",
            "Reduced delta flow",
            "Encroachment on riverbed",
            "Sand mining",
            "Industrial pollution",
            "Climate change affecting monsoons"
        ],
        
        waterDisputes: [
            {
                title: "Cauvery Water Dispute",
                description: "Century-old dispute between Karnataka and Tamil Nadu over water sharing; Supreme Court ruling (2018) allocates water."
            },
            {
                title: "Cauvery Water Management Authority",
                description: "Central authority established to implement tribunal decisions on water release."
            }
        ],
        
        historicalImportance: [
            {
                title: "Sacred River",
                description: "The Cauvery is worshipped as Goddess Kaveriamma; Talakaveri source is a major pilgrimage site."
            },
            {
                title: "Grand Anicut (Kallanai)",
                description: "Built by Chola king Karikala around 2nd century CE, considered the oldest water-diversion structure in the world."
            },
            {
                title: "Chola Empire",
                description: "The Cauvery delta was heartland of the powerful Chola dynasty (9th-13th centuries CE)."
            },
            {
                title: "Srirangapatna",
                description: "Island fortress on the Cauvery was capital of Hyder Ali and Tipu Sultan, fell to British in 1799."
            }
        ]
    }
];

// ============================================================
// EXPORT RIVERS DATA 8
// ============================================================

if (typeof window !== 'undefined') {
    window.RIVERS_DATA_8 = RIVERS_DATA_8;
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = RIVERS_DATA_8;
}

console.log('✅ Rivers Data 8 loaded:', RIVERS_DATA_8.length, 'rivers (71-80)');
