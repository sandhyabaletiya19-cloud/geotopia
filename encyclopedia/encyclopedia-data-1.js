/**
 * GeoVerse Encyclopedia - Country Data File 1
 * Contains: South Asia (8) + Iran (1) = 9 Countries
 * Version: 2.0 - Clean Data
 */

const CountriesData1 = [
    // 1. AFGHANISTAN
    {
        id: "AFG",
        name: "Afghanistan",
        officialName: "Islamic Emirate of Afghanistan",
        flag: "https://flagcdn.com/w320/af.png",
        
        images: {
            hero: "https://images.unsplash.com/photo-1565016228622-cb3892fe8e02?w=1920&q=80",
            landscape: "https://images.unsplash.com/photo-1558862107-d49ef2a04d72?w=1920&q=80",
            city: "https://images.unsplash.com/photo-1566873535350-a3f5d4a804b7?w=1920&q=80"
        },

        basic: {
            capital: "Kabul",
            continent: "Asia",
            region: "South Asia",
            subregion: "Southern Asia",
            population: 42239854,
            area: 652230,
            populationDensity: 65,
            independence: "1919",
            callingCode: "+93",
            tld: ".af",
            drivingSide: "Right",
            electricity: "220V, 50Hz"
        },

        location: {
            coordinates: [33.9391, 67.7100],
            timezone: "UTC+4:30 (AFT)",
            neighbors: ["Pakistan", "Iran", "Turkmenistan", "Uzbekistan", "Tajikistan", "China"],
            borders: 5987,
            hemispheres: ["Northern", "Eastern"]
        },

        political: {
            government: "Islamic Emirate (Taliban)",
            headOfState: "Supreme Leader Hibatullah Akhundzada",
            headOfGovernment: "Prime Minister Hasan Akhund",
            legislature: "None (Taliban Rule)",
            legalSystem: "Islamic Law (Sharia)",
            states: 34,
            provinces: 34,
            largestCity: "Kabul",
            organizations: ["UN", "OIC", "ECO", "SAARC"]
        },

        economy: {
            gdp: "$14.58 Billion",
            gdpPPP: "$81 Billion",
            gdpPerCapita: "$364",
            gdpRank: "#116",
            gdpGrowth: "-6.2%",
            currency: "Afghan Afghani",
            currencyCode: "AFN",
            currencySymbol: "؋",
            inflation: "5.6%",
            unemployment: "11.2%",
            majorSectors: ["Agriculture (23%)", "Industry (21%)", "Services (56%)"],
            industries: ["Textiles", "Soap", "Furniture", "Shoes", "Fertilizer", "Cement", "Handwoven Carpets"],
            exports: ["Opium", "Fruits & Nuts", "Carpets", "Wool", "Cotton", "Precious Stones"],
            imports: ["Machinery", "Food", "Textiles", "Petroleum Products"]
        },

        geography: {
            climate: "Arid to Semi-arid; Cold Winters, Hot Summers",
            avgTemperature: "12.6°C",
            annualRainfall: "327 mm",
            highestPoint: "Noshaq (7,492 m)",
            lowestPoint: "Amu Darya (258 m)",
            coastline: "0 km (Landlocked)",
            forestCover: "2.1%",
            arableLand: "11.8%",
            terrain: "Mostly rugged mountains; plains in north and southwest",
            naturalResources: ["Natural Gas", "Petroleum", "Coal", "Copper", "Chromite", "Talc", "Iron Ore", "Lithium", "Uranium", "Precious Stones"]
        },

        geography_links: {
            rivers: ["Amu Darya", "Helmand River", "Kabul River", "Hari River", "Panj River"],
            mountains: ["Hindu Kush", "Pamir Mountains", "Safed Koh", "Koh-i-Baba", "Spin Ghar"],
            deserts: ["Registan Desert", "Dasht-e Margo", "Dasht-e Khash"],
            forests: ["Eastern Forests", "Nuristan Forests"],
            oceans: []
        },

        culture: {
            officialLanguages: ["Pashto", "Dari"],
            languages: ["Pashto", "Dari", "Uzbek", "Turkmen", "Balochi", "Pashayi", "Nuristani"],
            religions: ["Sunni Islam (85%)", "Shia Islam (15%)"],
            heritageSites: ["Minaret and Archaeological Remains of Jam", "Cultural Landscape and Archaeological Remains of Bamiyan Valley"],
            festivals: ["Nowruz", "Eid al-Fitr", "Eid al-Adha", "Jashn-e-Dehqan"],
            cuisine: ["Kabuli Pulao", "Mantu", "Ashak", "Bolani", "Kebab", "Shorwa"],
            arts: ["Carpet Weaving", "Calligraphy", "Poetry", "Attan Dance", "Rubab Music"],
            sports: ["Buzkashi", "Football", "Cricket", "Wrestling"]
        },

        symbols: {
            bird: "Golden Eagle",
            animal: "Snow Leopard",
            flower: "Tulip",
            tree: "Afghan Pine",
            anthem: "Milli Surood",
            motto: "There is no god but Allah; Muhammad is the messenger of Allah"
        },

        demographics: {
            lifeExpectancy: 64.83,
            literacyRate: "43%",
            urbanPopulation: "26.3%",
            medianAge: 18.4
        },

        history: {
            timeline: [
                { year: "3000 BCE", title: "Ancient History", description: "Early civilizations in the region" },
                { year: "330 BCE", title: "Alexander's Conquest", description: "Alexander the Great conquered the region" },
                { year: "1747", title: "Durrani Empire", description: "Ahmad Shah Durrani founded modern Afghanistan" },
                { year: "1919", title: "Independence", description: "Independence from British influence" },
                { year: "1979-1989", title: "Soviet War", description: "Soviet invasion and occupation" },
                { year: "2001", title: "US Invasion", description: "US-led invasion after 9/11" },
                { year: "2021", title: "Taliban Return", description: "Taliban regained control" }
            ],
            notableFigures: ["Ahmad Shah Durrani", "Amanullah Khan", "Ahmad Shah Massoud", "Abdul Ghaffar Khan"]
        },

        disputes: [
            { name: "Durand Line", description: "Border dispute with Pakistan", type: "Border" }
        ],

        quickFacts: [
            { icon: "mountain", title: "Landlocked", text: "One of 44 landlocked countries" },
            { icon: "gem", title: "Lapis Lazuli", text: "World's primary source of lapis lazuli" },
            { icon: "horse", title: "Buzkashi", text: "National sport involves horses and a goat carcass" },
            { icon: "scroll", title: "Graveyard of Empires", text: "Known for resisting foreign invasions" }
        ]
    },

    // 2. BANGLADESH
    {
        id: "BGD",
        name: "Bangladesh",
        officialName: "People's Republic of Bangladesh",
        flag: "https://flagcdn.com/w320/bd.png",
        
        images: {
            hero: "https://images.unsplash.com/photo-1606567595334-d39972c85dfd?w=1920&q=80",
            landscape: "https://images.unsplash.com/photo-1609859445463-6d67e63a6f35?w=1920&q=80",
            city: "https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?w=1920&q=80"
        },

        basic: {
            capital: "Dhaka",
            continent: "Asia",
            region: "South Asia",
            subregion: "Southern Asia",
            population: 172954319,
            area: 147570,
            populationDensity: 1265,
            independence: "1971",
            callingCode: "+880",
            tld: ".bd",
            drivingSide: "Left",
            electricity: "220V, 50Hz"
        },

        location: {
            coordinates: [23.6850, 90.3563],
            timezone: "UTC+6 (BST)",
            neighbors: ["India", "Myanmar"],
            borders: 4413,
            hemispheres: ["Northern", "Eastern"]
        },

        political: {
            government: "Unitary Parliamentary Republic",
            headOfState: "President Mohammed Shahabuddin",
            headOfGovernment: "Chief Adviser Muhammad Yunus",
            legislature: "Jatiya Sangsad (National Parliament)",
            legalSystem: "Common Law (British influence)",
            states: 8,
            divisions: 8,
            districts: 64,
            largestCity: "Dhaka",
            organizations: ["UN", "Commonwealth", "SAARC", "OIC", "D-8", "WTO", "BIMSTEC"]
        },

        economy: {
            gdp: "$460 Billion",
            gdpPPP: "$1.35 Trillion",
            gdpPerCapita: "$2,688",
            gdpRank: "#35",
            gdpGrowth: "5.8%",
            currency: "Bangladeshi Taka",
            currencyCode: "BDT",
            currencySymbol: "৳",
            inflation: "9.6%",
            unemployment: "5.3%",
            majorSectors: ["Services (53%)", "Industry (33%)", "Agriculture (12%)"],
            industries: ["Garments", "Textiles", "Pharmaceuticals", "Shipbuilding", "Jute", "Leather", "Ceramics"],
            exports: ["Clothing", "Textiles", "Frozen Fish", "Jute", "Leather"],
            imports: ["Refined Petroleum", "Cotton", "Machinery", "Iron", "Plastics"]
        },

        geography: {
            climate: "Tropical Monsoon",
            avgTemperature: "25.1°C",
            annualRainfall: "2,666 mm",
            highestPoint: "Keokradong (1,230 m)",
            lowestPoint: "Bay of Bengal (0 m)",
            coastline: "580 km",
            forestCover: "11%",
            arableLand: "59%",
            terrain: "Flat alluvial plain; hilly in southeast",
            naturalResources: ["Natural Gas", "Arable Land", "Timber", "Coal"]
        },

        geography_links: {
            rivers: ["Ganges (Padma)", "Brahmaputra (Jamuna)", "Meghna", "Surma", "Karnaphuli", "Teesta"],
            mountains: ["Chittagong Hill Tracts", "Keokradong", "Tahjindong"],
            deserts: [],
            forests: ["Sundarbans", "Sylhet Rainforests", "Chittagong Hill Forests", "Madhupur Sal Forest"],
            oceans: ["Bay of Bengal", "Indian Ocean"]
        },

        culture: {
            officialLanguages: ["Bengali"],
            languages: ["Bengali", "Chittagonian", "Sylheti", "Rangpuri"],
            religions: ["Islam (91%)", "Hinduism (8%)", "Buddhism (0.6%)", "Christianity (0.4%)"],
            heritageSites: ["Historic Mosque City of Bagerhat", "Ruins of the Buddhist Vihara at Paharpur", "The Sundarbans"],
            festivals: ["Pohela Boishakh (Bengali New Year)", "Eid al-Fitr", "Durga Puja", "Pohela Falgun", "Eid al-Adha"],
            cuisine: ["Hilsa Fish", "Biryani", "Pitha", "Mishti Doi", "Bhuna Khichuri", "Fuchka"],
            arts: ["Baul Music", "Nakshi Kantha", "Jamdani Weaving", "Bengali Literature", "Rickshaw Art"],
            sports: ["Cricket", "Football", "Kabaddi", "Volleyball", "Field Hockey"]
        },

        symbols: {
            bird: "Oriental Magpie-robin (Doyel)",
            animal: "Royal Bengal Tiger",
            flower: "Water Lily (Shapla)",
            tree: "Mango Tree",
            anthem: "Amar Shonar Bangla",
            motto: "None"
        },

        demographics: {
            lifeExpectancy: 73.53,
            literacyRate: "74.7%",
            urbanPopulation: "39.4%",
            medianAge: 27.9
        },

        history: {
            timeline: [
                { year: "300 BCE", title: "Maurya Empire", description: "Region part of Mauryan Empire" },
                { year: "1204", title: "Muslim Rule", description: "Islamic rulers took control" },
                { year: "1757", title: "British Rule", description: "Battle of Plassey, British control began" },
                { year: "1947", title: "Partition", description: "East Bengal became part of Pakistan" },
                { year: "1971", title: "Liberation War", description: "Bangladesh gained independence from Pakistan" },
                { year: "2021", title: "Golden Jubilee", description: "50 years of independence celebrated" }
            ],
            notableFigures: ["Sheikh Mujibur Rahman", "Rabindranath Tagore", "Kazi Nazrul Islam", "Muhammad Yunus", "Begum Rokeya"]
        },

        disputes: [],

        quickFacts: [
            { icon: "tshirt", title: "Garments", text: "2nd largest garment exporter globally" },
            { icon: "users", title: "Density", text: "One of most densely populated countries (1,265/km²)" },
            { icon: "tree", title: "Sundarbans", text: "World's largest mangrove forest" },
            { icon: "paw", title: "Bengal Tiger", text: "Home to Royal Bengal Tiger" },
            { icon: "water", title: "Rivers", text: "Over 700 rivers flow through the country" }
        ]
    },

    // 3. BHUTAN
    {
        id: "BTN",
        name: "Bhutan",
        officialName: "Kingdom of Bhutan",
        flag: "https://flagcdn.com/w320/bt.png",
        
        images: {
            hero: "https://images.unsplash.com/photo-1553856622-d1b352e9a211?w=1920&q=80",
            landscape: "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=1920&q=80",
            city: "https://images.unsplash.com/photo-1605640840605-14ac1855827b?w=1920&q=80"
        },

        basic: {
            capital: "Thimphu",
            continent: "Asia",
            region: "South Asia",
            subregion: "Southern Asia",
            population: 787941,
            area: 38394,
            populationDensity: 21,
            independence: "1907",
            callingCode: "+975",
            tld: ".bt",
            drivingSide: "Left",
            electricity: "230V, 50Hz"
        },

        location: {
            coordinates: [27.5142, 90.4336],
            timezone: "UTC+6 (BTT)",
            neighbors: ["India", "China"],
            borders: 1136,
            hemispheres: ["Northern", "Eastern"]
        },

        political: {
            government: "Unitary Parliamentary Constitutional Monarchy",
            headOfState: "King Jigme Khesar Namgyel Wangchuck",
            headOfGovernment: "Prime Minister Tshering Tobgay",
            legislature: "Parliament (National Council & National Assembly)",
            legalSystem: "Civil Law based on Buddhist law",
            states: 20,
            dzongkhags: 20,
            largestCity: "Thimphu",
            organizations: ["UN", "SAARC", "BIMSTEC", "NAM"]
        },

        economy: {
            gdp: "$2.77 Billion",
            gdpPPP: "$10.03 Billion",
            gdpPerCapita: "$3,560",
            gdpRank: "#165",
            gdpGrowth: "4.6%",
            currency: "Bhutanese Ngultrum",
            currencyCode: "BTN",
            currencySymbol: "Nu.",
            inflation: "5.6%",
            unemployment: "5.0%",
            majorSectors: ["Services (42%)", "Industry (40%)", "Agriculture (16%)"],
            industries: ["Hydropower", "Cement", "Wood Products", "Processed Fruits", "Alcoholic Beverages", "Calcium Carbide"],
            exports: ["Electricity", "Ferroalloys", "Cement", "Calcium Carbide", "Copper Wire", "Manganese"],
            imports: ["Fuel", "Grain", "Aircraft", "Machinery", "Vehicles", "Fabrics"]
        },

        geography: {
            climate: "Varies: Tropical to Arctic (by altitude)",
            avgTemperature: "15.5°C",
            annualRainfall: "5,000 mm (south) to 1,000 mm (north)",
            highestPoint: "Gangkhar Puensum (7,570 m) - Highest unclimbed mountain",
            lowestPoint: "Drangme Chhu (97 m)",
            coastline: "0 km (Landlocked)",
            forestCover: "72.3%",
            arableLand: "2.6%",
            terrain: "Mostly mountainous with fertile valleys and savanna",
            naturalResources: ["Timber", "Hydropower", "Gypsum", "Calcium Carbonate", "Dolomite", "Coal"]
        },

        geography_links: {
            rivers: ["Drangme Chhu", "Puna Tsang Chhu", "Wang Chhu", "Mo Chhu", "Amo Chhu"],
            mountains: ["Gangkhar Puensum", "Kula Kangri", "Jomolhari", "Jichu Drake", "Masang Gang"],
            deserts: [],
            forests: ["Temperate Forests", "Alpine Meadows", "Subtropical Forests", "Coniferous Forests"],
            oceans: []
        },

        culture: {
            officialLanguages: ["Dzongkha"],
            languages: ["Dzongkha", "Sharchop", "Nepali", "English"],
            religions: ["Vajrayana Buddhism (75%)", "Hinduism (22%)", "Others (3%)"],
            heritageSites: [],
            festivals: ["Tshechu", "Losar (New Year)", "Blessed Rainy Day", "National Day"],
            cuisine: ["Ema Datshi (Chili Cheese)", "Phaksha Paa", "Jasha Maru", "Red Rice", "Momos"],
            arts: ["Thangka Painting", "Wood Carving", "Weaving", "Mask Making", "Paper Making"],
            sports: ["Archery", "Darts (Khuru)", "Digor", "Football"]
        },

        symbols: {
            bird: "Raven",
            animal: "Takin",
            flower: "Blue Poppy",
            tree: "Cypress",
            anthem: "Druk Tsendhen",
            motto: "One Nation, One People"
        },

        demographics: {
            lifeExpectancy: 72.77,
            literacyRate: "66.6%",
            urbanPopulation: "42.3%",
            medianAge: 29.1
        },

        history: {
            timeline: [
                { year: "747", title: "Guru Rinpoche", description: "Buddhism introduced by Guru Rinpoche" },
                { year: "1616", title: "Unification", description: "Zhabdrung Ngawang Namgyal unified Bhutan" },
                { year: "1907", title: "Monarchy", description: "Ugyen Wangchuck became first King" },
                { year: "1971", title: "UN Member", description: "Bhutan joined United Nations" },
                { year: "2008", title: "Democracy", description: "Transition to constitutional monarchy" }
            ],
            notableFigures: ["Zhabdrung Ngawang Namgyal", "Ugyen Wangchuck", "Jigme Dorji Wangchuck", "Jigme Singye Wangchuck"]
        },

        disputes: [
            { name: "Doklam", description: "Tri-junction border dispute with China and India", type: "Border" }
        ],

        quickFacts: [
            { icon: "leaf", title: "Carbon Negative", text: "Only carbon-negative country in the world" },
            { icon: "smile", title: "GNH", text: "Measures Gross National Happiness over GDP" },
            { icon: "mountain", title: "Unclimbed Peak", text: "Gangkhar Puensum - highest unclimbed mountain" },
            { icon: "ban", title: "No Traffic Lights", text: "No traffic lights in entire country" },
            { icon: "tv", title: "Late TV", text: "Television introduced only in 1999" }
        ]
    },

    // 4. INDIA
    {
        id: "IND",
        name: "India",
        officialName: "Republic of India",
        flag: "https://flagcdn.com/w320/in.png",
        
        images: {
            hero: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=1920&q=80",
            landscape: "https://images.unsplash.com/photo-1506461883276-594a12b11cf3?w=1920&q=80",
            city: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=1920&q=80"
        },

        basic: {
            capital: "New Delhi",
            continent: "Asia",
            region: "South Asia",
            subregion: "Southern Asia",
            population: 1428627663,
            area: 3287263,
            populationDensity: 464,
            independence: "1947",
            callingCode: "+91",
            tld: ".in",
            drivingSide: "Left",
            electricity: "230V, 50Hz"
        },

        location: {
            coordinates: [20.5937, 78.9629],
            timezone: "UTC+5:30 (IST)",
            neighbors: ["Pakistan", "China", "Nepal", "Bhutan", "Bangladesh", "Myanmar"],
            borders: 15106,
            hemispheres: ["Northern", "Eastern"]
        },

        political: {
            government: "Federal Parliamentary Democratic Republic",
            headOfState: "President Droupadi Murmu",
            headOfGovernment: "Prime Minister Narendra Modi",
            legislature: "Parliament (Rajya Sabha & Lok Sabha)",
            legalSystem: "Common Law (British influence)",
            states: 28,
            unionTerritories: 8,
            largestCity: "Mumbai",
            organizations: ["UN", "BRICS", "G20", "Commonwealth", "SAARC", "SCO", "WTO", "NAM"]
        },

        economy: {
            gdp: "$3.73 Trillion",
            gdpPPP: "$13.03 Trillion",
            gdpPerCapita: "$2,612",
            gdpRank: "#5",
            gdpGrowth: "7.2%",
            currency: "Indian Rupee",
            currencyCode: "INR",
            currencySymbol: "₹",
            inflation: "5.7%",
            unemployment: "7.7%",
            majorSectors: ["Services (54%)", "Industry (26%)", "Agriculture (17%)"],
            industries: ["IT Services", "Textiles", "Chemicals", "Food Processing", "Steel", "Cement", "Mining", "Petroleum", "Machinery", "Pharmaceuticals", "Automobiles"],
            exports: ["Refined Petroleum", "Diamonds", "Pharmaceuticals", "Jewelry", "IT Services", "Rice", "Chemicals"],
            imports: ["Crude Petroleum", "Gold", "Coal", "Diamonds", "Natural Gas", "Electronics"]
        },

        geography: {
            climate: "Diverse: Tropical to Alpine",
            avgTemperature: "24.0°C",
            annualRainfall: "1,083 mm",
            highestPoint: "Kangchenjunga (8,586 m)",
            lowestPoint: "Kuttanad (-2.2 m)",
            coastline: "7,516 km",
            forestCover: "24.6%",
            arableLand: "52.6%",
            terrain: "Himalayas in north, Deccan Plateau in south, Gangetic Plains, deserts, rainforests",
            naturalResources: ["Coal", "Iron Ore", "Manganese", "Mica", "Bauxite", "Rare Earth Elements", "Titanium Ore", "Chromite", "Natural Gas", "Diamonds", "Petroleum", "Limestone"]
        },

        geography_links: {
            rivers: ["Ganges", "Brahmaputra", "Indus", "Yamuna", "Godavari", "Krishna", "Narmada", "Kaveri", "Mahanadi", "Tapti"],
            mountains: ["Himalayas", "Western Ghats", "Eastern Ghats", "Karakoram", "Aravalli", "Vindhya", "Satpura", "Nilgiri"],
            deserts: ["Thar Desert", "White Rann of Kutch", "Cold Desert (Ladakh)"],
            forests: ["Western Ghats Rainforests", "Northeast Rainforests", "Sundarbans", "Gir Forest", "Nilgiri Biosphere", "Kaziranga"],
            oceans: ["Arabian Sea", "Bay of Bengal", "Indian Ocean"]
        },

        culture: {
            officialLanguages: ["Hindi", "English"],
            languages: ["Hindi", "Bengali", "Telugu", "Marathi", "Tamil", "Urdu", "Gujarati", "Kannada", "Malayalam", "Punjabi", "Odia", "Assamese"],
            religions: ["Hinduism (79.8%)", "Islam (14.2%)", "Christianity (2.3%)", "Sikhism (1.7%)", "Buddhism (0.7%)", "Jainism (0.4%)"],
            heritageSites: ["Taj Mahal", "Qutub Minar", "Ajanta Caves", "Ellora Caves", "Hampi", "Khajuraho", "Konark Sun Temple", "Red Fort", "Jaipur City", "Western Ghats", "Kaziranga National Park"],
            festivals: ["Diwali", "Holi", "Durga Puja", "Eid", "Christmas", "Ganesh Chaturthi", "Onam", "Pongal", "Navratri", "Raksha Bandhan"],
            cuisine: ["Biryani", "Butter Chicken", "Dosa", "Samosa", "Paneer Tikka", "Rogan Josh", "Chole Bhature", "Idli", "Vada Pav", "Pav Bhaji", "Thali"],
            arts: ["Bharatanatyam", "Kathak", "Bollywood", "Classical Music", "Madhubani Painting", "Warli Art", "Yoga", "Carnatic Music"],
            sports: ["Cricket", "Hockey", "Kabaddi", "Badminton", "Football", "Chess", "Wrestling"]
        },

        symbols: {
            bird: "Indian Peacock",
            animal: "Bengal Tiger",
            flower: "Lotus",
            tree: "Indian Banyan",
            anthem: "Jana Gana Mana",
            motto: "Satyameva Jayate (Truth Alone Triumphs)"
        },

        demographics: {
            lifeExpectancy: 70.42,
            literacyRate: "77.7%",
            urbanPopulation: "35.9%",
            medianAge: 28.7
        },

        history: {
            timeline: [
                { year: "2500 BCE", title: "Indus Valley", description: "Indus Valley Civilization flourished" },
                { year: "1500 BCE", title: "Vedic Period", description: "Vedic civilization and Hinduism emerged" },
                { year: "321 BCE", title: "Maurya Empire", description: "First large empire under Chandragupta Maurya" },
                { year: "1526", title: "Mughal Empire", description: "Babur established Mughal rule" },
                { year: "1858", title: "British Raj", description: "Direct British Crown rule began" },
                { year: "1947", title: "Independence", description: "India gained independence; Partition occurred" },
                { year: "1950", title: "Republic", description: "Constitution adopted; India became republic" }
            ],
            notableFigures: ["Mahatma Gandhi", "Jawaharlal Nehru", "B.R. Ambedkar", "Sardar Patel", "Subhas Chandra Bose", "Rani Lakshmibai", "Swami Vivekananda", "APJ Abdul Kalam"]
        },

        disputes: [
            { name: "Kashmir", description: "Disputed territory with Pakistan and China", type: "Territory" },
            { name: "Arunachal Pradesh", description: "Border dispute with China", type: "Border" },
            { name: "Aksai Chin", description: "Occupied by China, claimed by India", type: "Territory" },
            { name: "Siachen Glacier", description: "Disputed with Pakistan", type: "Border" },
            { name: "Sir Creek", description: "Maritime boundary dispute with Pakistan", type: "Maritime" }
        ],

        quickFacts: [
            { icon: "users", title: "Most Populous", text: "World's most populous country (1.4+ billion)" },
            { icon: "landmark", title: "Largest Democracy", text: "World's largest democracy" },
            { icon: "film", title: "Bollywood", text: "Largest film industry by number of films" },
            { icon: "rocket", title: "Space Power", text: "4th country to reach Mars on first attempt" },
            { icon: "om", title: "Birthplace", text: "Origin of Hinduism, Buddhism, Jainism, and Sikhism" },
            { icon: "utensils", title: "Spice Hub", text: "World's largest producer of spices" }
        ]
    },

    // 5. MALDIVES
    {
        id: "MDV",
        name: "Maldives",
        officialName: "Republic of Maldives",
        flag: "https://flagcdn.com/w320/mv.png",
        
        images: {
            hero: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=1920&q=80",
            landscape: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=1920&q=80",
            city: "https://images.unsplash.com/photo-1512100356356-de1b84283e18?w=1920&q=80"
        },

        basic: {
            capital: "Malé",
            continent: "Asia",
            region: "South Asia",
            subregion: "Southern Asia",
            population: 521021,
            area: 298,
            populationDensity: 1802,
            independence: "1965",
            callingCode: "+960",
            tld: ".mv",
            drivingSide: "Left",
            electricity: "230V, 50Hz"
        },

        location: {
            coordinates: [3.2028, 73.2207],
            timezone: "UTC+5 (MVT)",
            neighbors: [],
            borders: 0,
            hemispheres: ["Northern", "Eastern"],
            islandNation: true,
            islands: 1192
        },

        political: {
            government: "Unitary Presidential Republic",
            headOfState: "President Mohamed Muizzu",
            headOfGovernment: "President Mohamed Muizzu",
            legislature: "People's Majlis",
            legalSystem: "Islamic Law (Sharia) and English Common Law",
            states: 21,
            atolls: 26,
            largestCity: "Malé",
            organizations: ["UN", "SAARC", "OIC", "Commonwealth", "NAM"]
        },

        economy: {
            gdp: "$6.19 Billion",
            gdpPPP: "$11.45 Billion",
            gdpPerCapita: "$11,890",
            gdpRank: "#158",
            gdpGrowth: "13.9%",
            currency: "Maldivian Rufiyaa",
            currencyCode: "MVR",
            currencySymbol: "Rf",
            inflation: "5.4%",
            unemployment: "4.1%",
            majorSectors: ["Services (Tourism 28%)", "Industry", "Fisheries"],
            industries: ["Tourism", "Fish Processing", "Shipping", "Boat Building", "Coconut Processing", "Garments", "Woven Mats"],
            exports: ["Fish Products", "Clothing", "Intermediate Goods"],
            imports: ["Petroleum", "Ships", "Food", "Clothing", "Intermediate Goods"]
        },

        geography: {
            climate: "Tropical Monsoon",
            avgTemperature: "28°C",
            annualRainfall: "2,540 mm",
            highestPoint: "Addu Atoll (2.4 m)",
            lowestPoint: "Indian Ocean (0 m)",
            coastline: "644 km",
            forestCover: "3%",
            arableLand: "23%",
            terrain: "Flat coral islands; 99% water",
            naturalResources: ["Fish", "Coral Reefs"]
        },

        geography_links: {
            rivers: [],
            mountains: [],
            deserts: [],
            forests: ["Coastal Vegetation", "Mangroves"],
            oceans: ["Indian Ocean", "Arabian Sea", "Laccadive Sea"]
        },

        culture: {
            officialLanguages: ["Dhivehi"],
            languages: ["Dhivehi", "English"],
            religions: ["Sunni Islam (100%)"],
            heritageSites: [],
            festivals: ["Eid al-Fitr", "Eid al-Adha", "Independence Day", "Republic Day", "National Day"],
            cuisine: ["Mas Huni", "Garudhiya", "Fihunu Mas", "Bis Keemiya", "Boshi Mashuni"],
            arts: ["Bodu Beru (Drumming)", "Dhoni Boat Crafts", "Lacquer Work", "Mat Weaving"],
            sports: ["Football", "Volleyball", "Badminton", "Swimming", "Water Sports"]
        },

        symbols: {
            bird: "White-breasted Waterhen",
            animal: "Yellowfin Tuna",
            flower: "Pink Rose",
            tree: "Coconut Palm",
            anthem: "Gaumii Salaam",
            motto: "In National Unity We Salute Our Nation"
        },

        demographics: {
            lifeExpectancy: 79.85,
            literacyRate: "98.6%",
            urbanPopulation: "40.7%",
            medianAge: 30.6
        },

        history: {
            timeline: [
                { year: "500 BCE", title: "Early Settlers", description: "Settlers from India and Sri Lanka arrived" },
                { year: "1153", title: "Islam", description: "Maldives converted to Islam" },
                { year: "1558", title: "Portuguese", description: "Brief Portuguese occupation" },
                { year: "1887", title: "British Protectorate", description: "Became British protectorate" },
                { year: "1965", title: "Independence", description: "Full independence from Britain" },
                { year: "2008", title: "Democracy", description: "First multi-party elections held" }
            ],
            notableFigures: ["Muhammad Thakurufaanu", "Ibrahim Nasir", "Maumoon Abdul Gayoom", "Mohamed Nasheed"]
        },

        disputes: [],

        quickFacts: [
            { icon: "water", title: "Lowest Country", text: "Lowest country on Earth (avg 1.5m above sea level)" },
            { icon: "flag", title: "Smallest Asian", text: "Asia's smallest country by area and population" },
            { icon: "mosque", title: "100% Muslim", text: "Only country with 100% Muslim population" },
            { icon: "umbrella-beach", title: "Tourism", text: "Tourism contributes 28% of GDP" },
            { icon: "fish", title: "99% Water", text: "99% of the country is water" }
        ]
    },

    // 6. NEPAL
    {
        id: "NPL",
        name: "Nepal",
        officialName: "Federal Democratic Republic of Nepal",
        flag: "https://flagcdn.com/w320/np.png",
        
        images: {
            hero: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=1920&q=80",
            landscape: "https://images.unsplash.com/photo-1585409677983-0f6c41ca96e1?w=1920&q=80",
            city: "https://images.unsplash.com/photo-1558799401-1dcba79f7173?w=1920&q=80"
        },

        basic: {
            capital: "Kathmandu",
            continent: "Asia",
            region: "South Asia",
            subregion: "Southern Asia",
            population: 30896590,
            area: 147516,
            populationDensity: 224,
            independence: "1768 (Unified)",
            callingCode: "+977",
            tld: ".np",
            drivingSide: "Left",
            electricity: "230V, 50Hz"
        },

        location: {
            coordinates: [28.3949, 84.1240],
            timezone: "UTC+5:45 (NPT)",
            neighbors: ["India", "China"],
            borders: 3159,
            hemispheres: ["Northern", "Eastern"]
        },

        political: {
            government: "Federal Parliamentary Republic",
            headOfState: "President Ram Chandra Poudel",
            headOfGovernment: "Prime Minister KP Sharma Oli",
            legislature: "Federal Parliament (National Assembly & House of Representatives)",
            legalSystem: "Common Law and Hindu Legal Concepts",
            states: 7,
            provinces: 7,
            districts: 77,
            largestCity: "Kathmandu",
            organizations: ["UN", "SAARC", "BIMSTEC", "NAM", "WTO"]
        },

        economy: {
            gdp: "$40.83 Billion",
            gdpPPP: "$143.2 Billion",
            gdpPerCapita: "$1,399",
            gdpRank: "#83",
            gdpGrowth: "1.9%",
            currency: "Nepalese Rupee",
            currencyCode: "NPR",
            currencySymbol: "रू",
            inflation: "7.4%",
            unemployment: "11.4%",
            majorSectors: ["Services (52%)", "Agriculture (25%)", "Industry (13%)"],
            industries: ["Tourism", "Carpets", "Textiles", "Rice", "Jute", "Sugar", "Oilseed", "Cigarettes", "Cement"],
            exports: ["Carpets", "Clothing", "Leather Goods", "Jute Goods", "Grain", "Pashmina"],
            imports: ["Petroleum Products", "Machinery", "Gold", "Electrical Goods", "Medicine"]
        },

        geography: {
            climate: "Varies from Tropical to Arctic",
            avgTemperature: "15.3°C",
            annualRainfall: "1,500 mm",
            highestPoint: "Mount Everest (8,848.86 m) - World's Highest",
            lowestPoint: "Kechana Kalan (59 m)",
            coastline: "0 km (Landlocked)",
            forestCover: "45%",
            arableLand: "15.1%",
            terrain: "Terai plains in south, hills in center, Himalayas in north",
            naturalResources: ["Quartz", "Water", "Timber", "Hydropower", "Scenic Beauty", "Small Deposits of Lignite, Copper, Cobalt, Iron Ore"]
        },

        geography_links: {
            rivers: ["Koshi", "Gandaki", "Karnali", "Mahakali", "Bagmati", "Rapti", "Narayani"],
            mountains: ["Mount Everest", "Kangchenjunga", "Lhotse", "Makalu", "Cho Oyu", "Dhaulagiri", "Manaslu", "Annapurna"],
            deserts: [],
            forests: ["Terai Sal Forests", "Hill Forests", "Subtropical Forests", "Alpine Meadows"],
            oceans: []
        },

        culture: {
            officialLanguages: ["Nepali"],
            languages: ["Nepali", "Maithili", "Bhojpuri", "Tharu", "Tamang", "Newari", "Bajjika", "Magar", "Doteli"],
            religions: ["Hinduism (81.3%)", "Buddhism (9%)", "Islam (4.4%)", "Kiratism (3%)", "Christianity (1.4%)"],
            heritageSites: ["Kathmandu Valley", "Sagarmatha National Park", "Chitwan National Park", "Lumbini"],
            festivals: ["Dashain", "Tihar", "Holi", "Teej", "Chhath", "Losar", "Indra Jatra"],
            cuisine: ["Dal Bhat", "Momos", "Sel Roti", "Chatamari", "Yomari", "Gundruk", "Dhido"],
            arts: ["Thangka Painting", "Wood Carving", "Metal Craft", "Newari Architecture", "Folk Music"],
            sports: ["Football", "Cricket", "Volleyball", "Kabaddi", "Dandi Biyo"]
        },

        symbols: {
            bird: "Himalayan Monal (Danphe)",
            animal: "Cow",
            flower: "Rhododendron",
            tree: "None Official",
            anthem: "Sayaun Thunga Phulka",
            motto: "Mother and Motherland are greater than heaven"
        },

        demographics: {
            lifeExpectancy: 71.48,
            literacyRate: "67.9%",
            urbanPopulation: "21.4%",
            medianAge: 25.3
        },

        history: {
            timeline: [
                { year: "563 BCE", title: "Buddha Born", description: "Siddhartha Gautama (Buddha) born in Lumbini" },
                { year: "1768", title: "Unification", description: "Prithvi Narayan Shah unified Nepal" },
                { year: "1846-1951", title: "Rana Rule", description: "Rana oligarchy ruled Nepal" },
                { year: "1951", title: "Democracy", description: "Democracy restored after Rana overthrow" },
                { year: "2008", title: "Republic", description: "Monarchy abolished, Federal Republic declared" },
                { year: "2015", title: "Constitution", description: "New constitution adopted" }
            ],
            notableFigures: ["Prithvi Narayan Shah", "Siddhartha Gautama (Buddha)", "Tenzing Norgay", "Pasang Lhamu Sherpa"]
        },

        disputes: [
            { name: "Kalapani", description: "Tri-junction border dispute with India", type: "Border" },
            { name: "Susta", description: "Border dispute with India", type: "Border" }
        ],

        quickFacts: [
            { icon: "mountain", title: "Everest", text: "Home to 8 of world's 14 highest peaks" },
            { icon: "flag", title: "Unique Flag", text: "Only non-rectangular national flag in the world" },
            { icon: "om", title: "Buddha's Birthplace", text: "Siddhartha Gautama (Buddha) born in Lumbini" },
            { icon: "crown", title: "Never Colonized", text: "Never colonized by any foreign power" },
            { icon: "calendar", title: "Own Calendar", text: "Uses Bikram Sambat calendar (56.7 years ahead)" }
        ]
    },

    // 7. PAKISTAN
    {
        id: "PAK",
        name: "Pakistan",
        officialName: "Islamic Republic of Pakistan",
        flag: "https://flagcdn.com/w320/pk.png",
        
        images: {
            hero: "https://images.unsplash.com/photo-1566873535350-a3f5d4a804b7?w=1920&q=80",
            landscape: "https://images.unsplash.com/photo-1586076156389-6b1d1fab90c0?w=1920&q=80",
            city: "https://images.unsplash.com/photo-1567157577867-05ccb1388e66?w=1920&q=80"
        },

        basic: {
            capital: "Islamabad",
            continent: "Asia",
            region: "South Asia",
            subregion: "Southern Asia",
            population: 240485658,
            area: 881913,
            populationDensity: 287,
            independence: "1947",
            callingCode: "+92",
            tld: ".pk",
            drivingSide: "Left",
            electricity: "230V, 50Hz"
        },

        location: {
            coordinates: [30.3753, 69.3451],
            timezone: "UTC+5 (PKT)",
            neighbors: ["India", "Afghanistan", "Iran", "China"],
            borders: 7257,
            hemispheres: ["Northern", "Eastern"]
        },

        political: {
            government: "Federal Parliamentary Republic",
            headOfState: "President Asif Ali Zardari",
            headOfGovernment: "Prime Minister Shehbaz Sharif",
            legislature: "Parliament (Senate & National Assembly)",
            legalSystem: "Common Law with Islamic Law influence",
            states: 4,
            provinces: 4,
            territories: 2,
            largestCity: "Karachi",
            organizations: ["UN", "OIC", "Commonwealth", "SCO", "SAARC", "D-8", "WTO", "ECO"]
        },

        economy: {
            gdp: "$376 Billion",
            gdpPPP: "$1.51 Trillion",
            gdpPerCapita: "$1,562",
            gdpRank: "#41",
            gdpGrowth: "-0.2%",
            currency: "Pakistani Rupee",
            currencyCode: "PKR",
            currencySymbol: "₨",
            inflation: "29.2%",
            unemployment: "8.5%",
            majorSectors: ["Services (52%)", "Agriculture (22%)", "Industry (19%)"],
            industries: ["Textiles", "Food Processing", "Pharmaceuticals", "Construction", "Steel", "Cement", "Fertilizer"],
            exports: ["Textiles", "Rice", "Leather", "Sports Goods", "Surgical Instruments", "Chemicals"],
            imports: ["Crude Petroleum", "Refined Petroleum", "Natural Gas", "Palm Oil", "Machinery"]
        },

        geography: {
            climate: "Varies from Tropical to Temperate to Arctic (North)",
            avgTemperature: "22.2°C",
            annualRainfall: "494 mm",
            highestPoint: "K2 (8,611 m) - World's 2nd highest",
            lowestPoint: "Indian Ocean (0 m)",
            coastline: "1,046 km",
            forestCover: "4.8%",
            arableLand: "27.6%",
            terrain: "Mountains, plateaus, plains, coastal areas",
            naturalResources: ["Natural Gas", "Petroleum", "Coal", "Iron Ore", "Copper", "Salt", "Limestone", "Chromite"]
        },

        geography_links: {
            rivers: ["Indus River", "Jhelum", "Chenab", "Ravi", "Sutlej", "Beas", "Kabul River"],
            mountains: ["Karakoram", "Himalayas", "Hindu Kush", "K2", "Nanga Parbat", "Gasherbrum", "Broad Peak"],
            deserts: ["Thar Desert", "Cholistan", "Thal Desert", "Kharan Desert"],
            forests: ["Juniper Forests (Ziarat)", "Himalayan Forests", "Mangroves (Indus Delta)"],
            oceans: ["Arabian Sea", "Indian Ocean"]
        },

        culture: {
            officialLanguages: ["Urdu", "English"],
            languages: ["Urdu", "Punjabi", "Sindhi", "Pashto", "Balochi", "Saraiki", "Hindko"],
            religions: ["Islam (96.5% - Sunni 85%, Shia 15%)", "Hinduism (1.9%)", "Christianity (1.6%)"],
            heritageSites: ["Mohenjo-daro", "Taxila", "Lahore Fort & Shalimar Gardens", "Makli Necropolis", "Rohtas Fort", "Buddhist Ruins of Takht-i-Bahi"],
            festivals: ["Eid al-Fitr", "Eid al-Adha", "Independence Day", "Basant", "Urs", "Shab-e-Barat"],
            cuisine: ["Biryani", "Nihari", "Karahi", "Chapli Kebab", "Haleem", "Seekh Kebab", "Paya", "Sajji"],
            arts: ["Qawwali", "Ghazal", "Sufi Music", "Truck Art", "Carpet Weaving", "Phulkari Embroidery"],
            sports: ["Cricket", "Hockey", "Football", "Squash", "Polo", "Kabaddi"]
        },

        symbols: {
            bird: "Chukar Partridge",
            animal: "Markhor",
            flower: "Jasmine",
            tree: "Deodar Cedar",
            anthem: "Qaumi Taranah",
            motto: "Iman, Ittihad, Nazm (Faith, Unity, Discipline)"
        },

        demographics: {
            lifeExpectancy: 67.79,
            literacyRate: "59.1%",
            urbanPopulation: "37.4%",
            medianAge: 22.8
        },

        history: {
            timeline: [
                { year: "2500 BCE", title: "Indus Valley", description: "Mohenjo-daro and Harappa civilizations" },
                { year: "711 CE", title: "Arab Conquest", description: "Muhammad bin Qasim conquered Sindh" },
                { year: "1526", title: "Mughal Empire", description: "Mughal rule began in the region" },
                { year: "1857", title: "British Rule", description: "British Crown took direct control" },
                { year: "1947", title: "Independence", description: "Pakistan created from partition of British India" },
                { year: "1971", title: "Bangladesh", description: "East Pakistan became Bangladesh" },
                { year: "1998", title: "Nuclear Power", description: "Pakistan became nuclear power" }
            ],
            notableFigures: ["Muhammad Ali Jinnah", "Allama Iqbal", "Liaquat Ali Khan", "Benazir Bhutto", "Abdul Sattar Edhi"]
        },

        disputes: [
            { name: "Kashmir", description: "Disputed territory with India", type: "Territory" },
            { name: "Siachen Glacier", description: "Disputed with India", type: "Border" },
            { name: "Sir Creek", description: "Maritime boundary dispute with India", type: "Maritime" }
        ],

        quickFacts: [
            { icon: "mountain", title: "K2", text: "World's second-highest peak (8,611 m)" },
            { icon: "users", title: "Population", text: "5th most populous country in the world" },
            { icon: "atom", title: "Nuclear Power", text: "One of 9 nuclear-armed states" },
            { icon: "road", title: "Karakoram Highway", text: "World's highest paved international road" },
            { icon: "water", title: "Irrigation", text: "World's largest canal-based irrigation system" }
        ]
    },

    // 8. SRI LANKA
    {
        id: "LKA",
        name: "Sri Lanka",
        officialName: "Democratic Socialist Republic of Sri Lanka",
        flag: "https://flagcdn.com/w320/lk.png",
        
        images: {
            hero: "https://images.unsplash.com/photo-1580674285054-bed31e145f59?w=1920&q=80",
            landscape: "https://images.unsplash.com/photo-1546708770-599a215d5753?w=1920&q=80",
            city: "https://images.unsplash.com/photo-1588598198321-9735fd52b74d?w=1920&q=80"
        },

        basic: {
            capital: "Sri Jayawardenepura Kotte (Legislative), Colombo (Commercial)",
            continent: "Asia",
            region: "South Asia",
            subregion: "Southern Asia",
            population: 22037000,
            area: 65610,
            populationDensity: 341,
            independence: "1948",
            callingCode: "+94",
            tld: ".lk",
            drivingSide: "Left",
            electricity: "230V, 50Hz"
        },

        location: {
            coordinates: [7.8731, 80.7718],
            timezone: "UTC+5:30 (SLST)",
            neighbors: [],
            borders: 0,
            hemispheres: ["Northern", "Eastern"],
            islandNation: true
        },

        political: {
            government: "Unitary Semi-Presidential Republic",
            headOfState: "President Anura Kumara Dissanayake",
            headOfGovernment: "President Anura Kumara Dissanayake",
            legislature: "Parliament",
            legalSystem: "Mixed (Roman-Dutch Civil Law, English Common Law, Customary Law)",
            states: 9,
            provinces: 9,
            districts: 25,
            largestCity: "Colombo",
            organizations: ["UN", "Commonwealth", "SAARC", "NAM", "WTO", "BIMSTEC"]
        },

        economy: {
            gdp: "$74.4 Billion",
            gdpPPP: "$305.7 Billion",
            gdpPerCapita: "$3,474",
            gdpRank: "#62",
            gdpGrowth: "-2.3%",
            currency: "Sri Lankan Rupee",
            currencyCode: "LKR",
            currencySymbol: "Rs",
            inflation: "49.7%",
            unemployment: "7.2%",
            majorSectors: ["Services (58%)", "Industry (27%)", "Agriculture (7%)"],
            industries: ["Tea", "Rubber", "Textiles", "Apparel", "Cement", "Petroleum Refining", "Tourism", "Gems"],
            exports: ["Tea", "Textiles/Apparel", "Rubber", "Coconuts", "Gems", "Fish"],
            imports: ["Petroleum", "Textiles", "Machinery", "Transport Equipment", "Building Materials", "Mineral Products"]
        },

        geography: {
            climate: "Tropical Monsoon",
            avgTemperature: "27.5°C",
            annualRainfall: "1,861 mm",
            highestPoint: "Pidurutalagala (2,524 m)",
            lowestPoint: "Indian Ocean (0 m)",
            coastline: "1,340 km",
            forestCover: "29.7%",
            arableLand: "20.7%",
            terrain: "Coastal plains; central highlands",
            naturalResources: ["Limestone", "Graphite", "Mineral Sands", "Gems", "Phosphates", "Clay", "Hydropower", "Fish"]
        },

        geography_links: {
            rivers: ["Mahaweli", "Kelani", "Kalu", "Walawe", "Deduru Oya"],
            mountains: ["Pidurutalagala", "Kirigalpotta", "Adam's Peak", "Namunukula", "Knuckles Range"],
            deserts: [],
            forests: ["Sinharaja Rainforest", "Knuckles Forest Reserve", "Yala National Park", "Wilpattu National Park"],
            oceans: ["Indian Ocean", "Bay of Bengal", "Arabian Sea"]
        },

        culture: {
            officialLanguages: ["Sinhala", "Tamil"],
            languages: ["Sinhala", "Tamil", "English"],
            religions: ["Buddhism (70.2%)", "Hinduism (12.6%)", "Islam (9.7%)", "Christianity (7.4%)"],
            heritageSites: ["Sacred City of Anuradhapura", "Ancient City of Polonnaruwa", "Sacred City of Kandy", "Sigiriya", "Old Town of Galle", "Dambulla Cave Temple", "Sinharaja Forest Reserve", "Central Highlands"],
            festivals: ["Vesak", "Sinhala & Tamil New Year", "Deepavali", "Esala Perahera", "Christmas"],
            cuisine: ["Rice and Curry", "Hoppers", "String Hoppers", "Kottu", "Lamprais", "Fish Ambul Thiyal", "Pol Sambol"],
            arts: ["Kandyan Dancing", "Low Country Dancing", "Mask Making", "Batik", "Wood Carving", "Lacquerwork"],
            sports: ["Cricket", "Volleyball", "Football", "Rugby", "Elle", "Carrom"]
        },

        symbols: {
            bird: "Sri Lanka Junglefowl",
            animal: "Lion (Grampian)",
            flower: "Blue Water Lily",
            tree: "Na Tree (Ironwood)",
            anthem: "Sri Lanka Matha",
            motto: "None Official"
        },

        demographics: {
            lifeExpectancy: 77.39,
            literacyRate: "92.3%",
            urbanPopulation: "18.7%",
            medianAge: 34.1
        },

        history: {
            timeline: [
                { year: "543 BCE", title: "Sinhalese Arrival", description: "Prince Vijaya arrived from India" },
                { year: "250 BCE", title: "Buddhism", description: "Buddhism introduced during Ashoka's reign" },
                { year: "1505", title: "Portuguese", description: "Portuguese colonization began" },
                { year: "1658", title: "Dutch", description: "Dutch took control from Portuguese" },
                { year: "1796", title: "British", description: "British seized control from Dutch" },
                { year: "1948", title: "Independence", description: "Independence from Britain as Ceylon" },
                { year: "1972", title: "Sri Lanka", description: "Renamed from Ceylon to Sri Lanka" },
                { year: "2009", title: "Civil War End", description: "26-year civil war ended" }
            ],
            notableFigures: ["D.S. Senanayake", "S.W.R.D. Bandaranaike", "Sirimavo Bandaranaike", "Mahinda Rajapaksa"]
        },

        disputes: [],

        quickFacts: [
            { icon: "mug-hot", title: "Ceylon Tea", text: "World-famous tea producer since 1867" },
            { icon: "gem", title: "Gem Island", text: "Major producer of sapphires, rubies, and other gems" },
            { icon: "tooth", title: "Tooth Relic", text: "Temple of the Sacred Tooth Relic in Kandy" },
            { icon: "tree", title: "Sri Maha Bodhi", text: "World's oldest documented tree (2,300+ years)" },
            { icon: "female", title: "First Woman PM", text: "World's first female prime minister (1960)" }
        ]
    },

    // 9. IRAN
    {
        id: "IRN",
        name: "Iran",
        officialName: "Islamic Republic of Iran",
        flag: "https://flagcdn.com/w320/ir.png",
        
        images: {
            hero: "https://images.unsplash.com/photo-1565058379802-bbe93b2f703a?w=1920&q=80",
            landscape: "https://images.unsplash.com/photo-1553017141-4f38aca48d7e?w=1920&q=80",
            city: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=1920&q=80"
        },

        basic: {
            capital: "Tehran",
            continent: "Asia",
            region: "Middle East",
            subregion: "Western Asia",
            population: 89172767,
            area: 1648195,
            populationDensity: 52,
            independence: "550 BCE (Persian Empire)",
            callingCode: "+98",
            tld: ".ir",
            drivingSide: "Right",
            electricity: "220V, 50Hz"
        },

        location: {
            coordinates: [32.4279, 53.6880],
            timezone: "UTC+3:30 (IRST)",
            neighbors: ["Turkey", "Iraq", "Armenia", "Azerbaijan", "Turkmenistan", "Afghanistan", "Pakistan"],
            borders: 5894,
            hemispheres: ["Northern", "Eastern"]
        },

        political: {
            government: "Unitary Theocratic Presidential Islamic Republic",
            headOfState: "Supreme Leader Ali Khamenei",
            headOfGovernment: "President Masoud Pezeshkian",
            legislature: "Islamic Consultative Assembly (Majlis)",
            legalSystem: "Islamic Law (Sharia)",
            states: 31,
            provinces: 31,
            largestCity: "Tehran",
            organizations: ["UN", "OPEC", "OIC", "ECO", "NAM", "SCO (Observer)"]
        },

        economy: {
            gdp: "$401 Billion",
            gdpPPP: "$1.59 Trillion",
            gdpPerCapita: "$4,757",
            gdpRank: "#37",
            gdpGrowth: "5.0%",
            currency: "Iranian Rial",
            currencyCode: "IRR",
            currencySymbol: "﷼",
            inflation: "40%",
            unemployment: "9.2%",
            majorSectors: ["Services (54%)", "Industry (35%)", "Agriculture (10%)"],
            industries: ["Petroleum", "Petrochemicals", "Steel", "Textiles", "Cement", "Automotive", "Mining", "Food Processing"],
            exports: ["Crude Petroleum", "Refined Petroleum", "Polymers", "Iron", "Chemicals", "Fruits & Nuts"],
            imports: ["Machinery", "Foodstuffs", "Technical Services", "Chemicals", "Metals"]
        },

        geography: {
            climate: "Mostly Arid, Subtropical along Caspian",
            avgTemperature: "17.5°C",
            annualRainfall: "228 mm",
            highestPoint: "Mount Damavand (5,610 m)",
            lowestPoint: "Caspian Sea (-28 m)",
            coastline: "2,440 km",
            forestCover: "6.8%",
            arableLand: "10.8%",
            terrain: "Rugged mountains, high central basin, deserts",
            naturalResources: ["Petroleum", "Natural Gas", "Coal", "Chromium", "Copper", "Iron Ore", "Lead", "Manganese", "Zinc", "Sulfur"]
        },

        geography_links: {
            rivers: ["Karun River", "Zayanderud", "Sefid Rud", "Aras River", "Atrek River"],
            mountains: ["Zagros Mountains", "Alborz Mountains", "Mount Damavand", "Sabalan", "Dena"],
            deserts: ["Dasht-e Kavir", "Dasht-e Lut"],
            forests: ["Caspian Hyrcanian Forests", "Zagros Oak Forests"],
            oceans: ["Persian Gulf", "Gulf of Oman", "Caspian Sea"]
        },

        culture: {
            officialLanguages: ["Persian (Farsi)"],
            languages: ["Persian", "Azerbaijani", "Kurdish", "Luri", "Gilaki", "Mazandarani", "Arabic", "Balochi"],
            religions: ["Shia Islam (90-95%)", "Sunni Islam (5-10%)", "Others (<1%)"],
            heritageSites: ["Persepolis", "Naqsh-e Jahan Square", "Pasargadae", "Tchogha Zanbil", "Golestan Palace", "Shushtar Historical Hydraulic System", "Tabriz Historic Bazaar", "Meidan Emam", "Armenian Monastic Ensembles"],
            festivals: ["Nowruz (Persian New Year)", "Chaharshanbe Suri", "Yalda Night", "Tirgan", "Mehregan"],
            cuisine: ["Chelo Kebab", "Ghormeh Sabzi", "Tahdig", "Fesenjan", "Zereshk Polo", "Ash Reshteh", "Dizi"],
            arts: ["Persian Calligraphy", "Miniature Painting", "Carpet Weaving", "Persian Poetry", "Traditional Music", "Tilework"],
            sports: ["Football", "Wrestling", "Volleyball", "Weightlifting", "Martial Arts", "Polo"]
        },

        symbols: {
            bird: "Common Nightingale",
            animal: "Asiatic Lion (historical), Persian Leopard",
            flower: "Red Rose",
            tree: "Cypress",
            anthem: "Soroud-e Melli-e Jomhouri-e Eslami-e Iran",
            motto: "Independence, Freedom, Islamic Republic"
        },

        demographics: {
            lifeExpectancy: 77.33,
            literacyRate: "85.5%",
            urbanPopulation: "76.3%",
            medianAge: 32.4
        },

        history: {
            timeline: [
                { year: "550 BCE", title: "Persian Empire", description: "Cyrus the Great founded Achaemenid Empire" },
                { year: "330 BCE", title: "Alexander's Conquest", description: "Alexander the Great conquered Persia" },
                { year: "224 CE", title: "Sasanian Empire", description: "Last pre-Islamic Persian Empire" },
                { year: "651 CE", title: "Islamic Conquest", description: "Arab conquest introduced Islam" },
                { year: "1501", title: "Safavid Dynasty", description: "Shia Islam became state religion" },
                { year: "1925", title: "Pahlavi Dynasty", description: "Reza Shah established modern Iran" },
                { year: "1979", title: "Islamic Revolution", description: "Ayatollah Khomeini established Islamic Republic" }
            ],
            notableFigures: ["Cyrus the Great", "Darius I", "Ferdowsi", "Hafez", "Rumi", "Omar Khayyam", "Avicenna", "Ayatollah Khomeini"]
        },

        disputes: [
            { name: "Persian Gulf Islands", description: "Dispute with UAE over Abu Musa and Tunbs", type: "Territory" }
        ],

        quickFacts: [
            { icon: "oil-can", title: "Oil Reserves", text: "4th largest proven oil reserves globally" },
            { icon: "scroll", title: "Ancient Civilization", text: "One of world's oldest civilizations (7,000+ years)" },
            { icon: "book", title: "Persian Poetry", text: "Birthplace of Rumi, Hafez, and Ferdowsi" },
            { icon: "fire", title: "Nowruz", text: "Persian New Year celebrated by 300M+ people worldwide" },
            { icon: "monument", title: "Persepolis", text: "Ancient capital of Persian Empire (UNESCO site)" }
        ]
    }
];

// Export for Node.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CountriesData1;
}

// Export for Browser
if (typeof window !== 'undefined') {
    window.CountriesData1 = CountriesData1;
}
