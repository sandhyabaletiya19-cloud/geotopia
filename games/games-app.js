
/* ==== FILE: games-app.js ==== */
class GamesApp {
    constructor() {
        this.currentGame = null;
        this.currentEngine = null;
        this.score = 0;
        this.level = 1;
        this.lives = 3;
        this.isPaused = false;
        this.timerInterval = null;
        this.elapsedTime = 0;
        
        this.engines = {
            'sequential-memory': null,
            'flag-memory': null,
            'card-flip': null,
            'geography-quiz': null,
            'word-master': null,
            'number-system': null,
            'treasure-run': null,
            'swipe-game': null
        };
        
        // Card state tracking for memory games
        this.cardState = {
            openedCards: [],
            matchedCards: [],
            isChecking: false,
            moves: 0
        };
        
        this.init();
    }
    
    init() {
        this.cacheElements();
        this.bindEvents();
        this.loadTheme();
        this.injectCardStyles();
        this.selectGame('sequential-memory');
    }
    
    cacheElements() {
        this.gameSelector = document.getElementById('game-selector');
        this.themeSelector = document.getElementById('theme-selector');
        this.gameBoard = document.getElementById('game-board');
        this.levelDisplay = document.getElementById('level-display');
        this.scoreDisplay = document.getElementById('score-display');
        this.livesDisplay = document.getElementById('lives-display');
        this.timeDisplay = document.getElementById('time-display');
        this.startBtn = document.getElementById('start-btn');
        this.restartBtn = document.getElementById('restart-btn');
        this.pauseBtn = document.getElementById('pause-btn');
        this.gameMessage = document.getElementById('game-message');
        this.modal = document.getElementById('game-modal');
        this.modalTitle = document.getElementById('modal-title');
        this.modalMessage = document.getElementById('modal-message');
        this.modalStats = document.getElementById('modal-stats');
        this.modalRestart = document.getElementById('modal-restart');
        this.modalClose = document.getElementById('modal-close');
    }
    
    bindEvents() {
        this.gameSelector.addEventListener('change', (e) => this.selectGame(e.target.value));
        this.themeSelector.addEventListener('change', (e) => this.setTheme(e.target.value));
        this.startBtn.addEventListener('click', () => this.startGame());
        this.restartBtn.addEventListener('click', () => this.restartGame());
        this.pauseBtn.addEventListener('click', () => this.togglePause());
        this.modalRestart.addEventListener('click', () => this.restartGame());
        this.modalClose.addEventListener('click', () => this.hideModal());
        
        document.addEventListener('keydown', (e) => this.handleKeyboard(e));
    }
    
    loadTheme() {
        const savedTheme = localStorage.getItem('geotopia-theme') || 'kids';
        this.setTheme(savedTheme);
        this.themeSelector.value = savedTheme;
    }
    
    setTheme(theme) {
        document.body.setAttribute('data-theme', theme);
        localStorage.setItem('geotopia-theme', theme);
    }
    
    selectGame(gameId) {
        this.currentGame = gameId;
        this.stopTimer();
        this.resetStats();
        this.resetCardState();
        this.gameBoard.innerHTML = '';
        
        const instructions = this.getGameInstructions(gameId);
        this.gameBoard.innerHTML = `
            <div class="game-instructions">
                <h2>${this.getGameTitle(gameId)}</h2>
                <p>${instructions}</p>
                <p class="hint">Press "Start Game" to begin!</p>
            </div>
        `;
        
        this.gameBoard.querySelector('.game-instructions').style.cssText = `
            text-align: center;
            padding: 40px;
            max-width: 500px;
        `;
        
        this.gameBoard.querySelector('h2').style.cssText = `
            font-size: 1.8rem;
            margin-bottom: 20px;
            color: var(--primary-color);
        `;
        
        this.gameBoard.querySelector('p').style.cssText = `
            font-size: 1.1rem;
            line-height: 1.6;
            margin-bottom: 15px;
        `;
        
        this.gameBoard.querySelector('.hint').style.cssText = `
            font-style: italic;
            color: var(--secondary-color);
        `;
    }
    
