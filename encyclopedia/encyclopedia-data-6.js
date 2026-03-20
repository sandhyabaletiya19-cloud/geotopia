/**
 * ENCYCLOPEDIA DATA FILE 6
 * Contains: Southern Europe (6) + Western Europe (10) = 16 Countries
 * Version: 2.0 - Clean Data
 */

const CountriesData6 = [
    // 1. ITALY
    {
        id: "ITA",
        name: "Italy",
        officialName: "Italian Republic",
        flag: "https://flagcdn.com/w320/it.png",
        
        images: {
            hero: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=1920&q=80",
            landscape: "https://images.unsplash.com/photo-1534445867742-43195f401b6c?w=1920&q=80",
            city: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=1920&q=80"
        },

        basic: {
            capital: "Rome",
            continent: "Europe",
            region: "Southern Europe",
            subregion: "Southern Europe",
            population: 58870762,
            area: 301340,
            populationDensity: 206,
            independence: "1861",
            callingCode: "+39",
            tld: ".it",
            drivingSide: "Right",
            electricity: "230V, 50Hz"
        },

        location: {
            coordinates: [41.8719, 12.5674],
            timezone: "UTC+1 (CET)",
            neighbors: ["France", "Switzerland", "Austria", "Slovenia", "San Marino", "Vatican City"],
            borders: 1836,
            hemispheres: ["Northern", "Eastern"]
        },

        political: {
            government: "Unitary Parliamentary Republic",
            headOfState: "President Sergio Mattarella",
            headOfGovernment: "Prime Minister Giorgia Meloni",
            legislature: "Parliament (Senate & Chamber of Deputies)",
            legalSystem: "Civil Law",
            states: 20,
            regions: 20,
            provinces: 107,
            largestCity: "Rome",
            organizations: ["UN", "EU", "NATO", "G7", "G20", "OECD", "WTO", "Council of Europe", "Schengen Area"]
        },

        economy: {
            gdp: "$2.19 Trillion",
            gdpPPP: "$3.18 Trillion",
            gdpPerCapita: "$37,146",
            gdpRank: "#8",
            gdpGrowth: "0.7%",
            currency: "Euro",
            currencyCode: "EUR",
            currencySymbol: "€",
            inflation: "5.9%",
            unemployment: "7.6%",
            majorSectors: ["Services (74%)", "Industry (24%)", "Agriculture (2%)"],
            industries: ["Tourism", "Machinery", "Iron", "Steel", "Chemicals", "Food Processing", "Textiles", "Motor Vehicles", "Clothing", "Footwear", "Ceramics"],
            exports: ["Machinery", "Pharmaceuticals", "Vehicles", "Refined Petroleum", "Clothing", "Footwear", "Wine", "Olive Oil"],
            imports: ["Crude Petroleum", "Natural Gas", "Cars", "Pharmaceuticals", "Machinery"]
        },

        geography: {
            climate: "Mediterranean in south; Alpine in north",
            avgTemperature: "13.5°C",
            annualRainfall: "832 mm",
            highestPoint: "Monte Bianco (Mont Blanc) (4,809 m)",
            lowestPoint: "Jolanda di Savoia (-3.4 m)",
            coastline: "7,600 km",
            forestCover: "31.6%",
            arableLand: "22.8%",
            terrain: "Mostly rugged and mountainous; some plains, coastal lowlands",
            naturalResources: ["Coal", "Mercury", "Zinc", "Potash", "Marble", "Barite", "Asbestos", "Pumice", "Fluorspar", "Feldspar", "Pyrite", "Natural Gas", "Crude Oil", "Fish", "Arable Land"]
        },

        geography_links: {
            rivers: ["Po River", "Adige River", "Tiber River", "Arno River", "Piave River"],
            mountains: ["Alps", "Apennines", "Dolomites", "Monte Bianco", "Monte Rosa", "Matterhorn", "Mount Etna", "Mount Vesuvius"],
            deserts: [],
            forests: ["Alpine Forests", "Mediterranean Forests", "Apennine Forests"],
            oceans: ["Mediterranean Sea", "Adriatic Sea", "Tyrrhenian Sea", "Ionian Sea", "Ligurian Sea"]
        },

        culture: {
            officialLanguages: ["Italian"],
            languages: ["Italian", "German", "French", "Slovene", "Sardinian", "Friulian", "Ladin"],
            religions: ["Roman Catholicism (74.4%)", "No Religion (22.6%)", "Islam (2.6%)", "Others (0.4%)"],
            heritageSites: ["Historic Centre of Rome", "Venice and its Lagoon", "Historic Centre of Florence", "Piazza del Duomo, Pisa", "Amalfi Coast", "Pompeii", "Cinque Terre", "Vatican City", "Dolomites", "Trulli of Alberobello"],
            festivals: ["Carnevale di Venezia", "Palio di Siena", "Ferragosto", "Festa della Repubblica", "Infiorata", "Opera Season (La Scala)"],
            cuisine: ["Pizza", "Pasta", "Risotto", "Gelato", "Tiramisu", "Lasagna", "Prosciutto", "Parmigiano-Reggiano", "Espresso", "Wine"],
            arts: ["Renaissance Art", "Opera", "Classical Music", "Fashion", "Cinema (Neorealism)", "Sculpture", "Architecture"],
            sports: ["Football (Calcio)", "Cycling", "Basketball", "Volleyball", "Motor Racing (Formula 1)", "Rugby"]
        },

        symbols: {
            bird: "Italian Sparrow",
            animal: "Italian Wolf",
            flower: "White Lily",
            tree: "Olive Tree",
            anthem: "Il Canto degli Italiani",
            motto: "None Official"
        },

        demographics: {
            lifeExpectancy: 83.89,
            literacyRate: "99.2%",
            urbanPopulation: "71.7%",
            medianAge: 47.3
        },

        history: {
            timeline: [
                { year: "753 BCE", title: "Rome Founded", description: "Legendary founding of Rome by Romulus" },
                { year: "27 BCE", title: "Roman Empire", description: "Augustus established Roman Empire" },
                { year: "476 CE", title: "Fall of Rome", description: "Western Roman Empire fell" },
                { year: "1300s-1600s", title: "Renaissance", description: "Italian Renaissance transformed art and culture" },
                { year: "1861", title: "Unification", description: "Kingdom of Italy unified under Victor Emmanuel II" },
                { year: "1946", title: "Republic", description: "Italy became a republic after WWII" },
                { year: "1957", title: "EU Founder", description: "Founding member of European Economic Community" }
            ],
            notableFigures: ["Julius Caesar", "Leonardo da Vinci", "Michelangelo", "Dante Alighieri", "Galileo Galilei", "Giuseppe Garibaldi", "Marco Polo"]
        },

        disputes: [],

        quickFacts: [
            { icon: "monument", title: "UNESCO Sites", text: "Most UNESCO World Heritage Sites (59)" },
            { icon: "pizza-slice", title: "Cuisine", text: "Birthplace of pizza and pasta" },
            { icon: "palette", title: "Renaissance", text: "Birthplace of the Renaissance" },
            { icon: "car", title: "Luxury Cars", text: "Home to Ferrari, Lamborghini, Maserati" },
            { icon: "wine-glass", title: "Wine", text: "World's largest wine producer" },
            { icon: "tshirt", title: "Fashion", text: "Global fashion capital (Milan)" }
        ]
    },

    // 2. MALTA
    {
        id: "MLT",
        name: "Malta",
        officialName: "Republic of Malta",
        flag: "https://flagcdn.com/w320/mt.png",
        
        images: {
            hero: "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=1920&q=80",
            landscape: "https://images.unsplash.com/photo-1560832745-1a81a8450a7c?w=1920&q=80",
            city: "https://images.unsplash.com/photo-1514890547357-a9ee288728e0?w=1920&q=80"
        },

        basic: {
            capital: "Valletta",
            continent: "Europe",
            region: "Southern Europe",
            subregion: "Southern Europe",
            population: 535064,
            area: 316,
            populationDensity: 1672,
            independence: "1964",
            callingCode: "+356",
            tld: ".mt",
            drivingSide: "Left",
            electricity: "230V, 50Hz"
        },

        location: {
            coordinates: [35.9375, 14.3754],
            timezone: "UTC+1 (CET)",
            neighbors: [],
            borders: 0,
            hemispheres: ["Northern", "Eastern"],
            islandNation: true,
            islands: 3
        },

        political: {
            government: "Unitary Parliamentary Republic",
            headOfState: "President Myriam Spiteri Debono",
            headOfGovernment: "Prime Minister Robert Abela",
            legislature: "House of Representatives",
            legalSystem: "Mixed (Civil and Common Law)",
            states: 5,
            regions: 5,
            localCouncils: 68,
            largestCity: "Birkirkara",
            organizations: ["UN", "EU", "Commonwealth", "Council of Europe", "WTO", "Schengen Area", "Eurozone"]
        },

        economy: {
            gdp: "$20.96 Billion",
            gdpPPP: "$31.37 Billion",
            gdpPerCapita: "$38,715",
            gdpRank: "#117",
            gdpGrowth: "5.9%",
            currency: "Euro",
            currencyCode: "EUR",
            currencySymbol: "€",
            inflation: "5.7%",
            unemployment: "3.1%",
            majorSectors: ["Services (87%)", "Industry (11%)", "Agriculture (1%)"],
            industries: ["Tourism", "Electronics", "Shipbuilding", "Ship Repair", "Construction", "Food", "Beverages", "Pharmaceuticals", "Footwear", "Clothing", "Tobacco", "Aviation", "Financial Services", "iGaming"],
            exports: ["Integrated Circuits", "Refined Petroleum", "Pharmaceuticals", "Postage Stamps", "Toys"],
            imports: ["Refined Petroleum", "Passenger Ships", "Crude Petroleum", "Aircraft", "Cars"]
        },

        geography: {
            climate: "Mediterranean",
            avgTemperature: "19.2°C",
            annualRainfall: "553 mm",
            highestPoint: "Ta' Dmejrek (253 m)",
            lowestPoint: "Mediterranean Sea (0 m)",
            coastline: "196.8 km",
            forestCover: "1.1%",
            arableLand: "28.1%",
            terrain: "Mostly low, rocky, flat to dissected plains; many coastal cliffs",
            naturalResources: ["Limestone", "Salt", "Arable Land"]
        },

        geography_links: {
            rivers: [],
            mountains: ["Ta' Dmejrek", "Dingli Cliffs"],
            deserts: [],
            forests: ["Buskett Gardens"],
            oceans: ["Mediterranean Sea"]
        },

        culture: {
            officialLanguages: ["Maltese", "English"],
            languages: ["Maltese", "English", "Italian"],
            religions: ["Roman Catholicism (90%)", "Others (10%)"],
            heritageSites: ["City of Valletta", "Ħal Saflieni Hypogeum", "Megalithic Temples of Malta"],
            festivals: ["Carnival", "Mnarja", "Village Festas", "Malta International Fireworks Festival", "Notte Bianca"],
            cuisine: ["Pastizzi", "Rabbit Stew (Fenkata)", "Lampuki Pie", "Ġbejna", "Ftira", "Bigilla"],
            arts: ["Maltese Lace", "Filigree", "Traditional Music (Għana)", "Stone Carving"],
            sports: ["Football", "Water Polo", "Bocci", "Swimming", "Sailing"]
        },

        symbols: {
            bird: "Blue Rock Thrush",
            animal: "Pharaoh Hound (Kelb tal-Fenek)",
            flower: "Maltese Rock-centaury",
            tree: "None Official",
            anthem: "L-Innu Malti",
            motto: "Virtue and Constancy"
        },

        demographics: {
            lifeExpectancy: 83.07,
            literacyRate: "94.5%",
            urbanPopulation: "94.9%",
            medianAge: 42.6
        },

        history: {
            timeline: [
                { year: "3600 BCE", title: "Megalithic Temples", description: "Oldest free-standing structures in world built" },
                { year: "1530", title: "Knights of St. John", description: "Knights Hospitaller arrived" },
                { year: "1565", title: "Great Siege", description: "Ottoman siege repelled" },
                { year: "1798", title: "French Rule", description: "Napoleon conquered Malta" },
                { year: "1800", title: "British Rule", description: "Malta became British colony" },
                { year: "1942", title: "George Cross", description: "Awarded George Cross for WWII heroism" },
                { year: "1964", title: "Independence", description: "Independence from United Kingdom" },
                { year: "2004", title: "EU Member", description: "Joined European Union" }
            ],
            notableFigures: ["Jean de Valette", "Dom Mintoff", "Eddie Fenech Adami"]
        },

        disputes: [],

        quickFacts: [
            { icon: "monument", title: "Oldest Temples", text: "Oldest free-standing structures in the world" },
            { icon: "award", title: "George Cross", text: "Entire nation awarded George Cross (WWII)" },
            { icon: "users", title: "Most Dense", text: "One of world's most densely populated countries" },
            { icon: "language", title: "Maltese", text: "Only Semitic language written in Latin alphabet" },
            { icon: "cross", title: "Knights", text: "Home of Knights of Malta since 1530" }
        ]
    },

    // 3. PORTUGAL
    {
        id: "PRT",
        name: "Portugal",
        officialName: "Portuguese Republic",
        flag: "https://flagcdn.com/w320/pt.png",
        
        images: {
            hero: "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=1920&q=80",
            landscape: "https://images.unsplash.com/photo-1548707309-dcebeab9ea9b?w=1920&q=80",
            city: "https://images.unsplash.com/photo-1585208798174-6cedd86e019a?w=1920&q=80"
        },

        basic: {
            capital: "Lisbon",
            continent: "Europe",
            region: "Southern Europe",
            subregion: "Iberian Peninsula",
            population: 10467366,
            area: 92212,
            populationDensity: 112,
            independence: "1143",
            callingCode: "+351",
            tld: ".pt",
            drivingSide: "Right",
            electricity: "230V, 50Hz"
        },

        location: {
            coordinates: [39.3999, -8.2245],
            timezone: "UTC+0 (WET)",
            neighbors: ["Spain"],
            borders: 1224,
            hemispheres: ["Northern", "Western"]
        },

        political: {
            government: "Unitary Semi-Presidential Republic",
            headOfState: "President Marcelo Rebelo de Sousa",
            headOfGovernment: "Prime Minister Luís Montenegro",
            legislature: "Assembly of the Republic",
            legalSystem: "Civil Law",
            states: 18,
            districts: 18,
            autonomousRegions: 2,
            largestCity: "Lisbon",
            organizations: ["UN", "EU", "NATO", "OECD", "WTO", "Council of Europe", "Schengen Area", "CPLP", "Eurozone"]
        },

        economy: {
            gdp: "$287 Billion",
            gdpPPP: "$438 Billion",
            gdpPerCapita: "$27,216",
            gdpRank: "#44",
            gdpGrowth: "2.3%",
            currency: "Euro",
            currencyCode: "EUR",
            currencySymbol: "€",
            inflation: "4.3%",
            unemployment: "6.5%",
            majorSectors: ["Services (76%)", "Industry (21%)", "Agriculture (2%)"],
            industries: ["Textiles", "Clothing", "Footwear", "Wood Products", "Cork", "Paper", "Chemicals", "Automotive Parts", "Base Metals", "Dairy Products", "Wine", "Tourism"],
            exports: ["Cars", "Vehicle Parts", "Refined Petroleum", "Leather Footwear", "Paper"],
            imports: ["Crude Petroleum", "Cars", "Vehicle Parts", "Pharmaceuticals", "Refined Petroleum"]
        },

        geography: {
            climate: "Mediterranean; Oceanic in north",
            avgTemperature: "15.5°C",
            annualRainfall: "854 mm",
            highestPoint: "Mount Pico (2,351 m - Azores), Serra da Estrela (1,993 m - mainland)",
            lowestPoint: "Atlantic Ocean (0 m)",
            coastline: "1,793 km",
            forestCover: "36.1%",
            arableLand: "11.9%",
            terrain: "Mountainous north of the Tagus River, rolling plains in south",
            naturalResources: ["Fish", "Forests (Cork)", "Iron Ore", "Copper", "Zinc", "Tin", "Tungsten", "Silver", "Gold", "Uranium", "Marble", "Clay", "Gypsum", "Salt", "Arable Land", "Hydropower"]
        },

        geography_links: {
            rivers: ["Tagus River", "Douro River", "Guadiana River", "Mondego River", "Minho River"],
            mountains: ["Serra da Estrela", "Serra do Gerês", "Serra de Sintra", "Mount Pico"],
            deserts: [],
            forests: ["Peneda-Gerês National Park", "Cork Oak Forests", "Sintra-Cascais Natural Park"],
            oceans: ["Atlantic Ocean"]
        },

        culture: {
            officialLanguages: ["Portuguese"],
            languages: ["Portuguese", "Mirandese"],
            religions: ["Roman Catholicism (79.7%)", "No Religion (14.2%)", "Others (6.1%)"],
            heritageSites: ["Tower of Belém", "Jerónimos Monastery", "Historic Centre of Porto", "Cultural Landscape of Sintra", "Historic Centre of Évora", "Alto Douro Wine Region", "Laurisilva of Madeira", "University of Coimbra"],
            festivals: ["Festas de Lisboa", "Carnaval", "Festa de São João", "Fado Night", "Romaria de Nossa Senhora da Agonia"],
            cuisine: ["Bacalhau (Codfish)", "Pastéis de Nata", "Francesinha", "Caldo Verde", "Sardinhas Assadas", "Port Wine", "Piri-Piri Chicken"],
            arts: ["Fado Music", "Azulejos (Tiles)", "Manueline Architecture", "Literature", "Folk Dance"],
            sports: ["Football", "Futsal", "Surfing", "Cycling", "Roller Hockey"]
        },

        symbols: {
            bird: "Barcelos Rooster (Galo de Barcelos)",
            animal: "Iberian Wolf",
            flower: "Lavender",
            tree: "Cork Oak",
            anthem: "A Portuguesa",
            motto: "None Official"
        },

        demographics: {
            lifeExpectancy: 82.65,
            literacyRate: "96.1%",
            urbanPopulation: "67.4%",
            medianAge: 46.2
        },

        history: {
            timeline: [
                { year: "1143", title: "Kingdom Founded", description: "Kingdom of Portugal established" },
                { year: "1415", title: "Age of Discovery", description: "Capture of Ceuta began exploration era" },
                { year: "1498", title: "India Route", description: "Vasco da Gama reached India" },
                { year: "1500", title: "Brazil Discovered", description: "Pedro Álvares Cabral discovered Brazil" },
                { year: "1755", title: "Lisbon Earthquake", description: "Devastating earthquake destroyed Lisbon" },
                { year: "1910", title: "Republic", description: "Monarchy overthrown, Republic declared" },
                { year: "1974", title: "Carnation Revolution", description: "Peaceful revolution ended dictatorship" },
                { year: "1986", title: "EU Member", description: "Joined European Community" }
            ],
            notableFigures: ["Vasco da Gama", "Henry the Navigator", "Ferdinand Magellan", "Luís de Camões", "Fernando Pessoa", "Amália Rodrigues"]
        },

        disputes: [],

        quickFacts: [
            { icon: "compass", title: "Explorers", text: "Pioneered Age of Discovery (15th-16th century)" },
            { icon: "wine-glass", title: "Port Wine", text: "Home of Port Wine (Douro Valley)" },
            { icon: "tree", title: "Cork", text: "World's largest cork producer (50%)" },
            { icon: "music", title: "Fado", text: "Fado music is UNESCO Intangible Heritage" },
            { icon: "language", title: "Portuguese", text: "6th most spoken language globally" },
            { icon: "water", title: "Surfing", text: "Home to world's largest surfed wave (Nazaré)" }
        ]
    },

    // 4. SAN MARINO
    {
        id: "SMR",
        name: "San Marino",
        officialName: "Republic of San Marino",
        flag: "https://flagcdn.com/w320/sm.png",
        
        images: {
            hero: "https://images.unsplash.com/photo-1586954225388-8e7be6837a14?w=1920&q=80",
            landscape: "https://images.unsplash.com/photo-1595658658481-d53d3f999875?w=1920&q=80",
            city: "https://images.unsplash.com/photo-1595658658481-d53d3f999875?w=1920&q=80"
        },

        basic: {
            capital: "San Marino (City)",
            continent: "Europe",
            region: "Southern Europe",
            subregion: "Southern Europe",
            population: 33931,
            area: 61,
            populationDensity: 556,
            independence: "301 CE",
            callingCode: "+378",
            tld: ".sm",
            drivingSide: "Right",
            electricity: "230V, 50Hz"
        },

        location: {
            coordinates: [43.9424, 12.4578],
            timezone: "UTC+1 (CET)",
            neighbors: ["Italy"],
            borders: 37,
            hemispheres: ["Northern", "Eastern"]
        },

        political: {
            government: "Unitary Parliamentary Directorial Republic",
            headOfState: "Captains Regent (Two, rotating every 6 months)",
            headOfGovernment: "Secretary of State for Foreign Affairs",
            legislature: "Grand and General Council",
            legalSystem: "Civil Law",
            states: 9,
            castelli: 9,
            largestCity: "Dogana",
            organizations: ["UN", "Council of Europe", "OSCE", "IAEA"]
        },

        economy: {
            gdp: "$1.86 Billion",
            gdpPPP: "$2.21 Billion",
            gdpPerCapita: "$53,752",
            gdpRank: "#168",
            gdpGrowth: "2.8%",
            currency: "Euro",
            currencyCode: "EUR",
            currencySymbol: "€",
            inflation: "5.3%",
            unemployment: "4.5%",
            majorSectors: ["Services (60%)", "Industry (38%)", "Agriculture (2%)"],
            industries: ["Tourism", "Banking", "Textiles", "Electronics", "Ceramics", "Cement", "Wine"],
            exports: ["Building Stone", "Lime", "Chestnuts", "Wheat", "Wine", "Baked Goods", "Hides", "Ceramics"],
            imports: ["Wide Variety of Consumer Goods"]
        },

        geography: {
            climate: "Mediterranean",
            avgTemperature: "13°C",
            annualRainfall: "750 mm",
            highestPoint: "Monte Titano (739 m)",
            lowestPoint: "Torrente Ausa (55 m)",
            coastline: "0 km (Landlocked)",
            forestCover: "16.3%",
            arableLand: "16.7%",
            terrain: "Rugged mountains",
            naturalResources: ["Building Stone"]
        },

        geography_links: {
            rivers: ["Torrente Ausa", "Torrente San Marino"],
            mountains: ["Monte Titano"],
            deserts: [],
            forests: ["Monte Titano Forest"],
            oceans: []
        },

        culture: {
            officialLanguages: ["Italian"],
            languages: ["Italian", "Romagnol"],
            religions: ["Roman Catholicism (97%)", "Others (3%)"],
            heritageSites: ["San Marino Historic Centre and Mount Titano"],
            festivals: ["Foundation Day (September 3)", "Corpus Christi", "Medieval Days Festival", "National Day"],
            cuisine: ["Torta Tre Monti", "Pasta e Ceci", "Fagioli con le Cotiche", "Nidi di Rondine", "San Marino Wine"],
            arts: ["Medieval Architecture", "Painting", "Sculpture", "Philately"],
            sports: ["Football", "Motorsport (San Marino Grand Prix)", "Shooting", "Baseball"]
        },

        symbols: {
            bird: "None Official",
            animal: "None Official",
            flower: "Cyclamen",
            tree: "None Official",
            anthem: "Inno Nazionale della Repubblica",
            motto: "Liberty"
        },

        demographics: {
            lifeExpectancy: 84.68,
            literacyRate: "99.9%",
            urbanPopulation: "97.5%",
            medianAge: 45.2
        },

        history: {
            timeline: [
                { year: "301 CE", title: "Founded", description: "Saint Marinus founded the republic" },
                { year: "1600", title: "Constitution", description: "Written constitution adopted" },
                { year: "1862", title: "Italian Treaty", description: "Customs union with Italy" },
                { year: "1992", title: "UN Member", description: "Became UN member state" },
                { year: "2002", title: "Euro Adopted", description: "Adopted Euro as currency" },
                { year: "2008", title: "UNESCO", description: "Historic Centre became UNESCO site" }
            ],
            notableFigures: ["Saint Marinus", "Antonio Onofri", "Domino Fattor"]
        },

        disputes: [],

        quickFacts: [
            { icon: "calendar", title: "Oldest Republic", text: "World's oldest surviving republic (since 301 CE)" },
            { icon: "map", title: "Microstate", text: "5th smallest country in the world" },
            { icon: "mountain", title: "Monte Titano", text: "Three towers on Monte Titano are iconic symbols" },
            { icon: "car", title: "Formula 1", text: "Hosted San Marino Grand Prix (1981-2006)" },
            { icon: "users", title: "Dual Leadership", text: "Two Captains Regent serve as joint heads of state" }
        ]
    },

    // 5. SPAIN
    {
        id: "ESP",
        name: "Spain",
        officialName: "Kingdom of Spain",
        flag: "https://flagcdn.com/w320/es.png",
        
        images: {
            hero: "https://images.unsplash.com/photo-1543785734-4b6e564642f8?w=1920&q=80",
            landscape: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=1920&q=80",
            city: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=1920&q=80"
        },

        basic: {
            capital: "Madrid",
            continent: "Europe",
            region: "Southern Europe",
            subregion: "Iberian Peninsula",
            population: 47519628,
            area: 505990,
            populationDensity: 94,
            independence: "1479",
            callingCode: "+34",
            tld: ".es",
            drivingSide: "Right",
            electricity: "230V, 50Hz"
        },

        location: {
            coordinates: [40.4637, -3.7492],
            timezone: "UTC+1 (CET)",
            neighbors: ["France", "Portugal", "Andorra", "Morocco (Ceuta, Melilla)", "Gibraltar (UK)"],
            borders: 1952,
            hemispheres: ["Northern", "Western"]
        },

        political: {
            government: "Unitary Parliamentary Constitutional Monarchy",
            headOfState: "King Felipe VI",
            headOfGovernment: "Prime Minister Pedro Sánchez",
            legislature: "Cortes Generales (Senate & Congress of Deputies)",
            legalSystem: "Civil Law",
            states: 17,
            autonomousCommunities: 17,
            autonomousCities: 2,
            provinces: 50,
            largestCity: "Madrid",
            organizations: ["UN", "EU", "NATO", "OECD", "WTO", "Council of Europe", "Schengen Area", "Eurozone", "G20"]
        },

        economy: {
            gdp: "$1.58 Trillion",
            gdpPPP: "$2.32 Trillion",
            gdpPerCapita: "$33,090",
            gdpRank: "#15",
            gdpGrowth: "2.5%",
            currency: "Euro",
            currencyCode: "EUR",
            currencySymbol: "€",
            inflation: "3.4%",
            unemployment: "11.7%",
            majorSectors: ["Services (75%)", "Industry (21%)", "Agriculture (3%)"],
            industries: ["Textiles", "Apparel", "Food", "Beverages", "Metals", "Chemicals", "Shipbuilding", "Automobiles", "Machine Tools", "Tourism", "Clay", "Refractory Products", "Footwear", "Pharmaceuticals", "Medical Equipment"],
            exports: ["Cars", "Refined Petroleum", "Vehicle Parts", "Packaged Medicaments", "Citrus"],
            imports: ["Crude Petroleum", "Cars", "Petroleum Gas", "Vehicle Parts", "Packaged Medicaments"]
        },

        geography: {
            climate: "Temperate; Mediterranean coast; Oceanic in north; Semi-arid in south",
            avgTemperature: "14.1°C",
            annualRainfall: "636 mm",
            highestPoint: "Teide (3,718 m - Canary Islands), Mulhacén (3,479 m - mainland)",
            lowestPoint: "Atlantic Ocean (0 m)",
            coastline: "4,964 km",
            forestCover: "36.9%",
            arableLand: "24.9%",
            terrain: "Large central plateau surrounded by mountains; coastal plains",
            naturalResources: ["Coal", "Lignite", "Iron Ore", "Copper", "Lead", "Zinc", "Uranium", "Tungsten", "Mercury", "Pyrites", "Magnesite", "Fluorspar", "Gypsum", "Sepiolite", "Kaolin", "Potash", "Hydropower", "Arable Land"]
        },

        geography_links: {
            rivers: ["Tagus River", "Ebro River", "Douro River", "Guadalquivir River", "Guadiana River"],
            mountains: ["Pyrenees", "Sierra Nevada", "Cantabrian Mountains", "Sistema Central", "Sistema Ibérico", "Teide"],
            deserts: ["Tabernas Desert"],
            forests: ["Doñana National Park", "Ordesa y Monte Perdido", "Garajonay"],
            oceans: ["Atlantic Ocean", "Mediterranean Sea", "Bay of Biscay"]
        },

        culture: {
            officialLanguages: ["Spanish (Castilian)"],
            languages: ["Spanish", "Catalan", "Galician", "Basque", "Aranese"],
            religions: ["Roman Catholicism (56.4%)", "No Religion (39.9%)", "Others (3.7%)"],
            heritageSites: ["Alhambra", "Sagrada Família", "Works of Antoni Gaudí", "Historic City of Toledo", "Old Town of Segovia", "Old City of Salamanca", "Cathedral, Alcázar and Archivo de Indias in Seville", "Monastery of El Escorial", "Route of Santiago de Compostela", "Caves of Altamira"],
            festivals: ["La Tomatina", "Running of the Bulls (San Fermín)", "Las Fallas", "Semana Santa", "Feria de Abril", "La Mercè"],
            cuisine: ["Paella", "Tapas", "Jamón Ibérico", "Gazpacho", "Tortilla Española", "Churros", "Sangria", "Croquetas"],
            arts: ["Flamenco", "Classical Guitar", "Painters (Picasso, Dalí, Goya, Velázquez)", "Architecture (Gaudí)"],
            sports: ["Football", "Basketball", "Tennis", "Cycling", "Padel", "Bullfighting"]
        },

        symbols: {
            bird: "Spanish Imperial Eagle",
            animal: "Bull",
            flower: "Red Carnation",
            tree: "Holm Oak",
            anthem: "Marcha Real",
            motto: "Plus Ultra (Further Beyond)"
        },

        demographics: {
            lifeExpectancy: 83.99,
            literacyRate: "98.6%",
            urbanPopulation: "81.4%",
            medianAge: 45.5
        },

        history: {
            timeline: [
                { year: "711", title: "Moorish Conquest", description: "Muslim conquest of Iberian Peninsula" },
                { year: "1492", title: "Reconquista Completed", description: "Granada fell; Columbus reached Americas" },
                { year: "16th Century", title: "Spanish Empire", description: "Peak of Spanish colonial power" },
                { year: "1808-1814", title: "Peninsular War", description: "War against Napoleonic France" },
                { year: "1936-1939", title: "Civil War", description: "Spanish Civil War" },
                { year: "1939-1975", title: "Franco Era", description: "Francisco Franco's dictatorship" },
                { year: "1975", title: "Democracy", description: "Return to democracy after Franco's death" },
                { year: "1986", title: "EU Member", description: "Joined European Community" }
            ],
            notableFigures: ["Isabella I", "Ferdinand II", "Christopher Columbus", "Miguel de Cervantes", "Francisco Franco", "Pablo Picasso", "Salvador Dalí"]
        },

        disputes: [
            { name: "Gibraltar", description: "British overseas territory claimed by Spain", type: "Territory" },
            { name: "Ceuta and Melilla", description: "Spanish cities on African coast claimed by Morocco", type: "Territory" },
            { name: "Catalonia", description: "Independence movement within Spain", type: "Territory" }
        ],

        quickFacts: [
            { icon: "sun", title: "Tourism", text: "2nd most visited country in the world" },
            { icon: "language", title: "Spanish", text: "4th most spoken language globally" },
            { icon: "monument", title: "UNESCO Sites", text: "4th most UNESCO World Heritage Sites (49)" },
            { icon: "olive", title: "Olive Oil", text: "World's largest olive oil producer" },
            { icon: "train", title: "High-Speed Rail", text: "2nd largest high-speed rail network in world" },
            { icon: "futbol", title: "Football", text: "One of world's most successful football nations" }
        ]
    },

    // 6. VATICAN CITY
    {
        id: "VAT",
        name: "Vatican City",
        officialName: "Vatican City State",
        flag: "https://flagcdn.com/w320/va.png",
        
        images: {
            hero: "https://images.unsplash.com/photo-1531572753322-ad063cecc140?w=1920&q=80",
            landscape: "https://images.unsplash.com/photo-1544230247-92d4d6e62e02?w=1920&q=80",
            city: "https://images.unsplash.com/photo-1555992457-b8fefdd09069?w=1920&q=80"
        },

        basic: {
            capital: "Vatican City",
            continent: "Europe",
            region: "Southern Europe",
            subregion: "Southern Europe",
            population: 764,
            area: 0.44,
            populationDensity: 1818,
            independence: "1929",
            callingCode: "+379",
            tld: ".va",
            drivingSide: "Right",
            electricity: "230V, 50Hz"
        },

        location: {
            coordinates: [41.9029, 12.4534],
            timezone: "UTC+1 (CET)",
            neighbors: ["Italy"],
            borders: 3.4,
            hemispheres: ["Northern", "Eastern"]
        },

        political: {
            government: "Unitary Absolute Elective Theocratic Monarchy",
            headOfState: "Pope Francis",
            headOfGovernment: "President of the Pontifical Commission (Cardinal Fernando Vérgez Alzaga)",
            legislature: "Pontifical Commission for Vatican City State",
            legalSystem: "Religious (Canon Law) and Civil Law",
            states: 0,
            largestCity: "Vatican City",
            organizations: ["UN (Holy See - Observer)", "OSCE", "Interpol", "IAEA"]
        },

        economy: {
            gdp: "Not Applicable (supported by donations)",
            gdpPPP: "Not Applicable",
            gdpPerCapita: "Not Applicable",
            gdpRank: "N/A",
            gdpGrowth: "N/A",
            currency: "Euro",
            currencyCode: "EUR",
            currencySymbol: "€",
            inflation: "N/A",
            unemployment: "0%",
            majorSectors: ["Religious Activities", "Tourism", "Publishing", "Philately"],
            industries: ["Printing", "Production of Coins", "Medals", "Stamps", "Mosaics", "Staff Uniforms"],
            exports: ["None (non-commercial economy)"],
            imports: ["Foodstuffs", "Electric Appliances", "Equipment"]
        },

        geography: {
            climate: "Mediterranean",
            avgTemperature: "15.5°C",
            annualRainfall: "750 mm",
            highestPoint: "Vatican Gardens (75 m)",
            lowestPoint: "Saint Peter's Square (19 m)",
            coastline: "0 km (Landlocked, Enclave)",
            forestCover: "0%",
            arableLand: "0%",
            terrain: "Urban, low hill",
            naturalResources: ["None"]
        },

        geography_links: {
            rivers: [],
            mountains: [],
            deserts: [],
            forests: ["Vatican Gardens"],
            oceans: []
        },

        culture: {
            officialLanguages: ["Latin", "Italian"],
            languages: ["Latin", "Italian", "French", "German", "English", "Spanish", "Portuguese"],
            religions: ["Roman Catholicism (100%)"],
            heritageSites: ["Vatican City (entire state)"],
            festivals: ["Easter", "Christmas", "Papal Audiences", "Canonizations", "Papal Elections"],
            cuisine: ["Italian Cuisine (provided by Vatican services)"],
            arts: ["Sistine Chapel", "St. Peter's Basilica", "Vatican Museums", "Renaissance Art", "Religious Art"],
            sports: ["None Official (Vatican cricket team exists)"]
        },

        symbols: {
            bird: "None Official",
            animal: "None Official",
            flower: "None Official",
            tree: "None Official",
            anthem: "Inno e Marcia Pontificale",
            motto: "None Official"
        },

        demographics: {
            lifeExpectancy: 80.0,
            literacyRate: "100%",
            urbanPopulation: "100%",
            medianAge: 55.0
        },

        history: {
            timeline: [
                { year: "64 CE", title: "St. Peter's Martyrdom", description: "St. Peter martyred; burial site became sacred" },
                { year: "326", title: "Old St. Peter's", description: "Constantine built original basilica" },
                { year: "756", title: "Papal States", description: "Papal States established" },
                { year: "1506", title: "New Basilica", description: "Construction of current St. Peter's Basilica began" },
                { year: "1870", title: "Italian Unification", description: "Papal States annexed by Italy" },
                { year: "1929", title: "Lateran Treaty", description: "Vatican City created as independent state" }
            ],
            notableFigures: ["Pope John Paul II", "Pope Benedict XVI", "Pope Francis", "Michelangelo", "Raphael", "Bernini"]
        },

        disputes: [],

        quickFacts: [
            { icon: "map", title: "Smallest Country", text: "World's smallest independent state (0.44 km²)" },
            { icon: "cross", title: "Holy See", text: "Headquarters of Roman Catholic Church" },
            { icon: "palette", title: "Sistine Chapel", text: "Home to Michelangelo's famous ceiling" },
            { icon: "users", title: "Population", text: "World's smallest population (~800 people)" },
            { icon: "book", title: "Vatican Library", text: "One of oldest libraries in the world" },
            { icon: "church", title: "St. Peter's", text: "Largest church in the world by interior space" }
        ]
    },

    // 7. ANDORRA
    {
        id: "AND",
        name: "Andorra",
        officialName: "Principality of Andorra",
        flag: "https://flagcdn.com/w320/ad.png",
        
        images: {
            hero: "https://images.unsplash.com/photo-1600270107917-c53ed3d1a7dc?w=1920&q=80",
            landscape: "https://images.unsplash.com/photo-1600270107917-c53ed3d1a7dc?w=1920&q=80",
            city: "https://images.unsplash.com/photo-1581019697388-4f6e7b8e2a1c?w=1920&q=80"
        },

        basic: {
            capital: "Andorra la Vella",
            continent: "Europe",
            region: "Western Europe",
            subregion: "Pyrenees",
            population: 80088,
            area: 468,
            populationDensity: 164,
            independence: "1278",
            callingCode: "+376",
            tld: ".ad",
            drivingSide: "Right",
            electricity: "230V, 50Hz"
        },

        location: {
            coordinates: [42.5063, 1.5218],
            timezone: "UTC+1 (CET)",
            neighbors: ["France", "Spain"],
            borders: 118,
            hemispheres: ["Northern", "Eastern"]
        },

        political: {
            government: "Unitary Parliamentary Diarchy",
            headOfState: "Co-Princes: President of France (Emmanuel Macron) & Bishop of Urgell (Joan Enric Vives Sicília)",
            headOfGovernment: "Head of Government Xavier Espot Zamora",
            legislature: "General Council",
            legalSystem: "Mixed (Civil and Customary Law)",
            states: 7,
            parishes: 7,
            largestCity: "Andorra la Vella",
            organizations: ["UN", "Council of Europe", "OSCE", "UNESCO"]
        },

        economy: {
            gdp: "$3.35 Billion",
            gdpPPP: "$4.43 Billion",
            gdpPerCapita: "$42,030",
            gdpRank: "#158",
            gdpGrowth: "8.6%",
            currency: "Euro",
            currencyCode: "EUR",
            currencySymbol: "€",
            inflation: "4.3%",
            unemployment: "1.9%",
            majorSectors: ["Services (Tourism & Banking 80%)", "Industry (15%)", "Agriculture (1%)"],
            industries: ["Tourism", "Retail", "Banking", "Timber", "Tobacco", "Iron Ore", "Lead"],
            exports: ["Tobacco Products", "Furniture"],
            imports: ["Consumer Goods", "Food", "Electricity"]
        },

        geography: {
            climate: "Temperate; Cold Winters, Warm Summers",
            avgTemperature: "7.6°C",
            annualRainfall: "1,071 mm",
            highestPoint: "Coma Pedrosa (2,942 m)",
            lowestPoint: "Riu Runer (840 m)",
            coastline: "0 km (Landlocked)",
            forestCover: "34%",
            arableLand: "5.3%",
            terrain: "Rugged mountains dissected by narrow valleys",
            naturalResources: ["Hydropower", "Mineral Water", "Timber", "Iron Ore", "Lead"]
        },

        geography_links: {
            rivers: ["Valira River", "Valira del Nord", "Valira d'Orient", "Gran Valira"],
            mountains: ["Coma Pedrosa", "Pic de Casamanya", "Pyrenees"],
            deserts: [],
            forests: ["Vall del Madriu-Perafita-Claror"],
            oceans: []
        },

        culture: {
            officialLanguages: ["Catalan"],
            languages: ["Catalan", "Spanish", "Portuguese", "French"],
            religions: ["Roman Catholicism (90%)", "Others (10%)"],
            heritageSites: ["Madriu-Perafita-Claror Valley"],
            festivals: ["Meritxell Day (National Day)", "Carnival", "Sant Jordi", "Escudella (Christmas Stew)"],
            cuisine: ["Escudella", "Trinxat", "Cunillo", "Embotits", "Crêpes"],
            arts: ["Romanesque Art", "Stone Architecture", "Traditional Music"],
            sports: ["Skiing", "Football", "Basketball", "Cycling", "Rugby"]
        },

        symbols: {
            bird: "Lammergeier",
            animal: "Pyrenean Chamois",
            flower: "Grandalla",
            tree: "None Official",
            anthem: "El Gran Carlemany",
            motto: "Virtus Unita Fortior (United Virtue is Stronger)"
        },

        demographics: {
            lifeExpectancy: 83.23,
            literacyRate: "100%",
            urbanPopulation: "87.8%",
            medianAge: 46.2
        },

        history: {
            timeline: [
                { year: "803", title: "Charlemagne", description: "Legend says Charlemagne founded Andorra" },
                { year: "1278", title: "Paréage", description: "Co-principality established between Bishop of Urgell and Count of Foix" },
                { year: "1933", title: "Universal Suffrage", description: "Men gained right to vote" },
                { year: "1970", title: "Women's Suffrage", description: "Women gained right to vote" },
                { year: "1993", title: "Constitution", description: "First written constitution adopted" },
                { year: "1993", title: "UN Member", description: "Joined United Nations" }
            ],
            notableFigures: ["Saint Ermengol", "Boris Skossyreff", "Xavier Espot Zamora"]
        },

        disputes: [],

        quickFacts: [
            { icon: "mountain", title: "Pyrenean Microstate", text: "6th smallest nation in Europe" },
            { icon: "skiing", title: "Ski Destination", text: "Major skiing and shopping destination" },
            { icon: "crown", title: "Diarchy", text: "Only country with two foreign co-princes" },
            { icon: "city", title: "Highest Capital", text: "Highest capital city in Europe (1,023m)" },
            { icon: "ban-smoking", title: "Tax Haven", text: "No income tax (until 2015)" },
            { icon: "globe", title: "Not EU", text: "Not EU member but uses Euro" }
        ]
    },

    // 8. AUSTRIA
    {
        id: "AUT",
        name: "Austria",
        officialName: "Republic of Austria",
        flag: "https://flagcdn.com/w320/at.png",
        
        images: {
            hero: "https://images.unsplash.com/photo-1516550893923-42d28e5677af?w=1920&q=80",
            landscape: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1920&q=80",
            city: "https://images.unsplash.com/photo-1609856878074-cf31e21ccb6b?w=1920&q=80"
        },

        basic: {
            capital: "Vienna",
            continent: "Europe",
            region: "Western Europe",
            subregion: "Central Europe",
            population: 9104772,
            area: 83879,
            populationDensity: 109,
            independence: "1955",
            callingCode: "+43",
            tld: ".at",
            drivingSide: "Right",
            electricity: "230V, 50Hz"
        },

        location: {
            coordinates: [47.5162, 14.5501],
            timezone: "UTC+1 (CET)",
            neighbors: ["Germany", "Czech Republic", "Slovakia", "Hungary", "Slovenia", "Italy", "Switzerland", "Liechtenstein"],
            borders: 2524,
            hemispheres: ["Northern", "Eastern"]
        },

        political: {
            government: "Federal Parliamentary Republic",
            headOfState: "President Alexander Van der Bellen",
            headOfGovernment: "Chancellor Karl Nehammer",
            legislature: "Parliament (Federal Council & National Council)",
            legalSystem: "Civil Law (influenced by German law)",
            states: 9,
            federalStates: 9,
            largestCity: "Vienna",
            organizations: ["UN", "EU", "OECD", "WTO", "Council of Europe", "Schengen Area", "Eurozone", "OSCE"]
        },

        economy: {
            gdp: "$516 Billion",
            gdpPPP: "$616 Billion",
            gdpPerCapita: "$56,802",
            gdpRank: "#26",
            gdpGrowth: "-0.7%",
            currency: "Euro",
            currencyCode: "EUR",
            currencySymbol: "€",
            inflation: "7.4%",
            unemployment: "5.0%",
            majorSectors: ["Services (70%)", "Industry (27%)", "Agriculture (1%)"],
            industries: ["Construction", "Machinery", "Vehicles", "Food", "Metals", "Chemicals", "Lumber", "Paper", "Communications Equipment", "Tourism"],
            exports: ["Machinery", "Motor Vehicles", "Pharmaceuticals", "Medical Instruments", "Metal Products"],
            imports: ["Machinery", "Motor Vehicles", "Crude Petroleum", "Pharmaceuticals", "Foodstuffs"]
        },

        geography: {
            climate: "Temperate; Continental, Cloudy",
            avgTemperature: "7.4°C",
            annualRainfall: "1,110 mm",
            highestPoint: "Großglockner (3,798 m)",
            lowestPoint: "Neusiedler See (115 m)",
            coastline: "0 km (Landlocked)",
            forestCover: "47.6%",
            arableLand: "16.3%",
            terrain: "Western and southern regions are mountainous (Alps); eastern areas are lowlands",
            naturalResources: ["Oil", "Coal", "Lignite", "Timber", "Iron Ore", "Copper", "Zinc", "Antimony", "Magnesite", "Tungsten", "Graphite", "Salt", "Hydropower"]
        },

        geography_links: {
            rivers: ["Danube River", "Inn River", "Salzach River", "Drau River", "Mur River"],
            mountains: ["Alps", "Großglockner", "Wildspitze", "Weißkugel", "Hohe Tauern"],
            deserts: [],
            forests: ["Vienna Woods", "Hohe Tauern National Park", "Tyrol Forests"],
            oceans: []
        },

        culture: {
            officialLanguages: ["German"],
            languages: ["German", "Croatian", "Slovene", "Hungarian", "Turkish"],
            religions: ["Roman Catholicism (55.2%)", "No Religion (23.8%)", "Islam (8.3%)", "Protestantism (3.4%)", "Orthodox Christianity (5%)"],
            heritageSites: ["Historic Centre of Vienna", "Palace and Gardens of Schönbrunn", "Hallstatt-Dachstein", "Salzburg Historic Centre", "Wachau Cultural Landscape", "Semmering Railway", "Graz Historic Centre"],
            festivals: ["Vienna Opera Ball", "Salzburg Festival", "Christmas Markets", "Vienna New Year's Concert", "Donauinselfest"],
            cuisine: ["Wiener Schnitzel", "Sachertorte", "Apfelstrudel", "Tafelspitz", "Kaiserschmarrn", "Knödel", "Gulasch"],
            arts: ["Classical Music (Mozart, Strauss, Haydn)", "Opera", "Ballet", "Theater", "Fine Arts (Klimt, Schiele)"],
            sports: ["Skiing", "Football", "Ice Hockey", "Formula 1", "Cycling"]
        },

        symbols: {
            bird: "Barn Swallow",
            animal: "Black Eagle",
            flower: "Edelweiss",
            tree: "None Official",
            anthem: "Land der Berge, Land am Strome",
            motto: "None Official"
        },

        demographics: {
            lifeExpectancy: 82.07,
            literacyRate: "99%",
            urbanPopulation: "59.3%",
            medianAge: 44.2
        },

        history: {
            timeline: [
                { year: "976", title: "Margraviate", description: "Margraviate of Austria established" },
                { year: "1278", title: "Habsburg Rule", description: "Habsburg dynasty began ruling Austria" },
                { year: "1804", title: "Austrian Empire", description: "Austrian Empire proclaimed" },
                { year: "1867", title: "Austro-Hungarian Empire", description: "Dual monarchy with Hungary established" },
                { year: "1918", title: "Republic", description: "First Austrian Republic after WWI" },
                { year: "1938", title: "Anschluss", description: "Annexed by Nazi Germany" },
                { year: "1945", title: "Liberation", description: "Liberated and occupied by Allies" },
                { year: "1955", title: "State Treaty", description: "Regained full sovereignty; declared neutrality" },
                { year: "1995", title: "EU Member", description: "Joined European Union" }
            ],
            notableFigures: ["Wolfgang Amadeus Mozart", "Sigmund Freud", "Gustav Klimt", "Arnold Schwarzenegger", "Empress Maria Theresa", "Franz Joseph I"]
        },

        disputes: [],

        quickFacts: [
            { icon: "music", title: "Classical Music", text: "Birthplace of Mozart, Haydn, and Schubert" },
            { icon: "skiing", title: "Skiing", text: "World's premier skiing destination" },
            { icon: "coffee", title: "Café Culture", text: "Viennese coffee house culture is UNESCO heritage" },
            { icon: "crown", title: "Habsburg Legacy", text: "Former center of Habsburg Empire (650 years)" },
            { icon: "globe", title: "Neutral", text: "Constitutionally neutral since 1955" },
            { icon: "mountain", title: "Alpine", text: "62% of territory covered by Alps" }
        ]
    },

    // 9. BELGIUM
    {
        id: "BEL",
        name: "Belgium",
        officialName: "Kingdom of Belgium",
        flag: "https://flagcdn.com/w320/be.png",
        
        images: {
            hero: "https://images.unsplash.com/photo-1559113513-d5e09c78b9dd?w=1920&q=80",
            landscape: "https://images.unsplash.com/photo-1565883452246-7e35c76ca82e?w=1920&q=80",
            city: "https://images.unsplash.com/photo-1559111563-eef25d4d7b58?w=1920&q=80"
        },

        basic: {
            capital: "Brussels",
            continent: "Europe",
            region: "Western Europe",
            subregion: "Western Europe",
            population: 11686140,
            area: 30528,
            populationDensity: 383,
            independence: "1830",
            callingCode: "+32",
            tld: ".be",
            drivingSide: "Right",
            electricity: "230V, 50Hz"
        },

        location: {
            coordinates: [50.5039, 4.4699],
            timezone: "UTC+1 (CET)",
            neighbors: ["France", "Luxembourg", "Germany", "Netherlands"],
            borders: 1297,
            hemispheres: ["Northern", "Eastern"]
        },

        political: {
            government: "Federal Parliamentary Constitutional Monarchy",
            headOfState: "King Philippe",
            headOfGovernment: "Prime Minister Alexander De Croo",
            legislature: "Federal Parliament (Senate & Chamber of Representatives)",
            legalSystem: "Civil Law (based on Napoleonic Code)",
            states: 3,
            regions: 3,
            communities: 3,
            provinces: 10,
            largestCity: "Brussels",
            organizations: ["UN", "EU", "NATO", "OECD", "WTO", "Council of Europe", "Schengen Area", "Eurozone", "Benelux"]
        },

        economy: {
            gdp: "$627 Billion",
            gdpPPP: "$721 Billion",
            gdpPerCapita: "$53,657",
            gdpRank: "#23",
            gdpGrowth: "1.4%",
            currency: "Euro",
            currencyCode: "EUR",
            currencySymbol: "€",
            inflation: "4.1%",
            unemployment: "5.6%",
            majorSectors: ["Services (78%)", "Industry (20%)", "Agriculture (1%)"],
            industries: ["Engineering", "Metal Products", "Motor Vehicle Assembly", "Transportation Equipment", "Scientific Instruments", "Processed Food", "Beverages", "Chemicals", "Pharmaceuticals", "Basic Metals", "Textiles", "Glass", "Petroleum"],
            exports: ["Cars", "Refined Petroleum", "Packaged Medicaments", "Blood Products", "Diamonds"],
            imports: ["Cars", "Refined Petroleum", "Crude Petroleum", "Packaged Medicaments", "Diamonds"]
        },

        geography: {
            climate: "Temperate Maritime",
            avgTemperature: "10.5°C",
            annualRainfall: "847 mm",
            highestPoint: "Signal de Botrange (694 m)",
            lowestPoint: "North Sea (0 m)",
            coastline: "66.5 km",
            forestCover: "22.6%",
            arableLand: "27.1%",
            terrain: "Flat coastal plains in northwest; central rolling hills; rugged mountains of Ardennes Forest in southeast",
            naturalResources: ["Construction Materials", "Silica Sand", "Carbonates", "Arable Land"]
        },

        geography_links: {
            rivers: ["Meuse River", "Scheldt River", "Sambre River", "Lys River"],
            mountains: ["Ardennes", "Signal de Botrange"],
            deserts: [],
            forests: ["Ardennes Forest", "Sonian Forest"],
            oceans: ["North Sea"]
        },

        culture: {
            officialLanguages: ["Dutch", "French", "German"],
            languages: ["Dutch (Flemish)", "French", "German"],
            religions: ["Roman Catholicism (50%)", "No Religion (32.6%)", "Protestantism (2.1%)", "Islam (5.8%)", "Others (9.5%)"],
            heritageSites: ["La Grand-Place Brussels", "Belfries of Belgium and France", "Historic Centre of Bruges", "Major Town Houses of Victor Horta", "Flemish Béguinages", "Notre-Dame Cathedral in Tournai", "Plantin-Moretus House-Workshop-Museum Complex"],
            festivals: ["Carnival of Binche", "Gentse Feesten", "Tomorrowland", "Ommegang", "Brussels Flower Carpet"],
            cuisine: ["Belgian Chocolate", "Waffles", "Frites (French Fries)", "Moules-Frites", "Speculoos", "Belgian Beer", "Carbonnade Flamande"],
            arts: ["Flemish Painting (Van Eyck, Rubens, Magritte)", "Art Nouveau (Victor Horta)", "Comics (Tintin, Smurfs)", "Tapestry"],
            sports: ["Football", "Cycling", "Tennis", "Basketball", "Motorsport"]
        },

        symbols: {
            bird: "Common Kestrel",
            animal: "Belgian Blue (Cattle)",
            flower: "Red Poppy",
            tree: "None Official",
            anthem: "La Brabançonne",
            motto: "Unity Makes Strength"
        },

        demographics: {
            lifeExpectancy: 82.17,
            literacyRate: "99%",
            urbanPopulation: "98.2%",
            medianAge: 41.9
        },

        history: {
            timeline: [
                { year: "57 BCE", title: "Roman Conquest", description: "Julius Caesar conquered Belgae tribes" },
                { year: "843", title: "Division", description: "Treaty of Verdun divided Carolingian Empire" },
                { year: "1430", title: "Burgundian Rule", description: "Under Burgundian Netherlands" },
                { year: "1830", title: "Independence", description: "Belgian Revolution; independence from Netherlands" },
                { year: "1914-1918", title: "WWI", description: "German occupation; fierce battles (Flanders Fields)" },
                { year: "1940-1944", title: "WWII", description: "German occupation again" },
                { year: "1957", title: "EU Founder", description: "Founding member of European Economic Community" },
                { year: "1967", title: "NATO/EU HQ", description: "Brussels became NATO and EU headquarters" }
            ],
            notableFigures: ["King Leopold II", "René Magritte", "Hergé (Tintin creator)", "Audrey Hepburn", "Jacques Brel", "Peter Paul Rubens"]
        },

        disputes: [],

        quickFacts: [
            { icon: "building", title: "EU Capital", text: "De facto capital of European Union" },
            { icon: "chocolate-bar", title: "Chocolate", text: "World's largest chocolate exporter" },
            { icon: "beer", title: "Beer", text: "Over 1,500 beer varieties (UNESCO heritage)" },
            { icon: "gem", title: "Diamonds", text: "Antwerp is world's diamond capital (84% of rough diamonds)" },
            { icon: "comic", title: "Comics", text: "Birthplace of Tintin and Smurfs" },
            { icon: "fries", title: "Frites", text: "Invented French fries (Belgian fries)" }
        ]
    },

    // 10. FRANCE
    {
        id: "FRA",
        name: "France",
        officialName: "French Republic",
        flag: "https://flagcdn.com/w320/fr.png",
        
        images: {
            hero: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1920&q=80",
            landscape: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1920&q=80",
            city: "https://images.unsplash.com/photo-1431274172761-fca41d930114?w=1920&q=80"
        },

        basic: {
            capital: "Paris",
            continent: "Europe",
            region: "Western Europe",
            subregion: "Western Europe",
            population: 68042591,
            area: 643801,
            populationDensity: 119,
            independence: "843",
            callingCode: "+33",
            tld: ".fr",
            drivingSide: "Right",
            electricity: "230V, 50Hz"
        },

        location: {
            coordinates: [46.2276, 2.2137],
            timezone: "UTC+1 (CET)",
            neighbors: ["Belgium", "Luxembourg", "Germany", "Switzerland", "Italy", "Monaco", "Spain", "Andorra"],
            borders: 2751,
            hemispheres: ["Northern", "Eastern"]
        },

        political: {
            government: "Unitary Semi-Presidential Republic",
            headOfState: "President Emmanuel Macron",
            headOfGovernment: "Prime Minister Michel Barnier",
            legislature: "Parliament (Senate & National Assembly)",
            legalSystem: "Civil Law (Napoleonic Code)",
            states: 18,
            regions: 18,
            departments: 101,
            largestCity: "Paris",
            organizations: ["UN", "EU", "NATO", "G7", "G20", "OECD", "WTO", "Council of Europe", "Schengen Area", "Eurozone", "Francophonie", "UN Security Council (Permanent)"]
        },

        economy: {
            gdp: "$3.03 Trillion",
            gdpPPP: "$3.87 Trillion",
            gdpPerCapita: "$44,408",
            gdpRank: "#7",
            gdpGrowth: "0.7%",
            currency: "Euro",
            currencyCode: "EUR",
            currencySymbol: "€",
            inflation: "4.9%",
            unemployment: "7.3%",
            majorSectors: ["Services (79%)", "Industry (18%)", "Agriculture (2%)"],
            industries: ["Machinery", "Chemicals", "Automobiles", "Metallurgy", "Aircraft", "Electronics", "Textiles", "Food Processing", "Tourism", "Nuclear Energy", "Aerospace", "Defense", "Luxury Goods"],
            exports: ["Aircraft", "Packaged Medicaments", "Cars", "Vehicle Parts", "Wine", "Cosmetics"],
            imports: ["Crude Petroleum", "Cars", "Refined Petroleum", "Packaged Medicaments", "Broadcasting Equipment"]
        },

        geography: {
            climate: "Temperate; Mediterranean on south coast; Oceanic in west; Continental in east",
            avgTemperature: "12.2°C",
            annualRainfall: "867 mm",
            highestPoint: "Mont Blanc (4,807 m)",
            lowestPoint: "Rhône River Delta (-2 m)",
            coastline: "4,853 km",
            forestCover: "31.4%",
            arableLand: "33.5%",
            terrain: "Mostly flat plains or gently rolling hills in north and west; mountainous in south (Pyrenees), east (Alps, Jura, Vosges)",
            naturalResources: ["Coal", "Iron Ore", "Bauxite", "Zinc", "Uranium", "Antimony", "Arsenic", "Potash", "Feldspar", "Fluorspar", "Gypsum", "Timber", "Arable Land", "Fish"]
        },

        geography_links: {
            rivers: ["Seine River", "Loire River", "Rhône River", "Garonne River", "Rhine River"],
            mountains: ["Alps", "Pyrenees", "Massif Central", "Vosges", "Jura", "Mont Blanc"],
            deserts: [],
            forests: ["Forest of Fontainebleau", "Ardennes Forest", "Landes Forest", "Corsican Forests"],
            oceans: ["Atlantic Ocean", "Mediterranean Sea", "English Channel", "Bay of Biscay"]
        },

        culture: {
            officialLanguages: ["French"],
            languages: ["French", "Occitan", "Breton", "Alsatian", "Corsican", "Catalan", "Basque", "Flemish"],
            religions: ["Roman Catholicism (47%)", "No Religion (33%)", "Islam (4%)", "Protestantism (2%)", "Others (14%)"],
            heritageSites: ["Palace of Versailles", "Mont-Saint-Michel", "Chartres Cathedral", "Loire Valley Châteaux", "Pont du Gard", "Paris Banks of the Seine", "Carcassonne", "Strasbourg Grande Île", "Palace and Park of Fontainebleau", "Reims Cathedral"],
            festivals: ["Bastille Day", "Cannes Film Festival", "Tour de France", "Carnaval de Nice", "Fête de la Musique"],
            cuisine: ["Croissants", "Baguette", "Cheese (Brie, Camembert, Roquefort)", "Wine", "Coq au Vin", "Ratatouille", "Crêpes", "Foie Gras", "Escargot", "Bouillabaisse"],
            arts: ["Impressionism", "Literature", "Cinema", "Fashion", "Philosophy", "Architecture"],
            sports: ["Football", "Rugby", "Cycling", "Tennis", "Basketball", "Handball", "Skiing"]
        },

        symbols: {
            bird: "Gallic Rooster",
            animal: "Gallic Rooster",
            flower: "Fleur-de-lis (Lily)",
            tree: "Oak",
            anthem: "La Marseillaise",
            motto: "Liberté, Égalité, Fraternité (Liberty, Equality, Fraternity)"
        },

        demographics: {
            lifeExpectancy: 82.59,
            literacyRate: "99%",
            urbanPopulation: "81.5%",
            medianAge: 42.3
        },

        history: {
            timeline: [
                { year: "481", title: "Frankish Kingdom", description: "Clovis I united Franks" },
                { year: "843", title: "Treaty of Verdun", description: "West Francia (France) created" },
                { year: "1789", title: "French Revolution", description: "Revolution overthrew monarchy" },
                { year: "1804-1815", title: "Napoleonic Era", description: "Napoleon's empire and wars" },
                { year: "1870", title: "Third Republic", description: "Republic established after Franco-Prussian War" },
                { year: "1914-1918", title: "WWI", description: "Major WWI battleground" },
                { year: "1940-1944", title: "WWII", description: "German occupation; Vichy regime" },
                { year: "1958", title: "Fifth Republic", description: "De Gaulle established current republic" },
                { year: "1957", title: "EU Founder", description: "Founding member of EEC" }
            ],
            notableFigures: ["Napoleon Bonaparte", "Charles de Gaulle", "Louis XIV", "Joan of Arc", "Voltaire", "Marie Curie", "Victor Hugo", "Claude Monet"]
        },

        disputes: [],

        quickFacts: [
            { icon: "monument", title: "Tourism", text: "World's most visited country (90M+ tourists)" },
            { icon: "wine-glass", title: "Wine", text: "World's 2nd largest wine producer" },
            { icon: "atom", title: "Nuclear Power", text: "70% of electricity from nuclear energy" },
            { icon: "palette", title: "Art", text: "Home to the Louvre (world's most visited museum)" },
            { icon: "tshirt", title: "Fashion", text: "Paris is global fashion capital" },
            { icon: "utensils", title: "Gastronomy", text: "French cuisine is UNESCO Intangible Heritage" }
        ]
    },

    // 11. GERMANY
    {
        id: "DEU",
        name: "Germany",
        officialName: "Federal Republic of Germany",
        flag: "https://flagcdn.com/w320/de.png",
        
        images: {
            hero: "https://images.unsplash.com/photo-1554072675-66db59dba46f?w=1920&q=80",
            landscape: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=1920&q=80",
            city: "https://images.unsplash.com/photo-1560930950-5cc20e80e392?w=1920&q=80"
        },

        basic: {
            capital: "Berlin",
            continent: "Europe",
            region: "Western Europe",
            subregion: "Central Europe",
            population: 84482267,
            area: 357114,
            populationDensity: 240,
            independence: "1871",
            callingCode: "+49",
            tld: ".de",
            drivingSide: "Right",
            electricity: "230V, 50Hz"
        },

        location: {
            coordinates: [51.1657, 10.4515],
            timezone: "UTC+1 (CET)",
            neighbors: ["Denmark", "Poland", "Czech Republic", "Austria", "Switzerland", "France", "Luxembourg", "Belgium", "Netherlands"],
            borders: 3714,
            hemispheres: ["Northern", "Eastern"]
        },

        political: {
            government: "Federal Parliamentary Republic",
            headOfState: "President Frank-Walter Steinmeier",
            headOfGovernment: "Chancellor Olaf Scholz",
            legislature: "Parliament (Bundestag & Bundesrat)",
            legalSystem: "Civil Law",
            states: 16,
            federalStates: 16,
            largestCity: "Berlin",
            organizations: ["UN", "EU", "NATO", "G7", "G20", "OECD", "WTO", "Council of Europe", "Schengen Area", "Eurozone", "OSCE"]
        },

        economy: {
            gdp: "$4.46 Trillion",
            gdpPPP: "$5.54 Trillion",
            gdpPerCapita: "$52,824",
            gdpRank: "#3",
            gdpGrowth: "-0.3%",
            currency: "Euro",
            currencyCode: "EUR",
            currencySymbol: "€",
            inflation: "5.9%",
            unemployment: "3.0%",
            majorSectors: ["Services (69%)", "Industry (28%)", "Agriculture (1%)"],
            industries: ["Iron", "Steel", "Coal", "Cement", "Chemicals", "Machinery", "Vehicles", "Machine Tools", "Electronics", "Automobiles", "Food", "Beverages", "Shipbuilding", "Textiles"],
            exports: ["Cars", "Vehicle Parts", "Packaged Medicaments", "Aircraft", "Medical Instruments", "Machinery"],
            imports: ["Crude Petroleum", "Cars", "Vehicle Parts", "Packaged Medicaments", "Petroleum Gas"]
        },

        geography: {
            climate: "Temperate; Marine in north; Continental in east and south",
            avgTemperature: "9.6°C",
            annualRainfall: "700 mm",
            highestPoint: "Zugspitze (2,962 m)",
            lowestPoint: "Neuendorf bei Wilster (-3.5 m)",
            coastline: "2,389 km",
            forestCover: "32.7%",
            arableLand: "33.9%",
            terrain: "Lowlands in north; uplands in center; Bavarian Alps in south",
            naturalResources: ["Coal", "Lignite", "Natural Gas", "Iron Ore", "Copper", "Nickel", "Uranium", "Potash", "Salt", "Construction Materials", "Timber", "Arable Land"]
        },

        geography_links: {
            rivers: ["Rhine River", "Danube River", "Elbe River", "Oder River", "Weser River", "Main River", "Moselle River"],
            mountains: ["Bavarian Alps", "Black Forest", "Harz Mountains", "Zugspitze", "Erzgebirge"],
            deserts: [],
            forests: ["Black Forest", "Bavarian Forest", "Thuringian Forest", "Harz National Park"],
            oceans: ["North Sea", "Baltic Sea"]
        },

        culture: {
            officialLanguages: ["German"],
            languages: ["German", "Low German", "Upper Sorbian", "Lower Sorbian", "Danish", "Frisian", "Romani"],
            religions: ["Roman Catholicism (26.7%)", "Protestantism (24.3%)", "No Religion (42.1%)", "Islam (3.5%)", "Orthodox Christianity (2.2%)"],
            heritageSites: ["Cologne Cathedral", "Museumsinsel (Berlin)", "Palaces and Parks of Potsdam and Berlin", "Aachen Cathedral", "Würzburg Residence", "Classical Weimar", "Bauhaus Sites", "Upper Middle Rhine Valley", "Wadden Sea", "Hanseatic City of Lübeck"],
            festivals: ["Oktoberfest", "Karneval", "Christmas Markets", "Berlin Film Festival", "Love Parade", "Bayreuth Festival"],
            cuisine: ["Bratwurst", "Sauerkraut", "Schnitzel", "Pretzels", "Black Forest Cake", "Beer", "Spätzle", "Currywurst", "Sauerbraten"],
            arts: ["Classical Music (Beethoven, Bach, Brahms)", "Literature (Goethe, Schiller)", "Philosophy (Kant, Nietzsche)", "Bauhaus Design", "Expressionism"],
            sports: ["Football", "Handball", "Basketball", "Ice Hockey", "Tennis", "Motorsport (Formula 1)"]
        },

        symbols: {
            bird: "Golden Eagle",
            animal: "Federal Eagle",
            flower: "Cornflower",
            tree: "Oak",
            anthem: "Deutschlandlied (Das Lied der Deutschen)",
            motto: "Unity and Justice and Freedom"
        },

        demographics: {
            lifeExpectancy: 81.88,
            literacyRate: "99%",
            urbanPopulation: "77.6%",
            medianAge: 45.7
        },

        history: {
            timeline: [
                { year: "800", title: "Charlemagne", description: "Charlemagne crowned Holy Roman Emperor" },
                { year: "1517", title: "Reformation", description: "Martin Luther began Protestant Reformation" },
                { year: "1871", title: "Unification", description: "German Empire unified under Prussia" },
                { year: "1914-1918", title: "WWI", description: "World War I; defeat led to Weimar Republic" },
                { year: "1933-1945", title: "Nazi Era", description: "Nazi regime; WWII; Holocaust" },
                { year: "1949", title: "Division", description: "Germany divided into East and West" },
                { year: "1989", title: "Fall of Berlin Wall", description: "Berlin Wall fell" },
                { year: "1990", title: "Reunification", description: "East and West Germany reunified" }
            ],
            notableFigures: ["Johann Wolfgang von Goethe", "Ludwig van Beethoven", "Albert Einstein", "Martin Luther", "Angela Merkel", "Konrad Adenauer", "Otto von Bismarck"]
        },

        disputes: [],

        quickFacts: [
            { icon: "industry", title: "Economic Powerhouse", text: "Europe's largest economy; 3rd globally" },
            { icon: "car", title: "Automobiles", text: "Home to BMW, Mercedes-Benz, Volkswagen, Porsche" },
            { icon: "beer", title: "Beer", text: "1,500+ breweries; Oktoberfest is world's largest folk festival" },
            { icon: "music", title: "Classical Music", text: "Birthplace of Beethoven, Bach, Brahms" },
            { icon: "recycle", title: "Renewable Energy", text: "Leader in renewable energy (Energiewende)" },
            { icon: "graduation-cap", title: "Free Education", text: "Free university education for all" }
        ]
    },

    // 12. LIECHTENSTEIN
    {
        id: "LIE",
        name: "Liechtenstein",
        officialName: "Principality of Liechtenstein",
        flag: "https://flagcdn.com/w320/li.png",
        
        images: {
            hero: "https://images.unsplash.com/photo-1573155993874-d5d48af862ba?w=1920&q=80",
            landscape: "https://images.unsplash.com/photo-1600270107917-c53ed3d1a7dc?w=1920&q=80",
            city: "https://images.unsplash.com/photo-1573155993874-d5d48af862ba?w=1920&q=80"
        },

        basic: {
            capital: "Vaduz",
            continent: "Europe",
            region: "Western Europe",
            subregion: "Central Europe",
            population: 39584,
            area: 160,
            populationDensity: 238,
            independence: "1806",
            callingCode: "+423",
            tld: ".li",
            drivingSide: "Right",
            electricity: "230V, 50Hz"
        },

        location: {
            coordinates: [47.1660, 9.5554],
            timezone: "UTC+1 (CET)",
            neighbors: ["Switzerland", "Austria"],
            borders: 75,
            hemispheres: ["Northern", "Eastern"]
        },

        political: {
            government: "Unitary Parliamentary Constitutional Monarchy",
            headOfState: "Prince Hans-Adam II",
            headOfGovernment: "Prime Minister Daniel Risch",
            legislature: "Landtag",
            legalSystem: "Civil Law (influenced by Swiss, Austrian, and German law)",
            states: 11,
            municipalities: 11,
            largestCity: "Schaan",
            organizations: ["UN", "EFTA", "Council of Europe", "EEA", "OSCE", "WTO"]
        },

        economy: {
            gdp: "$7.12 Billion",
            gdpPPP: "$5.03 Billion",
            gdpPerCapita: "$180,366",
            gdpRank: "#140",
            gdpGrowth: "1.8%",
            currency: "Swiss Franc",
            currencyCode: "CHF",
            currencySymbol: "CHF",
            inflation: "1.5%",
            unemployment: "1.5%",
            majorSectors: ["Services (55%)", "Industry (41%)", "Agriculture (1%)"],
            industries: ["Electronics", "Metal Manufacturing", "Dental Products", "Ceramics", "Pharmaceuticals", "Food Processing", "Precision Instruments", "Tourism", "Financial Services"],
            exports: ["Small Specialty Machinery", "Connectors for Audio/Video", "Dental Products", "Hardware", "Prepared Food"],
            imports: ["Agricultural Products", "Raw Materials", "Machinery", "Metal Goods", "Textiles", "Foodstuffs", "Motor Vehicles"]
        },

        geography: {
            climate: "Continental; Cold, Cloudy Winters; Warm, Partly Cloudy Summers",
            avgTemperature: "9.9°C",
            annualRainfall: "900 mm",
            highestPoint: "Grauspitz (2,599 m)",
            lowestPoint: "Ruggeller Riet (430 m)",
            coastline: "0 km (Landlocked, Doubly Landlocked)",
            forestCover: "43.1%",
            arableLand: "21.9%",
            terrain: "Mostly mountainous (Alps) with Rhine Valley in west",
            naturalResources: ["Hydroelectric Potential", "Arable Land"]
        },

        geography_links: {
            rivers: ["Rhine River", "Samina River"],
            mountains: ["Alps", "Grauspitz", "Falknis", "Naafkopf", "Rätikon Range"],
            deserts: [],
            forests: ["Alpine Forests", "Ruggeller Riet Nature Reserve"],
            oceans: []
        },

        culture: {
            officialLanguages: ["German"],
            languages: ["German (Alemannic dialect)", "Standard German"],
            religions: ["Roman Catholicism (73.4%)", "Protestantism (6.3%)", "Islam (5.9%)", "No Religion (7%)", "Others (7.4%)"],
            heritageSites: [],
            festivals: ["Staatsfeiertag (National Day)", "Funkensonntag", "Vaduzer Weinfest", "Christmas Markets"],
            cuisine: ["Käsknöpfle", "Riebel", "Hafalaab", "Sauerkraut", "Pastries"],
            arts: ["Painting", "Sculpture", "Postage Stamps (Philately)", "Traditional Music"],
            sports: ["Football", "Alpine Skiing", "Cross-Country Skiing", "Cycling", "Tennis"]
        },

        symbols: {
            bird: "Kestrel",
            animal: "None Official",
            flower: "Yellow Lily",
            tree: "None Official",
            anthem: "Oben am jungen Rhein",
            motto: "For God, Prince and Fatherland"
        },

        demographics: {
            lifeExpectancy: 82.39,
            literacyRate: "100%",
            urbanPopulation: "14.4%",
            medianAge: 43.7
        },

        history: {
            timeline: [
                { year: "1719", title: "Principality Formed", description: "Liechtenstein became independent principality" },
                { year: "1806", title: "Sovereignty", description: "Gained full sovereignty (end of Holy Roman Empire)" },
                { year: "1868", title: "Army Abolished", description: "Army disbanded; permanent neutrality" },
                { year: "1921", title: "Swiss Customs", description: "Customs union with Switzerland" },
                { year: "1990", title: "UN Member", description: "Joined United Nations" },
                { year: "1995", title: "EEA Member", description: "Joined European Economic Area" }
            ],
            notableFigures: ["Prince Hans-Adam II", "Prince Franz Joseph II", "Princess Gina"]
        },

        disputes: [],

        quickFacts: [
            { icon: "map", title: "Microstate", text: "6th smallest country in the world (160 km²)" },
            { icon: "dollar-sign", title: "Richest", text: "Highest GDP per capita in the world" },
            { icon: "lock", title: "Doubly Landlocked", text: "One of only two doubly landlocked countries" },
            { icon: "crown", title: "Monarchy", text: "Prince has more power than most European monarchs" },
            { icon: "stamp", title: "Stamps", text: "Famous for collectible postage stamps" },
            { icon: "teeth", title: "Dental Products", text: "Major producer of false teeth" }
        ]
    },

    // 13. LUXEMBOURG
    {
        id: "LUX",
        name: "Luxembourg",
        officialName: "Grand Duchy of Luxembourg",
        flag: "https://flagcdn.com/w320/lu.png",
        
        images: {
            hero: "https://images.unsplash.com/photo-1558551649-e44c8f992010?w=1920&q=80",
            landscape: "https://images.unsplash.com/photo-1587974928442-77dc3e0dba72?w=1920&q=80",
            city: "https://images.unsplash.com/photo-1558551649-e44c8f992010?w=1920&q=80"
        },

        basic: {
            capital: "Luxembourg City",
            continent: "Europe",
            region: "Western Europe",
            subregion: "Western Europe",
            population: 660809,
            area: 2586,
            populationDensity: 252,
            independence: "1839",
            callingCode: "+352",
            tld: ".lu",
            drivingSide: "Right",
            electricity: "230V, 50Hz"
        },

        location: {
            coordinates: [49.8153, 6.1296],
            timezone: "UTC+1 (CET)",
            neighbors: ["Belgium", "France", "Germany"],
            borders: 327,
            hemispheres: ["Northern", "Eastern"]
        },

        political: {
            government: "Unitary Parliamentary Constitutional Monarchy",
            headOfState: "Grand Duke Henri",
            headOfGovernment: "Prime Minister Luc Frieden",
            legislature: "Chamber of Deputies",
            legalSystem: "Civil Law (based on Napoleonic Code)",
            states: 12,
            cantons: 12,
            communes: 102,
            largestCity: "Luxembourg City",
            organizations: ["UN", "EU", "NATO", "OECD", "WTO", "Council of Europe", "Schengen Area", "Eurozone", "Benelux"]
        },

        economy: {
            gdp: "$89.95 Billion",
            gdpPPP: "$91.09 Billion",
            gdpPerCapita: "$135,605",
            gdpRank: "#69",
            gdpGrowth: "-1.1%",
            currency: "Euro",
            currencyCode: "EUR",
            currencySymbol: "€",
            inflation: "2.9%",
            unemployment: "5.7%",
            majorSectors: ["Services (88%)", "Industry (11%)", "Agriculture (0.3%)"],
            industries: ["Banking", "Financial Services", "Steel", "Information Technology", "Telecommunications", "Cargo Transportation", "Food Processing", "Chemicals", "Metal Products", "Engineering", "Tires", "Glass", "Aluminum"],
            exports: ["Iron Products", "Rubber Tires", "Plastic Products", "Glass", "Machinery"],
            imports: ["Minerals", "Metals", "Foodstuffs", "Machinery", "Quality Consumer Goods"]
        },

        geography: {
            climate: "Temperate; Mild Winters, Cool Summers",
            avgTemperature: "9.4°C",
            annualRainfall: "870 mm",
            highestPoint: "Buurgplaatz (559 m)",
            lowestPoint: "Moselle River (133 m)",
            coastline: "0 km (Landlocked)",
            forestCover: "37%",
            arableLand: "24%",
            terrain: "Mostly gently rolling uplands with broad, shallow valleys; uplands to slightly mountainous in north; steep slope down to Moselle flood plain in southeast",
            naturalResources: ["Iron Ore (no longer exploited)", "Arable Land"]
        },

        geography_links: {
            rivers: ["Moselle River", "Sûre River", "Our River", "Alzette River"],
            mountains: ["Ardennes", "Buurgplaatz", "Oesling"],
            deserts: [],
            forests: ["Ardennes Forest", "Mullerthal Region"],
            oceans: []
        },

        culture: {
            officialLanguages: ["Luxembourgish", "French", "German"],
            languages: ["Luxembourgish", "French", "German", "Portuguese", "English"],
            religions: ["Roman Catholicism (52%)", "No Religion (26.8%)", "Protestantism (2%)", "Islam (3%)", "Others (16.2%)"],
            heritageSites: ["City of Luxembourg: its Old Quarters and Fortifications"],
            festivals: ["Schueberfouer", "National Day (Grand Duke's Birthday)", "Buergbrennen", "Octave", "Éimaischen"],
            cuisine: ["Judd mat Gaardebounen", "Bouneschlupp", "Gromperekichelcher", "Quetschentaart", "Riesling Wine"],
            arts: ["Painting", "Sculpture", "Music", "Theater", "Literature"],
            sports: ["Football", "Cycling", "Tennis", "Basketball", "Athletics"]
        },

        symbols: {
            bird: "Goldcrest",
            animal: "Red Lion",
            flower: "Rose",
            tree: "None Official",
            anthem: "Ons Heemecht",
            motto: "We Want to Remain What We Are"
        },

        demographics: {
            lifeExpectancy: 82.84,
            literacyRate: "99%",
            urbanPopulation: "91.9%",
            medianAge: 39.7
        },

        history: {
            timeline: [
                { year: "963", title: "Founded", description: "Count Siegfried founded Luxembourg" },
                { year: "1354", title: "Duchy", description: "Became Duchy of Luxembourg" },
                { year: "1815", title: "Grand Duchy", description: "Congress of Vienna made it Grand Duchy" },
                { year: "1839", title: "Independence", description: "Treaty of London confirmed independence" },
                { year: "1867", title: "Neutrality", description: "Declared perpetually neutral" },
                { year: "1948", title: "Benelux", description: "Formed Benelux with Belgium and Netherlands" },
                { year: "1957", title: "EU Founder", description: "Founding member of EEC" }
            ],
            notableFigures: ["Grand Duke Henri", "Robert Schuman", "Jean-Claude Juncker", "Charlotte, Grand Duchess"]
        },

        disputes: [],

        quickFacts: [
            { icon: "bank", title: "Financial Center", text: "World's 2nd largest investment fund center" },
            { icon: "dollar-sign", title: "Wealthy", text: "Highest GDP per capita in the EU" },
            { icon: "language", title: "Trilingual", text: "Three official languages (Luxembourgish, French, German)" },
            { icon: "building", title: "EU Institutions", text: "Home to European Court of Justice" },
            { icon: "crown", title: "Grand Duchy", text: "World's only remaining Grand Duchy" },
            { icon: "users", title: "Foreigners", text: "47% of population are foreign nationals" }
        ]
    },

    // 14. MONACO
    {
        id: "MCO",
        name: "Monaco",
        officialName: "Principality of Monaco",
        flag: "https://flagcdn.com/w320/mc.png",
        
        images: {
            hero: "https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?w=1920&q=80",
            landscape: "https://images.unsplash.com/photo-1526657782461-9fe13402a841?w=1920&q=80",
            city: "https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?w=1920&q=80"
        },

        basic: {
            capital: "Monaco (city-state)",
            continent: "Europe",
            region: "Western Europe",
            subregion: "Western Europe",
            population: 39520,
            area: 2.02,
            populationDensity: 19361,
            independence: "1297",
            callingCode: "+377",
            tld: ".mc",
            drivingSide: "Right",
            electricity: "230V, 50Hz"
        },

        location: {
            coordinates: [43.7384, 7.4246],
            timezone: "UTC+1 (CET)",
            neighbors: ["France"],
            borders: 6,
            hemispheres: ["Northern", "Eastern"]
        },

        political: {
            government: "Unitary Parliamentary Constitutional Monarchy",
            headOfState: "Prince Albert II",
            headOfGovernment: "Minister of State Didier Guillaume",
            legislature: "National Council",
            legalSystem: "Civil Law (based on French law)",
            states: 4,
            quartiers: 4,
            largestCity: "Monte Carlo",
            organizations: ["UN", "Council of Europe", "OSCE", "OIF", "IAEA"]
        },

        economy: {
            gdp: "$8.6 Billion",
            gdpPPP: "$8.6 Billion",
            gdpPerCapita: "$234,317",
            gdpRank: "#135",
            gdpGrowth: "11.1%",
            currency: "Euro",
            currencyCode: "EUR",
            currencySymbol: "€",
            inflation: "3.0%",
            unemployment: "2.0%",
            majorSectors: ["Services (95%)", "Industry (4%)", "Agriculture (0%)"],
            industries: ["Banking", "Insurance", "Tourism", "Construction", "Small-Scale Industrial", "Consumer Products", "Pharmaceuticals", "Cosmetics", "Chemicals"],
            exports: ["Chemicals", "Plastics", "Cosmetics", "Pharmaceuticals"],
            imports: ["Consumer Goods", "Food", "Manufactured Products"]
        },

        geography: {
            climate: "Mediterranean",
            avgTemperature: "16.3°C",
            annualRainfall: "758 mm",
            highestPoint: "Chemin des Révoires (164 m)",
            lowestPoint: "Mediterranean Sea (0 m)",
            coastline: "4.1 km",
            forestCover: "0%",
            arableLand: "0%",
            terrain: "Hilly, rugged, rocky",
            naturalResources: ["None"]
        },

        geography_links: {
            rivers: [],
            mountains: ["Mont Agel (nearby in France)"],
            deserts: [],
            forests: [],
            oceans: ["Mediterranean Sea"]
        },

        culture: {
            officialLanguages: ["French"],
            languages: ["French", "Monégasque", "Italian", "English"],
            religions: ["Roman Catholicism (82.8%)", "Protestantism (2.7%)", "Judaism (1.4%)", "Others (13.1%)"],
            heritageSites: [],
            festivals: ["Monaco Grand Prix", "Monte-Carlo Television Festival", "Monaco Yacht Show", "National Day", "Fête de la Saint-Dévote"],
            cuisine: ["Barbagiuan", "Stocafi", "Fougasse Monégasque", "French & Mediterranean Cuisine"],
            arts: ["Opera (Opéra de Monte-Carlo)", "Ballet (Ballet de Monte-Carlo)", "Classical Music", "Contemporary Art"],
            sports: ["Formula 1", "Football", "Tennis", "Sailing", "Swimming"]
        },

        symbols: {
            bird: "None Official",
            animal: "None Official",
            flower: "Carnation",
            tree: "None Official",
            anthem: "Hymne Monégasque",
            motto: "With God's Help"
        },

        demographics: {
            lifeExpectancy: 85.81,
            literacyRate: "99%",
            urbanPopulation: "100%",
            medianAge: 55.4
        },

        history: {
            timeline: [
                { year: "1215", title: "Fortress Built", description: "Genoese fortress built on the Rock" },
                { year: "1297", title: "Grimaldi Rule", description: "François Grimaldi seized fortress" },
                { year: "1861", title: "French Protection", description: "Franco-Monegasque Treaty; sovereignty recognized" },
                { year: "1911", title: "Constitution", description: "First constitution promulgated" },
                { year: "1949", title: "Prince Rainier III", description: "Prince Rainier III ascended throne" },
                { year: "1956", title: "Royal Wedding", description: "Prince Rainier married Grace Kelly" },
                { year: "2005", title: "Prince Albert II", description: "Prince Albert II became sovereign prince" }
            ],
            notableFigures: ["Prince Albert II", "Prince Rainier III", "Princess Grace (Grace Kelly)", "François Grimaldi"]
        },

        disputes: [],

        quickFacts: [
            { icon: "map", title: "2nd Smallest", text: "2nd smallest country (2.02 km²); only Vatican is smaller" },
            { icon: "users", title: "Most Dense", text: "World's most densely populated country" },
            { icon: "car", title: "Formula 1", text: "Home to Monaco Grand Prix since 1929" },
            { icon: "dollar-sign", title: "No Income Tax", text: "No personal income tax for residents" },
            { icon: "dice", title: "Casino", text: "Monte Carlo Casino is world-famous" },
            { icon: "ship", title: "Yachts", text: "One of world's largest yacht-owning populations per capita" }
        ]
    },

    // 15. NETHERLANDS
    {
        id: "NLD",
        name: "Netherlands",
        officialName: "Kingdom of the Netherlands",
        flag: "https://flagcdn.com/w320/nl.png",
        
        images: {
            hero: "https://images.unsplash.com/photo-1534351590666-13e3e96b5017?w=1920&q=80",
            landscape: "https://images.unsplash.com/photo-1524047934617-cb782c24e5f3?w=1920&q=80",
            city: "https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?w=1920&q=80"
        },

        basic: {
            capital: "Amsterdam (Constitutional), The Hague (Government)",
            continent: "Europe",
            region: "Western Europe",
            subregion: "Western Europe",
            population: 17811291,
            area: 41850,
            populationDensity: 423,
            independence: "1581",
            callingCode: "+31",
            tld: ".nl",
            drivingSide: "Right",
            electricity: "230V, 50Hz"
        },

        location: {
            coordinates: [52.1326, 5.2913],
            timezone: "UTC+1 (CET)",
            neighbors: ["Germany", "Belgium"],
            borders: 1053,
            hemispheres: ["Northern", "Eastern"]
        },

        political: {
            government: "Unitary Parliamentary Constitutional Monarchy",
            headOfState: "King Willem-Alexander",
            headOfGovernment: "Prime Minister Dick Schoof",
            legislature: "States General (Senate & House of Representatives)",
            legalSystem: "Civil Law (based on Napoleonic Code)",
            states: 12,
            provinces: 12,
            municipalities: 342,
            largestCity: "Amsterdam",
            organizations: ["UN", "EU", "NATO", "OECD", "WTO", "Council of Europe", "Schengen Area", "Eurozone", "Benelux"]
        },

        economy: {
            gdp: "$1.09 Trillion",
            gdpPPP: "$1.23 Trillion",
            gdpPerCapita: "$61,098",
            gdpRank: "#17",
            gdpGrowth: "0.1%",
            currency: "Euro",
            currencyCode: "EUR",
            currencySymbol: "€",
            inflation: "4.1%",
            unemployment: "3.6%",
            majorSectors: ["Services (80%)", "Industry (18%)", "Agriculture (2%)"],
            industries: ["Agriculture", "Metal", "Engineering", "Electrical Machinery", "Chemicals", "Petroleum", "Construction", "Microelectronics", "Fishing", "Food Processing", "Tourism", "Financial Services"],
            exports: ["Refined Petroleum", "Packaged Medicaments", "Broadcasting Equipment", "Computers", "Flowers"],
            imports: ["Crude Petroleum", "Refined Petroleum", "Computers", "Packaged Medicaments", "Broadcasting Equipment"]
        },

        geography: {
            climate: "Temperate Maritime",
            avgTemperature: "10.8°C",
            annualRainfall: "838 mm",
            highestPoint: "Mount Scenery (887 m - Caribbean Netherlands), Vaalserberg (322 m - European Netherlands)",
            lowestPoint: "Zuidplaspolder (-7 m)",
            coastline: "451 km",
            forestCover: "11.2%",
            arableLand: "29.8%",
            terrain: "Mostly coastal lowland and reclaimed land (polders); some hills in southeast",
            naturalResources: ["Natural Gas", "Petroleum", "Peat", "Limestone", "Salt", "Sand", "Gravel", "Arable Land"]
        },

        geography_links: {
            rivers: ["Rhine River", "Meuse River", "Scheldt River", "IJssel River", "Waal River"],
            mountains: ["Vaalserberg", "Mount Scenery (Caribbean)"],
            deserts: [],
            forests: ["Veluwe", "Hoge Veluwe National Park", "Biesbosch"],
            oceans: ["North Sea"]
        },

        culture: {
            officialLanguages: ["Dutch"],
            languages: ["Dutch", "Frisian", "English", "German", "Papiamento"],
            religions: ["No Religion (55.1%)", "Roman Catholicism (20.1%)", "Protestantism (14.8%)", "Islam (5.1%)", "Others (4.9%)"],
            heritageSites: ["Schokland and Surroundings", "Defence Line of Amsterdam", "Kinderdijk Mill Network", "Historic Area of Willemstad", "Rietveld Schröder House", "Beemster Polder", "Van Nellefabriek", "Amsterdam Canal Ring"],
            festivals: ["King's Day", "Carnival", "Sinterklaas", "Liberation Day", "Keukenhof", "Amsterdam Pride"],
            cuisine: ["Stroopwafel", "Herring", "Bitterballen", "Kroket", "Stamppot", "Gouda Cheese", "Poffertjes", "Drop (Licorice)"],
            arts: ["Dutch Golden Age Painting (Rembrandt, Vermeer, Van Gogh)", "Architecture", "Design", "Electronic Music"],
            sports: ["Football", "Cycling", "Speed Skating", "Field Hockey", "Volleyball"]
        },

        symbols: {
            bird: "Black-tailed Godwit",
            animal: "Lion",
            flower: "Tulip",
            tree: "None Official",
            anthem: "Wilhelmus",
            motto: "I Will Maintain"
        },

        demographics: {
            lifeExpectancy: 82.28,
            literacyRate: "99%",
            urbanPopulation: "92.8%",
            medianAge: 42.8
        },

        history: {
            timeline: [
                { year: "1581", title: "Independence Declared", description: "Declaration of independence from Spain" },
                { year: "17th Century", title: "Dutch Golden Age", description: "Era of global trade, art, science dominance" },
                { year: "1602", title: "VOC Founded", description: "Dutch East India Company founded (first multinational)" },
                { year: "1815", title: "Kingdom", description: "Kingdom of the Netherlands established" },
                { year: "1940-1945", title: "WWII", description: "German occupation" },
                { year: "1948", title: "Benelux", description: "Formed Benelux customs union" },
                { year: "1957", title: "EU Founder", description: "Founding member of EEC" }
            ],
            notableFigures: ["William of Orange", "Rembrandt", "Vincent van Gogh", "Anne Frank", "Erasmus", "Johan Cruyff"]
        },

        disputes: [],

        quickFacts: [
            { icon: "water", title: "Below Sea Level", text: "26% of country is below sea level" },
            { icon: "bicycle", title: "Cycling", text: "More bicycles (23M) than people (17.8M)" },
            { icon: "flower", title: "Tulips", text: "World's largest flower exporter" },
            { icon: "ship", title: "Port of Rotterdam", text: "Europe's largest port" },
            { icon: "paint-brush", title: "Art Masters", text: "Home of Rembrandt, Vermeer, Van Gogh" },
            { icon: "building", title: "Tallest People", text: "Dutch are world's tallest people on average" }
        ]
    },

    // 16. SWITZERLAND
    {
        id: "CHE",
        name: "Switzerland",
        officialName: "Swiss Confederation",
        flag: "https://flagcdn.com/w320/ch.png",
        
        images: {
            hero: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?w=1920&q=80",
            landscape: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80",
            city: "https://images.unsplash.com/photo-1515488764276-beab7607c1e6?w=1920&q=80"
        },

        basic: {
            capital: "Bern (de facto)",
            continent: "Europe",
            region: "Western Europe",
            subregion: "Central Europe",
            population: 8796669,
            area: 41284,
            populationDensity: 220,
            independence: "1291",
            callingCode: "+41",
            tld: ".ch",
            drivingSide: "Right",
            electricity: "230V, 50Hz"
        },

        location: {
            coordinates: [46.8182, 8.2275],
            timezone: "UTC+1 (CET)",
            neighbors: ["Germany", "Austria", "Liechtenstein", "Italy", "France"],
            borders: 1852,
            hemispheres: ["Northern", "Eastern"]
        },

        political: {
            government: "Federal Semi-Direct Democracy under Multi-Party Directorial Republic",
            headOfState: "Federal Council (7 members, rotating presidency)",
            headOfGovernment: "President Karin Keller-Sutter (2025)",
            legislature: "Federal Assembly (Council of States & National Council)",
            legalSystem: "Civil Law (influenced by Germanic and French traditions)",
            states: 26,
            cantons: 26,
            largestCity: "Zürich",
            organizations: ["UN", "EFTA", "Council of Europe", "OSCE", "WTO", "Schengen Area"]
        },

        economy: {
            gdp: "$884 Billion",
            gdpPPP: "$729 Billion",
            gdpPerCapita: "$99,994",
            gdpRank: "#20",
            gdpGrowth: "0.7%",
            currency: "Swiss Franc",
            currencyCode: "CHF",
            currencySymbol: "CHF",
            inflation: "2.1%",
            unemployment: "2.0%",
            majorSectors: ["Services (74%)", "Industry (25%)", "Agriculture (1%)"],
            industries: ["Machinery", "Chemicals", "Watches", "Textiles", "Precision Instruments", "Tourism", "Banking", "Insurance", "Pharmaceuticals", "Chocolate", "Cheese"],
            exports: ["Gold", "Packaged Medicaments", "Blood Products", "Watches", "Orthopedic Appliances"],
            imports: ["Gold", "Packaged Medicaments", "Cars", "Jewellery", "Blood Products"]
        },

        geography: {
            climate: "Temperate; Varies with Altitude; Cold, Cloudy, Rainy/Snowy Winters; Cool to Warm, Cloudy, Humid Summers",
            avgTemperature: "6.2°C",
            annualRainfall: "1,537 mm",
            highestPoint: "Dufourspitze (4,634 m)",
            lowestPoint: "Lake Maggiore (193 m)",
            coastline: "0 km (Landlocked)",
            forestCover: "32.4%",
            arableLand: "10.1%",
            terrain: "Mostly mountains (Alps in south, Jura in northwest) with a central plateau of rolling hills, plains, and large lakes",
            naturalResources: ["Hydropower", "Timber", "Salt"]
        },

        geography_links: {
            rivers: ["Rhine River", "Rhône River", "Aare River", "Reuss River", "Ticino River"],
            mountains: ["Alps", "Jura Mountains", "Matterhorn", "Eiger", "Jungfrau", "Dufourspitze", "Monte Rosa"],
            deserts: [],
            forests: ["Swiss National Park", "Sihlwald", "Alpine Forests"],
            oceans: []
        },

        culture: {
            officialLanguages: ["German", "French", "Italian", "Romansh"],
            languages: ["German (62.3%)", "French (22.8%)", "Italian (8%)", "Romansh (0.5%)", "English"],
            religions: ["Roman Catholicism (34.4%)", "Protestantism (22.5%)", "No Religion (29.4%)", "Islam (5.4%)", "Others (8.3%)"],
            heritageSites: ["Old City of Berne", "Convent of St Gall", "Jungfrau-Aletsch", "Monte San Giorgio", "Lavaux Vineyard Terraces", "Swiss Tectonic Arena Sardona", "La Chaux-de-Fonds / Le Locle", "Rhaetian Railway"],
            festivals: ["Fasnacht (Basel Carnival)", "Fête de l'Escalade", "National Day (August 1)", "Montreux Jazz Festival", "Street Parade (Zürich)"],
            cuisine: ["Cheese Fondue", "Raclette", "Rösti", "Chocolate", "Zürcher Geschnetzeltes", "Birchermüesli"],
            arts: ["Watchmaking", "Architecture", "Painting (Paul Klee, Alberto Giacometti)", "Literature"],
            sports: ["Football", "Ice Hockey", "Skiing", "Tennis", "Cycling", "Bobsled"]
        },

        symbols: {
            bird: "None Official",
            animal: "None Official (Cow symbolically)",
            flower: "Edelweiss",
            tree: "None Official",
            anthem: "Swiss Psalm",
            motto: "One for All, All for One (Unofficial)"
        },

        demographics: {
            lifeExpectancy: 84.25,
            literacyRate: "99%",
            urbanPopulation: "74.1%",
            medianAge: 43.1
        },

        history: {
            timeline: [
                { year: "1291", title: "Swiss Confederation", description: "Federal Charter; founding of Switzerland" },
                { year: "1499", title: "Independence", description: "De facto independence from Holy Roman Empire" },
                { year: "1648", title: "Recognition", description: "Peace of Westphalia formally recognized independence" },
                { year: "1815", title: "Neutrality", description: "Congress of Vienna recognized permanent neutrality" },
                { year: "1848", title: "Federal State", description: "Modern federal state constitution adopted" },
                { year: "1863", title: "Red Cross", description: "Red Cross founded in Geneva" },
                { year: "1920", title: "League of Nations", description: "Geneva became seat of League of Nations" },
                { year: "2002", title: "UN Member", description: "Joined United Nations" }
            ],
            notableFigures: ["William Tell (legendary)", "Henry Dunant", "Carl Jung", "Albert Einstein", "Jean-Jacques Rousseau", "Roger Federer"]
        },

        disputes: [],

        quickFacts: [
            { icon: "globe", title: "Neutrality", text: "Neutral since 1515; not in EU, NATO, or UN Security Council" },
            { icon: "bank", title: "Banking", text: "World-famous banking secrecy and financial center" },
            { icon: "watch", title: "Watches", text: "Produces 95% of world's luxury watches" },
            { icon: "chocolate-bar", title: "Chocolate", text: "Highest chocolate consumption per capita" },
            { icon: "language", title: "Four Languages", text: "Four official languages (German, French, Italian, Romansh)" },
            { icon: "vote-yea", title: "Direct Democracy", text: "Citizens vote on many national issues directly" }
        ]
    }
];

// Export for Node.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CountriesData6;
}

// Export for Browser
if (typeof window !== 'undefined') {
    window.CountriesData6 = CountriesData6;
}
