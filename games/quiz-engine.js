// quiz-engine.js

const QuizGameEngine = (function() {
    // State object to track game progress
    const state = {
        gameType: null,
        questions: [],
        originalPool: [],
        currentIndex: 0,
        score: 0,
        totalQuestions: 0,
        answers: [],
        usedQuestionIds: [],
        sessionId: null,
        difficulty: 'medium'
    };

    // LocalStorage keys for tracking used questions across sessions
    const STORAGE_KEYS = {
        GEOGRAPHY_USED: 'geotopia_geography_used_ids',
        WORDMASTER_USED: 'geotopia_wordmaster_used_ids',
        LAST_RESET: 'geotopia_last_reset_date'
    };

    // Weekly reset check (7 days)
    const RESET_INTERVAL_DAYS = 7;

    // =============================================
    // UTILITY FUNCTIONS
    // =============================================

    // Fisher-Yates shuffle
    function shuffle(array) {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    }

    // Generate unique ID for questions without one
    function generateQuestionId(question, index) {
        if (question.id) {
            return question.id;
        }
        // Create hash from question content
        const content = question.question || question.word || '';
        let hash = 0;
        for (let i = 0; i < content.length; i++) {
            const char = content.charCodeAt(i);
            hash = ((hash << 5) - hash) + char;
            hash = hash & hash;
        }
        return 'q_' + Math.abs(hash) + '_' + index;
    }

    // Check if weekly reset is needed
    function checkWeeklyReset() {
        try {
            const lastReset = localStorage.getItem(STORAGE_KEYS.LAST_RESET);
            if (!lastReset) {
                localStorage.setItem(STORAGE_KEYS.LAST_RESET, Date.now().toString());
                return false;
            }

            const lastResetDate = parseInt(lastReset, 10);
            const daysSinceReset = (Date.now() - lastResetDate) / (1000 * 60 * 60 * 24);

            if (daysSinceReset >= RESET_INTERVAL_DAYS) {
                // Reset all used question trackers
                localStorage.removeItem(STORAGE_KEYS.GEOGRAPHY_USED);
                localStorage.removeItem(STORAGE_KEYS.WORDMASTER_USED);
                localStorage.setItem(STORAGE_KEYS.LAST_RESET, Date.now().toString());
                return true;
            }

            return false;
        } catch (e) {
            // localStorage not available
            return false;
        }
    }

    // Get used question IDs from localStorage
    function getUsedIdsFromStorage(gameType) {
        try {
            checkWeeklyReset();

            const key = gameType === 'geography-quiz' 
                ? STORAGE_KEYS.GEOGRAPHY_USED 
                : STORAGE_KEYS.WORDMASTER_USED;

            const stored = localStorage.getItem(key);
            if (stored) {
                return JSON.parse(stored);
            }
        } catch (e) {
            // localStorage not available or parse error
        }
        return [];
    }

    // Save used question IDs to localStorage
    function saveUsedIdsToStorage(gameType, usedIds) {
        try {
            const key = gameType === 'geography-quiz' 
                ? STORAGE_KEYS.GEOGRAPHY_USED 
                : STORAGE_KEYS.WORDMASTER_USED;

            localStorage.setItem(key, JSON.stringify(usedIds));
        } catch (e) {
            // localStorage not available
        }
    }

    // Clear used IDs from storage (when pool is exhausted)
    function clearUsedIdsFromStorage(gameType) {
        try {
            const key = gameType === 'geography-quiz' 
                ? STORAGE_KEYS.GEOGRAPHY_USED 
                : STORAGE_KEYS.WORDMASTER_USED;

            localStorage.removeItem(key);
        } catch (e) {
            // localStorage not available
        }
    }

    // =============================================
    // WORD MASTER HELPERS
    // =============================================

    // Generate masked word with missing letters
    function generateMaskedWord(word, difficulty) {
        difficulty = difficulty || 'medium';
        
        const letters = word.toUpperCase().split('');
        const wordLength = letters.length;
        let numToHide;

        // Determine how many letters to hide based on difficulty
        if (difficulty === 'easy') {
            numToHide = Math.ceil(wordLength * 0.3);
        } else if (difficulty === 'medium') {
            numToHide = Math.ceil(wordLength * 0.5);
        } else if (difficulty === 'hard') {
            numToHide = Math.ceil(wordLength * 0.7);
        } else {
            numToHide = Math.ceil(wordLength * 0.5);
        }

        // Ensure at least 1 letter is hidden and at least 1 is shown
        numToHide = Math.max(1, Math.min(numToHide, wordLength - 1));

        // Get random indices to hide
        const indices = [];
        for (let i = 0; i < wordLength; i++) {
            indices.push(i);
        }
        const shuffledIndices = shuffle(indices);
        const hideIndices = shuffledIndices.slice(0, numToHide);

        // Create masked display
        const maskedLetters = letters.map(function(letter, index) {
            if (hideIndices.includes(index)) {
                return '_';
            }
            return letter;
        });

        return {
            display: maskedLetters.join(' '),
            hiddenIndices: hideIndices.sort((a, b) => a - b),
            maskedLetters: maskedLetters,
            originalWord: word.toUpperCase()
        };
    }

    // =============================================
    // QUESTION PREPARATION
    // =============================================

    // Prepare geography quiz questions
    function prepareGeographyQuestions(data, usedIds, totalQuestions) {
        // Assign IDs to all questions
        const questionsWithIds = data.map(function(q, index) {
            return {
                ...q,
                id: generateQuestionId(q, index)
            };
        });

        // Filter out used questions
        let availableQuestions = questionsWithIds.filter(function(q) {
            return !usedIds.includes(q.id);
        });

        // If not enough available questions, reset the pool
        if (availableQuestions.length < totalQuestions) {
            clearUsedIdsFromStorage('geography-quiz');
            state.usedQuestionIds = [];
            availableQuestions = questionsWithIds;
        }

        // Shuffle and select questions
        const shuffled = shuffle(availableQuestions);
        const selected = shuffled.slice(0, totalQuestions);

        // Prepare final question format
        return selected.map(function(q, index) {
            return {
                id: q.id,
                type: 'multiple-choice',
                question: q.question,
                options: shuffle([...q.options]),
                answer: q.answer,
                questionNumber: index + 1
            };
        });
    }

    // Prepare word master questions
    function prepareWordMasterQuestions(data, usedIds, totalQuestions, difficulty) {
        // Assign IDs to all words
        const wordsWithIds = data.map(function(w, index) {
            return {
                ...w,
                id: generateQuestionId(w, index)
            };
        });

        // Filter out used words
        let availableWords = wordsWithIds.filter(function(w) {
            return !usedIds.includes(w.id);
        });

        // If not enough available words, reset the pool
        if (availableWords.length < totalQuestions) {
            clearUsedIdsFromStorage('word-master');
            state.usedQuestionIds = [];
            availableWords = wordsWithIds;
        }

        // Shuffle and select words
        const shuffled = shuffle(availableWords);
        const selected = shuffled.slice(0, totalQuestions);

        // Prepare final question format with masked words
        return selected.map(function(w, index) {
            const masked = generateMaskedWord(w.word, difficulty);

            return {
                id: w.id,
                type: 'word-master',
                word: w.word.toUpperCase(),
                hint: w.hint,
                category: w.category || 'general',
                display: masked.display,
                hiddenIndices: masked.hiddenIndices,
                maskedLetters: masked.maskedLetters,
                answer: w.word.toUpperCase(),
                questionNumber: index + 1
            };
        });
    }

    // =============================================
    // MAIN ENGINE METHODS
    // =============================================

    /**
     * Initialize game with specified type and options
     * @param {string} gameType - 'geography-quiz' or 'word-master'
     * @param {Object} options - Configuration options
     * @param {Array} options.data - Question/word pool from games-data.js
     * @param {number} options.totalQuestions - Number of questions per session
     * @param {string} options.difficulty - 'easy', 'medium', 'hard' (for word-master)
     * @param {boolean} options.trackAcrossSessions - Whether to track used questions in localStorage
     */
    function initGame(gameType, options) {
        options = options || {};

        // Reset state
        state.gameType = gameType;
        state.currentIndex = 0;
        state.score = 0;
        state.answers = [];
        state.sessionId = 'session_' + Date.now();
        state.difficulty = options.difficulty || 'medium';

        const trackAcrossSessions = options.trackAcrossSessions !== false;

        // Get used IDs from storage if tracking across sessions
        let usedIds = [];
        if (trackAcrossSessions) {
            usedIds = getUsedIdsFromStorage(gameType);
        }
        state.usedQuestionIds = usedIds;

        // Determine data source and default question count
        let data;
        let defaultQuestionCount;

        if (gameType === 'geography-quiz') {
            data = options.data || (typeof GeographyQuizData !== 'undefined' ? GeographyQuizData : []);
            defaultQuestionCount = 10;
        } else if (gameType === 'word-master') {
            data = options.data || (typeof WordMasterData !== 'undefined' ? WordMasterData : []);
            defaultQuestionCount = 10;
        } else {
            // Default to geography quiz
            state.gameType = 'geography-quiz';
            data = options.data || (typeof GeographyQuizData !== 'undefined' ? GeographyQuizData : []);
            defaultQuestionCount = 10;
        }

        // Store original pool for reference
        state.originalPool = data;

        // Get total questions to use
        const totalQuestions = Math.min(
            options.totalQuestions || defaultQuestionCount,
            data.length
        );

        state.totalQuestions = totalQuestions;

        // Prepare questions based on game type
        if (state.gameType === 'geography-quiz') {
            state.questions = prepareGeographyQuestions(data, usedIds, totalQuestions);
        } else if (state.gameType === 'word-master') {
            state.questions = prepareWordMasterQuestions(data, usedIds, totalQuestions, state.difficulty);
        }

        return {
            gameType: state.gameType,
            totalQuestions: state.totalQuestions,
            currentIndex: state.currentIndex,
            score: state.score,
            sessionId: state.sessionId,
            poolSize: data.length,
            availableQuestions: data.length - usedIds.length
        };
    }

    /**
     * Get the current question
     * @returns {Object|null} Current question object or null if complete
     */
    function getCurrentQuestion() {
        if (state.currentIndex >= state.questions.length) {
            return null;
        }

        const question = state.questions[state.currentIndex];

        if (state.gameType === 'geography-quiz') {
            return {
                id: question.id,
                type: question.type,
                question: question.question,
                options: [...question.options],
                questionNumber: state.currentIndex + 1,
                totalQuestions: state.totalQuestions,
                score: state.score
            };
        } else if (state.gameType === 'word-master') {
            return {
                id: question.id,
                type: question.type,
                hint: question.hint,
                category: question.category,
                display: question.display,
                maskedLetters: [...question.maskedLetters],
                hiddenIndices: [...question.hiddenIndices],
                wordLength: question.word.length,
                questionNumber: state.currentIndex + 1,
                totalQuestions: state.totalQuestions,
                score: state.score
            };
        }

        return null;
    }

    /**
     * Normalize answer for comparison
     * @param {string} answer - User's answer
     * @returns {string} Normalized answer
     */
    function normalizeAnswer(answer) {
        if (typeof answer !== 'string') {
            answer = String(answer);
        }
        return answer.trim().toUpperCase().replace(/\s+/g, ' ');
    }

    /**
     * Submit an answer for the current question
     * @param {string} answer - User's answer
     * @returns {Object} Result object with success, correctAnswer, etc.
     */
    function submitAnswer(answer) {
        // Check if game is already complete
        if (state.currentIndex >= state.questions.length) {
            return {
                success: false,
                message: 'Quiz already completed',
                isComplete: true,
                score: state.score,
                totalQuestions: state.totalQuestions
            };
        }

        const currentQuestion = state.questions[state.currentIndex];
        const normalizedAnswer = normalizeAnswer(answer);
        const normalizedCorrect = normalizeAnswer(currentQuestion.answer);

        const isCorrect = normalizedAnswer === normalizedCorrect;

        // Record answer
        state.answers.push({
            questionId: currentQuestion.id,
            questionNumber: state.currentIndex + 1,
            userAnswer: answer,
            correctAnswer: currentQuestion.answer,
            isCorrect: isCorrect,
            timestamp: Date.now()
        });

        // Update score
        if (isCorrect) {
            state.score++;
        }

        // Mark question as used
        if (!state.usedQuestionIds.includes(currentQuestion.id)) {
            state.usedQuestionIds.push(currentQuestion.id);
            saveUsedIdsToStorage(state.gameType, state.usedQuestionIds);
        }

        // Move to next question
        state.currentIndex++;

        const isComplete = state.currentIndex >= state.questions.length;

        // Prepare next question if not complete
        let nextQuestion = null;
        if (!isComplete) {
            nextQuestion = getCurrentQuestion();
        }

        return {
            success: isCorrect,
            correctAnswer: currentQuestion.answer,
            userAnswer: answer,
            currentQuestion: nextQuestion,
            isComplete: isComplete,
            score: state.score,
            totalQuestions: state.totalQuestions,
            currentIndex: state.currentIndex,
            questionNumber: state.currentIndex
        };
    }

    /**
     * Check if the quiz is complete
     * @returns {boolean} True if all questions have been answered
     */
    function isComplete() {
        return state.currentIndex >= state.questions.length;
    }

    /**
     * Reset the current game
     * Reshuffles questions and resets progress
     * @param {Object} options - Reset options
     * @param {boolean} options.clearHistory - Clear used question history
     * @returns {Object} New game state
     */
    function resetGame(options) {
        options = options || {};

        // Clear history if requested
        if (options.clearHistory) {
            clearUsedIdsFromStorage(state.gameType);
            state.usedQuestionIds = [];
        }

        // Re-initialize with same settings
        return initGame(state.gameType, {
            data: state.originalPool,
            totalQuestions: state.totalQuestions,
            difficulty: state.difficulty,
            trackAcrossSessions: true
        });
    }

    /**
     * Get current game state
     * @returns {Object} Current state snapshot
     */
    function getState() {
        return {
            gameType: state.gameType,
            currentIndex: state.currentIndex,
            score: state.score,
            totalQuestions: state.totalQuestions,
            answers: state.answers.map(function(a) {
                return { ...a };
            }),
            isComplete: isComplete(),
            sessionId: state.sessionId,
            usedQuestionsCount: state.usedQuestionIds.length,
            poolSize: state.originalPool.length
        };
    }

    /**
     * Get detailed score information
     * @returns {Object} Score details
     */
    function getScore() {
        const totalAnswered = state.answers.length;
        const correctCount = state.answers.filter(function(a) {
            return a.isCorrect;
        }).length;

        return {
            score: state.score,
            totalQuestions: state.totalQuestions,
            totalAnswered: totalAnswered,
            correctCount: correctCount,
            incorrectCount: totalAnswered - correctCount,
            percentage: totalAnswered > 0 
                ? Math.round((correctCount / totalAnswered) * 100) 
                : 0,
            answers: state.answers.map(function(a) {
                return { ...a };
            }),
            isComplete: isComplete()
        };
    }

    /**
     * Skip the current question
     * @returns {Object} Result object
     */
    function skipQuestion() {
        if (state.currentIndex >= state.questions.length) {
            return {
                success: false,
                message: 'Quiz already completed',
                isComplete: true
            };
        }

        const currentQuestion = state.questions[state.currentIndex];

        // Record skipped answer
        state.answers.push({
            questionId: currentQuestion.id,
            questionNumber: state.currentIndex + 1,
            userAnswer: null,
            correctAnswer: currentQuestion.answer,
            isCorrect: false,
            skipped: true,
            timestamp: Date.now()
        });

        // Mark question as used
        if (!state.usedQuestionIds.includes(currentQuestion.id)) {
            state.usedQuestionIds.push(currentQuestion.id);
            saveUsedIdsToStorage(state.gameType, state.usedQuestionIds);
        }

        // Move to next question
        state.currentIndex++;

        const isQuizComplete = state.currentIndex >= state.questions.length;

        return {
            success: true,
            skipped: true,
            correctAnswer: currentQuestion.answer,
            currentQuestion: isQuizComplete ? null : getCurrentQuestion(),
            isComplete: isQuizComplete,
            score: state.score,
            totalQuestions: state.totalQuestions
        };
    }

    /**
     * Get a hint for the current word (Word Master only)
     * Reveals one hidden letter
     * @returns {Object} Hint result
     */
    function getHint() {
        if (state.gameType !== 'word-master') {
            return {
                success: false,
                message: 'Hints only available for Word Master'
            };
        }

        if (state.currentIndex >= state.questions.length) {
            return {
                success: false,
                message: 'Quiz already completed'
            };
        }

        const currentQuestion = state.questions[state.currentIndex];
        const maskedLetters = [...currentQuestion.maskedLetters];
        const hiddenIndices = [...currentQuestion.hiddenIndices];

        // Find first hidden letter to reveal
        let revealedIndex = -1;
        let revealedLetter = null;

        for (let i = 0; i < maskedLetters.length; i++) {
            if (maskedLetters[i] === '_') {
                maskedLetters[i] = currentQuestion.word[i];
                revealedIndex = i;
                revealedLetter = currentQuestion.word[i];
                break;
            }
        }

        if (revealedIndex === -1) {
            return {
                success: false,
                message: 'No more letters to reveal'
            };
        }

        // Update question state
        currentQuestion.maskedLetters = maskedLetters;
        currentQuestion.display = maskedLetters.join(' ');

        // Remove from hidden indices
        const indexPos = hiddenIndices.indexOf(revealedIndex);
        if (indexPos > -1) {
            hiddenIndices.splice(indexPos, 1);
        }
        currentQuestion.hiddenIndices = hiddenIndices;

        return {
            success: true,
            revealedLetter: revealedLetter,
            revealedIndex: revealedIndex,
            display: currentQuestion.display,
            maskedLetters: [...maskedLetters],
            remainingHidden: hiddenIndices.length
        };
    }

    /**
     * Get statistics about used questions
     * @returns {Object} Statistics object
     */
    function getUsageStats() {
        const geographyUsed = getUsedIdsFromStorage('geography-quiz');
        const wordMasterUsed = getUsedIdsFromStorage('word-master');

        return {
            geographyQuiz: {
                usedCount: geographyUsed.length,
                poolSize: typeof GeographyQuizData !== 'undefined' ? GeographyQuizData.length : 0,
                remainingCount: typeof GeographyQuizData !== 'undefined' 
                    ? GeographyQuizData.length - geographyUsed.length 
                    : 0
            },
            wordMaster: {
                usedCount: wordMasterUsed.length,
                poolSize: typeof WordMasterData !== 'undefined' ? WordMasterData.length : 0,
                remainingCount: typeof WordMasterData !== 'undefined' 
                    ? WordMasterData.length - wordMasterUsed.length 
                    : 0
            }
        };
    }

    /**
     * Clear all used question history
     * @param {string} gameType - Optional specific game type to clear
     */
    function clearHistory(gameType) {
        if (gameType === 'geography-quiz' || !gameType) {
            clearUsedIdsFromStorage('geography-quiz');
        }
        if (gameType === 'word-master' || !gameType) {
            clearUsedIdsFromStorage('word-master');
        }
        state.usedQuestionIds = [];

        return {
            success: true,
            message: gameType 
                ? gameType + ' history cleared' 
                : 'All history cleared'
        };
    }

    /**
     * Set difficulty for Word Master
     * @param {string} difficulty - 'easy', 'medium', or 'hard'
     */
    function setDifficulty(difficulty) {
        if (['easy', 'medium', 'hard'].includes(difficulty)) {
            state.difficulty = difficulty;
            return {
                success: true,
                difficulty: difficulty
            };
        }
        return {
            success: false,
            message: 'Invalid difficulty. Use easy, medium, or hard.'
        };
    }

    // =============================================
    // PUBLIC API
    // =============================================

    return {
        // Core methods
        initGame: initGame,
        getCurrentQuestion: getCurrentQuestion,
        submitAnswer: submitAnswer,
        isComplete: isComplete,
        resetGame: resetGame,

        // State and scoring
        getState: getState,
        getScore: getScore,

        // Additional features
        skipQuestion: skipQuestion,
        getHint: getHint,

        // History management
        getUsageStats: getUsageStats,
        clearHistory: clearHistory,

        // Settings
        setDifficulty: setDifficulty
    };
})();
