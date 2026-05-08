/**
 * DharaVerse Encyclopedia - Country Data File 12
 * Contains: FIFA Territories + Olympic NOCs NOT in UN membership
 * FIFA Extra Members (beyond UN 193+2): 16 territories
 * Olympic Extra NOCs (beyond UN 193+2): Some overlap with FIFA extras
 * Total: 26 entries
 * Version: 1.0
 */

const CountriesData12 = [

    // ============================================
    // FIFA & OLYMPIC TERRITORIES — ASIA/OCEANIA
    // ============================================

    // 1. HONG KONG
    {
        id: "HKG",
        name: "Hong Kong",
        officialName: "Hong Kong Special Administrative Region of China",
        flag: "https://flagcdn.com/w320/hk.png",

        images: {
            hero: "https://images.unsplash.com/photo-1536599018102-9f803c140fc1?w=1920&q=80",
            landscape: "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=1920&q=80",
            city: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80"
        },

        basic: {
            capital: "Victoria City (de facto)",
            continent: "Asia",
            region: "East Asia",
            subregion: "Eastern Asia",
            population: 7491609,
            area: 1114,
            populationDensity: 6777,
            independence: "SAR of China since 1997",
            callingCode: "+852",
            tld: ".hk",
            drivingSide: "Left",
            electricity: "220V, 50Hz"
        },

        location: {
            coordinates: [22.3193, 114.1694],
            timezone: "UTC+8 (HKT)",
            neighbors: ["China (Mainland)"],
            borders: 33,
            hemispheres: ["Northern", "Eastern"]
        },

        political: {
            government: "Special Administrative Region of China (One Country, Two Systems)",
            headOfState: "President of China (Xi Jinping)",
            headOfGovernment: "Chief Executive John Lee",
            legislature: "Legislative Council",
            legalSystem: "Common Law (British tradition)",
            districts: 18,
            largestCity: "Kowloon",
            organizations: ["FIFA", "IOC", "WTO (separate)", "APEC"]
        },

        economy: {
            gdp: "$368.6 Billion",
            gdpPPP: "$529.7 Billion",
            gdpPerCapita: "$49,225",
            gdpRank: "#36",
            gdpGrowth: "3.2%",
            currency: "Hong Kong Dollar",
            currencyCode: "HKD",
            currencySymbol: "HK$",
            inflation: "2.1%",
            unemployment: "3.0%",
            majorSectors: ["Services (93%)", "Industry (7%)", "Agriculture (<1%)"],
            industries: ["Financial Services", "Trade & Logistics", "Tourism", "Professional Services", "Innovation & Technology"],
            exports: ["Electronics", "Electrical Machinery", "Gold", "Jewelry", "Optical Equipment"],
            imports: ["Electronics", "Foodstuffs", "Consumer Goods", "Raw Materials", "Petroleum"]
        },

        geography: {
            climate: "Subtropical; Hot & Humid Summers, Mild Winters",
            avgTemperature: "23.5°C",
            annualRainfall: "2,398 mm",
            highestPoint: "Tai Mo Shan (958 m)",
            lowestPoint: "South China Sea (0 m)",
            coastline: "733 km",
            forestCover: "25%",
            arableLand: "6.6%",
            terrain: "Hilly to mountainous with steep slopes; coastal lowlands",
            naturalResources: ["Outstanding Deepwater Harbour", "Feldspar"]
        },

        geography_links: {
            rivers: ["Sham Chun River", "Lam Tsuen River"],
            mountains: ["Tai Mo Shan", "Lantau Peak", "Victoria Peak", "Ma On Shan"],
            deserts: [],
            forests: ["Tai Po Kau Nature Reserve", "Shing Mun Country Park", "Lantau Forest"],
            oceans: ["South China Sea", "Pearl River Estuary"]
        },

        culture: {
            officialLanguages: ["Chinese (Cantonese)", "English"],
            languages: ["Cantonese", "English", "Mandarin", "Putonghua"],
            religions: ["Buddhism & Taoism (27%)", "Christianity (12%)", "No Religion (61%)"],
            heritageSites: ["Hong Kong UNESCO Creative City of Design"],
            festivals: ["Chinese New Year", "Ching Ming Festival", "Dragon Boat Festival", "Mid-Autumn Festival", "Tuen Ng Festival"],
            cuisine: ["Dim Sum", "Wonton Noodles", "Char Siu", "Pineapple Bun", "Egg Waffle", "Hong Kong-style Milk Tea", "Roast Goose"],
            arts: ["Cantonese Opera", "Lion Dance", "Contemporary Art", "Film (Hong Kong Cinema)", "Street Art"],
            sports: ["Rugby Sevens", "Football", "Basketball", "Table Tennis", "Badminton", "Dragon Boat Racing"]
        },

        symbols: {
            bird: "Black-faced Spoonbill",
            animal: "Chinese White Dolphin",
            flower: "Bauhinia blakeana (Hong Kong Orchid Tree)",
            tree: "Bauhinia blakeana",
            anthem: "March of the Volunteers (PRC national anthem used)",
            motto: "None Official"
        },

        demographics: {
            lifeExpectancy: 85.29,
            literacyRate: "94.6%",
            urbanPopulation: "100%",
            medianAge: 47.3
        },

        history: {
            timeline: [
                { year: "1842", title: "British Colony", description: "Ceded to Britain after First Opium War" },
                { year: "1898", title: "New Territories", description: "New Territories leased to Britain for 99 years" },
                { year: "1941-1945", title: "Japanese Occupation", description: "Japan occupied during WWII" },
                { year: "1984", title: "Sino-British Declaration", description: "Agreement for handover in 1997" },
                { year: "1997", title: "Handover", description: "Returned to China as SAR" },
                { year: "2019", title: "Protests", description: "Major pro-democracy protests" },
                { year: "2020", title: "National Security Law", description: "NSL imposed by Beijing" }
            ],
            notableFigures: ["Bruce Lee", "Jackie Chan", "Anson Chan", "Carrie Lam", "Tung Chee-hwa"]
        },

        disputes: [
            { name: "One Country Two Systems", description: "Erosion of autonomy under 2020 National Security Law", type: "Political" }
        ],

        membershipStatus: {
            un: false,
            fifa: true,
            fifaMember: true,
            olympics: true,
            iocCode: "HKG",
            note: "Competes separately from mainland China in FIFA and Olympics"
        },

        quickFacts: [
            { icon: "city", title: "Financial Hub", text: "One of world's top 3 financial centres" },
            { icon: "ship", title: "Container Port", text: "One of world's busiest container ports" },
            { icon: "building", title: "Skyscrapers", text: "Most skyscrapers per capita in the world" },
            { icon: "train", title: "MTR", text: "One of world's most efficient metro systems (99.9% on time)" },
            { icon: "flag", title: "One Country Two", text: "Unique 'One Country, Two Systems' model" }
        ]
    },

    // 2. MACAU
    {
        id: "MAC",
        name: "Macau",
        officialName: "Macao Special Administrative Region of China",
        flag: "https://flagcdn.com/w320/mo.png",

        images: {
            hero: "https://images.unsplash.com/photo-1523625080684-f5e97d3e8394?w=1920&q=80",
            landscape: "https://images.unsplash.com/photo-1527269534026-c86f4009eace?w=1920&q=80",
            city: "https://images.unsplash.com/photo-1588123190131-1c3fac394f4b?w=1920&q=80"
        },

        basic: {
            capital: "Macau",
            continent: "Asia",
            region: "East Asia",
            subregion: "Eastern Asia",
            population: 695168,
            area: 32.9,
            populationDensity: 21340,
            independence: "SAR of China since 1999",
            callingCode: "+853",
            tld: ".mo",
            drivingSide: "Left",
            electricity: "220V, 50Hz"
        },

        location: {
            coordinates: [22.1987, 113.5439],
            timezone: "UTC+8 (CST)",
            neighbors: ["China (Mainland)", "Hong Kong"],
            borders: 3,
            hemispheres: ["Northern", "Eastern"]
        },

        political: {
            government: "Special Administrative Region of China",
            headOfState: "President of China (Xi Jinping)",
            headOfGovernment: "Chief Executive Sam Hou Fai",
            legislature: "Legislative Assembly",
            legalSystem: "Civil Law (Portuguese tradition)",
            parishes: 7,
            largestCity: "Macau",
            organizations: ["FIFA", "WTO (separate)"]
        },

        economy: {
            gdp: "$44.8 Billion",
            gdpPPP: "$83.1 Billion",
            gdpPerCapita: "$65,500",
            gdpRank: "#90",
            gdpGrowth: "80% (post-COVID recovery 2023)",
            currency: "Macanese Pataca",
            currencyCode: "MOP",
            currencySymbol: "P",
            inflation: "1.0%",
            unemployment: "2.3%",
            majorSectors: ["Gaming & Tourism (80%)", "Services (20%)", "Industry (<1%)"],
            industries: ["Gambling", "Tourism", "Financial Services", "Textile & Garments", "Electronics"],
            exports: ["Textiles", "Garments", "Footwear"],
            imports: ["Consumer Goods", "Construction Materials", "Motor Vehicles", "Foodstuffs", "Beverages & Tobacco"]
        },

        geography: {
            climate: "Subtropical; Hot Humid Summers, Mild Winters",
            avgTemperature: "22.3°C",
            annualRainfall: "2,000 mm",
            highestPoint: "Coloane Alto (172.4 m)",
            lowestPoint: "South China Sea (0 m)",
            coastline: "41 km",
            forestCover: "0%",
            arableLand: "0%",
            terrain: "Generally flat",
            naturalResources: ["Negligible"]
        },

        geography_links: {
            rivers: [],
            mountains: ["Coloane Alto"],
            deserts: [],
            forests: [],
            oceans: ["South China Sea", "Pearl River Delta"]
        },

        culture: {
            officialLanguages: ["Chinese (Cantonese)", "Portuguese"],
            languages: ["Cantonese", "Portuguese", "Mandarin", "English", "Macanese Patois"],
            religions: ["Buddhism (50%)", "Christianity (15%)", "No Religion (35%)"],
            heritageSites: ["Historic Centre of Macao (UNESCO)"],
            festivals: ["Chinese New Year", "Feast of the Drunken Dragon", "Macau Grand Prix", "International Music Festival"],
            cuisine: ["African Chicken", "Minchi", "Caldo Verde", "Egg Tart (Pastel de Nata)", "Pork Chop Bun"],
            arts: ["Macanese Culture", "Portuguese-Chinese Fusion Art", "Lion Dance"],
            sports: ["Football", "Athletics", "Cycling", "Shooting", "Macau Grand Prix"]
        },

        symbols: {
            bird: "None Official",
            animal: "None Official",
            flower: "Lotus",
            tree: "None Official",
            anthem: "March of the Volunteers",
            motto: "None Official"
        },

        demographics: {
            lifeExpectancy: 84.68,
            literacyRate: "96.5%",
            urbanPopulation: "100%",
            medianAge: 40.8
        },

        history: {
            timeline: [
                { year: "1557", title: "Portuguese Settlement", description: "Portuguese established trading post" },
                { year: "1887", title: "Portuguese Colony", description: "Officially became Portuguese colony" },
                { year: "1999", title: "Handover to China", description: "Returned to China as SAR" },
                { year: "2002", title: "Casino Liberalization", description: "Gaming monopoly ended, boom began" }
            ],
            notableFigures: ["Stanley Ho", "Edmund Ho", "Fernando Chui"]
        },

        disputes: [],

        membershipStatus: {
            un: false,
            fifa: true,
            fifaMember: true,
            olympics: false,
            note: "FIFA member; competes separately from mainland China"
        },

        quickFacts: [
            { icon: "dice", title: "Casino Capital", text: "World's largest gambling revenue (beats Las Vegas 5x)" },
            { icon: "flag", title: "Portuguese Heritage", text: "Portuguese colony for 400+ years" },
            { icon: "users", title: "Most Dense", text: "World's most densely populated territory" },
            { icon: "trophy", title: "Grand Prix", text: "Hosts Formula 3 Macau Grand Prix" }
        ]
    },

    // 3. CHINESE TAIPEI (TAIWAN)
    {
        id: "TPE",
        name: "Chinese Taipei",
        officialName: "Chinese Taipei (Taiwan)",
        flag: "https://flagcdn.com/w320/tw.png",

        images: {
            hero: "https://images.unsplash.com/photo-1470004914212-05527e49370b?w=1920&q=80",
            landscape: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=1920&q=80",
            city: "https://images.unsplash.com/photo-1549692520-acc6669e2f0c?w=1920&q=80"
        },

        basic: {
            capital: "Taipei",
            continent: "Asia",
            region: "East Asia",
            subregion: "Eastern Asia",
            population: 23570000,
            area: 36193,
            populationDensity: 655,
            independence: "Self-governing since 1949",
            callingCode: "+886",
            tld: ".tw",
            drivingSide: "Right",
            electricity: "110V, 60Hz"
        },

        location: {
            coordinates: [23.6978, 120.9605],
            timezone: "UTC+8 (NST)",
            neighbors: [],
            borders: 0,
            hemispheres: ["Northern", "Eastern"],
            islandNation: true
        },

        political: {
            government: "Semi-Presidential Republic (self-governing)",
            headOfState: "President Lai Ching-te",
            headOfGovernment: "Premier Cho Jung-tai",
            legislature: "Legislative Yuan",
            legalSystem: "Civil Law (German influence)",
            specialMunicipalities: 6,
            counties: 13,
            largestCity: "New Taipei City",
            organizations: ["FIFA (as Chinese Taipei)", "IOC (as Chinese Taipei)", "WTO", "APEC"]
        },

        economy: {
            gdp: "$756.9 Billion",
            gdpPPP: "$1.59 Trillion",
            gdpPerCapita: "$32,786",
            gdpRank: "#22",
            gdpGrowth: "1.3%",
            currency: "New Taiwan Dollar",
            currencyCode: "TWD",
            currencySymbol: "NT$",
            inflation: "2.5%",
            unemployment: "3.5%",
            majorSectors: ["Services (62%)", "Industry (36%)", "Agriculture (2%)"],
            industries: ["Electronics", "Semiconductor Manufacturing", "Petrochemicals", "Machinery", "Textiles", "Plastics", "Automotive", "ICT"],
            exports: ["Semiconductors", "Electronics", "Petroleum Products", "Machinery", "Plastics", "Metals"],
            imports: ["Petroleum", "Semiconductors", "Natural Gas", "Coal", "Machinery", "Electronics"]
        },

        geography: {
            climate: "Tropical in South, Subtropical in North",
            avgTemperature: "22°C",
            annualRainfall: "2,500 mm",
            highestPoint: "Yushan (3,952 m)",
            lowestPoint: "Pacific Ocean (0 m)",
            coastline: "1,566 km",
            forestCover: "60%",
            arableLand: "22%",
            terrain: "Eastern two-thirds mountainous; flat to gently rolling plains in west",
            naturalResources: ["Small Deposits of Coal", "Natural Gas", "Limestone", "Marble", "Asbestos", "Arable Land"]
        },

        geography_links: {
            rivers: ["Zhuoshui River", "Gaoping River", "Tamsui River", "Beigang River"],
            mountains: ["Yushan (Jade Mountain)", "Snow Mountain", "Sylvia Hill", "Mount Hehuan", "Ali Mountain"],
            deserts: [],
            forests: ["Alishan National Scenic Area", "Yushan National Park", "Taroko National Park"],
            oceans: ["Pacific Ocean", "Taiwan Strait", "South China Sea", "East China Sea"]
        },

        culture: {
            officialLanguages: ["Mandarin Chinese"],
            languages: ["Mandarin", "Taiwanese (Hokkien)", "Hakka", "Formosan Languages"],
            religions: ["Buddhism (35%)", "Taoism (33%)", "Christianity (3.9%)", "Yiguandao (3.5%)", "No Religion (24%)"],
            heritageSites: ["Taroko National Park", "Alishan Forest Railway"],
            festivals: ["Lantern Festival", "Dragon Boat Festival", "Ghost Festival", "Double Ten National Day", "Mid-Autumn Festival"],
            cuisine: ["Beef Noodle Soup", "Scallion Pancake", "Oyster Omelette", "Stinky Tofu", "Bubble Tea (Invented here)", "Braised Pork Rice", "Night Market Food"],
            arts: ["Traditional Chinese Opera", "Cloud Gate Dance Theatre", "Contemporary Art", "Indigenous Arts", "Puppetry"],
            sports: ["Baseball (National Sport)", "Basketball", "Football", "Badminton", "Taekwondo", "Table Tennis"]
        },

        symbols: {
            bird: "Taiwan Blue Magpie",
            animal: "Formosan Black Bear",
            flower: "Plum Blossom",
            tree: "None Official",
            anthem: "National Anthem of the ROC (as Chinese Taipei, IOC anthem used)",
            motto: "None Official"
        },

        demographics: {
            lifeExpectancy: 81.04,
            literacyRate: "98.7%",
            urbanPopulation: "79.6%",
            medianAge: 43.0
        },

        history: {
            timeline: [
                { year: "1624", title: "Dutch Rule", description: "Dutch East India Company established colony" },
                { year: "1683", title: "Qing Dynasty", description: "Became part of Qing China" },
                { year: "1895", title: "Japanese Rule", description: "Ceded to Japan after Sino-Japanese War" },
                { year: "1945", title: "Return to China", description: "Returned to Republic of China after WWII" },
                { year: "1949", title: "ROC Retreat", description: "ROC government retreated after civil war" },
                { year: "1971", title: "UN Seat Lost", description: "PRC replaced ROC in UN" },
                { year: "1996", title: "First Direct Election", description: "First direct presidential election" }
            ],
            notableFigures: ["Chiang Kai-shek", "Lee Teng-hui", "Sun Yat-sen", "Tsai Ing-wen"]
        },

        disputes: [
            { name: "Cross-Strait Relations", description: "PRC claims Taiwan as its territory", type: "Territory" },
            { name: "South China Sea", description: "Claims overlap in South China Sea", type: "Maritime" }
        ],

        membershipStatus: {
            un: false,
            fifa: true,
            fifaMember: true,
            fifaName: "Chinese Taipei",
            olympics: true,
            iocCode: "TPE",
            iocName: "Chinese Taipei",
            note: "Competes as 'Chinese Taipei' in international sports due to PRC objections"
        },

        quickFacts: [
            { icon: "microchip", title: "Chip Powerhouse", text: "TSMC makes 90% of world's most advanced chips" },
            { icon: "cup-straw", title: "Bubble Tea", text: "Invented bubble tea (boba) in 1980s" },
            { icon: "mountain", title: "Jade Mountain", text: "Yushan is higher than Japanese Alps" },
            { icon: "train", title: "High Speed Rail", text: "HSR connects north to south in 90 minutes" }
        ]
    },

    // 4. GUAM
    {
        id: "GUM",
        name: "Guam",
        officialName: "Guam (Territory of the United States)",
        flag: "https://flagcdn.com/w320/gu.png",

        images: {
            hero: "https://images.unsplash.com/photo-1590080876351-41869c704571?w=1920&q=80",
            landscape: "https://images.unsplash.com/photo-1591089575455-4a419fcbc77d?w=1920&q=80",
            city: "https://images.unsplash.com/photo-1582719408609-09985be9be23?w=1920&q=80"
        },

        basic: {
            capital: "Hagåtña",
            continent: "Oceania",
            region: "Micronesia",
            subregion: "Micronesia",
            population: 168485,
            area: 544,
            populationDensity: 312,
            independence: "US Unincorporated Territory",
            callingCode: "+1-671",
            tld: ".gu",
            drivingSide: "Right",
            electricity: "110V, 60Hz"
        },

        location: {
            coordinates: [13.4443, 144.7937],
            timezone: "UTC+10 (ChST)",
            neighbors: [],
            borders: 0,
            hemispheres: ["Northern", "Eastern"],
            islandNation: true
        },

        political: {
            government: "Unincorporated Territory of the United States",
            headOfState: "President of the United States",
            headOfGovernment: "Governor Lou Leon Guerrero",
            legislature: "Guam Legislature",
            legalSystem: "US Law",
            municipalities: 19,
            largestCity: "Dededo",
            organizations: ["FIFA", "IOC"]
        },

        economy: {
            gdp: "$6.91 Billion",
            gdpPPP: "$6.91 Billion",
            gdpPerCapita: "$40,000",
            gdpRank: "N/A",
            gdpGrowth: "2.5%",
            currency: "United States Dollar",
            currencyCode: "USD",
            currencySymbol: "$",
            inflation: "4.0%",
            unemployment: "4.5%",
            majorSectors: ["Tourism (50%)", "US Military (25%)", "Services (25%)"],
            industries: ["Tourism", "US Military Operations", "Construction", "Transshipment"],
            exports: ["Transshipments", "Foods & Beverages"],
            imports: ["Petroleum", "Food", "Manufactured Goods"]
        },

        geography: {
            climate: "Tropical Marine; Generally Warm and Humid",
            avgTemperature: "27.9°C",
            annualRainfall: "2,100 mm",
            highestPoint: "Mount Lamlam (406 m)",
            lowestPoint: "Pacific Ocean (0 m)",
            coastline: "125.5 km",
            forestCover: "27%",
            arableLand: "3.7%",
            terrain: "Volcanic origin; coral limestone plateau in north, low hills in center, low mountains in south",
            naturalResources: ["Aquatic Wildlife", "Forestry"]
        },

        geography_links: {
            rivers: [],
            mountains: ["Mount Lamlam", "Mount Sasalaguan", "Mount Bolanos"],
            deserts: [],
            forests: ["Ritidian Wildlife Refuge"],
            oceans: ["Philippine Sea", "Pacific Ocean", "Mariana Trench (nearby)"]
        },

        culture: {
            officialLanguages: ["English", "Chamorro"],
            languages: ["English", "Chamorro", "Filipino", "Korean", "Japanese"],
            religions: ["Roman Catholicism (85%)", "Protestantism (10%)", "Others (5%)"],
            heritageSites: ["War in the Pacific National Historical Park"],
            festivals: ["Liberation Day", "Guam Micronesia Island Fair", "Festival of Pacific Arts"],
            cuisine: ["Kelaguen", "Red Rice", "Tinaktak", "Kadu", "Lemmai", "Coconut Candy"],
            arts: ["Chamorro Weaving", "Coconut Art", "Traditional Dance", "Stick Dance"],
            sports: ["Football", "Basketball", "Volleyball", "Baseball", "Golf"]
        },

        symbols: {
            bird: "Ko'ko (Guam Rail)",
            animal: "None Official",
            flower: "Puti Tai Nobiu (Bougainvillea)",
            tree: "Ifit",
            anthem: "Star-Spangled Banner (US) / Fanohge Chamorro (territorial)",
            motto: "Where America's Day Begins"
        },

        demographics: {
            lifeExpectancy: 77.2,
            literacyRate: "99%",
            urbanPopulation: "95%",
            medianAge: 30.3
        },

        history: {
            timeline: [
                { year: "1521", title: "Magellan Arrived", description: "Ferdinand Magellan first European contact" },
                { year: "1668", title: "Spanish Colony", description: "Spain colonized island" },
                { year: "1898", title: "US Territory", description: "US took control after Spanish-American War" },
                { year: "1941-1944", title: "Japanese Occupation", description: "Japan occupied during WWII" },
                { year: "1944", title: "Liberation", description: "US forces liberated Guam" },
                { year: "1950", title: "US Citizenship", description: "Chamorro people granted US citizenship" }
            ],
            notableFigures: ["Joseph Flores Pangelinan", "Ricardo Bordallo", "Lou Leon Guerrero"]
        },

        disputes: [
            { name: "Status", description: "Movement for self-determination among Chamorro people", type: "Political" }
        ],

        membershipStatus: {
            un: false,
            fifa: true,
            fifaMember: true,
            olympics: true,
            iocCode: "GUM",
            note: "Competes separately from USA in FIFA and Olympics"
        },

        quickFacts: [
            { icon: "sun", title: "First Sunrise", text: "Known as 'Where America's Day Begins'" },
            { icon: "fighter-jet", title: "Military Hub", text: "Major US military strategic outpost in Pacific" },
            { icon: "water", title: "Mariana Trench", text: "Nearest land to world's deepest point" },
            { icon: "plane", title: "Tourism", text: "Major tourism destination for Japan and South Korea" }
        ]
    },

    // 5. PUERTO RICO
    {
        id: "PRI",
        name: "Puerto Rico",
        officialName: "Commonwealth of Puerto Rico",
        flag: "https://flagcdn.com/w320/pr.png",

        images: {
            hero: "https://images.unsplash.com/photo-1548574505-5e239809ee19?w=1920&q=80",
            landscape: "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=1920&q=80",
            city: "https://images.unsplash.com/photo-1559827291-72ee739d0d9a?w=1920&q=80"
        },

        basic: {
            capital: "San Juan",
            continent: "North America",
            region: "Caribbean",
            subregion: "Caribbean",
            population: 3221789,
            area: 9104,
            populationDensity: 354,
            independence: "US Commonwealth Territory",
            callingCode: "+1-787/939",
            tld: ".pr",
            drivingSide: "Right",
            electricity: "120V, 60Hz"
        },

        location: {
            coordinates: [18.2208, -66.5901],
            timezone: "UTC-4 (AST)",
            neighbors: [],
            borders: 0,
            hemispheres: ["Northern", "Western"],
            islandNation: true
        },

        political: {
            government: "Commonwealth (Unincorporated Organized Territory of the United States)",
            headOfState: "President of the United States",
            headOfGovernment: "Governor Jenniffer González-Colón",
            legislature: "Legislative Assembly (Senate & House)",
            legalSystem: "US Federal Law + Local Civil Law",
            municipalities: 78,
            largestCity: "San Juan",
            organizations: ["FIFA", "IOC", "ITF"]
        },

        economy: {
            gdp: "$117.9 Billion",
            gdpPPP: "$117.9 Billion",
            gdpPerCapita: "$36,597",
            gdpRank: "N/A",
            gdpGrowth: "3.0%",
            currency: "United States Dollar",
            currencyCode: "USD",
            currencySymbol: "$",
            inflation: "3.0%",
            unemployment: "6.0%",
            majorSectors: ["Pharmaceuticals (50%)", "Services (40%)", "Manufacturing (10%)"],
            industries: ["Pharmaceuticals", "Biotechnology", "Electronics", "Rum Production", "Medical Devices", "Tourism"],
            exports: ["Pharmaceuticals", "Electronics", "Medical Equipment", "Rum", "Perfumes"],
            imports: ["Chemicals", "Machinery", "Apparel", "Food", "Petroleum"]
        },

        geography: {
            climate: "Tropical Marine; Little Seasonal Temperature Variation",
            avgTemperature: "26°C",
            annualRainfall: "1,550 mm",
            highestPoint: "Cerro de Punta (1,339 m)",
            lowestPoint: "Caribbean Sea (0 m)",
            coastline: "501 km",
            forestCover: "67%",
            arableLand: "6.7%",
            terrain: "Mostly mountainous with coastal plain belt",
            naturalResources: ["Copper", "Nickel", "Potential for Oil & Natural Gas"]
        },

        geography_links: {
            rivers: ["Río de la Plata", "Río Loíza", "Río Grande de Arecibo", "Río Grande de Añasco"],
            mountains: ["Cerro de Punta", "El Yunque (Caribbean National Forest)", "Cordillera Central"],
            deserts: ["Guánica Dry Forest"],
            forests: ["El Yunque National Forest", "Bosque Estatal de Toro Negro"],
            oceans: ["Atlantic Ocean", "Caribbean Sea"]
        },

        culture: {
            officialLanguages: ["Spanish", "English"],
            languages: ["Spanish", "English"],
            religions: ["Roman Catholicism (85%)", "Protestantism (10%)", "Others (5%)"],
            heritageSites: ["La Fortaleza and San Juan National Historic Site"],
            festivals: ["Las Fiestas de la Calle San Sebastián", "Fiesta de Reyes", "Carnival of Ponce", "Hatillo Masks Festival"],
            cuisine: ["Mofongo", "Arroz con Gandules", "Pernil", "Tostones", "Tembleque", "Alcapurrias", "Bacalaítos"],
            arts: ["Bomba & Plena Music", "Salsa", "Santos (Religious Wood Carvings)", "Vejigante Masks"],
            sports: ["Baseball (Passionate)", "Basketball", "Boxing", "Volleyball", "Swimming"]
        },

        symbols: {
            bird: "Puerto Rican Spindalis (Reinita Mora)",
            animal: "Puerto Rican Coqui (Frog)",
            flower: "Maga (Puerto Rican Hibiscus)",
            tree: "Ceiba (Silk Cotton Tree)",
            anthem: "La Borinqueña",
            motto: "Joannes Est Nomen Ejus (John is His Name)"
        },

        demographics: {
            lifeExpectancy: 80.1,
            literacyRate: "93.3%",
            urbanPopulation: "93.6%",
            medianAge: 43.3
        },

        history: {
            timeline: [
                { year: "1493", title: "Columbus Arrived", description: "Columbus arrived on second voyage" },
                { year: "1508", title: "Spanish Colony", description: "Juan Ponce de León established colony" },
                { year: "1898", title: "US Territory", description: "Ceded to US after Spanish-American War" },
                { year: "1917", title: "US Citizenship", description: "Jones Act granted citizenship" },
                { year: "1952", title: "Commonwealth", description: "Became Commonwealth (Estado Libre Asociado)" },
                { year: "2017", title: "Hurricane Maria", description: "Devastating hurricane, 3,000+ deaths" }
            ],
            notableFigures: ["Eugenio María de Hostos", "Roberto Clemente", "Ricky Martin", "Jennifer Lopez", "Oscar de la Hoya"]
        },

        disputes: [
            { name: "Political Status", description: "Ongoing debate: Statehood, Independence, or Commonwealth", type: "Political" }
        ],

        membershipStatus: {
            un: false,
            fifa: true,
            fifaMember: true,
            olympics: true,
            iocCode: "PUR",
            note: "Competes separately from USA in FIFA and Olympics"
        },

        quickFacts: [
            { icon: "capsules", title: "Pharma Capital", text: "Produces 25% of all US pharmaceutical exports" },
            { icon: "frog", title: "Coqui Frog", text: "Iconic coqui frog found nowhere else naturally" },
            { icon: "rum", title: "Rum Production", text: "Produces 70% of all rum sold in the US" },
            { icon: "music", title: "Salsa Birthplace", text: "Major contributor to salsa and reggaeton music" }
        ]
    },

    // 6. US VIRGIN ISLANDS
    {
        id: "VIR",
        name: "US Virgin Islands",
        officialName: "United States Virgin Islands",
        flag: "https://flagcdn.com/w320/vi.png",

        images: {
            hero: "https://images.unsplash.com/photo-1548574505-5e239809ee19?w=1920&q=80",
            landscape: "https://images.unsplash.com/photo-1568322445389-f64ac2515020?w=1920&q=80",
            city: "https://images.unsplash.com/photo-1580537659466-0a9bfa916a54?w=1920&q=80"
        },

        basic: {
            capital: "Charlotte Amalie",
            continent: "North America",
            region: "Caribbean",
            subregion: "Caribbean",
            population: 103574,
            area: 347,
            populationDensity: 298,
            independence: "US Unincorporated Territory",
            callingCode: "+1-340",
            tld: ".vi",
            drivingSide: "Left",
            electricity: "110V, 60Hz"
        },

        location: {
            coordinates: [18.3358, -64.8963],
            timezone: "UTC-4 (AST)",
            neighbors: ["British Virgin Islands"],
            borders: 0,
            hemispheres: ["Northern", "Western"]
        },

        political: {
            government: "Unincorporated Organized Territory of the United States",
            headOfState: "President of the United States",
            headOfGovernment: "Governor Albert Bryan Jr.",
            legislature: "Legislature of the Virgin Islands",
            legalSystem: "US Federal Law + Local Law",
            islands: 3,
            largestCity: "Charlotte Amalie",
            organizations: ["FIFA", "IOC"]
        },

        economy: {
            gdp: "$4.0 Billion",
            gdpPPP: "$4.0 Billion",
            gdpPerCapita: "$38,000",
            gdpRank: "N/A",
            gdpGrowth: "1.5%",
            currency: "United States Dollar",
            currencyCode: "USD",
            currencySymbol: "$",
            inflation: "3.5%",
            unemployment: "13%",
            majorSectors: ["Tourism (60%)", "Services (35%)", "Industry (5%)"],
            industries: ["Tourism", "Petroleum Refining", "Watch Assembly", "Rum Distilling", "Construction"],
            exports: ["Refined Petroleum", "Rum"],
            imports: ["Crude Oil", "Foodstuffs", "Consumer Goods", "Building Materials"]
        },

        geography: {
            climate: "Subtropical; Tempered by Eastern Winds",
            avgTemperature: "27°C",
            annualRainfall: "1,143 mm",
            highestPoint: "Crown Mountain (474 m)",
            lowestPoint: "Caribbean Sea (0 m)",
            coastline: "188 km",
            forestCover: "57%",
            arableLand: "2.9%",
            terrain: "Mostly hilly to rugged and mountainous",
            naturalResources: ["Sun", "Sandy Beaches", "Coral Reefs"]
        },

        geography_links: {
            rivers: [],
            mountains: ["Crown Mountain", "Signal Hill"],
            deserts: [],
            forests: ["Virgin Islands National Park"],
            oceans: ["Caribbean Sea", "Atlantic Ocean"]
        },

        culture: {
            officialLanguages: ["English"],
            languages: ["English", "Spanish", "Virgin Islands Creole English"],
            religions: ["Protestantism (59%)", "Roman Catholicism (34%)", "Others (7%)"],
            heritageSites: ["Buck Island Reef National Monument", "Salt River Bay National Historical Park"],
            festivals: ["Carnival", "Emancipation Day", "Danish West Indies Transfer Day"],
            cuisine: ["Kallaloo", "Johnny Cake", "Conch", "Roti", "Fungi", "Pates"],
            arts: ["Mocko Jumbie (Stilt Walking)", "Steel Pan Music", "Carnival Art"],
            sports: ["Football", "Basketball", "Cricket", "Volleyball", "Water Sports"]
        },

        symbols: {
            bird: "Bananaquit",
            animal: "None Official",
            flower: "Yellow Elder",
            tree: "Genip",
            anthem: "Star-Spangled Banner / Virgin Islands March",
            motto: "United in Pride and Hope"
        },

        demographics: {
            lifeExpectancy: 79.9,
            literacyRate: "90%",
            urbanPopulation: "96%",
            medianAge: 41.8
        },

        history: {
            timeline: [
                { year: "1493", title: "Columbus Arrived", description: "Columbus discovered islands" },
                { year: "1671", title: "Danish Colony", description: "Denmark colonized St. Thomas" },
                { year: "1917", title: "US Purchase", description: "US bought from Denmark for $25 million" },
                { year: "1927", title: "US Citizenship", description: "Residents granted US citizenship" }
            ],
            notableFigures: ["Tim Duncan", "Leona Watson"]
        },

        disputes: [],

        membershipStatus: {
            un: false,
            fifa: true,
            fifaMember: true,
            olympics: true,
            iocCode: "ISV",
            note: "Competes separately from USA in FIFA and Olympics"
        },

        quickFacts: [
            { icon: "car", title: "Drive Left", text: "Only US territory where driving is on the left" },
            { icon: "anchor", title: "Charlotte Amalie", text: "One of world's finest natural harbours" },
            { icon: "rum", title: "Rum", text: "Home to Cruzan and Captain Morgan rum production" }
        ]
    },

    // ============================================
    // EUROPE EXTRA FIFA/OLYMPIC TERRITORIES
    // ============================================

    // 7. FAROE ISLANDS
    {
        id: "FRO",
        name: "Faroe Islands",
        officialName: "Faroe Islands (Autonomous Territory of Denmark)",
        flag: "https://flagcdn.com/w320/fo.png",

        images: {
            hero: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1920&q=80",
            landscape: "https://images.unsplash.com/photo-1484821582734-6692f3ce3b96?w=1920&q=80",
            city: "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=1920&q=80"
        },

        basic: {
            capital: "Tórshavn",
            continent: "Europe",
            region: "Northern Europe",
            subregion: "Northern Europe",
            population: 54000,
            area: 1393,
            populationDensity: 35,
            independence: "Autonomous Territory of Denmark",
            callingCode: "+298",
            tld: ".fo",
            drivingSide: "Right",
            electricity: "230V, 50Hz"
        },

        location: {
            coordinates: [61.8926, -6.9118],
            timezone: "UTC (WET/WEST)",
            neighbors: [],
            borders: 0,
            hemispheres: ["Northern", "Western"],
            islandNation: true,
            islands: 18
        },

        political: {
            government: "Parliamentary Democracy (Autonomous Territory of Denmark)",
            headOfState: "Danish Monarch King Frederik X",
            headOfGovernment: "Prime Minister Aksel V. Johannesen",
            legislature: "Løgting",
            legalSystem: "Danish Law with Local Modifications",
            municipalities: 29,
            largestCity: "Tórshavn",
            organizations: ["FIFA", "UEFA", "IOC"]
        },

        economy: {
            gdp: "$3.6 Billion",
            gdpPPP: "$3.6 Billion",
            gdpPerCapita: "$66,000",
            gdpRank: "N/A",
            gdpGrowth: "4.5%",
            currency: "Faroese Króna / Danish Krone",
            currencyCode: "DKK",
            currencySymbol: "kr",
            inflation: "7.0%",
            unemployment: "1.0%",
            majorSectors: ["Fishing (95% of exports)", "Tourism", "Services"],
            industries: ["Fishing", "Fish Processing", "Tourism", "Small Scale Manufacturing"],
            exports: ["Fish & Fish Products (95%)", "Ships"],
            imports: ["Machinery", "Transport Equipment", "Foodstuffs", "Petroleum Products"]
        },

        geography: {
            climate: "Mild, Windy, Cloudy, Humid",
            avgTemperature: "7°C",
            annualRainfall: "1,400 mm",
            highestPoint: "Slættaratindur (880 m)",
            lowestPoint: "Atlantic Ocean (0 m)",
            coastline: "1,117 km",
            forestCover: "0.1%",
            arableLand: "2.1%",
            terrain: "Rugged; mostly hilly; some low peaks; cliffs along most of coast",
            naturalResources: ["Fish", "Whale", "Hydropower", "Possible Offshore Oil & Gas"]
        },

        geography_links: {
            rivers: [],
            mountains: ["Slættaratindur", "Gásakletti", "Enniberg Cliff"],
            deserts: [],
            forests: [],
            oceans: ["North Atlantic Ocean", "Norwegian Sea"]
        },

        culture: {
            officialLanguages: ["Faroese", "Danish"],
            languages: ["Faroese", "Danish"],
            religions: ["Church of the Faroe Islands (Lutheran 80%)", "Plymouth Brethren (10%)"],
            heritageSites: [],
            festivals: ["Ólavsøka (National Day)", "G! Festival", "Faroe Islands Music Festival"],
            cuisine: ["Ræst (Fermented Meat)", "Skerpikjøt (Wind-dried Mutton)", "Freshly Caught Fish", "Puffin", "Klipfisk"],
            arts: ["Chain Dance (Faroese Folk Dance)", "Ballads (Kvæði)", "Knitting", "Viking Heritage"],
            sports: ["Football (Surprisingly competitive)", "Rowing", "Swimming", "Chess"]
        },

        symbols: {
            bird: "Eurasian Oystercatcher",
            animal: "None Official",
            flower: "Rowan",
            tree: "None Official",
            anthem: "Tú alfagra land mítt",
            motto: "None Official"
        },

        demographics: {
            lifeExpectancy: 82.7,
            literacyRate: "99%",
            urbanPopulation: "42%",
            medianAge: 37.2
        },

        history: {
            timeline: [
                { year: "800", title: "Viking Settlement", description: "Norse Vikings settled the islands" },
                { year: "1035", title: "Norwegian Rule", description: "Became part of Norway" },
                { year: "1380", title: "Danish Rule", description: "Passed to Denmark with Norway" },
                { year: "1948", title: "Home Rule", description: "Gained home rule from Denmark" },
                { year: "1992", title: "FIFA Member", description: "Joined FIFA; famous debut 1-0 vs Austria" }
            ],
            notableFigures: ["Gunnar Hoydal", "V.U. Hammershaimb"]
        },

        disputes: [],

        membershipStatus: {
            un: false,
            fifa: true,
            fifaMember: true,
            olympics: true,
            iocCode: "FAI",
            note: "Autonomous Danish territory; competes separately in FIFA and Olympics"
        },

        quickFacts: [
            { icon: "football", title: "Giant Killers", text: "Beat Austria 1-0 in FIFA debut (1990)" },
            { icon: "sheep", title: "More Sheep", text: "More sheep than people (70,000+ sheep)" },
            { icon: "water", title: "Stunning Cliffs", text: "Enniberg - Europe's highest vertical sea cliff (754m)" },
            { icon: "fish", title: "Fish Economy", text: "Fish accounts for 95% of all exports" }
        ]
    },

    // 8. GIBRALTAR
    {
        id: "GIB",
        name: "Gibraltar",
        officialName: "Gibraltar (British Overseas Territory)",
        flag: "https://flagcdn.com/w320/gi.png",

        images: {
            hero: "https://images.unsplash.com/photo-1562566260-3902cd197917?w=1920&q=80",
            landscape: "https://images.unsplash.com/photo-1533741022-ded5a19ea1a4?w=1920&q=80",
            city: "https://images.unsplash.com/photo-1545579133-99bb5ad189be?w=1920&q=80"
        },

        basic: {
            capital: "Gibraltar",
            continent: "Europe",
            region: "Southern Europe",
            subregion: "Southern Europe",
            population: 34003,
            area: 6.7,
            populationDensity: 5340,
            independence: "British Overseas Territory",
            callingCode: "+350",
            tld: ".gi",
            drivingSide: "Right",
            electricity: "230V, 50Hz"
        },

        location: {
            coordinates: [36.1408, -5.3536],
            timezone: "UTC+1/+2 (CET/CEST)",
            neighbors: ["Spain"],
            borders: 1.2,
            hemispheres: ["Northern", "Western"]
        },

        political: {
            government: "British Overseas Territory (Parliamentary Democracy)",
            headOfState: "British Monarch King Charles III",
            headOfGovernment: "Chief Minister Fabian Picardo",
            legislature: "Parliament of Gibraltar",
            legalSystem: "English Common Law",
            districts: 0,
            largestCity: "Gibraltar",
            organizations: ["FIFA", "UEFA"]
        },

        economy: {
            gdp: "$2.84 Billion",
            gdpPPP: "$2.84 Billion",
            gdpPerCapita: "$83,672",
            gdpRank: "N/A",
            gdpGrowth: "10.0%",
            currency: "Gibraltar Pound",
            currencyCode: "GIP",
            currencySymbol: "£",
            inflation: "2.0%",
            unemployment: "1.0%",
            majorSectors: ["Financial Services (40%)", "Shipping (25%)", "Tourism (20%)", "Online Gaming (15%)"],
            industries: ["Financial Services", "Online Gambling", "Shipping", "Tourism", "Construction"],
            exports: ["Re-exports of Petroleum", "Manufactured Goods", "Fish"],
            imports: ["Fuel", "Foodstuffs", "Consumer Goods", "Building Materials"]
        },

        geography: {
            climate: "Mediterranean; Mild Winters, Warm Summers",
            avgTemperature: "18.2°C",
            annualRainfall: "772 mm",
            highestPoint: "Rock of Gibraltar (426 m)",
            lowestPoint: "Mediterranean Sea (0 m)",
            coastline: "12 km",
            forestCover: "0%",
            arableLand: "0%",
            terrain: "Narrow coastal lowland; The Rock dominates landscape",
            naturalResources: ["Negligible"]
        },

        geography_links: {
            rivers: [],
            mountains: ["Rock of Gibraltar"],
            deserts: [],
            forests: ["Upper Rock Nature Reserve"],
            oceans: ["Mediterranean Sea", "Atlantic Ocean", "Strait of Gibraltar"]
        },

        culture: {
            officialLanguages: ["English"],
            languages: ["English", "Spanish", "Llanito (Local Creole)", "Moroccan Arabic", "Hindi"],
            religions: ["Roman Catholicism (72.1%)", "Church of England (7.7%)", "Islam (3.6%)", "Judaism (2.4%)"],
            heritageSites: ["Rock of Gibraltar", "Moorish Castle", "St. Michael's Cave"],
            festivals: ["Gibraltar National Day (Sep 10)", "Calentita Night", "Gibraltar Music Festival"],
            cuisine: ["Calentita (Chickpea Pie)", "Panissa", "Rosto", "Borrida de Ratjada", "Stuffed Aubergines"],
            arts: ["Barbary Macaques", "Rock of Gibraltar Sightseeing", "British & Mediterranean fusion culture"],
            sports: ["Football", "Cricket", "Rugby", "Boxing", "Cycling"]
        },

        symbols: {
            bird: "Barbary Partridge",
            animal: "Barbary Macaque (Monkey)",
            flower: "Candytuft",
            tree: "None Official",
            anthem: "Gibraltar Anthem (God Save the King for official)",
            motto: "Nulli Expugnabilis Hosti (Conquered by No Enemy)"
        },

        demographics: {
            lifeExpectancy: 80.4,
            literacyRate: "99%",
            urbanPopulation: "100%",
            medianAge: 35.5
        },

        history: {
            timeline: [
                { year: "711", title: "Moorish Conquest", description: "Tariq ibn Ziyad conquered from Spain" },
                { year: "1462", title: "Spanish Control", description: "Recaptured by Spain" },
                { year: "1704", title: "British Capture", description: "British captured during War of Spanish Succession" },
                { year: "1713", title: "Treaty of Utrecht", description: "Spain ceded Gibraltar to Britain" },
                { year: "1967", title: "Referendum", description: "99% voted to remain British" },
                { year: "2006", title: "New Constitution", description: "Greater self-governance" }
            ],
            notableFigures: ["Sir Robert Gardiner", "Peter Caruana", "Fabian Picardo"]
        },

        disputes: [
            { name: "Spain-UK Dispute", description: "Spain claims sovereignty over Gibraltar", type: "Territory" }
        ],

        membershipStatus: {
            un: false,
            fifa: true,
            fifaMember: true,
            olympics: false,
            note: "FIFA member since 2016; British territory"
        },

        quickFacts: [
            { icon: "monkey", title: "Famous Monkeys", text: "Barbary macaques - only wild monkeys in Europe" },
            { icon: "water", title: "Strategic Strait", text: "Controls entrance to Mediterranean from Atlantic" },
            { icon: "mountain", title: "The Rock", text: "Iconic 426m limestone rock dominates skyline" },
            { icon: "flag", title: "Disputed", text: "Spain claims Gibraltar; 99% voted to remain British" }
        ]
    },

    // 9. KOSOVO (FIFA MEMBER, NOT FULL UN)
    {
        id: "XKX",
        name: "Kosovo",
        officialName: "Republic of Kosovo",
        flag: "https://flagcdn.com/w320/xk.png",

        images: {
            hero: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80",
            landscape: "https://images.unsplash.com/photo-1570366583862-f91883984fde?w=1920&q=80",
            city: "https://images.unsplash.com/photo-1588515724527-074a7a56616c?w=1920&q=80"
        },

        basic: {
            capital: "Pristina",
            continent: "Europe",
            region: "Southeastern Europe",
            subregion: "Southern Europe",
            population: 1873000,
            area: 10908,
            populationDensity: 172,
            independence: "2008 (Disputed)",
            callingCode: "+383",
            tld: ".xk",
            drivingSide: "Right",
            electricity: "230V, 50Hz"
        },

        location: {
            coordinates: [42.6026, 20.9030],
            timezone: "UTC+1/+2 (CET/CEST)",
            neighbors: ["Serbia", "North Macedonia", "Albania", "Montenegro"],
            borders: 714,
            hemispheres: ["Northern", "Eastern"]
        },

        political: {
            government: "Parliamentary Republic",
            headOfState: "President Vjosa Osmani",
            headOfGovernment: "Prime Minister Albin Kurti",
            legislature: "Assembly of Kosovo",
            legalSystem: "Civil Law",
            municipalities: 38,
            largestCity: "Pristina",
            organizations: ["FIFA", "UEFA", "IOC", "IMF", "World Bank", "IOC"]
        },

        economy: {
            gdp: "$9.4 Billion",
            gdpPPP: "$24.1 Billion",
            gdpPerCapita: "$5,018",
            gdpRank: "N/A",
            gdpGrowth: "3.3%",
            currency: "Euro",
            currencyCode: "EUR",
            currencySymbol: "€",
            inflation: "4.9%",
            unemployment: "12.3%",
            majorSectors: ["Services (61%)", "Industry (25%)", "Agriculture (12%)"],
            industries: ["Mining (Lignite, Lead, Zinc, Nickel)", "Construction", "Agriculture", "Trade"],
            exports: ["Mining Products", "Scrap Metal", "Leather", "Machinery", "Vegetables"],
            imports: ["Foodstuffs", "Machinery", "Petroleum Products", "Vehicles", "Chemicals"]
        },

        geography: {
            climate: "Continental; Warm Summers, Cold Winters",
            avgTemperature: "9.5°C",
            annualRainfall: "700 mm",
            highestPoint: "Gjeravica (2,656 m)",
            lowestPoint: "White Drin River (297 m)",
            coastline: "0 km (Landlocked)",
            forestCover: "41.6%",
            arableLand: "27.4%",
            terrain: "Flat fluvial basin with mountainous borders",
            naturalResources: ["Nickel", "Lead", "Zinc", "Magnesium", "Lignite", "Kaolin", "Chromite", "Bauxite"]
        },

        geography_links: {
            rivers: ["White Drin", "South Morava", "Sitnica", "Erenik"],
            mountains: ["Prokletije (Albanian Alps)", "Šar Mountains", "Kopaonik", "Gjeravica"],
            deserts: [],
            forests: ["Bjeshkët e Nemuna (Accursed Mountains)"],
            oceans: []
        },

        culture: {
            officialLanguages: ["Albanian", "Serbian"],
            languages: ["Albanian", "Serbian", "Bosnian", "Roma", "Turkish"],
            religions: ["Islam (95.6%)", "Serbian Orthodoxy (1.5%)", "Roman Catholicism (2.2%)"],
            heritageSites: ["Medieval Monuments in Kosovo (UNESCO - under Serbia's submission)"],
            festivals: ["Independence Day", "Flag Day", "Albanian Independence Day"],
            cuisine: ["Flija", "Tavë Kosi", "Qebapa", "Petulla", "Baklava", "Byrek"],
            arts: ["Traditional Albanian Music", "Iso-Polyphony", "Folk Dance", "Contemporary Art"],
            sports: ["Football", "Judo (Olympic Medal Winners)", "Wrestling", "Boxing", "Basketball"]
        },

        symbols: {
            bird: "Golden Eagle",
            animal: "Golden Eagle",
            flower: "None Official",
            tree: "None Official",
            anthem: "Europe",
            motto: "None Official"
        },

        demographics: {
            lifeExpectancy: 72.3,
            literacyRate: "91.9%",
            urbanPopulation: "52%",
            medianAge: 30.5
        },

        history: {
            timeline: [
                { year: "1389", title: "Battle of Kosovo", description: "Ottoman victory; Serbian kingdom fell" },
                { year: "1912", title: "Balkan Wars", description: "Serbia took Kosovo from Ottomans" },
                { year: "1945", title: "Yugoslav Kosovo", description: "Became autonomous province of Yugoslavia" },
                { year: "1989", title: "Autonomy Revoked", description: "Milošević revoked Kosovo's autonomy" },
                { year: "1998-99", title: "Kosovo War", description: "NATO intervened against Serbian forces" },
                { year: "1999", title: "UN Administration", description: "UNMIK administered Kosovo" },
                { year: "2008", title: "Independence", description: "Declared independence from Serbia" }
            ],
            notableFigures: ["Ibrahim Rugova", "Hashim Thaçi", "Vjosa Osmani", "Albin Kurti", "Majlinda Kelmendi (Olympic Judo Gold)"]
        },

        disputes: [
            { name: "Serbia-Kosovo", description: "Serbia and Russia do not recognize Kosovo's independence", type: "Territory" }
        ],

        membershipStatus: {
            un: false,
            fifa: true,
            fifaMember: true,
            olympics: true,
            iocCode: "KOS",
            recognizedBy: "111 UN member states",
            note: "Declared independence in 2008; recognized by 111 countries. FIFA member since 2016, IOC member since 2014"
        },

        quickFacts: [
            { icon: "star", title: "Newest Nation", text: "One of world's newest countries (independence 2008)" },
            { icon: "medal", title: "Judo Success", text: "Majlinda Kelmendi won Kosovo's first Olympic gold (2016)" },
            { icon: "handshake", title: "Recognition", text: "Recognized by USA, UK, France, Germany, but not Russia or China" },
            { icon: "users", title: "Young Nation", text: "Youngest population in Europe (median age 30)" }
        ]
    },

    // ============================================
    // OCEANIA/PACIFIC FIFA TERRITORIES
    // ============================================

    // 10. NEW CALEDONIA
    {
        id: "NCL",
        name: "New Caledonia",
        officialName: "New Caledonia (French Special Collectivity)",
        flag: "https://flagcdn.com/w320/nc.png",

        images: {
            hero: "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=1920&q=80",
            landscape: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1920&q=80",
            city: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&q=80"
        },

        basic: {
            capital: "Nouméa",
            continent: "Oceania",
            region: "Melanesia",
            subregion: "Melanesia",
            population: 271407,
            area: 18576,
            populationDensity: 15,
            independence: "French Special Collectivity",
            callingCode: "+687",
            tld: ".nc",
            drivingSide: "Right",
            electricity: "220V, 50Hz"
        },

        location: {
            coordinates: [-20.9043, 165.6180],
            timezone: "UTC+11 (NCT)",
            neighbors: [],
            borders: 0,
            hemispheres: ["Southern", "Eastern"],
            islandNation: true
        },

        political: {
            government: "Special Collectivity of France",
            headOfState: "President of France (Emmanuel Macron)",
            headOfGovernment: "President of Government Louis Mapou",
            legislature: "Congress of New Caledonia",
            legalSystem: "French Civil Law",
            provinces: 3,
            largestCity: "Nouméa",
            organizations: ["FIFA", "OFC"]
        },

        economy: {
            gdp: "$9.99 Billion",
            gdpPPP: "$9.99 Billion",
            gdpPerCapita: "$38,921",
            gdpRank: "N/A",
            gdpGrowth: "-0.5%",
            currency: "CFP Franc",
            currencyCode: "XPF",
            currencySymbol: "Fr",
            inflation: "3.0%",
            unemployment: "14.7%",
            majorSectors: ["Nickel Mining (25%)", "Services (65%)", "Agriculture (2%)"],
            industries: ["Nickel Mining & Smelting", "Tourism", "Construction", "Agriculture"],
            exports: ["Nickel Ore", "Ferronickel"],
            imports: ["Machinery", "Electrical Equipment", "Foodstuffs", "Petroleum"]
        },

        geography: {
            climate: "Tropical; Modified by Southeast Trade Winds",
            avgTemperature: "23°C",
            annualRainfall: "1,500 mm",
            highestPoint: "Mont Panié (1,628 m)",
            lowestPoint: "Pacific Ocean (0 m)",
            coastline: "2,254 km",
            forestCover: "45.9%",
            arableLand: "0.4%",
            terrain: "Coastal plains with interior mountains",
            naturalResources: ["Nickel (25% of world's known reserves)", "Chrome", "Iron", "Cobalt", "Manganese", "Silver", "Gold", "Lead", "Copper"]
        },

        geography_links: {
            rivers: ["Diahot River", "Houaïlou River"],
            mountains: ["Mont Panié", "Mont Humboldt", "Mont Boulinda"],
            deserts: [],
            forests: ["Tropical Rainforests", "Pine Forests of Isle of Pines"],
            oceans: ["Coral Sea", "Pacific Ocean"]
        },

        culture: {
            officialLanguages: ["French"],
            languages: ["French", "Kanak Languages (33 languages)", "Wallisian", "Futunian", "Javanese"],
            religions: ["Roman Catholicism (60%)", "Protestantism (30%)", "Other (10%)"],
            heritageSites: ["Lagoons of New Caledonia (UNESCO)"],
            festivals: ["Bastille Day", "Melanesia 2000 Festival", "Avocado Festival"],
            cuisine: ["Bougna (Traditional Kanak)", "Fresh Seafood", "French Cuisine", "Coconut Crab"],
            arts: ["Kanak Traditional Art", "Woodcarving", "Tapa (Bark Cloth)", "Traditional Dance"],
            sports: ["Football", "Rugby", "Cricket", "Outrigger Canoe Racing"]
        },

        symbols: {
            bird: "Kagu (Cagou)",
            animal: "Dugong",
            flower: "None Official",
            tree: "Araucaria (Monkey Puzzle)",
            anthem: "La Marseillaise",
            motto: "None Official"
        },

        demographics: {
            lifeExpectancy: 78.7,
            literacyRate: "96.9%",
            urbanPopulation: "72%",
            medianAge: 32.9
        },

        history: {
            timeline: [
                { year: "1774", title: "Cook Arrived", description: "Captain Cook visited, named it New Caledonia" },
                { year: "1853", title: "French Colony", description: "France took possession" },
                { year: "1998", title: "Nouméa Accord", description: "Agreement for gradual transfer of powers" },
                { year: "2018-2021", title: "Referendums", description: "Three referendums voted to remain French" }
            ],
            notableFigures: ["Jean-Marie Tjibaou", "Roch Wamytan", "Louis Mapou"]
        },

        disputes: [
            { name: "Independence Movement", description: "Ongoing independence debate between Kanaks and loyalists", type: "Political" }
        ],

        membershipStatus: {
            un: false,
            fifa: true,
            fifaMember: true,
            olympics: false,
            note: "OFC/FIFA member; competes separately from France"
        },

        quickFacts: [
            { icon: "gem", title: "Nickel Rich", text: "Has 25% of world's known nickel reserves" },
            { icon: "fish", title: "UNESCO Lagoons", text: "Lagoons are UNESCO World Heritage site" },
            { icon: "bird", title: "Kagu Bird", text: "Iconic flightless Kagu bird found only here" }
        ]
    },

    // 11. TAHITI (FRENCH POLYNESIA)
    {
        id: "PYF",
        name: "Tahiti (French Polynesia)",
        officialName: "French Polynesia (French Collectivity)",
        flag: "https://flagcdn.com/w320/pf.png",

        images: {
            hero: "https://images.unsplash.com/photo-1589394760236-7e84a9c2f236?w=1920&q=80",
            landscape: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80",
            city: "https://images.unsplash.com/photo-1551524559-8af4e6624178?w=1920&q=80"
        },

        basic: {
            capital: "Papeete",
            continent: "Oceania",
            region: "Polynesia",
            subregion: "Polynesia",
            population: 306279,
            area: 4167,
            populationDensity: 76,
            independence: "French Overseas Collectivity",
            callingCode: "+689",
            tld: ".pf",
            drivingSide: "Right",
            electricity: "220V, 60Hz"
        },

        location: {
            coordinates: [-17.6797, -149.4068],
            timezone: "UTC-10 (TAHT)",
            neighbors: [],
            borders: 0,
            hemispheres: ["Southern", "Western"],
            islandNation: true,
            islands: 118
        },

        political: {
            government: "Overseas Collectivity of France",
            headOfState: "President of France",
            headOfGovernment: "President of French Polynesia Moetai Brotherson",
            legislature: "Assembly of French Polynesia",
            legalSystem: "French Civil Law",
            communes: 48,
            largestCity: "Papeete",
            organizations: ["FIFA (as Tahiti)", "OFC"]
        },

        economy: {
            gdp: "$5.65 Billion",
            gdpPPP: "$5.65 Billion",
            gdpPerCapita: "$17,000",
            gdpRank: "N/A",
            gdpGrowth: "2.0%",
            currency: "CFP Franc",
            currencyCode: "XPF",
            currencySymbol: "Fr",
            inflation: "2.0%",
            unemployment: "11.7%",
            majorSectors: ["Tourism (20%)", "Pearl Farming (10%)", "Services (60%)", "Agriculture (10%)"],
            industries: ["Tourism", "Black Pearl Farming", "Coconut Oil", "Vanilla", "Fishing", "Handicrafts"],
            exports: ["Black Pearls (60%)", "Coconut Products", "Mother of Pearl", "Vanilla", "Fish"],
            imports: ["Fuels", "Foodstuffs", "Machinery & Equipment", "Consumer Goods"]
        },

        geography: {
            climate: "Tropical; Modified by Trade Winds",
            avgTemperature: "26°C",
            annualRainfall: "1,700 mm",
            highestPoint: "Mont Orohena (2,241 m)",
            lowestPoint: "Pacific Ocean (0 m)",
            coastline: "2,525 km",
            forestCover: "25%",
            arableLand: "0.7%",
            terrain: "Mix of rugged high islands and low-lying coral atolls",
            naturalResources: ["Timber", "Fish", "Cobalt", "Hydropower"]
        },

        geography_links: {
            rivers: ["Papenoo River", "Punaruu River"],
            mountains: ["Mont Orohena", "Mont Aorai", "Mount Rotui"],
            deserts: [],
            forests: ["Tropical Rainforests", "Valley de la Papenoo"],
            oceans: ["Pacific Ocean", "South Pacific Ocean"]
        },

        culture: {
            officialLanguages: ["French", "Tahitian"],
            languages: ["French", "Tahitian", "Marquesan", "Tuamotuan"],
            religions: ["Protestantism (54%)", "Roman Catholicism (30%)", "Other (16%)"],
            heritageSites: [],
            festivals: ["Heiva I Tahiti (July Festival)", "Bastille Day", "Marquesas Arts Festival"],
            cuisine: ["Poisson Cru", "Fafaru", "Ma'a Tinito", "Poe", "Coconut-based Dishes"],
            arts: ["Polynesian Dance", "Tifaifai Quilting", "Black Pearl Jewelry", "Tattooing (origin of 'tattoo')"],
            sports: ["Outrigger Canoe (Va'a)", "Surfing", "Football", "Pétanque"]
        },

        symbols: {
            bird: "None Official",
            animal: "None Official",
            flower: "Tiare (Gardenia taitensis)",
            tree: "None Official",
            anthem: "La Marseillaise",
            motto: "None Official"
        },

        demographics: {
            lifeExpectancy: 78.0,
            literacyRate: "98%",
            urbanPopulation: "62%",
            medianAge: 32.9
        },

        history: {
            timeline: [
                { year: "1767", title: "European Discovery", description: "Samuel Wallis first European to arrive" },
                { year: "1842", title: "French Protectorate", description: "France established protectorate" },
                { year: "1880", title: "French Colony", description: "Became French colony" },
                { year: "1984", title: "Autonomy", description: "Gained internal autonomy" }
            ],
            notableFigures: ["Paul Gauguin (artist who lived here)", "Queen Pomare IV"]
        },

        disputes: [
            { name: "Independence Movement", description: "Some independence sentiment among local population", type: "Political" }
        ],

        membershipStatus: {
            un: false,
            fifa: true,
            fifaMember: true,
            fifaName: "Tahiti",
            olympics: false,
            note: "FIFA member as 'Tahiti'; OFC member"
        },

        quickFacts: [
            { icon: "gem", title: "Black Pearls", text: "Produces 95% of world's black cultured pearls" },
            { icon: "paint-brush", title: "Gauguin", text: "Paul Gauguin's most famous paintings made here" },
            { icon: "sun", title: "Paradise", text: "Bora Bora considered one of world's most beautiful islands" },
            { icon: "paint-roller", title: "Tattoo Origin", text: "English word 'tattoo' came from Tahitian 'tatau'" }
        ]
    },

    // ============================================
    // CARIBBEAN/AMERICAS FIFA TERRITORIES
    // ============================================

    // 12. BERMUDA
    {
        id: "BMU",
        name: "Bermuda",
        officialName: "Bermuda (British Overseas Territory)",
        flag: "https://flagcdn.com/w320/bm.png",

        images: {
            hero: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80",
            landscape: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&q=80",
            city: "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=1920&q=80"
        },

        basic: {
            capital: "Hamilton",
            continent: "North America",
            region: "North Atlantic",
            subregion: "North Atlantic",
            population: 64185,
            area: 54,
            populationDensity: 1337,
            independence: "British Overseas Territory",
            callingCode: "+1-441",
            tld: ".bm",
            drivingSide: "Left",
            electricity: "120V, 60Hz"
        },

        location: {
            coordinates: [32.3078, -64.7505],
            timezone: "UTC-4/-3 (AST/ADT)",
            neighbors: [],
            borders: 0,
            hemispheres: ["Northern", "Western"],
            islandNation: true,
            islands: 181
        },

        political: {
            government: "British Overseas Territory (Parliamentary Democracy)",
            headOfState: "British Monarch King Charles III",
            headOfGovernment: "Premier David Burt",
            legislature: "Parliament of Bermuda",
            legalSystem: "English Common Law",
            parishes: 9,
            largestCity: "Hamilton",
            organizations: ["FIFA", "IOC", "CONCACAF"]
        },

        economy: {
            gdp: "$7.9 Billion",
            gdpPPP: "$7.9 Billion",
            gdpPerCapita: "$117,000",
            gdpRank: "N/A",
            gdpGrowth: "3.0%",
            currency: "Bermudian Dollar",
            currencyCode: "BMD",
            currencySymbol: "$",
            inflation: "2.0%",
            unemployment: "7.0%",
            majorSectors: ["Financial Services (85%)", "Tourism (5%)", "International Business"],
            industries: ["International Business (Reinsurance)", "Tourism", "Financial Services"],
            exports: ["Reinsurance Premiums", "Tourism Services"],
            imports: ["Foodstuffs", "Machinery", "Chemicals", "Fuel", "Clothing"]
        },

        geography: {
            climate: "Subtropical; Humid; Gales, Strong Winds",
            avgTemperature: "21°C",
            annualRainfall: "1,465 mm",
            highestPoint: "Town Hill (76 m)",
            lowestPoint: "Atlantic Ocean (0 m)",
            coastline: "103 km",
            forestCover: "20%",
            arableLand: "14.8%",
            terrain: "Low hills separated by fertile depressions",
            naturalResources: ["Limestone", "Pleasant Climate"]
        },

        geography_links: {
            rivers: [],
            mountains: ["Town Hill"],
            deserts: [],
            forests: ["Bermuda Cedar Forest"],
            oceans: ["North Atlantic Ocean", "Bermuda Triangle (nearby)"]
        },

        culture: {
            officialLanguages: ["English"],
            languages: ["English", "Portuguese"],
            religions: ["Protestantism (46.1%)", "Roman Catholicism (14.5%)", "Others (39.4%)"],
            heritageSites: ["Bermuda Fortress (St. George)"],
            festivals: ["Cup Match", "Bermuda Day", "Gombey Festival"],
            cuisine: ["Fish Chowder", "Codfish & Potatoes", "Bermuda Fish Sandwich", "Dark & Stormy (Rum Cocktail)"],
            arts: ["Gombey Dancing", "Craft", "Painting"],
            sports: ["Cricket", "Football", "Golf", "Sailing", "Rugby"]
        },

        symbols: {
            bird: "White-tailed Tropicbird (Longtail)",
            animal: "None Official",
            flower: "Bermudiana",
            tree: "Bermuda Cedar",
            anthem: "God Save the King / Hail to Bermuda",
            motto: "Quo Fata Ferunt (Whither the Fates Carry Us)"
        },

        demographics: {
            lifeExpectancy: 81.7,
            literacyRate: "98%",
            urbanPopulation: "100%",
            medianAge: 44.0
        },

        history: {
            timeline: [
                { year: "1609", title: "English Shipwreck", description: "Sea Venture wrecked; English colonized" },
                { year: "1620", title: "Parliament", description: "Oldest constitutional parliament in New World" },
                { year: "1834", title: "Slavery Abolished", description: "Slavery abolished" },
                { year: "1968", title: "Internal Self-Government", description: "Gained full internal self-government" }
            ],
            notableFigures: ["James Smith", "David Burt"]
        },

        disputes: [],

        membershipStatus: {
            un: false,
            fifa: true,
            fifaMember: true,
            olympics: true,
            iocCode: "BER",
            note: "British territory; competes separately from UK in FIFA and Olympics"
        },

        quickFacts: [
            { icon: "dollar-sign", title: "Wealthiest Territory", text: "Among world's wealthiest territories per capita" },
            { icon: "ship", title: "Bermuda Triangle", text: "Near the famous Bermuda Triangle" },
            { icon: "building", title: "Reinsurance Capital", text: "World's third largest reinsurance centre" },
            { icon: "anchor", title: "Pink Sand", text: "Famous pink sand beaches" }
        ]
    },

    // 13. CAYMAN ISLANDS
    {
        id: "CYM",
        name: "Cayman Islands",
        officialName: "Cayman Islands (British Overseas Territory)",
        flag: "https://flagcdn.com/w320/ky.png",

        images: {
            hero: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=1920&q=80",
            landscape: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&q=80",
            city: "https://images.unsplash.com/photo-1586698020893-6337c191e0e6?w=1920&q=80"
        },

        basic: {
            capital: "George Town",
            continent: "North America",
            region: "Caribbean",
            subregion: "Caribbean",
            population: 68706,
            area: 264,
            populationDensity: 271,
            independence: "British Overseas Territory",
            callingCode: "+1-345",
            tld: ".ky",
            drivingSide: "Left",
            electricity: "120V, 60Hz"
        },

        location: {
            coordinates: [19.3133, -81.2546],
            timezone: "UTC-5 (EST)",
            neighbors: [],
            borders: 0,
            hemispheres: ["Northern", "Western"],
            islandNation: true,
            islands: 3
        },

        political: {
            government: "British Overseas Territory",
            headOfState: "British Monarch King Charles III",
            headOfGovernment: "Premier Wayne Panton",
            legislature: "Parliament",
            legalSystem: "English Common Law",
            districts: 6,
            largestCity: "George Town",
            organizations: ["FIFA", "CONCACAF"]
        },

        economy: {
            gdp: "$6.2 Billion",
            gdpPPP: "$6.2 Billion",
            gdpPerCapita: "$91,392",
            gdpRank: "N/A",
            gdpGrowth: "4.0%",
            currency: "Cayman Islands Dollar",
            currencyCode: "KYD",
            currencySymbol: "CI$",
            inflation: "2.5%",
            unemployment: "4.0%",
            majorSectors: ["Financial Services (55%)", "Tourism (30%)", "Construction (10%)"],
            industries: ["Offshore Finance", "Tourism", "Construction", "Insurance"],
            exports: ["Financial Services", "Tourism"],
            imports: ["Foodstuffs", "Consumer Goods", "Fuel", "Construction Materials"]
        },

        geography: {
            climate: "Tropical Marine; Warm, Rainy Summers; Cool, Dry Winters",
            avgTemperature: "27.2°C",
            annualRainfall: "1,524 mm",
            highestPoint: "The Bluff (43 m)",
            lowestPoint: "Caribbean Sea (0 m)",
            coastline: "160 km",
            forestCover: "51.9%",
            arableLand: "0.8%",
            terrain: "Low-lying limestone base surrounded by coral reefs",
            naturalResources: ["Fish", "Climate", "Coral Reefs"]
        },

        geography_links: {
            rivers: [],
            mountains: [],
            deserts: [],
            forests: ["Botanic Park", "Mastic Reserve"],
            oceans: ["Caribbean Sea"]
        },

        culture: {
            officialLanguages: ["English"],
            languages: ["English", "Cayman Creole"],
            religions: ["Protestantism (67.8%)", "Roman Catholicism (14.1%)", "Others (18.1%)"],
            heritageSites: [],
            festivals: ["Pirates Week", "Batabano Carnival", "Cayfest"],
            cuisine: ["Turtle Stew", "Conch", "Fish Rundown", "Heavy Cake"],
            arts: ["Traditional Thatch Work", "Caymanite Jewelry", "Cayman Music"],
            sports: ["Football", "Sailing", "Swimming", "Cricket"]
        },

        symbols: {
            bird: "Grand Cayman Parrot",
            animal: "Green Sea Turtle",
            flower: "Wild Banana Orchid",
            tree: "Silver Thatch Palm",
            anthem: "God Save the King / Beloved Isle Cayman",
            motto: "He Hath Founded It upon the Seas"
        },

        demographics: {
            lifeExpectancy: 82.0,
            literacyRate: "98.9%",
            urbanPopulation: "100%",
            medianAge: 40.7
        },

        history: {
            timeline: [
                { year: "1503", title: "Columbus Sighted", description: "Columbus saw the islands" },
                { year: "1670", title: "British Sovereignty", description: "Under British sovereignty" },
                { year: "1959", title: "Dependency Status", description: "Became dependency of Jamaica" },
                { year: "1962", title: "British Territory", description: "Remained British when Jamaica independent" }
            ],
            notableFigures: ["McKeeva Bush", "Wayne Panton"]
        },

        disputes: [],

        membershipStatus: {
            un: false,
            fifa: true,
            fifaMember: true,
            olympics: false,
            note: "FIFA/CONCACAF member; British territory"
        },

        quickFacts: [
            { icon: "dollar-sign", title: "Tax Haven", text: "5th largest financial centre in world; no income tax" },
            { icon: "turtle", title: "Sea Turtles", text: "Famous sea turtle nesting site" },
            { icon: "fish", title: "Stingray City", text: "World-famous stingray interaction site" }
        ]
    },

    // 14. ARUBA
    {
        id: "ABW",
        name: "Aruba",
        officialName: "Aruba (Constituent Country of the Netherlands)",
        flag: "https://flagcdn.com/w320/aw.png",

        images: {
            hero: "https://images.unsplash.com/photo-1553342385-111fd6bc6ab3?w=1920&q=80",
            landscape: "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=1920&q=80",
            city: "https://images.unsplash.com/photo-1570366583862-f91883984fde?w=1920&q=80"
        },

        basic: {
            capital: "Oranjestad",
            continent: "North America",
            region: "Caribbean",
            subregion: "Caribbean",
            population: 107394,
            area: 180,
            populationDensity: 590,
            independence: "Constituent Country of Netherlands",
            callingCode: "+297",
            tld: ".aw",
            drivingSide: "Right",
            electricity: "127V, 60Hz"
        },

        location: {
            coordinates: [12.5211, -69.9683],
            timezone: "UTC-4 (AST)",
            neighbors: [],
            borders: 0,
            hemispheres: ["Northern", "Western"],
            islandNation: true
        },

        political: {
            government: "Parliamentary Democracy (Constituent Country of Netherlands)",
            headOfState: "Dutch Monarch King Willem-Alexander",
            headOfGovernment: "Prime Minister Evelyn Wever-Croes",
            legislature: "Parliament (Staten)",
            legalSystem: "Dutch Civil Law",
            districts: 8,
            largestCity: "Oranjestad",
            organizations: ["FIFA", "CONCACAF"]
        },

        economy: {
            gdp: "$3.5 Billion",
            gdpPPP: "$3.5 Billion",
            gdpPerCapita: "$30,000",
            gdpRank: "N/A",
            gdpGrowth: "6.0%",
            currency: "Aruban Florin",
            currencyCode: "AWG",
            currencySymbol: "ƒ",
            inflation: "4.0%",
            unemployment: "7.7%",
            majorSectors: ["Tourism (80%)", "Financial Services (10%)", "Other (10%)"],
            industries: ["Tourism", "Oil Refining (paused)", "Financial Services"],
            exports: ["Petroleum Products", "Live Animals & Animal Products", "Machinery & Electrical Equipment"],
            imports: ["Crude Petroleum", "Foodstuffs", "Consumer Goods", "Machinery"]
        },

        geography: {
            climate: "Tropical Marine; Little Seasonal Temperature Variation",
            avgTemperature: "28°C",
            annualRainfall: "470 mm",
            highestPoint: "Ceru Jamanota (188 m)",
            lowestPoint: "Caribbean Sea (0 m)",
            coastline: "68.5 km",
            forestCover: "2.3%",
            arableLand: "11.1%",
            terrain: "Flat with a few hills; scant vegetation",
            naturalResources: ["Negligible", "White Sand Beaches", "Tourist Attractions"]
        },

        geography_links: {
            rivers: [],
            mountains: ["Ceru Jamanota"],
            deserts: ["Arikok National Park (Semi-Arid)"],
            forests: [],
            oceans: ["Caribbean Sea"]
        },

        culture: {
            officialLanguages: ["Papiamento", "Dutch"],
            languages: ["Papiamento", "Dutch", "Spanish", "English"],
            religions: ["Roman Catholicism (75.3%)", "Protestantism (4.9%)", "Others (19.8%)"],
            heritageSites: [],
            festivals: ["Carnival", "Dera Gai", "Bon Bini Festival"],
            cuisine: ["Keshi Yena", "Stoba", "Fish Creole", "Pan Bati", "Funchi"],
            arts: ["Carnival Art", "Papiamento Music", "Folkloric Dance"],
            sports: ["Football", "Volleyball", "Basketball", "Sailing", "Windsurfing"]
        },

        symbols: {
            bird: "Burrowing Owl (Shoco)",
            animal: "None Official",
            flower: "Wanglo",
            tree: "Divi-Divi Tree",
            anthem: "Aruba Dushi Tera",
            motto: "None Official"
        },

        demographics: {
            lifeExpectancy: 77.2,
            literacyRate: "97.5%",
            urbanPopulation: "44%",
            medianAge: 39.9
        },

        history: {
            timeline: [
                { year: "1499", title: "Spanish Arrival", description: "Amerigo Vespucci arrived" },
                { year: "1636", title: "Dutch Control", description: "Taken over by Dutch West India Company" },
                { year: "1986", title: "Status Aparte", description: "Separated from Netherlands Antilles as autonomous state" }
            ],
            notableFigures: ["Henny Eman", "Evelyn Wever-Croes"]
        },

        disputes: [],

        membershipStatus: {
            un: false,
            fifa: true,
            fifaMember: true,
            olympics: true,
            iocCode: "ARU",
            note: "Constituent country of Netherlands; FIFA/CONCACAF member"
        },

        quickFacts: [
            { icon: "sun", title: "Sunshine Island", text: "Outside hurricane belt; 300+ sunny days per year" },
            { icon: "wind", title: "Windsurfing", text: "World-class windsurfing destination" },
            { icon: "tree", title: "Divi-Divi Trees", text: "All trees blown permanently in one direction by trade winds" }
        ]
    },

    // 15. CURAÇAO
    {
        id: "CUW",
        name: "Curaçao",
        officialName: "Curaçao (Constituent Country of the Netherlands)",
        flag: "https://flagcdn.com/w320/cw.png",

        images: {
            hero: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80",
            landscape: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&q=80",
            city: "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=1920&q=80"
        },

        basic: {
            capital: "Willemstad",
            continent: "North America",
            region: "Caribbean",
            subregion: "Caribbean",
            population: 191163,
            area: 444,
            populationDensity: 360,
            independence: "Constituent Country of Netherlands",
            callingCode: "+599",
            tld: ".cw",
            drivingSide: "Right",
            electricity: "127V, 50Hz"
        },

        location: {
            coordinates: [12.1696, -68.9900],
            timezone: "UTC-4 (AST)",
            neighbors: [],
            borders: 0,
            hemispheres: ["Northern", "Western"],
            islandNation: true
        },

        political: {
            government: "Parliamentary Democracy (Constituent Country of Netherlands)",
            headOfState: "Dutch Monarch King Willem-Alexander",
            headOfGovernment: "Prime Minister Gilmar Pisas",
            legislature: "Estates of Curaçao",
            legalSystem: "Dutch Civil Law",
            largestCity: "Willemstad",
            organizations: ["FIFA", "CONCACAF"]
        },

        economy: {
            gdp: "$3.4 Billion",
            gdpPPP: "$3.4 Billion",
            gdpPerCapita: "$17,000",
            gdpRank: "N/A",
            gdpGrowth: "4.0%",
            currency: "Netherlands Antillean Guilder",
            currencyCode: "ANG",
            currencySymbol: "ƒ",
            inflation: "3.5%",
            unemployment: "13.0%",
            majorSectors: ["Tourism (30%)", "Oil Refining (25%)", "Financial Services (25%)"],
            industries: ["Tourism", "Oil Refining", "Petroleum Transshipment", "Financial Services"],
            exports: ["Petroleum Products", "Medical Instruments"],
            imports: ["Crude Petroleum", "Food", "Manufactures"]
        },

        geography: {
            climate: "Tropical Marine; Relatively Dry",
            avgTemperature: "28°C",
            annualRainfall: "570 mm",
            highestPoint: "Christoffelberg (372 m)",
            lowestPoint: "Caribbean Sea (0 m)",
            coastline: "364 km",
            forestCover: "0%",
            arableLand: "10%",
            terrain: "Generally low, hilly terrain",
            naturalResources: ["Calcium Phosphates", "Protected Coastlines", "Diving Sites"]
        },

        geography_links: {
            rivers: [],
            mountains: ["Christoffelberg"],
            deserts: [],
            forests: ["Christoffel National Park"],
            oceans: ["Caribbean Sea"]
        },

        culture: {
            officialLanguages: ["Papiamentu", "Dutch", "English"],
            languages: ["Papiamentu", "Dutch", "English", "Spanish"],
            religions: ["Roman Catholicism (72.8%)", "Protestantism (6.6%)", "Others (20.6%)"],
            heritageSites: ["Willemstad Historic Area (UNESCO)"],
            festivals: ["Carnival", "Seú Harvest Parade", "Tumba Festival"],
            cuisine: ["Karni Stoba", "Keshi Yena", "Iguana Stew", "Blue Curaçao Liqueur"],
            arts: ["Tumba Music", "Tambú", "Colorful Dutch Colonial Architecture"],
            sports: ["Football", "Baseball", "Basketball", "Volleyball"]
        },

        symbols: {
            bird: "Blue-tailed Emerald Hummingbird (Kolibri)",
            animal: "None Official",
            flower: "None Official",
            tree: "Divi-Divi Tree",
            anthem: "Himno di Kòrsou",
            motto: "None Official"
        },

        demographics: {
            lifeExpectancy: 78.7,
            literacyRate: "96.7%",
            urbanPopulation: "89%",
            medianAge: 41.5
        },

        history: {
            timeline: [
                { year: "1499", title: "Spanish Arrival", description: "Alonso de Ojeda arrived" },
                { year: "1634", title: "Dutch Control", description: "Dutch took control" },
                { year: "1863", title: "Slavery Abolished", description: "Slavery abolished" },
                { year: "2010", title: "Separate Country", description: "Became separate constituent country within Netherlands" }
            ],
            notableFigures: ["Gilmar Pisas", "Henry Elhage"]
        },

        disputes: [],

        membershipStatus: {
            un: false,
            fifa: true,
            fifaMember: true,
            olympics: false,
            note: "FIFA/CONCACAF member since 2010"
        },

        quickFacts: [
            { icon: "paint-brush", title: "Colorful Capital", text: "Willemstad's colorful Dutch colonial buildings are UNESCO heritage" },
            { icon: "glass-martini", title: "Blue Liqueur", text: "Original Blue Curaçao liqueur comes from here" },
            { icon: "anchor", title: "Natural Harbour", text: "Natural deep-water harbour at Willemstad" }
        ]
    },

    // 16. BRITISH VIRGIN ISLANDS
    {
        id: "VGB",
        name: "British Virgin Islands",
        officialName: "British Virgin Islands (British Overseas Territory)",
        flag: "https://flagcdn.com/w320/vg.png",

        images: {
            hero: "https://images.unsplash.com/photo-1559827291-72ee739d0d9a?w=1920&q=80",
            landscape: "https://images.unsplash.com/photo-1548574505-5e239809ee19?w=1920&q=80",
            city: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&q=80"
        },

        basic: {
            capital: "Road Town",
            continent: "North America",
            region: "Caribbean",
            subregion: "Caribbean",
            population: 31122,
            area: 151,
            populationDensity: 206,
            independence: "British Overseas Territory",
            callingCode: "+1-284",
            tld: ".vg",
            drivingSide: "Left",
            electricity: "110V, 60Hz"
        },

        location: {
            coordinates: [18.4207, -64.6400],
            timezone: "UTC-4 (AST)",
            neighbors: ["US Virgin Islands"],
            borders: 0,
            hemispheres: ["Northern", "Western"],
            islandNation: true,
            islands: 60
        },

        political: {
            government: "British Overseas Territory",
            headOfState: "British Monarch King Charles III",
            headOfGovernment: "Premier Natalio Wheatley",
            legislature: "House of Assembly",
            legalSystem: "English Common Law",
            districts: 9,
            largestCity: "Road Town",
            organizations: ["FIFA", "CONCACAF", "IOC"]
        },

        economy: {
            gdp: "$1.6 Billion",
            gdpPPP: "$1.6 Billion",
            gdpPerCapita: "$49,300",
            gdpRank: "N/A",
            gdpGrowth: "2.5%",
            currency: "United States Dollar",
            currencyCode: "USD",
            currencySymbol: "$",
            inflation: "3.5%",
            unemployment: "2.9%",
            majorSectors: ["Financial Services (60%)", "Tourism (35%)", "Other (5%)"],
            industries: ["Tourism", "Financial Services (Offshore)", "Light Industry"],
            exports: ["Rum", "Fresh Fish", "Gravel", "Sand", "Fruits & Vegetables"],
            imports: ["Foodstuffs", "Machinery", "Chemicals", "Fuels", "Lubricants"]
        },

        geography: {
            climate: "Subtropical; Hot, Humid; Tempered by Trade Winds",
            avgTemperature: "27°C",
            annualRainfall: "1,150 mm",
            highestPoint: "Mount Sage (543 m)",
            lowestPoint: "Caribbean Sea (0 m)",
            coastline: "80 km",
            forestCover: "24.3%",
            arableLand: "6.7%",
            terrain: "Coral islands relatively flat; volcanic islands steep, hilly",
            naturalResources: ["Negligible"]
        },

        geography_links: {
            rivers: [],
            mountains: ["Mount Sage"],
            deserts: [],
            forests: ["Sage Mountain National Park"],
            oceans: ["Caribbean Sea", "Atlantic Ocean"]
        },

        culture: {
            officialLanguages: ["English"],
            languages: ["English", "Spanish", "Creole"],
            religions: ["Protestantism (86%)", "Roman Catholicism (10%)", "Others (4%)"],
            heritageSites: [],
            festivals: ["August Festival", "Spring Regatta", "BVI Music Festival"],
            cuisine: ["Fish & Fungi", "Conch", "Roti", "Seafood"],
            arts: ["Quadrille Dancing", "Fungi Music (Scratch Band)"],
            sports: ["Sailing", "Football", "Cricket", "Athletics"]
        },

        symbols: {
            bird: "Mourning Dove",
            animal: "None Official",
            flower: "Bougainvillea",
            tree: "None Official",
            anthem: "God Save the King",
            motto: "Vigilate (Be Watchful)"
        },

        demographics: {
            lifeExpectancy: 79.8,
            literacyRate: "98.2%",
            urbanPopulation: "49%",
            medianAge: 38.5
        },

        history: {
            timeline: [
                { year: "1493", title: "Columbus Named", description: "Columbus named the islands" },
                { year: "1672", title: "British Control", description: "British established colony" },
                { year: "1967", title: "Self-Government", description: "Ministerial government established" }
            ],
            notableFigures: ["Lavity Stoutt", "Natalio Wheatley"]
        },

        disputes: [],

        membershipStatus: {
            un: false,
            fifa: true,
            fifaMember: true,
            olympics: true,
            iocCode: "IVB",
            note: "British territory; competes separately from UK in FIFA and Olympics"
        },

        quickFacts: [
            { icon: "ship", title: "Sailing Paradise", text: "Among world's top sailing destinations" },
            { icon: "dollar-sign", title: "Offshore Finance", text: "Over 400,000 companies registered; tax haven" },
            { icon: "anchor", title: "Road Town", text: "Natural harbour capital" }
        ]
    },

    // ============================================
    // ADDITIONAL OLYMPIC-ONLY NOCs
    // ============================================

    // 17. AMERICAN SAMOA
    {
        id: "ASM",
        name: "American Samoa",
        officialName: "American Samoa (US Territory)",
        flag: "https://flagcdn.com/w320/as.png",

        images: {
            hero: "https://images.unsplash.com/photo-1589394760236-7e84a9c2f236?w=1920&q=80",
            landscape: "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=1920&q=80",
            city: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&q=80"
        },

        basic: {
            capital: "Pago Pago",
            continent: "Oceania",
            region: "Polynesia",
            subregion: "Polynesia",
            population: 46366,
            area: 199,
            populationDensity: 264,
            independence: "US Unincorporated Territory",
            callingCode: "+1-684",
            tld: ".as",
            drivingSide: "Right",
            electricity: "120V, 60Hz"
        },

        location: {
            coordinates: [-14.2710, -170.1322],
            timezone: "UTC-11 (SST)",
            neighbors: ["Samoa"],
            borders: 0,
            hemispheres: ["Southern", "Western"],
            islandNation: true
        },

        political: {
            government: "Unincorporated Territory of the United States",
            headOfState: "President of the United States",
            headOfGovernment: "Governor Lemanu Peleti Mauga",
            legislature: "Fono (Senate & House)",
            legalSystem: "US Law",
            districts: 3,
            largestCity: "Tafuna",
            organizations: ["FIFA", "OFC", "IOC"]
        },

        economy: {
            gdp: "$658 Million",
            gdpPPP: "$658 Million",
            gdpPerCapita: "$14,268",
            gdpRank: "N/A",
            gdpGrowth: "1.0%",
            currency: "United States Dollar",
            currencyCode: "USD",
            currencySymbol: "$",
            inflation: "3.0%",
            unemployment: "29.8%",
            majorSectors: ["Government (50%)", "Tuna Canning (30%)", "Services (20%)"],
            industries: ["Tuna Canning", "Handicrafts", "Tourism"],
            exports: ["Canned Tuna"],
            imports: ["Materials for Canning Industry", "Food", "Petroleum Products"]
        },

        geography: {
            climate: "Tropical Marine; Moderated by Trade Winds",
            avgTemperature: "27°C",
            annualRainfall: "3,175 mm",
            highestPoint: "Lata Mountain (964 m)",
            lowestPoint: "Pacific Ocean (0 m)",
            coastline: "116 km",
            forestCover: "75.9%",
            arableLand: "9.5%",
            terrain: "Five volcanic islands with rugged peaks and limited coastal plains; two coral atolls",
            naturalResources: ["Pumice", "Pumicite"]
        },

        geography_links: {
            rivers: [],
            mountains: ["Lata Mountain", "Mount Matafao", "Olotele Mountain"],
            deserts: [],
            forests: ["National Park of American Samoa"],
            oceans: ["Pacific Ocean", "South Pacific Ocean"]
        },

        culture: {
            officialLanguages: ["Samoan", "English"],
            languages: ["Samoan", "English", "Tongan"],
            religions: ["Christianity (98%)"],
            heritageSites: ["National Park of American Samoa"],
            festivals: ["Flag Day (April 17)", "White Sunday"],
            cuisine: ["Palusami", "Umu (Earth Oven)", "Cocoa Samoa", "Fa'apapa"],
            arts: ["Siapo (Bark Cloth)", "Fine Mat Weaving", "Traditional Dance (Fa'ataupati)"],
            sports: ["American Football (NFL highest per-capita players)", "Rugby", "Cricket", "Football"]
        },

        symbols: {
            bird: "Manumea (Tooth-billed Pigeon)",
            animal: "None Official",
            flower: "Paogo (Ula-fala)",
            tree: "Pago (Polynesian Arrowroot)",
            anthem: "Amerika Samoa",
            motto: "Samoa Muamua le Atua (In Samoa, God is First)"
        },

        demographics: {
            lifeExpectancy: 75.7,
            literacyRate: "97%",
            urbanPopulation: "88%",
            medianAge: 24.8
        },

        history: {
            timeline: [
                { year: "1722", title: "Dutch Contact", description: "Jacob Roggeveen first European contact" },
                { year: "1900", title: "US Territory", description: "Chiefs ceded islands to US" },
                { year: "1929", title: "Formally Organized", description: "Officially organized as US territory" }
            ],
            notableFigures: ["Peter Faleolo", "Troy Polamalu (NFL star from AS heritage)"]
        },

        disputes: [],

        membershipStatus: {
            un: false,
            fifa: true,
            fifaMember: true,
            olympics: true,
            iocCode: "ASA",
            note: "US territory; competes separately from USA in FIFA and Olympics. Famous for producing NFL players per capita."
        },

        quickFacts: [
            { icon: "football", title: "NFL Pipeline", text: "Produces most NFL players per capita in world" },
            { icon: "fish", title: "Tuna Capital", text: "Major tuna canning centre" },
            { icon: "mountain", title: "National Park", text: "Only US National Park in Southern Hemisphere" }
        ]
    },

    // 18. NORTHERN MARIANA ISLANDS
    {
        id: "MNP",
        name: "Northern Mariana Islands",
        officialName: "Commonwealth of the Northern Mariana Islands (US Territory)",
        flag: "https://flagcdn.com/w320/mp.png",

        images: {
            hero: "https://images.unsplash.com/photo-1590080876351-41869c704571?w=1920&q=80",
            landscape: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&q=80",
            city: "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=1920&q=80"
        },

        basic: {
            capital: "Saipan",
            continent: "Oceania",
            region: "Micronesia",
            subregion: "Micronesia",
            population: 57557,
            area: 464,
            populationDensity: 124,
            independence: "US Commonwealth Territory",
            callingCode: "+1-670",
            tld: ".mp",
            drivingSide: "Right",
            electricity: "120V, 60Hz"
        },

        location: {
            coordinates: [15.0979, 145.6739],
            timezone: "UTC+10 (ChST)",
            neighbors: [],
            borders: 0,
            hemispheres: ["Northern", "Eastern"],
            islandNation: true,
            islands: 14
        },

        political: {
            government: "Commonwealth (Self-governing Territory of the US)",
            headOfState: "President of the United States",
            headOfGovernment: "Governor Arnold Palacios",
            legislature: "Commonwealth Legislature",
            legalSystem: "US Law",
            municipalities: 4,
            largestCity: "Saipan",
            organizations: ["FIFA", "IOC"]
        },

        economy: {
            gdp: "$1.24 Billion",
            gdpPPP: "$1.24 Billion",
            gdpPerCapita: "$21,560",
            gdpRank: "N/A",
            gdpGrowth: "2.0%",
            currency: "United States Dollar",
            currencyCode: "USD",
            currencySymbol: "$",
            inflation: "3.0%",
            unemployment: "11.2%",
            majorSectors: ["Tourism (60%)", "Garments (Past)", "Government (30%)"],
            industries: ["Tourism", "Government Services", "Garment Manufacturing (former)"],
            exports: ["Garments (declining)", "Tourism Services"],
            imports: ["Food", "Construction Materials", "Petroleum"]
        },

        geography: {
            climate: "Tropical Marine; Moderated by Northeast Trade Winds; Typhoons",
            avgTemperature: "28°C",
            annualRainfall: "2,170 mm",
            highestPoint: "Suicide Cliff/Mount Tapochau (474 m)",
            lowestPoint: "Pacific Ocean (0 m)",
            coastline: "1,482 km",
            forestCover: "65.5%",
            arableLand: "13.6%",
            terrain: "Southern islands limestone with level terraces; northern islands volcanic",
            naturalResources: ["Arable Land", "Fish"]
        },

        geography_links: {
            rivers: [],
            mountains: ["Mount Tapochau (Saipan)", "Mount Olympus (Rota)"],
            deserts: [],
            forests: ["Mariana Islands Forest"],
            oceans: ["Pacific Ocean", "Philippine Sea"]
        },

        culture: {
            officialLanguages: ["English", "Chamorro", "Carolinian"],
            languages: ["English", "Chamorro", "Carolinian", "Filipino languages"],
            religions: ["Roman Catholicism (89%)"],
            heritageSites: ["American Memorial Park", "Suicide Cliff"],
            festivals: ["Flame Tree Festival", "Liberation Day"],
            cuisine: ["Kelaguen", "Red Rice", "Tinaktak", "Kadon Pika"],
            arts: ["Chamorro Weaving", "Traditional Dance", "Pottery"],
            sports: ["Football", "Basketball", "Volleyball", "Baseball"]
        },

        symbols: {
            bird: "Mariana Fruit Dove (Totot)",
            animal: "None Official",
            flower: "Plumeria",
            tree: "Breadfruit (Lemmai)",
            anthem: "Star-Spangled Banner / Gi Talo Gi Halom Tasi",
            motto: "None Official"
        },

        demographics: {
            lifeExpectancy: 76.2,
            literacyRate: "97%",
            urbanPopulation: "92%",
            medianAge: 33.0
        },

        history: {
            timeline: [
                { year: "1521", title: "Magellan Arrived", description: "First European contact" },
                { year: "1668", title: "Spanish Colony", description: "Jesuits established colony" },
                { year: "1899", title: "German Rule", description: "Spain sold to Germany" },
                { year: "1914", title: "Japanese Mandate", description: "Japan occupied in WWI" },
                { year: "1944", title: "US Capture", description: "US captured in WWII" },
                { year: "1978", title: "Commonwealth", description: "Became US Commonwealth" }
            ],
            notableFigures: ["Pedro P. Tenorio", "Arnold Palacios"]
        },

        disputes: [],

        membershipStatus: {
            un: false,
            fifa: true,
            fifaMember: true,
            olympics: false,
            note: "FIFA member since 2009; US Commonwealth territory"
        },

        quickFacts: [
            { icon: "mountain", title: "WWII History", text: "Site of crucial WWII Pacific battles" },
            { icon: "fish", title: "Mariana Trench", text: "Near the world's deepest ocean trench" },
            { icon: "sun", title: "Warm Year Round", text: "Average temperature stays around 28°C all year" }
        ]
    },

    // 19. COOK ISLANDS
    {
        id: "COK",
        name: "Cook Islands",
        officialName: "Cook Islands (Free Association with New Zealand)",
        flag: "https://flagcdn.com/w320/ck.png",

        images: {
            hero: "https://images.unsplash.com/photo-1589394760236-7e84a9c2f236?w=1920&q=80",
            landscape: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&q=80",
            city: "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=1920&q=80"
        },

        basic: {
            capital: "Avarua",
            continent: "Oceania",
            region: "Polynesia",
            subregion: "Polynesia",
            population: 17459,
            area: 237,
            populationDensity: 74,
            independence: "Self-Governing in Free Association with New Zealand",
            callingCode: "+682",
            tld: ".ck",
            drivingSide: "Left",
            electricity: "240V, 50Hz"
        },

        location: {
            coordinates: [-21.2367, -159.7777],
            timezone: "UTC-10 (CKT)",
            neighbors: [],
            borders: 0,
            hemispheres: ["Southern", "Western"],
            islandNation: true,
            islands: 15
        },

        political: {
            government: "Self-Governing Parliamentary Democracy in Free Association with New Zealand",
            headOfState: "New Zealand Monarch King Charles III",
            headOfGovernment: "Prime Minister Mark Brown",
            legislature: "Parliament",
            legalSystem: "New Zealand and English Common Law",
            islands: 15,
            largestCity: "Avarua",
            organizations: ["FIFA", "OFC", "IOC"]
        },

        economy: {
            gdp: "$361 Million",
            gdpPPP: "$361 Million",
            gdpPerCapita: "$21,000",
            gdpRank: "N/A",
            gdpGrowth: "5.0%",
            currency: "Cook Islands Dollar / New Zealand Dollar",
            currencyCode: "NZD",
            currencySymbol: "NZ$",
            inflation: "4.0%",
            unemployment: "13.1%",
            majorSectors: ["Tourism (75%)", "Fishing (10%)", "Agriculture (10%)"],
            industries: ["Tourism", "Fishing", "Fruit Processing", "Handicrafts"],
            exports: ["Copra", "Fish", "Pearls", "Black Pearl", "Tropical Fruit"],
            imports: ["Foodstuffs", "Textiles", "Fuels", "Timber", "Capital Goods"]
        },

        geography: {
            climate: "Tropical Oceanic; Moderated by Trade Winds",
            avgTemperature: "24°C",
            annualRainfall: "2,000 mm",
            highestPoint: "Te Manga (652 m)",
            lowestPoint: "Pacific Ocean (0 m)",
            coastline: "120 km",
            forestCover: "64.6%",
            arableLand: "8.4%",
            terrain: "Low coral atolls in north; volcanic, hilly islands in south",
            naturalResources: ["Manganese Nodules", "Salt", "Fish", "Timber"]
        },

        geography_links: {
            rivers: [],
            mountains: ["Te Manga"],
            deserts: [],
            forests: ["Tropical Forests"],
            oceans: ["South Pacific Ocean"]
        },

        culture: {
            officialLanguages: ["Cook Islands Māori", "English"],
            languages: ["Cook Islands Māori", "English"],
            religions: ["Christianity (95%)"],
            heritageSites: [],
            festivals: ["Constitution Day", "Dance Festival", "Gospel Day"],
            cuisine: ["Ika Mata (Raw Fish)", "Rori (Sea Cucumber)", "Rukau (Taro Leaves)", "Umu (Earth Oven Food)"],
            arts: ["Traditional Dance", "Tivaevae (Quilting)", "Wood Carving", "Pearl Jewelry"],
            sports: ["Football", "Rugby", "Cricket", "Outrigger Canoe Racing"]
        },

        symbols: {
            bird: "Chatham Petrel",
            animal: "None Official",
            flower: "Tiare Maori",
            tree: "Breadfruit",
            anthem: "Te Atua Mou E (Oh God Almighty)",
            motto: "None Official"
        },

        demographics: {
            lifeExpectancy: 76.3,
            literacyRate: "95%",
            urbanPopulation: "75%",
            medianAge: 35.9
        },

        history: {
            timeline: [
                { year: "1773", title: "Cook Arrived", description: "Captain James Cook arrived" },
                { year: "1888", title: "British Protectorate", description: "Became British protectorate" },
                { year: "1901", title: "New Zealand Annex", description: "Annexed by New Zealand" },
                { year: "1965", title: "Self-Government", description: "Gained self-government in free association" }
            ],
            notableFigures: ["Geoffrey Henry", "Mark Brown"]
        },

        disputes: [],

        membershipStatus: {
            un: false,
            fifa: true,
            fifaMember: true,
            olympics: true,
            iocCode: "COK",
            note: "Self-governing in free association with New Zealand; FIFA and IOC member"
        },

        quickFacts: [
            { icon: "gem", title: "Black Pearls", text: "Famous for Penrhyn and Manihiki black pearls" },
            { icon: "anchor", title: "Cook's Islands", text: "Named after Captain James Cook" },
            { icon: "passport", title: "NZ Citizens", text: "Residents hold New Zealand citizenship" }
        ]
    },

    // 20. NIUE
    {
        id: "NIU",
        name: "Niue",
        officialName: "Niue (Free Association with New Zealand)",
        flag: "https://flagcdn.com/w320/nu.png",

        images: {
            hero: "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=1920&q=80",
            landscape: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&q=80",
            city: "https://images.unsplash.com/photo-1589394760236-7e84a9c2f236?w=1920&q=80"
        },

        basic: {
            capital: "Alofi",
            continent: "Oceania",
            region: "Polynesia",
            subregion: "Polynesia",
            population: 1620,
            area: 260,
            populationDensity: 6.4,
            independence: "Self-Governing in Free Association with New Zealand",
            callingCode: "+683",
            tld: ".nu",
            drivingSide: "Left",
            electricity: "230V, 50Hz"
        },

        location: {
            coordinates: [-19.0544, -169.8672],
            timezone: "UTC-11 (NUT)",
            neighbors: [],
            borders: 0,
            hemispheres: ["Southern", "Western"],
            islandNation: true
        },

        political: {
            government: "Self-Governing Parliamentary Democracy in Free Association with New Zealand",
            headOfState: "New Zealand Monarch King Charles III",
            headOfGovernment: "Premier Dalton Tagelagi",
            legislature: "Niue Assembly",
            legalSystem: "New Zealand and English Law",
            villages: 14,
            largestCity: "Alofi",
            organizations: ["FIFA", "OFC"]
        },

        economy: {
            gdp: "$10 Million (est.)",
            gdpPPP: "$10 Million",
            gdpPerCapita: "$6,000",
            gdpRank: "N/A",
            gdpGrowth: "2.0%",
            currency: "New Zealand Dollar",
            currencyCode: "NZD",
            currencySymbol: "NZ$",
            inflation: "4.0%",
            unemployment: "12.0%",
            majorSectors: ["Tourism", "Fishing", "Handicrafts"],
            industries: ["Tourism", "Fishing"],
            exports: ["Canned Coconut Cream", "Copra", "Honey", "Vanilla", "Passion Fruit", "Footballs"],
            imports: ["Food", "Manufactured Goods", "Fuel"]
        },

        geography: {
            climate: "Tropical; Modified by Trade Winds",
            avgTemperature: "26°C",
            annualRainfall: "2,000 mm",
            highestPoint: "Unnamed Location (68 m)",
            lowestPoint: "Pacific Ocean (0 m)",
            coastline: "64 km",
            forestCover: "71.2%",
            arableLand: "3.8%",
            terrain: "Steep limestone cliffs along coast; flat central plateau",
            naturalResources: ["Fish", "Arable Land"]
        },

        geography_links: {
            rivers: [],
            mountains: [],
            deserts: [],
            forests: ["Huvalu Conservation Area"],
            oceans: ["South Pacific Ocean"]
        },

        culture: {
            officialLanguages: ["Niuean", "English"],
            languages: ["Niuean", "English"],
            religions: ["Ekalesia Niue (Church of Niue) (67%)", "Other Christianity (33%)"],
            heritageSites: [],
            festivals: ["Constitution Day", "Niue Show Week"],
            cuisine: ["Takihi (Papaya & Coconut)", "Lu Sipi (Lamb & Taro)", "Ika (Fish)", "Coconut Dishes"],
            arts: ["Haiakai (Plaiting)", "Traditional Dance"],
            sports: ["Rugby", "Cricket", "Football", "Athletics"]
        },

        symbols: {
            bird: "None Official",
            animal: "None Official",
            flower: "Frangipani",
            tree: "None Official",
            anthem: "Ko e Iki he Lagi (The Lord in Heaven)",
            motto: "None Official"
        },

        demographics: {
            lifeExpectancy: 72.0,
            literacyRate: "95%",
            urbanPopulation: "46%",
            medianAge: 30.0
        },

        history: {
            timeline: [
                { year: "1774", title: "Cook Arrived", description: "Captain Cook visited, called it 'Savage Island'" },
                { year: "1900", title: "British Protectorate", description: "Became British protectorate" },
                { year: "1901", title: "New Zealand Annex", description: "Annexed by New Zealand" },
                { year: "1974", title: "Self-Government", description: "Became self-governing in free association" }
            ],
            notableFigures: ["Rex Rex", "Dalton Tagelagi"]
        },

        disputes: [],

        membershipStatus: {
            un: false,
            fifa: true,
            fifaMember: true,
            olympics: false,
            note: "FIFA/OFC member; one of world's smallest FIFA members"
        },

        quickFacts: [
            { icon: "users", title: "Tiny Population", text: "One of world's smallest countries by population (1,600)" },
            { icon: "globe", title: "Internet Giant", text: "'.nu' domain is one of world's most registered TLDs" },
            { icon: "fish", title: "Diving Paradise", text: "World-class diving with crystal clear water" }
        ]
    },

    // 21. MONTSERRAT
    {
        id: "MSR",
        name: "Montserrat",
        officialName: "Montserrat (British Overseas Territory)",
        flag: "https://flagcdn.com/w320/ms.png",

        images: {
            hero: "https://images.unsplash.com/photo-1559827291-72ee739d0d9a?w=1920&q=80",
            landscape: "https://images.unsplash.com/photo-1548574505-5e239809ee19?w=1920&q=80",
            city: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&q=80"
        },

        basic: {
            capital: "Brades (de facto); Plymouth (de jure, buried under ash)",
            continent: "North America",
            region: "Caribbean",
            subregion: "Caribbean",
            population: 4390,
            area: 102,
            populationDensity: 43,
            independence: "British Overseas Territory",
            callingCode: "+1-664",
            tld: ".ms",
            drivingSide: "Left",
            electricity: "230V, 60Hz"
        },

        location: {
            coordinates: [16.7425, -62.1874],
            timezone: "UTC-4 (AST)",
            neighbors: [],
            borders: 0,
            hemispheres: ["Northern", "Western"],
            islandNation: true
        },

        political: {
            government: "British Overseas Territory",
            headOfState: "British Monarch King Charles III",
            headOfGovernment: "Premier Easton Taylor-Farrell",
            legislature: "Legislative Assembly",
            legalSystem: "English Common Law",
            parishes: 3,
            largestCity: "Brades",
            organizations: ["FIFA", "CONCACAF"]
        },

        economy: {
            gdp: "$67.6 Million",
            gdpPPP: "$67.6 Million",
            gdpPerCapita: "$13,000",
            gdpRank: "N/A",
            gdpGrowth: "2.0%",
            currency: "East Caribbean Dollar",
            currencyCode: "XCD",
            currencySymbol: "EC$",
            inflation: "2.0%",
            unemployment: "6.0%",
            majorSectors: ["Tourism (50%)", "Government (30%)", "Construction"],
            industries: ["Tourism", "Construction", "UK Aid"],
            exports: ["Electronic Components", "Plastic Bags", "Rum"],
            imports: ["Machinery", "Foodstuffs", "Electronics", "Fuel"]
        },

        geography: {
            climate: "Tropical; Little Seasonal Temperature Variation",
            avgTemperature: "27°C",
            annualRainfall: "1,500 mm",
            highestPoint: "Soufrière Hills Volcano (915 m)",
            lowestPoint: "Caribbean Sea (0 m)",
            coastline: "40 km",
            forestCover: "25%",
            arableLand: "20%",
            terrain: "Volcanic island; mostly mountainous with small coastal lowlands",
            naturalResources: ["Negligible"]
        },

        geography_links: {
            rivers: [],
            mountains: ["Soufrière Hills (Active Volcano)", "Silver Hill", "Centre Hills"],
            deserts: [],
            forests: ["Centre Hills Forest Reserve"],
            oceans: ["Caribbean Sea"]
        },

        culture: {
            officialLanguages: ["English"],
            languages: ["English", "Montserrat Creole"],
            religions: ["Anglicanism (21.8%)", "Methodism (17%)", "Pentecostalism (14.1%)", "Roman Catholicism (11.6%)"],
            heritageSites: [],
            festivals: ["St. Patrick's Day (National Holiday)", "Calabash Festival", "Christmas Festivities"],
            cuisine: ["Goat Water (National Dish)", "Mountain Chicken (Frog)", "Fungi", "Saltfish"],
            arts: ["Masquerade Dance", "Calypso Music", "Scratchy Band"],
            sports: ["Cricket", "Football", "Basketball"]
        },

        symbols: {
            bird: "Montserrat Oriole",
            animal: "None Official",
            flower: "Heliconia",
            tree: "None Official",
            anthem: "God Save the King",
            motto: "Pulchre Ut Prosim (Dressed Up to Serve)"
        },

        demographics: {
            lifeExpectancy: 75.2,
            literacyRate: "97%",
            urbanPopulation: "9%",
            medianAge: 40.0
        },

        history: {
            timeline: [
                { year: "1493", title: "Columbus Named", description: "Columbus named after Montserrat abbey in Spain" },
                { year: "1632", title: "English Colony", description: "English established colony, Irish Catholics settled" },
                { year: "1997", title: "Volcano Erupted", description: "Soufrière Hills erupted, buried capital Plymouth" },
                { year: "1997-present", title: "Ongoing Eruption", description: "Southern part of island uninhabitable" }
            ],
            notableFigures: ["George Martin (recorded Beatles here)", "Arrow (Hot Hot Hot singer)"]
        },

        disputes: [],

        membershipStatus: {
            un: false,
            fifa: true,
            fifaMember: true,
            olympics: false,
            note: "FIFA/CONCACAF member; famous for active volcano that buried its capital"
        },

        quickFacts: [
            { icon: "fire", title: "Active Volcano", text: "Active volcano buried the capital Plymouth in 1997" },
            { icon: "music", title: "Beatles Connection", text: "AIR Studios recorded Beatles, Stones, McCartney albums here" },
            { icon: "flag", title: "Irish Heritage", text: "Only country outside Ireland to celebrate St. Patrick's Day as national holiday" }
        ]
    },

    // 22. ANGUILLA
    {
        id: "AIA",
        name: "Anguilla",
        officialName: "Anguilla (British Overseas Territory)",
        flag: "https://flagcdn.com/w320/ai.png",

        images: {
            hero: "https://images.unsplash.com/photo-1559827291-72ee739d0d9a?w=1920&q=80",
            landscape: "https://images.unsplash.com/photo-1548574505-5e239809ee19?w=1920&q=80",
            city: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&q=80"
        },

        basic: {
            capital: "The Valley",
            continent: "North America",
            region: "Caribbean",
            subregion: "Caribbean",
            population: 18090,
            area: 91,
            populationDensity: 199,
            independence: "British Overseas Territory",
            callingCode: "+1-264",
            tld: ".ai",
            drivingSide: "Left",
            electricity: "110V, 60Hz"
        },

        location: {
            coordinates: [18.2206, -63.0686],
            timezone: "UTC-4 (AST)",
            neighbors: [],
            borders: 0,
            hemispheres: ["Northern", "Western"],
            islandNation: true
        },

        political: {
            government: "British Overseas Territory",
            headOfState: "British Monarch King Charles III",
            headOfGovernment: "Chief Minister Dr. Ellis Webster",
            legislature: "House of Assembly",
            legalSystem: "English Common Law",
            districts: 2,
            largestCity: "The Valley",
            organizations: ["FIFA", "CONCACAF"]
        },

        economy: {
            gdp: "$372 Million",
            gdpPPP: "$372 Million",
            gdpPerCapita: "$20,000",
            gdpRank: "N/A",
            gdpGrowth: "3.0%",
            currency: "East Caribbean Dollar",
            currencyCode: "XCD",
            currencySymbol: "EC$",
            inflation: "3.0%",
            unemployment: "8.0%",
            majorSectors: ["Tourism (75%)", "Financial Services (20%)", "Other (5%)"],
            industries: ["Tourism (Luxury)", "Offshore Finance", "Lobster Fishing"],
            exports: ["Lobster", "Fish", "Livestock", "Salt", "Concrete Blocks"],
            imports: ["Foodstuffs", "Manufactured Goods", "Machinery", "Fuels"]
        },

        geography: {
            climate: "Tropical; Moderated by Northeast Trade Winds",
            avgTemperature: "27.2°C",
            annualRainfall: "914 mm",
            highestPoint: "Crocus Hill (65 m)",
            lowestPoint: "Caribbean Sea (0 m)",
            coastline: "61 km",
            forestCover: "61%",
            arableLand: "11.1%",
            terrain: "Flat and low-lying island of coral and limestone",
            naturalResources: ["Salt", "Fish", "Lobster"]
        },

        geography_links: {
            rivers: [],
            mountains: ["Crocus Hill"],
            deserts: [],
            forests: [],
            oceans: ["Caribbean Sea", "Atlantic Ocean"]
        },

        culture: {
            officialLanguages: ["English"],
            languages: ["English", "Anguillian Creole"],
            religions: ["Anglicanism (29%)", "Methodism (23%)", "Other Protestantism (30%)", "Roman Catholicism (5%)"],
            heritageSites: [],
            festivals: ["Carnival (August)", "Heritage Day", "Regatta"],
            cuisine: ["Lobster", "Pigeon Peas & Rice", "Johnnycakes", "Snapper"],
            arts: ["Boat Racing", "Folk Music", "Pottery"],
            sports: ["Boat Racing (National Sport)", "Football", "Cricket", "Basketball"]
        },

        symbols: {
            bird: "Zenaida Dove",
            animal: "None Official",
            flower: "Black-eyed Susan",
            tree: "None Official",
            anthem: "God Bless Anguilla",
            motto: "Strength and Endurance"
        },

        demographics: {
            lifeExpectancy: 81.9,
            literacyRate: "95%",
            urbanPopulation: "100%",
            medianAge: 36.0
        },

        history: {
            timeline: [
                { year: "1650", title: "British Settled", description: "British settlers from St. Kitts colonized" },
                { year: "1967", title: "Anguillian Revolution", description: "Revolted against St. Kitts administration" },
                { year: "1980", title: "Separate Territory", description: "Formally separated from St. Kitts-Nevis" }
            ],
            notableFigures: ["James Ronald Webster", "Ellis Webster"]
        },

        disputes: [],

        membershipStatus: {
            un: false,
            fifa: true,
            fifaMember: true,
            olympics: false,
            note: "FIFA/CONCACAF member; British overseas territory"
        },

        quickFacts: [
            { icon: "anchor", title: "Luxury Tourism", text: "Known for ultra-luxury resorts and pristine beaches" },
            { icon: "ship", title: "Boat Racing", text: "National sport is traditional wooden boat racing" },
            { icon: "lobster", title: "Lobster", text: "Famous for spiny lobster cuisine" }
        ]
    },

    // 23. TURKS AND CAICOS ISLANDS
    {
        id: "TCA",
        name: "Turks and Caicos Islands",
        officialName: "Turks and Caicos Islands (British Overseas Territory)",
        flag: "https://flagcdn.com/w320/tc.png",

        images: {
            hero: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&q=80",
            landscape: "https://images.unsplash.com/photo-1589394760236-7e84a9c2f236?w=1920&q=80",
            city: "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=1920&q=80"
        },

        basic: {
            capital: "Cockburn Town",
            continent: "North America",
            region: "Caribbean",
            subregion: "Caribbean",
            population: 47060,
            area: 948,
            populationDensity: 50,
            independence: "British Overseas Territory",
            callingCode: "+1-649",
            tld: ".tc",
            drivingSide: "Left",
            electricity: "120V, 60Hz"
        },

        location: {
            coordinates: [21.6940, -71.7979],
            timezone: "UTC-5/-4 (EST/EDT)",
            neighbors: [],
            borders: 0,
            hemispheres: ["Northern", "Western"],
            islandNation: true,
            islands: 40
        },

        political: {
            government: "British Overseas Territory",
            headOfState: "British Monarch King Charles III",
            headOfGovernment: "Premier Washington Misick",
            legislature: "House of Assembly",
            legalSystem: "English Common Law",
            districts: 4,
            largestCity: "Providenciales",
            organizations: ["FIFA", "CONCACAF"]
        },

        economy: {
            gdp: "$1.7 Billion",
            gdpPPP: "$1.7 Billion",
            gdpPerCapita: "$36,186",
            gdpRank: "N/A",
            gdpGrowth: "7.0%",
            currency: "United States Dollar",
            currencyCode: "USD",
            currencySymbol: "$",
            inflation: "4.0%",
            unemployment: "10.0%",
            majorSectors: ["Tourism (70%)", "Financial Services (20%)", "Other (10%)"],
            industries: ["Tourism", "Financial Services", "Fishing"],
            exports: ["Lobster", "Dried & Fresh Conch", "Conch Shells"],
            imports: ["Food", "Clothing", "Machinery", "Fuel"]
        },

        geography: {
            climate: "Tropical Marine; Moderated by Trade Winds",
            avgTemperature: "29°C",
            annualRainfall: "533 mm",
            highestPoint: "Blue Hills (49 m)",
            lowestPoint: "Atlantic Ocean (0 m)",
            coastline: "389 km",
            forestCover: "36.1%",
            arableLand: "1.1%",
            terrain: "Low, flat limestone with extensive marshes and mangrove swamps",
            naturalResources: ["Spiny Lobster", "Conch"]
        },

        geography_links: {
            rivers: [],
            mountains: [],
            deserts: [],
            forests: ["Mangrove Forests"],
            oceans: ["Atlantic Ocean", "Caribbean Sea"]
        },

        culture: {
            officialLanguages: ["English"],
            languages: ["English", "TCI Creole"],
            religions: ["Protestantism (72.8%)", "Roman Catholicism (11.4%)", "Others (15.8%)"],
            heritageSites: [],
            festivals: ["Carnival (October)", "South Caicos Regatta", "Conch Festival"],
            cuisine: ["Conch (every way)", "Grilled Lobster", "Peas & Rice", "Johnny Cake"],
            arts: ["Ripsaw Music", "Rake & Scrape Music", "Junkanoo"],
            sports: ["Football", "Cricket", "Basketball", "Volleyball"]
        },

        symbols: {
            bird: "Brown Pelican",
            animal: "Queen Conch",
            flower: "None Official",
            tree: "None Official",
            anthem: "God Save the King",
            motto: "Beautiful by Nature"
        },

        demographics: {
            lifeExpectancy: 80.2,
            literacyRate: "98%",
            urbanPopulation: "93%",
            medianAge: 34.4
        },

        history: {
            timeline: [
                { year: "1492", title: "Columbus Arrived", description: "Possibly Columbus's first landing in New World" },
                { year: "1766", title: "British Control", description: "Became British Crown Colony" },
                { year: "1976", title: "Self-Government", description: "Gained limited self-government" }
            ],
            notableFigures: ["Washington Misick"]
        },

        disputes: [],

        membershipStatus: {
            un: false,
            fifa: true,
            fifaMember: true,
            olympics: false,
            note: "FIFA/CONCACAF member; British overseas territory"
        },

        quickFacts: [
            { icon: "water", title: "Crystal Water", text: "Some of world's clearest and most beautiful beaches" },
            { icon: "fish", title: "Conch Capital", text: "Queen conch is cultural symbol and economic staple" },
            { icon: "anchor", title: "Columbus?", text: "Possibly where Columbus first landed in Americas (disputed)" }
        ]
    },

    // 24. SINT MAARTEN
    {
        id: "SXM",
        name: "Sint Maarten",
        officialName: "Sint Maarten (Constituent Country of the Netherlands)",
        flag: "https://flagcdn.com/w320/sx.png",

        images: {
            hero: "https://images.unsplash.com/photo-1553342385-111fd6bc6ab3?w=1920&q=80",
            landscape: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&q=80",
            city: "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=1920&q=80"
        },

        basic: {
            capital: "Philipsburg",
            continent: "North America",
            region: "Caribbean",
            subregion: "Caribbean",
            population: 44222,
            area: 34,
            populationDensity: 1346,
            independence: "Constituent Country of Netherlands",
            callingCode: "+1-721",
            tld: ".sx",
            drivingSide: "Right",
            electricity: "110V, 60Hz"
        },

        location: {
            coordinates: [18.0425, -63.0548],
            timezone: "UTC-4 (AST)",
            neighbors: ["Saint Martin (France)"],
            borders: 16,
            hemispheres: ["Northern", "Western"],
            islandNation: true
        },

        political: {
            government: "Constituent Country of the Netherlands",
            headOfState: "Dutch Monarch King Willem-Alexander",
            headOfGovernment: "Prime Minister Luc Mercelina",
            legislature: "Parliament of Sint Maarten",
            legalSystem: "Dutch Civil Law",
            largestCity: "Philipsburg",
            organizations: ["FIFA", "CONCACAF"]
        },

        economy: {
            gdp: "$1.07 Billion",
            gdpPPP: "$1.07 Billion",
            gdpPerCapita: "$24,215",
            gdpRank: "N/A",
            gdpGrowth: "3.0%",
            currency: "Netherlands Antillean Guilder",
            currencyCode: "ANG",
            currencySymbol: "ƒ",
            inflation: "3.0%",
            unemployment: "12.0%",
            majorSectors: ["Tourism (80%)", "Services (15%)", "Other (5%)"],
            industries: ["Tourism", "Financial Services", "Light Manufacturing"],
            exports: ["Mostly Reexports"],
            imports: ["Foodstuffs", "Manufactured Goods", "Fuel"]
        },

        geography: {
            climate: "Tropical Marine Climate",
            avgTemperature: "27°C",
            annualRainfall: "1,000 mm",
            highestPoint: "Mount Flagstaff (383 m - shared with French side)",
            lowestPoint: "Caribbean Sea (0 m)",
            coastline: "364 km (combined island)",
            forestCover: "24%",
            arableLand: "0%",
            terrain: "Low, hilly terrain",
            naturalResources: ["Negligible; Salt Ponds"]
        },

        geography_links: {
            rivers: [],
            mountains: ["Mount Flagstaff (Pic du Paradis)"],
            deserts: [],
            forests: [],
            oceans: ["Caribbean Sea", "Atlantic Ocean"]
        },

        culture: {
            officialLanguages: ["Dutch", "English"],
            languages: ["English", "Dutch", "French", "Papiamentu", "Spanish"],
            religions: ["Roman Catholicism (39%)", "Protestantism (44%)", "Others (17%)"],
            heritageSites: [],
            festivals: ["Carnival", "Sint Maarten Day (Nov 11)", "Heineken Regatta"],
            cuisine: ["Johnnycakes", "Lobster", "French-Dutch Fusion", "Conch"],
            arts: ["Carnival Culture", "Steelpan Music"],
            sports: ["Football", "Basketball", "Cricket", "Sailing"]
        },

        symbols: {
            bird: "Brown Pelican",
            animal: "None Official",
            flower: "None Official",
            tree: "None Official",
            anthem: "O Sweet Saint Martin's Land",
            motto: "Semper Progrediens (Always Moving Forward)"
        },

        demographics: {
            lifeExpectancy: 78.0,
            literacyRate: "98%",
            urbanPopulation: "100%",
            medianAge: 41.0
        },

        history: {
            timeline: [
                { year: "1493", title: "Columbus Named", description: "Columbus named island on St. Martin's Day" },
                { year: "1648", title: "Treaty of Concordia", description: "Dutch-French split of island; world's smallest border" },
                { year: "2010", title: "Separate Country", description: "Became separate constituent country of Netherlands" },
                { year: "2017", title: "Hurricane Irma", description: "Category 5 hurricane caused massive damage" }
            ],
            notableFigures: ["Claude Wathey", "Sarah Wescot-Williams"]
        },

        disputes: [],

        membershipStatus: {
            un: false,
            fifa: true,
            fifaMember: true,
            olympics: false,
            note: "FIFA/CONCACAF member; Dutch side of the island (French side is Saint-Martin)"
        },

        quickFacts: [
            { icon: "plane", title: "Famous Airport", text: "Princess Juliana Airport - planes famously land over Maho Beach" },
            { icon: "flag", title: "Tiniest Border", text: "Shares island with France; world's smallest land border between two countries (16km)" },
            { icon: "ship", title: "Cruise Hub", text: "Major Caribbean cruise ship destination" }
        ]
    },

    // 25. BONAIRE (FIFA MEMBER)
    {
        id: "BES",
        name: "Bonaire",
        officialName: "Bonaire (Special Municipality of the Netherlands)",
        flag: "https://flagcdn.com/w320/bq.png",

        images: {
            hero: "https://images.unsplash.com/photo-1559827291-72ee739d0d9a?w=1920&q=80",
            landscape: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&q=80",
            city: "https://images.unsplash.com/photo-1589394760236-7e84a9c2f236?w=1920&q=80"
        },

        basic: {
            capital: "Kralendijk",
            continent: "North America",
            region: "Caribbean",
            subregion: "Caribbean",
            population: 23926,
            area: 294,
            populationDensity: 81,
            independence: "Special Municipality of Netherlands",
            callingCode: "+599",
            tld: ".bq",
            drivingSide: "Right",
            electricity: "127V, 50Hz"
        },

        location: {
            coordinates: [12.2019, -68.2624],
            timezone: "UTC-4 (AST)",
            neighbors: [],
            borders: 0,
            hemispheres: ["Northern", "Western"],
            islandNation: true
        },

        political: {
            government: "Special Municipality of the Netherlands",
            headOfState: "Dutch Monarch King Willem-Alexander",
            headOfGovernment: "Island Governor Nolly Oleana",
            legislature: "Island Council",
            legalSystem: "Dutch Law",
            largestCity: "Kralendijk",
            organizations: ["FIFA", "CONCACAF"]
        },

        economy: {
            gdp: "$500 Million (est.)",
            gdpPPP: "$500 Million",
            gdpPerCapita: "$22,000",
            gdpRank: "N/A",
            gdpGrowth: "3.0%",
            currency: "United States Dollar",
            currencyCode: "USD",
            currencySymbol: "$",
            inflation: "3.0%",
            unemployment: "8.0%",
            majorSectors: ["Tourism (60%)", "Government (30%)", "Other (10%)"],
            industries: ["Tourism (Diving)", "Government Services", "Offshore Finance"],
            exports: ["Tourism Services"],
            imports: ["Foodstuffs", "Consumer Goods", "Fuel"]
        },

        geography: {
            climate: "Tropical Marine; Dry",
            avgTemperature: "28°C",
            annualRainfall: "500 mm",
            highestPoint: "Brandaris (240 m)",
            lowestPoint: "Caribbean Sea (0 m)",
            coastline: "69 km",
            forestCover: "0%",
            arableLand: "0%",
            terrain: "Flat to undulating; some hills",
            naturalResources: ["Negligible"]
        },

        geography_links: {
            rivers: [],
            mountains: ["Brandaris"],
            deserts: [],
            forests: ["Washington Slagbaai National Park"],
            oceans: ["Caribbean Sea"]
        },

        culture: {
            officialLanguages: ["Papiamentu", "Dutch", "English"],
            languages: ["Papiamentu", "Dutch", "English", "Spanish"],
            religions: ["Roman Catholicism (majority)"],
            heritageSites: ["Bonaire National Marine Park"],
            festivals: ["Carnival", "Regatta Festival"],
            cuisine: ["Kabritu (Goat)", "Stoba", "Iguana", "Funchi"],
            arts: ["Traditional Music", "Carnival Art"],
            sports: ["Football", "Windsurfing", "Kitesurfing", "Diving"]
        },

        symbols: {
            bird: "Flamingo",
            animal: "Flamingo",
            flower: "None Official",
            tree: "None Official",
            anthem: "Wilhelmus (Dutch national anthem)",
            motto: "None Official"
        },

        demographics: {
            lifeExpectancy: 78.0,
            literacyRate: "97%",
            urbanPopulation: "89%",
            medianAge: 38.0
        },

        history: {
            timeline: [
                { year: "1499", title: "Spanish Arrived", description: "Amerigo Vespucci explored" },
                { year: "1636", title: "Dutch Control", description: "Dutch West India Company took control" },
                { year: "2010", title: "Special Municipality", description: "Became special municipality of Netherlands" }
            ],
            notableFigures: ["Robby Pietersz"]
        },

        disputes: [],

        membershipStatus: {
            un: false,
            fifa: true,
            fifaMember: true,
            olympics: false,
            note: "FIFA/CONCACAF member as Bonaire; Dutch special municipality"
        },

        quickFacts: [
            { icon: "fish", title: "Dive Paradise", text: "National Marine Park - world-class diving all around island" },
            { icon: "kite", title: "Windsurfing", text: "World-class windsurfing and kitesurfing conditions" },
            { icon: "dove", title: "Flamingos", text: "Home to large wild flamingo population" }
        ]
    },

    // 26. SAINT PIERRE AND MIQUELON
    {
        id: "SPM",
        name: "Saint Pierre and Miquelon",
        officialName: "Saint Pierre and Miquelon (French Territorial Collectivity)",
        flag: "https://flagcdn.com/w320/pm.png",

        images: {
            hero: "https://images.unsplash.com/photo-1513513246994-51b4ae2c5e98?w=1920&q=80",
            landscape: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&q=80",
            city: "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=1920&q=80"
        },

        basic: {
            capital: "Saint-Pierre",
            continent: "North America",
            region: "North America",
            subregion: "Northern America",
            population: 5794,
            area: 242,
            populationDensity: 24,
            independence: "French Territorial Collectivity",
            callingCode: "+508",
            tld: ".pm",
            drivingSide: "Right",
            electricity: "230V, 50Hz"
        },

        location: {
            coordinates: [46.8852, -56.3159],
            timezone: "UTC-3/-2 (PMST/PMDT)",
            neighbors: ["Canada (Newfoundland)"],
            borders: 0,
            hemispheres: ["Northern", "Western"],
            islandNation: true
        },

        political: {
            government: "Territorial Collectivity of France",
            headOfState: "President of France",
            headOfGovernment: "President of Territorial Council Bernard Briand",
            legislature: "Territorial Council",
            legalSystem: "French Civil Law",
            communes: 2,
            largestCity: "Saint-Pierre",
            organizations: ["FIFA", "CONCACAF"]
        },

        economy: {
            gdp: "$261 Million",
            gdpPPP: "$261 Million",
            gdpPerCapita: "$46,000",
            gdpRank: "N/A",
            gdpGrowth: "2.0%",
            currency: "Euro",
            currencyCode: "EUR",
            currencySymbol: "€",
            inflation: "2.5%",
            unemployment: "9.9%",
            majorSectors: ["Services (90%)", "Fishing (5%)", "Other (5%)"],
            industries: ["Fishing (formerly major)", "Tourism", "Public Sector"],
            exports: ["Fish & Fish Products", "Mollusks & Crustaceans"],
            imports: ["Foodstuffs", "Machinery & Equipment", "Fuel"]
        },

        geography: {
            climate: "Cold and Wet; Fog Common",
            avgTemperature: "5.5°C",
            annualRainfall: "1,466 mm",
            highestPoint: "Morne de la Grande Montagne (240 m)",
            lowestPoint: "Atlantic Ocean (0 m)",
            coastline: "120 km",
            forestCover: "12.5%",
            arableLand: "8.7%",
            terrain: "Mostly barren rock",
            naturalResources: ["Fish", "Deep Harbours"]
        },

        geography_links: {
            rivers: [],
            mountains: ["Morne de la Grande Montagne"],
            deserts: [],
            forests: [],
            oceans: ["North Atlantic Ocean"]
        },

        culture: {
            officialLanguages: ["French"],
            languages: ["French"],
            religions: ["Roman Catholicism (98%)"],
            heritageSites: [],
            festivals: ["Bastille Day", "Fête Nationale"],
            cuisine: ["French Cuisine", "Fresh Fish", "Codfish"],
            arts: ["French Cultural Heritage"],
            sports: ["Football", "Ice Hockey", "Cycling"]
        },

        symbols: {
            bird: "None Official",
            animal: "None Official",
            flower: "None Official",
            tree: "None Official",
            anthem: "La Marseillaise",
            motto: "None Official"
        },

        demographics: {
            lifeExpectancy: 80.7,
            literacyRate: "99%",
            urbanPopulation: "90%",
            medianAge: 47.3
        },

        history: {
            timeline: [
                { year: "1520", title: "Portuguese Discovery", description: "João Álvares Fagundes explored islands" },
                { year: "1604", title: "French Settlement", description: "French began settling" },
                { year: "1816", title: "Returned to France", description: "Definitively returned to France" },
                { year: "1992", title: "EEZ Settled", description: "Maritime boundary with Canada settled" }
            ],
            notableFigures: ["Bernard Briand"]
        },

        disputes: [
            { name: "Maritime Boundary", description: "Historical disputes with Canada over fishing rights now resolved", type: "Maritime" }
        ],

        membershipStatus: {
            un: false,
            fifa: true,
            fifaMember: true,
            olympics: false,
            note: "FIFA/CONCACAF member; only French territory in North America"
        },

        quickFacts: [
            { icon: "flag", title: "France in America", text: "Only remaining French territory in North America" },
            { icon: "fish", title: "Grand Banks", text: "Near the historically rich Grand Banks fishing grounds" },
            { icon: "anchor", title: "Prohibition", text: "Became rum-running hub during US Prohibition era" }
        ]
    }

];

// ============================================
// EXPORT
// ============================================
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CountriesData12;
}

if (typeof window !== 'undefined') {
    window.CountriesData12 = CountriesData12;
}
