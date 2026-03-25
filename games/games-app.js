
// games-app.js

(function() {
    const cards = document.querySelectorAll('.card');
    const totalCards = cards.length;

    SequentialMemoryGame.initGame(totalCards);

    cards.forEach(function(card) {
        card.addEventListener('click', function() {
            const cardValue = parseInt(this.getAttribute('data-value'), 10);
            const response = SequentialMemoryGame.handleCardClick(cardValue);

            if (response.reason === 'already_opened') {
                return;
            }

            if (response.success === true) {
                cards.forEach(function(c) {
                    const value = parseInt(c.getAttribute('data-value'), 10);
                    if (response.openedCards.includes(value)) {
                        c.classList.add('active');
                    }
                });
            }

            if (response.success === false && response.reason === 'wrong_card') {
                cards.forEach(function(c) {
                    c.classList.remove('active');
                });
            }

            if (response.isComplete === true) {
                // Game complete - no UI action yet
            }
        });
    });
})();

