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
        // ========================================
    // 26. COLORADO RIVER
    // ========================================
    {
        id: "colorado",
        name: "Colorado River",
        length: 2330,
        continent: "north-america",
        image: "https://images.unsplash.com/photo-1474044159687-1ee9f3a51722?w=800",
        
        countries: [
            { name: "United States", flag: "🇺🇸" },
            { name: "Mexico", flag: "🇲🇽" }
        ],
        
        states: [
            "Colorado", "Utah", "Arizona", "Nevada",
            "California", "Wyoming", "New Mexico",
            "Baja California", "Sonora"
        ],
        
        source: {
            location: "Rocky Mountain National Park, Colorado, USA",
            type: "Mountain springs/La Poudre Pass",
            elevation: "3,104 m",
            coordinates: [40.4736, -105.8219]
        },
        
        mouth: {
            location: "Gulf of California, Mexico (historic)",
            type: "Delta (mostly dry)",
            delta: "Colorado River Delta - rarely reaches sea now",
            coordinates: [31.9000, -114.9167]
        },
        
        tributaries: {
            leftBank: [
                "Green River",
                "San Juan River",
                "Little Colorado River",
                "Virgin River",
                "Gila River"
            ],
            rightBank: [
                "Gunnison River",
                "Dolores River",
                "Bill Williams River"
            ]
        },
        
        distributaries: [
            "Historic Colorado Delta Channels (mostly dry)",
            "Rio Hardy (occasional flow)"
        ],
        
        majorCities: [
            "Grand Junction", "Moab", "Page", "Las Vegas",
            "Boulder City", "Laughlin", "Lake Havasu City",
            "Yuma", "San Luis Río Colorado"
        ],
        
        dams: [
            { name: "Hoover Dam", details: "Nevada/Arizona, 2,080 MW, 1936, engineering marvel" },
            { name: "Glen Canyon Dam", details: "Arizona, 1,320 MW, 1966, creates Lake Powell" },
            { name: "Parker Dam", details: "California/Arizona, 120 MW, deepest dam in world" },
            { name: "Davis Dam", details: "Nevada/Arizona, 255 MW, 1951" },
            { name: "Imperial Dam", details: "Arizona, diversion to All-American Canal" },
            { name: "Morelos Dam", details: "Mexico, diverts Mexico's share" }
        ],
        
        basinArea: "637,000 km²",
        discharge: "620 m³/s (often zero at mouth)",
        
        riverPath: [
            [40.47, -105.82],   // Source - Rocky Mountain NP
            [40.00, -106.40],
            [39.50, -107.30],
            [39.00, -108.00],
            [39.06, -108.55],   // Grand Junction
            [38.50, -109.00],
            [38.57, -109.55],   // Moab
            [38.75, -109.55],
            [38.20, -110.50],
            [37.20, -110.00],
            [36.85, -111.50],
            [36.94, -111.49],   // Glen Canyon Dam
            [36.10, -111.85],
            [36.00, -113.00],   // Grand Canyon
            [36.01, -114.00],
            [36.02, -114.74],   // Hoover Dam
            [35.20, -114.56],
            [34.80, -114.52],
            [34.48, -114.32],   // Lake Havasu City
            [33.50, -114.50],
            [32.75, -114.55],
            [32.69, -114.63],   // Yuma
            [32.20, -114.85],
            [31.90, -114.92]    // Gulf of California (Mouth)
        ],
        
        tributaryPaths: [
            {
                name: "Green River",
                path: [
                    [43.00, -109.75],   // Wind River Range, Wyoming
                    [41.00, -109.50],
                    [39.50, -110.00],
                    [38.19, -109.90]    // Confluence
                ]
            },
            {
                name: "San Juan River",
                path: [
                    [37.50, -106.80],   // Colorado
                    [37.00, -108.50],
                    [37.18, -109.88]    // Confluence at Lake Powell
                ]
            },
            {
                name: "Little Colorado River",
                path: [
                    [34.50, -109.50],   // Arizona
                    [35.50, -111.00],
                    [36.18, -111.78]    // Confluence in Grand Canyon
                ]
            },
            {
                name: "Gila River",
                path: [
                    [33.00, -108.50],   // New Mexico
                    [33.00, -111.00],
                    [32.72, -114.55]    // Confluence near Yuma
                ]
            }
        ],
        
        distributaryPaths: [
            {
                name: "Historic Delta Channel",
                path: [
                    [31.95, -114.85],
                    [31.90, -114.92]    // Gulf of California
                ]
            }
        ],
        
        cityCoordinates: [
            { name: "Grand Junction", coords: [39.06, -108.55] },
            { name: "Moab", coords: [38.57, -109.55] },
            { name: "Page", coords: [36.91, -111.46] },
            { name: "Las Vegas", coords: [36.17, -115.14] },
            { name: "Lake Havasu City", coords: [34.48, -114.32] },
            { name: "Yuma", coords: [32.69, -114.63] }
        ],
        
        damCoordinates: [
            { name: "Hoover Dam", coords: [36.02, -114.74], details: "2,080 MW - National Historic Landmark" },
            { name: "Glen Canyon Dam", coords: [36.94, -111.48], details: "1,320 MW - Creates Lake Powell" },
            { name: "Parker Dam", coords: [34.29, -114.14], details: "Deepest dam in the world" }
        ],
        
        flightLandmarks: [
            { progress: 0, name: "Rocky Mountains", icon: "🏔️", description: "Source in Colorado Rockies" },
            { progress: 0.10, name: "Grand Junction", icon: "🏙️", description: "Western Colorado hub" },
            { progress: 0.20, name: "Moab", icon: "🏜️", description: "Gateway to Arches & Canyonlands" },
            { progress: 0.30, name: "Green River Confluence", icon: "🔀", description: "Largest tributary joins" },
            { progress: 0.40, name: "Glen Canyon Dam", icon: "🏗️", description: "Creates Lake Powell" },
            { progress: 0.50, name: "Grand Canyon", icon: "🏜️", description: "Natural wonder of the world" },
            { progress: 0.65, name: "Hoover Dam", icon: "🏗️", description: "Engineering marvel, Lake Mead" },
            { progress: 0.75, name: "Lake Havasu", icon: "🌊", description: "London Bridge relocated here" },
            { progress: 0.90, name: "Yuma", icon: "🏙️", description: "Historic crossing point" },
            { progress: 1.0, name: "Gulf of California", icon: "🌊", description: "Historic mouth (often dry)" }
        ],
        
        economicImportance: [
            "Water supply for 40 million people",
            "Irrigation for 5.5 million acres of farmland",
            "Hydroelectric power generation (4,200+ MW)",
            "Recreation and tourism ($26 billion annually)",
            "Supplies cities: LA, San Diego, Phoenix, Las Vegas",
            "Largest reservoir system in United States"
        ],
        
        environmentalIssues: [
            "River rarely reaches the sea (over-allocation)",
            "Lake Mead and Lake Powell at historic lows",
            "Drought and climate change impacts",
            "Invasive species (quagga mussels, tamarisk)",
            "Salinity increases downstream",
            "Colorado River Delta ecosystem destruction"
        ],
        
        waterDisputes: [
            {
                title: "Colorado River Compact (1922)",
                description: "Divides water between Upper and Lower Basin states, now contested as allocations exceed actual flow."
            },
            {
                title: "1944 US-Mexico Treaty",
                description: "Guarantees Mexico 1.5 million acre-feet annually, with ongoing negotiations over shortage sharing."
            },
            {
                title: "2023 Water Cuts",
                description: "Historic cuts to Arizona, Nevada, and Mexico due to critically low reservoir levels."
            }
        ],
        
        historicalImportance: [
            {
                title: "Grand Canyon Formation",
                description: "The Colorado carved the Grand Canyon over 5-6 million years, exposing 2 billion years of geological history."
            },
            {
                title: "Powell Expedition (1869)",
                description: "John Wesley Powell led the first documented expedition through the Grand Canyon, mapping the river."
            },
            {
                title: "Hoover Dam Construction",
                description: "Built 1931-1936 during the Great Depression, it transformed the American Southwest and remains an engineering icon."
            }
        ]
    },

    // ========================================
    // 27. SYR DARYA
    // ========================================
    {
        id: "syr-darya",
        name: "Syr Darya",
        length: 2212,
        continent: "asia",
        image: "https://images.unsplash.com/photo-1596402184320-417e7178b2cd?w=800",
        
        countries: [
            { name: "Kyrgyzstan", flag: "🇰🇬" },
            { name: "Uzbekistan", flag: "🇺🇿" },
            { name: "Tajikistan", flag: "🇹🇯" },
            { name: "Kazakhstan", flag: "🇰🇿" }
        ],
        
        states: [
            "Naryn Region", "Jalal-Abad Region", "Fergana Region",
            "Namangan Region", "Sughd Region", "Tashkent Region",
            "Turkestan Region", "Kyzylorda Region"
        ],
        
        source: {
            location: "Tian Shan Mountains, Kyrgyzstan",
            type: "Confluence of Naryn and Kara Darya rivers",
            elevation: "3,000 m",
            coordinates: [41.3833, 75.9000]
        },
        
        mouth: {
            location: "North Aral Sea, Kazakhstan",
            type: "Delta (shrinking)",
            delta: "Syr Darya Delta - feeding Small Aral Sea",
            coordinates: [46.1333, 60.5833]
        },
        
        tributaries: {
            leftBank: [
                "Naryn River",
                "Chirchik River",
                "Ahangaran River",
                "Keles River"
            ],
            rightBank: [
                "Kara Darya",
                "Arys River"
            ]
        },
        
        distributaries: [
            "Kazalinsk Channels",
            "Kyzylorda Irrigation Canals"
        ],
        
        majorCities: [
            "Namangan", "Andijan", "Fergana", "Khujand",
            "Tashkent", "Turkestan", "Kyzylorda", "Kazalinsk"
        ],
        
        dams: [
            { name: "Toktogul Dam", details: "Kyrgyzstan, 1,200 MW, 1975, largest in Central Asia" },
            { name: "Andijan Reservoir", details: "Uzbekistan, 1.9 km³ storage, 1969" },
            { name: "Kairakkum Reservoir", details: "Tajikistan, 126 MW, 1957" },
            { name: "Chardara Dam", details: "Kazakhstan, 100 MW, 1966" },
            { name: "Kokaral Dam", details: "Kazakhstan, 2005, saves North Aral Sea" }
        ],
        
        basinArea: "219,000 km²",
        discharge: "1,180 m³/s (much reduced)",
        
        riverPath: [
            [41.38, 75.90],    // Source - Naryn-Kara Darya confluence
            [40.50, 70.95],
            [40.38, 71.79],    // Fergana
            [40.30, 68.80],
            [40.28, 69.63],    // Khujand
            [40.10, 67.85],
            [40.50, 68.25],
            [40.85, 68.65],
            [41.30, 69.20],    // Near Tashkent
            [41.50, 67.50],
            [42.10, 65.50],
            [43.00, 63.00],
            [43.30, 68.25],    // Turkestan
            [44.00, 61.50],
            [44.85, 65.50],    // Kyzylorda
            [45.00, 60.50],
            [46.13, 60.58]     // North Aral Sea (Mouth)
        ],
        
        tributaryPaths: [
            {
                name: "Naryn River",
                path: [
                    [41.50, 76.00],    // Tian Shan
                    [41.43, 75.95],
                    [41.38, 75.90]     // Confluence
                ]
            },
            {
                name: "Chirchik River",
                path: [
                    [41.80, 70.00],
                    [41.50, 69.50],
                    [41.33, 69.08]     // Confluence
                ]
            },
            {
                name: "Arys River",
                path: [
                    [42.80, 69.00],
                    [42.43, 68.80]     // Confluence
                ]
            }
        ],
        
        distributaryPaths: [
            {
                name: "Syr Darya Delta",
                path: [
                    [45.75, 62.10],
                    [46.13, 60.58]     // North Aral Sea
                ]
            }
        ],
        
        cityCoordinates: [
            { name: "Namangan", coords: [41.00, 71.67] },
            { name: "Fergana", coords: [40.38, 71.79] },
            { name: "Khujand", coords: [40.28, 69.63] },
            { name: "Tashkent", coords: [41.30, 69.24] },
            { name: "Turkestan", coords: [43.30, 68.25] },
            { name: "Kyzylorda", coords: [44.85, 65.50] }
        ],
        
        damCoordinates: [
            { name: "Toktogul Dam", coords: [41.75, 72.92], details: "1,200 MW - Central Asia's largest" },
            { name: "Kokaral Dam", coords: [46.00, 60.35], details: "Saved the North Aral Sea" },
            { name: "Chardara Dam", coords: [41.25, 67.97], details: "100 MW hydroelectric" }
        ],
        
        flightLandmarks: [
            { progress: 0, name: "Tian Shan Mountains", icon: "🏔️", description: "Source region in Kyrgyzstan" },
            { progress: 0.10, name: "Toktogul Reservoir", icon: "🌊", description: "Central Asia's largest dam" },
            { progress: 0.25, name: "Fergana Valley", icon: "🌾", description: "Cotton heartland" },
            { progress: 0.35, name: "Khujand", icon: "🏙️", description: "Tajikistan's second city" },
            { progress: 0.45, name: "Chardara Dam", icon: "🏗️", description: "Border dam" },
            { progress: 0.55, name: "Turkestan", icon: "🕌", description: "Holy city, Yasawi Mausoleum" },
            { progress: 0.70, name: "Kyzylorda", icon: "🏙️", description: "Kazakhstan regional capital" },
            { progress: 0.85, name: "Kokaral Dam", icon: "🏗️", description: "Aral Sea restoration" },
            { progress: 1.0, name: "North Aral Sea", icon: "🌊", description: "Recovering sea" }
        ],
        
        economicImportance: [
            "Irrigation for cotton cultivation (Fergana Valley)",
            "Hydroelectric power generation (Toktogul)",
            "Drinking water for millions",
            "Rice cultivation in lower reaches",
            "Industrial water supply",
            "Ancient Silk Road water source"
        ],
        
        environmentalIssues: [
            "Aral Sea catastrophe - world's worst ecological disaster",
            "Over-extraction for cotton irrigation",
            "Salinization of agricultural lands",
            "Water quality degradation",
            "Desertification of former seabed",
            "Toxic dust storms from dry seabed"
        ],
        
        waterDisputes: [
            {
                title: "Upstream-Downstream Conflict",
                description: "Kyrgyzstan wants hydropower (winter releases), while downstream countries need irrigation water (summer releases)."
            },
            {
                title: "Aral Sea Restoration",
                description: "International Fund for Saving the Aral Sea coordinates efforts; Kokaral Dam successfully restored North Aral."
            }
        ],
        
        historicalImportance: [
            {
                title: "Ancient Jaxartes",
                description: "Known as Jaxartes in ancient times, marking the northeastern boundary of Alexander the Great's empire (329 BCE)."
            },
            {
                title: "Silk Road",
                description: "Cities along the Syr Darya were vital oases on the ancient Silk Road trade routes."
            },
            {
                title: "Soviet Cotton Campaign",
                description: "Massive irrigation diversions in Soviet era transformed the region but destroyed the Aral Sea."
            }
        ]
    },

    // ========================================
    // 28. DNIEPER RIVER
    // ========================================
    {
        id: "dnieper",
        name: "Dnieper River",
        length: 2201,
        continent: "europe",
        image: "https://images.unsplash.com/photo-1561542320-9a18cd340469?w=800",
        
        countries: [
            { name: "Russia", flag: "🇷🇺" },
            { name: "Belarus", flag: "🇧🇾" },
            { name: "Ukraine", flag: "🇺🇦" }
        ],
        
        states: [
            "Smolensk Oblast", "Mogilev Region", "Gomel Region",
            "Kyiv Oblast", "Cherkasy Oblast", "Poltava Oblast",
            "Dnipropetrovsk Oblast", "Zaporizhzhia Oblast", "Kherson Oblast"
        ],
        
        source: {
            location: "Valdai Hills, Russia",
            type: "Wetlands/Springs",
            elevation: "220 m",
            coordinates: [55.8700, 33.7500]
        },
        
        mouth: {
            location: "Black Sea, Ukraine",
            type: "Estuary",
            delta: "Dnieper-Bug Estuary",
            coordinates: [46.5000, 32.2833]
        },
        
        tributaries: {
            leftBank: [
                "Berezina River",
                "Sozh River",
                "Pripyat River",
                "Sula River",
                "Psel River",
                "Vorskla River",
                "Samara River"
            ],
            rightBank: [
                "Desna River",
                "Teteriv River",
                "Ros River",
                "Inhulets River"
            ]
        },
        
        distributaries: [
            "Dnieper Delta Channels",
            "Dnieper-Bug Canal (artificial)"
        ],
        
        majorCities: [
            "Smolensk", "Orsha", "Mogilev", "Gomel",
            "Kyiv", "Cherkasy", "Kremenchuk", "Dnipro",
            "Zaporizhzhia", "Kherson"
        ],
        
        dams: [
            { name: "Kyiv Hydroelectric Station", details: "Ukraine, 444 MW, 1964" },
            { name: "Kaniv Hydroelectric Station", details: "Ukraine, 444 MW, 1972" },
            { name: "Kremenchuk Hydroelectric Station", details: "Ukraine, 625 MW, 1959" },
            { name: "Dnieper Hydroelectric Station (DneproGES)", details: "Ukraine, 1,548 MW, 1932, historic" },
            { name: "Kakhovka Dam", details: "Ukraine, 351 MW, 1956 (destroyed 2023)" }
        ],
        
        basinArea: "504,000 km²",
        discharge: "1,670 m³/s",
        
        riverPath: [
            [55.87, 33.75],    // Source - Valdai Hills
            [54.80, 32.05],    // Smolensk
            [54.50, 31.00],
            [53.90, 30.33],    // Mogilev
            [52.40, 31.00],
            [52.43, 30.98],    // Gomel
            [51.52, 30.60],    // Pripyat confluence
            [51.50, 31.30],
            [50.45, 30.52],    // Kyiv
            [49.44, 32.06],    // Cherkasy
            [49.00, 33.25],    // Kremenchuk
            [48.50, 35.10],
            [48.46, 35.05],    // Dnipro city
            [47.85, 35.14],    // Zaporizhzhia
            [47.10, 34.00],
            [46.65, 33.00],
            [46.64, 32.62],    // Kherson
            [46.50, 32.28]     // Black Sea (Mouth)
        ],
        
        tributaryPaths: [
            {
                name: "Pripyat River",
                path: [
                    [52.00, 25.50],    // Belarus/Ukraine border
                    [51.75, 28.00],
                    [51.52, 30.60]     // Confluence
                ]
            },
            {
                name: "Desna River",
                path: [
                    [54.50, 33.50],    // Russia
                    [52.50, 33.00],
                    [51.53, 30.55]     // Confluence near Kyiv
                ]
            },
            {
                name: "Berezina River",
                path: [
                    [54.50, 28.50],
                    [53.50, 29.50],
                    [52.50, 30.00]     // Confluence
                ]
            }
        ],
        
        distributaryPaths: [
            {
                name: "Dnieper Estuary",
                path: [
                    [46.55, 32.35],
                    [46.50, 32.28]     // Black Sea
                ]
            }
        ],
        
        cityCoordinates: [
            { name: "Smolensk", coords: [54.78, 32.05] },
            { name: "Mogilev", coords: [53.90, 30.33] },
            { name: "Gomel", coords: [52.43, 30.98] },
            { name: "Kyiv", coords: [50.45, 30.52] },
            { name: "Dnipro", coords: [48.46, 35.05] },
            { name: "Zaporizhzhia", coords: [47.85, 35.14] },
            { name: "Kherson", coords: [46.64, 32.62] }
        ],
        
        damCoordinates: [
            { name: "Kyiv HPP", coords: [50.58, 30.50], details: "444 MW hydroelectric" },
            { name: "DneproGES", coords: [47.85, 35.08], details: "1,548 MW - Historic 1932 dam" },
            { name: "Kakhovka Dam", coords: [46.77, 33.38], details: "Destroyed in June 2023" }
        ],
        
        flightLandmarks: [
            { progress: 0, name: "Valdai Hills", icon: "🏔️", description: "Source in Russia" },
            { progress: 0.10, name: "Smolensk", icon: "🏙️", description: "Historic Russian city" },
            { progress: 0.20, name: "Belarus Border", icon: "🛂", description: "River enters Belarus" },
            { progress: 0.30, name: "Mogilev", icon: "🏙️", description: "Belarus third largest city" },
            { progress: 0.40, name: "Pripyat Confluence", icon: "🔀", description: "Chernobyl area" },
            { progress: 0.50, name: "Kyiv", icon: "🏙️", description: "Ukrainian capital" },
            { progress: 0.65, name: "Kremenchuk Reservoir", icon: "🌊", description: "Major reservoir" },
            { progress: 0.75, name: "Dnipro City", icon: "🏙️", description: "Fourth largest in Ukraine" },
            { progress: 0.85, name: "Zaporizhzhia", icon: "⚡", description: "Nuclear plant nearby" },
            { progress: 0.95, name: "Kherson", icon: "🏙️", description: "Port city" },
            { progress: 1.0, name: "Black Sea", icon: "🌊", description: "Dnieper-Bug Estuary" }
        ],
        
        economicImportance: [
            "Fourth longest river in Europe",
            "Major navigation corridor",
            "Cascade of 6 hydroelectric dams",
            "Irrigation for Ukrainian agriculture",
            "Drinking water for millions",
            "Industrial water supply"
        ],
        
        environmentalIssues: [
            "Chernobyl disaster contamination (1986)",
            "Industrial pollution",
            "Agricultural runoff",
            "Eutrophication of reservoirs",
            "Kakhovka Dam destruction (2023) - ecological disaster"
        ],
        
        waterDisputes: [
            {
                title: "Kakhovka Dam Destruction (2023)",
                description: "The dam's destruction in June 2023 caused massive flooding, ecological disaster, and water supply crisis."
            },
            {
                title: "Crimea Water Supply",
                description: "North Crimean Canal from Dnieper was blocked in 2014, restored in 2022, remains contentious."
            }
        ],
        
        historicalImportance: [
            {
                title: "Kyivan Rus'",
                description: "The Dnieper was the heart of medieval Kyivan Rus', one of the largest states in medieval Europe."
            },
            {
                title: "Varangian Trade Route",
                description: "Vikings used the Dnieper as part of the 'route from the Varangians to the Greeks' connecting Scandinavia to Constantinople."
            },
            {
                title: "Zaporozhian Cossacks",
                description: "Khortytsia Island near Zaporizhzhia was the legendary headquarters of the Zaporozhian Cossacks."
            }
        ]
    },

    // ========================================
    // 29. ORANGE RIVER
    // ========================================
    {
        id: "orange",
        name: "Orange River",
        length: 2200,
        continent: "africa",
        image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=800",
        
        countries: [
            { name: "South Africa", flag: "🇿🇦" },
            { name: "Lesotho", flag: "🇱🇸" },
            { name: "Namibia", flag: "🇳🇦" },
            { name: "Botswana", flag: "🇧🇼" }
        ],
        
        states: [
            "Lesotho Highlands", "Eastern Cape", "Free State",
            "Northern Cape", "Karas Region"
        ],
        
        source: {
            location: "Drakensberg Mountains, Lesotho",
            type: "Mountain springs near Mont-aux-Sources",
            elevation: "3,000 m",
            coordinates: [-29.4500, 29.2833]
        },
        
        mouth: {
            location: "Atlantic Ocean, South Africa/Namibia border",
            type: "Estuary",
            delta: "Orange River Mouth - diamond mining area",
            coordinates: [-28.6333, 16.4500]
        },
        
        tributaries: {
            leftBank: [
                "Caledon River",
                "Kraai River",
                "Senqu River (upper Orange)"
            ],
            rightBank: [
                "Vaal River",
                "Modder River",
                "Fish River",
                "Hartbees River"
            ]
        },
        
        distributaries: [
            "Orange River Mouth Channels"
        ],
        
        majorCities: [
            "Bethlehem", "Bloemfontein", "Aliwal North",
            "Kimberley", "Douglas", "Upington",
            "Oranjemund", "Alexander Bay"
        ],
        
        dams: [
            { name: "Gariep Dam", details: "South Africa, 360 MW, 1971, largest in SA" },
            { name: "Vanderkloof Dam", details: "South Africa, 240 MW, 1977" },
            { name: "Katse Dam", details: "Lesotho, 185 m high, 1996, LHWP" },
            { name: "Mohale Dam", details: "Lesotho, 145 m, 2002, LHWP" },
            { name: "Orange-Fish Tunnel", details: "82 km water transfer tunnel, 1975" }
        ],
        
        basinArea: "973,000 km²",
        discharge: "365 m³/s",
        
        riverPath: [
            [-29.45, 29.28],   // Source - Drakensberg
            [-29.40, 28.50],
            [-29.80, 27.00],
            [-29.75, 26.00],
            [-30.62, 25.50],   // Gariep Dam
            [-29.10, 25.00],
            [-29.07, 23.75],   // Douglas, Vaal confluence
            [-28.75, 24.00],
            [-28.50, 22.50],
            [-28.60, 21.00],
            [-28.46, 21.26],   // Upington
            [-28.45, 20.00],
            [-28.45, 20.62],   // Augrabies Falls
            [-28.50, 18.50],
            [-28.07, 17.07],   // Fish River confluence
            [-28.55, 16.45],   // Oranjemund
            [-28.63, 16.45]    // Atlantic Ocean (Mouth)
        ],
        
        tributaryPaths: [
            {
                name: "Vaal River",
                path: [
                    [-27.00, 29.50],   // Mpumalanga
                    [-28.00, 27.00],
                    [-28.50, 25.00],
                    [-29.07, 23.65]    // Confluence at Douglas
                ]
            },
            {
                name: "Caledon River",
                path: [
                    [-29.50, 28.50],
                    [-29.70, 27.50],
                    [-29.83, 26.50]    // Confluence
                ]
            },
            {
                name: "Fish River",
                path: [
                    [-24.00, 18.00],   // Central Namibia
                    [-27.00, 17.50],
                    [-28.07, 17.07]    // Confluence
                ]
            }
        ],
        
        distributaryPaths: [
            {
                name: "Orange Mouth",
                path: [
                    [-28.62, 16.47],
                    [-28.63, 16.45]    // Atlantic Ocean
                ]
            }
        ],
        
        cityCoordinates: [
            { name: "Bloemfontein", coords: [-29.09, 26.16] },
            { name: "Kimberley", coords: [-28.73, 24.75] },
            { name: "Douglas", coords: [-29.07, 23.75] },
            { name: "Upington", coords: [-28.46, 21.26] },
            { name: "Oranjemund", coords: [-28.55, 16.43] },
            { name: "Alexander Bay", coords: [-28.58, 16.50] }
        ],
        
        damCoordinates: [
            { name: "Gariep Dam", coords: [-30.62, 25.50], details: "360 MW - Largest dam in South Africa" },
            { name: "Vanderkloof Dam", coords: [-30.02, 24.73], details: "240 MW hydroelectric" },
            { name: "Katse Dam", coords: [-29.37, 28.50], details: "185 m - Lesotho Highlands Water Project" }
        ],
        
        flightLandmarks: [
            { progress: 0, name: "Drakensberg Mountains", icon: "🏔️", description: "Source in Lesotho Highlands" },
            { progress: 0.10, name: "Katse Dam", icon: "🏗️", description: "LHWP - Water to Gauteng" },
            { progress: 0.25, name: "Gariep Dam", icon: "🏗️", description: "South Africa's largest dam" },
            { progress: 0.35, name: "Douglas", icon: "🔀", description: "Vaal River confluence" },
            { progress: 0.45, name: "Kimberley Area", icon: "💎", description: "Diamond mining region" },
            { progress: 0.55, name: "Upington", icon: "🏙️", description: "Northern Cape hub" },
            { progress: 0.65, name: "Augrabies Falls", icon: "💧", description: "Spectacular 56 m waterfall" },
            { progress: 0.80, name: "Fish River Confluence", icon: "🔀", description: "Namibian tributary" },
            { progress: 0.95, name: "Oranjemund", icon: "💎", description: "Diamond mining town" },
            { progress: 1.0, name: "Atlantic Ocean", icon: "🌊", description: "SA-Namibia border" }
        ],
        
        economicImportance: [
            "Water supply for Gauteng Province (LHWP)",
            "Irrigation for agriculture (grapes, cotton, wheat)",
            "Hydroelectric power generation (600+ MW)",
            "Diamond mining at the mouth",
            "Tourism (Augrabies Falls National Park)",
            "Longest river in South Africa"
        ],
        
        environmentalIssues: [
            "Water scarcity and over-extraction",
            "Invasive species (water hyacinth)",
            "Mining pollution",
            "Agricultural runoff",
            "Flow reduction affecting estuary",
            "Climate change impacts"
        ],
        
        waterDisputes: [
            {
                title: "Lesotho Highlands Water Project",
                description: "Treaty between Lesotho and South Africa (1986) for water transfer to Gauteng, with ongoing Phase 2."
            },
            {
                title: "Orange-Senqu River Commission",
                description: "Cooperative management between South Africa, Namibia, Botswana, and Lesotho."
            }
        ],
        
        historicalImportance: [
            {
                title: "Dutch Naming (1779)",
                description: "Named after the Dutch Royal House of Orange by Colonel Robert Jacob Gordon."
            },
            {
                title: "Great Trek",
                description: "Boer settlers crossed the Orange River during the Great Trek of the 1830s-1840s."
            },
            {
                title: "Diamond Discovery",
                description: "Diamonds discovered at the mouth in the 1920s, leading to the establishment of mining towns."
            }
        ]
    },

    // ========================================
    // 30. IRRAWADDY RIVER
    // ========================================
    {
        id: "irrawaddy",
        name: "Irrawaddy River",
        length: 2170,
        continent: "asia",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800",
        
        countries: [
            { name: "Myanmar", flag: "🇲🇲" }
        ],
        
        states: [
            "Kachin State", "Sagaing Region", "Mandalay Region",
            "Magway Region", "Bago Region", "Ayeyarwady Region", "Yangon Region"
        ],
        
        source: {
            location: "Confluence of Mali and N'mai Rivers, Kachin State",
            type: "Mountain rivers from Himalayan foothills",
            elevation: "200 m (at confluence)",
            coordinates: [25.8500, 97.5333]
        },
        
        mouth: {
            location: "Andaman Sea, Myanmar",
            type: "Delta",
            delta: "Irrawaddy Delta - 30,000 km², rice bowl of Myanmar",
            coordinates: [15.8667, 95.2167]
        },
        
        tributaries: {
            leftBank: [
                "Mali River",
                "Mogaung River",
                "Mu River",
                "Chindwin River",
                "Yaw River"
            ],
            rightBank: [
                "N'mai River",
                "Myitnge River",
                "Zawgyi River"
            ]
        },
        
        distributaries: [
            "Pathein River",
            "Pyamalaw River",
            "Toe River",
            "Bogale River",
            "Pyapon River",
            "China Bakir River"
        ],
        
        majorCities: [
            "Myitkyina", "Bhamo", "Katha", "Mandalay",
            "Sagaing", "Pakokku", "Bagan", "Magway",
            "Pyay", "Hinthada", "Pathein", "Yangon"
        ],
        
        dams: [
            { name: "Myitsone Dam (Suspended)", details: "Kachin State, 6,000 MW planned, suspended 2011" },
            { name: "Yeywa Dam", details: "Mandalay, 790 MW, 2010" },
            { name: "Shweli I Dam", details: "Shan State, 600 MW, 2008" },
            { name: "Sedawgyi Dam", details: "Mandalay Region, irrigation, 1989" }
        ],
        
        basinArea: "411,000 km²",
        discharge: "13,000 m³/s",
        
        riverPath: [
            [25.85, 97.53],    // Source - Mali-N'mai confluence
            [25.38, 97.40],    // Myitkyina
            [24.08, 97.03],
            [24.25, 97.23],    // Bhamo
            [23.83, 96.10],
            [22.93, 95.50],
            [22.00, 95.15],
            [21.97, 95.85],
            [21.97, 96.09],    // Mandalay
            [21.88, 95.98],    // Sagaing
            [21.33, 95.10],    // Pakokku
            [21.25, 95.08],    // Chindwin confluence
            [21.17, 94.87],    // Bagan
            [20.15, 94.90],    // Magway
            [19.80, 95.22],
            [18.82, 95.22],    // Pyay
            [17.90, 95.00],
            [17.65, 95.47],    // Hinthada
            [17.00, 95.00],
            [16.80, 95.30],    // Delta begins
            [16.50, 95.22],
            [15.87, 95.22]     // Andaman Sea (Mouth)
        ],
        
        tributaryPaths: [
            {
                name: "Chindwin River",
                path: [
                    [26.50, 95.50],    // India-Myanmar border
                    [24.00, 95.00],
                    [22.50, 95.00],
                    [21.25, 95.08]     // Confluence near Pakokku
                ]
            },
            {
                name: "Myitnge River",
                path: [
                    [22.50, 97.00],    // Shan State
                    [22.00, 96.50],
                    [21.85, 96.05]     // Confluence near Mandalay
                ]
            },
            {
                name: "Mu River",
                path: [
                    [23.50, 95.00],
                    [22.70, 95.50],
                    [22.50, 95.80]     // Confluence
                ]
            }
        ],
        
        distributaryPaths: [
            {
                name: "Pathein River",
                path: [
                    [16.80, 95.30],
                    [16.78, 94.73]     // Pathein, Andaman Sea
                ]
            },
            {
                name: "Bogale River",
                path: [
                    [16.80, 95.30],
                    [16.30, 95.35]     // Andaman Sea
                ]
            },
            {
                name: "Pyapon River",
                path: [
                    [16.80, 95.30],
                    [16.25, 95.70]     // Andaman Sea
                ]
            }
        ],
        
        cityCoordinates: [
            { name: "Myitkyina", coords: [25.38, 97.40] },
            { name: "Bhamo", coords: [24.25, 97.23] },
            { name: "Mandalay", coords: [21.97, 96.09] },
            { name: "Sagaing", coords: [21.88, 95.98] },
            { name: "Bagan", coords: [21.17, 94.87] },
            { name: "Pyay", coords: [18.82, 95.22] },
            { name: "Pathein", coords: [16.78, 94.73] },
            { name: "Yangon", coords: [16.87, 96.20] }
        ],
        
        damCoordinates: [
            { name: "Myitsone Dam Site", coords: [25.67, 97.45], details: "6,000 MW - Suspended since 2011" },
            { name: "Yeywa Dam", coords: [21.68, 96.42], details: "790 MW hydroelectric" }
        ],
        
        flightLandmarks: [
            { progress: 0, name: "Mali-N'mai Confluence", icon: "🔀", description: "Source of the Irrawaddy" },
            { progress: 0.08, name: "Myitkyina", icon: "🏙️", description: "Kachin State capital" },
            { progress: 0.15, name: "Bhamo", icon: "🏘️", description: "Historic jade trade town" },
            { progress: 0.30, name: "Second Defile", icon: "🏞️", description: "Dramatic gorge" },
            { progress: 0.45, name: "Mandalay", icon: "🏙️", description: "Cultural capital of Myanmar" },
            { progress: 0.50, name: "Sagaing", icon: "🛕", description: "Buddhist religious center" },
            { progress: 0.55, name: "Chindwin Confluence", icon: "🔀", description: "Largest tributary joins" },
            { progress: 0.60, name: "Bagan", icon: "🛕", description: "Ancient temple city - UNESCO" },
            { progress: 0.75, name: "Pyay", icon: "🏛️", description: "Sri Ksetra ancient city nearby" },
            { progress: 0.90, name: "Irrawaddy Delta", icon: "🌾", description: "Rice bowl of Myanmar" },
            { progress: 1.0, name: "Andaman Sea", icon: "🌊", description: "Delta mouth" }
        ],
        
        economicImportance: [
            "Lifeline of Myanmar's economy",
            "Major transportation corridor",
            "Rice cultivation in delta (rice bowl of Myanmar)",
            "Fishing industry",
            "Jade and gem trade (upper reaches)",
            "Tourism (Bagan, river cruises)"
        ],
        
        environmentalIssues: [
            "Proposed dam projects threatening ecosystem",
            "Deforestation in upper basin",
            "Gold mining pollution",
            "Cyclone Nargis devastation (2008) - 138,000 deaths",
            "Mangrove destruction in delta",
            "Plastic pollution"
        ],
        
        waterDisputes: [
            {
                title: "Myitsone Dam Controversy",
                description: "Chinese-backed 6,000 MW dam suspended in 2011 due to environmental and social concerns; remains contentious."
            }
        ],
        
        historicalImportance: [
            {
                title: "Burmese Kingdoms",
                description: "The Irrawaddy was the center of successive Burmese kingdoms, with royal capitals at Bagan, Ava, Amarapura, and Mandalay."
            },
            {
                title: "Colonial Steamship Era",
                description: "The Irrawaddy Flotilla Company operated the world's largest inland fleet, connecting all of Burma."
            },
            {
                title: "WWII Burma Campaign",
                description: "The river was a crucial battleground during the Allied campaign against Japanese forces (1942-1945)."
            },
            {
                title: "George Orwell",
                description: "The author served as a police officer in Burma, and the Irrawaddy features in his writings including 'Burmese Days'."
            }
        ]
    }
];

// ============================================================
// EXPORT RIVERS DATA 3
// ============================================================

if (typeof window !== 'undefined') {
    window.RIVERS_DATA_3 = RIVERS_DATA_3;
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = RIVERS_DATA_3;
}

console.log('✅ Rivers Data 3 loaded:', RIVERS_DATA_3.length, 'rivers (21-30)');
