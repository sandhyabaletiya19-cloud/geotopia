// games-app.js

(function() {
    const cards = document.querySelectorAll('[data-value]');
    const totalCards = cards.length;

    SequentialMemoryGame.initGame(totalCards);

    cards.forEach(function(card) {
        card.addEventListener('click', function() {
            const cardValue = parseInt(this.getAttribute('data-value'), 10);
            const result = SequentialMemoryGame.handleCardClick(cardValue);

            if (result.success) {
                this.classList.add('active');
            } else if (result.reason === 'wrong_card') {
                cards.forEach(function(c) {
                    c.classList.remove('active');
                });
            }
        });
    });
})();
