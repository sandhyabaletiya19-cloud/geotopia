/**
 * GeoVerse Encyclopedia - Country Data File 9
 * Contains: East Africa (7) + Southern Africa (8) + Oceania (5) = 20 Countries
 * Version: 2.0 - Clean Data
 */

const CountriesData9 = [
    // 1. MOZAMBIQUE
    {
        id: "MOZ",
        name: "Mozambique",
        officialName: "Republic of Mozambique",
        flag: "https://flagcdn.com/w320/mz.png",
        
        images: {
            hero: "https://images.unsplash.com/photo-1586866274880-7c02c769c50e?w=1920&q=80",
            landscape: "https://images.unsplash.com/photo-1590846083693-f23fdede206d?w=1920&q=80",
            city: "https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?w=1920&q=80"
        },

        basic: {
            capital: "Maputo",
            continent: "Africa",
            region: "East Africa",
            subregion: "Southeastern Africa",
            population: 33897354,
            area: 801590,
            populationDensity: 42,
            independence: "1975",
            callingCode: "+258",
            tld: ".mz",
            drivingSide: "Left",
            electricity: "220V, 50Hz"
        },

        location: {
            coordinates: [-18.6657, 35.5296],
            timezone: "UTC+2 (CAT)",
            neighbors: ["Tanzania", "Malawi", "Zambia", "Zimbabwe", "South Africa", "Eswatini"],
            borders: 4783,
            hemispheres: ["Southern", "Eastern"]
        },

        political: {
            government: "Unitary Dominant-Party Presidential Republic",
            headOfState: "President Daniel Chapo",
            headOfGovernment: "Prime Minister Adriano Maleiane",
            legislature: "Assembly of the Republic",
            legalSystem: "Mixed (Portuguese Civil Law and Customary Law)",
            states: 11,
            provinces: 10,
            city: 1,
            largestCity: "Maputo",
            organizations: ["UN", "AU", "SADC", "Commonwealth", "CPLP", "OIC"]
        },

        economy: {
            gdp: "$20.61 Billion",
            gdpPPP: "$49.59 Billion",
            gdpPerCapita: "$608",
            gdpRank: "#118",
            gdpGrowth: "4.1%",
            currency: "Mozambican Metical",
            currencyCode: "MZN",
            currencySymbol: "MT",
            inflation: "7.1%",
            unemployment: "3.2%",
            majorSectors: ["Services (50%)", "Agriculture (25%)", "Industry (22%)"],
            industries: ["Aluminum", "Petroleum Products", "Chemicals", "Textiles", "Cement", "Glass", "Asbestos", "Tobacco", "Food Processing", "Beverages"],
            exports: ["Coal", "Aluminum", "Petroleum Gas", "Electricity", "Tobacco", "Sugar", "Cashews"],
            imports: ["Refined Petroleum", "Chromium Ore", "Cars", "Wheat", "Rice"]
        },

        geography: {
            climate: "Tropical to Subtropical",
            avgTemperature: "24.5°C",
            annualRainfall: "1,032 mm",
            highestPoint: "Monte Binga (2,436 m)",
            lowestPoint: "Indian Ocean (0 m)",
            coastline: "2,470 km",
            forestCover: "48.2%",
            arableLand: "6.4%",
            terrain: "Coastal lowlands; uplands in center; high plateaus in northwest; mountains in west",
            naturalResources: ["Coal", "Titanium", "Natural Gas", "Hydropower", "Tantalum", "Graphite", "Iron Ore", "Gold", "Precious Stones"]
        },

        geography_links: {
            rivers: ["Zambezi River", "Limpopo River", "Save River", "Rovuma River", "Lugenda River"],
            mountains: ["Monte Binga", "Serra Gorongosa", "Chimanimani Mountains"],
            deserts: [],
            forests: ["Miombo Woodlands", "Coastal Forests", "Gorongosa National Park"],
            oceans: ["Indian Ocean", "Mozambique Channel"]
        },

        culture: {
            officialLanguages: ["Portuguese"],
            languages: ["Portuguese", "Makhuwa", "Tsonga", "Sena", "Lomwe", "Shona", "Swahili"],
            religions: ["Christianity (56.1%)", "Islam (17.9%)", "Traditional Beliefs (15.5%)", "None (10.5%)"],
            heritageSites: ["Island of Mozambique"],
            festivals: ["Independence Day", "Marrabenta Festival", "Chopi Music Festival", "Gwaza Muthini"],
            cuisine: ["Piri Piri Chicken", "Matapa", "Xima", "Caril de Camarão", "Prego Roll"],
            arts: ["Makonde Sculpture", "Marrabenta Music", "Traditional Dance", "Capulana Fabrics"],
            sports: ["Football", "Basketball", "Athletics", "Handball", "Volleyball"]
        },

        symbols: {
            bird: "None Official",
            animal: "African Elephant",
            flower: "None Official",
            tree: "None Official",
            anthem: "Pátria Amada",
            motto: "None Official"
        },

        demographics: {
            lifeExpectancy: 62.13,
            literacyRate: "63.4%",
            urbanPopulation: "38.2%",
            medianAge: 17.2
        },

        history: {
            timeline: [
                { year: "1498", title: "Portuguese Arrival", description: "Vasco da Gama reached Mozambique" },
                { year: "1752", title: "Colony", description: "Became Portuguese colony" },
                { year: "1964", title: "Independence War", description: "Armed struggle for independence began" },
                { year: "1975", title: "Independence", description: "Independence from Portugal" },
                { year: "1977-1992", title: "Civil War", description: "Devastating civil war" },
                { year: "2019", title: "Cyclones", description: "Cyclones Idai and Kenneth caused massive destruction" }
            ],
            notableFigures: ["Samora Machel", "Joaquim Chissano", "Eduardo Mondlane", "Graça Machel"]
        },

        disputes: [],

        quickFacts: [
            { icon: "gas-pump", title: "LNG Giant", text: "Major liquefied natural gas discoveries" },
            { icon: "water", title: "Coastline", text: "2,470 km of Indian Ocean coastline" },
            { icon: "fish", title: "Fishing", text: "Rich marine biodiversity" },
            { icon: "globe", title: "Portuguese Speaking", text: "Largest Lusophone country in Africa by area" },
            { icon: "flag", title: "AK-47 Flag", text: "Only national flag with a modern firearm (AK-47)" }
        ]
    },

    // 2. RWANDA
    {
        id: "RWA",
        name: "Rwanda",
        officialName: "Republic of Rwanda",
        flag: "https://flagcdn.com/w320/rw.png",
        
        images: {
            hero: "https://images.unsplash.com/photo-1580746738099-78d6833b3f93?w=1920&q=80",
            landscape: "https://images.unsplash.com/photo-1606567595334-d39972c85dfd?w=1920&q=80",
            city: "https://images.unsplash.com/photo-1614094082869-cd4e6962e5e7?w=1920&q=80"
        },

        basic: {
            capital: "Kigali",
            continent: "Africa",
            region: "East Africa",
            subregion: "Central East Africa",
            population: 14094683,
            area: 26338,
            populationDensity: 535,
            independence: "1962",
            callingCode: "+250",
            tld: ".rw",
            drivingSide: "Right",
            electricity: "230V, 50Hz"
        },

        location: {
            coordinates: [-1.9403, 29.8739],
            timezone: "UTC+2 (CAT)",
            neighbors: ["Uganda", "Tanzania", "Burundi", "DR Congo"],
            borders: 930,
            hemispheres: ["Southern", "Eastern"]
        },

        political: {
            government: "Unitary Presidential Republic",
            headOfState: "President Paul Kagame",
            headOfGovernment: "Prime Minister Édouard Ngirente",
            legislature: "Parliament (Senate & Chamber of Deputies)",
            legalSystem: "Mixed (Civil Law and Customary Law)",
            states: 5,
            provinces: 5,
            largestCity: "Kigali",
            organizations: ["UN", "AU", "EAC", "Commonwealth", "Francophonie"]
        },

        economy: {
            gdp: "$13.31 Billion",
            gdpPPP: "$38.89 Billion",
            gdpPerCapita: "$943",
            gdpRank: "#136",
            gdpGrowth: "8.2%",
            currency: "Rwandan Franc",
            currencyCode: "RWF",
            currencySymbol: "FRw",
            inflation: "14.5%",
            unemployment: "17.3%",
            majorSectors: ["Services (51%)", "Agriculture (25%)", "Industry (20%)"],
            industries: ["Cement", "Agricultural Products", "Small-scale Beverages", "Soap", "Furniture", "Shoes", "Plastic Goods", "Textiles", "Cigarettes", "Pyrethrum"],
            exports: ["Gold", "Coffee", "Tea", "Tin Ore", "Tantalum", "Pyrethrum"],
            imports: ["Refined Petroleum", "Gold", "Cars", "Packaged Medicaments", "Cement"]
        },

        geography: {
            climate: "Temperate; Two Rainy Seasons",
            avgTemperature: "18.5°C",
            annualRainfall: "1,212 mm",
            highestPoint: "Mount Karisimbi (4,507 m)",
            lowestPoint: "Rusizi River (950 m)",
            coastline: "0 km (Landlocked)",
            forestCover: "28.8%",
            arableLand: "47.0%",
            terrain: "Mostly grassy uplands and hills; mountains in west",
            naturalResources: ["Gold", "Cassiterite (Tin Ore)", "Wolframite (Tungsten Ore)", "Methane", "Hydropower", "Arable Land"]
        },

        geography_links: {
            rivers: ["Nyabarongo River", "Kagera River", "Akagera River", "Rusizi River"],
            mountains: ["Virunga Mountains", "Mount Karisimbi", "Mount Bisoke", "Mount Muhabura"],
            deserts: [],
            forests: ["Nyungwe Forest", "Volcanoes National Park"],
            oceans: []
        },

        culture: {
            officialLanguages: ["Kinyarwanda", "French", "English", "Swahili"],
            languages: ["Kinyarwanda", "French", "English", "Swahili"],
            religions: ["Protestant (49.5%)", "Roman Catholic (43.7%)", "Islam (2%)", "None (2.5%)"],
            heritageSites: ["Nyungwe National Park (Tentative)"],
            festivals: ["Kwita Izina (Gorilla Naming)", "Umuganura (Harvest Festival)", "Liberation Day", "Genocide Memorial Day"],
            cuisine: ["Ugali", "Isombe", "Brochettes", "Ibihaza", "Sambaza", "Urwagwa (Banana Beer)"],
            arts: ["Imigongo Art", "Traditional Dance (Intore)", "Basket Weaving", "Drumming"],
            sports: ["Football", "Cycling", "Basketball", "Volleyball", "Athletics"]
        },

        symbols: {
            bird: "None Official",
            animal: "Mountain Gorilla",
            flower: "None Official",
            tree: "None Official",
            anthem: "Rwanda Nziza",
            motto: "Unity, Work, Patriotism"
        },

        demographics: {
            lifeExpectancy: 70.8,
            literacyRate: "73.2%",
            urbanPopulation: "17.6%",
            medianAge: 20.0
        },

        history: {
            timeline: [
                { year: "15th Century", title: "Kingdom Founded", description: "Kingdom of Rwanda established" },
                { year: "1884", title: "German East Africa", description: "Became part of German East Africa" },
                { year: "1916", title: "Belgian Control", description: "Belgium took control" },
                { year: "1962", title: "Independence", description: "Independence from Belgium" },
                { year: "1994", title: "Genocide", description: "Genocide against Tutsi killed ~800,000" },
                { year: "2000", title: "Kagame Era", description: "Paul Kagame became president" }
            ],
            notableFigures: ["Paul Kagame", "Dian Fossey", "Grégoire Kayibanda", "Juvénal Habyarimana"]
        },

        disputes: [],

        quickFacts: [
            { icon: "leaf", title: "Cleanest Country", text: "One of cleanest countries in Africa; plastic bags banned" },
            { icon: "gorilla", title: "Mountain Gorillas", text: "Home to endangered mountain gorillas" },
            { icon: "female", title: "Women in Parliament", text: "Highest % of women in parliament globally (61%+)" },
            { icon: "mountain", title: "Land of 1000 Hills", text: "Called 'Land of a Thousand Hills'" },
            { icon: "chart-line", title: "African Miracle", text: "Remarkable post-genocide development" }
        ]
    },

    // 3. SEYCHELLES
    {
        id: "SYC",
        name: "Seychelles",
        officialName: "Republic of Seychelles",
        flag: "https://flagcdn.com/w320/sc.png",
        
        images: {
            hero: "https://images.unsplash.com/photo-1501179691627-eeaa65ea017c?w=1920&q=80",
            landscape: "https://images.unsplash.com/photo-1544550581-5f7ceaf7f992?w=1920&q=80",
            city: "https://images.unsplash.com/photo-1505881402582-c5bc11054f91?w=1920&q=80"
        },

        basic: {
            capital: "Victoria",
            continent: "Africa",
            region: "East Africa",
            subregion: "Indian Ocean Islands",
            population: 107660,
            area: 459,
            populationDensity: 215,
            independence: "1976",
            callingCode: "+248",
            tld: ".sc",
            drivingSide: "Left",
            electricity: "240V, 50Hz"
        },

        location: {
            coordinates: [-4.6796, 55.4920],
            timezone: "UTC+4 (SCT)",
            neighbors: [],
            borders: 0,
            hemispheres: ["Southern", "Eastern"],
            islandNation: true,
            islands: 115
        },

        political: {
            government: "Unitary Presidential Republic",
            headOfState: "President Wavel Ramkalawan",
            headOfGovernment: "President Wavel Ramkalawan",
            legislature: "National Assembly",
            legalSystem: "Mixed (English Common Law, French Civil Law, Customary Law)",
            states: 27,
            districts: 27,
            largestCity: "Victoria",
            organizations: ["UN", "AU", "SADC", "Commonwealth", "Francophonie", "COMESA"]
        },

        economy: {
            gdp: "$1.77 Billion",
            gdpPPP: "$3.99 Billion",
            gdpPerCapita: "$16,434",
            gdpRank: "#169",
            gdpGrowth: "4.0%",
            currency: "Seychellois Rupee",
            currencyCode: "SCR",
            currencySymbol: "SR",
            inflation: "4.8%",
            unemployment: "3.0%",
            majorSectors: ["Services (79% - Tourism)", "Industry (15%)", "Agriculture (2%)"],
            industries: ["Tourism", "Fishing", "Canned Tuna", "Cinnamon", "Coconut Products", "Vanilla"],
            exports: ["Canned Tuna", "Frozen Fish", "Petroleum Oils", "Ships"],
            imports: ["Refined Petroleum", "Ships", "Aircraft", "Cars", "Rice"]
        },

        geography: {
            climate: "Tropical Marine; Humid; Cooler Season May-September",
            avgTemperature: "27°C",
            annualRainfall: "2,172 mm",
            highestPoint: "Morne Seychellois (905 m)",
            lowestPoint: "Indian Ocean (0 m)",
            coastline: "491 km",
            forestCover: "88.5%",
            arableLand: "2.2%",
            terrain: "Mahé Group granitic; outer islands coral, flat, elevated reefs",
            naturalResources: ["Fish", "Cinnamon", "Coconuts", "Copra", "Salt"]
        },

        geography_links: {
            rivers: [],
            mountains: ["Morne Seychellois", "Trois Frères Peak"],
            deserts: [],
            forests: ["Morne Seychellois National Park", "Vallée de Mai"],
            oceans: ["Indian Ocean"]
        },

        culture: {
            officialLanguages: ["Seychellois Creole", "English", "French"],
            languages: ["Seychellois Creole", "English", "French"],
            religions: ["Roman Catholic (76.2%)", "Protestant (10.5%)", "Others (13.3%)"],
            heritageSites: ["Vallée de Mai Nature Reserve", "Aldabra Atoll"],
            festivals: ["Creole Festival", "Carnaval International de Victoria", "Independence Day", "SUBIOS (Underwater Festival)"],
            cuisine: ["Grilled Fish", "Octopus Curry", "Ladob", "Shark Chutney", "Coconut Curries"],
            arts: ["Moutya Dance", "Sega Music", "Craft Work", "Batik"],
            sports: ["Football", "Boxing", "Sailing", "Fishing", "Badminton"]
        },

        symbols: {
            bird: "Seychelles Black Parrot",
            animal: "Aldabra Giant Tortoise",
            flower: "Tropicbird Orchid",
            tree: "Coco de Mer Palm",
            anthem: "Koste Seselwa",
            motto: "Finis Coronat Opus (The End Crowns the Work)"
        },

        demographics: {
            lifeExpectancy: 74.12,
            literacyRate: "95.9%",
            urbanPopulation: "58.4%",
            medianAge: 36.8
        },

        history: {
            timeline: [
                { year: "1756", title: "French Claim", description: "France claimed the islands" },
                { year: "1794", title: "British Control", description: "Britain took control" },
                { year: "1903", title: "Separate Colony", description: "Became separate Crown Colony" },
                { year: "1976", title: "Independence", description: "Independence from Britain" },
                { year: "1977", title: "Coup", description: "France-Albert René seized power" },
                { year: "2020", title: "Opposition Wins", description: "First opposition victory since 1977" }
            ],
            notableFigures: ["France-Albert René", "James Mancham", "Wavel Ramkalawan"]
        },

        disputes: [],

        quickFacts: [
            { icon: "flag", title: "Smallest African", text: "Smallest African country by population" },
            { icon: "palm-tree", title: "Coco de Mer", text: "Home to world's largest seed (Coco de Mer)" },
            { icon: "turtle", title: "Giant Tortoises", text: "150,000 Aldabra giant tortoises" },
            { icon: "dollar", title: "Richest African", text: "Highest GDP per capita in Africa" },
            { icon: "umbrella-beach", title: "Tourism Paradise", text: "Top luxury tourism destination" }
        ]
    },

    // 4. SOMALIA
    {
        id: "SOM",
        name: "Somalia",
        officialName: "Federal Republic of Somalia",
        flag: "https://flagcdn.com/w320/so.png",
        
        images: {
            hero: "https://images.unsplash.com/photo-1590846083693-f23fdede206d?w=1920&q=80",
            landscape: "https://images.unsplash.com/photo-1565008576549-57569a49371d?w=1920&q=80",
            city: "https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?w=1920&q=80"
        },

        basic: {
            capital: "Mogadishu",
            continent: "Africa",
            region: "East Africa",
            subregion: "Horn of Africa",
            population: 18143379,
            area: 637657,
            populationDensity: 25,
            independence: "1960",
            callingCode: "+252",
            tld: ".so",
            drivingSide: "Right",
            electricity: "220V, 50Hz"
        },

        location: {
            coordinates: [5.1521, 46.1996],
            timezone: "UTC+3 (EAT)",
            neighbors: ["Djibouti", "Ethiopia", "Kenya"],
            borders: 2385,
            hemispheres: ["Northern", "Eastern"]
        },

        political: {
            government: "Federal Parliamentary Republic",
            headOfState: "President Hassan Sheikh Mohamud",
            headOfGovernment: "Prime Minister Hamza Abdi Barre",
            legislature: "Federal Parliament (House of the People & Upper House)",
            legalSystem: "Mixed (Civil Law, Islamic Sharia, Customary Law)",
            states: 6,
            federalMemberStates: 5,
            capitalRegion: 1,
            largestCity: "Mogadishu",
            organizations: ["UN", "AU", "Arab League", "OIC", "IGAD"]
        },

        economy: {
            gdp: "$11.5 Billion",
            gdpPPP: "$25.24 Billion",
            gdpPerCapita: "$634",
            gdpRank: "#142",
            gdpGrowth: "2.8%",
            currency: "Somali Shilling",
            currencyCode: "SOS",
            currencySymbol: "S",
            inflation: "6.1%",
            unemployment: "19.8%",
            majorSectors: ["Agriculture (60%)", "Services (33%)", "Industry (7%)"],
            industries: ["Light Industries (Sugar, Textiles)", "Petroleum Refining", "Wireless Communication"],
            exports: ["Live Animals", "Charcoal", "Fish", "Fruits", "Vegetables"],
            imports: ["Machinery", "Foodstuffs", "Construction Materials", "Petroleum Products"]
        },

        geography: {
            climate: "Principally Desert; Monsoon December-February",
            avgTemperature: "27°C",
            annualRainfall: "282 mm",
            highestPoint: "Mount Shimbiris (2,460 m)",
            lowestPoint: "Indian Ocean (0 m)",
            coastline: "3,025 km",
            forestCover: "10.1%",
            arableLand: "1.8%",
            terrain: "Mostly flat to undulating plateau rising to hills in north",
            naturalResources: ["Uranium", "Iron Ore", "Tin", "Gypsum", "Bauxite", "Copper", "Salt", "Natural Gas", "Oil"]
        },

        geography_links: {
            rivers: ["Jubba River", "Shabelle River"],
            mountains: ["Shimbiris", "Cal Madow Range", "Ogo Mountains"],
            deserts: ["Guban Desert", "Haud Plateau"],
            forests: ["Acacia Woodlands", "Coastal Mangroves"],
            oceans: ["Indian Ocean", "Gulf of Aden"]
        },

        culture: {
            officialLanguages: ["Somali", "Arabic"],
            languages: ["Somali", "Arabic", "Italian", "English"],
            religions: ["Sunni Islam (99.8%)"],
            heritageSites: [],
            festivals: ["Eid al-Fitr", "Eid al-Adha", "Independence Day", "Somali Flag Day"],
            cuisine: ["Canjeero", "Muufo", "Suqaar", "Bariis", "Sambusa", "Malawah"],
            arts: ["Poetry (Gabay)", "Traditional Dance", "Henna Art", "Woodworking"],
            sports: ["Football", "Athletics", "Basketball", "Boxing"]
        },

        symbols: {
            bird: "None Official",
            animal: "Leopard",
            flower: "None Official",
            tree: "None Official",
            anthem: "Qolobaa Calankeed",
            motto: "None Official"
        },

        demographics: {
            lifeExpectancy: 58.33,
            literacyRate: "37.8%",
            urbanPopulation: "46.8%",
            medianAge: 16.7
        },

        history: {
            timeline: [
                { year: "7th Century", title: "Islam Arrives", description: "Islam introduced through Arab traders" },
                { year: "1884", title: "Colonial Era", description: "British and Italian colonization" },
                { year: "1960", title: "Independence", description: "British and Italian Somaliland united" },
                { year: "1969", title: "Military Coup", description: "Siad Barre seized power" },
                { year: "1991", title: "Civil War", description: "State collapsed; ongoing civil conflict" },
                { year: "2012", title: "New Government", description: "Federal government established" }
            ],
            notableFigures: ["Siad Barre", "Mohamed Siad Barre", "Aden Abdulle Osman", "Mo Farah"]
        },

        disputes: [
            { name: "Somaliland", description: "Self-declared independent state since 1991", type: "Territory" },
            { name: "Ogaden", description: "Historical claim in Ethiopia", type: "Territory" }
        ],

        quickFacts: [
            { icon: "water", title: "Longest Coastline", text: "Longest coastline in mainland Africa (3,025 km)" },
            { icon: "camel", title: "Camels", text: "Largest camel population in the world" },
            { icon: "book", title: "Oral Poetry", text: "Rich oral poetry tradition" },
            { icon: "mobile", title: "Mobile Money", text: "Pioneer in mobile money transfers" },
            { icon: "ship", title: "Piracy", text: "Former piracy hotspot (now reduced)" }
        ]
    },

    // 5. SOUTH SUDAN
    {
        id: "SSD",
        name: "South Sudan",
        officialName: "Republic of South Sudan",
        flag: "https://flagcdn.com/w320/ss.png",
        
        images: {
            hero: "https://images.unsplash.com/photo-1590846083693-f23fdede206d?w=1920&q=80",
            landscape: "https://images.unsplash.com/photo-1565008576549-57569a49371d?w=1920&q=80",
            city: "https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?w=1920&q=80"
        },

        basic: {
            capital: "Juba",
            continent: "Africa",
            region: "East Africa",
            subregion: "East-Central Africa",
            population: 11381378,
            area: 644329,
            populationDensity: 18,
            independence: "2011",
            callingCode: "+211",
            tld: ".ss",
            drivingSide: "Right",
            electricity: "230V, 50Hz"
        },

        location: {
            coordinates: [6.8770, 31.3070],
            timezone: "UTC+2 (CAT)",
            neighbors: ["Sudan", "Ethiopia", "Kenya", "Uganda", "DR Congo", "Central African Republic"],
            borders: 6018,
            hemispheres: ["Northern", "Eastern"]
        },

        political: {
            government: "Federal Presidential Republic",
            headOfState: "President Salva Kiir Mayardit",
            headOfGovernment: "President Salva Kiir Mayardit",
            legislature: "National Legislature (Council of States & Transitional National Legislative Assembly)",
            legalSystem: "Mixed (English Common Law and Customary Law)",
            states: 10,
            administrativeAreas: 32,
            largestCity: "Juba",
            organizations: ["UN", "AU", "EAC", "IGAD"]
        },

        economy: {
            gdp: "$11.99 Billion",
            gdpPPP: "$20.42 Billion",
            gdpPerCapita: "$1,053",
            gdpRank: "#139",
            gdpGrowth: "-0.6%",
            currency: "South Sudanese Pound",
            currencyCode: "SSP",
            currencySymbol: "£",
            inflation: "1.1%",
            unemployment: "12.2%",
            majorSectors: ["Industry (Oil 60%)", "Agriculture (15%)", "Services (13%)"],
            industries: ["Oil", "Agriculture"],
            exports: ["Crude Petroleum", "Gold", "Sorghum", "Sesame"],
            imports: ["Machinery", "Refined Petroleum", "Vehicles", "Pharmaceuticals", "Food"]
        },

        geography: {
            climate: "Tropical; Wet Season April-November",
            avgTemperature: "28°C",
            annualRainfall: "1,500 mm",
            highestPoint: "Kinyeti (3,187 m)",
            lowestPoint: "White Nile (381 m)",
            coastline: "0 km (Landlocked)",
            forestCover: "11.3%",
            arableLand: "4.1%",
            terrain: "Plains in north and center rising to southern highlands; Sudd wetlands",
            naturalResources: ["Hydropower", "Fertile Agricultural Land", "Gold", "Diamonds", "Petroleum", "Hardwoods", "Limestone", "Iron Ore", "Copper", "Chromium Ore"]
        },

        geography_links: {
            rivers: ["White Nile", "Bahr el Ghazal", "Sobat River", "Baro River"],
            mountains: ["Imatong Mountains", "Mount Kinyeti", "Didinga Hills"],
            deserts: [],
            forests: ["Tropical Rainforests", "Woodlands"],
            oceans: []
        },

        culture: {
            officialLanguages: ["English"],
            languages: ["English", "Arabic", "Dinka", "Nuer", "Bari", "Zande", "Shilluk"],
            religions: ["Christianity (60.5%)", "Traditional Religions (32.9%)", "Islam (6.2%)"],
            heritageSites: [],
            festivals: ["Independence Day", "SPLA Day", "Christmas", "Easter"],
            cuisine: ["Kisra", "Asida", "Ful Medames", "Molokhia", "Kajaik"],
            arts: ["Traditional Dance", "Scarification Art", "Beadwork", "Pottery"],
            sports: ["Football", "Wrestling", "Basketball", "Athletics"]
        },

        symbols: {
            bird: "African Fish Eagle",
            animal: "Nile Crocodile",
            flower: "None Official",
            tree: "None Official",
            anthem: "South Sudan Oyee!",
            motto: "Justice, Liberty, Prosperity"
        },

        demographics: {
            lifeExpectancy: 58.60,
            literacyRate: "34.5%",
            urbanPopulation: "20.5%",
            medianAge: 18.6
        },

        history: {
            timeline: [
                { year: "1955", title: "First Civil War", description: "First Sudanese Civil War began" },
                { year: "1972", title: "Addis Ababa Agreement", description: "Regional autonomy granted" },
                { year: "1983", title: "Second Civil War", description: "Second Sudanese Civil War" },
                { year: "2005", title: "CPA", description: "Comprehensive Peace Agreement signed" },
                { year: "2011", title: "Independence", description: "World's newest country" },
                { year: "2013-2020", title: "Civil War", description: "Internal civil war" }
            ],
            notableFigures: ["John Garang", "Salva Kiir Mayardit", "Riek Machar"]
        },

        disputes: [
            { name: "Abyei", description: "Disputed with Sudan", type: "Territory" },
            { name: "Heglig", description: "Oil-rich area disputed with Sudan", type: "Territory" }
        ],

        quickFacts: [
            { icon: "calendar", title: "Newest Country", text: "World's youngest country (2011)" },
            { icon: "oil-can", title: "Oil Dependent", text: "98% of budget from oil revenues" },
            { icon: "water", title: "Sudd Wetland", text: "One of world's largest wetlands" },
            { icon: "users", title: "Diverse Tribes", text: "Over 60 ethnic groups" },
            { icon: "flag", title: "Long Struggle", text: "50 years of conflict before independence" }
        ]
    },

    // 6. TANZANIA
    {
        id: "TZA",
        name: "Tanzania",
        officialName: "United Republic of Tanzania",
        flag: "https://flagcdn.com/w320/tz.png",
        
        images: {
            hero: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1920&q=80",
            landscape: "https://images.unsplash.com/photo-1515861142911-62b24dd2d79b?w=1920&q=80",
            city: "https://images.unsplash.com/photo-1568384158388-a83ed28cb7cd?w=1920&q=80"
        },

        basic: {
            capital: "Dodoma",
            continent: "Africa",
            region: "East Africa",
            subregion: "East Africa",
            population: 65497748,
            area: 945087,
            populationDensity: 71,
            independence: "1961",
            callingCode: "+255",
            tld: ".tz",
            drivingSide: "Left",
            electricity: "230V, 50Hz"
        },

        location: {
            coordinates: [-6.3690, 34.8888],
            timezone: "UTC+3 (EAT)",
            neighbors: ["Kenya", "Uganda", "Rwanda", "Burundi", "DR Congo", "Zambia", "Malawi", "Mozambique"],
            borders: 4161,
            hemispheres: ["Southern", "Eastern"]
        },

        political: {
            government: "Unitary Presidential Constitutional Republic",
            headOfState: "President Samia Suluhu Hassan",
            headOfGovernment: "President Samia Suluhu Hassan",
            legislature: "National Assembly",
            legalSystem: "Mixed (English Common Law and Customary Law)",
            states: 31,
            regions: 31,
            largestCity: "Dar es Salaam",
            organizations: ["UN", "AU", "EAC", "SADC", "Commonwealth"]
        },

        economy: {
            gdp: "$79.16 Billion",
            gdpPPP: "$218.54 Billion",
            gdpPerCapita: "$1,209",
            gdpRank: "#69",
            gdpGrowth: "5.1%",
            currency: "Tanzanian Shilling",
            currencyCode: "TZS",
            currencySymbol: "TSh",
            inflation: "3.8%",
            unemployment: "2.6%",
            majorSectors: ["Services (38%)", "Agriculture (27%)", "Industry (28%)"],
            industries: ["Agricultural Processing", "Mining (Diamonds, Gold, Iron)", "Salt", "Soda Ash", "Cement", "Oil Refining", "Shoes", "Apparel", "Wood Products", "Fertilizer"],
            exports: ["Gold", "Tobacco", "Cashews", "Coffee", "Cotton", "Cloves", "Sisal"],
            imports: ["Refined Petroleum", "Palm Oil", "Packaged Medicines", "Wheat", "Cars"]
        },

        geography: {
            climate: "Varies: Tropical Coastal, Temperate Highlands",
            avgTemperature: "23°C",
            annualRainfall: "1,071 mm",
            highestPoint: "Mount Kilimanjaro (5,895 m)",
            lowestPoint: "Indian Ocean (0 m)",
            coastline: "1,424 km",
            forestCover: "52.4%",
            arableLand: "14.3%",
            terrain: "Coastal plains; central plateau; highlands in north and south",
            naturalResources: ["Hydropower", "Tin", "Phosphates", "Iron Ore", "Coal", "Diamonds", "Gemstones", "Gold", "Natural Gas", "Nickel"]
        },

        geography_links: {
            rivers: ["Rufiji River", "Pangani River", "Ruvuma River", "Malagarasi River"],
            mountains: ["Mount Kilimanjaro", "Mount Meru", "Usambara Mountains", "Uluguru Mountains"],
            deserts: [],
            forests: ["Serengeti", "Ngorongoro", "Eastern Arc Mountains", "Coastal Forests"],
            oceans: ["Indian Ocean"]
        },

        culture: {
            officialLanguages: ["Swahili", "English"],
            languages: ["Swahili", "English", "Arabic", "120+ Local Languages"],
            religions: ["Christianity (61.4%)", "Islam (35.2%)", "Traditional Religions (1.8%)"],
            heritageSites: ["Ngorongoro Conservation Area", "Serengeti National Park", "Kilimanjaro National Park", "Stone Town of Zanzibar", "Ruins of Kilwa Kisiwani and Songo Mnara", "Selous Game Reserve", "Kondoa Rock-Art Sites"],
            festivals: ["Union Day", "Mwaka Kogwa", "Saba Saba", "Nane Nane", "Independence Day"],
            cuisine: ["Ugali", "Nyama Choma", "Pilau", "Chips Mayai", "Mishkaki", "Zanzibar Pizza"],
            arts: ["Tinga Tinga Art", "Makonde Sculpture", "Taarab Music", "Ngoma Dance"],
            sports: ["Football", "Athletics", "Boxing", "Netball", "Basketball"]
        },

        symbols: {
            bird: "Grey Crowned Crane",
            animal: "Giraffe",
            flower: "Clove Blossom",
            tree: "African Teak",
            anthem: "Mungu Ibariki Afrika",
            motto: "Uhuru na Umoja (Freedom and Unity)"
        },

        demographics: {
            lifeExpectancy: 66.39,
            literacyRate: "77.9%",
            urbanPopulation: "36.4%",
            medianAge: 17.7
        },

        history: {
            timeline: [
                { year: "700s", title: "Swahili Culture", description: "Swahili city-states flourished" },
                { year: "1498", title: "Portuguese Arrival", description: "Portuguese reached coast" },
                { year: "1885", title: "German East Africa", description: "German colonization" },
                { year: "1919", title: "British Mandate", description: "Became British mandate Tanganyika" },
                { year: "1961", title: "Independence", description: "Tanganyika independence" },
                { year: "1964", title: "Tanzania", description: "Tanganyika and Zanzibar united" }
            ],
            notableFigures: ["Julius Nyerere", "Rashid Kawawa", "Ali Hassan Mwinyi", "Jakaya Kikwete", "Samia Suluhu Hassan"]
        },

        disputes: [
            { name: "Lake Malawi/Nyasa", description: "Border dispute with Malawi", type: "Maritime" }
        ],

        quickFacts: [
            { icon: "mountain", title: "Kilimanjaro", text: "Africa's highest peak (5,895 m)" },
            { icon: "paw", title: "Serengeti", text: "Home to Great Migration (2M+ animals)" },
            { icon: "leaf", title: "Zanzibar", text: "Spice Island with rich history" },
            { icon: "gem", title: "Tanzanite", text: "Only source of tanzanite gemstone" },
            { icon: "female", title: "Female President", text: "First female president (Samia Suluhu Hassan, 2021)" }
        ]
    },

    // 7. UGANDA
    {
        id: "UGA",
        name: "Uganda",
        officialName: "Republic of Uganda",
        flag: "https://flagcdn.com/w320/ug.png",
        
        images: {
            hero: "https://images.unsplash.com/photo-1521579772986-73f68e66aef8?w=1920&q=80",
            landscape: "https://images.unsplash.com/photo-1585408836926-0a4e4cdc5db8?w=1920&q=80",
            city: "https://images.unsplash.com/photo-1561537089-b87bc4d49cfe?w=1920&q=80"
        },

        basic: {
            capital: "Kampala",
            continent: "Africa",
            region: "East Africa",
            subregion: "East Africa",
            population: 48582334,
            area: 241038,
            populationDensity: 228,
            independence: "1962",
            callingCode: "+256",
            tld: ".ug",
            drivingSide: "Left",
            electricity: "240V, 50Hz"
        },

        location: {
            coordinates: [1.3733, 32.2903],
            timezone: "UTC+3 (EAT)",
            neighbors: ["South Sudan", "Kenya", "Tanzania", "Rwanda", "DR Congo"],
            borders: 2729,
            hemispheres: ["Northern", "Eastern"]
        },

        political: {
            government: "Unitary Presidential Republic",
            headOfState: "President Yoweri Museveni",
            headOfGovernment: "Prime Minister Robinah Nabbanja",
            legislature: "Parliament",
            legalSystem: "Mixed (English Common Law and Customary Law)",
            states: 4,
            regions: 4,
            districts: 146,
            largestCity: "Kampala",
            organizations: ["UN", "AU", "EAC", "Commonwealth", "OIC"]
        },

        economy: {
            gdp: "$49.27 Billion",
            gdpPPP: "$133.62 Billion",
            gdpPerCapita: "$1,015",
            gdpRank: "#89",
            gdpGrowth: "6.0%",
            currency: "Ugandan Shilling",
            currencyCode: "UGX",
            currencySymbol: "USh",
            inflation: "5.4%",
            unemployment: "2.8%",
            majorSectors: ["Services (47%)", "Agriculture (24%)", "Industry (26%)"],
            industries: ["Sugar Processing", "Brewing", "Tobacco", "Cotton Textiles", "Cement", "Steel Production"],
            exports: ["Coffee", "Gold", "Fish Products", "Tea", "Tobacco", "Cut Flowers"],
            imports: ["Refined Petroleum", "Vehicles", "Medical Instruments", "Wheat", "Palm Oil"]
        },

        geography: {
            climate: "Tropical; Two Dry Seasons",
            avgTemperature: "21°C",
            annualRainfall: "1,180 mm",
            highestPoint: "Margherita Peak (5,109 m)",
            lowestPoint: "Albert Nile (614 m)",
            coastline: "0 km (Landlocked)",
            forestCover: "10.4%",
            arableLand: "34.4%",
            terrain: "Mostly plateau with rim of mountains",
            naturalResources: ["Copper", "Cobalt", "Hydropower", "Limestone", "Salt", "Arable Land", "Gold", "Oil"]
        },

        geography_links: {
            rivers: ["White Nile", "Victoria Nile", "Albert Nile", "Katonga River"],
            mountains: ["Rwenzori Mountains", "Mount Elgon", "Margherita Peak", "Mount Muhabura"],
            deserts: [],
            forests: ["Bwindi Impenetrable Forest", "Kibale Forest", "Mabira Forest"],
            oceans: []
        },

        culture: {
            officialLanguages: ["English", "Swahili"],
            languages: ["English", "Swahili", "Luganda", "40+ Local Languages"],
            religions: ["Protestant (45%)", "Catholic (39%)", "Islam (14%)", "Others (2%)"],
            heritageSites: ["Bwindi Impenetrable National Park", "Rwenzori Mountains National Park", "Tombs of Buganda Kings at Kasubi"],
            festivals: ["Independence Day", "Martyrs' Day", "Eid al-Fitr", "Christmas"],
            cuisine: ["Matoke", "Rolex (Chapati Roll)", "Posho", "Luwombo", "Groundnut Sauce"],
            arts: ["Bark Cloth Making", "Traditional Dance", "Basket Weaving", "Drums"],
            sports: ["Football", "Cricket", "Rugby", "Athletics", "Boxing"]
        },

        symbols: {
            bird: "Grey Crowned Crane",
            animal: "Kob (Antelope)",
            flower: "None Official",
            tree: "None Official",
            anthem: "Oh Uganda, Land of Beauty",
            motto: "For God and My Country"
        },

        demographics: {
            lifeExpectancy: 64.38,
            literacyRate: "76.5%",
            urbanPopulation: "26.2%",
            medianAge: 15.7
        },

        history: {
            timeline: [
                { year: "1000s", title: "Kingdoms", description: "Bantu kingdoms emerged (Buganda, Bunyoro)" },
                { year: "1894", title: "British Protectorate", description: "Uganda Protectorate established" },
                { year: "1962", title: "Independence", description: "Independence from Britain" },
                { year: "1971-1979", title: "Idi Amin", description: "Brutal dictatorship of Idi Amin" },
                { year: "1986", title: "Museveni", description: "Yoweri Museveni took power" },
                { year: "2006", title: "Oil Discovery", description: "Major oil reserves discovered" }
            ],
            notableFigures: ["Idi Amin", "Milton Obote", "Yoweri Museveni", "Kabaka Mutesa II"]
        },

        disputes: [],

        quickFacts: [
            { icon: "gorilla", title: "Mountain Gorillas", text: "Home to half the world's mountain gorillas" },
            { icon: "water", title: "Source of Nile", text: "Lake Victoria is source of White Nile" },
            { icon: "users", title: "Young Population", text: "Youngest population globally (median 15.7 years)" },
            { icon: "dove", title: "Pearl of Africa", text: "Called 'Pearl of Africa' by Churchill" },
            { icon: "mountain", title: "Mountains of Moon", text: "Rwenzori 'Mountains of the Moon'" }
        ]
    },

    // 8. ZAMBIA
    {
        id: "ZMB",
        name: "Zambia",
        officialName: "Republic of Zambia",
        flag: "https://flagcdn.com/w320/zm.png",
        
        images: {
            hero: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=1920&q=80",
            landscape: "https://images.unsplash.com/photo-1582551371356-c3bcc8d82b6f?w=1920&q=80",
            city: "https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?w=1920&q=80"
        },

        basic: {
            capital: "Lusaka",
            continent: "Africa",
            region: "Southern Africa",
            subregion: "South-Central Africa",
            population: 20569737,
            area: 752612,
            populationDensity: 27,
            independence: "1964",
            callingCode: "+260",
            tld: ".zm",
            drivingSide: "Left",
            electricity: "230V, 50Hz"
        },

        location: {
            coordinates: [-13.1339, 27.8493],
            timezone: "UTC+2 (CAT)",
            neighbors: ["DR Congo", "Tanzania", "Malawi", "Mozambique", "Zimbabwe", "Botswana", "Namibia", "Angola"],
            borders: 6043,
            hemispheres: ["Southern", "Eastern"]
        },

        political: {
            government: "Unitary Presidential Republic",
            headOfState: "President Hakainde Hichilema",
            headOfGovernment: "President Hakainde Hichilema",
            legislature: "National Assembly",
            legalSystem: "Mixed (English Common Law and Customary Law)",
            states: 10,
            provinces: 10,
            largestCity: "Lusaka",
            organizations: ["UN", "AU", "SADC", "COMESA", "Commonwealth"]
        },

        economy: {
            gdp: "$29.15 Billion",
            gdpPPP: "$75.49 Billion",
            gdpPerCapita: "$1,417",
            gdpRank: "#100",
            gdpGrowth: "4.7%",
            currency: "Zambian Kwacha",
            currencyCode: "ZMW",
            currencySymbol: "ZK",
            inflation: "10.3%",
            unemployment: "6.1%",
            majorSectors: ["Services (55%)", "Industry (34%)", "Agriculture (3%)"],
            industries: ["Copper Mining", "Emerald Mining", "Construction", "Foodstuffs", "Beverages", "Chemicals", "Textiles", "Fertilizer", "Horticulture"],
            exports: ["Copper", "Cobalt", "Electricity", "Tobacco", "Cut Flowers", "Cotton"],
            imports: ["Machinery", "Transportation Equipment", "Petroleum Products", "Electricity", "Fertilizer"]
        },

        geography: {
            climate: "Tropical; Modified by Altitude",
            avgTemperature: "21°C",
            annualRainfall: "1,020 mm",
            highestPoint: "Mafinga Central (2,339 m)",
            lowestPoint: "Zambezi River (329 m)",
            coastline: "0 km (Landlocked)",
            forestCover: "65.4%",
            arableLand: "4.7%",
            terrain: "Mostly high plateau with some hills and mountains",
            naturalResources: ["Copper", "Cobalt", "Zinc", "Lead", "Coal", "Emeralds", "Gold", "Silver", "Uranium", "Hydropower"]
        },

        geography_links: {
            rivers: ["Zambezi River", "Kafue River", "Luangwa River", "Luapula River"],
            mountains: ["Mafinga Hills", "Muchinga Escarpment"],
            deserts: [],
            forests: ["Miombo Woodlands", "Kafue National Park"],
            oceans: []
        },

        culture: {
            officialLanguages: ["English"],
            languages: ["English", "Bemba", "Nyanja", "Tonga", "Lozi", "Kaonde", "Lunda", "Luvale"],
            religions: ["Protestant (75.3%)", "Catholic (20.2%)", "Others (4.5%)"],
            heritageSites: ["Mosi-oa-Tunya / Victoria Falls"],
            festivals: ["Kuomboka", "Nc'wala", "Likumbi Lya Mize", "Independence Day"],
            cuisine: ["Nshima", "Ifisashi", "Kapenta", "Chikanda", "Village Chicken"],
            arts: ["Traditional Dance", "Basket Weaving", "Wood Carving", "Pottery"],
            sports: ["Football", "Rugby", "Boxing", "Athletics", "Netball"]
        },

        symbols: {
            bird: "African Fish Eagle",
            animal: "African Fish Eagle",
            flower: "Bougainvillea",
            tree: "Mukwa Tree",
            anthem: "Stand and Sing of Zambia, Proud and Free",
            motto: "One Zambia, One Nation"
        },

        demographics: {
            lifeExpectancy: 65.29,
            literacyRate: "86.7%",
            urbanPopulation: "45%",
            medianAge: 16.8
        },

        history: {
            timeline: [
                { year: "900s", title: "Bantu Migration", description: "Bantu peoples settled the region" },
                { year: "1855", title: "Livingstone", description: "David Livingstone reached Victoria Falls" },
                { year: "1889", title: "British South Africa Company", description: "Cecil Rhodes' company took control" },
                { year: "1924", title: "Northern Rhodesia", description: "Became British protectorate" },
                { year: "1964", title: "Independence", description: "Independence as Zambia" },
                { year: "1991", title: "Multiparty Democracy", description: "Transition to multiparty system" }
            ],
            notableFigures: ["Kenneth Kaunda", "Frederick Chiluba", "Levy Mwanawasa", "Hakainde Hichilema"]
        },

        disputes: [],

        quickFacts: [
            { icon: "water", title: "Victoria Falls", text: "Shares 'The Smoke That Thunders' with Zimbabwe" },
            { icon: "gem", title: "Copper Belt", text: "One of world's largest copper producers" },
            { icon: "dove", title: "Peaceful", text: "One of Africa's most peaceful countries" },
            { icon: "map", title: "8 Neighbors", text: "Borders 8 countries" },
            { icon: "bolt", title: "Hydropower", text: "Major producer of hydroelectric power" }
        ]
    },

    // 9. ZIMBABWE
    {
        id: "ZWE",
        name: "Zimbabwe",
        officialName: "Republic of Zimbabwe",
        flag: "https://flagcdn.com/w320/zw.png",
        
        images: {
            hero: "https://images.unsplash.com/photo-1561479864-e9c5ad5e5f2a?w=1920&q=80",
            landscape: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=1920&q=80",
            city: "https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?w=1920&q=80"
        },

        basic: {
            capital: "Harare",
            continent: "Africa",
            region: "Southern Africa",
            subregion: "South-Central Africa",
            population: 16320537,
            area: 390757,
            populationDensity: 42,
            independence: "1980",
            callingCode: "+263",
            tld: ".zw",
            drivingSide: "Left",
            electricity: "220V, 50Hz"
        },

        location: {
            coordinates: [-19.0154, 29.1549],
            timezone: "UTC+2 (CAT)",
            neighbors: ["Zambia", "Mozambique", "South Africa", "Botswana"],
            borders: 3229,
            hemispheres: ["Southern", "Eastern"]
        },

        political: {
            government: "Unitary Presidential Republic",
            headOfState: "President Emmerson Mnangagwa",
            headOfGovernment: "President Emmerson Mnangagwa",
            legislature: "Parliament (Senate & National Assembly)",
            legalSystem: "Mixed (Roman-Dutch Law and English Common Law)",
            states: 10,
            provinces: 10,
            largestCity: "Harare",
            organizations: ["UN", "AU", "SADC", "COMESA"]
        },

        economy: {
            gdp: "$28.54 Billion",
            gdpPPP: "$50.02 Billion",
            gdpPerCapita: "$1,749",
            gdpRank: "#103",
            gdpGrowth: "3.5%",
            currency: "Zimbabwe Gold (ZiG)",
            currencyCode: "ZWG",
            currencySymbol: "ZiG",
            inflation: "47.6%",
            unemployment: "19.0%",
            majorSectors: ["Services (65%)", "Agriculture (12%)", "Industry (23%)"],
            industries: ["Mining (Coal, Gold, Platinum, Copper, Nickel, Tin, Diamonds)", "Steel", "Wood Products", "Cement", "Chemicals", "Fertilizer", "Clothing", "Footwear", "Foodstuffs", "Beverages"],
            exports: ["Gold", "Tobacco", "Nickel", "Diamonds", "Ferrochrome", "Cotton"],
            imports: ["Machinery", "Transport Equipment", "Chemicals", "Fuels", "Food Products"]
        },

        geography: {
            climate: "Tropical; Moderated by Altitude",
            avgTemperature: "21°C",
            annualRainfall: "657 mm",
            highestPoint: "Mount Nyangani (2,592 m)",
            lowestPoint: "Runde/Save River Junction (162 m)",
            coastline: "0 km (Landlocked)",
            forestCover: "38.4%",
            arableLand: "10.5%",
            terrain: "High plateau with mountains in east",
            naturalResources: ["Coal", "Chromium Ore", "Asbestos", "Gold", "Nickel", "Copper", "Iron Ore", "Vanadium", "Lithium", "Tin", "Platinum Group Metals"]
        },

        geography_links: {
            rivers: ["Zambezi River", "Limpopo River", "Save River", "Manyame River"],
            mountains: ["Eastern Highlands", "Mount Nyangani", "Chimanimani Mountains"],
            deserts: [],
            forests: ["Miombo Woodlands", "Eastern Highlands Forests"],
            oceans: []
        },

        culture: {
            officialLanguages: ["English", "Shona", "Ndebele", "13 Other Official Languages"],
            languages: ["Shona", "Ndebele", "English", "Tonga", "Venda", "Kalanga"],
            religions: ["Christianity (84.1%)", "Traditional Religions (4.5%)", "Islam (0.5%)", "None (10.9%)"],
            heritageSites: ["Great Zimbabwe National Monument", "Khami Ruins National Monument", "Mana Pools National Park", "Mosi-oa-Tunya / Victoria Falls", "Matobo Hills"],
            festivals: ["Independence Day", "Heroes' Day", "Harare International Festival of Arts", "Zimbabwe International Film Festival"],
            cuisine: ["Sadza", "Nyama (Meat)", "Muriwo (Vegetables)", "Kapenta", "Madora (Mopane Worms)", "Dovi"],
            arts: ["Stone Sculpture", "Mbira Music", "Traditional Dance", "Basket Weaving"],
            sports: ["Football", "Cricket", "Rugby", "Tennis", "Golf"]
        },

        symbols: {
            bird: "African Fish Eagle",
            animal: "Sable Antelope",
            flower: "Flame Lily",
            tree: "None Official",
            anthem: "Simudzai Mureza wedu WeZimbabwe",
            motto: "Unity, Freedom, Work"
        },

        demographics: {
            lifeExpectancy: 61.49,
            literacyRate: "88.7%",
            urbanPopulation: "32.4%",
            medianAge: 18.7
        },

        history: {
            timeline: [
                { year: "1100s", title: "Great Zimbabwe", description: "Great Zimbabwe civilization flourished" },
                { year: "1888", title: "Rudd Concession", description: "Cecil Rhodes obtained mining rights" },
                { year: "1890", title: "Southern Rhodesia", description: "British South Africa Company rule" },
                { year: "1965", title: "UDI", description: "Ian Smith declared independence illegally" },
                { year: "1980", title: "Independence", description: "Independence as Zimbabwe" },
                { year: "2017", title: "Mugabe Ousted", description: "Military coup ended Mugabe's 37-year rule" }
            ],
            notableFigures: ["Robert Mugabe", "Joshua Nkomo", "Morgan Tsvangirai", "Emmerson Mnangagwa"]
        },

        disputes: [],

        quickFacts: [
            { icon: "monument", title: "Great Zimbabwe", text: "Ancient city; largest stone structures in sub-Saharan Africa" },
            { icon: "water", title: "Victoria Falls", text: "Shares Victoria Falls with Zambia" },
            { icon: "money-bill", title: "Hyperinflation", text: "Experienced world's worst hyperinflation (2008)" },
            { icon: "gem", title: "Diamonds", text: "Major diamond producer (Marange fields)" },
            { icon: "book", title: "Literacy", text: "Highest literacy rate in Africa (88.7%)" }
        ]
    },

    // 10. ANGOLA
    {
        id: "AGO",
        name: "Angola",
        officialName: "Republic of Angola",
        flag: "https://flagcdn.com/w320/ao.png",
        
        images: {
            hero: "https://images.unsplash.com/photo-1565008576549-57569a49371d?w=1920&q=80",
            landscape: "https://images.unsplash.com/photo-1590846083693-f23fdede206d?w=1920&q=80",
            city: "https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?w=1920&q=80"
        },

        basic: {
            capital: "Luanda",
            continent: "Africa",
            region: "Southern Africa",
            subregion: "Central Africa",
            population: 36684202,
            area: 1246700,
            populationDensity: 29,
            independence: "1975",
            callingCode: "+244",
            tld: ".ao",
            drivingSide: "Right",
            electricity: "220V, 50Hz"
        },

        location: {
            coordinates: [-11.2027, 17.8739],
            timezone: "UTC+1 (WAT)",
            neighbors: ["DR Congo", "Republic of Congo", "Namibia", "Zambia"],
            borders: 5369,
            hemispheres: ["Southern", "Eastern"]
        },

        political: {
            government: "Unitary Presidential Republic",
            headOfState: "President João Lourenço",
            headOfGovernment: "President João Lourenço",
            legislature: "National Assembly",
            legalSystem: "Civil Law (Portuguese influence)",
            states: 18,
            provinces: 18,
            largestCity: "Luanda",
            organizations: ["UN", "AU", "SADC", "CPLP", "OPEC"]
        },

        economy: {
            gdp: "$117.88 Billion",
            gdpPPP: "$213.65 Billion",
            gdpPerCapita: "$3,214",
            gdpRank: "#60",
            gdpGrowth: "1.3%",
            currency: "Angolan Kwanza",
            currencyCode: "AOA",
            currencySymbol: "Kz",
            inflation: "13.6%",
            unemployment: "30.8%",
            majorSectors: ["Industry (51%)", "Services (43%)", "Agriculture (6%)"],
            industries: ["Petroleum", "Diamonds", "Iron Ore", "Phosphates", "Feldspar", "Bauxite", "Uranium", "Gold", "Cement", "Basic Metal Products", "Fish Processing", "Food Processing", "Brewing", "Tobacco Products", "Sugar", "Textiles", "Ship Repair"],
            exports: ["Crude Petroleum", "Diamonds", "Refined Petroleum", "Gas", "Coffee"],
            imports: ["Machinery", "Electrical Equipment", "Vehicles", "Medicines", "Food", "Textiles"]
        },

        geography: {
            climate: "Semiarid in South; Cool & Dry June-September",
            avgTemperature: "21°C",
            annualRainfall: "1,010 mm",
            highestPoint: "Morro de Moco (2,620 m)",
            lowestPoint: "Atlantic Ocean (0 m)",
            coastline: "1,600 km",
            forestCover: "46.3%",
            arableLand: "3.3%",
            terrain: "Narrow coastal plain rises to vast interior plateau",
            naturalResources: ["Petroleum", "Diamonds", "Iron Ore", "Phosphates", "Copper", "Feldspar", "Gold", "Bauxite", "Uranium"]
        },

        geography_links: {
            rivers: ["Kwanza River", "Congo River", "Cunene River", "Cubango River", "Cuando River"],
            mountains: ["Serra da Leba", "Morro de Moco"],
            deserts: ["Namib Desert (Southern)"],
            forests: ["Miombo Woodlands", "Tropical Rainforests (Cabinda)"],
            oceans: ["Atlantic Ocean"]
        },

        culture: {
            officialLanguages: ["Portuguese"],
            languages: ["Portuguese", "Umbundu", "Kimbundu", "Kikongo", "Chokwe", "Nyaneka"],
            religions: ["Roman Catholic (41.1%)", "Protestant (38.1%)", "Other Christians (8.6%)", "Traditional (4.6%)"],
            heritageSites: ["Mbanza Kongo"],
            festivals: ["Independence Day", "Carnival", "Armed Forces Day"],
            cuisine: ["Muamba de Galinha", "Calulu", "Funge", "Farofa", "Mufete"],
            arts: ["Traditional Dance", "Kuduro Music", "Wood Carving", "Basket Weaving"],
            sports: ["Football", "Basketball", "Handball", "Roller Hockey", "Athletics"]
        },

        symbols: {
            bird: "Red-crested Turaco",
            animal: "Red Sable Antelope",
            flower: "Welwitschia",
            tree: "Imbondeiro (Baobab)",
            anthem: "Angola Avante",
            motto: "Virtus Unita Fortior (Virtue is Stronger When United)"
        },

        demographics: {
            lifeExpectancy: 62.22,
            literacyRate: "71.1%",
            urbanPopulation: "68.1%",
            medianAge: 15.3
        },

        history: {
            timeline: [
                { year: "1483", title: "Portuguese Arrival", description: "Portuguese explorer Diogo Cão arrived" },
                { year: "1575", title: "Colony Founded", description: "Portuguese founded Luanda" },
                { year: "1961", title: "Independence War", description: "Armed struggle began" },
                { year: "1975", title: "Independence", description: "Independence from Portugal" },
                { year: "1975-2002", title: "Civil War", description: "Devastating civil war" },
                { year: "2017", title: "Lourenço Era", description: "João Lourenço became president" }
            ],
            notableFigures: ["Agostinho Neto", "José Eduardo dos Santos", "Jonas Savimbi", "João Lourenço"]
        },

        disputes: [
            { name: "Cabinda", description: "Separatist movement in exclave", type: "Territory" }
        ],

        quickFacts: [
            { icon: "oil-can", title: "Oil Producer", text: "Africa's 2nd largest oil producer" },
            { icon: "gem", title: "Diamonds", text: "World's 4th largest diamond producer" },
            { icon: "city", title: "Expensive Capital", text: "Luanda among world's most expensive cities" },
            { icon: "flag", title: "Cabinda", text: "Exclave separated by DR Congo" },
            { icon: "tree", title: "Welwitschia", text: "Home to ancient welwitschia plant (2,000+ years)" }
        ]
    },

    // 11. BOTSWANA
    {
        id: "BWA",
        name: "Botswana",
        officialName: "Republic of Botswana",
        flag: "https://flagcdn.com/w320/bw.png",
        
        images: {
            hero: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=1920&q=80",
            landscape: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1920&q=80",
            city: "https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?w=1920&q=80"
        },

        basic: {
            capital: "Gaborone",
            continent: "Africa",
            region: "Southern Africa",
            subregion: "Southern Africa",
            population: 2675352,
            area: 581730,
            populationDensity: 4,
            independence: "1966",
            callingCode: "+267",
            tld: ".bw",
            drivingSide: "Left",
            electricity: "230V, 50Hz"
        },

        location: {
            coordinates: [-22.3285, 24.6849],
            timezone: "UTC+2 (CAT)",
            neighbors: ["Namibia", "South Africa", "Zimbabwe", "Zambia"],
            borders: 4347,
            hemispheres: ["Southern", "Eastern"]
        },

        political: {
            government: "Unitary Parliamentary Republic",
            headOfState: "President Duma Boko",
            headOfGovernment: "President Duma Boko",
            legislature: "National Assembly",
            legalSystem: "Mixed (Roman-Dutch Law and Customary Law)",
            states: 10,
            districts: 10,
            largestCity: "Gaborone",
            organizations: ["UN", "AU", "SADC", "Commonwealth", "WTO"]
        },

        economy: {
            gdp: "$19.4 Billion",
            gdpPPP: "$47.47 Billion",
            gdpPerCapita: "$7,250",
            gdpRank: "#119",
            gdpGrowth: "5.5%",
            currency: "Botswana Pula",
            currencyCode: "BWP",
            currencySymbol: "P",
            inflation: "5.2%",
            unemployment: "26%",
            majorSectors: ["Services (65%)", "Industry (31%)", "Agriculture (2%)"],
            industries: ["Diamonds", "Copper", "Nickel", "Salt", "Soda Ash", "Potash", "Coal", "Iron Ore", "Silver", "Livestock Processing", "Textiles"],
            exports: ["Diamonds", "Copper", "Nickel", "Beef", "Textiles"],
            imports: ["Machinery", "Electrical Goods", "Transport Equipment", "Textiles", "Fuel & Petroleum Products", "Wood Products", "Metals"]
        },

        geography: {
            climate: "Semiarid; Warm Winters and Hot Summers",
            avgTemperature: "22°C",
            annualRainfall: "416 mm",
            highestPoint: "Tsodilo Hills (1,489 m)",
            lowestPoint: "Limpopo/Shashe River Junction (513 m)",
            coastline: "0 km (Landlocked)",
            forestCover: "19.8%",
            arableLand: "0.4%",
            terrain: "Predominantly flat to gently rolling tableland; Kalahari Desert in southwest",
            naturalResources: ["Diamonds", "Copper", "Nickel", "Salt", "Soda Ash", "Potash", "Coal", "Iron Ore", "Silver"]
        },

        geography_links: {
            rivers: ["Okavango River", "Limpopo River", "Chobe River", "Shashe River"],
            mountains: ["Tsodilo Hills"],
            deserts: ["Kalahari Desert"],
            forests: ["Chobe National Park", "Moremi Game Reserve"],
            oceans: []
        },

        culture: {
            officialLanguages: ["English", "Setswana"],
            languages: ["Setswana", "English", "Kalanga", "Sekgalagadi"],
            religions: ["Christianity (79.1%)", "Badimo (Traditional) (4.1%)", "Others (16.8%)"],
            heritageSites: ["Tsodilo Hills", "Okavango Delta"],
            festivals: ["Independence Day", "Sir Seretse Khama Day", "Presidents' Day", "Dikgafela (Harvest Festival)"],
            cuisine: ["Seswaa", "Morogo", "Phane (Mopane Worms)", "Vetkoek", "Sorghum Porridge"],
            arts: ["Basket Weaving", "Pottery", "San Rock Art", "Traditional Dance"],
            sports: ["Football", "Cricket", "Softball", "Athletics", "Boxing"]
        },

        symbols: {
            bird: "Kori Bustard",
            animal: "Zebra",
            flower: "None Official",
            tree: "None Official",
            anthem: "Fatshe leno la rona",
            motto: "Pula (Rain)"
        },

        demographics: {
            lifeExpectancy: 69.86,
            literacyRate: "88.5%",
            urbanPopulation: "72.2%",
            medianAge: 25.7
        },

        history: {
            timeline: [
                { year: "1885", title: "Bechuanaland", description: "Became British protectorate" },
                { year: "1966", title: "Independence", description: "Independence as Botswana" },
                { year: "1967", title: "Diamond Discovery", description: "Diamonds discovered at Orapa" },
                { year: "2008", title: "Khama Era", description: "Ian Khama became president" },
                { year: "2024", title: "New President", description: "Duma Boko elected president" }
            ],
            notableFigures: ["Seretse Khama", "Quett Masire", "Festus Mogae", "Ian Khama"]
        },

        disputes: [],

        quickFacts: [
            { icon: "gem", title: "Diamond Giant", text: "World's largest diamond producer by value" },
            { icon: "chart-line", title: "Success Story", text: "Fastest-growing economy 1966-1990" },
            { icon: "dove", title: "Stable Democracy", text: "One of Africa's most stable democracies" },
            { icon: "paw", title: "Wildlife", text: "40% of land devoted to national parks" },
            { icon: "water", title: "Okavango Delta", text: "World's largest inland delta" }
        ]
    },

    // 12. ESWATINI
    {
        id: "SWZ",
        name: "Eswatini",
        officialName: "Kingdom of Eswatini",
        flag: "https://flagcdn.com/w320/sz.png",
        
        images: {
            hero: "https://images.unsplash.com/photo-1565008576549-57569a49371d?w=1920&q=80",
            landscape: "https://images.unsplash.com/photo-1590846083693-f23fdede206d?w=1920&q=80",
            city: "https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?w=1920&q=80"
        },

        basic: {
            capital: "Mbabane (Administrative); Lobamba (Royal & Legislative)",
            continent: "Africa",
            region: "Southern Africa",
            subregion: "Southern Africa",
            population: 1210822,
            area: 17364,
            populationDensity: 79,
            independence: "1968",
            callingCode: "+268",
            tld: ".sz",
            drivingSide: "Left",
            electricity: "230V, 50Hz"
        },

        location: {
            coordinates: [-26.5225, 31.4659],
            timezone: "UTC+2 (SAST)",
            neighbors: ["South Africa", "Mozambique"],
            borders: 546,
            hemispheres: ["Southern", "Eastern"]
        },

        political: {
            government: "Unitary Parliamentary Absolute Monarchy",
            headOfState: "King Mswati III",
            headOfGovernment: "Prime Minister Russell Dlamini",
            legislature: "Parliament (Senate & House of Assembly)",
            legalSystem: "Mixed (Roman-Dutch Law and Swazi Traditional Law)",
            states: 4,
            regions: 4,
            largestCity: "Manzini",
            organizations: ["UN", "AU", "SADC", "Commonwealth", "COMESA"]
        },

        economy: {
            gdp: "$4.91 Billion",
            gdpPPP: "$12.01 Billion",
            gdpPerCapita: "$4,056",
            gdpRank: "#158",
            gdpGrowth: "3.6%",
            currency: "Swazi Lilangeni",
            currencyCode: "SZL",
            currencySymbol: "E",
            inflation: "4.8%",
            unemployment: "33.3%",
            majorSectors: ["Services (50%)", "Industry (42%)", "Agriculture (6%)"],
            industries: ["Mining (Coal, Diamond)", "Wood Pulp", "Sugar", "Soft Drink Concentrates", "Textiles", "Apparel"],
            exports: ["Soft Drink Concentrates", "Sugar", "Timber", "Cotton Yarn", "Refrigerators", "Citrus"],
            imports: ["Motor Vehicles", "Machinery", "Transport Equipment", "Foodstuffs", "Petroleum Products", "Chemicals"]
        },

        geography: {
            climate: "Varies from Tropical to Near Temperate",
            avgTemperature: "19°C",
            annualRainfall: "788 mm",
            highestPoint: "Emlembe (1,862 m)",
            lowestPoint: "Great Usutu River (21 m)",
            coastline: "0 km (Landlocked)",
            forestCover: "34.4%",
            arableLand: "9.8%",
            terrain: "Mostly mountainous and hilly, some moderately sloping plains",
            naturalResources: ["Asbestos", "Coal", "Clay", "Cassiterite", "Hydropower", "Forests", "Small Gold and Diamond Deposits", "Quarry Stone", "Talc"]
        },

        geography_links: {
            rivers: ["Usutu River", "Komati River", "Mbuluzi River", "Ngwavuma River"],
            mountains: ["Emlembe", "Lubombo Mountains"],
            deserts: [],
            forests: ["Highveld Pine Plantations", "Indigenous Forests"],
            oceans: []
        },

        culture: {
            officialLanguages: ["Swazi (siSwati)", "English"],
            languages: ["siSwati", "English", "Zulu", "Tsonga"],
            religions: ["Zionist (40%)", "Roman Catholic (20%)", "Muslim (2%)", "Others (38%)"],
            heritageSites: [],
            festivals: ["Umhlanga (Reed Dance)", "Incwala (Kingship Ceremony)", "Independence Day"],
            cuisine: ["Sishwala (Maize Porridge)", "Umbhidvo Wetintsanga", "Sidvudvu", "Emasi (Curdled Milk)"],
            arts: ["Traditional Weaving", "Candle Making", "Pottery", "Traditional Dance"],
            sports: ["Football", "Rugby", "Cricket", "Golf"]
        },

        symbols: {
            bird: "Purple-crested Turaco",
            animal: "Lion",
            flower: "None Official",
            tree: "None Official",
            anthem: "Nkulunkulu Mnikati wetibusiso temaSwati",
            motto: "Siyinqaba (We Are a Fortress)"
        },

        demographics: {
            lifeExpectancy: 59.13,
            literacyRate: "88.4%",
            urbanPopulation: "24.2%",
            medianAge: 21.7
        },

        history: {
            timeline: [
                { year: "1750s", title: "Swazi Nation", description: "Swazi nation formed" },
                { year: "1881", title: "British Protectorate", description: "Became British protectorate" },
                { year: "1968", title: "Independence", description: "Independence from Britain as Swaziland" },
                { year: "1973", title: "Constitution Suspended", description: "King assumed absolute power" },
                { year: "2018", title: "Renamed", description: "Changed name to Eswatini" }
            ],
            notableFigures: ["King Sobhuza II", "King Mswati III"]
        },

        disputes: [],

        quickFacts: [
            { icon: "crown", title: "Absolute Monarchy", text: "Africa's last absolute monarchy" },
            { icon: "calendar", title: "Name Change", text: "Changed from Swaziland to Eswatini in 2018" },
            { icon: "female", title: "Reed Dance", text: "Annual Umhlanga ceremony with 40,000+ maidens" },
            { icon: "map", title: "Small Nation", text: "One of Africa's smallest countries" },
            { icon: "virus", title: "HIV Challenge", text: "One of highest HIV rates globally" }
        ]
    },

    // 13. LESOTHO
    {
        id: "LSO",
        name: "Lesotho",
        officialName: "Kingdom of Lesotho",
        flag: "https://flagcdn.com/w320/ls.png",
        
        images: {
            hero: "https://images.unsplash.com/photo-1590846083693-f23fdede206d?w=1920&q=80",
            landscape: "https://images.unsplash.com/photo-1565008576549-57569a49371d?w=1920&q=80",
            city: "https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?w=1920&q=80"
        },

        basic: {
            capital: "Maseru",
            continent: "Africa",
            region: "Southern Africa",
            subregion: "Southern Africa",
            population: 2330318,
            area: 30355,
            populationDensity: 76,
            independence: "1966",
            callingCode: "+266",
            tld: ".ls",
            drivingSide: "Left",
            electricity: "220V, 50Hz"
        },

        location: {
            coordinates: [-29.6100, 28.2336],
            timezone: "UTC+2 (SAST)",
            neighbors: ["South Africa"],
            borders: 1106,
            hemispheres: ["Southern", "Eastern"]
        },

        political: {
            government: "Unitary Parliamentary Constitutional Monarchy",
            headOfState: "King Letsie III",
            headOfGovernment: "Prime Minister Sam Matekane",
            legislature: "Parliament (Senate & National Assembly)",
            legalSystem: "Mixed (Roman-Dutch Law and Customary Law)",
            states: 10,
            districts: 10,
            largestCity: "Maseru",
            organizations: ["UN", "AU", "SADC", "Commonwealth"]
        },

        economy: {
            gdp: "$2.49 Billion",
            gdpPPP: "$6.25 Billion",
            gdpPerCapita: "$1,069",
            gdpRank: "#168",
            gdpGrowth: "2.6%",
            currency: "Lesotho Loti",
            currencyCode: "LSL",
            currencySymbol: "L",
            inflation: "7.2%",
            unemployment: "32.2%",
            majorSectors: ["Services (63%)", "Industry (31%)", "Agriculture (5%)"],
            industries: ["Food Processing", "Beverages", "Textiles", "Apparel Assembly", "Handicrafts", "Construction", "Tourism"],
            exports: ["Diamonds", "Clothing", "Wool", "Water", "Mohair"],
            imports: ["Food", "Building Materials", "Vehicles", "Machinery", "Medicines", "Petroleum Products"]
        },

        geography: {
            climate: "Temperate; Cool to Cold; Dry Winters",
            avgTemperature: "15°C",
            annualRainfall: "788 mm",
            highestPoint: "Thabana Ntlenyana (3,482 m)",
            lowestPoint: "Makhaleng/Senqu Rivers Junction (1,400 m)",
            coastline: "0 km (Landlocked; Enclave)",
            forestCover: "1.6%",
            arableLand: "10.1%",
            terrain: "Mostly highland with plateaus, hills, and mountains",
            naturalResources: ["Water", "Agricultural & Grazing Land", "Diamonds", "Sand", "Clay", "Building Stone"]
        },

        geography_links: {
            rivers: ["Orange River (Senqu)", "Caledon River", "Makhaleng River"],
            mountains: ["Drakensberg/Maluti Mountains", "Thabana Ntlenyana"],
            deserts: [],
            forests: ["Afro-Montane Grasslands"],
            oceans: []
        },

        culture: {
            officialLanguages: ["Sesotho", "English"],
            languages: ["Sesotho", "English", "Zulu", "Xhosa"],
            religions: ["Christianity (90%)", "Traditional Beliefs (10%)"],
            heritageSites: [],
            festivals: ["Independence Day", "Moshoeshoe Day", "Heroes' Day"],
            cuisine: ["Papa (Maize Porridge)", "Moroho (Wild Spinach)", "Motoho (Sorghum Porridge)", "Nama (Meat)"],
            arts: ["Basotho Blankets", "Pottery", "Tapestry", "Traditional Music"],
            sports: ["Football", "Horse Racing", "Athletics", "Boxing"]
        },

        symbols: {
            bird: "Bearded Vulture (Lammergeier)",
            animal: "Black Rhinoceros",
            flower: "Spiral Aloe",
            tree: "None Official",
            anthem: "Lesotho Fatse La Bontata Rona",
            motto: "Khotso, Pula, Nala (Peace, Rain, Prosperity)"
        },

        demographics: {
            lifeExpectancy: 55.65,
            literacyRate: "79.4%",
            urbanPopulation: "29.5%",
            medianAge: 24.2
        },

        history: {
            timeline: [
                { year: "1820s", title: "Basotho Nation", description: "Moshoeshoe I unified Basotho nation" },
                { year: "1868", title: "British Protectorate", description: "Became British protectorate Basutoland" },
                { year: "1966", title: "Independence", description: "Independence from Britain" },
                { year: "1970", title: "Political Crisis", description: "Election results annulled; state of emergency" },
                { year: "2022", title: "New Government", description: "Sam Matekane became prime minister" }
            ],
            notableFigures: ["Moshoeshoe I", "Moshoeshoe II", "Letsie III"]
        },

        disputes: [],

        quickFacts: [
            { icon: "mountain", title: "Kingdom in Sky", text: "Only country entirely above 1,000m; lowest point is highest globally" },
            { icon: "map", title: "Enclave", text: "Only country completely surrounded by another country (South Africa)" },
            { icon: "water", title: "Water Exporter", text: "Major water exporter to South Africa (Lesotho Highlands Water Project)" },
            { icon: "gem", title: "Diamonds", text: "Major diamond producer (Letšeng mine)" },
            { icon: "snowflake", title: "Skiing", text: "Only African country with snow skiing" }
        ]
    },

    // 14. NAMIBIA
    {
        id: "NAM",
        name: "Namibia",
        officialName: "Republic of Namibia",
        flag: "https://flagcdn.com/w320/na.png",
        
        images: {
            hero: "https://images.unsplash.com/photo-1509099863731-ef4bff19e808?w=1920&q=80",
            landscape: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=1920&q=80",
            city: "https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?w=1920&q=80"
        },

        basic: {
            capital: "Windhoek",
            continent: "Africa",
            region: "Southern Africa",
            subregion: "Southern Africa",
            population: 2604172,
            area: 824292,
            populationDensity: 3,
            independence: "1990",
            callingCode: "+264",
            tld: ".na",
            drivingSide: "Left",
            electricity: "220V, 50Hz"
        },

        location: {
            coordinates: [-22.9576, 18.4904],
            timezone: "UTC+2 (CAT)",
            neighbors: ["Angola", "Botswana", "South Africa", "Zambia"],
            borders: 4220,
            hemispheres: ["Southern", "Eastern"]
        },

        political: {
            government: "Unitary Presidential Republic",
            headOfState: "President Nangolo Mbumba",
            headOfGovernment: "President Nangolo Mbumba",
            legislature: "Parliament (National Council & National Assembly)",
            legalSystem: "Mixed (Roman-Dutch Law and Customary Law)",
            states: 14,
            regions: 14,
            largestCity: "Windhoek",
            organizations: ["UN", "AU", "SADC", "Commonwealth", "WTO"]
        },

        economy: {
            gdp: "$12.91 Billion",
            gdpPPP: "$27.5 Billion",
            gdpPerCapita: "$4,958",
            gdpRank: "#132",
            gdpGrowth: "4.2%",
            currency: "Namibian Dollar",
            currencyCode: "NAD",
            currencySymbol: "N$",
            inflation: "5.9%",
            unemployment: "20.3%",
            majorSectors: ["Services (64%)", "Industry (27%)", "Agriculture (6%)"],
            industries: ["Meatpacking", "Fish Processing", "Dairy Products", "Pasta", "Beverages", "Mining (Diamonds, Lead, Zinc, Tin, Silver, Tungsten, Uranium, Copper)"],
            exports: ["Diamonds", "Copper", "Gold", "Zinc", "Lead", "Uranium", "Cattle", "Fish"],
            imports: ["Foodstuffs", "Petroleum Products", "Machinery", "Equipment", "Chemicals"]
        },

        geography: {
            climate: "Desert; Hot, Dry; Rainfall Sparse",
            avgTemperature: "19°C",
            annualRainfall: "285 mm",
            highestPoint: "Brandberg Mountain (2,573 m)",
            lowestPoint: "Atlantic Ocean (0 m)",
            coastline: "1,572 km",
            forestCover: "8.8%",
            arableLand: "0.8%",
            terrain: "Mostly high plateau; Namib Desert along coast; Kalahari Desert in east",
            naturalResources: ["Diamonds", "Copper", "Uranium", "Gold", "Silver", "Lead", "Tin", "Lithium", "Cadmium", "Tungsten", "Zinc", "Salt", "Hydropower", "Fish"]
        },

        geography_links: {
            rivers: ["Orange River", "Kunene River", "Okavango River", "Zambezi River (Caprivi)"],
            mountains: ["Brandberg Mountain", "Spitzkoppe", "Waterberg Plateau"],
            deserts: ["Namib Desert", "Kalahari Desert"],
            forests: ["Caprivi Strip Woodlands"],
            oceans: ["Atlantic Ocean"]
        },

        culture: {
            officialLanguages: ["English"],
            languages: ["English", "Oshiwambo", "Afrikaans", "Nama/Damara", "Herero", "Kavango", "German"],
            religions: ["Christianity (97.5%)", "Traditional Religions (0.6%)", "Others (1.9%)"],
            heritageSites: ["Twyfelfontein", "Namib Sand Sea"],
            festivals: ["Independence Day", "Heroes' Day", "Windhoek Carnival (WIKA)", "Himba Traditional Festivals"],
            cuisine: ["Braaivleis (BBQ)", "Potjiekos", "Kapana", "Mieliepap", "Oshifima"],
            arts: ["Himba Jewelry & Body Art", "Herero Dolls", "Bushman Rock Art", "Basket Weaving"],
            sports: ["Football", "Rugby", "Cricket", "Athletics", "Boxing"]
        },

        symbols: {
            bird: "African Fish Eagle",
            animal: "Oryx (Gemsbok)",
            flower: "Welwitschia",
            tree: "Aloe Dichotoma (Quiver Tree)",
            anthem: "Namibia, Land of the Brave",
            motto: "Unity, Liberty, Justice"
        },

        demographics: {
            lifeExpectancy: 63.57,
            literacyRate: "91.5%",
            urbanPopulation: "53.6%",
            medianAge: 21.8
        },

        history: {
            timeline: [
                { year: "1884", title: "German South West Africa", description: "German colony established" },
                { year: "1904-1908", title: "Herero Genocide", description: "Germany committed genocide against Herero and Nama" },
                { year: "1920", title: "South African Mandate", description: "South African rule began" },
                { year: "1966", title: "Armed Struggle", description: "SWAPO began liberation war" },
                { year: "1990", title: "Independence", description: "Independence from South Africa" }
            ],
            notableFigures: ["Sam Nujoma", "Hifikepunye Pohamba", "Hage Geingob"]
        },

        disputes: [],

        quickFacts: [
            { icon: "users", title: "Least Dense Africa", text: "2nd least densely populated country globally (3/km²)" },
            { icon: "gem", title: "Diamonds", text: "World's largest source of marine diamonds" },
            { icon: "tree", title: "Oldest Desert", text: "Namib Desert is world's oldest desert (55M years)" },
            { icon: "paw", title: "Free-roaming Wildlife", text: "Only country with constitution protecting environment" },
            { icon: "map", title: "Skeleton Coast", text: "Famous Skeleton Coast with shipwrecks" }
        ]
    },

    // 15. SOUTH AFRICA
    {
        id: "ZAF",
        name: "South Africa",
        officialName: "Republic of South Africa",
        flag: "https://flagcdn.com/w320/za.png",
        
        images: {
            hero: "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=1920&q=80",
            landscape: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=1920&q=80",
            city: "https://images.unsplash.com/photo-1577948000111-9c970dfe3743?w=1920&q=80"
        },

        basic: {
            capital: "Pretoria (Executive), Cape Town (Legislative), Bloemfontein (Judicial)",
            continent: "Africa",
            region: "Southern Africa",
            subregion: "Southern Africa",
            population: 60414495,
            area: 1221037,
            populationDensity: 49,
            independence: "1910 (Union), 1961 (Republic)",
            callingCode: "+27",
            tld: ".za",
            drivingSide: "Left",
            electricity: "230V, 50Hz"
        },

        location: {
            coordinates: [-30.5595, 22.9375],
            timezone: "UTC+2 (SAST)",
            neighbors: ["Namibia", "Botswana", "Zimbabwe", "Mozambique", "Eswatini", "Lesotho (Enclave)"],
            borders: 5244,
            hemispheres: ["Southern", "Eastern"]
        },

        political: {
            government: "Unitary Parliamentary Republic",
            headOfState: "President Cyril Ramaphosa",
            headOfGovernment: "President Cyril Ramaphosa",
            legislature: "Parliament (National Council of Provinces & National Assembly)",
            legalSystem: "Mixed (Roman-Dutch Civil Law, English Common Law, Customary Law)",
            states: 9,
            provinces: 9,
            largestCity: "Johannesburg",
            organizations: ["UN", "AU", "SADC", "Commonwealth", "BRICS", "G20", "WTO"]
        },

        economy: {
            gdp: "$399.02 Billion",
            gdpPPP: "$954.06 Billion",
            gdpPerCapita: "$6,603",
            gdpRank: "#33",
            gdpGrowth: "0.6%",
            currency: "South African Rand",
            currencyCode: "ZAR",
            currencySymbol: "R",
            inflation: "5.4%",
            unemployment: "32.9%",
            majorSectors: ["Services (67%)", "Industry (27%)", "Agriculture (2%)"],
            industries: ["Mining (Platinum, Gold, Chromium)", "Automobile Assembly", "Metalworking", "Machinery", "Textiles", "Iron & Steel", "Chemicals", "Fertilizer", "Foodstuffs", "Commercial Ship Repair"],
            exports: ["Gold", "Diamonds", "Platinum", "Iron Ore", "Cars", "Machinery"],
            imports: ["Machinery", "Vehicles", "Crude Oil", "Electronics", "Chemicals"]
        },

        geography: {
            climate: "Mostly Semiarid; Subtropical on East Coast",
            avgTemperature: "17.5°C",
            annualRainfall: "495 mm",
            highestPoint: "Mafadi (3,450 m)",
            lowestPoint: "Atlantic Ocean (0 m)",
            coastline: "2,798 km",
            forestCover: "7.6%",
            arableLand: "9.9%",
            terrain: "Vast interior plateau rimmed by rugged hills and narrow coastal plain",
            naturalResources: ["Gold", "Chromium", "Antimony", "Coal", "Iron Ore", "Manganese", "Nickel", "Phosphates", "Tin", "Rare Earth Elements", "Uranium", "Gem Diamonds", "Platinum", "Copper", "Vanadium", "Salt", "Natural Gas"]
        },

        geography_links: {
            rivers: ["Orange River", "Vaal River", "Limpopo River", "Tugela River"],
            mountains: ["Drakensberg", "Table Mountain", "Mafadi", "Sneeuberg"],
            deserts: ["Kalahari Desert", "Karoo"],
            forests: ["Knysna Forest", "Tsitsikamma"],
            oceans: ["Atlantic Ocean", "Indian Ocean"]
        },

        culture: {
            officialLanguages: ["Zulu", "Xhosa", "Afrikaans", "English", "Northern Sotho", "Tswana", "Southern Sotho", "Tsonga", "Swati", "Venda", "Ndebele"],
            languages: ["Zulu", "Xhosa", "Afrikaans", "English", "Sotho", "Tswana", "Venda", "Tsonga", "Swati", "Ndebele"],
            religions: ["Christianity (79.8%)", "No Religion (10.9%)", "Islam (1.5%)", "Hinduism (1.2%)", "Traditional (4.4%)"],
            heritageSites: ["Fossil Hominid Sites of South Africa", "Robben Island", "iSimangaliso Wetland Park", "uKhahlamba / Drakensberg Park", "Mapungubwe Cultural Landscape", "Cape Floral Region", "Vredefort Dome", "Richtersveld Cultural and Botanical Landscape", "Khomani Cultural Landscape", "Barberton Makhonjwa Mountains"],
            festivals: ["Heritage Day (Braai Day)", "Freedom Day", "Youth Day", "National Arts Festival", "Cape Town Jazz Festival"],
            cuisine: ["Braai (BBQ)", "Biltong", "Bobotie", "Bunny Chow", "Potjiekos", "Boerewors", "Chakalaka", "Malva Pudding"],
            arts: ["Ndebele Painting", "Zulu Beadwork", "Township Jazz", "Afrikaans Literature", "Gumboot Dancing"],
            sports: ["Rugby", "Cricket", "Football", "Golf", "Swimming", "Boxing"]
        },

        symbols: {
            bird: "Blue Crane",
            animal: "Springbok",
            flower: "King Protea",
            tree: "Real Yellowwood",
            anthem: "Nkosi Sikelel' iAfrika / Die Stem van Suid-Afrika",
            motto: "ǃke e: ǀxarra ǁke (Unity in Diversity)"
        },

        demographics: {
            lifeExpectancy: 65.29,
            literacyRate: "95%",
            urbanPopulation: "68.3%",
            medianAge: 28.0
        },

        history: {
            timeline: [
                { year: "1652", title: "Dutch Settlement", description: "Dutch East India Company established Cape Town" },
                { year: "1806", title: "British Control", description: "Britain took control of Cape" },
                { year: "1910", title: "Union", description: "Union of South Africa formed" },
                { year: "1948", title: "Apartheid", description: "Apartheid system implemented" },
                { year: "1990", title: "End of Apartheid", description: "Mandela released; apartheid ended" },
                { year: "1994", title: "Democracy", description: "First democratic elections; Mandela became president" }
            ],
            notableFigures: ["Nelson Mandela", "Desmond Tutu", "F.W. de Klerk", "Steve Biko", "Thabo Mbeki", "Cyril Ramaphosa"]
        },

        disputes: [],

        quickFacts: [
            { icon: "flag", title: "Rainbow Nation", text: "11 official languages; 'Rainbow Nation'" },
            { icon: "gem", title: "Mining Giant", text: "World's largest producer of platinum, chromium" },
            { icon: "landmark", title: "3 Capitals", text: "Only country with 3 capital cities" },
            { icon: "dove", title: "Mandela", text: "Home of Nelson Mandela; end of apartheid" },
            { icon: "leaf", title: "Cape Floral Kingdom", text: "Smallest of 6 floral kingdoms" },
            { icon: "trophy", title: "Rugby Champions", text: "4-time Rugby World Cup champions (record)" }
        ]
    },

    // 16. AUSTRALIA
    {
        id: "AUS",
        name: "Australia",
        officialName: "Commonwealth of Australia",
        flag: "https://flagcdn.com/w320/au.png",
        
        images: {
            hero: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=1920&q=80",
            landscape: "https://images.unsplash.com/photo-1529108190281-9a4f620bc2d8?w=1920&q=80",
            city: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80"
        },

        basic: {
            capital: "Canberra",
            continent: "Oceania",
            region: "Oceania",
            subregion: "Australia and New Zealand",
            population: 26439111,
            area: 7692024,
            populationDensity: 3,
            independence: "1901",
            callingCode: "+61",
            tld: ".au",
            drivingSide: "Left",
            electricity: "230V, 50Hz"
        },

        location: {
            coordinates: [-25.2744, 133.7751],
            timezone: "UTC+8 to UTC+10.5 (3 zones)",
            neighbors: [],
            borders: 0,
            hemispheres: ["Southern", "Eastern"],
            islandContinent: true
        },

        political: {
            government: "Federal Parliamentary Constitutional Monarchy",
            headOfState: "King Charles III (represented by Governor-General Sam Mostyn)",
            headOfGovernment: "Prime Minister Anthony Albanese",
            legislature: "Parliament (Senate & House of Representatives)",
            legalSystem: "Common Law",
            states: 6,
            territories: 2,
            largestCity: "Sydney",
            organizations: ["UN", "Commonwealth", "G20", "OECD", "APEC", "AUKUS", "Five Eyes", "WTO"]
        },

        economy: {
            gdp: "$1.72 Trillion",
            gdpPPP: "$1.73 Trillion",
            gdpPerCapita: "$65,100",
            gdpRank: "#12",
            gdpGrowth: "1.5%",
            currency: "Australian Dollar",
            currencyCode: "AUD",
            currencySymbol: "A$",
            inflation: "5.4%",
            unemployment: "3.7%",
            majorSectors: ["Services (71%)", "Industry (25%)", "Agriculture (2%)"],
            industries: ["Mining", "Industrial & Transportation Equipment", "Food Processing", "Chemicals", "Steel", "Motor Vehicles", "Pharmaceuticals", "Biotechnology", "FinTech"],
            exports: ["Iron Ore", "Coal", "Natural Gas", "Gold", "Aluminum", "Wheat", "Beef", "Wool"],
            imports: ["Vehicles", "Machinery", "Computers", "Refined Petroleum", "Telecommunications Equipment"]
        },

        geography: {
            climate: "Mostly Arid to Semiarid; Temperate in South; Tropical in North",
            avgTemperature: "21.9°C",
            annualRainfall: "534 mm",
            highestPoint: "Mount Kosciuszko (2,228 m)",
            lowestPoint: "Lake Eyre (-15 m)",
            coastline: "25,760 km",
            forestCover: "17%",
            arableLand: "6.2%",
            terrain: "Mostly low plateau with deserts; fertile plain in southeast",
            naturalResources: ["Bauxite", "Coal", "Iron Ore", "Copper", "Tin", "Gold", "Silver", "Uranium", "Nickel", "Tungsten", "Rare Earth Elements", "Mineral Sands", "Lead", "Zinc", "Diamonds", "Natural Gas", "Petroleum"]
        },

        geography_links: {
            rivers: ["Murray River", "Darling River", "Murrumbidgee River", "Cooper Creek"],
            mountains: ["Great Dividing Range", "Mount Kosciuszko", "Blue Mountains", "Snowy Mountains"],
            deserts: ["Great Victoria Desert", "Great Sandy Desert", "Tanami Desert", "Simpson Desert", "Gibson Desert"],
            forests: ["Daintree Rainforest", "Kakadu", "Tasmanian Wilderness"],
            oceans: ["Pacific Ocean", "Indian Ocean", "Southern Ocean", "Tasman Sea", "Coral Sea"]
        },

        culture: {
            officialLanguages: ["English"],
            languages: ["English", "Mandarin", "Arabic", "Cantonese", "Vietnamese", "Italian", "Greek", "Hindi", "Indigenous Languages"],
            religions: ["Christianity (43.9%)", "No Religion (38.9%)", "Islam (3.2%)", "Hinduism (2.7%)", "Buddhism (2.4%)"],
            heritageSites: ["Great Barrier Reef", "Sydney Opera House", "Uluru-Kata Tjuta National Park", "Kakadu National Park", "Tasmanian Wilderness", "Lord Howe Island Group", "Gondwana Rainforests", "Shark Bay", "Fraser Island", "Australian Fossil Mammal Sites", "Heard and McDonald Islands", "Macquarie Island", "Greater Blue Mountains", "Purnululu National Park", "Royal Exhibition Building and Carlton Gardens", "Australian Convict Sites", "Ningaloo Coast", "Budj Bim Cultural Landscape"],
            festivals: ["Australia Day", "ANZAC Day", "Melbourne Cup", "Sydney New Year's Eve", "Vivid Sydney", "Mardi Gras"],
            cuisine: ["Vegemite", "Meat Pie", "Lamington", "Pavlova", "Tim Tams", "Barramundi", "Kangaroo Steak", "Anzac Biscuits"],
            arts: ["Aboriginal Art", "Contemporary Music", "Film Industry", "Architecture", "Literature"],
            sports: ["Australian Rules Football", "Cricket", "Rugby", "Swimming", "Tennis", "Surfing"]
        },

        symbols: {
            bird: "Emu",
            animal: "Kangaroo",
            flower: "Golden Wattle",
            tree: "Golden Wattle (Acacia pycnantha)",
            anthem: "Advance Australia Fair",
            motto: "None Official"
        },

        demographics: {
            lifeExpectancy: 84.12,
            literacyRate: "99%",
            urbanPopulation: "86.6%",
            medianAge: 38.1
        },

        history: {
            timeline: [
                { year: "65,000+ BP", title: "Indigenous Arrival", description: "Aboriginal Australians arrived" },
                { year: "1770", title: "British Claim", description: "Captain James Cook claimed eastern Australia" },
                { year: "1788", title: "First Fleet", description: "British colonization began at Sydney Cove" },
                { year: "1851", title: "Gold Rush", description: "Gold discovered in Victoria" },
                { year: "1901", title: "Federation", description: "Commonwealth of Australia formed" },
                { year: "1942", title: "WWII", description: "Darwin bombed; Australia fought in Pacific" },
                { year: "2008", title: "Apology", description: "Government apologized to Stolen Generations" }
            ],
            notableFigures: ["Captain James Cook", "Ned Kelly", "Sir Donald Bradman", "Dame Nellie Melba", "Cathy Freeman", "Steve Irwin"]
        },

        disputes: [],

        quickFacts: [
            { icon: "flag", title: "Island Continent", text: "Only country that is also a continent" },
            { icon: "coral", title: "Great Barrier Reef", text: "World's largest coral reef system" },
            { icon: "kangaroo", title: "Unique Wildlife", text: "75% of species found nowhere else" },
            { icon: "desert", title: "Outback", text: "70% of country is semi-arid or desert" },
            { icon: "users", title: "Multicultural", text: "One of world's most multicultural societies" },
            { icon: "sun", title: "Deadly Animals", text: "Home to many of world's most venomous animals" }
        ]
    },

    // 17. FIJI
    {
        id: "FJI",
        name: "Fiji",
        officialName: "Republic of Fiji",
        flag: "https://flagcdn.com/w320/fj.png",
        
        images: {
            hero: "https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?w=1920&q=80",
            landscape: "https://images.unsplash.com/photo-1558181422-7ad9311c47d9?w=1920&q=80",
            city: "https://images.unsplash.com/photo-1584306842120-0a1b8e90e1dc?w=1920&q=80"
        },

        basic: {
            capital: "Suva",
            continent: "Oceania",
            region: "Oceania",
            subregion: "Melanesia",
            population: 936375,
            area: 18274,
            populationDensity: 51,
            independence: "1970",
            callingCode: "+679",
            tld: ".fj",
            drivingSide: "Left",
            electricity: "240V, 50Hz"
        },

        location: {
            coordinates: [-17.7134, 178.0650],
            timezone: "UTC+12 (FJT)",
            neighbors: [],
            borders: 0,
            hemispheres: ["Southern", "Eastern"],
            islandNation: true,
            islands: 333
        },

        political: {
            government: "Unitary Parliamentary Republic",
            headOfState: "President Wiliame Katonivere",
            headOfGovernment: "Prime Minister Sitiveni Rabuka",
            legislature: "Parliament",
            legalSystem: "Mixed (English Common Law and Customary Law)",
            states: 4,
            divisions: 4,
            largestCity: "Suva",
            organizations: ["UN", "Commonwealth", "Pacific Islands Forum", "WTO", "MSG"]
        },

        economy: {
            gdp: "$5.09 Billion",
            gdpPPP: "$14.37 Billion",
            gdpPerCapita: "$5,439",
            gdpRank: "#152",
            gdpGrowth: "8.0%",
            currency: "Fijian Dollar",
            currencyCode: "FJD",
            currencySymbol: "FJ$",
            inflation: "4.5%",
            unemployment: "4.4%",
            majorSectors: ["Services (70%)", "Industry (18%)", "Agriculture (9%)"],
            industries: ["Tourism", "Sugar Processing", "Clothing", "Copra", "Gold", "Silver", "Lumber", "Small Cottage Industries"],
            exports: ["Sugar", "Bottled Water", "Fish", "Gold", "Molasses", "Timber", "Coconut Oil"],
            imports: ["Machinery", "Petroleum Products", "Food", "Chemicals"]
        },

        geography: {
            climate: "Tropical Marine; Mild Year-Round",
            avgTemperature: "26°C",
            annualRainfall: "3,000 mm",
            highestPoint: "Mount Tomanivi (1,324 m)",
            lowestPoint: "Pacific Ocean (0 m)",
            coastline: "1,129 km",
            forestCover: "55.7%",
            arableLand: "9.0%",
            terrain: "Mostly mountains of volcanic origin; coral reefs",
            naturalResources: ["Timber", "Fish", "Gold", "Copper", "Hydropower"]
        },

        geography_links: {
            rivers: ["Rewa River", "Sigatoka River", "Ba River", "Navua River"],
            mountains: ["Mount Tomanivi", "Mount Victoria", "Koroyanitu Range"],
            deserts: [],
            forests: ["Tropical Rainforests", "Colo-i-Suva Forest Park"],
            oceans: ["Pacific Ocean", "Koro Sea"]
        },

        culture: {
            officialLanguages: ["English", "Fijian", "Hindi"],
            languages: ["English", "Fijian (iTaukei)", "Fiji Hindi"],
            religions: ["Christianity (64.4%)", "Hinduism (27.9%)", "Islam (6.3%)", "Sikhism (0.3%)"],
            heritageSites: ["Levuka Historical Port Town"],
            festivals: ["Fiji Day", "Diwali", "Holi", "Bula Festival", "Hibiscus Festival"],
            cuisine: ["Kokoda (Raw Fish)", "Lovo (Earth Oven)", "Palusami", "Roti", "Curry"],
            arts: ["Meke Dance", "Tapa Cloth Making", "Wood Carving", "Pottery"],
            sports: ["Rugby Sevens", "Football", "Cricket", "Swimming", "Netball"]
        },

        symbols: {
            bird: "Collared Lory",
            animal: "None Official",
            flower: "Tagimoucia",
            tree: "None Official",
            anthem: "God Bless Fiji",
            motto: "Rerevaka na Kalou ka Doka na Tui (Fear God and Honor the Queen/King)"
        },

        demographics: {
            lifeExpectancy: 68.14,
            literacyRate: "99.1%",
            urbanPopulation: "58%",
            medianAge: 29.2
        },

        history: {
            timeline: [
                { year: "1000 BCE", title: "Settlement", description: "Melanesian and Polynesian settlement" },
                { year: "1643", title: "European Discovery", description: "Abel Tasman sighted Fiji" },
                { year: "1874", title: "British Colony", description: "Fiji ceded to Britain" },
                { year: "1970", title: "Independence", description: "Independence from Britain" },
                { year: "1987", title: "Coups", description: "Military coups and republic declared" },
                { year: "2014", title: "Democracy Restored", description: "First election after 2006 coup" }
            ],
            notableFigures: ["Ratu Sir Kamisese Mara", "Sitiveni Rabuka", "Frank Bainimarama"]
        },

        disputes: [],

        quickFacts: [
            { icon: "rugby", title: "Rugby Sevens", text: "Olympic gold medalist and rugby powerhouse" },
            { icon: "water", title: "Fiji Water", text: "Famous bottled water from volcanic aquifer" },
            { icon: "flag", title: "Archipelago", text: "333 islands, 106 inhabited" },
            { icon: "umbrella-beach", title: "Tourism", text: "'Where Happiness Finds You'" },
            { icon: "dove", title: "Multicultural", text: "iTaukei (Indigenous) and Indo-Fijian populations" }
        ]
    },

    // 18. KIRIBATI
    {
        id: "KIR",
        name: "Kiribati",
        officialName: "Republic of Kiribati",
        flag: "https://flagcdn.com/w320/ki.png",
        
        images: {
            hero: "https://images.unsplash.com/photo-1590846083693-f23fdede206d?w=1920&q=80",
            landscape: "https://images.unsplash.com/photo-1558181422-7ad9311c47d9?w=1920&q=80",
            city: "https://images.unsplash.com/photo-1565008576549-57569a49371d?w=1920&q=80"
        },

        basic: {
            capital: "South Tarawa",
            continent: "Oceania",
            region: "Oceania",
            subregion: "Micronesia",
            population: 133515,
            area: 811,
            populationDensity: 152,
            independence: "1979",
            callingCode: "+686",
            tld: ".ki",
            drivingSide: "Left",
            electricity: "240V, 50Hz"
        },

        location: {
            coordinates: [1.8369, -157.3768],
            timezone: "UTC+12 to UTC+14 (3 zones)",
            neighbors: [],
            borders: 0,
            hemispheres: ["Northern/Southern", "Eastern/Western"],
            islandNation: true,
            islands: 33
        },

        political: {
            government: "Unitary Parliamentary Republic",
            headOfState: "President Taneti Maamau",
            headOfGovernment: "President Taneti Maamau",
            legislature: "House of Assembly (Maneaba ni Maungatabu)",
            legalSystem: "Mixed (English Common Law and Customary Law)",
            states: 3,
            groups: 3,
            largestCity: "South Tarawa",
            organizations: ["UN", "Commonwealth", "Pacific Islands Forum"]
        },

        economy: {
            gdp: "$223 Million",
            gdpPPP: "$258 Million",
            gdpPerCapita: "$1,670",
            gdpRank: "#194",
            gdpGrowth: "1.8%",
            currency: "Kiribati Dollar / Australian Dollar",
            currencyCode: "AUD",
            currencySymbol: "$",
            inflation: "5.0%",
            unemployment: "30.6%",
            majorSectors: ["Services (66%)", "Industry (9%)", "Agriculture (23%)"],
            industries: ["Fishing", "Handicrafts", "Copra"],
            exports: ["Fish", "Copra", "Seaweed"],
            imports: ["Foodstuffs", "Machinery", "Equipment", "Fuel"]
        },

        geography: {
            climate: "Tropical Marine; Hot and Humid",
            avgTemperature: "28°C",
            annualRainfall: "2,000 mm",
            highestPoint: "Unnamed Location on Banaba (81 m)",
            lowestPoint: "Pacific Ocean (0 m)",
            coastline: "1,143 km",
            forestCover: "15%",
            arableLand: "2.5%",
            terrain: "Low-lying coral atolls surrounded by extensive reefs",
            naturalResources: ["Phosphate (Depleted)", "Coconuts", "Fish"]
        },

        geography_links: {
            rivers: [],
            mountains: [],
            deserts: [],
            forests: ["Coconut Groves"],
            oceans: ["Pacific Ocean"]
        },

        culture: {
            officialLanguages: ["English", "Gilbertese (Taetae ni Kiribati)"],
            languages: ["Gilbertese", "English"],
            religions: ["Roman Catholic (57%)", "Kiribati Uniting Church (31%)", "Mormon (5%)", "Others (7%)"],
            heritageSites: [],
            festivals: ["Independence Day", "Gospel Day", "Youth Day"],
            cuisine: ["Fish", "Coconut", "Breadfruit", "Pandanus Fruit", "Te Bua (Fermented Toddy)"],
            arts: ["Traditional Dance", "Weaving", "Canoe Building"],
            sports: ["Football", "Volleyball", "Weightlifting", "Canoe Racing"]
        },

        symbols: {
            bird: "Frigatebird",
            animal: "None Official",
            flower: "Te Kiekie (Gardenia)",
            tree: "Coconut Palm",
            anthem: "Teirake Kaini Kiribati",
            motto: "Te Mauri, Te Raoi ao Te Tabomoa (Health, Peace and Prosperity)"
        },

        demographics: {
            lifeExpectancy: 69.18,
            literacyRate: "91.3%",
            urbanPopulation: "57%",
            medianAge: 24.0
        },

        history: {
            timeline: [
                { year: "3000 BCE", title: "Settlement", description: "Micronesians settled the islands" },
                { year: "1892", title: "British Protectorate", description: "Gilbert and Ellice Islands Protectorate" },
                { year: "1943", title: "WWII", description: "Battle of Tarawa against Japan" },
                { year: "1979", title: "Independence", description: "Independence from Britain as Kiribati" },
                { year: "1995", title: "Date Line Shift", description: "Shifted date line to unify country in same day" }
            ],
            notableFigures: ["Ieremia Tabai", "Teburoro Tito", "Taneti Maamau"]
        },

        disputes: [],

        quickFacts: [
            { icon: "clock", title: "First Sunrise", text: "First country to see each new day (Line Islands)" },
            { icon: "water", title: "Climate Vulnerable", text: "Most threatened by sea level rise (avg 2m elevation)" },
            { icon: "map", title: "Spans Hemispheres", text: "Only country in all 4 hemispheres" },
            { icon: "globe", title: "Largest EEZ", text: "3.5M km² exclusive economic zone" },
            { icon: "calendar", title: "Date Line", text: "Moved date line in 1995 for national unity" }
        ]
    },

    // 19. MARSHALL ISLANDS
    {
        id: "MHL",
        name: "Marshall Islands",
        officialName: "Republic of the Marshall Islands",
        flag: "https://flagcdn.com/w320/mh.png",
        
        images: {
            hero: "https://images.unsplash.com/photo-1558181422-7ad9311c47d9?w=1920&q=80",
            landscape: "https://images.unsplash.com/photo-1590846083693-f23fdede206d?w=1920&q=80",
            city: "https://images.unsplash.com/photo-1565008576549-57569a49371d?w=1920&q=80"
        },

        basic: {
            capital: "Majuro",
            continent: "Oceania",
            region: "Oceania",
            subregion: "Micronesia",
            population: 42050,
            area: 181,
            populationDensity: 295,
            independence: "1986",
            callingCode: "+692",
            tld: ".mh",
            drivingSide: "Right",
            electricity: "120V, 60Hz"
        },

        location: {
            coordinates: [7.1315, 171.1845],
            timezone: "UTC+12 (MHT)",
            neighbors: [],
            borders: 0,
            hemispheres: ["Northern", "Eastern"],
            islandNation: true,
            islands: 1156
        },

        political: {
            government: "Unitary Parliamentary Republic",
            headOfState: "President Hilda Heine",
            headOfGovernment: "President Hilda Heine",
            legislature: "Nitijela (Parliament)",
            legalSystem: "Mixed (US and Customary Law)",
            states: 0,
            municipalities: 24,
            largestCity: "Majuro",
            organizations: ["UN", "Pacific Islands Forum", "Compact of Free Association with USA"]
        },

        economy: {
            gdp: "$280 Million",
            gdpPPP: "$262 Million",
            gdpPerCapita: "$6,667",
            gdpRank: "#193",
            gdpGrowth: "2.5%",
            currency: "United States Dollar",
            currencyCode: "USD",
            currencySymbol: "$",
            inflation: "3.2%",
            unemployment: "36%",
            majorSectors: ["Services (75%)", "Industry (14%)", "Agriculture (10%)"],
            industries: ["Copra", "Tuna Processing", "Tourism", "Craft Items (Shell, Wood, Pearls)", "Fishing"],
            exports: ["Fish", "Coconut Oil", "Trochus Shells"],
            imports: ["Foodstuffs", "Machinery", "Equipment", "Fuels", "Beverages", "Tobacco"]
        },

        geography: {
            climate: "Tropical; Hot and Humid; Wet Season May-November",
            avgTemperature: "28°C",
            annualRainfall: "3,350 mm",
            highestPoint: "Unnamed Location on Likiep (10 m)",
            lowestPoint: "Pacific Ocean (0 m)",
            coastline: "370 km",
            forestCover: "70%",
            arableLand: "11.1%",
            terrain: "Low coral limestone and sand islands",
            naturalResources: ["Coconuts", "Marine Products", "Deep Seabed Minerals"]
        },

        geography_links: {
            rivers: [],
            mountains: [],
            deserts: [],
            forests: ["Coconut Groves", "Breadfruit Trees"],
            oceans: ["Pacific Ocean"]
        },

        culture: {
            officialLanguages: ["Marshallese", "English"],
            languages: ["Marshallese", "English"],
            religions: ["United Church of Christ (51.5%)", "Assembly of God (24.2%)", "Catholic (8.4%)", "Mormon (8.3%)", "Others (7.6%)"],
            heritageSites: ["Bikini Atoll Nuclear Test Site"],
            festivals: ["Constitution Day", "Manit Day (Culture Day)", "Christmas"],
            cuisine: ["Fish", "Breadfruit", "Coconut", "Pandanus", "Arrowroot"],
            arts: ["Stick Chart Navigation", "Weaving", "Traditional Tattoos", "Canoe Building"],
            sports: ["Basketball", "Volleyball", "Fishing", "Outrigger Canoe Racing"]
        },

        symbols: {
            bird: "None Official",
            animal: "None Official",
            flower: "Plumeria",
            tree: "Coconut Palm",
            anthem: "Forever Marshall Islands",
            motto: "Jepilpilin ke ejukaan (Accomplishment Through Joint Effort)"
        },

        demographics: {
            lifeExpectancy: 74.63,
            literacyRate: "98.3%",
            urbanPopulation: "78.1%",
            medianAge: 23.8
        },

        history: {
            timeline: [
                { year: "2000 BCE", title: "Settlement", description: "Micronesians settled the islands" },
                { year: "1885", title: "German Protectorate", description: "Germany claimed the islands" },
                { year: "1914", title: "Japanese Control", description: "Japan took control during WWI" },
                { year: "1944", title: "US Control", description: "US captured islands during WWII" },
                { year: "1946-1958", title: "Nuclear Testing", description: "US conducted 67 nuclear tests" },
                { year: "1986", title: "Independence", description: "Compact of Free Association with US" }
            ],
            notableFigures: ["Amata Kabua", "Kessai Note", "Hilda Heine"]
        },

        disputes: [],

        quickFacts: [
            { icon: "radiation", title: "Nuclear Testing", text: "67 US nuclear tests at Bikini and Enewetak" },
            { icon: "ship", title: "Ship Registry", text: "3rd largest ship registry in the world" },
            { icon: "map", title: "Stick Charts", text: "Invented stick chart navigation" },
            { icon: "water", title: "Climate Vulnerable", text: "Average elevation just 2m above sea level" },
            { icon: "flag", title: "US Association", text: "Free association with United States" }
        ]
    },

    // 20. MICRONESIA
    {
        id: "FSM",
        name: "Micronesia",
        officialName: "Federated States of Micronesia",
        flag: "https://flagcdn.com/w320/fm.png",
        
        images: {
            hero: "https://images.unsplash.com/photo-1590846083693-f23fdede206d?w=1920&q=80",
            landscape: "https://images.unsplash.com/photo-1558181422-7ad9311c47d9?w=1920&q=80",
            city: "https://images.unsplash.com/photo-1565008576549-57569a49371d?w=1920&q=80"
        },

        basic: {
            capital: "Palikir",
            continent: "Oceania",
            region: "Oceania",
            subregion: "Micronesia",
            population: 113131,
            area: 702,
            populationDensity: 158,
            independence: "1986",
            callingCode: "+691",
            tld: ".fm",
            drivingSide: "Right",
            electricity: "120V, 60Hz"
        },

        location: {
            coordinates: [6.8874, 158.2150],
            timezone: "UTC+10 to UTC+11 (2 zones)",
            neighbors: [],
            borders: 0,
            hemispheres: ["Northern", "Eastern"],
            islandNation: true,
            islands: 607
        },

        political: {
            government: "Federal Presidential Republic",
            headOfState: "President Wesley Simina",
            headOfGovernment: "President Wesley Simina",
            legislature: "Congress",
            legalSystem: "Mixed (US and Customary Law)",
            states: 4,
            largestCity: "Weno (Chuuk)",
            organizations: ["UN", "Pacific Islands Forum", "Compact of Free Association with USA"]
        },

        economy: {
            gdp: "$404 Million",
            gdpPPP: "$401 Million",
            gdpPerCapita: "$3,573",
            gdpRank: "#191",
            gdpGrowth: "1.8%",
            currency: "United States Dollar",
            currencyCode: "USD",
            currencySymbol: "$",
            inflation: "2.9%",
            unemployment: "16.2%",
            majorSectors: ["Services (80%)", "Agriculture (14%)", "Industry (4%)"],
            industries: ["Tourism", "Construction", "Specialized Aquaculture", "Craft Items (Shell, Wood, Pearls)"],
            exports: ["Fish", "Sakau (Kava)", "Betel Nuts", "Black Pepper"],
            imports: ["Food", "Beverages", "Manufactured Goods", "Machinery", "Equipment"]
        },

        geography: {
            climate: "Tropical; Heavy Year-Round Rainfall",
            avgTemperature: "27°C",
            annualRainfall: "4,500 mm",
            highestPoint: "Nanlaud on Pohnpei (782 m)",
            lowestPoint: "Pacific Ocean (0 m)",
            coastline: "6,112 km",
            forestCover: "91.9%",
                        arableLand: "2.9%",
            terrain: "Islands vary from low coral atolls to high volcanic islands",
            naturalResources: ["Timber", "Marine Products", "Deep-seabed Minerals", "Phosphate"]
        },

        geography_links: {
            rivers: [],
            mountains: ["Nanlaud (Pohnpei)", "Mount Tumuital (Kosrae)", "Mount Winipat (Chuuk)"],
            deserts: [],
            forests: ["Tropical Rainforests", "Mangroves"],
            oceans: ["Pacific Ocean", "Philippine Sea"]
        },

        culture: {
            officialLanguages: ["English"],
            languages: ["English", "Chuukese", "Pohnpeian", "Yapese", "Kosraean", "Ulithian", "Woleaian"],
            religions: ["Roman Catholic (54.7%)", "Protestant (41.1%)", "Mormon (1.5%)", "Others (2.7%)"],
            heritageSites: ["Nan Madol"],
            festivals: ["Constitution Day", "FSM Independence Day", "United Nations Day", "Traditional Festivals"],
            cuisine: ["Fish", "Taro", "Breadfruit", "Coconut", "Sakau (Kava)", "Bananas"],
            arts: ["Traditional Navigation", "Weaving", "Wood Carving", "Traditional Dance", "Tattooing"],
            sports: ["Baseball", "Basketball", "Volleyball", "Fishing", "Outrigger Canoe Racing"]
        },

        symbols: {
            bird: "None Official",
            animal: "None Official",
            flower: "None Official",
            tree: "Coconut Palm",
            anthem: "Patriots of Micronesia",
            motto: "Peace, Unity, Liberty"
        },

        demographics: {
            lifeExpectancy: 74.17,
            literacyRate: "89%",
            urbanPopulation: "23.1%",
            medianAge: 26.3
        },

        history: {
            timeline: [
                { year: "2000 BCE", title: "Settlement", description: "Austronesian peoples settled the islands" },
                { year: "1525", title: "European Contact", description: "Portuguese explorers arrived" },
                { year: "1899", title: "German Control", description: "Germany purchased from Spain" },
                { year: "1914", title: "Japanese Control", description: "Japan took control during WWI" },
                { year: "1944", title: "US Control", description: "US captured islands during WWII" },
                { year: "1979", title: "Constitution", description: "FSM constitution ratified" },
                { year: "1986", title: "Independence", description: "Compact of Free Association with US" }
            ],
            notableFigures: ["Tosiwo Nakayama", "Bailey Olter", "Leo Falcam", "Emanuel Mori"]
        },

        disputes: [],

        quickFacts: [
            { icon: "monument", title: "Nan Madol", text: "'Venice of the Pacific' - ancient stone city" },
            { icon: "water", title: "Chuuk Lagoon", text: "World-famous WWII wreck diving site" },
            { icon: "ship", title: "Navigation", text: "Traditional star navigation still practiced" },
            { icon: "flag", title: "Four States", text: "Federation of Yap, Chuuk, Pohnpei, Kosrae" },
            { icon: "handshake", title: "US Compact", text: "Free association with United States" }
        ]
    }
];

// Export for Node.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CountriesData9;
}

// Export for Browser
if (typeof window !== 'undefined') {
    window.CountriesData9 = CountriesData9;
}
