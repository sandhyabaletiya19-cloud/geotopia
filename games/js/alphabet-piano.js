/* ==========================================
   ALPHABET PIANO TILES GAME
   ========================================== */

class AlphabetPianoGame {
    constructor() {
        this.currentLevel = 1;
        this.score = 0;
        this.lives = 3;
        this.currentSequence = [];
        this.currentIndex = 0;
        this.tilesData = [];
        
        // Audio context for sounds
        this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
        
        // Musical notes frequencies (C4 to C6)
        this.notes = {
            'A': 261.63, 'B': 277.18, 'C': 293.66, 'D': 311.13,
            'E': 329.63, 'F': 349.23, 'G': 369.99, 'H': 392.00,
            'I': 415.30, 'J': 440.00, 'K': 466.16, 'L': 493.88,
            'M': 523.25, 'N': 554.37, 'O': 587.33, 'P': 622.25,
            'Q': 659.25, 'R': 698.46, 'S': 739.99, 'T': 783.99,
            'U': 830.61, 'V': 880.00, 'W': 932.33, 'X': 987.77,
            'Y': 1046.50, 'Z': 1108.73
        };
        
        this.init();
    }
    
    init() {
        this.setupLevel();
        this.updateUI();
    }
    
    setupLevel() {
        this.currentIndex = 0;
        
        switch(this.currentLevel) {
            case 1:
                this.setupLevel1();
                break;
            case 2:
                this.setupLevel2();
                break;
            case 3:
                this.setupLevel3();
                break;
            case 4:
                this.setupLevel4();
                break;
            case 5:
                this.setupLevel5();
                break;
            default:
                this.showVictory();
                return;
        }
        
        this.renderTiles();
        this.updateProgressBar();
    }
    
    // Level 1: A to Z in order
    setupLevel1() {
        document.getElementById('levelTitle').textContent = 'Level 1: Click A to Z in Order';
        document.getElementById('levelDesc').textContent = 'Click the tiles with letters A to Z in correct alphabetical order!';
        
        this.currentSequence = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
        this.tilesData = [...this.currentSequence];
    }
    
    // Level 2: A to Z but jumbled display
    setupLevel2() {
        document.getElementById('levelTitle').textContent = 'Level 2: Find A to Z (Jumbled)';
        document.getElementById('levelDesc').textContent = 'Letters are mixed up! Find and click A to Z in order!';
        
        this.currentSequence = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
        this.tilesData = this.shuffleArray([...this.currentSequence]);
    }
    
    // Level 3: Numbers 1 to 100
    setupLevel3() {
        document.getElementById('levelTitle').textContent = 'Level 3: Click 1 to 100';
        document.getElementById('levelDesc').textContent = 'Count from 1 to 100 by clicking the numbers in order!';
        
        this.currentSequence = Array.from({length: 100}, (_, i) => (i + 1).toString());
        // Show random 16 numbers at a time
        this.tilesData = this.getRandomNumbers();
    }
    
    // Level 4: Mixed letters and numbers
    setupLevel4() {
        document.getElementById('levelTitle').textContent = 'Level 4: Mixed Challenge';
        document.getElementById('levelDesc').textContent = 'A-Z then 1-26, all jumbled together!';
        
        const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
        const numbers = Array.from({length: 26}, (_, i) => (i + 1).toString());
        this.currentSequence = [...letters, ...numbers];
        this.tilesData = this.shuffleArray([...this.currentSequence]);
    }
    
    // Level 5: Multiplication tables
    setupLevel5() {
        document.getElementById('levelTitle').textContent = 'Level 5: Multiplication Tables (1-20)';
        document.getElementById('levelDesc').textContent = 'Click the results of 1×1, 1×2, ... up to 20×20!';
        
        this.currentSequence = [];
        for(let i = 1; i <= 20; i++) {
            for(let j = 1; j <= 20; j++) {
                this.currentSequence.push(`${i}×${j}=${i*j}`);
            }
        }
        
        // Show 16 random multiplication problems
        this.tilesData = this.shuffleArray(this.currentSequence.slice(0, 16));
    }
    
