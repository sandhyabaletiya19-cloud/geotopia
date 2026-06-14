// /dhara/dhara-core.js
// ═══════════════════════════════════════════════════════
// DHARA CORE - Elite Brain, Memory, Voice, Commands
// ═══════════════════════════════════════════════════════

window.DharaCore = (function() {

    var MEM_KEY = 'dhara_mem_v8';
    var mem;
    var activeQuiz = null;
    var synth = window.speechSynthesis;
    var voice = null;
    var recognition = null;
    var isSpeaking = false;
    var isProcessing = false;

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
            var tests = [
                function(x) { return x.lang.indexOf('en-IN') !== -1 && /female/i.test(x.name); },
                function(x) { return x.lang.indexOf('en-IN') !== -1; },
                function(x) { return x.lang.indexOf('en-GB') !== -1 && /female|kate|hazel/i.test(x.name); },
                function(x) { return x.lang.indexOf('en-GB') !== -1; },
                function(x) { return x.lang.indexOf('en') === 0 && /female|samantha|karen|zira/i.test(x.name); },
                function(x) { return x.lang.indexOf('en') === 0; }
            ];
            for (var i = 0; i < tests.length; i++) {
                var m = v.find(tests[i]);
                if (m) { voice = m; return; }
            }
            if (v.length) voice = v[0];
        }
        pickV();
        if (synth.onvoiceschanged !== undefined) synth.onvoiceschanged = pickV;
    }

    // ───────────────────────────────────────
    // VOICE INPUT (Speech Recognition)
    // ───────────────────────────────────────
    function initRecognition() {
        var SR = window.SpeechRecognition || window.webkitSpeechRecognition;
        if (!SR) return;

        recognition = new SR();
        recognition.continuous = false;
        recognition.interimResults = false;
        recognition.lang = 'en-US';

        recognition.onstart = function() {
            window.DharaCharacter.setPose('listening');
            var btn = document.querySelector('[data-dhara-action="mic"]');
            if (btn) btn.classList.add('recording');
        };

        recognition.onend = function() {
            window.DharaCharacter.setPose('idle');
            var btn = document.querySelector('[data-dhara-action="mic"]');
            if (btn) btn.classList.remove('recording');
        };

        recognition.onresult = function(e) {
            var txt = '';
            for (var i = 0; i < e.results.length; i++) {
                if (e.results[i].isFinal) txt += e.results[i][0].transcript;
            }
            if (txt) {
                var lower = txt.toLowerCase();

                // Voice commands
                if (/close dhara|stop dhara|go away|leave|bye dhara/i.test(lower)) {
                    window.DharaActions.runAwayAsFox();
                    return;
                }
                if (/come here|come to me/i.test(lower)) {
                    window.DharaActions.comeHere();
                    return;
                }
                if (/big|full screen|fullscreen|grow/i.test(lower)) {
                    window.DharaActions.fullscreen();
                    return;
                }
                if (/small|shrink|tiny/i.test(lower)) {
                    window.DharaActions.shrink();
                    return;
                }
                if (/dance|party/i.test(lower)) {
                    sayAndShow("I don't perform. Ask me something worth answering.");
                    return;
                }
                handleInput(txt);
            }
        };

        recognition.onerror = function() {
            var btn = document.querySelector('[data-dhara-action="mic"]');
            if (btn) btn.classList.remove('recording');
            window.DharaCharacter.setPose('idle');
        };
    }

    function startListening() {
        if (recognition) {
            try { recognition.start(); } catch(e) {}
        }
    }

    // ───────────────────────────────────────
    // CLEAN TEXT FOR SPEECH (strip emojis)
    // ───────────────────────────────────────
    function cleanForSpeech(text) {
        return text
            .replace(/[\u{1F600}-\u{1F64F}]|[\u{1F300}-\u{1F5FF}]|[\u{1F680}-\u{1F6FF}]|[\u{1F1E0}-\u{1F1FF}]|[\u{2600}-\u{26FF}]|[\u{2700}-\u{27BF}]|[\u{1F900}-\u{1F9FF}]|[\u{1FA70}-\u{1FAFF}]/gu, '')
            .replace(/\*+/g, '').replace(/_/g, ' ').replace(/\s+/g, ' ').trim();
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
            window.DharaCharacter.setPose('talking');
        };
        u.onend = function() {
            isSpeaking = false;
            window.DharaCharacter.setPose('idle');
            if (callback) callback();
        };
        u.onerror = function() {
            isSpeaking = false;
            window.DharaCharacter.setPose('idle');
            if (callback) callback();
        };
        synth.speak(u);
    }

    // ───────────────────────────────────────
    // SAY + SHOW (convenience)
    // ───────────────────────────────────────
    function sayAndShow(text, duration) {
        window.DharaCharacter.showSpeech(text, duration);
        speak(text);
    }

    // ───────────────────────────────────────
    // UTILITY
    // ───────────────────────────────────────
    function pick(arr) { return arr[Math.floor(Math.random() * arr.length)]; }

    // ───────────────────────────────────────
    // ELITE RESPONSE ENGINE
    // ───────────────────────────────────────
    function respond(input, callback) {
        var low = input.toLowerCase().trim();

        // ── QUIZ ANSWER CHECK ──
        if (activeQuiz) {
            var q = activeQuiz;
            activeQuiz = null;
            if (low.indexOf(q.a) !== -1) {
                window.DharaCharacter.setPose('idle');
                callback("Correct. You might actually know something.");
                return;
            } else {
                callback("Wrong. It was " + q.a + ". Remember that.");
                return;
            }
        }

        // ── GREETINGS ──
        if (/^(hi|hello|hey|morning|namaste)/i.test(low)) {
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

        // ── NAME CAPTURE ──
        var nameM = low.match(/(?:i'm|i am|my name is|call me)\s+(\w+)/i);
        if (nameM) {
            var n = nameM[1];
            if (n.length > 1 && ['the','a','yes','no','ok'].indexOf(n.toLowerCase()) === -1) {
                mem.name = n.charAt(0).toUpperCase() + n.slice(1);
                saveMem();
                callback(mem.name + ". Noted. Now we can have real conversations.");
                return;
            }
        }

        // ── DANCE REQUEST ──
        if (/dance|perform|entertain/i.test(low)) {
            callback(pick([
                "I don't perform. Ask me something worth answering.",
                "No. I'm here for knowledge, not entertainment.",
                "You want a show? Open YouTube. You want answers? I'm here."
            ]));
            return;
        }

        // ── COMPLIMENTS ──
        if (/smart|amazing|love you|cute|pretty|beautiful/i.test(low)) {
            callback(pick([
                "I'm built for accuracy, not affection. Focus.",
                "Flattery won't get you answers faster. Questions will.",
                "Noted. Now ask me something that matters."
            ]));
            return;
        }

        // ── IDENTITY ──
        if (/who are you|what are you|are you ai|are you real/i.test(low)) {
            callback("I'm Dhara. Twenty-seven. I know every country, capital, and border on this planet. That's all you need to know.");
            return;
        }

        // ── CAPITAL QUERY ──
        if (/capital of/i.test(low)) {
            var localC = window.DharaKnowledge.findCountry(low);
            if (localC) {
                callback("The capital of " + localC.name + " is " + localC.capital + ".");
                return;
            }
            // Try API
            var countryName = low.replace(/.*capital of\s*/i, '').replace(/[?.!]/g, '').trim();
            window.DharaKnowledge.fetchCountryAPI(countryName, function(data) {
                if (data) {
                    callback(data.name + ". Capital: " + data.capital + ". Population: " + data.population + ".");
                } else {
                    callback("Which country? Be specific.");
                }
            });
            return;
        }

        // ── TELL ME ABOUT (Wikipedia) ──
        if (/tell me about|what is|what are|explain|describe/i.test(low)) {
            var topic = low
                .replace(/tell me about|what is|what are|explain|describe/i, '')
                .replace(/[?.!]/g, '').trim();
            
            if (!topic) {
                callback("About what? Be specific.");
                return;
            }

            // Check local first
            var localMatch = window.DharaKnowledge.findCountry(topic);
            if (localMatch) {
                callback(localMatch.name + ". " + localMatch.fact + ". " + localMatch.weird + ".");
                return;
            }

            // Fetch from Wikipedia
            window.DharaCharacter.showSpeech("Checking my records...");
            window.DharaKnowledge.fetchWiki(topic, function(summary) {
                if (summary) {
                    callback(summary);
                } else {
                    callback("I couldn't find enough on that. Try a different question.");
                }
            });
            return;
        }

        // ── COUNTRY DATA (REST Countries API) ──
        if (/population|currency|language|borders|area/i.test(low)) {
            var cName = low.replace(/population|currency|language|borders|area|of|the|what|is|in/gi, '').trim();
            if (!cName) {
                callback("Which country?");
                return;
            }
            window.DharaKnowledge.fetchCountryAPI(cName, function(data) {
                if (data) {
                    if (/population/i.test(low)) callback(data.name + " has a population of " + data.population + ".");
                    else if (/currency/i.test(low)) callback(data.name + " uses " + data.currency + ".");
                    else if (/language/i.test(low)) callback(data.name + " speaks " + data.languages + ".");
                    else if (/border/i.test(low)) callback(data.name + " shares borders with " + data.borders + ".");
                    else if (/area/i.test(low)) callback(data.name + " covers " + data.area + ".");
                    else callback(data.name + ". Capital: " + data.capital + ". Region: " + data.region + ".");
                } else {
                    callback("Couldn't find that. Check the country name.");
                }
            });
            return;
        }

        // ── BYE ──
        if (/bye|goodbye|see you/i.test(low)) {
            callback(pick([
                "Fine. You know where to find me.",
                "Leaving already? Your choice.",
                "I'll be here. I always am."
            ]));
            return;
        }

        // ── THANK YOU ──
        if (/thanks|thank you/i.test(low)) {
            callback(pick([
                "You're welcome. Ask more.",
                "That's what I'm here for.",
                "Acknowledged. Next question."
            ]));
            return;
        }

        // ── DEFAULT (Random fact) ──
        var keys = Object.keys(window.DharaKnowledge.COUNTRIES);
        var rc = window.DharaKnowledge.COUNTRIES[keys[Math.floor(Math.random() * keys.length)]];
        callback(pick([
            "Ask me something specific. Meanwhile: " + rc.weird + ". That's " + rc.name + ".",
            "I don't do small talk. But here's a fact: " + rc.fact + ". " + rc.name + ".",
            "You're wasting my time. Ask about a country. Any country."
        ]));
    }

    // ───────────────────────────────────────
    // HANDLE INPUT
    // ───────────────────────────────────────
    function handleInput(text) {
        if (!text || !text.trim() || isProcessing) return;
        isProcessing = true;
        mem.questionsAsked++;
        saveMem();

        respond(text, function(reply) {
            window.DharaCharacter.showSpeech(reply);
            speak(reply, function() {
                isProcessing = false;
            });
        });
    }

    // ───────────────────────────────────────
    // IDLE MESSAGES (Elite, not desperate)
    // ───────────────────────────────────────
    var idleMessages = [
        "Still here. Ask me something.",
        "47 countries are landlocked. How many can you name?",
        "The longest border in the world is between Canada and the US. 8,891 km.",
        "Most people can't name 10 African capitals. Can you?",
        "Antarctica has no government and no permanent population.",
        "The Pacific Ocean is larger than all landmasses combined.",
        "Russia spans 11 time zones. Think about that.",
        "There are 195 countries. I know all of them.",
        "The Dead Sea is not a sea. It's a lake.",
        "Greenland is the world's largest island but has a population of 56,000.",
        "Only two countries have purple in their flag. Know which?",
        "Africa has 54 countries. Name five right now.",
        "The shortest border in the world is between Zambia and Botswana. 150 meters."
    ];

    // ───────────────────────────────────────
    // INIT
    // ───────────────────────────────────────
    function init() {
        loadMem();
        initVoice();
        initRecognition();

        // Init character and actions
        window.DharaCharacter.init();
        window.DharaActions.init();

        // First greeting (after 2 seconds)
        setTimeout(function() {
            window.DharaCharacter.setPose('idle');
            var greet;
            if (mem.name && mem.visits > 1) {
                greet = pick([
                    "You're back, " + mem.name + ". What do you want to know?",
                    mem.name + ". Ask me anything about the world.",
                    "Welcome back. Visit number " + mem.visits + ". Let's learn something."
                ]);
            } else {
                greet = "I'm Dhara. I know every country on this planet. Ask me something.";
            }
            sayAndShow(greet, 6000);
        }, 2500);

        // Idle loop (every 40 seconds)
        setInterval(function() {
            if (isSpeaking || isProcessing) return;
            if (window.DharaCharacter.isMoving()) return;
            if (document.querySelector('.dhara-menu.show')) return;
            if (document.querySelector('.dhara-chat-bar.show')) return;
            if (window.DharaActions.isFullscreen()) return;

            if (Math.random() > 0.4) {
                window.DharaCharacter.randomWalk();
            } else {
                var msg = pick(idleMessages);
                sayAndShow(msg);
            }
        }, 40000);
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
        getMem: function() { return mem; },
        saveMem: saveMem,
        setActiveQuiz: function(q) { activeQuiz = q; },
        pick: pick,
        isSpeaking: function() { return isSpeaking; },
        sayAndShow: sayAndShow
    };

})();

console.log('🦊 Dhara Core loaded');
