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
        this.countdownTimer = null;
        this.countdownTime = 0;
        
        this.engines = {
            'sequential-memory': null,
            'flag-memory': null,
            'card-flip': null,
            'geography-quiz': null,
            'word-master': null,
            'number-system': null,
            'treasure-run': null,
            'swipe-game': null,
            'letter-runner': null
        };
        
        // Card state tracking for memory games
        this.cardState = {
            openedCards: [],
            matchedCards: [],
            isChecking: false,
            moves: 0,
            canClick: true
        };
        
        // Number sequence state
        this.sequenceState = {
            currentTarget: 1,
            maxNumber: 10,
            foundNumbers: [],
            cards: [],
            hasTimer: false,
            timeLimit: 0,
            isActive: false
        };
        
        // Level configurations for number sequence (50 levels)
        this.sequenceLevels = this.generateSequenceLevels();
        
        this.init();
    }
    
    // Generate 50 levels for number sequence game
    generateSequenceLevels() {
        const levels = [];
        
        // Levels 1-10: Basic progression
        levels.push({ max: 10, timer: false, timeLimit: 0, name: "1-10 (No Timer)" });
        levels.push({ max: 10, timer: true, timeLimit: 60, name: "1-10 (60s Timer)" });
        levels.push({ max: 12, timer: false, timeLimit: 0, name: "1-12 (No Timer)" });
        levels.push({ max: 12, timer: true, timeLimit: 60, name: "1-12 (60s Timer)" });
        levels.push({ max: 15, timer: false, timeLimit: 0, name: "1-15 (No Timer)" });
        levels.push({ max: 15, timer: true, timeLimit: 75, name: "1-15 (75s Timer)" });
        levels.push({ max: 15, timer: true, timeLimit: 60, name: "1-15 (60s Timer)" });
        levels.push({ max: 18, timer: false, timeLimit: 0, name: "1-18 (No Timer)" });
        levels.push({ max: 18, timer: true, timeLimit: 90, name: "1-18 (90s Timer)" });
        levels.push({ max: 20, timer: false, timeLimit: 0, name: "1-20 (No Timer)" });
        
        // Levels 11-20: Medium difficulty
        levels.push({ max: 20, timer: true, timeLimit: 90, name: "1-20 (90s Timer)" });
        levels.push({ max: 20, timer: true, timeLimit: 75, name: "1-20 (75s Timer)" });
        levels.push({ max: 22, timer: false, timeLimit: 0, name: "1-22 (No Timer)" });
        levels.push({ max: 22, timer: true, timeLimit: 90, name: "1-22 (90s Timer)" });
        levels.push({ max: 24, timer: false, timeLimit: 0, name: "1-24 (No Timer)" });
        levels.push({ max: 24, timer: true, timeLimit: 100, name: "1-24 (100s Timer)" });
        levels.push({ max: 24, timer: true, timeLimit: 85, name: "1-24 (85s Timer)" });
        levels.push({ max: 25, timer: false, timeLimit: 0, name: "1-25 (No Timer)" });
        levels.push({ max: 25, timer: true, timeLimit: 100, name: "1-25 (100s Timer)" });
        levels.push({ max: 25, timer: true, timeLimit: 90, name: "1-25 (90s Timer)" });
        
        // Levels 21-30: Hard
        levels.push({ max: 26, timer: false, timeLimit: 0, name: "1-26 (No Timer)" });
        levels.push({ max: 26, timer: true, timeLimit: 100, name: "1-26 (100s Timer)" });
        levels.push({ max: 27, timer: false, timeLimit: 0, name: "1-27 (No Timer)" });
        levels.push({ max: 27, timer: true, timeLimit: 105, name: "1-27 (105s Timer)" });
        levels.push({ max: 28, timer: false, timeLimit: 0, name: "1-28 (No Timer)" });
        levels.push({ max: 28, timer: true, timeLimit: 110, name: "1-28 (110s Timer)" });
        levels.push({ max: 28, timer: true, timeLimit: 95, name: "1-28 (95s Timer)" });
        levels.push({ max: 29, timer: false, timeLimit: 0, name: "1-29 (No Timer)" });
        levels.push({ max: 29, timer: true, timeLimit: 110, name: "1-29 (110s Timer)" });
        levels.push({ max: 30, timer: false, timeLimit: 0, name: "1-30 (No Timer)" });
        
        // Levels 31-40: Expert
        levels.push({ max: 30, timer: true, timeLimit: 120, name: "1-30 (120s Timer)" });
        levels.push({ max: 30, timer: true, timeLimit: 105, name: "1-30 (105s Timer)" });
        levels.push({ max: 30, timer: true, timeLimit: 90, name: "1-30 (90s Timer)" });
        levels.push({ max: 25, timer: true, timeLimit: 60, name: "1-25 (60s Speed)" });
        levels.push({ max: 20, timer: true, timeLimit: 45, name: "1-20 (45s Speed)" });
        levels.push({ max: 28, timer: true, timeLimit: 80, name: "1-28 (80s Challenge)" });
        levels.push({ max: 30, timer: true, timeLimit: 85, name: "1-30 (85s Challenge)" });
        levels.push({ max: 15, timer: true, timeLimit: 30, name: "1-15 (30s Blitz)" });
        levels.push({ max: 20, timer: true, timeLimit: 40, name: "1-20 (40s Blitz)" });
        levels.push({ max: 30, timer: true, timeLimit: 75, name: "1-30 (75s Master)" });
        
        // Levels 41-50: Master
        levels.push({ max: 30, timer: true, timeLimit: 70, name: "1-30 (70s Extreme)" });
        levels.push({ max: 25, timer: true, timeLimit: 50, name: "1-25 (50s Extreme)" });
        levels.push({ max: 30, timer: true, timeLimit: 65, name: "1-30 (65s Insane)" });
        levels.push({ max: 28, timer: true, timeLimit: 55, name: "1-28 (55s Insane)" });
        levels.push({ max: 30, timer: true, timeLimit: 60, name: "1-30 (60s Legendary)" });
        levels.push({ max: 20, timer: true, timeLimit: 30, name: "1-20 (30s Lightning)" });
        levels.push({ max: 25, timer: true, timeLimit: 40, name: "1-25 (40s Lightning)" });
        levels.push({ max: 30, timer: true, timeLimit: 55, name: "1-30 (55s Ultimate)" });
        levels.push({ max: 30, timer: true, timeLimit: 50, name: "1-30 (50s Champion)" });
        levels.push({ max: 30, timer: true, timeLimit: 45, name: "1-30 (45s GODMODE)" });
        
        return levels;
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
        // External game: Letter Runner
        if (gameId === 'letter-runner') {
            this.launchExternalGame('games/letter-runner.html');
            return;
        }
        
        this.currentGame = gameId;
        this.stopTimer();
        this.stopCountdown();
        this.resetStats();
        this.resetCardState();
        this.resetSequenceState();
        this.gameBoard.innerHTML = '';
        
        const instructions = this.getGameInstructions(gameId);
        this.gameBoard.innerHTML = `
            <div class="game-instructions">
                <h2>${this.getGameTitle(gameId)}</h2>
                <p>${instructions}</p>
                <p class="hint">Press "Start Game" to begin!</p>
            </div>
        `;
        
        const instructionsEl = this.gameBoard.querySelector('.game-instructions');
        if (instructionsEl) {
            instructionsEl.style.cssText = `
                text-align: center;
                padding: 40px;
                max-width: 500px;
            `;
        }
        
        const h2El = this.gameBoard.querySelector('h2');
        if (h2El) {
            h2El.style.cssText = `
                font-size: 1.8rem;
                margin-bottom: 20px;
                color: var(--primary-color);
            `;
        }
        
        const pEl = this.gameBoard.querySelector('p');
        if (pEl) {
            pEl.style.cssText = `
                font-size: 1.1rem;
                line-height: 1.6;
                margin-bottom: 15px;
            `;
        }
        
        const hintEl = this.gameBoard.querySelector('.hint');
        if (hintEl) {
            hintEl.style.cssText = `
                font-style: italic;
                color: var(--secondary-color);
            `;
        }
    }
    
    launchExternalGame(url) {
        const modal = document.createElement('div');
        modal.id = 'external-game-modal';
        modal.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.95);
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            z-index: 10000;
        `;
        
        modal.innerHTML = `
            <button id="close-external-game" style="
                position: absolute;
                top: 15px;
                right: 15px;
                padding: 12px 24px;
                font-size: 16px;
                font-weight: bold;
                background: linear-gradient(135deg, #e74c3c, #c0392b);
                color: white;
                border: none;
                border-radius: 8px;
                cursor: pointer;
                z-index: 10001;
                box-shadow: 0 4px 15px rgba(0,0,0,0.3);
                transition: transform 0.2s, box-shadow 0.2s;
            ">✕ Close Game</button>
            <iframe src="${url}" style="
                width: 98%;
                height: 95%;
                border: none;
                border-radius: 12px;
                box-shadow: 0 10px 50px rgba(0,0,0,0.5);
            " allowfullscreen></iframe>
        `;
        
        document.body.appendChild(modal);
        document.body.style.overflow = 'hidden';
        
        const closeBtn = document.getElementById('close-external-game');
        closeBtn.addEventListener('mouseenter', () => {
            closeBtn.style.transform = 'scale(1.05)';
            closeBtn.style.boxShadow = '0 6px 20px rgba(0,0,0,0.4)';
        });
        closeBtn.addEventListener('mouseleave', () => {
            closeBtn.style.transform = 'scale(1)';
            closeBtn.style.boxShadow = '0 4px 15px rgba(0,0,0,0.3)';
        });
        closeBtn.addEventListener('click', () => {
            modal.remove();
            document.body.style.overflow = '';
            this.gameSelector.value = 'sequential-memory';
            this.selectGame('sequential-memory');
        });
        
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && document.getElementById('external-game-modal')) {
                modal.remove();
                document.body.style.overflow = '';
                this.gameSelector.value = 'sequential-memory';
                this.selectGame('sequential-memory');
            }
        }, { once: true });
    }
    
    getGameTitle(gameId) {
        const titles = {
            'sequential-memory': '🧠 Sequential Memory',
            'flag-memory': '🏳️ Flag Memory Match',
            'card-flip': '🃏 Card Flip Game',
            'geography-quiz': '🌍 Geography Quiz',
            'word-master': '📚 Word Master',
            'number-system': '🔢 Number Sequence',
            'treasure-run': '💎 Treasure Run',
            'swipe-game': '⚔️ Swipe Master',
            'letter-runner': '🦖 Letter Runner'
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
            'number-system': 'Find numbers in sequence from 1 to N. All cards are face down - click to reveal. Wrong number = start over! 50 challenging levels await!',
            'treasure-run': 'Navigate through the maze using arrow keys or buttons. Collect all treasures and reach the exit!',
            'swipe-game': 'Swipe across fruits to slice them! Avoid bombs or lose a life. How high can you score?',
            'letter-runner': 'Subway Surfers style infinite runner! Collect letters to form words, dodge obstacles, and run forever! Use arrow keys or swipe on mobile.'
        };
        return instructions[gameId] || '';
    }
    
    startGame() {
        this.resetStats();
        this.resetCardState();
        this.resetSequenceState();
        this.startTimer();
        this.initEngine();
    }
    
    restartGame() {
        this.hideModal();
        this.startGame();
    }
    
    initEngine() {
        // Handle special games directly in games-app.js
        if (this.currentGame === 'flag-memory' || this.currentGame === 'card-flip') {
            this.initMemoryGame();
            return;
        }
        
        if (this.currentGame === 'number-system') {
            this.initNumberSequenceGame();
            return;
        }
        
        // Use engines for other games
        switch(this.currentGame) {
            case 'sequential-memory':
                this.currentEngine = new MemoryGameEngine(this, 'sequential');
                break;
            case 'geography-quiz':
                this.currentEngine = new QuizGameEngine(this, 'geography');
                break;
            case 'word-master':
                this.currentEngine = new QuizGameEngine(this, 'words');
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
    
    // ==================== MEMORY GAME (FLAG/CARD FLIP) ====================
    
    initMemoryGame() {
        this.resetCardState();
        
        let cards = [];
        
        if (this.currentGame === 'flag-memory') {
            cards = this.generateFlagCards();
        } else {
            cards = this.generateEmojiCards();
        }
        
        // Shuffle cards
        cards = this.shuffleArray(cards);
        
        // Determine grid columns
        const columns = cards.length <= 12 ? 4 : (cards.length <= 20 ? 5 : 6);
        
        this.renderMemoryGame(cards, columns);
    }
    
    generateFlagCards() {
        const flags = [
            { code: 'us', name: 'USA' },
            { code: 'gb', name: 'UK' },
            { code: 'fr', name: 'France' },
            { code: 'de', name: 'Germany' },
            { code: 'jp', name: 'Japan' },
            { code: 'br', name: 'Brazil' },
            { code: 'ca', name: 'Canada' },
            { code: 'au', name: 'Australia' }
        ];
        
        // Add more flags based on level
        const extraFlags = [
            { code: 'it', name: 'Italy' },
            { code: 'es', name: 'Spain' },
            { code: 'mx', name: 'Mexico' },
            { code: 'in', name: 'India' }
        ];
        
        let selectedFlags = flags.slice(0, Math.min(4 + this.level, 8));
        if (this.level > 3) {
            selectedFlags = [...selectedFlags, ...extraFlags.slice(0, this.level - 3)];
        }
        
        const cards = [];
        selectedFlags.forEach((flag, index) => {
            // Create pairs
            cards.push({
                id: `card-${index}-a`,
                value: flag.code,
                content: `https://flagcdn.com/w80/${flag.code}.png`,
                type: 'image',
                name: flag.name
            });
            cards.push({
                id: `card-${index}-b`,
                value: flag.code,
                content: `https://flagcdn.com/w80/${flag.code}.png`,
                type: 'image',
                name: flag.name
            });
        });
        
        return cards;
    }
    
    generateEmojiCards() {
        const emojis = ['🎮', '🎲', '🎯', '🎪', '🎨', '🎭', '🎢', '🎡', '🎠', '🎪', '🎬', '🎤'];
        
        const pairCount = Math.min(4 + this.level, 10);
        const selectedEmojis = emojis.slice(0, pairCount);
        
        const cards = [];
        selectedEmojis.forEach((emoji, index) => {
            cards.push({
                id: `card-${index}-a`,
                value: emoji,
                content: emoji,
                type: 'emoji'
            });
            cards.push({
                id: `card-${index}-b`,
                value: emoji,
                content: emoji,
                type: 'emoji'
            });
        });
        
        return cards;
    }
    
    renderMemoryGame(cards, columns) {
        let html = `
            <div class="memory-game-container">
                <div class="game-info-bar">
                    <span>Moves: <strong id="moves-count">0</strong></span>
                    <span>Pairs: <strong id="pairs-count">0</strong>/<strong>${cards.length / 2}</strong></span>
                </div>
                <div class="card-grid columns-${columns}">
        `;
        
        cards.forEach(card => {
            const contentHTML = card.type === 'image' 
                ? `<img src="${card.content}" alt="${card.name || 'card'}" loading="lazy">`
                : `<span class="card-emoji">${card.content}</span>`;
            
            html += `
                <div class="card" data-id="${card.id}" data-value="${card.value}">
                    <div class="card-inner">
                        <div class="card-front">
                            <span class="card-placeholder">?</span>
                        </div>
                        <div class="card-back">
                            ${contentHTML}
                        </div>
                    </div>
                </div>
            `;
        });
        
        html += `
                </div>
            </div>
        `;
        
        this.render(html);
        this.bindMemoryCardEvents(cards.length);
    }
    
    bindMemoryCardEvents(totalCards) {
        const cards = this.gameBoard.querySelectorAll('.card');
        
        cards.forEach(card => {
            card.addEventListener('click', () => {
                this.handleMemoryCardClick(card, totalCards);
            });
        });
    }
    
    handleMemoryCardClick(cardElement, totalCards) {
        // Prevent clicking if checking, paused, or already 2 cards open
        if (!this.cardState.canClick) return;
        if (this.isPaused) return;
        if (cardElement.classList.contains('matched')) return;
        if (cardElement.classList.contains('flipped')) return;
        if (this.cardState.openedCards.length >= 2) return;
        
        const cardId = cardElement.dataset.id;
        const cardValue = cardElement.dataset.value;
        
        // Flip the card
        cardElement.classList.add('flipped');
        
        // Track opened card
        this.cardState.openedCards.push({
            element: cardElement,
            id: cardId,
            value: cardValue
        });
        
        // Check for match when two cards are opened
        if (this.cardState.openedCards.length === 2) {
            this.cardState.canClick = false;
            this.cardState.moves++;
            this.updateMovesDisplay();
            
            const [card1, card2] = this.cardState.openedCards;
            
            if (card1.value === card2.value) {
                // MATCH!
                setTimeout(() => {
                    card1.element.classList.add('matched');
                    card2.element.classList.add('matched');
                    card1.element.classList.remove('flipped');
                    card2.element.classList.remove('flipped');
                    
                    this.cardState.matchedCards.push(card1.id, card2.id);
                    this.cardState.openedCards = [];
                    this.cardState.canClick = true;
                    
                    this.updatePairsDisplay();
                    this.addScore(50);
                    
                    // Check win condition
                    if (this.cardState.matchedCards.length === totalCards) {
                        this.onMemoryGameWin();
                    }
                }, 300);
            } else {
                // NO MATCH - flip back after 500ms
                setTimeout(() => {
                    card1.element.classList.remove('flipped');
                    card2.element.classList.remove('flipped');
                    
                    this.cardState.openedCards = [];
                    this.cardState.canClick = true;
                }, 500);
            }
        }
    }
    
    updateMovesDisplay() {
        const el = document.getElementById('moves-count');
        if (el) el.textContent = this.cardState.moves;
    }
    
    updatePairsDisplay() {
        const el = document.getElementById('pairs-count');
        if (el) el.textContent = this.cardState.matchedCards.length / 2;
    }
    
    onMemoryGameWin() {
        const bonusScore = Math.max(0, 500 - this.cardState.moves * 10);
        this.addScore(bonusScore);
        this.showMessage('Level Complete! 🎉', 'success');
        
        if (this.level < 10) {
            setTimeout(() => {
                this.level++;
                this.updateDisplay();
                this.initMemoryGame();
            }, 1500);
        } else {
            setTimeout(() => this.gameWon(), 1500);
        }
    }
    
    // ==================== NUMBER SEQUENCE GAME ====================
    
    initNumberSequenceGame() {
        this.resetSequenceState();
        
        // Get level config
        const levelIndex = Math.min(this.level - 1, this.sequenceLevels.length - 1);
        const levelConfig = this.sequenceLevels[levelIndex];
        
        this.sequenceState.maxNumber = levelConfig.max;
        this.sequenceState.hasTimer = levelConfig.timer;
        this.sequenceState.timeLimit = levelConfig.timeLimit;
        this.sequenceState.currentTarget = 1;
        this.sequenceState.foundNumbers = [];
        this.sequenceState.isActive = true;
        
        // Generate cards 1 to maxNumber
        const cards = [];
        for (let i = 1; i <= levelConfig.max; i++) {
            cards.push({
                id: `num-${i}`,
                value: i,
                revealed: false,
                found: false
            });
        }
        
        // Shuffle cards (but keep positions fixed after shuffle)
        this.sequenceState.cards = this.shuffleArray(cards);
        
        this.renderNumberSequenceGame(levelConfig);
        
        // Start countdown timer if level has timer
        if (levelConfig.timer) {
            this.startCountdown(levelConfig.timeLimit);
        }
    }
    
    renderNumberSequenceGame(levelConfig) {
        const cards = this.sequenceState.cards;
        const columns = cards.length <= 10 ? 5 : (cards.length <= 15 ? 5 : (cards.length <= 20 ? 5 : (cards.length <= 25 ? 5 : 6)));
        
        let html = `
            <div class="sequence-game-container">
                <div class="game-info-bar">
                    <span>Level ${this.level}: ${levelConfig.name}</span>
                    <span>Find: <strong id="target-number" class="target-highlight">${this.sequenceState.currentTarget}</strong></span>
                    <span>Found: <strong id="found-count">0</strong>/${levelConfig.max}</span>
                    ${levelConfig.timer ? `<span>Time: <strong id="countdown-display">${levelConfig.timeLimit}</strong>s</span>` : ''}
                </div>
                <div class="sequence-instruction">
                    Click cards to find numbers in order: 1 → 2 → 3 → ... → ${levelConfig.max}
                </div>
                <div class="card-grid columns-${columns}">
        `;
        
        cards.forEach((card, index) => {
            html += `
                <div class="card sequence-card" data-index="${index}" data-value="${card.value}">
                    <div class="card-inner">
                        <div class="card-front">
                            <span class="card-placeholder">?</span>
                        </div>
                        <div class="card-back">
                            <span class="card-number">${card.value}</span>
                        </div>
                    </div>
                </div>
            `;
        });
        
        html += `
                </div>
            </div>
        `;
        
        this.render(html);
        this.bindSequenceCardEvents();
    }
    
    bindSequenceCardEvents() {
        const cards = this.gameBoard.querySelectorAll('.sequence-card');
        
        cards.forEach(card => {
            card.addEventListener('click', () => {
                this.handleSequenceCardClick(card);
            });
        });
    }
    
    handleSequenceCardClick(cardElement) {
        if (!this.sequenceState.isActive) return;
        if (this.isPaused) return;
        if (cardElement.classList.contains('found')) return;
        if (cardElement.classList.contains('flipped')) return;
        
        const cardValue = parseInt(cardElement.dataset.value);
        const cardIndex = parseInt(cardElement.dataset.index);
        
        // Flip the card to show number
        cardElement.classList.add('flipped');
        
        if (cardValue === this.sequenceState.currentTarget) {
            // CORRECT! Mark as found
            setTimeout(() => {
                cardElement.classList.remove('flipped');
                cardElement.classList.add('found');
                
                this.sequenceState.foundNumbers.push(cardValue);
                this.sequenceState.cards[cardIndex].found = true;
                this.sequenceState.currentTarget++;
                
                this.updateSequenceDisplay();
                this.addScore(10 + this.level * 2);
                
                // Check win condition
                if (this.sequenceState.foundNumbers.length === this.sequenceState.maxNumber) {
                    this.onSequenceGameWin();
                }
            }, 200);
        } else {
            // WRONG! Show briefly then reset everything
            cardElement.classList.add('wrong');
            
            setTimeout(() => {
                // Flip back this card
                cardElement.classList.remove('flipped', 'wrong');
                
                // Reset ALL found cards back to hidden
                this.resetAllSequenceCards();
                
                // Show message
                this.showMessage(`Wrong! Looking for ${this.sequenceState.currentTarget}. Start over!`, 'error');
                
            }, 300);
        }
    }
    
    resetAllSequenceCards() {
        // Reset state
        this.sequenceState.currentTarget = 1;
        this.sequenceState.foundNumbers = [];
        this.sequenceState.cards.forEach(card => card.found = false);
        
        // Reset all card elements
        const cards = this.gameBoard.querySelectorAll('.sequence-card');
        cards.forEach(card => {
            card.classList.remove('flipped', 'found', 'wrong');
        });
        
        this.updateSequenceDisplay();
    }
    
    updateSequenceDisplay() {
        const targetEl = document.getElementById('target-number');
        const foundEl = document.getElementById('found-count');
        
        if (targetEl) {
            if (this.sequenceState.currentTarget <= this.sequenceState.maxNumber) {
                targetEl.textContent = this.sequenceState.currentTarget;
            } else {
                targetEl.textContent = '✓';
            }
        }
        if (foundEl) foundEl.textContent = this.sequenceState.foundNumbers.length;
    }
    
    startCountdown(seconds) {
        this.stopCountdown();
        this.countdownTime = seconds;
        
        const display = document.getElementById('countdown-display');
        if (display) display.textContent = seconds;
        
        this.countdownTimer = setInterval(() => {
            if (this.isPaused) return;
            
            this.countdownTime--;
            const display = document.getElementById('countdown-display');
            if (display) display.textContent = this.countdownTime;
            
            if (this.countdownTime <= 10 && display) {
                display.style.color = 'var(--danger-color)';
                display.style.animation = 'pulse 0.5s infinite';
            }
            
            if (this.countdownTime <= 0) {
                this.stopCountdown();
                this.sequenceState.isActive = false;
                this.showMessage('Time\'s up! ⏰', 'error');
                this.loseLife();
                
                if (this.lives > 0) {
                    setTimeout(() => this.initNumberSequenceGame(), 1500);
                }
            }
        }, 1000);
    }
    
    stopCountdown() {
        if (this.countdownTimer) {
            clearInterval(this.countdownTimer);
            this.countdownTimer = null;
        }
    }
    
    onSequenceGameWin() {
        this.stopCountdown();
        this.sequenceState.isActive = false;
        
        // Bonus for remaining time
        let bonusScore = 100;
        if (this.sequenceState.hasTimer && this.countdownTime > 0) {
            bonusScore += this.countdownTime * 5;
        }
        this.addScore(bonusScore);
        
        this.showMessage('Level Complete! 🎉', 'success');
        
        if (this.level < 50) {
            setTimeout(() => {
                this.level++;
                this.updateDisplay();
                this.initNumberSequenceGame();
            }, 1500);
        } else {
            setTimeout(() => this.gameWon(), 1500);
        }
    }
    
    resetSequenceState() {
        this.stopCountdown();
        this.sequenceState = {
            currentTarget: 1,
            maxNumber: 10,
            foundNumbers: [],
            cards: [],
            hasTimer: false,
            timeLimit: 0,
            isActive: false
        };
    }
    
    // ==================== UTILITY METHODS ====================
    
    shuffleArray(array) {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
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
            moves: 0,
            canClick: true
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
        this.stopCountdown();
        if (this.currentEngine && this.currentEngine.cleanup) {
            this.currentEngine.cleanup();
        }
        this.showModal('Game Over! 💔', 'Better luck next time!', true);
    }
    
    gameWon() {
        this.stopTimer();
        this.stopCountdown();
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
    
    // ==================== INJECT CARD CSS ====================
    
    injectCardStyles() {
        if (document.getElementById('card-game-styles')) return;
        
        const style = document.createElement('style');
        style.id = 'card-game-styles';
        style.textContent = `
            /* Game Container */
            .memory-game-container,
            .sequence-game-container {
                display: flex;
                flex-direction: column;
                align-items: center;
                width: 100%;
                gap: 20px;
            }
            
            .game-info-bar {
                display: flex;
                justify-content: center;
                gap: 25px;
                font-size: 1.1rem;
                flex-wrap: wrap;
            }
            
            .game-info-bar strong {
                color: var(--primary-color);
            }
            
            .target-highlight {
                font-size: 1.4rem;
                color: var(--danger-color) !important;
                animation: pulse 1s infinite;
            }
            
            .sequence-instruction {
                font-size: 0.95rem;
                color: var(--secondary-color);
                text-align: center;
            }
            
            /* Card Grid Layout */
            .card-grid {
                display: grid;
                gap: 12px;
                justify-content: center;
                justify-items: center;
                padding: 15px;
                width: 100%;
                max-width: 100%;
            }
            
            .card-grid.columns-3 { grid-template-columns: repeat(3, 75px); }
            .card-grid.columns-4 { grid-template-columns: repeat(4, 75px); }
            .card-grid.columns-5 { grid-template-columns: repeat(5, 70px); }
            .card-grid.columns-6 { grid-template-columns: repeat(6, 65px); }
            
            /* Card Base Styles */
            .card {
                width: 75px;
                height: 75px;
                perspective: 1000px;
                cursor: pointer;
                user-select: none;
            }
            
            .card-grid.columns-5 .card { width: 70px; height: 70px; }
            .card-grid.columns-6 .card { width: 65px; height: 65px; }
            
            .card-inner {
                position: relative;
                width: 100%;
                height: 100%;
                transform-style: preserve-3d;
                transition: transform 0.4s ease;
            }
            
            /* Card Front - Hidden State */
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
                font-size: 1.8rem;
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
                font-size: 2rem;
                box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
            }
            
            .card .card-back img {
                max-width: 80%;
                max-height: 80%;
                object-fit: contain;
                border-radius: 4px;
            }
            
            .card-placeholder {
                font-size: 2rem;
                font-weight: bold;
                opacity: 0.9;
            }
            
            .card-number {
                font-size: 1.8rem;
                font-weight: 800;
                color: var(--primary-color);
            }
            
            .card-emoji {
                font-size: 2rem;
            }
            
            /* Flipped State */
            .card.flipped .card-inner {
                transform: rotateY(180deg);
            }
            
            /* Matched State */
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
            
            /* Found State (for sequence game) */
            .card.found .card-inner {
                transform: rotateY(180deg);
            }
            
            .card.found .card-back {
                background: linear-gradient(135deg, var(--success-color, #00b894), #55efc4);
                border-color: var(--success-color, #00b894);
            }
            
            .card.found .card-number {
                color: white;
            }
            
            .card.found {
                pointer-events: none;
            }
            
            /* Wrong State */
            .card.wrong .card-back {
                background: linear-gradient(135deg, var(--danger-color, #e74c3c), #ff7675);
                border-color: var(--danger-color, #e74c3c);
            }
            
            .card.wrong .card-number {
                color: white;
            }
            
            /* Hover effect */
            .card:not(.flipped):not(.matched):not(.found):hover {
                transform: scale(1.05);
            }
            
            .card:not(.flipped):not(.matched):not(.found):hover .card-front {
                box-shadow: 0 8px 25px rgba(0, 0, 0, 0.25);
            }
            
            /* Animations */
            @keyframes cardMatchPulse {
                0%, 100% { transform: rotateY(180deg) scale(1); }
                50% { transform: rotateY(180deg) scale(1.08); }
            }
            
            @keyframes pulse {
                0%, 100% { transform: scale(1); }
                50% { transform: scale(1.1); }
            }
            
            /* Responsive */
            @media (max-width: 600px) {
                .card-grid {
                    gap: 8px;
                    padding: 10px;
                }
                
                .card { width: 55px; height: 55px; }
                .card-grid.columns-5 .card { width: 50px; height: 50px; }
                .card-grid.columns-6 .card { width: 45px; height: 45px; }
                
                .card .card-front { font-size: 1.4rem; }
                .card .card-back { font-size: 1.4rem; }
                .card-number { font-size: 1.3rem; }
                .card-placeholder { font-size: 1.5rem; }
                
                .game-info-bar {
                    font-size: 0.9rem;
                    gap: 15px;
                }
            }
            
            @media (max-width: 400px) {
                .card { width: 48px; height: 48px; }
                .card-grid.columns-5 .card { width: 44px; height: 44px; }
                .card-grid.columns-6 .card { width: 40px; height: 40px; }
                
                .card .card-front { font-size: 1.2rem; }
                .card .card-back { font-size: 1.2rem; }
                .card-number { font-size: 1.1rem; }
                .card-placeholder { font-size: 1.2rem; }
                
                .card-grid { gap: 6px; }
            }
            
            /* Theme: Teen */
            [data-theme="teen"] .card .card-front {
                background: linear-gradient(135deg, #1a1a2e, #16213e);
                border: 2px solid rgba(0, 212, 255, 0.3);
            }
            
            [data-theme="teen"] .card .card-back {
                background: #16213e;
                border: 2px solid #7c3aed;
                color: #e2e8f0;
            }
            
            [data-theme="teen"] .card-number {
                color: #00d4ff;
            }
            
            [data-theme="teen"] .card.matched .card-back,
            [data-theme="teen"] .card.found .card-back {
                background: linear-gradient(135deg, #10b981, #059669);
                border-color: #10b981;
            }
            
            [data-theme="teen"] .card.matched .card-number,
            [data-theme="teen"] .card.found .card-number {
                color: white;
            }
            
            [data-theme="teen"] .card-placeholder {
                color: #00d4ff;
            }
            
            /* Theme: Kids */
            [data-theme="kids"] .card .card-front {
                background: linear-gradient(135deg, #ff6b6b, #feca57);
                border-radius: 15px;
            }
            
            [data-theme="kids"] .card .card-back {
                border: 3px dashed #1dd1a1;
                border-radius: 15px;
            }
            
            [data-theme="kids"] .card.matched .card-back,
            [data-theme="kids"] .card.found .card-back {
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