    getRandomNumbers() {
        const shown = new Set();
        const tiles = [];
        
        // Always include the next expected number
        const nextNum = (this.currentIndex + 1).toString();
        tiles.push(nextNum);
        shown.add(nextNum);
        
        // Add random numbers
        while(tiles.length < 16) {
            const num = (Math.floor(Math.random() * 100) + 1).toString();
            if(!shown.has(num)) {
                tiles.push(num);
                shown.add(num);
            }
        }
        
        return this.shuffleArray(tiles);
    }
    
    shuffleArray(array) {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    }
    
    renderTiles() {
        const container = document.getElementById('pianoTiles');
        container.innerHTML = '';
        
        this.tilesData.forEach((item, index) => {
            const tile = document.createElement('div');
            tile.className = 'piano-tile';
            tile.textContent = item;
            tile.dataset.value = item;
            
            tile.addEventListener('click', () => this.handleTileClick(item, tile));
            
            container.appendChild(tile);
        });
        
        // Update next letter hint
        this.updateNextLetter();
    }
    
    handleTileClick(value, tile) {
        const expectedValue = this.currentSequence[this.currentIndex];
        
        if(value === expectedValue) {
            // Correct!
            tile.classList.add('correct');
            this.playNote(value);
            this.createSoundWave();
            this.score += 10;
            this.currentIndex++;
            
            setTimeout(() => {
                tile.classList.add('disabled');
                this.updateNextLetter();
                this.updateProgressBar();
                
                if(this.currentIndex >= this.currentSequence.length) {
                    // Level complete!
                    setTimeout(() => {
                        this.levelComplete();
                    }, 500);
                } else if(this.currentLevel === 3 && this.currentIndex % 16 === 0) {
                    // Refresh tiles for level 3
                    this.tilesData = this.getRandomNumbers();
                    this.renderTiles();
                }
            }, 300);
            
        } else {
            // Wrong!
            tile.classList.add('wrong');
            this.lives--;
            this.playWrongSound();
            
            setTimeout(() => {
                tile.classList.remove('wrong');
            }, 500);
            
            if(this.lives <= 0) {
                this.gameOver();
            }
        }
        
        this.updateUI();
    }
    
    updateNextLetter() {
        const nextLetter = document.getElementById('nextLetter');
        if(this.currentIndex < this.currentSequence.length) {
            nextLetter.textContent = this.currentSequence[this.currentIndex];
        } else {
            nextLetter.textContent = '✓';
        }
    }
    
    updateProgressBar() {
        const progress = (this.currentIndex / this.currentSequence.length) * 100;
        document.getElementById('progressBar').style.width = progress + '%';
        document.getElementById('progressText').textContent = 
            `${this.currentIndex} / ${this.currentSequence.length}`;
    }
    
    updateUI() {
        document.getElementById('currentLevel').textContent = this.currentLevel;
        document.getElementById('score').textContent = this.score;
        
        const heartsArray = Array(this.lives).fill('❤️');
        const emptyHearts = Array(3 - this.lives).fill('🖤');
        document.getElementById('lives').textContent = [...heartsArray, ...emptyHearts].join('');
    }
    
    playNote(value) {
        // Get frequency for the note
        let frequency = 440; // Default A4
        
        if(this.notes[value]) {
            frequency = this.notes[value];
        } else if(!isNaN(value)) {
            // For numbers, use a scale
            const num = parseInt(value);
            frequency = 261.63 * Math.pow(2, (num % 12) / 12);
        }
        
        const oscillator = this.audioContext.createOscillator();
        const gainNode = this.audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(this.audioContext.destination);
        
        oscillator.frequency.value = frequency;
        oscillator.type = 'sine';
        
        gainNode.gain.setValueAtTime(0.3, this.audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 0.5);
        
        oscillator.start(this.audioContext.currentTime);
        oscillator.stop(this.audioContext.currentTime + 0.5);
    }
    
