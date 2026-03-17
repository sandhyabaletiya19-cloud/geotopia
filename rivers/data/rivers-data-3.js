/**
 * GEOTOPIA - Rivers Data File 3
 * Rivers 21-30 (Yukon to Irrawaddy)
 * Yukon, Indus, Rio Grande, São Francisco, Salween, Colorado, Syr Darya, Dnieper, Orange, Irrawaddy
 */

const RIVERS_DATA_3 = [
    // ========================================
    // 21. YUKON RIVER
    // ========================================
    {
        id: "yukon",
        name: "Yukon River",
        length: 3185,
        continent: "north-america",
        image: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?w=800",
        
        countries: [
            { name: "Canada", flag: "🇨🇦" },
            { name: "United States", flag: "🇺🇸" }
        ],
        
        states: [
            "British Columbia", "Yukon Territory", "Alaska"
        ],
        
        source: {
            location: "Llewellyn Glacier, British Columbia, Canada",
            type: "Glacier",
            elevation: "645 m",
            coordinates: [59.6167, -134.3333]
        },
        
        mouth: {
            location: "Bering Sea, Alaska, USA",
            type: "Delta",
            delta: "Yukon-Kuskokwim Delta",
            coordinates: [62.5975, -164.8000]
        },
        
        tributaries: {
            leftBank: [
                "Pelly River",
                "Tanana River",
                "Innoko River",
                "Koyukuk River"
            ],
            rightBank: [
                "Teslin River",
                "White River",
                "Stewart River",
                "Klondike River",
                "Porcupine River"
            ]
        },
        
        distributaries: [
            "Yukon Delta North Channel",
            "Yukon Delta South Channel",
            "Apoon Pass"
        ],
        
        majorCities: [
            "Whitehorse", "Dawson City", "Fairbanks", "Eagle",
            "Circle", "Fort Yukon", "Tanana", "Galena", "Emmonak"
        ],
        
        dams: [
            { name: "Whitehorse Rapids Dam", details: "Yukon, Canada, 40 MW, completed 1958" }
        ],
        
        basinArea: "854,000 km²",
        discharge: "6,430 m³/s",
        
        riverPath: [
            [59.62, -134.33],   // Source - Llewellyn Glacier
            [60.00, -134.80],
            [60.72, -135.05],   // Whitehorse
            [60.85, -135.38],
            [61.05, -137.35],
            [61.95, -140.50],
            [62.97, -141.00],   // US-Canada Border
            [63.43, -142.78],
            [63.87, -145.25],
            [64.08, -145.53],
            [64.57, -149.08],   // Tanana confluence
            [64.85, -147.72],
            [65.25, -152.25],
            [65.83, -156.83],
            [64.72, -158.10],
            [64.10, -159.85],
            [63.33, -161.50],
            [62.97, -163.03],
            [62.60, -164.80]    // Bering Sea (Mouth)
        ],
        
        tributaryPaths: [
            {
                name: "Tanana River",
                path: [
                    [63.50, -143.00],
                    [64.00, -146.00],
                    [64.57, -149.08]   // Confluence
                ]
            },
            {
                name: "Klondike River",
                path: [
                    [64.20, -138.50],
                    [64.03, -139.42]   // Dawson City confluence
                ]
            },
            {
                name: "Porcupine River",
                path: [
                    [67.50, -141.00],
                    [66.95, -143.50],
                    [66.56, -145.27]   // Confluence
                ]
            }
        ],
        
        distributaryPaths: [
            {
                name: "Yukon Delta North Channel",
                path: [
                    [62.60, -164.50],
                    [62.95, -164.50]   // Bering Sea
                ]
            },
            {
                name: "Yukon Delta South Channel",
                path: [
                    [62.60, -164.50],
                    [62.40, -165.00]   // Bering Sea
                ]
            }
        ],
        
        cityCoordinates: [
            { name: "Whitehorse", coords: [60.72, -135.06] },
            { name: "Dawson City", coords: [64.07, -139.42] },
            { name: "Fairbanks", coords: [64.84, -147.72] },
            { name: "Fort Yukon", coords: [66.56, -145.27] },
            { name: "Tanana", coords: [65.17, -152.08] },
            { name: "Emmonak", coords: [62.78, -164.52] }
        ],
        
        damCoordinates: [
            { name: "Whitehorse Rapids Dam", coords: [60.71, -135.04], details: "40 MW hydroelectric" }
        ],
        
        flightLandmarks: [
            { progress: 0, name: "Llewellyn Glacier", icon: "🏔️", description: "Source of the Yukon" },
            { progress: 0.10, name: "Whitehorse", icon: "🏙️", description: "Capital of Yukon Territory" },
            { progress: 0.25, name: "Pelly River Confluence", icon: "🔀", description: "Major tributary joins" },
            { progress: 0.35, name: "Dawson City", icon: "⛏️", description: "Klondike Gold Rush town" },
            { progress: 0.40, name: "US-Canada Border", icon: "🛂", description: "River enters Alaska" },
            { progress: 0.55, name: "Tanana River Confluence", icon: "🔀", description: "Largest tributary joins" },
            { progress: 0.70, name: "Fort Yukon", icon: "🏘️", description: "Arctic Circle crossing" },
            { progress: 0.85, name: "Koyukuk River Confluence", icon: "🔀", description: "Major Alaskan tributary" },
            { progress: 1.0, name: "Bering Sea Delta", icon: "🌊", description: "Yukon-Kuskokwim Delta" }
        ],
        
        economicImportance: [
            "Historic Klondike Gold Rush route (1896-1899)",
            "Salmon fisheries (Chinook, Chum, Coho)",
            "Subsistence hunting and fishing for indigenous peoples",
            "Hydroelectric power generation",
            "Summer river transportation",
            "Tourism and recreation"
        ],
        
        environmentalIssues: [
            "Climate change affecting permafrost",
            "Rising water temperatures",
            "Declining salmon populations",
            "Mercury contamination from historic mining",
            "Changing ice patterns affecting winter travel",
            "Riverbank erosion"
        ],
        
        waterDisputes: [
            {
                title: "Yukon River Salmon Agreement",
                description: "US-Canada agreement (2002) for cooperative management of salmon stocks crossing international boundary."
            }
        ],
        
        historicalImportance: [
            {
                title: "Klondike Gold Rush",
                description: "The 1896-1899 gold rush brought over 100,000 prospectors to the Yukon region, transforming the river into a major transportation route."
            },
            {
                title: "Indigenous Heritage",
                description: "Traditional territory of Athabascan and Yup'ik peoples who have lived along the river for thousands of years."
            },
            {
                title: "Sternwheeler Era",
                description: "Steam-powered riverboats operated on the Yukon from the 1860s through the 1950s, serving as the main transportation link."
            }
        ]
    },

    // ========================================
    // 22. INDUS RIVER
    // ========================================
    {
        id: "indus",
        name: "Indus River",
        length: 3180,
        continent: "asia",
        image: "https://images.unsplash.com/photo-1623850942935-e42832556ce5?w=800",
        
        countries: [
            { name: "China", flag: "🇨🇳" },
            { name: "India", flag: "🇮🇳" },
            { name: "Pakistan", flag: "🇵🇰" }
        ],
        
        states: [
            "Tibet Autonomous Region", "Ladakh", "Gilgit-Baltistan",
            "Khyber Pakhtunkhwa", "Punjab", "Sindh"
        ],
        
        source: {
            location: "Tibetan Plateau, near Mount Kailash",
            type: "Glacier/Lake Mansarovar region",
            elevation: "5,500 m",
            coordinates: [32.0833, 81.2833]
        },
        
        mouth: {
            location: "Arabian Sea, Pakistan",
            type: "Delta",
            delta: "Indus River Delta - covers 41,440 km²",
            coordinates: [23.9833, 67.4500]
        },
        
        tributaries: {
            leftBank: [
                "Zanskar River",
                "Jhelum River",
                "Chenab River",
                "Ravi River",
                "Beas River",
                "Sutlej River"
            ],
            rightBank: [
                "Shyok River",
                "Gilgit River",
                "Kabul River",
                "Kurram River",
                "Gomal River"
            ]
        },
        
        distributaries: [
            "Nara Canal",
            "Kori Creek",
            "Ochito River",
            "Wari Channel",
            "Gharo Creek"
        ],
        
        majorCities: [
            "Leh", "Skardu", "Gilgit", "Attock", "Dera Ismail Khan",
            "Sukkur", "Hyderabad", "Karachi", "Thatta"
        ],
        
        dams: [
            { name: "Tarbela Dam", details: "Pakistan, 4,888 MW, world's largest earth-filled dam" },
            { name: "Mangla Dam", details: "Pakistan, 1,000 MW, on Jhelum tributary" },
            { name: "Sukkur Barrage", details: "Pakistan, irrigates 3 million hectares" },
            { name: "Kotri Barrage", details: "Pakistan, salinity control" },
            { name: "Guddu Barrage", details: "Pakistan, 1.1 million hectares irrigation" },
            { name: "Diamer-Bhasha Dam", details: "Pakistan, under construction, 4,500 MW" }
        ],
        
        basinArea: "1,165,000 km²",
        discharge: "6,600 m³/s",
        
        riverPath: [
            [32.08, 81.28],    // Source - Tibet
            [32.50, 79.50],
            [33.43, 79.10],
            [34.15, 77.57],    // Leh, Ladakh
            [34.45, 76.85],
            [35.30, 75.92],    // Skardu
            [35.88, 74.68],    // Gilgit
            [36.03, 74.33],
            [35.53, 73.93],
            [35.15, 72.83],
            [34.09, 72.70],    // Tarbela Dam
            [33.77, 72.36],    // Attock
            [32.44, 71.47],
            [31.58, 70.94],
            [30.20, 70.85],
            [29.40, 70.80],
            [28.42, 69.68],
            [27.71, 68.86],    // Sukkur
            [26.90, 68.10],
            [25.97, 68.45],
            [25.40, 68.36],    // Hyderabad
            [24.83, 67.80],
            [24.18, 67.60],
            [23.98, 67.45]     // Arabian Sea (Mouth)
        ],
        
        tributaryPaths: [
            {
                name: "Jhelum River",
                path: [
                    [34.10, 74.80],    // Kashmir
                    [33.50, 73.80],
                    [32.50, 73.20],
                    [32.00, 72.50]     // Confluence with Chenab
                ]
            },
            {
                name: "Chenab River",
                path: [
                    [32.80, 76.50],    // Himachal Pradesh
                    [32.50, 75.50],
                    [32.00, 73.50],
                    [31.00, 71.50]     // Confluence
                ]
            },
            {
                name: "Sutlej River",
                path: [
                    [31.00, 79.00],    // Tibet
                    [31.50, 76.50],
                    [30.50, 74.50],
                    [29.50, 71.00]     // Confluence
                ]
            },
            {
                name: "Kabul River",
                path: [
                    [34.50, 69.20],    // Afghanistan
                    [34.00, 70.50],
                    [33.88, 72.25]     // Attock confluence
                ]
            }
        ],
        
        distributaryPaths: [
            {
                name: "Kori Creek",
                path: [
                    [24.00, 67.60],
                    [23.50, 68.50]     // Arabian Sea
                ]
            },
            {
                name: "Ochito River",
                path: [
                    [24.00, 67.60],
                    [24.00, 67.80]     // Arabian Sea
                ]
            }
        ],
        
        cityCoordinates: [
            { name: "Leh", coords: [34.15, 77.58] },
            { name: "Skardu", coords: [35.30, 75.63] },
            { name: "Gilgit", coords: [35.92, 74.31] },
            { name: "Attock", coords: [33.77, 72.37] },
            { name: "Sukkur", coords: [27.71, 68.86] },
            { name: "Hyderabad", coords: [25.40, 68.36] },
            { name: "Karachi", coords: [24.86, 67.00] }
        ],
        
        damCoordinates: [
            { name: "Tarbela Dam", coords: [34.09, 72.70], details: "4,888 MW - World's largest earth dam" },
            { name: "Mangla Dam", coords: [33.15, 73.65], details: "1,000 MW hydroelectric" },
            { name: "Sukkur Barrage", coords: [27.68, 68.87], details: "Irrigates 3 million hectares" }
        ],
        
        flightLandmarks: [
            { progress: 0, name: "Tibetan Plateau", icon: "🏔️", description: "Source near Mount Kailash" },
            { progress: 0.10, name: "Ladakh Valley", icon: "🏜️", description: "High-altitude desert" },
            { progress: 0.15, name: "Leh", icon: "🏙️", description: "Historic Ladakhi capital" },
            { progress: 0.25, name: "Skardu", icon: "⛰️", description: "Gateway to Karakoram" },
            { progress: 0.30, name: "Gilgit", icon: "🏘️", description: "Northern Areas hub" },
            { progress: 0.40, name: "Tarbela Dam", icon: "🏗️", description: "World's largest earth dam" },
            { progress: 0.45, name: "Attock", icon: "🌉", description: "Historic crossing point" },
            { progress: 0.55, name: "Punjab Plains", icon: "🌾", description: "Five Rivers region" },
            { progress: 0.75, name: "Sukkur Barrage", icon: "🚧", description: "Major irrigation structure" },
            { progress: 0.90, name: "Hyderabad", icon: "🏙️", description: "Sindh's second city" },
            { progress: 1.0, name: "Indus Delta", icon: "🌊", description: "Arabian Sea" }
        ],
        
        economicImportance: [
            "World's largest contiguous irrigation system",
            "Agriculture: wheat, rice, cotton, sugarcane",
            "Hydroelectric power generation (over 6,000 MW)",
            "Drinking water for 200+ million people",
            "Fishing industry",
            "Transportation corridor"
        ],
        
        environmentalIssues: [
            "Water scarcity and over-extraction",
            "Salinity and waterlogging in lower reaches",
            "Industrial and urban pollution",
            "Declining fish populations",
            "Shrinking Indus Delta and mangrove loss",
            "Climate change affecting glacial sources"
        ],
        
        waterDisputes: [
            {
                title: "Indus Waters Treaty (1960)",
                description: "Historic water-sharing agreement between India and Pakistan, brokered by World Bank, dividing the six rivers of the Indus system."
            },
            {
                title: "Kishanganga Dam Dispute",
                description: "Ongoing dispute over Indian hydroelectric projects on tributaries allocated to Pakistan."
            }
        ],
        
        historicalImportance: [
            {
                title: "Indus Valley Civilization",
                description: "One of the world's oldest urban civilizations (3300-1300 BCE), with cities like Mohenjo-daro and Harappa along the river."
            },
            {
                title: "Alexander the Great",
                description: "The Macedonian conqueror reached the Indus in 326 BCE, marking the eastern limit of his empire."
            },
            {
                title: "Silk Road Connection",
                description: "Historic crossing points on the Indus connected South Asia to Central Asian trade routes."
            }
        ]
    },

    // ========================================
    // 23. RIO GRANDE
    // ========================================
    {
        id: "rio-grande",
        name: "Rio Grande",
        length: 3051,
        continent: "north-america",
        image: "https://images.unsplash.com/photo-1580986836682-c1fcf8b2d7a5?w=800",
        
        countries: [
            { name: "United States", flag: "🇺🇸" },
            { name: "Mexico", flag: "🇲🇽" }
        ],
        
        states: [
            "Colorado", "New Mexico", "Texas",
            "Chihuahua", "Coahuila", "Nuevo León", "Tamaulipas"
        ],
        
        source: {
            location: "San Juan Mountains, Colorado, USA",
            type: "Mountain springs",
            elevation: "3,700 m",
            coordinates: [37.7833, -107.5333]
        },
        
        mouth: {
            location: "Gulf of Mexico",
            type: "Estuary",
            delta: "Historic delta - often runs dry before reaching sea",
            coordinates: [25.9567, -97.1467]
        },
        
        tributaries: {
            leftBank: [
                "Rio Chama",
                "Rio Puerco",
                "Rio Conchos",
                "Rio Salado",
                "Rio San Juan"
            ],
            rightBank: [
                "Pecos River",
                "Devils River",
                "Cibolo Creek"
            ]
        },
        
        distributaries: [
            "Rio Grande Delta Channels (mostly dry)",
            "Arroyo Colorado (former distributary)"
        ],
        
        majorCities: [
            "Alamosa", "Santa Fe", "Albuquerque", "Las Cruces",
            "El Paso", "Ciudad Juárez", "Presidio", "Laredo",
            "Nuevo Laredo", "Brownsville", "Matamoros"
        ],
        
        dams: [
            { name: "Elephant Butte Dam", details: "New Mexico, 1916, irrigation & flood control" },
            { name: "Caballo Dam", details: "New Mexico, 1938, re-regulation" },
            { name: "Amistad Dam", details: "Texas-Mexico border, 1969, international dam" },
            { name: "Falcon Dam", details: "Texas-Mexico border, 1954, international dam" },
            { name: "Anzalduas Dam", details: "Texas, 1960, diversion for irrigation" }
        ],
        
        basinArea: "870,000 km²",
        discharge: "160 m³/s (often zero at mouth)",
        
        riverPath: [
            [37.78, -107.53],   // Source - San Juan Mountains
            [37.47, -106.85],
            [36.90, -106.20],
            [36.45, -105.67],
            [35.88, -105.90],
            [35.25, -106.60],   // Albuquerque area
            [34.70, -106.65],
            [33.77, -106.90],
            [32.35, -106.77],   // Las Cruces
            [31.76, -106.49],   // El Paso / Ciudad Juárez
            [31.12, -105.45],
            [30.30, -104.40],
            [29.56, -104.40],   // Big Bend region
            [29.32, -103.50],
            [29.10, -102.50],
            [28.70, -100.50],
            [27.50, -99.45],    // Laredo area
            [26.56, -98.95],
            [26.10, -98.10],
            [25.96, -97.15]     // Gulf of Mexico (Mouth)
        ],
        
        tributaryPaths: [
            {
                name: "Rio Conchos",
                path: [
                    [28.00, -105.50],   // Chihuahua
                    [29.00, -104.80],
                    [29.53, -104.42]    // Confluence at Presidio
                ]
            },
            {
                name: "Pecos River",
                path: [
                    [35.50, -105.70],   // New Mexico
                    [32.00, -104.00],
                    [29.70, -101.40]    // Confluence
                ]
            },
            {
                name: "Rio Chama",
                path: [
                    [36.90, -106.70],
                    [36.25, -106.05]    // Confluence
                ]
            }
        ],
        
        distributaryPaths: [
            {
                name: "Rio Grande Delta (Historic)",
                path: [
                    [25.97, -97.20],
                    [25.97, -97.15]     // Gulf of Mexico
                ]
            }
        ],
        
        cityCoordinates: [
            { name: "Albuquerque", coords: [35.08, -106.65] },
            { name: "Santa Fe", coords: [35.69, -105.94] },
            { name: "El Paso", coords: [31.76, -106.49] },
            { name: "Ciudad Juárez", coords: [31.69, -106.42] },
            { name: "Laredo", coords: [27.53, -99.48] },
            { name: "Brownsville", coords: [25.90, -97.50] },
            { name: "Matamoros", coords: [25.88, -97.50] }
        ],
        
        damCoordinates: [
            { name: "Elephant Butte Dam", coords: [33.14, -107.18], details: "Largest reservoir in New Mexico" },
            { name: "Amistad Dam", coords: [29.45, -101.05], details: "US-Mexico international dam" },
            { name: "Falcon Dam", coords: [26.55, -99.17], details: "US-Mexico international dam" }
        ],
        
        flightLandmarks: [
            { progress: 0, name: "San Juan Mountains", icon: "🏔️", description: "Source in Colorado Rockies" },
            { progress: 0.15, name: "Rio Grande Gorge", icon: "🏜️", description: "800-foot deep gorge near Taos" },
            { progress: 0.25, name: "Albuquerque", icon: "🏙️", description: "New Mexico's largest city" },
            { progress: 0.35, name: "Elephant Butte Dam", icon: "🏗️", description: "Major irrigation dam" },
            { progress: 0.45, name: "El Paso-Juárez", icon: "🌉", description: "Largest border crossing" },
            { progress: 0.55, name: "Big Bend", icon: "🏜️", description: "National Park region" },
            { progress: 0.70, name: "Amistad Dam", icon: "🏗️", description: "International reservoir" },
            { progress: 0.80, name: "Laredo-Nuevo Laredo", icon: "🌉", description: "Major trade crossing" },
            { progress: 0.90, name: "Falcon Dam", icon: "🏗️", description: "International dam" },
            { progress: 1.0, name: "Gulf of Mexico", icon: "🌊", description: "Brownsville-Matamoros" }
        ],
        
        economicImportance: [
            "Primary water source for 6 million people",
            "Irrigation for agriculture in arid regions",
            "International border between US and Mexico",
            "Supports $1+ billion agricultural industry",
            "Recreation and tourism (Big Bend)",
            "Historic trade and transportation route"
        ],
        
        environmentalIssues: [
            "Severe water over-allocation and scarcity",
            "River often runs dry before reaching Gulf",
            "Salinity increase downstream",
            "Invasive species (salt cedar, giant cane)",
            "Habitat loss for native species",
            "Climate change reducing snowpack"
        ],
        
        waterDisputes: [
            {
                title: "1944 Water Treaty",
                description: "US-Mexico treaty allocating water between the two countries, with ongoing disputes over Mexican water deliveries."
            },
            {
                title: "Rio Grande Compact (1938)",
                description: "Interstate agreement between Colorado, New Mexico, and Texas governing water allocation, frequently litigated."
            }
        ],
        
        historicalImportance: [
            {
                title: "Ancient Pueblo Civilizations",
                description: "Native peoples including Pueblo, Apache, and Comanche nations lived along the Rio Grande for thousands of years."
            },
            {
                title: "Spanish Colonial Era",
                description: "Spanish explorers arrived in the 1540s, establishing the Camino Real trade route along the river."
            },
            {
                title: "Mexican-American War (1846-1848)",
                description: "The river became the international boundary after the Treaty of Guadalupe Hidalgo."
            }
        ]
    },

    // ========================================
    // 24. SÃO FRANCISCO RIVER
    // ========================================
    {
        id: "sao-francisco",
        name: "São Francisco River",
        length: 2914,
        continent: "south-america",
        image: "https://images.unsplash.com/photo-1619468129361-605ebea04b44?w=800",
        
        countries: [
            { name: "Brazil", flag: "🇧🇷" }
        ],
        
        states: [
            "Minas Gerais", "Bahia", "Pernambuco",
            "Alagoas", "Sergipe", "Goiás", "Distrito Federal"
        ],
        
        source: {
            location: "Serra da Canastra, Minas Gerais, Brazil",
            type: "Mountain springs",
            elevation: "1,500 m",
            coordinates: [-20.2167, -46.4333]
        },
        
        mouth: {
            location: "Atlantic Ocean, Brazil",
            type: "Estuary",
            delta: "Small delta between Sergipe and Alagoas",
            coordinates: [-10.5000, -36.3833]
        },
        
        tributaries: {
            leftBank: [
                "Rio das Velhas",
                "Rio Paracatu",
                "Rio Carinhanha",
                "Rio Corrente",
                "Rio Grande",
                "Rio Preto"
            ],
            rightBank: [
                "Rio Jequitaí",
                "Rio Verde Grande",
                "Rio Salitre",
                "Rio Moxotó"
            ]
        },
        
        distributaries: [
            "Canal do Funil",
            "Riacho do Alagadiço"
        ],
        
        majorCities: [
            "Pirapora", "Januária", "Bom Jesus da Lapa",
            "Juazeiro", "Petrolina", "Paulo Afonso",
            "Propriá", "Penedo"
        ],
        
        dams: [
            { name: "Três Marias Dam", details: "Minas Gerais, 396 MW, 1961" },
            { name: "Sobradinho Dam", details: "Bahia, 1,050 MW, largest reservoir in Brazil" },
            { name: "Itaparica Dam", details: "Bahia/Pernambuco, 2,500 MW" },
            { name: "Paulo Afonso Complex", details: "4 plants, 3,986 MW total" },
            { name: "Xingó Dam", details: "Sergipe/Alagoas, 3,162 MW" }
        ],
        
        basinArea: "641,000 km²",
        discharge: "2,850 m³/s",
        
        riverPath: [
            [-20.22, -46.43],   // Source - Serra da Canastra
            [-19.50, -45.50],
            [-18.50, -45.00],
            [-17.35, -44.85],   // Pirapora
            [-16.25, -44.45],
            [-15.20, -43.95],
            [-14.40, -43.80],
            [-13.60, -43.60],   // Bom Jesus da Lapa
            [-12.50, -43.20],
            [-11.00, -42.85],
            [-10.50, -42.50],
            [-10.00, -40.50],
            [-9.40, -40.20],    // Juazeiro/Petrolina
            [-9.55, -38.50],
            [-9.40, -38.22],    // Paulo Afonso
            [-10.20, -37.00],
            [-10.50, -36.38]    // Atlantic Ocean (Mouth)
        ],
        
        tributaryPaths: [
            {
                name: "Rio das Velhas",
                path: [
                    [-19.90, -43.93],   // Near Belo Horizonte
                    [-18.50, -44.50],
                    [-18.30, -44.90]    // Confluence
                ]
            },
            {
                name: "Rio Paracatu",
                path: [
                    [-17.20, -46.80],
                    [-16.50, -45.50],
                    [-16.20, -45.10]    // Confluence
                ]
            },
            {
                name: "Rio Grande",
                path: [
                    [-12.00, -45.50],
                    [-11.50, -44.00],
                    [-11.20, -43.05]    // Confluence
                ]
            }
        ],
        
        distributaryPaths: [
            {
                name: "São Francisco Estuary",
                path: [
                    [-10.40, -36.50],
                    [-10.50, -36.38]    // Atlantic Ocean
                ]
            }
        ],
        
        cityCoordinates: [
            { name: "Pirapora", coords: [-17.35, -44.94] },
            { name: "Bom Jesus da Lapa", coords: [-13.26, -43.42] },
            { name: "Juazeiro", coords: [-9.42, -40.50] },
            { name: "Petrolina", coords: [-9.39, -40.50] },
            { name: "Paulo Afonso", coords: [-9.40, -38.22] },
            { name: "Penedo", coords: [-10.29, -36.58] }
        ],
        
        damCoordinates: [
            { name: "Sobradinho Dam", coords: [-9.43, -40.83], details: "Largest reservoir by surface area in Brazil" },
            { name: "Três Marias Dam", coords: [-18.21, -45.26], details: "396 MW hydroelectric" },
            { name: "Xingó Dam", coords: [-9.62, -37.79], details: "3,162 MW hydroelectric" },
            { name: "Paulo Afonso Complex", coords: [-9.40, -38.20], details: "3,986 MW - 4 power plants" }
        ],
        
        flightLandmarks: [
            { progress: 0, name: "Serra da Canastra", icon: "🏔️", description: "Source in national park" },
            { progress: 0.15, name: "Três Marias Dam", icon: "🏗️", description: "First major dam" },
            { progress: 0.25, name: "Pirapora", icon: "🚢", description: "Start of navigation" },
            { progress: 0.40, name: "Bom Jesus da Lapa", icon: "⛪", description: "Pilgrimage city" },
            { progress: 0.55, name: "Sobradinho Dam", icon: "🏗️", description: "Brazil's largest reservoir" },
            { progress: 0.60, name: "Juazeiro-Petrolina", icon: "🏙️", description: "Twin cities, irrigation hub" },
            { progress: 0.75, name: "Paulo Afonso Falls", icon: "💧", description: "Dramatic waterfalls & dams" },
            { progress: 0.85, name: "Xingó Dam", icon: "🏗️", description: "Last major dam" },
            { progress: 0.95, name: "Penedo", icon: "🏛️", description: "Colonial historic city" },
            { progress: 1.0, name: "Atlantic Ocean", icon: "🌊", description: "River mouth" }
        ],
        
        economicImportance: [
            "Called 'River of National Unity' - connects 5 states",
            "Irrigated agriculture: fruits, vegetables, grapes (wine region)",
            "Major hydroelectric power generation (10,700 MW)",
            "Navigation: 1,371 km navigable stretch",
            "Fishing industry",
            "Water transposition project to northeast Brazil"
        ],
        
        environmentalIssues: [
            "Water diversion reducing downstream flow",
            "Deforestation in the basin",
            "Industrial and agricultural pollution",
            "Invasive species (water hyacinth)",
            "Declining fish populations",
            "Desertification in lower reaches"
        ],
        
        waterDisputes: [
            {
                title: "São Francisco River Transposition",
                description: "Controversial mega-project (since 2007) diverting water to drought-stricken northeastern states, opposed by some basin communities."
            }
        ],
        
        historicalImportance: [
            {
                title: "Portuguese Discovery",
                description: "Named by early Portuguese explorers on October 4, 1501 (Saint Francis's day), becoming key to colonizing Brazil's interior."
            },
            {
                title: "Cultural Significance",
                description: "The 'Velho Chico' (Old Chico) inspired literature, music, and art, especially in João Guimarães Rosa's novels."
            },
            {
                title: "Cattle Ranching",
                description: "The Sertão region along the river developed Brazil's cattle ranching culture, celebrated in folk traditions."
            }
        ]
    },

    // ========================================
    // 25. SALWEEN RIVER
    // ========================================
    {
        id: "salween",
        name: "Salween River",
        length: 2815,
        continent: "asia",
        image: "https://images.unsplash.com/photo-1516496636080-14fb876e029d?w=800",
        
        countries: [
            { name: "China", flag: "🇨🇳" },
            { name: "Myanmar", flag: "🇲🇲" },
            { name: "Thailand", flag: "🇹🇭" }
        ],
        
        states: [
            "Qinghai", "Tibet Autonomous Region", "Yunnan",
            "Shan State", "Kayah State", "Kayin State", "Mon State",
            "Mae Hong Son", "Tak"
        ],
        
        source: {
            location: "Tanggula Mountains, Tibetan Plateau",
            type: "Glacial",
            elevation: "4,750 m",
            coordinates: [33.1500, 94.0000]
        },
        
        mouth: {
            location: "Andaman Sea, Gulf of Martaban, Myanmar",
            type: "Estuary",
            delta: "Small estuary near Mawlamyine",
            coordinates: [16.5000, 97.6167]
        },
        
        tributaries: {
            leftBank: [
                "Nam Kong River",
                "Nam Pang River",
                "Nanting River",
                "Yaw River"
            ],
            rightBank: [
                "Moei River",
                "Nam Mae Yuam",
                "Pai River"
            ]
        },
        
        distributaries: [
            "Salween Estuary channels"
        ],
        
        majorCities: [
            "Liuku", "Fugong", "Kunlong", "Mong Mao",
            "Pa-an", "Mawlamyine", "Mae Hong Son", "Mae Sariang"
        ],
        
        dams: [
            { name: "Planned Salween Dams (Suspended)", details: "China proposed 13 dams, 21,000 MW total - suspended 2016" },
            { name: "Tasang Dam (Proposed)", details: "Myanmar, 7,000 MW - suspended" }
        ],
        
        basinArea: "324,000 km²",
        discharge: "1,494 m³/s",
        
        riverPath: [
            [33.15, 94.00],    // Source - Tanggula Mountains
            [31.50, 96.00],
            [29.50, 97.50],
            [28.20, 98.00],
            [27.30, 98.50],    // Three Parallel Rivers region
            [26.30, 98.70],
            [25.85, 98.85],    // Liuku
            [25.10, 98.90],
            [24.00, 98.60],    // China-Myanmar border
            [22.50, 98.50],
            [21.00, 98.20],
            [19.50, 97.80],
            [18.50, 97.70],
            [17.50, 97.65],
            [16.89, 97.63],    // Pa-an
            [16.48, 97.63],    // Mawlamyine
            [16.50, 97.62]     // Andaman Sea (Mouth)
        ],
        
        tributaryPaths: [
            {
                name: "Moei River",
                path: [
                    [17.50, 98.50],
                    [17.00, 98.20],
                    [16.70, 98.55]     // Confluence
                ]
            },
            {
                name: "Pai River",
                path: [
                    [19.50, 98.50],
                    [19.00, 98.00]     // Confluence
                ]
            }
        ],
        
        distributaryPaths: [
            {
                name: "Salween Estuary",
                path: [
                    [16.55, 97.55],
                    [16.50, 97.62]     // Andaman Sea
                ]
            }
        ],
        
        cityCoordinates: [
            { name: "Liuku", coords: [25.85, 98.85] },
            { name: "Fugong", coords: [26.90, 98.87] },
            { name: "Pa-an", coords: [16.89, 97.63] },
            { name: "Mawlamyine", coords: [16.48, 97.63] },
            { name: "Mae Hong Son", coords: [19.30, 97.97] }
        ],
        
        damCoordinates: [
            { name: "Proposed Dam Sites", coords: [27.00, 98.50], details: "13 dams proposed in China - suspended" }
        ],
        
        flightLandmarks: [
            { progress: 0, name: "Tanggula Mountains", icon: "🏔️", description: "Glacial source on Tibetan Plateau" },
            { progress: 0.15, name: "Three Parallel Rivers", icon: "🌊", description: "UNESCO World Heritage Site" },
            { progress: 0.30, name: "Nujiang Grand Canyon", icon: "🏜️", description: "Deep gorges in Yunnan" },
            { progress: 0.40, name: "Liuku", icon: "🏙️", description: "Nujiang Prefecture capital" },
            { progress: 0.50, name: "China-Myanmar Border", icon: "🛂", description: "River enters Myanmar" },
            { progress: 0.65, name: "Shan Plateau", icon: "⛰️", description: "Myanmar's highland region" },
            { progress: 0.75, name: "Thailand Border", icon: "🛂", description: "Forms border briefly" },
            { progress: 0.85, name: "Pa-an", icon: "🏘️", description: "Karen State capital" },
            { progress: 0.95, name: "Mawlamyine", icon: "🏙️", description: "Myanmar's third largest city" },
            { progress: 1.0, name: "Andaman Sea", icon: "🌊", description: "Gulf of Martaban" }
        ],
        
        economicImportance: [
            "One of last major free-flowing rivers in Asia",
            "Supports diverse fisheries",
            "Irrigation for rice cultivation",
            "Huge proposed hydropower potential (21,000 MW)",
            "Transportation in lower reaches",
            "Mining activities in watershed"
        ],
        
        environmentalIssues: [
            "Proposed dam construction threatening ecosystem",
            "UNESCO 'Three Parallel Rivers' World Heritage Site",
            "Deforestation in upper watershed",
            "Mining pollution",
            "Climate change affecting glacial sources",
            "Civil conflict affecting conservation"
        ],
        
        waterDisputes: [
            {
                title: "Dam Development Controversy",
                description: "China suspended 13 planned dams in 2016 after domestic and international opposition. Myanmar's Tasang Dam also suspended."
            },
            {
                title: "Transboundary Management",
                description: "No formal treaty exists between China, Myanmar, and Thailand for managing the shared river."
            }
        ],
        
        historicalImportance: [
            {
                title: "Burma Road",
                description: "During WWII, the Salween marked a strategic line of defense, with the famous Burma Road crossing it."
            },
            {
                title: "Indigenous Homelands",
                description: "Home to diverse ethnic minorities including Lisu, Nu, Dulong, Karen, and Shan peoples."
            },
            {
                title: "Last Free-Flowing Giant",
                description: "One of the few remaining undammed major rivers in the world, symbolizing conservation struggles."
            }
        ]
    }
