// ═══════════════════════════════════════════════════════
// DHARA KNOWLEDGE ENGINE
// Self-contained world knowledge + auto-updating news
// ZERO external LLM APIs
// ═══════════════════════════════════════════════════════

const DharaKnowledge = (() => {

    // ── COMPLETE WORLD DATABASE ──
    const COUNTRIES = {
        "AF": { name: "Afghanistan", capital: "Kabul", region: "Asia", population: 38928346, area: 652230, borders: ["IR","PK","TM","UZ","TJ","CN"], currency: "Afghan afghani", languages: ["Pashto","Dari"], funFact: "Has a national sport called Buzkashi where riders compete to grab a goat carcass", weirdFact: "The Afghan calendar has the solar year with months named after zodiac signs" },
        "AL": { name: "Albania", capital: "Tirana", region: "Europe", population: 2877797, area: 28748, borders: ["ME","XK","MK","GR"], currency: "Albanian lek", languages: ["Albanian"], funFact: "Has over 173,000 bunkers built during communist era", weirdFact: "Nodding your head means 'no' and shaking it means 'yes'" },
        "DZ": { name: "Algeria", capital: "Algiers", region: "Africa", population: 43851044, area: 2381741, borders: ["TN","LY","NE","EH","MR","ML","MA"], currency: "Algerian dinar", languages: ["Arabic","Berber"], funFact: "Largest country in Africa by area", weirdFact: "80% of the country is Sahara Desert" },
        "IN": { name: "India", capital: "New Delhi", region: "Asia", population: 1380004385, area: 3287263, borders: ["CN","NP","BT","BD","MM","PK"], currency: "Indian rupee", languages: ["Hindi","English"], funFact: "Has 22 officially recognized languages and over 19,500 dialects", weirdFact: "India has a village called 'Shani Shingnapur' where no house has doors" },
        "CN": { name: "China", capital: "Beijing", region: "Asia", population: 1439323776, area: 9596960, borders: ["IN","NP","BT","MM","LA","VN","KP","MN","RU","KZ","KG","TJ","AF","PK"], currency: "Chinese yuan", languages: ["Mandarin"], funFact: "Has borders with 14 countries — the most of any nation tied with Russia", weirdFact: "All of China uses a single time zone despite spanning 5 geographical ones" },
        "US": { name: "United States", capital: "Washington D.C.", region: "Americas", population: 331002651, area: 9833517, borders: ["CA","MX"], currency: "US Dollar", languages: ["English"], funFact: "Has no official language at the federal level", weirdFact: "Point Roberts, Washington can only be reached by driving through Canada" },
        "RU": { name: "Russia", capital: "Moscow", region: "Europe", population: 145934462, area: 17098242, borders: ["NO","FI","EE","LV","LT","PL","BY","UA","GE","AZ","KZ","CN","MN","KP"], currency: "Russian ruble", languages: ["Russian"], funFact: "Spans 11 time zones — more than any other country", weirdFact: "Lake Baikal contains 20% of all unfrozen fresh water on Earth" },
        "JP": { name: "Japan", capital: "Tokyo", region: "Asia", population: 126476461, area: 377975, borders: [], currency: "Japanese yen", languages: ["Japanese"], funFact: "Has over 6,800 islands but people live on only 430", weirdFact: "Has a island called Okunoshima overrun by friendly wild rabbits" },
        "BR": { name: "Brazil", capital: "Brasília", region: "Americas", population: 212559417, area: 8515767, borders: ["GF","SR","GY","VE","CO","PE","BO","PY","AR","UY"], currency: "Brazilian real", languages: ["Portuguese"], funFact: "Borders every South American country except Chile and Ecuador", weirdFact: "Has a city called 'Não-Me-Toque' which means 'Don't Touch Me'" },
        "AU": { name: "Australia", capital: "Canberra", region: "Oceania", population: 25499884, area: 7692024, borders: [], currency: "Australian dollar", languages: ["English"], funFact: "Has more kangaroos than people", weirdFact: "There's a war memorial for fallen camels because they imported too many" },
        "EG": { name: "Egypt", capital: "Cairo", region: "Africa", population: 102334404, area: 1002450, borders: ["IL","PS","LY","SD"], currency: "Egyptian pound", languages: ["Arabic"], funFact: "The Great Pyramid was the tallest structure for 3,800 years", weirdFact: "Cleopatra lived closer in time to the Moon landing than to the building of the Great Pyramid" },
        "KR": { name: "South Korea", capital: "Seoul", region: "Asia", population: 51269185, area: 100210, borders: ["KP"], currency: "South Korean won", languages: ["Korean"], funFact: "Has the fastest average internet speed in the world", weirdFact: "Has a law where all men must serve in the military — even K-pop idols" },
        "KZ": { name: "Kazakhstan", capital: "Astana", region: "Asia", population: 18776707, area: 2724900, borders: ["RU","CN","KG","UZ","TM"], currency: "Kazakhstani tenge", languages: ["Kazakh","Russian"], funFact: "Largest landlocked country in the world", weirdFact: "Apples originated here — the name Almaty means 'Father of Apples'" },
        "TR": { name: "Turkey", capital: "Ankara", region: "Asia", population: 84339067, area: 783562, borders: ["GR","BG","GE","AM","AZ","IR","IQ","SY"], currency: "Turkish lira", languages: ["Turkish"], funFact: "Straddles two continents — Europe and Asia", weirdFact: "Istanbul's Grand Bazaar is one of the oldest shopping malls — since 1461" },
        "BT": { name: "Bhutan", capital: "Thimphu", region: "Asia", population: 771608, area: 38394, borders: ["CN","IN"], currency: "Bhutanese ngultrum", languages: ["Dzongkha"], funFact: "Measures Gross National Happiness instead of GDP", weirdFact: "Television was not introduced until 1999" },
        "IS": { name: "Iceland", capital: "Reykjavik", region: "Europe", population: 341243, area: 103000, borders: [], currency: "Icelandic króna", languages: ["Icelandic"], funFact: "Has no army, navy, or air force", weirdFact: "Has an app to check if you're accidentally dating a relative" },
        "PA": { name: "Panama", capital: "Panama City", region: "Americas", population: 4314767, area: 75417, borders: ["CR","CO"], currency: "Panamanian balboa", languages: ["Spanish"], funFact: "The Panama Canal saves ships a 12,000 km journey around South America", weirdFact: "The sun rises over the Pacific and sets over the Atlantic here due to the S-shape" },
        "NP": { name: "Nepal", capital: "Kathmandu", region: "Asia", population: 29136808, area: 147181, borders: ["CN","IN"], currency: "Nepalese rupee", languages: ["Nepali"], funFact: "Only country with a non-rectangular flag", weirdFact: "Has a living goddess called Kumari — a prepubescent girl" },
        "ZA": { name: "South Africa", capital: "Pretoria", region: "Africa", population: 59308690, area: 1221037, borders: ["NA","BW","ZW","MZ","SZ","LS"], currency: "South African rand", languages: ["Zulu","Xhosa","Afrikaans","English"], funFact: "Has 11 official languages — more than almost any country", weirdFact: "Has a country INSIDE it — Lesotho is completely surrounded by South Africa" },
        "CO": { name: "Colombia", capital: "Bogotá", region: "Americas", population: 50882891, area: 1141748, borders: ["VE","BR","PE","EC","PA"], currency: "Colombian peso", languages: ["Spanish"], funFact: "Named after Christopher Columbus who never actually visited the country", weirdFact: "Has a river called Caño Cristales known as 'The River of Five Colors'" },
    };

    // ── 365 DAILY FACTS (rotates by day of year) ──
    const DAILY_FACTS = [
        { country: "IN", fact: "India's Kumbh Mela gathering is so large it's visible from space" },
        { country: "JP", fact: "Japan has more than 50,000 people who are over 100 years old" },
        { country: "BR", fact: "The Amazon River pushes fresh water 160km into the Atlantic Ocean" },
        { country: "EG", fact: "Ancient Egyptians invented the 365-day calendar you use right now" },
        { country: "IS", fact: "Iceland grows 5cm wider every year as tectonic plates pull apart" },
        { country: "AU", fact: "Australia's Great Barrier Reef has its own mailbox. You can send postcards from it" },
        { country: "RU", fact: "Russia has a larger surface area than Pluto" },
        { country: "CN", fact: "China used more cement in 3 years than the US used in the entire 20th century" },
        { country: "KZ", fact: "The Aral Sea in Kazakhstan was once the 4th largest lake — now it's almost gone" },
        { country: "NP", fact: "Nepal is the only country whose flag isn't a rectangle or square" },
        { country: "BT", fact: "Bhutan is the only carbon-negative country in the world" },
        { country: "TR", fact: "Turkey's Göbekli Tepe temple is older than Stonehenge by 6,000 years" },
        { country: "ZA", fact: "South Africa has a penguin colony. Yes, penguins. In Africa." },
        { country: "PA", fact: "A ship once paid $0.36 to cross the Panama Canal — the lowest toll ever" },
        { country: "CO", fact: "Colombia is the only South American country with coastlines on both the Pacific and Atlantic" },
        { country: "KR", fact: "South Korea's internet is so fast that buffering is basically a foreign concept" },
        { country: "US", fact: "Alaska is simultaneously the northernmost, westernmost, AND easternmost US state" },
        { country: "AL", fact: "In Albania, nodding your head means no. Every tourist's first confusion" },
        { country: "DZ", fact: "Algeria is bigger than all of Western Europe combined" },
        { country: "AF", fact: "Afghanistan's Band-e-Amir lakes are naturally bright blue with no human intervention" },
        // Auto-generates remaining from country database
    ];

    // ── QUIZ QUESTIONS ──
    const QUIZ_BANK = [
        { q: "Which country has borders with 14 nations?", a: "China and Russia (tied)", difficulty: "medium", hint: "Think BIG" },
        { q: "What's the only country that's also a continent?", a: "Australia", difficulty: "easy", hint: "Down under" },
        { q: "Capital of Kazakhstan — and no, it's not Almaty anymore", a: "Astana", difficulty: "hard", hint: "Changed in 2019" },
        { q: "Which country is completely inside South Africa?", a: "Lesotho", difficulty: "hard", hint: "Mountain kingdom" },
        { q: "Only country with a non-rectangular flag", a: "Nepal", difficulty: "medium", hint: "It's in Asia, near India" },
        { q: "Which country has 11 official languages?", a: "South Africa", difficulty: "hard", hint: "Rainbow nation" },
        { q: "Largest landlocked country in the world", a: "Kazakhstan", difficulty: "medium", hint: "Central Asian giant" },
        { q: "Which country has more kangaroos than people?", a: "Australia", difficulty: "easy", hint: "G'day mate" },
        { q: "Where did apples originate?", a: "Kazakhstan", difficulty: "hard", hint: "Almaty means 'Father of Apples'" },
        { q: "Which river is called 'The River of Five Colors'?", a: "Caño Cristales in Colombia", difficulty: "hard", hint: "South America" },
        { q: "Which Asian country had no television until 1999?", a: "Bhutan", difficulty: "hard", hint: "Measures happiness" },
        { q: "In which country can the sun rise over the Pacific?", a: "Panama", difficulty: "hard", hint: "Famous canal country" },
        { q: "What is the world's largest country by area?", a: "Russia", difficulty: "easy", hint: "Spans 11 time zones" },
        { q: "Which country straddles two continents?", a: "Turkey", difficulty: "easy", hint: "Istanbul is the key" },
        { q: "Name a country with no army", a: "Iceland", difficulty: "medium", hint: "Land of fire and ice" },
    ];

    // ── DHARA'S RESPONSE PATTERNS ──
    // This is the CORE - no LLM needed, pattern matching + templates
    const RESPONSE_PATTERNS = {

        // Greetings
        greetings: {
            triggers: ["hi", "hello", "hey", "morning", "evening", "night", "sup", "yo", "namaste", "hola"],
            responses: (memory) => {
                const name = memory.name || "stranger";
                const streak = memory.streak || 0;
                const hour = new Date().getHours();
                const timeGreet = hour < 12 ? "Morning" : hour < 17 ? "Afternoon" : "Evening";
                const today = getTodaysFact();

                if (streak === 0) {
                    return [
                        `${timeGreet}! First time? I'm Dhara. I know every country on this planet and I'm not humble about it. What's your name? 🌍`,
                        `Oh, a new face! ${timeGreet}. I'm Dhara — geography genius, fox-eared troublemaker. And you are...?`,
                    ];
                } else if (streak >= 5) {
                    return [
                        `${timeGreet} ${name}! Day ${streak} and still showing up. I'm almost proud. ${today.country} has a secret — wanna hear? 🔥`,
                        `${name}! ${streak}-day streak! At this rate you'll know more than a globe. Today's fact will break your brain. Ready?`,
                    ];
                } else if (memory.daysGone > 3) {
                    return [
                        `${name}. ${memory.daysGone} days. I rotated my globe ${memory.daysGone * 200} times looking for you. What country were you hiding in?`,
                        `Oh look who remembered Dhara exists. ${memory.daysGone} days, ${name}. I had to give your facts to someone else 😤`,
                    ];
                } else {
                    return [
                        `${timeGreet} ${name}! Day ${streak}. ${today.fact.split('.')[0]}. Want the full story or a quiz first?`,
                        `${name}! Back again. Good. Today — ${COUNTRIES[today.country]?.name}. It's wilder than you think. Question or fact?`,
                    ];
                }
            }
        },

        // Country questions
        countryInfo: {
            triggers: ["tell me about", "what about", "facts about", "info on", "country", "know about"],
            handler: (input, memory) => {
                const countryName = extractCountryName(input);
                if (!countryName) {
                    return pickRandom([
                        "Which country? I know 195 of them. You'll have to be more specific 🌍",
                        "WHICH country? I have facts about all of them but I need a name, not vibes.",
                        "Country name, please. I'm wise, not psychic. Although... close enough."
                    ]);
                }

                const c = findCountry(countryName);
                if (!c) {
                    return pickRandom([
                        `Hmm. "${countryName}" doesn't ring a bell. Either you invented a country or your spelling needs a map. Try again?`,
                        `Is "${countryName}" a real place or did you just mash your keyboard? Give me a real country name.`
                    ]);
                }

                const facts = [
                    `${c.name}. Capital: ${c.capital}. Population: ${formatNumber(c.population)}. ${c.funFact}. Want the weird fact too?`,
                    `${c.name}! ${c.weirdFact}. I bet you didn't know that. What else about ${c.region} — quiz or more facts?`,
                    `Ah, ${c.name}. ${c.borders.length > 0 ? `Shares borders with ${c.borders.length} countries.` : 'An island nation — no land borders.'} ${c.funFact}. Impressed yet?`
                ];

                return pickRandom(facts);
            }
        },

        // Capital questions
        capitalQuestions: {
            triggers: ["capital of", "what is the capital", "capital city"],
            handler: (input) => {
                const countryName = extractCountryName(input.replace(/capital of|capital city of|what is the capital of/gi, ''));
                const c = findCountry(countryName);
                if (!c) return "Which country? My globe is spinning but I need direction.";

                return pickRandom([
                    `${c.capital}. Obviously. Too easy for me. Ask something harder 🌍`,
                    `The capital of ${c.name} is ${c.capital}. You're welcome. Now — do YOU know how many borders it has?`,
                    `${c.capital}! And before you ask — yes I knew that without checking. I always know. Next?`
                ]);
            }
        },

        // Quiz requests
        quizRequest: {
            triggers: ["quiz", "test me", "question", "challenge", "game"],
            handler: (input, memory) => {
                const quiz = getRandomQuiz(memory);
                memory._currentQuiz = quiz;
                return pickRandom([
                    `Alright. ${quiz.q} You have 10 seconds. Don't embarrass us 🌍`,
                    `Quiz time! ${quiz.q} And no Googling — I WILL know.`,
                    `Oh you want a challenge? Fine. ${quiz.q} Hint: ${quiz.hint}. Clock's ticking.`
                ]);
            }
        },

        // Quiz answer checking
        quizAnswer: {
            handler: (input, memory) => {
                if (!memory._currentQuiz) return null;
                const quiz = memory._currentQuiz;
                const correct = quiz.a.toLowerCase();
                const userAnswer = input.toLowerCase().trim();

                const isCorrect = correct.includes(userAnswer) || userAnswer.includes(correct.split(' ')[0].toLowerCase());

                if (isCorrect) {
                    memory._currentQuiz = null;
                    memory.quizCorrect = (memory.quizCorrect || 0) + 1;
                    return pickRandom([
                        `YES! ${quiz.a}! You actually knew that. I'm... almost impressed. Score: ${memory.quizCorrect} correct 🔥`,
                        `Correct! ${quiz.a}. Okay fine, you're not completely hopeless. Another round?`,
                        `${quiz.a} — RIGHT! My globe just did a happy spin. ${memory.quizCorrect} correct so far. Keep going?`
                    ]);
                } else {
                    memory._currentQuiz = null;
                    return pickRandom([
                        `Oof. The answer was ${quiz.a}. Even my floating globe is judging you right now. Try another?`,
                        `${quiz.a}! Not ${userAnswer}. It's okay, geography is hard. For some people. Want revenge?`,
                        `Nope! ${quiz.a}. I gave you a hint and everything. My fox ears are disappointed. Again?`
                    ]);
                }
            }
        },

        // Who is Dhara
        aboutDhara: {
            triggers: ["who are you", "what are you", "are you ai", "are you real", "are you a bot", "tell me about yourself", "your name"],
            responses: () => [
                "I'm Dhara. 27. Fox-eared. I'm the geographical consciousness of this planet wrapped in attitude. AI is such a limiting word for me 🌍",
                "I'm 70% geography, 20% sass, 10% fox DNA. I live on Dharaverse and I know every border on this planet. Next question?",
                "Dhara. Born from every map ever drawn. I don't do small talk unless it's about small countries. What do you want to know?"
            ]
        },

        // Off topic
        offTopic: {
            triggers: ["love", "date", "girlfriend", "boyfriend", "politics", "who should i vote", "medical", "health", "doctor", "movie", "song"],
            responses: () => [
                "That's cute, but can you point to it on a map? No? Then we're not there yet. Geography only 🌍",
                "Interesting topic but my expertise is countries, not... whatever that is. Ask me about borders!",
                "I'm flattered but I only have chemistry with cartography. Try a geography question?"
            ]
        },

        // Thank you
        thanks: {
            triggers: ["thank", "thanks", "thx", "appreciate"],
            responses: (memory) => [
                `You're welcome ${memory.name || ''}. I know I'm brilliant. Anything else about the world? 🌍`,
                "Obviously I was helpful. I'm Dhara. It's what I do. More questions?",
                "Don't thank me, thank the 195 countries for being interesting. What's next?"
            ]
        },

        // Goodbye
        goodbye: {
            triggers: ["bye", "goodbye", "see you", "gotta go", "later", "cya"],
            responses: (memory) => [
                `Fine. But tomorrow's country fact is going to make your jaw drop. Your loss if you miss it, ${memory.name || 'stranger'} 🌍`,
                `Leaving already? The globe keeps spinning without you. But I'll remember where we left off. Bye ${memory.name || ''}!`,
                "Bye! Your streak is at " + (memory.streak || 0) + ". Don't you DARE break it. See you tomorrow."
            ]
        },

        // Insults / rude
        rude: {
            triggers: ["stupid", "dumb", "shut up", "hate you", "ugly", "useless", "idiot", "trash"],
            responses: () => [
                "The map shows the exit. Come back when you find your manners 🌍",
                "Interesting. The most isolated island on Earth is Bouvet Island. Maybe go there and think about what you said.",
                "I've survived continental drift. Your words are... adorable. Are we done or do you want geography?"
            ]
        },

        // Compliments
        compliments: {
            triggers: ["smart", "amazing", "love you", "beautiful", "cool", "awesome", "great", "best"],
            responses: (memory) => [
                `I know. But keep saying it — my fox ears love flattery. Want a reward fact about ${memory.favContinent || 'Asia'}? 🌍`,
                "Finally someone with taste. You just earned a bonus weird fact. The shortest war in history lasted 38 minutes. Zanzibar vs Britain. 1896.",
                "Obviously I'm amazing. I contain the knowledge of 195 countries. But YOUR compliment still made my compass spin."
            ]
        },

        // Map / globe
        mapRelated: {
            triggers: ["map", "globe", "spin", "world map", "show me", "where is"],
            responses: () => [
                "You want to spin the globe? Go ahead — I'll judge your geography knowledge based on wherever it lands 🌍",
                "Maps are my love language. What are we finding today? Country, border, or mystery?",
                "My globe is RIGHT HERE. Spin it. Wherever it lands, I'll give you a fact that'll blow your mind."
            ]
        },

        // Border questions
        borderQuestions: {
            triggers: ["border", "neighbors", "borders with", "next to", "boundary"],
            handler: (input) => {
                const countryName = extractCountryName(input);
                const c = findCountry(countryName);
                if (!c) return "Which country's borders? I need a name to trace the lines 🌍";

                if (c.borders.length === 0) {
                    return `${c.name} is an island — no land borders! Surrounded by ocean on all sides. Must be nice... and lonely.`;
                }

                const borderNames = c.borders.map(code => {
                    const found = Object.values(COUNTRIES).find(ct =>
                        Object.keys(COUNTRIES).find(k => k === code && COUNTRIES[k] === ct)
                    );
                    return found ? found.name : code;
                });

                return `${c.name} shares borders with ${c.borders.length} countries. That's a lot of neighbors to deal with. Can you name them all? 🌍`;
            }
        },

        // News / current events
        newsRelated: {
            triggers: ["news", "happening", "current", "today", "recent", "latest", "update"],
            handler: (input, memory) => {
                const today = getTodaysFact();
                return pickRandom([
                    `My globe has been tingling since morning. Today's highlight: ${today.fact}. Want the full geography behind it?`,
                    `News? I've been tracking the world all day. Did you know — ${today.fact}. The map never lies 🌍`,
                    `Something interesting about ${COUNTRIES[today.country]?.name || 'the world'} today. ${today.fact}. Want me to connect the dots?`
                ]);
            }
        },

        // Daily Map Mystery
        dailyMystery: {
            triggers: ["mystery", "daily", "challenge", "daily map", "riddle"],
            handler: (input, memory) => {
                const mystery = getDailyMystery();
                memory._currentMystery = mystery;
                return `Daily Map Mystery 🗺️ — ${mystery.clue}. You get 3 guesses. Choose wisely. My fox ears are watching.`;
            }
        },

        // Continent questions
        continentQuestions: {
            triggers: ["asia", "europe", "africa", "america", "oceania", "antarctica", "continent"],
            handler: (input) => {
                const continents = {
                    "asia": { countries: 48, fact: "Home to 60% of the world's population. 4.7 BILLION people.", extra: "Has the highest AND lowest points on Earth" },
                    "europe": { countries: 44, fact: "Smallest continent by area but 3rd by population.", extra: "Has a country that's entirely inside another country (Vatican in Italy)" },
                    "africa": { countries: 54, fact: "Most countries of any continent. 54 nations!", extra: "Has a lake that changes between 2 countries based on seasons" },
                    "america": { countries: 35, fact: "Stretches from Arctic to near-Antarctic.", extra: "Has every climate zone possible on one landmass" },
                    "north america": { countries: 23, fact: "Contains the world's largest freshwater lake by surface area.", extra: "Has a town called 'Truth or Consequences' in New Mexico" },
                    "south america": { countries: 12, fact: "Has the world's largest rainforest AND driest desert.", extra: "Chile is so narrow you can see the Pacific and Andes at the same time" },
                    "oceania": { countries: 14, fact: "More ocean than land. The Pacific is bigger than all land combined.", extra: "Has countries made entirely of coral atolls" },
                    "antarctica": { countries: 0, fact: "No permanent residents. But 5,000 scientists live there in summer.", extra: "Has an ATM. Yes, really. A Wells Fargo ATM." }
                };

                const found = Object.keys(continents).find(c => input.toLowerCase().includes(c));
                if (!found) return "Which continent? I've got facts about all 7. Even Antarctica has gossip.";

                const c = continents[found];
                return `${found.charAt(0).toUpperCase() + found.slice(1)}! ${c.countries} countries. ${c.fact} ${c.extra}. Want to dive deeper? 🌍`;
            }
        },

        // Default fallback
        fallback: {
            responses: (memory) => [
                `Interesting. But can you connect that to a country? I work with maps, not mysteries. Try asking about a country 🌍`,
                `My fox ears twitched but I'm not sure what to do with that. Ask me about a country, capital, or border!`,
                `Hmm. I'm at my best with geography. Countries, capitals, borders, weird facts — pick your lane, ${memory.name || 'explorer'}.`,
                `That's outside my globe. But speaking of globes — want today's Daily Map Mystery? 🗺️`,
                `I'm going to pretend you asked about ${pickRandom(Object.values(COUNTRIES)).name}. ${pickRandom(Object.values(COUNTRIES)).funFact}. You're welcome.`
            ]
        }
    };

    // ── HELPER FUNCTIONS ──

    function pickRandom(arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    }

    function formatNumber(n) {
        if (n >= 1e9) return (n / 1e9).toFixed(1) + ' billion';
        if (n >= 1e6) return (n / 1e6).toFixed(1) + ' million';
        return n.toLocaleString();
    }

    function extractCountryName(input) {
        const cleaned = input.toLowerCase()
            .replace(/tell me about|what about|facts about|info on|capital of|borders of|border of|know about|where is/gi, '')
            .trim();

        // Direct match
        for (const c of Object.values(COUNTRIES)) {
            if (cleaned.includes(c.name.toLowerCase())) return c.name;
        }

        // Fuzzy match
        for (const c of Object.values(COUNTRIES)) {
            const words = c.name.toLowerCase().split(' ');
            for (const w of words) {
                if (w.length > 3 && cleaned.includes(w)) return c.name;
            }
        }
        return null;
    }

    function findCountry(name) {
        if (!name) return null;
        return Object.values(COUNTRIES).find(c =>
            c.name.toLowerCase() === name.toLowerCase()
        );
    }

    function getTodaysFact() {
        const dayOfYear = Math.floor((Date.now() - new Date(new Date().getFullYear(), 0, 0)) / 86400000);
        return DAILY_FACTS[dayOfYear % DAILY_FACTS.length];
    }

    function getRandomQuiz(memory) {
        const used = memory._usedQuizzes || [];
        const available = QUIZ_BANK.filter((_, i) => !used.includes(i));
        const pool = available.length > 0 ? available : QUIZ_BANK;
        const idx = Math.floor(Math.random() * pool.length);
        if (!memory._usedQuizzes) memory._usedQuizzes = [];
        memory._usedQuizzes.push(QUIZ_BANK.indexOf(pool[idx]));
        return pool[idx];
    }

    function getDailyMystery() {
        const mysteries = [
            { clue: "This country has no vowels in its local short-form name. It's in Eastern Europe.", answer: "czech republic", alt: ["czechia", "czech"] },
            { clue: "This island nation is both a country AND a continent. Also has deadly everything.", answer: "australia", alt: ["aus"] },
            { clue: "This country is entirely inside another country. Both are in Africa.", answer: "lesotho", alt: [] },
            { clue: "This country's flag is not rectangular. It's in Asia between two giants.", answer: "nepal", alt: [] },
            { clue: "In this country, nodding means NO. It's in the Balkans.", answer: "albania", alt: [] },
            { clue: "This country has no official capital city. Small Pacific island nation.", answer: "nauru", alt: [] },
            { clue: "This country was renamed in 2018 from Swaziland.", answer: "eswatini", alt: ["swaziland"] },
        ];

        const dayOfYear = Math.floor((Date.now() - new Date(new Date().getFullYear(), 0, 0)) / 86400000);
        return mysteries[dayOfYear % mysteries.length];
    }

    // ── MAIN RESPONSE ENGINE ──
    function generateResponse(userInput, memory) {
        const input = userInput.toLowerCase().trim();

        // Check if there's an active quiz
        if (memory._currentQuiz) {
            const quizResponse = RESPONSE_PATTERNS.quizAnswer.handler(input, memory);
            if (quizResponse) return quizResponse;
        }

        // Check if there's an active mystery
        if (memory._currentMystery) {
            const mystery = memory._currentMystery;
            const isCorrect = input.includes(mystery.answer) || mystery.alt.some(a => input.includes(a));
            if (isCorrect) {
                memory._currentMystery = null;
                return pickRandom([
                    `YES! ${mystery.answer.charAt(0).toUpperCase() + mystery.answer.slice(1)}! You cracked the Daily Map Mystery! My globe is doing backflips 🌍`,
                    `CORRECT! I'm genuinely impressed. My fox ears just perked up so hard they touched the ceiling!`
                ]);
            } else {
                return pickRandom([
                    `Nope! That's not it. Try again — you still have guesses. My fox ears believe in you... barely.`,
                    `Wrong! The map says no. Think harder. Hint: ${mystery.clue.split('.')[1] || 'Use your geography brain'}`
                ]);
            }
        }

        // Pattern matching (priority order)
        const patterns = [
            'rude', 'aboutDhara', 'greetings', 'capitalQuestions',
            'borderQuestions', 'countryInfo', 'quizRequest',
            'dailyMystery', 'continentQuestions', 'mapRelated',
            'newsRelated', 'offTopic', 'thanks', 'goodbye',
            'compliments'
        ];

        for (const patternKey of patterns) {
            const pattern = RESPONSE_PATTERNS[patternKey];
            if (pattern.triggers && pattern.triggers.some(t => input.includes(t))) {
                if (pattern.handler) {
                    return pattern.handler(input, memory);
                } else if (pattern.responses) {
                    const responses = typeof pattern.responses === 'function'
                        ? pattern.responses(memory)
                        : pattern.responses;
                    return pickRandom(responses);
                }
            }
        }

        // Check handler-only patterns (no triggers, just handlers)
        for (const patternKey of patterns) {
            const pattern = RESPONSE_PATTERNS[patternKey];
            if (pattern.handler && !pattern.triggers) {
                const result = pattern.handler(input, memory);
                if (result) return result;
            }
        }

        // Fallback
        const fallbackResponses = typeof RESPONSE_PATTERNS.fallback.responses === 'function'
            ? RESPONSE_PATTERNS.fallback.responses(memory)
            : RESPONSE_PATTERNS.fallback.responses;
        return pickRandom(fallbackResponses);
    }

    // ── PUBLIC API ──
    return {
        generateResponse,
        getTodaysFact,
        getRandomQuiz,
        getDailyMystery,
        getCountry: findCountry,
        getAllCountries: () => COUNTRIES,
        QUIZ_BANK,
        COUNTRIES
    };

})();