    getGameTitle(gameId) {
        const titles = {
            'sequential-memory': '🧠 Sequential Memory',
            'flag-memory': '🏳️ Flag Memory Match',
            'card-flip': '🃏 Card Flip Game',
            'geography-quiz': '🌍 Geography Quiz',
            'word-master': '📚 Word Master',
            'number-system': '🔢 Number System Game',
            'treasure-run': '💎 Treasure Run',
            'swipe-game': '⚔️ Swipe Master'
        };
        return titles[gameId] || gameId;
    }
    
    getGameInstructions(gameId) {
        const instructions = {
            'sequential-memory': 'Watch the sequence of tiles lighting up, then repeat the pattern in the correct order. Each level adds one more step to the sequence!',
            'flag-memory': 'Find matching pairs of country flags. Click two cards to flip them. Match all pairs to win!',
            'card-flip': 'Classic memory game with emoji cards. Find all matching pairs in the fewest moves possible!',
            'geography-quiz': 'Test your geography knowledge! Answer questions about countries, capitals, and landmarks.',
            'word-master': 'Guess the word from its definition. Build your vocabulary and become a Word Master!',
            'number-system': 'Click numbers in ascending order. Numbers are shown in different formats: binary, decimal, octal, or hexadecimal!',
            'treasure-run': 'Navigate through the maze using arrow keys or buttons. Collect all treasures and reach the exit!',
            'swipe-game': 'Swipe across fruits to slice them! Avoid bombs or lose a life. How high can you score?'
        };
        return instructions[gameId] || '';
    }
    
    startGame() {
        this.resetStats();
        this.resetCardState();
        this.startTimer();
        this.initEngine();
    }
    
    restartGame() {
        this.hideModal();
        this.startGame();
    }
    
    initEngine() {
        switch(this.currentGame) {
            case 'sequential-memory':
                this.currentEngine = new MemoryGameEngine(this, 'sequential');
                break;
            case 'flag-memory':
                this.currentEngine = new MemoryGameEngine(this, 'flags');
                break;
            case 'card-flip':
                this.currentEngine = new MemoryGameEngine(this, 'card-flip');
                break;
            case 'geography-quiz':
                this.currentEngine = new QuizGameEngine(this, 'geography');
                break;
            case 'word-master':
                this.currentEngine = new QuizGameEngine(this, 'words');
                break;
            case 'number-system':
                this.currentEngine = new SequenceGameEngine(this);
                break;
            case 'treasure-run':
                this.currentEngine = new TreasureRunEngine(this);
                break;
            case 'swipe-game':
                this.currentEngine = new SwipeGameEngine(this);
                break;
        }
        
        if (this.currentEngine) {
            this.currentEngine.init();
        }
    }
    
    resetStats() {
        this.score = 0;
        this.level = 1;
        this.lives = 3;
        this.elapsedTime = 0;
        this.isPaused = false;
        this.updateDisplay();
    }
    
    resetCardState() {
        this.cardState = {
            openedCards: [],
            matchedCards: [],
            isChecking: false,
            moves: 0
        };
    }
    
    updateDisplay() {
        this.levelDisplay.textContent = this.level;
        this.scoreDisplay.textContent = this.score;
        this.livesDisplay.textContent = '❤️'.repeat(Math.max(0, this.lives));
        this.updateTimeDisplay();
    }
    
    updateTimeDisplay() {
        const minutes = Math.floor(this.elapsedTime / 60);
        const seconds = this.elapsedTime % 60;
        this.timeDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }
    
    startTimer() {
        this.stopTimer();
        this.timerInterval = setInterval(() => {
            if (!this.isPaused) {
                this.elapsedTime++;
                this.updateTimeDisplay();
            }
        }, 1000);
    }
    
    stopTimer() {
        if (this.timerInterval) {
            clearInterval(this.timerInterval);
            this.timerInterval = null;
        }
    }
    
