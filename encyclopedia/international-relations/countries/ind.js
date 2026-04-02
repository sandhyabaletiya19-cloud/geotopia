/* =====================================================
   INDIA - Complete Country Data
   ISO 3166-1 alpha-3: IND
   ===================================================== */

export default {
    // ==================== BASIC INFO ====================
    code: "IND",
    iso2: "IN",
    name: "India",
    officialName: "Republic of India",
    nativeName: "भारत गणराज्य (Bhārat Gaṇarājya)",
    flag: "🇮🇳",
    region: "asia",
    subregion: "Southern Asia",
    capital: "New Delhi",
    largestCity: "Mumbai",
    population: 1428627663,
    area: 3287263,
    populationDensity: 434.5,
    gdp: 3732.2,
    gdpPPP: 13119.0,
    currency: "INR",
    currencyName: "Indian Rupee",
    currencySymbol: "₹",
    callingCode: "+91",
    tld: ".in",
    drivingSide: "left",
    timezone: "UTC+5:30",
    dateFormat: "dd/mm/yyyy",
    languages: ["Hindi", "English"],
    officialLanguages: ["Hindi", "English"],
    regionalLanguages: ["Bengali", "Telugu", "Marathi", "Tamil", "Urdu", "Gujarati", "Kannada", "Malayalam", "Odia", "Punjabi", "Assamese", "Maithili", "Sanskrit"],
    colors: ["#FF9933", "#FFFFFF", "#138808", "#000080"],
    coordinates: { lat: 20.5937, lng: 78.9629 },
    boundingBox: { north: 35.5, south: 6.75, east: 97.4, west: 68.1 },
    
    // All countries India has relations with
    relations: [
        // Major Powers
        "USA", "RUS", "CHN", "GBR", "FRA", "DEU", "JPN",
        // Neighbors
        "PAK", "BGD", "NPL", "BTN", "LKA", "MMR", "AFG",
        // Middle East
        "SAU", "ARE", "IRN", "IRQ", "ISR", "QAT", "KWT", "OMN", "BHR", "JOR", "EGY", "TUR",
        // Asia-Pacific
        "AUS", "IDN", "MYS", "SGP", "THA", "VNM", "PHL", "KOR", "PRK", "MNG", "KAZ", "UZB", "TKM", "KGZ", "TJK",
        // Africa
        "ZAF", "NGA", "KEN", "ETH", "TZA", "UGA", "GHA", "SEN", "MUS", "MDG", "MOZ", "RWA",
        // Europe
        "ITA", "ESP", "NLD", "BEL", "CHE", "AUT", "SWE", "NOR", "DNK", "FIN", "POL", "CZE", "GRC", "PRT", "IRL", "UKR",
        // Americas
        "BRA", "MEX", "ARG", "CAN", "CHL", "COL", "PER", "CUB", "VEN",
        // Oceania
        "NZL", "FJI"
    ],
    
    organizations: ["UN", "BRICS", "SCO", "G20", "CW", "SAARC", "QUAD", "IORA", "NAM", "WTO", "IMF", "AIIB", "NDB", "ISA", "CDRI"],

    // ==================== GEOGRAPHY ====================
    geography: {
        borders: [
            { country: "PAK", length: 3323 },
            { country: "CHN", length: 3488 },
            { country: "NPL", length: 1751 },
            { country: "BTN", length: 699 },
            { country: "BGD", length: 4096 },
            { country: "MMR", length: 1643 }
        ],
        totalBorderLength: 15000,
        coastline: 7516.6,
        maritimeZones: {
            territorialSea: 12,
            contiguousZone: 24,
            exclusiveEconomicZone: 200,
            continentalShelf: 200
        },
        highestPoint: { name: "Kangchenjunga", elevation: 8586, location: "Sikkim" },
        lowestPoint: { name: "Kuttanad", elevation: -2.2, location: "Kerala" },
        majorMountains: [
            { name: "Kangchenjunga", elevation: 8586 },
            { name: "Nanda Devi", elevation: 7816 },
            { name: "Kamet", elevation: 7756 },
            { name: "Saltoro Kangri", elevation: 7742 }
        ],
        majorRivers: [
            { name: "Ganges", length: 2525 },
            { name: "Brahmaputra", length: 2900 },
            { name: "Indus", length: 3180 },
            { name: "Godavari", length: 1465 },
            { name: "Krishna", length: 1400 },
            { name: "Yamuna", length: 1376 },
            { name: "Narmada", length: 1312 },
            { name: "Kaveri", length: 800 }
        ],
        majorLakes: [
            { name: "Chilika Lake", area: 1165, type: "Brackish lagoon" },
            { name: "Wular Lake", area: 260, type: "Freshwater" },
            { name: "Vembanad Lake", area: 2033, type: "Brackish" },
            { name: "Loktak Lake", area: 287, type: "Freshwater" }
        ],
        climate: {
            description: "Varies from tropical monsoon in south to temperate in north",
            zones: ["Tropical", "Subtropical", "Temperate", "Alpine", "Arid"],
            monsoonSeason: "June to September",
            averageRainfall: 1170
        },
        terrain: "Upland plain in south, flat rolling plain along Ganges, deserts in west, Himalayas in north",
        landUse: {
            agriculturalLand: 60.5,
            forest: 24.0,
            other: 15.5
        },
        naturalResources: [
            "Coal (5th largest reserves)",
            "Iron ore (4th largest reserves)", 
            "Manganese",
            "Mica (largest reserves)",
            "Bauxite",
            "Rare earth elements",
            "Titanium ore",
            "Chromite",
            "Natural gas",
            "Diamonds",
            "Petroleum",
            "Limestone",
            "Thorium (largest reserves)"
        ],
        environmentalIssues: [
            "Air pollution (major cities among world's most polluted)",
            "Water pollution (Ganges cleanup ongoing)",
            "Deforestation",
            "Soil degradation",
            "Overgrazing",
            "Desertification",
            "Loss of biodiversity",
            "Groundwater depletion"
        ],
        naturalHazards: ["Droughts", "Flash floods", "Cyclones", "Earthquakes", "Landslides"],
        biodiversity: {
            megadiverseCountry: true,
            endemicSpecies: 47000,
            protectedAreas: 990,
            nationalParks: 106,
            wildlifeSanctuaries: 567,
            biosphereReserves: 18
        }
    },

    // ==================== DEMOGRAPHICS ====================
    demographics: {
        population: 1428627663,
        populationRank: 1,
        populationGrowth: 0.81,
        birthRate: 17.6,
        deathRate: 7.3,
        medianAge: 28.2,
        sexRatio: 108.2,
        urbanization: 35.4,
        urbanPopulation: 505784449,
        ruralPopulation: 922843214,
        lifeExpectancy: {
            total: 70.8,
            male: 69.5,
            female: 72.2
        },
        infantMortality: 27.7,
        fertilityRate: 2.0,
        literacy: {
            total: 77.7,
            male: 84.7,
            female: 70.3
        },
        ethnicGroups: {
            "Indo-Aryan": 72,
            "Dravidian": 25,
            "Mongoloid and other": 3
        },
        religions: {
            "Hinduism": 79.8,
            "Islam": 14.2,
            "Christianity": 2.3,
            "Sikhism": 1.7,
            "Buddhism": 0.7,
            "Jainism": 0.4,
            "Other (including tribal religions)": 0.9
        },
        languages: {
            "Hindi": 43.6,
            "Bengali": 8.0,
            "Marathi": 6.9,
            "Telugu": 6.7,
            "Tamil": 5.7,
            "Gujarati": 4.6,
            "Urdu": 4.2,
            "Kannada": 3.6,
            "Odia": 3.1,
            "Malayalam": 2.9,
            "Other": 10.7
        },
        scheduledCastes: 16.6,
        scheduledTribes: 8.6,
        majorCities: [
            { name: "Mumbai", population: 20411274, state: "Maharashtra" },
            { name: "Delhi", population: 32941000, state: "Delhi NCT" },
            { name: "Bangalore", population: 12765000, state: "Karnataka" },
            { name: "Hyderabad", population: 10004000, state: "Telangana" },
            { name: "Chennai", population: 10971108, state: "Tamil Nadu" },
            { name: "Kolkata", population: 14974073, state: "West Bengal" },
            { name: "Ahmedabad", population: 8253000, state: "Gujarat" },
            { name: "Pune", population: 7400000, state: "Maharashtra" },
            { name: "Surat", population: 7490000, state: "Gujarat" },
            { name: "Jaipur", population: 4100000, state: "Rajasthan" }
        ],
        statesAndUTs: {
            states: 28,
            unionTerritories: 8,
            largest: { name: "Rajasthan", area: 342239 },
            mostPopulous: { name: "Uttar Pradesh", population: 231502578 },
            smallest: { name: "Goa", area: 3702 }
        },
        humanDevelopment: {
            hdiValue: 0.644,
            hdiRank: 134,
            category: "Medium"
        },
        giniCoefficient: 35.7,
        povertyRate: 10.0
    },

    // ==================== ECONOMY ====================
    economy: {
        gdpNominal: 3732.2,
        gdpNominalRank: 5,
        gdpPPP: 13119.0,
        gdpPPPRank: 3,
        gdpPerCapita: 2612,
        gdpPerCapitaPPP: 9183,
        gdpGrowth: 7.2,
        gdpGrowthForecast2025: 6.5,
        inflation: 5.7,
        unemployment: 7.8,
        youthUnemployment: 23.2,
        laborForce: 527500000,
        laborParticipation: 46.0,
        sectors: {
            services: { share: 54.4, growth: 7.5, employment: 31 },
            industry: { share: 26.3, growth: 6.8, employment: 25 },
            agriculture: { share: 19.3, growth: 4.0, employment: 44 }
        },
        majorIndustries: [
            "Information Technology & Software Services",
            "Textiles and Apparel",
            "Chemicals and Petrochemicals",
            "Pharmaceuticals",
            "Food Processing",
            "Steel and Metals",
            "Automobiles",
            "Cement",
            "Mining",
            "Petroleum Refining",
            "Machinery",
            "Electronics Manufacturing",
            "Telecommunications",
            "Financial Services",
            "Real Estate"
        ],
        exports: {
            total: 776.3,
            rank: 8,
            partners: [
                { country: "USA", share: 18.1 },
                { country: "ARE", share: 6.6 },
                { country: "NLD", share: 3.8 },
                { country: "CHN", share: 3.5 },
                { country: "BGD", share: 3.4 },
                { country: "GBR", share: 3.1 },
                { country: "SGP", share: 2.9 },
                { country: "SAU", share: 2.5 },
                { country: "DEU", share: 2.4 },
                { country: "HKG", share: 2.3 }
            ],
            commodities: [
                "Petroleum products (refined)",
                "Gems and jewelry",
                "Pharmaceuticals",
                "Machinery and equipment",
                "Organic chemicals",
                "Vehicles and parts",
                "Iron and steel",
                "Textiles and apparel",
                "Rice",
                "Electrical machinery"
            ]
        },
        imports: {
            total: 890.2,
            rank: 7,
            partners: [
                { country: "CHN", share: 15.4 },
                { country: "USA", share: 7.3 },
                { country: "ARE", share: 6.8 },
                { country: "SAU", share: 6.5 },
                { country: "IRQ", share: 4.7 },
                { country: "CHE", share: 4.4 },
                { country: "RUS", share: 4.0 },
                { country: "IDN", share: 3.2 },
                { country: "KOR", share: 3.0 },
                { country: "QAT", share: 2.8 }
            ],
            commodities: [
                "Crude petroleum",
                "Gold",
                "Coal",
                "Electronic components",
                "Machinery",
                "Organic chemicals",
                "Plastics",
                "Vegetable oils",
                "Fertilizers",
                "Iron and steel"
            ]
        },
        tradeBalance: -113.9,
        currentAccountBalance: -2.0,
        foreignReserves: 619.0,
        foreignReservesRank: 4,
        externalDebt: 624.7,
        fdiInflow: 71.0,
        fdiOutflow: 13.5,
        remittances: 111.0,
        remittancesRank: 1,
        stockExchanges: [
            { name: "Bombay Stock Exchange (BSE)", marketCap: 4100, index: "SENSEX" },
            { name: "National Stock Exchange (NSE)", marketCap: 4000, index: "NIFTY 50" }
        ],
        economicZones: {
            sez: 268,
            industrialCorridors: 11,
            smartCities: 100
        },
        ease_of_doing_business: 63,
        corruptionIndex: { score: 40, rank: 85 },
        majorCompanies: [
            { name: "Reliance Industries", sector: "Conglomerate", revenue: 104.6 },
            { name: "Tata Consultancy Services", sector: "IT", revenue: 27.9 },
            { name: "HDFC Bank", sector: "Banking", revenue: 22.0 },
            { name: "Infosys", sector: "IT", revenue: 18.2 },
            { name: "State Bank of India", sector: "Banking", revenue: 57.2 },
            { name: "ICICI Bank", sector: "Banking", revenue: 15.8 },
            { name: "Bharti Airtel", sector: "Telecom", revenue: 15.5 },
            { name: "Wipro", sector: "IT", revenue: 11.2 },
            { name: "Tata Motors", sector: "Automobiles", revenue: 44.8 },
            { name: "Larsen & Toubro", sector: "Engineering", revenue: 23.0 }
        ]
    },

    // ==================== GOVERNMENT ====================
    government: {
        type: "Federal parliamentary democratic republic",
        headOfState: {
            title: "President",
            name: "Droupadi Murmu",
            since: "2022-07-25"
        },
        headOfGovernment: {
            title: "Prime Minister",
            name: "Narendra Modi",
            since: "2014-05-26",
            party: "Bharatiya Janata Party (BJP)"
        },
        legislature: {
            type: "Bicameral Parliament (Sansad)",
            upperHouse: { name: "Rajya Sabha (Council of States)", seats: 245, term: 6 },
            lowerHouse: { name: "Lok Sabha (House of the People)", seats: 543, term: 5 }
        },
        judiciary: {
            highestCourt: "Supreme Court of India",
            chiefJustice: "Current Chief Justice",
            highCourts: 25
        },
        rulingParty: "National Democratic Alliance (NDA) led by BJP",
        oppositionLeader: "Rahul Gandhi (Congress)",
        majorParties: [
            { name: "Bharatiya Janata Party (BJP)", ideology: "Right-wing, Hindu nationalism" },
            { name: "Indian National Congress (INC)", ideology: "Center-left, Secular" },
            { name: "Aam Aadmi Party (AAP)", ideology: "Anti-corruption, Populist" },
            { name: "All India Trinamool Congress (TMC)", ideology: "Center-left, Regional" },
            { name: "Dravida Munnetra Kazhagam (DMK)", ideology: "Dravidian, Social democracy" },
            { name: "Communist Party of India (Marxist)", ideology: "Left-wing" }
        ],
        federalStructure: {
            states: 28,
            unionTerritories: 8,
            administration: "Three-tier system: Central, State, Local"
        },
        independence: {
            date: "1947-08-15",
            from: "United Kingdom"
        },
        nationalDay: {
            republicDay: "January 26",
            independenceDay: "August 15",
            gandhiJayanti: "October 2"
        },
        constitution: {
            adopted: "1949-11-26",
            effective: "1950-01-26",
            type: "World's longest written constitution",
            articles: 470,
            amendments: 106
        },
        legalSystem: "Common law system based on English model; separate personal law codes apply to Muslims, Christians, and Hindus",
        suffrage: "18 years of age; universal",
        internationalOrganizations: {
            founder: ["UN", "NAM", "CW", "SAARC"],
            member: ["G20", "BRICS", "SCO", "WTO", "IMF", "World Bank", "ADB", "AIIB", "NDB", "QUAD", "IORA", "ISA", "CDRI"]
        },
        administrativeDivisions: {
            states: [
                "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
                "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand",
                "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur",
                "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab",
                "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura",
                "Uttar Pradesh", "Uttarakhand", "West Bengal"
            ],
            unionTerritories: [
                "Andaman and Nicobar Islands", "Chandigarh", "Dadra and Nagar Haveli and Daman and Diu",
                "Delhi NCT", "Jammu and Kashmir", "Ladakh", "Lakshadweep", "Puducherry"
            ]
        }
    },

    // ==================== MILITARY ====================
    military: {
        name: "Indian Armed Forces",
        commanderInChief: "President of India",
        ministryOfDefence: "Ministry of Defence",
        defenceMinister: "Rajnath Singh",
        branches: [
            {
                name: "Indian Army",
                personnel: 1237000,
                headquarters: "New Delhi",
                chief: "Chief of Army Staff"
            },
            {
                name: "Indian Navy",
                personnel: 67000,
                headquarters: "New Delhi",
                chief: "Chief of Naval Staff",
                fleets: ["Western Naval Command", "Eastern Naval Command", "Southern Naval Command"]
            },
            {
                name: "Indian Air Force",
                personnel: 140000,
                headquarters: "New Delhi",
                chief: "Chief of Air Staff",
                aircraft: 1700
            },
            {
                name: "Indian Coast Guard",
                personnel: 15000,
                headquarters: "New Delhi"
            }
        ],
        chiefOfDefenceStaff: "General Anil Chauhan",
        totalPersonnel: 1450000,
        activePersonnel: 1450000,
        reservePersonnel: 1155000,
        paramilitaryForces: 2500000,
        paramilitaryUnits: [
            "Central Reserve Police Force (CRPF)",
            "Border Security Force (BSF)",
            "Indo-Tibetan Border Police (ITBP)",
            "Central Industrial Security Force (CISF)",
            "Sashastra Seema Bal (SSB)",
            "Assam Rifles",
            "National Security Guard (NSG)"
        ],
        budget: 81.4,
        budgetPercent: 2.4,
        budgetRank: 4,
        globalFirepowerRank: 4,
        nuclearStatus: {
            status: "Nuclear weapons state (de facto)",
            warheads: 164,
            policy: "No first use",
            triad: true,
            firstTest: "1974 (Smiling Buddha)",
            deliverySystems: ["Agni missiles", "Prithvi missiles", "INS Arihant submarines", "Aircraft"]
        },
        equipment: {
            tanks: 4614,
            armoredVehicles: 12000,
            artillery: 4150,
            aircraft: 2182,
            helicopters: 829,
            navalVessels: 150,
            submarines: 17,
            aircraftCarriers: 2
        },
        majorBases: [
            { name: "INS Kadamba", type: "Naval", location: "Karwar" },
            { name: "Chandigarh Air Force Station", type: "Air", location: "Chandigarh" },
            { name: "Jodhpur Air Force Station", type: "Air", location: "Jodhpur" }
        ],
        defenseProduction: {
            ordnanceFactories: 41,
            dpsuCompanies: 9,
            privateParticipation: "Growing",
            majorProjects: ["Tejas LCA", "INS Vikrant", "Arjun MBT", "BrahMos missile"]
        },
        conscription: "None (all-volunteer force)",
        militaryAge: 17.5,
        peacekeepingContributions: {
            rank: 3,
            personnel: 5500,
            missions: 50
        }
    },

    // ==================== CULTURE ====================
    culture: {
        nationalSymbols: {
            emblem: "Lion Capital of Ashoka",
            animal: "Royal Bengal Tiger (Panthera tigris tigris)",
            bird: "Indian Peacock (Pavo cristatus)",
            flower: "Lotus (Nelumbo nucifera)",
            tree: "Indian Banyan (Ficus benghalensis)",
            fruit: "Mango",
            river: "Ganges",
            sport: "Field Hockey (national), Cricket (most popular)",
            currency: "Indian Rupee (₹)"
        },
        anthem: {
            name: "Jana Gana Mana",
            composer: "Rabindranath Tagore",
            adopted: "1950-01-24",
            duration: "52 seconds"
        },
        nationalSong: {
            name: "Vande Mataram",
            composer: "Bankim Chandra Chatterjee"
        },
        motto: "Satyameva Jayate (सत्यमेव जयते - Truth Alone Triumphs)",
        pledge: "India is my country...",
        calendar: {
            official: "Saka Calendar",
            gregorian: true
        },
        festivals: [
            { name: "Diwali", type: "Hindu", season: "October-November" },
            { name: "Holi", type: "Hindu", season: "March" },
            { name: "Eid ul-Fitr", type: "Islamic", season: "Varies" },
            { name: "Eid ul-Adha", type: "Islamic", season: "Varies" },
            { name: "Christmas", type: "Christian", season: "December" },
            { name: "Durga Puja", type: "Hindu", season: "September-October" },
            { name: "Ganesh Chaturthi", type: "Hindu", season: "August-September" },
            { name: "Navratri", type: "Hindu", season: "September-October" },
            { name: "Pongal", type: "Hindu (Tamil)", season: "January" },
            { name: "Onam", type: "Hindu (Kerala)", season: "August-September" },
            { name: "Baisakhi", type: "Sikh", season: "April" },
            { name: "Buddha Purnima", type: "Buddhist", season: "May" },
            { name: "Mahavir Jayanti", type: "Jain", season: "March-April" }
        ],
        publicHolidays: [
            { name: "Republic Day", date: "January 26" },
            { name: "Independence Day", date: "August 15" },
            { name: "Gandhi Jayanti", date: "October 2" }
        ],
        worldHeritageSites: {
            total: 42,
            cultural: 34,
            natural: 7,
            mixed: 1,
            notable: [
                "Taj Mahal (1983)",
                "Ajanta Caves (1983)",
                "Ellora Caves (1983)",
                "Agra Fort (1983)",
                "Khajuraho Group (1986)",
                "Hampi (1986)",
                "Fatehpur Sikri (1986)",
                "Sun Temple Konark (1984)",
                "Kaziranga National Park (1985)",
                "Sundarbans National Park (1987)",
                "Jaipur City (2019)",
                "Dholavira (2021)",
                "Santiniketan (2023)"
            ]
        },
        intangibleHeritage: [
            "Yoga",
            "Kumbh Mela",
            "Ramlila",
            "Vedic Chanting",
            "Chhau Dance",
            "Koodiyattam",
            "Mudiyettu",
            "Kalbelia",
            "Sankirtana"
        ],
        cuisines: {
            regional: [
                "North Indian (Mughlai, Punjabi, Kashmiri)",
                "South Indian (Tamil, Kerala, Karnataka, Andhra)",
                "Bengali",
                "Gujarati",
                "Rajasthani",
                "Goan",
                "Maharashtrian",
                "Hyderabadi",
                "Chettinad",
                "Awadhi"
            ],
            iconicDishes: ["Biryani", "Butter Chicken", "Dosa", "Idli", "Samosa", "Tandoori Chicken", "Paneer Tikka", "Chole Bhature", "Rogan Josh", "Dhokla"],
            uniqueIngredients: ["Ghee", "Paneer", "Turmeric", "Cardamom", "Saffron", "Asafoetida"]
        },
        music: {
            classical: ["Hindustani (North)", "Carnatic (South)"],
            folk: ["Bhangra", "Garba", "Lavani", "Bihu", "Dandiya"],
            modern: ["Bollywood", "Indie", "Fusion"]
        },
        dance: {
            classical: ["Bharatanatyam", "Kathak", "Kathakali", "Kuchipudi", "Odissi", "Manipuri", "Mohiniyattam", "Sattriya"],
            folk: ["Bhangra", "Garba", "Ghoomar", "Bihu", "Chhau", "Yakshagana"]
        },
        cinema: {
            industries: [
                { name: "Bollywood (Hindi)", location: "Mumbai", films_per_year: 1500 },
                { name: "Tollywood (Telugu)", location: "Hyderabad" },
                { name: "Kollywood (Tamil)", location: "Chennai" },
                { name: "Mollywood (Malayalam)", location: "Kerala" },
                { name: "Sandalwood (Kannada)", location: "Bangalore" }
            ],
            rank: 1,
            filmsPerYear: 2000
        },
        literature: {
            classical: ["Vedas", "Upanishads", "Mahabharata", "Ramayana", "Bhagavad Gita", "Arthashastra", "Kamasutra"],
            nobelLaureate: "Rabindranath Tagore (1913)",
            modernWriters: ["R.K. Narayan", "Arundhati Roy", "Salman Rushdie", "Vikram Seth", "Jhumpa Lahiri"]
        },
        sports: {
            national: "Field Hockey",
            mostPopular: "Cricket",
            traditional: ["Kabaddi", "Kho-Kho", "Gilli-Danda", "Mallakhamb"],
            achievements: [
                "Cricket World Cup (1983, 2011)",
                "Hockey Olympic Golds (8)",
                "Cricket T20 World Cup (2007, 2024)"
            ],
            majorLeagues: ["IPL (Cricket)", "ISL (Football)", "PKL (Kabaddi)"]
        },
        clothing: {
            traditional: ["Sari", "Kurta", "Dhoti", "Sherwani", "Lehenga", "Salwar Kameez"],
            regionalVariations: true
        },
        architecture: {
            styles: ["Indo-Islamic", "Dravidian", "Nagara", "Vesara", "Colonial", "Modern"],
            iconicStructures: ["Taj Mahal", "Red Fort", "Qutub Minar", "Gateway of India", "Lotus Temple", "Meenakshi Temple"]
        },
        philosophy: ["Hinduism", "Buddhism", "Jainism", "Sikhism", "Yoga", "Ayurveda", "Vedanta", "Samkhya", "Nyaya"]
    },

    // ==================== INFRASTRUCTURE ====================
    infrastructure: {
        internet: {
            users: 692000000,
            penetration: 48.7,
            averageSpeed: 47.5,
            mobileInternetUsers: 659000000,
            broadbandSubscriptions: 825000000
        },
        telecom: {
            mobileSubscriptions: 1170000000,
            penetration: 82.0,
            majorOperators: ["Jio", "Airtel", "Vi (Vodafone Idea)", "BSNL"],
            5gCoverage: "Expanding"
        },
        transportation: {
            railways: {
                totalLength: 68525,
                rank: 4,
                passengers: 8500000000,
                freightMillion: 1418,
                electrified: 62000,
                highSpeed: "Under development (Mumbai-Ahmedabad)",
                operator: "Indian Railways"
            },
            roadways: {
                totalLength: 6215797,
                rank: 2,
                nationalHighways: 145240,
                expressways: 4500,
                stateHighways: 186908
            },
            airways: {
                airports: 148,
                internationalAirports: 34,
                passengers: 376000000,
                majorAirlines: ["Air India", "IndiGo", "SpiceJet", "Vistara", "Go First", "Akasa Air"],
                busiestAirports: ["Delhi (DEL)", "Mumbai (BOM)", "Bangalore (BLR)", "Hyderabad (HYD)", "Chennai (MAA)"]
            },
            waterways: {
                length: 14500,
                majorPorts: 13,
                minorPorts: 200
            },
            metros: [
                { city: "Delhi", length: 390, stations: 286 },
                { city: "Mumbai", length: 75, stations: 71 },
                { city: "Bangalore", length: 73, stations: 65 },
                { city: "Kolkata", length: 48, stations: 40 },
                { city: "Chennai", length: 54, stations: 41 },
                { city: "Hyderabad", length: 69, stations: 57 }
            ]
        },
        ports: {
            major: ["Mumbai (JNPT)", "Chennai", "Kolkata", "Visakhapatnam", "Paradip", "Kandla", "Mundra", "Cochin", "Tuticorin"],
            containerTraffic: 17000000,
            cargoCapacity: 1500
        },
        energy: {
            installedCapacity: 425000,
            renewable: {
                total: 179000,
                solar: 73000,
                wind: 44000,
                hydro: 47000,
                nuclear: 7500
            },
            renewableShare: 42,
            oilProduction: 0.66,
            oilConsumption: 5.2,
            oilImportDependence: 85,
            gasProduction: 33,
            coalProduction: 893,
            nuclearReactors: 22,
            electricityAccess: 99.5
        },
        water: {
            accessToSafeWater: 93,
            accessToSanitation: 72,
            majorDams: ["Tehri Dam", "Bhakra Dam", "Sardar Sarovar", "Hirakud Dam", "Nagarjuna Sagar"]
        },
        digitalInfrastructure: {
            datacenters: 138,
            fiberOpticLength: 3500000,
            aadhaarEnrollment: 1370000000,
            upiTransactions: 12000000000
        }
    },

    // ==================== HISTORY ====================
    history: {
        ancientPeriod: [
            { year: "3300 BCE", event: "Indus Valley Civilization emerges", significance: "One of world's earliest urban civilizations" },
            { year: "1500 BCE", event: "Vedic Period begins", significance: "Foundation of Hindu philosophy and Sanskrit literature" },
            { year: "600 BCE", event: "Rise of Mahajanapadas", significance: "16 great kingdoms emerge" },
            { year: "563 BCE", event: "Birth of Buddha", significance: "Buddhism founded" },
            { year: "540 BCE", event: "Birth of Mahavira", significance: "Jainism consolidated" },
            { year: "322 BCE", event: "Maurya Empire founded by Chandragupta", significance: "First pan-Indian empire" },
            { year: "268 BCE", event: "Ashoka becomes emperor", significance: "Spread of Buddhism; Edicts of Ashoka" },
            { year: "320 CE", event: "Gupta Empire begins", significance: "Golden Age of India" }
        ],
        medievalPeriod: [
            { year: "712", event: "Arab conquest of Sindh", significance: "Islam arrives in India" },
            { year: "1001", event: "Mahmud of Ghazni's invasions begin", significance: "Muslim invasions intensify" },
            { year: "1206", event: "Delhi Sultanate established", significance: "Muslim rule in North India" },
            { year: "1336", event: "Vijayanagara Empire founded", significance: "Last great Hindu empire in South" },
            { year: "1398", event: "Timur's invasion of Delhi", significance: "Delhi sacked" },
            { year: "1498", event: "Vasco da Gama arrives", significance: "European colonization begins" },
            { year: "1526", event: "Mughal Empire established by Babur", significance: "Beginning of Mughal rule" },
            { year: "1556", event: "Akbar becomes emperor", significance: "Mughal golden age begins" },
            { year: "1600", event: "British East India Company formed", significance: "British presence begins" },
            { year: "1674", event: "Maratha Empire founded by Shivaji", significance: "Hindu resistance to Mughals" },
            { year: "1707", event: "Death of Aurangzeb", significance: "Mughal decline begins" }
        ],
        colonialPeriod: [
            { year: "1757", event: "Battle of Plassey", significance: "British colonial rule begins" },
            { year: "1857", event: "Indian Rebellion (First War of Independence)", significance: "End of Mughal Empire; direct British rule" },
            { year: "1858", event: "British Raj established", significance: "Crown rule begins" },
            { year: "1885", event: "Indian National Congress founded", significance: "Independence movement begins" },
            { year: "1905", event: "Partition of Bengal", significance: "Swadeshi movement" },
            { year: "1919", event: "Jallianwala Bagh massacre", significance: "379 killed; intensified freedom struggle" },
            { year: "1920", event: "Non-Cooperation Movement", significance: "Gandhi's first mass movement" },
            { year: "1930", event: "Salt March (Dandi March)", significance: "Civil disobedience movement" },
            { year: "1942", event: "Quit India Movement", significance: "Final push for independence" },
            { year: "1947-08-15", event: "Independence and Partition", significance: "India and Pakistan created; 1M+ deaths" }
        ],
        modernPeriod: [
            { year: "1947", event: "First Kashmir War", significance: "Kashmir conflict begins" },
            { year: "1950", event: "Constitution adopted; Republic established", significance: "Democratic republic" },
            { year: "1962", event: "Sino-Indian War", significance: "Military defeat; border dispute" },
            { year: "1965", event: "Second Indo-Pak War", significance: "Stalemate over Kashmir" },
            { year: "1971", event: "Bangladesh Liberation War", significance: "East Pakistan becomes Bangladesh" },
            { year: "1974", event: "First nuclear test (Smiling Buddha)", significance: "Nuclear capability" },
            { year: "1975-1977", event: "Emergency period", significance: "Civil liberties suspended" },
            { year: "1984", event: "Operation Blue Star; Indira Gandhi assassination", significance: "Sikh militancy; anti-Sikh riots" },
            { year: "1991", event: "Economic liberalization", significance: "End of License Raj; economic reforms" },
            { year: "1998", event: "Pokhran-II nuclear tests", significance: "Declared nuclear state" },
            { year: "1999", event: "Kargil War", significance: "Conflict with Pakistan" },
            { year: "2008", event: "Mumbai terrorist attacks (26/11)", significance: "166 killed; India-Pakistan tensions" },
            { year: "2014", event: "Narendra Modi becomes PM", significance: "BJP majority government" },
            { year: "2019", event: "Article 370 abrogated", significance: "J&K reorganized" },
            { year: "2023", event: "Chandrayaan-3 Moon landing", significance: "4th country to land on Moon; first at South Pole" }
        ],
        notableFigures: [
            { name: "Mahatma Gandhi", role: "Father of the Nation", years: "1869-1948" },
            { name: "Jawaharlal Nehru", role: "First Prime Minister", years: "1889-1964" },
            { name: "Sardar Vallabhbhai Patel", role: "Iron Man of India", years: "1875-1950" },
            { name: "B.R. Ambedkar", role: "Father of Constitution", years: "1891-1956" },
            { name: "Subhas Chandra Bose", role: "Freedom Fighter", years: "1897-1945" },
            { name: "Indira Gandhi", role: "First female PM", years: "1917-1984" },
            { name: "Atal Bihari Vajpayee", role: "Prime Minister; Statesman", years: "1924-2018" },
            { name: "APJ Abdul Kalam", role: "Missile Man; President", years: "1931-2015" },
            { name: "Mother Teresa", role: "Humanitarian", years: "1910-1997" }
        ]
    },

    // ==================== EDUCATION ====================
    education: {
        system: {
            structure: "10+2+3 system",
            compulsory: { ages: "6-14", act: "Right to Education Act 2009" },
            medium: "State languages and English"
        },
        literacyRate: {
            total: 77.7,
            male: 84.7,
            female: 70.3
        },
        enrollment: {
            primary: 98.0,
            secondary: 77.0,
            tertiary: 28.4
        },
        institutions: {
            schools: 1500000,
            universities: 1113,
            iits: 23,
            iims: 21,
            aiims: 23,
            nits: 31,
            iiits: 25,
            centralUniversities: 54,
            stateUniversities: 456,
            privateUniversities: 418,
            deemedUniversities: 126
        },
        topUniversities: [
            { name: "Indian Institute of Science (IISc) Bangalore", ranking: 1 },
            { name: "IIT Bombay", ranking: 2 },
            { name: "IIT Delhi", ranking: 3 },
            { name: "IIT Madras", ranking: 4 },
            { name: "IIT Kanpur", ranking: 5 },
            { name: "IIT Kharagpur", ranking: 6 },
            { name: "University of Delhi", ranking: 7 },
            { name: "IIT Roorkee", ranking: 8 },
            { name: "IIT Guwahati", ranking: 9 },
            { name: "Jawaharlal Nehru University", ranking: 10 }
        ],
        expenditure: {
            percentOfGDP: 4.1,
            publicExpenditure: 3.1
        },
        students: {
            total: 40000000,
            abroad: 1330000,
            topDestinations: ["USA", "CAN", "GBR", "AUS", "DEU"],
            internationalInIndia: 49000
        },
        research: {
            publications: 180000,
            patents: 45000,
            rdExpenditure: 0.7
        },
        vocationalTraining: {
            itis: 15000,
            trainingCapacity: 2500000
        }
    },

    // ==================== TOURISM ====================
    tourism: {
        overview: {
            rank: 7,
            contribution: 6.8,
            gdpContribution: 194.0,
            employment: 40000000
        },
        visitors: {
            international: 10890000,
            internationalYear: 2023,
            growth: 9.5,
            revenue: 28.7,
            averageStay: 21.1,
            sourceCountries: ["USA", "BGD", "GBR", "AUS", "CAN", "DEU", "FRA", "LKA", "MYS", "RUS"]
        },
        domestic: {
            trips: 2300000000,
            year: 2023
        },
        topDestinations: [
            { name: "Taj Mahal, Agra", type: "Monument", visitors: 8000000 },
            { name: "Goa", type: "Beach/Culture", visitors: 8000000 },
            { name: "Kerala (Backwaters)", type: "Nature", visitors: 5000000 },
            { name: "Rajasthan (Jaipur, Udaipur, Jodhpur)", type: "Heritage" },
            { name: "Himalayas (Shimla, Manali, Leh-Ladakh)", type: "Mountain" },
            { name: "Varanasi", type: "Spiritual", visitors: 6000000 },
            { name: "Mumbai", type: "Urban", visitors: 5000000 },
            { name: "Delhi", type: "Capital/Heritage" },
            { name: "Andaman Islands", type: "Beach" },
            { name: "Rishikesh/Haridwar", type: "Spiritual/Adventure" }
        ],
        types: [
            "Heritage and Cultural Tourism",
            "Spiritual and Religious Tourism",
            "Adventure Tourism",
            "Wildlife and Eco-Tourism",
            "Beach Tourism",
            "Medical Tourism",
            "Wellness and Yoga Tourism",
            "MICE Tourism"
        ],
        medicalTourism: {
            rank: 2,
            visitors: 750000,
            revenue: 9.0,
            specialties: ["Cardiac surgery", "Orthopedic surgery", "Organ transplants", "Oncology", "Ayurveda"]
        },
        visaPolicy: {
            eVisa: {
                available: true,
                countries: 169,
                categories: ["e-Tourist", "e-Business", "e-Medical", "e-Conference"]
            },
            visaOnArrival: { countries: 5 },
            visaFree: { countries: 0 }
        },
        infrastructure: {
            hotels: 150000,
            starHotels: 2500,
            heritageHotels: 100,
            homestays: 30000
        },
        initiatives: ["Incredible India", "Dekho Apna Desh", "Swadesh Darshan", "PRASAD"]
    },

    // ==================== BILATERAL RELATIONS ====================
    bilateralRelations: {

        // ==================== UNITED STATES ====================
        USA: {
            "00_overview": {
                relationshipEmoji: "🤝",
                strengthScore: 85,
                status: "Comprehensive Global Strategic Partnership",
                statusSince: 2023,
                summary: "India-US relations have transformed into a Comprehensive Global Strategic Partnership, driven by shared democratic values, strategic convergence in the Indo-Pacific, deepening defense ties, and growing economic interdependence. The relationship is underpinned by the QUAD framework, iCET technology initiative, and robust people-to-people connections.",
                keyFacts: [
                    "Diplomatic relations established: 1947",
                    "Strategic partnership since: 2005 (Civil Nuclear Deal)",
                    "Elevated to Comprehensive Global Strategic Partnership: 2023",
                    "Trade volume: $191.8 billion (2023)",
                    "Indian diaspora in US: 4.8 million (largest source of H-1B visas)",
                    "Defense trade: $22+ billion (2008-2023)",
                    "Major Defense Partner designation: 2016",
                    "QUAD partners since 2017 revival",
                    "iCET (Initiative on Critical and Emerging Technology): 2023",
                    "2+2 Ministerial Dialogue since 2018"
                ],
                currentAmbassadors: {
                    indiaInUSA: "Vinay Kwatra",
                    usaInIndia: "Eric Garcetti"
                },
                lastUpdated: "2025-01-15",
                sources: ["MEA India", "US State Department", "World Bank", "US Census Bureau", "SIPRI"]
            },

            "01_historical_background": {
                timeline: [
                    {
                        year: "1946",
                        event: "US recognizes Indian independence movement",
                        impact: "Early diplomatic support",
                        sources: ["FRUS"]
                    },
                    {
                        year: "1947",
                        event: "India gains independence; US among first to recognize",
                        impact: "Diplomatic relations established",
                        sources: ["MEA Archives", "State Dept"]
                    },
                    {
                        year: "1949",
                        event: "Nehru visits US; meets Truman",
                        impact: "First Prime Ministerial visit",
                        sources: ["FRUS"]
                    },
                    {
                        year: "1954",
                        event: "US signs military pact with Pakistan (SEATO/CENTO)",
                        impact: "Cold War divergence begins; India tilts non-aligned",
                        sources: ["FRUS", "Historical records"]
                    },
                    {
                        year: "1962",
                        event: "US provides military aid during Sino-Indian War",
                        impact: "Temporary warming of relations",
                        sources: ["JFK Library", "FRUS"]
                    },
                    {
                        year: "1971",
                        event: "Nixon sends USS Enterprise during Indo-Pak war; US tilts to Pakistan",
                        impact: "Lowest point in relations; India signs treaty with USSR",
                        sources: ["Nixon Library", "FRUS"]
                    },
                    {
                        year: "1974",
                        event: "India conducts first nuclear test (Smiling Buddha)",
                        impact: "US sanctions; technology restrictions",
                        sources: ["State Dept", "CIA declassified"]
                    },
                    {
                        year: "1998",
                        event: "India conducts Pokhran-II nuclear tests",
                        impact: "US sanctions under NNPA; later dialogue begins",
                        sources: ["State Dept", "MEA"]
                    },
                    {
                        year: "1999",
                        event: "Kargil War; US supports Indian position",
                        impact: "Turning point; US pressures Pakistan to withdraw",
                        sources: ["Clinton Library", "MEA"]
                    },
                    {
                        year: "2000",
                        event: "Clinton visits India (first in 22 years)",
                        impact: "Relationship reset begins",
                        sources: ["Clinton Library"]
                    },
                    {
                        year: "2005",
                        event: "US-India Civil Nuclear Agreement announced",
                        impact: "Strategic partnership formalized; defense framework signed",
                        sources: ["White House", "MEA"]
                    },
                    {
                        year: "2008",
                        event: "Nuclear deal finalized; NSG waiver obtained",
                        impact: "End of nuclear isolation; full partnership",
                        sources: ["NSG", "Congress records"]
                    },
                    {
                        year: "2010",
                        event: "Obama visits India; supports UNSC permanent seat",
                        impact: "Strategic endorsement",
                        sources: ["White House"]
                    },
                    {
                        year: "2016",
                        event: "India designated Major Defense Partner",
                        impact: "Access to advanced military technology",
                        sources: ["Pentagon", "MEA"]
                    },
                    {
                        year: "2016",
                        event: "LEMOA (Logistics Exchange) signed",
                        impact: "First foundational defense agreement",
                        sources: ["Pentagon"]
                    },
                    {
                        year: "2017",
                        event: "Modi visits Trump; QUAD revived",
                        impact: "Indo-Pacific strategy aligned",
                        sources: ["White House", "MEA"]
                    },
                    {
                        year: "2018",
                        event: "COMCASA signed; first 2+2 dialogue",
                        impact: "Encrypted communications sharing",
                        sources: ["Pentagon", "MEA"]
                    },
                    {
                        year: "2019",
                        event: "India purchases S-400 from Russia",
                        impact: "CAATSA waiver discussions; managed divergence",
                        sources: ["State Dept", "SIPRI"]
                    },
                    {
                        year: "2020",
                        event: "BECA signed; all foundational agreements complete",
                        impact: "Full spectrum defense partnership",
                        sources: ["Pentagon", "MEA"]
                    },
                    {
                        year: "2021",
                        event: "First in-person QUAD summit",
                        impact: "Indo-Pacific architecture solidified",
                        sources: ["White House"]
                    },
                    {
                        year: "2022",
                        event: "India abstains on Ukraine votes at UN",
                        impact: "Managed divergence on Russia policy",
                        sources: ["UN records", "State Dept"]
                    },
                    {
                        year: "2023",
                        event: "PM Modi state visit; iCET launched; GE engine deal",
                        impact: "Comprehensive Global Strategic Partnership declared",
                        sources: ["White House", "MEA", "Joint Statement"]
                    },
                    {
                        year: "2024",
                        event: "MQ-9B SeaGuardian deal finalized; semiconductor partnership",
                        impact: "Defense and technology ties deepen further",
                        sources: ["Pentagon", "Commerce Dept"]
                    }
                ],
                historicalContext: "Relations evolved from Cold War estrangement (US-Pakistan alliance vs India-USSR friendship) to 21st-century strategic convergence driven by China's rise, shared democratic values, and economic complementarity",
                turningPoints: [
                    "1998: Nuclear tests led to initial sanctions but eventual dialogue",
                    "2005: Civil Nuclear Deal transformed relationship",
                    "2016: Major Defense Partner status",
                    "2020: QUAD revival and foundational agreements",
                    "2023: iCET and Comprehensive Global Strategic Partnership"
                ],
                coldWarLegacy: {
                    usPosition: "Allied with Pakistan through SEATO/CENTO",
                    indianPosition: "Non-aligned but tilted toward USSR",
                    impact: "Decades of mistrust overcome post-1991"
                },
                sources: ["MEA India", "US State Department", "CFR", "FRUS", "Presidential libraries"]
            },

            "02_bilateral_ties": {
                diplomaticRelations: {
                    established: "1947-08-15",
                    level: "Embassy",
                    currentStatus: "Comprehensive Global Strategic Partnership",
                    statusEvolution: [
                        { year: 2005, status: "Strategic Partnership" },
                        { year: 2009, status: "Strategic Dialogue" },
                        { year: 2015, status: "Global Strategic Partnership" },
                        { year: 2023, status: "Comprehensive Global Strategic Partnership" }
                    ]
                },
                embassies: {
                    indiaInUSA: {
                        address: "2107 Massachusetts Avenue NW, Washington, D.C. 20008",
                        ambassador: "Vinay Kwatra",
                        since: "2024",
                        website: "https://www.indianembassyusa.gov.in/",
                        established: "1947"
                    },
                    usaInIndia: {
                        address: "Shantipath, Chanakyapuri, New Delhi 110021",
                        ambassador: "Eric Garcetti",
                        since: "2023",
                        website: "https://in.usembassy.gov/",
                        established: "1947"
                    }
                },
                consulates: {
                    indianInUSA: [
                        { city: "New York", address: "3 East 64th Street", type: "Consulate General" },
                        { city: "San Francisco", address: "540 Arguello Blvd", type: "Consulate General" },
                        { city: "Chicago", address: "455 N. Cityfront Plaza Dr", type: "Consulate General" },
                        { city: "Houston", address: "4300 Scotland Street", type: "Consulate General" },
                        { city: "Atlanta", address: "5549 Glenridge Drive", type: "Consulate General" }
                    ],
                    usInIndia: [
                        { city: "Mumbai", address: "C-49 G-Block, Bandra Kurla Complex", type: "Consulate General" },
                        { city: "Kolkata", address: "5/1 Ho Chi Minh Sarani", type: "Consulate General" },
                        { city: "Chennai", address: "220 Anna Salai, Gemini Circle", type: "Consulate General" },
                        { city: "Hyderabad", address: "Paigah Palace, Begumpet", type: "Consulate General" }
                    ]
                },
                stateVisits: [
                    {
                        year: 2023,
                        visitor: "PM Narendra Modi",
                        host: "President Joe Biden",
                        type: "State Visit (full honors)",
                        significance: "Joint Address to Congress; iCET launch; GE engine deal",
                        outcomes: ["Comprehensive Global Strategic Partnership", "iCET roadmap", "Defense deals worth $3B+"]
                    },
                    {
                        year: 2021,
                        visitor: "PM Narendra Modi",
                        host: "President Joe Biden",
                        type: "QUAD Summit (in-person)",
                        significance: "First in-person QUAD summit"
                    },
                    {
                        year: 2019,
                        visitor: "PM Narendra Modi",
                        host: "President Donald Trump",
                        type: "Bilateral + Howdy Modi event",
                        significance: "Largest diaspora event for foreign leader"
                    },
                    {
                        year: 2017,
                        visitor: "PM Narendra Modi",
                        host: "President Donald Trump",
                        type: "Official Visit",
                        significance: "QUAD revival discussions"
                    },
                    {
                        year: 2015,
                        visitor: "PM Narendra Modi",
                        host: "President Barack Obama",
                        type: "Official Visit",
                        significance: "Breakthrough on civil nuclear liability"
                    },
                    {
                        year: 2015,
                        visitor: "President Barack Obama",
                        host: "PM Narendra Modi",
                        type: "Republic Day Chief Guest",
                        significance: "First US President as R-Day Chief Guest; Delhi Declaration"
                    },
                    {
                        year: 2014,
                        visitor: "PM Narendra Modi",
                        host: "President Barack Obama",
                        type: "Official Visit",
                        significance: "New government outreach"
                    },
                    {
                        year: 2010,
                        visitor: "President Barack Obama",
                        host: "PM Manmohan Singh",
                        type: "State Visit",
                        significance: "UNSC permanent seat endorsement"
                    }
                ],
                reciprocalVisitsFrequency: "Multiple annual ministerial and leader interactions",
                sources: ["MEA India", "US Embassy", "White House archives"]
            },

            "03_agreements_treaties": {
                foundationalDefenseAgreements: [
                    {
                        name: "GSOMIA (General Security of Military Information Agreement)",
                        year: 2002,
                        status: "Active",
                        significance: "Enables sharing of classified military information",
                        renewals: "Automatically renewed"
                    },
                    {
                        name: "LEMOA (Logistics Exchange Memorandum of Agreement)",
                        year: 2016,
                        status: "Active",
                        significance: "Allows use of each other's military bases for refueling and resupply",
                        usage: "Used during exercises and operations"
                    },
                    {
                        name: "COMCASA (Communications Compatibility and Security Agreement)",
                        year: 2018,
                        status: "Active",
                        significance: "Enables transfer of encrypted communications equipment",
                        implementation: "Ongoing integration"
                    },
                    {
                        name: "BECA (Basic Exchange and Cooperation Agreement)",
                        year: 2020,
                        status: "Active",
                        significance: "Allows sharing of geospatial intelligence for navigation and targeting",
                        impact: "Enhances precision of Indian weapons systems"
                    }
                ],
                strategicAgreements: [
                    {
                        name: "US-India Civil Nuclear Agreement (123 Agreement)",
                        year: 2008,
                        status: "Active",
                        significance: "Ended India's nuclear isolation; enabled nuclear trade",
                        benefits: ["NSG waiver", "Nuclear technology access", "Strategic partnership foundation"]
                    },
                    {
                        name: "Defense Framework Agreement",
                        year: 2005,
                        status: "Active (renewed 2015, 2025)",
                        significance: "Outlines defense cooperation roadmap"
                    },
                    {
                        name: "Major Defense Partner Designation",
                        year: 2016,
                        status: "Active",
                        significance: "Access to license-free defense technology at par with allies"
                    },
                    {
                        name: "Strategic Trade Authorization-1 (STA-1)",
                        year: 2018,
                        status: "Active",
                        significance: "License exception for exports of controlled dual-use items; only 3rd Asian country"
                    }
                ],
                technologyInitiatives: [
                    {
                        name: "iCET (Initiative on Critical and Emerging Technology)",
                        year: 2023,
                        status: "Active",
                        areas: [
                            "Artificial Intelligence",
                            "Quantum Computing",
                            "Semiconductors",
                            "Space Technology",
                            "Telecommunications (5G/6G)",
                            "Biotechnology",
                            "Advanced Materials"
                        ],
                        significance: "Strategic technology partnership to reduce China dependence",
                        outcomes: ["GE-414 engine tech transfer", "Micron semiconductor plant", "Joint R&D initiatives"]
                    },
                    {
                        name: "Space Cooperation Agreement",
                        year: 2023,
                        status: "Active",
                        projects: ["NISAR satellite", "Artemis Accords", "NASA-ISRO collaboration"]
                    }
                ],
                tradeAgreements: [
                    {
                        name: "Trade Policy Forum (TPF)",
                        year: 2005,
                        status: "Active",
                        frequency: "Annual ministerial meetings",
                        issues: ["Market access", "IPR", "Trade barriers"]
                    },
                    {
                        name: "Bilateral Investment Treaty",
                        status: "Under negotiation since 2009",
                        obstacles: ["Investor-state dispute resolution", "Tax issues"]
                    }
                ],
                mous: [
                    { name: "Homeland Security Dialogue", year: 2011, areas: ["Counter-terrorism", "Cyber security"] },
                    { name: "Health Cooperation", year: 2014, areas: ["Pandemic preparedness", "Medical research"] },
                    { name: "Energy Cooperation", year: 2023, areas: ["Clean energy", "Nuclear", "Critical minerals"] },
                    { name: "Supply Chain Resilience", year: 2022, areas: ["Semiconductors", "Pharma", "Critical tech"] },
                    { name: "Defense Technology and Trade Initiative (DTTI)", year: 2012, areas: ["Joint production", "Technology transfer"] }
                ],
                sources: ["MEA", "Pentagon", "State Dept", "Commerce Dept", "Treaty archives"]
            },

            "04_political_relations": {
                dialogueMechanisms: [
                    {
                        name: "2+2 Ministerial Dialogue",
                        participants: "Foreign & Defense Ministers of both countries",
                        frequency: "Annual",
                        established: 2018,
                        lastMeeting: "2024",
                        significance: "Highest-level regular dialogue mechanism"
                    },
                    {
                        name: "Strategic Commercial Dialogue",
                        participants: "Commerce Ministers",
                        frequency: "Annual",
                        focus: "Trade and economic cooperation"
                    },
                    {
                        name: "QUAD Leaders Summit",
                        participants: "PM/Presidents of India, USA, Japan, Australia",
                        frequency: "Annual + ad hoc",
                        focus: "Indo-Pacific security and cooperation"
                    },
                    {
                        name: "CEO Forum",
                        participants: "Top business leaders",
                        frequency: "Annual",
                        focus: "Business-to-business ties"
                    },
                    {
                        name: "Homeland Security Dialogue",
                        frequency: "Annual",
                        focus: "Counter-terrorism, cyber, border security"
                    },
                    {
                        name: "Cyber Dialogue",
                        frequency: "Annual",
                        focus: "Cybersecurity cooperation"
                    },
                    {
                        name: "Energy Dialogue",
                        frequency: "Annual",
                        focus: "Energy security, clean energy"
                    },
                    {
                        name: "Space Dialogue",
                        frequency: "Annual",
                        focus: "Space cooperation, Artemis Accords"
                    }
                ],
                convergencePoints: [
                    {
                        area: "Free and Open Indo-Pacific",
                        details: "Shared vision; QUAD cooperation; freedom of navigation",
                        strength: "Very strong"
                    },
                    {
                        area: "Counter-terrorism",
                        details: "Intelligence sharing; joint exercises; designations",
                        strength: "Very strong"
                    },
                    {
                        area: "China concerns",
                        details: "Shared concerns about Chinese assertiveness; tacit alignment",
                        strength: "Strong"
                    },
                    {
                        area: "Defense partnership",
                        details: "Arms sales; joint production; exercises",
                        strength: "Very strong"
                    },
                    {
                        area: "Technology cooperation",
                        details: "iCET; semiconductors; AI; quantum",
                        strength: "Growing rapidly"
                    },
                    {
                        area: "Climate and clean energy",
                        details: "Paris Agreement; clean energy investment",
                        strength: "Moderate but improving"
                    },
                    {
                        area: "Democratic values",
                        details: "Shared commitment to democracy",
                        strength: "Strong"
                    }
                ],
                divergencePoints: [
                    {
                        area: "Russia policy",
                        details: "India maintains ties with Russia; arms purchases; Ukraine abstentions",
                        status: "Managed divergence",
                        usPosition: "Concern about S-400, Russia oil purchases",
                        indianPosition: "Strategic autonomy; historical ties; diversification"
                    },
                    {
                        area: "Trade issues",
                        details: "GSP withdrawal; market access barriers; IPR concerns",
                        status: "Under negotiation",
                        usPosition: "Greater market access; reduced tariffs",
                        indianPosition: "Fair trade; development concerns"
                    },
                    {
                        area: "H-1B visas and immigration",
                        details: "Indian tech workers face visa backlogs and restrictions",
                        status: "Ongoing concern",
                        indianPosition: "Skilled labor mobility should match partnership level"
                    },
                    {
                        area: "Iran policy",
                        details: "India's energy ties with Iran",
                        status: "Largely accommodated",
                        note: "India reduced Iran oil imports under US pressure"
                    },
                    {
                        area: "CAATSA and S-400",
                        details: "India purchased S-400 from Russia despite CAATSA threat",
                        status: "Waiver pending/under discussion",
                        usPosition: "Concern about Russian systems integration",
                        indianPosition: "Sovereign defense decision; diversification"
                    }
                ],
                congressionalRelations: {
                    indiaCaucus: "Largest country-specific caucus in US Congress",
                    members: "Over 100 members",
                    activities: ["Legislation support", "Visa reform advocacy", "Trade promotion"]
                },
                bipartisanSupport: "Strong bipartisan support for India relationship in US",
                sources: ["MEA", "State Dept", "Congress records", "Joint statements"]
            },

            "05_economic_trade": {
                tradeOverview: {
                    totalVolume: 191.8,
                    year: 2023,
                    trend: "Growing steadily",
                    rank: "USA is India's largest trade partner",
                    usRank: "India is 9th largest trade partner for US",
                    balanceDirection: "US exports more to India",
                    targetBy2030: "$500 billion"
                },
                exports: {
                    indiaToUSA: {
                        value: 87.4,
                        year: 2023,
                        growth: 8.5,
                        topProducts: [
                            { name: "Pharmaceuticals & medicines", value: 8.2 },
                            { name: "Gems & jewelry (polished diamonds)", value: 7.8 },
                            { name: "Petroleum products (refined)", value: 6.5 },
                            { name: "IT & software services", value: 35.0, type: "Services" },
                            { name: "Textiles & apparel", value: 5.2 },
                            { name: "Organic chemicals", value: 4.1 },
                            { name: "Machinery", value: 3.8 },
                            { name: "Electrical machinery", value: 3.5 },
                            { name: "Shrimp & seafood", value: 2.8 },
                            { name: "Auto components", value: 2.1 }
                        ],
                        servicesExports: 45.0,
                        majorServiceCategories: ["IT/BPO services", "R&D services", "Financial services"]
                    },
                    usaToIndia: {
                        value: 104.4,
                        year: 2023,
                        growth: 6.2,
                        topProducts: [
                            { name: "Petroleum & crude oil", value: 15.2 },
                            { name: "Aircraft & parts", value: 8.5 },
                            { name: "Machinery", value: 6.8 },
                            { name: "Medical instruments", value: 3.2 },
                            { name: "Organic chemicals", value: 2.8 },
                            { name: "Precious stones (rough diamonds)", value: 5.5 },
                            { name: "LNG", value: 4.2 },
                            { name: "Coal", value: 3.8 },
                            { name: "Electrical machinery", value: 2.5 },
                            { name: "Plastics", value: 2.1 }
                        ]
                    }
                },
                tradeBalance: -17.0,
                tradeBalanceNote: "India has deficit with US; unusual among major trade partners",
                servicesTradeBalance: "India surplus (IT/BPO)",
                fdi: {
                    usaInIndia: {
                        cumulative: 56.8,
                        period: "2000-2023",
                        rank: "4th largest source of FDI for India",
                        majorSectors: [
                            "IT & software",
                            "Financial services",
                            "Retail",
                            "Pharmaceuticals",
                            "Manufacturing"
                        ],
                        majorCompanies: [
                            { name: "Amazon", sector: "E-commerce", investment: "10B+" },
                            { name: "Walmart (Flipkart)", sector: "E-commerce", investment: "16B+" },
                            { name: "Google", sector: "Technology", investment: "10B" },
                            { name: "Apple", sector: "Manufacturing", investment: "Expanding" },
                            { name: "Microsoft", sector: "Technology", investment: "3B+" },
                            { name: "Meta", sector: "Technology", investment: "6B" },
                            { name: "Boeing", sector: "Aviation", operations: "Major sourcing" },
                            { name: "Lockheed Martin", sector: "Defense", operations: "Manufacturing" }
                        ]
                    },
                    indiaInUSA: {
                        cumulative: 18.2,
                        majorSectors: ["IT services", "Pharmaceuticals", "Steel", "Automotive"],
                        majorCompanies: [
                            { name: "Tata Consultancy Services", sector: "IT", employees: "50000+" },
                            { name: "Infosys", sector: "IT", employees: "30000+" },
                            { name: "Wipro", sector: "IT", employees: "20000+" },
                            { name: "Sun Pharma", sector: "Pharma" },
                            { name: "Tata Motors (JLR)", sector: "Automotive" },
                            { name: "Mahindra", sector: "Automotive/Tractors" }
                        ]
                    }
                },
                recentDeals: [
                    {
                        name: "Micron Technology semiconductor plant",
                        value: 2.75,
                        location: "Gujarat",
                        year: 2023,
                        jobs: "5000 direct"
                    },
                    {
                        name: "GE Aerospace jet engine manufacturing",
                        value: "Multi-billion",
                        product: "F414 engines for Tejas Mk2",
                        year: 2023,
                        significance: "First transfer of jet engine technology"
                    },
                    {
                        name: "Apple manufacturing expansion",
                        value: "Significant",
                        location: "India",
                        year: 2023,
                        details: "iPhone production doubling"
                    }
                ],
                tradeIssues: {
                    resolved: [
                        "Steel and aluminum tariffs (Section 232) - partially resolved",
                        "Retaliatory tariffs removed (2023)"
                    ],
                    pending: [
                        "GSP (Generalized System of Preferences) restoration",
                        "Market access barriers in agriculture",
                        "IPR concerns in pharmaceuticals",
                        "Digital trade rules",
                        "Data localization requirements"
                    ]
                },
                economicForums: [
                    { name: "US-India CEO Forum", frequency: "Annual", participants: "Top CEOs" },
                    { name: "US-India Business Council (USIBC)", type: "Advocacy", members: "400+ companies" },
                    { name: "Indo-American Chamber of Commerce", type: "Trade promotion" }
                ],
                futureOpportunities: [
                    "Supply chain diversification from China",
                    "Semiconductor manufacturing",
                    "Defense manufacturing",
                    "Clean energy technology",
                    "Pharmaceutical supply chains"
                ],
                sources: ["US Census Bureau", "DGCIS India", "USTR", "BEA", "Company reports"]
            },

            "06_defense_security": {
                overview: {
                    relationship: "Major Defense Partner (highest non-ally status)",
                    significance: "Access to advanced technology at par with allies and partners",
                    trajectory: "Rapidly expanding"
                },
                militaryComparison: {
                    india: {
                        personnel: 1450000,
                        budget: 81.4,
                        budgetPercentGDP: 2.4,
                        ranking: 4,
                        nuclearWarheads: 164
                    },
                    usa: {
                        personnel: 1328000,
                        budget: 877.0,
                        budgetPercentGDP: 3.4,
                        ranking: 1,
                        nuclearWarheads: 5550
                    }
                },
                defenseTradeTotal: {
                    value: 22,
                    period: "2008-2023",
                    trajectory: "From near-zero to $22B+",
                    transformation: "India was 3rd largest arms importer from US (2019-2023)"
                },
                majorArmsDeals: [
                    {
                        item: "MQ-9B SeaGuardian UAVs",
                        quantity: 31,
                        value: 3.99,
                        year: "2024 (approved)",
                        services: "Navy: 15, Army: 8, Air Force: 8",
                        significance: "Armed drones; ISR capability"
                    },
                    {
                        item: "P-8I Poseidon maritime patrol aircraft",
                        quantity: 12,
                        value: 3.2,
                        year: "2009-2023",
                        services: "Navy",
                        significance: "Anti-submarine warfare"
                    },
                    {
                        item: "C-17 Globemaster III transport",
                        quantity: 11,
                        value: 4.1,
                        year: "2010-2019",
                        services: "Air Force",
                        significance: "Strategic airlift"
                    },
                    {
                        item: "C-130J Super Hercules",
                        quantity: 12,
                        value: 2.5,
                        year: "2008-2017",
                        services: "Air Force",
                        significance: "Tactical airlift; special operations"
                    },
                    {
                        item: "Apache AH-64E attack helicopters",
                        quantity: 22,
                        value: 2.5,
                        year: "2015-2020",
                        services: "Air Force",
                        significance: "Attack helicopter fleet"
                    },
                    {
                        item: "CH-47F Chinook heavy-lift helicopters",
                        quantity: 15,
                        value: 1.5,
                        year: "2015-2019",
                        services: "Air Force",
                        significance: "Heavy-lift capability"
                    },
                    {
                        item: "M777 Ultra-Light Howitzers",
                        quantity: 145,
                        value: 0.75,
                        year: "2016-2022",
                        services: "Army",
                        significance: "Mountain warfare artillery"
                    },
                    {
                        item: "AH-64E Apache (Army)",
                        quantity: 6,
                        value: 0.93,
                        year: "2020",
                        services: "Army",
                        significance: "Army's first attack helicopters"
                    },
                    {
                        item: "MH-60R Seahawk helicopters",
                        quantity: 24,
                        value: 2.6,
                        year: "2020-2025",
                        services: "Navy",
                        significance: "Multi-role naval helicopters"
                    },
                    {
                        item: "GE F414 jet engines (and technology transfer)",
                        quantity: "Hundreds",
                        value: "Multi-billion",
                        year: "2023-ongoing",
                        services: "Air Force",
                        significance: "First US jet engine technology transfer; for Tejas Mk2"
                    }
                ],
                jointExercises: [
                    {
                        name: "Malabar",
                        type: "Naval",
                        participants: ["IND", "USA", "JPN", "AUS"],
                        frequency: "Annual",
                        level: "Complex/Advanced",
                        activities: ["Anti-submarine warfare", "Air defense", "Surface warfare"]
                    },
                    {
                        name: "Yudh Abhyas",
                        type: "Army",
                        participants: ["IND", "USA"],
                        frequency: "Annual",
                        level: "Battalion",
                        activities: ["Counter-terrorism", "Mountain warfare", "Peacekeeping"]
                    },
                    {
                        name: "Cope India",
                        type: "Air Force",
                        participants: ["IND", "USA"],
                        frequency: "Biennial",
                        level: "Advanced",
                        activities: ["Air combat", "Large force employment"]
                    },
                    {
                        name: "Tiger Triumph",
                        type: "Tri-Service",
                        participants: ["IND", "USA"],
                        frequency: "Biennial",
                        level: "Amphibious",
                        activities: ["Humanitarian assistance", "Disaster relief"]
                    },
                    {
                        name: "Vajra Prahar",
                        type: "Special Forces",
                        participants: ["IND", "USA"],
                        frequency: "Annual",
                        activities: ["Counter-terrorism", "Special operations"]
                    },
                    {
                        name: "Sangam",
                        type: "Naval (Coast Guard)",
                        participants: ["IND", "USA"],
                        frequency: "Annual",
                        activities: ["Maritime law enforcement"]
                    }
                ],
                defenseCooperationFramework: {
                    dtti: {
                        name: "Defense Technology and Trade Initiative",
                        established: 2012,
                        purpose: "Co-development and co-production of defense systems",
                        projects: [
                            "Air-launched UAV",
                            "Light-weight small arms",
                            "Intelligence, Surveillance, Target Acquisition, Reconnaissance (ISTAR)"
                        ]
                    },
                    industrialSecurity: {
                        name: "Industrial Security Agreement",
                        year: 2019,
                        purpose: "Enable private sector defense cooperation"
                    }
                },
                counterTerrorism: {
                    cooperation: "Very close",
                    mechanisms: [
                        "Homeland Security Dialogue",
                        "Counter-terrorism Joint Working Group",
                        "Intelligence sharing",
                        "Terrorist Financing Working Group"
                    ],
                    jointDesignations: "Pakistan-based terror groups",
                    post2611: "Significantly enhanced cooperation after Mumbai attacks"
                },
                intelligence: {
                    fiveEyesStatus: "Not a member",
                    informationSharing: "Extensive bilateral sharing",
                    areas: ["Counter-terrorism", "China monitoring", "Regional security"]
                },
                cyberCooperation: {
                    dialogue: "Annual Cyber Dialogue",
                    areas: ["Cyber threat information", "Critical infrastructure protection", "Cyber norms"]
                },
                maritimeSecurity: {
                    indianOcean: "Shared interest in IORA",
                    LEMOA: "Enables logistic support during exercises and operations",
                    quadContext: "Maritime domain awareness cooperation"
                },
                sources: ["SIPRI", "Pentagon", "MEA", "Defense Ministry India", "Congressional Research Service"]
            },

            "07_people_to_people": {
                diaspora: {
                    indiansInUSA: {
                        total: 4800000,
                        percentage: 1.4,
                        rank: "2nd largest Asian group; 2nd largest immigrant group overall",
                        indianAmericans: 4200000,
                        indianCitizens: 600000,
                        characteristics: [
                            "Highest median household income ($150,000+)",
                            "Highest educational attainment",
                            "Strong STEM representation",
                            "Growing political influence"
                        ],
                        concentrations: ["California", "Texas", "New Jersey", "New York", "Illinois"],
                        notableIndianAmericans: [
                            "Kamala Harris (VP)",
                            "Sundar Pichai (Google CEO)",
                            "Satya Nadella (Microsoft CEO)",
                            "Indra Nooyi (Former PepsiCo CEO)",
                            "Dr. Vivek Murthy (Surgeon General)"
                        ]
                    },
                    americansInIndia: {
                        total: 70000,
                        purpose: ["Business", "NGOs", "Education", "Retirement"]
                    }
                },
                students: {
                    indiansInUSA: {
                        total: 268923,
                        year: "2023",
                        rank: "Largest source of international students",
                        share: 25,
                        growth: 35,
                        majorFields: ["STEM", "Business", "Computer Science"],
                        economicContribution: 12.0
                    },
                    americansInIndia: {
                        total: 2500,
                        programs: ["Study abroad", "Hindi/Sanskrit", "Buddhist studies"]
                    }
                },
                visas: {
                    h1b: {
                        indianShare: 75,
                        description: "Indians receive ~75% of H-1B visas",
                        backlog: "Multi-year wait for green cards",
                        concerns: "Cap limits; per-country quotas"
                    },
                    studentVisa: {
                        type: "F-1",
                        issuance: "Largest recipient country"
                    },
                    touristVisa: {
                        type: "B-1/B-2",
                        waitTime: "Variable; can be lengthy"
                    }
                },
                tourism: {
                    indiansToUSA: 1500000,
                    americansToIndia: 1200000,
                    purpose: ["Business", "Tourism", "Family visits"],
                    trends: "Growing; constrained by visa processing"
                },
                culturalExchanges: {
                    programs: [
                        "Fulbright Program",
                        "Hubert Humphrey Fellowship",
                        "IVLP (International Visitor Leadership Program)",
                        "Community College Initiative"
                    ],
                    fulbrightNumbers: "Largest Fulbright program globally"
                },
                diasporaEvents: [
                    { name: "Howdy Modi (Houston 2019)", attendance: 50000 },
                    { name: "Namaste Trump (Ahmedabad 2020)", attendance: 100000 }
                ],
                indianAmericanPoliticalInfluence: {
                    usHouseMembers: 5,
                    donations: "Significant political donor community",
                    advocacy: "Active on India-US issues",
                    organizations: ["USINPAC", "HAF", "AAPI organizations"]
                },
                mediaAndCulture: {
                    bollywood: "Growing presence in US",
                    yoga: "Widely practiced; International Yoga Day celebrated",
                    cuisine: "Indian restaurants widespread",
                    festivals: "Diwali celebrated at White House"
                },
                sources: ["US Census Bureau", "IIE Open Doors", "DHS", "Pew Research"]
            },

            "08_connectivity": {
                airLinks: {
                    directFlights: true,
                    weeklyFlights: 100,
                    routes: [
                        {
                            from: "Delhi (DEL)",
                            to: "New York (JFK/EWR)",
                            airlines: ["Air India", "United"],
                            frequency: "Daily multiple",
                            duration: "15-17 hours"
                        },
                        {
                            from: "Delhi (DEL)",
                            to: "San Francisco (SFO)",
                            airlines: ["Air India", "United"],
                            frequency: "Daily",
                            duration: "16 hours"
                        },
                        {
                            from: "Delhi (DEL)",
                            to: "Washington DC (IAD)",
                            airlines: ["Air India", "United"],
                            frequency: "Daily",
                            duration: "15 hours"
                        },
                        {
                            from: "Delhi (DEL)",
                            to: "Chicago (ORD)",
                            airlines: ["Air India", "United", "American"],
                            frequency: "Daily",
                            duration: "15 hours"
                        },
                        {
                            from: "Mumbai (BOM)",
                            to: "New York (JFK/EWR)",
                            airlines: ["Air India", "United"],
                            frequency: "Daily",
                            duration: "16 hours"
                        },
                        {
                            from: "Mumbai (BOM)",
                            to: "San Francisco (SFO)",
                            airlines: ["Air India"],
                            frequency: "Multiple weekly",
                            duration: "17 hours"
                        },
                        {
                            from: "Bangalore (BLR)",
                            to: "San Francisco (SFO)",
                            airlines: ["Air India", "United"],
                            frequency: "Daily",
                            duration: "17 hours"
                        },
                        {
                            from: "Hyderabad (HYD)",
                            to: "Chicago (ORD)",
                            airlines: ["American"],
                            frequency: "Daily",
                            duration: "16 hours"
                        },
                        {
                            from: "Chennai (MAA)",
                            to: "New York (JFK)",
                            airlines: ["Air India"],
                            frequency: "Multiple weekly"
                        }
                    ],
                    majorAirlines: ["Air India", "United Airlines", "American Airlines", "Delta (via hubs)"],
                    openSkiesAgreement: {
                        status: "Under discussion",
                        current: "Bilateral air services agreement"
                    }
                },
                shippingRoutes: {
                    majorPorts: {
                        india: ["JNPT Mumbai", "Chennai", "Mundra"],
                        usa: ["Los Angeles/Long Beach", "New York/New Jersey"]
                    },
                    transitTime: "25-35 days",
                    containerTraffic: "Growing"
                },
                telecomConnectivity: {
                    submarineCables: "Multiple connecting India and US",
                    dataFlows: "Significant; India major IT outsourcing destination"
                },
                sources: ["DGCA", "FAA", "Airline schedules"]
            },

            "09_multilateral_forums": {
                commonMemberships: [
                    {
                        org: "QUAD (Quadrilateral Security Dialogue)",
                        type: "Security/Strategic",
                        members: ["USA", "IND", "JPN", "AUS"],
                        established: "2007 (revived 2017)",
                        focus: ["Indo-Pacific security", "Supply chains", "Technology", "Climate", "Health"],
                        summitLevel: true,
                        significance: "Core platform for Indo-Pacific cooperation"
                    },
                    {
                        org: "G20",
                        type: "Economic",
                        role: "Both leading members",
                        indiaRole: "G20 President 2023"
                    },
                    {
                        org: "United Nations",
                        type: "Global governance",
                        cooperation: "UNSC reform (US supports India's bid)"
                    },
                    {
                        org: "WTO",
                        type: "Trade",
                        note: "Some disagreements on trade rules"
                    },
                    {
                        org: "IMF/World Bank",
                        type: "Financial",
                        cooperation: "Reform discussions"
                    },
                    {
                        org: "IAEA",
                        type: "Nuclear",
                        cooperation: "Civil nuclear cooperation"
                    },
                    {
                        org: "NSG",
                        type: "Nuclear export control",
                        note: "US supports India membership; China blocks"
                    },
                    {
                        org: "MTCR",
                        type: "Missile technology",
                        indiaStatus: "Member since 2016 (US supported)"
                    },
                    {
                        org: "Wassenaar Arrangement",
                        type: "Export control",
                        indiaStatus: "Member since 2017"
                    },
                    {
                        org: "Australia Group",
                        type: "Export control (chem/bio)",
                        indiaStatus: "Member since 2018"
                    },
                    {
                        org: "I2U2 (India-Israel-UAE-USA)",
                        type: "Economic/Technology",
                        established: 2022,
                        focus: ["Food security", "Energy", "Technology"]
                    }
                ],
                votingAlignment: {
                    unGeneralAssembly: 25,
                    note: "Low coincidence rate but increasing on key issues",
                    context: "India maintains independent positions on many issues"
                },
                jointPositions: [
                    "Free and Open Indo-Pacific",
                    "Counter-terrorism",
                    "Afghanistan (Taliban concerns)",
                    "UNSC reform (India permanent seat)"
                ],
                sources: ["UN Voting Records", "Government statements", "Organizational records"]
            },

            "10_sectoral_cooperation": {
                energy: {
                    areas: [
                        {
                            sector: "Civil Nuclear",
                            status: "Active",
                            details: "123 Agreement enables nuclear trade",
                            projects: "Westinghouse nuclear plants (under discussion)"
                        },
                        {
                            sector: "LNG",
                            status: "Growing",
                            details: "US now significant LNG supplier to India"
                        },
                        {
                            sector: "Clean Energy",
                            status: "Active",
                            initiatives: ["US-India Strategic Clean Energy Partnership", "Climate and Clean Energy Agenda 2030"]
                        },
                        {
                            sector: "Solar",
                            status: "Active",
                            cooperation: "Technology sharing; manufacturing"
                        },
                        {
                            sector: "Hydrogen",
                            status: "Emerging",
                            details: "Green hydrogen cooperation"
                        }
                    ]
                },
                climate: {
                    agreements: ["Paris Agreement", "Climate and Clean Energy Agenda 2030"],
                    initiatives: [
                        "US-India Strategic Clean Energy Partnership",
                        "International Solar Alliance (US observer)",
                        "Coalition for Disaster Resilient Infrastructure"
                    ],
                    usSupport: "Climate finance; technology transfer",
                    targets: "India: Net zero by 2070; US: by 2050"
                },
                space: {
                    cooperation: "Extensive",
                    projects: [
                        {
                            name: "NISAR Satellite",
                            partners: "NASA-ISRO",
                            purpose: "Earth observation radar satellite",
                            status: "Launch planned 2024",
                            cost: "Shared"
                        },
                        {
                            name: "Artemis Accords",
                            status: "India signed 2023",
                            purpose: "Lunar exploration cooperation"
                        },
                        {
                            name: "NASA-ISRO Joint Working Group",
                            areas: ["Space exploration", "Satellite data sharing", "Astronaut training"]
                        }
                    ],
                    commercialSpace: "SpaceX and US companies exploring India partnerships"
                },
                technology: {
                    iCET: {
                        name: "Initiative on Critical and Emerging Technologies",
                        launched: 2023,
                        areas: [
                            "Artificial Intelligence",
                            "Quantum Computing",
                            "Semiconductors",
                            "5G/6G Telecommunications",
                            "Biotechnology",
                            "Advanced Materials",
                            "Space Technology"
                        ],
                        outcomes: [
                            "GE jet engine technology transfer",
                            "Micron semiconductor plant",
                            "Quantum research collaboration",
                            "AI dialogue"
                        ],
                        significance: "Strategic technology partnership; reducing China dependence"
                    },
                    semiconductors: {
                        investments: ["Micron ($2.75B Gujarat)", "Applied Materials", "Others exploring"],
                        goal: "Build Indian semiconductor ecosystem"
                    }
                },
                health: {
                    cooperation: "Strong",
                    areas: [
                        "Pandemic preparedness (COVID-19 cooperation)",
                        "Vaccine development",
                        "Medical research collaboration",
                        "Digital health",
                        "Traditional medicine integration"
                    ],
                    pharmaceuticals: "India supplies generic medicines to US",
                    covidCooperation: "Vaccine technology discussions; US support during 2021 wave"
                },
                agriculture: {
                    areas: ["Food security", "Agricultural research", "Climate-resilient crops"],
                    trade: "US exports wheat, almonds, pulses to India"
                },
                education: {
                    cooperation: "Extensive",
                    programs: ["Fulbright", "University partnerships", "Research collaboration"],
                    studentMobility: "India largest source of international students"
                },
                developmentCooperation: {
                    usaid: "USAID India programs (health, energy, governance)",
                    triangular: "Joint development projects in third countries"
                },
                sources: ["White House", "MEA", "Department of Energy", "NASA", "Commerce Dept"]
            },

            "11_influence_third_parties": {
                majorInfluencers: [
                    {
                        country: "CHN",
                        code: "CHN",
                        influence: "Primary driver of India-US convergence",
                        details: [
                            "Shared concerns about Chinese assertiveness",
                            "Border tensions (Galwan 2020) accelerated India-US alignment",
                            "QUAD seen as response to China",
                            "Technology decoupling benefits India-US cooperation"
                        ],
                        impact: "Very High"
                    },
                    {
                        country: "RUS",
                        code: "RUS",
                        influence: "India's historic ties complicate full US alignment",
                        details: [
                            "India-Russia defense dependence",
                            "S-400 purchase and CAATSA concerns",
                            "Ukraine war; India's abstentions",
                            "Oil purchases from Russia"
                        ],
                        impact: "Managed divergence",
                        usApproach: "Accommodating India's strategic autonomy"
                    },
                    {
                        country: "PAK",
                        code: "PAK",
                        influence: "Historic US-Pakistan ties; now India favored",
                        details: [
                            "US tilt to India since 2000s",
                            "Counter-terrorism cooperation targets Pakistan-based groups",
                            "US weapons to Pakistan concerns India"
                        ],
                        impact: "Moderate"
                    },
                    {
                        country: "JPN",
                        code: "JPN",
                        influence: "Fellow QUAD member; enhances trilateral cooperation",
                        details: [
                            "Japan-India relationship supports US goals",
                            "Trilateral coordination on Indo-Pacific"
                        ],
                        impact: "Positive"
                    },
                    {
                        country: "AUS",
                        code: "AUS",
                        influence: "QUAD member; growing India-Australia ties",
                        details: [
                            "Complements US relationship",
                            "AUKUS separate but related architecture"
                        ],
                        impact: "Positive"
                    }
                ],
                triangleDynamics: [
                    {
                        triangle: "USA-India-China",
                        dynamic: "Core strategic triangle in Indo-Pacific",
                        analysis: "US and India aligned against Chinese assertiveness; India maintains separate China dialogue",
                        significance: "Defining dynamic of 21st century"
                    },
                    {
                        triangle: "USA-India-Russia",
                        dynamic: "US-Russia adversarial; India-Russia friendly; India-US growing",
                        analysis: "India balances; US accommodates; managed divergence",
                        significance: "Tests India's multi-alignment strategy"
                    },
                    {
                        triangle: "USA-India-Pakistan",
                        dynamic: "US now clearly tilts toward India",
                        analysis: "Historic shift from US-Pakistan alliance era",
                        significance: "India's preferred outcome"
                    },
                    {
                        triangle: "USA-India-Japan-Australia (QUAD)",
                        dynamic: "Like-minded democracies in Indo-Pacific",
                        analysis: "Emerging security and economic architecture",
                        significance: "Central to regional order"
                    }
                ],
                sources: ["RAND", "Carnegie", "Brookings", "CFR", "Academic analysis"]
            },

            "12_areas_of_concern": {
                disputes: [
                    {
                        issue: "Trade tariffs and market access",
                        status: "Partially resolved",
                        details: "GSP withdrawal (2019); retaliatory tariffs removed (2023)",
                        indianConcerns: ["GSP restoration", "Visa issues"],
                        usConcerns: ["Market access", "IPR protection", "Tariff barriers"]
                    },
                    {
                        issue: "H-1B and immigration issues",
                        status: "Ongoing",
                        details: "Indian workers face visa backlogs; per-country caps",
                        indianPosition: "Skilled labor mobility should match partnership level",
                        usPosition: "Immigration policy domestic matter; some flexibility"
                    }
                ],
                frictionPoints: [
                    {
                        issue: "Russia policy divergence",
                        impact: "Managed",
                        details: "India's S-400 purchase; continued Russia ties; Ukraine abstentions",
                        status: "Accommodated within partnership",
                        indianPosition: "Strategic autonomy; diversification; historic ties",
                        usPosition: "Concern but prioritizing partnership"
                    },
                    {
                        issue: "S-400 and CAATSA",
                        impact: "Significant",
                        status: "Waiver discussions ongoing",
                        details: "India purchased S-400 despite US sanctions law (CAATSA)",
                        resolution: "Likely waiver based on partnership importance"
                    },
                    {
                        issue: "Data localization",
                        impact: "Moderate",
                        details: "India's data localization requirements concern US tech companies",
                        status: "Ongoing discussions"
                    },
                    {
                        issue: "Agricultural trade barriers",
                        impact: "Minor",
                        details: "India restricts imports of US agricultural products",
                        status: "Negotiation"
                    },
                    {
                        issue: "Intellectual property rights",
                        impact: "Moderate",
                        details: "US concerns about pharma patents; India defends generic industry",
                        status: "Ongoing dialogue"
                    }
                ],
                pastDisputes: {
                    resolved: [
                        "Nuclear isolation (resolved by 123 Agreement)",
                        "Technology denial (resolved by STA-1, MTCR membership)",
                        "Defense cooperation restrictions (resolved by foundational agreements)"
                    ]
                },
                riskFactors: [
                    "Major India-China conflict drawing US involvement",
                    "Significant Russia-related sanctions affecting India",
                    "Trade war escalation",
                    "Major terrorist attack requiring coordinated response"
                ],
                sources: ["USTR", "MEA", "State Dept", "News analysis"]
            },

            "13_future_outlook": {
                shortTerm: {
                    period: "1-2 years (2025-2026)",
                    scenarios: [
                        {
                            scenario: "Continued deepening of iCET and defense ties",
                            probability: "High (80%)",
                            indicators: ["GE engine deal progress", "More defense orders", "iCET implementation"]
                        },
                        {
                            scenario: "Trade agreement progress",
                            probability: "Moderate (40%)",
                            indicators: ["Mini-trade deal", "BIT progress"]
                        },
                        {
                            scenario: "CAATSA waiver for S-400",
                            probability: "High (75%)",
                            indicators: ["Congressional action", "Executive decision"]
                        }
                    ],
                    keyEvents: ["US elections", "QUAD summits", "2+2 dialogue"]
                },
                mediumTerm: {
                    period: "3-5 years (2026-2030)",
                    scenarios: [
                        {
                            scenario: "India becomes top-3 defense partner",
                            probability: "High (70%)",
                            indicators: ["$50B+ defense trade", "Co-production expansion"]
                        },
                        {
                            scenario: "Trade crosses $250 billion",
                            probability: "Moderate-High (65%)",
                            indicators: ["Trade growth trajectory", "Investment flows"]
                        },
                        {
                            scenario: "Semiconductor manufacturing ecosystem in India",
                            probability: "Moderate (50%)",
                            indicators: ["Micron progress", "Additional investments"]
                        }
                    ]
                },
                longTerm: {
                    period: "10+ years (2035+)",
                    scenarios: [
                        {
                            scenario: "India-US alliance formalization (NATO-like)",
                            probability: "Low (15%)",
                            obstacles: ["India's strategic autonomy preference", "Non-alignment legacy"]
                        },
                        {
                            scenario: "Comprehensive economic integration",
                            probability: "Moderate (45%)",
                            indicators: ["FTA", "Supply chain integration", "$500B+ trade"]
                        },
                        {
                            scenario: "Joint technology leadership in critical sectors",
                            probability: "Moderate-High (55%)",
                            indicators: ["iCET progress", "Co-development", "Joint manufacturing"]
                        }
                    ]
                },
                wildcards: [
                    "Taiwan contingency involving US and implications for India",
                    "Major India-China military conflict",
                    "Significant shift in US domestic politics affecting foreign policy",
                    "Global economic crisis affecting trade",
                    "Breakthrough in India-Pakistan relations"
                ],
                expertForecasts: [
                    { source: "Brookings", forecast: "Continued strategic convergence; trade to exceed $300B by 2030" },
                    { source: "RAND", forecast: "Defense relationship will be alliance-like without formal treaty" },
                    { source: "Carnegie", forecast: "Technology partnership will define next decade" }
                ],
                sources: ["Think tanks", "Government planning documents", "Academic forecasts"]
            },

            "14_imaginary_peace_scenario": {
                note: "Already strong peaceful relations; focus on deeper integration",
                vision: "Full spectrum alliance-level partnership by 2035",
                currentReality: "Already one of the most important bilateral relationships for both countries",
                deepeningScenario: {
                    description: "Comprehensive Free Trade Agreement and quasi-alliance",
                    timeline: "2025-2035",
                    milestones: [
                        { year: 2025, milestone: "CAATSA waiver; expanded defense co-production" },
                        { year: 2027, milestone: "Free Trade Agreement signed" },
                        { year: 2028, milestone: "Joint defense manufacturing hub operational" },
                        { year: 2030, milestone: "Trade exceeds $350 billion" },
                        { year: 2035, milestone: "Full technology partnership; alliance-level coordination" }
                    ]
                },
                quantifiedBenefits: {
                    economic: [
                        "FTA could add $500 billion to bilateral trade",
                        "Joint manufacturing: $100B+ additional investment",
                        "Technology transfer: Accelerated Indian development"
                    ],
                    strategic: [
                        "Enhanced deterrence against China",
                        "Stable Indo-Pacific order",
                        "Counter-terrorism effectiveness"
                    ],
                    social: [
                        "Double people movement with visa reforms",
                        "Enhanced educational exchanges",
                        "Diaspora integration"
                    ],
                    environmental: [
                        "Joint climate action accelerates net-zero",
                        "Clean energy technology sharing",
                        "Environmental cooperation"
                    ]
                },
                inspirationalQuote: "India and America are not just natural partners, they are indispensable partners in the 21st century - Joint Statement 2023",
                sources: ["Author analysis", "Joint statements", "Think tank reports"]
            },

            "15_external_interventions": {
                applicable: false,
                note: "Not applicable to US-India bilateral relations as both are major powers",
                historicalInterference: {
                    coldWar: {
                        period: "1947-1991",
                        usActions: [
                            "Alliance with Pakistan (1954 onwards)",
                            "Weapons supplies to Pakistan",
                            "USS Enterprise deployment (1971)"
                        ],
                        impact: "Pushed India toward USSR",
                        resolution: "Overcome post-Cold War"
                    }
                },
                currentThirdPartyImpact: {
                    china: "Accelerates India-US convergence",
                    russia: "Complicates but doesn't derail relationship"
                },
                sources: ["Historical archives", "FRUS"]
            },

            visualizations: {
                timeline: {
                    type: "d3-timeline",
                    dataPath: "01_historical_background.timeline",
                    config: { showImpact: true, colorByType: true }
                },
                tradeFlow: {
                    type: "sankey",
                    dataPath: "05_economic_trade",
                    config: { showProducts: true, animateFlow: true }
                },
                defenseComparison: {
                    type: "radar",
                    dataPath: "06_defense_security.militaryComparison",
                    config: { metrics: ["personnel", "budget", "ranking"] }
                },
                relationshipStrength: {
                    type: "gauge",
                    value: 85,
                    config: { ranges: [{ min: 0, max: 40, color: "red" }, { min: 40, max: 70, color: "yellow" }, { min: 70, max: 100, color: "green" }] }
                },
                exercisesMap: {
                    type: "world-map",
                    dataPath: "06_defense_security.jointExercises",
                    config: { showLocations: true }
                },
                diasporaMap: {
                    type: "us-choropleth",
                    dataPath: "07_people_to_people.diaspora.indiansInUSA.concentrations"
                }
            }
        },

        // ==================== PAKISTAN ====================
        PAK: {
            "00_overview": {
                relationshipEmoji: "⚔️",
                strengthScore: 15,
                status: "Hostile/Adversarial",
                summary: "India-Pakistan relations remain deeply adversarial, fundamentally shaped by the trauma of the 1947 Partition, four wars, the intractable Kashmir dispute, and ongoing cross-border terrorism. Diplomatic ties are downgraded, trade is near-zero, and both nations are nuclear-armed adversaries.",
                keyFacts: [
                    "Wars fought: 4 (1947-48, 1965, 1971, 1999 Kargil)",
                    "Nuclear-armed neighbors since 1998",
                    "Trade: Near zero (suspended since 2019)",
                    "Core dispute: Kashmir (claimed by both; LOC divides)",
                    "High Commissioners withdrawn (2019)",
                    "No bilateral dialogue since 2015",
                    "Ceasefire violations: Thousands annually until 2021 agreement",
                    "Terrorist attacks: Mumbai 26/11 (2008), Pulwama (2019)",
                    "Water sharing: Indus Waters Treaty (1960) under strain"
                ],
                currentAmbassadors: {
                    indiaInPakistan: "Vacant (High Commission downgraded)",
                    pakistanInIndia: "Vacant (High Commission downgraded)"
                },
                lastUpdated: "2025-01-15",
                sources: ["MEA India", "MOFA Pakistan", "UN", "SIPRI"]
            },

            "01_historical_background": {
                timeline: [
                    {
                        year: "1947-08-14/15",
                        event: "Partition of British India; Pakistan and India created",
                        impact: "10-20 million displaced; 200,000-2,000,000 deaths; fundamental trauma",
                        sources: ["Historical records", "Partition archives"]
                    },
                    {
                        year: "1947-10",
                        event: "First Kashmir War begins",
                        impact: "Kashmir divided; Line of Control established; dispute begins",
                        sources: ["UN records", "Historical archives"]
                    },
                    {
                        year: "1948-01-01",
                        event: "UN ceasefire in Kashmir",
                        impact: "Line of Control established; UN resolutions (unimplemented)",
                        sources: ["UN archives"]
                    },
                    {
                        year: "1960",
                        event: "Indus Waters Treaty signed",
                        impact: "World Bank-mediated water sharing; survived all conflicts",
                        sources: ["World Bank", "Treaty records"]
                    },
                    {
                        year: "1965-09",
                        event: "Second Indo-Pak War",
                        impact: "Stalemate; Tashkent Declaration (1966)",
                        sources: ["Military archives"]
                    },
                    {
                        year: "1971-12",
                        event: "Bangladesh Liberation War; Third Indo-Pak War",
                        impact: "East Pakistan becomes Bangladesh; 93,000 Pakistani POWs; decisive Indian victory",
                        sources: ["Military archives", "UN records"]
                    },
                    {
                        year: "1972-07-02",
                        event: "Simla Agreement signed",
                        impact: "Bilateral resolution framework; Line of Control recognized",
                        sources: ["Treaty records", "MEA"]
                    },
                    {
                        year: "1974",
                        event: "India's first nuclear test (Smiling Buddha)",
                        impact: "Nuclear competition begins",
                        sources: ["Historical records"]
                    },
                    {
                        year: "1984",
                        event: "Siachen conflict begins",
                        impact: "India occupies Siachen Glacier; world's highest battlefield",
                        sources: ["Military records"]
                    },
                    {
                        year: "1987",
                        event: "Brasstacks crisis",
                        impact: "Near-war; military exercises trigger tensions",
                        sources: ["Military analysis"]
                    },
                    {
                        year: "1989",
                        event: "Kashmir insurgency begins",
                        impact: "Cross-border support for militants; ongoing conflict",
                        sources: ["Security analysis"]
                    },
                    {
                        year: "1998-05",
                        event: "Both countries conduct nuclear tests",
                        impact: "Overt nuclear rivalry; MAD doctrine",
                        sources: ["SIPRI", "Historical records"]
                    },
                    {
                        year: "1999-02",
                        event: "Lahore Declaration; Bus diplomacy",
                        impact: "Brief peace hope; Vajpayee visits Lahore",
                        sources: ["MEA records"]
                    },
                    {
                        year: "1999-05 to 07",
                        event: "Kargil War",
                        impact: "Pakistan-backed infiltration; Indian victory; near-nuclear escalation",
                        sources: ["Military records", "Kargil Review Committee"]
                    },
                    {
                        year: "2001-12-13",
                        event: "Indian Parliament attack",
                        impact: "Military standoff (Operation Parakram); near-war",
                        sources: ["Security records"]
                    },
                    {
                        year: "2004",
                        event: "Composite Dialogue Process begins",
                        impact: "Comprehensive peace process; multiple issues",
                        sources: ["MEA records"]
                    },
                    {
                        year: "2008-11-26",
                        event: "Mumbai 26/11 terrorist attacks",
                        impact: "166 killed (including foreigners); dialogue suspended; Lashkar-e-Taiba responsible",
                        sources: ["Court records", "Investigation reports"]
                    },
                    {
                        year: "2015",
                        event: "Modi-Sharif meeting; NSA dialogue",
                        impact: "Brief engagement; failed due to preconditions",
                        sources: ["MEA records"]
                    },
                    {
                        year: "2016-09",
                        event: "Uri attack; Indian 'surgical strikes'",
                        impact: "India claims strikes across LOC; escalation",
                        sources: ["Indian government", "Military statements"]
                    },
                    {
                        year: "2019-02-14",
                        event: "Pulwama terrorist attack",
                        impact: "40 CRPF personnel killed; Jaish-e-Mohammed claims responsibility",
                        sources: ["MHA India", "Investigation"]
                    },
                    {
                        year: "2019-02-26",
                        event: "Balakot airstrikes by India",
                        impact: "First IAF strikes inside Pakistan since 1971; aerial dogfight next day",
                        sources: ["IAF", "Government statements"]
                    },
                    {
                        year: "2019-08-05",
                        event: "Article 370 revoked; J&K reorganized",
                        impact: "Pakistan downgrades ties; trade suspended; High Commissioners recalled",
                        sources: ["MEA", "MOFA Pakistan"]
                    },
                    {
                        year: "2021-02",
                        event: "Ceasefire agreement renewed",
                        impact: "LOC violations reduced; backchannel diplomacy",
                        sources: ["DGMO statements"]
                    },
                    {
                        year: "2023",
                        event: "No bilateral meetings; SCO minimal interaction",
                        impact: "Relationship frozen",
                        sources: ["News reports"]
                    }
                ],
                historicalContext: "The relationship is fundamentally defined by the trauma of Partition, the unresolved Kashmir dispute, military rivalry, nuclear deterrence, and terrorism. Four wars and countless crises have prevented normalization.",
                turningPoints: [
                    "1947: Partition creates mutual distrust and Kashmir dispute",
                    "1971: Bangladesh creation; decisive Indian victory; Pakistani humiliation",
                    "1998: Nuclear tests create MAD situation",
                    "2008: Mumbai attacks end meaningful dialogue",
                    "2019: Pulwama/Balakot brings countries to brink"
                ],
                sources: ["MEA", "MOFA Pakistan", "Historical archives", "UN records"]
            },

            "02_bilateral_ties": {
                diplomaticRelations: {
                    established: "1947-08",
                    level: "High Commission (Commonwealth)",
                    currentStatus: "Downgraded; High Commissioners withdrawn since 2019",
                    staffLevels: "Reduced to 50% of normal strength"
                },
                highCommissions: {
                    indiaInPakistan: {
                        address: "Diplomatic Enclave, Islamabad",
                        highCommissioner: "Vacant since 2019",
                        status: "Functioning at reduced capacity",
                        consulates: "None (closed)"
                    },
                    pakistanInIndia: {
                        address: "2/50-G Shantipath, Chanakyapuri, New Delhi",
                        highCommissioner: "Vacant since 2019",
                        status: "Functioning at reduced capacity",
                        consulates: "None (Mumbai consulate closed)"
                    }
                },
                visaRegime: {
                    indiansToPakistan: "Highly restricted; city-specific; requires reporting to police",
                    pakistanisToIndia: "Highly restricted; city-specific; medical/pilgrimage exceptions",
                    groups: "Group visas for pilgrims only"
                },
                sources: ["MEA", "MOFA Pakistan"]
            },

            "03_agreements_treaties": {
                majorTreaties: [
                    {
                        name: "Indus Waters Treaty",
                        year: 1960,
                        status: "Active but strained",
                        mediator: "World Bank",
                        significance: "Water sharing of Indus system rivers",
                        currentIssues: ["Dam construction disputes", "India reviewed in 2016 post-Uri"],
                        allocation: {
                            india: "Eastern rivers (Sutlej, Beas, Ravi)",
                            pakistan: "Western rivers (Indus, Jhelum, Chenab)"
                        }
                    },
                    {
                        name: "Simla Agreement",
                        year: 1972,
                        status: "Active (disputed interpretation)",
                        significance: "Bilateral resolution of disputes; LOC recognized",
                        indianInterpretation: "Kashmir to be resolved bilaterally; no third-party",
                        pakistanInterpretation: "Does not preclude UN role"
                    },
                    {
                        name: "Lahore Declaration",
                        year: 1999,
                        status: "Active (in principle)",
                        significance: "Nuclear risk reduction; dialogue commitment",
                        undermined: "By Kargil War months later"
                    }
                ],
                cbms: {
                    active: [
                        { name: "Ceasefire Agreement (LOC)", year: 2021, status: "Holding" },
                        { name: "Nuclear test notification", year: 1999, status: "Active" },
                        { name: "Ballistic missile test notification", year: 2005, status: "Active" },
                        { name: "Hotlines (DGMO, FS)", status: "Active" }
                    ],
                    suspended: [
                        { name: "Trade (MFN)", status: "Suspended by Pakistan 2019" },
                        { name: "Bus services (Delhi-Lahore, Poonch-Rawalakot)", status: "Suspended" },
                        { name: "Train services (Samjhauta Express)", status: "Suspended" }
                    ]
                },
                dialogueProcesses: [
                    {
                        name: "Composite Dialogue Process",
                        period: "2004-2008",
                        status: "Suspended since Mumbai attacks",
                        agenda: ["Kashmir", "Siachen", "Sir Creek", "Terrorism", "Trade", "People-to-people"]
                    }
                ],
                sources: ["World Bank", "MEA", "Treaty archives"]
            },

            "04_political_relations": {
                dialogueMechanisms: [
                    {
                        name: "Composite Dialogue",
                        status: "Suspended since 2008",
                        lastMeeting: "2008"
                    },
                    {
                        name: "Foreign Secretary talks",
                        status: "Suspended",
                        lastMeeting: "2015"
                    },
                    {
                        name: "NSA-level talks",
                        status: "Suspended",
                        lastMeeting: "2015 (Bangkok)"
                    },
                    {
                        name: "DGMO hotline",
                        status: "Active",
                        purpose: "Ceasefire coordination"
                    }
                ],
                coreDivergences: [
                    {
                        issue: "Kashmir sovereignty",
                        indianPosition: "Integral part of India; bilateral issue under Simla Agreement",
                        pakistaniPosition: "Disputed territory; UN resolutions apply; self-determination",
                        resolution: "Irreconcilable"
                    },
                    {
                        issue: "Cross-border terrorism",
                        indianPosition: "Pakistan state supports terror groups; must act against them",
                        pakistaniPosition: "Non-state actors; India sponsors terrorism in Balochistan",
                        evidence: "UN designations of Pakistan-based groups"
                    },
                    {
                        issue: "Water sharing",
                        indianPosition: "Treaty valid but India can use full allocation",
                        pakistaniPosition: "India 'stealing' water; dams threaten Pakistan",
                        status: "Treaty holds but strain increasing"
                    }
                ],
                preconditionsForDialogue: {
                    india: "Pakistan must act against terror groups",
                    pakistan: "Kashmir must be on agenda; Article 370 reversal"
                },
                multilateralInteractions: {
                    un: "Hostile; Kashmir raised by Pakistan annually",
                    saarc: "Paralyzed due to tensions; India blocks Pakistan participation",
                    sco: "Minimal bilateral interaction"
                },
                sources: ["MEA", "MOFA Pakistan", "Think tanks"]
            },

            "05_economic_trade": {
                currentTrade: {
                    total: 0.5,
                    year: 2023,
                    trend: "Near zero",
                    note: "Trade suspended by Pakistan after Article 370 (2019)"
                },
                historicalTrade: {
                    peak: 2.5,
                    peakYear: 2014,
                    composition: {
                        indiaExports: ["Cotton", "Chemicals", "Vegetables", "Sugar"],
                        pakistanExports: ["Fruits", "Cement", "Leather"]
                    }
                },
                tradePotential: {
                    estimate: 37.0,
                    source: "World Bank study",
                    conditions: "If relations normalized; open borders"
                },
                tradeBarriers: [
                    "Pakistan withdrew MFN status (2019)",
                    "India raised tariffs to 200%",
                    "Land routes closed",
                    "Direct trade banned by Pakistan"
                ],
                informalTrade: {
                    estimate: 4.0,
                    routes: ["Via UAE", "Via Afghanistan", "Via Singapore"],
                    products: ["Textiles", "Spices", "Machinery"]
                },
                investmentLinks: "Virtually none",
                economicIntegration: "Among lowest of any neighboring pairs globally",
                sources: ["World Bank", "UN Comtrade", "Economic surveys"]
            },

            "06_defense_security": {
                militaryComparison: {
                    india: {
                        personnel: 1450000,
                        reserves: 1155000,
                        budget: 81.4,
                        budgetPercentGDP: 2.4,
                        ranking: 4,
                        nuclearWarheads: 164,
                        tanks: 4614,
                        aircraft: 2182,
                        navalVessels: 150
                    },
                    pakistan: {
                        personnel: 654000,
                        reserves: 550000,
                        budget: 10.3,
                        budgetPercentGDP: 4.0,
                        ranking: 9,
                        nuclearWarheads: 170,
                        tanks: 2680,
                        aircraft: 1400,
                        navalVessels: 100
                    },
                    ratio: {
                        personnel: "2.2:1 (India)",
                        budget: "8:1 (India)",
                        nuclear: "Roughly equal"
                    }
                },
                warHistory: [
                    {
                        name: "First Kashmir War",
                        year: "1947-48",
                        result: "Ceasefire; Kashmir divided at LOC",
                        casualties: { india: 1500, pakistan: 6000 }
                    },
                    {
                        name: "Second Indo-Pak War",
                        year: "1965",
                        result: "Stalemate; Tashkent Declaration",
                        casualties: { india: 3000, pakistan: 3800 }
                    },
                    {
                        name: "Bangladesh Liberation War",
                        year: "1971",
                        result: "Decisive Indian victory; Bangladesh created; 93,000 POWs",
                        casualties: { india: 3843, pakistan: "9000+ (plus POWs)" }
                    },
                    {
                        name: "Kargil War",
                        year: "1999",
                        result: "Indian victory; Pakistan withdraws",
                        casualties: { india: 527, pakistan: "450-4000 (disputed)" }
                    }
                ],
                nuclearDimension: {
                    bothNuclear: true,
                    indianDoctrine: "No First Use (NFU); credible minimum deterrence",
                    pakistanDoctrine: "First use option retained; 'full spectrum deterrence'",
                    tacticalWeapons: "Pakistan developing; India opposes",
                    escalationRisk: "High during crises",
                    nearMisses: ["Kargil 1999", "2001-02 standoff", "2019 Balakot"]
                },
                terroristAttacks: {
                    major: [
                        {
                            name: "Mumbai 26/11",
                            year: 2008,
                            casualties: 166,
                            perpetrator: "Lashkar-e-Taiba (Pakistan-based)",
                            response: "Dialogue suspended; international pressure on Pakistan"
                        },
                        {
                            name: "Indian Parliament attack",
                            year: 2001,
                            casualties: 14,
                            perpetrator: "Lashkar-e-Taiba, Jaish-e-Mohammed",
                            response: "Operation Parakram mobilization"
                        },
                        {
                            name: "Pulwama attack",
                            year: 2019,
                            casualties: 40,
                            perpetrator: "Jaish-e-Mohammed",
                            response: "Balakot airstrikes"
                        },
                        {
                            name: "Uri attack",
                            year: 2016,
                            casualties: 19,
                            perpetrator: "Jaish-e-Mohammed",
                            response: "'Surgical strikes' claimed by India"
                        },
                        {
                            name: "Pathankot attack",
                            year: 2016,
                            casualties: 7,
                            perpetrator: "Jaish-e-Mohammed",
                            response: "Investigation team visit; dialogue ended"
                        }
                    ],
                    unDesignatedGroups: [
                        "Lashkar-e-Taiba",
                        "Jaish-e-Mohammed",
                        "Hizbul Mujahideen",
                        "Harkat-ul-Mujahideen"
                    ]
                },
                ongoingFlashpoints: [
                    {
                        name: "Line of Control (Kashmir)",
                        status: "Ceasefire since Feb 2021; violations drastically reduced",
                        history: "Thousands of violations annually before 2021"
                    },
                    {
                        name: "Siachen Glacier",
                        status: "Militarized since 1984; world's highest battlefield",
                        conditions: "Extreme; more deaths from weather than combat"
                    },
                    {
                        name: "Sir Creek",
                        status: "Maritime boundary unresolved",
                        issue: "Affects EEZ; oil/gas exploration"
                    }
                ],
                militaryPosture: {
                    india: "Defensive; Cold Start doctrine (rapid mobilization)",
                    pakistan: "Forward defense; reliance on nuclear deterrent"
                },
                sources: ["SIPRI", "MHA India", "Military analysis", "IISS"]
            },

            "07_people_to_people": {
                visaRegime: {
                    indiansToPakistan: {
                        type: "Highly restricted",
                        requirements: ["City-specific visa", "Police reporting", "Invitation letter"],
                        exemptions: ["Pilgrimage (limited)", "Medical (limited)"]
                    },
                    pakistanisToIndia: {
                        type: "Highly restricted",
                        requirements: ["City-specific visa", "Police reporting"],
                        exemptions: ["Pilgrimage", "Medical"]
                    }
                },
                religiousPilgrimage: {
                    kartarpurCorridor: {
                        opened: "2019-11-09",
                        purpose: "Sikh pilgrimage to Gurdwara Darbar Sahib",
                        significance: "Rare positive development; visa-free for Indians",
                        status: "Operational",
                        dailyCapacity: 5000
                    },
                    otherPilgrimages: [
                        "Hindu pilgrims to Pakistan (Hinglaj, Katas Raj)",
                        "Muslim pilgrims to India (Ajmer Sharif)"
                    ]
                },
                tourism: {
                    indiansToPakistan: 1000,
                    pakistanisToIndia: 2000,
                    note: "Extremely restricted; primarily pilgrimage"
                },
                diasporaRelations: {
                    dividedFamilies: "Thousands separated since Partition",
                    familyVisits: "Extremely difficult; visa delays of years"
                },
                culturalTies: {
                    sharedHeritage: ["Language (Urdu/Hindi)", "Music", "Cuisine", "Literature", "Film"],
                    bollywoodInPakistan: "Banned since 2019",
                    cricket: "Bilateral cricket suspended; only ICC events",
                    trackII: "Minimal; some academic/think tank exchanges"
                },
                mediaExchanges: "Extremely limited; journalists rarely get visas",
                sources: ["Home Ministry", "Pilgrimage boards", "News reports"]
            },

            "08_connectivity": {
                airLinks: {
                    directFlights: false,
                    status: "All flights suspended since February 2019",
                    lastOperation: "2019-02 (after Pulwama/Balakot)",
                    history: "PIA and Air India operated Delhi-Lahore, Mumbai-Karachi"
                },
                landLinks: {
                    wagahAttari: {
                        status: "Open for limited trade/travel",
                        ceremony: "Flag lowering ceremony (tourist attraction)",
                        trade: "Minimal; mostly via third country"
                    },
                    otherCrossings: "Closed (Kashmir crossings suspended)"
                },
                railLinks: {
                    samjhautaExpress: {
                        route: "Delhi-Attari-Lahore",
                        status: "Suspended since 2019"
                    },
                    tharExpress: {
                        route: "Jodhpur-Munabao-Karachi",
                        status: "Suspended since 2019"
                    }
                },
                busServices: {
                    delhiLahore: "Suspended since 2019",
                    srinagarMuzaffarabad: "Suspended since 2019",
                    poonchRawalakot: "Suspended since 2019"
                },
                overflightRights: {
                    pakistan: "Closed to Indian airlines since 2019",
                    impact: "Indian flights to Europe/Middle East take longer routes"
                },
                telecom: "Limited connectivity; phone calls possible but expensive",
                sources: ["DGCA", "Railways", "Government announcements"]
            },

            "09_multilateral_forums": {
                commonMemberships: [
                    {
                        org: "United Nations",
                        type: "Global",
                        interaction: "Hostile; Kashmir raised by Pakistan; India responds",
                        kashmirResolutions: "Unimplemented; India rejects applicability"
                    },
                    {
                        org: "SAARC",
                        type: "Regional",
                        status: "Paralyzed since 2016",
                        note: "India boycotts summits in Pakistan; blocks progress"
                    },
                    {
                        org: "SCO",
                        type: "Security",
                        status: "Both members since 2017",
                        interaction: "Minimal bilateral; attend same summits"
                    },
                    {
                        org: "Commonwealth",
                        type: "General",
                        interaction: "Minimal"
                    },
                    {
                        org: "OIC",
                        type: "Islamic",
                        pakistanMember: true,
                        indiaStatus: "Observer (Kashmir resolutions hostile to India)",
                        note: "India invited as guest (2019) over Pakistan objection"
                    }
                ],
                votingAlignment: {
                    unGeneralAssembly: 15,
                    note: "Very low; often opposite positions"
                },
                jointPositions: "Virtually none",
                sources: ["UN", "SAARC", "SCO", "OIC"]
            },

            "10_sectoral_cooperation": {
                note: "Minimal to no cooperation due to bilateral tensions",
                environmentalCooperation: {
                    status: "None formal",
                    sharedChallenges: ["Air pollution", "Water management", "Glacial melt"],
                    potential: "High if relations improve"
                },
                disasterResponse: {
                    status: "Ad hoc",
                    history: "India offered aid during 2005 Pakistan earthquake; 2010 floods"
                },
                healthCooperation: "None",
                educationalExchanges: "Near zero",
                scientificCooperation: "None",
                sources: ["Government reports"]
            },

            "11_influence_third_parties": {
                majorInfluencers: [
                    {
                        country: "China",
                        code: "CHN",
                        influence: "Pakistan's 'all-weather ally'",
                        details: [
                            "CPEC: $62 billion investment",
                            "Defense supplier (JF-17, missiles)",
                            "Shields Pakistan at UN Security Council",
                            "Blocks India at NSG, UNSC designations"
                        ],
                        impact: "High - enables Pakistan's India policy"
                    },
                    {
                        country: "United States",
                        code: "USA",
                        influence: "Historic Pakistan ally; now tilts to India",
                        details: [
                            "Ally during Cold War",
                            "War on Terror partnership (2001-2021)",
                            "Now pressures Pakistan on terrorism",
                            "India clearly preferred partner"
                        ],
                        impact: "Moderate - reduced leverage post-Afghanistan withdrawal"
                    },
                    {
                        country: "Saudi Arabia",
                        code: "SAU",
                        influence: "Major Pakistan supporter",
                        details: [
                            "Financial bailouts for Pakistan
