// ========================================
// RIVERS DATA - COMPLETE DATABASE
// Part 1: Rivers #1-10
// ========================================

const riversData = [

    // ========================================
    // #1 - NILE RIVER
    // ========================================
    {
        id: 1,
        name: "Nile River",
        alternateNames: ["An-Nīl", "Bahr el-Nil"],
        length: 6650,
        lengthMiles: 4132,
        rank: 1,
        
        // Location
        countries: ["Uganda", "South Sudan", "Sudan", "Egypt", "Ethiopia", "Eritrea", "Kenya", "Tanzania", "DR Congo", "Rwanda", "Burundi"],
        continent: "Africa",
        regions: ["East Africa", "Northeast Africa", "Nile Valley"],
        
        // Coordinates
        source: {
            name: "Nyungwe Forest, Rwanda (Ultimate source)",
            coordinates: [-2.3167, 29.3500],
            elevation: 2400,
            description: "The ultimate source is in Nyungwe Forest, feeding into Lake Victoria"
        },
        mouth: {
            name: "Mediterranean Sea (Nile Delta)",
            coordinates: [31.5000, 31.0000],
            elevation: 0,
            description: "Massive delta on Egyptian Mediterranean coast"
        },
        
        // River course (key points from source to mouth)
        course: [
            [-2.3167, 29.3500],   // Source - Rwanda
            [-1.0000, 33.0000],   // Lake Victoria region
            [2.0000, 32.5000],    // Uganda
            [6.0000, 31.5000],    // South Sudan
            [9.5000, 31.6000],    // Sudan - Khartoum area
            [15.5000, 32.5000],   // Northern Sudan
            [18.0000, 31.0000],   // Sudan-Egypt border
            [22.0000, 31.5000],   // Southern Egypt
            [24.0000, 32.9000],   // Luxor area
            [26.5000, 31.5000],   // Central Egypt
            [30.0000, 31.2000],   // Cairo area
            [31.5000, 31.0000]    // Delta - Mediterranean
        ],
        
        // Basin info
        basin: {
            area: 3349000,
            areaSqMi: 1293000,
            countries: 11,
            population: 300000000
        },
        
        discharge: {
            average: 2830,
            unit: "m³/s",
            max: 8500,
            min: 500
        },
        
        // Tributaries (arrows pointing IN to river)
        tributaries: [
            {
                name: "White Nile",
                length: 3700,
                meetingPoint: [15.6000, 32.5500],
                direction: "south",
                arrowDirection: "in",
                country: "Sudan"
            },
            {
                name: "Blue Nile",
                length: 1450,
                meetingPoint: [15.6000, 32.5500],
                direction: "southeast",
                arrowDirection: "in",
                country: "Sudan/Ethiopia"
            },
            {
                name: "Atbara River",
                length: 1120,
                meetingPoint: [17.7000, 34.0000],
                direction: "east",
                arrowDirection: "in",
                country: "Ethiopia/Sudan"
            },
            {
                name: "Sobat River",
                length: 730,
                meetingPoint: [9.3000, 31.5000],
                direction: "east",
                arrowDirection: "in",
                country: "South Sudan/Ethiopia"
            },
            {
                name: "Bahr el Ghazal",
                length: 720,
                meetingPoint: [9.5000, 30.0000],
                direction: "west",
                arrowDirection: "in",
                country: "South Sudan"
            }
        ],
        
        // Distributaries (arrows pointing OUT from river)
        distributaries: [
            {
                name: "Rosetta Branch",
                length: 235,
                startPoint: [30.1000, 31.1000],
                direction: "northwest",
                arrowDirection: "out",
                destination: "Mediterranean Sea"
            },
            {
                name: "Damietta Branch",
                length: 240,
                startPoint: [30.1000, 31.1000],
                direction: "northeast",
                arrowDirection: "out",
                destination: "Mediterranean Sea"
            }
        ],
        
        // Major cities along river
        majorCities: [
            { name: "Cairo", coordinates: [30.0444, 31.2357], population: 20000000 },
            { name: "Alexandria", coordinates: [31.2001, 29.9187], population: 5200000 },
            { name: "Khartoum", coordinates: [15.5007, 32.5599], population: 5800000 },
            { name: "Luxor", coordinates: [25.6872, 32.6396], population: 500000 },
            { name: "Aswan", coordinates: [24.0889, 32.8998], population: 350000 },
            { name: "Juba", coordinates: [4.8594, 31.5713], population: 525000 }
        ],
        
        // Key features
        features: [
            { name: "Nile Delta", type: "delta", coordinates: [31.0000, 30.9000] },
            { name: "Lake Victoria", type: "lake", coordinates: [-1.0440, 32.8500] },
            { name: "Lake Nasser", type: "reservoir", coordinates: [22.5000, 32.0000] },
            { name: "Aswan High Dam", type: "dam", coordinates: [23.9708, 32.8781] },
            { name: "Sudd Wetlands", type: "wetland", coordinates: [7.5000, 30.5000] },
            { name: "Cataracts", type: "rapids", coordinates: [24.0000, 32.9000] }
        ],
        
        // Classification
        type: "Perennial",
        flowDirection: "South to North",
        gradient: "Low",
        waterColor: "Brown/Tan",
        
        // Significance
        significance: {
            ecological: "Supports vast wetland ecosystems in the Sudd region; critical habitat for migratory birds and aquatic species",
            economic: "Irrigates 99% of Egypt's cultivated land; supports 300 million people; vital for agriculture and fishing",
            cultural: "Cradle of ancient Egyptian civilization; sacred in Egyptian mythology; source of life for millennia",
            historical: "Enabled rise of Egyptian pharaohs; ancient trade route; Napoleon's expeditions; colonial-era conflicts"
        },
        
        // Additional info
        annualFlood: "June to September",
        majorDams: ["Aswan High Dam", "Aswan Low Dam", "Merowe Dam", "Roseires Dam", "Sennar Dam"],
        wildlife: ["Nile Crocodile", "Nile Perch", "Hippopotamus", "African Softshell Turtle", "Papyrus"],
        
        // Media
        images: {
            main: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Nile_River_and_delta_from_orbit.jpg/800px-Nile_River_and_delta_from_orbit.jpg",
            gallery: [
                "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Nile_River_-_panoramio.jpg/800px-Nile_River_-_panoramio.jpg"
            ]
        },
        
        facts: [
            "Longest river in Africa and arguably the world",
            "Ancient Egyptians called it 'Iteru' meaning 'great river'",
            "Flows through 11 different countries",
            "The Nile Delta is one of the world's oldest intensely cultivated areas",
            "Only 22% of the Nile's water reaches the Mediterranean"
        ],
        
        lastUpdated: "2024"
    },

    // ========================================
    // #2 - AMAZON RIVER
    // ========================================
    {
        id: 2,
        name: "Amazon River",
        alternateNames: ["Rio Amazonas", "Solimões"],
        length: 6400,
        lengthMiles: 3976,
        rank: 2,
        
        countries: ["Brazil", "Peru", "Colombia", "Ecuador", "Bolivia", "Venezuela", "Guyana"],
        continent: "South America",
        regions: ["Amazon Basin", "South America"],
        
        source: {
            name: "Nevado Mismi, Peru",
            coordinates: [-15.5178, -71.6897],
            elevation: 5220,
            description: "Glacial streams on Mount Mismi in the Andes"
        },
        mouth: {
            name: "Atlantic Ocean",
            coordinates: [-0.1667, -49.0000],
            elevation: 0,
            description: "Massive estuary in northern Brazil, including Marajó Island"
        },
        
        course: [
            [-15.5178, -71.6897],  // Source - Peru
            [-14.5000, -70.5000],  // Upper Amazon
            [-10.0000, -67.5000],  // Peru-Brazil border
            [-5.0000, -65.0000],   // Manaus region
            [-3.1000, -60.0000],   // Near Manaus
            [-2.0000, -55.0000],   // Middle Amazon
            [-1.5000, -52.0000],   // Lower Amazon
            [-0.5000, -50.0000],   // Near mouth
            [-0.1667, -49.0000]    // Atlantic
        ],
        
        basin: {
            area: 7050000,
            areaSqMi: 2722000,
            countries: 7,
            population: 40000000
        },
        
        discharge: {
            average: 209000,
            unit: "m³/s",
            max: 340000,
            min: 100000
        },
        
        tributaries: [
            {
                name: "Rio Negro",
                length: 2250,
                meetingPoint: [-3.1300, -59.9000],
                direction: "north",
                arrowDirection: "in",
                country: "Brazil"
            },
            {
                name: "Madeira River",
                length: 3380,
                meetingPoint: [-3.4000, -58.8000],
                direction: "south",
                arrowDirection: "in",
                country: "Brazil/Bolivia"
            },
            {
                name: "Japurá River",
                length: 2820,
                meetingPoint: [-3.0000, -64.5000],
                direction: "northwest",
                arrowDirection: "in",
                country: "Colombia/Brazil"
            },
            {
                name: "Purus River",
                length: 3211,
                meetingPoint: [-3.7000, -61.4000],
                direction: "south",
                arrowDirection: "in",
                country: "Brazil"
            },
            {
                name: "Tapajós River",
                length: 1992,
                meetingPoint: [-2.4000, -54.9000],
                direction: "south",
                arrowDirection: "in",
                country: "Brazil"
            },
            {
                name: "Xingu River",
                length: 1980,
                meetingPoint: [-1.8000, -52.2000],
                direction: "south",
                arrowDirection: "in",
                country: "Brazil"
            }
        ],
        
        distributaries: [
            {
                name: "Canal do Norte",
                length: 200,
                startPoint: [-0.5000, -50.0000],
                direction: "north",
                arrowDirection: "out",
                destination: "Atlantic Ocean"
            },
            {
                name: "Canal do Sul",
                length: 180,
                startPoint: [-0.5000, -50.0000],
                direction: "south",
                arrowDirection: "out",
                destination: "Atlantic Ocean"
            },
            {
                name: "Para River",
                length: 350,
                startPoint: [-1.0000, -49.5000],
                direction: "southeast",
                arrowDirection: "out",
                destination: "Atlantic Ocean"
            }
        ],
        
        majorCities: [
            { name: "Manaus", coordinates: [-3.1190, -60.0217], population: 2200000 },
            { name: "Belém", coordinates: [-1.4558, -48.4902], population: 2500000 },
            { name: "Iquitos", coordinates: [-3.7437, -73.2516], population: 480000 },
            { name: "Santarém", coordinates: [-2.4307, -54.7072], population: 300000 },
            { name: "Macapá", coordinates: [0.0356, -51.0705], population: 500000 }
        ],
        
        features: [
            { name: "Meeting of Waters", type: "confluence", coordinates: [-3.1300, -59.9000] },
            { name: "Marajó Island", type: "island", coordinates: [-0.9900, -49.5900] },
            { name: "Amazon Rainforest", type: "forest", coordinates: [-3.0000, -60.0000] },
            { name: "Anavilhanas Archipelago", type: "archipelago", coordinates: [-2.7000, -60.8000] }
        ],
        
        type: "Perennial",
        flowDirection: "West to East",
        gradient: "Very Low",
        waterColor: "Brown (sediment-rich)",
        
        significance: {
            ecological: "Contains 10% of all species on Earth; largest tropical rainforest; produces 20% of world's oxygen",
            economic: "Major shipping route; fishing industry; timber; hydroelectric potential",
            cultural: "Home to 400+ indigenous tribes; rich mythology; symbol of Brazil",
            historical: "Spanish explorer Francisco de Orellana first navigation in 1542; rubber boom; ongoing conservation battles"
        },
        
        annualFlood: "November to June",
        majorDams: ["Belo Monte Dam", "Tucuruí Dam", "Santo Antônio Dam", "Jirau Dam"],
        wildlife: ["Amazon River Dolphin", "Piranha", "Anaconda", "Arapaima", "Black Caiman", "Manatee"],
        
        images: {
            main: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Amazon_River_-_near_Manaus_-_Brazil.jpg/800px-Amazon_River_-_near_Manaus_-_Brazil.jpg",
            gallery: []
        },
        
        facts: [
            "Largest river by discharge volume - 20% of all freshwater flowing into oceans",
            "Has over 1,100 tributaries",
            "The 'Meeting of Waters' where black Rio Negro meets tan Amazon is visible for 6 km",
            "No bridges cross the entire Amazon River",
            "Pororoca tidal bore can reach 4 meters high"
        ],
        
        lastUpdated: "2024"
    },

    // ========================================
    // #3 - YANGTZE RIVER
    // ========================================
    {
        id: 3,
        name: "Yangtze River",
        alternateNames: ["Chang Jiang", "长江", "Long River"],
        length: 6300,
        lengthMiles: 3917,
        rank: 3,
        
        countries: ["China"],
        continent: "Asia",
        regions: ["East Asia", "Central China", "Tibet"],
        
        source: {
            name: "Jari Hill, Tanggula Mountains",
            coordinates: [33.4300, 91.1800],
            elevation: 5170,
            description: "Glacial meltwater on Qinghai-Tibet Plateau"
        },
        mouth: {
            name: "East China Sea",
            coordinates: [31.3833, 121.9167],
            elevation: 0,
            description: "Shanghai area, massive delta region"
        },
        
        course: [
            [33.4300, 91.1800],   // Source - Tibet
            [33.0000, 97.0000],   // Upper Yangtze
            [28.0000, 99.0000],   // Yunnan
            [29.5000, 106.5000],  // Chongqing
            [30.5000, 111.0000],  // Three Gorges
            [30.5000, 114.3000],  // Wuhan
            [30.6000, 117.0000],  // Anqing
            [32.0000, 119.0000],  // Nanjing
            [31.3833, 121.9167]   // Shanghai - Sea
        ],
        
        basin: {
            area: 1808500,
            areaSqMi: 698265,
            countries: 1,
            population: 480000000
        },
        
        discharge: {
            average: 30000,
            unit: "m³/s",
            max: 110000,
            min: 8000
        },
        
        tributaries: [
            {
                name: "Yalong River",
                length: 1571,
                meetingPoint: [26.9000, 101.8000],
                direction: "northwest",
                arrowDirection: "in",
                country: "China"
            },
            {
                name: "Min River",
                length: 735,
                meetingPoint: [28.7600, 104.6000],
                direction: "north",
                arrowDirection: "in",
                country: "China"
            },
            {
                name: "Jialing River",
                length: 1119,
                meetingPoint: [29.5600, 106.5800],
                direction: "north",
                arrowDirection: "in",
                country: "China"
            },
            {
                name: "Han River",
                length: 1532,
                meetingPoint: [30.5800, 114.2800],
                direction: "northwest",
                arrowDirection: "in",
                country: "China"
            },
            {
                name: "Wu River",
                length: 1037,
                meetingPoint: [29.6000, 107.4000],
                direction: "south",
                arrowDirection: "in",
                country: "China"
            },
            {
                name: "Xiang River",
                length: 856,
                meetingPoint: [29.4000, 113.1000],
                direction: "south",
                arrowDirection: "in",
                country: "China"
            }
        ],
        
        distributaries: [
            {
                name: "Huangpu River",
                length: 113,
                startPoint: [31.2000, 121.5000],
                direction: "north",
                arrowDirection: "out",
                destination: "Yangtze Delta"
            }
        ],
        
        majorCities: [
            { name: "Shanghai", coordinates: [31.2304, 121.4737], population: 26000000 },
            { name: "Wuhan", coordinates: [30.5928, 114.3055], population: 11000000 },
            { name: "Chongqing", coordinates: [29.4316, 106.9123], population: 32000000 },
            { name: "Nanjing", coordinates: [32.0603, 118.7969], population: 9500000 },
            { name: "Chengdu", coordinates: [30.5728, 104.0668], population: 21000000 }
        ],
        
        features: [
            { name: "Three Gorges Dam", type: "dam", coordinates: [30.8231, 111.0034] },
            { name: "Three Gorges", type: "gorge", coordinates: [30.7500, 110.5000] },
            { name: "Tiger Leaping Gorge", type: "gorge", coordinates: [27.1900, 100.1100] },
            { name: "Dongting Lake", type: "lake", coordinates: [29.3000, 112.8000] },
            { name: "Poyang Lake", type: "lake", coordinates: [29.1500, 116.2700] }
        ],
        
        type: "Perennial",
        flowDirection: "West to East",
        gradient: "Variable",
        waterColor: "Brown/Yellow",
        
        significance: {
            ecological: "Habitat for Yangtze finless porpoise and giant salamander; critical wetland ecosystems",
            economic: "Third-busiest shipping route; Three Gorges produces 100 TWh/year; irrigates vast farmlands",
            cultural: "Divides North and South China; cradle of Chinese civilization; countless poems and legends",
            historical: "Ancient trade route; WWII battles; 1954 and 1998 floods killed thousands"
        },
        
        annualFlood: "June to September",
        majorDams: ["Three Gorges Dam", "Gezhouba Dam", "Xiluodu Dam", "Xiangjiaba Dam"],
        wildlife: ["Yangtze Finless Porpoise", "Chinese Paddlefish (extinct)", "Chinese Alligator", "Giant Salamander"],
        
        images: {
            main: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Yangtze_River_-_Three_Gorges.jpg/800px-Yangtze_River_-_Three_Gorges.jpg",
            gallery: []
        },
        
        facts: [
            "Longest river in Asia and third longest in the world",
            "Three Gorges Dam is the world's largest power station by capacity",
            "The river divides China culturally into North and South",
            "Over 400 million people depend on its waters",
            "Baiji (Yangtze River Dolphin) was declared functionally extinct in 2006"
        ],
        
        lastUpdated: "2024"
    },

    // ========================================
    // #4 - MISSISSIPPI RIVER
    // ========================================
    {
        id: 4,
        name: "Mississippi River",
        alternateNames: ["Old Man River", "Father of Waters", "Misi-ziibi"],
        length: 3778,
        lengthMiles: 2348,
        rank: 4,
        
        countries: ["United States"],
        continent: "North America",
        regions: ["Midwest USA", "Southern USA", "Great Plains"],
        
        source: {
            name: "Lake Itasca, Minnesota",
            coordinates: [47.2389, -95.2058],
            elevation: 450,
            description: "Small glacial lake in northern Minnesota"
        },
        mouth: {
            name: "Gulf of Mexico",
            coordinates: [29.1530, -89.2527],
            elevation: 0,
            description: "Bird's Foot Delta in Louisiana"
        },
        
        course: [
            [47.2389, -95.2058],  // Lake Itasca
            [45.0000, -93.2700],  // Minneapolis
            [44.0500, -91.6400],  // Wisconsin border
            [41.5000, -90.5700],  // Quad Cities
            [38.6200, -90.2000],  // St. Louis
            [37.0000, -89.1300],  // Cairo, IL
            [35.1500, -90.0500],  // Memphis
            [32.3000, -91.0000],  // Vicksburg
            [30.0000, -91.0000],  // Baton Rouge
            [29.9500, -90.0700],  // New Orleans
            [29.1530, -89.2527]   // Gulf of Mexico
        ],
        
        basin: {
            area: 2980000,
            areaSqMi: 1151000,
            countries: 1,
            population: 120000000
        },
        
        discharge: {
            average: 16800,
            unit: "m³/s",
            max: 58000,
            min: 4000
        },
        
        tributaries: [
            {
                name: "Missouri River",
                length: 3768,
                meetingPoint: [38.8114, -90.1181],
                direction: "west",
                arrowDirection: "in",
                country: "USA"
            },
            {
                name: "Ohio River",
                length: 1579,
                meetingPoint: [37.0000, -89.1333],
                direction: "east",
                arrowDirection: "in",
                country: "USA"
            },
            {
                name: "Arkansas River",
                length: 2364,
                meetingPoint: [33.7667, -91.0500],
                direction: "west",
                arrowDirection: "in",
                country: "USA"
            },
            {
                name: "Red River",
                length: 2189,
                meetingPoint: [31.0000, -91.7000],
                direction: "west",
                arrowDirection: "in",
                country: "USA"
            },
            {
                name: "Minnesota River",
                length: 534,
                meetingPoint: [44.8920, -93.1790],
                direction: "west",
                arrowDirection: "in",
                country: "USA"
            },
            {
                name: "Illinois River",
                length: 439,
                meetingPoint: [38.9667, -90.4667],
                direction: "northeast",
                arrowDirection: "in",
                country: "USA"
            }
        ],
        
        distributaries: [
            {
                name: "Atchafalaya River",
                length: 220,
                startPoint: [31.0000, -91.7000],
                direction: "southwest",
                arrowDirection: "out",
                destination: "Gulf of Mexico"
            },
            {
                name: "Pass a Loutre",
                length: 40,
                startPoint: [29.3000, -89.3000],
                direction: "southeast",
                arrowDirection: "out",
                destination: "Gulf of Mexico"
            },
            {
                name: "South Pass",
                length: 35,
                startPoint: [29.2000, -89.4000],
                direction: "south",
                arrowDirection: "out",
                destination: "Gulf of Mexico"
            }
        ],
        
        majorCities: [
            { name: "Minneapolis", coordinates: [44.9778, -93.2650], population: 430000 },
            { name: "St. Louis", coordinates: [38.6270, -90.1994], population: 300000 },
            { name: "Memphis", coordinates: [35.1495, -90.0490], population: 650000 },
            { name: "New Orleans", coordinates: [29.9511, -90.0715], population: 390000 },
            { name: "Baton Rouge", coordinates: [30.4515, -91.1871], population: 225000 }
        ],
        
        features: [
            { name: "Bird's Foot Delta", type: "delta", coordinates: [29.2000, -89.2500] },
            { name: "Lake Itasca", type: "lake", coordinates: [47.2389, -95.2058] },
            { name: "Old River Control Structure", type: "dam", coordinates: [31.0600, -91.5900] },
            { name: "Lock and Dam No. 19", type: "dam", coordinates: [40.3900, -91.3700] }
        ],
        
        type: "Perennial",
        flowDirection: "North to South",
        gradient: "Low",
        waterColor: "Brown",
        
        significance: {
            ecological: "Mississippi Flyway for 325 bird species; critical wetland habitat; diverse fish populations",
            economic: "Transports 500 million tons of cargo annually; $130 billion economic impact; major port system",
            cultural: "Mark Twain's novels; Blues music; symbol of American frontier; Native American heritage",
            historical: "Louisiana Purchase; Civil War battles; steamboat era; Great Flood of 1927"
        },
        
        annualFlood: "March to June",
        majorDams: ["Lock and Dam No. 1-27", "Old River Control Structure", "Bonnet Carré Spillway"],
        wildlife: ["American Paddlefish", "Blue Catfish", "Alligator", "Bald Eagle", "White Pelican"],
        
        images: {
            main: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Mississippi_River_at_Memphis.jpg/800px-Mississippi_River_at_Memphis.jpg",
            gallery: []
        },
        
        facts: [
            "With Missouri-Jefferson system, totals 6,275 km (3,902 mi)",
            "Mark Twain worked as riverboat pilot and wrote about it extensively",
            "The river has shifted course many times; New Orleans fights to keep it in place",
            "Carries 40% of all US agricultural exports",
            "Native Americans called it 'Misi-ziibi' meaning 'Great River'"
        ],
        
        lastUpdated: "2024"
    },

    // ========================================
    // #5 - YENISEI RIVER
    // ========================================
    {
        id: 5,
        name: "Yenisei River",
        alternateNames: ["Yenisey", "Енисей", "Ionessi"],
        length: 5539,
        lengthMiles: 3442,
        rank: 5,
        
        countries: ["Russia", "Mongolia"],
        continent: "Asia",
        regions: ["Siberia", "Central Asia", "Arctic"],
        
        source: {
            name: "Confluence of Bii-Khem and Kaa-Khem",
            coordinates: [51.7200, 94.4500],
            elevation: 619,
            description: "Near Kyzyl, capital of Tuva Republic"
        },
        mouth: {
            name: "Kara Sea (Arctic Ocean)",
            coordinates: [71.8333, 82.6667],
            elevation: 0,
            description: "Yenisei Gulf in the Arctic Ocean"
        },
        
        course: [
            [51.7200, 94.4500],   // Source - Kyzyl
            [53.5000, 91.5000],   // Sayanogorsk
            [55.0000, 89.0000],   // Abakan area
            [56.0100, 92.8700],   // Krasnoyarsk
            [58.5000, 92.0000],   // Yeniseysk
            [61.0000, 90.0000],   // Central Siberia
            [66.6000, 86.5000],   // Igarka
            [69.4000, 84.0000],   // Dudinka
            [71.8333, 82.6667]    // Kara Sea
        ],
        
        basin: {
            area: 2580000,
            areaSqMi: 996000,
            countries: 2,
            population: 4000000
        },
        
        discharge: {
            average: 19800,
            unit: "m³/s",
            max: 154000,
            min: 3500
        },
        
        tributaries: [
            {
                name: "Angara River",
                length: 1779,
                meetingPoint: [58.1000, 93.0000],
                direction: "east",
                arrowDirection: "in",
                country: "Russia"
            },
            {
                name: "Lower Tunguska",
                length: 2989,
                meetingPoint: [65.8000, 88.0000],
                direction: "east",
                arrowDirection: "in",
                country: "Russia"
            },
            {
                name: "Stony Tunguska",
                length: 1865,
                meetingPoint: [61.9000, 90.0000],
                direction: "east",
                arrowDirection: "in",
                country: "Russia"
            },
            {
                name: "Upper Tunguska (Angara)",
                length: 1779,
                meetingPoint: [58.1000, 93.0000],
                direction: "east",
                arrowDirection: "in",
                country: "Russia"
            },
            {
                name: "Abakan River",
                length: 514,
                meetingPoint: [53.7000, 91.4000],
                direction: "west",
                arrowDirection: "in",
                country: "Russia"
            }
        ],
        
        distributaries: [
            {
                name: "Bolshoy Yenisei",
                length: 120,
                startPoint: [71.5000, 82.5000],
                direction: "north",
                arrowDirection: "out",
                destination: "Yenisei Gulf"
            },
            {
                name: "Maly Yenisei",
                length: 85,
                startPoint: [71.5000, 83.0000],
                direction: "northeast",
                arrowDirection: "out",
                destination: "Yenisei Gulf"
            }
        ],
        
        majorCities: [
            { name: "Krasnoyarsk", coordinates: [56.0097, 92.8520], population: 1100000 },
            { name: "Kyzyl", coordinates: [51.7090, 94.4378], population: 120000 },
            { name: "Norilsk", coordinates: [69.3535, 88.2027], population: 180000 },
            { name: "Abakan", coordinates: [53.7150, 91.4290], population: 190000 },
            { name: "Dudinka", coordinates: [69.4000, 86.2000], population: 22000 }
        ],
        
        features: [
            { name: "Sayano-Shushenskaya Dam", type: "dam", coordinates: [52.8256, 91.3714] },
            { name: "Lake Baikal connection", type: "lake", coordinates: [53.5587, 108.1650] },
            { name: "Yenisei Gulf", type: "gulf", coordinates: [72.0000, 82.0000] },
            { name: "Krasnoyarsk Dam", type: "dam", coordinates: [55.9200, 92.3000] }
        ],
        
        type: "Perennial",
        flowDirection: "South to North",
        gradient: "Moderate",
        waterColor: "Gray-Blue",
        
        significance: {
            ecological: "Arctic ecosystem; major bird migration route; supports Siberian wildlife; permafrost region",
            economic: "Largest hydroelectric stations in Russia; timber transport; mining industry support",
            cultural: "Home to indigenous Ket people; Russian frontier history; Siberian identity",
            historical: "Russian expansion into Siberia; exile route; Trans-Siberian Railway crossing"
        },
        
        annualFlood: "May to June (snowmelt)",
        majorDams: ["Sayano-Shushenskaya Dam", "Krasnoyarsk Dam", "Mainskaya Dam"],
        wildlife: ["Siberian Sturgeon", "Arctic Cisco", "Ringed Seal", "Beluga", "Reindeer"],
        
        images: {
            main: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Yenisei_River_at_Kyzyl.jpg/800px-Yenisei_River_at_Kyzyl.jpg",
            gallery: []
        },
        
        facts: [
            "Fifth longest river system in the world",
            "Divides Western and Eastern Siberia",
            "Sayano-Shushenskaya is Russia's largest power plant",
            "Frozen for 5+ months each year",
            "Kyzyl claims to be the exact center of Asia"
        ],
        
        lastUpdated: "2024"
    },

    // ========================================
    // #6 - YELLOW RIVER (HUANG HE)
    // ========================================
    {
        id: 6,
        name: "Yellow River",
        alternateNames: ["Huang He", "黄河", "Mother River of China"],
        length: 5464,
        lengthMiles: 3395,
        rank: 6,
        
        countries: ["China"],
        continent: "Asia",
        regions: ["North China", "Loess Plateau", "Inner Mongolia"],
        
        source: {
            name: "Bayan Har Mountains, Qinghai",
            coordinates: [34.4833, 96.5000],
            elevation: 4500,
            description: "High plateau springs in Qinghai Province"
        },
        mouth: {
            name: "Bohai Sea",
            coordinates: [37.7833, 119.1667],
            elevation: 0,
            description: "Shandong Province delta"
        },
        
        course: [
            [34.4833, 96.5000],   // Source
            [35.0000, 100.0000],  // Upper Yellow River
            [36.0000, 103.8000],  // Lanzhou
            [40.8000, 111.6500],  // Baotou loop
            [38.0000, 110.5000],  // Great Bend south
            [35.5000, 110.0000],  // Loess Plateau
            [34.8000, 113.6500],  // Zhengzhou
            [36.0000, 116.5000],  // Lower Yellow River
            [37.7833, 119.1667]   // Bohai Sea
        ],
        
        basin: {
            area: 752000,
            areaSqMi: 290000,
            countries: 1,
            population: 107000000
        },
        
        discharge: {
            average: 2571,
            unit: "m³/s",
            max: 10000,
            min: 0
        },
        
        tributaries: [
            {
                name: "Wei River",
                length: 818,
                meetingPoint: [34.5000, 110.2000],
                direction: "west",
                arrowDirection: "in",
                country: "China"
            },
            {
                name: "Fen River",
                length: 716,
                meetingPoint: [35.6000, 110.4000],
                direction: "east",
                arrowDirection: "in",
                country: "China"
            },
            {
                name: "Tao River",
                length: 673,
                meetingPoint: [35.9000, 103.3000],
                direction: "south",
                arrowDirection: "in",
                country: "China"
            },
            {
                name: "Beiluo River",
                length: 680,
                meetingPoint: [34.8000, 110.0000],
                direction: "north",
                arrowDirection: "in",
                country: "China"
            },
            {
                name: "Jing River",
                length: 455,
                meetingPoint: [34.4000, 108.8000],
                direction: "north",
                arrowDirection: "in",
                country: "China"
            }
        ],
        
        distributaries: [
            {
                name: "Northern Channel",
                length: 50,
                startPoint: [37.7000, 118.8000],
                direction: "north",
                arrowDirection: "out",
                destination: "Bohai Sea"
            },
            {
                name: "Main Channel",
                length: 45,
                startPoint: [37.7000, 118.8000],
                direction: "east",
                arrowDirection: "out",
                destination: "Bohai Sea"
            }
        ],
        
        majorCities: [
            { name: "Lanzhou", coordinates: [36.0611, 103.8343], population: 4000000 },
            { name: "Zhengzhou", coordinates: [34.7472, 113.6249], population: 12600000 },
            { name: "Jinan", coordinates: [36.6512, 117.1201], population: 9000000 },
            { name: "Baotou", coordinates: [40.6571, 109.8400], population: 3000000 },
            { name: "Kaifeng", coordinates: [34.7971, 114.3073], population: 5200000 }
        ],
        
        features: [
            { name: "Loess Plateau", type: "plateau", coordinates: [36.0000, 109.0000] },
            { name: "Hukou Waterfall", type: "waterfall", coordinates: [36.1500, 110.4500] },
            { name: "Xiaolangdi Dam", type: "dam", coordinates: [34.9200, 112.3600] },
            { name: "Great Bend", type: "bend", coordinates: [40.0000, 110.0000] }
        ],
        
        type: "Perennial (with dry periods)",
        flowDirection: "West to East (with Great Bend)",
        gradient: "Variable",
        waterColor: "Yellow (massive sediment)",
        
        significance: {
            ecological: "Loess deposits create unique ecosystem; wetland bird habitat; threatened by pollution",
            economic: "Irrigates 15% of China's farmland; major industrial corridor; water scarcity issues",
            cultural: "Cradle of Chinese civilization; 'Mother River'; source of Chinese identity",
            historical: "Dynasties rose and fell with floods; 1931 flood killed 4 million; frequent course changes"
        },
        
        annualFlood: "July to October",
        majorDams: ["Xiaolangdi Dam", "Sanmenxia Dam", "Longyangxia Dam", "Liujiaxia Dam"],
        wildlife: ["Chinese Sturgeon", "Soft-shell Turtle", "Yellow River Carp", "White Crane"],
        
        images: {
            main: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Yellow_River_Hukou_Waterfall.jpg/800px-Yellow_River_Hukou_Waterfall.jpg",
            gallery: []
        },
        
        facts: [
            "Called 'Yellow' due to massive loess silt content",
            "Carries 1.6 billion tons of sediment annually",
            "Has changed its mouth location 26 times in recorded history",
            "Known as 'China's Sorrow' due to devastating floods",
            "Dried up completely in 1997 for 226 days"
        ],
        
        lastUpdated: "2024"
    },

    // ========================================
    // #7 - OB RIVER
    // ========================================
    {
        id: 7,
        name: "Ob River",
        alternateNames: ["Обь", "Ob-Irtysh"],
        length: 5410,
        lengthMiles: 3362,
        rank: 7,
        
        countries: ["Russia", "Kazakhstan", "China", "Mongolia"],
        continent: "Asia",
        regions: ["Western Siberia", "Central Asia"],
        
        source: {
            name: "Confluence of Biya and Katun Rivers",
            coordinates: [52.4300, 84.9800],
            elevation: 160,
            description: "Near Biysk, Altai Krai"
        },
        mouth: {
            name: "Gulf of Ob (Kara Sea)",
            coordinates: [66.7500, 69.5000],
            elevation: 0,
            description: "800 km long estuary into Arctic Ocean"
        },
        
        course: [
            [52.4300, 84.9800],   // Source
            [53.3500, 83.7600],   // Barnaul
            [55.0300, 82.9200],   // Novosibirsk
            [56.5000, 78.0000],   // Central Ob
            [61.2500, 73.4200],   // Khanty-Mansiysk
            [63.0000, 72.0000],   // Lower Ob
            [66.5300, 66.6000],   // Salekhard
            [66.7500, 69.5000]    // Gulf of Ob
        ],
        
        basin: {
            area: 2990000,
            areaSqMi: 1154000,
            countries: 4,
            population: 30000000
        },
        
        discharge: {
            average: 12800,
            unit: "m³/s",
            max: 43000,
            min: 1500
        },
        
        tributaries: [
            {
                name: "Irtysh River",
                length: 4248,
                meetingPoint: [61.0800, 68.8000],
                direction: "south",
                arrowDirection: "in",
                country: "Russia/Kazakhstan"
            },
            {
                name: "Tom River",
                length: 827,
                meetingPoint: [56.5000, 84.9000],
                direction: "east",
                arrowDirection: "in",
                country: "Russia"
            },
            {
                name: "Chulym River",
                length: 1799,
                meetingPoint: [57.0000, 83.0000],
                direction: "east",
                arrowDirection: "in",
                country: "Russia"
            },
            {
                name: "Ket River",
                length: 1621,
                meetingPoint: [58.7000, 81.5000],
                direction: "east",
                arrowDirection: "in",
                country: "Russia"
            },
            {
                name: "Vasyugan River",
                length: 1082,
                meetingPoint: [59.0000, 76.5000],
                direction: "south",
                arrowDirection: "in",
                country: "Russia"
            }
        ],
        
        distributaries: [
            {
                name: "Nadym Ob",
                length: 100,
                startPoint: [66.5000, 69.0000],
                direction: "north",
                arrowDirection: "out",
                destination: "Gulf of Ob"
            },
            {
                name: "Khalmer-Sedye Channel",
                length: 80,
                startPoint: [66.5000, 70.0000],
                direction: "northeast",
                arrowDirection: "out",
                destination: "Kara Sea"
            }
        ],
        
        majorCities: [
            { name: "Novosibirsk", coordinates: [55.0084, 82.9357], population: 1600000 },
            { name: "Barnaul", coordinates: [53.3548, 83.7698], population: 630000 },
            { name: "Surgut", coordinates: [61.2500, 73.4167], population: 380000 },
            { name: "Nizhnevartovsk", coordinates: [60.9344, 76.5531], population: 280000 },
            { name: "Salekhard", coordinates: [66.5300, 66.6000], population: 50000 }
        ],
        
        features: [
            { name: "Novosibirsk Reservoir", type: "reservoir", coordinates: [54.6000, 82.5000] },
            { name: "Gulf of Ob", type: "gulf", coordinates: [69.0000, 73.0000] },
            { name: "Vasyugan Swamp", type: "wetland", coordinates: [57.5000, 77.0000] },
            { name: "Ob Plateau", type: "plateau", coordinates: [55.0000, 75.0000] }
        ],
        
        type: "Perennial",
        flowDirection: "South to North",
        gradient: "Very Low",
        waterColor: "Brown",
        
        significance: {
            ecological: "Vasyugan Swamp is world's largest; Arctic fish migration; peatland carbon storage",
            economic: "Major oil and gas transport; Novosibirsk industrial hub; timber floating",
            cultural: "Khanty and Mansi indigenous peoples; Russian frontier; Siberian identity",
            historical: "Russian conquest of Siberia; exile destination; Soviet industrialization"
        },
        
        annualFlood: "May to June",
        majorDams: ["Novosibirsk Dam"],
        wildlife: ["Siberian Sturgeon", "Sterlet", "Nelma", "Muksun", "Siberian Crane"],
        
        images: {
            main: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Ob_River_Gorny_Altai.jpg/800px-Ob_River_Gorny_Altai.jpg",
            gallery: []
        },
        
        facts: [
            "With Irtysh, forms seventh-longest river system (5,410 km)",
            "Gulf of Ob is world's longest estuary (800 km)",
            "Basin contains massive oil and gas reserves",
            "Frozen 6 months per year",
            "Drains the world's largest swamp (Vasyugan)"
        ],
        
        lastUpdated: "2024"
    },

    // ========================================
    // #8 - PARANÁ RIVER
    // ========================================
    {
        id: 8,
        name: "Paraná River",
        alternateNames: ["Rio Paraná", "Paranã"],
        length: 4880,
        lengthMiles: 3032,
        rank: 8,
        
        countries: ["Brazil", "Paraguay", "Argentina"],
        continent: "South America",
        regions: ["La Plata Basin", "South America"],
        
        source: {
            name: "Confluence of Paranaíba and Grande Rivers",
            coordinates: [-20.0833, -51.0333],
            elevation: 446,
            description: "Border of São Paulo, Minas Gerais, and Mato Grosso do Sul"
        },
        mouth: {
            name: "Río de la Plata",
            coordinates: [-34.0000, -58.4000],
            elevation: 0,
            description: "Joins with Uruguay River to form Río de la Plata"
        },
        
        course: [
            [-20.0833, -51.0333],  // Source
            [-22.5000, -53.0000],  // Upper Paraná
            [-24.0500, -54.5900],  // Itaipu Dam area
            [-25.5000, -54.6000],  // Triple Frontier
            [-27.4000, -58.8000],  // Corrientes
            [-30.0000, -59.5000],  // Middle Paraná
            [-32.0000, -60.6000],  // Rosario area
            [-34.0000, -58.4000]   // Río de la Plata
        ],
        
        basin: {
            area: 2582672,
            areaSqMi: 997175,
            countries: 4,
            population: 100000000
        },
        
        discharge: {
            average: 17290,
            unit: "m³/s",
            max: 65000,
            min: 6000
        },
        
        tributaries: [
            {
                name: "Paraguay River",
                length: 2549,
                meetingPoint: [-27.2833, -58.6333],
                direction: "north",
                arrowDirection: "in",
                country: "Paraguay/Argentina"
            },
            {
                name: "Iguazu River",
                length: 1320,
                meetingPoint: [-25.5833, -54.5833],
                direction: "east",
                arrowDirection: "in",
                country: "Brazil/Argentina"
            },
            {
                name: "Tietê River",
                length: 1136,
                meetingPoint: [-22.5200, -51.4000],
                direction: "east",
                arrowDirection: "in",
                country: "Brazil"
            },
            {
                name: "Paranapanema River",
                length: 929,
                meetingPoint: [-22.8000, -52.9000],
                direction: "east",
                arrowDirection: "in",
                country: "Brazil"
            },
            {
                name: "Salado River",
                length: 1500,
                meetingPoint: [-31.6500, -60.7000],
                direction: "west",
                arrowDirection: "in",
                country: "Argentina"
            }
        ],
        
        distributaries: [
            {
                name: "Paraná Guazú",
                length: 120,
                startPoint: [-33.9000, -58.6000],
                direction: "southeast",
                arrowDirection: "out",
                destination: "Río de la Plata"
            },
            {
                name: "Paraná de las Palmas",
                length: 110,
                startPoint: [-33.9000, -58.8000],
                direction: "south",
                arrowDirection: "out",
                destination: "Río de la Plata"
            },
            {
                name: "Paraná Bravo",
                length: 85,
                startPoint: [-34.0000, -58.5000],
                direction: "east",
                arrowDirection: "out",
                destination: "Río de la Plata"
            }
        ],
        
        majorCities: [
            { name: "Buenos Aires", coordinates: [-34.6037, -58.3816], population: 15000000 },
            { name: "Rosario", coordinates: [-32.9442, -60.6505], population: 1300000 },
            { name: "Asunción", coordinates: [-25.2637, -57.5759], population: 2500000 },
            { name: "Corrientes", coordinates: [-27.4806, -58.8341], population: 350000 },
            { name: "Santa Fe", coordinates: [-31.6107, -60.6973], population: 530000 }
        ],
        
        features: [
            { name: "Itaipu Dam", type: "dam", coordinates: [-25.4083, -54.5886] },
            { name: "Iguazu Falls", type: "waterfall", coordinates: [-25.6953, -54.4367] },
            { name: "Paraná Delta", type: "delta", coordinates: [-34.1500, -58.5000] },
            { name: "Yacyretá Dam", type: "dam", coordinates: [-27.4833, -56.7167] }
        ],
        
        type: "Perennial",
        flowDirection: "North to South",
        gradient: "Variable",
        waterColor: "Brown",
        
        significance: {
            ecological: "Atlantic Forest remnants; wetland ecosystems; migratory fish; Paraná Delta biodiversity",
            economic: "Itaipu produces 75% of Paraguay's electricity; major grain export route; fishing industry",
            cultural: "Guaraní indigenous heritage; colonial history; tango and folklore",
            historical: "Spanish colonization; Jesuit missions; War of Triple Alliance; modern hydropower"
        },
        
        annualFlood: "February to April",
        majorDams: ["Itaipu Dam", "Yacyretá Dam", "Salto Grande Dam"],
        wildlife: ["Dorado", "Surubí", "Capybara", "Yacaré", "River Otter"],
        
        images: {
            main: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Foz_de_Iguazu_27_02_2007_09.jpg/800px-Foz_de_Iguazu_27_02_2007_09.jpg",
            gallery: []
        },
        
        facts: [
            "Itaipu Dam was world's largest until Three Gorges",
            "The name means 'like the sea' in Guaraní",
            "Iguazu Falls is one of the world's largest waterfall systems",
            "Forms natural borders between three countries",
            "Second-largest river system in South America"
        ],
        
        lastUpdated: "2024"
    },

    // ========================================
    // #9 - CONGO RIVER
    // ========================================
    {
        id: 9,
        name: "Congo River",
        alternateNames: ["Zaire River", "Fleuve Congo", "Nzadi"],
        length: 4700,
        lengthMiles: 2920,
        rank: 9,
        
        countries: ["DR Congo", "Republic of Congo", "Central African Republic", "Angola", "Zambia", "Tanzania", "Cameroon", "Rwanda", "Burundi"],
        continent: "Africa",
        regions: ["Central Africa", "Congo Basin"],
        
        source: {
            name: "Chambeshi River headwaters",
            coordinates: [-9.6333, 29.7833],
            elevation: 1760,
            description: "Mweru-Luapula highlands in Zambia"
        },
        mouth: {
            name: "Atlantic Ocean",
            coordinates: [-6.0667, 12.4333],
            elevation: 0,
            description: "Near Banana, DR Congo"
        },
        
        course: [
            [-9.6333, 29.7833],   // Source
            [-6.0000, 28.0000],   // Lubumbashi area
            [-4.0000, 22.0000],   // Kisangani
            [0.5200, 25.1900],    // Near equator crossing
            [-0.1000, 18.3000],   // Mbandaka
            [-4.3000, 15.3100],   // Kinshasa/Brazzaville
            [-5.5000, 13.5000],   // Matadi area
            [-6.0667, 12.4333]    // Atlantic
        ],
        
        basin: {
            area: 4014500,
            areaSqMi: 1550000,
            countries: 9,
            population: 90000000
        },
        
        discharge: {
            average: 41000,
            unit: "m³/s",
            max: 80000,
            min: 23000
        },
        
        tributaries: [
            {
                name: "Ubangi River",
                length: 2272,
                meetingPoint: [0.0500, 17.7000],
                direction: "north",
                arrowDirection: "in",
                country: "CAR/Congo"
            },
            {
                name: "Kasai River",
                length: 2153,
                meetingPoint: [-3.3000, 16.5000],
                direction: "south",
                arrowDirection: "in",
                country: "DR Congo/Angola"
            },
            {
                name: "Sangha River",
                length: 1400,
                meetingPoint: [1.2000, 17.0000],
                direction: "north",
                arrowDirection: "in",
                country: "Cameroon/CAR/Congo"
            },
            {
                name: "Lomami River",
                length: 1500,
                meetingPoint: [0.3000, 24.2000],
                direction: "southeast",
                arrowDirection: "in",
                country: "DR Congo"
            },
            {
                name: "Lulonga River",
                length: 980,
                meetingPoint: [-0.1000, 18.5000],
                direction: "south",
                arrowDirection: "in",
                country: "DR Congo"
            }
        ],
        
        distributaries: [
            {
                name: "Main Channel",
                length: 30,
                startPoint: [-6.0000, 12.6000],
                direction: "west",
                arrowDirection: "out",
                destination: "Atlantic Ocean"
            }
        ],
        
        majorCities: [
            { name: "Kinshasa", coordinates: [-4.4419, 15.2663], population: 17000000 },
            { name: "Brazzaville", coordinates: [-4.2634, 15.2429], population: 2400000 },
            { name: "Kisangani", coordinates: [0.5200, 25.1900], population: 1600000 },
            { name: "Mbandaka", coordinates: [0.0478, 18.2603], population: 480000 },
            { name: "Matadi", coordinates: [-5.8167, 13.4500], population: 350000 }
        ],
        
        features: [
            { name: "Livingstone Falls", type: "waterfall", coordinates: [-5.5000, 14.0000] },
            { name: "Boyoma Falls", type: "waterfall", coordinates: [0.5000, 25.2000] },
            { name: "Pool Malebo", type: "lake", coordinates: [-4.3000, 15.3000] },
            { name: "Inga Dam", type: "dam", coordinates: [-5.5186, 13.5972] }
        ],
        
        type: "Perennial",
        flowDirection: "North then West/Southwest",
        gradient: "Variable with major cataracts",
        waterColor: "Dark Brown/Black",
        
        significance: {
            ecological: "Second-largest rainforest; 700+ fish species; endemic species; Congo Basin carbon sink",
            economic: "Vast hydropower potential (Inga); mining transport; forest products",
            cultural: "Hundreds of ethnic groups; rich oral traditions; colonial trauma",
            historical: "Belgian colonial exploitation; Joseph Conrad's 'Heart of Darkness'; independence movements"
        },
        
        annualFlood: "October to December",
        majorDams: ["Inga I", "Inga II", "Grand Inga (proposed)"],
        wildlife: ["Congo River Dolphin", "Goliath Tigerfish", "Bonobo", "Forest Elephant", "Okapi"],
        
        images: {
            main: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Congo_river_at_matadi.jpg/800px-Congo_river_at_matadi.jpg",
            gallery: []
        },
        
        facts: [
            "Second-largest river by discharge after Amazon",
            "Only major river to cross the equator twice",
            "Contains over 700 fish species",
            "Grand Inga could be world's largest hydroelectric project",
            "Deepest river in the world (up to 220m)"
        ],
        
        lastUpdated: "2024"
    },

    // ========================================
    // #10 - AMUR RIVER
    // ========================================
    {
        id: 10,
        name: "Amur River",
        alternateNames: ["Heilong Jiang", "黑龙江", "Хэйлунцзян"],
        length: 4444,
        lengthMiles: 2761,
        rank: 10,
        
        countries: ["Russia", "China", "Mongolia"],
        continent: "Asia",
        regions: ["East Asia", "Russian Far East", "Manchuria"],
        
        source: {
            name: "Confluence of Shilka and Argun Rivers",
            coordinates: [53.3333, 121.5000],
            elevation: 304,
            description: "Near Pokrovka, Russia"
        },
        mouth: {
            name: "Sea of Okhotsk (Pacific Ocean)",
            coordinates: [52.9333, 141.1333],
            elevation: 0,
            description: "Amur Liman strait"
        },
        
        course: [
            [53.3333, 121.5000],  // Source
            [50.2500, 127.5500],  // Blagoveshchensk
            [48.5000, 135.0000],  // Khabarovsk area
            [48.4800, 134.9300],  // Khabarovsk
            [51.0000, 138.0000],  // Lower Amur
            [52.5000, 140.5000],  // Near mouth
            [52.9333, 141.1333]   // Sea of Okhotsk
        ],
        
        basin: {
            area: 1855000,
            areaSqMi: 716200,
            countries: 3,
            population: 75000000
        },
        
        discharge: {
            average: 11400,
            unit: "m³/s",
            max: 40000,
            min: 700
        },
        
        tributaries: [
            {
                name: "Songhua River",
                length: 1927,
                meetingPoint: [47.6500, 132.5000],
                direction: "south",
                arrowDirection: "in",
                country: "China"
            },
            {
                name: "Ussuri River",
                length: 897,
                meetingPoint: [48.2800, 134.2300],
                direction: "south",
                arrowDirection: "in",
                country: "Russia/China"
            },
            {
                name: "Zeya River",
                length: 1242,
                meetingPoint: [50.2500, 127.5500],
                direction: "north",
                arrowDirection: "in",
                country: "Russia"
            },
            {
                name: "Bureya River",
                length: 716,
                meetingPoint: [49.5000, 129.5000],
                direction: "north",
                arrowDirection: "in",
                country: "Russia"
            },
            {
                name: "Argun River",
                length: 1620,
                meetingPoint: [53.3200, 121.4700],
                direction: "west",
                arrowDirection: "in",
                country: "China/Russia"
            }
        ],
        
        distributaries: [
            {
                name: "Main Channel",
                length: 50,
                startPoint: [52.8000, 140.8000],
                direction: "east",
                arrowDirection: "out",
                destination: "Amur Liman"
            },
            {
                name: "Northern Channel",
                length: 40,
                startPoint: [52.9000, 140.9000],
                direction: "northeast",
                arrowDirection: "out",
                destination: "Sea of Okhotsk"
            }
        ],
        
        majorCities: [
            { name: "Harbin", coordinates: [45.8038, 126.5350], population: 10000000 },
            { name: "Khabarovsk", coordinates: [48.4827, 135.0837], population: 620000 },
            { name: "Blagoveshchensk", coordinates: [50.2785, 127.5272], population: 230000 },
            { name: "Jiamusi", coordinates: [46.8023, 130.3610], population: 2500000 },
            { name: "Komsomolsk-on-Amur", coordinates: [50.5500, 137.0070], population: 250000 }
        ],
        
        features: [
            { name: "Zeya Dam", type: "dam", coordinates: [53.7400, 127.2700] },
            { name: "Lake Khanka", type: "lake", coordinates: [44.9500, 132.4000] },
            { name: "Lesser Khingan Range", type: "mountain", coordinates: [49.0000, 131.0000] },
            { name: "Amur Liman", type: "estuary", coordinates: [53.0000, 141.0000] }
        ],
        
        type: "Perennial",
        flowDirection: "West to East",
        gradient: "Low",
        waterColor: "Gray-Brown",
        
        significance: {
            ecological: "Siberian tiger habitat; major wetlands; Kaluga sturgeon; migratory birds",
            economic: "Border trade; fishing industry; agriculture; timber transport",
            cultural: "Indigenous Nanai and Ulch peoples; border between civilizations",
            historical: "Treaty of Aigun (1858); Sino-Soviet border conflicts; ongoing territorial importance"
        },
        
        annualFlood: "July to September (monsoon)",
        majorDams: ["Zeya Dam", "Bureya Dam"],
        wildlife: ["Kaluga Sturgeon", "Siberian Tiger", "Red-crowned Crane", "Amur Leopard", "Mandarin Duck"],
        
        images: {
            main: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Amur_River_-_Russia.jpg/800px-Amur_River_-_Russia.jpg",
            gallery: []
        },
        
        facts: [
            "Forms much of the Russia-China border",
            "Name means 'Black Dragon River' in Chinese",
            "Home to endangered Kaluga (world's largest freshwater fish)",
            "One of few rivers not heavily dammed",
            "2013 floods displaced 100,000 people"
        ],
        
        lastUpdated: "2024"
    }

];

// ========================================
// EXPORT DATA
// ========================================
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { riversData };
}