    playWrongSound() {
        const oscillator = this.audioContext.createOscillator();
        const gainNode = this.audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(this.audioContext.destination);
        
        oscillator.frequency.value = 200;
        oscillator.type = 'sawtooth';
        
        gainNode.gain.setValueAtTime(0.3, this.audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 0.3);
        
        oscillator.start(this.audioContext.currentTime);
        oscillator.stop(this.audioContext.currentTime + 0.3);
    }
    
    createSoundWave() {
        const wave = document.createElement('div');
        wave.className = 'sound-wave';
        document.body.appendChild(wave);
        
        setTimeout(() => wave.remove(), 1000);
    }
    
    levelComplete() {
        const modal = document.createElement('div');
        modal.innerHTML = `
            <div style="
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0,0,0,0.8);
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 10000;
                animation: fadeIn 0.3s;
            ">
                <div style="
                    background: linear-gradient(135deg, #4FACFE 0%, #00F2FE 100%);
                    padding: 40px 60px;
                    border-radius: 25px;
                    text-align: center;
                    box-shadow: 0 20px 60px rgba(0,0,0,0.5);
                    animation: bounceIn 0.5s;
                ">
                    <h1 style="color: #fff; font-size: 48px; margin: 0 0 20px 0; text-shadow: 3px 3px 6px rgba(0,0,0,0.3);">
                        🎉 Level ${this.currentLevel} Complete! 🎉
                    </h1>
                    <p style="color: #FFD700; font-size: 32px; font-weight: bold; margin: 20px 0;">
                        Score: ${this.score}
                    </p>
                    <button id="nextLevelBtn" style="
                        margin-top: 30px;
                        padding: 18px 45px;
                        font-size: 22px;
                        background: #FFD700;
                        color: #333;
                        border: none;
                        border-radius: 50px;
                        cursor: pointer;
                        font-weight: bold;
                        box-shadow: 0 8px 25px rgba(0,0,0,0.3);
                        transition: all 0.3s;
                        font-family: 'Arial Rounded MT Bold', cursive;
                    ">
                        ${this.currentLevel < 5 ? 'Next Level ➡️' : 'Finish Game 🏆'}
                    </button>
                </div>
            </div>
            <style>
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                @keyframes bounceIn {
                    0% { transform: scale(0); }
                    50% { transform: scale(1.1); }
                    100% { transform: scale(1); }
                }
            </style>
        `;
        
        document.body.appendChild(modal);
        
        document.getElementById('nextLevelBtn').addEventListener('click', () => {
            modal.remove();
            this.currentLevel++;
            
            if(this.currentLevel > 5) {
                this.showVictory();
            } else {
                this.setupLevel();
            }
        });
        
        // Play celebration sound
        this.playCelebrationSound();
    }
    
