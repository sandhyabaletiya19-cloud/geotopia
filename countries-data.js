// Complete 195 Countries Dataset
const countries = [
    // ============ ASIA (49) ============
    {
        name: "Afghanistan",
        flag: "🇦🇫",
        capital: "Kabul",
        region: "Central Asia",
        population: "38.9 million",
        language: "Dari, Pashto",
        currency: "Afghan Afghani (AFN)",
        lat: 33.93,
        lng: 67.71,
        tagline: "Heart of Asia",
        facts: [
            "Home to the ancient Bamiyan Buddha statues",
            "The Hindu Kush mountain range runs through it",
            "Known for lapis lazuli gemstones"
        ],
        quiz: {
            question: "What is the capital of Afghanistan?",
            options: ["Kandahar", "Kabul", "Herat", "Mazar-i-Sharif"],
            answer: 1
        }
    },
    {
        name: "Armenia",
        flag: "🇦🇲",
        capital: "Yerevan",
        region: "Western Asia",
        population: "2.9 million",
        language: "Armenian",
        currency: "Armenian Dram (AMD)",
        lat: 40.07,
        lng: 45.04,
        tagline: "Land of Noah",
        facts: [
            "First country to adopt Christianity as state religion (301 AD)",
            "Mount Ararat is visible from Armenia",
            "Home to the world's oldest winery"
        ],
        quiz: {
            question: "Armenia was the first country to adopt which religion?",
            options: ["Islam", "Buddhism", "Christianity", "Hinduism"],
            answer: 2
        }
    },
    {
        name: "Azerbaijan",
        flag: "🇦🇿",
        capital: "Baku",
        region: "Western Asia",
        population: "10.1 million",
        language: "Azerbaijani",
        currency: "Azerbaijani Manat (AZN)",
        lat: 40.14,
        lng: 47.58,
        tagline: "Land of Fire",
        facts: [
            "Known as 'Land of Fire' due to natural gas flames",
            "Home to about 400 of the world's 700 mud volcanoes",
            "Baku hosted the first Formula 1 Grand Prix in 2016"
        ],
        quiz: {
            question: "Why is Azerbaijan called the 'Land of Fire'?",
            options: ["Hot climate", "Natural gas flames", "Volcanic activity", "Desert fires"],
            answer: 1
        }
    },
    {
        name: "Bahrain",
        flag: "🇧🇭",
        capital: "Manama",
        region: "Middle East",
        population: "1.7 million",
        language: "Arabic",
        currency: "Bahraini Dinar (BHD)",
        lat: 26.07,
        lng: 50.56,
        tagline: "Pearl of the Gulf",
        facts: [
            "An archipelago of 33 islands",
            "Once the center of the ancient Dilmun civilization",
            "First Gulf country to discover oil (1932)"
        ],
        quiz: {
            question: "How many islands make up Bahrain?",
            options: ["10", "22", "33", "50"],
            answer: 2
        }
    },
    {
        name: "Bangladesh",
        flag: "🇧🇩",
        capital: "Dhaka",
        region: "South Asia",
        population: "164.7 million",
        language: "Bengali",
        currency: "Bangladeshi Taka (BDT)",
        lat: 23.68,
        lng: 90.36,
        tagline: "Land of Rivers",
        facts: [
            "World's largest river delta",
            "The Sundarbans is the largest mangrove forest",
            "Second largest garment exporter globally"
        ],
        quiz: {
            question: "What is Bangladesh known as?",
            options: ["Land of Mountains", "Land of Rivers", "Land of Deserts", "Land of Islands"],
            answer: 1
        }
    },
    {
        name: "Bhutan",
        flag: "🇧🇹",
        capital: "Thimphu",
        region: "South Asia",
        population: "771,608",
        language: "Dzongkha",
        currency: "Bhutanese Ngultrum (BTN)",
        lat: 27.51,
        lng: 90.43,
        tagline: "Land of the Thunder Dragon",
        facts: [
            "Measures Gross National Happiness instead of GDP",
            "Only carbon-negative country in the world",
            "Television was introduced only in 1999"
        ],
        quiz: {
            question: "What does Bhutan measure instead of GDP?",
            options: ["Gross National Product", "Gross National Happiness", "Gross Domestic Output", "National Income"],
            answer: 1
        }
    },
    {
        name: "Brunei",
        flag: "🇧🇳",
        capital: "Bandar Seri Begawan",
        region: "Southeast Asia",
        population: "437,479",
        language: "Malay",
        currency: "Brunei Dollar (BND)",
        lat: 4.54,
        lng: 114.73,
        tagline: "Abode of Peace",
        facts: [
            "One of the wealthiest nations due to oil and gas",
            "No income tax for residents",
            "Sultan's palace is the world's largest residential palace"
        ],
        quiz: {
            question: "What is the main source of Brunei's wealth?",
            options: ["Tourism", "Agriculture", "Oil and Gas", "Technology"],
            answer: 2
        }
    },
    {
        name: "Cambodia",
        flag: "🇰🇭",
        capital: "Phnom Penh",
        region: "Southeast Asia",
        population: "16.7 million",
        language: "Khmer",
        currency: "Cambodian Riel (KHR)",
        lat: 12.57,
        lng: 104.99,
        tagline: "Kingdom of Wonder",
        facts: [
            "Angkor Wat is the largest religious monument",
            "The flag is the only one featuring a building",
            "Home to the endangered Irrawaddy dolphin"
        ],
        quiz: {
            question: "What famous temple is in Cambodia?",
            options: ["Taj Mahal", "Angkor Wat", "Borobudur", "Shwedagon"],
            answer: 1
        }
    },
    {
        name: "China",
        flag: "🇨🇳",
        capital: "Beijing",
        region: "East Asia",
        population: "1.41 billion",
        language: "Mandarin Chinese",
        currency: "Chinese Yuan (CNY)",
        lat: 35.86,
        lng: 104.20,
        tagline: "The Middle Kingdom",
        facts: [
            "The Great Wall stretches over 21,000 km",
            "Invented paper, printing, gunpowder, and compass",
            "Has the world's largest high-speed rail network"
        ],
        quiz: {
            question: "How long is the Great Wall of China?",
            options: ["5,000 km", "10,000 km", "21,000 km", "50,000 km"],
            answer: 2
        }
    },
    {
        name: "India",
        flag: "🇮🇳",
        capital: "New Delhi",
        region: "South Asia",
        population: "1.42 billion",
        language: "Hindi, English",
        currency: "Indian Rupee (INR)",
        lat: 20.59,
        lng: 78.96,
        tagline: "Incredible India",
        facts: [
            "World's largest democracy",
            "Invented the number zero",
            "Has 22 official languages"
        ],
        quiz: {
            question: "What mathematical concept did India invent?",
            options: ["Pi", "Zero", "Infinity", "Algebra"],
            answer: 1
        }
    },
    {
        name: "Indonesia",
        flag: "🇮🇩",
        capital: "Jakarta",
        region: "Southeast Asia",
        population: "273.5 million",
        language: "Indonesian",
        currency: "Indonesian Rupiah (IDR)",
        lat: -0.79,
        lng: 113.92,
        tagline: "Wonderful Indonesia",
        facts: [
            "World's largest archipelago with 17,000+ islands",
            "Home to Komodo dragons",
            "Has the world's largest Buddhist temple"
        ],
        quiz: {
            question: "How many islands does Indonesia have?",
            options: ["5,000", "10,000", "17,000", "25,000"],
            answer: 2
        }
    },
    {
        name: "Iran",
        flag: "🇮🇷",
        capital: "Tehran",
        region: "Middle East",
        population: "83.9 million",
        language: "Persian (Farsi)",
        currency: "Iranian Rial (IRR)",
        lat: 32.43,
        lng: 53.69,
        tagline: "Land of the Aryans",
        facts: [
            "One of the world's oldest civilizations",
            "Home to ancient Persepolis",
            "Invented algebra and hospitals"
        ],
        quiz: {
            question: "What ancient capital is in Iran?",
            options: ["Babylon", "Persepolis", "Athens", "Rome"],
            answer: 1
        }
    },
    {
        name: "Iraq",
        flag: "🇮🇶",
        capital: "Baghdad",
        region: "Middle East",
        population: "40.2 million",
        language: "Arabic, Kurdish",
        currency: "Iraqi Dinar (IQD)",
        lat: 33.22,
        lng: 43.68,
        tagline: "Cradle of Civilization",
        facts: [
            "Ancient Mesopotamia - birthplace of writing",
            "Home to the Hanging Gardens of Babylon",
            "World's first known author was Iraqi"
        ],
        quiz: {
            question: "What was invented in ancient Iraq?",
            options: ["Paper", "Writing", "Printing", "Algebra"],
            answer: 1
        }
    },
    {
        name: "Israel",
        flag: "🇮🇱",
        capital: "Jerusalem",
        region: "Middle East",
        population: "9.2 million",
        language: "Hebrew, Arabic",
        currency: "Israeli Shekel (ILS)",
        lat: 31.05,
        lng: 34.85,
        tagline: "The Holy Land",
        facts: [
            "More museums per capita than any country",
            "Revived a 3,000-year-old language",
            "Developed drip irrigation technology"
        ],
        quiz: {
            question: "What language did Israel revive?",
            options: ["Latin", "Hebrew", "Aramaic", "Sanskrit"],
            answer: 1
        }
    },
    {
        name: "Japan",
        flag: "🇯🇵",
        capital: "Tokyo",
        region: "East Asia",
        population: "125.8 million",
        language: "Japanese",
        currency: "Japanese Yen (JPY)",
        lat: 36.20,
        lng: 138.25,
        tagline: "Land of the Rising Sun",
        facts: [
            "Has over 6,800 islands",
            "Tokyo is the most populous metro area",
            "Has 1,500+ earthquakes per year"
        ],
        quiz: {
            question: "How many islands does Japan have?",
            options: ["100", "1,000", "6,800", "10,000"],
            answer: 2
        }
    },
    {
        name: "Jordan",
        flag: "🇯🇴",
        capital: "Amman",
        region: "Middle East",
        population: "10.2 million",
        language: "Arabic",
        currency: "Jordanian Dinar (JOD)",
        lat: 30.59,
        lng: 36.24,
        tagline: "Kingdom of Time",
        facts: [
            "Petra was carved into rose-red cliffs",
            "The Dead Sea is the lowest point on Earth",
            "Has been inhabited for 90,000+ years"
        ],
        quiz: {
            question: "What famous ancient city is in Jordan?",
            options: ["Palmyra", "Petra", "Jerash", "Babylon"],
            answer: 1
        }
    },
    {
        name: "Kazakhstan",
        flag: "🇰🇿",
        capital: "Astana",
        region: "Central Asia",
        population: "19 million",
        language: "Kazakh, Russian",
        currency: "Kazakhstani Tenge (KZT)",
        lat: 48.02,
        lng: 66.92,
        tagline: "Heart of Eurasia",
        facts: [
            "World's largest landlocked country",
            "Baikonur launched first human to space",
            "Home to singing sand dunes"
        ],
        quiz: {
            question: "What space facility is in Kazakhstan?",
            options: ["Cape Canaveral", "Baikonur Cosmodrome", "Kourou", "Tanegashima"],
            answer: 1
        }
    },
    {
        name: "Kuwait",
        flag: "🇰🇼",
        capital: "Kuwait City",
        region: "Middle East",
        population: "4.3 million",
        language: "Arabic",
        currency: "Kuwaiti Dinar (KWD)",
        lat: 29.31,
        lng: 47.48,
        tagline: "Pearl of the Gulf",
        facts: [
            "One of the world's highest valued currencies",
            "No natural rivers or lakes",
            "Oil was discovered in 1938"
        ],
        quiz: {
            question: "What is special about Kuwait's currency?",
            options: ["Oldest", "Largest", "Highest valued", "Most colorful"],
            answer: 2
        }
    },
    {
        name: "Kyrgyzstan",
        flag: "🇰🇬",
        capital: "Bishkek",
        region: "Central Asia",
        population: "6.6 million",
        language: "Kyrgyz, Russian",
        currency: "Kyrgyzstani Som (KGS)",
        lat: 41.20,
        lng: 74.77,
        tagline: "Land of Celestial Mountains",
        facts: [
            "93% mountainous terrain",
            "Lake Issyk-Kul is world's second-largest alpine lake",
            "Eagle hunting is still practiced"
        ],
        quiz: {
            question: "What percentage of Kyrgyzstan is mountains?",
            options: ["50%", "70%", "93%", "100%"],
            answer: 2
        }
    },
    {
        name: "Laos",
        flag: "🇱🇦",
        capital: "Vientiane",
        region: "Southeast Asia",
        population: "7.3 million",
        language: "Lao",
        currency: "Lao Kip (LAK)",
        lat: 19.86,
        lng: 102.50,
        tagline: "Land of a Million Elephants",
        facts: [
            "Most bombed country per capita in history",
            "Home to mysterious Plain of Jars",
            "Mekong River forms most of its border"
        ],
        quiz: {
            question: "What is Laos traditionally called?",
            options: ["Land of Temples", "Land of a Million Elephants", "Land of Rivers", "Land of Mountains"],
            answer: 1
        }
    },
    {
        name: "Lebanon",
        flag: "🇱🇧",
        capital: "Beirut",
        region: "Middle East",
        population: "6.8 million",
        language: "Arabic",
        currency: "Lebanese Pound (LBP)",
        lat: 33.85,
        lng: 35.86,
        tagline: "Paris of the Middle East",
        facts: [
            "The cedar tree has been a symbol for 5,000 years",
            "Byblos is one of the oldest inhabited cities",
            "Has 18 recognized religious communities"
        ],
        quiz: {
            question: "What tree is on Lebanon's flag?",
            options: ["Oak", "Pine", "Cedar", "Olive"],
            answer: 2
        }
    },
    {
        name: "Malaysia",
        flag: "🇲🇾",
        capital: "Kuala Lumpur",
        region: "Southeast Asia",
        population: "32.7 million",
        language: "Malay",
        currency: "Malaysian Ringgit (MYR)",
        lat: 4.21,
        lng: 101.98,
        tagline: "Truly Asia",
        facts: [
            "Petronas Towers were world's tallest 1998-2004",
            "Home to the world's largest flower - Rafflesia",
            "Rainforests are 130 million years old"
        ],
        quiz: {
            question: "What is the world's largest flower in Malaysia?",
            options: ["Lotus", "Rafflesia", "Orchid", "Hibiscus"],
            answer: 1
        }
    },
    {
        name: "Maldives",
        flag: "🇲🇻",
        capital: "Malé",
        region: "South Asia",
        population: "540,544",
        language: "Dhivehi",
        currency: "Maldivian Rufiyaa (MVR)",
        lat: 3.20,
        lng: 73.22,
        tagline: "Sunny Side of Life",
        facts: [
            "World's lowest country - 1.5m above sea level",
            "1,192 coral islands in 26 atolls",
            "Only country with underwater cabinet meeting"
        ],
        quiz: {
            question: "What makes Maldives unique geographically?",
            options: ["Highest country", "Lowest country", "Largest country", "Smallest country"],
            answer: 1
        }
    },
    {
        name: "Mongolia",
        flag: "🇲🇳",
        capital: "Ulaanbaatar",
        region: "East Asia",
        population: "3.3 million",
        language: "Mongolian",
        currency: "Mongolian Tögrög (MNT)",
        lat: 46.86,
        lng: 103.85,
        tagline: "Land of the Eternal Blue Sky",
        facts: [
            "Most sparsely populated - 2 people per sq km",
            "Genghis Khan created largest land empire",
            "Nomads still live in traditional gers"
        ],
        quiz: {
            question: "Who created the largest land empire from Mongolia?",
            options: ["Attila", "Genghis Khan", "Tamerlane", "Kublai Khan"],
            answer: 1
        }
    },
    {
        name: "Myanmar",
        flag: "🇲🇲",
        capital: "Naypyidaw",
        region: "Southeast Asia",
        population: "54.4 million",
        language: "Burmese",
        currency: "Myanmar Kyat (MMK)",
        lat: 21.92,
        lng: 95.96,
        tagline: "Golden Land",
        facts: [
            "Shwedagon Pagoda covered with 60 tons of gold",
            "Home to 2,000+ ancient temples in Bagan",
            "Has 135 ethnic groups"
        ],
        quiz: {
            question: "How much gold covers the Shwedagon Pagoda?",
            options: ["10 tons", "30 tons", "60 tons", "100 tons"],
            answer: 2
        }
    },
    {
        name: "Nepal",
        flag: "🇳🇵",
        capital: "Kathmandu",
        region: "South Asia",
        population: "29.1 million",
        language: "Nepali",
        currency: "Nepalese Rupee (NPR)",
        lat: 28.39,
        lng: 84.12,
        tagline: "Roof of the World",
        facts: [
            "Home to Mount Everest (8,849m)",
            "Only country with non-rectangular flag",
            "Birthplace of Buddha in Lumbini"
        ],
        quiz: {
            question: "What is unique about Nepal's flag?",
            options: ["Has no colors", "Non-rectangular", "Has no symbols", "Is round"],
            answer: 1
        }
    },
    {
        name: "North Korea",
        flag: "🇰🇵",
        capital: "Pyongyang",
        region: "East Asia",
        population: "25.8 million",
        language: "Korean",
        currency: "North Korean Won (KPW)",
        lat: 40.34,
        lng: 127.51,
        tagline: "Democratic People's Republic",
        facts: [
            "Uses its own Juche calendar",
            "Has world's largest stadium",
            "DMZ is one of most militarized borders"
        ],
        quiz: {
            question: "What is the name of North Korea's calendar?",
            options: ["Joseon", "Juche", "Kim", "Pyongyang"],
            answer: 1
        }
    },
    {
        name: "Oman",
        flag: "🇴🇲",
        capital: "Muscat",
        region: "Middle East",
        population: "5.1 million",
        language: "Arabic",
        currency: "Omani Rial (OMR)",
        lat: 21.47,
        lng: 55.98,
        tagline: "Beauty Has an Address",
        facts: [
            "One of the oldest independent Arab states",
            "Frankincense traded for 5,000 years",
            "Home to the Arabian Oryx"
        ],
        quiz: {
            question: "What has Oman traded for 5,000 years?",
            options: ["Gold", "Frankincense", "Pearls", "Silk"],
            answer: 1
        }
    },
    {
        name: "Pakistan",
        flag: "🇵🇰",
        capital: "Islamabad",
        region: "South Asia",
        population: "220.9 million",
        language: "Urdu, English",
        currency: "Pakistani Rupee (PKR)",
        lat: 30.38,
        lng: 69.35,
        tagline: "Land of the Pure",
        facts: [
            "K2 is world's second-highest mountain",
            "Mohenjo-daro is 4,500 years old",
            "Has world's highest paved road"
        ],
        quiz: {
            question: "What is K2's ranking among mountains?",
            options: ["First", "Second", "Third", "Fourth"],
            answer: 1
        }
    },
    {
        name: "Philippines",
        flag: "🇵🇭",
        capital: "Manila",
        region: "Southeast Asia",
        population: "109.6 million",
        language: "Filipino, English",
        currency: "Philippine Peso (PHP)",
        lat: 12.88,
        lng: 121.77,
        tagline: "It's More Fun in the Philippines",
        facts: [
            "Archipelago of 7,641 islands",
            "Named after King Philip II of Spain",
            "Sent the first text message (SMS)"
        ],
        quiz: {
            question: "How many islands are in the Philippines?",
            options: ["3,000", "5,000", "7,641", "10,000"],
            answer: 2
        }
    },
    {
        name: "Qatar",
        flag: "🇶🇦",
        capital: "Doha",
        region: "Middle East",
        population: "2.9 million",
        language: "Arabic",
        currency: "Qatari Riyal (QAR)",
        lat: 25.35,
        lng: 51.18,
        tagline: "Where Tradition Meets Future",
        facts: [
            "Richest country by GDP per capita",
            "Hosted FIFA World Cup 2022",
            "Al Jazeera is based here"
        ],
        quiz: {
            question: "What event did Qatar host in 2022?",
            options: ["Olympics", "FIFA World Cup", "Cricket World Cup", "Asian Games"],
            answer: 1
        }
    },
    {
        name: "Saudi Arabia",
        flag: "🇸🇦",
        capital: "Riyadh",
        region: "Middle East",
        population: "34.8 million",
        language: "Arabic",
        currency: "Saudi Riyal (SAR)",
        lat: 23.89,
        lng: 45.08,
        tagline: "Heart of the Arab World",
        facts: [
            "Home to Mecca and Medina",
            "World's largest oil exporter",
            "Has no rivers or permanent lakes"
        ],
        quiz: {
            question: "Which holy city is in Saudi Arabia?",
            options: ["Jerusalem", "Baghdad", "Mecca", "Cairo"],
            answer: 2
        }
    },
    {
        name: "Singapore",
        flag: "🇸🇬",
        capital: "Singapore",
        region: "Southeast Asia",
        population: "5.5 million",
        language: "English, Mandarin, Malay, Tamil",
        currency: "Singapore Dollar (SGD)",
        lat: 1.35,
        lng: 103.82,
        tagline: "The Lion City",
        facts: [
            "One of only three city-states",
            "Chewing gum is banned",
            "Has the world's first night zoo"
        ],
        quiz: {
            question: "What is Singapore's nickname?",
            options: ["Tiger City", "Lion City", "Dragon City", "Eagle City"],
            answer: 1
        }
    },
    {
        name: "South Korea",
        flag: "🇰🇷",
        capital: "Seoul",
        region: "East Asia",
        population: "51.8 million",
        language: "Korean",
        currency: "South Korean Won (KRW)",
        lat: 35.91,
        lng: 127.77,
        tagline: "Land of the Morning Calm",
        facts: [
            "Has the fastest internet in the world",
            "K-pop is a global phenomenon",
            "Invented world's first metal printing type"
        ],
        quiz: {
            question: "What is South Korea famous for in entertainment?",
            options: ["Bollywood", "K-pop", "Hollywood", "Anime"],
            answer: 1
        }
    },
    {
        name: "Sri Lanka",
        flag: "🇱🇰",
        capital: "Sri Jayawardenepura Kotte",
        region: "South Asia",
        population: "21.9 million",
        language: "Sinhala, Tamil",
        currency: "Sri Lankan Rupee (LKR)",
        lat: 7.87,
        lng: 80.77,
        tagline: "Pearl of the Indian Ocean",
        facts: [
            "World's largest exporter of cinnamon",
            "Adam's Peak is sacred to 4 religions",
            "Highest biodiversity density in Asia"
        ],
        quiz: {
            question: "What spice is Sri Lanka largest exporter of?",
            options: ["Pepper", "Cinnamon", "Cardamom", "Turmeric"],
            answer: 1
        }
    },
    {
        name: "Syria",
        flag: "🇸🇾",
        capital: "Damascus",
        region: "Middle East",
        population: "17.5 million",
        language: "Arabic",
        currency: "Syrian Pound (SYP)",
        lat: 34.80,
        lng: 39.00,
        tagline: "Cradle of Civilizations",
        facts: [
            "Damascus is oldest continuously inhabited city",
            "Aleppo had world's largest covered market",
            "Home to ancient Palmyra"
        ],
        quiz: {
            question: "What is special about Damascus?",
            options: ["Largest city", "Oldest inhabited city", "Tallest buildings", "Most museums"],
            answer: 1
        }
    },
    {
        name: "Taiwan",
        flag: "🇹🇼",
        capital: "Taipei",
        region: "East Asia",
        population: "23.6 million",
        language: "Mandarin Chinese",
        currency: "New Taiwan Dollar (TWD)",
        lat: 23.70,
        lng: 120.96,
        tagline: "Heart of Asia",
        facts: [
            "Makes 90% of world's advanced semiconductors",
            "Most 7-Elevens per capita",
            "Taipei 101 was tallest building 2004-2010"
        ],
        quiz: {
            question: "What does Taiwan produce 90% of globally?",
            options: ["Rice", "Semiconductors", "Cars", "Phones"],
            answer: 1
        }
    },
    {
        name: "Tajikistan",
        flag: "🇹🇯",
        capital: "Dushanbe",
        region: "Central Asia",
        population: "9.5 million",
        language: "Tajik",
        currency: "Tajikistani Somoni (TJS)",
        lat: 38.86,
        lng: 71.28,
        tagline: "Roof of the World",
        facts: [
            "93% mountainous",
            "Has world's tallest dam - Nurek Dam",
            "Pamir Highway is one of highest roads"
        ],
        quiz: {
            question: "What percentage of Tajikistan is mountains?",
            options: ["50%", "70%", "93%", "100%"],
            answer: 2
        }
    },
    {
        name: "Thailand",
        flag: "🇹🇭",
        capital: "Bangkok",
        region: "Southeast Asia",
        population: "69.8 million",
        language: "Thai",
        currency: "Thai Baht (THB)",
        lat: 15.87,
        lng: 100.99,
        tagline: "Land of Smiles",
        facts: [
            "Never been colonized by Europeans",
            "Bangkok's full name has 169 characters",
            "Home to world's largest solid gold Buddha"
        ],
        quiz: {
            question: "What is unique about Thailand's colonial history?",
            options: ["Was British", "Was French", "Never colonized", "Was Dutch"],
            answer: 2
        }
    },
    {
        name: "Timor-Leste",
        flag: "🇹🇱",
        capital: "Dili",
        region: "Southeast Asia",
        population: "1.3 million",
        language: "Tetum, Portuguese",
        currency: "US Dollar (USD)",
        lat: -8.87,
        lng: 125.73,
        tagline: "Rising Nation",
        facts: [
            "Independent in 2002 - first new state of 21st century",
            "One of two Catholic nations in Asia",
            "Has significant oil reserves"
        ],
        quiz: {
            question: "When did Timor-Leste become independent?",
            options: ["1990", "1999", "2002", "2010"],
            answer: 2
        }
    },
    {
        name: "Turkey",
        flag: "🇹🇷",
        capital: "Ankara",
        region: "Eurasia",
        population: "84.3 million",
        language: "Turkish",
        currency: "Turkish Lira (TRY)",
        lat: 38.96,
        lng: 35.24,
        tagline: "Where Continents Meet",
        facts: [
            "Istanbul spans two continents",
            "Tulips came from Turkey to Europe",
            "Santa Claus was born in Patara"
        ],
        quiz: {
            question: "Which city spans two continents?",
            options: ["Ankara", "Istanbul", "Izmir", "Antalya"],
            answer: 1
        }
    },
    {
        name: "Turkmenistan",
        flag: "🇹🇲",
        capital: "Ashgabat",
        region: "Central Asia",
        population: "6 million",
        language: "Turkmen",
        currency: "Turkmenistan Manat (TMT)",
        lat: 38.97,
        lng: 59.56,
        tagline: "Land of Neutrality",
        facts: [
            "Darvaza crater has burned for 50+ years",
            "Has world's largest indoor Ferris wheel",
            "Most white marble buildings"
        ],
        quiz: {
            question: "What has burned for 50+ years?",
            options: ["Volcano", "Oil field", "Darvaza crater", "Forest"],
            answer: 2
        }
    },
    {
        name: "United Arab Emirates",
        flag: "🇦🇪",
        capital: "Abu Dhabi",
        region: "Middle East",
        population: "9.9 million",
        language: "Arabic",
        currency: "UAE Dirham (AED)",
        lat: 23.42,
        lng: 53.85,
        tagline: "Spirit of the Union",
        facts: [
            "Burj Khalifa is world's tallest building",
            "Only 11% are Emiratis",
            "Has the world's first 7-star hotel"
        ],
        quiz: {
            question: "What is the world's tallest building in UAE?",
            options: ["Burj Al Arab", "Burj Khalifa", "Emirates Towers", "Dubai Frame"],
            answer: 1
        }
    },
    {
        name: "Uzbekistan",
        flag: "🇺🇿",
        capital: "Tashkent",
        region: "Central Asia",
        population: "34.2 million",
        language: "Uzbek",
        currency: "Uzbekistani Som (UZS)",
        lat: 41.38,
        lng: 64.59,
        tagline: "Heart of the Silk Road",
        facts: [
            "Samarkand was major Silk Road center",
            "Has oldest Quran in the world",
            "Registan Square is most magnificent"
        ],
        quiz: {
            question: "What trade route passed through?",
            options: ["Spice Route", "Amber Road", "Silk Road", "Tea Route"],
            answer: 2
        }
    },
    {
        name: "Vietnam",
        flag: "🇻🇳",
        capital: "Hanoi",
        region: "Southeast Asia",
        population: "97.3 million",
        language: "Vietnamese",
        currency: "Vietnamese Dong (VND)",
        lat: 14.06,
        lng: 108.28,
        tagline: "Timeless Charm",
        facts: [
            "World's second-largest coffee exporter",
            "Ha Long Bay has 2,000 limestone islands",
            "Has world's largest cave - Son Doong"
        ],
        quiz: {
            question: "Vietnam's ranking in coffee export?",
            options: ["First", "Second", "Third", "Fifth"],
            answer: 1
        }
    },
    {
        name: "Yemen",
        flag: "🇾🇪",
        capital: "Sana'a",
        region: "Middle East",
        population: "29.8 million",
        language: "Arabic",
        currency: "Yemeni Rial (YER)",
        lat: 15.55,
        lng: 48.52,
        tagline: "Arabia Felix",
        facts: [
            "Sana'a is oldest continuously inhabited city",
            "Socotra has unique plants",
            "Coffee was first cultivated here"
        ],
        quiz: {
            question: "What beverage was first cultivated in Yemen?",
            options: ["Tea", "Coffee", "Cocoa", "Wine"],
            answer: 1
        }
    },

    // ============ EUROPE (44) ============
    {
        name: "Albania",
        flag: "🇦🇱",
        capital: "Tirana",
        region: "Southern Europe",
        population: "2.9 million",
        language: "Albanian",
        currency: "Albanian Lek (ALL)",
        lat: 41.15,
        lng: 20.17,
        tagline: "Land of the Eagles",
        facts: [
            "Has 750,000 bunkers per capita",
            "Mother Teresa was Albanian",
            "Last communist country until 1991"
        ],
        quiz: {
            question: "What structures does Albania have many of?",
            options: ["Churches", "Bunkers", "Castles", "Bridges"],
            answer: 1
        }
    },
    {
        name: "Andorra",
        flag: "🇦🇩",
        capital: "Andorra la Vella",
        region: "Southern Europe",
        population: "77,265",
        language: "Catalan",
        currency: "Euro (EUR)",
        lat: 42.51,
        lng: 1.52,
        tagline: "The Pyrenean Country",
        facts: [
            "Highest capital in Europe (1,023m)",
            "Co-ruled by France and Spain",
            "No airport or railway"
        ],
        quiz: {
            question: "What is unique about Andorra's government?",
            options: ["No leader", "Co-ruled", "Direct democracy", "Monarchy"],
            answer: 1
        }
    },
    {
        name: "Austria",
        flag: "🇦🇹",
        capital: "Vienna",
        region: "Central Europe",
        population: "9 million",
        language: "German",
        currency: "Euro (EUR)",
        lat: 47.52,
        lng: 14.55,
        tagline: "Land of Music",
        facts: [
            "Birthplace of Mozart and Freud",
            "Vienna is most livable city",
            "World's oldest zoo is in Vienna"
        ],
        quiz: {
            question: "Which composer was born in Austria?",
            options: ["Beethoven", "Mozart", "Bach", "Chopin"],
            answer: 1
        }
    },
    {
        name: "Belarus",
        flag: "🇧🇾",
        capital: "Minsk",
        region: "Eastern Europe",
        population: "9.4 million",
        language: "Belarusian, Russian",
        currency: "Belarusian Ruble (BYN)",
        lat: 53.71,
        lng: 27.95,
        tagline: "Land of Lakes",
        facts: [
            "Has Europe's largest primeval forest",
            "Home to European bison",
            "40% covered by forests"
        ],
        quiz: {
            question: "What animal lives in Belarus's forests?",
            options: ["Bears", "European bison", "Wolves", "Lions"],
            answer: 1
        }
    },
    {
        name: "Belgium",
        flag: "🇧🇪",
        capital: "Brussels",
        region: "Western Europe",
        population: "11.5 million",
        language: "Dutch, French, German",
        currency: "Euro (EUR)",
        lat: 50.50,
        lng: 4.47,
        tagline: "Heart of Europe",
        facts: [
            "EU and NATO headquarters",
            "Invented French fries and waffles",
            "World's longest tram line"
        ],
        quiz: {
            question: "What did Belgium actually invent?",
            options: ["Croissants", "French fries", "Pizza", "Pasta"],
            answer: 1
        }
    },
    {
        name: "Bosnia and Herzegovina",
        flag: "🇧🇦",
        capital: "Sarajevo",
        region: "Southeastern Europe",
        population: "3.3 million",
        language: "Bosnian, Croatian, Serbian",
        currency: "Convertible Mark (BAM)",
        lat: 43.92,
        lng: 17.68,
        tagline: "Heart-Shaped Land",
        facts: [
            "Sarajevo hosted 1984 Winter Olympics",
            "Has Europe's last primeval forests",
            "Old Bridge of Mostar is UNESCO site"
        ],
        quiz: {
            question: "Which Olympics did Sarajevo host?",
            options: ["1980 Summer", "1984 Winter", "1988 Summer", "1992 Winter"],
            answer: 1
        }
    },
    {
        name: "Bulgaria",
        flag: "🇧🇬",
        capital: "Sofia",
        region: "Southeastern Europe",
        population: "6.9 million",
        language: "Bulgarian",
        currency: "Bulgarian Lev (BGN)",
        lat: 42.73,
        lng: 25.49,
        tagline: "Land of Roses",
        facts: [
            "Produces 85% of world's rose oil",
            "Invented the Cyrillic alphabet",
            "Nodding means 'no'"
        ],
        quiz: {
            question: "What does nodding mean in Bulgaria?",
            options: ["Yes", "No", "Maybe", "Hello"],
            answer: 1
        }
    },
    {
        name: "Croatia",
        flag: "🇭🇷",
        capital: "Zagreb",
        region: "Southeastern Europe",
        population: "4.1 million",
        language: "Croatian",
        currency: "Euro (EUR)",
        lat: 45.10,
        lng: 15.20,
        tagline: "Full of Life",
        facts: [
            "Dubrovnik was King's Landing in GoT",
            "Invented the necktie (cravat)",
            "Has over 1,200 islands"
        ],
        quiz: {
            question: "What did Croatia invent?",
            options: ["Hat", "Necktie", "Belt", "Scarf"],
            answer: 1
        }
    },
    {
        name: "Cyprus",
        flag: "🇨🇾",
        capital: "Nicosia",
        region: "Mediterranean",
        population: "1.2 million",
        language: "Greek, Turkish",
        currency: "Euro (EUR)",
        lat: 35.13,
        lng: 33.43,
        tagline: "Island of Aphrodite",
        facts: [
            "Birthplace of Aphrodite",
            "Nicosia is last divided capital",
            "Inhabited for 10,000+ years"
        ],
        quiz: {
            question: "Which goddess was born in Cyprus?",
            options: ["Athena", "Hera", "Aphrodite", "Artemis"],
            answer: 2
        }
    },
    {
        name: "Czech Republic",
        flag: "🇨🇿",
        capital: "Prague",
        region: "Central Europe",
        population: "10.7 million",
        language: "Czech",
        currency: "Czech Koruna (CZK)",
        lat: 49.82,
        lng: 15.47,
        tagline: "Land of Stories",
        facts: [
            "Highest beer consumption per capita",
            "Prague Castle is largest ancient castle",
            "Invented soft contact lenses"
        ],
        quiz: {
            question: "What does Czech Republic consume most?",
            options: ["Wine", "Beer", "Water", "Tea"],
            answer: 1
        }
    },
    {
        name: "Denmark",
        flag: "🇩🇰",
        capital: "Copenhagen",
        region: "Northern Europe",
        population: "5.8 million",
        language: "Danish",
        currency: "Danish Krone (DKK)",
        lat: 56.26,
        lng: 9.50,
        tagline: "Land of Fairy Tales",
        facts: [
            "Home of LEGO",
            "Hans Christian Andersen wrote here",
            "World's oldest flag still in use"
        ],
        quiz: {
            question: "What toy brand is from Denmark?",
            options: ["Barbie", "Hot Wheels", "LEGO", "Playmobil"],
            answer: 2
        }
    },
    {
        name: "Estonia",
        flag: "🇪🇪",
        capital: "Tallinn",
        region: "Northern Europe",
        population: "1.3 million",
        language: "Estonian",
        currency: "Euro (EUR)",
        lat: 58.60,
        lng: 25.01,
        tagline: "Digital Society",
        facts: [
            "First country to offer e-residency",
            "Skype was invented here",
            "99% of services are online"
        ],
        quiz: {
            question: "What app was invented in Estonia?",
            options: ["WhatsApp", "Zoom", "Skype", "Discord"],
            answer: 2
        }
    },
    {
        name: "Finland",
        flag: "🇫🇮",
        capital: "Helsinki",
        region: "Northern Europe",
        population: "5.5 million",
        language: "Finnish, Swedish",
        currency: "Euro (EUR)",
        lat: 61.92,
        lng: 25.75,
        tagline: "Land of a Thousand Lakes",
        facts: [
            "Has 187,888 lakes",
            "Home of Santa Claus",
            "Ranked happiest country"
        ],
        quiz: {
            question: "How many lakes does Finland have?",
            options: ["10,000", "50,000", "187,888", "500,000"],
            answer: 2
        }
    },
    {
        name: "France",
        flag: "🇫🇷",
        capital: "Paris",
        region: "Western Europe",
        population: "67.4 million",
        language: "French",
        currency: "Euro (EUR)",
        lat: 46.23,
        lng: 2.21,
        tagline: "L'Art de Vivre",
        facts: [
            "Most visited country (89M tourists/year)",
            "Louvre is largest art museum",
            "Has 12 time zones"
        ],
        quiz: {
            question: "How many time zones does France have?",
            options: ["1", "6", "12", "24"],
            answer: 2
        }
    },
    {
        name: "Georgia",
        flag: "🇬🇪",
        capital: "Tbilisi",
        region: "Western Asia",
        population: "3.7 million",
        language: "Georgian",
        currency: "Georgian Lari (GEL)",
        lat: 42.32,
        lng: 43.36,
        tagline: "Where Europe Meets Asia",
        facts: [
            "8,000 years of winemaking",
            "Has unique 33-letter alphabet",
            "Stalin was born here"
        ],
        quiz: {
            question: "How old is Georgia's winemaking?",
            options: ["2,000 years", "5,000 years", "8,000 years", "10,000 years"],
            answer: 2
        }
    },
    {
        name: "Germany",
        flag: "🇩🇪",
        capital: "Berlin",
        region: "Western Europe",
        population: "83.2 million",
        language: "German",
        currency: "Euro (EUR)",
        lat: 51.17,
        lng: 10.45,
        tagline: "Land of Ideas",
        facts: [
            "Has over 20,000 castles",
            "Invented printing press and automobile",
            "Oktoberfest attracts 6M visitors"
        ],
        quiz: {
            question: "What did Gutenberg invent?",
            options: ["Telephone", "Printing press", "Light bulb", "Camera"],
            answer: 1
        }
    },
    {
        name: "Greece",
        flag: "🇬🇷",
        capital: "Athens",
        region: "Southern Europe",
        population: "10.7 million",
        language: "Greek",
        currency: "Euro (EUR)",
        lat: 39.07,
        lng: 21.82,
        tagline: "Birthplace of Democracy",
        facts: [
            "Birthplace of democracy and Olympics",
            "Most archaeological museums",
            "Greek spoken for 3,400 years"
        ],
        quiz: {
            question: "What was invented in Greece?",
            options: ["Monarchy", "Democracy", "Dictatorship", "Communism"],
            answer: 1
        }
    },
    {
        name: "Hungary",
        flag: "🇭🇺",
        capital: "Budapest",
        region: "Central Europe",
        population: "9.8 million",
        language: "Hungarian",
        currency: "Hungarian Forint (HUF)",
        lat: 47.16,
        lng: 19.50,
        tagline: "Pearl of the Danube",
        facts: [
            "Invented Rubik's Cube and ballpoint pen",
            "World's second-largest synagogue",
            "Hungarian is hardest language"
        ],
        quiz: {
            question: "What puzzle was invented in Hungary?",
            options: ["Sudoku", "Rubik's Cube", "Jigsaw", "Crossword"],
            answer: 1
        }
    },
    {
        name: "Iceland",
        flag: "🇮🇸",
        capital: "Reykjavík",
        region: "Northern Europe",
        population: "366,425",
        language: "Icelandic",
        currency: "Icelandic Króna (ISK)",
        lat: 64.96,
        lng: -19.02,
        tagline: "Land of Fire and Ice",
        facts: [
            "Has no mosquitoes",
            "Oldest parliament founded 930 AD",
            "100% renewable energy"
        ],
        quiz: {
            question: "What insect does Iceland NOT have?",
            options: ["Flies", "Bees", "Mosquitoes", "Spiders"],
            answer: 2
        }
    },
    {
        name: "Ireland",
        flag: "🇮🇪",
        capital: "Dublin",
        region: "Western Europe",
        population: "5 million",
        language: "Irish, English",
        currency: "Euro (EUR)",
        lat: 53.14,
        lng: -7.69,
        tagline: "The Emerald Isle",
        facts: [
            "Halloween originated here",
            "Has no snakes",
            "Harp is national symbol"
        ],
        quiz: {
            question: "What holiday originated in Ireland?",
            options: ["Christmas", "Easter", "Halloween", "Thanksgiving"],
            answer: 2
        }
    },
    {
        name: "Italy",
        flag: "🇮🇹",
        capital: "Rome",
        region: "Southern Europe",
        population: "60.4 million",
        language: "Italian",
        currency: "Euro (EUR)",
        lat: 41.87,
        lng: 12.57,
        tagline: "La Dolce Vita",
        facts: [
            "58 UNESCO sites - most in world",
            "Invented pizza, pasta, and gelato",
            "Vatican City is within Rome"
        ],
        quiz: {
            question: "How many UNESCO sites does Italy have?",
            options: ["25", "40", "58", "75"],
            answer: 2
        }
    },
    {
        name: "Latvia",
        flag: "🇱🇻",
        capital: "Riga",
        region: "Northern Europe",
        population: "1.9 million",
        language: "Latvian",
        currency: "Euro (EUR)",
        lat: 56.88,
        lng: 24.60,
        tagline: "Land That Sings",
        facts: [
            "Riga has most Art Nouveau buildings",
            "World's widest waterfall",
            "Fastest internet in Europe"
        ],
        quiz: {
            question: "What architecture is Riga famous for?",
            options: ["Gothic", "Art Nouveau", "Baroque", "Modern"],
            answer: 1
        }
    },
    {
        name: "Liechtenstein",
        flag: "🇱🇮",
        capital: "Vaduz",
        region: "Western Europe",
        population: "38,128",
        language: "German",
        currency: "Swiss Franc (CHF)",
        lat: 47.17,
        lng: 9.56,
        tagline: "Small But Mighty",
        facts: [
            "Sixth-smallest country",
            "More companies than citizens",
            "Last to give women vote (1984)"
        ],
        quiz: {
            question: "What is unusual about Liechtenstein's companies?",
            options: ["All foreign", "More than citizens", "All tech", "No taxes"],
            answer: 1
        }
    },
    {
        name: "Lithuania",
        flag: "🇱🇹",
        capital: "Vilnius",
        region: "Northern Europe",
        population: "2.8 million",
        language: "Lithuanian",
        currency: "Euro (EUR)",
        lat: 55.17,
        lng: 23.88,
        tagline: "Land of Storks",
        facts: [
            "Largest old town in Eastern Europe",
            "Basketball is national sport",
            "Geographic center of Europe"
        ],
        quiz: {
            question: "What is Lithuania's national sport?",
            options: ["Soccer", "Basketball", "Hockey", "Tennis"],
            answer: 1
        }
    },
    {
        name: "Luxembourg",
        flag: "🇱🇺",
        capital: "Luxembourg City",
        region: "Western Europe",
        population: "634,814",
        language: "Luxembourgish, French, German",
        currency: "Euro (EUR)",
        lat: 49.82,
        lng: 6.13,
        tagline: "Let's Make It Happen",
        facts: [
            "Only Grand Duchy in world",
            "Highest minimum wage in EU",
            "Three official languages"
        ],
        quiz: {
            question: "What type of monarchy is Luxembourg?",
            options: ["Kingdom", "Principality", "Grand Duchy", "Empire"],
            answer: 2
        }
    },
    {
        name: "Malta",
        flag: "🇲🇹",
        capital: "Valletta",
        region: "Southern Europe",
        population: "514,564",
        language: "Maltese, English",
        currency: "Euro (EUR)",
        lat: 35.94,
        lng: 14.38,
        tagline: "Heart of the Mediterranean",
        facts: [
            "Smallest EU member by population",
            "Temples older than pyramids",
            "Uses left-hand traffic"
        ],
        quiz: {
            question: "What ancient structures predate pyramids?",
            options: ["Castles", "Megalithic temples", "Churches", "Bridges"],
            answer: 1
        }
    },
    {
        name: "Moldova",
        flag: "🇲🇩",
        capital: "Chișinău",
        region: "Eastern Europe",
        population: "2.6 million",
        language: "Romanian",
        currency: "Moldovan Leu (MDL)",
        lat: 47.41,
        lng: 28.37,
        tagline: "Discover the Routes of Life",
        facts: [
            "World's largest wine cellar",
            "Wine is 25% of exports",
            "Least visited country in Europe"
        ],
        quiz: {
            question: "What is Moldova famous for?",
            options: ["Beer", "Wine", "Vodka", "Whiskey"],
            answer: 1
        }
    },
    {
        name: "Monaco",
        flag: "🇲🇨",
        capital: "Monaco",
        region: "Western Europe",
        population: "39,242",
        language: "French",
        currency: "Euro (EUR)",
        lat: 43.74,
        lng: 7.42,
        tagline: "Diamond of the Riviera",
        facts: [
            "World's second-smallest country",
            "Highest GDP per capita",
            "No income tax"
        ],
        quiz: {
            question: "What is Monaco's ranking by size?",
            options: ["Smallest", "Second smallest", "Third smallest", "Fourth smallest"],
            answer: 1
        }
    },
    {
        name: "Montenegro",
        flag: "🇲🇪",
        capital: "Podgorica",
        region: "Southeastern Europe",
        population: "621,718",
        language: "Montenegrin",
        currency: "Euro (EUR)",
        lat: 42.71,
        lng: 19.37,
        tagline: "Wild Beauty",
        facts: [
            "Name means 'Black Mountain'",
            "Has Europe's deepest canyon",
            "Independent since 2006"
        ],
        quiz: {
            question: "What does Montenegro mean?",
            options: ["White Mountain", "Black Mountain", "Green Mountain", "Blue Mountain"],
            answer: 1
        }
    },
    {
        name: "Netherlands",
        flag: "🇳🇱",
        capital: "Amsterdam",
        region: "Western Europe",
        population: "17.4 million",
        language: "Dutch",
        currency: "Euro (EUR)",
        lat: 52.13,
        lng: 5.29,
        tagline: "Land Below Sea Level",
        facts: [
            "26% below sea level",
            "More bicycles than people",
            "World's tallest people"
        ],
        quiz: {
            question: "What % of Netherlands is below sea level?",
            options: ["10%", "26%", "50%", "75%"],
            answer: 1
        }
    },
    {
        name: "North Macedonia",
        flag: "🇲🇰",
        capital: "Skopje",
        region: "Southeastern Europe",
        population: "2.1 million",
        language: "Macedonian, Albanian",
        currency: "Macedonian Denar (MKD)",
        lat: 41.51,
        lng: 21.41,
        tagline: "Land of Natural Beauty",
        facts: [
            "Named after ancient Macedonia",
            "Lake Ohrid is 3 million years old",
            "Mother Teresa was born here"
        ],
        quiz: {
            question: "Who was born in Skopje?",
            options: ["Alexander the Great", "Mother Teresa", "Aristotle", "Philip II"],
            answer: 1
        }
    },
    {
        name: "Norway",
        flag: "🇳🇴",
        capital: "Oslo",
        region: "Northern Europe",
        population: "5.4 million",
        language: "Norwegian",
        currency: "Norwegian Krone (NOK)",
        lat: 60.47,
        lng: 8.47,
        tagline: "Powered by Nature",
        facts: [
            "Has over 1,000 fjords",
            "Nobel Peace Prize awarded in Oslo",
            "Home to Northern Lights"
        ],
        quiz: {
            question: "What phenomenon can be seen in Norway?",
            options: ["Monsoons", "Northern Lights", "Earthquakes", "Hurricanes"],
            answer: 1
        }
    },
    {
        name: "Poland",
        flag: "🇵🇱",
        capital: "Warsaw",
        region: "Central Europe",
        population: "38 million",
        language: "Polish",
        currency: "Polish Złoty (PLN)",
        lat: 51.92,
        lng: 19.15,
        tagline: "Move Your Imagination",
        facts: [
            "Marie Curie was born here",
            "Has Europe's last primeval forest",
            "Invented kerosene"
        ],
        quiz: {
            question: "Which scientist was born in Poland?",
            options: ["Einstein", "Newton", "Marie Curie", "Darwin"],
            answer: 2
        }
    },
    {
        name: "Portugal",
        flag: "🇵🇹",
        capital: "Lisbon",
        region: "Southern Europe",
        population: "10.3 million",
        language: "Portuguese",
        currency: "Euro (EUR)",
        lat: 39.40,
        lng: -8.22,
        tagline: "Europe's Best Kept Secret",
        facts: [
            "Oldest bookstore in the world",
            "250 million speak Portuguese",
            "Longest bridge in Europe"
        ],
        quiz: {
            question: "How many speak Portuguese worldwide?",
            options: ["50 million", "100 million", "250 million", "500 million"],
            answer: 2
        }
    },
    {
        name: "Romania",
        flag: "🇷🇴",
        capital: "Bucharest",
        region: "Eastern Europe",
        population: "19.3 million",
        language: "Romanian",
        currency: "Romanian Leu (RON)",
        lat: 45.94,
        lng: 24.97,
        tagline: "Land of Dracula",
        facts: [
            "Home of the Dracula legend",
            "Has world's heaviest building",
            "Danube Delta is best preserved"
        ],
        quiz: {
            question: "What legend is associated with Romania?",
            options: ["Frankenstein", "Dracula", "Werewolf", "Mummy"],
            answer: 1
        }
    },
    {
        name: "Russia",
        flag: "🇷🇺",
        capital: "Moscow",
        region: "Eastern Europe/Northern Asia",
        population: "144.1 million",
        language: "Russian",
        currency: "Russian Ruble (RUB)",
        lat: 61.52,
        lng: 105.32,
        tagline: "Discover Russia",
        facts: [
            "Largest country (17.1M km²)",
            "Lake Baikal has 20% of fresh water",
            "Spans 11 time zones"
        ],
        quiz: {
            question: "How many time zones does Russia span?",
            options: ["5", "8", "11", "15"],
            answer: 2
        }
    },
    {
        name: "San Marino",
        flag: "🇸🇲",
        capital: "San Marino",
        region: "Southern Europe",
        population: "33,931",
        language: "Italian",
        currency: "Euro (EUR)",
        lat: 43.94,
        lng: 12.46,
        tagline: "Ancient Land of Liberty",
        facts: [
            "World's oldest republic (301 AD)",
            "Third-smallest in Europe",
            "Completely surrounded by Italy"
        ],
        quiz: {
            question: "San Marino is world's oldest what?",
            options: ["Kingdom", "Republic", "Empire", "Colony"],
            answer: 1
        }
    },
    {
        name: "Serbia",
        flag: "🇷🇸",
        capital: "Belgrade",
        region: "Southeastern Europe",
        population: "6.9 million",
        language: "Serbian",
        currency: "Serbian Dinar (RSD)",
        lat: 44.02,
        lng: 21.01,
        tagline: "Land of Heart",
        facts: [
            "Nikola Tesla has Serbian heritage",
            "Belgrade is oldest city in Europe",
            "Has most war ruins"
        ],
        quiz: {
            question: "Which inventor has Serbian heritage?",
            options: ["Edison", "Tesla", "Bell", "Marconi"],
            answer: 1
        }
    },
    {
        name: "Slovakia",
        flag: "🇸🇰",
        capital: "Bratislava",
        region: "Central Europe",
        population: "5.5 million",
        language: "Slovak",
        currency: "Euro (EUR)",
        lat: 48.67,
        lng: 19.70,
        tagline: "Little Big Country",
        facts: [
            "Most castles per capita",
            "Andy Warhol's parents were Slovak",
            "World's highest wooden altar"
        ],
        quiz: {
            question: "What does Slovakia have most per capita?",
            options: ["Museums", "Castles", "Churches", "Bridges"],
            answer: 1
        }
    },
    {
        name: "Slovenia",
        flag: "🇸🇮",
        capital: "Ljubljana",
        region: "Central Europe",
        population: "2.1 million",
        language: "Slovenian",
        currency: "Euro (EUR)",
        lat: 46.15,
        lng: 14.99,
        tagline: "I Feel Slovenia",
        facts: [
            "60% covered by forest",
            "Has 'love' in its name",
            "World's oldest wooden wheel"
        ],
        quiz: {
            question: "What word is hidden in Slovenia?",
            options: ["Sloven", "Love", "Veni", "Oven"],
            answer: 1
        }
    },
    {
        name: "Spain",
        flag: "🇪🇸",
        capital: "Madrid",
        region: "Southern Europe",
        population: "47.4 million",
        language: "Spanish",
        currency: "Euro (EUR)",
        lat: 40.46,
        lng: -3.75,
        tagline: "Everything Under the Sun",
        facts: [
            "500 million speak Spanish",
            "World's oldest restaurant",
            "La Tomatina uses 150,000 tomatoes"
        ],
        quiz: {
            question: "How many speak Spanish worldwide?",
            options: ["100M", "250M", "500M", "750M"],
            answer: 2
        }
    },
    {
        name: "Sweden",
        flag: "🇸🇪",
        capital: "Stockholm",
        region: "Northern Europe",
        population: "10.4 million",
        language: "Swedish",
        currency: "Swedish Krona (SEK)",
        lat: 60.13,
        lng: 18.64,
        tagline: "Land of the Midnight Sun",
        facts: [
            "World's first ice hotel",
            "IKEA, Spotify, Minecraft are Swedish",
            "70% covered by forests"
        ],
        quiz: {
            question: "Which company was founded in Sweden?",
            options: ["IKEA", "Nokia", "LEGO", "Philips"],
            answer: 0
        }
    },
    {
        name: "Switzerland",
        flag: "🇨🇭",
        capital: "Bern",
        region: "Western Europe",
        population: "8.6 million",
        language: "German, French, Italian, Romansh",
        currency: "Swiss Franc (CHF)",
        lat: 46.82,
        lng: 8.23,
        tagline: "Get Natural",
        facts: [
            "Four official languages",
            "Longest rail tunnel (57 km)",
            "Neutral since 1815"
        ],
        quiz: {
            question: "How many official languages?",
            options: ["2", "3", "4", "5"],
            answer: 2
        }
    },
    {
        name: "Ukraine",
        flag: "🇺🇦",
        capital: "Kyiv",
        region: "Eastern Europe",
        population: "43.7 million",
        language: "Ukrainian",
        currency: "Ukrainian Hryvnia (UAH)",
        lat: 48.38,
        lng: 31.17,
        tagline: "Freedom is Our Religion",
        facts: [
            "Largest country entirely in Europe",
            "Kyiv founded 482 AD",
            "Deepest metro station (105.5m)"
        ],
        quiz: {
            question: "Ukraine's ranking by size in Europe?",
            options: ["Third", "Second", "Largest entirely in Europe", "Fifth"],
            answer: 2
        }
    },
    {
        name: "United Kingdom",
        flag: "🇬🇧",
        capital: "London",
        region: "Western Europe",
        population: "67.9 million",
        language: "English",
        currency: "British Pound (GBP)",
        lat: 55.38,
        lng: -3.44,
        tagline: "Heritage and Innovation",
        facts: [
            "British Empire was largest in history",
            "Invented WWW and telephone",
            "Big Ben is actually the bell"
        ],
        quiz: {
            question: "What is Big Ben actually?",
            options: ["The tower", "The bell", "The clock", "The building"],
            answer: 1
        }
    },
    {
        name: "Vatican City",
        flag: "🇻🇦",
        capital: "Vatican City",
        region: "Southern Europe",
        population: "825",
        language: "Latin, Italian",
        currency: "Euro (EUR)",
        lat: 41.90,
        lng: 12.45,
        tagline: "Center of the Catholic World",
        facts: [
            "World's smallest country (0.44 km²)",
            "Has own post office and radio",
            "St. Peter's is largest church"
        ],
        quiz: {
            question: "What is Vatican City's size?",
            options: ["0.44 km²", "1 km²", "5 km²", "10 km²"],
            answer: 0
        }
    },

    // ============ AFRICA (54) ============
    {
        name: "Algeria",
        flag: "🇩🇿",
        capital: "Algiers",
        region: "North Africa",
        population: "44.6 million",
        language: "Arabic, Berber",
        currency: "Algerian Dinar (DZD)",
        lat: 28.03,
        lng: 1.66,
        tagline: "Land of Contrasts",
        facts: [
            "Largest country in Africa",
            "90% is Sahara Desert",
            "Has 7 UNESCO World Heritage Sites"
        ],
        quiz: {
            question: "What % of Algeria is desert?",
            options: ["50%", "70%", "90%", "100%"],
            answer: 2
        }
    },
    {
        name: "Angola",
        flag: "🇦🇴",
        capital: "Luanda",
        region: "Southern Africa",
        population: "32.9 million",
        language: "Portuguese",
        currency: "Angolan Kwanza (AOA)",
        lat: -11.20,
        lng: 17.87,
        tagline: "Africa's Giant",
        facts: [
            "Second-largest Portuguese-speaking country",
            "Africa's largest oil reserves",
            "Luanda is one of most expensive cities"
        ],
        quiz: {
            question: "What is Angola rich in?",
            options: ["Gold", "Oil", "Diamonds", "All above"],
            answer: 3
        }
    },
    {
        name: "Benin",
        flag: "🇧🇯",
        capital: "Porto-Novo",
        region: "West Africa",
        population: "12.1 million",
        language: "French",
        currency: "West African CFA Franc",
        lat: 9.31,
        lng: 2.32,
        tagline: "Birthplace of Voodoo",
        facts: [
            "Voodoo originated here",
            "Once Kingdom of Dahomey",
            "Royal Palaces are UNESCO site"
        ],
        quiz: {
            question: "What religion originated in Benin?",
            options: ["Buddhism", "Voodoo", "Hinduism", "Shinto"],
            answer: 1
        }
    },
    {
        name: "Botswana",
        flag: "🇧🇼",
        capital: "Gaborone",
        region: "Southern Africa",
        population: "2.4 million",
        language: "English, Tswana",
        currency: "Botswana Pula (BWP)",
        lat: -22.33,
        lng: 24.68,
        tagline: "Pride of Africa",
        facts: [
            "World's largest diamond producer by value",
            "Okavango Delta is world's largest inland delta",
            "One of Africa's most stable democracies"
        ],
        quiz: {
            question: "What gemstone is Botswana famous for?",
            options: ["Rubies", "Emeralds", "Diamonds", "Sapphires"],
            answer: 2
        }
    },
    {
        name: "Burkina Faso",
        flag: "🇧🇫",
        capital: "Ouagadougou",
        region: "West Africa",
        population: "21.5 million",
        language: "French",
        currency: "West African CFA Franc",
        lat: 12.24,
        lng: -1.56,
        tagline: "Land of Upright People",
        facts: [
            "Name means 'Land of Honest People'",
            "Hosts Africa's largest film festival",
            "Has over 60 ethnic groups"
        ],
        quiz: {
            question: "What does Burkina Faso mean?",
            options: ["Beautiful Land", "Land of Honest People", "Golden Country", "Strong Nation"],
            answer: 1
        }
    },
    {
        name: "Burundi",
        flag: "🇧🇮",
        capital: "Gitega",
        region: "East Africa",
        population: "11.9 million",
        language: "Kirundi, French",
        currency: "Burundian Franc (BIF)",
        lat: -3.37,
        lng: 29.92,
        tagline: "Heart of Africa",
        facts: [
            "One of smallest, most densely populated in Africa",
            "Drumming is sacred tradition",
            "Shares Lake Tanganyika with 3 countries"
        ],
        quiz: {
            question: "What is sacred in Burundi?",
            options: ["Dancing", "Drumming", "Singing", "Painting"],
            answer: 1
        }
    },
    {
        name: "Cabo Verde",
        flag: "🇨🇻",
        capital: "Praia",
        region: "West Africa",
        population: "561,898",
        language: "Portuguese",
        currency: "Cape Verdean Escudo",
        lat: 16.54,
        lng: -23.04,
        tagline: "No Stress",
        facts: [
            "Archipelago of 10 volcanic islands",
            "Most stable democracy in Africa",
            "Home of 'barefoot diva' Cesária Évora"
        ],
        quiz: {
            question: "How many islands in Cabo Verde?",
            options: ["5", "10", "15", "20"],
            answer: 1
        }
    },
    {
        name: "Cameroon",
        flag: "🇨🇲",
        capital: "Yaoundé",
        region: "Central Africa",
        population: "26.5 million",
        language: "French, English",
        currency: "Central African CFA Franc",
        lat: 7.37,
        lng: 12.35,
        tagline: "Africa in Miniature",
        facts: [
            "Called 'Africa in miniature'",
            "Home to 250+ languages",
            "Mount Cameroon is highest in West Africa"
        ],
        quiz: {
            question: "Why is Cameroon called 'Africa in Miniature'?",
            options: ["Small size", "Geographic diversity", "Many languages", "Ancient history"],
            answer: 1
        }
    },
    {
        name: "Central African Republic",
        flag: "🇨🇫",
        capital: "Bangui",
        region: "Central Africa",
        population: "4.8 million",
        language: "French, Sango",
        currency: "Central African CFA Franc",
        lat: 6.61,
        lng: 20.94,
        tagline: "Land of the Forest Elephants",
        facts: [
            "One of world's least developed countries",
            "Home to western lowland gorillas",
            "Has significant diamond deposits"
        ],
        quiz: {
            question: "What animal is CAR famous for?",
            options: ["Lions", "Forest elephants", "Rhinos", "Hippos"],
            answer: 1
        }
    },
    {
        name: "Chad",
        flag: "🇹🇩",
        capital: "N'Djamena",
        region: "Central Africa",
        population: "16.4 million",
        language: "French, Arabic",
        currency: "Central African CFA Franc",
        lat: 15.45,
        lng: 18.73,
        tagline: "Land of Contrasts",
        facts: [
            "Lake Chad has shrunk 90%",
            "Oldest human skull (7 million years)",
            "World's largest collection of rock art"
        ],
        quiz: {
            question: "What happened to Lake Chad?",
            options: ["Grew larger", "Shrunk 90%", "Dried up", "Flooded"],
            answer: 1
        }
    },
    {
        name: "Comoros",
        flag: "🇰🇲",
        capital: "Moroni",
        region: "East Africa",
        population: "869,601",
        language: "Comorian, Arabic, French",
        currency: "Comorian Franc (KMF)",
        lat: -11.65,
        lng: 43.33,
        tagline: "Islands of the Moon",
        facts: [
            "Largest producer of ylang-ylang",
            "Top producer of vanilla",
            "Volcanic archipelago"
        ],
        quiz: {
            question: "What perfume ingredient does Comoros produce?",
            options: ["Rose oil", "Ylang-ylang", "Lavender", "Jasmine"],
            answer: 1
        }
    },
    {
        name: "DR Congo",
        flag: "🇨🇩",
        capital: "Kinshasa",
        region: "Central Africa",
        population: "89.6 million",
        language: "French",
        currency: "Congolese Franc (CDF)",
        lat: -4.04,
        lng: 21.76,
        tagline: "Heart of Africa",
        facts: [
            "Second-largest country in Africa",
            "Has 60% of world's cobalt",
            "Congo River is world's deepest"
        ],
        quiz: {
            question: "What mineral does DR Congo have 60% of?",
            options: ["Gold", "Cobalt", "Diamonds", "Iron"],
            answer: 1
        }
    },
    {
        name: "Republic of the Congo",
        flag: "🇨🇬",
        capital: "Brazzaville",
        region: "Central Africa",
        population: "5.5 million",
        language: "French",
        currency: "Central African CFA Franc",
        lat: -0.23,
        lng: 15.83,
        tagline: "Land of Forests",
        facts: [
            "70% covered by rainforest",
            "Home to lowland gorillas",
            "Major oil producer"
        ],
        quiz: {
            question: "What percentage is rainforest?",
            options: ["30%", "50%", "70%", "90%"],
            answer: 2
        }
    },
    {
        name: "Côte d'Ivoire",
        flag: "🇨🇮",
        capital: "Yamoussoukro",
        region: "West Africa",
        population: "26.4 million",
        language: "French",
        currency: "West African CFA Franc",
        lat: 7.54,
        lng: -5.55,
        tagline: "Land of Elephants",
        facts: [
            "World's largest cocoa producer",
            "Has world's largest church",
            "Named for ivory trade"
        ],
        quiz: {
            question: "What is Côte d'Ivoire's main export?",
            options: ["Coffee", "Cocoa", "Cotton", "Rice"],
            answer: 1
        }
    },
    {
        name: "Djibouti",
        flag: "🇩🇯",
        capital: "Djibouti",
        region: "East Africa",
        population: "988,000",
        language: "French, Arabic",
        currency: "Djiboutian Franc (DJF)",
        lat: 11.59,
        lng: 43.15,
        tagline: "Gateway to Africa",
        facts: [
            "Hottest country on Earth",
            "Lake Assal is lowest point in Africa",
            "Strategic military location"
        ],
        quiz: {
            question: "What makes Djibouti's climate unique?",
            options: ["Coldest", "Hottest", "Wettest", "Driest"],
            answer: 1
        }
    },
    {
        name: "Egypt",
        flag: "🇪🇬",
        capital: "Cairo",
        region: "North Africa",
        population: "102.3 million",
        language: "Arabic",
        currency: "Egyptian Pound (EGP)",
        lat: 26.82,
        lng: 30.80,
        tagline: "Land of the Pharaohs",
        facts: [
            "Pyramids of Giza are 4,500 years old",
            "Suez Canal connects Mediterranean to Red Sea",
            "Nile is world's longest river"
        ],
        quiz: {
            question: "How old are the Pyramids?",
            options: ["2,000 years", "3,000 years", "4,500 years", "6,000 years"],
            answer: 2
        }
    },
    {
        name: "Equatorial Guinea",
        flag: "🇬🇶",
        capital: "Malabo",
        region: "Central Africa",
        population: "1.4 million",
        language: "Spanish, French, Portuguese",
        currency: "Central African CFA Franc",
        lat: 1.65,
        lng: 10.27,
        tagline: "Land of Discovery",
        facts: [
            "Only Spanish-speaking country in Africa",
            "One of Africa's wealthiest per capita",
            "Has massive oil reserves"
        ],
        quiz: {
            question: "What makes EG unique in Africa?",
            options: ["Largest", "Spanish-speaking", "Oldest", "Coldest"],
            answer: 1
        }
    },
    {
        name: "Eritrea",
        flag: "🇪🇷",
        capital: "Asmara",
        region: "East Africa",
        population: "3.5 million",
        language: "Tigrinya, Arabic",
        currency: "Eritrean Nakfa (ERN)",
        lat: 15.18,
        lng: 39.78,
        tagline: "Red Sea Nation",
        facts: [
            "Asmara is UNESCO site for Art Deco",
            "Has 350+ islands",
            "One of youngest countries (1993)"
        ],
        quiz: {
            question: "What architecture is Asmara famous for?",
            options: ["Gothic", "Art Deco", "Baroque", "Modern"],
            answer: 1
        }
    },
    {
        name: "Eswatini",
        flag: "🇸🇿",
        capital: "Mbabane",
        region: "Southern Africa",
        population: "1.2 million",
        language: "Swazi, English",
        currency: "Swazi Lilangeni (SZL)",
        lat: -26.52,
        lng: 31.47,
        tagline: "Royal Kingdom",
        facts: [
            "Last absolute monarchy in Africa",
            "Formerly called Swaziland",
            "Known for traditional Reed Dance"
        ],
        quiz: {
            question: "What type of government?",
            options: ["Democracy", "Republic", "Absolute monarchy", "Federation"],
            answer: 2
        }
    },
    {
        name: "Ethiopia",
        flag: "🇪🇹",
        capital: "Addis Ababa",
        region: "East Africa",
        population: "117.9 million",
        language: "Amharic",
        currency: "Ethiopian Birr (ETB)",
        lat: 9.15,
        lng: 40.49,
        tagline: "Land of Origins",
        facts: [
            "Birthplace of coffee",
            "Never been colonized",
            "Has its own calendar (7 years behind)"
        ],
        quiz: {
            question: "What beverage originated in Ethiopia?",
            options: ["Tea", "Coffee", "Wine", "Beer"],
            answer: 1
        }
    },
    {
        name: "Gabon",
        flag: "🇬🇦",
        capital: "Libreville",
        region: "Central Africa",
        population: "2.2 million",
        language: "French",
        currency: "Central African CFA Franc",
        lat: -0.80,
        lng: 11.61,
        tagline: "Land of Surfing Hippos",
        facts: [
            "85% covered by rainforest",
            "Home to surfing hippos",
            "One of Africa's wealthiest"
        ],
        quiz: {
            question: "What unusual animal behavior occurs in Gabon?",
            options: ["Dancing lions", "Surfing hippos", "Flying crocodiles", "Singing elephants"],
            answer: 1
        }
    },
    {
        name: "Gambia",
        flag: "🇬🇲",
        capital: "Banjul",
        region: "West Africa",
        population: "2.4 million",
        language: "English",
        currency: "Gambian Dalasi (GMD)",
        lat: 13.44,
        lng: -15.31,
        tagline: "Smiling Coast of Africa",
        facts: [
            "Smallest country on African mainland",
            "Entirely surrounded by Senegal",
            "River Gambia runs through it"
        ],
        quiz: {
            question: "Which country surrounds Gambia?",
            options: ["Guinea", "Mali", "Senegal", "Mauritania"],
            answer: 2
        }
    },
    {
        name: "Ghana",
        flag: "🇬🇭",
        capital: "Accra",
        region: "West Africa",
        population: "31.1 million",
        language: "English",
        currency: "Ghanaian Cedi (GHS)",
        lat: 7.95,
        lng: -1.02,
        tagline: "Gateway to Africa",
        facts: [
            "First African country to gain independence (1957)",
            "World's second-largest cocoa producer",
            "Home of Kente cloth"
        ],
        quiz: {
            question: "When did Ghana gain independence?",
            options: ["1947", "1957", "1967", "1977"],
            answer: 1
        }
    },
    {
        name: "Guinea",
        flag: "🇬🇳",
        capital: "Conakry",
        region: "West Africa",
        population: "13.1 million",
        language: "French",
        currency: "Guinean Franc (GNF)",
        lat: 9.95,
        lng: -9.70,
        tagline: "Land of Rivers",
        facts: [
            "Has largest bauxite reserves",
            "Source of Niger, Senegal, Gambia rivers",
            "Rich in diamonds and gold"
        ],
        quiz: {
            question: "What mineral does Guinea have most of?",
            options: ["Gold", "Diamonds", "Bauxite", "Iron"],
            answer: 2
        }
    },
    {
        name: "Guinea-Bissau",
        flag: "🇬🇼",
        capital: "Bissau",
        region: "West Africa",
        population: "1.97 million",
        language: "Portuguese",
        currency: "West African CFA Franc",
        lat: 11.80,
        lng: -15.18,
        tagline: "Land of Cashews",
        facts: [
            "World's sixth-largest cashew producer",
            "Archipelago of 88 islands",
            "One of world's poorest countries"
        ],
        quiz: {
            question: "What nut is Guinea-Bissau known for?",
            options: ["Peanuts", "Almonds", "Cashews", "Walnuts"],
            answer: 2
        }
    },
    {
        name: "Kenya",
        flag: "🇰🇪",
        capital: "Nairobi",
        region: "East Africa",
        population: "53.8 million",
        language: "Swahili, English",
        currency: "Kenyan Shilling (KES)",
        lat: -0.02,
        lng: 37.91,
        tagline: "Magical Kenya",
        facts: [
            "Home of the Great Migration",
            "Mount Kenya is Africa's second-highest peak",
            "Birthplace of marathon champions"
        ],
        quiz: {
            question: "What animal migration occurs in Kenya?",
            options: ["Bird migration", "Great Migration", "Whale migration", "Butterfly migration"],
            answer: 1
        }
    },
    {
        name: "Lesotho",
        flag: "🇱🇸",
        capital: "Maseru",
        region: "Southern Africa",
        population: "2.1 million",
        language: "Sesotho, English",
        currency: "Lesotho Loti (LSL)",
        lat: -29.61,
        lng: 28.23,
        tagline: "Kingdom in the Sky",
        facts: [
            "Only country entirely above 1,000m",
            "Completely surrounded by South Africa",
            "Known as the '
