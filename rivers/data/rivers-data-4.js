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
    }
