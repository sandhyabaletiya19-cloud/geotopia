/**
 * GEOTOPIA TEENS ZONE - Famous Landmarks Database
 * 100+ world landmarks with images
 */

const LANDMARKS = [
    // EUROPE
    { id: 1, name: "Eiffel Tower", country: "France", city: "Paris", continent: "Europe", image: "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?w=400", difficulty: 1 },
    { id: 2, name: "Colosseum", country: "Italy", city: "Rome", continent: "Europe", image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=400", difficulty: 1 },
    { id: 3, name: "Big Ben", country: "United Kingdom", city: "London", continent: "Europe", image: "https://images.unsplash.com/photo-1529655683826-aba9b3e77383?w=400", difficulty: 1 },
    { id: 4, name: "Leaning Tower of Pisa", country: "Italy", city: "Pisa", continent: "Europe", image: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=400", difficulty: 1 },
    { id: 5, name: "Sagrada Familia", country: "Spain", city: "Barcelona", continent: "Europe", image: "https://images.unsplash.com/photo-1583779457094-ab6f77f7bf57?w=400", difficulty: 2 },
    { id: 6, name: "Parthenon", country: "Greece", city: "Athens", continent: "Europe", image: "https://images.unsplash.com/photo-1555993539-1732b0258235?w=400", difficulty: 2 },
    { id: 7, name: "Brandenburg Gate", country: "Germany", city: "Berlin", continent: "Europe", image: "https://images.unsplash.com/photo-1566404791232-af9fe55f85a4?w=400", difficulty: 2 },
    { id: 8, name: "Tower Bridge", country: "United Kingdom", city: "London", continent: "Europe", image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=400", difficulty: 1 },
    { id: 9, name: "Notre-Dame Cathedral", country: "France", city: "Paris", continent: "Europe", image: "https://images.unsplash.com/photo-1478391679764-b2d8b3cd1e94?w=400", difficulty: 2 },
    { id: 10, name: "Stonehenge", country: "United Kingdom", city: "Wiltshire", continent: "Europe", image: "https://images.unsplash.com/photo-1599833975787-5c143f373c30?w=400", difficulty: 2 },
    { id: 11, name: "Neuschwanstein Castle", country: "Germany", city: "Bavaria", continent: "Europe", image: "https://images.unsplash.com/photo-1534313314376-a72289b6181e?w=400", difficulty: 3 },
    { id: 12, name: "Kremlin", country: "Russia", city: "Moscow", continent: "Europe", image: "https://images.unsplash.com/photo-1513326738677-b964603b136d?w=400", difficulty: 2 },
    { id: 13, name: "St. Basil's Cathedral", country: "Russia", city: "Moscow", continent: "Europe", image: "https://images.unsplash.com/photo-1518811879619-68f8c6f55fab?w=400", difficulty: 2 },
    { id: 14, name: "Atomium", country: "Belgium", city: "Brussels", continent: "Europe", image: "https://images.unsplash.com/photo-1551250928-e1a9b1c5d8b6?w=400", difficulty: 3 },
    { id: 15, name: "Charles Bridge", country: "Czech Republic", city: "Prague", continent: "Europe", image: "https://images.unsplash.com/photo-1541849546-216549ae216d?w=400", difficulty: 3 },
    
    // ASIA
    { id: 16, name: "Great Wall of China", country: "China", city: "Beijing", continent: "Asia", image: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=400", difficulty: 1 },
    { id: 17, name: "Taj Mahal", country: "India", city: "Agra", continent: "Asia", image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=400", difficulty: 1 },
    { id: 18, name: "Mount Fuji", country: "Japan", city: "Honshu", continent: "Asia", image: "https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?w=400", difficulty: 1 },
    { id: 19, name: "Angkor Wat", country: "Cambodia", city: "Siem Reap", continent: "Asia", image: "https://images.unsplash.com/photo-1569949381669-ecf31ae8e6a4?w=400", difficulty: 2 },
    { id: 20, name: "Forbidden City", country: "China", city: "Beijing", continent: "Asia", image: "https://images.unsplash.com/photo-1584466990297-8bde66b02e9d?w=400", difficulty: 2 },
    { id: 21, name: "Petronas Towers", country: "Malaysia", city: "Kuala Lumpur", continent: "Asia", image: "https://images.unsplash.com/photo-1508094214466-708a7d21c5c0?w=400", difficulty: 2 },
    { id: 22, name: "Burj Khalifa", country: "United Arab Emirates", city: "Dubai", continent: "Asia", image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=400", difficulty: 1 },
    { id: 23, name: "Tokyo Tower", country: "Japan", city: "Tokyo", continent: "Asia", image: "https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?w=400", difficulty: 2 },
    { id: 24, name: "Marina Bay Sands", country: "Singapore", city: "Singapore", continent: "Asia", image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=400", difficulty: 2 },
    { id: 25, name: "Borobudur", country: "Indonesia", city: "Java", continent: "Asia", image: "https://images.unsplash.com/photo-1596402184320-417e7178b2cd?w=400", difficulty: 3 },
    { id: 26, name: "Golden Temple", country: "India", city: "Amritsar", continent: "Asia", image: "https://images.unsplash.com/photo-1518929458119-e5bf444c30f4?w=400", difficulty: 2 },
    { id: 27, name: "Potala Palace", country: "China", city: "Lhasa", continent: "Asia", image: "https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?w=400", difficulty: 3 },
    { id: 28, name: "Ha Long Bay", country: "Vietnam", city: "Quang Ninh", continent: "Asia", image: "https://images.unsplash.com/photo-1528127269322-539801943592?w=400", difficulty: 2 },
    { id: 29, name: "Sensoji Temple", country: "Japan", city: "Tokyo", continent: "Asia", image: "https://images.unsplash.com/photo-1480796927426-f609979314bd?w=400", difficulty: 3 },
    { id: 30, name: "Hagia Sophia", country: "Turkey", city: "Istanbul", continent: "Asia", image: "https://images.unsplash.com/photo-1541432901042-2d8bd64b0a28?w=400", difficulty: 2 },
    
    // AFRICA
    { id: 31, name: "Pyramids of Giza", country: "Egypt", city: "Giza", continent: "Africa", image: "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?w=400", difficulty: 1 },
    { id: 32, name: "Sphinx", country: "Egypt", city: "Giza", continent: "Africa", image: "https://images.unsplash.com/photo-1568322445389-f64ac2515020?w=400", difficulty: 1 },
    { id: 33, name: "Table Mountain", country: "South Africa", city: "Cape Town", continent: "Africa", image: "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=400", difficulty: 2 },
    { id: 34, name: "Victoria Falls", country: "Zimbabwe/Zambia", city: "Livingstone", continent: "Africa", image: "https://images.unsplash.com/photo-1543349689-9a4d426bee8e?w=400", difficulty: 2 },
    { id: 35, name: "Karnak Temple", country: "Egypt", city: "Luxor", continent: "Africa", image: "https://images.unsplash.com/photo-1568322503652-8e6e46d8a09f?w=400", difficulty: 3 },
    { id: 36, name: "Mount Kilimanjaro", country: "Tanzania", city: "Moshi", continent: "Africa", image: "https://images.unsplash.com/photo-1609198092458-38a293c7ac4b?w=400", difficulty: 2 },
    { id: 37, name: "Abu Simbel", country: "Egypt", city: "Aswan", continent: "Africa", image: "https://images.unsplash.com/photo-1595979904086-8be60a25e091?w=400", difficulty: 3 },
    { id: 38, name: "Djinguereber Mosque", country: "Mali", city: "Timbuktu", continent: "Africa", image: "https://images.unsplash.com/photo-1591825729269-caeb344f6df2?w=400", difficulty: 3 },
    
    // NORTH AMERICA
    { id: 39, name: "Statue of Liberty", country: "United States", city: "New York", continent: "North America", image: "https://images.unsplash.com/photo-1503174971373-b1f69850bded?w=400", difficulty: 1 },
    { id: 40, name: "Golden Gate Bridge", country: "United States", city: "San Francisco", continent: "North America", image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=400", difficulty: 1 },
    { id: 41, name: "Grand Canyon", country: "United States", city: "Arizona", continent: "North America", image: "https://images.unsplash.com/photo-1474044159687-1ee9f3a51722?w=400", difficulty: 1 },
    { id: 42, name: "Empire State Building", country: "United States", city: "New York", continent: "North America", image: "https://images.unsplash.com/photo-1555109307-f7d9da25c244?w=400", difficulty: 2 },
    { id: 43, name: "Mount Rushmore", country: "United States", city: "South Dakota", continent: "North America", image: "https://images.unsplash.com/photo-1558216127-fb46c4fb98a7?w=400", difficulty: 2 },
    { id: 44, name: "Niagara Falls", country: "Canada/USA", city: "Ontario/New York", continent: "North America", image: "https://images.unsplash.com/photo-1489447068241-b3490214e879?w=400", difficulty: 1 },
    { id: 45, name: "Chichen Itza", country: "Mexico", city: "Yucatan", continent: "North America", image: "https://images.unsplash.com/photo-1518638150340-f706e86654de?w=400", difficulty: 2 },
    { id: 46, name: "CN Tower", country: "Canada", city: "Toronto", continent: "North America", image: "https://images.unsplash.com/photo-1517935706615-2717063c2225?w=400", difficulty: 2 },
    { id: 47, name: "Hollywood Sign", country: "United States", city: "Los Angeles", continent: "North America", image: "https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?w=400", difficulty: 2 },
    { id: 48, name: "White House", country: "United States", city: "Washington D.C.", continent: "North America", image: "https://images.unsplash.com/photo-1555436169-20e93ea9a7ff?w=400", difficulty: 2 },
    { id: 49, name: "Lincoln Memorial", country: "United States", city: "Washington D.C.", continent: "North America", image: "https://images.unsplash.com/photo-1564724689903-4a09f7c7d0f8?w=400", difficulty: 2 },
    { id: 50, name: "Space Needle", country: "United States", city: "Seattle", continent: "North America", image: "https://images.unsplash.com/photo-1502175353174-a7a70e73b362?w=400", difficulty: 3 },
    
    // SOUTH AMERICA
    { id: 51, name: "Christ the Redeemer", country: "Brazil", city: "Rio de Janeiro", continent: "South America", image: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=400", difficulty: 1 },
    { id: 52, name: "Machu Picchu", country: "Peru", city: "Cusco", continent: "South America", image: "https://images.unsplash.com/photo-1526392060635-9d6019884377?w=400", difficulty: 1 },
    { id: 53, name: "Iguazu Falls", country: "Argentina/Brazil", city: "Foz do Iguaçu", continent: "South America", image: "https://images.unsplash.com/photo-1551761429-8232f9f5955c?w=400", difficulty: 2 },
    { id: 54, name: "Moai Statues", country: "Chile", city: "Easter Island", continent: "South America", image: "https://images.unsplash.com/photo-1560759226-14da22a643ef?w=400", difficulty: 2 },
    { id: 55, name: "Sugarloaf Mountain", country: "Brazil", city: "Rio de Janeiro", continent: "South America", image: "https://images.unsplash.com/photo-1516834611397-8d633eaec5d0?w=400", difficulty: 3 },
    { id: 56, name: "Nazca Lines", country: "Peru", city: "Nazca", continent: "South America", image: "https://images.unsplash.com/photo-1580619305218-8423a7ef79b4?w=400", difficulty: 3 },
    { id: 57, name: "Torres del Paine", country: "Chile", city: "Patagonia", continent: "South America", image: "https://images.unsplash.com/photo-1531803480434-25c3dc95f9c1?w=400", difficulty: 3 },
    
    // OCEANIA
    { id: 58, name: "Sydney Opera House", country: "Australia", city: "Sydney", continent: "Oceania", image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=400", difficulty: 1 },
    { id: 59, name: "Uluru (Ayers Rock)", country: "Australia", city: "Northern Territory", continent: "Oceania", image: "https://images.unsplash.com/photo-1494949360228-3fe37c4a8de4?w=400", difficulty: 2 },
    { id: 60, name: "Great Barrier Reef", country: "Australia", city: "Queensland", continent: "Oceania", image: "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=400", difficulty: 2 },
    { id: 61, name: "Harbour Bridge", country: "Australia", city: "Sydney", continent: "Oceania", image: "https://images.unsplash.com/photo-1524293581917-878a6d017c71?w=400", difficulty: 2 },
    { id: 62, name: "Sky Tower", country: "New Zealand", city: "Auckland", continent: "Oceania", image: "https://images.unsplash.com/photo-1595125990323-885cec5217ff?w=400", difficulty: 3 },
    { id: 63, name: "Milford Sound", country: "New Zealand", city: "South Island", continent: "Oceania", image: "https://images.unsplash.com/photo-1507699622108-4be3abd695ad?w=400", difficulty: 3 },
    
    // MORE LANDMARKS (to reach 100+)
    { id: 64, name: "Arc de Triomphe", country: "France", city: "Paris", continent: "Europe", image: "https://images.unsplash.com/photo-1522093007474-d86e9bf7ba6f?w=400", difficulty: 2 },
    { id: 65, name: "Trevi Fountain", country: "Italy", city: "Rome", continent: "Europe", image: "https://images.unsplash.com/photo-1525874684015-58379d421a52?w=400", difficulty: 2 },
    { id: 66, name: "Acropolis", country: "Greece", city: "Athens", continent: "Europe", image: "https://images.unsplash.com/photo-1555993539-1732b0258235?w=400", difficulty: 2 },
    { id: 67, name: "Palace of Versailles", country: "France", city: "Versailles", continent: "Europe", image: "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=400", difficulty: 2 },
    { id: 68, name: "Alhambra", country: "Spain", city: "Granada", continent: "Europe", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400", difficulty: 3 },
    { id: 69, name: "Edinburgh Castle", country: "United Kingdom", city: "Edinburgh", continent: "Europe", image: "https://images.unsplash.com/photo-1565098772267-60af42b81ef2?w=400", difficulty: 3 },
    { id: 70, name: "Louvre Museum", country: "France", city: "Paris", continent: "Europe", image: "https://images.unsplash.com/photo-1499426600726-2e1bd51c07a2?w=400", difficulty: 2 },
    { id: 71, name: "Amsterdam Canals", country: "Netherlands", city: "Amsterdam", continent: "Europe", image: "https://images.unsplash.com/photo-1534351590666-13e3e96b5017?w=400", difficulty: 2 },
    { id: 72, name: "Matterhorn", country: "Switzerland", city: "Zermatt", continent: "Europe", image: "https://images.unsplash.com/photo-1531973576160-7125cd663d86?w=400", difficulty: 2 },
    { id: 73, name: "Vatican City", country: "Vatican City", city: "Vatican City", continent: "Europe", image: "https://images.unsplash.com/photo-1531572753322-ad063cecc140?w=400", difficulty: 2 },
    { id: 74, name: "Blue Mosque", country: "Turkey", city: "Istanbul", continent: "Asia", image: "https://images.unsplash.com/photo-1541432901042-2d8bd64b0a28?w=400", difficulty: 2 },
    { id: 75, name: "Fushimi Inari Shrine", country: "Japan", city: "Kyoto", continent: "Asia", image: "https://images.unsplash.com/photo-1478436127897-769e1b3f0f36?w=400", difficulty: 3 },
    { id: 76, name: "Terracotta Army", country: "China", city: "Xi'an", continent: "Asia", image: "https://images.unsplash.com/photo-1591182198867-c4f6cca50a2f?w=400", difficulty: 2 },
    { id: 77, name: "Bagan Temples", country: "Myanmar", city: "Bagan", continent: "Asia", image: "https://images.unsplash.com/photo-1558618047-f4b511c67ee4?w=400", difficulty: 3 },
    { id: 78, name: "Osaka Castle", country: "Japan", city: "Osaka", continent: "Asia", image: "https://images.unsplash.com/photo-1590559899731-a382839e5549?w=400", difficulty: 3 },
    { id: 79, name: "Dead Sea", country: "Jordan/Israel", city: "Ein Bokek", continent: "Asia", image: "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?w=400", difficulty: 2 },
    { id: 80, name: "Petra", country: "Jordan", city: "Ma'an", continent: "Asia", image: "https://images.unsplash.com/photo-1579606032821-4e6161c81571?w=400", difficulty: 2 },
    { id: 81, name: "Jaipur City Palace", country: "India", city: "Jaipur", continent: "Asia", image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=400", difficulty: 3 },
    { id: 82, name: "Hong Kong Skyline", country: "China", city: "Hong Kong", continent: "Asia", image: "https://images.unsplash.com/photo-1536599018102-9f803c140fc1?w=400", difficulty: 2 },
    { id: 83, name: "Gardens by the Bay", country: "Singapore", city: "Singapore", continent: "Asia", image: "https://images.unsplash.com/photo-1506351421178-63b52a2d2562?w=400", difficulty: 2 },
    { id: 84, name: "Santorini", country: "Greece", city: "Santorini", continent: "Europe", image: "https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?w=400", difficulty: 2 },
    { id: 85, name: "Venice Canals", country: "Italy", city: "Venice", continent: "Europe", image: "https://images.unsplash.com/photo-1514890547357-a9ee288728e0?w=400", difficulty: 2 },
    { id: 86, name: "Dubrovnik Old Town", country: "Croatia", city: "Dubrovnik", continent: "Europe", image: "https://images.unsplash.com/photo-1555990538-c46fa5d5fced?w=400", difficulty: 3 },
    { id: 87, name: "Cinque Terre", country: "Italy", city: "Liguria", continent: "Europe", image: "https://images.unsplash.com/photo-1498307833015-e7b400441eb8?w=400", difficulty: 3 },
    { id: 88, name: "Lake Bled", country: "Slovenia", city: "Bled", continent: "Europe", image: "https://images.unsplash.com/photo-1553903324-205c2a7e22c9?w=400", difficulty: 3 },
    { id: 89, name: "Antelope Canyon", country: "United States", city: "Arizona", continent: "North America", image: "https://images.unsplash.com/photo-1474044159687-1ee9f3a51722?w=400", difficulty: 3 },
    { id: 90, name: "Yellowstone", country: "United States", city: "Wyoming", continent: "North America", image: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?w=400", difficulty: 2 },
    { id: 91, name: "Hoover Dam", country: "United States", city: "Nevada", continent: "North America", image: "https://images.unsplash.com/photo-1570176601044-24bfb7e32d3a?w=400", difficulty: 3 },
    { id: 92, name: "Banff National Park", country: "Canada", city: "Alberta", continent: "North America", image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400", difficulty: 2 },
    { id: 93, name: "Statue of Cristo Rey", country: "Colombia", city: "Cali", continent: "South America", image: "https://images.unsplash.com/photo-1535406208535-1429e36f8f45?w=400", difficulty: 3 },
    { id: 94, name: "Galapagos Islands", country: "Ecuador", city: "Galápagos", continent: "South America", image: "https://images.unsplash.com/photo-1544979590-37e9b47eb705?w=400", difficulty: 2 },
    { id: 95, name: "Salar de Uyuni", country: "Bolivia", city: "Potosí", continent: "South America", image: "https://images.unsplash.com/photo-1511131341194-24e2eeeebb09?w=400", difficulty: 3 },
    { id: 96, name: "Perito Moreno Glacier", country: "Argentina", city: "Santa Cruz", continent: "South America", image: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=400", difficulty: 3 },
    { id: 97, name: "Twelve Apostles", country: "Australia", city: "Victoria", continent: "Oceania", image: "https://images.unsplash.com/photo-1510253687831-0f982d7862c4?w=400", difficulty: 3 },
    { id: 98, name: "Hobbiton", country: "New Zealand", city: "Matamata", continent: "Oceania", image: "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?w=400", difficulty: 3 },
    { id: 99, name: "Bora Bora", country: "French Polynesia", city: "Bora Bora", continent: "Oceania", image: "https://images.unsplash.com/photo-1568094351762-42b2c8bf7a32?w=400", difficulty: 2 },
    { id: 100, name: "Great Mosque of Djenné", country: "Mali", city: "Djenné", continent: "Africa", image: "https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=400", difficulty: 3 },
    { id: 101, name: "Stone Town", country: "Tanzania", city: "Zanzibar", continent: "Africa", image: "https://images.unsplash.com/photo-1568322445389-f64ac2515020?w=400", difficulty: 3 },
    { id: 102, name: "Cappadocia", country: "Turkey", city: "Nevşehir", continent: "Asia", image: "https://images.unsplash.com/photo-1565689157206-0fddef7589a2?w=400", difficulty: 2 },
    { id: 103, name: "Pamukkale", country: "Turkey", city: "Denizli", continent: "Asia", image: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=400", difficulty: 3 },
    { id: 104, name: "Sigiriya Rock", country: "Sri Lanka", city: "Dambulla", continent: "Asia", image: "https://images.unsplash.com/photo-1568322445389-f64ac2515020?w=400", difficulty: 3 },
    { id: 105, name: "Giant Buddha", country: "Hong Kong", city: "Lantau Island", continent: "Asia", image: "https://images.unsplash.com/photo-1550850839-8dc894ed385a?w=400", difficulty: 3 }
];

// Helper functions
const LandmarkData = {
    getAll() {
        return LANDMARKS;
    },
    
    getById(id) {
        return LANDMARKS.find(l => l.id === id);
    },
    
    getByCountry(country) {
        return LANDMARKS.filter(l => l.country === country);
    },
    
    getByContinent(continent) {
        return LANDMARKS.filter(l => l.continent === continent);
    },
    
    getByDifficulty(level) {
        return LANDMARKS.filter(l => l.difficulty === level);
    },
    
    getRandom(count = 1) {
        const shuffled = [...LANDMARKS].sort(() => Math.random() - 0.5);
        return count === 1 ? shuffled[0] : shuffled.slice(0, count);
    }
};

window.LANDMARKS = LANDMARKS;
window.LandmarkData = LandmarkData;
