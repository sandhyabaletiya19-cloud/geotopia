/**

GeoVerse Encyclopedia - Country Data File 7
Contains: North Africa (7) + West Africa (16) = 23 Countries
Version: 2.0 - Clean Data
*/
const CountriesData7 = [
// 1. ALGERIA
{
id: "DZA",
name: "Algeria",
officialName: "People's Democratic Republic of Algeria",
flag: "https://flagcdn.com/w320/dz.png",
    images: {
        hero: "https://images.unsplash.com/photo-1591634296939-5b7c0e2d5b5e?w=1920&q=80",
        landscape: "https://images.unsplash.com/photo-1598946114409-90e bharasunsplash?w=1920&q=80",
        city: "https://images.unsplash.com/photo-1609057562447-c28e792e9e1f?w=1920&q=80"
    },

    basic: {
        capital: "Algiers",
        continent: "Africa",
        region: "North Africa",
        subregion: "Northern Africa",
        population: 45606480,
        area: 2381741,
        populationDensity: 19,
        independence: "1962",
        callingCode: "+213",
        tld: ".dz",
        drivingSide: "Right",
        electricity: "230V, 50Hz"
    },

    location: {
        coordinates: [28.0339, 1.6596],
        timezone: "UTC+1 (CET)",
        neighbors: ["Tunisia", "Libya", "Niger", "Mali", "Mauritania", "Western Sahara", "Morocco"],
        borders: 6734,
        hemispheres: ["Northern", "Eastern"]
    },

    political: {
        government: "Unitary Semi-Presidential Republic",
        headOfState: "President Abdelmadjid Tebboune",
        headOfGovernment: "Prime Minister Nadir Larbaoui",
        legislature: "Parliament (Council of the Nation & People's National Assembly)",
        legalSystem: "Mixed (Civil Law and Islamic Law)",
        states: 58,
        provinces: 58,
        largestCity: "Algiers",
        organizations: ["UN", "AU", "Arab League", "OPEC", "OIC", "NAM", "AfCFTA"]
    },

    economy: {
        gdp: "$195.3 Billion",
        gdpPPP: "$629.6 Billion",
        gdpPerCapita: "$4,293",
        gdpRank: "#54",
        gdpGrowth: "3.2%",
        currency: "Algerian Dinar",
        currencyCode: "DZD",
        currencySymbol: "د.ج",
        inflation: "9.3%",
        unemployment: "12.7%",
        majorSectors: ["Industry (46%)", "Services (42%)", "Agriculture (12%)"],
        industries: ["Petroleum", "Natural Gas", "Light Industries", "Mining", "Electrical", "Petrochemical", "Food Processing"],
        exports: ["Petroleum", "Natural Gas", "Petroleum Products", "Ammonia", "Phosphates"],
        imports: ["Capital Goods", "Foodstuffs", "Consumer Goods", "Machinery"]
    },

    geography: {
        climate: "Mediterranean Coast; Arid Interior (Sahara)",
        avgTemperature: "21.7°C",
        annualRainfall: "89 mm",
        highestPoint: "Tahat (2,908 m)",
        lowestPoint: "Chott Melrhir (-40 m)",
        coastline: "998 km",
        forestCover: "1.8%",
        arableLand: "3.2%",
        terrain: "Sahara Desert (80%); Tell Atlas mountains; coastal plains",
        naturalResources: ["Petroleum", "Natural Gas", "Iron Ore", "Phosphates", "Uranium", "Lead", "Zinc", "Mercury", "Gold"]
    },

    geography_links: {
        rivers: ["Chelif River", "Medjerda River", "Seybouse River"],
        mountains: ["Tell Atlas", "Saharan Atlas", "Hoggar Mountains", "Mount Tahat"],
        deserts: ["Sahara Desert", "Grand Erg Occidental", "Grand Erg Oriental", "Tanezrouft"],
        forests: ["Tell Atlas Forests", "Cork Oak Forests", "Cedar Forests"],
        oceans: ["Mediterranean Sea"]
    },

    culture: {
        officialLanguages: ["Arabic", "Berber (Tamazight)"],
        languages: ["Arabic", "Berber Languages (Kabyle, Shawiya, Tamazight)", "French"],
        religions: ["Sunni Islam (99%)", "Others (1%)"],
        heritageSites: ["Djémila", "Timgad", "Tipasa", "M'Zab Valley", "Tassili n'Ajjer", "Kasbah of Algiers", "Al Qal'a of Beni Hammad"],
        festivals: ["Revolution Day", "Independence Day", "Eid al-Fitr", "Eid al-Adha", "Mawlid", "Yennayer (Berber New Year)"],
        cuisine: ["Couscous", "Rechta", "Chakhchoukha", "Mechoui", "Chorba", "Bourek", "Makroud"],
        arts: ["Raï Music", "Kabyle Music", "Chaabi Music", "Berber Crafts", "Calligraphy", "Traditional Textiles"],
        sports: ["Football", "Handball", "Athletics", "Boxing", "Judo"]
    },

    symbols: {
        bird: "None Official",
        animal: "Fennec Fox",
        flower: "Iris",
        tree: "None Official",
        anthem: "Kassaman",
        motto: "By the people and for the people"
    },

    demographics: {
        lifeExpectancy: 77.32,
        literacyRate: "81.4%",
        urbanPopulation: "75.0%",
        medianAge: 29.1
    },

    history: {
        timeline: [
            { year: "3000 BCE", title: "Berber Origins", description: "Indigenous Berber civilization established" },
            { year: "814 BCE", title: "Phoenician Colonies", description: "Carthage established trading posts" },
            { year: "46 BCE", title: "Roman Rule", description: "Became part of Roman Empire" },
            { year: "647 CE", title: "Arab Conquest", description: "Islamic conquests began" },
            { year: "1516", title: "Ottoman Rule", description: "Became part of Ottoman Empire" },
            { year: "1830", title: "French Colonization", description: "France invaded Algeria" },
            { year: "1954-1962", title: "War of Independence", description: "Algerian War of Independence" },
            { year: "1962", title: "Independence", description: "Gained independence from France" }
        ],
        notableFigures: ["Ahmed Ben Bella", "Houari Boumédiène", "Emir Abdelkader", "Larbi Ben M'hidi", "Hassiba Ben Bouali"]
    },

    disputes: [
        { name: "Western Sahara", description: "Supports Polisario Front against Morocco", type: "Territory" }
    ],

    quickFacts: [
        { icon: "map", title: "Largest African Country", text: "Largest country in Africa by area" },
        { icon: "sun", title: "Sahara Coverage", text: "80% covered by Sahara Desert" },
        { icon: "oil-can", title: "Energy Giant", text: "10th largest natural gas reserves globally" },
        { icon: "star", title: "Ancient Sites", text: "7 UNESCO World Heritage Sites" },
        { icon: "music", title: "Raï Music", text: "Birthplace of Raï music genre" }
    ]
},

// 2. EGYPT
{
    id: "EGY",
    name: "Egypt",
    officialName: "Arab Republic of Egypt",
    flag: "https://flagcdn.com/w320/eg.png",
    
    images: {
        hero: "https://images.unsplash.com/photo-1572252009286-268acec5ca0a?w=1920&q=80",
        landscape: "https://images.unsplash.com/photo-1539768942893-daf53e448371?w=1920&q=80",
        city: "https://images.unsplash.com/photo-1568322445389-f64ac2515020?w=1920&q=80"
    },

    basic: {
        capital: "Cairo",
        continent: "Africa",
        region: "North Africa",
        subregion: "Northern Africa",
        population: 112716598,
        area: 1002450,
        populationDensity: 103,
        independence: "1922",
        callingCode: "+20",
        tld: ".eg",
        drivingSide: "Right",
        electricity: "220V, 50Hz"
    },

    location: {
        coordinates: [26.8206, 30.8025],
        timezone: "UTC+2 (EET)",
        neighbors: ["Libya", "Sudan", "Palestine", "Israel"],
        borders: 2612,
        hemispheres: ["Northern", "Eastern"]
    },

    political: {
        government: "Unitary Semi-Presidential Republic",
        headOfState: "President Abdel Fattah el-Sisi",
        headOfGovernment: "Prime Minister Mostafa Madbouly",
        legislature: "Parliament (House of Representatives & Senate)",
        legalSystem: "Mixed (Civil Law, Islamic Law, Napoleonic Code)",
        states: 27,
        governorates: 27,
        largestCity: "Cairo",
        organizations: ["UN", "AU", "Arab League", "OIC", "NAM", "COMESA", "AfCFTA"]
    },

    economy: {
        gdp: "$398.4 Billion",
        gdpPPP: "$1.67 Trillion",
        gdpPerCapita: "$3,876",
        gdpRank: "#38",
        gdpGrowth: "3.8%",
        currency: "Egyptian Pound",
        currencyCode: "EGP",
        currencySymbol: "E£",
        inflation: "33.7%",
        unemployment: "7.1%",
        majorSectors: ["Services (52%)", "Industry (34%)", "Agriculture (11%)"],
        industries: ["Textiles", "Food Processing", "Tourism", "Chemicals", "Pharmaceuticals", "Hydrocarbons", "Construction", "Cement", "Metals"],
        exports: ["Crude Petroleum", "Refined Petroleum", "Gold", "Nitrogenous Fertilizers", "Citrus", "Textiles"],
        imports: ["Refined Petroleum", "Wheat", "Corn", "Cars", "Medicaments", "Iron"]
    },

    geography: {
        climate: "Desert; Hot, Dry Summers; Moderate Winters",
        avgTemperature: "22.5°C",
        annualRainfall: "51 mm",
        highestPoint: "Mount Catherine (2,629 m)",
        lowestPoint: "Qattara Depression (-133 m)",
        coastline: "2,450 km",
        forestCover: "0.07%",
        arableLand: "2.9%",
        terrain: "Vast desert plateau; Nile Valley and Delta",
        naturalResources: ["Petroleum", "Natural Gas", "Iron Ore", "Phosphates", "Manganese", "Limestone", "Gypsum", "Talc", "Asbestos", "Lead", "Zinc"]
    },

    geography_links: {
        rivers: ["Nile River", "Rosetta Branch", "Damietta Branch"],
        mountains: ["Sinai Mountains", "Mount Catherine", "Mount Sinai", "Eastern Desert Mountains", "Red Sea Hills"],
        deserts: ["Sahara Desert", "Western Desert", "Eastern Desert", "Sinai Desert", "Libyan Desert"],
        forests: ["Mangrove Forests (Red Sea Coast)", "Planted Forests"],
        oceans: ["Mediterranean Sea", "Red Sea", "Gulf of Suez", "Gulf of Aqaba"]
    },

    culture: {
        officialLanguages: ["Arabic"],
        languages: ["Egyptian Arabic", "Sa'idi Arabic", "Bedouin Arabic", "Coptic (Liturgical)"],
        religions: ["Sunni Islam (90%)", "Coptic Christianity (10%)"],
        heritageSites: ["Pyramids of Giza", "Memphis and Necropolis", "Ancient Thebes", "Nubian Monuments", "Islamic Cairo", "Abu Mena", "Saint Catherine Area", "Wadi Al-Hitan"],
        festivals: ["Eid al-Fitr", "Eid al-Adha", "Coptic Christmas", "Sham el-Nessim", "Ramadan", "Mawlid"],
        cuisine: ["Koshari", "Ful Medames", "Ta'meya (Falafel)", "Molokhia", "Mahshi", "Fattah", "Basbousa"],
        arts: ["Belly Dancing", "Arabic Music", "Hieroglyphics", "Papyrus Art", "Islamic Calligraphy", "Cinema"],
        sports: ["Football", "Squash", "Handball", "Basketball", "Volleyball"]
    },

    symbols: {
        bird: "Steppe Eagle",
        animal: "None Official",
        flower: "Egyptian Lotus",
        tree: "Date Palm",
        anthem: "Bilady, Bilady, Bilady",
        motto: "None Official"
    },

    demographics: {
        lifeExpectancy: 72.38,
        literacyRate: "71.2%",
        urbanPopulation: "42.8%",
        medianAge: 24.6
    },

    history: {
        timeline: [
            { year: "3100 BCE", title: "Ancient Egypt", description: "Pharaonic civilization unified under Narmer" },
            { year: "332 BCE", title: "Alexander's Conquest", description: "Alexander the Great conquered Egypt" },
            { year: "30 BCE", title: "Roman Rule", description: "Became Roman province after Cleopatra" },
            { year: "641 CE", title: "Islamic Conquest", description: "Arab conquest brought Islam" },
            { year: "1517", title: "Ottoman Rule", description: "Became part of Ottoman Empire" },
            { year: "1882", title: "British Occupation", description: "British colonial rule began" },
            { year: "1922", title: "Independence", description: "Gained nominal independence from Britain" },
            { year: "1952", title: "Revolution", description: "Free Officers Revolution ended monarchy" },
            { year: "1956", title: "Suez Crisis", description: "Nationalization of Suez Canal" }
        ],
        notableFigures: ["Cleopatra VII", "Tutankhamun", "Ramses II", "Gamal Abdel Nasser", "Anwar Sadat", "Mohamed ElBaradei"]
    },

    disputes: [
        { name: "Hala'ib Triangle", description: "Border dispute with Sudan", type: "Border" },
        { name: "Nile Waters", description: "Dispute with Ethiopia over GERD dam", type: "Water Rights" }
    ],

    quickFacts: [
        { icon: "monument", title: "Ancient Civilization", text: "One of world's oldest civilizations (5,000+ years)" },
        { icon: "pyramid", title: "Pyramids", text: "Great Pyramid - last surviving Ancient Wonder" },
        { icon: "water", title: "Nile River", text: "World's longest river flows through Egypt" },
        { icon: "ship", title: "Suez Canal", text: "Critical global shipping route" },
        { icon: "users", title: "Most Populous Arab", text: "Most populous country in Arab world" }
    ]
},

// 3. LIBYA
{
    id: "LBY",
    name: "Libya",
    officialName: "State of Libya",
    flag: "https://flagcdn.com/w320/ly.png",
    
    images: {
        hero: "https://images.unsplash.com/photo-1591369822096-ffd140ec948f?w=1920&q=80",
        landscape: "https://images.unsplash.com/photo-1578663248512-36c45942f4ef?w=1920&q=80",
        city: "https://images.unsplash.com/photo-1566522650166-bd8b5b3d2056?w=1920&q=80"
    },

    basic: {
        capital: "Tripoli",
        continent: "Africa",
        region: "North Africa",
        subregion: "Northern Africa",
        population: 6812341,
        area: 1759540,
        populationDensity: 4,
        independence: "1951",
        callingCode: "+218",
        tld: ".ly",
        drivingSide: "Right",
        electricity: "230V, 50Hz"
    },

    location: {
        coordinates: [26.3351, 17.2283],
        timezone: "UTC+2 (EET)",
        neighbors: ["Egypt", "Sudan", "Chad", "Niger", "Algeria", "Tunisia"],
        borders: 4348,
        hemispheres: ["Northern", "Eastern"]
    },

    political: {
        government: "Provisional Unity Government",
        headOfState: "Presidential Council Chairman Mohamed al-Menfi",
        headOfGovernment: "Prime Minister Abdul Hamid Dbeibeh",
        legislature: "House of Representatives",
        legalSystem: "Mixed (Civil Law and Islamic Law)",
        states: 22,
        districts: 22,
        largestCity: "Tripoli",
        organizations: ["UN", "AU", "Arab League", "OIC", "OPEC", "NAM", "AfCFTA"]
    },

    economy: {
        gdp: "$45.75 Billion",
        gdpPPP: "$143.5 Billion",
        gdpPerCapita: "$6,716",
        gdpRank: "#90",
        gdpGrowth: "12.5%",
        currency: "Libyan Dinar",
        currencyCode: "LYD",
        currencySymbol: "ل.د",
        inflation: "4.5%",
        unemployment: "19.6%",
        majorSectors: ["Industry (52%)", "Services (38%)", "Agriculture (2%)"],
        industries: ["Petroleum", "Petrochemicals", "Aluminum", "Iron", "Steel", "Food Processing", "Textiles", "Handicrafts", "Cement"],
        exports: ["Crude Petroleum", "Refined Petroleum", "Gold", "Natural Gas"],
        imports: ["Refined Petroleum", "Cars", "Broadcasting Equipment", "Jewelry", "Packaged Medicaments"]
    },

    geography: {
        climate: "Mediterranean Coast; Desert Interior",
        avgTemperature: "22.5°C",
        annualRainfall: "56 mm",
        highestPoint: "Bikku Bitti (2,267 m)",
        lowestPoint: "Sabkhat Ghuzayyil (-47 m)",
        coastline: "1,770 km",
        forestCover: "0.1%",
        arableLand: "1.0%",
        terrain: "Mostly barren desert; mountains in north",
        naturalResources: ["Petroleum", "Natural Gas", "Gypsum", "Limestone", "Iron Ore", "Magnesium", "Potash", "Sulfur"]
    },

    geography_links: {
        rivers: [],
        mountains: ["Tibesti Mountains", "Acacus Mountains", "Nafusa Mountains", "Green Mountain (Jebel Akhdar)"],
        deserts: ["Sahara Desert", "Libyan Desert", "Idehan Ubari", "Calanshio Sand Sea"],
        forests: ["Mediterranean Vegetation", "Juniper Forests (Jebel Akhdar)"],
        oceans: ["Mediterranean Sea", "Gulf of Sidra"]
    },

    culture: {
        officialLanguages: ["Arabic"],
        languages: ["Libyan Arabic", "Berber Languages", "Italian", "English"],
        religions: ["Sunni Islam (97%)", "Others (3%)"],
        heritageSites: ["Leptis Magna", "Sabratha", "Cyrene", "Tadrart Acacus", "Ghadamès Old Town"],
        festivals: ["Eid al-Fitr", "Eid al-Adha", "Revolution Day", "Independence Day", "Mawlid"],
        cuisine: ["Couscous", "Bazin", "Asida", "Shakshouka", "Usban", "Mbakbaka"],
        arts: ["Bedouin Poetry", "Traditional Music", "Handicrafts", "Carpet Weaving", "Silver Jewelry"],
        sports: ["Football", "Basketball", "Handball", "Volleyball", "Athletics"]
    },

    symbols: {
        bird: "None Official",
        animal: "Arabian Horse",
        flower: "Pomegranate Blossom",
        tree: "Date Palm",
        anthem: "Libya, Libya, Libya",
        motto: "None Official"
    },

    demographics: {
        lifeExpectancy: 73.44,
        literacyRate: "91.0%",
        urbanPopulation: "81.2%",
        medianAge: 29.1
    },

    history: {
        timeline: [
            { year: "630 BCE", title: "Greek Colonization", description: "Greeks founded Cyrene" },
            { year: "146 BCE", title: "Roman Rule", description: "Became part of Roman Empire" },
            { year: "643 CE", title: "Arab Conquest", description: "Islamic conquest began" },
            { year: "1551", title: "Ottoman Rule", description: "Ottoman Empire took control" },
            { year: "1911", title: "Italian Colonization", description: "Italy invaded Libya" },
            { year: "1951", title: "Independence", description: "Libya gained independence" },
            { year: "1969", title: "Gaddafi Coup", description: "Muammar Gaddafi seized power" },
            { year: "2011", title: "Civil War", description: "Libyan Civil War; Gaddafi killed" }
        ],
        notableFigures: ["Omar Mukhtar", "King Idris", "Muammar Gaddafi"]
    },

    disputes: [
        { name: "Political Division", description: "Ongoing conflict between rival governments", type: "Internal" }
    ],

    quickFacts: [
        { icon: "oil-can", title: "Oil Reserves", text: "Largest proven oil reserves in Africa" },
        { icon: "sun", title: "Desert Nation", text: "90% covered by Sahara Desert" },
        { icon: "monument", title: "Roman Ruins", text: "Best-preserved Roman ruins at Leptis Magna" },
        { icon: "droplet", title: "Great Man-Made River", text: "World's largest irrigation project" },
        { icon: "water", title: "No Rivers", text: "No permanent rivers; relies on aquifers" }
    ]
},

// 4. MOROCCO
{
    id: "MAR",
    name: "Morocco",
    officialName: "Kingdom of Morocco",
    flag: "https://flagcdn.com/w320/ma.png",
    
    images: {
        hero: "https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=1920&q=80",
        landscape: "https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?w=1920&q=80",
        city: "https://images.unsplash.com/photo-1570618670836-5e644a7d3f4f?w=1920&q=80"
    },

    basic: {
        capital: "Rabat",
        continent: "Africa",
        region: "North Africa",
        subregion: "Northern Africa",
        population: 37772756,
        area: 446550,
        populationDensity: 85,
        independence: "1956",
        callingCode: "+212",
        tld: ".ma",
        drivingSide: "Right",
        electricity: "220V, 50Hz"
    },

    location: {
        coordinates: [31.7917, -7.0926],
        timezone: "UTC+1 (WEST)",
        neighbors: ["Algeria", "Western Sahara", "Spain (Ceuta & Melilla)"],
        borders: 2362,
        hemispheres: ["Northern", "Western"]
    },

    political: {
        government: "Unitary Parliamentary Constitutional Monarchy",
        headOfState: "King Mohammed VI",
        headOfGovernment: "Prime Minister Aziz Akhannouch",
        legislature: "Parliament (House of Representatives & House of Councillors)",
        legalSystem: "Mixed (Civil Law, Islamic Law, French Law)",
        states: 12,
        regions: 12,
        largestCity: "Casablanca",
        organizations: ["UN", "AU", "Arab League", "OIC", "Francophonie", "AfCFTA", "UMA"]
    },

    economy: {
        gdp: "$134.2 Billion",
        gdpPPP: "$358.3 Billion",
        gdpPerCapita: "$3,700",
        gdpRank: "#60",
        gdpGrowth: "3.1%",
        currency: "Moroccan Dirham",
        currencyCode: "MAD",
        currencySymbol: "د.م.",
        inflation: "6.6%",
        unemployment: "11.8%",
        majorSectors: ["Services (56%)", "Industry (26%)", "Agriculture (12%)"],
        industries: ["Automotive", "Aerospace", "Phosphate Mining", "Tourism", "Textiles", "Food Processing", "Leather Goods", "Construction"],
        exports: ["Cars", "Insulated Wire", "Fertilizers", "Phosphoric Acid", "Citrus", "Clothing", "Fish"],
        imports: ["Refined Petroleum", "Cars", "Wheat", "Natural Gas", "Coal", "Soybeans"]
    },

    geography: {
        climate: "Mediterranean Coast; Continental Interior; Desert South",
        avgTemperature: "17.5°C",
        annualRainfall: "346 mm",
        highestPoint: "Toubkal (4,167 m)",
        lowestPoint: "Sebkha Tah (-55 m)",
        coastline: "1,835 km",
        forestCover: "11.5%",
        arableLand: "17.5%",
        terrain: "Atlas Mountains; coastal plains; Sahara Desert",
        naturalResources: ["Phosphates", "Iron Ore", "Manganese", "Lead", "Zinc", "Fish", "Salt"]
    },

    geography_links: {
        rivers: ["Sebou River", "Oum Er-Rbia", "Moulouya River", "Draa River", "Tensift River"],
        mountains: ["Atlas Mountains", "High Atlas", "Middle Atlas", "Anti-Atlas", "Rif Mountains", "Mount Toubkal"],
        deserts: ["Sahara Desert", "Erg Chebbi", "Erg Chigaga"],
        forests: ["Cedar Forests", "Cork Oak Forests", "Argan Forests", "Atlas Forests"],
        oceans: ["Atlantic Ocean", "Mediterranean Sea", "Strait of Gibraltar"]
    },

    culture: {
        officialLanguages: ["Arabic", "Berber (Tamazight)"],
        languages: ["Moroccan Arabic (Darija)", "Berber Languages", "French", "Spanish"],
        religions: ["Sunni Islam (99%)", "Others (1%)"],
        heritageSites: ["Medina of Fez", "Medina of Marrakesh", "Ksar of Ait-Ben-Haddou", "Medina of Tétouan", "Volubilis", "Medina of Essaouira", "Medina of Meknes", "Portuguese City of Mazagan"],
        festivals: ["Eid al-Fitr", "Eid al-Adha", "Throne Day", "Independence Day", "Amazigh New Year", "Rose Festival"],
        cuisine: ["Tagine", "Couscous", "Pastilla", "Harira", "Mechoui", "Zaalouk", "Mint Tea"],
        arts: ["Gnawa Music", "Andalusian Music", "Zellige Tilework", "Carpet Weaving", "Leather Crafts", "Pottery"],
        sports: ["Football", "Athletics", "Boxing", "Kickboxing", "Basketball"]
    },

    symbols: {
        bird: "None Official",
        animal: "Barbary Lion",
        flower: "Rose",
        tree: "Argan Tree",
        anthem: "Hymne Chérifien",
        motto: "God, Homeland, King"
    },

    demographics: {
        lifeExpectancy: 77.73,
        literacyRate: "75.9%",
        urbanPopulation: "64.8%",
        medianAge: 30.1
    },

    history: {
        timeline: [
            { year: "788 CE", title: "Idrisid Dynasty", description: "First Islamic dynasty founded Morocco" },
            { year: "1062", title: "Almoravid Dynasty", description: "Unified Morocco and Al-Andalus" },
            { year: "1554", title: "Saadi Dynasty", description: "Repelled Ottoman expansion" },
            { year: "1666", title: "Alaouite Dynasty", description: "Current ruling dynasty came to power" },
            { year: "1912", title: "French Protectorate", description: "Morocco became French protectorate" },
            { year: "1956", title: "Independence", description: "Gained independence from France" },
            { year: "1999", title: "Mohammed VI", description: "King Mohammed VI ascended throne" }
        ],
        notableFigures: ["Hassan II", "Mohammed V", "Fatima al-Fihri", "Ibn Battuta", "Tariq ibn Ziyad"]
    },

    disputes: [
        { name: "Western Sahara", description: "Territorial dispute over Western Sahara", type: "Territory" },
        { name: "Ceuta and Melilla", description: "Spanish enclaves claimed by Morocco", type: "Territory" }
    ],

    quickFacts: [
        { icon: "gem", title: "Phosphate Leader", text: "World's largest phosphate reserves" },
        { icon: "film", title: "Hollywood of Africa", text: "Major film production destination" },
        { icon: "sun", title: "Solar Power", text: "Home to world's largest solar plant (Noor)" },
        { icon: "graduation-cap", title: "Oldest University", text: "University of Al Quaraouiyine (859 CE)" },
        { icon: "tree", title: "Argan Oil", text: "Only place where argan trees grow naturally" }
    ]
},

// 5. SUDAN
{
    id: "SDN",
    name: "Sudan",
    officialName: "Republic of the Sudan",
    flag: "https://flagcdn.com/w320/sd.png",
    
    images: {
        hero: "https://images.unsplash.com/photo-1609342122563-a43ac8917a3a?w=1920&q=80",
        landscape: "https://images.unsplash.com/photo-1584474486907-b7e2b8f8f53c?w=1920&q=80",
        city: "https://images.unsplash.com/photo-1611348524140-53c9a25263d6?w=1920&q=80"
    },

    basic: {
        capital: "Khartoum",
        continent: "Africa",
        region: "North Africa",
        subregion: "Northern Africa",
        population: 48109006,
        area: 1886068,
        populationDensity: 26,
        independence: "1956",
        callingCode: "+249",
        tld: ".sd",
        drivingSide: "Right",
        electricity: "230V, 50Hz"
    },

    location: {
        coordinates: [12.8628, 30.2176],
        timezone: "UTC+2 (CAT)",
        neighbors: ["Egypt", "Libya", "Chad", "Central African Republic", "South Sudan", "Ethiopia", "Eritrea"],
        borders: 6819,
        hemispheres: ["Northern", "Eastern"]
    },

    political: {
        government: "Federal Provisional Military Government",
        headOfState: "Sovereign Council Chairman Abdel Fattah al-Burhan",
        headOfGovernment: "Prime Minister (Vacant)",
        legislature: "Transitional Legislative Council (Dissolved)",
        legalSystem: "Mixed (Islamic Law and English Common Law)",
        states: 18,
        statesCount: 18,
        largestCity: "Omdurman",
        organizations: ["UN", "AU", "Arab League", "OIC", "COMESA", "AfCFTA"]
    },

    economy: {
        gdp: "$52.6 Billion",
        gdpPPP: "$194.7 Billion",
        gdpPerCapita: "$1,157",
        gdpRank: "#75",
        gdpGrowth: "-18.3%",
        currency: "Sudanese Pound",
        currencyCode: "SDG",
        currencySymbol: "ج.س.",
        inflation: "138.8%",
        unemployment: "19.8%",
        majorSectors: ["Agriculture (39%)", "Services (34%)", "Industry (24%)"],
        industries: ["Oil", "Cotton Ginning", "Textiles", "Cement", "Edible Oils", "Sugar", "Soap", "Shoes", "Petroleum Refining"],
        exports: ["Gold", "Crude Petroleum", "Sheep", "Sesame Seeds", "Cotton", "Gum Arabic"],
        imports: ["Raw Sugar", "Wheat", "Petroleum", "Cars", "Packaged Medicaments"]
    },

    geography: {
        climate: "Tropical in South; Desert in North",
        avgTemperature: "27.3°C",
        annualRainfall: "416 mm",
        highestPoint: "Deriba Crater (3,042 m)",
        lowestPoint: "Red Sea (0 m)",
        coastline: "853 km",
        forestCover: "12.8%",
        arableLand: "15.7%",
        terrain: "Desert; mountains; plains; Nile River system",
        naturalResources: ["Petroleum", "Natural Gas", "Gold", "Silver", "Chromium", "Asbestos", "Manganese", "Gypsum", "Mica", "Zinc", "Iron", "Lead", "Uranium", "Copper"]
    },

    geography_links: {
        rivers: ["Nile River", "White Nile", "Blue Nile", "Atbara River", "Gash River"],
        mountains: ["Red Sea Hills", "Jebel Marra", "Nuba Mountains", "Imatong Mountains"],
        deserts: ["Nubian Desert", "Bayuda Desert", "Libyan Desert"],
        forests: ["Dinder National Park", "Acacia Woodlands", "Riverine Forests"],
        oceans: ["Red Sea"]
    },

    culture: {
        officialLanguages: ["Arabic", "English"],
        languages: ["Sudanese Arabic", "Nubian", "Beja", "Fur", "Masalit", "Zaghawa"],
        religions: ["Sunni Islam (97%)", "Christianity (3%)"],
        heritageSites: ["Gebel Barkal", "Meroe Pyramids", "Sanganeb Marine National Park", "Dungonab Bay"],
        festivals: ["Eid al-Fitr", "Eid al-Adha", "Independence Day", "Mawlid", "Revolution Day"],
        cuisine: ["Ful Medames", "Kisra", "Asida", "Kamounia", "Sharmout Abiyad", "Goraasa"],
        arts: ["Nubian Music", "Haqibah Dance", "Traditional Drumming", "Pottery", "Basket Weaving"],
        sports: ["Football", "Basketball", "Athletics", "Handball", "Volleyball"]
    },

    symbols: {
        bird: "Secretary Bird",
        animal: "Nubian Ibex",
        flower: "None Official",
        tree: "Hashab (Acacia)",
        anthem: "Nahnu Djundulla Djundulwatan",
        motto: "Victory is Ours"
    },

    demographics: {
        lifeExpectancy: 66.13,
        literacyRate: "60.7%",
        urbanPopulation: "35.8%",
        medianAge: 18.3
    },

    history: {
        timeline: [
            { year: "3000 BCE", title: "Kingdom of Kush", description: "Ancient Nubian civilization" },
            { year: "350 CE", title: "Christian Kingdoms", description: "Nubian Christian kingdoms flourished" },
            { year: "1504", title: "Funj Sultanate", description: "Islamic Funj Sultanate established" },
            { year: "1821", title: "Egyptian Rule", description: "Egypt conquered northern Sudan" },
            { year: "1885", title: "Mahdist State", description: "Mahdi uprising against Egypt" },
            { year: "1899", title: "Anglo-Egyptian", description: "Anglo-Egyptian condominium established" },
            { year: "1956", title: "Independence", description: "Sudan gained independence" },
            { year: "2011", title: "South Sudan", description: "South Sudan separated" },
            { year: "2019", title: "Revolution", description: "Omar al-Bashir ousted" }
        ],
        notableFigures: ["Muhammad Ahmad (The Mahdi)", "Ismail al-Azhari", "Omar al-Bashir", "Abdel Fattah al-Burhan"]
    },

    disputes: [
        { name: "Abyei", description: "Disputed region with South Sudan", type: "Territory" },
        { name: "Hala'ib Triangle", description: "Disputed territory with Egypt", type: "Border" },
        { name: "Darfur Conflict", description: "Ongoing internal conflict", type: "Internal" }
    ],

    quickFacts: [
        { icon: "monument", title: "Ancient Pyramids", text: "More pyramids than Egypt (200+)" },
        { icon: "water", title: "Nile Confluence", text: "Blue and White Nile meet in Khartoum" },
        { icon: "tree", title: "Gum Arabic", text: "World's largest producer of gum arabic (70%)" },
        { icon: "gold", title: "Gold Production", text: "Major gold producer in Africa" },
        { icon: "scroll", title: "Nubian Heritage", text: "Ancient Nubian civilization homeland" }
    ]
},

// 6. TUNISIA
{
    id: "TUN",
    name: "Tunisia",
    officialName: "Republic of Tunisia",
    flag: "https://flagcdn.com/w320/tn.png",
    
    images: {
        hero: "https://images.unsplash.com/photo-1583424223725-471e91f1e1d4?w=1920&q=80",
        landscape: "https://images.unsplash.com/photo-1565552645632-d725f8cfc19a?w=1920&q=80",
        city: "https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?w=1920&q=80"
    },

    basic: {
        capital: "Tunis",
        continent: "Africa",
        region: "North Africa",
        subregion: "Northern Africa",
        population: 12458223,
        area: 163610,
        populationDensity: 76,
        independence: "1956",
        callingCode: "+216",
        tld: ".tn",
        drivingSide: "Right",
        electricity: "230V, 50Hz"
    },

    location: {
        coordinates: [33.8869, 9.5375],
        timezone: "UTC+1 (CET)",
        neighbors: ["Algeria", "Libya"],
        borders: 1495,
        hemispheres: ["Northern", "Eastern"]
    },

    political: {
        government: "Unitary Presidential Republic",
        headOfState: "President Kais Saied",
        headOfGovernment: "Prime Minister Ahmed Hachani",
        legislature: "Assembly of the Representatives of the People",
        legalSystem: "Mixed (Civil Law and Islamic Law)",
        states: 24,
        governorates: 24,
        largestCity: "Tunis",
        organizations: ["UN", "AU", "Arab League", "OIC", "Francophonie", "AfCFTA", "UMA"]
    },

    economy: {
        gdp: "$49.1 Billion",
        gdpPPP: "$146.4 Billion",
        gdpPerCapita: "$4,058",
        gdpRank: "#77",
        gdpGrowth: "0.4%",
        currency: "Tunisian Dinar",
        currencyCode: "TND",
        currencySymbol: "د.ت",
        inflation: "9.3%",
        unemployment: "16.1%",
        majorSectors: ["Services (62%)", "Industry (26%)", "Agriculture (10%)"],
        industries: ["Petroleum", "Mining (Phosphates, Iron Ore)", "Tourism", "Textiles", "Footwear", "Agribusiness", "Beverages", "Automotive Parts"],
        exports: ["Insulated Wire", "Clothing", "Refined Petroleum", "Olive Oil", "Electrical Components"],
        imports: ["Refined Petroleum", "Natural Gas", "Cars", "Wheat", "Packaged Medicaments"]
    },

    geography: {
        climate: "Mediterranean Coast; Hot, Dry Desert in South",
        avgTemperature: "19.5°C",
        annualRainfall: "450 mm",
        highestPoint: "Jebel ech Chambi (1,544 m)",
        lowestPoint: "Chott el Djerid (-17 m)",
        coastline: "1,148 km",
        forestCover: "6.6%",
        arableLand: "17.7%",
        terrain: "Mountains in north; plains in center; desert in south",
        naturalResources: ["Petroleum", "Phosphates", "Iron Ore", "Lead", "Zinc", "Salt"]
    },

    geography_links: {
        rivers: ["Medjerda River"],
        mountains: ["Atlas Mountains", "Dorsale Mountains", "Jebel ech Chambi"],
        deserts: ["Sahara Desert", "Grand Erg Oriental"],
        forests: ["Cork Oak Forests", "Pine Forests", "Juniper Forests"],
        oceans: ["Mediterranean Sea", "Gulf of Tunis", "Gulf of Gabès"]
    },

    culture: {
        officialLanguages: ["Arabic"],
        languages: ["Tunisian Arabic", "French", "Berber"],
        religions: ["Sunni Islam (99%)", "Others (1%)"],
        heritageSites: ["Amphitheatre of El Jem", "Carthage", "Medina of Tunis", "Ichkeul National Park", "Punic Town of Kerkuane", "Kairouan", "Medina of Sousse", "Dougga"],
        festivals: ["Eid al-Fitr", "Eid al-Adha", "Independence Day", "Revolution Day", "Carthage International Festival"],
        cuisine: ["Couscous", "Brik", "Harissa", "Mechouia", "Lablabi", "Ojja", "Makroudh"],
        arts: ["Malouf Music", "Stambeli Music", "Tile Mosaics", "Carpet Weaving", "Pottery", "Calligraphy"],
        sports: ["Football", "Handball", "Volleyball", "Basketball", "Tennis"]
    },

    symbols: {
        bird: "None Official",
        animal: "Cream-colored Courser",
        flower: "Jasmine",
        tree: "Olive Tree",
        anthem: "Humat al-Hima",
        motto: "Freedom, Order, Justice"
    },

    demographics: {
        lifeExpectancy: 77.36,
        literacyRate: "82.7%",
        urbanPopulation: "70.5%",
        medianAge: 33.3
    },

    history: {
        timeline: [
            { year: "814 BCE", title: "Carthage Founded", description: "Phoenicians founded Carthage" },
            { year: "146 BCE", title: "Roman Rule", description: "Romans destroyed Carthage; made province" },
            { year: "698 CE", title: "Arab Conquest", description: "Arabs conquered Tunisia; Islam introduced" },
            { year: "1574", title: "Ottoman Rule", description: "Became part of Ottoman Empire" },
            { year: "1881", title: "French Protectorate", description: "France established protectorate" },
            { year: "1956", title: "Independence", description: "Gained independence from France" },
            { year: "2011", title: "Arab Spring", description: "Jasmine Revolution; Ben Ali ousted" }
        ],
        notableFigures: ["Habib Bourguiba", "Zine El Abidine Ben Ali", "Hannibal Barca", "Ibn Khaldun"]
    },

    disputes: [],

    quickFacts: [
        { icon: "landmark", title: "Birthplace of Arab Spring", text: "2011 revolution sparked across Arab world" },
        { icon: "monument", title: "Ancient Carthage", text: "Rival to Rome; Hannibal's homeland" },
        { icon: "droplet", title: "Olive Oil", text: "Major olive oil producer (4th globally)" },
        { icon: "star", title: "UNESCO Sites", text: "8 UNESCO World Heritage Sites" },
        { icon: "film", title: "Star Wars", text: "Filming location for Star Wars movies" }
    ]
},

// 7. WESTERN SAHARA
{
    id: "ESH",
    name: "Western Sahara",
    officialName: "Sahrawi Arab Democratic Republic (Claimed)",
    flag: "https://flagcdn.com/w320/eh.png",
    
    images: {
        hero: "https://images.unsplash.com/photo-1509023464722-18d996393ca8?w=1920&q=80",
        landscape: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=1920&q=80",
        city: "https://images.unsplash.com/photo-1591202261944-c1178b07f5e5?w=1920&q=80"
    },

    basic: {
        capital: "El Aaiún (claimed by Morocco), Tifariti (SADR)",
        continent: "Africa",
        region: "North Africa",
        subregion: "Northern Africa",
        population: 611875,
        area: 266000,
        populationDensity: 2,
        independence: "1976 (Claimed)",
        callingCode: "+212",
        tld: ".eh",
        drivingSide: "Right",
        electricity: "220V, 50Hz"
    },

    location: {
        coordinates: [24.2155, -12.8858],
        timezone: "UTC+0",
        neighbors: ["Morocco", "Algeria", "Mauritania"],
        borders: 2046,
        hemispheres: ["Northern", "Western"]
    },

    political: {
        government: "Disputed Territory (Claimed by Morocco & SADR)",
        headOfState: "SADR President Brahim Ghali / Morocco controls most",
        headOfGovernment: "SADR Prime Minister Bouchraya Hammoudi Bayoun",
        legislature: "Sahrawi National Council (SADR)",
        legalSystem: "Mixed",
        states: 0,
        provinces: 0,
        largestCity: "El Aaiún",
        organizations: ["AU (as SADR)", "Disputed UN Status"]
    },

    economy: {
        gdp: "Data Unavailable",
        gdpPPP: "Data Unavailable",
        gdpPerCapita: "Data Unavailable",
        gdpRank: "N/A",
        gdpGrowth: "N/A",
        currency: "Moroccan Dirham (de facto), Sahrawi Peseta (SADR)",
        currencyCode: "MAD",
        currencySymbol: "د.م.",
        inflation: "N/A",
        unemployment: "N/A",
        majorSectors: ["Fishing", "Phosphate Mining", "Pastoralism"],
        industries: ["Phosphate Mining", "Fishing", "Handicrafts"],
        exports: ["Phosphates", "Fish"],
        imports: ["Fuel", "Food", "Consumer Goods"]
    },

    geography: {
        climate: "Hot, Arid Desert",
        avgTemperature: "22.5°C",
        annualRainfall: "40 mm",
        highestPoint: "Unnamed (805 m)",
        lowestPoint: "Sebjet Tah (-55 m)",
        coastline: "1,110 km",
        forestCover: "0%",
        arableLand: "0%",
        terrain: "Flat desert; rocky plateaus",
        naturalResources: ["Phosphates", "Iron Ore", "Fish"]
    },

    geography_links: {
        rivers: [],
        mountains: [],
        deserts: ["Sahara Desert"],
        forests: [],
        oceans: ["Atlantic Ocean"]
    },

    culture: {
        officialLanguages: ["Arabic (Hassaniya)", "Spanish"],
        languages: ["Hassaniya Arabic", "Spanish", "Berber"],
        religions: ["Sunni Islam (100%)"],
        heritageSites: [],
        festivals: ["Eid al-Fitr", "Eid al-Adha", "SADR Proclamation Day"],
        cuisine: ["Couscous", "Camel Meat", "Dates", "Mint Tea"],
        arts: ["Traditional Sahrawi Music", "Poetry", "Handicrafts"],
        sports: ["Football"]
    },

    symbols: {
        bird: "None Official",
        animal: "Dromedary Camel",
        flower: "None Official",
        tree: "None Official",
        anthem: "Yā Banīy as-Saḥrā",
        motto: "None Official"
    },

    demographics: {
        lifeExpectancy: 70.0,
        literacyRate: "N/A",
        urbanPopulation: "86.8%",
        medianAge: 21.8
    },

    history: {
        timeline: [
            { year: "1884", title: "Spanish Colonization", description: "Spain claimed Western Sahara" },
            { year: "1975", title: "Green March", description: "Morocco sent 350,000 civilians to claim territory" },
            { year: "1975", title: "Madrid Accords", description: "Spain ceded to Morocco and Mauritania" },
            { year: "1976", title: "SADR Proclaimed", description: "Polisario Front declared independence" },
            { year: "1979", title: "Mauritania Withdraws", description: "Mauritania gave up claims" },
            { year: "1991", title: "Ceasefire", description: "UN-brokered ceasefire; referendum promised" },
            { year: "2020", title: "Conflict Resumes", description: "Ceasefire broken; tensions escalate" }
        ],
        notableFigures: ["Mohamed Abdelaziz", "Brahim Ghali"]
    },

    disputes: [
        { name: "Sovereignty", description: "Disputed between Morocco and SADR (Polisario Front)", type: "Territory" },
        { name: "UN Referendum", description: "Promised referendum never held since 1991", type: "Political" }
    ],

    quickFacts: [
        { icon: "flag", title: "Disputed Territory", text: "Contested between Morocco and SADR" },
        { icon: "gem", title: "Phosphate Rich", text: "Large phosphate deposits" },
        { icon: "water", title: "Atlantic Coast", text: "Rich fishing grounds" },
        { icon: "users", title: "Refugee Camps", description: "Thousands of Sahrawis live in Algerian camps" },
        { icon: "balance-scale", title: "UN Mission", text: "MINURSO peacekeeping since 1991" }
    ]
},

// 8. BENIN
{
    id: "BEN",
    name: "Benin",
    officialName: "Republic of Benin",
    flag: "https://flagcdn.com/w320/bj.png",
    
    images: {
        hero: "https://images.unsplash.com/photo-1589365278144-c9e705f843ba?w=1920&q=80",
        landscape: "https://images.unsplash.com/photo-1609495128318-2aabdab78296?w=1920&q=80",
        city: "https://images.unsplash.com/photo-1604564916033-1ade6f11f85e?w=1920&q=80"
    },

    basic: {
        capital: "Porto-Novo",
        continent: "Africa",
        region: "West Africa",
        subregion: "Western Africa",
        population: 13712828,
        area: 114763,
        populationDensity: 120,
        independence: "1960",
        callingCode: "+229",
        tld: ".bj",
        drivingSide: "Right",
        electricity: "220V, 50Hz"
    },

    location: {
        coordinates: [9.3077, 2.3158],
        timezone: "UTC+1 (WAT)",
        neighbors: ["Togo", "Burkina Faso", "Niger", "Nigeria"],
        borders: 2123,
        hemispheres: ["Northern", "Eastern"]
    },

    political: {
        government: "Unitary Presidential Republic",
        headOfState: "President Patrice Talon",
        headOfGovernment: "President Patrice Talon",
        legislature: "National Assembly",
        legalSystem: "Civil Law (French influence)",
        states: 12,
        departments: 12,
        largestCity: "Cotonou",
        organizations: ["UN", "AU", "ECOWAS", "Francophonie", "OIC", "AfCFTA"]
    },

    economy: {
        gdp: "$19.4 Billion",
        gdpPPP: "$52.6 Billion",
        gdpPerCapita: "$1,429",
        gdpRank: "#130",
        gdpGrowth: "6.3%",
        currency: "West African CFA Franc",
        currencyCode: "XOF",
        currencySymbol: "Fr",
        inflation: "5.8%",
        unemployment: "2.3%",
        majorSectors: ["Agriculture (26%)", "Services (52%)", "Industry (22%)"],
        industries: ["Textiles", "Food Processing", "Construction Materials", "Cement", "Port Activities"],
        exports: ["Cotton", "Cashews", "Shea Butter", "Gold", "Textiles"],
        imports: ["Rice", "Cars", "Refined Petroleum", "Palm Oil", "Packaged Medicaments"]
    },

    geography: {
        climate: "Tropical; Hot, Humid in South; Semiarid in North",
        avgTemperature: "27.2°C",
        annualRainfall: "1,200 mm",
        highestPoint: "Mont Sokbaro (658 m)",
        lowestPoint: "Atlantic Ocean (0 m)",
        coastline: "121 km",
        forestCover: "40.0%",
        arableLand: "23.1%",
        terrain: "Coastal plain; plateaus; mountains in northwest",
        naturalResources: ["Offshore Oil", "Limestone", "Marble", "Timber", "Gold"]
    },

    geography_links: {
        rivers: ["Ouémé River", "Niger River", "Mono River", "Couffo River"],
        mountains: ["Atakora Mountains", "Mont Sokbaro"],
        deserts: [],
        forests: ["Pendjari National Park", "W National Park", "Lama Forest"],
        oceans: ["Atlantic Ocean", "Gulf of Guinea"]
    },

    culture: {
        officialLanguages: ["French"],
        languages: ["French", "Fon", "Yoruba", "Bariba", "Dendi", "Fulfulde"],
        religions: ["Christianity (52%)", "Islam (25%)", "Vodun (18%)", "Others (5%)"],
        heritageSites: ["Royal Palaces of Abomey"],
        festivals: ["Voodoo Day", "Independence Day", "National Youth Day", "Gelede Festival"],
        cuisine: ["Acarajé", "Yam Pottage", "Fufu", "Aloko", "Wagashi Cheese", "Red Red"],
        arts: ["Vodun Art", "Bronze Casting", "Appliqué Textiles", "Gelede Masks", "Traditional Dance"],
        sports: ["Football", "Athletics", "Basketball", "Boxing"]
    },

    symbols: {
        bird: "None Official",
        animal: "Leopard",
        flower: "None Official",
        tree: "Oil Palm",
        anthem: "L'Aube Nouvelle",
        motto: "Fellowship, Justice, Labour"
    },

    demographics: {
        lifeExpectancy: 62.77,
        literacyRate: "42.4%",
        urbanPopulation: "49.6%",
        medianAge: 19.0
    },

    history: {
        timeline: [
            { year: "1600s", title: "Kingdom of Dahomey", description: "Powerful kingdom emerged" },
            { year: "1851", title: "French Contact", description: "France established presence" },
            { year: "1894", title: "French Colony", description: "Became French Dahomey colony" },
            { year: "1960", title: "Independence", description: "Gained independence from France" },
            { year: "1975", title: "Marxist State", description: "Became People's Republic of Benin" },
            { year: "1990", title: "Democracy", description: "Transitioned to democracy" }
        ],
        notableFigures: ["Mathieu Kérékou", "Nicéphore Soglo", "Thomas Boni Yayi", "Patrice Talon"]
    },

    disputes: [],

    quickFacts: [
        { icon: "ghost", title: "Birthplace of Voodoo", text: "Origin of Vodun (Voodoo) religion" },
        { icon: "monument", title: "Slave Trade History", text: "Major departure point for Atlantic slave trade" },
        { icon: "graduation-cap", title: "National Voodoo Day", text: "Official public holiday (January 10)" },
        { icon: "crown", title: "Kingdom of Dahomey", text: "Home to powerful pre-colonial kingdom" },
        { icon: "tree", title: "Cotton Producer", text: "Major cotton exporter in West Africa" }
    ]
},

// 9. BURKINA FASO
{
    id: "BFA",
    name: "Burkina Faso",
    officialName: "Burkina Faso",
    flag: "https://flagcdn.com/w320/bf.png",
    
    images: {
        hero: "https://images.unsplash.com/photo-1590698933947-a202b069a861?w=1920&q=80",
        landscape: "https://images.unsplash.com/photo-1609969522872-5c0e3a0b8b03?w=1920&q=80",
        city: "https://images.unsplash.com/photo-1611348524140-53c9a25263d6?w=1920&q=80"
    },

    basic: {
        capital: "Ouagadougou",
        continent: "Africa",
        region: "West Africa",
        subregion: "Western Africa",
        population: 23251485,
        area: 274200,
        populationDensity: 85,
        independence: "1960",
        callingCode: "+226",
        tld: ".bf",
        drivingSide: "Right",
        electricity: "220V, 50Hz"
    },

    location: {
        coordinates: [12.2383, -1.5616],
        timezone: "UTC+0 (GMT)",
        neighbors: ["Mali", "Niger", "Benin", "Togo", "Ghana", "Ivory Coast"],
        borders: 3611,
        hemispheres: ["Northern", "Western"]
    },

    political: {
        government: "Unitary Provisional Military Government",
        headOfState: "Transitional President Ibrahim Traoré",
        headOfGovernment: "Prime Minister Joachim Kylem de Tambèla",
        legislature: "National Transitional Council",
        legalSystem: "Civil Law (French influence)",
        states: 13,
        regions: 13,
        largestCity: "Ouagadougou",
        organizations: ["UN", "AU", "ECOWAS", "Francophonie", "OIC", "AfCFTA"]
    },

    economy: {
        gdp: "$19.7 Billion",
        gdpPPP: "$53.3 Billion",
        gdpPerCapita: "$893",
        gdpRank: "#127",
        gdpGrowth: "4.2%",
        currency: "West African CFA Franc",
        currencyCode: "XOF",
        currencySymbol: "Fr",
        inflation: "14.3%",
        unemployment: "5.1%",
        majorSectors: ["Agriculture (31%)", "Services (44%)", "Industry (24%)"],
        industries: ["Cotton", "Gold Mining", "Agricultural Processing", "Soap", "Beverages", "Textiles"],
        exports: ["Gold", "Cotton", "Zinc Ore", "Cashews", "Sesame Seeds"],
        imports: ["Refined Petroleum", "Packaged Medicaments", "Cement", "Rice", "Cars"]
    },

    geography: {
        climate: "Tropical; Warm, Dry Winters; Hot, Wet Summers",
        avgTemperature: "28.3°C",
        annualRainfall: "748 mm",
        highestPoint: "Tena Kourou (749 m)",
        lowestPoint: "Mouhoun River (200 m)",
        coastline: "0 km (Landlocked)",
        forestCover: "20.4%",
        arableLand: "22.0%",
        terrain: "Mostly flat plains; some hills in west and southeast",
        naturalResources: ["Gold", "Manganese", "Zinc", "Limestone", "Marble", "Phosphates", "Pumice", "Salt"]
    },

    geography_links: {
        rivers: ["Mouhoun River (Black Volta)", "Nazinon River (Red Volta)", "Nakambé River (White Volta)"],
        mountains: ["Tena Kourou", "Pic de Nahouri"],
        deserts: ["Sahel Region"],
        forests: ["W National Park", "Arly National Park", "Kaboré Tambi National Park"],
        oceans: []
    },

    culture: {
        officialLanguages: ["French"],
        languages: ["French", "Mooré", "Dioula", "Fulfulde", "Gourmanchéma", "Bissa"],
        religions: ["Islam (63%)", "Christianity (26%)", "Traditional (7%)", "Others (4%)"],
        heritageSites: ["Ruins of Loropéni"],
        festivals: ["FESPACO (Film Festival)", "Independence Day", "National Culture Week", "Eid al-Fitr", "Eid al-Adha"],
        cuisine: ["Riz Gras", "Tô", "Babenda", "Poulet Bicyclette", "Riz Sauce", "Brochettes"],
        arts: ["Bronze Casting", "Basket Weaving", "Traditional Music", "Mask Making", "Cinema"],
        sports: ["Football", "Cycling", "Basketball", "Handball"]
    },

    symbols: {
        bird: "None Official",
        animal: "White Stallion",
        flower: "None Official",
        tree: "Shea Tree",
        anthem: "Une Seule Nuit",
        motto: "Unity, Progress, Justice"
    },

    demographics: {
        lifeExpectancy: 62.99,
        literacyRate: "41.2%",
        urbanPopulation: "31.9%",
        medianAge: 17.9
    },

    history: {
        timeline: [
            { year: "11th Century", title: "Mossi Kingdoms", description: "Mossi kingdoms established" },
            { year: "1896", title: "French Colony", description: "Became French protectorate" },
            { year: "1960", title: "Independence", description: "Gained independence as Upper Volta" },
            { year: "1984", title: "Name Change", description: "Renamed to Burkina Faso (Land of Upright People)" },
            { year: "1987", title: "Sankara Killed", description: "Thomas Sankara assassinated in coup" },
            { year: "2022", title: "Military Coup", description: "Military seized power" }
        ],
        notableFigures: ["Thomas Sankara", "Blaise Compaoré", "Maurice Yaméogo"]
    },

    disputes: [
        { name: "Jihadist Insurgency", description: "Ongoing terrorism and insurgency", type: "Internal" }
    ],

    quickFacts: [
        { icon: "film", title: "FESPACO", text: "Africa's largest film festival held biennially" },
        { icon: "gold", title: "Gold Production", text: "4th largest gold producer in Africa" },
        { icon: "bicycle", title: "Cycling Nation", text: "Tour du Faso - major African cycling race" },
        { icon: "star", title: "Thomas Sankara", text: "Legendary revolutionary leader (1983-1987)" },
        { icon: "tree", title: "Shea Butter", text: "Major producer of shea nuts and butter" }
    ]
},

// 10. CAPE VERDE
{
    id: "CPV",
    name: "Cape Verde",
    officialName: "Republic of Cabo Verde",
    flag: "https://flagcdn.com/w320/cv.png",
    
    images: {
        hero: "https://images.unsplash.com/photo-1587923188347-c4415c0d60c5?w=1920&q=80",
        landscape: "https://images.unsplash.com/photo-1590139714740-fd965eba04b5?w=1920&q=80",
        city: "https://images.unsplash.com/photo-1580837118756-c8d7e527cc6b?w=1920&q=80"
    },

    basic: {
        capital: "Praia",
        continent: "Africa",
        region: "West Africa",
        subregion: "Western Africa",
        population: 598682,
        area: 4033,
        populationDensity: 148,
        independence: "1975",
        callingCode: "+238",
        tld: ".cv",
        drivingSide: "Right",
        electricity: "220V, 50Hz"
    },

    location: {
        coordinates: [16.5388, -23.0418],
        timezone: "UTC-1 (CVT)",
        neighbors: [],
        borders: 0,
        hemispheres: ["Northern", "Western"],
        islandNation: true,
        islands: 10
    },

    political: {
        government: "Unitary Semi-Presidential Republic",
        headOfState: "President José Maria Neves",
        headOfGovernment: "Prime Minister Ulisses Correia e Silva",
        legislature: "National Assembly",
        legalSystem: "Civil Law (Portuguese influence)",
        states: 22,
        municipalities: 22,
        largestCity: "Praia",
        organizations: ["UN", "AU", "ECOWAS", "CPLP", "Francophonie", "AfCFTA"]
    },

    economy: {
        gdp: "$2.19 Billion",
        gdpPPP: "$4.68 Billion",
        gdpPerCapita: "$3,976",
        gdpRank: "#169",
        gdpGrowth: "17.2%",
        currency: "Cape Verdean Escudo",
        currencyCode: "CVE",
        currencySymbol: "$",
        inflation: "7.9%",
        unemployment: "12.2%",
        majorSectors: ["Services (73%)", "Industry (17%)", "Agriculture (9%)"],
        industries: ["Food Processing", "Beverages", "Fish Processing", "Shoes", "Garments", "Salt Mining", "Ship Repair", "Tourism"],
        exports: ["Frozen Fish", "Fish Products", "Shoes", "Garments", "Scrap Metals"],
        imports: ["Foodstuffs", "Industrial Products", "Transport Equipment", "Fuels"]
    },

    geography: {
        climate: "Temperate; Warm, Dry Summer; Moderate Rainfall",
        avgTemperature: "25°C",
        annualRainfall: "300 mm",
        highestPoint: "Pico do Fogo (2,829 m)",
        lowestPoint: "Atlantic Ocean (0 m)",
        coastline: "965 km",
        forestCover: "21.1%",
        arableLand: "11.7%",
        terrain: "Volcanic islands; rugged mountains",
        naturalResources: ["Salt", "Basalt Rock", "Limestone", "Kaolin", "Fish", "Clay"]
    },

    geography_links: {
        rivers: [],
        mountains: ["Pico do Fogo", "Mount Verde", "Tope de Coroa"],
        deserts: [],
        forests: ["Cloud Forests", "Dry Forests"],
        oceans: ["Atlantic Ocean"]
    },

    culture: {
        officialLanguages: ["Portuguese"],
        languages: ["Portuguese", "Cape Verdean Creole (Kriolu)"],
        religions: ["Roman Catholicism (77%)", "Protestantism (10%)", "Others (13%)"],
        heritageSites: ["Cidade Velha"],
        festivals: ["Carnival", "São João Festival", "Gamboa Festival", "Baía das Gatas Music Festival"],
        cuisine: ["Cachupa", "Caldo de Peixe", "Xerem", "Jagacida", "Pastel com Diabo Dentro"],
        arts: ["Morna Music", "Coladeira Dance", "Funaná Music", "Batuko Drumming"],
        sports: ["Football", "Surfing", "Windsurfing", "Basketball"]
    },

    symbols: {
        bird: "Cape Verde Warbler",
        animal: "None Official",
        flower: "None Official",
        tree: "Dragon Tree",
        anthem: "Cântico da Liberdade",
        motto: "Unity, Work, Progress"
    },

    demographics: {
        lifeExpectancy: 73.58,
        literacyRate: "90.8%",
        urbanPopulation: "66.7%",
        medianAge: 26.8
    },

    history: {
        timeline: [
            { year: "1456", title: "Portuguese Discovery", description: "Portuguese discovered uninhabited islands" },
            { year: "1460", title: "Settlement", description: "First permanent settlement established" },
            { year: "1587", title: "Slave Trade", description: "Became major slave trade center" },
            { year: "1951", title: "Overseas Province", description: "Became Portuguese overseas province" },
            { year: "1975", title: "Independence", description: "Gained independence from Portugal" },
            { year: "1990", title: "Democracy", description: "Multi-party democracy established" }
        ],
        notableFigures: ["Amílcar Cabral", "Aristides Pereira", "Cesária Évora", "Pedro Pires"]
    },

    disputes: [],

    quickFacts: [
        { icon: "music", title: "Cesária Évora", text: "Barefoot Diva - Queen of Morna music" },
        { icon: "ship", title: "Strategic Location", text: "Important Atlantic Ocean crossroads" },
        { icon: "graduation-cap", title: "High Literacy", text: "One of Africa's highest literacy rates (90%+)" },
        { icon: "volcano", title: "Active Volcano", text: "Pico do Fogo - active volcano" },
        { icon: "island", title: "Island Nation", text: "10 volcanic islands, 570 km off Senegal" }
    ]
},

// 11. IVORY COAST (CÔTE D'IVOIRE)
{
    id: "CIV",
    name: "Ivory Coast",
    officialName: "Republic of Côte d'Ivoire",
    flag: "https://flagcdn.com/w320/ci.png",
    
    images: {
        hero: "https://images.unsplash.com/photo-1594997280884-574b08c3d3ce?w=1920&q=80",
        landscape: "https://images.unsplash.com/photo-1609050644558-4bbce789666d?w=1920&q=80",
        city: "https://images.unsplash.com/photo-1580756475316-6e5b5df9e83e?w=1920&q=80"
    },

    basic: {
        capital: "Yamoussoukro (Political), Abidjan (Economic)",
        continent: "Africa",
        region: "West Africa",
        subregion: "Western Africa",
        population: 28873034,
        area: 322463,
        populationDensity: 90,
        independence: "1960",
        callingCode: "+225",
        tld: ".ci",
        drivingSide: "Right",
        electricity: "220V, 50Hz"
    },

    location: {
        coordinates: [7.5400, -5.5471],
        timezone: "UTC+0 (GMT)",
        neighbors: ["Liberia", "Guinea", "Mali", "Burkina Faso", "Ghana"],
        borders: 3458,
        hemispheres: ["Northern", "Western"]
    },

    political: {
        government: "Unitary Presidential Republic",
        headOfState: "President Alassane Ouattara",
        headOfGovernment: "Prime Minister Robert Beugré Mambé",
        legislature: "Parliament (National Assembly & Senate)",
        legalSystem: "Civil Law (French influence)",
        states: 14,
        districts: 14,
        largestCity: "Abidjan",
        organizations: ["UN", "AU", "ECOWAS", "Francophonie", "OIC", "AfCFTA"]
    },

    economy: {
        gdp: "$79.0 Billion",
        gdpPPP: "$171.1 Billion",
        gdpPerCapita: "$2,780",
        gdpRank: "#70",
        gdpGrowth: "6.7%",
        currency: "West African CFA Franc",
        currencyCode: "XOF",
        currencySymbol: "Fr",
        inflation: "5.3%",
        unemployment: "3.4%",
        majorSectors: ["Services (51%)", "Agriculture (20%)", "Industry (28%)"],
        industries: ["Foodstuffs", "Beverages", "Wood Products", "Oil Refining", "Gold Mining", "Truck Assembly", "Textiles", "Fertilizer", "Construction"],
        exports: ["Cocoa", "Gold", "Rubber", "Refined Petroleum", "Cashews", "Palm Oil"],
        imports: ["Crude Petroleum", "Rice", "Frozen Fish", "Packaged Medicaments", "Cars"]
    },

    geography: {
        climate: "Tropical along Coast; Semiarid in North",
        avgTemperature: "26.5°C",
        annualRainfall: "1,348 mm",
        highestPoint: "Mont Nimba (1,752 m)",
        lowestPoint: "Gulf of Guinea (0 m)",
        coastline: "515 km",
        forestCover: "32.7%",
        arableLand: "9.1%",
        terrain: "Coastal plains; plateaus; mountains in northwest",
        naturalResources: ["Petroleum", "Natural Gas", "Diamonds", "Manganese", "Iron Ore", "Cobalt", "Bauxite", "Copper", "Gold", "Nickel", "Tantalum", "Hydropower"]
    },

    geography_links: {
        rivers: ["Bandama River", "Sassandra River", "Comoé River", "Cavally River"],
        mountains: ["Mont Nimba", "Mont Tonkoui", "Dent de Man"],
        deserts: [],
        forests: ["Taï National Park", "Comoé National Park", "Marahoué National Park"],
        oceans: ["Atlantic Ocean", "Gulf of Guinea"]
    },

    culture: {
        officialLanguages: ["French"],
        languages: ["French", "Baoulé", "Dioula", "Dan", "Anyin", "Senufo"],
        religions: ["Islam (43%)", "Christianity (34%)", "Traditional (19%)", "Others (4%)"],
        heritageSites: ["Comoé National Park", "Taï National Park", "Mount Nimba Strict Nature Reserve", "Historic Town of Grand-Bassam"],
        festivals: ["FESPAM", "Abissa Festival", "Fêtes des Masques", "Carnival of Bouaké"],
        cuisine: ["Attiéké", "Kedjenou", "Aloco", "Garba", "Fufu", "Bangui", "Sauce Graine"],
        arts: ["Zouglou Music", "Coupé-Décalé", "Mask Carving", "Textile Weaving", "Kora Music"],
        sports: ["Football", "Basketball", "Rugby", "Athletics", "Handball"]
    },

    symbols: {
        bird: "White-cheeked Turaco",
        animal: "Elephant",
        flower: "None Official",
        tree: "None Official",
        anthem: "L'Abidjanaise",
        motto: "Unity, Discipline, Work"
    },

    demographics: {
        lifeExpectancy: 61.63,
        literacyRate: "89.9%",
        urbanPopulation: "52.7%",
        medianAge: 19.9
    },

    history: {
        timeline: [
            { year: "1400s", title: "Early Kingdoms", description: "Various kingdoms and empires existed" },
            { year: "1843", title: "French Contact", description: "France established coastal outposts" },
            { year: "1893", title: "French Colony", description: "Became French colony" },
            { year: "1960", title: "Independence", description: "Gained independence from France" },
            { year: "1983", title: "Capital Moved", description: "Capital moved to Yamoussoukro" },
            { year: "2002-2011", title: "Civil Wars", description: "Political crisis and civil conflict" },
            { year: "2011", title: "Reunification", description: "Country reunified after crisis" }
        ],
        notableFigures: ["Félix Houphouët-Boigny", "Alassane Ouattara", "Laurent Gbagbo", "Alpha Blondy"]
    },

    disputes: [],

    quickFacts: [
        { icon: "coffee", title: "Cocoa Leader", text: "World's largest cocoa producer (40%)" },
        { icon: "church", title: "Largest Basilica", text: "Basilica of Our Lady of Peace - world's largest" },
        { icon: "cashew", title: "Cashew Giant", text: "Top cashew nut producer globally" },
        { icon: "elephant", title: "Elephant Name", text: "Name means 'Ivory Coast' (elephant tusks)" },
        { icon: "chart-line", title: "Economic Hub", text: "Largest economy in Francophone West Africa" }
    ]
},

// 12. GAMBIA
{
    id: "GMB",
    name: "Gambia",
    officialName: "Republic of The Gambia",
    flag: "https://flagcdn.com/w320/gm.png",
    
    images: {
        hero: "https://images.unsplash.com/photo-1581552664069-e6d0be3f1b8f?w=1920&q=80",
        landscape: "https://images.unsplash.com/photo-1562504208-03d85cc8c23e?w=1920&q=80",
        city: "https://images.unsplash.com/photo-1580756475316-6e5b5df9e83e?w=1920&q=80"
    },

    basic: {
        capital: "Banjul",
        continent: "Africa",
        region: "West Africa",
        subregion: "Western Africa",
        population: 2773168,
        area: 10689,
        populationDensity: 261,
        independence: "1965",
        callingCode: "+220",
        tld: ".gm",
        drivingSide: "Right",
        electricity: "230V, 50Hz"
    },

    location: {
        coordinates: [13.4432, -15.3101],
        timezone: "UTC+0 (GMT)",
        neighbors: ["Senegal"],
        borders: 749,
        hemispheres: ["Northern", "Western"]
    },

    political: {
        government: "Unitary Presidential Republic",
        headOfState: "President Adama Barrow",
        headOfGovernment: "President Adama Barrow",
        legislature: "National Assembly",
        legalSystem: "Mixed (English Common Law, Islamic Law, Customary Law)",
        states: 6,
        regions: 6,
        largestCity: "Serekunda",
        organizations: ["UN", "AU", "ECOWAS", "Commonwealth", "OIC", "AfCFTA"]
    },

    economy: {
        gdp: "$2.24 Billion",
        gdpPPP: "$7.02 Billion",
        gdpPerCapita: "$836",
        gdpRank: "#174",
        gdpGrowth: "5.3%",
        currency: "Gambian Dalasi",
        currencyCode: "GMD",
        currencySymbol: "D",
        inflation: "17.0%",
        unemployment: "9.5%",
        majorSectors: ["Services (59%)", "Agriculture (20%)", "Industry (14%)"],
        industries: ["Peanuts Processing", "Fish Processing", "Tourism", "Beverages", "Agricultural Machinery", "Wood Working", "Metalworking", "Clothing"],
        exports: ["Cashews", "Peanuts", "Fish", "Cotton", "Palm Kernels", "Re-exports"],
        imports: ["Foodstuffs", "Manufactures", "Fuel", "Machinery", "Transport Equipment"]
    },

    geography: {
        climate: "Tropical; Hot, Rainy Season; Cooler, Dry Season",
        avgTemperature: "27.8°C",
        annualRainfall: "1,024 mm",
        highestPoint: "Unnamed (63 m)",
        lowestPoint: "Atlantic Ocean (0 m)",
        coastline: "80 km",
        forestCover: "48.1%",
        arableLand: "41.0%",
        terrain: "Flood plain of Gambia River; low hills",
        naturalResources: ["Fish", "Clay", "Silica Sand", "Titanium", "Tin", "Zircon"]
    },

    geography_links: {
        rivers: ["Gambia River"],
        mountains: [],
        deserts: [],
        forests: ["Mangrove Forests", "River Gallery Forests", "Abuko Nature Reserve"],
        oceans: ["Atlantic Ocean"]
    },

    culture: {
        officialLanguages: ["English"],
        languages: ["English", "Mandinka", "Wolof", "Fula", "Jola", "Serer"],
        religions: ["Islam (96%)", "Christianity (3%)", "Traditional (1%)"],
        heritageSites: ["Kunta Kinteh Island and Related Sites (James Island)"],
        festivals: ["Eid al-Fitr", "Eid al-Adha", "Independence Day", "Kankurang Festival", "Roots Homecoming Festival"],
        cuisine: ["Domoda", "Benachin", "Yassa", "Plasas", "Superkanja", "Chakery"],
        arts: ["Kora Music", "Djembe Drumming", "Kankurang Masquerade", "Batik Textiles", "Wood Carving"],
        sports: ["Football", "Wrestling", "Basketball", "Athletics"]
    },

    symbols: {
        bird: "None Official",
        animal: "Spotted Hyena",
        flower: "None Official",
        tree: "Oil Palm",
        anthem: "For The Gambia Our Homeland",
        motto: "Progress, Peace, Prosperity"
    },

    demographics: {
        lifeExpectancy: 63.22,
        literacyRate: "58.1%",
        urbanPopulation: "64.5%",
        medianAge: 17.8
    },

    history: {
        timeline: [
            { year: "13th Century", title: "Mali Empire", description: "Part of Mali Empire" },
            { year: "1455", title: "Portuguese Contact", description: "Portuguese explorers arrived" },
            { year: "1765", title: "British Colony", description: "Became British colony" },
            { year: "1965", title: "Independence", description: "Gained independence from Britain" },
            { year: "1970", title: "Republic", description: "Became republic" },
            { year: "1994", title: "Military Coup", description: "Yahya Jammeh seized power" },
            { year: "2017", title: "Democratic Transition", description: "Adama Barrow elected; Jammeh exiled" }
        ],
        notableFigures: ["Dawda Jawara", "Yahya Jammeh", "Adama Barrow", "Kunta Kinteh"]
    },

    disputes: [],

    quickFacts: [
        { icon: "map", title: "Smallest Mainland", text: "Smallest country in mainland Africa" },
        { icon: "water", title: "River Nation", text: "Entirely surrounds Gambia River" },
        { icon: "book", title: "Roots Heritage", text: "Kunta Kinteh's homeland (Alex Haley's 'Roots')" },
        { icon: "bird", title: "Birdwatching Paradise", text: "Over 500 bird species" },
        { icon: "peanut", title: "Peanut Economy", text: "Peanuts are major export crop" }
    ]
},

// 13. GHANA
{
    id: "GHA",
    name: "Ghana",
    officialName: "Republic of Ghana",
    flag: "https://flagcdn.com/w320/gh.png",
    
    images: {
        hero: "https://images.unsplash.com/photo-1580756475316-6e5b5df9e83e?w=1920&q=80",
        landscape: "https://images.unsplash.com/photo-1609050644558-4bbce789666d?w=1920&q=80",
        city: "https://images.unsplash.com/photo-1568322445389-f64ac2515020?w=1920&q=80"
    },

    basic: {
        capital: "Accra",
        continent: "Africa",
        region: "West Africa",
        subregion: "Western Africa",
        population: 34121985,
        area: 238533,
        populationDensity: 143,
        independence: "1957",
        callingCode: "+233",
        tld: ".gh",
        drivingSide: "Right",
        electricity: "230V, 50Hz"
    },

    location: {
        coordinates: [7.9465, -1.0232],
        timezone: "UTC+0 (GMT)",
        neighbors: ["Ivory Coast", "Burkina Faso", "Togo"],
        borders: 2420,
        hemispheres: ["Northern", "Western"]
    },

    political: {
        government: "Unitary Presidential Constitutional Republic",
        headOfState: "President John Dramani Mahama",
        headOfGovernment: "President John Dramani Mahama",
        legislature: "Parliament",
        legalSystem: "Mixed (English Common Law and Customary Law)",
        states: 16,
        regions: 16,
        largestCity: "Accra",
        organizations: ["UN", "AU", "ECOWAS", "Commonwealth", "NAM", "AfCFTA"]
    },

    economy: {
        gdp: "$76.6 Billion",
        gdpPPP: "$221.6 Billion",
        gdpPerCapita: "$2,445",
        gdpRank: "#71",
        gdpGrowth: "2.9%",
        currency: "Ghanaian Cedi",
        currencyCode: "GHS",
        currencySymbol: "₵",
        inflation: "54.1%",
        unemployment: "4.5%",
        majorSectors: ["Services (47%)", "Industry (35%)", "Agriculture (18%)"],
        industries: ["Mining", "Lumbering", "Light Manufacturing", "Aluminum Smelting", "Food Processing", "Cement", "Small Commercial Ship Building", "Petroleum"],
        exports: ["Gold", "Crude Petroleum", "Cocoa", "Cashews", "Manganese", "Timber"],
        imports: ["Refined Petroleum", "Cars", "Rice", "Delivery Trucks", "Packaged Medicaments"]
    },

    geography: {
        climate: "Tropical; Warm and Humid; Two Rainy Seasons",
        avgTemperature: "26.5°C",
        annualRainfall: "1,187 mm",
        highestPoint: "Mount Afadja (885 m)",
        lowestPoint: "Gulf of Guinea (0 m)",
        coastline: "539 km",
        forestCover: "41.7%",
        arableLand: "20.7%",
        terrain: "Coastal plains; hills; forests; Lake Volta",
        naturalResources: ["Gold", "Timber", "Industrial Diamonds", "Bauxite", "Manganese", "Fish", "Rubber", "Hydropower", "Petroleum", "Silver", "Salt", "Limestone"]
    },

    geography_links: {
        rivers: ["Volta River", "Pra River", "Ankobra River", "Tano River"],
        mountains: ["Mount Afadja", "Kwahu Plateau", "Akwapim-Togo Ranges"],
        deserts: [],
        forests: ["Kakum National Park", "Bia National Park", "Digya National Park", "Mole National Park"],
        oceans: ["Atlantic Ocean", "Gulf of Guinea"]
    },

    culture: {
        officialLanguages: ["English"],
        languages: ["English", "Akan (Twi, Fante)", "Ewe", "Ga", "Dagbani", "Hausa"],
        religions: ["Christianity (72%)", "Islam (18%)", "Traditional (5%)", "Others (5%)"],
        heritageSites: ["Forts and Castles, Volta, Greater Accra, Central and Western Regions", "Asante Traditional Buildings"],
        festivals: ["Homowo", "Aboakyir", "Adae Kese", "Odwira", "Hogbetsotso", "Damba"],
        cuisine: ["Jollof Rice", "Waakye", "Fufu", "Banku", "Red Red", "Kenkey", "Groundnut Soup"],
        arts: ["Kente Cloth", "Adinkra Symbols", "Highlife Music", "Hiplife", "Azonto Dance", "Wood Carving"],
        sports: ["Football", "Boxing", "Athletics", "Basketball"]
    },

    symbols: {
        bird: "Tawny Eagle",
        animal: "None Official",
        flower: "None Official",
        tree: "Teak",
        anthem: "God Bless Our Homeland Ghana",
        motto: "Freedom and Justice"
    },

    demographics: {
        lifeExpectancy: 65.44,
        literacyRate: "79.0%",
        urbanPopulation: "58.6%",
        medianAge: 21.1
    },

    history: {
        timeline: [
            { year: "4th Century", title: "Ghana Empire", description: "Ancient Ghana Empire in region (different location)" },
            { year: "1471", title: "Portuguese Arrival", description: "Portuguese reached Gold Coast" },
            { year: "1874", title: "British Colony", description: "Gold Coast became British colony" },
            { year: "1957", title: "Independence", description: "First sub-Saharan African nation to gain independence" },
            { year: "1960", title: "Republic", description: "Became republic under Kwame Nkrumah" },
            { year: "1992", title: "Democracy", description: "Fourth Republic; return to democracy" }
        ],
        notableFigures: ["Kwame Nkrumah", "Kofi Annan", "Jerry Rawlings", "John Atta Mills", "Yaa Asantewaa"]
    },

    disputes: [],

    quickFacts: [
        { icon: "flag", title: "First Independence", text: "First sub-Saharan African nation independent (1957)" },
        { icon: "gold", title: "Gold Coast", text: "Major gold producer; formerly Gold Coast" },
        { icon: "coffee", title: "Cocoa Power", text: "2nd largest cocoa producer globally" },
        { icon: "peace", title: "Kofi Annan", text: "Birthplace of UN Secretary-General Kofi Annan" },
        { icon: "tshirt", title: "Kente Cloth", text: "Famous for colorful Kente cloth" }
    ]
},

// 14. GUINEA
{
    id: "GIN",
    name: "Guinea",
    officialName: "Republic of Guinea",
    flag: "https://flagcdn.com/w320/gn.png",
    
    images: {
        hero: "https://images.unsplash.com/photo-1609050644558-4bbce789666d?w=1920&q=80",
        landscape: "https://images.unsplash.com/photo-1580756475316-6e5b5df9e83e?w=1920&q=80",
        city: "https://images.unsplash.com/photo-1568322445389-f64ac2515020?w=1920&q=80"
    },

    basic: {
        capital: "Conakry",
        continent: "Africa",
        region: "West Africa",
        subregion: "Western Africa",
        population: 14190612,
        area: 245857,
        populationDensity: 58,
        independence: "1958",
        callingCode: "+224",
        tld: ".gn",
        drivingSide: "Right",
        electricity: "220V, 50Hz"
    },

    location: {
        coordinates: [9.9456, -9.6966],
        timezone: "UTC+0 (GMT)",
        neighbors: ["Guinea-Bissau", "Senegal", "Mali", "Ivory Coast", "Liberia", "Sierra Leone"],
        borders: 4046,
        hemispheres: ["Northern", "Western"]
    },

    political: {
        government: "Unitary Presidential Republic",
        headOfState: "Transitional President Mamadi Doumbouya",
        headOfGovernment: "Prime Minister Amadou Oury Bah",
        legislature: "National Transitional Council",
        legalSystem: "Civil Law (French influence) and Customary Law",
        states: 8,
        regions: 8,
        largestCity: "Conakry",
        organizations: ["UN", "AU", "ECOWAS", "OIC", "Francophonie", "AfCFTA"]
    },

    economy: {
        gdp: "$21.2 Billion",
        gdpPPP: "$46.0 Billion",
        gdpPerCapita: "$1,607",
        gdpRank: "#125",
        gdpGrowth: "5.6%",
        currency: "Guinean Franc",
        currencyCode: "GNF",
        currencySymbol: "Fr",
        inflation: "10.5%",
        unemployment: "4.3%",
        majorSectors: ["Services (44%)", "Industry (32%)", "Agriculture (20%)"],
        industries: ["Bauxite", "Gold", "Diamonds", "Iron Ore", "Light Manufacturing", "Agricultural Processing"],
        exports: ["Gold", "Aluminum Ore", "Frozen Fish", "Coconuts/Brazil Nuts/Cashews", "Petroleum Gas"],
        imports: ["Rice", "Refined Petroleum", "Packaged Medicaments", "Cars", "Delivery Trucks"]
    },

    geography: {
        climate: "Tropical; Hot and Humid; Monsoon-type Rainy Season",
        avgTemperature: "26.1°C",
        annualRainfall: "1,651 mm (Conakry: 4,341 mm)",
        highestPoint: "Mount Nimba (1,752 m)",
        lowestPoint: "Atlantic Ocean (0 m)",
        coastline: "320 km",
        forestCover: "26.6%",
        arableLand: "11.8%",
        terrain: "Coastal plain; mountains; savanna interior; forest region",
        naturalResources: ["Bauxite", "Iron Ore", "Diamonds", "Gold", "Uranium", "Hydropower", "Fish", "Salt"]
    },

    geography_links: {
        rivers: ["Niger River", "Gambia River", "Senegal River", "Konkouré River"],
        mountains: ["Mount Nimba", "Fouta Djallon Highlands", "Guinea Highlands"],
        deserts: [],
        forests: ["Mount Nimba Strict Nature Reserve", "Ziama Massif", "Diécké Forest"],
        oceans: ["Atlantic Ocean"]
    },

    culture: {
        officialLanguages: ["French"],
        languages: ["French", "Pular", "Maninka", "Susu", "Kissi", "Toma"],
        religions: ["Islam (89%)", "Christianity (7%)", "Traditional (2%)", "Others (2%)"],
        heritageSites: ["Mount Nimba Strict Nature Reserve"],
        festivals: ["Independence Day", "Eid al-Fitr", "Eid al-Adha", "Tabaski", "Fête de la Révolution"],
        cuisine: ["Fou Fou", "Jollof Rice", "Poulet Yassa", "Sauce Arachide", "Boiled Cassava Leaves", "Konkoé"],
        arts: ["Balafon Music", "Kora Music", "Djembe Drumming", "Traditional Dance", "Mask Making"],
        sports: ["Football", "Basketball", "Handball", "Athletics"]
    },

    symbols: {
        bird: "None Official",
        animal: "None Official",
        flower: "None Official",
        tree: "None Official",
        anthem: "Liberté",
        motto: "Work, Justice, Solidarity"
    },

    demographics: {
        lifeExpectancy: 63.52,
        literacyRate: "45.3%",
        urbanPopulation: "37.7%",
        medianAge: 19.1
    },

    history: {
        timeline: [
            { year: "900s", title: "Ghana Empire", description: "Part of Ghana Empire" },
            { year: "1235", title: "Mali Empire", description: "Became part of Mali Empire" },
            { year: "1890s", title: "French Colony", description: "France colonized Guinea" },
            { year: "1958", title: "Independence", description: "First French African colony to gain independence" },
            { year: "1958-1984", title: "Sékou Touré", description: "Ahmed Sékou Touré's authoritarian rule" },
            { year: "2021", title: "Military Coup", description: "Military seized power" }
        ],
        notableFigures: ["Ahmed Sékou Touré", "Lansana Conté", "Alpha Condé", "Mamadi Doumbouya"]
    },

    disputes: [],

    quickFacts: [
        { icon: "gem", title: "Bauxite Giant", text: "World's largest bauxite reserves (25%+)" },
        { icon: "water", title: "Water Tower", text: "'Water Tower of West Africa' - major rivers originate" },
        { icon: "flag", title: "First French Independence", text: "First French colony in Africa to gain independence" },
        { icon: "mountain", title: "Mount Nimba", text: "UNESCO World Heritage biodiversity hotspot" },
        { icon: "music", title: "Djembe Origin", text: "Birthplace of the djembe drum" }
    ]
},

// 15. GUINEA-BISSAU
{
    id: "GNB",
    name: "Guinea-Bissau",
    officialName: "Republic of Guinea-Bissau",
    flag: "https://flagcdn.com/w320/gw.png",
    
    images: {
        hero: "https://images.unsplash.com/photo-1580756475316-6e5b5df9e83e?w=1920&q=80",
        landscape: "https://images.unsplash.com/photo-1609050644558-4bbce789666d?w=1920&q=80",
        city: "https://images.unsplash.com/photo-1568322445389-f64ac2515020?w=1920&q=80"
    },

    basic: {
        capital: "Bissau",
        continent: "Africa",
        region: "West Africa",
        subregion: "Western Africa",
        population: 2150842,
        area: 36125,
        populationDensity: 70,
        independence: "1973",
        callingCode: "+245",
        tld: ".gw",
        drivingSide: "Right",
        electricity: "220V, 50Hz"
    },

    location: {
        coordinates: [11.8037, -15.1804],
        timezone: "UTC+0 (GMT)",
        neighbors: ["Senegal", "Guinea"],
        borders: 762,
        hemispheres: ["Northern", "Western"]
    },

    political: {
        government: "Unitary Semi-Presidential Republic",
        headOfState: "President Umaro Sissoco Embaló",
        headOfGovernment: "Prime Minister Rui Duarte de Barros",
        legislature: "National People's Assembly",
        legalSystem: "Mixed (Civil Law and Customary Law)",
        states: 9,
        regions: 9,
        largestCity: "Bissau",
        organizations: ["UN", "AU", "ECOWAS", "CPLP", "OIC", "Francophonie", "AfCFTA"]
    },

    economy: {
        gdp: "$1.91 Billion",
        gdpPPP: "$4.71 Billion",
        gdpPerCapita: "$927",
        gdpRank: "#177",
        gdpGrowth: "4.2%",
        currency: "West African CFA Franc",
        currencyCode: "XOF",
        currencySymbol: "Fr",
        inflation: "7.9%",
        unemployment: "6.3%",
        majorSectors: ["Agriculture (44%)", "Services (43%)", "Industry (13%)"],
        industries: ["Agricultural Processing", "Beer", "Soft Drinks", "Cashew Processing"],
        exports: ["Cashews", "Fish", "Peanuts", "Timber", "Palm Kernels"],
        imports: ["Foodstuffs", "Machinery", "Transport Equipment", "Petroleum Products"]
    },

    geography: {
        climate: "Tropical; Hot, Humid; Monsoon Rains",
        avgTemperature: "27.0°C",
        annualRainfall: "2,024 mm",
        highestPoint: "Unnamed (300 m)",
        lowestPoint: "Atlantic Ocean (0 m)",
        coastline: "350 km",
        forestCover: "73.7%",
        arableLand: "10.6%",
        terrain: "Low coastal plain; savanna in east",
        naturalResources: ["Fish", "Timber", "Phosphates", "Bauxite", "Clay", "Granite", "Limestone", "Unexploited Petroleum"]
    },

    geography_links: {
        rivers: ["Geba River", "Corubal River", "Cacheu River"],
        mountains: [],
        deserts: [],
        forests: ["Cantanhez Forest", "Dulombi-Boe National Park", "Mangrove Forests"],
        oceans: ["Atlantic Ocean"]
    },

    culture: {
        officialLanguages: ["Portuguese"],
        languages: ["Portuguese", "Crioulo", "Balanta", "Fula", "Mandinka", "Papel"],
        religions: ["Islam (46%)", "Christianity (19%)", "Traditional (31%)", "Others (4%)"],
        heritageSites: [],
        festivals: ["Independence Day", "Carnival", "Amilcar Cabral Day", "Eid al-Fitr", "Eid al-Adha"],
        cuisine: ["Jollof Rice", "Caldo de Mancarra", "Cabidela", "Canja", "Cachupa"],
        arts: ["Gumbe Music", "Traditional Drumming", "Kussundé Dance", "Basket Weaving"],
        sports: ["Football", "Basketball", "Wrestling"]
    },

    symbols: {
        bird: "None Official",
        animal: "None Official",
        flower: "None Official",
        tree: "None Official",
        anthem: "Esta É a Nossa Pátria Bem Amada",
        motto: "Unity, Struggle, Progress"
    },

    demographics: {
        lifeExpectancy: 63.07,
        literacyRate: "59.9%",
        urbanPopulation: "45.2%",
        medianAge: 19.5
    },

    history: {
        timeline: [
            { year: "1446", title: "Portuguese Arrival", description: "Portuguese explorers reached area" },
            { year: "1879", title: "Separate Colony", description: "Separated from Cape Verde as Portuguese Guinea" },
            { year: "1956", title: "Independence Movement", description: "PAIGC founded by Amílcar Cabral" },
            { year: "1973", title: "Independence", description: "Declared independence; recognized 1974" },
            { year: "1998-1999", title: "Civil War", description: "Brief civil war" },
            { year: "2012", title: "Military Coup", description: "Military coup disrupted elections" }
        ],
        notableFigures: ["Amílcar Cabral", "Luís Cabral", "João Bernardo Vieira", "Umaro Sissoco Embaló"]
    },

    disputes: [],

    quickFacts: [
        { icon: "cashew", title: "Cashew Capital", text: "6th largest cashew producer globally" },
        { icon: "island", title: "Bijagós Islands", text: "88 islands; UNESCO Biosphere Reserve" },
        { icon: "flag", title: "Political Instability", text: "No elected president has served full term" },
        { icon: "tree", title: "Forest Cover", text: "High forest coverage (73%+)" },
        { icon: "fish", title: "Rich Waters", text: "Abundant marine resources" }
    ]
},

// 16. LIBERIA
{
    id: "LBR",
    name: "Liberia",
    officialName: "Republic of Liberia",
    flag: "https://flagcdn.com/w320/lr.png",
    
    images: {
        hero: "https://images.unsplash.com/photo-1580756475316-6e5b5df9e83e?w=1920&q=80",
        landscape: "https://images.unsplash.com/photo-1609050644558-4bbce789666d?w=1920&q=80",
        city: "https://images.unsplash.com/photo-1568322445389-f64ac2515020?w=1920&q=80"
    },

    basic: {
        capital: "Monrovia",
        continent: "Africa",
        region: "West Africa",
        subregion: "Western Africa",
        population: 5418377,
        area: 111369,
        populationDensity: 49,
        independence: "1847",
        callingCode: "+231",
        tld: ".lr",
        drivingSide: "Right",
        electricity: "120V/220V, 50/60Hz"
    },

    location: {
        coordinates: [6.4281, -9.4295],
        timezone: "UTC+0 (GMT)",
        neighbors: ["Sierra Leone", "Guinea", "Ivory Coast"],
        borders: 1667,
        hemispheres: ["Northern", "Western"]
    },

    political: {
        government: "Unitary Presidential Constitutional Republic",
        headOfState: "President Joseph Boakai",
        headOfGovernment: "President Joseph Boakai",
        legislature: "Legislature (Senate & House of Representatives)",
        legalSystem: "Mixed (Anglo-American Common Law and Customary Law)",
        states: 15,
        counties: 15,
        largestCity: "Monrovia",
        organizations: ["UN", "AU", "ECOWAS", "Mano River Union", "AfCFTA"]
    },

    economy: {
        gdp: "$4.33 Billion",
        gdpPPP: "$8.05 Billion",
        gdpPerCapita: "$1,645",
        gdpRank: "#162",
        gdpGrowth: "4.8%",
        currency: "Liberian Dollar",
        currencyCode: "LRD",
        currencySymbol: "$",
        inflation: "7.3%",
        unemployment: "2.8%",
        majorSectors: ["Services (57%)", "Agriculture (34%)", "Industry (9%)"],
        industries: ["Mining (Iron Ore, Gold, Diamonds)", "Rubber Processing", "Palm Oil Processing", "Timber", "Diamonds"],
        exports: ["Ships", "Gold", "Iron Ore", "Rubber", "Crude Petroleum", "Cocoa"],
        imports: ["Ships", "Refined Petroleum", "Rice", "Cement", "Cars"]
    },

    geography: {
        climate: "Tropical; Hot, Humid; Dry Winters; Wet Summers",
        avgTemperature: "25.8°C",
        annualRainfall: "5,131 mm (Monrovia - one of wettest capitals)",
        highestPoint: "Mount Wuteve (1,447 m)",
        lowestPoint: "Atlantic Ocean (0 m)",
        coastline: "579 km",
        forestCover: "44.6%",
        arableLand: "5.0%",
        terrain: "Coastal plains; rolling plateau; mountains in northeast",
        naturalResources: ["Iron Ore", "Timber", "Diamonds", "Gold", "Hydropower"]
    },

    geography_links: {
        rivers: ["Saint Paul River", "Lofa River", "Saint John River", "Cavalla River"],
        mountains: ["Mount Wuteve", "Mount Nimba", "Wologizi Mountains", "Putu Range"],
        deserts: [],
        forests: ["Sapo National Park", "Gola Forest", "East Nimba Nature Reserve", "Grebo National Forest"],
        oceans: ["Atlantic Ocean"]
    },

    culture: {
        officialLanguages: ["English"],
        languages: ["English", "Liberian English", "Kpelle", "Bassa", "Grebo", "Dan", "Kru", "Mano", "Loma"],
        religions: ["Christianity (86%)", "Islam (12%)", "Traditional (2%)"],
        heritageSites: [],
        festivals: ["Independence Day", "Thanksgiving Day", "National Redemption Day", "Pioneers' Day"],
        cuisine: ["Dumboy", "Fufu", "Jollof Rice", "Palava Sauce", "Pepper Soup", "Cassava Leaf"],
        arts: ["Highlife Music", "Hipco (Hip-Hop)", "Traditional Mask Dance", "Sande Society Masks"],
        sports: ["Football", "Basketball", "Athletics"]
    },

    symbols: {
        bird: "Garden Bulbul",
        animal: "None Official",
        flower: "Pepper Bird",
        tree: "Palm Tree",
        anthem: "All Hail, Liberia, Hail!",
        motto: "The Love of Liberty Brought Us Here"
    },

    demographics: {
        lifeExpectancy: 65.13,
        literacyRate: "48.3%",
        urbanPopulation: "53.6%",
        medianAge: 18.2
    },

    history: {
        timeline: [
            { year: "1822", title: "American Colonization", description: "Freed American slaves settled" },
            { year: "1847", title: "Independence", description: "Africa's first republic declared" },
            { year: "1980", title: "Military Coup", description: "Samuel Doe seized power" },
            { year: "1989-1996", title: "First Civil War", description: "Brutal civil war erupted" },
            { year: "1999-2003", title: "Second Civil War", description: "Second civil war" },
            { year: "2006", title: "Ellen Johnson Sirleaf", description: "First elected female African head of state" },
            { year: "2018", title: "George Weah", description: "Former footballer became president" }
        ],
        notableFigures: ["Joseph Jenkins Roberts", "Ellen Johnson Sirleaf", "George Weah", "Samuel Doe", "Charles Taylor"]
    },

    disputes: [],

    quickFacts: [
        { icon: "flag", title: "Never Colonized", text: "Founded by freed American slaves (1822)" },
        { icon: "female", title: "First Female President", text: "Ellen Johnson Sirleaf (2006-2018)" },
        { icon: "futbol", title: "George Weah", text: "Only African FIFA World Player of Year (president 2018-2024)" },
        { icon: "ship", title: "Flag of Convenience", text: "2nd largest ship registry globally" },
        { icon: "cloud-rain", title: "Wettest Capital", text: "Monrovia is one of world's wettest capitals" }
    ]
},

// 17. MALI
{
    id: "MLI",
    name: "Mali",
    officialName: "Republic of Mali",
    flag: "https://flagcdn.com/w320/ml.png",
    
    images: {
        hero: "https://images.unsplash.com/photo-1568322445389-f64ac2515020?w=1920&q=80",
        landscape: "https://images.unsplash.com/photo-1580756475316-6e5b5df9e83e?w=1920&q=80",
        city: "https://images.unsplash.com/photo-1609050644558-4bbce789666d?w=1920&q=80"
    },

    basic: {
        capital: "Bamako",
        continent: "Africa",
        region: "West Africa",
        subregion: "Western Africa",
        population: 23293698,
        area: 1240192,
        populationDensity: 19,
        independence: "1960",
        callingCode: "+223",
        tld: ".ml",
        drivingSide: "Right",
        electricity: "220V, 50Hz"
    },

    location: {
        coordinates: [17.5707, -3.9962],
        timezone: "UTC+0 (GMT)",
        neighbors: ["Algeria", "Niger", "Burkina Faso", "Ivory Coast", "Guinea", "Senegal", "Mauritania"],
        borders: 7908,
        hemispheres: ["Northern", "Western"]
    },

    political: {
        government: "Unitary Provisional Military Government",
        headOfState: "Transitional President Assimi Goïta",
        headOfGovernment: "Prime Minister Choguel Kokalla Maïga",
        legislature: "National Transitional Council",
        legalSystem: "Civil Law (French influence) and Customary Law",
        states: 10,
        regions: 10,
        largestCity: "Bamako",
        organizations: ["UN", "AU", "ECOWAS (Suspended)", "Francophonie", "OIC", "AfCFTA"]
    },

    economy: {
        gdp: "$19.1 Billion",
        gdpPPP: "$55.0 Billion",
        gdpPerCapita: "$924",
        gdpRank: "#131",
        gdpGrowth: "3.7%",
        currency: "West African CFA Franc",
        currencyCode: "XOF",
        currencySymbol: "Fr",
        inflation: "9.6%",
        unemployment: "7.9%",
        majorSectors: ["Agriculture (38%)", "Services (42%)", "Industry (20%)"],
        industries: ["Food Processing", "Construction", "Phosphate Mining", "Gold Mining", "Cotton"],
        exports: ["Gold", "Cotton", "Fertilizers", "Live Animals", "Oil Seeds"],
        imports: ["Refined Petroleum", "Packaged Medicaments", "Cars", "Cement", "Rice"]
    },

    geography: {
        climate: "Subtropical to Arid; Hot, Dry; Rainy Summer",
        avgTemperature: "28.8°C",
        annualRainfall: "347 mm",
        highestPoint: "Hombori Tondo (1,155 m)",
        lowestPoint: "Senegal River (23 m)",
        coastline: "0 km (Landlocked)",
        forestCover: "10.2%",
        arableLand: "5.6%",
        terrain: "Sahara Desert in north; Niger River valley; savanna",
        naturalResources: ["Gold", "Phosphates", "Kaolin", "Salt", "Limestone", "Uranium", "Gypsum", "Granite", "Hydropower"]
    },

    geography_links: {
        rivers: ["Niger River", "Senegal River", "Bani River"],
        mountains: ["Hombori Tondo", "Adrar des Ifoghas"],
        deserts: ["Sahara Desert", "Azawad"],
        forests: ["Boucle du Baoulé National Park"],
        oceans: []
    },

    culture: {
        officialLanguages: ["French"],
        languages: ["French", "Bambara", "Fula", "Songhai", "Tamasheq", "Soninke", "Dogon"],
        religions: ["Islam (95%)", "Christianity (2.4%)", "Traditional (2%)"],
        heritageSites: ["Old Towns of Djenné", "Timbuktu", "Cliff of Bandiagara (Land of the Dogons)", "Tomb of Askia"],
        festivals: ["Festival au Désert", "Festival sur le Niger", "Independence Day", "Eid al-Fitr", "Tabaski"],
        cuisine: ["Tiguadege Na", "Maafe", "Fufu", "Jollof Rice", "To", "Capitaine Fish"],
        arts: ["Kora Music", "Ngoni Music", "Bogolan (Mud Cloth)", "Dogon Art", "Djembe Drumming"],
        sports: ["Football", "Basketball", "Athletics", "Wrestling"]
    },

    symbols: {
        bird: "None Official",
        animal: "None Official",
        flower: "Cotton Flower",
        tree: "None Official",
        anthem: "Le Mali",
        motto: "One People, One Goal, One Faith"
    },

    demographics: {
        lifeExpectancy: 60.83,
        literacyRate: "35.5%",
        urbanPopulation: "45.3%",
        medianAge: 16.4
    },

    history: {
        timeline: [
            { year: "300 CE", title: "Ghana Empire", description: "Ancient Ghana Empire flourished" },
            { year: "1235", title: "Mali Empire", description: "Sundiata Keita founded Mali Empire" },
            { year: "1464", title: "Songhai Empire", description: "Songhai Empire rose to power" },
            { year: "1892", title: "French Colony", description: "Became French Sudan" },
            { year: "1960", title: "Independence", description: "Gained independence from France" },
            { year: "2012", title: "Tuareg Rebellion", description: "Northern rebellion; military coup" },
            { year: "2020-2021", title: "Military Coups", description: "Two military coups" }
        ],
        notableFigures: ["Sundiata Keita", "Mansa Musa", "Modibo Keïta", "Amadou Toumani Touré", "Assimi Goïta"]
    },

    disputes: [
        { name: "Northern Insurgency", description: "Ongoing jihadist and separatist conflicts", type: "Internal" }
    ],

    quickFacts: [
        { icon: "landmark", title: "Timbuktu", text: "Ancient center of Islamic learning and trade" },
        { icon: "crown", title: "Mansa Musa", text: "Wealthiest person in history ruled Mali Empire" },
        { icon: "gold", title: "Gold Producer", text: "3rd largest gold producer in Africa" },
        { icon: "book", title: "Manuscripts", text: "Thousands of ancient manuscripts preserved" },
        { icon: "music", title: "Music Heritage", text: "Birthplace of kora and djembe traditions" }
    ]
},

// 18. MAURITANIA
{
    id: "MRT",
    name: "Mauritania",
    officialName: "Islamic Republic of Mauritania",
    flag: "https://flagcdn.com/w320/mr.png",
    
    images: {
        hero: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=1920&q=80",
        landscape: "https://images.unsplash.com/photo-1509023464722-18d996393ca8?w=1920&q=80",
        city: "https://images.unsplash.com/photo-1568322445389-f64ac2515020?w=1920&q=80"
    },

    basic: {
        capital: "Nouakchott",
        continent: "Africa",
        region: "West Africa",
        subregion: "Western Africa",
        population: 4862989,
        area: 1030700,
        populationDensity: 5,
        independence: "1960",
        callingCode: "+222",
        tld: ".mr",
        drivingSide: "Right",
        electricity: "220V, 50Hz"
    },

    location: {
        coordinates: [21.0079, -10.9408],
        timezone: "UTC+0 (GMT)",
        neighbors: ["Morocco/Western Sahara", "Algeria", "Mali", "Senegal"],
        borders: 5002,
        hemispheres: ["Northern", "Western"]
    },

    political: {
        government: "Unitary Semi-Presidential Islamic Republic",
        headOfState: "President Mohamed Ould Ghazouani",
        headOfGovernment: "Prime Minister Mohamed Ould Bilal",
        legislature: "Parliament (National Assembly & Senate)",
        legalSystem: "Islamic Law (Sharia) and French Civil Law",
        states: 15,
        regions: 15,
        largestCity: "Nouakchott",
        organizations: ["UN", "AU", "Arab League", "OIC", "AfCFTA", "UMA"]
    },

    economy: {
        gdp: "$10.3 Billion",
        gdpPPP: "$28.3 Billion",
        gdpPerCapita: "$2,244",
        gdpRank: "#149",
        gdpGrowth: "4.4%",
        currency: "Mauritanian Ouguiya",
        currencyCode: "MRU",
        currencySymbol: "UM",
        inflation: "9.5%",
        unemployment: "11.7%",
        majorSectors: ["Services (48%)", "Industry (30%)", "Agriculture (20%)"],
        industries: ["Fish Processing", "Mining (Iron Ore, Gold, Copper)", "Petroleum"],
        exports: ["Iron Ore", "Gold", "Frozen Fish", "Copper Ore", "Molluscs"],
        imports: ["Ships", "Refined Petroleum", "Wheat", "Raw Sugar", "Cars"]
    },

    geography: {
        climate: "Desert; Hot, Dry; Brief Rainy Season",
        avgTemperature: "28.4°C",
        annualRainfall: "92 mm",
        highestPoint: "Kediet Ijill (915 m)",
        lowestPoint: "Sebkha de Ndrhamcha (-5 m)",
        coastline: "754 km",
        forestCover: "0.2%",
        arableLand: "0.4%",
        terrain: "Mostly desert; some central hills",
        naturalResources: ["Iron Ore", "Gypsum", "Copper", "Phosphate", "Diamonds", "Gold", "Oil", "Fish"]
    },

    geography_links: {
        rivers: ["Senegal River"],
        mountains: ["Kediet Ijill", "Adrar Plateau"],
        deserts: ["Sahara Desert"],
        forests: ["Diawling National Park", "Banc d'Arguin National Park"],
        oceans: ["Atlantic Ocean"]
    },

    culture: {
        officialLanguages: ["Arabic"],
        languages: ["Arabic (Hassaniya)", "French", "Pulaar", "Soninke", "Wolof", "Bambara"],
        religions: ["Sunni Islam (100%)"],
        heritageSites: ["Ancient Ksour of Ouadane, Chinguetti, Tichitt and Oualata", "Banc d'Arguin National Park"],
        festivals: ["Eid al-Fitr", "Eid al-Adha", "Independence Day", "Mawlid", "Tabaski"],
        cuisine: ["Thieboudienne", "Méchoui", "Lakh", "Zrig", "Mahfe", "Dates and Camel Milk"],
        arts: ["Moorish Music", "Traditional Poetry", "Leather Crafts", "Silver Jewelry", "Tent Weaving"],
        sports: ["Football", "Basketball", "Athletics", "Camel Racing"]
    },

    symbols: {
        bird: "None Official",
        animal: "None Official",
        flower: "None Official",
        tree: "Date Palm",
        anthem: "National Anthem of Mauritania",
        motto: "Honour, Fraternity, Justice"
    },

    demographics: {
        lifeExpectancy: 65.60,
        literacyRate: "67.0%",
        urbanPopulation: "57.7%",
        medianAge: 21.1
    },

    history: {
        timeline: [
            { year: "300s", title: "Ghana Empire", description: "Part of ancient Ghana Empire" },
            { year: "1076", title: "Almoravid Movement", description: "Almoravids conquered region" },
            { year: "1904", title: "French Colony", description: "Became French protectorate" },
            { year: "1960", title: "Independence", description: "Gained independence from France" },
            { year: "1978", title: "Military Coup", description: "First of several military coups" },
            { year: "2007", title: "Democracy", description: "First freely elected government" },
            { year: "2019", title: "Peaceful Transfer", description: "First peaceful democratic transition" }
        ],
        notableFigures: ["Moktar Ould Daddah", "Mohamed Ould Ghazouani"]
    },

    disputes: [
        { name: "Western Sahara", description: "Border issues related to Western Sahara conflict", type: "Border" }
    ],

    quickFacts: [
        { icon: "train", title: "Iron Ore Train", text: "World's longest train (2.5 km) carries iron ore" },
        { icon: "book", title: "Ancient Libraries", text: "Chinguetti - ancient Islamic manuscript libraries" },
        { icon: "ban-smoking", title: "Last to Abolish Slavery", text: "Last country to abolish slavery (1981; criminalized 2007)" },
        { icon: "fish", title: "Rich Fishing", text: "Banc d'Arguin - major fishing grounds" },
        { icon: "sun", title: "90% Desert", text: "Over 90% covered by Sahara Desert" }
    ]
},

// 19. NIGER
{
    id: "NER",
    name: "Niger",
    officialName: "Republic of Niger",
    flag: "https://flagcdn.com/w320/ne.png",
    
    images: {
        hero: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=1920&q=80",
        landscape: "https://images.unsplash.com/photo-1509023464722-18d996393ca8?w=1920&q=80",
        city: "https://images.unsplash.com/photo-1568322445389-f64ac2515020?w=1920&q=80"
    },

    basic: {
        capital: "Niamey",
        continent: "Africa",
        region: "West Africa",
        subregion: "Western Africa",
        population: 27202843,
        area: 1267000,
        populationDensity: 21,
        independence: "1960",
        callingCode: "+227",
        tld: ".ne",
        drivingSide: "Right",
        electricity: "220V, 50Hz"
    },

    location: {
        coordinates: [17.6078, 8.0817],
        timezone: "UTC+1 (WAT)",
        neighbors: ["Libya", "Chad", "Nigeria", "Benin", "Burkina Faso", "Mali", "Algeria"],
        borders: 5834,
        hemispheres: ["Northern", "Eastern"]
    },

    political: {
        government: "Unitary Provisional Military Government",
        headOfState: "Transitional President Abdourahamane Tchiani",
        headOfGovernment: "Prime Minister Ali Mahaman Lamine Zeine",
        legislature: "National Council for the Safeguard of the Homeland",
        legalSystem: "Mixed (Civil Law, Islamic Law, Customary Law)",
        states: 8,
        regions: 8,
        largestCity: "Niamey",
        organizations: ["UN", "AU", "ECOWAS (Suspended)", "OIC", "Francophonie", "AfCFTA"]
    },

    economy: {
        gdp: "$16.6 Billion",
        gdpPPP: "$41.4 Billion",
        gdpPerCapita: "$593",
        gdpRank: "#132",
        gdpGrowth: "7.0%",
        currency: "West African CFA Franc",
        currencyCode: "XOF",
        currencySymbol: "Fr",
        inflation: "11.8%",
        unemployment: "1.6%",
        majorSectors: ["Agriculture (40%)", "Services (42%)", "Industry (18%)"],
        industries: ["Uranium Mining", "Petroleum", "Cement", "Brick", "Textiles", "Food Processing", "Chemicals"],
        exports: ["Uranium Ore", "Gold", "Petroleum", "Livestock", "Cowpeas", "Onions"],
        imports: ["Rice", "Packaged Medicaments", "Refined Petroleum", "Cement", "Cars"]
    },

    geography: {
        climate: "Desert; Mostly Hot, Dry; Tropical in South",
        avgTemperature: "29.3°C",
        annualRainfall: "151 mm",
        highestPoint: "Mont Idoukal-n-Taghès (2,022 m)",
        lowestPoint: "Niger River (200 m)",
        coastline: "0 km (Landlocked)",
        forestCover: "1.0%",
        arableLand: "12.3%",
        terrain: "Sahara Desert; savanna in south; mountains in north",
        naturalResources: ["Uranium", "Coal", "Iron Ore", "Tin", "Phosphates", "Gold", "Molybdenum", "Gypsum", "Salt", "Petroleum"]
    },

    geography_links: {
        rivers: ["Niger River"],
        mountains: ["Aïr Mountains", "Mont Idoukal-n-Taghès"],
        deserts: ["Sahara Desert", "Ténéré Desert"],
        forests: ["W National Park", "Termit & Tin Toumma"],
        oceans: []
    },

    culture: {
        officialLanguages: ["French"],
        languages: ["French", "Hausa", "Zarma", "Tuareg", "Fula", "Kanuri", "Arabic", "Gourmanchéma"],
        religions: ["Islam (99%)", "Others (1%)"],
        heritageSites: ["Aïr and Ténéré Natural Reserves", "W-Arly-Pendjari Complex"],
        festivals: ["Independence Day", "Republic Day", "Eid al-Fitr", "Eid al-Adha", "Cure Salée (Tuareg Festival)"],
        cuisine: ["Dambou", "Fufu", "Jollof Rice", "Tchoukou", "Kilishi", "Djerma Stew"],
        arts: ["Tuareg Silver Jewelry", "Leather Crafts", "Traditional Music", "Gerewol Festival Dance"],
        sports: ["Football", "Basketball", "Wrestling", "Camel Racing"]
    },

    symbols: {
        bird: "None Official",
        animal: "None Official",
        flower: "None Official",
        tree: "None Official",
        anthem: "La Nigérienne",
        motto: "Fraternity, Work, Progress"
    },

    demographics: {
        lifeExpectancy: 63.57,
        literacyRate: "37.3%",
        urbanPopulation: "16.9%",
        medianAge: 14.8
    },

    history: {
        timeline: [
            { year: "600s", title: "Trans-Saharan Trade", description: "Region on trans-Saharan trade routes" },
            { year: "14th Century", title: "Songhai Empire", description: "Part of Songhai Empire" },
            { year: "1890s", title: "French Colonization", description: "France colonized Niger" },
            { year: "1960", title: "Independence", description: "Gained independence from France" },
            { year: "2010", title: "Democratic Transition", description: "New constitution adopted" },
            { year: "2023", title: "Military Coup", description: "Military seized power" }
        ],
        notableFigures: ["Hamani Diori", "Seyni Kountché", "Mahamadou Issoufou", "Mohamed Bazoum"]
    },

    disputes: [
        { name: "Jihadist Insurgency", description: "Ongoing terrorism and instability", type: "Internal" }
    ],

    quickFacts: [
        { icon: "atom", title: "Uranium Giant", text: "One of world's top uranium producers" },
        { icon: "users", title: "Youngest Population", text: "World's youngest median age (14.8 years)" },
        { icon: "baby", title: "Highest Fertility", text: "Highest fertility rate globally (6.8 children/woman)" },
        { icon: "sun", title: "80% Desert", text: "Over 80% covered by Sahara Desert" },
        { icon: "star", title: "Cure Salée", text: "Annual Tuareg and Wodaabe nomad gathering" }
    ]
},

// 20. NIGERIA
{
    id: "NGA",
    name: "Nigeria",
    officialName: "Federal Republic of Nigeria",
    flag: "https://flagcdn.com/w320/ng.png",
    
    images: {
        hero: "https://images.unsplash.com/photo-1568322445389-f64ac2515020?w=1920&q=80",
        landscape: "https://images.unsplash.com/photo-1580756475316-6e5b5df9e83e?w=1920&q=80",
        city: "https://images.unsplash.com/photo-1609050644558-4bbce789666d?w=1920&q=80"
    },

    basic: {
        capital: "Abuja",
        continent: "Africa",
        region: "West Africa",
        subregion: "Western Africa",
        population: 223804632,
        area: 923768,
        populationDensity: 246,
        independence: "1960",
        callingCode: "+234",
        tld: ".ng",
        drivingSide: "Right",
        electricity: "230V, 50Hz"
    },

    location: {
        coordinates: [9.0820, 8.6753],
        timezone: "UTC+1 (WAT)",
        neighbors: ["Benin", "Niger", "Chad", "Cameroon"],
        borders: 4477,
        hemispheres: ["Northern", "Eastern"]
    },

    political: {
        government: "Federal Presidential Republic",
        headOfState: "President Bola Tinubu",
        headOfGovernment: "President Bola Tinubu",
        legislature: "National Assembly (Senate & House of Representatives)",
        legalSystem: "Mixed (English Common Law, Islamic Law, Customary Law)",
        states: 36,
        federalCapitalTerritory: 1,
        largestCity: "Lagos",
        organizations: ["UN", "AU", "ECOWAS", "Commonwealth", "OPEC", "OIC", "D-8", "AfCFTA"]
    },

    economy: {
        gdp: "$395.2 Billion",
        gdpPPP: "$1.35 Trillion",
        gdpPerCapita: "$1,846",
        gdpRank: "#39",
        gdpGrowth: "2.9%",
        currency: "Nigerian Naira",
        currencyCode: "NGN",
        currencySymbol: "₦",
        inflation: "33.7%",
        unemployment: "5.0%",
        majorSectors: ["Services (52%)", "Agriculture (22%)", "Industry (23%)"],
        industries: ["Petroleum", "Natural Gas", "Coal", "Tin", "Columbite", "Textiles", "Cement", "Food Products", "Footwear", "Chemicals", "Fertilizer", "Printing", "Ceramics", "Steel"],
        exports: ["Crude Petroleum", "Petroleum Gas", "Cocoa Beans", "Refined Petroleum", "Gold", "Rubber"],
        imports: ["Refined Petroleum", "Cars", "Wheat", "Rice", "Packaged Medicaments"]
    },

    geography: {
        climate: "Varies: Equatorial South, Tropical Center, Arid North",
        avgTemperature: "27.0°C",
        annualRainfall: "1,150 mm",
        highestPoint: "Chappal Waddi (2,419 m)",
        lowestPoint: "Atlantic Ocean (0 m)",
        coastline: "853 km",
        forestCover: "6.5%",
        arableLand: "38.0%",
        terrain: "Coastal swamps; tropical forests; plateaus; mountains; arid north",
        naturalResources: ["Natural Gas", "Petroleum", "Tin", "Iron Ore", "Coal", "Limestone", "Niobium", "Lead", "Zinc", "Arable Land"]
    },

    geography_links: {
        rivers: ["Niger River", "Benue River", "Kaduna River", "Sokoto River", "Cross River"],
        mountains: ["Chappal Waddi", "Mambilla Plateau", "Jos Plateau", "Adamawa Highlands"],
        deserts: [],
        forests: ["Cross River National Park", "Gashaka Gumti National Park", "Omo Forest Reserve"],
        oceans: ["Atlantic Ocean", "Gulf of Guinea"]
    },

    culture: {
        officialLanguages: ["English"],
        languages: ["English", "Hausa", "Yoruba", "Igbo", "Fulfulde", "Kanuri", "Ibibio", "Tiv", "over 500 languages"],
        religions: ["Islam (53%)", "Christianity (46%)", "Traditional (1%)"],
        heritageSites: ["Sukur Cultural Landscape", "Osun-Osogbo Sacred Grove"],
        festivals: ["Durbar Festival", "Eyo Festival", "Osun-Osogbo Festival", "New Yam Festival", "Argungu Fishing Festival"],
        cuisine: ["Jollof Rice", "Suya", "Egusi Soup", "Pounded Yam", "Moi Moi", "Akara", "Pepper Soup", "Chin Chin"],
        arts: ["Nollywood (Film)", "Afrobeats Music", "Yoruba Sculpture", "Benin Bronzes", "Igbo Masquerades", "Hausa Embroidery"],
        sports: ["Football", "Basketball", "Athletics", "Boxing", "Wrestling"]
    },

    symbols: {
        bird: "Black Crowned Crane",
        animal: "None Official",
        flower: "Costus spectabilis",
        tree: "None Official",
        anthem: "Arise, O Compatriots",
        motto: "Unity and Faith, Peace and Progress"
    },

    demographics: {
        lifeExpectancy: 55.75,
        literacyRate: "62.0%",
        urbanPopulation: "53.5%",
        medianAge: 18.6
    },

    history: {
        timeline: [
            { year: "500 BCE", title: "Nok Culture", description: "Ancient Nok civilization flourished" },
            { year: "1000 CE", title: "Kanem-Bornu", description: "Kanem-Bornu Empire established" },
            { year: "1400s", title: "Benin Kingdom", description: "Kingdom of Benin reached height" },
            { year: "1804", title: "Sokoto Caliphate", description: "Usman dan Fodio founded Sokoto Caliphate" },
            { year: "1914", title: "British Colony", description: "Northern and Southern Nigeria merged" },
            { year: "1960", title: "Independence", description: "Gained independence from Britain" },
            { year: "1967-1970", title: "Biafran War", description: "Nigerian Civil War" },
            { year: "1999", title: "Democracy", description: "Return to civilian democratic rule" }
        ],
        notableFigures: ["Nnamdi Azikiwe", "Obafemi Awolowo", "Ahmadu Bello", "Wole Soyinka", "Chinua Achebe", "Fela Kuti"]
    },

    disputes: [
        { name: "Boko Haram Insurgency", description: "Ongoing jihadist insurgency in northeast", type: "Internal" },
        { name: "Niger Delta Militancy", description: "Oil-related conflicts", type: "Internal" },
        { name: "Farmer-Herder Clashes", description: "Ethnic and resource conflicts", type: "Internal" }
    ],

    quickFacts: [
        { icon: "users", title: "Most Populous African", text: "Africa's most populous country (223M+)" },
        { icon: "oil-can", title: "Oil Giant", text: "Africa's largest oil producer" },
        { icon: "film", title: "Nollywood", text: "2nd largest film industry globally by volume" },
        { icon: "chart-line", title: "Largest Economy", text: "Africa's largest economy by GDP" },
        { icon: "language", title: "Linguistic Diversity", text: "Over 500 languages spoken" },
        { icon: "music", title: "Afrobeats", text: "Global home of Afrobeats music" }
    ]
}
    ];

// Export for Node.js
if (typeof module !== 'undefined' && module.exports) {
module.exports = CountriesData7;
}

// Export for Browser
if (typeof window !== 'undefined') {
window.CountriesData7 = CountriesData7;
}
