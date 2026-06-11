// ═══════════════════════════════════════════════════════
// DHARA MEMORY SYSTEM
// localStorage for instant, Supabase for persistent
// ═══════════════════════════════════════════════════════

const DharaMemory = (() => {
    
    const STORAGE_KEY = 'dhara_memory';
    const CONVERSATIONS_KEY = 'dhara_conversations';
    const MAX_CONVERSATIONS = 50; // Keep last 50 messages

    // ── LOAD MEMORY ──
    function getMemory() {
        try {
            const stored = localStorage.getItem(STORAGE_KEY);
            const memory = stored ? JSON.parse(stored) : getDefaultMemory();
            
            // Calculate days gone
            if (memory.lastVisit) {
                const lastDate = new Date(memory.lastVisit);
                const today = new Date();
                const diffDays = Math.floor((today - lastDate) / 86400000);
                memory.daysGone = diffDays;

                // Update streak
                if (diffDays === 0) {
                    // Same day, streak stays
                } else if (diffDays === 1) {
                    // Next day, streak continues
                    memory.streak = (memory.streak || 0) + 1;
                } else {
                    // Streak broken!
                    memory.previousStreak = memory.streak;
                    memory.streak = 1;
                    memory.streakBroken = true;
                }
            }

            // Update last visit
            memory.lastVisit = new Date().toISOString();
            memory.totalVisits = (memory.totalVisits || 0) + 1;

            saveMemory(memory);
            return memory;
        } catch (e) {
            console.warn('🦊 Memory error:', e);
            return getDefaultMemory();
        }
    }

    function getDefaultMemory() {
        return {
            name: null,
            streak: 0,
            previousStreak: 0,
            streakBroken: false,
            lastVisit: null,
            daysGone: 0,
            totalVisits: 0,
            quizCorrect: 0,
            quizTotal: 0,
            favContinent: null,
            topicsDiscussed: [],
            mood: 'REGAL',
            firstVisitEver: new Date().toISOString(),
            _currentQuiz: null,
            _currentMystery: null,
            _usedQuizzes: []
        };
    }

    // ── SAVE MEMORY ──
    function saveMemory(memory) {
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(memory));
        } catch (e) {
            console.warn('🦊 Save error:', e);
        }
    }

    // ── UPDATE SPECIFIC KEY ──
    function update(key, value) {
        const memory = getMemory();
        memory[key] = value;
        saveMemory(memory);
        return memory;
    }

    // ── NAME DETECTION FROM CHAT ──
    function detectName(input, memory) {
        // Patterns: "I'm [name]", "my name is [name]", "call me [name]", "I am [name]"
        const patterns = [
            /(?:i'm|i am|my name is|call me|this is|name's)\s+(\w+)/i,
            /^(\w+)$/i // If they just type a single word after being asked
        ];

        for (const pattern of patterns) {
            const match = input.match(pattern);
            if (match) {
                const name = match[1];
                // Filter out common non-name words
                const nonNames = ['a', 'the', 'yes', 'no', 'hi', 'hello', 'hey', 'ok', 'okay', 'fine', 'good', 'great', 'what', 'who', 'where', 'when', 'why', 'how', 'tell', 'show'];
                if (!nonNames.includes(name.toLowerCase()) && name.length > 1 && name.length < 20) {
                    memory.name = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
                    saveMemory(memory);
                    return memory.name;
                }
            }
        }
        return null;
    }

    // ── CONVERSATION HISTORY ──
    function addMessage(role, content) {
        try {
            const conversations = JSON.parse(localStorage.getItem(CONVERSATIONS_KEY) || '[]');
            conversations.push({
                role,
                content,
                timestamp: new Date().toISOString()
            });

            // Keep only last N messages
            while (conversations.length > MAX_CONVERSATIONS) {
                conversations.shift();
            }

            localStorage.setItem(CONVERSATIONS_KEY, JSON.stringify(conversations));
        } catch (e) { /* silently fail */ }
    }

    function getConversations() {
        try {
            return JSON.parse(localStorage.getItem(CONVERSATIONS_KEY) || '[]');
        } catch (e) {
            return [];
        }
    }

    // ── MOOD CALCULATION ──
    function calculateMood(memory) {
        if (memory.streakBroken && memory.previousStreak >= 3) return 'DRAMATIC_SAD';
        if (memory.streak >= 7) return 'EXCITED';
        if (memory.streak >= 5) return 'EXCITED';
        if (memory.daysGone >= 3) return 'DRAMATIC_SAD';
        if (memory.quizCorrect >= 5) return 'EXCITED';
        return 'REGAL';
    }

    // ── TRACK TOPIC ──
    function trackTopic(topic, memory) {
        if (!memory.topicsDiscussed) memory.topicsDiscussed = [];
        memory.topicsDiscussed.push({
            topic,
            date: new Date().toISOString()
        });
        // Keep last 20 topics
        if (memory.topicsDiscussed.length > 20) {
            memory.topicsDiscussed = memory.topicsDiscussed.slice(-20);
        }
        saveMemory(memory);
    }

    // ── RESET (for testing) ──
    function reset() {
        localStorage.removeItem(STORAGE_KEY);
        localStorage.removeItem(CONVERSATIONS_KEY);
        console.log('🦊 Dhara memory wiped');
    }

    return {
        getMemory,
        saveMemory,
        update,
        detectName,
        addMessage,
        getConversations,
        calculateMood,
        trackTopic,
        reset
    };
})();
