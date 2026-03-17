/**
 * GEOTOPIA - Rivers Data File 1
 * Rivers 1-10 (Longest Rivers)
 * Nile, Amazon, Yangtze, Mississippi-Missouri, Yenisei, Yellow River, Ob, Parana, Congo, Amur
 */

const RIVERS_DATA_1 = [
    // ========================================
    // 1. NILE RIVER
    // ========================================
    {
        id: "nile",
        name: "Nile River",
        length: 6650,
        continent: "africa",
        image: "https://images.unsplash.com/photo-1553913861-c0a836826b48?w=800",
        
        countries: [
            { name: "Uganda", flag: "🇺🇬" },
            { name: "South Sudan", flag: "🇸🇸" },
            { name: "Sudan", flag: "🇸🇩" },
            { name: "Egypt", flag: "🇪🇬" },
            { name: "Ethiopia", flag: "🇪🇹" },
            { name: "Eritrea", flag: "🇪🇷" },
            { name: "Kenya", flag: "🇰🇪" },
            { name: "Tanzania", flag: "🇹🇿" },
            { name: "Rwanda", flag: "🇷🇼" },
            { name: "Burundi", flag: "🇧🇮" },
            { name: "DR Congo", flag: "🇨🇩" }
        ],
        
        states: [
            "Upper Egypt", "Lower Egypt", "Khartoum State", "Northern State",
            "River Nile State", "Central Equatoria", "Jonglei", "Western Equatoria"
        ],
        
        source: {
            location: "Burundi, East Africa",
            type: "Lake Victoria / Kagera River",
            elevation: "1,134 m",
            coordinates: [-2.2833, 29.3500]
        },
        
        mouth: {
            location: "Mediterranean Sea, Egypt",
            type: "Delta",
            delta: "Nile Delta - 240 km wide",
            coordinates: [31.5000, 30.0000]
        },
        
        tributaries: {
            leftBank: [
                "Bahr el Ghazal",
                "Sobat River",
                "Blue Nile (Abbay)"
            ],
            rightBank: [
                "Atbara River",
                "Rahad River",
                "Dinder River"
            ]
        },
        
        distributaries: [
            "Rosetta Branch",
            "Damietta Branch"
        ],
        
        majorCities: [
            "Cairo", "Alexandria", "Giza", "Luxor", "Aswan",
            "Khartoum", "Omdurman", "Juba", "Kampala", "Mwanza"
        ],
        
        dams: [
            { name: "Aswan High Dam", details: "Egypt, completed 1970, 2.1 GW capacity" },
            { name: "Aswan Low Dam", details: "Egypt, completed 1902" },
            { name: "Merowe Dam", details: "Sudan, completed 2009, 1.25 GW" },
            { name: "Grand Ethiopian Renaissance Dam", details: "Ethiopia, under construction, 6.45 GW" },
            { name: "Roseires Dam", details: "Sudan, Blue Nile" },
            { name: "Sennar Dam", details: "Sudan, Blue Nile" },
            { name: "Owen Falls Dam", details: "Uganda, at Lake Victoria outlet" }
        ],
        
        basinArea: "3,254,555 km²",
        discharge: "2,830 m³/s",
        
        riverPath: [
            [-2.28, 29.35],    // Source - Burundi
            [-1.95, 29.80],
            [-1.50, 30.40],
            [-0.95, 31.50],
            [-0.38, 32.90],    // Lake Victoria
            [0.50, 32.60],
            [2.50, 32.00],
            [4.85, 31.60],     // Juba
            [6.50, 31.00],
            [9.50, 31.50],
            [12.00, 32.50],
            [15.60, 32.55],    // Khartoum
            [17.50, 33.80],
            [19.00, 33.50],
            [21.00, 32.00],
            [24.00, 32.90],    // Aswan
            [25.70, 32.65],    // Luxor
            [27.50, 31.20],
            [30.05, 31.23],    // Cairo
            [31.50, 30.00]     // Mediterranean (Mouth)
        ],
        
        tributaryPaths: [
            {
                name: "Blue Nile",
                path: [
                    [11.60, 37.38],  // Lake Tana, Ethiopia
                    [13.00, 35.50],
                    [14.50, 33.80],
                    [15.60, 32.55]   // Khartoum confluence
                ]
            },
            {
                name: "Atbara River",
                path: [
                    [13.00, 38.00],
                    [15.00, 36.00],
                    [17.70, 33.98]   // Confluence
                ]
            },
            {
                name: "Sobat River",
                path: [
                    [7.50, 34.50],
                    [8.50, 33.00],
                    [9.30, 31.75]    // Confluence
                ]
            }
        ],
        
        distributaryPaths: [
            {
                name: "Rosetta Branch",
                path: [
                    [30.50, 31.00],
                    [31.10, 30.70],
                    [31.40, 30.42]   // Mediterranean
                ]
            },
            {
                name: "Damietta Branch",
                path: [
                    [30.50, 31.00],
                    [31.00, 31.35],
                    [31.42, 31.52]   // Mediterranean
                ]
            }
        ],
        
        cityCoordinates: [
            { name: "Cairo", coords: [30.05, 31.23] },
            { name: "Khartoum", coords: [15.60, 32.55] },
            { name: "Aswan", coords: [24.09, 32.90] },
            { name: "Luxor", coords: [25.70, 32.65] },
            { name: "Alexandria", coords: [31.20, 29.95] },
            { name: "Juba", coords: [4.85, 31.60] }
        ],
        
        damCoordinates: [
            { name: "Aswan High Dam", coords: [23.97, 32.88], details: "2.1 GW hydroelectric capacity" },
            { name: "Grand Ethiopian Renaissance Dam", coords: [11.21, 35.09], details: "6.45 GW - Africa's largest" },
            { name: "Merowe Dam", coords: [18.47, 31.82], details: "1.25 GW capacity" }
        ],
        
        flightLandmarks: [
            { progress: 0, name: "Burundi Highlands", icon: "🏔️", description: "Source of the Nile" },
            { progress: 0.08, name: "Lake Victoria", icon: "🌊", description: "Africa's largest lake" },
            { progress: 0.20, name: "Murchison Falls", icon: "💧", description: "Powerful waterfall in Uganda" },
            { progress: 0.35, name: "Juba, South Sudan", icon: "🏙️", description: "Capital of South Sudan" },
            { progress: 0.45, name: "White Nile-Blue Nile Confluence", icon: "🔀", description: "Two Niles merge at Khartoum" },
            { progress: 0.60, name: "Nubian Desert", icon: "🏜️", description: "Saharan crossing" },
            { progress: 0.75, name: "Aswan High Dam", icon: "🏗️", description: "Egypt's mega dam" },
            { progress: 0.85, name: "Valley of the Kings", icon: "👑", description: "Ancient Egyptian tombs" },
            { progress: 0.95, name: "Cairo & Pyramids", icon: "🔺", description: "Great Pyramids of Giza" },
            { progress: 1.0, name: "Nile Delta", icon: "🌿", description: "Mediterranean Sea" }
        ],
        
        economicImportance: [
            "Irrigation for 99% of Egypt's agriculture",
            "Hydroelectric power generation (Aswan Dam)",
            "Fishing industry supporting millions",
            "Tourism along historical sites",
            "Transportation and trade route",
            "Cotton and sugarcane cultivation"
        ],
        
        environmentalIssues: [
            "Water scarcity due to increasing demand",
            "Pollution from agricultural runoff",
            "Salinization of Nile Delta",
            "Impact of dams on sediment flow",
            "Climate change affecting rainfall",
            "Invasive water hyacinth species"
        ],
        
        waterDisputes: [
            {
                title: "Egypt-Ethiopia GERD Dispute",
                description: "Ongoing dispute over the Grand Ethiopian Renaissance Dam's filling and operation, affecting Egypt's water security."
            },
            {
                title: "Nile Basin Initiative",
                description: "Multilateral cooperation framework among 10 Nile basin countries for equitable water sharing."
            }
        ],
        
        historicalImportance: [
            {
                title: "Ancient Egyptian Civilization",
                description: "The Nile was the lifeblood of Ancient Egypt, enabling one of the world's first great civilizations to flourish for over 3,000 years."
            },
            {
                title: "Greek & Roman Exploration",
                description: "Ancient explorers sought the Nile's source for centuries, making it one of history's greatest geographical mysteries."
            },
            {
                title: "Modern Exploration",
                description: "19th century explorers like Speke, Burton, and Livingstone finally traced the Nile's source to Lake Victoria."
            }
        ]
    },
    
    // ========================================
    // 2. AMAZON RIVER
    // ========================================
    {
        id: "amazon",
        name: "Amazon River",
        length: 6400,
        continent: "south-america",
        image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=800",
        
        countries: [
            { name: "Brazil", flag: "🇧🇷" },
            { name: "Peru", flag: "🇵🇪" },
            { name: "Colombia", flag: "🇨🇴" },
            { name: "Venezuela", flag: "🇻🇪" },
            { name: "Ecuador", flag: "🇪🇨" },
            { name: "Bolivia", flag: "🇧🇴" },
            { name: "Guyana", flag: "🇬🇾" },
            { name: "Suriname", flag: "🇸🇷" },
            { name: "French Guiana", flag: "🇬🇫" }
        ],
        
        states: [
            "Amazonas", "Pará", "Acre", "Rondônia", "Roraima",
            "Amapá", "Loreto", "Ucayali", "Madre de Dios"
        ],
        
        source: {
            location: "Nevado Mismi, Arequipa, Peru",
            type: "Glacier/Mountain stream",
            elevation: "5,597 m",
            coordinates: [-15.5180, -71.6910]
        },
        
        mouth: {
            location: "Atlantic Ocean, Brazil",
            type: "Estuary",
            delta: "Amazon River mouth - 325 km wide",
            coordinates: [0.0000, -49.0000]
        },
        
        tributaries: {
            leftBank: [
                "Negro River",
                "Japurá River",
                "Içá River",
                "Napo River"
            ],
            rightBank: [
                "Madeira River",
                "Tapajós River",
                "Xingu River",
                "Tocantins River",
                "Purus River",
                "Juruá River"
            ]
        },
        
        distributaries: [
            "Pará River",
            "Tocantins distributary channels"
        ],
        
        majorCities: [
            "Manaus", "Belém", "Iquitos", "Santarém", "Macapá",
            "Tabatinga", "Leticia", "Puerto Maldonado"
        ],
        
        dams: [
            { name: "Belo Monte Dam", details: "Xingu River, Brazil, 11.2 GW" },
            { name: "Tucuruí Dam", details: "Tocantins River, 8.4 GW" },
            { name: "Santo Antônio Dam", details: "Madeira River, 3.6 GW" },
            { name: "Jirau Dam", details: "Madeira River, 3.75 GW" },
            { name: "Samuel Dam", details: "Jamari River, 0.2 GW" }
        ],
        
        basinArea: "7,050,000 km²",
        discharge: "209,000 m³/s",
        
        riverPath: [
            [-15.52, -71.69],   // Source - Nevado Mismi
            [-14.00, -72.50],
            [-12.50, -73.50],
            [-10.50, -74.00],
            [-6.50, -74.50],
            [-4.00, -73.20],    // Iquitos area
            [-3.50, -70.00],
            [-3.10, -67.95],    // Colombia border
            [-3.10, -60.00],    // Manaus
            [-2.50, -55.00],
            [-1.50, -52.00],    // Santarém
            [-0.50, -50.00],
            [0.00, -49.00]      // Atlantic Ocean (Mouth)
        ],
        
        tributaryPaths: [
            {
                name: "Negro River",
                path: [
                    [2.00, -66.00],
                    [0.50, -64.00],
                    [-1.00, -62.00],
                    [-3.10, -60.00]    // Confluence at Manaus
                ]
            },
            {
                name: "Madeira River",
                path: [
                    [-10.50, -65.35],
                    [-8.00, -63.00],
                    [-5.50, -60.50],
                    [-3.50, -58.80]    // Confluence
                ]
            },
            {
                name: "Tapajós River",
                path: [
                    [-7.50, -57.50],
                    [-5.00, -56.00],
                    [-2.50, -55.00]    // Confluence at Santarém
                ]
            }
        ],
        
        distributaryPaths: [
            {
                name: "Pará River",
                path: [
                    [-1.00, -50.00],
                    [-1.20, -49.00],
                    [-1.45, -48.50]    // Atlantic
                ]
            }
        ],
        
        cityCoordinates: [
            { name: "Manaus", coords: [-3.10, -60.00] },
            { name: "Belém", coords: [-1.45, -48.50] },
            { name: "Iquitos", coords: [-3.75, -73.25] },
            { name: "Santarém", coords: [-2.43, -54.70] },
            { name: "Macapá", coords: [0.03, -51.05] }
        ],
        
        damCoordinates: [
            { name: "Belo Monte Dam", coords: [-3.12, -51.77], details: "11.2 GW - Brazil's largest" },
            { name: "Tucuruí Dam", coords: [-3.83, -49.72], details: "8.4 GW hydroelectric" }
        ],
        
        flightLandmarks: [
            { progress: 0, name: "Nevado Mismi Glacier", icon: "🏔️", description: "Amazon's true source" },
            { progress: 0.15, name: "Peruvian Andes", icon: "⛰️", description: "Steep mountain descent" },
            { progress: 0.30, name: "Iquitos, Peru", icon: "🏙️", description: "Largest city unreachable by road" },
            { progress: 0.45, name: "Colombia-Brazil Border", icon: "🚧", description: "Triple border region" },
            { progress: 0.55, name: "Meeting of Waters", icon: "🌊", description: "Negro & Amazon merge at Manaus" },
            { progress: 0.70, name: "Manaus City", icon: "🏛️", description: "Heart of the Amazon" },
            { progress: 0.85, name: "Santarém", icon: "🏘️", description: "Tapajós confluence" },
            { progress: 1.0, name: "Atlantic Ocean", icon: "🌊", description: "World's largest river mouth" }
        ],
        
        economicImportance: [
            "World's largest freshwater fishery",
            "Major shipping route for Amazon basin",
            "Hydroelectric power (Belo Monte, Tucuruí)",
            "Timber and forest products",
            "Ecotourism industry",
            "Mining operations (gold, bauxite)"
        ],
        
        environmentalIssues: [
            "Deforestation of Amazon rainforest",
            "Mercury pollution from gold mining",
            "Dam construction disrupting ecosystems",
            "Climate change and drought patterns",
            "Illegal logging and land clearing",
            "Species extinction threats"
        ],
        
        waterDisputes: [
            {
                title: "Amazon Cooperation Treaty",
                description: "Eight countries cooperating on sustainable development and environmental protection of the Amazon basin."
            }
        ],
        
        historicalImportance: [
            {
                title: "Indigenous Civilizations",
                description: "Home to hundreds of indigenous tribes for over 11,000 years, including the legendary Amazons that gave the river its name."
            },
            {
                title: "European Exploration",
                description: "Francisco de Orellana completed the first navigation of the entire Amazon in 1542."
            },
            {
                title: "Rubber Boom",
                description: "The 19th century rubber boom transformed cities like Manaus into wealthy centers with opera houses and grand architecture."
            }
        ]
    },
    
    // ========================================
    // 3. YANGTZE RIVER
    // ========================================
    {
        id: "yangtze",
        name: "Yangtze River",
        length: 6300,
        continent: "asia",
        image: "https://images.unsplash.com/photo-1537531383496-f4749b918e59?w=800",
        
        countries: [
            { name: "China", flag: "🇨🇳" }
        ],
        
        states: [
            "Qinghai", "Tibet", "Yunnan", "Sichuan", "Chongqing",
            "Hubei", "Hunan", "Jiangxi", "Anhui", "Jiangsu", "Shanghai"
        ],
        
        source: {
            location: "Jari Hill, Tanggula Mountains, Qinghai",
            type: "Glacier",
            elevation: "5,170 m",
            coordinates: [33.4260, 91.1760]
        },
        
        mouth: {
            location: "East China Sea, Shanghai",
            type: "Estuary",
            delta: "Yangtze River Delta",
            coordinates: [31.4600, 121.9000]
        },
        
        tributaries: {
            leftBank: [
                "Yalong River",
                "Min River",
                "Jialing River",
                "Han River"
            ],
            rightBank: [
                "Wu River",
                "Yuan River",
                "Xiang River",
                "Gan River",
                "Huangpu River"
            ]
        },
        
        distributaries: [
            "Multiple delta channels",
            "Huangpu River connection"
        ],
        
        majorCities: [
            "Shanghai", "Chongqing", "Wuhan", "Nanjing", "Chengdu",
            "Hangzhou", "Nanchang", "Yichang", "Jiujiang"
        ],
        
        dams: [
            { name: "Three Gorges Dam", details: "World's largest power station, 22.5 GW" },
            { name: "Gezhouba Dam", details: "First dam on main stream, 2.7 GW" },
            { name: "Xiluodu Dam", details: "Jinsha River, 13.9 GW" },
            { name: "Xiangjiaba Dam", details: "Jinsha River, 6.4 GW" },
            { name: "Wudongde Dam", details: "Jinsha River, 10.2 GW" }
        ],
        
        basinArea: "1,808,500 km²",
        discharge: "30,166 m³/s",
        
        riverPath: [
            [33.43, 91.18],    // Source
            [32.50, 93.00],
            [31.00, 97.00],
            [28.50, 100.00],
            [27.00, 102.00],
            [28.50, 104.00],
            [29.56, 106.55],   // Chongqing
            [30.70, 111.00],   // Three Gorges
            [30.58, 114.27],   // Wuhan
            [31.00, 117.00],
            [32.06, 118.78],   // Nanjing
            [31.23, 121.47],   // Shanghai
            [31.46, 121.90]    // East China Sea
        ],
        
        tributaryPaths: [
            {
                name: "Jialing River",
                path: [
                    [33.50, 106.00],
                    [31.50, 106.00],
                    [29.56, 106.55]    // Confluence at Chongqing
                ]
            },
            {
                name: "Han River",
                path: [
                    [33.00, 108.00],
                    [32.00, 111.00],
                    [30.58, 114.27]    // Confluence at Wuhan
                ]
            },
            {
                name: "Gan River",
                path: [
                    [25.50, 115.00],
                    [28.00, 115.50],
                    [29.73, 116.00]    // Confluence
                ]
            }
        ],
        
        distributaryPaths: [],
        
        cityCoordinates: [
            { name: "Shanghai", coords: [31.23, 121.47] },
            { name: "Chongqing", coords: [29.56, 106.55] },
            { name: "Wuhan", coords: [30.58, 114.27] },
            { name: "Nanjing", coords: [32.06, 118.78] },
            { name: "Yichang", coords: [30.70, 111.30] }
        ],
        
        damCoordinates: [
            { name: "Three Gorges Dam", coords: [30.82, 111.00], details: "22.5 GW - World's largest hydroelectric" },
            { name: "Gezhouba Dam", coords: [30.70, 111.27], details: "2.7 GW capacity" }
        ],
        
        flightLandmarks: [
            { progress: 0, name: "Tanggula Mountains", icon: "🏔️", description: "Tibetan Plateau source" },
            { progress: 0.15, name: "Tiger Leaping Gorge", icon: "⛰️", description: "Deepest gorge in the world" },
            { progress: 0.35, name: "Chongqing", icon: "🏙️", description: "Mountain city, 30 million people" },
            { progress: 0.50, name: "Three Gorges", icon: "🏞️", description: "Spectacular river gorges" },
            { progress: 0.55, name: "Three Gorges Dam", icon: "🏗️", description: "World's largest dam" },
            { progress: 0.70, name: "Wuhan", icon: "🏛️", description: "Central China metropolis" },
            { progress: 0.85, name: "Nanjing", icon: "🏯", description: "Former capital of China" },
            { progress: 1.0, name: "Shanghai", icon: "🌆", description: "China's largest city" }
        ],
        
        economicImportance: [
            "Generates 4% of world's electricity",
            "Major shipping corridor for inland China",
            "Irrigates 23% of China's farmland",
            "Industrial heartland of China",
            "Fisheries and aquaculture",
            "Tourism - Three Gorges cruises"
        ],
        
        environmentalIssues: [
            "Severe water pollution from industry",
            "Three Gorges Dam environmental impacts",
            "Flooding and landslide risks",
            "Endangered Yangtze River dolphin (functionally extinct)",
            "Sedimentation and erosion",
            "Loss of wetland ecosystems"
        ],
        
        waterDisputes: [],
        
        historicalImportance: [
            {
                title: "Cradle of Chinese Civilization",
                description: "The Yangtze basin has been home to Chinese civilization for over 7,000 years, with major archaeological sites along its banks."
            },
            {
                title: "Three Kingdoms Era",
                description: "Famous battles including the Battle of Red Cliffs (208 AD) took place along the Yangtze."
            },
            {
                title: "Silk Road Connection",
                description: "The river served as a major trade route connecting inland China to the Silk Road and maritime trade."
            }
        ]
    },
    
    // ========================================
    // 4. MISSISSIPPI-MISSOURI RIVER
    // ========================================
    {
        id: "mississippi",
        name: "Mississippi-Missouri River",
        length: 6275,
        continent: "north-america",
        image: "https://images.unsplash.com/photo-1565214975484-3cfa9e56f914?w=800",
        
        countries: [
            { name: "United States", flag: "🇺🇸" },
            { name: "Canada", flag: "🇨🇦" }
        ],
        
        states: [
            "Minnesota", "Wisconsin", "Iowa", "Illinois", "Missouri",
            "Kentucky", "Tennessee", "Arkansas", "Mississippi", "Louisiana",
            "Montana", "North Dakota", "South Dakota", "Nebraska", "Kansas"
        ],
        
        source: {
            location: "Lake Itasca, Minnesota (Mississippi); Brower's Spring, Montana (Missouri)",
            type: "Lake / Spring",
            elevation: "450 m / 2,750 m",
            coordinates: [47.2392, -95.2073]
        },
        
        mouth: {
            location: "Gulf of Mexico, Louisiana",
            type: "Delta",
            delta: "Mississippi River Delta",
            coordinates: [29.1500, -89.2500]
        },
        
        tributaries: {
            leftBank: [
                "Missouri River",
                "Ohio River",
                "Arkansas River",
                "Red River"
            ],
            rightBank: [
                "Minnesota River",
                "Des Moines River",
                "Illinois River",
                "Yazoo River"
            ]
        },
        
        distributaries: [
            "Atchafalaya River",
            "Old River Control Structure",
            "Bonnet Carré Spillway"
        ],
        
        majorCities: [
            "New Orleans", "Memphis", "St. Louis", "Minneapolis",
            "Baton Rouge", "Kansas City", "Omaha", "St. Paul"
        ],
        
        dams: [
            { name: "Lock and Dam No. 1-29", details: "Navigation locks on Upper Mississippi" },
            { name: "Fort Peck Dam", details: "Missouri River, Montana" },
            { name: "Garrison Dam", details: "Missouri River, North Dakota" },
            { name: "Oahe Dam", details: "Missouri River, South Dakota" },
            { name: "Gavins Point Dam", details: "Missouri River, Nebraska/South Dakota" }
        ],
        
        basinArea: "3,238,000 km²",
        discharge: "16,800 m³/s",
        
        riverPath: [
            [47.24, -95.21],   // Lake Itasca
            [45.00, -93.30],   // Minneapolis
            [44.00, -91.50],
            [42.50, -90.50],
            [40.00, -90.00],
            [38.63, -90.20],   // St. Louis
            [37.00, -89.50],
            [35.15, -90.05],   // Memphis
            [33.50, -91.00],
            [31.50, -91.30],
            [30.45, -91.18],   // Baton Rouge
            [29.95, -90.07],   // New Orleans
            [29.15, -89.25]    // Gulf of Mexico
        ],
        
        tributaryPaths: [
            {
                name: "Missouri River",
                path: [
                    [48.00, -111.00],  // Montana
                    [46.50, -108.00],
                    [43.00, -100.00],
                    [41.00, -96.00],
                    [39.50, -94.50],   // Kansas City
                    [38.80, -90.40]    // Confluence
                ]
            },
            {
                name: "Ohio River",
                path: [
                    [40.50, -80.00],   // Pittsburgh
                    [39.00, -84.50],   // Cincinnati
                    [38.00, -86.00],
                    [37.00, -89.00]    // Confluence
                ]
            },
            {
                name: "Arkansas River",
                path: [
                    [39.00, -106.00],  // Colorado
                    [37.00, -100.00],  // Kansas
                    [35.50, -94.50],   // Tulsa
                    [33.80, -91.10]    // Confluence
                ]
            }
        ],
        
        distributaryPaths: [
            {
                name: "Atchafalaya River",
                path: [
                    [31.00, -91.60],   // Old River
                    [30.50, -91.50],
                    [29.70, -91.40]    // Atchafalaya Bay
                ]
            }
        ],
        
        cityCoordinates: [
            { name: "Minneapolis", coords: [44.98, -93.27] },
            { name: "St. Louis", coords: [38.63, -90.20] },
            { name: "Memphis", coords: [35.15, -90.05] },
            { name: "New Orleans", coords: [29.95, -90.07] },
            { name: "Baton Rouge", coords: [30.45, -91.18] },
            { name: "Kansas City", coords: [39.10, -94.58] }
        ],
        
        damCoordinates: [
            { name: "Fort Peck Dam", coords: [47.98, -106.42], details: "Largest earth-filled dam in US" },
            { name: "Gavins Point Dam", coords: [42.85, -97.48], details: "Missouri River, Lewis & Clark Lake" }
        ],
        
        flightLandmarks: [
            { progress: 0, name: "Lake Itasca", icon: "🏔️", description: "Mississippi headwaters" },
            { progress: 0.10, name: "Minneapolis-St. Paul", icon: "🏙️", description: "Twin Cities" },
            { progress: 0.30, name: "Missouri Confluence", icon: "🔀", description: "Two mighty rivers join" },
            { progress: 0.35, name: "St. Louis", icon: "🏛️", description: "Gateway Arch city" },
            { progress: 0.50, name: "Ohio Confluence", icon: "🌊", description: "River doubles in size" },
            { progress: 0.60, name: "Memphis", icon: "🎵", description: "Blues and soul music city" },
            { progress: 0.80, name: "Baton Rouge", icon: "🏛️", description: "Louisiana capital" },
            { progress: 0.90, name: "New Orleans", icon: "🎺", description: "Jazz city" },
            { progress: 1.0, name: "Mississippi Delta", icon: "🦐", description: "Gulf of Mexico" }
        ],
        
        economicImportance: [
            "Carries 60% of US grain exports",
            "Major commercial navigation route",
            "Petrochemical corridor in Louisiana",
            "Freshwater fisheries",
            "Hydroelectric power from dams",
            "Irrigation for agriculture"
        ],
        
        environmentalIssues: [
            "Gulf of Mexico dead zone from runoff",
            "Flooding (1927, 1993, 2011 major floods)",
            "Invasive Asian carp species",
            "Wetland loss in Louisiana delta",
            "Agricultural pollution",
            "Channelization affecting ecosystems"
        ],
        
        waterDisputes: [
            {
                title: "Mississippi River Commission",
                description: "Federal agency managing flood control and navigation along the river since 1879."
            }
        ],
        
        historicalImportance: [
            {
                title: "Native American Heritage",
                description: "The river was central to indigenous cultures including the Mississippian civilization that built Cahokia near modern St. Louis."
            },
            {
                title: "Lewis and Clark Expedition",
                description: "In 1804, the famous expedition traveled up the Missouri to explore the Louisiana Purchase."
            },
            {
                title: "Mark Twain Era",
                description: "Steamboat commerce made the river famous in American literature through Mark Twain's works."
            }
        ]
    },
    
    // ========================================
    // 5. YENISEI RIVER
    // ========================================
    {
        id: "yenisei",
        name: "Yenisei River",
        length: 5539,
        continent: "asia",
        image: "https://images.unsplash.com/photo-1573641403927-a2e015c3e1ad?w=800",
        
        countries: [
            { name: "Russia", flag: "🇷🇺" },
            { name: "Mongolia", flag: "🇲🇳" }
        ],
        
        states: [
            "Krasnoyarsk Krai", "Republic of Tuva", "Republic of Khakassia",
            "Irkutsk Oblast", "Buryatia"
        ],
        
        source: {
            location: "Mungaragiyn-Gol, Mongolia",
            type: "Mountain stream",
            elevation: "2,580 m",
            coordinates: [51.7167, 97.5500]
        },
        
        mouth: {
            location: "Kara Sea, Arctic Ocean",
            type: "Estuary",
            delta: "Yenisei Gulf",
            coordinates: [71.8333, 82.6667]
        },
        
        tributaries: {
            leftBank: [
                "Abakan River",
                "Sym River",
                "Kas River",
                "Yeloguy River"
            ],
            rightBank: [
                "Angara River",
                "Podkamennaya Tunguska",
                "Nizhnyaya Tunguska",
                "Kureyka River"
            ]
        },
        
        distributaries: [],
        
        majorCities: [
            "Krasnoyarsk", "Abakan", "Kyzyl", "Norilsk",
            "Lesosibirsk", "Igarka", "Dudinka"
        ],
        
        dams: [
            { name: "Sayano-Shushenskaya Dam", details: "Russia's largest, 6.4 GW" },
            { name: "Krasnoyarsk Dam", details: "6 GW capacity" },
            { name: "Mainskaya Dam", details: "0.3 GW capacity" },
            { name: "Boguchanskaya Dam", details: "Angara River, 3 GW" }
        ],
        
        basinArea: "2,580,000 km²",
        discharge: "19,600 m³/s",
        
        riverPath: [
            [51.72, 97.55],    // Source
            [52.00, 95.00],
            [52.27, 94.46],    // Kyzyl
            [53.50, 92.00],
            [53.72, 91.43],    // Abakan
            [56.01, 92.87],    // Krasnoyarsk
            [58.00, 92.00],
            [61.00, 90.00],
            [64.00, 87.00],
            [67.00, 86.00],
            [69.40, 86.20],    // Dudinka
            [71.83, 82.67]     // Kara Sea
        ],
        
        tributaryPaths: [
            {
                name: "Angara River",
                path: [
                    [51.90, 104.85],   // Lake Baikal
                    [54.00, 101.00],
                    [56.00, 96.00],
                    [58.10, 93.00]     // Confluence
                ]
            },
            {
                name: "Podkamennaya Tunguska",
                path: [
                    [62.00, 100.00],
                    [61.50, 95.00],
                    [61.60, 90.00]     // Confluence
                ]
            }
        ],
        
        distributaryPaths: [],
        
        cityCoordinates: [
            { name: "Krasnoyarsk", coords: [56.01, 92.87] },
            { name: "Kyzyl", coords: [51.72, 94.45] },
            { name: "Abakan", coords: [53.72, 91.43] },
            { name: "Norilsk", coords: [69.35, 88.20] },
            { name: "Dudinka", coords: [69.40, 86.18] }
        ],
        
        damCoordinates: [
            { name: "Sayano-Shushenskaya Dam", coords: [52.83, 91.37], details: "6.4 GW - Russia's largest" },
            { name: "Krasnoyarsk Dam", coords: [55.93, 92.30], details: "6 GW capacity" }
        ],
        
        flightLandmarks: [
            { progress: 0, name: "Mongolian Mountains", icon: "🏔️", description: "Source region" },
            { progress: 0.10, name: "Kyzyl", icon: "🏙️", description: "Geographic center of Asia" },
            { progress: 0.25, name: "Sayano-Shushenskaya Dam", icon: "🏗️", description: "Russia's largest dam" },
            { progress: 0.40, name: "Krasnoyarsk", icon: "🏛️", description: "Siberian metropolis" },
            { progress: 0.55, name: "Tunguska Region", icon: "💥", description: "Site of 1908 meteor event" },
            { progress: 0.75, name: "Arctic Circle", icon: "❄️", description: "Entering polar region" },
            { progress: 0.90, name: "Dudinka", icon: "⛴️", description: "Arctic port city" },
            { progress: 1.0, name: "Kara Sea", icon: "🌊", description: "Arctic Ocean" }
        ],
        
        economicImportance: [
            "Major hydroelectric power source",
            "Timber floating and forestry",
            "Nickel and copper mining (Norilsk)",
            "Northern Sea Route access",
            "Fishing industry",
            "Navigation route for Siberia"
        ],
        
        environmentalIssues: [
            "Industrial pollution from Norilsk",
            "Radioactive contamination from Soviet era",
            "Climate change affecting permafrost",
            "Dam impacts on fish migration",
            "Oil spill risks from shipping",
            "Mercury accumulation in food chain"
        ],
        
        waterDisputes: [],
        
        historicalImportance: [
            {
                title: "Siberian Exploration",
                description: "Russian Cossacks explored the Yenisei in the 17th century, establishing it as a major route for Siberian expansion."
            },
            {
                title: "Exile Route",
                description: "During the Tsarist and Soviet eras, the Yenisei region served as a destination for political exiles."
            }
        ]
    },
    
    // ========================================
    // 6. YELLOW RIVER (HUANG HE)
    // ========================================
    {
        id: "yellow-river",
        name: "Yellow River (Huang He)",
        length: 5464,
        continent: "asia",
        image: "https://images.unsplash.com/photo-1585409677983-0f6c41ca9c3b?w=800",
        
        countries: [
            { name: "China", flag: "🇨🇳" }
        ],
        
        states: [
            "Qinghai", "Sichuan", "Gansu", "Ningxia", "Inner Mongolia",
            "Shaanxi", "Shanxi", "Henan", "Shandong"
        ],
        
        source: {
            location: "Bayan Har Mountains, Qinghai",
            type: "Glacier/Springs",
            elevation: "4,500 m",
            coordinates: [34.4833, 96.5000]
        },
        
        mouth: {
            location: "Bohai Sea, Shandong",
            type: "Delta",
            delta: "Yellow River Delta",
            coordinates: [37.7833, 119.1667]
        },
        
        tributaries: {
            leftBank: [
                "Daxia River",
                "Tao River",
                "Zuli River"
            ],
            rightBank: [
                "Fen River",
                "Wei River",
                "Luo River",
                "Qin River"
            ]
        },
        
        distributaries: [
            "Historical course changes - multiple past mouths"
        ],
        
        majorCities: [
            "Lanzhou", "Yinchuan", "Baotou", "Zhengzhou",
            "Kaifeng", "Jinan", "Dongying"
        ],
        
        dams: [
            { name: "Xiaolangdi Dam", details: "Sediment control dam, 1.8 GW" },
            { name: "Sanmenxia Dam", details: "First major dam on Yellow River" },
            { name: "Longyangxia Dam", details: "Qinghai, 1.3 GW" },
            { name: "Liujiaxia Dam", details: "Gansu, 1.2 GW" }
        ],
        
        basinArea: "795,000 km²",
        discharge: "2,571 m³/s",
        
        riverPath: [
            [34.48, 96.50],    // Source
            [35.00, 98.00],
            [35.50, 100.00],
            [36.06, 103.83],   // Lanzhou
            [37.50, 105.50],
            [38.47, 106.27],   // Yinchuan
            [40.65, 109.84],   // Baotou
            [40.00, 111.50],
            [38.00, 110.50],
            [35.00, 111.00],
            [34.75, 113.67],   // Zhengzhou
            [35.00, 116.00],
            [36.67, 116.98],   // Jinan
            [37.78, 119.17]    // Bohai Sea
        ],
        
        tributaryPaths: [
            {
                name: "Wei River",
                path: [
                    [34.50, 107.00],
                    [34.30, 109.00],
                    [34.50, 110.30]    // Confluence
                ]
            },
            {
                name: "Fen River",
                path: [
                    [39.00, 112.50],
                    [37.50, 111.50],
                    [35.50, 110.50]    // Confluence
                ]
            }
        ],
        
        distributaryPaths: [],
        
        cityCoordinates: [
            { name: "Lanzhou", coords: [36.06, 103.83] },
            { name: "Yinchuan", coords: [38.47, 106.27] },
            { name: "Baotou", coords: [40.65, 109.84] },
            { name: "Zhengzhou", coords: [34.75, 113.67] },
            { name: "Jinan", coords: [36.67, 116.98] }
        ],
        
        damCoordinates: [
            { name: "Xiaolangdi Dam", coords: [34.92, 112.37], details: "Sediment control, 1.8 GW" },
            { name: "Sanmenxia Dam", coords: [34.82, 111.38], details: "Historic dam, 1957" }
        ],
        
        flightLandmarks: [
            { progress: 0, name: "Bayan Har Mountains", icon: "🏔️", description: "Tibetan Plateau source" },
            { progress: 0.15, name: "Zoige Wetlands", icon: "🌿", description: "High altitude marshlands" },
            { progress: 0.30, name: "Lanzhou", icon: "🏙️", description: "Yellow River capital" },
            { progress: 0.45, name: "Great Bend", icon: "↩️", description: "River's famous bend through desert" },
            { progress: 0.55, name: "Loess Plateau", icon: "🏜️", description: "Source of yellow sediment" },
            { progress: 0.70, name: "Zhengzhou", icon: "🏛️", description: "Ancient Chinese capital region" },
            { progress: 0.85, name: "Jinan", icon: "⛲", description: "City of Springs" },
            { progress: 1.0, name: "Bohai Sea", icon: "🌊", description: "Yellow River Delta" }
        ],
        
        economicImportance: [
            "Irrigates northern China's farmland",
            "Hydroelectric power generation",
            "Industrial water supply",
            "Supports 12% of China's population",
            "Cultural and historical tourism",
            "Coal mining region water supply"
        ],
        
        environmentalIssues: [
            "Extreme sedimentation (Yellow color)",
            "River drying up in lower reaches",
            "Over-extraction of water",
            "Industrial pollution",
            "Soil erosion from Loess Plateau",
            "Historical devastating floods"
        ],
        
        waterDisputes: [],
        
        historicalImportance: [
            {
                title: "Cradle of Chinese Civilization",
                description: "The Yellow River basin was home to China's earliest dynasties and is considered the birthplace of Chinese civilization."
            },
            {
                title: "China's Sorrow",
                description: "The river's devastating floods throughout history have killed millions, earning it the nickname 'China's Sorrow'."
            },
            {
                title: "Great Flood of Gun-Yu",
                description: "Ancient Chinese mythology describes the hero Yu the Great taming the Yellow River's floods."
            }
        ]
    },
    
    // ========================================
    // 7. OB RIVER
    // ========================================
    {
        id: "ob",
        name: "Ob River",
        length: 5410,
        continent: "asia",
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800",
        
        countries: [
            { name: "Russia", flag: "🇷🇺" },
            { name: "Kazakhstan", flag: "🇰🇿" },
            { name: "China", flag: "🇨🇳" }
        ],
        
        states: [
            "Altai Krai", "Novosibirsk Oblast", "Tomsk Oblast",
            "Khanty-Mansi Autonomous Okrug", "Yamalo-Nenets Autonomous Okrug"
        ],
        
        source: {
            location: "Confluence of Biya and Katun Rivers, Altai",
            type: "River confluence",
            elevation: "160 m",
            coordinates: [52.4333, 84.9833]
        },
        
        mouth: {
            location: "Gulf of Ob, Kara Sea",
            type: "Estuary/Gulf",
            delta: "Ob Bay - 800 km long",
            coordinates: [66.7000, 69.0000]
        },
        
        tributaries: {
            leftBank: [
                "Tom River",
                "Chulym River",
                "Ket River",
                "Vakh River"
            ],
            rightBank: [
                "Irtysh River",
                "Tym River",
                "Vasyugan River"
            ]
        },
        
        distributaries: [],
        
        majorCities: [
            "Novosibirsk", "Barnaul", "Surgut", "Nizhnevartovsk",
            "Tomsk", "Noyabrsk", "Salekhard"
        ],
        
        dams: [
            { name: "Novosibirsk Dam", details: "Novosibirsk, 0.5 GW" },
            { name: "Bukhtarma Dam", details: "Irtysh River, Kazakhstan" }
        ],
        
        basinArea: "2,990,000 km²",
        discharge: "12,475 m³/s",
        
        riverPath: [
            [52.43, 84.98],    // Source
            [53.35, 83.77],    // Barnaul
            [54.50, 83.00],
            [55.03, 82.92],    // Novosibirsk
            [57.00, 82.50],
            [58.60, 81.33],    // Tomsk region
            [60.00, 77.00],
            [61.25, 73.42],    // Surgut
            [63.00, 74.00],
            [64.00, 71.00],
            [66.53, 66.60],    // Salekhard
            [66.70, 69.00]     // Gulf of Ob
        ],
        
        tributaryPaths: [
            {
                name: "Irtysh River",
                path: [
                    [47.00, 85.00],    // China/Kazakhstan
                    [50.00, 80.00],
                    [53.00, 75.00],
                    [55.00, 73.50],    // Omsk
                    [61.00, 69.00]     // Confluence
                ]
            },
            {
                name: "Tom River",
                path: [
                    [53.00, 88.00],
                    [55.00, 86.00],
                    [56.50, 84.97],    // Tomsk
                    [57.00, 82.50]     // Confluence
                ]
            }
        ],
        
        distributaryPaths: [],
        
        cityCoordinates: [
            { name: "Novosibirsk", coords: [55.03, 82.92] },
            { name: "Barnaul", coords: [53.35, 83.77] },
            { name: "Surgut", coords: [61.25, 73.42] },
            { name: "Tomsk", coords: [56.50, 84.97] },
            { name: "Salekhard", coords: [66.53, 66.60] }
        ],
        
        damCoordinates: [
            { name: "Novosibirsk Dam", coords: [54.85, 82.98], details: "0.5 GW, Ob Sea reservoir" }
        ],
        
        flightLandmarks: [
            { progress: 0, name: "Altai Mountains", icon: "🏔️", description: "Biya-Katun confluence" },
            { progress: 0.15, name: "Barnaul", icon: "🏙️", description: "Altai regional capital" },
            { progress: 0.30, name: "Novosibirsk", icon: "🏛️", description: "Siberia's largest city" },
            { progress: 0.45, name: "Ob Sea", icon: "🌊", description: "Giant reservoir" },
            { progress: 0.55, name: "Irtysh Confluence", icon: "🔀", description: "Major tributary joins" },
            { progress: 0.70, name: "Surgut", icon: "🛢️", description: "Oil capital of Siberia" },
            { progress: 0.85, name: "Arctic Circle", icon: "❄️", description: "Entering polar region" },
            { progress: 1.0, name: "Gulf of Ob", icon: "🌊", description: "Kara Sea" }
        ],
        
        economicImportance: [
            "Major oil and gas production region",
            "Navigation route for Western Siberia",
            "Timber industry and logging",
            "Hydroelectric power (Novosibirsk Dam)",
            "Fishing industry",
            "Trans-Siberian Railway connection"
        ],
        
        environmentalIssues: [
            "Oil pollution from extraction",
            "Industrial waste contamination",
            "Climate change affecting permafrost",
            "Flooding in lower reaches",
            "Nuclear contamination from testing",
            "Wetland ecosystem degradation"
        ],
        
        waterDisputes: [
            {
                title: "Irtysh Water Sharing",
                description: "Kazakhstan, Russia, and China share the Irtysh waters, with upstream China increasing water use."
            }
        ],
        
        historicalImportance: [
            {
                title: "Siberian Conquest",
                description: "Russian expansion into Siberia in the 16th-17th centuries used the Ob as a major route."
            },
            {
                title: "Khanate of Sibir",
                description: "The Ob basin was home to the Khanate of Sibir before Russian conquest."
            }
        ]
    },
    
    // ========================================
    // 8. PARANÁ RIVER
    // ========================================
    {
        id: "parana",
        name: "Paraná River",
        length: 4880,
        continent: "south-america",
        image: "https://images.unsplash.com/photo-1597466765990-64ad1c35dafc?w=800",
        
        countries: [
            { name: "Brazil", flag: "🇧🇷" },
            { name: "Paraguay", flag: "🇵🇾" },
            { name: "Argentina", flag: "🇦🇷" }
        ],
        
        states: [
            "Paraná", "Santa Catarina", "Rio Grande do Sul",
            "Misiones", "Corrientes", "Entre Ríos", "Santa Fe", "Buenos Aires"
        ],
        
        source: {
            location: "Confluence of Paranaíba and Grande Rivers, Brazil",
            type: "River confluence",
            elevation: "530 m",
            coordinates: [-20.0833, -51.0333]
        },
        
        mouth: {
            location: "Río de la Plata, Argentina",
            type: "Estuary",
            delta: "Paraná Delta",
            coordinates: [-34.0000, -58.5000]
        },
        
        tributaries: {
            leftBank: [
                "Tietê River",
                "Paranapanema River",
                "Iguazu River"
            ],
            rightBank: [
                "Paraguay River",
                "Salado River",
                "Carcarañá River"
            ]
        },
        
        distributaries: [
            "Paraná Guazú",
            "Paraná de las Palmas",
            "Paraná Pavón"
        ],
        
        majorCities: [
            "Buenos Aires", "Rosario", "Santa Fe", "Corrientes",
            "Posadas", "Asunción", "Foz do Iguaçu"
        ],
        
        dams: [
            { name: "Itaipu Dam", details: "Brazil/Paraguay border, 14 GW - second largest in world" },
            { name: "Yacyretá Dam", details: "Argentina/Paraguay, 3.2 GW" },
            { name: "Ilha Solteira Dam", details: "Brazil, 3.4 GW" },
            { name: "Jupiá Dam", details: "Brazil, 1.5 GW" }
        ],
        
        basinArea: "2,582,672 km²",
        discharge: "17,290 m³/s",
        
        riverPath: [
            [-20.08, -51.03],   // Source
            [-21.00, -51.50],
            [-22.50, -53.00],
            [-24.05, -54.30],   // Foz do Iguaçu area
            [-25.50, -54.60],   // Itaipu Dam
            [-27.30, -55.90],   // Posadas
            [-27.50, -58.80],   // Corrientes
            [-29.00, -59.50],
            [-31.63, -60.70],   // Santa Fe
            [-32.95, -60.65],   // Rosario
            [-34.00, -58.50]    // Río de la Plata
        ],
        
        tributaryPaths: [
            {
                name: "Iguazu River",
                path: [
                    [-25.50, -49.00],
                    [-25.60, -52.00],
                    [-25.60, -54.60]   // Confluence (Iguazu Falls nearby)
                ]
            },
            {
                name: "Paraguay River",
                path: [
                    [-16.00, -57.60],  // Pantanal
                    [-20.50, -57.90],
                    [-25.30, -57.65],  // Asunción
                    [-27.30, -58.60]   // Confluence
                ]
            }
        ],
        
        distributaryPaths: [
            {
                name: "Paraná de las Palmas",
                path: [
                    [-33.50, -59.50],
                    [-34.00, -58.80],
                    [-34.50, -58.50]
                ]
            }
        ],
        
        cityCoordinates: [
            { name: "Buenos Aires", coords: [-34.60, -58.38] },
            { name: "Rosario", coords: [-32.95, -60.65] },
            { name: "Asunción", coords: [-25.30, -57.65] },
            { name: "Corrientes", coords: [-27.47, -58.83] },
            { name: "Foz do Iguaçu", coords: [-25.55, -54.59] }
        ],
        
        damCoordinates: [
            { name: "Itaipu Dam", coords: [-25.41, -54.59], details: "14 GW - World's second largest" },
            { name: "Yacyretá Dam", coords: [-27.48, -56.73], details: "3.2 GW capacity" }
        ],
        
        flightLandmarks: [
            { progress: 0, name: "Brazilian Highlands", icon: "🏔️", description: "Source region" },
            { progress: 0.20, name: "Iguazu Falls", icon: "💧", description: "World's largest waterfall system" },
            { progress: 0.30, name: "Itaipu Dam", icon: "🏗️", description: "World's second largest dam" },
            { progress: 0.45, name: "Paraguay Confluence", icon: "🔀", description: "Major tributary joins" },
            { progress: 0.60, name: "Corrientes", icon: "🏙️", description: "Historic Argentine city" },
            { progress: 0.75, name: "Santa Fe", icon: "🏛️", description: "Grain export hub" },
            { progress: 0.85, name: "Rosario", icon: "⚽", description: "Birthplace of Che & Messi" },
            { progress: 1.0, name: "Río de la Plata", icon: "🌊", description: "World's widest river" }
        ],
        
        economicImportance: [
            "Itaipu provides 15% of Brazil's electricity",
            "Major grain export route (soybeans, corn)",
            "Commercial navigation corridor",
            "Fishing industry",
            "Tourism (Iguazu Falls)",
            "Agricultural irrigation"
        ],
        
        environmentalIssues: [
            "Agricultural runoff pollution",
            "Dam impacts on fish migration",
            "Deforestation in basin",
            "Invasive species",
            "Industrial pollution",
            "Wetland loss"
        ],
        
        waterDisputes: [
            {
                title: "Itaipu Treaty",
                description: "1973 treaty between Brazil and Paraguay governing the Itaipu Dam, with ongoing revenue-sharing discussions."
            }
        ],
        
        historicalImportance: [
            {
                title: "Jesuit Missions",
                description: "The Paraná region was home to Jesuit missions (Reductions) in the 17th-18th centuries, protecting indigenous Guaraní people."
            },
            {
                title: "War of the Triple Alliance",
                description: "The bloodiest war in South American history (1864-1870) was fought largely in the Paraná basin."
            }
        ]
    },
    
    // ========================================
    // 9. CONGO RIVER
    // ========================================
    {
        id: "congo",
        name: "Congo River",
        length: 4700,
        continent: "africa",
        image: "https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=800",
        
        countries: [
            { name: "DR Congo", flag: "🇨🇩" },
            { name: "Central African Republic", flag: "🇨🇫" },
            { name: "Angola", flag: "🇦🇴" },
            { name: "Republic of Congo", flag: "🇨🇬" },
            { name: "Tanzania", flag: "🇹🇿" },
            { name: "Cameroon", flag: "🇨🇲" },
            { name: "Zambia", flag: "🇿🇲" },
            { name: "Burundi", flag: "🇧🇮" },
            { name: "Rwanda", flag: "🇷🇼" }
        ],
        
        states: [
            "Katanga", "Maniema", "Orientale", "Équateur",
            "Bandundu", "Bas-Congo", "Kinshasa"
        ],
        
        source: {
            location: "Chambeshi River, Zambia",
            type: "River/Wetlands",
            elevation: "1,760 m",
            coordinates: [-11.0167, 29.7000]
        },
        
        mouth: {
            location: "Atlantic Ocean, Angola/DRC border",
            type: "Estuary",
            delta: "Congo Canyon (submarine)",
            coordinates: [-6.0667, 12.4000]
        },
        
        tributaries: {
            leftBank: [
                "Kasai River",
                "Kwango River",
                "Fimi River"
            ],
            rightBank: [
                "Ubangi River",
                "Sangha River",
                "Aruwimi River",
                "Lomami River"
            ]
        },
        
        distributaries: [],
        
        majorCities: [
            "Kinshasa", "Brazzaville", "Kisangani", "Mbandaka",
            "Matadi", "Boma", "Bangui"
        ],
        
        dams: [
            { name: "Inga I Dam", details: "DRC, 0.4 GW" },
            { name: "Inga II Dam", details: "DRC, 1.4 GW" },
            { name: "Grand Inga (proposed)", details: "Would be world's largest at 40+ GW" }
        ],
        
        basinArea: "4,014,500 km²",
        discharge: "41,000 m³/s",
        
        riverPath: [
            [-11.02, 29.70],   // Source (Chambeshi)
            [-8.50, 28.00],
            [-5.00, 26.50],
            [-2.00, 25.50],
            [0.52, 25.20],     // Kisangani
            [0.00, 23.00],
            [0.00, 20.00],
            [0.06, 18.26],     // Mbandaka
            [-2.00, 17.00],
            [-4.32, 15.31],    // Kinshasa/Brazzaville
            [-5.80, 13.40],    // Matadi
            [-6.07, 12.40]     // Atlantic Ocean
        ],
        
        tributaryPaths: [
            {
                name: "Kasai River",
                path: [
                    [-10.00, 22.00],
                    [-6.00, 20.00],
                    [-4.00, 17.00],
                    [-3.20, 16.50]     // Confluence
                ]
            },
            {
                name: "Ubangi River",
                path: [
                    [4.37, 18.55],     // Bangui
                    [3.00, 19.00],
                    [1.00, 18.00],
                    [0.50, 17.80]      // Confluence
                ]
            }
        ],
        
        distributaryPaths: [],
        
        cityCoordinates: [
            { name: "Kinshasa", coords: [-4.32, 15.31] },
            { name: "Brazzaville", coords: [-4.27, 15.27] },
            { name: "Kisangani", coords: [0.52, 25.20] },
            { name: "Mbandaka", coords: [0.06, 18.26] },
            { name: "Matadi", coords: [-5.80, 13.45] }
        ],
        
        damCoordinates: [
            { name: "Inga Dams", coords: [-5.52, 13.62], details: "Potential for 40+ GW with Grand Inga" }
        ],
        
        flightLandmarks: [
            { progress: 0, name: "Chambeshi Source", icon: "🏔️", description: "Zambian highlands" },
            { progress: 0.20, name: "Lake Tanganyika Region", icon: "🌊", description: "Near Africa's deepest lake" },
            { progress: 0.40, name: "Boyoma Falls", icon: "💧", description: "Series of seven cataracts" },
            { progress: 0.50, name: "Kisangani", icon: "🏙️", description: "Major inland port" },
            { progress: 0.65, name: "Congo Rainforest", icon: "🌳", description: "World's second largest rainforest" },
            { progress: 0.80, name: "Kinshasa-Brazzaville", icon: "🏛️", description: "Twin capital cities" },
            { progress: 0.90, name: "Livingstone Falls", icon: "💧", description: "Series of 32 rapids" },
            { progress: 1.0, name: "Atlantic Ocean", icon: "🌊", description: "Congo submarine canyon" }
        ],
        
        economicImportance: [
            "Enormous hydroelectric potential (Grand Inga)",
            "Major transportation route in central Africa",
            "Fishing supporting millions",
            "Timber industry",
            "Diamond and mineral mining",
            "Second largest rainforest carbon sink"
        ],
        
        environmentalIssues: [
            "Deforestation of Congo rainforest",
            "Bushmeat hunting depleting wildlife",
            "Mining pollution",
            "Civil conflict affecting conservation",
            "Climate change impacts",
            "Illegal logging"
        ],
        
        waterDisputes: [],
        
        historicalImportance: [
            {
                title: "Kingdom of Kongo",
                description: "The powerful Kingdom of Kongo (1390-1914) controlled the lower Congo region and engaged in early contact with Portugal."
            },
            {
                title: "Stanley's Expedition",
                description: "Henry Morton Stanley explored the Congo 1874-1877, tracing its course for the first time."
            },
            {
                title: "Heart of Darkness",
                description: "Joseph Conrad's famous novella was inspired by the brutal Belgian colonial exploitation of the Congo basin."
            }
        ]
    },
    
    // ========================================
    // 10. AMUR RIVER
    // ========================================
    {
        id: "amur",
        name: "Amur River",
        length: 4444,
        continent: "asia",
        image: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=800",
        
        countries: [
            { name: "Russia", flag: "🇷🇺" },
            { name: "China", flag: "🇨🇳" },
            { name: "Mongolia", flag: "🇲🇳" }
        ],
        
        states: [
            "Zabaykalsky Krai", "Amur Oblast", "Jewish Autonomous Oblast",
            "Khabarovsk Krai", "Heilongjiang", "Inner Mongolia"
        ],
        
        source: {
            location: "Confluence of Shilka and Argun Rivers",
            type: "River confluence",
            elevation: "303 m",
            coordinates: [53.3333, 121.5000]
        },
        
        mouth: {
            location: "Sea of Okhotsk, Pacific Ocean",
            type: "Estuary",
            delta: "Amur Liman",
            coordinates: [52.9000, 141.1000]
        },
        
        tributaries: {
            leftBank: [
                "Zeya River",
                "Bureya River",
                "Amgun River"
            ],
            rightBank: [
                "Songhua River (Sungari)",
                "Ussuri River",
                "Huma River"
            ]
        },
        
        distributaries: [],
        
        majorCities: [
            "Khabarovsk", "Blagoveshchensk", "Harbin", "Jiamusi",
            "Komsomolsk-on-Amur", "Heihe", "Tongjiang"
        ],
        
        dams: [
            { name: "Zeya Dam", details: "Zeya River, Russia, 1.3 GW" },
            { name: "Bureya Dam", details: "Bureya River, Russia, 2 GW" },
            { name: "Fengman Dam", details: "Songhua River, China" }
        ],
        
        basinArea: "1,855,000 km²",
        discharge: "10,900 m³/s",
        
        riverPath: [
            [53.33, 121.50],   // Source
            [53.00, 124.00],
            [51.00, 127.00],
            [50.25, 127.54],   // Blagoveshchensk
            [49.00, 130.00],
            [48.50, 134.90],   // Khabarovsk
            [50.00, 137.00],
            [51.00, 139.00],
            [52.90, 141.10]    // Sea of Okhotsk
        ],
        
        tributaryPaths: [
            {
                name: "Songhua River",
                path: [
                    [42.50, 128.00],   // Changbai Mountains
                    [44.00, 126.00],
                    [45.75, 126.65],   // Harbin
                    [47.00, 130.00],
                    [48.00, 133.00]    // Confluence
                ]
            },
            {
                name: "Ussuri River",
                path: [
                    [44.00, 133.00],
                    [46.00, 135.00],
                    [48.30, 134.85]    // Confluence near Khabarovsk
                ]
            },
            {
                name: "Zeya River",
                path: [
                    [55.00, 130.00],
                    [53.00, 128.00],
                    [50.30, 127.50]    // Confluence at Blagoveshchensk
                ]
            }
        ],
        
        distributaryPaths: [],
        
        cityCoordinates: [
            { name: "Khabarovsk", coords: [48.48, 135.08] },
            { name: "Blagoveshchensk", coords: [50.25, 127.54] },
            { name: "Harbin", coords: [45.75, 126.65] },
            { name: "Heihe", coords: [50.24, 127.53] },
            { name: "Komsomolsk-on-Amur", coords: [50.55, 137.00] }
        ],
        
        damCoordinates: [
            { name: "Zeya Dam", coords: [53.82, 127.30], details: "1.3 GW capacity" },
            { name: "Bureya Dam", coords: [49.90, 130.35], details: "2 GW capacity" }
        ],
        
        flightLandmarks: [
            { progress: 0, name: "Shilka-Argun Confluence", icon: "🔀", description: "Amur begins here" },
            { progress: 0.20, name: "Blagoveshchensk-Heihe", icon: "🏙️", description: "Twin border cities" },
            { progress: 0.35, name: "Songhua Confluence", icon: "🌊", description: "Major Chinese tributary" },
            { progress: 0.50, name: "Khabarovsk", icon: "🏛️", description: "Russian Far East capital" },
            { progress: 0.65, name: "Ussuri Confluence", icon: "🔀", description: "Border river joins" },
            { progress: 0.80, name: "Komsomolsk-on-Amur", icon: "🏭", description: "Industrial city" },
            { progress: 1.0, name: "Sea of Okhotsk", icon: "🌊", description: "Pacific Ocean" }
        ],
        
        economicImportance: [
            "Important Russia-China border river",
            "Fishing (salmon, sturgeon)",
            "Hydroelectric power",
            "Navigation and trade route",
            "Agriculture in river valleys",
            "Timber industry"
        ],
        
        environmentalIssues: [
            "Industrial pollution from Chinese factories",
            "Chemical spills (2005 Harbin benzene spill)",
            "Overfishing of sturgeon",
            "Dam impacts on fish migration",
            "Climate change affecting ice patterns",
            "Flooding events"
        ],
        
        waterDisputes: [
            {
                title: "Sino-Russian Border",
                description: "Historical border disputes over Amur islands resolved in 2004-2008 agreements."
            }
        ],
        
        historicalImportance: [
            {
                title: "Treaty of Nerchinsk (1689)",
                description: "First treaty between Russia and China, establishing the Amur region boundary."
            },
            {
                title: "Cossack Exploration",
                description: "Russian Cossacks first reached the Amur in the 17th century, leading to conflict with Qing China."
            },
            {
                title: "Treaty of Aigun (1858)",
                description: "Unequal treaty that gave Russia control of the north bank of the Amur."
            }
        ]
    }
];
