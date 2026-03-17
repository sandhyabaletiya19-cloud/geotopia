/**
 * GEOTOPIA - Rivers Data File 7
 * Rivers 61-70 (Kama to Volta)
 * Kama, Guaporé, Limpopo, Krishna, Narmada, Athabasca, Olenëk, Marañón, Kolyma, Volta
 */

const RIVERS_DATA_7 = [
    // ========================================
    // 61. KAMA RIVER
    // ========================================
    {
        id: "kama",
        name: "Kama River",
        length: 1805,
        continent: "europe",
        image: "https://images.unsplash.com/photo-1580502304784-8985b7eb7260?w=800",
        
        countries: [
            { name: "Russia", flag: "🇷🇺" }
        ],
        
        states: [
            "Udmurt Republic", "Kirov Oblast", "Perm Krai",
            "Republic of Tatarstan", "Republic of Bashkortostan"
        ],
        
        source: {
            location: "Verkhnekamskaya Upland, Udmurt Republic",
            type: "Springs",
            elevation: "335 m",
            coordinates: [58.1833, 53.7500]
        },
        
        mouth: {
            location: "Volga River, at Kuibyshev Reservoir",
            type: "Confluence",
            delta: "Joins Volga at Kuibyshev Reservoir",
            coordinates: [55.3833, 49.9833]
        },
        
        tributaries: {
            leftBank: [
                "Vyatka River",
                "Izh River",
                "Ik River",
                "Zay River"
            ],
            rightBank: [
                "Vishera River",
                "Chusovaya River",
                "Sylva River",
                "Belaya River"
            ]
        },
        
        distributaries: [
            "Kama channels at Volga confluence"
        ],
        
        majorCities: [
            "Solikamsk", "Berezniki", "Perm", "Krasnokamsk",
            "Sarapul", "Naberezhnye Chelny", "Nizhnekamsk", "Chistopol"
        ],
        
        dams: [
            { name: "Kama Hydroelectric Station", details: "Perm, 552 MW, 1954" },
            { name: "Votkinsk Hydroelectric Station", details: "Udmurtia, 1,020 MW, 1961" },
            { name: "Nizhnekamsk Hydroelectric Station", details: "Tatarstan, 1,205 MW, 1979" }
        ],
        
        basinArea: "507,000 km²",
        discharge: "4,100 m³/s",
        
        riverPath: [
            [58.18, 53.75],    // Source - Udmurt Republic
            [58.50, 54.50],
            [59.00, 55.50],
            [59.50, 56.00],
            [59.67, 56.78],    // Solikamsk
            [59.41, 56.82],    // Berezniki
            [58.50, 56.50],
            [58.01, 56.25],    // Perm
            [57.50, 56.00],
            [57.00, 55.50],
            [56.50, 54.00],
            [56.07, 53.21],    // Sarapul
            [55.72, 52.42],    // Naberezhnye Chelny
            [55.64, 51.82],    // Nizhnekamsk
            [55.38, 49.98]     // Volga River (Mouth)
        ],
        
        tributaryPaths: [
            {
                name: "Belaya River",
                path: [
                    [53.75, 56.00],    // Bashkortostan
                    [54.50, 56.00],    // Ufa
                    [55.50, 53.50],
                    [55.70, 52.50]     // Confluence
                ]
            },
            {
                name: "Vyatka River",
                path: [
                    [59.00, 52.00],    // Kirov Oblast
                    [58.60, 49.68],    // Kirov
                    [56.50, 51.50],
                    [55.50, 51.00]     // Confluence
                ]
            },
            {
                name: "Chusovaya River",
                path: [
                    [56.50, 59.00],    // Ural Mountains
                    [57.50, 58.00],
                    [58.00, 56.50]     // Confluence
                ]
            },
            {
                name: "Vishera River",
                path: [
                    [61.00, 59.50],    // Northern Urals
                    [60.00, 58.00],
                    [59.50, 56.50]     // Confluence
                ]
            }
        ],
        
        distributaryPaths: [
            {
                name: "Kama-Volga Confluence",
                path: [
                    [55.40, 50.00],
                    [55.38, 49.98]     // Kuibyshev Reservoir
                ]
            }
        ],
        
        cityCoordinates: [
            { name: "Solikamsk", coords: [59.67, 56.78] },
            { name: "Berezniki", coords: [59.41, 56.82] },
            { name: "Perm", coords: [58.01, 56.25] },
            { name: "Sarapul", coords: [56.47, 53.80] },
            { name: "Naberezhnye Chelny", coords: [55.72, 52.42] },
            { name: "Nizhnekamsk", coords: [55.64, 51.82] }
        ],
        
        damCoordinates: [
            { name: "Kama Hydroelectric Station", coords: [58.10, 56.40], details: "552 MW hydroelectric" },
            { name: "Votkinsk Dam", coords: [56.90, 54.00], details: "1,020 MW hydroelectric" },
            { name: "Nizhnekamsk Dam", coords: [55.65, 51.85], details: "1,205 MW hydroelectric" }
        ],
        
        flightLandmarks: [
            { progress: 0, name: "Verkhnekamskaya Upland", icon: "🏔️", description: "Source springs" },
            { progress: 0.10, name: "Upper Kama", icon: "🌲", description: "Forested headwaters" },
            { progress: 0.20, name: "Solikamsk", icon: "🏭", description: "Historic salt mining town" },
            { progress: 0.25, name: "Berezniki", icon: "🏭", description: "Potash mining center" },
            { progress: 0.40, name: "Perm", icon: "🏙️", description: "Regional capital" },
            { progress: 0.50, name: "Kama Dam", icon: "🏗️", description: "First major dam" },
            { progress: 0.60, name: "Votkinsk Dam", icon: "🏗️", description: "Second major dam" },
            { progress: 0.75, name: "Naberezhnye Chelny", icon: "🏙️", description: "KAMAZ truck factory" },
            { progress: 0.85, name: "Nizhnekamsk", icon: "🏭", description: "Petrochemical center" },
            { progress: 1.0, name: "Volga River", icon: "🌊", description: "Confluence" }
        ],
        
        economicImportance: [
            "Largest tributary of the Volga by discharge",
            "Major hydroelectric power production",
            "Industrial heartland (machinery, chemicals)",
            "KAMAZ heavy truck manufacturing",
            "Potash and salt mining",
            "Navigation corridor"
        ],
        
        environmentalIssues: [
            "Industrial pollution from chemical plants",
            "Mining waste contamination",
            "Dam impacts on fish migration",
            "Water quality degradation",
            "Reservoir-induced seismicity concerns",
            "Oil spills from petrochemical industry"
        ],
        
        waterDisputes: [
            {
                title: "Water Quality Management",
                description: "Multiple industrial regions coordinate on pollution control in the heavily industrialized basin."
            }
        ],
        
        historicalImportance: [
            {
                title: "Salt Trade",
                description: "Solikamsk salt mines operated since the 15th century, giving the Kama region its early wealth."
            },
            {
                title: "Ural Gateway",
                description: "The Kama and its tributaries provided access to the Ural Mountains and Siberia."
            },
            {
                title: "KAMAZ Factory",
                description: "The massive KAMAZ truck factory at Naberezhnye Chelny, built in the 1970s, made the city famous."
            },
            {
                title: "Perm Period",
                description: "The geological Permian Period is named after Perm on the Kama, where rocks of this age were first studied."
            }
        ]
    },

    // ========================================
    // 62. GUAPORÉ RIVER (ITÉNEZ)
    // ========================================
    {
        id: "guapore",
        name: "Guaporé River",
        length: 1749,
        continent: "south-america",
        image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=800",
        
        countries: [
            { name: "Brazil", flag: "🇧🇷" },
            { name: "Bolivia", flag: "🇧🇴" }
        ],
        
        states: [
            "Mato Grosso", "Rondônia",
            "Santa Cruz Department", "Beni Department"
        ],
        
        source: {
            location: "Chapada dos Parecis, Mato Grosso, Brazil",
            type: "Plateau springs",
            elevation: "600 m",
            coordinates: [-13.5000, -59.5000]
        },
        
        mouth: {
            location: "Mamoré River, Bolivia/Brazil border",
            type: "Confluence",
            delta: "Joins Mamoré to form Madeira River system",
            coordinates: [-11.9167, -65.0500]
        },
        
        tributaries: {
            leftBank: [
                "Rio Branco",
                "Rio Colorado",
                "Rio Cautário"
            ],
            rightBank: [
                "Rio Paragua",
                "Rio Blanco",
                "Rio Baures",
                "Rio Itonamas"
            ]
        },
        
        distributaries: [
            "Guaporé-Mamoré confluence channels"
        ],
        
        majorCities: [
            "Vila Bela da Santíssima Trindade", "Pontes e Lacerda",
            "Costa Marques", "Guajará-Mirim", "San Ignacio de Moxos"
        ],
        
        dams: [
            { name: "No major dams", details: "River flows freely, forms international boundary" }
        ],
        
        basinArea: "130,000 km²",
        discharge: "3,000 m³/s",
        
        riverPath: [
            [-13.50, -59.50],   // Source - Chapada dos Parecis
            [-14.00, -59.70],
            [-14.50, -60.00],
            [-15.00, -59.95],   // Vila Bela area
            [-14.50, -60.50],
            [-14.00, -61.00],
            [-13.50, -61.50],
            [-13.00, -62.00],
            [-12.75, -62.65],   // Costa Marques area
            [-12.50, -63.50],
            [-12.20, -64.00],
            [-12.00, -64.50],
            [-11.92, -65.05]    // Mamoré River (Mouth)
        ],
        
        tributaryPaths: [
            {
                name: "Rio Paragua",
                path: [
                    [-14.50, -62.50],   // Bolivia
                    [-14.00, -63.00],
                    [-13.50, -63.50]    // Confluence
                ]
            },
            {
                name: "Rio Blanco",
                path: [
                    [-13.00, -64.00],
                    [-12.50, -64.20],
                    [-12.30, -64.30]    // Confluence
                ]
            },
            {
                name: "Rio Baures",
                path: [
                    [-13.50, -64.50],   // Beni Department
                    [-12.50, -64.50],
                    [-12.20, -64.60]    // Confluence
                ]
            }
        ],
        
        distributaryPaths: [
            {
                name: "Guaporé-Mamoré Junction",
                path: [
                    [-12.00, -64.90],
                    [-11.92, -65.05]    // Mamoré
                ]
            }
        ],
        
        cityCoordinates: [
            { name: "Vila Bela da Santíssima Trindade", coords: [-15.00, -59.95] },
            { name: "Pontes e Lacerda", coords: [-15.23, -59.35] },
            { name: "Costa Marques", coords: [-12.44, -64.23] },
            { name: "Guajará-Mirim", coords: [-10.78, -65.33] }
        ],
        
        damCoordinates: [
            { name: "No Major Dams", coords: [-13.00, -62.00], details: "Free-flowing boundary river" }
        ],
        
        flightLandmarks: [
            { progress: 0, name: "Chapada dos Parecis", icon: "🏔️", description: "Source plateau" },
            { progress: 0.15, name: "Vila Bela", icon: "🏛️", description: "Colonial capital" },
            { progress: 0.25, name: "Brazil-Bolivia Border", icon: "🛂", description: "River forms boundary" },
            { progress: 0.40, name: "Cerrado-Amazon Transition", icon: "🌳", description: "Biome change" },
            { progress: 0.55, name: "Costa Marques", icon: "🏘️", description: "Brazilian border town" },
            { progress: 0.70, name: "Rio Paragua Confluence", icon: "🔀", description: "Bolivian tributary" },
            { progress: 0.85, name: "Llanos de Moxos", icon: "🌿", description: "Vast wetlands" },
            { progress: 1.0, name: "Mamoré River", icon: "🌊", description: "Confluence" }
        ],
        
        economicImportance: [
            "International boundary river (Brazil-Bolivia)",
            "Part of Madeira River system (Amazon basin)",
            "Fishing and aquaculture",
            "Gold and mineral deposits",
            "Limited navigation",
            "Ecotourism potential"
        ],
        
        environmentalIssues: [
            "Deforestation in headwaters",
            "Gold mining contamination",
            "Mercury pollution",
            "Fire impacts during dry season",
            "Limited environmental monitoring",
            "Climate change affecting hydrology"
        ],
        
        waterDisputes: [
            {
                title: "Brazil-Bolivia Boundary",
                description: "The Guaporé forms much of the Brazil-Bolivia border, established by the Treaty of Petrópolis (1903)."
            }
        ],
        
        historicalImportance: [
            {
                title: "Colonial Capital",
                description: "Vila Bela da Santíssima Trindade was the capital of colonial Mato Grosso (1752-1835)."
            },
            {
                title: "Treaty of Madrid (1750)",
                description: "The Guaporé became a key boundary between Spanish and Portuguese America."
            },
            {
                title: "Jesuit Missions",
                description: "Spanish Jesuits established missions among the Moxos people in the Bolivian portion."
            },
            {
                title: "Madeira-Mamoré Railway",
                description: "Built to bypass rapids, connecting Bolivia to the Amazon via the Guaporé-Mamoré system."
            }
        ]
    },

    // ========================================
    // 63. LIMPOPO RIVER
    // ========================================
    {
        id: "limpopo",
        name: "Limpopo River",
        length: 1750,
        continent: "africa",
        image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=800",
        
        countries: [
            { name: "South Africa", flag: "🇿🇦" },
            { name: "Botswana", flag: "🇧🇼" },
            { name: "Zimbabwe", flag: "🇿🇼" },
            { name: "Mozambique", flag: "🇲🇿" }
        ],
        
        states: [
            "Gauteng", "Limpopo Province", "North West Province",
            "Central District", "Matabeleland South",
            "Gaza Province"
        ],
        
        source: {
            location: "Witwatersrand, near Johannesburg, South Africa",
            type: "Confluence of Marico and Crocodile Rivers",
            elevation: "1,500 m",
            coordinates: [-25.5333, 27.5833]
        },
        
        mouth: {
            location: "Indian Ocean, Mozambique",
            type: "Delta",
            delta: "Limpopo Delta - mangrove wetlands",
            coordinates: [-25.2000, 33.5333]
        },
        
        tributaries: {
            leftBank: [
                "Marico River",
                "Matlabas River",
                "Mokolo River",
                "Mogalakwena River"
            ],
            rightBank: [
                "Crocodile River",
                "Notwane River",
                "Shashe River",
                "Mwenezi River",
                "Changane River"
            ]
        },
        
        distributaries: [
            "Limpopo Delta channels"
        ],
        
        majorCities: [
            "Johannesburg", "Pretoria", "Gaborone", "Polokwane",
            "Beitbridge", "Chókwè", "Xai-Xai"
        ],
        
        dams: [
            { name: "Hartbeespoort Dam", details: "South Africa, on Crocodile tributary, 1923" },
            { name: "Mokolo Dam", details: "South Africa, on Mokolo tributary" },
            { name: "Gaborone Dam", details: "Botswana, on Notwane tributary" },
            { name: "Massingir Dam", details: "Mozambique, 1977, irrigation" }
        ],
        
        basinArea: "415,000 km²",
        discharge: "170 m³/s (highly variable)",
        
        riverPath: [
            [-25.53, 27.58],   // Source - Crocodile-Marico confluence
            [-24.50, 27.00],
            [-23.50, 27.50],
            [-23.00, 28.00],
            [-22.50, 28.50],
            [-22.22, 29.07],   // Beitbridge
            [-22.50, 30.00],
            [-23.00, 31.00],
            [-23.50, 31.50],
            [-24.00, 32.00],
            [-24.13, 32.43],   // Chókwè
            [-24.50, 33.00],
            [-25.00, 33.30],
            [-25.20, 33.53]    // Indian Ocean (Mouth)
        ],
        
        tributaryPaths: [
            {
                name: "Crocodile River",
                path: [
                    [-26.00, 28.00],   // Gauteng
                    [-25.50, 27.80],
                    [-25.53, 27.58]    // Confluence
                ]
            },
            {
                name: "Shashe River",
                path: [
                    [-20.50, 27.50],   // Botswana
                    [-21.50, 28.00],
                    [-22.00, 28.50]    // Confluence
                ]
            },
            {
                name: "Notwane River",
                path: [
                    [-24.65, 25.92],   // Gaborone
                    [-24.00, 26.50],
                    [-23.50, 27.00]    // Confluence
                ]
            },
            {
                name: "Changane River",
                path: [
                    [-23.00, 33.00],   // Mozambique
                    [-24.00, 33.00],
                    [-24.50, 33.10]    // Confluence
                ]
            }
        ],
        
        distributaryPaths: [
            {
                name: "Limpopo Delta",
                path: [
                    [-25.10, 33.45],
                    [-25.20, 33.53]    // Indian Ocean
                ]
            }
        ],
        
        cityCoordinates: [
            { name: "Johannesburg", coords: [-26.20, 28.03] },
            { name: "Pretoria", coords: [-25.75, 28.19] },
            { name: "Gaborone", coords: [-24.65, 25.92] },
            { name: "Polokwane", coords: [-23.90, 29.47] },
            { name: "Beitbridge", coords: [-22.22, 29.99] },
            { name: "Chókwè", coords: [-24.53, 32.98] },
            { name: "Xai-Xai", coords: [-25.05, 35.53] }
        ],
        
        damCoordinates: [
            { name: "Hartbeespoort Dam", coords: [-25.74, 27.87], details: "Crocodile tributary - tourism" },
            { name: "Gaborone Dam", coords: [-24.69, 25.94], details: "Botswana capital water supply" },
            { name: "Massingir Dam", coords: [-23.93, 32.15], details: "Mozambique irrigation" }
        ],
        
        flightLandmarks: [
            { progress: 0, name: "Witwatersrand Source", icon: "🏔️", description: "Near Johannesburg" },
            { progress: 0.10, name: "Crocodile-Marico Confluence", icon: "🔀", description: "River formation" },
            { progress: 0.25, name: "South Africa-Botswana Border", icon: "🛂", description: "River forms boundary" },
            { progress: 0.35, name: "Shashe Confluence", icon: "🔀", description: "Triple border area" },
            { progress: 0.45, name: "Beitbridge", icon: "🌉", description: "SA-Zimbabwe border" },
            { progress: 0.55, name: "Gonarezhou National Park", icon: "🦁", description: "Wildlife reserve" },
            { progress: 0.70, name: "Massingir Dam", icon: "🏗️", description: "Mozambique dam" },
            { progress: 0.80, name: "Chókwè", icon: "🏙️", description: "Mozambique agricultural center" },
            { progress: 0.95, name: "Limpopo Delta", icon: "🌿", description: "Mangrove wetlands" },
            { progress: 1.0, name: "Indian Ocean", icon: "🌊", description: "River mouth" }
        ],
        
        economicImportance: [
            "Water supply for Johannesburg/Pretoria region",
            "International boundary river (4 countries)",
            "Irrigation for agriculture",
            "Wildlife tourism (Kruger/Gonarezhou parks)",
            "Mining industry water supply",
            "Cross-border trade route"
        ],
        
        environmentalIssues: [
            "Water scarcity in semi-arid basin",
            "Mining pollution from Witwatersrand",
            "Agricultural runoff",
            "Invasive species",
            "Climate change increasing droughts",
            "2000 and 2013 devastating floods"
        ],
        
        waterDisputes: [
            {
                title: "LIMCOM (Limpopo Watercourse Commission)",
                description: "Four-country commission manages shared water resources in the basin."
            },
            {
                title: "Water Allocation",
                description: "Upstream development in South Africa affects downstream Mozambique; ongoing negotiations."
            }
        ],
        
        historicalImportance: [
            {
                title: "Rudyard Kipling",
                description: "The 'great grey-green, greasy Limpopo River' features in Kipling's 'Just So Stories' (1902)."
            },
            {
                title: "Great Zimbabwe",
                description: "The ancient Great Zimbabwe civilization (11th-15th century) was in the Limpopo basin."
            },
            {
                title: "Mapungubwe Kingdom",
                description: "A powerful pre-colonial kingdom (900-1300 CE) flourished at the Limpopo-Shashe confluence."
            },
            {
                title: "Colonial Boundary",
                description: "The Limpopo became a key boundary between British and Portuguese territories."
            }
        ]
    },

    // ========================================
    // 64. KRISHNA RIVER
    // ========================================
    {
        id: "krishna",
        name: "Krishna River",
        length: 1400,
        continent: "asia",
        image: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=800",
        
        countries: [
            { name: "India", flag: "🇮🇳" }
        ],
        
        states: [
            "Maharashtra", "Karnataka", "Telangana", "Andhra Pradesh"
        ],
        
        source: {
            location: "Mahabaleshwar, Western Ghats, Maharashtra",
            type: "Sacred spring at Old Mahabaleshwar",
            elevation: "1,337 m",
            coordinates: [17.9333, 73.6667]
        },
        
        mouth: {
            location: "Bay of Bengal, Andhra Pradesh",
            type: "Delta",
            delta: "Krishna River Delta - major rice growing region",
            coordinates: [15.8333, 80.9167]
        },
        
        tributaries: {
            leftBank: [
                "Koyna River",
                "Panchganga River",
                "Dudhganga River",
                "Ghataprabha River",
                "Malaprabha River"
            ],
            rightBank: [
                "Yerla River",
                "Bhima River",
                "Tungabhadra River",
                "Musi River"
            ]
        },
        
        distributaries: [
            "Krishna Delta channels",
            "Upputeru River",
            "Kommamur Canal"
        ],
        
        majorCities: [
            "Wai", "Sangli", "Belgaum", "Vijayawada",
            "Amaravati", "Machilipatnam", "Guntur"
        ],
        
        dams: [
            { name: "Koyna Dam", details: "Maharashtra, 1,960 MW, 1967" },
            { name: "Nagarjuna Sagar Dam", details: "Telangana/AP, 816 MW, 1967" },
            { name: "Srisailam Dam", details: "Telangana/AP, 1,670 MW, 1984" },
            { name: "Prakasam Barrage", details: "Andhra Pradesh, 1957, irrigation" },
            { name: "Almatti Dam", details: "Karnataka, 560 MW, 2005" }
        ],
        
        basinArea: "258,948 km²",
        discharge: "2,213 m³/s",
        
        riverPath: [
            [17.93, 73.67],    // Source - Mahabaleshwar
            [17.50, 74.00],
            [17.00, 74.20],
            [16.85, 74.58],    // Sangli
            [16.50, 74.80],
            [16.00, 75.50],
            [16.11, 76.93],    // Raichur area
            [16.00, 78.00],
            [16.52, 78.81],    // Nagarjuna Sagar
            [16.09, 78.87],    // Srisailam
            [16.50, 79.50],
            [16.50, 80.00],
            [16.52, 80.62],    // Vijayawada
            [16.20, 80.80],
            [15.83, 80.92]     // Bay of Bengal (Mouth)
        ],
        
        tributaryPaths: [
            {
                name: "Tungabhadra River",
                path: [
                    [14.00, 75.50],    // Karnataka
                    [15.27, 76.39],    // Hampi
                    [15.50, 77.50],
                    [16.00, 78.00]     // Confluence
                ]
            },
            {
                name: "Bhima River",
                path: [
                    [19.00, 74.00],    // Maharashtra
                    [18.00, 75.00],
                    [17.00, 76.00],
                    [16.50, 76.50]     // Confluence
                ]
            },
            {
                name: "Koyna River",
                path: [
                    [17.50, 73.75],
                    [17.30, 73.80],
                    [17.20, 74.00]     // Confluence
                ]
            },
            {
                name: "Musi River",
                path: [
                    [17.38, 78.47],    // Hyderabad
                    [17.00, 79.00],
                    [16.50, 79.50]     // Confluence
                ]
            }
        ],
        
        distributaryPaths: [
            {
                name: "Krishna Delta",
                path: [
                    [16.20, 80.80],
                    [15.83, 80.92]     // Bay of Bengal
                ]
            }
        ],
        
        cityCoordinates: [
            { name: "Sangli", coords: [16.85, 74.58] },
            { name: "Vijayawada", coords: [16.52, 80.62] },
            { name: "Amaravati", coords: [16.57, 80.36] },
            { name: "Guntur", coords: [16.31, 80.44] },
            { name: "Machilipatnam", coords: [16.19, 81.13] }
        ],
        
        damCoordinates: [
            { name: "Nagarjuna Sagar Dam", coords: [16.57, 79.31], details: "816 MW - One of world's largest masonry dams" },
            { name: "Srisailam Dam", coords: [16.09, 78.90], details: "1,670 MW hydroelectric" },
            { name: "Almatti Dam", coords: [16.33, 75.89], details: "560 MW - Karnataka" }
        ],
        
        flightLandmarks: [
            { progress: 0, name: "Mahabaleshwar", icon: "🛕", description: "Sacred Western Ghats source" },
            { progress: 0.10, name: "Koyna Dam", icon: "🏗️", description: "Major hydroelectric" },
            { progress: 0.20, name: "Sangli", icon: "🏙️", description: "Sugar industry hub" },
            { progress: 0.35, name: "Almatti Dam", icon: "🏗️", description: "Karnataka dam" },
            { progress: 0.45, name: "Tungabhadra Confluence", icon: "🔀", description: "Near Hampi ruins" },
            { progress: 0.55, name: "Srisailam Dam", icon: "🏗️", description: "Temple and dam" },
            { progress: 0.70, name: "Nagarjuna Sagar", icon: "🏗️", description: "Buddhist heritage site" },
            { progress: 0.85, name: "Vijayawada", icon: "🏙️", description: "AP's commercial hub" },
            { progress: 0.90, name: "Amaravati", icon: "🏛️", description: "New AP capital" },
            { progress: 1.0, name: "Bay of Bengal", icon: "🌊", description: "Krishna Delta" }
        ],
        
        economicImportance: [
            "Third largest river in India by water flow",
            "Major hydroelectric power generation",
            "Irrigation for rice, sugarcane, cotton",
            "Drinking water for millions",
            "Krishna Pushkaram pilgrimage festival",
            "Delta supports intensive agriculture"
        ],
        
        environmentalIssues: [
            "Interstate water disputes",
            "Industrial pollution",
            "Sand mining damaging riverbed",
            "Reduced flow to delta",
            "Flooding during monsoon",
            "Water quality degradation"
        ],
        
        waterDisputes: [
            {
                title: "Krishna Water Disputes Tribunal",
                description: "Long-standing disputes between Maharashtra, Karnataka, and Andhra Pradesh over water sharing."
            },
            {
                title: "Almatti Dam Dispute",
                description: "Andhra Pradesh opposed Karnataka's dam height increase, claiming it reduces downstream water."
            }
        ],
        
        historicalImportance: [
            {
                title: "Sacred River",
                description: "The Krishna is one of India's sacred rivers; its source at Mahabaleshwar is a pilgrimage site."
            },
            {
                title: "Vijayanagara Empire",
                description: "The great Vijayanagara Empire (1336-1646) was centered at Hampi on the Tungabhadra tributary."
            },
            {
                title: "Satavahana Dynasty",
                description: "The ancient Satavahana dynasty ruled from Amaravati on the Krishna (2nd century BCE)."
            },
            {
                title: "Nagarjunakonda",
                description: "Major Buddhist center on the Krishna, now partially submerged under Nagarjuna Sagar."
            }
        ]
    },

    // ========================================
    // 65. NARMADA RIVER
    // ========================================
    {
        id: "narmada",
        name: "Narmada River",
        length: 1312,
        continent: "asia",
        image: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=800",
        
        countries: [
            { name: "India", flag: "🇮🇳" }
        ],
        
        states: [
            "Madhya Pradesh", "Maharashtra", "Gujarat"
        ],
        
        source: {
            location: "Amarkantak Plateau, Madhya Pradesh",
            type: "Sacred spring (Narmada Kund)",
            elevation: "1,057 m",
            coordinates: [22.6750, 81.7583]
        },
        
        mouth: {
            location: "Gulf of Khambhat, Arabian Sea, Gujarat",
            type: "Estuary",
            delta: "Wide estuary at Bharuch",
            coordinates: [21.6333, 72.8333]
        },
        
        tributaries: {
            leftBank: [
                "Burhner River",
                "Banjar River",
                "Sher River",
                "Shakkar River",
                "Dudhi River",
                "Tawa River",
                "Ganjal River"
            ],
            rightBank: [
                "Hiran River",
                "Tendoni River",
                "Barna River",
                "Kolar River",
                "Man River",
                "Uri River",
                "Hatni River",
                "Orsang River"
            ]
        },
        
        distributaries: [
            "Narmada Estuary channels"
        ],
        
        majorCities: [
            "Amarkantak", "Jabalpur", "Hoshangabad", "Omkareshwar",
            "Maheshwar", "Mandla", "Barwani", "Bharuch"
        ],
        
        dams: [
            { name: "Sardar Sarovar Dam", details: "Gujarat, 1,450 MW, 2017, controversial" },
            { name: "Indira Sagar Dam", details: "Madhya Pradesh, 1,000 MW, 2005" },
            { name: "Omkareshwar Dam", details: "Madhya Pradesh, 520 MW, 2007" },
            { name: "Maheshwar Dam", details: "Madhya Pradesh, 400 MW, under construction" },
            { name: "Bargi Dam", details: "Madhya Pradesh, 105 MW, 1988" }
        ],
        
        basinArea: "98,796 km²",
        discharge: "1,447 m³/s",
        
        riverPath: [
            [22.68, 81.76],    // Source - Amarkantak
            [22.80, 81.00],
            [23.00, 80.50],
            [23.17, 79.93],    // Jabalpur
            [22.80, 79.00],
            [22.76, 77.73],    // Hoshangabad
            [22.50, 77.00],
            [22.25, 76.15],    // Omkareshwar
            [22.18, 75.59],    // Maheshwar
            [22.00, 75.00],
            [21.90, 74.50],
            [21.80, 74.00],
            [21.75, 73.50],
            [21.70, 73.00],    // Bharuch area
            [21.63, 72.83]     // Gulf of Khambhat (Mouth)
        ],
        
        tributaryPaths: [
            {
                name: "Tawa River",
                path: [
                    [22.50, 78.50],
                    [22.60, 78.00],
                    [22.70, 77.80]     // Confluence
                ]
            },
            {
                name: "Orsang River",
                path: [
                    [22.50, 73.80],
                    [22.00, 73.50],
                    [21.75, 73.40]     // Confluence
                ]
            },
            {
                name: "Man River",
                path: [
                    [21.50, 75.00],
                    [21.80, 74.50],
                    [21.90, 74.30]     // Confluence
                ]
            }
        ],
        
        distributaryPaths: [
            {
                name: "Narmada Estuary",
                path: [
                    [21.68, 72.90],
                    [21.63, 72.83]     // Gulf of Khambhat
                ]
            }
        ],
        
        cityCoordinates: [
            { name: "Amarkantak", coords: [22.68, 81.75] },
            { name: "Jabalpur", coords: [23.17, 79.93] },
            { name: "Hoshangabad", coords: [22.76, 77.73] },
            { name: "Omkareshwar", coords: [22.25, 76.15] },
            { name: "Maheshwar", coords: [22.18, 75.59] },
            { name: "Bharuch", coords: [21.70, 72.97] }
        ],
        
        damCoordinates: [
            { name: "Sardar Sarovar Dam", coords: [21.83, 73.75], details: "1,450 MW - Controversial mega-dam" },
            { name: "Indira Sagar Dam", coords: [22.28, 76.47], details: "1,000 MW - Largest reservoir in India" },
            { name: "Omkareshwar Dam", coords: [22.18, 76.08], details: "520 MW hydroelectric" }
        ],
        
        flightLandmarks: [
            { progress: 0, name: "Amarkantak", icon: "🛕", description: "Sacred source spring" },
            { progress: 0.15, name: "Mandla", icon: "🏘️", description: "Gond tribal heartland" },
            { progress: 0.25, name: "Marble Rocks", icon: "🏞️", description: "Bhedaghat gorge near Jabalpur" },
            { progress: 0.35, name: "Jabalpur", icon: "🏙️", description: "MP's commercial hub" },
            { progress: 0.45, name: "Bargi Dam", icon: "🏗️", description: "First major dam" },
            { progress: 0.55, name: "Hoshangabad", icon: "🏘️", description: "Holy town" },
            { progress: 0.65, name: "Omkareshwar", icon: "🛕", description: "Jyotirlinga island temple" },
            { progress: 0.75, name: "Maheshwar", icon: "🏛️", description: "Ancient Mahishmati" },
            { progress: 0.85, name: "Sardar Sarovar", icon: "🏗️", description: "Mega dam" },
            { progress: 0.95, name: "Bharuch", icon: "🏙️", description: "Estuary city" },
            { progress: 1.0, name: "Gulf of Khambhat", icon: "🌊", description: "Arabian Sea" }
        ],
        
        economicImportance: [
            "Fifth longest river in India",
            "Major hydroelectric power production",
            "Sardar Sarovar provides Gujarat's water supply",
            "Irrigation for central India agriculture",
            "Hindu pilgrimage circuit (Narmada Parikrama)",
            "Industrial water supply"
        ],
        
        environmentalIssues: [
            "Sardar Sarovar Dam controversy - mass displacement",
            "Multiple dams fragmenting river ecosystem",
            "Reduced flow to estuary",
            "Sand mining",
            "Deforestation in catchment",
            "Pollution from industries and cities"
        ],
        
        waterDisputes: [
            {
                title: "Narmada Water Disputes Tribunal",
                description: "Allocated water between Gujarat, Maharashtra, Madhya Pradesh, and Rajasthan (1979)."
            },
            {
                title: "Sardar Sarovar Controversy",
                description: "Decades of protests against dam's displacement of 300,000+ people, led by Narmada Bachao Andolan."
            }
        ],
        
        historicalImportance: [
            {
                title: "Sacred River",
                description: "The Narmada is one of India's seven sacred rivers; circumambulating it (parikrama) takes 3+ years."
            },
            {
                title: "Adi Shankaracharya",
                description: "The philosopher Shankaracharya met his guru Govindapada on the Narmada at Omkareshwar."
            },
            {
                title: "Holkar Dynasty",
                description: "The Maratha Holkars ruled from Maheshwar on the Narmada in the 18th-19th centuries."
            },
            {
                title: "Ancient Mahishmati",
                description: "Maheshwar is believed to be the ancient city of Mahishmati, mentioned in the Mahabharata."
            }
        ]
    }
      // ========================================
    // 66. ATHABASCA RIVER
    // ========================================
    {
        id: "athabasca",
        name: "Athabasca River",
        length: 1538,
        continent: "north-america",
        image: "https://images.unsplash.com/photo-1504893524553-b855bce32c67?w=800",
        
        countries: [
            { name: "Canada", flag: "🇨🇦" }
        ],
        
        states: [
            "Alberta"
        ],
        
        source: {
            location: "Columbia Icefield, Jasper National Park, Alberta",
            type: "Glacial (Athabasca Glacier)",
            elevation: "1,980 m",
            coordinates: [52.2167, -117.2333]
        },
        
        mouth: {
            location: "Lake Athabasca, Alberta/Saskatchewan",
            type: "Lake inlet",
            delta: "Athabasca Delta - largest boreal delta in world",
            coordinates: [58.6667, -110.8833]
        },
        
        tributaries: {
            leftBank: [
                "Whirlpool River",
                "Miette River",
                "McLeod River",
                "Pembina River",
                "Lesser Slave River"
            ],
            rightBank: [
                "Sunwapta River",
                "Maligne River",
                "Berland River",
                "Freeman River",
                "La Biche River",
                "Clearwater River"
            ]
        },
        
        distributaries: [
            "Athabasca Delta channels",
            "Embarras River distributary"
        ],
        
        majorCities: [
            "Jasper", "Hinton", "Whitecourt", "Athabasca",
            "Fort McMurray", "Fort Chipewyan"
        ],
        
        dams: [
            { name: "No major dams on main stem", details: "River flows freely; oil sands use water extraction" }
        ],
        
        basinArea: "95,300 km²",
        discharge: "629 m³/s",
        
        riverPath: [
            [52.22, -117.23],   // Source - Columbia Icefield
            [52.50, -117.50],
            [52.87, -118.08],   // Jasper
            [53.20, -117.60],
            [53.41, -117.59],   // Hinton
            [54.00, -116.50],
            [54.15, -115.69],   // Whitecourt
            [54.50, -114.50],
            [54.72, -113.29],   // Athabasca town
            [55.50, -112.00],
            [56.50, -111.50],
            [56.73, -111.38],   // Fort McMurray
            [57.50, -111.30],
            [58.20, -111.10],
            [58.67, -110.88]    // Lake Athabasca (Mouth)
        ],
        
        tributaryPaths: [
            {
                name: "Clearwater River",
                path: [
                    [56.70, -110.00],
                    [56.72, -111.10],
                    [56.73, -111.38]   // Confluence at Fort McMurray
                ]
            },
            {
                name: "Lesser Slave River",
                path: [
                    [55.30, -115.00],  // Lesser Slave Lake
                    [55.00, -114.00],
                    [54.80, -113.50]   // Confluence
                ]
            },
            {
                name: "Pembina River",
                path: [
                    [53.50, -116.50],
                    [54.00, -115.50],
                    [54.30, -114.80]   // Confluence
                ]
            },
            {
                name: "La Biche River",
                path: [
                    [54.80, -112.00],  // Lac La Biche
                    [55.50, -111.50],
                    [56.00, -111.40]   // Confluence
                ]
            }
        ],
        
        distributaryPaths: [
            {
                name: "Athabasca Delta",
                path: [
                    [58.50, -111.00],
                    [58.67, -110.88]   // Lake Athabasca
                ]
            },
            {
                name: "Embarras Channel",
                path: [
                    [58.40, -111.20],
                    [58.60, -111.50]   // Delta area
                ]
            }
        ],
        
        cityCoordinates: [
            { name: "Jasper", coords: [52.87, -118.08] },
            { name: "Hinton", coords: [53.41, -117.59] },
            { name: "Whitecourt", coords: [54.15, -115.69] },
            { name: "Athabasca", coords: [54.72, -113.29] },
            { name: "Fort McMurray", coords: [56.73, -111.38] },
            { name: "Fort Chipewyan", coords: [58.72, -111.15] }
        ],
        
        damCoordinates: [
            { name: "Oil Sands Operations", coords: [56.90, -111.40], details: "Major water extraction, no dams" }
        ],
        
        flightLandmarks: [
            { progress: 0, name: "Columbia Icefield", icon: "🏔️", description: "Glacial source" },
            { progress: 0.05, name: "Athabasca Glacier", icon: "🧊", description: "Accessible glacier" },
            { progress: 0.10, name: "Jasper National Park", icon: "🏞️", description: "UNESCO World Heritage" },
            { progress: 0.15, name: "Jasper", icon: "🏘️", description: "Mountain resort town" },
            { progress: 0.30, name: "Hinton", icon: "🏙️", description: "Forest industry town" },
            { progress: 0.45, name: "Athabasca Town", icon: "🏘️", description: "Historic fur trade post" },
            { progress: 0.60, name: "Boreal Forest", icon: "🌲", description: "Vast taiga" },
            { progress: 0.75, name: "Fort McMurray", icon: "🛢️", description: "Oil sands capital" },
            { progress: 0.90, name: "Athabasca Delta", icon: "🌿", description: "World's largest boreal delta" },
            { progress: 1.0, name: "Lake Athabasca", icon: "🌊", description: "River terminus" }
        ],
        
        economicImportance: [
            "Oil sands industry water source",
            "Part of Mackenzie River system (Arctic drainage)",
            "Forestry and pulp industry",
            "Tourism (Jasper National Park)",
            "Historic fur trade route",
            "Indigenous subsistence"
        ],
        
        environmentalIssues: [
            "Oil sands tailings ponds contamination",
            "Water extraction by oil industry",
            "Downstream contamination concerns",
            "Climate change affecting glacial source",
            "Reduced flows affecting delta",
            "Air quality from oil sands"
        ],
        
        waterDisputes: [
            {
                title: "Oil Sands Water Use",
                description: "Environmental groups and Indigenous communities challenge industry water extraction licenses."
            },
            {
                title: "Peace-Athabasca Delta",
                description: "Upstream dams on Peace River and oil sands extraction affect the shared delta ecosystem."
            }
        ],
        
        historicalImportance: [
            {
                title: "Fur Trade Route",
                description: "The Athabasca was a key route for North West Company fur traders, connecting to the Mackenzie system."
            },
            {
                title: "Methye Portage",
                description: "The famous portage connected the Athabasca basin to the Churchill River and Hudson Bay."
            },
            {
                title: "Fort Chipewyan",
                description: "Founded in 1788, it's Alberta's oldest European settlement, at the river's mouth."
            },
            {
                title: "Oil Discovery",
                description: "Fur traders noted oil seeps along the Athabasca in the 1700s, leading to today's oil sands industry."
            }
        ]
    },

    // ========================================
    // 67. OLENËK RIVER
    // ========================================
    {
        id: "olenyok",
        name: "Olenëk River",
        length: 2292,
        continent: "asia",
        image: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=800",
        
        countries: [
            { name: "Russia", flag: "🇷🇺" }
        ],
        
        states: [
            "Krasnoyarsk Krai", "Sakha Republic (Yakutia)"
        ],
        
        source: {
            location: "Vilyuy Plateau, Krasnoyarsk Krai",
            type: "Plateau streams",
            elevation: "600 m",
            coordinates: [65.5000, 106.0000]
        },
        
        mouth: {
            location: "Olenëk Bay, Laptev Sea, Arctic Ocean",
            type: "Estuary",
            delta: "Olenëk estuary - Arctic coast",
            coordinates: [72.9667, 123.0833]
        },
        
        tributaries: {
            leftBank: [
                "Arga-Sala River",
                "Silligir River",
                "Kuoyka River"
            ],
            rightBank: [
                "Buolkalakh River",
                "Beenchime River",
                "Purr River"
            ]
        },
        
        distributaries: [
            "Olenëk estuary channels"
        ],
        
        majorCities: [
            "Olenëk (village)", "Taymylyr"
        ],
        
        dams: [
            { name: "No dams", details: "Remote, free-flowing Arctic river" }
        ],
        
        basinArea: "219,000 km²",
        discharge: "1,210 m³/s",
        
        riverPath: [
            [65.50, 106.00],   // Source - Vilyuy Plateau
            [66.00, 108.00],
            [67.00, 110.00],
            [68.00, 112.00],
            [68.50, 114.00],
            [68.50, 116.00],
            [68.40, 118.00],
            [68.60, 119.50],   // Olenëk village area
            [69.50, 120.00],
            [70.50, 121.00],
            [71.50, 122.00],
            [72.50, 122.80],
            [72.97, 123.08]    // Laptev Sea (Mouth)
        ],
        
        tributaryPaths: [
            {
                name: "Arga-Sala River",
                path: [
                    [67.50, 107.50],
                    [68.00, 109.00],
                    [68.20, 111.00]    // Confluence
                ]
            },
            {
                name: "Buolkalakh River",
                path: [
                    [69.00, 117.00],
                    [68.80, 118.50],
                    [68.70, 119.00]    // Confluence
                ]
            },
            {
                name: "Purr River",
                path: [
                    [71.00, 120.00],
                    [71.20, 121.00],
                    [71.40, 121.80]    // Confluence
                ]
            }
        ],
        
        distributaryPaths: [
            {
                name: "Olenëk Estuary",
                path: [
                    [72.80, 123.00],
                    [72.97, 123.08]    // Laptev Sea
                ]
            }
        ],
        
        cityCoordinates: [
            { name: "Olenëk", coords: [68.53, 112.43] },
            { name: "Taymylyr", coords: [72.63, 123.25] }
        ],
        
        damCoordinates: [
            { name: "No Dams", coords: [68.00, 115.00], details: "Free-flowing Arctic river" }
        ],
        
        flightLandmarks: [
            { progress: 0, name: "Vilyuy Plateau", icon: "🏔️", description: "Remote source region" },
            { progress: 0.15, name: "Anabar Shield", icon: "🪨", description: "Ancient rock formations" },
            { progress: 0.30, name: "Siberian Taiga", icon: "🌲", description: "Vast boreal forest" },
            { progress: 0.45, name: "Olenëk Village", icon: "🏘️", description: "Indigenous settlement" },
            { progress: 0.60, name: "Arctic Treeline", icon: "🌿", description: "Forest-tundra transition" },
            { progress: 0.75, name: "Arctic Tundra", icon: "❄️", description: "Permafrost landscape" },
            { progress: 0.90, name: "Coastal Plains", icon: "🏜️", description: "Arctic coastal zone" },
            { progress: 1.0, name: "Laptev Sea", icon: "🌊", description: "Arctic Ocean" }
        ],
        
        economicImportance: [
            "Diamond mining in basin (Popigai crater)",
            "Reindeer herding for Evenk and Yakut peoples",
            "Fishing (Arctic species)",
            "Potential mineral resources",
            "Scientific research",
            "One of Russia's most pristine rivers"
        ],
        
        environmentalIssues: [
            "Climate change affecting permafrost",
            "Shorter ice-free season",
            "Potential mining impacts",
            "Remoteness limits monitoring",
            "Oil and gas exploration threats",
            "Changing migration patterns of wildlife"
        ],
        
        waterDisputes: [
            {
                title: "No Major Disputes",
                description: "Extremely remote location means minimal human impact and no significant water disputes."
            }
        ],
        
        historicalImportance: [
            {
                title: "Indigenous Homeland",
                description: "Traditional territory of Evenk and Dolgan peoples, who have lived here for thousands of years."
            },
            {
                title: "Russian Exploration",
                description: "Explored by Russian Cossacks in the 17th century during the conquest of Siberia."
            },
            {
                title: "Popigai Crater",
                description: "The basin contains the Popigai impact crater, one of the largest on Earth, containing diamonds."
            },
            {
                title: "Gulag History",
                description: "Parts of the region were used for Soviet-era labor camps."
            }
        ]
    },

    // ========================================
    // 68. MARAÑÓN RIVER
    // ========================================
    {
        id: "maranon",
        name: "Marañón River",
        length: 1415,
        continent: "south-america",
        image: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=800",
        
        countries: [
            { name: "Peru", flag: "🇵🇪" }
        ],
        
        states: [
            "Huánuco Region", "Ancash Region", "La Libertad Region",
            "Cajamarca Region", "Amazonas Region", "Loreto Region"
        ],
        
        source: {
            location: "Cordillera Huayhuash, Andes, Peru",
            type: "Glacial lake (Lauricocha Lake)",
            elevation: "4,020 m",
            coordinates: [-10.5000, -76.6667]
        },
        
        mouth: {
            location: "Confluence with Ucayali to form Amazon River",
            type: "Confluence",
            delta: "Joins Ucayali near Nauta to form Amazon",
            coordinates: [-4.4500, -73.4667]
        },
        
        tributaries: {
            leftBank: [
                "Crisnejas River",
                "Utcubamba River",
                "Chiriaco River",
                "Nieva River",
                "Santiago River",
                "Morona River",
                "Pastaza River"
            ],
            rightBank: [
                "Huallaga River",
                "Chambira River",
                "Tigre River"
            ]
        },
        
        distributaries: [
            "Amazon River (continuation)"
        ],
        
        majorCities: [
            "Huánuco", "Chachapoyas", "Jaén", "Bagua",
            "Santa María de Nieva", "Saramiriza", "Nauta"
        ],
        
        dams: [
            { name: "Chadin 2 Dam (Proposed)", details: "Controversial, 600 MW, suspended" },
            { name: "Veracruz Dam (Proposed)", details: "Suspended due to opposition" },
            { name: "20+ dams proposed", details: "Major resistance from communities" }
        ],
        
        basinArea: "350,000 km²",
        discharge: "15,436 m³/s (at Amazon confluence)",
        
        riverPath: [
            [-10.50, -76.67],   // Source - Lauricocha
            [-9.50, -76.50],
            [-9.00, -77.00],
            [-8.50, -77.50],
            [-8.00, -78.00],
            [-7.50, -78.20],
            [-7.00, -78.30],
            [-6.50, -78.50],
            [-6.00, -78.20],
            [-5.50, -78.00],   // Pongo de Manseriche
            [-5.20, -77.50],
            [-5.00, -76.50],
            [-4.80, -75.50],
            [-4.50, -74.50],
            [-4.45, -73.47]    // Amazon confluence (Mouth)
        ],
        
        tributaryPaths: [
            {
                name: "Huallaga River",
                path: [
                    [-9.00, -76.00],   // Huánuco area
                    [-7.00, -76.00],
                    [-5.50, -75.50],
                    [-4.80, -75.00]    // Confluence
                ]
            },
            {
                name: "Utcubamba River",
                path: [
                    [-6.20, -77.87],   // Chachapoyas
                    [-5.80, -78.00],
                    [-5.30, -78.20]    // Confluence
                ]
            },
            {
                name: "Pastaza River",
                path: [
                    [-2.50, -78.00],   // Ecuador
                    [-3.50, -77.00],
                    [-4.50, -76.50]    // Confluence
                ]
            },
            {
                name: "Santiago River",
                path: [
                    [-3.50, -78.00],
                    [-4.20, -77.80],
                    [-4.50, -77.60]    // Confluence
                ]
            }
        ],
        
        distributaryPaths: [
            {
                name: "Amazon Formation",
                path: [
                    [-4.45, -73.47],
                    [-4.30, -73.40]    // Amazon continuation
                ]
            }
        ],
        
        cityCoordinates: [
            { name: "Huánuco", coords: [-9.93, -76.24] },
            { name: "Chachapoyas", coords: [-6.23, -77.87] },
            { name: "Jaén", coords: [-5.71, -78.81] },
            { name: "Bagua", coords: [-5.64, -78.53] },
            { name: "Santa María de Nieva", coords: [-4.60, -77.87] },
            { name: "Nauta", coords: [-4.51, -73.58] }
        ],
        
        damCoordinates: [
            { name: "Pongo de Manseriche", coords: [-4.47, -77.58], details: "Proposed dam site - major rapids" },
            { name: "Proposed Dams Area", coords: [-5.50, -78.00], details: "20+ dams planned but facing resistance" }
        ],
        
        flightLandmarks: [
            { progress: 0, name: "Cordillera Huayhuash", icon: "🏔️", description: "Glacial source" },
            { progress: 0.10, name: "Lauricocha Lake", icon: "🌊", description: "High Andean source lake" },
            { progress: 0.25, name: "Inter-Andean Valley", icon: "🏞️", description: "Deep canyon" },
            { progress: 0.40, name: "Kuelap Fortress", icon: "🏛️", description: "Chachapoyas ruins nearby" },
            { progress: 0.50, name: "Utcubamba Confluence", icon: "🔀", description: "Major tributary" },
            { progress: 0.60, name: "Pongo de Manseriche", icon: "🌊", description: "Dramatic gorge" },
            { progress: 0.75, name: "Amazonian Lowlands", icon: "🌳", description: "Rainforest begins" },
            { progress: 0.85, name: "Pastaza Confluence", icon: "🔀", description: "Ecuador tributary" },
            { progress: 0.95, name: "Nauta", icon: "🏘️", description: "River junction town" },
            { progress: 1.0, name: "Amazon Formation", icon: "🌊", description: "Joins Ucayali" }
        ],
        
        economicImportance: [
            "Primary source stream of the Amazon River",
            "Proposed hydroelectric potential (opposed)",
            "Transportation for remote communities",
            "Gold mining (often illegal)",
            "Agriculture in valleys",
            "Ecotourism (Kuelap, Chachapoyas)"
        ],
        
        environmentalIssues: [
            "Dam proposals threatening free-flowing river",
            "Illegal gold mining and mercury",
            "Deforestation in headwaters",
            "Oil spills from Loreto pipeline",
            "Climate change affecting glacial sources",
            "Indigenous territory pressures"
        ],
        
        waterDisputes: [
            {
                title: "Dam Opposition",
                description: "Local and indigenous communities strongly oppose 20+ proposed dams; Bagua massacre (2009) killed 34."
            },
            {
                title: "Indigenous Rights",
                description: "Awajún and Wampís peoples defend their territories against development projects."
            }
        ],
        
        historicalImportance: [
            {
                title: "Amazon Source Debate",
                description: "Long debated as potential Amazon source; now considered the more distant headwater."
            },
            {
                title: "Chachapoyas Civilization",
                description: "The 'Warriors of the Clouds' civilization built Kuelap fortress near the Marañón."
            },
            {
                title: "Inca Conquest",
                description: "The Inca conquered Chachapoyas via the Marañón valley in the 15th century."
            },
            {
                title: "Spanish Exploration",
                description: "Spanish conquistadors explored the Marañón seeking El Dorado in the 16th century."
            }
        ]
    },

    // ========================================
    // 69. KOLYMA RIVER
    // ========================================
    {
        id: "kolyma",
        name: "Kolyma River",
        length: 2129,
        continent: "asia",
        image: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=800",
        
        countries: [
            { name: "Russia", flag: "🇷🇺" }
        ],
        
        states: [
            "Magadan Oblast", "Sakha Republic (Yakutia)", "Chukotka"
        ],
        
        source: {
            location: "Kolyma Mountains, Magadan Oblast",
            type: "Mountain streams confluence",
            elevation: "1,500 m",
            coordinates: [62.0000, 148.0000]
        },
        
        mouth: {
            location: "East Siberian Sea, Arctic Ocean",
            type: "Delta",
            delta: "Kolyma Delta - 3,000 km², permafrost coast",
            coordinates: [69.5833, 161.4167]
        },
        
        tributaries: {
            leftBank: [
                "Buyunda River",
                "Balygychan River",
                "Sugoy River",
                "Korkodon River"
            ],
            rightBank: [
                "Beryozovka River",
                "Yasachnaya River",
                "Omolon River",
                "Anyuy River"
            ]
        },
        
        distributaries: [
            "Kolyma Delta channels",
            "Pokhodskaya Channel",
            "Chukochya Branch"
        ],
        
        majorCities: [
            "Susuman", "Seymchan", "Zyryanka", "Srednekolymsk", "Chersky"
        ],
        
        dams: [
            { name: "Kolyma Hydroelectric Station", details: "Magadan Oblast, 900 MW, 1981" },
            { name: "Ust-Srednekanskaya Dam", details: "570 MW, under construction" }
        ],
        
        basinArea: "643,000 km²",
        discharge: "3,800 m³/s",
        
        riverPath: [
            [62.00, 148.00],   // Source - Kolyma Mountains
            [62.50, 148.50],
            [63.00, 149.50],
            [63.50, 150.50],
            [63.50, 151.50],
            [63.80, 152.50],   // Seymchan area
            [64.50, 153.50],
            [65.00, 154.00],
            [65.50, 153.50],
            [65.73, 150.90],   // Zyryanka
            [67.00, 152.00],
            [67.45, 153.72],   // Srednekolymsk
            [68.50, 158.00],
            [68.75, 161.30],   // Chersky
            [69.58, 161.42]    // East Siberian Sea (Mouth)
        ],
        
        tributaryPaths: [
            {
                name: "Omolon River",
                path: [
                    [65.00, 160.00],   // Chukotka
                    [66.50, 158.00],
                    [68.00, 158.50]    // Confluence
                ]
            },
            {
                name: "Anyuy River",
                path: [
                    [67.50, 163.00],   // Chukotka
                    [68.00, 162.00],
                    [68.50, 160.00]    // Confluence
                ]
            },
            {
                name: "Korkodon River",
                path: [
                    [64.00, 156.00],
                    [65.00, 155.00],
                    [65.50, 154.00]    // Confluence
                ]
            }
        ],
        
        distributaryPaths: [
            {
                name: "Kolyma Delta",
                path: [
                    [69.40, 161.50],
                    [69.58, 161.42]    // East Siberian Sea
                ]
            }
        ],
        
        cityCoordinates: [
            { name: "Susuman", coords: [62.78, 148.17] },
            { name: "Seymchan", coords: [62.93, 152.42] },
            { name: "Zyryanka", coords: [65.73, 150.90] },
            { name: "Srednekolymsk", coords: [67.45, 153.72] },
            { name: "Chersky", coords: [68.75, 161.30] }
        ],
        
        damCoordinates: [
            { name: "Kolyma Dam", coords: [62.30, 149.50], details: "900 MW hydroelectric" },
            { name: "Ust-Srednekanskaya Dam", coords: [63.00, 151.00], details: "570 MW - Under construction" }
        ],
        
        flightLandmarks: [
            { progress: 0, name: "Kolyma Mountains", icon: "🏔️", description: "Remote source region" },
            { progress: 0.10, name: "Kolyma Dam", icon: "🏗️", description: "Hydroelectric station" },
            { progress: 0.25, name: "Gold Mining Region", icon: "⛏️", description: "Historic mining" },
            { progress: 0.40, name: "Seymchan", icon: "🏘️", description: "Upper Kolyma town" },
            { progress: 0.55, name: "Zyryanka", icon: "🏘️", description: "Mining settlement" },
            { progress: 0.70, name: "Srednekolymsk", icon: "🏘️", description: "Middle Kolyma" },
            { progress: 0.80, name: "Omolon Confluence", icon: "🔀", description: "Major tributary" },
            { progress: 0.90, name: "Chersky", icon: "🏘️", description: "Arctic research station" },
            { progress: 1.0, name: "East Siberian Sea", icon: "🌊", description: "Arctic Ocean" }
        ],
        
        economicImportance: [
            "Gold mining (largest in Russia historically)",
            "Hydroelectric power",
            "Fishing (salmon, whitefish)",
            "Seasonal navigation",
            "Scientific research (permafrost)",
            "Coal deposits"
        ],
        
        environmentalIssues: [
            "Mining pollution and legacy contamination",
            "Climate change causing permafrost thaw",
            "Mercury from gold mining",
            "Mammoth bone hunting disturbing sites",
            "Oil spills from mining operations",
            "Ecosystem changes from warming"
        ],
        
        waterDisputes: [
            {
                title: "No Major Disputes",
                description: "Extremely remote location; disputes relate to Soviet-era mining legacy and cleanup."
            }
        ],
        
        historicalImportance: [
            {
                title: "Kolyma Gulag",
                description: "The 'Road of Bones' and Kolyma Gulag camps were among the deadliest in the Soviet system (1930s-1950s)."
            },
            {
                title: "Gold Rush",
                description: "Major gold deposits discovered in the 1920s-30s, mined largely by Gulag labor."
            },
            {
                title: "Mammoth Fossils",
                description: "The Kolyma permafrost has yielded some of the best-preserved woolly mammoth specimens."
            },
            {
                title: "Indigenous Peoples",
                description: "Traditional territory of Yukaghir, Even, and Chukchi peoples."
            }
        ]
    },

    // ========================================
    // 70. VOLTA RIVER
    // ========================================
    {
        id: "volta",
        name: "Volta River",
        length: 1600,
        continent: "africa",
        image: "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=800",
        
        countries: [
            { name: "Ghana", flag: "🇬🇭" },
            { name: "Burkina Faso", flag: "🇧🇫" },
            { name: "Togo", flag: "🇹🇬" },
            { name: "Benin", flag: "🇧🇯" },
            { name: "Côte d'Ivoire", flag: "🇨🇮" },
            { name: "Mali", flag: "🇲🇱" }
        ],
        
        states: [
            "Centre-Nord Region", "Plateau-Central Region",
            "Northern Region", "Savannah Region",
            "Bono Region", "Volta Region", "Greater Accra Region"
        ],
        
        source: {
            location: "Confluence of Black Volta and White Volta, Ghana",
            type: "River confluence",
            elevation: "100 m",
            coordinates: [8.7833, -1.6333]
        },
        
        mouth: {
            location: "Gulf of Guinea, Atlantic Ocean, Ghana",
            type: "Estuary",
            delta: "Volta Estuary at Ada Foah",
            coordinates: [5.7833, 0.6333]
        },
        
        tributaries: {
            leftBank: [
                "Black Volta (Mouhoun)",
                "Daka River",
                "Pru River",
                "Sene River"
            ],
            rightBank: [
                "White Volta (Nakambé)",
                "Red Volta (Nazinon)",
                "Oti River",
                "Afram River"
            ]
        },
        
        distributaries: [
            "Volta Estuary channels"
        ],
        
        majorCities: [
            "Ouagadougou", "Tamale", "Wa", "Bole",
            "Kete-Krachi", "Akosombo", "Ada Foah"
        ],
        
        dams: [
            { name: "Akosombo Dam", details: "Ghana, 1,020 MW, 1965, creates Lake Volta" },
            { name: "Kpong Dam", details: "Ghana, 160 MW, 1982, downstream of Akosombo" },
            { name: "Bui Dam", details: "Ghana, 400 MW, 2013, on Black Volta" },
            { name: "Bagré Dam", details: "Burkina Faso, 16 MW, 1992, on White Volta" }
        ],
        
        basinArea: "407,093 km²",
        discharge: "1,210 m³/s",
        
        riverPath: [
            [8.78, -1.63],     // Confluence - Black & White Volta
            [8.50, -0.50],
            [8.00, 0.00],
            [7.82, -0.03],     // Kete-Krachi (Lake Volta)
            [7.50, 0.00],
            [7.00, 0.00],
            [6.50, 0.00],
            [6.30, 0.05],      // Akosombo Dam
            [6.20, 0.10],
            [6.11, 0.08],      // Kpong Dam
            [6.00, 0.20],
            [5.90, 0.40],
            [5.78, 0.63]       // Gulf of Guinea (Mouth)
        ],
        
        tributaryPaths: [
            {
                name: "Black Volta",
                path: [
                    [12.50, -4.50],    // Burkina Faso/Mali
                    [11.00, -3.00],
                    [9.50, -2.50],
                    [8.78, -1.63]      // Confluence
                ]
            },
            {
                name: "White Volta",
                path: [
                    [12.37, -1.52],    // Ouagadougou area
                    [11.00, -1.00],
                    [9.50, -1.00],
                    [8.78, -1.63]      // Confluence
                ]
            },
            {
                name: "Oti River",
                path: [
                    [11.00, 1.00],     // Togo/Benin
                    [9.50, 0.50],
                    [8.50, 0.00]       // Confluence at Lake Volta
                ]
            },
            {
                name: "Afram River",
                path: [
                    [7.50, -1.50],     // Ashanti Region
                    [7.30, -0.80],
                    [7.00, -0.30]      // Confluence at Lake Volta
                ]
            }
        ],
        
        distributaryPaths: [
            {
                name: "Volta Estuary",
                path: [
                    [5.85, 0.55],
                    [5.78, 0.63]       // Gulf of Guinea
                ]
            }
        ],
        
        cityCoordinates: [
            { name: "Ouagadougou", coords: [12.37, -1.52] },
            { name: "Tamale", coords: [9.41, -0.84] },
            { name: "Wa", coords: [10.06, -2.50] },
            { name: "Kete-Krachi", coords: [7.82, -0.03] },
            { name: "Akosombo", coords: [6.29, 0.05] },
            { name: "Ada Foah", coords: [5.82, 0.63] }
        ],
        
        damCoordinates: [
            { name: "Akosombo Dam", coords: [6.30, 0.05], details: "1,020 MW - Creates Lake Volta" },
            { name: "Kpong Dam", coords: [6.11, 0.08], details: "160 MW hydroelectric" },
            { name: "Bui Dam", coords: [8.28, -2.24], details: "400 MW - Black Volta" }
        ],
        
        flightLandmarks: [
            { progress: 0, name: "Black-White Volta Confluence", icon: "🔀", description: "River formation" },
            { progress: 0.15, name: "Northern Ghana", icon: "🌳", description: "Savanna landscape" },
            { progress: 0.30, name: "Lake Volta Begins", icon: "🌊", description: "Reservoir starts" },
            { progress: 0.45, name: "Kete-Krachi", icon: "🏘️", description: "Island town on lake" },
            { progress: 0.60, name: "Lake Volta (World's Largest by Area)", icon: "🌊", description: "8,502 km²" },
            { progress: 0.75, name: "Akosombo Dam", icon: "🏗️", description: "Ghana's main power" },
            { progress: 0.82, name: "Kpong Dam", icon: "🏗️", description: "Secondary dam" },
            { progress: 0.90, name: "Lower Volta", icon: "🏞️", description: "Coastal plain" },
            { progress: 0.95, name: "Ada Foah", icon: "🏖️", description: "Estuary town" },
            { progress: 1.0, name: "Gulf of Guinea", icon: "🌊", description: "Atlantic Ocean" }
        ],
        
        economicImportance: [
            "Lake Volta - world's largest reservoir by surface area",
            "Akosombo Dam provides 50%+ of Ghana's electricity",
            "Aluminum smelting (VALCO) using hydropower",
            "Fishing industry (tilapia)",
            "Irrigation for agriculture",
            "Transportation corridor"
        ],
        
        environmentalIssues: [
            "Dam displaced 80,000 people (1960s)",
            "Schistosomiasis (bilharzia) spread after dam",
            "Water hyacinth invasions",
            "Reduced downstream sediment",
            "Coastal erosion at estuary",
            "Climate change affecting inflows"
        ],
        
        waterDisputes: [
            {
                title: "Volta Basin Authority",
                description: "Six-country authority (2007) coordinates water management in the transboundary basin."
            },
            {
                title: "Ghana-Burkina Faso",
                description: "Upstream water use in Burkina Faso affects Lake Volta levels; ongoing negotiations."
            }
        ],
        
        historicalImportance: [
            {
                title: "Akosombo Project",
                description: "Kwame Nkrumah's vision for industrializing Ghana through hydropower, completed in 1965."
            },
            {
                title: "Lake Volta Creation",
                description: "The dam created the world's largest man-made lake by surface area (8,502 km²)."
            },
            {
                title: "Colonial Gold Coast",
                description: "The Volta basin was part of the Gold Coast colony, with rivers used for gold transport."
            },
            {
                title: "Trans-Volta Togoland",
                description: "The Volta region was part of German Togoland before joining Ghana in a 1956 referendum."
            }
        ]
    }
];

// ============================================================
// EXPORT RIVERS DATA 7
// ============================================================

if (typeof window !== 'undefined') {
    window.RIVERS_DATA_7 = RIVERS_DATA_7;
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = RIVERS_DATA_7;
}

console.log('✅ Rivers Data 7 loaded:', RIVERS_DATA_7.length, 'rivers (61-70)');
