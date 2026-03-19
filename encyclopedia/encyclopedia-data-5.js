// encyclopedia-data-5.js
// Countries 81-100: Serbia to Georgia

const CountriesData5 = {
    "serbia": {
        name: "Serbia",
        officialName: "Republic of Serbia",
        nativeName: "Република Србија (Republika Srbija)",
        iso3: "SRB",
        iso2: "RS",
        flag: "🇷🇸",
        
        capital: {
            name: "Belgrade",
            population: 1400000,
            coordinates: { lat: 44.8176, lng: 20.4633 }
        },
        largestCity: "Belgrade",
        population: {
            total: 6664000,
            year: 2024,
            density: 75,
            growth: -0.5
        },
        area: {
            total: 88361,
            land: 87460,
            water: 901,
            rank: 113
        },
        
        continent: "Europe",
        region: "Balkans",
        subregion: "Southeast Europe",
        coordinates: { lat: 44.0165, lng: 21.0059 },
        borders: ["Hungary", "Romania", "Bulgaria", "North Macedonia", "Kosovo", "Montenegro", "Bosnia and Herzegovina", "Croatia"],
        coastline: 0,
        timezone: ["UTC+1"],
        drivingSide: "right",
        
        governmentType: "Parliamentary republic",
        leader: {
            headOfState: "President Aleksandar Vučić",
            headOfGovernment: "Prime Minister Miloš Vučević"
        },
        independence: {
            date: "June 5, 2006",
            from: "State Union of Serbia and Montenegro"
        },
        nationalDay: { name: "Statehood Day", date: "February 15" },
        divisions: {
            type: "districts",
            count: 29,
            major: ["Belgrade", "Vojvodina", "Šumadija", "South and East Serbia"]
        },
        
        economy: {
            gdpTotal: 75000000000,
            gdpPerCapita: 11300,
            gdpGrowth: 2.5,
            currency: { name: "Serbian dinar", code: "RSD", symbol: "дин." },
            mainIndustries: ["automotive", "food processing", "machinery", "electronics", "pharmaceuticals"],
            exports: ["automobiles", "iron and steel", "rubber", "electrical equipment", "cereals"],
            imports: ["machinery", "fuels", "chemicals", "vehicles", "plastics"],
            majorPartners: ["Germany", "Italy", "Bosnia", "Romania", "Russia"]
        },
        hdi: 0.802,
        
        geography_links: {
            rivers: [
                { name: "Danube", description: "Major river forming border with Croatia and Romania" },
                { name: "Sava", description: "Major tributary joining Danube at Belgrade" },
                { name: "Morava", description: "Principal river of central Serbia" },
                { name: "Tisa", description: "Important river in Vojvodina region" },
                { name: "Drina", description: "River forming border with Bosnia" }
            ],
            mountains: [
                { name: "Kopaonik", description: "Highest mountain range, major ski resort" },
                { name: "Tara", description: "Mountain with ancient Serbian spruce forest" },
                { name: "Zlatibor", description: "Popular mountain resort area" },
                { name: "Fruška Gora", description: "Low mountain range in Vojvodina" },
                { name: "Stara Planina", description: "Balkan Mountains along Bulgarian border" }
            ],
            deserts: [],
            forests: [
                { name: "Tara National Park", description: "UNESCO protected old-growth forest" },
                { name: "Fruška Gora forests", description: "Linden and oak forests with monasteries" },
                { name: "Kopaonik forests", description: "Spruce and beech mountain forests" }
            ],
            oceans: [],
            seas: [],
            lakes: [
                { name: "Đerdap Lake", description: "Reservoir on Danube with Iron Gates" },
                { name: "Silver Lake", description: "Popular recreational lake" },
                { name: "Palić Lake", description: "Natural lake near Subotica" }
            ]
        },
        
        culture: {
            languages: {
                official: ["Serbian"],
                regional: ["Hungarian", "Bosnian", "Romanian", "Albanian", "Croatian"],
                spoken: ["Serbian", "Hungarian", "Romani"]
            },
            religions: {
                dominant: "Serbian Orthodox Christianity",
                breakdown: {
                    "Serbian Orthodox": 84.6,
                    "Catholic": 5.0,
                    "Islam": 3.1,
                    "Protestant": 1.0,
                    "Other": 6.3
                }
            },
            heritageSites: [
                { name: "Stari Ras and Sopoćani", type: "Cultural", year: 1979, description: "Medieval capital and monastery" },
                { name: "Studenica Monastery", type: "Cultural", year: 1986, description: "12th century Orthodox monastery" },
                { name: "Medieval Monuments in Kosovo", type: "Cultural", year: 2004, description: "Serbian Orthodox monasteries" },
                { name: "Gamzigrad-Romuliana", type: "Cultural", year: 2007, description: "Roman palace of Emperor Galerius" }
            ],
            festivals: [
                { name: "EXIT Festival", date: "July", description: "Major European music festival in Novi Sad" },
                { name: "Trumpet Festival", date: "August", description: "Guča brass music celebration" },
                { name: "Slava", date: "Various", description: "Family patron saint day celebrations" },
                { name: "Orthodox Christmas", date: "January 7", description: "Traditional Christmas celebration" }
            ],
            cuisine: [
                { name: "Ćevapi", description: "Grilled minced meat sausages" },
                { name: "Pljeskavica", description: "Serbian spiced meat patty" },
                { name: "Ajvar", description: "Roasted red pepper spread" },
                { name: "Sarma", description: "Stuffed cabbage rolls" },
                { name: "Kajmak", description: "Creamy dairy spread" }
            ],
            arts: [
                { type: "Music", description: "Brass bands, folk music, turbo-folk" },
                { type: "Literature", description: "Rich tradition from Ivo Andrić to modern writers" },
                { type: "Visual Arts", description: "Byzantine icon tradition, modern art scene" },
                { type: "Film", description: "Award-winning directors like Kusturica" }
            ],
            sports: {
                popular: ["Football", "Basketball", "Tennis", "Water polo", "Volleyball"],
                achievements: ["2006 FIBA World Champions", "Olympic tennis medals", "Water polo world champions"],
                venues: ["Red Star Stadium", "Partizan Stadium", "Štark Arena"]
            }
        },
        
        history: {
            timeline: [
                { year: "6th century", event: "Slavic settlement in Balkans" },
                { year: "1166", event: "Stefan Nemanja founds Nemanjić dynasty" },
                { year: "1346", event: "Serbian Empire at peak under Stefan Dušan" },
                { year: "1389", event: "Battle of Kosovo against Ottoman Empire" },
                { year: "1459", event: "Fall to Ottoman rule" },
                { year: "1804", event: "First Serbian Uprising begins" },
                { year: "1878", event: "Independence recognized at Congress of Berlin" },
                { year: "1918", event: "Kingdom of Serbs, Croats and Slovenes formed" },
                { year: "1945", event: "Socialist Yugoslavia established" },
                { year: "1991-1999", event: "Yugoslav Wars period" },
                { year: "2006", event: "Independence after Montenegro separation" },
                { year: "2012", event: "EU candidate status granted" }
            ],
            colonialHistory: null,
            historicalNames: ["Kingdom of Serbia", "Serbian Empire", "Yugoslavia"]
        },
        
        demographics: {
            ethnicGroups: {
                "Serbs": 83.3,
                "Hungarians": 3.5,
                "Roma": 2.1,
                "Bosniaks": 2.0,
                "Others": 9.1
            },
            ageStructure: {
                "0-14": 14.5,
                "15-64": 65.0,
                "65+": 20.5
            },
            urbanization: 56.4,
            lifeExpectancy: 76.0,
            fertilityRate: 1.5,
            literacyRate: 98.1
        },
        
        quickFacts: {
            internet: { tld: ".rs", penetration: 78.4 },
            calling: { code: "+381" },
            electricity: { voltage: "230V", frequency: "50Hz", plugType: "C, F" },
            measurement: "Metric",
            emergencyNumber: "192/193/194"
        },
        
        disputes: [
            {
                type: "territorial",
                description: "Kosovo independence not recognized by Serbia",
                parties: ["Serbia", "Kosovo"],
                status: "Ongoing negotiations"
            }
        ],
        
        funFacts: [
            "Belgrade is one of Europe's oldest continuously inhabited cities",
            "Nikola Tesla was of Serbian heritage",
            "Serbia has the most UNESCO intangible cultural heritage items in Europe",
            "The Cyrillic alphabet was created by Serbian monks"
        ]
    },

    "bulgaria": {
        name: "Bulgaria",
        officialName: "Republic of Bulgaria",
        nativeName: "Република България",
        iso3: "BGR",
        iso2: "BG",
        flag: "🇧🇬",
        
        capital: {
            name: "Sofia",
            population: 1310000,
            coordinates: { lat: 42.6977, lng: 23.3219 }
        },
        largestCity: "Sofia",
        population: {
            total: 6520000,
            year: 2024,
            density: 59,
            growth: -0.7
        },
        area: {
            total: 110879,
            land: 108489,
            water: 2390,
            rank: 103
        },
        
        continent: "Europe",
        region: "Balkans",
        subregion: "Southeast Europe",
        coordinates: { lat: 42.7339, lng: 25.4858 },
        borders: ["Romania", "Serbia", "North Macedonia", "Greece", "Turkey"],
        coastline: 354,
        timezone: ["UTC+2"],
        drivingSide: "right",
        
        governmentType: "Parliamentary republic",
        leader: {
            headOfState: "President Rumen Radev",
            headOfGovernment: "Prime Minister Dimitar Glavchev"
        },
        independence: {
            date: "September 22, 1908",
            from: "Ottoman Empire"
        },
        nationalDay: { name: "Liberation Day", date: "March 3" },
        divisions: {
            type: "provinces",
            count: 28,
            major: ["Sofia City", "Plovdiv", "Varna", "Burgas"]
        },
        
        economy: {
            gdpTotal: 95000000000,
            gdpPerCapita: 14500,
            gdpGrowth: 3.4,
            currency: { name: "Bulgarian lev", code: "BGN", symbol: "лв" },
            mainIndustries: ["IT services", "machinery", "food processing", "tourism", "metals"],
            exports: ["refined petroleum", "copper", "wheat", "machinery", "pharmaceuticals"],
            imports: ["crude petroleum", "copper ore", "cars", "pharmaceuticals", "natural gas"],
            majorPartners: ["Germany", "Romania", "Italy", "Turkey", "Greece"]
        },
        hdi: 0.795,
        
        geography_links: {
            rivers: [
                { name: "Danube", description: "Forms northern border with Romania" },
                { name: "Maritsa", description: "Longest river entirely in Bulgaria" },
                { name: "Iskar", description: "River flowing through Sofia" },
                { name: "Struma", description: "River in southwestern Bulgaria" }
            ],
            mountains: [
                { name: "Rila", description: "Highest mountains in Balkans, includes Musala peak" },
                { name: "Pirin", description: "UNESCO World Heritage mountain range" },
                { name: "Rhodope", description: "Ancient mountains on Greek border" },
                { name: "Balkan Mountains", description: "Central mountain range crossing country" },
                { name: "Vitosha", description: "Mountain overlooking Sofia" }
            ],
            deserts: [],
            forests: [
                { name: "Pirin National Park", description: "Ancient conifer forests" },
                { name: "Strandzha forests", description: "Unique oak forests near Black Sea" },
                { name: "Central Balkan forests", description: "Beech and fir old-growth" }
            ],
            oceans: [],
            seas: [
                { name: "Black Sea", description: "Eastern coast with resort towns" }
            ],
            lakes: [
                { name: "Seven Rila Lakes", description: "Glacial lakes in Rila Mountains" },
                { name: "Lake Srebarna", description: "UNESCO biosphere reserve" },
                { name: "Black Sea coastal lakes", description: "Lagoons along coast" }
            ]
        },
        
        culture: {
            languages: {
                official: ["Bulgarian"],
                regional: ["Turkish", "Romani"],
                spoken: ["Bulgarian", "Turkish", "Russian"]
            },
            religions: {
                dominant: "Eastern Orthodox Christianity",
                breakdown: {
                    "Eastern Orthodox": 59.4,
                    "Islam": 7.8,
                    "Protestant": 1.6,
                    "Catholic": 0.8,
                    "Unaffiliated": 30.4
                }
            },
            heritageSites: [
                { name: "Boyana Church", type: "Cultural", year: 1979, description: "Medieval church with remarkable frescoes" },
                { name: "Rila Monastery", type: "Cultural", year: 1983, description: "Largest Orthodox monastery in Bulgaria" },
                { name: "Rock-Hewn Churches of Ivanovo", type: "Cultural", year: 1979, description: "Medieval rock churches" },
                { name: "Thracian Tomb of Kazanlak", type: "Cultural", year: 1979, description: "4th century BC burial site" },
                { name: "Ancient City of Nessebar", type: "Cultural", year: 1983, description: "Historic Black Sea town" },
                { name: "Pirin National Park", type: "Natural", year: 1983, description: "Mountain wilderness area" }
            ],
            festivals: [
                { name: "Kukeri", date: "January-March", description: "Ancient masked ritual to scare evil spirits" },
                { name: "Martenitsa", date: "March 1", description: "Red and white spring celebration" },
                { name: "Rose Festival", date: "June", description: "Celebration in Rose Valley" },
                { name: "Nestinarstvo", date: "June", description: "Barefoot fire-dancing ritual" }
            ],
            cuisine: [
                { name: "Shopska Salad", description: "Tomato, cucumber, peppers with white cheese" },
                { name: "Banitsa", description: "Filo pastry with cheese" },
                { name: "Tarator", description: "Cold yogurt and cucumber soup" },
                { name: "Kebapche", description: "Grilled minced meat" },
                { name: "Kiselo Mlyako", description: "Famous Bulgarian yogurt" }
            ],
            arts: [
                { type: "Music", description: "Distinctive folk music, famous women's choirs" },
                { type: "Dance", description: "Horo folk dances" },
                { type: "Crafts", description: "Rose oil production, pottery, woodcarving" },
                { type: "Literature", description: "Rich tradition from Ivan Vazov to modern" }
            ],
            sports: {
                popular: ["Football", "Volleyball", "Wrestling", "Weightlifting", "Rhythmic gymnastics"],
                achievements: ["Olympic wrestling gold medals", "Rhythmic gymnastics world champions", "Strong weightlifting tradition"],
                venues: ["Vasil Levski National Stadium", "Arena Armeec"]
            }
        },
        
        history: {
            timeline: [
                { year: "681", event: "First Bulgarian Empire established" },
                { year: "893", event: "Golden Age under Simeon I" },
                { year: "1018", event: "Byzantine conquest" },
                { year: "1185", event: "Second Bulgarian Empire" },
                { year: "1396", event: "Ottoman conquest begins" },
                { year: "1878", event: "Liberation from Ottoman rule" },
                { year: "1908", event: "Full independence declared" },
                { year: "1944", event: "Soviet occupation, communist rule" },
                { year: "1989", event: "Fall of communist regime" },
                { year: "2004", event: "NATO membership" },
                { year: "2007", event: "European Union membership" }
            ],
            colonialHistory: null,
            historicalNames: ["First Bulgarian Empire", "Second Bulgarian Empire", "People's Republic of Bulgaria"]
        },
        
        demographics: {
            ethnicGroups: {
                "Bulgarians": 84.8,
                "Turks": 8.8,
                "Roma": 4.9,
                "Others": 1.5
            },
            ageStructure: {
                "0-14": 14.2,
                "15-64": 63.0,
                "65+": 22.8
            },
            urbanization: 76.0,
            lifeExpectancy: 75.0,
            fertilityRate: 1.6,
            literacyRate: 98.4
        },
        
        quickFacts: {
            internet: { tld: ".bg", penetration: 71.0 },
            calling: { code: "+359" },
            electricity: { voltage: "230V", frequency: "50Hz", plugType: "C, F" },
            measurement: "Metric",
            emergencyNumber: "112"
        },
        
        disputes: [],
        
        funFacts: [
            "Bulgaria is the oldest country in Europe that hasn't changed its name",
            "Bulgarians shake their head for yes and nod for no",
            "Bulgarian yogurt contains unique bacteria named after the country",
            "The Cyrillic alphabet was created in Bulgaria"
        ]
    },

    "croatia": {
        name: "Croatia",
        officialName: "Republic of Croatia",
        nativeName: "Republika Hrvatska",
        iso3: "HRV",
        iso2: "HR",
        flag: "🇭🇷",
        
        capital: {
            name: "Zagreb",
            population: 807000,
            coordinates: { lat: 45.8150, lng: 15.9819 }
        },
        largestCity: "Zagreb",
        population: {
            total: 3850000,
            year: 2024,
            density: 68,
            growth: -0.5
        },
        area: {
            total: 56594,
            land: 55974,
            water: 620,
            rank: 127
        },
        
        continent: "Europe",
        region: "Balkans",
        subregion: "Southeast Europe",
        coordinates: { lat: 45.1000, lng: 15.2000 },
        borders: ["Slovenia", "Hungary", "Serbia", "Bosnia and Herzegovina", "Montenegro"],
        coastline: 5835,
        timezone: ["UTC+1"],
        drivingSide: "right",
        
        governmentType: "Parliamentary republic",
        leader: {
            headOfState: "President Zoran Milanović",
            headOfGovernment: "Prime Minister Andrej Plenković"
        },
        independence: {
            date: "June 25, 1991",
            from: "Yugoslavia"
        },
        nationalDay: { name: "Statehood Day", date: "May 30" },
        divisions: {
            type: "counties",
            count: 21,
            major: ["Zagreb", "Split-Dalmatia", "Primorje-Gorski Kotar", "Osijek-Baranja"]
        },
        
        economy: {
            gdpTotal: 78000000000,
            gdpPerCapita: 20200,
            gdpGrowth: 3.0,
            currency: { name: "Euro", code: "EUR", symbol: "€" },
            mainIndustries: ["tourism", "shipbuilding", "food processing", "pharmaceuticals", "IT"],
            exports: ["machinery", "transport equipment", "textiles", "chemicals", "food"],
            imports: ["machinery", "transport equipment", "fuels", "chemicals", "food"],
            majorPartners: ["Germany", "Italy", "Slovenia", "Bosnia", "Austria"]
        },
        hdi: 0.858,
        
        geography_links: {
            rivers: [
                { name: "Danube", description: "Eastern border river" },
                { name: "Drava", description: "Major river in northern Croatia" },
                { name: "Sava", description: "Flows through Zagreb to Serbia" },
                { name: "Neretva", description: "River in Dalmatia with delta" },
                { name: "Krka", description: "Famous for waterfalls national park" }
            ],
            mountains: [
                { name: "Dinaric Alps", description: "Mountain chain along Adriatic coast" },
                { name: "Velebit", description: "Largest mountain range in Croatia" },
                { name: "Dinara", description: "Highest peak at 1831m" },
                { name: "Učka", description: "Mountain overlooking Kvarner" },
                { name: "Biokovo", description: "Dramatic coastal mountains" }
            ],
            deserts: [],
            forests: [
                { name: "Plitvice Lakes forests", description: "Beech and fir forests around lakes" },
                { name: "Northern Velebit forests", description: "Primeval beech forests" },
                { name: "Paklenica forests", description: "Black pine forests in mountains" }
            ],
            oceans: [],
            seas: [
                { name: "Adriatic Sea", description: "Extensive coastline with over 1000 islands" }
            ],
            lakes: [
                { name: "Plitvice Lakes", description: "UNESCO World Heritage cascading lakes" },
                { name: "Vransko Lake", description: "Largest natural lake" },
                { name: "Lake Jarun", description: "Recreational lake in Zagreb" }
            ]
        },
        
        culture: {
            languages: {
                official: ["Croatian"],
                regional: ["Italian", "Serbian", "Hungarian"],
                spoken: ["Croatian", "English", "German", "Italian"]
            },
            religions: {
                dominant: "Roman Catholicism",
                breakdown: {
                    "Catholic": 86.3,
                    "Orthodox": 4.4,
                    "Islam": 1.5,
                    "Other": 7.8
                }
            },
            heritageSites: [
                { name: "Plitvice Lakes National Park", type: "Natural", year: 1979, description: "Cascading lakes and waterfalls" },
                { name: "Diocletian's Palace", type: "Cultural", year: 1979, description: "Roman emperor's palace in Split" },
                { name: "Old City of Dubrovnik", type: "Cultural", year: 1979, description: "Pearl of the Adriatic" },
                { name: "Euphrasian Basilica", type: "Cultural", year: 1997, description: "Byzantine cathedral in Poreč" },
                { name: "Stari Grad Plain", type: "Cultural", year: 2008, description: "Ancient Greek agricultural landscape" },
                { name: "Trogir", type: "Cultural", year: 1997, description: "Medieval town" }
            ],
            festivals: [
                { name: "Dubrovnik Summer Festival", date: "July-August", description: "Theatre and music festival" },
                { name: "Sinjska Alka", date: "August", description: "Medieval knights tournament" },
                { name: "Ultra Europe", date: "July", description: "Electronic music festival in Split" },
                { name: "Zagreb Advent", date: "December", description: "Best Christmas market in Europe" }
            ],
            cuisine: [
                { name: "Peka", description: "Meat and vegetables cooked under bell-shaped lid" },
                { name: "Ćevapi", description: "Grilled meat sausages" },
                { name: "Pršut", description: "Dalmatian dry-cured ham" },
                { name: "Black Risotto", description: "Squid ink risotto" },
                { name: "Strukli", description: "Cheese-filled pastry from Zagorje" }
            ],
            arts: [
                { type: "Music", description: "Klapa a cappella singing, folk music" },
                { type: "Architecture", description: "Roman, Venetian, and Habsburg influences" },
                { type: "Visual Arts", description: "Naïve art tradition, Ivan Meštrović sculpture" },
                { type: "Literature", description: "Rich literary tradition" }
            ],
            sports: {
                popular: ["Football", "Basketball", "Handball", "Water polo", "Tennis"],
                achievements: ["FIFA World Cup finalists 2018", "Olympic handball, water polo medals", "Wimbledon champions"],
                venues: ["Maksimir Stadium", "Poljud Stadium", "Arena Zagreb"]
            }
        },
        
        history: {
            timeline: [
                { year: "7th century", event: "Croats settle in region" },
                { year: "925", event: "Kingdom of Croatia established" },
                { year: "1102", event: "Personal union with Hungary" },
                { year: "1527", event: "Habsburg rule begins" },
                { year: "1918", event: "Joins Kingdom of Serbs, Croats and Slovenes" },
                { year: "1941-1945", event: "Independent State of Croatia (Nazi puppet state)" },
                { year: "1945", event: "Part of Socialist Yugoslavia" },
                { year: "1991", event: "Independence declared, war begins" },
                { year: "1995", event: "War ends, full territorial control" },
                { year: "2009", event: "NATO membership" },
                { year: "2013", event: "European Union membership" },
                { year: "2023", event: "Joins Eurozone and Schengen Area" }
            ],
            colonialHistory: null,
            historicalNames: ["Kingdom of Croatia", "Kingdom of the Serbs, Croats and Slovenes", "Socialist Republic of Croatia"]
        },
        
        demographics: {
            ethnicGroups: {
                "Croats": 90.4,
                "Serbs": 4.4,
                "Bosniaks": 0.7,
                "Others": 4.5
            },
            ageStructure: {
                "0-14": 14.0,
                "15-64": 63.5,
                "65+": 22.5
            },
            urbanization: 58.0,
            lifeExpectancy: 78.4,
            fertilityRate: 1.5,
            literacyRate: 99.3
        },
        
        quickFacts: {
            internet: { tld: ".hr", penetration: 80.0 },
            calling: { code: "+385" },
            electricity: { voltage: "230V", frequency: "50Hz", plugType: "C, F" },
            measurement: "Metric",
            emergencyNumber: "112"
        },
        
        disputes: [],
        
        funFacts: [
            "The necktie (cravat) was invented in Croatia",
            "Croatia has over 1,000 islands along its coast",
            "Dubrovnik was a filming location for Game of Thrones",
            "The Dalmatian dog breed originated in Croatia"
        ]
    },

    "slovakia": {
        name: "Slovakia",
        officialName: "Slovak Republic",
        nativeName: "Slovenská republika",
        iso3: "SVK",
        iso2: "SK",
        flag: "🇸🇰",
        
        capital: {
            name: "Bratislava",
            population: 440000,
            coordinates: { lat: 48.1486, lng: 17.1077 }
        },
        largestCity: "Bratislava",
        population: {
            total: 5430000,
            year: 2024,
            density: 111,
            growth: 0.0
        },
        area: {
            total: 49035,
            land: 48088,
            water: 947,
            rank: 129
        },
        
        continent: "Europe",
        region: "Central Europe",
        subregion: "Central Europe",
        coordinates: { lat: 48.6690, lng: 19.6990 },
        borders: ["Poland", "Ukraine", "Hungary", "Austria", "Czech Republic"],
        coastline: 0,
        timezone: ["UTC+1"],
        drivingSide: "right",
        
        governmentType: "Parliamentary republic",
        leader: {
            headOfState: "President Peter Pellegrini",
            headOfGovernment: "Prime Minister Robert Fico"
        },
        independence: {
            date: "January 1, 1993",
            from: "Czechoslovakia"
        },
        nationalDay: { name: "Constitution Day", date: "September 1" },
        divisions: {
            type: "regions",
            count: 8,
            major: ["Bratislava", "Košice", "Prešov", "Žilina"]
        },
        
        economy: {
            gdpTotal: 128000000000,
            gdpPerCapita: 23600,
            gdpGrowth: 1.7,
            currency: { name: "Euro", code: "EUR", symbol: "€" },
            mainIndustries: ["automobiles", "electronics", "machinery", "steel", "chemicals"],
            exports: ["vehicles", "machinery", "electrical equipment", "iron and steel", "plastics"],
            imports: ["machinery", "vehicles", "fuels", "electrical equipment", "chemicals"],
            majorPartners: ["Germany", "Czech Republic", "Poland", "France", "Hungary"]
        },
        hdi: 0.848,
        
        geography_links: {
            rivers: [
                { name: "Danube", description: "Forms part of southern border with Hungary" },
                { name: "Váh", description: "Longest Slovak river" },
                { name: "Hron", description: "Central Slovak river" },
                { name: "Hornád", description: "River flowing to Hungary" },
                { name: "Morava", description: "Border river with Austria" }
            ],
            mountains: [
                { name: "High Tatras", description: "Smallest high mountain range in the world" },
                { name: "Low Tatras", description: "Second highest Slovak mountains" },
                { name: "Malá Fatra", description: "Popular mountain range with resorts" },
                { name: "Slovenský Raj", description: "Slovak Paradise National Park" },
                { name: "Carpathians", description: "Arc of mountains across Slovakia" }
            ],
            deserts: [],
            forests: [
                { name: "Primeval Beech Forests", description: "UNESCO World Heritage forests" },
                { name: "Poloniny forests", description: "Wild forests in eastern Slovakia" },
                { name: "Tatra forests", description: "Mountain spruce forests" }
            ],
            oceans: [],
            seas: [],
            lakes: [
                { name: "Štrbské Pleso", description: "Glacial lake in High Tatras" },
                { name: "Sĺňava", description: "Large reservoir" },
                { name: "Zemplínska Šírava", description: "Largest Slovak reservoir" }
            ]
        },
        
        culture: {
            languages: {
                official: ["Slovak"],
                regional: ["Hungarian", "Romani", "Ruthenian", "Ukrainian"],
                spoken: ["Slovak", "Hungarian", "Czech", "English"]
            },
            religions: {
                dominant: "Roman Catholicism",
                breakdown: {
                    "Catholic": 62.0,
                    "Protestant": 5.9,
                    "Greek Catholic": 3.8,
                    "Orthodox": 0.9,
                    "Unaffiliated": 23.8
                }
            },
            heritageSites: [
                { name: "Vlkolínec", type: "Cultural", year: 1993, description: "Preserved medieval village" },
                { name: "Banská Štiavnica", type: "Cultural", year: 1993, description: "Historic mining town" },
                { name: "Spiš Castle", type: "Cultural", year: 1993, description: "One of largest castle complexes in Europe" },
                { name: "Wooden Churches of Slovak Carpathians", type: "Cultural", year: 2008, description: "Historic wooden churches" },
                { name: "Caves of Slovak Karst", type: "Natural", year: 1995, description: "Extensive cave system" },
                { name: "Primeval Beech Forests", type: "Natural", year: 2007, description: "Ancient forests" }
            ],
            festivals: [
                { name: "Východná Folklore Festival", date: "July", description: "Largest folk festival" },
                { name: "Pohoda", date: "July", description: "Major music festival" },
                { name: "Christmas Markets", date: "December", description: "Traditional markets in major cities" },
                { name: "Grape Harvest Festivals", date: "September", description: "Wine region celebrations" }
            ],
            cuisine: [
                { name: "Bryndzové Halušky", description: "National dish - potato dumplings with sheep cheese" },
                { name: "Kapustnica", description: "Traditional sauerkraut soup" },
                { name: "Pirohy", description: "Filled dumplings" },
                { name: "Trdelník", description: "Sweet pastry cooked over open flame" },
                { name: "Lokše", description: "Potato pancakes" }
            ],
            arts: [
                { type: "Music", description: "Rich folk music tradition, fujara instrument" },
                { type: "Crafts", description: "Folk costumes, pottery, woodcarving" },
                { type: "Dance", description: "Traditional folk dances" },
                { type: "Literature", description: "Slovak romantic and modern literature" }
            ],
            sports: {
                popular: ["Ice hockey", "Football", "Biathlon", "Alpine skiing"],
                achievements: ["Ice hockey world champions", "Olympic biathlon medals", "Strong hockey tradition"],
                venues: ["Ondrej Nepela Arena", "Tehelné Pole"]
            }
        },
        
        history: {
            timeline: [
                { year: "5th-6th century", event: "Slavic settlement" },
                { year: "833", event: "Great Moravia established" },
                { year: "907", event: "Hungarian conquest begins" },
                { year: "1000s-1918", event: "Part of Kingdom of Hungary" },
                { year: "1918", event: "Czechoslovakia formed" },
                { year: "1939-1945", event: "Slovak Republic (Nazi client state)" },
                { year: "1945", event: "Czechoslovakia restored" },
                { year: "1948", event: "Communist rule begins" },
                { year: "1968", event: "Prague Spring crushed" },
                { year: "1989", event: "Velvet Revolution" },
                { year: "1993", event: "Peaceful separation from Czech Republic" },
                { year: "2004", event: "EU and NATO membership" },
                { year: "2009", event: "Eurozone membership" }
            ],
            colonialHistory: null,
            historicalNames: ["Upper Hungary", "Czechoslovakia", "Slovak Socialist Republic"]
        },
        
        demographics: {
            ethnicGroups: {
                "Slovaks": 83.8,
                "Hungarians": 7.8,
                "Roma": 2.0,
                "Czechs": 0.6,
                "Others": 5.8
            },
            ageStructure: {
                "0-14": 15.5,
                "15-64": 67.0,
                "65+": 17.5
            },
            urbanization: 53.8,
            lifeExpectancy: 77.5,
            fertilityRate: 1.5,
            literacyRate: 99.6
        },
        
        quickFacts: {
            internet: { tld: ".sk", penetration: 85.0 },
            calling: { code: "+421" },
            electricity: { voltage: "230V", frequency: "50Hz", plugType: "C, E" },
            measurement: "Metric",
            emergencyNumber: "112"
        },
        
        disputes: [],
        
        funFacts: [
            "Slovakia has more castles per capita than any other country",
            "The fujara shepherd's flute is UNESCO intangible heritage",
            "Slovakia produces more cars per capita than any other country",
            "Andy Warhol's parents were from Slovakia"
        ]
    },

    "lithuania": {
        name: "Lithuania",
        officialName: "Republic of Lithuania",
        nativeName: "Lietuvos Respublika",
        iso3: "LTU",
        iso2: "LT",
        flag: "🇱🇹",
        
        capital: {
            name: "Vilnius",
            population: 592000,
            coordinates: { lat: 54.6872, lng: 25.2797 }
        },
        largestCity: "Vilnius",
        population: {
            total: 2794000,
            year: 2024,
            density: 43,
            growth: -0.5
        },
        area: {
            total: 65300,
            land: 62680,
            water: 2620,
            rank: 123
        },
        
        continent: "Europe",
        region: "Baltic States",
        subregion: "Northern Europe",
        coordinates: { lat: 55.1694, lng: 23.8813 },
        borders: ["Latvia", "Belarus", "Poland", "Russia (Kaliningrad)"],
        coastline: 90,
        timezone: ["UTC+2"],
        drivingSide: "right",
        
        governmentType: "Semi-presidential republic",
        leader: {
            headOfState: "President Gitanas Nausėda",
            headOfGovernment: "Prime Minister Ingrida Šimonytė"
        },
        independence: {
            date: "March 11, 1990",
            from: "Soviet Union"
        },
        nationalDay: { name: "Restoration of Independence Day", date: "March 11" },
        divisions: {
            type: "counties",
            count: 10,
            major: ["Vilnius", "Kaunas", "Klaipėda", "Šiauliai"]
        },
        
        economy: {
            gdpTotal: 74000000000,
            gdpPerCapita: 26400,
            gdpGrowth: 1.8,
            currency: { name: "Euro", code: "EUR", symbol: "€" },
            mainIndustries: ["food processing", "electronics", "chemicals", "machinery", "textiles"],
            exports: ["refined petroleum", "furniture", "chemicals", "machinery", "plastics"],
            imports: ["crude petroleum", "natural gas", "machinery", "vehicles", "chemicals"],
            majorPartners: ["Latvia", "Germany", "Poland", "Russia", "Estonia"]
        },
        hdi: 0.875,
        
        geography_links: {
            rivers: [
                { name: "Nemunas", description: "Largest river, flows to Curonian Lagoon" },
                { name: "Neris", description: "River flowing through Vilnius" },
                { name: "Venta", description: "River in western Lithuania" },
                { name: "Šešupė", description: "River on border regions" }
            ],
            mountains: [
                { name: "Aukštojas Hill", description: "Highest point at 294m" },
                { name: "Juozapinė Hill", description: "Second highest point" },
                { name: "Baltic Highlands", description: "Hilly region in east" }
            ],
            deserts: [],
            forests: [
                { name: "Labanoras Forest", description: "One of largest forests" },
                { name: "Dzūkija forests", description: "Pine forests in south" },
                { name: "Žemaitija forests", description: "Mixed forests in west" }
            ],
            oceans: [],
            seas: [
                { name: "Baltic Sea", description: "Western coastline with Curonian Spit" }
            ],
            lakes: [
                { name: "Lake Drūkšiai", description: "Largest lake" },
                { name: "Aukštaitija lakes", description: "Lake region with over 100 lakes" },
                { name: "Curonian Lagoon", description: "Large lagoon behind Curonian Spit" },
                { name: "Lake Tauragnas", description: "Deepest lake at 60.5m" }
            ]
        },
        
        culture: {
            languages: {
                official: ["Lithuanian"],
                regional: ["Polish", "Russian"],
                spoken: ["Lithuanian", "Russian", "Polish", "English"]
            },
            religions: {
                dominant: "Roman Catholicism",
                breakdown: {
                    "Catholic": 77.2,
                    "Orthodox": 4.1,
                    "Old Believers": 0.8,
                    "Lutheran": 0.6,
                    "Unaffiliated": 16.1
                }
            },
            heritageSites: [
                { name: "Vilnius Historic Centre", type: "Cultural", year: 1994, description: "Medieval old town" },
                { name: "Curonian Spit", type: "Cultural", year: 2000, description: "Sand dune peninsula" },
                { name: "Kernavė", type: "Cultural", year: 2004, description: "Medieval capital site" }
            ],
            festivals: [
                { name: "Joninės", date: "June 24", description: "Midsummer celebration" },
                { name: "Kaziuko Mugė", date: "March", description: "Traditional crafts fair" },
                { name: "Song Festival", date: "Every 4 years", description: "UNESCO recognized tradition" },
                { name: "Užgavėnės", date: "February", description: "Pre-Lent carnival" }
            ],
            cuisine: [
                { name: "Cepelinai", description: "Potato dumplings stuffed with meat" },
                { name: "Šaltibarščiai", description: "Cold beet soup" },
                { name: "Kugelis", description: "Potato pudding" },
                { name: "Kibinai", description: "Pastries from Karaite tradition" },
                { name: "Šakotis", description: "Traditional tree cake" }
            ],
            arts: [
                { type: "Music", description: "Sutartinės polyphonic songs (UNESCO)" },
                { type: "Crafts", description: "Amber jewelry, wood carving, weaving" },
                { type: "Literature", description: "Strong poetic tradition" },
                { type: "Dance", description: "Traditional folk dances" }
            ],
            sports: {
                popular: ["Basketball", "Football", "Ice hockey", "Athletics"],
                achievements: ["Multiple European basketball champions", "Olympic basketball medals"],
                venues: ["Žalgiris Arena", "S. Dariaus ir S. Girėno Stadium"]
            }
        },
        
        history: {
            timeline: [
                { year: "1009", event: "First mention in written sources" },
                { year: "1253", event: "Coronation of Mindaugas, Kingdom established" },
                { year: "1386", event: "Union with Poland begins" },
                { year: "1569", event: "Polish-Lithuanian Commonwealth formed" },
                { year: "1795", event: "Russian Empire annexation" },
                { year: "1918", event: "Independence declared" },
                { year: "1940", event: "Soviet occupation" },
                { year: "1941-1944", event: "Nazi German occupation" },
                { year: "1944-1990", event: "Soviet occupation resumed" },
                { year: "1990", event: "First Soviet republic to declare independence" },
                { year: "1991", event: "Soviet recognition, January Events" },
                { year: "2004", event: "EU and NATO membership" },
                { year: "2015", event: "Eurozone membership" }
            ],
            colonialHistory: null,
            historicalNames: ["Grand Duchy of Lithuania", "Polish-Lithuanian Commonwealth", "Lithuanian SSR"]
        },
        
        demographics: {
            ethnicGroups: {
                "Lithuanians": 84.6,
                "Poles": 6.5,
                "Russians": 5.0,
                "Belarusians": 1.1,
                "Others": 2.8
            },
            ageStructure: {
                "0-14": 15.0,
                "15-64": 65.0,
                "65+": 20.0
            },
            urbanization: 68.0,
            lifeExpectancy: 75.5,
            fertilityRate: 1.6,
            literacyRate: 99.8
        },
        
        quickFacts: {
            internet: { tld: ".lt", penetration: 82.0 },
            calling: { code: "+370" },
            electricity: { voltage: "230V", frequency: "50Hz", plugType: "C, F" },
            measurement: "Metric",
            emergencyNumber: "112"
        },
        
        disputes: [],
        
        funFacts: [
            "Lithuanian is one of the oldest surviving languages in the world",
            "Basketball is considered the second religion in Lithuania",
            "The geographical center of Europe is near Vilnius",
            "Lithuania was the last pagan nation in Europe to be Christianized"
        ]
    },

    "slovenia": {
        name: "Slovenia",
        officialName: "Republic of Slovenia",
        nativeName: "Republika Slovenija",
        iso3: "SVN",
        iso2: "SI",
        flag: "🇸🇮",
        
        capital: {
            name: "Ljubljana",
            population: 295000,
            coordinates: { lat: 46.0569, lng: 14.5058 }
        },
        largestCity: "Ljubljana",
        population: {
            total: 2119000,
            year: 2024,
            density: 104,
            growth: 0.2
        },
        area: {
            total: 20273,
            land: 20151,
            water: 122,
            rank: 153
        },
        
        continent: "Europe",
        region: "Central Europe",
        subregion: "Central Europe",
        coordinates: { lat: 46.1512, lng: 14.9955 },
        borders: ["Italy", "Austria", "Hungary", "Croatia"],
        coastline: 47,
        timezone: ["UTC+1"],
        drivingSide: "right",
        
        governmentType: "Parliamentary republic",
        leader: {
            headOfState: "President Nataša Pirc Musar",
            headOfGovernment: "Prime Minister Robert Golob"
        },
        independence: {
            date: "June 25, 1991",
            from: "Yugoslavia"
        },
        nationalDay: { name: "Statehood Day", date: "June 25" },
        divisions: {
            type: "municipalities",
            count: 212,
            major: ["Ljubljana", "Maribor", "Kranj", "Celje"]
        },
        
        economy: {
            gdpTotal: 68000000000,
            gdpPerCapita: 32100,
            gdpGrowth: 2.5,
            currency: { name: "Euro", code: "EUR", symbol: "€" },
            mainIndustries: ["automobiles", "pharmaceuticals", "electric equipment", "tourism", "chemicals"],
            exports: ["vehicles", "pharmaceuticals", "machinery", "furniture", "aluminum"],
            imports: ["machinery", "vehicles", "fuels", "chemicals", "food"],
            majorPartners: ["Germany", "Italy", "Croatia", "Austria", "France"]
        },
        hdi: 0.918,
        
        geography_links: {
            rivers: [
                { name: "Sava", description: "Longest Slovenian river" },
                { name: "Drava", description: "River in northeastern Slovenia" },
                { name: "Soča", description: "Famous emerald-green river" },
                { name: "Mura", description: "River in Prekmurje region" },
                { name: "Krka", description: "Karst river with waterfalls" }
            ],
            mountains: [
                { name: "Julian Alps", description: "Highest mountains including Triglav" },
                { name: "Karavanke", description: "Mountain range on Austrian border" },
                { name: "Kamnik-Savinja Alps", description: "Central Slovenian Alps" },
                { name: "Pohorje", description: "Large forested massif" }
            ],
            deserts: [],
            forests: [
                { name: "Kočevje forests", description: "Largest virgin forests in Europe" },
                { name: "Triglav forests", description: "Alpine forests in national park" },
                { name: "Pohorje forests", description: "Extensive spruce forests" }
            ],
            oceans: [],
            seas: [
                { name: "Adriatic Sea", description: "Short coastal stretch near Italy" }
            ],
            lakes: [
                { name: "Lake Bled", description: "Iconic glacial lake with island church" },
                { name: "Lake Bohinj", description: "Largest permanent lake" },
                { name: "Lake Cerknica", description: "Intermittent karst lake" }
            ],
            caves: [
                { name: "Postojna Cave", description: "Largest show cave in Europe" },
                { name: "Škocjan Caves", description: "UNESCO World Heritage caves" }
            ]
        },
        
        culture: {
            languages: {
                official: ["Slovenian"],
                regional: ["Italian", "Hungarian"],
                spoken: ["Slovenian", "English", "German", "Croatian"]
            },
            religions: {
                dominant: "Roman Catholicism",
                breakdown: {
                    "Catholic": 57.8,
                    "Islam": 2.4,
                    "Orthodox": 2.3,
                    "Protestant": 0.8,
                    "Unaffiliated": 30.0
                }
            },
            heritageSites: [
                { name: "Škocjan Caves", type: "Natural", year: 1986, description: "Massive underground chambers" },
                { name: "Prehistoric Pile Dwellings", type: "Cultural", year: 2011, description: "Ancient lake dwellings" },
                { name: "Heritage of Mercury", type: "Cultural", year: 2012, description: "Idrija mining heritage" },
                { name: "Ancient Beech Forests", type: "Natural", year: 2017, description: "Primeval forests" }
            ],
            festivals: [
                { name: "Kurentovanje", date: "February", description: "UNESCO carnival in Ptuj" },
                { name: "Ljubljana Festival", date: "July-August", description: "Cultural festival" },
                { name: "Lent Festival", date: "June-July", description: "Maribor cultural event" },
                { name: "Martinovanje", date: "November 11", description: "Wine festival" }
            ],
            cuisine: [
                { name: "Potica", description: "Rolled pastry with various fillings" },
                { name: "Kranjska Klobasa", description: "Carniolan sausage" },
                { name: "Štruklji", description: "Rolled dumplings" },
                { name: "Idrijski Žlikrofi", description: "Potato-filled pasta parcels" },
                { name: "Prekmurska Gibanica", description: "Layered pastry" }
            ],
            arts: [
                { type: "Architecture", description: "Jože Plečnik's distinctive style" },
                { type: "Music", description: "Folk tradition and classical" },
                { type: "Literature", description: "France Prešeren national poet" },
                { type: "Beekeeping", description: "Unique painted beehive panels" }
            ],
            sports: {
                popular: ["Skiing", "Basketball", "Football", "Handball", "Cycling"],
                achievements: ["Olympic skiing medals", "European basketball champions 2017", "Tour de France winners"],
                venues: ["Stožice Arena", "Planica ski jumping venue"]
            }
        },
        
        history: {
            timeline: [
                { year: "6th century", event: "Slavic settlement" },
                { year: "623-658", event: "Samo's Empire includes Slovenian lands" },
                { year: "745", event: "Carantania falls under Frankish rule" },
                { year: "1335", event: "Habsburg rule begins" },
                { year: "1918", event: "Joins Kingdom of Serbs, Croats and Slovenes" },
                { year: "1945", event: "Part of Socialist Yugoslavia" },
                { year: "1991", event: "Ten-Day War, independence from Yugoslavia" },
                { year: "2004", event: "EU and NATO membership" },
                { year: "2007", event: "Eurozone membership" },
                { year: "2007", event: "Schengen Area membership" }
            ],
            colonialHistory: null,
            historicalNames: ["Carantania", "Carniola", "Socialist Republic of Slovenia"]
        },
        
        demographics: {
            ethnicGroups: {
                "Slovenes": 83.1,
                "Serbs": 2.0,
                "Croats": 1.8,
                "Bosniaks": 1.1,
                "Others": 12.0
            },
            ageStructure: {
                "0-14": 15.0,
                "15-64": 64.0,
                "65+": 21.0
            },
            urbanization: 55.4,
            lifeExpectancy: 81.5,
            fertilityRate: 1.6,
            literacyRate: 99.7
        },
        
        quickFacts: {
            internet: { tld: ".si", penetration: 86.0 },
            calling: { code: "+386" },
            electricity: { voltage: "230V", frequency: "50Hz", plugType: "C, F" },
            measurement: "Metric",
            emergencyNumber: "112"
        },
        
        disputes: [],
        
        funFacts: [
            "Slovenia is one of the most biodiverse countries in Europe",
            "60% of Slovenia is covered by forest",
            "The country has one of the oldest vines in the world (400+ years)",
            "Slovenia introduced the 'bee' as official protected animal"
        ]
    },

    "latvia": {
        name: "Latvia",
        officialName: "Republic of Latvia",
        nativeName: "Latvijas Republika",
        iso3: "LVA",
        iso2: "LV",
        flag: "🇱🇻",
        
        capital: {
            name: "Riga",
            population: 614000,
            coordinates: { lat: 56.9496, lng: 24.1052 }
        },
        largestCity: "Riga",
        population: {
            total: 1830000,
            year: 2024,
            density: 28,
            growth: -0.8
        },
        area: {
            total: 64589,
            land: 62249,
            water: 2340,
            rank: 124
        },
        
        continent: "Europe",
        region: "Baltic States",
        subregion: "Northern Europe",
        coordinates: { lat: 56.8796, lng: 24.6032 },
        borders: ["Estonia", "Lithuania", "Belarus", "Russia"],
        coastline: 498,
        timezone: ["UTC+2"],
        drivingSide: "right",
        
        governmentType: "Parliamentary republic",
        leader: {
            headOfState: "President Edgars Rinkēvičs",
            headOfGovernment: "Prime Minister Evika Siliņa"
        },
        independence: {
            date: "August 21, 1991",
            from: "Soviet Union"
        },
        nationalDay: { name: "Independence Day", date: "November 18" },
        divisions: {
            type: "municipalities",
            count: 43,
            major: ["Riga", "Daugavpils", "Liepāja", "Jelgava"]
        },
        
        economy: {
            gdpTotal: 44000000000,
            gdpPerCapita: 23900,
            gdpGrowth: 2.0,
            currency: { name: "Euro", code: "EUR", symbol: "€" },
            mainIndustries: ["food processing", "wood processing", "textiles", "telecommunications", "transport"],
            exports: ["wood products", "food products", "metals", "machinery", "textiles"],
            imports: ["machinery", "vehicles", "petroleum", "chemicals", "food"],
            majorPartners: ["Lithuania", "Estonia", "Germany", "Russia", "Sweden"]
        },
        hdi: 0.863,
        
        geography_links: {
            rivers: [
                { name: "Daugava", description: "Largest river, flows through Riga" },
                { name: "Gauja", description: "Most scenic river in national park" },
                { name: "Lielupe", description: "River in central Latvia" },
                { name: "Venta", description: "River with widest waterfall in Europe" }
            ],
            mountains: [
                { name: "Gaiziņkalns", description: "Highest point at 312m" },
                { name: "Vidzeme Upland", description: "Hilly highland region" }
            ],
            deserts: [],
            forests: [
                { name: "Gauja National Park forests", description: "Mixed forests along river valley" },
                { name: "Slītere National Park", description: "Coastal forests with rare species" },
                { name: "Kemeri forests", description: "Swamp forests" }
            ],
            oceans: [],
            seas: [
                { name: "Baltic Sea", description: "Western and northern coastline" },
                { name: "Gulf of Riga", description: "Large bay on northern coast" }
            ],
            lakes: [
                { name: "Lake Lubāns", description: "Largest lake" },
                { name: "Lake Rāzna", description: "Second largest lake" },
                { name: "Lake Engure", description: "Important bird habitat" }
            ]
        },
        
        culture: {
            languages: {
                official: ["Latvian"],
                regional: ["Latgalian", "Russian"],
                spoken: ["Latvian", "Russian", "English"]
            },
            religions: {
                dominant: "Christianity",
                breakdown: {
                    "Lutheran": 34.2,
                    "Catholic": 24.1,
                    "Orthodox": 17.8,
                    "Old Believers": 1.6,
                    "Unaffiliated": 20.0
                }
            },
            heritageSites: [
                { name: "Historic Centre of Riga", type: "Cultural", year: 1997, description: "Art Nouveau architecture" },
                { name: "Struve Geodetic Arc", type: "Cultural", year: 2005, description: "Survey points" }
            ],
            festivals: [
                { name: "Latvian Song and Dance Festival", date: "Every 5 years", description: "UNESCO heritage mass cultural event" },
                { name: "Jāņi", date: "June 23-24", description: "Midsummer celebration" },
                { name: "Riga City Festival", date: "August", description: "City birthday celebration" },
                { name: "Staro Rīga", date: "November", description: "Light festival" }
            ],
            cuisine: [
                { name: "Grey Peas with Bacon", description: "Traditional peasant dish" },
                { name: "Rupjmaize", description: "Dark rye bread" },
                { name: "Sklandrausis", description: "Sweet carrot-potato pie" },
                { name: "Piragi", description: "Bacon-filled pastries" },
                { name: "Kvass", description: "Fermented rye drink" }
            ],
            arts: [
                { type: "Music", description: "Choral tradition, kokle instrument" },
                { type: "Architecture", description: "Art Nouveau capital of Europe" },
                { type: "Crafts", description: "Amber work, linen weaving, ceramics" },
                { type: "Folk Tradition", description: "Dainas folk songs" }
            ],
            sports: {
                popular: ["Ice hockey", "Basketball", "Football", "Bobsled", "Athletics"],
                achievements: ["Olympic bobsled medals", "Strong hockey tradition", "BMX world champions"],
                venues: ["Arena Riga", "Daugava Stadium"]
            }
        },
        
        history: {
            timeline: [
                { year: "9th century", event: "Baltic tribes established" },
                { year: "1201", event: "Riga founded by German crusaders" },
                { year: "1282", event: "Riga joins Hanseatic League" },
                { year: "1561", event: "Livonian War ends, territories divided" },
                { year: "1721", event: "Russian Empire gains control" },
                { year: "1918", event: "Independence declared" },
                { year: "1940", event: "Soviet occupation" },
                { year: "1941-1944", event: "Nazi German occupation" },
                { year: "1944-1991", event: "Soviet occupation resumed" },
                { year: "1991", event: "Independence restored" },
                { year: "2004", event: "EU and NATO membership" },
                { year: "2014", event: "Eurozone membership" }
            ],
            colonialHistory: null,
            historicalNames: ["Livonia", "Courland", "Latvian SSR"]
        },
        
        demographics: {
            ethnicGroups: {
                "Latvians": 62.7,
                "Russians": 24.5,
                "Belarusians": 3.1,
                "Ukrainians": 2.2,
                "Poles": 2.0,
                "Others": 5.5
            },
            ageStructure: {
                "0-14": 16.0,
                "15-64": 63.0,
                "65+": 21.0
            },
            urbanization: 68.3,
            lifeExpectancy: 75.5,
            fertilityRate: 1.6,
            literacyRate: 99.9
        },
        
        quickFacts: {
            internet: { tld: ".lv", penetration: 84.0 },
            calling: { code: "+371" },
            electricity: { voltage: "230V", frequency: "50Hz", plugType: "C, F" },
            measurement: "Metric",
            emergencyNumber: "112"
        },
        
        disputes: [],
        
        funFacts: [
            "Riga has the largest collection of Art Nouveau buildings in the world",
            "Latvia has more than 2,000 lakes",
            "The first Christmas tree was decorated in Riga in 1510",
            "Ventas Rumba is the widest waterfall in Europe"
        ]
    },

    "estonia": {
        name: "Estonia",
        officialName: "Republic of Estonia",
        nativeName: "Eesti Vabariik",
        iso3: "EST",
        iso2: "EE",
        flag: "🇪🇪",
        
        capital: {
            name: "Tallinn",
            population: 454000,
            coordinates: { lat: 59.4370, lng: 24.7536 }
        },
        largestCity: "Tallinn",
        population: {
            total: 1366000,
            year: 2024,
            density: 30,
            growth: 0.1
        },
        area: {
            total: 45228,
            land: 42388,
            water: 2840,
            rank: 132
        },
        
        continent: "Europe",
        region: "Baltic States",
        subregion: "Northern Europe",
        coordinates: { lat: 58.5953, lng: 25.0136 },
        borders: ["Latvia", "Russia"],
        coastline: 3794,
        timezone: ["UTC+2"],
        drivingSide: "right",
        
        governmentType: "Parliamentary republic",
        leader: {
            headOfState: "President Alar Karis",
            headOfGovernment: "Prime Minister Kristen Michal"
        },
        independence: {
            date: "August 20, 1991",
            from: "Soviet Union"
        },
        nationalDay: { name: "Independence Day", date: "February 24" },
        divisions: {
            type: "counties",
            count: 15,
            major: ["Harju", "Tartu", "Ida-Viru", "Pärnu"]
        },
        
        economy: {
            gdpTotal: 41000000000,
            gdpPerCapita: 30000,
            gdpGrowth: 1.5,
            currency: { name: "Euro", code: "EUR", symbol: "€" },
            mainIndustries: ["IT services", "electronics", "wood processing", "telecommunications", "food processing"],
            exports: ["machinery", "wood products", "metals", "food", "vehicles"],
            imports: ["machinery", "vehicles", "fuels", "food", "chemicals"],
            majorPartners: ["Finland", "Latvia", "Germany", "Sweden", "Lithuania"]
        },
        hdi: 0.890,
        
        geography_links: {
            rivers: [
                { name: "Narva", description: "Eastern border river with Russia" },
                { name: "Pärnu", description: "River flowing to resort city" },
                { name: "Emajõgi", description: "River connecting two largest lakes" },
                { name: "Kasari", description: "Western Estonian river" }
            ],
            mountains: [
                { name: "Suur Munamägi", description: "Highest point at 318m" },
                { name: "Haanja Upland", description: "Hilly region in southeast" }
            ],
            deserts: [],
            forests: [
                { name: "Lahemaa forests", description: "Coastal forests in national park" },
                { name: "Alutaguse forests", description: "Wild forests in northeast" },
                { name: "Soomaa forests", description: "Bog and swamp forests" }
            ],
            oceans: [],
            seas: [
                { name: "Baltic Sea", description: "Western coastline" },
                { name: "Gulf of Finland", description: "Northern coast" },
                { name: "Gulf of Riga", description: "Southwestern coast" }
            ],
            lakes: [
                { name: "Lake Peipus", description: "Fifth largest lake in Europe, border with Russia" },
                { name: "Lake Võrtsjärv", description: "Largest lake entirely in Estonia" }
            ],
            islands: [
                { name: "Saaremaa", description: "Largest island" },
                { name: "Hiiumaa", description: "Second largest island" },
                { name: "Muhu", description: "Third largest island" }
            ]
        },
        
        culture: {
            languages: {
                official: ["Estonian"],
                regional: ["Russian"],
                spoken: ["Estonian", "Russian", "English", "Finnish"]
            },
            religions: {
                dominant: "Unaffiliated",
                breakdown: {
                    "Unaffiliated": 54.1,
                    "Orthodox": 16.2,
                    "Lutheran": 9.9,
                    "Other Christian": 2.3,
                    "Other": 17.5
                }
            },
            heritageSites: [
                { name: "Historic Centre of Tallinn", type: "Cultural", year: 1997, description: "Medieval old town" },
                { name: "Struve Geodetic Arc", type: "Cultural", year: 2005, description: "Survey points" }
            ],
            festivals: [
                { name: "Estonian Song Festival", date: "Every 5 years", description: "UNESCO mass singing event" },
                { name: "Jaanipäev", date: "June 23-24", description: "Midsummer celebration" },
                { name: "Tallinn Music Week", date: "May", description: "Music industry showcase" },
                { name: "Tartu Love Film Festival", date: "October", description: "International film event" }
            ],
            cuisine: [
                { name: "Verivorst", description: "Blood sausage, Christmas tradition" },
                { name: "Mulgipuder", description: "Traditional potato-barley porridge" },
                { name: "Kama", description: "Traditional grain mixture" },
                { name: "Sült", description: "Meat jelly" },
                { name: "Kohuke", description: "Curd snack bar" }
            ],
            arts: [
                { type: "Music", description: "Choral tradition, electronic music scene" },
                { type: "Architecture", description: "Medieval old towns, modern design" },
                { type: "Digital Art", description: "Strong tech-art intersection" },
                { type: "Literature", description: "Epic Kalevipoeg, modern writers" }
            ],
            sports: {
                popular: ["Basketball", "Football", "Cross-country skiing", "Athletics", "Cycling"],
                achievements: ["Olympic medals in various sports", "Strong Nordic skiing tradition", "Rally champions"],
                venues: ["A. Le Coq Arena", "Saku Suurhall"]
            }
        },
        
        history: {
            timeline: [
                { year: "9000 BC", event: "First human settlement" },
                { year: "1219", event: "Danish conquest, Tallinn founded" },
                { year: "1346", event: "Sold to Teutonic Order" },
                { year: "1561", event: "Swedish rule begins" },
                { year: "1721", event: "Russian Empire gains control" },
                { year: "1918", event: "Independence declared" },
                { year: "1940", event: "Soviet occupation" },
                { year: "1941-1944", event: "Nazi German occupation" },
                { year: "1944-1991", event: "Soviet occupation resumed" },
                { year: "1989", event: "Baltic Way human chain protest" },
                { year: "1991", event: "Independence restored" },
                { year: "2004", event: "EU and NATO membership" },
                { year: "2011", event: "Eurozone membership" }
            ],
            colonialHistory: null,
            historicalNames: ["Livonia", "Estonian SSR"]
        },
        
        demographics: {
            ethnicGroups: {
                "Estonians": 68.5,
                "Russians": 24.2,
                "Ukrainians": 1.8,
                "Belarusians": 0.9,
                "Finns": 0.6,
                "Others": 4.0
            },
            ageStructure: {
                "0-14": 16.5,
                "15-64": 63.0,
                "65+": 20.5
            },
            urbanization: 69.5,
            lifeExpectancy: 79.0,
            fertilityRate: 1.6,
            literacyRate: 99.8
        },
        
        quickFacts: {
            internet: { tld: ".ee", penetration: 91.0 },
            calling: { code: "+372" },
            electricity: { voltage: "230V", frequency: "50Hz", plugType: "C, F" },
            measurement: "Metric",
            emergencyNumber: "112"
        },
        
        disputes: [],
        
        funFacts: [
            "Estonia is the most digitally advanced country in the world",
            "Skype was invented in Estonia",
            "Estonia offers e-Residency to anyone in the world",
            "Estonia has more than 2,000 islands",
            "99% of government services are available online"
        ]
    },

    "cyprus": {
        name: "Cyprus",
        officialName: "Republic of Cyprus",
        nativeName: "Κυπριακή Δημοκρατία / Kıbrıs Cumhuriyeti",
        iso3: "CYP",
        iso2: "CY",
        flag: "🇨🇾",
        
        capital: {
            name: "Nicosia",
            population: 341000,
            coordinates: { lat: 35.1856, lng: 33.3823 }
        },
        largestCity: "Nicosia",
        population: {
            total: 1260000,
            year: 2024,
            density: 136,
            growth: 0.8
        },
        area: {
            total: 9251,
            land: 9241,
            water: 10,
            rank: 168
        },
        
        continent: "Europe",
        region: "Mediterranean",
        subregion: "Eastern Mediterranean",
        coordinates: { lat: 35.1264, lng: 33.4299 },
        borders: ["UK Sovereign Base Areas"],
        coastline: 648,
        timezone: ["UTC+2"],
        drivingSide: "left",
        
        governmentType: "Presidential republic",
        leader: {
            headOfState: "President Nikos Christodoulides",
            headOfGovernment: "President Nikos Christodoulides"
        },
        independence: {
            date: "August 16, 1960",
            from: "United Kingdom"
        },
        nationalDay: { name: "Independence Day", date: "October 1" },
        divisions: {
            type: "districts",
            count: 6,
            major: ["Nicosia", "Limassol", "Larnaca", "Paphos", "Famagusta", "Kyrenia"]
        },
        
        economy: {
            gdpTotal: 31000000000,
            gdpPerCapita: 35000,
            gdpGrowth: 2.5,
            currency: { name: "Euro", code: "EUR", symbol: "€" },
            mainIndustries: ["tourism", "financial services", "shipping", "food processing", "pharmaceuticals"],
            exports: ["pharmaceuticals", "cement", "clothing", "citrus fruits", "potatoes"],
            imports: ["consumer goods", "petroleum", "machinery", "vehicles", "food"],
            majorPartners: ["Greece", "UK", "Germany", "Israel", "Italy"]
        },
        hdi: 0.896,
        
        geography_links: {
            rivers: [
                { name: "Pedieos", description: "Longest river, usually seasonal" },
                { name: "Yialias", description: "Seasonal river in Larnaca" }
            ],
            mountains: [
                { name: "Troodos Mountains", description: "Main mountain range with Olympus peak" },
                { name: "Kyrenia Range", description: "Northern coastal mountains" }
            ],
            deserts: [],
            forests: [
                { name: "Troodos forests", description: "Pine and cedar forests in mountains" },
                { name: "Paphos Forest", description: "Cedar and pine woods" }
            ],
            oceans: [],
            seas: [
                { name: "Mediterranean Sea", description: "Surrounds the island" }
            ],
            lakes: [
                { name: "Larnaca Salt Lake", description: "Important flamingo habitat" },
                { name: "Paralimni Lake", description: "Freshwater lake" }
            ]
        },
        
        culture: {
            languages: {
                official: ["Greek", "Turkish"],
                regional: ["Armenian"],
                spoken: ["Greek", "Turkish", "English", "Russian"]
            },
            religions: {
                dominant: "Greek Orthodox Christianity",
                breakdown: {
                    "Greek Orthodox": 78.0,
                    "Islam": 18.0,
                    "Maronite": 0.5,
                    "Armenian Apostolic": 0.3,
                    "Other": 3.2
                }
            },
            heritageSites: [
                { name: "Paphos", type: "Cultural", year: 1980, description: "Ancient city with mosaics and tombs" },
                { name: "Painted Churches of Troodos", type: "Cultural", year: 1985, description: "Byzantine churches with frescoes" },
                { name: "Choirokoitia", type: "Cultural", year: 1998, description: "Neolithic settlement" }
            ],
            festivals: [
                { name: "Limassol Carnival", date: "February-March", description: "Largest carnival in Cyprus" },
                { name: "Kataklysmos", date: "June", description: "Festival of the Flood" },
                { name: "Limassol Wine Festival", date: "September", description: "Celebration of wine heritage" },
                { name: "Anthestiria Flower Festival", date: "May", description: "Spring flower celebration" }
            ],
            cuisine: [
                { name: "Halloumi", description: "Famous Cypriot cheese" },
                { name: "Souvlaki", description: "Grilled meat skewers" },
                { name: "Meze", description: "Multiple small dish feast" },
                { name: "Kleftiko", description: "Slow-cooked lamb" },
                { name: "Koupepia", description: "Stuffed vine leaves" }
            ],
            arts: [
                { type: "Music", description: "Traditional folk music, bouzouki" },
                { type: "Dance", description: "Traditional dances like syrtos" },
                { type: "Crafts", description: "Lefkara lace, pottery, basketry" },
                { type: "Architecture", description: "Byzantine churches, traditional villages" }
            ],
            sports: {
                popular: ["Football", "Basketball", "Tennis", "Volleyball", "Swimming"],
                achievements: ["Rally champions", "Growing football league"],
                venues: ["GSP Stadium", "AEK Arena"]
            }
        },
        
        history: {
            timeline: [
                { year: "10000 BC", event: "First human settlement" },
                { year: "1500 BC", event: "Mycenaean Greek colonization" },
                { year: "58 BC", event: "Roman rule begins" },
                { year: "395 AD", event: "Byzantine Empire rule" },
                { year: "1191", event: "Richard I conquers during Crusade" },
                { year: "1489", event: "Venetian rule begins" },
                { year: "1571", event: "Ottoman conquest" },
                { year: "1878", event: "British administration begins" },
                { year: "1960", event: "Independence from Britain" },
                { year: "1974", event: "Turkish invasion and division" },
                { year: "2004", event: "EU membership" },
                { year: "2008", event: "Eurozone membership" }
            ],
            colonialHistory: "British colony 1914-1960",
            historicalNames: ["Alashiya", "Kypros"]
        },
        
        demographics: {
            ethnicGroups: {
                "Greek Cypriots": 77.0,
                "Turkish Cypriots": 18.0,
                "Maronites": 0.5,
                "Armenians": 0.3,
                "Others": 4.2
            },
            ageStructure: {
                "0-14": 15.5,
                "15-64": 68.0,
                "65+": 16.5
            },
            urbanization: 67.0,
            lifeExpectancy: 81.5,
            fertilityRate: 1.3,
            literacyRate: 99.1
        },
        
        quickFacts: {
            internet: { tld: ".cy", penetration: 86.0 },
            calling: { code: "+357" },
            electricity: { voltage: "240V", frequency: "50Hz", plugType: "G" },
            measurement: "Metric",
            emergencyNumber: "112"
        },
        
        disputes: [
            {
                type: "territorial",
                description: "Island divided since 1974; Northern Cyprus recognized only by Turkey",
                parties: ["Republic of Cyprus", "Northern Cyprus", "Turkey", "Greece"],
                status: "Ongoing UN-mediated negotiations"
            }
        ],
        
        funFacts: [
            "Cyprus is the legendary birthplace of Aphrodite, goddess of love",
            "Halloumi cheese has EU protected designation of origin",
            "Nicosia is the world's last divided capital city",
            "Cyprus has some of the oldest water wells in the world"
        ]
    },

    "luxembourg": {
        name: "Luxembourg",
        officialName: "Grand Duchy of Luxembourg",
        nativeName: "Groussherzogtum Lëtzebuerg",
        iso3: "LUX",
        iso2: "LU",
        flag: "🇱🇺",
        
        capital: {
            name: "Luxembourg City",
            population: 132000,
            coordinates: { lat: 49.6116, lng: 6.1319 }
        },
        largestCity: "Luxembourg City",
        population: {
            total: 672000,
            year: 2024,
            density: 260,
            growth: 1.8
        },
        area: {
            total: 2586,
            land: 2586,
            water: 0,
            rank: 175
        },
        
        continent: "Europe",
        region: "Western Europe",
        subregion: "Western Europe",
        coordinates: { lat: 49.8153, lng: 6.1296 },
        borders: ["Belgium", "Germany", "France"],
        coastline: 0,
        timezone: ["UTC+1"],
        drivingSide: "right",
        
        governmentType: "Constitutional monarchy",
        leader: {
            headOfState: "Grand Duke Henri",
            headOfGovernment: "Prime Minister Luc Frieden"
        },
        independence: {
            date: "1839",
            from: "Netherlands"
        },
        nationalDay: { name: "Grand Duke's Official Birthday", date: "June 23" },
        divisions: {
            type: "cantons",
            count: 12,
            major: ["Luxembourg", "Esch-sur-Alzette", "Diekirch", "Grevenmacher"]
        },
        
        economy: {
            gdpTotal: 87000000000,
            gdpPerCapita: 128000,
            gdpGrowth: 1.5,
            currency: { name: "Euro", code: "EUR", symbol: "€" },
            mainIndustries: ["banking", "steel", "information technology", "telecommunications", "tourism"],
            exports: ["machinery", "steel products", "chemicals", "rubber products", "glass"],
            imports: ["minerals", "metals", "food", "machinery", "vehicles"],
            majorPartners: ["Germany", "Belgium", "France", "Netherlands", "Italy"]
        },
        hdi: 0.930,
        
        geography_links: {
            rivers: [
                { name: "Moselle", description: "Wine region river on German border" },
                { name: "Sauer", description: "Major river in north" },
                { name: "Our", description: "River forming part of German border" },
                { name: "Alzette", description: "River through Luxembourg City" }
            ],
            mountains: [
                { name: "Kneiff", description: "Highest point at 560m" },
                { name: "Ardennes", description: "Forested highland in north" },
                { name: "Oesling", description: "Hilly northern region" }
            ],
            deserts: [],
            forests: [
                { name: "Ardennes forests", description: "Dense forests in northern region" },
                { name: "Müllerthal forests", description: "Little Switzerland region" }
            ],
            oceans: [],
            seas: [],
            lakes: [
                { name: "Upper Sûre Lake", description: "Largest lake, reservoir" }
            ]
        },
        
        culture: {
            languages: {
                official: ["Luxembourgish", "French", "German"],
                regional: [],
                spoken: ["Luxembourgish", "French", "German", "Portuguese", "English"]
            },
            religions: {
                dominant: "Roman Catholicism",
                breakdown: {
                    "Catholic": 70.4,
                    "Protestant": 1.8,
                    "Orthodox": 1.7,
                    "Islam": 2.3,
                    "Unaffiliated": 23.0
                }
            },
            heritageSites: [
                { name: "City of Luxembourg", type: "Cultural", year: 1994, description: "Old quarters and fortifications" }
            ],
            festivals: [
                { name: "Schueberfouer", date: "August-September", description: "Ancient fun fair since 1340" },
                { name: "National Day", date: "June 23", description: "Grand Duke's birthday celebration" },
                { name: "Éimaischen", date: "Easter Monday", description: "Pottery and bird whistle market" },
                { name: "Buergbrennen", date: "First Sunday of Lent", description: "Bonfire tradition" }
            ],
            cuisine: [
                { name: "Judd mat Gaardebounen", description: "Smoked pork collar with broad beans" },
                { name: "Bouneschlupp", description: "Green bean soup" },
                { name: "Gromperekichelcher", description: "Potato fritters" },
                { name: "Quetschentaart", description: "Plum tart" },
                { name: "Rieslingspaschtéit", description: "Meat pie with Riesling" }
            ],
            arts: [
                { type: "Music", description: "Classical tradition, Eurovision winners" },
                { type: "Architecture", description: "Medieval fortifications, modern European institutions" },
                { type: "Museums", description: "MUDAM contemporary art museum" },
                { type: "Literature", description: "Multilingual literary tradition" }
            ],
            sports: {
                popular: ["Football", "Cycling", "Tennis", "Basketball"],
                achievements: ["Tour de France stages", "Andy Schleck cycling victories"],
                venues: ["Stade de Luxembourg", "Coque arena"]
            }
        },
        
        history: {
            timeline: [
                { year: "963", event: "County of Luxembourg founded" },
                { year: "1354", event: "Elevated to Duchy" },
                { year: "1443", event: "Burgundian rule" },
                { year: "1477", event: "Habsburg rule begins" },
                { year: "1815", event: "Grand Duchy created" },
                { year: "1839", event: "Full independence from Netherlands" },
                { year: "1867", event: "Neutrality guaranteed by London Treaty" },
                { year: "1914", event: "German occupation in WWI" },
                { year: "1940", event: "German occupation in WWII" },
                { year: "1945", event: "Liberation and end of neutrality" },
                { year: "1949", event: "NATO founding member" },
                { year: "1957", event: "Founding member of EEC" },
                { year: "1999", event: "Eurozone membership" }
            ],
            colonialHistory: null,
            historicalNames: ["County of Luxembourg", "Duchy of Luxembourg"]
        },
        
        demographics: {
            ethnicGroups: {
                "Luxembourgers": 52.1,
                "Portuguese": 15.7,
                "French": 7.5,
                "Italians": 3.4,
                "Belgians": 3.3,
                "Germans": 2.2,
                "Others": 15.8
            },
            ageStructure: {
                "0-14": 16.5,
                "15-64": 68.5,
                "65+": 15.0
            },
            urbanization: 91.5,
            lifeExpectancy: 82.5,
            fertilityRate: 1.4,
            literacyRate: 99.9
        },
        
        quickFacts: {
            internet: { tld: ".lu", penetration: 98.0 },
            calling: { code: "+352" },
            electricity: { voltage: "230V", frequency: "50Hz", plugType: "C, F" },
            measurement: "Metric",
            emergencyNumber: "112"
        },
        
        disputes: [],
        
        funFacts: [
            "Luxembourg has the highest GDP per capita in the world",
            "It's the only Grand Duchy remaining in the world",
            "Almost half the population are foreign nationals",
            "Luxembourg is one of the three capitals of the EU"
        ]
    },

    "malta": {
        name: "Malta",
        officialName: "Republic of Malta",
        nativeName: "Repubblika ta' Malta",
        iso3: "MLT",
        iso2: "MT",
        flag: "🇲🇹",
        
        capital: {
            name: "Valletta",
            population: 6000,
            coordinates: { lat: 35.8989, lng: 14.5146 }
        },
        largestCity: "Birkirkara",
        population: {
            total: 542000,
            year: 2024,
            density: 1714,
            growth: 0.9
        },
        area: {
            total: 316,
            land: 316,
            water: 0,
            rank: 186
        },
        
        continent: "Europe",
        region: "Mediterranean",
        subregion: "Southern Europe",
        coordinates: { lat: 35.9375, lng: 14.3754 },
        borders: [],
        coastline: 196,
        timezone: ["UTC+1"],
        drivingSide: "left",
        
        governmentType: "Parliamentary republic",
        leader: {
            headOfState: "President Myriam Spiteri Debono",
            headOfGovernment: "Prime Minister Robert Abela"
        },
        independence: {
            date: "September 21, 1964",
            from: "United Kingdom"
        },
        nationalDay: { name: "Independence Day", date: "September 21" },
        divisions: {
            type: "local councils",
            count: 68,
            major: ["Birkirkara", "Qormi", "Mosta", "Żabbar", "Sliema"]
        },
        
        economy: {
            gdpTotal: 20000000000,
            gdpPerCapita: 37000,
            gdpGrowth: 5.0,
            currency: { name: "Euro", code: "EUR", symbol: "€" },
            mainIndustries: ["tourism", "financial services", "gaming", "electronics", "ship repair"],
            exports: ["machinery", "pharmaceuticals", "electronic equipment", "aircraft parts", "toys"],
            imports: ["mineral fuels", "aircraft equipment", "machinery", "food", "beverages"],
            majorPartners: ["Germany", "France", "Italy", "UK", "Singapore"]
        },
        hdi: 0.918,
        
        geography_links: {
            rivers: [],
            mountains: [
                { name: "Ta' Dmejrek", description: "Highest point at 253m" }
            ],
            deserts: [],
            forests: [],
            oceans: [],
            seas: [
                { name: "Mediterranean Sea", description: "Surrounds the archipelago" }
            ],
            lakes: [],
            islands: [
                { name: "Malta", description: "Main island" },
                { name: "Gozo", description: "Second largest island" },
                { name: "Comino", description: "Small island with Blue Lagoon" }
            ]
        },
        
        culture: {
            languages: {
                official: ["Maltese", "English"],
                regional: [],
                spoken: ["Maltese", "English", "Italian"]
            },
            religions: {
                dominant: "Roman Catholicism",
                breakdown: {
                    "Catholic": 88.6,
                    "Other Christian": 2.0,
                    "Islam": 0.3,
                    "Unaffiliated": 8.0
                }
            },
            heritageSites: [
                { name: "City of Valletta", type: "Cultural", year: 1980, description: "Renaissance city built by Knights" },
                { name: "Ħal Saflieni Hypogeum", type: "Cultural", year: 1980, description: "Underground prehistoric temple" },
                { name: "Megalithic Temples", type: "Cultural", year: 1980, description: "Oldest freestanding structures" }
            ],
            festivals: [
                { name: "Carnival", date: "February", description: "Traditional pre-Lent celebration" },
                { name: "Village Festas", date: "Summer", description: "Parish patron saint celebrations" },
                { name: "Notte Bianca", date: "October", description: "Cultural night in Valletta" },
                { name: "Malta International Fireworks Festival", date: "April", description: "International competition" }
            ],
            cuisine: [
                { name: "Pastizzi", description: "Flaky pastries with ricotta or peas" },
                { name: "Rabbit Stew", description: "National dish" },
                { name: "Ftira", description: "Traditional Maltese bread" },
                { name: "Ħobż biż-żejt", description: "Bread with tomato and oil" },
                { name: "Kannoli", description: "Sweet ricotta-filled pastry" }
            ],
            arts: [
                { type: "Architecture", description: "Baroque churches, Knights' palaces" },
                { type: "Music", description: "Ghana folk singing" },
                { type: "Crafts", description: "Lace-making, filigree, glass-blowing" },
                { type: "Stone Carving", description: "Traditional Maltese craft" }
            ],
            sports: {
                popular: ["Football", "Water polo", "Swimming", "Rugby", "Sailing"],
                achievements: ["Strong water polo tradition", "Mediterranean Games hosts"],
                venues: ["Ta' Qali National Stadium", "National Pool Complex"]
            }
        },
        
        history: {
            timeline: [
                { year: "5900 BC", event: "First human settlement" },
                { year: "3600 BC", event: "Megalithic temples built" },
                { year: "800 BC", event: "Phoenician colonization" },
                { year: "218 BC", event: "Roman rule begins" },
                { year: "60 AD", event: "St. Paul shipwrecked in Malta" },
                { year: "870", event: "Arab conquest" },
                { year: "1091", event: "Norman conquest" },
                { year: "1530", event: "Knights of St. John arrive" },
                { year: "1565", event: "Great Siege against Ottomans" },
                { year: "1798", event: "Napoleon seizes Malta" },
                { year: "1800", event: "British rule begins" },
                { year: "1942", event: "George Cross awarded during WWII" },
                { year: "1964", event: "Independence from Britain" },
                { year: "2004", event: "EU membership" },
                { year: "2008", event: "Eurozone membership" }
            ],
            colonialHistory: "British colony 1800-1964",
            historicalNames: ["Melita"]
        },
        
        demographics: {
            ethnicGroups: {
                "Maltese": 95.3,
                "British": 1.6,
                "Others": 3.1
            },
            ageStructure: {
                "0-14": 13.0,
                "15-64": 66.0,
                "65+": 21.0
            },
            urbanization: 94.7,
            lifeExpectancy: 82.5,
            fertilityRate: 1.2,
            literacyRate: 94.5
        },
        
        quickFacts: {
            internet: { tld: ".mt", penetration: 87.0 },
            calling: { code: "+356" },
            electricity: { voltage: "230V", frequency: "50Hz", plugType: "G" },
            measurement: "Metric",
            emergencyNumber: "112"
        },
        
        disputes: [],
        
        funFacts: [
            "Malta has the oldest freestanding structures in the world",
            "Maltese is the only Semitic language written in Latin script",
            "Malta was awarded the George Cross for WWII bravery",
            "The country is one of the most densely populated in the world"
        ]
    },

    "iceland": {
        name: "Iceland",
        officialName: "Republic of Iceland",
        nativeName: "Ísland",
        iso3: "ISL",
        iso2: "IS",
        flag: "🇮🇸",
        
        capital: {
            name: "Reykjavik",
            population: 140000,
            coordinates: { lat: 64.1466, lng: -21.9426 }
        },
        largestCity: "Reykjavik",
        population: {
            total: 393000,
            year: 2024,
            density: 4,
            growth: 1.0
        },
        area: {
            total: 103000,
            land: 100250,
            water: 2750,
            rank: 108
        },
        
        continent: "Europe",
        region: "Nordic",
        subregion: "Northern Europe",
        coordinates: { lat: 64.9631, lng: -19.0208 },
        borders: [],
        coastline: 4970,
        timezone: ["UTC+0"],
        drivingSide: "right",
        
        governmentType: "Parliamentary republic",
        leader: {
            headOfState: "President Halla Tómasdóttir",
            headOfGovernment: "Prime Minister Bjarni Benediktsson"
        },
        independence: {
            date: "June 17, 1944",
            from: "Denmark"
        },
        nationalDay: { name: "Independence Day", date: "June 17" },
        divisions: {
            type: "regions",
            count: 8,
            major: ["Capital Region", "Southern Peninsula", "West", "North"]
        },
        
        economy: {
            gdpTotal: 28000000000,
            gdpPerCapita: 71000,
            gdpGrowth: 4.5,
            currency: { name: "Icelandic króna", code: "ISK", symbol: "kr" },
            mainIndustries: ["tourism", "fishing", "aluminum smelting", "geothermal power", "software"],
            exports: ["fish products", "aluminum", "ferrosilicon", "machinery", "animal products"],
            imports: ["machinery", "petroleum products", "food", "textiles", "vehicles"],
            majorPartners: ["Netherlands", "UK", "Germany", "USA", "Norway"]
        },
        hdi: 0.959,
        
        geography_links: {
            rivers: [
                { name: "Þjórsá", description: "Longest river" },
                { name: "Jökulsá á Fjöllum", description: "Glacial river with Dettifoss" },
                { name: "Ölfusá", description: "Largest river by volume" }
            ],
            mountains: [
                { name: "Hvannadalshnjúkur", description: "Highest peak at 2110m" },
                { name: "Snæfellsjökull", description: "Glacier-capped volcano" },
                { name: "Hekla", description: "Famous active volcano" },
                { name: "Eyjafjallajökull", description: "Volcano that erupted in 2010" }
            ],
            deserts: [
                { name: "Highland Desert", description: "Vast volcanic interior desert" }
            ],
            forests: [
                { name: "Þórsmörk", description: "Protected mountain forest" },
                { name: "Hallormsstađaskógur", description: "Largest forest" }
            ],
            oceans: [
                { name: "Atlantic Ocean", description: "Southern coast" },
                { name: "Arctic Ocean", description: "Touches northern coast" }
            ],
            seas: [
                { name: "Greenland Sea", description: "Northwestern waters" },
                { name: "Norwegian Sea", description: "Eastern waters" }
            ],
            glaciers: [
                { name: "Vatnajökull", description: "Largest glacier in Europe" },
                { name: "Langjökull", description: "Second largest glacier" },
                { name: "Hofsjökull", description: "Third largest glacier" }
            ]
        },
        
        culture: {
            languages: {
                official: ["Icelandic"],
                regional: [],
                spoken: ["Icelandic", "English", "Danish", "Polish"]
            },
            religions: {
                dominant: "Evangelical Lutheran",
                breakdown: {
                    "Evangelical Lutheran": 62.0,
                    "Other Christian": 8.0,
                    "Ásatrú": 1.5,
                    "Unaffiliated": 27.0
                }
            },
            heritageSites: [
                { name: "Þingvellir National Park", type: "Cultural", year: 2004, description: "Site of medieval parliament" },
                { name: "Surtsey", type: "Natural", year: 2008, description: "Island formed by volcanic eruption" }
            ],
            festivals: [
                { name: "Þorrablót", date: "January-February", description: "Midwinter festival with traditional food" },
                { name: "Reykjavik Arts Festival", date: "May-June", description: "Major cultural event" },
                { name: "Independence Day", date: "June 17", description: "National celebration" },
                { name: "Secret Solstice", date: "June", description: "Music festival during midnight sun" }
            ],
            cuisine: [
                { name: "Hákarl", description: "Fermented shark" },
                { name: "Hangikjöt", description: "Smoked lamb" },
                { name: "Skyr", description: "Traditional dairy product" },
                { name: "Plokkfiskur", description: "Mashed fish and potatoes" },
                { name: "Hot dogs", description: "Famous Icelandic lamb hot dogs" }
            ],
            arts: [
                { type: "Literature", description: "Medieval sagas, Nobel laureate Halldór Laxness" },
                { type: "Music", description: "Björk, Sigur Rós, vibrant scene" },
                { type: "Design", description: "Nordic design, wool products" },
                { type: "Film", description: "Growing film industry" }
            ],
            sports: {
                popular: ["Football", "Handball", "Swimming", "Golf", "Horse riding"],
                achievements: ["Euro 2016 quarter-finals", "Strong handball tradition", "Strongman champions"],
                venues: ["Laugardalsvöllur", "Laugardalshöll"]
            }
        },
        
        history: {
            timeline: [
                { year: "874", event: "Settlement by Norse Vikings" },
                { year: "930", event: "Alþingi parliament established" },
                { year: "1000", event: "Christianity adopted" },
                { year: "1262", event: "Union with Norway" },
                { year: "1380", event: "Under Danish rule" },
                { year: "1783", event: "Laki volcanic eruption" },
                { year: "1874", event: "Constitution granted" },
                { year: "1918", event: "Sovereignty under Danish crown" },
                { year: "1940", event: "British occupation during WWII" },
                { year: "1944", event: "Republic declared" },
                { year: "1949", event: "NATO founding member" },
                { year: "2008", event: "Financial crisis" },
                { year: "2010", event: "Eyjafjallajökull eruption" }
            ],
            colonialHistory: null,
            historicalNames: ["Island"]
        },
        
        demographics: {
            ethnicGroups: {
                "Icelandic": 81.0,
                "Polish": 5.5,
                "Lithuanian": 1.0,
                "Others": 12.5
            },
            ageStructure: {
                "0-14": 19.5,
                "15-64": 65.5,
                "65+": 15.0
            },
            urbanization: 94.0,
            lifeExpectancy: 83.0,
            fertilityRate: 1.7,
            literacyRate: 99.9
        },
        
        quickFacts: {
            internet: { tld: ".is", penetration: 99.0 },
            calling: { code: "+354" },
            electricity: { voltage: "230V", frequency: "50Hz", plugType: "C, F" },
            measurement: "Metric",
            emergencyNumber: "112"
        },
        
        disputes: [],
        
        funFacts: [
            "Iceland has the oldest parliament in the world (Alþingi, 930 AD)",
            "There are no mosquitoes in Iceland",
            "More books are published per capita than any other country",
            "100% of electricity comes from renewable sources",
            "Icelanders believe in elves - construction plans are changed to avoid disturbing them"
        ]
    },

    "brunei": {
        name: "Brunei",
        officialName: "Nation of Brunei, the Abode of Peace",
        nativeName: "Negara Brunei Darussalam",
        iso3: "BRN",
        iso2: "BN",
        flag: "🇧🇳",
        
        capital: {
            name: "Bandar Seri Begawan",
            population: 50000,
            coordinates: { lat: 4.9031, lng: 114.9398 }
        },
        largestCity: "Bandar Seri Begawan",
        population: {
            total: 453000,
            year: 2024,
            density: 79,
            growth: 0.9
        },
        area: {
            total: 5765,
            land: 5270,
            water: 495,
            rank: 173
        },
        
        continent: "Asia",
        region: "Southeast Asia",
        subregion: "Maritime Southeast Asia",
        coordinates: { lat: 4.5353, lng: 114.7277 },
        borders: ["Malaysia"],
        coastline: 161,
        timezone: ["UTC+8"],
        drivingSide: "left",
        
        governmentType: "Absolute monarchy",
        leader: {
            headOfState: "Sultan Hassanal Bolkiah",
            headOfGovernment: "Sultan Hassanal Bolkiah"
        },
        independence: {
            date: "January 1, 1984",
            from: "United Kingdom"
        },
        nationalDay: { name: "National Day", date: "February 23" },
        divisions: {
            type: "districts",
            count: 4,
            major: ["Brunei-Muara", "Belait", "Tutong", "Temburong"]
        },
        
        economy: {
            gdpTotal: 15000000000,
            gdpPerCapita: 34000,
            gdpGrowth: 1.5,
            currency: { name: "Brunei dollar", code: "BND", symbol: "B$" },
            mainIndustries: ["petroleum", "natural gas", "petroleum refining", "liquefied natural gas"],
            exports: ["crude oil", "natural gas", "refined products", "petrochemicals"],
            imports: ["machinery", "transport equipment", "food", "chemicals"],
            majorPartners: ["Japan", "South Korea", "Australia", "India", "Malaysia"]
        },
        hdi: 0.829,
        
        geography_links: {
            rivers: [
                { name: "Belait River", description: "Longest river" },
                { name: "Temburong River", description: "River in eastern district" },
                { name: "Brunei River", description: "River flowing through capital" }
            ],
            mountains: [
                { name: "Bukit Pagon", description: "Highest point at 1850m" },
                { name: "Bukit Teraja", description: "Mountain in Temburong" }
            ],
            deserts: [],
            forests: [
                { name: "Ulu Temburong rainforest", description: "Pristine primary rainforest" },
                { name: "Mangrove forests", description: "Coastal mangroves" }
            ],
            oceans: [],
            seas: [
                { name: "South China Sea", description: "Northern coastline" }
            ],
            lakes: []
        },
        
        culture: {
            languages: {
                official: ["Malay"],
                regional: ["English", "Chinese dialects"],
                spoken: ["Malay", "English", "Mandarin", "Hokkien"]
            },
            religions: {
                dominant: "Islam",
                breakdown: {
                    "Islam": 78.8,
                    "Buddhism": 7.8,
                    "Christianity": 8.7,
                    "Other": 4.7
                }
            },
            heritageSites: [],
            festivals: [
                { name: "Hari Raya Aidilfitri", date: "After Ramadan", description: "End of fasting celebration" },
                { name: "National Day", date: "February 23", description: "Independence celebration" },
                { name: "Sultan's Birthday", date: "July 15", description: "Royal celebration" },
                { name: "Maulidur Rasul", date: "Islamic calendar", description: "Prophet's birthday" }
            ],
            cuisine: [
                { name: "Ambuyat", description: "Starchy staple from sago palm" },
                { name: "Nasi Katok", description: "Simple rice with fried chicken" },
                { name: "Soto", description: "Aromatic soup" },
                { name: "Kuih", description: "Traditional cakes and sweets" }
            ],
            arts: [
                { type: "Architecture", description: "Islamic architecture, royal mosques" },
                { type: "Music", description: "Traditional Malay music" },
                { type: "Crafts", description: "Silverwork, brass casting, weaving" },
                { type: "Textiles", description: "Jong Sarat royal cloth" }
            ],
            sports: {
                popular: ["Football", "Badminton", "Sepak Takraw", "Golf"],
                achievements: ["Southeast Asian Games medals"],
                venues: ["Hassanal Bolkiah National Stadium"]
            }
        },
        
        history: {
            timeline: [
                { year: "7th century", event: "Buddhist empire influence" },
                { year: "15th century", event: "Brunei Sultanate established" },
                { year: "16th century", event: "Golden age, control over Borneo and Philippines" },
                { year: "1888", event: "British protectorate" },
                { year: "1929", event: "Oil discovered" },
                { year: "1941-1945", event: "Japanese occupation" },
                { year: "1959", event: "Constitution written" },
                { year: "1962", event: "Rebellion crushed" },
                { year: "1984", event: "Full independence from Britain" },
                { year: "2014", event: "Sharia law phases introduced" }
            ],
            colonialHistory: "British protectorate 1888-1984",
            historicalNames: ["Brunei Sultanate"]
        },
        
        demographics: {
            ethnicGroups: {
                "Malay": 65.7,
                "Chinese": 10.3,
                "Other indigenous": 3.4,
                "Others": 20.6
            },
            ageStructure: {
                "0-14": 22.0,
                "15-64": 71.0,
                "65+": 7.0
            },
            urbanization: 78.3,
            lifeExpectancy: 76.0,
            fertilityRate: 1.8,
            literacyRate: 97.2
        },
        
        quickFacts: {
            internet: { tld: ".bn", penetration: 95.0 },
            calling: { code: "+673" },
            electricity: { voltage: "240V", frequency: "50Hz", plugType: "G" },
            measurement: "Metric",
            emergencyNumber: "993"
        },
        
        disputes: [],
        
        funFacts: [
            "The Sultan of Brunei is one of the wealthiest people in the world",
            "Brunei has no income tax",
            "The Istana Nurul Iman is the world's largest residential palace",
            "70% of Brunei is covered by rainforest",
            "Alcohol is banned for Muslims and cannot be sold publicly"
        ]
    },

    "bahrain": {
        name: "Bahrain",
        officialName: "Kingdom of Bahrain",
        nativeName: "مملكة البحرين",
        iso3: "BHR",
        iso2: "BH",
        flag: "🇧🇭",
        
        capital: {
            name: "Manama",
            population: 200000,
            coordinates: { lat: 26.2285, lng: 50.5860 }
        },
        largestCity: "Manama",
        population: {
            total: 1540000,
            year: 2024,
            density: 2013,
            growth: 1.0
        },
        area: {
            total: 765,
            land: 765,
            water: 0,
            rank: 188
        },
        
        continent: "Asia",
        region: "Middle East",
        subregion: "Persian Gulf",
        coordinates: { lat: 26.0667, lng: 50.5577 },
        borders: [],
        coastline: 161,
        timezone: ["UTC+3"],
        drivingSide: "right",
        
        governmentType: "Constitutional monarchy",
        leader: {
            headOfState: "King Hamad bin Isa Al Khalifa",
            headOfGovernment: "Prime Minister Crown Prince Salman bin Hamad Al Khalifa"
        },
        independence: {
            date: "August 15, 1971",
            from: "United Kingdom"
        },
        nationalDay: { name: "National Day", date: "December 16" },
        divisions: {
            type: "governorates",
            count: 4,
            major: ["Capital", "Muharraq", "Northern", "Southern"]
        },
        
        economy: {
            gdpTotal: 45000000000,
            gdpPerCapita: 29000,
            gdpGrowth: 3.0,
            currency: { name: "Bahraini dinar", code: "BHD", symbol: ".د.ب" },
            mainIndustries: ["petroleum", "aluminum", "financial services", "construction", "tourism"],
            exports: ["petroleum products", "aluminum", "textiles"],
            imports: ["crude oil", "machinery", "chemicals", "food"],
            majorPartners: ["Saudi Arabia", "UAE", "USA", "China", "Japan"]
        },
        hdi: 0.875,
        
        geography_links: {
            rivers: [],
            mountains: [
                { name: "Jabal ad Dukhan", description: "Highest point at 134m" }
            ],
            deserts: [
                { name: "Interior desert", description: "Arid interior of main island" }
            ],
            forests: [],
            oceans: [],
            seas: [
                { name: "Persian Gulf", description: "Surrounds the archipelago" }
            ],
            lakes: [],
            islands: [
                { name: "Bahrain Island", description: "Main island" },
                { name: "Muharraq Island", description: "Location of airport" },
                { name: "Umm an Nasan", description: "Royal island" },
                { name: "Hawar Islands", description: "Southern archipelago" }
            ]
        },
        
        culture: {
            languages: {
                official: ["Arabic"],
                regional: [],
                spoken: ["Arabic", "English", "Farsi", "Urdu", "Hindi"]
            },
            religions: {
                dominant: "Islam",
                breakdown: {
                    "Shia Islam": 70.0,
                    "Sunni Islam": 15.0,
                    "Christianity": 10.0,
                    "Other": 5.0
                }
            },
            heritageSites: [
                { name: "Qal'at al-Bahrain", type: "Cultural", year: 2005, description: "Ancient harbor and capital" },
                { name: "Pearling Trail", type: "Cultural", year: 2012, description: "Pearl diving heritage" },
                { name: "Dilmun Burial Mounds", type: "Cultural", year: 2019, description: "Ancient burial sites" }
            ],
            festivals: [
                { name: "Bahrain Grand Prix", date: "March", description: "Formula 1 racing event" },
                { name: "Spring of Culture", date: "February-April", description: "Arts and culture festival" },
                { name: "National Day", date: "December 16-17", description: "National celebration" },
                { name: "Eid celebrations", date: "Islamic calendar", description: "Religious festivals" }
            ],
            cuisine: [
                { name: "Machboos", description: "Spiced rice with meat" },
                { name: "Muhammar", description: "Sweet rice dish" },
                { name: "Balaleet", description: "Sweet vermicelli with eggs" },
                { name: "Halwa", description: "Traditional sweet" },
                { name: "Shawarma", description: "Popular street food" }
            ],
            arts: [
                { type: "Architecture", description: "Traditional wind towers, modern landmarks" },
                { type: "Music", description: "Khaleeji music, pearl diving songs" },
                { type: "Crafts", description: "Pottery, pearl jewelry, textile weaving" },
                { type: "Calligraphy", description: "Arabic calligraphy tradition" }
            ],
            sports: {
                popular: ["Football", "Formula 1", "Horse racing", "Pearl diving"],
                achievements: ["Home of Bahrain Grand Prix", "Growing football tradition"],
                venues: ["Bahrain International Circuit", "National Stadium"]
            }
        },
        
        history: {
            timeline: [
                { year: "3000 BC", event: "Center of ancient Dilmun civilization" },
                { year: "1521", event: "Portuguese arrival" },
                { year: "1602", event: "Persian conquest" },
                { year: "1783", event: "Al Khalifa family takes control" },
                { year: "1861", event: "British protectorate begins" },
                { year: "1932", event: "Oil discovered" },
                { year: "1971", event: "Independence from Britain" },
                { year: "2002", event: "Constitutional monarchy established" },
                { year: "2004", event: "First Formula 1 race in Middle East" },
                { year: "2011", event: "Arab Spring protests" }
            ],
            colonialHistory: "British protectorate 1861-1971",
            historicalNames: ["Dilmun"]
        },
        
        demographics: {
            ethnicGroups: {
                "Bahraini": 46.0,
                "Asian": 45.5,
                "Other Arab": 4.7,
                "African": 1.6,
                "European": 1.0
            },
            ageStructure: {
                "0-14": 18.0,
                "15-64": 79.0,
                "65+": 3.0
            },
            urbanization: 89.5,
            lifeExpectancy: 77.5,
            fertilityRate: 1.8,
            literacyRate: 97.5
        },
        
        quickFacts: {
            internet: { tld: ".bh", penetration: 99.0 },
            calling: { code: "+973" },
            electricity: { voltage: "230V", frequency: "50Hz", plugType: "G" },
            measurement: "Metric",
            emergencyNumber: "999"
        },
        
        disputes: [],
        
        funFacts: [
            "Bahrain means 'two seas' in Arabic",
            "It was the site of the ancient Dilmun civilization",
            "Bahrain was the first Gulf state to discover oil",
            "The Tree of Life survives in the desert with no visible water source",
            "Bahrain is connected to Saudi Arabia by the King Fahd Causeway"
        ]
    },

    "qatar": {
        name: "Qatar",
        officialName: "State of Qatar",
        nativeName: "دولة قطر",
        iso3: "QAT",
        iso2: "QA",
        flag: "🇶🇦",
        
        capital: {
            name: "Doha",
            population: 1000000,
            coordinates: { lat: 25.2854, lng: 51.5310 }
        },
        largestCity: "Doha",
        population: {
            total: 2930000,
            year: 2024,
            density: 253,
            growth: 1.5
        },
        area: {
            total: 11586,
            land: 11586,
            water: 0,
            rank: 165
        },
        
        continent: "Asia",
        region: "Middle East",
        subregion: "Persian Gulf",
        coordinates: { lat: 25.3548, lng: 51.1839 },
        borders: ["Saudi Arabia"],
        coastline: 563,
        timezone: ["UTC+3"],
        drivingSide: "right",
        
        governmentType: "Absolute monarchy",
        leader: {
            headOfState: "Emir Sheikh Tamim bin Hamad Al Thani",
            headOfGovernment: "Prime Minister Sheikh Mohammed bin Abdulrahman Al Thani"
        },
        independence: {
            date: "September 3, 1971",
            from: "United Kingdom"
        },
        nationalDay: { name: "National Day", date: "December 18" },
        divisions: {
            type: "municipalities",
            count: 8,
            major: ["Doha", "Al Wakrah", "Al Khor", "Al Rayyan"]
        },
        
        economy: {
            gdpTotal: 220000000000,
            gdpPerCapita: 84000,
            gdpGrowth: 4.0,
            currency: { name: "Qatari riyal", code: "QAR", symbol: "ر.ق" },
            mainIndustries: ["liquefied natural gas", "petroleum", "petrochemicals", "fertilizers", "steel"],
            exports: ["liquefied natural gas", "petroleum", "fertilizers", "steel"],
            imports: ["machinery", "transport equipment", "food", "chemicals"],
            majorPartners: ["Japan", "South Korea", "India", "China", "Singapore"]
        },
        hdi: 0.855,
        
        geography_links: {
            rivers: [],
            mountains: [
                { name: "Qurayn Abu al Bawl", description: "Highest point at 103m" }
            ],
            deserts: [
                { name: "Qatar desert", description: "Entire country is largely desert" },
                { name: "Khor Al Adaid", description: "Inland sea and sand dunes" }
            ],
            forests: [],
            oceans: [],
            seas: [
                { name: "Persian Gulf", description: "Surrounds the peninsula" }
            ],
            lakes: []
        },
        
        culture: {
            languages: {
                official: ["Arabic"],
                regional: [],
                spoken: ["Arabic", "English", "Hindi", "Urdu", "Tagalog", "Nepali"]
            },
            religions: {
                dominant: "Islam",
                breakdown: {
                    "Islam": 67.7,
                    "Christianity": 13.8,
                    "Hinduism": 13.8,
                    "Buddhism": 3.1,
                    "Other": 1.6
                }
            },
            heritageSites: [
                { name: "Al Zubarah Archaeological Site", type: "Cultural", year: 2013, description: "Pearl diving and trading town" }
            ],
            festivals: [
                { name: "Qatar National Day", date: "December 18", description: "National celebration" },
                { name: "Eid al-Fitr", date: "After Ramadan", description: "End of fasting celebration" },
                { name: "Eid al-Adha", date: "Islamic calendar", description: "Festival of sacrifice" },
                { name: "Doha Tribeca Film Festival", date: "November", description: "Cultural film event" }
            ],
            cuisine: [
                { name: "Machboos", description: "Spiced rice with meat or fish" },
                { name: "Harees", description: "Wheat and meat porridge" },
                { name: "Thareed", description: "Bread and meat stew" },
                { name: "Madrooba", description: "Fish and rice dish" },
                { name: "Karak tea", description: "Popular spiced tea" }
            ],
            arts: [
                { type: "Architecture", description: "Modern landmarks like Museum of Islamic Art" },
                { type: "Music", description: "Traditional Gulf music, modern scene" },
                { type: "Calligraphy", description: "Arabic calligraphy" },
                { type: "Falconry", description: "Traditional hunting practice" }
            ],
            sports: {
                popular: ["Football", "Camel racing", "Falconry", "Tennis", "Golf"],
                achievements: ["2022 FIFA World Cup hosts", "2019 Asian Cup champions"],
                venues: ["Lusail Stadium", "Khalifa International Stadium", "Education City Stadium"]
            }
        },
        
        history: {
            timeline: [
                { year: "4000 BC", event: "Early human settlement" },
                { year: "1766", event: "Al Khalifa family settles" },
                { year: "1868", event: "Treaty with Britain, independence from Bahrain" },
                { year: "1916", event: "British protectorate" },
                { year: "1939", event: "Oil discovered" },
                { year: "1971", event: "Independence from Britain" },
                { year: "1995", event: "Sheikh Hamad assumes power" },
                { year: "2006", event: "Asian Games hosted" },
                { year: "2010", event: "FIFA World Cup 2022 awarded" },
                { year: "2017-2021", event: "Diplomatic crisis with neighbors" },
                { year: "2022", event: "FIFA World Cup hosted" }
            ],
            colonialHistory: "British protectorate 1916-1971",
            historicalNames: ["Qatar"]
        },
        
        demographics: {
            ethnicGroups: {
                "Qatari": 10.0,
                "Indian": 25.0,
                "Nepali": 16.0,
                "Filipino": 11.0,
                "Bangladeshi": 10.0,
                "Sri Lankan": 5.0,
                "Egyptian": 5.0,
                "Other": 18.0
            },
            ageStructure: {
                "0-14": 12.5,
                "15-64": 86.0,
                "65+": 1.5
            },
            urbanization: 99.2,
            lifeExpectancy: 80.0,
            fertilityRate: 1.9,
            literacyRate: 97.8
        },
        
        quickFacts: {
            internet: { tld: ".qa", penetration: 99.0 },
            calling: { code: "+974" },
            electricity: { voltage: "240V", frequency: "50Hz", plugType: "G" },
            measurement: "Metric",
            emergencyNumber: "999"
        },
        
        disputes: [],
        
        funFacts: [
            "Qatar is one of the richest countries in the world per capita",
            "Only about 10% of the population are Qatari citizens",
            "Qatar has the world's largest reserves of natural gas",
            "Qatar hosted the first FIFA World Cup in the Middle East",
            "The country has no rivers or lakes"
        ]
    },

    "kuwait": {
        name: "Kuwait",
        officialName: "State of Kuwait",
        nativeName: "دولة الكويت",
        iso3: "KWT",
        iso2: "KW",
        flag: "🇰🇼",
        
        capital: {
            name: "Kuwait City",
            population: 60000,
            coordinates: { lat: 29.3759, lng: 47.9774 }
        },
        largestCity: "Kuwait City",
        population: {
            total: 4310000,
            year: 2024,
            density: 242,
            growth: 1.3
        },
        area: {
            total: 17818,
            land: 17818,
            water: 0,
            rank: 157
        },
        
        continent: "Asia",
        region: "Middle East",
        subregion: "Persian Gulf",
        coordinates: { lat: 29.3117, lng: 47.4818 },
        borders: ["Iraq", "Saudi Arabia"],
        coastline: 499,
        timezone: ["UTC+3"],
        drivingSide: "right",
        
        governmentType: "Constitutional monarchy",
        leader: {
            headOfState: "Emir Sheikh Mishal Al-Ahmad Al-Jaber Al-Sabah",
            headOfGovernment: "Prime Minister Sheikh Ahmad Abdullah Al-Ahmad Al-Sabah"
        },
        independence: {
            date: "June 19, 1961",
            from: "United Kingdom"
        },
        nationalDay: { name: "National Day", date: "February 25" },
        divisions: {
            type: "governorates",
            count: 6,
            major: ["Al Asimah", "Hawalli", "Farwaniya", "Ahmadi"]
        },
        
        economy: {
            gdpTotal: 140000000000,
            gdpPerCapita: 32500,
            gdpGrowth: 2.5,
            currency: { name: "Kuwaiti dinar", code: "KWD", symbol: "د.ك" },
            mainIndustries: ["petroleum", "petrochemicals", "cement", "shipbuilding", "fishing"],
            exports: ["petroleum", "petrochemicals", "fertilizers"],
            imports: ["food", "construction materials", "vehicles", "clothing"],
            majorPartners: ["South Korea", "China", "Japan", "India", "USA"]
        },
        hdi: 0.831,
        
        geography_links: {
            rivers: [],
            mountains: [],
            deserts: [
                { name: "Arabian Desert", description: "Covers most of country" }
            ],
            forests: [],
            oceans: [],
            seas: [
                { name: "Persian Gulf", description: "Eastern coastline" }
            ],
            lakes: [],
            islands: [
                { name: "Bubiyan Island", description: "Largest island" },
                { name: "Failaka Island", description: "Historic island with archaeology" }
            ]
        },
        
        culture: {
            languages: {
                official: ["Arabic"],
                regional: [],
                spoken: ["Arabic", "English", "Hindi", "Tagalog"]
            },
            religions: {
                dominant: "Islam",
                breakdown: {
                    "Islam": 74.6,
                    "Christianity": 18.2,
                    "Hinduism": 2.3,
                    "Other": 4.9
                }
            },
            heritageSites: [],
            festivals: [
                { name: "Liberation Day", date: "February 26", description: "Liberation from Iraq" },
                { name: "National Day", date: "February 25", description: "Independence celebration" },
                { name: "Hala February", date: "February", description: "Shopping and cultural festival" },
                { name: "Eid celebrations", date: "Islamic calendar", description: "Religious holidays" }
            ],
            cuisine: [
                { name: "Machboos", description: "Spiced rice with meat" },
                { name: "Harees", description: "Wheat and meat porridge" },
                { name: "Gabout", description: "Lamb and rice balls" },
                { name: "Gers Ogaily", description: "Traditional cake" },
                { name: "Jireesh", description: "Crushed wheat dish" }
            ],
            arts: [
                { type: "Architecture", description: "Kuwait Towers, modern landmarks" },
                { type: "Music", description: "Traditional Gulf music, sawt" },
                { type: "Weaving", description: "Al Sadu traditional weaving" },
                { type: "Shipbuilding", description: "Traditional dhow construction" }
            ],
            sports: {
                popular: ["Football", "Basketball", "Swimming", "Motorsport"],
                achievements: ["Asian Games medals", "Gulf Cup champions"],
                venues: ["Kuwait Sports Club Stadium", "Jaber Al-Ahmad International Stadium"]
            }
        },
        
        history: {
            timeline: [
                { year: "1613", event: "Kuwait City founded" },
                { year: "1756", event: "Al-Sabah family comes to power" },
                { year: "1899", event: "British protectorate" },
                { year: "1938", event: "Oil discovered" },
                { year: "1961", event: "Independence from Britain" },
                { year: "1990", event: "Iraqi invasion" },
                { year: "1991", event: "Liberation in Gulf War" },
                { year: "2003", event: "Staging ground for Iraq War" },
                { year: "2005", event: "Women gain right to vote" },
                { year: "2020", event: "Emir Sheikh Sabah dies" }
            ],
            colonialHistory: "British protectorate 1899-1961",
            historicalNames: ["Kuwait"]
        },
        
        demographics: {
            ethnicGroups: {
                "Kuwaiti": 30.0,
                "Other Arab": 27.0,
                "South Asian": 37.0,
                "Other": 6.0
            },
            ageStructure: {
                "0-14": 20.0,
                "15-64": 77.0,
                "65+": 3.0
            },
            urbanization: 100.0,
            lifeExpectancy: 78.5,
            fertilityRate: 2.0,
            literacyRate: 96.5
        },
        
        quickFacts: {
            internet: { tld: ".kw", penetration: 99.0 },
            calling: { code: "+965" },
            electricity: { voltage: "240V", frequency: "50Hz", plugType: "G" },
            measurement: "Metric",
            emergencyNumber: "112"
        },
        
        disputes: [],
        
        funFacts: [
            "The Kuwaiti dinar is the highest-valued currency in the world",
            "Kuwait has no natural water sources - all water is desalinated",
            "Kuwait was the first Arab Gulf country to have an elected parliament",
            "The Kuwait Towers are the country's most recognizable landmark",
            "Summer temperatures can exceed 50°C (122°F)"
        ]
    },
  
    "oman": {
        name: "Oman",
        officialName: "Sultanate of Oman",
        nativeName: "سلطنة عُمان (Salṭanat ʻUmān)",
        iso3: "OMN",
        iso2: "OM",
        flag: "🇴🇲",
        
        capital: {
            name: "Muscat",
            population: 1550000,
            coordinates: { lat: 23.5880, lng: 58.3829 }
        },
        largestCity: "Muscat",
        population: {
            total: 4650000,
            year: 2024,
            density: 15,
            growth: 2.0
        },
        area: {
            total: 309500,
            land: 309500,
            water: 0,
            rank: 70
        },
        
        continent: "Asia",
        region: "Middle East",
        subregion: "Arabian Peninsula",
        coordinates: { lat: 21.4735, lng: 55.9754 },
        borders: ["United Arab Emirates", "Saudi Arabia", "Yemen"],
        coastline: 2092,
        timezone: ["UTC+4"],
        drivingSide: "right",
        
        governmentType: "Absolute monarchy",
        leader: {
            headOfState: "Sultan Haitham bin Tariq Al Said",
            headOfGovernment: "Sultan Haitham bin Tariq Al Said"
        },
        independence: {
            date: "1650",
            from: "Portugal"
        },
        nationalDay: { name: "National Day", date: "November 18" },
        divisions: {
            type: "governorates",
            count: 11,
            major: ["Muscat", "Dhofar", "Al Batinah North", "Al Dakhiliyah"]
        },
        
        economy: {
            gdpTotal: 105000000000,
            gdpPerCapita: 22500,
            gdpGrowth: 3.0,
            currency: { name: "Omani rial", code: "OMR", symbol: "ر.ع." },
            mainIndustries: ["petroleum", "natural gas", "tourism", "construction", "petrochemicals"],
            exports: ["petroleum", "natural gas", "fish", "metals", "textiles"],
            imports: ["machinery", "transport equipment", "food", "consumer goods"],
            majorPartners: ["China", "India", "UAE", "Saudi Arabia", "Japan"]
        },
        hdi: 0.816,
        
        geography_links: {
            rivers: [],
            mountains: [
                { name: "Al Hajar Mountains", description: "Major mountain range" },
                { name: "Jebel Shams", description: "Highest peak at 3028m" },
                { name: "Jebel Akhdar", description: "Green Mountain with terraced farms" }
            ],
            deserts: [
                { name: "Rub' al Khali", description: "Empty Quarter extends into Oman" },
                { name: "Wahiba Sands", description: "Famous sand desert" }
            ],
            forests: [
                { name: "Dhofar forests", description: "Monsoon forests with frankincense trees" }
            ],
            oceans: [
                { name: "Indian Ocean", description: "Southern and eastern coast" },
                { name: "Arabian Sea", description: "Southeastern coast" }
            ],
            seas: [
                { name: "Gulf of Oman", description: "Northern coast" }
            ],
            lakes: []
        },
        
        culture: {
            languages: {
                official: ["Arabic"],
                regional: ["Baluchi", "Swahili", "Urdu"],
                spoken: ["Arabic", "English", "Baluchi", "Hindi"]
            },
            religions: {
                dominant: "Ibadi Islam",
                breakdown: {
                    "Ibadi Islam": 45.0,
                    "Sunni Islam": 45.0,
                    "Shia Islam": 5.0,
                    "Other": 5.0
                }
            },
            heritageSites: [
                { name: "Bahla Fort", type: "Cultural", year: 1987, description: "Medieval fort and oasis" },
                { name: "Archaeological Sites of Bat", type: "Cultural", year: 1988, description: "Bronze Age settlement" },
                { name: "Land of Frankincense", type: "Cultural", year: 2000, description: "Frankincense trading heritage" },
                { name: "Aflaj Irrigation Systems", type: "Cultural", year: 2006, description: "Ancient water channels" }
            ],
            festivals: [
                { name: "National Day", date: "November 18", description: "Independence celebration" },
                { name: "Muscat Festival", date: "January-February", description: "Cultural celebration" },
                { name: "Khareef Festival", date: "July-September", description: "Monsoon season in Salalah" },
                { name: "Eid celebrations", date: "Islamic calendar", description: "Religious holidays" }
            ],
            cuisine: [
                { name: "Shuwa", description: "Slow-cooked marinated lamb" },
                { name: "Majboos", description: "Spiced rice with meat" },
                { name: "Mashuai", description: "Whole roasted kingfish" },
                { name: "Halwa", description: "Traditional sweet" },
                { name: "Kahwa", description: "Omani coffee with dates" }
            ],
            arts: [
                { type: "Architecture", description: "Forts, old towns, Sultan Qaboos Mosque" },
                { type: "Music", description: "Traditional music, drums, singing" },
                { type: "Crafts", description: "Silver jewelry, pottery, weaving" },
                { type: "Shipbuilding", description: "Traditional dhow construction" }
            ],
            sports: {
                popular: ["Football", "Camel racing", "Horse racing", "Dhow racing"],
                achievements: ["Gulf Cup hosts", "Asian Beach Games hosts"],
                venues: ["Sultan Qaboos Sports Complex"]
            }
        },
        
        history: {
            timeline: [
                { year: "3000 BC", event: "Magan civilization flourishes" },
                { year: "6th century", event: "Islam arrives" },
                { year: "751", event: "Imamate of Oman established" },
                { year: "1507", event: "Portuguese conquest" },
                { year: "1650", event: "Portuguese expelled" },
                { year: "1698", event: "Omani empire extends to East Africa" },
                { year: "1856", event: "Zanzibar separates" },
                { year: "1891", event: "British protectorate begins" },
                { year: "1970", event: "Sultan Qaboos takes power, modernization begins" },
                { year: "2020", event: "Sultan Haitham succeeds Sultan Qaboos" }
            ],
            colonialHistory: "Portuguese rule 1507-1650, British protectorate 1891-1971",
            historicalNames: ["Magan", "Mazun"]
        },
        
        demographics: {
            ethnicGroups: {
                "Arab": 56.0,
                "Baluchi": 15.0,
                "South Asian": 20.0,
                "African": 5.0,
                "Other": 4.0
            },
            ageStructure: {
                "0-14": 26.0,
                "15-64": 70.0,
                "65+": 4.0
            },
            urbanization: 87.0,
            lifeExpectancy: 78.0,
            fertilityRate: 2.8,
            literacyRate: 95.7
        },
        
        quickFacts: {
            internet: { tld: ".om", penetration: 95.0 },
            calling: { code: "+968" },
            electricity: { voltage: "240V", frequency: "50Hz", plugType: "G" },
            measurement: "Metric",
            emergencyNumber: "9999"
        },
        
        disputes: [],
        
        funFacts: [
            "Oman is the only country with Ibadi Islam as the dominant faith",
            "The country was once a powerful maritime empire controlling Zanzibar",
            "Oman is the birthplace of frankincense",
            "Sultan Qaboos ruled for 50 years and transformed the country",
            "Oman has no railway system"
        ]
    },

   // encyclopedia-data-5.js (continued)
// Continuing from Lebanon's heritageSites section

    "lebanon": {
        name: "Lebanon",
        officialName: "Lebanese Republic",
        nativeName: "الجمهورية اللبنانية (Al-Jumhūrīyah al-Lubnānīyah)",
        iso3: "LBN",
        iso2: "LB",
        flag: "🇱🇧",
        
        capital: {
            name: "Beirut",
            population: 2400000,
            coordinates: { lat: 33.8938, lng: 35.5018 }
        },
        largestCity: "Beirut",
        population: {
            total: 5490000,
            year: 2024,
            density: 528,
            growth: -0.5
        },
        area: {
            total: 10400,
            land: 10230,
            water: 170,
            rank: 166
        },
        
        continent: "Asia",
        region: "Middle East",
        subregion: "Levant",
        coordinates: { lat: 33.8547, lng: 35.8623 },
        borders: ["Syria", "Israel"],
        coastline: 225,
        timezone: ["UTC+2"],
        drivingSide: "right",
        
        governmentType: "Parliamentary republic",
        leader: {
            headOfState: "President (vacant/interim)",
            headOfGovernment: "Prime Minister Najib Mikati"
        },
        independence: {
            date: "November 22, 1943",
            from: "France"
        },
        nationalDay: { name: "Independence Day", date: "November 22" },
        divisions: {
            type: "governorates",
            count: 8,
            major: ["Beirut", "Mount Lebanon", "North", "Beqaa", "South"]
        },
        
        economy: {
            gdpTotal: 20000000000,
            gdpPerCapita: 3600,
            gdpGrowth: -10.0,
            currency: { name: "Lebanese pound", code: "LBP", symbol: "ل.ل" },
            mainIndustries: ["banking", "tourism", "food processing", "jewelry", "cement"],
            exports: ["jewelry", "base metals", "chemicals", "food", "electrical equipment"],
            imports: ["petroleum", "cars", "medicine", "clothing", "food"],
            majorPartners: ["UAE", "Saudi Arabia", "Syria", "China", "Turkey"]
        },
        hdi: 0.706,
        
        geography_links: {
            rivers: [
                { name: "Litani River", description: "Longest river entirely in Lebanon" },
                { name: "Orontes River", description: "Flows north to Syria" },
                { name: "Beirut River", description: "River flowing through capital" }
            ],
            mountains: [
                { name: "Mount Lebanon", description: "Coastal mountain range" },
                { name: "Anti-Lebanon Mountains", description: "Eastern range on Syrian border" },
                { name: "Qurnat as Sawda", description: "Highest peak at 3088m" }
            ],
            deserts: [],
            forests: [
                { name: "Cedars of Lebanon", description: "Ancient cedar forests" },
                { name: "Horsh Ehden", description: "Protected cedar reserve" },
                { name: "Chouf Cedar Reserve", description: "Largest nature reserve" }
            ],
            oceans: [],
            seas: [
                { name: "Mediterranean Sea", description: "Western coastline" }
            ],
            valleys: [
                { name: "Beqaa Valley", description: "Fertile valley between mountain ranges" }
            ]
        },
        
        culture: {
            languages: {
                official: ["Arabic"],
                regional: ["French", "English", "Armenian"],
                spoken: ["Arabic", "French", "English", "Armenian"]
            },
            religions: {
                dominant: "Multi-confessional",
                breakdown: {
                    "Islam (Shia)": 27.0,
                    "Islam (Sunni)": 27.0,
                    "Maronite Christian": 21.0,
                    "Greek Orthodox": 8.0,
                    "Druze": 5.0,
                    "Other Christian": 7.0,
                    "Other": 5.0
                }
            },
            heritageSites: [
                { name: "Anjar", type: "Cultural", year: 1984, description: "Umayyad city ruins" },
                { name: "Baalbek", type: "Cultural", year: 1984, description: "Roman temple complex" },
                { name: "Byblos", type: "Cultural", year: 1984, description: "One of the oldest continuously inhabited cities" },
                { name: "Tyre", type: "Cultural", year: 1984, description: "Ancient Phoenician city" },
                { name: "Ouadi Qadisha and Cedars of God", type: "Cultural", year: 1998, description: "Holy valley and ancient cedars" }
            ],
            festivals: [
                { name: "Baalbek International Festival", date: "July-August", description: "Arts and music festival in Roman ruins" },
                { name: "Beiteddine Art Festival", date: "July-August", description: "Cultural festival in palace" },
                { name: "Independence Day", date: "November 22", description: "National celebration" },
                { name: "Eid al-Fitr", date: "After Ramadan", description: "Islamic celebration" },
                { name: "Easter", date: "Spring", description: "Christian celebration" }
            ],
            cuisine: [
                { name: "Kibbeh", description: "National dish - bulgur and meat" },
                { name: "Tabbouleh", description: "Parsley and bulgur salad" },
                { name: "Hummus", description: "Chickpea dip" },
                { name: "Fattoush", description: "Salad with toasted bread" },
                { name: "Shawarma", description: "Wrapped meat sandwich" },
                { name: "Baklava", description: "Sweet pastry with nuts" }
            ],
            arts: [
                { type: "Music", description: "Fairuz, Arabic pop, traditional music" },
                { type: "Architecture", description: "Phoenician, Roman, Ottoman, French influences" },
                { type: "Literature", description: "Khalil Gibran, rich literary tradition" },
                { type: "Dance", description: "Dabke traditional folk dance" }
            ],
            sports: {
                popular: ["Football", "Basketball", "Skiing", "Swimming", "Tennis"],
                achievements: ["Strong basketball tradition", "Winter sports in mountains"],
                venues: ["Camille Chamoun Sports City Stadium", "Beirut Sports City"]
            }
        },
        
        history: {
            timeline: [
                { year: "5000 BC", event: "Byblos established as settlement" },
                { year: "1500 BC", event: "Phoenician civilization flourishes" },
                { year: "64 BC", event: "Roman rule begins" },
                { year: "636 AD", event: "Arab conquest" },
                { year: "1516", event: "Ottoman rule begins" },
                { year: "1861", event: "Mount Lebanon gains autonomy" },
                { year: "1920", event: "Greater Lebanon under French mandate" },
                { year: "1943", event: "Independence from France" },
                { year: "1975-1990", event: "Lebanese Civil War" },
                { year: "2005", event: "Cedar Revolution" },
                { year: "2006", event: "Lebanon War with Israel" },
                { year: "2019", event: "Economic crisis begins" },
                { year: "2020", event: "Beirut port explosion" }
            ],
            colonialHistory: "French mandate 1920-1943",
            historicalNames: ["Phoenicia", "Greater Lebanon"]
        },
        
        demographics: {
            ethnicGroups: {
                "Arab": 95.0,
                "Armenian": 4.0,
                "Other": 1.0
            },
            ageStructure: {
                "0-14": 21.0,
                "15-64": 69.0,
                "65+": 10.0
            },
            urbanization: 89.0,
            lifeExpectancy: 79.0,
            fertilityRate: 2.1,
            literacyRate: 95.0
        },
        
        quickFacts: {
            internet: { tld: ".lb", penetration: 78.0 },
            calling: { code: "+961" },
            electricity: { voltage: "220V", frequency: "50Hz", plugType: "A, B, C, D, G" },
            measurement: "Metric",
            emergencyNumber: "112"
        },
        
        disputes: [
            {
                type: "territorial",
                description: "Shebaa Farms disputed with Israel",
                parties: ["Lebanon", "Israel", "Syria"],
                status: "Ongoing"
            },
            {
                type: "maritime",
                description: "Maritime border with Israel recently demarcated (2022)",
                parties: ["Lebanon", "Israel"],
                status: "Agreement reached 2022"
            }
        ],
        
        funFacts: [
            "Lebanon is home to some of the oldest cities in the world (Byblos, Tyre)",
            "The word 'alphabet' comes from the first two Phoenician letters invented in Lebanon",
            "Lebanon has 18 recognized religious sects",
            "The Cedar of Lebanon is mentioned 75 times in the Bible",
            "Lebanon is the only Arab country without a desert",
            "Skiing and swimming can be done on the same day"
        ]
    },

    "armenia": {
        name: "Armenia",
        officialName: "Republic of Armenia",
        nativeName: "Հայաdelays Հdelays (Hayastani Hanrapetut'yun)",
        iso3: "ARM",
        iso2: "AM",
        flag: "🇦🇲",
        
        capital: {
            name: "Yerevan",
            population: 1093000,
            coordinates: { lat: 40.1792, lng: 44.4991 }
        },
        largestCity: "Yerevan",
        population: {
            total: 2780000,
            year: 2024,
            density: 93,
            growth: -0.3
        },
        area: {
            total: 29743,
            land: 28203,
            water: 1540,
            rank: 143
        },
        
        continent: "Asia",
        region: "Caucasus",
        subregion: "South Caucasus",
        coordinates: { lat: 40.0691, lng: 45.0382 },
        borders: ["Georgia", "Azerbaijan", "Iran", "Turkey"],
        coastline: 0,
        timezone: ["UTC+4"],
        drivingSide: "right",
        
        governmentType: "Parliamentary republic",
        leader: {
            headOfState: "President Vahagn Khachaturyan",
            headOfGovernment: "Prime Minister Nikol Pashinyan"
        },
        independence: {
            date: "September 21, 1991",
            from: "Soviet Union"
        },
        nationalDay: { name: "Independence Day", date: "September 21" },
        divisions: {
            type: "provinces",
            count: 11,
            major: ["Yerevan", "Shirak", "Lori", "Kotayk", "Ararat"]
        },
        
        economy: {
            gdpTotal: 20000000000,
            gdpPerCapita: 7200,
            gdpGrowth: 8.0,
            currency: { name: "Armenian dram", code: "AMD", symbol: "֏" },
            mainIndustries: ["diamond processing", "metal processing", "brandy", "mining", "IT"],
            exports: ["copper", "gold", "diamonds", "brandy", "cigarettes"],
            imports: ["natural gas", "petroleum", "machinery", "food", "diamonds"],
            majorPartners: ["Russia", "Switzerland", "China", "Bulgaria", "Germany"]
        },
        hdi: 0.759,
        
        geography_links: {
            rivers: [
                { name: "Araxes River", description: "Forms border with Turkey and Iran" },
                { name: "Hrazdan River", description: "Flows from Lake Sevan through Yerevan" },
                { name: "Debed River", description: "Northern river to Georgia" },
                { name: "Vorotan River", description: "Major river in south" }
            ],
            mountains: [
                { name: "Mount Aragats", description: "Highest peak at 4090m" },
                { name: "Lesser Caucasus", description: "Mountain range covering country" },
                { name: "Mount Ararat", description: "Historic symbol, now in Turkey" },
                { name: "Geghama Mountains", description: "Central mountain range" }
            ],
            deserts: [],
            forests: [
                { name: "Dilijan forests", description: "Rich deciduous forests" },
                { name: "Khosrov Forest", description: "One of oldest nature reserves" }
            ],
            oceans: [],
            seas: [],
            lakes: [
                { name: "Lake Sevan", description: "One of largest high-altitude lakes in the world" },
                { name: "Lake Arpi", description: "Wetland in northwestern Armenia" }
            ]
        },
        
        culture: {
            languages: {
                official: ["Armenian"],
                regional: ["Russian", "Yezidi", "Assyrian"],
                spoken: ["Armenian", "Russian", "English"]
            },
            religions: {
                dominant: "Armenian Apostolic Christianity",
                breakdown: {
                    "Armenian Apostolic": 92.6,
                    "Evangelical": 1.0,
                    "Other Christian": 0.4,
                    "Yezidi": 1.2,
                    "Other": 4.8
                }
            },
            heritageSites: [
                { name: "Monasteries of Haghpat and Sanahin", type: "Cultural", year: 1996, description: "Medieval monastery complex" },
                { name: "Cathedral and Churches of Echmiatsin", type: "Cultural", year: 2000, description: "Spiritual center of Armenian Church" },
                { name: "Monastery of Geghard and Azat Valley", type: "Cultural", year: 2000, description: "Medieval cliff monastery" },
                { name: "Temple of Garni", type: "Cultural", year: 2000, description: "Hellenistic pagan temple" }
            ],
            festivals: [
                { name: "Vardavar", date: "July", description: "Water festival with ancient pagan roots" },
                { name: "Armenian Independence Day", date: "September 21", description: "National celebration" },
                { name: "Genocide Remembrance Day", date: "April 24", description: "Commemoration of 1915 genocide" },
                { name: "Navasard", date: "August 11", description: "Ancient new year celebration" }
            ],
            cuisine: [
                { name: "Khorovats", description: "Armenian barbecue" },
                { name: "Dolma", description: "Stuffed grape leaves" },
                { name: "Lavash", description: "Traditional flatbread (UNESCO heritage)" },
                { name: "Harissa", description: "Wheat and meat porridge" },
                { name: "Gata", description: "Sweet bread pastry" },
                { name: "Armenian brandy", description: "Famous cognac-style spirit" }
            ],
            arts: [
                { type: "Music", description: "Duduk instrument (UNESCO), folk and classical" },
                { type: "Architecture", description: "Ancient churches and monasteries" },
                { type: "Khachkar", description: "Carved stone cross monuments (UNESCO)" },
                { type: "Literature", description: "Ancient manuscript tradition, Mesrop Mashtots" },
                { type: "Carpet weaving", description: "Traditional Armenian rug making" }
            ],
            sports: {
                popular: ["Football", "Wrestling", "Chess", "Weightlifting", "Boxing"],
                achievements: ["Chess Olympiad champions", "Olympic wrestling and weightlifting medals"],
                venues: ["Vazgen Sargsyan Republican Stadium", "Karen Demirchyan Sports Complex"]
            }
        },
        
        history: {
            timeline: [
                { year: "782 BC", event: "Erebuni fortress founded (Yerevan)" },
                { year: "301 AD", event: "First nation to adopt Christianity as state religion" },
                { year: "405 AD", event: "Armenian alphabet created" },
                { year: "885", event: "Bagratid Armenia established" },
                { year: "1045", event: "Byzantine conquest" },
                { year: "1375", event: "Last Armenian kingdom falls" },
                { year: "1828", event: "Eastern Armenia to Russian Empire" },
                { year: "1915", event: "Armenian Genocide under Ottoman Empire" },
                { year: "1918", event: "First Republic of Armenia" },
                { year: "1920", event: "Soviet rule begins" },
                { year: "1991", event: "Independence from Soviet Union" },
                { year: "1992-1994", event: "Nagorno-Karabakh War" },
                { year: "2018", event: "Velvet Revolution" },
                { year: "2020", event: "Second Nagorno-Karabakh War" }
            ],
            colonialHistory: null,
            historicalNames: ["Urartu", "Kingdom of Armenia", "Armenian SSR"]
        },
        
        demographics: {
            ethnicGroups: {
                "Armenian": 98.1,
                "Yezidi": 1.2,
                "Russian": 0.4,
                "Other": 0.3
            },
            ageStructure: {
                "0-14": 18.0,
                "15-64": 69.0,
                "65+": 13.0
            },
            urbanization: 63.3,
            lifeExpectancy: 75.5,
            fertilityRate: 1.6,
            literacyRate: 99.7
        },
        
        quickFacts: {
            internet: { tld: ".am", penetration: 79.0 },
            calling: { code: "+374" },
            electricity: { voltage: "230V", frequency: "50Hz", plugType: "C, F" },
            measurement: "Metric",
            emergencyNumber: "911"
        },
        
        disputes: [
            {
                type: "territorial",
                description: "Nagorno-Karabakh conflict with Azerbaijan",
                parties: ["Armenia", "Azerbaijan"],
                status: "Azerbaijan recaptured region in 2023"
            },
            {
                type: "closed border",
                description: "Closed border with Turkey since 1993",
                parties: ["Armenia", "Turkey"],
                status: "Ongoing diplomatic efforts"
            }
        ],
        
        funFacts: [
            "Armenia was the first country to adopt Christianity as a state religion (301 AD)",
            "The Armenian alphabet has 39 letters and was created in 405 AD",
            "Yerevan is older than Rome by 29 years",
            "Armenia is known as the 'Land of Churches'",
            "Armenians consider chess a national sport - it's mandatory in schools",
            "The apricot is considered the national fruit"
        ]
    },

    "georgia": {
        name: "Georgia",
        officialName: "Georgia",
        nativeName: "საქართველო (Sakartvelo)",
        iso3: "GEO",
        iso2: "GE",
        flag: "🇬🇪",
        
        capital: {
            name: "Tbilisi",
            population: 1170000,
            coordinates: { lat: 41.7151, lng: 44.8271 }
        },
        largestCity: "Tbilisi",
        population: {
            total: 3710000,
            year: 2024,
            density: 53,
            growth: -0.2
        },
        area: {
            total: 69700,
            land: 69490,
            water: 210,
            rank: 121
        },
        
        continent: "Asia",
        region: "Caucasus",
        subregion: "South Caucasus",
        coordinates: { lat: 42.3154, lng: 43.3569 },
        borders: ["Russia", "Azerbaijan", "Armenia", "Turkey"],
        coastline: 310,
        timezone: ["UTC+4"],
        drivingSide: "right",
        
        governmentType: "Parliamentary republic",
        leader: {
            headOfState: "President Salome Zourabichvili",
            headOfGovernment: "Prime Minister Irakli Kobakhidze"
        },
        independence: {
            date: "April 9, 1991",
            from: "Soviet Union"
        },
        nationalDay: { name: "Independence Day", date: "May 26" },
        divisions: {
            type: "regions",
            count: 9,
            major: ["Tbilisi", "Adjara", "Imereti", "Samegrelo-Zemo Svaneti", "Kvemo Kartli"]
        },
        
        economy: {
            gdpTotal: 27000000000,
            gdpPerCapita: 7200,
            gdpGrowth: 7.5,
            currency: { name: "Georgian lari", code: "GEL", symbol: "₾" },
            mainIndustries: ["steel", "machine tools", "textiles", "wine", "tourism"],
            exports: ["copper", "ferroalloys", "vehicles", "wine", "mineral waters"],
            imports: ["fuels", "vehicles", "machinery", "food", "pharmaceuticals"],
            majorPartners: ["Russia", "Turkey", "China", "Azerbaijan", "Bulgaria"]
        },
        hdi: 0.802,
        
        geography_links: {
            rivers: [
                { name: "Mtkvari (Kura)", description: "Longest river, flows through Tbilisi" },
                { name: "Rioni", description: "Major western river" },
                { name: "Enguri", description: "River with famous high dam" },
                { name: "Alazani", description: "River in wine region" }
            ],
            mountains: [
                { name: "Greater Caucasus", description: "Northern mountain range" },
                { name: "Mount Shkhara", description: "Highest peak at 5193m" },
                { name: "Mount Kazbek", description: "Iconic volcanic peak at 5047m" },
                { name: "Lesser Caucasus", description: "Southern mountains" }
            ],
            deserts: [],
            forests: [
                { name: "Colchic rainforests", description: "Unique subtropical forests" },
                { name: "Borjomi-Kharagauli forests", description: "European-protected forests" },
                { name: "Tusheti forests", description: "Mountain forests in northeast" }
            ],
            oceans: [],
            seas: [
                { name: "Black Sea", description: "Western coastline with resorts" }
            ],
            lakes: [
                { name: "Lake Paravani", description: "Largest lake" },
                { name: "Lake Tabatskuri", description: "High-altitude lake" },
                { name: "Lake Ritsa", description: "Famous lake in Abkhazia" }
            ],
            caves: [
                { name: "Krubera Cave", description: "One of deepest caves in the world" },
                { name: "Prometheus Cave", description: "Tourist cave with formations" }
            ]
        },
        
        culture: {
            languages: {
                official: ["Georgian"],
                regional: ["Abkhaz", "Ossetian", "Mingrelian", "Svan"],
                spoken: ["Georgian", "Russian", "English", "Azerbaijani"]
            },
            religions: {
                dominant: "Georgian Orthodox Christianity",
                breakdown: {
                    "Georgian Orthodox": 83.4,
                    "Islam": 10.7,
                    "Armenian Apostolic": 2.9,
                    "Catholic": 0.5,
                    "Other": 2.5
                }
            },
            heritageSites: [
                { name: "Historical Monuments of Mtskheta", type: "Cultural", year: 1994, description: "Ancient capital with churches" },
                { name: "Bagrati Cathedral and Gelati Monastery", type: "Cultural", year: 1994, description: "Medieval religious architecture" },
                { name: "Upper Svaneti", type: "Cultural", year: 1996, description: "Medieval tower villages" },
                { name: "Colchic Rainforests", type: "Natural", year: 2021, description: "Ancient temperate forests" }
            ],
            festivals: [
                { name: "Tbilisoba", date: "October", description: "Tbilisi city festival" },
                { name: "Rtveli", date: "September-October", description: "Wine harvest celebration" },
                { name: "Independence Day", date: "May 26", description: "National holiday" },
                { name: "Alilo", date: "January 7", description: "Orthodox Christmas procession" }
            ],
            cuisine: [
                { name: "Khachapuri", description: "Cheese-filled bread (various styles)" },
                { name: "Khinkali", description: "Soup dumplings" },
                { name: "Mtsvadi", description: "Grilled meat skewers" },
                { name: "Satsivi", description: "Walnut sauce with poultry" },
                { name: "Pkhali", description: "Vegetable pâtés with walnut" },
                { name: "Churchkhela", description: "Grape and nut candy" }
            ],
            arts: [
                { type: "Polyphonic singing", description: "UNESCO intangible heritage, unique harmonies" },
                { type: "Dance", description: "Traditional ensemble dances" },
                { type: "Architecture", description: "Medieval churches, tower houses" },
                { type: "Winemaking", description: "8000-year tradition using qvevri vessels" },
                { type: "Script", description: "Unique Georgian alphabet" }
            ],
            sports: {
                popular: ["Football", "Rugby", "Wrestling", "Basketball", "Judo"],
                achievements: ["Olympic wrestling and judo champions", "Strong rugby union"],
                venues: ["Boris Paichadze Stadium", "Tbilisi Arena"]
            }
        },
        
        history: {
            timeline: [
                { year: "1500 BC", event: "Colchis kingdom (Golden Fleece legend)" },
                { year: "302 BC", event: "Iberia kingdom established" },
                { year: "337 AD", event: "Christianity adopted as state religion" },
                { year: "1008", event: "Kingdom of Georgia unified" },
                { year: "1184-1213", event: "Golden Age under Queen Tamar" },
                { year: "1226", event: "Mongol invasions begin" },
                { year: "1801", event: "Russian Empire annexation" },
                { year: "1918", event: "First Georgian Republic declared" },
                { year: "1921", event: "Soviet occupation" },
                { year: "1991", event: "Independence from Soviet Union" },
                { year: "1992-1993", event: "War in Abkhazia" },
                { year: "2003", event: "Rose Revolution" },
                { year: "2008", event: "War with Russia over South Ossetia" },
                { year: "2023", event: "EU candidate status granted" }
            ],
            colonialHistory: null,
            historicalNames: ["Iberia", "Colchis", "Kingdom of Georgia", "Georgian SSR"]
        },
        
        demographics: {
            ethnicGroups: {
                "Georgian": 86.8,
                "Azerbaijani": 6.3,
                "Armenian": 4.5,
                "Russian": 0.7,
                "Other": 1.7
            },
            ageStructure: {
                "0-14": 18.5,
                "15-64": 65.0,
                "65+": 16.5
            },
            urbanization: 60.0,
            lifeExpectancy: 74.5,
            fertilityRate: 2.0,
            literacyRate: 99.6
        },
        
        quickFacts: {
            internet: { tld: ".ge", penetration: 76.0 },
            calling: { code: "+995" },
            electricity: { voltage: "220V", frequency: "50Hz", plugType: "C, F" },
            measurement: "Metric",
            emergencyNumber: "112"
        },
        
        disputes: [
            {
                type: "territorial",
                description: "South Ossetia under Russian occupation since 2008",
                parties: ["Georgia", "Russia", "South Ossetia"],
                status: "De facto independent, recognized by few countries"
            },
            {
                type: "territorial",
                description: "Abkhazia under Russian occupation since 2008",
                parties: ["Georgia", "Russia", "Abkhazia"],
                status: "De facto independent, recognized by few countries"
            }
        ],
        
        funFacts: [
            "Georgia is one of the oldest wine-making regions in the world (8000 years)",
            "The Georgian alphabet is one of only 14 unique scripts in use today",
            "Georgian polyphonic singing is UNESCO intangible heritage",
            "Georgia claims to be the birthplace of wine",
            "Tbilisi means 'warm place' due to its natural hot springs",
            "Georgia was the homeland of Joseph Stalin"
        ]
    }
};

// Make available globally
if (typeof window !== 'undefined') {
    window.ENCYCLOPEDIA_DATA_5 = ENCYCLOPEDIA_DATA_5;
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = CountriesData5;
}