    togglePause() {
        this.isPaused = !this.isPaused;
        this.pauseBtn.textContent = this.isPaused ? 'Resume' : 'Pause';
        
        if (this.currentEngine && this.currentEngine.onPause) {
            this.currentEngine.onPause(this.isPaused);
        }
    }
    
    addScore(points) {
        this.score += points;
        this.updateDisplay();
        this.showFloatingScore(points);
    }
    
    showFloatingScore(points) {
        const floater = document.createElement('div');
        floater.className = 'floating-score';
        floater.textContent = `+${points}`;
        floater.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            font-size: 2rem;
            font-weight: 800;
            color: var(--success-color);
            pointer-events: none;
            animation: floatUp 1s ease forwards;
            z-index: 1000;
        `;
        document.body.appendChild(floater);
        setTimeout(() => floater.remove(), 1000);
    }
    
    loseLife() {
        this.lives--;
        this.updateDisplay();
        
        if (this.lives <= 0) {
            this.gameOver();
        }
    }
    
    levelUp() {
        this.level++;
        this.updateDisplay();
        this.showMessage('Level Up! 🎉', 'success');
        
        if (this.currentEngine && this.currentEngine.onLevelUp) {
            setTimeout(() => this.currentEngine.onLevelUp(), 1500);
        }
    }
    
    gameOver() {
        this.stopTimer();
        if (this.currentEngine && this.currentEngine.cleanup) {
            this.currentEngine.cleanup();
        }
        this.showModal('Game Over! 💔', 'Better luck next time!', true);
    }
    
    gameWon() {
        this.stopTimer();
        if (this.currentEngine && this.currentEngine.cleanup) {
            this.currentEngine.cleanup();
        }
        this.showModal('Congratulations! 🏆', 'You completed the game!', true);
    }
    
    showMessage(text, type = '') {
        this.gameMessage.textContent = text;
        this.gameMessage.className = `game-message visible ${type}`;
        setTimeout(() => {
            this.gameMessage.classList.remove('visible');
        }, 2000);
    }
    
    showModal(title, message, showStats = false) {
        this.modalTitle.textContent = title;
        this.modalMessage.textContent = message;
        
        if (showStats) {
            this.modalStats.innerHTML = `
                <div class="modal-stat">
                    <span class="modal-stat-value">${this.score}</span>
                    <span class="modal-stat-label">Score</span>
                </div>
                <div class="modal-stat">
                    <span class="modal-stat-value">${this.level}</span>
                    <span class="modal-stat-label">Level</span>
                </div>
                <div class="modal-stat">
                    <span class="modal-stat-value">${this.timeDisplay.textContent}</span>
                    <span class="modal-stat-label">Time</span>
                </div>
            `;
        } else {
            this.modalStats.innerHTML = '';
        }
        
        this.modal.classList.add('visible');
    }
    
    hideModal() {
        this.modal.classList.remove('visible');
    }
    
    handleKeyboard(e) {
        if (this.isPaused) return;
        
        if (this.currentEngine && this.currentEngine.handleKeyboard) {
            this.currentEngine.handleKeyboard(e);
        }
    }
    
    render(html) {
        this.gameBoard.innerHTML = html;
    }
    
    // ==================== CARD RENDERING METHODS ====================
    
    /**
     * Renders a single memory card in hidden state
     */
    renderMemoryCard(cardData) {
        const { id, value, content, type = 'emoji' } = cardData;
        
        let backContentHTML = '';
        switch(type) {
            case 'image':
                backContentHTML = `<img src="${content}" alt="card" loading="lazy">`;
                break;
            case 'text':
                backContentHTML = `<span class="card-text">${content}</span>`;
                break;
            case 'emoji':
            default:
                backContentHTML = `<span class="card-emoji">${content}</span>`;
                break;
        }
        
        return `
            <div class="card" data-id="${id}" data-value="${value}">
                <div class="card-inner">
                    <div class="card-front">
                        <span class="card-placeholder">?</span>
                    </div>
                    <div class="card-back">
                        ${backContentHTML}
                    </div>
                </div>
            </div>
        `;
    }
    
    /**
     * Renders a grid of memory cards
     */
    renderCardGrid(cards, columns = 4) {
        let html = `<div class="card-grid columns-${columns}">`;
        cards.forEach(card => {
            html += this.renderMemoryCard(card);
        });
        html += '</div>';
        html += `<div class="moves-display" style="text-align: center; margin-top: 15px; font-size: 1.1rem;">Moves: <strong id="moves-count">0</strong></div>`;
        return html;
    }
    
    /**
     * Initializes card click handlers after rendering
     */
    initCardClickHandlers(onMatch, onMismatch, onAllMatched) {
        this.resetCardState();
        
        const cards = this.gameBoard.querySelectorAll('.card');
        
        cards.forEach(card => {
            card.addEventListener('click', () => {
                this.handleCardClick(card, onMatch, onMismatch, onAllMatched, cards.length);
            });
        });
    }
    
    /**
     * Handles card click with proper reveal/hide logic
     */
    handleCardClick(cardElement, onMatch, onMismatch, onAllMatched, totalCards) {
        const cardId = cardElement.dataset.id;
        const cardValue = cardElement.dataset.value;
        
        // Prevent interaction during checking or if card already processed
        if (this.cardState.isChecking) return;
        if (this.isPaused) return;
        if (cardElement.classList.contains('matched')) return;
        if (cardElement.classList.contains('revealed')) return;
        if (this.cardState.openedCards.length >= 2) return;
        
        // Reveal the card
        this.revealCard(cardElement);
        
        // Track opened card
        this.cardState.openedCards.push({
            element: cardElement,
            id: cardId,
            value: cardValue
        });
        
        // Check for match when two cards are opened
        if (this.cardState.openedCards.length === 2) {
            this.cardState.isChecking = true;
            this.cardState.moves++;
            this.updateMovesDisplay();
            this.checkCardMatch(onMatch, onMismatch, onAllMatched, totalCards);
        }
    }
    
    /**
     * Reveals a card (shows content)
     */
    revealCard(cardElement) {
        cardElement.classList.add('revealed');
    }
    
    /**
     * Hides a card (shows placeholder)
     */
    hideCard(cardElement) {
        cardElement.classList.remove('revealed');
    }
    
    /**
     * Marks cards as permanently matched
     */
    markCardsMatched(card1Element, card2Element) {
        card1Element.classList.add('matched');
        card2Element.classList.add('matched');
    }
    
    /**
     * Updates moves display
     */
    updateMovesDisplay() {
        const movesEl = document.getElementById('moves-count');
        if (movesEl) {
            movesEl.textContent = this.cardState.moves;
        }
    }
    
    /**
     * Gets current moves count
     */
    getMoves() {
        return this.cardState.moves;
    }
    
    /**
     * Checks if two opened cards match
     */
    checkCardMatch(onMatch, onMismatch, onAllMatched, totalCards) {
        const [card1, card2] = this.cardState.openedCards;
        
        if (card1.value === card2.value) {
            // Cards match!
            setTimeout(() => {
                this.markCardsMatched(card1.element, card2.element);
                this.cardState.matchedCards.push(card1.id, card2.id);
                this.cardState.openedCards = [];
                this.cardState.isChecking = false;
                
                if (onMatch) {
                    onMatch(card1, card2, this.cardState.matchedCards.length / 2);
                }
                
                // Check if all cards are matched
                if (this.cardState.matchedCards.length === totalCards) {
                    if (onAllMatched) {
                        onAllMatched(this.cardState.moves);
                    }
                }
            }, 300);
        } else {
            // Cards don't match - flip back after delay
            setTimeout(() => {
                this.hideCard(card1.element);
                this.hideCard(card2.element);
                this.cardState.openedCards = [];
                this.cardState.isChecking = false;
                
                if (onMismatch) {
                    onMismatch(card1, card2);
                }
            }, 500);
        }
    }
    
    /**
     * Resets all cards to hidden state
     */
    resetAllCards() {
        const cards = this.gameBoard.querySelectorAll('.card');
        cards.forEach(card => {
            card.classList.remove('revealed', 'matched');
        });
        this.resetCardState();
    }
    
    /**
     * Gets count of matched pairs
     */
    getMatchedPairsCount() {
        return this.cardState.matchedCards.length / 2;
    }
    
    /**
     * Checks if all cards are matched
     */
    areAllCardsMatched(totalCards) {
        return this.cardState.matchedCards.length === totalCards;
    }
    
    // ==================== INJECT CARD CSS ====================
    
    injectCardStyles() {
        if (document.getElementById('card-game-styles')) return;
        
        const style = document.createElement('style');
        style.id = 'card-game-styles';
        style.textContent = `
            /* Card Grid Layout */
            .card-grid {
                display: grid;
                gap: 15px;
                justify-content: center;
                justify-items: center;
                padding: 20px;
                width: 100%;
            }
            
            .card-grid.columns-3 { grid-template-columns: repeat(3, 90px); }
            .card-grid.columns-4 { grid-template-columns: repeat(4, 90px); }
            .card-grid.columns-5 { grid-template-columns: repeat(5, 90px); }
            .card-grid.columns-6 { grid-template-columns: repeat(6, 90px); }
            
            /* Card Base Styles */
            .card {
                width: 90px;
                height: 90px;
                perspective: 1000px;
                cursor: pointer;
                user-select: none;
            }
            
            .card-inner {
                position: relative;
                width: 100%;
                height: 100%;
                transform-style: preserve-3d;
                transition: transform 0.4s ease;
            }
            
            /* Card Front - Hidden State (shows placeholder) */
            .card .card-front {
                position: absolute;
                width: 100%;
                height: 100%;
                backface-visibility: hidden;
                -webkit-backface-visibility: hidden;
                display: flex;
                justify-content: center;
                align-items: center;
                border-radius: var(--radius, 12px);
                background: linear-gradient(135deg, var(--primary-color, #6c5ce7), var(--secondary-color, #a29bfe));
                color: white;
                font-size: 2rem;
                font-weight: bold;
                box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
            }
            
            /* Card Back - Content Side */
            .card .card-back {
                position: absolute;
                width: 100%;
                height: 100%;
                backface-visibility: hidden;
                -webkit-backface-visibility: hidden;
                transform: rotateY(180deg);
                display: flex;
                justify-content: center;
                align-items: center;
                border-radius: var(--radius, 12px);
                background: var(--card-bg, #ffffff);
                border: 3px solid var(--secondary-color, #a29bfe);
                font-size: 2.5rem;
                box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
            }
            
            .card .card-back img {
                max-width: 75%;
                max-height: 75%;
                object-fit: contain;
                border-radius: 4px;
            }
            
            .card .card-back .card-text {
                font-size: 1rem;
                font-weight: 600;
                text-align: center;
                padding: 5px;
            }
            
            /* Placeholder styling */
            .card-placeholder {
                font-size: 2.5rem;
                font-weight: bold;
                opacity: 0.9;
                text-shadow: 0 2px 4px rgba(0,0,0,0.2);
            }
            
            /* Revealed State - Flip to show content */
            .card.revealed .card-inner {
                transform: rotateY(180deg);
            }
            
            /* Matched State - Permanently visible with success styling */
            .card.matched .card-inner {
                transform: rotateY(180deg);
            }
            
            .card.matched .card-back {
                background: linear-gradient(135deg, var(--success-color, #00b894), #55efc4);
                border-color: var(--success-color, #00b894);
                animation: cardMatchPulse 0.5s ease;
            }
            
            .card.matched {
                pointer-events: none;
            }
            
            .card.matched .card-back img {
                filter: drop-shadow(0 0 3px rgba(255,255,255,0.5));
            }
            
            /* Hover effect for clickable cards */
            .card:not(.revealed):not(.matched):hover {
                transform: scale(1.05);
            }
            
            .card:not(.revealed):not(.matched):hover .card-front {
                box-shadow: 0 8px 25px rgba(0, 0, 0, 0.25);
            }
            
            .card:not(.revealed):not(.matched):active {
                transform: scale(0.98);
            }
            
            /* Match animation */
            @keyframes cardMatchPulse {
                0%, 100% { transform: rotateY(180deg) scale(1); }
                50% { transform: rotateY(180deg) scale(1.08); }
            }
            
            /* Moves display */
            .moves-display {
                color: var(--text-color, #333);
            }
            
            .moves-display strong {
                color: var(--primary-color, #6c5ce7);
                font-size: 1.2rem;
            }
            
            /* Responsive adjustments */
            @media (max-width: 768px) {
                .card {
                    width: 70px;
                    height: 70px;
                }
                
                .card-grid.columns-3 { grid-template-columns: repeat(3, 70px); }
                .card-grid.columns-4 { grid-template-columns: repeat(4, 70px); }
                .card-grid.columns-5 { grid-template-columns: repeat(5, 70px); }
                .card-grid.columns-6 { grid-template-columns: repeat(6, 70px); }
                
                .card .card-front,
                .card .card-back {
                    font-size: 1.8rem;
                }
                
                .card-placeholder {
                    font-size: 2rem;
                }
                
                .card-grid {
                    gap: 10px;
                }
            }
            
            @media (max-width: 480px) {
                .card {
                    width: 55px;
                    height: 55px;
                }
                
                .card-grid.columns-3 { grid-template-columns: repeat(3, 55px); }
                .card-grid.columns-4 { grid-template-columns: repeat(4, 55px); }
                .card-grid.columns-5 { grid-template-columns: repeat(5, 55px); }
                .card-grid.columns-6 { grid-template-columns: repeat(6, 55px); }
                
                .card .card-front,
                .card .card-back {
                    font-size: 1.4rem;
                }
                
                .card-placeholder {
                    font-size: 1.5rem;
                }
                
                .card-grid {
                    gap: 8px;
                    padding: 10px;
                }
            }
            
            /* Theme adjustments for cards */
            [data-theme="teen"] .card .card-front {
                background: linear-gradient(135deg, #1a1a2e, #16213e);
                border: 2px solid rgba(0, 212, 255, 0.3);
            }
            
            [data-theme="teen"] .card .card-back {
                background: #16213e;
                border: 2px solid #7c3aed;
                color: #e2e8f0;
            }
            
            [data-theme="teen"] .card.matched .card-back {
                background: linear-gradient(135deg, #10b981, #059669);
                border-color: #10b981;
                box-shadow: 0 0 20px rgba(16, 185, 129, 0.4);
            }
            
            [data-theme="teen"] .card-placeholder {
                color: #00d4ff;
                text-shadow: 0 0 10px rgba(0, 212, 255, 0.5);
            }
            
            [data-theme="kids"] .card .card-front {
                background: linear-gradient(135deg, #ff6b6b, #feca57);
                border-radius: 15px;
            }
            
            [data-theme="kids"] .card .card-back {
                border: 3px dashed #1dd1a1;
                border-radius: 15px;
            }
            
            [data-theme="kids"] .card.matched .card-back {
                background: linear-gradient(135deg, #1dd1a1, #00d2d3);
                border: 3px solid #1dd1a1;
            }
        `;
        document.head.appendChild(style);
    }
}

// Global animation styles
const style = document.createElement('style');
style.textContent = `
    @keyframes floatUp {
        0% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
        100% { opacity: 0; transform: translate(-50%, -100%) scale(1.5); }
    }
`;
document.head.appendChild(style);

document.addEventListener('DOMContentLoaded', () => {
    window.app = new GamesApp();
});
