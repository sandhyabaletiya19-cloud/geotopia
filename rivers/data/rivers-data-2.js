/**
 * GEOTOPIA - Rivers Data File 2
 * Rivers 11-20
 * Lena, Mekong, Mackenzie, Niger, Brahmaputra, Murray-Darling, Tocantins, Volga, Purus, Madeira
 */

const RIVERS_DATA_2 = [
    // ========================================
    // 11. LENA RIVER
    // ========================================
    {
        id: "lena",
        name: "Lena River",
        length: 4400,
        continent: "asia",
        image: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=800",
        
        countries: [
            { name: "Russia", flag: "🇷🇺" }
        ],
        
        states: [
            "Irkutsk Oblast", "Sakha Republic (Yakutia)"
        ],
        
        source: {
            location: "Baikal Mountains, near Lake Baikal",
            type: "Mountain springs",
            elevation: "1,640 m",
            coordinates: [53.9500, 108.0500]
        },
        
        mouth: {
            location: "Laptev Sea, Arctic Ocean",
            type: "Delta",
            delta: "Lena Delta - 32,000 km², largest Arctic delta",
            coordinates: [72.0000, 127.0000]
        },
        
        tributaries: {
            leftBank: [
                "Kirenga River",
                "Vitim River",
                "Olyokma River",
                "Aldan River"
            ],
            rightBank: [
                "Nyuya River",
                "Vilyuy River"
            ]
        },
        
        distributaries: [
            "Bykovskaya Channel",
            "Trofimovskaya Channel",
            "Sardakhskaya Channel"
        ],
        
        majorCities: [
            "Yakutsk", "Lensk", "Kirensk", "Zhigansk",
            "Tiksi", "Ust-Kut", "Olekminsk"
        ],
        
        dams: [
            { name: "Vilyuy Dam", details: "Vilyuy River, 0.7 GW" },
            { name: "Svetlinskaya Dam (planned)", details: "Proposed for main river" }
        ],
        
        basinArea: "2,490,000 km²",
        discharge: "16,871 m³/s",
        
        riverPath: [
            [53.95, 108.05],   // Source
            [56.00, 108.00],
            [57.78, 108.04],   // Ust-Kut
            [60.00, 111.00],
            [62.03, 114.93],   // Yakutsk
            [64.00, 120.00],
            [66.77, 123.40],   // Zhigansk
            [69.00, 125.00],
            [71.64, 128.87],   // Tiksi
            [72.00, 127.00]    // Laptev Sea
        ],
        
        tributaryPaths: [
            {
                name: "Aldan River",
                path: [
                    [58.00, 135.00],
                    [60.00, 130.00],
                    [63.00, 130.00],
                    [63.50, 129.50]    // Confluence
                ]
            },
            {
                name: "Vilyuy River",
                path: [
                    [64.00, 110.00],
                    [64.00, 118.00],
                    [63.80, 123.00]    // Confluence
                ]
            },
            {
                name: "Vitim River",
                path: [
                    [52.00, 113.00],
                    [56.00, 116.00],
                    [59.45, 112.56]    // Confluence
                ]
            }
        ],
        
        distributaryPaths: [
            {
                name: "Trofimovskaya Channel",
                path: [
                    [72.00, 127.00],
                    [72.50, 128.00],
                    [73.00, 129.00]
                ]
            },
            {
                name: "Bykovskaya Channel",
                path: [
                    [72.00, 127.00],
                    [71.80, 129.00],
                    [71.50, 130.00]
                ]
            }
        ],
        
        cityCoordinates: [
            { name: "Yakutsk", coords: [62.03, 129.73] },
            { name: "Tiksi", coords: [71.64, 128.87] },
            { name: "Lensk", coords: [60.72, 114.94] },
            { name: "Zhigansk", coords: [66.77, 123.40] }
        ],
        
        damCoordinates: [
            { name: "Vilyuy Dam", coords: [62.75, 112.65], details: "0.7 GW hydroelectric" }
        ],
        
        flightLandmarks: [
            { progress: 0, name: "Baikal Mountains", icon: "🏔️", description: "Source near Lake Baikal" },
            { progress: 0.15, name: "Ust-Kut", icon: "🏘️", description: "BAM Railway town" },
            { progress: 0.25, name: "Lena Pillars", icon: "🗿", description: "UNESCO World Heritage Site" },
            { progress: 0.45, name: "Yakutsk", icon: "🏙️", description: "Coldest city on Earth" },
            { progress: 0.55, name: "Aldan Confluence", icon: "🔀", description: "Major tributary joins" },
            { progress: 0.70, name: "Arctic Circle", icon: "❄️", description: "Entering polar region" },
            { progress: 0.90, name: "Tiksi", icon: "⛴️", description: "Arctic port" },
            { progress: 1.0, name: "Lena Delta", icon: "🌿", description: "Largest Arctic delta" }
        ],
        
        economicImportance: [
            "Major shipping route for Yakutia",
            "Diamond mining (Mirny, Udachny)",
            "Gold mining operations",
            "Fishing industry",
            "Timber floating",
            "Arctic sea route connection"
        ],
        
        environmentalIssues: [
            "Climate change accelerating permafrost thaw",
            "Industrial pollution from mining",
            "Oil spill risks from shipping",
            "Methane release from permafrost",
            "Erosion of delta islands",
            "Flooding during ice breakup"
        ],
        
        waterDisputes: [],
        
        historicalImportance: [
            {
                title: "Russian Exploration",
                description: "Cossack explorers reached the Lena in 1632, establishing Yakutsk as a base for Arctic exploration."
            },
            {
                title: "Gulag System",
                description: "The Lena basin was home to numerous Soviet labor camps, with prisoners mining gold and other resources."
            },
            {
                title: "Mammoth Discoveries",
                description: "The Lena delta is one of the world's richest sources of woolly mammoth remains preserved in permafrost."
            }
        ]
    },
    
    // ========================================
    // 12. MEKONG RIVER
    // ========================================
    {
        id: "mekong",
        name: "Mekong River",
        length: 4350,
        continent: "asia",
        image: "https://images.unsplash.com/photo-1528127269322-539801943592?w=800",
        
        countries: [
            { name: "China", flag: "🇨🇳" },
            { name: "Myanmar", flag: "🇲🇲" },
            { name: "Laos", flag: "🇱🇦" },
            { name: "Thailand", flag: "🇹🇭" },
            { name: "Cambodia", flag: "🇰🇭" },
            { name: "Vietnam", flag: "🇻🇳" }
        ],
        
        states: [
            "Qinghai", "Tibet", "Yunnan", "Shan State",
            "Luang Prabang", "Vientiane", "Champasak",
            "Chiang Rai", "Nong Khai", "Ubon Ratchathani",
            "Stung Treng", "Kratie", "Phnom Penh", "An Giang", "Can Tho"
        ],
        
        source: {
            location: "Lasagongma Spring, Tibetan Plateau",
            type: "Glacier/Spring",
            elevation: "5,224 m",
            coordinates: [33.1667, 94.6667]
        },
        
        mouth: {
            location: "South China Sea, Vietnam",
            type: "Delta",
            delta: "Mekong Delta - 40,500 km²",
            coordinates: [9.8000, 106.6500]
        },
        
        tributaries: {
            leftBank: [
                "Nam Ou River",
                "Nam Khan River",
                "Nam Ngum River",
                "Xe Bang Fai River"
            ],
            rightBank: [
                "Ruak River",
                "Mun River",
                "Tonlé Sap River",
                "Bassac River"
            ]
        },
        
        distributaries: [
            "Bassac River (Hậu River)",
            "Tiền River (Front River)",
            "Cổ Chiên River",
            "Hàm Luông River"
        ],
        
        majorCities: [
            "Phnom Penh", "Vientiane", "Luang Prabang", "Ho Chi Minh City",
            "Can Tho", "Jinghong", "Pakse", "Kratie", "Chiang Saen"
        ],
        
        dams: [
            { name: "Xiaowan Dam", details: "China, Yunnan, 4.2 GW" },
            { name: "Nuozhadu Dam", details: "China, Yunnan, 5.85 GW" },
            { name: "Jinghong Dam", details: "China, 1.75 GW" },
            { name: "Xayaburi Dam", details: "Laos, 1.3 GW" },
            { name: "Don Sahong Dam", details: "Laos, 0.26 GW" },
            { name: "Nam Theun 2 Dam", details: "Laos, tributary, 1 GW" }
        ],
        
        basinArea: "795,000 km²",
        discharge: "16,000 m³/s",
        
        riverPath: [
            [33.17, 94.67],    // Source - Tibet
            [30.00, 97.00],
            [27.00, 99.00],
            [25.00, 100.00],
            [22.00, 100.80],   // Jinghong
            [20.15, 100.10],   // Golden Triangle
            [19.89, 102.13],   // Luang Prabang
            [17.97, 102.63],   // Vientiane
            [16.00, 105.00],
            [13.50, 106.00],
            [11.56, 104.93],   // Phnom Penh
            [10.50, 105.50],
            [9.80, 106.65]     // South China Sea
        ],
        
        tributaryPaths: [
            {
                name: "Tonlé Sap River",
                path: [
                    [13.10, 103.85],   // Tonlé Sap Lake
                    [12.00, 104.50],
                    [11.56, 104.93]    // Confluence at Phnom Penh
                ]
            },
            {
                name: "Mun River",
                path: [
                    [14.50, 102.50],
                    [15.00, 104.00],
                    [15.50, 105.50]    // Confluence
                ]
            },
            {
                name: "Nam Ou River",
                path: [
                    [21.50, 102.50],
                    [20.50, 102.30],
                    [19.90, 102.13]    // Confluence at Luang Prabang
                ]
            }
        ],
        
        distributaryPaths: [
            {
                name: "Bassac River",
                path: [
                    [11.56, 104.93],   // Phnom Penh
                    [10.50, 105.30],
                    [9.75, 105.70]     // South China Sea
                ]
            },
            {
                name: "Tiền River",
                path: [
                    [11.00, 105.30],
                    [10.40, 105.80],
                    [10.00, 106.50]    // South China Sea
                ]
            }
        ],
        
        cityCoordinates: [
            { name: "Phnom Penh", coords: [11.56, 104.93] },
            { name: "Vientiane", coords: [17.97, 102.63] },
            { name: "Luang Prabang", coords: [19.89, 102.13] },
            { name: "Can Tho", coords: [10.05, 105.75] },
            { name: "Jinghong", coords: [22.00, 100.80] },
            { name: "Kratie", coords: [12.48, 106.02] }
        ],
        
        damCoordinates: [
            { name: "Nuozhadu Dam", coords: [22.65, 100.42], details: "5.85 GW - Largest on Mekong" },
            { name: "Xiaowan Dam", coords: [24.67, 100.00], details: "4.2 GW capacity" },
            { name: "Xayaburi Dam", coords: [19.25, 101.82], details: "First dam on lower Mekong" }
        ],
        
        flightLandmarks: [
            { progress: 0, name: "Tibetan Plateau", icon: "🏔️", description: "Source at 5,224m" },
            { progress: 0.15, name: "Three Parallel Rivers", icon: "⛰️", description: "UNESCO World Heritage" },
            { progress: 0.30, name: "Jinghong, China", icon: "🏙️", description: "Last Chinese city" },
            { progress: 0.35, name: "Golden Triangle", icon: "📍", description: "Thailand-Laos-Myanmar border" },
            { progress: 0.45, name: "Luang Prabang", icon: "🏛️", description: "UNESCO Heritage City" },
            { progress: 0.55, name: "Vientiane", icon: "🇱🇦", description: "Laos capital" },
            { progress: 0.70, name: "Khone Falls", icon: "💧", description: "Largest waterfall by volume in SE Asia" },
            { progress: 0.85, name: "Phnom Penh", icon: "🏛️", description: "Tonlé Sap confluence" },
            { progress: 1.0, name: "Mekong Delta", icon: "🌾", description: "Vietnam's rice bowl" }
        ],
        
        economicImportance: [
            "Rice production feeds 60 million people",
            "World's largest inland fishery",
            "Hydroelectric power generation",
            "Major transportation corridor",
            "Tourism (Luang Prabang, Delta)",
            "Trade route between countries"
        ],
        
        environmentalIssues: [
            "Chinese dams altering water flow",
            "Declining fish populations",
            "Sediment starvation in delta",
            "Saltwater intrusion in Vietnam",
            "Loss of flooded forests",
            "Irrawaddy dolphin endangered"
        ],
        
        waterDisputes: [
            {
                title: "Mekong River Commission",
                description: "Four lower Mekong countries cooperate while China operates dams upstream without full participation."
            },
            {
                title: "Dam Development Conflicts",
                description: "Thailand, Laos, and Cambodia dispute dam impacts on fisheries and downstream communities."
            }
        ],
        
        historicalImportance: [
            {
                title: "Khmer Empire",
                description: "The Angkor civilization (802-1431) was built using the Mekong and Tonlé Sap flood pulse."
            },
            {
                title: "French Indochina",
                description: "France explored the Mekong in the 1860s hoping to find a trade route to China."
            },
            {
                title: "Vietnam War",
                description: "The Mekong Delta was a major theater of the Vietnam War, with river patrol operations."
            }
        ]
    },
    
    // ========================================
    // 13. MACKENZIE RIVER
    // ========================================
    {
        id: "mackenzie",
        name: "Mackenzie River",
        length: 4241,
        continent: "north-america",
        image: "https://images.unsplash.com/photo-1504893524553-b855bce32c67?w=800",
        
        countries: [
            { name: "Canada", flag: "🇨🇦" }
        ],
        
        states: [
            "British Columbia", "Alberta", "Saskatchewan",
            "Northwest Territories"
        ],
        
        source: {
            location: "Great Slave Lake outlet (headwaters in BC mountains)",
            type: "Lake outlet",
            elevation: "156 m",
            coordinates: [61.2667, -117.6000]
        },
        
        mouth: {
            location: "Beaufort Sea, Arctic Ocean",
            type: "Delta",
            delta: "Mackenzie Delta - 13,500 km²",
            coordinates: [69.3500, -135.7500]
        },
        
        tributaries: {
            leftBank: [
                "Liard River",
                "Keele River",
                "Great Bear River",
                "Arctic Red River"
            ],
            rightBank: [
                "North Nahanni River",
                "Root River",
                "Peel River"
            ]
        },
        
        distributaries: [
            "Middle Channel",
            "East Channel",
            "Peel Channel"
        ],
        
        majorCities: [
            "Yellowknife", "Fort Simpson", "Norman Wells",
            "Inuvik", "Hay River", "Fort Providence"
        ],
        
        dams: [
            { name: "W.A.C. Bennett Dam", details: "Peace River, BC, 2.7 GW" },
            { name: "Site C Dam", details: "Peace River, under construction, 1.1 GW" }
        ],
        
        basinArea: "1,805,200 km²",
        discharge: "9,700 m³/s",
        
        riverPath: [
            [61.27, -117.60],   // Great Slave Lake outlet
            [62.00, -120.00],
            [61.86, -121.35],   // Fort Simpson
            [63.00, -124.00],
            [65.28, -126.83],   // Norman Wells
            [66.50, -130.00],
            [67.45, -133.72],   // Tsiigehtchic
            [68.36, -133.72],   // Inuvik
            [69.35, -135.75]    // Beaufort Sea
        ],
        
        tributaryPaths: [
            {
                name: "Liard River",
                path: [
                    [59.00, -126.00],
                    [60.00, -124.00],
                    [61.86, -121.35]   // Confluence at Fort Simpson
                ]
            },
            {
                name: "Great Bear River",
                path: [
                    [65.90, -120.70],  // Great Bear Lake
                    [65.50, -123.00],
                    [65.20, -126.00]   // Confluence
                ]
            },
            {
                name: "Peel River",
                path: [
                    [66.00, -137.00],
                    [66.50, -135.50],
                    [67.25, -134.80]   // Confluence
                ]
            }
        ],
        
        distributaryPaths: [
            {
                name: "East Channel",
                path: [
                    [68.50, -134.00],
                    [69.00, -134.50],
                    [69.40, -134.00]
                ]
            },
            {
                name: "Middle Channel",
                path: [
                    [68.50, -134.00],
                    [69.00, -135.00],
                    [69.50, -135.50]
                ]
            }
        ],
        
        cityCoordinates: [
            { name: "Yellowknife", coords: [62.45, -114.37] },
            { name: "Fort Simpson", coords: [61.86, -121.35] },
            { name: "Norman Wells", coords: [65.28, -126.83] },
            { name: "Inuvik", coords: [68.36, -133.72] }
        ],
        
        damCoordinates: [
            { name: "W.A.C. Bennett Dam", coords: [56.00, -122.20], details: "2.7 GW - Peace River" }
        ],
        
        flightLandmarks: [
            { progress: 0, name: "Great Slave Lake", icon: "🌊", description: "North America's deepest lake" },
            { progress: 0.15, name: "Fort Simpson", icon: "🏘️", description: "Liard River confluence" },
            { progress: 0.25, name: "Nahanni Range", icon: "⛰️", description: "Spectacular mountain scenery" },
            { progress: 0.45, name: "Norman Wells", icon: "🛢️", description: "Historic oil town" },
            { progress: 0.55, name: "Ramparts Rapids", icon: "💧", description: "Limestone canyon" },
            { progress: 0.70, name: "Arctic Circle", icon: "❄️", description: "Entering polar region" },
            { progress: 0.85, name: "Inuvik", icon: "🏙️", description: "Gateway to the Arctic" },
            { progress: 1.0, name: "Mackenzie Delta", icon: "🌿", description: "Arctic tundra delta" }
        ],
        
        economicImportance: [
            "Oil and gas exploration/production",
            "Diamond mining in basin",
            "Barge transportation in summer",
            "Traditional Indigenous fishing",
            "Tourism and wilderness recreation",
            "Potential Arctic shipping route"
        ],
        
        environmentalIssues: [
            "Climate change thawing permafrost",
            "Oil spill risks from development",
            "Changing ice patterns",
            "Upstream dam impacts",
            "Mercury in fish populations",
            "Caribou migration disruption"
        ],
        
        waterDisputes: [
            {
                title: "Transboundary Water Agreement",
                description: "Agreements between Northwest Territories, Alberta, and BC manage upstream activities."
            }
        ],
        
        historicalImportance: [
            {
                title: "Alexander Mackenzie Expedition",
                description: "Scottish explorer Alexander Mackenzie traveled the river in 1789, reaching the Arctic Ocean."
            },
            {
                title: "Dene First Nations",
                description: "The Dene people have lived along the Mackenzie for thousands of years, calling it 'Deh-Cho' (Big River)."
            },
            {
                title: "CANOL Project",
                description: "WWII project built a pipeline along the river to supply oil to Alaska."
            }
        ]
    },
    
    // ========================================
    // 14. NIGER RIVER
    // ========================================
    {
        id: "niger",
        name: "Niger River",
        length: 4180,
        continent: "africa",
        image: "https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=800",
        
        countries: [
            { name: "Guinea", flag: "🇬🇳" },
            { name: "Mali", flag: "🇲🇱" },
            { name: "Niger", flag: "🇳🇪" },
            { name: "Benin", flag: "🇧🇯" },
            { name: "Nigeria", flag: "🇳🇬" }
        ],
        
        states: [
            "Faranah", "Kankan", "Sikasso", "Ségou", "Mopti",
            "Timbuktu", "Gao", "Niamey", "Dosso", "Kebbi",
            "Niger State", "Kogi", "Delta State", "Rivers State"
        ],
        
        source: {
            location: "Guinea Highlands, near Sierra Leone border",
            type: "Mountain springs",
            elevation: "800 m",
            coordinates: [9.0500, -10.8700]
        },
        
        mouth: {
            location: "Gulf of Guinea, Atlantic Ocean",
            type: "Delta",
            delta: "Niger Delta - 70,000 km²",
            coordinates: [4.3500, 6.0000]
        },
        
        tributaries: {
            leftBank: [
                "Bani River",
                "Sokoto River",
                "Kaduna River"
            ],
            rightBank: [
                "Benue River",
                "Anambra River"
            ]
        },
        
        distributaries: [
            "Nun River",
            "Forcados River",
            "Brass River",
            "Bonny River",
            "New Calabar River"
        ],
        
        majorCities: [
            "Bamako", "Timbuktu", "Niamey", "Lokoja",
            "Onitsha", "Port Harcourt", "Gao", "Mopti"
        ],
        
        dams: [
            { name: "Kainji Dam", details: "Nigeria, 0.8 GW" },
            { name: "Jebba Dam", details: "Nigeria, 0.6 GW" },
            { name: "Shiroro Dam", details: "Kaduna River, Nigeria, 0.6 GW" },
            { name: "Sélingué Dam", details: "Mali, 0.04 GW" }
        ],
        
        basinArea: "2,117,700 km²",
        discharge: "5,589 m³/s",
        
        riverPath: [
            [9.05, -10.87],     // Source - Guinea
            [10.00, -9.00],
            [11.50, -8.00],
            [12.65, -8.00],     // Bamako
            [14.00, -5.00],
            [16.77, -3.01],     // Timbuktu
            [17.03, -1.66],     // Near Gao
            [15.00, 1.00],
            [13.51, 2.11],      // Niamey
            [11.00, 4.00],
            [9.08, 6.73],       // Kainji Dam area
            [7.80, 6.74],       // Lokoja (Benue confluence)
            [6.00, 6.50],
            [4.35, 6.00]        // Niger Delta
        ],
        
        tributaryPaths: [
            {
                name: "Benue River",
                path: [
                    [7.30, 13.50],     // Cameroon
                    [8.00, 11.00],
                    [8.50, 9.00],
                    [7.80, 6.74]       // Confluence at Lokoja
                ]
            },
            {
                name: "Bani River",
                path: [
                    [11.50, -5.50],
                    [13.00, -5.00],
                    [14.50, -4.20]     // Confluence near Mopti
                ]
            },
            {
                name: "Sokoto River",
                path: [
                    [13.00, 5.50],
                    [12.00, 5.00],
                    [10.50, 4.50]      // Confluence
                ]
            }
        ],
        
        distributaryPaths: [
            {
                name: "Nun River",
                path: [
                    [5.50, 6.30],
                    [5.00, 6.20],
                    [4.30, 6.05]
                ]
            },
            {
                name: "Forcados River",
                path: [
                    [5.50, 6.00],
                    [5.20, 5.50],
                    [5.00, 5.35]
                ]
            }
        ],
        
        cityCoordinates: [
            { name: "Bamako", coords: [12.65, -8.00] },
            { name: "Timbuktu", coords: [16.77, -3.01] },
            { name: "Niamey", coords: [13.51, 2.11] },
            { name: "Lokoja", coords: [7.80, 6.74] },
            { name: "Port Harcourt", coords: [4.78, 7.01] },
            { name: "Onitsha", coords: [6.14, 6.79] }
        ],
        
        damCoordinates: [
            { name: "Kainji Dam", coords: [9.86, 4.61], details: "0.8 GW - Nigeria's first major dam" },
            { name: "Jebba Dam", coords: [9.12, 4.82], details: "0.6 GW capacity" }
        ],
        
        flightLandmarks: [
            { progress: 0, name: "Guinea Highlands", icon: "🏔️", description: "Source region" },
            { progress: 0.15, name: "Bamako", icon: "🏙️", description: "Mali's capital" },
            { progress: 0.30, name: "Inner Niger Delta", icon: "🌿", description: "Vast wetland system" },
            { progress: 0.40, name: "Timbuktu", icon: "📚", description: "Legendary desert city" },
            { progress: 0.50, name: "Great Bend", icon: "↩️", description: "River turns south" },
            { progress: 0.60, name: "Niamey", icon: "🏛️", description: "Niger's capital" },
            { progress: 0.75, name: "Kainji Dam", icon: "🏗️", description: "Major hydroelectric dam" },
            { progress: 0.85, name: "Lokoja", icon: "🔀", description: "Benue confluence" },
            { progress: 1.0, name: "Niger Delta", icon: "🛢️", description: "Oil-rich delta" }
        ],
        
        economicImportance: [
            "Major oil production in delta",
            "Fishing supports millions",
            "Irrigation for agriculture",
            "Hydroelectric power",
            "Transportation corridor",
            "Gold mining in upper basin"
        ],
        
        environmentalIssues: [
            "Oil spills devastating delta",
            "Gas flaring pollution",
            "Desertification in upper basin",
            "Overfishing and declining stocks",
            "Dam impacts on wetlands",
            "Water hyacinth invasion"
        ],
        
        waterDisputes: [
            {
                title: "Niger Basin Authority",
                description: "Nine countries cooperate on water management but face challenges from climate change and development."
            }
        ],
        
        historicalImportance: [
            {
                title: "Mali Empire",
                description: "The powerful Mali Empire (1235-1600) controlled the Niger's gold trade, making Timbuktu a legendary center of wealth and learning."
            },
            {
                title: "Mungo Park Exploration",
                description: "Scottish explorer Mungo Park traced the Niger's course in 1796 and 1805, solving a centuries-old geographical mystery."
            },
            {
                title: "Trans-Saharan Trade",
                description: "The Niger was crucial to trans-Saharan trade routes carrying gold, salt, and enslaved people for centuries."
            }
        ]
    },
    
    // ========================================
    // 15. BRAHMAPUTRA RIVER
    // ========================================
    {
        id: "brahmaputra",
        name: "Brahmaputra River",
        length: 3969,
        continent: "asia",
        image: "https://images.unsplash.com/photo-1606567595334-d39972c85dfd?w=800",
        
        countries: [
            { name: "China (Tibet)", flag: "🇨🇳" },
            { name: "India", flag: "🇮🇳" },
            { name: "Bangladesh", flag: "🇧🇩" }
        ],
        
        states: [
            "Tibet", "Arunachal Pradesh", "Assam", "Meghalaya",
            "Rangpur Division", "Mymensingh Division", "Dhaka Division"
        ],
        
        source: {
            location: "Angsi Glacier, Himalayas, Tibet",
            type: "Glacier",
            elevation: "5,210 m",
            coordinates: [30.3833, 82.0000]
        },
        
        mouth: {
            location: "Bay of Bengal (via Ganges Delta)",
            type: "Delta",
            delta: "Ganges-Brahmaputra Delta",
            coordinates: [22.0000, 90.5000]
        },
        
        tributaries: {
            leftBank: [
                "Lohit River",
                "Dibang River",
                "Subansiri River",
                "Manas River",
                "Teesta River"
            ],
            rightBank: [
                "Kameng River",
                "Dhansiri River",
                "Kopili River"
            ]
        },
        
        distributaries: [
            "Jamuna River (main channel in Bangladesh)",
            "Old Brahmaputra",
            "Meghna River confluence"
        ],
        
        majorCities: [
            "Guwahati", "Dibrugarh", "Tezpur", "Dhubri",
            "Mymensingh", "Shigatse", "Lhasa region"
        ],
        
        dams: [
            { name: "Zangmu Dam", details: "Tibet, China, 0.5 GW" },
            { name: "Ranganadi Dam", details: "India, 0.4 GW" },
            { name: "Subansiri Lower Dam", details: "India (under construction), 2 GW" }
        ],
        
        basinArea: "651,335 km²",
        discharge: "19,300 m³/s",
        
        riverPath: [
            [30.38, 82.00],    // Source - Tibet
            [29.50, 86.00],
            [29.27, 88.88],    // Shigatse area
            [29.65, 91.10],    // Near Lhasa
            [29.00, 94.50],    // Great Bend
            [28.00, 95.00],
            [27.48, 94.88],    // Enters India
            [27.00, 94.00],
            [26.18, 91.75],    // Guwahati
            [26.00, 90.00],
            [25.50, 89.70],    // Enters Bangladesh
            [24.50, 89.90],
            [23.50, 90.40],    // Jamuna
            [22.00, 90.50]     // Bay of Bengal
        ],
        
        tributaryPaths: [
            {
                name: "Teesta River",
                path: [
                    [27.80, 88.60],
                    [26.50, 88.80],
                    [25.50, 89.50]     // Confluence
                ]
            },
            {
                name: "Subansiri River",
                path: [
                    [28.50, 93.50],
                    [27.50, 94.00],
                    [27.00, 93.80]     // Confluence
                ]
            },
            {
                name: "Manas River",
                path: [
                    [28.00, 90.50],
                    [27.00, 91.00],
                    [26.20, 90.60]     // Confluence
                ]
            }
        ],
        
        distributaryPaths: [
            {
                name: "Old Brahmaputra",
                path: [
                    [24.50, 89.90],
                    [24.20, 90.40],
                    [23.80, 90.30]
                ]
            }
        ],
        
        cityCoordinates: [
            { name: "Guwahati", coords: [26.18, 91.75] },
            { name: "Dibrugarh", coords: [27.47, 94.91] },
            { name: "Tezpur", coords: [26.63, 92.80] },
            { name: "Mymensingh", coords: [24.75, 90.40] }
        ],
        
        damCoordinates: [
            { name: "Zangmu Dam", coords: [29.32, 92.18], details: "Tibet, 0.5 GW" }
        ],
        
        flightLandmarks: [
            { progress: 0, name: "Angsi Glacier", icon: "🏔️", description: "Himalayan source" },
            { progress: 0.15, name: "Yarlung Tsangpo", icon: "🏞️", description: "Tibetan Plateau" },
            { progress: 0.30, name: "Yarlung Tsangpo Grand Canyon", icon: "⛰️", description: "World's deepest canyon" },
            { progress: 0.40, name: "Great Bend", icon: "↩️", description: "River turns south" },
            { progress: 0.50, name: "Arunachal Pradesh", icon: "🌲", description: "Enters India" },
            { progress: 0.65, name: "Guwahati", icon: "🏙️", description: "Gateway to Northeast India" },
            { progress: 0.80, name: "Dhubri", icon: "🏘️", description: "Enters Bangladesh" },
            { progress: 0.90, name: "Jamuna", icon: "🌊", description: "Bangladesh main channel" },
            { progress: 1.0, name: "Ganges-Brahmaputra Delta", icon: "🌿", description: "World's largest delta" }
        ],
        
        economicImportance: [
            "Irrigation for rice cultivation",
            "Fishing industry",
            "Hydroelectric potential",
            "River transportation",
            "Fertile alluvial plains",
            "Tea plantations in Assam"
        ],
        
        environmentalIssues: [
            "Devastating floods annually",
            "Erosion destroying villages",
            "Chinese dam construction upstream",
            "Declining fish stocks",
            "Deforestation in catchment",
            "Climate change affecting glaciers"
        ],
        
        waterDisputes: [
            {
                title: "China-India-Bangladesh Water Sharing",
                description: "China's dam construction and water diversion plans concern downstream India and Bangladesh."
            },
            {
                title: "Teesta Water Dispute",
                description: "India and Bangladesh dispute water sharing from the Teesta tributary."
            }
        ],
        
        historicalImportance: [
            {
                title: "Ahom Kingdom",
                description: "The Ahom dynasty ruled Assam for 600 years (1228-1826), using the Brahmaputra as their lifeline."
            },
            {
                title: "Ancient Trade Route",
                description: "The river connected Tibet with the Bay of Bengal, facilitating trade between Central and South Asia."
            },
            {
                title: "1950 Assam Earthquake",
                description: "One of history's largest earthquakes (8.6 magnitude) dramatically changed the river's course."
            }
        ]
    },
    
    // ========================================
    // 16. MURRAY-DARLING RIVER SYSTEM
    // ========================================
    {
        id: "murray-darling",
        name: "Murray-Darling River",
        length: 3672,
        continent: "oceania",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
        
        countries: [
            { name: "Australia", flag: "🇦🇺" }
        ],
        
        states: [
            "Queensland", "New South Wales", "Victoria",
            "South Australia", "Australian Capital Territory"
        ],
        
        source: {
            location: "Australian Alps, near Mount Kosciuszko",
            type: "Mountain streams",
            elevation: "1,800 m",
            coordinates: [-36.5000, 148.0000]
        },
        
        mouth: {
            location: "Southern Ocean, near Adelaide",
            type: "Lake/Estuary",
            delta: "Murray Mouth and Coorong Lagoon",
            coordinates: [-35.5500, 138.8800]
        },
        
        tributaries: {
            leftBank: [
                "Murrumbidgee River",
                "Lachlan River",
                "Wakool River"
            ],
            rightBank: [
                "Darling River",
                "Goulburn River",
                "Campaspe River",
                "Loddon River"
            ]
        },
        
        distributaries: [
            "Murray Mouth channels"
        ],
        
        majorCities: [
            "Adelaide", "Canberra", "Albury-Wodonga", "Mildura",
            "Echuca", "Murray Bridge", "Dubbo", "Wagga Wagga"
        ],
        
        dams: [
            { name: "Hume Dam", details: "Murray River, 3,038 GL capacity" },
            { name: "Dartmouth Dam", details: "Mitta Mitta River, 4,000 GL" },
            { name: "Burrinjuck Dam", details: "Murrumbidgee River" },
            { name: "Menindee Lakes", details: "Darling River storage" }
        ],
        
        basinArea: "1,061,469 km²",
        discharge: "767 m³/s",
        
        riverPath: [
            [-36.50, 148.00],   // Source - Australian Alps
            [-36.00, 147.00],
            [-36.08, 146.92],   // Albury
            [-35.50, 145.50],
            [-34.76, 143.16],   // Mildura
            [-34.00, 141.50],
            [-34.23, 140.62],   // Renmark
            [-35.05, 139.28],   // Murray Bridge
            [-35.55, 138.88]    // Murray Mouth
        ],
        
        tributaryPaths: [
            {
                name: "Darling River",
                path: [
                    [-29.50, 148.00],  // Queensland border
                    [-30.50, 146.00],
                    [-32.00, 143.00],
                    [-34.10, 142.17]   // Confluence at Wentworth
                ]
            },
            {
                name: "Murrumbidgee River",
                path: [
                    [-35.50, 149.00],  // Near Canberra
                    [-35.00, 147.00],  // Wagga Wagga
                    [-34.80, 145.00],
                    [-34.50, 143.80]   // Confluence
                ]
            },
            {
                name: "Goulburn River",
                path: [
                    [-37.00, 146.50],
                    [-36.50, 145.50],
                    [-36.13, 144.75]   // Confluence at Echuca
                ]
            }
        ],
        
        distributaryPaths: [],
        
        cityCoordinates: [
            { name: "Adelaide", coords: [-34.93, 138.60] },
            { name: "Albury", coords: [-36.08, 146.92] },
            { name: "Mildura", coords: [-34.19, 142.16] },
            { name: "Echuca", coords: [-36.13, 144.75] },
            { name: "Wagga Wagga", coords: [-35.12, 147.37] },
            { name: "Murray Bridge", coords: [-35.12, 139.28] }
        ],
        
        damCoordinates: [
            { name: "Hume Dam", coords: [-36.10, 147.03], details: "3,038 GL storage" },
            { name: "Dartmouth Dam", coords: [-36.53, 147.50], details: "4,000 GL - Largest in Victoria" }
        ],
        
        flightLandmarks: [
            { progress: 0, name: "Snowy Mountains", icon: "🏔️", description: "Australian Alps source" },
            { progress: 0.15, name: "Albury-Wodonga", icon: "🏙️", description: "Border twin cities" },
            { progress: 0.30, name: "Echuca-Moama", icon: "⛴️", description: "Historic paddle steamer port" },
            { progress: 0.50, name: "Mildura", icon: "🍇", description: "Sunraysia wine region" },
            { progress: 0.60, name: "Darling Junction", icon: "🔀", description: "Darling River confluence" },
            { progress: 0.75, name: "Riverland", icon: "🍊", description: "Fruit growing region" },
            { progress: 0.90, name: "Murray Bridge", icon: "🌉", description: "Near Adelaide" },
            { progress: 1.0, name: "Coorong", icon: "🦢", description: "Coastal lagoon system" }
        ],
        
        economicImportance: [
            "Irrigates 40% of Australia's farms",
            "Produces $22 billion in food annually",
            "Wine grape production",
            "Cotton and rice farming",
            "Citrus and stone fruit orchards",
            "Tourism and recreation"
        ],
        
        environmentalIssues: [
            "Severe over-extraction for irrigation",
            "Increasing salinity",
            "Declining native fish populations",
            "Carp invasion (pest species)",
            "Drought and climate change impacts",
            "Murray mouth closing"
        ],
        
        waterDisputes: [
            {
                title: "Murray-Darling Basin Plan",
                description: "Federal plan to balance water for environment, farmers, and communities remains controversial."
            },
            {
                title: "Upstream vs Downstream States",
                description: "Ongoing tensions between Queensland, NSW, Victoria, and South Australia over water allocations."
            }
        ],
        
        historicalImportance: [
            {
                title: "Aboriginal Heritage",
                description: "Indigenous Australians have lived along the Murray for over 40,000 years, with the river central to their culture."
            },
            {
                title: "Paddle Steamer Era",
                description: "The 1850s-1900s saw hundreds of paddle steamers transporting wool and goods along the Murray."
            },
            {
                title: "Snowy Mountains Scheme",
                description: "The post-war engineering project diverted water into the Murray system, transforming Australian agriculture."
            }
        ]
    },
    
    // ========================================
    // 17. TOCANTINS RIVER
    // ========================================
    {
        id: "tocantins",
        name: "Tocantins River",
        length: 3650,
        continent: "south-america",
        image: "https://images.unsplash.com/photo-1548783306-05ad99c88c40?w=800",
        
        countries: [
            { name: "Brazil", flag: "🇧🇷" }
        ],
        
        states: [
            "Goiás", "Tocantins", "Maranhão", "Pará"
        ],
        
        source: {
            location: "Serra Dourada, Goiás, Brazil",
            type: "Highland springs",
            elevation: "1,100 m",
            coordinates: [-15.3000, -47.5000]
        },
        
        mouth: {
            location: "Pará River / Amazon Estuary",
            type: "Estuary",
            delta: "Joins Pará River near Belém",
            coordinates: [-1.5000, -48.8000]
        },
        
        tributaries: {
            leftBank: [
                "Araguaia River",
                "Itacaiúnas River"
            ],
            rightBank: [
                "Santa Teresa River",
                "Paraná River (tributary)"
            ]
        },
        
        distributaries: [],
        
        majorCities: [
            "Belém", "Marabá", "Palmas", "Imperatriz",
            "Tucuruí", "Miracema do Tocantins"
        ],
        
        dams: [
            { name: "Tucuruí Dam", details: "One of world's largest, 8.4 GW" },
            { name: "Serra da Mesa Dam", details: "1.3 GW capacity" },
            { name: "Cana Brava Dam", details: "0.45 GW" },
            { name: "Peixe Angical Dam", details: "0.45 GW" },
            { name: "Lajeado Dam", details: "0.9 GW" }
        ],
        
        basinArea: "767,000 km²",
        discharge: "13,598 m³/s",
        
        riverPath: [
            [-15.30, -47.50],   // Source
            [-13.00, -48.20],
            [-10.70, -48.42],   // Palmas
            [-8.00, -48.00],
            [-6.00, -47.50],
            [-5.53, -49.13],    // Marabá
            [-3.76, -49.67],    // Tucuruí
            [-2.50, -49.30],
            [-1.50, -48.80]     // Pará River
        ],
        
        tributaryPaths: [
            {
                name: "Araguaia River",
                path: [
                    [-18.00, -53.00],  // Source
                    [-13.00, -50.50],
                    [-8.00, -49.00],
                    [-5.53, -49.13]    // Confluence at Marabá
                ]
            },
            {
                name: "Itacaiúnas River",
                path: [
                    [-6.50, -50.50],
                    [-5.80, -49.50],
                    [-5.53, -49.13]    // Confluence
                ]
            }
        ],
        
        distributaryPaths: [],
        
        cityCoordinates: [
            { name: "Belém", coords: [-1.46, -48.50] },
            { name: "Marabá", coords: [-5.37, -49.12] },
            { name: "Palmas", coords: [-10.17, -48.33] },
            { name: "Tucuruí", coords: [-3.77, -49.67] },
            { name: "Imperatriz", coords: [-5.53, -47.47] }
        ],
        
        damCoordinates: [
            { name: "Tucuruí Dam", coords: [-3.83, -49.72], details: "8.4 GW - Fourth largest hydroelectric in world" },
            { name: "Serra da Mesa Dam", coords: [-13.83, -48.30], details: "1.3 GW, largest reservoir in Brazil by volume" }
        ],
        
        flightLandmarks: [
            { progress: 0, name: "Serra Dourada", icon: "🏔️", description: "Goiás highlands source" },
            { progress: 0.20, name: "Palmas", icon: "🏙️", description: "Tocantins state capital" },
            { progress: 0.35, name: "Lajeado Dam", icon: "🏗️", description: "Reservoir lake" },
            { progress: 0.50, name: "Imperatriz", icon: "🏘️", description: "Maranhão city" },
            { progress: 0.65, name: "Marabá", icon: "🔀", description: "Araguaia confluence" },
            { progress: 0.75, name: "Tucuruí Dam", icon: "⚡", description: "Massive hydroelectric dam" },
            { progress: 0.90, name: "Amazon Rainforest", icon: "🌳", description: "Dense jungle region" },
            { progress: 1.0, name: "Pará River", icon: "🌊", description: "Amazon estuary" }
        ],
        
        economicImportance: [
            "Major hydroelectric power (Tucuruí)",
            "Iron ore mining (Carajás)",
            "Bauxite mining",
            "Soybean transportation",
            "Cattle ranching",
            "Logging industry"
        ],
        
        environmentalIssues: [
            "Deforestation in basin",
            "Dam impacts on fish migration",
            "Mercury contamination from mining",
            "Displacement of indigenous peoples",
            "Loss of forest habitat",
            "Water quality degradation"
        ],
        
        waterDisputes: [],
        
        historicalImportance: [
            {
                title: "Indigenous Territory",
                description: "The Tocantins basin has been home to numerous indigenous groups including the Xerente, Krahô, and Apinajé peoples."
            },
            {
                title: "Gold Rush",
                description: "18th-century gold discoveries in Goiás led to Portuguese colonization of the region."
            },
            {
                title: "Carajás Discovery",
                description: "The 1967 discovery of iron ore deposits made the Tocantins region economically vital to Brazil."
            }
        ]
    },
    
    // ========================================
    // 18. VOLGA RIVER
    // ========================================
    {
        id: "volga",
        name: "Volga River",
        length: 3530,
        continent: "europe",
        image: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=800",
        
        countries: [
            { name: "Russia", flag: "🇷🇺" }
        ],
        
        states: [
            "Tver Oblast", "Yaroslavl Oblast", "Nizhny Novgorod Oblast",
            "Chuvashia", "Tatarstan", "Ulyanovsk Oblast", "Samara Oblast",
            "Saratov Oblast", "Volgograd Oblast", "Astrakhan Oblast"
        ],
        
        source: {
            location: "Valdai Hills, Tver Oblast",
            type: "Springs",
            elevation: "228 m",
            coordinates: [57.2500, 32.4667]
        },
        
        mouth: {
            location: "Caspian Sea",
            type: "Delta",
            delta: "Volga Delta - 27,224 km²",
            coordinates: [46.0000, 48.5000]
        },
        
        tributaries: {
            leftBank: [
                "Kama River",
                "Samara River",
                "Sok River",
                "Bolshoy Irgiz River"
            ],
            rightBank: [
                "Oka River",
                "Sura River",
                "Sviyaga River"
            ]
        },
        
        distributaries: [
            "Akhtuba River",
            "Multiple delta channels"
        ],
        
        majorCities: [
            "Moscow (via canal)", "Nizhny Novgorod", "Kazan", "Samara",
            "Volgograd", "Astrakhan", "Saratov", "Ulyanovsk", "Yaroslavl"
        ],
        
        dams: [
            { name: "Volga Hydroelectric Station", details: "Volgograd, 2.6 GW" },
            { name: "Zhiguli Hydroelectric Station", details: "Samara, 2.5 GW" },
            { name: "Saratov Hydroelectric Station", details: "1.4 GW" },
            { name: "Cheboksary Hydroelectric Station", details: "1.4 GW" },
            { name: "Rybinsk Reservoir", details: "Largest artificial lake in Europe when built" }
        ],
        
        basinArea: "1,380,000 km²",
        discharge: "8,060 m³/s",
        
        riverPath: [
            [57.25, 32.47],    // Source
            [57.63, 39.87],    // Yaroslavl
            [56.33, 43.98],    // Nizhny Novgorod
            [55.79, 49.12],    // Kazan
            [53.20, 50.15],    // Samara
            [51.53, 46.00],    // Saratov
            [48.72, 44.50],    // Volgograd
            [47.50, 47.00],
            [46.00, 48.50]     // Caspian Sea
        ],
        
        tributaryPaths: [
            {
                name: "Kama River",
                path: [
                    [58.50, 54.00],
                    [56.00, 52.50],
                    [55.50, 51.00],
                    [55.40, 49.90]     // Confluence
                ]
            },
            {
                name: "Oka River",
                path: [
                    [52.50, 36.00],    // Near Moscow
                    [54.00, 40.00],
                    [55.50, 42.50],
                    [56.33, 43.98]     // Confluence at Nizhny Novgorod
                ]
            },
            {
                name: "Sura River",
                path: [
                    [53.50, 45.50],
                    [55.00, 46.00],
                    [55.90, 45.70]     // Confluence
                ]
            }
        ],
        
        distributaryPaths: [
            {
                name: "Akhtuba River",
                path: [
                    [48.72, 44.50],    // Splits from Volga
                    [47.50, 46.50],
                    [46.50, 47.80]
                ]
            }
        ],
        
        cityCoordinates: [
            { name: "Nizhny Novgorod", coords: [56.33, 44.00] },
            { name: "Kazan", coords: [55.79, 49.12] },
            { name: "Samara", coords: [53.20, 50.15] },
            { name: "Volgograd", coords: [48.72, 44.50] },
            { name: "Astrakhan", coords: [46.35, 48.05] },
            { name: "Saratov", coords: [51.53, 46.00] },
            { name: "Yaroslavl", coords: [57.63, 39.87] }
        ],
        
        damCoordinates: [
            { name: "Volga Hydroelectric Station", coords: [48.82, 44.68], details: "2.6 GW - Near Volgograd" },
            { name: "Zhiguli Dam", coords: [53.45, 49.45], details: "2.5 GW - Samara" }
        ],
        
        flightLandmarks: [
            { progress: 0, name: "Valdai Hills", icon: "🏔️", description: "Source region" },
            { progress: 0.12, name: "Yaroslavl", icon: "🏛️", description: "Golden Ring city" },
            { progress: 0.25, name: "Nizhny Novgorod", icon: "🏙️", description: "Oka confluence" },
            { progress: 0.40, name: "Kazan", icon: "🕌", description: "Tatar capital" },
            { progress: 0.50, name: "Kama Confluence", icon: "🔀", description: "Largest tributary joins" },
            { progress: 0.60, name: "Samara", icon: "🏭", description: "Industrial city" },
            { progress: 0.75, name: "Volgograd", icon: "⭐", description: "Battle of Stalingrad site" },
            { progress: 0.90, name: "Astrakhan", icon: "🐟", description: "Caviar capital" },
            { progress: 1.0, name: "Volga Delta", icon: "🌿", description: "Caspian Sea delta" }
        ],
        
        economicImportance: [
            "Heart of Russian waterway system",
            "Major hydroelectric power",
            "Industrial corridor (40% of Russian industry)",
            "Oil refining centers",
            "Grain transportation",
            "Caviar fisheries (historically)"
        ],
        
        environmentalIssues: [
            "Severe industrial pollution",
            "Caspian Sea level changes",
            "Sturgeon population collapse",
            "Agricultural runoff",
            "Invasive species",
            "Dam impacts on ecosystems"
        ],
        
        waterDisputes: [],
        
        historicalImportance: [
            {
                title: "Volga Trade Route",
                description: "Vikings used the Volga route to Constantinople and Baghdad, trading furs and slaves for silver."
            },
            {
                title: "Battle of Stalingrad",
                description: "The 1942-43 battle at Volgograd was the turning point of WWII on the Eastern Front."
            },
            {
                title: "Mother Volga",
                description: "Russians call it 'Volga-Matushka' (Mother Volga), central to Russian national identity and folk culture."
            }
        ]
    },
    
    // ========================================
    // 19. PURUS RIVER
    // ========================================
    {
        id: "purus",
        name: "Purus River",
        length: 3211,
        continent: "south-america",
        image: "https://images.unsplash.com/photo-1559825481-12a05cc00344?w=800",
        
        countries: [
            { name: "Peru", flag: "🇵🇪" },
            { name: "Brazil", flag: "🇧🇷" }
        ],
        
        states: [
            "Ucayali (Peru)", "Acre", "Amazonas"
        ],
        
        source: {
            location: "Peruvian Andes, Ucayali Region",
            type: "Mountain streams",
            elevation: "500 m",
            coordinates: [-10.0000, -73.0000]
        },
        
        mouth: {
            location: "Amazon River, Brazil",
            type: "River confluence",
            delta: "N/A - tributary confluence",
            coordinates: [-3.7000, -61.4700]
        },
        
        tributaries: {
            leftBank: [
                "Acre River",
                "Iaco River"
            ],
            rightBank: [
                "Chandless River",
                "Pauini River"
            ]
        },
        
        distributaries: [],
        
        majorCities: [
            "Lábrea", "Boca do Acre", "Sena Madureira",
            "Manoel Urbano", "Pauini"
        ],
        
        dams: [],
        
        basinArea: "371,042 km²",
        discharge: "8,400 m³/s",
        
        riverPath: [
            [-10.00, -73.00],   // Source - Peru
            [-9.50, -71.00],
            [-9.13, -68.91],    // Sena Madureira area
            [-8.50, -67.50],
            [-8.73, -67.40],    // Boca do Acre
            [-7.26, -64.80],    // Lábrea
            [-5.50, -63.00],
            [-3.70, -61.47]     // Amazon confluence
        ],
        
        tributaryPaths: [
            {
                name: "Acre River",
                path: [
                    [-10.00, -68.00],
                    [-9.50, -68.50],
                    [-8.73, -67.40]    // Confluence at Boca do Acre
                ]
            },
            {
                name: "Iaco River",
                path: [
                    [-9.50, -69.50],
                    [-9.20, -69.00],
                    [-9.13, -68.50]    // Confluence
                ]
            }
        ],
        
        distributaryPaths: [],
        
        cityCoordinates: [
            { name: "Lábrea", coords: [-7.26, -64.80] },
            { name: "Boca do Acre", coords: [-8.73, -67.40] },
            { name: "Sena Madureira", coords: [-9.07, -68.67] },
            { name: "Pauini", coords: [-7.73, -66.98] }
        ],
        
        damCoordinates: [],
        
        flightLandmarks: [
            { progress: 0, name: "Peruvian Andes Foothills", icon: "🏔️", description: "Source region" },
            { progress: 0.20, name: "Peru-Brazil Border", icon: "🚧", description: "International boundary" },
            { progress: 0.35, name: "Sena Madureira", icon: "🏘️", description: "Acre state town" },
            { progress: 0.50, name: "Boca do Acre", icon: "🔀", description: "Acre River confluence" },
            { progress: 0.65, name: "Extreme Meanders", icon: "🐍", description: "World's most winding river" },
            { progress: 0.80, name: "Lábrea", icon: "🏙️", description: "Largest city on Purus" },
            { progress: 0.95, name: "Várzea Forests", icon: "🌳", description: "Flooded Amazon forest" },
            { progress: 1.0, name: "Amazon Confluence", icon: "🌊", description: "Joins Amazon River" }
        ],
        
        economicImportance: [
            "Brazil nut harvesting",
            "Rubber tapping (historically)",
            "Fishing",
            "River transportation",
            "Timber extraction",
            "Indigenous subsistence"
        ],
        
        environmentalIssues: [
            "Deforestation pressure",
            "Illegal logging",
            "Mercury from gold mining",
            "Climate change impacts",
            "Biodiversity threats",
            "Indigenous land encroachment"
        ],
        
        waterDisputes: [],
        
        historicalImportance: [
            {
                title: "Rubber Boom",
                description: "The Purus was a major rubber extraction route during the Amazon rubber boom (1879-1912)."
            },
            {
                title: "Indigenous Territories",
                description: "Home to isolated indigenous groups, some remaining uncontacted to this day."
            }
        ]
    },
    
    // ========================================
    // 20. MADEIRA RIVER
    // ========================================
    {
        id: "madeira",
        name: "Madeira River",
        length: 3250,
        continent: "south-america",
        image: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=800",
        
        countries: [
            { name: "Bolivia", flag: "🇧🇴" },
            { name: "Brazil", flag: "🇧🇷" }
        ],
        
        states: [
            "Beni (Bolivia)", "Rondônia", "Amazonas"
        ],
        
        source: {
            location: "Confluence of Mamoré and Beni Rivers, Bolivia/Brazil border",
            type: "River confluence",
            elevation: "130 m",
            coordinates: [-10.3833, -65.4000]
        },
        
        mouth: {
            location: "Amazon River, Brazil",
            type: "River confluence",
            delta: "N/A - tributary confluence",
            coordinates: [-3.4500, -58.8000]
        },
        
        tributaries: {
            leftBank: [
                "Aripuanã River",
                "Roosevelt River (Rio da Dúvida)"
            ],
            rightBank: [
                "Abunã River",
                "Ji-Paraná River (Machado River)"
            ]
        },
        
        distributaries: [],
        
        majorCities: [
            "Porto Velho", "Humaitá", "Manicoré",
            "Nova Mamoré", "Guajará-Mirim"
        ],
        
        dams: [
            { name: "Santo Antônio Dam", details: "Porto Velho, 3.6 GW" },
            { name: "Jirau Dam", details: "Porto Velho, 3.75 GW" },
            { name: "Samuel Dam", details: "Jamari River, 0.2 GW" }
        ],
        
        basinArea: "1,420,000 km²",
        discharge: "31,200 m³/s",
        
        riverPath: [
            [-10.38, -65.40],   // Source - Mamoré-Beni confluence
            [-9.50, -65.30],
            [-8.77, -63.90],    // Porto Velho
            [-8.00, -62.50],
            [-7.50, -61.00],    // Humaitá
            [-6.00, -60.50],
            [-5.15, -60.33],    // Manicoré
            [-3.45, -58.80]     // Amazon confluence
        ],
        
        tributaryPaths: [
            {
                name: "Ji-Paraná River",
                path: [
                    [-10.80, -61.50],
                    [-9.50, -62.00],
                    [-8.77, -63.00]    // Confluence near Porto Velho
                ]
            },
            {
                name: "Aripuanã River",
                path: [
                    [-10.00, -59.00],
                    [-8.00, -59.50],
                    [-5.50, -60.00]    // Confluence
                ]
            },
            {
                name: "Roosevelt River",
                path: [
                    [-10.50, -60.50],
                    [-8.50, -60.00],
                    [-7.70, -60.50]    // Confluence
                ]
            }
        ],
        
        distributaryPaths: [],
        
        cityCoordinates: [
            { name: "Porto Velho", coords: [-8.77, -63.90] },
            { name: "Humaitá", coords: [-7.50, -63.02] },
            { name: "Manicoré", coords: [-5.81, -61.30] },
            { name: "Guajará-Mirim", coords: [-10.78, -65.35] }
        ],
        
        damCoordinates: [
            { name: "Santo Antônio Dam", coords: [-8.80, -63.95], details: "3.6 GW capacity" },
            { name: "Jirau Dam", coords: [-9.27, -64.65], details: "3.75 GW capacity" }
        ],
        
        flightLandmarks: [
            { progress: 0, name: "Mamoré-Beni Confluence", icon: "🔀", description: "Madeira begins" },
            { progress: 0.15, name: "Guajará-Mirim", icon: "🚂", description: "Historic Madeira-Mamoré Railway" },
            { progress: 0.30, name: "Jirau Dam", icon: "🏗️", description: "Major hydroelectric dam" },
            { progress: 0.40, name: "Porto Velho", icon: "🏙️", description: "Rondônia state capital" },
            { progress: 0.55, name: "Santo Antônio Dam", icon: "⚡", description: "Hydroelectric complex" },
            { progress: 0.70, name: "Humaitá", icon: "🏘️", description: "Trans-Amazon Highway crossing" },
            { progress: 0.85, name: "Manicoré", icon: "🌳", description: "Rainforest town" },
            { progress: 1.0, name: "Amazon Confluence", icon: "🌊", description: "Joins Amazon River" }
        ],
        
        economicImportance: [
            "Major hydroelectric power (Santo Antônio, Jirau)",
            "Soybean export route",
            "Timber transport",
            "Gold and tin mining",
            "Fishing",
            "Agricultural products transport"
        ],
        
        environmentalIssues: [
            "Dam impacts on fish migration",
            "Deforestation in basin",
            "Mercury from gold mining",
            "Sediment disruption from dams",
            "Flooding from reservoirs",
            "Indigenous displacement"
        ],
        
        waterDisputes: [],
        
        historicalImportance: [
            {
                title: "Madeira-Mamoré Railway",
                description: "The 'Devil's Railway' (1907-1912) was built to bypass the Madeira rapids, costing thousands of workers' lives."
            },
            {
                title: "Rubber Boom",
                description: "The Madeira was a vital rubber transport route during the Amazon rubber boom."
            },
            {
                title: "Roosevelt-Rondon Expedition",
                description: "Theodore Roosevelt and Brazilian explorer Cândido Rondon explored the 'River of Doubt' (Roosevelt River tributary) in 1914."
            }
        ]
    }
];
