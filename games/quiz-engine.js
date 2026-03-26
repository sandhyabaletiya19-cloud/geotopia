// quiz-engine.js

const QuizGameEngine = (function() {
    // Sample geography quiz questions
    const sampleGeographyQuestions = [
        {
            question: "What is the capital of France?",
            options: ["London", "Berlin", "Paris", "Madrid"],
            answer: "Paris"
        },
        {
            question: "Which is the largest ocean on Earth?",
            options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
            answer: "Pacific Ocean"
        },
        {
            question: "What is the longest river in the world?",
            options: ["Amazon River", "Nile River", "Yangtze River", "Mississippi River"],
            answer: "Nile River"
        },
        {
            question: "Which country has the largest population?",
            options: ["India", "United States", "China", "Indonesia"],
            answer: "China"
        },
        {
            question: "Mount Everest is located in which mountain range?",
            options: ["Andes", "Rockies", "Alps", "Himalayas"],
            answer: "Himalayas"
        },
        {
            question: "What is the smallest continent by land area?",
            options: ["Europe", "Australia", "Antarctica", "South America"],
            answer: "Australia"
        },
        {
            question: "Which desert is the largest in the world?",
            options: ["Sahara Desert", "Arabian Desert", "Gobi Desert", "Antarctic Desert"],
            answer: "Antarctic Desert"
        },
        {
            question: "What is the capital of Japan?",
            options: ["Seoul", "Beijing", "Tokyo", "Bangkok"],
            answer: "Tokyo"
        },
        {
            question: "Which continent is known as the 'Dark Continent'?",
            options: ["Asia", "Africa", "South America", "Australia"],
            answer: "Africa"
        },
        {
            question: "The Great Barrier Reef is located off the coast of which country?",
            options: ["Brazil", "Australia", "Indonesia", "Philippines"],
            answer: "Australia"
        }
    ];

    // Sample word master data (geography terms)
    const sampleWordMasterData = [
        {
            word: "CONTINENT",
            hint: "One of the seven large landmasses on Earth",
            category: "landform"
        },
        {
            word: "PENINSULA",
            hint: "Land surrounded by water on three sides",
            category: "landform"
        },
        {
            word: "ARCHIPELAGO",
            hint: "A group or chain of islands",
            category: "landform"
        },
        {
            word: "VOLCANO",
            hint: "A mountain that erupts with lava",
            category: "landform"
        },
        {
            word: "GLACIER",
            hint: "A slow-moving mass of ice",
            category: "water"
        },
        {
            word: "TRIBUTARY",
            hint: "A river that flows into a larger river",
            category: "water"
        },
        {
            word: "EQUATOR",
            hint: "Imaginary line dividing Earth into two hemispheres",
            category: "geography"
        },
        {
            word: "LATITUDE",
            hint: "Horizontal lines on a map measuring distance from equator",
            category: "geography"
        },
        {
            word: "LONGITUDE",
            hint: "Vertical lines on a map measuring distance from prime meridian",
            category: "geography"
        },
        {
            word: "TUNDRA",
            hint: "A cold, treeless biome in Arctic regions",
            category: "biome"
        },
        {
            word: "SAVANNA",
            hint: "A grassland with scattered trees in tropical regions",
            category: "biome"
        },
        {
            word: "PLATEAU",
            hint: "A flat elevated landform",
            category: "landform"
        }
    ];

    const state = {
        gameType: null,
        questions: [],
        currentIndex: 0,
        score: 0,
        totalQuestions: 0,
        answers: []
    };

    // Fisher-Yates shuffle
    function shuffle(array) {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    }

    // Generate display with missing letters for word master
    function generateMaskedWord(word, difficulty) {
        difficulty = difficulty || 'medium';
        
        const letters = word.split('');
        const wordLength = letters.length;
        let numToHide;

        // Determine how many letters to hide based on difficulty
        if (difficulty === 'easy') {
            numToHide = Math.ceil(wordLength * 0.3);
        } else if (difficulty === 'medium') {
            numToHide = Math.ceil(wordLength * 0.5);
        } else {
            numToHide = Math.ceil(wordLength * 0.7);
        }

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
            hiddenIndices: hideIndices,
            maskedLetters: maskedLetters
        };
    }

    // Create geography quiz questions
    function createGeographyQuestions(data, totalQuestions) {
        const questions = shuffle(data);
        const limited = totalQuestions ? questions.slice(0, totalQuestions) : questions;

        return limited.map(function(q, index) {
            return {
                id: index + 1,
                type: 'multiple-choice',
                question: q.question,
                options: shuffle([...q.options]),
                answer: q.answer
            };
        });
    }

    // Create word master questions
    function createWordMasterQuestions(data, totalQuestions, difficulty) {
        const words = shuffle(data);
        const limited = totalQuestions ? words.slice(0, totalQuestions) : words;

        return limited.map(function(w, index) {
            const masked = generateMaskedWord(w.word, difficulty);

            return {
                id: index + 1,
                type: 'word-master',
                word: w.word,
                hint: w.hint,
                category: w.category,
                display: masked.display,
                hiddenIndices: masked.hiddenIndices,
                maskedLetters: masked.maskedLetters,
                answer: w.word
            };
        });
    }

    // Initialize game based on type
    function initGame(gameType, options) {
        options = options || {};

        // Reset state
        state.gameType = gameType;
        state.currentIndex = 0;
        state.score = 0;
        state.answers = [];

        if (gameType === 'geography-quiz') {
            const data = options.data || sampleGeographyQuestions;
            const totalQuestions = options.totalQuestions || data.length;
            state.questions = createGeographyQuestions(data, totalQuestions);
            state.totalQuestions = state.questions.length;
        } else if (gameType === 'word-master') {
            const data = options.data || sampleWordMasterData;
            const totalQuestions = options.totalQuestions || data.length;
            const difficulty = options.difficulty || 'medium';
            state.questions = createWordMasterQuestions(data, totalQuestions, difficulty);
            state.totalQuestions = state.questions.length;
        } else {
            // Default to geography quiz
            state.gameType = 'geography-quiz';
            state.questions = createGeographyQuestions(sampleGeographyQuestions);
            state.totalQuestions = state.questions.length;
        }

        return {
            gameType: state.gameType,
            totalQuestions: state.totalQuestions,
            currentIndex: state.currentIndex,
            score: state.score
        };
    }

    // Get current question
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
                index: state.currentIndex,
                questionNumber: state.currentIndex + 1,
                totalQuestions: state.totalQuestions
            };
        } else if (state.gameType === 'word-master') {
            return {
                id: question.id,
                type: question.type,
                hint: question.hint,
                category: question.category,
                display: question.display,
                maskedLetters: [...question.maskedLetters],
                wordLength: question.word.length,
                index: state.currentIndex,
                questionNumber: state.currentIndex + 1,
                totalQuestions: state.totalQuestions
            };
        }

        return null;
    }

    // Normalize answer for comparison
    function normalizeAnswer(answer) {
        return answer.toString().trim().toUpperCase().replace(/\s+/g, '');
    }

    // Submit answer
    function submitAnswer(answer) {
        if (state.currentIndex >= state.questions.length) {
            return {
                success: false,
                message: "Quiz already completed",
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
            userAnswer: answer,
            correctAnswer: currentQuestion.answer,
            isCorrect: isCorrect
        });

        if (isCorrect) {
            state.score++;
        }

        state.currentIndex++;

        const isComplete = state.currentIndex >= state.questions.length;

        // Get next question if not complete
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
            currentIndex: state.currentIndex
        };
    }

    // Check if quiz is complete
    function isComplete() {
        return state.currentIndex >= state.questions.length;
    }

    // Reset game without reshuffling
    function resetGame() {
        state.currentIndex = 0;
        state.score = 0;
        state.answers = [];

        return {
            gameType: state.gameType,
            totalQuestions: state.totalQuestions,
            currentIndex: state.currentIndex,
            score: state.score
        };
    }

    // Get current game state
    function getState() {
        return {
            gameType: state.gameType,
            currentIndex: state.currentIndex,
            score: state.score,
            totalQuestions: state.totalQuestions,
            answers: state.answers.map(function(a) {
                return { ...a };
            }),
            isComplete: isComplete()
        };
    }

    // Get score details
    function getScore() {
        return {
            score: state.score,
            totalQuestions: state.totalQuestions,
            percentage: state.totalQuestions > 0 
                ? Math.round((state.score / state.totalQuestions) * 100) 
                : 0,
            answers: state.answers.map(function(a) {
                return { ...a };
            })
        };
    }

    // Skip current question (optional helper)
    function skipQuestion() {
        if (state.currentIndex >= state.questions.length) {
            return {
                success: false,
                message: "Quiz already completed",
                isComplete: true
            };
        }

        const currentQuestion = state.questions[state.currentIndex];

        // Record skipped answer
        state.answers.push({
            questionId: currentQuestion.id,
            userAnswer: null,
            correctAnswer: currentQuestion.answer,
            isCorrect: false,
            skipped: true
        });

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

    // Get hint for word master (reveal one more letter)
    function getHint() {
        if (state.gameType !== 'word-master') {
            return {
                success: false,
                message: "Hints only available for Word Master"
            };
        }

        if (state.currentIndex >= state.questions.length) {
            return {
                success: false,
                message: "Quiz already completed"
            };
        }

        const currentQuestion = state.questions[state.currentIndex];
        const hiddenIndices = currentQuestion.hiddenIndices;

        // Find a hidden letter to reveal
        const maskedLetters = currentQuestion.maskedLetters;
        let revealedIndex = -1;

        for (let i = 0; i < maskedLetters.length; i++) {
            if (maskedLetters[i] === '_') {
                maskedLetters[i] = currentQuestion.word[i];
                revealedIndex = i;
                break;
            }
        }

        if (revealedIndex === -1) {
            return {
                success: false,
                message: "No more letters to reveal"
            };
        }

        // Update display
        currentQuestion.display = maskedLetters.join(' ');
        currentQuestion.maskedLetters = maskedLetters;

        // Remove from hidden indices
        const indexPos = currentQuestion.hiddenIndices.indexOf(revealedIndex);
        if (indexPos > -1) {
            currentQuestion.hiddenIndices.splice(indexPos, 1);
        }

        return {
            success: true,
            revealedLetter: currentQuestion.word[revealedIndex],
            revealedIndex: revealedIndex,
            display: currentQuestion.display,
            maskedLetters: [...maskedLetters],
            remainingHidden: currentQuestion.hiddenIndices.length
        };
    }

    return {
        initGame: initGame,
        getCurrentQuestion: getCurrentQuestion,
        submitAnswer: submitAnswer,
        isComplete: isComplete,
        resetGame: resetGame,
        getState: getState,
        getScore: getScore,
        skipQuestion: skipQuestion,
        getHint: getHint
    };
})();
