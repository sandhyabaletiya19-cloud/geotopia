// /dhara/dhara-knowledge.js
// ═══════════════════════════════════════════════════════
// DHARA KNOWLEDGE - World Database + Wikipedia + REST Countries
// ═══════════════════════════════════════════════════════

window.DharaKnowledge = (function() {

    // ───────────────────────────────────────
    // CORE COUNTRY DATABASE (Offline fallback)
    // ───────────────────────────────────────
    var COUNTRIES = {
        "india": { name: "India", capital: "New Delhi", region: "South Asia", fact: "Largest democracy on Earth with 1.4 billion people", weird: "India has the highest number of post offices in the world" },
        "japan": { name: "Japan", capital: "Tokyo", region: "East Asia", fact: "An archipelago of 6,852 islands", weird: "Japan has more than 70,000 convenience stores" },
        "france": { name: "France", capital: "Paris", region: "Western Europe", fact: "Most visited country in the world", weird: "France has a town called Y" },
        "brazil": { name: "Brazil", capital: "Brasilia", region: "South America", fact: "Largest country in South America", weird: "Brazil borders every South American country except Chile and Ecuador" },
        "egypt": { name: "Egypt", capital: "Cairo", region: "North Africa", fact: "Home to the only surviving ancient wonder", weird: "Ancient Egyptians used stone pillows" },
        "australia": { name: "Australia", capital: "Canberra", region: "Oceania", fact: "Both a country and a continent", weird: "Australia has over 10,000 beaches" },
        "russia": { name: "Russia", capital: "Moscow", region: "Eastern Europe", fact: "Largest country by area spanning 11 time zones", weird: "Russia has more surface area than Pluto" },
        "china": { name: "China", capital: "Beijing", region: "East Asia", fact: "Most populous country until recently", weird: "China uses 45 billion chopsticks per year" },
        "germany": { name: "Germany", capital: "Berlin", region: "Central Europe", fact: "Largest economy in Europe", weird: "There are over 1,500 types of beer in Germany" },
        "canada": { name: "Canada", capital: "Ottawa", region: "North America", fact: "Second largest country by total area", weird: "Canada has more lakes than all other countries combined" },
        "mexico": { name: "Mexico", capital: "Mexico City", region: "North America", fact: "Introduced chocolate and chili to the world", weird: "Mexico City is sinking at a rate of 10 inches per year" },
        "south korea": { name: "South Korea", capital: "Seoul", region: "East Asia", fact: "One of the Four Asian Tigers", weird: "South Korea has a separate Valentine's Day for single people" },
        "italy": { name: "Italy", capital: "Rome", region: "Southern Europe", fact: "Has more UNESCO World Heritage Sites than any other country", weird: "Italy has a free wine fountain that operates 24 hours a day" },
        "united kingdom": { name: "United Kingdom", capital: "London", region: "Northern Europe", fact: "The sun once never set on the British Empire", weird: "The Queen had two birthdays" },
        "turkey": { name: "Turkey", capital: "Ankara", region: "Transcontinental", fact: "Straddles two continents", weird: "Istanbul is the only city in the world on two continents" },
        "saudi arabia": { name: "Saudi Arabia", capital: "Riyadh", region: "Middle East", fact: "Largest country in the Middle East", weird: "Saudi Arabia imports camels from Australia" },
        "argentina": { name: "Argentina", capital: "Buenos Aires", region: "South America", fact: "Named after the Latin word for silver", weird: "Argentina has the widest avenue in the world" },
        "nigeria": { name: "Nigeria", capital: "Abuja", region: "West Africa", fact: "Most populous country in Africa", weird: "Nigeria has over 500 living languages" },
        "pakistan": { name: "Pakistan", capital: "Islamabad", region: "South Asia", fact: "Home to K2, the second-highest mountain", weird: "Pakistan has the world's largest ambulance network" },
        "indonesia": { name: "Indonesia", capital: "Jakarta", region: "Southeast Asia", fact: "Largest archipelago nation with 17,000 islands", weird: "Indonesia is home to the shortest people in the world on average" },
        "thailand": { name: "Thailand", capital: "Bangkok", region: "Southeast Asia", fact: "Never been colonized by a European power", weird: "Bangkok's full ceremonial name has 168 letters" },
        "vietnam": { name: "Vietnam", capital: "Hanoi", region: "Southeast Asia", fact: "World's largest exporter of cashew nuts", weird: "Vietnam has the world's largest cave" },
        "spain": { name: "Spain", capital: "Madrid", region: "Southern Europe", fact: "Has the second-highest number of bars per capita", weird: "Spain's national anthem has no lyrics" },
        "nepal": { name: "Nepal", capital: "Kathmandu", region: "South Asia", fact: "Home to Mount Everest", weird: "Nepal's flag is the only non-rectangular national flag" },
        "iceland": { name: "Iceland", capital: "Reykjavik", region: "Northern Europe", fact: "Has the world's oldest parliament", weird: "Iceland has no standing army" },
        "switzerland": { name: "Switzerland", capital: "Bern", region: "Central Europe", fact: "Has four official languages", weird: "Switzerland has enough nuclear shelters for its entire population" },
        "new zealand": { name: "New Zealand", capital: "Wellington", region: "Oceania", fact: "First country to give women the right to vote", weird: "There are more sheep than people in New Zealand" },
        "south africa": { name: "South Africa", capital: "Pretoria", region: "Southern Africa", fact: "Has three capital cities", weird: "South Africa has 11 official languages" },
        "kenya": { name: "Kenya", capital: "Nairobi", region: "East Africa", fact: "Named after Mount Kenya", weird: "Kenya produces most of the world's roses" },
        "morocco": { name: "Morocco", capital: "Rabat", region: "North Africa", fact: "Gateway between Europe and Africa", weird: "Morocco has the oldest university in the world" }
    };

    // ───────────────────────────────────────
    // QUIZ DATABASE
    // ───────────────────────────────────────
    var QUIZ = [
        { q: "Which country has the most time zones?", a: "france" },
        { q: "What is the smallest country in the world?", a: "vatican city" },
        { q: "Which country is known as the Land of the Rising Sun?", a: "japan" },
        { q: "What is the largest desert in the world?", a: "sahara" },
        { q: "Which river is the longest in the world?", a: "nile" },
        { q: "Which country has the most islands?", a: "sweden" },
        { q: "What is the driest continent?", a: "antarctica" },
        { q: "Which African country was never colonized?", a: "ethiopia" },
        { q: "What is the capital of Australia?", a: "canberra" },
        { q: "Which country spans the most continents?", a: "russia" },
        { q: "What is the deepest lake in the world?", a: "baikal" },
        { q: "Which country has the longest coastline?", a: "canada" },
        { q: "What is the highest capital city in the world?", a: "la paz" },
        { q: "Which strait separates Europe from Africa?", a: "gibraltar" },
        { q: "Which country is called the Land of Thunder Dragon?", a: "bhutan" },
        { q: "What is the largest landlocked country?", a: "kazakhstan" },
        { q: "Which country has the most volcanoes?", a: "indonesia" },
        { q: "What is the largest island in the world?", a: "greenland" },
        { q: "Which two countries share the longest border?", a: "canada" },
        { q: "What is the only country named after a woman?", a: "saint lucia" }
    ];

    // ───────────────────────────────────────
    // WIKIPEDIA API (100% Free, no key)
    // ───────────────────────────────────────
    function fetchWiki(topic, callback) {
        var url = 'https://en.wikipedia.org/api/rest_v1/page/summary/' + encodeURIComponent(topic);
        
        fetch(url)
            .then(function(res) { return res.json(); })
            .then(function(data) {
                if (data.extract) {
                    // Get first 2 sentences only
                    var sentences = data.extract.split('. ');
                    var summary = sentences.slice(0, 2).join('. ');
                    if (!summary.endsWith('.')) summary += '.';
                    callback(summary);
                } else {
                    callback(null);
                }
            })
            .catch(function() {
                callback(null);
            });
    }

    // ───────────────────────────────────────
    // REST COUNTRIES API (100% Free, no key)
    // ───────────────────────────────────────
    function fetchCountryAPI(countryName, callback) {
        var url = 'https://restcountries.com/v3.1/name/' + encodeURIComponent(countryName);
        
        fetch(url)
            .then(function(res) { return res.json(); })
            .then(function(data) {
                if (data && data[0]) {
                    var c = data[0];
                    var currencies = c.currencies ? Object.values(c.currencies)[0].name : 'unknown';
                    var languages = c.languages ? Object.values(c.languages).slice(0, 3).join(', ') : 'unknown';
                    callback({
                        name: c.name.common,
                        capital: c.capital ? c.capital[0] : 'unknown',
                        population: c.population ? c.population.toLocaleString() : 'unknown',
                        region: c.region || 'unknown',
                        subregion: c.subregion || 'unknown',
                        currency: currencies,
                        languages: languages,
                        borders: c.borders ? c.borders.length + ' countries' : 'none',
                        area: c.area ? c.area.toLocaleString() + ' km²' : 'unknown'
                    });
                } else {
                    callback(null);
                }
            })
            .catch(function() {
                callback(null);
            });
    }

    // ───────────────────────────────────────
    // FIND COUNTRY IN LOCAL DATABASE
    // ───────────────────────────────────────
    function findCountry(text) {
        var low = text.toLowerCase();
        for (var key in COUNTRIES) {
            if (low.indexOf(key) !== -1) return COUNTRIES[key];
        }
        return null;
    }

    // ───────────────────────────────────────
    // PUBLIC API
    // ───────────────────────────────────────
    return {
        COUNTRIES: COUNTRIES,
        QUIZ: QUIZ,
        findCountry: findCountry,
        fetchWiki: fetchWiki,
        fetchCountryAPI: fetchCountryAPI
    };

})();

console.log('🦊 Dhara Knowledge loaded — Wikipedia + REST Countries connected');
