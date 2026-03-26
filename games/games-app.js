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
        
        this.init();
    }
    
    init() {
        this.cacheElements();
        this.bindEvents();
        this.loadTheme();
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
}

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
