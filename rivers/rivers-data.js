// ========================================
// RIVERS DATA - MATCHES YOUR APP STRUCTURE
// Part 1: Rivers #1-10
// ========================================

const riversData = [

    // #1 - NILE RIVER
    {
        id: 1,
        name: "Nile River",
        length: 6650,
        discharge: 2830,
        countries: ["Egypt", "Sudan", "South Sudan", "Uganda", "Ethiopia", "Kenya", "Tanzania", "Rwanda", "Burundi", "DR Congo", "Eritrea"],
        continent: "Africa",
        
        // Simple image URL
        image: "https://images.unsplash.com/photo-1553913861-c0a9e3a5e637?w=600&h=400&fit=crop",
        
        // Source & Mouth
        source: {
            name: "Nyungwe Forest, Rwanda",
            coordinates: [-2.3167, 29.3500],
            elevation: 2400
        },
        mouth: {
            name: "Mediterranean Sea",
            coordinates: [31.5000, 31.0000],
            elevation: 0
        },
        
        // River course for map
        course: [
            [-2.3167, 29.3500],
            [-1.0000, 33.0000],
            [2.0000, 32.5000],
            [6.0000, 31.5000],
            [9.5000, 31.6000],
            [15.5000, 32.5000],
            [18.0000, 31.0000],
            [22.0000, 31.5000],
            [24.0000, 32.9000],
            [26.5000, 31.5000],
            [30.0000, 31.2000],
            [31.5000, 31.0000]
        ],
        
        // Tributaries (arrows IN)
        tributaries: [
            { name: "White Nile", length: 3700, coordinates: [15.6000, 32.5500] },
            { name: "Blue Nile", length: 1450, coordinates: [15.6000, 32.5500] },
            { name: "Atbara River", length: 1120, coordinates: [17.7000, 34.0000] },
            { name: "Sobat River", length: 730, coordinates: [9.3000, 31.5000] },
            { name: "Bahr el Ghazal", length: 720, coordinates: [9.5000, 30.0000] }
        ],
        
        // Distributaries (arrows OUT)
        distributaries: [
            { name: "Rosetta Branch", length: 235, coordinates: [31.4500, 30.4167] },
            { name: "Damietta Branch", length: 240, coordinates: [31.4167, 31.8167] }
        ],
        
        // Major cities
        cities: [
            { name: "Cairo", coordinates: [30.0444, 31.2357], population: 20000000 },
            { name: "Khartoum", coordinates: [15.5007, 32.5599], population: 5800000 },
            { name: "Alexandria", coordinates: [31.2001, 29.9187], population: 5200000 },
            { name: "Luxor", coordinates: [25.6872, 32.6396], population: 500000 },
            { name: "Aswan", coordinates: [24.0889, 32.8998], population: 350000 }
        ],
        
        // Features
        features: [
            { name: "Nile Delta", type: "delta", coordinates: [31.0000, 30.9000] },
            { name: "Lake Victoria", type: "lake", coordinates: [-1.0440, 32.8500] },
            { name: "Lake Nasser", type: "reservoir", coordinates: [22.5000, 32.0000] },
            { name: "Aswan High Dam", type: "dam", coordinates: [23.9708, 32.8781] }
        ],
        
        facts: [
            "Longest river in Africa and arguably the world",
            "Flows through 11 different countries",
            "Ancient Egyptians called it 'Iteru' meaning 'great river'",
            "Only 22% of the Nile's water reaches the Mediterranean",
            "The Nile Delta is one of the world's oldest cultivated areas"
        ],
        
        description: "The Nile is the longest river in Africa, flowing northward through eleven countries. It has been the lifeline of Egyptian civilization for thousands of years, providing water for agriculture and transportation."
    },

    // #2 - AMAZON RIVER
    {
        id: 2,
        name: "Amazon River",
        length: 6400,
        discharge: 209000,
        countries: ["Brazil", "Peru", "Colombia", "Ecuador", "Bolivia", "Venezuela", "Guyana"],
        continent: "South America",
        
        image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=600&h=400&fit=crop",
        
        source: {
            name: "Nevado Mismi, Peru",
            coordinates: [-15.5178, -71.6897],
            elevation: 5220
        },
        mouth: {
            name: "Atlantic Ocean",
            coordinates: [-0.1667, -49.0000],
            elevation: 0
        },
        
        course: [
            [-15.5178, -71.6897],
            [-10.0000, -67.5000],
            [-5.0000, -65.0000],
            [-3.1000, -60.0000],
            [-2.0000, -55.0000],
            [-1.5000, -52.0000],
            [-0.1667, -49.0000]
        ],
        
        tributaries: [
            { name: "Rio Negro", length: 2250, coordinates: [-3.1300, -59.9000] },
            { name: "Madeira River", length: 3380, coordinates: [-3.4000, -58.8000] },
            { name: "Japurá River", length: 2820, coordinates: [-3.0000, -64.5000] },
            { name: "Purus River", length: 3211, coordinates: [-3.7000, -61.4000] },
            { name: "Tapajós River", length: 1992, coordinates: [-2.4000, -54.9000] },
            { name: "Xingu River", length: 1980, coordinates: [-1.8000, -52.2000] }
        ],
        
        distributaries: [
            { name: "Canal do Norte", length: 200, coordinates: [-0.2000, -49.5000] },
            { name: "Para River", length: 350, coordinates: [-1.5000, -48.5000] }
        ],
        
        cities: [
            { name: "Manaus", coordinates: [-3.1190, -60.0217], population: 2200000 },
            { name: "Belém", coordinates: [-1.4558, -48.4902], population: 2500000 },
            { name: "Iquitos", coordinates: [-3.7437, -73.2516], population: 480000 },
            { name: "Santarém", coordinates: [-2.4307, -54.7072], population: 300000 }
        ],
        
        features: [
            { name: "Meeting of Waters", type: "confluence", coordinates: [-3.1300, -59.9000] },
            { name: "Marajó Island", type: "island", coordinates: [-0.9900, -49.5900] },
            { name: "Amazon Rainforest", type: "forest", coordinates: [-3.0000, -60.0000] }
        ],
        
        facts: [
            "Largest river by discharge volume - 20% of all freshwater to oceans",
            "Has over 1,100 tributaries",
            "No bridges cross the entire Amazon River",
            "The 'Meeting of Waters' is visible for 6 km",
            "Contains 10% of all species on Earth"
        ],
        
        description: "The Amazon is the largest river by discharge volume of water in the world, and the most biodiverse region on Earth. Its rainforest produces 20% of the world's oxygen."
    },

    // #3 - YANGTZE RIVER
    {
        id: 3,
        name: "Yangtze River",
        length: 6300,
        discharge: 30000,
        countries: ["China"],
        continent: "Asia",
        
        image: "https://images.unsplash.com/photo-1537531383496-f4749b8032cf?w=600&h=400&fit=crop",
        
        source: {
            name: "Jari Hill, Tanggula Mountains",
            coordinates: [33.4300, 91.1800],
            elevation: 5170
        },
        mouth: {
            name: "East China Sea",
            coordinates: [31.3833, 121.9167],
            elevation: 0
        },
        
        course: [
            [33.4300, 91.1800],
            [29.5000, 106.5000],
            [30.5000, 111.0000],
            [30.5000, 114.3000],
            [32.0000, 119.0000],
            [31.3833, 121.9167]
        ],
        
        tributaries: [
            { name: "Yalong River", length: 1571, coordinates: [26.9000, 101.8000] },
            { name: "Min River", length: 735, coordinates: [28.7600, 104.6000] },
            { name: "Jialing River", length: 1119, coordinates: [29.5600, 106.5800] },
            { name: "Han River", length: 1532, coordinates: [30.5800, 114.2800] },
            { name: "Wu River", length: 1037, coordinates: [29.6000, 107.4000] }
        ],
        
        distributaries: [
            { name: "Huangpu River", length: 113, coordinates: [31.2000, 121.5000] }
        ],
        
        cities: [
            { name: "Shanghai", coordinates: [31.2304, 121.4737], population: 26000000 },
            { name: "Wuhan", coordinates: [30.5928, 114.3055], population: 11000000 },
            { name: "Chongqing", coordinates: [29.4316, 106.9123], population: 32000000 },
            { name: "Nanjing", coordinates: [32.0603, 118.7969], population: 9500000 }
        ],
        
        features: [
            { name: "Three Gorges Dam", type: "dam", coordinates: [30.8231, 111.0034] },
            { name: "Three Gorges", type: "gorge", coordinates: [30.7500, 110.5000] },
            { name: "Tiger Leaping Gorge", type: "gorge", coordinates: [27.1900, 100.1100] }
        ],
        
        facts: [
            "Longest river in Asia and third longest in the world",
            "Three Gorges Dam is the world's largest power station",
            "Over 400 million people depend on its waters",
            "Divides China culturally into North and South",
            "Baiji dolphin was declared functionally extinct in 2006"
        ],
        
        description: "The Yangtze is the longest river in Asia and the third-longest in the world. It has been central to Chinese civilization for thousands of years."
    },

    // #4 - MISSISSIPPI RIVER
    {
        id: 4,
        name: "Mississippi River",
        length: 3778,
        discharge: 16800,
        countries: ["United States"],
        continent: "North America",
        
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
        
        source: {
            name: "Lake Itasca, Minnesota",
            coordinates: [47.2389, -95.2058],
            elevation: 450
        },
        mouth: {
            name: "Gulf of Mexico",
            coordinates: [29.1530, -89.2527],
            elevation: 0
        },
        
        course: [
            [47.2389, -95.2058],
            [44.9778, -93.2650],
            [38.6270, -90.1994],
            [35.1495, -90.0490],
            [29.9511, -90.0715],
            [29.1530, -89.2527]
        ],
        
        tributaries: [
            { name: "Missouri River", length: 3768, coordinates: [38.8114, -90.1181] },
            { name: "Ohio River", length: 1579, coordinates: [37.0000, -89.1333] },
            { name: "Arkansas River", length: 2364, coordinates: [33.7667, -91.0500] },
            { name: "Red River", length: 2189, coordinates: [31.0000, -91.7000] },
            { name: "Illinois River", length: 439, coordinates: [38.9667, -90.4667] }
        ],
        
        distributaries: [
            { name: "Atchafalaya River", length: 220, coordinates: [29.7000, -91.2000] },
            { name: "Pass a Loutre", length: 40, coordinates: [29.2000, -89.3000] }
        ],
        
        cities: [
            { name: "Minneapolis", coordinates: [44.9778, -93.2650], population: 430000 },
            { name: "St. Louis", coordinates: [38.6270, -90.1994], population: 300000 },
            { name: "Memphis", coordinates: [35.1495, -90.0490], population: 650000 },
            { name: "New Orleans", coordinates: [29.9511, -90.0715], population: 390000 }
        ],
        
        features: [
            { name: "Bird's Foot Delta", type: "delta", coordinates: [29.2000, -89.2500] },
            { name: "Lake Itasca", type: "lake", coordinates: [47.2389, -95.2058] }
        ],
        
        facts: [
            "With Missouri system, totals 6,275 km (3,902 mi)",
            "Mark Twain worked as riverboat pilot",
            "Carries 40% of all US agricultural exports",
            "Native Americans called it 'Misi-ziibi' meaning 'Great River'",
            "The river has shifted course many times throughout history"
        ],
        
        description: "The Mississippi River is the second-longest river in North America. It has been central to American history, culture, and commerce for centuries."
    },

    // #5 - YENISEI RIVER
    {
        id: 5,
        name: "Yenisei River",
        length: 5539,
        discharge: 19800,
        countries: ["Russia", "Mongolia"],
        continent: "Asia",
        
        image: "https://images.unsplash.com/photo-1504893524553-b855bce32c67?w=600&h=400&fit=crop",
        
        source: {
            name: "Confluence of Bii-Khem and Kaa-Khem",
            coordinates: [51.7200, 94.4500],
            elevation: 619
        },
        mouth: {
            name: "Kara Sea (Arctic Ocean)",
            coordinates: [71.8333, 82.6667],
            elevation: 0
        },
        
        course: [
            [51.7200, 94.4500],
            [56.0100, 92.8700],
            [61.0000, 90.0000],
            [66.6000, 86.5000],
            [71.8333, 82.6667]
        ],
        
        tributaries: [
            { name: "Angara River", length: 1779, coordinates: [58.1000, 93.0000] },
            { name: "Lower Tunguska", length: 2989, coordinates: [65.8000, 88.0000] },
            { name: "Stony Tunguska", length: 1865, coordinates: [61.9000, 90.0000] },
            { name: "Abakan River", length: 514, coordinates: [53.7000, 91.4000] }
        ],
        
        distributaries: [
            { name: "Bolshoy Yenisei", length: 120, coordinates: [71.5000, 82.5000] }
        ],
        
        cities: [
            { name: "Krasnoyarsk", coordinates: [56.0097, 92.8520], population: 1100000 },
            { name: "Kyzyl", coordinates: [51.7090, 94.4378], population: 120000 },
            { name: "Norilsk", coordinates: [69.3535, 88.2027], population: 180000 }
        ],
        
        features: [
            { name: "Sayano-Shushenskaya Dam", type: "dam", coordinates: [52.8256, 91.3714] },
            { name: "Yenisei Gulf", type: "gulf", coordinates: [72.0000, 82.0000] }
        ],
        
        facts: [
            "Fifth longest river system in the world",
            "Divides Western and Eastern Siberia",
            "Frozen for 5+ months each year",
            "Sayano-Shushenskaya is Russia's largest power plant",
            "Kyzyl claims to be the exact center of Asia"
        ],
        
        description: "The Yenisei is one of the longest river systems flowing to the Arctic Ocean. It divides Western and Eastern Siberia."
    },

    // #6 - YELLOW RIVER (HUANG HE)
    {
        id: 6,
        name: "Yellow River",
        length: 5464,
        discharge: 2571,
        countries: ["China"],
        continent: "Asia",
        
        image: "https://images.unsplash.com/photo-1580133318324-f2f76d987dd8?w=600&h=400&fit=crop",
        
        source: {
            name: "Bayan Har Mountains, Qinghai",
            coordinates: [34.4833, 96.5000],
            elevation: 4500
        },
        mouth: {
            name: "Bohai Sea",
            coordinates: [37.7833, 119.1667],
            elevation: 0
        },
        
        course: [
            [34.4833, 96.5000],
            [36.0611, 103.8343],
            [40.8000, 111.6500],
            [34.7472, 113.6249],
            [37.7833, 119.1667]
        ],
        
        tributaries: [
            { name: "Wei River", length: 818, coordinates: [34.5000, 110.2000] },
            { name: "Fen River", length: 716, coordinates: [35.6000, 110.4000] },
            { name: "Tao River", length: 673, coordinates: [35.9000, 103.3000] },
            { name: "Beiluo River", length: 680, coordinates: [34.8000, 110.0000] }
        ],
        
        distributaries: [
            { name: "Northern Channel", length: 50, coordinates: [37.7000, 118.8000] }
        ],
        
        cities: [
            { name: "Lanzhou", coordinates: [36.0611, 103.8343], population: 4000000 },
            { name: "Zhengzhou", coordinates: [34.7472, 113.6249], population: 12600000 },
            { name: "Jinan", coordinates: [36.6512, 117.1201], population: 9000000 },
            { name: "Kaifeng", coordinates: [34.7971, 114.3073], population: 5200000 }
        ],
        
        features: [
            { name: "Loess Plateau", type: "plateau", coordinates: [36.0000, 109.0000] },
            { name: "Hukou Waterfall", type: "waterfall", coordinates: [36.1500, 110.4500] },
            { name: "Xiaolangdi Dam", type: "dam", coordinates: [34.9200, 112.3600] }
        ],
        
        facts: [
            "Called 'Yellow' due to massive loess silt content",
            "Carries 1.6 billion tons of sediment annually",
            "Known as 'China's Sorrow' due to devastating floods",
            "Has changed its mouth location 26 times in history",
            "Cradle of Chinese civilization"
        ],
        
        description: "The Yellow River is the second-longest river in China and the sixth-longest in the world. It is called the 'Mother River of China' and the cradle of Chinese civilization."
    },

    // #7 - OB RIVER
    {
        id: 7,
        name: "Ob River",
        length: 5410,
        discharge: 12800,
        countries: ["Russia", "Kazakhstan", "China", "Mongolia"],
        continent: "Asia",
        
        image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=600&h=400&fit=crop",
        
        source: {
            name: "Confluence of Biya and Katun Rivers",
            coordinates: [52.4300, 84.9800],
            elevation: 160
        },
        mouth: {
            name: "Gulf of Ob (Kara Sea)",
            coordinates: [66.7500, 69.5000],
            elevation: 0
        },
        
        course: [
            [52.4300, 84.9800],
            [55.0300, 82.9200],
            [61.2500, 73.4200],
            [66.5300, 66.6000],
            [66.7500, 69.5000]
        ],
        
        tributaries: [
            { name: "Irtysh River", length: 4248, coordinates: [61.0800, 68.8000] },
            { name: "Tom River", length: 827, coordinates: [56.5000, 84.9000] },
            { name: "Chulym River", length: 1799, coordinates: [57.0000, 83.0000] },
            { name: "Ket River", length: 1621, coordinates: [58.7000, 81.5000] }
        ],
        
        distributaries: [
            { name: "Nadym Ob", length: 100, coordinates: [66.5000, 69.0000] }
        ],
        
        cities: [
            { name: "Novosibirsk", coordinates: [55.0084, 82.9357], population: 1600000 },
            { name: "Barnaul", coordinates: [53.3548, 83.7698], population: 630000 },
            { name: "Surgut", coordinates: [61.2500, 73.4167], population: 380000 }
        ],
        
        features: [
            { name: "Novosibirsk Reservoir", type: "reservoir", coordinates: [54.6000, 82.5000] },
            { name: "Gulf of Ob", type: "gulf", coordinates: [69.0000, 73.0000] },
            { name: "Vasyugan Swamp", type: "wetland", coordinates: [57.5000, 77.0000] }
        ],
        
        facts: [
            "With Irtysh, forms seventh-longest river system",
            "Gulf of Ob is world's longest estuary (800 km)",
            "Basin contains massive oil and gas reserves",
            "Frozen 6 months per year",
            "Drains the world's largest swamp (Vasyugan)"
        ],
        
        description: "The Ob is a major river in western Siberia. Together with its tributary the Irtysh, it forms the world's seventh-longest river system."
    },

    // #8 - PARANÁ RIVER
    {
        id: 8,
        name: "Paraná River",
        length: 4880,
        discharge: 17290,
        countries: ["Brazil", "Paraguay", "Argentina"],
        continent: "South America",
        
        image: "https://images.unsplash.com/photo-1546587348-d12660c30c50?w=600&h=400&fit=crop",
        
        source: {
            name: "Confluence of Paranaíba and Grande Rivers",
            coordinates: [-20.0833, -51.0333],
            elevation: 446
        },
        mouth: {
            name: "Río de la Plata",
            coordinates: [-34.0000, -58.4000],
            elevation: 0
        },
        
        course: [
            [-20.0833, -51.0333],
            [-24.0500, -54.5900],
            [-27.4000, -58.8000],
            [-32.0000, -60.6000],
            [-34.0000, -58.4000]
        ],
        
        tributaries: [
            { name: "Paraguay River", length: 2549, coordinates: [-27.2833, -58.6333] },
            { name: "Iguazu River", length: 1320, coordinates: [-25.5833, -54.5833] },
            { name: "Tietê River", length: 1136, coordinates: [-22.5200, -51.4000] },
            { name: "Paranapanema River", length: 929, coordinates: [-22.8000, -52.9000] }
        ],
        
        distributaries: [
            { name: "Paraná Guazú", length: 120, coordinates: [-33.9000, -58.6000] },
            { name: "Paraná de las Palmas", length: 110, coordinates: [-34.0000, -58.8000] }
        ],
        
        cities: [
            { name: "Buenos Aires", coordinates: [-34.6037, -58.3816], population: 15000000 },
            { name: "Rosario", coordinates: [-32.9442, -60.6505], population: 1300000 },
            { name: "Asunción", coordinates: [-25.2637, -57.5759], population: 2500000 }
        ],
        
        features: [
            { name: "Itaipu Dam", type: "dam", coordinates: [-25.4083, -54.5886] },
            { name: "Iguazu Falls", type: "waterfall", coordinates: [-25.6953, -54.4367] },
            { name: "Paraná Delta", type: "delta", coordinates: [-34.1500, -58.5000] }
        ],
        
        facts: [
            "Itaipu Dam was world's largest until Three Gorges",
            "The name means 'like the sea' in Guaraní",
            "Iguazu Falls is one of the world's largest waterfall systems",
            "Forms natural borders between three countries",
            "Second-largest river system in South America"
        ],
        
        description: "The Paraná River is a river in south-central South America, running through Brazil, Paraguay, and Argentina. It is second in length only to the Amazon in South America."
    },

    // #9 - CONGO RIVER
    {
        id: 9,
        name: "Congo River",
        length: 4700,
        discharge: 41000,
        countries: ["DR Congo", "Republic of Congo", "Central African Republic", "Angola", "Zambia", "Tanzania", "Cameroon", "Rwanda", "Burundi"],
        continent: "Africa",
        
        image: "https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?w=600&h=400&fit=crop",
        
        source: {
            name: "Chambeshi River headwaters",
            coordinates: [-9.6333, 29.7833],
            elevation: 1760
        },
        mouth: {
            name: "Atlantic Ocean",
            coordinates: [-6.0667, 12.4333],
            elevation: 0
        },
        
        course: [
            [-9.6333, 29.7833],
            [-4.0000, 22.0000],
            [0.5200, 25.1900],
            [-4.3000, 15.3100],
            [-6.0667, 12.4333]
        ],
        
        tributaries: [
            { name: "Ubangi River", length: 2272, coordinates: [0.0500, 17.7000] },
            { name: "Kasai River", length: 2153, coordinates: [-3.3000, 16.5000] },
            { name: "Sangha River", length: 1400, coordinates: [1.2000, 17.0000] },
            { name: "Lomami River", length: 1500, coordinates: [0.3000, 24.2000] }
        ],
        
        distributaries: [
            { name: "Main Channel", length: 30, coordinates: [-6.0000, 12.5000] }
        ],
        
        cities: [
            { name: "Kinshasa", coordinates: [-4.4419, 15.2663], population: 17000000 },
            { name: "Brazzaville", coordinates: [-4.2634, 15.2429], population: 2400000 },
            { name: "Kisangani", coordinates: [0.5200, 25.1900], population: 1600000 }
        ],
        
        features: [
            { name: "Livingstone Falls", type: "waterfall", coordinates: [-5.5000, 14.0000] },
            { name: "Boyoma Falls", type: "waterfall", coordinates: [0.5000, 25.2000] },
            { name: "Pool Malebo", type: "lake", coordinates: [-4.3000, 15.3000] }
        ],
        
        facts: [
            "Second-largest river by discharge after Amazon",
            "Only major river to cross the equator twice",
            "Contains over 700 fish species",
            "Deepest river in the world (up to 220m)",
            "Grand Inga could be world's largest hydroelectric project"
        ],
        
        description: "The Congo River is the second-largest river in Africa by discharge. It is the deepest river in the world, with measured depths over 220 meters."
    },

    // #10 - AMUR RIVER
    {
        id: 10,
        name: "Amur River",
        length: 4444,
        discharge: 11400,
        countries: ["Russia", "China", "Mongolia"],
        continent: "Asia",
        
        image: "https://images.unsplash.com/photo-1552083375-1447ce886485?w=600&h=400&fit=crop",
        
        source: {
            name: "Confluence of Shilka and Argun Rivers",
            coordinates: [53.3333, 121.5000],
            elevation: 304
        },
        mouth: {
            name: "Sea of Okhotsk",
            coordinates: [52.9333, 141.1333],
            elevation: 0
        },
        
        course: [
            [53.3333, 121.5000],
            [50.2500, 127.5500],
            [48.4800, 134.9300],
            [52.9333, 141.1333]
        ],
        
        tributaries: [
            { name: "Songhua River", length: 1927, coordinates: [47.6500, 132.5000] },
            { name: "Ussuri River", length: 897, coordinates: [48.2800, 134.2300] },
            { name: "Zeya River", length: 1242, coordinates: [50.2500, 127.5500] },
            { name: "Bureya River", length: 716, coordinates: [49.5000, 129.5000] }
        ],
        
        distributaries: [
            { name: "Main Channel", length: 50, coordinates: [52.8000, 140.8000] }
        ],
        
        cities: [
            { name: "Harbin", coordinates: [45.8038, 126.5350], population: 10000000 },
            { name: "Khabarovsk", coordinates: [48.4827, 135.0837], population: 620000 },
            { name: "Blagoveshchensk", coordinates: [50.2785, 127.5272], population: 230000 }
        ],
        
        features: [
            { name: "Zeya Dam", type: "dam", coordinates: [53.7400, 127.2700] },
            { name: "Lake Khanka", type: "lake", coordinates: [44.9500, 132.4000] }
        ],
        
        facts: [
            "Forms much of the Russia-China border",
            "Name means 'Black Dragon River' in Chinese",
            "Home to endangered Kaluga sturgeon",
            "One of few major rivers not heavily dammed",
            "2013 floods displaced 100,000 people"
        ],
        
        description: "The Amur River is the world's tenth-longest river, forming the border between the Russian Far East and Northeastern China."
    }

];

// Export for use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { riversData };
}

console.log('Rivers Data Loaded:', riversData.length, 'rivers');