    playCelebrationSound() {
        const notes = [261.63, 329.63, 392.00, 523.25];
        notes.forEach((freq, i) => {
            setTimeout(() => {
                const osc = this.audioContext.createOscillator();
                const gain = this.audioContext.createGain();
                
                osc.connect(gain);
                gain.connect(this.audioContext.destination);
                
                osc.frequency.value = freq;
                osc.type = 'sine';
                
                gain.gain.setValueAtTime(0.3, this.audioContext.currentTime);
                gain.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 0.3);
                
                osc.start();
                osc.stop(this.audioContext.currentTime + 0.3);
            }, i * 150);
        });
    }
    
    gameOver() {
        const modal = document.createElement('div');
        modal.innerHTML = `
            <div style="
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0,0,0,0.9);
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 10000;
            ">
                <div style="
                    background: linear-gradient(135deg, #FF6B6B 0%, #C0392B 100%);
                    padding: 40px 60px;
                    border-radius: 25px;
                    text-align: center;
                    box-shadow: 0 20px 60px rgba(0,0,0,0.5);
                ">
                    <h1 style="color: #fff; font-size: 48px; margin: 0 0 20px 0;">
                        💔 Game Over 💔
                    </h1>
                    <p style="color: #FFD700; font-size: 28px; margin: 20px 0;">
                        Final Score: ${this.score}
                    </p>
                    <p style="color: #fff; font-size: 20px; margin: 20px 0;">
                        Level Reached: ${this.currentLevel}
                    </p>
                    <button onclick="location.reload()" style="
                        margin-top: 30px;
                        padding: 18px 45px;
                        font-size: 22px;
                        background: #fff;
                        color: #FF6B6B;
                        border: none;
                        border-radius: 50px;
                        cursor: pointer;
                        font-weight: bold;
                        box-shadow: 0 8px 25px rgba(0,0,0,0.3);
                        font-family: 'Arial Rounded MT Bold', cursive;
                    ">
                        Try Again 🔄
                    </button>
                </div>
            </div>
        `;
        
        document.body.appendChild(modal);
    }
    
    showVictory() {
        const modal = document.createElement('div');
        modal.innerHTML = `
            <div style="
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0,0,0,0.9);
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 10000;
            ">
                <div style="
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                    padding: 50px 70px;
                    border-radius: 30px;
                    text-align: center;
                    box-shadow: 0 20px 60px rgba(0,0,0,0.5);
                    animation: victoryZoom 0.8s;
                ">
                    <h1 style="color: #FFD700; font-size: 60px; margin: 0 0 20px 0; text-shadow: 3px 3px 6px rgba(0,0,0,0.3);">
                        🏆 CHAMPION! 🏆
                    </h1>
                    <p style="color: #fff; font-size: 32px; margin: 20px 0;">
                        You completed all 5 levels!
                    </p>
                    <p style="color: #FFD700; font-size: 40px; font-weight: bold; margin: 20px 0;">
                        Final Score: ${this.score}
                    </p>
                    <button onclick="location.reload()" style="
                        margin-top: 30px;
                        padding: 20px 50px;
                        font-size: 24px;
                        background: #FFD700;
                        color: #333;
                        border: none;
                        border-radius: 50px;
                        cursor: pointer;
                        font-weight: bold;
                        box-shadow: 0 10px 30px rgba(0,0,0,0.3);
                        font-family: 'Arial Rounded MT Bold', cursive;
                    ">
                        Play Again 🎮
                    </button>
                </div>
            </div>
            <style>
                @keyframes victoryZoom {
                    0% { transform: scale(0) rotate(-180deg); }
                    50% { transform: scale(1.2) rotate(10deg); }
                    100% { transform: scale(1) rotate(0deg); }
                }
            </style>
        `;
        
        document.body.appendChild(modal);
        
        // Create confetti
        this.createConfetti();
    }
    
    createConfetti() {
        for(let i = 0; i < 150; i++) {
            setTimeout(() => {
                const confetti = document.createElement('div');
                const colors = ['#FF6B6B', '#4ECDC4', '#FFD93D', '#95E1D3', '#667eea'];
                
                confetti.style.cssText = `
                    position: fixed;
                    width: ${Math.random() * 15 + 5}px;
                    height: ${Math.random() * 15 + 5}px;
                    background: ${colors[Math.floor(Math.random() * colors.length)]};
                    left: ${Math.random() * 100}%;
                    top: -20px;
                    border-radius: ${Math.random() > 0.5 ? '50%' : '0'};
                    animation: confettiFall ${2 + Math.random() * 3}s linear;
                    z-index: 10001;
                    opacity: 0.8;
                `;
                
                const styleSheet = document.createElement('style');
                styleSheet.textContent = `
                    @keyframes confettiFall {
                        to {
                            transform: translateY(100vh) rotate(${Math.random() * 720}deg);
                            opacity: 0;
                        }
                    }
                `;
                document.head.appendChild(styleSheet);
                
                document.body.appendChild(confetti);
                
                setTimeout(() => {
                    confetti.remove();
                    styleSheet.remove();
                }, 5000);
            }, i * 20);
        }
    }
}

// Initialize game
document.addEventListener('DOMContentLoaded', () => {
    const game = new AlphabetPianoGame();
});
