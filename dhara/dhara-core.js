// /dhara/dhara-core.js
window.DharaCore = (function() {

    var MEM_KEY = 'dhara_mem_v8';
    var mem;
    var activeQuiz = null;
    var synth = window.speechSynthesis;
    var voice = null;
    var recognition = null;
    var isSpeaking = false;
    var isProcessing = false;

    var idleMessages = [
        "Still here. Ask me something.",
        "47 countries are landlocked. How many can you name?",
        "The longest border in the world is between Canada and the US.",
        "Most people cannot name 10 African capitals. Can you?",
        "Antarctica has no government and no permanent population.",
        "The Pacific Ocean is larger than all landmasses combined.",
        "Russia spans 11 time zones. Think about that.",
        "There are 195 countries. I know all of them.",
        "The Dead Sea is not a sea. It is a lake.",
        "Greenland has a population of only 56,000.",
        "Only two countries have purple in their flag.",
        "Africa has 54 countries. Name five right now.",
        "The shortest border in the world is between Zambia and Botswana."
    ];

    // ───────────────────────────────────────
    // MEMORY
    // ───────────────────────────────────────
    function loadMem() {
        try {
            mem = JSON.parse(localStorage.getItem(MEM_KEY)) ||
                  { name: null, streak: 0, visits: 0, lastSeen: null, questionsAsked: 0 };
        } catch(e) {
            mem = { name: null, streak: 0, visits: 0, lastSeen: null, questionsAsked: 0 };
        }
        mem.visits++;
        mem.lastSeen = new Date().toISOString();
        saveMem();
    }

    function saveMem() {
        try { localStorage.setItem(MEM_KEY, JSON.stringify(mem)); } catch(e) {}
    }

    // ───────────────────────────────────────
    // VOICE OUTPUT
    // ───────────────────────────────────────
    function initVoice() {
        function pickV() {
            var v = synth.getVoices();
            if (!v || !v.length) return;
            var found = null;
            for (var i = 0; i < v.length; i++) {
                if (v[i].lang.indexOf('en-IN') !== -1) { found = v[i]; break; }
            }
            if (!found) {
                for (var j = 0; j < v.length; j++) {
                    if (v[j].lang.indexOf('en-GB') !== -1) { found = v[j]; break; }
                }
            }
            if (!found) {
                for (var k = 0; k < v.length; k++) {
                    if (v[k].lang.indexOf('en') !== -1) { found = v[k]; break; }
                }
            }
            if (!found && v.length) found = v[0];
            voice = found;
        }
        pickV();
        if (synth.onvoiceschanged !== undefined) {
            synth.onvoiceschanged = pickV;
        }
    }

    // ───────────────────────────────────────
    // VOICE INPUT
    // ───────────────────────────────────────
    function initRecognition() {
        var SR = window.SpeechRecognition || window.webkitSpeechRecognition;
        if (!SR) return;

        recognition = new SR();
        recognition.continuous = false;
        recognition.interimResults = false;
        recognition.lang = 'en-US';

        recognition.onstart = function() {
            if (window.DharaCharacter) window.DharaCharacter.setPose('listening');
            var btn = document.querySelector('[data-dhara-action="mic"]');
            if (btn) btn.classList.add('recording');
        };

        recognition.onend = function() {
            if (window.DharaCharacter) window.DharaCharacter.setPose('idle');
            var btn = document.querySelector('[data-dhara-action="mic"]');
            if (btn) btn.classList.remove('recording');
        };

        recognition.onresult = function(e) {
            var txt = '';
            for (var i = 0; i < e.results.length; i++) {
                if (e.results[i].isFinal) txt += e.results[i][0].transcript;
            }
            if (!txt) return;
            var lower = txt.toLowerCase();

            if (/close dhara|stop dhara|go away|bye dhara/.test(lower)) {
                if (window.DharaActions) window.DharaActions.runAwayAsFox();
                return;
            }
            if (/come here|come to me/.test(lower)) {
                if (window.DharaActions) window.DharaActions.comeHere();
                return;
            }
            if (/big|fullscreen|full screen|grow/.test(lower)) {
                if (window.DharaActions) window.DharaActions.fullscreen();
                return;
            }
            if (/small|shrink|tiny/.test(lower)) {
                if (window.DharaActions) window.DharaActions.shrink();
                return;
            }
            if (/dance|perform/.test(lower)) {
                sayAndShow("I don't perform. Ask me something worth answering.");
                return;
            }
            handleInput(txt);
        };

        recognition.onerror = function() {
            var btn = document.querySelector('[data-dhara-action="mic"]');
            if (btn) btn.classList.remove('recording');
            if (window.DharaCharacter) window.DharaCharacter.setPose('idle');
        };
    }

    function startListening() {
        if (recognition) {
            try { recognition.start(); } catch(e) {}
        }
    }

    // ───────────────────────────────────────
    // CLEAN TEXT FOR SPEECH
    // ───────────────────────────────────────
    function cleanForSpeech(text) {
        var result = '';
        for (var i = 0; i < text.length; i++) {
            var code = text.charCodeAt(i);
            if (code < 127) {
                result += text[i];
            }
        }
        return result
            .replace(/\*+/g, '')
            .replace(/_/g, ' ')
            .replace(/\s+/g, ' ')
            .trim();
    }

    // ───────────────────────────────────────
    // SPEAK
    // ───────────────────────────────────────
    function speak(text, callback) {
        if (!synth) { if (callback) callback(); return; }
        synth.cancel();
        var cleanText = cleanForSpeech(text);
        if (!cleanText) { if (callback) callback(); return; }

        var u = new SpeechSynthesisUtterance(cleanText);
        if (voice) u.voice = voice;
        u.rate = 0.95;
        u.pitch = 1.1;
        u.volume = 0.95;

        u.onstart = function() {
            isSpeaking = true;
            if (window.DharaCharacter) window.DharaCharacter.setPose('talking');
        };
        u.onend = function() {
            isSpeaking = false;
            if (window.DharaCharacter) window.DharaCharacter.setPose('idle');
            if (callback) callback();
        };
        u.onerror = function() {
            isSpeaking = false;
            if (window.DharaCharacter) window.DharaCharacter.setPose('idle');
            if (callback) callback();
        };
        synth.speak(u);
    }

    // ───────────────────────────────────────
    // SAY AND SHOW
    // ───────────────────────────────────────
    function sayAndShow(text, duration) {
        if (window.DharaCharacter) window.DharaCharacter.showSpeech(text, duration);
        speak(text);
    }

    // ───────────────────────────────────────
    // PICK RANDOM
    // ───────────────────────────────────────
    function pick(arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    }

    // ───────────────────────────────────────
    // RESPONSE ENGINE
    // ───────────────────────────────────────
    function respond(input, callback) {
        var low = input.toLowerCase().trim();

        // QUIZ ANSWER
        if (activeQuiz) {
            var q = activeQuiz;
            activeQuiz = null;
            var userAns = low.replace(/[^a-z0-9\s]/g, '').trim();
            var correctAns = q.a.toLowerCase().trim();
            if (userAns.indexOf(correctAns) !== -1 || correctAns.indexOf(userAns) !== -1) {
                callback("Correct. You might actually know something.");
            } else {
                callback("Wrong. The answer was " + q.a + ". Remember that.");
            }
            return;
        }

        // GREETINGS
        if (/^(hi|hello|hey|morning|namaste)/.test(low)) {
            if (!mem.name) {
                callback("Hi. I'm Dhara. What should I call you?");
            } else {
                callback(pick([
                    "Welcome back, " + mem.name + ".",
                    mem.name + ". Good to see you again.",
                    "You returned. Smart choice, " + mem.name + "."
                ]));
            }
            return;
        }

        // NAME CAPTURE
        var nameMatch = low.match(/(?:i'm|i am|my name is|call me)\s+(\w+)/i);
        if (nameMatch) {
            var n = nameMatch[1];
            var skip = ['the','a','yes','no','ok','here','there'];
            if (n.length > 1 && skip.indexOf(n.toLowerCase()) === -1) {
                mem.name = n.charAt(0).toUpperCase() + n.slice(1);
                saveMem();
                callback(mem.name + ". Noted. Now we can have real conversations.");
                return;
            }
        }

        // DANCE
        if (/dance|perform|entertain/.test(low)) {
            callback(pick([
                "I don't perform. Ask me something worth answering.",
                "No. I am here for knowledge, not entertainment.",
                "You want a show? Open YouTube. You want answers? Ask me."
            ]));
            return;
        }

        // COMPLIMENTS
        if (/smart|amazing|love you|cute|pretty|beautiful/.test(low)) {
            callback(pick([
                "I am built for accuracy, not affection. Focus.",
                "Flattery will not get you answers faster. Questions will.",
                "Noted. Now ask me something that matters."
            ]));
            return;
        }

        // IDENTITY
        if (/who are you|what are you|are you ai|are you real/.test(low)) {
            callback("I am Dhara. I know every country, capital, and border on this planet. That is all you need to know.");
            return;
        }

        // CAPITAL QUERY
        if (/capital of/.test(low)) {
            var localC = window.DharaKnowledge ? window.DharaKnowledge.findCountry(low) : null;
            if (localC) {
                callback("The capital of " + localC.name + " is " + localC.capital + ".");
                return;
            }
            var cName = low.replace(/.*capital of\s*/i, '').replace(/[?.!]/g, '').trim();
            if (window.DharaKnowledge) {
                window.DharaKnowledge.fetchCountryAPI(cName, function(data) {
                    if (data) {
                        callback(data.name + ". Capital: " + data.capital + ".");
                    } else {
                        callback("Which country? Be specific.");
                    }
                });
            } else {
                callback("Which country? Be specific.");
            }
            return;
        }

        // TELL ME ABOUT (Wikipedia)
        if (/tell me about|what is|what are|explain|describe/.test(low)) {
            var topic = low
                .replace(/tell me about|what is|what are|explain|describe/i, '')
                .replace(/[?.!]/g, '')
                .trim();

            if (!topic) {
                callback("About what exactly? Be specific.");
                return;
            }

            var localMatch = window.DharaKnowledge ? window.DharaKnowledge.findCountry(topic) : null;
            if (localMatch) {
                callback(localMatch.name + ". " + localMatch.fact + ". " + localMatch.weird + ".");
                return;
            }

            if (window.DharaCharacter) window.DharaCharacter.showSpeech("Checking my records...");
            if (window.DharaKnowledge) {
                window.DharaKnowledge.fetchWiki(topic, function(summary) {
                    if (summary) {
                        callback(summary);
                    } else {
                        callback("Not enough data on that. Try a different question.");
                    }
                });
            } else {
                callback("Ask me about a specific country.");
            }
            return;
        }

        // POPULATION / CURRENCY / LANGUAGE
        if (/population|currency|language|border|area/.test(low)) {
            var cName2 = low
                .replace(/population|currency|language|borders|area|of|the|what|is|in/gi, '')
                .trim();
            if (!cName2) { callback("Which country?"); return; }
            if (window.DharaKnowledge) {
                window.DharaKnowledge.fetchCountryAPI(cName2, function(data) {
                    if (data) {
                        if (/population/.test(low)) callback(data.name + " has a population of " + data.population + ".");
                        else if (/currency/.test(low)) callback(data.name + " uses " + data.currency + ".");
                        else if (/language/.test(low)) callback(data.name + " speaks " + data.languages + ".");
                        else if (/border/.test(low)) callback(data.name + " borders " + data.borders + ".");
                        else if (/area/.test(low)) callback(data.name + " covers " + data.area + ".");
                        else callback(data.name + ". Capital: " + data.capital + ". Region: " + data.region + ".");
                    } else {
                        callback("Could not find that. Check the country name.");
                    }
                });
            } else {
                callback("Ask me about a specific country.");
            }
            return;
        }

        // BYE
        if (/bye|goodbye|see you/.test(low)) {
            callback(pick([
                "Fine. You know where to find me.",
                "Leaving already. Your choice.",
                "I will be here. I always am."
            ]));
            return;
        }

        // THANK YOU
        if (/thanks|thank you/.test(low)) {
            callback(pick([
                "You are welcome. Ask more.",
                "That is what I am here for.",
                "Acknowledged. Next question."
            ]));
            return;
        }

        // DEFAULT
        if (window.DharaKnowledge) {
            var keys = Object.keys(window.DharaKnowledge.COUNTRIES);
            var rc = window.DharaKnowledge.COUNTRIES[keys[Math.floor(Math.random() * keys.length)]];
            callback(pick([
                "Ask me something specific. Meanwhile: " + rc.weird + ". That is " + rc.name + ".",
                "I do not do small talk. Here is a fact: " + rc.fact + ". That is " + rc.name + ".",
                "Ask about a country. Any country. I am waiting."
            ]));
        } else {
            callback("Ask me about any country in the world.");
        }
    }

    // ───────────────────────────────────────
    // HANDLE INPUT
    // ───────────────────────────────────────
    function handleInput(text) {
        if (!text || !text.trim()) return;
        if (isProcessing) return;

        // Don't interrupt quiz
        var chatInput = document.getElementById('dharaChatInput');
        if (chatInput && document.activeElement === chatInput && activeQuiz) return;

        isProcessing = true;
        mem.questionsAsked = (mem.questionsAsked || 0) + 1;
        saveMem();

        respond(text, function(reply) {
            if (window.DharaCharacter) window.DharaCharacter.showSpeech(reply);
            speak(reply, function() {
                isProcessing = false;
            });
        });
    }

    // ───────────────────────────────────────
    // INIT
    // ───────────────────────────────────────
    function init() {
        loadMem();
        initVoice();
        initRecognition();

        if (window.DharaCharacter) window.DharaCharacter.init();
        if (window.DharaActions) window.DharaActions.init();

        // First greeting
        setTimeout(function() {
            if (window.DharaCharacter) window.DharaCharacter.setPose('idle');
            var greet;
            if (mem.name && mem.visits > 1) {
                greet = pick([
                    "You are back, " + mem.name + ". What do you want to know?",
                    mem.name + ". Ask me anything about the world.",
                    "Welcome back. Visit number " + mem.visits + ". Ask me something."
                ]);
            } else {
                greet = "I am Dhara. I know every country on this planet. Ask me something.";
            }
            sayAndShow(greet, 6000);
        }, 2500);

        // Idle loop
        setInterval(function() {
            if (isSpeaking) return;
            if (isProcessing) return;
            if (activeQuiz) return;
            if (window.DharaCharacter && window.DharaCharacter.isMoving()) return;
            if (document.querySelector('.dhara-menu.show')) return;
            if (document.querySelector('.dhara-chat-bar.show')) return;
            if (window.DharaActions && window.DharaActions.isFullscreen()) return;
            var chatInput = document.getElementById('dharaChatInput');
            if (chatInput && document.activeElement === chatInput) return;

            if (Math.random() > 0.35) {
                if (window.DharaCharacter) window.DharaCharacter.randomWalk();
            } else {
                sayAndShow(pick(idleMessages));
            }
        }, 60000);
    }

    // ───────────────────────────────────────
    // PUBLIC API
    // ───────────────────────────────────────
    return {
        init: init,
        speak: speak,
        respond: respond,
        handleInput: handleInput,
        startListening: startListening,
        sayAndShow: sayAndShow,
        pick: pick,
        getMem: function() { return mem; },
        saveMem: saveMem,
        setActiveQuiz: function(q) { activeQuiz = q; },
        isSpeaking: function() { return isSpeaking; }
    };

})();

console.log('🦊 Dhara Core loaded');
