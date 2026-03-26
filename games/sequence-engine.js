// sequence-engine.js

const SequenceGameEngine = (function() {
    // Supported number system bases
    const SUPPORTED_BASES = {
        BINARY: 2,
        OCTAL: 8,
        DECIMAL: 10,
        HEXADECIMAL: 16
    };

    // Base names for display
    const BASE_NAMES = {
        2: 'Binary',
        8: 'Octal',
        10: 'Decimal',
        16: 'Hexadecimal'
    };

    // State object to track game progress
    const state = {
        cards: [],
        openedCards: [],
        currentTarget: 1,
        totalCards: 0,
        base: 10,
        isGameComplete: false,
        attempts: 0,
        wrongAttempts: 0,
        startTime: null,
        endTime: null
    };

    // =============================================
    // UTILITY FUNCTIONS
    // =============================================

    /**
     * Fisher-Yates shuffle algorithm
     * @param {Array} array - Array to shuffle
     * @returns {Array} Shuffled array copy
     */
    function shuffle(array) {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    }

    /**
     * Convert decimal number to specified base
     * @param {number} decimalNumber - Number in decimal
     * @param {number} base - Target base (2, 8, 10, 16)
     * @returns {string} Number in target base as string
     */
    function toBase(decimalNumber, base) {
        if (base === 10) {
            return decimalNumber.toString();
        }
        return decimalNumber.toString(base).toUpperCase();
    }

    /**
     * Convert number from specified base to decimal
     * @param {string} numberString - Number as string in source base
     * @param {number} base - Source base
     * @returns {number} Number in decimal
     */
    function fromBase(numberString, base) {
        return parseInt(numberString, base);
    }

    /**
     * Get prefix for number system display
     * @param {number} base - Number base
     * @returns {string} Prefix string
     */
    function getBasePrefix(base) {
        switch (base) {
            case 2:
                return '0b';
            case 8:
                return '0o';
            case 16:
                return '0x';
            default:
                return '';
        }
    }

    /**
     * Format number with base prefix for display
     * @param {string} numberString - Number in target base
     * @param {number} base - Number base
     * @param {boolean} showPrefix - Whether to show prefix
     * @returns {string} Formatted number string
     */
    function formatNumber(numberString, base, showPrefix) {
        if (showPrefix) {
            return getBasePrefix(base) + numberString;
        }
        return numberString;
    }

    /**
     * Validate if base is supported
     * @param {number} base - Base to validate
     * @returns {boolean} True if supported
     */
    function isValidBase(base) {
        return [2, 8, 10, 16].includes(base);
    }

    /**
     * Calculate minimum cards for a base to be meaningful
     * @param {number} base - Number base
     * @returns {number} Minimum recommended cards
     */
    function getMinCardsForBase(base) {
        switch (base) {
            case 2:
                return 4; // At least show 1-4 in binary
            case 8:
                return 8; // Show variety in octal
            case 16:
                return 16; // Show A-F in hex
            default:
                return 4;
        }
    }

    /**
     * Calculate maximum practical cards for a base
     * @param {number} base - Number base
     * @returns {number} Maximum recommended cards
     */
    function getMaxCardsForBase(base) {
        switch (base) {
            case 2:
                return 32; // Binary gets long quickly
            case 8:
                return 64;
            case 16:
                return 256;
            default:
                return 100;
        }
    }

    // =============================================
    // CARD GENERATION
    // =============================================

    /**
     * Generate cards for the game
     * @param {number} totalCards - Number of cards to generate
     * @param {number} base - Number base for display
     * @returns {Array} Array of card objects
     */
    function generateCards(totalCards, base) {
        const cards = [];

        for (let i = 1; i <= totalCards; i++) {
            const displayValue = toBase(i, base);
            
            cards.push({
                id: i,
                decimalValue: i,
                displayValue: displayValue,
                formattedValue: formatNumber(displayValue, base, true),
                base: base,
                position: null // Will be set after shuffle
            });
        }

        return cards;
    }

    /**
     * Create shuffled cards with positions
     * @param {number} totalCards - Number of cards
     * @param {number} base - Number base
     * @returns {Array} Shuffled cards with positions
     */
    function createShuffledCards(totalCards, base) {
        const cards = generateCards(totalCards, base);
        const shuffled = shuffle(cards);

        // Assign positions after shuffle
        return shuffled.map(function(card, index) {
            return {
                ...card,
                position: index
            };
        });
    }

    // =============================================
    // CARD LOOKUP HELPERS
    // =============================================

    /**
     * Find card by decimal value
     * @param {number} decimalValue - Decimal value to find
     * @returns {Object|null} Card object or null
     */
    function findCardByDecimalValue(decimalValue) {
        return state.cards.find(function(card) {
            return card.decimalValue === decimalValue;
        }) || null;
    }

    /**
     * Find card by display value (in current base)
     * @param {string} displayValue - Display value to find
     * @returns {Object|null} Card object or null
     */
    function findCardByDisplayValue(displayValue) {
        const normalized = displayValue.toString().toUpperCase();
        return state.cards.find(function(card) {
            return card.displayValue.toUpperCase() === normalized;
        }) || null;
    }

    /**
     * Find card by ID
     * @param {number} cardId - Card ID to find
     * @returns {Object|null} Card object or null
     */
    function findCardById(cardId) {
        return state.cards.find(function(card) {
            return card.id === cardId;
        }) || null;
    }

    /**
     * Check if card is already opened
     * @param {number} decimalValue - Decimal value to check
     * @returns {boolean} True if already opened
     */
    function isCardOpened(decimalValue) {
        return state.openedCards.includes(decimalValue);
    }

    /**
     * Parse card value input (can be decimal, display value, or formatted)
     * @param {string|number} cardValue - Input value
     * @returns {number|null} Decimal value or null if invalid
     */
    function parseCardValue(cardValue) {
        // If already a number, assume it's the decimal value
        if (typeof cardValue === 'number') {
            return cardValue;
        }

        const valueStr = cardValue.toString().trim().toUpperCase();

        // Remove common prefixes
        let cleanValue = valueStr;
        if (valueStr.startsWith('0B')) {
            cleanValue = valueStr.slice(2);
            return parseInt(cleanValue, 2);
        } else if (valueStr.startsWith('0O')) {
            cleanValue = valueStr.slice(2);
            return parseInt(cleanValue, 8);
        } else if (valueStr.startsWith('0X')) {
            cleanValue = valueStr.slice(2);
            return parseInt(cleanValue, 16);
        }

        // Try to parse in current base
        const parsed = parseInt(cleanValue, state.base);
        if (!isNaN(parsed)) {
            return parsed;
        }

        // Try decimal as fallback
        const decimalParsed = parseInt(cleanValue, 10);
        if (!isNaN(decimalParsed)) {
            return decimalParsed;
        }

        return null;
    }

    // =============================================
    // MAIN ENGINE METHODS
    // =============================================

    /**
     * Initialize the game
     * @param {Object} options - Game options
     * @param {number} options.totalCards - Number of cards (default: 9)
     * @param {number} options.base - Number base (2, 8, 10, 16) (default: 10)
     * @param {boolean} options.showPrefix - Show base prefix on cards (default: false)
     * @returns {Object} Initial game state
     */
    function initGame(options) {
        options = options || {};

        // Validate and set base
        const base = isValidBase(options.base) ? options.base : 10;

        // Validate and set total cards
        const minCards = getMinCardsForBase(base);
        const maxCards = getMaxCardsForBase(base);
        let totalCards = options.totalCards || 9;
        
        // Clamp to valid range
        totalCards = Math.max(minCards, Math.min(totalCards, maxCards));

        // Reset state
        state.base = base;
        state.totalCards = totalCards;
        state.currentTarget = 1;
        state.openedCards = [];
        state.isGameComplete = false;
        state.attempts = 0;
        state.wrongAttempts = 0;
        state.startTime = Date.now();
        state.endTime = null;

        // Generate and shuffle cards
        state.cards = createShuffledCards(totalCards, base);

        return {
            cards: state.cards.map(function(card) {
                return { ...card };
            }),
            totalCards: state.totalCards,
            base: state.base,
            baseName: BASE_NAMES[state.base],
            currentTarget: state.currentTarget,
            currentTargetDisplay: toBase(state.currentTarget, state.base),
            openedCards: [],
            isComplete: false
        };
    }

    /**
     * Handle card click
     * @param {string|number} cardValue - Clicked card value (can be display value or decimal)
     * @returns {Object} Result of the click action
     */
    function handleCardClick(cardValue) {
        // Parse the card value to decimal
        const decimalValue = parseCardValue(cardValue);

        // Invalid card value
        if (decimalValue === null || decimalValue < 1 || decimalValue > state.totalCards) {
            return {
                success: false,
                reason: 'invalid_card',
                message: 'Invalid card value',
                openedCards: [...state.openedCards],
                currentTarget: state.currentTarget,
                currentTargetDisplay: toBase(state.currentTarget, state.base),
                isComplete: state.isGameComplete
            };
        }

        // Game already complete
        if (state.isGameComplete) {
            return {
                success: false,
                reason: 'game_complete',
                message: 'Game is already complete',
                openedCards: [...state.openedCards],
                currentTarget: state.currentTarget,
                currentTargetDisplay: toBase(state.currentTarget, state.base),
                isComplete: true
            };
        }

        // Increment attempt counter
        state.attempts++;

        // Check if card is already opened
        if (isCardOpened(decimalValue)) {
            return {
                success: false,
                reason: 'already_opened',
                message: 'Card is already opened',
                openedCards: [...state.openedCards],
                currentTarget: state.currentTarget,
                currentTargetDisplay: toBase(state.currentTarget, state.base),
                isComplete: false
            };
        }

        // Check if clicked card matches current target
        if (decimalValue === state.currentTarget) {
            // Correct card clicked
            state.openedCards.push(decimalValue);
            state.currentTarget++;

            // Check if game is complete
            const isComplete = state.openedCards.length === state.totalCards;
            
            if (isComplete) {
                state.isGameComplete = true;
                state.endTime = Date.now();
            }

            return {
                success: true,
                clickedValue: decimalValue,
                clickedDisplay: toBase(decimalValue, state.base),
                openedCards: [...state.openedCards],
                openedCardsDisplay: state.openedCards.map(function(v) {
                    return toBase(v, state.base);
                }),
                currentTarget: state.currentTarget,
                currentTargetDisplay: state.currentTarget <= state.totalCards 
                    ? toBase(state.currentTarget, state.base) 
                    : null,
                isComplete: isComplete,
                attempts: state.attempts,
                timeTaken: isComplete ? state.endTime - state.startTime : null
            };
        } else {
            // Wrong card clicked - reset progress
            state.wrongAttempts++;
            const previouslyOpened = [...state.openedCards];
            state.openedCards = [];
            state.currentTarget = 1;

            return {
                success: false,
                reason: 'wrong_card',
                message: 'Wrong card! Sequence reset.',
                clickedValue: decimalValue,
                clickedDisplay: toBase(decimalValue, state.base),
                expectedValue: state.currentTarget,
                expectedDisplay: toBase(1, state.base), // Reset target is 1
                previouslyOpened: previouslyOpened,
                openedCards: [],
                currentTarget: 1,
                currentTargetDisplay: toBase(1, state.base),
                isComplete: false,
                wrongAttempts: state.wrongAttempts
            };
        }
    }

    /**
     * Reset the game without reshuffling
     * @returns {Object} Reset game state
     */
    function resetGame() {
        state.openedCards = [];
        state.currentTarget = 1;
        state.isGameComplete = false;
        state.attempts = 0;
        state.wrongAttempts = 0;
        state.startTime = Date.now();
        state.endTime = null;

        return {
            cards: state.cards.map(function(card) {
                return { ...card };
            }),
            totalCards: state.totalCards,
            base: state.base,
            baseName: BASE_NAMES[state.base],
            currentTarget: state.currentTarget,
            currentTargetDisplay: toBase(state.currentTarget, state.base),
            openedCards: [],
            isComplete: false,
            message: 'Game reset. Cards remain in same positions.'
        };
    }

    /**
     * Start a completely new game with reshuffle
     * @param {Object} options - New game options (same as initGame)
     * @returns {Object} New game state
     */
    function newGame(options) {
        return initGame(options || {
            totalCards: state.totalCards,
            base: state.base
        });
    }

    /**
     * Get current game state
     * @returns {Object} Current state snapshot
     */
    function getState() {
        return {
            cards: state.cards.map(function(card) {
                return { ...card };
            }),
            openedCards: [...state.openedCards],
            openedCardsDisplay: state.openedCards.map(function(v) {
                return toBase(v, state.base);
            }),
            currentTarget: state.currentTarget,
            currentTargetDisplay: state.currentTarget <= state.totalCards 
                ? toBase(state.currentTarget, state.base) 
                : null,
            totalCards: state.totalCards,
            base: state.base,
            baseName: BASE_NAMES[state.base],
            isComplete: state.isGameComplete,
            attempts: state.attempts,
            wrongAttempts: state.wrongAttempts,
            progress: {
                opened: state.openedCards.length,
                total: state.totalCards,
                percentage: Math.round((state.openedCards.length / state.totalCards) * 100)
            },
            time: {
                startTime: state.startTime,
                endTime: state.endTime,
                elapsed: state.endTime 
                    ? state.endTime - state.startTime 
                    : Date.now() - state.startTime
            }
        };
    }

    /**
     * Get card at specific position
     * @param {number} position - Position index
     * @returns {Object|null} Card at position or null
     */
    function getCardAtPosition(position) {
        const card = state.cards.find(function(c) {
            return c.position === position;
        });

        if (!card) {
            return null;
        }

        return {
            ...card,
            isOpened: isCardOpened(card.decimalValue)
        };
    }

    /**
     * Get all cards with their opened status
     * @returns {Array} Cards with isOpened flag
     */
    function getCardsWithStatus() {
        return state.cards.map(function(card) {
            return {
                ...card,
                isOpened: isCardOpened(card.decimalValue)
            };
        });
    }

    /**
     * Check if a specific card is opened
     * @param {string|number} cardValue - Card value to check
     * @returns {boolean} True if card is opened
     */
    function isOpened(cardValue) {
        const decimalValue = parseCardValue(cardValue);
        if (decimalValue === null) {
            return false;
        }
        return isCardOpened(decimalValue);
    }

    /**
     * Get game statistics
     * @returns {Object} Game statistics
     */
    function getStats() {
        const elapsed = state.endTime 
            ? state.endTime - state.startTime 
            : Date.now() - state.startTime;

        return {
            totalCards: state.totalCards,
            openedCount: state.openedCards.length,
            remainingCount: state.totalCards - state.openedCards.length,
            attempts: state.attempts,
            wrongAttempts: state.wrongAttempts,
            accuracy: state.attempts > 0 
                ? Math.round(((state.attempts - state.wrongAttempts) / state.attempts) * 100) 
                : 100,
            isComplete: state.isGameComplete,
            timeElapsedMs: elapsed,
            timeElapsedSeconds: Math.round(elapsed / 1000),
            base: state.base,
            baseName: BASE_NAMES[state.base]
        };
    }

    /**
     * Convert a number between bases
     * @param {string|number} value - Value to convert
     * @param {number} fromBase - Source base
     * @param {number} toBase - Target base
     * @returns {string} Converted value
     */
    function convertBase(value, fromBaseParam, toBaseParam) {
        const decimal = parseInt(value.toString(), fromBaseParam);
        if (isNaN(decimal)) {
            return null;
        }
        return decimal.toString(toBaseParam).toUpperCase();
    }

    /**
     * Get supported bases information
     * @returns {Object} Supported bases
     */
    function getSupportedBases() {
        return {
            bases: { ...SUPPORTED_BASES },
            names: { ...BASE_NAMES },
            list: [
                { base: 2, name: 'Binary', prefix: '0b' },
                { base: 8, name: 'Octal', prefix: '0o' },
                { base: 10, name: 'Decimal', prefix: '' },
                { base: 16, name: 'Hexadecimal', prefix: '0x' }
            ]
        };
    }

    /**
     * Get hint - reveals the next target card position
     * @returns {Object} Hint information
     */
    function getHint() {
        if (state.isGameComplete) {
            return {
                success: false,
                message: 'Game is already complete'
            };
        }

        const targetCard = findCardByDecimalValue(state.currentTarget);
        
        if (!targetCard) {
            return {
                success: false,
                message: 'Could not find target card'
            };
        }

        return {
            success: true,
            targetValue: state.currentTarget,
            targetDisplay: toBase(state.currentTarget, state.base),
            targetPosition: targetCard.position,
            hint: 'Look for ' + toBase(state.currentTarget, state.base) + 
                  ' at position ' + (targetCard.position + 1)
        };
    }

    /**
     * Validate a sequence of values
     * @param {Array} values - Array of values to validate
     * @returns {Object} Validation result
     */
    function validateSequence(values) {
        const decimalValues = values.map(function(v) {
            return parseCardValue(v);
        });

        // Check for invalid values
        const invalidIndex = decimalValues.findIndex(function(v) {
            return v === null;
        });

        if (invalidIndex !== -1) {
            return {
                valid: false,
                error: 'Invalid value at index ' + invalidIndex
            };
        }

        // Check if sequence is correct (1, 2, 3, ...)
        for (let i = 0; i < decimalValues.length; i++) {
            if (decimalValues[i] !== i + 1) {
                return {
                    valid: false,
                    error: 'Sequence broken at index ' + i + 
                           '. Expected ' + (i + 1) + 
                           ', got ' + decimalValues[i]
                };
            }
        }

        return {
            valid: true,
            length: decimalValues.length,
            complete: decimalValues.length === state.totalCards
        };
    }

    // =============================================
    // PUBLIC API
    // =============================================

    return {
        // Core game methods
        initGame: initGame,
        handleCardClick: handleCardClick,
        resetGame: resetGame,
        newGame: newGame,
        getState: getState,

        // Card access methods
        getCardAtPosition: getCardAtPosition,
        getCardsWithStatus: getCardsWithStatus,
        isOpened: isOpened,

        // Statistics and info
        getStats: getStats,
        getHint: getHint,

        // Utility methods
        convertBase: convertBase,
        getSupportedBases: getSupportedBases,
        validateSequence: validateSequence,

        // Constants
        BASES: SUPPORTED_BASES
    };
})();
