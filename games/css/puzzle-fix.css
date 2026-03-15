/* ==========================================
   PUZZLE GAME FIX - NO DUPLICATE PIECES
   ========================================== */

class EnhancedPuzzleGame {
    constructor(imageUrl, gridSize = 3) {
        this.imageUrl = imageUrl;
        this.gridSize = gridSize;
        this.pieces = [];
        this.usedPositions = new Set();
    }

    // Fisher-Yates Shuffle Algorithm
    shuffleArray(array) {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    }

    // Generate unique puzzle pieces
    generateUniquePieces() {
        const totalPieces = this.gridSize * this.gridSize;
        const pieceWidth = 100 / this.gridSize;
        const pieceHeight = 100 / this.gridSize;
        
        // Create all unique positions
        const positions = [];
        for (let row = 0; row < this.gridSize; row++) {
            for (let col = 0; col < this.gridSize; col++) {
                positions.push({
                    id: `piece-${row}-${col}`,
                    row: row,
                    col: col,
                    backgroundPosition: `${col * pieceWidth}% ${row * pieceHeight}%`,
                    correctPosition: row * this.gridSize + col
                });
            }
        }
        
        // Shuffle positions to randomize puzzle
        this.pieces = this.shuffleArray(positions);
        return this.pieces;
    }

    // Create puzzle HTML
    createPuzzleHTML(containerId) {
        const container = document.getElementById(containerId);
        if (!container) return;

        container.innerHTML = '';
        container.style.display = 'grid';
        container.style.gridTemplateColumns = `repeat(${this.gridSize}, 1fr)`;
        container.style.gap = '5px';
        container.style.width = '100%';
        container.style.maxWidth = '500px';
        container.style.margin = '20px auto';

        const pieces = this.generateUniquePieces();

        pieces.forEach((piece, index) => {
            const puzzlePiece = document.createElement('div');
            puzzlePiece.className = 'puzzle-piece';
            puzzlePiece.id = piece.id;
            puzzlePiece.draggable = true;
            puzzlePiece.dataset.position = index;
            puzzlePiece.dataset.correctPosition = piece.correctPosition;

            puzzlePiece.style.cssText = `
                aspect-ratio: 1;
                background-image: url('${this.imageUrl}');
                background-size: ${this.gridSize * 100}%;
                background-position: ${piece.backgroundPosition};
                border: 2px solid #fff;
                border-radius: 8px;
                cursor: move;
                transition: transform 0.2s, box-shadow 0.2s;
                box-shadow: 0 4px 8px rgba(0,0,0,0.2);
            `;

            // Drag and Drop Events
            puzzlePiece.addEventListener('dragstart', this.handleDragStart.bind(this));
            puzzlePiece.addEventListener('dragover', this.handleDragOver.bind(this));
            puzzlePiece.addEventListener('drop', this.handleDrop.bind(this));
            puzzlePiece.addEventListener('dragend', this.handleDragEnd.bind(this));

            // Hover effects
            puzzlePiece.addEventListener('mouseenter', function() {
                this.style.transform = 'scale(1.05)';
                this.style.boxShadow = '0 8px 16px rgba(0,0,0,0.3)';
            });

            puzzlePiece.addEventListener('mouseleave', function() {
                this.style.transform = 'scale(1)';
                this.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';
            });

            container.appendChild(puzzlePiece);
        });
    }

    handleDragStart(e) {
        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('text/html', e.target.id);
        e.target.style.opacity = '0.5';
    }

    handleDragOver(e) {
        if (e.preventDefault) {
            e.preventDefault();
        }
        e.dataTransfer.dropEffect = 'move';
        return false;
    }

    handleDrop(e) {
        if (e.stopPropagation) {
            e.stopPropagation();
        }

        const draggedId = e.dataTransfer.getData('text/html');
        const draggedElement = document.getElementById(draggedId);
        const dropTarget = e.target;

        if (draggedElement !== dropTarget && dropTarget.classList.contains('puzzle-piece')) {
            // Swap pieces
            const tempBgPosition = draggedElement.style.backgroundPosition;
            const tempCorrectPos = draggedElement.dataset.correctPosition;

            draggedElement.style.backgroundPosition = dropTarget.style.backgroundPosition;
            draggedElement.dataset.correctPosition = dropTarget.dataset.correctPosition;

            dropTarget.style.backgroundPosition = tempBgPosition;
            dropTarget.dataset.correctPosition = tempCorrectPos;

            this.checkWin();
        }

        return false;
    }

    handleDragEnd(e) {
        e.target.style.opacity = '1';
    }

    checkWin() {
        const pieces = document.querySelectorAll('.puzzle-piece');
        let correct = 0;

        pieces.forEach((piece, index) => {
            if (parseInt(piece.dataset.correctPosition) === index) {
                correct++;
                piece.style.border = '2px solid #4CAF50';
            } else {
                piece.style.border = '2px solid #fff';
            }
        });

        if (correct === pieces.length) {
            setTimeout(() => {
                this.showVictory();
            }, 300);
        }
    }

    showVictory() {
        const celebration = document.createElement('div');
        celebration.innerHTML = `
            <div style="
                position: fixed;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                padding: 40px 60px;
                border-radius: 20px;
                box-shadow: 0 20px 60px rgba(0,0,0,0.4);
                text-align: center;
                z-index: 10000;
                animation: victoryPop 0.5s ease-out;
            ">
                <h1 style="color: #fff; font-size: 48px; margin: 0 0 20px 0;">🎉 YOU WON! 🎉</h1>
                <p style="color: #fff; font-size: 24px; margin: 0;">Puzzle Completed!</p>
                <button onclick="location.reload()" style="
                    margin-top: 30px;
                    padding: 15px 40px;
                    font-size: 20px;
                    background: #fff;
                    color: #667eea;
                    border: none;
                    border-radius: 50px;
                    cursor: pointer;
                    font-weight: bold;
                    box-shadow: 0 5px 15px rgba(0,0,0,0.3);
                    transition: all 0.3s;
                " onmouseover="this.style.transform='scale(1.1)'" onmouseout="this.style.transform='scale(1)'">
                    Play Again
                </button>
            </div>
            <style>
                @keyframes victoryPop {
                    0% { transform: translate(-50%, -50%) scale(0); }
                    50% { transform: translate(-50%, -50%) scale(1.1); }
                    100% { transform: translate(-50%, -50%) scale(1); }
                }
            </style>
        `;
        document.body.appendChild(celebration);
    }
}

// Initialize puzzle games
document.addEventListener('DOMContentLoaded', function() {
    // Example usage - you'll integrate this with your existing games
    
    // Puzzle Game 1 - Peppa Pig Theme
    const puzzle1 = new EnhancedPuzzleGame(
        'https://images.unsplash.com/photo-1515488764276-beab7607c1e6?w=800',
        3
    );
    
    // Puzzle Game 2
    const puzzle2 = new EnhancedPuzzleGame(
        'https://cdn.pixabay.com/photo/2017/06/09/15/08/pig-2387141_1280.jpg',
        3
    );
    
    // Puzzle Game 3
    const puzzle3 = new EnhancedPuzzleGame(
        'https://images.unsplash.com/photo-1591994843349-f415893b3a6b?w=800',
        4
    );
});
