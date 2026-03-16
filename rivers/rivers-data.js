// ============================================
// RIVERS DATA - Geography Learning App
// 100 Rivers: Longest to Shortest
// ============================================

const riversData = [

    // ==========================================
    // #1 NILE - 6,650 km
    // ==========================================
    {
        id: 1,
        name: "Nile",
        nativeName: "النيل (An-Nīl)",
        continent: "africa",
        countries: ["Egypt", "Sudan", "South Sudan", "Uganda", "Ethiopia", "Kenya", "Tanzania", "Rwanda", "Burundi", "DR Congo"],
        length: 6650,
        discharge: 2830,
        basinArea: 3349000,
        source: {
            name: "Kagera River / Lake Victoria",
            location: "Burundi Highlands",
            coordinates: [-2.5, 29.5],
            elevation: 1134
        },
        mouth: {
            name: "Mediterranean Sea",
            location: "Nile Delta, Egypt",
            coordinates: [31.5, 30.4]
        },
        course: [
            [-2.5, 29.5],
            [-0.5, 33.0],
            [4.0, 31.5],
            [15.6, 32.5],
            [22.0, 31.2],
            [26.0, 31.5],
            [30.0, 31.2],
            [31.5, 30.4]
        ],
        tributaries: [
            {
                name: "Blue Nile",
                length: 1450,
                source: "Lake Tana, Ethiopia",
                confluence: "Khartoum, Sudan",
                coordinates: [[11.5, 37.5], [15.6, 32.5]],
                flowDirection: "in"
            },
            {
                name: "White Nile",
                length: 3700,
                source: "Lake Victoria",
                confluence: "Khartoum, Sudan",
                coordinates: [[-2.5, 29.5], [15.6, 32.5]],
                flowDirection: "in"
            },
            {
                name: "Atbara River",
                length: 800,
                source: "Ethiopian Highlands",
                confluence: "Atbara, Sudan",
                coordinates: [[12.5, 38.0], [17.7, 34.0]],
                flowDirection: "in"
            }
        ],
        distributaries: [
            {
                name: "Rosetta Branch",
                length: 220,
                mouth: "Mediterranean Sea",
                coordinates: [[30.5, 31.0], [31.4, 30.4]],
                flowDirection: "out"
            },
            {
                name: "Damietta Branch",
                length: 245,
                mouth: "Mediterranean Sea",
                coordinates: [[30.5, 31.5], [31.8, 30.8]],
                flowDirection: "out"
            }
        ],
        majorCities: [
            { name: "Cairo", country: "Egypt", population: 21000000, coordinates: [30.04, 31.24] },
            { name: "Alexandria", country: "Egypt", population: 5200000, coordinates: [31.2, 29.9] },
            { name: "Khartoum", country: "Sudan", population: 5200000, coordinates: [15.55, 32.53] },
            { name: "Aswan", country: "Egypt", population: 1500000, coordinates: [24.09, 32.90] },
            { name: "Luxor", country: "Egypt", population: 500000, coordinates: [25.69, 32.64] }
        ],
        facts: {
            historical: "🏛️ Cradle of Ancient Egyptian civilization for 5000+ years",
            ecological: "🌿 Supports 95% of Egypt's population in narrow valley",
            economic: "💰 Aswan High Dam generates 2,100 MW hydroelectric power",
            cultural: "⭐ Worshipped as god Hapi - bringer of floods & fertility",
            funFact: "🎭 Cleopatra sailed golden barges down this river!"
        },
        image: "https://images.unsplash.com/photo-1553913861-c0fddf2619ee?w=800",
        description: "World's longest river, lifeline of Egypt, ancient pyramids' neighbor"
    },

    // ==========================================
    // #2 AMAZON - 6,400 km
    // ==========================================
    {
        id: 2,
        name: "Amazon",
        nativeName: "Rio Amazonas",
        continent: "south-america",
        countries: ["Brazil", "Peru", "Colombia", "Ecuador", "Venezuela", "Bolivia", "Guyana"],
        length: 6400,
        discharge: 209000,
        basinArea: 7050000,
        source: {
            name: "Nevado Mismi",
            location: "Arequipa Region, Peru",
            coordinates: [-15.52, -71.69],
            elevation: 5170
        },
        mouth: {
            name: "Atlantic Ocean",
            location: "Marajó Bay, Brazil",
            coordinates: [-0.5, -49.0]
        },
        course: [
            [-15.52, -71.69],
            [-10.5, -73.5],
            [-5.0, -73.0],
            [-4.0, -70.0],
            [-3.1, -60.0],
            [-2.0, -55.0],
            [-1.5, -52.0],
            [-0.5, -49.0]
        ],
        tributaries: [
            {
                name: "Rio Negro",
                length: 2250,
                source: "Colombian Highlands",
                confluence: "Manaus, Brazil",
                coordinates: [[1.0, -67.0], [-3.1, -60.0]],
                flowDirection: "in"
            },
            {
                name: "Madeira River",
                length: 3380,
                source: "Bolivian Andes",
                confluence: "Itacoatiara, Brazil",
                coordinates: [[-15.0, -65.0], [-3.5, -58.8]],
                flowDirection: "in"
            },
            {
                name: "Tapajós River",
                length: 1992,
                source: "Mato Grosso, Brazil",
                confluence: "Santarém, Brazil",
                coordinates: [[-13.0, -56.0], [-2.4, -54.7]],
                flowDirection: "in"
            },
            {
                name: "Xingu River",
                length: 2100,
                source: "Central Brazil",
                confluence: "Porto de Moz",
                coordinates: [[-13.5, -53.5], [-1.8, -52.2]],
                flowDirection: "in"
            }
        ],
        distributaries: [
            {
                name: "Canal do Norte",
                length: 200,
                mouth: "Atlantic Ocean",
                coordinates: [[-0.5, -50.5], [0.5, -49.5]],
                flowDirection: "out"
            },
            {
                name: "Pará River",
                length: 320,
                mouth: "Marajó Bay",
                coordinates: [[-1.5, -49.5], [-1.3, -48.5]],
                flowDirection: "out"
            }
        ],
        majorCities: [
            { name: "Manaus", country: "Brazil", population: 2200000, coordinates: [-3.1, -60.0] },
            { name: "Belém", country: "Brazil", population: 1500000, coordinates: [-1.46, -48.5] },
            { name: "Santarém", country: "Brazil", population: 300000, coordinates: [-2.44, -54.71] },
            { name: "Iquitos", country: "Peru", population: 470000, coordinates: [-3.75, -73.25] },
            { name: "Macapá", country: "Brazil", population: 500000, coordinates: [0.03, -51.05] }
        ],
        facts: {
            historical: "🏛️ First explored by Francisco de Orellana in 1542",
            ecological: "🌿 Contains 10% of ALL species on Earth!",
            economic: "💰 Carries 20% of world's fresh water to ocean",
            cultural: "⭐ Home to 400+ indigenous tribes, 300 languages",
            funFact: "🎭 Pink dolphins swim here - yes, actually PINK!"
        },
        image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=800",
        description: "Largest river by discharge, mega biodiversity, rainforest king"
    },

    // ==========================================
    // #3 YANGTZE - 6,300 km
    // ==========================================
    {
        id: 3,
        name: "Yangtze",
        nativeName: "长江 (Cháng Jiāng)",
        continent: "asia",
        countries: ["China"],
        length: 6300,
        discharge: 30000,
        basinArea: 1800000,
        source: {
            name: "Tanggula Mountains",
            location: "Qinghai Province, Tibet",
            coordinates: [33.42, 91.17],
            elevation: 5042
        },
        mouth: {
            name: "East China Sea",
            location: "Shanghai, China",
            coordinates: [31.38, 121.97]
        },
        course: [
            [33.42, 91.17],
            [31.0, 97.0],
            [29.5, 106.5],
            [30.6, 114.3],
            [32.0, 118.8],
            [31.38, 121.97]
        ],
        tributaries: [
            {
                name: "Jialing River",
                length: 1119,
                source: "Shaanxi Province",
                confluence: "Chongqing",
                coordinates: [[34.0, 106.5], [29.5, 106.5]],
                flowDirection: "in"
            },
            {
                name: "Han River",
                length: 1577,
                source: "Shaanxi Mountains",
                confluence: "Wuhan",
                coordinates: [[33.0, 107.0], [30.6, 114.3]],
                flowDirection: "in"
            },
            {
                name: "Min River",
                length: 1046,
                source: "Sichuan Mountains",
                confluence: "Yibin",
                coordinates: [[32.0, 103.5], [28.8, 104.6]],
                flowDirection: "in"
            }
        ],
        distributaries: [],
        majorCities: [
            { name: "Shanghai", country: "China", population: 24870000, coordinates: [31.23, 121.47] },
            { name: "Chongqing", country: "China", population: 31000000, coordinates: [29.56, 106.55] },
            { name: "Wuhan", country: "China", population: 11000000, coordinates: [30.58, 114.27] },
            { name: "Nanjing", country: "China", population: 8500000, coordinates: [32.06, 118.79] },
            { name: "Hangzhou", country: "China", population: 10000000, coordinates: [30.25, 120.17] }
        ],
        facts: {
            historical: "🏛️ Cradle of Chinese civilization - dynasties rose here",
            ecological: "🌿 Home to extinct Baiji dolphin (river goddess)",
            economic: "💰 Three Gorges Dam = World's largest power station!",
            cultural: "⭐ Inspired thousands of Chinese poems & paintings",
            funFact: "🎭 Three Gorges Dam visible from SPACE!"
        },
        image: "https://images.unsplash.com/photo-1537531383496-f4749b2e4a74?w=800",
        description: "Asia's longest river, Three Gorges Dam, busiest waterway on Earth"
    },

    // ==========================================
    // #4 MISSISSIPPI-MISSOURI - 6,275 km
    // ==========================================
    {
        id: 4,
        name: "Mississippi-Missouri",
        nativeName: "Great River (Ojibwe: Misi-ziibi)",
        continent: "north-america",
        countries: ["United States"],
        length: 6275,
        discharge: 16800,
        basinArea: 2980000,
        source: {
            name: "Brower's Spring",
            location: "Montana, USA",
            coordinates: [44.94, -111.00],
            elevation: 2756
        },
        mouth: {
            name: "Gulf of Mexico",
            location: "Louisiana Delta",
            coordinates: [29.15, -89.25]
        },
        course: [
            [44.94, -111.00],
            [47.24, -95.21],
            [44.95, -93.10],
            [38.63, -90.20],
            [35.15, -90.05],
            [32.30, -91.05],
            [29.95, -90.07],
            [29.15, -89.25]
        ],
        tributaries: [
            {
                name: "Missouri River",
                length: 3767,
                source: "Montana Rockies",
                confluence: "St. Louis, MO",
                coordinates: [[45.93, -111.50], [38.80, -90.12]],
                flowDirection: "in"
            },
            {
                name: "Ohio River",
                length: 1579,
                source: "Pittsburgh, PA",
                confluence: "Cairo, IL",
                coordinates: [[40.44, -80.01], [37.00, -89.18]],
                flowDirection: "in"
            },
            {
                name: "Arkansas River",
                length: 2322,
                source: "Colorado Rockies",
                confluence: "Napoleon, AR",
                coordinates: [[39.30, -106.19], [33.95, -91.07]],
                flowDirection: "in"
            },
            {
                name: "Red River",
                length: 2189,
                source: "New Mexico",
                confluence: "Marksville, LA",
                coordinates: [[35.00, -103.00], [31.12, -91.83]],
                flowDirection: "in"
            }
        ],
        distributaries: [
            {
                name: "Atchafalaya River",
                length: 225,
                mouth: "Atchafalaya Bay",
                coordinates: [[31.0, -91.6], [29.5, -91.4]],
                flowDirection: "out"
            }
        ],
        majorCities: [
            { name: "New Orleans", country: "USA", population: 390000, coordinates: [29.95, -90.07] },
            { name: "Memphis", country: "USA", population: 650000, coordinates: [35.15, -90.05] },
            { name: "St. Louis", country: "USA", population: 300000, coordinates: [38.63, -90.20] },
            { name: "Minneapolis", country: "USA", population: 430000, coordinates: [44.98, -93.27] },
            { name: "Baton Rouge", country: "USA", population: 220000, coordinates: [30.45, -91.15] }
        ],
        facts: {
            historical: "🏛️ Native Americans called it 'Father of Waters'",
            ecological: "🌿 40% of North American birds migrate along it",
            economic: "💰 Carries 92% of US agricultural exports",
            cultural: "⭐ Birthplace of Jazz & Blues music!",
            funFact: "🎭 In 1811 earthquake, river flowed BACKWARDS!"
        },
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800",
        description: "America's mighty river, Mark Twain's muse, jazz heartland"
    },

    // ==========================================
    // #5 YENISEI-ANGARA - 5,539 km
    // ==========================================
    {
        id: 5,
        name: "Yenisei-Angara",
        nativeName: "Енисей (Yenisey)",
        continent: "asia",
        countries: ["Russia", "Mongolia"],
        length: 5539,
        discharge: 19600,
        basinArea: 2580000,
        source: {
            name: "Mungaragiyn-Gol",
            location: "Eastern Sayan Mountains, Mongolia",
            coordinates: [50.5, 97.5],
            elevation: 3351
        },
        mouth: {
            name: "Kara Sea",
            location: "Arctic Ocean, Siberia",
            coordinates: [72.0, 82.5]
        },
        course: [
            [50.5, 97.5],
            [52.0, 103.5],
            [55.0, 92.0],
            [60.0, 89.5],
            [66.0, 86.5],
            [72.0, 82.5]
        ],
        tributaries: [
            {
                name: "Angara River",
                length: 1779,
                source: "Lake Baikal (only outlet!)",
                confluence: "Yeniseisk",
                coordinates: [[51.8, 104.8], [58.5, 92.2]],
                flowDirection: "in"
            },
            {
                name: "Lower Tunguska",
                length: 2989,
                source: "Central Siberian Plateau",
                confluence: "Turukhansk",
                coordinates: [[60.0, 102.0], [65.8, 87.9]],
                flowDirection: "in"
            },
            {
                name: "Stony Tunguska",
                length: 1865,
                source: "Siberian Plateau",
                confluence: "Near Yeniseisk",
                coordinates: [[58.0, 100.0], [61.6, 89.9]],
                flowDirection: "in"
            }
        ],
        distributaries: [],
        majorCities: [
            { name: "Krasnoyarsk", country: "Russia", population: 1090000, coordinates: [56.01, 92.85] },
            { name: "Irkutsk", country: "Russia", population: 620000, coordinates: [52.29, 104.28] },
            { name: "Kyzyl", country: "Russia", population: 115000, coordinates: [51.71, 94.45] },
            { name: "Abakan", country: "Russia", population: 182000, coordinates: [53.72, 91.43] }
        ],
        facts: {
            historical: "🏛️ Gateway for 17th century Siberian expansion",
            ecological: "🌿 Drains Lake Baikal - world's deepest lake!",
            economic: "💰 Multiple hydroelectric dams power Siberia",
            cultural: "⭐ Trans-Siberian Railway crosses at Krasnoyarsk",
            funFact: "🎭 Frozen solid 5 months/year - ice 2+ meters thick!"
        },
        image: "https://images.unsplash.com/photo-1514984879728-be0aff75a6e8?w=800",
        description: "Siberia's frozen giant, drains Lake Baikal, flows to Arctic"
    },

    // ==========================================
    // #6 YELLOW RIVER - 5,464 km
    // ==========================================
    {
        id: 6,
        name: "Yellow River",
        nativeName: "黄河 (Huáng Hé)",
        continent: "asia",
        countries: ["China"],
        length: 5464,
        discharge: 2571,
        basinArea: 752000,
        source: {
            name: "Bayan Har Mountains",
            location: "Qinghai Province, China",
            coordinates: [34.5, 96.3],
            elevation: 4500
        },
        mouth: {
            name: "Bohai Sea",
            location: "Shandong Province, China",
            coordinates: [37.8, 119.1]
        },
        course: [
            [34.5, 96.3],
            [36.0, 103.0],
            [40.0, 107.0],
            [38.0, 110.5],
            [35.0, 113.5],
            [37.8, 119.1]
        ],
        tributaries: [
            {
                name: "Wei River",
                length: 818,
                source: "Gansu Province",
                confluence: "Tongguan",
                coordinates: [[34.5, 104.5], [34.6, 110.3]],
                flowDirection: "in"
            },
            {
                name: "Fen River",
                length: 716,
                source: "Shanxi Mountains",
                confluence: "Hejin",
                coordinates: [[38.5, 112.5], [35.6, 110.7]],
                flowDirection: "in"
            },
            {
                name: "Luo River",
                length: 447,
                source: "Shaanxi Province",
                confluence: "Luoyang area",
                coordinates: [[34.0, 110.0], [34.8, 112.4]],
                flowDirection: "in"
            }
        ],
        distributaries: [],
        majorCities: [
            { name: "Lanzhou", country: "China", population: 3600000, coordinates: [36.06, 103.79] },
            { name: "Zhengzhou", country: "China", population: 10000000, coordinates: [34.76, 113.65] },
            { name: "Jinan", country: "China", population: 8700000, coordinates: [36.65, 117.00] },
            { name: "Yinchuan", country: "China", population: 2290000, coordinates: [38.47, 106.27] },
            { name: "Baotou", country: "China", population: 2700000, coordinates: [40.66, 109.84] }
        ],
        facts: {
            historical: "🏛️ 'Mother River' - Chinese civilization began here 7000 years ago",
            ecological: "🌿 Carries 1.6 BILLION tons of yellow loess sediment/year",
            economic: "💰 Irrigates 15% of China's farmland",
            cultural: "⭐ Called 'China's Sorrow' - catastrophic floods killed millions",
            funFact: "🎭 Riverbed is HIGHER than surrounding land - held by levees!"
        },
        image: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=800",
        description: "China's cradle of civilization, golden water, unpredictable floods"
    },

    // ==========================================
    // #7 OB-IRTYSH - 5,410 km
    // ==========================================
    {
        id: 7,
        name: "Ob-Irtysh",
        nativeName: "Обь-Иртыш",
        continent: "asia",
        countries: ["Russia", "Kazakhstan", "China", "Mongolia"],
        length: 5410,
        discharge: 12800,
        basinArea: 2990000,
        source: {
            name: "Altai Mountains",
            location: "Xinjiang, China",
            coordinates: [47.0, 87.0],
            elevation: 3000
        },
        mouth: {
            name: "Gulf of Ob",
            location: "Kara Sea, Arctic Ocean",
            coordinates: [66.5, 69.5]
        },
        course: [
            [47.0, 87.0],
            [50.0, 70.0],
            [55.0, 73.0],
            [58.0, 68.0],
            [61.0, 69.0],
            [66.5, 69.5]
        ],
        tributaries: [
            {
                name: "Irtysh River",
                length: 4248,
                source: "Altai Mountains, China",
                confluence: "Khanty-Mansiysk",
                coordinates: [[47.0, 87.0], [61.0, 69.0]],
                flowDirection: "in"
            },
            {
                name: "Tom River",
                length: 827,
                source: "Abakan Mountains",
                confluence: "Tomsk",
                coordinates: [[52.0, 87.0], [56.5, 84.9]],
                flowDirection: "in"
            },
            {
                name: "Chulym River",
                length: 1799,
                source: "Eastern Sayan",
                confluence: "Asino area",
                coordinates: [[53.0, 91.0], [57.0, 86.0]],
                flowDirection: "in"
            }
        ],
        distributaries: [],
        majorCities: [
            { name: "Novosibirsk", country: "Russia", population: 1620000, coordinates: [55.03, 82.92] },
            { name: "Omsk", country: "Russia", population: 1160000, coordinates: [54.99, 73.37] },
            { name: "Tomsk", country: "Russia", population: 575000, coordinates: [56.50, 84.97] },
            { name: "Barnaul", country: "Russia", population: 632000, coordinates: [53.36, 83.76] }
        ],
        facts: {
            historical: "🏛️ Opened Siberia to Russian expansion",
            ecological: "🌿 Giant sturgeon here weigh over 1000 kg!",
            economic: "💰 Flows through massive oil & gas fields",
            cultural: "⭐ Name means 'Snow River' in local languages",
            funFact: "🎭 Spring ice breakup creates MASSIVE flooding!"
        },
        image: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=800",
        description: "Western Siberia's artery, oil region, Arctic-bound giant"
    },

    // ==========================================
    // #8 PARANÁ - 4,880 km
    // ==========================================
    {
        id: 8,
        name: "Paraná",
        nativeName: "Río Paraná",
        continent: "south-america",
        countries: ["Brazil", "Paraguay", "Argentina"],
        length: 4880,
        discharge: 17290,
        basinArea: 2582672,
        source: {
            name: "Paranaíba & Grande Rivers",
            location: "Brazilian Highlands",
            coordinates: [-20.0, -50.0],
            elevation: 1100
        },
        mouth: {
            name: "Río de la Plata",
            location: "Argentina/Uruguay border",
            coordinates: [-34.0, -58.5]
        },
        course: [
            [-20.0, -50.0],
            [-22.5, -53.0],
            [-25.5, -54.6],
            [-27.3, -58.6],
            [-32.0, -60.5],
            [-34.0, -58.5]
        ],
        tributaries: [
            {
                name: "Paraguay River",
                length: 2621,
                source: "Mato Grosso, Brazil",
                confluence: "Corrientes, Argentina",
                coordinates: [[-15.0, -56.0], [-27.3, -58.6]],
                flowDirection: "in"
            },
            {
                name: "Iguazú River",
                length: 1320,
                source: "Serra do Mar, Brazil",
                confluence: "Puerto Iguazú",
                coordinates: [[-25.5, -49.0], [-25.6, -54.6]],
                flowDirection: "in"
            },
            {
                name: "Uruguay River",
                length: 1838,
                source: "Serra Geral, Brazil",
                confluence: "Río de la Plata",
                coordinates: [[-27.5, -49.5], [-34.0, -58.3]],
                flowDirection: "in"
            }
        ],
        distributaries: [],
        majorCities: [
            { name: "Buenos Aires", country: "Argentina", population: 15000000, coordinates: [-34.61, -58.38] },
            { name: "Rosario", country: "Argentina", population: 1300000, coordinates: [-32.95, -60.64] },
            { name: "Asunción", country: "Paraguay", population: 525000, coordinates: [-25.26, -57.58] },
            { name: "Santa Fe", country: "Argentina", population: 525000, coordinates: [-31.64, -60.70] }
        ],
        facts: {
            historical: "🏛️ Major Spanish & Portuguese colonization route",
            ecological: "🌿 Iguazú Falls = 275 waterfalls, UNESCO site!",
            economic: "💰 Itaipu Dam = 2nd largest hydroelectric plant (14,000 MW)",
            cultural: "⭐ Borders Pantanal - world's largest wetland",
            funFact: "🎭 Río de la Plata estuary is 220 km wide - looks like ocean!"
        },
        image: "https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?w=800",
        description: "South America's second-longest, Iguazú Falls, massive hydropower"
    },

    // ==========================================
    // #9 CONGO - 4,700 km
    // ==========================================
    {
        id: 9,
        name: "Congo",
        nativeName: "Nzadi Kongo",
        continent: "africa",
        countries: ["DR Congo", "Republic of Congo", "Angola", "Zambia", "Tanzania", "Cameroon", "CAR"],
        length: 4700,
        discharge: 41800,
        basinArea: 3680000,
        source: {
            name: "Lualaba River",
            location: "Katanga Highlands, DR Congo",
            coordinates: [-11.5, 26.0],
            elevation: 1760
        },
        mouth: {
            name: "Atlantic Ocean",
            location: "Congo River Estuary",
            coordinates: [-6.0, 12.5]
        },
        course: [
            [-11.5, 26.0],
            [-5.0, 23.0],
            [0.5, 25.2],
            [-4.3, 15.3],
            [-5.5, 13.5],
            [-6.0, 12.5]
        ],
        tributaries: [
            {
                name: "Ubangi River",
                length: 2270,
                source: "CAR/DRC border",
                confluence: "Liranga",
                coordinates: [[5.0, 24.0], [1.1, 18.0]],
                flowDirection: "in"
            },
            {
                name: "Kasai River",
                length: 2153,
                source: "Central Angola",
                confluence: "Kwamouth",
                coordinates: [[-12.0, 16.0], [-3.8, 16.5]],
                flowDirection: "in"
            },
            {
                name: "Lomami River",
                length: 1280,
                source: "Katanga Province",
                confluence: "Isangi",
                coordinates: [[-8.0, 25.0], [-0.8, 24.3]],
                flowDirection: "in"
            }
        ],
        distributaries: [],
        majorCities: [
            { name: "Kinshasa", country: "DR Congo", population: 15000000, coordinates: [-4.32, 15.31] },
            { name: "Brazzaville", country: "Rep. Congo", population: 1900000, coordinates: [-4.26, 15.28] },
            { name: "Kisangani", country: "DR Congo", population: 1600000, coordinates: [-0.52, 25.19] },
            { name: "Mbandaka", country: "DR Congo", population: 350000, coordinates: [0.05, 18.26] }
        ],
        facts: {
            historical: "🏛️ Henry Stanley explored it in 1876-77",
            ecological: "🌿 2nd largest rainforest - 'Africa's lungs'",
            economic: "💰 Inga Falls could power entire Africa!",
            cultural: "⭐ Home to Pygmy tribes - oldest cultures",
            funFact: "🎭 Only major river crossing equator TWICE!"
        },
        image: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800",
        description: "Deepest river on Earth (220m), crosses equator twice, untamed power"
    },

    // ==========================================
    // #10 AMUR-ARGUN - 4,444 km
    // ==========================================
    {
        id: 10,
        name: "Amur-Argun",
        nativeName: "黑龙江 (Heilong Jiang) / Амур",
        continent: "asia",
        countries: ["Russia", "China", "Mongolia"],
        length: 4444,
        discharge: 11400,
        basinArea: 1855000,
        source: {
            name: "Argun River",
            location: "Greater Khingan Range, China",
            coordinates: [51.5, 116.5],
            elevation: 1520
        },
        mouth: {
            name: "Sea of Okhotsk",
            location: "Tatar Strait, Pacific",
            coordinates: [53.0, 141.0]
        },
        course: [
            [51.5, 116.5],
            [50.0, 119.0],
            [53.5, 127.5],
            [48.5, 135.0],
            [53.0, 141.0]
        ],
        tributaries: [
            {
                name: "Shilka River",
                length: 560,
                source: "Stanovoy Range",
                confluence: "Pokrovka",
                coordinates: [[52.0, 118.0], [53.0, 121.5]],
                flowDirection: "in"
            },
            {
                name: "Zeya River",
                length: 1242,
                source: "Stanovoy Range",
                confluence: "Blagoveshchensk",
                coordinates: [[53.5, 127.0], [50.3, 127.5]],
                flowDirection: "in"
            },
            {
                name: "Songhua River",
                length: 1927,
                source: "Changbai Mountains",
                confluence: "Tongjiang",
                coordinates: [[42.0, 128.0], [47.6, 132.5]],
                flowDirection: "in"
            },
            {
                name: "Ussuri River",
                length: 897,
                source: "Sikhote-Alin Mountains",
                confluence: "Khabarovsk",
                coordinates: [[44.0, 134.0], [48.5, 135.1]],
                flowDirection: "in"
            }
        ],
        distributaries: [],
        majorCities: [
            { name: "Harbin", country: "China", population: 10600000, coordinates: [45.75, 126.65] },
            { name: "Khabarovsk", country: "Russia", population: 618000, coordinates: [48.48, 135.08] },
            { name: "Blagoveshchensk", country: "Russia", population: 225000, coordinates: [50.27, 127.54] },
            { name: "Heihe", country: "China", population: 1660000, coordinates: [50.24, 127.49] }
        ],
        facts: {
            historical: "🏛️ Forms natural Russia-China border",
            ecological: "🌿 Amur tiger & leopard territory - critically endangered!",
            economic: "💰 Trans-Siberian Railway crosses at Khabarovsk",
            cultural: "⭐ Chinese call it 'Black Dragon River'",
            funFact: "🎭 Frozen Nov-April, ice 2 meters thick - trucks drive on it!"
        },
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800",
        description: "Russia-China border river, Amur tiger habitat, Black Dragon River"
    }
        // ==========================================
    // #11 LENA - 4,400 km
    // ==========================================
    {
        id: 11,
        name: "Lena",
        nativeName: "Лена",
        continent: "asia",
        countries: ["Russia"],
        length: 4400,
        discharge: 16871,
        basinArea: 2490000,
        source: {
            name: "Baikal Mountains",
            location: "Near Lake Baikal, Siberia",
            coordinates: [53.9, 108.0],
            elevation: 1640
        },
        mouth: {
            name: "Laptev Sea",
            location: "Arctic Ocean, Siberia",
            coordinates: [72.0, 127.0]
        },
        course: [
            [53.9, 108.0],
            [58.0, 113.0],
            [62.0, 125.0],
            [64.5, 126.5],
            [68.0, 127.0],
            [72.0, 127.0]
        ],
        tributaries: [
            {
                name: "Aldan River",
                length: 2273,
                source: "Stanovoy Range",
                confluence: "Near Yakutsk",
                coordinates: [[56.5, 130.0], [63.4, 129.5]],
                flowDirection: "in"
            },
            {
                name: "Vilyuy River",
                length: 2650,
                source: "Central Siberian Plateau",
                confluence: "Sangar",
                coordinates: [[64.0, 107.0], [63.9, 126.5]],
                flowDirection: "in"
            },
            {
                name: "Vitim River",
                length: 1978,
                source: "Transbaikal Mountains",
                confluence: "Vitim town",
                coordinates: [[52.5, 113.5], [59.4, 112.6]],
                flowDirection: "in"
            }
        ],
        distributaries: [
            {
                name: "Lena Delta Channels",
                length: 150,
                mouth: "Laptev Sea",
                coordinates: [[71.0, 126.0], [72.5, 127.5]],
                flowDirection: "out"
            }
        ],
        majorCities: [
            { name: "Yakutsk", country: "Russia", population: 320000, coordinates: [62.03, 129.73] },
            { name: "Lensk", country: "Russia", population: 23000, coordinates: [60.73, 114.95] },
            { name: "Ust-Kut", country: "Russia", population: 43000, coordinates: [56.79, 105.75] },
            { name: "Kirensk", country: "Russia", population: 11000, coordinates: [57.78, 108.11] }
        ],
        facts: {
            historical: "🏛️ Named after original Even word 'Elyu-Ene' meaning 'Large River'",
            ecological: "🌿 Delta is UNESCO World Heritage site - 30,000 km² wetland!",
            economic: "💰 Major diamond mining region along its banks",
            cultural: "⭐ Yakutsk is coldest major city on Earth (-50°C winters!)",
            funFact: "🎭 Lena Pillars rock formations are 150 million years old!"
        },
        image: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=800",
        description: "Siberia's remote giant, diamond country, extreme cold, UNESCO delta"
    },

    // ==========================================
    // #12 MEKONG - 4,350 km
    // ==========================================
    {
        id: 12,
        name: "Mekong",
        nativeName: "แม่น้ำโขง / Sông Mê Kông / 湄公河",
        continent: "asia",
        countries: ["China", "Myanmar", "Laos", "Thailand", "Cambodia", "Vietnam"],
        length: 4350,
        discharge: 16000,
        basinArea: 795000,
        source: {
            name: "Lasagongma Spring",
            location: "Tibetan Plateau, China",
            coordinates: [33.16, 94.67],
            elevation: 5224
        },
        mouth: {
            name: "South China Sea",
            location: "Mekong Delta, Vietnam",
            coordinates: [9.8, 106.5]
        },
        course: [
            [33.16, 94.67],
            [28.0, 99.0],
            [21.0, 100.5],
            [17.5, 104.8],
            [15.0, 105.8],
            [11.5, 105.0],
            [9.8, 106.5]
        ],
        tributaries: [
            {
                name: "Tonlé Sap River",
                length: 120,
                source: "Tonlé Sap Lake",
                confluence: "Phnom Penh",
                coordinates: [[12.9, 104.1], [11.55, 104.93]],
                flowDirection: "in"
            },
            {
                name: "Mun River",
                length: 750,
                source: "Nakhon Ratchasima, Thailand",
                confluence: "Ubon Ratchathani",
                coordinates: [[14.9, 102.1], [15.3, 105.4]],
                flowDirection: "in"
            },
            {
                name: "Nam Ou River",
                length: 448,
                source: "Northern Laos",
                confluence: "Luang Prabang",
                coordinates: [[21.5, 102.5], [19.9, 102.1]],
                flowDirection: "in"
            }
        ],
        distributaries: [
            {
                name: "Bassac River",
                length: 160,
                mouth: "South China Sea",
                coordinates: [[11.5, 105.0], [9.5, 106.2]],
                flowDirection: "out"
            },
            {
                name: "Tiền River",
                length: 120,
                mouth: "South China Sea",
                coordinates: [[11.5, 105.0], [10.0, 106.6]],
                flowDirection: "out"
            },
            {
                name: "Hậu River",
                length: 180,
                mouth: "South China Sea",
                coordinates: [[11.5, 105.0], [9.3, 106.0]],
                flowDirection: "out"
            }
        ],
        majorCities: [
            { name: "Phnom Penh", country: "Cambodia", population: 2130000, coordinates: [11.55, 104.93] },
            { name: "Ho Chi Minh City", country: "Vietnam", population: 9000000, coordinates: [10.82, 106.63] },
            { name: "Vientiane", country: "Laos", population: 820000, coordinates: [17.97, 102.63] },
            { name: "Can Tho", country: "Vietnam", population: 1235000, coordinates: [10.03, 105.78] }
        ],
        facts: {
            historical: "🏛️ Ancient Khmer Empire flourished along its banks",
            ecological: "🌿 2nd most biodiverse river after Amazon - 1,200 fish species!",
            economic: "💰 Feeds 60 million people - 'Rice Bowl of Asia'",
            cultural: "⭐ Tonlé Sap reverses flow direction during monsoon!",
            funFact: "🎭 Giant Mekong catfish can weigh 300 kg - size of a bear!"
        },
        image: "https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=800",
        description: "Southeast Asia's lifeline, 6 countries, mega biodiversity, rice bowl"
    },

    // ==========================================
    // #13 MACKENZIE - 4,241 km
    // ==========================================
    {
        id: 13,
        name: "Mackenzie",
        nativeName: "Deh-Cho (Dene: 'Big River')",
        continent: "north-america",
        countries: ["Canada"],
        length: 4241,
        discharge: 9910,
        basinArea: 1805000,
        source: {
            name: "Thutade Lake (Finlay River)",
            location: "British Columbia, Canada",
            coordinates: [57.2, -127.5],
            elevation: 1310
        },
        mouth: {
            name: "Beaufort Sea",
            location: "Arctic Ocean, NWT",
            coordinates: [69.3, -134.0]
        },
        course: [
            [57.2, -127.5],
            [59.0, -122.5],
            [61.5, -117.5],
            [64.0, -124.0],
            [66.5, -130.0],
            [69.3, -134.0]
        ],
        tributaries: [
            {
                name: "Liard River",
                length: 1115,
                source: "Pelly Mountains, Yukon",
                confluence: "Fort Simpson",
                coordinates: [[60.5, -129.5], [61.86, -121.35]],
                flowDirection: "in"
            },
            {
                name: "Peace River",
                length: 1923,
                source: "Rocky Mountains, BC",
                confluence: "Peace-Athabasca Delta",
                coordinates: [[55.5, -120.0], [59.0, -111.5]],
                flowDirection: "in"
            },
            {
                name: "Great Bear River",
                length: 113,
                source: "Great Bear Lake",
                confluence: "Tulita",
                coordinates: [[65.2, -123.0], [64.9, -125.6]],
                flowDirection: "in"
            }
        ],
        distributaries: [
            {
                name: "Mackenzie Delta Channels",
                length: 210,
                mouth: "Beaufort Sea",
                coordinates: [[68.5, -134.0], [69.5, -135.5]],
                flowDirection: "out"
            }
        ],
        majorCities: [
            { name: "Yellowknife", country: "Canada", population: 20000, coordinates: [62.45, -114.35] },
            { name: "Fort McMurray", country: "Canada", population: 75000, coordinates: [56.73, -111.38] },
            { name: "Inuvik", country: "Canada", population: 3200, coordinates: [68.36, -133.72] },
            { name: "Hay River", country: "Canada", population: 3500, coordinates: [60.82, -115.73] }
        ],
        facts: {
            historical: "🏛️ Named after explorer Alexander Mackenzie (1789 journey)",
            ecological: "🌿 Largest North American river flowing to Arctic Ocean",
            economic: "💰 Massive oil sands deposits in basin (Alberta)",
            cultural: "⭐ Dene First Nations lived here for 10,000+ years",
            funFact: "🎭 Mackenzie spotted it 14 years BEFORE Lewis & Clark expedition!"
        },
        image: "https://images.unsplash.com/photo-1494500764479-0c8f2919a3d8?w=800",
        description: "Canada's longest river, flows to Arctic, oil sands region, wilderness"
    },

    // ==========================================
    // #14 NIGER - 4,180 km
    // ==========================================
    {
        id: 14,
        name: "Niger",
        nativeName: "Jeliba / Orimiri / Egerew n-Igerewen",
        continent: "africa",
        countries: ["Guinea", "Mali", "Niger", "Benin", "Nigeria"],
        length: 4180,
        discharge: 6000,
        basinArea: 2117700,
        source: {
            name: "Guinea Highlands",
            location: "Loma Mountains, Guinea",
            coordinates: [9.05, -10.47],
            elevation: 1450
        },
        mouth: {
            name: "Gulf of Guinea",
            location: "Niger Delta, Nigeria",
            coordinates: [4.5, 6.0]
        },
        course: [
            [9.05, -10.47],
            [12.0, -5.0],
            [17.0, -4.0],
            [16.3, 3.0],
            [13.5, 5.5],
            [6.5, 6.5],
            [4.5, 6.0]
        ],
        tributaries: [
            {
                name: "Benue River",
                length: 1400,
                source: "Adamawa Plateau, Cameroon",
                confluence: "Lokoja, Nigeria",
                coordinates: [[7.5, 13.5], [7.8, 6.75]],
                flowDirection: "in"
            },
            {
                name: "Sokoto River",
                length: 400,
                source: "Northwestern Nigeria",
                confluence: "Jebba",
                coordinates: [[13.0, 5.3], [9.1, 4.8]],
                flowDirection: "in"
            },
            {
                name: "Kaduna River",
                length: 550,
                source: "Jos Plateau",
                confluence: "Near Mureji",
                coordinates: [[10.5, 8.0], [9.0, 5.5]],
                flowDirection: "in"
            }
        ],
        distributaries: [
            {
                name: "Forcados River",
                length: 200,
                mouth: "Gulf of Guinea",
                coordinates: [[5.5, 5.5], [5.0, 5.4]],
                flowDirection: "out"
            },
            {
                name: "Nun River",
                length: 180,
                mouth: "Gulf of Guinea",
                coordinates: [[5.5, 6.0], [4.5, 6.1]],
                flowDirection: "out"
            },
            {
                name: "Bonny River",
                length: 150,
                mouth: "Gulf of Guinea",
                coordinates: [[5.0, 7.0], [4.4, 7.2]],
                flowDirection: "out"
            }
        ],
        majorCities: [
            { name: "Lagos", country: "Nigeria", population: 15400000, coordinates: [6.52, 3.38] },
            { name: "Bamako", country: "Mali", population: 2700000, coordinates: [12.64, -8.0] },
            { name: "Niamey", country: "Niger", population: 1300000, coordinates: [13.51, 2.11] },
            { name: "Port Harcourt", country: "Nigeria", population: 3000000, coordinates: [4.78, 7.01] }
        ],
        facts: {
            historical: "🏛️ Timbuktu was legendary trading city on its banks",
            ecological: "🌿 Niger Delta = largest wetland in Africa!",
            economic: "💰 Nigeria's oil comes from Niger Delta - Africa's largest producer",
            cultural: "⭐ Ancient Mali & Songhai Empires ruled from here",
            funFact: "🎭 River flows AWAY from the sea, then U-turns back!"
        },
        image: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800",
        description: "West Africa's lifeline, Timbuktu river, oil delta, boomerang shape"
    },

    // ==========================================
    // #15 BRAHMAPUTRA - 3,848 km
    // ==========================================
    {
        id: 15,
        name: "Brahmaputra",
        nativeName: "ब्रह्मपुत्र / Yarlung Tsangpo / যমুনা",
        continent: "asia",
        countries: ["China (Tibet)", "India", "Bangladesh"],
        length: 3848,
        discharge: 19800,
        basinArea: 651000,
        source: {
            name: "Angsi Glacier",
            location: "Himalayas, Tibet",
            coordinates: [30.38, 82.1],
            elevation: 5210
        },
        mouth: {
            name: "Bay of Bengal",
            location: "Ganges-Brahmaputra Delta",
            coordinates: [22.0, 90.5]
        },
        course: [
            [30.38, 82.1],
            [29.5, 90.0],
            [29.0, 95.0],
            [27.5, 92.0],
            [26.2, 91.7],
            [24.0, 90.0],
            [22.0, 90.5]
        ],
        tributaries: [
            {
                name: "Lhasa River",
                length: 551,
                source: "Nyenchen Tanglha Mountains",
                confluence: "Near Lhasa",
                coordinates: [[30.5, 91.0], [29.6, 91.1]],
                flowDirection: "in"
            },
            {
                name: "Subansiri River",
                length: 442,
                source: "Himalayas, Tibet",
                confluence: "Near Lakhimpur",
                coordinates: [[28.0, 94.0], [27.0, 94.0]],
                flowDirection: "in"
            },
            {
                name: "Teesta River",
                length: 414,
                source: "Sikkim Himalayas",
                confluence: "Near Fulchhari",
                coordinates: [[27.9, 88.6], [25.5, 89.7]],
                flowDirection: "in"
            }
        ],
        distributaries: [
            {
                name: "Jamuna River",
                length: 205,
                mouth: "Ganges-Brahmaputra Delta",
                coordinates: [[24.0, 90.0], [22.5, 90.5]],
                flowDirection: "out"
            }
        ],
        majorCities: [
            { name: "Dhaka", country: "Bangladesh", population: 22000000, coordinates: [23.81, 90.41] },
            { name: "Guwahati", country: "India", population: 1100000, coordinates: [26.14, 91.74] },
            { name: "Dibrugarh", country: "India", population: 170000, coordinates: [27.47, 94.91] },
            { name: "Lhasa", country: "China", population: 900000, coordinates: [29.65, 91.10] }
        ],
        facts: {
            historical: "🏛️ Name means 'Son of Brahma' - sacred to Hindus",
            ecological: "🌿 World's highest river - starts at 5,210m in Tibet!",
            economic: "💰 Provides water to 130 million people",
            cultural: "⭐ Changes name 3 times: Tsangpo → Brahmaputra → Jamuna",
            funFact: "🎭 Makes sharpest turn on Earth - 180° around Namcha Barwa!"
        },
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
        description: "Himalayan giant, 3 names, world's highest river, sacred waters"
    },

    // ==========================================
    // #16 MURRAY-DARLING - 3,672 km
    // ==========================================
    {
        id: 16,
        name: "Murray-Darling",
        nativeName: "Millewa (Wiradjuri) / Tongala",
        continent: "australia",
        countries: ["Australia"],
        length: 3672,
        discharge: 767,
        basinArea: 1061000,
        source: {
            name: "Australian Alps (Murray Source)",
            location: "Kosciuszko National Park, NSW",
            coordinates: [-36.8, 148.1],
            elevation: 1800
        },
        mouth: {
            name: "Southern Ocean",
            location: "Lake Alexandrina, SA",
            coordinates: [-35.55, 138.88]
        },
        course: [
            [-36.8, 148.1],
            [-35.5, 146.5],
            [-34.0, 142.0],
            [-33.8, 140.5],
            [-34.5, 139.0],
            [-35.55, 138.88]
        ],
        tributaries: [
            {
                name: "Darling River",
                length: 2740,
                source: "Queensland Highlands",
                confluence: "Wentworth",
                coordinates: [[-28.0, 148.5], [-34.1, 142.0]],
                flowDirection: "in"
            },
            {
                name: "Murrumbidgee River",
                length: 1485,
                source: "Snowy Mountains",
                confluence: "Near Balranald",
                coordinates: [[-35.5, 148.8], [-34.6, 143.5]],
                flowDirection: "in"
            },
            {
                name: "Goulburn River",
                length: 566,
                source: "Victorian Alps",
                confluence: "Near Echuca",
                coordinates: [[-37.2, 146.3], [-36.1, 144.75]],
                flowDirection: "in"
            }
        ],
        distributaries: [
            {
                name: "Murray Mouth",
                length: 50,
                mouth: "Southern Ocean via Lake Alexandrina",
                coordinates: [[-35.5, 139.0], [-35.55, 138.88]],
                flowDirection: "out"
            }
        ],
        majorCities: [
            { name: "Adelaide", country: "Australia", population: 1360000, coordinates: [-34.93, 138.60] },
            { name: "Canberra", country: "Australia", population: 450000, coordinates: [-35.28, 149.13] },
            { name: "Albury-Wodonga", country: "Australia", population: 95000, coordinates: [-36.07, 146.92] },
            { name: "Mildura", country: "Australia", population: 35000, coordinates: [-34.19, 142.16] }
        ],
        facts: {
            historical: "🏛️ Indigenous Australians fished here for 40,000+ years",
            ecological: "🌿 Provides 40% of Australia's agricultural production",
            economic: "💰 $22 billion annual economic value",
            cultural: "⭐ Paddle steamers were main transport in 1800s",
            funFact: "🎭 During drought, mouth sometimes CLOSES completely!"
        },
        image: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=800",
        description: "Australia's food bowl, often runs dry, paddle steamer history"
    },

    // ==========================================
    // #17 TOCANTINS - 3,650 km
    // ==========================================
    {
        id: 17,
        name: "Tocantins",
        nativeName: "Rio Tocantins",
        continent: "south-america",
        countries: ["Brazil"],
        length: 3650,
        discharge: 13598,
        basinArea: 767000,
        source: {
            name: "Serra Dourada",
            location: "Goiás State, Brazil",
            coordinates: [-15.5, -47.5],
            elevation: 1100
        },
        mouth: {
            name: "Amazon River Delta",
            location: "Pará State, Brazil",
            coordinates: [-1.5, -49.0]
        },
        course: [
            [-15.5, -47.5],
            [-12.0, -49.0],
            [-8.0, -48.5],
            [-5.5, -49.0],
            [-3.0, -49.5],
            [-1.5, -49.0]
        ],
        tributaries: [
            {
                name: "Araguaia River",
                length: 2627,
                source: "Mato Grosso, Brazil",
                confluence: "São João do Araguaia",
                coordinates: [[-17.5, -53.0], [-5.4, -48.5]],
                flowDirection: "in"
            },
            {
                name: "Itacaiúnas River",
                length: 360,
                source: "Serra dos Carajás",
                confluence: "Marabá",
                coordinates: [[-6.0, -50.5], [-5.4, -49.1]],
                flowDirection: "in"
            },
            {
                name: "Mearim River",
                length: 800,
                source: "Maranhão Highlands",
                confluence: "São Luís Bay",
                coordinates: [[-6.5, -45.0], [-2.5, -44.3]],
                flowDirection: "in"
            }
        ],
        distributaries: [],
        majorCities: [
            { name: "Belém", country: "Brazil", population: 1500000, coordinates: [-1.46, -48.5] },
            { name: "Marabá", country: "Brazil", population: 280000, coordinates: [-5.37, -49.12] },
            { name: "Palmas", country: "Brazil", population: 300000, coordinates: [-10.17, -48.33] },
            { name: "Imperatriz", country: "Brazil", population: 260000, coordinates: [-5.52, -47.47] }
        ],
        facts: {
            historical: "🏛️ Indigenous Tupi named it 'Toucan Beak River'",
            ecological: "🌿 Araguaia tributary has world's largest river island (Bananal)",
            economic: "💰 Tucuruí Dam = one of world's largest hydroelectric plants",
            cultural: "⭐ Carajás mining region - largest iron ore deposits on Earth",
            funFact: "🎭 Bananal Island is bigger than Belgium - and it's in a RIVER!"
        },
        image: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=800",
        description: "Brazilian giant, Tucuruí Dam, world's largest river island"
    },

    // ==========================================
    // #18 VOLGA - 3,645 km
    // ==========================================
    {
        id: 18,
        name: "Volga",
        nativeName: "Во́лга",
        continent: "europe",
        countries: ["Russia"],
        length: 3645,
        discharge: 8060,
        basinArea: 1380000,
        source: {
            name: "Valdai Hills",
            location: "Tver Oblast, Russia",
            coordinates: [57.15, 32.47],
            elevation: 228
        },
        mouth: {
            name: "Caspian Sea",
            location: "Astrakhan, Russia",
            coordinates: [45.8, 47.8]
        },
        course: [
            [57.15, 32.47],
            [58.5, 40.0],
            [56.3, 44.0],
            [55.8, 49.1],
            [53.5, 49.5],
            [48.7, 44.5],
            [45.8, 47.8]
        ],
        tributaries: [
            {
                name: "Kama River",
                length: 1805,
                source: "Ural Mountains",
                confluence: "Kazan area",
                coordinates: [[58.0, 54.0], [55.5, 49.5]],
                flowDirection: "in"
            },
            {
                name: "Oka River",
                length: 1500,
                source: "Central Russia",
                confluence: "Nizhny Novgorod",
                coordinates: [[52.5, 36.0], [56.3, 44.0]],
                flowDirection: "in"
            },
            {
                name: "Vetluga River",
                length: 889,
                source: "Kirov Oblast",
                confluence: "Near Kozmodemyansk",
                coordinates: [[58.0, 46.5], [56.3, 46.5]],
                flowDirection: "in"
            }
        ],
        distributaries: [
            {
                name: "Akhtuba River",
                length: 537,
                mouth: "Caspian Sea",
                coordinates: [[48.7, 44.5], [46.5, 47.5]],
                flowDirection: "out"
            },
            {
                name: "Volga Delta Channels",
                length: 200,
                mouth: "Caspian Sea",
                coordinates: [[46.0, 47.5], [45.8, 47.8]],
                flowDirection: "out"
            }
        ],
        majorCities: [
            { name: "Moscow", country: "Russia", population: 12500000, coordinates: [55.75, 37.62] },
            { name: "Nizhny Novgorod", country: "Russia", population: 1260000, coordinates: [56.3, 44.0] },
            { name: "Kazan", country: "Russia", population: 1250000, coordinates: [55.8, 49.1] },
            { name: "Samara", country: "Russia", population: 1160000, coordinates: [53.2, 50.15] },
            { name: "Volgograd", country: "Russia", population: 1010000, coordinates: [48.7, 44.5] }
        ],
        facts: {
            historical: "🏛️ Russians call it 'Volga-Matushka' (Mother Volga)",
            ecological: "🌿 Europe's longest river - larger than 11 EU countries!",
            economic: "💰 Carries 50% of Russia's river freight",
            cultural: "⭐ Stalingrad battle (WWII) fought on its banks",
            funFact: "🎭 Empties into Caspian Sea - which is BELOW sea level!"
        },
        image: "https://images.unsplash.com/photo-1513326738677-b964603b136d?w=800",
        description: "Europe's longest, Mother Russia's river, Caspian-bound giant"
    },

    // ==========================================
    // #19 MADEIRA - 3,380 km
    // ==========================================
    {
        id: 19,
        name: "Madeira",
        nativeName: "Rio Madeira",
        continent: "south-america",
        countries: ["Brazil", "Bolivia"],
        length: 3380,
        discharge: 31200,
        basinArea: 1485000,
        source: {
            name: "Confluence of Mamoré & Beni Rivers",
            location: "Bolivian Lowlands",
            coordinates: [-10.4, -65.4],
            elevation: 140
        },
        mouth: {
            name: "Amazon River",
            location: "Near Itacoatiara, Brazil",
            coordinates: [-3.5, -58.8]
        },
        course: [
            [-10.4, -65.4],
            [-9.0, -64.0],
            [-7.5, -63.0],
            [-5.5, -60.5],
            [-3.5, -58.8]
        ],
        tributaries: [
            {
                name: "Mamoré River",
                length: 2000,
                source: "Bolivian Andes",
                confluence: "Villa Bella",
                coordinates: [[-17.0, -65.0], [-10.4, -65.4]],
                flowDirection: "in"
            },
            {
                name: "Beni River",
                length: 1599,
                source: "Cordillera Real, Bolivia",
                confluence: "Villa Bella",
                coordinates: [[-15.5, -68.5], [-10.4, -65.4]],
                flowDirection: "in"
            },
            {
                name: "Aripuanã River",
                length: 900,
                source: "Mato Grosso, Brazil",
                confluence: "Near Novo Aripuanã",
                coordinates: [[-10.0, -59.5], [-5.1, -60.4]],
                flowDirection: "in"
            }
        ],
        distributaries: [],
        majorCities: [
            { name: "Porto Velho", country: "Brazil", population: 540000, coordinates: [-8.76, -63.9] },
            { name: "Manaus", country: "Brazil", population: 2200000, coordinates: [-3.1, -60.0] },
            { name: "Humaitá", country: "Brazil", population: 55000, coordinates: [-7.5, -63.0] },
            { name: "Guajará-Mirim", country: "Brazil", population: 45000, coordinates: [-10.78, -65.35] }
        ],
        facts: {
            historical: "🏛️ Name means 'Timber River' - wood floated downstream",
            ecological: "🌿 Amazon's largest tributary by volume!",
            economic: "💰 Santo Antônio & Jirau dams = major hydropower",
            cultural: "⭐ Madeira-Mamoré Railway was 'Devil's Railroad'",
            funFact: "🎭 Railroad killed 6,000+ workers - 1 death per railroad tie!"
        },
        image: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=800",
        description: "Amazon's biggest tributary, Bolivia's outlet, Devil's Railroad"
    },

    // ==========================================
    // #20 PURÚS - 3,211 km
    // ==========================================
    {
        id: 20,
        name: "Purús",
        nativeName: "Rio Purus",
        continent: "south-america",
        countries: ["Brazil", "Peru"],
        length: 3211,
        discharge: 11000,
        basinArea: 371000,
        source: {
            name: "Peruvian Lowlands",
            location: "Ucayali Region, Peru",
            coordinates: [-9.8, -71.0],
            elevation: 500
        },
        mouth: {
            name: "Amazon River",
            location: "Near Manaus, Brazil",
            coordinates: [-3.7, -61.5]
        },
        course: [
            [-9.8, -71.0],
            [-9.0, -68.5],
            [-7.5, -66.5],
            [-5.5, -63.5],
            [-3.7, -61.5]
        ],
        tributaries: [
            {
                name: "Acre River",
                length: 680,
                source: "Peru/Brazil border",
                confluence: "Boca do Acre",
                coordinates: [[-11.0, -70.5], [-8.75, -67.4]],
                flowDirection: "in"
            },
            {
                name: "Iaco River",
                length: 345,
                source: "Acre State, Brazil",
                confluence: "Sena Madureira",
                coordinates: [[-10.0, -69.5], [-9.05, -68.65]],
                flowDirection: "in"
            },
            {
                name: "Chandless River",
                length: 250,
                source: "Acre State, Brazil",
                confluence: "Manoel Urbano area",
                coordinates: [[-9.5, -70.0], [-8.9, -69.2]],
                flowDirection: "in"
            }
        ],
        distributaries: [],
        majorCities: [
            { name: "Rio Branco", country: "Brazil", population: 400000, coordinates: [-9.97, -67.81] },
            { name: "Lábrea", country: "Brazil", population: 45000, coordinates: [-7.26, -64.8] },
            { name: "Sena Madureira", country: "Brazil", population: 45000, coordinates: [-9.05, -68.65] },
            { name: "Boca do Acre", country: "Brazil", population: 35000, coordinates: [-8.75, -67.4] }
        ],
        facts: {
            historical: "🏛️ Rubber boom (1880s-1920s) transformed this region",
            ecological: "🌿 Extremely winding - travels 3x distance of straight line!",
            economic: "💰 Brazil nut harvesting is major economic activity",
            cultural: "⭐ Isolated indigenous tribes still live in basin",
            funFact: "🎭 So twisty that some bends are just 50m from each other!"
        },
        image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=800",
        description: "World's most winding river, rubber boom history, remote Amazon"
    }

];


