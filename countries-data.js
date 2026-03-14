// ==================== ALL 195 COUNTRIES DATABASE ====================
// Part 1: Countries 1-100

const countries = [
    // 1. Afghanistan
    {
        name: "Afghanistan",
        flag: "🇦🇫",
        capital: "Kabul",
        region: "South Asia",
        population: "40 million",
        tagline: "The heart of Asia.",
        facts: [
            "Home to the Hindu Kush mountain range",
            "One of the world's oldest civilizations",
            "Landlocked country bordered by 6 nations"
        ],
        quiz: {
            question: "What mountain range runs through Afghanistan?",
            options: ["Himalayas", "Hindu Kush", "Alps", "Andes"],
            answer: 1
        }
    },
    // 2. Albania
    {
        name: "Albania",
        flag: "🇦🇱",
        capital: "Tirana",
        region: "Southern Europe",
        population: "2.8 million",
        tagline: "Land of the Eagles.",
        facts: [
            "Only country with a double-headed eagle on its flag",
            "Over 750,000 bunkers built during communist era",
            "Home to one of Europe's oldest lakes - Lake Ohrid"
        ],
        quiz: {
            question: "What animal appears on Albania's flag?",
            options: ["Lion", "Bear", "Eagle", "Wolf"],
            answer: 2
        }
    },
    // 3. Algeria
    {
        name: "Algeria",
        flag: "🇩🇿",
        capital: "Algiers",
        region: "North Africa",
        population: "45 million",
        tagline: "Africa's largest country.",
        facts: [
            "Largest country in Africa by area",
            "90% of the land is covered by Sahara Desert",
            "Has 7 UNESCO World Heritage Sites"
        ],
        quiz: {
            question: "What percentage of Algeria is covered by desert?",
            options: ["50%", "70%", "90%", "30%"],
            answer: 2
        }
    },
    // 4. Andorra
    {
        name: "Andorra",
        flag: "🇦🇩",
        capital: "Andorra la Vella",
        region: "Southern Europe",
        population: "77,000",
        tagline: "The Pyrenean microstate.",
        facts: [
            "One of the world's smallest countries",
            "Has no airport, railway, or seaport",
            "Highest capital city in Europe by elevation"
        ],
        quiz: {
            question: "Which mountains is Andorra located in?",
            options: ["Alps", "Pyrenees", "Carpathians", "Apennines"],
            answer: 1
        }
    },
    // 5. Angola
    {
        name: "Angola",
        flag: "🇦🇴",
        capital: "Luanda",
        region: "Southern Africa",
        population: "34 million",
        tagline: "Rich in oil and diamonds.",
        facts: [
            "Second-largest oil producer in Africa",
            "Portuguese is the official language",
            "Home to the giant sable antelope"
        ],
        quiz: {
            question: "What is the official language of Angola?",
            options: ["French", "English", "Portuguese", "Spanish"],
            answer: 2
        }
    },
    // 6. Antigua and Barbuda
    {
        name: "Antigua and Barbuda",
        flag: "🇦🇬",
        capital: "St. John's",
        region: "Caribbean",
        population: "100,000",
        tagline: "Land of 365 beaches.",
        facts: [
            "Claims to have a beach for every day of the year",
            "Gained independence from UK in 1981",
            "Cricket is the national sport"
        ],
        quiz: {
            question: "How many beaches does Antigua claim to have?",
            options: ["100", "200", "365", "500"],
            answer: 2
        }
    },
    // 7. Argentina
    {
        name: "Argentina",
        flag: "🇦🇷",
        capital: "Buenos Aires",
        region: "South America",
        population: "45 million",
        tagline: "Land of silver and tango.",
        facts: [
            "Second largest country in South America",
            "Birthplace of Tango dance",
            "Has the widest avenue in the world - 9 de Julio"
        ],
        quiz: {
            question: "What dance originated in Argentina?",
            options: ["Salsa", "Tango", "Flamenco", "Samba"],
            answer: 1
        }
    },
    // 8. Armenia
    {
        name: "Armenia",
        flag: "🇦🇲",
        capital: "Yerevan",
        region: "Western Asia",
        population: "3 million",
        tagline: "The first Christian nation.",
        facts: [
            "First country to adopt Christianity as state religion (301 AD)",
            "Home to the world's oldest winery (6,000 years old)",
            "Mount Ararat is its national symbol"
        ],
        quiz: {
            question: "What was Armenia the first country to adopt?",
            options: ["Democracy", "Christianity", "Islam", "Buddhism"],
            answer: 1
        }
    },
    // 9. Australia
    {
        name: "Australia",
        flag: "🇦🇺",
        capital: "Canberra",
        region: "Oceania",
        population: "26 million",
        tagline: "The land down under.",
        facts: [
            "Only country that is also a continent",
            "Home to the Great Barrier Reef",
            "Has over 10,000 beaches"
        ],
        quiz: {
            question: "What is the capital of Australia?",
            options: ["Sydney", "Melbourne", "Canberra", "Perth"],
            answer: 2
        }
    },
    // 10. Austria
    {
        name: "Austria",
        flag: "🇦🇹",
        capital: "Vienna",
        region: "Central Europe",
        population: "9 million",
        tagline: "The heart of classical music.",
        facts: [
            "Birthplace of Mozart and Strauss",
            "One of the world's greenest countries",
            "The oldest zoo in the world is in Vienna"
        ],
        quiz: {
            question: "Which famous composer was born in Austria?",
            options: ["Beethoven", "Mozart", "Bach", "Chopin"],
            answer: 1
        }
    },
    // 11. Azerbaijan
    {
        name: "Azerbaijan",
        flag: "🇦🇿",
        capital: "Baku",
        region: "Western Asia",
        population: "10 million",
        tagline: "Land of fire.",
        facts: [
            "Known for eternal flames from natural gas",
            "First Muslim-majority democratic republic",
            "Has more mud volcanoes than any other country"
        ],
        quiz: {
            question: "Why is Azerbaijan called 'Land of Fire'?",
            options: ["Hot climate", "Natural gas flames", "Red deserts", "Volcanic activity"],
            answer: 1
        }
    },
    // 12. Bahamas
    {
        name: "Bahamas",
        flag: "🇧🇸",
        capital: "Nassau",
        region: "Caribbean",
        population: "400,000",
        tagline: "It's better in the Bahamas.",
        facts: [
            "Archipelago of over 700 islands",
            "Famous for swimming pigs of Exuma",
            "Has the third largest barrier reef in the world"
        ],
        quiz: {
            question: "What unusual animals swim in the Bahamas?",
            options: ["Dolphins", "Pigs", "Horses", "Dogs"],
            answer: 1
        }
    },
    // 13. Bahrain
    {
        name: "Bahrain",
        flag: "🇧🇭",
        capital: "Manama",
        region: "Middle East",
        population: "1.5 million",
        tagline: "Pearl of the Gulf.",
        facts: [
            "First country in the Gulf to discover oil",
            "Connected to Saudi Arabia by a 25km bridge",
            "Island kingdom in the Persian Gulf"
        ],
        quiz: {
            question: "What was Bahrain historically famous for?",
            options: ["Gold", "Pearls", "Spices", "Silk"],
            answer: 1
        }
    },
    // 14. Bangladesh
    {
        name: "Bangladesh",
        flag: "🇧🇩",
        capital: "Dhaka",
        region: "South Asia",
        population: "170 million",
        tagline: "Land of rivers.",
        facts: [
            "Has over 700 rivers flowing through it",
            "Home to the world's largest mangrove forest - Sundarbans",
            "World's second-largest garment exporter"
        ],
        quiz: {
            question: "What natural feature is Bangladesh famous for?",
            options: ["Mountains", "Rivers", "Deserts", "Volcanoes"],
            answer: 1
        }
    },
    // 15. Barbados
    {
        name: "Barbados",
        flag: "🇧🇧",
        capital: "Bridgetown",
        region: "Caribbean",
        population: "290,000",
        tagline: "Gem of the Caribbean.",
        facts: [
            "Birthplace of rum",
            "Pop star Rihanna was born here",
            "Became a republic in 2021"
        ],
        quiz: {
            question: "Which pop star was born in Barbados?",
            options: ["Beyoncé", "Rihanna", "Shakira", "Adele"],
            answer: 1
        }
    },
    // 16. Belarus
    {
        name: "Belarus",
        flag: "🇧🇾",
        capital: "Minsk",
        region: "Eastern Europe",
        population: "9.3 million",
        tagline: "The white Russia.",
        facts: [
            "40% of the country is covered by forests",
            "Has Europe's largest primeval forest - Białowieża",
            "Landlocked country with 11,000 lakes"
        ],
        quiz: {
            question: "What covers 40% of Belarus?",
            options: ["Lakes", "Forests", "Mountains", "Farms"],
            answer: 1
        }
    },
    // 17. Belgium
    {
        name: "Belgium",
        flag: "🇧🇪",
        capital: "Brussels",
        region: "Western Europe",
        population: "11.5 million",
        tagline: "Heart of Europe.",
        facts: [
            "Famous for chocolate, waffles, and beer",
            "Home to EU and NATO headquarters",
            "Has three official languages"
        ],
        quiz: {
            question: "What organization has its headquarters in Belgium?",
            options: ["UN", "EU", "WHO", "IMF"],
            answer: 1
        }
    },
    // 18. Belize
    {
        name: "Belize",
        flag: "🇧🇿",
        capital: "Belmopan",
        region: "Central America",
        population: "400,000",
        tagline: "Mother Nature's best kept secret.",
        facts: [
            "Only English-speaking country in Central America",
            "Home to the Great Blue Hole",
            "Has ancient Mayan ruins"
        ],
        quiz: {
            question: "What language is official in Belize?",
            options: ["Spanish", "English", "French", "Portuguese"],
            answer: 1
        }
    },
    // 19. Benin
    {
        name: "Benin",
        flag: "🇧🇯",
        capital: "Porto-Novo",
        region: "West Africa",
        population: "13 million",
        tagline: "Birthplace of Voodoo.",
        facts: [
            "Voodoo religion originated here",
            "Former Kingdom of Dahomey",
            "Has the Door of No Return slave memorial"
        ],
        quiz: {
            question: "What religion originated in Benin?",
            options: ["Buddhism", "Voodoo", "Hinduism", "Shinto"],
            answer: 1
        }
    },
    // 20. Bhutan
    {
        name: "Bhutan",
        flag: "🇧🇹",
        capital: "Thimphu",
        region: "South Asia",
        population: "780,000",
        tagline: "Land of the Thunder Dragon.",
        facts: [
            "Measures Gross National Happiness instead of GDP",
            "Only carbon-negative country in the world",
            "Television was introduced only in 1999"
        ],
        quiz: {
            question: "What does Bhutan measure instead of GDP?",
            options: ["Wealth", "Happiness", "Health", "Education"],
            answer: 1
        }
    },
    // 21. Bolivia
    {
        name: "Bolivia",
        flag: "🇧🇴",
        capital: "Sucre",
        region: "South America",
        population: "12 million",
        tagline: "The Tibet of the Americas.",
        facts: [
            "Has two capitals - Sucre and La Paz",
            "Home to the world's largest salt flat - Salar de Uyuni",
            "Has 37 official languages"
        ],
        quiz: {
            question: "What is the world's largest salt flat in Bolivia called?",
            options: ["Uyuni", "Bonneville", "Makgadikgadi", "Atacama"],
            answer: 0
        }
    },
    // 22. Bosnia and Herzegovina
    {
        name: "Bosnia and Herzegovina",
        flag: "🇧🇦",
        capital: "Sarajevo",
        region: "Southeast Europe",
        population: "3.2 million",
        tagline: "Heart-shaped land.",
        facts: [
            "World War I started here with assassination of Archduke Franz Ferdinand",
            "Has a heart-shaped country outline",
            "Three presidents rotate leadership every 8 months"
        ],
        quiz: {
            question: "What major war started in Sarajevo?",
            options: ["WWII", "WWI", "Korean War", "Cold War"],
            answer: 1
        }
    },
    // 23. Botswana
    {
        name: "Botswana",
        flag: "🇧🇼",
        capital: "Gaborone",
        region: "Southern Africa",
        population: "2.4 million",
        tagline: "Pride of Africa.",
        facts: [
            "Home to the Okavango Delta",
            "One of Africa's most stable democracies",
            "Diamonds are the major export"
        ],
        quiz: {
            question: "What famous delta is in Botswana?",
            options: ["Nile", "Okavango", "Mississippi", "Ganges"],
            answer: 1
        }
    },
    // 24. Brazil
    {
        name: "Brazil",
        flag: "🇧🇷",
        capital: "Brasília",
        region: "South America",
        population: "215 million",
        tagline: "The land of samba and soccer.",
        facts: [
            "Largest country in South America",
            "Contains 60% of the Amazon Rainforest",
            "Has won the FIFA World Cup 5 times - more than any other country"
        ],
        quiz: {
            question: "How many FIFA World Cups has Brazil won?",
            options: ["3", "4", "5", "6"],
            answer: 2
        }
    },
    // 25. Brunei
    {
        name: "Brunei",
        flag: "🇧🇳",
        capital: "Bandar Seri Begawan",
        region: "Southeast Asia",
        population: "440,000",
        tagline: "The abode of peace.",
        facts: [
            "Sultan is one of the world's richest people",
            "Citizens pay no income tax",
            "Oil and gas make up 90% of exports"
        ],
        quiz: {
            question: "What natural resource made Brunei wealthy?",
            options: ["Gold", "Oil", "Diamonds", "Coal"],
            answer: 1
        }
    },
    // 26. Bulgaria
    {
        name: "Bulgaria",
        flag: "🇧🇬",
        capital: "Sofia",
        region: "Southeast Europe",
        population: "6.9 million",
        tagline: "Land of roses.",
        facts: [
            "Produces 70% of the world's rose oil",
            "Home to the oldest gold treasure ever found",
            "Shaking head means 'yes', nodding means 'no'"
        ],
        quiz: {
            question: "What gesture means 'no' in Bulgaria?",
            options: ["Shaking head", "Nodding", "Waving", "Thumbs up"],
            answer: 1
        }
    },
    // 27. Burkina Faso
    {
        name: "Burkina Faso",
        flag: "🇧🇫",
        capital: "Ouagadougou",
        region: "West Africa",
        population: "22 million",
        tagline: "Land of honest people.",
        facts: [
            "Name means 'Land of Incorruptible People'",
            "Hosts FESPACO - Africa's largest film festival",
            "Landlocked country in West Africa"
        ],
        quiz: {
            question: "What does 'Burkina Faso' mean?",
            options: ["Land of Lions", "Land of Honest People", "Land of Rivers", "Land of Mountains"],
            answer: 1
        }
    },
    // 28. Burundi
    {
        name: "Burundi",
        flag: "🇧🇮",
        capital: "Gitega",
        region: "East Africa",
        population: "12 million",
        tagline: "Heart of Africa.",
        facts: [
            "One of the world's smallest countries",
            "Famous for traditional drumming",
            "Landlocked country near the Great Lakes"
        ],
        quiz: {
            question: "What is Burundi famous for?",
            options: ["Dance", "Drumming", "Singing", "Art"],
            answer: 1
        }
    },
    // 29. Cabo Verde (Cape Verde)
    {
        name: "Cabo Verde",
        flag: "🇨🇻",
        capital: "Praia",
        region: "West Africa",
        population: "590,000",
        tagline: "Islands of music.",
        facts: [
            "Island nation off Africa's western coast",
            "Morna music genre originated here",
            "Was a Portuguese colony until 1975"
        ],
        quiz: {
            question: "What music genre originated in Cabo Verde?",
            options: ["Reggae", "Morna", "Samba", "Fado"],
            answer: 1
        }
    },
    // 30. Cambodia
    {
        name: "Cambodia",
        flag: "🇰🇭",
        capital: "Phnom Penh",
        region: "Southeast Asia",
        population: "17 million",
        tagline: "Kingdom of wonder.",
        facts: [
            "Home to Angkor Wat - world's largest religious monument",
            "Only country with a building on its flag",
            "Mekong River flows through the country"
        ],
        quiz: {
            question: "What famous temple is in Cambodia?",
            options: ["Taj Mahal", "Angkor Wat", "Borobudur", "Shwedagon"],
            answer: 1
        }
    },
    // 31. Cameroon
    {
        name: "Cameroon",
        flag: "🇨🇲",
        capital: "Yaoundé",
        region: "Central Africa",
        population: "28 million",
        tagline: "Africa in miniature.",
        facts: [
            "Called 'Africa in miniature' for its geographic diversity",
            "Has both French and English as official languages",
            "Mount Cameroon is the highest peak in West Africa"
        ],
        quiz: {
            question: "Why is Cameroon called 'Africa in miniature'?",
            options: ["It's small", "Has all African landscapes", "Many languages", "Oldest country"],
            answer: 1
        }
    },
    // 32. Canada
    {
        name: "Canada",
        flag: "🇨🇦",
        capital: "Ottawa",
        region: "North America",
        population: "38 million",
        tagline: "True north strong and free.",
        facts: [
            "Second largest country in the world by area",
            "Has more lakes than all other countries combined",
            "Produces 71% of the world's maple syrup"
        ],
        quiz: {
            question: "What leaf is on Canada's flag?",
            options: ["Oak", "Maple", "Birch", "Pine"],
            answer: 1
        }
    },
    // 33. Central African Republic
    {
        name: "Central African Republic",
        flag: "🇨🇫",
        capital: "Bangui",
        region: "Central Africa",
        population: "5 million",
        tagline: "Heart of Africa.",
        facts: [
            "One of the world's least developed countries",
            "Rich in diamonds and gold",
            "Rainforests home to forest elephants and gorillas"
        ],
        quiz: {
            question: "What precious stone is CAR rich in?",
            options: ["Rubies", "Diamonds", "Emeralds", "Sapphires"],
            answer: 1
        }
    },
    // 34. Chad
    {
        name: "Chad",
        flag: "🇹🇩",
        capital: "N'Djamena",
        region: "Central Africa",
        population: "17 million",
        tagline: "The dead heart of Africa.",
        facts: [
            "Flag is nearly identical to Romania's",
            "Lake Chad has shrunk by 90% since 1960s",
            "Named after Lake Chad"
        ],
        quiz: {
            question: "Which country's flag is nearly identical to Chad's?",
            options: ["France", "Belgium", "Romania", "Mali"],
            answer: 2
        }
    },
    // 35. Chile
    {
        name: "Chile",
        flag: "🇨🇱",
        capital: "Santiago",
        region: "South America",
        population: "19 million",
        tagline: "The longest country.",
        facts: [
            "Longest north-south country in the world (4,300 km)",
            "Atacama Desert is the driest place on Earth",
            "Easter Island with its Moai statues belongs to Chile"
        ],
        quiz: {
            question: "What famous island belongs to Chile?",
            options: ["Galapagos", "Easter Island", "Fiji", "Hawaii"],
            answer: 1
        }
    },
    // 36. China
    {
        name: "China",
        flag: "🇨🇳",
        capital: "Beijing",
        region: "East Asia",
        population: "1.4 billion",
        tagline: "The Middle Kingdom.",
        facts: [
            "Most populous country in the world",
            "Great Wall stretches over 21,000 km",
            "Invented paper, compass, gunpowder, and printing"
        ],
        quiz: {
            question: "What is the capital of China?",
            options: ["Shanghai", "Beijing", "Hong Kong", "Shenzhen"],
            answer: 1
        }
    },
    // 37. Colombia
    {
        name: "Colombia",
        flag: "🇨🇴",
        capital: "Bogotá",
        region: "South America",
        population: "52 million",
        tagline: "The only risk is wanting to stay.",
        facts: [
            "Named after Christopher Columbus",
            "World's largest producer of emeralds",
            "Second most biodiverse country in the world"
        ],
        quiz: {
            question: "What precious stone is Colombia famous for?",
            options: ["Diamonds", "Rubies", "Emeralds", "Sapphires"],
            answer: 2
        }
    },
    // 38. Comoros
    {
        name: "Comoros",
        flag: "🇰🇲",
        capital: "Moroni",
        region: "East Africa",
        population: "900,000",
        tagline: "Islands of the Moon.",
        facts: [
            "Island nation in the Indian Ocean",
            "Made up of volcanic islands",
            "Major producer of vanilla and ylang-ylang"
        ],
        quiz: {
            question: "What does 'Comoros' mean?",
            options: ["Islands of Sun", "Islands of Moon", "Islands of Stars", "Islands of Dreams"],
            answer: 1
        }
    },
    // 39. DR Congo
    {
        name: "Democratic Republic of Congo",
        flag: "🇨🇩",
        capital: "Kinshasa",
        region: "Central Africa",
        population: "95 million",
        tagline: "The heart of Africa.",
        facts: [
            "Second largest country in Africa",
            "Congo River is the world's deepest river",
            "Has 80% of world's coltan used in phones"
        ],
        quiz: {
            question: "What is the world's deepest river?",
            options: ["Amazon", "Nile", "Congo", "Mississippi"],
            answer: 2
        }
    },
    // 40. Republic of Congo
    {
        name: "Republic of Congo",
        flag: "🇨🇬",
        capital: "Brazzaville",
        region: "Central Africa",
        population: "5.8 million",
        tagline: "The land of forests.",
        facts: [
            "65% of the country is covered by rainforest",
            "Major oil producer in Africa",
            "Capital faces Kinshasa across the Congo River"
        ],
        quiz: {
            question: "What covers most of Republic of Congo?",
            options: ["Desert", "Rainforest", "Savanna", "Mountains"],
            answer: 1
        }
    },
    // 41. Costa Rica
    {
        name: "Costa Rica",
        flag: "🇨🇷",
        capital: "San José",
        region: "Central America",
        population: "5.2 million",
        tagline: "Pura Vida.",
        facts: [
            "Has had no army since 1948",
            "Contains 5% of world's biodiversity",
            "Over 25% of land is protected nature reserves"
        ],
        quiz: {
            question: "What does 'Pura Vida' mean?",
            options: ["Pure water", "Pure life", "Pure love", "Pure joy"],
            answer: 1
        }
    },
    // 42. Croatia
    {
        name: "Croatia",
        flag: "🇭🇷",
        capital: "Zagreb",
        region: "Southeast Europe",
        population: "3.9 million",
        tagline: "The Mediterranean as it once was.",
        facts: [
            "Croatians invented the necktie (cravat)",
            "Game of Thrones was filmed in Dubrovnik",
            "Has over 1,000 islands"
        ],
        quiz: {
            question: "What accessory was invented in Croatia?",
            options: ["Belt", "Necktie", "Hat", "Glasses"],
            answer: 1
        }
    },
    // 43. Cuba
    {
        name: "Cuba",
        flag: "🇨🇺",
        capital: "Havana",
        region: "Caribbean",
        population: "11 million",
        tagline: "The pearl of the Caribbean.",
        facts: [
            "Largest island in the Caribbean",
            "Famous for classic American cars from the 1950s",
            "World-renowned for cigars and rum"
        ],
        quiz: {
            question: "What is Cuba famous for exporting?",
            options: ["Coffee", "Cigars", "Tea", "Wine"],
            answer: 1
        }
    },
    // 44. Cyprus
    {
        name: "Cyprus",
        flag: "🇨🇾",
        capital: "Nicosia",
        region: "Europe/Asia",
        population: "1.2 million",
        tagline: "Island of Aphrodite.",
        facts: [
            "Birthplace of Aphrodite in Greek mythology",
            "Only divided capital city in the world (Nicosia)",
            "Third largest island in the Mediterranean"
        ],
        quiz: {
            question: "Which goddess was born in Cyprus according to myth?",
            options: ["Athena", "Aphrodite", "Hera", "Artemis"],
            answer: 1
        }
    },
    // 45. Czech Republic (Czechia)
    {
        name: "Czech Republic",
        flag: "🇨🇿",
        capital: "Prague",
        region: "Central Europe",
        population: "10.5 million",
        tagline: "Land of stories.",
        facts: [
            "Highest beer consumption per capita in the world",
            "Prague Castle is the largest ancient castle complex",
            "Invented contact lenses and sugar cubes"
        ],
        quiz: {
            question: "What country drinks the most beer per capita?",
            options: ["Germany", "Czech Republic", "Ireland", "Belgium"],
            answer: 1
        }
    },
    // 46. Denmark
    {
        name: "Denmark",
        flag: "🇩🇰",
        capital: "Copenhagen",
        region: "Northern Europe",
        population: "5.9 million",
        tagline: "Happiest country on Earth.",
        facts: [
            "Has the oldest flag still in use (since 1219)",
            "LEGO was invented here",
            "Consistently ranked among happiest countries"
        ],
        quiz: {
            question: "What toy was invented in Denmark?",
            options: ["Barbie", "LEGO", "Hot Wheels", "Monopoly"],
            answer: 1
        }
    },
    // 47. Djibouti
    {
        name: "Djibouti",
        flag: "🇩🇯",
        capital: "Djibouti",
        region: "East Africa",
        population: "1 million",
        tagline: "Where Africa meets Arabia.",
        facts: [
            "Lake Assal is the lowest point in Africa",
            "Strategic location at Red Sea entrance",
            "Hosts military bases from multiple countries"
        ],
        quiz: {
            question: "What is special about Lake Assal in Djibouti?",
            options: ["Largest lake", "Lowest point in Africa", "Hottest lake", "Oldest lake"],
            answer: 1
        }
    },
    // 48. Dominica
    {
        name: "Dominica",
        flag: "🇩🇲",
        capital: "Roseau",
        region: "Caribbean",
        population: "72,000",
        tagline: "The nature island.",
        facts: [
            "Only flag in the world featuring purple color",
            "Called the Nature Island of the Caribbean",
            "Has a boiling lake - second largest in the world"
        ],
        quiz: {
            question: "What rare color appears on Dominica's flag?",
            options: ["Pink", "Purple", "Orange", "Brown"],
            answer: 1
        }
    },
    // 49. Dominican Republic
    {
        name: "Dominican Republic",
        flag: "🇩🇴",
        capital: "Santo Domingo",
        region: "Caribbean",
        population: "11 million",
        tagline: "Endless beaches and culture.",
        facts: [
            "Shares the island of Hispaniola with Haiti",
            "Santo Domingo was first European settlement in Americas",
            "Major source of MLB baseball players"
        ],
        quiz: {
            question: "Which island does Dominican Republic share?",
            options: ["Cuba", "Jamaica", "Hispaniola", "Puerto Rico"],
            answer: 2
        }
    },
    // 50. Ecuador
    {
        name: "Ecuador",
        flag: "🇪🇨",
        capital: "Quito",
        region: "South America",
        population: "18 million",
        tagline: "The middle of the world.",
        facts: [
            "Named after the equator which runs through it",
            "Galápagos Islands belong to Ecuador",
            "Has the highest capital city in the world"
        ],
        quiz: {
            question: "What famous islands belong to Ecuador?",
            options: ["Canary", "Galápagos", "Maldives", "Seychelles"],
            answer: 1
        }
    },
    // 51. Egypt
    {
        name: "Egypt",
        flag: "🇪🇬",
        capital: "Cairo",
        region: "North Africa",
        population: "104 million",
        tagline: "Mother of the world.",
        facts: [
            "Home to the only remaining ancient wonder - Great Pyramid",
            "Suez Canal connects Mediterranean and Red Sea",
            "Nile River is the lifeline of the country"
        ],
        quiz: {
            question: "What ancient wonder is in Egypt?",
            options: ["Colosseum", "Pyramids of Giza", "Parthenon", "Machu Picchu"],
            answer: 1
        }
    },
    // 52. El Salvador
    {
        name: "El Salvador",
        flag: "🇸🇻",
        capital: "San Salvador",
        region: "Central America",
        population: "6.5 million",
        tagline: "The land of volcanoes.",
        facts: [
            "Smallest and most densely populated country in Central America",
            "First country to adopt Bitcoin as legal tender",
            "Has over 20 volcanoes"
        ],
        quiz: {
            question: "El Salvador was first to adopt what as legal tender?",
            options: ["Euro", "Dollar", "Bitcoin", "Gold"],
            answer: 2
        }
    },
    // 53. Equatorial Guinea
    {
        name: "Equatorial Guinea",
        flag: "🇬🇶",
        capital: "Malabo",
        region: "Central Africa",
        population: "1.5 million",
        tagline: "Africa's richest per capita.",
        facts: [
            "Only Spanish-speaking country in Africa",
            "Oil discovery made it one of Africa's richest",
            "Capital Malabo is located on an island"
        ],
        quiz: {
            question: "What language is official in Equatorial Guinea?",
            options: ["French", "Portuguese", "Spanish", "English"],
            answer: 2
        }
    },
    // 54. Eritrea
    {
        name: "Eritrea",
        flag: "🇪🇷",
        capital: "Asmara",
        region: "East Africa",
        population: "3.6 million",
        tagline: "The Red Sea nation.",
        facts: [
            "One of the youngest countries (independence in 1993)",
            "Asmara is a UNESCO World Heritage Site",
            "Has no private media - all state-controlled"
        ],
        quiz: {
            question: "When did Eritrea gain independence?",
            options: ["1960", "1975", "1993", "2000"],
            answer: 2
        }
    },
    // 55. Estonia
    {
        name: "Estonia",
        flag: "🇪🇪",
        capital: "Tallinn",
        region: "Northern Europe",
        population: "1.3 million",
        tagline: "E-Estonia: Digital society.",
        facts: [
            "Most digitally advanced country in the world",
            "Skype was invented here",
            "Has free public transport in the capital"
        ],
        quiz: {
            question: "What communication platform was invented in Estonia?",
            options: ["WhatsApp", "Zoom", "Skype", "Slack"],
            answer: 2
        }
    },
    // 56. Eswatini (Swaziland)
    {
        name: "Eswatini",
        flag: "🇸🇿",
        capital: "Mbabane",
        region: "Southern Africa",
        population: "1.2 million",
        tagline: "Africa's last absolute monarchy.",
        facts: [
            "Changed name from Swaziland in 2018",
            "One of the world's last absolute monarchies",
            "Famous for the Reed Dance festival"
        ],
        quiz: {
            question: "What was Eswatini's former name?",
            options: ["Rhodesia", "Swaziland", "Basutoland", "Nyasaland"],
            answer: 1
        }
    },
    // 57. Ethiopia
    {
        name: "Ethiopia",
        flag: "🇪🇹",
        capital: "Addis Ababa",
        region: "East Africa",
        population: "120 million",
        tagline: "Land of origins.",
        facts: [
            "Never colonized (except brief Italian occupation)",
            "Birthplace of coffee",
            "Uses a unique calendar - 7-8 years behind Gregorian"
        ],
        quiz: {
            question: "What beverage originated in Ethiopia?",
            options: ["Tea", "Coffee", "Cocoa", "Wine"],
            answer: 1
        }
    },
    // 58. Fiji
    {
        name: "Fiji",
        flag: "🇫🇯",
        capital: "Suva",
        region: "Oceania",
        population: "900,000",
        tagline: "Where happiness finds you.",
        facts: [
            "Archipelago of over 330 islands",
            "'Bula' is the famous greeting",
            "Rugby sevens is extremely popular"
        ],
        quiz: {
            question: "How many islands make up Fiji?",
            options: ["100", "200", "330+", "500"],
            answer: 2
        }
    },
    // 59. Finland
    {
        name: "Finland",
        flag: "🇫🇮",
        capital: "Helsinki",
        region: "Northern Europe",
        population: "5.5 million",
        tagline: "Land of a thousand lakes.",
        facts: [
            "Has 188,000 lakes",
            "Home to Santa Claus Village in Lapland",
            "Consistently ranked world's happiest country"
        ],
        quiz: {
            question: "Approximately how many lakes does Finland have?",
            options: ["10,000", "50,000", "100,000", "188,000"],
            answer: 3
        }
    },
    // 60. France
    {
        name: "France",
        flag: "🇫🇷",
        capital: "Paris",
        region: "Western Europe",
        population: "68 million",
        tagline: "Liberty, equality, fraternity.",
        facts: [
            "Most visited country in the world",
            "Eiffel Tower is the most-visited paid monument",
            "Invented cinema (Lumière brothers)"
        ],
        quiz: {
            question: "What is the most visited country in the world?",
            options: ["USA", "Spain", "France", "Italy"],
            answer: 2
        }
    },
    // 61. Gabon
    {
        name: "Gabon",
        flag: "🇬🇦",
        capital: "Libreville",
        region: "Central Africa",
        population: "2.3 million",
        tagline: "Green gold of Africa.",
        facts: [
            "85% of the country is covered by rainforest",
            "One of Africa's most prosperous countries",
            "Home to forest elephants and gorillas"
        ],
        quiz: {
            question: "What covers 85% of Gabon?",
            options: ["Desert", "Rainforest", "Savanna", "Mountains"],
            answer: 1
        }
    },
    // 62. Gambia
    {
        name: "Gambia",
        flag: "🇬🇲",
        capital: "Banjul",
        region: "West Africa",
        population: "2.5 million",
        tagline: "Smiling coast of Africa.",
        facts: [
            "Smallest country in mainland Africa",
            "Almost entirely surrounded by Senegal",
            "Gambia River runs through the entire country"
        ],
        quiz: {
            question: "Which country almost completely surrounds Gambia?",
            options: ["Mali", "Senegal", "Guinea", "Mauritania"],
            answer: 1
        }
    },
    // 63. Georgia
    {
        name: "Georgia",
        flag: "🇬🇪",
        capital: "Tbilisi",
        region: "Western Asia",
        population: "3.7 million",
        tagline: "Where Europe meets Asia.",
        facts: [
            "Birthplace of wine - 8,000 years of winemaking",
            "Has its own unique alphabet",
            "Joseph Stalin was born here"
        ],
        quiz: {
            question: "How old is Georgian winemaking?",
            options: ["1,000 years", "4,000 years", "8,000 years", "500 years"],
            answer: 2
        }
    },
    // 64. Germany
    {
        name: "Germany",
        flag: "🇩🇪",
        capital: "Berlin",
        region: "Central Europe",
        population: "84 million",
        tagline: "Land of ideas.",
        facts: [
            "Largest economy in Europe",
            "Autobahn has sections with no speed limit",
            "Has over 1,500 types of sausages"
        ],
        quiz: {
            question: "What is special about the Autobahn?",
            options: ["It's free", "No speed limit in parts", "It's underground", "Only trucks allowed"],
            answer: 1
        }
    },
    // 65. Ghana
    {
        name: "Ghana",
        flag: "🇬🇭",
        capital: "Accra",
        region: "West Africa",
        population: "33 million",
        tagline: "Gateway to Africa.",
        facts: [
            "First African country to gain independence (1957)",
            "World's second largest cocoa producer",
            "Lake Volta is one of the largest artificial lakes"
        ],
        quiz: {
            question: "When did Ghana gain independence?",
            options: ["1947", "1957", "1960", "1963"],
            answer: 1
        }
    },
    // 66. Greece
    {
        name: "Greece",
        flag: "🇬🇷",
        capital: "Athens",
        region: "Southern Europe",
        population: "10.4 million",
        tagline: "Birthplace of democracy.",
        facts: [
            "Birthplace of democracy and the Olympic Games",
            "Has over 6,000 islands",
            "The Parthenon has stood for 2,500 years"
        ],
        quiz: {
            question: "What political system was born in Greece?",
            options: ["Monarchy", "Communism", "Democracy", "Fascism"],
            answer: 2
        }
    },
    // 67. Grenada
    {
        name: "Grenada",
        flag: "🇬🇩",
        capital: "St. George's",
        region: "Caribbean",
        population: "125,000",
        tagline: "Spice island of the Caribbean.",
        facts: [
            "World's second largest nutmeg producer",
            "Known as the Spice Island",
            "Was invaded by US in 1983"
        ],
        quiz: {
            question: "What spice is Grenada famous for?",
            options: ["Cinnamon", "Nutmeg", "Pepper", "Vanilla"],
            answer: 1
        }
    },
    // 68. Guatemala
    {
        name: "Guatemala",
        flag: "🇬🇹",
        capital: "Guatemala City",
        region: "Central America",
        population: "18 million",
        tagline: "Heart of the Mayan world.",
        facts: [
            "Ancient Mayan civilization was centered here",
            "Most populous country in Central America",
            "Tikal is one of the largest Mayan sites"
        ],
        quiz: {
            question: "What ancient civilization was centered in Guatemala?",
            options: ["Aztec", "Inca", "Maya", "Olmec"],
            answer: 2
        }
    },
    // 69. Guinea
    {
        name: "Guinea",
        flag: "🇬🇳",
        capital: "Conakry",
        region: "West Africa",
        population: "13.5 million",
        tagline: "Rivers of West Africa.",
        facts: [
            "Sources of major rivers including Niger and Senegal",
            "Has the world's largest bauxite reserves",
            "Former French colony until 1958"
        ],
        quiz: {
            question: "What mineral is Guinea rich in?",
            options: ["Gold", "Bauxite", "Diamonds", "Iron"],
            answer: 1
        }
    },
    // 70. Guinea-Bissau
    {
        name: "Guinea-Bissau",
        flag: "🇬🇼",
        capital: "Bissau",
        region: "West Africa",
        population: "2 million",
        tagline: "Archipelago nation.",
        facts: [
            "One of world's poorest and least stable countries",
            "Portuguese is the official language",
            "Bijagós Archipelago is a UNESCO Biosphere Reserve"
        ],
        quiz: {
            question: "What language is official in Guinea-Bissau?",
            options: ["French", "English", "Portuguese", "Spanish"],
            answer: 2
        }
    },
    // 71. Guyana
    {
        name: "Guyana",
        flag: "🇬🇾",
        capital: "Georgetown",
        region: "South America",
        population: "800,000",
        tagline: "Land of many waters.",
        facts: [
            "Only English-speaking country in South America",
            "Kaieteur Falls is one of world's most powerful waterfalls",
            "Recent oil discovery is transforming economy"
        ],
        quiz: {
            question: "What language is spoken in Guyana?",
            options: ["Spanish", "Portuguese", "Dutch", "English"],
            answer: 3
        }
    },
    // 72. Haiti
    {
        name: "Haiti",
        flag: "🇭🇹",
        capital: "Port-au-Prince",
        region: "Caribbean",
        population: "11.5 million",
        tagline: "First Black republic.",
        facts: [
            "First successful slave revolution in history (1804)",
            "Second oldest republic in the Western Hemisphere",
            "Shares island of Hispaniola with Dominican Republic"
        ],
        quiz: {
            question: "What was Haiti the first successful example of?",
            options: ["Democracy", "Slave revolution", "Monarchy", "Communism"],
            answer: 1
        }
    },
    // 73. Honduras
    {
        name: "Honduras",
        flag: "🇭🇳",
        capital: "Tegucigalpa",
        region: "Central America",
        population: "10 million",
        tagline: "Heart of Central America.",
        facts: [
            "Copán is one of the most important Mayan sites",
            "Second largest country in Central America",
            "Coffee is a major export"
        ],
        quiz: {
            question: "What ancient ruins are in Honduras?",
            options: ["Aztec", "Copán (Mayan)", "Inca", "Olmec"],
            answer: 1
        }
    },
    // 74. Hungary
    {
        name: "Hungary",
        flag: "🇭🇺",
        capital: "Budapest",
        region: "Central Europe",
        population: "9.7 million",
        tagline: "Pearl of the Danube.",
        facts: [
            "Invented the Rubik's Cube",
            "Has the largest thermal water cave system",
            "Hungarian is one of the hardest languages to learn"
        ],
        quiz: {
            question: "What puzzle was invented in Hungary?",
            options: ["Sudoku", "Rubik's Cube", "Crossword", "Jigsaw"],
            answer: 1
        }
    },
    // 75. Iceland
    {
        name: "Iceland",
        flag: "🇮🇸",
        capital: "Reykjavik",
        region: "Northern Europe",
        population: "370,000",
        tagline: "Land of fire and ice.",
        facts: [
            "No mosquitoes exist in Iceland",
            "Runs on nearly 100% renewable energy",
            "Northern Lights visible from September to April"
        ],
        quiz: {
            question: "What type of energy powers Iceland?",
            options: ["Coal", "Nuclear", "Renewable", "Oil"],
            answer: 2
        }
    },
    // 76. India
    {
        name: "India",
        flag: "🇮🇳",
        capital: "New Delhi",
        region: "South Asia",
        population: "1.4 billion",
        tagline: "Incredible India.",
        facts: [
            "World's largest democracy",
            "Taj Mahal is one of the New Seven Wonders",
            "Invented chess, zero, and the decimal system"
        ],
        quiz: {
            question: "What game was invented in India?",
            options: ["Checkers", "Chess", "Go", "Backgammon"],
            answer: 1
        }
    },
    // 77. Indonesia
    {
        name: "Indonesia",
        flag: "🇮🇩",
        capital: "Jakarta",
        region: "Southeast Asia",
        population: "275 million",
        tagline: "Wonderful Indonesia.",
        facts: [
            "Largest archipelago nation with 17,000+ islands",
            "Fourth most populous country",
            "Home to Komodo dragons"
        ],
        quiz: {
            question: "How many islands does Indonesia have?",
            options: ["1,000", "5,000", "17,000+", "50,000"],
            answer: 2
        }
    },
    // 78. Iran
    {
        name: "Iran",
        flag: "🇮🇷",
        capital: "Tehran",
        region: "Western Asia",
        population: "87 million",
        tagline: "Cradle of civilization.",
        facts: [
            "Formerly known as Persia - one of oldest civilizations",
            "Invented algebra, chess notation, and the postal service",
            "Has the world's second largest natural gas reserves"
        ],
        quiz: {
            question: "What mathematical concept did Persia (Iran) develop?",
            options: ["Geometry", "Algebra", "Calculus", "Trigonometry"],
            answer: 1
        }
    },
    // 79. Iraq
    {
        name: "Iraq",
        flag: "🇮🇶",
        capital: "Baghdad",
        region: "Western Asia",
        population: "42 million",
        tagline: "Land between two rivers.",
        facts: [
            "Home to ancient Mesopotamia - cradle of civilization",
            "Writing was invented here 5,000 years ago",
            "Tigris and Euphrates rivers run through it"
        ],
        quiz: {
            question: "What ancient civilization was in Iraq?",
            options: ["Egyptian", "Mesopotamian", "Greek", "Roman"],
            answer: 1
        }
    },
    // 80. Ireland
    {
        name: "Ireland",
        flag: "🇮🇪",
        capital: "Dublin",
        region: "Western Europe",
        population: "5 million",
        tagline: "The Emerald Isle.",
        facts: [
            "No snakes in Ireland (legend credits St. Patrick)",
            "Halloween originated from Irish festival Samhain",
            "Guinness is brewed in Dublin since 1759"
        ],
        quiz: {
            question: "What holiday originated in Ireland?",
            options: ["Christmas", "Easter", "Halloween", "Valentine's Day"],
            answer: 2
        }
    },
    // 81. Israel
    {
        name: "Israel",
        flag: "🇮🇱",
        capital: "Jerusalem",
        region: "Western Asia",
        population: "9.5 million",
        tagline: "The Holy Land.",
        facts: [
            "Holy to Judaism, Christianity, and Islam",
            "Dead Sea is the lowest point on Earth's surface",
            "More tech startups per capita than any other nation"
        ],
        quiz: {
            question: "What body of water is the lowest point on Earth?",
            options: ["Death Valley", "Dead Sea", "Mariana Trench", "Caspian Sea"],
            answer: 1
        }
    },
    // 82. Italy
    {
        name: "Italy",
        flag: "🇮🇹",
        capital: "Rome",
        region: "Southern Europe",
        population: "59 million",
        tagline: "La dolce vita.",
        facts: [
            "Has more UNESCO World Heritage Sites than any country",
            "Contains two independent countries: Vatican and San Marino",
            "Birthplace of pizza, pasta, and the Renaissance"
        ],
        quiz: {
            question: "What food is Italy most famous for?",
            options: ["Sushi", "Tacos", "Pizza", "Curry"],
            answer: 2
        }
    },
    // 83. Ivory Coast (Côte d'Ivoire)
    {
        name: "Ivory Coast",
        flag: "🇨🇮",
        capital: "Yamoussoukro",
        region: "West Africa",
        population: "28 million",
        tagline: "Land of hospitality.",
        facts: [
            "World's largest cocoa producer",
            "Has the largest church in the world (Basilica of Our Lady of Peace)",
            "Flag is reverse of Ireland's"
        ],
        quiz: {
            question: "What is Ivory Coast the largest producer of?",
            options: ["Coffee", "Cocoa", "Tea", "Sugar"],
            answer: 1
        }
    },
    // 84. Jamaica
    {
        name: "Jamaica",
        flag: "🇯🇲",
        capital: "Kingston",
        region: "Caribbean",
        population: "3 million",
        tagline: "Out of many, one people.",
        facts: [
            "Birthplace of reggae music and Bob Marley",
            "Usain Bolt - fastest man ever - is Jamaican",
            "First Caribbean nation to compete in Winter Olympics"
        ],
        quiz: {
            question: "What music genre originated in Jamaica?",
            options: ["Jazz", "Reggae", "Blues", "Rock"],
            answer: 1
        }
    },
    // 85. Japan
    {
        name: "Japan",
        flag: "🇯🇵",
        capital: "Tokyo",
        region: "East Asia",
        population: "125 million",
        tagline: "Land of the rising sun.",
        facts: [
            "Archipelago of 6,852 islands",
            "Invented sushi, anime, and bullet trains",
            "Has the world's oldest continuous monarchy"
        ],
        quiz: {
            question: "What is Japan known as?",
            options: ["Land of Dragons", "Land of Rising Sun", "Eternal Empire", "Golden Kingdom"],
            answer: 1
        }
    },
    // 86. Jordan
    {
        name: "Jordan",
        flag: "🇯🇴",
        capital: "Amman",
        region: "Western Asia",
        population: "11 million",
        tagline: "The Hashemite Kingdom.",
        facts: [
            "Petra is one of the New Seven Wonders of the World",
            "Over 100,000 archaeological sites",
            "Floats easily in the Dead Sea due to high salt content"
        ],
        quiz: {
            question: "What ancient city is one of the New Seven Wonders?",
            options: ["Amman", "Petra", "Jerash", "Aqaba"],
            answer: 1
        }
    },
    // 87. Kazakhstan
    {
        name: "Kazakhstan",
        flag: "🇰🇿",
        capital: "Astana",
        region: "Central Asia",
        population: "19 million",
        tagline: "World's largest landlocked country.",
        facts: [
            "Largest landlocked country in the world",
            "Baikonur Cosmodrome - first space launch site - is here",
            "Borders five countries including Russia and China"
        ],
        quiz: {
            question: "What's special about Kazakhstan's size?",
            options: ["Smallest country", "Largest landlocked", "Most islands", "Highest altitude"],
            answer: 1
        }
    },
    // 88. Kenya
    {
        name: "Kenya",
        flag: "🇰🇪",
        capital: "Nairobi",
        region: "East Africa",
        population: "54 million",
        tagline: "Magical Kenya.",
        facts: [
            "Famous for wildlife safaris and the Big Five",
            "Great Rift Valley runs through the country",
            "Produces some of the world's best long-distance runners"
        ],
        quiz: {
            question: "What is Kenya most famous for?",
            options: ["Skiing", "Safaris", "Beaches", "Mountains"],
            answer: 1
        }
    },
    // 89. Kiribati
    {
        name: "Kiribati",
        flag: "🇰🇮",
        capital: "South Tarawa",
        region: "Oceania",
        population: "120,000",
        tagline: "Where East meets West.",
        facts: [
            "Only country in all four hemispheres",
            "First to see the new millennium (Year 2000)",
            "At risk of disappearing due to rising sea levels"
        ],
        quiz: {
            question: "What makes Kiribati geographically unique?",
            options: ["Largest islands", "All four hemispheres", "Highest point", "Most volcanoes"],
            answer: 1
        }
    },
    // 90. North Korea
    {
        name: "North Korea",
        flag: "🇰🇵",
        capital: "Pyongyang",
        region: "East Asia",
        population: "26 million",
        tagline: "The hermit kingdom.",
        facts: [
            "Most isolated country in the world",
            "Has nuclear weapons capability",
            "Divided from South Korea since 1948"
        ],
        quiz: {
            question: "What is North Korea often called?",
            options: ["Golden Kingdom", "Hermit Kingdom", "Dragon Kingdom", "Lion Kingdom"],
            answer: 1
        }
    },
    // 91. South Korea
    {
        name: "South Korea",
        flag: "🇰🇷",
        capital: "Seoul",
        region: "East Asia",
        population: "52 million",
        tagline: "Dynamic Korea.",
        facts: [
            "K-pop and K-dramas are global phenomena",
            "Home to Samsung, LG, and Hyundai",
            "Has the world's fastest internet speeds"
        ],
        quiz: {
            question: "What music genre from Korea is now global?",
            options: ["J-pop", "K-pop", "C-pop", "T-pop"],
            answer: 1
        }
    },
    // 92. Kuwait
    {
        name: "Kuwait",
        flag: "🇰🇼",
        capital: "Kuwait City",
        region: "Middle East",
        population: "4.3 million",
        tagline: "Pearl of the Gulf.",
        facts: [
            "Has nearly 10% of world's oil reserves",
            "No income tax for citizens",
            "Was invaded by Iraq in 1990"
        ],
        quiz: {
            question: "What natural resource is Kuwait rich in?",
            options: ["Gold", "Oil", "Diamonds", "Uranium"],
            answer: 1
        }
    },
    // 93. Kyrgyzstan
    {
        name: "Kyrgyzstan",
        flag: "🇰🇬",
        capital: "Bishkek",
        region: "Central Asia",
        population: "6.7 million",
        tagline: "Switzerland of Central Asia.",
        facts: [
            "Over 90% of the country is mountainous",
            "Has a traditional tent called a yurt",
            "Eagle hunting is a traditional practice"
        ],
        quiz: {
            question: "What percentage of Kyrgyzstan is mountainous?",
            options: ["50%", "70%", "90%", "30%"],
            answer: 2
        }
    },
    // 94. Laos
    {
        name: "Laos",
        flag: "🇱🇦",
        capital: "Vientiane",
        region: "Southeast Asia",
        population: "7.4 million",
        tagline: "Simply beautiful.",
        facts: [
            "Only landlocked country in Southeast Asia",
            "Most bombed country in history (Vietnam War era)",
            "Mekong River runs along the border"
        ],
        quiz: {
            question: "What is unique about Laos in Southeast Asia?",
            options: ["Largest", "Only landlocked", "Most islands", "Highest peak"],
            answer: 1
        }
    },
    // 95. Latvia
    {
        name: "Latvia",
        flag: "🇱🇻",
        capital: "Riga",
        region: "Northern Europe",
        population: "1.9 million",
        tagline: "Best enjoyed slowly.",
        facts: [
            "Riga has one of the best collections of Art Nouveau architecture",
            "Invented blue jeans (Levi Strauss was of Latvian descent)",
            "Over 50% of the country is forested"
        ],
        quiz: {
            question: "What architectural style is Riga famous for?",
            options: ["Gothic", "Art Nouveau", "Baroque", "Modernist"],
            answer: 1
        }
    },
    // 96. Lebanon
    {
        name: "Lebanon",
        flag: "🇱🇧",
        capital: "Beirut",
        region: "Western Asia",
        population: "5.5 million",
        tagline: "The land of cedars.",
        facts: [
            "Cedar tree is the national symbol (on the flag)",
            "Phoenicians invented the alphabet here",
            "Has one of the oldest continuously inhabited cities - Byblos"
        ],
        quiz: {
            question: "What tree is Lebanon famous for?",
            options: ["Oak", "Cedar", "Pine", "Olive"],
            answer: 1
        }
    },
    // 97. Lesotho
    {
        name: "Lesotho",
        flag: "🇱🇸",
        capital: "Maseru",
        region: "Southern Africa",
        population: "2.1 million",
        tagline: "Kingdom in the sky.",
        facts: [
            "Only country entirely above 1,000 meters elevation",
            "Completely surrounded by South Africa",
            "Known as the 'Kingdom in the Sky'"
        ],
        quiz: {
            question: "What country completely surrounds Lesotho?",
            options: ["Botswana", "Zimbabwe", "South Africa", "Namibia"],
            answer: 2
        }
    },
    // 98. Liberia
    {
        name: "Liberia",
        flag: "🇱🇷",
        capital: "Monrovia",
        region: "West Africa",
        population: "5.2 million",
        tagline: "The love of liberty brought us here.",
        facts: [
            "Founded by freed American slaves in 1847",
            "Capital named after US President James Monroe",
            "One of only two African nations never colonized by Europeans"
        ],
        quiz: {
            question: "Who founded Liberia?",
            options: ["Europeans", "Freed American slaves", "Arab traders", "Chinese explorers"],
            answer: 1
        }
    },
    // 99. Libya
    {
        name: "Libya",
        flag: "🇱🇾",
        capital: "Tripoli",
        region: "North Africa",
        population: "7 million",
        tagline: "Land of ancient civilizations.",
        facts: [
            "90% of the country is desert",
            "Has the largest proven oil reserves in Africa",
            "Ancient Roman ruins of Leptis Magna are here"
        ],
        quiz: {
            question: "What percentage of Libya is desert?",
            options: ["50%", "70%", "90%", "30%"],
            answer: 2
        }
    },
    // 100. Liechtenstein
    {
        name: "Liechtenstein",
        flag: "🇱🇮",
        capital: "Vaduz",
        region: "Central Europe",
        population: "39,000",
        tagline: "A small country with big ideas.",
        facts: [
            "One of only two doubly landlocked countries",
            "More companies than citizens",
            "No airport - nearest is in Switzerland"
        ],
        quiz: {
            question: "What's unusual about Liechtenstein's geography?",
            options: ["Island nation", "Doubly landlocked", "Below sea level", "Highest altitude"],
            answer: 1
        }
    }
];

// Note: Countries 101-195 will be added in Part 3
// The 'countries' array will be extended
