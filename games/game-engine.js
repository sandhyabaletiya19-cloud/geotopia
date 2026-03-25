const SequentialMemoryGame = (function() {
    const state = {
        cards: [],
        openedCards: [],
        currentTarget: 1,
        totalCards: 0
    };

    function shuffle(array) {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    }

    function initGame(totalCards) {
        state.totalCards = totalCards;
        state.currentTarget = 1;
        state.openedCards = [];
        
        const numbers = [];
        for (let i = 1; i <= totalCards; i++) {
            numbers.push(i);
        }
        
        state.cards = shuffle(numbers);
        
        return {
            cards: [...state.cards],
            currentTarget: state.currentTarget
        };
    }

    function handleCardClick(cardValue) {
        if (state.openedCards.includes(cardValue)) {
            return {
                success: false,
                reason: 'already_opened',
                openedCards: [...state.openedCards],
                currentTarget: state.currentTarget,
                isComplete: false
            };
        }

        if (cardValue === state.currentTarget) {
            state.openedCards.push(cardValue);
            state.currentTarget++;
            
            const isComplete = state.openedCards.length === state.totalCards;
            
            return {
                success: true,
                openedCards: [...state.openedCards],
                currentTarget: state.currentTarget,
                isComplete: isComplete
            };
        } else {
            state.openedCards = [];
            state.currentTarget = 1;
            
            return {
                success: false,
                reason: 'wrong_card',
                openedCards: [],
                currentTarget: state.currentTarget,
                isComplete: false
            };
        }
    }

    function resetGame() {
        state.openedCards = [];
        state.currentTarget = 1;
        
        return {
            cards: [...state.cards],
            openedCards: [],
            currentTarget: state.currentTarget
        };
    }

    return {
        initGame: initGame,
        handleCardClick: handleCardClick,
        resetGame: resetGame,
        getState: function() {
            return {
                cards: [...state.cards],
                openedCards: [...state.openedCards],
                currentTarget: state.currentTarget,
                totalCards: state.totalCards
            };
        }
    };
})();
