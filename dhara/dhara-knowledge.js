// /dhara/dhara-knowledge.js
// ═══════════════════════════════════════════════════════
// DHARA KNOWLEDGE - Countries database
// ═══════════════════════════════════════════════════════

window.DharaKnowledge = {

    COUNTRIES: {
        "japan": { name: "Japan", capital: "Tokyo", fact: "It has over 6,800 islands", weird: "There's an island overrun by friendly rabbits" },
        "india": { name: "India", capital: "New Delhi", fact: "It has 22 official languages", weird: "There's a village where no house has doors" },
        "brazil": { name: "Brazil", capital: "Brasilia", fact: "It borders almost every South American country", weird: "There's a town called Don't Touch Me" },
        "france": { name: "France", capital: "Paris", fact: "It's the most visited country in the world", weird: "It has time zones in every continent" },
        "egypt": { name: "Egypt", capital: "Cairo", fact: "The Great Pyramid was tallest for 3,800 years", weird: "Cleopatra lived closer to the Moon landing than to the Pyramids" },
        "australia": { name: "Australia", capital: "Canberra", fact: "It has more kangaroos than people", weird: "The Great Barrier Reef has its own mailbox" },
        "china": { name: "China", capital: "Beijing", fact: "It shares borders with 14 countries", weird: "All of China uses one time zone" },
        "russia": { name: "Russia", capital: "Moscow", fact: "It spans 11 time zones", weird: "Lake Baikal has 20 percent of Earth's fresh water" },
        "iceland": { name: "Iceland", capital: "Reykjavik", fact: "It has no army", weird: "There's an app to check if you're dating a relative" },
        "bhutan": { name: "Bhutan", capital: "Thimphu", fact: "It measures happiness instead of GDP", weird: "Television wasn't allowed until 1999" },
        "usa": { name: "United States", capital: "Washington DC", fact: "It has no official federal language", weird: "Point Roberts can only be reached through Canada" },
        "germany": { name: "Germany", capital: "Berlin", fact: "It has over 1,500 types of beer", weird: "Has a university running since 1386" },
        "italy": { name: "Italy", capital: "Rome", fact: "It has more UNESCO sites than any country", weird: "Has a free wine fountain running 24 hours a day" },
        "spain": { name: "Spain", capital: "Madrid", fact: "It has the second most UNESCO sites", weird: "Afternoon naps are a tradition" },
        "nepal": { name: "Nepal", capital: "Kathmandu", fact: "It's the only country with a non-rectangular flag", weird: "Has a living goddess called Kumari" },
        "kazakhstan": { name: "Kazakhstan", capital: "Astana", fact: "It's the largest landlocked country", weird: "Apples originated here" },
        "turkey": { name: "Turkey", capital: "Ankara", fact: "It spans two continents", weird: "The Grand Bazaar has been a mall since 1461" },
        "korea": { name: "South Korea", capital: "Seoul", fact: "It has the fastest internet globally", weird: "All men must serve in military, even K-pop stars" }
    },

    QUIZ: [
        { q: "Which country shares borders with 14 nations?", a: "china" },
        { q: "Only country that's also a continent?", a: "australia" },
        { q: "Capital of Kazakhstan?", a: "astana" },
        { q: "Country with non-rectangular flag?", a: "nepal" },
        { q: "Largest country by area?", a: "russia" },
        { q: "Country with no army?", a: "iceland" },
        { q: "Country that measures happiness instead of GDP?", a: "bhutan" }
    ],

    findCountry: function(text) {
        var low = text.toLowerCase();
        for (var k in this.COUNTRIES) {
            if (low.indexOf(k) !== -1) return this.COUNTRIES[k];
        }
        return null;
    }
};

console.log('🦊 Dhara Knowledge loaded');
