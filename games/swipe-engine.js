/* ==== FILE: swipe-engine.js ==== */
class SwipeGameEngine {
    constructor(app) {
        this.app = app;
        this.objects = [];
        this.objectId = 0;
        this.spawnInterval = null;
        this.gameLoop = null;
        this.isActive = false;
        this.combo = 0;
        this.maxCombo = 0;
        this.slicedCount = 0;
        this.missedCount = 0;
        this.lastMousePos = null;
        this.isMouseDown = false;
        this.swipeArea = null;
        this.fruits = ['🍎', '🍊', '🍋', '🍇', '🍉', '🍓', '🍑', '🥝', '🍍', '🥭'];
        this.bombs = ['💣', '🧨'];
    }
    
    init() {
        this.objects = [];
        this.objectId = 0;
        this.combo = 0;
        this.maxCombo = 0;
        this.slicedCount = 0;
        this.missedCount = 0;
        this.render();
        this.startGame();
    }
    
    render() {
        let html = '<div class="swipe-game-container" style="display: flex; flex-direction: column; align-items: center; gap: 15px; width: 100%;">';
        html += `<div class="swipe-stats" style="display: flex; gap: 30px; font-size: 1.1rem;">
            <span>🍎 Sliced: <strong id="sliced-count">${this.slicedCount}</strong></span>
            <span>🔥 Combo: <strong id="combo-count">${this.combo}</strong></span>
            <span>❌ Missed: <strong id="missed-count">${this.missedCount}</strong>/3</span>
        </div>`;
        html += '<div class="swipe-area" id="swipe-area"></div>';
        html += '<p style="font-size: 0.9rem; color: var(--secondary-color);">Swipe across fruits to slice them! Avoid bombs! 💣</p>';
        html += '</div>';
        
        this.app.render(html);
        
        this.swipeArea = document.getElementById('swipe-area');
        this.bindEvents();
    }
    
    bindEvents() {
        this.swipeArea.addEventListener('mousedown', (e) => this.onSwipeStart(e));
        this.swipeArea.addEventListener('mousemove', (e) => this.onSwipeMove(e));
        this.swipeArea.addEventListener('mouseup', () => this.onSwipeEnd());
        this.swipeArea.addEventListener('mouseleave', () => this.onSwipeEnd());
        
        this.swipeArea.addEventListener('touchstart', (e) => this.onTouchStart(e));
        this.swipeArea.addEventListener('touchmove', (e) => this.onTouchMove(e));
        this.swipeArea.addEventListener('touchend', () => this.onSwipeEnd());
    }
    
    onSwipeStart(e) {
        this.isMouseDown = true;
        const rect = this.swipeArea.getBoundingClientRect();
        this.lastMousePos = {
            x: e.clientX - rect.left,
            y: e.clientY - rect.top
        };
    }
    
    onSwipeMove(e) {
        if (!this.isMouseDown || !this.isActive) return;
        
        const rect = this.swipeArea.getBoundingClientRect();
        const currentPos = {
            x: e.clientX - rect.left,
            y: e.clientY - rect.top
        };
        
        this.createTrail(currentPos.x, currentPos.y);
        this.checkCollisions(currentPos.x, currentPos.y);
        
        this.lastMousePos = currentPos;
    }
    
    onTouchStart(e) {
        e.preventDefault();
        const touch = e.touches[0];
        const rect = this.swipeArea.getBoundingClientRect();
        this.isMouseDown = true;
        this.lastMousePos = {
            x: touch.clientX - rect.left,
            y: touch.clientY - rect.top
        };
    }
    
    onTouchMove(e) {
        if (!this.isMouseDown || !this.isActive) return;
        e.preventDefault();
        
        const touch = e.touches[0];
        const rect = this.swipeArea.getBoundingClientRect();
        const currentPos = {
            x: touch.clientX - rect.left,
            y: touch.clientY - rect.top
        };
        
        this.createTrail(currentPos.x, currentPos.y);
        this.checkCollisions(currentPos.x, currentPos.y);
        
        this.lastMousePos = currentPos;
    }
    
    onSwipeEnd() {
        this.isMouseDown = false;
        this.lastMousePos = null;
    }
    
    createTrail(x, y) {
        const trail = document.createElement('div');
        trail.className = 'slice-trail';
        trail.style.left = x + 'px';
        trail.style.top = y + 'px';
        this.swipeArea.appendChild(trail);
        
        setTimeout(() => trail.remove(), 300);
    }
    
    checkCollisions(x, y) {
        const objectsToRemove = [];
        
        this.objects.forEach(obj => {
            if (obj.sliced) return;
            
            const element = document.getElementById(`obj-${obj.id}`);
            if (!element) return;
            
            const rect = element.getBoundingClientRect();
            const areaRect = this.swipeArea.getBoundingClientRect();
            
            const objX = rect.left - areaRect.left + rect.width / 2;
            const objY = rect.top - areaRect.top + rect.height / 2;
            
            const distance = Math.sqrt(Math.pow(x - objX, 2) + Math.pow(y - objY, 2));
            
            if (distance < 40) {
                obj.sliced = true;
                element.classList.add('sliced');
                
                if (obj.isBomb) {
                    this.hitBomb();
                } else {
                    this.sliceFruit(obj, x, y);
                }
                
                objectsToRemove.push(obj.id);
            }
        });
        
        objectsToRemove.forEach(id => {
            setTimeout(() => {
                const element = document.getElementById(`obj-${id}`);
                if (element) element.remove();
                this.objects = this.objects.filter(o => o.id !== id);
            }, 300);
        });
    }
    
