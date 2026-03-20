/**
 * GeoVerse Encyclopedia - Country Data File 4
 * Contains: Central Asia (5) + Eastern Europe (9) + Russia = 15 Countries
 * Version: 2.0 - Clean Data
 */

const CountriesData4 = [
    // 1. KAZAKHSTAN
    {
        id: "KAZ",
        name: "Kazakhstan",
        officialName: "Republic of Kazakhstan",
        flag: "https://flagcdn.com/w320/kz.png",
        
        images: {
            hero: "https://images.unsplash.com/photo-1565008576549-57569a49371d?w=1920&q=80",
            landscape: "https://images.unsplash.com/photo-1590077428593-a55bb07c4665?w=1920&q=80",
            city: "https://images.unsplash.com/photo-1558431382-27e303142255?w=1920&q=80"
        },

        basic: {
            capital: "Astana",
            continent: "Asia",
            region: "Central Asia",
            subregion: "Central Asia",
            population: 20196407,
            area: 2724900,
            populationDensity: 7,
            independence: "1991",
            callingCode: "+7",
            tld: ".kz",
            drivingSide: "Right",
            electricity: "220V, 50Hz"
        },

        location: {
            coordinates: [48.0196, 66.9237],
            timezone: "UTC+5 to UTC+6 (2 zones)",
            neighbors: ["Russia", "China", "Kyrgyzstan", "Uzbekistan", "Turkmenistan"],
            borders: 13364,
            hemispheres: ["Northern", "Eastern"]
        },

        political: {
            government: "Unitary Presidential Republic",
            headOfState: "President Kassym-Jomart Tokayev",
            headOfGovernment: "Prime Minister Olzhas Bektenov",
            legislature: "Parliament (Senate & Mazhilis)",
            legalSystem: "Civil Law (Soviet influence)",
            states: 17,
            regions: 14,
            cities: 3,
            largestCity: "Almaty",
            organizations: ["UN", "CIS", "SCO", "CSTO", "EAEU", "OIC", "Turkic Council"]
        },

        economy: {
            gdp: "$259.29 Billion",
            gdpPPP: "$617.09 Billion",
            gdpPerCapita: "$12,817",
            gdpRank: "#42",
            gdpGrowth: "5.1%",
            currency: "Kazakhstani Tenge",
            currencyCode: "KZT",
            currencySymbol: "₸",
            inflation: "9.8%",
            unemployment: "4.8%",
            majorSectors: ["Services (58%)", "Industry (34%)", "Agriculture (5%)"],
            industries: ["Oil", "Coal", "Iron Ore", "Manganese", "Chromite", "Lead", "Zinc", "Copper", "Titanium", "Bauxite", "Gold", "Silver", "Phosphates", "Sulfur", "Uranium", "Iron & Steel", "Tractors", "Agricultural Machinery", "Electric Motors", "Construction Materials"],
            exports: ["Crude Petroleum", "Refined Petroleum", "Uranium", "Copper", "Iron Alloys", "Natural Gas", "Wheat"],
            imports: ["Machinery", "Vehicles", "Pharmaceuticals", "Plastics", "Electronics"]
        },

        geography: {
            climate: "Continental; Cold Winters, Hot Summers; Arid/Semi-arid",
            avgTemperature: "5.5°C",
            annualRainfall: "250 mm",
            highestPoint: "Khan Tengri (7,010 m)",
            lowestPoint: "Karagiye Depression (-132 m)",
            coastline: "0 km (Landlocked; Caspian Sea coast 2,320 km)",
            forestCover: "1.2%",
            arableLand: "8.9%",
            terrain: "Vast flat steppe extending from Volga to Altai; desert regions; mountains in east and south",
            naturalResources: ["Petroleum", "Natural Gas", "Coal", "Iron Ore", "Manganese", "Chrome Ore", "Nickel", "Cobalt", "Copper", "Molybdenum", "Lead", "Zinc", "Bauxite", "Gold", "Uranium"]
        },

        geography_links: {
            rivers: ["Irtysh River", "Syr Darya", "Ural River", "Ili River", "Ishim River", "Tobol River"],
            mountains: ["Tian Shan", "Altai Mountains", "Khan Tengri"],
            deserts: ["Kyzylkum Desert", "Betpak-Dala", "Moyynqum Desert"],
            forests: ["Northern Pine Forests", "Tugai Forests"],
            oceans: ["Caspian Sea", "Aral Sea (shrinking)"]
        },

        culture: {
            officialLanguages: ["Kazakh", "Russian"],
            languages: ["Kazakh", "Russian", "German", "Uzbek", "Uyghur"],
            religions: ["Islam (70.2%)", "Christianity (26.2%)", "Others (3.6%)"],
            heritageSites: ["Mausoleum of Khoja Ahmed Yasawi", "Petroglyphs within the Archaeological Landscape of Tamgaly", "Silk Roads Sites in Kazakhstan"],
            festivals: ["Nauryz (Persian New Year)", "Independence Day", "Constitution Day", "Kurban Ait"],
            cuisine: ["Beshbarmak", "Kazy", "Kumis", "Baursak", "Shubat", "Kuyrdak", "Plov"],
            arts: ["Dombra Music", "Traditional Embroidery", "Yurt Making", "Eagle Hunting", "Oral Poetry (Akyns)"],
            sports: ["Football", "Ice Hockey", "Boxing", "Wrestling", "Kokpar (Horse Game)", "Cycling"]
        },

        symbols: {
            bird: "Golden Eagle",
            animal: "Snow Leopard",
            flower: "Lily",
            tree: "None Official",
            anthem: "Menıñ Qazaqstanym",
            motto: "None Official"
        },

        demographics: {
            lifeExpectancy: 74.17,
            literacyRate: "99.8%",
            urbanPopulation: "57.7%",
            medianAge: 31.6
        },

        history: {
            timeline: [
                { year: "1465", title: "Kazakh Khanate", description: "Kazakh Khanate established" },
                { year: "1847-1864", title: "Russian Conquest", description: "Russian Empire conquered Kazakh lands" },
                { year: "1936", title: "Soviet Republic", description: "Became Kazakh Soviet Socialist Republic" },
                { year: "1991", title: "Independence", description: "Independence declared on December 16" },
                { year: "1997", title: "New Capital", description: "Capital moved from Almaty to Astana" },
                { year: "2022", title: "Protests", description: "January protests led to reforms" }
            ],
            notableFigures: ["Nursultan Nazarbayev", "Abai Qunanbayuli", "Dinmukhamed Konayev", "Kassym-Jomart Tokayev"]
        },

        disputes: [
            { name: "Caspian Sea", description: "Demarcation of Caspian Sea resources", type: "Maritime" }
        ],

        quickFacts: [
            { icon: "flag", title: "Largest Landlocked", text: "World's largest landlocked country" },
            { icon: "atom", title: "Uranium", text: "World's largest uranium producer (40%+)" },
            { icon: "oil-can", title: "Oil Reserves", text: "12th largest proven oil reserves" },
            { icon: "rocket", title: "Baikonur", text: "Home to world's first spaceport (Baikonur)" },
            { icon: "eagle", title: "Eagle Hunting", text: "Traditional Kazakh eagle hunting (Berkutchi)" }
        ]
    },

    // 2. KYRGYZSTAN
    {
        id: "KGZ",
        name: "Kyrgyzstan",
        officialName: "Kyrgyz Republic",
        flag: "https://flagcdn.com/w320/kg.png",
        
        images: {
            hero: "https://images.unsplash.com/photo-1530734558511-d9b5b1ed3c27?w=1920&q=80",
            landscape: "https://images.unsplash.com/photo-1565008576549-57569a49371d?w=1920&q=80",
            city: "https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?w=1920&q=80"
        },

        basic: {
            capital: "Bishkek",
            continent: "Asia",
            region: "Central Asia",
            subregion: "Central Asia",
            population: 7100000,
            area: 199951,
            populationDensity: 34,
            independence: "1991",
            callingCode: "+996",
            tld: ".kg",
            drivingSide: "Right",
            electricity: "220V, 50Hz"
        },

        location: {
            coordinates: [41.2044, 74.7661],
            timezone: "UTC+6 (KGT)",
            neighbors: ["Kazakhstan", "Uzbekistan", "Tajikistan", "China"],
            borders: 4573,
            hemispheres: ["Northern", "Eastern"]
        },

        political: {
            government: "Unitary Presidential Republic",
            headOfState: "President Sadyr Japarov",
            headOfGovernment: "Chairman of Cabinet Akylbek Japarov",
            legislature: "Supreme Council (Jogorku Kenesh)",
            legalSystem: "Civil Law",
            states: 9,
            regions: 7,
            cities: 2,
            largestCity: "Bishkek",
            organizations: ["UN", "CIS", "SCO", "CSTO", "EAEU", "OIC", "Turkic Council"]
        },

        economy: {
            gdp: "$11.93 Billion",
            gdpPPP: "$42.93 Billion",
            gdpPerCapita: "$1,677",
            gdpRank: "#140",
            gdpGrowth: "6.2%",
            currency: "Kyrgyzstani Som",
            currencyCode: "KGS",
            currencySymbol: "с",
            inflation: "10.8%",
            unemployment: "5.3%",
            majorSectors: ["Services (53%)", "Industry (26%)", "Agriculture (12%)"],
            industries: ["Small Machinery", "Textiles", "Food Processing", "Cement", "Shoes", "Sawn Logs", "Refrigerators", "Furniture", "Electric Motors", "Gold", "Rare Earth Metals"],
            exports: ["Gold", "Precious Metals", "Cotton", "Wool", "Garments", "Meat", "Tobacco", "Electricity", "Machinery"],
            imports: ["Petroleum Products", "Machinery", "Chemicals", "Foodstuffs"]
        },

        geography: {
            climate: "Continental to Polar in High Mountains",
            avgTemperature: "6.5°C",
            annualRainfall: "533 mm",
            highestPoint: "Jengish Chokusu (Pobeda Peak) (7,439 m)",
            lowestPoint: "Kara-Daryya (132 m)",
            coastline: "0 km (Landlocked)",
            forestCover: "3.3%",
            arableLand: "6.7%",
            terrain: "Peaks of Tien Shan and associated valleys and basins; 94% mountainous",
            naturalResources: ["Hydropower", "Gold", "Rare Earth Metals", "Locally Exploitable Coal", "Oil", "Natural Gas", "Nepheline", "Mercury", "Bismuth", "Lead", "Zinc"]
        },

        geography_links: {
            rivers: ["Naryn River", "Chu River", "Talas River", "Kara Darya"],
            mountains: ["Tian Shan", "Pamir-Alay", "Pobeda Peak", "Lenin Peak"],
            deserts: [],
            forests: ["Walnut-Fruit Forests", "Spruce Forests"],
            oceans: []
        },

        culture: {
            officialLanguages: ["Kyrgyz", "Russian"],
            languages: ["Kyrgyz", "Russian", "Uzbek"],
            religions: ["Islam (90%)", "Russian Orthodox (7%)", "Others (3%)"],
            heritageSites: ["Sulaiman-Too Sacred Mountain", "Silk Roads Sites in Kyrgyzstan", "Western Tian-Shan"],
            festivals: ["Nooruz", "Independence Day", "Orozo Ait", "Kurman Ait"],
            cuisine: ["Beshbarmak", "Plov", "Lagman", "Manti", "Kumis", "Samsa", "Ashlyam-Fu"],
            arts: ["Manas Epic", "Felt Making (Shyrdak)", "Komuz Music", "Yurt Crafts"],
            sports: ["Kok Boru (Buzkashi)", "Football", "Wrestling", "Horse Racing", "Archery"]
        },

        symbols: {
            bird: "Saker Falcon",
            animal: "Snow Leopard",
            flower: "Tulip",
            tree: "Walnut",
            anthem: "Kyrgyz Respublikasynyn Mamlekettik Gimni",
            motto: "None Official"
        },

        demographics: {
            lifeExpectancy: 72.1,
            literacyRate: "99.6%",
            urbanPopulation: "37%",
            medianAge: 27.3
        },

        history: {
            timeline: [
                { year: "840", title: "Kyrgyz Khaganate", description: "Kyrgyz state at its peak" },
                { year: "1876", title: "Russian Conquest", description: "Incorporated into Russian Empire" },
                { year: "1936", title: "Soviet Republic", description: "Became Kirghiz Soviet Socialist Republic" },
                { year: "1991", title: "Independence", description: "Independence from Soviet Union" },
                { year: "2005", title: "Tulip Revolution", description: "President Akayev ousted" },
                { year: "2010", title: "Revolution", description: "President Bakiyev overthrown" }
            ],
            notableFigures: ["Manas (Epic Hero)", "Chingiz Aitmatov", "Kurmanjan Datka", "Askar Akayev"]
        },

        disputes: [
            { name: "Fergana Valley", description: "Border disputes with Tajikistan and Uzbekistan", type: "Border" }
        ],

        quickFacts: [
            { icon: "mountain", title: "Mountains", text: "94% of country is mountainous" },
            { icon: "book", title: "Manas Epic", text: "World's longest epic poem (500,000+ lines)" },
            { icon: "home", title: "Yurt Symbol", text: "National flag features a yurt crown (tunduk)" },
            { icon: "water", title: "Issyk-Kul", text: "2nd largest alpine lake in the world" },
            { icon: "tree", title: "Walnut Forests", text: "World's largest natural walnut forests" }
        ]
    },

    // 3. TAJIKISTAN
    {
        id: "TJK",
        name: "Tajikistan",
        officialName: "Republic of Tajikistan",
        flag: "https://flagcdn.com/w320/tj.png",
        
        images: {
            hero: "https://images.unsplash.com/photo-1601123953799-0e44b39a3bc8?w=1920&q=80",
            landscape: "https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?w=1920&q=80",
            city: "https://images.unsplash.com/photo-1565008576549-57569a49371d?w=1920&q=80"
        },

        basic: {
            capital: "Dushanbe",
            continent: "Asia",
            region: "Central Asia",
            subregion: "Central Asia",
            population: 10143543,
            area: 143100,
            populationDensity: 71,
            independence: "1991",
            callingCode: "+992",
            tld: ".tj",
            drivingSide: "Right",
            electricity: "220V, 50Hz"
        },

        location: {
            coordinates: [38.8610, 71.2761],
            timezone: "UTC+5 (TJT)",
            neighbors: ["Kyrgyzstan", "Uzbekistan", "Afghanistan", "China"],
            borders: 4130,
            hemispheres: ["Northern", "Eastern"]
        },

        political: {
            government: "Unitary Presidential Republic",
            headOfState: "President Emomali Rahmon",
            headOfGovernment: "Prime Minister Kokhir Rasulzoda",
            legislature: "Supreme Assembly (Majlisi Oli)",
            legalSystem: "Civil Law",
            states: 5,
            regions: 4,
            districts: 1,
            largestCity: "Dushanbe",
            organizations: ["UN", "CIS", "SCO", "CSTO", "OIC"]
        },

        economy: {
            gdp: "$11.78 Billion",
            gdpPPP: "$46.23 Billion",
            gdpPerCapita: "$1,161",
            gdpRank: "#141",
            gdpGrowth: "8.3%",
            currency: "Tajikistani Somoni",
            currencyCode: "TJS",
            currencySymbol: "SM",
            inflation: "3.7%",
            unemployment: "7.5%",
            majorSectors: ["Services (42%)", "Industry (28%)", "Agriculture (24%)"],
            industries: ["Aluminum Production", "Zinc", "Lead", "Chemicals", "Fertilizers", "Cement", "Vegetable Oil", "Metal-cutting Machine Tools", "Refrigerators", "Freezers"],
            exports: ["Aluminum", "Electricity", "Cotton", "Fruits", "Vegetable Oil", "Textiles"],
            imports: ["Petroleum Products", "Aluminum Oxide", "Machinery", "Foodstuffs"]
        },

        geography: {
            climate: "Continental; Subtropical in Fergana Valley",
            avgTemperature: "10.8°C",
            annualRainfall: "691 mm",
            highestPoint: "Ismoil Somoni Peak (7,495 m)",
            lowestPoint: "Syr Darya (300 m)",
            coastline: "0 km (Landlocked)",
            forestCover: "2.9%",
            arableLand: "6%",
            terrain: "Pamir Mountains dominate; 93% mountainous; valleys in north and southwest",
            naturalResources: ["Hydropower", "Petroleum", "Uranium", "Mercury", "Brown Coal", "Lead", "Zinc", "Antimony", "Tungsten", "Silver", "Gold"]
        },

        geography_links: {
            rivers: ["Amu Darya", "Syr Darya", "Vakhsh River", "Panj River", "Zeravshan River"],
            mountains: ["Pamir Mountains", "Fann Mountains", "Ismoil Somoni Peak", "Lenin Peak"],
            deserts: [],
            forests: ["Juniper Woodlands", "Riparian Forests"],
            oceans: []
        },

        culture: {
            officialLanguages: ["Tajik"],
            languages: ["Tajik", "Russian", "Uzbek"],
            religions: ["Islam (98% - Sunni 95%, Shia 3%)", "Others (2%)"],
            heritageSites: ["Proto-urban Site of Sarazm", "Tajik National Park (Pamir Mountains)"],
            festivals: ["Navruz", "Independence Day", "Mehrgon (Harvest Festival)", "Eid al-Fitr", "Eid al-Adha"],
            cuisine: ["Plov", "Qurutob", "Shashlik", "Laghman", "Samboosa", "Shirchoy"],
            arts: ["Shashmaqam Music", "Embroidery", "Carpet Weaving", "Wood Carving"],
            sports: ["Football", "Wrestling (Gushtigiri)", "Buzkashi", "Boxing"]
        },

        symbols: {
            bird: "Himalayan Rubythroat",
            animal: "Marco Polo Sheep",
            flower: "None Official",
            tree: "None Official",
            anthem: "Surudi Milli",
            motto: "None Official"
        },

        demographics: {
            lifeExpectancy: 71.8,
            literacyRate: "99.8%",
            urbanPopulation: "27.5%",
            medianAge: 23.3
        },

        history: {
            timeline: [
                { year: "6th Century BCE", title: "Persian Empire", description: "Part of Achaemenid Persian Empire" },
                { year: "329 BCE", title: "Alexander", description: "Conquered by Alexander the Great" },
                { year: "1868", title: "Russian Rule", description: "Northern Tajikistan under Russian Empire" },
                { year: "1929", title: "Soviet Republic", description: "Became Tajik Soviet Socialist Republic" },
                { year: "1991", title: "Independence", description: "Independence from Soviet Union" },
                { year: "1992-1997", title: "Civil War", description: "Devastating civil war" }
            ],
            notableFigures: ["Ismoil Somoni", "Rudaki", "Emomali Rahmon", "Ibn Sina (Avicenna)"]
        },

        disputes: [
            { name: "Fergana Valley Borders", description: "Border disputes with Kyrgyzstan", type: "Border" }
        ],

        quickFacts: [
            { icon: "mountain", title: "Roof of World", text: "93% mountainous, 'Roof of the World'" },
            { icon: "bolt", title: "Hydropower", text: "98% of electricity from hydropower" },
            { icon: "money-bill", title: "Remittances", text: "30%+ of GDP from remittances (highest globally)" },
            { icon: "flag", title: "Tallest Flagpole", text: "Had world's tallest flagpole (2011-2014)" },
            { icon: "users", title: "Young Population", text: "One of youngest populations globally" }
        ]
    },

    // 4. TURKMENISTAN
    {
        id: "TKM",
        name: "Turkmenistan",
        officialName: "Turkmenistan",
        flag: "https://flagcdn.com/w320/tm.png",
        
        images: {
            hero: "https://images.unsplash.com/photo-1590077428593-a55bb07c4665?w=1920&q=80",
            landscape: "https://images.unsplash.com/photo-1565008576549-57569a49371d?w=1920&q=80",
            city: "https://images.unsplash.com/photo-1558431382-27e303142255?w=1920&q=80"
        },

        basic: {
            capital: "Ashgabat",
            continent: "Asia",
            region: "Central Asia",
            subregion: "Central Asia",
            population: 6516100,
            area: 488100,
            populationDensity: 13,
            independence: "1991",
            callingCode: "+993",
            tld: ".tm",
            drivingSide: "Right",
            electricity: "220V, 50Hz"
        },

        location: {
            coordinates: [38.9697, 59.5563],
            timezone: "UTC+5 (TMT)",
            neighbors: ["Kazakhstan", "Uzbekistan", "Afghanistan", "Iran"],
            borders: 4158,
            hemispheres: ["Northern", "Eastern"]
        },

        political: {
            government: "Unitary Presidential Republic (Authoritarian)",
            headOfState: "President Serdar Berdimuhamedow",
            headOfGovernment: "President Serdar Berdimuhamedow",
            legislature: "National Council (Halk Maslahaty & Assembly)",
            legalSystem: "Civil Law (Soviet influence)",
            states: 6,
            regions: 5,
            cities: 1,
            largestCity: "Ashgabat",
            organizations: ["UN", "CIS (Associate)", "OIC", "NAM"]
        },

        economy: {
            gdp: "$59.89 Billion",
            gdpPPP: "$112.67 Billion",
            gdpPerCapita: "$9,189",
            gdpRank: "#75",
            gdpGrowth: "6.3%",
            currency: "Turkmenistan Manat",
            currencyCode: "TMT",
            currencySymbol: "m",
            inflation: "13.0%",
            unemployment: "4.0%",
            majorSectors: ["Industry (48%)", "Services (38%)", "Agriculture (8%)"],
            industries: ["Natural Gas", "Oil", "Petroleum Products", "Textiles", "Food Processing"],
            exports: ["Natural Gas", "Crude Oil", "Petrochemicals", "Textiles", "Cotton Fiber"],
            imports: ["Machinery", "Chemicals", "Foodstuffs"]
        },

        geography: {
            climate: "Subtropical Desert",
            avgTemperature: "17°C",
            annualRainfall: "161 mm",
            highestPoint: "Ayrybaba (3,139 m)",
            lowestPoint: "Vpadina Akchanaya (-81 m)",
            coastline: "0 km (Landlocked; Caspian Sea coast 1,768 km)",
            forestCover: "8.8%",
            arableLand: "4.1%",
            terrain: "Flat-to-rolling sandy desert (Karakum) with dunes; mountains along border with Iran",
            naturalResources: ["Petroleum", "Natural Gas", "Sulfur", "Salt"]
        },

        geography_links: {
            rivers: ["Amu Darya", "Murghab River", "Tejen River", "Atrek River"],
            mountains: ["Kopet Dag", "Kugitang Mountains"],
            deserts: ["Karakum Desert"],
            forests: ["Riparian Forests", "Mountain Juniper"],
            oceans: ["Caspian Sea"]
        },

        culture: {
            officialLanguages: ["Turkmen"],
            languages: ["Turkmen", "Russian", "Uzbek"],
            religions: ["Islam (93% - Sunni)", "Eastern Orthodox (6.4%)", "Others (0.6%)"],
            heritageSites: ["State Historical and Cultural Park 'Ancient Merv'", "Kunya-Urgench", "Parthian Fortresses of Nisa"],
            festivals: ["Nowruz", "Independence Day", "Neutrality Day", "Carpet Day", "Melon Day"],
            cuisine: ["Plov", "Shashlik", "Dograma", "Gutap", "Churek", "Shashlyk"],
            arts: ["Carpet Weaving", "Jewelry Making", "Traditional Music (Dutar)", "Embroidery"],
            sports: ["Football", "Wrestling", "Horse Racing (Akhal-Teke)", "Weightlifting"]
        },

        symbols: {
            bird: "None Official",
            animal: "Akhal-Teke Horse",
            flower: "None Official",
            tree: "None Official",
            anthem: "Garaşsyz, Bitarap Türkmenistanyň Döwlet Gimni",
            motto: "None Official"
        },

        demographics: {
            lifeExpectancy: 70.55,
            literacyRate: "99.7%",
            urbanPopulation: "53%",
            medianAge: 28.3
        },

        history: {
            timeline: [
                { year: "6th Century BCE", title: "Persian Rule", description: "Part of Achaemenid Empire" },
                { year: "1881", title: "Russian Conquest", description: "Battle of Geok Tepe; Russian victory" },
                { year: "1925", title: "Soviet Republic", description: "Became Turkmen Soviet Socialist Republic" },
                { year: "1991", title: "Independence", description: "Independence from Soviet Union" },
                { year: "2006", title: "Niyazov Death", description: "President Niyazov died; Berdimuhamedow took power" },
                { year: "2022", title: "Power Transfer", description: "Power transferred to Serdar Berdimuhamedow" }
            ],
            notableFigures: ["Saparmurat Niyazov", "Gurbanguly Berdimuhamedow", "Magtymguly Pyragy"]
        },

        disputes: [],

        quickFacts: [
            { icon: "gas-pump", title: "Gas Reserves", text: "4th largest natural gas reserves globally" },
            { icon: "fire", title: "Door to Hell", text: "Darvaza Gas Crater burning since 1971" },
            { icon: "horse", title: "Akhal-Teke", text: "Home to Akhal-Teke 'Golden Horse'" },
            { icon: "building", title: "White Marble", text: "Ashgabat has most white marble buildings (Guinness Record)" },
            { icon: "globe", title: "Neutrality", text: "UN-recognized permanent neutrality (1995)" }
        ]
    },

    // 5. UZBEKISTAN
    {
        id: "UZB",
        name: "Uzbekistan",
        officialName: "Republic of Uzbekistan",
        flag: "https://flagcdn.com/w320/uz.png",
        
        images: {
            hero: "https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?w=1920&q=80",
            landscape: "https://images.unsplash.com/photo-1565008576549-57569a49371d?w=1920&q=80",
            city: "https://images.unsplash.com/photo-1580974852861-c381510bc98a?w=1920&q=80"
        },

        basic: {
            capital: "Tashkent",
            continent: "Asia",
            region: "Central Asia",
            subregion: "Central Asia",
            population: 35648100,
            area: 448978,
            populationDensity: 79,
            independence: "1991",
            callingCode: "+998",
            tld: ".uz",
            drivingSide: "Right",
            electricity: "220V, 50Hz"
        },

        location: {
            coordinates: [41.3775, 64.5853],
            timezone: "UTC+5 (UZT)",
            neighbors: ["Kazakhstan", "Kyrgyzstan", "Tajikistan", "Afghanistan", "Turkmenistan"],
            borders: 6893,
            hemispheres: ["Northern", "Eastern"]
        },

        political: {
            government: "Unitary Presidential Constitutional Republic",
            headOfState: "President Shavkat Mirziyoyev",
            headOfGovernment: "Prime Minister Abdulla Aripov",
            legislature: "Supreme Assembly (Oliy Majlis)",
            legalSystem: "Civil Law",
            states: 14,
            regions: 12,
            autonomousRepublic: 1,
            city: 1,
            largestCity: "Tashkent",
            organizations: ["UN", "CIS", "SCO", "OIC", "Turkic Council"]
        },

        economy: {
            gdp: "$90.35 Billion",
            gdpPPP: "$340.74 Billion",
            gdpPerCapita: "$2,534",
            gdpRank: "#63",
            gdpGrowth: "5.7%",
            currency: "Uzbekistani Som",
            currencyCode: "UZS",
            currencySymbol: "сўм",
            inflation: "10.0%",
            unemployment: "5.8%",
            majorSectors: ["Services (47%)", "Industry (32%)", "Agriculture (17%)"],
            industries: ["Textiles", "Food Processing", "Machine Building", "Metallurgy", "Mining", "Hydrocarbon Extraction", "Chemicals"],
            exports: ["Gold", "Energy Products", "Cotton", "Copper", "Textiles", "Foodstuffs", "Automobiles"],
            imports: ["Machinery", "Equipment", "Foodstuffs", "Chemicals", "Ferrous & Non-ferrous Metals"]
        },

        geography: {
            climate: "Continental; Semi-arid to Desert",
            avgTemperature: "14°C",
            annualRainfall: "264 mm",
            highestPoint: "Adelunga Toghi (4,301 m)",
            lowestPoint: "Sariqamish Kuli (-12 m)",
            coastline: "0 km (Doubly Landlocked)",
            forestCover: "7.7%",
            arableLand: "10.1%",
            terrain: "Kyzylkum desert in center; fertile valleys and mountains in east",
            naturalResources: ["Natural Gas", "Petroleum", "Coal", "Gold", "Uranium", "Silver", "Copper", "Lead", "Zinc", "Tungsten", "Molybdenum"]
        },

        geography_links: {
            rivers: ["Amu Darya", "Syr Darya", "Zeravshan River", "Chirchiq River"],
            mountains: ["Tian Shan", "Pamir-Alay", "Gissar Range"],
            deserts: ["Kyzylkum Desert", "Aralkum (Former Aral Sea)"],
            forests: ["Tugai Forests", "Mountain Forests"],
            oceans: ["Aral Sea (Shrinking)"]
        },

        culture: {
            officialLanguages: ["Uzbek"],
            languages: ["Uzbek", "Russian", "Tajik", "Kazakh", "Karakalpak"],
            religions: ["Islam (88% - Sunni)", "Eastern Orthodox (9%)", "Others (3%)"],
            heritageSites: ["Itchan Kala (Khiva)", "Historic Centre of Bukhara", "Historic Centre of Shakhrisyabz", "Samarkand – Crossroad of Cultures", "Silk Roads Sites in Uzbekistan"],
            festivals: ["Navruz", "Independence Day", "Eid al-Fitr", "Eid al-Adha", "Mustaqillik Bayrami"],
            cuisine: ["Plov", "Shashlik", "Lagman", "Samsa", "Manti", "Non (Bread)", "Dimlama"],
            arts: ["Miniature Painting", "Ceramics", "Silk Weaving (Ikat)", "Wood Carving", "Embroidery"],
            sports: ["Football", "Wrestling (Kurash)", "Tennis", "Boxing", "Chess"]
        },

        symbols: {
            bird: "Chukar Partridge",
            animal: "None Official",
            flower: "Cotton",
            tree: "None Official",
            anthem: "O'zbekiston Respublikasining Davlat Madhiyasi",
            motto: "None Official"
        },

        demographics: {
            lifeExpectancy: 74.83,
            literacyRate: "99.9%",
            urbanPopulation: "50.4%",
            medianAge: 28.6
        },

        history: {
            timeline: [
                { year: "6th Century BCE", title: "Persian Empire", description: "Part of Achaemenid Empire" },
                { year: "329 BCE", title: "Alexander", description: "Conquered by Alexander the Great" },
                { year: "8th Century", title: "Arab Conquest", description: "Islam introduced" },
                { year: "1370-1507", title: "Timurid Empire", description: "Samarkand capital of Timurid Empire" },
                { year: "1924", title: "Soviet Republic", description: "Uzbek Soviet Socialist Republic created" },
                { year: "1991", title: "Independence", description: "Independence from Soviet Union" }
            ],
            notableFigures: ["Amir Timur (Tamerlane)", "Ulugh Beg", "Al-Bukhari", "Avicenna", "Al-Khwarizmi"]
        },

        disputes: [
            { name: "Fergana Valley", description: "Border issues with Kyrgyzstan and Tajikistan", type: "Border" }
        ],

        quickFacts: [
            { icon: "flag", title: "Doubly Landlocked", text: "One of only two doubly landlocked countries" },
            { icon: "road", title: "Silk Road", text: "Heart of ancient Silk Road (Samarkand, Bukhara)" },
            { icon: "leaf", title: "Cotton", text: "One of world's largest cotton producers" },
            { icon: "gem", title: "Gold", text: "9th largest gold producer globally" },
            { icon: "users", title: "Most Populous", text: "Most populous Central Asian country (35M+)" }
        ]
    },

    // 6. RUSSIA
    {
        id: "RUS",
        name: "Russia",
        officialName: "Russian Federation",
        flag: "https://flagcdn.com/w320/ru.png",
        
        images: {
            hero: "https://images.unsplash.com/photo-1513326738677-b964603b136d?w=1920&q=80",
            landscape: "https://images.unsplash.com/photo-1551845041-63e8e76836ea?w=1920&q=80",
            city: "https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?w=1920&q=80"
        },

        basic: {
            capital: "Moscow",
            continent: "Europe/Asia",
            region: "Eastern Europe / Northern Asia",
            subregion: "Eastern Europe",
            population: 144444359,
            area: 17098242,
            populationDensity: 9,
            independence: "1991 (From USSR)",
            callingCode: "+7",
            tld: ".ru",
            drivingSide: "Right",
            electricity: "220V, 50Hz"
        },

        location: {
            coordinates: [61.5240, 105.3188],
            timezone: "UTC+2 to UTC+12 (11 time zones)",
            neighbors: ["Norway", "Finland", "Estonia", "Latvia", "Lithuania", "Poland", "Belarus", "Ukraine", "Georgia", "Azerbaijan", "Kazakhstan", "Mongolia", "China", "North Korea"],
            borders: 22407,
            hemispheres: ["Northern", "Eastern/Western"]
        },

        political: {
            government: "Federal Semi-Presidential Constitutional Republic",
            headOfState: "President Vladimir Putin",
            headOfGovernment: "Prime Minister Mikhail Mishustin",
            legislature: "Federal Assembly (Federation Council & State Duma)",
            legalSystem: "Civil Law",
            states: 89,
            subjects: 89,
            republics: 22,
            krais: 9,
            oblasts: 48,
            federalCities: 3,
            autonomousOblast: 1,
            autonomousOkrugs: 4,
            largestCity: "Moscow",
            organizations: ["UN (Security Council)", "BRICS", "G20", "APEC", "SCO", "CIS", "CSTO", "EAEU"]
        },

        economy: {
            gdp: "$2.24 Trillion",
            gdpPPP: "$5.33 Trillion",
            gdpPerCapita: "$15,270",
            gdpRank: "#8",
            gdpGrowth: "3.6%",
            currency: "Russian Ruble",
            currencyCode: "RUB",
            currencySymbol: "₽",
            inflation: "7.4%",
            unemployment: "2.9%",
            majorSectors: ["Services (62%)", "Industry (32%)", "Agriculture (4%)"],
            industries: ["Mining", "Machine Building", "Defense Industries", "Shipbuilding", "Road & Rail Transportation Equipment", "Communications Equipment", "Agricultural Machinery", "Tractors", "Construction Equipment", "Electric Power Generating Equipment", "Medical & Scientific Instruments", "Consumer Durables", "Textiles", "Foodstuffs", "Handicrafts"],
            exports: ["Crude Petroleum", "Refined Petroleum", "Petroleum Gas", "Coal", "Wheat", "Iron", "Gold", "Aluminum", "Fertilizers"],
            imports: ["Machinery", "Vehicles", "Pharmaceuticals", "Plastics", "Electronics", "Optical Equipment"]
        },

        geography: {
            climate: "Ranges from Steppes to Humid Continental to Subarctic to Tundra",
            avgTemperature: "-5.5°C",
            annualRainfall: "460 mm",
            highestPoint: "Mount Elbrus (5,642 m)",
            lowestPoint: "Caspian Sea (-28 m)",
            coastline: "37,653 km",
            forestCover: "49.8%",
            arableLand: "7.4%",
            terrain: "Broad plain with low hills west of Urals; vast coniferous forest and tundra in Siberia; uplands and mountains along southern border regions",
            naturalResources: ["Petroleum", "Natural Gas", "Coal", "Timber", "Iron Ore", "Manganese", "Chromium", "Nickel", "Platinum", "Titanium", "Copper", "Tin", "Lead", "Zinc", "Gold", "Silver", "Diamonds", "Phosphates", "Hydropower"]
        },

        geography_links: {
            rivers: ["Volga", "Ob", "Yenisei", "Lena", "Amur", "Don", "Ural", "Irtysh"],
            mountains: ["Ural Mountains", "Caucasus Mountains", "Altai Mountains", "Mount Elbrus", "Siberian Mountains"],
            deserts: [],
            forests: ["Siberian Taiga (Largest Forest in World)", "Temperate Forests"],
            oceans: ["Arctic Ocean", "Pacific Ocean", "Baltic Sea", "Black Sea", "Caspian Sea", "Sea of Japan", "Barents Sea"]
        },

        culture: {
            officialLanguages: ["Russian"],
            languages: ["Russian", "Tatar", "Chechen", "Bashkir", "Ukrainian", "Chuvash", "100+ Regional Languages"],
            religions: ["Russian Orthodox (71%)", "Islam (10%)", "Other Christians (2%)", "Buddhism (0.5%)"],
            heritageSites: ["Kremlin and Red Square", "Saint Petersburg Historic Centre", "Lake Baikal", "Volcanoes of Kamchatka", "Golden Mountains of Altai", "Kizhi Pogost", "Historic Monuments of Novgorod", "Trinity Sergius Lavra"],
            festivals: ["New Year", "Victory Day (May 9)", "Russia Day", "Maslenitsa", "Orthodox Easter", "Unity Day"],
            cuisine: ["Borscht", "Pelmeni", "Blini", "Beef Stroganoff", "Shashlik", "Olivier Salad", "Pirozhki", "Caviar"],
            arts: ["Ballet", "Classical Music", "Literature", "Orthodox Icons", "Fabergé Eggs", "Matryoshka Dolls"],
            sports: ["Ice Hockey", "Football", "Figure Skating", "Gymnastics", "Wrestling", "Chess", "Basketball"]
        },

        symbols: {
            bird: "None Official",
            animal: "Brown Bear",
            flower: "Chamomile",
            tree: "Birch",
            anthem: "Gosudarstvenny Gimn Rossiyskoy Federatsii",
            motto: "None Official"
        },

        demographics: {
            lifeExpectancy: 73.06,
            literacyRate: "99.7%",
            urbanPopulation: "75%",
            medianAge: 40.3
        },

        history: {
            timeline: [
                { year: "862", title: "Rurik Dynasty", description: "Rurik founded first Russian state" },
                { year: "988", title: "Christianization", description: "Kievan Rus' adopted Orthodox Christianity" },
                { year: "1547", title: "Tsardom", description: "Ivan IV crowned first Tsar" },
                { year: "1721", title: "Russian Empire", description: "Peter the Great proclaimed Russian Empire" },
                { year: "1917", title: "Revolution", description: "Russian Revolution; end of monarchy" },
                { year: "1922", title: "Soviet Union", description: "USSR established" },
                { year: "1991", title: "Russian Federation", description: "USSR dissolved; Russian Federation established" },
                { year: "2022", title: "Ukraine Invasion", description: "Russia invaded Ukraine" }
            ],
            notableFigures: ["Peter the Great", "Catherine the Great", "Ivan the Terrible", "Lenin", "Stalin", "Tolstoy", "Dostoevsky", "Pushkin", "Tchaikovsky"]
        },

        disputes: [
            { name: "Crimea", description: "Annexed from Ukraine in 2014", type: "Territory" },
            { name: "Kuril Islands", description: "Disputed with Japan", type: "Territory" },
            { name: "Ukraine", description: "Ongoing conflict since 2022", type: "Territory" },
            { name: "South Ossetia/Abkhazia", description: "Recognized by Russia but disputed", type: "Territory" }
        ],

        quickFacts: [
            { icon: "flag", title: "Largest Country", text: "World's largest country (11% of landmass)" },
            { icon: "clock", title: "11 Time Zones", text: "Spans 11 time zones" },
            { icon: "water", title: "Lake Baikal", text: "Deepest lake & 20% of world's fresh water" },
            { icon: "atom", title: "Nuclear Power", text: "Largest nuclear arsenal globally" },
            { icon: "gas-pump", title: "Energy Giant", text: "World's largest natural gas exporter" },
            { icon: "tree", title: "Largest Forest", text: "Siberian Taiga is world's largest forest" }
        ]
    },

    // 7. BELARUS
    {
        id: "BLR",
        name: "Belarus",
        officialName: "Republic of Belarus",
        flag: "https://flagcdn.com/w320/by.png",
        
        images: {
            hero: "https://images.unsplash.com/photo-1571218567892-58e01927a2d2?w=1920&q=80",
            landscape: "https://images.unsplash.com/photo-1565008576549-57569a49371d?w=1920&q=80",
            city: "https://images.unsplash.com/photo-1562347721-1e2e04c3d799?w=1920&q=80"
        },

        basic: {
            capital: "Minsk",
            continent: "Europe",
            region: "Eastern Europe",
            subregion: "Eastern Europe",
            population: 9200617,
            area: 207600,
            populationDensity: 47,
            independence: "1991",
            callingCode: "+375",
            tld: ".by",
            drivingSide: "Right",
            electricity: "220V, 50Hz"
        },

        location: {
            coordinates: [53.7098, 27.9534],
            timezone: "UTC+3 (MSK)",
            neighbors: ["Russia", "Ukraine", "Poland", "Lithuania", "Latvia"],
            borders: 3617,
            hemispheres: ["Northern", "Eastern"]
        },

        political: {
            government: "Unitary Presidential Republic (Authoritarian)",
            headOfState: "President Alexander Lukashenko",
            headOfGovernment: "Prime Minister Roman Golovchenko",
            legislature: "National Assembly (Council of Republic & House of Representatives)",
            legalSystem: "Civil Law",
            states: 7,
            regions: 6,
            city: 1,
            largestCity: "Minsk",
            organizations: ["UN", "CIS", "CSTO", "EAEU"]
        },

        economy: {
            gdp: "$72.82 Billion",
            gdpPPP: "$221.58 Billion",
            gdpPerCapita: "$7,919",
            gdpRank: "#70",
            gdpGrowth: "3.9%",
            currency: "Belarusian Ruble",
            currencyCode: "BYN",
            currencySymbol: "Br",
            inflation: "6.0%",
            unemployment: "3.6%",
            majorSectors: ["Services (50%)", "Industry (41%)", "Agriculture (7%)"],
            industries: ["Metal-Cutting Machine Tools", "Tractors", "Trucks", "Earthmovers", "Motorcycles", "Synthetic Fibers", "Fertilizer", "Textiles", "Refrigerators", "Washing Machines", "TVs"],
            exports: ["Refined Petroleum", "Fertilizers", "Cheese", "Tractors", "Trucks", "Timber"],
            imports: ["Crude Petroleum", "Natural Gas", "Machinery", "Vehicles", "Pharmaceuticals"]
        },

        geography: {
            climate: "Continental; Cold Winters, Cool Summers",
            avgTemperature: "6.4°C",
            annualRainfall: "620 mm",
            highestPoint: "Dzyarzhynskaya Hara (346 m)",
            lowestPoint: "Neman River (90 m)",
            coastline: "0 km (Landlocked)",
            forestCover: "42.7%",
            arableLand: "27.2%",
            terrain: "Generally flat with much marshland",
            naturalResources: ["Timber", "Peat Deposits", "Potash", "Salt", "Granite", "Dolomitic Limestone", "Marl", "Sand", "Gravel", "Clay"]
        },

        geography_links: {
            rivers: ["Dnieper River", "Pripyat River", "Neman River", "Western Dvina", "Bug River"],
            mountains: [],
            deserts: [],
            forests: ["Belovezhskaya Pushcha", "Mixed Forests"],
            oceans: []
        },

        culture: {
            officialLanguages: ["Belarusian", "Russian"],
            languages: ["Belarusian", "Russian", "Polish"],
            religions: ["Eastern Orthodox (48.3%)", "Catholic (7.1%)", "Others (3.5%)", "Non-religious (41.1%)"],
            heritageSites: ["Mir Castle Complex", "Architectural, Residential and Cultural Complex of the Radziwill Family at Nesvizh", "Struve Geodetic Arc", "Belovezhskaya Pushcha"],
            festivals: ["Independence Day (July 3)", "Kupalle (Ivan Kupala)", "Maslenitsa", "Orthodox Easter", "Victory Day"],
            cuisine: ["Draniki (Potato Pancakes)", "Machanka", "Kalduny", "Borscht", "Salo", "Kvass"],
            arts: ["Folk Music", "Embroidery", "Straw Weaving", "Pottery", "Wood Carving"],
            sports: ["Ice Hockey", "Football", "Biathlon", "Athletics", "Wrestling", "Freestyle Skiing"]
        },

        symbols: {
            bird: "White Stork",
            animal: "European Bison",
            flower: "Flax Flower",
            tree: "None Official",
            anthem: "My Byelarusy",
            motto: "None Official"
        },

        demographics: {
            lifeExpectancy: 74.79,
            literacyRate: "99.8%",
            urbanPopulation: "79.5%",
            medianAge: 40.9
        },

        history: {
            timeline: [
                { year: "9th Century", title: "Polotsk Principality", description: "First Belarusian state" },
                { year: "1569", title: "Polish-Lithuanian Commonwealth", description: "Part of Commonwealth" },
                { year: "1795", title: "Russian Empire", description: "Incorporated into Russian Empire" },
                { year: "1919", title: "Byelorussian SSR", description: "Soviet republic established" },
                { year: "1986", title: "Chernobyl", description: "Chernobyl disaster affected Belarus severely" },
                { year: "1991", title: "Independence", description: "Independence from Soviet Union" },
                { year: "1994", title: "Lukashenko", description: "Alexander Lukashenko became president" }
            ],
            notableFigures: ["Francysk Skaryna", "Tadeusz Kosciuszko", "Marc Chagall", "Svetlana Alexievich"]
        },

        disputes: [],

        quickFacts: [
            { icon: "tree", title: "Bison Habitat", text: "Home to European bison in Belovezhskaya Pushcha" },
            { icon: "radiation", title: "Chernobyl Impact", text: "Most affected by Chernobyl disaster (1986)" },
            { icon: "tractor", title: "Tractors", text: "Major tractor producer (MTZ Belarus)" },
            { icon: "hockey-puck", title: "Ice Hockey", text: "Ice hockey is national passion" },
            { icon: "crown", title: "Last Dictator", text: "Lukashenko in power since 1994" }
        ]
    },

    // 8. MOLDOVA
    {
        id: "MDA",
        name: "Moldova",
        officialName: "Republic of Moldova",
        flag: "https://flagcdn.com/w320/md.png",
        
        images: {
            hero: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80",
            landscape: "https://images.unsplash.com/photo-1565008576549-57569a49371d?w=1920&q=80",
            city: "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?w=1920&q=80"
        },

        basic: {
            capital: "Chișinău",
            continent: "Europe",
            region: "Eastern Europe",
            subregion: "Eastern Europe",
            population: 2512758,
            area: 33846,
            populationDensity: 94,
            independence: "1991",
            callingCode: "+373",
            tld: ".md",
            drivingSide: "Right",
            electricity: "230V, 50Hz"
        },

        location: {
            coordinates: [47.4116, 28.3699],
            timezone: "UTC+2 (EET) / UTC+3 (EEST)",
            neighbors: ["Romania", "Ukraine"],
            borders: 1885,
            hemispheres: ["Northern", "Eastern"]
        },

        political: {
            government: "Unitary Parliamentary Republic",
            headOfState: "President Maia Sandu",
            headOfGovernment: "Prime Minister Dorin Recean",
            legislature: "Parliament",
            legalSystem: "Civil Law",
            states: 37,
            districts: 32,
            municipalities: 3,
            autonomousRegions: 2,
            largestCity: "Chișinău",
            organizations: ["UN", "CIS", "OSCE", "GUAM", "EU (Candidate)"]
        },

        economy: {
            gdp: "$16.14 Billion",
            gdpPPP: "$44.21 Billion",
            gdpPerCapita: "$6,429",
            gdpRank: "#129",
            gdpGrowth: "0.7%",
            currency: "Moldovan Leu",
            currencyCode: "MDL",
            currencySymbol: "L",
            inflation: "13.4%",
            unemployment: "3.1%",
            majorSectors: ["Services (63%)", "Industry (23%)", "Agriculture (10%)"],
            industries: ["Sugar Processing", "Vegetable Oil", "Food Processing", "Agricultural Machinery", "Foundry Equipment", "Refrigerators", "Washing Machines", "Hosiery", "Shoes", "Textiles"],
            exports: ["Insulated Wire", "Sunflower Seeds", "Wine", "Wheat", "Corn", "Seats", "Walnuts"],
            imports: ["Refined Petroleum", "Natural Gas", "Pharmaceuticals", "Vehicles", "Machinery"]
        },

        geography: {
            climate: "Moderate Continental; Warm Summers, Mild Winters",
            avgTemperature: "10.0°C",
            annualRainfall: "500 mm",
            highestPoint: "Bălănești Hill (430 m)",
            lowestPoint: "Dniester River (2 m)",
            coastline: "0 km (Landlocked)",
            forestCover: "12.8%",
            arableLand: "55.1%",
            terrain: "Rolling steppe; gradual slope south to Black Sea",
            naturalResources: ["Lignite", "Phosphorites", "Gypsum", "Limestone", "Arable Land"]
        },

        geography_links: {
            rivers: ["Dniester River", "Prut River", "Răut River", "Bâc River"],
            mountains: [],
            deserts: [],
            forests: ["Codri Forest", "Mixed Forests"],
            oceans: []
        },

        culture: {
            officialLanguages: ["Romanian (Moldovan)"],
            languages: ["Romanian", "Russian", "Gagauz", "Ukrainian"],
            religions: ["Eastern Orthodox (90.1%)", "Others (9.9%)"],
            heritageSites: ["Struve Geodetic Arc"],
            festivals: ["National Wine Day", "Independence Day", "Martisor (Spring Festival)", "National Language Day"],
            cuisine: ["Mămăligă", "Sarmale", "Plăcinte", "Zeamă", "Mici", "Cozonac"],
            arts: ["Folk Dance (Hora)", "Carpet Weaving", "Pottery", "Traditional Music"],
            sports: ["Football", "Wrestling", "Weightlifting", "Judo", "Boxing"]
        },

        symbols: {
            bird: "White Stork",
            animal: "Auroch (Historical)",
            flower: "None Official",
            tree: "None Official",
            anthem: "Limba noastră",
            motto: "None Official"
        },

        demographics: {
            lifeExpectancy: 72.18,
            literacyRate: "99.4%",
            urbanPopulation: "42.8%",
            medianAge: 38.2
        },

        history: {
            timeline: [
                { year: "1359", title: "Moldavian Principality", description: "Principality of Moldavia established" },
                { year: "1812", title: "Russian Annexation", description: "Bessarabia annexed by Russian Empire" },
                { year: "1918", title: "Union with Romania", description: "United with Romania" },
                { year: "1940", title: "Soviet Annexation", description: "Became Moldavian SSR" },
                { year: "1991", title: "Independence", description: "Independence from Soviet Union" },
                { year: "2024", title: "EU Candidacy", description: "EU membership negotiations began" }
            ],
            notableFigures: ["Stephen the Great", "Dimitrie Cantemir", "Mihai Eminescu"]
        },

        disputes: [
            { name: "Transnistria", description: "Breakaway region with Russian support", type: "Territory" }
        ],

        quickFacts: [
            { icon: "wine-glass", title: "Wine Country", text: "World's highest wine consumption per capita" },
            { icon: "users", title: "Population Decline", text: "Significant emigration and population decline" },
            { icon: "building", title: "Mileștii Mici", text: "World's largest wine cellar (200km tunnels)" },
            { icon: "euro", title: "Poorest in Europe", text: "One of Europe's poorest countries" },
            { icon: "flag", title: "EU Aspirant", text: "EU candidate country since 2024" }
        ]
    },

    // 9. UKRAINE
    {
        id: "UKR",
        name: "Ukraine",
        officialName: "Ukraine",
        flag: "https://flagcdn.com/w320/ua.png",
        
        images: {
            hero: "https://images.unsplash.com/photo-1561542320-9a18cd340469?w=1920&q=80",
            landscape: "https://images.unsplash.com/photo-1555400568-7cdb3f6f42c5?w=1920&q=80",
            city: "https://images.unsplash.com/photo-1561542320-9a18cd340469?w=1920&q=80"
        },

        basic: {
            capital: "Kyiv",
            continent: "Europe",
            region: "Eastern Europe",
            subregion: "Eastern Europe",
            population: 36744634,
            area: 603550,
            populationDensity: 69,
            independence: "1991",
            callingCode: "+380",
            tld: ".ua",
            drivingSide: "Right",
            electricity: "230V, 50Hz"
        },

        location: {
            coordinates: [48.3794, 31.1656],
            timezone: "UTC+2 (EET) / UTC+3 (EEST)",
            neighbors: ["Russia", "Belarus", "Poland", "Slovakia", "Hungary", "Romania", "Moldova"],
            borders: 5618,
            hemispheres: ["Northern", "Eastern"]
        },

        political: {
            government: "Unitary Semi-Presidential Republic",
            headOfState: "President Volodymyr Zelenskyy",
            headOfGovernment: "Prime Minister Denys Shmyhal",
            legislature: "Verkhovna Rada",
            legalSystem: "Civil Law",
            states: 27,
            oblasts: 24,
            autonomousRepublic: 1,
            cities: 2,
            largestCity: "Kyiv",
            organizations: ["UN", "OSCE", "GUAM", "EU (Candidate)", "Council of Europe"]
        },

        economy: {
            gdp: "$178.76 Billion",
            gdpPPP: "$561.86 Billion",
            gdpPerCapita: "$4,862",
            gdpRank: "#52",
            gdpGrowth: "5.3%",
            currency: "Ukrainian Hryvnia",
            currencyCode: "UAH",
            currencySymbol: "₴",
            inflation: "12.8%",
            unemployment: "19.1%",
            majorSectors: ["Services (60%)", "Industry (26%)", "Agriculture (10%)"],
            industries: ["Coal", "Electric Power", "Ferrous & Nonferrous Metals", "Machinery", "Transport Equipment", "Chemicals", "Food Processing"],
            exports: ["Corn", "Sunflower Oil", "Iron Ore", "Wheat", "Semi-finished Iron", "Rapeseed"],
            imports: ["Refined Petroleum", "Packaged Medicines", "Cars", "Broadcasting Equipment", "Natural Gas"]
        },

        geography: {
            climate: "Temperate Continental; Mediterranean on Crimean Coast",
            avgTemperature: "8.5°C",
            annualRainfall: "565 mm",
            highestPoint: "Hoverla (2,061 m)",
            lowestPoint: "Kuyalnik Estuary (-5 m)",
            coastline: "2,782 km",
            forestCover: "16.7%",
            arableLand: "56.1%",
            terrain: "Fertile plains (steppes) and plateaus; mountains in west (Carpathians) and Crimean Peninsula",
            naturalResources: ["Iron Ore", "Coal", "Manganese", "Natural Gas", "Oil", "Salt", "Sulfur", "Graphite", "Titanium", "Magnesium", "Kaolin", "Nickel", "Mercury", "Timber", "Arable Land"]
        },

        geography_links: {
            rivers: ["Dnieper River", "Dniester River", "Southern Bug", "Donets River", "Danube"],
            mountains: ["Carpathian Mountains", "Crimean Mountains", "Hoverla"],
            deserts: [],
            forests: ["Carpathian Forests", "Mixed Forests", "Polissya Wetlands"],
            oceans: ["Black Sea", "Sea of Azov"]
        },

        culture: {
            officialLanguages: ["Ukrainian"],
            languages: ["Ukrainian", "Russian", "Romanian", "Hungarian", "Polish"],
            religions: ["Orthodox Christianity (67%)", "Greek Catholicism (9.4%)", "Protestantism (2.2%)", "Others (5.4%)"],
            heritageSites: ["Saint-Sophia Cathedral and Kyiv-Pechersk Lavra", "Historic Centre of Lviv", "Residence of Bukovinian and Dalmatian Metropolitans", "Ancient City of Tauric Chersonese", "Wooden Tserkvas of the Carpathian Region"],
            festivals: ["Independence Day", "Ukrainian Unity Day", "Vyshyvanka Day", "Constitution Day", "Orthodox Christmas & Easter"],
            cuisine: ["Borscht", "Varenyky", "Holubtsi", "Salo", "Chicken Kyiv", "Pampushky", "Deruny"],
            arts: ["Pysanky (Easter Eggs)", "Embroidery (Vyshyvanka)", "Bandura Music", "Folk Dance", "Petrykivka Painting"],
            sports: ["Football", "Boxing", "Athletics", "Wrestling", "Chess", "Gymnastics"]
        },

        symbols: {
            bird: "White Stork",
            animal: "Nightingale",
            flower: "Sunflower",
            tree: "Viburnum (Kalyna)",
            anthem: "Shche ne vmerla Ukrainy",
            motto: "Glory and Freedom to Ukraine"
        },

        demographics: {
            lifeExpectancy: 73.5,
            literacyRate: "99.8%",
            urbanPopulation: "69.6%",
            medianAge: 41.2
        },

        history: {
            timeline: [
                { year: "882", title: "Kyivan Rus'", description: "Medieval state of Kyivan Rus' established" },
                { year: "1648", title: "Cossack Hetmanate", description: "Bohdan Khmelnytsky established Cossack state" },
                { year: "1764-1917", title: "Russian Empire", description: "Most of Ukraine under Russian rule" },
                { year: "1918", title: "Independence", description: "Ukrainian People's Republic declared" },
                { year: "1922", title: "Soviet Ukraine", description: "Became part of Soviet Union" },
                { year: "1991", title: "Independence", description: "Independence from Soviet Union" },
                { year: "2014", title: "Revolution & Crimea", description: "Euromaidan Revolution; Russia annexed Crimea" },
                { year: "2022", title: "Russian Invasion", description: "Full-scale Russian invasion began" }
            ],
            notableFigures: ["Volodymyr the Great", "Bohdan Khmelnytsky", "Taras Shevchenko", "Lesya Ukrainka", "Volodymyr Zelenskyy"]
        },

        disputes: [
            { name: "Crimea", description: "Peninsula annexed by Russia in 2014", type: "Territory" },
            { name: "Donbas", description: "Eastern regions under Russian occupation", type: "Territory" },
            { name: "Russian Invasion", description: "Ongoing war with Russia since 2022", type: "Territory" }
        ],

        quickFacts: [
            { icon: "wheat", title: "Breadbasket", text: "One of world's largest grain exporters" },
            { icon: "radiation", title: "Chernobyl", text: "Site of 1986 nuclear disaster" },
            { icon: "flag", title: "Largest in Europe", text: "Largest country entirely in Europe" },
            { icon: "fist-raised", title: "Resistance", text: "Fighting Russian invasion since 2022" },
            { icon: "monument", title: "UNESCO Sites", text: "7 UNESCO World Heritage Sites" }
        ]
    },

    // 10. BULGARIA
    {
        id: "BGR",
        name: "Bulgaria",
        officialName: "Republic of Bulgaria",
        flag: "https://flagcdn.com/w320/bg.png",
        
        images: {
            hero: "https://images.unsplash.com/photo-1558369178-6556d97855d0?w=1920&q=80",
            landscape: "https://images.unsplash.com/photo-1591978347851-dc0debc99e97?w=1920&q=80",
            city: "https://images.unsplash.com/photo-1560710577-ee2ef17f5ab5?w=1920&q=80"
        },

        basic: {
            capital: "Sofia",
            continent: "Europe",
            region: "Southeastern Europe",
            subregion: "Balkans",
            population: 6447710,
            area: 110879,
            populationDensity: 63,
            independence: "1908",
            callingCode: "+359",
            tld: ".bg",
            drivingSide: "Right",
            electricity: "230V, 50Hz"
        },

        location: {
            coordinates: [42.7339, 25.4858],
            timezone: "UTC+2 (EET) / UTC+3 (EEST)",
            neighbors: ["Romania", "Serbia", "North Macedonia", "Greece", "Turkey"],
            borders: 1806,
            hemispheres: ["Northern", "Eastern"]
        },

        political: {
            government: "Unitary Parliamentary Republic",
            headOfState: "President Rumen Radev",
            headOfGovernment: "Prime Minister Dimitar Glavchev",
            legislature: "National Assembly",
            legalSystem: "Civil Law",
            states: 28,
            provinces: 28,
            largestCity: "Sofia",
            organizations: ["UN", "EU", "NATO", "OSCE", "Council of Europe", "WTO"]
        },

        economy: {
            gdp: "$103.09 Billion",
            gdpPPP: "$222.99 Billion",
            gdpPerCapita: "$15,989",
            gdpRank: "#66",
            gdpGrowth: "1.8%",
            currency: "Bulgarian Lev",
            currencyCode: "BGN",
            currencySymbol: "лв",
            inflation: "8.6%",
            unemployment: "4.3%",
            majorSectors: ["Services (67%)", "Industry (28%)", "Agriculture (3%)"],
            industries: ["Electricity", "Gas", "Water", "Food", "Beverages", "Tobacco", "Machinery", "Base Metals", "Chemical Products", "Refined Petroleum", "Nuclear Fuel", "Textiles"],
            exports: ["Refined Petroleum", "Packaged Medicaments", "Copper", "Wheat", "Electricity"],
            imports: ["Crude Petroleum", "Copper Ore", "Packaged Medicaments", "Cars", "Natural Gas"]
        },

        geography: {
            climate: "Temperate Continental; Humid in Black Sea Coast",
            avgTemperature: "11.4°C",
            annualRainfall: "670 mm",
            highestPoint: "Musala (2,925 m)",
            lowestPoint: "Black Sea (0 m)",
            coastline: "354 km",
            forestCover: "35.2%",
            arableLand: "29.3%",
            terrain: "Mostly mountains with lowlands in north and southeast",
            naturalResources: ["Bauxite", "Copper", "Lead", "Zinc", "Coal", "Timber", "Arable Land"]
        },

        geography_links: {
            rivers: ["Danube River", "Maritsa River", "Iskar River", "Struma River"],
            mountains: ["Balkan Mountains", "Rhodope Mountains", "Rila Mountains", "Pirin Mountains", "Musala"],
            deserts: [],
            forests: ["Balkan Forests", "Rhodope Forests"],
            oceans: ["Black Sea"]
        },

        culture: {
            officialLanguages: ["Bulgarian"],
            languages: ["Bulgarian", "Turkish", "Romani"],
            religions: ["Eastern Orthodox (59.4%)", "Islam (7.8%)", "Other Christians (0.9%)", "Non-religious (31.9%)"],
            heritageSites: ["Boyana Church", "Madara Rider", "Thracian Tomb of Kazanlak", "Rock-Hewn Churches of Ivanovo", "Rila Monastery", "Ancient City of Nessebar", "Pirin National Park", "Thracian Tomb of Sveshtari", "Old and New Towns of Plovdiv"],
            festivals: ["Rose Festival", "Martenitsa", "Baba Marta", "Liberation Day", "Kukeri Festival"],
            cuisine: ["Shopska Salata", "Banitsa", "Kavarma", "Tarator", "Kebapche", "Sarmi", "Lukanka"],
            arts: ["Orthodox Iconography", "Choral Music", "Folk Dance (Horo)", "Traditional Embroidery"],
            sports: ["Football", "Volleyball", "Wrestling", "Weightlifting", "Skiing"]
        },

        symbols: {
            bird: "None Official",
            animal: "Lion",
            flower: "Rose",
            tree: "None Official",
            anthem: "Mila Rodino",
            motto: "Unity Makes Strength"
        },

        demographics: {
            lifeExpectancy: 75.14,
            literacyRate: "98.4%",
            urbanPopulation: "76%",
            medianAge: 45.1
        },

        history: {
            timeline: [
                { year: "681", title: "First Bulgarian Empire", description: "Bulgarian state established" },
                { year: "1018-1185", title: "Byzantine Rule", description: "Under Byzantine Empire" },
                { year: "1396", title: "Ottoman Rule", description: "Conquered by Ottoman Empire" },
                { year: "1878", title: "Liberation", description: "Liberated from Ottoman rule" },
                { year: "1908", title: "Independence", description: "Full independence declared" },
                { year: "1946-1990", title: "Communist Era", description: "People's Republic of Bulgaria" },
                { year: "2007", title: "EU Membership", description: "Joined European Union" }
            ],
            notableFigures: ["Khan Asparuh", "Simeon I", "Vasil Levski", "Hristo Botev", "Boris III"]
        },

        disputes: [],

        quickFacts: [
            { icon: "rose", title: "Rose Valley", text: "World's largest rose oil producer (85%)" },
            { icon: "yogurt", title: "Bulgarian Yogurt", text: "Unique Lactobacillus bulgaricus culture" },
            { icon: "scroll", title: "Cyrillic", text: "Birthplace of Cyrillic alphabet" },
            { icon: "gold", title: "Oldest Gold", text: "Oldest worked gold treasure in world (4600 BCE)" },
            { icon: "globe", title: "EU Member", text: "EU member since 2007" }
        ]
    },

    // 11. CZECH REPUBLIC
    {
        id: "CZE",
        name: "Czech Republic",
        officialName: "Czech Republic (Czechia)",
        flag: "https://flagcdn.com/w320/cz.png",
        
        images: {
            hero: "https://images.unsplash.com/photo-1541849546-216549ae216d?w=1920&q=80",
            landscape: "https://images.unsplash.com/photo-1562624475-96c2bc08fab9?w=1920&q=80",
            city: "https://images.unsplash.com/photo-1519677100203-a0e668c92439?w=1920&q=80"
        },

        basic: {
            capital: "Prague",
            continent: "Europe",
            region: "Central Europe",
            subregion: "Central Europe",
            population: 10827529,
            area: 78866,
            populationDensity: 137,
            independence: "1993",
            callingCode: "+420",
            tld: ".cz",
            drivingSide: "Right",
            electricity: "230V, 50Hz"
        },

        location: {
            coordinates: [49.8175, 15.4730],
            timezone: "UTC+1 (CET) / UTC+2 (CEST)",
            neighbors: ["Germany", "Austria", "Slovakia", "Poland"],
            borders: 2143,
            hemispheres: ["Northern", "Eastern"]
        },

        political: {
            government: "Unitary Parliamentary Republic",
            headOfState: "President Petr Pavel",
            headOfGovernment: "Prime Minister Petr Fiala",
            legislature: "Parliament (Senate & Chamber of Deputies)",
            legalSystem: "Civil Law",
            states: 14,
            regions: 13,
            capital: 1,
            largestCity: "Prague",
            organizations: ["UN", "EU", "NATO", "OECD", "Schengen", "Council of Europe", "V4"]
        },

        economy: {
            gdp: "$335.24 Billion",
            gdpPPP: "$530.26 Billion",
            gdpPerCapita: "$30,961",
            gdpRank: "#43",
            gdpGrowth: "-0.3%",
            currency: "Czech Koruna",
            currencyCode: "CZK",
            currencySymbol: "Kč",
            inflation: "10.7%",
            unemployment: "2.6%",
            majorSectors: ["Services (60%)", "Industry (37%)", "Agriculture (2%)"],
            industries: ["Motor Vehicles", "Metallurgy", "Machinery", "Glass", "Armaments", "Chemicals", "Electronics", "Transportation Equipment", "Textiles", "Beer"],
            exports: ["Cars", "Vehicle Parts", "Computers", "Broadcasting Equipment", "Office Machine Parts"],
            imports: ["Broadcasting Equipment", "Computers", "Vehicle Parts", "Office Machine Parts", "Crude Petroleum"]
        },

        geography: {
            climate: "Temperate Continental; Cold Winters, Warm Summers",
            avgTemperature: "8.4°C",
            annualRainfall: "677 mm",
            highestPoint: "Sněžka (1,603 m)",
            lowestPoint: "Elbe River (115 m)",
            coastline: "0 km (Landlocked)",
            forestCover: "34.5%",
            arableLand: "40.1%",
            terrain: "Bohemia in west consists of rolling plains, hills, and plateaus surrounded by low mountains; Moravia in east is hilly",
            naturalResources: ["Coal", "Kaolin", "Clay", "Graphite", "Timber", "Arable Land"]
        },

        geography_links: {
            rivers: ["Vltava River", "Elbe (Labe) River", "Oder River", "Morava River"],
            mountains: ["Sudeten Mountains", "Bohemian Forest", "Giant Mountains (Krkonoše)", "Moravian-Silesian Beskids"],
            deserts: [],
            forests: ["Bohemian Forests", "Šumava National Park"],
            oceans: []
        },

        culture: {
            officialLanguages: ["Czech"],
            languages: ["Czech", "Slovak", "German", "Polish"],
            religions: ["Non-religious (78.4%)", "Catholic (7%)", "Other Christians (2.6%)"],
            heritageSites: ["Historic Centre of Prague", "Historic Centre of Český Krumlov", "Historic Centre of Telč", "Pilgrimage Church of St. John of Nepomuk at Zelená Hora", "Kutná Hora", "Lednice-Valtice Cultural Landscape", "Gardens and Castle at Kroměříž", "Holašovice Historic Village", "Litomyšl Castle", "Holy Trinity Column in Olomouc", "Tugendhat Villa in Brno"],
            festivals: ["Prague Spring (Music Festival)", "Karlovy Vary Film Festival", "Easter", "Christmas Markets", "Liberation Day"],
            cuisine: ["Svíčková", "Trdelník", "Smažený Sýr", "Knedlíky (Dumplings)", "Vepřo Knedlo Zelo", "Guláš", "Koláče"],
            arts: ["Glass Making", "Puppet Theater", "Classical Music", "Literature", "Art Nouveau Architecture"],
            sports: ["Ice Hockey", "Football", "Tennis", "Cycling", "Skiing"]
        },

        symbols: {
            bird: "None Official",
            animal: "Czech Lion",
            flower: "Small-leaved Linden",
            tree: "Small-leaved Linden",
            anthem: "Kde domov můj",
            motto: "Truth Prevails"
        },

        demographics: {
            lifeExpectancy: 79.3,
            literacyRate: "99%",
            urbanPopulation: "74.1%",
            medianAge: 43.6
        },

        history: {
            timeline: [
                { year: "870", title: "Přemyslid Dynasty", description: "Bohemian state established" },
                { year: "1348", title: "Charles University", description: "First university in Central Europe founded" },
                { year: "1526", title: "Habsburg Rule", description: "Came under Habsburg control" },
                { year: "1918", title: "Czechoslovakia", description: "Independent Czechoslovakia established" },
                { year: "1938", title: "Munich Agreement", description: "Sudetenland annexed by Nazi Germany" },
                { year: "1989", title: "Velvet Revolution", description: "Communist regime overthrown peacefully" },
                { year: "1993", title: "Czech Republic", description: "Peaceful dissolution of Czechoslovakia" },
                { year: "2004", title: "EU & NATO", description: "Joined EU and NATO" }
            ],
            notableFigures: ["Charles IV", "Jan Hus", "Tomáš Garrigue Masaryk", "Václav Havel", "Franz Kafka", "Antonín Dvořák"]
        },

        disputes: [],

        quickFacts: [
            { icon: "beer", title: "Beer Capital", text: "Highest beer consumption per capita globally" },
            { icon: "church", title: "Least Religious", text: "Most atheist country in Europe (78%+)" },
            { icon: "castle", title: "Castles", text: "Most castles per capita in the world (2,000+)" },
            { icon: "robot", title: "Robot Origin", text: "Word 'robot' coined here (Karel Čapek)" },
            { icon: "music", title: "Music Heritage", text: "Birthplace of Dvořák, Smetana, and Janáček" }
        ]
    },

    // 12. HUNGARY
    {
        id: "HUN",
        name: "Hungary",
        officialName: "Hungary",
        flag: "https://flagcdn.com/w320/hu.png",
        
        images: {
            hero: "https://images.unsplash.com/photo-1549923746-c502d488b3ea?w=1920&q=80",
            landscape: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80",
            city: "https://images.unsplash.com/photo-1551867633-194f125bddfa?w=1920&q=80"
        },

        basic: {
            capital: "Budapest",
            continent: "Europe",
            region: "Central Europe",
            subregion: "Central Europe",
            population: 9597085,
            area: 93028,
            populationDensity: 105,
            independence: "1918",
            callingCode: "+36",
            tld: ".hu",
            drivingSide: "Right",
            electricity: "230V, 50Hz"
        },

        location: {
            coordinates: [47.1625, 19.5033],
            timezone: "UTC+1 (CET) / UTC+2 (CEST)",
            neighbors: ["Austria", "Slovakia", "Ukraine", "Romania", "Serbia", "Croatia", "Slovenia"],
            borders: 2106,
            hemispheres: ["Northern", "Eastern"]
        },

        political: {
            government: "Unitary Parliamentary Republic",
            headOfState: "President Tamás Sulyok",
            headOfGovernment: "Prime Minister Viktor Orbán",
            legislature: "National Assembly",
            legalSystem: "Civil Law (German influence)",
            states: 20,
            counties: 19,
            capitalCity: 1,
            largestCity: "Budapest",
            organizations: ["UN", "EU", "NATO", "OECD", "Schengen", "Council of Europe", "V4"]
        },

        economy: {
            gdp: "$212.38 Billion",
            gdpPPP: "$421.89 Billion",
            gdpPerCapita: "$22,130",
            gdpRank: "#51",
            gdpGrowth: "-0.9%",
            currency: "Hungarian Forint",
            currencyCode: "HUF",
            currencySymbol: "Ft",
            inflation: "17.6%",
            unemployment: "4.1%",
            majorSectors: ["Services (65%)", "Industry (31%)", "Agriculture (3%)"],
            industries: ["Mining", "Metallurgy", "Construction Materials", "Food Processing", "Textiles", "Chemicals", "Pharmaceuticals", "Motor Vehicles", "Electronics"],
            exports: ["Cars", "Vehicle Parts", "Electric Batteries", "Packaged Medicaments", "Video Displays"],
            imports: ["Vehicle Parts", "Integrated Circuits", "Cars", "Petroleum Gas", "Broadcasting Equipment"]
        },

        geography: {
            climate: "Temperate Continental; Cold Winters, Warm Summers",
            avgTemperature: "10.5°C",
            annualRainfall: "600 mm",
            highestPoint: "Kékes (1,014 m)",
            lowestPoint: "Tisza River (78 m)",
            coastline: "0 km (Landlocked)",
            forestCover: "22.7%",
            arableLand: "48.5%",
            terrain: "Mostly flat to rolling plains of Hungarian Great Plain; hills in north; low mountains in northern border regions",
            naturalResources: ["Bauxite", "Coal", "Natural Gas", "Fertile Soils", "Arable Land"]
        },

        geography_links: {
            rivers: ["Danube River", "Tisza River", "Dráva River"],
            mountains: ["Mátra Mountains", "Bükk Mountains", "Kékes"],
            deserts: [],
            forests: ["Transdanubian Hills", "Northern Hungarian Mountains"],
            oceans: []
        },

        culture: {
            officialLanguages: ["Hungarian"],
            languages: ["Hungarian", "German", "Romanian", "Slovak"],
            religions: ["Catholic (30.1%)", "Reformed/Calvinist (9.8%)", "Lutheran (1.8%)", "Non-religious (27.2%)"],
            heritageSites: ["Budapest (Banks of Danube, Buda Castle, Andrássy Avenue)", "Old Village of Hollókő", "Caves of Aggtelek", "Millenary Benedictine Abbey of Pannonhalma", "Hortobágy National Park", "Pécs (Early Christian Necropolis)", "Fertő/Neusiedlersee Cultural Landscape", "Tokaj Wine Region"],
            festivals: ["Sziget Festival", "Budapest Spring Festival", "Hungarian National Day", "Busójárás", "Wine Festivals"],
            cuisine: ["Goulash", "Chicken Paprikash", "Lángos", "Dobos Torte", "Kürtőskalács", "Töltött Káposzta", "Fisherman's Soup"],
            arts: ["Hungarian Folk Music", "Embroidery", "Pottery", "Literature", "Classical Music (Liszt, Bartók)"],
            sports: ["Football", "Water Polo", "Swimming", "Fencing", "Kayaking/Canoeing"]
        },

        symbols: {
            bird: "Turul",
            animal: "Turul (Mythical Bird)",
            flower: "Tulip",
            tree: "None Official",
            anthem: "Himnusz",
            motto: "None Official"
        },

        demographics: {
            lifeExpectancy: 76.7,
            literacyRate: "99.1%",
            urbanPopulation: "72.1%",
            medianAge: 43.6
        },

        history: {
            timeline: [
                { year: "896", title: "Hungarian Conquest", description: "Magyars settled in Carpathian Basin" },
                { year: "1000", title: "Kingdom Founded", description: "Stephen I crowned first King of Hungary" },
                { year: "1526", title: "Ottoman Conquest", description: "Much of Hungary under Ottoman rule" },
                { year: "1867", title: "Austria-Hungary", description: "Austro-Hungarian Empire established" },
                { year: "1918", title: "Republic", description: "Hungarian Republic declared" },
                { year: "1956", title: "Revolution", description: "Hungarian Revolution against Soviet rule" },
                { year: "1989", title: "Democracy", description: "Transition to democracy" },
                { year: "2004", title: "EU Membership", description: "Joined European Union" }
            ],
            notableFigures: ["King Stephen I", "Lajos Kossuth", "Ferenc Liszt", "Béla Bartók", "Ignaz Semmelweis", "John von Neumann"]
        },

        disputes: [],

        quickFacts: [
            { icon: "hot-tub", title: "Thermal Baths", text: "World's largest thermal lake (Hévíz) and 1,500+ thermal springs" },
            { icon: "water-polo", title: "Water Polo", text: "Most successful water polo nation in Olympics" },
            { icon: "wine-glass", title: "Tokaji Wine", text: "Tokaji called 'Wine of Kings' (Louis XIV)" },
            { icon: "lightbulb", title: "Inventions", text: "Rubik's Cube, ballpoint pen, matches invented here" },
            { icon: "language", title: "Unique Language", text: "Hungarian unrelated to neighboring languages" }
        ]
    },

    // 13. POLAND
    {
        id: "POL",
        name: "Poland",
        officialName: "Republic of Poland",
        flag: "https://flagcdn.com/w320/pl.png",
        
        images: {
            hero: "https://images.unsplash.com/photo-1519197924294-4ba991a11128?w=1920&q=80",
            landscape: "https://images.unsplash.com/photo-1562624475-96c2bc08fab9?w=1920&q=80",
            city: "https://images.unsplash.com/photo-1565371767810-ef913a6c2a0a?w=1920&q=80"
        },

        basic: {
            capital: "Warsaw",
            continent: "Europe",
            region: "Central Europe",
            subregion: "Central Europe",
            population: 36753736,
            area: 312696,
            populationDensity: 123,
            independence: "1918",
            callingCode: "+48",
            tld: ".pl",
            drivingSide: "Right",
            electricity: "230V, 50Hz"
        },

        location: {
            coordinates: [51.9194, 19.1451],
            timezone: "UTC+1 (CET) / UTC+2 (CEST)",
            neighbors: ["Germany", "Czech Republic", "Slovakia", "Ukraine", "Belarus", "Lithuania", "Russia (Kaliningrad)"],
            borders: 3071,
            hemispheres: ["Northern", "Eastern"]
        },

        political: {
            government: "Unitary Parliamentary Republic",
            headOfState: "President Andrzej Duda",
            headOfGovernment: "Prime Minister Donald Tusk",
            legislature: "Parliament (Senate & Sejm)",
            legalSystem: "Civil Law",
            states: 16,
            voivodeships: 16,
            largestCity: "Warsaw",
            organizations: ["UN", "EU", "NATO", "OECD", "Schengen", "Council of Europe", "V4", "WTO"]
        },

        economy: {
            gdp: "$842.17 Billion",
            gdpPPP: "$1.71 Trillion",
            gdpPerCapita: "$22,933",
            gdpRank: "#21",
            gdpGrowth: "0.2%",
            currency: "Polish Złoty",
            currencyCode: "PLN",
            currencySymbol: "zł",
            inflation: "11.4%",
            unemployment: "2.9%",
            majorSectors: ["Services (64%)", "Industry (31%)", "Agriculture (2%)"],
            industries: ["Machine Building", "Iron & Steel", "Coal Mining", "Chemicals", "Shipbuilding", "Food Processing", "Glass", "Beverages", "Textiles", "Furniture"],
            exports: ["Vehicle Parts", "Cars", "Seats", "Furniture", "Broadcasting Equipment", "Refined Petroleum"],
            imports: ["Crude Petroleum", "Vehicle Parts", "Cars", "Broadcasting Equipment", "Packaged Medicaments"]
        },

        geography: {
            climate: "Temperate Continental; Cold Winters, Warm Summers",
            avgTemperature: "8.5°C",
            annualRainfall: "600 mm",
            highestPoint: "Rysy (2,499 m)",
            lowestPoint: "Raczki Elbląskie (-1.8 m)",
            coastline: "440 km",
            forestCover: "30.9%",
            arableLand: "36.2%",
            terrain: "Flat plains in center; mountains along southern border; coastline on Baltic Sea",
            naturalResources: ["Coal", "Sulfur", "Copper", "Natural Gas", "Silver", "Lead", "Salt", "Amber", "Arable Land"]
        },

        geography_links: {
            rivers: ["Vistula River", "Oder River", "Warta River", "Bug River"],
            mountains: ["Tatra Mountains", "Sudetes", "Carpathian Mountains", "Rysy"],
            deserts: [],
            forests: ["Białowieża Forest", "Tuchola Forest", "Augustów Primeval Forest"],
            oceans: ["Baltic Sea"]
        },

        culture: {
            officialLanguages: ["Polish"],
            languages: ["Polish", "German", "Ukrainian", "Belarusian", "Kashubian"],
            religions: ["Catholic (87.6%)", "Orthodox (1.3%)", "Protestant (0.4%)", "Non-religious (10.7%)"],
            heritageSites: ["Historic Centre of Kraków", "Historic Centre of Warsaw", "Auschwitz-Birkenau", "Belovezhskaya Pushcha / Białowieża Forest", "Historic Centre of Toruń", "Malbork Castle", "Wieliczka and Bochnia Royal Salt Mines", "Wooden Churches of Southern Małopolska", "Muskauer Park", "Centennial Hall in Wrocław"],
            festivals: ["Independence Day", "Constitution Day", "All Saints' Day", "Wigilia (Christmas Eve)", "Wianki (Midsummer)"],
            cuisine: ["Pierogi", "Bigos", "Żurek", "Kotlet Schabowy", "Barszcz", "Kielbasa", "Pączki", "Oscypek"],
            arts: ["Chopin Music", "Literature (Nobel Laureates)", "Folk Art", "Amber Craft", "Paper Cutting (Wycinanki)"],
            sports: ["Football", "Volleyball", "Ski Jumping", "Speedway", "Handball"]
        },

        symbols: {
            bird: "White-tailed Eagle",
            animal: "European Bison",
            flower: "Red Poppy / Corn Poppy",
            tree: "Oak",
            anthem: "Mazurek Dąbrowskiego",
            motto: "None Official"
        },

        demographics: {
            lifeExpectancy: 78.73,
            literacyRate: "99.8%",
            urbanPopulation: "60%",
            medianAge: 42.2
        },

        history: {
            timeline: [
                { year: "966", title: "Baptism of Poland", description: "Mieszko I adopted Christianity" },
                { year: "1025", title: "Kingdom of Poland", description: "Bolesław I crowned first king" },
                { year: "1569", title: "Polish-Lithuanian Commonwealth", description: "Union of Lublin" },
                { year: "1795", title: "Partitions", description: "Poland partitioned between Russia, Prussia, Austria" },
                { year: "1918", title: "Independence", description: "Poland regained independence" },
                { year: "1939", title: "WWII Invasion", description: "Nazi Germany invaded Poland" },
                { year: "1989", title: "Solidarity", description: "End of communist rule" },
                { year: "2004", title: "EU & NATO", description: "Joined EU; NATO member since 1999" }
            ],
            notableFigures: ["Fryderyk Chopin", "Marie Curie", "Pope John Paul II", "Lech Wałęsa", "Copernicus", "Adam Mickiewicz"]
        },

        disputes: [],

        quickFacts: [
            { icon: "tree", title: "Białowieża Forest", text: "Last primeval forest in Europe; European bison habitat" },
            { icon: "music", title: "Chopin", text: "Birthplace of Fryderyk Chopin" },
            { icon: "cross", title: "Catholic Country", text: "One of most Catholic countries in Europe (87%)" },
            { icon: "volleyball", title: "Volleyball Champions", text: "Multiple volleyball world champions" },
            { icon: "factory", title: "Largest EU Economy", text: "6th largest economy in EU" }
        ]
    },

    // 14. ROMANIA
    {
        id: "ROU",
        name: "Romania",
        officialName: "Romania",
        flag: "https://flagcdn.com/w320/ro.png",
        
        images: {
            hero: "https://images.unsplash.com/photo-1555990538-1e6c89d48a49?w=1920&q=80",
            landscape: "https://images.unsplash.com/photo-1577976867170-934e6d55e1fc?w=1920&q=80",
            city: "https://images.unsplash.com/photo-1599917012305-4e10c9b28d0e?w=1920&q=80"
        },

        basic: {
            capital: "Bucharest",
            continent: "Europe",
            region: "Southeastern Europe",
            subregion: "Balkans",
            population: 19051562,
            area: 238391,
            populationDensity: 80,
            independence: "1878",
            callingCode: "+40",
            tld: ".ro",
            drivingSide: "Right",
            electricity: "230V, 50Hz"
        },

        location: {
            coordinates: [45.9432, 24.9668],
            timezone: "UTC+2 (EET) / UTC+3 (EEST)",
            neighbors: ["Ukraine", "Moldova", "Hungary", "Serbia", "Bulgaria"],
            borders: 2844,
            hemispheres: ["Northern", "Eastern"]
        },

        political: {
            government: "Unitary Semi-Presidential Republic",
            headOfState: "President Klaus Iohannis",
            headOfGovernment: "Prime Minister Marcel Ciolacu",
            legislature: "Parliament (Senate & Chamber of Deputies)",
            legalSystem: "Civil Law (French influence)",
            states: 42,
            counties: 41,
            municipality: 1,
            largestCity: "Bucharest",
            organizations: ["UN", "EU", "NATO", "OSCE", "Francophonie", "Council of Europe"]
        },

        economy: {
            gdp: "$348.90 Billion",
            gdpPPP: "$749.46 Billion",
            gdpPerCapita: "$18,352",
            gdpRank: "#44",
            gdpGrowth: "2.1%",
            currency: "Romanian Leu",
            currencyCode: "RON",
            currencySymbol: "lei",
            inflation: "10.4%",
            unemployment: "5.4%",
            majorSectors: ["Services (63%)", "Industry (32%)", "Agriculture (4%)"],
            industries: ["Electric Machinery & Equipment", "Auto Assembly", "Textiles", "Footwear", "Light Machinery", "Metallurgy", "Chemicals", "Food Processing", "Petroleum Refining", "Mining", "Timber"],
            exports: ["Cars", "Insulated Wire", "Vehicle Parts", "Wheat", "Rubber Tires"],
            imports: ["Crude Petroleum", "Cars", "Vehicle Parts", "Packaged Medicaments", "Broadcasting Equipment"]
        },

        geography: {
            climate: "Temperate Continental; Cold Winters, Hot Summers",
            avgTemperature: "10°C",
            annualRainfall: "637 mm",
            highestPoint: "Moldoveanu (2,544 m)",
            lowestPoint: "Black Sea (0 m)",
            coastline: "225 km",
            forestCover: "29.6%",
            arableLand: "39.1%",
            terrain: "Central Transylvanian Basin separated from Moldavian Plain by Carpathian Mountains; fertile Wallachian Plain in south",
            naturalResources: ["Petroleum", "Timber", "Natural Gas", "Coal", "Iron Ore", "Salt", "Arable Land", "Hydropower"]
        },

        geography_links: {
            rivers: ["Danube River", "Olt River", "Mureș River", "Prut River", "Siret River"],
            mountains: ["Carpathian Mountains", "Transylvanian Alps", "Moldoveanu Peak", "Făgăraș Mountains"],
            deserts: [],
            forests: ["Carpathian Forests", "Virgin Forests"],
            oceans: ["Black Sea"]
        },

        culture: {
            officialLanguages: ["Romanian"],
            languages: ["Romanian", "Hungarian", "Romani", "German", "Ukrainian"],
            religions: ["Eastern Orthodox (81.9%)", "Protestantism (6.4%)", "Catholic (4.3%)", "Others (7.4%)"],
            heritageSites: ["Danube Delta", "Churches of Moldavia", "Historic Centre of Sighișoara", "Monastery of Horezu", "Villages with Fortified Churches in Transylvania", "Dacian Fortresses of the Orăștie Mountains", "Wooden Churches of Maramureș", "Ancient and Primeval Beech Forests"],
            festivals: ["National Day (December 1)", "Martisor (Spring Festival)", "Dragobete (Romanian Valentine's)", "Easter", "Christmas"],
            cuisine: ["Sarmale", "Mămăligă", "Mici", "Ciorbă", "Cozonac", "Papanași", "Slanină"],
            arts: ["Wood Carving", "Traditional Embroidery", "Folk Music", "Hora Dance", "Pottery"],
            sports: ["Football", "Gymnastics", "Tennis", "Handball", "Rugby"]
        },

        symbols: {
            bird: "None Official",
            animal: "Lynx",
            flower: "Dog Rose",
            tree: "None Official",
            anthem: "Deșteaptă-te, române!",
            motto: "None Official"
        },

        demographics: {
            lifeExpectancy: 76.05,
            literacyRate: "98.9%",
            urbanPopulation: "54.2%",
            medianAge: 43.6
        },

        history: {
            timeline: [
                { year: "106 CE", title: "Roman Dacia", description: "Conquered by Roman Empire" },
                { year: "1600", title: "Brief Unification", description: "Michael the Brave briefly unified regions" },
                { year: "1859", title: "United Principalities", description: "Moldavia and Wallachia united" },
                { year: "1878", title: "Independence", description: "Independence from Ottoman Empire" },
                { year: "1918", title: "Greater Romania", description: "Transylvania united with Romania" },
                { year: "1947-1989", title: "Communist Era", description: "Communist regime under Ceaușescu" },
                { year: "1989", title: "Revolution", description: "Romanian Revolution ended communism" },
                { year: "2007", title: "EU Membership", description: "Joined European Union" }
            ],
            notableFigures: ["Stephen the Great", "Michael the Brave", "Nicolae Ceaușescu", "Nadia Comăneci", "Constantin Brâncuși", "George Enescu"]
        },

        disputes: [],

        quickFacts: [
            { icon: "bat", title: "Dracula", text: "Home to Bran Castle (Dracula's Castle)" },
            { icon: "tree", title: "Virgin Forests", text: "Largest remaining virgin forests in Europe" },
            { icon: "water", title: "Danube Delta", text: "Danube Delta - Europe's largest wetland" },
            { icon: "star", title: "Gymnastics", text: "First perfect 10 in Olympics (Nadia Comăneci, 1976)" },
            { icon: "building", title: "Palace of Parliament", text: "2nd largest administrative building in world" }
        ]
    },

    // 15. SLOVAKIA
    {
        id: "SVK",
        name: "Slovakia",
        officialName: "Slovak Republic",
        flag: "https://flagcdn.com/w320/sk.png",
        
        images: {
            hero: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80",
            landscape: "https://images.unsplash.com/photo-1562348856-9c8a62fc7637?w=1920&q=80",
            city: "https://images.unsplash.com/photo-1555990538-1e6c89d48a49?w=1920&q=80"
        },

        basic: {
            capital: "Bratislava",
            continent: "Europe",
            region: "Central Europe",
            subregion: "Central Europe",
            population: 5425319,
            area: 49035,
            populationDensity: 114,
            independence: "1993",
            callingCode: "+421",
            tld: ".sk",
            drivingSide: "Right",
            electricity: "230V, 50Hz"
        },

        location: {
            coordinates: [48.6690, 19.6990],
            timezone: "UTC+1 (CET) / UTC+2 (CEST)",
            neighbors: ["Poland", "Ukraine", "Hungary", "Austria", "Czech Republic"],
            borders: 1611,
            hemispheres: ["Northern", "Eastern"]
        },

        political: {
            government: "Unitary Parliamentary Republic",
            headOfState: "President Peter Pellegrini",
            headOfGovernment: "Prime Minister Robert Fico",
            legislature: "National Council",
            legalSystem: "Civil Law",
            states: 8,
            regions: 8,
            largestCity: "Bratislava",
            organizations: ["UN", "EU", "NATO", "OECD", "Schengen", "Eurozone", "Council of Europe", "V4"]
        },

        economy: {
            gdp: "$127.53 Billion",
            gdpPPP: "$224.55 Billion",
            gdpPerCapita: "$23,491",
            gdpRank: "#57",
            gdpGrowth: "1.1%",
            currency: "Euro",
            currencyCode: "EUR",
            currencySymbol: "€",
            inflation: "10.5%",
            unemployment: "5.8%",
            majorSectors: ["Services (63%)", "Industry (33%)", "Agriculture (2%)"],
            industries: ["Automobiles", "Metal Products", "Electricity", "Gas", "Oil", "Nuclear Fuel", "Chemicals", "Machinery", "Paper", "Printing", "Earthenware", "Ceramics", "Transport Vehicles", "Textiles"],
            exports: ["Cars", "Vehicle Parts", "Video Displays", "Broadcasting Equipment", "Electrical Transformers"],
            imports: ["Broadcasting Equipment", "Vehicle Parts", "Cars", "Petroleum Gas", "Packaged Medicaments"]
        },

        geography: {
            climate: "Temperate Continental; Cool Summers, Cold Winters",
            avgTemperature: "8.5°C",
            annualRainfall: "650 mm",
            highestPoint: "Gerlachovský štít (2,655 m)",
            lowestPoint: "Bodrog River (94 m)",
            coastline: "0 km (Landlocked)",
            forestCover: "40.3%",
            arableLand: "28.9%",
            terrain: "Carpathian Mountains in north; Danubian lowland in southwest",
            naturalResources: ["Lignite", "Iron Ore", "Copper", "Manganese", "Salt", "Arable Land"]
        },

        geography_links: {
            rivers: ["Danube River", "Váh River", "Hron River", "Hornád River"],
            mountains: ["High Tatras", "Low Tatras", "Slovak Ore Mountains", "Little Carpathians", "Gerlachovský štít"],
            deserts: [],
            forests: ["Carpathian Forests", "Slovak Paradise National Park"],
            oceans: []
        },

        culture: {
            officialLanguages: ["Slovak"],
            languages: ["Slovak", "Hungarian", "Romani", "Czech", "Rusyn"],
            religions: ["Catholic (55.8%)", "Protestantism (5.3%)", "Greek Catholic (4%)", "Non-religious (23.8%)"],
            heritageSites: ["Vlkolínec", "Historic Town of Banská Štiavnica", "Spiš Castle", "Caves of Aggtelek Karst and Slovak Karst", "Bardejov Town Conservation Reserve", "Primeval Beech Forests of the Carpathians", "Wooden Churches of the Slovak Carpathians"],
            festivals: ["Slovak National Uprising Anniversary", "Constitution Day", "Východná Folklore Festival", "Pohoda Music Festival", "Christmas Markets"],
            cuisine: ["Bryndzové Halušky", "Kapustnica", "Lokše", "Parené Buchty", "Trdelník", "Vyprážaný Syr"],
            arts: ["Folk Music", "Traditional Dance (Čardáš)", "Wood Carving", "Ceramics", "Embroidery"],
            sports: ["Ice Hockey", "Football", "Cycling", "Skiing", "Tennis"]
        },

        symbols: {
            bird: "None Official",
            animal: "Lynx / Chamois",
            flower: "Linden (Lime Tree)",
            tree: "Linden",
            anthem: "Nad Tatrou sa blýska",
            motto: "None Official"
        },

        demographics: {
            lifeExpectancy: 77.54,
            literacyRate: "99.6%",
            urbanPopulation: "53.8%",
            medianAge: 41.8
        },

        history: {
            timeline: [
                { year: "833", title: "Great Moravia", description: "Great Moravia established" },
                { year: "1000", title: "Hungarian Rule", description: "Became part of Kingdom of Hungary" },
                { year: "1918", title: "Czechoslovakia", description: "Became part of Czechoslovakia" },
                { year: "1939-1945", title: "Slovak Republic", description: "First Slovak Republic (Nazi puppet state)" },
                { year: "1989", title: "Velvet Revolution", description: "End of communist rule" },
                { year: "1993", title: "Independence", description: "Velvet Divorce; Slovakia independent" },
                { year: "2004", title: "EU & NATO", description: "Joined EU and NATO" },
                { year: "2009", title: "Eurozone", description: "Adopted the Euro" }
            ],
            notableFigures: ["Ľudovít Štúr", "Milan Rastislav Štefánik", "Alexander Dubček", "Andy Warhol (parents from Slovakia)"]
        },

        disputes: [],

        quickFacts: [
            { icon: "car", title: "Car Production", text: "Most cars produced per capita globally" },
            { icon: "castle", title: "Castles", text: "One of highest concentrations of castles in world" },
            { icon: "mountain", title: "High Tatras", text: "Smallest high mountains in the world" },
            { icon: "hockey-puck", title: "Ice Hockey", text: "National passion; world champion (2002)" },
            { icon: "euro", title: "Eurozone", text: "Adopted Euro in 2009" }
        ]
    }
];

// Export for Node.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CountriesData4;
}

// Export for Browser
if (typeof window !== 'undefined') {
    window.CountriesData4 = CountriesData4;
}
