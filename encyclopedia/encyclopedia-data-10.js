
/**
 * GeoVerse Encyclopedia - Country Data File 10
 * Contains: Oceania (9) + North America (3) + Caribbean (5) + Central America (3) = 20 Countries
 * Version: 2.0 - Clean Data
 */

const CountriesData10 = [
    // 1. NAURU
    {
        id: "NRU",
        name: "Nauru",
        officialName: "Republic of Nauru",
        flag: "https://flagcdn.com/w320/nr.png",
        
        images: {
            hero: "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=1920&q=80",
            landscape: "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=1920&q=80",
            city: "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=1920&q=80"
        },

        basic: {
            capital: "Yaren (de facto)",
            continent: "Oceania",
            region: "Micronesia",
            subregion: "Micronesia",
            population: 10876,
            area: 21,
            populationDensity: 518,
            independence: "1968",
            callingCode: "+674",
            tld: ".nr",
            drivingSide: "Left",
            electricity: "240V, 50Hz"
        },

        location: {
            coordinates: [-0.5228, 166.9315],
            timezone: "UTC+12 (NRT)",
            neighbors: [],
            borders: 0,
            hemispheres: ["Southern", "Eastern"],
            islandNation: true
        },

        political: {
            government: "Unitary Parliamentary Republic",
            headOfState: "President David Adeang",
            headOfGovernment: "President David Adeang",
            legislature: "Parliament",
            legalSystem: "Mixed Common Law and Customary Law",
            states: 14,
            districts: 14,
            largestCity: "Yaren",
            organizations: ["UN", "Commonwealth", "Pacific Islands Forum", "ACP"]
        },

        economy: {
            gdp: "$151 Million",
            gdpPPP: "$166 Million",
            gdpPerCapita: "$13,915",
            gdpRank: "#193",
            gdpGrowth: "1.3%",
            currency: "Australian Dollar",
            currencyCode: "AUD",
            currencySymbol: "$",
            inflation: "2.5%",
            unemployment: "23%",
            majorSectors: ["Services (65%)", "Industry (33%)", "Agriculture (2%)"],
            industries: ["Phosphate Mining", "Offshore Banking", "Coconut Products", "Financial Services"],
            exports: ["Phosphates"],
            imports: ["Food", "Fuel", "Manufactures", "Building Materials", "Machinery"]
        },

        geography: {
            climate: "Tropical; Monsoonal with Rainy Season November-February",
            avgTemperature: "27°C",
            annualRainfall: "2,000 mm",
            highestPoint: "Command Ridge (71 m)",
            lowestPoint: "Pacific Ocean (0 m)",
            coastline: "30 km",
            forestCover: "0%",
            arableLand: "0%",
            terrain: "Sandy beach rises to fertile ring around raised coral reefs with phosphate plateau in center",
            naturalResources: ["Phosphates", "Fish"]
        },

        geography_links: {
            rivers: [],
            mountains: ["Command Ridge"],
            deserts: [],
            forests: [],
            oceans: ["Pacific Ocean"]
        },

        culture: {
            officialLanguages: ["Nauruan", "English"],
            languages: ["Nauruan", "English"],
            religions: ["Christianity (95% - Nauru Congregational 35%, Roman Catholic 33%, Assemblies of God 13%)"],
            heritageSites: [],
            festivals: ["Independence Day", "Angam Day", "Constitution Day", "Christmas"],
            cuisine: ["Coconut Fish", "Pandanus Fruit", "Breadfruit", "Fresh Fish"],
            arts: ["Traditional Weaving", "Canoe Building", "String Figures"],
            sports: ["Australian Rules Football", "Weightlifting", "Softball"]
        },

        symbols: {
            bird: "Frigate Bird",
            animal: "None official",
            flower: "Calophyllum Flower",
            tree: "Tomano Tree",
            anthem: "Nauru Bwiema",
            motto: "God's Will First"
        },

        demographics: {
            lifeExpectancy: 68.36,
            literacyRate: "96.5%",
            urbanPopulation: "100%",
            medianAge: 27.2
        },

        history: {
            timeline: [
                { year: "1000 BCE", title: "Settlement", description: "Micronesians and Polynesians settled" },
                { year: "1798", title: "European Contact", description: "British whaling ship arrived" },
                { year: "1888", title: "German Annexation", description: "Germany annexed Nauru" },
                { year: "1906", title: "Phosphate Discovery", description: "Phosphate deposits discovered" },
                { year: "1920", title: "League Mandate", description: "Australia, UK, NZ joint mandate" },
                { year: "1942-1945", title: "Japanese Occupation", description: "Occupied during WWII" },
                { year: "1968", title: "Independence", description: "Gained independence from Australia" },
                { year: "2001", title: "Processing Center", description: "Australian detention center established" }
            ],
            notableFigures: ["Hammer DeRoburt", "Bernard Dowiyogo", "Marcus Stephen"]
        },

        disputes: [],

        quickFacts: [
            { icon: "globe", title: "Smallest Republic", text: "World's smallest republic by area (21 km²)" },
            { icon: "users", title: "Third Smallest", text: "Third-least populous country" },
            { icon: "weight", title: "Obesity", text: "Highest obesity rate in world (61%)" },
            { icon: "gem", title: "Phosphate", text: "Was once world's richest country per capita from phosphate" },
            { icon: "island", title: "Single Island", text: "Only country that is a single island" }
        ]
    },

    // 2. NEW ZEALAND
    {
        id: "NZL",
        name: "New Zealand",
        officialName: "New Zealand / Aotearoa",
        flag: "https://flagcdn.com/w320/nz.png",
        
        images: {
            hero: "https://images.unsplash.com/photo-1507699622108-4be3abd695ad?w=1920&q=80",
            landscape: "https://images.unsplash.com/photo-1469521669194-babb45599def?w=1920&q=80",
            city: "https://images.unsplash.com/photo-1507097634215-e82e6b518529?w=1920&q=80"
        },

        basic: {
            capital: "Wellington",
            continent: "Oceania",
            region: "Polynesia",
            subregion: "Australia and New Zealand",
            population: 5185288,
            area: 270467,
            populationDensity: 19,
            independence: "1907",
            callingCode: "+64",
            tld: ".nz",
            drivingSide: "Left",
            electricity: "230V, 50Hz"
        },

        location: {
            coordinates: [-40.9006, 174.8860],
            timezone: "UTC+12/+13 (NZST/NZDT)",
            neighbors: [],
            borders: 0,
            hemispheres: ["Southern", "Eastern"],
            islandNation: true
        },

        political: {
            government: "Unitary Parliamentary Constitutional Monarchy",
            headOfState: "King Charles III (represented by Governor-General)",
            headOfGovernment: "Prime Minister Christopher Luxon",
            legislature: "Parliament (House of Representatives)",
            legalSystem: "Common Law",
            states: 16,
            regions: 16,
            largestCity: "Auckland",
            organizations: ["UN", "Commonwealth", "OECD", "APEC", "Pacific Islands Forum", "Five Eyes"]
        },

        economy: {
            gdp: "$252 Billion",
            gdpPPP: "$269 Billion",
            gdpPerCapita: "$48,826",
            gdpRank: "#52",
            gdpGrowth: "2.7%",
            currency: "New Zealand Dollar",
            currencyCode: "NZD",
            currencySymbol: "$",
            inflation: "5.6%",
            unemployment: "3.9%",
            majorSectors: ["Services (71%)", "Industry (20%)", "Agriculture (6%)"],
            industries: ["Agriculture", "Horticulture", "Fishing", "Forestry", "Mining", "Manufacturing", "Tourism", "Financial Services"],
            exports: ["Dairy", "Meat", "Wool", "Wood Products", "Fish", "Machinery", "Wine", "Fruit"],
            imports: ["Machinery", "Vehicles", "Petroleum", "Electronics", "Textiles", "Plastics"]
        },

        geography: {
            climate: "Temperate; Maritime Climate with Sharp Regional Contrasts",
            avgTemperature: "12.5°C",
            annualRainfall: "640-1,500 mm",
            highestPoint: "Aoraki/Mount Cook (3,724 m)",
            lowestPoint: "Pacific Ocean (0 m)",
            coastline: "15,134 km",
            forestCover: "38%",
            arableLand: "1.8%",
            terrain: "Predominately mountainous with large coastal plains",
            naturalResources: ["Natural Gas", "Iron Ore", "Sand", "Coal", "Timber", "Hydropower", "Gold", "Limestone"]
        },

        geography_links: {
            rivers: ["Waikato River", "Clutha River", "Whanganui River", "Taieri River", "Rangitikei River"],
            mountains: ["Southern Alps", "Aoraki/Mount Cook", "Mount Tasman", "Mount Ruapehu", "Mount Taranaki"],
            deserts: [],
            forests: ["Fiordland", "Kauri Forests", "Whakarewarewa Forest", "Tongariro Forest"],
            oceans: ["Pacific Ocean", "Tasman Sea", "Southern Ocean"]
        },

        culture: {
            officialLanguages: ["English", "Māori", "New Zealand Sign Language"],
            languages: ["English", "Māori", "Samoan", "Hindi", "French"],
            religions: ["Christianity (37%)", "No Religion (48.6%)", "Hinduism (2.6%)", "Islam (1.3%)"],
            heritageSites: ["Tongariro National Park", "Te Wahipounamu", "New Zealand Sub-Antarctic Islands"],
            festivals: ["Waitangi Day", "ANZAC Day", "Matariki", "Christmas", "New Year"],
            cuisine: ["Hangi", "Pavlova", "Fish and Chips", "Meat Pies", "Lamb", "Hokey Pokey Ice Cream"],
            arts: ["Māori Carving", "Haka", "Kapa Haka", "Film Industry", "Contemporary Art"],
            sports: ["Rugby Union", "Cricket", "Netball", "Football", "Sailing", "Golf"]
        },

        symbols: {
            bird: "Kiwi",
            animal: "Kiwi",
            flower: "Kōwhai",
            tree: "Silver Fern",
            anthem: "God Defend New Zealand / God Save the King",
            motto: "None official"
        },

        demographics: {
            lifeExpectancy: 82.80,
            literacyRate: "99%",
            urbanPopulation: "86.9%",
            medianAge: 37.4
        },

        history: {
            timeline: [
                { year: "1250-1300", title: "Māori Arrival", description: "Polynesian Māori arrived from Hawaiki" },
                { year: "1642", title: "European Discovery", description: "Dutch explorer Abel Tasman arrived" },
                { year: "1769", title: "Cook Expedition", description: "Captain James Cook charted coastline" },
                { year: "1840", title: "Treaty of Waitangi", description: "Treaty signed with British Crown" },
                { year: "1893", title: "Women's Suffrage", description: "First country to grant women vote" },
                { year: "1907", title: "Dominion", description: "Became Dominion of New Zealand" },
                { year: "1947", title: "Independence", description: "Full independence from Britain" },
                { year: "1987", title: "Nuclear Free", description: "Declared nuclear-free zone" }
            ],
            notableFigures: ["Kate Sheppard", "Edmund Hillary", "Ernest Rutherford", "Peter Jackson", "Jacinda Ardern"]
        },

        disputes: [],

        quickFacts: [
            { icon: "mountain", title: "Everest First", text: "Edmund Hillary first to summit Mt. Everest (1953)" },
            { icon: "bird", title: "Kiwi", text: "National symbol is flightless kiwi bird" },
            { icon: "film", title: "Middle-earth", text: "Filming location for Lord of the Rings" },
            { icon: "female", title: "Women's Vote", text: "First country to give women right to vote" },
            { icon: "sheep", title: "Sheep", text: "More sheep than people (5:1 ratio)" }
        ]
    },

    // 3. PALAU
    {
        id: "PLW",
        name: "Palau",
        officialName: "Republic of Palau",
        flag: "https://flagcdn.com/w320/pw.png",
        
        images: {
            hero: "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=1920&q=80",
            landscape: "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=1920&q=80",
            city: "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=1920&q=80"
        },

        basic: {
            capital: "Ngerulmud",
            continent: "Oceania",
            region: "Micronesia",
            subregion: "Micronesia",
            population: 18058,
            area: 459,
            populationDensity: 39,
            independence: "1994",
            callingCode: "+680",
            tld: ".pw",
            drivingSide: "Right",
            electricity: "120V, 60Hz"
        },

        location: {
            coordinates: [7.5150, 134.5825],
            timezone: "UTC+9 (PWT)",
            neighbors: [],
            borders: 0,
            hemispheres: ["Northern", "Eastern"],
            islandNation: true,
            islands: 340
        },

        political: {
            government: "Unitary Presidential Constitutional Republic",
            headOfState: "President Surangel Whipps Jr.",
            headOfGovernment: "President Surangel Whipps Jr.",
            legislature: "National Congress (Senate & House of Delegates)",
            legalSystem: "Mixed Common Law and Customary Law",
            states: 16,
            largestCity: "Koror",
            organizations: ["UN", "Pacific Islands Forum", "ACP", "Compact of Free Association with US"]
        },

        economy: {
            gdp: "$284 Million",
            gdpPPP: "$309 Million",
            gdpPerCapita: "$15,918",
            gdpRank: "#192",
            gdpGrowth: "0.9%",
            currency: "United States Dollar",
            currencyCode: "USD",
            currencySymbol: "$",
            inflation: "2.6%",
            unemployment: "1.7%",
            majorSectors: ["Services (Tourism 85%)", "Agriculture (3%)", "Industry (12%)"],
            industries: ["Tourism", "Fishing", "Subsistence Agriculture", "Craft Items"],
            exports: ["Fish", "Shellfish", "Coconuts", "Copra"],
            imports: ["Machinery", "Fuels", "Metals", "Foodstuffs"]
        },

        geography: {
            climate: "Tropical; Hot and Humid; Wet Season May-November",
            avgTemperature: "28°C",
            annualRainfall: "3,800 mm",
            highestPoint: "Mount Ngerchelchuus (242 m)",
            lowestPoint: "Pacific Ocean (0 m)",
            coastline: "1,519 km",
            forestCover: "87.6%",
            arableLand: "2.2%",
            terrain: "Varying geologically from high mountainous main island to low coral islands",
            naturalResources: ["Forests", "Minerals (Gold)", "Marine Products", "Deep-seabed Minerals"]
        },

        geography_links: {
            rivers: [],
            mountains: ["Mount Ngerchelchuus"],
            deserts: [],
            forests: ["Rock Islands", "Babeldaob Forests"],
            oceans: ["Pacific Ocean", "Philippine Sea"]
        },

        culture: {
            officialLanguages: ["Palauan", "English"],
            languages: ["Palauan", "English", "Japanese", "Sonsorolese", "Tobian"],
            religions: ["Christianity (86% - Roman Catholic 49%, Protestant 30%)"],
            heritageSites: ["Rock Islands Southern Lagoon"],
            festivals: ["Independence Day", "Constitution Day", "President's Day"],
            cuisine: ["Taro", "Coconut", "Fish", "Fruit Bat Soup", "Cassava"],
            arts: ["Story Boards", "Wood Carving", "Woven Items", "Traditional Dance"],
            sports: ["Baseball", "Volleyball", "Basketball", "Diving"]
        },

        symbols: {
            bird: "Palau Fruit Dove",
            animal: "Dugong",
            flower: "Plumeria",
            tree: "None official",
            anthem: "Belau rekid",
            motto: "Rainbow's End"
        },

        demographics: {
            lifeExpectancy: 74.40,
            literacyRate: "96.6%",
            urbanPopulation: "81.4%",
            medianAge: 34.2
        },

        history: {
            timeline: [
                { year: "1000 BCE", title: "Settlement", description: "First settlers from Indonesia/Philippines" },
                { year: "1783", title: "European Contact", description: "British Captain Henry Wilson shipwrecked" },
                { year: "1899", title: "German Rule", description: "Germany purchased from Spain" },
                { year: "1914", title: "Japanese Rule", description: "Japan occupied during WWI" },
                { year: "1944", title: "Battle of Peleliu", description: "Fierce WWII battle with US" },
                { year: "1947", title: "UN Trust", description: "UN Trust Territory under US" },
                { year: "1994", title: "Independence", description: "Became independent republic" }
            ],
            notableFigures: ["Haruo Remeliik", "Kuniwo Nakamura", "Tommy Remengesau"]
        },

        disputes: [],

        quickFacts: [
            { icon: "water", title: "Jellyfish Lake", text: "Unique lake with stingless jellyfish" },
            { icon: "fish", title: "Marine Sanctuary", text: "Created first national marine sanctuary (2015)" },
            { icon: "dove", title: "Nuclear Free", text: "First nation to constitutionally ban nuclear weapons" },
            { icon: "passport", title: "Eco-Pledge", text: "First country requiring eco-pledge on entry" },
            { icon: "anchor", title: "Diving Paradise", text: "World-renowned scuba diving destination" }
        ]
    },

    // 4. PAPUA NEW GUINEA
    {
        id: "PNG",
        name: "Papua New Guinea",
        officialName: "Independent State of Papua New Guinea",
        flag: "https://flagcdn.com/w320/pg.png",
        
        images: {
            hero: "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=1920&q=80",
            landscape: "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=1920&q=80",
            city: "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=1920&q=80"
        },

        basic: {
            capital: "Port Moresby",
            continent: "Oceania",
            region: "Melanesia",
            subregion: "Melanesia",
            population: 10329931,
            area: 462840,
            populationDensity: 20,
            independence: "1975",
            callingCode: "+675",
            tld: ".pg",
            drivingSide: "Left",
            electricity: "240V, 50Hz"
        },

        location: {
            coordinates: [-6.3149, 143.9555],
            timezone: "UTC+10/+11 (PGT/BST)",
            neighbors: ["Indonesia"],
            borders: 824,
            hemispheres: ["Southern", "Eastern"]
        },

        political: {
            government: "Unitary Parliamentary Constitutional Monarchy",
            headOfState: "King Charles III (represented by Governor-General)",
            headOfGovernment: "Prime Minister James Marape",
            legislature: "National Parliament",
            legalSystem: "Mixed Common Law and Customary Law",
            states: 22,
            provinces: 22,
            largestCity: "Port Moresby",
            organizations: ["UN", "Commonwealth", "APEC", "Pacific Islands Forum", "ACP"]
        },

        economy: {
            gdp: "$30.6 Billion",
            gdpPPP: "$41.0 Billion",
            gdpPerCapita: "$2,960",
            gdpRank: "#99",
            gdpGrowth: "4.0%",
            currency: "Papua New Guinean Kina",
            currencyCode: "PGK",
            currencySymbol: "K",
            inflation: "5.3%",
            unemployment: "2.5%",
            majorSectors: ["Services (42%)", "Industry (42%)", "Agriculture (16%)"],
            industries: ["Mining (Gold, Copper, Silver)", "Crude Oil", "LNG", "Agriculture", "Forestry", "Fishing"],
            exports: ["LNG", "Gold", "Copper Ore", "Palm Oil", "Coffee", "Cocoa", "Timber"],
            imports: ["Machinery", "Transport Equipment", "Manufactured Goods", "Food", "Fuels"]
        },

        geography: {
            climate: "Tropical; Northwest Monsoon December-March; Southeast Monsoon May-October",
            avgTemperature: "26.5°C",
            annualRainfall: "2,500-4,000 mm",
            highestPoint: "Mount Wilhelm (4,509 m)",
            lowestPoint: "Pacific Ocean (0 m)",
            coastline: "5,152 km",
            forestCover: "74.1%",
            arableLand: "0.7%",
            terrain: "Mostly mountains with coastal lowlands and rolling foothills",
            naturalResources: ["Gold", "Copper", "Silver", "Natural Gas", "Timber", "Oil", "Fisheries"]
        },

        geography_links: {
            rivers: ["Sepik River", "Fly River", "Ramu River", "Markham River"],
            mountains: ["Mount Wilhelm", "Mount Giluwe", "Owen Stanley Range", "Bismarck Range"],
            deserts: [],
            forests: ["Tropical Rainforests", "Montane Forests", "Mangrove Forests"],
            oceans: ["Pacific Ocean", "Coral Sea", "Solomon Sea", "Bismarck Sea"]
        },

        culture: {
            officialLanguages: ["English", "Tok Pisin", "Hiri Motu"],
            languages: ["800+ Indigenous Languages", "Tok Pisin", "English", "Hiri Motu"],
            religions: ["Christianity (95% - Catholic 27%, Evangelical Lutheran 19.5%, Others)"],
            heritageSites: ["Kuk Early Agricultural Site"],
            festivals: ["Independence Day", "Goroka Show", "Mount Hagen Show", "Canoe Festivals"],
            cuisine: ["Mumu", "Sago", "Taro", "Kaukau", "Tropical Fruits", "Coconut"],
            arts: ["Bilum Bags", "Spirit Masks", "Wood Carving", "Sing-Sing Ceremonies"],
            sports: ["Rugby League", "Australian Rules Football", "Cricket", "Football"]
        },

        symbols: {
            bird: "Raggiana Bird-of-Paradise",
            animal: "Dugong",
            flower: "None official",
            tree: "None official",
            anthem: "O Arise, All You Sons",
            motto: "Unity in Diversity"
        },

        demographics: {
            lifeExpectancy: 65.57,
            literacyRate: "64.2%",
            urbanPopulation: "13.3%",
            medianAge: 22.4
        },

        history: {
            timeline: [
                { year: "50000 BCE", title: "Early Settlement", description: "First humans arrived from Southeast Asia" },
                { year: "1526", title: "European Contact", description: "Portuguese explorer Jorge de Meneses" },
                { year: "1884", title: "Colonial Division", description: "Germany and Britain divided island" },
                { year: "1906", title: "Australian Control", description: "Australia took over British portion" },
                { year: "1942-1945", title: "WWII", description: "Japanese occupation and Kokoda campaign" },
                { year: "1975", title: "Independence", description: "Gained independence from Australia" },
                { year: "1989-1998", title: "Bougainville Crisis", description: "Civil conflict over copper mine" }
            ],
            notableFigures: ["Michael Somare", "Julius Chan", "Peter O'Neill"]
        },

        disputes: [],

        quickFacts: [
            { icon: "language", title: "Most Languages", text: "Most linguistically diverse country (850+ languages)" },
            { icon: "leaf", title: "Biodiversity", text: "One of world's most biodiverse regions" },
            { icon: "bird", title: "Birds of Paradise", text: "Home to 38 of 43 species of birds-of-paradise" },
            { icon: "users", title: "Tribal Society", text: "Over 1,000 ethnic groups" },
            { icon: "tree", title: "Rainforest", text: "Third largest tropical rainforest" }
        ]
    },

    // 5. SAMOA
    {
        id: "WSM",
        name: "Samoa",
        officialName: "Independent State of Samoa",
        flag: "https://flagcdn.com/w320/ws.png",
        
        images: {
            hero: "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=1920&q=80",
            landscape: "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=1920&q=80",
            city: "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=1920&q=80"
        },

        basic: {
            capital: "Apia",
            continent: "Oceania",
            region: "Polynesia",
            subregion: "Polynesia",
            population: 222382,
            area: 2842,
            populationDensity: 70,
            independence: "1962",
            callingCode: "+685",
            tld: ".ws",
            drivingSide: "Right",
            electricity: "230V, 50Hz"
        },

        location: {
            coordinates: [-13.7590, -172.1046],
            timezone: "UTC+13/+14 (WST/WSDT)",
            neighbors: [],
            borders: 0,
            hemispheres: ["Southern", "Western"],
            islandNation: true,
            islands: 10
        },

        political: {
            government: "Unitary Parliamentary Republic",
            headOfState: "O le Ao o le Malo Tuimalealiʻifano Vaʻaletoʻa Sualauvi II",
            headOfGovernment: "Prime Minister Fiame Naomi Mataʻafa",
            legislature: "Legislative Assembly (Fono)",
            legalSystem: "Mixed English Common Law and Customary Law",
            states: 11,
            districts: 11,
            largestCity: "Apia",
            organizations: ["UN", "Commonwealth", "Pacific Islands Forum", "ACP"]
        },

        economy: {
            gdp: "$936 Million",
            gdpPPP: "$1.32 Billion",
            gdpPerCapita: "$4,358",
            gdpRank: "#179",
            gdpGrowth: "5.1%",
            currency: "Samoan Tala",
            currencyCode: "WST",
            currencySymbol: "T",
            inflation: "8.8%",
            unemployment: "9.5%",
            majorSectors: ["Services (65%)", "Agriculture (10%)", "Industry (16%)"],
            industries: ["Food Processing", "Auto Parts", "Building Materials", "Tourism"],
            exports: ["Fish", "Coconut Oil", "Nonu Juice", "Copra", "Taro"],
            imports: ["Machinery", "Industrial Supplies", "Foodstuffs", "Fuels"]
        },

        geography: {
            climate: "Tropical; Rainy Season November-April; Dry Season May-October",
            avgTemperature: "26.5°C",
            annualRainfall: "3,000 mm",
            highestPoint: "Mount Silisili (1,857 m)",
            lowestPoint: "Pacific Ocean (0 m)",
            coastline: "403 km",
            forestCover: "58.4%",
            arableLand: "2.8%",
            terrain: "Two main islands; narrow coastal plains with volcanic mountains interior",
            naturalResources: ["Hardwood Forests", "Fish", "Hydropower"]
        },

        geography_links: {
            rivers: ["Vaisigano River"],
            mountains: ["Mount Silisili", "Mount Fito", "Mount Savai'i"],
            deserts: [],
            forests: ["Tropical Rainforests", "Cloud Forests"],
            oceans: ["Pacific Ocean"]
        },

        culture: {
            officialLanguages: ["Samoan", "English"],
            languages: ["Samoan", "English"],
            religions: ["Christianity (98% - Congregational 31%, Catholic 19%, Methodist 14%)"],
            heritageSites: [],
            festivals: ["Independence Day", "White Sunday", "Teuila Festival", "Christmas"],
            cuisine: ["Palusami", "Oka", "Sapasui", "Coconut Cream", "Taro"],
            arts: ["Tattooing (Tatau)", "Siapo (Tapa Cloth)", "Wood Carving", "Fire Knife Dancing"],
            sports: ["Rugby Union", "Rugby Sevens", "Cricket", "Netball"]
        },

        symbols: {
            bird: "Tooth-billed Pigeon (Manumea)",
            animal: "None official",
            flower: "Teuila (Red Ginger)",
            tree: "Banyan Tree",
            anthem: "The Banner of Freedom",
            motto: "Faavae i le Atua Samoa (Samoa is Founded on God)"
        },

        demographics: {
            lifeExpectancy: 74.38,
            literacyRate: "99.1%",
            urbanPopulation: "17.5%",
            medianAge: 25.1
        },

        history: {
            timeline: [
                { year: "1000 BCE", title: "Lapita Settlement", description: "Lapita people settled islands" },
                { year: "1722", title: "European Contact", description: "Dutch explorer Jacob Roggeveen" },
                { year: "1899", title: "Tripartite Convention", description: "Germany took western islands" },
                { year: "1914", title: "New Zealand", description: "NZ occupied during WWI" },
                { year: "1962", title: "Independence", description: "First Pacific island nation to gain independence" },
                { year: "2011", title: "Date Line Change", description: "Moved west of International Date Line" }
            ],
            notableFigures: ["Malietoa Tanumafili II", "Fiame Naomi Mataʻafa", "Tuilaepa Sailele Malielegaoi"]
        },

        disputes: [],

        quickFacts: [
            { icon: "sun", title: "Last Sunset", text: "Last place to see sunset until 2011 date line change" },
            { icon: "pen", title: "Tatau", text: "Word 'tattoo' originated from Samoan 'tatau'" },
            { icon: "female", title: "First Female PM", text: "First female PM in Pacific islands (2021)" },
            { icon: "book", title: "Stevenson", text: "Robert Louis Stevenson lived and buried here" },
            { icon: "football", title: "Rugby Nation", text: "Highest per capita rugby union participation" }
        ]
    },

    // 6. SOLOMON ISLANDS
    {
        id: "SLB",
        name: "Solomon Islands",
        officialName: "Solomon Islands",
        flag: "https://flagcdn.com/w320/sb.png",
        
        images: {
            hero: "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=1920&q=80",
            landscape: "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=1920&q=80",
            city: "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=1920&q=80"
        },

        basic: {
            capital: "Honiara",
            continent: "Oceania",
            region: "Melanesia",
            subregion: "Melanesia",
            population: 724273,
            area: 28896,
            populationDensity: 25,
            independence: "1978",
            callingCode: "+677",
            tld: ".sb",
            drivingSide: "Left",
            electricity: "220V, 50Hz"
        },

        location: {
            coordinates: [-9.6457, 160.1562],
            timezone: "UTC+11 (SBT)",
            neighbors: [],
            borders: 0,
            hemispheres: ["Southern", "Eastern"],
            islandNation: true,
            islands: 992
        },

        political: {
            government: "Unitary Parliamentary Constitutional Monarchy",
            headOfState: "King Charles III (represented by Governor-General)",
            headOfGovernment: "Prime Minister Jeremiah Manele",
            legislature: "National Parliament",
            legalSystem: "Mixed English Common Law and Customary Law",
            states: 9,
            provinces: 9,
            largestCity: "Honiara",
            organizations: ["UN", "Commonwealth", "Pacific Islands Forum", "ACP"]
        },

        economy: {
            gdp: "$1.7 Billion",
            gdpPPP: "$1.92 Billion",
            gdpPerCapita: "$2,388",
            gdpRank: "#171",
            gdpGrowth: "2.8%",
            currency: "Solomon Islands Dollar",
            currencyCode: "SBD",
            currencySymbol: "$",
            inflation: "6.5%",
            unemployment: "2.0%",
            majorSectors: ["Services (54%)", "Agriculture (28%)", "Industry (14%)"],
            industries: ["Fish (Tuna)", "Timber", "Mining", "Petroleum"],
            exports: ["Timber", "Fish", "Copra", "Palm Oil", "Cocoa"],
            imports: ["Food", "Plant and Equipment", "Manufactured Goods", "Fuels", "Chemicals"]
        },

        geography: {
            climate: "Tropical Monsoon; Tempered by Trade Winds",
            avgTemperature: "27°C",
            annualRainfall: "3,050 mm",
            highestPoint: "Mount Popomanaseu (2,335 m)",
            lowestPoint: "Pacific Ocean (0 m)",
            coastline: "5,313 km",
            forestCover: "77.9%",
            arableLand: "0.6%",
            terrain: "Mountainous volcanic islands; some low-lying coral atolls",
            naturalResources: ["Fish", "Forests", "Gold", "Bauxite", "Phosphates", "Lead", "Zinc", "Nickel"]
        },

        geography_links: {
            rivers: ["Lunga River", "Matanikau River"],
            mountains: ["Mount Popomanaseu", "Mount Makarakomburu"],
            deserts: [],
            forests: ["Tropical Rainforests"],
            oceans: ["Pacific Ocean", "Coral Sea", "Solomon Sea"]
        },

        culture: {
            officialLanguages: ["English"],
            languages: ["English", "Melanesian Pidgin", "120+ Indigenous Languages"],
            religions: ["Christianity (97% - Anglican 32%, Catholic 19%, South Seas Evangelical 17%)"],
            heritageSites: ["East Rennell"],
            festivals: ["Independence Day", "Queen's Birthday", "Christmas"],
            cuisine: ["Poi", "Cassava", "Sweet Potato", "Coconut", "Fish"],
            arts: ["Shell Money", "Wood Carving", "Panpipe Music", "Woven Baskets"],
            sports: ["Football", "Rugby", "Futsal", "Athletics"]
        },

        symbols: {
            bird: "Sea Eagle",
            animal: "Saltwater Crocodile",
            flower: "None official",
            tree: "None official",
            anthem: "God Save Our Solomon Islands",
            motto: "To Lead is to Serve"
        },

        demographics: {
            lifeExpectancy: 73.44,
            literacyRate: "84.1%",
            urbanPopulation: "25.6%",
            medianAge: 22.7
        },

        history: {
            timeline: [
                { year: "2000 BCE", title: "Settlement", description: "Austronesian speakers settled" },
                { year: "1568", title: "European Discovery", description: "Spanish explorer Álvaro de Mendaña" },
                { year: "1893", title: "British Protectorate", description: "Became British Solomon Islands" },
                { year: "1942-1945", title: "Battle of Guadalcanal", description: "Major WWII Pacific battle" },
                { year: "1978", title: "Independence", description: "Gained independence from Britain" },
                { year: "1998-2003", title: "Ethnic Tensions", description: "Civil conflict required intervention" },
                { year: "2019", title: "China Relations", description: "Switched recognition to PRC from Taiwan" }
            ],
            notableFigures: ["Peter Kenilorea", "Manasseh Sogavare", "Jacob Vouza"]
        },

        disputes: [],

        quickFacts: [
            { icon: "water", title: "WWII Shipwrecks", text: "Over 200 WWII shipwrecks in waters" },
            { icon: "ship", title: "JFK's PT-109", text: "John F. Kennedy rescued here during WWII" },
            { icon: "coins", title: "Shell Money", text: "Traditional shell money still used" },
            { icon: "language", title: "Languages", text: "Over 70 languages spoken" },
            { icon: "fish", title: "Marovo Lagoon", text: "World's largest double barrier lagoon" }
        ]
    },

    // 7. TONGA
    {
        id: "TON",
        name: "Tonga",
        officialName: "Kingdom of Tonga",
        flag: "https://flagcdn.com/w320/to.png",
        
        images: {
            hero: "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=1920&q=80",
            landscape: "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=1920&q=80",
            city: "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=1920&q=80"
        },

        basic: {
            capital: "Nukuʻalofa",
            continent: "Oceania",
            region: "Polynesia",
            subregion: "Polynesia",
            population: 106017,
            area: 747,
            populationDensity: 147,
            independence: "1970",
            callingCode: "+676",
            tld: ".to",
            drivingSide: "Left",
            electricity: "240V, 50Hz"
        },

        location: {
            coordinates: [-21.1789, -175.1982],
            timezone: "UTC+13 (TOT)",
            neighbors: [],
            borders: 0,
            hemispheres: ["Southern", "Western"],
            islandNation: true,
            islands: 176
        },

        political: {
            government: "Unitary Parliamentary Constitutional Monarchy",
            headOfState: "King Tupou VI",
            headOfGovernment: "Prime Minister Siaosi Sovaleni",
            legislature: "Legislative Assembly",
            legalSystem: "English Common Law",
            states: 5,
            divisions: 5,
            largestCity: "Nukuʻalofa",
            organizations: ["UN", "Commonwealth", "Pacific Islands Forum", "ACP"]
        },

        economy: {
            gdp: "$512 Million",
            gdpPPP: "$717 Million",
            gdpPerCapita: "$4,903",
            gdpRank: "#182",
            gdpGrowth: "2.5%",
            currency: "Tongan Paʻanga",
            currencyCode: "TOP",
            currencySymbol: "T$",
            inflation: "10.4%",
            unemployment: "1.0%",
            majorSectors: ["Services (57%)", "Agriculture (20%)", "Industry (19%)"],
            industries: ["Tourism", "Fishing", "Agriculture", "Handicrafts"],
            exports: ["Fish", "Agricultural Products", "Vanilla", "Root Crops"],
            imports: ["Foodstuffs", "Machinery", "Fuels", "Chemicals"]
        },

        geography: {
            climate: "Tropical; Modified by Trade Winds; Warm Season December-May",
            avgTemperature: "25°C",
            annualRainfall: "1,780 mm",
            highestPoint: "Kao Island (1,033 m)",
            lowestPoint: "Pacific Ocean (0 m)",
            coastline: "419 km",
            forestCover: "12.5%",
            arableLand: "21.3%",
            terrain: "Most islands have limestone base; others are coral limestone overlaying volcanic base",
            naturalResources: ["Fish", "Arable Land"]
        },

        geography_links: {
            rivers: [],
            mountains: ["Kao Island Volcano", "Tafahi Volcano"],
            deserts: [],
            forests: ["Tropical Forests"],
            oceans: ["Pacific Ocean"]
        },

        culture: {
            officialLanguages: ["Tongan", "English"],
            languages: ["Tongan", "English"],
            religions: ["Christianity (98% - Free Wesleyan 36%, Catholic 15%, LDS 18%)"],
            heritageSites: [],
            festivals: ["Emancipation Day", "Constitution Day", "Heilala Festival", "Christmas"],
            cuisine: ["Lu Pulu", "Ota Ika", "Faikakai", "Roast Pig", "Coconut"],
            arts: ["Tapa Cloth (Ngatu)", "Wood Carving", "Lakalaka Dance"],
            sports: ["Rugby Union", "Rugby League", "Football", "Cricket"]
        },

        symbols: {
            bird: "Red Shining Parrot",
            animal: "None official",
            flower: "Heilala Flower",
            tree: "None official",
            anthem: "Ko e fasi ʻo e tuʻi ʻo e ʻOtu Tonga",
            motto: "God and Tonga are My Inheritance"
        },

        demographics: {
            lifeExpectancy: 71.56,
            literacyRate: "99.4%",
            urbanPopulation: "23.1%",
            medianAge: 24.1
        },

        history: {
            timeline: [
                { year: "1500 BCE", title: "Lapita Settlement", description: "Lapita people settled Tonga" },
                { year: "950 CE", title: "Tuʻi Tonga Empire", description: "Tongan Empire established" },
                { year: "1616", title: "European Contact", description: "Dutch explorers arrived" },
                { year: "1845", title: "Unification", description: "King George Tupou I unified islands" },
                { year: "1900", title: "British Protectorate", description: "Became British protected state" },
                { year: "1970", title: "Independence", description: "Gained full independence" },
                { year: "2022", title: "Hunga Tonga Eruption", description: "Massive volcanic eruption" }
            ],
            notableFigures: ["King George Tupou I", "King Tupou VI", "Queen Sālote Tupou III"]
        },

        disputes: [],

        quickFacts: [
            { icon: "crown", title: "Never Colonized", text: "Only Pacific nation never formally colonized" },
            { icon: "volcano", title: "Volcanic Eruption", text: "2022 Hunga Tonga eruption heard thousands of miles away" },
            { icon: "sun", title: "First Sunrise", text: "First country to see each new day" },
            { icon: "football", title: "Rugby", text: "Over 50 Tongans in professional rugby leagues" },
            { icon: "whale", title: "Whale Watching", text: "Humpback whale breeding ground" }
        ]
    },

    // 8. TUVALU
    {
        id: "TUV",
        name: "Tuvalu",
        officialName: "Tuvalu",
        flag: "https://flagcdn.com/w320/tv.png",
        
        images: {
            hero: "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=1920&q=80",
            landscape: "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=1920&q=80",
            city: "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=1920&q=80"
        },

        basic: {
            capital: "Funafuti",
            continent: "Oceania",
            region: "Polynesia",
            subregion: "Polynesia",
            population: 11396,
            area: 26,
            populationDensity: 438,
            independence: "1978",
            callingCode: "+688",
            tld: ".tv",
            drivingSide: "Left",
            electricity: "230V, 50Hz"
        },

        location: {
            coordinates: [-7.1095, 179.1940],
            timezone: "UTC+12 (TVT)",
            neighbors: [],
            borders: 0,
            hemispheres: ["Southern", "Eastern"],
            islandNation: true,
            islands: 9
        },

        political: {
            government: "Unitary Parliamentary Constitutional Monarchy",
            headOfState: "King Charles III (represented by Governor-General)",
            headOfGovernment: "Prime Minister Feleti Teo",
            legislature: "Parliament (Palamene o Tuvalu)",
            legalSystem: "English Common Law and Customary Law",
            states: 9,
            islands: 9,
            largestCity: "Funafuti",
            organizations: ["UN", "Commonwealth", "Pacific Islands Forum", "ACP"]
        },

        economy: {
            gdp: "$63 Million",
            gdpPPP: "$59 Million",
            gdpPerCapita: "$5,690",
            gdpRank: "#194",
            gdpGrowth: "3.0%",
            currency: "Australian Dollar / Tuvaluan Dollar",
            currencyCode: "AUD/TVD",
            currencySymbol: "$",
            inflation: "4.1%",
            unemployment: "6.5%",
            majorSectors: ["Services (60%)", "Agriculture (20%)", "Industry (20%)"],
            industries: ["Fishing", "Tourism", "Copra", ".tv Domain Licensing"],
            exports: ["Fish", "Copra", "Coconut"],
            imports: ["Food", "Animals", "Mineral Fuels", "Machinery", "Manufactured Goods"]
        },

        geography: {
            climate: "Tropical; Moderated by Easterly Trade Winds; Westerly Gales and Heavy Rain March-November",
            avgTemperature: "28°C",
            annualRainfall: "3,500 mm",
            highestPoint: "Niulakita (5 m)",
            lowestPoint: "Pacific Ocean (0 m)",
            coastline: "24 km",
            forestCover: "33.3%",
            arableLand: "0%",
            terrain: "Very low-lying and narrow coral atolls",
            naturalResources: ["Fish", "Coconut (Copra)"]
        },

        geography_links: {
            rivers: [],
            mountains: [],
            deserts: [],
            forests: ["Coconut Groves"],
            oceans: ["Pacific Ocean"]
        },

        culture: {
            officialLanguages: ["Tuvaluan", "English"],
            languages: ["Tuvaluan", "English", "Samoan", "Kiribati"],
            religions: ["Christianity (97% - Church of Tuvalu 91%, Others)"],
            heritageSites: [],
            festivals: ["Independence Day", "Gospel Day", "Christmas", "Bomb Day"],
            cuisine: ["Pulaka", "Coconut", "Fish", "Breadfruit"],
            arts: ["Fatele Dance", "Mat Weaving", "Canoe Building"],
            sports: ["Football", "Volleyball", "Te Ano (Traditional Ball Game)"]
        },

        symbols: {
            bird: "None official",
            animal: "None official",
            flower: "Plumeria",
            tree: "Coconut Palm",
            anthem: "Tuvalu mo te Atua",
            motto: "Tuvalu for the Almighty"
        },

        demographics: {
            lifeExpectancy: 68.38,
            literacyRate: "99.0%",
            urbanPopulation: "67.0%",
            medianAge: 26.6
        },

        history: {
            timeline: [
                { year: "1000 BCE", title: "Settlement", description: "Polynesian settlers arrived" },
                { year: "1568", title: "European Sighting", description: "Spanish explorer Álvaro de Mendaña" },
                { year: "1892", title: "British Protectorate", description: "Became part of Gilbert & Ellice Islands" },
                { year: "1974", title: "Separation", description: "Voted to separate from Gilbert Islands" },
                { year: "1978", title: "Independence", description: "Gained independence from Britain" },
                { year: "2000", title: ".tv Domain", description: "Sold .tv domain for millions" }
            ],
            notableFigures: ["Toaripi Lauti", "Tomasi Puapua", "Enele Sopoaga"]
        },

        disputes: [],

        quickFacts: [
            { icon: "globe", title: "Fourth Smallest", text: "Fourth smallest country in world" },
            { icon: "water", title: "Climate Change", text: "Most vulnerable nation to rising sea levels" },
            { icon: "tv", title: ".tv Domain", text: "Earns millions from .tv internet domain" },
            { icon: "mountain", title: "Lowest Elevation", text: "Maximum elevation only 5 meters" },
            { icon: "users", title: "Tiny Nation", text: "One of world's least visited countries" }
        ]
    },

    // 9. VANUATU
    {
        id: "VUT",
        name: "Vanuatu",
        officialName: "Republic of Vanuatu",
        flag: "https://flagcdn.com/w320/vu.png",
        
        images: {
            hero: "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=1920&q=80",
            landscape: "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=1920&q=80",
            city: "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=1920&q=80"
        },

        basic: {
            capital: "Port Vila",
            continent: "Oceania",
            region: "Melanesia",
            subregion: "Melanesia",
            population: 326740,
            area: 12189,
            populationDensity: 25,
            independence: "1980",
            callingCode: "+678",
            tld: ".vu",
            drivingSide: "Right",
            electricity: "220V, 50Hz"
        },

        location: {
            coordinates: [-15.3767, 166.9592],
            timezone: "UTC+11 (VUT)",
            neighbors: [],
            borders: 0,
            hemispheres: ["Southern", "Eastern"],
            islandNation: true,
            islands: 83
        },

        political: {
            government: "Unitary Parliamentary Republic",
            headOfState: "President Nikenike Vurobaravu",
            headOfGovernment: "Prime Minister Charlot Salwai",
            legislature: "Parliament",
            legalSystem: "Mixed English Common Law and French Civil Law",
            states: 6,
            provinces: 6,
            largestCity: "Port Vila",
            organizations: ["UN", "Commonwealth", "Pacific Islands Forum", "Francophonie", "ACP"]
        },

        economy: {
            gdp: "$984 Million",
            gdpPPP: "$963 Million",
            gdpPerCapita: "$2,963",
            gdpRank: "#177",
            gdpGrowth: "2.0%",
            currency: "Vanuatu Vatu",
            currencyCode: "VUV",
            currencySymbol: "Vt",
            inflation: "4.9%",
            unemployment: "5.3%",
            majorSectors: ["Services (62%)", "Agriculture (22%)", "Industry (10%)"],
            industries: ["Food Processing", "Wood Processing", "Meat Canning", "Tourism"],
            exports: ["Copra", "Beef", "Cocoa", "Timber", "Kava", "Coffee"],
            imports: ["Machinery", "Foodstuffs", "Fuels"]
        },

        geography: {
            climate: "Tropical; Moderated by Southeast Trade Winds",
            avgTemperature: "25.5°C",
            annualRainfall: "2,360 mm",
            highestPoint: "Mount Tabwemasana (1,877 m)",
            lowestPoint: "Pacific Ocean (0 m)",
            coastline: "2,528 km",
            forestCover: "36.1%",
            arableLand: "1.6%",
            terrain: "Mostly mountainous islands of volcanic origin; narrow coastal plains",
            naturalResources: ["Manganese", "Hardwood Forests", "Fish"]
        },

        geography_links: {
            rivers: [],
            mountains: ["Mount Tabwemasana", "Mount Yasur", "Ambae Volcano"],
            deserts: [],
            forests: ["Tropical Rainforests"],
            oceans: ["Pacific Ocean", "Coral Sea"]
        },

        culture: {
            officialLanguages: ["Bislama", "English", "French"],
            languages: ["Bislama", "English", "French", "100+ Indigenous Languages"],
            religions: ["Christianity (94% - Presbyterian 31%, Anglican 13%, Catholic 13%)"],
            heritageSites: ["Chief Roi Mata's Domain"],
            festivals: ["Independence Day", "Unity Day", "Custom Chief Day", "Nagol (Land Diving)"],
            cuisine: ["Lap Lap", "Tuluk", "Simboro", "Coconut Crab"],
            arts: ["Sand Drawing", "Wood Carving", "Woven Items", "Traditional Music"],
            sports: ["Football", "Cricket", "Rugby", "Volleyball"]
        },

        symbols: {
            bird: "None official",
            animal: "None official",
            flower: "None official",
            tree: "Banyan Tree",
            anthem: "Yumi, Yumi, Yumi",
            motto: "Long God Yumi Stanap (In God We Stand)"
        },

        demographics: {
            lifeExpectancy: 71.17,
            literacyRate: "87.5%",
            urbanPopulation: "25.8%",
            medianAge: 22.3
        },

        history: {
            timeline: [
                { year: "1300 BCE", title: "Settlement", description: "Melanesian settlement began" },
                { year: "1606", title: "European Discovery", description: "Portuguese explorer Pedro Fernandes de Queirós" },
                { year: "1774", title: "Cook", description: "Captain Cook named 'New Hebrides'" },
                { year: "1906", title: "Condominium", description: "Anglo-French Condominium established" },
                { year: "1980", title: "Independence", description: "Gained independence as Vanuatu" },
                { year: "2015", title: "Cyclone Pam", description: "Category 5 cyclone devastated nation" }
            ],
            notableFigures: ["Father Walter Lini", "Maxime Carlot Korman", "Edward Natapei"]
        },

        disputes: [],

        quickFacts: [
            { icon: "parachute", title: "Bungee Origin", text: "Land diving (Nagol) inspired modern bungee jumping" },
            { icon: "volcano", title: "Mount Yasur", text: "World's most accessible active volcano" },
            { icon: "smile", title: "Happy Planet", text: "Regularly ranked happiest country on Earth" },
            { icon: "language", title: "Most Languages", text: "Highest linguistic density per capita" },
            { icon: "leaf", title: "Kava", text: "Kava national drink with cultural significance" }
        ]
    },

    // 10. CANADA
    {
        id: "CAN",
        name: "Canada",
        officialName: "Canada",
        flag: "https://flagcdn.com/w320/ca.png",
        
        images: {
            hero: "https://images.unsplash.com/photo-1517935706615-2717063c2225?w=1920&q=80",
            landscape: "https://images.unsplash.com/photo-1508693926297-1d61ee3df82a?w=1920&q=80",
            city: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?w=1920&q=80"
        },

        basic: {
            capital: "Ottawa",
            continent: "North America",
            region: "Northern America",
            subregion: "Northern America",
            population: 40097761,
            area: 9984670,
            populationDensity: 4,
            independence: "1867",
            callingCode: "+1",
            tld: ".ca",
            drivingSide: "Right",
            electricity: "120V, 60Hz"
        },

        location: {
            coordinates: [56.1304, -106.3468],
            timezone: "UTC-3.5 to UTC-8 (Multiple)",
            neighbors: ["United States"],
            borders: 8893,
            hemispheres: ["Northern", "Western"]
        },

        political: {
            government: "Federal Parliamentary Constitutional Monarchy",
            headOfState: "King Charles III (represented by Governor General)",
            headOfGovernment: "Prime Minister Mark Carney",
            legislature: "Parliament (Senate & House of Commons)",
            legalSystem: "Common Law (English) and Civil Law (Quebec)",
            states: 13,
            provinces: 10,
            territories: 3,
            largestCity: "Toronto",
            organizations: ["UN", "NATO", "G7", "G20", "Commonwealth", "OECD", "USMCA", "APEC", "Five Eyes"]
        },

        economy: {
            gdp: "$2.14 Trillion",
            gdpPPP: "$2.24 Trillion",
            gdpPerCapita: "$53,247",
            gdpRank: "#9",
            gdpGrowth: "1.1%",
            currency: "Canadian Dollar",
            currencyCode: "CAD",
            currencySymbol: "$",
            inflation: "3.9%",
            unemployment: "5.4%",
            majorSectors: ["Services (70%)", "Industry (28%)", "Agriculture (1.5%)"],
            industries: ["Real Estate", "Mining", "Manufacturing", "Finance", "Energy", "Technology", "Agriculture"],
            exports: ["Crude Petroleum", "Cars", "Gold", "Gas", "Potassium", "Lumber"],
            imports: ["Cars", "Vehicle Parts", "Crude Petroleum", "Delivery Trucks", "Computers"]
        },

        geography: {
            climate: "Varies from Temperate South to Subarctic and Arctic North",
            avgTemperature: "-5.6°C",
            annualRainfall: "537 mm",
            highestPoint: "Mount Logan (5,959 m)",
            lowestPoint: "Atlantic Ocean (0 m)",
            coastline: "202,080 km",
            forestCover: "38.2%",
            arableLand: "4.7%",
            terrain: "Plains, mountains, Arctic tundra, Great Lakes, Canadian Shield",
            naturalResources: ["Iron Ore", "Nickel", "Zinc", "Copper", "Gold", "Lead", "Rare Earth Elements", "Diamonds", "Natural Gas", "Petroleum", "Timber", "Fish", "Hydropower"]
        },

        geography_links: {
            rivers: ["St. Lawrence River", "Mackenzie River", "Nelson River", "Saskatchewan River", "Fraser River", "Columbia River"],
            mountains: ["Rocky Mountains", "Coast Mountains", "Mount Logan", "Canadian Rockies", "Appalachian Mountains"],
            deserts: [],
            forests: ["Boreal Forest", "Pacific Coastal Rainforest", "Great Bear Rainforest"],
            oceans: ["Atlantic Ocean", "Pacific Ocean", "Arctic Ocean", "Hudson Bay", "Great Lakes"]
        },

        culture: {
            officialLanguages: ["English", "French"],
            languages: ["English", "French", "Punjabi", "Chinese", "Spanish", "Indigenous Languages"],
            religions: ["Christianity (53%)", "No Religion (34%)", "Islam (4.9%)", "Hinduism (2.3%)", "Sikhism (2.1%)"],
            heritageSites: ["Historic District of Old Québec", "Dinosaur Provincial Park", "Canadian Rocky Mountain Parks", "Head-Smashed-In Buffalo Jump", "SGang Gwaay", "Rideau Canal"],
            festivals: ["Canada Day", "Thanksgiving", "Victoria Day", "National Indigenous Peoples Day", "St. Jean Baptiste Day"],
            cuisine: ["Poutine", "Maple Syrup", "Nanaimo Bars", "Butter Tarts", "Tourtière", "Bannock", "Montreal Smoked Meat"],
            arts: ["Indigenous Art", "Group of Seven", "Ballet", "Film Industry", "Music Industry"],
            sports: ["Ice Hockey", "Lacrosse", "Curling", "Canadian Football", "Basketball", "Soccer"]
        },

        symbols: {
            bird: "Canada Jay",
            animal: "North American Beaver",
            flower: "None official",
            tree: "Maple",
            anthem: "O Canada",
            motto: "A Mari Usque Ad Mare (From Sea to Sea)"
        },

        demographics: {
            lifeExpectancy: 82.96,
            literacyRate: "99%",
            urbanPopulation: "81.8%",
            medianAge: 41.8
        },

        history: {
            timeline: [
                { year: "15000 BCE", title: "Indigenous Peoples", description: "First Nations arrived via Beringia" },
                { year: "1000 CE", title: "Norse Arrival", description: "Vikings reached Newfoundland" },
                { year: "1534", title: "French Colonization", description: "Jacques Cartier claimed for France" },
                { year: "1763", title: "British Rule", description: "Treaty of Paris; Britain gained New France" },
                { year: "1867", title: "Confederation", description: "Canadian Confederation formed" },
                { year: "1931", title: "Statute of Westminster", description: "Legislative independence granted" },
                { year: "1982", title: "Constitution Act", description: "Full sovereignty with new constitution" }
            ],
            notableFigures: ["Sir John A. Macdonald", "Pierre Trudeau", "Terry Fox", "Wayne Gretzky", "Margaret Atwood"]
        },

        disputes: [
            { name: "Hans Island", description: "Resolved with Denmark 2022", type: "Territory" },
            { name: "Northwest Passage", description: "Sovereignty dispute", type: "Maritime" }
        ],

        quickFacts: [
            { icon: "globe", title: "Second Largest", text: "Second-largest country by total area" },
            { icon: "water", title: "Most Lakes", text: "More lakes than rest of world combined" },
            { icon: "hockey-puck", title: "Hockey Nation", text: "Ice hockey is national winter sport" },
            { icon: "maple-leaf", title: "Maple Syrup", text: "Produces 71% of world's maple syrup" },
            { icon: "snowflake", title: "Longest Coastline", text: "Longest coastline in the world" }
        ]
    },

    // 11. MEXICO
    {
        id: "MEX",
        name: "Mexico",
        officialName: "United Mexican States",
        flag: "https://flagcdn.com/w320/mx.png",
        
        images: {
            hero: "https://images.unsplash.com/photo-1518105779142-d975f22f1b0a?w=1920&q=80",
            landscape: "https://images.unsplash.com/photo-1570737543098-0983d88f796d?w=1920&q=80",
            city: "https://images.unsplash.com/photo-1585464231875-d9ef1f5ad396?w=1920&q=80"
        },

        basic: {
            capital: "Mexico City",
            continent: "North America",
            region: "Central America",
            subregion: "Central America",
            population: 128455567,
            area: 1964375,
            populationDensity: 66,
            independence: "1821",
            callingCode: "+52",
            tld: ".mx",
            drivingSide: "Right",
            electricity: "127V, 60Hz"
        },

        location: {
            coordinates: [23.6345, -102.5528],
            timezone: "UTC-5 to UTC-8 (Multiple)",
            neighbors: ["United States", "Guatemala", "Belize"],
            borders: 4389,
            hemispheres: ["Northern", "Western"]
        },

        political: {
            government: "Federal Presidential Constitutional Republic",
            headOfState: "President Claudia Sheinbaum",
            headOfGovernment: "President Claudia Sheinbaum",
            legislature: "Congress (Senate & Chamber of Deputies)",
            legalSystem: "Civil Law",
            states: 32,
            federalEntities: 32,
            largestCity: "Mexico City",
            organizations: ["UN", "WTO", "OECD", "G20", "USMCA", "APEC", "Pacific Alliance", "OAS"]
        },

        economy: {
            gdp: "$1.81 Trillion",
            gdpPPP: "$3.02 Trillion",
            gdpPerCapita: "$13,928",
            gdpRank: "#12",
            gdpGrowth: "3.2%",
            currency: "Mexican Peso",
            currencyCode: "MXN",
            currencySymbol: "$",
            inflation: "5.5%",
            unemployment: "2.8%",
            majorSectors: ["Services (62%)", "Industry (32%)", "Agriculture (4%)"],
            industries: ["Manufacturing", "Petroleum", "Mining", "Food & Beverages", "Automobiles", "Electronics", "Tourism"],
            exports: ["Cars", "Vehicle Parts", "Computers", "Delivery Trucks", "Crude Petroleum"],
            imports: ["Refined Petroleum", "Vehicle Parts", "Integrated Circuits", "Office Machine Parts"]
        },

        geography: {
            climate: "Varies from Tropical to Desert",
            avgTemperature: "21°C",
            annualRainfall: "758 mm",
            highestPoint: "Pico de Orizaba (5,636 m)",
            lowestPoint: "Laguna Salada (-10 m)",
            coastline: "9,330 km",
            forestCover: "33.6%",
            arableLand: "11.8%",
            terrain: "High rugged mountains; low coastal plains; high plateaus; desert",
            naturalResources: ["Petroleum", "Silver", "Copper", "Gold", "Lead", "Zinc", "Natural Gas", "Timber"]
        },

        geography_links: {
            rivers: ["Rio Grande", "Usumacinta", "Grijalva", "Balsas", "Pánuco"],
            mountains: ["Sierra Madre Occidental", "Sierra Madre Oriental", "Sierra Madre del Sur", "Pico de Orizaba", "Popocatépetl"],
            deserts: ["Chihuahuan Desert", "Sonoran Desert"],
            forests: ["Lacandon Jungle", "Sierra Gorda", "Copper Canyon"],
            oceans: ["Pacific Ocean", "Gulf of Mexico", "Caribbean Sea", "Gulf of California"]
        },

        culture: {
            officialLanguages: ["Spanish (de facto)"],
            languages: ["Spanish", "68 Indigenous Languages (Nahuatl, Yucatec Maya, etc.)"],
            religions: ["Christianity (92% - Roman Catholic 78%, Protestant 11%)", "No Religion (7%)"],
            heritageSites: ["Historic Centre of Mexico City", "Chichen Itza", "Teotihuacan", "Palenque", "Monte Albán", "Guanajuato", "Oaxaca", "Monarch Butterfly Reserve"],
            festivals: ["Día de los Muertos", "Cinco de Mayo", "Independence Day", "Guelaguetza", "Las Posadas"],
            cuisine: ["Tacos", "Mole", "Tamales", "Pozole", "Enchiladas", "Guacamole", "Quesadillas", "Churros"],
            arts: ["Muralism", "Mariachi Music", "Folk Art", "Ballet Folklórico", "Lucha Libre"],
            sports: ["Football", "Boxing", "Baseball", "Lucha Libre", "Charrería"]
        },

        symbols: {
            bird: "Golden Eagle",
            animal: "Jaguar",
            flower: "Dahlia",
            tree: "Montezuma Cypress (Ahuehuete)",
            anthem: "Himno Nacional Mexicano",
            motto: "None official"
        },

        demographics: {
            lifeExpectancy: 75.05,
            literacyRate: "95.4%",
            urbanPopulation: "81.6%",
            medianAge: 29.3
        },

        history: {
            timeline: [
                { year: "1500 BCE", title: "Olmec Civilization", description: "First major civilization developed" },
                { year: "300 CE", title: "Maya Classic Period", description: "Maya civilization flourished" },
                { year: "1325", title: "Tenochtitlan Founded", description: "Aztec capital established" },
                { year: "1521", title: "Spanish Conquest", description: "Hernán Cortés conquered Aztec Empire" },
                { year: "1810", title: "Independence War", description: "War of Independence began" },
                { year: "1821", title: "Independence", description: "Independence from Spain achieved" },
                { year: "1910-1920", title: "Revolution", description: "Mexican Revolution" },
                { year: "1994", title: "NAFTA", description: "Free trade agreement with US and Canada" }
            ],
            notableFigures: ["Benito Juárez", "Emiliano Zapata", "Pancho Villa", "Frida Kahlo", "Diego Rivera"]
        },

        disputes: [],

        quickFacts: [
            { icon: "pyramid", title: "Ancient Civilizations", text: "Home to Aztec, Maya, and 60+ other civilizations" },
            { icon: "car", title: "Auto Production", text: "7th largest automobile producer in world" },
            { icon: "medal", title: "Silver", text: "World's largest silver producer" },
            { icon: "pepper", title: "Chili Origin", text: "Domesticated chocolate and chili peppers" },
            { icon: "city", title: "Mega City", text: "Mexico City metro has 21+ million people" }
        ]
    },

    // 12. UNITED STATES
    {
        id: "USA",
        name: "United States",
        officialName: "United States of America",
        flag: "https://flagcdn.com/w320/us.png",
        
        images: {
            hero: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=1920&q=80",
            landscape: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80",
            city: "https://images.unsplash.com/photo-1534430480872-3498386e7856?w=1920&q=80"
        },

        basic: {
            capital: "Washington, D.C.",
            continent: "North America",
            region: "Northern America",
            subregion: "Northern America",
            population: 339996563,
            area: 9833517,
            populationDensity: 36,
            independence: "1776",
            callingCode: "+1",
            tld: ".us",
            drivingSide: "Right",
            electricity: "120V, 60Hz"
        },

        location: {
            coordinates: [37.0902, -95.7129],
            timezone: "UTC-5 to UTC-10 (Multiple)",
            neighbors: ["Canada", "Mexico"],
            borders: 12191,
            hemispheres: ["Northern", "Western"]
        },

        political: {
            government: "Federal Presidential Constitutional Republic",
            headOfState: "President Donald Trump",
            headOfGovernment: "President Donald Trump",
            legislature: "Congress (Senate & House of Representatives)",
            legalSystem: "Common Law",
            states: 50,
            territories: 5,
            largestCity: "New York City",
            organizations: ["UN (Security Council)", "NATO", "G7", "G20", "OECD", "WTO", "USMCA", "APEC", "Five Eyes"]
        },

        economy: {
            gdp: "$28.78 Trillion",
            gdpPPP: "$28.78 Trillion",
            gdpPerCapita: "$85,373",
            gdpRank: "#1",
            gdpGrowth: "2.5%",
            currency: "United States Dollar",
            currencyCode: "USD",
            currencySymbol: "$",
            inflation: "3.4%",
            unemployment: "3.7%",
            majorSectors: ["Services (77%)", "Industry (19%)", "Agriculture (0.9%)"],
            industries: ["Technology", "Finance", "Healthcare", "Manufacturing", "Entertainment", "Energy", "Aerospace", "Defense"],
            exports: ["Refined Petroleum", "Petroleum Gas", "Crude Petroleum", "Cars", "Integrated Circuits", "Aircraft"],
            imports: ["Cars", "Crude Petroleum", "Computers", "Broadcasting Equipment", "Packaged Medicaments"]
        },

        geography: {
            climate: "Mostly Temperate; Tropical in Hawaii & Florida; Arctic in Alaska; Arid in Southwest",
            avgTemperature: "11.8°C",
            annualRainfall: "767 mm",
            highestPoint: "Denali (6,190 m)",
            lowestPoint: "Badwater Basin (-86 m)",
            coastline: "19,924 km",
            forestCover: "33.9%",
            arableLand: "16.9%",
            terrain: "Vast central plain; mountains west and east; deserts southwest; tropical south",
            naturalResources: ["Coal", "Copper", "Lead", "Molybdenum", "Phosphates", "Rare Earth Elements", "Uranium", "Bauxite", "Gold", "Iron", "Mercury", "Nickel", "Potash", "Silver", "Tungsten", "Zinc", "Petroleum", "Natural Gas", "Timber"]
        },

        geography_links: {
            rivers: ["Mississippi River", "Missouri River", "Colorado River", "Columbia River", "Ohio River", "Rio Grande"],
            mountains: ["Rocky Mountains", "Appalachian Mountains", "Sierra Nevada", "Cascade Range", "Denali"],
            deserts: ["Mojave Desert", "Sonoran Desert", "Chihuahuan Desert", "Great Basin Desert"],
            forests: ["Pacific Northwest Forests", "Eastern Deciduous Forest", "Everglades"],
            oceans: ["Atlantic Ocean", "Pacific Ocean", "Arctic Ocean", "Gulf of Mexico", "Great Lakes"]
        },

        culture: {
            officialLanguages: ["None (English de facto)"],
            languages: ["English", "Spanish", "Chinese", "Tagalog", "Vietnamese", "French", "Arabic"],
            religions: ["Christianity (65% - Protestant 40%, Catholic 21%)", "No Religion (26%)", "Judaism (2%)", "Islam (1%)"],
            heritageSites: ["Statue of Liberty", "Grand Canyon", "Yellowstone", "Independence Hall", "Mesa Verde", "Everglades", "Yosemite"],
            festivals: ["Independence Day", "Thanksgiving", "Memorial Day", "Labor Day", "Martin Luther King Jr. Day"],
            cuisine: ["Hamburger", "Hot Dog", "BBQ", "Apple Pie", "Pizza", "Fried Chicken", "Tex-Mex"],
            arts: ["Jazz", "Blues", "Hip-Hop", "Hollywood", "Broadway", "Abstract Expressionism", "Rock & Roll"],
            sports: ["American Football", "Baseball", "Basketball", "Ice Hockey", "Soccer", "Golf"]
        },

        symbols: {
            bird: "Bald Eagle",
            animal: "American Bison",
            flower: "Rose",
            tree: "Oak",
            anthem: "The Star-Spangled Banner",
            motto: "In God We Trust"
        },

        demographics: {
            lifeExpectancy: 77.28,
            literacyRate: "99%",
            urbanPopulation: "83.3%",
            medianAge: 38.5
        },

        history: {
            timeline: [
                { year: "15000 BCE", title: "Indigenous Peoples", description: "First Americans arrived" },
                { year: "1492", title: "Columbus", description: "European exploration began" },
                { year: "1607", title: "Jamestown", description: "First permanent English settlement" },
                { year: "1776", title: "Declaration", description: "Declaration of Independence signed" },
                { year: "1789", title: "Constitution", description: "Constitution ratified" },
                { year: "1861-1865", title: "Civil War", description: "War between North and South" },
                { year: "1945", title: "Superpower", description: "Emerged as global superpower post-WWII" },
                { year: "1969", title: "Moon Landing", description: "First humans on the Moon" },
                { year: "2001", title: "September 11", description: "Terrorist attacks; War on Terror began" }
            ],
            notableFigures: ["George Washington", "Abraham Lincoln", "Franklin D. Roosevelt", "Martin Luther King Jr.", "Thomas Jefferson"]
        },

        disputes: [
            { name: "Guantánamo Bay", description: "Naval base on Cuban territory", type: "Territory" }
        ],

        quickFacts: [
            { icon: "dollar", title: "Largest Economy", text: "World's largest economy by nominal GDP" },
            { icon: "rocket", title: "Moon Landing", text: "First and only country to land humans on Moon" },
            { icon: "film", title: "Hollywood", text: "World's largest film and entertainment industry" },
            { icon: "flask", title: "Nobel Prizes", text: "Most Nobel Prize winners (400+)" },
            { icon: "plane", title: "Military", text: "Largest military spending in world" }
        ]
    },

    // 13. ANTIGUA AND BARBUDA
    {
        id: "ATG",
        name: "Antigua and Barbuda",
        officialName: "Antigua and Barbuda",
        flag: "https://flagcdn.com/w320/ag.png",
        
        images: {
            hero: "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=1920&q=80",
            landscape: "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=1920&q=80",
            city: "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=1920&q=80"
        },

        basic: {
            capital: "St. John's",
            continent: "North America",
            region: "Caribbean",
            subregion: "Caribbean",
            population: 93763,
            area: 442,
            populationDensity: 218,
            independence: "1981",
            callingCode: "+1-268",
            tld: ".ag",
            drivingSide: "Left",
            electricity: "230V, 60Hz"
        },

        location: {
            coordinates: [17.0608, -61.7964],
            timezone: "UTC-4 (AST)",
            neighbors: [],
            borders: 0,
            hemispheres: ["Northern", "Western"],
            islandNation: true,
            islands: 3
        },

        political: {
            government: "Unitary Parliamentary Constitutional Monarchy",
            headOfState: "King Charles III (represented by Governor-General)",
            headOfGovernment: "Prime Minister Gaston Browne",
            legislature: "Parliament (Senate & House of Representatives)",
            legalSystem: "English Common Law",
            states: 6,
            parishes: 6,
            dependencies: 2,
            largestCity: "St. John's",
            organizations: ["UN", "Commonwealth", "CARICOM", "OAS", "OECS"]
        },

        economy: {
            gdp: "$1.99 Billion",
            gdpPPP: "$2.08 Billion",
            gdpPerCapita: "$20,961",
            gdpRank: "#168",
            gdpGrowth: "6.0%",
            currency: "Eastern Caribbean Dollar",
            currencyCode: "XCD",
            currencySymbol: "$",
            inflation: "5.1%",
            unemployment: "8.0%",
            majorSectors: ["Services (Tourism 80%)", "Industry (14%)", "Agriculture (2%)"],
            industries: ["Tourism", "Construction", "Light Manufacturing", "Financial Services"],
            exports: ["Petroleum Products", "Ships", "Bedding", "Electronics"],
            imports: ["Food", "Machinery", "Petroleum Products", "Chemicals"]
        },

        geography: {
            climate: "Tropical Marine; Little Seasonal Temperature Variation",
            avgTemperature: "27°C",
            annualRainfall: "1,140 mm",
            highestPoint: "Mount Obama (402 m)",
            lowestPoint: "Caribbean Sea (0 m)",
            coastline: "153 km",
            forestCover: "22%",
            arableLand: "9.1%",
            terrain: "Mostly low-lying limestone and coral islands; volcanic hills",
            naturalResources: ["Negligible", "Pleasant Climate for Tourism"]
        },

        geography_links: {
            rivers: [],
            mountains: ["Mount Obama", "Boggy Peak"],
            deserts: [],
            forests: ["Tropical Dry Forest"],
            oceans: ["Caribbean Sea", "Atlantic Ocean"]
        },

        culture: {
            officialLanguages: ["English"],
            languages: ["English", "Antiguan Creole"],
            religions: ["Christianity (93% - Anglican 17%, Seventh-day Adventist 12%, Pentecostal 12%)"],
            heritageSites: ["Antigua Naval Dockyard"],
            festivals: ["Carnival", "Independence Day", "Sailing Week"],
            cuisine: ["Fungee and Pepperpot", "Ducana", "Saltfish", "Conch", "Black Pineapple"],
            arts: ["Calypso", "Steelpan", "Carnival Costumes"],
            sports: ["Cricket", "Football", "Sailing", "Basketball"]
        },

        symbols: {
            bird: "Frigate Bird",
            animal: "Fallow Deer",
            flower: "Agave",
            tree: "Whitewood",
            anthem: "Fair Antigua, We Salute Thee",
            motto: "Each Endeavouring, All Achieving"
        },

        demographics: {
            lifeExpectancy: 78.09,
            literacyRate: "99%",
            urbanPopulation: "24.3%",
            medianAge: 34.0
        },

        history: {
            timeline: [
                { year: "2400 BCE", title: "Early Settlement", description: "Siboney people first settled" },
                { year: "1493", title: "Columbus", description: "Christopher Columbus sighted islands" },
                { year: "1632", title: "British Colony", description: "English colonized Antigua" },
                { year: "1834", title: "Emancipation", description: "Slavery abolished" },
                { year: "1967", title: "Associated State", description: "Became associated state of UK" },
                { year: "1981", title: "Independence", description: "Gained full independence" },
                { year: "2017", title: "Hurricane Irma", description: "Barbuda devastated by hurricane" }
            ],
            notableFigures: ["Vere Cornwall Bird", "Vivian Richards", "Lester Bird"]
        },

        disputes: [],

        quickFacts: [
            { icon: "beach", title: "365 Beaches", text: "Claim to have a beach for every day of the year" },
            { icon: "cricket", title: "Cricket Stars", text: "Produced legendary cricketers Viv Richards and Andy Roberts" },
            { icon: "ship", title: "English Harbour", text: "Historic naval base from 18th century" },
            { icon: "sun", title: "Driest Caribbean", text: "One of the driest islands in Caribbean" },
            { icon: "anchor", title: "Sailing Mecca", text: "Famous for Antigua Sailing Week" }
        ]
    },

    // 14. BAHAMAS
    {
        id: "BHS",
        name: "Bahamas",
        officialName: "Commonwealth of The Bahamas",
        flag: "https://flagcdn.com/w320/bs.png",
        
        images: {
            hero: "https://images.unsplash.com/photo-1548574505-5e239809ee19?w=1920&q=80",
            landscape: "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=1920&q=80",
            city: "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=1920&q=80"
        },

        basic: {
            capital: "Nassau",
            continent: "North America",
            region: "Caribbean",
            subregion: "Caribbean",
            population: 412623,
            area: 13943,
            populationDensity: 42,
            independence: "1973",
            callingCode: "+1-242",
            tld: ".bs",
            drivingSide: "Left",
            electricity: "120V, 60Hz"
        },

        location: {
            coordinates: [25.0343, -77.3963],
            timezone: "UTC-5 (EST)",
            neighbors: [],
            borders: 0,
            hemispheres: ["Northern", "Western"],
            islandNation: true,
            islands: 700
        },

        political: {
            government: "Unitary Parliamentary Constitutional Monarchy",
            headOfState: "King Charles III (represented by Governor-General)",
            headOfGovernment: "Prime Minister Philip Davis",
            legislature: "Parliament (Senate & House of Assembly)",
            legalSystem: "English Common Law",
            states: 32,
            districts: 32,
            largestCity: "Nassau",
            organizations: ["UN", "Commonwealth", "CARICOM", "OAS", "ACS"]
        },

        economy: {
            gdp: "$14.3 Billion",
            gdpPPP: "$16.1 Billion",
            gdpPerCapita: "$35,458",
            gdpRank: "#121",
            gdpGrowth: "4.3%",
            currency: "Bahamian Dollar",
            currencyCode: "BSD",
            currencySymbol: "$",
            inflation: "3.0%",
            unemployment: "9.2%",
            majorSectors: ["Services (Tourism 50%)", "Financial Services (15%)", "Industry (7%)"],
            industries: ["Tourism", "Banking", "Cement", "Oil Refining", "Salt", "Rum", "Aragonite", "Pharmaceuticals"],
            exports: ["Crawfish", "Aragonite", "Crude Salt", "Polystyrene"],
            imports: ["Machinery", "Manufactured Goods", "Chemicals", "Mineral Fuels", "Food"]
        },

        geography: {
            climate: "Tropical Marine; Moderated by Gulf Stream",
            avgTemperature: "25.5°C",
            annualRainfall: "1,320 mm",
            highestPoint: "Mount Alvernia (64 m)",
            lowestPoint: "Atlantic Ocean (0 m)",
            coastline: "3,542 km",
            forestCover: "51.4%",
            arableLand: "0.8%",
            terrain: "Long, flat coral formations with some low rounded hills",
            naturalResources: ["Salt", "Aragonite", "Timber", "Arable Land"]
        },

        geography_links: {
            rivers: [],
            mountains: ["Mount Alvernia"],
            deserts: [],
            forests: ["Pine Forests", "Coppice Forests"],
            oceans: ["Atlantic Ocean", "Caribbean Sea"]
        },

        culture: {
            officialLanguages: ["English"],
            languages: ["English", "Bahamian Creole", "Haitian Creole"],
            religions: ["Christianity (95% - Baptist 35%, Anglican 15%, Catholic 14%)"],
            heritageSites: [],
            festivals: ["Junkanoo", "Independence Day", "Emancipation Day", "Goombay Summer Festival"],
            cuisine: ["Conch Salad", "Rock Lobster", "Johnnycake", "Peas and Rice", "Guava Duff"],
            arts: ["Junkanoo", "Straw Work", "Wood Carving", "Rake-and-Scrape Music"],
            sports: ["Athletics", "Basketball", "American Football", "Sailing", "Swimming"]
        },

        symbols: {
            bird: "Caribbean Flamingo",
            animal: "Blue Marlin",
            flower: "Yellow Elder",
            tree: "Lignum Vitae",
            anthem: "March On, Bahamaland",
            motto: "Forward, Upward, Onward Together"
        },

        demographics: {
            lifeExpectancy: 75.54,
            literacyRate: "95.6%",
            urbanPopulation: "83.5%",
            medianAge: 34.3
        },

        history: {
            timeline: [
                { year: "300-400", title: "Lucayan Settlement", description: "Lucayan people arrived" },
                { year: "1492", title: "Columbus Landing", description: "Columbus first landed in New World" },
                { year: "1648", title: "British Settlement", description: "Eleutherian Adventurers arrived" },
                { year: "1718", title: "Crown Colony", description: "Became Crown Colony; piracy ended" },
                { year: "1834", title: "Emancipation", description: "Slavery abolished" },
                { year: "1964", title: "Self-Government", description: "Internal self-government granted" },
                { year: "1973", title: "Independence", description: "Gained independence from Britain" }
            ],
            notableFigures: ["Lynden Pindling", "Sidney Poitier", "Shaunae Miller-Uibo"]
        },

        disputes: [],

        quickFacts: [
            { icon: "ship", title: "Columbus Landing", text: "Christopher Columbus first landed here in 1492" },
            { icon: "water", title: "Clear Water", text: "Some of clearest water in the world" },
            { icon: "pig", title: "Swimming Pigs", text: "Famous swimming pigs at Exuma" },
            { icon: "skull", title: "Pirate Haven", text: "Historic pirate haven including Blackbeard" },
            { icon: "coins", title: "Tax Haven", text: "Major offshore financial center" }
        ]
    },

    // 15. BARBADOS
    {
        id: "BRB",
        name: "Barbados",
        officialName: "Barbados",
        flag: "https://flagcdn.com/w320/bb.png",
        
        images: {
            hero: "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=1920&q=80",
            landscape: "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=1920&q=80",
            city: "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=1920&q=80"
        },

        basic: {
            capital: "Bridgetown",
            continent: "North America",
            region: "Caribbean",
            subregion: "Caribbean",
            population: 281995,
            area: 430,
            populationDensity: 668,
            independence: "1966",
            callingCode: "+1-246",
            tld: ".bb",
            drivingSide: "Left",
            electricity: "115V, 50Hz"
        },

        location: {
            coordinates: [13.1939, -59.5432],
            timezone: "UTC-4 (AST)",
            neighbors: [],
            borders: 0,
            hemispheres: ["Northern", "Western"],
            islandNation: true
        },

        political: {
            government: "Unitary Parliamentary Republic",
            headOfState: "President Sandra Mason",
            headOfGovernment: "Prime Minister Mia Mottley",
            legislature: "Parliament (Senate & House of Assembly)",
            legalSystem: "English Common Law",
            states: 11,
            parishes: 11,
            largestCity: "Bridgetown",
            organizations: ["UN", "Commonwealth", "CARICOM", "OAS", "ACS"]
        },

        economy: {
            gdp: "$6.0 Billion",
            gdpPPP: "$5.4 Billion",
            gdpPerCapita: "$20,933",
            gdpRank: "#153",
            gdpGrowth: "4.4%",
            currency: "Barbadian Dollar",
            currencyCode: "BBD",
            currencySymbol: "$",
            inflation: "6.5%",
            unemployment: "8.5%",
            majorSectors: ["Services (Tourism 80%)", "Industry (11%)", "Agriculture (1.5%)"],
            industries: ["Tourism", "Sugar", "Rum", "Light Manufacturing", "Financial Services"],
            exports: ["Rum", "Sugar", "Other Foods and Beverages", "Chemicals", "Electrical Components"],
            imports: ["Consumer Goods", "Machinery", "Food", "Construction Materials", "Chemicals", "Fuel"]
        },

        geography: {
            climate: "Tropical; Rainy Season June-October",
            avgTemperature: "27°C",
            annualRainfall: "1,422 mm",
            highestPoint: "Mount Hillaby (340 m)",
            lowestPoint: "Atlantic Ocean (0 m)",
            coastline: "97 km",
            forestCover: "19.4%",
            arableLand: "25.6%",
            terrain: "Relatively flat; rises gently to central highland region",
            naturalResources: ["Petroleum", "Fish", "Natural Gas"]
        },

        geography_links: {
            rivers: [],
            mountains: ["Mount Hillaby", "Scotland District"],
            deserts: [],
            forests: ["Tropical Forests", "Welchman Hall Gully"],
            oceans: ["Atlantic Ocean", "Caribbean Sea"]
        },

        culture: {
            officialLanguages: ["English"],
            languages: ["English", "Bajan Creole"],
            religions: ["Christianity (95% - Anglican 23%, Pentecostal 19%, Methodist 5%)"],
            heritageSites: ["Historic Bridgetown and its Garrison"],
            festivals: ["Crop Over", "Independence Day", "Kadooment Day", "Holetown Festival"],
            cuisine: ["Cou-cou and Flying Fish", "Macaroni Pie", "Pudding and Souse", "Fish Cakes", "Rum"],
            arts: ["Calypso", "Soca", "Spouge Music", "Pottery"],
            sports: ["Cricket", "Football", "Horse Racing", "Surfing"]
        },

        symbols: {
            bird: "Bullfinch (Carib Grackle unofficial)",
            animal: "None official",
            flower: "Pride of Barbados",
            tree: "Bearded Fig Tree",
            anthem: "In Plenty and In Time of Need",
            motto: "Pride and Industry"
        },

        demographics: {
            lifeExpectancy: 80.03,
            literacyRate: "99.6%",
            urbanPopulation: "31.4%",
            medianAge: 40.7
        },

        history: {
            timeline: [
                { year: "350-400", title: "Settlement", description: "Saladoid-Barrancoid people arrived" },
                { year: "1536", title: "Portuguese Contact", description: "Portuguese explorer visited" },
                { year: "1625", title: "British Claim", description: "England claimed island" },
                { year: "1627", title: "Colony Founded", description: "British settlement began" },
                { year: "1834", title: "Emancipation", description: "Slavery abolished" },
                { year: "1966", title: "Independence", description: "Gained independence from Britain" },
                { year: "2021", title: "Republic", description: "Became republic; removed British monarch" }
            ],
            notableFigures: ["Errol Barrow", "Rihanna", "Garfield Sobers", "Mia Mottley"]
        },

        disputes: [],

        quickFacts: [
            { icon: "crown", title: "Republic 2021", text: "Became republic in 2021, removing British monarch" },
            { icon: "music", title: "Rihanna", text: "Birthplace of global superstar Rihanna" },
            { icon: "wine", title: "Rum", text: "Claimed birthplace of rum" },
            { icon: "cricket", title: "Cricket Nation", text: "Produced legendary cricketer Sir Garfield Sobers" },
            { icon: "graduation", title: "Literacy", text: "99.6% literacy rate - among world's highest" }
        ]
    },

    // 16. BELIZE
    {
        id: "BLZ",
        name: "Belize",
        officialName: "Belize",
        flag: "https://flagcdn.com/w320/bz.png",
        
        images: {
            hero: "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=1920&q=80",
            landscape: "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=1920&q=80",
            city: "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=1920&q=80"
        },

        basic: {
            capital: "Belmopan",
            continent: "North America",
            region: "Central America",
            subregion: "Central America",
            population: 410825,
            area: 22966,
            populationDensity: 17,
            independence: "1981",
            callingCode: "+501",
            tld: ".bz",
            drivingSide: "Right",
            electricity: "110/220V, 60Hz"
        },

        location: {
            coordinates: [17.1899, -88.4976],
            timezone: "UTC-6 (CST)",
            neighbors: ["Mexico", "Guatemala"],
            borders: 542,
            hemispheres: ["Northern", "Western"]
        },

        political: {
            government: "Unitary Parliamentary Constitutional Monarchy",
            headOfState: "King Charles III (represented by Governor-General)",
            headOfGovernment: "Prime Minister John Briceño",
            legislature: "National Assembly (Senate & House of Representatives)",
            legalSystem: "English Common Law",
            states: 6,
            districts: 6,
            largestCity: "Belize City",
            organizations: ["UN", "Commonwealth", "CARICOM", "OAS", "SICA"]
        },

        economy: {
            gdp: "$3.03 Billion",
            gdpPPP: "$4.18 Billion",
            gdpPerCapita: "$7,185",
            gdpRank: "#162",
            gdpGrowth: "4.7%",
            currency: "Belize Dollar",
            currencyCode: "BZD",
            currencySymbol: "$",
            inflation: "4.4%",
            unemployment: "8.0%",
            majorSectors: ["Services (64%)", "Agriculture (10%)", "Industry (15%)"],
            industries: ["Tourism", "Agricultural Processing", "Oil", "Construction", "Garments"],
            exports: ["Sugar", "Bananas", "Citrus", "Clothing", "Fish Products", "Molasses", "Wood", "Crude Oil"],
            imports: ["Machinery", "Transportation Equipment", "Manufactured Goods", "Food", "Fuel"]
        },

        geography: {
            climate: "Tropical; Very Hot and Humid; Rainy Season May-November",
            avgTemperature: "26°C",
            annualRainfall: "1,524-4,064 mm",
            highestPoint: "Doyle's Delight (1,124 m)",
            lowestPoint: "Caribbean Sea (0 m)",
            coastline: "386 km",
            forestCover: "59.4%",
            arableLand: "3.3%",
            terrain: "Flat swampy coastal plain; low mountains in south",
            naturalResources: ["Arable Land", "Timber", "Fish", "Hydropower"]
        },

        geography_links: {
            rivers: ["Belize River", "Hondo River", "Sarstoon River", "New River"],
            mountains: ["Maya Mountains", "Doyle's Delight", "Victoria Peak"],
            deserts: [],
            forests: ["Tropical Rainforests", "Mangroves", "Pine Forests"],
            oceans: ["Caribbean Sea"]
        },

        culture: {
            officialLanguages: ["English"],
            languages: ["English", "Spanish", "Kriol", "Maya Languages", "Garifuna", "German (Mennonite)"],
            religions: ["Christianity (87% - Catholic 40%, Protestant 32%)", "No Religion (10%)"],
            heritageSites: ["Belize Barrier Reef Reserve System"],
            festivals: ["Carnival", "Independence Day", "Garifuna Settlement Day", "National Day"],
            cuisine: ["Rice and Beans", "Stew Chicken", "Fry Jacks", "Tamales", "Conch Fritters", "Garnaches"],
            arts: ["Garifuna Music", "Punta Rock", "Wood Carving", "Basket Weaving"],
            sports: ["Football", "Basketball", "Cycling", "Cross Country"]
        },

        symbols: {
            bird: "Keel-billed Toucan",
            animal: "Baird's Tapir",
            flower: "Black Orchid",
            tree: "Mahogany",
            anthem: "Land of the Free",
            motto: "Sub Umbra Floreo (Under the Shade I Flourish)"
        },

        demographics: {
            lifeExpectancy: 75.60,
            literacyRate: "82.7%",
            urbanPopulation: "46.2%",
            medianAge: 25.4
        },

        history: {
            timeline: [
                { year: "1500 BCE", title: "Maya Civilization", description: "Maya civilization flourished" },
                { year: "1638", title: "British Settlement", description: "British shipwreck survivors settled" },
                { year: "1862", title: "Crown Colony", description: "Became British Honduras" },
                { year: "1973", title: "Name Change", description: "Renamed to Belize" },
                { year: "1981", title: "Independence", description: "Gained independence from Britain" }
            ],
            notableFigures: ["George Price", "Philip Goldson", "Said Musa"]
        },

        disputes: [
            { name: "Guatemala Claim", description: "Guatemala claims part or all of Belize", type: "Territory" }
        ],

        quickFacts: [
            { icon: "water", title: "Great Blue Hole", text: "Famous submarine sinkhole and diving site" },
            { icon: "fish", title: "Barrier Reef", text: "Second-largest barrier reef in world" },
            { icon: "language", title: "English Speaking", text: "Only English-speaking Central American country" },
            { icon: "pyramid", title: "Maya Sites", text: "Over 900 Maya archaeological sites" },
            { icon: "tree", title: "Biodiversity", text: "70% of land protected for conservation" }
        ]
    },

    // 17. COSTA RICA
    {
        id: "CRI",
        name: "Costa Rica",
        officialName: "Republic of Costa Rica",
        flag: "https://flagcdn.com/w320/cr.png",
        
        images: {
            hero: "https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=1920&q=80",
            landscape: "https://images.unsplash.com/photo-1518259102261-b40117eabbc9?w=1920&q=80",
            city: "https://images.unsplash.com/photo-1553107607-e4d5e5f1fec4?w=1920&q=80"
        },

        basic: {
            capital: "San José",
            continent: "North America",
            region: "Central America",
            subregion: "Central America",
            population: 5212173,
            area: 51100,
            populationDensity: 102,
            independence: "1821",
            callingCode: "+506",
            tld: ".cr",
            drivingSide: "Right",
            electricity: "120V, 60Hz"
        },

        location: {
            coordinates: [9.7489, -83.7534],
            timezone: "UTC-6 (CST)",
            neighbors: ["Nicaragua", "Panama"],
            borders: 661,
            hemispheres: ["Northern", "Western"]
        },

        political: {
            government: "Unitary Presidential Constitutional Republic",
            headOfState: "President Rodrigo Chaves",
            headOfGovernment: "President Rodrigo Chaves",
            legislature: "Legislative Assembly",
            legalSystem: "Civil Law",
            states: 7,
            provinces: 7,
            largestCity: "San José",
            organizations: ["UN", "OAS", "SICA", "OECD", "Pacific Alliance (Observer)"]
        },

        economy: {
            gdp: "$83.5 Billion",
            gdpPPP: "$129.5 Billion",
            gdpPerCapita: "$16,011",
            gdpRank: "#66",
            gdpGrowth: "5.1%",
            currency: "Costa Rican Colón",
            currencyCode: "CRC",
            currencySymbol: "₡",
            inflation: "2.1%",
            unemployment: "9.3%",
            majorSectors: ["Services (70%)", "Industry (22%)", "Agriculture (5%)"],
            industries: ["Medical Equipment", "Computer Components", "Food Processing", "Textiles", "Tourism"],
            exports: ["Medical Instruments", "Bananas", "Pineapples", "Coffee", "Orthopedic Appliances"],
            imports: ["Refined Petroleum", "Cars", "Packaged Medicaments", "Broadcasting Equipment"]
        },

        geography: {
            climate: "Tropical and Subtropical; Dry Season December-April; Rainy Season May-November",
            avgTemperature: "21.5°C",
            annualRainfall: "2,926 mm",
            highestPoint: "Cerro Chirripó (3,821 m)",
            lowestPoint: "Pacific Ocean (0 m)",
            coastline: "1,290 km",
            forestCover: "59.1%",
            arableLand: "4.9%",
            terrain: "Coastal plains separated by rugged mountains including over 100 volcanic cones",
            naturalResources: ["Hydropower"]
        },

        geography_links: {
            rivers: ["Reventazón River", "Pacuare River", "San Juan River", "Tempisque River"],
            mountains: ["Cerro Chirripó", "Cordillera de Talamanca", "Arenal Volcano", "Poás Volcano", "Irazú Volcano"],
            deserts: [],
            forests: ["Cloud Forests", "Tropical Rainforests", "Mangroves"],
            oceans: ["Pacific Ocean", "Caribbean Sea"]
        },

        culture: {
            officialLanguages: ["Spanish"],
            languages: ["Spanish", "English", "Indigenous Languages"],
            religions: ["Christianity (89% - Catholic 52%, Protestant 22%)", "No Religion (9%)"],
            heritageSites: ["Cocos Island National Park", "Area de Conservación Guanacaste", "Precolumbian Chiefdom Settlements"],
            festivals: ["Independence Day", "Día de los Boyeros", "Fiestas de Palmares", "Envision Festival"],
            cuisine: ["Gallo Pinto", "Casado", "Ceviche", "Tamales", "Chifrijo", "Arroz con Pollo"],
            arts: ["Ox Cart Painting", "Pre-Columbian Art", "Marimba Music", "Contemporary Art"],
            sports: ["Football", "Surfing", "Cycling", "Basketball"]
        },

        symbols: {
            bird: "Clay-colored Thrush (Yigüirro)",
            animal: "White-tailed Deer",
            flower: "Guaria Morada (Purple Orchid)",
            tree: "Guanacaste Tree",
            anthem: "Himno Nacional de Costa Rica",
            motto: "Pura Vida (Pure Life)"
        },

        demographics: {
            lifeExpectancy: 80.80,
            literacyRate: "97.9%",
            urbanPopulation: "82.1%",
            medianAge: 34.2
        },

        history: {
            timeline: [
                { year: "10000 BCE", title: "Early Settlement", description: "First inhabitants arrived" },
                { year: "1502", title: "Columbus", description: "Christopher Columbus landed" },
                { year: "1563", title: "Spanish Settlement", description: "First permanent settlement" },
                { year: "1821", title: "Independence", description: "Independence from Spain" },
                { year: "1948", title: "Civil War", description: "Brief civil war; army abolished" },
                { year: "1949", title: "Constitution", description: "Current constitution adopted; army abolished" }
            ],
            notableFigures: ["José Figueres Ferrer", "Óscar Arias Sánchez", "Juan Mora Fernández"]
        },

        disputes: [],

        quickFacts: [
            { icon: "shield", title: "No Army", text: "Abolished military in 1949; only Central American country without" },
            { icon: "leaf", title: "Eco-Paradise", text: "25% of land protected; 6% of world's biodiversity" },
            { icon: "bolt", title: "Renewable Energy", text: "Runs on nearly 100% renewable energy" },
            { icon: "smile", title: "Pura Vida", text: "'Pure Life' national motto and lifestyle" },
            { icon: "tree", title: "Carbon Negative", text: "Goal to become first carbon-neutral country" }
        ]
    },

    // 18. CUBA
    {
        id: "CUB",
        name: "Cuba",
        officialName: "Republic of Cuba",
        flag: "https://flagcdn.com/w320/cu.png",
        
        images: {
            hero: "https://images.unsplash.com/photo-1500759285222-a95626b934cb?w=1920&q=80",
            landscape: "https://images.unsplash.com/photo-1494861895304-fb272971c078?w=1920&q=80",
            city: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?w=1920&q=80"
        },

        basic: {
            capital: "Havana",
            continent: "North America",
            region: "Caribbean",
            subregion: "Caribbean",
            population: 11194449,
            area: 109884,
            populationDensity: 106,
            independence: "1902",
            callingCode: "+53",
            tld: ".cu",
            drivingSide: "Right",
            electricity: "110/220V, 60Hz"
        },

        location: {
            coordinates: [21.5218, -77.7812],
            timezone: "UTC-5 (CST)",
            neighbors: [],
            borders: 0,
            hemispheres: ["Northern", "Western"],
            islandNation: true
        },

        political: {
            government: "Unitary One-Party Socialist Republic",
            headOfState: "President Miguel Díaz-Canel",
            headOfGovernment: "Prime Minister Manuel Marrero Cruz",
            legislature: "National Assembly of People's Power",
            legalSystem: "Civil Law; Marxist-Leninist Principles",
            states: 15,
            provinces: 15,
            specialMunicipality: 1,
            largestCity: "Havana",
            organizations: ["UN", "NAM", "ALBA", "ACS", "CELAC"]
        },

        economy: {
            gdp: "$107 Billion (estimated)",
            gdpPPP: "$137 Billion",
            gdpPerCapita: "$9,478",
            gdpRank: "#63",
            gdpGrowth: "1.8%",
            currency: "Cuban Peso",
            currencyCode: "CUP",
            currencySymbol: "$",
            inflation: "39%",
            unemployment: "1.3%",
            majorSectors: ["Services (75%)", "Industry (21%)", "Agriculture (4%)"],
            industries: ["Biotechnology", "Pharmaceuticals", "Sugar", "Tobacco", "Tourism", "Nickel"],
            exports: ["Medical Products", "Nickel", "Sugar", "Tobacco", "Rum", "Coffee"],
            imports: ["Food", "Machinery", "Petroleum", "Chemicals"]
        },

        geography: {
            climate: "Tropical; Moderated by Trade Winds; Dry Season November-April; Rainy Season May-October",
            avgTemperature: "25.5°C",
            annualRainfall: "1,375 mm",
            highestPoint: "Pico Turquino (1,974 m)",
            lowestPoint: "Caribbean Sea (0 m)",
            coastline: "3,735 km",
            forestCover: "31.1%",
            arableLand: "32.6%",
            terrain: "Mostly flat to rolling plains; rugged hills and mountains in southeast",
            naturalResources: ["Cobalt", "Nickel", "Iron Ore", "Chromium", "Copper", "Salt", "Timber", "Silica", "Petroleum", "Arable Land"]
        },

        geography_links: {
            rivers: ["Cauto River", "Zaza River", "Sagua la Grande"],
            mountains: ["Sierra Maestra", "Pico Turquino", "Escambray Mountains"],
            deserts: [],
            forests: ["Tropical Forests", "Pine Forests", "Mangroves"],
            oceans: ["Caribbean Sea", "Atlantic Ocean", "Gulf of Mexico"]
        },

        culture: {
            officialLanguages: ["Spanish"],
            languages: ["Spanish", "Haitian Creole"],
            religions: ["Christianity (59% - Catholic 51%)", "Santería", "No Religion (23%)"],
            heritageSites: ["Old Havana", "Trinidad and Valley de los Ingenios", "Viñales Valley", "Cienfuegos"],
            festivals: ["Carnival", "Cuban Independence Day", "Festival del Nuevo Cine Latinoamericano", "Havana Jazz Festival"],
            cuisine: ["Ropa Vieja", "Cuban Sandwich", "Moros y Cristianos", "Lechón Asado", "Arroz con Pollo", "Mojito"],
            arts: ["Salsa Music", "Son Cubano", "Afro-Cuban Jazz", "Ballet", "Revolutionary Art"],
            sports: ["Baseball", "Boxing", "Volleyball", "Basketball", "Football"]
        },

        symbols: {
            bird: "Cuban Trogon (Tocororo)",
            animal: "Cuban Crocodile",
            flower: "White Mariposa (Butterfly Jasmine)",
            tree: "Royal Palm",
            anthem: "La Bayamesa",
            motto: "Patria o Muerte (Homeland or Death)"
        },

        demographics: {
            lifeExpectancy: 79.18,
            literacyRate: "99.7%",
            urbanPopulation: "77.4%",
            medianAge: 42.4
        },

        history: {
            timeline: [
                { year: "4000 BCE", title: "Indigenous Settlement", description: "Guanahatabey and Taíno peoples settled" },
                { year: "1492", title: "Columbus", description: "Christopher Columbus arrived" },
                { year: "1511", title: "Spanish Colony", description: "Spanish colonization began" },
                { year: "1868", title: "Independence Wars", description: "Ten Years' War began" },
                { year: "1898", title: "Spanish-American War", description: "Spain ceded Cuba to US" },
                { year: "1902", title: "Independence", description: "Republic established" },
                { year: "1959", title: "Revolution", description: "Fidel Castro's revolution succeeded" },
                { year: "1962", title: "Missile Crisis", description: "Cuban Missile Crisis with US and USSR" }
            ],
            notableFigures: ["José Martí", "Fidel Castro", "Che Guevara", "Celia Cruz", "Alicia Alonso"]
        },

        disputes: [
            { name: "Guantánamo Bay", description: "US Naval Base on Cuban territory", type: "Territory" },
            { name: "US Embargo", description: "Economic embargo since 1962", type: "Political" }
        ],

        quickFacts: [
            { icon: "car", title: "Vintage Cars", text: "Famous for 1950s American classic cars" },
            { icon: "stethoscope", title: "Healthcare", text: "Universal healthcare with high doctor-to-patient ratio" },
            { icon: "graduation", title: "Literacy", text: "99.7% literacy rate - among world's highest" },
            { icon: "music", title: "Music", text: "Birthplace of salsa, mambo, and cha-cha-cha" },
            { icon: "cigar", title: "Cigars", text: "World-famous Cuban cigars (Habanos)" }
        ]
    },

    // 19. DOMINICA
    {
        id: "DMA",
        name: "Dominica",
        officialName: "Commonwealth of Dominica",
        flag: "https://flagcdn.com/w320/dm.png",
        
        images: {
            hero: "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=1920&q=80",
            landscape: "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=1920&q=80",
            city: "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=1920&q=80"
        },

        basic: {
            capital: "Roseau",
            continent: "North America",
            region: "Caribbean",
            subregion: "Caribbean",
            population: 72737,
            area: 751,
            populationDensity: 98,
            independence: "1978",
            callingCode: "+1-767",
            tld: ".dm",
            drivingSide: "Left",
            electricity: "230V, 50Hz"
        },

        location: {
            coordinates: [15.4150, -61.3710],
            timezone: "UTC-4 (AST)",
            neighbors: [],
            borders: 0,
            hemispheres: ["Northern", "Western"],
            islandNation: true
        },

        political: {
            government: "Unitary Parliamentary Republic",
            headOfState: "President Sylvanie Burton",
            headOfGovernment: "Prime Minister Roosevelt Skerrit",
            legislature: "House of Assembly",
            legalSystem: "English Common Law",
            states: 10,
            parishes: 10,
            largestCity: "Roseau",
            organizations: ["UN", "Commonwealth", "CARICOM", "OAS", "OECS", "ALBA"]
        },

        economy: {
            gdp: "$654 Million",
            gdpPPP: "$715 Million",
            gdpPerCapita: "$9,077",
            gdpRank: "#180",
            gdpGrowth: "6.5%",
            currency: "Eastern Caribbean Dollar",
            currencyCode: "XCD",
            currencySymbol: "$",
            inflation: "4.7%",
            unemployment: "11.0%",
            majorSectors: ["Services (62%)", "Agriculture (16%)", "Industry (13%)"],
            industries: ["Tourism", "Soap Manufacturing", "Coconut Oil", "Copra", "Furniture", "Cement Blocks"],
            exports: ["Bananas", "Soap", "Bay Oil", "Vegetables", "Grapefruit"],
            imports: ["Manufactured Goods", "Machinery", "Food", "Chemicals"]
        },

        geography: {
            climate: "Tropical; Moderated by Northeast Trade Winds; Heavy Rainfall",
            avgTemperature: "26°C",
            annualRainfall: "2,000-7,500 mm",
            highestPoint: "Morne Diablotins (1,447 m)",
            lowestPoint: "Caribbean Sea (0 m)",
            coastline: "148 km",
            forestCover: "59.2%",
            arableLand: "8.0%",
            terrain: "Rugged mountains of volcanic origin",
            naturalResources: ["Timber", "Hydropower", "Arable Land"]
        },

        geography_links: {
            rivers: ["Layou River", "Roseau River", "Indian River"],
            mountains: ["Morne Diablotins", "Morne Trois Pitons", "Morne Anglais"],
            deserts: [],
            forests: ["Tropical Rainforest", "Morne Trois Pitons Rainforest"],
            oceans: ["Caribbean Sea", "Atlantic Ocean"]
        },

        culture: {
            officialLanguages: ["English"],
            languages: ["English", "French Creole (Kwéyòl)"],
            religions: ["Christianity (95% - Catholic 61%, Protestant 28%)"],
            heritageSites: ["Morne Trois Pitons National Park"],
            festivals: ["Carnival", "Independence Day", "World Creole Music Festival", "Dive Fest"],
            cuisine: ["Mountain Chicken (Crapaud)", "Callaloo Soup", "Plantains", "Fish Broth"],
            arts: ["Bouyon Music", "Cadence-lypso", "Basket Weaving", "Pottery"],
            sports: ["Cricket", "Football", "Basketball", "Netball"]
        },

        symbols: {
            bird: "Sisserou Parrot",
            animal: "Mountain Chicken Frog",
            flower: "Bwa Kwaib (Carib Wood)",
            tree: "None official",
            anthem: "Isle of Beauty, Isle of Splendour",
            motto: "Après Bondie, C'est La Ter (After God is the Earth)"
        },

        demographics: {
            lifeExpectancy: 78.46,
            literacyRate: "94%",
            urbanPopulation: "71.7%",
            medianAge: 35.6
        },

        history: {
            timeline: [
                { year: "3100 BCE", title: "Ortoiroid Settlement", description: "First settlers arrived" },
                { year: "1493", title: "Columbus", description: "Columbus sighted island on Sunday (Dominica)" },
                { year: "1763", title: "British Control", description: "Treaty of Paris gave to Britain" },
                { year: "1978", title: "Independence", description: "Gained independence from Britain" },
                { year: "2017", title: "Hurricane Maria", description: "Category 5 hurricane devastated island" }
            ],
            notableFigures: ["Patrick John", "Eugenia Charles", "Roosevelt Skerrit"]
        },

        disputes: [],

        quickFacts: [
            { icon: "water", title: "Boiling Lake", text: "Second-largest boiling lake in world" },
            { icon: "leaf", title: "Nature Isle", text: "Most pristine nature in Caribbean; 365 rivers" },
            { icon: "parrot", title: "Sisserou", text: "Only country with parrot on national flag" },
            { icon: "film", title: "Pirates Filming", text: "Filming location for Pirates of the Caribbean" },
            { icon: "mountain", title: "Most Volcanic", text: "Most mountainous Caribbean island" }
        ]
    },

    // 20. DOMINICAN REPUBLIC
    {
        id: "DOM",
        name: "Dominican Republic",
        officialName: "Dominican Republic",
        flag: "https://flagcdn.com/w320/do.png",
        
        images: {
            hero: "https://images.unsplash.com/photo-1548574505-5e239809ee19?w=1920&q=80",
            landscape: "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=1920&q=80",
            city: "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=1920&q=80"
        },

        basic: {
            capital: "Santo Domingo",
            continent: "North America",
            region: "Caribbean",
            subregion: "Caribbean",
            population: 11228821,
            area: 48671,
            populationDensity: 231,
            independence: "1844",
            callingCode: "+1-809, +1-829, +1-849",
            tld: ".do",
            drivingSide: "Right",
            electricity: "120V, 60Hz"
        },

        location: {
            coordinates: [18.7357, -70.1627],
            timezone: "UTC-4 (AST)",
            neighbors: ["Haiti"],
            borders: 376,
            hemispheres: ["Northern", "Western"]
        },

        political: {
            government: "Unitary Presidential Republic",
            headOfState: "President Luis Abinader",
            headOfGovernment: "President Luis Abinader",
            legislature: "Congress (Senate & Chamber of Deputies)",
            legalSystem: "Civil Law",
            states: 31,
            provinces: 31,
            nationalDistrict: 1,
            largestCity: "Santo Domingo",
            organizations: ["UN", "OAS", "CARICOM (Observer)", "SICA", "DR-CAFTA"]
        },

        economy: {
            gdp: "$121 Billion",
            gdpPPP: "$280 Billion",
            gdpPerCapita: "$10,700",
            gdpRank: "#59",
            gdpGrowth: "4.9%",
            currency: "Dominican Peso",
            currencyCode: "DOP",
            currencySymbol: "$",
            inflation: "4.1%",
            unemployment: "5.1%",
            majorSectors: ["Services (63%)", "Industry (27%)", "Agriculture (5%)"],
            industries: ["Tourism", "Sugar Processing", "Ferronickel and Gold Mining", "Textiles", "Cement", "Tobacco"],
            exports: ["Gold", "Cigars", "Medical Instruments", "Bananas", "Ferronickel"],
            imports: ["Refined Petroleum", "Cars", "Petroleum Gas", "Medicaments"]
        },

        geography: {
            climate: "Tropical Maritime; Little Seasonal Temperature Variation; Seasonal Rainfall Variation",
            avgTemperature: "25.5°C",
            annualRainfall: "1,410 mm",
            highestPoint: "Pico Duarte (3,098 m)",
            lowestPoint: "Lago Enriquillo (-46 m)",
            coastline: "1,288 km",
            forestCover: "43.6%",
            arableLand: "16.6%",
            terrain: "Rugged highlands and mountains interspersed with fertile valleys",
            naturalResources: ["Nickel", "Bauxite", "Gold", "Silver", "Amber"]
        },

        geography_links: {
            rivers: ["Yaque del Norte", "Yaque del Sur", "Ozama River", "Artibonito River"],
            mountains: ["Cordillera Central", "Pico Duarte", "Sierra de Bahoruco"],
            deserts: [],
            forests: ["Los Haitises National Park", "Jaragua National Park"],
            oceans: ["Caribbean Sea", "Atlantic Ocean"]
        },

        culture: {
            officialLanguages: ["Spanish"],
            languages: ["Spanish", "Haitian Creole", "English"],
            religions: ["Christianity (95% - Catholic 45%, Protestant 32%)"],
            heritageSites: ["Colonial City of Santo Domingo"],
            festivals: ["Carnival", "Independence Day", "Merengue Festival", "Dominican Jazz Festival"],
            cuisine: ["La Bandera", "Sancocho", "Mangú", "Mofongo", "Tostones", "Chicharrón"],
            arts: ["Merengue", "Bachata", "Carnival Art", "Taíno-inspired Art"],
            sports: ["Baseball", "Basketball", "Boxing", "Football"]
        },

        symbols: {
            bird: "Palmchat (Cigua Palmera)",
            animal: "None official",
            flower: "Rose of Bayahibe",
            tree: "West Indian Mahogany",
            anthem: "Himno Nacional",
            motto: "Dios, Patria, Libertad (God, Fatherland, Liberty)"
        },

        demographics: {
            lifeExpectancy: 74.52,
            literacyRate: "93.8%",
            urbanPopulation: "84.4%",
            medianAge: 28.1
        },

        history: {
            timeline: [
                { year: "600 CE", title: "Taíno Settlement", description: "Taíno people arrived" },
                { year: "1492", title: "Columbus Landing", description: "Columbus established first European settlement in Americas" },
                { year: "1496", title: "Santo Domingo", description: "First permanent European city in Americas founded" },
                { year: "1844", title: "Independence", description: "Independence from Haiti" },
                { year: "1916-1924", title: "US Occupation", description: "United States military occupation" },
                { year: "1930-1961", title: "Trujillo Era", description: "Rafael Trujillo dictatorship" }
            ],
            notableFigures: ["Juan Pablo Duarte", "Rafael Trujillo", "Pedro Mir", "Oscar de la Renta", "David Ortiz"]
        },

        disputes: [],

        quickFacts: [
            { icon: "city", title: "First European City", text: "Santo Domingo is first permanent European settlement in Americas" },
            { icon: "baseball", title: "MLB Pipeline", text: "Produces more MLB players than any country outside US" },
            { icon: "music", title: "Merengue & Bachata", text: "Birthplace of merengue and bachata music" },
            { icon: "gem", title: "Larimar", text: "Only place to find blue pectolite (Larimar) gemstone" },
            { icon: "mountain", title: "Caribbean's Highest", text: "Pico Duarte is highest peak in Caribbean" }
        ]
    }
];

// Export for Node.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CountriesData10;
}

// Export for Browser
if (typeof window !== 'undefined') {
    window.CountriesData10 = CountriesData10;
}
