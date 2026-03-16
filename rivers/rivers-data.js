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
