/**
 * GEOTOPIA - Rivers Data File 5
 * Rivers 41-50 (Danube to Senegal)
 * Danube, Japurá, Zambezi, Ganges, Murray, Salado, Arkansas, Orinoco, Xingu, Senegal
 */

const RIVERS_DATA_5 = [
    // ========================================
    // 41. DANUBE RIVER
    // ========================================
    {
        id: "danube",
        name: "Danube River",
        length: 2850,
        continent: "europe",
        image: "https://images.unsplash.com/photo-1516550135131-fe3dcb0bedc7?w=800",
        
        countries: [
            { name: "Germany", flag: "🇩🇪" },
            { name: "Austria", flag: "🇦🇹" },
            { name: "Slovakia", flag: "🇸🇰" },
            { name: "Hungary", flag: "🇭🇺" },
            { name: "Croatia", flag: "🇭🇷" },
            { name: "Serbia", flag: "🇷🇸" },
            { name: "Romania", flag: "🇷🇴" },
            { name: "Bulgaria", flag: "🇧🇬" },
            { name: "Moldova", flag: "🇲🇩" },
            { name: "Ukraine", flag: "🇺🇦" }
        ],
        
        states: [
            "Baden-Württemberg", "Bavaria", "Upper Austria", "Lower Austria",
            "Vienna", "Bratislava Region", "Budapest", "Vojvodina",
            "Wallachia", "Dobruja"
        ],
        
        source: {
            location: "Black Forest, Germany (confluence of Breg and Brigach)",
            type: "Mountain springs",
            elevation: "678 m",
            coordinates: [47.9536, 8.1672]
        },
        
        mouth: {
            location: "Black Sea, Romania/Ukraine",
            type: "Delta",
            delta: "Danube Delta - UNESCO World Heritage Site, 4,152 km²",
            coordinates: [45.2167, 29.7500]
        },
        
        tributaries: {
            leftBank: [
                "Morava River",
                "Váh River",
                "Tisza River",
                "Olt River",
                "Siret River",
                "Prut River"
            ],
            rightBank: [
                "Inn River",
                "Drava River",
                "Sava River",
                "Morava (Great)",
                "Iskar River"
            ]
        },
        
        distributaries: [
            "Chilia Branch",
            "Sulina Branch",
            "Sfântu Gheorghe Branch"
        ],
        
        majorCities: [
            "Ulm", "Regensburg", "Passau", "Linz", "Vienna",
            "Bratislava", "Budapest", "Novi Sad", "Belgrade",
            "Vidin", "Rousse", "Galați", "Brăila"
        ],
        
        dams: [
            { name: "Iron Gates I", details: "Romania/Serbia, 2,160 MW, 1972" },
            { name: "Iron Gates II", details: "Romania/Serbia, 432 MW, 1984" },
            { name: "Gabčíkovo Dam", details: "Slovakia, 720 MW, 1992" },
            { name: "Freudenau Dam", details: "Austria, 172 MW, 1998" },
            { name: "Jochenstein Dam", details: "Germany/Austria, 132 MW, 1956" }
        ],
        
        basinArea: "801,463 km²",
        discharge: "6,500 m³/s",
        
        riverPath: [
            [47.95, 8.17],     // Source - Black Forest
            [48.40, 9.99],     // Ulm
            [48.52, 10.50],
            [49.02, 12.10],    // Regensburg
            [48.57, 13.43],    // Passau
            [48.31, 14.29],    // Linz
            [48.21, 16.37],    // Vienna
            [48.14, 17.11],    // Bratislava
            [47.50, 19.05],    // Budapest
            [45.25, 19.85],    // Novi Sad
            [44.82, 20.45],    // Belgrade
            [44.25, 22.65],    // Iron Gates
            [44.10, 24.35],
            [43.85, 25.97],    // Rousse
            [44.18, 26.92],
            [45.43, 28.05],    // Galați
            [45.27, 28.80],
            [45.15, 29.60],
            [45.22, 29.75]     // Black Sea (Mouth)
        ],
        
        tributaryPaths: [
            {
                name: "Inn River",
                path: [
                    [46.80, 10.50],    // Swiss Alps
                    [47.50, 11.50],
                    [48.57, 13.43]     // Confluence at Passau
                ]
            },
            {
                name: "Tisza River",
                path: [
                    [48.00, 24.00],    // Ukraine
                    [48.00, 21.00],
                    [46.00, 20.00],
                    [45.13, 20.05]     // Confluence
                ]
            },
            {
                name: "Sava River",
                path: [
                    [46.30, 13.85],    // Slovenia
                    [45.80, 16.00],    // Zagreb
                    [44.82, 20.45]     // Confluence at Belgrade
                ]
            },
            {
                name: "Drava River",
                path: [
                    [46.75, 12.00],    // Italy/Austria
                    [46.00, 15.00],
                    [45.54, 18.88]     // Confluence
                ]
            }
        ],
        
        distributaryPaths: [
            {
                name: "Chilia Branch",
                path: [
                    [45.35, 29.30],
                    [45.42, 29.75]     // Black Sea
                ]
            },
            {
                name: "Sulina Branch",
                path: [
                    [45.15, 29.30],
                    [45.15, 29.66]     // Black Sea
                ]
            },
            {
                name: "Sfântu Gheorghe Branch",
                path: [
                    [45.00, 29.30],
                    [44.90, 29.60]     // Black Sea
                ]
            }
        ],
        
        cityCoordinates: [
            { name: "Ulm", coords: [48.40, 9.99] },
            { name: "Regensburg", coords: [49.02, 12.10] },
            { name: "Passau", coords: [48.57, 13.43] },
            { name: "Linz", coords: [48.31, 14.29] },
            { name: "Vienna", coords: [48.21, 16.37] },
            { name: "Bratislava", coords: [48.14, 17.11] },
            { name: "Budapest", coords: [47.50, 19.05] },
            { name: "Belgrade", coords: [44.82, 20.45] },
            { name: "Rousse", coords: [43.85, 25.97] }
        ],
        
        damCoordinates: [
            { name: "Iron Gates I", coords: [44.67, 22.52], details: "2,160 MW - Europe's largest dam" },
            { name: "Gabčíkovo Dam", coords: [47.87, 17.58], details: "720 MW hydroelectric" },
            { name: "Freudenau Dam", coords: [48.18, 16.50], details: "172 MW - Vienna" }
        ],
        
        flightLandmarks: [
            { progress: 0, name: "Black Forest", icon: "🌲", description: "Source in Germany" },
            { progress: 0.08, name: "Ulm", icon: "⛪", description: "World's tallest church spire" },
            { progress: 0.15, name: "Regensburg", icon: "🏛️", description: "Medieval UNESCO city" },
            { progress: 0.22, name: "Passau", icon: "🔀", description: "Three rivers confluence" },
            { progress: 0.30, name: "Linz", icon: "🏙️", description: "Austrian industrial city" },
            { progress: 0.38, name: "Vienna", icon: "🎵", description: "Austrian capital" },
            { progress: 0.42, name: "Bratislava", icon: "🏰", description: "Slovak capital" },
            { progress: 0.52, name: "Budapest", icon: "🌉", description: "Hungarian capital" },
            { progress: 0.65, name: "Belgrade", icon: "🏙️", description: "Serbian capital" },
            { progress: 0.75, name: "Iron Gates", icon: "🏗️", description: "Dramatic gorge & dam" },
            { progress: 0.90, name: "Danube Delta", icon: "🦩", description: "UNESCO wetland" },
            { progress: 1.0, name: "Black Sea", icon: "🌊", description: "River mouth" }
        ],
        
        economicImportance: [
            "Second longest river in Europe (after Volga)",
            "Flows through 10 countries - most of any river",
            "Major shipping corridor (Rhine-Main-Danube Canal)",
            "Hydroelectric power generation (Iron Gates)",
            "Drinking water for 20 million people",
            "Tourism - river cruises, UNESCO sites"
        ],
        
        environmentalIssues: [
            "Industrial and agricultural pollution",
            "Navigation impacts on ecosystem",
            "Dam effects on fish migration",
            "Invasive species (zebra mussel origin)",
            "Danube Delta wetland threats",
            "Flood management challenges"
        ],
        
        waterDisputes: [
            {
                title: "Gabčíkovo-Nagymaros Dispute",
                description: "Hungary and Slovakia disputed the dam project, resulting in a 1997 International Court of Justice ruling."
            },
            {
                title: "Danube Commission",
                description: "International body governing navigation since 1948, managing Europe's most international river."
            }
        ],
        
        historicalImportance: [
            {
                title: "Roman Frontier",
                description: "The Danube marked the northern boundary (limes) of the Roman Empire for centuries."
            },
            {
                title: "Habsburg Empire",
                description: "The Danube was the cultural and economic spine of the Austro-Hungarian Empire."
            },
            {
                title: "Blue Danube Waltz",
                description: "Johann Strauss II's famous waltz (1867) made the Danube a romantic symbol worldwide."
            },
            {
                title: "Iron Curtain",
                description: "During the Cold War, the Danube divided Western and Eastern Europe."
            }
        ]
    },

    // ========================================
    // 42. JAPURÁ RIVER (CAQUETÁ)
    // ========================================
    {
        id: "japura",
        name: "Japurá River",
        length: 2820,
        continent: "south-america",
        image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=800",
        
        countries: [
            { name: "Colombia", flag: "🇨🇴" },
            { name: "Brazil", flag: "🇧🇷" }
        ],
        
        states: [
            "Cauca", "Caquetá", "Amazonas (Colombia)",
            "Amazonas (Brazil)"
        ],
        
        source: {
            location: "Colombian Andes, near Popayán",
            type: "Andean mountain streams",
            elevation: "3,300 m",
            coordinates: [2.2000, -76.6000]
        },
        
        mouth: {
            location: "Amazon River, Brazil",
            type: "Confluence",
            delta: "Multiple anastomosing channels entering Amazon",
            coordinates: [-3.0833, -64.7833]
        },
        
        tributaries: {
            leftBank: [
                "Apaporis River",
                "Mirití-Paraná",
                "Puré River"
            ],
            rightBank: [
                "Orteguaza River",
                "Caguán River",
                "Yarí River"
            ]
        },
        
        distributaries: [
            "Japurá Channels",
            "Lago Amanã connections"
        ],
        
        majorCities: [
            "Popayán", "Florencia", "San José del Guaviare",
            "La Pedrera", "Maraã", "Tefé"
        ],
        
        dams: [
            { name: "No major dams", details: "River flows freely through rainforest" }
        ],
        
        basinArea: "255,000 km²",
        discharge: "18,620 m³/s",
        
        riverPath: [
            [2.20, -76.60],    // Source - Colombian Andes
            [1.50, -76.00],
            [1.20, -75.60],    // Florencia area
            [0.50, -75.00],
            [0.00, -73.50],
            [-0.50, -72.00],
            [-0.92, -71.42],   // Colombia-Brazil border
            [-1.20, -70.50],
            [-1.50, -69.50],   // La Pedrera
            [-1.80, -68.50],
            [-2.20, -67.50],
            [-2.50, -66.50],
            [-2.80, -65.50],
            [-3.08, -64.78]    // Amazon River (Mouth)
        ],
        
        tributaryPaths: [
            {
                name: "Apaporis River",
                path: [
                    [0.50, -73.00],
                    [-0.50, -71.50],
                    [-1.00, -70.50]    // Confluence
                ]
            },
            {
                name: "Caguán River",
                path: [
                    [2.00, -74.50],
                    [1.00, -74.00],
                    [0.50, -73.50]     // Confluence
                ]
            },
            {
                name: "Yarí River",
                path: [
                    [0.00, -72.00],
                    [-0.50, -71.00],
                    [-1.00, -70.00]    // Confluence
                ]
            }
        ],
        
        distributaryPaths: [
            {
                name: "Japurá Channels",
                path: [
                    [-2.90, -65.00],
                    [-3.08, -64.78]    // Amazon
                ]
            }
        ],
        
        cityCoordinates: [
            { name: "Popayán", coords: [2.44, -76.61] },
            { name: "Florencia", coords: [1.62, -75.61] },
            { name: "La Pedrera", coords: [-1.31, -69.58] },
            { name: "Maraã", coords: [-1.85, -65.58] },
            { name: "Tefé", coords: [-3.35, -64.72] }
        ],
        
        damCoordinates: [
            { name: "No Dams", coords: [-1.50, -70.00], details: "Free-flowing Amazon tributary" }
        ],
        
        flightLandmarks: [
            { progress: 0, name: "Colombian Andes", icon: "🏔️", description: "Source near Popayán" },
            { progress: 0.10, name: "Florencia", icon: "🏙️", description: "Caquetá capital" },
            { progress: 0.20, name: "Caquetá Lowlands", icon: "🌴", description: "Transition to rainforest" },
            { progress: 0.35, name: "Colombia-Brazil Border", icon: "🛂", description: "Becomes Japurá" },
            { progress: 0.50, name: "La Pedrera", icon: "🏘️", description: "Remote border town" },
            { progress: 0.65, name: "Apaporis Confluence", icon: "🔀", description: "Major tributary" },
            { progress: 0.80, name: "Mamirauá Reserve", icon: "🌿", description: "Largest flooded forest reserve" },
            { progress: 0.90, name: "Lago Amanã", icon: "🌊", description: "Lake connections" },
            { progress: 1.0, name: "Amazon River", icon: "🌊", description: "Joins the Amazon" }
        ],
        
        economicImportance: [
            "Major Amazon tributary by discharge",
            "Sustains vast rainforest ecosystem",
            "Traditional fishing communities",
            "Mamirauá Sustainable Development Reserve",
            "Indigenous territories",
            "Scientific research importance"
        ],
        
        environmentalIssues: [
            "Deforestation in Colombian headwaters",
            "Illegal gold mining",
            "Drug trafficking impacts on communities",
            "Climate change affecting seasonality",
            "Limited monitoring and management",
            "Mercury contamination from mining"
        ],
        
        waterDisputes: [
            {
                title: "Transboundary Management",
                description: "Colombia and Brazil coordinate on border management but no formal water treaty exists."
            }
        ],
        
        historicalImportance: [
            {
                title: "Indigenous Homeland",
                description: "Home to numerous indigenous groups including Tukano, Makuna, and Tikuna peoples."
            },
            {
                title: "Rubber Boom",
                description: "The region experienced devastating exploitation during the Amazon rubber boom (1880-1912)."
            },
            {
                title: "Scientific Exploration",
                description: "Naturalists like Alfred Russel Wallace explored the Japurá basin in the 19th century."
            }
        ]
    },

    // ========================================
    // 43. ZAMBEZI RIVER
    // ========================================
    {
        id: "zambezi",
        name: "Zambezi River",
        length: 2574,
        continent: "africa",
        image: "https://images.unsplash.com/photo-1534430480872-3498386e7856?w=800",
        
        countries: [
            { name: "Zambia", flag: "🇿🇲" },
            { name: "Angola", flag: "🇦🇴" },
            { name: "Namibia", flag: "🇳🇦" },
            { name: "Botswana", flag: "🇧🇼" },
            { name: "Zimbabwe", flag: "🇿🇼" },
            { name: "Mozambique", flag: "🇲🇿" }
        ],
        
        states: [
            "North-Western Province", "Western Province",
            "Southern Province", "Cuando Cubango Province",
            "Caprivi Strip", "Matabeleland North",
            "Mashonaland", "Tete Province", "Sofala Province"
        ],
        
        source: {
            location: "Mwinilunga District, Zambia",
            type: "Wetland/Dambo springs",
            elevation: "1,500 m",
            coordinates: [-11.3667, 24.2667]
        },
        
        mouth: {
            location: "Indian Ocean, Mozambique",
            type: "Delta",
            delta: "Zambezi Delta - 18,000 km²",
            coordinates: [-18.8833, 36.3333]
        },
        
        tributaries: {
            leftBank: [
                "Kabompo River",
                "Lungue-Bungo River",
                "Cuando/Chobe River",
                "Shangani River",
                "Sanyati River"
            ],
            rightBank: [
                "Kafue River",
                "Luangwa River",
                "Shire River"
            ]
        },
        
        distributaries: [
            "Zambezi Delta channels",
            "Chinde Branch",
            "Inhamissengo Branch"
        ],
        
        majorCities: [
            "Mongu", "Livingstone", "Victoria Falls",
            "Kariba", "Chirundu", "Tete", "Caia", "Quelimane"
        ],
        
        dams: [
            { name: "Kariba Dam", details: "Zimbabwe/Zambia, 1,470 MW, 1959, world's largest reservoir by volume" },
            { name: "Cahora Bassa Dam", details: "Mozambique, 2,075 MW, 1974" },
            { name: "Itezhi-Tezhi Dam", details: "Zambia, 120 MW, on Kafue tributary" },
            { name: "Kafue Gorge Dam", details: "Zambia, 990 MW" }
        ],
        
        basinArea: "1,390,000 km²",
        discharge: "3,400 m³/s",
        
        riverPath: [
            [-11.37, 24.27],   // Source - Zambia
            [-12.50, 23.50],
            [-13.50, 23.00],
            [-14.50, 23.50],
            [-15.00, 23.00],   // Barotse Floodplain
            [-15.50, 23.00],
            [-16.50, 23.50],
            [-17.50, 24.50],
            [-17.92, 25.86],   // Victoria Falls
            [-18.00, 25.90],   // Zimbabwe border
            [-16.52, 28.75],   // Kariba Dam
            [-15.80, 29.50],
            [-15.45, 30.42],   // Chirundu
            [-15.60, 30.85],   // Kafue confluence
            [-15.80, 32.20],
            [-16.15, 33.59],   // Tete
            [-17.50, 34.50],
            [-18.00, 35.50],
            [-18.50, 36.00],
            [-18.88, 36.33]    // Indian Ocean (Mouth)
        ],
        
        tributaryPaths: [
            {
                name: "Kafue River",
                path: [
                    [-12.50, 27.50],
                    [-14.00, 28.00],
                    [-15.60, 30.85]    // Confluence
                ]
            },
            {
                name: "Luangwa River",
                path: [
                    [-10.50, 32.00],
                    [-13.00, 31.50],
                    [-15.60, 30.60]    // Confluence
                ]
            },
            {
                name: "Cuando/Chobe River",
                path: [
                    [-15.00, 20.00],
                    [-17.50, 24.00],
                    [-17.80, 25.20]    // Confluence
                ]
            },
            {
                name: "Shire River",
                path: [
                    [-14.30, 35.20],   // Lake Malawi outlet
                    [-16.00, 35.00],
                    [-17.83, 35.17]    // Confluence
                ]
            }
        ],
        
        distributaryPaths: [
            {
                name: "Zambezi Delta",
                path: [
                    [-18.50, 35.80],
                    [-18.88, 36.33]    // Indian Ocean
                ]
            }
        ],
        
        cityCoordinates: [
            { name: "Mongu", coords: [-15.28, 23.13] },
            { name: "Livingstone", coords: [-17.85, 25.86] },
            { name: "Victoria Falls", coords: [-17.93, 25.83] },
            { name: "Kariba", coords: [-16.52, 28.80] },
            { name: "Chirundu", coords: [-15.98, 28.85] },
            { name: "Tete", coords: [-16.15, 33.59] },
            { name: "Quelimane", coords: [-17.88, 36.89] }
        ],
        
        damCoordinates: [
            { name: "Victoria Falls", coords: [-17.92, 25.85], details: "108 m high - Natural wonder" },
            { name: "Kariba Dam", coords: [-16.52, 28.76], details: "1,470 MW - World's largest reservoir" },
            { name: "Cahora Bassa Dam", coords: [-15.60, 32.70], details: "2,075 MW - Africa's 4th largest" }
        ],
        
        flightLandmarks: [
            { progress: 0, name: "Mwinilunga Source", icon: "🏞️", description: "Wetland source" },
            { progress: 0.15, name: "Barotse Floodplain", icon: "🌿", description: "Vast seasonal wetland" },
            { progress: 0.30, name: "Caprivi Strip", icon: "🛂", description: "Namibia's panhandle" },
            { progress: 0.38, name: "Victoria Falls", icon: "💧", description: "World's largest waterfall" },
            { progress: 0.45, name: "Batoka Gorge", icon: "🏜️", description: "Dramatic canyon below falls" },
            { progress: 0.55, name: "Kariba Dam", icon: "🏗️", description: "Huge reservoir" },
            { progress: 0.65, name: "Kafue Confluence", icon: "🔀", description: "Major tributary" },
            { progress: 0.75, name: "Cahora Bassa Dam", icon: "🏗️", description: "Mozambique dam" },
            { progress: 0.85, name: "Tete", icon: "🏙️", description: "Mozambican city" },
            { progress: 0.95, name: "Zambezi Delta", icon: "🌿", description: "Vast wetland delta" },
            { progress: 1.0, name: "Indian Ocean", icon: "🌊", description: "River mouth" }
        ],
        
        economicImportance: [
            "Victoria Falls - major tourism attraction",
            "Hydroelectric power (Kariba, Cahora Bassa)",
            "Irrigation for agriculture",
            "Fishing industry",
            "Wildlife tourism (safaris)",
            "Transportation corridor"
        ],
        
        environmentalIssues: [
            "Dam impacts on downstream ecosystems",
            "Reduced delta flooding affecting fisheries",
            "Climate change affecting water levels",
            "Invasive water hyacinth",
            "Deforestation in catchment",
            "Kariba Dam structural concerns"
        ],
        
        waterDisputes: [
            {
                title: "Zambezi River Authority",
                description: "Zambia and Zimbabwe jointly manage Kariba Dam through this authority, with periodic tensions."
            },
            {
                title: "ZAMCOM",
                description: "Zambezi Watercourse Commission coordinates water management among all 8 basin countries."
            }
        ],
        
        historicalImportance: [
            {
                title: "David Livingstone",
                description: "Scottish explorer David Livingstone was the first European to see Victoria Falls in 1855, naming them after Queen Victoria."
            },
            {
                title: "Mosi-oa-Tunya",
                description: "The indigenous Kololo name means 'The Smoke That Thunders,' describing the falls' massive spray."
            },
            {
                title: "Colonial Boundary",
                description: "The Zambezi became a boundary between British territories, shaping modern southern African nations."
            }
        ]
    },

    // ========================================
    // 44. GANGES RIVER
    // ========================================
    {
        id: "ganges",
        name: "Ganges River",
        length: 2525,
        continent: "asia",
        image: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=800",
        
        countries: [
            { name: "India", flag: "🇮🇳" },
            { name: "Bangladesh", flag: "🇧🇩" }
        ],
        
        states: [
            "Uttarakhand", "Uttar Pradesh", "Bihar",
            "Jharkhand", "West Bengal", "Rajshahi Division",
            "Dhaka Division", "Khulna Division"
        ],
        
        source: {
            location: "Gangotri Glacier, Himalayas, India",
            type: "Glacial (Gaumukh ice cave)",
            elevation: "3,892 m",
            coordinates: [30.9942, 78.9310]
        },
        
        mouth: {
            location: "Bay of Bengal, Bangladesh",
            type: "Delta",
            delta: "Ganges-Brahmaputra Delta - world's largest delta, 100,000 km²",
            coordinates: [22.0000, 90.0000]
        },
        
        tributaries: {
            leftBank: [
                "Ramganga River",
                "Gomti River",
                "Ghaghara River",
                "Gandak River",
                "Kosi River",
                "Mahananda River"
            ],
            rightBank: [
                "Yamuna River",
                "Son River",
                "Punpun River"
            ]
        },
        
        distributaries: [
            "Hooghly River",
            "Padma River",
            "Meghna River (combined)"
        ],
        
        majorCities: [
            "Haridwar", "Kanpur", "Allahabad (Prayagraj)",
            "Varanasi", "Patna", "Kolkata", "Murshidabad",
            "Rajshahi", "Dhaka"
        ],
        
        dams: [
            { name: "Tehri Dam", details: "Uttarakhand, 1,000 MW, 2006, India's highest dam" },
            { name: "Farakka Barrage", details: "West Bengal, 1975, diverts water to Hooghly" },
            { name: "Bhimgoda Barrage", details: "Haridwar, irrigation" },
            { name: "Narora Barrage", details: "Uttar Pradesh, irrigation" }
        ],
        
        basinArea: "1,080,000 km²",
        discharge: "12,015 m³/s",
        
        riverPath: [
            [30.99, 78.93],    // Source - Gangotri Glacier
            [30.15, 78.17],    // Devprayag (Alaknanda-Bhagirathi confluence)
            [29.96, 78.16],    // Rishikesh
            [29.95, 78.05],    // Haridwar
            [28.50, 79.50],
            [26.45, 80.35],    // Kanpur
            [25.43, 81.85],    // Allahabad
            [25.32, 83.01],    // Varanasi
            [25.60, 85.14],    // Patna
            [25.00, 87.00],
            [24.85, 87.92],    // Rajmahal
            [24.18, 88.28],    // Farakka Barrage
            [24.00, 88.50],
            [23.80, 89.00],
            [23.50, 89.50],
            [23.00, 90.00],
            [22.00, 90.00]     // Bay of Bengal (Mouth)
        ],
        
        tributaryPaths: [
            {
                name: "Yamuna River",
                path: [
                    [31.00, 78.50],    // Yamunotri
                    [28.70, 77.20],    // Delhi
                    [27.20, 78.00],    // Agra
                    [25.43, 81.85]     // Confluence at Allahabad
                ]
            },
            {
                name: "Ghaghara River",
                path: [
                    [30.50, 81.00],    // Nepal/Tibet
                    [27.50, 82.00],
                    [25.75, 84.60]     // Confluence
                ]
            },
            {
                name: "Gandak River",
                path: [
                    [28.50, 84.50],    // Nepal
                    [26.50, 84.50],
                    [25.68, 84.98]     // Confluence
                ]
            },
            {
                name: "Kosi River",
                path: [
                    [28.00, 87.00],    // Nepal
                    [26.50, 86.50],
                    [25.40, 87.20]     // Confluence
                ]
            }
        ],
        
        distributaryPaths: [
            {
                name: "Hooghly River",
                path: [
                    [24.18, 88.28],    // Farakka split
                    [22.57, 88.36],    // Kolkata
                    [21.65, 88.10]     // Bay of Bengal
                ]
            },
            {
                name: "Padma River",
                path: [
                    [24.00, 88.50],
                    [23.50, 89.50],
                    [23.00, 90.40]     // Joins Meghna
                ]
            }
        ],
        
        cityCoordinates: [
            { name: "Haridwar", coords: [29.95, 78.05] },
            { name: "Kanpur", coords: [26.45, 80.35] },
            { name: "Allahabad", coords: [25.43, 81.85] },
            { name: "Varanasi", coords: [25.32, 83.01] },
            { name: "Patna", coords: [25.60, 85.14] },
            { name: "Kolkata", coords: [22.57, 88.36] },
            { name: "Dhaka", coords: [23.81, 90.41] }
        ],
        
        damCoordinates: [
            { name: "Tehri Dam", coords: [30.38, 78.48], details: "1,000 MW - India's highest dam" },
            { name: "Farakka Barrage", coords: [24.80, 87.92], details: "Controversial water diversion" }
        ],
        
        flightLandmarks: [
            { progress: 0, name: "Gangotri Glacier", icon: "🏔️", description: "Sacred glacial source" },
            { progress: 0.05, name: "Devprayag", icon: "🔀", description: "Alaknanda-Bhagirathi confluence" },
            { progress: 0.08, name: "Rishikesh", icon: "🧘", description: "Yoga capital of world" },
            { progress: 0.10, name: "Haridwar", icon: "🛕", description: "Gateway to the Gods" },
            { progress: 0.25, name: "Kanpur", icon: "🏙️", description: "Industrial city" },
            { progress: 0.40, name: "Allahabad (Prayagraj)", icon: "🔀", description: "Yamuna confluence - Triveni Sangam" },
            { progress: 0.50, name: "Varanasi", icon: "🛕", description: "Holiest city - burning ghats" },
            { progress: 0.65, name: "Patna", icon: "🏙️", description: "Bihar capital" },
            { progress: 0.80, name: "Farakka Barrage", icon: "🏗️", description: "Bangladesh diversion" },
            { progress: 0.90, name: "Sundarbans", icon: "🐅", description: "Mangrove tiger habitat" },
            { progress: 1.0, name: "Bay of Bengal", icon: "🌊", description: "Delta mouth" }
        ],
        
        economicImportance: [
            "Supports 400+ million people - most populous river basin",
            "Sacred to 1 billion Hindus",
            "Irrigation for Indo-Gangetic Plain agriculture",
            "Drinking water for major cities",
            "Hydroelectric power (Tehri Dam)",
            "Pilgrimage tourism (Varanasi, Haridwar)"
        ],
        
        environmentalIssues: [
            "One of world's most polluted rivers",
            "Industrial effluent discharge",
            "Sewage from cities (minimal treatment)",
            "Religious waste and cremation remains",
            "Declining water flow",
            "Namami Gange clean-up program ongoing"
        ],
        
        waterDisputes: [
            {
                title: "Farakka Barrage Dispute",
                description: "India-Bangladesh dispute over water diversion; 1996 Ganges Water Sharing Treaty allocates dry-season flow."
            },
            {
                title: "Inter-State Disputes",
                description: "Indian states (UP, Bihar, West Bengal) compete for Ganges water for irrigation and industry."
            }
        ],
        
        historicalImportance: [
            {
                title: "Hindu Sacred River",
                description: "The Ganges (Ganga) is personified as goddess Ganga, and bathing in it is believed to wash away sins."
            },
            {
                title: "Vedic Civilization",
                description: "The Gangetic Plain was home to major Vedic and Buddhist civilizations, including Magadha and Maurya empires."
            },
            {
                title: "Varanasi",
                description: "One of the world's oldest continuously inhabited cities (3,000+ years), Varanasi is the spiritual heart of Hinduism."
            },
            {
                title: "Kumbh Mela",
                description: "The world's largest religious gathering (100+ million pilgrims) occurs at the Ganges confluence at Allahabad."
            }
        ]
    },

    // ========================================
    // 45. MURRAY RIVER
    // ========================================
    {
        id: "murray",
        name: "Murray River",
        length: 2508,
        continent: "oceania",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
        
        countries: [
            { name: "Australia", flag: "🇦🇺" }
        ],
        
        states: [
            "New South Wales", "Victoria", "South Australia"
        ],
        
        source: {
            location: "Australian Alps, near Mount Kosciuszko",
            type: "Mountain streams",
            elevation: "1,430 m",
            coordinates: [-36.5000, 148.1333]
        },
        
        mouth: {
            location: "Southern Ocean, near Goolwa, South Australia",
            type: "Estuary/Lagoon",
            delta: "Murray Mouth - often blocked by sand bars",
            coordinates: [-35.5500, 138.8833]
        },
        
        tributaries: {
            leftBank: [
                "Mitta Mitta River",
                "Kiewa River",
                "Ovens River",
                "Goulburn River",
                "Campaspe River",
                "Loddon River"
            ],
            rightBank: [
                "Murrumbidgee River",
                "Darling River",
                "Lachlan River"
            ]
        },
        
        distributaries: [
            "Murray Mouth channels",
            "Coorong Lagoon"
        ],
        
        majorCities: [
            "Albury", "Wodonga", "Echuca", "Mildura",
            "Renmark", "Murray Bridge", "Adelaide (nearby)"
        ],
        
        dams: [
            { name: "Hume Dam", details: "NSW/Victoria, 1936, 3,038 GL storage" },
            { name: "Dartmouth Dam", details: "Victoria, 1979, 3,906 GL, largest in basin" },
            { name: "Lake Mulwala Weir", details: "NSW/Victoria, 1939, Yarrawonga Weir" },
            { name: "Barrages", details: "5 barrages near mouth, 1940" }
        ],
        
        basinArea: "1,061,469 km²",
        discharge: "767 m³/s (highly variable)",
        
        riverPath: [
            [-36.50, 148.13],   // Source - Australian Alps
            [-36.00, 147.00],
            [-36.08, 146.91],   // Albury-Wodonga
            [-36.00, 146.00],
            [-35.80, 145.00],
            [-36.13, 144.75],   // Echuca
            [-35.50, 144.00],
            [-34.50, 143.00],
            [-34.18, 142.16],   // Mildura
            [-34.00, 141.00],
            [-34.00, 140.50],
            [-34.00, 140.00],   // SA border
            [-34.17, 139.30],   // Renmark
            [-34.50, 139.00],
            [-35.12, 139.27],   // Murray Bridge
            [-35.50, 138.95],
            [-35.55, 138.88]    // Southern Ocean (Mouth)
        ],
        
        tributaryPaths: [
            {
                name: "Darling River",
                path: [
                    [-29.00, 148.50],   // Queensland border
                    [-32.00, 145.00],
                    [-34.08, 141.92]    // Confluence at Wentworth
                ]
            },
            {
                name: "Murrumbidgee River",
                path: [
                    [-35.50, 148.50],   // Snowy Mountains
                    [-35.00, 147.00],
                    [-34.50, 143.50],
                    [-34.72, 143.22]    // Confluence
                ]
            },
            {
                name: "Goulburn River",
                path: [
                    [-37.00, 146.00],
                    [-36.00, 145.00],
                    [-36.03, 144.95]    // Confluence
                ]
            }
        ],
        
        distributaryPaths: [
            {
                name: "Murray Mouth",
                path: [
                    [-35.50, 138.95],
                    [-35.55, 138.88]    // Southern Ocean
                ]
            },
            {
                name: "Coorong",
                path: [
                    [-35.55, 138.90],
                    [-36.00, 139.50]    // Coastal lagoon
                ]
            }
        ],
        
        cityCoordinates: [
            { name: "Albury", coords: [-36.08, 146.92] },
            { name: "Wodonga", coords: [-36.12, 146.89] },
            { name: "Echuca", coords: [-36.13, 144.75] },
            { name: "Mildura", coords: [-34.18, 142.16] },
            { name: "Renmark", coords: [-34.17, 140.74] },
            { name: "Murray Bridge", coords: [-35.12, 139.27] },
            { name: "Adelaide", coords: [-34.93, 138.60] }
        ],
        
        damCoordinates: [
            { name: "Hume Dam", coords: [-36.11, 147.03], details: "3,038 GL - Major storage" },
            { name: "Dartmouth Dam", coords: [-36.54, 147.50], details: "3,906 GL - Largest in basin" },
            { name: "Yarrawonga Weir", coords: [-36.03, 146.00], details: "Creates Lake Mulwala" }
        ],
        
        flightLandmarks: [
            { progress: 0, name: "Australian Alps", icon: "🏔️", description: "Snowy Mountains source" },
            { progress: 0.10, name: "Hume Dam", icon: "🏗️", description: "Major water storage" },
            { progress: 0.15, name: "Albury-Wodonga", icon: "🏙️", description: "Twin cities on border" },
            { progress: 0.30, name: "Echuca", icon: "🚢", description: "Historic paddle steamer port" },
            { progress: 0.45, name: "Darling Junction", icon: "🔀", description: "Wentworth confluence" },
            { progress: 0.55, name: "Mildura", icon: "🏙️", description: "Sunraysia region" },
            { progress: 0.70, name: "SA Border", icon: "🛂", description: "State boundary" },
            { progress: 0.80, name: "Renmark", icon: "🍇", description: "Wine and citrus region" },
            { progress: 0.90, name: "Murray Bridge", icon: "🌉", description: "River crossing" },
            { progress: 0.95, name: "Coorong", icon: "🦩", description: "Ramsar wetland" },
            { progress: 1.0, name: "Southern Ocean", icon: "🌊", description: "Murray Mouth" }
        ],
        
        economicImportance: [
            "Australia's most important river system",
            "Irrigates 40% of Australia's farms",
            "Fruit, wine, and rice production",
            "Drinking water for Adelaide (1.2 million)",
            "Paddle steamer heritage tourism",
            "Fishing and recreation"
        ],
        
        environmentalIssues: [
            "Chronic over-allocation of water",
            "Drought and climate change impacts",
            "Salinity problems",
            "Murray mouth often closes due to low flows",
            "Coorong wetland degradation",
            "Murray Darling Basin Plan controversies"
        ],
        
        waterDisputes: [
            {
                title: "Murray-Darling Basin Plan",
                description: "Controversial 2012 plan to return water to environment faces opposition from irrigators and environmental groups alike."
            },
            {
                title: "State Water Sharing",
                description: "NSW, Victoria, and South Australia compete for limited water, with SA at the downstream end suffering most."
            }
        ],
        
        historicalImportance: [
            {
                title: "Aboriginal Heritage",
                description: "The Murray has been home to Aboriginal peoples for over 40,000 years, with the Ngarrindjeri, Yorta Yorta, and other nations."
            },
            {
                title: "Paddle Steamer Era",
                description: "From the 1850s-1920s, paddle steamers made the Murray a major transport route, carrying wool and supplies."
            },
            {
                title: "Snowy Mountains Scheme",
                description: "The 1949-1974 hydro scheme diverted water from east-flowing rivers to the Murray system."
            }
        ]
    },
      // ========================================
    // 46. SALADO RIVER (ARGENTINA)
    // ========================================
    {
        id: "salado-argentina",
        name: "Salado River",
        length: 2355,
        continent: "south-america",
        image: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=800",
        
        countries: [
            { name: "Argentina", flag: "🇦🇷" }
        ],
        
        states: [
            "Salta", "Santiago del Estero", "Santa Fe"
        ],
        
        source: {
            location: "Andes Mountains, Salta Province, Argentina",
            type: "Mountain streams",
            elevation: "4,000 m",
            coordinates: [-24.5000, -65.5000]
        },
        
        mouth: {
            location: "Paraná River, Santa Fe Province",
            type: "Confluence",
            delta: "Joins Paraná River near Santa Fe city",
            coordinates: [-31.6500, -60.7167]
        },
        
        tributaries: {
            leftBank: [
                "Río Horcones",
                "Río Urueña",
                "Río Dulce (intermittent connection)"
            ],
            rightBank: [
                "Río Juramento",
                "Río del Valle",
                "Río Calchaquí"
            ]
        },
        
        distributaries: [
            "Salado del Norte channels",
            "Bañados del Saladillo"
        ],
        
        majorCities: [
            "Salta", "Metán", "Santiago del Estero",
            "Añatuya", "Tostado", "Vera", "Santa Fe"
        ],
        
        dams: [
            { name: "El Tunal Dam", details: "Salta, irrigation and flood control" },
            { name: "Cabra Corral Dam", details: "Salta, 102 MW, 1973" },
            { name: "El Limón Dam", details: "Santiago del Estero, irrigation" }
        ],
        
        basinArea: "160,000 km²",
        discharge: "100 m³/s (highly seasonal)",
        
        riverPath: [
            [-24.50, -65.50],   // Source - Andes, Salta
            [-25.00, -65.00],
            [-25.27, -64.97],   // Near Salta city
            [-26.00, -64.50],
            [-26.50, -64.00],
            [-27.00, -63.50],
            [-27.78, -64.26],   // Santiago del Estero
            [-28.50, -63.50],
            [-29.00, -62.50],
            [-29.50, -61.50],
            [-30.00, -61.00],
            [-30.50, -60.80],
            [-31.00, -60.75],
            [-31.65, -60.72]    // Paraná River (Mouth)
        ],
        
        tributaryPaths: [
            {
                name: "Río Juramento",
                path: [
                    [-24.00, -66.00],
                    [-25.00, -65.50],
                    [-25.50, -65.00]   // Confluence
                ]
            },
            {
                name: "Río Calchaquí",
                path: [
                    [-24.50, -66.50],
                    [-25.00, -65.80],
                    [-25.27, -65.50]   // Confluence
                ]
            }
        ],
        
        distributaryPaths: [
            {
                name: "Salado Channels",
                path: [
                    [-31.50, -60.75],
                    [-31.65, -60.72]   // Paraná
                ]
            }
        ],
        
        cityCoordinates: [
            { name: "Salta", coords: [-24.79, -65.41] },
            { name: "Metán", coords: [-25.50, -64.97] },
            { name: "Santiago del Estero", coords: [-27.78, -64.26] },
            { name: "Añatuya", coords: [-28.46, -62.83] },
            { name: "Tostado", coords: [-29.23, -61.77] },
            { name: "Santa Fe", coords: [-31.63, -60.70] }
        ],
        
        damCoordinates: [
            { name: "Cabra Corral Dam", coords: [-25.28, -65.33], details: "102 MW - Salta Province" },
            { name: "El Tunal Dam", coords: [-25.00, -64.80], details: "Irrigation reservoir" }
        ],
        
        flightLandmarks: [
            { progress: 0, name: "Andes Mountains", icon: "🏔️", description: "Source in Salta" },
            { progress: 0.10, name: "Cabra Corral Reservoir", icon: "🌊", description: "Major dam" },
            { progress: 0.15, name: "Salta", icon: "🏙️", description: "Provincial capital" },
            { progress: 0.30, name: "Metán", icon: "🏘️", description: "Agricultural town" },
            { progress: 0.45, name: "Santiago del Estero", icon: "🏙️", description: "Argentina's oldest city" },
            { progress: 0.60, name: "Chaco Region", icon: "🌳", description: "Semi-arid plains" },
            { progress: 0.75, name: "Santa Fe Province", icon: "🌾", description: "Agricultural heartland" },
            { progress: 0.90, name: "Bañados del Saladillo", icon: "🌿", description: "Wetlands" },
            { progress: 1.0, name: "Paraná River", icon: "🌊", description: "Confluence" }
        ],
        
        economicImportance: [
            "Irrigation for agriculture in arid northwest",
            "Hydroelectric power (Cabra Corral)",
            "Cattle ranching water supply",
            "Cotton and soybean cultivation",
            "Municipal water supply",
            "Groundwater recharge"
        ],
        
        environmentalIssues: [
            "Severe droughts and intermittent flow",
            "Salinization of soils",
            "Deforestation in Chaco region",
            "Overgrazing impacts",
            "Flood-drought cycle intensification",
            "Agricultural pollution"
        ],
        
        waterDisputes: [
            {
                title: "Inter-Provincial Water Sharing",
                description: "Salta, Santiago del Estero, and Santa Fe provinces negotiate water allocation during droughts."
            }
        ],
        
        historicalImportance: [
            {
                title: "Colonial Trade Route",
                description: "The Salado valley was a key route connecting the Andes silver mines to Buenos Aires during Spanish colonial times."
            },
            {
                title: "Indigenous Peoples",
                description: "Traditional territory of Diaguita, Tonocotés, and Wichí peoples who used the river for irrigation."
            },
            {
                title: "Santiago del Estero",
                description: "Founded in 1553, it's the oldest continuously inhabited city in Argentina, dependent on the Salado."
            }
        ]
    },

    // ========================================
    // 47. ARKANSAS RIVER
    // ========================================
    {
        id: "arkansas",
        name: "Arkansas River",
        length: 2348,
        continent: "north-america",
        image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800",
        
        countries: [
            { name: "United States", flag: "🇺🇸" }
        ],
        
        states: [
            "Colorado", "Kansas", "Oklahoma", "Arkansas"
        ],
        
        source: {
            location: "Near Leadville, Colorado, Rocky Mountains",
            type: "Mountain springs",
            elevation: "3,048 m",
            coordinates: [39.3500, -106.3333]
        },
        
        mouth: {
            location: "Mississippi River, Arkansas",
            type: "Confluence",
            delta: "Joins Mississippi near Napoleon, Arkansas",
            coordinates: [33.6667, -91.0500]
        },
        
        tributaries: {
            leftBank: [
                "Purgatoire River",
                "Canadian River",
                "Poteau River",
                "Illinois River"
            ],
            rightBank: [
                "Fountain Creek",
                "Ninnescah River",
                "Salt Fork",
                "Cimarron River",
                "Verdigris River",
                "Neosho River"
            ]
        },
        
        distributaries: [
            "Arkansas River Navigation Channel"
        ],
        
        majorCities: [
            "Leadville", "Pueblo", "La Junta", "Garden City",
            "Dodge City", "Wichita", "Tulsa", "Fort Smith",
            "Little Rock", "Pine Bluff"
        ],
        
        dams: [
            { name: "Pueblo Dam", details: "Colorado, 1975, flood control" },
            { name: "John Martin Dam", details: "Colorado, 1948, irrigation" },
            { name: "Keystone Dam", details: "Oklahoma, 70 MW, 1964" },
            { name: "Dardanelle Dam", details: "Arkansas, 124 MW, 1969" }
        ],
        
        basinArea: "505,000 km²",
        discharge: "1,128 m³/s",
        
        riverPath: [
            [39.35, -106.33],   // Source - Leadville, CO
            [39.00, -105.50],
            [38.50, -105.00],
            [38.27, -104.61],   // Pueblo
            [38.00, -103.50],   // La Junta
            [38.00, -102.00],
            [38.00, -101.00],   // Garden City
            [37.75, -100.02],   // Dodge City
            [37.50, -98.50],
            [37.69, -97.34],    // Wichita
            [37.00, -96.00],
            [36.50, -96.00],
            [36.15, -95.99],    // Tulsa
            [35.50, -95.00],
            [35.39, -94.42],    // Fort Smith
            [35.00, -93.50],
            [34.73, -92.29],    // Little Rock
            [34.20, -91.50],
            [33.67, -91.05]     // Mississippi River (Mouth)
        ],
        
        tributaryPaths: [
            {
                name: "Canadian River",
                path: [
                    [36.50, -105.00],   // New Mexico
                    [35.50, -99.00],
                    [35.30, -95.00]     // Confluence
                ]
            },
            {
                name: "Cimarron River",
                path: [
                    [37.00, -104.00],   // New Mexico
                    [37.00, -98.00],
                    [36.10, -96.70]     // Confluence at Keystone Lake
                ]
            },
            {
                name: "Verdigris River",
                path: [
                    [38.00, -96.50],    // Kansas
                    [36.50, -95.80],
                    [36.10, -95.90]     // Confluence
                ]
            },
            {
                name: "Neosho River",
                path: [
                    [38.50, -96.00],
                    [37.00, -95.00],
                    [35.70, -95.30]     // Confluence
                ]
            }
        ],
        
        distributaryPaths: [
            {
                name: "McClellan-Kerr Navigation",
                path: [
                    [35.39, -94.42],   // Fort Smith
                    [33.67, -91.05]    // Mississippi
                ]
            }
        ],
        
        cityCoordinates: [
            { name: "Leadville", coords: [39.25, -106.29] },
            { name: "Pueblo", coords: [38.27, -104.61] },
            { name: "Dodge City", coords: [37.75, -100.02] },
            { name: "Wichita", coords: [37.69, -97.34] },
            { name: "Tulsa", coords: [36.15, -95.99] },
            { name: "Fort Smith", coords: [35.39, -94.42] },
            { name: "Little Rock", coords: [34.73, -92.29] }
        ],
        
        damCoordinates: [
            { name: "Pueblo Dam", coords: [38.27, -104.70], details: "Flood control reservoir" },
            { name: "John Martin Dam", coords: [38.07, -102.93], details: "Irrigation reservoir" },
            { name: "Keystone Dam", coords: [36.15, -96.25], details: "70 MW - Tulsa water supply" }
        ],
        
        flightLandmarks: [
            { progress: 0, name: "Rocky Mountains", icon: "🏔️", description: "Source near Leadville" },
            { progress: 0.05, name: "Royal Gorge", icon: "🏜️", description: "Dramatic canyon" },
            { progress: 0.12, name: "Pueblo", icon: "🏙️", description: "Steel city of the West" },
            { progress: 0.25, name: "Great Plains Begin", icon: "🌾", description: "River enters plains" },
            { progress: 0.35, name: "Dodge City", icon: "🤠", description: "Wild West legend" },
            { progress: 0.50, name: "Wichita", icon: "🏙️", description: "Kansas largest city" },
            { progress: 0.65, name: "Tulsa", icon: "🏙️", description: "Oklahoma's second city" },
            { progress: 0.75, name: "Fort Smith", icon: "🏛️", description: "Historic border town" },
            { progress: 0.85, name: "Little Rock", icon: "🏙️", description: "Arkansas capital" },
            { progress: 1.0, name: "Mississippi River", icon: "🌊", description: "Confluence" }
        ],
        
        economicImportance: [
            "Major tributary of Mississippi River system",
            "McClellan-Kerr Navigation System (shipping)",
            "Irrigation for Great Plains agriculture",
            "Municipal water for cities",
            "Whitewater rafting tourism (Colorado)",
            "Oil and gas industry"
        ],
        
        environmentalIssues: [
            "Severe depletion in Kansas (often dry)",
            "Over-extraction for irrigation",
            "Kansas-Colorado water disputes",
            "Groundwater decline (Ogallala Aquifer)",
            "Channel modification impacts",
            "Urban pollution near cities"
        ],
        
        waterDisputes: [
            {
                title: "Kansas v. Colorado",
                description: "Century-long dispute over Arkansas River water; 1949 compact and ongoing litigation over violations."
            },
            {
                title: "Kansas-Oklahoma Dispute",
                description: "Disagreements over water quality and quantity crossing state lines."
            }
        ],
        
        historicalImportance: [
            {
                title: "Santa Fe Trail",
                description: "The Arkansas River valley was a major portion of the Santa Fe Trail, America's first commercial highway."
            },
            {
                title: "Dodge City & Wild West",
                description: "Dodge City on the Arkansas became legendary as a wild cattle town in the 1870s-1880s."
            },
            {
                title: "US-Mexico Boundary",
                description: "The Arkansas River once formed part of the US-Spanish/Mexican boundary until 1819."
            },
            {
                title: "Civil War",
                description: "The river was strategically important during the Civil War, with battles at Fort Smith and elsewhere."
            }
        ]
    },

    // ========================================
    // 48. ORINOCO RIVER
    // ========================================
    {
        id: "orinoco",
        name: "Orinoco River",
        length: 2140,
        continent: "south-america",
        image: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=800",
        
        countries: [
            { name: "Venezuela", flag: "🇻🇪" },
            { name: "Colombia", flag: "🇨🇴" }
        ],
        
        states: [
            "Amazonas State", "Bolívar State", "Apure State",
            "Guárico State", "Anzoátegui State", "Monagas State",
            "Delta Amacuro", "Vichada Department"
        ],
        
        source: {
            location: "Sierra Parima, Venezuela (Cerro Delgado Chalbaud)",
            type: "Mountain springs/Tepui highlands",
            elevation: "1,047 m",
            coordinates: [2.1833, -63.3333]
        },
        
        mouth: {
            location: "Atlantic Ocean, Venezuela",
            type: "Delta",
            delta: "Orinoco Delta - 25,000 km², 300+ channels",
            coordinates: [8.5000, -60.0000]
        },
        
        tributaries: {
            leftBank: [
                "Ventuari River",
                "Caura River",
                "Caroní River"
            ],
            rightBank: [
                "Guaviare River",
                "Vichada River",
                "Meta River",
                "Apure River",
                "Arauca River"
            ]
        },
        
        distributaries: [
            "Caño Manamo",
            "Caño Macareo",
            "Río Grande",
            "Caño Araguao"
        ],
        
        majorCities: [
            "Puerto Ayacucho", "Caicara del Orinoco",
            "Ciudad Guayana", "Ciudad Bolívar", "Maturín",
            "Tucupita", "Barrancas"
        ],
        
        dams: [
            { name: "Guri Dam (Simón Bolívar)", details: "Venezuela, 10,235 MW, 1986, world's 4th largest" },
            { name: "Caruachi Dam", details: "Venezuela, 2,280 MW, 2006" },
            { name: "Macagua Dam", details: "Venezuela, 2,548 MW, 1996" },
            { name: "Tocoma Dam", details: "Venezuela, 2,160 MW, under construction" }
        ],
        
        basinArea: "880,000 km²",
        discharge: "30,000 m³/s",
        
        riverPath: [
            [2.18, -63.33],    // Source - Sierra Parima
            [2.50, -65.00],
            [3.00, -66.00],
            [3.50, -67.00],
            [4.00, -67.50],
            [5.04, -67.76],    // Puerto Ayacucho
            [6.00, -67.50],
            [6.50, -67.00],
            [7.00, -66.00],
            [7.60, -66.17],    // Caicara del Orinoco
            [8.00, -64.00],
            [8.35, -62.70],    // Ciudad Bolívar
            [8.37, -62.64],    // Ciudad Guayana
            [8.50, -61.50],
            [8.80, -60.50],
            [9.00, -60.00],
            [8.50, -60.00]     // Atlantic Ocean (Mouth)
        ],
        
        tributaryPaths: [
            {
                name: "Caroní River",
                path: [
                    [5.50, -61.50],
                    [7.00, -62.00],
                    [8.37, -62.64]     // Confluence at Ciudad Guayana
                ]
            },
            {
                name: "Apure River",
                path: [
                    [7.00, -72.00],    // Colombian Andes
                    [7.50, -69.00],
                    [7.60, -66.50]     // Confluence
                ]
            },
            {
                name: "Meta River",
                path: [
                    [4.00, -73.00],    // Colombia
                    [5.00, -70.00],
                    [6.20, -67.50]     // Confluence
                ]
            },
            {
                name: "Caura River",
                path: [
                    [4.50, -64.50],
                    [6.50, -64.50],
                    [7.40, -65.00]     // Confluence
                ]
            }
        ],
        
        distributaryPaths: [
            {
                name: "Caño Manamo",
                path: [
                    [8.50, -61.00],
                    [9.50, -62.00]     // Gulf of Paria
                ]
            },
            {
                name: "Río Grande",
                path: [
                    [8.50, -60.50],
                    [8.50, -60.00]     // Atlantic
                ]
            }
        ],
        
        cityCoordinates: [
            { name: "Puerto Ayacucho", coords: [5.66, -67.63] },
            { name: "Caicara del Orinoco", coords: [7.63, -66.19] },
            { name: "Ciudad Bolívar", coords: [8.13, -63.55] },
            { name: "Ciudad Guayana", coords: [8.37, -62.64] },
            { name: "Maturín", coords: [9.75, -63.18] },
            { name: "Tucupita", coords: [9.07, -62.05] }
        ],
        
        damCoordinates: [
            { name: "Guri Dam", coords: [7.77, -62.99], details: "10,235 MW - World's 4th largest" },
            { name: "Caruachi Dam", coords: [7.95, -62.90], details: "2,280 MW hydroelectric" },
            { name: "Macagua Dam", coords: [8.27, -62.70], details: "2,548 MW hydroelectric" }
        ],
        
        flightLandmarks: [
            { progress: 0, name: "Sierra Parima", icon: "🏔️", description: "Remote source region" },
            { progress: 0.10, name: "Casiquiare Canal", icon: "🔀", description: "Natural Amazon connection" },
            { progress: 0.25, name: "Puerto Ayacucho", icon: "🏙️", description: "Amazonas capital" },
            { progress: 0.40, name: "Llanos Plains", icon: "🌾", description: "Vast savanna" },
            { progress: 0.50, name: "Apure Confluence", icon: "🔀", description: "Major tributary" },
            { progress: 0.60, name: "Caroní Confluence", icon: "🔀", description: "Hydropower river" },
            { progress: 0.65, name: "Guri Dam", icon: "🏗️", description: "Massive hydroelectric" },
            { progress: 0.75, name: "Ciudad Bolívar", icon: "🏙️", description: "Historic city" },
            { progress: 0.90, name: "Orinoco Delta", icon: "🌿", description: "Vast wetland" },
            { progress: 1.0, name: "Atlantic Ocean", icon: "🌊", description: "Delta mouths" }
        ],
        
        economicImportance: [
            "Hydroelectric power (73% of Venezuela's electricity)",
            "Orinoco Oil Belt - world's largest oil deposits",
            "Iron ore mining (Cerro Bolívar)",
            "Bauxite and gold mining",
            "River transportation",
            "Fishing industry"
        ],
        
        environmentalIssues: [
            "Oil industry pollution",
            "Mercury contamination from gold mining",
            "Deforestation in basin",
            "Dam impacts on fish migration",
            "Delta ecosystem degradation",
            "Economic crisis affecting environmental management"
        ],
        
        waterDisputes: [
            {
                title: "Colombia-Venezuela Border",
                description: "The Orinoco basin straddles the border; no formal water treaty exists between the countries."
            }
        ],
        
        historicalImportance: [
            {
                title: "Columbus Discovery",
                description: "Christopher Columbus encountered the Orinoco Delta on his third voyage (1498), realizing it indicated a continent."
            },
            {
                title: "El Dorado Legend",
                description: "The Orinoco basin was the focus of Spanish searches for the mythical golden city of El Dorado."
            },
            {
                title: "Humboldt's Exploration",
                description: "Alexander von Humboldt explored the Orinoco and discovered the Casiquiare Canal connecting to the Amazon (1800)."
            },
            {
                title: "Simón Bolívar",
                description: "Ciudad Bolívar on the Orinoco was the base for Bolívar's liberation campaigns across South America."
            }
        ]
    },

    // ========================================
    // 49. XINGU RIVER
    // ========================================
    {
        id: "xingu",
        name: "Xingu River",
        length: 2100,
        continent: "south-america",
        image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=800",
        
        countries: [
            { name: "Brazil", flag: "🇧🇷" }
        ],
        
        states: [
            "Mato Grosso", "Pará"
        ],
        
        source: {
            location: "Serra do Roncador, Mato Grosso, Brazil",
            type: "Cerrado/rainforest transition springs",
            elevation: "600 m",
            coordinates: [-13.0000, -53.5000]
        },
        
        mouth: {
            location: "Amazon River, near Porto de Moz, Pará",
            type: "Confluence",
            delta: "Wide braided channels entering Amazon",
            coordinates: [-1.7333, -52.2167]
        },
        
        tributaries: {
            leftBank: [
                "Rio Suiá-Miçu",
                "Rio Fresco",
                "Rio Bacajá"
            ],
            rightBank: [
                "Rio Curisevo",
                "Rio Culuene",
                "Rio Iriri"
            ]
        },
        
        distributaries: [
            "Xingu channels near Amazon confluence"
        ],
        
        majorCities: [
            "Canarana", "São Félix do Xingu",
            "Altamira", "Vitória do Xingu", "Porto de Moz"
        ],
        
        dams: [
            { name: "Belo Monte Dam", details: "Pará, 11,233 MW, 2019, world's 4th largest hydro" },
            { name: "Pimental Dam", details: "Part of Belo Monte Complex" }
        ],
        
        basinArea: "509,685 km²",
        discharge: "9,700 m³/s",
        
        riverPath: [
            [-13.00, -53.50],   // Source - Serra do Roncador
            [-12.50, -53.00],
            [-12.00, -53.00],
            [-11.50, -53.20],
            [-11.00, -53.00],
            [-10.00, -52.80],
            [-9.00, -52.50],
            [-8.00, -52.50],
            [-6.75, -52.03],    // São Félix do Xingu
            [-5.50, -52.30],
            [-4.50, -52.40],
            [-3.50, -52.30],
            [-3.20, -52.21],    // Altamira
            [-3.15, -51.95],    // Belo Monte Dam
            [-2.50, -52.00],
            [-1.73, -52.22]     // Amazon River (Mouth)
        ],
        
        tributaryPaths: [
            {
                name: "Rio Iriri",
                path: [
                    [-5.50, -54.00],
                    [-4.50, -53.50],
                    [-3.80, -52.50]    // Confluence
                ]
            },
            {
                name: "Rio Fresco",
                path: [
                    [-8.00, -50.50],
                    [-7.00, -51.00],
                    [-6.00, -51.50]    // Confluence
                ]
            },
            {
                name: "Rio Bacajá",
                path: [
                    [-4.00, -51.00],
                    [-3.50, -51.50],
                    [-3.25, -51.80]    // Confluence
                ]
            }
        ],
        
        distributaryPaths: [
            {
                name: "Xingu Mouth",
                path: [
                    [-2.00, -52.10],
                    [-1.73, -52.22]    // Amazon
                ]
            }
        ],
        
        cityCoordinates: [
            { name: "Canarana", coords: [-13.55, -52.27] },
            { name: "São Félix do Xingu", coords: [-6.64, -51.99] },
            { name: "Altamira", coords: [-3.20, -52.21] },
            { name: "Vitória do Xingu", coords: [-2.88, -52.01] },
            { name: "Porto de Moz", coords: [-1.75, -52.24] }
        ],
        
        damCoordinates: [
            { name: "Belo Monte Dam", coords: [-3.12, -51.78], details: "11,233 MW - World's 4th largest" }
        ],
        
        flightLandmarks: [
            { progress: 0, name: "Serra do Roncador", icon: "🏔️", description: "Source region" },
            { progress: 0.15, name: "Xingu Indigenous Park", icon: "🏞️", description: "Protected territory" },
            { progress: 0.30, name: "Cerrado-Amazon Transition", icon: "🌳", description: "Biome change" },
            { progress: 0.45, name: "São Félix do Xingu", icon: "🏘️", description: "Cattle frontier" },
            { progress: 0.60, name: "Iriri Confluence", icon: "🔀", description: "Major tributary" },
            { progress: 0.75, name: "Volta Grande", icon: "🏞️", description: "Big Bend region" },
            { progress: 0.82, name: "Belo Monte Dam", icon: "🏗️", description: "Controversial mega-dam" },
            { progress: 0.88, name: "Altamira", icon: "🏙️", description: "Trans-Amazon city" },
            { progress: 1.0, name: "Amazon River", icon: "🌊", description: "Confluence" }
        ],
        
        economicImportance: [
            "Hydroelectric power (Belo Monte - 11,233 MW)",
            "Xingu Indigenous Park protection",
            "Fishing communities",
            "Brazil nut harvesting",
            "Ecotourism potential",
            "Scientific research"
        ],
        
        environmentalIssues: [
            "Belo Monte Dam controversy - displaced communities",
            "Deforestation from cattle ranching",
            "Illegal gold mining",
            "Fire impacts from land clearing",
            "Reduced flow in Volta Grande",
            "Indigenous rights concerns"
        ],
        
        waterDisputes: [
            {
                title: "Belo Monte Dam Controversy",
                description: "The dam faced massive opposition from indigenous groups and environmentalists; legal battles continue over operating conditions."
            }
        ],
        
        historicalImportance: [
            {
                title: "Indigenous Territory",
                description: "The Xingu basin is home to 16 indigenous groups who have lived there for thousands of years, protected since 1961."
            },
            {
                title: "Villas-Bôas Brothers",
                description: "Brazilian explorers who helped create Xingu Indigenous Park (1961) to protect native peoples."
            },
            {
                title: "Kayapó Resistance",
                description: "The Kayapó people have become internationally known for their resistance to dams and deforestation."
            }
        ]
    },

    // ========================================
    // 50. SENEGAL RIVER
    // ========================================
    {
        id: "senegal",
        name: "Senegal River",
        length: 1790,
        continent: "africa",
        image: "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=800",
        
        countries: [
            { name: "Guinea", flag: "🇬🇳" },
            { name: "Mali", flag: "🇲🇱" },
            { name: "Senegal", flag: "🇸🇳" },
            { name: "Mauritania", flag: "🇲🇷" }
        ],
        
        states: [
            "Faranah Region", "Kayes Region", "Tambacounda Region",
            "Matam Region", "Saint-Louis Region", "Trarza Region"
        ],
        
        source: {
            location: "Fouta Djallon Highlands, Guinea",
            type: "Highland springs (Bafing and Bakoye confluence)",
            elevation: "1,400 m",
            coordinates: [11.5000, -11.5000]
        },
        
        mouth: {
            location: "Atlantic Ocean, Saint-Louis, Senegal",
            type: "Estuary/Delta",
            delta: "Senegal River Delta - Djoudj National Park",
            coordinates: [15.9500, -16.5000]
        },
        
        tributaries: {
            leftBank: [
                "Bafing River",
                "Bakoye River",
                "Karakoro River"
            ],
            rightBank: [
                "Falémé River",
                "Gorgol River"
            ]
        },
        
        distributaries: [
            "Senegal Delta channels",
            "Langue de Barbarie"
        ],
        
        majorCities: [
            "Manantali", "Kayes", "Bakel", "Matam",
            "Podor", "Richard-Toll", "Saint-Louis", "Rosso"
        ],
        
        dams: [
            { name: "Manantali Dam", details: "Mali, 200 MW, 1988, main storage" },
            { name: "Diama Dam", details: "Senegal/Mauritania, 1986, salt barrier" },
            { name: "Félou Hydroelectric", details: "60 MW, 2013" },
            { name: "Gouina Dam", details: "140 MW, 2018" }
        ],
        
        basinArea: "337,000 km²",
        discharge: "680 m³/s (highly seasonal)",
        
        riverPath: [
            [11.50, -11.50],   // Source - Fouta Djallon
            [12.00, -11.00],
            [12.50, -10.50],
            [13.00, -11.00],
            [13.42, -11.44],   // Manantali Dam
            [14.00, -11.50],
            [14.44, -11.44],   // Kayes
            [14.90, -12.46],   // Bakel
            [15.00, -13.00],
            [15.25, -13.25],   // Matam
            [15.50, -13.50],
            [15.85, -14.10],
            [16.10, -14.97],   // Podor
            [16.32, -15.70],   // Richard-Toll
            [16.40, -15.90],
            [16.03, -16.50],   // Saint-Louis
            [15.95, -16.50]    // Atlantic Ocean (Mouth)
        ],
        
        tributaryPaths: [
            {
                name: "Bafing River",
                path: [
                    [10.50, -10.50],   // Guinea highlands
                    [12.00, -10.80],
                    [13.00, -11.00]    // Confluence
                ]
            },
            {
                name: "Bakoye River",
                path: [
                    [12.00, -9.00],    // Mali
                    [13.00, -10.00],
                    [13.00, -11.00]    // Confluence
                ]
            },
            {
                name: "Falémé River",
                path: [
                    [11.50, -11.00],   // Guinea
                    [13.00, -11.50],
                    [14.50, -12.20]    // Confluence
                ]
            }
        ],
        
        distributaryPaths: [
            {
                name: "Senegal Delta",
                path: [
                    [16.00, -16.30],
                    [15.95, -16.50]    // Atlantic
                ]
            }
        ],
        
        cityCoordinates: [
            { name: "Manantali", coords: [13.18, -10.42] },
            { name: "Kayes", coords: [14.45, -11.43] },
            { name: "Bakel", coords: [14.90, -12.46] },
            { name: "Matam", coords: [15.66, -13.25] },
            { name: "Richard-Toll", coords: [16.46, -15.70] },
            { name: "Saint-Louis", coords: [16.02, -16.50] },
            { name: "Rosso", coords: [16.51, -15.81] }
        ],
        
        damCoordinates: [
            { name: "Manantali Dam", coords: [13.20, -10.42], details: "200 MW - Main storage reservoir" },
            { name: "Diama Dam", coords: [16.21, -16.40], details: "Salt water barrier" },
            { name: "Félou Dam", coords: [14.35, -11.38], details: "60 MW hydroelectric" }
        ],
        
        flightLandmarks: [
            { progress: 0, name: "Fouta Djallon", icon: "🏔️", description: "Guinea highlands source" },
            { progress: 0.15, name: "Manantali Dam", icon: "🏗️", description: "Main reservoir" },
            { progress: 0.25, name: "Kayes", icon: "🏙️", description: "Mali river town" },
            { progress: 0.35, name: "Félou Falls", icon: "💧", description: "Historic falls, now dammed" },
            { progress: 0.45, name: "Bakel", icon: "🏘️", description: "Border crossing" },
            { progress: 0.55, name: "Senegal-Mauritania Border", icon: "🛂", description: "River forms boundary" },
            { progress: 0.70, name: "Matam", icon: "🏘️", description: "Senegalese town" },
            { progress: 0.85, name: "Richard-Toll", icon: "🏭", description: "Sugar industry" },
            { progress: 0.92, name: "Djoudj National Park", icon: "🦩", description: "Bird sanctuary UNESCO" },
            { progress: 0.98, name: "Saint-Louis", icon: "🏛️", description: "UNESCO colonial city" },
            { progress: 1.0, name: "Atlantic Ocean", icon: "🌊", description: "River mouth" }
        ],
        
        economicImportance: [
            "OMVS - Organization for the Development of the Senegal River",
            "Irrigation for rice and sugarcane",
            "Hydroelectric power (Manantali, Félou)",
            "Navigation corridor",
            "Fishing industry",
            "International cooperation model"
        ],
        
        environmentalIssues: [
            "Dam impacts on traditional flood recession agriculture",
            "Bilharzia (schistosomiasis) spread after dams",
            "Invasive aquatic plants (Typha, Salvinia)",
            "Reduced sediment to delta",
            "Salinization concerns",
            "Climate change and drought"
        ],
        
        waterDisputes: [
            {
                title: "OMVS Cooperation",
                description: "The Organization for the Development of the Senegal River (OMVS) is a model for African transboundary cooperation."
            },
            {
                title: "1989 Senegal-Mauritania Conflict",
                description: "Ethnic tensions along the river led to violent conflict in 1989, displacing thousands; relations have since normalized."
            }
        ],
        
        historicalImportance: [
            {
                title: "Ancient Ghana Empire",
                description: "The Senegal River basin was part of the medieval Ghana Empire, a major gold-trading civilization."
            },
            {
                title: "French Colonial Capital",
                description: "Saint-Louis at the river mouth was the capital of French West Africa, now a UNESCO World Heritage Site."
            },
            {
                title: "Slave Trade",
                description: "The river was a route for the trans-Saharan slave trade and later the Atlantic slave trade."
            },
            {
                title: "OMVS Formation",
                description: "The OMVS (1972) created by Senegal, Mali, and Mauritania is one of Africa's oldest river basin organizations."
            }
        ]
    }
];

// ============================================================
// EXPORT RIVERS DATA 5
// ============================================================

if (typeof window !== 'undefined') {
    window.RIVERS_DATA_5 = RIVERS_DATA_5;
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = RIVERS_DATA_5;
}

console.log('✅ Rivers Data 5 loaded:', RIVERS_DATA_5.length, 'rivers (41-50)');