// ============================================
// HELPER FUNCTIONS
// ============================================

/**
 * Get river by ID
 * @param {number|string} id - River ID
 * @returns {object|undefined} River object
 */
function getRiverById(id) {
    return riversData.find(river => river.id === parseInt(id));
}

/**
 * Get rivers by continent
 * @param {string} continent - Continent name or 'all'
 * @returns {array} Filtered rivers
 */
function getRiversByContinent(continent) {
    if (continent === 'all') return riversData;
    return riversData.filter(river => river.continent === continent);
}

/**
 * Search rivers by name, country, or continent
 * @param {string} query - Search query
 * @returns {array} Matching rivers
 */
function searchRivers(query) {
    const searchTerm = query.toLowerCase().trim();
    if (!searchTerm) return riversData;
    
    return riversData.filter(river => 
        river.name.toLowerCase().includes(searchTerm) ||
        river.nativeName?.toLowerCase().includes(searchTerm) ||
        river.countries.some(c => c.toLowerCase().includes(searchTerm)) ||
        river.continent.toLowerCase().includes(searchTerm) ||
        river.source.name.toLowerCase().includes(searchTerm) ||
        river.mouth.name.toLowerCase().includes(searchTerm)
    );
}

/**
 * Sort rivers by specified field
 * @param {array} rivers - Rivers array
 * @param {string} sortBy - Sort field
 * @returns {array} Sorted rivers
 */
function sortRivers(rivers, sortBy) {
    const sorted = [...rivers];
    
    switch(sortBy) {
        case 'name':
            return sorted.sort((a, b) => a.name.localeCompare(b.name));
        case 'length':
            return sorted.sort((a, b) => b.length - a.length);
        case 'discharge':
            return sorted.sort((a, b) => b.discharge - a.discharge);
        case 'basin':
            return sorted.sort((a, b) => b.basinArea - a.basinArea);
        case 'countries':
            return sorted.sort((a, b) => b.countries.length - a.countries.length);
        default:
            return sorted;
    }
}

/**
 * Get total statistics
 * @returns {object} Stats object
 */
function getRiversStats() {
    return {
        totalRivers: riversData.length,
        totalLength: riversData.reduce((sum, r) => sum + r.length, 0),
        totalDischarge: riversData.reduce((sum, r) => sum + r.discharge, 0),
        continents: [...new Set(riversData.map(r => r.continent))].length,
        countries: [...new Set(riversData.flatMap(r => r.countries))].length
    };
}

/**
 * Format large numbers with commas
 * @param {number} num - Number to format
 * @returns {string} Formatted number
 */
function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
