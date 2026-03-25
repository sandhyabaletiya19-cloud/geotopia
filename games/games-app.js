
// games-app.js

(function() {
    const cards = document.querySelectorAll('.card');
    const levelDisplay = document.getElementById('level-display');

    function updateLevelDisplay() {
        const currentLevel = SequentialMemoryGame.getCurrentLevel();
        levelDisplay.textContent = 'Level ' + currentLevel;
    }

    function updateCardsUI(openedCards) {
        cards.forEach(function(card) {
            const value = parseInt(card.getAttribute('data-value'), 10);
            if (openedCards.includes(value)) {
                card.classList.add('active');
            } else {
                card.classList.remove('active');
            }
        });
    }

    function resetUI() {
        cards.forEach(function(card) {
            card.classList.remove('active');
        });
    }

    SequentialMemoryGame.initGame();
    updateLevelDisplay();

    cards.forEach(function(card) {
        card.addEventListener('click', function() {
            const cardValue = parseInt(this.getAttribute('data-value'), 10);
            const response = SequentialMemoryGame.handleCardClick(cardValue);

            if (response.reason === 'already_opened') {
                return;
            }

            if (response.success === true) {
                updateCardsUI(response.openedCards);

                if (response.isComplete === true) {
                    SequentialMemoryGame.nextLevel();
                    updateLevelDisplay();
                    resetUI();
                }
            }

            if (response.success === false && response.reason === 'wrong_card') {
                resetUI();
            }
        });
    });
})();
