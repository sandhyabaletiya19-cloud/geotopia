/**
 * GeoVerse Encyclopedia - Country Data File 2
 * Contains: Southeast Asia (11) + East Asia (5) = 16 Countries
 * Version: 2.0 - Clean Data
 * Special: South Korea includes BTS content
 */

const CountriesData2 = [
    // 1. BRUNEI
    {
        id: "BRN",
        name: "Brunei",
        officialName: "Nation of Brunei, the Abode of Peace",
        flag: "https://flagcdn.com/w320/bn.png",
        
        images: {
            hero: "https://images.unsplash.com/photo-1580913428023-02c695666d61?w=1920&q=80",
            landscape: "https://images.unsplash.com/photo-1591183978963-e4a8bf757991?w=1920&q=80",
            city: "https://images.unsplash.com/photo-1580913428706-c311e67898b3?w=1920&q=80"
        },

        basic: {
            capital: "Bandar Seri Begawan",
            continent: "Asia",
            region: "Southeast Asia",
            subregion: "South-Eastern Asia",
            population: 449002,
            area: 5765,
            populationDensity: 78,
            independence: "1984",
            callingCode: "+673",
            tld: ".bn",
            drivingSide: "Left",
            electricity: "240V, 50Hz"
        },

        location: {
            coordinates: [4.5353, 114.7277],
            timezone: "UTC+8 (BNT)",
            neighbors: ["Malaysia"],
            borders: 266,
            hemispheres: ["Northern", "Eastern"]
        },

        political: {
            government: "Unitary Islamic Absolute Monarchy",
            headOfState: "Sultan Hassanal Bolkiah",
            headOfGovernment: "Sultan Hassanal Bolkiah",
            legislature: "Legislative Council",
            legalSystem: "Mixed (English Common Law and Sharia Law)",
            states: 4,
            districts: 4,
            largestCity: "Bandar Seri Begawan",
            organizations: ["UN", "ASEAN", "Commonwealth", "OIC", "APEC", "WTO"]
        },

        economy: {
            gdp: "$14.01 Billion",
            gdpPPP: "$36.85 Billion",
            gdpPerCapita: "$31,086",
            gdpRank: "#126",
            gdpGrowth: "1.3%",
            currency: "Brunei Dollar",
            currencyCode: "BND",
            currencySymbol: "B$",
            inflation: "0.4%",
            unemployment: "4.9%",
            majorSectors: ["Industry (Oil & Gas 60%)", "Services (37%)", "Agriculture (1%)"],
            industries: ["Petroleum", "Natural Gas", "Petroleum Refining", "Liquefied Natural Gas", "Construction", "Agriculture"],
            exports: ["Crude Petroleum", "Natural Gas", "Refined Petroleum", "Methanol"],
            imports: ["Machinery", "Vehicles", "Iron & Steel", "Food Products", "Chemicals"]
        },

        geography: {
            climate: "Tropical Equatorial",
            avgTemperature: "27.5°C",
            annualRainfall: "2,920 mm",
            highestPoint: "Bukit Pagon (1,850 m)",
            lowestPoint: "South China Sea (0 m)",
            coastline: "161 km",
            forestCover: "72.1%",
            arableLand: "2.5%",
            terrain: "Flat coastal plain; mountains in east; hilly lowlands in west",
            naturalResources: ["Petroleum", "Natural Gas", "Timber"]
        },

        geography_links: {
            rivers: ["Belait River", "Tutong River", "Brunei River", "Temburong River", "Pandaruan River"],
            mountains: ["Bukit Pagon", "Bukit Batu Patam", "Bukit Teraja"],
            deserts: [],
            forests: ["Ulu Temburong National Park", "Tropical Rainforest", "Mangrove Forests"],
            oceans: ["South China Sea", "Brunei Bay"]
        },

        culture: {
            officialLanguages: ["Malay"],
            languages: ["Malay", "English", "Chinese (Hokkien, Mandarin)", "Tamil"],
            religions: ["Islam (78.8%)", "Buddhism (8.7%)", "Christianity (7.8%)", "Others (4.7%)"],
            heritageSites: [],
            festivals: ["Hari Raya Aidilfitri", "Hari Raya Aidiladha", "Sultan's Birthday", "National Day", "Maulidur Rasul"],
            cuisine: ["Ambuyat", "Nasi Katok", "Soto", "Rendang", "Satay", "Kelupis"],
            arts: ["Silver Smithing", "Bronze Casting", "Weaving", "Wood Carving", "Songket"],
            sports: ["Football", "Badminton", "Sepak Takraw", "Golf", "Squash"]
        },

        symbols: {
            bird: "White-bellied Sea Eagle",
            animal: "None Official",
            flower: "Simpor (Dillenia suffruticosa)",
            tree: "None Official",
            anthem: "Allah Peliharakan Sultan",
            motto: "Always in service with God's guidance"
        },

        demographics: {
            lifeExpectancy: 76.18,
            literacyRate: "97.2%",
            urbanPopulation: "78.3%",
            medianAge: 31.1
        },

        history: {
            timeline: [
                { year: "7th Century", title: "Early Kingdom", description: "Early Brunei Kingdom established" },
                { year: "15th Century", title: "Golden Age", description: "Brunei Empire at its peak, controlled Borneo and Philippines" },
                { year: "1888", title: "British Protectorate", description: "Became British protectorate" },
                { year: "1929", title: "Oil Discovery", description: "Oil discovered at Seria" },
                { year: "1984", title: "Independence", description: "Full independence from Britain" }
            ],
            notableFigures: ["Sultan Bolkiah (5th Sultan)", "Sultan Omar Ali Saifuddien III", "Sultan Hassanal Bolkiah"]
        },

        disputes: [
            { name: "South China Sea", description: "Overlapping claims in Spratly Islands", type: "Maritime" }
        ],

        quickFacts: [
            { icon: "crown", title: "Rich Sultan", text: "Sultan is one of the world's wealthiest monarchs" },
            { icon: "gas-pump", title: "Oil Wealth", text: "Oil & gas account for 90% of exports" },
            { icon: "ban", title: "No Alcohol", text: "Sale of alcohol is banned" },
            { icon: "graduation-cap", title: "Free Education", text: "Free education and healthcare for citizens" },
            { icon: "mosque", title: "Omar Ali Mosque", text: "Iconic golden-domed mosque on water" }
        ]
    },

    // 2. CAMBODIA
    {
        id: "KHM",
        name: "Cambodia",
        officialName: "Kingdom of Cambodia",
        flag: "https://flagcdn.com/w320/kh.png",
        
        images: {
            hero: "https://images.unsplash.com/photo-1539650116574-8efeb43e2750?w=1920&q=80",
            landscape: "https://images.unsplash.com/photo-1570366583862-f91883984fde?w=1920&q=80",
            city: "https://images.unsplash.com/photo-1601285133037-4409e0e7f142?w=1920&q=80"
        },

        basic: {
            capital: "Phnom Penh",
            continent: "Asia",
            region: "Southeast Asia",
            subregion: "South-Eastern Asia",
            population: 16944826,
            area: 181035,
            populationDensity: 96,
            independence: "1953",
            callingCode: "+855",
            tld: ".kh",
            drivingSide: "Right",
            electricity: "230V, 50Hz"
        },

        location: {
            coordinates: [12.5657, 104.9910],
            timezone: "UTC+7 (ICT)",
            neighbors: ["Thailand", "Laos", "Vietnam"],
            borders: 2530,
            hemispheres: ["Northern", "Eastern"]
        },

        political: {
            government: "Unitary Parliamentary Constitutional Monarchy",
            headOfState: "King Norodom Sihamoni",
            headOfGovernment: "Prime Minister Hun Manet",
            legislature: "Parliament (Senate & National Assembly)",
            legalSystem: "Civil Law (French influence)",
            states: 25,
            provinces: 25,
            largestCity: "Phnom Penh",
            organizations: ["UN", "ASEAN", "WTO", "NAM", "ADB", "Francophonie"]
        },

        economy: {
            gdp: "$29.96 Billion",
            gdpPPP: "$83.56 Billion",
            gdpPerCapita: "$1,758",
            gdpRank: "#107",
            gdpGrowth: "5.3%",
            currency: "Cambodian Riel",
            currencyCode: "KHR",
            currencySymbol: "៛",
            inflation: "2.2%",
            unemployment: "0.3%",
            majorSectors: ["Services (38%)", "Industry (35%)", "Agriculture (22%)"],
            industries: ["Tourism", "Garments", "Rice Milling", "Fishing", "Wood Products", "Rubber", "Cement", "Gem Mining"],
            exports: ["Clothing", "Rice", "Rubber", "Fish", "Timber", "Footwear"],
            imports: ["Petroleum", "Fabrics", "Vehicles", "Machinery", "Pharmaceuticals"]
        },

        geography: {
            climate: "Tropical Monsoon",
            avgTemperature: "27.5°C",
            annualRainfall: "1,400-4,000 mm",
            highestPoint: "Phnum Aoral (1,810 m)",
            lowestPoint: "Gulf of Thailand (0 m)",
            coastline: "443 km",
            forestCover: "46.3%",
            arableLand: "22.7%",
            terrain: "Mostly low flat plains; mountains in southwest and north",
            naturalResources: ["Oil", "Gas", "Timber", "Gemstones", "Iron Ore", "Manganese", "Phosphates", "Hydropower"]
        },

        geography_links: {
            rivers: ["Mekong River", "Tonle Sap River", "Bassac River", "Stung Sen", "Stung Sangker"],
            mountains: ["Cardamom Mountains", "Elephant Mountains", "Dangrek Mountains", "Phnum Aoral"],
            deserts: [],
            forests: ["Cardamom Rainforest", "Central Plains Dry Forest", "Prey Lang Forest"],
            oceans: ["Gulf of Thailand"]
        },

        culture: {
            officialLanguages: ["Khmer"],
            languages: ["Khmer", "French", "English", "Chinese", "Vietnamese"],
            religions: ["Buddhism (97.9%)", "Islam (1.1%)", "Christianity (0.5%)", "Others (0.5%)"],
            heritageSites: ["Angkor", "Temple of Preah Vihear", "Sambor Prei Kuk"],
            festivals: ["Khmer New Year (Choul Chnam Thmey)", "Water Festival (Bon Om Touk)", "Pchum Ben", "Royal Ploughing Ceremony"],
            cuisine: ["Amok", "Lok Lak", "Bai Sach Chrouk", "Kuy Teav", "Nom Banh Chok", "Prahok", "Samlor Korkor"],
            arts: ["Apsara Dance", "Khmer Classical Dance", "Shadow Puppetry", "Silver Work", "Silk Weaving", "Stone Carving"],
            sports: ["Football", "Pradal Serey (Kickboxing)", "Volleyball", "Sepak Takraw", "Bokator"]
        },

        symbols: {
            bird: "Giant Ibis",
            animal: "Kouprey (Wild Ox)",
            flower: "Rumdul",
            tree: "Palmyra Palm",
            anthem: "Nokoreach",
            motto: "Nation, Religion, King"
        },

        demographics: {
            lifeExpectancy: 70.09,
            literacyRate: "80.5%",
            urbanPopulation: "24.7%",
            medianAge: 26.4
        },

        history: {
            timeline: [
                { year: "1st Century", title: "Funan Kingdom", description: "Early Indianized kingdom established" },
                { year: "802", title: "Khmer Empire", description: "Jayavarman II founded Khmer Empire" },
                { year: "1113-1150", title: "Angkor Wat", description: "Angkor Wat temple complex built" },
                { year: "1863", title: "French Protectorate", description: "Became French protectorate" },
                { year: "1953", title: "Independence", description: "Independence from France" },
                { year: "1975-1979", title: "Khmer Rouge", description: "Genocide under Pol Pot regime" },
                { year: "1993", title: "Kingdom Restored", description: "Constitutional monarchy restored" }
            ],
            notableFigures: ["Jayavarman II", "Jayavarman VII", "King Norodom Sihanouk", "Hun Sen"]
        },

        disputes: [
            { name: "Preah Vihear Temple", description: "Border dispute with Thailand near temple", type: "Border" }
        ],

        quickFacts: [
            { icon: "monument", title: "Angkor Wat", text: "World's largest religious monument" },
            { icon: "water", title: "Tonle Sap", text: "Largest freshwater lake in Southeast Asia" },
            { icon: "skull", title: "Khmer Rouge", text: "2 million died under Pol Pot (1975-79)" },
            { icon: "building", title: "Only Flag", text: "Only national flag featuring a building" },
            { icon: "fish", title: "Fish Production", text: "One of world's largest freshwater fish catches" }
        ]
    },

    // 3. INDONESIA
    {
        id: "IDN",
        name: "Indonesia",
        officialName: "Republic of Indonesia",
        flag: "https://flagcdn.com/w320/id.png",
        
        images: {
            hero: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1920&q=80",
            landscape: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=1920&q=80",
            city: "https://images.unsplash.com/photo-1555899434-94d1368aa7af?w=1920&q=80"
        },

        basic: {
            capital: "Jakarta (moving to Nusantara)",
            continent: "Asia",
            region: "Southeast Asia",
            subregion: "South-Eastern Asia",
            population: 277534122,
            area: 1904569,
            populationDensity: 151,
            independence: "1945",
            callingCode: "+62",
            tld: ".id",
            drivingSide: "Left",
            electricity: "230V, 50Hz"
        },

        location: {
            coordinates: [-0.7893, 113.9213],
            timezone: "UTC+7 to UTC+9 (WIB, WITA, WIT)",
            neighbors: ["Malaysia", "Papua New Guinea", "Timor-Leste"],
            borders: 2958,
            hemispheres: ["Northern", "Southern", "Eastern"]
        },

        political: {
            government: "Unitary Presidential Constitutional Republic",
            headOfState: "President Prabowo Subianto",
            headOfGovernment: "President Prabowo Subianto",
            legislature: "People's Consultative Assembly (MPR)",
            legalSystem: "Civil Law (Dutch influence)",
            states: 38,
            provinces: 38,
            largestCity: "Jakarta",
            organizations: ["UN", "ASEAN", "G20", "OPEC", "APEC", "WTO", "OIC", "NAM"]
        },

        economy: {
            gdp: "$1.42 Trillion",
            gdpPPP: "$4.02 Trillion",
            gdpPerCapita: "$5,108",
            gdpRank: "#16",
            gdpGrowth: "5.0%",
            currency: "Indonesian Rupiah",
            currencyCode: "IDR",
            currencySymbol: "Rp",
            inflation: "3.7%",
            unemployment: "5.3%",
            majorSectors: ["Services (44%)", "Industry (40%)", "Agriculture (13%)"],
            industries: ["Petroleum & Natural Gas", "Textiles", "Automotive", "Electrical Appliances", "Mining", "Cement", "Palm Oil", "Rubber"],
            exports: ["Palm Oil", "Coal", "Petroleum Gas", "Gold", "Rubber", "Nickel", "Vehicles"],
            imports: ["Refined Petroleum", "Crude Petroleum", "Machinery", "Chemicals", "Plastics"]
        },

        geography: {
            climate: "Tropical (Hot and Humid)",
            avgTemperature: "26.5°C",
            annualRainfall: "2,702 mm",
            highestPoint: "Puncak Jaya (4,884 m)",
            lowestPoint: "Indian Ocean (0 m)",
            coastline: "54,716 km",
            forestCover: "49.1%",
            arableLand: "13%",
            terrain: "Coastal lowlands; mountainous interiors on larger islands",
            naturalResources: ["Petroleum", "Tin", "Natural Gas", "Nickel", "Timber", "Bauxite", "Copper", "Coal", "Gold", "Silver"],
            islands: 17508
        },

        geography_links: {
            rivers: ["Kapuas River", "Mahakam River", "Barito River", "Musi River", "Bengawan Solo"],
            mountains: ["Puncak Jaya", "Mount Semeru", "Mount Rinjani", "Mount Kerinci", "Mount Bromo", "Mount Krakatoa"],
            deserts: [],
            forests: ["Borneo Rainforest", "Sumatran Rainforest", "Papua Rainforest", "Mangroves"],
            oceans: ["Indian Ocean", "Pacific Ocean", "Java Sea", "Banda Sea", "Celebes Sea", "Flores Sea"]
        },

        culture: {
            officialLanguages: ["Indonesian (Bahasa Indonesia)"],
            languages: ["Indonesian", "Javanese", "Sundanese", "Madurese", "Minangkabau", "Balinese", "700+ regional languages"],
            religions: ["Islam (87.2%)", "Protestantism (7%)", "Catholicism (2.9%)", "Hinduism (1.7%)", "Buddhism (0.7%)", "Confucianism (0.05%)"],
            heritageSites: ["Borobudur Temple", "Prambanan Temple", "Komodo National Park", "Tropical Rainforest Heritage of Sumatra", "Sangiran Early Man Site", "Cultural Landscape of Bali"],
            festivals: ["Eid al-Fitr", "Nyepi (Balinese New Year)", "Waisak", "Independence Day", "Galungan", "Ramadan"],
            cuisine: ["Nasi Goreng", "Rendang", "Satay", "Gado-Gado", "Soto", "Bakso", "Nasi Padang", "Tempeh", "Sambal"],
            arts: ["Batik", "Wayang (Puppet Theatre)", "Gamelan Music", "Pencak Silat", "Balinese Dance", "Wood Carving"],
            sports: ["Football", "Badminton", "Sepak Takraw", "Pencak Silat", "Basketball"]
        },

        symbols: {
            bird: "Javan Hawk-Eagle (Garuda)",
            animal: "Komodo Dragon",
            flower: "Moon Orchid (Puspa Pesona), Jasmine (Puspa Bangsa), Rafflesia (Puspa Langka)",
            tree: "Teak",
            anthem: "Indonesia Raya",
            motto: "Bhinneka Tunggal Ika (Unity in Diversity)"
        },

        demographics: {
            lifeExpectancy: 72.32,
            literacyRate: "96%",
            urbanPopulation: "57.9%",
            medianAge: 30.2
        },

        history: {
            timeline: [
                { year: "7th Century", title: "Srivijaya Empire", description: "Maritime empire based in Sumatra" },
                { year: "8th-9th Century", title: "Borobudur & Prambanan", description: "Great temples constructed" },
                { year: "13th Century", title: "Majapahit Empire", description: "Largest pre-colonial Indonesian empire" },
                { year: "1602", title: "Dutch VOC", description: "Dutch East India Company established" },
                { year: "1942-1945", title: "Japanese Occupation", description: "Japan occupied during WWII" },
                { year: "1945", title: "Independence", description: "Sukarno declared independence" },
                { year: "1998", title: "Reformasi", description: "End of Suharto's 32-year rule" }
            ],
            notableFigures: ["Sukarno", "Suharto", "Gajah Mada", "Diponegoro", "Kartini", "B.J. Habibie"]
        },

        disputes: [
            { name: "South China Sea", description: "Claims overlap with China's nine-dash line", type: "Maritime" },
            { name: "Ambalat Block", description: "Maritime dispute with Malaysia", type: "Maritime" }
        ],

        quickFacts: [
            { icon: "globe", title: "Largest Archipelago", text: "17,508 islands - world's largest archipelago" },
            { icon: "users", title: "4th Most Populous", text: "277+ million people" },
            { icon: "dragon", title: "Komodo Dragons", text: "Only place with wild Komodo dragons" },
            { icon: "mosque", title: "Most Muslims", text: "World's largest Muslim-majority country" },
            { icon: "fire", title: "Ring of Fire", text: "130+ active volcanoes" },
            { icon: "language", title: "Languages", text: "Over 700 languages spoken" }
        ]
    },

    // 4. LAOS
    {
        id: "LAO",
        name: "Laos",
        officialName: "Lao People's Democratic Republic",
        flag: "https://flagcdn.com/w320/la.png",
        
        images: {
            hero: "https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=1920&q=80",
            landscape: "https://images.unsplash.com/photo-1570366805048-2d8e22de8e13?w=1920&q=80",
            city: "https://images.unsplash.com/photo-1540611025311-01df3cef54b5?w=1920&q=80"
        },

        basic: {
            capital: "Vientiane",
            continent: "Asia",
            region: "Southeast Asia",
            subregion: "South-Eastern Asia",
            population: 7529475,
            area: 236800,
            populationDensity: 32,
            independence: "1953",
            callingCode: "+856",
            tld: ".la",
            drivingSide: "Right",
            electricity: "230V, 50Hz"
        },

        location: {
            coordinates: [19.8563, 102.4955],
            timezone: "UTC+7 (ICT)",
            neighbors: ["China", "Myanmar", "Thailand", "Vietnam", "Cambodia"],
            borders: 5274,
            hemispheres: ["Northern", "Eastern"]
        },

        political: {
            government: "Unitary Marxist-Leninist One-Party Socialist Republic",
            headOfState: "President Thongloun Sisoulith",
            headOfGovernment: "Prime Minister Sonexay Siphandone",
            legislature: "National Assembly",
            legalSystem: "Civil Law (French influence)",
            states: 18,
            provinces: 17,
            prefecture: 1,
            largestCity: "Vientiane",
            organizations: ["UN", "ASEAN", "WTO", "Francophonie", "NAM"]
        },

        economy: {
            gdp: "$14.34 Billion",
            gdpPPP: "$64.95 Billion",
            gdpPerCapita: "$1,903",
            gdpRank: "#119",
            gdpGrowth: "3.3%",
            currency: "Lao Kip",
            currencyCode: "LAK",
            currencySymbol: "₭",
            inflation: "23%",
            unemployment: "1.4%",
            majorSectors: ["Services (42%)", "Industry (32%)", "Agriculture (15%)"],
            industries: ["Mining (Copper, Gold)", "Timber", "Hydropower", "Garments", "Cement", "Tourism", "Agriculture"],
            exports: ["Electricity", "Copper", "Gold", "Wood Products", "Coffee", "Cassava"],
            imports: ["Machinery", "Vehicles", "Fuel", "Consumer Goods"]
        },

        geography: {
            climate: "Tropical Monsoon",
            avgTemperature: "26.4°C",
            annualRainfall: "1,834 mm",
            highestPoint: "Phou Bia (2,817 m)",
            lowestPoint: "Mekong River (70 m)",
            coastline: "0 km (Landlocked)",
            forestCover: "58%",
            arableLand: "6.2%",
            terrain: "Mostly rugged mountains; some plains and plateaus",
            naturalResources: ["Timber", "Hydropower", "Gypsum", "Tin", "Gold", "Gemstones", "Copper"]
        },

        geography_links: {
            rivers: ["Mekong River", "Nam Ou", "Nam Khan", "Nam Ngum", "Se Kong", "Xe Banghiang"],
            mountains: ["Annamite Range", "Phou Bia", "Phou Khao Khuay", "Luang Prabang Range"],
            deserts: [],
            forests: ["Tropical Monsoon Forests", "Deciduous Forests", "Pine Forests", "Bamboo Forests"],
            oceans: []
        },

        culture: {
            officialLanguages: ["Lao"],
            languages: ["Lao", "French", "English", "Hmong", "Khmu"],
            religions: ["Buddhism (64.7%)", "Animism (31.4%)", "Christianity (1.7%)", "Others (2.2%)"],
            heritageSites: ["Town of Luang Prabang", "Vat Phou and Associated Ancient Settlements", "Megalithic Jar Sites in Xiengkhuang (Plain of Jars)"],
            festivals: ["Pi Mai Lao (Lao New Year)", "Boun Bang Fai (Rocket Festival)", "That Luang Festival", "Boun Ok Phansa"],
            cuisine: ["Larb", "Sticky Rice", "Tam Mak Hoong (Papaya Salad)", "Khao Piak Sen", "Ping Kai", "Or Lam", "Sai Oua"],
            arts: ["Lao Classical Music", "Mor Lam (Folk Music)", "Silk Weaving", "Gold/Silver Smithing", "Temple Architecture"],
            sports: ["Muay Lao", "Football", "Petanque", "Sepak Takraw", "Volleyball"]
        },

        symbols: {
            bird: "Siamese Fireback",
            animal: "Asian Elephant",
            flower: "Dok Champa (Plumeria)",
            tree: "None Official",
            anthem: "Pheng Xat Lao",
            motto: "Peace, Independence, Democracy, Unity and Prosperity"
        },

        demographics: {
            lifeExpectancy: 68.89,
            literacyRate: "84.7%",
            urbanPopulation: "37.6%",
            medianAge: 24.4
        },

        history: {
            timeline: [
                { year: "1353", title: "Lan Xang Kingdom", description: "Fa Ngum founded Lane Xang Kingdom" },
                { year: "1707-1713", title: "Division", description: "Kingdom split into three parts" },
                { year: "1893", title: "French Protectorate", description: "Became part of French Indochina" },
                { year: "1953", title: "Independence", description: "Gained independence from France" },
                { year: "1964-1973", title: "Secret War", description: "US bombing during Vietnam War era" },
                { year: "1975", title: "Communist Rule", description: "Pathet Lao established socialist state" }
            ],
            notableFigures: ["Fa Ngum", "Kaysone Phomvihane", "Souphanouvong"]
        },

        disputes: [
            { name: "Border with Thailand", description: "Minor unresolved border issues", type: "Border" }
        ],

        quickFacts: [
            { icon: "bomb", title: "Most Bombed", text: "Most heavily bombed country per capita in history" },
            { icon: "mountain", title: "Landlocked", text: "Only landlocked country in Southeast Asia" },
            { icon: "bolt", title: "Battery of Asia", text: "Major hydropower exporter to neighbors" },
            { icon: "water", title: "Mekong River", text: "1,898 km of Mekong flows through Laos" },
            { icon: "jar-wheat", title: "Plain of Jars", text: "Mysterious ancient stone jars site" }
        ]
    },
        // 5. MALAYSIA
    {
        id: "MYS",
        name: "Malaysia",
        officialName: "Malaysia",
        flag: "https://flagcdn.com/w320/my.png",
        
        images: {
            hero: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=1920&q=80",
            landscape: "https://images.unsplash.com/photo-1609946860441-a51ffcf22208?w=1920&q=80",
            city: "https://images.unsplash.com/photo-1508084451219-386f9b673db2?w=1920&q=80"
        },

        basic: {
            capital: "Kuala Lumpur (Federal), Putrajaya (Administrative)",
            continent: "Asia",
            region: "Southeast Asia",
            subregion: "South-Eastern Asia",
            population: 34308525,
            area: 330803,
            populationDensity: 99,
            independence: "1957",
            callingCode: "+60",
            tld: ".my",
            drivingSide: "Left",
            electricity: "240V, 50Hz"
        },

        location: {
            coordinates: [4.2105, 101.9758],
            timezone: "UTC+8 (MYT)",
            neighbors: ["Thailand", "Brunei", "Indonesia", "Singapore"],
            borders: 2742,
            hemispheres: ["Northern", "Eastern"]
        },

        political: {
            government: "Federal Parliamentary Constitutional Elective Monarchy",
            headOfState: "Yang di-Pertuan Agong Ibrahim Iskandar",
            headOfGovernment: "Prime Minister Anwar Ibrahim",
            legislature: "Parliament (Dewan Negara & Dewan Rakyat)",
            legalSystem: "Mixed (Common Law and Islamic Law)",
            states: 13,
            federalTerritories: 3,
            largestCity: "Kuala Lumpur",
            organizations: ["UN", "ASEAN", "Commonwealth", "OIC", "APEC", "WTO", "NAM", "D-8"]
        },

        economy: {
            gdp: "$430.9 Billion",
            gdpPPP: "$1.13 Trillion",
            gdpPerCapita: "$12,570",
            gdpRank: "#34",
            gdpGrowth: "3.7%",
            currency: "Malaysian Ringgit",
            currencyCode: "MYR",
            currencySymbol: "RM",
            inflation: "2.5%",
            unemployment: "3.4%",
            majorSectors: ["Services (55%)", "Industry (37%)", "Agriculture (7%)"],
            industries: ["Electronics", "Petroleum", "Palm Oil", "Rubber", "Timber", "Automotive", "Financial Services", "Tourism"],
            exports: ["Electronics", "Petroleum", "Palm Oil", "Natural Gas", "Rubber", "Chemicals", "Machinery"],
            imports: ["Electronics", "Machinery", "Petroleum", "Plastics", "Vehicles", "Iron & Steel"]
        },

        geography: {
            climate: "Tropical Equatorial",
            avgTemperature: "27°C",
            annualRainfall: "2,500 mm",
            highestPoint: "Mount Kinabalu (4,095 m)",
            lowestPoint: "Indian Ocean (0 m)",
            coastline: "4,675 km",
            forestCover: "54.6%",
            arableLand: "5.5%",
            terrain: "Coastal plains; hills and mountains interior",
            naturalResources: ["Tin", "Petroleum", "Timber", "Copper", "Iron Ore", "Natural Gas", "Bauxite"]
        },

        geography_links: {
            rivers: ["Rajang River", "Kinabatangan River", "Pahang River", "Perak River", "Kelantan River"],
            mountains: ["Mount Kinabalu", "Mount Tahan", "Mount Korbu", "Mount Mulu", "Crocker Range"],
            deserts: [],
            forests: ["Borneo Rainforest", "Taman Negara", "Belum-Temengor", "Danum Valley", "Kinabalu Park"],
            oceans: ["South China Sea", "Strait of Malacca", "Sulu Sea", "Celebes Sea", "Andaman Sea"]
        },

        culture: {
            officialLanguages: ["Malay"],
            languages: ["Malay", "English", "Mandarin", "Tamil", "Indigenous Languages"],
            religions: ["Islam (63.5%)", "Buddhism (18.7%)", "Christianity (9.1%)", "Hinduism (6.1%)", "Others (2.6%)"],
            heritageSites: ["Kinabalu Park", "Gunung Mulu National Park", "Melaka and George Town", "Lenggong Valley"],
            festivals: ["Hari Raya Aidilfitri", "Chinese New Year", "Deepavali", "Thaipusam", "Hari Gawai", "Kaamatan"],
            cuisine: ["Nasi Lemak", "Satay", "Rendang", "Char Kway Teow", "Roti Canai", "Laksa", "Hainanese Chicken Rice", "Cendol"],
            arts: ["Batik", "Songket", "Wayang Kulit", "Silat", "Dikir Barat", "Gamelan"],
            sports: ["Football", "Badminton", "Sepak Takraw", "Hockey", "Squash"]
        },

        symbols: {
            bird: "Rhinoceros Hornbill",
            animal: "Malayan Tiger",
            flower: "Hibiscus (Bunga Raya)",
            tree: "None Official",
            anthem: "Negaraku",
            motto: "Bersekutu Bertambah Mutu (Unity is Strength)"
        },

        demographics: {
            lifeExpectancy: 76.88,
            literacyRate: "95%",
            urbanPopulation: "78%",
            medianAge: 30.3
        },

        history: {
            timeline: [
                { year: "100 CE", title: "Early Kingdoms", description: "Hindu-Buddhist kingdoms established" },
                { year: "1400", title: "Malacca Sultanate", description: "Rise of Malacca as trading power" },
                { year: "1511", title: "Portuguese Conquest", description: "Portuguese captured Malacca" },
                { year: "1824", title: "British Control", description: "Anglo-Dutch Treaty gave British control" },
                { year: "1942-1945", title: "Japanese Occupation", description: "Japanese occupation during WWII" },
                { year: "1957", title: "Independence", description: "Malaya gained independence" },
                { year: "1963", title: "Malaysia Formed", description: "Federation of Malaysia formed with Sabah, Sarawak, Singapore" },
                { year: "1965", title: "Singapore Left", description: "Singapore separated from Malaysia" }
            ],
            notableFigures: ["Tunku Abdul Rahman", "Mahathir Mohamad", "Parameswara", "Hang Tuah"]
        },

        disputes: [
            { name: "Spratly Islands", description: "Overlapping claims in South China Sea", type: "Maritime" },
            { name: "Sabah", description: "Claimed by Philippines", type: "Territory" },
            { name: "Pedra Branca", description: "Maritime dispute with Singapore", type: "Maritime" }
        ],

        quickFacts: [
            { icon: "building", title: "Petronas Towers", text: "Were world's tallest buildings 1998-2004" },
            { icon: "tree", title: "Ancient Rainforest", text: "130 million year old Taman Negara rainforest" },
            { icon: "crown", title: "Rotating Monarchy", text: "Only country with rotating monarchy among 9 sultans" },
            { icon: "palm-tree", title: "Palm Oil", text: "World's 2nd largest palm oil producer" },
            { icon: "flag", title: "Two Parts", text: "Only country split between Asian mainland and island" }
        ]
    },

    // 6. MYANMAR
    {
        id: "MMR",
        name: "Myanmar",
        officialName: "Republic of the Union of Myanmar",
        flag: "https://flagcdn.com/w320/mm.png",
        
        images: {
            hero: "https://images.unsplash.com/photo-1534642566602-9cf787a39c87?w=1920&q=80",
            landscape: "https://images.unsplash.com/photo-1516738901171-8eb4fc13bd20?w=1920&q=80",
            city: "https://images.unsplash.com/photo-1540466809213-dcfed0fe33bc?w=1920&q=80"
        },

        basic: {
            capital: "Naypyidaw",
            continent: "Asia",
            region: "Southeast Asia",
            subregion: "South-Eastern Asia",
            population: 54577997,
            area: 676578,
            populationDensity: 83,
            independence: "1948",
            callingCode: "+95",
            tld: ".mm",
            drivingSide: "Right",
            electricity: "230V, 50Hz"
        },

        location: {
            coordinates: [21.9162, 95.9560],
            timezone: "UTC+6:30 (MMT)",
            neighbors: ["Bangladesh", "India", "China", "Laos", "Thailand"],
            borders: 6522,
            hemispheres: ["Northern", "Eastern"]
        },

        political: {
            government: "Military Junta (State Administration Council)",
            headOfState: "SAC Chairman Min Aung Hlaing",
            headOfGovernment: "SAC Chairman Min Aung Hlaing",
            legislature: "Suspended (Assembly of the Union - bicameral)",
            legalSystem: "Mixed (Common Law, Customary Law, and Codes)",
            states: 7,
            regions: 7,
            selfAdministeredZones: 6,
            largestCity: "Yangon",
            organizations: ["UN", "ASEAN", "BIMSTEC", "NAM"]
        },

        economy: {
            gdp: "$58.8 Billion",
            gdpPPP: "$256.7 Billion",
            gdpPerCapita: "$1,095",
            gdpRank: "#71",
            gdpGrowth: "3.0%",
            currency: "Myanmar Kyat",
            currencyCode: "MMK",
            currencySymbol: "K",
            inflation: "8.8%",
            unemployment: "2.2%",
            majorSectors: ["Agriculture (22%)", "Industry (35%)", "Services (42%)"],
            industries: ["Agricultural Processing", "Textiles & Apparel", "Wood Products", "Mining (Copper, Tin, Tungsten, Iron)", "Jade & Gems", "Oil & Natural Gas", "Construction"],
            exports: ["Natural Gas", "Jade & Gems", "Beans & Pulses", "Fish", "Rice", "Timber", "Garments"],
            imports: ["Fabric", "Petroleum", "Fertilizer", "Plastics", "Machinery", "Transport Equipment"]
        },

        geography: {
            climate: "Tropical Monsoon; Temperate in highlands",
            avgTemperature: "27.4°C",
            annualRainfall: "2,365 mm",
            highestPoint: "Hkakabo Razi (5,881 m)",
            lowestPoint: "Andaman Sea (0 m)",
            coastline: "1,930 km",
            forestCover: "42.9%",
            arableLand: "16.5%",
            terrain: "Central lowlands; mountains in west and north",
            naturalResources: ["Petroleum", "Timber", "Tin", "Antimony", "Zinc", "Copper", "Tungsten", "Lead", "Coal", "Marble", "Limestone", "Precious Stones", "Natural Gas", "Hydropower"]
        },

        geography_links: {
            rivers: ["Irrawaddy River", "Salween River", "Chindwin River", "Sittaung River"],
            mountains: ["Hkakabo Razi", "Mount Popa", "Rakhine Mountains", "Chin Hills", "Shan Plateau"],
            deserts: ["Dry Zone (Central Myanmar)"],
            forests: ["Northern Rainforests", "Teak Forests", "Mangroves", "Hukaung Valley"],
            oceans: ["Andaman Sea", "Bay of Bengal"]
        },

        culture: {
            officialLanguages: ["Burmese"],
            languages: ["Burmese", "Shan", "Karen", "Rakhine", "Chin", "Kachin", "Mon", "English"],
            religions: ["Buddhism (87.9%)", "Christianity (6.2%)", "Islam (4.3%)", "Hinduism (0.5%)", "Animism (0.8%)"],
            heritageSites: ["Bagan", "Pyu Ancient Cities"],
            festivals: ["Thingyan (Water Festival/New Year)", "Thadingyut (Festival of Lights)", "Tazaungdaing", "Kahtein"],
            cuisine: ["Mohinga", "Shan Noodles", "Tea Leaf Salad (Lahpet)", "Ohn No Khao Swe", "Nan Gyi Thoke", "Mont Di"],
            arts: ["Puppetry (Yoke Thé)", "Lacquerware", "Thanaka", "Longyi", "Traditional Dance", "Bronze Casting"],
            sports: ["Chinlone", "Football", "Lethwei (Burmese Boxing)", "Sepak Takraw"]
        },

        symbols: {
            bird: "Grey Peacock-Pheasant",
            animal: "Tiger",
            flower: "Padauk (Pterocarpus macrocarpus)",
            tree: "Padauk",
            anthem: "Kaba Ma Kyei",
            motto: "None Official"
        },

        demographics: {
            lifeExpectancy: 67.78,
            literacyRate: "89.1%",
            urbanPopulation: "31.4%",
            medianAge: 28.8
        },

        history: {
            timeline: [
                { year: "849", title: "Pagan Kingdom", description: "First Burmese unified kingdom" },
                { year: "1287", title: "Mongol Invasion", description: "Mongols invaded, kingdom fragmented" },
                { year: "1752", title: "Konbaung Dynasty", description: "Last Burmese dynasty established" },
                { year: "1885", title: "British Rule", description: "Third Anglo-Burmese War, British annexation" },
                { year: "1942-1945", title: "Japanese Occupation", description: "Japanese occupation during WWII" },
                { year: "1948", title: "Independence", description: "Independence from Britain" },
                { year: "1962", title: "Military Coup", description: "Military coup began decades of military rule" },
                { year: "2011", title: "Civilian Government", description: "Transition to civilian-military government" },
                { year: "2021", title: "Military Coup", description: "Military seized power again" }
            ],
            notableFigures: ["Aung San", "Aung San Suu Kyi", "King Anawrahta", "King Bayinnaung", "U Thant"]
        },

        disputes: [
            { name: "Rohingya Crisis", description: "Ethnic conflict and refugee crisis", type: "Internal" },
            { name: "Border with Bangladesh", description: "Minor border issues and Rohingya refugees", type: "Border" }
        ],

        quickFacts: [
            { icon: "monument", title: "Bagan", text: "Over 2,000 ancient Buddhist temples" },
            { icon: "gem", title: "Jade & Ruby", text: "World's largest producer of jade and rubies" },
            { icon: "clock", title: "Unique Timezone", text: "UTC+6:30 - one of few half-hour timezones" },
            { icon: "dragon", title: "Golden Land", text: "Called 'Golden Land' for its temples" },
            { icon: "water", title: "Inle Lake", text: "Unique leg-rowing fishermen" }
        ]
    },

    // 7. PHILIPPINES
    {
        id: "PHL",
        name: "Philippines",
        officialName: "Republic of the Philippines",
        flag: "https://flagcdn.com/w320/ph.png",
        
        images: {
            hero: "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?w=1920&q=80",
            landscape: "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=1920&q=80",
            city: "https://images.unsplash.com/photo-1562639299-1ad36b1ebce5?w=1920&q=80"
        },

        basic: {
            capital: "Manila",
            continent: "Asia",
            region: "Southeast Asia",
            subregion: "South-Eastern Asia",
            population: 117337368,
            area: 300000,
            populationDensity: 368,
            independence: "1946",
            callingCode: "+63",
            tld: ".ph",
            drivingSide: "Right",
            electricity: "220V, 60Hz"
        },

        location: {
            coordinates: [12.8797, 121.7740],
            timezone: "UTC+8 (PHT)",
            neighbors: [],
            borders: 0,
            hemispheres: ["Northern", "Eastern"],
            islandNation: true,
            islands: 7641
        },

        political: {
            government: "Unitary Presidential Constitutional Republic",
            headOfState: "President Bongbong Marcos",
            headOfGovernment: "President Bongbong Marcos",
            legislature: "Congress (Senate & House of Representatives)",
            legalSystem: "Mixed (Civil Law and Common Law)",
            states: 82,
            provinces: 82,
            regions: 17,
            largestCity: "Quezon City",
            organizations: ["UN", "ASEAN", "APEC", "WTO", "G24", "NAM"]
        },

        economy: {
            gdp: "$404.3 Billion",
            gdpPPP: "$1.14 Trillion",
            gdpPerCapita: "$3,498",
            gdpRank: "#32",
            gdpGrowth: "5.6%",
            currency: "Philippine Peso",
            currencyCode: "PHP",
            currencySymbol: "₱",
            inflation: "6.0%",
            unemployment: "4.4%",
            majorSectors: ["Services (61%)", "Industry (28%)", "Agriculture (9%)"],
            industries: ["Electronics Assembly", "Business Process Outsourcing", "Shipbuilding", "Pharmaceuticals", "Chemicals", "Food Processing", "Garments", "Petroleum Refining"],
            exports: ["Electronics", "Machinery", "Transport Equipment", "Coconut Oil", "Fruits", "Copper"],
            imports: ["Electronic Products", "Mineral Fuels", "Machinery", "Iron & Steel", "Vehicles", "Plastics"]
        },

        geography: {
            climate: "Tropical Marine",
            avgTemperature: "26.6°C",
            annualRainfall: "2,348 mm",
            highestPoint: "Mount Apo (2,954 m)",
            lowestPoint: "Philippine Sea (0 m)",
            coastline: "36,289 km",
            forestCover: "23%",
            arableLand: "18.2%",
            terrain: "Mountainous with narrow coastal lowlands",
            naturalResources: ["Timber", "Petroleum", "Nickel", "Cobalt", "Silver", "Gold", "Salt", "Copper"]
        },

        geography_links: {
            rivers: ["Cagayan River", "Rio Grande de Mindanao", "Agusan River", "Pampanga River", "Pasig River"],
            mountains: ["Mount Apo", "Mount Pulag", "Mount Mayon", "Mount Pinatubo", "Mount Kanlaon", "Cordillera Central"],
            deserts: [],
            forests: ["Sierra Madre", "Palawan Rainforests", "Mindanao Rainforests"],
            oceans: ["Philippine Sea", "South China Sea (West Philippine Sea)", "Sulu Sea", "Celebes Sea", "Pacific Ocean"]
        },

        culture: {
            officialLanguages: ["Filipino (Tagalog)", "English"],
            languages: ["Filipino", "English", "Cebuano", "Ilocano", "Hiligaynon", "Bicolano", "Waray", "180+ languages"],
            religions: ["Roman Catholicism (79%)", "Islam (6%)", "Iglesia ni Cristo (2.6%)", "Evangelical (2.4%)", "Others (10%)"],
            heritageSites: ["Baroque Churches", "Rice Terraces of Philippine Cordilleras", "Vigan", "Puerto Princesa Subterranean River", "Mount Hamiguitan", "Tubbataha Reefs"],
            festivals: ["Sinulog", "Ati-Atihan", "Pahiyas", "Panagbenga", "Kadayawan", "MassKara", "Christmas Season"],
            cuisine: ["Adobo", "Sinigang", "Lechon", "Kare-Kare", "Lumpia", "Sisig", "Halo-Halo", "Balut", "Pancit"],
            arts: ["Tinikling Dance", "Kundiman Music", "Jeepney Art", "Bamboo Craft", "T'nalak Weaving", "Parol Making"],
            sports: ["Basketball", "Boxing", "Volleyball", "Billiards", "Arnis", "Football"]
        },

        symbols: {
            bird: "Philippine Eagle",
            animal: "Carabao (Water Buffalo)",
            flower: "Sampaguita (Arabian Jasmine)",
            tree: "Narra",
            anthem: "Lupang Hinirang",
            motto: "Maka-Diyos, Maka-Tao, Makakalikasan at Makabansa"
        },

        demographics: {
            lifeExpectancy: 72.13,
            literacyRate: "98.2%",
            urbanPopulation: "47.7%",
            medianAge: 25.7
        },

        history: {
            timeline: [
                { year: "900", title: "Laguna Copperplate", description: "Earliest written record in Philippines" },
                { year: "1521", title: "Spanish Arrival", description: "Magellan arrived, Spanish colonization began" },
                { year: "1898", title: "Independence Declared", description: "Independence from Spain declared" },
                { year: "1898", title: "American Rule", description: "Spanish-American War, US took control" },
                { year: "1942-1945", title: "Japanese Occupation", description: "Japanese occupied during WWII" },
                { year: "1946", title: "Independence", description: "Full independence from United States" },
                { year: "1972-1986", title: "Martial Law", description: "Marcos martial law era" },
                { year: "1986", title: "People Power", description: "EDSA Revolution ousted Marcos" }
            ],
            notableFigures: ["José Rizal", "Andrés Bonifacio", "Emilio Aguinaldo", "Corazon Aquino", "Manny Pacquiao"]
        },

        disputes: [
            { name: "South China Sea", description: "Spratly Islands and Scarborough Shoal disputes with China", type: "Maritime" },
            { name: "Sabah", description: "Claim over Sabah, Malaysia", type: "Territory" }
        ],

        quickFacts: [
            { icon: "island-tropical", title: "7,641 Islands", text: "Archipelago nation with over 7,600 islands" },
            { icon: "cross", title: "Catholic Nation", text: "Only predominantly Catholic country in Asia" },
            { icon: "comment", title: "English Speakers", text: "3rd largest English-speaking country" },
            { icon: "phone", title: "Texting Capital", text: "Known as 'texting capital of the world'" },
            { icon: "hand-sparkles", title: "OFW", text: "10+ million Filipinos work overseas" },
            { icon: "tree", title: "Biodiversity", text: "One of 18 mega-diverse countries" }
        ]
    },

    // 8. SINGAPORE
    {
        id: "SGP",
        name: "Singapore",
        officialName: "Republic of Singapore",
        flag: "https://flagcdn.com/w320/sg.png",
        
        images: {
            hero: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=1920&q=80",
            landscape: "https://images.unsplash.com/photo-1496939376851-89342e90adcd?w=1920&q=80",
            city: "https://images.unsplash.com/photo-1508964942454-1a56651d54ac?w=1920&q=80"
        },

        basic: {
            capital: "Singapore",
            continent: "Asia",
            region: "Southeast Asia",
            subregion: "South-Eastern Asia",
            population: 5637022,
            area: 733,
            populationDensity: 8358,
            independence: "1965",
            callingCode: "+65",
            tld: ".sg",
            drivingSide: "Left",
            electricity: "230V, 50Hz"
        },

        location: {
            coordinates: [1.3521, 103.8198],
            timezone: "UTC+8 (SGT)",
            neighbors: ["Malaysia", "Indonesia"],
            borders: 0,
            hemispheres: ["Northern", "Eastern"],
            islandNation: true
        },

        political: {
            government: "Unitary Parliamentary Constitutional Republic",
            headOfState: "President Tharman Shanmugaratnam",
            headOfGovernment: "Prime Minister Lawrence Wong",
            legislature: "Parliament",
            legalSystem: "Common Law (British influence)",
            states: 0,
            districts: 5,
            planningAreas: 55,
            largestCity: "Singapore",
            organizations: ["UN", "ASEAN", "Commonwealth", "APEC", "WTO", "G20 (Guest)", "NAM"]
        },

        economy: {
            gdp: "$501.4 Billion",
            gdpPPP: "$725.2 Billion",
            gdpPerCapita: "$87,884",
            gdpRank: "#33",
            gdpGrowth: "1.1%",
            currency: "Singapore Dollar",
            currencyCode: "SGD",
            currencySymbol: "S$",
            inflation: "4.8%",
            unemployment: "1.9%",
            majorSectors: ["Services (70%)", "Industry (25%)", "Agriculture (<1%)"],
            industries: ["Electronics", "Chemicals", "Financial Services", "Oil Drilling Equipment", "Petroleum Refining", "Biotechnology", "Pharmaceuticals", "Processed Food & Beverages", "Ship Repair"],
            exports: ["Machinery", "Electronics", "Refined Petroleum", "Chemicals", "Pharmaceutical Products"],
            imports: ["Machinery", "Petroleum", "Electronics", "Chemicals", "Food Products"]
        },

        geography: {
            climate: "Tropical Equatorial",
            avgTemperature: "27.5°C",
            annualRainfall: "2,340 mm",
            highestPoint: "Bukit Timah Hill (164 m)",
            lowestPoint: "Singapore Strait (0 m)",
            coastline: "193 km",
            forestCover: "23%",
            arableLand: "0.9%",
            terrain: "Lowland; gently undulating central plateau",
            naturalResources: ["Fish", "Deepwater Ports"]
        },

        geography_links: {
            rivers: ["Singapore River", "Kallang River", "Rochor River", "Geylang River"],
            mountains: [],
            deserts: [],
            forests: ["Bukit Timah Nature Reserve", "Central Catchment Nature Reserve", "Sungei Buloh Wetland Reserve"],
            oceans: ["Singapore Strait", "Johor Strait", "South China Sea"]
        },

        culture: {
            officialLanguages: ["English", "Malay", "Mandarin", "Tamil"],
            languages: ["English", "Mandarin", "Malay", "Tamil", "Hokkien", "Teochew", "Cantonese", "Singlish"],
            religions: ["Buddhism (31.1%)", "Christianity (18.9%)", "No Religion (20%)", "Islam (15.6%)", "Taoism (8.8%)", "Hinduism (5%)"],
            heritageSites: ["Singapore Botanic Gardens"],
            festivals: ["Chinese New Year", "Hari Raya Puasa", "Deepavali", "Christmas", "National Day", "Vesak Day", "Thaipusam"],
            cuisine: ["Hainanese Chicken Rice", "Chilli Crab", "Laksa", "Satay", "Char Kway Teow", "Bak Kut Teh", "Roti Prata", "Kaya Toast"],
            arts: ["Contemporary Art", "Theatre", "Street Art", "Peranakan Culture", "Chinese Opera"],
            sports: ["Football", "Swimming", "Badminton", "Table Tennis", "Sailing"]
        },

        symbols: {
            bird: "Crimson Sunbird",
            animal: "Merlion (Mythical)",
            flower: "Vanda Miss Joaquim (Orchid)",
            tree: "Tembusu",
            anthem: "Majulah Singapura",
            motto: "Majulah Singapura (Onward Singapore)"
        },

        demographics: {
            lifeExpectancy: 84.07,
            literacyRate: "97.5%",
            urbanPopulation: "100%",
            medianAge: 42.2
        },

        history: {
            timeline: [
                { year: "1299", title: "Singapura", description: "Singapore founded according to legend" },
                { year: "1819", title: "British Trading Post", description: "Sir Stamford Raffles established trading post" },
                { year: "1867", title: "Crown Colony", description: "Became British Crown Colony" },
                { year: "1942-1945", title: "Japanese Occupation", description: "Fall of Singapore to Japan" },
                { year: "1959", title: "Self-Governance", description: "Achieved self-governance" },
                { year: "1963", title: "Joined Malaysia", description: "Merged with Malaysia" },
                { year: "1965", title: "Independence", description: "Separated from Malaysia, became independent" }
            ],
            notableFigures: ["Lee Kuan Yew", "Sir Stamford Raffles", "Yusof Ishak", "Goh Chok Tong", "Lee Hsien Loong"]
        },

        disputes: [
            { name: "Pedra Branca", description: "Maritime boundary with Malaysia resolved in 2008", type: "Maritime" }
        ],

        quickFacts: [
            { icon: "city", title: "City-State", text: "One of only three city-states in the world" },
            { icon: "plane", title: "Best Airport", text: "Changi Airport consistently rated world's best" },
            { icon: "ship", title: "Busiest Port", text: "One of world's busiest ports" },
            { icon: "ban", title: "Chewing Gum", text: "Chewing gum sales banned since 1992" },
            { icon: "seedling", title: "Garden City", text: "Known as 'Garden City' - 50% green cover" },
            { icon: "money-bill", title: "Wealthy", text: "Among highest GDP per capita globally" }
        ]
    },
        // 9. THAILAND
    {
        id: "THA",
        name: "Thailand",
        officialName: "Kingdom of Thailand",
        flag: "https://flagcdn.com/w320/th.png",
        
        images: {
            hero: "https://images.unsplash.com/photo-1528181304800-259b08848526?w=1920&q=80",
            landscape: "https://images.unsplash.com/photo-1506665531195-3566af2b4dfa?w=1920&q=80",
            city: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=1920&q=80"
        },

        basic: {
            capital: "Bangkok",
            continent: "Asia",
            region: "Southeast Asia",
            subregion: "South-Eastern Asia",
            population: 71801279,
            area: 513120,
            populationDensity: 137,
            independence: "Never Colonized",
            callingCode: "+66",
            tld: ".th",
            drivingSide: "Left",
            electricity: "220V, 50Hz"
        },

        location: {
            coordinates: [15.8700, 100.9925],
            timezone: "UTC+7 (ICT)",
            neighbors: ["Myanmar", "Laos", "Cambodia", "Malaysia"],
            borders: 5673,
            hemispheres: ["Northern", "Eastern"]
        },

        political: {
            government: "Unitary Parliamentary Constitutional Monarchy",
            headOfState: "King Maha Vajiralongkorn (Rama X)",
            headOfGovernment: "Prime Minister Paetongtarn Shinawatra",
            legislature: "National Assembly (Senate & House of Representatives)",
            legalSystem: "Civil Law (German & Swiss influence)",
            states: 77,
            provinces: 76,
            specialDistrict: 1,
            largestCity: "Bangkok",
            organizations: ["UN", "ASEAN", "APEC", "WTO", "NAM", "BIMSTEC"]
        },

        economy: {
            gdp: "$514.9 Billion",
            gdpPPP: "$1.56 Trillion",
            gdpPerCapita: "$7,233",
            gdpRank: "#26",
            gdpGrowth: "2.6%",
            currency: "Thai Baht",
            currencyCode: "THB",
            currencySymbol: "฿",
            inflation: "1.2%",
            unemployment: "0.9%",
            majorSectors: ["Services (58%)", "Industry (33%)", "Agriculture (8%)"],
            industries: ["Tourism", "Textiles & Garments", "Agricultural Processing", "Electronics", "Automobiles & Parts", "Cement", "World's 2nd Largest Tungsten Producer"],
            exports: ["Electronics", "Vehicles", "Machinery", "Rubber", "Plastics", "Seafood", "Rice"],
            imports: ["Machinery", "Crude Oil", "Electronics", "Chemicals", "Iron & Steel"]
        },

        geography: {
            climate: "Tropical; Rainy, Warm, Cloudy",
            avgTemperature: "28°C",
            annualRainfall: "1,622 mm",
            highestPoint: "Doi Inthanon (2,565 m)",
            lowestPoint: "Gulf of Thailand (0 m)",
            coastline: "3,219 km",
            forestCover: "31.6%",
            arableLand: "32.9%",
            terrain: "Central plain; mountains elsewhere",
            naturalResources: ["Tin", "Rubber", "Natural Gas", "Tungsten", "Tantalum", "Timber", "Lead", "Fish", "Gypsum", "Lignite", "Fluorite"]
        },

        geography_links: {
            rivers: ["Chao Phraya River", "Mekong River", "Mun River", "Chi River", "Nan River", "Ping River"],
            mountains: ["Doi Inthanon", "Doi Phu Kha", "Thanon Thong Chai Range", "Tenasserim Hills"],
            deserts: [],
            forests: ["Thungyai-Huai Kha Khaeng", "Khao Sok National Park", "Doi Suthep-Pui", "Kaeng Krachan"],
            oceans: ["Gulf of Thailand", "Andaman Sea", "Indian Ocean"]
        },

        culture: {
            officialLanguages: ["Thai"],
            languages: ["Thai", "Isan", "Northern Thai", "Southern Thai", "Chinese", "Malay", "English"],
            religions: ["Buddhism (94.5%)", "Islam (4.3%)", "Christianity (1.2%)"],
            heritageSites: ["Historic City of Ayutthaya", "Historic Town of Sukhothai", "Thungyai-Huai Kha Khaeng Wildlife Sanctuaries", "Ban Chiang Archaeological Site", "Dong Phayayen-Khao Yai Forest Complex"],
            festivals: ["Songkran (Thai New Year/Water Festival)", "Loy Krathong", "Yi Peng", "Royal Ploughing Ceremony", "Vegetarian Festival"],
            cuisine: ["Pad Thai", "Tom Yum", "Green Curry", "Massaman Curry", "Som Tum (Papaya Salad)", "Khao Pad", "Mango Sticky Rice", "Satay"],
            arts: ["Muay Thai", "Thai Classical Dance", "Silk Weaving", "Temple Architecture", "Fruit Carving", "Khon (Mask Dance Drama)"],
            sports: ["Muay Thai", "Football", "Sepak Takraw", "Badminton", "Golf", "Tennis"]
        },

        symbols: {
            bird: "Siamese Fireback",
            animal: "Elephant",
            flower: "Ratchaphruek (Golden Shower Tree)",
            tree: "Ratchaphruek",
            anthem: "Phleng Chat Thai",
            motto: "Chat, Satsana, Phra Maha Kasat (Nation, Religion, King)"
        },

        demographics: {
            lifeExpectancy: 79.27,
            literacyRate: "93.8%",
            urbanPopulation: "52.9%",
            medianAge: 40.1
        },

        history: {
            timeline: [
                { year: "1238", title: "Sukhothai Kingdom", description: "First Thai kingdom established" },
                { year: "1351", title: "Ayutthaya Kingdom", description: "Ayutthaya founded, lasted 417 years" },
                { year: "1767", title: "Fall of Ayutthaya", description: "Burma destroyed Ayutthaya" },
                { year: "1782", title: "Chakri Dynasty", description: "Current dynasty founded, Bangkok established" },
                { year: "1932", title: "Constitutional Monarchy", description: "Bloodless revolution ended absolute monarchy" },
                { year: "1939", title: "Thailand", description: "Name changed from Siam to Thailand" },
                { year: "2016", title: "King's Passing", description: "King Bhumibol Adulyadej died after 70-year reign" }
            ],
            notableFigures: ["King Ramkhamhaeng", "King Naresuan", "King Chulalongkorn (Rama V)", "King Bhumibol Adulyadej (Rama IX)"]
        },

        disputes: [
            { name: "Preah Vihear Temple", description: "Border area dispute with Cambodia", type: "Border" }
        ],

        quickFacts: [
            { icon: "crown", title: "Never Colonized", text: "Only Southeast Asian country never colonized" },
            { icon: "elephant", title: "Land of Elephants", text: "National symbol; once called 'Land of White Elephants'" },
            { icon: "umbrella-beach", title: "Tourism", text: "Among world's most visited countries (40M+/year)" },
            { icon: "utensils", title: "Thai Cuisine", text: "Consistently ranked among world's best cuisines" },
            { icon: "pray", title: "Buddhist Nation", text: "95% Buddhist, over 40,000 temples" },
            { icon: "rice", title: "Rice Exporter", text: "One of world's largest rice exporters" }
        ]
    },

    // 10. TIMOR-LESTE
    {
        id: "TLS",
        name: "Timor-Leste",
        officialName: "Democratic Republic of Timor-Leste",
        flag: "https://flagcdn.com/w320/tl.png",
        
        images: {
            hero: "https://images.unsplash.com/photo-1580394693539-af044a59b65c?w=1920&q=80",
            landscape: "https://images.unsplash.com/photo-1624007730573-f8afa96bb4c3?w=1920&q=80",
            city: "https://images.unsplash.com/photo-1602154355891-c7dd73f0f6b7?w=1920&q=80"
        },

        basic: {
            capital: "Dili",
            continent: "Asia",
            region: "Southeast Asia",
            subregion: "South-Eastern Asia",
            population: 1360596,
            area: 14874,
            populationDensity: 89,
            independence: "2002",
            callingCode: "+670",
            tld: ".tl",
            drivingSide: "Left",
            electricity: "220V, 50Hz"
        },

        location: {
            coordinates: [-8.8742, 125.7275],
            timezone: "UTC+9 (TLT)",
            neighbors: ["Indonesia"],
            borders: 253,
            hemispheres: ["Southern", "Eastern"]
        },

        political: {
            government: "Unitary Semi-Presidential Republic",
            headOfState: "President José Ramos-Horta",
            headOfGovernment: "Prime Minister Xanana Gusmão",
            legislature: "National Parliament",
            legalSystem: "Civil Law (Portuguese and Indonesian influence)",
            states: 13,
            municipalities: 13,
            largestCity: "Dili",
            organizations: ["UN", "ASEAN (Applicant)", "CPLP", "ACP", "G7+", "NAM"]
        },

        economy: {
            gdp: "$3.03 Billion",
            gdpPPP: "$7.05 Billion",
            gdpPerCapita: "$2,162",
            gdpRank: "#161",
            gdpGrowth: "3.1%",
            currency: "United States Dollar",
            currencyCode: "USD",
            currencySymbol: "$",
            inflation: "8.3%",
            unemployment: "4.4%",
            majorSectors: ["Services (70%)", "Industry (15%)", "Agriculture (10%)"],
            industries: ["Oil & Gas", "Coffee", "Sandalwood", "Marble", "Printing", "Soap Manufacturing", "Handicrafts", "Textiles"],
            exports: ["Crude Petroleum", "Natural Gas", "Coffee", "Sandalwood"],
            imports: ["Food", "Gasoline", "Vehicles", "Machinery", "Building Materials"]
        },

        geography: {
            climate: "Tropical; Hot, Humid",
            avgTemperature: "26.8°C",
            annualRainfall: "1,500 mm",
            highestPoint: "Foho Tatamailau (2,963 m)",
            lowestPoint: "Timor Sea (0 m)",
            coastline: "706 km",
            forestCover: "46.1%",
            arableLand: "10.1%",
            terrain: "Mountainous",
            naturalResources: ["Oil", "Natural Gas", "Gold", "Marble", "Manganese", "Sandalwood"]
        },

        geography_links: {
            rivers: ["Laclo River", "Loes River", "Seical River", "Tafara River"],
            mountains: ["Foho Tatamailau", "Foho Ramelau", "Mount Mundo Perdido", "Mount Matebian"],
            deserts: [],
            forests: ["Tropical Dry Forests", "Montane Forests", "Nino Konis Santana National Park"],
            oceans: ["Timor Sea", "Banda Sea", "Savu Sea"]
        },

        culture: {
            officialLanguages: ["Portuguese", "Tetum"],
            languages: ["Tetum", "Portuguese", "Indonesian", "English", "Mambae", "Makasae", "Fataluku", "30+ indigenous languages"],
            religions: ["Roman Catholicism (97.6%)", "Protestantism (2%)", "Islam (0.2%)", "Traditional Beliefs"],
            heritageSites: [],
            festivals: ["Independence Day (May 20)", "Restoration of Independence Day (Nov 28)", "Santa Cruz Day", "Liberation Day"],
            cuisine: ["Ikan Sabuko", "Batar Da'an", "Tapai", "Budu", "Caril", "Tukir", "Ikan Pepes"],
            arts: ["Tais Weaving", "Traditional Dance", "Wood Carving", "Pottery", "Basketry"],
            sports: ["Football", "Martial Arts", "Volleyball", "Athletics"]
        },

        symbols: {
            bird: "Timor Imperial Pigeon",
            animal: "Crocodile",
            flower: "Sandalwood Flower",
            tree: "Sandalwood",
            anthem: "Pátria",
            motto: "Unidade, Acção, Progresso (Unity, Action, Progress)"
        },

        demographics: {
            lifeExpectancy: 70.18,
            literacyRate: "68.1%",
            urbanPopulation: "31.3%",
            medianAge: 21.2
        },

        history: {
            timeline: [
                { year: "1515", title: "Portuguese Arrival", description: "Portuguese traders arrived" },
                { year: "1702", title: "Portuguese Colony", description: "Officially became Portuguese Timor" },
                { year: "1975", title: "Independence Declared", description: "Brief independence from Portugal" },
                { year: "1975", title: "Indonesian Invasion", description: "Indonesia invaded and occupied" },
                { year: "1999", title: "UN Referendum", description: "Voted for independence from Indonesia" },
                { year: "2002", title: "Independence", description: "Full independence, newest nation in Asia" }
            ],
            notableFigures: ["Xanana Gusmão", "José Ramos-Horta", "Nicolau Lobato", "Dom Boaventura"]
        },

        disputes: [
            { name: "Maritime Boundary", description: "Maritime boundaries with Australia resolved in 2018", type: "Maritime" }
        ],

        quickFacts: [
            { icon: "calendar", title: "Newest Asian Nation", text: "Gained independence in 2002, Asia's youngest country" },
            { icon: "cross", title: "Catholic Nation", text: "Over 97% Roman Catholic, one of most Catholic nations" },
            { icon: "oil-can", title: "Oil Dependent", text: "90% of government revenue from oil & gas" },
            { icon: "coffee", title: "Organic Coffee", text: "Known for high-quality organic Arabica coffee" },
            { icon: "flag", title: "Portuguese Speaking", text: "Only Portuguese-speaking nation in Asia" }
        ]
    },

    // 11. VIETNAM
    {
        id: "VNM",
        name: "Vietnam",
        officialName: "Socialist Republic of Vietnam",
        flag: "https://flagcdn.com/w320/vn.png",
        
        images: {
            hero: "https://images.unsplash.com/photo-1555921015-5532091f6026?w=1920&q=80",
            landscape: "https://images.unsplash.com/photo-1528127269322-539801943592?w=1920&q=80",
            city: "https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=1920&q=80"
        },

        basic: {
            capital: "Hanoi",
            continent: "Asia",
            region: "Southeast Asia",
            subregion: "South-Eastern Asia",
            population: 100987686,
            area: 331212,
            populationDensity: 314,
            independence: "1945",
            callingCode: "+84",
            tld: ".vn",
            drivingSide: "Right",
            electricity: "220V, 50Hz"
        },

        location: {
            coordinates: [14.0583, 108.2772],
            timezone: "UTC+7 (ICT)",
            neighbors: ["China", "Laos", "Cambodia"],
            borders: 4616,
            hemispheres: ["Northern", "Eastern"]
        },

        political: {
            government: "Unitary Marxist-Leninist One-Party Socialist Republic",
            headOfState: "President Lương Cường",
            headOfGovernment: "Prime Minister Phạm Minh Chính",
            cpGenSecretary: "General Secretary Tô Lâm",
            legislature: "National Assembly",
            legalSystem: "Civil Law (French influence) and Socialist Legal Theory",
            states: 63,
            provinces: 58,
            municipalities: 5,
            largestCity: "Ho Chi Minh City",
            organizations: ["UN", "ASEAN", "APEC", "WTO", "Francophonie", "NAM"]
        },

        economy: {
            gdp: "$449.1 Billion",
            gdpPPP: "$1.35 Trillion",
            gdpPerCapita: "$4,475",
            gdpRank: "#35",
            gdpGrowth: "5.0%",
            currency: "Vietnamese Đồng",
            currencyCode: "VND",
            currencySymbol: "₫",
            inflation: "3.3%",
            unemployment: "2.3%",
            majorSectors: ["Services (42%)", "Industry (38%)", "Agriculture (12%)"],
            industries: ["Electronics", "Textiles & Garments", "Food Processing", "Machinery", "Mining", "Steel", "Cement", "Chemical Fertilizer", "Glass", "Tires", "Oil & Gas", "Furniture", "Footwear"],
            exports: ["Electronics", "Textiles", "Footwear", "Machinery", "Seafood", "Crude Petroleum", "Rice", "Coffee", "Wooden Products"],
            imports: ["Machinery & Equipment", "Petroleum", "Steel", "Fabric", "Plastics", "Electronics"]
        },

        geography: {
            climate: "Tropical in South, Monsoonal in North",
            avgTemperature: "24.4°C",
            annualRainfall: "1,821 mm",
            highestPoint: "Fansipan (3,147 m)",
            lowestPoint: "South China Sea (0 m)",
            coastline: "3,444 km",
            forestCover: "42%",
            arableLand: "22.6%",
            terrain: "Low flat delta in south and north; central highlands; hilly mountains in far north and northwest",
            naturalResources: ["Phosphates", "Coal", "Manganese", "Rare Earth Elements", "Bauxite", "Chromate", "Offshore Oil & Gas", "Timber", "Hydropower"]
        },

        geography_links: {
            rivers: ["Mekong River (Cửu Long)", "Red River (Sông Hồng)", "Đồng Nai River", "Mã River", "Cả River"],
            mountains: ["Fansipan", "Hoang Lien Son Range", "Annamite Range", "Central Highlands", "Ngọc Linh"],
            deserts: [],
            forests: ["Phong Nha-Kẻ Bàng", "Cát Tiên National Park", "Cúc Phương National Park", "Ba Vì National Park"],
            oceans: ["South China Sea (East Sea)", "Gulf of Thailand", "Gulf of Tonkin"]
        },

        culture: {
            officialLanguages: ["Vietnamese"],
            languages: ["Vietnamese", "English", "French", "Chinese", "Khmer", "Mountain Area Languages"],
            religions: ["Folk Religion (45%)", "Buddhism (16%)", "Christianity (8%)", "Cao Dai (4%)", "Hoa Hao (2%)", "No Religion (30%)"],
            heritageSites: ["Ha Long Bay", "Hoi An Ancient Town", "My Son Sanctuary", "Complex of Hué Monuments", "Phong Nha-Kẻ Bàng National Park", "Imperial Citadel of Thăng Long", "Citadel of the Hồ Dynasty", "Tràng An Landscape Complex"],
            festivals: ["Tết (Lunar New Year)", "Mid-Autumn Festival", "Hùng Kings Festival", "Vesak", "Liberation Day", "National Day"],
            cuisine: ["Phở", "Bánh Mì", "Bún Chả", "Gỏi Cuốn (Spring Rolls)", "Cơm Tấm", "Bánh Xèo", "Cà Phê Sữa Đá", "Chả Cá"],
            arts: ["Water Puppetry (Múa Rối Nước)", "Cải Lương (Folk Opera)", "Áo Dài", "Lacquerware", "Silk Painting", "Traditional Music", "Đờn Ca Tài Tử"],
            sports: ["Football", "Martial Arts (Vovinam)", "Badminton", "Table Tennis", "Swimming", "Chess"]
        },

        symbols: {
            bird: "None Official",
            animal: "Water Buffalo",
            flower: "Lotus",
            tree: "Bamboo",
            anthem: "Tiến Quân Ca (The Song of the Marching Troops)",
            motto: "Độc lập – Tự do – Hạnh phúc (Independence – Freedom – Happiness)"
        },

        demographics: {
            lifeExpectancy: 75.77,
            literacyRate: "95.8%",
            urbanPopulation: "38.8%",
            medianAge: 32.5
        },

        history: {
            timeline: [
                { year: "2879 BCE", title: "Hồng Bàng Dynasty", description: "Legendary founding of Vietnam" },
                { year: "111 BCE", title: "Chinese Rule", description: "1,000 years of Chinese domination began" },
                { year: "938", title: "Independence", description: "Ngô Quyền defeated Chinese, independence restored" },
                { year: "1862", title: "French Colonization", description: "France began colonizing Vietnam" },
                { year: "1945", title: "Independence Declared", description: "Ho Chi Minh declared independence" },
                { year: "1954", title: "Điện Biên Phủ", description: "French defeat, Vietnam divided" },
                { year: "1955-1975", title: "Vietnam War", description: "War between North and South Vietnam" },
                { year: "1975", title: "Reunification", description: "North captured Saigon, country reunified" },
                { year: "1986", title: "Đổi Mới", description: "Economic reforms began" }
            ],
            notableFigures: ["Hồ Chí Minh", "Võ Nguyên Giáp", "Trần Hưng Đạo", "Lê Lợi", "Nguyễn Huệ", "Trưng Sisters"]
        },

        disputes: [
            { name: "South China Sea", description: "Spratly Islands and Paracel Islands disputes with China", type: "Maritime" }
        ],

        quickFacts: [
            { icon: "coffee", title: "Coffee Giant", text: "World's 2nd largest coffee exporter" },
            { icon: "motorcycle", title: "Motorbike Nation", text: "Over 45 million motorbikes, most per capita" },
            { icon: "water", title: "Ha Long Bay", text: "UNESCO site with 1,600+ limestone islands" },
            { icon: "seedling", title: "Rice Exporter", text: "Top 5 global rice exporter" },
            { icon: "money-bill", title: "Economic Growth", text: "One of fastest growing economies globally" },
            { icon: "utensils", title: "Phở", text: "National dish recognized worldwide" }
        ]
    },
        // 12. CHINA
    {
        id: "CHN",
        name: "China",
        officialName: "People's Republic of China",
        flag: "https://flagcdn.com/w320/cn.png",
        
        images: {
            hero: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=1920&q=80",
            landscape: "https://images.unsplash.com/photo-1513415756790-2ac1db1297d0?w=1920&q=80",
            city: "https://images.unsplash.com/photo-1474181487882-5abf3f0ba6c2?w=1920&q=80"
        },

        basic: {
            capital: "Beijing",
            continent: "Asia",
            region: "East Asia",
            subregion: "Eastern Asia",
            population: 1425671352,
            area: 9596960,
            populationDensity: 153,
            independence: "221 BCE (Unified)",
            callingCode: "+86",
            tld: ".cn",
            drivingSide: "Right",
            electricity: "220V, 50Hz"
        },

        location: {
            coordinates: [35.8617, 104.1954],
            timezone: "UTC+8 (CST - All China)",
            neighbors: ["Russia", "Mongolia", "North Korea", "Vietnam", "Laos", "Myanmar", "India", "Bhutan", "Nepal", "Pakistan", "Afghanistan", "Tajikistan", "Kyrgyzstan", "Kazakhstan"],
            borders: 22147,
            hemispheres: ["Northern", "Eastern"]
        },

        political: {
            government: "Unitary Marxist-Leninist One-Party Socialist Republic",
            headOfState: "President Xi Jinping",
            headOfGovernment: "Premier Li Qiang",
            cpGenSecretary: "General Secretary Xi Jinping",
            legislature: "National People's Congress",
            legalSystem: "Socialist Legal System with Chinese Characteristics",
            provinces: 23,
            autonomousRegions: 5,
            municipalities: 4,
            specialAdminRegions: 2,
            largestCity: "Shanghai",
            organizations: ["UN (P5)", "BRICS", "SCO", "G20", "WTO", "APEC", "AIIB"]
        },

        economy: {
            gdp: "$18.53 Trillion",
            gdpPPP: "$33.01 Trillion",
            gdpPerCapita: "$12,970",
            gdpRank: "#2",
            gdpGrowth: "5.2%",
            currency: "Renminbi (Chinese Yuan)",
            currencyCode: "CNY",
            currencySymbol: "¥",
            inflation: "0.2%",
            unemployment: "5.2%",
            majorSectors: ["Services (54%)", "Industry (39%)", "Agriculture (7%)"],
            industries: ["Mining", "Iron & Steel", "Aluminum", "Coal", "Machinery", "Textiles & Apparel", "Petroleum", "Cement", "Chemicals", "Fertilizers", "Consumer Electronics", "Automobiles", "Ships", "Trains", "Telecommunications", "Commercial Space Launch"],
            exports: ["Electronics", "Machinery", "Textiles", "Furniture", "Plastics", "Vehicles", "Iron & Steel", "Optical & Medical Equipment"],
            imports: ["Crude Petroleum", "Integrated Circuits", "Iron Ore", "Natural Gas", "Soybeans", "Copper"]
        },

        geography: {
            climate: "Extremely Diverse: Tropical to Subarctic",
            avgTemperature: "6.9°C (varies widely)",
            annualRainfall: "645 mm (varies widely)",
            highestPoint: "Mount Everest (8,848.86 m) - with Nepal",
            lowestPoint: "Turpan Pendi (-154 m)",
            coastline: "14,500 km",
            forestCover: "23%",
            arableLand: "11.3%",
            terrain: "Mountains, high plateaus, deserts in west; plains, deltas, hills in east",
            naturalResources: ["Coal", "Iron Ore", "Petroleum", "Natural Gas", "Mercury", "Tin", "Tungsten", "Antimony", "Manganese", "Molybdenum", "Vanadium", "Magnetite", "Aluminum", "Lead", "Zinc", "Rare Earth Elements", "Uranium", "Hydropower"]
        },

        geography_links: {
            rivers: ["Yangtze River", "Yellow River (Huang He)", "Pearl River", "Mekong (Lancang)", "Heilongjiang (Amur)", "Brahmaputra (Yarlung Tsangpo)"],
            mountains: ["Himalayas", "Kunlun Mountains", "Tian Shan", "Karakoram", "Altai Mountains", "Qinling Mountains", "Hengduan Mountains"],
            deserts: ["Gobi Desert", "Taklamakan Desert", "Badain Jaran Desert", "Tengger Desert", "Ordos Desert"],
            forests: ["Northeast China Forests", "Tropical Rainforests (Yunnan)", "Bamboo Forests", "Temperate Forests"],
            oceans: ["Pacific Ocean", "East China Sea", "South China Sea", "Yellow Sea", "Bohai Sea"]
        },

        culture: {
            officialLanguages: ["Standard Chinese (Mandarin)"],
            languages: ["Mandarin", "Cantonese", "Wu (Shanghainese)", "Min", "Hakka", "Tibetan", "Uyghur", "Mongolian", "300+ languages"],
            religions: ["Folk Religion (21%)", "Buddhism (18%)", "Christianity (5%)", "Islam (2%)", "No Religion (52%)"],
            heritageSites: ["Great Wall of China", "Forbidden City", "Terracotta Army", "Potala Palace", "Summer Palace", "Temple of Heaven", "Mogao Caves", "Mount Huangshan", "Jiuzhaigou Valley", "Guilin Karst", "Giant Panda Sanctuaries"],
            festivals: ["Chinese New Year (Spring Festival)", "Mid-Autumn Festival", "Dragon Boat Festival", "Qingming Festival", "Lantern Festival", "National Day"],
            cuisine: ["Peking Duck", "Dim Sum", "Hot Pot", "Kung Pao Chicken", "Mapo Tofu", "Xiaolongbao", "Sweet and Sour Pork", "Chow Mein", "Dumplings (Jiaozi)", "Wonton"],
            arts: ["Chinese Calligraphy", "Brush Painting", "Peking Opera", "Chinese Martial Arts (Wushu)", "Silk Weaving", "Porcelain", "Paper Cutting", "Dragon Dance", "Tai Chi"],
            sports: ["Table Tennis", "Basketball", "Badminton", "Football", "Diving", "Gymnastics", "Martial Arts", "Volleyball"]
        },

        symbols: {
            bird: "Red-crowned Crane",
            animal: "Giant Panda",
            flower: "Plum Blossom (unofficial), Peony",
            tree: "Ginkgo",
            anthem: "March of the Volunteers",
            motto: "Serve the People"
        },

        demographics: {
            lifeExpectancy: 78.21,
            literacyRate: "96.8%",
            urbanPopulation: "64.7%",
            medianAge: 38.4
        },

        history: {
            timeline: [
                { year: "2070 BCE", title: "Xia Dynasty", description: "First Chinese dynasty (semi-legendary)" },
                { year: "221 BCE", title: "Qin Dynasty", description: "First unified Chinese empire under Qin Shi Huang" },
                { year: "206 BCE - 220 CE", title: "Han Dynasty", description: "Golden age, Silk Road established" },
                { year: "618-907", title: "Tang Dynasty", description: "Cultural and artistic golden age" },
                { year: "1271-1368", title: "Yuan Dynasty", description: "Mongol rule under Kublai Khan" },
                { year: "1368-1644", title: "Ming Dynasty", description: "Great Wall rebuilt, Forbidden City built" },
                { year: "1644-1912", title: "Qing Dynasty", description: "Last imperial dynasty" },
                { year: "1912", title: "Republic", description: "Republic of China established" },
                { year: "1949", title: "PRC Founded", description: "People's Republic of China established" },
                { year: "1978", title: "Economic Reform", description: "Deng Xiaoping's reform and opening up" }
            ],
            notableFigures: ["Qin Shi Huang", "Confucius", "Laozi", "Sun Yat-sen", "Mao Zedong", "Deng Xiaoping", "Zheng He", "Li Bai", "Du Fu"]
        },

        disputes: [
            { name: "Taiwan", description: "Claims Taiwan as part of China", type: "Territory" },
            { name: "South China Sea", description: "Nine-dash line claims disputed by multiple nations", type: "Maritime" },
            { name: "Aksai Chin", description: "Controlled by China, claimed by India", type: "Territory" },
            { name: "Arunachal Pradesh", description: "Claimed by China as South Tibet", type: "Border" },
            { name: "Senkaku/Diaoyu Islands", description: "Dispute with Japan", type: "Territory" }
        ],

        quickFacts: [
            { icon: "users", title: "Most Populous", text: "World's most populous country (1.4+ billion)" },
            { icon: "industry", title: "Manufacturing", text: "World's largest manufacturer and exporter" },
            { icon: "monument", title: "Great Wall", text: "21,196 km total length, built over 2,000 years" },
            { icon: "panda", title: "Giant Panda", text: "Native habitat of giant pandas" },
            { icon: "train", title: "High-Speed Rail", text: "World's largest high-speed rail network (45,000+ km)" },
            { icon: "rocket", title: "Space Power", text: "3rd country to independently send humans to space" },
            { icon: "history", title: "Ancient Civilization", text: "5,000+ years of continuous civilization" }
        ]
    },

    // 13. JAPAN
    {
        id: "JPN",
        name: "Japan",
        officialName: "Japan",
        flag: "https://flagcdn.com/w320/jp.png",
        
        images: {
            hero: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=1920&q=80",
            landscape: "https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?w=1920&q=80",
            city: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=1920&q=80"
        },

        basic: {
            capital: "Tokyo",
            continent: "Asia",
            region: "East Asia",
            subregion: "Eastern Asia",
            population: 123294513,
            area: 377975,
            populationDensity: 347,
            independence: "660 BCE (Traditional)",
            callingCode: "+81",
            tld: ".jp",
            drivingSide: "Left",
            electricity: "100V, 50/60Hz"
        },

        location: {
            coordinates: [36.2048, 138.2529],
            timezone: "UTC+9 (JST)",
            neighbors: [],
            borders: 0,
            hemispheres: ["Northern", "Eastern"],
            islandNation: true,
            islands: 6852
        },

        political: {
            government: "Unitary Parliamentary Constitutional Monarchy",
            headOfState: "Emperor Naruhito",
            headOfGovernment: "Prime Minister Shigeru Ishiba",
            legislature: "National Diet (House of Councillors & House of Representatives)",
            legalSystem: "Civil Law (German influence)",
            prefectures: 47,
            largestCity: "Tokyo",
            organizations: ["UN", "G7", "G20", "OECD", "APEC", "WTO", "ASEAN+3"]
        },

        economy: {
            gdp: "$4.23 Trillion",
            gdpPPP: "$6.49 Trillion",
            gdpPerCapita: "$33,950",
            gdpRank: "#4",
            gdpGrowth: "1.9%",
            currency: "Japanese Yen",
            currencyCode: "JPY",
            currencySymbol: "¥",
            inflation: "3.3%",
            unemployment: "2.6%",
            majorSectors: ["Services (70%)", "Industry (29%)", "Agriculture (1%)"],
            industries: ["Motor Vehicles", "Electronic Equipment", "Machine Tools", "Steel & Nonferrous Metals", "Ships", "Chemicals", "Textiles", "Processed Foods", "Robotics", "Semiconductors", "Optical Instruments"],
            exports: ["Motor Vehicles", "Machinery", "Electronics", "Iron & Steel Products", "Plastics", "Optical & Medical Instruments"],
            imports: ["Petroleum", "Liquefied Natural Gas", "Clothing", "Semiconductors", "Coal", "Pharmaceuticals", "Food"]
        },

        geography: {
            climate: "Varies from Cool Temperate to Subtropical",
            avgTemperature: "15.3°C",
            annualRainfall: "1,668 mm",
            highestPoint: "Mount Fuji (3,776 m)",
            lowestPoint: "Hachirōgata (-4 m)",
            coastline: "29,751 km",
            forestCover: "68.5%",
            arableLand: "11.7%",
            terrain: "Mostly rugged and mountainous",
            naturalResources: ["Fish", "Limited Mineral Resources", "Small amounts of Coal, Oil, Iron Ore, Copper, Sulfur, Gold"]
        },

        geography_links: {
            rivers: ["Shinano River", "Tone River", "Ishikari River", "Kitakami River", "Mogami River"],
            mountains: ["Mount Fuji", "Japanese Alps (Hida, Kiso, Akaishi)", "Mount Hotaka", "Mount Kita", "Mount Yari"],
            deserts: [],
            forests: ["Temperate Rainforests", "Coniferous Forests", "Yakushima Cedar Forest", "Shirakami-Sanchi"],
            oceans: ["Pacific Ocean", "Sea of Japan", "East China Sea", "Philippine Sea", "Sea of Okhotsk"]
        },

        culture: {
            officialLanguages: ["Japanese"],
            languages: ["Japanese", "Ryukyuan Languages", "Ainu"],
            religions: ["Shinto (70% practice)", "Buddhism (67% practice)", "Christianity (1.5%)", "No Religion (62% identify)"],
            heritageSites: ["Historic Monuments of Ancient Kyoto", "Hiroshima Peace Memorial", "Historic Villages of Shirakawa-go", "Himeji Castle", "Itsukushima Shrine", "Mount Fuji", "Nara", "Nikko", "Sacred Sites of Kii Mountains"],
            festivals: ["Gion Matsuri", "Awa Odori", "Nebuta Matsuri", "Hanami (Cherry Blossom)", "Obon", "Tanabata", "New Year (Shogatsu)"],
            cuisine: ["Sushi", "Ramen", "Tempura", "Udon", "Sashimi", "Tonkatsu", "Okonomiyaki", "Takoyaki", "Miso Soup", "Wagyu Beef", "Matcha"],
            arts: ["Ikebana", "Origami", "Kabuki", "Noh Theatre", "Ukiyo-e", "Calligraphy", "Bonsai", "Anime & Manga", "Tea Ceremony (Sadō)"],
            sports: ["Baseball", "Sumo", "Football", "Martial Arts (Judo, Karate, Kendo, Aikido)", "Tennis", "Figure Skating"]
        },

        symbols: {
            bird: "Green Pheasant",
            animal: "None Official (Japanese Macaque often associated)",
            flower: "Cherry Blossom (Sakura), Chrysanthemum (Imperial)",
            tree: "Cherry Tree (Sakura)",
            anthem: "Kimigayo",
            motto: "None Official"
        },

        demographics: {
            lifeExpectancy: 84.62,
            literacyRate: "99%",
            urbanPopulation: "91.8%",
            medianAge: 48.6
        },

        history: {
            timeline: [
                { year: "660 BCE", title: "Foundation", description: "Traditional founding by Emperor Jimmu" },
                { year: "710", title: "Nara Period", description: "First permanent capital at Nara" },
                { year: "794", title: "Heian Period", description: "Capital moved to Kyoto (Heian-kyō)" },
                { year: "1185", title: "Kamakura Shogunate", description: "Samurai rule began" },
                { year: "1603", title: "Edo Period", description: "Tokugawa Shogunate, 250 years of peace" },
                { year: "1868", title: "Meiji Restoration", description: "Modernization and industrialization began" },
                { year: "1945", title: "WWII End", description: "Atomic bombs; Japan surrendered" },
                { year: "1947", title: "New Constitution", description: "Democratic constitution adopted" },
                { year: "1964", title: "Tokyo Olympics", description: "First Olympics in Asia" }
            ],
            notableFigures: ["Emperor Meiji", "Tokugawa Ieyasu", "Oda Nobunaga", "Toyotomi Hideyoshi", "Matsuo Bashō", "Hokusai", "Kurosawa Akira", "Miyazaki Hayao"]
        },

        disputes: [
            { name: "Kuril Islands", description: "Northern Territories dispute with Russia", type: "Territory" },
            { name: "Senkaku/Diaoyu Islands", description: "Dispute with China and Taiwan", type: "Territory" },
            { name: "Takeshima/Dokdo", description: "Dispute with South Korea", type: "Territory" }
        ],

        quickFacts: [
            { icon: "train", title: "Shinkansen", text: "Bullet trains reach 320 km/h, 99.3% punctual" },
            { icon: "sun", title: "Land of Rising Sun", text: "Called Nihon/Nippon meaning 'sun origin'" },
            { icon: "mountain", title: "Mount Fuji", text: "Iconic sacred volcano, 3,776 m high" },
            { icon: "gamepad", title: "Gaming Giant", text: "Birthplace of Nintendo, Sony PlayStation, Sega" },
            { icon: "book", title: "Manga & Anime", text: "$25+ billion industry with global influence" },
            { icon: "robot", title: "Robotics Leader", text: "World's largest industrial robot manufacturer" },
            { icon: "clock", title: "Aging Population", text: "World's oldest population (median age 48.6)" }
        ]
    },

    // 14. MONGOLIA
    {
        id: "MNG",
        name: "Mongolia",
        officialName: "Mongolia",
        flag: "https://flagcdn.com/w320/mn.png",
        
        images: {
            hero: "https://images.unsplash.com/photo-1545708644-23f3b8c12aef?w=1920&q=80",
            landscape: "https://images.unsplash.com/photo-1575408264798-b50b252663e6?w=1920&q=80",
            city: "https://images.unsplash.com/photo-1586698020893-6337c191e0e6?w=1920&q=80"
        },

        basic: {
            capital: "Ulaanbaatar",
            continent: "Asia",
            region: "East Asia",
            subregion: "Eastern Asia",
            population: 3447157,
            area: 1564116,
            populationDensity: 2.2,
            independence: "1921",
            callingCode: "+976",
            tld: ".mn",
            drivingSide: "Right",
            electricity: "230V, 50Hz"
        },

        location: {
            coordinates: [46.8625, 103.8467],
            timezone: "UTC+7/+8 (HOVT/ULAT)",
            neighbors: ["Russia", "China"],
            borders: 8082,
            hemispheres: ["Northern", "Eastern"]
        },

        political: {
            government: "Unitary Semi-Presidential Republic",
            headOfState: "President Ukhnaagiin Khürelsükh",
            headOfGovernment: "Prime Minister Luvsannamsrai Oyun-Erdene",
            legislature: "State Great Khural",
            legalSystem: "Civil Law",
            aimags: 21,
            capital: 1,
            largestCity: "Ulaanbaatar",
            organizations: ["UN", "WTO", "OSCE (Partner)", "SCO (Observer)", "NAM"]
        },

        economy: {
            gdp: "$19.87 Billion",
            gdpPPP: "$54.02 Billion",
            gdpPerCapita: "$5,731",
            gdpRank: "#117",
            gdpGrowth: "7.0%",
            currency: "Mongolian Tögrög",
            currencyCode: "MNT",
            currencySymbol: "₮",
            inflation: "10.3%",
            unemployment: "5.1%",
            majorSectors: ["Services (47%)", "Industry (34%)", "Agriculture (11%)"],
            industries: ["Mining (Coal, Copper, Molybdenum, Gold, Tin)", "Oil", "Food & Beverages", "Processing of Animal Products", "Construction Materials"],
            exports: ["Copper", "Gold", "Coal", "Iron Ore", "Crude Petroleum", "Fluorspar", "Zinc", "Cashmere"],
            imports: ["Machinery", "Fuel", "Cars", "Food Products", "Industrial Consumer Goods", "Chemicals"]
        },

        geography: {
            climate: "Continental; Extreme Temperature Variations",
            avgTemperature: "-0.4°C",
            annualRainfall: "241 mm",
            highestPoint: "Khüiten Peak (4,374 m)",
            lowestPoint: "Hoh Nuur (560 m)",
            coastline: "0 km (Landlocked)",
            forestCover: "8.1%",
            arableLand: "0.4%",
            terrain: "Vast semidesert and desert plains; grassy steppe; mountains in west and southwest; Gobi Desert in south-central",
            naturalResources: ["Oil", "Coal", "Copper", "Molybdenum", "Tungsten", "Phosphates", "Tin", "Nickel", "Zinc", "Fluorspar", "Gold", "Silver", "Iron"]
        },

        geography_links: {
            rivers: ["Selenge River", "Orkhon River", "Tuul River", "Kherlen River", "Onon River"],
            mountains: ["Altai Mountains", "Khangai Mountains", "Khentii Mountains", "Sayan Mountains", "Khüiten Peak"],
            deserts: ["Gobi Desert"],
            forests: ["Siberian Taiga (Northern Mongolia)", "Larch Forests", "Mountain Forests"],
            oceans: []
        },

        culture: {
            officialLanguages: ["Mongolian"],
            languages: ["Mongolian", "Kazakh", "Russian", "English"],
            religions: ["Buddhism (53%)", "Non-Religious (39%)", "Islam (3%)", "Shamanism (2.9%)", "Christianity (2.1%)"],
            heritageSites: ["Orkhon Valley Cultural Landscape", "Great Burkhan Khaldun Mountain and Surrounding Sacred Landscape", "Petroglyphic Complexes of the Mongolian Altai"],
            festivals: ["Naadam Festival", "Tsagaan Sar (Lunar New Year)", "Eagle Festival", "Ice Festival"],
            cuisine: ["Khorkhog", "Buuz", "Khuushuur", "Airag (Fermented Mare's Milk)", "Boodog", "Tsuivan", "Aaruul"],
            arts: ["Throat Singing (Khoomei)", "Morin Khuur (Horse-head Fiddle)", "Traditional Long Song (Urtyn Duu)", "Felt Making", "Traditional Dance"],
            sports: ["Wrestling (Bökh)", "Horse Racing", "Archery", "Basketball", "Football"]
        },

        symbols: {
            bird: "Saker Falcon",
            animal: "Przewalski's Horse (Takhi)",
            flower: "Scabiosa",
            tree: "None Official",
            anthem: "Mongol Ulsyn Töriin Duulal",
            motto: "None Official"
        },

        demographics: {
            lifeExpectancy: 71.08,
            literacyRate: "98.4%",
            urbanPopulation: "68.8%",
            medianAge: 29.8
        },

        history: {
            timeline: [
                { year: "209 BCE", title: "Xiongnu Empire", description: "First nomadic empire in Central Asia" },
                { year: "1206", title: "Mongol Empire", description: "Genghis Khan unified Mongol tribes" },
                { year: "1279", title: "Yuan Dynasty", description: "Kublai Khan conquered China" },
                { year: "1368", title: "Fall of Yuan", description: "Mongols expelled from China" },
                { year: "1691", title: "Qing Rule", description: "Outer Mongolia under Qing China" },
                { year: "1911", title: "Independence Declared", description: "Declared independence from China" },
                { year: "1921", title: "Mongolian Revolution", description: "With Soviet help, established independence" },
                { year: "1924", title: "MPR Founded", description: "Mongolian People's Republic declared" },
                { year: "1990", title: "Democratic Revolution", description: "Peaceful transition to democracy" }
            ],
            notableFigures: ["Genghis Khan", "Kublai Khan", "Ögedei Khan", "Sukhbaatar", "Choibalsan"]
        },

        disputes: [],

        quickFacts: [
            { icon: "users", title: "Least Dense", text: "World's least densely populated country (2.2/km²)" },
            { icon: "horse", title: "Horse Culture", text: "More horses than people (4+ million horses)" },
            { icon: "tent", title: "Nomadic Heritage", text: "30% still live nomadic or semi-nomadic lifestyle" },
            { icon: "crown", title: "Genghis Khan", text: "Birthplace of Genghis Khan and Mongol Empire" },
            { icon: "wind", title: "Blue Sky", text: "Called 'Land of the Eternal Blue Sky' (250+ sunny days)" },
            { icon: "map", title: "Landlocked", text: "World's 2nd largest landlocked country" }
        ]
    },
        // 15. NORTH KOREA
    {
        id: "PRK",
        name: "North Korea",
        officialName: "Democratic People's Republic of Korea",
        flag: "https://flagcdn.com/w320/kp.png",
        
        images: {
            hero: "https://images.unsplash.com/photo-1581512050157-584b8e11e1d6?w=1920&q=80",
            landscape: "https://images.unsplash.com/photo-1558167789-5c5c3c8c1e29?w=1920&q=80",
            city: "https://images.unsplash.com/photo-1547388461-a5e6d0d5a5c3?w=1920&q=80"
        },

        basic: {
            capital: "Pyongyang",
            continent: "Asia",
            region: "East Asia",
            subregion: "Eastern Asia",
            population: 26072217,
            area: 120538,
            populationDensity: 214,
            independence: "1948",
            callingCode: "+850",
            tld: ".kp",
            drivingSide: "Right",
            electricity: "220V, 50Hz"
        },

        location: {
            coordinates: [40.3399, 127.5101],
            timezone: "UTC+9 (KST)",
            neighbors: ["South Korea", "China", "Russia"],
            borders: 1607,
            hemispheres: ["Northern", "Eastern"]
        },

        political: {
            government: "Unitary One-Party Socialist Republic (Juche ideology)",
            headOfState: "Supreme Leader Kim Jong-un",
            headOfGovernment: "Premier Kim Tok-hun",
            legislature: "Supreme People's Assembly",
            legalSystem: "Civil Law (Korean and Communist influence)",
            provinces: 9,
            municipalities: 3,
            largestCity: "Pyongyang",
            organizations: ["UN", "NAM", "G77"]
        },

        economy: {
            gdp: "$18 Billion (estimated)",
            gdpPPP: "$40 Billion (estimated)",
            gdpPerCapita: "$700 (estimated)",
            gdpRank: "#Unknown",
            gdpGrowth: "-0.1% (estimated)",
            currency: "North Korean Won",
            currencyCode: "KPW",
            currencySymbol: "₩",
            inflation: "Unknown",
            unemployment: "Unknown",
            majorSectors: ["Industry (47%)", "Services (34%)", "Agriculture (22%)"],
            industries: ["Military Products", "Mining (Coal, Iron Ore, Limestone, Magnesite, Graphite, Copper, Zinc, Lead)", "Metallurgy", "Textiles", "Food Processing", "Machine Building", "Cement"],
            exports: ["Minerals", "Metallurgical Products", "Textiles", "Agricultural & Fishery Products"],
            imports: ["Petroleum", "Coking Coal", "Machinery & Equipment", "Textiles", "Grain"]
        },

        geography: {
            climate: "Temperate; Rainy Season (Summer)",
            avgTemperature: "9.5°C",
            annualRainfall: "1,054 mm",
            highestPoint: "Paektu Mountain (2,744 m)",
            lowestPoint: "Sea of Japan (0 m)",
            coastline: "2,495 km",
            forestCover: "39.6%",
            arableLand: "19.5%",
            terrain: "Mostly hills and mountains; coastal plains in west",
            naturalResources: ["Coal", "Iron Ore", "Limestone", "Magnesite", "Graphite", "Copper", "Zinc", "Lead", "Precious Metals", "Hydropower"]
        },

        geography_links: {
            rivers: ["Yalu River (Amnok)", "Tumen River (Tuman)", "Taedong River", "Chongchon River"],
            mountains: ["Paektu Mountain", "Myohyang Mountains", "Kumgang Mountains", "Taebaek Mountains", "Rangrim Mountains"],
            deserts: [],
            forests: ["Temperate Mixed Forests", "Coniferous Forests", "Mount Paektu Forest"],
            oceans: ["Sea of Japan (East Sea)", "Yellow Sea", "Korea Bay"]
        },

        culture: {
            officialLanguages: ["Korean"],
            languages: ["Korean"],
            religions: ["State Atheism (Officially)", "Traditional Korean Religion", "Chondoism", "Buddhism (Historically)"],
            heritageSites: ["Complex of Koguryo Tombs", "Historic Monuments and Sites in Kaesong"],
            festivals: ["Day of the Sun (Kim Il-sung Birthday)", "Day of the Shining Star (Kim Jong-il Birthday)", "Foundation Day", "Victory Day", "Party Foundation Day"],
            cuisine: ["Naengmyeon (Cold Noodles)", "Kimchi", "Japchae", "Mandu", "Bibimbap", "Sinsollo"],
            arts: ["Revolutionary Opera", "Mass Games (Arirang)", "Mansudae Art Studio", "Korean Folk Music", "Revolutionary Literature"],
            sports: ["Football", "Table Tennis", "Weightlifting", "Gymnastics", "Wrestling", "Mass Games"]
        },

        symbols: {
            bird: "Northern Goshawk",
            animal: "Chollima (Mythical Winged Horse)",
            flower: "Magnolia (Mokran)",
            tree: "Pine",
            anthem: "Aegukka (Patriotic Song)",
            motto: "Powerful and Prosperous Nation"
        },

        demographics: {
            lifeExpectancy: 72.89,
            literacyRate: "100% (claimed)",
            urbanPopulation: "62.9%",
            medianAge: 35.3
        },

        history: {
            timeline: [
                { year: "2333 BCE", title: "Gojoseon", description: "Legendary founding of first Korean kingdom" },
                { year: "37 BCE", title: "Goguryeo", description: "Goguryeo kingdom founded" },
                { year: "918", title: "Goryeo", description: "Korean peninsula unified under Goryeo" },
                { year: "1392", title: "Joseon Dynasty", description: "Joseon dynasty began, lasted 500 years" },
                { year: "1910", title: "Japanese Rule", description: "Japan annexed Korea" },
                { year: "1945", title: "Division", description: "Korea divided at 38th parallel" },
                { year: "1948", title: "DPRK Founded", description: "Kim Il-sung established DPRK" },
                { year: "1950-1953", title: "Korean War", description: "Korean War, 3 million+ died" },
                { year: "2006", title: "Nuclear Test", description: "First nuclear test conducted" }
            ],
            notableFigures: ["Kim Il-sung", "Kim Jong-il", "Kim Jong-un", "Kim Gu"]
        },

        disputes: [
            { name: "Korean Peninsula", description: "Technically still at war with South Korea (1953 armistice)", type: "Territory" },
            { name: "Northern Limit Line", description: "Maritime boundary dispute with South Korea", type: "Maritime" }
        ],

        quickFacts: [
            { icon: "lock", title: "Most Isolated", text: "World's most isolated country, 'Hermit Kingdom'" },
            { icon: "user-secret", title: "Cult of Personality", text: "Kim family worshipped as divine rulers" },
            { icon: "bomb", title: "Nuclear State", text: "Declared nuclear weapons state" },
            { icon: "mountain", title: "Paektu Mountain", text: "Sacred mountain, claimed birthplace of Kim Jong-il" },
            { icon: "ban", title: "No Internet", text: "No public internet access; internal intranet only" },
            { icon: "flag", title: "DMZ", text: "Korean DMZ is most heavily militarized border" }
        ]
    },

    // 16. SOUTH KOREA (WITH BTS SPECIAL CONTENT)
    {
        id: "KOR",
        name: "South Korea",
        officialName: "Republic of Korea",
        flag: "https://flagcdn.com/w320/kr.png",
        
        images: {
            hero: "https://images.unsplash.com/photo-1562673797-7b189fbc6f20?w=1920&q=80",
            landscape: "https://images.unsplash.com/photo-1548115184-bc6544d06a58?w=1920&q=80",
            city: "https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?w=1920&q=80",
            bts_group: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=1920&q=80",
            bts_concert: "https://images.unsplash.com/photo-1619229725920-ac8bf37bb4aa?w=1920&q=80",
            kpop_culture: "https://images.unsplash.com/photo-1617886322168-72b886573c5d?w=1920&q=80"
        },

        basic: {
            capital: "Seoul",
            continent: "Asia",
            region: "East Asia",
            subregion: "Eastern Asia",
            population: 51784059,
            area: 100210,
            populationDensity: 527,
            independence: "1945 (Liberation), 1948 (Republic)",
            callingCode: "+82",
            tld: ".kr",
            drivingSide: "Right",
            electricity: "220V, 60Hz"
        },

        location: {
            coordinates: [35.9078, 127.7669],
            timezone: "UTC+9 (KST)",
            neighbors: ["North Korea"],
            borders: 237,
            hemispheres: ["Northern", "Eastern"]
        },

        political: {
            government: "Unitary Presidential Constitutional Republic",
            headOfState: "President Yoon Suk-yeol",
            headOfGovernment: "Prime Minister Han Duck-soo",
            legislature: "National Assembly",
            legalSystem: "Mixed (Civil Law and Common Law)",
            provinces: 9,
            metropolitanCities: 6,
            specialCities: 1,
            specialSelfGoverning: 2,
            largestCity: "Seoul",
            organizations: ["UN", "G20", "OECD", "APEC", "WTO", "ASEAN+3", "MIKTA"]
        },

        economy: {
            gdp: "$1.71 Trillion",
            gdpPPP: "$2.92 Trillion",
            gdpPerCapita: "$33,147",
            gdpRank: "#12",
            gdpGrowth: "1.4%",
            currency: "South Korean Won",
            currencyCode: "KRW",
            currencySymbol: "₩",
            inflation: "3.6%",
            unemployment: "2.6%",
            majorSectors: ["Services (57%)", "Industry (33%)", "Agriculture (2%)"],
            industries: ["Electronics", "Telecommunications", "Automobile Production", "Chemicals", "Shipbuilding", "Steel", "Semiconductors", "Display Technology", "Robotics", "K-Pop & Entertainment"],
            exports: ["Semiconductors", "Automobiles", "Petroleum Products", "Ships", "Electronics", "Wireless Communication Equipment", "Steel", "Plastics"],
            imports: ["Crude Petroleum", "Semiconductors", "Natural Gas", "Coal", "Refined Petroleum", "Computers"]
        },

        geography: {
            climate: "Temperate with Four Distinct Seasons",
            avgTemperature: "13°C",
            annualRainfall: "1,274 mm",
            highestPoint: "Hallasan (1,950 m)",
            lowestPoint: "Sea of Japan (0 m)",
            coastline: "2,413 km",
            forestCover: "63.9%",
            arableLand: "15.3%",
            terrain: "Mostly hills and mountains; wide coastal plains in west and south",
            naturalResources: ["Coal", "Tungsten", "Graphite", "Molybdenum", "Lead", "Hydropower"]
        },

        geography_links: {
            rivers: ["Han River", "Nakdong River", "Geum River", "Yeongsan River", "Seomjin River"],
            mountains: ["Hallasan", "Jirisan", "Seoraksan", "Taebaek Mountains", "Sobaek Mountains"],
            deserts: [],
            forests: ["Temperate Forests", "Seoraksan National Park", "Jirisan National Park", "Hallasan National Park"],
            oceans: ["Yellow Sea", "Sea of Japan (East Sea)", "Korea Strait"]
        },

        culture: {
            officialLanguages: ["Korean"],
            languages: ["Korean", "English (widely studied)"],
            religions: ["No Religion (56%)", "Protestantism (20%)", "Buddhism (16%)", "Catholicism (8%)"],
            heritageSites: ["Changdeokgung Palace", "Hwaseong Fortress", "Jongmyo Shrine", "Bulguksa Temple", "Seokguram Grotto", "Haeinsa Temple", "Gochang, Hwasun, and Ganghwa Dolmen Sites", "Gyeongju Historic Areas", "Jeju Volcanic Island and Lava Tubes", "Historic Villages of Korea: Hahoe and Yangdong"],
            festivals: ["Seollal (Lunar New Year)", "Chuseok (Harvest Festival)", "Boryeong Mud Festival", "Jinju Lantern Festival", "Seoul Lantern Festival", "KCON"],
            cuisine: ["Kimchi", "Bibimbap", "Bulgogi", "Samgyeopsal", "Korean BBQ", "Japchae", "Tteokbokki", "Samgyetang", "Jjajangmyeon", "Korean Fried Chicken", "Soju"],
            arts: ["K-Pop", "K-Drama", "K-Cinema", "Traditional Pansori", "Gayageum", "Taekwondo", "Hanbok", "Celadon Pottery", "Buddhist Art"],
            sports: ["Taekwondo", "Baseball", "Football", "Golf", "Esports", "Basketball", "Archery", "Short Track Speed Skating"]
        },

        // ============================================
        // BTS SPECIAL SECTION
        // ============================================
        bts: {
            introduction: {
                name: "BTS (방탄소년단)",
                fullName: "Bangtan Sonyeondan / Beyond The Scene",
                formed: "June 13, 2013",
                company: "Big Hit Entertainment (now HYBE Corporation)",
                fandomName: "ARMY (Adorable Representative M.C. for Youth)",
                description: "BTS is a South Korean boy band that has achieved unprecedented global success, breaking numerous records and becoming cultural ambassadors for Korea worldwide.",
                globalImpact: "First K-pop act to top Billboard Hot 100, Grammy-nominated artists, UN speakers, and cultural phenomenon bridging East and West"
            },

            members: [
                {
                    stageName: "RM",
                    realName: "Kim Nam-joon (김남준)",
                    birthDate: "September 12, 1994",
                    birthPlace: "Ilsan, Goyang, South Korea",
                    position: ["Leader", "Main Rapper"],
                    height: "181 cm",
                    image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800&q=80",
                    facts: [
                        "IQ of 148 (genius level)",
                        "Self-taught English from watching 'Friends'",
                        "Art and museum enthusiast",
                        "Solo album 'Indigo' released 2022",
                        "Environmental advocate",
                        "Known for philosophical lyrics",
                        "UN General Assembly speaker (multiple times)",
                        "Loves cycling and visiting art galleries"
                    ],
                    soloWorks: ["mono.", "Indigo", "Right Place, Wrong Person"],
                    quote: "I have come to love myself for who I am, for who I was, and for who I hope to become."
                },
                {
                    stageName: "Jin",
                    realName: "Kim Seok-jin (김석진)",
                    birthDate: "December 4, 1992",
                    birthPlace: "Gwacheon, Gyeonggi Province, South Korea",
                    position: ["Vocalist", "Visual"],
                    height: "179 cm",
                    image: "https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?w=800&q=80",
                    facts: [
                        "Eldest member (worldwide handsome)",
                        "Graduated from Konkuk University (Film major)",
                        "Master of dad jokes",
                        "Excellent cook and fishing enthusiast",
                        "First member to enlist in military (December 2022)",
                        "Owns a Japanese restaurant 'Ossu Seiromushi'",
                        "Known for broad shoulders",
                        "Gaming enthusiast (MapleStory)"
                    ],
                    soloWorks: ["Awake", "Epiphany", "Moon", "Abyss", "The Astronaut", "Super Tuna"],
                    quote: "Even if it's a road of thorns, we still run."
                },
                {
                    stageName: "Suga",
                    realName: "Min Yoon-gi (민윤기)",
                    birthDate: "March 9, 1993",
                    birthPlace: "Daegu, South Korea",
                    position: ["Lead Rapper", "Producer"],
                    alsoKnownAs: "Agust D",
                    height: "174 cm",
                    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80",
                    facts: [
                        "Prolific producer and songwriter",
                        "Battle rap background before BTS",
                        "Worked through poverty and depression",
                        "Piano prodigy since childhood",
                        "Known for savage wit",
                        "NBA basketball fan",
                        "Collaborated with Halsey, IU, PSY",
                        "First BTS member solo world tour (D-DAY)"
                    ],
                    soloWorks: ["Agust D", "D-2", "D-DAY", "Daechwita", "Haegeum"],
                    quote: "Dream, though your beginnings may be humble, may the end be prosperous."
                },
                {
                    stageName: "J-Hope",
                    realName: "Jung Ho-seok (정호석)",
                    birthDate: "February 18, 1994",
                    birthPlace: "Gwangju, South Korea",
                    position: ["Main Dancer", "Sub Rapper", "Sub Vocalist"],
                    height: "177 cm",
                    image: "https://images.unsplash.com/photo-1611162618479-ee4d14736a91?w=800&q=80",
                    facts: [
                        "Sunshine of the group",
                        "Champion street dancer before BTS",
                        "Fashion icon with unique style",
                        "First Korean solo to headline Lollapalooza",
                        "Known for positive energy",
                        "Dance teacher for other members",
                        "Donated over $1 million to charity",
                        "Nicknamed 'Dance Machine'"
                    ],
                    soloWorks: ["Hope World", "Jack In The Box", "Chicken Noodle Soup ft. Becky G", "Arson", "MORE"],
                    quote: "I'm your hope, you're my hope, I'm J-Hope!"
                },
                {
                    stageName: "Jimin",
                    realName: "Park Ji-min (박지민)",
                    birthDate: "October 13, 1995",
                    birthPlace: "Busan, South Korea",
                    position: ["Main Dancer", "Lead Vocalist"],
                    height: "173.6 cm",
                    image: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=800&q=80",
                    facts: [
                        "Contemporary dance background",
                        "Graduated top of Busan High School of Arts",
                        "Known for stunning stage presence",
                        "First Korean soloist to top Billboard Hot 100 ('Like Crazy')",
                        "Most followed K-pop idol on Instagram",
                        "Perfectionist in performances",
                        "Famous for 'Jimin effect' (items he wears sell out)",
                        "Deeply caring personality"
                    ],
                    soloWorks: ["FACE", "Like Crazy", "Set Me Free Pt. 2", "Lie", "Serendipity", "Filter"],
                    quote: "Go on your path, even if you live for a day."
                },
                {
                    stageName: "V",
                    realName: "Kim Tae-hyung (김태형)",
                    birthDate: "December 30, 1995",
                    birthPlace: "Daegu, South Korea",
                    position: ["Lead Dancer", "Sub Vocalist", "Visual"],
                    height: "179 cm",
                    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&q=80",
                    facts: [
                        "Known for unique deep voice",
                        "Actor in K-drama 'Hwarang'",
                        "Professional photographer",
                        "Art collector and enthusiast",
                        "Has pet dog named Yeontan",
                        "Close friends with Wooga Squad (Park Seo-joon, etc.)",
                        "Named 'Most Handsome Face' multiple times",
                        "Jazz and classical music lover"
                    ],
                    soloWorks: ["Layover", "Slow Dancing", "Rainy Days", "Stigma", "Singularity", "Winter Bear", "Sweet Night", "FRI(END)S"],
                    quote: "I want to be someone who is genuinely happy and makes others happy."
                },
                {
                    stageName: "Jungkook",
                    realName: "Jeon Jung-kook (전정국)",
                    birthDate: "September 1, 1997",
                    birthPlace: "Busan, South Korea",
                    position: ["Main Vocalist", "Lead Dancer", "Sub Rapper", "Center", "Maknae"],
                    height: "179 cm",
                    image: "https://images.unsplash.com/photo-1611162618758-c6b97bb82b5e?w=800&q=80",
                    facts: [
                        "Youngest member (Golden Maknae)",
                        "Multi-talented: singing, dancing, sports, art",
                        "FIFA World Cup Qatar 2022 performer ('Dreamers')",
                        "Most followed person on Instagram (50M+)",
                        "Trained at Big Hit since age 15",
                        "Tattoo enthusiast",
                        "Boxing and workout enthusiast",
                        "First Korean solo artist to reach #1 in UK"
                    ],
                    soloWorks: ["GOLDEN", "Seven ft. Latto", "3D ft. Jack Harlow", "Standing Next to You", "Euphoria", "My Time", "Still With You", "Dreamers"],
                    quote: "Rather than worrying about the future, live in the present."
                }
            ],

            achievements: [
                { year: "2013", achievement: "Debut with single '2 Cool 4 Skool'" },
                { year: "2016", achievement: "First Korean act to win Billboard Music Award" },
                { year: "2017", achievement: "First K-pop act to perform at American Music Awards" },
                { year: "2018", achievement: "First K-pop act to top Billboard 200 ('Love Yourself: Tear')" },
                { year: "2018", achievement: "Spoke at United Nations General Assembly" },
                { year: "2019", achievement: "First K-pop act to present at Grammy Awards" },
                { year: "2020", achievement: "First K-pop act to top Billboard Hot 100 ('Dynamite')" },
                { year: "2020", achievement: "First Korean Grammy nomination (Best Pop Duo/Group)" },
                { year: "2021", achievement: "Three #1 Billboard Hot 100 songs in one year" },
                { year: "2021", achievement: "UN Special Presidential Envoy for Future Generations and Culture" },
                { year: "2022", achievement: "White House visit to discuss anti-Asian hate" },
                { year: "2022", achievement: "Free concert in Busan to support World Expo bid (52,000 attendees)" },
                { year: "2023", achievement: "All members enlisted for military service" },
                { year: "2023-2024", achievement: "Solo member activities with multiple Billboard #1s" }
            ],

            discography: {
                koreanAlbums: [
                    "2 Cool 4 Skool (2013)",
                    "O!RUL8,2? (2013)",
                    "Skool Luv Affair (2014)",
                    "Dark&Wild (2014)",
                    "The Most Beautiful Moment in Life, Pt. 1 (2015)",
                    "The Most Beautiful Moment in Life, Pt. 2 (2015)",
                    "The Most Beautiful Moment in Life: Young Forever (2016)",
                    "Wings (2016)",
                    "You Never Walk Alone (2017)",
                    "Love Yourself: Her (2017)",
                    "Love Yourself: Tear (2018)",
                    "Love Yourself: Answer (2018)",
                    "Map of the Soul: Persona (2019)",
                    "Map of the Soul: 7 (2020)",
                    "BE (2020)",
                    "Proof (2022)"
                ],
                iconicSongs: [
                    "Dynamite (First English single, Billboard #1)",
                    "Butter (10 weeks at Billboard #1)",
                    "Boy With Luv ft. Halsey",
                    "Blood Sweat & Tears",
                    "DNA",
                    "Fake Love",
                    "IDOL",
                    "Spring Day",
                    "Black Swan",
                    "Life Goes On",
                    "Permission to Dance",
                    "Yet To Come"
                ]
            },

            records: [
                "Most streamed group on Spotify",
                "Most YouTube subscribers for any music act",
                "Fastest to reach 10 million followers on TikTok",
                "Most Twitter engagements for any music group",
                "Best-selling artists in South Korean history",
                "First Asian act to be nominated for main Grammy categories",
                "Most wins at Billboard Music Awards (24)",
                "Most streamed K-pop act on Apple Music",
                "Highest-grossing concert tour by Korean act",
                "First K-pop act on Spotify's top 5 most-streamed artists globally"
            ],

            militaryService: {
                announcement: "October 2022 - All members to complete mandatory military service",
                schedule: [
                    { member: "Jin", enlisted: "December 13, 2022", expectedDischarge: "June 2024", status: "Discharged June 12, 2024" },
                    { member: "J-Hope", enlisted: "April 18, 2023", expectedDischarge: "October 2024", status: "Active" },
                    { member: "Suga", enlisted: "September 22, 2023", expectedDischarge: "June 2025", status: "Active (Social Service)" },
                    { member: "RM", enlisted: "December 11, 2023", expectedDischarge: "June 2025", status: "Active" },
                    { member: "V", enlisted: "December 11, 2023", expectedDischarge: "June 2025", status: "Active" },
                    { member: "Jimin", enlisted: "December 12, 2023", expectedDischarge: "June 2025", status: "Active" },
                    { member: "Jungkook", enlisted: "December 12, 2023", expectedDischarge: "June 2025", status: "Active" }
                ],
                expectedGroupReunion: "2025"
            },

            socialImpact: [
                "UNICEF 'Love Myself' campaign - donated $3.6 million to end violence",
                "Black Lives Matter donation - matched $1 million from ARMY",
                "COVID-19 relief donations",
                "Anti-Asian hate awareness at White House",
                "Environmental advocacy",
                "Mental health awareness through music",
                "Youth empowerment messages",
                "Korean language learning boom (Hallyu effect)"
            ],

            economicImpact: {
                annualContribution: "$5 billion to South Korean economy",
                tourismBoost: "800,000+ tourists visit Korea due to BTS",
                jobsCreated: "8,000+ direct jobs",
                brandValue: "Estimated $10+ billion brand value",
                stockImpact: "HYBE market cap $8+ billion"
            }
        },

        symbols: {
            bird: "Korean Magpie",
            animal: "Siberian Tiger",
            flower: "Rose of Sharon (Mugunghwa)",
            tree: "Pine Tree",
            anthem: "Aegukga (Patriotic Song)",
            motto: "Hongik Ingan (Benefit Broadly the Human World)"
        },

        demographics: {
            lifeExpectancy: 83.73,
            literacyRate: "99%",
            urbanPopulation: "81.4%",
            medianAge: 44.9
        },

        history: {
            timeline: [
                { year: "2333 BCE", title: "Gojoseon", description: "Legendary founding of first Korean kingdom" },
                { year: "57 BCE", title: "Three Kingdoms", description: "Goguryeo, Baekje, and Silla period began" },
                { year: "668", title: "Silla Unification", description: "Silla unified Korean peninsula" },
                { year: "918", title: "Goryeo Dynasty", description: "Origin of name 'Korea'" },
                { year: "1392", title: "Joseon Dynasty", description: "500-year dynasty; Hangul created" },
                { year: "1910", title: "Japanese Occupation", description: "Japan annexed Korea" },
                { year: "1945", title: "Liberation", description: "Korea liberated from Japan" },
                { year: "1948", title: "Republic Founded", description: "Republic of Korea established" },
                { year: "1950-1953", title: "Korean War", description: "Devastating war; remains divided" },
                { year: "1960s-1990s", title: "Miracle on Han River", description: "Rapid industrialization" },
                { year: "1988", title: "Seoul Olympics", description: "Showcased Korea to the world" },
                { year: "2002", title: "FIFA World Cup", description: "Co-hosted with Japan, reached semifinals" },
                { year: "2018", title: "PyeongChang Olympics", description: "Hosted Winter Olympics" }
            ],
            notableFigures: ["King Sejong the Great", "Admiral Yi Sun-sin", "Syngman Rhee", "Park Chung-hee", "Kim Dae-jung", "Ban Ki-moon"]
        },

        kpopCulture: {
            overview: "K-pop is a major cultural export and cornerstone of the Korean Wave (Hallyu)",
            majorLabels: ["HYBE (Big Hit)", "SM Entertainment", "JYP Entertainment", "YG Entertainment"],
            globalImpact: [
                "K-pop industry worth $10+ billion",
                "Korean Wave contributes $12.3 billion annually",
                "150+ million K-pop fans worldwide",
                "K-pop academies in 30+ countries",
                "Korean language learning increased 40% due to K-pop"
            ],
            otherNotableActs: ["BLACKPINK", "EXO", "TWICE", "Stray Kids", "SEVENTEEN", "NewJeans", "aespa", "NCT", "Red Velvet", "Girls' Generation", "BIGBANG", "2NE1", "PSY"]
        },

        disputes: [
            { name: "Korean Peninsula", description: "Technically still at war with North Korea", type: "Territory" },
            { name: "Dokdo/Takeshima", description: "Dispute with Japan over islands", type: "Territory" },
            { name: "KADIZ", description: "Air defense zone overlaps with China and Japan", type: "Maritime" }
        ],

        quickFacts: [
            { icon: "music", title: "K-Pop & BTS", text: "Home of BTS, the world's biggest boy band" },
            { icon: "microchip", title: "Tech Giant", text: "Samsung, LG, Hyundai headquarters" },
            { icon: "graduation-cap", title: "Education", text: "Highest tertiary education rate globally" },
            { icon: "bolt", title: "Internet Speed", text: "Among fastest internet speeds in world" },
            { icon: "gamepad", title: "Esports Capital", text: "Birthplace of professional esports" },
            { icon: "utensils", title: "Korean Cuisine", text: "Kimchi, Korean BBQ, and K-food global phenomenon" },
            { icon: "tv", title: "K-Drama", text: "Korean dramas watched by 100M+ worldwide" },
            { icon: "spa", title: "K-Beauty", text: "$10 billion K-beauty industry" }
        ]
    }
];

// Export for Node.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CountriesData2;
}

// Export for Browser
if (typeof window !== 'undefined') {
    window.CountriesData2 = CountriesData2;
}
