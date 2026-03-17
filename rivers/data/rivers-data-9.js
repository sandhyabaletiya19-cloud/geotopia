/**
 * GEOTOPIA - Rivers Data File 9
 * Rivers 81-90 (Tapajós to Atrato)
 * Tapajós, Liao, Rhine, Gambia, Elbe, Fly, Vistula, Daugava, Oder, Atrato
 */

const RIVERS_DATA_9 = [
    // ========================================
    // 81. TAPAJÓS RIVER
    // ========================================
    {
        id: "tapajos",
        name: "Tapajós River",
        length: 1992,
        continent: "south-america",
        image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=800",
        
        countries: [
            { name: "Brazil", flag: "🇧🇷" }
        ],
        
        states: [
            "Mato Grosso", "Pará"
        ],
        
        source: {
            location: "Confluence of Juruena and Teles Pires Rivers, Mato Grosso",
            type: "River confluence",
            elevation: "200 m",
            coordinates: [-7.5000, -57.8500]
        },
        
        mouth: {
            location: "Amazon River, at Santarém, Pará",
            type: "Confluence",
            delta: "Clear water meets muddy Amazon at 'Meeting of the Waters'",
            coordinates: [-2.4333, -54.7167]
        },
        
        tributaries: {
            leftBank: [
                "Juruena River",
                "Rio Crepori",
                "Rio Jamanxim"
            ],
            rightBank: [
                "Teles Pires River",
                "Rio Cururu",
                "Rio Arapiuns"
            ]
        },
        
        distributaries: [
            "Tapajós channels at Amazon confluence"
        ],
        
        majorCities: [
            "Jacareacanga", "Itaituba", "Aveiro",
            "Belterra", "Santarém"
        ],
        
        dams: [
            { name: "Teles Pires Dam", details: "Mato Grosso, 1,820 MW, 2015, on tributary" },
            { name: "São Manoel Dam", details: "Mato Grosso/Pará, 746 MW, 2018, on tributary" },
            { name: "São Luiz do Tapajós (Cancelled)", details: "8,040 MW proposed, cancelled 2016 due to indigenous opposition" }
        ],
        
        basinArea: "492,263 km²",
        discharge: "13,500 m³/s",
        
        riverPath: [
            [-7.50, -57.85],    // Source - Juruena-Teles Pires confluence
            [-7.00, -57.50],
            [-6.50, -57.00],
            [-6.00, -56.80],
            [-5.50, -56.50],
            [-5.00, -56.20],
            [-4.50, -56.00],
            [-4.28, -55.99],    // Itaituba
            [-4.00, -55.70],
            [-3.50, -55.50],
            [-3.20, -55.20],
            [-2.80, -55.00],
            [-2.57, -54.85],    // Belterra
            [-2.43, -54.72]     // Amazon River (Mouth)
        ],
        
        tributaryPaths: [
            {
                name: "Juruena River",
                path: [
                    [-10.50, -59.00],   // Mato Grosso
                    [-9.00, -58.50],
                    [-7.50, -57.90]     // Confluence
                ]
            },
            {
                name: "Teles Pires River",
                path: [
                    [-13.50, -55.50],   // Mato Grosso
                    [-10.00, -56.00],
                    [-7.50, -57.80]     // Confluence
                ]
            },
            {
                name: "Rio Jamanxim",
                path: [
                    [-6.00, -55.50],
                    [-5.00, -55.80],
                    [-4.50, -55.95]     // Confluence
                ]
            },
            {
                name: "Rio Arapiuns",
                path: [
                    [-2.50, -56.00],
                    [-2.40, -55.50],
                    [-2.45, -55.00]     // Confluence
                ]
            }
        ],
        
        distributaryPaths: [
            {
                name: "Tapajós-Amazon Junction",
                path: [
                    [-2.44, -54.75],
                    [-2.43, -54.72]     // Amazon
                ]
            }
        ],
        
        cityCoordinates: [
            { name: "Jacareacanga", coords: [-6.22, -57.75] },
            { name: "Itaituba", coords: [-4.28, -55.99] },
            { name: "Aveiro", coords: [-3.60, -55.32] },
            { name: "Belterra", coords: [-2.64, -54.94] },
            { name: "Santarém", coords: [-2.44, -54.71] }
        ],
        
        damCoordinates: [
            { name: "Teles Pires Dam", coords: [-9.33, -56.77], details: "1,820 MW - Tributary dam" },
            { name: "São Manoel Dam", coords: [-9.19, -57.05], details: "746 MW on Teles Pires" },
            { name: "Cancelled São Luiz", coords: [-4.50, -56.50], details: "8,040 MW - Cancelled 2016" }
        ],
        
        flightLandmarks: [
            { progress: 0, name: "Juruena-Teles Pires", icon: "🔀", description: "River formation" },
            { progress: 0.15, name: "Munduruku Territory", icon: "🏘️", description: "Indigenous lands" },
            { progress: 0.25, name: "Jacareacanga", icon: "🏘️", description: "Remote Amazon town" },
            { progress: 0.35, name: "Gold Mining Region", icon: "⛏️", description: "Garimpo area" },
            { progress: 0.50, name: "Itaituba", icon: "🏙️", description: "Gold rush town" },
            { progress: 0.65, name: "Clear Water Section", icon: "🌊", description: "Blue-green waters" },
            { progress: 0.80, name: "Alter do Chão", icon: "🏖️", description: "Caribbean of the Amazon" },
            { progress: 0.90, name: "Santarém", icon: "🏙️", description: "Gateway to Amazon" },
            { progress: 1.0, name: "Meeting of Waters", icon: "🌊", description: "Clear meets muddy Amazon" }
        ],
        
        economicImportance: [
            "Clear-water Amazon tributary",
            "Gold mining (controversial)",
            "Soybean export route (proposed grain port)",
            "Fishing communities",
            "Tourism (Alter do Chão beaches)",
            "Hydroelectric power (tributaries)"
        ],
        
        environmentalIssues: [
            "Illegal gold mining and mercury pollution",
            "Proposed mega-dams (mostly defeated)",
            "Soybean port threatens ecosystem",
            "Deforestation pressure",
            "Indigenous territory threats",
            "Climate change affecting flow"
        ],
        
        waterDisputes: [
            {
                title: "Dam Opposition",
                description: "The 8,040 MW São Luiz do Tapajós dam was cancelled in 2016 after Munduruku resistance and IBAMA ruling."
            },
            {
                title: "Grain Port Controversy",
                description: "Proposed soybean export terminal at Santarém faces environmental and social opposition."
            }
        ],
        
        historicalImportance: [
            {
                title: "Munduruku Nation",
                description: "The powerful Munduruku warriors controlled the Tapajós basin, feared by both Portuguese and rival nations."
            },
            {
                title: "Fordlândia",
                description: "Henry Ford established failed rubber plantations at Fordlândia and Belterra on the Tapajós in the 1920s-30s."
            },
            {
                title: "Gold Rush",
                description: "Major gold rush in the 1970s-80s brought thousands of miners (garimpeiros) to the Tapajós."
            },
            {
                title: "Alter do Chão",
                description: "Called 'Caribbean of the Amazon' for its white sand beaches on the Tapajós near Santarém."
            }
        ]
    },

    // ========================================
    // 82. LIAO RIVER
    // ========================================
    {
        id: "liao",
        name: "Liao River",
        length: 1345,
        continent: "asia",
        image: "https://images.unsplash.com/photo-1516496636080-14fb876e029d?w=800",
        
        countries: [
            { name: "China", flag: "🇨🇳" }
        ],
        
        states: [
            "Hebei Province", "Inner Mongolia", "Jilin Province", "Liaoning Province"
        ],
        
        source: {
            location: "Qilaotu Mountains, Hebei Province",
            type: "Mountain streams",
            elevation: "1,300 m",
            coordinates: [41.3333, 117.7500]
        },
        
        mouth: {
            location: "Bohai Sea, Liaoning Province",
            type: "Delta",
            delta: "Liao River Delta - important wetland",
            coordinates: [40.9667, 121.8333]
        },
        
        tributaries: {
            leftBank: [
                "Xiliao River",
                "Dongliao River",
                "Qinghe River"
            ],
            rightBank: [
                "Laoha River",
                "Daling River",
                "Taizi River",
                "Hun River"
            ]
        },
        
        distributaries: [
            "Liao River Delta channels",
            "Shuangtai River"
        ],
        
        majorCities: [
            "Chifeng", "Tongliao", "Siping", "Tieling",
            "Shenyang", "Anshan", "Yingkou", "Panjin"
        ],
        
        dams: [
            { name: "Dahuofang Reservoir", details: "Liaoning, 1958, water supply" },
            { name: "Qingnian Reservoir", details: "Liaoning, flood control" },
            { name: "Multiple irrigation dams", details: "Various small dams throughout basin" }
        ],
        
        basinArea: "219,000 km²",
        discharge: "500 m³/s (variable)",
        
        riverPath: [
            [41.33, 117.75],   // Source - Qilaotu Mountains
            [42.00, 119.00],
            [42.50, 120.00],
            [43.00, 121.00],
            [43.60, 122.30],   // Tongliao area
            [43.50, 123.00],
            [43.17, 123.35],   // Siping area
            [42.30, 123.72],   // Tieling
            [42.00, 123.50],
            [41.80, 123.43],   // Shenyang area
            [41.50, 122.50],
            [41.20, 122.00],
            [40.97, 121.83]    // Bohai Sea (Mouth)
        ],
        
        tributaryPaths: [
            {
                name: "Hun River",
                path: [
                    [41.50, 124.50],
                    [41.80, 123.50],   // Shenyang
                    [41.60, 122.80]    // Confluence
                ]
            },
            {
                name: "Taizi River",
                path: [
                    [41.10, 124.00],
                    [41.10, 123.00],   // Anshan
                    [41.20, 122.30]    // Confluence
                ]
            },
            {
                name: "Xiliao River",
                path: [
                    [44.00, 118.00],
                    [43.50, 120.00],
                    [43.00, 121.50]    // Confluence
                ]
            },
            {
                name: "Dongliao River",
                path: [
                    [43.50, 125.00],
                    [43.30, 124.00],
                    [43.20, 123.50]    // Confluence
                ]
            }
        ],
        
        distributaryPaths: [
            {
                name: "Liao River Delta",
                path: [
                    [41.05, 121.90],
                    [40.97, 121.83]    // Bohai Sea
                ]
            },
            {
                name: "Shuangtai River",
                path: [
                    [41.10, 122.00],
                    [41.00, 121.90]    // Separate mouth
                ]
            }
        ],
        
        cityCoordinates: [
            { name: "Chifeng", coords: [42.27, 118.96] },
            { name: "Tongliao", coords: [43.65, 122.24] },
            { name: "Siping", coords: [43.17, 124.35] },
            { name: "Tieling", coords: [42.29, 123.84] },
            { name: "Shenyang", coords: [41.80, 123.43] },
            { name: "Anshan", coords: [41.11, 122.99] },
            { name: "Panjin", coords: [41.12, 122.07] }
        ],
        
        damCoordinates: [
            { name: "Dahuofang Reservoir", coords: [41.85, 124.10], details: "Shenyang water supply" },
            { name: "Qingnian Reservoir", coords: [42.50, 122.50], details: "Flood control" }
        ],
        
        flightLandmarks: [
            { progress: 0, name: "Qilaotu Mountains", icon: "🏔️", description: "Source in Hebei" },
            { progress: 0.15, name: "Inner Mongolia Plains", icon: "🌾", description: "Grassland region" },
            { progress: 0.30, name: "Tongliao", icon: "🏙️", description: "Inner Mongolia city" },
            { progress: 0.45, name: "Northeast Plains", icon: "🌾", description: "Agricultural heartland" },
            { progress: 0.55, name: "Tieling", icon: "🏙️", description: "Coal mining city" },
            { progress: 0.65, name: "Shenyang", icon: "🏙️", description: "Liaoning capital" },
            { progress: 0.75, name: "Anshan", icon: "🏭", description: "Steel capital" },
            { progress: 0.85, name: "Panjin", icon: "🌿", description: "Red Beach wetland" },
            { progress: 0.95, name: "Liao Delta", icon: "🌿", description: "Wetlands and mudflats" },
            { progress: 1.0, name: "Bohai Sea", icon: "🌊", description: "River mouth" }
        ],
        
        economicImportance: [
            "Major river of northeast China (Manchuria)",
            "Irrigation for agriculture (corn, rice, soybeans)",
            "Industrial water supply",
            "Shenyang metropolitan water",
            "Oil fields (Liaohe oil field)",
            "Fishing and aquaculture"
        ],
        
        environmentalIssues: [
            "Severe pollution from industry",
            "One of China's most polluted rivers",
            "Water scarcity",
            "Wetland loss in delta",
            "Agricultural runoff",
            "Heavy metal contamination"
        ],
        
        waterDisputes: [
            {
                title: "Inter-Provincial Allocation",
                description: "Liaoning, Jilin, and Inner Mongolia compete for limited water resources."
            },
            {
                title: "Pollution Control",
                description: "Central government mandates cleanup, but industrial pollution remains major challenge."
            }
        ],
        
        historicalImportance: [
            {
                title: "Liao Dynasty",
                description: "The Khitan Liao Dynasty (907-1125) took its name from this river, ruling northern China."
            },
            {
                title: "Manchuria",
                description: "The Liao basin was heartland of Manchuria, homeland of the Manchu who founded the Qing Dynasty."
            },
            {
                title: "Russo-Japanese War",
                description: "Major battles were fought in the Liao River basin during the 1904-1905 war."
            },
            {
                title: "Red Beach",
                description: "Panjin's Red Beach, where red suaeda plants color the Liao delta, is a unique natural wonder."
            }
        ]
    },

    // ========================================
    // 83. RHINE RIVER
    // ========================================
    {
        id: "rhine",
        name: "Rhine River",
        length: 1233,
        continent: "europe",
        image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=800",
        
        countries: [
            { name: "Switzerland", flag: "🇨🇭" },
            { name: "Liechtenstein", flag: "🇱🇮" },
            { name: "Austria", flag: "🇦🇹" },
            { name: "Germany", flag: "🇩🇪" },
            { name: "France", flag: "🇫🇷" },
            { name: "Netherlands", flag: "🇳🇱" }
        ],
        
        states: [
            "Graubünden", "St. Gallen", "Vorarlberg",
            "Baden-Württemberg", "Rhineland-Palatinate",
            "Hesse", "North Rhine-Westphalia", "Alsace",
            "South Holland", "Gelderland"
        ],
        
        source: {
            location: "Lake Toma, Graubünden, Swiss Alps",
            type: "Alpine lake outlet",
            elevation: "2,345 m",
            coordinates: [46.6333, 8.6667]
        },
        
        mouth: {
            location: "North Sea, Netherlands",
            type: "Delta",
            delta: "Rhine-Meuse-Scheldt Delta",
            coordinates: [51.9000, 4.5000]
        },
        
        tributaries: {
            leftBank: [
                "Aare River",
                "Ill River",
                "Nahe River",
                "Moselle River",
                "Meuse River (connected)"
            ],
            rightBank: [
                "Neckar River",
                "Main River",
                "Lahn River",
                "Sieg River",
                "Ruhr River",
                "Lippe River"
            ]
        },
        
        distributaries: [
            "Waal",
            "Lek",
            "IJssel",
            "Nederrijn",
            "Nieuwe Maas"
        ],
        
        majorCities: [
            "Basel", "Strasbourg", "Karlsruhe", "Mannheim",
            "Mainz", "Wiesbaden", "Koblenz", "Bonn",
            "Cologne", "Düsseldorf", "Duisburg", "Rotterdam"
        ],
        
        dams: [
            { name: "Iffezheim Barrage", details: "Germany, 110 MW, 1977" },
            { name: "Kembs Dam", details: "France, 156 MW, 1932" },
            { name: "Rhinau Dam", details: "France, 152 MW, 1963" },
            { name: "Grand Canal d'Alsace", details: "Series of 4 dams, France" },
            { name: "Delta Works", details: "Netherlands, storm surge protection" }
        ],
        
        basinArea: "185,000 km²",
        discharge: "2,300 m³/s",
        
        riverPath: [
            [46.63, 8.67],     // Source - Lake Toma
            [47.00, 9.00],
            [47.38, 9.52],     // Lake Constance
            [47.59, 7.59],     // Basel
            [48.57, 7.75],     // Strasbourg
            [49.00, 8.27],     // Karlsruhe
            [49.49, 8.47],     // Mannheim
            [50.00, 8.27],     // Mainz
            [50.36, 7.60],     // Koblenz
            [50.73, 7.10],     // Bonn
            [50.94, 6.96],     // Cologne
            [51.23, 6.77],     // Düsseldorf
            [51.43, 6.77],     // Duisburg
            [51.84, 5.87],
            [51.90, 4.50]      // North Sea (Mouth)
        ],
        
        tributaryPaths: [
            {
                name: "Moselle River",
                path: [
                    [48.07, 6.50],     // Vosges
                    [49.12, 6.18],     // Metz
                    [49.35, 6.64],     // Trier
                    [50.36, 7.60]      // Confluence at Koblenz
                ]
            },
            {
                name: "Main River",
                path: [
                    [50.00, 11.50],    // Franconia
                    [50.00, 9.00],     // Frankfurt
                    [50.00, 8.28]      // Confluence at Mainz
                ]
            },
            {
                name: "Neckar River",
                path: [
                    [48.50, 9.20],     // Swabia
                    [49.41, 8.69],     // Heidelberg
                    [49.49, 8.47]      // Confluence at Mannheim
                ]
            },
            {
                name: "Ruhr River",
                path: [
                    [51.40, 8.50],
                    [51.40, 7.50],
                    [51.45, 6.75]      // Confluence at Duisburg
                ]
            }
        ],
        
        distributaryPaths: [
            {
                name: "Waal",
                path: [
                    [51.87, 5.95],
                    [51.85, 4.80]      // North Sea
                ]
            },
            {
                name: "Lek",
                path: [
                    [51.96, 5.50],
                    [51.90, 4.50]      // North Sea
                ]
            },
            {
                name: "IJssel",
                path: [
                    [51.97, 5.93],
                    [52.50, 5.90]      // IJsselmeer
                ]
            }
        ],
        
        cityCoordinates: [
            { name: "Basel", coords: [47.56, 7.59] },
            { name: "Strasbourg", coords: [48.57, 7.75] },
            { name: "Mannheim", coords: [49.49, 8.47] },
            { name: "Mainz", coords: [50.00, 8.27] },
            { name: "Koblenz", coords: [50.36, 7.60] },
            { name: "Cologne", coords: [50.94, 6.96] },
            { name: "Düsseldorf", coords: [51.23, 6.77] },
            { name: "Rotterdam", coords: [51.92, 4.48] }
        ],
        
        damCoordinates: [
            { name: "Iffezheim Barrage", coords: [48.84, 8.12], details: "110 MW - Last Rhine dam" },
            { name: "Kembs Dam", coords: [47.69, 7.52], details: "156 MW - Oldest Rhine dam" },
            { name: "Delta Works", coords: [51.70, 4.00], details: "Netherlands flood protection" }
        ],
        
        flightLandmarks: [
            { progress: 0, name: "Swiss Alps", icon: "🏔️", description: "Source at Lake Toma" },
            { progress: 0.07, name: "Rhine Gorge", icon: "🏞️", description: "Swiss Rhine gorge" },
            { progress: 0.15, name: "Lake Constance", icon: "🌊", description: "Three-country lake" },
            { progress: 0.20, name: "Rhine Falls", icon: "💧", description: "Europe's largest falls" },
            { progress: 0.25, name: "Basel", icon: "🏙️", description: "Swiss-French-German junction" },
            { progress: 0.35, name: "Strasbourg", icon: "🏛️", description: "European Parliament" },
            { progress: 0.50, name: "Mannheim-Mainz", icon: "🏙️", description: "Rhine-Neckar region" },
            { progress: 0.60, name: "Rhine Gorge (UNESCO)", icon: "🏰", description: "Romantic castles" },
            { progress: 0.65, name: "Koblenz", icon: "🔀", description: "Moselle confluence" },
            { progress: 0.75, name: "Cologne", icon: "⛪", description: "Gothic cathedral" },
            { progress: 0.85, name: "Duisburg", icon: "🏭", description: "Largest inland port" },
            { progress: 0.95, name: "Rotterdam", icon: "🚢", description: "Europe's largest port" },
            { progress: 1.0, name: "North Sea", icon: "🌊", description: "Delta mouth" }
        ],
        
        economicImportance: [
            "Europe's busiest waterway",
            "60 million people in basin",
            "Rotterdam - Europe's largest port",
            "Major industrial corridor (Ruhr Valley)",
            "Wine production (Rhineland)",
            "Tourism (Rhine Gorge castles)"
        ],
        
        environmentalIssues: [
            "Historic severe pollution (1970s)",
            "Remarkable recovery since 1986 Sandoz spill",
            "Climate change affecting low flows",
            "Invasive species",
            "Microplastics contamination",
            "2022 record low water levels"
        ],
        
        waterDisputes: [
            {
                title: "International Commission for the Protection of the Rhine (ICPR)",
                description: "Model for transboundary cooperation since 1950, successfully restored water quality."
            },
            {
                title: "Climate Change Shipping",
                description: "Low water levels in 2018 and 2022 disrupted shipping, raising concerns about future navigation."
            }
        ],
        
        historicalImportance: [
            {
                title: "Roman Frontier",
                description: "The Rhine was the northern frontier of the Roman Empire (limes), dividing Roman and Germanic worlds."
            },
            {
                title: "Rhine Romanticism",
                description: "The Rhine Gorge inspired Romantic poets and artists; the Lorelei legend became world-famous."
            },
            {
                title: "Industrial Revolution",
                description: "The Rhine-Ruhr region became the industrial heartland of Europe in the 19th century."
            },
            {
                title: "Post-WWII Integration",
                description: "The Rhine became a symbol of European integration, connecting former enemies France and Germany."
            }
        ]
    },

    // ========================================
    // 84. GAMBIA RIVER
    // ========================================
    {
        id: "gambia",
        name: "Gambia River",
        length: 1130,
        continent: "africa",
        image: "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=800",
        
        countries: [
            { name: "Guinea", flag: "🇬🇳" },
            { name: "Senegal", flag: "🇸🇳" },
            { name: "The Gambia", flag: "🇬🇲" }
        ],
        
        states: [
            "Labé Region", "Tambacounda Region", "Kédougou Region",
            "Upper River Region", "Central River Region",
            "Lower River Region", "Western Region"
        ],
        
        source: {
            location: "Fouta Djallon Highlands, Guinea",
            type: "Highland springs",
            elevation: "1,125 m",
            coordinates: [11.7333, -12.1833]
        },
        
        mouth: {
            location: "Atlantic Ocean, at Banjul, The Gambia",
            type: "Estuary",
            delta: "Wide estuary - 10 km wide at mouth",
            coordinates: [13.4500, -16.5667]
        },
        
        tributaries: {
            leftBank: [
                "Niokolo Koba River",
                "Koulountou River",
                "Sandougou River"
            ],
            rightBank: [
                "Nieri Ko River",
                "Sofaniama River"
            ]
        },
        
        distributaries: [
            "Gambia estuary channels",
            "Oyster Creek"
        ],
        
        majorCities: [
            "Kédougou", "Tambacounda", "Basse Santa Su",
            "Janjanbureh", "Kaur", "Kuntaur",
            "Banjul", "Serrekunda"
        ],
        
        dams: [
            { name: "Sambangalou Dam (Planned)", details: "Guinea/Senegal border, proposed, 128 MW" },
            { name: "No major dams currently", details: "River flows freely, one of last undammed African rivers" }
        ],
        
        basinArea: "77,100 km²",
        discharge: "150 m³/s (seasonal)",
        
        riverPath: [
            [11.73, -12.18],   // Source - Fouta Djallon
            [12.00, -12.50],
            [12.50, -12.80],
            [12.55, -12.17],   // Kédougou
            [13.00, -13.00],
            [13.30, -13.50],
            [13.44, -14.00],   // Basse Santa Su
            [13.54, -14.77],   // Janjanbureh
            [13.50, -15.50],
            [13.47, -15.90],   // Kuntaur
            [13.45, -16.00],
            [13.45, -16.50],
            [13.45, -16.57]    // Atlantic Ocean (Mouth)
        ],
        
        tributaryPaths: [
            {
                name: "Niokolo Koba River",
                path: [
                    [12.50, -13.00],
                    [13.00, -13.20],
                    [13.10, -13.30]    // Confluence
                ]
            },
            {
                name: "Koulountou River",
                path: [
                    [12.00, -12.50],
                    [12.40, -12.60],
                    [12.50, -12.80]    // Confluence
                ]
            },
            {
                name: "Sandougou River",
                path: [
                    [13.50, -14.50],
                    [13.50, -14.80],
                    [13.50, -15.00]    // Confluence
                ]
            }
        ],
        
        distributaryPaths: [
            {
                name: "Gambia Estuary",
                path: [
                    [13.45, -16.50],
                    [13.45, -16.57]    // Atlantic
                ]
            }
        ],
        
        cityCoordinates: [
            { name: "Kédougou", coords: [12.56, -12.17] },
            { name: "Tambacounda", coords: [13.77, -13.67] },
            { name: "Basse Santa Su", coords: [13.31, -14.65] },
            { name: "Janjanbureh", coords: [13.54, -14.77] },
            { name: "Banjul", coords: [13.45, -16.58] },
            { name: "Serrekunda", coords: [13.44, -16.68] }
        ],
        
        damCoordinates: [
            { name: "Sambangalou Dam Site", coords: [12.50, -12.50], details: "Proposed 128 MW dam" }
        ],
        
        flightLandmarks: [
            { progress: 0, name: "Fouta Djallon", icon: "🏔️", description: "Guinea highlands source" },
            { progress: 0.10, name: "Guinea Headwaters", icon: "🌳", description: "Forest region" },
            { progress: 0.20, name: "Kédougou", icon: "🏘️", description: "Gold mining area" },
            { progress: 0.30, name: "Niokolo-Koba Park", icon: "🦁", description: "UNESCO biosphere" },
            { progress: 0.40, name: "Guinea-Gambia Border", icon: "🛂", description: "Enters The Gambia" },
            { progress: 0.55, name: "Basse Santa Su", icon: "🏘️", description: "Upper river town" },
            { progress: 0.65, name: "Janjanbureh Island", icon: "🏝️", description: "Historic island" },
            { progress: 0.80, name: "Tidal Reaches", icon: "🌊", description: "Saltwater intrusion" },
            { progress: 0.95, name: "Banjul", icon: "🏙️", description: "Gambian capital" },
            { progress: 1.0, name: "Atlantic Ocean", icon: "🌊", description: "Wide estuary" }
        ],
        
        economicImportance: [
            "Defines the nation of The Gambia",
            "One of Africa's last free-flowing rivers",
            "Fishing (sole, barracuda, oysters)",
            "Rice cultivation",
            "River transportation",
            "Tourism (river cruises, birdwatching)"
        ],
        
        environmentalIssues: [
            "Saltwater intrusion increasing upstream",
            "Overfishing",
            "Deforestation in upper basin",
            "Climate change affecting flow",
            "Proposed dam at Sambangalou",
            "Mangrove loss"
        ],
        
        waterDisputes: [
            {
                title: "OMVG (Gambia River Development)",
                description: "Guinea, Senegal, The Gambia, and Guinea-Bissau coordinate through OMVG for basin development."
            },
            {
                title: "Sambangalou Dam",
                description: "Proposed dam faces concerns about downstream impacts on The Gambia's fisheries and agriculture."
            }
        ],
        
        historicalImportance: [
            {
                title: "Alex Haley's Roots",
                description: "Haley's novel 'Roots' traced his ancestor Kunta Kinte from the Gambia River village of Juffureh."
            },
            {
                title: "Slave Trade",
                description: "The Gambia River was a major route for the Atlantic slave trade; James Island was a slave trading post."
            },
            {
                title: "Colonial History",
                description: "The British controlled the river while the French controlled surrounding territory, creating The Gambia's unique shape."
            },
            {
                title: "Mungo Park",
                description: "Scottish explorer Mungo Park explored the Gambia in the 1790s, searching for the Niger River."
            }
        ]
    },

    // ========================================
    // 85. ELBE RIVER
    // ========================================
    {
        id: "elbe",
        name: "Elbe River",
        length: 1091,
        continent: "europe",
        image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=800",
        
        countries: [
            { name: "Czech Republic", flag: "🇨🇿" },
            { name: "Germany", flag: "🇩🇪" }
        ],
        
        states: [
            "Hradec Králové Region", "Ústí nad Labem Region",
            "Saxony", "Saxony-Anhalt", "Brandenburg",
            "Lower Saxony", "Hamburg", "Schleswig-Holstein"
        ],
        
        source: {
            location: "Krkonoše Mountains (Giant Mountains), Czech Republic",
            type: "Mountain streams",
            elevation: "1,386 m",
            coordinates: [50.7667, 15.5333]
        },
        
        mouth: {
            location: "North Sea, at Cuxhaven, Germany",
            type: "Estuary",
            delta: "Elbe Estuary - major tidal estuary",
            coordinates: [53.8833, 8.7167]
        },
        
        tributaries: {
            leftBank: [
                "Vltava (Moldau) River",
                "Eger (Ohře) River",
                "Mulde River",
                "Saale River"
            ],
            rightBank: [
                "Schwarze Elster",
                "Havel River",
                "Elde River"
            ]
        },
        
        distributaries: [
            "Norderelbe",
            "Süderelbe",
            "Alte Elbe",
            "Este (tidal)"
        ],
        
        majorCities: [
            "Hradec Králové", "Pardubice", "Ústí nad Labem",
            "Dresden", "Meissen", "Torgau", "Wittenberg",
            "Dessau", "Magdeburg", "Hamburg", "Cuxhaven"
        ],
        
        dams: [
            { name: "Les Království Dam", details: "Czech Republic, 1920" },
            { name: "Geesthacht Weir", details: "Germany, 1960, tidal barrier" },
            { name: "Multiple Czech barrages", details: "Navigation and flood control" }
        ],
        
        basinArea: "148,268 km²",
        discharge: "711 m³/s",
        
        riverPath: [
            [50.77, 15.53],    // Source - Krkonoše
            [50.50, 15.50],
            [50.21, 15.83],    // Hradec Králové
            [50.04, 15.78],    // Pardubice
            [50.66, 14.03],    // Ústí nad Labem
            [51.05, 13.74],    // Dresden
            [51.17, 13.47],    // Meissen
            [51.56, 12.99],    // Torgau
            [51.87, 12.65],    // Wittenberg
            [51.84, 12.25],    // Dessau
            [52.13, 11.64],    // Magdeburg
            [52.50, 11.50],
            [53.00, 10.50],
            [53.55, 9.99],     // Hamburg
            [53.88, 8.72]      // North Sea (Mouth)
        ],
        
        tributaryPaths: [
            {
                name: "Vltava River",
                path: [
                    [48.80, 13.80],    // Bohemian Forest
                    [50.08, 14.42],    // Prague
                    [50.41, 14.09]     // Confluence at Mělník
                ]
            },
            {
                name: "Saale River",
                path: [
                    [50.30, 11.70],    // Thuringia
                    [51.48, 11.97],    // Halle
                    [51.93, 11.90]     // Confluence
                ]
            },
            {
                name: "Havel River",
                path: [
                    [53.00, 13.00],    // Mecklenburg
                    [52.40, 13.00],    // Berlin/Potsdam
                    [52.50, 12.07]     // Confluence
                ]
            },
            {
                name: "Mulde River",
                path: [
                    [50.50, 12.50],    // Erzgebirge
                    [51.70, 12.30],
                    [51.83, 12.25]     // Confluence at Dessau
                ]
            }
        ],
        
        distributaryPaths: [
            {
                name: "Norderelbe",
                path: [
                    [53.55, 10.00],    // Hamburg
                    [53.60, 9.90]      // Port area
                ]
            },
            {
                name: "Süderelbe",
                path: [
                    [53.50, 10.00],
                    [53.50, 9.80]      // Southern branch
                ]
            }
        ],
        
        cityCoordinates: [
            { name: "Hradec Králové", coords: [50.21, 15.83] },
            { name: "Ústí nad Labem", coords: [50.66, 14.03] },
            { name: "Dresden", coords: [51.05, 13.74] },
            { name: "Wittenberg", coords: [51.87, 12.65] },
            { name: "Magdeburg", coords: [52.13, 11.64] },
            { name: "Hamburg", coords: [53.55, 9.99] },
            { name: "Cuxhaven", coords: [53.87, 8.69] }
        ],
        
        damCoordinates: [
            { name: "Geesthacht Weir", coords: [53.42, 10.35], details: "Tidal barrier, fish ladder" },
            { name: "Czech Barrages", coords: [50.50, 14.50], details: "Navigation locks" }
        ],
        
        flightLandmarks: [
            { progress: 0, name: "Giant Mountains", icon: "🏔️", description: "Czech source" },
            { progress: 0.10, name: "Hradec Králové", icon: "🏙️", description: "Bohemian city" },
            { progress: 0.20, name: "Czech-German Border", icon: "🛂", description: "Saxon Switzerland" },
            { progress: 0.30, name: "Dresden", icon: "🏛️", description: "Florence on the Elbe" },
            { progress: 0.40, name: "Torgau", icon: "🤝", description: "US-Soviet meeting point 1945" },
            { progress: 0.45, name: "Wittenberg", icon: "⛪", description: "Luther's 95 Theses" },
            { progress: 0.55, name: "Dessau", icon: "🏛️", description: "Bauhaus capital" },
            { progress: 0.65, name: "Magdeburg", icon: "🏙️", description: "Saxon-Anhalt capital" },
            { progress: 0.80, name: "Hamburg", icon: "🚢", description: "Germany's gateway" },
            { progress: 1.0, name: "North Sea", icon: "🌊", description: "Elbe estuary" }
        ],
        
        economicImportance: [
            "Major navigation corridor (Hamburg to Prague)",
            "Hamburg - Germany's second largest city and biggest port",
            "Industrial corridor",
            "Agriculture in floodplain",
            "Tourism (Saxon Switzerland, Dresden)",
            "Fishing industry"
        ],
        
        environmentalIssues: [
            "2002 and 2013 catastrophic floods",
            "Legacy industrial pollution (East Germany)",
            "Water quality improved dramatically since reunification",
            "Dredging impacts on estuary",
            "Climate change affecting flow",
            "Hamburg harbor deepening controversy"
        ],
        
        waterDisputes: [
            {
                title: "International Commission for the Elbe",
                description: "Czech-German cooperation on water management since 1990, following German reunification."
            },
            {
                title: "Elbe Deepening",
                description: "Hamburg's harbor deepening project faces opposition from environmental groups."
            }
        ],
        
        historicalImportance: [
            {
                title: "Elbe Day (April 25, 1945)",
                description: "American and Soviet forces met at Torgau on the Elbe, dividing Nazi Germany."
            },
            {
                title: "Iron Curtain",
                description: "The Elbe formed much of the border between East and West Germany during the Cold War."
            },
            {
                title: "Martin Luther",
                description: "Luther posted his 95 Theses at Wittenberg on the Elbe in 1517, starting the Reformation."
            },
            {
                title: "Hanseatic League",
                description: "Hamburg's position on the Elbe made it a leading member of the medieval Hanseatic trade league."
            }
        ]
    },
      // ========================================
    // 86. FLY RIVER
    // ========================================
    {
        id: "fly",
        name: "Fly River",
        length: 1050,
        continent: "oceania",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
        
        countries: [
            { name: "Papua New Guinea", flag: "🇵🇬" }
        ],
        
        states: [
            "Western Province", "Southern Highlands Province"
        ],
        
        source: {
            location: "Victor Emanuel Range, Star Mountains",
            type: "Mountain streams",
            elevation: "3,600 m",
            coordinates: [-5.1000, 141.0833]
        },
        
        mouth: {
            location: "Gulf of Papua, Coral Sea",
            type: "Delta",
            delta: "Fly River Delta - vast mangrove wetland, 12,000 km²",
            coordinates: [-8.3167, 143.7500]
        },
        
        tributaries: {
            leftBank: [
                "Ok Tedi River",
                "Palmer River",
                "Bamu River"
            ],
            rightBank: [
                "Strickland River",
                "Suki Creek"
            ]
        },
        
        distributaries: [
            "Fly Delta channels",
            "Kiwai Island channels",
            "Bamu River connection"
        ],
        
        majorCities: [
            "Tabubil", "Kiunga", "Balimo", "Daru"
        ],
        
        dams: [
            { name: "No dams", details: "Free-flowing; Ok Tedi mine uses river for waste disposal" }
        ],
        
        basinArea: "76,000 km²",
        discharge: "6,000 m³/s",
        
        riverPath: [
            [-5.10, 141.08],   // Source - Star Mountains
            [-5.30, 141.10],
            [-5.50, 141.20],
            [-5.35, 141.29],   // Tabubil area
            [-6.12, 141.29],   // Kiunga
            [-6.50, 141.30],
            [-7.00, 141.50],
            [-7.30, 141.70],
            [-7.50, 142.00],
            [-7.70, 142.50],
            [-7.80, 142.80],
            [-8.00, 143.00],
            [-8.12, 143.21],   // Daru area
            [-8.32, 143.75]    // Gulf of Papua (Mouth)
        ],
        
        tributaryPaths: [
            {
                name: "Ok Tedi River",
                path: [
                    [-5.20, 141.15],   // Ok Tedi mine
                    [-5.50, 141.20],
                    [-5.80, 141.25]    // Confluence
                ]
            },
            {
                name: "Strickland River",
                path: [
                    [-5.50, 142.50],   // Southern Highlands
                    [-6.50, 142.00],
                    [-7.50, 141.80]    // Confluence
                ]
            },
            {
                name: "Palmer River",
                path: [
                    [-5.50, 142.00],
                    [-6.00, 141.80],
                    [-6.50, 141.50]    // Confluence
                ]
            }
        ],
        
        distributaryPaths: [
            {
                name: "Fly Delta",
                path: [
                    [-8.20, 143.50],
                    [-8.32, 143.75]    // Gulf of Papua
                ]
            },
            {
                name: "Kiwai Channels",
                path: [
                    [-8.10, 143.30],
                    [-8.40, 143.50]    // Delta area
                ]
            }
        ],
        
        cityCoordinates: [
            { name: "Tabubil", coords: [-5.28, 141.23] },
            { name: "Kiunga", coords: [-6.12, 141.29] },
            { name: "Balimo", coords: [-7.85, 142.95] },
            { name: "Daru", coords: [-9.08, 143.21] }
        ],
        
        damCoordinates: [
            { name: "Ok Tedi Mine", coords: [-5.20, 141.15], details: "Major mining operation, river waste disposal" }
        ],
        
        flightLandmarks: [
            { progress: 0, name: "Star Mountains", icon: "🏔️", description: "Remote mountain source" },
            { progress: 0.10, name: "Tabubil", icon: "⛏️", description: "Mining town" },
            { progress: 0.15, name: "Ok Tedi Mine", icon: "🏭", description: "Copper-gold mine" },
            { progress: 0.25, name: "Kiunga", icon: "🏘️", description: "River port" },
            { progress: 0.40, name: "Middle Fly", icon: "🌳", description: "Vast floodplain" },
            { progress: 0.55, name: "Strickland Confluence", icon: "🔀", description: "Major tributary" },
            { progress: 0.70, name: "Lower Fly", icon: "🌿", description: "Swamp forest" },
            { progress: 0.85, name: "Fly Delta", icon: "🌿", description: "Massive wetland" },
            { progress: 0.95, name: "Daru", icon: "🏘️", description: "Provincial capital" },
            { progress: 1.0, name: "Gulf of Papua", icon: "🌊", description: "Coral Sea" }
        ],
        
        economicImportance: [
            "Ok Tedi copper-gold mine (major PNG revenue)",
            "River transportation (only route in region)",
            "Fishing and aquaculture",
            "Sago palm cultivation",
            "Logging industry",
            "Indigenous subsistence"
        ],
        
        environmentalIssues: [
            "Ok Tedi mine devastating pollution",
            "80 million tonnes of waste per year dumped in river",
            "Massive sedimentation killing forests",
            "Fish population decline",
            "One of worst environmental disasters in history",
            "BHP settled $400 million lawsuit"
        ],
        
        waterDisputes: [
            {
                title: "Ok Tedi Mine Disaster",
                description: "BHP's mine dumped tailings directly into river since 1984; $400 million settlement in 1996 but damage continues."
            },
            {
                title: "PNG-Indonesia Border",
                description: "The Fly system is near the Indonesian border, with transboundary environmental concerns."
            }
        ],
        
        historicalImportance: [
            {
                title: "Luigi D'Albertis",
                description: "Italian explorer D'Albertis was first European to navigate the Fly in 1876."
            },
            {
                title: "Indigenous Peoples",
                description: "Home to diverse indigenous groups including Kiwai, Gogodala, and Boazi peoples."
            },
            {
                title: "WWII",
                description: "The Fly River region was a theater of the Pacific War, with Japanese and Allied forces."
            },
            {
                title: "Ok Tedi Legal Battle",
                description: "The landmark 1996 BHP lawsuit by indigenous landowners changed corporate environmental law globally."
            }
        ]
    },

    // ========================================
    // 87. VISTULA RIVER
    // ========================================
    {
        id: "vistula",
        name: "Vistula River",
        length: 1047,
        continent: "europe",
        image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=800",
        
        countries: [
            { name: "Poland", flag: "🇵🇱" }
        ],
        
        states: [
            "Silesian Voivodeship", "Lesser Poland", "Subcarpathian",
            "Masovian", "Kuyavian-Pomeranian", "Pomeranian"
        ],
        
        source: {
            location: "Barania Góra, Silesian Beskids, Western Carpathians",
            type: "Mountain springs",
            elevation: "1,106 m",
            coordinates: [49.5333, 18.9333]
        },
        
        mouth: {
            location: "Baltic Sea, at Gdańsk Bay",
            type: "Delta",
            delta: "Vistula Delta (Żuławy) - low-lying polder region",
            coordinates: [54.3500, 18.9500]
        },
        
        tributaries: {
            leftBank: [
                "Soła River",
                "Skawa River",
                "Dunajec River",
                "Wisłoka River",
                "San River",
                "Wieprz River"
            ],
            rightBank: [
                "Przemsza River",
                "Nida River",
                "Pilica River",
                "Bzura River",
                "Drwęca River",
                "Brda River"
            ]
        },
        
        distributaries: [
            "Nogat River",
            "Szkarpawa",
            "Martwa Wisła (Dead Vistula)",
            "Vistula Śmiała"
        ],
        
        majorCities: [
            "Kraków", "Sandomierz", "Warsaw", "Płock",
            "Włocławek", "Toruń", "Bydgoszcz", "Gdańsk"
        ],
        
        dams: [
            { name: "Włocławek Dam", details: "Poland, 160 MW, 1970, only dam on main Vistula" },
            { name: "Czorsztyn Dam", details: "On Dunajec tributary, 92 MW, 1997" }
        ],
        
        basinArea: "194,424 km²",
        discharge: "1,080 m³/s",
        
        riverPath: [
            [49.53, 18.93],    // Source - Barania Góra
            [49.80, 19.50],
            [50.05, 19.94],    // Kraków
            [50.68, 21.75],    // Sandomierz
            [51.50, 21.50],
            [52.23, 21.01],    // Warsaw
            [52.55, 19.70],    // Płock
            [52.65, 19.08],    // Włocławek
            [53.01, 18.61],    // Toruń
            [53.12, 18.00],    // Bydgoszcz (via Brda)
            [53.50, 18.50],
            [53.80, 19.00],
            [54.20, 18.80],
            [54.35, 18.95]     // Baltic Sea (Mouth)
        ],
        
        tributaryPaths: [
            {
                name: "San River",
                path: [
                    [49.00, 22.50],    // Bieszczady
                    [50.00, 22.00],
                    [50.70, 21.85]     // Confluence
                ]
            },
            {
                name: "Bug River",
                path: [
                    [50.50, 24.00],    // Ukraine border
                    [52.00, 22.00],
                    [52.50, 20.50]     // Confluence
                ]
            },
            {
                name: "Pilica River",
                path: [
                    [50.80, 19.50],
                    [51.50, 20.50],
                    [51.80, 20.80]     // Confluence
                ]
            },
            {
                name: "Dunajec River",
                path: [
                    [49.40, 20.40],    // Tatras
                    [50.00, 20.80],
                    [50.30, 20.90]     // Confluence
                ]
            }
        ],
        
        distributaryPaths: [
            {
                name: "Nogat River",
                path: [
                    [54.00, 19.00],
                    [54.30, 19.20]     // Vistula Lagoon
                ]
            },
            {
                name: "Dead Vistula",
                path: [
                    [54.30, 18.90],
                    [54.40, 18.70]     // Gdańsk Bay
                ]
            }
        ],
        
        cityCoordinates: [
            { name: "Kraków", coords: [50.06, 19.94] },
            { name: "Sandomierz", coords: [50.68, 21.75] },
            { name: "Warsaw", coords: [52.23, 21.01] },
            { name: "Płock", coords: [52.55, 19.70] },
            { name: "Toruń", coords: [53.01, 18.61] },
            { name: "Gdańsk", coords: [54.35, 18.65] }
        ],
        
        damCoordinates: [
            { name: "Włocławek Dam", coords: [52.62, 19.09], details: "160 MW - Only Vistula dam" },
            { name: "Czorsztyn Dam", coords: [49.44, 20.32], details: "92 MW - Dunajec tributary" }
        ],
        
        flightLandmarks: [
            { progress: 0, name: "Silesian Beskids", icon: "🏔️", description: "Carpathian source" },
            { progress: 0.10, name: "Kraków", icon: "🏛️", description: "Former royal capital" },
            { progress: 0.15, name: "Wawel Castle", icon: "🏰", description: "Royal residence" },
            { progress: 0.25, name: "Sandomierz", icon: "🏘️", description: "Medieval town" },
            { progress: 0.40, name: "San Confluence", icon: "🔀", description: "Major tributary" },
            { progress: 0.55, name: "Warsaw", icon: "🏙️", description: "Polish capital" },
            { progress: 0.65, name: "Płock", icon: "🏙️", description: "Petrochemical center" },
            { progress: 0.75, name: "Toruń", icon: "🏛️", description: "Copernicus birthplace" },
            { progress: 0.90, name: "Vistula Delta", icon: "🌿", description: "Żuławy lowlands" },
            { progress: 1.0, name: "Baltic Sea", icon: "🌊", description: "Gdańsk Bay" }
        ],
        
        economicImportance: [
            "Poland's longest and most important river",
            "85% of Poland's territory in basin",
            "Warsaw and Kraków water supply",
            "Agriculture in floodplain",
            "Navigation (limited)",
            "Hydroelectric power (Włocławek)"
        ],
        
        environmentalIssues: [
            "Pollution from industry and agriculture",
            "Limited flood protection infrastructure",
            "2010 major flooding",
            "Only one dam on main stem",
            "Water quality improvements since EU accession",
            "Climate change flooding risks"
        ],
        
        waterDisputes: [
            {
                title: "Vistula Navigation Improvement",
                description: "Plans to make the Vistula fully navigable face environmental opposition."
            },
            {
                title: "Flood Management",
                description: "Major floods (1997, 2010) highlight need for better infrastructure vs. environmental concerns."
            }
        ],
        
        historicalImportance: [
            {
                title: "Queen of Polish Rivers",
                description: "The Vistula is deeply embedded in Polish national identity, celebrated in literature and song."
            },
            {
                title: "Royal Capital",
                description: "Kraków, on the Vistula, was Poland's capital for 500 years; Wawel Castle overlooks the river."
            },
            {
                title: "Warsaw Uprising (1944)",
                description: "The Vistula divided Warsaw during the tragic 1944 uprising against Nazi occupation."
            },
            {
                title: "Nicolaus Copernicus",
                description: "The astronomer was born in Toruń on the Vistula in 1473."
            }
        ]
    },

    // ========================================
    // 88. DAUGAVA RIVER (WESTERN DVINA)
    // ========================================
    {
        id: "daugava",
        name: "Daugava River",
        length: 1020,
        continent: "europe",
        image: "https://images.unsplash.com/photo-1561542320-9a18cd340469?w=800",
        
        countries: [
            { name: "Russia", flag: "🇷🇺" },
            { name: "Belarus", flag: "🇧🇾" },
            { name: "Latvia", flag: "🇱🇻" }
        ],
        
        states: [
            "Tver Oblast", "Smolensk Oblast", "Vitebsk Region",
            "Latgale", "Vidzeme", "Riga Region"
        ],
        
        source: {
            location: "Valdai Hills, Tver Oblast, Russia",
            type: "Lake outlet (Lake Dvinets)",
            elevation: "221 m",
            coordinates: [56.8500, 32.3667]
        },
        
        mouth: {
            location: "Gulf of Riga, Baltic Sea, at Riga",
            type: "Estuary",
            delta: "Daugava estuary at Riga",
            coordinates: [57.0500, 24.0333]
        },
        
        tributaries: {
            leftBank: [
                "Mezha River",
                "Kasplya River",
                "Ulla River",
                "Drisa River"
            ],
            rightBank: [
                "Toropa River",
                "Obol River",
                "Polota River",
                "Aiviekste River",
                "Ogre River"
            ]
        },
        
        distributaries: [
            "Daugava estuary channels"
        ],
        
        majorCities: [
            "Andreapol", "Vitebsk", "Polotsk", "Daugavpils",
            "Jēkabpils", "Ogre", "Riga"
        ],
        
        dams: [
            { name: "Pļaviņas Hydroelectric Station", details: "Latvia, 893 MW, 1966" },
            { name: "Riga Hydroelectric Station", details: "Latvia, 402 MW, 1974" },
            { name: "Ķegums Hydroelectric Station", details: "Latvia, 264 MW, 1939" }
        ],
        
        basinArea: "87,900 km²",
        discharge: "678 m³/s",
        
        riverPath: [
            [56.85, 32.37],    // Source - Valdai Hills
            [56.50, 32.00],
            [55.80, 30.50],
            [55.19, 30.21],    // Vitebsk
            [55.49, 28.81],    // Polotsk
            [55.50, 27.50],
            [55.87, 26.54],    // Daugavpils
            [56.30, 25.85],
            [56.50, 25.87],    // Jēkabpils
            [56.75, 25.00],
            [56.82, 24.63],    // Pļaviņas Dam
            [56.85, 24.35],    // Ķegums Dam
            [56.88, 24.18],    // Ogre
            [56.95, 24.10],    // Riga Dam
            [57.05, 24.03]     // Gulf of Riga (Mouth)
        ],
        
        tributaryPaths: [
            {
                name: "Aiviekste River",
                path: [
                    [56.80, 26.50],    // Lubāns Lake
                    [56.70, 25.80],
                    [56.65, 25.70]     // Confluence
                ]
            },
            {
                name: "Ogre River",
                path: [
                    [56.70, 25.50],
                    [56.80, 24.80],
                    [56.82, 24.60]     // Confluence
                ]
            },
            {
                name: "Polota River",
                path: [
                    [55.80, 29.50],
                    [55.50, 29.00],
                    [55.49, 28.81]     // Confluence at Polotsk
                ]
            }
        ],
        
        distributaryPaths: [
            {
                name: "Daugava Estuary",
                path: [
                    [57.02, 24.06],
                    [57.05, 24.03]     // Gulf of Riga
                ]
            }
        ],
        
        cityCoordinates: [
            { name: "Vitebsk", coords: [55.19, 30.21] },
            { name: "Polotsk", coords: [55.49, 28.81] },
            { name: "Daugavpils", coords: [55.87, 26.54] },
            { name: "Jēkabpils", coords: [56.50, 25.87] },
            { name: "Ogre", coords: [56.82, 24.63] },
            { name: "Riga", coords: [56.95, 24.11] }
        ],
        
        damCoordinates: [
            { name: "Pļaviņas Dam", coords: [56.62, 25.22], details: "893 MW - Latvia's largest" },
            { name: "Ķegums Dam", coords: [56.75, 24.73], details: "264 MW - Historic" },
            { name: "Riga Dam", coords: [56.88, 24.20], details: "402 MW hydroelectric" }
        ],
        
        flightLandmarks: [
            { progress: 0, name: "Valdai Hills", icon: "🏔️", description: "Russian source" },
            { progress: 0.15, name: "Russia-Belarus Border", icon: "🛂", description: "Enters Belarus" },
            { progress: 0.25, name: "Vitebsk", icon: "🏙️", description: "Marc Chagall's birthplace" },
            { progress: 0.35, name: "Polotsk", icon: "🏛️", description: "Oldest Belarusian city" },
            { progress: 0.45, name: "Belarus-Latvia Border", icon: "🛂", description: "Enters Latvia" },
            { progress: 0.55, name: "Daugavpils", icon: "🏙️", description: "Latvia's second city" },
            { progress: 0.70, name: "Pļaviņas Dam", icon: "🏗️", description: "Latvia's largest dam" },
            { progress: 0.80, name: "Latvian Countryside", icon: "🌾", description: "Agricultural region" },
            { progress: 0.95, name: "Riga", icon: "🏙️", description: "Latvian capital" },
            { progress: 1.0, name: "Gulf of Riga", icon: "🌊", description: "Baltic Sea" }
        ],
        
        economicImportance: [
            "Latvia's largest river",
            "Major hydroelectric producer for Latvia",
            "Riga's water supply",
            "Navigation corridor",
            "Historic trade route",
            "Tourism and recreation"
        ],
        
        environmentalIssues: [
            "Dam cascade impacts on fish migration",
            "Eutrophication from agriculture",
            "Industrial pollution (Soviet legacy)",
            "Invasive species",
            "Climate change affecting ice cover",
            "Flooding risks in Riga"
        ],
        
        waterDisputes: [
            {
                title: "Transboundary Management",
                description: "Russia, Belarus, and Latvia coordinate on water quality and flow management."
            },
            {
                title: "Pļaviņas Dam Controversy",
                description: "The dam flooded historic sites and displaced communities; debated since its construction."
            }
        ],
        
        historicalImportance: [
            {
                title: "Amber Road",
                description: "The Daugava was part of ancient trade routes connecting the Baltic to the Mediterranean."
            },
            {
                title: "Varangian Route",
                description: "Vikings used the Daugava as part of their trade route to Constantinople."
            },
            {
                title: "Polotsk Principality",
                description: "Medieval Polotsk on the Daugava was one of the earliest Slavic states."
            },
            {
                title: "Riga Founding",
                description: "Riga was founded in 1201 at the Daugava mouth, becoming a major Hanseatic city."
            }
        ]
    },

    // ========================================
    // 89. ODER RIVER (ODRA)
    // ========================================
    {
        id: "oder",
        name: "Oder River",
        length: 854,
        continent: "europe",
        image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=800",
        
        countries: [
            { name: "Czech Republic", flag: "🇨🇿" },
            { name: "Poland", flag: "🇵🇱" },
            { name: "Germany", flag: "🇩🇪" }
        ],
        
        states: [
            "Moravian-Silesian Region", "Silesian Voivodeship",
            "Opole Voivodeship", "Lower Silesian Voivodeship",
            "Lubusz Voivodeship", "West Pomeranian Voivodeship",
            "Brandenburg", "Mecklenburg-Vorpommern"
        ],
        
        source: {
            location: "Oder Mountains (Oderské vrchy), Czech Republic",
            type: "Mountain springs",
            elevation: "634 m",
            coordinates: [49.6167, 17.5500]
        },
        
        mouth: {
            location: "Szczecin Lagoon / Baltic Sea",
            type: "Lagoon/Delta",
            delta: "Oder Delta - Szczecin Lagoon, Usedom/Wolin islands",
            coordinates: [53.8667, 14.2500]
        },
        
        tributaries: {
            leftBank: [
                "Olza River",
                "Nysa Kłodzka River",
                "Bóbr River",
                "Nysa Łużycka (Neisse) River",
                "Spree River (via Havel)"
            ],
            rightBank: [
                "Kłodnica River",
                "Mała Panew",
                "Stobrawa River",
                "Barycz River",
                "Warta River"
            ]
        },
        
        distributaries: [
            "West Oder (Westoder)",
            "East Oder (Ostoder)",
            "Regalica",
            "Peenestrom"
        ],
        
        majorCities: [
            "Ostrava", "Racibórz", "Opole", "Wrocław",
            "Frankfurt (Oder)", "Słubice", "Szczecin"
        ],
        
        dams: [
            { name: "Brzeg Dolny Dam", details: "Poland, navigation barrage" },
            { name: "Wrocław Barrages", details: "Poland, flood control system" },
            { name: "Multiple navigation locks", details: "Throughout navigable section" }
        ],
        
        basinArea: "118,861 km²",
        discharge: "567 m³/s",
        
        riverPath: [
            [49.62, 17.55],    // Source - Oder Mountains
            [49.80, 18.00],
            [49.95, 18.25],    // Ostrava area
            [50.09, 18.21],    // Racibórz
            [50.50, 17.90],
            [50.67, 17.93],    // Opole
            [51.11, 17.04],    // Wrocław
            [51.50, 16.50],
            [51.80, 15.50],
            [52.00, 14.80],
            [52.34, 14.55],    // Frankfurt (Oder)
            [52.70, 14.50],
            [53.00, 14.30],
            [53.43, 14.55],    // Szczecin
            [53.87, 14.25]     // Baltic Sea (Mouth)
        ],
        
        tributaryPaths: [
            {
                name: "Warta River",
                path: [
                    [50.80, 19.20],    // Source
                    [52.40, 16.93],    // Poznań
                    [52.73, 14.95]     // Confluence
                ]
            },
            {
                name: "Nysa Łużycka (Neisse)",
                path: [
                    [50.80, 15.00],
                    [51.80, 15.00],
                    [52.08, 14.73]     // Confluence
                ]
            },
            {
                name: "Bóbr River",
                path: [
                    [50.80, 15.60],
                    [51.50, 15.50],
                    [51.70, 15.50]     // Confluence
                ]
            },
            {
                name: "Barycz River",
                path: [
                    [51.30, 17.50],
                    [51.50, 16.80],
                    [51.55, 16.50]     // Confluence
                ]
            }
        ],
        
        distributaryPaths: [
            {
                name: "West Oder",
                path: [
                    [53.50, 14.55],
                    [53.80, 14.30]     // Szczecin Lagoon
                ]
            },
            {
                name: "East Oder",
                path: [
                    [53.50, 14.60],
                    [53.70, 14.50]     // Szczecin Lagoon
                ]
            }
        ],
        
        cityCoordinates: [
            { name: "Ostrava", coords: [49.84, 18.29] },
            { name: "Racibórz", coords: [50.09, 18.22] },
            { name: "Opole", coords: [50.67, 17.93] },
            { name: "Wrocław", coords: [51.11, 17.04] },
            { name: "Frankfurt (Oder)", coords: [52.35, 14.55] },
            { name: "Szczecin", coords: [53.43, 14.55] }
        ],
        
        damCoordinates: [
            { name: "Wrocław Barrages", coords: [51.10, 17.00], details: "Flood control system" },
            { name: "Brzeg Dolny", coords: [51.27, 16.72], details: "Navigation barrage" }
        ],
        
        flightLandmarks: [
            { progress: 0, name: "Oder Mountains", icon: "🏔️", description: "Czech source" },
            { progress: 0.10, name: "Ostrava", icon: "🏭", description: "Czech industrial city" },
            { progress: 0.20, name: "Czech-Polish Border", icon: "🛂", description: "Enters Poland" },
            { progress: 0.30, name: "Opole", icon: "🏙️", description: "Silesian city" },
            { progress: 0.40, name: "Wrocław", icon: "🏛️", description: "City of bridges" },
            { progress: 0.55, name: "Lower Silesia", icon: "🌾", description: "Floodplain agriculture" },
            { progress: 0.65, name: "Oder-Neisse Line", icon: "🛂", description: "German-Polish border" },
            { progress: 0.75, name: "Frankfurt (Oder)", icon: "🏙️", description: "Twin border city" },
            { progress: 0.90, name: "Szczecin", icon: "🚢", description: "Major port city" },
            { progress: 1.0, name: "Baltic Sea", icon: "🌊", description: "Szczecin Lagoon" }
        ],
        
        economicImportance: [
            "Forms much of the German-Polish border",
            "Navigation corridor (limited)",
            "Industrial water supply",
            "Agriculture in floodplain",
            "Szczecin port",
            "Tourism and recreation"
        ],
        
        environmentalIssues: [
            "2022 mass fish die-off (toxic algae bloom)",
            "Industrial pollution legacy",
            "Flood risks (1997 devastating flood)",
            "Mining runoff",
            "Invasive golden algae",
            "Climate change impacts"
        ],
        
        waterDisputes: [
            {
                title: "2022 Environmental Disaster",
                description: "Mass fish die-off caused by toxic Prymnesium parvum algae bloom, killing hundreds of tonnes of fish."
            },
            {
                title: "International Oder Commission",
                description: "Poland, Germany, and Czech Republic cooperate on river management since 1996."
            }
        ],
        
        historicalImportance: [
            {
                title: "Oder-Neisse Line",
                description: "The Oder-Neisse border between Germany and Poland was established after WWII in 1945."
            },
            {
                title: "Battle of Berlin",
                description: "Soviet forces crossed the Oder in April 1945 in the final push to capture Berlin."
            },
            {
                title: "Wrocław (Breslau)",
                description: "Historic Silesian capital on the Oder, with over 100 bridges, changed between German and Polish control."
            },
            {
                title: "1997 Millennium Flood",
                description: "Catastrophic flooding killed 114 people and caused $3.8 billion damage in Poland and Czech Republic."
            }
        ]
    },

    // ========================================
    // 90. ATRATO RIVER
    // ========================================
    {
        id: "atrato",
        name: "Atrato River",
        length: 750,
        continent: "south-america",
        image: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=800",
        
        countries: [
            { name: "Colombia", flag: "🇨🇴" }
        ],
        
        states: [
            "Chocó Department", "Antioquia Department"
        ],
        
        source: {
            location: "Western Cordillera of Andes, Chocó, Colombia",
            type: "Tropical highland streams",
            elevation: "3,700 m",
            coordinates: [5.6667, -76.2500]
        },
        
        mouth: {
            location: "Gulf of Urabá, Caribbean Sea",
            type: "Delta",
            delta: "Atrato Delta - large swampy delta, 600 km²",
            coordinates: [8.0833, -77.1167]
        },
        
        tributaries: {
            leftBank: [
                "Río Quito",
                "Río Bebará",
                "Río Neguá",
                "Río Murrí",
                "Río Sucio"
            ],
            rightBank: [
                "Río Andágueda",
                "Río Bojayá",
                "Río Napipí",
                "Río Truandó"
            ]
        },
        
        distributaries: [
            "Atrato Delta channels",
            "Boca Coquitos",
            "Boca Tarena",
            "Boca Leoncito"
        ],
        
        majorCities: [
            "Quibdó", "Istmina", "Vigía del Fuerte",
            "Murindó", "Riosucio", "Turbo"
        ],
        
        dams: [
            { name: "No dams", details: "River flows freely through one of wettest regions on Earth" }
        ],
        
        basinArea: "35,000 km²",
        discharge: "4,900 m³/s (one of highest for its size)",
        
        riverPath: [
            [5.67, -76.25],    // Source - Western Cordillera
            [5.80, -76.50],
            [5.69, -76.66],    // Quibdó
            [6.00, -76.70],
            [6.50, -76.80],
            [6.80, -76.90],
            [7.00, -76.95],    // Vigía del Fuerte
            [7.20, -77.00],
            [7.45, -77.05],    // Murindó
            [7.80, -77.08],
            [8.08, -77.12]     // Gulf of Urabá (Mouth)
        ],
        
        tributaryPaths: [
            {
                name: "Río Sucio",
                path: [
                    [7.30, -76.30],    // Antioquia
                    [7.40, -76.70],
                    [7.50, -77.00]     // Confluence
                ]
            },
            {
                name: "Río Andágueda",
                path: [
                    [5.50, -76.00],
                    [5.60, -76.30],
                    [5.70, -76.55]     // Confluence
                ]
            },
            {
                name: "Río Bojayá",
                path: [
                    [6.50, -77.30],
                    [6.60, -77.10],
                    [6.70, -76.95]     // Confluence
                ]
            },
            {
                name: "Río Truandó",
                path: [
                    [7.50, -77.40],
                    [7.70, -77.20],
                    [7.80, -77.10]     // Confluence
                ]
            }
        ],
        
        distributaryPaths: [
            {
                name: "Atrato Delta",
                path: [
                    [8.00, -77.10],
                    [8.08, -77.12]     // Gulf of Urabá
                ]
            },
            {
                name: "Boca Tarena",
                path: [
                    [8.00, -77.00],
                    [8.10, -76.95]     // Caribbean
                ]
            }
        ],
        
        cityCoordinates: [
            { name: "Quibdó", coords: [5.69, -76.66] },
            { name: "Istmina", coords: [5.16, -76.68] },
            { name: "Vigía del Fuerte", coords: [6.59, -76.89] },
            { name: "Murindó", coords: [7.00, -76.76] },
            { name: "Riosucio", coords: [7.44, -77.12] },
            { name: "Turbo", coords: [8.10, -76.73] }
        ],
        
        damCoordinates: [
            { name: "No Dams", coords: [6.50, -76.80], details: "Free-flowing rainforest river" }
        ],
        
        flightLandmarks: [
            { progress: 0, name: "Western Cordillera", icon: "🏔️", description: "Andean source" },
            { progress: 0.10, name: "Cloud Forest", icon: "🌳", description: "Montane forest" },
            { progress: 0.20, name: "Quibdó", icon: "🏙️", description: "Chocó capital - wettest city" },
            { progress: 0.35, name: "Chocó Rainforest", icon: "🌳", description: "Biodiversity hotspot" },
            { progress: 0.50, name: "Ciénaga Grande", icon: "🌿", description: "Vast swamp" },
            { progress: 0.65, name: "Vigía del Fuerte", icon: "🏘️", description: "River community" },
            { progress: 0.75, name: "Murindó", icon: "🏘️", description: "Emberá territory" },
            { progress: 0.85, name: "Darién Gap", icon: "🌳", description: "Impenetrable jungle" },
            { progress: 0.95, name: "Atrato Delta", icon: "🌿", description: "Vast delta wetland" },
            { progress: 1.0, name: "Gulf of Urabá", icon: "🌊", description: "Caribbean Sea" }
        ],
        
        economicImportance: [
            "One of the most biodiverse rivers on Earth",
            "Only major river crossing Colombia's Chocó",
            "Transportation for Afro-Colombian communities",
            "Timber and logging (controversial)",
            "Gold and platinum mining",
            "Fishing subsistence"
        ],
        
        environmentalIssues: [
            "Illegal gold mining and mercury contamination",
            "Deforestation and logging",
            "Armed conflict affecting river communities",
            "One of highest discharge-per-area rivers in world",
            "Colombia's Constitutional Court declared river a legal entity (2016)",
            "Biodiversity threats"
        ],
        
        waterDisputes: [
            {
                title: "River as Legal Entity",
                description: "In 2016, Colombia's Constitutional Court granted the Atrato River legal rights, the first in Latin America."
            },
            {
                title: "Mining Contamination",
                description: "Illegal mining has severely contaminated the river with mercury, affecting indigenous and Afro-Colombian communities."
            }
        ],
        
        historicalImportance: [
            {
                title: "Darién Gap",
                description: "The Atrato basin is part of the impenetrable Darién Gap, the only break in the Pan-American Highway."
            },
            {
                title: "Afro-Colombian Heritage",
                description: "The Atrato is heartland of Afro-Colombian culture, with communities descended from escaped slaves."
            },
            {
                title: "Emberá and Wounaan Peoples",
                description: "Indigenous peoples have inhabited the Atrato basin for thousands of years."
            },
            {
                title: "Legal Milestone",
                description: "The 2016 Constitutional Court ruling making the Atrato a legal entity was a landmark in environmental law."
            }
        ]
    }
];

// ============================================================
// EXPORT RIVERS DATA 9
// ============================================================

if (typeof window !== 'undefined') {
    window.RIVERS_DATA_9 = RIVERS_DATA_9;
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = RIVERS_DATA_9;
}

console.log('✅ Rivers Data 9 loaded:', RIVERS_DATA_9.length, 'rivers (81-90)');
