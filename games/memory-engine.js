// memory-engine.js

const MemoryGameEngine = (function() {
    // Sample flag data (country codes)
    const sampleFlagData = [
        'us', 'gb', 'fr', 'de', 'jp', 'br', 'ca', 'au'
    ];

    // Sample card flip data (numbers)
    const sampleCardFlipData = [1, 2, 3, 4, 5, 6];

    const state = {
        cards: [],
        openedCards: [],
        matchedCards: [],
        currentTarget: 1,
        gameType: null,
        totalCards: 0
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

    // Create cards for sequential memory game
    function createSequentialCards(totalCards) {
        const cards = [];
        for (let i = 1; i <= totalCards; i++) {
            cards.push({
                id: i,
                value: i
            });
        }
        return shuffle(cards);
    }

    // Create paired cards for matching games
    function createPairCards(data) {
        const cards = [];
        let cardId = 1;

        data.forEach(function(value, index) {
            // Create first card of pair
            cards.push({
                id: cardId++,
                value: value,
                pairId: index + 1
            });
            // Create second card of pair
            cards.push({
                id: cardId++,
                value: value,
                pairId: index + 1
            });
        });

        return shuffle(cards);
    }

    // Find card by ID
    function findCardById(cardId) {
        return state.cards.find(function(card) {
            return card.id === cardId;
        });
    }

    // Check if card is already matched
    function isCardMatched(cardId) {
        return state.matchedCards.includes(cardId);
    }

    // Check if card is currently opened
    function isCardOpened(cardId) {
        return state.openedCards.includes(cardId);
    }

    // Handle sequential game click
    function handleSequentialClick(cardId) {
        const card = findCardById(cardId);

        if (!card) {
            return {
                success: false,
                reason: 'invalid_card',
                openedCards: [...state.openedCards],
                matchedCards: [...state.matchedCards],
                currentTarget: state.currentTarget,
                isComplete: false
            };
        }

        // Check if already opened
        if (isCardOpened(cardId)) {
            return {
                success: false,
                reason: 'already_opened',
                openedCards: [...state.openedCards],
                matchedCards: [...state.matchedCards],
                currentTarget: state.currentTarget,
                isComplete: false
            };
        }

        // Check if correct sequence
        if (card.value === state.currentTarget) {
            state.openedCards.push(cardId);
            state.currentTarget++;

            const isComplete = state.openedCards.length === state.totalCards;

            return {
                success: true,
                openedCards: [...state.openedCards],
                matchedCards: [...state.matchedCards],
                currentTarget: state.currentTarget,
                isComplete: isComplete
            };
        } else {
            // Wrong sequence - reset opened cards
            state.openedCards = [];
            state.currentTarget = 1;

            return {
                success: false,
                reason: 'wrong_card',
                openedCards: [],
                matchedCards: [...state.matchedCards],
                currentTarget: state.currentTarget,
                isComplete: false
            };
        }
    }

    // Handle pair matching click (flags and card-flip)
    function handlePairMatchClick(cardId) {
        const card = findCardById(cardId);

        if (!card) {
            return {
                success: false,
                reason: 'invalid_card',
                openedCards: [...state.openedCards],
                matchedCards: [...state.matchedCards],
                currentTarget: state.currentTarget,
                isComplete: false
            };
        }

        // Check if already matched
        if (isCardMatched(cardId)) {
            return {
                success: false,
                reason: 'already_opened',
                openedCards: [...state.openedCards],
                matchedCards: [...state.matchedCards],
                currentTarget: state.currentTarget,
                isComplete: false
            };
        }

        // Check if currently opened
        if (isCardOpened(cardId)) {
            return {
                success: false,
                reason: 'already_opened',
                openedCards: [...state.openedCards],
                matchedCards: [...state.matchedCards],
                currentTarget: state.currentTarget,
                isComplete: false
            };
        }

        // Add card to opened
        state.openedCards.push(cardId);

        // First card of pair attempt
        if (state.openedCards.length === 1) {
            return {
                success: true,
                openedCards: [...state.openedCards],
                matchedCards: [...state.matchedCards],
                currentTarget: state.currentTarget,
                isComplete: false
            };
        }

        // Second card - check for match
        if (state.openedCards.length === 2) {
            const firstCardId = state.openedCards[0];
            const secondCardId = state.openedCards[1];

            const firstCard = findCardById(firstCardId);
            const secondCard = findCardById(secondCardId);

            // Check if values match
            if (firstCard.value === secondCard.value) {
                // Match found - move to matched
                state.matchedCards.push(firstCardId);
                state.matchedCards.push(secondCardId);
                state.openedCards = [];

                const isComplete = state.matchedCards.length === state.totalCards;

                return {
                    success: true,
                    matched: true,
                    openedCards: [],
                    matchedCards: [...state.matchedCards],
                    currentTarget: state.currentTarget,
                    isComplete: isComplete
                };
            } else {
                // No match - return opened cards for UI to flip back
                const failedPair = [...state.openedCards];
                state.openedCards = [];

                return {
                    success: false,
                    reason: 'wrong_card',
                    matched: false,
                    failedPair: failedPair,
                    openedCards: [],
                    matchedCards: [...state.matchedCards],
                    currentTarget: state.currentTarget,
                    isComplete: false
                };
            }
        }

        // More than 2 cards opened - clear and start fresh
        state.openedCards = [cardId];

        return {
            success: true,
            openedCards: [...state.openedCards],
            matchedCards: [...state.matchedCards],
            currentTarget: state.currentTarget,
            isComplete: false
        };
    }

    // Initialize game based on type
    function initGame(gameType, options) {
        options = options || {};

        // Reset state
        state.gameType = gameType;
        state.openedCards = [];
        state.matchedCards = [];
        state.currentTarget = 1;

        if (gameType === 'sequential') {
            const totalCards = options.totalCards || 9;
            state.totalCards = totalCards;
            state.cards = createSequentialCards(totalCards);
        } else if (gameType === 'flags') {
            const data = options.data || sampleFlagData;
            state.totalCards = data.length * 2;
            state.cards = createPairCards(data);
        } else if (gameType === 'card-flip') {
            const data = options.data || sampleCardFlipData;
            state.totalCards = data.length * 2;
            state.cards = createPairCards(data);
        } else {
            // Default to sequential
            state.gameType = 'sequential';
            state.totalCards = 9;
            state.cards = createSequentialCards(9);
        }

        return {
            cards: state.cards.map(function(card) {
                return { ...card };
            }),
            gameType: state.gameType,
            totalCards: state.totalCards,
            openedCards: [],
            matchedCards: [],
            currentTarget: state.currentTarget
        };
    }

    // Handle card click - delegates to specific handler
    function handleCardClick(cardId) {
        if (state.gameType === 'sequential') {
            return handleSequentialClick(cardId);
        } else {
            return handlePairMatchClick(cardId);
        }
    }

    // Reset current game without reshuffling
    function resetGame() {
        state.openedCards = [];
        state.matchedCards = [];
        state.currentTarget = 1;

        return {
            cards: state.cards.map(function(card) {
                return { ...card };
            }),
            gameType: state.gameType,
            totalCards: state.totalCards,
            openedCards: [],
            matchedCards: [],
            currentTarget: state.currentTarget
        };
    }

    // Get current game state
    function getState() {
        return {
            cards: state.cards.map(function(card) {
                return { ...card };
            }),
            openedCards: [...state.openedCards],
            matchedCards: [...state.matchedCards],
            currentTarget: state.currentTarget,
            gameType: state.gameType,
            totalCards: state.totalCards
        };
    }

    // Clear opened cards (for UI to call after flip-back animation)
    function clearOpenedCards() {
        state.openedCards = [];

        return {
            openedCards: [],
            matchedCards: [...state.matchedCards]
        };
    }

    return {
        initGame: initGame,
        handleCardClick: handleCardClick,
        resetGame: resetGame,
        getState: getState,
        clearOpenedCards: clearOpenedCards
    };
})();
