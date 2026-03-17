/**
 * GEOTOPIA - Rivers Data File 4
 * Rivers 31-40 (Kasai to Amu Darya)
 * Kasai, Araguaia, Jubba, Columbia, Don, Saskatchewan, Peace, Tigris, Paraguay, Amu Darya
 */

const RIVERS_DATA_4 = [
    // ========================================
    // 31. KASAI RIVER
    // ========================================
    {
        id: "kasai",
        name: "Kasai River",
        length: 2153,
        continent: "africa",
        image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=800",
        
        countries: [
            { name: "Angola", flag: "🇦🇴" },
            { name: "Democratic Republic of the Congo", flag: "🇨🇩" }
        ],
        
        states: [
            "Bié Province", "Lunda Norte", "Lunda Sul",
            "Kasai Province", "Kasai-Central Province", "Kasai-Oriental Province",
            "Kwilu Province", "Mai-Ndombe Province"
        ],
        
        source: {
            location: "Bié Plateau, Central Angola",
            type: "Highland plateau springs",
            elevation: "1,500 m",
            coordinates: [-11.5000, 18.0000]
        },
        
        mouth: {
            location: "Congo River, near Kwamouth, DRC",
            type: "Confluence",
            delta: "Joins Congo River as major tributary",
            coordinates: [-3.1667, 16.5667]
        },
        
        tributaries: {
            leftBank: [
                "Kwango River",
                "Loange River",
                "Wamba River"
            ],
            rightBank: [
                "Sankuru River",
                "Lulua River",
                "Fimi River",
                "Tshikapa River"
            ]
        },
        
        distributaries: [
            "Fimi Connection to Lake Mai-Ndombe"
        ],
        
        majorCities: [
            "Tshikapa", "Kananga", "Ilebo", "Bandundu",
            "Kikwit", "Mbuji-Mayi", "Luebo"
        ],
        
        dams: [
            { name: "No major dams", details: "River remains largely undammed, potential for hydroelectric development" }
        ],
        
        basinArea: "880,200 km²",
        discharge: "10,000 m³/s",
        
        riverPath: [
            [-11.50, 18.00],   // Source - Bié Plateau, Angola
            [-10.50, 18.50],
            [-9.50, 19.00],
            [-8.50, 19.50],
            [-7.50, 20.00],
            [-6.50, 20.50],
            [-6.42, 20.80],    // Tshikapa
            [-5.90, 22.42],    // Near Kananga
            [-5.50, 20.00],
            [-5.00, 19.00],
            [-4.50, 18.00],
            [-4.33, 20.60],    // Ilebo
            [-4.00, 17.50],
            [-3.50, 17.00],
            [-3.32, 17.37],    // Bandundu
            [-3.17, 16.57]     // Congo River (Mouth)
        ],
        
        tributaryPaths: [
            {
                name: "Kwango River",
                path: [
                    [-8.00, 16.50],    // Angola
                    [-6.00, 17.00],
                    [-4.50, 17.50]     // Confluence
                ]
            },
            {
                name: "Sankuru River",
                path: [
                    [-4.00, 24.00],    // Eastern DRC
                    [-4.00, 22.00],
                    [-4.00, 21.50]     // Confluence
                ]
            },
            {
                name: "Lulua River",
                path: [
                    [-7.00, 23.00],
                    [-6.00, 22.50],
                    [-5.50, 22.00]     // Confluence
                ]
            }
        ],
        
        distributaryPaths: [
            {
                name: "Fimi Connection",
                path: [
                    [-2.50, 18.00],
                    [-2.00, 18.50]     // Lake Mai-Ndombe
                ]
            }
        ],
        
        cityCoordinates: [
            { name: "Tshikapa", coords: [-6.42, 20.80] },
            { name: "Kananga", coords: [-5.90, 22.42] },
            { name: "Ilebo", coords: [-4.33, 20.60] },
            { name: "Bandundu", coords: [-3.32, 17.37] },
            { name: "Kikwit", coords: [-5.03, 18.82] },
            { name: "Mbuji-Mayi", coords: [-6.15, 23.60] }
        ],
        
        damCoordinates: [
            { name: "Potential Dam Sites", coords: [-5.00, 19.50], details: "Significant hydroelectric potential - undeveloped" }
        ],
        
        flightLandmarks: [
            { progress: 0, name: "Bié Plateau", icon: "🏔️", description: "Source in Angolan highlands" },
            { progress: 0.15, name: "Angola-DRC Border", icon: "🛂", description: "River crosses into DRC" },
            { progress: 0.30, name: "Tshikapa", icon: "💎", description: "Diamond mining capital" },
            { progress: 0.40, name: "Kananga", icon: "🏙️", description: "Kasai-Central capital" },
            { progress: 0.50, name: "Sankuru Confluence", icon: "🔀", description: "Major tributary joins" },
            { progress: 0.65, name: "Ilebo", icon: "🚢", description: "Major river port" },
            { progress: 0.75, name: "Kwango Confluence", icon: "🔀", description: "Left-bank tributary" },
            { progress: 0.85, name: "Bandundu", icon: "🏙️", description: "Provincial capital" },
            { progress: 1.0, name: "Congo River", icon: "🌊", description: "Joins mighty Congo" }
        ],
        
        economicImportance: [
            "World's largest source of industrial diamonds",
            "Major tributary of Congo River system",
            "River transportation corridor",
            "Fishing industry for local communities",
            "Agricultural irrigation potential",
            "Timber floating and transport"
        ],
        
        environmentalIssues: [
            "Diamond mining pollution and sedimentation",
            "Deforestation in watershed",
            "Overfishing",
            "Lack of water treatment facilities",
            "Civil conflict affecting river communities",
            "Artisanal mining impacts"
        ],
        
        waterDisputes: [
            {
                title: "Transboundary Management",
                description: "Angola and DRC have informal cooperation on the shared river, but no formal treaty exists."
            }
        ],
        
        historicalImportance: [
            {
                title: "Kuba Kingdom",
                description: "The Kasai basin was heartland of the historic Kuba Kingdom, known for its art and raffia textiles."
            },
            {
                title: "Belgian Colonial Era",
                description: "The river served as a transport route during Belgian colonial rubber and ivory extraction."
            },
            {
                title: "Diamond Discovery (1907)",
                description: "Discovery of diamonds transformed the region, making it one of the world's major diamond sources."
            }
        ]
    },

    // ========================================
    // 32. ARAGUAIA RIVER
    // ========================================
    {
        id: "araguaia",
        name: "Araguaia River",
        length: 2110,
        continent: "south-america",
        image: "https://images.unsplash.com/photo-1619468129361-605ebea04b44?w=800",
        
        countries: [
            { name: "Brazil", flag: "🇧🇷" }
        ],
        
        states: [
            "Goiás", "Mato Grosso", "Tocantins", "Pará"
        ],
        
        source: {
            location: "Serra dos Caiapós, Goiás/Mato Grosso border",
            type: "Highland springs",
            elevation: "850 m",
            coordinates: [-18.0000, -53.1667]
        },
        
        mouth: {
            location: "Tocantins River, near São João do Araguaia",
            type: "Confluence",
            delta: "Joins Tocantins to form Tocantins-Araguaia system",
            coordinates: [-5.5333, -48.6833]
        },
        
        tributaries: {
            leftBank: [
                "Rio das Mortes",
                "Cristalino River",
                "Muricizal River"
            ],
            rightBank: [
                "Javaés River",
                "Crixás-Açu River",
                "Lontra River"
            ]
        },
        
        distributaries: [
            "Javaés River (eastern branch around Bananal Island)"
        ],
        
        majorCities: [
            "Barra do Garças", "Aragarças", "Aruanã",
            "São Félix do Araguaia", "Conceição do Araguaia",
            "Araguatins", "Xambioá"
        ],
        
        dams: [
            { name: "Santa Isabel Dam", details: "Under construction, 1,080 MW planned, on lower Araguaia" }
        ],
        
        basinArea: "377,000 km²",
        discharge: "5,510 m³/s",
        
        riverPath: [
            [-18.00, -53.17],   // Source - Serra dos Caiapós
            [-17.00, -52.50],
            [-15.89, -52.26],   // Barra do Garças
            [-15.50, -51.50],
            [-14.92, -51.08],   // Aruanã
            [-14.00, -50.80],
            [-12.50, -50.50],
            [-12.00, -50.50],   // Bananal Island begins
            [-11.62, -50.67],   // São Félix do Araguaia
            [-10.00, -50.00],
            [-9.00, -49.50],
            [-8.26, -49.27],    // Conceição do Araguaia
            [-7.00, -49.00],
            [-6.41, -48.53],    // Xambioá
            [-6.00, -48.80],
            [-5.65, -48.12],    // Araguatins
            [-5.53, -48.68]     // Tocantins River (Mouth)
        ],
        
        tributaryPaths: [
            {
                name: "Rio das Mortes",
                path: [
                    [-15.50, -52.50],
                    [-14.00, -51.50],
                    [-14.70, -51.00]   // Confluence
                ]
            },
            {
                name: "Javaés River",
                path: [
                    [-13.00, -50.20],   // Splits from Araguaia
                    [-11.50, -50.00],
                    [-10.00, -49.80],
                    [-11.00, -50.20]    // Rejoins (forms Bananal Island)
                ]
            },
            {
                name: "Cristalino River",
                path: [
                    [-10.00, -51.50],
                    [-11.00, -51.00],
                    [-11.50, -50.80]    // Confluence
                ]
            }
        ],
        
        distributaryPaths: [
            {
                name: "Javaés Branch",
                path: [
                    [-13.00, -50.50],
                    [-12.00, -50.20]    // Around Bananal Island
                ]
            }
        ],
        
        cityCoordinates: [
            { name: "Barra do Garças", coords: [-15.89, -52.26] },
            { name: "Aruanã", coords: [-14.92, -51.08] },
            { name: "São Félix do Araguaia", coords: [-11.62, -50.67] },
            { name: "Conceição do Araguaia", coords: [-8.26, -49.27] },
            { name: "Xambioá", coords: [-6.41, -48.53] },
            { name: "Araguatins", coords: [-5.65, -48.12] }
        ],
        
        damCoordinates: [
            { name: "Santa Isabel Dam", coords: [-6.00, -48.50], details: "1,080 MW - Under construction" }
        ],
        
        flightLandmarks: [
            { progress: 0, name: "Serra dos Caiapós", icon: "🏔️", description: "Source in Brazilian highlands" },
            { progress: 0.15, name: "Barra do Garças", icon: "🏙️", description: "Tourism gateway" },
            { progress: 0.25, name: "Aruanã", icon: "🏖️", description: "Famous river beaches" },
            { progress: 0.35, name: "Rio das Mortes Confluence", icon: "🔀", description: "Creates Bananal Island" },
            { progress: 0.50, name: "Bananal Island", icon: "🏝️", description: "World's largest river island" },
            { progress: 0.60, name: "São Félix do Araguaia", icon: "🏘️", description: "Gateway to Bananal" },
            { progress: 0.75, name: "Conceição do Araguaia", icon: "🏙️", description: "Southern Pará hub" },
            { progress: 0.85, name: "Xambioá", icon: "📜", description: "Guerrilha do Araguaia site" },
            { progress: 1.0, name: "Tocantins River", icon: "🌊", description: "Confluence" }
        ],
        
        economicImportance: [
            "Major ecotourism destination",
            "Freshwater fishing industry (sport and commercial)",
            "Contains Bananal Island - world's largest river island (350 km long)",
            "Agriculture and cattle ranching in basin",
            "Future hydroelectric potential",
            "River beach tourism during dry season"
        ],
        
        environmentalIssues: [
            "Agricultural expansion and deforestation",
            "Mercury pollution from gold mining",
            "Dam construction threats to ecosystem",
            "Seasonal flooding pattern changes",
            "Wildlife habitat fragmentation",
            "Fire impacts from cerrado burning"
        ],
        
        waterDisputes: [
            {
                title: "Hydroelectric Development",
                description: "Proposed dams face opposition from indigenous communities and environmentalists concerned about impacts on Bananal Island."
            }
        ],
        
        historicalImportance: [
            {
                title: "Karajá Indigenous Territory",
                description: "Traditional homeland of the Karajá, Javaé, and Xambioá peoples who have lived along the river for millennia."
            },
            {
                title: "Bandeirantes Exploration",
                description: "Portuguese bandeirantes explored the Araguaia in the 17th-18th centuries seeking gold and indigenous slaves."
            },
            {
                title: "Guerrilha do Araguaia",
                description: "Site of guerrilla conflict (1972-1975) between communist insurgents and Brazilian military during the dictatorship."
            }
        ]
    },

    // ========================================
    // 33. JUBBA RIVER
    // ========================================
    {
        id: "jubba",
        name: "Jubba River",
        length: 2011,
        continent: "africa",
        image: "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=800",
        
        countries: [
            { name: "Ethiopia", flag: "🇪🇹" },
            { name: "Somalia", flag: "🇸🇴" }
        ],
        
        states: [
            "Oromia Region", "Somali Region",
            "Gedo Region", "Middle Jubba", "Lower Jubba"
        ],
        
        source: {
            location: "Ethiopian Highlands, Genale-Dawa confluence",
            type: "Highland rivers confluence",
            elevation: "2,500 m",
            coordinates: [6.5000, 40.0000]
        },
        
        mouth: {
            location: "Indian Ocean at Kismaayo, Somalia",
            type: "Estuary",
            delta: "Small estuarine delta",
            coordinates: [-0.2500, 42.5333]
        },
        
        tributaries: {
            leftBank: [
                "Genale River",
                "Dawa River",
                "Weyb River"
            ],
            rightBank: [
                "Shebelle River (seasonal overflow connection)"
            ]
        },
        
        distributaries: [
            "Jubba Delta Channels"
        ],
        
        majorCities: [
            "Negele Borana", "Dolo Odo", "Luuq",
            "Bardhere", "Bu'aale", "Jamaame", "Kismaayo"
        ],
        
        dams: [
            { name: "Genale Dawa III Dam", details: "Ethiopia, 254 MW, completed 2020" },
            { name: "Bardhere Dam (Proposed)", details: "Somalia, irrigation for 175,000 hectares, suspended" }
        ],
        
        basinArea: "497,504 km²",
        discharge: "205 m³/s (highly variable)",
        
        riverPath: [
            [6.50, 40.00],     // Source - Ethiopian Highlands
            [5.50, 41.00],
            [5.00, 42.00],     // Genale-Dawa confluence
            [4.50, 42.00],
            [4.18, 42.07],     // Dolo Odo (border)
            [3.80, 42.53],     // Luuq
            [3.50, 42.80],
            [3.00, 42.50],
            [2.35, 42.63],     // Bardhere
            [2.00, 42.50],
            [1.50, 42.80],
            [1.08, 42.58],     // Bu'aale
            [0.50, 42.50],
            [0.07, 42.75],     // Jamaame
            [0.00, 42.50],
            [-0.36, 42.55],    // Kismaayo
            [-0.25, 42.53]     // Indian Ocean (Mouth)
        ],
        
        tributaryPaths: [
            {
                name: "Genale River",
                path: [
                    [7.00, 38.50],     // Ethiopian Highlands
                    [6.00, 39.50],
                    [5.00, 42.00]      // Confluence
                ]
            },
            {
                name: "Dawa River",
                path: [
                    [5.50, 39.00],     // Ethiopia
                    [5.00, 40.50],
                    [4.50, 41.00]      // Confluence
                ]
            },
            {
                name: "Weyb River",
                path: [
                    [6.50, 38.50],
                    [6.00, 39.50]      // Joins Genale
                ]
            }
        ],
        
        distributaryPaths: [
            {
                name: "Jubba Estuary",
                path: [
                    [-0.20, 42.50],
                    [-0.25, 42.53]     // Indian Ocean
                ]
            }
        ],
        
        cityCoordinates: [
            { name: "Negele Borana", coords: [5.32, 39.58] },
            { name: "Dolo Odo", coords: [4.18, 42.07] },
            { name: "Luuq", coords: [3.80, 42.53] },
            { name: "Bardhere", coords: [2.35, 42.63] },
            { name: "Bu'aale", coords: [1.08, 42.58] },
            { name: "Jamaame", coords: [0.07, 42.75] },
            { name: "Kismaayo", coords: [-0.36, 42.55] }
        ],
        
        damCoordinates: [
            { name: "Genale Dawa III Dam", coords: [6.50, 39.50], details: "254 MW - Ethiopia's newest dam" },
            { name: "Bardhere Dam Site", coords: [2.35, 42.63], details: "Proposed irrigation dam - suspended" }
        ],
        
        flightLandmarks: [
            { progress: 0, name: "Ethiopian Highlands", icon: "🏔️", description: "Source region" },
            { progress: 0.15, name: "Genale Dawa III Dam", icon: "🏗️", description: "Ethiopia's new dam" },
            { progress: 0.25, name: "Genale-Dawa Confluence", icon: "🔀", description: "River forms" },
            { progress: 0.35, name: "Ethiopia-Somalia Border", icon: "🛂", description: "At Dolo Odo" },
            { progress: 0.45, name: "Luuq", icon: "🏘️", description: "Gedo Region town" },
            { progress: 0.55, name: "Bardhere", icon: "🏙️", description: "Middle Jubba center" },
            { progress: 0.70, name: "Bu'aale", icon: "🏘️", description: "Middle Jubba town" },
            { progress: 0.85, name: "Jamaame", icon: "🌾", description: "Agricultural hub" },
            { progress: 0.95, name: "Kismaayo", icon: "🏙️", description: "Major port city" },
            { progress: 1.0, name: "Indian Ocean", icon: "🌊", description: "River mouth" }
        ],
        
        economicImportance: [
            "Only perennial river in southern Somalia",
            "Vital for agriculture and pastoralism",
            "Irrigation for banana plantations (export crop)",
            "Livestock watering for nomadic communities",
            "Fishing communities along the river",
            "Potential for hydroelectric development"
        ],
        
        environmentalIssues: [
            "Severe drought and reduced flow in recent years",
            "Deforestation in Ethiopian upper basin",
            "Upstream dam development concerns",
            "Flooding during heavy rains",
            "Climate change vulnerability",
            "Conflict affecting water management"
        ],
        
        waterDisputes: [
            {
                title: "Ethiopian Dam Development",
                description: "Ethiopia's Genale Dawa III and planned dams raise concerns about reduced flow to Somalia's agricultural regions."
            },
            {
                title: "No Formal Treaty",
                description: "No formal water-sharing agreement exists between Ethiopia and Somalia, complicating transboundary management."
            }
        ],
        
        historicalImportance: [
            {
                title: "Somali Pastoral Lands",
                description: "The Jubba valley has been traditional homeland of Somali pastoral communities for centuries."
            },
            {
                title: "Italian Colonial Era",
                description: "Italian colonial administrators developed irrigation schemes for banana cultivation in the early 20th century."
            },
            {
                title: "Bantu Communities",
                description: "The Jubba valley is home to Somali Bantu communities with distinct agricultural traditions."
            }
        ]
    },

    // ========================================
    // 34. COLUMBIA RIVER
    // ========================================
    {
        id: "columbia",
        name: "Columbia River",
        length: 2000,
        continent: "north-america",
        image: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?w=800",
        
        countries: [
            { name: "Canada", flag: "🇨🇦" },
            { name: "United States", flag: "🇺🇸" }
        ],
        
        states: [
            "British Columbia", "Washington", "Oregon",
            "Idaho", "Montana", "Wyoming", "Nevada", "Utah"
        ],
        
        source: {
            location: "Columbia Lake, Rocky Mountains, British Columbia",
            type: "Lake outlet in Rocky Mountain Trench",
            elevation: "820 m",
            coordinates: [50.2167, -115.8500]
        },
        
        mouth: {
            location: "Pacific Ocean, Oregon/Washington border",
            type: "Estuary",
            delta: "Columbia River Estuary - major salmon habitat",
            coordinates: [46.2444, -124.0514]
        },
        
        tributaries: {
            leftBank: [
                "Kootenay River",
                "Okanogan River",
                "Yakima River",
                "Cowlitz River"
            ],
            rightBank: [
                "Spokane River",
                "Snake River",
                "Deschutes River",
                "Willamette River"
            ]
        },
        
        distributaries: [
            "Columbia Estuary Channels"
        ],
        
        majorCities: [
            "Revelstoke", "Castlegar", "Wenatchee", "Kennewick",
            "Richland", "The Dalles", "Hood River", "Portland",
            "Vancouver", "Astoria"
        ],
        
        dams: [
            { name: "Grand Coulee Dam", details: "Washington, 6,809 MW, 1942, largest US power station" },
            { name: "Chief Joseph Dam", details: "Washington, 2,620 MW, 1958" },
            { name: "John Day Dam", details: "Oregon/Washington, 2,160 MW, 1971" },
            { name: "The Dalles Dam", details: "Oregon/Washington, 1,780 MW, 1957" },
            { name: "Bonneville Dam", details: "Oregon/Washington, 1,093 MW, 1938, historic" },
            { name: "Mica Dam", details: "British Columbia, 1,805 MW, 1973" },
            { name: "Revelstoke Dam", details: "British Columbia, 2,480 MW, 1984" }
        ],
        
        basinArea: "668,000 km²",
        discharge: "7,500 m³/s",
        
        riverPath: [
            [50.22, -115.85],   // Source - Columbia Lake
            [51.28, -117.50],
            [51.00, -118.17],   // Revelstoke
            [49.32, -117.65],   // Castlegar
            [49.00, -117.65],   // US-Canada Border
            [48.72, -118.13],
            [48.00, -118.80],
            [47.97, -118.98],   // Grand Coulee Dam
            [47.95, -119.50],
            [47.50, -120.00],
            [47.42, -120.31],   // Wenatchee
            [46.83, -119.75],
            [46.29, -119.28],   // Kennewick/Richland
            [46.20, -119.03],   // Snake River confluence
            [46.05, -118.98],
            [45.67, -121.17],   // The Dalles
            [45.71, -121.52],   // Hood River
            [45.64, -121.94],   // Bonneville Dam
            [45.62, -122.60],
            [45.64, -122.66],   // Vancouver
            [45.52, -122.68],   // Portland
            [46.18, -123.18],
            [46.19, -123.83],   // Astoria
            [46.24, -124.05]    // Pacific Ocean (Mouth)
        ],
        
        tributaryPaths: [
            {
                name: "Snake River",
                path: [
                    [44.00, -110.50],   // Yellowstone region
                    [45.50, -114.00],
                    [46.50, -117.00],
                    [46.20, -119.03]    // Confluence
                ]
            },
            {
                name: "Willamette River",
                path: [
                    [43.50, -122.00],   // Oregon Cascades
                    [44.50, -123.00],
                    [45.50, -122.80],
                    [45.65, -122.77]    // Confluence at Portland
                ]
            },
            {
                name: "Kootenay River",
                path: [
                    [50.50, -115.50],   // Canadian Rockies
                    [49.50, -116.50],
                    [49.32, -117.65]    // Confluence at Castlegar
                ]
            },
            {
                name: "Deschutes River",
                path: [
                    [43.50, -121.50],
                    [44.50, -121.00],
                    [45.63, -120.92]    // Confluence
                ]
            }
        ],
        
        distributaryPaths: [
            {
                name: "Columbia Estuary",
                path: [
                    [46.25, -123.80],
                    [46.24, -124.05]    // Pacific Ocean
                ]
            }
        ],
        
        cityCoordinates: [
            { name: "Revelstoke", coords: [51.00, -118.18] },
            { name: "Castlegar", coords: [49.32, -117.67] },
            { name: "Wenatchee", coords: [47.42, -120.31] },
            { name: "Kennewick", coords: [46.21, -119.18] },
            { name: "Portland", coords: [45.52, -122.68] },
            { name: "Vancouver", coords: [45.64, -122.66] },
            { name: "Astoria", coords: [46.19, -123.83] }
        ],
        
        damCoordinates: [
            { name: "Grand Coulee Dam", coords: [47.97, -118.98], details: "6,809 MW - Largest US power station" },
            { name: "Bonneville Dam", coords: [45.64, -121.94], details: "1,093 MW - Historic 1938 dam" },
            { name: "The Dalles Dam", coords: [45.62, -121.13], details: "1,780 MW hydroelectric" },
            { name: "Mica Dam", coords: [52.07, -118.57], details: "1,805 MW - Tallest dam in Canada" }
        ],
        
        flightLandmarks: [
            { progress: 0, name: "Columbia Lake", icon: "🏔️", description: "Source in Canadian Rockies" },
            { progress: 0.10, name: "Mica Dam", icon: "🏗️", description: "Canada's tallest dam" },
            { progress: 0.18, name: "Revelstoke", icon: "🏙️", description: "BC mountain town" },
            { progress: 0.25, name: "US-Canada Border", icon: "🛂", description: "River enters USA" },
            { progress: 0.35, name: "Grand Coulee Dam", icon: "🏗️", description: "Largest US dam" },
            { progress: 0.50, name: "Snake River Confluence", icon: "🔀", description: "Largest tributary joins" },
            { progress: 0.60, name: "Columbia Gorge", icon: "🏞️", description: "Dramatic canyon" },
            { progress: 0.70, name: "Bonneville Dam", icon: "🏗️", description: "Historic first dam" },
            { progress: 0.85, name: "Portland/Vancouver", icon: "🏙️", description: "Major metro area" },
            { progress: 0.95, name: "Astoria", icon: "🏘️", description: "Historic port" },
            { progress: 1.0, name: "Pacific Ocean", icon: "🌊", description: "River mouth" }
        ],
        
        economicImportance: [
            "Largest hydroelectric producer in North America",
            "Produces 44% of total US hydroelectric power",
            "Major shipping corridor (400 km navigable)",
            "Irrigation for Columbia Basin Project (2.3 million acres)",
            "Salmon and steelhead fisheries (though diminished)",
            "Recreation and tourism industry"
        ],
        
        environmentalIssues: [
            "Salmon population decline (13 species listed as threatened/endangered)",
            "Fish ladder effectiveness concerns",
            "Hanford nuclear site contamination (largest cleanup in US)",
            "Temperature increases affecting cold-water species",
            "Dam removal debates (Snake River dams)"
        ],
        
        waterDisputes: [
            {
                title: "Columbia River Treaty (1964)",
                description: "US-Canada treaty for flood control and power sharing, under renegotiation since 2018 with focus on ecosystem function."
            },
            {
                title: "Snake River Dam Debate",
                description: "Ongoing debate about removing four Snake River dams to restore salmon runs, opposed by agriculture and barge interests."
            }
        ],
        
        historicalImportance: [
            {
                title: "Lewis and Clark Expedition",
                description: "In 1805, the Corps of Discovery followed the Columbia to the Pacific, completing their epic journey."
            },
            {
                title: "Oregon Trail Terminus",
                description: "The Columbia Gorge marked the final, treacherous leg of the Oregon Trail for thousands of pioneers."
            },
            {
                title: "Bonneville Dam (1938)",
                description: "First federal dam on the Columbia, created the Bonneville Power Administration and transformed the region."
            },
            {
                title: "Manhattan Project",
                description: "The Hanford Site on the Columbia produced plutonium for the first nuclear weapons, including the Nagasaki bomb."
            }
        ]
    },

    // ========================================
    // 35. DON RIVER
    // ========================================
    {
        id: "don",
        name: "Don River",
        length: 1950,
        continent: "europe",
        image: "https://images.unsplash.com/photo-1580502304784-8985b7eb7260?w=800",
        
        countries: [
            { name: "Russia", flag: "🇷🇺" }
        ],
        
        states: [
            "Tula Oblast", "Lipetsk Oblast", "Voronezh Oblast",
            "Volgograd Oblast", "Rostov Oblast"
        ],
        
        source: {
            location: "Near Novomoskovsk, Tula Oblast, Russia",
            type: "Springs in Central Russian Upland",
            elevation: "180 m",
            coordinates: [54.0833, 38.2833]
        },
        
        mouth: {
            location: "Sea of Azov, Taganrog Bay",
            type: "Delta",
            delta: "Don River Delta near Rostov-on-Don",
            coordinates: [47.0500, 39.2833]
        },
        
        tributaries: {
            leftBank: [
                "Voronezh River",
                "Khopyor River",
                "Medveditsa River",
                "Ilovlya River",
                "Manych River",
                "Sal River"
            ],
            rightBank: [
                "Sosna River",
                "Chir River",
                "Seversky Donets River"
            ]
        },
        
        distributaries: [
            "Don Delta Branches",
            "Volga-Don Canal (artificial connection)"
        ],
        
        majorCities: [
            "Novomoskovsk", "Voronezh", "Liski",
            "Volgodonsk", "Kalach-na-Donu", "Rostov-on-Don",
            "Azov", "Taganrog"
        ],
        
        dams: [
            { name: "Tsimlyansk Dam", details: "Russia, 209 MW, 1952, creates Tsimlyansk Reservoir" },
            { name: "Volga-Don Canal", details: "101 km, 13 locks, 1952, connects Don to Volga" },
            { name: "Nikolaevsk Hydroelectric Station", details: "Small scale, 1967" }
        ],
        
        basinArea: "422,000 km²",
        discharge: "935 m³/s",
        
        riverPath: [
            [54.08, 38.28],    // Source - Novomoskovsk
            [53.50, 38.50],
            [52.50, 39.50],
            [51.70, 39.20],
            [51.67, 39.21],    // Voronezh
            [51.00, 39.00],
            [50.98, 39.50],    // Liski
            [50.50, 41.00],
            [50.42, 41.00],    // Khopyor confluence
            [49.90, 42.50],
            [49.50, 43.50],
            [48.70, 44.00],
            [48.69, 43.53],    // Kalach-na-Donu
            [48.00, 43.50],
            [47.75, 42.10],    // Tsimlyansk Dam
            [47.51, 42.15],    // Volgodonsk
            [47.50, 42.00],
            [47.38, 40.08],    // Seversky Donets confluence
            [47.20, 40.50],
            [47.24, 39.70],    // Rostov-on-Don
            [47.09, 39.42],    // Azov
            [47.05, 39.28]     // Sea of Azov (Mouth)
        ],
        
        tributaryPaths: [
            {
                name: "Voronezh River",
                path: [
                    [52.50, 39.00],
                    [51.80, 39.15],
                    [51.67, 39.21]     // Confluence
                ]
            },
            {
                name: "Khopyor River",
                path: [
                    [52.50, 42.00],
                    [51.00, 42.00],
                    [50.42, 41.00]     // Confluence
                ]
            },
            {
                name: "Seversky Donets River",
                path: [
                    [50.00, 36.50],    // Russia/Ukraine
                    [48.50, 38.00],
                    [47.38, 40.08]     // Confluence
                ]
            },
            {
                name: "Medveditsa River",
                path: [
                    [51.50, 44.00],
                    [50.50, 43.00],
                    [49.88, 42.70]     // Confluence
                ]
            }
        ],
        
        distributaryPaths: [
            {
                name: "Don Delta",
                path: [
                    [47.10, 39.30],
                    [47.05, 39.28]     // Sea of Azov
                ]
            },
            {
                name: "Volga-Don Canal",
                path: [
                    [48.70, 44.30],    // Volga connection
                    [48.69, 43.53]     // Kalach-na-Donu
                ]
            }
        ],
        
        cityCoordinates: [
            { name: "Novomoskovsk", coords: [54.08, 38.28] },
            { name: "Voronezh", coords: [51.67, 39.21] },
            { name: "Liski", coords: [50.98, 39.50] },
            { name: "Volgodonsk", coords: [47.51, 42.15] },
            { name: "Kalach-na-Donu", coords: [48.69, 43.53] },
            { name: "Rostov-on-Don", coords: [47.24, 39.70] },
            { name: "Azov", coords: [47.09, 39.42] },
            { name: "Taganrog", coords: [47.24, 38.90] }
        ],
        
        damCoordinates: [
            { name: "Tsimlyansk Dam", coords: [47.75, 42.10], details: "209 MW - Creates large reservoir" },
            { name: "Volga-Don Canal Start", coords: [48.70, 44.30], details: "101 km canal to Volga" }
        ],
        
        flightLandmarks: [
            { progress: 0, name: "Novomoskovsk", icon: "🏙️", description: "Source area in Tula Oblast" },
            { progress: 0.15, name: "Voronezh", icon: "🏙️", description: "Million+ city" },
            { progress: 0.25, name: "Voronezh River Confluence", icon: "🔀", description: "Major tributary" },
            { progress: 0.40, name: "Khopyor Confluence", icon: "🔀", description: "Longest tributary" },
            { progress: 0.50, name: "Kalach-na-Donu", icon: "🏘️", description: "Don Bend, near Volga" },
            { progress: 0.55, name: "Volga-Don Canal", icon: "🚢", description: "Connection to Volga" },
            { progress: 0.65, name: "Tsimlyansk Dam", icon: "🏗️", description: "Major reservoir" },
            { progress: 0.75, name: "Volgodonsk", icon: "🏙️", description: "Nuclear power city" },
            { progress: 0.85, name: "Seversky Donets Confluence", icon: "🔀", description: "Major tributary" },
            { progress: 0.95, name: "Rostov-on-Don", icon: "🏙️", description: "Largest Don city" },
            { progress: 1.0, name: "Sea of Azov", icon: "🌊", description: "Don Delta" }
        ],
        
        economicImportance: [
            "Part of Unified Deep Water System of European Russia",
            "Connected to all Russian seas via Volga-Don Canal",
            "Major grain and coal shipping route",
            "Irrigation for agriculture in Don basin",
            "Important fishing industry (sturgeon historically)",
            "Industrial water supply for southern Russia"
        ],
        
        environmentalIssues: [
            "Industrial pollution from Rostov region",
            "Agricultural runoff and eutrophication",
            "Low water levels due to irrigation extraction",
            "Eutrophication of Sea of Azov",
            "Invasive species from canal connections",
            "Historic sturgeon decline"
        ],
        
        waterDisputes: [
            {
                title: "Seversky Donets Basin",
                description: "The Donets tributary is shared with Ukraine, with no recent bilateral management due to conflict since 2014."
            }
        ],
        
        historicalImportance: [
            {
                title: "Don Cossacks",
                description: "The Don basin was homeland of the Don Cossacks (Voisko Donskoe), legendary warriors who served the Russian Empire."
            },
            {
                title: "Sholokhov's Novels",
                description: "Nobel laureate Mikhail Sholokhov immortalized the Don region in 'And Quiet Flows the Don' and 'The Don Flows Home to the Sea'."
            },
            {
                title: "Battle of Stalingrad",
                description: "The Don River and nearby Volga were crucial battlegrounds in the pivotal WWII Battle of Stalingrad (1942-1943)."
            },
            {
                title: "Ancient Trade Route",
                description: "The Don connected the steppe peoples to the Black Sea, serving as a trade route since ancient times."
            }
        ]
    },
        // ========================================
    // 36. SASKATCHEWAN RIVER
    // ========================================
    {
        id: "saskatchewan",
        name: "Saskatchewan River",
        length: 1939,
        continent: "north-america",
        image: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=800",
        
        countries: [
            { name: "Canada", flag: "🇨🇦" }
        ],
        
        states: [
            "Alberta", "Saskatchewan", "Manitoba"
        ],
        
        source: {
            location: "Rocky Mountains, Alberta (via North & South Saskatchewan)",
            type: "Glacial/Mountain confluence",
            elevation: "760 m (at confluence)",
            coordinates: [52.0333, -106.0833]
        },
        
        mouth: {
            location: "Lake Winnipeg, Manitoba",
            type: "Lake inlet",
            delta: "Saskatchewan River Delta - largest inland delta in North America",
            coordinates: [53.1500, -99.2833]
        },
        
        tributaries: {
            leftBank: [
                "North Saskatchewan River",
                "Carrot River",
                "Torch River"
            ],
            rightBank: [
                "South Saskatchewan River",
                "Battle River"
            ]
        },
        
        distributaries: [
            "Saskatchewan River Delta channels"
        ],
        
        majorCities: [
            "Edmonton", "Red Deer", "Calgary", "Saskatoon",
            "Prince Albert", "North Battleford", "The Pas"
        ],
        
        dams: [
            { name: "Gardiner Dam", details: "Saskatchewan, creates Lake Diefenbaker, 1967" },
            { name: "E.B. Campbell Dam", details: "Saskatchewan, 289 MW, 1963" },
            { name: "Nipawin Dam", details: "Saskatchewan, 255 MW, 1985" },
            { name: "Bighorn Dam", details: "Alberta, 120 MW, 1972" }
        ],
        
        basinArea: "406,000 km²",
        discharge: "1,640 m³/s",
        
        riverPath: [
            [52.03, -106.08],   // Confluence - North & South Saskatchewan
            [52.50, -105.00],
            [53.00, -104.00],
            [53.20, -103.50],   // Prince Albert area
            [53.50, -103.00],
            [53.80, -102.50],
            [53.90, -102.00],
            [53.97, -101.50],   // E.B. Campbell Dam
            [53.50, -101.00],
            [53.30, -100.50],
            [53.83, -101.25],   // The Pas
            [53.50, -100.00],
            [53.30, -99.50],
            [53.15, -99.28]     // Lake Winnipeg (Mouth)
        ],
        
        tributaryPaths: [
            {
                name: "North Saskatchewan River",
                path: [
                    [52.20, -117.20],   // Columbia Icefield
                    [53.50, -113.50],   // Edmonton
                    [52.80, -108.00],
                    [52.03, -106.08]    // Confluence
                ]
            },
            {
                name: "South Saskatchewan River",
                path: [
                    [51.00, -115.50],   // Bow River source
                    [51.05, -114.07],   // Calgary
                    [52.13, -106.67],   // Saskatoon
                    [52.03, -106.08]    // Confluence
                ]
            },
            {
                name: "Battle River",
                path: [
                    [52.50, -113.00],
                    [52.80, -109.00],
                    [52.75, -108.28]    // Confluence
                ]
            }
        ],
        
        distributaryPaths: [
            {
                name: "Saskatchewan Delta",
                path: [
                    [53.50, -99.80],
                    [53.15, -99.28]     // Lake Winnipeg
                ]
            }
        ],
        
        cityCoordinates: [
            { name: "Edmonton", coords: [53.55, -113.49] },
            { name: "Calgary", coords: [51.05, -114.07] },
            { name: "Saskatoon", coords: [52.13, -106.67] },
            { name: "Prince Albert", coords: [53.20, -105.75] },
            { name: "North Battleford", coords: [52.78, -108.29] },
            { name: "The Pas", coords: [53.83, -101.25] }
        ],
        
        damCoordinates: [
            { name: "Gardiner Dam", coords: [51.10, -106.85], details: "Creates Lake Diefenbaker" },
            { name: "E.B. Campbell Dam", coords: [53.68, -102.33], details: "289 MW hydroelectric" },
            { name: "Nipawin Dam", coords: [53.37, -104.00], details: "255 MW hydroelectric" }
        ],
        
        flightLandmarks: [
            { progress: 0, name: "Forks Confluence", icon: "🔀", description: "North & South meet" },
            { progress: 0.10, name: "Prince Albert", icon: "🏙️", description: "Gateway to the north" },
            { progress: 0.25, name: "Nipawin Dam", icon: "🏗️", description: "Hydroelectric station" },
            { progress: 0.40, name: "E.B. Campbell Dam", icon: "🏗️", description: "Major dam" },
            { progress: 0.55, name: "Cumberland House", icon: "🏘️", description: "Oldest settlement in Saskatchewan" },
            { progress: 0.70, name: "Saskatchewan Delta", icon: "🌿", description: "North America's largest inland delta" },
            { progress: 0.85, name: "The Pas", icon: "🏙️", description: "Northern Manitoba hub" },
            { progress: 1.0, name: "Lake Winnipeg", icon: "🌊", description: "River terminus" }
        ],
        
        economicImportance: [
            "Irrigation for prairie agriculture",
            "Hydroelectric power generation (1,500+ MW)",
            "Municipal water supply for major cities",
            "Potash mining water supply",
            "Recreation and fishing",
            "Historic fur trade route"
        ],
        
        environmentalIssues: [
            "Climate change affecting glacial sources",
            "Agricultural runoff pollution",
            "Algae blooms in Lake Winnipeg from nutrients",
            "Flow regulation affecting delta ecosystem",
            "Invasive species concerns",
            "Drought impacts on water levels"
        ],
        
        waterDisputes: [
            {
                title: "Alberta-Saskatchewan Water Sharing",
                description: "Master Agreement on Apportionment (1969) governs water sharing between provinces, periodically reviewed."
            },
            {
                title: "Lake Winnipeg Pollution",
                description: "Nutrient loading from Saskatchewan River contributes to algae blooms, requiring interprovincial cooperation."
            }
        ],
        
        historicalImportance: [
            {
                title: "Fur Trade Highway",
                description: "The Saskatchewan was the main route for Hudson's Bay Company and North West Company fur traders from the 1700s."
            },
            {
                title: "Indigenous Homeland",
                description: "Traditional territory of Cree, Assiniboine, and other First Nations who relied on the river for millennia."
            },
            {
                title: "Cumberland House",
                description: "Founded in 1774, it's the oldest permanent settlement in Saskatchewan, established as a fur trading post."
            }
        ]
    },

    // ========================================
    // 37. PEACE RIVER
    // ========================================
    {
        id: "peace",
        name: "Peace River",
        length: 1923,
        continent: "north-america",
        image: "https://images.unsplash.com/photo-1504893524553-b855bce32c67?w=800",
        
        countries: [
            { name: "Canada", flag: "🇨🇦" }
        ],
        
        states: [
            "British Columbia", "Alberta"
        ],
        
        source: {
            location: "Confluence of Finlay and Parsnip Rivers, BC",
            type: "Mountain rivers confluence (now Williston Lake)",
            elevation: "672 m",
            coordinates: [56.0833, -123.9667]
        },
        
        mouth: {
            location: "Slave River confluence (flows to Great Slave Lake)",
            type: "Confluence",
            delta: "Peace-Athabasca Delta - UNESCO World Heritage Site",
            coordinates: [59.1167, -111.4000]
        },
        
        tributaries: {
            leftBank: [
                "Finlay River",
                "Pine River",
                "Beatton River",
                "Wabasca River"
            ],
            rightBank: [
                "Parsnip River",
                "Halfway River",
                "Smoky River",
                "Notikewin River"
            ]
        },
        
        distributaries: [
            "Peace-Athabasca Delta channels"
        ],
        
        majorCities: [
            "Hudson's Hope", "Fort St. John", "Peace River",
            "High Level", "Fort Vermilion", "Fort Chipewyan"
        ],
        
        dams: [
            { name: "W.A.C. Bennett Dam", details: "BC, 2,730 MW, 1968, creates Williston Lake" },
            { name: "Peace Canyon Dam", details: "BC, 694 MW, 1980" },
            { name: "Site C Dam", details: "BC, 1,100 MW, completed 2024" }
        ],
        
        basinArea: "293,000 km²",
        discharge: "2,100 m³/s",
        
        riverPath: [
            [56.08, -123.97],   // Source - Williston Lake/Finlay-Parsnip
            [56.03, -122.20],   // W.A.C. Bennett Dam
            [56.02, -122.00],   // Peace Canyon Dam
            [56.08, -121.90],   // Site C Dam
            [56.25, -120.85],   // Hudson's Hope
            [56.24, -120.85],   // Fort St. John area
            [56.50, -118.00],
            [56.75, -117.35],   // Peace River town
            [57.50, -116.00],
            [58.00, -115.00],
            [58.38, -116.47],   // Fort Vermilion
            [58.50, -114.00],
            [58.70, -112.50],
            [59.00, -111.50],
            [59.12, -111.40]    // Slave River confluence (Mouth)
        ],
        
        tributaryPaths: [
            {
                name: "Finlay River",
                path: [
                    [57.00, -125.50],   // Northern BC
                    [56.50, -124.50],
                    [56.08, -123.97]    // Williston Lake
                ]
            },
            {
                name: "Parsnip River",
                path: [
                    [54.50, -122.00],
                    [55.50, -123.00],
                    [56.08, -123.97]    // Williston Lake
                ]
            },
            {
                name: "Smoky River",
                path: [
                    [54.00, -118.00],
                    [55.50, -117.50],
                    [56.75, -117.30]    // Confluence
                ]
            },
            {
                name: "Wabasca River",
                path: [
                    [55.50, -114.00],
                    [57.50, -113.50],
                    [58.00, -113.00]    // Confluence
                ]
            }
        ],
        
        distributaryPaths: [
            {
                name: "Peace-Athabasca Delta",
                path: [
                    [59.00, -111.50],
                    [59.12, -111.40]    // Slave River
                ]
            }
        ],
        
        cityCoordinates: [
            { name: "Hudson's Hope", coords: [56.03, -121.91] },
            { name: "Fort St. John", coords: [56.24, -120.85] },
            { name: "Peace River", coords: [56.75, -117.35] },
            { name: "High Level", coords: [58.52, -117.14] },
            { name: "Fort Vermilion", coords: [58.38, -116.47] },
            { name: "Fort Chipewyan", coords: [58.77, -111.17] }
        ],
        
        damCoordinates: [
            { name: "W.A.C. Bennett Dam", coords: [56.03, -122.20], details: "2,730 MW - BC's largest dam" },
            { name: "Peace Canyon Dam", coords: [56.02, -122.00], details: "694 MW hydroelectric" },
            { name: "Site C Dam", coords: [56.08, -121.90], details: "1,100 MW - Completed 2024" }
        ],
        
        flightLandmarks: [
            { progress: 0, name: "Williston Lake", icon: "🌊", description: "BC's largest reservoir" },
            { progress: 0.08, name: "W.A.C. Bennett Dam", icon: "🏗️", description: "BC's largest dam" },
            { progress: 0.12, name: "Peace Canyon Dam", icon: "🏗️", description: "Second major dam" },
            { progress: 0.15, name: "Site C Dam", icon: "🏗️", description: "Newest major dam (2024)" },
            { progress: 0.25, name: "Fort St. John", icon: "🏙️", description: "Energy capital of BC" },
            { progress: 0.40, name: "BC-Alberta Border", icon: "🛂", description: "River enters Alberta" },
            { progress: 0.50, name: "Peace River Town", icon: "🏙️", description: "Regional center" },
            { progress: 0.70, name: "Fort Vermilion", icon: "🏘️", description: "Historic settlement" },
            { progress: 0.90, name: "Peace-Athabasca Delta", icon: "🌿", description: "UNESCO World Heritage" },
            { progress: 1.0, name: "Slave River", icon: "🌊", description: "Joins to flow to Arctic" }
        ],
        
        economicImportance: [
            "Major hydroelectric power generation (4,500+ MW)",
            "Oil and gas industry water supply",
            "Agriculture in Peace River region",
            "Forestry industry",
            "Part of Mackenzie River system (Arctic drainage)",
            "Tourism and recreation"
        ],
        
        environmentalIssues: [
            "Dam impacts on Peace-Athabasca Delta (UNESCO site)",
            "Altered flow regimes affecting ecosystems",
            "Oil sands development concerns",
            "Climate change affecting water levels",
            "Fish passage barriers",
            "Site C Dam controversy and environmental impacts"
        ],
        
        waterDisputes: [
            {
                title: "Peace-Athabasca Delta",
                description: "Dams have altered natural flooding patterns critical to the UNESCO World Heritage delta ecosystem."
            },
            {
                title: "Site C Dam Controversy",
                description: "Controversial 1,100 MW dam completed in 2024 despite Indigenous opposition and environmental concerns."
            }
        ],
        
        historicalImportance: [
            {
                title: "Peace Treaty",
                description: "Named for a peace treaty between Cree and Beaver (Dane-zaa) First Nations, negotiated at Peace Point."
            },
            {
                title: "Alexander Mackenzie Route",
                description: "Explorer Alexander Mackenzie traveled the Peace River in 1793 on his journey to the Pacific Ocean."
            },
            {
                title: "Fur Trade Era",
                description: "Vital fur trade route connecting northern regions to southern markets from the 1700s."
            }
        ]
    },

    // ========================================
    // 38. TIGRIS RIVER
    // ========================================
    {
        id: "tigris",
        name: "Tigris River",
        length: 1900,
        continent: "asia",
        image: "https://images.unsplash.com/photo-1579606032821-4e6161c81bd3?w=800",
        
        countries: [
            { name: "Turkey", flag: "🇹🇷" },
            { name: "Syria", flag: "🇸🇾" },
            { name: "Iraq", flag: "🇮🇶" }
        ],
        
        states: [
            "Diyarbakır Province", "Şırnak Province",
            "Al-Hasakah Governorate", "Nineveh Governorate",
            "Saladin Governorate", "Baghdad Governorate", "Basra Governorate"
        ],
        
        source: {
            location: "Taurus Mountains, Eastern Turkey",
            type: "Mountain lake (Lake Hazar region)",
            elevation: "1,150 m",
            coordinates: [38.4333, 39.4333]
        },
        
        mouth: {
            location: "Shatt al-Arab (confluence with Euphrates), Iraq",
            type: "Confluence",
            delta: "Joins Euphrates to form Shatt al-Arab flowing to Persian Gulf",
            coordinates: [31.0000, 47.4333]
        },
        
        tributaries: {
            leftBank: [
                "Greater Zab",
                "Lesser Zab",
                "Adhaim River",
                "Diyala River"
            ],
            rightBank: [
                "Batman River",
                "Khabur River (Turkish)",
                "Tharthar Canal"
            ]
        },
        
        distributaries: [
            "Shatt al-Arab (combined with Euphrates)"
        ],
        
        majorCities: [
            "Diyarbakır", "Cizre", "Mosul", "Tikrit",
            "Samarra", "Baghdad", "Kut", "Amarah", "Basra"
        ],
        
        dams: [
            { name: "Ilısu Dam", details: "Turkey, 1,200 MW, 2020, controversial" },
            { name: "Mosul Dam", details: "Iraq, 1,052 MW, 1986, structurally at risk" },
            { name: "Samarra Barrage", details: "Iraq, controls Tharthar Lake" },
            { name: "Kut Barrage", details: "Iraq, irrigation and navigation" }
        ],
        
        basinArea: "375,000 km²",
        discharge: "1,500 m³/s (highly variable)",
        
        riverPath: [
            [38.43, 39.43],    // Source - Taurus Mountains
            [38.00, 40.00],
            [37.91, 40.23],    // Diyarbakır
            [37.50, 41.00],
            [37.33, 42.42],    // Cizre (Turkey-Syria border)
            [37.00, 42.50],    // Brief Syria border
            [36.34, 43.13],    // Mosul
            [35.50, 43.50],
            [34.60, 43.68],    // Tikrit
            [34.20, 43.87],    // Samarra
            [33.50, 44.00],
            [33.34, 44.40],    // Baghdad
            [33.00, 44.50],
            [32.50, 45.80],    // Kut
            [31.85, 47.15],    // Amarah
            [31.50, 47.30],
            [31.00, 47.43]     // Shatt al-Arab (Mouth)
        ],
        
        tributaryPaths: [
            {
                name: "Greater Zab",
                path: [
                    [37.50, 44.00],    // Turkey
                    [36.50, 43.50],
                    [36.00, 43.30]     // Confluence near Mosul
                ]
            },
            {
                name: "Lesser Zab",
                path: [
                    [36.50, 45.50],    // Iran border
                    [36.00, 44.50],
                    [35.10, 43.50]     // Confluence
                ]
            },
            {
                name: "Diyala River",
                path: [
                    [35.00, 46.50],    // Iran
                    [34.00, 45.50],
                    [33.35, 44.50]     // Confluence below Baghdad
                ]
            },
            {
                name: "Khabur River",
                path: [
                    [37.50, 43.00],
                    [37.00, 42.80],
                    [36.80, 42.95]     // Confluence
                ]
            }
        ],
        
        distributaryPaths: [
            {
                name: "Shatt al-Arab",
                path: [
                    [31.00, 47.43],
                    [30.50, 48.00],
                    [29.95, 48.57]     // Persian Gulf
                ]
            }
        ],
        
        cityCoordinates: [
            { name: "Diyarbakır", coords: [37.91, 40.23] },
            { name: "Cizre", coords: [37.33, 42.42] },
            { name: "Mosul", coords: [36.34, 43.13] },
            { name: "Tikrit", coords: [34.60, 43.68] },
            { name: "Samarra", coords: [34.20, 43.87] },
            { name: "Baghdad", coords: [33.34, 44.40] },
            { name: "Kut", coords: [32.50, 45.83] },
            { name: "Basra", coords: [30.51, 47.81] }
        ],
        
        damCoordinates: [
            { name: "Ilısu Dam", coords: [37.47, 41.88], details: "1,200 MW - Turkey's controversial dam" },
            { name: "Mosul Dam", coords: [36.63, 42.82], details: "1,052 MW - Structurally at risk" },
            { name: "Samarra Barrage", coords: [34.20, 43.80], details: "Controls Tharthar Lake" }
        ],
        
        flightLandmarks: [
            { progress: 0, name: "Taurus Mountains", icon: "🏔️", description: "Source in Turkey" },
            { progress: 0.10, name: "Diyarbakır", icon: "🏙️", description: "Ancient walled city" },
            { progress: 0.18, name: "Ilısu Dam", icon: "🏗️", description: "Turkey's controversial dam" },
            { progress: 0.25, name: "Turkey-Syria Border", icon: "🛂", description: "Brief Syrian section" },
            { progress: 0.35, name: "Mosul", icon: "🏙️", description: "Ancient Nineveh nearby" },
            { progress: 0.40, name: "Mosul Dam", icon: "🏗️", description: "Structurally at risk" },
            { progress: 0.55, name: "Tikrit", icon: "🏛️", description: "Historic city" },
            { progress: 0.60, name: "Samarra", icon: "🕌", description: "Famous spiral minaret" },
            { progress: 0.75, name: "Baghdad", icon: "🏙️", description: "Iraq's capital" },
            { progress: 0.90, name: "Mesopotamian Marshes", icon: "🌿", description: "Restored wetlands" },
            { progress: 1.0, name: "Shatt al-Arab", icon: "🌊", description: "Joins Euphrates" }
        ],
        
        economicImportance: [
            "Cradle of civilization - Mesopotamia",
            "Irrigation for Iraqi agriculture",
            "Hydroelectric power (Turkey and Iraq)",
            "Oil industry water supply",
            "Transportation corridor",
            "Drinking water for millions"
        ],
        
        environmentalIssues: [
            "Turkish dams reducing downstream flow",
            "Drought and water scarcity",
            "Pollution from urban and industrial sources",
            "Mesopotamian Marshes drainage (partially restored)",
            "Salinization of agricultural lands",
            "Climate change impacts"
        ],
        
        waterDisputes: [
            {
                title: "Turkey-Iraq Water Dispute",
                description: "Turkey's GAP project dams (including Ilısu) significantly reduce downstream flow to Iraq, causing ongoing diplomatic tensions."
            },
            {
                title: "Mosul Dam Safety",
                description: "The dam is built on unstable gypsum foundation, requiring constant grouting; failure could flood Mosul and Baghdad."
            }
        ],
        
        historicalImportance: [
            {
                title: "Cradle of Civilization",
                description: "Together with Euphrates, the Tigris enabled Mesopotamian civilization - Sumer, Akkad, Babylon, and Assyria."
            },
            {
                title: "Ancient Nineveh",
                description: "The Assyrian capital of Nineveh stood on the Tigris opposite modern Mosul, one of the ancient world's greatest cities."
            },
            {
                title: "Baghdad's Golden Age",
                description: "Founded on the Tigris in 762 CE, Baghdad became the world's largest city and center of the Islamic Golden Age."
            },
            {
                title: "Biblical Reference",
                description: "The Tigris (Hiddekel) is mentioned in Genesis as one of the four rivers flowing from the Garden of Eden."
            }
        ]
    },

    // ========================================
    // 39. PARAGUAY RIVER
    // ========================================
    {
        id: "paraguay",
        name: "Paraguay River",
        length: 2549,
        continent: "south-america",
        image: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=800",
        
        countries: [
            { name: "Brazil", flag: "🇧🇷" },
            { name: "Paraguay", flag: "🇵🇾" },
            { name: "Argentina", flag: "🇦🇷" }
        ],
        
        states: [
            "Mato Grosso", "Mato Grosso do Sul",
            "Alto Paraguay", "Presidente Hayes", "Central",
            "Formosa", "Chaco", "Corrientes"
        ],
        
        source: {
            location: "Mato Grosso Plateau, Brazil",
            type: "Plateau springs",
            elevation: "300 m",
            coordinates: [-14.4167, -56.2500]
        },
        
        mouth: {
            location: "Paraná River confluence, near Corrientes, Argentina",
            type: "Confluence",
            delta: "Joins Paraná River, continues to Río de la Plata",
            coordinates: [-27.2833, -58.6333]
        },
        
        tributaries: {
            leftBank: [
                "Jauru River",
                "Cuiabá River",
                "Taquari River",
                "Miranda River"
            ],
            rightBank: [
                "Apa River",
                "Pilcomayo River",
                "Bermejo River"
            ]
        },
        
        distributaries: [
            "Pantanal wetland channels"
        ],
        
        majorCities: [
            "Cáceres", "Corumbá", "Puerto Suárez", "Concepción",
            "Asunción", "Pilar", "Formosa", "Corrientes"
        ],
        
        dams: [
            { name: "No major dams on main channel", details: "River is largely free-flowing for navigation" },
            { name: "Pilcomayo structures", details: "Various weirs on tributaries" }
        ],
        
        basinArea: "1,095,000 km²",
        discharge: "4,300 m³/s",
        
        riverPath: [
            [-14.42, -56.25],   // Source - Mato Grosso
            [-15.50, -57.00],
            [-16.05, -57.68],   // Cáceres
            [-17.00, -57.50],
            [-17.50, -57.60],
            [-18.50, -57.65],
            [-19.02, -57.65],   // Corumbá
            [-19.50, -57.50],
            [-20.50, -57.90],
            [-21.50, -57.85],
            [-22.04, -57.87],   // Apa River confluence (Brazil-Paraguay border)
            [-22.50, -57.80],
            [-23.25, -57.63],   // Concepción
            [-24.00, -57.50],
            [-25.00, -57.55],
            [-25.27, -57.63],   // Asunción
            [-26.00, -58.00],
            [-26.87, -58.32],   // Pilar
            [-27.00, -58.50],
            [-27.28, -58.63]    // Paraná River (Mouth)
        ],
        
        tributaryPaths: [
            {
                name: "Cuiabá River",
                path: [
                    [-15.60, -56.10],   // Cuiabá city
                    [-17.00, -56.50],
                    [-17.85, -57.45]    // Confluence
                ]
            },
            {
                name: "Pilcomayo River",
                path: [
                    [-20.50, -63.50],   // Bolivia
                    [-22.00, -62.00],
                    [-25.00, -58.00],
                    [-25.30, -57.70]    // Confluence near Asunción
                ]
            },
            {
                name: "Bermejo River",
                path: [
                    [-23.00, -64.50],   // Bolivia
                    [-25.00, -61.00],
                    [-26.50, -58.50]    // Confluence
                ]
            },
            {
                name: "Taquari River",
                path: [
                    [-18.00, -54.50],
                    [-19.00, -56.00],
                    [-19.25, -57.00]    // Confluence
                ]
            }
        ],
        
        distributaryPaths: [
            {
                name: "Pantanal Channels",
                path: [
                    [-18.00, -57.50],
                    [-18.50, -57.00]    // Wetland area
                ]
            }
        ],
        
        cityCoordinates: [
            { name: "Cáceres", coords: [-16.05, -57.68] },
            { name: "Corumbá", coords: [-19.02, -57.65] },
            { name: "Concepción", coords: [-23.25, -57.63] },
            { name: "Asunción", coords: [-25.27, -57.63] },
            { name: "Pilar", coords: [-26.87, -58.32] },
            { name: "Formosa", coords: [-26.18, -58.18] },
            { name: "Corrientes", coords: [-27.47, -58.83] }
        ],
        
        damCoordinates: [
            { name: "Hidrovia Navigation", coords: [-20.00, -57.70], details: "No dams - major shipping channel" }
        ],
        
        flightLandmarks: [
            { progress: 0, name: "Mato Grosso Plateau", icon: "🏔️", description: "Source region" },
            { progress: 0.10, name: "Cáceres", icon: "🏙️", description: "Brazilian river town" },
            { progress: 0.25, name: "Pantanal Wetlands", icon: "🌿", description: "World's largest tropical wetland" },
            { progress: 0.35, name: "Corumbá", icon: "🏙️", description: "Gateway to Pantanal" },
            { progress: 0.45, name: "Brazil-Paraguay Border", icon: "🛂", description: "Apa River confluence" },
            { progress: 0.55, name: "Concepción", icon: "🏙️", description: "Northern Paraguay" },
            { progress: 0.70, name: "Asunción", icon: "🏙️", description: "Capital of Paraguay" },
            { progress: 0.80, name: "Pilcomayo Confluence", icon: "🔀", description: "Major tributary" },
            { progress: 0.90, name: "Pilar", icon: "🏘️", description: "Southern Paraguay" },
            { progress: 1.0, name: "Paraná River", icon: "🌊", description: "Confluence" }
        ],
        
        economicImportance: [
            "Major navigation corridor (Hidrovia Paraguay-Paraná)",
            "Connects landlocked Paraguay to Atlantic",
            "Soybean and grain export route",
            "Sustains Pantanal wetland ecosystem",
            "Fishing industry",
            "Tourism (Pantanal wildlife)"
        ],
        
        environmentalIssues: [
            "Deforestation in upper basin",
            "Agricultural runoff and pollution",
            "Proposed hydrovia dredging threats to Pantanal",
            "Climate change affecting flood patterns",
            "Overfishing in some areas",
            "Invasive species (golden mussel)"
        ],
        
        waterDisputes: [
            {
                title: "Hidrovia Project",
                description: "Proposed deepening and straightening for shipping faces opposition due to potential impacts on Pantanal wetlands."
            },
            {
                title: "Pilcomayo River",
                description: "Argentina, Paraguay, and Bolivia negotiate over the Pilcomayo tributary's changing course and sedimentation."
            }
        ],
        
        historicalImportance: [
            {
                title: "Paraguayan War (1864-1870)",
                description: "The Paraguay River was a crucial theater of the devastating War of the Triple Alliance, South America's bloodiest conflict."
            },
            {
                title: "Jesuit Missions",
                description: "Jesuit missionaries established famous reductions along the river in the 17th-18th centuries."
            },
            {
                title: "Colonial Navigation",
                description: "Spanish colonizers used the river as a primary route into the heart of South America from Buenos Aires."
            }
        ]
    },

    // ========================================
    // 40. AMU DARYA
    // ========================================
    {
        id: "amu-darya",
        name: "Amu Darya",
        length: 2400,
        continent: "asia",
        image: "https://images.unsplash.com/photo-1596402184320-417e7178b2cd?w=800",
        
        countries: [
            { name: "Afghanistan", flag: "🇦🇫" },
            { name: "Tajikistan", flag: "🇹🇯" },
            { name: "Uzbekistan", flag: "🇺🇿" },
            { name: "Turkmenistan", flag: "🇹🇲" }
        ],
        
        states: [
            "Badakhshan", "Kunduz", "Balkh",
            "Gorno-Badakhshan", "Khatlon",
            "Surkhandarya", "Bukhara", "Khorezm",
            "Lebap", "Daşoguz"
        ],
        
        source: {
            location: "Pamir Mountains, confluence of Vakhsh and Panj Rivers",
            type: "Glacial/Mountain rivers",
            elevation: "2,500 m",
            coordinates: [37.1167, 68.3167]
        },
        
        mouth: {
            location: "South Aral Sea (historically), Uzbekistan",
            type: "Delta (shrinking)",
            delta: "Amu Darya Delta - severely reduced, often doesn't reach sea",
            coordinates: [43.7667, 59.0333]
        },
        
        tributaries: {
            leftBank: [
                "Vakhsh River",
                "Kafirnigan River",
                "Surkhan Darya",
                "Sherabad River"
            ],
            rightBank: [
                "Panj River",
                "Kunduz River",
                "Kokcha River"
            ]
        },
        
        distributaries: [
            "Amu Darya Delta channels (mostly dry)",
            "Karakum Canal (artificial)"
        ],
        
        majorCities: [
            "Fayzabad", "Kunduz", "Mazar-i-Sharif", "Termez",
            "Türkmenabat", "Bukhara", "Urgench", "Nukus"
        ],
        
        dams: [
            { name: "Nurek Dam", details: "Tajikistan, 3,000 MW, 1980, on Vakhsh tributary" },
            { name: "Rogun Dam", details: "Tajikistan, 3,600 MW, under construction, world's tallest" },
            { name: "Tuyamuyun Reservoir", details: "Uzbekistan/Turkmenistan border, 1980" },
            { name: "Karakum Canal", details: "Turkmenistan, 1,375 km, world's largest irrigation canal" }
        ],
        
        basinArea: "534,739 km²",
        discharge: "1,400 m³/s (much reduced from historic levels)",
        
        riverPath: [
            [37.12, 68.32],    // Source - Vakhsh-Panj confluence
            [37.50, 68.00],
            [37.83, 67.08],    // Kunduz confluence
            [37.40, 66.50],
            [37.22, 67.28],    // Termez
            [38.00, 66.00],
            [38.50, 64.00],
            [39.00, 63.50],
            [39.48, 63.57],    // Türkmenabat
            [40.00, 62.50],
            [41.00, 61.00],
            [41.55, 60.63],    // Urgench area
            [42.00, 60.00],
            [42.46, 59.60],    // Nukus
            [43.00, 59.50],
            [43.77, 59.03]     // South Aral Sea (Mouth - often dry)
        ],
        
        tributaryPaths: [
            {
                name: "Vakhsh River",
                path: [
                    [39.00, 71.00],    // Pamirs
                    [38.50, 69.50],
                    [37.50, 68.50],
                    [37.12, 68.32]     // Confluence
                ]
            },
            {
                name: "Panj River",
                path: [
                    [37.00, 72.00],    // Wakhan
                    [37.50, 70.00],
                    [37.12, 68.32]     // Confluence
                ]
            },
            {
                name: "Kunduz River",
                path: [
                    [36.00, 68.50],    // Afghanistan
                    [36.73, 68.87],    // Kunduz city
                    [37.83, 67.08]     // Confluence
                ]
            },
            {
                name: "Surkhan Darya",
                path: [
                    [38.50, 67.50],
                    [37.80, 67.20],
                    [37.40, 67.20]     // Confluence
                ]
            }
        ],
        
        distributaryPaths: [
            {
                name: "Amu Darya Delta",
                path: [
                    [43.00, 59.50],
                    [43.77, 59.03]     // South Aral Sea
                ]
            },
            {
                name: "Karakum Canal",
                path: [
                    [39.00, 63.00],
                    [38.00, 58.00],
                    [37.95, 58.38]     // Ashgabat direction
                ]
            }
        ],
        
        cityCoordinates: [
            { name: "Fayzabad", coords: [37.12, 70.58] },
            { name: "Kunduz", coords: [36.73, 68.87] },
            { name: "Mazar-i-Sharif", coords: [36.71, 67.11] },
            { name: "Termez", coords: [37.22, 67.28] },
            { name: "Türkmenabat", coords: [39.48, 63.57] },
            { name: "Urgench", coords: [41.55, 60.63] },
            { name: "Nukus", coords: [42.46, 59.60] }
        ],
        
        damCoordinates: [
            { name: "Nurek Dam", coords: [38.38, 69.35], details: "3,000 MW - Once world's tallest" },
            { name: "Rogun Dam", coords: [38.70, 69.68], details: "3,600 MW - World's tallest when complete" },
            { name: "Tuyamuyun Reservoir", coords: [41.80, 60.50], details: "Border reservoir" }
        ],
        
        flightLandmarks: [
            { progress: 0, name: "Vakhsh-Panj Confluence", icon: "🔀", description: "River forms" },
            { progress: 0.10, name: "Afghan-Tajik Border", icon: "🛂", description: "River forms boundary" },
            { progress: 0.20, name: "Kunduz Confluence", icon: "🔀", description: "Afghan tributary joins" },
            { progress: 0.30, name: "Termez", icon: "🏙️", description: "Uzbek border city" },
            { progress: 0.40, name: "Uzbekistan-Turkmenistan Border", icon: "🛂", description: "River forms boundary" },
            { progress: 0.50, name: "Türkmenabat", icon: "🏙️", description: "Turkmen city" },
            { progress: 0.55, name: "Karakum Canal", icon: "🚿", description: "World's largest irrigation canal" },
            { progress: 0.70, name: "Urgench", icon: "🏙️", description: "Near ancient Khiva" },
            { progress: 0.85, name: "Nukus", icon: "🏙️", description: "Karakalpakstan capital" },
            { progress: 1.0, name: "South Aral Sea", icon: "🏜️", description: "Often doesn't reach (dried)" }
        ],
        
        economicImportance: [
            "Cotton irrigation - main water consumer",
            "Hydroelectric power (Tajikistan dams)",
            "Agriculture in desert regions",
            "Drinking water for millions",
            "Once vital for Aral Sea fisheries",
            "Historic Silk Road crossing"
        ],
        
        environmentalIssues: [
            "Aral Sea disaster - one of world's worst environmental catastrophes",
            "River rarely reaches Aral Sea due to irrigation diversions",
            "Karakum Canal loses 50% of water to evaporation/seepage",
            "Salinization of irrigated lands",
            "Toxic dust storms from dry Aral seabed",
            "Over-extraction for cotton cultivation"
        ],
        
        waterDisputes: [
            {
                title: "Rogun Dam Dispute",
                description: "Uzbekistan opposed Tajikistan's giant dam, fearing reduced downstream flow; relations improved after Uzbek leadership change."
            },
            {
                title: "Aral Sea Crisis",
                description: "Soviet-era irrigation policies destroyed the Aral Sea; countries now cooperate through International Fund for Saving the Aral Sea."
            },
            {
                title: "Afghanistan Water Rights",
                description: "Afghanistan has no formal water-sharing treaty with downstream nations, creating future conflict potential."
            }
        ],
        
        historicalImportance: [
            {
                title: "Ancient Oxus",
                description: "Known as the Oxus in antiquity, the river was a boundary of the Persian and Greek worlds, crossed by Alexander the Great in 329 BCE."
            },
            {
                title: "Silk Road",
                description: "Cities along the Amu Darya - Bukhara, Samarkand, Khiva - were legendary Silk Road trading centers."
            },
            {
                title: "Soviet Cotton Campaign",
                description: "Soviet planners diverted the river for cotton irrigation, resulting in the destruction of the Aral Sea ecosystem."
            },
            {
                title: "Ancient Khwarezm",
                description: "The Amu Darya delta was home to the ancient Khwarezmian civilization, one of the world's oldest irrigated cultures."
            }
        ]
    }
];

// ============================================================
// EXPORT RIVERS DATA 4
// ============================================================

if (typeof window !== 'undefined') {
    window.RIVERS_DATA_4 = RIVERS_DATA_4;
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = RIVERS_DATA_4;
}

console.log('✅ Rivers Data 4 loaded:', RIVERS_DATA_4.length, 'rivers (31-40)');
