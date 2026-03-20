/**
 * ENCYCLOPEDIA DATA FILE 8
 * Contains: West Africa (4) + Central Africa (9) + East Africa (7) = 20 Countries
 * Version: 2.0 - Clean Data
 */

const CountriesData8 = [
    // 1. SENEGAL
    {
        id: "SEN",
        name: "Senegal",
        officialName: "Republic of Senegal",
        flag: "https://flagcdn.com/w320/sn.png",
        
        images: {
            hero: "https://images.unsplash.com/photo-1589307004173-3c95204d0dd0?w=1920&q=80",
            landscape: "https://images.unsplash.com/photo-1591122947157-26bad3a117d2?w=1920&q=80",
            city: "https://images.unsplash.com/photo-1589307004173-3c95204d0dd0?w=1920&q=80"
        },

        basic: {
            capital: "Dakar",
            continent: "Africa",
            region: "West Africa",
            subregion: "Western Africa",
            population: 17763163,
            area: 196722,
            populationDensity: 87,
            independence: "1960",
            callingCode: "+221",
            tld: ".sn",
            drivingSide: "Right",
            electricity: "230V, 50Hz"
        },

        location: {
            coordinates: [14.4974, -14.4524],
            timezone: "UTC+0 (GMT)",
            neighbors: ["Mauritania", "Mali", "Guinea", "Guinea-Bissau", "The Gambia"],
            borders: 2684,
            hemispheres: ["Northern", "Western"]
        },

        political: {
            government: "Unitary Presidential Republic",
            headOfState: "President Bassirou Diomaye Faye",
            headOfGovernment: "Prime Minister Ousmane Sonko",
            legislature: "National Assembly",
            legalSystem: "Civil Law (French influence)",
            states: 14,
            regions: 14,
            departments: 45,
            largestCity: "Dakar",
            organizations: ["UN", "AU", "ECOWAS", "OIC", "Francophonie", "WTO"]
        },

        economy: {
            gdp: "$27.68 Billion",
            gdpPPP: "$64.60 Billion",
            gdpPerCapita: "$1,606",
            gdpRank: "#102",
            gdpGrowth: "4.1%",
            currency: "West African CFA Franc",
            currencyCode: "XOF",
            currencySymbol: "CFA",
            inflation: "5.9%",
            unemployment: "3.6%",
            majorSectors: ["Services (60%)", "Industry (24%)", "Agriculture (15%)"],
            industries: ["Agricultural Processing", "Phosphate Mining", "Fertilizer Production", "Petroleum Refining", "Iron Ore", "Zircon", "Gold", "Construction", "Ship Construction", "Repair"],
            exports: ["Gold", "Phosphoric Acid", "Refined Petroleum", "Cement", "Fish"],
            imports: ["Refined Petroleum", "Rice", "Crude Petroleum", "Cars", "Wheat"]
        },

        geography: {
            climate: "Tropical; Hot, Humid; Rainy Season May to November",
            avgTemperature: "27.8°C",
            annualRainfall: "686 mm",
            highestPoint: "Nepen Diakha (648 m)",
            lowestPoint: "Atlantic Ocean (0 m)",
            coastline: "531 km",
            forestCover: "43.8%",
            arableLand: "17.4%",
            terrain: "Generally low, rolling, sandy plains rising to foothills in southeast",
            naturalResources: ["Fish", "Phosphates", "Iron Ore", "Gold", "Titanium", "Zircon", "Natural Gas", "Petroleum"]
        },

        geography_links: {
            rivers: ["Senegal River", "Gambia River", "Casamance River", "Saloum River"],
            mountains: ["Fouta Djallon Foothills", "Nepen Diakha"],
            deserts: ["Sahel Region", "Ferlo Desert"],
            forests: ["Casamance Forests", "Niokolo-Koba National Park"],
            oceans: ["Atlantic Ocean"]
        },

        culture: {
            officialLanguages: ["French"],
            languages: ["French", "Wolof", "Pulaar", "Serer", "Mandinka", "Diola", "Soninke"],
            religions: ["Islam (96.1%)", "Christianity (3.6%)", "Traditional Beliefs (0.3%)"],
            heritageSites: ["Island of Gorée", "Niokolo-Koba National Park", "Djoudj National Bird Sanctuary", "Island of Saint-Louis", "Saloum Delta", "Bassari Country"],
            festivals: ["Grand Magal of Touba", "Tabaski (Eid al-Adha)", "Korité (Eid al-Fitr)", "Saint-Louis Jazz Festival", "Dakar Biennale"],
            cuisine: ["Thieboudienne", "Yassa", "Mafé", "Ceebu Jën", "Pastels", "Bissap"],
            arts: ["Sabar Drumming", "Mbalax Music", "Sand Painting", "Glass Painting (Souwer)", "Basket Weaving"],
            sports: ["Football", "Wrestling (Laamb)", "Basketball", "Athletics"]
        },

        symbols: {
            bird: "None Official",
            animal: "Lion",
            flower: "None Official",
            tree: "Baobab",
            anthem: "Pincez Tous vos Koras, Frappez les Balafons",
            motto: "One People, One Goal, One Faith"
        },

        demographics: {
            lifeExpectancy: 68.62,
            literacyRate: "51.9%",
            urbanPopulation: "49.1%",
            medianAge: 18.8
        },

        history: {
            timeline: [
                { year: "9th Century", title: "Takrur Kingdom", description: "First organized states emerged" },
                { year: "14th Century", title: "Jolof Empire", description: "Jolof Empire dominated region" },
                { year: "1677", title: "French Colony", description: "France established trading posts" },
                { year: "1895", title: "French West Africa", description: "Became part of French West Africa" },
                { year: "1960", title: "Independence", description: "Independence from France" },
                { year: "2000", title: "Democratic Transition", description: "First peaceful transfer of power" },
                { year: "2024", title: "New Leadership", description: "Bassirou Diomaye Faye elected president" }
            ],
            notableFigures: ["Léopold Sédar Senghor", "Abdoulaye Wade", "Youssou N'Dour", "Cheikh Anta Diop"]
        },

        disputes: [],

        quickFacts: [
            { icon: "music", title: "Mbalax Music", text: "Birthplace of Mbalax music and Youssou N'Dour" },
            { icon: "monument", title: "Gorée Island", text: "Historic slave trade departure point (UNESCO)" },
            { icon: "handshake", title: "Stable Democracy", text: "One of Africa's most stable democracies" },
            { icon: "tree", title: "Baobabs", text: "Home to iconic baobab trees" },
            { icon: "futbol", title: "Football", text: "2022 AFCON champions" }
        ]
    },

    // 2. SIERRA LEONE
    {
        id: "SLE",
        name: "Sierra Leone",
        officialName: "Republic of Sierra Leone",
        flag: "https://flagcdn.com/w320/sl.png",
        
        images: {
            hero: "https://images.unsplash.com/photo-1592838064575-70ed626d3a0e?w=1920&q=80",
            landscape: "https://images.unsplash.com/photo-1592838064575-70ed626d3a0e?w=1920&q=80",
            city: "https://images.unsplash.com/photo-1589307004173-3c95204d0dd0?w=1920&q=80"
        },

        basic: {
            capital: "Freetown",
            continent: "Africa",
            region: "West Africa",
            subregion: "Western Africa",
            population: 8605718,
            area: 71740,
            populationDensity: 108,
            independence: "1961",
            callingCode: "+232",
            tld: ".sl",
            drivingSide: "Right",
            electricity: "230V, 50Hz"
        },

        location: {
            coordinates: [8.4606, -11.7799],
            timezone: "UTC+0 (GMT)",
            neighbors: ["Guinea", "Liberia"],
            borders: 1093,
            hemispheres: ["Northern", "Western"]
        },

        political: {
            government: "Unitary Presidential Constitutional Republic",
            headOfState: "President Julius Maada Bio",
            headOfGovernment: "President Julius Maada Bio",
            legislature: "Parliament",
            legalSystem: "Mixed (English Common Law and Customary Law)",
            states: 5,
            provinces: 4,
            area: 1,
            districts: 16,
            largestCity: "Freetown",
            organizations: ["UN", "AU", "ECOWAS", "Commonwealth", "OIC", "WTO"]
        },

        economy: {
            gdp: "$4.22 Billion",
            gdpPPP: "$14.46 Billion",
            gdpPerCapita: "$527",
            gdpRank: "#156",
            gdpGrowth: "2.8%",
            currency: "Sierra Leonean Leone",
            currencyCode: "SLL",
            currencySymbol: "Le",
            inflation: "37.1%",
            unemployment: "4.6%",
            majorSectors: ["Agriculture (60%)", "Services (29%)", "Industry (8%)"],
            industries: ["Mining (Diamonds, Iron Ore, Rutile, Bauxite, Gold)", "Small-Scale Manufacturing", "Petroleum Refining", "Commercial Ship Repair"],
            exports: ["Iron Ore", "Diamonds", "Titanium Ore", "Aluminum Ore", "Cocoa Beans"],
            imports: ["Rice", "Refined Petroleum", "Delivery Trucks", "Postage Stamps", "Packaged Medicaments"]
        },

        geography: {
            climate: "Tropical; Hot, Humid; Summer Rainy Season (May to December)",
            avgTemperature: "26.5°C",
            annualRainfall: "2,526 mm",
            highestPoint: "Loma Mansa (Bintimani) (1,948 m)",
            lowestPoint: "Atlantic Ocean (0 m)",
            coastline: "402 km",
            forestCover: "37.6%",
            arableLand: "23.4%",
            terrain: "Coastal belt of mangrove swamps; wooded hill country; upland plateau; mountains in east",
            naturalResources: ["Diamonds", "Titanium Ore (Rutile)", "Bauxite", "Iron Ore", "Gold", "Chromite"]
        },

        geography_links: {
            rivers: ["Rokel River", "Jong River", "Sewa River", "Moa River", "Great Scarcies River"],
            mountains: ["Loma Mountains", "Tingi Hills", "Kambui Hills"],
            deserts: [],
            forests: ["Gola Rainforest", "Western Area Peninsula", "Outamba-Kilimi National Park"],
            oceans: ["Atlantic Ocean"]
        },

        culture: {
            officialLanguages: ["English"],
            languages: ["English", "Krio", "Mende", "Temne", "Limba", "Kuranko", "Kono", "Fula"],
            religions: ["Islam (78%)", "Christianity (20.9%)", "Traditional Beliefs (1.1%)"],
            heritageSites: [],
            festivals: ["Independence Day", "Freetown Marathon", "Krio Cultural Festival", "Poro and Sande Initiations"],
            cuisine: ["Cassava Leaves", "Groundnut Soup", "Jollof Rice", "Fried Plantains", "Pepper Soup", "Fufu"],
            arts: ["Gongoli Dance", "Bondo Masks", "Wood Carving", "Tie-Dye (Gara)"],
            sports: ["Football", "Cricket", "Basketball", "Athletics"]
        },

        symbols: {
            bird: "None Official",
            animal: "Lion",
            flower: "None Official",
            tree: "Cotton Tree",
            anthem: "High We Exalt Thee, Realm of the Free",
            motto: "Unity, Freedom, Justice"
        },

        demographics: {
            lifeExpectancy: 55.92,
            literacyRate: "43.2%",
            urbanPopulation: "43.5%",
            medianAge: 19.4
        },

        history: {
            timeline: [
                { year: "1462", title: "Portuguese Arrival", description: "Portuguese explorers named it 'Lion Mountains'" },
                { year: "1787", title: "Freetown Founded", description: "Settlement for freed slaves established" },
                { year: "1808", title: "British Colony", description: "Became British Crown Colony" },
                { year: "1961", title: "Independence", description: "Independence from Britain" },
                { year: "1991-2002", title: "Civil War", description: "Devastating civil war killed 50,000+" },
                { year: "2014-2016", title: "Ebola Outbreak", description: "Ebola epidemic severely affected country" }
            ],
            notableFigures: ["Milton Margai", "Ahmad Tejan Kabbah", "Siaka Stevens"]
        },

        disputes: [],

        quickFacts: [
            { icon: "gem", title: "Blood Diamonds", text: "Civil war fueled by 'blood diamonds'" },
            { icon: "tree", title: "Cotton Tree", text: "Iconic 500-year-old Cotton Tree in Freetown" },
            { icon: "ship", title: "Freed Slaves", text: "Founded as colony for freed slaves" },
            { icon: "mountain", title: "Lion Mountains", text: "Name means 'Lion Mountains' in Portuguese" },
            { icon: "globe", title: "Krio Language", text: "Krio is lingua franca derived from English" }
        ]
    },

    // 3. TOGO
    {
        id: "TGO",
        name: "Togo",
        officialName: "Togolese Republic",
        flag: "https://flagcdn.com/w320/tg.png",
        
        images: {
            hero: "https://images.unsplash.com/photo-1589307004173-3c95204d0dd0?w=1920&q=80",
            landscape: "https://images.unsplash.com/photo-1591122947157-26bad3a117d2?w=1920&q=80",
            city: "https://images.unsplash.com/photo-1589307004173-3c95204d0dd0?w=1920&q=80"
        },

        basic: {
            capital: "Lomé",
            continent: "Africa",
            region: "West Africa",
            subregion: "Western Africa",
            population: 8644829,
            area: 56785,
            populationDensity: 152,
            independence: "1960",
            callingCode: "+228",
            tld: ".tg",
            drivingSide: "Right",
            electricity: "220V, 50Hz"
        },

        location: {
            coordinates: [8.6195, 0.8248],
            timezone: "UTC+0 (GMT)",
            neighbors: ["Ghana", "Burkina Faso", "Benin"],
            borders: 1880,
            hemispheres: ["Northern", "Eastern"]
        },

        political: {
            government: "Unitary Presidential Republic",
            headOfState: "President Faure Gnassingbé",
            headOfGovernment: "Prime Minister Victoire Tomégah-Dogbé",
            legislature: "National Assembly",
            legalSystem: "Civil Law (French influence)",
            states: 5,
            regions: 5,
            prefectures: 39,
            largestCity: "Lomé",
            organizations: ["UN", "AU", "ECOWAS", "Francophonie", "OIC", "WTO"]
        },

        economy: {
            gdp: "$8.13 Billion",
            gdpPPP: "$20.75 Billion",
            gdpPerCapita: "$995",
            gdpRank: "#138",
            gdpGrowth: "5.5%",
            currency: "West African CFA Franc",
            currencyCode: "XOF",
            currencySymbol: "CFA",
            inflation: "5.1%",
            unemployment: "3.9%",
            majorSectors: ["Services (51%)", "Agriculture (22%)", "Industry (20%)"],
            industries: ["Phosphate Mining", "Agricultural Processing", "Cement", "Handicrafts", "Textiles", "Beverages"],
            exports: ["Gold", "Refined Petroleum", "Calcium Phosphates", "Plastic Lids", "Cotton"],
            imports: ["Refined Petroleum", "Motorcycles", "Packaged Medicaments", "Crude Petroleum", "Rice"]
        },

        geography: {
            climate: "Tropical; Hot, Humid in South; Semiarid in North",
            avgTemperature: "27.1°C",
            annualRainfall: "1,168 mm",
            highestPoint: "Mont Agou (986 m)",
            lowestPoint: "Atlantic Ocean (0 m)",
            coastline: "56 km",
            forestCover: "24.2%",
            arableLand: "45.3%",
            terrain: "Gently rolling savanna in north; central hills; southern plateau; low coastal plain with extensive lagoons and marshes",
            naturalResources: ["Phosphates", "Limestone", "Marble", "Arable Land"]
        },

        geography_links: {
            rivers: ["Mono River", "Oti River", "Haho River"],
            mountains: ["Togo Mountains", "Mont Agou", "Mont Kloto"],
            deserts: [],
            forests: ["Fazao-Malfakassa National Park", "Kéran National Park"],
            oceans: ["Atlantic Ocean", "Gulf of Guinea"]
        },

        culture: {
            officialLanguages: ["French"],
            languages: ["French", "Ewe", "Kabiyé", "Tem", "Mina", "Mossi"],
            religions: ["Christianity (43.7%)", "Traditional Beliefs (35.6%)", "Islam (14%)"],
            heritageSites: ["Koutammakou (Land of the Batammariba)"],
            festivals: ["Evala (Wrestling Festival)", "Akpema Festival", "Independence Day", "D'Ponté"],
            cuisine: ["Fufu", "Koklo Meme", "Akume", "Ablo", "Palm Nut Soup", "Akoumé"],
            arts: ["Batik", "Wood Carving", "Traditional Dance", "Drum Making"],
            sports: ["Football", "Basketball", "Boxing", "Athletics"]
        },

        symbols: {
            bird: "None Official",
            animal: "None Official",
            flower: "None Official",
            tree: "None Official",
            anthem: "Salut à toi, pays de nos aïeux",
            motto: "Work, Liberty, Homeland"
        },

        demographics: {
            lifeExpectancy: 61.63,
            literacyRate: "63.7%",
            urbanPopulation: "44.5%",
            medianAge: 19.8
        },

        history: {
            timeline: [
                { year: "15th Century", title: "Ewe Migration", description: "Ewe people settled in southern region" },
                { year: "1884", title: "German Protectorate", description: "Germany established Togoland" },
                { year: "1914", title: "Allied Capture", description: "Captured by Britain and France in WWI" },
                { year: "1922", title: "French Mandate", description: "League of Nations mandate to France" },
                { year: "1960", title: "Independence", description: "Independence from France" },
                { year: "1967", title: "Gnassingbé Era", description: "Gnassingbé Eyadéma seized power" },
                { year: "2005", title: "Succession", description: "Faure Gnassingbé succeeded his father" }
            ],
            notableFigures: ["Gnassingbé Eyadéma", "Faure Gnassingbé", "Sylvanus Olympio"]
        },

        disputes: [],

        quickFacts: [
            { icon: "map", title: "Narrow Country", text: "Only 56 km of coastline but 550 km north to south" },
            { icon: "monument", title: "Koutammakou", text: "UNESCO site with traditional mud tower-houses" },
            { icon: "industry", title: "Phosphates", text: "One of world's largest phosphate producers" },
            { icon: "ship", title: "Port of Lomé", text: "Major regional port and transit hub" },
            { icon: "voodoo", title: "Voodoo", text: "Voodoo religion widely practiced" }
        ]
    },

    // 4. CAMEROON
    {
        id: "CMR",
        name: "Cameroon",
        officialName: "Republic of Cameroon",
        flag: "https://flagcdn.com/w320/cm.png",
        
        images: {
            hero: "https://images.unsplash.com/photo-1578894381163-e72c17f2d45f?w=1920&q=80",
            landscape: "https://images.unsplash.com/photo-1600698448498-c6ca02693a88?w=1920&q=80",
            city: "https://images.unsplash.com/photo-1578894381163-e72c17f2d45f?w=1920&q=80"
        },

        basic: {
            capital: "Yaoundé",
            continent: "Africa",
            region: "Central Africa",
            subregion: "Middle Africa",
            population: 28647293,
            area: 475442,
            populationDensity: 56,
            independence: "1960",
            callingCode: "+237",
            tld: ".cm",
            drivingSide: "Right",
            electricity: "220V, 50Hz"
        },

        location: {
            coordinates: [7.3697, 12.3547],
            timezone: "UTC+1 (WAT)",
            neighbors: ["Nigeria", "Chad", "Central African Republic", "Congo", "Gabon", "Equatorial Guinea"],
            borders: 5018,
            hemispheres: ["Northern", "Eastern"]
        },

        political: {
            government: "Unitary Presidential Republic",
            headOfState: "President Paul Biya",
            headOfGovernment: "Prime Minister Joseph Ngute",
            legislature: "Parliament (Senate & National Assembly)",
            legalSystem: "Mixed (Civil Law, Common Law, Customary Law)",
            states: 10,
            regions: 10,
            divisions: 58,
            largestCity: "Douala",
            organizations: ["UN", "AU", "Francophonie", "Commonwealth", "OIC", "CEMAC", "WTO"]
        },

        economy: {
            gdp: "$45.23 Billion",
            gdpPPP: "$109.6 Billion",
            gdpPerCapita: "$1,661",
            gdpRank: "#88",
            gdpGrowth: "3.8%",
            currency: "Central African CFA Franc",
            currencyCode: "XAF",
            currencySymbol: "FCFA",
            inflation: "6.3%",
            unemployment: "3.6%",
            majorSectors: ["Services (48%)", "Industry (27%)", "Agriculture (16%)"],
            industries: ["Petroleum Production", "Refining", "Aluminum Production", "Food Processing", "Light Consumer Goods", "Textiles", "Lumber", "Ship Repair"],
            exports: ["Crude Petroleum", "Cocoa Beans", "Lumber", "Aluminum", "Natural Gas", "Coffee"],
            imports: ["Refined Petroleum", "Rice", "Fish", "Broadcasting Equipment", "Wheat"]
        },

        geography: {
            climate: "Varies: Tropical along Coast; Semiarid and Hot in North",
            avgTemperature: "24.7°C",
            annualRainfall: "1,604 mm",
            highestPoint: "Mount Cameroon (4,095 m)",
            lowestPoint: "Atlantic Ocean (0 m)",
            coastline: "402 km",
            forestCover: "42.3%",
            arableLand: "13.1%",
            terrain: "Diverse: coastal plain, dissected plateau in center, mountains in west, plains in north",
            naturalResources: ["Petroleum", "Bauxite", "Iron Ore", "Timber", "Hydropower"]
        },

        geography_links: {
            rivers: ["Sanaga River", "Bénoué River", "Nyong River", "Wouri River", "Logone River", "Chari River"],
            mountains: ["Mount Cameroon", "Cameroon Highlands", "Mandara Mountains", "Adamawa Plateau"],
            deserts: [],
            forests: ["Congo Basin Rainforest", "Dja Faunal Reserve", "Korup National Park"],
            oceans: ["Atlantic Ocean", "Gulf of Guinea", "Bight of Biafra"]
        },

        culture: {
            officialLanguages: ["French", "English"],
            languages: ["French", "English", "Fulfulde", "Ewondo", "Bamileke", "Duala", "270+ local languages"],
            religions: ["Christianity (70.7%)", "Islam (24.4%)", "Traditional Beliefs (2.2%)"],
            heritageSites: ["Dja Faunal Reserve", "Sangha Trinational"],
            festivals: ["National Day (May 20)", "Youth Day", "Ngondo Festival", "Mount Cameroon Race of Hope"],
            cuisine: ["Ndolé", "Poulet DG", "Achu Soup", "Eru", "Koki", "Fufu Corn"],
            arts: ["Makossa Music", "Bikutsi Music", "Wood Carving", "Beadwork", "Bronze Casting"],
            sports: ["Football", "Cycling", "Handball", "Basketball"]
        },

        symbols: {
            bird: "None Official",
            animal: "Lion",
            flower: "None Official",
            tree: "None Official",
            anthem: "O Cameroun, Berceau de nos Ancêtres",
            motto: "Peace, Work, Fatherland"
        },

        demographics: {
            lifeExpectancy: 60.32,
            literacyRate: "77.1%",
            urbanPopulation: "58.1%",
            medianAge: 18.7
        },

        history: {
            timeline: [
                { year: "1472", title: "Portuguese Arrival", description: "Portuguese explorers reached coast" },
                { year: "1884", title: "German Colony", description: "Germany established Kamerun protectorate" },
                { year: "1916", title: "Allied Division", description: "Divided between Britain and France after WWI" },
                { year: "1960", title: "French Independence", description: "French Cameroun became independent" },
                { year: "1961", title: "Unification", description: "Southern British Cameroons joined" },
                { year: "1982", title: "Biya Era", description: "Paul Biya became president" }
            ],
            notableFigures: ["Paul Biya", "Ahmadou Ahidjo", "Samuel Eto'o", "Roger Milla"]
        },

        disputes: [
            { name: "Bakassi Peninsula", description: "Resolved border dispute with Nigeria (2008)", type: "Border" },
            { name: "Anglophone Crisis", description: "Separatist conflict in English-speaking regions", type: "Territory" }
        ],

        quickFacts: [
            { icon: "globe", title: "Africa in Miniature", text: "Called 'Africa in Miniature' for its diversity" },
            { icon: "language", title: "Bilingual", text: "Only African country with French and English as official languages" },
            { icon: "mountain", title: "Mount Cameroon", text: "West Africa's highest peak (4,095 m)" },
            { icon: "futbol", title: "Football", text: "'Indomitable Lions' won 5 Africa Cup of Nations" },
            { icon: "tree", title: "Biodiversity", text: "Over 200 different ethnic groups" }
        ]
    },

    // 5. CENTRAL AFRICAN REPUBLIC
    {
        id: "CAF",
        name: "Central African Republic",
        officialName: "Central African Republic",
        flag: "https://flagcdn.com/w320/cf.png",
        
        images: {
            hero: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=1920&q=80",
            landscape: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=1920&q=80",
            city: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=1920&q=80"
        },

        basic: {
            capital: "Bangui",
            continent: "Africa",
            region: "Central Africa",
            subregion: "Middle Africa",
            population: 5742315,
            area: 622984,
            populationDensity: 9,
            independence: "1960",
            callingCode: "+236",
            tld: ".cf",
            drivingSide: "Right",
            electricity: "220V, 50Hz"
        },

        location: {
            coordinates: [6.6111, 20.9394],
            timezone: "UTC+1 (WAT)",
            neighbors: ["Chad", "Sudan", "South Sudan", "Democratic Republic of the Congo", "Congo", "Cameroon"],
            borders: 5920,
            hemispheres: ["Northern", "Eastern"]
        },

        political: {
            government: "Unitary Semi-Presidential Republic",
            headOfState: "President Faustin-Archange Touadéra",
            headOfGovernment: "Prime Minister Félix Moloua",
            legislature: "National Assembly",
            legalSystem: "Civil Law (French influence)",
            states: 16,
            prefectures: 14,
            economicPrefectures: 2,
            largestCity: "Bangui",
            organizations: ["UN", "AU", "Francophonie", "CEMAC", "OIC", "WTO"]
        },

        economy: {
            gdp: "$2.38 Billion",
            gdpPPP: "$5.06 Billion",
            gdpPerCapita: "$427",
            gdpRank: "#165",
            gdpGrowth: "1.0%",
            currency: "Central African CFA Franc",
            currencyCode: "XAF",
            currencySymbol: "FCFA",
            inflation: "5.6%",
            unemployment: "6.5%",
            majorSectors: ["Agriculture (43%)", "Services (37%)", "Industry (16%)"],
            industries: ["Gold Mining", "Diamond Mining", "Logging", "Brewing", "Sugar Refining", "Textiles", "Footwear", "Assembly of Bicycles and Motorcycles"],
            exports: ["Rough Wood", "Diamonds", "Gold", "Sawn Wood", "Cotton"],
            imports: ["Refined Petroleum", "Delivery Trucks", "Packaged Medicaments", "Diamonds", "Cement"]
        },

        geography: {
            climate: "Tropical; Hot, Dry Winters; Mild to Hot, Wet Summers",
            avgTemperature: "25.3°C",
            annualRainfall: "1,343 mm",
            highestPoint: "Mont Ngaoui (1,410 m)",
            lowestPoint: "Oubangui River (335 m)",
            coastline: "0 km (Landlocked)",
            forestCover: "35.6%",
            arableLand: "8.1%",
            terrain: "Vast, flat to rolling, monotonous plateau; scattered hills in northeast and southwest",
            naturalResources: ["Diamonds", "Uranium", "Gold", "Oil", "Timber", "Hydropower"]
        },

        geography_links: {
            rivers: ["Ubangi River", "Sangha River", "Kotto River", "Chinko River", "Chari River"],
            mountains: ["Fertit Hills", "Mont Ngaoui", "Bongo Massif"],
            deserts: [],
            forests: ["Dzanga-Sangha National Park", "Manovo-Gounda St Floris National Park"],
            oceans: []
        },

        culture: {
            officialLanguages: ["French", "Sango"],
            languages: ["French", "Sango", "Banda", "Gbaya", "Ngbaka", "Sara", "Mbum", "Kare"],
            religions: ["Christianity (89.5%)", "Islam (8.5%)", "Traditional Beliefs (2%)"],
            heritageSites: ["Manovo-Gounda St Floris National Park", "Sangha Trinational"],
            festivals: ["Independence Day", "National Day", "Boganda Day"],
            cuisine: ["Gozo", "Cassava", "Kanda (Meatballs)", "Palm Butter Soup", "Plantains"],
            arts: ["Wood Carving", "Basket Weaving", "Traditional Dance", "Tam-Tam Music"],
            sports: ["Football", "Basketball", "Wrestling"]
        },

        symbols: {
            bird: "None Official",
            animal: "Elephant",
            flower: "None Official",
            tree: "None Official",
            anthem: "La Renaissance",
            motto: "Unity, Dignity, Work"
        },

        demographics: {
            lifeExpectancy: 54.02,
            literacyRate: "37.4%",
            urbanPopulation: "43.4%",
            medianAge: 17.6
        },

        history: {
            timeline: [
                { year: "16th-19th Century", title: "Slave Trade", description: "Region heavily affected by slave trade" },
                { year: "1889", title: "French Colony", description: "French established Ubangi-Shari colony" },
                { year: "1960", title: "Independence", description: "Independence from France" },
                { year: "1966", title: "Bokassa", description: "Jean-Bédel Bokassa seized power" },
                { year: "1976", title: "Empire", description: "Bokassa declared himself emperor" },
                { year: "2013-Present", title: "Civil War", description: "Ongoing civil war and instability" }
            ],
            notableFigures: ["Barthélemy Boganda", "Jean-Bédel Bokassa", "Ange-Félix Patassé", "Faustin-Archange Touadéra"]
        },

        disputes: [
            { name: "Civil Conflict", description: "Ongoing armed conflict between government and rebel groups", type: "Territory" }
        ],

        quickFacts: [
            { icon: "gem", title: "Diamonds", text: "Major diamond-producing country" },
            { icon: "skull", title: "Poorest Country", text: "One of world's poorest and least developed countries" },
            { icon: "crown", title: "Emperor Bokassa", text: "Jean-Bédel Bokassa declared himself emperor (1976-1979)" },
            { icon: "tree", title: "Forest Elephants", text: "Home to endangered forest elephants" },
            { icon: "globe", title: "Heart of Africa", text: "Located at geographic heart of African continent" }
        ]
    },

    // 6. CHAD
    {
        id: "TCD",
        name: "Chad",
        officialName: "Republic of Chad",
        flag: "https://flagcdn.com/w320/td.png",
        
        images: {
            hero: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=1920&q=80",
            landscape: "https://images.unsplash.com/photo-1519659528534-7fd733a832a0?w=1920&q=80",
            city: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=1920&q=80"
        },

        basic: {
            capital: "N'Djamena",
            continent: "Africa",
            region: "Central Africa",
            subregion: "Middle Africa",
            population: 18278568,
            area: 1284000,
            populationDensity: 13,
            independence: "1960",
            callingCode: "+235",
            tld: ".td",
            drivingSide: "Right",
            electricity: "220V, 50Hz"
        },

        location: {
            coordinates: [15.4542, 18.7322],
            timezone: "UTC+1 (WAT)",
            neighbors: ["Libya", "Sudan", "Central African Republic", "Cameroon", "Nigeria", "Niger"],
            borders: 6406,
            hemispheres: ["Northern", "Eastern"]
        },

        political: {
            government: "Unitary Provisional Republic (Transitional Military Council)",
            headOfState: "President Mahamat Idriss Déby",
            headOfGovernment: "Prime Minister Allamaye Halina",
            legislature: "Transitional National Council",
            legalSystem: "Mixed (Civil Law, Customary Law, Islamic Law)",
            states: 23,
            regions: 23,
            departments: 61,
            largestCity: "N'Djamena",
            organizations: ["UN", "AU", "Francophonie", "CEMAC", "OIC", "WTO"]
        },

        economy: {
            gdp: "$12.70 Billion",
            gdpPPP: "$28.82 Billion",
            gdpPerCapita: "$728",
            gdpRank: "#128",
            gdpGrowth: "3.4%",
            currency: "Central African CFA Franc",
            currencyCode: "XAF",
            currencySymbol: "FCFA",
            inflation: "5.8%",
            unemployment: "1.1%",
            majorSectors: ["Services (41%)", "Agriculture (39%)", "Industry (16%)"],
            industries: ["Oil", "Cotton Textiles", "Slaughterhouses", "Brewing", "Natron (Sodium Carbonate)", "Soap", "Cigarettes", "Construction"],
            exports: ["Crude Petroleum", "Gold", "Insect Resins", "Oily Seeds", "Cotton"],
            imports: ["Refined Petroleum", "Delivery Trucks", "Packaged Medicaments", "Cement", "Wheat Flour"]
        },

        geography: {
            climate: "Tropical in South; Desert in North",
            avgTemperature: "27.2°C",
            annualRainfall: "322 mm",
            highestPoint: "Emi Koussi (3,445 m)",
            lowestPoint: "Djourab Depression (160 m)",
            coastline: "0 km (Landlocked)",
            forestCover: "4.1%",
            arableLand: "3.9%",
            terrain: "Broad, arid plains in center; desert in north; mountains in northwest; lowlands in south",
            naturalResources: ["Petroleum", "Uranium", "Natron", "Kaolin", "Fish (Lake Chad)", "Gold", "Limestone", "Sand", "Gravel", "Salt"]
        },

        geography_links: {
            rivers: ["Chari River", "Logone River"],
            mountains: ["Tibesti Mountains", "Emi Koussi", "Ennedi Plateau"],
            deserts: ["Sahara Desert", "Ténéré Desert", "Djourab Desert"],
            forests: ["Zakouma National Park", "Manda National Park"],
            oceans: []
        },

        culture: {
            officialLanguages: ["French", "Arabic"],
            languages: ["French", "Arabic", "Sara", "Kanembou", "Ouaddai", "Hadjarai", "120+ languages"],
            religions: ["Islam (52.1%)", "Christianity (44.2%)", "Animism (3.7%)"],
            heritageSites: ["Lakes of Ounianga", "Ennedi Massif"],
            festivals: ["Independence Day", "Freedom and Democracy Day", "Gerewol Festival (Wodaabe)"],
            cuisine: ["Daraba", "Boule (Millet Porridge)", "Kisser", "Moulah", "Fish from Lake Chad"],
            arts: ["Leather Work", "Pottery", "Traditional Dance", "Oral Storytelling"],
            sports: ["Football", "Basketball", "Wrestling", "Athletics"]
        },

        symbols: {
            bird: "None Official",
            animal: "None Official",
            flower: "None Official",
            tree: "None Official",
            anthem: "La Tchadienne",
            motto: "Unity, Work, Progress"
        },

        demographics: {
            lifeExpectancy: 55.17,
            literacyRate: "22.3%",
            urbanPopulation: "24.1%",
            medianAge: 16.1
        },

        history: {
            timeline: [
                { year: "7000 BCE", title: "Early Civilization", description: "Evidence of human settlement at Lake Chad" },
                { year: "9th Century", title: "Kanem Empire", description: "Kanem-Bornu Empire flourished" },
                { year: "1900", title: "French Conquest", description: "France defeated local kingdoms" },
                { year: "1960", title: "Independence", description: "Independence from France" },
                { year: "1965-1990", title: "Civil Wars", description: "Multiple civil wars and Libyan intervention" },
                { year: "2021", title: "Déby Death", description: "President Idriss Déby killed; son took power" }
            ],
            notableFigures: ["Idriss Déby", "Mahamat Idriss Déby", "François Tombalbaye", "Hissène Habré"]
        },

        disputes: [
            { name: "Lake Chad", description: "Transboundary water management issues", type: "Border" }
        ],

        quickFacts: [
            { icon: "water", title: "Lake Chad", text: "Lake Chad shrunk by 90% since 1963" },
            { icon: "mountain", title: "Emi Koussi", text: "Highest peak in Sahara (3,445 m)" },
            { icon: "flag", title: "Similar Flag", text: "Flag nearly identical to Romania's" },
            { icon: "oil-can", title: "Oil Producer", text: "Major oil producer since 2003" },
            { icon: "skull", title: "Oldest Human Skull", text: "Sahelanthropus tchadensis skull found (7 million years old)" }
        ]
    },

    // 7. REPUBLIC OF THE CONGO
    {
        id: "COG",
        name: "Congo",
        officialName: "Republic of the Congo",
        flag: "https://flagcdn.com/w320/cg.png",
        
        images: {
            hero: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=1920&q=80",
            landscape: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=1920&q=80",
            city: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=1920&q=80"
        },

        basic: {
            capital: "Brazzaville",
            continent: "Africa",
            region: "Central Africa",
            subregion: "Middle Africa",
            population: 6106869,
            area: 342000,
            populationDensity: 16,
            independence: "1960",
            callingCode: "+242",
            tld: ".cg",
            drivingSide: "Right",
            electricity: "230V, 50Hz"
        },

        location: {
            coordinates: [-0.2280, 15.8277],
            timezone: "UTC+1 (WAT)",
            neighbors: ["Gabon", "Cameroon", "Central African Republic", "Democratic Republic of the Congo", "Angola (Cabinda)"],
            borders: 5008,
            hemispheres: ["Southern", "Eastern"]
        },

        political: {
            government: "Unitary Semi-Presidential Republic",
            headOfState: "President Denis Sassou Nguesso",
            headOfGovernment: "Prime Minister Anatole Collinet Makosso",
            legislature: "Parliament (Senate & National Assembly)",
            legalSystem: "Civil Law (French influence)",
            states: 12,
            departments: 12,
            largestCity: "Brazzaville",
            organizations: ["UN", "AU", "Francophonie", "CEMAC", "OPEC", "WTO"]
        },

        economy: {
            gdp: "$13.33 Billion",
            gdpPPP: "$24.47 Billion",
            gdpPerCapita: "$2,276",
            gdpRank: "#125",
            gdpGrowth: "2.4%",
            currency: "Central African CFA Franc",
            currencyCode: "XAF",
            currencySymbol: "FCFA",
            inflation: "3.0%",
            unemployment: "21.8%",
            majorSectors: ["Industry (51%)", "Services (44%)", "Agriculture (5%)"],
            industries: ["Petroleum Extraction", "Cement", "Lumber", "Brewing", "Sugar", "Palm Oil", "Soap", "Flour", "Cigarettes"],
            exports: ["Crude Petroleum", "Copper Ore", "Refined Petroleum", "Sawn Wood", "Manganese Ore"],
            imports: ["Poultry Meat", "Refined Petroleum", "Ships", "Wheat", "Rice"]
        },

        geography: {
            climate: "Tropical; Rainy Season March to June; Dry Season June to October",
            avgTemperature: "25.4°C",
            annualRainfall: "1,646 mm",
            highestPoint: "Mont Nabeba (1,020 m)",
            lowestPoint: "Atlantic Ocean (0 m)",
            coastline: "169 km",
            forestCover: "65.4%",
            arableLand: "1.6%",
            terrain: "Coastal plain, southern basin, central plateau, northern basin",
            naturalResources: ["Petroleum", "Timber", "Potash", "Lead", "Zinc", "Uranium", "Copper", "Phosphates", "Gold", "Magnesium", "Natural Gas", "Hydropower"]
        },

        geography_links: {
            rivers: ["Congo River", "Ubangi River", "Sangha River", "Kouilou River"],
            mountains: ["Mayombe Mountains", "Chaillu Mountains", "Mont Nabeba"],
            deserts: [],
            forests: ["Congo Basin Rainforest", "Odzala-Kokoua National Park", "Nouabalé-Ndoki National Park"],
            oceans: ["Atlantic Ocean"]
        },

        culture: {
            officialLanguages: ["French"],
            languages: ["French", "Lingala", "Kikongo", "Kituba", "Teke", "Mbochi"],
            religions: ["Christianity (88%)", "Traditional Beliefs (5%)", "Islam (2%)", "No Religion (5%)"],
            heritageSites: ["Sangha Trinational"],
            festivals: ["Independence Day", "National Day", "Fête de la Musique"],
            cuisine: ["Saka-Saka", "Fufu", "Moambe Chicken", "Poulet Nyembwe", "Maboke (Fish in Leaves)"],
            arts: ["Wood Carving", "Basket Weaving", "Traditional Dance", "Congolese Rumba"],
            sports: ["Football", "Basketball", "Handball", "Athletics"]
        },

        symbols: {
            bird: "None Official",
            animal: "None Official",
            flower: "None Official",
            tree: "None Official",
            anthem: "La Congolaise",
            motto: "Unity, Work, Progress"
        },

        demographics: {
            lifeExpectancy: 65.22,
            literacyRate: "80.3%",
            urbanPopulation: "69.2%",
            medianAge: 19.7
        },

        history: {
            timeline: [
                { year: "15th Century", title: "Kingdom of Kongo", description: "Part of powerful Kongo Kingdom" },
                { year: "1880", title: "French Congo", description: "Pierre de Brazza established French presence" },
                { year: "1960", title: "Independence", description: "Independence from France" },
                { year: "1969", title: "Marxist State", description: "Became People's Republic of the Congo" },
                { year: "1991", title: "Multi-Party", description: "Multi-party democracy introduced" },
                { year: "1997", title: "Civil War End", description: "Sassou Nguesso returned to power" }
            ],
            notableFigures: ["Denis Sassou Nguesso", "Fulbert Youlou", "Marien Ngouabi", "Pierre Savorgnan de Brazza"]
        },

        disputes: [],

        quickFacts: [
            { icon: "city", title: "Twin Capitals", text: "Brazzaville and Kinshasa are closest capital cities in the world" },
            { icon: "oil-can", title: "Oil Economy", text: "Oil accounts for 90% of exports" },
            { icon: "tree", title: "Rainforest", text: "65% covered by Congo Basin rainforest" },
            { icon: "paw", title: "Gorillas", text: "Home to western lowland gorillas" },
            { icon: "user", title: "Brazzaville", text: "Named after explorer Pierre de Brazza" }
        ]
    },

    // 8. DEMOCRATIC REPUBLIC OF THE CONGO
    {
        id: "COD",
        name: "DR Congo",
        officialName: "Democratic Republic of the Congo",
        flag: "https://flagcdn.com/w320/cd.png",
        
        images: {
            hero: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=1920&q=80",
            landscape: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=1920&q=80",
            city: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=1920&q=80"
        },

        basic: {
            capital: "Kinshasa",
            continent: "Africa",
            region: "Central Africa",
            subregion: "Middle Africa",
            population: 102262808,
            area: 2344858,
            populationDensity: 40,
            independence: "1960",
            callingCode: "+243",
            tld: ".cd",
            drivingSide: "Right",
            electricity: "220V, 50Hz"
        },

        location: {
            coordinates: [-4.0383, 21.7587],
            timezone: "UTC+1 to UTC+2 (WAT/CAT)",
            neighbors: ["Congo", "Central African Republic", "South Sudan", "Uganda", "Rwanda", "Burundi", "Tanzania", "Zambia", "Angola"],
            borders: 10481,
            hemispheres: ["Southern", "Eastern"]
        },

        political: {
            government: "Unitary Semi-Presidential Republic",
            headOfState: "President Félix Tshisekedi",
            headOfGovernment: "Prime Minister Judith Suminwa Tuluka",
            legislature: "Parliament (Senate & National Assembly)",
            legalSystem: "Civil Law (Belgian influence)",
            states: 26,
            provinces: 26,
            largestCity: "Kinshasa",
            organizations: ["UN", "AU", "SADC", "Francophonie", "COMESA", "WTO"]
        },

        economy: {
            gdp: "$66.38 Billion",
            gdpPPP: "$143.0 Billion",
            gdpPerCapita: "$654",
            gdpRank: "#71",
            gdpGrowth: "8.4%",
            currency: "Congolese Franc",
            currencyCode: "CDF",
            currencySymbol: "FC",
            inflation: "19.9%",
            unemployment: "4.9%",
            majorSectors: ["Services (47%)", "Agriculture (19%)", "Industry (33%)"],
            industries: ["Mining (Copper, Cobalt, Coltan, Gold, Diamonds)", "Mineral Processing", "Consumer Products", "Food Processing", "Cement", "Lumber"],
            exports: ["Copper", "Cobalt", "Crude Petroleum", "Diamonds", "Gold", "Tin"],
            imports: ["Refined Petroleum", "Packaged Medicaments", "Sulfuric Acid", "Delivery Trucks", "Poultry Meat"]
        },

        geography: {
            climate: "Tropical; Hot and Humid in Equatorial River Basin; Cooler and Drier in Southern Highlands",
            avgTemperature: "24.7°C",
            annualRainfall: "1,534 mm",
            highestPoint: "Mount Stanley (Margherita Peak) (5,109 m)",
            lowestPoint: "Atlantic Ocean (0 m)",
            coastline: "37 km",
            forestCover: "67.3%",
            arableLand: "3.1%",
            terrain: "Vast central basin is a low-lying plateau; mountains in east",
            naturalResources: ["Cobalt", "Copper", "Niobium", "Tantalum (Coltan)", "Petroleum", "Industrial and Gem Diamonds", "Gold", "Silver", "Zinc", "Manganese", "Tin", "Uranium", "Coal", "Hydropower", "Timber"]
        },

        geography_links: {
            rivers: ["Congo River", "Lualaba River", "Kasai River", "Ubangi River", "Lomami River"],
            mountains: ["Rwenzori Mountains", "Virunga Mountains", "Mitumba Mountains", "Mount Stanley", "Mount Nyiragongo"],
            deserts: [],
            forests: ["Congo Basin Rainforest", "Virunga National Park", "Salonga National Park", "Okapi Wildlife Reserve"],
            oceans: ["Atlantic Ocean"]
        },

        culture: {
            officialLanguages: ["French"],
            languages: ["French", "Lingala", "Kikongo", "Swahili", "Tshiluba", "200+ local languages"],
            religions: ["Christianity (95.8%)", "Islam (1.5%)", "Traditional Beliefs (1.8%)", "Others (0.9%)"],
            heritageSites: ["Virunga National Park", "Garamba National Park", "Kahuzi-Biega National Park", "Salonga National Park", "Okapi Wildlife Reserve"],
            festivals: ["Independence Day", "Liberation Day", "Fête de la Musique"],
            cuisine: ["Fufu", "Moambe", "Saka-Saka", "Pondu", "Liboke (Fish in Banana Leaves)", "Kwanga"],
            arts: ["Congolese Rumba", "Soukous Music", "Wood Carving", "Mask Making", "Contemporary Art"],
            sports: ["Football", "Basketball", "Boxing", "Athletics"]
        },

        symbols: {
            bird: "None Official",
            animal: "Okapi",
            flower: "None Official",
            tree: "None Official",
            anthem: "Debout Congolais",
            motto: "Justice, Peace, Work"
        },

        demographics: {
            lifeExpectancy: 61.6,
            literacyRate: "77%",
            urbanPopulation: "46.8%",
            medianAge: 16.9
        },

        history: {
            timeline: [
                { year: "1885", title: "Congo Free State", description: "Personal colony of King Leopold II of Belgium" },
                { year: "1908", title: "Belgian Congo", description: "Became Belgian colony" },
                { year: "1960", title: "Independence", description: "Independence; chaos ensued" },
                { year: "1965", title: "Mobutu", description: "Mobutu Sese Seko seized power" },
                { year: "1971", title: "Zaire", description: "Renamed Republic of Zaire" },
                { year: "1997", title: "DRC", description: "Laurent-Désiré Kabila renamed country" },
                { year: "1998-2003", title: "Second Congo War", description: "Deadliest conflict since WWII" }
            ],
            notableFigures: ["Patrice Lumumba", "Mobutu Sese Seko", "Laurent-Désiré Kabila", "Joseph Kabila", "Félix Tshisekedi"]
        },

        disputes: [
            { name: "M23 Rebellion", description: "Ongoing conflict in eastern DRC", type: "Territory" },
            { name: "Lake Tanganyika", description: "Maritime boundary disputes with neighbors", type: "Maritime" }
        ],

        quickFacts: [
            { icon: "gem", title: "Cobalt", text: "Produces 70% of world's cobalt (essential for batteries)" },
            { icon: "map", title: "Size", text: "2nd largest country in Africa; 11th in world" },
            { icon: "users", title: "Francophone", text: "Largest French-speaking country by population" },
            { icon: "tree", title: "Rainforest", text: "World's second-largest rainforest" },
            { icon: "paw", title: "Mountain Gorillas", text: "Home to endangered mountain gorillas" },
            { icon: "skull", title: "Deadliest War", text: "Second Congo War killed 5.4 million (1998-2003)" }
        ]
    },

    // 9. EQUATORIAL GUINEA
    {
        id: "GNQ",
        name: "Equatorial Guinea",
        officialName: "Republic of Equatorial Guinea",
        flag: "https://flagcdn.com/w320/gq.png",
        
        images: {
            hero: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=1920&q=80",
            landscape: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=1920&q=80",
            city: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=1920&q=80"
        },

        basic: {
            capital: "Malabo (current), Ciudad de la Paz (planned)",
            continent: "Africa",
            region: "Central Africa",
            subregion: "Middle Africa",
            population: 1714671,
            area: 28051,
            populationDensity: 50,
            independence: "1968",
            callingCode: "+240",
            tld: ".gq",
            drivingSide: "Right",
            electricity: "220V, 50Hz"
        },

        location: {
            coordinates: [1.6508, 10.2679],
            timezone: "UTC+1 (WAT)",
            neighbors: ["Cameroon", "Gabon"],
            borders: 528,
            hemispheres: ["Northern", "Eastern"]
        },

        political: {
            government: "Unitary Presidential Republic",
            headOfState: "President Teodoro Obiang Nguema Mbasogo",
            headOfGovernment: "Prime Minister Manuela Roka Botey",
            legislature: "Parliament (Senate & Chamber of Deputies)",
            legalSystem: "Mixed (Civil Law and Customary Law)",
            states: 8,
            provinces: 8,
            largestCity: "Bata",
            organizations: ["UN", "AU", "CEMAC", "Francophonie", "CPLP", "OPEC", "WTO"]
        },

        economy: {
            gdp: "$12.27 Billion",
            gdpPPP: "$24.45 Billion",
            gdpPerCapita: "$8,132",
            gdpRank: "#129",
            gdpGrowth: "-6.2%",
            currency: "Central African CFA Franc",
            currencyCode: "XAF",
            currencySymbol: "FCFA",
            inflation: "4.9%",
            unemployment: "8.6%",
            majorSectors: ["Industry (51%)", "Services (45%)", "Agriculture (2%)"],
            industries: ["Petroleum", "Natural Gas", "Sawmilling", "Methanol Production", "Fish Processing"],
            exports: ["Crude Petroleum", "Petroleum Gas", "Rough Wood", "Acyclic Alcohols"],
            imports: ["Ships", "Refined Petroleum", "Delivery Trucks", "Cars", "Poultry Meat"]
        },

        geography: {
            climate: "Tropical; Always Hot, Humid",
            avgTemperature: "25.5°C",
            annualRainfall: "2,156 mm",
            highestPoint: "Pico Basilé (3,008 m)",
            lowestPoint: "Atlantic Ocean (0 m)",
            coastline: "296 km",
            forestCover: "57.3%",
            arableLand: "4.6%",
            terrain: "Coastal plains rise to interior hills; islands are volcanic",
            naturalResources: ["Petroleum", "Natural Gas", "Timber", "Gold", "Bauxite", "Diamonds", "Tantalum", "Sand and Gravel", "Clay"]
        },

        geography_links: {
            rivers: ["Mbini River", "Ntem River", "Campo River"],
            mountains: ["Pico Basilé", "Caldera de Luba"],
            deserts: [],
            forests: ["Monte Alén National Park", "Bioko Rainforest"],
            oceans: ["Atlantic Ocean", "Gulf of Guinea"]
        },

        culture: {
            officialLanguages: ["Spanish", "French", "Portuguese"],
            languages: ["Spanish", "French", "Portuguese", "Fang", "Bubi", "Annobonese", "Igbo"],
            religions: ["Christianity (93%)", "Islam (2%)", "Traditional Beliefs (5%)"],
            heritageSites: [],
            festivals: ["Independence Day", "Armed Forces Day", "Constitution Day"],
            cuisine: ["Succotash", "Pepper Soup", "Fried Plantains", "Fish Stew", "Cassava"],
            arts: ["Wood Carving", "Traditional Dance", "Fang Sculpture"],
            sports: ["Football", "Swimming", "Basketball"]
        },

        symbols: {
            bird: "None Official",
            animal: "None Official",
            flower: "None Official",
            tree: "Ceiba (Silk-Cotton Tree)",
            anthem: "Caminemos pisando las sendas de nuestra inmensa felicidad",
            motto: "Unity, Peace, Justice"
        },

        demographics: {
            lifeExpectancy: 60.59,
            literacyRate: "95.3%",
            urbanPopulation: "73.6%",
            medianAge: 22.4
        },

        history: {
            timeline: [
                { year: "1471", title: "Portuguese Discovery", description: "Portuguese discovered Fernando Pó (Bioko)" },
                { year: "1778", title: "Spanish Colony", description: "Spain acquired territory from Portugal" },
                { year: "1968", title: "Independence", description: "Independence from Spain" },
                { year: "1979", title: "Obiang Coup", description: "Teodoro Obiang Nguema Mbasogo seized power" },
                { year: "1996", title: "Oil Discovery", description: "Major oil reserves discovered" }
            ],
            notableFigures: ["Teodoro Obiang Nguema Mbasogo", "Francisco Macías Nguema"]
        },

        disputes: [
            { name: "Corisco Bay Islands", description: "Minor dispute with Gabon", type: "Territory" }
        ],

        quickFacts: [
            { icon: "language", title: "Only Hispanic Africa", text: "Only Spanish-speaking country in Africa" },
            { icon: "crown", title: "Longest Ruler", text: "Teodoro Obiang is world's longest-serving president (since 1979)" },
            { icon: "oil-can", title: "Oil Rich", text: "One of Africa's largest oil producers" },
            { icon: "island", title: "Island Capital", text: "Capital Malabo is on an island (Bioko)" },
            { icon: "dollar-sign", title: "Income Inequality", text: "High GDP but severe wealth inequality" }
        ]
    },

    // 10. GABON
    {
        id: "GAB",
        name: "Gabon",
        officialName: "Gabonese Republic",
        flag: "https://flagcdn.com/w320/ga.png",
        
        images: {
            hero: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=1920&q=80",
            landscape: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=1920&q=80",
            city: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=1920&q=80"
        },

        basic: {
            capital: "Libreville",
            continent: "Africa",
            region: "Central Africa",
            subregion: "Middle Africa",
            population: 2388992,
            area: 267668,
            populationDensity: 9,
            independence: "1960",
            callingCode: "+241",
            tld: ".ga",
            drivingSide: "Right",
            electricity: "220V, 50Hz"
        },

        location: {
            coordinates: [-0.8037, 11.6094],
            timezone: "UTC+1 (WAT)",
            neighbors: ["Equatorial Guinea", "Cameroon", "Congo"],
            borders: 3261,
            hemispheres: ["Southern", "Eastern"]
        },

        political: {
            government: "Presidential Republic (Transitional)",
            headOfState: "President Brice Clotaire Oligui Nguema",
            headOfGovernment: "Prime Minister Raymond Ndong Sima",
            legislature: "Transitional Parliament",
            legalSystem: "Civil Law (French influence)",
            states: 9,
            provinces: 9,
            departments: 50,
            largestCity: "Libreville",
            organizations: ["UN", "AU", "Francophonie", "CEMAC", "OPEC", "WTO"]
        },

        economy: {
            gdp: "$21.07 Billion",
            gdpPPP: "$38.36 Billion",
            gdpPerCapita: "$8,820",
            gdpRank: "#111",
            gdpGrowth: "2.8%",
            currency: "Central African CFA Franc",
            currencyCode: "XAF",
            currencySymbol: "FCFA",
            inflation: "3.6%",
            unemployment: "20.4%",
            majorSectors: ["Industry (44%)", "Services (50%)", "Agriculture (5%)"],
            industries: ["Petroleum Extraction and Refining", "Manganese", "Gold", "Chemicals", "Ship Repair", "Food and Beverages", "Textiles", "Lumber", "Cement"],
            exports: ["Crude Petroleum", "Manganese Ore", "Sawn Wood", "Gold", "Refined Petroleum"],
            imports: ["Refined Petroleum", "Poultry Meat", "Rice", "Delivery Trucks", "Packaged Medicaments"]
        },

        geography: {
            climate: "Tropical; Always Hot, Humid",
            avgTemperature: "25.9°C",
            annualRainfall: "1,831 mm",
            highestPoint: "Mont Iboundji (1,575 m)",
            lowestPoint: "Atlantic Ocean (0 m)",
            coastline: "885 km",
            forestCover: "89.3%",
            arableLand: "1.3%",
            terrain: "Narrow coastal plain; hilly interior; savanna in east and south",
            naturalResources: ["Petroleum", "Natural Gas", "Diamond", "Niobium", "Manganese", "Uranium", "Gold", "Timber", "Iron Ore", "Hydropower"]
        },

        geography_links: {
            rivers: ["Ogooué River", "Nyanga River", "Ivindo River"],
            mountains: ["Monts de Cristal", "Mont Iboundji", "Chaillu Mountains"],
            deserts: [],
            forests: ["Congo Basin Rainforest", "Lopé National Park", "Ivindo National Park"],
            oceans: ["Atlantic Ocean", "Gulf of Guinea"]
        },

        culture: {
            officialLanguages: ["French"],
            languages: ["French", "Fang", "Myene", "Bateke", "Bapounou/Eschira", "Bandjabi"],
            religions: ["Christianity (79.3%)", "Islam (9.8%)", "Animism (8.7%)", "No Religion (2.2%)"],
            heritageSites: ["Ecosystem and Relict Cultural Landscape of Lopé-Okanda", "Ivindo National Park"],
            festivals: ["Independence Day", "Fête du Travail", "National Day"],
            cuisine: ["Nyembwe", "Poulet Nyembwe", "Smoked Fish", "Cassava Leaves", "Plantains"],
            arts: ["Bwiti Ceremonies", "Wood Carving", "Mask Making", "Traditional Dance"],
            sports: ["Football", "Basketball", "Handball", "Martial Arts"]
        },

        symbols: {
            bird: "Black Kite",
            animal: "Black Panther",
            flower: "None Official",
            tree: "Okoumé",
            anthem: "La Concorde",
            motto: "Union, Work, Justice"
        },

        demographics: {
            lifeExpectancy: 67.03,
            literacyRate: "84.7%",
            urbanPopulation: "90.4%",
            medianAge: 22.1
        },

        history: {
            timeline: [
                { year: "15th Century", title: "Portuguese Arrival", description: "Portuguese traders arrived" },
                { year: "1839", title: "French Colony", description: "French established presence" },
                { year: "1849", title: "Libreville", description: "Libreville founded for freed slaves" },
                { year: "1960", title: "Independence", description: "Independence from France" },
                { year: "1967", title: "Bongo Era", description: "Omar Bongo became president (ruled 41 years)" },
                { year: "2023", title: "Military Coup", description: "Military overthrew Ali Bongo" }
            ],
            notableFigures: ["Omar Bongo", "Ali Bongo Ondimba", "Léon M'ba"]
        },

        disputes: [
            { name: "Corisco Bay Islands", description: "Minor dispute with Equatorial Guinea", type: "Territory" }
        ],

        quickFacts: [
            { icon: "tree", title: "Forest Cover", text: "89% forest cover - highest in Africa" },
            { icon: "oil-can", title: "Oil Producer", text: "Major oil producer since 1970s" },
            { icon: "paw", title: "Wildlife", text: "Home to forest elephants, gorillas, and mandrills" },
            { icon: "crown", title: "Bongo Dynasty", text: "Omar Bongo ruled for 41 years (1967-2009)" },
            { icon: "city", title: "Libreville", text: "Name means 'free town' - founded for freed slaves" }
        ]
    },

    // 11. SÃO TOMÉ AND PRÍNCIPE
    {
        id: "STP",
        name: "São Tomé and Príncipe",
        officialName: "Democratic Republic of São Tomé and Príncipe",
        flag: "https://flagcdn.com/w320/st.png",
        
        images: {
            hero: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=1920&q=80",
            landscape: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=1920&q=80",
            city: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=1920&q=80"
        },

        basic: {
            capital: "São Tomé",
            continent: "Africa",
            region: "Central Africa",
            subregion: "Middle Africa",
            population: 227679,
            area: 964,
            populationDensity: 228,
            independence: "1975",
            callingCode: "+239",
            tld: ".st",
            drivingSide: "Right",
            electricity: "220V, 50Hz"
        },

        location: {
            coordinates: [0.1864, 6.6131],
            timezone: "UTC+0 (GMT)",
            neighbors: [],
            borders: 0,
            hemispheres: ["Northern", "Eastern"],
            islandNation: true,
            islands: 2
        },

        political: {
            government: "Unitary Semi-Presidential Republic",
            headOfState: "President Carlos Vila Nova",
            headOfGovernment: "Prime Minister Patrice Trovoada",
            legislature: "National Assembly",
            legalSystem: "Civil Law (Portuguese influence)",
            states: 2,
            provinces: 2,
            districts: 7,
            largestCity: "São Tomé",
            organizations: ["UN", "AU", "CPLP", "Francophonie", "WTO"]
        },

        economy: {
            gdp: "$0.60 Billion",
            gdpPPP: "$1.25 Billion",
            gdpPerCapita: "$2,590",
            gdpRank: "#187",
            gdpGrowth: "0.5%",
            currency: "São Tomé and Príncipe Dobra",
            currencyCode: "STN",
            currencySymbol: "Db",
            inflation: "18.0%",
            unemployment: "14.4%",
            majorSectors: ["Services (68%)", "Agriculture (13%)", "Industry (14%)"],
            industries: ["Light Construction", "Textiles", "Soap", "Beer", "Fish Processing", "Timber"],
            exports: ["Cocoa Beans", "Palm Oil", "Copra", "Coffee"],
            imports: ["Refined Petroleum", "Cars", "Rice", "Wheat", "Poultry Meat"]
        },

        geography: {
            climate: "Tropical; Hot, Humid; One Rainy Season (October to May)",
            avgTemperature: "26.0°C",
            annualRainfall: "2,900 mm",
            highestPoint: "Pico de São Tomé (2,024 m)",
            lowestPoint: "Atlantic Ocean (0 m)",
            coastline: "209 km",
            forestCover: "55.8%",
            arableLand: "9.1%",
            terrain: "Volcanic, mountainous",
            naturalResources: ["Fish", "Hydropower", "Potential Petroleum"]
        },

        geography_links: {
            rivers: ["Io Grande", "Manuel Jorge River"],
            mountains: ["Pico de São Tomé", "Pico Cão Grande"],
            deserts: [],
            forests: ["Obo National Park", "Primary Rainforest"],
            oceans: ["Atlantic Ocean", "Gulf of Guinea"]
        },

        culture: {
            officialLanguages: ["Portuguese"],
            languages: ["Portuguese", "Forro", "Angolar", "Principense", "Cape Verdean Creole"],
            religions: ["Roman Catholicism (55.7%)", "Evangelicalism (4.1%)", "Other Christian (3.1%)", "No Religion (21.2%)"],
            heritageSites: [],
            festivals: ["Independence Day", "Carnival", "São João Festival", "Auto de Floripes"],
            cuisine: ["Calulu", "Flying Fish", "Breadfruit", "Banana da Terra", "Palm Wine"],
            arts: ["Tchiloli (Theatre)", "Danço Congo", "Wood Carving", "Traditional Music"],
            sports: ["Football", "Athletics", "Swimming"]
        },

        symbols: {
            bird: "African Grey Parrot",
            animal: "None Official",
            flower: "None Official",
            tree: "None Official",
            anthem: "Independência total",
            motto: "Unity, Discipline, Work"
        },

        demographics: {
            lifeExpectancy: 70.79,
            literacyRate: "92.8%",
            urbanPopulation: "76.0%",
            medianAge: 19.3
        },

        history: {
            timeline: [
                { year: "1470", title: "Portuguese Discovery", description: "Portuguese explorers discovered uninhabited islands" },
                { year: "1493", title: "Settlement", description: "Portuguese settlement began" },
                { year: "16th-19th Century", title: "Plantation Economy", description: "Sugar, coffee, and cocoa plantations using slave labor" },
                { year: "1975", title: "Independence", description: "Independence from Portugal" },
                { year: "1991", title: "Multi-Party", description: "Multi-party democracy introduced" }
            ],
            notableFigures: ["Manuel Pinto da Costa", "Miguel Trovoada", "Fradique de Menezes"]
        },

        disputes: [],

        quickFacts: [
            { icon: "map", title: "2nd Smallest", text: "Africa's 2nd smallest country" },
            { icon: "globe", title: "Equator", text: "Islands straddle the equator" },
            { icon: "chocolate-bar", title: "Cocoa", text: "Once world's largest cocoa producer" },
            { icon: "mountain", title: "Pico Cão Grande", text: "Famous volcanic needle rock formation" },
            { icon: "theater-masks", title: "Tchiloli", text: "Unique Afro-Portuguese theatre tradition" }
        ]
    },

    // 12. BURUNDI
    {
        id: "BDI",
        name: "Burundi",
        officialName: "Republic of Burundi",
        flag: "https://flagcdn.com/w320/bi.png",
        
        images: {
            hero: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=1920&q=80",
            landscape: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=1920&q=80",
            city: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=1920&q=80"
        },

        basic: {
            capital: "Gitega (Political), Bujumbura (Economic)",
            continent: "Africa",
            region: "East Africa",
            subregion: "Eastern Africa",
            population: 12889576,
            area: 27834,
            populationDensity: 463,
            independence: "1962",
            callingCode: "+257",
            tld: ".bi",
            drivingSide: "Right",
            electricity: "220V, 50Hz"
        },

        location: {
            coordinates: [-3.3731, 29.9189],
            timezone: "UTC+2 (CAT)",
            neighbors: ["Rwanda", "Tanzania", "Democratic Republic of the Congo"],
            borders: 1140,
            hemispheres: ["Southern", "Eastern"]
        },

        political: {
            government: "Unitary Presidential Republic",
            headOfState: "President Évariste Ndayishimiye",
            headOfGovernment: "Prime Minister Gervais Ndirakobuca",
            legislature: "Parliament (Senate & National Assembly)",
            legalSystem: "Mixed (Civil Law and Customary Law)",
            states: 18,
            provinces: 18,
            communes: 119,
            largestCity: "Bujumbura",
            organizations: ["UN", "AU", "EAC", "Francophonie", "COMESA", "WTO"]
        },

        economy: {
            gdp: "$3.07 Billion",
            gdpPPP: "$9.61 Billion",
            gdpPerCapita: "$238",
            gdpRank: "#160",
            gdpGrowth: "1.8%",
            currency: "Burundian Franc",
            currencyCode: "BIF",
            currencySymbol: "FBu",
            inflation: "27.0%",
            unemployment: "1.5%",
            majorSectors: ["Agriculture (40%)", "Services (43%)", "Industry (16%)"],
            industries: ["Light Consumer Goods", "Blankets", "Shoes", "Soap", "Beer", "Assembly of Imported Components", "Public Works Construction", "Food Processing"],
            exports: ["Gold", "Coffee", "Tea", "Tin Ore", "Rare Earth Ore"],
            imports: ["Refined Petroleum", "Packaged Medicaments", "Cement", "Raw Sugar", "Delivery Trucks"]
        },

        geography: {
            climate: "Equatorial; High Plateau with Considerable Altitude Variation",
            avgTemperature: "20.0°C",
            annualRainfall: "1,274 mm",
            highestPoint: "Mount Heha (2,670 m)",
            lowestPoint: "Lake Tanganyika (772 m)",
            coastline: "0 km (Landlocked)",
            forestCover: "10.5%",
            arableLand: "38.9%",
            terrain: "Hilly and mountainous, dropping to a plateau in east, some plains",
            naturalResources: ["Nickel", "Uranium", "Rare Earth Oxides", "Peat", "Cobalt", "Copper", "Platinum", "Vanadium", "Arable Land", "Hydropower", "Niobium", "Tantalum", "Gold", "Tin", "Tungsten", "Kaolin", "Limestone"]
        },

        geography_links: {
            rivers: ["Ruzizi River", "Malagarasi River", "Ruvubu River", "Kagera River"],
            mountains: ["Mount Heha", "Nile-Congo Crest", "Kibira Mountains"],
            deserts: [],
            forests: ["Kibira National Park", "Bururi Forest Reserve"],
            oceans: []
        },

        culture: {
            officialLanguages: ["Kirundi", "French", "English"],
            languages: ["Kirundi", "French", "English", "Swahili"],
            religions: ["Roman Catholicism (58.6%)", "Protestantism (35.3%)", "Islam (3.4%)", "Traditional Beliefs (1.3%)"],
            heritageSites: [],
            festivals: ["Independence Day", "Unity Day", "Assumption Day", "Umuganura (Harvest Festival)"],
            cuisine: ["Ugali", "Beans", "Plantains", "Sweet Potatoes", "Cassava", "Brochettes"],
            arts: ["Royal Drumming", "Intore Dance", "Basket Weaving", "Pottery"],
            sports: ["Football", "Basketball", "Athletics", "Volleyball"]
        },

        symbols: {
            bird: "None Official",
            animal: "None Official",
            flower: "None Official",
            tree: "None Official",
            anthem: "Burundi Bwacu",
            motto: "Unity, Work, Progress"
        },

        demographics: {
            lifeExpectancy: 62.12,
            literacyRate: "68.4%",
            urbanPopulation: "14.4%",
            medianAge: 17.3
        },

        history: {
            timeline: [
                { year: "16th Century", title: "Kingdom Founded", description: "Kingdom of Burundi established" },
                { year: "1890", title: "German Colony", description: "Became part of German East Africa" },
                { year: "1916", title: "Belgian Rule", description: "Belgium took control in WWI" },
                { year: "1962", title: "Independence", description: "Independence from Belgium" },
                { year: "1972, 1993", title: "Ethnic Violence", description: "Major Hutu-Tutsi conflicts" },
                { year: "2005", title: "Peace", description: "End of civil war; new constitution" }
            ],
            notableFigures: ["Mwami Ntare V", "Michel Micombero", "Pierre Nkurunziza", "Évariste Ndayishimiye"]
        },

        disputes: [],

        quickFacts: [
            { icon: "users", title: "Dense", text: "One of Africa's most densely populated countries" },
            { icon: "water", title: "Nile Source", text: "Source of the Nile River is in Burundi" },
            { icon: "drum", title: "Royal Drums", text: "Royal Drummers of Burundi are world-famous" },
            { icon: "dollar-sign", title: "Poorest", text: "One of world's poorest countries" },
            { icon: "coffee", title: "Coffee", text: "Coffee is main export crop" }
        ]
    },

    // 13. COMOROS
    {
        id: "COM",
        name: "Comoros",
        officialName: "Union of the Comoros",
        flag: "https://flagcdn.com/w320/km.png",
        
        images: {
            hero: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=1920&q=80",
            landscape: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=1920&q=80",
            city: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=1920&q=80"
        },

        basic: {
            capital: "Moroni",
            continent: "Africa",
            region: "East Africa",
            subregion: "Eastern Africa",
            population: 836774,
            area: 1862,
            populationDensity: 447,
            independence: "1975",
            callingCode: "+269",
            tld: ".km",
            drivingSide: "Right",
            electricity: "220V, 50Hz"
        },

        location: {
            coordinates: [-11.6455, 43.3333],
            timezone: "UTC+3 (EAT)",
            neighbors: [],
            borders: 0,
            hemispheres: ["Southern", "Eastern"],
            islandNation: true,
            islands: 3
        },

        political: {
            government: "Federal Presidential Republic",
            headOfState: "President Azali Assoumani",
            headOfGovernment: "President Azali Assoumani",
            legislature: "Assembly of the Union",
            legalSystem: "Mixed (Islamic Law, French Civil Law, Customary Law)",
            states: 3,
            islands: 3,
            largestCity: "Moroni",
            organizations: ["UN", "AU", "Arab League", "OIC", "Francophonie", "COMESA", "WTO"]
        },

        economy: {
            gdp: "$1.35 Billion",
            gdpPPP: "$3.17 Billion",
            gdpPerCapita: "$1,578",
            gdpRank: "#174",
            gdpGrowth: "3.0%",
            currency: "Comorian Franc",
            currencyCode: "KMF",
            currencySymbol: "CF",
            inflation: "8.8%",
            unemployment: "4.3%",
            majorSectors: ["Agriculture (48%)", "Services (44%)", "Industry (8%)"],
            industries: ["Fishing", "Tourism", "Perfume Distillation", "Textiles", "Furniture", "Jewelry", "Construction Materials", "Soft Drinks"],
            exports: ["Cloves", "Vanilla", "Ylang-Ylang", "Perfume Oil", "Copra"],
            imports: ["Rice", "Refined Petroleum", "Poultry Meat", "Cement", "Wheat Flour"]
        },

        geography: {
            climate: "Tropical Marine; Rainy Season (November to May)",
            avgTemperature: "25.6°C",
            annualRainfall: "2,700 mm",
            highestPoint: "Mount Karthala (2,360 m)",
            lowestPoint: "Indian Ocean (0 m)",
            coastline: "340 km",
            forestCover: "19.9%",
            arableLand: "46.7%",
            terrain: "Volcanic islands, interiors vary from steep mountains to low hills",
            naturalResources: ["Fish"]
        },

        geography_links: {
            rivers: [],
            mountains: ["Mount Karthala", "Mount Ntringui", "La Grille"],
            deserts: [],
            forests: ["Mount Karthala Forest", "Mohéli Marine Park"],
            oceans: ["Indian Ocean", "Mozambique Channel"]
        },

        culture: {
            officialLanguages: ["Comorian", "Arabic", "French"],
            languages: ["Comorian (Shikomori)", "Arabic", "French"],
            religions: ["Sunni Islam (98%)", "Roman Catholicism (2%)"],
            heritageSites: [],
            festivals: ["Independence Day", "Eid al-Fitr", "Eid al-Adha", "Mawlid", "Grand Marriage (Anda)"],
            cuisine: ["Langouste à la Vanille", "Pilaou", "Mabawa", "Cassava", "Coconut-based Dishes"],
            arts: ["Traditional Music (Twarab)", "Dance", "Embroidery", "Woodcarving"],
            sports: ["Football", "Basketball", "Volleyball"]
        },

        symbols: {
            bird: "None Official",
            animal: "Coelacanth",
            flower: "Ylang-Ylang",
            tree: "None Official",
            anthem: "Udzima wa ya Masiwa",
            motto: "Unity, Solidarity, Development"
        },

        demographics: {
            lifeExpectancy: 66.72,
            literacyRate: "58.8%",
            urbanPopulation: "29.9%",
            medianAge: 20.9
        },

        history: {
            timeline: [
                { year: "6th Century", title: "Early Settlement", description: "Bantu speakers and Austronesians settled" },
                { year: "15th Century", title: "Arab Influence", description: "Arab traders brought Islam" },
                { year: "1841", title: "French Protectorate", description: "France established protectorate over Mayotte" },
                { year: "1912", title: "French Colony", description: "All islands became French colony" },
                { year: "1975", title: "Independence", description: "Independence (except Mayotte which remained French)" },
                { year: "1997-2008", title: "Separatism", description: "Anjouan secession crisis" }
            ],
            notableFigures: ["Ahmed Abdallah", "Azali Assoumani", "Said Mohamed Djohar"]
        },

        disputes: [
            { name: "Mayotte", description: "Claims French-administered Mayotte island", type: "Territory" }
        ],

        quickFacts: [
            { icon: "flower", title: "Perfume Islands", text: "World's largest producer of ylang-ylang (perfume)" },
            { icon: "fish", title: "Coelacanth", text: "Living fossil fish (coelacanth) found in waters" },
            { icon: "volcano", title: "Active Volcano", text: "Mount Karthala is one of world's most active volcanoes" },
            { icon: "ring", title: "Grand Marriage", text: "Elaborate traditional wedding ceremony (Anda)" },
            { icon: "flag", title: "Mayotte", text: "Claims Mayotte island (French overseas territory)" }
        ]
    },

    // 14. DJIBOUTI
    {
        id: "DJI",
        name: "Djibouti",
        officialName: "Republic of Djibouti",
        flag: "https://flagcdn.com/w320/dj.png",
        
        images: {
            hero: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=1920&q=80",
            landscape: "https://images.unsplash.com/photo-1519659528534-7fd733a832a0?w=1920&q=80",
            city: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=1920&q=80"
        },

        basic: {
            capital: "Djibouti",
            continent: "Africa",
            region: "East Africa",
            subregion: "Eastern Africa",
            population: 1136455,
            area: 23200,
            populationDensity: 42,
            independence: "1977",
            callingCode: "+253",
            tld: ".dj",
            drivingSide: "Right",
            electricity: "220V, 50Hz"
        },

        location: {
            coordinates: [11.8251, 42.5903],
            timezone: "UTC+3 (EAT)",
            neighbors: ["Eritrea", "Ethiopia", "Somalia"],
            borders: 528,
            hemispheres: ["Northern", "Eastern"]
        },

        political: {
            government: "Unitary Presidential Republic",
            headOfState: "President Ismaïl Omar Guelleh",
            headOfGovernment: "Prime Minister Abdoulkader Kamil Mohamed",
            legislature: "National Assembly",
            legalSystem: "Mixed (Civil Law, Islamic Law, Customary Law)",
            states: 6,
            regions: 5,
            city: 1,
            largestCity: "Djibouti",
            organizations: ["UN", "AU", "Arab League", "OIC", "Francophonie", "IGAD", "WTO"]
        },

        economy: {
            gdp: "$3.66 Billion",
            gdpPPP: "$6.77 Billion",
            gdpPerCapita: "$3,405",
            gdpRank: "#157",
            gdpGrowth: "6.7%",
            currency: "Djiboutian Franc",
            currencyCode: "DJF",
            currencySymbol: "Fdj",
            inflation: "3.7%",
            unemployment: "26.4%",
            majorSectors: ["Services (80%)", "Industry (17%)", "Agriculture (2%)"],
            industries: ["Construction", "Shipping Services", "Port Services", "Military Base Services", "Salt", "Livestock"],
            exports: ["Re-exports", "Hides", "Coffee (in transit)", "Scrap Metal"],
            imports: ["Refined Petroleum", "Palm Oil", "Cars", "Broadcasting Equipment", "Wheat"]
        },

        geography: {
            climate: "Desert; Torrid, Dry",
            avgTemperature: "29.9°C",
            annualRainfall: "163 mm",
            highestPoint: "Moussa Ali (2,028 m)",
            lowestPoint: "Lake Assal (-155 m)",
            coastline: "314 km",
            forestCover: "0.2%",
            arableLand: "0.1%",
            terrain: "Coastal plain and plateau separated by central mountains",
            naturalResources: ["Geothermal Areas", "Gold", "Clay", "Granite", "Limestone", "Marble", "Salt", "Diatomite", "Gypsum", "Pumice", "Petroleum"]
        },

        geography_links: {
            rivers: [],
            mountains: ["Moussa Ali", "Goda Mountains", "Mabla Mountains"],
            deserts: ["Grand Bara Desert", "Petit Bara Desert"],
            forests: ["Day Forest National Park"],
            oceans: ["Gulf of Aden", "Red Sea", "Indian Ocean"]
        },

        culture: {
            officialLanguages: ["French", "Arabic"],
            languages: ["French", "Arabic", "Somali", "Afar"],
            religions: ["Sunni Islam (94%)", "Christianity (6%)"],
            heritageSites: [],
            festivals: ["Independence Day", "Eid al-Fitr", "Eid al-Adha", "Mawlid"],
            cuisine: ["Skoudehkaris", "Fah-Fah", "Lahoh", "Sambusa", "Maraq"],
            arts: ["Traditional Poetry", "Music", "Dance", "Leatherwork"],
            sports: ["Football", "Basketball", "Athletics", "Boxing"]
        },

        symbols: {
            bird: "None Official",
            animal: "None Official",
            flower: "None Official",
            tree: "None Official",
            anthem: "Djibouti",
            motto: "Unity, Equality, Peace"
        },

        demographics: {
            lifeExpectancy: 65.25,
            literacyRate: "70.0%",
            urbanPopulation: "78.5%",
            medianAge: 25.0
        },

        history: {
            timeline: [
                { year: "3rd Century", title: "Early Trade", description: "Strategically located on trade routes" },
                { year: "1862", title: "French Interest", description: "France acquired Obock port" },
                { year: "1896", title: "French Somaliland", description: "French Somaliland established" },
                { year: "1967", title: "TFAI", description: "French Territory of Afars and Issas" },
                { year: "1977", title: "Independence", description: "Independence from France" },
                { year: "1999", title: "Guelleh Era", description: "Ismaïl Omar Guelleh became president" }
            ],
            notableFigures: ["Hassan Gouled Aptidon", "Ismaïl Omar Guelleh"]
        },

        disputes: [
            { name: "Eritrea Border", description: "Border demarcation with Eritrea", type: "Border" }
        ],

        quickFacts: [
            { icon: "water", title: "Lowest Point", text: "Lake Assal is Africa's lowest point (-155 m)" },
            { icon: "ship", title: "Strategic Port", text: "Controls Bab el-Mandeb strait (key shipping lane)" },
            { icon: "soldier", title: "Military Bases", text: "Hosts US, France, China, Japan, Italy military bases" },
            { icon: "sun", title: "Hottest", text: "One of hottest countries on Earth" },
            { icon: "salt", title: "Salt Lake", text: "Lake Assal is 10x saltier than ocean" }
        ]
    },

    // 15. ERITREA
    {
        id: "ERI",
        name: "Eritrea",
        officialName: "State of Eritrea",
        flag: "https://flagcdn.com/w320/er.png",
        
        images: {
            hero: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=1920&q=80",
            landscape: "https://images.unsplash.com/photo-1519659528534-7fd733a832a0?w=1920&q=80",
            city: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=1920&q=80"
        },

        basic: {
            capital: "Asmara",
            continent: "Africa",
            region: "East Africa",
            subregion: "Eastern Africa",
            population: 3748902,
            area: 117600,
            populationDensity: 35,
            independence: "1993",
            callingCode: "+291",
            tld: ".er",
            drivingSide: "Right",
            electricity: "230V, 50Hz"
        },

        location: {
            coordinates: [15.1794, 39.7823],
            timezone: "UTC+3 (EAT)",
            neighbors: ["Sudan", "Ethiopia", "Djibouti"],
            borders: 1840,
            hemispheres: ["Northern", "Eastern"]
        },

        political: {
            government: "Unitary One-Party Presidential Republic",
            headOfState: "President Isaias Afwerki",
            headOfGovernment: "President Isaias Afwerki",
            legislature: "National Assembly (inactive since 2002)",
            legalSystem: "Mixed (Civil Law, Customary Law, Islamic Law)",
            states: 6,
            regions: 6,
            subregions: 58,
            largestCity: "Asmara",
            organizations: ["UN", "AU", "IGAD (suspended)"]
        },

        economy: {
            gdp: "$2.07 Billion",
            gdpPPP: "$6.89 Billion",
            gdpPerCapita: "$552",
            gdpRank: "#166",
            gdpGrowth: "2.9%",
            currency: "Eritrean Nakfa",
            currencyCode: "ERN",
            currencySymbol: "Nfk",
            inflation: "4.5%",
            unemployment: "6.5%",
            majorSectors: ["Services (57%)", "Industry (24%)", "Agriculture (12%)"],
            industries: ["Food Processing", "Beverages", "Clothing", "Textiles", "Light Manufacturing", "Salt", "Cement", "Mining (Gold, Copper, Zinc)"],
            exports: ["Gold", "Zinc Ore", "Copper Ore", "Livestock", "Sorghum"],
            imports: ["Wheat", "Sorghum", "Delivery Trucks", "Wheat Flour", "Motor Vehicles"]
        },

        geography: {
            climate: "Hot, Dry Desert Strip along Red Sea Coast; Cooler and Wetter in Central Highlands",
            avgTemperature: "22.4°C",
            annualRainfall: "384 mm",
            highestPoint: "Emba Soira (3,018 m)",
            lowestPoint: "Denakil Depression (-75 m)",
            coastline: "2,234 km",
            forestCover: "15.1%",
            arableLand: "6.8%",
            terrain: "Extending from Rift Valley to coastal plains on Red Sea",
            naturalResources: ["Gold", "Potash", "Zinc", "Copper", "Salt", "Possibly Oil", "Natural Gas", "Fish"]
        },

        geography_links: {
            rivers: ["Setit River", "Barka River", "Anseba River", "Gash River"],
            mountains: ["Emba Soira", "Ethiopian Highlands extension", "Sahel Mountains"],
            deserts: ["Denakil Desert", "Danakil Depression"],
            forests: ["Semenawi Bahri (Green Belt)"],
            oceans: ["Red Sea"]
        },

        culture: {
            officialLanguages: ["None Official (Working languages: Tigrinya, Arabic, English)"],
            languages: ["Tigrinya", "Arabic", "Tigre", "Kunama", "Afar", "Beja", "Bilen", "Saho", "Nara"],
            religions: ["Christianity (63%)", "Islam (36%)", "Traditional Beliefs (1%)"],
            heritageSites: ["Asmara: A Modernist City of Africa"],
            festivals: ["Independence Day", "Martyrs' Day", "Eid al-Fitr", "Eid al-Adha", "Meskel", "Timkat"],
            cuisine: ["Injera", "Tsebhi", "Zigni", "Kitcha", "Ga'at", "Suwa (Beer)"],
            arts: ["Traditional Music", "Dance", "Pottery", "Weaving", "Goldsmithing"],
            sports: ["Football", "Cycling", "Athletics"]
        },

        symbols: {
            bird: "None Official",
            animal: "Arabian Camel",
            flower: "None Official",
            tree: "None Official",
            anthem: "Ertra, Ertra, Ertra",
            motto: "None Official"
        },

        demographics: {
            lifeExpectancy: 67.52,
            literacyRate: "76.6%",
            urbanPopulation: "43.3%",
            medianAge: 19.7
        },

        history: {
            timeline: [
                { year: "1st Century", title: "Aksumite Empire", description: "Part of powerful Aksumite Empire" },
                { year: "1890", title: "Italian Colony", description: "Italy established Eritrea colony" },
                { year: "1941", title: "British Administration", description: "Britain administered after WWII" },
                { year: "1952", title: "Ethiopian Federation", description: "Federated with Ethiopia" },
                { year: "1961", title: "Independence War", description: "30-year war for independence began" },
                { year: "1993", title: "Independence", description: "Independence from Ethiopia" },
                { year: "1998-2000", title: "Border War", description: "War with Ethiopia over border" }
            ],
            notableFigures: ["Isaias Afwerki", "Hamid Idris Awate", "Woldeab Woldemariam"]
        },

        disputes: [
            { name: "Ethiopian Border", description: "Border dispute with Ethiopia (largely resolved 2018)", type: "Border" }
        ],

        quickFacts: [
            { icon: "building", title: "Asmara", text: "UNESCO World Heritage city (Art Deco architecture)" },
            { icon: "bicycle", title: "Cycling", text: "Major African cycling nation" },
            { icon: "ban", title: "Press Freedom", text: "One of most restrictive press environments" },
            { icon: "soldier", title: "Conscription", text: "Indefinite national service requirement" },
            { icon: "globe", title: "Isolation", text: "One of world's most isolated countries" }
        ]
    },

    // 16. ETHIOPIA
    {
        id: "ETH",
        name: "Ethiopia",
        officialName: "Federal Democratic Republic of Ethiopia",
        flag: "https://flagcdn.com/w320/et.png",
        
        images: {
            hero: "https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=1920&q=80",
            landscape: "https://images.unsplash.com/photo-1519659528534-7fd733a832a0?w=1920&q=80",
            city: "https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=1920&q=80"
        },

        basic: {
            capital: "Addis Ababa",
            continent: "Africa",
            region: "East Africa",
            subregion: "Eastern Africa",
            population: 126527060,
            area: 1104300,
            populationDensity: 115,
            independence: "Never Colonized (ancient)",
            callingCode: "+251",
            tld: ".et",
            drivingSide: "Right",
            electricity: "220V, 50Hz"
        },

        location: {
            coordinates: [9.1450, 40.4897],
            timezone: "UTC+3 (EAT)",
            neighbors: ["Eritrea", "Djibouti", "Somalia", "Kenya", "South Sudan", "Sudan"],
            borders: 5925,
            hemispheres: ["Northern", "Eastern"]
        },

        political: {
            government: "Federal Parliamentary Republic",
            headOfState: "President Taye Atske Selassie",
            headOfGovernment: "Prime Minister Abiy Ahmed",
            legislature: "Federal Parliamentary Assembly (House of Federation & House of Peoples' Representatives)",
            legalSystem: "Civil Law (influenced by Ethiopian, Eritrean Orthodox traditions)",
            states: 12,
            regions: 12,
            charteredCities: 2,
            largestCity: "Addis Ababa",
            organizations: ["UN", "AU (headquarters)", "COMESA", "IGAD", "WTO (observer)"]
        },

        economy: {
            gdp: "$126.8 Billion",
            gdpPPP: "$359.0 Billion",
            gdpPerCapita: "$1,027",
            gdpRank: "#57",
            gdpGrowth: "6.1%",
            currency: "Ethiopian Birr",
            currencyCode: "ETB",
            currencySymbol: "Br",
            inflation: "30.2%",
            unemployment: "3.5%",
            majorSectors: ["Services (43%)", "Agriculture (34%)", "Industry (22%)"],
            industries: ["Food Processing", "Beverages", "Textiles", "Leather", "Garments", "Chemicals", "Metals Processing", "Cement"],
            exports: ["Coffee", "Gold", "Cut Flowers", "Oilseeds", "Vegetables", "Khat"],
            imports: ["Machinery", "Petroleum Products", "Motor Vehicles", "Cereals", "Aircraft"]
        },

        geography: {
            climate: "Tropical Monsoon with Wide Topographic-Induced Variation",
            avgTemperature: "22.2°C",
            annualRainfall: "848 mm",
            highestPoint: "Ras Dashen (4,550 m)",
            lowestPoint: "Denakil Depression (-125 m)",
            coastline: "0 km (Landlocked)",
            forestCover: "15.2%",
            arableLand: "15.2%",
            terrain: "High plateau with central mountain range divided by Great Rift Valley",
            naturalResources: ["Gold", "Platinum", "Copper", "Potash", "Natural Gas", "Hydropower", "Tantalum", "Salt"]
        },

        geography_links: {
            rivers: ["Blue Nile", "Awash River", "Omo River", "Wabe Shebelle River", "Tekezé River"],
            mountains: ["Simien Mountains", "Ras Dashen", "Bale Mountains", "Ethiopian Highlands"],
            deserts: ["Danakil Desert", "Ogaden"],
            forests: ["Bale Mountains National Park", "Simien Mountains National Park", "Kafa Biosphere Reserve"],
            oceans: []
        },

        culture: {
            officialLanguages: ["Amharic"],
            languages: ["Amharic", "Oromo", "Tigrinya", "Somali", "Sidamo", "Wolaytta", "Gurage", "Afar", "80+ languages"],
            religions: ["Ethiopian Orthodox (43.8%)", "Islam (31.3%)", "Protestantism (22.8%)", "Traditional Beliefs (0.6%)", "Catholicism (0.7%)"],
            heritageSites: ["Rock-Hewn Churches of Lalibela", "Simien National Park", "Fasil Ghebbi", "Lower Valley of the Awash", "Tiya", "Harar Jugol", "Lower Valley of the Omo", "Konso Cultural Landscape"],
            festivals: ["Meskel", "Timkat", "Enkutatash (New Year)", "Irreecha", "Eid al-Fitr", "Eid al-Adha"],
            cuisine: ["Injera", "Doro Wat", "Kitfo", "Tibs", "Shiro", "Tej (Honey Wine)", "Ethiopian Coffee Ceremony"],
            arts: ["Ethiopian Orthodox Art", "Traditional Music", "Eskista Dance", "Religious Manuscripts", "Basketry"],
            sports: ["Athletics (Long Distance Running)", "Football", "Basketball"]
        },

        symbols: {
            bird: "None Official",
            animal: "Lion (Lion of Judah)",
            flower: "Calla Lily",
            tree: "None Official",
            anthem: "Wodefit Gesgeshi, Widd Innat Ityopp'ya",
            motto: "None Official"
        },

        demographics: {
            lifeExpectancy: 67.81,
            literacyRate: "51.8%",
            urbanPopulation: "22.7%",
            medianAge: 19.5
        },

        history: {
            timeline: [
                { year: "100 CE", title: "Aksumite Empire", description: "Powerful Aksumite Empire flourished" },
                { year: "330 CE", title: "Christianity", description: "One of first nations to adopt Christianity" },
                { year: "1270", title: "Solomonic Dynasty", description: "Solomonic dynasty restored" },
                { year: "1896", title: "Adwa Victory", description: "Defeated Italy at Battle of Adwa" },
                { year: "1936-1941", title: "Italian Occupation", description: "Brief Italian occupation" },
                { year: "1974", title: "Derg Regime", description: "Emperor Haile Selassie overthrown" },
                { year: "1991", title: "EPRDF", description: "EPRDF coalition took power" },
                { year: "2018", title: "Abiy Ahmed", description: "Abiy Ahmed became Prime Minister; won Nobel Peace Prize (2019)" }
            ],
            notableFigures: ["Haile Selassie", "Menelik II", "Abiy Ahmed", "Tedros Adhanom Ghebreyesus"]
        },

        disputes: [
            { name: "Tigray Conflict", description: "Internal conflict in Tigray region (ceasefire 2022)", type: "Territory" },
            { name: "GERD Dam", description: "Dispute with Egypt and Sudan over Nile dam", type: "Other" }
        ],

        quickFacts: [
            { icon: "coffee", title: "Coffee Origin", text: "Birthplace of coffee (discovered in Kaffa region)" },
            { icon: "calendar", title: "Own Calendar", text: "Uses own calendar (7-8 years behind Gregorian)" },
            { icon: "running", title: "Running Giants", text: "Legendary distance runners (Haile Gebrselassie, Kenenisa Bekele)" },
            { icon: "globe", title: "Never Colonized", text: "One of only two African countries never colonized" },
            { icon: "building", title: "AU Headquarters", text: "African Union headquarters in Addis Ababa" },
            { icon: "cross", title: "Lalibela", text: "Rock-hewn churches of Lalibela (UNESCO)" }
        ]
    },

    // 17. KENYA
    {
        id: "KEN",
        name: "Kenya",
        officialName: "Republic of Kenya",
        flag: "https://flagcdn.com/w320/ke.png",
        
        images: {
            hero: "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1920&q=80",
            landscape: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=1920&q=80",
            city: "https://images.unsplash.com/photo-1611348524140-53c9a25263d6?w=1920&q=80"
        },

        basic: {
            capital: "Nairobi",
            continent: "Africa",
            region: "East Africa",
            subregion: "Eastern Africa",
            population: 54027487,
            area: 580367,
            populationDensity: 94,
            independence: "1963",
            callingCode: "+254",
            tld: ".ke",
            drivingSide: "Left",
            electricity: "240V, 50Hz"
        },

        location: {
            coordinates: [-0.0236, 37.9062],
            timezone: "UTC+3 (EAT)",
            neighbors: ["Ethiopia", "Somalia", "Tanzania", "Uganda", "South Sudan"],
            borders: 3457,
            hemispheres: ["Southern", "Eastern"]
        },

        political: {
            government: "Unitary Presidential Constitutional Republic",
            headOfState: "President William Ruto",
            headOfGovernment: "President William Ruto",
            legislature: "Parliament (Senate & National Assembly)",
            legalSystem: "Mixed (Common Law, Islamic Law, Customary Law)",
            states: 47,
            counties: 47,
            largestCity: "Nairobi",
            organizations: ["UN", "AU", "EAC", "Commonwealth", "COMESA", "IGAD", "WTO"]
        },

        economy: {
            gdp: "$113.4 Billion",
            gdpPPP: "$305.4 Billion",
            gdpPerCapita: "$2,099",
            gdpRank: "#60",
            gdpGrowth: "5.4%",
            currency: "Kenyan Shilling",
            currencyCode: "KES",
            currencySymbol: "KSh",
            inflation: "7.7%",
            unemployment: "5.6%",
            majorSectors: ["Services (54%)", "Agriculture (22%)", "Industry (17%)"],
            industries: ["Agriculture", "Tourism", "Financial Services", "Manufacturing", "IT", "Telecommunications", "Textiles", "Cement", "Oil Refining"],
            exports: ["Tea", "Cut Flowers", "Coffee", "Vegetables", "Titanium Ore", "Apparel"],
            imports: ["Refined Petroleum", "Palm Oil", "Cars", "Packaged Medicaments", "Wheat"]
        },

        geography: {
            climate: "Varies from Tropical along Coast to Arid in Interior",
            avgTemperature: "24.5°C",
            annualRainfall: "630 mm",
            highestPoint: "Mount Kenya (5,199 m)",
            lowestPoint: "Indian Ocean (0 m)",
            coastline: "536 km",
            forestCover: "7.8%",
            arableLand: "10.2%",
            terrain: "Low plains rise to central highlands bisected by Great Rift Valley; fertile plateau in west",
            naturalResources: ["Limestone", "Soda Ash", "Salt", "Gemstones", "Fluorspar", "Zinc", "Diatomite", "Gypsum", "Wildlife", "Hydropower", "Titanium"]
        },

        geography_links: {
            rivers: ["Tana River", "Athi River", "Ewaso Ng'iro River", "Mara River"],
            mountains: ["Mount Kenya", "Mount Elgon", "Aberdare Range", "Cherangani Hills"],
            deserts: ["Chalbi Desert", "Nyiri Desert"],
            forests: ["Kakamega Forest", "Mount Kenya Forest", "Mau Forest", "Aberdare Forest"],
            oceans: ["Indian Ocean"]
        },

        culture: {
            officialLanguages: ["Swahili", "English"],
            languages: ["Swahili", "English", "Kikuyu", "Luo", "Kalenjin", "Luhya", "Kamba", "68 languages"],
            religions: ["Christianity (85.5%)", "Islam (10.9%)", "Traditional Beliefs (1.8%)", "No Religion (1.6%)"],
            heritageSites: ["Mount Kenya National Park", "Lake Turkana National Parks", "Lamu Old Town", "Sacred Mijikenda Kaya Forests", "Fort Jesus, Mombasa", "Kenya Lake System in the Great Rift Valley"],
            festivals: ["Mashujaa Day", "Jamhuri Day", "Madaraka Day", "Lamu Cultural Festival", "Lake Turkana Festival"],
            cuisine: ["Nyama Choma", "Ugali", "Sukuma Wiki", "Chapati", "Githeri", "Mandazi", "Pilau", "Samosas"],
            arts: ["Maasai Beadwork", "Kanga and Kikoy", "Soapstone Carving", "Music (Benga, Afro-pop)", "Storytelling"],
            sports: ["Athletics (Long Distance Running)", "Football", "Rugby", "Cricket", "Volleyball"]
        },

        symbols: {
            bird: "Rooster",
            animal: "Lion",
            flower: "Orchid",
            tree: "None Official",
            anthem: "Ee Mungu Nguvu Yetu",
            motto: "Harambee (Let us all pull together)"
        },

        demographics: {
            lifeExpectancy: 67.49,
            literacyRate: "81.5%",
            urbanPopulation: "29.0%",
            medianAge: 20.0
        },

        history: {
            timeline: [
                { year: "2000 BCE", title: "Early Settlement", description: "Cushitic and Nilotic peoples settled" },
                { year: "1498", title: "Portuguese Arrival", description: "Vasco da Gama reached Mombasa" },
                { year: "1895", title: "British Protectorate", description: "British East Africa Protectorate" },
                { year: "1920", title: "Kenya Colony", description: "Became Kenya Colony" },
                { year: "1952-1960", title: "Mau Mau", description: "Mau Mau Uprising against British" },
                { year: "1963", title: "Independence", description: "Independence from Britain" },
                { year: "2010", title: "New Constitution", description: "New constitution adopted" }
            ],
            notableFigures: ["Jomo Kenyatta", "Daniel arap Moi", "Wangari Maathai", "Eliud Kipchoge", "Barack Obama Sr."]
        },

        disputes: [
            { name: "Indian Ocean Maritime", description: "Maritime boundary dispute with Somalia (ICJ ruling 2021)", type: "Maritime" },
            { name: "Migingo Island", description: "Disputed island in Lake Victoria with Uganda", type: "Territory" }
        ],

        quickFacts: [
            { icon: "running", title: "Marathon Kings", text: "World's greatest marathon runners (Kipchoge, Kiptum)" },
            { icon: "paw", title: "Safari Capital", text: "World-famous wildlife safaris (Masai Mara)" },
            { icon: "phone", title: "M-Pesa", text: "Pioneered mobile money (M-Pesa)" },
            { icon: "mountain", title: "Mount Kenya", text: "Africa's second-highest peak (5,199 m)" },
            { icon: "flower", title: "Cut Flowers", text: "World's 4th largest flower exporter" },
            { icon: "mug-hot", title: "Tea", text: "World's 3rd largest tea producer" }
        ]
    },

    // 18. MADAGASCAR
    {
        id: "MDG",
        name: "Madagascar",
        officialName: "Republic of Madagascar",
        flag: "https://flagcdn.com/w320/mg.png",
        
        images: {
            hero: "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=1920&q=80",
            landscape: "https://images.unsplash.com/photo-1515205244153-fce4e5d8bc49?w=1920&q=80",
            city: "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=1920&q=80"
        },

        basic: {
            capital: "Antananarivo",
            continent: "Africa",
            region: "East Africa",
            subregion: "Eastern Africa",
            population: 30325732,
            area: 587041,
            populationDensity: 48,
            independence: "1960",
            callingCode: "+261",
            tld: ".mg",
            drivingSide: "Right",
            electricity: "220V, 50Hz"
        },

        location: {
            coordinates: [-18.7669, 46.8691],
            timezone: "UTC+3 (EAT)",
            neighbors: [],
            borders: 0,
            hemispheres: ["Southern", "Eastern"],
            islandNation: true
        },

        political: {
            government: "Unitary Semi-Presidential Republic",
            headOfState: "President Andry Rajoelina",
            headOfGovernment: "Prime Minister Christian Ntsay",
            legislature: "Parliament (Senate & National Assembly)",
            legalSystem: "Civil Law (French influence)",
            states: 6,
            provinces: 6,
            regions: 22,
            largestCity: "Antananarivo",
            organizations: ["UN", "AU", "SADC", "Francophonie", "COMESA", "OIF", "WTO"]
        },

        economy: {
            gdp: "$15.77 Billion",
            gdpPPP: "$48.89 Billion",
            gdpPerCapita: "$519",
            gdpRank: "#119",
            gdpGrowth: "4.0%",
            currency: "Malagasy Ariary",
            currencyCode: "MGA",
            currencySymbol: "Ar",
            inflation: "9.9%",
            unemployment: "2.3%",
            majorSectors: ["Agriculture (24%)", "Services (57%)", "Industry (16%)"],
            industries: ["Meat Processing", "Seafood", "Soap", "Beer", "Leather", "Sugar", "Textiles", "Glassware", "Cement", "Automobile Assembly", "Paper", "Petroleum", "Tourism", "Mining"],
            exports: ["Vanilla", "Nickel", "Cobalt", "Cloves", "Titanium Ore", "Shrimp", "Apparel"],
            imports: ["Refined Petroleum", "Rice", "Fabric", "Cars", "Wheat"]
        },

        geography: {
            climate: "Tropical along Coast; Temperate Inland; Arid in South",
            avgTemperature: "23.4°C",
            annualRainfall: "1,513 mm",
            highestPoint: "Maromokotro (2,876 m)",
            lowestPoint: "Indian Ocean (0 m)",
            coastline: "4,828 km",
            forestCover: "21.4%",
            arableLand: "6.1%",
            terrain: "Narrow coastal plain; high plateau and mountains in center",
            naturalResources: ["Graphite", "Chromite", "Coal", "Bauxite", "Rare Earth Elements", "Salt", "Quartz", "Tar Sands", "Semiprecious Stones", "Mica", "Fish", "Hydropower"]
        },

        geography_links: {
            rivers: ["Betsiboka River", "Tsiribihina River", "Mangoky River", "Onilahy River"],
            mountains: ["Maromokotro", "Ankaratra Range", "Tsaratanana Massif"],
            deserts: ["Spiny Forest (semi-arid)"],
            forests: ["Rainforests of the Atsinanana", "Tsingy de Bemaraha", "Andasibe-Mantadia"],
            oceans: ["Indian Ocean", "Mozambique Channel"]
        },

        culture: {
            officialLanguages: ["Malagasy", "French"],
            languages: ["Malagasy", "French", "English"],
            religions: ["Christianity (85%)", "Traditional Beliefs (5%)", "Islam (3%)", "No Religion (7%)"],
            heritageSites: ["Rainforests of the Atsinanana", "Royal Hill of Ambohimanga", "Tsingy de Bemaraha"],
            festivals: ["Independence Day", "Famadihana (Turning of the Bones)", "Alahamadi Be", "Santabary"],
            cuisine: ["Romazava", "Ravitoto", "Vary Amin'anana", "Achard", "Koba", "Mofo Gasy"],
            arts: ["Hiragasy", "Salegy Music", "Woodcarving", "Silk Weaving (Lamba)", "Fanorona (Board Game)"],
            sports: ["Football", "Rugby", "Pétanque", "Basketball", "Moraingy (Traditional Fighting)"]
        },

        symbols: {
            bird: "None Official",
            animal: "Ring-tailed Lemur",
            flower: "Poinciana (Flamboyant)",
            tree: "Traveller's Tree (Ravinala)",
            anthem: "Ry Tanindrazanay malala ô!",
            motto: "Love, Fatherland, Progress"
        },

        demographics: {
            lifeExpectancy: 67.95,
            literacyRate: "76.7%",
            urbanPopulation: "40.6%",
            medianAge: 19.9
        },

        history: {
            timeline: [
                { year: "350-550 CE", title: "First Settlers", description: "Austronesian settlers arrived from Indonesia" },
                { year: "1500s", title: "European Contact", description: "Portuguese, French, and British contact" },
                { year: "16th-19th Century", title: "Kingdoms", description: "Various Malagasy kingdoms flourished" },
                { year: "1896", title: "French Colony", description: "France colonized Madagascar" },
                { year: "1960", title: "Independence", description: "Independence from France" },
                { year: "2009", title: "Political Crisis", description: "Coup led to political instability" }
            ],
            notableFigures: ["Radama I", "Ranavalona I", "Philibert Tsiranana", "Andry Rajoelina"]
        },

        disputes: [
            { name: "Scattered Islands", description: "Claims French-administered Îles Éparses", type: "Territory" }
        ],

        quickFacts: [
            { icon: "island", title: "4th Largest Island", text: "World's 4th largest island" },
            { icon: "paw", title: "Lemurs", text: "Only place where lemurs live in the wild (100+ species)" },
            { icon: "leaf", title: "Biodiversity", text: "90% of wildlife found nowhere else on Earth" },
            { icon: "seedling", title: "Vanilla", text: "World's largest vanilla producer (80%)" },
            { icon: "rock", title: "Tsingy", text: "Unique limestone 'tsingy' rock formations" },
            { icon: "globe", title: "Indonesian Roots", text: "First settlers came from Indonesia (4,000 miles away)" }
        ]
    },

    // 19. MALAWI
    {
        id: "MWI",
        name: "Malawi",
        officialName: "Republic of Malawi",
        flag: "https://flagcdn.com/w320/mw.png",
        
        images: {
            hero: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=1920&q=80",
            landscape: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=1920&q=80",
            city: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=1920&q=80"
        },

        basic: {
            capital: "Lilongwe",
            continent: "Africa",
            region: "East Africa",
            subregion: "Eastern Africa",
            population: 20931751,
            area: 118484,
            populationDensity: 203,
            independence: "1964",
            callingCode: "+265",
            tld: ".mw",
            drivingSide: "Left",
            electricity: "230V, 50Hz"
        },

        location: {
            coordinates: [-13.2543, 34.3015],
            timezone: "UTC+2 (CAT)",
            neighbors: ["Tanzania", "Mozambique", "Zambia"],
            borders: 2857,
            hemispheres: ["Southern", "Eastern"]
        },

        political: {
            government: "Unitary Presidential Republic",
            headOfState: "President Lazarus Chakwera",
            headOfGovernment: "President Lazarus Chakwera",
            legislature: "National Assembly",
            legalSystem: "Mixed (Common Law and Customary Law)",
            states: 3,
            regions: 3,
            districts: 28,
            largestCity: "Lilongwe",
            organizations: ["UN", "AU", "Commonwealth", "COMESA", "SADC", "WTO"]
        },

        economy: {
            gdp: "$14.05 Billion",
            gdpPPP: "$32.58 Billion",
            gdpPerCapita: "$645",
            gdpRank: "#122",
            gdpGrowth: "1.6%",
            currency: "Malawian Kwacha",
            currencyCode: "MWK",
            currencySymbol: "MK",
            inflation: "28.6%",
            unemployment: "5.7%",
            majorSectors: ["Agriculture (23%)", "Services (57%)", "Industry (13%)"],
            industries: ["Tobacco", "Tea", "Sugar", "Sawmill Products", "Cement", "Consumer Goods"],
            exports: ["Tobacco", "Tea", "Dried Legumes", "Sugar", "Raw Cotton", "Soybean Oil"],
            imports: ["Refined Petroleum", "Fertilizers", "Packaged Medicaments", "Cement", "Wheat"]
        },

        geography: {
            climate: "Sub-Tropical; Rainy Season (November to May); Dry Season (May to November)",
            avgTemperature: "22.0°C",
            annualRainfall: "1,181 mm",
            highestPoint: "Mount Mulanje (3,002 m)",
            lowestPoint: "Junction of Shire River and Mozambique border (37 m)",
            coastline: "0 km (Landlocked)",
            forestCover: "33.4%",
            arableLand: "38.2%",
            terrain: "Narrow elongated plateau with rolling plains; rounded hills; some mountains",
            naturalResources: ["Limestone", "Arable Land", "Hydropower", "Unexploited Deposits of Uranium, Coal, Bauxite"]
        },

        geography_links: {
            rivers: ["Shire River", "Songwe River", "Dwangwa River", "Bua River"],
            mountains: ["Mount Mulanje", "Zomba Plateau", "Nyika Plateau", "Viphya Plateau"],
            deserts: [],
            forests: ["Nyika National Park", "Mulanje Mountain Forest Reserve", "Viphya Forest"],
            oceans: []
        },

        culture: {
            officialLanguages: ["English", "Chichewa"],
            languages: ["English", "Chichewa", "Yao", "Tumbuka", "Lomwe", "Sena", "Tonga", "Ngoni"],
            religions: ["Christianity (77.3%)", "Islam (13.8%)", "Traditional Beliefs (1.8%)", "No Religion (5.6%)"],
            heritageSites: ["Lake Malawi National Park", "Chongoni Rock-Art Area"],
            festivals: ["Independence Day", "Lake of Stars Festival", "Chilimika Festival", "Christmas"],
            cuisine: ["Nsima", "Chambo Fish", "Ndiwo (Relish)", "Kachumbari", "Mandasi"],
            arts: ["Gule Wamkulu (Masked Dance)", "Wood Carving", "Pottery", "Music", "Storytelling"],
            sports: ["Football", "Basketball", "Netball", "Cricket", "Athletics"]
        },

        symbols: {
            bird: "African Fish Eagle",
            animal: "Thomson's Gazelle",
            flower: "None Official",
            tree: "None Official",
            anthem: "Mulungu dalitsa Malawi",
            motto: "Unity and Freedom"
        },

        demographics: {
            lifeExpectancy: 64.87,
            literacyRate: "62.1%",
            urbanPopulation: "18.4%",
            medianAge: 17.2
        },

        history: {
            timeline: [
                { year: "10th Century", title: "Bantu Migration", description: "Bantu-speaking peoples settled" },
                { year: "1859", title: "Livingstone", description: "David Livingstone reached Lake Malawi" },
                { year: "1891", title: "British Protectorate", description: "British Central Africa Protectorate" },
                { year: "1907", title: "Nyasaland", description: "Renamed Nyasaland Protectorate" },
                { year: "1964", title: "Independence", description: "Independence from Britain" },
                { year: "1994", title: "Multi-Party", description: "Multi-party democracy introduced" }
            ],
            notableFigures: ["Hastings Kamuzu Banda", "Bakili Muluzi", "Joyce Banda", "Lazarus Chakwera"]
        },

        disputes: [
            { name: "Lake Malawi", description: "Dispute with Tanzania over lake border", type: "Maritime" }
        ],

        quickFacts: [
            { icon: "heart", title: "Warm Heart", text: "Known as 'The Warm Heart of Africa'" },
            { icon: "water", title: "Lake Malawi", text: "Lake contains more fish species than any other lake (1,000+)" },
            { icon: "smoking", title: "Tobacco", text: "Tobacco accounts for 50% of exports" },
            { icon: "fish", title: "Chambo", text: "National fish (tilapia species)" },
            { icon: "masks-theater", title: "Gule Wamkulu", text: "UNESCO-recognized masked dance tradition" }
        ]
    },

    // 20. MAURITIUS
    {
        id: "MUS",
        name: "Mauritius",
        officialName: "Republic of Mauritius",
        flag: "https://flagcdn.com/w320/mu.png",
        
        images: {
            hero: "https://images.unsplash.com/photo-1580549721438-46e5cbb37e72?w=1920&q=80",
            landscape: "https://images.unsplash.com/photo-1586500036706-41963de24d8b?w=1920&q=80",
            city: "https://images.unsplash.com/photo-1580549721438-46e5cbb37e72?w=1920&q=80"
        },

        basic: {
            capital: "Port Louis",
            continent: "Africa",
            region: "East Africa",
            subregion: "Eastern Africa",
            population: 1299469,
            area: 2040,
            populationDensity: 623,
            independence: "1968",
            callingCode: "+230",
            tld: ".mu",
            drivingSide: "Left",
            electricity: "230V, 50Hz"
        },

        location: {
            coordinates: [-20.3484, 57.5522],
            timezone: "UTC+4 (MUT)",
            neighbors: [],
            borders: 0,
            hemispheres: ["Southern", "Eastern"],
            islandNation: true
        },

        political: {
            government: "Unitary Parliamentary Republic",
            headOfState: "President Prithvirajsing Roopun",
            headOfGovernment: "Prime Minister Pravind Jugnauth",
            legislature: "National Assembly",
            legalSystem: "Mixed (Civil Law and Common Law)",
            states: 9,
            districts: 9,
            dependencies: 3,
            largestCity: "Port Louis",
            organizations: ["UN", "AU", "Commonwealth", "COMESA", "SADC", "Francophonie", "WTO", "IOC"]
        },

        economy: {
            gdp: "$14.40 Billion",
            gdpPPP: "$30.90 Billion",
            gdpPerCapita: "$11,099",
            gdpRank: "#121",
            gdpGrowth: "7.0%",
            currency: "Mauritian Rupee",
            currencyCode: "MUR",
            currencySymbol: "₨",
            inflation: "7.0%",
            unemployment: "6.8%",
            majorSectors: ["Services (74%)", "Industry (21%)", "Agriculture (4%)"],
            industries: ["Food Processing", "Textiles", "Clothing", "Mining", "Chemicals", "Metal Products", "Transport Equipment", "Tourism", "Financial Services", "Information Technology"],
            exports: ["Fish", "Clothing", "Raw Sugar", "Diamonds", "Molasses"],
            imports: ["Refined Petroleum", "Cars", "Packaged Medicaments", "Broadcasting Equipment", "Fish"]
        },

        geography: {
            climate: "Tropical; Modified by Southeast Trade Winds; Warm, Dry Winter (May to November); Hot, Wet, Humid Summer (November to May)",
            avgTemperature: "24.7°C",
            annualRainfall: "2,041 mm",
            highestPoint: "Piton de la Petite Rivière Noire (828 m)",
            lowestPoint: "Indian Ocean (0 m)",
            coastline: "177 km",
            forestCover: "19.5%",
            arableLand: "42.2%",
            terrain: "Small coastal plain rising to discontinuous mountains encircling central plateau",
            naturalResources: ["Arable Land", "Fish"]
        },

        geography_links: {
            rivers: ["Grand River South East", "Black River"],
            mountains: ["Piton de la Petite Rivière Noire", "Le Pouce", "Morne Brabant"],
            deserts: [],
            forests: ["Black River Gorges National Park", "Bras d'Eau National Park"],
            oceans: ["Indian Ocean"]
        },

        culture: {
            officialLanguages: ["None Official (English used in Parliament)"],
            languages: ["English", "French", "Mauritian Creole", "Bhojpuri", "Hindi", "Tamil", "Mandarin"],
            religions: ["Hinduism (48.5%)", "Christianity (32.7%)", "Islam (17.3%)", "Buddhism (0.4%)", "Others (1.1%)"],
            heritageSites: ["Le Morne Cultural Landscape", "Aapravasi Ghat"],
            festivals: ["Maha Shivaratri", "Diwali", "Chinese New Year", "Eid", "Thaipoosam Cavadee", "Independence Day"],
            cuisine: ["Dholl Puri", "Rougaille", "Briani", "Gateau Piment", "Alouda", "Mine Frit"],
            arts: ["Sega Music and Dance", "Bhojpuri Music", "Literature", "Handicrafts"],
            sports: ["Football", "Horse Racing", "Volleyball", "Badminton", "Athletics"]
        },

        symbols: {
            bird: "Dodo (extinct)",
            animal: "Dodo (extinct)",
            flower: "Trochetia Boutoniana",
            tree: "None Official",
            anthem: "Motherland",
            motto: "Star and Key of the Indian Ocean"
        },

        demographics: {
            lifeExpectancy: 75.71,
            literacyRate: "91.3%",
            urbanPopulation: "40.8%",
            medianAge: 37.7
        },

        history: {
            timeline: [
                { year: "1598", title: "Dutch Arrival", description: "Dutch named island after Prince Maurice" },
                { year: "1715", title: "French Colony", description: "France took control; renamed Île de France" },
                { year: "1810", title: "British Control", description: "Britain captured from France" },
                { year: "1835", title: "Slavery Abolished", description: "Slavery abolished; Indian laborers brought" },
                { year: "1968", title: "Independence", description: "Independence from Britain" },
                { year: "1992", title: "Republic", description: "Became a republic within Commonwealth" }
            ],
            notableFigures: ["Sir Seewoosagur Ramgoolam", "Sir Anerood Jugnauth", "Navin Ramgoolam"]
        },

        disputes: [
            { name: "Chagos Archipelago", description: "Claims British Indian Ocean Territory (ICJ ruled in Mauritius' favor)", type: "Territory" },
            { name: "Tromelin Island", description: "Disputed with France", type: "Territory" }
        ],

        quickFacts: [
            { icon: "bird", title: "Dodo", text: "Home of the extinct dodo bird" },
            { icon: "chart-line", title: "African Tiger", text: "One of Africa's most developed economies" },
            { icon: "users", title: "Melting Pot", text: "Diverse population (Indian, African, Chinese, European)" },
            { icon: "umbrella-beach", title: "Tourism", text: "World-renowned beach destination" },
            { icon: "language", title: "Multilingual", text: "Creole, French, English, Hindi all widely spoken" },
            { icon: "globe", title: "Rainbow Nation", text: "Peaceful coexistence of multiple religions and cultures" }
        ]
    }
];

// Export for Node.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CountriesData8;
}

// Export for Browser
if (typeof window !== 'undefined') {
    window.CountriesData8 = CountriesData8;
}
