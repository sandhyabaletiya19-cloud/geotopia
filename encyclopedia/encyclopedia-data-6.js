// encyclopedia-data-6.js
// Countries 101-120: Azerbaijan to Barbados

const ENCYCLOPEDIA_DATA_6 = {
    "azerbaijan": {
        name: "Azerbaijan",
        officialName: "Republic of Azerbaijan",
        nativeName: "Azərbaycan Respublikası",
        iso3: "AZE",
        iso2: "AZ",
        flag: "🇦🇿",
        
        capital: {
            name: "Baku",
            population: 2300000,
            coordinates: { lat: 40.4093, lng: 49.8671 }
        },
        largestCity: "Baku",
        population: {
            total: 10140000,
            year: 2024,
            density: 117,
            growth: 0.8
        },
        area: {
            total: 86600,
            land: 82629,
            water: 3971,
            rank: 114
        },
        
        continent: "Asia",
        region: "Caucasus",
        subregion: "South Caucasus",
        coordinates: { lat: 40.1431, lng: 47.5769 },
        borders: ["Russia", "Georgia", "Armenia", "Iran", "Turkey"],
        coastline: 0,
        timezone: ["UTC+4"],
        drivingSide: "right",
        
        governmentType: "Presidential republic",
        leader: {
            headOfState: "President Ilham Aliyev",
            headOfGovernment: "Prime Minister Ali Asadov"
        },
        independence: {
            date: "October 18, 1991",
            from: "Soviet Union"
        },
        nationalDay: { name: "Republic Day", date: "May 28" },
        divisions: {
            type: "districts",
            count: 66,
            major: ["Baku", "Ganja", "Sumgait", "Mingachevir", "Lankaran"]
        },
        
        economy: {
            gdpTotal: 78000000000,
            gdpPerCapita: 7700,
            gdpGrowth: 4.6,
            currency: { name: "Azerbaijani manat", code: "AZN", symbol: "₼" },
            mainIndustries: ["petroleum", "natural gas", "petrochemicals", "textiles", "machinery"],
            exports: ["crude oil", "natural gas", "petroleum products", "cotton", "machinery"],
            imports: ["machinery", "food", "metals", "chemicals"],
            majorPartners: ["Italy", "Turkey", "Israel", "Germany", "Russia"]
        },
        hdi: 0.745,
        
        geography_links: {
            rivers: [
                { name: "Kura River", description: "Longest river, flows through Baku" },
                { name: "Aras River", description: "Forms border with Iran" },
                { name: "Samur River", description: "Northern border river" }
            ],
            mountains: [
                { name: "Greater Caucasus", description: "Northern mountain range" },
                { name: "Lesser Caucasus", description: "Western mountains" },
                { name: "Bazardüzü", description: "Highest peak at 4466m" },
                { name: "Shahdag", description: "Major peak and ski resort" }
            ],
            deserts: [],
            forests: [
                { name: "Hirkan forests", description: "UNESCO-listed relict forests" },
                { name: "Gabala forests", description: "Mountain forests in north" }
            ],
            oceans: [],
            seas: [
                { name: "Caspian Sea", description: "Eastern coastline, world's largest lake" }
            ],
            lakes: [
                { name: "Lake Goygol", description: "Mountain lake formed by earthquake" },
                { name: "Lake Maralgol", description: "Alpine lake in mountains" }
            ]
        },
        
        culture: {
            languages: {
                official: ["Azerbaijani"],
                regional: ["Russian", "Lezgian", "Talysh"],
                spoken: ["Azerbaijani", "Russian", "English"]
            },
            religions: {
                dominant: "Islam",
                breakdown: {
                    "Shia Islam": 65.0,
                    "Sunni Islam": 30.0,
                    "Christianity": 3.0,
                    "Other": 2.0
                }
            },
            heritageSites: [
                { name: "Walled City of Baku", type: "Cultural", year: 2000, description: "Historic fortress with Maiden Tower" },
                { name: "Gobustan Rock Art", type: "Cultural", year: 2007, description: "Prehistoric petroglyphs" },
                { name: "Historic Centre of Sheki", type: "Cultural", year: 2019, description: "Silk Road trading town" }
            ],
            festivals: [
                { name: "Novruz", date: "March 20-21", description: "Persian New Year celebration" },
                { name: "Republic Day", date: "May 28", description: "Independence celebration" },
                { name: "Victory Day", date: "November 8", description: "Nagorno-Karabakh victory" },
                { name: "Pomegranate Festival", date: "October-November", description: "Harvest celebration in Goychay" }
            ],
            cuisine: [
                { name: "Plov", description: "Rice pilaf with meat and dried fruits" },
                { name: "Dolma", description: "Stuffed grape leaves" },
                { name: "Kebab", description: "Various grilled meat dishes" },
                { name: "Piti", description: "Lamb and chickpea stew" },
                { name: "Qutab", description: "Stuffed flatbread" },
                { name: "Pakhlava", description: "Diamond-shaped sweet pastry" }
            ],
            arts: [
                { type: "Music", description: "Mugham classical tradition (UNESCO), ashiq minstrels" },
                { type: "Carpet weaving", description: "UNESCO intangible heritage" },
                { type: "Dance", description: "Traditional folk dances" },
                { type: "Architecture", description: "Medieval Islamic architecture, Flame Towers" }
            ],
            sports: {
                popular: ["Football", "Wrestling", "Chess", "Volleyball", "Judo"],
                achievements: ["Olympic wrestling and judo medals", "European Games 2015 hosts"],
                venues: ["Baku Olympic Stadium", "Heydar Aliyev Arena"]
            }
        },
        
        history: {
            timeline: [
                { year: "9th century BC", event: "Mannae kingdom in region" },
                { year: "4th century BC", event: "Caucasian Albania established" },
                { year: "7th century", event: "Arab conquest, Islam introduced" },
                { year: "11th century", event: "Seljuk Turkic migration" },
                { year: "1501", event: "Safavid Persian rule" },
                { year: "1813", event: "Russian Empire gains northern Azerbaijan" },
                { year: "1918", event: "Azerbaijan Democratic Republic declared" },
                { year: "1920", event: "Soviet occupation" },
                { year: "1991", event: "Independence from Soviet Union" },
                { year: "1992-1994", event: "First Nagorno-Karabakh War" },
                { year: "2020", event: "Second Nagorno-Karabakh War, partial victory" },
                { year: "2023", event: "Full recapture of Nagorno-Karabakh" }
            ],
            colonialHistory: null,
            historicalNames: ["Caucasian Albania", "Azerbaijan SSR"]
        },
        
        demographics: {
            ethnicGroups: {
                "Azerbaijani": 91.6,
                "Lezgian": 2.0,
                "Armenian": 1.4,
                "Russian": 1.3,
                "Talysh": 1.3,
                "Other": 2.4
            },
            ageStructure: {
                "0-14": 22.0,
                "15-64": 70.0,
                "65+": 8.0
            },
            urbanization: 56.4,
            lifeExpectancy: 73.5,
            fertilityRate: 1.9,
            literacyRate: 99.8
        },
        
        quickFacts: {
            internet: { tld: ".az", penetration: 85.0 },
            calling: { code: "+994" },
            electricity: { voltage: "220V", frequency: "50Hz", plugType: "C, F" },
            measurement: "Metric",
            emergencyNumber: "112"
        },
        
        disputes: [
            {
                type: "territorial",
                description: "Nagorno-Karabakh conflict with Armenia",
                parties: ["Azerbaijan", "Armenia"],
                status: "Azerbaijan recaptured region in 2023"
            }
        ],
        
        funFacts: [
            "Azerbaijan was the first Muslim-majority country to grant women the right to vote (1918)",
            "Baku is called the 'City of Winds'",
            "The country has natural eternal flames from gas seeping through rocks",
            "Azerbaijan hosted the first Formula 1 race in a former Soviet country",
            "The Flame Towers are the tallest buildings in the Caucasus"
        ]
    },

    "kazakhstan": {
        name: "Kazakhstan",
        officialName: "Republic of Kazakhstan",
        nativeName: "Қазақстан Республикасы",
        iso3: "KAZ",
        iso2: "KZ",
        flag: "🇰🇿",
        
        capital: {
            name: "Astana",
            population: 1350000,
            coordinates: { lat: 51.1605, lng: 71.4704 }
        },
        largestCity: "Almaty",
        population: {
            total: 19600000,
            year: 2024,
            density: 7,
            growth: 1.2
        },
        area: {
            total: 2724900,
            land: 2699700,
            water: 25200,
            rank: 9
        },
        
        continent: "Asia",
        region: "Central Asia",
        subregion: "Central Asia",
        coordinates: { lat: 48.0196, lng: 66.9237 },
        borders: ["Russia", "China", "Kyrgyzstan", "Uzbekistan", "Turkmenistan"],
        coastline: 0,
        timezone: ["UTC+5", "UTC+6"],
        drivingSide: "right",
        
        governmentType: "Presidential republic",
        leader: {
            headOfState: "President Kassym-Jomart Tokayev",
            headOfGovernment: "Prime Minister Olzhas Bektenov"
        },
        independence: {
            date: "December 16, 1991",
            from: "Soviet Union"
        },
        nationalDay: { name: "Independence Day", date: "December 16" },
        divisions: {
            type: "regions",
            count: 17,
            major: ["Almaty", "Astana", "Karaganda", "Shymkent", "Aktobe"]
        },
        
        economy: {
            gdpTotal: 260000000000,
            gdpPerCapita: 13300,
            gdpGrowth: 5.0,
            currency: { name: "Kazakhstani tenge", code: "KZT", symbol: "₸" },
            mainIndustries: ["oil", "coal", "iron ore", "manganese", "chromite", "uranium", "copper"],
            exports: ["oil", "metals", "chemicals", "machinery", "grain", "wool"],
            imports: ["machinery", "vehicles", "base metals", "food"],
            majorPartners: ["China", "Russia", "Italy", "Netherlands", "France"]
        },
        hdi: 0.811,
        
        geography_links: {
            rivers: [
                { name: "Irtysh River", description: "Major river flowing to Russia" },
                { name: "Syr Darya", description: "River flowing to Aral Sea" },
                { name: "Ural River", description: "River to Caspian Sea" },
                { name: "Ili River", description: "River flowing to Lake Balkhash" }
            ],
            mountains: [
                { name: "Tian Shan", description: "Southeastern mountains" },
                { name: "Altai Mountains", description: "Northeastern range" },
                { name: "Khan Tengri", description: "Peak at 7010m on Kyrgyz border" }
            ],
            deserts: [
                { name: "Kyzylkum Desert", description: "Red sand desert in south" },
                { name: "Betpak-Dala", description: "Stony desert in central region" }
            ],
            forests: [
                { name: "Altai forests", description: "Mountain forests in east" },
                { name: "Tian Shan forests", description: "Conifer forests in southeast" }
            ],
            oceans: [],
            seas: [
                { name: "Caspian Sea", description: "Western coastline" },
                { name: "Aral Sea", description: "Shrinking sea in southwest" }
            ],
            lakes: [
                { name: "Lake Balkhash", description: "Unique half-fresh, half-salt lake" },
                { name: "Lake Alakol", description: "Salt lake in east" },
                { name: "Lake Zaysan", description: "Lake in eastern mountains" }
            ]
        },
        
        culture: {
            languages: {
                official: ["Kazakh", "Russian"],
                regional: ["Uzbek", "Uighur", "Ukrainian"],
                spoken: ["Kazakh", "Russian", "English"]
            },
            religions: {
                dominant: "Islam",
                breakdown: {
                    "Islam": 70.2,
                    "Christianity": 26.0,
                    "Unaffiliated": 2.8,
                    "Other": 1.0
                }
            },
            heritageSites: [
                { name: "Mausoleum of Khoja Ahmed Yasawi", type: "Cultural", year: 2003, description: "Timurid architecture masterpiece" },
                { name: "Petroglyphs of Tamgaly", type: "Cultural", year: 2004, description: "Bronze Age rock art" },
                { name: "Saryarka Steppe", type: "Natural", year: 2008, description: "Wetlands and grasslands" },
                { name: "Silk Roads Sites", type: "Cultural", year: 2014, description: "Historic trade route" }
            ],
            festivals: [
                { name: "Nauryz", date: "March 21-23", description: "Persian New Year, spring celebration" },
                { name: "Independence Day", date: "December 16", description: "National holiday" },
                { name: "Constitution Day", date: "August 30", description: "Civic holiday" },
                { name: "Kurban Ait", date: "Islamic calendar", description: "Feast of Sacrifice" }
            ],
            cuisine: [
                { name: "Beshbarmak", description: "National dish - boiled meat with noodles" },
                { name: "Kazy", description: "Horse meat sausage" },
                { name: "Baursak", description: "Fried dough balls" },
                { name: "Kumis", description: "Fermented mare's milk" },
                { name: "Shashlik", description: "Grilled meat skewers" },
                { name: "Pilaf", description: "Rice with meat and carrots" }
            ],
            arts: [
                { type: "Music", description: "Dombra instrument, throat singing" },
                { type: "Crafts", description: "Felt making, yurt construction, embroidery" },
                { type: "Poetry", description: "Oral tradition of Akyns (poet-improvisers)" },
                { type: "Architecture", description: "Modern Astana, historic Silk Road sites" }
            ],
            sports: {
                popular: ["Football", "Ice hockey", "Boxing", "Wrestling", "Cycling"],
                achievements: ["Olympic boxing and weightlifting medals", "Strong ice hockey tradition"],
                venues: ["Astana Arena", "Almaty Arena"]
            }
        },
        
        history: {
            timeline: [
                { year: "8th century BC", event: "Scythian tribes in region" },
                { year: "6th century", event: "Turkic Khaganate" },
                { year: "13th century", event: "Mongol Empire conquest" },
                { year: "1465", event: "Kazakh Khanate established" },
                { year: "1731-1847", event: "Russian Empire annexation" },
                { year: "1920", event: "Kazakh ASSR formed" },
                { year: "1936", event: "Kazakh SSR established" },
                { year: "1991", event: "Independence from Soviet Union" },
                { year: "1997", event: "Capital moved from Almaty to Astana" },
                { year: "2019", event: "Nursultan Nazarbayev resigns after 30 years" },
                { year: "2022", event: "January unrest and political reforms" }
            ],
            colonialHistory: null,
            historicalNames: ["Kazakh Khanate", "Kazakh SSR"]
        },
        
        demographics: {
            ethnicGroups: {
                "Kazakh": 70.4,
                "Russian": 15.5,
                "Uzbek": 3.2,
                "Ukrainian": 1.5,
                "Uighur": 1.5,
                "Tatar": 1.1,
                "German": 0.9,
                "Other": 5.9
            },
            ageStructure: {
                "0-14": 27.0,
                "15-64": 64.0,
                "65+": 9.0
            },
            urbanization: 58.0,
            lifeExpectancy: 74.0,
            fertilityRate: 2.8,
            literacyRate: 99.8
        },
        
        quickFacts: {
            internet: { tld: ".kz", penetration: 85.0 },
            calling: { code: "+7" },
            electricity: { voltage: "220V", frequency: "50Hz", plugType: "C, F" },
            measurement: "Metric",
            emergencyNumber: "112"
        },
        
        disputes: [],
        
        funFacts: [
            "Kazakhstan is the largest landlocked country in the world",
            "The first man in space, Yuri Gagarin, launched from Baikonur in Kazakhstan",
            "Kazakhstan has the world's largest uranium reserves",
            "Apples originated in the mountains near Almaty",
            "The country spans two time zones and two continents"
        ]
    },

    "uzbekistan": {
        name: "Uzbekistan",
        officialName: "Republic of Uzbekistan",
        nativeName: "O'zbekiston Respublikasi",
        iso3: "UZB",
        iso2: "UZ",
        flag: "🇺🇿",
        
        capital: {
            name: "Tashkent",
            population: 2850000,
            coordinates: { lat: 41.2995, lng: 69.2401 }
        },
        largestCity: "Tashkent",
        population: {
            total: 35300000,
            year: 2024,
            density: 79,
            growth: 1.5
        },
        area: {
            total: 448978,
            land: 425400,
            water: 23578,
            rank: 56
        },
        
        continent: "Asia",
        region: "Central Asia",
        subregion: "Central Asia",
        coordinates: { lat: 41.3775, lng: 64.5853 },
        borders: ["Kazakhstan", "Kyrgyzstan", "Tajikistan", "Afghanistan", "Turkmenistan"],
        coastline: 0,
        timezone: ["UTC+5"],
        drivingSide: "right",
        
        governmentType: "Presidential republic",
        leader: {
            headOfState: "President Shavkat Mirziyoyev",
            headOfGovernment: "Prime Minister Abdulla Aripov"
        },
        independence: {
            date: "September 1, 1991",
            from: "Soviet Union"
        },
        nationalDay: { name: "Independence Day", date: "September 1" },
        divisions: {
            type: "regions",
            count: 14,
            major: ["Tashkent", "Samarkand", "Bukhara", "Fergana", "Andijan"]
        },
        
        economy: {
            gdpTotal: 90000000000,
            gdpPerCapita: 2600,
            gdpGrowth: 5.7,
            currency: { name: "Uzbekistani som", code: "UZS", symbol: "soʻm" },
            mainIndustries: ["textiles", "food processing", "machine building", "metallurgy", "mining"],
            exports: ["gold", "cotton", "natural gas", "fertilizers", "metals"],
            imports: ["machinery", "food", "chemicals", "metals"],
            majorPartners: ["Russia", "China", "Kazakhstan", "Turkey", "South Korea"]
        },
        hdi: 0.727,
        
        geography_links: {
            rivers: [
                { name: "Amu Darya", description: "Major river from Pamir to Aral Sea" },
                { name: "Syr Darya", description: "River through Fergana Valley" },
                { name: "Zeravshan", description: "River through Samarkand and Bukhara" }
            ],
            mountains: [
                { name: "Tian Shan", description: "Mountains in east" },
                { name: "Pamir-Alay", description: "Southeastern mountains" },
                { name: "Khazret Sultan", description: "Highest peak at 4643m" }
            ],
            deserts: [
                { name: "Kyzylkum Desert", description: "Red sand desert covering central region" },
                { name: "Aralkum Desert", description: "New desert from dried Aral Sea" }
            ],
            forests: [
                { name: "Tian Shan forests", description: "Mountain forests with juniper" },
                { name: "Tugai forests", description: "Riparian forests along rivers" }
            ],
            oceans: [],
            seas: [
                { name: "Aral Sea", description: "Shrinking endorheic sea" }
            ],
            lakes: [
                { name: "Aydarkul Lake", description: "Large artificial lake" },
                { name: "Charvak Reservoir", description: "Mountain reservoir" }
            ]
        },
        
        culture: {
            languages: {
                official: ["Uzbek"],
                regional: ["Russian", "Tajik", "Karakalpak"],
                spoken: ["Uzbek", "Russian", "Tajik"]
            },
            religions: {
                dominant: "Islam",
                breakdown: {
                    "Islam": 88.0,
                    "Christianity": 9.0,
                    "Other": 3.0
                }
            },
            heritageSites: [
                { name: "Itchan Kala", type: "Cultural", year: 1990, description: "Historic inner town of Khiva" },
                { name: "Historic Centre of Bukhara", type: "Cultural", year: 1993, description: "Silk Road trading center" },
                { name: "Historic Centre of Samarkand", type: "Cultural", year: 2001, description: "Crossroads of cultures" },
                { name: "Historic Centre of Shakhrisyabz", type: "Cultural", year: 2000, description: "Timur's birthplace" }
            ],
            festivals: [
                { name: "Navruz", date: "March 21", description: "Persian New Year" },
                { name: "Independence Day", date: "September 1", description: "National celebration" },
                { name: "Silk and Spices Festival", date: "May", description: "Bukhara cultural festival" },
                { name: "Sharq Taronalari", date: "August", description: "Music festival in Samarkand" }
            ],
            cuisine: [
                { name: "Plov", description: "National dish - rice with meat and carrots" },
                { name: "Shashlik", description: "Grilled meat skewers" },
                { name: "Lagman", description: "Noodle soup" },
                { name: "Manti", description: "Steamed dumplings" },
                { name: "Samsa", description: "Baked meat pastries" },
                { name: "Non", description: "Traditional bread" }
            ],
            arts: [
                { type: "Architecture", description: "Timurid architecture, blue tiles, minarets" },
                { type: "Crafts", description: "Silk weaving, ceramics, woodcarving, embroidery" },
                { type: "Music", description: "Shashmaqam classical tradition (UNESCO)" },
                { type: "Dance", description: "Traditional Uzbek dances" }
            ],
            sports: {
                popular: ["Football", "Wrestling", "Boxing", "Tennis", "Kurash"],
                achievements: ["Olympic medals in wrestling, boxing, gymnastics"],
                venues: ["Bunyodkor Stadium", "Milliy Stadium"]
            }
        },
        
        history: {
            timeline: [
                { year: "6th century BC", event: "Persian Empire rule" },
                { year: "329 BC", event: "Alexander the Great conquers region" },
                { year: "8th century", event: "Arab conquest, Islam introduced" },
                { year: "1220", event: "Mongol conquest under Genghis Khan" },
                { year: "1370", event: "Timurid Empire founded by Tamerlane" },
                { year: "16th century", event: "Uzbek Khanates established" },
                { year: "1868-1876", event: "Russian Empire conquest" },
                { year: "1924", event: "Uzbek SSR formed" },
                { year: "1991", event: "Independence from Soviet Union" },
                { year: "2016", event: "Mirziyoyev becomes president, reforms begin" }
            ],
            colonialHistory: null,
            historicalNames: ["Transoxiana", "Mawarannahr", "Uzbek SSR"]
        },
        
        demographics: {
            ethnicGroups: {
                "Uzbek": 83.8,
                "Tajik": 4.8,
                "Kazakh": 2.5,
                "Russian": 2.3,
                "Karakalpak": 2.2,
                "Other": 4.4
            },
            ageStructure: {
                "0-14": 27.0,
                "15-64": 67.0,
                "65+": 6.0
            },
            urbanization: 50.5,
            lifeExpectancy: 75.0,
            fertilityRate: 2.4,
            literacyRate: 99.6
        },
        
        quickFacts: {
            internet: { tld: ".uz", penetration: 71.0 },
            calling: { code: "+998" },
            electricity: { voltage: "220V", frequency: "50Hz", plugType: "C, F" },
            measurement: "Metric",
            emergencyNumber: "101/102/103"
        },
        
        disputes: [],
        
        funFacts: [
            "Uzbekistan is one of only two double-landlocked countries in the world",
            "Samarkand is one of the oldest continuously inhabited cities",
            "The country has the world's second-largest gold mine (Muruntau)",
            "Uzbekistan was a major center of the ancient Silk Road",
            "The Registan in Samarkand is considered one of the most beautiful squares in the world"
        ]
    },

    "turkmenistan": {
        name: "Turkmenistan",
        officialName: "Turkmenistan",
        nativeName: "Türkmenistan",
        iso3: "TKM",
        iso2: "TM",
        flag: "🇹🇲",
        
        capital: {
            name: "Ashgabat",
            population: 1030000,
            coordinates: { lat: 37.9601, lng: 58.3261 }
        },
        largestCity: "Ashgabat",
        population: {
            total: 6430000,
            year: 2024,
            density: 13,
            growth: 1.1
        },
        area: {
            total: 491210,
            land: 469930,
            water: 21280,
            rank: 52
        },
        
        continent: "Asia",
        region: "Central Asia",
        subregion: "Central Asia",
        coordinates: { lat: 38.9697, lng: 59.5563 },
        borders: ["Kazakhstan", "Uzbekistan", "Afghanistan", "Iran"],
        coastline: 0,
        timezone: ["UTC+5"],
        drivingSide: "right",
        
        governmentType: "Presidential republic (authoritarian)",
        leader: {
            headOfState: "President Serdar Berdimuhamedow",
            headOfGovernment: "President Serdar Berdimuhamedow"
        },
        independence: {
            date: "October 27, 1991",
            from: "Soviet Union"
        },
        nationalDay: { name: "Independence Day", date: "October 27" },
        divisions: {
            type: "regions",
            count: 6,
            major: ["Ashgabat", "Mary", "Lebap", "Dashoguz", "Balkan"]
        },
        
        economy: {
            gdpTotal: 80000000000,
            gdpPerCapita: 12500,
            gdpGrowth: 6.0,
            currency: { name: "Turkmenistani manat", code: "TMT", symbol: "m" },
            mainIndustries: ["natural gas", "petroleum", "textiles", "food processing"],
            exports: ["natural gas", "crude oil", "petrochemicals", "textiles", "cotton"],
            imports: ["machinery", "food", "chemicals", "metals"],
            majorPartners: ["China", "Turkey", "Russia", "UAE", "Afghanistan"]
        },
        hdi: 0.745,
        
        geography_links: {
            rivers: [
                { name: "Amu Darya", description: "Major river on eastern border" },
                { name: "Murgab River", description: "River in Mary region" },
                { name: "Tejen River", description: "River from Iran" }
            ],
            mountains: [
                { name: "Kopet Dag", description: "Mountains along Iranian border" },
                { name: "Ayrybaba", description: "Highest peak at 3139m" }
            ],
            deserts: [
                { name: "Karakum Desert", description: "Black sand desert covering 70% of country" }
            ],
            forests: [
                { name: "Kopet Dag forests", description: "Mountain forests with juniper" }
            ],
            oceans: [],
            seas: [
                { name: "Caspian Sea", description: "Western coastline" }
            ],
            lakes: [
                { name: "Sarygamysh Lake", description: "Lake on Uzbek border" }
            ]
        },
        
        culture: {
            languages: {
                official: ["Turkmen"],
                regional: ["Russian", "Uzbek"],
                spoken: ["Turkmen", "Russian", "Uzbek"]
            },
            religions: {
                dominant: "Islam",
                breakdown: {
                    "Islam": 89.0,
                    "Christianity": 9.0,
                    "Other": 2.0
                }
            },
            heritageSites: [
                { name: "Ancient Merv", type: "Cultural", year: 1999, description: "Historic oasis city on Silk Road" },
                { name: "Kunya-Urgench", type: "Cultural", year: 2005, description: "Medieval capital of Khorezm" },
                { name: "Parthian Fortresses of Nisa", type: "Cultural", year: 2007, description: "Ancient Parthian capital" }
            ],
            festivals: [
                { name: "Novruz", date: "March 21", description: "Persian New Year" },
                { name: "Independence Day", date: "October 27", description: "National holiday" },
                { name: "Turkmen Carpet Day", date: "Last Sunday of May", description: "Celebration of carpet weaving" },
                { name: "Melon Day", date: "Second Sunday of August", description: "Melon harvest celebration" }
            ],
            cuisine: [
                { name: "Plov", description: "Rice pilaf with meat" },
                { name: "Shashlyk", description: "Grilled meat skewers" },
                { name: "Chorek", description: "Traditional bread" },
                { name: "Dograma", description: "Bread and meat dish" },
                { name: "Ishlekli", description: "Meat-filled flatbread" }
            ],
            arts: [
                { type: "Carpet weaving", description: "Famous Turkmen carpets with geometric patterns" },
                { type: "Music", description: "Dutar instrument, Bakhshi tradition" },
                { type: "Jewelry", description: "Silver jewelry with carnelian" },
                { type: "Architecture", description: "White marble buildings of Ashgabat" }
            ],
            sports: {
                popular: ["Football", "Weightlifting", "Wrestling", "Horse sports"],
                achievements: ["Olympic weightlifting medals"],
                venues: ["Ashgabat Olympic Stadium", "Indoor Asian Games Complex"]
            }
        },
        
        history: {
            timeline: [
                { year: "3rd millennium BC", event: "Margiana civilization" },
                { year: "6th century BC", event: "Persian Empire rule" },
                { year: "3rd century BC", event: "Parthian Empire rises" },
                { year: "11th century", event: "Seljuk Turkic migration" },
                { year: "1220", event: "Mongol conquest" },
                { year: "16th century", event: "Turkmen tribes consolidate" },
                { year: "1881", event: "Russian Empire conquest" },
                { year: "1924", event: "Turkmen SSR formed" },
                { year: "1991", event: "Independence from Soviet Union" },
                { year: "2006", event: "Saparmurat Niyazov dies, Berdimuhamedow takes power" },
                { year: "2022", event: "Serdar Berdimuhamedow becomes president" }
            ],
            colonialHistory: null,
            historicalNames: ["Margiana", "Turkmen SSR"]
        },
        
        demographics: {
            ethnicGroups: {
                "Turkmen": 85.0,
                "Uzbek": 5.0,
                "Russian": 4.0,
                "Other": 6.0
            },
            ageStructure: {
                "0-14": 26.0,
                "15-64": 69.0,
                "65+": 5.0
            },
            urbanization: 53.0,
            lifeExpectancy: 71.0,
            fertilityRate: 2.8,
            literacyRate: 99.7
        },
        
        quickFacts: {
            internet: { tld: ".tm", penetration: 21.0 },
            calling: { code: "+993" },
            electricity: { voltage: "220V", frequency: "50Hz", plugType: "C, F" },
            measurement: "Metric",
            emergencyNumber: "03"
        },
        
        disputes: [
            {
                type: "maritime",
                description: "Caspian Sea division with neighboring states",
                parties: ["Turkmenistan", "Azerbaijan", "Iran", "Kazakhstan", "Russia"],
                status: "Partially resolved by 2018 convention"
            }
        ],
        
        funFacts: [
            "The Darvaza Gas Crater ('Door to Hell') has been burning since 1971",
            "Ashgabat holds the Guinness World Record for most white marble buildings",
            "Turkmenistan has the world's fourth-largest natural gas reserves",
            "The Akhal-Teke horse breed originated in Turkmenistan",
            "The country is one of the most isolated in the world"
        ]
    },

    "kyrgyzstan": {
        name: "Kyrgyzstan",
        officialName: "Kyrgyz Republic",
        nativeName: "Кыргыз Республикасы",
        iso3: "KGZ",
        iso2: "KG",
        flag: "🇰🇬",
        
        capital: {
            name: "Bishkek",
            population: 1120000,
            coordinates: { lat: 42.8746, lng: 74.5698 }
        },
        largestCity: "Bishkek",
        population: {
            total: 7000000,
            year: 2024,
            density: 35,
            growth: 1.5
        },
        area: {
            total: 199951,
            land: 191801,
            water: 8150,
            rank: 86
        },
        
        continent: "Asia",
        region: "Central Asia",
        subregion: "Central Asia",
        coordinates: { lat: 41.2044, lng: 74.7661 },
        borders: ["Kazakhstan", "Uzbekistan", "Tajikistan", "China"],
        coastline: 0,
        timezone: ["UTC+6"],
        drivingSide: "right",
        
        governmentType: "Presidential republic",
        leader: {
            headOfState: "President Sadyr Japarov",
            headOfGovernment: "Chairman Akylbek Japarov"
        },
        independence: {
            date: "August 31, 1991",
            from: "Soviet Union"
        },
        nationalDay: { name: "Independence Day", date: "August 31" },
        divisions: {
            type: "regions",
            count: 7,
            major: ["Bishkek", "Osh", "Chuy", "Jalal-Abad", "Issyk-Kul"]
        },
        
        economy: {
            gdpTotal: 12500000000,
            gdpPerCapita: 1800,
            gdpGrowth: 6.0,
            currency: { name: "Kyrgyzstani som", code: "KGS", symbol: "с" },
            mainIndustries: ["small machinery", "textiles", "food processing", "cement", "gold mining"],
            exports: ["gold", "cotton", "wool", "garments", "meat"],
            imports: ["oil", "gas", "machinery", "chemicals", "food"],
            majorPartners: ["Russia", "Kazakhstan", "China", "Uzbekistan", "Turkey"]
        },
        hdi: 0.692,
        
        geography_links: {
            rivers: [
                { name: "Naryn River", description: "Largest river, source of Syr Darya" },
                { name: "Chu River", description: "River through Bishkek region" },
                { name: "Talas River", description: "River in northern mountains" }
            ],
            mountains: [
                { name: "Tian Shan", description: "Dominant mountain range covering 80% of country" },
                { name: "Jengish Chokusu", description: "Highest peak at 7439m" },
                { name: "Khan Tengri", description: "Second highest at 7010m" },
                { name: "Pamir Mountains", description: "Southeastern range" }
            ],
            deserts: [],
            forests: [
                { name: "Walnut forests", description: "World's largest natural walnut forest" },
                { name: "Juniper forests", description: "Mountain juniper woodlands" }
            ],
            oceans: [],
            seas: [],
            lakes: [
                { name: "Issyk-Kul", description: "Second-largest alpine lake in world" },
                { name: "Son-Kul", description: "High-altitude lake at 3016m" },
                { name: "Chatyr-Kul", description: "Mountain lake near China border" }
            ]
        },
        
        culture: {
            languages: {
                official: ["Kyrgyz", "Russian"],
                regional: ["Uzbek", "Dungan"],
                spoken: ["Kyrgyz", "Russian", "Uzbek"]
            },
            religions: {
                dominant: "Islam",
                breakdown: {
                    "Islam": 90.0,
                    "Christianity": 7.0,
                    "Other": 3.0
                }
            },
            heritageSites: [
                { name: "Sulaiman-Too Sacred Mountain", type: "Cultural", year: 2009, description: "Sacred mountain in Osh" },
                { name: "Silk Roads Sites", type: "Cultural", year: 2014, description: "Historic trade route" },
                { name: "Western Tian-Shan", type: "Natural", year: 2016, description: "Mountain biodiversity" }
            ],
            festivals: [
                { name: "Nooruz", date: "March 21", description: "Persian New Year" },
                { name: "Independence Day", date: "August 31", description: "National celebration" },
                { name: "World Nomad Games", date: "September", description: "International nomadic sports" },
                { name: "At Chabysh", date: "Various", description: "Traditional horse racing" }
            ],
            cuisine: [
                { name: "Beshbarmak", description: "Boiled meat with noodles" },
                { name: "Lagman", description: "Noodle soup with meat and vegetables" },
                { name: "Manti", description: "Steamed dumplings" },
                { name: "Kumis", description: "Fermented mare's milk" },
                { name: "Boorsok", description: "Fried bread pieces" },
                { name: "Kuurdak", description: "Fried meat with onions" }
            ],
            arts: [
                { type: "Epic of Manas", description: "UNESCO heritage - longest epic poem" },
                { type: "Felt crafts", description: "Shyrdak and Ala Kiyiz felt carpets" },
                { type: "Yurt making", description: "Traditional nomadic dwelling construction" },
                { type: "Music", description: "Komuz instrument, throat singing" }
            ],
            sports: {
                popular: ["Football", "Wrestling", "Horse sports", "Martial arts"],
                achievements: ["Olympic wrestling medals", "World Nomad Games hosts"],
                venues: ["Dolen Omurzakov Stadium", "Hippodrome"]
            }
        },
        
        history: {
            timeline: [
                { year: "2nd century BC", event: "Part of Silk Road trade" },
                { year: "6th century", event: "Turkic Khaganate" },
                { year: "13th century", event: "Mongol conquest" },
                { year: "1876", event: "Russian Empire conquest" },
                { year: "1924", event: "Kara-Kirghiz Autonomous Oblast formed" },
                { year: "1936", event: "Kirghiz SSR established" },
                { year: "1991", event: "Independence from Soviet Union" },
                { year: "2005", event: "Tulip Revolution" },
                { year: "2010", event: "Second revolution and ethnic violence" },
                { year: "2020", event: "Third revolution, Japarov comes to power" }
            ],
            colonialHistory: null,
            historicalNames: ["Kirghizia", "Kirghiz SSR"]
        },
        
        demographics: {
            ethnicGroups: {
                "Kyrgyz": 73.8,
                "Uzbek": 14.8,
                "Russian": 5.1,
                "Dungan": 1.1,
                "Other": 5.2
            },
            ageStructure: {
                "0-14": 31.0,
                "15-64": 64.0,
                "65+": 5.0
            },
            urbanization: 37.0,
            lifeExpectancy: 72.0,
            fertilityRate: 2.9,
            literacyRate: 99.5
        },
        
        quickFacts: {
            internet: { tld: ".kg", penetration: 51.0 },
            calling: { code: "+996" },
            electricity: { voltage: "220V", frequency: "50Hz", plugType: "C, F" },
            measurement: "Metric",
            emergencyNumber: "112"
        },
        
        disputes: [
            {
                type: "border",
                description: "Border disputes with Tajikistan",
                parties: ["Kyrgyzstan", "Tajikistan"],
                status: "Ongoing clashes"
            }
        ],
        
        funFacts: [
            "The Epic of Manas is 20 times longer than the Odyssey",
            "Kyrgyzstan has more than 2,000 mountain lakes",
            "The country is 94% mountainous",
            "Issyk-Kul never freezes despite being at high altitude",
            "Kyrgyzstan hosts the World Nomad Games"
        ]
    },

    "tajikistan": {
        name: "Tajikistan",
        officialName: "Republic of Tajikistan",
        nativeName: "Ҷумҳурии Тоҷикистон",
        iso3: "TJK",
        iso2: "TJ",
        flag: "🇹🇯",
        
        capital: {
            name: "Dushanbe",
            population: 920000,
            coordinates: { lat: 38.5598, lng: 68.7740 }
        },
        largestCity: "Dushanbe",
        population: {
            total: 10100000,
            year: 2024,
            density: 71,
            growth: 2.0
        },
        area: {
            total: 143100,
            land: 141510,
            water: 1590,
            rank: 95
        },
        
        continent: "Asia",
        region: "Central Asia",
        subregion: "Central Asia",
        coordinates: { lat: 38.8610, lng: 71.2761 },
        borders: ["Kyrgyzstan", "Uzbekistan", "Afghanistan", "China"],
        coastline: 0,
        timezone: ["UTC+5"],
        drivingSide: "right",
        
        governmentType: "Presidential republic",
        leader: {
            headOfState: "President Emomali Rahmon",
            headOfGovernment: "Prime Minister Kokhir Rasulzoda"
        },
        independence: {
            date: "September 9, 1991",
            from: "Soviet Union"
        },
        nationalDay: { name: "Independence Day", date: "September 9" },
        divisions: {
            type: "regions",
            count: 4,
            major: ["Dushanbe", "Sughd", "Khatlon", "Gorno-Badakhshan"]
        },
        
        economy: {
            gdpTotal: 12000000000,
            gdpPerCapita: 1200,
            gdpGrowth: 7.0,
            currency: { name: "Tajikistani somoni", code: "TJS", symbol: "SM" },
            mainIndustries: ["aluminum", "hydropower", "cotton", "mining"],
            exports: ["aluminum", "electricity", "cotton", "fruits", "gold"],
            imports: ["petroleum", "aluminum oxide", "machinery", "food"],
            majorPartners: ["Russia", "Kazakhstan", "China", "Turkey", "Uzbekistan"]
        },
        hdi: 0.685,
        
        geography_links: {
            rivers: [
                { name: "Amu Darya", description: "Border river with Afghanistan" },
                { name: "Syr Darya", description: "River in northern region" },
                { name: "Vakhsh River", description: "Hydropower river" },
                { name: "Panj River", description: "Border with Afghanistan" }
            ],
            mountains: [
                { name: "Pamir Mountains", description: "'Roof of the World'" },
                { name: "Ismoil Somoni Peak", description: "Highest at 7495m" },
                { name: "Fann Mountains", description: "Popular trekking destination" },
                { name: "Tian Shan", description: "Northern mountains" }
            ],
            deserts: [],
            forests: [
                { name: "Walnut forests", description: "Mountain walnut groves" },
                { name: "Juniper forests", description: "High-altitude forests" }
            ],
            oceans: [],
            seas: [],
            lakes: [
                { name: "Karakul Lake", description: "High-altitude crater lake" },
                { name: "Iskanderkul", description: "Mountain lake named after Alexander" },
                { name: "Sarez Lake", description: "Formed by 1911 earthquake" }
            ],
            glaciers: [
                { name: "Fedchenko Glacier", description: "Longest glacier outside polar regions" }
            ]
        },
        
        culture: {
            languages: {
                official: ["Tajik"],
                regional: ["Russian", "Uzbek"],
                spoken: ["Tajik", "Russian", "Uzbek"]
            },
            religions: {
                dominant: "Islam",
                breakdown: {
                    "Sunni Islam": 85.0,
                    "Shia Islam": 10.0,
                    "Other": 5.0
                }
            },
            heritageSites: [
                { name: "Proto-urban site of Sarazm", type: "Cultural", year: 2010, description: "5000-year-old settlement" },
                { name: "Silk Roads Sites", type: "Cultural", year: 2014, description: "Historic trade route" },
                { name: "Tajik National Park", type: "Natural", year: 2013, description: "Pamir Mountains wilderness" }
            ],
            festivals: [
                { name: "Navruz", date: "March 21", description: "Persian New Year" },
                { name: "Independence Day", date: "September 9", description: "National celebration" },
                { name: "National Unity Day", date: "June 27", description: "End of civil war commemoration" },
                { name: "Mehrgon", date: "October", description: "Autumn harvest festival" }
            ],
            cuisine: [
                { name: "Plov", description: "National rice dish with meat" },
                { name: "Qurutob", description: "Bread in yogurt sauce" },
                { name: "Shashlik", description: "Grilled meat skewers" },
                { name: "Laghman", description: "Noodle soup" },
                { name: "Sambusa", description: "Baked meat pastries" },
                { name: "Shirchoy", description: "Milk tea with butter" }
            ],
            arts: [
                { type: "Poetry", description: "Persian poetry tradition, Rudaki" },
                { type: "Music", description: "Shashmaqam classical tradition (UNESCO)" },
                { type: "Dance", description: "Traditional folk dances" },
                { type: "Embroidery", description: "Suzani textile art" }
            ],
            sports: {
                popular: ["Football", "Wrestling", "Buzkashi", "Boxing"],
                achievements: ["Olympic medals in wrestling and judo"],
                venues: ["Pamir Stadium", "Central Republican Stadium"]
            }
        },
        
        history: {
            timeline: [
                { year: "4000 BC", event: "Sarazm settlement flourishes" },
                { year: "6th century BC", event: "Part of Persian Empire" },
                { year: "329 BC", event: "Alexander the Great conquers region" },
                { year: "8th century", event: "Arab conquest, Islam introduced" },
                { year: "9th century", event: "Samanid Empire, Persian cultural renaissance" },
                { year: "13th century", event: "Mongol conquest" },
                { year: "1868", event: "Northern Tajikistan under Russian Empire" },
                { year: "1929", event: "Tajik SSR formed" },
                { year: "1991", event: "Independence from Soviet Union" },
                { year: "1992-1997", event: "Civil War" },
                { year: "1994", event: "Emomali Rahmon becomes president" }
            ],
            colonialHistory: null,
            historicalNames: ["Bactria", "Tajik SSR"]
        },
        
        demographics: {
            ethnicGroups: {
                "Tajik": 84.3,
                "Uzbek": 13.8,
                "Russian": 0.5,
                "Kyrgyz": 0.8,
                "Other": 0.6
            },
            ageStructure: {
                "0-14": 32.0,
                "15-64": 64.0,
                "65+": 4.0
            },
            urbanization: 27.5,
            lifeExpectancy: 71.5,
            fertilityRate: 3.2,
            literacyRate: 99.8
        },
        
        quickFacts: {
            internet: { tld: ".tj", penetration: 35.0 },
            calling: { code: "+992" },
            electricity: { voltage: "220V", frequency: "50Hz", plugType: "C, F" },
            measurement: "Metric",
            emergencyNumber: "112"
        },
        
        disputes: [
            {
                type: "border",
                description: "Border disputes with Kyrgyzstan",
                parties: ["Tajikistan", "Kyrgyzstan"],
                status: "Ongoing clashes"
            }
        ],
        
        funFacts: [
            "Tajikistan is 93% mountainous",
            "The Fedchenko Glacier is 77km long",
            "Tajik is mutually intelligible with Persian/Farsi",
            "The Pamir Highway is one of the world's most spectacular roads",
            "Rudaki, the 'father of Persian poetry,' was from Tajikistan"
        ]
    },

    "mongolia": {
        name: "Mongolia",
        officialName: "Mongolia",
        nativeName: "Монгол Улс (Mongol Uls)",
        iso3: "MNG",
        iso2: "MN",
        flag: "🇲🇳",
        
        capital: {
            name: "Ulaanbaatar",
            population: 1540000,
            coordinates: { lat: 47.8864, lng: 106.9057 }
        },
        largestCity: "Ulaanbaatar",
        population: {
            total: 3400000,
            year: 2024,
            density: 2,
            growth: 1.4
        },
        area: {
            total: 1564116,
            land: 1553556,
            water: 10560,
            rank: 18
        },
        
        continent: "Asia",
        region: "East Asia",
        subregion: "Central Asia",
        coordinates: { lat: 46.8625, lng: 103.8467 },
        borders: ["Russia", "China"],
        coastline: 0,
        timezone: ["UTC+7", "UTC+8"],
        drivingSide: "right",
        
        governmentType: "Semi-presidential republic",
        leader: {
            headOfState: "President Ukhnaagiin Khürelsükh",
            headOfGovernment: "Prime Minister Luvsannamsrain Oyun-Erdene"
        },
        independence: {
            date: "December 29, 1911",
            from: "Qing Dynasty China"
        },
        nationalDay: { name: "Naadam", date: "July 11" },
        divisions: {
            type: "provinces",
            count: 21,
            major: ["Ulaanbaatar", "Darkhan-Uul", "Orkhon", "Selenge", "Dornod"]
        },
        
        economy: {
            gdpTotal: 20000000000,
            gdpPerCapita: 5900,
            gdpGrowth: 5.5,
            currency: { name: "Mongolian tögrög", code: "MNT", symbol: "₮" },
            mainIndustries: ["construction", "mining", "food processing", "cashmere"],
            exports: ["copper", "gold", "coal", "cashmere", "fluorspar"],
            imports: ["machinery", "fuel", "cars", "food", "consumer goods"],
            majorPartners: ["China", "Russia", "Switzerland", "South Korea", "Japan"]
        },
        hdi: 0.739,
        
        geography_links: {
            rivers: [
                { name: "Selenge River", description: "Largest river, flows to Lake Baikal" },
                { name: "Orkhon River", description: "Historic river in central Mongolia" },
                { name: "Tuul River", description: "River through Ulaanbaatar" },
                { name: "Kherlen River", description: "Major river in eastern Mongolia" }
            ],
            mountains: [
                { name: "Altai Mountains", description: "Western mountain range" },
                { name: "Khüiten Peak", description: "Highest at 4374m" },
                { name: "Khangai Mountains", description: "Central mountains" },
                { name: "Khentii Mountains", description: "Genghis Khan's homeland" }
            ],
            deserts: [
                { name: "Gobi Desert", description: "Vast desert in southern Mongolia" }
            ],
            forests: [
                { name: "Taiga forests", description: "Northern conifer forests" },
                { name: "Khentii forests", description: "Protected wilderness" }
            ],
            oceans: [],
            seas: [],
            lakes: [
                { name: "Khövsgöl Lake", description: "Second-largest freshwater lake in Asia" },
                { name: "Uvs Lake", description: "Largest saltwater lake" },
                { name: "Khar Us Lake", description: "Freshwater lake in west" }
            ]
        },
        
        culture: {
            languages: {
                official: ["Mongolian"],
                regional: ["Kazakh", "Tuvan", "Russian"],
                spoken: ["Mongolian", "Russian", "English"]
            },
            religions: {
                dominant: "Buddhism",
                breakdown: {
                    "Buddhism": 53.0,
                    "Unaffiliated": 38.6,
                    "Islam": 3.0,
                    "Shamanism": 2.9,
                    "Christianity": 2.2
                }
            },
            heritageSites: [
                { name: "Orkhon Valley", type: "Cultural", year: 2004, description: "Historic nomadic landscape" },
                { name: "Uvs Nuur Basin", type: "Natural", year: 2003, description: "Steppe ecosystem" },
                { name: "Petroglyphic Complexes", type: "Cultural", year: 2011, description: "Ancient rock art" },
                { name: "Great Burkhan Khaldun", type: "Cultural", year: 2015, description: "Sacred mountain" }
            ],
            festivals: [
                { name: "Naadam", date: "July 11-13", description: "Traditional sports festival" },
                { name: "Tsagaan Sar", date: "Lunar New Year", description: "White Moon celebration" },
                { name: "Eagle Festival", date: "October", description: "Kazakh eagle hunting tradition" },
                { name: "Ice Festival", date: "February-March", description: "Winter celebration" }
            ],
            cuisine: [
                { name: "Buuz", description: "Steamed meat dumplings" },
                { name: "Khuushuur", description: "Fried meat pockets" },
                { name: "Airag", description: "Fermented mare's milk" },
                { name: "Boodog", description: "Goat cooked with hot stones" },
                { name: "Tsuivan", description: "Stir-fried noodles with meat" }
            ],
            arts: [
                { type: "Throat singing", description: "Khoomei (UNESCO heritage)" },
                { type: "Morin Khuur", description: "Horse-head fiddle (UNESCO)" },
                { type: "Ger making", description: "Traditional felt tent" },
                { type: "Archery", description: "Traditional skill" }
            ],
            sports: {
                popular: ["Wrestling", "Archery", "Horse racing", "Football"],
                achievements: ["Olympic medals in judo, boxing, archery"],
                venues: ["Central Stadium", "National Sports Palace"]
            }
        },
        
        history: {
            timeline: [
                { year: "3rd century BC", event: "Xiongnu Empire" },
                { year: "1206", event: "Mongol Empire founded by Genghis Khan" },
                { year: "1279", event: "Largest contiguous land empire in history" },
                { year: "1368", event: "Yuan Dynasty falls in China" },
                { year: "1691", event: "Qing Dynasty conquest" },
                { year: "1911", event: "Independence declared" },
                { year: "1924", event: "Mongolian People's Republic established" },
                { year: "1990", event: "Democratic revolution" },
                { year: "1992", event: "New constitution, democracy established" }
            ],
            colonialHistory: null,
            historicalNames: ["Mongol Empire", "Mongolian People's Republic"]
        },
        
        demographics: {
            ethnicGroups: {
                "Khalkh Mongol": 81.9,
                "Kazakh": 3.8,
                "Dörvöd": 2.7,
                "Bayad": 2.1,
                "Buryat": 1.7,
                "Other": 7.8
            },
            ageStructure: {
                "0-14": 27.0,
                "15-64": 68.0,
                "65+": 5.0
            },
            urbanization: 68.5,
            lifeExpectancy: 71.0,
            fertilityRate: 2.5,
            literacyRate: 98.4
        },
        
        quickFacts: {
            internet: { tld: ".mn", penetration: 63.0 },
            calling: { code: "+976" },
            electricity: { voltage: "230V", frequency: "50Hz", plugType: "C, E" },
            measurement: "Metric",
            emergencyNumber: "102/103/105"
        },
        
        disputes: [],
        
        funFacts: [
            "Mongolia is the most sparsely populated country in the world",
            "More than 30% of Mongolians are still nomadic or semi-nomadic",
            "Genghis Khan created the world's largest contiguous empire",
            "Mongolia has more horses than people",
            "The Gobi Desert contains dinosaur fossils and eggs"
        ]
    },

    "nepal": {
        name: "Nepal",
        officialName: "Federal Democratic Republic of Nepal",
        nativeName: "सङ्घीय लोकतान्त्रिक गणतन्त्र नेपाल",
        iso3: "NPL",
        iso2: "NP",
        flag: "🇳🇵",
        
        capital: {
            name: "Kathmandu",
            population: 1440000,
            coordinates: { lat: 27.7172, lng: 85.3240 }
        },
        largestCity: "Kathmandu",
        population: {
            total: 30900000,
            year: 2024,
            density: 210,
            growth: 0.9
        },
        area: {
            total: 147181,
            land: 143351,
            water: 3830,
            rank: 93
        },
        
        continent: "Asia",
        region: "South Asia",
        subregion: "Himalayas",
        coordinates: { lat: 28.3949, lng: 84.1240 },
        borders: ["India", "China"],
        coastline: 0,
        timezone: ["UTC+5:45"],
        drivingSide: "left",
        
        governmentType: "Federal parliamentary republic",
        leader: {
            headOfState: "President Ram Chandra Paudel",
            headOfGovernment: "Prime Minister KP Sharma Oli"
        },
        independence: {
            date: "1768",
            from: "Unification by Prithvi Narayan Shah"
        },
        nationalDay: { name: "Constitution Day", date: "September 20" },
        divisions: {
            type: "provinces",
            count: 7,
            major: ["Bagmati", "Gandaki", "Lumbini", "Koshi", "Madhesh"]
        },
        
        economy: {
            gdpTotal: 42000000000,
            gdpPerCapita: 1400,
            gdpGrowth: 4.5,
            currency: { name: "Nepalese rupee", code: "NPR", symbol: "रू" },
            mainIndustries: ["tourism", "carpets", "textiles", "rice", "jute"],
            exports: ["carpets", "clothing", "leather", "jute", "grain"],
            imports: ["petroleum", "gold", "machinery", "electrical goods"],
            majorPartners: ["India", "China", "USA", "Germany", "UK"]
        },
        hdi: 0.602,
        
        geography_links: {
            rivers: [
                { name: "Koshi River", description: "Major river in east" },
                { name: "Gandaki River", description: "Sacred river through central region" },
                { name: "Karnali River", description: "Longest river entirely in Nepal" },
                { name: "Bagmati River", description: "Sacred river through Kathmandu" }
            ],
            mountains: [
                { name: "Mount Everest", description: "World's highest peak at 8849m" },
                { name: "Kanchenjunga", description: "Third highest at 8586m" },
                { name: "Lhotse", description: "Fourth highest at 8516m" },
                { name: "Makalu", description: "Fifth highest at 8485m" },
                { name: "Annapurna", description: "Tenth highest at 8091m" }
            ],
            deserts: [],
            forests: [
                { name: "Terai forests", description: "Lowland tropical forests" },
                { name: "Himalayan forests", description: "Temperate and alpine forests" },
                { name: "Chitwan forests", description: "Tropical monsoon forest" }
            ],
            oceans: [],
            seas: [],
            lakes: [
                { name: "Phewa Lake", description: "Popular lake in Pokhara" },
                { name: "Rara Lake", description: "Largest lake in Nepal" },
                { name: "Gosaikunda", description: "Sacred alpine lake" }
            ]
        },
        
        culture: {
            languages: {
                official: ["Nepali"],
                regional: ["Maithili", "Bhojpuri", "Tharu", "Tamang", "Newari"],
                spoken: ["Nepali", "English", "Hindi"]
            },
            religions: {
                dominant: "Hinduism",
                breakdown: {
                    "Hinduism": 81.3,
                    "Buddhism": 9.0,
                    "Islam": 4.4,
                    "Kirant": 3.0,
                    "Christianity": 1.4,
                    "Other": 0.9
                }
            },
            heritageSites: [
                { name: "Kathmandu Valley", type: "Cultural", year: 1979, description: "Seven monument zones" },
                { name: "Sagarmatha National Park", type: "Natural", year: 1979, description: "Mount Everest region" },
                { name: "Chitwan National Park", type: "Natural", year: 1984, description: "Subtropical wilderness" },
                { name: "Lumbini", type: "Cultural", year: 1997, description: "Birthplace of Buddha" }
            ],
            festivals: [
                { name: "Dashain", date: "September-October", description: "Biggest Hindu festival" },
                { name: "Tihar", date: "October-November", description: "Festival of lights" },
                { name: "Holi", date: "March", description: "Festival of colors" },
                { name: "Buddha Jayanti", date: "May", description: "Buddha's birthday" }
            ],
            cuisine: [
                { name: "Dal Bhat", description: "National dish - lentils with rice" },
                { name: "Momos", description: "Tibetan-style dumplings" },
                { name: "Sel Roti", description: "Ring-shaped rice bread" },
                { name: "Gundruk", description: "Fermented leafy greens" },
                { name: "Yak cheese", description: "High-altitude dairy" }
            ],
            arts: [
                { type: "Architecture", description: "Pagoda temples, stupas" },
                { type: "Woodcarving", description: "Intricate temple carvings" },
                { type: "Thangka painting", description: "Buddhist scroll paintings" },
                { type: "Music", description: "Folk and devotional music" }
            ],
            sports: {
                popular: ["Football", "Cricket", "Volleyball", "Kabaddi"],
                achievements: ["Cricket development", "Mountaineering achievements"],
                venues: ["Dasarath Stadium", "Kirtipur Stadium"]
            }
        },
        
        history: {
            timeline: [
                { year: "563 BC", event: "Buddha born in Lumbini" },
                { year: "4th century", event: "Licchavi dynasty" },
                { year: "1200s", event: "Malla kingdoms in Kathmandu Valley" },
                { year: "1768", event: "Unification by Prithvi Narayan Shah" },
                { year: "1846", event: "Rana regime begins" },
                { year: "1951", event: "Monarchy restored, Rana regime ends" },
                { year: "1996-2006", event: "Maoist insurgency" },
                { year: "2008", event: "Monarchy abolished, republic declared" },
                { year: "2015", event: "New constitution adopted, devastating earthquake" }
            ],
            colonialHistory: "Never colonized",
            historicalNames: ["Kingdom of Nepal"]
        },
        
        demographics: {
            ethnicGroups: {
                "Chhetri": 16.6,
                "Brahmin-Hill": 12.2,
                "Magar": 7.1,
                "Tharu": 6.6,
                "Tamang": 5.8,
                "Newar": 5.0,
                "Kami": 4.8,
                "Other": 41.9
            },
            ageStructure: {
                "0-14": 27.0,
                "15-64": 67.0,
                "65+": 6.0
            },
            urbanization: 21.0,
            lifeExpectancy: 72.0,
            fertilityRate: 1.9,
            literacyRate: 68.0
        },
        
        quickFacts: {
            internet: { tld: ".np", penetration: 47.0 },
            calling: { code: "+977" },
            electricity: { voltage: "230V", frequency: "50Hz", plugType: "C, D, M" },
            measurement: "Metric",
            emergencyNumber: "100/101/102"
        },
        
        disputes: [],
        
        funFacts: [
            "Nepal has the only non-rectangular national flag in the world",
            "Eight of the world's ten highest mountains are in Nepal",
            "Nepal has the world's deepest gorge (Kali Gandaki)",
            "The country has never been colonized",
            "Nepal has the world's only living goddess (Kumari)"
        ]
    },

    "bhutan": {
        name: "Bhutan",
        officialName: "Kingdom of Bhutan",
        nativeName: "འབྲུག་ཡུལ (Druk Yul)",
        iso3: "BTN",
        iso2: "BT",
        flag: "🇧🇹",
        
        capital: {
            name: "Thimphu",
            population: 115000,
            coordinates: { lat: 27.4728, lng: 89.6390 }
        },
        largestCity: "Thimphu",
        population: {
            total: 787000,
            year: 2024,
            density: 21,
            growth: 1.0
        },
        area: {
            total: 38394,
            land: 38394,
            water: 0,
            rank: 136
        },
        
        continent: "Asia",
        region: "South Asia",
        subregion: "Himalayas",
        coordinates: { lat: 27.5142, lng: 90.4336 },
        borders: ["India", "China"],
        coastline: 0,
        timezone: ["UTC+6"],
        drivingSide: "left",
        
        governmentType: "Constitutional monarchy",
        leader: {
            headOfState: "King Jigme Khesar Namgyel Wangchuck",
            headOfGovernment: "Prime Minister Tshering Tobgay"
        },
        independence: {
            date: "1907",
            from: "Monarchy established (never colonized)"
        },
        nationalDay: { name: "National Day", date: "December 17" },
        divisions: {
            type: "districts",
            count: 20,
            major: ["Thimphu", "Paro", "Punakha", "Bumthang", "Phuntsholing"]
        },
        
        economy: {
            gdpTotal: 3000000000,
            gdpPerCapita: 3800,
            gdpGrowth: 4.0,
            currency: { name: "Ngultrum", code: "BTN", symbol: "Nu." },
            mainIndustries: ["hydropower", "agriculture", "forestry", "tourism"],
            exports: ["electricity", "ferrosilicon", "cement", "calcium carbide"],
            imports: ["fuel", "machinery", "vehicles", "rice", "textiles"],
            majorPartners: ["India", "Bangladesh", "Italy", "Nepal", "Japan"]
        },
        hdi: 0.666,
        
        geography_links: {
            rivers: [
                { name: "Manas River", description: "Major river in east" },
                { name: "Mo Chhu", description: "River in Punakha" },
                { name: "Paro Chhu", description: "River through Paro Valley" },
                { name: "Wong Chhu", description: "River through Thimphu" }
            ],
            mountains: [
                { name: "Gangkhar Puensum", description: "Highest unclimbed mountain at 7570m" },
                { name: "Jomolhari", description: "Sacred mountain at 7326m" },
                { name: "Jichu Drake", description: "Prominent peak at 6989m" }
            ],
            deserts: [],
            forests: [
                { name: "Temperate forests", description: "Blue pine and oak forests" },
                { name: "Subtropical forests", description: "Southern lowland forests" },
                { name: "Alpine meadows", description: "High-altitude grasslands" }
            ],
            oceans: [],
            seas: [],
            lakes: [],
            valleys: [
                { name: "Paro Valley", description: "Historic valley with Tiger's Nest" },
                { name: "Punakha Valley", description: "Former capital valley" },
                { name: "Bumthang Valley", description: "Spiritual heartland" }
            ]
        },
        
        culture: {
            languages: {
                official: ["Dzongkha"],
                regional: ["Sharchop", "Nepali", "English"],
                spoken: ["Dzongkha", "English", "Nepali"]
            },
            religions: {
                dominant: "Buddhism",
                breakdown: {
                    "Vajrayana Buddhism": 75.0,
                    "Hinduism": 22.0,
                    "Other": 3.0
                }
            },
            heritageSites: [],
            festivals: [
                { name: "Tshechu", date: "Various", description: "Religious festivals with mask dances" },
                { name: "Losar", date: "February-March", description: "Bhutanese New Year" },
                { name: "National Day", date: "December 17", description: "Coronation of first king" },
                { name: "Thimphu Tshechu", date: "September-October", description: "Largest festival" }
            ],
            cuisine: [
                { name: "Ema Datshi", description: "National dish - chili and cheese" },
                { name: "Phaksha Paa", description: "Pork with red chilies" },
                { name: "Jasha Maru", description: "Spicy chicken" },
                { name: "Red Rice", description: "Distinctive Bhutanese rice" },
                { name: "Suja", description: "Butter tea" }
            ],
            arts: [
                { type: "Architecture", description: "Dzong fortress-monasteries" },
                { type: "Thangka painting", description: "Buddhist religious art" },
                { type: "Textiles", description: "Traditional weaving with symbolic patterns" },
                { type: "Mask making", description: "Religious dance masks" }
            ],
            sports: {
                popular: ["Archery", "Darts", "Football", "Basketball"],
                achievements: ["Traditional archery excellence"],
                venues: ["Changlimithang Stadium"]
            }
        },
        
        history: {
            timeline: [
                { year: "7th century", event: "Buddhism introduced" },
                { year: "1616", event: "Zhabdrung Ngawang Namgyal unifies Bhutan" },
                { year: "1907", event: "Ugyen Wangchuck becomes first king" },
                { year: "1971", event: "Joins United Nations" },
                { year: "2006", event: "Fourth King abdicates to fifth king" },
                { year: "2008", event: "First democratic elections, constitutional monarchy" },
                { year: "2020", event: "COVID-19 response praised globally" }
            ],
            colonialHistory: "Never colonized",
            historicalNames: ["Druk Yul", "Land of the Thunder Dragon"]
        },
        
        demographics: {
            ethnicGroups: {
                "Ngalop": 50.0,
                "Sharchop": 25.0,
                "Lhotshampa": 22.0,
                "Other": 3.0
            },
            ageStructure: {
                "0-14": 24.0,
                "15-64": 70.0,
                "65+": 6.0
            },
            urbanization: 42.5,
            lifeExpectancy: 72.5,
            fertilityRate: 1.8,
            literacyRate: 66.6
        },
        
        quickFacts: {
            internet: { tld: ".bt", penetration: 54.0 },
            calling: { code: "+975" },
            electricity: { voltage: "230V", frequency: "50Hz", plugType: "D, F, G" },
            measurement: "Metric",
            emergencyNumber: "112/113"
        },
        
        disputes: [
            {
                type: "border",
                description: "Northern border with China undefined",
                parties: ["Bhutan", "China"],
                status: "Ongoing negotiations"
            }
        ],
        
        funFacts: [
            "Bhutan measures Gross National Happiness instead of GDP",
            "Bhutan is the world's only carbon-negative country",
            "Television was not introduced until 1999",
            "Tobacco sales are banned",
            "Gangkhar Puensum is the world's highest unclimbed mountain",
            "Traditional dress (gho and kira) is mandatory in schools and offices"
        ]
    },

    "sri_lanka": {
        name: "Sri Lanka",
        officialName: "Democratic Socialist Republic of Sri Lanka",
        nativeName: "ශ්‍රී ලංකා / இலங்கை",
        iso3: "LKA",
        iso2: "LK",
        flag: "🇱🇰",
        
        capital: {
            name: "Sri Jayawardenepura Kotte",
            population: 128000,
            coordinates: { lat: 6.9271, lng: 79.8612 }
        },
        largestCity: "Colombo",
        population: {
            total: 22160000,
            year: 2024,
            density: 338,
            growth: 0.4
        },
        area: {
            total: 65610,
            land: 64630,
            water: 980,
            rank: 122
        },
        
        continent: "Asia",
        region: "South Asia",
        subregion: "Indian Ocean",
        coordinates: { lat: 7.8731, lng: 80.7718 },
        borders: [],
        coastline: 1340,
        timezone: ["UTC+5:30"],
        drivingSide: "left",
        
        governmentType: "Presidential republic",
        leader: {
            headOfState: "President Anura Kumara Dissanayake",
            headOfGovernment: "President Anura Kumara Dissanayake"
        },
        independence: {
            date: "February 4, 1948",
            from: "United Kingdom"
        },
        nationalDay: { name: "Independence Day", date: "February 4" },
        divisions: {
            type: "provinces",
            count: 9,
            major: ["Western", "Central", "Southern", "Northern", "Eastern"]
        },
        
        economy: {
            gdpTotal: 75000000000,
            gdpPerCapita: 3400,
            gdpGrowth: -2.0,
            currency: { name: "Sri Lankan rupee", code: "LKR", symbol: "Rs" },
            mainIndustries: ["textiles", "apparel", "tea processing", "tourism", "telecommunications"],
            exports: ["textiles", "tea", "coconut products", "rubber", "gems"],
            imports: ["petroleum", "textiles", "machinery", "food", "transport equipment"],
            majorPartners: ["USA", "UK", "India", "Germany", "Italy"]
        },
        hdi: 0.782,
        
        geography_links: {
            rivers: [
                { name: "Mahaweli River", description: "Longest river" },
                { name: "Kelani River", description: "River through Colombo region" },
                { name: "Kalu Ganga", description: "Major river in southwest" }
            ],
            mountains: [
                { name: "Pidurutalagala", description: "Highest peak at 2524m" },
                { name: "Adam's Peak", description: "Sacred mountain with footprint" },
                { name: "Knuckles Mountain Range", description: "UNESCO heritage area" }
            ],
            deserts: [],
            forests: [
                { name: "Sinharaja Forest", description: "UNESCO rainforest reserve" },
                { name: "Knuckles forests", description: "Cloud forests" },
                { name: "Wilpattu forests", description: "Dry zone forest" }
            ],
            oceans: [
                { name: "Indian Ocean", description: "Surrounds the island" }
            ],
            seas: [
                { name: "Bay of Bengal", description: "Northeastern waters" },
                { name: "Laccadive Sea", description: "Northwestern waters" }
            ],
            lakes: [
                { name: "Kandy Lake", description: "Historic artificial lake" }
            ]
        },
        
        culture: {
            languages: {
                official: ["Sinhala", "Tamil"],
                regional: ["English"],
                spoken: ["Sinhala", "Tamil", "English"]
            },
            religions: {
                dominant: "Buddhism",
                breakdown: {
                    "Buddhism": 70.2,
                    "Hinduism": 12.6,
                    "Islam": 9.7,
                    "Christianity": 7.4,
                    "Other": 0.1
                }
            },
            heritageSites: [
                { name: "Sacred City of Anuradhapura", type: "Cultural", year: 1982, description: "Ancient Buddhist capital" },
                { name: "Ancient City of Polonnaruwa", type: "Cultural", year: 1982, description: "Medieval capital" },
                { name: "Ancient City of Sigiriya", type: "Cultural", year: 1982, description: "Rock fortress" },
                { name: "Sacred City of Kandy", type: "Cultural", year: 1988, description: "Last royal capital" },
                { name: "Old Town of Galle", type: "Cultural", year: 1988, description: "Colonial fort" },
                { name: "Sinharaja Forest Reserve", type: "Natural", year: 1988, description: "Tropical rainforest" },
                { name: "Dambulla Cave Temple", type: "Cultural", year: 1991, description: "Rock temple complex" },
                { name: "Central Highlands", type: "Natural", year: 2010, description: "Mountain ecosystem" }
            ],
            festivals: [
                { name: "Sinhala and Tamil New Year", date: "April 13-14", description: "National New Year" },
                { name: "Vesak", date: "May", description: "Buddha's birthday" },
                { name: "Kandy Esala Perahera", date: "July-August", description: "Grand Buddhist procession" },
                { name: "Thai Pongal", date: "January", description: "Tamil harvest festival" }
            ],
            cuisine: [
                { name: "Rice and Curry", description: "National staple with multiple curries" },
                { name: "Hoppers", description: "Bowl-shaped pancakes" },
                { name: "Kottu", description: "Chopped roti with vegetables and meat" },
                { name: "String Hoppers", description: "Rice noodle nests" },
                { name: "Lamprais", description: "Dutch Burgher rice dish" }
            ],
            arts: [
                { type: "Dance", description: "Kandyan, low-country, and Sabaragamuwa traditions" },
                { type: "Architecture", description: "Buddhist temples, colonial buildings" },
                { type: "Crafts", description: "Batik, lacquerware, masks" },
                { type: "Literature", description: "Rich Sinhalese and Tamil traditions" }
            ],
            sports: {
                popular: ["Cricket", "Volleyball", "Football", "Rugby"],
                achievements: ["1996 Cricket World Cup champions", "Strong cricket tradition"],
                venues: ["R. Premadasa Stadium", "Galle International Stadium"]
            }
        },
        
        history: {
            timeline: [
                { year: "543 BC", event: "Prince Vijaya arrives, Sinhalese civilization begins" },
                { year: "3rd century BC", event: "Buddhism introduced by Mahinda" },
                { year: "1505", event: "Portuguese arrive" },
                { year: "1658", event: "Dutch colonial rule" },
                { year: "1796", event: "British take control" },
                { year: "1815", event: "Entire island under British rule" },
                { year: "1948", event: "Independence from Britain" },
                { year: "1972", event: "Republic declared, name changed to Sri Lanka" },
                { year: "1983-2009", event: "Civil War with Tamil Tigers" },
                { year: "2019", event: "Easter Sunday bombings" },
                { year: "2022", event: "Economic crisis and political upheaval" }
            ],
            colonialHistory: "Portuguese 1505-1658, Dutch 1658-1796, British 1796-1948",
            historicalNames: ["Ceylon", "Serendib", "Taprobane"]
        },
        
        demographics: {
            ethnicGroups: {
                "Sinhalese": 74.9,
                "Sri Lankan Tamil": 11.2,
                "Sri Lankan Moor": 9.2,
                "Indian Tamil": 4.2,
                "Other": 0.5
            },
            ageStructure: {
                "0-14": 23.0,
                "15-64": 66.0,
                "65+": 11.0
            },
            urbanization: 18.7,
            lifeExpectancy: 77.5,
            fertilityRate: 2.2,
            literacyRate: 92.3
        },
        
        quickFacts: {
            internet: { tld: ".lk", penetration: 52.0 },
            calling: { code: "+94" },
            electricity: { voltage: "230V", frequency: "50Hz", plugType: "D, G" },
            measurement: "Metric",
            emergencyNumber: "119"
        },
        
        disputes: [],
        
        funFacts: [
            "Sri Lanka has the oldest human-planted tree (over 2,200 years old)",
            "The country was called Ceylon until 1972",
            "Sri Lanka is the world's largest tea exporter",
            "The island has eight UNESCO World Heritage Sites",
            "Sri Lanka has the highest biodiversity density in Asia"
        ]
    },

    "maldives": {
        name: "Maldives",
        officialName: "Republic of Maldives",
        nativeName: "ދިވެހިރާއްޖޭގެ ޖުމްހޫރިއްޔާ",
        iso3: "MDV",
        iso2: "MV",
        flag: "🇲🇻",
        
        capital: {
            name: "Malé",
            population: 252000,
            coordinates: { lat: 4.1755, lng: 73.5093 }
        },
        largestCity: "Malé",
        population: {
            total: 523000,
            year: 2024,
            density: 1758,
            growth: 0.5
        },
        area: {
            total: 298,
            land: 298,
            water: 0,
            rank: 187
        },
        
        continent: "Asia",
        region: "South Asia",
        subregion: "Indian Ocean",
        coordinates: { lat: 3.2028, lng: 73.2207 },
        borders: [],
        coastline: 644,
        timezone: ["UTC+5"],
        drivingSide: "left",
        
        governmentType: "Presidential republic",
        leader: {
            headOfState: "President Mohamed Muizzu",
            headOfGovernment: "President Mohamed Muizzu"
        },
        independence: {
            date: "July 26, 1965",
            from: "United Kingdom"
        },
        nationalDay: { name: "Independence Day", date: "July 26" },
        divisions: {
            type: "atolls",
            count: 20,
            major: ["Malé", "Addu City", "Kulhudhuffushi", "Fuvahmulah"]
        },
        
        economy: {
            gdpTotal: 6500000000,
            gdpPerCapita: 12500,
            gdpGrowth: 8.0,
            currency: { name: "Maldivian rufiyaa", code: "MVR", symbol: "Rf" },
            mainIndustries: ["tourism", "fishing", "boat building", "coconut processing"],
            exports: ["fish", "fish products"],
            imports: ["petroleum", "boats", "food", "consumer goods"],
            majorPartners: ["Thailand", "UAE", "India", "Sri Lanka", "China"]
        },
        hdi: 0.747,
        
        geography_links: {
            rivers: [],
            mountains: [],
            deserts: [],
            forests: [],
            oceans: [
                { name: "Indian Ocean", description: "Surrounds all islands" }
            ],
            seas: [
                { name: "Laccadive Sea", description: "Northern waters" },
                { name: "Arabian Sea", description: "Northern Arabian connection" }
            ],
            lakes: [],
            atolls: [
                { name: "North Malé Atoll", description: "Capital atoll" },
                { name: "South Malé Atoll", description: "Popular tourism area" },
                { name: "Ari Atoll", description: "Diving destination" },
                { name: "Addu Atoll", description: "Southernmost atoll" }
            ]
        },
        
        culture: {
            languages: {
                official: ["Dhivehi"],
                regional: ["English"],
                spoken: ["Dhivehi", "English"]
            },
            religions: {
                dominant: "Islam",
                breakdown: {
                    "Sunni Islam": 100.0
                }
            },
            heritageSites: [],
            festivals: [
                { name: "Eid al-Fitr", date: "After Ramadan", description: "End of fasting" },
                { name: "Eid al-Adha", date: "Islamic calendar", description: "Feast of sacrifice" },
                { name: "Independence Day", date: "July 26", description: "National holiday" },
                { name: "Republic Day", date: "November 11", description: "Republic establishment" }
            ],
            cuisine: [
                { name: "Garudhiya", description: "Fish broth with rice" },
                { name: "Mas Huni", description: "Tuna with coconut and onion" },
                { name: "Rihaakuru", description: "Fish paste" },
                { name: "Kulhi Boakiba", description: "Fish cake" },
                { name: "Hedhikaa", description: "Short eats/snacks" }
            ],
            arts: [
                { type: "Music", description: "Bodu Beru drumming" },
                { type: "Dance", description: "Traditional dances" },
                { type: "Crafts", description: "Lacquerwork, mat weaving" },
                { type: "Architecture", description: "Historic coral stone mosques" }
            ],
            sports: {
                popular: ["Football", "Volleyball", "Cricket", "Water sports"],
                achievements: ["Growing football tradition"],
                venues: ["Galolhu National Stadium"]
            }
        },
        
        history: {
            timeline: [
                { year: "5th century", event: "Buddhist kingdom established" },
                { year: "1153", event: "Conversion to Islam" },
                { year: "1558", event: "Portuguese occupation" },
                { year: "1573", event: "Independence restored" },
                { year: "1887", event: "British protectorate" },
                { year: "1965", event: "Independence from Britain" },
                { year: "1968", event: "Republic established, sultanate abolished" },
                { year: "2008", event: "First multi-party elections" },
                { year: "2012", event: "Political crisis" },
                { year: "2023", event: "Mohamed Muizzu elected president" }
            ],
            colonialHistory: "British protectorate 1887-1965",
            historicalNames: ["Maldive Islands", "Dheeva Mahal"]
        },
        
        demographics: {
            ethnicGroups: {
                "Maldivian": 98.0,
                "Other": 2.0
            },
            ageStructure: {
                "0-14": 21.0,
                "15-64": 74.0,
                "65+": 5.0
            },
            urbanization: 41.0,
            lifeExpectancy: 79.0,
            fertilityRate: 1.7,
            literacyRate: 98.6
        },
        
        quickFacts: {
            internet: { tld: ".mv", penetration: 63.0 },
            calling: { code: "+960" },
            electricity: { voltage: "230V", frequency: "50Hz", plugType: "C, D, G, J, K, L" },
            measurement: "Metric",
            emergencyNumber: "119"
        },
        
        disputes: [],
        
        funFacts: [
            "Maldives is the flattest country on Earth (average 1.5m above sea level)",
            "The country consists of 1,192 coral islands in 26 atolls",
            "Only about 200 islands are inhabited",
            "Maldives is the lowest country in the world",
            "The nation could disappear due to rising sea levels"
        ]
    },

    "myanmar": {
        name: "Myanmar",
        officialName: "Republic of the Union of Myanmar",
        nativeName: "ပြည်ထောင်စု သမ္မတ မြန်မာနိုင်ငံတော်",
        iso3: "MMR",
        iso2: "MM",
        flag: "🇲🇲",
        
        capital: {
            name: "Naypyidaw",
            population: 1160000,
            coordinates: { lat: 19.7633, lng: 96.0785 }
        },
        largestCity: "Yangon",
        population: {
            total: 54410000,
            year: 2024,
            density: 83,
            growth: 0.7
        },
        area: {
            total: 676578,
            land: 653508,
            water: 23070,
            rank: 40
        },
        
        continent: "Asia",
        region: "Southeast Asia",
        subregion: "Mainland Southeast Asia",
        coordinates: { lat: 21.9162, lng: 95.9560 },
        borders: ["Bangladesh", "India", "China", "Laos", "Thailand"],
        coastline: 1930,
        timezone: ["UTC+6:30"],
        drivingSide: "right",
        
        governmentType: "Military junta (de facto)",
        leader: {
            headOfState: "Chairman Min Aung Hlaing",
            headOfGovernment: "Chairman Min Aung Hlaing"
        },
        independence: {
            date: "January 4, 1948",
            from: "United Kingdom"
        },
        nationalDay: { name: "Independence Day", date: "January 4" },
        divisions: {
            type: "regions and states",
            count: 14,
            major: ["Yangon", "Mandalay", "Sagaing", "Shan State", "Irrawaddy"]
        },
        
        economy: {
            gdpTotal: 60000000000,
            gdpPerCapita: 1100,
            gdpGrowth: -18.0,
            currency: { name: "Myanmar kyat", code: "MMK", symbol: "K" },
            mainIndustries: ["agricultural processing", "textiles", "wood products", "mining", "construction"],
            exports: ["natural gas", "wood products", "beans", "fish", "rice"],
            imports: ["fabric", "petroleum", "fertilizers", "machinery", "transport equipment"],
            majorPartners: ["Thailand", "China", "India", "Japan", "Singapore"]
        },
        hdi: 0.585,
        
        geography_links: {
            rivers: [
                { name: "Irrawaddy River", description: "Main river, country's lifeline" },
                { name: "Salween River", description: "Major river in east" },
                { name: "Chindwin River", description: "Major tributary of Irrawaddy" },
                { name: "Sittaung River", description: "River in central region" }
            ],
            mountains: [
                { name: "Hkakabo Razi", description: "Southeast Asia's highest peak at 5881m" },
                { name: "Shan Plateau", description: "Large eastern plateau" },
                { name: "Arakan Mountains", description: "Western coastal range" }
            ],
            deserts: [],
            forests: [
                { name: "Tropical rainforests", description: "In Tanintharyi region" },
                { name: "Teak forests", description: "Valuable timber forests" },
                { name: "Mangrove forests", description: "Irrawaddy Delta mangroves" }
            ],
            oceans: [
                { name: "Indian Ocean", description: "Western access" }
            ],
            seas: [
                { name: "Bay of Bengal", description: "Western coast" },
                { name: "Andaman Sea", description: "Southern coast" }
            ],
            lakes: [
                { name: "Inle Lake", description: "Famous floating gardens lake" },
                { name: "Indawgyi Lake", description: "Largest natural lake" }
            ]
        },
        
        culture: {
            languages: {
                official: ["Burmese"],
                regional: ["Shan", "Karen", "Kachin", "Chin", "Mon", "Rakhine"],
                spoken: ["Burmese", "English", "Chinese"]
            },
            religions: {
                dominant: "Buddhism",
                breakdown: {
                    "Theravada Buddhism": 87.9,
                    "Christianity": 6.2,
                    "Islam": 4.3,
                    "Hinduism": 0.5,
                    "Animism": 0.8,
                    "Other": 0.3
                }
            },
            heritageSites: [
                { name: "Pyu Ancient Cities", type: "Cultural", year: 2014, description: "Ancient irrigation cities" },
                { name: "Bagan", type: "Cultural", year: 2019, description: "Ancient temple complex" }
            ],
            festivals: [
                { name: "Thingyan", date: "April", description: "Water festival, New Year" },
                { name: "Thadingyut", date: "October", description: "Festival of lights" },
                { name: "Tazaungdaing", date: "November", description: "Hot air balloon festival" },
                { name: "Ananda Temple Festival", date: "January", description: "Bagan pilgrimage" }
            ],
            cuisine: [
                { name: "Mohinga", description: "National dish - fish rice noodle soup" },
                { name: "Shan noodles", description: "Shan-style rice noodles" },
                { name: "Lahpet Thoke", description: "Fermented tea leaf salad" },
                { name: "Htamin Jin", description: "Rice and curry" },
                { name: "Rakhine Monti", description: "Rice noodles with fish" }
            ],
            arts: [
                { type: "Architecture", description: "Pagodas and temples" },
                { type: "Puppetry", description: "Yama Zatdaw marionettes" },
                { type: "Lacquerware", description: "Traditional Bagan craft" },
                { type: "Dance", description: "Classical Burmese dance" }
            ],
            sports: {
                popular: ["Football", "Chinlone", "Lethwei", "Sepak Takraw"],
                achievements: ["Traditional sports tradition"],
                venues: ["Thuwunna Stadium", "Mandalar Thiri Stadium"]
            }
        },
        
        history: {
            timeline: [
                { year: "849", event: "Pagan Kingdom founded" },
                { year: "1057", event: "First Burmese Empire unified" },
                { year: "1287", event: "Mongol invasions" },
                { year: "1752", event: "Konbaung Dynasty established" },
                { year: "1824-1886", event: "Three Anglo-Burmese Wars" },
                { year: "1886", event: "British Burma established" },
                { year: "1942-1945", event: "Japanese occupation" },
                { year: "1948", event: "Independence from Britain" },
                { year: "1962", event: "Military coup" },
                { year: "1988", event: "Pro-democracy uprising" },
                { year: "2011", event: "Nominal civilian government" },
                { year: "2015", event: "NLD wins elections, Aung San Suu Kyi leads" },
                { year: "2021", event: "Military coup, ongoing civil conflict" }
            ],
            colonialHistory: "British Burma 1886-1948",
            historicalNames: ["Burma"]
        },
        
        demographics: {
            ethnicGroups: {
                "Bamar": 68.0,
                "Shan": 9.0,
                "Karen": 7.0,
                "Rakhine": 3.5,
                "Chinese": 2.5,
                "Mon": 2.0,
                "Kachin": 1.5,
                "Other": 6.5
            },
            ageStructure: {
                "0-14": 25.0,
                "15-64": 68.0,
                "65+": 7.0
            },
            urbanization: 31.4,
            lifeExpectancy: 67.5,
            fertilityRate: 2.1,
            literacyRate: 89.1
        },
        
        quickFacts: {
            internet: { tld: ".mm", penetration: 43.0 },
            calling: { code: "+95" },
            electricity: { voltage: "230V", frequency: "50Hz", plugType: "C, D, F, G" },
            measurement: "Metric (with traditional)",
            emergencyNumber: "199"
        },
        
        disputes: [
            {
                type: "internal",
                description: "Ongoing civil war after 2021 military coup",
                parties: ["Military junta", "National Unity Government", "Ethnic armed groups"],
                status: "Active conflict"
            },
            {
                type: "humanitarian",
                description: "Rohingya refugee crisis",
                parties: ["Myanmar", "Bangladesh"],
                status: "Ongoing crisis"
            }
        ],
        
        funFacts: [
            "Myanmar is one of three countries not using the metric system officially",
            "Bagan has over 2,000 Buddhist monuments",
            "Myanmar produces 90% of the world's rubies",
            "The country was called Burma until 1989",
            "Inle Lake fishermen row with one leg while standing"
        ]
    },

    "laos": {
        name: "Laos",
        officialName: "Lao People's Democratic Republic",
        nativeName: "ສາທາລະນະລັດ ປະຊາທິປະໄຕ ປະຊາຊົນລາວ",
        iso3: "LAO",
        iso2: "LA",
        flag: "🇱🇦",
        
        capital: {
            name: "Vientiane",
            population: 950000,
            coordinates: { lat: 17.9757, lng: 102.6331 }
        },
        largestCity: "Vientiane",
        population: {
            total: 7530000,
            year: 2024,
            density: 32,
            growth: 1.4
        },
        area: {
            total: 236800,
            land: 230800,
            water: 6000,
            rank: 84
        },
        
        continent: "Asia",
        region: "Southeast Asia",
        subregion: "Mainland Southeast Asia",
        coordinates: { lat: 19.8563, lng: 102.4955 },
        borders: ["Myanmar", "China", "Vietnam", "Cambodia", "Thailand"],
        coastline: 0,
        timezone: ["UTC+7"],
        drivingSide: "right",
        
        governmentType: "One-party socialist republic",
        leader: {
            headOfState: "President Thongloun Sisoulith",
            headOfGovernment: "Prime Minister Sonexay Siphandone"
        },
        independence: {
            date: "July 19, 1949",
            from: "France"
        },
        nationalDay: { name: "National Day", date: "December 2" },
        divisions: {
            type: "provinces",
            count: 18,
            major: ["Vientiane Capital", "Savannakhet", "Champasak", "Luang Prabang"]
        },
        
        economy: {
            gdpTotal: 19000000000,
            gdpPerCapita: 2600,
            gdpGrowth: 3.3,
            currency: { name: "Lao kip", code: "LAK", symbol: "₭" },
            mainIndustries: ["mining", "timber", "electricity", "agricultural processing", "tourism"],
            exports: ["electricity", "wood products", "coffee", "tin", "copper", "gold"],
            imports: ["machinery", "vehicles", "fuel", "consumer goods"],
            majorPartners: ["Thailand", "China", "Vietnam", "India", "Japan"]
        },
        hdi: 0.607,
        
        geography_links: {
            rivers: [
                { name: "Mekong River", description: "Major river forming Thai border" },
                { name: "Nam Ou", description: "Major northern tributary" },
                { name: "Nam Khan", description: "River through Luang Prabang" },
                { name: "Xe Bang Fai", description: "River with extensive caves" }
            ],
            mountains: [
                { name: "Phou Bia", description: "Highest peak at 2819m" },
                { name: "Annamite Range", description: "Mountains along Vietnamese border" }
            ],
            deserts: [],
            forests: [
                { name: "Tropical forests", description: "Dense monsoon forests" },
                { name: "Nakai-Nam Theun", description: "Protected forest area" }
            ],
            oceans: [],
            seas: [],
            lakes: [
                { name: "Nam Ngum Reservoir", description: "Largest reservoir" }
            ],
            plateaus: [
                { name: "Bolaven Plateau", description: "Highland agricultural region" },
                { name: "Nakai Plateau", description: "Protected area" }
            ]
        },
        
        culture: {
            languages: {
                official: ["Lao"],
                regional: ["Khmu", "Hmong", "French"],
                spoken: ["Lao", "English", "French", "Thai"]
            },
            religions: {
                dominant: "Buddhism",
                breakdown: {
                    "Theravada Buddhism": 64.7,
                    "Animism": 31.4,
                    "Christianity": 1.7,
                    "Other": 2.2
                }
            },
            heritageSites: [
                { name: "Town of Luang Prabang", type: "Cultural", year: 1995, description: "Former royal capital" },
                { name: "Vat Phou", type: "Cultural", year: 2001, description: "Khmer Hindu temple complex" },
                { name: "Plain of Jars", type: "Cultural", year: 2019, description: "Mysterious megalithic jars" }
            ],
            festivals: [
                { name: "Pi Mai Lao", date: "April", description: "Lao New Year" },
                { name: "Boun Bang Fai", date: "May", description: "Rocket festival" },
                { name: "That Luang Festival", date: "November", description: "Buddhist festival" },
                { name: "Boat Racing Festival", date: "October", description: "End of Buddhist Lent" }
            ],
            cuisine: [
                { name: "Laap", description: "National dish - minced meat salad" },
                { name: "Sticky Rice", description: "Staple food" },
                { name: "Tam Mak Hoong", description: "Green papaya salad" },
                { name: "Ping Kai", description: "Grilled chicken" },
                { name: "Or Lam", description: "Traditional stew" }
            ],
            arts: [
                { type: "Weaving", description: "Traditional silk weaving" },
                { type: "Architecture", description: "Buddhist temples and stupas" },
                { type: "Music", description: "Khene bamboo instrument" },
                { type: "Dance", description: "Lam Vong circle dance" }
            ],
            sports: {
                popular: ["Football", "Sepak Takraw", "Muay Lao", "Petanque"],
                achievements: ["Southeast Asian Games medals"],
                venues: ["New Laos National Stadium"]
            }
        },
        
        history: {
            timeline: [
                { year: "1353", event: "Lan Xang kingdom founded" },
                { year: "1707", event: "Lan Xang splits into three kingdoms" },
                { year: "1893", event: "French protectorate" },
                { year: "1949", event: "Independence within French Union" },
                { year: "1954", event: "Full independence" },
                { year: "1964-1973", event: "Secret War, heavy US bombing" },
                { year: "1975", event: "Communist takeover, Lao PDR established" },
                { year: "1986", event: "Economic reforms begin" },
                { year: "2021", event: "China-Laos Railway opens" }
            ],
            colonialHistory: "French Indochina 1893-1953",
            historicalNames: ["Lan Xang", "Land of a Million Elephants"]
        },
        
        demographics: {
            ethnicGroups: {
                "Lao": 53.2,
                "Khmu": 11.0,
                "Hmong": 9.2,
                "Phouthai": 3.4,
                "Tai": 3.1,
                "Other": 20.1
            },
            ageStructure: {
                "0-14": 30.0,
                "15-64": 66.0,
                "65+": 4.0
            },
            urbanization: 37.0,
            lifeExpectancy: 69.0,
            fertilityRate: 2.5,
            literacyRate: 84.7
        },
        
        quickFacts: {
            internet: { tld: ".la", penetration: 43.0 },
            calling: { code: "+856" },
            electricity: { voltage: "230V", frequency: "50Hz", plugType: "A, B, C, E, F" },
            measurement: "Metric",
            emergencyNumber: "191"
        },
        
        disputes: [],
        
        funFacts: [
            "Laos is the most bombed country in history per capita",
            "The Plain of Jars contains thousands of mysterious stone jars",
            "Laos is the only landlocked country in Southeast Asia",
            "The country is known as the 'Land of a Million Elephants'",
            "Beer Lao is considered one of Asia's best beers"
        ]
    },

    "cambodia": {
        name: "Cambodia",
        officialName: "Kingdom of Cambodia",
        nativeName: "ព្រះរាជាណាចក្រកម្ពុជា",
        iso3: "KHM",
        iso2: "KH",
        flag: "🇰🇭",
        
        capital: {
            name: "Phnom Penh",
            population: 2280000,
            coordinates: { lat: 11.5564, lng: 104.9282 }
        },
        largestCity: "Phnom Penh",
        population: {
            total: 17260000,
            year: 2024,
            density: 95,
            growth: 1.1
        },
        area: {
            total: 181035,
            land: 176515,
            water: 4520,
            rank: 89
        },
        
        continent: "Asia",
        region: "Southeast Asia",
        subregion: "Mainland Southeast Asia",
        coordinates: { lat: 12.5657, lng: 104.9910 },
        borders: ["Thailand", "Laos", "Vietnam"],
        coastline: 443,
        timezone: ["UTC+7"],
        drivingSide: "right",
        
        governmentType: "Constitutional monarchy",
        leader: {
            headOfState: "King Norodom Sihamoni",
            headOfGovernment: "Prime Minister Hun Manet"
        },
        independence: {
            date: "November 9, 1953",
            from: "France"
        },
        nationalDay: { name: "Independence Day", date: "November 9" },
        divisions: {
            type: "provinces",
            count: 25,
            major: ["Phnom Penh", "Siem Reap", "Battambang", "Kandal", "Kampong Cham"]
        },
        
        economy: {
            gdpTotal: 30000000000,
            gdpPerCapita: 1800,
            gdpGrowth: 5.5,
            currency: { name: "Cambodian riel", code: "KHR", symbol: "៛" },
            mainIndustries: ["tourism", "garments", "construction", "rice milling", "fishing"],
            exports: ["clothing", "timber", "rubber", "rice", "fish"],
            imports: ["petroleum", "gold", "construction materials", "machinery", "vehicles"],
            majorPartners: ["USA", "Vietnam", "China", "Japan", "Germany"]
        },
        hdi: 0.593,
        
        geography_links: {
            rivers: [
                { name: "Mekong River", description: "Major river through country" },
                { name: "Tonle Sap River", description: "Connects lake to Mekong" },
                { name: "Bassac River", description: "Branch of Mekong" }
            ],
            mountains: [
                { name: "Cardamom Mountains", description: "Southwestern range" },
                { name: "Phnom Aural", description: "Highest peak at 1813m" },
                { name: "Dângrêk Mountains", description: "Thai border range" }
            ],
            deserts: [],
            forests: [
                { name: "Cardamom rainforest", description: "Southeast Asia's largest rainforest" },
                { name: "Prey Lang Forest", description: "Lowland evergreen forest" }
            ],
            oceans: [],
            seas: [
                { name: "Gulf of Thailand", description: "Southwestern coast" }
            ],
            lakes: [
                { name: "Tonle Sap", description: "Southeast Asia's largest freshwater lake" }
            ]
        },
        
        culture: {
            languages: {
                official: ["Khmer"],
                regional: ["French", "English"],
                spoken: ["Khmer", "English", "French", "Chinese", "Vietnamese"]
            },
            religions: {
                dominant: "Buddhism",
                breakdown: {
                    "Theravada Buddhism": 97.9,
                    "Islam": 1.1,
                    "Christianity": 0.5,
                    "Other": 0.5
                }
            },
            heritageSites: [
                { name: "Angkor", type: "Cultural", year: 1992, description: "Ancient Khmer Empire capital" },
                { name: "Temple of Preah Vihear", type: "Cultural", year: 2008, description: "Hindu temple on cliff" },
                { name: "Sambor Prei Kuk", type: "Cultural", year: 2017, description: "Pre-Angkorian temples" }
            ],
            festivals: [
                { name: "Khmer New Year", date: "April 13-15", description: "Traditional New Year" },
                { name: "Water Festival", date: "November", description: "Boat racing celebration" },
                { name: "Pchum Ben", date: "September-October", description: "Ancestor festival" },
                { name: "King's Birthday", date: "May 13-15", description: "Royal celebration" }
            ],
            cuisine: [
                { name: "Amok", description: "National dish - fish curry in banana leaves" },
                { name: "Lok Lak", description: "Stir-fried beef" },
                { name: "Num Banh Chok", description: "Khmer noodles" },
                { name: "Samlor Korko", description: "Stirring soup" },
                { name: "Prahok", description: "Fermented fish paste" }
            ],
            arts: [
                { type: "Architecture", description: "Angkor temples" },
                { type: "Dance", description: "Apsara classical dance (UNESCO)" },
                { type: "Sculpture", description: "Khmer stone carvings" },
                { type: "Shadow puppetry", description: "Sbek Thom large puppets (UNESCO)" }
            ],
            sports: {
                popular: ["Football", "Kickboxing", "Volleyball", "Sepak Takraw"],
                achievements: ["Bokator martial art tradition", "Growing football"],
                venues: ["Morodok Techo National Stadium", "Olympic Stadium"]
            }
        },
        
        history: {
            timeline: [
                { year: "1st century", event: "Funan kingdom established" },
                { year: "802", event: "Khmer Empire founded by Jayavarman II" },
                { year: "1113-1150", event: "Angkor Wat built under Suryavarman II" },
                { year: "1431", event: "Thai sack Angkor" },
                { year: "1863", event: "French protectorate" },
                { year: "1953", event: "Independence from France" },
                { year: "1975-1979", event: "Khmer Rouge genocide" },
                { year: "1979", event: "Vietnamese invasion, Khmer Rouge ousted" },
                { year: "1991", event: "Paris Peace Accords" },
                { year: "1993", event: "Constitutional monarchy restored" },
                { year: "2023", event: "Hun Manet becomes prime minister" }
            ],
            colonialHistory: "French protectorate 1863-1953",
            historicalNames: ["Khmer Empire", "Kampuchea"]
        },
        
        demographics: {
            ethnicGroups: {
                "Khmer": 97.6,
                "Cham": 1.2,
                "Chinese": 0.1,
                "Vietnamese": 0.1,
                "Other": 1.0
            },
            ageStructure: {
                "0-14": 30.0,
                "15-64": 65.0,
                "65+": 5.0
            },
            urbanization: 24.7,
            lifeExpectancy: 70.5,
            fertilityRate: 2.4,
            literacyRate: 80.5
        },
        
        quickFacts: {
            internet: { tld: ".kh", penetration: 60.0 },
            calling: { code: "+855" },
            electricity: { voltage: "230V", frequency: "50Hz", plugType: "A, C, G" },
            measurement: "Metric",
            emergencyNumber: "117/118/119"
        },
        
        disputes: [
            {
                type: "territorial",
                description: "Temple of Preah Vihear border dispute with Thailand",
                parties: ["Cambodia", "Thailand"],
                status: "ICJ ruled for Cambodia, tensions remain"
            }
        ],
        
        funFacts: [
            "Angkor Wat is the largest religious monument in the world",
            "The Cambodian flag is the only one featuring a building",
            "The Khmer Rouge killed nearly 2 million people (1975-1979)",
            "Tonle Sap reverses flow seasonally - unique in the world",
            "Cambodia has the world's largest hand-woven silk picture"
        ]
    },

    "north_korea": {
        name: "North Korea",
        officialName: "Democratic People's Republic of Korea",
        nativeName: "조선민주주의인민공화국",
        iso3: "PRK",
        iso2: "KP",
        flag: "🇰🇵",
        
        capital: {
            name: "Pyongyang",
            population: 3255000,
            coordinates: { lat: 39.0392, lng: 125.7625 }
        },
        largestCity: "Pyongyang",
        population: {
            total: 26070000,
            year: 2024,
            density: 217,
            growth: 0.4
        },
        area: {
            total: 120538,
            land: 120408,
            water: 130,
            rank: 98
        },
        
        continent: "Asia",
        region: "East Asia",
        subregion: "Korean Peninsula",
        coordinates: { lat: 40.3399, lng: 127.5101 },
        borders: ["South Korea", "China", "Russia"],
        coastline: 2495,
        timezone: ["UTC+9"],
        drivingSide: "right",
        
        governmentType: "One-party totalitarian dictatorship",
        leader: {
            headOfState: "Supreme Leader Kim Jong-un",
            headOfGovernment: "Premier Kim Tok-hun"
        },
        independence: {
            date: "September 9, 1948",
            from: "Division of Korea"
        },
        nationalDay: { name: "Foundation Day", date: "September 9" },
        divisions: {
            type: "provinces",
            count: 9,
            major: ["Pyongyang", "South Pyongan", "North Hamgyong", "South Hamgyong"]
        },
        
        economy: {
            gdpTotal: 28000000000,
            gdpPerCapita: 1100,
            gdpGrowth: -4.0,
            currency: { name: "North Korean won", code: "KPW", symbol: "₩" },
            mainIndustries: ["military products", "machine building", "electricity", "mining", "metallurgy"],
            exports: ["minerals", "metallurgical products", "textiles", "agricultural products"],
            imports: ["petroleum", "grain", "machinery", "textiles"],
            majorPartners: ["China", "Russia"]
        },
        hdi: null,
        
        geography_links: {
            rivers: [
                { name: "Yalu River", description: "Border river with China" },
                { name: "Tumen River", description: "Border with China and Russia" },
                { name: "Taedong River", description: "River through Pyongyang" }
            ],
            mountains: [
                { name: "Mount Paektu", description: "Sacred mountain at 2744m" },
                { name: "Mount Kumgang", description: "Diamond Mountains" },
                { name: "Rangrim Mountains", description: "Central mountain range" }
            ],
            deserts: [],
            forests: [
                { name: "Northern forests", description: "Pine and fir forests" },
                { name: "Mount Kumgang forests", description: "Protected mountain forest" }
            ],
            oceans: [],
            seas: [
                { name: "Sea of Japan/East Sea", description: "Eastern coast" },
                { name: "Yellow Sea", description: "Western coast" }
            ],
            lakes: [
                { name: "Heaven Lake", description: "Crater lake on Mount Paektu" }
            ]
        },
        
        culture: {
            languages: {
                official: ["Korean"],
                regional: [],
                spoken: ["Korean"]
            },
            religions: {
                dominant: "State atheism",
                breakdown: {
                    "Irreligion/Juche": 64.0,
                    "Korean shamanism": 16.0,
                    "Chondoism": 14.0,
                    "Buddhism": 4.0,
                    "Christianity": 2.0
                }
            },
            heritageSites: [
                { name: "Complex of Koguryo Tombs", type: "Cultural", year: 2004, description: "Ancient royal tombs" },
                { name: "Historic Monuments of Kaesong", type: "Cultural", year: 2013, description: "Koryo Dynasty capital" }
            ],
            festivals: [
                { name: "Day of the Sun", date: "April 15", description: "Kim Il-sung's birthday" },
                { name: "Day of the Shining Star", date: "February 16", description: "Kim Jong-il's birthday" },
                { name: "Foundation Day", date: "September 9", description: "National day" },
                { name: "Workers' Party Foundation Day", date: "October 10", description: "Party anniversary" }
            ],
            cuisine: [
                { name: "Naengmyeon", description: "Cold noodles" },
                { name: "Kimchi", description: "Fermented vegetables" },
                { name: "Pyongyang Onban", description: "Rice with meat and vegetables" },
                { name: "Sinseollo", description: "Royal hot pot" },
                { name: "Makkoli", description: "Rice wine" }
            ],
            arts: [
                { type: "Architecture", description: "Monumental socialist architecture" },
                { type: "Mass Games", description: "Large-scale performances" },
                { type: "Music", description: "State-approved patriotic music" },
                { type: "Dance", description: "Traditional and revolutionary dance" }
            ],
            sports: {
                popular: ["Football", "Basketball", "Gymnastics", "Wrestling", "Table Tennis"],
                achievements: ["Olympic weightlifting and wrestling medals"],
                venues: ["May Day Stadium", "Kim Il-sung Stadium"]
            }
        },
        
        history: {
            timeline: [
                { year: "2333 BC", event: "Legendary founding of Gojoseon" },
                { year: "37 BC", event: "Goguryeo kingdom founded" },
                { year: "918", event: "Goryeo dynasty" },
                { year: "1392", event: "Joseon dynasty" },
                { year: "1910", event: "Japanese annexation" },
                { year: "1945", event: "Liberation, division of Korea" },
                { year: "1948", event: "DPRK established under Kim Il-sung" },
                { year: "1950-1953", event: "Korean War" },
                { year: "1994", event: "Kim Jong-il takes power" },
                { year: "2011", event: "Kim Jong-un takes power" },
                { year: "2017", event: "First successful ICBM tests" }
            ],
            colonialHistory: "Japanese occupation 1910-1945",
            historicalNames: ["Joseon", "Chosen"]
        },
        
        demographics: {
            ethnicGroups: {
                "Korean": 99.9,
                "Other": 0.1
            },
            ageStructure: {
                "0-14": 20.0,
                "15-64": 69.0,
                "65+": 11.0
            },
            urbanization: 63.0,
            lifeExpectancy: 72.5,
            fertilityRate: 1.9,
            literacyRate: 100.0
        },
        
        quickFacts: {
            internet: { tld: ".kp", penetration: 0.1 },
            calling: { code: "+850" },
            electricity: { voltage: "220V", frequency: "50Hz", plugType: "A, C, F" },
            measurement: "Metric",
            emergencyNumber: "112"
        },
        
        disputes: [
            {
                type: "political",
                description: "Korean War never officially ended, only armistice",
                parties: ["North Korea", "South Korea", "USA", "China"],
                status: "Ongoing state of war"
            },
            {
                type: "nuclear",
                description: "Nuclear weapons program",
                parties: ["North Korea", "International community"],
                status: "Ongoing sanctions and tensions"
            }
        ],
        
        funFacts: [
            "North Korea has its own calendar starting from Kim Il-sung's birth (Juche calendar)",
            "The May Day Stadium is the world's largest stadium",
            "The country has the fourth-largest military in the world",
            "Only 28 approved hairstyles exist (allegedly)",
            "The DMZ between North and South Korea is 4km wide"
        ]
    },
  
    "taiwan": {
        name: "Taiwan",
        officialName: "Republic of China",
        nativeName: "中華民國 (Zhōnghuá Mínguó)",
        iso3: "TWN",
        iso2: "TW",
        flag: "🇹🇼",
        
        capital: {
            name: "Taipei",
            population: 2600000,
            coordinates: { lat: 25.0330, lng: 121.5654 }
        },
        largestCity: "New Taipei City",
        population: {
            total: 23580000,
            year: 2024,
            density: 655,
            growth: -0.2
        },
        area: {
            total: 36193,
            land: 32260,
            water: 3933,
            rank: 137
        },
        
        continent: "Asia",
        region: "East Asia",
        subregion: "East Asia",
        coordinates: { lat: 23.6978, lng: 120.9605 },
        borders: [],
        coastline: 1566,
        timezone: ["UTC+8"],
        drivingSide: "right",
        
        governmentType: "Semi-presidential republic",
        leader: {
            headOfState: "President Lai Ching-te",
            headOfGovernment: "Premier Cho Jung-tai"
        },
        independence: {
            date: "1912",
            from: "Republic of China established"
        },
        nationalDay: { name: "Double Tenth Day", date: "October 10" },
        divisions: {
            type: "special municipalities and counties",
            count: 22,
            major: ["Taipei", "New Taipei", "Kaohsiung", "Taichung", "Tainan"]
        },
        
        economy: {
            gdpTotal: 790000000000,
            gdpPerCapita: 33500,
            gdpGrowth: 3.5,
            currency: { name: "New Taiwan dollar", code: "TWD", symbol: "NT$" },
            mainIndustries: ["semiconductors", "electronics", "petrochemicals", "machinery", "textiles"],
            exports: ["semiconductors", "electronics", "machinery", "petrochemicals", "plastics"],
            imports: ["oil", "semiconductors", "natural gas", "coal", "machinery"],
            majorPartners: ["China", "USA", "Japan", "Hong Kong", "South Korea"]
        },
        hdi: 0.926,
        
        geography_links: {
            rivers: [
                { name: "Zhuoshui River", description: "Longest river" },
                { name: "Gaoping River", description: "Southern Taiwan" },
                { name: "Tamsui River", description: "Northern Taiwan near Taipei" }
            ],
            mountains: [
                { name: "Yushan (Jade Mountain)", description: "Highest peak at 3952m" },
                { name: "Central Mountain Range", description: "Spine of Taiwan" },
                { name: "Alishan", description: "Famous mountain resort" }
            ],
            deserts: [],
            forests: [
                { name: "Alishan forests", description: "Ancient cypress forests" },
                { name: "Subtropical forests", description: "Lowland forests" },
                { name: "Alpine forests", description: "High mountain forests" }
            ],
            oceans: [
                { name: "Pacific Ocean", description: "Eastern coast" }
            ],
            seas: [
                { name: "Taiwan Strait", description: "Western strait to mainland China" },
                { name: "East China Sea", description: "Northern waters" },
                { name: "South China Sea", description: "Southern waters" }
            ],
            lakes: [
                { name: "Sun Moon Lake", description: "Largest natural lake" }
            ]
        },
        
        culture: {
            languages: {
                official: ["Mandarin Chinese"],
                regional: ["Taiwanese Hokkien", "Hakka", "Indigenous languages"],
                spoken: ["Mandarin", "Taiwanese", "Hakka", "English"]
            },
            religions: {
                dominant: "Buddhism/Taoism mix",
                breakdown: {
                    "Buddhism": 35.0,
                    "Taoism": 33.0,
                    "Folk religion": 10.0,
                    "Christianity": 4.0,
                    "Unaffiliated": 18.0
                }
            },
            heritageSites: [],
            festivals: [
                { name: "Lunar New Year", date: "January-February", description: "Most important festival" },
                { name: "Lantern Festival", date: "15th day of New Year", description: "Lantern displays" },
                { name: "Dragon Boat Festival", date: "June", description: "Dragon boat racing" },
                { name: "Mid-Autumn Festival", date: "September-October", description: "Moon cakes and family" }
            ],
            cuisine: [
                { name: "Bubble Tea", description: "Invented in Taiwan, now worldwide phenomenon" },
                { name: "Beef Noodle Soup", description: "National comfort food" },
                { name: "Xiaolongbao", description: "Soup dumplings" },
                { name: "Oyster Omelette", description: "Night market favorite" },
                { name: "Lu Rou Fan", description: "Braised pork rice" },
                { name: "Gua Bao", description: "Taiwanese pork belly bun" },
                { name: "Stinky Tofu", description: "Famous fermented tofu" }
            ],
            arts: [
                { type: "Chinese Opera", description: "Traditional performing art" },
                { type: "Puppetry", description: "Glove and string puppets" },
                { type: "Calligraphy", description: "Chinese calligraphy tradition" },
                { type: "Contemporary Art", description: "Vibrant modern art scene" }
            ],
            sports: {
                popular: ["Baseball", "Basketball", "Badminton", "Martial arts", "Golf"],
                achievements: ["Little League World Series champions", "Olympic medals in weightlifting, taekwondo"],
                venues: ["Taipei Dome", "Kaohsiung National Stadium"]
            }
        },
        
        history: {
            timeline: [
                { year: "1624", event: "Dutch colonial rule begins" },
                { year: "1662", event: "Koxinga expels Dutch, Kingdom of Tungning" },
                { year: "1683", event: "Qing Dynasty annexation" },
                { year: "1895", event: "Treaty of Shimonoseki, Japanese rule begins" },
                { year: "1945", event: "End of WWII, ROC takes control" },
                { year: "1949", event: "ROC government retreats to Taiwan after Civil War" },
                { year: "1971", event: "UN seat transferred to PRC" },
                { year: "1987", event: "Martial law lifted" },
                { year: "1996", event: "First direct presidential election" },
                { year: "2000", event: "First peaceful transfer of power" },
                { year: "2024", event: "Lai Ching-te elected president" }
            ],
            colonialHistory: "Dutch 1624-1662, Japanese 1895-1945",
            historicalNames: ["Formosa", "Republic of China"]
        },
        
        demographics: {
            ethnicGroups: {
                "Han Chinese (Hoklo)": 70.0,
                "Han Chinese (Hakka)": 14.0,
                "Mainlanders": 14.0,
                "Indigenous peoples": 2.0
            },
            ageStructure: {
                "0-14": 12.0,
                "15-64": 70.0,
                "65+": 18.0
            },
            urbanization: 79.0,
            lifeExpectancy: 81.0,
            fertilityRate: 1.1,
            literacyRate: 98.9
        },
        
        quickFacts: {
            internet: { tld: ".tw", penetration: 92.0 },
            calling: { code: "+886" },
            electricity: { voltage: "110V", frequency: "60Hz", plugType: "A, B" },
            measurement: "Metric",
            emergencyNumber: "110/119"
        },
        
        disputes: [
            {
                type: "sovereignty",
                description: "Disputed status with People's Republic of China",
                parties: ["Taiwan (ROC)", "China (PRC)"],
                status: "Ongoing - PRC claims Taiwan as province"
            },
            {
                type: "territorial",
                description: "Spratly Islands claims",
                parties: ["Taiwan", "China", "Vietnam", "Philippines", "Malaysia", "Brunei"],
                status: "Ongoing"
            }
        ],
        
        funFacts: [
            "Taiwan invented bubble tea (boba) in the 1980s",
            "Taiwan was the first Asian country to legalize same-sex marriage",
            "Taiwan produces over 90% of the world's advanced semiconductors",
            "Taipei 101 was the world's tallest building from 2004-2010",
            "Taiwan has the most 24-hour convenience stores per capita",
            "The island has over 100 peaks above 3000 meters"
        ]
    },

    "jamaica": {
        name: "Jamaica",
        officialName: "Jamaica",
        nativeName: "Jamaica",
        iso3: "JAM",
        iso2: "JM",
        flag: "🇯🇲",
        
        capital: {
            name: "Kingston",
            population: 670000,
            coordinates: { lat: 18.0179, lng: -76.8099 }
        },
        largestCity: "Kingston",
        population: {
            total: 2820000,
            year: 2024,
            density: 257,
            growth: 0.1
        },
        area: {
            total: 10991,
            land: 10831,
            water: 160,
            rank: 166
        },
        
        continent: "North America",
        region: "Caribbean",
        subregion: "Greater Antilles",
        coordinates: { lat: 18.1096, lng: -77.2975 },
        borders: [],
        coastline: 1022,
        timezone: ["UTC-5"],
        drivingSide: "left",
        
        governmentType: "Parliamentary constitutional monarchy",
        leader: {
            headOfState: "King Charles III (represented by Governor-General Patrick Allen)",
            headOfGovernment: "Prime Minister Andrew Holness"
        },
        independence: {
            date: "August 6, 1962",
            from: "United Kingdom"
        },
        nationalDay: { name: "Independence Day", date: "August 6" },
        divisions: {
            type: "parishes",
            count: 14,
            major: ["Kingston", "Saint Andrew", "Saint Catherine", "Manchester", "Clarendon"]
        },
        
        economy: {
            gdpTotal: 17000000000,
            gdpPerCapita: 6000,
            gdpGrowth: 3.0,
            currency: { name: "Jamaican dollar", code: "JMD", symbol: "J$" },
            mainIndustries: ["tourism", "bauxite mining", "agriculture", "manufacturing"],
            exports: ["alumina", "bauxite", "sugar", "rum", "coffee", "yams"],
            imports: ["food", "consumer goods", "fuel", "machinery"],
            majorPartners: ["USA", "Canada", "Netherlands", "UK", "China"]
        },
        hdi: 0.709,
        
        geography_links: {
            rivers: [
                { name: "Black River", description: "Longest navigable river" },
                { name: "Rio Grande", description: "Rafting destination in Portland" },
                { name: "Martha Brae River", description: "Tourist rafting river" }
            ],
            mountains: [
                { name: "Blue Mountains", description: "Home of Blue Mountain coffee" },
                { name: "Blue Mountain Peak", description: "Highest point at 2256m" },
                { name: "John Crow Mountains", description: "Eastern mountain range" }
            ],
            deserts: [],
            forests: [
                { name: "Blue and John Crow Mountains", description: "UNESCO rainforest" },
                { name: "Cockpit Country", description: "Unique karst landscape" }
            ],
            oceans: [],
            seas: [
                { name: "Caribbean Sea", description: "Southern coast" }
            ],
            lakes: []
        },
        
        culture: {
            languages: {
                official: ["English"],
                regional: ["Jamaican Patois"],
                spoken: ["English", "Jamaican Patois"]
            },
            religions: {
                dominant: "Christianity",
                breakdown: {
                    "Protestant": 64.8,
                    "Catholic": 2.2,
                    "Rastafari": 1.1,
                    "Other": 6.5,
                    "Unaffiliated": 21.3
                }
            },
            heritageSites: [
                { name: "Blue and John Crow Mountains", type: "Mixed", year: 2015, description: "Cultural and natural heritage" }
            ],
            festivals: [
                { name: "Jamaica Carnival", date: "March-April", description: "Colorful carnival celebration" },
                { name: "Reggae Sumfest", date: "July", description: "Major reggae music festival" },
                { name: "Independence Day", date: "August 6", description: "National celebration" },
                { name: "Bob Marley Birthday", date: "February 6", description: "Celebration of reggae icon" }
            ],
            cuisine: [
                { name: "Ackee and Saltfish", description: "National dish" },
                { name: "Jerk Chicken", description: "Iconic spiced grilled chicken" },
                { name: "Curry Goat", description: "Popular curry dish" },
                { name: "Rice and Peas", description: "Staple side dish" },
                { name: "Patties", description: "Flaky meat-filled pastries" },
                { name: "Rum Punch", description: "Traditional cocktail" }
            ],
            arts: [
                { type: "Music", description: "Birthplace of reggae, ska, dancehall" },
                { type: "Dance", description: "Dancehall culture" },
                { type: "Visual Arts", description: "Intuitive art movement" },
                { type: "Literature", description: "Caribbean literary tradition" }
            ],
            sports: {
                popular: ["Cricket", "Football", "Athletics", "Netball"],
                achievements: ["Usain Bolt - fastest man ever", "Olympic sprint dominance", "Cricket World Cup finalists"],
                venues: ["National Stadium", "Sabina Park"]
            }
        },
        
        history: {
            timeline: [
                { year: "600 AD", event: "Taino people settle island" },
                { year: "1494", event: "Columbus arrives" },
                { year: "1509", event: "Spanish colonization begins" },
                { year: "1655", event: "British capture Jamaica" },
                { year: "1692", event: "Port Royal earthquake" },
                { year: "1834", event: "Slavery abolished" },
                { year: "1865", event: "Morant Bay Rebellion" },
                { year: "1962", event: "Independence from United Kingdom" },
                { year: "1966", event: "Haile Selassie visits, boosting Rastafari" },
                { year: "1980s", event: "Reggae gains global popularity" }
            ],
            colonialHistory: "Spanish 1509-1655, British 1655-1962",
            historicalNames: ["Xaymaca", "Santiago"]
        },
        
        demographics: {
            ethnicGroups: {
                "Black": 92.1,
                "Mixed": 6.1,
                "East Indian": 0.8,
                "Other": 1.0
            },
            ageStructure: {
                "0-14": 24.0,
                "15-64": 66.0,
                "65+": 10.0
            },
            urbanization: 56.3,
            lifeExpectancy: 75.0,
            fertilityRate: 2.0,
            literacyRate: 88.7
        },
        
        quickFacts: {
            internet: { tld: ".jm", penetration: 68.0 },
            calling: { code: "+1-876" },
            electricity: { voltage: "110V", frequency: "50Hz", plugType: "A, B" },
            measurement: "Metric (with imperial)",
            emergencyNumber: "119"
        },
        
        disputes: [],
        
        funFacts: [
            "Jamaica is the birthplace of reggae music and Bob Marley",
            "Usain Bolt, the fastest human ever, is Jamaican",
            "Jamaica was the first Caribbean country to gain independence",
            "Blue Mountain Coffee is among the world's most expensive",
            "The James Bond creator Ian Fleming wrote many books in Jamaica",
            "Ackee, the national fruit, is poisonous if not prepared correctly"
        ]
    },

    "trinidad_and_tobago": {
        name: "Trinidad and Tobago",
        officialName: "Republic of Trinidad and Tobago",
        nativeName: "Republic of Trinidad and Tobago",
        iso3: "TTO",
        iso2: "TT",
        flag: "🇹🇹",
        
        capital: {
            name: "Port of Spain",
            population: 37000,
            coordinates: { lat: 10.6596, lng: -61.5086 }
        },
        largestCity: "Chaguanas",
        population: {
            total: 1530000,
            year: 2024,
            density: 298,
            growth: 0.3
        },
        area: {
            total: 5131,
            land: 5128,
            water: 3,
            rank: 172
        },
        
        continent: "North America",
        region: "Caribbean",
        subregion: "Southern Caribbean",
        coordinates: { lat: 10.6918, lng: -61.2225 },
        borders: [],
        coastline: 362,
        timezone: ["UTC-4"],
        drivingSide: "left",
        
        governmentType: "Parliamentary republic",
        leader: {
            headOfState: "President Christine Kangaloo",
            headOfGovernment: "Prime Minister Keith Rowley"
        },
        independence: {
            date: "August 31, 1962",
            from: "United Kingdom"
        },
        nationalDay: { name: "Independence Day", date: "August 31" },
        divisions: {
            type: "regions and municipalities",
            count: 14,
            major: ["Port of Spain", "San Fernando", "Chaguanas", "Arima"]
        },
        
        economy: {
            gdpTotal: 27000000000,
            gdpPerCapita: 17600,
            gdpGrowth: 2.0,
            currency: { name: "Trinidad and Tobago dollar", code: "TTD", symbol: "TT$" },
            mainIndustries: ["petroleum", "natural gas", "chemicals", "tourism", "food processing"],
            exports: ["petroleum", "chemicals", "steel", "fertilizers", "sugar"],
            imports: ["mineral fuels", "machinery", "food", "transport equipment"],
            majorPartners: ["USA", "China", "Argentina", "Brazil", "Guyana"]
        },
        hdi: 0.810,
        
        geography_links: {
            rivers: [
                { name: "Caroni River", description: "Longest river in Trinidad" },
                { name: "Ortoire River", description: "Major southern river" }
            ],
            mountains: [
                { name: "Northern Range", description: "Mountain range across northern Trinidad" },
                { name: "El Cerro del Aripo", description: "Highest point at 940m" }
            ],
            deserts: [],
            forests: [
                { name: "Northern Range rainforest", description: "Tropical rainforest" },
                { name: "Nariva Swamp", description: "Freshwater wetland" },
                { name: "Main Ridge Forest Reserve", description: "Oldest protected forest in Western Hemisphere" }
            ],
            oceans: [
                { name: "Atlantic Ocean", description: "Eastern coast" }
            ],
            seas: [
                { name: "Caribbean Sea", description: "Western coast" },
                { name: "Gulf of Paria", description: "Between Trinidad and Venezuela" }
            ],
            lakes: [
                { name: "Pitch Lake", description: "World's largest natural asphalt lake" }
            ]
        },
        
        culture: {
            languages: {
                official: ["English"],
                regional: ["Trinidadian Creole", "Tobagonian Creole", "Hindi", "Spanish"],
                spoken: ["English", "Trinidadian Creole", "Hindi"]
            },
            religions: {
                dominant: "Christianity",
                breakdown: {
                    "Protestant": 32.1,
                    "Catholic": 21.6,
                    "Hindu": 18.2,
                    "Islam": 5.0,
                    "Other": 8.4,
                    "Unaffiliated": 14.7
                }
            },
            heritageSites: [],
            festivals: [
                { name: "Trinidad Carnival", date: "February-March", description: "World's greatest show" },
                { name: "Diwali", date: "October-November", description: "Hindu festival of lights" },
                { name: "Hosay", date: "Islamic calendar", description: "Shia Muslim commemoration" },
                { name: "Tobago Heritage Festival", date: "July-August", description: "Cultural celebration" }
            ],
            cuisine: [
                { name: "Doubles", description: "Curried chickpeas in fried bread" },
                { name: "Roti", description: "Curry wrapped in flatbread" },
                { name: "Pelau", description: "Rice with meat and pigeon peas" },
                { name: "Callaloo", description: "Leafy green stew" },
                { name: "Bake and Shark", description: "Fried shark in fried bread" },
                { name: "Crab and Dumpling", description: "Tobago specialty" }
            ],
            arts: [
                { type: "Music", description: "Birthplace of calypso, soca, and steel pan" },
                { type: "Carnival arts", description: "Mas costumes, wire bending" },
                { type: "Limbo dance", description: "Originated in Trinidad" },
                { type: "Literature", description: "V.S. Naipaul Nobel laureate" }
            ],
            sports: {
                popular: ["Cricket", "Football", "Athletics", "Rugby"],
                achievements: ["Olympic medals in athletics", "Cricket World Cup participation"],
                venues: ["Queen's Park Oval", "Hasely Crawford Stadium"]
            }
        },
        
        history: {
            timeline: [
                { year: "1498", event: "Columbus arrives, names Trinidad" },
                { year: "1592", event: "Spanish colonization of Trinidad" },
                { year: "1797", event: "British capture Trinidad" },
                { year: "1834", event: "Slavery abolished" },
                { year: "1845", event: "Indian indentured labor begins" },
                { year: "1889", event: "Trinidad and Tobago unified" },
                { year: "1962", event: "Independence from United Kingdom" },
                { year: "1976", event: "Republic status" },
                { year: "1990", event: "Attempted coup by Jamaat al Muslimeen" }
            ],
            colonialHistory: "Spanish (Trinidad) 1498-1797, British 1797-1962",
            historicalNames: ["Trinity Island"]
        },
        
        demographics: {
            ethnicGroups: {
                "East Indian": 35.4,
                "African": 34.2,
                "Mixed": 22.8,
                "Other": 7.6
            },
            ageStructure: {
                "0-14": 19.0,
                "15-64": 69.0,
                "65+": 12.0
            },
            urbanization: 53.2,
            lifeExpectancy: 74.0,
            fertilityRate: 1.7,
            literacyRate: 99.0
        },
        
        quickFacts: {
            internet: { tld: ".tt", penetration: 77.0 },
            calling: { code: "+1-868" },
            electricity: { voltage: "115V", frequency: "60Hz", plugType: "A, B" },
            measurement: "Metric",
            emergencyNumber: "999"
        },
        
        disputes: [
            {
                type: "maritime",
                description: "Maritime boundary with Venezuela",
                parties: ["Trinidad and Tobago", "Venezuela"],
                status: "Generally resolved, some discussions ongoing"
            }
        ],
        
        funFacts: [
            "Trinidad and Tobago invented the steel pan (steel drum)",
            "The limbo dance originated here",
            "Pitch Lake is the world's largest natural deposit of asphalt",
            "V.S. Naipaul won the Nobel Prize for Literature in 2001",
            "Trinidad Carnival is considered the greatest show on Earth",
            "The country has the highest GDP per capita in the Caribbean"
        ]
    },

    "bahamas": {
        name: "Bahamas",
        officialName: "Commonwealth of The Bahamas",
        nativeName: "Commonwealth of The Bahamas",
        iso3: "BHS",
        iso2: "BS",
        flag: "🇧🇸",
        
        capital: {
            name: "Nassau",
            population: 280000,
            coordinates: { lat: 25.0343, lng: -77.3963 }
        },
        largestCity: "Nassau",
        population: {
            total: 410000,
            year: 2024,
            density: 30,
            growth: 0.9
        },
        area: {
            total: 13943,
            land: 10010,
            water: 3933,
            rank: 161
        },
        
        continent: "North America",
        region: "Caribbean",
        subregion: "Lucayan Archipelago",
        coordinates: { lat: 25.0343, lng: -77.3963 },
        borders: [],
        coastline: 3542,
        timezone: ["UTC-5"],
        drivingSide: "left",
        
        governmentType: "Parliamentary constitutional monarchy",
        leader: {
            headOfState: "King Charles III (represented by Governor-General Cynthia Pratt)",
            headOfGovernment: "Prime Minister Philip Davis"
        },
        independence: {
            date: "July 10, 1973",
            from: "United Kingdom"
        },
        nationalDay: { name: "Independence Day", date: "July 10" },
        divisions: {
            type: "districts",
            count: 32,
            major: ["New Providence", "Grand Bahama", "Abaco", "Eleuthera", "Exuma"]
        },
        
        economy: {
            gdpTotal: 14000000000,
            gdpPerCapita: 34000,
            gdpGrowth: 4.0,
            currency: { name: "Bahamian dollar", code: "BSD", symbol: "B$" },
            mainIndustries: ["tourism", "banking", "oil refining", "salt production"],
            exports: ["mineral products", "salt", "animal products", "rum"],
            imports: ["machinery", "food", "chemicals", "fuels"],
            majorPartners: ["USA", "Poland", "Germany", "UK", "Singapore"]
        },
        hdi: 0.812,
        
        geography_links: {
            rivers: [],
            mountains: [
                { name: "Mount Alvernia", description: "Highest point at 63m" }
            ],
            deserts: [],
            forests: [
                { name: "Caribbean Pine forests", description: "Native pine forests" },
                { name: "Coppice forests", description: "Subtropical dry forests" },
                { name: "Mangrove wetlands", description: "Coastal mangroves" }
            ],
            oceans: [
                { name: "Atlantic Ocean", description: "Eastern waters" }
            ],
            seas: [
                { name: "Caribbean Sea", description: "Western waters" }
            ],
            lakes: [],
            islands: [
                { name: "New Providence", description: "Location of capital Nassau" },
                { name: "Grand Bahama", description: "Second most populous island" },
                { name: "Andros", description: "Largest island by area" },
                { name: "Eleuthera", description: "Long narrow island" },
                { name: "Exuma", description: "Chain of 365 cays" }
            ]
        },
        
        culture: {
            languages: {
                official: ["English"],
                regional: ["Bahamian Creole"],
                spoken: ["English", "Bahamian Creole", "Haitian Creole"]
            },
            religions: {
                dominant: "Christianity",
                breakdown: {
                    "Protestant": 69.9,
                    "Catholic": 12.0,
                    "Other Christian": 13.0,
                    "Other": 5.1
                }
            },
            heritageSites: [],
            festivals: [
                { name: "Junkanoo", date: "December 26 & January 1", description: "Colorful street parade" },
                { name: "Independence Day", date: "July 10", description: "National celebration" },
                { name: "Bahamas Carnival", date: "May", description: "Cultural celebration" },
                { name: "Regatta", date: "Various", description: "Sailing competitions" }
            ],
            cuisine: [
                { name: "Conch Salad", description: "Fresh raw conch with citrus" },
                { name: "Conch Fritters", description: "Deep-fried conch balls" },
                { name: "Crack Conch", description: "Battered and fried conch" },
                { name: "Rock Lobster", description: "Spiny lobster" },
                { name: "Johnnycake", description: "Slightly sweet cornmeal bread" },
                { name: "Guava Duff", description: "Traditional dessert" }
            ],
            arts: [
                { type: "Junkanoo", description: "Elaborate costume making and music" },
                { type: "Straw work", description: "Traditional basket and hat weaving" },
                { type: "Music", description: "Rake and scrape, goombay" },
                { type: "Visual Arts", description: "Vibrant Caribbean art scene" }
            ],
            sports: {
                popular: ["Sailing", "Basketball", "Football", "Athletics", "Swimming"],
                achievements: ["Olympic medals in athletics", "America's Cup participation"],
                venues: ["Thomas A. Robinson National Stadium", "Kendal Isaacs Gymnasium"]
            }
        },
        
        history: {
            timeline: [
                { year: "300-400 AD", event: "Lucayan Taino people settle" },
                { year: "1492", event: "Columbus makes first landfall in Americas" },
                { year: "1513", event: "Spanish depopulate islands" },
                { year: "1648", event: "English Puritans settle Eleuthera" },
                { year: "1718", event: "Woodes Rogers ends pirate republic" },
                { year: "1783", event: "Loyalists arrive after American Revolution" },
                { year: "1834", event: "Slavery abolished" },
                { year: "1964", event: "Internal self-government" },
                { year: "1973", event: "Independence from United Kingdom" },
                { year: "2019", event: "Hurricane Dorian devastates Abaco and Grand Bahama" }
            ],
            colonialHistory: "British 1718-1973",
            historicalNames: ["Lucayan Archipelago"]
        },
        
        demographics: {
            ethnicGroups: {
                "Black": 90.6,
                "White": 4.7,
                "Mixed": 2.1,
                "Other": 2.6
            },
            ageStructure: {
                "0-14": 20.0,
                "15-64": 69.0,
                "65+": 11.0
            },
            urbanization: 83.2,
            lifeExpectancy: 75.5,
            fertilityRate: 1.8,
            literacyRate: 95.6
        },
        
        quickFacts: {
            internet: { tld: ".bs", penetration: 85.0 },
            calling: { code: "+1-242" },
            electricity: { voltage: "120V", frequency: "60Hz", plugType: "A, B" },
            measurement: "Metric (with imperial)",
            emergencyNumber: "911/919"
        },
        
        disputes: [],
        
        funFacts: [
            "Columbus first landed in the Americas in the Bahamas (San Salvador)",
            "The Bahamas consists of 700 islands and 2,400 cays",
            "Only about 30 of the islands are inhabited",
            "The Exuma Cays have swimming pigs",
            "Nassau was once the pirate capital of the Caribbean",
            "The Bahamas has the clearest water in the world"
        ]
    },

    "barbados": {
        name: "Barbados",
        officialName: "Barbados",
        nativeName: "Barbados",
        iso3: "BRB",
        iso2: "BB",
        flag: "🇧🇧",
        
        capital: {
            name: "Bridgetown",
            population: 89000,
            coordinates: { lat: 13.1132, lng: -59.5988 }
        },
        largestCity: "Bridgetown",
        population: {
            total: 288000,
            year: 2024,
            density: 669,
            growth: 0.2
        },
        area: {
            total: 430,
            land: 430,
            water: 0,
            rank: 183
        },
        
        continent: "North America",
        region: "Caribbean",
        subregion: "Lesser Antilles",
        coordinates: { lat: 13.1939, lng: -59.5432 },
        borders: [],
        coastline: 97,
        timezone: ["UTC-4"],
        drivingSide: "left",
        
        governmentType: "Parliamentary republic",
        leader: {
            headOfState: "President Sandra Mason",
            headOfGovernment: "Prime Minister Mia Mottley"
        },
        independence: {
            date: "November 30, 1966",
            from: "United Kingdom"
        },
        nationalDay: { name: "Independence Day", date: "November 30" },
        divisions: {
            type: "parishes",
            count: 11,
            major: ["Saint Michael", "Christ Church", "Saint James", "Saint Philip"]
        },
        
        economy: {
            gdpTotal: 6000000000,
            gdpPerCapita: 20800,
            gdpGrowth: 4.5,
            currency: { name: "Barbadian dollar", code: "BBD", symbol: "Bds$" },
            mainIndustries: ["tourism", "sugar", "light manufacturing", "offshore banking"],
            exports: ["sugar", "rum", "chemicals", "electrical components"],
            imports: ["consumer goods", "machinery", "food", "fuel"],
            majorPartners: ["USA", "Trinidad and Tobago", "UK", "Guyana", "Jamaica"]
        },
        hdi: 0.790,
        
        geography_links: {
            rivers: [],
            mountains: [
                { name: "Mount Hillaby", description: "Highest point at 340m" }
            ],
            deserts: [],
            forests: [
                { name: "Turner's Hall Wood", description: "Remnant tropical forest" }
            ],
            oceans: [
                { name: "Atlantic Ocean", description: "Eastern coast" }
            ],
            seas: [
                { name: "Caribbean Sea", description: "Western coast" }
            ],
            lakes: [],
            caves: [
                { name: "Harrison's Cave", description: "Crystallized limestone cavern" }
            ]
        },
        
        culture: {
            languages: {
                official: ["English"],
                regional: ["Bajan Creole"],
                spoken: ["English", "Bajan Creole"]
            },
            religions: {
                dominant: "Christianity",
                breakdown: {
                    "Protestant": 66.4,
                    "Catholic": 3.8,
                    "Other Christian": 5.4,
                    "Other": 4.5,
                    "Unaffiliated": 19.9
                }
            },
            heritageSites: [
                { name: "Historic Bridgetown and its Garrison", type: "Cultural", year: 2011, description: "Colonial town and military garrison" }
            ],
            festivals: [
                { name: "Crop Over Festival", date: "June-August", description: "Traditional harvest celebration" },
                { name: "Independence Day", date: "November 30", description: "National celebration" },
                { name: "Holetown Festival", date: "February", description: "Commemorates first English settlement" },
                { name: "Oistins Fish Festival", date: "Easter", description: "Fishing village celebration" }
            ],
            cuisine: [
                { name: "Cou-Cou and Flying Fish", description: "National dish" },
                { name: "Macaroni Pie", description: "Bajan-style baked macaroni" },
                { name: "Pudding and Souse", description: "Pickled pork with sweet potato" },
                { name: "Fish Cakes", description: "Fried salt fish fritters" },
                { name: "Cutters", description: "Salt bread sandwiches" },
                { name: "Rum Punch", description: "Traditional cocktail" }
            ],
            arts: [
                { type: "Music", description: "Calypso, soca, spouge, tuk band" },
                { type: "Dance", description: "Landship traditional dance" },
                { type: "Pottery", description: "Chalky Mount pottery tradition" },
                { type: "Literature", description: "George Lamming, Kamau Brathwaite" }
            ],
            sports: {
                popular: ["Cricket", "Football", "Surfing", "Horse racing", "Golf"],
                achievements: ["Cricket legends (Garfield Sobers, Rihanna's global fame)"],
                venues: ["Kensington Oval", "National Stadium"]
            }
        },
        
        history: {
            timeline: [
                { year: "350 AD", event: "Arawak people settle" },
                { year: "1200", event: "Kalinago (Carib) people arrive" },
                { year: "1536", event: "Portuguese explorer Pedro Campos names island" },
                { year: "1625", event: "English claim Barbados" },
                { year: "1627", event: "First English settlers arrive" },
                { year: "1639", event: "House of Assembly established" },
                { year: "1834", event: "Slavery abolished" },
                { year: "1937", event: "Riots lead to social reforms" },
                { year: "1966", event: "Independence from United Kingdom" },
                { year: "2021", event: "Becomes a republic, removes British monarch" }
            ],
            colonialHistory: "British 1625-1966",
            historicalNames: ["Los Barbados"]
        },
        
        demographics: {
            ethnicGroups: {
                "Black": 92.4,
                "Mixed": 3.1,
                "White": 2.7,
                "East Indian": 1.3,
                "Other": 0.5
            },
            ageStructure: {
                "0-14": 17.0,
                "15-64": 68.0,
                "65+": 15.0
            },
            urbanization: 31.1,
            lifeExpectancy: 79.0,
            fertilityRate: 1.6,
            literacyRate: 99.6
        },
        
        quickFacts: {
            internet: { tld: ".bb", penetration: 82.0 },
            calling: { code: "+1-246" },
            electricity: { voltage: "115V", frequency: "50Hz", plugType: "A, B" },
            measurement: "Metric",
            emergencyNumber: "211"
        },
        
        disputes: [],
        
        funFacts: [
            "Barbados is the birthplace of rum",
            "Pop star Rihanna is from Barbados",
            "Barbados became a republic in 2021, removing the British monarch",
            "It's one of the most densely populated countries in the world",
            "Sir Garfield Sobers is considered the greatest cricketer ever",
            "The island has the third-oldest parliament in the Commonwealth (1639)"
        ]
    }
};

// Make available globally
if (typeof window !== 'undefined') {
    window.ENCYCLOPEDIA_DATA_6 = ENCYCLOPEDIA_DATA_6;
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = ENCYCLOPEDIA_DATA_6;
}
