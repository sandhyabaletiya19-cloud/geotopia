/**
 * Encyclopedia Data - File 5
 * Contains: Northern Europe (10) + Balkans (9) = 19 Countries
 * Version: 2.0 - Clean Data
 */

const CountriesData5 = [
    // 1. DENMARK
    {
        id: "DNK",
        name: "Denmark",
        officialName: "Kingdom of Denmark",
        flag: "https://flagcdn.com/w320/dk.png",
        
        images: {
            hero: "https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?w=1920&q=80",
            landscape: "https://images.unsplash.com/photo-1529655683826-aba9b3e77383?w=1920&q=80",
            city: "https://images.unsplash.com/photo-1552560880-2482cef14240?w=1920&q=80"
        },

        basic: {
            capital: "Copenhagen",
            continent: "Europe",
            region: "Northern Europe",
            subregion: "Scandinavia",
            population: 5932654,
            area: 43094,
            populationDensity: 137,
            independence: "965 (Unified)",
            callingCode: "+45",
            tld: ".dk",
            drivingSide: "Right",
            electricity: "230V, 50Hz"
        },

        location: {
            coordinates: [56.2639, 9.5018],
            timezone: "UTC+1 (CET)",
            neighbors: ["Germany"],
            borders: 140,
            hemispheres: ["Northern", "Eastern"]
        },

        political: {
            government: "Unitary Parliamentary Constitutional Monarchy",
            headOfState: "King Frederik X",
            headOfGovernment: "Prime Minister Mette Frederiksen",
            legislature: "Folketing (Parliament)",
            legalSystem: "Civil Law (Scandinavian)",
            states: 5,
            regions: 5,
            municipalities: 98,
            largestCity: "Copenhagen",
            organizations: ["UN", "EU", "NATO", "Nordic Council", "OECD", "WTO", "Schengen Area"]
        },

        economy: {
            gdp: "$404 Billion",
            gdpPPP: "$395 Billion",
            gdpPerCapita: "$67,803",
            gdpRank: "#36",
            gdpGrowth: "1.9%",
            currency: "Danish Krone",
            currencyCode: "DKK",
            currencySymbol: "kr",
            inflation: "3.4%",
            unemployment: "2.7%",
            majorSectors: ["Services (75%)", "Industry (22%)", "Agriculture (1%)"],
            industries: ["Wind Turbines", "Pharmaceuticals", "Medical Equipment", "Shipbuilding", "Food Processing", "Machinery", "Furniture", "Electronics"],
            exports: ["Pharmaceuticals", "Machinery", "Wind Turbines", "Meat Products", "Dairy", "Fish"],
            imports: ["Machinery", "Chemicals", "Grain", "Foodstuffs", "Electronics", "Vehicles"]
        },

        geography: {
            climate: "Temperate; Humid and Overcast; Mild, Windy Winters; Cool Summers",
            avgTemperature: "9.1°C",
            annualRainfall: "765 mm",
            highestPoint: "Møllehøj (170.86 m)",
            lowestPoint: "Lammefjord (-7 m)",
            coastline: "7,314 km",
            forestCover: "14.6%",
            arableLand: "58.9%",
            terrain: "Low and flat to gently rolling plains",
            naturalResources: ["Petroleum", "Natural Gas", "Fish", "Arable Land", "Salt", "Limestone", "Chalk", "Stone", "Gravel", "Sand"]
        },

        geography_links: {
            rivers: ["Gudenå", "Storå", "Skjern Å", "Varde Å"],
            mountains: [],
            deserts: [],
            forests: ["Rold Skov", "Gribskov", "Silkeborg Forests"],
            oceans: ["North Sea", "Baltic Sea", "Skagerrak", "Kattegat"]
        },

        culture: {
            officialLanguages: ["Danish"],
            languages: ["Danish", "Faroese", "Greenlandic", "German", "English"],
            religions: ["Evangelical Lutheran (74.7%)", "Islam (5.5%)", "Other Christian (3%)", "None (19%)"],
            heritageSites: ["Jelling Mounds", "Roskilde Cathedral", "Kronborg Castle", "Ilulissat Icefjord (Greenland)", "Stevns Klint", "Wadden Sea", "Christiansfeld"],
            festivals: ["Roskilde Festival", "Copenhagen Jazz Festival", "Aarhus Festuge", "Tivoli Christmas", "Sankt Hans Aften"],
            cuisine: ["Smørrebrød", "Frikadeller", "Flæskesteg", "Æbleskiver", "Rødgrød med Fløde", "Danish Pastry"],
            arts: ["Danish Design", "Architecture", "Literature", "Film (Dogme 95)", "Ceramics"],
            sports: ["Football", "Handball", "Cycling", "Badminton", "Sailing", "Ice Hockey"]
        },

        symbols: {
            bird: "Mute Swan",
            animal: "Red Squirrel",
            flower: "Marguerite Daisy",
            tree: "European Beech",
            anthem: "Der er et yndigt land",
            motto: "None Official"
        },

        demographics: {
            lifeExpectancy: 81.40,
            literacyRate: "99%",
            urbanPopulation: "88.2%",
            medianAge: 42.0
        },

        history: {
            timeline: [
                { year: "793", title: "Viking Age", description: "Viking raids began from Denmark" },
                { year: "965", title: "Unification", description: "Denmark unified under Harald Bluetooth" },
                { year: "1397", title: "Kalmar Union", description: "United Scandinavian kingdoms" },
                { year: "1536", title: "Reformation", description: "Lutheranism became state religion" },
                { year: "1849", title: "Constitutional Monarchy", description: "First constitution adopted" },
                { year: "1940-1945", title: "WWII Occupation", description: "Nazi Germany occupation" },
                { year: "1973", title: "EU Membership", description: "Joined European Communities" }
            ],
            notableFigures: ["Harald Bluetooth", "Hans Christian Andersen", "Søren Kierkegaard", "Niels Bohr", "Karen Blixen"]
        },

        disputes: [],

        quickFacts: [
            { icon: "smile", title: "Happiest Country", text: "Consistently ranked among happiest countries" },
            { icon: "bicycle", title: "Cycling Culture", text: "Copenhagen: World's most bike-friendly city" },
            { icon: "wind", title: "Wind Power", text: "World leader in wind energy (50%+ electricity)" },
            { icon: "crown", title: "Oldest Monarchy", text: "World's oldest continuous monarchy" },
            { icon: "building", title: "LEGO", text: "Birthplace of LEGO" },
            { icon: "flag", title: "Oldest Flag", text: "World's oldest continuously used national flag" }
        ]
    },

    // 2. ESTONIA
    {
        id: "EST",
        name: "Estonia",
        officialName: "Republic of Estonia",
        flag: "https://flagcdn.com/w320/ee.png",
        
        images: {
            hero: "https://images.unsplash.com/photo-1560969184-10fe8719e047?w=1920&q=80",
            landscape: "https://images.unsplash.com/photo-1565008576549-57569a49371d?w=1920&q=80",
            city: "https://images.unsplash.com/photo-1560930950-5cc20e80e392?w=1920&q=80"
        },

        basic: {
            capital: "Tallinn",
            continent: "Europe",
            region: "Northern Europe",
            subregion: "Baltic States",
            population: 1366491,
            area: 45228,
            populationDensity: 30,
            independence: "1918 (from Russia), 1991 (from USSR)",
            callingCode: "+372",
            tld: ".ee",
            drivingSide: "Right",
            electricity: "230V, 50Hz"
        },

        location: {
            coordinates: [58.5953, 25.0136],
            timezone: "UTC+2 (EET)",
            neighbors: ["Russia", "Latvia"],
            borders: 657,
            hemispheres: ["Northern", "Eastern"]
        },

        political: {
            government: "Unitary Parliamentary Republic",
            headOfState: "President Alar Karis",
            headOfGovernment: "Prime Minister Kristen Michal",
            legislature: "Riigikogu (Parliament)",
            legalSystem: "Civil Law",
            states: 15,
            counties: 15,
            municipalities: 79,
            largestCity: "Tallinn",
            organizations: ["UN", "EU", "NATO", "OECD", "WTO", "Schengen Area", "Eurozone"]
        },

        economy: {
            gdp: "$41.8 Billion",
            gdpPPP: "$60.9 Billion",
            gdpPerCapita: "$31,452",
            gdpRank: "#98",
            gdpGrowth: "-3.0%",
            currency: "Euro",
            currencyCode: "EUR",
            currencySymbol: "€",
            inflation: "9.1%",
            unemployment: "6.8%",
            majorSectors: ["Services (70%)", "Industry (26%)", "Agriculture (3%)"],
            industries: ["Information Technology", "Electronics", "Telecommunications", "Engineering", "Timber", "Textiles", "Food Processing", "Chemicals"],
            exports: ["Machinery", "Electronics", "Wood Products", "Metals", "Furniture", "Food Products"],
            imports: ["Machinery", "Vehicles", "Metals", "Chemicals", "Textiles", "Foodstuffs"]
        },

        geography: {
            climate: "Maritime; Wet, Moderate Winters; Cool Summers",
            avgTemperature: "6.4°C",
            annualRainfall: "650 mm",
            highestPoint: "Suur Munamägi (318 m)",
            lowestPoint: "Baltic Sea (0 m)",
            coastline: "3,794 km",
            forestCover: "52.1%",
            arableLand: "14.9%",
            terrain: "Marshy, lowlands; flat in the north, hilly in the south",
            naturalResources: ["Oil Shale", "Peat", "Rare Earth Elements", "Phosphorite", "Clay", "Limestone", "Sand", "Dolomite", "Arable Land"]
        },

        geography_links: {
            rivers: ["Narva River", "Emajõgi", "Pärnu River", "Kasari River"],
            mountains: ["Suur Munamägi", "Haanja Upland"],
            deserts: [],
            forests: ["Estonian Forests", "Alutaguse National Park", "Soomaa National Park"],
            oceans: ["Baltic Sea", "Gulf of Finland", "Gulf of Riga"]
        },

        culture: {
            officialLanguages: ["Estonian"],
            languages: ["Estonian", "Russian", "English", "Finnish"],
            religions: ["None (64%)", "Orthodox Christianity (16%)", "Lutheranism (10%)", "Others (10%)"],
            heritageSites: ["Historic Centre of Tallinn", "Struve Geodetic Arc"],
            festivals: ["Song and Dance Celebration", "Viljandi Folk Music Festival", "Tallinn Music Week", "Jazzkaar", "PÖFF Film Festival"],
            cuisine: ["Verivorst (Blood Sausage)", "Mulgipuder", "Kiluvõileib", "Kama", "Sült", "Rosolje"],
            arts: ["Choral Music", "Folk Dance", "Digital Art", "Contemporary Art", "Textile Arts"],
            sports: ["Basketball", "Football", "Cross-Country Skiing", "Ice Hockey", "Athletics", "Cycling"]
        },

        symbols: {
            bird: "Barn Swallow",
            animal: "Wolf",
            flower: "Cornflower",
            tree: "Oak",
            anthem: "Mu isamaa, mu õnn ja rõõm",
            motto: "None Official"
        },

        demographics: {
            lifeExpectancy: 78.74,
            literacyRate: "99.8%",
            urbanPopulation: "69.4%",
            medianAge: 42.7
        },

        history: {
            timeline: [
                { year: "1200s", title: "Northern Crusades", description: "German and Danish conquest" },
                { year: "1561", title: "Swedish Rule", description: "Northern Estonia under Sweden" },
                { year: "1710", title: "Russian Empire", description: "Incorporated into Russian Empire" },
                { year: "1918", title: "Independence", description: "Declared independence from Russia" },
                { year: "1940", title: "Soviet Occupation", description: "Annexed by Soviet Union" },
                { year: "1991", title: "Restored Independence", description: "Independence restored from USSR" },
                { year: "2004", title: "EU & NATO", description: "Joined European Union and NATO" }
            ],
            notableFigures: ["Lennart Meri", "Konstantin Päts", "Arvo Pärt", "Kersti Kaljulaid"]
        },

        disputes: [
            { name: "Border with Russia", description: "Unratified border treaty with Russia", type: "Border" }
        ],

        quickFacts: [
            { icon: "laptop", title: "E-Estonia", text: "World's most advanced digital society" },
            { icon: "wifi", title: "Free WiFi", text: "Free public WiFi throughout country" },
            { icon: "vote-yea", title: "E-Voting", text: "First country with nationwide internet voting" },
            { icon: "rocket", title: "Skype", text: "Skype was developed in Estonia" },
            { icon: "tree", title: "Forest Coverage", text: "Over 50% covered by forests" },
            { icon: "music", title: "Singing Revolution", text: "Gained independence through song" }
        ]
    },

    // 3. FINLAND
    {
        id: "FIN",
        name: "Finland",
        officialName: "Republic of Finland",
        flag: "https://flagcdn.com/w320/fi.png",
        
        images: {
            hero: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=1920&q=80",
            landscape: "https://images.unsplash.com/photo-1538332576228-eb5b4c4de6f5?w=1920&q=80",
            city: "https://images.unsplash.com/photo-1559511260-66a68e7e9d89?w=1920&q=80"
        },

        basic: {
            capital: "Helsinki",
            continent: "Europe",
            region: "Northern Europe",
            subregion: "Scandinavia",
            population: 5545475,
            area: 338424,
            populationDensity: 18,
            independence: "1917",
            callingCode: "+358",
            tld: ".fi",
            drivingSide: "Right",
            electricity: "230V, 50Hz"
        },

        location: {
            coordinates: [61.9241, 25.7482],
            timezone: "UTC+2 (EET)",
            neighbors: ["Sweden", "Norway", "Russia"],
            borders: 2563,
            hemispheres: ["Northern", "Eastern"]
        },

        political: {
            government: "Unitary Parliamentary Republic",
            headOfState: "President Alexander Stubb",
            headOfGovernment: "Prime Minister Petteri Orpo",
            legislature: "Eduskunta (Parliament)",
            legalSystem: "Civil Law",
            states: 19,
            regions: 19,
            municipalities: 309,
            largestCity: "Helsinki",
            organizations: ["UN", "EU", "NATO", "Nordic Council", "OECD", "WTO", "Schengen Area", "Eurozone"]
        },

        economy: {
            gdp: "$301 Billion",
            gdpPPP: "$317 Billion",
            gdpPerCapita: "$54,507",
            gdpRank: "#46",
            gdpGrowth: "-1.0%",
            currency: "Euro",
            currencyCode: "EUR",
            currencySymbol: "€",
            inflation: "4.3%",
            unemployment: "7.2%",
            majorSectors: ["Services (70%)", "Industry (27%)", "Agriculture (2%)"],
            industries: ["Electronics", "Machinery", "Vehicles", "Metal Products", "Pulp & Paper", "Chemicals", "Textiles", "Clothing"],
            exports: ["Paper Products", "Machinery", "Chemicals", "Metals", "Electronics", "Timber"],
            imports: ["Foodstuffs", "Petroleum", "Chemicals", "Transport Equipment", "Iron & Steel", "Machinery"]
        },

        geography: {
            climate: "Cold Temperate; Potentially Subarctic but Comparatively Mild",
            avgTemperature: "5.9°C",
            annualRainfall: "601 mm",
            highestPoint: "Haltitunturi (1,324 m)",
            lowestPoint: "Baltic Sea (0 m)",
            coastline: "1,250 km",
            forestCover: "73.1%",
            arableLand: "7.4%",
            terrain: "Mostly low, flat to rolling plains interspersed with lakes and low hills",
            naturalResources: ["Timber", "Iron Ore", "Copper", "Lead", "Zinc", "Chromite", "Nickel", "Gold", "Silver", "Limestone"]
        },

        geography_links: {
            rivers: ["Kemijoki", "Oulujoki", "Tornionjoki", "Kokemäenjoki"],
            mountains: ["Haltitunturi", "Saana", "Pallastunturi"],
            deserts: [],
            forests: ["Boreal Forests", "Taiga", "Nuuksio National Park", "Urho Kekkonen National Park"],
            oceans: ["Baltic Sea", "Gulf of Bothnia", "Gulf of Finland"]
        },

        culture: {
            officialLanguages: ["Finnish", "Swedish"],
            languages: ["Finnish", "Swedish", "Sámi", "English", "Russian"],
            religions: ["Evangelical Lutheran (66.6%)", "Orthodox (1.1%)", "None (29.4%)", "Others (2.9%)"],
            heritageSites: ["Fortress of Suomenlinna", "Old Rauma", "Petäjävesi Old Church", "Verla Groundwood and Board Mill", "Bronze Age Burial Site of Sammallahdenmäki", "Struve Geodetic Arc"],
            festivals: ["Midsummer (Juhannus)", "Vappu (May Day)", "Independence Day", "Christmas", "Savonlinna Opera Festival", "Flow Festival"],
            cuisine: ["Karjalanpiirakka", "Kalakukko", "Poronkäristys", "Graavilohi", "Korvapuusti", "Leipäjuusto"],
            arts: ["Design", "Architecture", "Literature", "Classical Music", "Heavy Metal Music", "Glass Art"],
            sports: ["Ice Hockey", "Football", "Cross-Country Skiing", "Ski Jumping", "Pesäpallo", "Formula 1"]
        },

        symbols: {
            bird: "Whooper Swan",
            animal: "Brown Bear",
            flower: "Lily of the Valley",
            tree: "Silver Birch",
            anthem: "Maamme",
            motto: "None Official"
        },

        demographics: {
            lifeExpectancy: 82.13,
            literacyRate: "99%",
            urbanPopulation: "85.6%",
            medianAge: 43.1
        },

        history: {
            timeline: [
                { year: "1155", title: "Swedish Crusade", description: "Finland became part of Sweden" },
                { year: "1809", title: "Russian Rule", description: "Grand Duchy under Russian Empire" },
                { year: "1917", title: "Independence", description: "Declared independence from Russia" },
                { year: "1939-1940", title: "Winter War", description: "War with Soviet Union" },
                { year: "1995", title: "EU Membership", description: "Joined European Union" },
                { year: "2023", title: "NATO Membership", description: "Joined NATO" }
            ],
            notableFigures: ["Carl Gustaf Emil Mannerheim", "Jean Sibelius", "Alvar Aalto", "Tove Jansson", "Linus Torvalds"]
        },

        disputes: [],

        quickFacts: [
            { icon: "smile", title: "Happiest Country", text: "Ranked world's happiest country multiple times" },
            { icon: "graduation-cap", title: "Education", text: "World-renowned education system (PISA)" },
            { icon: "tree", title: "Land of Lakes", text: "188,000 lakes ('Land of a Thousand Lakes')" },
            { icon: "hot-tub", title: "Saunas", text: "3.3 million saunas (population 5.5 million)" },
            { icon: "snowflake", title: "Santa Claus", text: "Official home of Santa Claus in Lapland" },
            { icon: "wifi", title: "Nokia", text: "Birthplace of Nokia" }
        ]
    },

    // 4. ICELAND
    {
        id: "ISL",
        name: "Iceland",
        officialName: "Iceland",
        flag: "https://flagcdn.com/w320/is.png",
        
        images: {
            hero: "https://images.unsplash.com/photo-1504829857797-ddff29c27927?w=1920&q=80",
            landscape: "https://images.unsplash.com/photo-1520769945061-0a448c463865?w=1920&q=80",
            city: "https://images.unsplash.com/photo-1529963183134-61a90db47eaf?w=1920&q=80"
        },

        basic: {
            capital: "Reykjavik",
            continent: "Europe",
            region: "Northern Europe",
            subregion: "Nordic Countries",
            population: 393396,
            area: 103000,
            populationDensity: 4,
            independence: "1944",
            callingCode: "+354",
            tld: ".is",
            drivingSide: "Right",
            electricity: "230V, 50Hz"
        },

        location: {
            coordinates: [64.9631, -19.0208],
            timezone: "UTC+0 (GMT)",
            neighbors: [],
            borders: 0,
            hemispheres: ["Northern", "Western"],
            islandNation: true
        },

        political: {
            government: "Unitary Parliamentary Republic",
            headOfState: "President Halla Tómasdóttir",
            headOfGovernment: "Prime Minister Bjarni Benediktsson",
            legislature: "Althing (Parliament)",
            legalSystem: "Civil Law (Germanic traditions)",
            states: 8,
            regions: 8,
            municipalities: 64,
            largestCity: "Reykjavik",
            organizations: ["UN", "NATO", "EFTA", "EEA", "Nordic Council", "OECD", "Schengen Area"]
        },

        economy: {
            gdp: "$31.0 Billion",
            gdpPPP: "$24.5 Billion",
            gdpPerCapita: "$78,837",
            gdpRank: "#106",
            gdpGrowth: "4.1%",
            currency: "Icelandic Króna",
            currencyCode: "ISK",
            currencySymbol: "kr",
            inflation: "8.9%",
            unemployment: "3.4%",
            majorSectors: ["Services (73%)", "Industry (23%)", "Agriculture (4%)"],
            industries: ["Tourism", "Fishing", "Aluminum Smelting", "Geothermal Power", "Software Production", "Biotechnology"],
            exports: ["Fish Products", "Aluminum", "Animal Products", "Ferrosilicon", "Diatomite"],
            imports: ["Machinery", "Petroleum Products", "Foodstuffs", "Textiles"]
        },

        geography: {
            climate: "Temperate; Moderated by North Atlantic Current; Mild, Windy Winters; Damp, Cool Summers",
            avgTemperature: "5.5°C",
            annualRainfall: "1,940 mm",
            highestPoint: "Hvannadalshnúkur (2,110 m)",
            lowestPoint: "Atlantic Ocean (0 m)",
            coastline: "4,970 km",
            forestCover: "0.5%",
            arableLand: "1.2%",
            terrain: "Mostly plateau interspersed with mountain peaks, icefields; coast deeply indented by bays and fiords",
            naturalResources: ["Fish", "Hydropower", "Geothermal Power", "Diatomite"]
        },

        geography_links: {
            rivers: ["Þjórsá", "Jökulsá á Fjöllum", "Ölfusá", "Skjálfandafljót"],
            mountains: ["Hvannadalshnúkur", "Bárðarbunga", "Kverkfjöll", "Snæfellsjökull"],
            deserts: ["Highlands (volcanic desert)"],
            forests: ["Hallormsstaðaskógur"],
            oceans: ["Atlantic Ocean", "Arctic Ocean", "Greenland Sea", "Norwegian Sea"]
        },

        culture: {
            officialLanguages: ["Icelandic"],
            languages: ["Icelandic", "English", "Danish", "German"],
            religions: ["Evangelical Lutheran (62.3%)", "Catholic (3.9%)", "Ásatrú (1.4%)", "None (27.8%)", "Others (4.6%)"],
            heritageSites: ["Þingvellir National Park", "Surtsey"],
            festivals: ["Þorrablót", "Independence Day", "Verslunarmannahelgi", "Iceland Airwaves", "Reykjavik Arts Festival"],
            cuisine: ["Hákarl (Fermented Shark)", "Hangikjöt", "Plokkfiskur", "Skyr", "Pylsur", "Kleinur"],
            arts: ["Sagas", "Literature", "Music (Björk, Sigur Rós)", "Design", "Film"],
            sports: ["Football", "Handball", "Basketball", "Swimming", "Horseback Riding", "CrossFit"]
        },

        symbols: {
            bird: "Gyrfalcon",
            animal: "Arctic Fox",
            flower: "Mountain Avens",
            tree: "Rowan",
            anthem: "Lofsöngur",
            motto: "None Official"
        },

        demographics: {
            lifeExpectancy: 83.30,
            literacyRate: "99%",
            urbanPopulation: "93.9%",
            medianAge: 37.5
        },

        history: {
            timeline: [
                { year: "874", title: "Settlement", description: "Norse settlement began" },
                { year: "930", title: "Althing Founded", description: "World's oldest parliament established" },
                { year: "1262", title: "Norwegian Rule", description: "Came under Norwegian crown" },
                { year: "1380", title: "Danish Rule", description: "Union with Denmark" },
                { year: "1918", title: "Sovereignty", description: "Sovereign state in union with Denmark" },
                { year: "1944", title: "Republic", description: "Full independence; Republic declared" },
                { year: "2008", title: "Financial Crisis", description: "Banking system collapse" }
            ],
            notableFigures: ["Leif Erikson", "Snorri Sturluson", "Vigdís Finnbogadóttir", "Halldór Laxness", "Björk"]
        },

        disputes: [
            { name: "Rockall", description: "Disputed rock in North Atlantic", type: "Maritime" }
        ],

        quickFacts: [
            { icon: "gavel", title: "Oldest Parliament", text: "Althing - world's oldest parliament (930 AD)" },
            { icon: "volcano", title: "Land of Fire & Ice", text: "130 volcanoes, 10% covered by glaciers" },
            { icon: "bolt", title: "Renewable Energy", text: "100% electricity from renewable sources" },
            { icon: "book", title: "Most Published", text: "Most books published per capita" },
            { icon: "peace", title: "No Army", text: "No standing military forces" },
            { icon: "venus", title: "Gender Equality", text: "World leader in gender equality" }
        ]
    },

    // 5. IRELAND
    {
        id: "IRL",
        name: "Ireland",
        officialName: "Republic of Ireland",
        flag: "https://flagcdn.com/w320/ie.png",
        
        images: {
            hero: "https://images.unsplash.com/photo-1590089415225-401ed6f9db8e?w=1920&q=80",
            landscape: "https://images.unsplash.com/photo-1564959130747-897a8e0a7f68?w=1920&q=80",
            city: "https://images.unsplash.com/photo-1549918864-48ac978761a4?w=1920&q=80"
        },

        basic: {
            capital: "Dublin",
            continent: "Europe",
            region: "Northern Europe",
            subregion: "British Isles",
            population: 5194336,
            area: 70273,
            populationDensity: 74,
            independence: "1922",
            callingCode: "+353",
            tld: ".ie",
            drivingSide: "Left",
            electricity: "230V, 50Hz"
        },

        location: {
            coordinates: [53.1424, -7.6921],
            timezone: "UTC+0 (GMT/IST)",
            neighbors: ["United Kingdom (Northern Ireland)"],
            borders: 490,
            hemispheres: ["Northern", "Western"]
        },

        political: {
            government: "Unitary Parliamentary Republic",
            headOfState: "President Michael D. Higgins",
            headOfGovernment: "Taoiseach Simon Harris",
            legislature: "Oireachtas (Dáil Éireann & Seanad Éireann)",
            legalSystem: "Common Law",
            states: 4,
            provinces: 4,
            counties: 26,
            largestCity: "Dublin",
            organizations: ["UN", "EU", "OECD", "WTO", "Schengen Area (partial)", "Eurozone"]
        },

        economy: {
            gdp: "$594 Billion",
            gdpPPP: "$607 Billion",
            gdpPerCapita: "$114,581",
            gdpRank: "#27",
            gdpGrowth: "-3.2%",
            currency: "Euro",
            currencyCode: "EUR",
            currencySymbol: "€",
            inflation: "4.0%",
            unemployment: "4.3%",
            majorSectors: ["Services (57%)", "Industry (40%)", "Agriculture (1%)"],
            industries: ["Pharmaceuticals", "Medical Devices", "Technology", "Food Products", "Beverages", "Financial Services", "Chemicals"],
            exports: ["Pharmaceuticals", "Medical Equipment", "Computers", "Chemicals", "Machinery", "Food"],
            imports: ["Machinery", "Vehicles", "Chemicals", "Petroleum", "Textiles", "Clothing"]
        },

        geography: {
            climate: "Temperate Maritime; Modified by North Atlantic Current; Mild Winters, Cool Summers",
            avgTemperature: "10.0°C",
            annualRainfall: "1,118 mm",
            highestPoint: "Carrauntoohil (1,038 m)",
            lowestPoint: "Irish Sea (0 m)",
            coastline: "1,448 km",
            forestCover: "11%",
            arableLand: "15.4%",
            terrain: "Mostly flat to rolling interior plain surrounded by rugged hills and low mountains",
            naturalResources: ["Natural Gas", "Peat", "Copper", "Lead", "Zinc", "Silver", "Barite", "Gypsum", "Limestone", "Dolomite"]
        },

        geography_links: {
            rivers: ["Shannon", "Liffey", "Blackwater", "Barrow", "Suir", "Boyne"],
            mountains: ["Carrauntoohil", "MacGillycuddy's Reeks", "Wicklow Mountains", "Mourne Mountains"],
            deserts: [],
            forests: ["Killarney National Park", "Glenveagh National Park"],
            oceans: ["Atlantic Ocean", "Irish Sea", "Celtic Sea"]
        },

        culture: {
            officialLanguages: ["Irish (Gaelic)", "English"],
            languages: ["English", "Irish", "Ulster Scots", "Shelta"],
            religions: ["Roman Catholicism (69%)", "None (14%)", "Church of Ireland (3%)", "Islam (1.4%)", "Others (12.6%)"],
            heritageSites: ["Brú na Bóinne", "Skellig Michael", "Sceilg Mhichíl"],
            festivals: ["St. Patrick's Day", "Bloomsday", "Galway Arts Festival", "Electric Picnic", "Fleadh Cheoil"],
            cuisine: ["Irish Stew", "Colcannon", "Boxty", "Soda Bread", "Full Irish Breakfast", "Black Pudding"],
            arts: ["Irish Literature", "Traditional Music", "Irish Dance", "Celtic Art", "Storytelling"],
            sports: ["Gaelic Football", "Hurling", "Rugby", "Football", "Golf", "Horse Racing"]
        },

        symbols: {
            bird: "Northern Lapwing",
            animal: "Irish Hare",
            flower: "Shamrock",
            tree: "Sessile Oak",
            anthem: "Amhrán na bhFiann",
            motto: "Ireland Forever"
        },

        demographics: {
            lifeExpectancy: 82.81,
            literacyRate: "99%",
            urbanPopulation: "64.2%",
            medianAge: 38.8
        },

        history: {
            timeline: [
                { year: "432", title: "St. Patrick", description: "Christianity brought to Ireland" },
                { year: "795", title: "Viking Raids", description: "Viking invasions began" },
                { year: "1169", title: "Norman Invasion", description: "Anglo-Norman conquest" },
                { year: "1801", title: "Union with Britain", description: "Act of Union with United Kingdom" },
                { year: "1916", title: "Easter Rising", description: "Armed rebellion against British rule" },
                { year: "1922", title: "Irish Free State", description: "Independence from UK (26 counties)" },
                { year: "1937", title: "Constitution", description: "New constitution; name changed to Ireland" },
                { year: "1973", title: "EEC Membership", description: "Joined European Economic Community" }
            ],
            notableFigures: ["St. Patrick", "Brian Boru", "Daniel O'Connell", "Michael Collins", "Éamon de Valera", "Mary Robinson"]
        },

        disputes: [],

        quickFacts: [
            { icon: "shamrock", title: "Emerald Isle", text: "Known as 'Emerald Isle' for green landscape" },
            { icon: "beer", title: "Guinness", text: "Home of Guinness brewery (since 1759)" },
            { icon: "book", title: "Literary Giants", text: "4 Nobel Prize winners in Literature" },
            { icon: "building", title: "Tech Hub", text: "European HQ for Apple, Google, Facebook, etc." },
            { icon: "music", title: "Traditional Music", text: "Rich tradition of folk and traditional music" },
            { icon: "users", title: "Diaspora", text: "70 million people worldwide claim Irish ancestry" }
        ]
    },

    // 6. LATVIA
    {
        id: "LVA",
        name: "Latvia",
        officialName: "Republic of Latvia",
        flag: "https://flagcdn.com/w320/lv.png",
        
        images: {
            hero: "https://images.unsplash.com/photo-1588420343618-6141b3784bce?w=1920&q=80",
            landscape: "https://images.unsplash.com/photo-1563804951831-7d28841b4567?w=1920&q=80",
            city: "https://images.unsplash.com/photo-1558029137-4c6d87c48287?w=1920&q=80"
        },

        basic: {
            capital: "Riga",
            continent: "Europe",
            region: "Northern Europe",
            subregion: "Baltic States",
            population: 1842226,
            area: 64559,
            populationDensity: 29,
            independence: "1918 (from Russia), 1991 (from USSR)",
            callingCode: "+371",
            tld: ".lv",
            drivingSide: "Right",
            electricity: "230V, 50Hz"
        },

        location: {
            coordinates: [56.8796, 24.6032],
            timezone: "UTC+2 (EET)",
            neighbors: ["Estonia", "Lithuania", "Belarus", "Russia"],
            borders: 1370,
            hemispheres: ["Northern", "Eastern"]
        },

        political: {
            government: "Unitary Parliamentary Republic",
            headOfState: "President Edgars Rinkēvičs",
            headOfGovernment: "Prime Minister Evika Siliņa",
            legislature: "Saeima (Parliament)",
            legalSystem: "Civil Law",
            states: 36,
            municipalities: 36,
            cities: 7,
            largestCity: "Riga",
            organizations: ["UN", "EU", "NATO", "OECD", "WTO", "Schengen Area", "Eurozone"]
        },

        economy: {
            gdp: "$43.6 Billion",
            gdpPPP: "$70.0 Billion",
            gdpPerCapita: "$23,723",
            gdpRank: "#100",
            gdpGrowth: "-0.3%",
            currency: "Euro",
            currencyCode: "EUR",
            currencySymbol: "€",
            inflation: "8.9%",
            unemployment: "6.6%",
            majorSectors: ["Services (74%)", "Industry (21%)", "Agriculture (4%)"],
            industries: ["Food Products", "Processed Wood", "Textiles", "Metals", "Pharmaceuticals", "Machinery", "Transport"],
            exports: ["Timber", "Food Products", "Metals", "Machinery", "Textiles", "Pharmaceuticals"],
            imports: ["Machinery", "Consumer Goods", "Chemicals", "Fuels", "Vehicles"]
        },

        geography: {
            climate: "Maritime; Wet, Moderate Winters",
            avgTemperature: "6.8°C",
            annualRainfall: "641 mm",
            highestPoint: "Gaiziņkalns (312 m)",
            lowestPoint: "Baltic Sea (0 m)",
            coastline: "498 km",
            forestCover: "54%",
            arableLand: "18.6%",
            terrain: "Low plain",
            naturalResources: ["Peat", "Limestone", "Dolomite", "Amber", "Hydropower", "Wood", "Arable Land"]
        },

        geography_links: {
            rivers: ["Daugava", "Gauja", "Lielupe", "Venta"],
            mountains: ["Gaiziņkalns", "Vidzeme Upland"],
            deserts: [],
            forests: ["Latvian Forests", "Kemeri National Park", "Gauja National Park"],
            oceans: ["Baltic Sea", "Gulf of Riga"]
        },

        culture: {
            officialLanguages: ["Latvian"],
            languages: ["Latvian", "Russian", "English", "German"],
            religions: ["Lutheran (36%)", "Roman Catholic (22%)", "Orthodox (19%)", "None (17%)", "Others (6%)"],
            heritageSites: ["Historic Centre of Riga", "Struve Geodetic Arc"],
            festivals: ["Song and Dance Celebration", "Midsummer (Jāņi)", "Latvian Independence Day", "Riga City Festival"],
            cuisine: ["Rupjmaize (Dark Rye Bread)", "Pelēkie Zirņi", "Sklandrausis", "Piragi", "Karbonāde", "Jāņu Siers"],
            arts: ["Choral Music", "Folk Dancing", "Amber Jewelry", "Weaving", "Woodwork"],
            sports: ["Ice Hockey", "Basketball", "Football", "Athletics", "Cycling", "Bobsled"]
        },

        symbols: {
            bird: "White Wagtail",
            animal: "Two-spotted Ladybird",
            flower: "Oxeye Daisy",
            tree: "Oak & Linden",
            anthem: "Dievs, svētī Latviju!",
            motto: "For Fatherland and Freedom"
        },

        demographics: {
            lifeExpectancy: 75.70,
            literacyRate: "99.9%",
            urbanPopulation: "68.5%",
            medianAge: 44.6
        },

        history: {
            timeline: [
                { year: "1200s", title: "Livonian Order", description: "German crusaders conquered region" },
                { year: "1561", title: "Polish-Lithuanian Rule", description: "Part of Polish-Lithuanian Commonwealth" },
                { year: "1710", title: "Russian Empire", description: "Incorporated into Russian Empire" },
                { year: "1918", title: "Independence", description: "Declared independence from Russia" },
                { year: "1940", title: "Soviet Occupation", description: "Annexed by Soviet Union" },
                { year: "1991", title: "Restored Independence", description: "Independence restored from USSR" },
                { year: "2004", title: "EU & NATO", description: "Joined European Union and NATO" }
            ],
            notableFigures: ["Kārlis Ulmanis", "Vaira Vīķe-Freiberga", "Rainis", "Mikhail Baryshnikov"]
        },

        disputes: [
            { name: "Abrene", description: "Former Latvian territory in Russia", type: "Border" }
        ],

        quickFacts: [
            { icon: "tree", title: "Forest Country", text: "Over 54% covered by forests" },
            { icon: "music", title: "Song Festivals", text: "UNESCO-recognized Song and Dance Celebration" },
            { icon: "building", title: "Art Nouveau", text: "Riga has largest collection of Art Nouveau buildings" },
            { icon: "gem", title: "Amber", text: "Rich in Baltic amber deposits" },
            { icon: "wifi", title: "Internet", text: "One of fastest internet speeds in Europe" }
        ]
    },

    // 7. LITHUANIA
    {
        id: "LTU",
        name: "Lithuania",
        officialName: "Republic of Lithuania",
        flag: "https://flagcdn.com/w320/lt.png",
        
        images: {
            hero: "https://images.unsplash.com/photo-1562347727-d1f85a1449fb?w=1920&q=80",
            landscape: "https://images.unsplash.com/photo-1577624528828-c21b6e7e0b8e?w=1920&q=80",
            city: "https://images.unsplash.com/photo-1549989476-69a92fa57c36?w=1920&q=80"
        },

        basic: {
            capital: "Vilnius",
            continent: "Europe",
            region: "Northern Europe",
            subregion: "Baltic States",
            population: 2859239,
            area: 65300,
            populationDensity: 42,
            independence: "1918 (from Russia), 1990 (from USSR)",
            callingCode: "+370",
            tld: ".lt",
            drivingSide: "Right",
            electricity: "230V, 50Hz"
        },

        location: {
            coordinates: [55.1694, 23.8813],
            timezone: "UTC+2 (EET)",
            neighbors: ["Latvia", "Belarus", "Poland", "Russia (Kaliningrad)"],
            borders: 1574,
            hemispheres: ["Northern", "Eastern"]
        },

        political: {
            government: "Unitary Semi-Presidential Republic",
            headOfState: "President Gitanas Nausėda",
            headOfGovernment: "Prime Minister Gintautas Paluckas",
            legislature: "Seimas (Parliament)",
            legalSystem: "Civil Law",
            states: 10,
            counties: 10,
            municipalities: 60,
            largestCity: "Vilnius",
            organizations: ["UN", "EU", "NATO", "OECD", "WTO", "Schengen Area", "Eurozone"]
        },

        economy: {
            gdp: "$77.8 Billion",
            gdpPPP: "$127.0 Billion",
            gdpPerCapita: "$27,269",
            gdpRank: "#82",
            gdpGrowth: "-0.3%",
            currency: "Euro",
            currencyCode: "EUR",
            currencySymbol: "€",
            inflation: "8.7%",
            unemployment: "6.9%",
            majorSectors: ["Services (66%)", "Industry (28%)", "Agriculture (3%)"],
            industries: ["Metal-cutting Machine Tools", "Electric Motors", "Refrigerators & Freezers", "Petroleum Refining", "Food Processing", "Textiles", "Furniture", "Lasers"],
            exports: ["Refined Petroleum", "Furniture", "Chemicals", "Machinery", "Plastics", "Food"],
            imports: ["Crude Petroleum", "Natural Gas", "Machinery", "Transport Equipment", "Chemicals"]
        },

        geography: {
            climate: "Transitional; Maritime to Continental",
            avgTemperature: "7.6°C",
            annualRainfall: "686 mm",
            highestPoint: "Aukštojas Hill (294 m)",
            lowestPoint: "Nemunas Delta (-5 m)",
            coastline: "90 km",
            forestCover: "35%",
            arableLand: "33.5%",
            terrain: "Lowland, many scattered small lakes, fertile soil",
            naturalResources: ["Peat", "Arable Land", "Amber"]
        },

        geography_links: {
            rivers: ["Nemunas", "Neris", "Venta", "Šešupė"],
            mountains: ["Aukštojas Hill", "Medvėgalis"],
            deserts: [],
            forests: ["Lithuanian Forests", "Dzūkija National Park", "Aukštaitija National Park"],
            oceans: ["Baltic Sea"]
        },

        culture: {
            officialLanguages: ["Lithuanian"],
            languages: ["Lithuanian", "Russian", "Polish", "English"],
            religions: ["Roman Catholic (77%)", "Orthodox (4%)", "None (6%)", "Others (13%)"],
            heritageSites: ["Vilnius Historic Centre", "Curonian Spit", "Kernavė Archaeological Site", "Struve Geodetic Arc"],
            festivals: ["Užgavėnės (Shrove Tuesday)", "Joninės (Midsummer)", "Song Celebration", "Vilnius Festival"],
            cuisine: ["Cepelinai", "Kugelis", "Šaltibarščiai", "Kibinai", "Šakotis", "Skilandis"],
            arts: ["Folk Art", "Wood Carving", "Amber Crafts", "Choral Music", "Literature"],
            sports: ["Basketball", "Football", "Ice Hockey", "Athletics", "Cycling"]
        },

        symbols: {
            bird: "White Stork",
            animal: "European Bison",
            flower: "Rue",
            tree: "Oak",
            anthem: "Tautiška giesmė",
            motto: "The Nation's Strength is in National Unity"
        },

        demographics: {
            lifeExpectancy: 76.41,
            literacyRate: "99.8%",
            urbanPopulation: "68.3%",
            medianAge: 45.1
        },

        history: {
            timeline: [
                { year: "1253", title: "Kingdom", description: "Mindaugas crowned King of Lithuania" },
                { year: "1386", title: "Union with Poland", description: "Personal union with Poland" },
                { year: "1569", title: "Commonwealth", description: "Polish-Lithuanian Commonwealth formed" },
                { year: "1795", title: "Partitions", description: "Absorbed into Russian Empire" },
                { year: "1918", title: "Independence", description: "Declared independence" },
                { year: "1940", title: "Soviet Occupation", description: "Annexed by Soviet Union" },
                { year: "1990", title: "Independence Restored", description: "First Soviet republic to declare independence" },
                { year: "2004", title: "EU & NATO", description: "Joined European Union and NATO" }
            ],
            notableFigures: ["Mindaugas", "Vytautas the Great", "Valdas Adamkus", "Arvydas Sabonis"]
        },

        disputes: [],

        quickFacts: [
            { icon: "basketball-ball", title: "Basketball Nation", text: "Basketball is the national sport (semi-religion)" },
            { icon: "sun", title: "Geographic Center", text: "Geographical center of Europe (by some calculations)" },
            { icon: "tree", title: "Hill of Crosses", text: "Pilgrimage site with over 100,000 crosses" },
            { icon: "language", title: "Ancient Language", text: "Lithuanian is one of oldest Indo-European languages" },
            { icon: "flag", title: "First Independence", text: "First country to break from Soviet Union (1990)" },
            { icon: "rocket", title: "Lasers", text: "World leader in laser technology production" }
        ]
    },

    // 8. NORWAY
    {
        id: "NOR",
        name: "Norway",
        officialName: "Kingdom of Norway",
        flag: "https://flagcdn.com/w320/no.png",
        
        images: {
            hero: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=1920&q=80",
            landscape: "https://images.unsplash.com/photo-1508189860359-777d945909ef?w=1920&q=80",
            city: "https://images.unsplash.com/photo-1558687942-85eb3c61e5a3?w=1920&q=80"
        },

        basic: {
            capital: "Oslo",
            continent: "Europe",
            region: "Northern Europe",
            subregion: "Scandinavia",
            population: 5474360,
            area: 385207,
            populationDensity: 14,
            independence: "1905",
            callingCode: "+47",
            tld: ".no",
            drivingSide: "Right",
            electricity: "230V, 50Hz"
        },

        location: {
            coordinates: [60.4720, 8.4689],
            timezone: "UTC+1 (CET)",
            neighbors: ["Sweden", "Finland", "Russia"],
            borders: 2566,
            hemispheres: ["Northern", "Eastern"]
        },

        political: {
            government: "Unitary Parliamentary Constitutional Monarchy",
            headOfState: "King Harald V",
            headOfGovernment: "Prime Minister Jonas Gahr Støre",
            legislature: "Storting (Parliament)",
            legalSystem: "Civil Law (Scandinavian)",
            states: 11,
            counties: 11,
            municipalities: 356,
            largestCity: "Oslo",
            organizations: ["UN", "NATO", "Nordic Council", "EFTA", "EEA", "OECD", "WTO", "Schengen Area"]
        },

        economy: {
            gdp: "$579 Billion",
            gdpPPP: "$426 Billion",
            gdpPerCapita: "$105,826",
            gdpRank: "#28",
            gdpGrowth: "0.5%",
            currency: "Norwegian Krone",
            currencyCode: "NOK",
            currencySymbol: "kr",
            inflation: "5.5%",
            unemployment: "3.5%",
            majorSectors: ["Services (58%)", "Industry (38%)", "Agriculture (2%)"],
            industries: ["Petroleum & Gas", "Shipping", "Fishing", "Aquaculture", "Food Processing", "Shipbuilding", "Pulp & Paper Products", "Metals", "Chemicals", "Timber", "Mining"],
            exports: ["Crude Petroleum", "Natural Gas", "Fish", "Aluminum", "Machinery", "Chemicals"],
            imports: ["Machinery", "Vehicles", "Chemicals", "Metals", "Foodstuffs"]
        },

        geography: {
            climate: "Temperate along coast; Colder interior with increased precipitation and colder summers",
            avgTemperature: "5.7°C",
            annualRainfall: "1,414 mm",
            highestPoint: "Galdhøpiggen (2,469 m)",
            lowestPoint: "Norwegian Sea (0 m)",
            coastline: "25,148 km",
            forestCover: "37%",
            arableLand: "2.2%",
            terrain: "Glaciated; Mostly high plateaus and rugged mountains broken by fertile valleys; small, scattered plains; coastline deeply indented by fjords",
            naturalResources: ["Petroleum", "Natural Gas", "Iron Ore", "Copper", "Lead", "Zinc", "Titanium", "Pyrites", "Nickel", "Fish", "Timber", "Hydropower"]
        },

        geography_links: {
            rivers: ["Glomma", "Drammenselva", "Numedalslågen", "Otra"],
            mountains: ["Galdhøpiggen", "Glittertind", "Jotunheimen", "Scandinavian Mountains"],
            deserts: [],
            forests: ["Norwegian Forests", "Boreal Forests", "Hardangervidda"],
            oceans: ["Norwegian Sea", "North Sea", "Barents Sea", "Arctic Ocean"]
        },

        culture: {
            officialLanguages: ["Norwegian (Bokmål)", "Norwegian (Nynorsk)"],
            languages: ["Norwegian", "Sámi", "Kven", "English"],
            religions: ["Church of Norway (Lutheran) (68%)", "None (20%)", "Islam (3%)", "Catholic (3%)", "Others (6%)"],
            heritageSites: ["Bryggen in Bergen", "Urnes Stave Church", "Røros Mining Town", "Rock Art of Alta", "Geirangerfjord and Nærøyfjord", "Struve Geodetic Arc", "Rjukan-Notodden Industrial Heritage Site"],
            festivals: ["Constitution Day (May 17)", "Christmas", "St. Olav's Day", "Midsummer", "Bergen International Festival"],
            cuisine: ["Rakfisk", "Lutefisk", "Kjøttkaker", "Fårikål", "Brunost", "Lefse", "Smørbrød"],
            arts: ["Viking Art", "Literature (Ibsen)", "Munch Paintings", "Traditional Music", "Wood Carving"],
            sports: ["Cross-Country Skiing", "Ski Jumping", "Biathlon", "Football", "Handball", "Ice Hockey"]
        },

        symbols: {
            bird: "White-throated Dipper",
            animal: "Lion (Heraldic)",
            flower: "Purple Heather",
            tree: "Norway Spruce",
            anthem: "Ja, vi elsker dette landet",
            motto: "All for Norway"
        },

        demographics: {
            lifeExpectancy: 83.23,
            literacyRate: "99%",
            urbanPopulation: "83.7%",
            medianAge: 40.1
        },

        history: {
            timeline: [
                { year: "872", title: "Unification", description: "Harald Fairhair unified Norway" },
                { year: "793-1066", title: "Viking Age", description: "Viking expansion and raids" },
                { year: "1397", title: "Kalmar Union", description: "United with Denmark and Sweden" },
                { year: "1814", title: "Constitution", description: "Constitution adopted; Union with Sweden" },
                { year: "1905", title: "Independence", description: "Peaceful dissolution of union with Sweden" },
                { year: "1940-1945", title: "WWII", description: "Nazi Germany occupation" },
                { year: "1969", title: "Oil Discovery", description: "Major oil discovery in North Sea" }
            ],
            notableFigures: ["Harald Fairhair", "Henrik Ibsen", "Edvard Munch", "Roald Amundsen", "Fridtjof Nansen", "Edvard Grieg"]
        },

        disputes: [],

        quickFacts: [
            { icon: "oil-can", title: "Oil Wealth", text: "World's largest sovereign wealth fund ($1.4 trillion)" },
            { icon: "water", title: "Fjords", text: "Home to spectacular fjords (UNESCO)" },
            { icon: "medal", title: "Winter Olympics", text: "Most Winter Olympic medals ever won" },
            { icon: "peace", title: "Nobel Peace Prize", text: "Awards Nobel Peace Prize annually" },
            { icon: "sun", title: "Midnight Sun", text: "Sun doesn't set in summer in northern regions" },
            { icon: "bolt", title: "Hydropower", text: "98% electricity from hydropower" }
        ]
    },

    // 9. SWEDEN
    {
        id: "SWE",
        name: "Sweden",
        officialName: "Kingdom of Sweden",
        flag: "https://flagcdn.com/w320/se.png",
        
        images: {
            hero: "https://images.unsplash.com/photo-1509356843151-3e7d96241e11?w=1920&q=80",
            landscape: "https://images.unsplash.com/photo-1530841377377-3ff06c0ca713?w=1920&q=80",
            city: "https://images.unsplash.com/photo-1572435555646-7ad9a149ad91?w=1920&q=80"
        },

        basic: {
            capital: "Stockholm",
            continent: "Europe",
            region: "Northern Europe",
            subregion: "Scandinavia",
            population: 10612086,
            area: 450295,
            populationDensity: 25,
            independence: "1523",
            callingCode: "+46",
            tld: ".se",
            drivingSide: "Right",
            electricity: "230V, 50Hz"
        },

        location: {
            coordinates: [60.1282, 18.6435],
            timezone: "UTC+1 (CET)",
            neighbors: ["Norway", "Finland"],
            borders: 2211,
            hemispheres: ["Northern", "Eastern"]
        },

        political: {
            government: "Unitary Parliamentary Constitutional Monarchy",
            headOfState: "King Carl XVI Gustaf",
            headOfGovernment: "Prime Minister Ulf Kristersson",
            legislature: "Riksdag (Parliament)",
            legalSystem: "Civil Law (Scandinavian)",
            states: 21,
            counties: 21,
            municipalities: 290,
            largestCity: "Stockholm",
            organizations: ["UN", "EU", "NATO", "Nordic Council", "OECD", "WTO", "Schengen Area"]
        },

        economy: {
            gdp: "$593 Billion",
            gdpPPP: "$683 Billion",
            gdpPerCapita: "$55,873",
            gdpRank: "#25",
            gdpGrowth: "-0.2%",
            currency: "Swedish Krona",
            currencyCode: "SEK",
            currencySymbol: "kr",
            inflation: "5.9%",
            unemployment: "7.5%",
            majorSectors: ["Services (65%)", "Industry (33%)", "Agriculture (1%)"],
            industries: ["Iron & Steel", "Precision Equipment", "Wood Pulp & Paper Products", "Processed Foods", "Motor Vehicles", "Telecommunications", "Pharmaceuticals"],
            exports: ["Machinery", "Motor Vehicles", "Paper Products", "Pulp & Wood", "Iron & Steel", "Chemicals", "Pharmaceuticals"],
            imports: ["Machinery", "Petroleum Products", "Chemicals", "Motor Vehicles", "Food", "Clothing"]
        },

        geography: {
            climate: "Temperate in south; Subarctic in north",
            avgTemperature: "6.1°C",
            annualRainfall: "624 mm",
            highestPoint: "Kebnekaise (2,097 m)",
            lowestPoint: "Reclaimed bay of Lake Hammarsjon (-2.4 m)",
            coastline: "3,218 km",
            forestCover: "68.9%",
            arableLand: "6.4%",
            terrain: "Mostly flat or gently rolling lowlands; mountains in west",
            naturalResources: ["Iron Ore", "Copper", "Lead", "Zinc", "Gold", "Silver", "Tungsten", "Uranium", "Arsenic", "Feldspar", "Timber", "Hydropower"]
        },

        geography_links: {
            rivers: ["Klarälven", "Dalälven", "Göta älv", "Torne älv"],
            mountains: ["Kebnekaise", "Sarektjåkkå", "Scandinavian Mountains"],
            deserts: [],
            forests: ["Swedish Forests", "Laponia Wilderness", "Muddus National Park"],
            oceans: ["Baltic Sea", "Gulf of Bothnia", "North Sea", "Skagerrak"]
        },

        culture: {
            officialLanguages: ["Swedish"],
            languages: ["Swedish", "Finnish", "Sámi", "Meänkieli", "Yiddish", "Romani", "English"],
            religions: ["Church of Sweden (Lutheran) (57%)", "None (34%)", "Islam (2%)", "Catholic (1%)", "Others (6%)"],
            heritageSites: ["Royal Domain of Drottningholm", "Birka and Hovgården", "Engelsberg Ironworks", "Rock Carvings in Tanum", "Skogskyrkogården", "Hanseatic Town of Visby", "Laponian Area", "Church Town of Gammelstad", "Naval Port of Karlskrona", "High Coast / Kvarken Archipelago"],
            festivals: ["Midsummer", "Lucia (St. Lucy's Day)", "Walpurgis Night", "National Day", "Crayfish Party"],
            cuisine: ["Swedish Meatballs", "Gravlax", "Surströmming", "Knäckebröd", "Janssons Frestelse", "Smörgåsbord", "Semla"],
            arts: ["Design", "Music (ABBA, Swedish House Mafia)", "Film (Ingmar Bergman)", "Literature (Astrid Lindgren)", "Glass Art"],
            sports: ["Ice Hockey", "Football", "Handball", "Cross-Country Skiing", "Tennis", "Bandy"]
        },

        symbols: {
            bird: "Eurasian Blackbird",
            animal: "Eurasian Elk (Moose)",
            flower: "Twinflower",
            tree: "None Official",
            anthem: "Du gamla, Du fria",
            motto: "For Sweden - With the Times"
        },

        demographics: {
            lifeExpectancy: 83.22,
            literacyRate: "99%",
            urbanPopulation: "88.7%",
            medianAge: 41.0
        },

        history: {
            timeline: [
                { year: "800s", title: "Viking Age", description: "Swedish Vikings explored eastward" },
                { year: "1397", title: "Kalmar Union", description: "United with Denmark and Norway" },
                { year: "1523", title: "Independence", description: "Gustav Vasa elected king" },
                { year: "1630-1648", title: "Great Power Era", description: "Swedish Empire expanded" },
                { year: "1809", title: "Lost Finland", description: "Finland ceded to Russia" },
                { year: "1905", title: "Norway Independence", description: "Peaceful dissolution of union" },
                { year: "1995", title: "EU Membership", description: "Joined European Union" },
                { year: "2024", title: "NATO Membership", description: "Joined NATO" }
            ],
            notableFigures: ["Gustav Vasa", "Alfred Nobel", "ABBA", "Ingmar Bergman", "Astrid Lindgren", "Greta Garbo"]
        },

        disputes: [],

        quickFacts: [
            { icon: "award", title: "Nobel Prize", text: "Home of Nobel Prize (founded 1895)" },
            { icon: "store", title: "IKEA", text: "Birthplace of IKEA (and H&M, Spotify, Volvo)" },
            { icon: "balance-scale", title: "Gender Equality", text: "World leader in gender equality" },
            { icon: "leaf", title: "Sustainability", text: "Leader in environmental sustainability" },
            { icon: "music", title: "Music Exports", text: "3rd largest music exporter globally" },
            { icon: "tree", title: "Forests", text: "Nearly 70% covered by forests" }
        ]
    },

    // 10. UNITED KINGDOM
    {
        id: "GBR",
        name: "United Kingdom",
        officialName: "United Kingdom of Great Britain and Northern Ireland",
        flag: "https://flagcdn.com/w320/gb.png",
        
        images: {
            hero: "https://images.unsplash.com/photo-1486299267070-83823f5448dd?w=1920&q=80",
            landscape: "https://images.unsplash.com/photo-1543425377-cb76d4c0b92d?w=1920&q=80",
            city: "https://images.unsplash.com/photo-1529655683826-aba9b3e77383?w=1920&q=80"
        },

        basic: {
            capital: "London",
            continent: "Europe",
            region: "Northern Europe",
            subregion: "British Isles",
            population: 67736802,
            area: 242495,
            populationDensity: 281,
            independence: "N/A (Continuous Sovereignty)",
            callingCode: "+44",
            tld: ".uk",
            drivingSide: "Left",
            electricity: "230V, 50Hz"
        },

        location: {
            coordinates: [55.3781, -3.4360],
            timezone: "UTC+0 (GMT)",
            neighbors: ["Ireland"],
            borders: 443,
            hemispheres: ["Northern", "Western"],
            islandNation: true
        },

        political: {
            government: "Unitary Parliamentary Constitutional Monarchy",
            headOfState: "King Charles III",
            headOfGovernment: "Prime Minister Keir Starmer",
            legislature: "Parliament (House of Lords & House of Commons)",
            legalSystem: "Common Law",
            states: 4,
            countries: 4,
            regions: 12,
            largestCity: "London",
            organizations: ["UN", "NATO", "G7", "G20", "Commonwealth", "OECD", "WTO", "Five Eyes"]
        },

        economy: {
            gdp: "$3.34 Trillion",
            gdpPPP: "$3.87 Trillion",
            gdpPerCapita: "$49,350",
            gdpRank: "#6",
            gdpGrowth: "0.1%",
            currency: "Pound Sterling",
            currencyCode: "GBP",
            currencySymbol: "£",
            inflation: "4.0%",
            unemployment: "4.2%",
            majorSectors: ["Services (81%)", "Industry (18%)", "Agriculture (1%)"],
            industries: ["Machine Tools", "Electric Power Equipment", "Automation Equipment", "Railroad Equipment", "Shipbuilding", "Aircraft", "Motor Vehicles", "Electronics", "Chemicals", "Pharmaceuticals", "Financial Services", "Tourism"],
            exports: ["Machinery", "Vehicles", "Pharmaceuticals", "Precious Metals", "Chemicals", "Fuels"],
            imports: ["Machinery", "Vehicles", "Crude Petroleum", "Pharmaceuticals", "Gems", "Clothing"]
        },

        geography: {
            climate: "Temperate; Moderated by prevailing southwest winds; More than half of days are overcast",
            avgTemperature: "9.6°C",
            annualRainfall: "1,154 mm",
            highestPoint: "Ben Nevis (1,345 m)",
            lowestPoint: "The Fens (-4 m)",
            coastline: "12,429 km",
            forestCover: "13%",
            arableLand: "25.1%",
            terrain: "Mostly rugged hills and low mountains; level to rolling plains in east and southeast",
            naturalResources: ["Coal", "Petroleum", "Natural Gas", "Iron Ore", "Lead", "Zinc", "Gold", "Tin", "Limestone", "Salt", "Clay", "Chalk", "Gypsum", "Silica", "Arable Land"]
        },

        geography_links: {
            rivers: ["Thames", "Severn", "Trent", "Great Ouse", "Wye", "Tyne", "Clyde"],
            mountains: ["Ben Nevis", "Snowdon", "Scafell Pike", "Scottish Highlands", "Pennines", "Lake District"],
            deserts: [],
            forests: ["New Forest", "Sherwood Forest", "Forest of Dean", "Caledonian Forest"],
            oceans: ["Atlantic Ocean", "North Sea", "Irish Sea", "English Channel", "Celtic Sea"]
        },

        culture: {
            officialLanguages: ["English"],
            languages: ["English", "Welsh", "Scottish Gaelic", "Irish", "Scots", "Cornish"],
            religions: ["Christianity (46%)", "None (37%)", "Islam (6.5%)", "Hinduism (1.7%)", "Sikhism (0.9%)", "Judaism (0.5%)", "Others (7.4%)"],
            heritageSites: ["Tower of London", "Westminster Abbey", "Stonehenge", "Blenheim Palace", "City of Bath", "Canterbury Cathedral", "Edinburgh Old and New Towns", "Giant's Causeway", "Hadrian's Wall"],
            festivals: ["Christmas", "Easter", "Bonfire Night", "St. George's Day", "Notting Hill Carnival", "Edinburgh Festival Fringe", "Glastonbury Festival"],
            cuisine: ["Fish and Chips", "Sunday Roast", "Full English Breakfast", "Shepherd's Pie", "Bangers and Mash", "Afternoon Tea", "Haggis", "Cornish Pasty"],
            arts: ["Literature (Shakespeare, Dickens)", "Music (Beatles, Rolling Stones)", "Theatre (West End)", "Art (Turner, Hockney)", "Film", "Fashion"],
            sports: ["Football", "Rugby", "Cricket", "Tennis", "Golf", "Rowing", "Horse Racing"]
        },

        symbols: {
            bird: "European Robin",
            animal: "Lion",
            flower: "Tudor Rose",
            tree: "Oak",
            anthem: "God Save the King",
            motto: "Dieu et mon droit (God and my right)"
        },

        demographics: {
            lifeExpectancy: 81.77,
            literacyRate: "99%",
            urbanPopulation: "84.4%",
            medianAge: 40.6
        },

        history: {
            timeline: [
                { year: "43", title: "Roman Britain", description: "Roman conquest of Britain" },
                { year: "1066", title: "Norman Conquest", description: "William the Conqueror became king" },
                { year: "1215", title: "Magna Carta", description: "Limited power of monarchy" },
                { year: "1707", title: "Act of Union", description: "Great Britain formed (England + Scotland)" },
                { year: "1801", title: "United Kingdom", description: "UK formed with Ireland" },
                { year: "1837-1901", title: "Victorian Era", description: "Height of British Empire" },
                { year: "1922", title: "Irish Independence", description: "Irish Free State created" },
                { year: "2020", title: "Brexit", description: "UK left European Union" }
            ],
            notableFigures: ["William Shakespeare", "Winston Churchill", "Queen Victoria", "Isaac Newton", "Charles Darwin", "The Beatles", "Princess Diana"]
        },

        disputes: [
            { name: "Gibraltar", description: "Disputed with Spain", type: "Territory" },
            { name: "Falkland Islands", description: "Disputed with Argentina", type: "Territory" },
            { name: "Northern Ireland", description: "Complex political status", type: "Political" }
        ],

        quickFacts: [
            { icon: "crown", title: "Royal Family", text: "World's most famous monarchy" },
            { icon: "language", title: "English Language", text: "Birthplace of English - spoken by 1.5 billion" },
            { icon: "university", title: "Oxford & Cambridge", text: "Home to world's oldest English-speaking universities" },
            { icon: "clock", title: "Greenwich", text: "Location of Prime Meridian (0° longitude)" },
            { icon: "futbol", title: "Football", text: "Invented modern football (1863)" },
            { icon: "book", title: "Literature", text: "Shakespeare, Dickens, Harry Potter" }
        ]
    },

        // 11. ALBANIA (continued)
    {
        id: "ALB",
        name: "Albania",
        officialName: "Republic of Albania",
        flag: "https://flagcdn.com/w320/al.png",
        
        images: {
            hero: "https://images.unsplash.com/photo-1569431328518-e1a2e5ff4b6a?w=1920&q=80",
            landscape: "https://images.unsplash.com/photo-1580564186067-5e7f31ac2c59?w=1920&q=80",
            city: "https://images.unsplash.com/photo-1569431832969-37dbb66e5abe?w=1920&q=80"
        },

        basic: {
            capital: "Tirana",
            continent: "Europe",
            region: "Southern Europe",
            subregion: "Balkans",
            population: 2854191,
            area: 28748,
            populationDensity: 105,
            independence: "1912",
            callingCode: "+355",
            tld: ".al",
            drivingSide: "Right",
            electricity: "230V, 50Hz"
        },

        location: {
            coordinates: [41.1533, 20.1683],
            timezone: "UTC+1 (CET)",
            neighbors: ["Montenegro", "Kosovo", "North Macedonia", "Greece"],
            borders: 691,
            hemispheres: ["Northern", "Eastern"]
        },

        political: {
            government: "Unitary Parliamentary Republic",
            headOfState: "President Bajram Begaj",
            headOfGovernment: "Prime Minister Edi Rama",
            legislature: "Kuvendi (Assembly)",
            legalSystem: "Civil Law",
            states: 12,
            counties: 12,
            municipalities: 61,
            largestCity: "Tirana",
            organizations: ["UN", "NATO", "OSCE", "WTO", "OIC (Observer)", "EU Candidate"]
        },

        economy: {
            gdp: "$22.97 Billion",
            gdpPPP: "$46.3 Billion",
            gdpPerCapita: "$8,050",
            gdpRank: "#124",
            gdpGrowth: "3.6%",
            currency: "Albanian Lek",
            currencyCode: "ALL",
            currencySymbol: "L",
            inflation: "4.8%",
            unemployment: "11.0%",
            majorSectors: ["Services (54%)", "Industry (21%)", "Agriculture (19%)"],
            industries: ["Food Processing", "Textiles & Clothing", "Lumber", "Oil", "Cement", "Chemicals", "Mining", "Basic Metals", "Hydropower"],
            exports: ["Footwear", "Textiles", "Asphalt", "Metals", "Crude Oil", "Vegetables", "Fruits", "Tobacco"],
            imports: ["Machinery", "Foodstuffs", "Textiles", "Chemicals"]
        },

        geography: {
            climate: "Mild Temperate; Cool, Cloudy, Wet Winters; Hot, Clear, Dry Summers",
            avgTemperature: "15.2°C",
            annualRainfall: "1,485 mm",
            highestPoint: "Korab (2,764 m)",
            lowestPoint: "Adriatic Sea (0 m)",
            coastline: "362 km",
            forestCover: "28.1%",
            arableLand: "22.3%",
            terrain: "Mostly mountains and hills; small plains along coast",
            naturalResources: ["Petroleum", "Natural Gas", "Coal", "Bauxite", "Chromite", "Copper", "Iron Ore", "Nickel", "Salt", "Timber", "Hydropower"]
        },

        geography_links: {
            rivers: ["Drin", "Vjosa", "Seman", "Shkumbin", "Mat"],
            mountains: ["Albanian Alps", "Korab", "Grammos", "Ceraunian Mountains"],
            deserts: [],
            forests: ["Albanian Forests", "Llogara National Park", "Theth National Park"],
            oceans: ["Adriatic Sea", "Ionian Sea"]
        },

        culture: {
            officialLanguages: ["Albanian"],
            languages: ["Albanian (Gheg & Tosk)", "Greek", "Macedonian", "Romani"],
            religions: ["Islam (58.8%)", "Christianity (16.9%)", "None (16.8%)", "Others (7.5%)"],
            heritageSites: ["Butrint", "Historic Centres of Berat and Gjirokastra", "Natural and Cultural Heritage of the Ohrid Region"],
            festivals: ["Dita e Verës (Summer Day)", "Independence Day", "Gjirokastra National Folklore Festival", "Kala Festival"],
            cuisine: ["Tavë Kosi", "Byrek", "Fërgesë", "Qofte", "Pite", "Baklava", "Raki"],
            arts: ["Iso-Polyphony", "Folk Dance", "Wood Carving", "Silver Filigree", "Traditional Costumes"],
            sports: ["Football", "Basketball", "Volleyball", "Weightlifting", "Swimming"]
        },

        symbols: {
            bird: "Golden Eagle",
            animal: "Golden Eagle",
            flower: "Red Poppy",
            tree: "Olive Tree",
            anthem: "Himni i Flamurit",
            motto: "Ti Shqipëri, më jep nder, më jep emrin Shqipëtar"
        },

        demographics: {
            lifeExpectancy: 79.00,
            literacyRate: "98.1%",
            urbanPopulation: "63.8%",
            medianAge: 36.4
        },

        history: {
            timeline: [
                { year: "168 BCE", title: "Roman Rule", description: "Became part of Roman Empire" },
                { year: "1190", title: "Principality", description: "First Albanian state established" },
                { year: "1385", title: "Ottoman Rule", description: "Ottoman conquest began" },
                { year: "1443", title: "Skanderbeg", description: "National hero resisted Ottomans" },
                { year: "1912", title: "Independence", description: "Declared independence from Ottoman Empire" },
                { year: "1944-1991", title: "Communist Era", description: "Enver Hoxha's isolationist regime" },
                { year: "1991", title: "Democracy", description: "Communist regime collapsed" },
                { year: "2009", title: "NATO", description: "Joined NATO" }
            ],
            notableFigures: ["Skanderbeg", "Mother Teresa", "Ismail Kadare", "Enver Hoxha", "Fan Noli"]
        },

        disputes: [],

        quickFacts: [
            { icon: "eagle", title: "Land of Eagles", text: "Albania means 'Land of Eagles'" },
            { icon: "pray", title: "Mother Teresa", text: "Birthplace of Mother Teresa (ethnic Albanian)" },
            { icon: "fortress", title: "Bunkers", text: "Over 750,000 bunkers built during communist era" },
            { icon: "coffee", title: "Coffee Culture", text: "Highest number of cafés per capita in world" },
            { icon: "handshake", title: "Besa", text: "Cultural code of honor and hospitality" },
            { icon: "umbrella-beach", title: "Albanian Riviera", text: "Beautiful Mediterranean coastline" }
        ]
    },

    // 12. BOSNIA AND HERZEGOVINA
    {
        id: "BIH",
        name: "Bosnia and Herzegovina",
        officialName: "Bosnia and Herzegovina",
        flag: "https://flagcdn.com/w320/ba.png",
        
        images: {
            hero: "https://images.unsplash.com/photo-1586859062834-91c55a58dd06?w=1920&q=80",
            landscape: "https://images.unsplash.com/photo-1590142033636-c6d5b5f6a6ff?w=1920&q=80",
            city: "https://images.unsplash.com/photo-1557149769-1f1e1c3e4c0c?w=1920&q=80"
        },

        basic: {
            capital: "Sarajevo",
            continent: "Europe",
            region: "Southern Europe",
            subregion: "Balkans",
            population: 3210847,
            area: 51197,
            populationDensity: 64,
            independence: "1992",
            callingCode: "+387",
            tld: ".ba",
            drivingSide: "Right",
            electricity: "230V, 50Hz"
        },

        location: {
            coordinates: [43.9159, 17.6791],
            timezone: "UTC+1 (CET)",
            neighbors: ["Croatia", "Serbia", "Montenegro"],
            borders: 1543,
            hemispheres: ["Northern", "Eastern"]
        },

        political: {
            government: "Federal Parliamentary Republic",
            headOfState: "Presidency Council (3 members rotating)",
            headOfGovernment: "Chairman of Council of Ministers Borjana Krišto",
            legislature: "Parliamentary Assembly (House of Peoples & House of Representatives)",
            legalSystem: "Civil Law",
            states: 2,
            entities: 2,
            cantons: 10,
            largestCity: "Sarajevo",
            organizations: ["UN", "OSCE", "WTO", "Council of Europe", "EU Candidate"]
        },

        economy: {
            gdp: "$24.16 Billion",
            gdpPPP: "$60.0 Billion",
            gdpPerCapita: "$7,528",
            gdpRank: "#115",
            gdpGrowth: "1.7%",
            currency: "Convertible Mark",
            currencyCode: "BAM",
            currencySymbol: "KM",
            inflation: "6.1%",
            unemployment: "14.9%",
            majorSectors: ["Services (60%)", "Industry (26%)", "Agriculture (6%)"],
            industries: ["Steel", "Mining", "Vehicle Assembly", "Textiles", "Tobacco Products", "Wooden Furniture", "Domestic Appliances", "Oil Refining"],
            exports: ["Metals", "Clothing", "Wood Products", "Electrical Equipment", "Minerals & Fuels"],
            imports: ["Machinery", "Chemicals", "Fuels", "Foodstuffs"]
        },

        geography: {
            climate: "Continental; Moderate with Hot Summers and Cold Winters",
            avgTemperature: "10.8°C",
            annualRainfall: "1,028 mm",
            highestPoint: "Maglić (2,386 m)",
            lowestPoint: "Adriatic Sea (0 m)",
            coastline: "20 km",
            forestCover: "42.7%",
            arableLand: "19.7%",
            terrain: "Mountains and valleys",
            naturalResources: ["Coal", "Iron Ore", "Lead", "Zinc", "Manganese", "Bauxite", "Vehicle Assembly", "Timber", "Hydropower"]
        },

        geography_links: {
            rivers: ["Bosna", "Neretva", "Drina", "Sava", "Una", "Vrbas"],
            mountains: ["Dinaric Alps", "Maglić", "Bjelašnica", "Jahorina", "Vlašić"],
            deserts: [],
            forests: ["Perućica (Primeval Forest)", "Sutjeska National Park", "Una National Park"],
            oceans: ["Adriatic Sea"]
        },

        culture: {
            officialLanguages: ["Bosnian", "Croatian", "Serbian"],
            languages: ["Bosnian", "Croatian", "Serbian"],
            religions: ["Islam (51%)", "Serbian Orthodox (31%)", "Roman Catholicism (15%)", "Others (3%)"],
            heritageSites: ["Mehmed Paša Sokolović Bridge in Višegrad", "Old Bridge Area of Mostar", "Stećci Medieval Tombstones", "Ancient and Primeval Beech Forests"],
            festivals: ["Sarajevo Film Festival", "Baščaršija Nights", "Mostar Summer Festival", "Jajce Theater Festival"],
            cuisine: ["Ćevapi", "Burek", "Bosanski Lonac", "Dolma", "Baklava", "Tufahija", "Begova Čorba"],
            arts: ["Sevdalinka (Traditional Music)", "Folk Dance", "Carpet Weaving", "Coppersmithing", "Calligraphy"],
            sports: ["Football", "Basketball", "Handball", "Volleyball", "Chess"]
        },

        symbols: {
            bird: "None Official",
            animal: "None Official",
            flower: "Lily",
            tree: "None Official",
            anthem: "Državna himna Bosne i Hercegovine",
            motto: "None Official"
        },

        demographics: {
            lifeExpectancy: 77.74,
            literacyRate: "98.5%",
            urbanPopulation: "49.4%",
            medianAge: 43.3
        },

        history: {
            timeline: [
                { year: "1154", title: "Banate of Bosnia", description: "First Bosnian state" },
                { year: "1377", title: "Kingdom", description: "Kingdom of Bosnia established" },
                { year: "1463", title: "Ottoman Rule", description: "Ottoman conquest" },
                { year: "1878", title: "Austro-Hungarian Rule", description: "Austro-Hungarian occupation" },
                { year: "1914", title: "WWI Trigger", description: "Assassination of Archduke Franz Ferdinand in Sarajevo" },
                { year: "1918", title: "Yugoslavia", description: "Became part of Yugoslavia" },
                { year: "1992-1995", title: "Bosnian War", description: "Independence war and ethnic conflict" },
                { year: "1995", title: "Dayton Agreement", description: "Peace agreement signed" }
            ],
            notableFigures: ["Tvrtko I", "Ivo Andrić", "Gavrilo Princip", "Meša Selimović"]
        },

        disputes: [
            { name: "Political Structure", description: "Complex ethnic division and governance issues", type: "Political" }
        ],

        quickFacts: [
            { icon: "bridge", title: "Stari Most", text: "Iconic 16th-century bridge in Mostar (rebuilt)" },
            { icon: "crosshairs", title: "WWI Start", text: "WWI started with assassination in Sarajevo (1914)" },
            { icon: "mountain", title: "Olympic Mountains", text: "Hosted 1984 Winter Olympics" },
            { icon: "tree", title: "Primeval Forest", text: "One of last primeval forests in Europe (Perućica)" },
            { icon: "water", title: "Neretva", text: "Crystal-clear emerald rivers" },
            { icon: "coffee", title: "Bosnian Coffee", text: "Unique coffee culture and tradition" }
        ]
    },

    // 13. CROATIA
    {
        id: "HRV",
        name: "Croatia",
        officialName: "Republic of Croatia",
        flag: "https://flagcdn.com/w320/hr.png",
        
        images: {
            hero: "https://images.unsplash.com/photo-1555990538-c86c6819875b?w=1920&q=80",
            landscape: "https://images.unsplash.com/photo-1504109586057-7a2ae83d1338?w=1920&q=80",
            city: "https://images.unsplash.com/photo-1559591937-2d6a18a9b31e?w=1920&q=80"
        },

        basic: {
            capital: "Zagreb",
            continent: "Europe",
            region: "Southern Europe",
            subregion: "Balkans",
            population: 3855641,
            area: 56594,
            populationDensity: 68,
            independence: "1991",
            callingCode: "+385",
            tld: ".hr",
            drivingSide: "Right",
            electricity: "230V, 50Hz"
        },

        location: {
            coordinates: [45.1000, 15.2000],
            timezone: "UTC+1 (CET)",
            neighbors: ["Slovenia", "Hungary", "Serbia", "Bosnia and Herzegovina", "Montenegro"],
            borders: 2237,
            hemispheres: ["Northern", "Eastern"]
        },

        political: {
            government: "Unitary Parliamentary Republic",
            headOfState: "President Zoran Milanović",
            headOfGovernment: "Prime Minister Andrej Plenković",
            legislature: "Sabor (Parliament)",
            legalSystem: "Civil Law",
            states: 21,
            counties: 20,
            cities: 1,
            largestCity: "Zagreb",
            organizations: ["UN", "EU", "NATO", "OECD", "WTO", "Schengen Area", "Eurozone"]
        },

        economy: {
            gdp: "$78.9 Billion",
            gdpPPP: "$154.5 Billion",
            gdpPerCapita: "$20,478",
            gdpRank: "#77",
            gdpGrowth: "2.8%",
            currency: "Euro",
            currencyCode: "EUR",
            currencySymbol: "€",
            inflation: "8.4%",
            unemployment: "6.1%",
            majorSectors: ["Services (70%)", "Industry (26%)", "Agriculture (3%)"],
            industries: ["Chemicals & Plastics", "Machine Tools", "Electronics", "Iron & Steel", "Petroleum & Natural Gas", "Food & Beverages", "Tourism", "Shipbuilding"],
            exports: ["Transport Equipment", "Machinery", "Textiles", "Chemicals", "Foodstuffs", "Fuels"],
            imports: ["Machinery", "Transport Equipment", "Fuels", "Chemicals", "Food Products"]
        },

        geography: {
            climate: "Mediterranean and Continental",
            avgTemperature: "13.1°C",
            annualRainfall: "1,113 mm",
            highestPoint: "Dinara (1,831 m)",
            lowestPoint: "Adriatic Sea (0 m)",
            coastline: "5,835 km",
            forestCover: "34.3%",
            arableLand: "16.7%",
            terrain: "Geographically diverse; flat plains along Hungarian border, low mountains and highlands near Adriatic coast and islands",
            naturalResources: ["Oil", "Coal", "Bauxite", "Iron Ore", "Calcium", "Gypsum", "Natural Asphalt", "Silica", "Mica", "Clays", "Salt", "Hydropower"]
        },

        geography_links: {
            rivers: ["Danube", "Sava", "Drava", "Mura", "Kupa"],
            mountains: ["Dinaric Alps", "Dinara", "Biokovo", "Velebit"],
            deserts: [],
            forests: ["Plitvice Lakes National Park", "Risnjak National Park", "Northern Velebit National Park"],
            oceans: ["Adriatic Sea"]
        },

        culture: {
            officialLanguages: ["Croatian"],
            languages: ["Croatian", "Serbian", "Italian", "Hungarian", "Czech"],
            religions: ["Roman Catholicism (86.3%)", "Orthodox (4.4%)", "Islam (1.5%)", "None (5.2%)", "Others (2.6%)"],
            heritageSites: ["Plitvice Lakes National Park", "Historical Complex of Split with Diocletian's Palace", "Old City of Dubrovnik", "Episcopal Complex of Euphrasius Basilica in Poreč", "Historic City of Trogir", "Cathedral of St James in Šibenik", "Stari Grad Plain", "Ancient and Primeval Beech Forests"],
            festivals: ["Dubrovnik Summer Festival", "Ultra Europe", "INmusic", "Špancirfest", "Rijeka Carnival"],
            cuisine: ["Ćevapi", "Peka", "Crni Rižot", "Pršut", "Strukli", "Fritule", "Soparnik"],
            arts: ["Klapa Singing", "Lacemaking", "Naive Art", "Folk Dance", "Traditional Costumes"],
            sports: ["Football", "Water Polo", "Handball", "Basketball", "Tennis", "Sailing"]
        },

        symbols: {
            bird: "Nightingale",
            animal: "Pine Marten (Kuna)",
            flower: "Iris croatica",
            tree: "Slavonian Oak",
            anthem: "Lijepa naša domovino",
            motto: "None Official"
        },

        demographics: {
            lifeExpectancy: 78.44,
            literacyRate: "99.3%",
            urbanPopulation: "58.2%",
            medianAge: 44.0
        },

        history: {
            timeline: [
                { year: "925", title: "Kingdom", description: "Tomislav became first King of Croatia" },
                { year: "1102", title: "Personal Union", description: "Union with Kingdom of Hungary" },
                { year: "1527", title: "Habsburg Rule", description: "Croatian nobility elected Habsburg king" },
                { year: "1918", title: "Yugoslavia", description: "Became part of Yugoslavia" },
                { year: "1991", title: "Independence", description: "Declared independence from Yugoslavia" },
                { year: "1991-1995", title: "Croatian War", description: "War of independence" },
                { year: "2013", title: "EU Membership", description: "Joined European Union" },
                { year: "2023", title: "Eurozone & Schengen", description: "Joined Eurozone and Schengen Area" }
            ],
            notableFigures: ["Tomislav", "Josip Jelačić", "Nikola Tesla", "Franjo Tuđman", "Luka Modrić"]
        },

        disputes: [
            { name: "Bay of Piran", description: "Maritime border dispute with Slovenia", type: "Maritime" }
        ],

        quickFacts: [
            { icon: "water", title: "Plitvice Lakes", text: "Stunning cascading lakes (UNESCO site)" },
            { icon: "film", title: "Game of Thrones", text: "Dubrovnik was King's Landing filming location" },
            { icon: "trophy", title: "Football", text: "Reached FIFA World Cup Final 2018" },
            { icon: "island-tropical", title: "Islands", text: "Over 1,200 islands along Adriatic coast" },
            { icon: "tie", title: "Necktie Origin", text: "Necktie (cravat) originated in Croatia" },
            { icon: "pen", title: "Inventions", text: "Birthplace of Nikola Tesla" }
        ]
    },

    // 14. GREECE
    {
        id: "GRC",
        name: "Greece",
        officialName: "Hellenic Republic",
        flag: "https://flagcdn.com/w320/gr.png",
        
        images: {
            hero: "https://images.unsplash.com/photo-1503152394-c571994fd383?w=1920&q=80",
            landscape: "https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?w=1920&q=80",
            city: "https://images.unsplash.com/photo-1555993539-1732b0258235?w=1920&q=80"
        },

        basic: {
            capital: "Athens",
            continent: "Europe",
            region: "Southern Europe",
            subregion: "Balkans",
            population: 10341277,
            area: 131957,
            populationDensity: 79,
            independence: "1821",
            callingCode: "+30",
            tld: ".gr",
            drivingSide: "Right",
            electricity: "230V, 50Hz"
        },

        location: {
            coordinates: [39.0742, 21.8243],
            timezone: "UTC+2 (EET)",
            neighbors: ["Albania", "North Macedonia", "Bulgaria", "Turkey"],
            borders: 1110,
            hemispheres: ["Northern", "Eastern"]
        },

        political: {
            government: "Unitary Parliamentary Republic",
            headOfState: "President Katerina Sakellaropoulou",
            headOfGovernment: "Prime Minister Kyriakos Mitsotakis",
            legislature: "Hellenic Parliament",
            legalSystem: "Civil Law",
            states: 13,
            regions: 13,
            municipalities: 332,
            largestCity: "Athens",
            organizations: ["UN", "EU", "NATO", "OECD", "WTO", "Schengen Area", "Eurozone", "Council of Europe"]
        },

        economy: {
            gdp: "$239 Billion",
            gdpPPP: "$378 Billion",
            gdpPerCapita: "$23,107",
            gdpRank: "#51",
            gdpGrowth: "2.0%",
            currency: "Euro",
            currencyCode: "EUR",
            currencySymbol: "€",
            inflation: "4.2%",
            unemployment: "11.1%",
            majorSectors: ["Services (80%)", "Industry (15%)", "Agriculture (4%)"],
            industries: ["Tourism", "Food & Tobacco Processing", "Textiles", "Chemicals", "Metal Products", "Mining", "Petroleum", "Shipping"],
            exports: ["Refined Petroleum", "Packaged Medicines", "Aluminum", "Electrical Products", "Fruits"],
            imports: ["Crude Petroleum", "Refined Petroleum", "Packaged Medicines", "Passenger & Cargo Ships", "Vehicles"]
        },

        geography: {
            climate: "Mediterranean; Mild Wet Winters, Hot Dry Summers",
            avgTemperature: "17.9°C",
            annualRainfall: "652 mm",
            highestPoint: "Mount Olympus (2,917 m)",
            lowestPoint: "Mediterranean Sea (0 m)",
            coastline: "13,676 km",
            forestCover: "30.3%",
            arableLand: "19.7%",
            terrain: "Mountainous with ranges extending into the sea as peninsulas or chains of islands",
            naturalResources: ["Lignite", "Petroleum", "Iron Ore", "Bauxite", "Lead", "Zinc", "Nickel", "Magnesite", "Marble", "Salt", "Hydropower"]
        },

        geography_links: {
            rivers: ["Aliakmon", "Achelous", "Pinios", "Evros", "Nestos"],
            mountains: ["Mount Olympus", "Mount Parnassus", "Mount Athos", "Pindus Mountains", "Taygetus"],
            deserts: [],
            forests: ["Rhodope Forests", "Pindus Forests", "Mount Athos Forests"],
            oceans: ["Mediterranean Sea", "Aegean Sea", "Ionian Sea", "Sea of Crete"]
        },

        culture: {
            officialLanguages: ["Greek"],
            languages: ["Greek", "English", "French", "German"],
            religions: ["Greek Orthodox (90%)", "Islam (2%)", "Others (8%)"],
            heritageSites: ["Acropolis of Athens", "Delphi", "Meteora", "Mount Athos", "Olympia", "Epidaurus", "Delos", "Mystras", "Medieval City of Rhodes", "Sanctuary of Asklepios at Epidaurus", "Temple of Apollo Epicurius at Bassae"],
            festivals: ["Easter", "Apokries (Carnival)", "Panigiri", "Athens Epidaurus Festival", "Thessaloniki Film Festival"],
            cuisine: ["Moussaka", "Souvlaki", "Gyros", "Spanakopita", "Tzatziki", "Feta Cheese", "Greek Salad", "Baklava"],
            arts: ["Ancient Greek Theatre", "Byzantine Art", "Rebetiko Music", "Traditional Dance (Sirtaki, Kalamatianos)", "Pottery"],
            sports: ["Football", "Basketball", "Water Polo", "Sailing", "Athletics", "Wrestling"]
        },

        symbols: {
            bird: "Phoenix (Mythological)",
            animal: "Dolphin",
            flower: "Bear's Breech (Acanthus)",
            tree: "Olive Tree",
            anthem: "Ýmnos is tin Eleftherían",
            motto: "Freedom or Death"
        },

        demographics: {
            lifeExpectancy: 81.28,
            literacyRate: "97.9%",
            urbanPopulation: "80.1%",
            medianAge: 45.6
        },

        history: {
            timeline: [
                { year: "3000 BCE", title: "Minoan Civilization", description: "First advanced civilization in Europe" },
                { year: "800 BCE", title: "Ancient Greece", description: "Greek city-states flourished" },
                { year: "776 BCE", title: "Olympics", description: "First Olympic Games held" },
                { year: "508 BCE", title: "Democracy", description: "Democracy established in Athens" },
                { year: "146 BCE", title: "Roman Rule", description: "Conquered by Rome" },
                { year: "1453", title: "Ottoman Rule", description: "Fall of Constantinople; Ottoman period began" },
                { year: "1821", title: "Independence", description: "Greek War of Independence began" },
                { year: "1981", title: "EU Membership", description: "Joined European Communities" }
            ],
            notableFigures: ["Alexander the Great", "Socrates", "Plato", "Aristotle", "Homer", "Pericles", "Eleftherios Venizelos"]
        },

        disputes: [
            { name: "Aegean Sea", description: "Maritime disputes with Turkey", type: "Maritime" },
            { name: "Cyprus", description: "Division of Cyprus issue", type: "Political" }
        ],

        quickFacts: [
            { icon: "landmark", title: "Cradle of Civilization", text: "Birthplace of democracy, Western philosophy, Olympics" },
            { icon: "running", title: "Olympics", text: "Originated Olympic Games (776 BCE)" },
            { icon: "island-tropical", title: "Islands", text: "6,000 islands (227 inhabited)" },
            { icon: "ship", title: "Shipping", text: "World's largest merchant shipping fleet" },
            { icon: "sun", title: "Sunshine", text: "Over 250 days of sunshine per year" },
            { icon: "scroll", title: "Philosophy", text: "Home of Socrates, Plato, Aristotle" }
        ]
    },

    // 15. KOSOVO
    {
        id: "XKX",
        name: "Kosovo",
        officialName: "Republic of Kosovo",
        flag: "https://flagcdn.com/w320/xk.png",
        
        images: {
            hero: "https://images.unsplash.com/photo-1592906209472-a36b1f3782ef?w=1920&q=80",
            landscape: "https://images.unsplash.com/photo-1597220869811-9eb689342f09?w=1920&q=80",
            city: "https://images.unsplash.com/photo-1580400224591-35f5fbb46eb8?w=1920&q=80"
        },

        basic: {
            capital: "Pristina",
            continent: "Europe",
            region: "Southern Europe",
            subregion: "Balkans",
            population: 1761985,
            area: 10887,
            populationDensity: 159,
            independence: "2008 (Declared)",
            callingCode: "+383",
            tld: ".xk",
            drivingSide: "Right",
            electricity: "230V, 50Hz"
        },

        location: {
            coordinates: [42.6026, 20.9020],
            timezone: "UTC+1 (CET)",
            neighbors: ["Serbia", "Montenegro", "Albania", "North Macedonia"],
            borders: 714,
            hemispheres: ["Northern", "Eastern"]
        },

        political: {
            government: "Unitary Parliamentary Republic",
            headOfState: "President Vjosa Osmani",
            headOfGovernment: "Prime Minister Albin Kurti",
            legislature: "Assembly of Kosovo",
            legalSystem: "Civil Law",
            states: 7,
            districts: 7,
            municipalities: 38,
            largestCity: "Pristina",
            organizations: ["IMF", "World Bank", "EBRD", "Partial UN Recognition"]
        },

        economy: {
            gdp: "$9.41 Billion",
            gdpPPP: "$23.3 Billion",
            gdpPerCapita: "$5,340",
            gdpRank: "#143",
            gdpGrowth: "3.5%",
            currency: "Euro",
            currencyCode: "EUR",
            currencySymbol: "€",
            inflation: "4.9%",
            unemployment: "25.0%",
            majorSectors: ["Services (65%)", "Industry (22%)", "Agriculture (8%)"],
            industries: ["Mining", "Construction Materials", "Base Metals", "Leather", "Machinery", "Appliances", "Food Processing"],
            exports: ["Mining Products", "Metals", "Minerals", "Plastics", "Machinery"],
            imports: ["Foodstuffs", "Petroleum", "Chemicals", "Machinery"]
        },

        geography: {
            climate: "Continental; Influenced by Mediterranean; Cold Snowy Winters, Hot Dry Summers",
            avgTemperature: "10.4°C",
            annualRainfall: "600 mm",
            highestPoint: "Đeravica (2,656 m)",
            lowestPoint: "White Drin (297 m)",
            coastline: "0 km (Landlocked)",
            forestCover: "44.7%",
            arableLand: "27.4%",
            terrain: "Flat fluvial basin surrounded by mountains",
            naturalResources: ["Nickel", "Lead", "Zinc", "Magnesium", "Lignite", "Kaolin", "Chrome", "Bauxite"]
        },

        geography_links: {
            rivers: ["White Drin", "Sitnica", "Ibar", "Lepenc"],
            mountains: ["Šar Mountains", "Kopaonik", "Prokletije", "Đeravica"],
            deserts: [],
            forests: ["Sharr Mountains National Park", "Bjeshkët e Nemuna National Park"],
            oceans: []
        },

        culture: {
            officialLanguages: ["Albanian", "Serbian"],
            languages: ["Albanian", "Serbian", "Bosnian", "Turkish", "Romani"],
            religions: ["Islam (96%)", "Serbian Orthodox (2%)", "Roman Catholicism (2%)"],
            heritageSites: ["Medieval Monuments in Kosovo (UNESCO, in danger)"],
            festivals: ["Dokufest", "PriFilmFest", "Hardh Fest", "Chopin Piano Fest"],
            cuisine: ["Flia", "Pite", "Tavë Kosi", "Sarma", "Qebapa", "Pershuta", "Baklava"],
            arts: ["Folk Music", "Traditional Dance", "Filigree", "Woodwork", "Embroidery"],
            sports: ["Football", "Basketball", "Handball", "Wrestling", "Judo"]
        },

        symbols: {
            bird: "None Official",
            animal: "None Official",
            flower: "None Official",
            tree: "None Official",
            anthem: "Europe",
            motto: "None Official"
        },

        demographics: {
            lifeExpectancy: 72.70,
            literacyRate: "91.9%",
            urbanPopulation: "42.0%",
            medianAge: 30.5
        },

        history: {
            timeline: [
                { year: "1389", title: "Battle of Kosovo", description: "Ottoman victory; significant Serbian historical event" },
                { year: "1912", title: "Balkan Wars", description: "Serbia took control from Ottomans" },
                { year: "1945", title: "Yugoslavia", description: "Autonomous region within Yugoslavia" },
                { year: "1999", title: "NATO Intervention", description: "NATO bombing of Serbia; UN administration began" },
                { year: "2008", title: "Independence", description: "Declared independence from Serbia" },
                { year: "2023", title: "Tensions", description: "Ongoing tensions with Serbia" }
            ],
            notableFigures: ["Mother Teresa (Albanian)", "Ibrahim Rugova", "Hashim Thaçi", "Vjosa Osmani"]
        },

        disputes: [
            { name: "Serbia", description: "Serbia does not recognize Kosovo's independence", type: "Territory" },
            { name: "Northern Kosovo", description: "Ethnic Serb-majority municipalities tensions", type: "Political" }
        ],

        quickFacts: [
            { icon: "flag", title: "Youngest Nation", text: "One of world's youngest nations (2008)" },
            { icon: "user-check", title: "Partial Recognition", text: "Recognized by 104 UN member states" },
            { icon: "users", title: "Young Population", text: "One of Europe's youngest populations (median 30.5)" },
            { icon: "plane", title: "Diaspora", text: "Large diaspora in Germany, Switzerland, UK" },
            { icon: "landmark", title: "Medieval Heritage", text: "Serbian Orthodox medieval monasteries (UNESCO)" }
        ]
    },

    // 16. MONTENEGRO
    {
        id: "MNE",
        name: "Montenegro",
        officialName: "Montenegro",
        flag: "https://flagcdn.com/w320/me.png",
        
        images: {
            hero: "https://images.unsplash.com/photo-1555990538-c86c6819875b?w=1920&q=80",
            landscape: "https://images.unsplash.com/photo-1602606837917-f7f7f0fd0a54?w=1920&q=80",
            city: "https://images.unsplash.com/photo-1586699253884-e199770f63b9?w=1920&q=80"
        },

        basic: {
            capital: "Podgorica",
            continent: "Europe",
            region: "Southern Europe",
            subregion: "Balkans",
            population: 616695,
            area: 13812,
            populationDensity: 45,
            independence: "2006",
            callingCode: "+382",
            tld: ".me",
            drivingSide: "Right",
            electricity: "230V, 50Hz"
        },

        location: {
            coordinates: [42.7087, 19.3744],
            timezone: "UTC+1 (CET)",
            neighbors: ["Bosnia and Herzegovina", "Serbia", "Kosovo", "Albania", "Croatia"],
            borders: 680,
            hemispheres: ["Northern", "Eastern"]
        },

        political: {
            government: "Unitary Parliamentary Republic",
            headOfState: "President Jakov Milatović",
            headOfGovernment: "Prime Minister Milojko Spajić",
            legislature: "Skupština (Parliament)",
            legalSystem: "Civil Law",
            states: 24,
            municipalities: 24,
            largestCity: "Podgorica",
            organizations: ["UN", "NATO", "OSCE", "WTO", "Council of Europe", "EU Candidate"]
        },

        economy: {
            gdp: "$6.96 Billion",
            gdpPPP: "$16.2 Billion",
            gdpPerCapita: "$11,295",
            gdpRank: "#151",
            gdpGrowth: "6.0%",
            currency: "Euro (unilateral)",
            currencyCode: "EUR",
            currencySymbol: "€",
            inflation: "8.6%",
            unemployment: "14.5%",
            majorSectors: ["Services (70%)", "Industry (20%)", "Agriculture (7%)"],
            industries: ["Steelmaking", "Aluminum", "Agriculture Processing", "Consumer Goods", "Tourism"],
            exports: ["Aluminum", "Electricity", "Metal Products", "Bauxite", "Wine"],
            imports: ["Fuels", "Automobiles", "Foodstuffs", "Chemicals"]
        },

        geography: {
            climate: "Mediterranean on coast; Continental in interior",
            avgTemperature: "11.8°C",
            annualRainfall: "1,798 mm",
            highestPoint: "Bobotov Kuk (2,522 m)",
            lowestPoint: "Adriatic Sea (0 m)",
            coastline: "293 km",
            forestCover: "61.5%",
            arableLand: "12.5%",
            terrain: "Highly indented coastline with narrow coastal plain backed by rugged high limestone mountains and plateaus",
            naturalResources: ["Bauxite", "Hydroelectric Power", "Forests"]
        },

        geography_links: {
            rivers: ["Tara", "Morača", "Zeta", "Lim", "Piva"],
            mountains: ["Durmitor", "Lovćen", "Prokletije", "Komovi", "Bobotov Kuk"],
            deserts: [],
            forests: ["Biogradska Gora", "Durmitor National Park", "Prokletije National Park"],
            oceans: ["Adriatic Sea"]
        },

        culture: {
            officialLanguages: ["Montenegrin"],
            languages: ["Montenegrin", "Serbian", "Bosnian", "Albanian", "Croatian"],
            religions: ["Serbian Orthodox (72%)", "Islam (19%)", "Roman Catholicism (3%)", "Others (6%)"],
            heritageSites: ["Natural and Culturo-Historical Region of Kotor", "Durmitor National Park", "Stećci Medieval Tombstones"],
            festivals: ["Kotor Carnival", "Sea Dance Festival", "Guitar Art Summer Fest", "Mimosa Festival"],
            cuisine: ["Njeguški Pršut", "Kačamak", "Cicvara", "Riblji Brodet", "Pljeskavica", "Kajmak"],
            arts: ["Gusle (Traditional Instrument)", "Oro Dance", "Poetry", "Stone Carving"],
            sports: ["Football", "Water Polo", "Basketball", "Handball", "Swimming"]
        },

        symbols: {
            bird: "Golden Eagle",
            animal: "None Official",
            flower: "Mimosa",
            tree: "Laurel",
            anthem: "Oj, svijetla majska zoro",
            motto: "None Official"
        },

        demographics: {
            lifeExpectancy: 77.33,
            literacyRate: "98.8%",
            urbanPopulation: "68.2%",
            medianAge: 39.5
        },

        history: {
            timeline: [
                { year: "1042", title: "Duklja", description: "First independent Montenegrin state" },
                { year: "1516", title: "Theocracy", description: "Prince-Bishops ruled Montenegro" },
                { year: "1878", title: "International Recognition", description: "Recognized at Congress of Berlin" },
                { year: "1918", title: "Yugoslavia", description: "Merged into Kingdom of Yugoslavia" },
                { year: "2006", title: "Independence", description: "Independence restored via referendum" },
                { year: "2017", title: "NATO", description: "Joined NATO" }
            ],
            notableFigures: ["Petar II Petrović-Njegoš", "Nikola I", "Josip Broz Tito (Yugoslav)"]
        },

        disputes: [],

        quickFacts: [
            { icon: "mountain", title: "Black Mountain", text: "Name means 'Black Mountain' in Venetian" },
            { icon: "water", title: "Bay of Kotor", text: "Stunning fjord-like bay (UNESCO site)" },
            { icon: "tree", title: "Eco-State", text: "Declared 'Ecological State' in 1991" },
            { icon: "water", title: "Tara Canyon", text: "Europe's deepest canyon (1,300m)" },
            { icon: "euro-sign", title: "Euro User", text: "Uses Euro without being EU/Eurozone member" }
        ]
    },

    // 17. NORTH MACEDONIA
    {
        id: "MKD",
        name: "North Macedonia",
        officialName: "Republic of North Macedonia",
        flag: "https://flagcdn.com/w320/mk.png",
        
        images: {
            hero: "https://images.unsplash.com/photo-1597220869811-9eb689342f09?w=1920&q=80",
            landscape: "https://images.unsplash.com/photo-1596476047199-82da6b23f24a?w=1920&q=80",
            city: "https://images.unsplash.com/photo-1579814270124-16c4ea3c5b91?w=1920&q=80"
        },

        basic: {
            capital: "Skopje",
            continent: "Europe",
            region: "Southern Europe",
            subregion: "Balkans",
            population: 2085679,
            area: 25713,
            populationDensity: 82,
            independence: "1991",
            callingCode: "+389",
            tld: ".mk",
            drivingSide: "Right",
            electricity: "230V, 50Hz"
        },

        location: {
            coordinates: [41.5124, 21.7465],
            timezone: "UTC+1 (CET)",
            neighbors: ["Kosovo", "Serbia", "Bulgaria", "Greece", "Albania"],
            borders: 838,
            hemispheres: ["Northern", "Eastern"]
        },

        political: {
            government: "Unitary Parliamentary Republic",
            headOfState: "President Gordana Siljanovska-Davkova",
            headOfGovernment: "Prime Minister Hristijan Mickoski",
            legislature: "Sobranie (Assembly)",
            legalSystem: "Civil Law",
            states: 8,
            statisticalRegions: 8,
            municipalities: 80,
            largestCity: "Skopje",
            organizations: ["UN", "NATO", "OSCE", "WTO", "Council of Europe", "EU Candidate"]
        },

        economy: {
            gdp: "$14.18 Billion",
            gdpPPP: "$42.1 Billion",
            gdpPerCapita: "$6,806",
            gdpRank: "#128",
            gdpGrowth: "1.0%",
            currency: "Macedonian Denar",
            currencyCode: "MKD",
            currencySymbol: "ден",
            inflation: "9.4%",
            unemployment: "14.4%",
            majorSectors: ["Services (59%)", "Industry (29%)", "Agriculture (9%)"],
            industries: ["Food Processing", "Beverages", "Textiles", "Chemicals", "Iron & Steel", "Cement", "Energy", "Pharmaceuticals", "Automotive Parts"],
            exports: ["Metals", "Chemicals", "Machinery", "Food & Beverages", "Automotive Parts"],
            imports: ["Machinery", "Chemicals", "Fuels", "Food Products"]
        },

        geography: {
            climate: "Continental; Warm Dry Summers, Cold Winters",
            avgTemperature: "11.5°C",
            annualRainfall: "660 mm",
            highestPoint: "Golem Korab (2,764 m)",
            lowestPoint: "Vardar River (50 m)",
            coastline: "0 km (Landlocked)",
            forestCover: "39.6%",
            arableLand: "16.4%",
            terrain: "Mountainous with deep basins and valleys; three large lakes",
            naturalResources: ["Iron Ore", "Copper", "Lead", "Zinc", "Chromite", "Manganese", "Nickel", "Tungsten", "Gold", "Silver", "Asbestos", "Gypsum", "Timber"]
        },

        geography_links: {
            rivers: ["Vardar", "Treska", "Crna Reka", "Bregalnica", "Pčinja"],
            mountains: ["Korab", "Šar Mountains", "Osogovo", "Bistra", "Pelister"],
            deserts: [],
            forests: ["Mavrovo National Park", "Pelister National Park", "Galičica National Park"],
            oceans: []
        },

        culture: {
            officialLanguages: ["Macedonian", "Albanian"],
            languages: ["Macedonian", "Albanian", "Turkish", "Romani", "Serbian"],
            religions: ["Macedonian Orthodox (65%)", "Islam (32%)", "Others (3%)"],
            heritageSites: ["Natural and Cultural Heritage of the Ohrid Region", "Ancient and Primeval Beech Forests"],
            festivals: ["Ohrid Summer Festival", "Skopje Jazz Festival", "Taksirat Music Festival", "Balkan Folklore Festival"],
            cuisine: ["Tavče Gravče", "Ajvar", "Pastrmajlija", "Kebapi", "Šopska Salata", "Burek"],
            arts: ["Orthodox Icons", "Folk Music & Dance", "Woodwork", "Traditional Costumes", "Ohrid Pearls"],
            sports: ["Football", "Handball", "Basketball", "Wrestling", "Volleyball"]
        },

        symbols: {
            bird: "None Official",
            animal: "Lynx",
            flower: "Poppy",
            tree: "Oak",
            anthem: "Denes nad Makedonija",
            motto: "None Official"
        },

        demographics: {
            lifeExpectancy: 76.33,
            literacyRate: "97.8%",
            urbanPopulation: "58.8%",
            medianAge: 39.3
        },

        history: {
            timeline: [
                { year: "148 BCE", title: "Roman Province", description: "Became Roman province of Macedonia" },
                { year: "1014", title: "Byzantine Rule", description: "Bulgarian Empire fell to Byzantium" },
                { year: "1392", title: "Ottoman Rule", description: "Ottoman conquest" },
                { year: "1912", title: "Balkan Wars", description: "Divided between Serbia and Greece" },
                { year: "1944", title: "Yugoslav Republic", description: "Socialist Republic of Macedonia" },
                { year: "1991", title: "Independence", description: "Independence from Yugoslavia" },
                { year: "2019", title: "Name Change", description: "Name changed to North Macedonia (Prespa Agreement)" },
                { year: "2020", title: "NATO", description: "Joined NATO" }
            ],
            notableFigures: ["Samuel of Bulgaria", "Goce Delčev", "Kiro Gligorov", "Mother Teresa (ethnic Albanian, born Skopje)"]
        },

        disputes: [
            { name: "Name Issue", description: "Historical name dispute with Greece (resolved 2019)", type: "Political" }
        ],

        quickFacts: [
            { icon: "water", title: "Lake Ohrid", text: "One of Europe's oldest and deepest lakes" },
            { icon: "cross", title: "Early Christianity", text: "One of first regions to adopt Christianity" },
            { icon: "mountain", title: "Alexander's Land", text: "Birthplace of Alexander the Great (disputed)" },
            { icon: "pray", title: "Mother Teresa", text: "Mother Teresa born in Skopje (1910)" },
            { icon: "handshake", title: "Prespa Agreement", text: "Resolved name dispute with Greece (2019)" }
        ]
    },

    // 18. SERBIA
    {
        id: "SRB",
        name: "Serbia",
        officialName: "Republic of Serbia",
        flag: "https://flagcdn.com/w320/rs.png",
        
        images: {
            hero: "https://images.unsplash.com/photo-1555990538-c86c6819875b?w=1920&q=80",
            landscape: "https://images.unsplash.com/photo-1592906209472-a36b1f3782ef?w=1920&q=80",
            city: "https://images.unsplash.com/photo-1580820726786-e6ec8c8f6eb5?w=1920&q=80"
        },

        basic: {
            capital: "Belgrade",
            continent: "Europe",
            region: "Southern Europe",
            subregion: "Balkans",
            population: 6647003,
            area: 88361,
            populationDensity: 77,
            independence: "2006",
            callingCode: "+381",
            tld: ".rs",
            drivingSide: "Right",
            electricity: "230V, 50Hz"
        },

        location: {
            coordinates: [44.0165, 21.0059],
            timezone: "UTC+1 (CET)",
            neighbors: ["Hungary", "Romania", "Bulgaria", "North Macedonia", "Kosovo", "Montenegro", "Bosnia and Herzegovina", "Croatia"],
            borders: 2322,
            hemispheres: ["Northern", "Eastern"]
        },

        political: {
            government: "Unitary Parliamentary Republic",
            headOfState: "President Aleksandar Vučić",
            headOfGovernment: "Prime Minister Miloš Vučević",
            legislature: "National Assembly",
            legalSystem: "Civil Law",
            states: 5,
            statisticalRegions: 5,
            districts: 29,
            largestCity: "Belgrade",
            organizations: ["UN", "OSCE", "Council of Europe", "EU Candidate", "CEFTA"]
        },

        economy: {
            gdp: "$75.5 Billion",
            gdpPPP: "$183 Billion",
            gdpPerCapita: "$11,350",
            gdpRank: "#79",
            gdpGrowth: "2.5%",
            currency: "Serbian Dinar",
            currencyCode: "RSD",
            currencySymbol: "дин",
            inflation: "12.4%",
            unemployment: "9.4%",
            majorSectors: ["Services (55%)", "Industry (32%)", "Agriculture (6%)"],
            industries: ["Automobiles", "Base Metals", "Furniture", "Food Processing", "Machinery", "Chemicals", "Sugar", "Tires", "Clothes", "Pharmaceuticals"],
            exports: ["Automobiles", "Insulated Wire", "Tires", "Raspberries", "Corn", "Wheat"],
            imports: ["Machinery", "Petroleum Products", "Vehicles", "Chemicals", "Pharmaceuticals"]
        },

        geography: {
            climate: "Continental; Cold Winters, Hot Humid Summers",
            avgTemperature: "11.4°C",
            annualRainfall: "686 mm",
            highestPoint: "Midžor (2,169 m)",
            lowestPoint: "Danube/Timok River (35 m)",
            coastline: "0 km (Landlocked)",
            forestCover: "31.1%",
            arableLand: "37.7%",
            terrain: "Extremely varied; rich plains of Vojvodina in north, mountains and large limestone regions in east and southwest",
            naturalResources: ["Oil", "Gas", "Coal", "Iron Ore", "Copper", "Zinc", "Antimony", "Chromite", "Gold", "Silver", "Magnesium", "Pyrite", "Limestone", "Marble", "Salt", "Hydropower"]
        },

        geography_links: {
            rivers: ["Danube", "Sava", "Morava", "Drina", "Tisza", "Timok"],
            mountains: ["Dinaric Alps", "Carpathians", "Balkan Mountains", "Kopaonik", "Tara", "Zlatibor"],
            deserts: [],
            forests: ["Tara National Park", "Kopaonik National Park", "Đerdap National Park", "Fruška Gora National Park"],
            oceans: []
        },

        culture: {
            officialLanguages: ["Serbian"],
            languages: ["Serbian", "Hungarian", "Bosnian", "Romani", "Romanian", "Slovak", "Albanian"],
            religions: ["Serbian Orthodox (84.6%)", "Roman Catholicism (5%)", "Islam (3%)", "Protestantism (1%)", "Others (6.4%)"],
            heritageSites: ["Stari Ras and Sopoćani", "Studenica Monastery", "Medieval Monuments in Kosovo", "Gamzigrad-Romuliana", "Stećci Medieval Tombstones"],
            festivals: ["EXIT Festival", "Guča Trumpet Festival", "Belgrade Beer Fest", "Nišville Jazz Festival"],
            cuisine: ["Ćevapi", "Pljeskavica", "Sarma", "Ražnjići", "Gibanica", "Kajmak", "Ajvar", "Proja"],
            arts: ["Medieval Frescoes", "Byzantine Architecture", "Brass Music", "Folk Dancing (Kolo)", "Embroidery"],
            sports: ["Football", "Basketball", "Tennis", "Water Polo", "Volleyball", "Handball"]
        },

        symbols: {
            bird: "White Eagle",
            animal: "Wolf",
            flower: "Lilac",
            tree: "Oak",
            anthem: "Bože pravde",
            motto: "Only Unity Saves the Serbs"
        },

        demographics: {
            lifeExpectancy: 76.50,
            literacyRate: "98.8%",
            urbanPopulation: "56.9%",
            medianAge: 43.4
        },

        history: {
            timeline: [
                { year: "1217", title: "Kingdom", description: "Kingdom of Serbia established" },
                { year: "1389", title: "Battle of Kosovo", description: "Defeat to Ottoman Empire" },
                { year: "1817", title: "Principality", description: "Principality of Serbia established" },
                { year: "1878", title: "Independence", description: "Full independence recognized" },
                { year: "1918", title: "Yugoslavia", description: "Kingdom of Yugoslavia formed" },
                { year: "1999", title: "NATO Bombing", description: "NATO intervention over Kosovo" },
                { year: "2006", title: "Independence", description: "Montenegro separated; Serbia independent" }
            ],
            notableFigures: ["Stefan Nemanja", "Tsar Dušan", "Nikola Tesla", "Novak Djokovic", "Mihajlo Pupin"]
        },

        disputes: [
            { name: "Kosovo", description: "Does not recognize Kosovo's independence", type: "Territory" }
        ],

        quickFacts: [
            { icon: "star", title: "Nikola Tesla", text: "Birthplace of inventor Nikola Tesla" },
            { icon: "trophy", title: "Tennis Power", text: "Home of Novak Djokovic (most Grand Slams)" },
            { icon: "music", title: "EXIT Festival", text: "Major European music festival in Novi Sad" },
            { icon: "pepper-hot", title: "Raspberries", text: "World's largest raspberry exporter" },
            { icon: "water", title: "Danube", text: "Danube flows 588 km through Serbia" }
        ]
    },

    // 19. SLOVENIA
    {
        id: "SVN",
        name: "Slovenia",
        officialName: "Republic of Slovenia",
        flag: "https://flagcdn.com/w320/si.png",
        
        images: {
            hero: "https://images.unsplash.com/photo-1551867633-194f125bddfa?w=1920&q=80",
            landscape: "https://images.unsplash.com/photo-1508189860359-777d945909ef?w=1920&q=80",
            city: "https://images.unsplash.com/photo-1569139476647-b53d5b5c8f0c?w=1920&q=80"
        },

        basic: {
            capital: "Ljubljana",
            continent: "Europe",
            region: "Southern Europe",
            subregion: "Central Europe",
            population: 2119675,
            area: 20273,
            populationDensity: 104,
            independence: "1991",
            callingCode: "+386",
            tld: ".si",
            drivingSide: "Right",
            electricity: "230V, 50Hz"
        },

        location: {
            coordinates: [46.1512, 14.9955],
            timezone: "UTC+1 (CET)",
            neighbors: ["Italy", "Austria", "Hungary", "Croatia"],
            borders: 1211,
            hemispheres: ["Northern", "Eastern"]
        },

        political: {
            government: "Unitary Parliamentary Republic",
            headOfState: "President Nataša Pirc Musar",
            headOfGovernment: "Prime Minister Robert Golob",
            legislature: "National Assembly",
            legalSystem: "Civil Law",
            states: 12,
            statisticalRegions: 12,
            municipalities: 212,
            largestCity: "Ljubljana",
            organizations: ["UN", "EU", "NATO", "OECD", "WTO", "Schengen Area", "Eurozone"]
        },

        economy: {
            gdp: "$68.1 Billion",
            gdpPPP: "$104.5 Billion",
            gdpPerCapita: "$32,214",
            gdpRank: "#81",
            gdpGrowth: "1.6%",
            currency: "Euro",
            currencyCode: "EUR",
            currencySymbol: "€",
            inflation: "7.4%",
            unemployment: "4.0%",
            majorSectors: ["Services (63%)", "Industry (33%)", "Agriculture (2%)"],
            industries: ["Metallurgy", "Electronics", "Trucks", "Electric Power Equipment", "Wood Products", "Textiles", "Chemicals", "Machine Tools", "Tourism"],
            exports: ["Manufactured Goods", "Machinery & Transport Equipment", "Chemicals", "Food"],
            imports: ["Machinery & Transport Equipment", "Manufactured Goods", "Chemicals", "Fuels"]
        },

        geography: {
            climate: "Mediterranean coast; Continental interior with Mild to Hot Summers and Cold Winters",
            avgTemperature: "9.8°C",
            annualRainfall: "1,162 mm",
            highestPoint: "Triglav (2,864 m)",
            lowestPoint: "Adriatic Sea (0 m)",
            coastline: "47 km",
            forestCover: "62%",
            arableLand: "8.3%",
            terrain: "Short Adriatic coast; Alpine mountains near Italy and Austria; mixed mountains and valleys with numerous rivers in east",
            naturalResources: ["Lignite", "Lead", "Zinc", "Building Stone", "Hydropower", "Forests"]
        },

        geography_links: {
            rivers: ["Sava", "Drava", "Soča", "Mura", "Krka"],
            mountains: ["Julian Alps", "Triglav", "Kamnik-Savinja Alps", "Karawanks", "Pohorje"],
            deserts: [],
            forests: ["Triglav National Park", "Slovenian Forests", "Kočevje Primeval Forest"],
            oceans: ["Adriatic Sea"]
        },

        culture: {
            officialLanguages: ["Slovenian"],
            languages: ["Slovenian", "Italian", "Hungarian", "English", "German", "Croatian", "Serbian"],
            religions: ["Roman Catholicism (57.8%)", "Islam (2.4%)", "Orthodox (2.3%)", "None (18.3%)", "Others (19.2%)"],
            heritageSites: ["Škocjan Caves", "Ancient and Primeval Beech Forests", "Works of Jože Plečnik in Ljubljana", "The Mercury Heritage of Almadén and Idrija"],
            festivals: ["Kurentovanje", "Ljubljana Festival", "Lent Festival", "Pivo in Cvetje"],
            cuisine: ["Potica", "Štruklji", "Žganci", "Kraška Pršut", "Jota", "Idrijski Žlikrofi", "Prekmurska Gibanica"],
            arts: ["Architecture (Jože Plečnik)", "Folk Dance", "Traditional Music", "Lace Making", "Painted Beehive Panels"],
            sports: ["Football", "Basketball", "Skiing", "Ice Hockey", "Cycling", "Handball"]
        },

        symbols: {
            bird: "None Official",
            animal: "Lipizzan Horse",
            flower: "Carnation",
            tree: "Linden",
            anthem: "Zdravljica",
            motto: "None Official"
        },

        demographics: {
            lifeExpectancy: 81.86,
            literacyRate: "99.7%",
            urbanPopulation: "55.6%",
            medianAge: 45.1
        },

        history: {
            timeline: [
                { year: "623", title: "Samo's Empire", description: "First Slavic state" },
                { year: "745", title: "Carantania", description: "Early Slovenian territory" },
                { year: "1335", title: "Habsburg Rule", description: "Came under Habsburg dominion" },
                { year: "1918", title: "Yugoslavia", description: "Joined Kingdom of Yugoslavia" },
                { year: "1991", title: "Independence", description: "Independence from Yugoslavia (Ten-Day War)" },
                { year: "2004", title: "EU & NATO", description: "Joined European Union and NATO" },
                { year: "2007", title: "Eurozone", description: "First ex-Yugoslav country to join Eurozone" }
            ],
            notableFigures: ["France Prešeren", "Jože Plečnik", "Slavoj Žižek", "Melania Trump", "Luka Dončić"]
        },

        disputes: [
            { name: "Bay of Piran", description: "Maritime border dispute with Croatia", type: "Maritime" }
        ],

        quickFacts: [
            { icon: "mountain", title: "Triglav", text: "Triglav peak appears on national flag and coat of arms" },
            { icon: "tree", title: "Forests", text: "Third most forested country in Europe (62%)" },
            { icon: "water", title: "Caves", text: "Over 10,000 caves (Postojna, Škocjan)" },
            { icon: "leaf", title: "Green Capital", text: "Ljubljana named European Green Capital 2016" },
            { icon: "horse", title: "Lipizzan", text: "Origin of Lipizzan horses (Lipica)" },
            { icon: "basketball-ball", title: "Sports", text: "Home of Luka Dončić (NBA star)" }
        ]
    }
];

// Export for Node.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CountriesData5;
}

// Export for Browser
if (typeof window !== 'undefined') {
    window.CountriesData5 = CountriesData5;
}
