// ============================================================
// GEOTOPIA - RIVERS DATA 10 (FINAL)
// Rivers 91-100
// ============================================================

const RIVERS_DATA_10 = [

    // ========================================
    // 91. SEPIK RIVER
    // ========================================
    {
        id: "sepik",
        name: "Sepik River",
        length: 1126,
        continent: "oceania",
        image: "https://images.unsplash.com/photo-1541796767554-62f0e5c0b8bc?w=800",
        
        countries: [
            { name: "Papua New Guinea", flag: "🇵🇬" },
            { name: "Indonesia", flag: "🇮🇩" }
        ],
        
        states: [
            "Sandaun Province", "East Sepik Province", "Papua Province (Indonesia)"
        ],
        
        source: {
            location: "Victor Emanuel Range, Sandaun Province, PNG",
            type: "Mountain streams",
            elevation: "2,000 m",
            coordinates: [-4.1667, 141.5000]
        },
        
        mouth: {
            location: "Bismarck Sea, Pacific Ocean",
            type: "Delta",
            delta: "Sepik Delta - extensive mangrove wetland",
            coordinates: [-3.9167, 144.7500]
        },
        
        tributaries: {
            leftBank: [
                "April River",
                "May River",
                "Yuat River",
                "Korosameri River"
            ],
            rightBank: [
                "Frieda River",
                "Green River",
                "Karawari River",
                "Keram River"
            ]
        },
        
        distributaries: [
            "Sepik Delta channels",
            "Murik Lakes system"
        ],
        
        majorCities: [
            "Telefomin", "Ambunti", "Pagwi", "Angoram", "Marienberg", "Wewak"
        ],
        
        dams: [
            { name: "No dams", details: "Completely free-flowing, one of last pristine large rivers" }
        ],
        
        basinArea: "77,700 km²",
        discharge: "5,500 m³/s",
        
        riverPath: [
            [-4.17, 141.50],   // Source - Victor Emanuel Range
            [-4.00, 141.80],
            [-3.80, 142.00],
            [-3.60, 142.50],   // Ambunti area
            [-3.75, 143.00],
            [-3.90, 143.50],
            [-4.00, 143.80],   // Pagwi
            [-4.05, 144.00],
            [-4.10, 144.30],   // Angoram
            [-4.00, 144.50],
            [-3.92, 144.75]    // Bismarck Sea (Mouth)
        ],
        
        tributaryPaths: [
            {
                name: "May River",
                path: [
                    [-4.50, 142.00],
                    [-4.00, 142.30],
                    [-3.70, 142.50]    // Confluence
                ]
            },
            {
                name: "Karawari River",
                path: [
                    [-4.80, 143.50],
                    [-4.40, 143.80],
                    [-4.10, 144.00]    // Confluence
                ]
            },
            {
                name: "Yuat River",
                path: [
                    [-4.50, 143.00],
                    [-4.20, 143.40],
                    [-4.00, 143.70]    // Confluence
                ]
            }
        ],
        
        distributaryPaths: [
            {
                name: "Sepik Delta",
                path: [
                    [-3.95, 144.60],
                    [-3.92, 144.75]    // Bismarck Sea
                ]
            }
        ],
        
        cityCoordinates: [
            { name: "Ambunti", coords: [-3.61, 142.82] },
            { name: "Pagwi", coords: [-3.99, 143.78] },
            { name: "Angoram", coords: [-4.06, 144.07] },
            { name: "Marienberg", coords: [-4.15, 144.32] },
            { name: "Wewak", coords: [-3.55, 143.63] }
        ],
        
        damCoordinates: [
            { name: "No Dams", coords: [-3.80, 143.00], details: "Pristine free-flowing river" }
        ],
        
        flightLandmarks: [
            { progress: 0, name: "Victor Emanuel Range", icon: "🏔️", description: "Remote mountain source" },
            { progress: 0.15, name: "PNG Highlands", icon: "🌳", description: "Dense rainforest" },
            { progress: 0.30, name: "Ambunti", icon: "🏘️", description: "River trading post" },
            { progress: 0.45, name: "Middle Sepik", icon: "🌳", description: "Cultural heartland" },
            { progress: 0.60, name: "Pagwi", icon: "🏘️", description: "River village" },
            { progress: 0.70, name: "Angoram", icon: "🏘️", description: "District capital" },
            { progress: 0.85, name: "Lower Sepik", icon: "🌿", description: "Vast floodplain" },
            { progress: 0.95, name: "Sepik Delta", icon: "🌿", description: "Mangrove wetland" },
            { progress: 1.0, name: "Bismarck Sea", icon: "🌊", description: "Pacific Ocean" }
        ],
        
        economicImportance: [
            "Primary transportation corridor in region",
            "Subsistence fishing and sago cultivation",
            "Traditional art and carving trade",
            "Tourism (cultural and adventure)",
            "Limited commercial agriculture",
            "No industrial development"
        ],
        
        environmentalIssues: [
            "Proposed Frieda River mine threatens pristine ecosystem",
            "Climate change flooding risks",
            "Invasive species concerns",
            "Limited pollution (largely pristine)",
            "Deforestation threats",
            "One of world's last free-flowing large rivers"
        ],
        
        waterDisputes: [
            {
                title: "Frieda River Mine Proposal",
                description: "Controversial copper-gold mine proposal threatens to pollute the Sepik, similar to Ok Tedi disaster."
            },
            {
                title: "PNG-Indonesia Border",
                description: "The Sepik headwaters are near the contested PNG-Indonesia border region."
            }
        ],
        
        historicalImportance: [
            {
                title: "Sepik Art Traditions",
                description: "The Sepik is renowned for traditional wood carving, pottery, and art, sold worldwide."
            },
            {
                title: "Cultural Diversity",
                description: "Over 100 distinct languages spoken in the Sepik basin, one of world's most diverse regions."
            },
            {
                title: "WWII Pacific Theater",
                description: "The Sepik region saw fighting between Japanese and Allied forces during WWII."
            },
            {
                title: "Haus Tambaran",
                description: "Traditional spirit houses (haus tambaran) line the Sepik, central to ceremonial life."
            }
        ]
    },

    // ========================================
    // 92. TANA RIVER
    // ========================================
    {
        id: "tana",
        name: "Tana River",
        length: 1014,
        continent: "africa",
        image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800",
        
        countries: [
            { name: "Kenya", flag: "🇰🇪" }
        ],
        
        states: [
            "Nyeri County", "Embu County", "Tharaka-Nithi County",
            "Kitui County", "Tana River County", "Lamu County"
        ],
        
        source: {
            location: "Aberdare Range, Central Highlands, Kenya",
            type: "Mountain streams",
            elevation: "3,600 m",
            coordinates: [-0.4667, 36.7500]
        },
        
        mouth: {
            location: "Indian Ocean, near Kipini",
            type: "Delta",
            delta: "Tana River Delta - important wetland ecosystem",
            coordinates: [-2.4500, 40.5167]
        },
        
        tributaries: {
            leftBank: [
                "Thika River",
                "Sagana River",
                "Rupingazi River",
                "Mutonga River"
            ],
            rightBank: [
                "Thiba River",
                "Nyamindi River",
                "Thua River"
            ]
        ],
        
        distributaries: [
            "Tana Delta channels",
            "Belazoni Creek"
        ],
        
        majorCities: [
            "Nyeri", "Embu", "Meru", "Garissa", "Hola", "Kipini"
        ],
        
        dams: [
            { name: "Masinga Dam", details: "Kenya, 40 MW, 1981, largest in Kenya" },
            { name: "Kamburu Dam", details: "Kenya, 94 MW, 1974" },
            { name: "Gitaru Dam", details: "Kenya, 225 MW, 1978" },
            { name: "Kindaruma Dam", details: "Kenya, 72 MW, 1968" },
            { name: "Kiambere Dam", details: "Kenya, 144 MW, 1988" }
        ],
        
        basinArea: "126,000 km²",
        discharge: "120 m³/s",
        
        riverPath: [
            [-0.47, 36.75],    // Source - Aberdare Range
            [-0.50, 37.00],
            [-0.52, 37.20],    // Sagana
            [-0.60, 37.30],    // Masinga Dam
            [-0.80, 37.50],    // Kamburu Dam
            [-1.20, 37.80],
            [-1.50, 38.50],
            [-1.80, 39.00],
            [-2.00, 39.50],
            [-2.28, 40.11],    // Garissa
            [-2.35, 40.35],
            [-2.45, 40.52]     // Indian Ocean (Mouth)
        ],
        
        tributaryPaths: [
            {
                name: "Thika River",
                path: [
                    [-1.05, 36.95],
                    [-0.80, 37.20],
                    [-0.60, 37.30]     // Confluence
                ]
            },
            {
                name: "Sagana River",
                path: [
                    [-0.70, 37.00],
                    [-0.60, 37.15],
                    [-0.52, 37.20]     // Confluence
                ]
            }
        ],
        
        distributaryPaths: [
            {
                name: "Tana Delta",
                path: [
                    [-2.40, 40.45],
                    [-2.45, 40.52]     // Indian Ocean
                ]
            }
        ],
        
        cityCoordinates: [
            { name: "Nyeri", coords: [-0.42, 36.95] },
            { name: "Embu", coords: [-0.53, 37.45] },
            { name: "Meru", coords: [0.05, 37.65] },
            { name: "Garissa", coords: [-0.45, 39.64] },
            { name: "Hola", coords: [-1.49, 40.04] },
            { name: "Kipini", coords: [-2.52, 40.53] }
        ],
        
        damCoordinates: [
            { name: "Masinga Dam", coords: [-0.89, 37.58], details: "40 MW - Kenya's largest reservoir" },
            { name: "Kamburu Dam", coords: [-0.82, 37.64], details: "94 MW hydroelectric" },
            { name: "Gitaru Dam", coords: [-0.78, 37.49], details: "225 MW - most powerful" },
            { name: "Kindaruma Dam", coords: [-0.73, 37.47], details: "72 MW" },
            { name: "Kiambere Dam", coords: [-0.62, 37.93], details: "144 MW" }
        ],
        
        flightLandmarks: [
            { progress: 0, name: "Aberdare Range", icon: "🏔️", description: "High mountain source" },
            { progress: 0.10, name: "Central Highlands", icon: "🌳", description: "Tea and coffee country" },
            { progress: 0.20, name: "Masinga Reservoir", icon: "🏞️", description: "Kenya's largest dam" },
            { progress: 0.30, name: "Tana Cascade", icon: "🏗️", description: "Five hydroelectric dams" },
            { progress: 0.45, name: "Meru National Park", icon: "🦁", description: "Wildlife area" },
            { progress: 0.60, name: "Arid Lowlands", icon: "🏜️", description: "Semi-desert region" },
            { progress: 0.75, name: "Garissa", icon: "🏙️", description: "Regional capital" },
            { progress: 0.85, name: "Lower Tana", icon: "🌾", description: "Irrigation agriculture" },
            { progress: 0.95, name: "Tana Delta", icon: "🌿", description: "Important wetland" },
            { progress: 1.0, name: "Indian Ocean", icon: "🌊", description: "Kipini mouth" }
        ],
        
        economicImportance: [
            "Kenya's longest river",
            "Primary hydroelectric power source (35% of Kenya's electricity)",
            "Irrigation for agriculture",
            "Nairobi and Mombasa water supply",
            "Fishing in delta",
            "Tourism (Meru National Park)"
        ],
        
        environmentalIssues: [
            "Over-abstraction for agriculture",
            "Dam cascade impacts on downstream flow",
            "Tana Delta wetland degradation",
            "Deforestation in upper catchment",
            "Soil erosion and sedimentation",
            "Climate change reducing flow"
        ],
        
        waterDisputes: [
            {
                title: "Tana Delta Irrigation Projects",
                description: "Large-scale irrigation and biofuel projects threaten indigenous Pokomo and Orma pastoralist communities."
            },
            {
                title: "Hydroelectric vs. Downstream Needs",
                description: "Dams reduce flow to lower Tana, affecting delta ecosystem and livelihoods."
            }
        ],
        
        historicalImportance: [
            {
                title: "Born Free",
                description: "Joy Adamson's famous lioness Elsa was released in Meru National Park along the Tana River."
            },
            {
                title: "Pokomo and Orma Peoples",
                description: "The Tana has been home to Pokomo farmers and Orma pastoralists for centuries."
            },
            {
                title: "Seven Forks Scheme",
                description: "Kenya's ambitious 1960s-80s hydroelectric project created five dams on the Tana."
            },
            {
                title: "Shifta War",
                description: "The Tana region was theater of the 1963-67 Shifta War between Kenya and Somali secessionists."
            }
        ]
    },

    // ========================================
    // 93. LOIRE RIVER
    // ========================================
    {
        id: "loire",
        name: "Loire River",
        length: 1012,
        continent: "europe",
        image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800",
        
        countries: [
            { name: "France", flag: "🇫🇷" }
        ],
        
        states: [
            "Ardèche", "Haute-Loire", "Loire", "Saône-et-Loire",
            "Nièvre", "Cher", "Loiret", "Loir-et-Cher",
            "Indre-et-Loire", "Maine-et-Loire", "Loire-Atlantique"
        ],
        
        source: {
            location: "Mont Gerbier de Jonc, Massif Central",
            type: "Spring",
            elevation: "1,408 m",
            coordinates: [44.8417, 4.2194]
        },
        
        mouth: {
            location: "Atlantic Ocean, at Saint-Nazaire",
            type: "Estuary",
            delta: "Loire Estuary - wide tidal estuary",
            coordinates: [47.2833, -2.2167]
        ],
        
        tributaries: {
            leftBank: [
                "Allier River",
                "Cher River",
                "Indre River",
                "Vienne River",
                "Sèvre Nantaise"
            ],
            rightBank: [
                "Arroux River",
                "Loire River",
                "Loiret River",
                "Mayenne River",
                "Erdre River"
            ]
        ],
        
        distributaries: [
            "Loire Estuary channels"
        ],
        
        majorCities: [
            "Le Puy-en-Velay", "Roanne", "Nevers", "Orléans",
            "Blois", "Tours", "Angers", "Nantes", "Saint-Nazaire"
        ],
        
        dams: [
            { name: "Villerest Dam", details: "France, flood control, 1984" },
            { name: "Naussac Dam", details: "France, on Allier tributary, 1983" },
            { name: "Grangent Dam", details: "France, 39 MW, 1957" }
        ],
        
        basinArea: "117,000 km²",
        discharge: "931 m³/s",
        
        riverPath: [
            [44.84, 4.22],     // Source - Mont Gerbier de Jonc
            [45.04, 4.07],     // Le Puy-en-Velay
            [45.50, 4.00],
            [46.04, 4.07],     // Roanne
            [46.50, 3.80],
            [46.99, 3.16],     // Nevers
            [47.25, 2.50],
            [47.90, 1.90],     // Orléans
            [47.59, 1.33],     // Blois
            [47.39, 0.69],     // Tours
            [47.47, -0.55],    // Angers
            [47.22, -1.55],    // Nantes
            [47.28, -2.22]     // Atlantic Ocean (Mouth)
        ],
        
        tributaryPaths: [
            {
                name: "Allier River",
                path: [
                    [44.80, 3.50],     // Massif Central
                    [46.20, 3.40],
                    [46.99, 3.16]      // Confluence at Nevers
                ]
            },
            {
                name: "Cher River",
                path: [
                    [46.00, 2.50],
                    [47.00, 1.80],
                    [47.39, 0.45]      // Confluence at Tours
                ]
            },
            {
                name: "Vienne River",
                path: [
                    [45.80, 1.20],
                    [47.00, 0.30],
                    [47.21, 0.07]      // Confluence
                ]
            },
            {
                name: "Maine River",
                path: [
                    [47.60, -0.80],
                    [47.50, -0.60],
                    [47.47, -0.55]     // Confluence at Angers
                ]
            }
        ],
        
        distributaryPaths: [
            {
                name: "Loire Estuary",
                path: [
                    [47.25, -1.80],
                    [47.28, -2.22]     // Atlantic Ocean
                ]
            }
        ],
        
        cityCoordinates: [
            { name: "Le Puy-en-Velay", coords: [45.04, 3.88] },
            { name: "Roanne", coords: [46.04, 4.07] },
            { name: "Nevers", coords: [46.99, 3.16] },
            { name: "Orléans", coords: [47.90, 1.90] },
            { name: "Blois", coords: [47.59, 1.33] },
            { name: "Tours", coords: [47.39, 0.69] },
            { name: "Angers", coords: [47.47, -0.55] },
            { name: "Nantes", coords: [47.22, -1.55] },
            { name: "Saint-Nazaire", coords: [47.27, -2.21] }
        ],
        
        damCoordinates: [
            { name: "Villerest Dam", coords: [45.99, 4.04], details: "Flood control dam" },
            { name: "Grangent Dam", coords: [45.43, 4.22], details: "39 MW hydroelectric" }
        ],
        
        flightLandmarks: [
            { progress: 0, name: "Mont Gerbier de Jonc", icon: "🏔️", description: "Volcanic source" },
            { progress: 0.05, name: "Le Puy-en-Velay", icon: "⛪", description: "Pilgrimage city" },
            { progress: 0.15, name: "Gorges de la Loire", icon: "🏞️", description: "Scenic gorges" },
            { progress: 0.25, name: "Roanne", icon: "🏙️", description: "Industrial city" },
            { progress: 0.35, name: "Nevers", icon: "🏛️", description: "Historic city" },
            { progress: 0.50, name: "Orléans", icon: "🏰", description: "Joan of Arc city" },
            { progress: 0.60, name: "Blois", icon: "🏰", description: "Renaissance château" },
            { progress: 0.70, name: "Tours", icon: "🏰", description: "Loire Valley châteaux" },
            { progress: 0.82, name: "Angers", icon: "🏰", description: "Medieval fortress" },
            { progress: 0.92, name: "Nantes", icon: "🏙️", description: "Historic port" },
            { progress: 1.0, name: "Atlantic Ocean", icon: "🌊", description: "Saint-Nazaire estuary" }
        ],
        
        economicImportance: [
            "France's longest river",
            "Loire Valley wine production",
            "Tourism (châteaux and UNESCO World Heritage)",
            "Agriculture in valley",
            "Limited navigation (historically important)",
            "Nuclear power plant cooling"
        ],
        
        environmentalIssues: [
            "Last wild river in France (largely free-flowing)",
            "Summer low flows and droughts",
            "Invasive plant species",
            "Climate change impacts",
            "Nuclear power plant water use",
            "Protected as UNESCO World Heritage Site"
        ],
        
        waterDisputes: [
            {
                title: "Dam Removal Movement",
                description: "France has removed several Loire dams to restore free-flowing conditions and fish migration."
            },
            {
                title: "Nuclear Power Water Use",
                description: "Four nuclear plants on the Loire face cooling challenges during droughts."
            }
        ],
        
        historicalImportance: [
            {
                title: "Loire Valley Châteaux",
                description: "The Loire Valley is famed for Renaissance châteaux like Chambord, Chenonceau, and Amboise - UNESCO World Heritage."
            },
            {
                title: "Joan of Arc",
                description: "Joan of Arc lifted the Siege of Orléans in 1429, turning point of Hundred Years' War."
            },
            {
                title: "Royal Residence",
                description: "French kings resided in Loire châteaux during the Renaissance, making it the 'Garden of France.'"
            },
            {
                title: "Leonardo da Vinci",
                description: "Leonardo spent his final years at Château du Clos Lucé in Amboise on the Loire."
            }
        ]
    },

    // ========================================
    // 94. TAGUS RIVER (TAJO/TEJO)
    // ========================================
    {
        id: "tagus",
        name: "Tagus River",
        length: 1007,
        continent: "europe",
        image: "https://images.unsplash.com/photo-1555881603-2700d549d955?w=800",
        
        countries: [
            { name: "Spain", flag: "🇪🇸" },
            { name: "Portugal", flag: "🇵🇹" }
        ],
        
        states: [
            "Aragon", "Castile-La Mancha", "Madrid", "Extremadura",
            "Santarém", "Lisbon"
        ],
        
        source: {
            location: "Fuente de García, Montes Universales, Spain",
            type: "Mountain spring",
            elevation: "1,593 m",
            coordinates: [40.4167, -1.6667]
        },
        
        mouth: {
            location: "Atlantic Ocean, at Lisbon (Mar da Palha)",
            type: "Estuary",
            delta: "Tagus Estuary - major European estuary",
            coordinates: [38.7167, -9.1333]
        },
        
        tributaries: {
            leftBank: [
                "Jarama River",
                "Guadarrama River",
                "Alberche River",
                "Tiétar River"
            ],
            rightBank: [
                "Henares River",
                "Tajuña River",
                "Guadiela River",
                "Almonte River",
                "Salor River",
                "Sever River",
                "Zêzere River",
                "Sorraia River"
            ]
        ],
        
        distributaries: [
            "Tagus Estuary channels"
        ],
        
        majorCities: [
            "Teruel", "Aranjuez", "Toledo", "Talavera de la Reina",
            "Alcántara", "Abrantes", "Santarém", "Lisbon"
        ],
        
        dams: [
            { name: "Alcántara Dam", details: "Spain, 915 MW, 1969" },
            { name: "Torrejón-Tajo Dam", details: "Spain, 1960" },
            { name: "Valdecañas Dam", details: "Spain, 225 MW, 1964" },
            { name: "Cedillo Dam", details: "Spain-Portugal border, 1976" },
            { name: "Belver Dam", details: "Portugal, 112 MW, 1952" }
        ],
        
        basinArea: "80,100 km²",
        discharge: "444 m³/s",
        
        riverPath: [
            [40.42, -1.67],    // Source - Montes Universales
            [40.20, -1.50],
            [40.03, -3.36],    // Aranjuez
            [39.86, -4.03],    // Toledo
            [39.96, -4.83],    // Talavera de la Reina
            [39.72, -5.67],    // Alcántara Dam
            [39.65, -6.50],
            [39.47, -7.44],    // Abrantes
            [39.23, -8.69],    // Santarém
            [38.72, -9.13]     // Atlantic Ocean (Mouth)
        ],
        
        tributaryPaths: [
            {
                name: "Jarama River",
                path: [
                    [41.00, -3.60],    // Madrid area
                    [40.50, -3.50],
                    [40.20, -3.40]     // Confluence at Aranjuez
                ]
            },
            {
                name: "Alberche River",
                path: [
                    [40.50, -4.50],
                    [40.00, -4.70],
                    [39.90, -4.75]     // Confluence
                ]
            },
            {
                name: "Tiétar River",
                path: [
                    [40.20, -5.00],
                    [39.90, -5.30],
                    [39.80, -5.50]     // Confluence
                ]
            },
            {
                name: "Zêzere River",
                path: [
                    [40.00, -7.60],    // Portugal
                    [39.50, -8.00],
                    [39.47, -8.29]     // Confluence
                ]
            }
        ],
        
        distributaryPaths: [
            {
                name: "Tagus Estuary",
                path: [
                    [38.75, -9.10],
                    [38.72, -9.13]     // Atlantic Ocean
                ]
            }
        ],
        
        cityCoordinates: [
            { name: "Aranjuez", coords: [40.03, -3.60] },
            { name: "Toledo", coords: [39.86, -4.03] },
            { name: "Talavera de la Reina", coords: [39.96, -4.83] },
            { name: "Alcántara", coords: [39.72, -6.89] },
            { name: "Abrantes", coords: [39.47, -8.20] },
            { name: "Santarém", coords: [39.24, -8.69] },
            { name: "Lisbon", coords: [38.71, -9.14] }
        ],
        
        damCoordinates: [
            { name: "Alcántara Dam", coords: [39.72, -6.87], details: "915 MW - Spain's largest arch dam" },
            { name: "Valdecañas Dam", coords: [39.78, -5.48], details: "225 MW hydroelectric" },
            { name: "Cedillo Dam", coords: [39.63, -7.51], details: "Spanish-Portuguese border" },
            { name: "Belver Dam", coords: [39.50, -8.15], details: "112 MW - Portugal" }
        ],
        
        flightLandmarks: [
            { progress: 0, name: "Montes Universales", icon: "🏔️", description: "Spanish mountain source" },
            { progress: 0.15, name: "Castilian Plateau", icon: "🌾", description: "Agricultural region" },
            { progress: 0.30, name: "Aranjuez", icon: "🏰", description: "Royal palace" },
            { progress: 0.40, name: "Toledo", icon: "🏛️", description: "Historic capital" },
            { progress: 0.50, name: "Talavera de la Reina", icon: "🏙️", description: "Ceramic city" },
            { progress: 0.65, name: "Alcántara Dam", icon: "🏗️", description: "Massive arch dam" },
            { progress: 0.70, name: "Spain-Portugal Border", icon: "🛂", description: "Enters Portugal" },
            { progress: 0.80, name: "Portuguese Countryside", icon: "🌳", description: "Ribatejo region" },
            { progress: 0.90, name: "Santarém", icon: "🏘️", description: "Gothic city" },
            { progress: 1.0, name: "Lisbon", icon: "🏙️", description: "Portuguese capital" }
        ],
        
        economicImportance: [
            "Longest Iberian Peninsula river",
            "Lisbon's water supply and port",
            "Major hydroelectric power source",
            "Agriculture (especially in Spanish La Mancha)",
            "Tourism (Toledo, Lisbon)",
            "Navigation (Lisbon estuary)"
        ],
        
        environmentalIssues: [
            "Over-extraction for agriculture",
            "Dam cascade impacts",
            "Severe droughts (climate change)",
            "Spain-Portugal water allocation tensions",
            "Pollution from agriculture and industry",
            "Tagus Estuary eutrophication"
        ],
        
        waterDisputes: [
            {
                title: "Tagus-Segura Water Transfer",
                description: "Spain diverts Tagus water to arid southeast, angering Portugal and environmentalists."
            },
            {
                title: "Spain-Portugal Water Treaty",
                description: "1998 Albufeira Convention regulates transboundary flows, but tensions persist during droughts."
            }
        ],
        
        historicalImportance: [
            {
                title: "Toledo",
                description: "Toledo, former Spanish capital, overlooks the Tagus; known as 'City of Three Cultures' (Christian, Muslim, Jewish)."
            },
            {
                title: "Alcántara Bridge",
                description: "Roman bridge at Alcántara (106 AD) is a masterpiece of Roman engineering still standing."
            },
            {
                title: "Lisbon",
                description: "Lisbon's natural harbor on the Tagus estuary was launch point for Portuguese Age of Discovery."
            },
            {
                title: "1755 Lisbon Earthquake",
                description: "Devastating earthquake triggered tsunamis in the Tagus, destroying much of Lisbon."
            }
        ]
    },

    // ========================================
    // 95. EBRO RIVER
    // ========================================
    {
        id: "ebro",
        name: "Ebro River",
        length: 930,
        continent: "europe",
        image: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800",
        
        countries: [
            { name: "Spain", flag: "🇪🇸" }
        ],
        
        states: [
            "Cantabria", "Castile and León", "Basque Country",
            "La Rioja", "Navarre", "Aragon", "Catalonia"
        ],
        
        source: {
            location: "Fontibre, Cantabrian Mountains, Cantabria",
            type: "Spring",
            elevation: "880 m",
            coordinates: [43.0333, -4.2167]
        },
        
        mouth: {
            location: "Mediterranean Sea, Ebro Delta",
            type: "Delta",
            delta: "Ebro Delta - 320 km², important wetland",
            coordinates: [40.7167, 0.8667]
        },
        
        tributaries: {
            leftBank: [
                "Zadorra River",
                "Ega River",
                "Arga River",
                "Aragón River",
                "Gállego River",
                "Cinca River",
                "Segre River"
            ],
            rightBank: [
                "Jalón River",
                "Huerva River",
                "Guadalope River",
                "Matarraña River"
            ]
        ],
        
        distributaries: [
            "Ebro Delta channels"
        ],
        
        majorCities: [
            "Reinosa", "Miranda de Ebro", "Logroño",
            "Tudela", "Zaragoza", "Tortosa"
        ],
        
        dams: [
            { name: "Ebro Reservoir", details: "Spain, largest reservoir in Spain by volume, 1952" },
            { name: "Mequinenza Reservoir", details: "Spain, 324 MW, 1966" },
            { name: "Ribarroja Dam", details: "Spain, 262 MW, 1969" },
            { name: "Flix Dam", details: "Spain, 1948" }
        ],
        
        basinArea: "85,550 km²",
        discharge: "426 m³/s",
        
        riverPath: [
            [43.03, -4.22],    // Source - Fontibre
            [42.80, -3.50],
            [42.68, -2.93],    // Miranda de Ebro
            [42.47, -2.45],    // Logroño
            [41.98, -1.60],    // Tudela
            [41.66, -0.88],    // Zaragoza
            [41.50, 0.00],
            [41.18, 0.52],
            [40.82, 0.72],     // Tortosa
            [40.72, 0.87]      // Mediterranean Sea (Mouth)
        ],
        
        tributaryPaths: [
            {
                name: "Aragón River",
                path: [
                    [42.70, -0.70],    // Pyrenees
                    [42.40, -1.20],
                    [42.10, -1.50]     // Confluence
                ]
            },
            {
                name: "Gállego River",
                path: [
                    [42.60, -0.30],    // Pyrenees
                    [42.00, -0.70],
                    [41.70, -0.80]     // Confluence at Zaragoza
                ]
            },
            {
                name: "Segre River",
                path: [
                    [42.40, 1.70],     // Pyrenees
                    [41.60, 0.60],
                    [41.30, 0.40]      // Confluence
                ]
            },
            {
                name: "Jalón River",
                path: [
                    [41.10, -1.90],
                    [41.50, -1.40],
                    [41.68, -1.10]     // Confluence
                ]
            }
        ],
        
        distributaryPaths: [
            {
                name: "Ebro Delta",
                path: [
                    [40.75, 0.80],
                    [40.72, 0.87]      // Mediterranean
                ]
            }
        ],
        
        cityCoordinates: [
            { name: "Reinosa", coords: [43.00, -4.14] },
            { name: "Miranda de Ebro", coords: [42.69, -2.95] },
            { name: "Logroño", coords: [42.47, -2.44] },
            { name: "Tudela", coords: [42.07, -1.61] },
            { name: "Zaragoza", coords: [41.65, -0.89] },
            { name: "Tortosa", coords: [40.81, 0.52] }
        ],
        
        damCoordinates: [
            { name: "Ebro Reservoir", coords: [42.95, -3.95], details: "Spain's largest reservoir" },
            { name: "Mequinenza Dam", coords: [41.38, 0.32], details: "324 MW hydroelectric" },
            { name: "Ribarroja Dam", coords: [41.23, 0.37], details: "262 MW" }
        ],
        
        flightLandmarks: [
            { progress: 0, name: "Fontibre Spring", icon: "💧", description: "Sacred spring source" },
            { progress: 0.10, name: "Cantabrian Mountains", icon: "🏔️", description: "Mountain valley" },
            { progress: 0.20, name: "Miranda de Ebro", icon: "🏙️", description: "Industrial city" },
            { progress: 0.30, name: "La Rioja", icon: "🍷", description: "Wine region" },
            { progress: 0.40, name: "Logroño", icon: "🏙️", description: "Wine capital" },
            { progress: 0.50, name: "Tudela", icon: "🏘️", description: "Vegetable garden of Navarre" },
            { progress: 0.60, name: "Zaragoza", icon: "🏛️", description: "Aragon capital" },
            { progress: 0.75, name: "Ebro Reservoirs", icon: "🏞️", description: "Dam cascade" },
            { progress: 0.90, name: "Tortosa", icon: "🏘️", description: "Historic city" },
            { progress: 1.0, name: "Ebro Delta", icon: "🌿", description: "Mediterranean wetland" }
        ],
        
        economicImportance: [
            "Spain's most voluminous river",
            "Irrigation for agriculture (vegetables, wine)",
            "Hydroelectric power cascade",
            "Zaragoza water supply",
            "La Rioja wine region",
            "Ebro Delta rice cultivation"
        ],
        
        environmentalIssues: [
            "Over-extraction for agriculture",
            "Ebro Delta subsidence (sediment trapped by dams)",
            "Eutrophication and pollution",
            "Invasive zebra mussels",
            "Climate change reducing flow",
            "Controversial Ebro water transfer plan (cancelled)"
        ],
        
        waterDisputes: [
            {
                title: "Ebro Water Transfer Plan",
                description: "Controversial 2001 plan to divert Ebro water to Mediterranean coast was cancelled in 2004 after massive opposition."
            },
            {
                title: "Ebro Delta Subsidence",
                description: "Dams trap sediment, causing delta to sink and erode, threatening wetlands and agriculture."
            }
        ],
        
        historicalImportance: [
            {
                title: "Battle of the Ebro",
                description: "Decisive 1938 Spanish Civil War battle; bloodiest battle of the war, Nationalist victory."
            },
            {
                title: "Roman Hispania",
                description: "The Ebro (Iberus) was the boundary between Roman and Carthaginian territories before Second Punic War."
            },
            {
                title: "Zaragoza",
                description: "Zaragoza on the Ebro was capital of the Taifa of Zaragoza during Islamic rule."
            },
            {
                title: "Ebro Delta Wetland",
                description: "The Ebro Delta is one of Mediterranean's most important wetlands, designated Biosphere Reserve."
            }
        ]
    },

    // ========================================
    // 96. PO RIVER
    // ========================================
    {
        id: "po",
        name: "Po River",
        length: 652,
        continent: "europe",
        image: "https://images.unsplash.com/photo-1523906630133-f6934a1ab2b9?w=800",
        
        countries: [
            { name: "Italy", flag: "🇮🇹" }
        ],
        
        states: [
            "Piedmont", "Lombardy", "Emilia-Romagna", "Veneto"
        ],
        
        source: {
            location: "Pian del Re, Monviso, Cottian Alps",
            type: "Mountain spring",
            elevation: "2,022 m",
            coordinates: [44.7000, 7.0833]
        },
        
        mouth: {
            location: "Adriatic Sea, Po Delta",
            type: "Delta",
            delta: "Po Delta - 380 km², UNESCO World Heritage Site",
            coordinates: [44.9667, 12.4833]
        },
        
        tributaries: {
            leftBank: [
                "Dora Riparia",
                "Dora Baltea",
                "Sesia River",
                "Ticino River",
                "Adda River",
                "Oglio River",
                "Mincio River"
            ],
            rightBank: [
                "Tanaro River",
                "Trebbia River",
                "Taro River",
                "Parma River",
                "Secchia River",
                "Panaro River"
            ]
        ],
        
        distributaries: [
            "Po di Goro",
            "Po di Volano",
            "Po di Primaro",
            "Po di Tolle",
            "Po di Maistra",
            "Po di Pila"
        ],
        
        majorCities: [
            "Turin", "Piacenza", "Cremona", "Mantua", "Ferrara"
        ],
        
        dams: [
            { name: "Multiple navigation locks", details: "Throughout navigable section" },
            { name: "No major dams on main stem", details: "Free-flowing in most sections" }
        ],
        
        basinArea: "71,000 km²",
        discharge: "1,540 m³/s",
        
        riverPath: [
            [44.70, 7.08],     // Source - Monviso
            [44.85, 7.30],
            [45.07, 7.69],     // Turin
            [45.05, 8.00],
            [45.05, 9.21],     // Piacenza
            [45.13, 10.02],    // Cremona
            [45.16, 10.79],    // Mantua
            [44.96, 11.62],    // Ferrara
            [44.97, 12.48]     // Adriatic Sea (Mouth)
        ],
        
        tributaryPaths: [
            {
                name: "Ticino River",
                path: [
                    [46.20, 8.60],     // Swiss Alps
                    [45.50, 8.80],     // Lake Maggiore
                    [45.18, 9.01]      // Confluence
                ]
            },
            {
                name: "Adda River",
                path: [
                    [46.40, 10.20],    // Alps
                    [45.85, 9.50],     // Lake Como
                    [45.20, 9.60]      // Confluence
                ]
            },
            {
                name: "Tanaro River",
                path: [
                    [44.20, 7.60],     // Maritime Alps
                    [44.90, 8.30],
                    [45.08, 8.64]      // Confluence
                ]
            },
            {
                name: "Mincio River",
                path: [
                    [45.43, 10.85],    // Lake Garda outlet
                    [45.16, 10.80],    // Mantua
                    [45.02, 11.10]     // Confluence
                ]
            }
        ],
        
        distributaryPaths: [
            {
                name: "Po di Pila",
                path: [
                    [44.97, 12.40],
                    [44.97, 12.48]     // Adriatic
                ]
            },
            {
                name: "Po di Goro",
                path: [
                    [44.95, 12.35],
                    [44.82, 12.35]     // Adriatic
                ]
            },
            {
                name: "Po di Tolle",
                path: [
                    [44.98, 12.30],
                    [44.90, 12.45]     // Adriatic
                ]
            }
        ],
        
        cityCoordinates: [
            { name: "Turin", coords: [45.07, 7.69] },
            { name: "Piacenza", coords: [45.05, 9.69] },
            { name: "Cremona", coords: [45.13, 10.02] },
            { name: "Mantua", coords: [45.16, 10.79] },
            { name: "Ferrara", coords: [44.84, 11.62] }
        ],
        
        damCoordinates: [
            { name: "No Major Dams", coords: [45.10, 9.00], details: "Free-flowing river" }
        ],
        
        flightLandmarks: [
            { progress: 0, name: "Monviso", icon: "🏔️", description: "Alpine source" },
            { progress: 0.10, name: "Piedmont Alps", icon: "🏔️", description: "Mountain valley" },
            { progress: 0.20, name: "Turin", icon: "🏙️", description: "Industrial capital" },
            { progress: 0.35, name: "Po Valley", icon: "🌾", description: "Italy's breadbasket" },
            { progress: 0.50, name: "Piacenza", icon: "🏛️", description: "Historic city" },
            { progress: 0.60, name: "Cremona", icon: "🎻", description: "Violin-making city" },
            { progress: 0.75, name: "Mantua", icon: "🏰", description: "Renaissance city" },
            { progress: 0.85, name: "Ferrara", icon: "🏛️", description: "Medieval city" },
            { progress: 0.95, name: "Po Delta", icon: "🌿", description: "UNESCO wetland" },
            { progress: 1.0, name: "Adriatic Sea", icon: "🌊", description: "Delta mouth" }
        ],
        
        economicImportance: [
            "Italy's longest river",
            "Po Valley is Italy's agricultural heartland",
            "40% of Italy's GDP produced in basin",
            "Navigation corridor",
            "Hydroelectric power (tributaries)",
            "Tourism (Venice, cities)"
        ],
        
        environmentalIssues: [
            "Severe droughts (2022 worst in 70 years)",
            "Agricultural pollution and eutrophication",
            "Industrial pollution legacy",
            "Po Delta subsidence",
            "Saltwater intrusion during droughts",
            "Climate change reducing snowpack"
        ],
        
        waterDisputes: [
            {
                title: "2022 Drought Crisis",
                description: "Severe 2022 drought exposed WWII shipwrecks, caused saltwater intrusion, and devastated agriculture."
            },
            {
                title: "Irrigation Allocation",
                description: "Competing demands from agriculture, industry, and cities strain water resources."
            }
        ],
        
        historicalImportance: [
            {
                title: "Roman Padus",
                description: "The Romans called the Po 'Padus'; Cisalpine Gaul (modern Po Valley) was breadbasket of Roman Empire."
            },
            {
                title: "Battle of the Po Valley",
                description: "WWII battle in 1945 saw Allied forces defeat German forces in northern Italy."
            },
            {
                title: "Po Delta",
                description: "The Po Delta was shaped by Republic of Venice, which diverted channels to prevent silting of Venice Lagoon."
            },
            {
                title: "Renaissance Cities",
                description: "Cities like Mantua, Ferrara, and Cremona along the Po were Renaissance cultural centers."
            }
        ]
    },

    // ========================================
    // 97. WAIKATO RIVER
    // ========================================
    {
        id: "waikato",
        name: "Waikato River",
        length: 425,
        continent: "oceania",
        image: "https://images.unsplash.com/photo-1507699622108-4be3abd695ad?w=800",
        
        countries: [
            { name: "New Zealand", flag: "🇳🇿" }
        ],
        
        states: [
            "Waikato Region", "Bay of Plenty Region"
        ],
        
        source: {
            location: "Lake Taupō, Central Plateau, North Island",
            type: "Lake outlet",
            elevation: "357 m",
            coordinates: [-38.8167, 175.9167]
        },
        
        mouth: {
            location: "Tasman Sea, at Port Waikato",
            type: "Estuary",
            delta: "Waikato River mouth",
            coordinates: [-37.3833, 174.7333]
        },
        
        tributaries: {
            leftBank: [
                "Waipa River",
                "Mangawhero Stream"
            ],
            rightBank: [
                "Pueto Stream",
                "Waihou River"
            ]
        ],
        
        distributaries: [
            "Waikato estuary channels"
        ],
        
        majorCities: [
            "Taupō", "Cambridge", "Hamilton", "Ngāruawāhia", "Huntly"
        ],
        
        dams: [
            { name: "Aratiatia Dam", details: "New Zealand, 90 MW, 1964" },
            { name: "Ohakuri Dam", details: "New Zealand, 112 MW, 1961" },
            { name: "Atiamuri Dam", details: "New Zealand, 84 MW, 1958" },
            { name: "Whakamaru Dam", details: "New Zealand, 100 MW, 1956" },
            { name: "Maraetai Dam", details: "New Zealand, 360 MW, 1953" },
            { name: "Waipapa Dam", details: "New Zealand, 51 MW, 1961" },
            { name: "Arapuni Dam", details: "New Zealand, 197 MW, 1929" },
            { name: "Karapiro Dam", details: "New Zealand, 96 MW, 1947" }
        ],
        
        basinArea: "14,259 km²",
        discharge: "340 m³/s",
        
        riverPath: [
            [-38.82, 175.92],  // Source - Lake Taupō
            [-38.70, 176.00],  // Taupō town
            [-38.50, 176.10],  // Aratiatia Dam
            [-38.40, 176.00],  // Ohakuri Dam
            [-38.20, 175.90],  // Whakamaru Dam
            [-37.90, 175.70],  // Maraetai Dam
            [-37.97, 175.53],  // Cambridge
            [-37.79, 175.28],  // Hamilton
            [-37.67, 175.15],  // Ngāruawāhia
            [-37.57, 175.07],  // Huntly
            [-37.38, 174.73]   // Tasman Sea (Mouth)
        ],
        
        tributaryPaths: [
            {
                name: "Waipa River",
                path: [
                    [-38.40, 175.30],
                    [-37.90, 175.20],
                    [-37.67, 175.15]   // Confluence at Ngāruawāhia
                ]
            }
        ],
        
        distributaryPaths: [
            {
                name: "Waikato Mouth",
                path: [
                    [-37.40, 174.75],
                    [-37.38, 174.73]   // Tasman Sea
                ]
            }
        ],
        
        cityCoordinates: [
            { name: "Taupō", coords: [-38.69, 176.07] },
            { name: "Cambridge", coords: [-37.89, 175.47] },
            { name: "Hamilton", coords: [-37.79, 175.28] },
            { name: "Ngāruawāhia", coords: [-37.67, 175.15] },
            { name: "Huntly", coords: [-37.56, 175.17] }
        ],
        
        damCoordinates: [
            { name: "Aratiatia Dam", coords: [-38.64, 176.08], details: "90 MW" },
            { name: "Ohakuri Dam", coords: [-38.56, 176.06], details: "112 MW" },
            { name: "Whakamaru Dam", coords: [-38.34, 175.96], details: "100 MW" },
            { name: "Maraetai Dam", coords: [-38.13, 175.79], details: "360 MW - largest" },
            { name: "Arapuni Dam", coords: [-38.05, 175.64], details: "197 MW - historic" },
            { name: "Karapiro Dam", coords: [-37.95, 175.57], details: "96 MW - rowing venue" }
        ],
        
        flightLandmarks: [
            { progress: 0, name: "Lake Taupō", icon: "🏞️", description: "Volcanic caldera lake" },
            { progress: 0.08, name: "Huka Falls", icon: "💦", description: "Dramatic waterfall" },
            { progress: 0.15, name: "Aratiatia Rapids", icon: "🌊", description: "Dam-controlled rapids" },
            { progress: 0.30, name: "Hydro Lakes", icon: "🏞️", description: "Dam cascade" },
            { progress: 0.50, name: "Cambridge", icon: "🏘️", description: "Horse breeding town" },
            { progress: 0.65, name: "Hamilton", icon: "🏙️", description: "Waikato capital" },
            { progress: 0.75, name: "Ngāruawāhia", icon: "🏛️", description: "Māori King Movement center" },
            { progress: 0.85, name: "Huntly", icon: "🏭", description: "Power station" },
            { progress: 0.95, name: "Lower Waikato", icon: "🌾", description: "Agricultural floodplain" },
            { progress: 1.0, name: "Tasman Sea", icon: "🌊", description: "Port Waikato" }
        ],
        
        economicImportance: [
            "New Zealand's longest river",
            "17% of New Zealand's electricity (8 hydro dams)",
            "Hamilton and Waikato region water supply",
            "Agriculture (dairy farming in valley)",
            "Tourism (Huka Falls, Lake Taupō)",
            "Rowing venue (Karapiro)"
        ],
        
        environmentalIssues: [
            "Agricultural runoff pollution (dairy farming)",
            "Eutrophication and algal blooms",
            "Dam cascade impacts on fish migration",
            "Water quality degradation",
            "Invasive species (catfish)",
            "Climate change affecting Lake Taupō levels"
        ],
        
        waterDisputes: [
            {
                title: "Waikato River Settlement",
                description: "2010 Waikato River Settlement Act between government and Māori iwi granted co-governance rights."
            },
            {
                title: "Water Quality Targets",
                description: "Intensive dairy farming has severely degraded water quality, leading to cleanup efforts."
            }
        ],
        
        historicalImportance: [
            {
                title: "Māori Significance",
                description: "The Waikato is sacred to Tainui iwi; Ngāruawāhia is home to the Māori King Movement (Kīngitanga)."
            },
            {
                title: "New Zealand Wars",
                description: "Waikato Wars (1863-64) saw British forces invade the Waikato region, confiscating Māori land."
            },
            {
                title: "Hydro Development",
                description: "The 1929-1971 dam cascade transformed New Zealand's energy system and economy."
            },
            {
                title: "2010 River Settlement",
                description: "Landmark co-governance agreement recognizes Māori as guardians of the river."
            }
        ]
    },

    // ========================================
    // 98. SHANNON RIVER
    // ========================================
    {
        id: "shannon",
        name: "Shannon River",
        length: 360,
        continent: "europe",
        image: "https://images.unsplash.com/photo-1590448040629-f3256e65657c?w=800",
        
        countries: [
            { name: "Ireland", flag: "🇮🇪" }
        ],
        
        states: [
            "Cavan", "Leitrim", "Roscommon", "Longford",
            "Westmeath", "Offaly", "Galway", "Tipperary",
            "Clare", "Limerick", "Kerry"
        ],
        
        source: {
            location: "Shannon Pot, Cuilcagh Mountain, County Cavan",
            type: "Spring",
            elevation: "76 m",
            coordinates: [54.2167, -7.9333]
        },
        
        mouth: {
            location: "Atlantic Ocean, Shannon Estuary",
            type: "Estuary",
            delta: "Shannon Estuary - 102 km long estuary",
            coordinates: [52.6000, -9.5000]
        },
        
        tributaries: {
            leftBank: [
                "Boyle River",
                "Suck River",
                "Little Brosna River",
                "Fergus River"
            ],
            rightBank: [
                "Inny River",
                "Brosna River",
                "Mulkear River",
                "Maigue River"
            ]
        ],
        
        distributaries: [
            "Shannon Estuary channels"
        ],
        
        majorCities: [
            "Carrick-on-Shannon", "Athlone", "Portumna", "Killaloe", "Limerick"
        ],
        
        dams: [
            { name: "Ardnacrusha Dam", details: "Ireland, 86 MW, 1929, first major Irish hydro scheme" },
            { name: "Parteen Weir", details: "Ireland, diversion weir for Ardnacrusha" }
        ],
        
        basinArea: "16,865 km²",
        discharge: "208 m³/s",
        
        riverPath: [
            [54.22, -7.93],    // Source - Shannon Pot
            [54.15, -8.00],
            [54.02, -8.10],    // Carrick-on-Shannon
            [53.80, -8.05],    // Lough Ree
            [53.43, -7.94],    // Athlone
            [53.08, -8.31],    // Lough Derg
            [52.80, -8.44],    // Killaloe
            [52.67, -8.62],    // Limerick
            [52.60, -9.50]     // Atlantic Ocean (Mouth)
        ],
        
        tributaryPaths: [
            {
                name: "Suck River",
                path: [
                    [53.80, -8.50],
                    [53.50, -8.30],
                    [53.43, -7.98]     // Confluence
                ]
            },
            {
                name: "Brosna River",
                path: [
                    [53.30, -7.40],
                    [53.20, -7.80],
                    [53.10, -8.00]     // Confluence
                ]
            }
        ],
        
        distributaryPaths: [
            {
                name: "Shannon Estuary",
                path: [
                    [52.65, -8.80],
                    [52.60, -9.50]     // Atlantic Ocean
                ]
            }
        ],
        
        cityCoordinates: [
            { name: "Carrick-on-Shannon", coords: [54.02, -8.09] },
            { name: "Athlone", coords: [53.42, -7.94] },
            { name: "Portumna", coords: [53.09, -8.22] },
            { name: "Killaloe", coords: [52.81, -8.44] },
            { name: "Limerick", coords: [52.66, -8.63] }
        ],
        
        damCoordinates: [
            { name: "Ardnacrusha Dam", coords: [52.71, -8.61], details: "86 MW - Historic 1929 hydro scheme" }
        ],
        
        flightLandmarks: [
            { progress: 0, name: "Shannon Pot", icon: "💧", description: "Mystical spring source" },
            { progress: 0.10, name: "Upper Shannon", icon: "🌳", description: "Rural countryside" },
            { progress: 0.20, name: "Carrick-on-Shannon", icon: "🏘️", description: "Boating town" },
            { progress: 0.35, name: "Lough Ree", icon: "🏞️", description: "Large lake" },
            { progress: 0.50, name: "Athlone", icon: "🏰", description: "Midlands capital" },
            { progress: 0.65, name: "Clonmacnoise", icon: "⛪", description: "Monastic ruins" },
            { progress: 0.75, name: "Lough Derg", icon: "🏞️", description: "Largest Shannon lake" },
            { progress: 0.85, name: "Killaloe", icon: "🏘️", description: "Lake town" },
            { progress: 0.92, name: "Limerick", icon: "🏙️", description: "Treaty city" },
            { progress: 1.0, name: "Atlantic Ocean", icon: "🌊", description: "Shannon Estuary" }
        ],
        
        economicImportance: [
            "Ireland's longest river",
            "Navigation corridor (Shannon-Erne Waterway)",
            "Tourism (boating, fishing)",
            "Ardnacrusha hydroelectric power",
            "Shannon Estuary industry (Limerick, Shannon Airport)",
            "Agriculture in floodplain"
        ],
        
        environmentalIssues: [
            "Agricultural runoff pollution",
            "Eutrophication of lakes",
            "Invasive zebra mussels",
            "Flooding (major floods 2009, 2015)",
            "Climate change increasing flood risk",
            "Water quality concerns"
        ],
        
        waterDisputes: [
            {
                title: "Shannon Flooding",
                description: "Repeated winter flooding (2009, 2015) caused massive damage; calls for better flood management."
            },
            {
                title: "Water Transfer to Dublin",
                description: "Proposed Shannon-Dublin water pipeline faces environmental opposition."
            }
        ],
        
        historicalImportance: [
            {
                title: "Clonmacnoise",
                description: "Famous 6th-century monastic settlement on the Shannon, burial place of High Kings of Ireland."
            },
            {
                title: "Viking Raids",
                description: "Vikings used the Shannon to raid inland Ireland; established Limerick as a trading post."
            },
            {
                title: "Ardnacrusha Scheme",
                description: "The 1929 Ardnacrusha hydroelectric project was a symbol of newly independent Ireland's ambition."
            },
            {
                title: "Treaty of Limerick",
                description: "1691 Treaty of Limerick ended Williamite War; Limerick on the Shannon was key fortress."
            }
        ]
    },

    // ========================================
    // 99. THAMES RIVER
    // ========================================
    {
        id: "thames",
        name: "Thames River",
        length: 346,
        continent: "europe",
        image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800",
        
        countries: [
            { name: "England", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿" }
        ],
        
        states: [
            "Gloucestershire", "Wiltshire", "Oxfordshire", "Berkshire",
            "Buckinghamshire", "Surrey", "Greater London", "Essex", "Kent"
        ],
        
        source: {
            location: "Thames Head, Cotswolds, Gloucestershire",
            type: "Spring",
            elevation: "110 m",
            coordinates: [51.6833, -2.0833]
        },
        
        mouth: {
            location: "North Sea, Thames Estuary",
            type: "Estuary",
            delta: "Thames Estuary",
            coordinates: [51.5000, 0.7500]
        },
        
        tributaries: {
            leftBank: [
                "River Churn",
                "River Evenlode",
                "River Cherwell",
                "River Thame",
                "River Colne",
                "River Lea"
            ],
            rightBank: [
                "River Coln",
                "River Windrush",
                "River Kennet",
                "River Wey",
                "River Mole",
                "River Medway"
            ]
        ],
        
        distributaries: [
            "Thames Estuary channels"
        ],
        
        majorCities: [
            "Cirencester", "Oxford", "Reading", "Windsor",
            "London", "Greenwich", "Gravesend"
        ],
        
        dams: [
            { name: "Thames Barrier", details: "England, 1984, flood barrier protecting London" },
            { name: "Multiple locks", details: "45 locks on non-tidal Thames" }
        ],
        
        basinArea: "12,935 km²",
        discharge: "65.8 m³/s",
        
        riverPath: [
            [51.68, -2.08],    // Source - Thames Head
            [51.73, -1.85],    // Cirencester area
            [51.75, -1.26],    // Oxford
            [51.48, -0.97],    // Reading
            [51.48, -0.61],    // Windsor
            [51.50, -0.13],    // London
            [51.48, 0.00],     // Greenwich
            [51.45, 0.37],     // Gravesend
            [51.50, 0.75]      // North Sea (Mouth)
        ],
        
        tributaryPaths: [
            {
                name: "River Cherwell",
                path: [
                    [52.20, -1.30],
                    [51.90, -1.25],
                    [51.75, -1.22]     // Confluence at Oxford
                ]
            },
            {
                name: "River Kennet",
                path: [
                    [51.40, -1.80],
                    [51.45, -1.00],
                    [51.46, -0.97]     // Confluence at Reading
                ]
            },
            {
                name: "River Lea",
                path: [
                    [51.80, -0.10],
                    [51.55, -0.05],
                    [51.50, 0.00]      // Confluence at East London
                ]
            }
        ],
        
        distributaryPaths: [
            {
                name: "Thames Estuary",
                path: [
                    [51.48, 0.40],
                    [51.50, 0.75]      // North Sea
                ]
            }
        ],
        
        cityCoordinates: [
            { name: "Oxford", coords: [51.75, -1.26] },
            { name: "Reading", coords: [51.45, -0.97] },
            { name: "Windsor", coords: [51.48, -0.61] },
            { name: "London", coords: [51.51, -0.13] },
            { name: "Greenwich", coords: [51.48, 0.00] },
            { name: "Gravesend", coords: [51.44, 0.37] }
        ],
        
        damCoordinates: [
            { name: "Thames Barrier", coords: [51.50, 0.04], details: "1984 flood barrier - protects London" }
        ],
        
        flightLandmarks: [
            { progress: 0, name: "Thames Head", icon: "💧", description: "Cotswolds spring" },
            { progress: 0.10, name: "Cotswolds", icon: "🌳", description: "Scenic countryside" },
            { progress: 0.25, name: "Oxford", icon: "🎓", description: "University city" },
            { progress: 0.40, name: "Reading", icon: "🏙️", description: "Tech hub" },
            { progress: 0.50, name: "Windsor", icon: "🏰", description: "Royal castle" },
            { progress: 0.60, name: "Hampton Court", icon: "🏰", description: "Tudor palace" },
            { progress: 0.70, name: "Westminster", icon: "🏛️", description: "Parliament & Big Ben" },
            { progress: 0.75, name: "Tower Bridge", icon: "🌉", description: "Iconic bridge" },
            { progress: 0.85, name: "Thames Barrier", icon: "🏗️", description: "Flood defense" },
            { progress: 0.95, name: "Gravesend", icon: "🏘️", description: "Estuary town" },
            { progress: 1.0, name: "North Sea", icon: "🌊", description: "Thames Estuary" }
        ],
        
        economicImportance: [
            "London's historic lifeline",
            "Port of London (historically major)",
            "Tourism (London landmarks)",
            "London water supply (historically)",
            "Navigation (45 locks)",
            "Cultural and historical significance"
        ],
        
        environmentalIssues: [
            "Historically polluted (Great Stink of 1858)",
            "Now one of cleanest metropolitan rivers",
            "Thames Barrier protects London from flooding",
            "Climate change increasing flood risk",
            "Sewage overflow concerns",
            "Invasive species"
        ],
        
        waterDisputes: [
            {
                title: "Thames Tideway Tunnel",
                description: "£4.2 billion 'super sewer' under construction to prevent sewage overflow into Thames."
            },
            {
                title: "Thames Barrier Upgrade",
                description: "The 1984 Thames Barrier may need replacement by 2070 due to climate change and sea level rise."
            }
        ],
        
        historicalImportance: [
            {
                title: "Roman Londinium",
                description: "Romans founded Londinium (London) at the Thames' first bridging point in 43 AD."
            },
            {
                title: "Magna Carta",
                description: "Magna Carta was sealed at Runnymede on the Thames in 1215, foundation of constitutional law."
            },
            {
                title: "Great Stink of 1858",
                description: "Hot summer caused sewage-filled Thames to stink; led to construction of London's sewer system."
            },
            {
                title: "WWII",
                description: "Thames was vital supply route during WWII; Thames Estuary saw Battle of Britain dogfights."
            },
            {
                title: "Tower Bridge",
                description: "Iconic Tower Bridge opened in 1894; symbol of London and the Thames."
            }
        ]
    },

    // ========================================
    // 100. EUPHRATES RIVER
    // ========================================
    {
        id: "euphrates",
        name: "Euphrates River",
        length: 2800,
        continent: "asia",
        image: "https://images.unsplash.com/photo-1591608971362-f08b2a75731a?w=800",
        
        countries: [
            { name: "Turkey", flag: "🇹🇷" },
            { name: "Syria", flag: "🇸🇾" },
            { name: "Iraq", flag: "🇮🇶" }
        ],
        
        states: [
            "Erzurum Province", "Elazığ Province", "Adıyaman Province",
            "Şanlıurfa Province", "Raqqa Governorate", "Deir ez-Zor Governorate",
            "Anbar Governorate", "Babil Governorate", "Al-Qādisiyyah Governorate",
            "Dhi Qar Governorate", "Basra Governorate"
        ],
        
        source: {
            location: "Confluence of Murat and Karasu rivers, Eastern Anatolia, Turkey",
            type: "River confluence (Murat from Armenian Highlands)",
            elevation: "3,290 m (Murat source)",
            coordinates: [38.7500, 38.6500]
        },
        
        mouth: {
            location: "Shatt al-Arab, Persian Gulf (joins Tigris)",
            type: "Confluence/Estuary",
            delta: "Mesopotamian Marshes / Shatt al-Arab",
            coordinates: [30.4500, 47.8000]
        },
        
        tributaries: {
            leftBank: [
                "Sajur River",
                "Balikh River",
                "Khabur River (Syria)"
            ],
            rightBank: [
                "Khabur River (Turkey)",
                "Euphrates tributaries in Iraq (minimal)"
            ]
        },
        
        distributaries: [
            "Shatt al-Arab (joins Tigris)"
        ],
        
        majorCities: [
            "Keban", "Birecik", "Raqqa", "Deir ez-Zor",
            "Al-Qa'im", "Ramadi", "Fallujah", "Al-Hillah", "Nasiriyah", "Basra"
        ],
        
        dams: [
            { name: "Keban Dam", details: "Turkey, 1,330 MW, 1974" },
            { name: "Karakaya Dam", details: "Turkey, 1,800 MW, 1987" },
            { name: "Atatürk Dam", details: "Turkey, 2,400 MW, 1990, largest in GAP project" },
            { name: "Birecik Dam", details: "Turkey, 672 MW, 2000" },
            { name: "Tabqa Dam", details: "Syria, 880 MW, 1973, Lake Assad" },
            { name: "Haditha Dam", details: "Iraq, 660 MW, 1986" }
        ],
        
        basinArea: "440,000 km²",
        discharge: "356 m³/s (severely reduced from historical 1,000+ m³/s)",
        
        riverPath: [
            [38.75, 38.65],    // Source - Murat-Karasu confluence
            [38.80, 39.40],    // Keban Dam
            [38.20, 39.44],    // Karakaya Dam
            [37.99, 38.46],    // Atatürk Dam
            [37.35, 38.01],    // Birecik Dam
            [36.95, 38.00],    // Turkey-Syria border
            [35.95, 38.99],    // Raqqa
            [35.34, 40.14],    // Deir ez-Zor
            [34.38, 40.90],    // Syria-Iraq border
            [34.02, 41.78],    // Al-Qa'im
            [33.44, 43.30],    // Ramadi
            [33.35, 43.78],    // Fallujah
            [32.46, 44.42],    // Al-Hillah
            [31.05, 46.25],    // Nasiriyah
            [30.45, 47.80]     // Shatt al-Arab (joins Tigris)
        ],
        
        tributaryPaths: [
            {
                name: "Balikh River",
                path: [
                    [37.00, 39.00],
                    [36.50, 38.80],
                    [36.20, 38.95]     // Confluence
                ]
            },
            {
                name: "Khabur River (Syria)",
                path: [
                    [37.00, 41.20],
                    [36.00, 40.90],
                    [35.20, 40.50]     // Confluence
                ]
            }
        ],
        
        distributaryPaths: [
            {
                name: "Shatt al-Arab",
                path: [
                    [30.45, 47.80],    // Tigris-Euphrates confluence
                    [29.97, 48.58]     // Persian Gulf
                ]
            }
        ],
        
        cityCoordinates: [
            { name: "Raqqa", coords: [35.95, 38.99] },
            { name: "Deir ez-Zor", coords: [35.34, 40.14] },
            { name: "Al-Qa'im", coords: [34.38, 40.97] },
            { name: "Ramadi", coords: [33.42, 43.30] },
            { name: "Fallujah", coords: [33.35, 43.78] },
            { name: "Al-Hillah", coords: [32.46, 44.42] },
            { name: "Nasiriyah", coords: [31.05, 46.26] },
            { name: "Basra", coords: [30.51, 47.78] }
        ],
        
        damCoordinates: [
            { name: "Keban Dam", coords: [38.80, 38.73], details: "1,330 MW - first GAP dam" },
            { name: "Karakaya Dam", coords: [38.20, 39.44], details: "1,800 MW" },
            { name: "Atatürk Dam", coords: [37.99, 38.46], details: "2,400 MW - largest GAP dam" },
            { name: "Birecik Dam", coords: [37.02, 37.98], details: "672 MW" },
            { name: "Tabqa Dam", coords: [35.86, 38.55], details: "880 MW - Syria, Lake Assad" },
            { name: "Haditha Dam", coords: [34.13, 42.37], details: "660 MW - Iraq" }
        ],
        
        flightLandmarks: [
            { progress: 0, name: "Armenian Highlands", icon: "🏔️", description: "Murat River source" },
            { progress: 0.10, name: "Eastern Anatolia", icon: "🏔️", description: "Turkish mountains" },
            { progress: 0.20, name: "Atatürk Dam", icon: "🏗️", description: "Largest Turkish dam" },
            { progress: 0.28, name: "GAP Irrigation", icon: "🌾", description: "Southeast Anatolia Project" },
            { progress: 0.35, name: "Turkey-Syria Border", icon: "🛂", description: "Enters Syria" },
            { progress: 0.45, name: "Raqqa", icon: "🏙️", description: "Former ISIS capital" },
            { progress: 0.52, name: "Tabqa Dam", icon: "🏗️", description: "Lake Assad" },
            { progress: 0.60, name: "Deir ez-Zor", icon: "🏙️", description: "Syrian desert city" },
            { progress: 0.68, name: "Syria-Iraq Border", icon: "🛂", description: "Enters Iraq" },
            { progress: 0.75, name: "Anbar Province", icon: "🏜️", description: "Iraqi desert" },
            { progress: 0.82, name: "Ramadi", icon: "🏙️", description: "Anbar capital" },
            { progress: 0.88, name: "Mesopotamian Plain", icon: "🌾", description: "Ancient farmland" },
            { progress: 0.95, name: "Mesopotamian Marshes", icon: "🌿", description: "Restored wetlands" },
            { progress: 1.0, name: "Shatt al-Arab", icon: "🌊", description: "Joins Tigris to Persian Gulf" }
        ],
        
        economicImportance: [
            "Birthplace of civilization (Mesopotamia)",
            "Major irrigation source for Turkey, Syria, Iraq",
            "Turkey's GAP project (hydroelectric and irrigation)",
            "Syria and Iraq agriculture dependent on Euphrates",
            "Historically vital trade route",
            "Oil production in river valley"
        ],
        
        environmentalIssues: [
            "Flow reduced by 80% due to dams",
            "Turkey's GAP project drastically reduced downstream flow",
            "Severe droughts (worst in 2021)",
            "Iraqi marshes desiccated",
            "Climate change exacerbating water scarcity",
            "Salinity and pollution increasing"
        ],
        
        waterDisputes: [
            {
                title: "Turkey-Syria-Iraq Water Conflict",
                description: "Turkey's GAP dams reduced Euphrates flow, devastating Syria and Iraq. Ongoing dispute over water sharing."
            },
            {
                title: "2021 Drought Crisis",
                description: "Severe drought dried up Lake Assad in Syria; Iraq's marshes disappeared; water levels at historic lows."
            },
            {
                title: "1987 Protocol",
                description: "Turkey agreed to release 500 m³/s to Syria, but Iraq receives much less. No comprehensive treaty exists."
            }
        ],
        
        historicalImportance: [
            {
                title: "Cradle of Civilization",
                description: "The Euphrates watered ancient Mesopotamia (Sumer, Akkad, Babylon, Assyria), birthplace of writing, law, and cities."
            },
            {
                title: "Babylon",
                description: "Ancient Babylon on the Euphrates was one of the ancient world's greatest cities; Hanging Gardens were one of Seven Wonders."
            },
            {
                title: "Biblical Significance",
                description: "The Euphrates is mentioned in Genesis as one of four rivers flowing from Eden; central in Revelation prophecy."
            },
            {
                title: "Ur",
                description: "Ancient city of Ur, birthplace of Abraham, was on the Euphrates near its confluence with the Tigris."
            },
            {
                title: "Mesopotamian Marshes",
                description: "Saddam Hussein drained the marshes in 1990s to punish Marsh Arabs; partially restored after 2003."
            }
        ]
    }

];

// ============================================================
// EXPORT RIVERS DATA 10 (FINAL)
// ============================================================

if (typeof window !== 'undefined') {
    window.RIVERS_DATA_10 = RIVERS_DATA_10;
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = RIVERS_DATA_10;
}

console.log('✅ Rivers Data 10 loaded:', RIVERS_DATA_10.length, 'rivers (91-100)');
console.log('🎉 GEOTOPIA RIVERS PROJECT COMPLETE! All 100 rivers loaded.');