    sliceFruit(obj, x, y) {
        this.slicedCount++;
        this.combo++;
        if (this.combo > this.maxCombo) {
            this.maxCombo = this.combo;
        }
        
        let points = 10 + this.app.level * 5;
        if (this.combo >= 3) {
            points += this.combo * 5;
            this.showCombo(x, y);
        }
        
        this.app.addScore(points);
        this.updateStats();
    }
    
    showCombo(x, y) {
        const comboText = document.createElement('div');
        comboText.className = 'combo-text';
        comboText.textContent = `${this.combo}x COMBO!`;
        comboText.style.left = x + 'px';
        comboText.style.top = y + 'px';
        this.swipeArea.appendChild(comboText);
        
        setTimeout(() => comboText.remove(), 500);
    }
    
    hitBomb() {
        this.combo = 0;
        this.app.loseLife();
        this.updateStats();
        
        this.swipeArea.style.animation = 'shake 0.5s ease';
        setTimeout(() => {
            this.swipeArea.style.animation = '';
        }, 500);
        
        if (this.app.lives <= 0) {
            this.endGame();
        }
    }
    
    updateStats() {
        const slicedEl = document.getElementById('sliced-count');
        const comboEl = document.getElementById('combo-count');
        const missedEl = document.getElementById('missed-count');
        
        if (slicedEl) slicedEl.textContent = this.slicedCount;
        if (comboEl) comboEl.textContent = this.combo;
        if (missedEl) missedEl.textContent = this.missedCount;
    }
    
    startGame() {
        this.isActive = true;
        
        const spawnRate = Math.max(500, 1500 - this.app.level * 100);
        
        this.spawnInterval = setInterval(() => {
            if (!this.isActive) return;
            this.spawnObject();
        }, spawnRate);
        
        this.gameLoop = setInterval(() => {
            if (!this.isActive) return;
            this.update();
        }, 100);
    }
    
    spawnObject() {
        const isBomb = Math.random() < 0.1 + this.app.level * 0.02;
        
        const obj = {
            id: this.objectId++,
            emoji: isBomb ? this.bombs[Math.floor(Math.random() * this.bombs.length)] : this.fruits[Math.floor(Math.random() * this.fruits.length)],
            isBomb: isBomb,
            x: Math.random() * (this.swipeArea.clientWidth - 60),
            y: this.swipeArea.clientHeight,
            sliced: false,
            spawnTime: Date.now()
        };
        
        this.objects.push(obj);
        
        const element = document.createElement('div');
        element.id = `obj-${obj.id}`;
        element.className = `swipe-object ${obj.isBomb ? 'bomb' : ''}`;
        element.textContent = obj.emoji;
        element.style.left = obj.x + 'px';
        element.style.bottom = '0px';
        
        const duration = 2.5 - this.app.level * 0.1;
        element.style.animationDuration = `${Math.max(1.5, duration)}s`;
        
        this.swipeArea.appendChild(element);
    }
    
    update() {
        const now = Date.now();
        const objectsToRemove = [];
        
        this.objects.forEach(obj => {
            if (obj.sliced) return;
            
            const element = document.getElementById(`obj-${obj.id}`);
            if (!element) return;
            
            const duration = (2.5 - this.app.level * 0.1) * 1000;
            const elapsed = now - obj.spawnTime;
            
            if (elapsed > duration) {
                if (!obj.isBomb) {
                    this.missedCount++;
                    this.combo = 0;
                    this.updateStats();
                    
                    if (this.missedCount >= 3) {
                        this.endGame();
                        return;
                    }
                }
                objectsToRemove.push(obj.id);
            }
        });
        
        objectsToRemove.forEach(id => {
            const element = document.getElementById(`obj-${id}`);
            if (element) element.remove();
            this.objects = this.objects.filter(o => o.id !== id);
        });
        
        if (this.slicedCount >= 20 + this.app.level * 10 && this.isActive) {
            this.app.addScore(100);
            if (this.app.level < 10) {
                this.cleanup();
                this.app.levelUp();
            } else {
                this.app.gameWon();
            }
        }
    }
    
    endGame() {
        this.cleanup();
        this.app.gameOver();
    }
    
    onLevelUp() {
        this.objects = [];
        this.objectId = 0;
        this.combo = 0;
        this.slicedCount = 0;
        this.missedCount = 0;
        this.render();
        this.startGame();
    }
    
    onPause(isPaused) {
        this.isActive = !isPaused;
    }
    
    cleanup() {
        this.isActive = false;
        
        if (this.spawnInterval) {
            clearInterval(this.spawnInterval);
            this.spawnInterval = null;
        }
        
        if (this.gameLoop) {
            clearInterval(this.gameLoop);
            this.gameLoop = null;
        }
    }
}

const swipeStyle = document.createElement('style');
swipeStyle.textContent = `
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-10px); }
        75% { transform: translateX(10px); }
    }
`;
document.head.appendChild(swipeStyle);
