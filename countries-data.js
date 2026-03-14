// Complete dataset of all 195 countries
const countries = [
    // ASIA (49 countries)
    {
        name: "Afghanistan",
        flag: "🇦🇫",
        capital: "Kabul",
        region: "Central Asia",
        population: "38.9 million",
        language: "Dari, Pashto",
        currency: "Afghan Afghani (AFN)",
        lat: 33.9391,
        lng: 67.7100,
        tagline: "Heart of Asia",
        facts: [
            "Home to the ancient Bamiyan Buddha statues",
            "The Hindu Kush mountain range runs through it",
            "Known for its lapis lazuli gemstones"
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
        lat: 40.0691,
        lng: 45.0382,
        tagline: "Land of Noah",
        facts: [
            "First country to adopt Christianity as state religion (301 AD)",
            "Mount Ararat, where Noah's Ark landed, is visible from Armenia",
            "Home to the world's oldest winery (6,100 years old)"
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
        lat: 40.1431,
        lng: 47.5769,
        tagline: "Land of Fire",
        facts: [
            "Known as the 'Land of Fire' due to natural gas flames",
            "Baku hosted the first Formula 1 Grand Prix in 2016",
            "Home to mud volcanoes - about 400 of the world's 700"
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
        lat: 26.0667,
        lng: 50.5577,
        tagline: "Pearl of the Gulf",
        facts: [
            "An archipelago of 33 islands in the Persian Gulf",
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
        lat: 23.6850,
        lng: 90.3563,
        tagline: "Land of Rivers",
        facts: [
            "World's largest river delta - the Ganges-Brahmaputra Delta",
            "The Sundarbans is the largest mangrove forest in the world",
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
        lat: 27.5142,
        lng: 90.4336,
        tagline: "Land of the Thunder Dragon",
        facts: [
            "Measures success by Gross National Happiness, not GDP",
            "The only carbon-negative country in the world",
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
        lat: 4.5353,
        lng: 114.7277,
        tagline: "Abode of Peace",
        facts: [
            "One of the wealthiest nations due to oil and gas reserves",
            "No income tax for residents",
            "The Sultan's palace is the world's largest residential palace"
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
        lat: 12.5657,
        lng: 104.9910,
        tagline: "Kingdom of Wonder",
        facts: [
            "Angkor Wat is the largest religious monument in the world",
            "The Cambodian flag is the only one featuring a building",
            "Home to the endangered Irrawaddy dolphin"
        ],
        quiz: {
            question: "What famous temple is in Cambodia?",
            options: ["Taj Mahal", "Angkor Wat", "Borobudur", "Shwedagon Pagoda"],
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
        lat: 35.8617,
        lng: 104.1954,
        tagline: "The Middle Kingdom",
        facts: [
            "The Great Wall stretches over 21,000 kilometers",
            "Invented paper, printing, gunpowder, and the compass",
            "Has the world's largest high-speed rail network"
        ],
        quiz: {
            question: "How long is the Great Wall of China?",
            options: ["5,000 km", "10,000 km", "21,000 km", "50,000 km"],
            answer: 2
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
        lat: 35.1264,
        lng: 33.4299,
        tagline: "Island of Aphrodite",
        facts: [
            "Birthplace of Aphrodite, goddess of love",
            "Nicosia is the last divided capital in the world",
            "Has been inhabited for over 10,000 years"
        ],
        quiz: {
            question: "Which goddess was said to be born in Cyprus?",
            options: ["Athena", "Hera", "Aphrodite", "Artemis"],
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
        lat: 42.3154,
        lng: 43.3569,
        tagline: "Where Europe Meets Asia",
        facts: [
            "Birthplace of wine - 8,000 years of winemaking",
            "Has its own unique alphabet with 33 letters",
            "Stalin was born in Gori, Georgia"
        ],
        quiz: {
            question: "How old is Georgia's winemaking tradition?",
            options: ["2,000 years", "5,000 years", "8,000 years", "10,000 years"],
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
        lat: 20.5937,
        lng: 78.9629,
        tagline: "Incredible India",
        facts: [
            "World's largest democracy with 1.4 billion people",
            "Invented the number zero and the decimal system",
            "Has 22 official languages and over 19,500 dialects"
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
        lat: -0.7893,
        lng: 113.9213,
        tagline: "Wonderful Indonesia",
        facts: [
            "World's largest archipelago with over 17,000 islands",
            "Home to Komodo dragons, the largest lizards on Earth",
            "Has the world's largest Buddhist temple - Borobudur"
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
        lat: 32.4279,
        lng: 53.6880,
        tagline: "Land of the Aryans",
        facts: [
            "One of the world's oldest civilizations (over 7,000 years)",
            "Home to Persepolis, ancient capital of the Persian Empire",
            "Invented algebra and the concept of the hospital"
        ],
        quiz: {
            question: "What ancient capital is located in Iran?",
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
        lat: 33.2232,
        lng: 43.6793,
        tagline: "Cradle of Civilization",
        facts: [
            "Ancient Mesopotamia - birthplace of writing",
            "Home to the legendary Hanging Gardens of Babylon",
            "The world's first known author was Iraqi - Enheduanna"
        ],
        quiz: {
            question: "What was invented in ancient Iraq (Mesopotamia)?",
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
        currency: "Israeli New Shekel (ILS)",
        lat: 31.0461,
        lng: 34.8516,
        tagline: "The Holy Land",
        facts: [
            "Has more museums per capita than any other country",
            "Revived Hebrew, a 3,000-year-old language",
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
        lat: 36.2048,
        lng: 138.2529,
        tagline: "Land of the Rising Sun",
        facts: [
            "Has over 6,800 islands but most live on 4 main islands",
            "Tokyo is the world's most populous metropolitan area",
            "Has more than 1,500 earthquakes per year"
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
        lat: 30.5852,
        lng: 36.2384,
        tagline: "Kingdom of Time",
        facts: [
            "Petra, a UNESCO site, was carved into rose-red cliffs",
            "The Dead Sea is the lowest point on Earth",
            "Has been inhabited for over 90,000 years"
        ],
        quiz: {
            question: "What is the famous ancient city in Jordan?",
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
        lat: 48.0196,
        lng: 66.9237,
        tagline: "Heart of Eurasia",
        facts: [
            "World's largest landlocked country",
            "Baikonur Cosmodrome launched the first human to space",
            "Home to the singing sand dunes of Altyn-Emel"
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
        lat: 29.3117,
        lng: 47.4818,
        tagline: "Pearl of the Gulf",
        facts: [
            "Has one of the world's highest valued currencies",
            "No natural rivers or lakes - relies on desalination",
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
        lat: 41.2044,
        lng: 74.7661,
        tagline: "Land of Celestial Mountains",
        facts: [
            "93% of the country is mountainous",
            "Home to Lake Issyk-Kul, the world's second-largest alpine lake",
            "Eagle hunting is a traditional practice still alive today"
        ],
        quiz: {
            question: "What percentage of Kyrgyzstan is mountainous?",
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
        lat: 19.8563,
        lng: 102.4955,
        tagline: "Land of a Million Elephants",
        facts: [
            "The most bombed country per capita in history",
            "Home to the Plain of Jars - mysterious ancient stone jars",
            "The Mekong River forms most of its border with Thailand"
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
        lat: 33.8547,
        lng: 35.8623,
        tagline: "Paris of the Middle East",
        facts: [
            "The cedar tree on its flag has been a symbol for 5,000 years",
            "Byblos is one of the oldest continuously inhabited cities",
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
        lat: 4.2105,
        lng: 101.9758,
        tagline: "Truly Asia",
        facts: [
            "Petronas Twin Towers were the world's tallest from 1998-2004",
            "Home to the world's largest flower - Rafflesia",
            "Has one of the oldest rainforests in the world (130 million years)"
        ],
        quiz: {
            question: "What is the world's largest flower found in Malaysia?",
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
        lat: 3.2028,
        lng: 73.2207,
        tagline: "Sunny Side of Life",
        facts: [
            "World's lowest country - average height 1.5 meters above sea level",
            "Consists of 1,192 coral islands in 26 atolls",
            "Only country with a cabinet meeting held underwater"
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
        lat: 46.8625,
        lng: 103.8467,
        tagline: "Land of the Eternal Blue Sky",
        facts: [
            "Most sparsely populated country - 2 people per sq km",
            "Genghis Khan created the largest contiguous empire ever",
            "Nomadic herders still live in traditional gers (yurts)"
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
        lat: 21.9162,
        lng: 95.9560,
        tagline: "Golden Land",
        facts: [
            "Shwedagon Pagoda is covered with 60 tons of gold",
            "Home to over 2,000 ancient temples in Bagan",
            "One of the most ethnically diverse countries with 135 groups"
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
        lat: 28.3949,
        lng: 84.1240,
        tagline: "Roof of the World",
        facts: [
            "Home to Mount Everest (8,849m) - world's highest peak",
            "The only country with a non-rectangular flag",
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
        lat: 40.3399,
        lng: 127.5101,
        tagline: "Democratic People's Republic",
        facts: [
            "Uses its own calendar - Juche, starting from 1912",
            "Has the world's largest stadium - Rungrado 1st of May",
            "The DMZ is one of the most militarized borders"
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
        lat: 21.4735,
        lng: 55.9754,
        tagline: "Beauty Has an Address",
        facts: [
            "One of the oldest independent Arab states",
            "Frankincense has been traded here for 5,000 years",
            "Home to the Arabian Oryx, once extinct in the wild"
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
        lat: 30.3753,
        lng: 69.3451,
        tagline: "Land of the Pure",
        facts: [
            "K2 is the world's second-highest mountain",
            "Mohenjo-daro is a 4,500-year-old ancient city",
            "Has the world's highest paved international road - Karakoram Highway"
        ],
        quiz: {
            question: "What is K2's ranking among world mountains?",
            options: ["First", "Second", "Third", "Fourth"],
            answer: 1
        }
    },
    {
        name: "Palestine",
        flag: "🇵🇸",
        capital: "Ramallah",
        region: "Middle East",
        population: "5.1 million",
        language: "Arabic",
        currency: "Israeli Shekel, Jordanian Dinar",
        lat: 31.9522,
        lng: 35.2332,
        tagline: "Land of Olives",
        facts: [
            "Jericho is one of the oldest continuously inhabited cities",
            "Bethlehem is the birthplace of Jesus Christ",
            "Home to ancient olive trees over 2,000 years old"
        ],
        quiz: {
            question: "Which ancient city is in Palestine?",
            options: ["Damascus", "Jericho", "Cairo", "Amman"],
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
        lat: 12.8797,
        lng: 121.7740,
        tagline: "It's More Fun in the Philippines",
        facts: [
            "Archipelago of 7,641 islands",
            "Named after King Philip II of Spain",
            "Sent the first text message (SMS) in 1992"
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
        lat: 25.3548,
        lng: 51.1839,
        tagline: "Where Tradition Meets Future",
        facts: [
            "Richest country by GDP per capita",
            "Hosted FIFA World Cup 2022 - first in Middle East",
            "Al Jazeera news network is based here"
        ],
        quiz: {
            question: "What major sporting event did Qatar host in 2022?",
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
        lat: 23.8859,
        lng: 45.0792,
        tagline: "Heart of the Arab World",
        facts: [
            "Home to Mecca and Medina, Islam's holiest cities",
            "World's largest oil exporter",
            "Has no rivers or permanent lakes"
        ],
        quiz: {
            question: "Which holy city for Muslims is in Saudi Arabia?",
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
        lat: 1.3521,
        lng: 103.8198,
        tagline: "The Lion City",
        facts: [
            "One of only three city-states in the world",
            "Chewing gum is banned (with some exceptions)",
            "Has the world's first night zoo"
        ],
        quiz: {
            question: "What is Singapore's nickname?",
            options: ["The Tiger City", "The Lion City", "The Dragon City", "The Eagle City"],
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
        lat: 35.9078,
        lng: 127.7669,
        tagline: "Land of the Morning Calm",
        facts: [
            "Has the fastest internet speed in the world",
            "K-pop and K-dramas are global phenomena",
            "Invented the world's first metal printing type"
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
        lat: 7.8731,
        lng: 80.7718,
        tagline: "Pearl of the Indian Ocean",
        facts: [
            "World's largest exporter of cinnamon",
            "Sri Pada (Adam's Peak) has a sacred footprint revered by four religions",
            "Has one of the highest biodiversity densities in Asia"
        ],
        quiz: {
            question: "What spice is Sri Lanka the largest exporter of?",
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
        lat: 34.8021,
        lng: 38.9968,
        tagline: "Cradle of Civilizations",
        facts: [
            "Damascus is one of the oldest continuously inhabited cities",
            "Aleppo had the world's largest covered market (souk)",
            "Home to ancient Palmyra, once called 'Pearl of the Desert'"
        ],
        quiz: {
            question: "What is special about Damascus?",
            options: ["Largest city", "Oldest continuously inhabited city", "Tallest buildings", "Most museums"],
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
        lat: 23.6978,
        lng: 120.9605,
        tagline: "Heart of Asia",
        facts: [
            "Makes 90% of the world's most advanced semiconductors",
            "Has more 7-Elevens per capita than any other country",
            "Taipei 101 was the world's tallest building (2004-2010)"
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
        lat: 38.8610,
        lng: 71.2761,
        tagline: "Roof of the World",
        facts: [
            "93% of the country is mountainous",
            "Has the world's tallest dam - Nurek Dam (300m)",
            "The Pamir Highway is one of the world's highest roads"
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
        lat: 15.8700,
        lng: 100.9925,
        tagline: "Land of Smiles",
        facts: [
            "Never been colonized by a European power",
            "Bangkok's full ceremonial name has 169 characters",
            "Home to the world's largest solid gold Buddha"
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
        lat: -8.8742,
        lng: 125.7275,
        tagline: "Rising Nation",
        facts: [
            "One of the youngest countries - independent in 2002",
            "First new sovereign state of the 21st century",
            "One of only two predominantly Catholic nations in Asia"
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
        lat: 38.9637,
        lng: 35.2433,
        tagline: "Where Continents Meet",
        facts: [
            "Istanbul spans two continents - Europe and Asia",
            "Tulips were introduced to Europe from Turkey",
            "Santa Claus (St. Nicholas) was born in Patara, Turkey"
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
        lat: 38.9697,
        lng: 59.5563,
        tagline: "Land of Neutrality",
        facts: [
            "The Darvaza gas crater has been burning for 50+ years",
            "Has the world's largest indoor Ferris wheel",
            "Ashgabat holds the record for most white marble buildings"
        ],
        quiz: {
            question: "What has been burning for 50+ years in Turkmenistan?",
            options: ["Volcano", "Oil field", "Darvaza gas crater", "Forest"],
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
        lat: 23.4241,
        lng: 53.8478,
        tagline: "Spirit of the Union",
        facts: [
            "Burj Khalifa is the world's tallest building (828m)",
            "Only 11% of the population are Emiratis",
            "Has the world's first 7-star hotel - Burj Al Arab"
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
        lat: 41.3775,
        lng: 64.5853,
        tagline: "Heart of the Silk Road",
        facts: [
            "Samarkand was a major Silk Road trading center",
            "Has the oldest Quran in the world (Samarkand Kufic Quran)",
            "Registan Square is one of the world's most magnificent plazas"
        ],
        quiz: {
            question: "What ancient trade route passed through Uzbekistan?",
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
        lat: 14.0583,
        lng: 108.2772,
        tagline: "Timeless Charm",
        facts: [
            "World's second-largest coffee exporter",
            "Ha Long Bay has nearly 2,000 limestone islands",
            "Has the world's largest cave - Son Doong"
        ],
        quiz: {
            question: "What is Vietnam's ranking in coffee export?",
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
        lat: 15.5527,
        lng: 48.5164,
        tagline: "Arabia Felix",
        facts: [
            "Sana'a is one of the world's oldest continuously inhabited cities",
            "Socotra Island has plants found nowhere else on Earth",
            "Coffee was first cultivated here and exported from Mocha port"
        ],
        quiz: {
            question: "What beverage was first cultivated in Yemen?",
            options: ["Tea", "Coffee", "Cocoa", "Wine"],
            answer: 1
        }
    },

    // EUROPE (44 countries)
    {
        name: "Albania",
        flag: "🇦🇱",
        capital: "Tirana",
        region: "Southern Europe",
        population: "2.9 million",
        language: "Albanian",
        currency: "Albanian Lek (ALL)",
        lat: 41.1533,
        lng: 20.1683,
        tagline: "Land of the Eagles",
        facts: [
            "Has more bunkers (750,000) than any country per capita",
            "Mother Teresa was of Albanian origin",
            "One of Europe's last communist countries until 1991"
        ],
        quiz: {
            question: "What structures does Albania have more of than any country?",
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
        lat: 42.5063,
        lng: 1.5218,
        tagline: "The Pyrenean Country",
        facts: [
            "Highest capital city in Europe (1,023m altitude)",
            "Co-ruled by France's president and a Spanish bishop",
            "No airport, railway, or military"
        ],
        quiz: {
            question: "What is unique about Andorra's government?",
            options: ["Has no leader", "Co-ruled by two countries", "Direct democracy", "Monarchy"],
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
        lat: 47.5162,
        lng: 14.5501,
        tagline: "Land of Music",
        facts: [
            "Birthplace of Mozart, Strauss, and Freud",
            "Vienna has been ranked the world's most livable city",
            "The world's oldest zoo is in Vienna (1752)"
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
        lat: 53.7098,
        lng: 27.9534,
        tagline: "Land of Lakes",
        facts: [
            "Has Europe's largest remaining primeval forest (Białowieża)",
            "Home to European bison, once extinct in the wild",
            "40% of the country is covered by forests"
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
        lat: 50.5039,
        lng: 4.4699,
        tagline: "Heart of Europe",
        facts: [
            "Headquarters of the European Union and NATO",
            "Invented the saxophone, the Belgian waffle, and French fries",
            "Has the world's longest tram line (68 km)"
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
        lat: 43.9159,
        lng: 17.6791,
        tagline: "Heart-Shaped Land",
        facts: [
            "Sarajevo hosted the 1984 Winter Olympics",
            "Has one of Europe's last primeval forests",
            "The Old Bridge of Mostar is a UNESCO World Heritage Site"
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
        lat: 42.7339,
        lng: 25.4858,
        tagline: "Land of Roses",
        facts: [
            "Produces 85% of the world's rose oil",
            "Invented the Cyrillic alphabet",
            "Nodding means 'no' and shaking head means 'yes'"
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
        lat: 45.1,
        lng: 15.2,
        tagline: "Full of Life",
        facts: [
            "Dubrovnik was used as King's Landing in Game of Thrones",
            "Invented the necktie (cravat)",
            "Has over 1,200 islands along its coast"
        ],
        quiz: {
            question: "What clothing item did Croatia invent?",
            options: ["Hat", "Necktie", "Belt", "Scarf"],
            answer: 1
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
        lat: 49.8175,
        lng: 15.4730,
        tagline: "Land of Stories",
        facts: [
            "Has the highest beer consumption per capita in the world",
            "Prague Castle is the largest ancient castle complex",
            "Invented soft contact lenses"
        ],
        quiz: {
            question: "What does Czech Republic consume most per capita?",
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
        lat: 56.2639,
        lng: 9.5018,
        tagline: "Land of Fairy Tales",
        facts: [
            "Home of LEGO - the world's most powerful brand",
            "Hans Christian Andersen wrote the Little Mermaid here",
            "Has the world's oldest flag still in use"
        ],
        quiz: {
            question: "What famous toy brand is from Denmark?",
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
        lat: 58.5953,
        lng: 25.0136,
        tagline: "Digital Society",
        facts: [
            "First country to offer e-residency to non-citizens",
            "Skype was invented here",
            "99% of government services are online"
        ],
        quiz: {
            question: "What communication app was invented in Estonia?",
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
        lat: 61.9241,
        lng: 25.7482,
        tagline: "Land of a Thousand Lakes",
        facts: [
            "Has 187,888 lakes and 179,584 islands",
            "Home of Santa Claus (official residence in Rovaniemi)",
            "Ranked happiest country in the world multiple times"
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
        lat: 46.2276,
        lng: 2.2137,
        tagline: "L'Art de Vivre",
        facts: [
            "Most visited country in the world (89 million tourists/year)",
            "The Louvre is the world's largest art museum",
            "Has more time zones than any other country (12)"
        ],
        quiz: {
            question: "How many time zones does France have?",
            options: ["1", "6", "12", "24"],
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
        lat: 51.1657,
        lng: 10.4515,
        tagline: "Land of Ideas",
        facts: [
            "Has over 20,000 castles",
            "Invented the printing press, automobile, and aspirin",
            "Oktoberfest in Munich attracts 6 million visitors annually"
        ],
        quiz: {
            question: "What did Johannes Gutenberg invent in Germany?",
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
        lat: 39.0742,
        lng: 21.8243,
        tagline: "Birthplace of Democracy",
        facts: [
            "Birthplace of democracy, philosophy, and the Olympic Games",
            "Has more archaeological museums than any other country",
            "The Greek language has been spoken for 3,400 years"
        ],
        quiz: {
            question: "What was invented in ancient Greece?",
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
        lat: 47.1625,
        lng: 19.5033,
        tagline: "Pearl of the Danube",
        facts: [
            "Invented the Rubik's Cube, ballpoint pen, and holography",
            "Budapest has the world's second-largest synagogue",
            "Hungarian is one of the most difficult languages to learn"
        ],
        quiz: {
            question: "What famous puzzle was invented in Hungary?",
            options: ["Sudoku", "Rubik's Cube", "Jigsaw puzzle", "Crossword"],
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
        lat: 64.9631,
        lng: -19.0208,
        tagline: "Land of Fire and Ice",
        facts: [
            "Has no mosquitoes",
            "The world's oldest parliament (Althing) was founded in 930 AD",
            "Nearly 100% of energy comes from renewable sources"
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
        lat: 53.1424,
        lng: -7.6921,
        tagline: "The Emerald Isle",
        facts: [
            "Halloween originated from the ancient Celtic festival Samhain",
            "Has no snakes - legend says St. Patrick drove them out",
            "The harp is the national symbol, not the shamrock"
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
        lat: 41.8719,
        lng: 12.5674,
        tagline: "La Dolce Vita",
        facts: [
            "Has 58 UNESCO World Heritage Sites - most in the world",
            "Invented pizza, pasta, espresso, and gelato",
            "The Vatican City is an independent country within Rome"
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
        lat: 56.8796,
        lng: 24.6032,
        tagline: "Land That Sings",
        facts: [
            "Riga has the largest collection of Art Nouveau buildings",
            "The world's widest waterfall (Venta Rapid) is here",
            "Has one of the fastest internet speeds in Europe"
        ],
        quiz: {
            question: "What architectural style is Riga famous for?",
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
        lat: 47.1660,
        lng: 9.5554,
        tagline: "The Small Country with Big Ideas",
        facts: [
            "Sixth-smallest country in the world",
            "More registered companies than citizens",
            "Last country in Europe to give women the vote (1984)"
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
        lat: 55.1694,
        lng: 23.8813,
        tagline: "Land of Storks",
        facts: [
            "Has the largest old town in Eastern Europe (Vilnius)",
            "Basketball is the national sport - they've won Olympic medals",
            "The geographic center of Europe is near Vilnius"
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
        lat: 49.8153,
        lng: 6.1296,
        tagline: "Let's Make It Happen",
        facts: [
            "Only Grand Duchy in the world",
            "Highest minimum wage in the European Union",
            "Has three official languages"
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
        lat: 35.9375,
        lng: 14.3754,
        tagline: "Heart of the Mediterranean",
        facts: [
            "Smallest EU member state by population",
            "Has megalithic temples older than the pyramids",
            "Uses left-hand traffic, like the UK"
        ],
        quiz: {
            question: "What ancient structures in Malta predate the pyramids?",
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
        lat: 47.4116,
        lng: 28.3699,
        tagline: "Discover the Routes of Life",
        facts: [
            "Has the world's largest wine cellar (Mileștii Mici)",
            "Wine accounts for 25% of exports",
            "One of the least visited countries in Europe"
        ],
        quiz: {
            question: "What is Moldova famous for producing?",
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
        lat: 43.7384,
        lng: 7.4246,
        tagline: "The Diamond of the Riviera",
        facts: [
            "World's second-smallest country (2.02 km²)",
            "Has the highest GDP per capita in the world",
            "No income tax for residents"
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
        lat: 42.7087,
        lng: 19.3744,
        tagline: "Wild Beauty",
        facts: [
            "Name means 'Black Mountain' in Venetian",
            "Has Europe's deepest canyon (Tara River Canyon)",
            "One of the youngest countries - independent in 2006"
        ],
        quiz: {
            question: "What does 'Montenegro' mean?",
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
        lat: 52.1326,
        lng: 5.2913,
        tagline: "Land Below Sea Level",
        facts: [
            "26% of the country is below sea level",
            "Has more bicycles than people (22.8 million)",
            "World's tallest people on average"
        ],
        quiz: {
            question: "What percentage of Netherlands is below sea level?",
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
        lat: 41.5124,
        lng: 21.4073,
        tagline: "Land of Natural Beauty",
        facts: [
            "Named after Alexander the Great's ancient Macedonia",
            "Lake Ohrid is one of Europe's oldest lakes (3 million years)",
            "Mother Teresa was born in Skopje"
        ],
        quiz: {
            question: "Who was born in Skopje, North Macedonia?",
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
        lat: 60.4720,
        lng: 8.4689,
        tagline: "Powered by Nature",
        facts: [
            "Has over 1,000 fjords",
            "Nobel Peace Prize is awarded in Oslo",
            "Home to the Northern Lights (Aurora Borealis)"
        ],
        quiz: {
            question: "What natural phenomenon can be seen in Norway?",
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
        lat: 51.9194,
        lng: 19.1451,
        tagline: "Move Your Imagination",
        facts: [
            "Marie Curie (Maria Skłodowska) was born here",
            "Has Europe's last primeval forest (Białowieża)",
            "Invented the world's first oil lamp and kerosene"
        ],
        quiz: {
            question: "Which famous scientist was born in Poland?",
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
        lat: 39.3999,
        lng: -8.2245,
        tagline: "Europe's Best Kept Secret",
        facts: [
            "Has the oldest bookstore in the world (Livraria Bertrand, 1732)",
            "Portuguese is spoken by 250 million people worldwide",
            "The longest bridge in Europe is Vasco da Gama Bridge (17 km)"
        ],
        quiz: {
            question: "How many people speak Portuguese worldwide?",
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
        lat: 45.9432,
        lng: 24.9668,
        tagline: "Land of Dracula",
        facts: [
            "Home of the Dracula legend (Bran Castle)",
            "Has the heaviest building in the world (Palace of Parliament)",
            "The Danube Delta is Europe's best-preserved river delta"
        ],
        quiz: {
            question: "What famous legend is associated with Romania?",
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
        lat: 61.5240,
        lng: 105.3188,
        tagline: "Discover Russia",
        facts: [
            "Largest country by area (17.1 million km²)",
            "Lake Baikal contains 20% of the world's fresh water",
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
        lat: 43.9424,
        lng: 12.4578,
        tagline: "Ancient Land of Liberty",
        facts: [
            "World's oldest republic (founded 301 AD)",
            "Third-smallest country in Europe",
            "Completely surrounded by Italy"
        ],
        quiz: {
            question: "San Marino is the world's oldest what?",
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
        lat: 44.0165,
        lng: 21.0059,
        tagline: "Land of Heart",
        facts: [
            "Nikola Tesla was born here (in what is now Croatia)",
            "Belgrade is one of the oldest cities in Europe",
            "Has the most war ruins from recent conflicts"
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
        lat: 48.6690,
        lng: 19.6990,
        tagline: "Little Big Country",
        facts: [
            "Has more castles and châteaux per capita than any other country",
            "Andy Warhol's parents were Slovak",
            "The world's highest wooden altar is in Levoča"
        ],
        quiz: {
            question: "What does Slovakia have more of per capita?",
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
        lat: 46.1512,
        lng: 14.9955,
        tagline: "I Feel Slovenia",
        facts: [
            "Over 60% of the country is covered by forest",
            "Has the only country name with 'love' in it",
            "Home to the world's oldest wooden wheel (5,150 years old)"
        ],
        quiz: {
            question: "What word is hidden in 'Slovenia'?",
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
        lat: 40.4637,
        lng: -3.7492,
        tagline: "Everything Under the Sun",
        facts: [
            "Spanish is spoken by 500 million people worldwide",
            "Has the world's oldest restaurant (Sobrino de Botín, 1725)",
            "La Tomatina festival uses 150,000 tomatoes annually"
        ],
        quiz: {
            question: "How many people speak Spanish worldwide?",
            options: ["100 million", "250 million", "500 million", "750 million"],
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
        lat: 60.1282,
        lng: 18.6435,
        tagline: "Land of the Midnight Sun",
        facts: [
            "Has the world's first ice hotel (ICEHOTEL)",
            "IKEA, Spotify, and Minecraft are Swedish inventions",
            "70% of the country is covered by forests"
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
        lat: 46.8182,
        lng: 8.2275,
        tagline: "Get Natural",
        facts: [
            "Has four official languages",
            "World's longest rail tunnel (Gotthard Base Tunnel - 57 km)",
            "Has been neutral since 1815"
        ],
        quiz: {
            question: "How many official languages does Switzerland have?",
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
        lat: 48.3794,
        lng: 31.1656,
        tagline: "Freedom is Our Religion",
        facts: [
            "Europe's largest country entirely within the continent",
            "Kyiv is one of the oldest cities in Eastern Europe (founded 482 AD)",
            "Has the deepest metro station in the world (Arsenalna - 105.5m)"
        ],
        quiz: {
            question: "What is Ukraine's ranking by size in Europe?",
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
        lat: 55.3781,
        lng: -3.4360,
        tagline: "Heritage and Innovation",
        facts: [
            "The British Empire was the largest in history",
            "Invented the World Wide Web, telephone, and television",
            "Big Ben is actually the name of the bell, not the tower"
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
        lat: 41.9029,
        lng: 12.4534,
        tagline: "Center of the Catholic World",
        facts: [
            "World's smallest independent state (0.44 km²)",
            "Has its own post office, radio station, and bank",
            "St. Peter's Basilica is the largest church in the world"
        ],
        quiz: {
            question: "What is Vatican City's size?",
            options: ["0.44 km²", "1 km²", "5 km²", "10 km²"],
            answer: 0
        }
    },

    // AFRICA (54 countries)
    {
        name: "Algeria",
        flag: "🇩🇿",
        capital: "Algiers",
        region: "North Africa",
        population: "44.6 million",
        language: "Arabic, Berber",
        currency: "Algerian Dinar (DZD)",
        lat: 28.0339,
        lng: 1.6596,
        tagline: "Land of Contrasts",
        facts: [
            "Largest country in Africa by area",
            "90% of the country is Sahara Desert",
            "Has 7 UNESCO World Heritage Sites"
        ],
        quiz: {
            question: "What percentage of Algeria is desert?",
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
        lat: -11.2027,
        lng: 17.8739,
        tagline: "Africa's Giant",
        facts: [
            "Second-largest Portuguese-speaking country",
            "Has Africa's largest oil reserves",
            "Luanda is one of the most expensive cities in the world"
        ],
        quiz: {
            question: "What natural resource is Angola rich in?",
            options: ["Gold", "Oil", "Diamonds", "All of the above"],
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
        currency: "West African CFA Franc (XOF)",
        lat: 9.3077,
        lng: 2.3158,
        tagline: "Birthplace of Voodoo",
        facts: [
            "Voodoo originated here and is an official religion",
            "Once the powerful Kingdom of Dahomey",
            "Home to the Royal Palaces of Abomey UNESCO site"
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
        lat: -22.3285,
        lng: 24.6849,
        tagline: "Pride of Africa",
        facts: [
            "World's largest diamond producer by value",
            "Okavango Delta is the world's largest inland delta",
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
        currency: "West African CFA Franc (XOF)",
        lat: 12.2383,
        lng: -1.5616,
        tagline: "Land of Upright People",
        facts: [
            "Name means 'Land of Honest People'",
            "Hosts FESPACO, Africa's largest film festival",
            "Has over 60 different ethnic groups"
        ],
        quiz: {
            question: "What does 'Burkina Faso' mean?",
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
        lat: -3.3731,
        lng: 29.9189,
        tagline: "Heart of Africa",
        facts: [
            "One of the smallest and most densely populated countries in Africa",
            "Drumming is a sacred tradition",
            "Shares Lake Tanganyika with 3 other countries"
        ],
        quiz: {
            question: "What is a sacred tradition in Burundi?",
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
        currency: "Cape Verdean Escudo (CVE)",
        lat: 16.5388,
        lng: -23.0418,
        tagline: "No Stress",
        facts: [
            "An archipelago of 10 volcanic islands",
            "Has one of the most stable democracies in Africa",
            "Cesária Évora, the 'barefoot diva,' was from here"
        ],
        quiz: {
            question: "How many islands make up Cabo Verde?",
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
        currency: "Central African CFA Franc (XAF)",
        lat: 7.3697,
        lng: 12.3547,
        tagline: "Africa in Miniature",
        facts: [
            "Called 'Africa in miniature' due to its geographic diversity",
            "Home to over 250 languages",
            "Mount Cameroon is the highest peak in West Africa"
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
        currency: "Central African CFA Franc (XAF)",
        lat: 6.6111,
        lng: 20.9394,
        tagline: "Land of the Forest Elephants",
        facts: [
            "One of the world's least developed countries",
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
        currency: "Central African CFA Franc (XAF)",
        lat: 15.4542,
        lng: 18.7322,
        tagline: "Land of Contrasts",
        facts: [
            "Lake Chad has shrunk 90% since the 1960s",
            "Contains the oldest human skull ever found (7 million years)",
            "Has the world's largest collection of rock art"
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
        lat: -11.6455,
        lng: 43.3333,
        tagline: "Islands of the Moon",
        facts: [
            "World's largest producer of ylang-ylang (perfume ingredient)",
            "One of the world's top producers of vanilla",
            "Volcanic archipelago in the Indian Ocean"
        ],
        quiz: {
            question: "What perfume ingredient does Comoros produce?",
            options: ["Rose oil", "Ylang-ylang", "Lavender", "Jasmine"],
            answer: 1
        }
    },
    {
        name: "Democratic Republic of the Congo",
        flag: "🇨🇩",
        capital: "Kinshasa",
        region: "Central Africa",
        population: "89.6 million",
        language: "French",
        currency: "Congolese Franc (CDF)",
        lat: -4.0
