/* ==== FILE: treasure-engine.js ==== */
class TreasureRunEngine {
    constructor(app) {
        this.app = app;
        this.gridSize = 8;
        this.grid = [];
        this.player = { x: 0, y: 0 };
        this.exit = { x: 0, y: 0 };
        this.treasures = [];
        this.obstacles = [];
        this.collectedTreasures = 0;
        this.totalTreasures = 0;
        this.moves = 0;
        this.canMove = false;
    }
    
    init() {
        this.gridSize = 8 + Math.floor(this.app.level / 2);
        this.generateLevel();
        this.render();
        this.canMove = true;
    }
    
    generateLevel() {
        this.grid = [];
        this.treasures = [];
        this.obstacles = [];
        this.collectedTreasures = 0;
        this.moves = 0;
        
        for (let y = 0; y < this.gridSize; y++) {
            this.grid[y] = [];
            for (let x = 0; x < this.gridSize; x++) {
                this.grid[y][x] = 'empty';
            }
        }
        
        this.player = { x: 0, y: 0 };
        this.grid[0][0] = 'player';
        
        this.exit = { x: this.gridSize - 1, y: this.gridSize - 1 };
        this.grid[this.gridSize - 1][this.gridSize - 1] = 'exit';
        
        const obstacleCount = Math.floor((this.gridSize * this.gridSize) * (0.15 + this.app.level * 0.02));
        for (let i = 0; i < obstacleCount; i++) {
            const pos = this.getRandomEmptyCell();
            if (pos && this.isPathPossible(pos, 'obstacle')) {
                this.grid[pos.y][pos.x] = 'obstacle';
                this.obstacles.push(pos);
            }
        }
        
        this.totalTreasures = 3 + this.app.level;
        for (let i = 0; i < this.totalTreasures; i++) {
            const pos = this.getRandomEmptyCell();
            if (pos) {
                this.grid[pos.y][pos.x] = 'treasure';
                this.treasures.push({ ...pos, collected: false });
            }
        }
    }
    
    getRandomEmptyCell() {
        const emptyCells = [];
        for (let y = 0; y < this.gridSize; y++) {
            for (let x = 0; x < this.gridSize; x++) {
                if (this.grid[y][x] === 'empty') {
                    emptyCells.push({ x, y });
                }
            }
        }
        
        if (emptyCells.length === 0) return null;
        return emptyCells[Math.floor(Math.random() * emptyCells.length)];
    }
    
    isPathPossible(newObstacle, type) {
        const tempGrid = this.grid.map(row => [...row]);
        if (type === 'obstacle') {
            tempGrid[newObstacle.y][newObstacle.x] = 'obstacle';
        }
        
        const visited = new Set();
        const queue = [{ x: this.player.x, y: this.player.y }];
        visited.add(`${this.player.x},${this.player.y}`);
        
        while (queue.length > 0) {
            const current = queue.shift();
            
            if (current.x === this.exit.x && current.y === this.exit.y) {
                return true;
            }
            
            const directions = [
                { x: 0, y: -1 },
                { x: 0, y: 1 },
                { x: -1, y: 0 },
                { x: 1, y: 0 }
            ];
            
            for (const dir of directions) {
                const newX = current.x + dir.x;
                const newY = current.y + dir.y;
                const key = `${newX},${newY}`;
                
                if (newX >= 0 && newX < this.gridSize && 
                    newY >= 0 && newY < this.gridSize && 
                    !visited.has(key) && 
                    tempGrid[newY][newX] !== 'obstacle') {
                    visited.add(key);
                    queue.push({ x: newX, y: newY });
                }
            }
        }
        
        return false;
    }
    
