/* ============================================
   ENCYCLOPEDIA COUNTRIES DATA - PART 1
   Countries 1-20 (A-C) with Full Details
   ============================================ */

const CountriesData1 = [
    // ============================================
    // 1. AFGHANISTAN
    // ============================================
    {
        id: "AFG",
        name: "Afghanistan",
        official_name: "Islamic Emirate of Afghanistan",
        flag: "https://flagcdn.com/w320/af.png",
        coat_of_arms: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/National_emblem_of_Afghanistan_%28Taliban%29.svg/200px-National_emblem_of_Afghanistan_%28Taliban%29.svg.png",
        map_image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Afghanistan_%28orthographic_projection%29.svg/500px-Afghanistan_%28orthographic_projection%29.svg.png",

        basic: {
            capital: "Kabul",
            largest_city: "Kabul",
            continent: "Asia",
            region: "South Asia / Central Asia",
            subregion: "Southern Asia",
            population: "41.1 million (2023)",
            area: "652,230 km²",
            density: "63/km²",
            timezone: "UTC+4:30 (Afghanistan Time)",
            driving_side: "Right",
            calling_code: "+93",
            iso_codes: { alpha2: "AF", alpha3: "AFG", numeric: "004" },
            internet_tld: ".af"
        },

        location: {
            coordinates: [33.9391, 67.7100],
            bounds: [[29.4, 60.5], [38.5, 75.0]],
            neighbors: ["Pakistan", "Iran", "Turkmenistan", "Uzbekistan", "Tajikistan", "China"],
            border_lengths: {
                "Pakistan": "2,670 km",
                "Tajikistan": "1,357 km",
                "Iran": "921 km",
                "Turkmenistan": "804 km",
                "Uzbekistan": "144 km",
                "China": "91 km"
            },
            coastline: "Landlocked",
            highest_point: "Noshaq (7,492 m)",
            lowest_point: "Amu Darya (258 m)"
        },

        political: {
            government: "Unitary theocratic provisional government (de facto)",
            government_type: "Islamic Emirate",
            leader_title: "Supreme Leader",
            leader_name: "Hibatullah Akhundzada",
            legislature: "None (de facto)",
            independence: "August 19, 1919 (from British influence)",
            national_day: "August 19 (Independence Day)",
            administrative_divisions: "34 Provinces",
            provinces: ["Kabul", "Kandahar", "Herat", "Mazar-i-Sharif", "Jalalabad", "Kunduz", "Ghazni", "Balkh", "Baghlan", "Badakhshan"]
        },

        economy: {
            gdp_nominal: "$14.58 billion (2021)",
            gdp_ppp: "$81 billion (2021)",
            gdp_per_capita_nominal: "$364 (2021)",
            gdp_per_capita_ppp: "$2,024 (2021)",
            currency: "Afghan afghani (AFN)",
            currency_symbol: "؋",
            exchange_rate: "~87 AFN = 1 USD",
            major_sectors: ["Agriculture", "Mining", "Handicrafts", "Carpet weaving"],
            exports: ["Opium", "Fruits & nuts", "Carpets", "Wool", "Cotton"],
            imports: ["Machinery", "Food", "Textiles", "Petroleum products"],
            trade_partners: ["Pakistan", "India", "Iran", "China", "UAE"],
            unemployment: "~11.2%",
            poverty_rate: "~54.5%"
        },

        culture: {
            languages: ["Pashto (official)", "Dari/Persian (official)", "Uzbek", "Turkmen", "Balochi", "Pashayi"],
            official_languages: ["Pashto", "Dari"],
            religions: ["Islam (99.7%)", "Sunni (85-90%)", "Shia (10-15%)", "Other (0.3%)"],
            ethnic_groups: ["Pashtun (42%)", "Tajik (27%)", "Hazara (9%)", "Uzbek (9%)", "Aimaq (4%)", "Turkmen (3%)", "Baloch (2%)", "Other (4%)"],
            heritage_sites: "2 UNESCO Sites (Minaret of Jam, Bamiyan Valley)",
            national_symbols: ["Snow Leopard (national animal)", "Tulip (national flower)"],
            notable_cuisine: ["Kabuli Pulao", "Mantu", "Ashak", "Bolani", "Kebab"],
            traditional_dress: ["Perahan tunban", "Pakol cap", "Chadari (women)"],
            festivals: ["Nowruz (Persian New Year)", "Eid al-Fitr", "Eid al-Adha", "Independence Day"]
        },

        geography_links: {
            rivers: ["Amu Darya", "Helmand River", "Kabul River", "Hari River", "Arghandab River"],
            mountains: ["Hindu Kush", "Pamir Mountains", "Sulaiman Mountains", "Koh-i-Baba"],
            deserts: ["Registan Desert", "Dasht-e-Margo", "Dasht-e-Khash"],
            lakes: ["Band-e-Amir (first national park)", "Lake Zorkul", "Kajaki Reservoir"],
            plains: ["Sistan Basin", "Jalalabad Plain"],
            forests: [],
            oceans: []
        },

        history: {
            brief: "Ancient crossroads of civilizations along the Silk Road. Home to ancient Bactria, part of Persian, Greek, Mauryan, and Kushan empires. Islamic conquest in 7th century. Modern state founded by Ahmad Shah Durrani in 1747. British-Afghan Wars in 19th century. Soviet invasion (1979-1989). Taliban rule (1996-2001), then US intervention (2001-2021). Taliban returned to power in August 2021.",
            key_dates: [
                { year: "1747", event: "Ahmad Shah Durrani founds modern Afghanistan" },
                { year: "1839-1842", event: "First Anglo-Afghan War" },
                { year: "1919", event: "Independence from British influence (Treaty of Rawalpindi)" },
                { year: "1979-1989", event: "Soviet-Afghan War" },
                { year: "1996-2001", event: "First Taliban rule" },
                { year: "2001", event: "US invasion after 9/11 attacks" },
                { year: "2021", event: "Taliban retakes control; US withdrawal" }
            ]
        },

        disputes: ["Durand Line dispute with Pakistan", "Water sharing disputes (Helmand River)"],

        quick_facts: [
            "Landlocked country at crossroads of Central and South Asia",
            "Hindu Kush mountains cover most of the country",
            "One of the world's least developed countries",
            "Known as 'Graveyard of Empires'",
            "Rich in mineral resources (lithium, copper, iron)",
            "Bamiyan Buddhas (destroyed in 2001) were 6th century",
            "World's largest producer of opium",
            "Home to Marco Polo sheep and snow leopards"
        ],

        demographics: {
            population_growth: "2.3%",
            median_age: "18.4 years",
            life_expectancy: "64.5 years",
            literacy_rate: "43%",
            urban_population: "26%",
            sex_ratio: "1.05 males/female"
        },

        infrastructure: {
            airports: "23 (4 international)",
            major_ports: "None (landlocked)",
            railways: "Limited",
            roads: "42,150 km",
            internet_users: "~8.9 million (22%)"
        }
    },

    // ============================================
    // 2. ALBANIA
    // ============================================
    {
        id: "ALB",
        name: "Albania",
        official_name: "Republic of Albania",
        flag: "https://flagcdn.com/w320/al.png",
        coat_of_arms: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Coat_of_arms_of_Albania.svg/200px-Coat_of_arms_of_Albania.svg.png",
        map_image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Albania_%28orthographic_projection%29.svg/500px-Albania_%28orthographic_projection%29.svg.png",

        basic: {
            capital: "Tirana",
            largest_city: "Tirana",
            continent: "Europe",
            region: "Southern Europe",
            subregion: "Balkans",
            population: "2.78 million (2023)",
            area: "28,748 km²",
            density: "97/km²",
            timezone: "UTC+1 (CET) / UTC+2 (CEST)",
            driving_side: "Right",
            calling_code: "+355",
            iso_codes: { alpha2: "AL", alpha3: "ALB", numeric: "008" },
            internet_tld: ".al"
        },

        location: {
            coordinates: [41.1533, 20.1683],
            bounds: [[39.6, 19.3], [42.7, 21.1]],
            neighbors: ["Montenegro", "Kosovo", "North Macedonia", "Greece"],
            border_lengths: {
                "Greece": "212 km",
                "North Macedonia": "181 km",
                "Kosovo": "112 km",
                "Montenegro": "186 km"
            },
            coastline: "362 km (Adriatic & Ionian Seas)",
            highest_point: "Korab (2,764 m)",
            lowest_point: "Adriatic Sea (0 m)"
        },

        political: {
            government: "Unitary parliamentary constitutional republic",
            government_type: "Parliamentary Republic",
            leader_title: "President",
            leader_name: "Bajram Begaj",
            prime_minister: "Edi Rama",
            legislature: "Assembly (Kuvendi) - 140 seats",
            independence: "November 28, 1912 (from Ottoman Empire)",
            national_day: "November 28 (Independence Day) & November 29 (Liberation Day)",
            administrative_divisions: "12 Counties (Qarqe)",
            eu_status: "EU candidate (applied 2009, candidate since 2014)"
        },

        economy: {
            gdp_nominal: "$18.88 billion (2023)",
            gdp_ppp: "$46.48 billion (2023)",
            gdp_per_capita_nominal: "$6,810",
            gdp_per_capita_ppp: "$16,769",
            currency: "Albanian lek (ALL)",
            currency_symbol: "L",
            exchange_rate: "~95 ALL = 1 USD",
            major_sectors: ["Services", "Industry", "Agriculture", "Tourism", "Remittances"],
            exports: ["Textiles", "Footwear", "Metals", "Crude oil", "Vegetables"],
            imports: ["Machinery", "Foodstuffs", "Textiles", "Chemicals"],
            trade_partners: ["Italy", "Greece", "China", "Germany", "Turkey"],
            unemployment: "~11%",
            poverty_rate: "~22%"
        },

        culture: {
            languages: ["Albanian (official)"],
            official_languages: ["Albanian"],
            religions: ["Islam (58.8%)", "Christianity (16.9%)", "Unaffiliated (13.8%)", "Other (10.5%)"],
            ethnic_groups: ["Albanian (82.6%)", "Greek (0.9%)", "Other (1%)", "Unspecified (15.5%)"],
            heritage_sites: "4 UNESCO Sites (Butrint, Berat & Gjirokastër, Lake Ohrid region, Ancient & Primeval Beech Forests)",
            national_symbols: ["Double-headed eagle", "Golden Eagle (national animal)"],
            notable_cuisine: ["Byrek", "Tavë kosi", "Fërgesë", "Qofte", "Rakia"],
            traditional_dress: ["Fustanella", "Xhubleta"],
            festivals: ["Summer Day (Dita e Verës)", "Independence Day", "Nowruz"]
        },

        geography_links: {
            rivers: ["Drin River", "Mat River", "Shkumbin River", "Vjosë River", "Seman River"],
            mountains: ["Albanian Alps (Accursed Mountains)", "Korab", "Ceraunian Mountains", "Pindus Mountains"],
            deserts: [],
            lakes: ["Lake Ohrid", "Lake Shkodër (Skadar)", "Lake Prespa"],
            plains: ["Western Lowlands", "Korçë Basin"],
            forests: ["Albanian Alps forests"],
            oceans: ["Adriatic Sea", "Ionian Sea"]
        },

        history: {
            brief: "Ancient Illyria, later part of Roman and Byzantine empires. Ottoman rule from 15th century to 1912. Independent in 1912. Kingdom under Zog I (1928-1939). Italian then German occupation in WWII. Communist state under Enver Hoxha (1944-1985), extremely isolated. Democratic transition began 1991.",
            key_dates: [
                { year: "1912", event: "Independence declared from Ottoman Empire" },
                { year: "1939", event: "Italian invasion and occupation" },
                { year: "1944", event: "Communist regime established under Enver Hoxha" },
                { year: "1967", event: "Declared world's first atheist state" },
                { year: "1991", event: "End of communist rule, democratic elections" },
                { year: "2009", event: "NATO membership" },
                { year: "2014", event: "EU candidate status granted" }
            ]
        },

        disputes: [],

        quick_facts: [
            "One of Europe's oldest inhabited regions",
            "Has over 750,000 bunkers built during communist era",
            "Albanian language is unique Indo-European branch",
            "Mother Teresa was ethnic Albanian",
            "One of Europe's fastest growing tourism destinations",
            "Albanian Riviera rivals Mediterranean beaches",
            "Youngest population in Europe (median age 36)",
            "Sworn virgins (burrnesha) tradition unique to Albania"
        ],

        demographics: {
            population_growth: "-0.7%",
            median_age: "36.4 years",
            life_expectancy: "79.0 years",
            literacy_rate: "98.1%",
            urban_population: "63.8%",
            sex_ratio: "0.98 males/female"
        },

        infrastructure: {
            airports: "5 (1 international - Tirana)",
            major_ports: ["Durrës", "Vlorë", "Shëngjin", "Sarandë"],
            railways: "447 km",
            roads: "18,000 km",
            internet_users: "~2.1 million (72%)"
        }
    },

    // ============================================
    // 3. ALGERIA
    // ============================================
    {
        id: "DZA",
        name: "Algeria",
        official_name: "People's Democratic Republic of Algeria",
        flag: "https://flagcdn.com/w320/dz.png",
        coat_of_arms: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Emblem_of_Algeria.svg/200px-Emblem_of_Algeria.svg.png",
        map_image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Algeria_%28orthographic_projection%29.svg/500px-Algeria_%28orthographic_projection%29.svg.png",

        basic: {
            capital: "Algiers",
            largest_city: "Algiers",
            continent: "Africa",
            region: "North Africa",
            subregion: "Maghreb",
            population: "45.6 million (2023)",
            area: "2,381,741 km²",
            density: "19/km²",
            timezone: "UTC+1 (CET)",
            driving_side: "Right",
            calling_code: "+213",
            iso_codes: { alpha2: "DZ", alpha3: "DZA", numeric: "012" },
            internet_tld: ".dz"
        },

        location: {
            coordinates: [28.0339, 1.6596],
            bounds: [[19.0, -9.0], [37.1, 12.0]],
            neighbors: ["Tunisia", "Libya", "Niger", "Mali", "Mauritania", "Western Sahara", "Morocco"],
            border_lengths: {
                "Morocco": "1,900 km",
                "Tunisia": "1,034 km",
                "Libya": "989 km",
                "Niger": "951 km",
                "Mali": "1,359 km",
                "Mauritania": "460 km",
                "Western Sahara": "41 km"
            },
            coastline: "998 km (Mediterranean Sea)",
            highest_point: "Mount Tahat (2,908 m)",
            lowest_point: "Chott Melrhir (-40 m)"
        },

        political: {
            government: "Unitary semi-presidential constitutional republic",
            government_type: "Semi-presidential Republic",
            leader_title: "President",
            leader_name: "Abdelmadjid Tebboune",
            prime_minister: "Nadir Larbaoui",
            legislature: "Bicameral Parliament (Council of the Nation + People's National Assembly)",
            independence: "July 5, 1962 (from France)",
            national_day: "July 5 (Independence Day) & November 1 (Revolution Day)",
            administrative_divisions: "58 Provinces (Wilayas)"
        },

        economy: {
            gdp_nominal: "$195 billion (2023)",
            gdp_ppp: "$580 billion (2023)",
            gdp_per_capita_nominal: "$4,279",
            gdp_per_capita_ppp: "$12,728",
            currency: "Algerian dinar (DZD)",
            currency_symbol: "د.ج",
            exchange_rate: "~135 DZD = 1 USD",
            major_sectors: ["Hydrocarbons (oil & gas)", "Mining", "Agriculture", "Manufacturing"],
            exports: ["Petroleum", "Natural gas", "Petroleum products"],
            imports: ["Capital goods", "Foodstuffs", "Consumer goods"],
            trade_partners: ["Italy", "Spain", "France", "USA", "China"],
            unemployment: "~11.7%",
            poverty_rate: "~5.5%"
        },

        culture: {
            languages: ["Arabic (official)", "Berber/Tamazight (official)", "French (widely used)"],
            official_languages: ["Arabic", "Berber/Tamazight"],
            religions: ["Islam (99%) - predominantly Sunni Maliki", "Christianity (<1%)", "Judaism (<1%)"],
            ethnic_groups: ["Arab-Berber (99%)", "European (<1%)"],
            heritage_sites: "7 UNESCO Sites (Casbah of Algiers, Tipasa, Timgad, Djémila, etc.)",
            national_symbols: ["Fennec fox (national animal)", "Iris (national flower)"],
            notable_cuisine: ["Couscous", "Chakhchoukha", "Rechta", "Makroud", "Bourek"],
            traditional_dress: ["Burnous", "Haik", "Karakou"],
            festivals: ["Eid al-Fitr", "Eid al-Adha", "Independence Day", "Yennayer (Berber New Year)"]
        },

        geography_links: {
            rivers: ["Chelif River", "Seybouse River", "Medjerda River"],
            mountains: ["Atlas Mountains", "Tell Atlas", "Saharan Atlas", "Hoggar Mountains (Ahaggar)"],
            deserts: ["Sahara Desert (covers 80% of Algeria)", "Grand Erg Oriental", "Grand Erg Occidental"],
            lakes: ["Chott Melrhir", "Chott ech Chergui", "Lake Fetzara"],
            plains: ["Mitidja Plain", "Chelif Plain"],
            forests: ["Djurdjura National Park", "Chréa National Park"],
            oceans: ["Mediterranean Sea"]
        },

        history: {
            brief: "Ancient Numidia, then Roman province. Vandal and Byzantine rule. Arab conquest in 7th century brought Islam. Ottoman regency from 1516. French colonization (1830-1962) was brutal. Algerian War of Independence (1954-1962) led to independence. Single-party state until 1989. Civil war in 1990s. Current republic since 1999.",
            key_dates: [
                { year: "1830", event: "French invasion and colonization begins" },
                { year: "1954", event: "Algerian War of Independence begins" },
                { year: "1962", event: "Independence from France" },
                { year: "1991-2002", event: "Algerian Civil War (~200,000 deaths)" },
                { year: "2019", event: "Hirak protest movement; Bouteflika resigns" }
            ]
        },

        disputes: ["Western Sahara (supports POLISARIO)", "Border closure with Morocco since 1994"],

        quick_facts: [
            "Largest country in Africa by area",
            "10th largest country in the world",
            "80% of territory is Sahara Desert",
            "Has Africa's largest proven oil reserves",
            "World's 4th largest natural gas exporter",
            "Casbah of Algiers is UNESCO World Heritage Site",
            "Home to ancient Roman ruins (Timgad, Djémila)",
            "French is widely spoken but not official"
        ],

        demographics: {
            population_growth: "1.6%",
            median_age: "28.9 years",
            life_expectancy: "77.1 years",
            literacy_rate: "81.4%",
            urban_population: "74%",
            sex_ratio: "1.02 males/female"
        },

        infrastructure: {
            airports: "42 (13 international)",
            major_ports: ["Algiers", "Oran", "Annaba", "Béjaïa"],
            railways: "4,200 km",
            roads: "180,000 km",
            internet_users: "~27 million (60%)"
        }
    },

    // ============================================
    // 4. ARGENTINA
    // ============================================
    {
        id: "ARG",
        name: "Argentina",
        official_name: "Argentine Republic",
        flag: "https://flagcdn.com/w320/ar.png",
        coat_of_arms: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Coat_of_arms_of_Argentina.svg/200px-Coat_of_arms_of_Argentina.svg.png",
        map_image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Argentina_%28orthographic_projection%29.svg/500px-Argentina_%28orthographic_projection%29.svg.png",

        basic: {
            capital: "Buenos Aires",
            largest_city: "Buenos Aires",
            continent: "South America",
            region: "South America",
            subregion: "Southern Cone",
            population: "46.6 million (2023)",
            area: "2,780,400 km²",
            density: "17/km²",
            timezone: "UTC-3 (ART)",
            driving_side: "Right",
            calling_code: "+54",
            iso_codes: { alpha2: "AR", alpha3: "ARG", numeric: "032" },
            internet_tld: ".ar"
        },

        location: {
            coordinates: [-38.4161, -63.6167],
            bounds: [[-55.1, -73.6], [-21.8, -53.6]],
            neighbors: ["Chile", "Bolivia", "Paraguay", "Brazil", "Uruguay"],
            border_lengths: {
                "Chile": "6,691 km",
                "Brazil": "1,263 km",
                "Paraguay": "2,531 km",
                "Bolivia": "942 km",
                "Uruguay": "541 km"
            },
            coastline: "4,989 km (Atlantic Ocean)",
            highest_point: "Aconcagua (6,961 m) - highest in Western Hemisphere",
            lowest_point: "Laguna del Carbón (-105 m) - lowest in Western Hemisphere"
        },

        political: {
            government: "Federal presidential constitutional republic",
            government_type: "Presidential Republic",
            leader_title: "President",
            leader_name: "Javier Milei",
            legislature: "Bicameral Congress (Senate + Chamber of Deputies)",
            independence: "July 9, 1816 (from Spain)",
            national_day: "May 25 (May Revolution) & July 9 (Independence Day)",
            administrative_divisions: "23 Provinces + 1 Autonomous City (Buenos Aires)"
        },

        economy: {
            gdp_nominal: "$641 billion (2023)",
            gdp_ppp: "$1.2 trillion (2023)",
            gdp_per_capita_nominal: "$13,709",
            gdp_per_capita_ppp: "$26,505",
            currency: "Argentine peso (ARS)",
            currency_symbol: "$",
            exchange_rate: "~850 ARS = 1 USD (highly volatile)",
            major_sectors: ["Agriculture", "Manufacturing", "Mining", "Services"],
            exports: ["Soybeans", "Corn", "Wheat", "Beef", "Vehicles", "Petroleum"],
            imports: ["Machinery", "Motor vehicles", "Petroleum", "Natural gas"],
            trade_partners: ["Brazil", "China", "USA", "Chile", "Germany"],
            unemployment: "~6.3%",
            inflation: ">140% (2023-2024)",
            poverty_rate: "~40%"
        },

        culture: {
            languages: ["Spanish (official)"],
            official_languages: ["Spanish"],
            religions: ["Christianity (79.6%)", "Roman Catholic (62.9%)", "Protestant (15.3%)", "None (18.9%)", "Other (1.5%)"],
            ethnic_groups: ["European descent (97%)", "Mestizo, Indigenous, Others (3%)"],
            heritage_sites: "11 UNESCO Sites (Iguazu Falls, Los Glaciares, Quebrada de Humahuaca, etc.)",
            national_symbols: ["Rufous hornero (national bird)", "Ceibo flower"],
            notable_cuisine: ["Asado (BBQ)", "Empanadas", "Dulce de leche", "Mate", "Milanesa", "Chimichurri"],
            traditional_dress: ["Gaucho attire", "Bombacha pants", "Poncho"],
            festivals: ["Carnival", "Tango Festival", "Vendimia (Wine Harvest)", "Independence Day"],
            famous_exports: ["Tango", "Football (Messi, Maradona)", "Wine", "Beef"]
        },

        geography_links: {
            rivers: ["Paraná River", "Uruguay River", "Río de la Plata", "Colorado River", "Negro River"],
            mountains: ["Andes Mountains", "Aconcagua", "Sierras Pampeanas", "Patagonian Andes"],
            deserts: ["Patagonian Desert", "Monte Desert"],
            lakes: ["Lake Nahuel Huapi", "Lake Argentino", "Lake Viedma"],
            plains: ["Pampas", "Gran Chaco"],
            forests: ["Valdivian temperate forests", "Atlantic Forest (Misiones)"],
            oceans: ["Atlantic Ocean", "Southern Ocean"],
            glaciers: ["Perito Moreno Glacier", "Upsala Glacier"]
        },

        history: {
            brief: "Indigenous peoples for thousands of years. Spanish colonization from 1516. Viceroyalty of Río de la Plata in 1776. May Revolution (1810) began independence movement. Declared independent in 1816. Civil wars in 19th century. Mass European immigration (1880-1930). Perón era (1946-1955, 1973-1974). Military dictatorship (1976-1983) with 'Dirty War'. Democracy restored 1983.",
            key_dates: [
                { year: "1816", event: "Independence declared from Spain" },
                { year: "1946-1955", event: "First Perón presidency" },
                { year: "1976-1983", event: "Military dictatorship ('Dirty War')" },
                { year: "1982", event: "Falklands War with United Kingdom" },
                { year: "1983", event: "Return to democracy" },
                { year: "2001", event: "Economic crisis and debt default" },
                { year: "2023", event: "Javier Milei elected president" }
            ]
        },

        disputes: ["Falkland Islands (Islas Malvinas) - claimed from UK", "South Georgia and South Sandwich Islands"],

        quick_facts: [
            "8th largest country in the world",
            "Largest Spanish-speaking country by area",
            "Home to highest peak outside Asia (Aconcagua)",
            "Birthplace of Tango (with Uruguay)",
            "Won FIFA World Cup 3 times (1978, 1986, 2022)",
            "World's 5th largest wine producer",
            "Has both lowest and highest points in Western Hemisphere",
            "Pope Francis (Jorge Bergoglio) is Argentine"
        ],

        demographics: {
            population_growth: "0.8%",
            median_age: "32.4 years",
            life_expectancy: "77.3 years",
            literacy_rate: "99%",
            urban_population: "92%",
            sex_ratio: "0.96 males/female"
        },

        infrastructure: {
            airports: "161 (28 international)",
            major_ports: ["Buenos Aires", "Bahía Blanca", "Rosario", "La Plata"],
            railways: "36,917 km",
            roads: "281,290 km",
            internet_users: "~40 million (87%)"
        }
    },

    // ============================================
    // 5. AUSTRALIA
    // ============================================
    {
        id: "AUS",
        name: "Australia",
        official_name: "Commonwealth of Australia",
        flag: "https://flagcdn.com/w320/au.png",
        coat_of_arms: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Coat_of_Arms_of_Australia.svg/200px-Coat_of_Arms_of_Australia.svg.png",
        map_image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Australia_%28orthographic_projection%29.svg/500px-Australia_%28orthographic_projection%29.svg.png",

        basic: {
            capital: "Canberra",
            largest_city: "Sydney",
            continent: "Oceania",
            region: "Oceania",
            subregion: "Australia and New Zealand",
            population: "26.4 million (2023)",
            area: "7,692,024 km²",
            density: "3.4/km²",
            timezone: "UTC+8 to UTC+10 (3 time zones)",
            driving_side: "Left",
            calling_code: "+61",
            iso_codes: { alpha2: "AU", alpha3: "AUS", numeric: "036" },
            internet_tld: ".au"
        },

        location: {
            coordinates: [-25.2744, 133.7751],
            bounds: [[-43.6, 113.2], [-10.7, 153.6]],
            neighbors: [],
            border_lengths: {},
            coastline: "25,760 km",
            highest_point: "Mount Kosciuszko (2,228 m)",
            lowest_point: "Lake Eyre (-15 m)"
        },

        political: {
            government: "Federal parliamentary constitutional monarchy",
            government_type: "Parliamentary Constitutional Monarchy",
            monarch: "King Charles III",
            leader_title: "Prime Minister",
            leader_name: "Anthony Albanese",
            governor_general: "Sam Mostyn",
            legislature: "Bicameral Parliament (Senate + House of Representatives)",
            independence: "January 1, 1901 (Federation)",
            national_day: "January 26 (Australia Day)",
            administrative_divisions: "6 States + 2 Territories",
            states: ["New South Wales", "Victoria", "Queensland", "Western Australia", "South Australia", "Tasmania"],
            territories: ["Australian Capital Territory", "Northern Territory"]
        },

        economy: {
            gdp_nominal: "$1.7 trillion (2023)",
            gdp_ppp: "$1.6 trillion (2023)",
            gdp_per_capita_nominal: "$65,366",
            gdp_per_capita_ppp: "$60,443",
            currency: "Australian dollar (AUD)",
            currency_symbol: "A$",
            exchange_rate: "~1.54 AUD = 1 USD",
            major_sectors: ["Mining", "Services", "Agriculture", "Tourism", "Education"],
            exports: ["Iron ore", "Coal", "Natural gas", "Gold", "Beef", "Wheat", "Wool"],
            imports: ["Machinery", "Vehicles", "Petroleum", "Telecommunications equipment"],
            trade_partners: ["China", "Japan", "South Korea", "USA", "India", "UK"],
            unemployment: "~3.5%",
            poverty_rate: "~13.6%"
        },

        culture: {
            languages: ["English (de facto national)"],
            official_languages: ["None (English de facto)"],
            religions: ["Christianity (43.9%)", "No religion (38.9%)", "Islam (3.2%)", "Hinduism (2.7%)", "Buddhism (2.4%)", "Other (8.9%)"],
            ethnic_groups: ["English (25%)", "Australian (22%)", "Irish (7.5%)", "Scottish (6.4%)", "Chinese (5.5%)", "Italian (4.4%)", "German (4.0%)", "Indigenous (3.2%)"],
            heritage_sites: "20 UNESCO Sites (Great Barrier Reef, Sydney Opera House, Uluru, etc.)",
            national_symbols: ["Kangaroo", "Emu", "Golden wattle (national flower)"],
            notable_cuisine: ["Meat pie", "Vegemite", "Pavlova", "Lamington", "Barramundi", "Tim Tams"],
            traditional_dress: ["Akubra hat", "RM Williams boots"],
            festivals: ["Australia Day", "Melbourne Cup", "Vivid Sydney", "ANZAC Day"],
            sports: ["Cricket", "Australian Rules Football", "Rugby", "Swimming", "Tennis"]
        },

        geography_links: {
            rivers: ["Murray River", "Darling River", "Murrumbidgee River", "Lachlan River"],
            mountains: ["Great Dividing Range", "Australian Alps", "Snowy Mountains", "Blue Mountains"],
            deserts: ["Great Victoria Desert", "Great Sandy Desert", "Simpson Desert", "Gibson Desert", "Tanami Desert"],
            lakes: ["Lake Eyre", "Lake Torrens", "Lake Gairdner"],
            plains: ["Nullarbor Plain", "Murray-Darling Basin"],
            forests: ["Daintree Rainforest", "Tasmanian wilderness"],
            oceans: ["Pacific Ocean", "Indian Ocean", "Southern Ocean"],
            reefs: ["Great Barrier Reef (world's largest coral reef system)"]
        },

        history: {
            brief: "Indigenous Australians (Aboriginal and Torres Strait Islander peoples) inhabited for 65,000+ years. First European contact in 1606. British colonization began with First Fleet in 1788 (initially as penal colony). Federation of six colonies into Commonwealth of Australia in 1901. Participated in both World Wars. Post-WWII immigration transformed demographics. 'White Australia' policy ended 1973.",
            key_dates: [
                { year: "~65,000 BCE", event: "Indigenous Australians first arrive" },
                { year: "1770", event: "Captain James Cook claims east coast for Britain" },
                { year: "1788", event: "First Fleet arrives; British colonization begins" },
                { year: "1901", event: "Federation - Commonwealth of Australia established" },
                { year: "1942", event: "Battle of the Coral Sea (WWII)" },
                { year: "1967", event: "Referendum gives Indigenous Australians citizenship rights" },
                { year: "2008", event: "Government apology to Stolen Generations" }
            ]
        },

        disputes: [],

        quick_facts: [
            "Only country that is also a continent",
            "World's 6th largest country by area",
            "Home to Great Barrier Reef - largest living structure on Earth",
            "80% of plants and animals are unique to Australia",
            "Has more sheep than people",
            "Contains 10% of world's biodiversity",
            "Uluru rises 348m above ground, 863m total",
            "Has 10,000+ beaches",
            "Highest minimum wage in the world",
            "Most venomous animals and deadliest creatures"
        ],

        demographics: {
            population_growth: "1.1%",
            median_age: "38.1 years",
            life_expectancy: "83.4 years",
            literacy_rate: "99%",
            urban_population: "86%",
            sex_ratio: "0.99 males/female",
            indigenous_population: "~3.8% (Aboriginal and Torres Strait Islander)"
        },

        infrastructure: {
            airports: "418 (25 international)",
            major_ports: ["Melbourne", "Sydney", "Brisbane", "Fremantle", "Adelaide"],
            railways: "33,343 km",
            roads: "877,600 km",
            internet_users: "~24 million (91%)"
        }
    },

    // ============================================
    // 6. AUSTRIA
    // ============================================
    {
        id: "AUT",
        name: "Austria",
        official_name: "Republic of Austria",
        flag: "https://flagcdn.com/w320/at.png",
        coat_of_arms: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Austria_Bundesadler.svg/200px-Austria_Bundesadler.svg.png",
        map_image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Austria_%28orthographic_projection%29.svg/500px-Austria_%28orthographic_projection%29.svg.png",

        basic: {
            capital: "Vienna",
            largest_city: "Vienna",
            continent: "Europe",
            region: "Central Europe",
            subregion: "Western Europe",
            population: "9.1 million (2023)",
            area: "83,871 km²",
            density: "109/km²",
            timezone: "UTC+1 (CET) / UTC+2 (CEST)",
            driving_side: "Right",
            calling_code: "+43",
            iso_codes: { alpha2: "AT", alpha3: "AUT", numeric: "040" },
            internet_tld: ".at"
        },

        location: {
            coordinates: [47.5162, 14.5501],
            bounds: [[46.4, 9.5], [49.0, 17.2]],
            neighbors: ["Germany", "Czech Republic", "Slovakia", "Hungary", "Slovenia", "Italy", "Switzerland", "Liechtenstein"],
            border_lengths: {
                "Germany": "801 km",
                "Czech Republic": "402 km",
                "Hungary": "321 km",
                "Italy": "404 km",
                "Slovenia": "299 km",
                "Switzerland": "158 km",
                "Slovakia": "105 km",
                "Liechtenstein": "34 km"
            },
            coastline: "Landlocked",
            highest_point: "Grossglockner (3,798 m)",
            lowest_point: "Neusiedler See (115 m)"
        },

        political: {
            government: "Federal parliamentary republic",
            government_type: "Parliamentary Republic",
            leader_title: "President",
            leader_name: "Alexander Van der Bellen",
            chancellor: "Karl Nehammer",
            legislature: "Bicameral Parliament (Federal Council + National Council)",
            independence: "1156 (Duchy), 1918 (Republic)",
            national_day: "October 26 (Declaration of Neutrality, 1955)",
            administrative_divisions: "9 States (Bundesländer)",
            states: ["Burgenland", "Carinthia", "Lower Austria", "Upper Austria", "Salzburg", "Styria", "Tyrol", "Vorarlberg", "Vienna"],
            eu_member: "Since 1995"
        },

        economy: {
            gdp_nominal: "$516 billion (2023)",
            gdp_ppp: "$594 billion (2023)",
            gdp_per_capita_nominal: "$56,802",
            gdp_per_capita_ppp: "$65,405",
            currency: "Euro (EUR)",
            currency_symbol: "€",
            exchange_rate: "~0.92 EUR = 1 USD",
            major_sectors: ["Services", "Industry", "Tourism", "Agriculture"],
            exports: ["Machinery", "Vehicles", "Paper", "Metal goods", "Chemicals", "Iron and steel"],
            imports: ["Machinery", "Vehicles", "Chemicals", "Metal goods", "Oil and gas"],
            trade_partners: ["Germany", "USA", "Italy", "Switzerland", "France"],
            unemployment: "~5.2%",
            poverty_rate: "~13.3%"
        },

        culture: {
            languages: ["German (official)", "Regional: Croatian, Hungarian, Slovenian"],
            official_languages: ["German"],
            religions: ["Roman Catholic (57%)", "None (22%)", "Islam (8%)", "Orthodox (5%)", "Protestant (4%)", "Other (4%)"],
            ethnic_groups: ["Austrian (80.8%)", "German (2.6%)", "Turkish (2.4%)", "Serbian (2.2%)", "Other (12%)"],
            heritage_sites: "12 UNESCO Sites (Historic Centre of Vienna, Schönbrunn Palace, Hallstatt, etc.)",
            national_symbols: ["Black eagle", "Edelweiss (national flower)", "Austrian flag"],
            notable_cuisine: ["Wiener Schnitzel", "Sachertorte", "Apfelstrudel", "Tafelspitz", "Kaiserschmarrn"],
            traditional_dress: ["Dirndl", "Lederhosen", "Tracht"],
            festivals: ["Vienna Opera Ball", "Salzburg Festival", "Christkindlmarkt"],
            famous_for: ["Classical music (Mozart, Haydn, Schubert)", "Alpine skiing", "Coffee house culture"]
        },

        geography_links: {
            rivers: ["Danube River", "Inn River", "Mur River", "Drau River", "Salzach River"],
            mountains: ["Austrian Alps", "Grossglockner", "Wildspitze", "Northern Limestone Alps"],
            deserts: [],
            lakes: ["Lake Neusiedl", "Lake Constance (shared)", "Wolfgangsee", "Wörthersee", "Attersee"],
            plains: ["Vienna Basin", "Pannonian Plain (eastern Austria)"],
            forests: ["Alpine forests", "Vienna Woods"],
            oceans: []
        },

        history: {
            brief: "Celtic and Roman settlement. Part of Holy Roman Empire. Habsburg dynasty ruled from 1278. Austrian Empire (1804). Austro-Hungarian Empire (1867-1918). First Republic (1918-1938). Annexed by Nazi Germany (Anschluss, 1938). Occupied after WWII. Independence restored 1955 with permanent neutrality. EU member since 1995.",
            key_dates: [
                { year: "1278", event: "Habsburg rule begins" },
                { year: "1867", event: "Austro-Hungarian Compromise; dual monarchy established" },
                { year: "1914", event: "Assassination of Archduke Franz Ferdinand triggers WWI" },
                { year: "1918", event: "First Austrian Republic proclaimed" },
                { year: "1938", event: "Anschluss - Nazi Germany annexes Austria" },
                { year: "1955", event: "Austrian State Treaty; permanent neutrality" },
                { year: "1995", event: "Austria joins European Union" }
            ]
        },

        disputes: [],

        quick_facts: [
            "Vienna consistently ranked world's most livable city",
            "Birthplace of Mozart, Freud, and Hitler",
            "62% of country covered by Alps",
            "Invented croissant (Kipferl)",
            "Has oldest zoo in the world (Schönbrunn, 1752)",
            "World's oldest restaurant (Stiftskeller St. Peter, 803 AD)",
            "More than 50% of electricity from renewable sources",
            "Officially neutral since 1955"
        ],

        demographics: {
            population_growth: "0.5%",
            median_age: "44.5 years",
            life_expectancy: "82.0 years",
            literacy_rate: "99%",
            urban_population: "59%",
            sex_ratio: "0.97 males/female"
        },

        infrastructure: {
            airports: "52 (6 international)",
            major_ports: [],
            railways: "6,123 km",
            roads: "138,696 km",
            internet_users: "~8 million (90%)"
        }
    },

    // ============================================
    // 7. BANGLADESH
    // ============================================
    {
        id: "BGD",
        name: "Bangladesh",
        official_name: "People's Republic of Bangladesh",
        flag: "https://flagcdn.com/w320/bd.png",
        coat_of_arms: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/National_emblem_of_Bangladesh.svg/200px-National_emblem_of_Bangladesh.svg.png",
        map_image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Bangladesh_%28orthographic_projection%29.svg/500px-Bangladesh_%28orthographic_projection%29.svg.png",

        basic: {
            capital: "Dhaka",
            largest_city: "Dhaka",
            continent: "Asia",
            region: "South Asia",
            subregion: "Southern Asia",
            population: "171.2 million (2023)",
            area: "147,570 km²",
            density: "1,265/km² (one of highest in world)",
            timezone: "UTC+6 (BST)",
            driving_side: "Left",
            calling_code: "+880",
            iso_codes: { alpha2: "BD", alpha3: "BGD", numeric: "050" },
            internet_tld: ".bd"
        },

        location: {
            coordinates: [23.6850, 90.3563],
            bounds: [[20.7, 88.0], [26.6, 92.7]],
            neighbors: ["India", "Myanmar"],
            border_lengths: {
                "India": "4,142 km",
                "Myanmar": "271 km"
            },
            coastline: "580 km (Bay of Bengal)",
            highest_point: "Saka Haphong (1,052 m) or Keokradong (986 m)",
            lowest_point: "Bay of Bengal (0 m)"
        },

        political: {
            government: "Unitary parliamentary constitutional republic",
            government_type: "Parliamentary Republic",
            leader_title: "President",
            leader_name: "Mohammed Shahabuddin",
            prime_minister: "Sheikh Hasina",
            legislature: "Unicameral Jatiya Sangsad (Parliament) - 350 seats",
            independence: "March 26, 1971 (declared from Pakistan), December 16, 1971 (Victory Day)",
            national_day: "March 26 (Independence Day) & December 16 (Victory Day)",
            administrative_divisions: "8 Divisions, 64 Districts"
        },

        economy: {
            gdp_nominal: "$460 billion (2023)",
            gdp_ppp: "$1.12 trillion (2023)",
            gdp_per_capita_nominal: "$2,688",
            gdp_per_capita_ppp: "$6,593",
            currency: "Bangladeshi taka (BDT)",
            currency_symbol: "৳",
            exchange_rate: "~110 BDT = 1 USD",
            major_sectors: ["Garments/Textiles", "Agriculture", "Pharmaceuticals", "Remittances", "Shipbuilding"],
            exports: ["Ready-made garments (80%+)", "Textiles", "Jute", "Leather", "Seafood"],
            imports: ["Machinery", "Chemicals", "Iron and steel", "Textiles", "Foodstuffs", "Petroleum"],
            trade_partners: ["USA", "Germany", "UK", "China", "India", "Japan"],
            unemployment: "~5.3%",
            poverty_rate: "~18.7%"
        },

        culture: {
            languages: ["Bengali/Bangla (official)"],
            official_languages: ["Bengali"],
            religions: ["Islam (91%)", "Hinduism (8%)", "Buddhism (0.6%)", "Christianity (0.4%)"],
            ethnic_groups: ["Bengali (98%)", "Indigenous hill tribes (1.1%)", "Other (0.9%)"],
            heritage_sites: "3 UNESCO Sites (Ruins of Buddhist Vihara at Paharpur, Mosque City of Bagerhat, Sundarbans)",
            national_symbols: ["Royal Bengal Tiger", "Water lily (national flower)", "Mango tree"],
            notable_cuisine: ["Hilsa fish (Ilish)", "Biryani", "Pitha", "Mishti doi", "Fuchka"],
            traditional_dress: ["Sari", "Salwar kameez", "Lungi", "Panjabi"],
            festivals: ["Pohela Boishakh (Bengali New Year)", "Eid al-Fitr", "Eid al-Adha", "Durga Puja"],
            famous_for: ["Garment industry", "Rickshaws", "Cricket", "Bengali literature"]
        },

        geography_links: {
            rivers: ["Ganges (Padma)", "Brahmaputra (Jamuna)", "Meghna", "Surma", "Teesta"],
            mountains: ["Chittagong Hill Tracts"],
            deserts: [],
            lakes: ["Kaptai Lake"],
            plains: ["Bengal Delta (world's largest river delta)"],
            forests: ["Sundarbans (world's largest mangrove forest)"],
            oceans: ["Bay of Bengal"]
        },

        history: {
            brief: "Part of ancient Bengal region. Buddhist Pala Empire (8th-12th century). Islamic Sultanate (13th-16th century). Mughal Bengal (16th-18th century). British East India Company control, then British Raj. Part of Pakistan as East Pakistan (1947-1971). Liberation War led to independence in 1971 with Indian support.",
            key_dates: [
                { year: "1757", event: "Battle of Plassey; British control begins" },
                { year: "1947", event: "Partition; becomes East Pakistan" },
                { year: "1952", event: "Language Movement for Bengali" },
                { year: "1971", event: "Liberation War; independence from Pakistan" },
                { year: "1975", event: "Sheikh Mujibur Rahman assassinated" },
                { year: "1991", event: "Democracy restored" },
                { year: "2013", event: "Rana Plaza collapse; garment industry reforms" }
            ]
        },

        disputes: ["Rohingya refugee crisis (from Myanmar)", "Maritime boundary (resolved with India and Myanmar)"],

        quick_facts: [
            "8th most populous country in the world",
            "World's largest river delta (Ganges-Brahmaputra Delta)",
            "2nd largest garment exporter (after China)",
            "Contains 60% of Sundarbans mangrove forest",
            "Home to Royal Bengal Tiger",
            "Most densely populated large country",
            "International Mother Language Day (Feb 21) commemorates 1952 movement",
            "Cox's Bazar has world's longest natural sea beach (120 km)"
        ],

        demographics: {
            population_growth: "1.0%",
            median_age: "27.9 years",
            life_expectancy: "73.4 years",
            literacy_rate: "74.7%",
            urban_population: "39%",
            sex_ratio: "0.97 males/female"
        },

        infrastructure: {
            airports: "18 (3 international)",
            major_ports: ["Chittagong", "Mongla", "Payra"],
            railways: "3,093 km",
            roads: "369,105 km",
            internet_users: "~66 million (38%)"
        }
    },

    // ============================================
    // 8. BELGIUM
    // ============================================
    {
        id: "BEL",
        name: "Belgium",
        official_name: "Kingdom of Belgium",
        flag: "https://flagcdn.com/w320/be.png",
        coat_of_arms: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Great_coat_of_arms_of_Belgium.svg/200px-Great_coat_of_arms_of_Belgium.svg.png",
        map_image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Belgium_%28orthographic_projection%29.svg/500px-Belgium_%28orthographic_projection%29.svg.png",

        basic: {
            capital: "Brussels (also EU capital)",
            largest_city: "Brussels",
            continent: "Europe",
            region: "Western Europe",
            subregion: "Western Europe",
            population: "11.6 million (2023)",
            area: "30,689 km²",
            density: "383/km²",
            timezone: "UTC+1 (CET) / UTC+2 (CEST)",
            driving_side: "Right",
            calling_code: "+32",
            iso_codes: { alpha2: "BE", alpha3: "BEL", numeric: "056" },
            internet_tld: ".be"
        },

        location: {
            coordinates: [50.5039, 4.4699],
            bounds: [[49.5, 2.5], [51.5, 6.4]],
            neighbors: ["France", "Luxembourg", "Germany", "Netherlands"],
            border_lengths: {
                "France": "556 km",
                "Netherlands": "478 km",
                "Germany": "133 km",
                "Luxembourg": "130 km"
            },
            coastline: "67 km (North Sea)",
            highest_point: "Signal de Botrange (694 m)",
            lowest_point: "North Sea coast (0 m)"
        },

        political: {
            government: "Federal parliamentary constitutional monarchy",
            government_type: "Constitutional Monarchy",
            monarch: "King Philippe",
            leader_title: "Prime Minister",
            leader_name: "Alexander De Croo",
            legislature: "Bicameral Federal Parliament (Senate + Chamber of Representatives)",
            independence: "October 4, 1830 (from Netherlands)",
            national_day: "July 21 (Accession of King Leopold I, 1831)",
            administrative_divisions: "3 Regions, 3 Communities, 10 Provinces",
            regions: ["Flanders", "Wallonia", "Brussels-Capital"],
            eu_founding_member: "1957 (Treaty of Rome)"
        },

        economy: {
            gdp_nominal: "$632 billion (2023)",
            gdp_ppp: "$704 billion (2023)",
            gdp_per_capita_nominal: "$54,533",
            gdp_per_capita_ppp: "$60,726",
            currency: "Euro (EUR)",
            currency_symbol: "€",
            exchange_rate: "~0.92 EUR = 1 USD",
            major_sectors: ["Services", "Industry", "Chemicals", "Pharmaceuticals", "Automotive"],
            exports: ["Chemicals", "Machinery", "Vehicles", "Diamonds", "Pharmaceuticals", "Food products"],
            imports: ["Machinery", "Chemicals", "Diamonds", "Petroleum", "Food"],
            trade_partners: ["Germany", "France", "Netherlands", "UK", "USA"],
            unemployment: "~5.5%",
            poverty_rate: "~13%"
        },

        culture: {
            languages: ["Dutch/Flemish (60%)", "French (40%)", "German (1%)"],
            official_languages: ["Dutch", "French", "German"],
            religions: ["Roman Catholic (50%)", "None (33%)", "Muslim (5%)", "Protestant (2%)", "Other (10%)"],
            ethnic_groups: ["Fleming (58%)", "Walloon (31%)", "Other (11%)"],
            heritage_sites: "15 UNESCO Sites (Grand-Place Brussels, Bruges Historic Centre, Belfries of Belgium)",
            national_symbols: ["Lion", "Iris (national flower)", "Belgian Red Devil (sports)"],
            notable_cuisine: ["Belgian waffles", "Chocolate", "French fries (Frites)", "Moules-frites", "Beer", "Speculoos"],
            traditional_dress: [],
            festivals: ["Carnival of Binche", "Ommegang", "Tomorrowland (music festival)"],
            famous_for: ["Chocolate", "Beer (1,500+ varieties)", "Waffles", "EU headquarters", "Comics (Tintin, Smurfs)"]
        },

        geography_links: {
            rivers: ["Meuse River", "Scheldt River", "Sambre River", "Lys River"],
            mountains: ["Ardennes highlands"],
            deserts: [],
            lakes: ["Lake Genval", "Eau d'Heure lakes"],
            plains: ["Flemish Plain", "Campine"],
            forests: ["Ardennes Forest", "Sonian Forest"],
            oceans: ["North Sea"]
        },

        history: {
            brief: "Part of Roman Gaul. Medieval trade centers (Bruges, Ghent, Antwerp). Burgundian Netherlands (15th century). Spanish then Austrian Netherlands. French rule (1795-1815). Part of United Kingdom of Netherlands (1815-1830). Independent kingdom in 1830. Occupied by Germany in both World Wars. Founding EU member.",
            key_dates: [
                { year: "1830", event: "Belgian Revolution; independence from Netherlands" },
                { year: "1885-1908", event: "Congo Free State under Leopold II" },
                { year: "1914-1918", event: "German occupation in WWI" },
                { year: "1940-1944", event: "German occupation in WWII" },
                { year: "1957", event: "Founding member of EEC (EU)" },
                { year: "1993", event: "Becomes federal state" }
            ]
        },

        disputes: [],

        quick_facts: [
            "Headquarters of EU and NATO",
            "Three official languages in one small country",
            "Produces over 220,000 tonnes of chocolate annually",
            "Has more varieties of beer than any country (1,500+)",
            "Antwerp handles 80% of world's rough diamonds",
            "Created Tintin, Smurfs, and Spirou comics",
            "Has highest density of motorway network in world",
            "No government for 541 days (2010-2011)"
        ],

        demographics: {
            population_growth: "0.5%",
            median_age: "41.9 years",
            life_expectancy: "82.0 years",
            literacy_rate: "99%",
            urban_population: "98%",
            sex_ratio: "0.97 males/female"
        },

        infrastructure: {
            airports: "41 (5 international)",
            major_ports: ["Antwerp (2nd largest in Europe)", "Zeebrugge", "Ghent"],
            railways: "3,602 km",
            roads: "154,012 km",
            internet_users: "~10.5 million (92%)"
        }
    },

    // ============================================
    // 9. BRAZIL
    // ============================================
    {
        id: "BRA",
        name: "Brazil",
        official_name: "Federative Republic of Brazil",
        flag: "https://flagcdn.com/w320/br.png",
        coat_of_arms: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Coat_of_arms_of_Brazil.svg/200px-Coat_of_arms_of_Brazil.svg.png",
        map_image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Brazil_%28orthographic_projection%29.svg/500px-Brazil_%28orthographic_projection%29.svg.png",

        basic: {
            capital: "Brasília",
            largest_city: "São Paulo",
            continent: "South America",
            region: "South America",
            subregion: "South America",
            population: "216 million (2023)",
            area: "8,515,767 km²",
            density: "25/km²",
            timezone: "UTC-2 to UTC-5 (4 time zones)",
            driving_side: "Right",
            calling_code: "+55",
            iso_codes: { alpha2: "BR", alpha3: "BRA", numeric: "076" },
            internet_tld: ".br"
        },

        location: {
            coordinates: [-14.235, -51.9253],
            bounds: [[-33.8, -73.9], [5.3, -34.8]],
            neighbors: ["Uruguay", "Argentina", "Paraguay", "Bolivia", "Peru", "Colombia", "Venezuela", "Guyana", "Suriname", "French Guiana"],
            border_lengths: {
                "Bolivia": "3,403 km",
                "Peru": "2,995 km",
                "Colombia": "1,790 km",
                "Venezuela": "2,137 km",
                "Argentina": "1,263 km",
                "Paraguay": "1,371 km",
                "Uruguay": "1,050 km",
                "Guyana": "1,308 km",
                "Suriname": "515 km",
                "French Guiana": "649 km"
            },
            coastline: "7,491 km (Atlantic Ocean)",
            highest_point: "Pico da Neblina (2,994 m)",
            lowest_point: "Atlantic Ocean (0 m)"
        },

        political: {
            government: "Federal presidential constitutional republic",
            government_type: "Presidential Republic",
            leader_title: "President",
            leader_name: "Luiz Inácio Lula da Silva",
            legislature: "Bicameral National Congress (Federal Senate + Chamber of Deputies)",
            independence: "September 7, 1822 (from Portugal)",
            national_day: "September 7 (Independence Day)",
            administrative_divisions: "26 States + 1 Federal District",
            states: ["São Paulo", "Minas Gerais", "Rio de Janeiro", "Bahia", "Paraná", "Rio Grande do Sul", "Pernambuco", "Ceará", "Pará", "Amazonas"]
        },

        economy: {
            gdp_nominal: "$2.13 trillion (2023)",
            gdp_ppp: "$3.84 trillion (2023)",
            gdp_per_capita_nominal: "$9,881",
            gdp_per_capita_ppp: "$17,821",
            currency: "Brazilian real (BRL)",
            currency_symbol: "R$",
            exchange_rate: "~5.0 BRL = 1 USD",
            major_sectors: ["Services", "Industry", "Agriculture", "Mining"],
            exports: ["Soybeans", "Iron ore", "Crude petroleum", "Sugar", "Beef", "Coffee", "Corn", "Chicken"],
            imports: ["Machinery", "Electrical equipment", "Petroleum", "Vehicles", "Pharmaceuticals"],
            trade_partners: ["China", "USA", "Argentina", "Netherlands", "Germany"],
            unemployment: "~7.8%",
            poverty_rate: "~26%"
        },

        culture: {
            languages: ["Portuguese (official)"],
            official_languages: ["Portuguese"],
            religions: ["Christianity (88.8%)", "Roman Catholic (64.6%)", "Protestant (22.2%)", "None (8%)", "Spiritist (2%)", "Other (1.2%)"],
            ethnic_groups: ["White (43.4%)", "Mixed/Pardo (46.5%)", "Black (9%)", "Indigenous (0.6%)", "Asian (0.5%)"],
            heritage_sites: "23 UNESCO Sites (Historic Centre of Salvador, Iguaçu National Park, Amazon Central Complex, etc.)",
            national_symbols: ["Yellow-bellied seedeater", "Golden trumpet tree", "Southern Cross"],
            notable_cuisine: ["Feijoada", "Pão de queijo", "Churrasco", "Açaí", "Brigadeiro", "Caipirinha", "Moqueca"],
            traditional_dress: ["Bahiana dress", "Gaucho attire"],
            festivals: ["Carnival (Rio, Salvador)", "Festa Junina", "New Year's at Copacabana", "Bumba Meu Boi"],
            famous_for: ["Football (5 World Cup wins)", "Samba", "Bossa Nova", "Carnival", "Amazon Rainforest", "Coffee"]
        },

        geography_links: {
            rivers: ["Amazon River", "Paraná River", "São Francisco River", "Tocantins River", "Paraguay River", "Negro River", "Xingu River"],
            mountains: ["Serra do Mar", "Serra da Mantiqueira", "Serra do Espinhaço", "Pico da Neblina"],
            deserts: [],
            lakes: ["Lagoa dos Patos", "Lagoa Mirim"],
            plains: ["Amazon Basin", "Pantanal (world's largest wetland)", "Cerrado"],
            forests: ["Amazon Rainforest (60% of Amazon is in Brazil)", "Atlantic Forest", "Pantanal"],
            oceans: ["Atlantic Ocean"],
            waterfalls: ["Iguazu Falls (shared with Argentina)"]
        },

        history: {
            brief: "Indigenous peoples for 12,000+ years. Portuguese arrival in 1500. Colonial Brazil (1500-1822). Portuguese royal court fled to Brazil (1808). Empire of Brazil (1822-1889). First Republic (1889-1930). Vargas Era (1930-1945). Military dictatorship (1964-1985). Democracy restored 1985. BRICS founding member.",
            key_dates: [
                { year: "1500", event: "Pedro Álvares Cabral arrives; Portuguese colonization begins" },
                { year: "1822", event: "Independence declared by Pedro I" },
                { year: "1888", event: "Abolition of slavery (Lei Áurea)" },
                { year: "1889", event: "Republic proclaimed; monarchy ends" },
                { year: "1960", event: "Capital moves from Rio to Brasília" },
                { year: "1964-1985", event: "Military dictatorship" },
                { year: "2016", event: "Hosted Summer Olympics (Rio)" }
            ]
        },

        disputes: [],

        quick_facts: [
            "5th largest country in the world",
            "Largest country in South America",
            "Contains 60% of Amazon Rainforest",
            "Only Portuguese-speaking country in Americas",
            "5-time FIFA World Cup winner (most of any country)",
            "Home to most species on Earth (~15-20% of all)",
            "São Paulo is largest city in Southern Hemisphere",
            "Pantanal is world's largest tropical wetland",
            "Rio Carnival is world's largest festival"
        ],

        demographics: {
            population_growth: "0.5%",
            median_age: "34.3 years",
            life_expectancy: "76.4 years",
            literacy_rate: "93.2%",
            urban_population: "87%",
            sex_ratio: "0.96 males/female"
        },

        infrastructure: {
            airports: "4,093 (698 paved; most in world)",
            major_ports: ["Santos", "Rio de Janeiro", "Paranaguá", "Itajaí", "São Luís"],
            railways: "29,849 km",
            roads: "1,720,700 km",
            internet_users: "~165 million (77%)"
        }
    },

    // ============================================
    // 10. CANADA
    // ============================================
    {
        id: "CAN",
        name: "Canada",
        official_name: "Canada",
        flag: "https://flagcdn.com/w320/ca.png",
        coat_of_arms: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Coat_of_arms_of_Canada_%28lesser_version%2C_2021%E2%80%93present%29.svg/200px-Coat_of_arms_of_Canada_%28lesser_version%2C_2021%E2%80%93present%29.svg.png",
        map_image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Canada_%28orthographic_projection%29.svg/500px-Canada_%28orthographic_projection%29.svg.png",

        basic: {
            capital: "Ottawa",
            largest_city: "Toronto",
            continent: "North America",
            region: "North America",
            subregion: "Northern America",
            population: "40.1 million (2023)",
            area: "9,984,670 km²",
            density: "4.2/km² (one of lowest in world)",
            timezone: "UTC-3.5 to UTC-8 (6 time zones)",
            driving_side: "Right",
            calling_code: "+1",
            iso_codes: { alpha2: "CA", alpha3: "CAN", numeric: "124" },
            internet_tld: ".ca"
        },

        location: {
            coordinates: [56.1304, -106.3468],
            bounds: [[41.7, -141.0], [83.1, -52.6]],
            neighbors: ["United States"],
            border_lengths: {
                "United States": "8,891 km (longest international border)"
            },
            coastline: "202,080 km (longest in world)",
            highest_point: "Mount Logan (5,959 m)",
            lowest_point: "Atlantic Ocean (0 m)"
        },

        political: {
            government: "Federal parliamentary constitutional monarchy",
            government_type: "Parliamentary Constitutional Monarchy",
            monarch: "King Charles III",
            leader_title: "Prime Minister",
            leader_name: "Justin Trudeau",
            governor_general: "Mary Simon",
            legislature: "Bicameral Parliament (Senate + House of Commons)",
            independence: "July 1, 1867 (Confederation from UK)",
            national_day: "July 1 (Canada Day)",
            administrative_divisions: "10 Provinces + 3 Territories",
            provinces: ["Ontario", "Quebec", "British Columbia", "Alberta", "Manitoba", "Saskatchewan", "Nova Scotia", "New Brunswick", "Newfoundland and Labrador", "Prince Edward Island"],
            territories: ["Northwest Territories", "Yukon", "Nunavut"]
        },

        economy: {
            gdp_nominal: "$2.14 trillion (2023)",
            gdp_ppp: "$2.24 trillion (2023)",
            gdp_per_capita_nominal: "$53,247",
            gdp_per_capita_ppp: "$55,858",
            currency: "Canadian dollar (CAD)",
            currency_symbol: "C$",
            exchange_rate: "~1.36 CAD = 1 USD",
            major_sectors: ["Services", "Real estate", "Mining", "Manufacturing", "Oil and gas"],
            exports: ["Crude petroleum", "Vehicles", "Natural gas", "Gold", "Wood", "Aluminum", "Wheat"],
            imports: ["Vehicles", "Machinery", "Electronics", "Plastics", "Pharmaceuticals"],
            trade_partners: ["USA (75%)", "China", "UK", "Japan", "Mexico"],
            unemployment: "~5.4%",
            poverty_rate: "~8.1%"
        },

        culture: {
            languages: ["English (official)", "French (official)", "Indigenous languages"],
            official_languages: ["English", "French"],
            religions: ["Christianity (53.3%)", "None (34.6%)", "Islam (4.9%)", "Hinduism (2.3%)", "Sikhism (2.1%)", "Buddhism (1%)", "Judaism (1%)"],
            ethnic_groups: ["Canadian (32%)", "English (18%)", "Scottish (14%)", "French (13%)", "Irish (13%)", "German (10%)", "Chinese (5%)", "Indigenous (5%)", "Italian (4%)"],
            heritage_sites: "22 UNESCO Sites (Canadian Rocky Mountain Parks, Old Quebec, Dinosaur Provincial Park, etc.)",
            national_symbols: ["Maple leaf", "Beaver (national animal)", "Canada goose"],
            notable_cuisine: ["Poutine", "Maple syrup", "Butter tarts", "Nanaimo bars", "Tourtière", "BeaverTails"],
            traditional_dress: ["Indigenous regalia", "RCMP red serge"],
            festivals: ["Canada Day", "Calgary Stampede", "Winterlude", "Montreal Jazz Festival", "Toronto International Film Festival"],
            famous_for: ["Hockey", "Maple syrup", "Multiculturalism", "Politeness", "Universal healthcare"]
        },

        geography_links: {
            rivers: ["St. Lawrence River", "Mackenzie River", "Fraser River", "Saskatchewan River", "Columbia River", "Nelson River"],
            mountains: ["Rocky Mountains", "Coast Mountains", "Mount Logan", "Mount Saint Elias"],
            deserts: [],
            lakes: ["Lake Superior (shared)", "Lake Huron (shared)", "Great Bear Lake", "Great Slave Lake", "Lake Winnipeg"],
            plains: ["Canadian Prairies", "Interior Plains"],
            forests: ["Boreal forest (world's largest)", "Pacific temperate rainforest"],
            oceans: ["Atlantic Ocean", "Pacific Ocean", "Arctic Ocean"],
            other: ["Niagara Falls (shared with USA)", "Canadian Shield"]
        },

        history: {
            brief: "Indigenous peoples for 15,000+ years (First Nations, Inuit, Métis). Norse settlement (~1000 CE). French colonization (New France) from 1534. British conquest (1763). Confederation of British colonies into Canada (1867). Gradual independence; full sovereignty with Constitution Act (1982). Bilingual and multicultural society.",
            key_dates: [
                { year: "1534", event: "Jacques Cartier claims Canada for France" },
                { year: "1763", event: "Treaty of Paris; France cedes New France to Britain" },
                { year: "1867", event: "Confederation; Dominion of Canada formed" },
                { year: "1931", event: "Statute of Westminster; legislative independence" },
                { year: "1965", event: "Current maple leaf flag adopted" },
                { year: "1982", event: "Constitution Act; full sovereignty from UK" },
                { year: "1999", event: "Nunavut created as separate territory" }
            ]
        },

        disputes: ["Hans Island (resolved with Denmark 2022)", "Northwest Passage sovereignty", "Arctic claims"],

        quick_facts: [
            "2nd largest country in the world by area",
            "Has longest coastline of any country (202,080 km)",
            "Shares longest international border (8,891 km with USA)",
            "Produces 71% of world's maple syrup",
            "Has more lakes than rest of world combined",
            "10% of world's forests are in Canada",
            "Invented basketball, hockey, insulin, and the telephone",
            "Most educated country (56% with tertiary education)",
            "Two official languages at federal level"
        ],

        demographics: {
            population_growth: "1.8%",
            median_age: "41.8 years",
            life_expectancy: "82.7 years",
            literacy_rate: "99%",
            urban_population: "82%",
            sex_ratio: "0.98 males/female",
            indigenous_population: "~5% (First Nations, Inuit, Métis)"
        },

        infrastructure: {
            airports: "1,467 (523 paved)",
            major_ports: ["Vancouver", "Montreal", "Halifax", "Prince Rupert", "Toronto"],
            railways: "42,951 km",
            roads: "1,042,300 km",
            internet_users: "~37 million (92%)"
        }
    }
];

// Add more countries (11-20) to maintain file size
// Will continue in encyclopedia-data-2.js

console.log('Encyclopedia Countries Data 1 Loaded ✓ (10 countries)');
