/* ==== FILE: memory-engine.js ==== */
class MemoryGameEngine {
    constructor(app, type) {
        this.app = app;
        this.type = type;
        this.cards = [];
        this.sequence = [];
        this.playerSequence = [];
        this.openedCards = [];
        this.matchedPairs = 0;
        this.canInteract = false;
        this.isShowingSequence = false;
        this.moves = 0;
    }
    
    init() {
        switch(this.type) {
            case 'sequential':
                this.initSequentialMemory();
                break;
            case 'flags':
                this.initFlagMemory();
                break;
            case 'card-flip':
                this.initCardFlip();
                break;
        }
    }
    
    initSequentialMemory() {
        this.sequence = [];
        this.playerSequence = [];
        this.renderSequentialBoard();
        setTimeout(() => this.addToSequence(), 1000);
    }
    
    renderSequentialBoard() {
        const colors = ['color-0', 'color-1', 'color-2', 'color-3', 'color-4', 'color-5', 'color-6', 'color-7', 'color-8'];
        const symbols = ['▲', '●', '■', '◆', '★', '♦', '♠', '♣', '♥'];
        
        let html = '<div class="sequence-display">';
        html += '<div class="sequence-info" style="font-size: 1.2rem; margin-bottom: 10px;">Watch the sequence!</div>';
        html += '<div class="sequence-grid">';
        
        for (let i = 0; i < 9; i++) {
            html += `<div class="sequence-tile ${colors[i]}" data-index="${i}">${symbols[i]}</div>`;
        }
        
        html += '</div></div>';
        this.app.render(html);
        
        document.querySelectorAll('.sequence-tile').forEach(tile => {
            tile.addEventListener('click', () => this.handleSequenceTileClick(parseInt(tile.dataset.index)));
        });
    }
    
    addToSequence() {
        const newIndex = Math.floor(Math.random() * 9);
        this.sequence.push(newIndex);
        this.playerSequence = [];
        this.showSequence();
    }
    
    showSequence() {
        this.isShowingSequence = true;
        this.canInteract = false;
        const info = document.querySelector('.sequence-info');
        if (info) info.textContent = 'Watch the sequence!';
        
        let i = 0;
        const interval = setInterval(() => {
            if (i >= this.sequence.length) {
                clearInterval(interval);
                this.isShowingSequence = false;
                this.canInteract = true;
                if (info) info.textContent = 'Your turn! Repeat the sequence.';
                return;
            }
            
            const tile = document.querySelector(`.sequence-tile[data-index="${this.sequence[i]}"]`);
            if (tile) {
                tile.classList.add('active');
                setTimeout(() => tile.classList.remove('active'), 400);
            }
            i++;
        }, 700);
    }
    
    handleSequenceTileClick(index) {
        if (!this.canInteract || this.isShowingSequence) return;
        
        const tile = document.querySelector(`.sequence-tile[data-index="${index}"]`);
        if (tile) {
            tile.classList.add('active');
            setTimeout(() => tile.classList.remove('active'), 200);
        }
        
        this.playerSequence.push(index);
        const currentIndex = this.playerSequence.length - 1;
        
        if (this.playerSequence[currentIndex] !== this.sequence[currentIndex]) {
            this.app.loseLife();
            this.app.showMessage('Wrong! Try again.', 'error');
            this.sequence = [];
            this.playerSequence = [];
            
            if (this.app.lives > 0) {
                setTimeout(() => this.addToSequence(), 1500);
            }
            return;
        }
        
        if (this.playerSequence.length === this.sequence.length) {
            this.app.addScore(this.sequence.length * 10);
            this.app.showMessage('Correct! 🎉', 'success');
            this.canInteract = false;
            
            if (this.sequence.length >= 5 + (this.app.level - 1) * 2) {
                this.app.levelUp();
            } else {
                setTimeout(() => this.addToSequence(), 1500);
            }
        }
    }
    
    onLevelUp() {
        this.sequence = [];
        this.playerSequence = [];
        setTimeout(() => this.addToSequence(), 500);
    }
    
    initFlagMemory() {
        const flagData = this.getFlagData();
        const shuffled = this.shuffle([...flagData, ...flagData]);
        this.cards = shuffled.map((flag, index) => ({
            id: index,
            value: flag.code,
            name: flag.name,
            url: flag.url,
            matched: false
        }));
        this.openedCards = [];
        this.matchedPairs = 0;
        this.moves = 0;
        this.renderMemoryBoard();
    }
    