    render() {
        let html = '<div class="treasure-game">';
        html += `<div class="treasure-info" style="text-align: center; margin-bottom: 15px;">
            <span>💎 ${this.collectedTreasures}/${this.totalTreasures}</span>
            <span style="margin-left: 20px;">👟 Moves: ${this.moves}</span>
        </div>`;
        
        html += `<div class="treasure-grid" style="grid-template-columns: repeat(${this.gridSize}, 1fr);">`;
        
        for (let y = 0; y < this.gridSize; y++) {
            for (let x = 0; x < this.gridSize; x++) {
                const cellType = this.grid[y][x];
                let content = '';
                let className = 'treasure-cell';
                
                switch(cellType) {
                    case 'player':
                        content = '🧑';
                        className += ' player';
                        break;
                    case 'exit':
                        content = '🚪';
                        className += ' exit';
                        break;
                    case 'obstacle':
                        content = '🪨';
                        className += ' obstacle';
                        break;
                    case 'treasure':
                        content = '💎';
                        className += ' treasure';
                        break;
                    case 'collected':
                        content = '✓';
                        className += ' collected';
                        break;
                }
                
                html += `<div class="${className}" data-x="${x}" data-y="${y}">${content}</div>`;
            }
        }
        
        html += '</div>';
        
        html += `<div class="treasure-controls">
            <div class="treasure-row">
                <button class="direction-btn" data-dir="up">⬆️</button>
            </div>
            <div class="treasure-row">
                <button class="direction-btn" data-dir="left">⬅️</button>
                <button class="direction-btn" data-dir="down">⬇️</button>
                <button class="direction-btn" data-dir="right">➡️</button>
            </div>
        </div>`;
        
        html += '</div>';
        
        this.app.render(html);
        this.bindEvents();
    }
    
    bindEvents() {
        document.querySelectorAll('.direction-btn').forEach(btn => {
            btn.addEventListener('click', () => this.handleMove(btn.dataset.dir));
        });
    }
    
    handleKeyboard(e) {
        if (!this.canMove) return;
        
        const keyMap = {
            'ArrowUp': 'up',
            'ArrowDown': 'down',
            'ArrowLeft': 'left',
            'ArrowRight': 'right',
            'w': 'up',
            's': 'down',
            'a': 'left',
            'd': 'right',
            'W': 'up',
            'S': 'down',
            'A': 'left',
            'D': 'right'
        };
        
        if (keyMap[e.key]) {
            e.preventDefault();
            this.handleMove(keyMap[e.key]);
        }
    }
    
    handleMove(direction) {
        if (!this.canMove) return;
        
        const dirMap = {
            'up': { x: 0, y: -1 },
            'down': { x: 0, y: 1 },
            'left': { x: -1, y: 0 },
            'right': { x: 1, y: 0 }
        };
        
        const dir = dirMap[direction];
        const newX = this.player.x + dir.x;
        const newY = this.player.y + dir.y;
        
        if (newX < 0 || newX >= this.gridSize || newY < 0 || newY >= this.gridSize) {
            return;
        }
        
        if (this.grid[newY][newX] === 'obstacle') {
            return;
        }
        
        this.grid[this.player.y][this.player.x] = 'empty';
        
        const treasure = this.treasures.find(t => t.x === this.player.x && t.y === this.player.y && !t.collected);
        if (treasure) {
            this.grid[this.player.y][this.player.x] = 'collected';
        }
        
        this.player.x = newX;
        this.player.y = newY;
        this.moves++;
        
        if (this.grid[newY][newX] === 'treasure') {
            const treasure = this.treasures.find(t => t.x === newX && t.y === newY);
            if (treasure && !treasure.collected) {
                treasure.collected = true;
                this.collectedTreasures++;
                this.app.addScore(50);
            }
        }
        
        if (this.grid[newY][newX] === 'exit') {
            if (this.collectedTreasures === this.totalTreasures) {
                this.canMove = false;
                const moveBonus = Math.max(0, 200 - this.moves * 2);
                this.app.addScore(200 + moveBonus);
                this.app.showMessage('Level Complete! 🎉', 'success');
                
                setTimeout(() => {
                    if (this.app.level < 10) {
                        this.app.levelUp();
                    } else {
                        this.app.gameWon();
                    }
                }, 1500);
                return;
            } else {
                this.app.showMessage(`Collect all treasures first! (${this.collectedTreasures}/${this.totalTreasures})`, 'error');
            }
        }
        
        this.grid[newY][newX] = 'player';
        this.render();
    }
    
    onLevelUp() {
        this.init();
    }
    
    onPause(isPaused) {
        this.canMove = !isPaused;
    }
    
    cleanup() {
        this.canMove = false;
    }
}
