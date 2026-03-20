/**
 * GeoVerse Encyclopedia - Country Data File 3
 * Contains: Middle East (18 Countries)
 * Version: 2.0 - Clean Data
 */

const CountriesData3 = [
    // 1. BAHRAIN
    {
        id: "BHR",
        name: "Bahrain",
        officialName: "Kingdom of Bahrain",
        flag: "https://flagcdn.com/w320/bh.png",
        
        images: {
            hero: "https://images.unsplash.com/photo-1582672060674-bc2bd808a8b5?w=1920&q=80",
            landscape: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=1920&q=80",
            city: "https://images.unsplash.com/photo-1570906904040-becbe7e2f7b7?w=1920&q=80"
        },

        basic: {
            capital: "Manama",
            continent: "Asia",
            region: "Middle East",
            subregion: "Western Asia",
            population: 1485509,
            area: 778,
            populationDensity: 1935,
            independence: "1971",
            callingCode: "+973",
            tld: ".bh",
            drivingSide: "Right",
            electricity: "230V, 50Hz"
        },

        location: {
            coordinates: [26.0667, 50.5577],
            timezone: "UTC+3 (AST)",
            neighbors: [],
            borders: 0,
            hemispheres: ["Northern", "Eastern"],
            islandNation: true,
            islands: 33
        },

        political: {
            government: "Unitary Constitutional Monarchy",
            headOfState: "King Hamad bin Isa Al Khalifa",
            headOfGovernment: "Prime Minister Salman bin Hamad Al Khalifa",
            legislature: "National Assembly (Consultative Council & Council of Representatives)",
            legalSystem: "Mixed Civil Law and Islamic Law (Sharia)",
            states: 4,
            governorates: 4,
            largestCity: "Manama",
            organizations: ["UN", "Arab League", "GCC", "OIC", "NAM", "WTO"]
        },

        economy: {
            gdp: "$44.4 Billion",
            gdpPPP: "$82.9 Billion",
            gdpPerCapita: "$28,916",
            gdpRank: "#93",
            gdpGrowth: "2.7%",
            currency: "Bahraini Dinar",
            currencyCode: "BHD",
            currencySymbol: ".د.ب",
            inflation: "1.6%",
            unemployment: "4.9%",
            majorSectors: ["Services (59%)", "Industry (39%)", "Agriculture (0.3%)"],
            industries: ["Petroleum Processing", "Aluminum Smelting", "Banking", "Finance", "Tourism", "Ship Repair"],
            exports: ["Petroleum Products", "Aluminum", "Textiles", "Plastics"],
            imports: ["Crude Oil", "Machinery", "Chemicals", "Transport Equipment"]
        },

        geography: {
            climate: "Arid; Hot Humid Summers; Mild Winters",
            avgTemperature: "27°C",
            annualRainfall: "72 mm",
            highestPoint: "Jabal ad Dukhan (135 m)",
            lowestPoint: "Persian Gulf (0 m)",
            coastline: "161 km",
            forestCover: "0.7%",
            arableLand: "2.1%",
            terrain: "Mostly low desert plain rising to low central escarpment",
            naturalResources: ["Oil", "Natural Gas", "Fish", "Pearls"]
        },

        geography_links: {
            rivers: [],
            mountains: ["Jabal ad Dukhan"],
            deserts: ["Arabian Desert"],
            forests: [],
            oceans: ["Persian Gulf", "Gulf of Bahrain"]
        },

        culture: {
            officialLanguages: ["Arabic"],
            languages: ["Arabic", "English", "Urdu", "Hindi", "Persian"],
            religions: ["Islam (73.7% - Shia 55%, Sunni 45%)", "Christianity (9.3%)", "Hinduism (9.8%)"],
            heritageSites: ["Bahrain Pearling Path", "Qal'at al-Bahrain", "Dilmun Burial Mounds"],
            festivals: ["Eid al-Fitr", "Eid al-Adha", "National Day", "Ashura", "Formula 1 Grand Prix"],
            cuisine: ["Machboos", "Muhammar", "Qoozi", "Harees", "Halwa Bahraini", "Samboosa"],
            arts: ["Pottery", "Basket Weaving", "Traditional Music", "Pearl Diving Heritage", "Dhow Building"],
            sports: ["Football", "Formula 1", "Horse Racing", "Basketball", "Cricket"]
        },

        symbols: {
            bird: "Bulbul",
            animal: "Arabian Oryx",
            flower: "None official",
            tree: "Ghaf Tree",
            anthem: "Bahrainona",
            motto: "None official"
        },

        demographics: {
            lifeExpectancy: 77.73,
            literacyRate: "97.5%",
            urbanPopulation: "89.5%",
            medianAge: 32.9
        },

        history: {
            timeline: [
                { year: "3000 BCE", title: "Dilmun Civilization", description: "Ancient Dilmun trading civilization flourished" },
                { year: "1783", title: "Al Khalifa Rule", description: "Al Khalifa dynasty established control" },
                { year: "1820", title: "British Treaty", description: "Became British protectorate" },
                { year: "1932", title: "Oil Discovery", description: "First oil discovered in Arabian Gulf region" },
                { year: "1971", title: "Independence", description: "Independence from Britain declared" },
                { year: "2002", title: "Kingdom", description: "Became constitutional monarchy" },
                { year: "2011", title: "Arab Spring", description: "Protests during Arab Spring movement" }
            ],
            notableFigures: ["Sheikh Isa bin Salman Al Khalifa", "King Hamad bin Isa Al Khalifa"]
        },

        disputes: [
            { name: "Hawar Islands", description: "Resolved maritime dispute with Qatar (2001)", type: "Maritime" }
        ],

        quickFacts: [
            { icon: "gem", title: "Pearl Diving", text: "Historic pearl diving industry before oil" },
            { icon: "building", title: "Financial Hub", text: "Major banking and finance center in Middle East" },
            { icon: "flag-checkered", title: "F1 Circuit", text: "Hosts Bahrain Grand Prix since 2004" },
            { icon: "bridge", title: "King Fahd Causeway", text: "25 km bridge connects to Saudi Arabia" },
            { icon: "coins", title: "Highest Dinar", text: "Bahraini Dinar is world's 2nd highest valued currency" }
        ]
    },

    // 2. CYPRUS
    {
        id: "CYP",
        name: "Cyprus",
        officialName: "Republic of Cyprus",
        flag: "https://flagcdn.com/w320/cy.png",
        
        images: {
            hero: "https://images.unsplash.com/photo-1580674285054-bed31e145f59?w=1920&q=80",
            landscape: "https://images.unsplash.com/photo-1625997148962-e2e5ad8b2c56?w=1920&q=80",
            city: "https://images.unsplash.com/photo-1565548560677-9fcf37d08731?w=1920&q=80"
        },

        basic: {
            capital: "Nicosia",
            continent: "Europe/Asia",
            region: "Eastern Mediterranean",
            subregion: "Western Asia",
            population: 1260138,
            area: 9251,
            populationDensity: 131,
            independence: "1960",
            callingCode: "+357",
            tld: ".cy",
            drivingSide: "Left",
            electricity: "230V, 50Hz"
        },

        location: {
            coordinates: [35.1264, 33.4299],
            timezone: "UTC+2 (EET)",
            neighbors: [],
            borders: 0,
            hemispheres: ["Northern", "Eastern"],
            islandNation: true
        },

        political: {
            government: "Unitary Presidential Constitutional Republic",
            headOfState: "President Nikos Christodoulides",
            headOfGovernment: "President Nikos Christodoulides",
            legislature: "House of Representatives",
            legalSystem: "English Common Law",
            states: 6,
            districts: 6,
            largestCity: "Nicosia",
            organizations: ["UN", "EU", "Commonwealth", "Council of Europe", "OSCE"]
        },

        economy: {
            gdp: "$32.2 Billion",
            gdpPPP: "$44.9 Billion",
            gdpPerCapita: "$37,023",
            gdpRank: "#104",
            gdpGrowth: "2.5%",
            currency: "Euro",
            currencyCode: "EUR",
            currencySymbol: "€",
            inflation: "3.5%",
            unemployment: "6.8%",
            majorSectors: ["Services (78%)", "Industry (12%)", "Agriculture (2%)"],
            industries: ["Tourism", "Food Processing", "Cement", "Textiles", "Chemicals", "Ship Repair", "Financial Services"],
            exports: ["Citrus", "Potatoes", "Pharmaceuticals", "Cement", "Cheese"],
            imports: ["Consumer Goods", "Petroleum", "Machinery", "Transport Equipment"]
        },

        geography: {
            climate: "Mediterranean; Hot Dry Summers; Mild Wet Winters",
            avgTemperature: "19.7°C",
            annualRainfall: "480 mm",
            highestPoint: "Mount Olympus (1,952 m)",
            lowestPoint: "Mediterranean Sea (0 m)",
            coastline: "648 km",
            forestCover: "18.8%",
            arableLand: "9.1%",
            terrain: "Central plain with mountains to north and south",
            naturalResources: ["Copper", "Pyrites", "Asbestos", "Gypsum", "Timber", "Salt", "Marble"]
        },

        geography_links: {
            rivers: ["Pedieos", "Yialias", "Kouris"],
            mountains: ["Troodos Mountains", "Mount Olympus", "Kyrenia Range", "Pentadaktylos"],
            deserts: [],
            forests: ["Troodos Forest", "Paphos Forest", "Akamas Peninsula"],
            oceans: ["Mediterranean Sea"]
        },

        culture: {
            officialLanguages: ["Greek", "Turkish"],
            languages: ["Greek", "Turkish", "English"],
            religions: ["Orthodox Christianity (78%)", "Islam (18%)", "Others (4%)"],
            heritageSites: ["Paphos", "Painted Churches in Troodos", "Choirokoitia"],
            festivals: ["Easter", "Green Monday", "Kataklysmos", "Wine Festivals", "Independence Day"],
            cuisine: ["Halloumi", "Souvlaki", "Moussaka", "Kleftiko", "Meze", "Loukoumades"],
            arts: ["Byzantine Iconography", "Lefkaritika Lace", "Pottery", "Folk Music", "Traditional Dance"],
            sports: ["Football", "Basketball", "Volleyball", "Rally Racing"]
        },

        symbols: {
            bird: "Cyprus Warbler",
            animal: "Mouflon",
            flower: "Cyclamen",
            tree: "Golden Oak",
            anthem: "Hymn to Liberty",
            motto: "None official"
        },

        demographics: {
            lifeExpectancy: 81.21,
            literacyRate: "99.1%",
            urbanPopulation: "66.8%",
            medianAge: 38.9
        },

        history: {
            timeline: [
                { year: "9000 BCE", title: "Early Settlement", description: "First human settlements established" },
                { year: "1400 BCE", title: "Greek Colonization", description: "Mycenaean Greeks settled island" },
                { year: "58 CE", title: "Roman Rule", description: "Cyprus became Roman province" },
                { year: "1191", title: "Crusader Period", description: "Richard I conquered island" },
                { year: "1571", title: "Ottoman Rule", description: "Ottoman Empire took control" },
                { year: "1878", title: "British Rule", description: "Britain administered Cyprus" },
                { year: "1960", title: "Independence", description: "Independence from Britain" },
                { year: "1974", title: "Division", description: "Turkish invasion; island divided" }
            ],
            notableFigures: ["Archbishop Makarios III", "Glafcos Clerides", "Rauf Denktaş"]
        },

        disputes: [
            { name: "Northern Cyprus", description: "Turkish-occupied northern territory", type: "Territory" },
            { name: "Buffer Zone", description: "UN-controlled Green Line dividing island", type: "Border" }
        ],

        quickFacts: [
            { icon: "island", title: "3rd Largest", text: "Third-largest Mediterranean island" },
            { icon: "goddess", title: "Aphrodite", text: "Legendary birthplace of goddess Aphrodite" },
            { icon: "divide", title: "Divided Capital", text: "Nicosia is world's last divided capital" },
            { icon: "cheese", title: "Halloumi", text: "Home of famous halloumi cheese" },
            { icon: "wine", title: "Wine History", text: "Oldest labeled wine in world (Commandaria)" }
        ]
    },

    // 3. IRAQ
    {
        id: "IRQ",
        name: "Iraq",
        officialName: "Republic of Iraq",
        flag: "https://flagcdn.com/w320/iq.png",
        
        images: {
            hero: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=1920&q=80",
            landscape: "https://images.unsplash.com/photo-1578895101408-1a36b834405b?w=1920&q=80",
            city: "https://images.unsplash.com/photo-1569500278091-feadb17f0bcf?w=1920&q=80"
        },

        basic: {
            capital: "Baghdad",
            continent: "Asia",
            region: "Middle East",
            subregion: "Western Asia",
            population: 45504560,
            area: 438317,
            populationDensity: 93,
            independence: "1932",
            callingCode: "+964",
            tld: ".iq",
            drivingSide: "Right",
            electricity: "230V, 50Hz"
        },

        location: {
            coordinates: [33.2232, 43.6793],
            timezone: "UTC+3 (AST)",
            neighbors: ["Turkey", "Iran", "Kuwait", "Saudi Arabia", "Jordan", "Syria"],
            borders: 3809,
            hemispheres: ["Northern", "Eastern"]
        },

        political: {
            government: "Federal Parliamentary Republic",
            headOfState: "President Abdul Latif Rashid",
            headOfGovernment: "Prime Minister Mohammed Shia al-Sudani",
            legislature: "Council of Representatives",
            legalSystem: "Mixed Civil Law and Islamic Law",
            states: 19,
            governorates: 19,
            largestCity: "Baghdad",
            organizations: ["UN", "Arab League", "OPEC", "OIC", "NAM"]
        },

        economy: {
            gdp: "$264 Billion",
            gdpPPP: "$525 Billion",
            gdpPerCapita: "$5,955",
            gdpRank: "#48",
            gdpGrowth: "4.4%",
            currency: "Iraqi Dinar",
            currencyCode: "IQD",
            currencySymbol: "ع.د",
            inflation: "5.0%",
            unemployment: "16.5%",
            majorSectors: ["Industry (Oil 60%)", "Services (30%)", "Agriculture (4%)"],
            industries: ["Petroleum", "Chemicals", "Textiles", "Leather", "Construction Materials", "Food Processing"],
            exports: ["Crude Oil", "Refined Petroleum", "Gold", "Dates"],
            imports: ["Cars", "Broadcasting Equipment", "Refined Petroleum", "Jewelry", "Wheat"]
        },

        geography: {
            climate: "Desert; Hot Dry Summers; Mild Winters",
            avgTemperature: "22.4°C",
            annualRainfall: "216 mm",
            highestPoint: "Cheekha Dar (3,611 m)",
            lowestPoint: "Persian Gulf (0 m)",
            coastline: "58 km",
            forestCover: "1.9%",
            arableLand: "8.4%",
            terrain: "Broad plains; marshlands; mountains along borders",
            naturalResources: ["Petroleum", "Natural Gas", "Phosphates", "Sulfur"]
        },

        geography_links: {
            rivers: ["Tigris", "Euphrates", "Shatt al-Arab", "Diyala", "Little Zab", "Great Zab"],
            mountains: ["Zagros Mountains", "Cheekha Dar", "Halgurd", "Kurdistan Mountains"],
            deserts: ["Syrian Desert", "Arabian Desert"],
            forests: ["Kurdistan Forests", "Zagros Oak Forests"],
            oceans: ["Persian Gulf"]
        },

        culture: {
            officialLanguages: ["Arabic", "Kurdish"],
            languages: ["Arabic", "Kurdish", "Turkmen", "Assyrian", "Armenian"],
            religions: ["Islam (95% - Shia 55-60%, Sunni 40%)", "Christianity (1%)", "Yazidism"],
            heritageSites: ["Babylon", "Ashur", "Hatra", "Erbil Citadel", "Samarra Archaeological City", "Ur", "Nineveh"],
            festivals: ["Eid al-Fitr", "Eid al-Adha", "Ashura", "Nowruz", "Independence Day"],
            cuisine: ["Masgouf", "Dolma", "Kubba", "Pacha", "Tashreeb", "Quzi"],
            arts: ["Calligraphy", "Carpet Weaving", "Poetry", "Maqam Music", "Dabke Dance"],
            sports: ["Football", "Basketball", "Wrestling", "Weightlifting"]
        },

        symbols: {
            bird: "Chukar Partridge",
            animal: "None official",
            flower: "Rose",
            tree: "Date Palm",
            anthem: "Mawtini",
            motto: "God is Great"
        },

        demographics: {
            lifeExpectancy: 71.08,
            literacyRate: "85.6%",
            urbanPopulation: "71.2%",
            medianAge: 21.2
        },

        history: {
            timeline: [
                { year: "3500 BCE", title: "Mesopotamia", description: "Cradle of civilization; Sumer, Akkad, Babylon" },
                { year: "539 BCE", title: "Persian Empire", description: "Cyrus the Great conquered Babylon" },
                { year: "637 CE", title: "Islamic Conquest", description: "Arab Muslims conquered region" },
                { year: "762", title: "Baghdad Founded", description: "Abbasid Caliphate capital established" },
                { year: "1534", title: "Ottoman Rule", description: "Ottoman Empire took control" },
                { year: "1920", title: "British Mandate", description: "League of Nations mandate" },
                { year: "1932", title: "Independence", description: "Kingdom of Iraq independent" },
                { year: "1958", title: "Republic", description: "Monarchy overthrown" },
                { year: "1979", title: "Saddam Hussein", description: "Became president" },
                { year: "2003", title: "Iraq War", description: "US-led invasion; Saddam removed" },
                { year: "2011", title: "US Withdrawal", description: "American forces withdrew" },
                { year: "2017", title: "ISIS Defeated", description: "ISIS territorial control eliminated" }
            ],
            notableFigures: ["Hammurabi", "Nebuchadnezzar II", "Harun al-Rashid", "Al-Khwarizmi", "Saddam Hussein"]
        },

        disputes: [
            { name: "Kurdistan", description: "Autonomous region tensions", type: "Territory" },
            { name: "Shatt al-Arab", description: "Waterway dispute with Iran", type: "Maritime" }
        ],

        quickFacts: [
            { icon: "scroll", title: "Cradle of Civilization", text: "Home of ancient Mesopotamia and Babylon" },
            { icon: "book", title: "First Writing", text: "Cuneiform script invented here (3200 BCE)" },
            { icon: "oil-can", title: "Oil Reserves", text: "5th largest proven oil reserves globally" },
            { icon: "river", title: "Two Rivers", text: "Between Tigris and Euphrates rivers" },
            { icon: "monument", title: "Ziggurat of Ur", text: "Ancient stepped pyramid temple" }
        ]
    },

    // 4. ISRAEL
    {
        id: "ISR",
        name: "Israel",
        officialName: "State of Israel",
        flag: "https://flagcdn.com/w320/il.png",
        
        images: {
            hero: "https://images.unsplash.com/photo-1509839862937-9cce5f5b1087?w=1920&q=80",
            landscape: "https://images.unsplash.com/photo-1544640297-1c90f80d75ca?w=1920&q=80",
            city: "https://images.unsplash.com/photo-1544640297-1c90f80d75ca?w=1920&q=80"
        },

        basic: {
            capital: "Jerusalem (disputed)",
            continent: "Asia",
            region: "Middle East",
            subregion: "Western Asia",
            population: 9842000,
            area: 22072,
            populationDensity: 400,
            independence: "1948",
            callingCode: "+972",
            tld: ".il",
            drivingSide: "Right",
            electricity: "230V, 50Hz"
        },

        location: {
            coordinates: [31.0461, 34.8516],
            timezone: "UTC+2 (IST)",
            neighbors: ["Lebanon", "Syria", "Jordan", "Egypt", "Palestine"],
            borders: 1068,
            hemispheres: ["Northern", "Eastern"]
        },

        political: {
            government: "Unitary Parliamentary Republic",
            headOfState: "President Isaac Herzog",
            headOfGovernment: "Prime Minister Benjamin Netanyahu",
            legislature: "Knesset",
            legalSystem: "Mixed Common Law and Jewish Law",
            states: 6,
            districts: 6,
            largestCity: "Jerusalem",
            organizations: ["UN", "OECD", "WTO"]
        },

        economy: {
            gdp: "$539 Billion",
            gdpPPP: "$524 Billion",
            gdpPerCapita: "$54,660",
            gdpRank: "#28",
            gdpGrowth: "2.0%",
            currency: "Israeli New Shekel",
            currencyCode: "ILS",
            currencySymbol: "₪",
            inflation: "4.2%",
            unemployment: "3.4%",
            majorSectors: ["Services (70%)", "Industry (26%)", "Agriculture (1%)"],
            industries: ["High-Tech", "Diamonds", "Pharmaceuticals", "Chemicals", "Military Equipment", "Agriculture"],
            exports: ["Diamonds", "Pharmaceuticals", "Machinery", "Chemicals", "Electronics", "Software"],
            imports: ["Crude Oil", "Diamonds", "Machinery", "Grains", "Military Equipment"]
        },

        geography: {
            climate: "Mediterranean Coast; Arid Desert South",
            avgTemperature: "20°C",
            annualRainfall: "435 mm",
            highestPoint: "Mount Hermon (2,814 m)",
            lowestPoint: "Dead Sea (-430.5 m) - Lowest point on Earth",
            coastline: "273 km",
            forestCover: "7.6%",
            arableLand: "13.7%",
            terrain: "Negev desert in south; coastal plain; mountains",
            naturalResources: ["Timber", "Potash", "Copper Ore", "Natural Gas", "Phosphate Rock", "Magnesium Bromide"]
        },

        geography_links: {
            rivers: ["Jordan River", "Yarkon River", "Kishon River"],
            mountains: ["Mount Hermon", "Mount Meron", "Golan Heights", "Judean Mountains", "Galilee Hills"],
            deserts: ["Negev Desert", "Judean Desert"],
            forests: ["Carmel Forest", "Jerusalem Forest", "Yatir Forest"],
            oceans: ["Mediterranean Sea", "Red Sea", "Dead Sea", "Sea of Galilee"]
        },

        culture: {
            officialLanguages: ["Hebrew", "Arabic"],
            languages: ["Hebrew", "Arabic", "English", "Russian", "French"],
            religions: ["Judaism (74%)", "Islam (18%)", "Christianity (2%)", "Druze (1.6%)"],
            heritageSites: ["Old City of Jerusalem", "Masada", "Old City of Acre", "White City of Tel-Aviv", "Biblical Tels", "Incense Route", "Bahá'í Holy Places", "Caves of Maresha"],
            festivals: ["Rosh Hashanah", "Yom Kippur", "Passover", "Hanukkah", "Purim", "Independence Day"],
            cuisine: ["Hummus", "Falafel", "Shawarma", "Shakshuka", "Sabich", "Jachnun"],
            arts: ["Klezmer Music", "Israeli Dance", "Contemporary Art", "Film", "Literature"],
            sports: ["Football", "Basketball", "Maccabiah Games", "Martial Arts"]
        },

        symbols: {
            bird: "Hoopoe",
            animal: "Israeli Gazelle",
            flower: "Anemone coronaria",
            tree: "Olive Tree",
            anthem: "Hatikvah",
            motto: "None official"
        },

        demographics: {
            lifeExpectancy: 83.49,
            literacyRate: "97.8%",
            urbanPopulation: "92.6%",
            medianAge: 30.4
        },

        history: {
            timeline: [
                { year: "1000 BCE", title: "Kingdom of Israel", description: "United Kingdom under King David" },
                { year: "586 BCE", title: "Babylonian Exile", description: "First Temple destroyed" },
                { year: "70 CE", title: "Roman Destruction", description: "Second Temple destroyed; diaspora began" },
                { year: "1897", title: "Zionist Movement", description: "First Zionist Congress held" },
                { year: "1917", title: "Balfour Declaration", description: "British support for Jewish homeland" },
                { year: "1947", title: "UN Partition Plan", description: "UN voted to partition Palestine" },
                { year: "1948", title: "Independence", description: "State of Israel declared; Arab-Israeli War" },
                { year: "1967", title: "Six-Day War", description: "Israel captured West Bank, Gaza, Golan" },
                { year: "1979", title: "Egypt Peace", description: "Peace treaty with Egypt signed" },
                { year: "1993", title: "Oslo Accords", description: "Peace process with Palestinians began" }
            ],
            notableFigures: ["David Ben-Gurion", "Golda Meir", "Yitzhak Rabin", "Shimon Peres", "Menachem Begin"]
        },

        disputes: [
            { name: "Palestinian Territories", description: "West Bank and Gaza occupation", type: "Territory" },
            { name: "Golan Heights", description: "Disputed with Syria", type: "Territory" },
            { name: "Jerusalem Status", description: "Capital city disputed", type: "Territory" },
            { name: "Shebaa Farms", description: "Disputed with Lebanon", type: "Border" }
        ],

        quickFacts: [
            { icon: "flask", title: "Start-Up Nation", text: "Highest number of startups per capita globally" },
            { icon: "water", title: "Dead Sea", text: "Lowest point on Earth (-430.5 m)" },
            { icon: "droplet", title: "Water Innovation", text: "World leader in water desalination technology" },
            { icon: "book", title: "Most Museums", text: "Most museums per capita in world" },
            { icon: "cross", title: "Holy Sites", text: "Sacred to Judaism, Christianity, and Islam" }
        ]
    },

    // 5. JORDAN
    {
        id: "JOR",
        name: "Jordan",
        officialName: "Hashemite Kingdom of Jordan",
        flag: "https://flagcdn.com/w320/jo.png",
        
        images: {
            hero: "https://images.unsplash.com/photo-1570939274717-7eda259b50ed?w=1920&q=80",
            landscape: "https://images.unsplash.com/photo-1578271887552-5ac3a72752bc?w=1920&q=80",
            city: "https://images.unsplash.com/photo-1585871888235-4bded1b1ad48?w=1920&q=80"
        },

        basic: {
            capital: "Amman",
            continent: "Asia",
            region: "Middle East",
            subregion: "Western Asia",
            population: 11337052,
            area: 89342,
            populationDensity: 115,
            independence: "1946",
            callingCode: "+962",
            tld: ".jo",
            drivingSide: "Right",
            electricity: "230V, 50Hz"
        },

        location: {
            coordinates: [30.5852, 36.2384],
            timezone: "UTC+2 (EET)",
            neighbors: ["Syria", "Iraq", "Saudi Arabia", "Israel", "Palestine"],
            borders: 1744,
            hemispheres: ["Northern", "Eastern"]
        },

        political: {
            government: "Unitary Parliamentary Constitutional Monarchy",
            headOfState: "King Abdullah II",
            headOfGovernment: "Prime Minister Jafar Hassan",
            legislature: "Parliament (Senate & House of Representatives)",
            legalSystem: "Mixed Civil Law and Islamic Law",
            states: 12,
            governorates: 12,
            largestCity: "Amman",
            organizations: ["UN", "Arab League", "OIC", "WTO", "NAM"]
        },

        economy: {
            gdp: "$50.8 Billion",
            gdpPPP: "$112 Billion",
            gdpPerCapita: "$4,405",
            gdpRank: "#89",
            gdpGrowth: "2.4%",
            currency: "Jordanian Dinar",
            currencyCode: "JOD",
            currencySymbol: "د.ا",
            inflation: "4.2%",
            unemployment: "22.6%",
            majorSectors: ["Services (67%)", "Industry (28%)", "Agriculture (4%)"],
            industries: ["Tourism", "Information Technology", "Clothing", "Fertilizers", "Potash", "Pharmaceuticals", "Petroleum Refining"],
            exports: ["Textiles", "Fertilizers", "Potash", "Phosphates", "Vegetables", "Pharmaceuticals"],
            imports: ["Crude Petroleum", "Cars", "Refined Petroleum", "Jewelry", "Wheat"]
        },

        geography: {
            climate: "Mostly Arid Desert; Rainy Season November-April",
            avgTemperature: "18.4°C",
            annualRainfall: "111 mm",
            highestPoint: "Jabal Umm ad Dami (1,854 m)",
            lowestPoint: "Dead Sea (-430.5 m)",
            coastline: "26 km",
            forestCover: "1.1%",
            arableLand: "2%",
            terrain: "Desert plateau in east; highlands in west; Great Rift Valley",
            naturalResources: ["Phosphates", "Potash", "Shale Oil", "Copper", "Manganese"]
        },

        geography_links: {
            rivers: ["Jordan River", "Yarmouk River", "Zarqa River"],
            mountains: ["Jabal Umm ad Dami", "Jabal Ram", "Ajloun Highlands"],
            deserts: ["Wadi Rum", "Eastern Desert", "Syrian Desert"],
            forests: ["Ajloun Forest Reserve", "Dana Biosphere Reserve"],
            oceans: ["Dead Sea", "Red Sea", "Gulf of Aqaba"]
        },

        culture: {
            officialLanguages: ["Arabic"],
            languages: ["Arabic", "English"],
            religions: ["Sunni Islam (97%)", "Christianity (2%)", "Others (1%)"],
            heritageSites: ["Petra", "Quseir Amra", "Um er-Rasas", "Wadi Rum", "Baptism Site (Bethany Beyond Jordan)", "As-Salt"],
            festivals: ["Eid al-Fitr", "Eid al-Adha", "Independence Day", "Jerash Festival", "Aqaba Traditional Arts Festival"],
            cuisine: ["Mansaf", "Maqluba", "Falafel", "Hummus", "Kunafa", "Zarb"],
            arts: ["Mosaic Art", "Calligraphy", "Traditional Music", "Dabke Dance", "Bedouin Crafts"],
            sports: ["Football", "Basketball", "Taekwondo", "Swimming"]
        },

        symbols: {
            bird: "Sinai Rosefinch",
            animal: "Arabian Oryx",
            flower: "Black Iris",
            tree: "None official",
            anthem: "As-salam al-malaki al-urdoni",
            motto: "None official"
        },

        demographics: {
            lifeExpectancy: 75.37,
            literacyRate: "98.2%",
            urbanPopulation: "91.4%",
            medianAge: 24.3
        },

        history: {
            timeline: [
                { year: "3000 BCE", title: "Ancient Kingdoms", description: "Ammonites, Moabites, Edomites settled" },
                { year: "106 CE", title: "Roman Petra", description: "Nabataean Kingdom annexed by Rome" },
                { year: "634", title: "Islamic Conquest", description: "Arab Muslims conquered region" },
                { year: "1516", title: "Ottoman Rule", description: "Ottoman Empire took control" },
                { year: "1916", title: "Arab Revolt", description: "Great Arab Revolt against Ottomans" },
                { year: "1921", title: "Emirate", description: "Emirate of Transjordan established" },
                { year: "1946", title: "Independence", description: "Full independence from Britain" },
                { year: "1967", title: "Six-Day War", description: "Lost West Bank to Israel" },
                { year: "1994", title: "Peace with Israel", description: "Peace treaty signed" }
            ],
            notableFigures: ["King Abdullah I", "King Hussein", "King Abdullah II", "Sharif Hussein bin Ali"]
        },

        disputes: [],

        quickFacts: [
            { icon: "monument", title: "Petra", text: "Ancient city carved in rose-red stone cliffs" },
            { icon: "water", title: "Dead Sea", text: "Shares world's saltiest body of water with Israel" },
            { icon: "desert", title: "Wadi Rum", text: "Mars-like desert landscape (UNESCO site)" },
            { icon: "cross", title: "Baptism Site", text: "Where Jesus was baptized by John the Baptist" },
            { icon: "users", title: "Refugee Host", text: "Hosts over 2 million Palestinian refugees" }
        ]
    },

    // 6. KUWAIT
    {
        id: "KWT",
        name: "Kuwait",
        officialName: "State of Kuwait",
        flag: "https://flagcdn.com/w320/kw.png",
        
        images: {
            hero: "https://images.unsplash.com/photo-1577632273747-885e3f8b9da1?w=1920&q=80",
            landscape: "https://images.unsplash.com/photo-1583309480958-62c7175f0e64?w=1920&q=80",
            city: "https://images.unsplash.com/photo-1580674285054-bed31e145f59?w=1920&q=80"
        },

        basic: {
            capital: "Kuwait City",
            continent: "Asia",
            region: "Middle East",
            subregion: "Western Asia",
            population: 4310108,
            area: 17818,
            populationDensity: 240,
            independence: "1961",
            callingCode: "+965",
            tld: ".kw",
            drivingSide: "Right",
            electricity: "240V, 50Hz"
        },

        location: {
            coordinates: [29.3117, 47.4818],
            timezone: "UTC+3 (AST)",
            neighbors: ["Iraq", "Saudi Arabia"],
            borders: 475,
            hemispheres: ["Northern", "Eastern"]
        },

        political: {
            government: "Unitary Constitutional Emirate",
            headOfState: "Emir Sheikh Mishal Al-Ahmad Al-Jaber Al-Sabah",
            headOfGovernment: "Prime Minister Sheikh Ahmad Al-Abdullah Al-Sabah",
            legislature: "National Assembly",
            legalSystem: "Mixed Civil Law and Islamic Law",
            states: 6,
            governorates: 6,
            largestCity: "Kuwait City",
            organizations: ["UN", "GCC", "Arab League", "OPEC", "OIC", "WTO"]
        },

        economy: {
            gdp: "$184 Billion",
            gdpPPP: "$251 Billion",
            gdpPerCapita: "$46,543",
            gdpRank: "#56",
            gdpGrowth: "2.6%",
            currency: "Kuwaiti Dinar",
            currencyCode: "KWD",
            currencySymbol: "د.ك",
            inflation: "3.6%",
            unemployment: "3.4%",
            majorSectors: ["Industry (Oil 50%)", "Services (48%)", "Agriculture (0.4%)"],
            industries: ["Petroleum", "Petrochemicals", "Cement", "Shipbuilding", "Construction"],
            exports: ["Crude Petroleum", "Refined Petroleum", "Hydrocarbons"],
            imports: ["Cars", "Broadcasting Equipment", "Jewelry", "Packaged Medicaments"]
        },

        geography: {
            climate: "Arid; Intensely Hot Summers; Short Cool Winters",
            avgTemperature: "26.6°C",
            annualRainfall: "121 mm",
            highestPoint: "Mutla Ridge (306 m)",
            lowestPoint: "Persian Gulf (0 m)",
            coastline: "499 km",
            forestCover: "0.4%",
            arableLand: "0.6%",
            terrain: "Flat to slightly undulating desert plain",
            naturalResources: ["Petroleum", "Natural Gas", "Fish", "Shrimp"]
        },

        geography_links: {
            rivers: [],
            mountains: ["Mutla Ridge", "Al Zawr Escarpment"],
            deserts: ["Arabian Desert"],
            forests: [],
            oceans: ["Persian Gulf", "Kuwait Bay"]
        },

        culture: {
            officialLanguages: ["Arabic"],
            languages: ["Arabic", "English"],
            religions: ["Islam (74% - Sunni 60%, Shia 40%)", "Christianity (18%)", "Others (8%)"],
            heritageSites: ["Failaka Island"],
            festivals: ["Eid al-Fitr", "Eid al-Adha", "National Day", "Liberation Day", "Hala February"],
            cuisine: ["Machboos", "Mutabbaq Samak", "Gers Ogaily", "Jireesh", "Harees", "Balaleet"],
            arts: ["Sadu Weaving", "Dhow Building", "Calligraphy", "Traditional Music", "Pearl Diving Heritage"],
            sports: ["Football", "Basketball", "Handball", "Ice Hockey", "Camel Racing"]
        },

        symbols: {
            bird: "Falcon",
            animal: "Arabian Camel",
            flower: "Arfaj",
            tree: "Date Palm",
            anthem: "Al-Nasheed Al-Watani",
            motto: "None official"
        },

        demographics: {
            lifeExpectancy: 78.94,
            literacyRate: "96.1%",
            urbanPopulation: "100%",
            medianAge: 37.2
        },

        history: {
            timeline: [
                { year: "1613", title: "Al-Sabah Dynasty", description: "Al-Sabah family began rule" },
                { year: "1899", title: "British Protectorate", description: "Treaty with Britain for protection" },
                { year: "1938", title: "Oil Discovery", description: "Oil discovered at Burgan field" },
                { year: "1961", title: "Independence", description: "Independence from Britain" },
                { year: "1990", title: "Iraqi Invasion", description: "Iraq invaded Kuwait" },
                { year: "1991", title: "Liberation", description: "Gulf War; Kuwait liberated" },
                { year: "2006", title: "Emir Sabah", description: "Sheikh Sabah Al-Ahmad became Emir" }
            ],
            notableFigures: ["Sheikh Mubarak Al-Sabah", "Sheikh Abdullah Al-Salem Al-Sabah", "Sheikh Jaber Al-Ahmad Al-Sabah"]
        },

        disputes: [
            { name: "Maritime Border", description: "Minor maritime issues with Saudi Arabia", type: "Maritime" }
        ],

        quickFacts: [
            { icon: "coins", title: "Highest Dinar", text: "Kuwaiti Dinar is world's highest valued currency" },
            { icon: "oil-can", title: "Oil Wealth", text: "6th largest oil reserves in world" },
            { icon: "building", title: "Kuwait Towers", text: "Iconic water towers symbol of nation" },
            { icon: "users", title: "Expat Majority", text: "70% of population are expatriates" },
            { icon: "vote", title: "Democracy", text: "Most democratic country in Gulf region" }
        ]
    },

    // 7. LEBANON
    {
        id: "LBN",
        name: "Lebanon",
        officialName: "Lebanese Republic",
        flag: "https://flagcdn.com/w320/lb.png",
        
        images: {
            hero: "https://images.unsplash.com/photo-1580674285054-bed31e145f59?w=1920&q=80",
            landscape: "https://images.unsplash.com/photo-1585871888235-4bded1b1ad48?w=1920&q=80",
            city: "https://images.unsplash.com/photo-1580492516014-4a28466d55df?w=1920&q=80"
        },

        basic: {
            capital: "Beirut",
            continent: "Asia",
            region: "Middle East",
            subregion: "Western Asia",
            population: 5590000,
            area: 10452,
            populationDensity: 667,
            independence: "1943",
            callingCode: "+961",
            tld: ".lb",
            drivingSide: "Right",
            electricity: "220V, 50Hz"
        },

        location: {
            coordinates: [33.8547, 35.8623],
            timezone: "UTC+2 (EET)",
            neighbors: ["Syria", "Israel"],
            borders: 484,
            hemispheres: ["Northern", "Eastern"]
        },

        political: {
            government: "Unitary Confessionalist Parliamentary Republic",
            headOfState: "President Joseph Aoun",
            headOfGovernment: "Prime Minister Nawaf Salam",
            legislature: "Parliament",
            legalSystem: "Mixed Civil Law and Islamic Law",
            states: 8,
            governorates: 8,
            largestCity: "Beirut",
            organizations: ["UN", "Arab League", "OIC", "Francophonie", "NAM"]
        },

        economy: {
            gdp: "$18.7 Billion",
            gdpPPP: "$53 Billion",
            gdpPerCapita: "$3,582",
            gdpRank: "#112",
            gdpGrowth: "-0.2%",
            currency: "Lebanese Pound",
            currencyCode: "LBP",
            currencySymbol: "ل.ل",
            inflation: "171.2%",
            unemployment: "29.6%",
            majorSectors: ["Services (76%)", "Industry (13%)", "Agriculture (3%)"],
            industries: ["Banking", "Tourism", "Food Processing", "Jewelry", "Cement", "Textiles", "Wine"],
            exports: ["Jewelry", "Base Metals", "Chemicals", "Consumer Goods", "Fruit", "Tobacco"],
            imports: ["Petroleum Products", "Cars", "Medicaments", "Clothing", "Meat", "Wheat"]
        },

        geography: {
            climate: "Mediterranean; Cool Wet Winters; Hot Dry Summers",
            avgTemperature: "20.5°C",
            annualRainfall: "661 mm",
            highestPoint: "Qornet es Saouda (3,088 m)",
            lowestPoint: "Mediterranean Sea (0 m)",
            coastline: "225 km",
            forestCover: "13.4%",
            arableLand: "11.9%",
            terrain: "Narrow coastal plain; Lebanon Mountains; Bekaa Valley; Anti-Lebanon Mountains",
            naturalResources: ["Limestone", "Iron Ore", "Salt", "Water"]
        },

        geography_links: {
            rivers: ["Litani River", "Orontes River", "Hasbani River", "Awali River"],
            mountains: ["Lebanon Mountains", "Anti-Lebanon Mountains", "Qornet es Saouda", "Mount Hermon"],
            deserts: [],
            forests: ["Cedars of God", "Horsh Ehden", "Tannourine Cedar Forest"],
            oceans: ["Mediterranean Sea"]
        },

        culture: {
            officialLanguages: ["Arabic"],
            languages: ["Arabic", "French", "English", "Armenian"],
            religions: ["Islam (61% - Shia 31%, Sunni 30%)", "Christianity (33.7%)", "Druze (5.2%)"],
            heritageSites: ["Baalbek", "Byblos", "Tyre", "Anjar", "Ouadi Qadisha", "Cedars of God"],
            festivals: ["Eid al-Fitr", "Eid al-Adha", "Christmas", "Easter", "Independence Day", "Baalbek Festival"],
            cuisine: ["Hummus", "Tabbouleh", "Fattoush", "Kibbeh", "Shawarma", "Manakish", "Baklava"],
            arts: ["Dabke Dance", "Arabic Music", "Gibran Khalil Gibran Literature", "Fairuz Music", "Film"],
            sports: ["Football", "Basketball", "Skiing", "Volleyball", "Tennis"]
        },

        symbols: {
            bird: "None official",
            animal: "Striped Hyena",
            flower: "None official",
            tree: "Lebanon Cedar",
            anthem: "Kulluna lil-watan",
            motto: "All of us! For our Country, for our Flag and Glory!"
        },

        demographics: {
            lifeExpectancy: 78.93,
            literacyRate: "95.1%",
            urbanPopulation: "88.9%",
            medianAge: 30.5
        },

        history: {
            timeline: [
                { year: "3000 BCE", title: "Phoenicia", description: "Phoenician civilization flourished" },
                { year: "64 BCE", title: "Roman Rule", description: "Became part of Roman Empire" },
                { year: "635 CE", title: "Islamic Conquest", description: "Arab Muslims conquered region" },
                { year: "1516", title: "Ottoman Rule", description: "Ottoman Empire took control" },
                { year: "1920", title: "French Mandate", description: "League of Nations mandate" },
                { year: "1943", title: "Independence", description: "Independence from France" },
                { year: "1975-1990", title: "Civil War", description: "Lebanese Civil War" },
                { year: "2005", title: "Cedar Revolution", description: "Syrian troops withdrew" },
                { year: "2019", title: "Economic Crisis", description: "Financial collapse began" }
            ],
            notableFigures: ["Khalil Gibran", "Fairuz", "Rafic Hariri", "Charles Malik", "Amin Maalouf"]
        },

        disputes: [
            { name: "Shebaa Farms", description: "Disputed territory with Israel", type: "Territory" },
            { name: "Maritime Border", description: "Dispute with Israel over gas fields", type: "Maritime" }
        ],

        quickFacts: [
            { icon: "tree", title: "Cedar Tree", text: "Ancient cedar forests mentioned in Epic of Gilgamesh" },
            { icon: "book", title: "Alphabet Origin", text: "Phoenicians invented first alphabet here" },
            { icon: "city", title: "Oldest City", text: "Byblos is among world's oldest cities (7,000 years)" },
            { icon: "wine", title: "Wine History", text: "Wine production for 5,000+ years" },
            { icon: "users", title: "Diverse", text: "18 recognized religious sects" }
        ]
    },

    // 8. OMAN
    {
        id: "OMN",
        name: "Oman",
        officialName: "Sultanate of Oman",
        flag: "https://flagcdn.com/w320/om.png",
        
        images: {
            hero: "https://images.unsplash.com/photo-1590672542940-4eb2c87d36cf?w=1920&q=80",
            landscape: "https://images.unsplash.com/photo-1591608971362-f08b2a75701b?w=1920&q=80",
            city: "https://images.unsplash.com/photo-1569135953283-df6d163abf67?w=1920&q=80"
        },

        basic: {
            capital: "Muscat",
            continent: "Asia",
            region: "Middle East",
            subregion: "Western Asia",
            population: 4644384,
            area: 309500,
            populationDensity: 16,
            independence: "1650",
            callingCode: "+968",
            tld: ".om",
            drivingSide: "Right",
            electricity: "240V, 50Hz"
        },

        location: {
            coordinates: [21.4735, 55.9754],
            timezone: "UTC+4 (GST)",
            neighbors: ["United Arab Emirates", "Saudi Arabia", "Yemen"],
            borders: 1561,
            hemispheres: ["Northern", "Eastern"]
        },

        political: {
            government: "Unitary Absolute Monarchy",
            headOfState: "Sultan Haitham bin Tariq",
            headOfGovernment: "Sultan Haitham bin Tariq",
            legislature: "Council of Oman (State Council & Shura Council)",
            legalSystem: "Mixed Islamic Law and Civil Law",
            states: 11,
            governorates: 11,
            largestCity: "Muscat",
            organizations: ["UN", "GCC", "Arab League", "OIC", "NAM"]
        },

        economy: {
            gdp: "$115 Billion",
            gdpPPP: "$210 Billion",
            gdpPerCapita: "$23,732",
            gdpRank: "#62",
            gdpGrowth: "1.3%",
            currency: "Omani Rial",
            currencyCode: "OMR",
            currencySymbol: "ر.ع.",
            inflation: "2.8%",
            unemployment: "3.0%",
            majorSectors: ["Industry (Oil 40%)", "Services (45%)", "Agriculture (2%)"],
            industries: ["Crude Oil", "Natural Gas", "Construction", "Cement", "Copper", "Steel", "Chemicals"],
            exports: ["Petroleum", "Natural Gas", "Re-exports", "Fish", "Metals", "Textiles"],
            imports: ["Machinery", "Transport Equipment", "Manufactured Goods", "Food", "Livestock"]
        },

        geography: {
            climate: "Hot Arid Desert; Hot Humid Coast; Monsoon in South",
            avgTemperature: "28°C",
            annualRainfall: "100 mm (varies by region)",
            highestPoint: "Jabal Shams (3,004 m)",
            lowestPoint: "Arabian Sea (0 m)",
            coastline: "2,092 km",
            forestCover: "0.01%",
            arableLand: "0.1%",
            terrain: "Desert plain; mountains in north and south",
            naturalResources: ["Petroleum", "Natural Gas", "Copper", "Asbestos", "Marble", "Limestone", "Chromium", "Gypsum"]
        },

        geography_links: {
            rivers: ["Wadi Samail", "Wadi Bani Khalid", "Wadi Shab", "Wadi Dayqah"],
            mountains: ["Al Hajar Mountains", "Jabal Shams", "Jabal Akhdar", "Dhofar Mountains"],
            deserts: ["Rub al Khali", "Wahiba Sands", "Ramlat al Wahiba"],
            forests: ["Dhofar Cloud Forests", "Frankincense Trees"],
            oceans: ["Gulf of Oman", "Arabian Sea", "Strait of Hormuz"]
        },

        culture: {
            officialLanguages: ["Arabic"],
            languages: ["Arabic", "English", "Baluchi", "Swahili", "Urdu"],
            religions: ["Islam (86% - Ibadi 45%, Sunni 45%, Shia 10%)", "Hinduism (13%)", "Christianity (1%)"],
            heritageSites: ["Bahla Fort", "Archaeological Sites of Bat", "Land of Frankincense", "Aflaj Irrigation", "Qalhat"],
            festivals: ["Eid al-Fitr", "Eid al-Adha", "National Day", "Renaissance Day", "Muscat Festival"],
            cuisine: ["Shuwa", "Majboos", "Mashuai", "Halwa", "Mishkak", "Harees"],
            arts: ["Silver Jewelry", "Kumma (Cap) Making", "Pottery", "Traditional Music", "Al-Razha Dance"],
            sports: ["Football", "Camel Racing", "Horse Racing", "Sailing", "Traditional Bullfighting"]
        },

        symbols: {
            bird: "None official",
            animal: "Arabian Oryx",
            flower: "None official",
            tree: "None official",
            anthem: "Nashid as-Salaam as-Sultani",
            motto: "None official"
        },

        demographics: {
            lifeExpectancy: 78.32,
            literacyRate: "95.7%",
            urbanPopulation: "87.6%",
            medianAge: 30.8
        },

        history: {
            timeline: [
                { year: "3000 BCE", title: "Magan", description: "Ancient Magan copper trading civilization" },
                { year: "630 CE", title: "Islam", description: "Oman embraced Islam peacefully" },
                { year: "1507", title: "Portuguese", description: "Portuguese occupied coastal areas" },
                { year: "1650", title: "Independence", description: "Expelled Portuguese; Ya'aruba dynasty" },
                { year: "1749", title: "Al Said Dynasty", description: "Current dynasty began rule" },
                { year: "1970", title: "Sultan Qaboos", description: "Sultan Qaboos modernized nation" },
                { year: "2020", title: "Sultan Haitham", description: "Current Sultan took throne" }
            ],
            notableFigures: ["Sultan Qaboos bin Said", "Sultan Haitham bin Tariq", "Ahmad ibn Majid"]
        },

        disputes: [],

        quickFacts: [
            { icon: "mountain", title: "Grand Canyon", text: "Jebel Shams has 'Grand Canyon of Arabia'" },
            { icon: "ship", title: "Maritime Heritage", text: "Historic trading power across Indian Ocean" },
            { icon: "tree", title: "Frankincense", text: "Ancient frankincense trade route" },
            { icon: "water", title: "Aflaj System", text: "Ancient irrigation system (UNESCO)" },
            { icon: "crown", title: "Oldest Dynasty", text: "Al Said dynasty ruling since 1749" }
        ]
    },

    // 9. PALESTINE
    {
        id: "PSE",
        name: "Palestine",
        officialName: "State of Palestine",
        flag: "https://flagcdn.com/w320/ps.png",
        
        images: {
            hero: "https://images.unsplash.com/photo-1580492516014-4a28466d55df?w=1920&q=80",
            landscape: "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=1920&q=80",
            city: "https://images.unsplash.com/photo-1570939274717-7eda259b50ed?w=1920&q=80"
        },

        basic: {
            capital: "Ramallah (de facto); East Jerusalem (claimed)",
            continent: "Asia",
            region: "Middle East",
            subregion: "Western Asia",
            population: 5483000,
            area: 6020,
            populationDensity: 847,
            independence: "1988 (Declared)",
            callingCode: "+970",
            tld: ".ps",
            drivingSide: "Right",
            electricity: "230V, 50Hz"
        },

        location: {
            coordinates: [31.9522, 35.2332],
            timezone: "UTC+2 (EET)",
            neighbors: ["Israel", "Egypt", "Jordan"],
            borders: 466,
            hemispheres: ["Northern", "Eastern"]
        },

        political: {
            government: "Semi-Presidential Republic (under occupation)",
            headOfState: "President Mahmoud Abbas",
            headOfGovernment: "Prime Minister Mohammad Mustafa",
            legislature: "Palestinian Legislative Council",
            legalSystem: "Mixed Civil Law, Islamic Law, and Common Law",
            states: 16,
            governorates: 16,
            largestCity: "Gaza City",
            organizations: ["UN Observer State", "Arab League", "OIC", "UNESCO", "NAM"]
        },

        economy: {
            gdp: "$19.1 Billion",
            gdpPPP: "$33.4 Billion",
            gdpPerCapita: "$3,664",
            gdpRank: "#115",
            gdpGrowth: "3.0%",
            currency: "Israeli New Shekel / Jordanian Dinar / Egyptian Pound",
            currencyCode: "ILS/JOD/EGP",
            currencySymbol: "₪/د.ا/£",
            inflation: "3.7%",
            unemployment: "25.7%",
            majorSectors: ["Services (55%)", "Industry (22%)", "Agriculture (3%)"],
            industries: ["Small-scale Manufacturing", "Textiles", "Soap", "Olive-wood", "Mother-of-pearl", "Construction"],
            exports: ["Stone", "Olives", "Fruit", "Vegetables", "Limestone"],
            imports: ["Food", "Consumer Goods", "Construction Materials", "Petroleum"]
        },

        geography: {
            climate: "Mediterranean West; Desert East",
            avgTemperature: "18.5°C",
            annualRainfall: "400-700 mm (West Bank); 200-300 mm (Gaza)",
            highestPoint: "Tall Asur (1,022 m)",
            lowestPoint: "Dead Sea (-430.5 m)",
            coastline: "40 km (Gaza Strip)",
            forestCover: "1.5%",
            arableLand: "16.9%",
            terrain: "West Bank mostly hills; Jordan Valley; Gaza Strip flat coastal plain",
            naturalResources: ["Arable Land", "Natural Gas (offshore Gaza)"]
        },

        geography_links: {
            rivers: ["Jordan River", "Wadi Gaza", "Wadi Qelt"],
            mountains: ["Judean Hills", "Mount Gerizim", "Mount Ebal", "Samaritan Hills"],
            deserts: ["Judean Desert"],
            forests: ["Olive Groves", "Mediterranean Woodlands"],
            oceans: ["Dead Sea", "Mediterranean Sea"]
        },

        culture: {
            officialLanguages: ["Arabic"],
            languages: ["Arabic", "English"],
            religions: ["Islam (93% - Sunni)", "Christianity (6%)", "Others (1%)"],
            heritageSites: ["Birthplace of Jesus (Bethlehem)", "Old City of Hebron", "Battir", "Land of Olives and Vines"],
            festivals: ["Eid al-Fitr", "Eid al-Adha", "Christmas", "Easter", "Nakba Day", "Independence Day"],
            cuisine: ["Maqluba", "Musakhan", "Falafel", "Hummus", "Knafeh", "Za'atar"],
            arts: ["Tatreez Embroidery", "Dabke Dance", "Pottery", "Olive Wood Carving", "Calligraphy"],
            sports: ["Football", "Basketball", "Athletics", "Swimming"]
        },

        symbols: {
            bird: "Palestine Sunbird",
            animal: "Gazelle",
            flower: "Faqqua Iris (Black Iris)",
            tree: "Olive Tree",
            anthem: "Fida'i",
            motto: "None official"
        },

        demographics: {
            lifeExpectancy: 75.69,
            literacyRate: "97.5%",
            urbanPopulation: "77.6%",
            medianAge: 21.9
        },

        history: {
            timeline: [
                { year: "3000 BCE", title: "Canaanites", description: "Ancient Canaanite civilization" },
                { year: "1000 BCE", title: "Kingdom Period", description: "Israelite and Judean kingdoms" },
                { year: "135 CE", title: "Roman Palestine", description: "Romans renamed region Syria Palaestina" },
                { year: "638", title: "Islamic Rule", description: "Arab Muslim conquest" },
                { year: "1517", title: "Ottoman Rule", description: "Ottoman Empire took control" },
                { year: "1920", title: "British Mandate", description: "League of Nations mandate" },
                { year: "1947", title: "UN Partition", description: "UN voted to partition Palestine" },
                { year: "1948", title: "Nakba", description: "750,000 Palestinians displaced" },
                { year: "1967", title: "Occupation", description: "Israel occupied West Bank and Gaza" },
                { year: "1988", title: "Declaration", description: "State of Palestine declared" },
                { year: "2012", title: "UN Status", description: "Became UN Observer State" }
            ],
            notableFigures: ["Yasser Arafat", "Mahmoud Darwish", "Edward Said", "Hanan Ashrawi"]
        },

        disputes: [
            { name: "Israeli Occupation", description: "West Bank and Gaza under Israeli control", type: "Territory" },
            { name: "Jerusalem Status", description: "East Jerusalem claimed as capital", type: "Territory" },
            { name: "Settlements", description: "Israeli settlements in West Bank", type: "Territory" },
            { name: "Right of Return", description: "Palestinian refugees return rights", type: "Territory" }
        ],

        quickFacts: [
            { icon: "baby", title: "Bethlehem", text: "Birthplace of Jesus Christ" },
            { icon: "city", title: "Ancient Jericho", text: "One of world's oldest continuously inhabited cities" },
            { icon: "olive", title: "Olive Trees", text: "Some olive trees over 2,000 years old" },
            { icon: "art", title: "Tatreez", text: "Traditional embroidery art form" },
            { icon: "flag", title: "Recognition", text: "Recognized by 140+ UN member states" }
        ]
    },

    // 10. QATAR
    {
        id: "QAT",
        name: "Qatar",
        officialName: "State of Qatar",
        flag: "https://flagcdn.com/w320/qa.png",
        
        images: {
            hero: "https://images.unsplash.com/photo-1580674285054-bed31e145f59?w=1920&q=80",
            landscape: "https://images.unsplash.com/photo-1553871166-0bf64707a4be?w=1920&q=80",
            city: "https://images.unsplash.com/photo-1568737485578-ee0ca8a08a33?w=1920&q=80"
        },

        basic: {
            capital: "Doha",
            continent: "Asia",
            region: "Middle East",
            subregion: "Western Asia",
            population: 2795484,
            area: 11586,
            populationDensity: 248,
            independence: "1971",
            callingCode: "+974",
            tld: ".qa",
            drivingSide: "Right",
            electricity: "240V, 50Hz"
        },

        location: {
            coordinates: [25.3548, 51.1839],
            timezone: "UTC+3 (AST)",
            neighbors: ["Saudi Arabia"],
            borders: 87,
            hemispheres: ["Northern", "Eastern"]
        },

        political: {
            government: "Unitary Semi-Constitutional Monarchy",
            headOfState: "Emir Sheikh Tamim bin Hamad Al Thani",
            headOfGovernment: "Prime Minister Sheikh Mohammed bin Abdulrahman Al Thani",
            legislature: "Shura Council",
            legalSystem: "Mixed Civil Law and Islamic Law",
            states: 8,
            municipalities: 8,
            largestCity: "Doha",
            organizations: ["UN", "GCC", "Arab League", "OPEC", "OIC", "NAM"]
        },

        economy: {
            gdp: "$237 Billion",
            gdpPPP: "$345 Billion",
            gdpPerCapita: "$88,046",
            gdpRank: "#50",
            gdpGrowth: "3.4%",
            currency: "Qatari Riyal",
            currencyCode: "QAR",
            currencySymbol: "ر.ق",
            inflation: "4.9%",
            unemployment: "0.1%",
            majorSectors: ["Industry (LNG 50%)", "Services (48%)", "Agriculture (0.2%)"],
            industries: ["LNG", "Crude Oil", "Petrochemicals", "Steel", "Cement", "Fertilizers", "Commercial Ship Repair"],
            exports: ["LNG", "Petroleum Gas", "Crude Petroleum", "Refined Petroleum", "Ethylene Polymers"],
            imports: ["Machinery", "Transport Equipment", "Food", "Chemicals"]
        },

        geography: {
            climate: "Arid; Hot Humid Summers; Mild Winters",
            avgTemperature: "28°C",
            annualRainfall: "75 mm",
            highestPoint: "Qurayn Abu al Bawl (103 m)",
            lowestPoint: "Persian Gulf (0 m)",
            coastline: "563 km",
            forestCover: "0%",
            arableLand: "1.2%",
            terrain: "Mostly flat and barren desert",
            naturalResources: ["Petroleum", "Natural Gas", "Fish"]
        },

        geography_links: {
            rivers: [],
            mountains: ["Qurayn Abu al Bawl"],
            deserts: ["Arabian Desert", "Khor al Adaid (Inland Sea)"],
            forests: [],
            oceans: ["Persian Gulf", "Gulf of Bahrain"]
        },

        culture: {
            officialLanguages: ["Arabic"],
            languages: ["Arabic", "English"],
            religions: ["Islam (65.5% - Sunni)", "Christianity (13.8%)", "Hinduism (13.8%)", "Buddhism (3.1%)"],
            heritageSites: ["Al Zubarah Archaeological Site"],
            festivals: ["Eid al-Fitr", "Eid al-Adha", "National Day", "Qatar International Food Festival"],
            cuisine: ["Machboos", "Harees", "Saloona", "Madrouba", "Balaleet", "Luqaimat"],
            arts: ["Pearl Diving Heritage", "Falconry", "Traditional Music", "Sadu Weaving", "Dhow Building"],
            sports: ["Football", "Camel Racing", "Falconry", "Horse Racing", "Cricket"]
        },

        symbols: {
            bird: "Falcon",
            animal: "Arabian Oryx",
            flower: "None official",
            tree: "Sidra Tree",
            anthem: "As-Salam al-Amiri",
            motto: "None official"
        },

        demographics: {
            lifeExpectancy: 80.73,
            literacyRate: "93.5%",
            urbanPopulation: "99.2%",
            medianAge: 33.7
        },

        history: {
            timeline: [
                { year: "3000 BCE", title: "Ancient Settlement", description: "Early settlements and trade" },
                { year: "628 CE", title: "Islam", description: "Region embraced Islam" },
                { year: "1766", title: "Al Thani", description: "Al Thani family settled in Qatar" },
                { year: "1871", title: "Ottoman Rule", description: "Ottoman Empire took control" },
                { year: "1916", title: "British Protectorate", description: "Treaty with Britain" },
                { year: "1971", title: "Independence", description: "Independence from Britain" },
                { year: "1995", title: "Emir Hamad", description: "Sheikh Hamad took power" },
                { year: "2013", title: "Emir Tamim", description: "Current Emir took throne" },
                { year: "2022", title: "FIFA World Cup", description: "Hosted FIFA World Cup" }
            ],
            notableFigures: ["Sheikh Jassim bin Mohammed Al Thani", "Sheikh Hamad bin Khalifa Al Thani", "Sheikh Tamim bin Hamad Al Thani"]
        },

        disputes: [
            { name: "Saudi Blockade", description: "2017-2021 diplomatic crisis (resolved)", type: "Political" }
        ],

        quickFacts: [
            { icon: "futbol", title: "World Cup 2022", text: "First Middle Eastern World Cup host" },
            { icon: "chart-line", title: "Richest Country", text: "Highest GDP per capita in world" },
            { icon: "fire", title: "LNG Leader", text: "World's largest LNG exporter" },
            { icon: "broadcast-tower", title: "Al Jazeera", text: "Al Jazeera Media Network headquarters" },
            { icon: "plane", title: "Qatar Airways", text: "Five-star airline rated globally" }
        ]
    },

    // 11. SAUDI ARABIA
    {
        id: "SAU",
        name: "Saudi Arabia",
        officialName: "Kingdom of Saudi Arabia",
        flag: "https://flagcdn.com/w320/sa.png",
        
        images: {
            hero: "https://images.unsplash.com/photo-1591608971362-f08b2a75701b?w=1920&q=80",
            landscape: "https://images.unsplash.com/photo-1586724237569-f3d0c1dee8c6?w=1920&q=80",
            city: "https://images.unsplash.com/photo-1591608971362-f08b2a75701b?w=1920&q=80"
        },

        basic: {
            capital: "Riyadh",
            continent: "Asia",
            region: "Middle East",
            subregion: "Western Asia",
            population: 36408820,
            area: 2149690,
            populationDensity: 16,
            independence: "1932",
            callingCode: "+966",
            tld: ".sa",
            drivingSide: "Right",
            electricity: "220V, 60Hz"
        },

        location: {
            coordinates: [23.8859, 45.0792],
            timezone: "UTC+3 (AST)",
            neighbors: ["Jordan", "Iraq", "Kuwait", "Qatar", "United Arab Emirates", "Oman", "Yemen"],
            borders: 4272,
            hemispheres: ["Northern", "Eastern"]
        },

        political: {
            government: "Unitary Islamic Absolute Monarchy",
            headOfState: "King Salman bin Abdulaziz Al Saud",
            headOfGovernment: "Crown Prince Mohammed bin Salman (de facto)",
            legislature: "Consultative Assembly (Shura Council)",
            legalSystem: "Islamic Law (Sharia)",
            states: 13,
            provinces: 13,
            largestCity: "Riyadh",
            organizations: ["UN", "GCC", "Arab League", "OPEC", "OIC", "G20", "WTO"]
        },

        economy: {
            gdp: "$1.11 Trillion",
            gdpPPP: "$2.04 Trillion",
            gdpPerCapita: "$31,430",
            gdpRank: "#18",
            gdpGrowth: "0.8%",
            currency: "Saudi Riyal",
            currencyCode: "SAR",
            currencySymbol: "ر.س",
            inflation: "2.3%",
            unemployment: "4.8%",
            majorSectors: ["Industry (Oil 40%)", "Services (47%)", "Agriculture (2%)"],
            industries: ["Petroleum", "Petrochemicals", "Cement", "Construction", "Fertilizer", "Plastics", "Metals"],
            exports: ["Crude Petroleum", "Refined Petroleum", "Ethylene Polymers", "Propylene Polymers"],
            imports: ["Cars", "Broadcasting Equipment", "Refined Petroleum", "Packaged Medicaments", "Gold"]
        },

        geography: {
            climate: "Harsh Desert; Extreme Heat Interior; Humid Coast",
            avgTemperature: "26.6°C",
            annualRainfall: "59 mm",
            highestPoint: "Jabal Sawda (3,000 m)",
            lowestPoint: "Red Sea (0 m)",
            coastline: "2,640 km",
            forestCover: "0.5%",
            arableLand: "1.5%",
            terrain: "Mostly desert; mountains in southwest",
            naturalResources: ["Petroleum", "Natural Gas", "Iron Ore", "Gold", "Copper", "Phosphates"]
        },

        geography_links: {
            rivers: [],
            mountains: ["Sarawat Mountains", "Jabal Sawda", "Hejaz Mountains", "Asir Mountains"],
            deserts: ["Rub al Khali (Empty Quarter)", "An Nafud", "Ad Dahna"],
            forests: ["Asir Juniper Forests"],
            oceans: ["Red Sea", "Persian Gulf", "Gulf of Aqaba"]
        },

        culture: {
            officialLanguages: ["Arabic"],
            languages: ["Arabic"],
            religions: ["Islam (93% - Sunni 85-90%, Shia 10-15%)", "Others (7%)"],
            heritageSites: ["Al-Hijr Archaeological Site (Madain Salih)", "At-Turaif District in ad-Dir'iyah", "Historic Jeddah", "Rock Art in Hail", "Al-Ahsa Oasis", "Ḥimā Cultural Area"],
            festivals: ["Eid al-Fitr", "Eid al-Adha", "National Day", "Founding Day", "Janadriyah Festival"],
            cuisine: ["Kabsa", "Mandi", "Jareesh", "Mutabbaq", "Shawarma", "Kunafa"],
            arts: ["Calligraphy", "Poetry", "Ardah Dance", "Traditional Music", "Sadu Weaving"],
            sports: ["Football", "Camel Racing", "Falconry", "Horse Racing", "Basketball"]
        },

        symbols: {
            bird: "Falcon",
            animal: "Arabian Camel",
            flower: "None official",
            tree: "Date Palm",
            anthem: "Aash Al Maleek",
            motto: "There is no god but Allah; Muhammad is the Messenger of Allah"
        },

        demographics: {
            lifeExpectancy: 76.90,
            literacyRate: "97.6%",
            urbanPopulation: "84.7%",
            medianAge: 31.8
        },

        history: {
            timeline: [
                { year: "610 CE", title: "Birth of Islam", description: "Prophet Muhammad received first revelation" },
                { year: "622", title: "Hijra", description: "Migration to Medina; Islamic calendar begins" },
                { year: "1744", title: "First Saudi State", description: "Muhammad ibn Saud and Muhammad ibn Abd al-Wahhab alliance" },
                { year: "1902", title: "Recapture of Riyadh", description: "Abdulaziz captured Riyadh" },
                { year: "1932", title: "Kingdom Founded", description: "Kingdom of Saudi Arabia unified" },
                { year: "1938", title: "Oil Discovery", description: "Oil discovered at Dammam" },
                { year: "1973", title: "Oil Embargo", description: "OPEC oil embargo" },
                { year: "2016", title: "Vision 2030", description: "Economic transformation plan launched" }
            ],
            notableFigures: ["King Abdulaziz Ibn Saud", "King Faisal", "King Abdullah", "Crown Prince Mohammed bin Salman"]
        },

        disputes: [],

        quickFacts: [
            { icon: "kaaba", title: "Holy Cities", text: "Mecca and Medina - Islam's holiest sites" },
            { icon: "oil-can", title: "Oil Giant", text: "World's largest oil exporter and reserves" },
            { icon: "desert", title: "Largest Desert", text: "Rub al Khali - world's largest sand desert" },
            { icon: "rocket", title: "Vision 2030", text: "Economic diversification transformation" },
            { icon: "city", title: "NEOM", text: "Futuristic $500 billion mega-city project" }
        ]
    },

    // 12. SYRIA
    {
        id: "SYR",
        name: "Syria",
        officialName: "Syrian Arab Republic",
        flag: "https://flagcdn.com/w320/sy.png",
        
        images: {
            hero: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=1920&q=80",
            landscape: "https://images.unsplash.com/photo-1578895101408-1a36b834405b?w=1920&q=80",
            city: "https://images.unsplash.com/photo-1569500278091-feadb17f0bcf?w=1920&q=80"
        },

        basic: {
            capital: "Damascus",
            continent: "Asia",
            region: "Middle East",
            subregion: "Western Asia",
            population: 23227014,
            area: 185180,
            populationDensity: 103,
            independence: "1946",
            callingCode: "+963",
            tld: ".sy",
            drivingSide: "Right",
            electricity: "220V, 50Hz"
        },

        location: {
            coordinates: [34.8021, 38.9968],
            timezone: "UTC+2 (EET)",
            neighbors: ["Turkey", "Iraq", "Jordan", "Israel", "Lebanon"],
            borders: 2363,
            hemispheres: ["Northern", "Eastern"]
        },

        political: {
            government: "Transitional Government (post-Assad)",
            headOfState: "Transitional Leadership",
            headOfGovernment: "Transitional Prime Minister",
            legislature: "People's Assembly (suspended)",
            legalSystem: "Mixed Civil Law and Islamic Law",
            states: 14,
            governorates: 14,
            largestCity: "Aleppo",
            organizations: ["UN", "Arab League (suspended 2011-2023)", "OIC", "NAM"]
        },

        economy: {
            gdp: "$9 Billion",
            gdpPPP: "$50.3 Billion",
            gdpPerCapita: "$407",
            gdpRank: "#134",
            gdpGrowth: "1.5%",
            currency: "Syrian Pound",
            currencyCode: "SYP",
            currencySymbol: "£S",
            inflation: "139%",
            unemployment: "50%",
            majorSectors: ["Services (48%)", "Industry (23%)", "Agriculture (17%)"],
            industries: ["Petroleum", "Textiles", "Food Processing", "Beverages", "Tobacco", "Phosphate Rock Mining"],
            exports: ["Mineral Fuels", "Spices", "Olive Oil", "Fruits", "Grains"],
            imports: ["Machinery", "Transport Equipment", "Food", "Livestock", "Metal Products"]
        },

        geography: {
            climate: "Mediterranean Coast; Arid Desert East; Cold Mountains",
            avgTemperature: "17.4°C",
            annualRainfall: "252 mm",
            highestPoint: "Mount Hermon (2,814 m)",
            lowestPoint: "Lake Tiberias (-200 m)",
            coastline: "193 km",
            forestCover: "2.7%",
            arableLand: "25.4%",
            terrain: "Coastal plain; mountains; interior desert plateau",
            naturalResources: ["Petroleum", "Phosphates", "Chrome", "Manganese", "Asphalt", "Iron Ore", "Salt", "Marble"]
        },

        geography_links: {
            rivers: ["Euphrates", "Orontes", "Barada", "Khabur", "Tigris"],
            mountains: ["Mount Hermon", "Anti-Lebanon Mountains", "Jabal an Nusayriyah", "Jabal al Arab"],
            deserts: ["Syrian Desert", "Badiya ash Sham"],
            forests: ["Latakia Coastal Forests", "Anti-Lebanon Forests"],
            oceans: ["Mediterranean Sea"]
        },

        culture: {
            officialLanguages: ["Arabic"],
            languages: ["Arabic", "Kurdish", "Armenian", "Aramaic", "Circassian"],
            religions: ["Islam (87% - Sunni 74%, Alawite 11%, Shia 2%)", "Christianity (10%)", "Druze (3%)"],
            heritageSites: ["Ancient City of Damascus", "Ancient City of Bosra", "Site of Palmyra", "Ancient City of Aleppo", "Crac des Chevaliers", "Ancient Villages of Northern Syria"],
            festivals: ["Eid al-Fitr", "Eid al-Adha", "Independence Day", "Revolution Day", "Christmas"],
            cuisine: ["Kibbeh", "Fattoush", "Shawarma", "Muhammara", "Baklava", "Kebab Halabi"],
            arts: ["Calligraphy", "Mosaic Art", "Damask Weaving", "Traditional Music", "Dabke Dance"],
            sports: ["Football", "Basketball", "Swimming", "Volleyball"]
        },

        symbols: {
            bird: "None official",
            animal: "None official",
            flower: "Jasmine",
            tree: "None official",
            anthem: "Humat ad-Diyar",
            motto: "None official"
        },

        demographics: {
            lifeExpectancy: 72.70,
            literacyRate: "86.4%",
            urbanPopulation: "56.1%",
            medianAge: 24.3
        },

        history: {
            timeline: [
                { year: "3000 BCE", title: "Ancient Civilizations", description: "Ebla, Mari, and other city-states" },
                { year: "64 BCE", title: "Roman Province", description: "Became Roman province" },
                { year: "636 CE", title: "Islamic Conquest", description: "Arab Muslims conquered region" },
                { year: "661", title: "Umayyad Caliphate", description: "Damascus capital of Umayyad Caliphate" },
                { year: "1516", title: "Ottoman Rule", description: "Ottoman Empire took control" },
                { year: "1920", title: "French Mandate", description: "League of Nations mandate" },
                { year: "1946", title: "Independence", description: "Full independence from France" },
                { year: "1970", title: "Assad Era", description: "Hafez al-Assad took power" },
                { year: "2000", title: "Bashar al-Assad", description: "Current president assumed power" },
                { year: "2011", title: "Civil War", description: "Syrian Civil War began during Arab Spring" },
                { year: "2024", title: "Assad Fell", description: "Assad regime collapsed in December" }
            ],
            notableFigures: ["Hafez al-Assad", "Bashar al-Assad", "Saladin", "Queen Zenobia"]
        },

        disputes: [
            { name: "Golan Heights", description: "Occupied by Israel since 1967", type: "Territory" },
            { name: "Hatay Province", description: "Claimed from Turkey", type: "Territory" }
        ],

        quickFacts: [
            { icon: "city", title: "Damascus", text: "World's oldest continuously inhabited capital" },
            { icon: "monument", title: "Palmyra", text: "Ancient Roman city and UNESCO site (damaged)" },
            { icon: "scroll", title: "Alphabet Origin", text: "Ugaritic alphabet precursor to modern alphabets" },
            { icon: "water", title: "Euphrates", text: "Cradle of civilization along Euphrates" },
            { icon: "cross", title: "St. Paul", text: "Site of St. Paul's conversion to Christianity" }
        ]
    },

    // 13. TURKEY
    {
        id: "TUR",
        name: "Turkey",
        officialName: "Republic of Türkiye",
        flag: "https://flagcdn.com/w320/tr.png",
        
        images: {
            hero: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=1920&q=80",
            landscape: "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?w=1920&q=80",
            city: "https://images.unsplash.com/photo-1527838832700-5059252407fa?w=1920&q=80"
        },

        basic: {
            capital: "Ankara",
            continent: "Asia/Europe",
            region: "Middle East / Southeast Europe",
            subregion: "Western Asia",
            population: 85372377,
            area: 783562,
            populationDensity: 110,
            independence: "1923",
            callingCode: "+90",
            tld: ".tr",
            drivingSide: "Right",
            electricity: "220V, 50Hz"
        },

        location: {
            coordinates: [38.9637, 35.2433],
            timezone: "UTC+3 (TRT)",
            neighbors: ["Greece", "Bulgaria", "Georgia", "Armenia", "Azerbaijan", "Iran", "Iraq", "Syria"],
            borders: 2816,
            hemispheres: ["Northern", "Eastern"]
        },

        political: {
            government: "Unitary Presidential Constitutional Republic",
            headOfState: "President Recep Tayyip Erdoğan",
            headOfGovernment: "President Recep Tayyip Erdoğan",
            legislature: "Grand National Assembly",
            legalSystem: "Civil Law",
            states: 81,
            provinces: 81,
            largestCity: "Istanbul",
            organizations: ["UN", "NATO", "OECD", "G20", "OIC", "Council of Europe", "WTO"]
        },

        economy: {
            gdp: "$1.15 Trillion",
            gdpPPP: "$3.32 Trillion",
            gdpPerCapita: "$13,655",
            gdpRank: "#17",
            gdpGrowth: "4.5%",
            currency: "Turkish Lira",
            currencyCode: "TRY",
            currencySymbol: "₺",
            inflation: "64.8%",
            unemployment: "10.2%",
            majorSectors: ["Services (54%)", "Industry (32%)", "Agriculture (6%)"],
            industries: ["Textiles", "Food Processing", "Automotive", "Electronics", "Mining", "Steel", "Petroleum", "Construction", "Lumber"],
            exports: ["Cars", "Jewelry", "Vehicle Parts", "Refined Petroleum", "Delivery Trucks"],
            imports: ["Gold", "Refined Petroleum", "Scrap Iron", "Cars", "Vehicle Parts"]
        },

        geography: {
            climate: "Mediterranean Coast; Continental Interior; Oceanic Black Sea",
            avgTemperature: "11.1°C",
            annualRainfall: "642 mm",
            highestPoint: "Mount Ararat (5,137 m)",
            lowestPoint: "Mediterranean Sea (0 m)",
            coastline: "7,200 km",
            forestCover: "14.7%",
            arableLand: "26.7%",
            terrain: "High central plateau; narrow coastal plain; mountains",
            naturalResources: ["Coal", "Iron Ore", "Copper", "Chromium", "Antimony", "Mercury", "Gold", "Barite", "Borate", "Marble"]
        },

        geography_links: {
            rivers: ["Euphrates", "Tigris", "Kizilirmak", "Sakarya", "Menderes"],
            mountains: ["Mount Ararat", "Taurus Mountains", "Pontic Mountains", "Mount Erciyes", "Kaçkar Mountains"],
            deserts: ["Konya Basin Semi-arid Region"],
            forests: ["Black Sea Forests", "Mediterranean Forests", "Anatolian Forests"],
            oceans: ["Black Sea", "Mediterranean Sea", "Aegean Sea", "Sea of Marmara", "Bosphorus Strait"]
        },

        culture: {
            officialLanguages: ["Turkish"],
            languages: ["Turkish", "Kurdish", "Arabic", "Zazaki"],
            religions: ["Islam (99% - mostly Sunni)", "Christianity (0.2%)", "Others (0.8%)"],
            heritageSites: ["Historic Areas of Istanbul", "Göreme and Cappadocia", "Great Mosque and Hospital of Divriği", "Hattusha", "Nemrut Dağ", "Hierapolis-Pamukkale", "Ephesus", "Troy"],
            festivals: ["Ramadan Bayram", "Kurban Bayram", "Republic Day", "Victory Day", "Youth and Sports Day"],
            cuisine: ["Kebab", "Baklava", "Döner", "Meze", "Lahmacun", "Pide", "Turkish Delight", "Turkish Coffee"],
            arts: ["Calligraphy", "Miniature Painting", "Carpet Weaving", "Whirling Dervishes", "Turkish Music", "Ebru Art"],
            sports: ["Football", "Basketball", "Volleyball", "Wrestling", "Oil Wrestling"]
        },

        symbols: {
            bird: "Redwing",
            animal: "Gray Wolf",
            flower: "Tulip",
            tree: "Anatolian Chestnut",
            anthem: "İstiklal Marşı",
            motto: "Peace at Home, Peace in the World"
        },

        demographics: {
            lifeExpectancy: 78.35,
            literacyRate: "96.7%",
            urbanPopulation: "76.8%",
            medianAge: 33.1
        },

        history: {
            timeline: [
                { year: "1299", title: "Ottoman Empire", description: "Ottoman Empire founded" },
                { year: "1453", title: "Constantinople", description: "Conquered Constantinople (Istanbul)" },
                { year: "1683", title: "Peak Empire", description: "Ottoman Empire at peak" },
                { year: "1914-1918", title: "World War I", description: "Ottoman Empire sided with Central Powers" },
                { year: "1919-1922", title: "Independence War", description: "Turkish War of Independence" },
                { year: "1923", title: "Republic", description: "Republic of Turkey proclaimed" },
                { year: "1952", title: "NATO", description: "Joined NATO" },
                { year: "2016", title: "Coup Attempt", description: "Failed military coup attempt" }
            ],
            notableFigures: ["Mustafa Kemal Atatürk", "Süleyman the Magnificent", "Mehmed II", "Recep Tayyip Erdoğan"]
        },

        disputes: [
            { name: "Cyprus", description: "Division of Cyprus since 1974", type: "Territory" },
            { name: "Aegean Dispute", description: "Territorial waters with Greece", type: "Maritime" },
            { name: "Kurdish Issue", description: "Kurdish autonomy tensions", type: "Internal" }
        ],

        quickFacts: [
            { icon: "globe", title: "Transcontinental", text: "Only country spanning Europe and Asia" },
            { icon: "mosque", title: "Hagia Sophia", text: "1,500-year-old architectural marvel" },
            { icon: "hot-air-balloon", title: "Cappadocia", text: "Famous for hot air balloon rides" },
            { icon: "city", title: "Troy", text: "Legendary city of Trojan War located here" },
            { icon: "coffee", title: "Turkish Coffee", text: "UNESCO Intangible Cultural Heritage" }
        ]
    },

    // 14. UNITED ARAB EMIRATES
    {
        id: "ARE",
        name: "United Arab Emirates",
        officialName: "United Arab Emirates",
        flag: "https://flagcdn.com/w320/ae.png",
        
        images: {
            hero: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1920&q=80",
            landscape: "https://images.unsplash.com/photo-1559628376-f3fe5f782a2e?w=1920&q=80",
            city: "https://images.unsplash.com/photo-1518684079-3c830dcef090?w=1920&q=80"
        },

        basic: {
            capital: "Abu Dhabi",
            continent: "Asia",
            region: "Middle East",
            subregion: "Western Asia",
            population: 9516871,
            area: 83600,
            populationDensity: 118,
            independence: "1971",
            callingCode: "+971",
            tld: ".ae",
            drivingSide: "Right",
            electricity: "220V, 50Hz"
        },

        location: {
            coordinates: [23.4241, 53.8478],
            timezone: "UTC+4 (GST)",
            neighbors: ["Saudi Arabia", "Oman"],
            borders: 1066,
            hemispheres: ["Northern", "Eastern"]
        },

        political: {
            government: "Federal Constitutional Elective Monarchy",
            headOfState: "President Sheikh Mohamed bin Zayed Al Nahyan",
            headOfGovernment: "Prime Minister Sheikh Mohammed bin Rashid Al Maktoum",
            legislature: "Federal National Council",
            legalSystem: "Mixed Civil Law and Islamic Law",
            states: 7,
            emirates: 7,
            largestCity: "Dubai",
            organizations: ["UN", "GCC", "Arab League", "OPEC", "OIC", "WTO"]
        },

        economy: {
            gdp: "$509 Billion",
            gdpPPP: "$795 Billion",
            gdpPerCapita: "$53,758",
            gdpRank: "#31",
            gdpGrowth: "3.6%",
            currency: "UAE Dirham",
            currencyCode: "AED",
            currencySymbol: "د.إ",
            inflation: "4.8%",
            unemployment: "3.4%",
            majorSectors: ["Services (49%)", "Industry (Oil 30%)", "Construction (9%)"],
            industries: ["Petroleum", "Petrochemicals", "Fishing", "Aluminum", "Cement", "Fertilizers", "Ship Repair", "Construction Materials"],
            exports: ["Crude Petroleum", "Gold", "Broadcasting Equipment", "Diamonds", "Refined Petroleum"],
            imports: ["Gold", "Broadcasting Equipment", "Jewelry", "Cars", "Refined Petroleum"]
        },

        geography: {
            climate: "Arid; Hot Humid Summers; Cooler Winters",
            avgTemperature: "28°C",
            annualRainfall: "78 mm",
            highestPoint: "Jebel Jais (1,934 m)",
            lowestPoint: "Persian Gulf (0 m)",
            coastline: "1,318 km",
            forestCover: "3.8%",
            arableLand: "0.5%",
            terrain: "Flat coastal plain merging into rolling sand dunes; mountains in east",
            naturalResources: ["Petroleum", "Natural Gas"]
        },

        geography_links: {
            rivers: [],
            mountains: ["Hajar Mountains", "Jebel Jais", "Jebel Hafeet"],
            deserts: ["Rub al Khali", "Arabian Desert", "Liwa Oasis"],
            forests: ["Mangrove Forests"],
            oceans: ["Persian Gulf", "Gulf of Oman", "Strait of Hormuz"]
        },

        culture: {
            officialLanguages: ["Arabic"],
            languages: ["Arabic", "English", "Hindi", "Urdu", "Persian", "Tagalog"],
            religions: ["Islam (76% - Sunni 85%, Shia 15%)", "Christianity (9%)", "Hinduism (6%)", "Buddhism (2%)"],
            heritageSites: ["Cultural Sites of Al Ain", "Khor Dubai"],
            festivals: ["Eid al-Fitr", "Eid al-Adha", "National Day", "Dubai Shopping Festival", "Abu Dhabi Festival"],
            cuisine: ["Machboos", "Harees", "Thareed", "Al Madrooba", "Luqaimat", "Khuzi"],
            arts: ["Falconry", "Pearl Diving Heritage", "Sadu Weaving", "Traditional Music", "Yowla Dance"],
            sports: ["Football", "Cricket", "Camel Racing", "Falconry", "Horse Racing", "Formula 1"]
        },

        symbols: {
            bird: "Falcon",
            animal: "Arabian Oryx",
            flower: "Tribulus omanense",
            tree: "Ghaf Tree",
            anthem: "Ishy Bilady",
            motto: "None official"
        },

        demographics: {
            lifeExpectancy: 79.23,
            literacyRate: "98%",
            urbanPopulation: "87.4%",
            medianAge: 33.7
        },

        history: {
            timeline: [
                { year: "630 CE", title: "Islam", description: "Region embraced Islam" },
                { year: "1820", title: "British Treaties", description: "Trucial States treaties with Britain" },
                { year: "1952", title: "Trucial Council", description: "Trucial States Council formed" },
                { year: "1968", title: "Federation Plans", description: "Plans for federation began" },
                { year: "1971", title: "Independence", description: "UAE formed from seven emirates" },
                { year: "2004", title: "Sheikh Khalifa", description: "Sheikh Khalifa became President" },
                { year: "2020", title: "Abraham Accords", description: "Normalized relations with Israel" },
                { year: "2022", title: "Sheikh Mohamed", description: "Current President took office" }
            ],
            notableFigures: ["Sheikh Zayed bin Sultan Al Nahyan", "Sheikh Rashid bin Saeed Al Maktoum", "Sheikh Mohammed bin Rashid Al Maktoum"]
        },

        disputes: [
            { name: "Islands Dispute", description: "Iran claims Abu Musa and Tunbs islands", type: "Territory" }
        ],

        quickFacts: [
            { icon: "building", title: "Burj Khalifa", text: "World's tallest building (828 m)" },
            { icon: "plane", title: "Emirates", text: "Largest international airline operator" },
            { icon: "island", title: "Palm Jumeirah", text: "World's largest artificial island" },
            { icon: "users", title: "Expat Nation", text: "88.5% of population are expatriates" },
            { icon: "rocket", title: "Mars Mission", text: "First Arab Mars mission (Hope Probe 2021)" }
        ]
    },

    // 15. YEMEN
    {
        id: "YEM",
        name: "Yemen",
        officialName: "Republic of Yemen",
        flag: "https://flagcdn.com/w320/ye.png",
        
        images: {
            hero: "https://images.unsplash.com/photo-1580674285054-bed31e145f59?w=1920&q=80",
            landscape: "https://images.unsplash.com/photo-1591608971362-f08b2a75701b?w=1920&q=80",
            city: "https://images.unsplash.com/photo-1580492516014-4a28466d55df?w=1920&q=80"
        },

        basic: {
            capital: "Sanaa (Houthi control); Aden (government seat)",
            continent: "Asia",
            region: "Middle East",
            subregion: "Western Asia",
            population: 34449825,
            area: 527968,
            populationDensity: 56,
            independence: "1918 (North); 1967 (South); Unified 1990",
            callingCode: "+967",
            tld: ".ye",
            drivingSide: "Right",
            electricity: "230V, 50Hz"
        },

        location: {
            coordinates: [15.5527, 48.5164],
            timezone: "UTC+3 (AST)",
            neighbors: ["Saudi Arabia", "Oman"],
            borders: 1601,
            hemispheres: ["Northern", "Eastern"]
        },

        political: {
            government: "Presidential Republic (civil war ongoing)",
            headOfState: "Presidential Leadership Council",
            headOfGovernment: "Prime Minister Ahmed Awad bin Mubarak",
            legislature: "House of Representatives",
            legalSystem: "Mixed Islamic Law and Civil Law",
            states: 22,
            governorates: 22,
            largestCity: "Sanaa",
            organizations: ["UN", "Arab League", "OIC", "NAM"]
        },

        economy: {
            gdp: "$21.1 Billion",
            gdpPPP: "$73.6 Billion",
            gdpPerCapita: "$648",
            gdpRank: "#119",
            gdpGrowth: "-2.0%",
            currency: "Yemeni Rial",
            currencyCode: "YER",
            currencySymbol: "﷼",
            inflation: "50%",
            unemployment: "27%",
            majorSectors: ["Services (50%)", "Industry (30%)", "Agriculture (17%)"],
            industries: ["Crude Oil", "Cotton Textiles", "Leather Goods", "Food Processing", "Handicrafts", "Aluminum Products", "Cement"],
            exports: ["Crude Petroleum", "Gold", "Scrap Iron", "Fish", "Dried Legumes"],
            imports: ["Wheat", "Refined Petroleum", "Rice", "Cars", "Raw Sugar"]
        },

        geography: {
            climate: "Desert Lowlands; Temperate Highlands; Hot Humid Coast",
            avgTemperature: "23.7°C",
            annualRainfall: "127-500 mm (varies by region)",
            highestPoint: "Jabal an Nabi Shuayb (3,666 m)",
            lowestPoint: "Arabian Sea (0 m)",
            coastline: "1,906 km",
            forestCover: "1.0%",
            arableLand: "2.2%",
            terrain: "Narrow coastal plain; mountains; interior desert",
            naturalResources: ["Petroleum", "Fish", "Rock Salt", "Marble", "Small Deposits of Coal, Gold, Lead, Nickel, Copper"]
        },

        geography_links: {
            rivers: ["Wadi Hadramawt", "Wadi Bana", "Wadi Tuban", "Wadi Zabid"],
            mountains: ["Jabal an Nabi Shuayb", "Sarawat Mountains", "Yemen Highlands"],
            deserts: ["Rub al Khali", "Ramlat al Sabatayn"],
            forests: ["Dragon Blood Tree Forests (Socotra)"],
            oceans: ["Red Sea", "Gulf of Aden", "Arabian Sea", "Bab el Mandeb Strait"]
        },

        culture: {
            officialLanguages: ["Arabic"],
            languages: ["Arabic", "Mehri", "Soqotri"],
            religions: ["Islam (99.1% - Sunni 65%, Shia Zaidi 35%)", "Others (0.9%)"],
            heritageSites: ["Old Walled City of Shibam", "Old City of Sanaa", "Historic Town of Zabid", "Socotra Archipelago", "Landmarks of Ancient Kingdom of Saba"],
            festivals: ["Eid al-Fitr", "Eid al-Adha", "Revolution Day", "Unity Day", "National Day"],
            cuisine: ["Saltah", "Fahsa", "Mandi", "Zurbian", "Bint al Sahn", "Ogda"],
            arts: ["Architecture", "Jambiyas (Daggers)", "Silver Jewelry", "Traditional Dance", "Poetry"],
            sports: ["Football", "Camel Jumping", "Traditional Wrestling"]
        },

        symbols: {
            bird: "None official",
            animal: "Arabian Leopard",
            flower: "Coffee Plant",
            tree: "Dragon Blood Tree",
            anthem: "United Republic",
            motto: "Allah, al-Watan, ath-Thawra, al-Wihdah (God, Country, Revolution, Unity)"
        },

        demographics: {
            lifeExpectancy: 67.30,
            literacyRate: "70.1%",
            urbanPopulation: "38.6%",
            medianAge: 20.3
        },

        history: {
            timeline: [
                { year: "1000 BCE", title: "Kingdom of Saba", description: "Queen of Sheba legendary kingdom" },
                { year: "628 CE", title: "Islam", description: "Embraced Islam during Prophet's time" },
                { year: "897", title: "Zaidi Imamate", description: "Zaidi Shia dynasty established" },
                { year: "1517", title: "Ottoman Rule", description: "Ottoman Empire took control" },
                { year: "1918", title: "North Independence", description: "North Yemen independent" },
                { year: "1967", title: "South Independence", description: "South Yemen independent from Britain" },
                { year: "1990", title: "Unification", description: "North and South unified" },
                { year: "2011", title: "Arab Spring", description: "President Saleh ousted" },
                { year: "2014", title: "Civil War", description: "Houthi takeover; civil war began" }
            ],
            notableFigures: ["Queen of Sheba", "Ali Abdullah Saleh", "Abdrabbuh Mansur Hadi"]
        },

        disputes: [
            { name: "Civil War", description: "Ongoing conflict with Houthi rebels", type: "Internal" },
            { name: "Maritime Border", description: "Disputes with Eritrea", type: "Maritime" }
        ],

        quickFacts: [
            { icon: "coffee", title: "Coffee Origin", text: "Coffee (Mocha) originated here" },
            { icon: "island", title: "Socotra", text: "Alien-like Dragon Blood Trees on Socotra Island" },
            { icon: "building", title: "Shibam", text: "'Manhattan of Desert' - ancient mud skyscrapers" },
            { icon: "crown", title: "Queen of Sheba", text: "Legendary Queen of Sheba ruled from here" },
            { icon: "water", title: "Bab el Mandeb", text: "Strategic strait connecting Red Sea to Indian Ocean" }
        ]
    },

    // 16. ARMENIA
    {
        id: "ARM",
        name: "Armenia",
        officialName: "Republic of Armenia",
        flag: "https://flagcdn.com/w320/am.png",
        
        images: {
            hero: "https://images.unsplash.com/photo-1597422618039-68a1b7b23d8f?w=1920&q=80",
            landscape: "https://images.unsplash.com/photo-1574168867224-e5d62f175fd1?w=1920&q=80",
            city: "https://images.unsplash.com/photo-1598967116506-e8e96e9d55e7?w=1920&q=80"
        },

        basic: {
            capital: "Yerevan",
            continent: "Asia",
            region: "South Caucasus",
            subregion: "Western Asia",
            population: 2777970,
            area: 29743,
            populationDensity: 104,
            independence: "1991",
            callingCode: "+374",
            tld: ".am",
            drivingSide: "Right",
            electricity: "220V, 50Hz"
        },

        location: {
            coordinates: [40.0691, 45.0382],
            timezone: "UTC+4 (AMT)",
            neighbors: ["Georgia", "Azerbaijan", "Iran", "Turkey"],
            borders: 1570,
            hemispheres: ["Northern", "Eastern"]
        },

        political: {
            government: "Unitary Parliamentary Republic",
            headOfState: "President Vahagn Khachaturyan",
            headOfGovernment: "Prime Minister Nikol Pashinyan",
            legislature: "National Assembly",
            legalSystem: "Civil Law",
            states: 11,
            provinces: 10,
            largestCity: "Yerevan",
            organizations: ["UN", "CSTO", "EAEU", "CIS", "Council of Europe", "OSCE"]
        },

        economy: {
            gdp: "$24.2 Billion",
            gdpPPP: "$50.4 Billion",
            gdpPerCapita: "$8,621",
            gdpRank: "#108",
            gdpGrowth: "12.6%",
            currency: "Armenian Dram",
            currencyCode: "AMD",
            currencySymbol: "֏",
            inflation: "8.6%",
            unemployment: "13.5%",
            majorSectors: ["Services (55%)", "Industry (25%)", "Agriculture (11%)"],
            industries: ["Diamond Processing", "Metal-Cutting Machine Tools", "Electric Motors", "Tires", "Knitted Wear", "Hosiery", "Shoes", "Silk Fabric", "Chemicals", "Trucks"],
            exports: ["Copper Ore", "Gold", "Diamonds", "Iron Alloys", "Brandy"],
            imports: ["Natural Gas", "Petroleum", "Cars", "Wheat", "Diamonds"]
        },

        geography: {
            climate: "Highland Continental; Hot Summers; Cold Winters",
            avgTemperature: "5.5°C",
            annualRainfall: "592 mm",
            highestPoint: "Mount Aragats (4,090 m)",
            lowestPoint: "Debed River (400 m)",
            coastline: "0 km (Landlocked)",
            forestCover: "11.2%",
            arableLand: "15.8%",
            terrain: "Armenian Highlands with mountains; little forest; fast flowing rivers; good soil in Aras River valley",
            naturalResources: ["Small Deposits of Gold, Copper, Molybdenum, Zinc, Bauxite"]
        },

        geography_links: {
            rivers: ["Arax River", "Hrazdan River", "Debed River", "Vorotan River"],
            mountains: ["Mount Aragats", "Mount Azhdahak", "Lesser Caucasus", "Armenian Highland"],
            deserts: [],
            forests: ["Dilijan National Park", "Khosrov Forest State Reserve"],
            oceans: []
        },

        culture: {
            officialLanguages: ["Armenian"],
            languages: ["Armenian", "Russian", "Yezidi"],
            religions: ["Armenian Apostolic (92.6%)", "Evangelical (1%)", "Other Christian (2.4%)"],
            heritageSites: ["Monasteries of Haghpat and Sanahin", "Cathedral and Churches of Echmiatsin", "Monastery of Geghard", "Temple of Garni"],
            festivals: ["New Year", "Christmas (January 6)", "Vardavar", "Wine Festival", "Independence Day"],
            cuisine: ["Dolma", "Khorovats", "Lavash", "Harissa", "Ghapama", "Gata"],
            arts: ["Khachkar Stone Carving", "Carpet Weaving", "Miniature Painting", "Duduk Music", "Traditional Dance"],
            sports: ["Chess", "Wrestling", "Weightlifting", "Football", "Boxing"]
        },

        symbols: {
            bird: "Golden Eagle",
            animal: "None official",
            flower: "Forget-me-not",
            tree: "Apricot Tree",
            anthem: "Mer Hayrenik",
            motto: "None official"
        },

        demographics: {
            lifeExpectancy: 75.91,
            literacyRate: "99.8%",
            urbanPopulation: "63.7%",
            medianAge: 37.6
        },

        history: {
            timeline: [
                { year: "860 BCE", title: "Kingdom of Urartu", description: "Ancient kingdom in Armenian Highlands" },
                { year: "331 BCE", title: "Alexander", description: "Armenian Satrapy under Alexander" },
                { year: "301 CE", title: "First Christian Nation", description: "First nation to adopt Christianity as state religion" },
                { year: "1045", title: "Byzantine Rule", description: "Fell to Byzantine Empire" },
                { year: "1375", title: "Cilician Armenia", description: "Last Armenian kingdom fell" },
                { year: "1828", title: "Russian Rule", description: "Eastern Armenia annexed by Russia" },
                { year: "1915", title: "Genocide", description: "Armenian Genocide by Ottoman Empire" },
                { year: "1918", title: "First Republic", description: "First Republic of Armenia declared" },
                { year: "1991", title: "Independence", description: "Independence from Soviet Union" },
                { year: "2020", title: "Nagorno-Karabakh War", description: "Conflict with Azerbaijan" }
            ],
            notableFigures: ["Tigranes the Great", "Mesrop Mashtots", "Komitas", "William Saroyan", "Aram Khachaturian"]
        },

        disputes: [
            { name: "Nagorno-Karabakh", description: "Territorial conflict with Azerbaijan (resolved 2023)", type: "Territory" },
            { name: "Turkish Border", description: "Closed border with Turkey", type: "Border" }
        ],

        quickFacts: [
            { icon: "cross", title: "First Christian Nation", text: "First country to adopt Christianity (301 AD)" },
            { icon: "mountain", title: "Mount Ararat", text: "Biblical Noah's Ark landing site (now in Turkey)" },
            { icon: "book", title: "Alphabet", text: "Unique Armenian alphabet created 405 AD" },
            { icon: "chess", title: "Chess Nation", text: "Chess is mandatory subject in schools" },
            { icon: "bread", title: "Lavash", text: "Traditional flatbread (UNESCO heritage)" }
        ]
    },

    // 17. AZERBAIJAN
    {
        id: "AZE",
        name: "Azerbaijan",
        officialName: "Republic of Azerbaijan",
        flag: "https://flagcdn.com/w320/az.png",
        
        images: {
            hero: "https://images.unsplash.com/photo-1565552645632-d725f8bfc19a?w=1920&q=80",
            landscape: "https://images.unsplash.com/photo-1565552645632-d725f8bfc19a?w=1920&q=80",
            city: "https://images.unsplash.com/photo-1565552645632-d725f8bfc19a?w=1920&q=80"
        },

        basic: {
            capital: "Baku",
            continent: "Asia/Europe",
            region: "South Caucasus",
            subregion: "Western Asia",
            population: 10412651,
            area: 86600,
            populationDensity: 123,
            independence: "1991",
            callingCode: "+994",
            tld: ".az",
            drivingSide: "Right",
            electricity: "220V, 50Hz"
        },

        location: {
            coordinates: [40.1431, 47.5769],
            timezone: "UTC+4 (AZT)",
            neighbors: ["Russia", "Georgia", "Armenia", "Iran", "Turkey"],
            borders: 2468,
            hemispheres: ["Northern", "Eastern"]
        },

        political: {
            government: "Unitary Presidential Republic",
            headOfState: "President Ilham Aliyev",
            headOfGovernment: "Prime Minister Ali Asadov",
            legislature: "National Assembly (Milli Majlis)",
            legalSystem: "Civil Law",
            states: 10,
            regions: 66,
            largestCity: "Baku",
            organizations: ["UN", "CIS", "GUAM", "OIC", "Council of Europe", "NAM"]
        },

        economy: {
            gdp: "$78.7 Billion",
            gdpPPP: "$191 Billion",
            gdpPerCapita: "$7,727",
            gdpRank: "#67",
            gdpGrowth: "4.6%",
            currency: "Azerbaijani Manat",
            currencyCode: "AZN",
            currencySymbol: "₼",
            inflation: "8.8%",
            unemployment: "6.0%",
            majorSectors: ["Industry (Oil & Gas 50%)", "Services (38%)", "Agriculture (6%)"],
            industries: ["Petroleum", "Natural Gas", "Petroleum Products", "Steel", "Iron Ore", "Cement", "Chemicals", "Petrochemicals"],
            exports: ["Crude Petroleum", "Natural Gas", "Refined Petroleum", "Tomatoes", "Gold"],
            imports: ["Machinery", "Foodstuffs", "Metals", "Chemicals"]
        },

        geography: {
            climate: "Dry Subtropical to Continental",
            avgTemperature: "14.5°C",
            annualRainfall: "200-1,700 mm (varies)",
            highestPoint: "Bazardüzü Dağı (4,466 m)",
            lowestPoint: "Caspian Sea (-28 m)",
            coastline: "800 km (Caspian Sea)",
            forestCover: "11.8%",
            arableLand: "22.8%",
            terrain: "Large flat lowland; Great Caucasus Mountains to north; uplands in west",
            naturalResources: ["Petroleum", "Natural Gas", "Iron Ore", "Nonferrous Metals", "Bauxite"]
        },

        geography_links: {
            rivers: ["Kura River", "Aras River", "Gabyrry River"],
            mountains: ["Greater Caucasus", "Lesser Caucasus", "Bazardüzü", "Shahdag"],
            deserts: [],
            forests: ["Hirkan National Park", "Caucasus Forests"],
            oceans: ["Caspian Sea"]
        },

        culture: {
            officialLanguages: ["Azerbaijani"],
            languages: ["Azerbaijani", "Russian", "Armenian", "Lezgin"],
            religions: ["Islam (96.9% - Shia 85%, Sunni 15%)", "Christianity (3%)", "Others (0.1%)"],
            heritageSites: ["Walled City of Baku", "Gobustan Rock Art", "Historic Centre of Sheki"],
            festivals: ["Nowruz", "Ramadan", "Victory Day", "Republic Day", "Independence Day"],
            cuisine: ["Plov", "Dolma", "Kebab", "Kutab", "Piti", "Pakhlava"],
            arts: ["Mugham Music", "Carpet Weaving", "Miniature Painting", "Ashik Traditions", "Tar Music"],
            sports: ["Wrestling", "Football", "Chess", "Judo", "Karate"]
        },

        symbols: {
            bird: "Karabakh Horse",
            animal: "Karabakh Horse",
            flower: "Khari Bulbul",
            tree: "Oak",
            anthem: "Azərbaycan Marşı",
            motto: "None official"
        },

        demographics: {
            lifeExpectancy: 73.65,
            literacyRate: "99.8%",
            urbanPopulation: "57.0%",
            medianAge: 33.9
        },

        history: {
            timeline: [
                { year: "550 BCE", title: "Persian Empire", description: "Part of Achaemenid Empire" },
                { year: "642 CE", title: "Arab Conquest", description: "Islamization began" },
                { year: "1501", title: "Safavid Dynasty", description: "Part of Safavid Persia" },
                { year: "1813", title: "Russian Rule", description: "Northern Azerbaijan to Russia" },
                { year: "1918", title: "First Republic", description: "Azerbaijan Democratic Republic declared" },
                { year: "1920", title: "Soviet Rule", description: "Became Soviet Socialist Republic" },
                { year: "1991", title: "Independence", description: "Independence from Soviet Union" },
                { year: "2020", title: "Karabakh War", description: "Reclaimed Nagorno-Karabakh territories" },
                { year: "2023", title: "Full Control", description: "Full control over Karabakh restored" }
            ],
            notableFigures: ["Nizami Ganjavi", "Heydar Aliyev", "Ilham Aliyev", "Uzeyir Hajibeyov"]
        },

        disputes: [],

        quickFacts: [
            { icon: "fire", title: "Land of Fire", text: "Natural gas fires have burned for centuries" },
            { icon: "oil-can", title: "Oil Pioneer", text: "World's first oil well drilled here (1846)" },
            { icon: "vote", title: "Women's Rights", text: "First Muslim nation to grant women voting rights (1918)" },
            { icon: "flame", title: "Eternal Flame", text: "Yanar Dag - natural gas fire burning 65+ years" },
            { icon: "music", title: "Mugham", text: "UNESCO Intangible Heritage traditional music" }
        ]
    },

    // 18. GEORGIA
    {
        id: "GEO",
        name: "Georgia",
        officialName: "Georgia",
        flag: "https://flagcdn.com/w320/ge.png",
        
        images: {
            hero: "https://images.unsplash.com/photo-1565552645632-d725f8bfc19a?w=1920&q=80",
            landscape: "https://images.unsplash.com/photo-1565552645632-d725f8bfc19a?w=1920&q=80",
            city: "https://images.unsplash.com/photo-1585409677983-0f6c41ca96e1?w=1920&q=80"
        },

        basic: {
            capital: "Tbilisi",
            continent: "Asia/Europe",
            region: "South Caucasus",
            subregion: "Western Asia",
            population: 3728282,
            area: 69700,
            populationDensity: 57,
            independence: "1991",
            callingCode: "+995",
            tld: ".ge",
            drivingSide: "Right",
            electricity: "220V, 50Hz"
        },

        location: {
            coordinates: [42.3154, 43.3569],
            timezone: "UTC+4 (GET)",
            neighbors: ["Russia", "Turkey", "Armenia", "Azerbaijan"],
            borders: 1814,
            hemispheres: ["Northern", "Eastern"]
        },

        political: {
            government: "Unitary Parliamentary Republic",
            headOfState: "President Salome Zourabichvili",
            headOfGovernment: "Prime Minister Irakli Kobakhidze",
            legislature: "Parliament of Georgia",
            legalSystem: "Civil Law",
            states: 9,
            regions: 9,
            autonomousRepublics: 2,
            largestCity: "Tbilisi",
            organizations: ["UN", "Council of Europe", "GUAM", "OSCE", "WTO", "BSEC"]
        },

        economy: {
            gdp: "$30.5 Billion",
            gdpPPP: "$73.2 Billion",
            gdpPerCapita: "$8,159",
            gdpRank: "#100",
            gdpGrowth: "7.5%",
            currency: "Georgian Lari",
            currencyCode: "GEL",
            currencySymbol: "₾",
            inflation: "9.6%",
            unemployment: "17.3%",
            majorSectors: ["Services (64%)", "Industry (21%)", "Agriculture (6%)"],
            industries: ["Steel", "Machine Tools", "Electrical Appliances", "Mining (Manganese, Copper, Gold)", "Chemicals", "Wood Products", "Wine"],
            exports: ["Copper Ore", "Cars", "Ferroalloys", "Wine", "Mineral Water", "Hazelnuts"],
            imports: ["Petroleum", "Cars", "Copper Ore", "Packaged Medicaments", "Refined Petroleum"]
        },

        geography: {
            climate: "Warm Humid Subtropical West; Mediterranean Black Sea Coast; Continental East",
            avgTemperature: "12.8°C",
            annualRainfall: "1,026 mm",
            highestPoint: "Shkhara (5,193 m)",
            lowestPoint: "Black Sea (0 m)",
            coastline: "310 km",
            forestCover: "39.7%",
            arableLand: "5.8%",
            terrain: "Largely mountainous with Greater Caucasus in north and Lesser Caucasus in south; Kolkheti Lowland; Mtkvari River Valley",
            naturalResources: ["Forests", "Hydropower", "Manganese Deposits", "Iron Ore", "Copper", "Minor Coal", "Oil Deposits", "Coastal Climate", "Soils"]
        },

        geography_links: {
            rivers: ["Mtkvari (Kura)", "Rioni", "Enguri", "Alazani"],
            mountains: ["Greater Caucasus", "Lesser Caucasus", "Shkhara", "Kazbek", "Ushba"],
            deserts: [],
            forests: ["Borjomi-Kharagauli National Park", "Kolkheti National Park", "Tusheti Protected Areas"],
            oceans: ["Black Sea"]
        },

        culture: {
            officialLanguages: ["Georgian"],
            languages: ["Georgian", "Abkhazian", "Ossetian", "Armenian", "Azerbaijani"],
            religions: ["Georgian Orthodox (83.4%)", "Islam (10.7%)", "Armenian Apostolic (2.9%)"],
            heritageSites: ["Historical Monuments of Mtskheta", "Gelati Monastery", "Upper Svaneti", "Colchic Rainforests"],
            festivals: ["Tbilisoba", "Rtveli (Wine Harvest)", "Orthodox Christmas", "Independence Day", "Giorgoba"],
            cuisine: ["Khachapuri", "Khinkali", "Lobio", "Satsivi", "Churchkhela", "Badrijani"],
            arts: ["Polyphonic Singing", "Chokha (National Dress)", "Cloisonné", "Carpet Weaving", "Traditional Dance"],
            sports: ["Rugby", "Football", "Wrestling", "Judo", "Weightlifting"]
        },

        symbols: {
            bird: "Common Pheasant",
            animal: "None official",
            flower: "None official",
            tree: "Oak",
            anthem: "Tavisupleba",
            motto: "Strength is in Unity"
        },

        demographics: {
            lifeExpectancy: 74.52,
            literacyRate: "99.6%",
            urbanPopulation: "60.2%",
            medianAge: 38.6
        },

        history: {
            timeline: [
                { year: "1000 BCE", title: "Colchis", description: "Ancient Kingdom of Colchis (Golden Fleece)" },
                { year: "326 CE", title: "Christianity", description: "Christianity became state religion" },
                { year: "1008", title: "Unified Kingdom", description: "Bagrationi dynasty unified Georgia" },
                { year: "1184-1213", title: "Golden Age", description: "Queen Tamar's reign - Georgian Golden Age" },
                { year: "1801", title: "Russian Annexation", description: "Annexed by Russian Empire" },
                { year: "1918", title: "First Republic", description: "Democratic Republic of Georgia declared" },
                { year: "1921", title: "Soviet Georgia", description: "Became Soviet Socialist Republic" },
                { year: "1991", title: "Independence", description: "Independence from Soviet Union" },
                { year: "2008", title: "Russia War", description: "War with Russia over South Ossetia" }
            ],
            notableFigures: ["Queen Tamar", "Shota Rustaveli", "Joseph Stalin", "Eduard Shevardnadze", "Mikheil Saakashvili"]
        },

        disputes: [
            { name: "Abkhazia", description: "Breakaway region backed by Russia", type: "Territory" },
            { name: "South Ossetia", description: "Breakaway region backed by Russia", type: "Territory" }
        ],

        quickFacts: [
            { icon: "wine", title: "Wine Origin", text: "8,000-year wine-making tradition - oldest in world" },
            { icon: "book", title: "Unique Alphabet", text: "One of 14 unique alphabets in world" },
            { icon: "cross", title: "Early Christianity", description: "Second nation to adopt Christianity (337 AD)" },
            { icon: "mountain", title: "Prometheus Cave", text: "One of world's largest cave systems" },
            { icon: "user", title: "Stalin", text: "Joseph Stalin born in Gori, Georgia" }
        ]
    }
];

// Export for Node.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CountriesData3;
}

// Export for Browser
if (typeof window !== 'undefined') {
    window.CountriesData3 = CountriesData3;
}