    getFlagData() {
        if (typeof GamesData !== 'undefined' && GamesData.flags) {
            return GamesData.flags.slice(0, 8);
        }
        
        return [
            { code: 'US', name: 'USA', url: 'https://flagcdn.com/w80/us.png' },
            { code: 'GB', name: 'UK', url: 'https://flagcdn.com/w80/gb.png' },
            { code: 'FR', name: 'France', url: 'https://flagcdn.com/w80/fr.png' },
            { code: 'DE', name: 'Germany', url: 'https://flagcdn.com/w80/de.png' },
            { code: 'JP', name: 'Japan', url: 'https://flagcdn.com/w80/jp.png' },
            { code: 'BR', name: 'Brazil', url: 'https://flagcdn.com/w80/br.png' },
            { code: 'CA', name: 'Canada', url: 'https://flagcdn.com/w80/ca.png' },
            { code: 'AU', name: 'Australia', url: 'https://flagcdn.com/w80/au.png' }
        ];
    }
    
    initCardFlip() {
        const emojis = ['🎮', '🎲', '🎯', '🎪', '🎨', '🎭', '🎪', '🎢'];
        const cardPairs = [...emojis.slice(0, 8), ...emojis.slice(0, 8)];
        const shuffled = this.shuffle(cardPairs);
        
        this.cards = shuffled.map((emoji, index) => ({
            id: index,
            value: emoji,
            matched: false
        }));
        this.openedCards = [];
        this.matchedPairs = 0;
        this.moves = 0;
        this.renderMemoryBoard();
    }
    
    renderMemoryBoard() {
        const gridClass = this.cards.length <= 12 ? 'grid-4' : 'grid-6';
        
        let html = `<div class="memory-grid ${gridClass}">`;
        
        this.cards.forEach(card => {
            const content = this.type === 'flags' 
                ? `<img src="${card.url}" alt="${card.name}">`
                : card.value;
                
            html += `
                <div class="memory-card ${card.matched ? 'matched flipped' : ''}" data-id="${card.id}">
                    <div class="memory-card-inner">
                        <div class="memory-card-front">❓</div>
                        <div class="memory-card-back">${content}</div>
                    </div>
                </div>
            `;
        });
        
        html += '</div>';
        html += `<div style="text-align: center; margin-top: 15px; font-size: 1.1rem;">Moves: <strong id="moves-count">${this.moves}</strong></div>`;
        this.app.render(html);
        
        this.canInteract = true;
        
        document.querySelectorAll('.memory-card').forEach(card => {
            card.addEventListener('click', () => this.handleCardClick(parseInt(card.dataset.id)));
        });
    }
    
    handleCardClick(cardId) {
        if (!this.canInteract) return;
        
        const card = this.cards.find(c => c.id === cardId);
        if (!card || card.matched) return;
        if (this.openedCards.find(c => c.id === cardId)) return;
        if (this.openedCards.length >= 2) return;
        
        const cardElement = document.querySelector(`.memory-card[data-id="${cardId}"]`);
        cardElement.classList.add('flipped');
        this.openedCards.push(card);
        
        if (this.openedCards.length === 2) {
            this.moves++;
            document.getElementById('moves-count').textContent = this.moves;
            this.checkMatch();
        }
    }
    
    checkMatch() {
        this.canInteract = false;
        const [card1, card2] = this.openedCards;
        
        if (card1.value === card2.value) {
            card1.matched = true;
            card2.matched = true;
            this.matchedPairs++;
            this.app.addScore(50);
            
            document.querySelector(`.memory-card[data-id="${card1.id}"]`).classList.add('matched');
            document.querySelector(`.memory-card[data-id="${card2.id}"]`).classList.add('matched');
            
            this.openedCards = [];
            this.canInteract = true;
            
            if (this.matchedPairs === this.cards.length / 2) {
                setTimeout(() => {
                    this.app.addScore(Math.max(0, 500 - this.moves * 5));
                    if (this.app.level < 5) {
                        this.app.levelUp();
                    } else {
                        this.app.gameWon();
                    }
                }, 500);
            }
        } else {
            setTimeout(() => {
                document.querySelector(`.memory-card[data-id="${card1.id}"]`).classList.remove('flipped');
                document.querySelector(`.memory-card[data-id="${card2.id}"]`).classList.remove('flipped');
                this.openedCards = [];
                this.canInteract = true;
            }, 1000);
        }
    }
    
    onLevelUp() {
        if (this.type === 'sequential') {
            this.sequence = [];
            this.playerSequence = [];
            setTimeout(() => this.addToSequence(), 500);
        } else {
            this.init();
        }
    }
    
    shuffle(array) {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    }
    
    onPause(isPaused) {
        this.canInteract = !isPaused;
    }
    
    cleanup() {
        this.canInteract = false;
    }
}
