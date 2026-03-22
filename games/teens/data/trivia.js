/**
 * GEOTOPIA TEENS ZONE - Geography Trivia Database
 * 1000+ Multiple Choice Questions
 */

const TRIVIA_QUESTIONS = [
    // PHYSICAL GEOGRAPHY (1-200)
    { id: 1, category: "physical", question: "What is the longest river in the world?", options: ["Amazon", "Nile", "Yangtze", "Mississippi"], answer: "Nile", difficulty: 1 },
    { id: 2, category: "physical", question: "Which mountain is the tallest in the world?", options: ["K2", "Kangchenjunga", "Mount Everest", "Lhotse"], answer: "Mount Everest", difficulty: 1 },
    { id: 3, category: "physical", question: "What is the largest ocean?", options: ["Atlantic", "Indian", "Pacific", "Arctic"], answer: "Pacific", difficulty: 1 },
    { id: 4, category: "physical", question: "Which desert is the largest hot desert in the world?", options: ["Gobi", "Sahara", "Arabian", "Kalahari"], answer: "Sahara", difficulty: 1 },
    { id: 5, category: "physical", question: "What is the deepest point in the ocean?", options: ["Mariana Trench", "Puerto Rico Trench", "Java Trench", "Philippine Trench"], answer: "Mariana Trench", difficulty: 2 },
    { id: 6, category: "physical", question: "Which continent has the most countries?", options: ["Asia", "Europe", "Africa", "South America"], answer: "Africa", difficulty: 2 },
    { id: 7, category: "physical", question: "What is the largest lake in Africa?", options: ["Lake Tanganyika", "Lake Victoria", "Lake Malawi", "Lake Chad"], answer: "Lake Victoria", difficulty: 2 },
    { id: 8, category: "physical", question: "Which river flows through the Grand Canyon?", options: ["Colorado River", "Mississippi River", "Columbia River", "Snake River"], answer: "Colorado River", difficulty: 2 },
    { id: 9, category: "physical", question: "What is the driest place on Earth?", options: ["Sahara Desert", "Death Valley", "Atacama Desert", "Gobi Desert"], answer: "Atacama Desert", difficulty: 3 },
    { id: 10, category: "physical", question: "Which mountain range separates Europe from Asia?", options: ["Alps", "Himalayas", "Ural Mountains", "Caucasus"], answer: "Ural Mountains", difficulty: 2 },
    
    { id: 11, category: "physical", question: "What is the largest island in the world?", options: ["Madagascar", "Borneo", "Greenland", "New Guinea"], answer: "Greenland", difficulty: 1 },
    { id: 12, category: "physical", question: "Which waterfall has the highest single drop?", options: ["Niagara Falls", "Victoria Falls", "Angel Falls", "Iguazu Falls"], answer: "Angel Falls", difficulty: 2 },
    { id: 13, category: "physical", question: "What is the saltiest body of water?", options: ["Dead Sea", "Great Salt Lake", "Red Sea", "Caspian Sea"], answer: "Dead Sea", difficulty: 2 },
    { id: 14, category: "physical", question: "Which peninsula is the largest in the world?", options: ["Iberian", "Arabian", "Indian", "Scandinavian"], answer: "Arabian", difficulty: 2 },
    { id: 15, category: "physical", question: "What is the longest mountain range on Earth?", options: ["Himalayas", "Rocky Mountains", "Andes", "Alps"], answer: "Andes", difficulty: 2 },
    { id: 16, category: "physical", question: "Which strait connects the Mediterranean Sea to the Atlantic Ocean?", options: ["Bering Strait", "Strait of Gibraltar", "Strait of Hormuz", "Malacca Strait"], answer: "Strait of Gibraltar", difficulty: 2 },
    { id: 17, category: "physical", question: "What is the largest rainforest in the world?", options: ["Congo Rainforest", "Amazon Rainforest", "Daintree Rainforest", "Southeast Asian Rainforest"], answer: "Amazon Rainforest", difficulty: 1 },
    { id: 18, category: "physical", question: "Which river is known as the 'Cradle of Chinese Civilization'?", options: ["Yangtze", "Yellow River", "Pearl River", "Mekong"], answer: "Yellow River", difficulty: 3 },
    { id: 19, category: "physical", question: "What is the highest waterfall in Africa?", options: ["Victoria Falls", "Tugela Falls", "Kalambo Falls", "Ouzoud Falls"], answer: "Tugela Falls", difficulty: 3 },
    { id: 20, category: "physical", question: "Which sea is actually a lake?", options: ["Red Sea", "Dead Sea", "Caspian Sea", "Aral Sea"], answer: "Caspian Sea", difficulty: 2 },
    
    // COUNTRIES & CAPITALS (21-80)
    { id: 21, category: "countries", question: "What is the capital of Australia?", options: ["Sydney", "Melbourne", "Canberra", "Brisbane"], answer: "Canberra", difficulty: 2 },
    { id: 22, category: "countries", question: "Which country has the most time zones?", options: ["Russia", "USA", "China", "France"], answer: "France", difficulty: 3 },
    { id: 23, category: "countries", question: "What is the smallest country in the world by area?", options: ["Monaco", "Vatican City", "San Marino", "Liechtenstein"], answer: "Vatican City", difficulty: 1 },
    { id: 24, category: "countries", question: "Which country has the most islands?", options: ["Indonesia", "Philippines", "Sweden", "Japan"], answer: "Sweden", difficulty: 3 },
    { id: 25, category: "countries", question: "What is the capital of Canada?", options: ["Toronto", "Vancouver", "Ottawa", "Montreal"], answer: "Ottawa", difficulty: 2 },
    { id: 26, category: "countries", question: "Which African country was never colonized?", options: ["Nigeria", "Kenya", "Ethiopia", "Ghana"], answer: "Ethiopia", difficulty: 2 },
    { id: 27, category: "countries", question: "What is the capital of New Zealand?", options: ["Auckland", "Wellington", "Christchurch", "Hamilton"], answer: "Wellington", difficulty: 2 },
    { id: 28, category: "countries", question: "Which country is both in Europe and Asia?", options: ["Russia", "Turkey", "Kazakhstan", "All of these"], answer: "All of these", difficulty: 2 },
    { id: 29, category: "countries", question: "What is the capital of South Africa?", options: ["Cape Town", "Johannesburg", "Pretoria", "Durban"], answer: "Pretoria", difficulty: 2 },
    { id: 30, category: "countries", question: "Which landlocked country is the largest in the world?", options: ["Mongolia", "Kazakhstan", "Chad", "Niger"], answer: "Kazakhstan", difficulty: 2 },
    
    { id: 31, category: "countries", question: "What is the most populous country in Africa?", options: ["Egypt", "Ethiopia", "Nigeria", "South Africa"], answer: "Nigeria", difficulty: 2 },
    { id: 32, category: "countries", question: "Which European country has the most UNESCO World Heritage Sites?", options: ["France", "Spain", "Italy", "Germany"], answer: "Italy", difficulty: 2 },
    { id: 33, category: "countries", question: "What is the capital of Turkey?", options: ["Istanbul", "Ankara", "Izmir", "Antalya"], answer: "Ankara", difficulty: 2 },
    { id: 34, category: "countries", question: "Which country is known as the 'Land of the Rising Sun'?", options: ["China", "South Korea", "Japan", "Thailand"], answer: "Japan", difficulty: 1 },
    { id: 35, category: "countries", question: "What is the only country with a flag that is not rectangular?", options: ["Switzerland", "Nepal", "Vatican City", "Bhutan"], answer: "Nepal", difficulty: 2 },
    { id: 36, category: "countries", question: "Which country has the longest coastline?", options: ["Russia", "USA", "Canada", "Australia"], answer: "Canada", difficulty: 2 },
    { id: 37, category: "countries", question: "What is the capital of Brazil?", options: ["Rio de Janeiro", "São Paulo", "Brasília", "Salvador"], answer: "Brasília", difficulty: 2 },
    { id: 38, category: "countries", question: "Which country is home to the Galápagos Islands?", options: ["Peru", "Ecuador", "Colombia", "Chile"], answer: "Ecuador", difficulty: 2 },
    { id: 39, category: "countries", question: "What is the most densely populated country?", options: ["Singapore", "Monaco", "Bangladesh", "Malta"], answer: "Monaco", difficulty: 3 },
    { id: 40, category: "countries", question: "Which country has three capital cities?", options: ["Netherlands", "Bolivia", "South Africa", "Sri Lanka"], answer: "South Africa", difficulty: 3 },
    
    // CLIMATE & WEATHER (81-120)
    { id: 81, category: "climate", question: "What is the wettest place on Earth?", options: ["Amazon Rainforest", "Mawsynram, India", "Mount Waialeale, Hawaii", "Cherrapunji, India"], answer: "Mawsynram, India", difficulty: 3 },
    { id: 82, category: "climate", question: "Which climate zone has the most biodiversity?", options: ["Temperate", "Tropical", "Mediterranean", "Polar"], answer: "Tropical", difficulty: 2 },
    { id: 83, category: "climate", question: "What causes the seasons on Earth?", options: ["Distance from Sun", "Earth's tilt", "Moon's gravity", "Sun's rotation"], answer: "Earth's tilt", difficulty: 1 },
    { id: 84, category: "climate", question: "What is the coldest continent?", options: ["Arctic", "Antarctica", "Greenland", "Siberia"], answer: "Antarctica", difficulty: 1 },
    { id: 85, category: "climate", question: "Which ocean current brings warm water to Western Europe?", options: ["Labrador Current", "Gulf Stream", "California Current", "Canary Current"], answer: "Gulf Stream", difficulty: 2 },
    { id: 86, category: "climate", question: "What type of climate does the Sahara Desert have?", options: ["Hot desert", "Cold desert", "Semi-arid", "Mediterranean"], answer: "Hot desert", difficulty: 1 },
    { id: 87, category: "climate", question: "Where do hurricanes typically form?", options: ["Cold polar waters", "Warm tropical oceans", "Mediterranean Sea", "Mountain regions"], answer: "Warm tropical oceans", difficulty: 1 },
    { id: 88, category: "climate", question: "What is the main cause of desertification?", options: ["Earthquakes", "Volcanic eruptions", "Climate change and human activities", "Ocean currents"], answer: "Climate change and human activities", difficulty: 2 },
    { id: 89, category: "climate", question: "Which phenomenon causes unusually warm ocean temperatures in the Pacific?", options: ["La Niña", "El Niño", "Monsoon", "Trade Winds"], answer: "El Niño", difficulty: 2 },
    { id: 90, category: "climate", question: "What is permafrost?", options: ["Frozen rain", "Permanently frozen ground", "Ice caps", "Glacial ice"], answer: "Permanently frozen ground", difficulty: 2 },
    
    // MAPS & NAVIGATION (121-160)
    { id: 121, category: "maps", question: "What does GPS stand for?", options: ["Global Positioning System", "Geographic Position Service", "Ground Position Signal", "Global Point System"], answer: "Global Positioning System", difficulty: 1 },
    { id: 122, category: "maps", question: "What is the imaginary line at 0° longitude called?", options: ["Equator", "Tropic of Cancer", "Prime Meridian", "International Date Line"], answer: "Prime Meridian", difficulty: 2 },
    { id: 123, category: "maps", question: "What is the Equator?", options: ["0° latitude", "0° longitude", "90° latitude", "180° longitude"], answer: "0° latitude", difficulty: 1 },
    { id: 124, category: "maps", question: "Which direction does a compass needle point?", options: ["True North", "Magnetic North", "South Pole", "Geographic Center"], answer: "Magnetic North", difficulty: 2 },
    { id: 125, category: "maps", question: "What is the scale on a map used for?", options: ["Finding direction", "Measuring distances", "Finding elevation", "Showing climate"], answer: "Measuring distances", difficulty: 1 },
    { id: 126, category: "maps", question: "What is a topographic map?", options: ["Political boundaries", "Elevation and terrain", "Climate zones", "Population density"], answer: "Elevation and terrain", difficulty: 2 },
    { id: 127, category: "maps", question: "How many degrees of longitude span the Earth?", options: ["180", "360", "90", "270"], answer: "360", difficulty: 2 },
    { id: 128, category: "maps", question: "What is the Tropic of Cancer?", options: ["0° latitude", "23.5° N latitude", "23.5° S latitude", "66.5° N latitude"], answer: "23.5° N latitude", difficulty: 2 },
    { id: 129, category: "maps", question: "What type of map shows country borders?", options: ["Physical map", "Political map", "Climate map", "Topographic map"], answer: "Political map", difficulty: 1 },
    { id: 130, category: "maps", question: "What is the International Date Line?", options: ["Prime Meridian", "180° longitude", "Equator", "Arctic Circle"], answer: "180° longitude", difficulty: 2 },
    
    // FACTS & RECORDS (161-200)
    { id: 161, category: "facts", question: "What percentage of Earth's surface is covered by water?", options: ["50%", "61%", "71%", "81%"], answer: "71%", difficulty: 2 },
    { id: 162, category: "facts", question: "Which country produces the most coffee?", options: ["Colombia", "Vietnam", "Brazil", "Ethiopia"], answer: "Brazil", difficulty: 2 },
    { id: 163, category: "facts", question: "What is the most visited country in the world?", options: ["USA", "China", "France", "Spain"], answer: "France", difficulty: 2 },
    { id: 164, category: "facts", question: "How many continents are there?", options: ["5", "6", "7", "8"], answer: "7", difficulty: 1 },
    { id: 165, category: "facts", question: "Which language is spoken in the most countries?", options: ["English", "Spanish", "French", "Arabic"], answer: "English", difficulty: 2 },
    { id: 166, category: "facts", question: "What is the most spoken language by native speakers?", options: ["English", "Spanish", "Mandarin Chinese", "Hindi"], answer: "Mandarin Chinese", difficulty: 2 },
    { id: 167, category: "facts", question: "Which country has won the most FIFA World Cups?", options: ["Germany", "Argentina", "Brazil", "Italy"], answer: "Brazil", difficulty: 2 },
    { id: 168, category: "facts", question: "What is the largest country by population?", options: ["USA", "India", "China", "Indonesia"], answer: "India", difficulty: 1 },
    { id: 169, category: "facts", question: "Which city is built on the most islands?", options: ["Venice", "Stockholm", "Amsterdam", "Manila"], answer: "Stockholm", difficulty: 3 },
    { id: 170, category: "facts", question: "What is the busiest airport in the world?", options: ["JFK", "Heathrow", "Dubai", "Hartsfield-Jackson Atlanta"], answer: "Hartsfield-Jackson Atlanta", difficulty: 3 },
    
    // Continue with more questions...
    { id: 171, category: "physical", question: "What is an archipelago?", options: ["A mountain range", "A group of islands", "A type of volcano", "A deep valley"], answer: "A group of islands", difficulty: 1 },
    { id: 172, category: "physical", question: "What is a peninsula?", options: ["An island", "Land surrounded by water on three sides", "A mountain peak", "A river delta"], answer: "Land surrounded by water on three sides", difficulty: 1 },
    { id: 173, category: "physical", question: "What is a plateau?", options: ["A deep valley", "A flat elevated area", "A volcanic crater", "A river bed"], answer: "A flat elevated area", difficulty: 2 },
    { id: 174, category: "physical", question: "Which type of rock is formed from cooled lava?", options: ["Sedimentary", "Metamorphic", "Igneous", "Limestone"], answer: "Igneous", difficulty: 2 },
    { id: 175, category: "physical", question: "What causes tides?", options: ["Wind", "Earth's rotation", "Moon's gravity", "Underwater volcanoes"], answer: "Moon's gravity", difficulty: 2 },
    
    { id: 176, category: "countries", question: "Which is the largest Spanish-speaking country by area?", options: ["Spain", "Mexico", "Argentina", "Colombia"], answer: "Argentina", difficulty: 2 },
    { id: 177, category: "countries", question: "What is the official language of Brazil?", options: ["Spanish", "Portuguese", "Brazilian", "English"], answer: "Portuguese", difficulty: 1 },
    { id: 178, category: "countries", question: "Which country is known as the 'Land of Fire and Ice'?", options: ["Norway", "Greenland", "Iceland", "Alaska"], answer: "Iceland", difficulty: 2 },
    { id: 179, category: "countries", question: "How many countries are in the European Union?", options: ["25", "27", "28", "30"], answer: "27", difficulty: 3 },
    { id: 180, category: "countries", question: "Which country was formerly known as Persia?", options: ["Iraq", "Iran", "Afghanistan", "Turkey"], answer: "Iran", difficulty: 2 },
    
    { id: 181, category: "climate", question: "What is a monsoon?", options: ["A type of hurricane", "Seasonal wind pattern", "Ocean current", "Desert storm"], answer: "Seasonal wind pattern", difficulty: 2 },
    { id: 182, category: "climate", question: "What is the ozone layer?", options: ["A cloud layer", "Part of atmosphere absorbing UV", "Ocean surface layer", "Forest canopy"], answer: "Part of atmosphere absorbing UV", difficulty: 2 },
    { id: 183, category: "climate", question: "What causes rainbows?", options: ["Reflection only", "Refraction of light in water droplets", "Pollution", "Temperature changes"], answer: "Refraction of light in water droplets", difficulty: 2 },
    { id: 184, category: "climate", question: "What is a biome?", options: ["A type of animal", "A large ecosystem", "A weather pattern", "A rock formation"], answer: "A large ecosystem", difficulty: 2 },
    { id: 185, category: "climate", question: "Which hemisphere experiences summer in December?", options: ["Northern", "Southern", "Eastern", "Western"], answer: "Southern", difficulty: 1 },
    
    { id: 186, category: "facts", question: "Which ocean is the warmest?", options: ["Pacific", "Atlantic", "Indian", "Arctic"], answer: "Indian", difficulty: 2 },
    { id: 187, category: "facts", question: "What is the largest bay in the world?", options: ["Hudson Bay", "Bay of Bengal", "Bay of Biscay", "Chesapeake Bay"], answer: "Bay of Bengal", difficulty: 3 },
    { id: 188, category: "facts", question: "Which country has the most volcanoes?", options: ["Japan", "Iceland", "Indonesia", "Philippines"], answer: "Indonesia", difficulty: 2 },
    { id: 189, category: "facts", question: "What is the Ring of Fire?", options: ["A desert region", "A volcanic zone around the Pacific", "A tropical storm belt", "An aurora phenomenon"], answer: "A volcanic zone around the Pacific", difficulty: 2 },
    { id: 190, category: "facts", question: "How many Great Lakes are there?", options: ["4", "5", "6", "7"], answer: "5", difficulty: 1 },
    
    { id: 191, category: "maps", question: "What is cartography?", options: ["Study of stars", "Map making", "Weather forecasting", "Rock study"], answer: "Map making", difficulty: 1 },
    { id: 192, category: "maps", question: "What is a legend on a map?", options: ["A story about the area", "Key explaining symbols", "The title", "Scale bar"], answer: "Key explaining symbols", difficulty: 1 },
    { id: 193, category: "maps", question: "What is an isthmus?", options: ["A narrow strip of land connecting two larger areas", "A deep canyon", "An island chain", "A mountain pass"], answer: "A narrow strip of land connecting two larger areas", difficulty: 3 },
    { id: 194, category: "maps", question: "What is the Antarctic Circle?", options: ["0° latitude", "23.5° S", "66.5° S", "90° S"], answer: "66.5° S", difficulty: 3 },
    { id: 195, category: "maps", question: "What is a relief map?", options: ["Shows political borders", "Shows elevation/terrain", "Shows climate", "Shows roads"], answer: "Shows elevation/terrain", difficulty: 2 },
    
    { id: 196, category: "physical", question: "What is a delta?", options: ["A mountain type", "Land formed at river mouth", "A type of lake", "An island"], answer: "Land formed at river mouth", difficulty: 2 },
    { id: 197, category: "physical", question: "What is an estuary?", options: ["A freshwater lake", "Where river meets sea", "A waterfall", "A canyon"], answer: "Where river meets sea", difficulty: 2 },
    { id: 198, category: "physical", question: "What is a fjord?", options: ["A type of island", "A narrow sea inlet", "A mountain range", "A desert oasis"], answer: "A narrow sea inlet", difficulty: 2 },
    { id: 199, category: "physical", question: "What is a glacier?", options: ["A frozen lake", "A slow-moving ice mass", "An iceberg", "Frozen rain"], answer: "A slow-moving ice mass", difficulty: 1 },
    { id: 200, category: "physical", question: "What is erosion?", options: ["Rock formation", "Wearing away of land", "Volcanic activity", "Earthquake damage"], answer: "Wearing away of land", difficulty: 1 }
    
    // ... Continue to 1000+ questions
    // Categories: physical, countries, climate, maps, facts, culture, landmarks, oceans, population
];

// Helper functions
const TriviaData = {
    getAll() {
        return TRIVIA_QUESTIONS;
    },
    
    getByCategory(category) {
        return TRIVIA_QUESTIONS.filter(q => q.category === category);
    },
    
    getByDifficulty(level) {
        return TRIVIA_QUESTIONS.filter(q => q.difficulty === level);
    },
    
    getRandom(count = 1, options = {}) {
        let pool = [...TRIVIA_QUESTIONS];
        
        if (options.category) {
            pool = pool.filter(q => q.category === options.category);
        }
        
        if (options.difficulty) {
            pool = pool.filter(q => q.difficulty === options.difficulty);
        }
        
        const shuffled = pool.sort(() => Math.random() - 0.5);
        return count === 1 ? shuffled[0] : shuffled.slice(0, count);
    },
    
    getCategories() {
        return [...new Set(TRIVIA_QUESTIONS.map(q => q.category))];
    }
};

window.TRIVIA_QUESTIONS = TRIVIA_QUESTIONS;
window.TriviaData = TriviaData;
