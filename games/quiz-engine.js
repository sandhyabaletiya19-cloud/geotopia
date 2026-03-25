// quiz-engine.js

const QuizGame = (function() {
    const questions = [
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
            question: "Which country has the most population?",
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

    const state = {
        shuffledQuestions: [],
        currentIndex: 0,
        score: 0,
        totalQuestions: 0
    };

    function shuffle(array) {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    }

    function initGame() {
        state.shuffledQuestions = shuffle(questions);
        state.currentIndex = 0;
        state.score = 0;
        state.totalQuestions = state.shuffledQuestions.length;

        return {
            totalQuestions: state.totalQuestions,
            currentIndex: state.currentIndex,
            score: state.score
        };
    }

    function getCurrentQuestion() {
        if (state.currentIndex >= state.shuffledQuestions.length) {
            return null;
        }

        const question = state.shuffledQuestions[state.currentIndex];

        return {
            question: question.question,
            options: [...question.options],
            questionNumber: state.currentIndex + 1,
            totalQuestions: state.totalQuestions
        };
    }

    function submitAnswer(answer) {
        if (state.currentIndex >= state.shuffledQuestions.length) {
            return {
                success: false,
                message: "Quiz already completed",
                isComplete: true,
                score: state.score,
                totalQuestions: state.totalQuestions
            };
        }

        const currentQuestion = state.shuffledQuestions[state.currentIndex];
        const isCorrect = answer === currentQuestion.answer;

        if (isCorrect) {
            state.score++;
        }

        state.currentIndex++;

        const isComplete = state.currentIndex >= state.shuffledQuestions.length;

        return {
            success: isCorrect,
            correctAnswer: currentQuestion.answer,
            isComplete: isComplete,
            score: state.score,
            totalQuestions: state.totalQuestions,
            currentIndex: state.currentIndex
        };
    }

    function isComplete() {
        return state.currentIndex >= state.shuffledQuestions.length;
    }

    function resetGame() {
        state.currentIndex = 0;
        state.score = 0;

        return {
            totalQuestions: state.totalQuestions,
            currentIndex: state.currentIndex,
            score: state.score
        };
    }

    function getScore() {
        return {
            score: state.score,
            totalQuestions: state.totalQuestions
        };
    }

    return {
        initGame: initGame,
        getCurrentQuestion: getCurrentQuestion,
        submitAnswer: submitAnswer,
        isComplete: isComplete,
        resetGame: resetGame,
        getScore: getScore
    };
})();
