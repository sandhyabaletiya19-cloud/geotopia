(function() {
    const gameBoard = document.querySelector('.game-board');
    const levelDisplay = document.getElementById('level-display');

    let currentTheme = 'kids';

    function applyTheme() {
        document.body.className = 'theme-' + currentTheme;
    }

    function updateLevelDisplay() {
        const currentLevel = SequentialMemoryGame.getCurrentLevel();
        levelDisplay.textContent = 'Level ' + currentLevel;
    }

    function updateCardsUI(openedCards) {
        const cards = gameBoard.querySelectorAll('.card');
        cards.forEach(function(card) {
            const value = parseInt(card.getAttribute('data-value'), 10);
            if (openedCards.includes(value)) {
                card.classList.add('active');
            } else {
                card.classList.remove('active');
            }
        });
    }

    function handleCardClickEvent(event) {
        const card = event.currentTarget;
        const cardValue = parseInt(card.getAttribute('data-value'), 10);
        const response = SequentialMemoryGame.handleCardClick(cardValue);

        if (response.reason === 'already_opened') return;

        if (response.success === true) {
            updateCardsUI(response.openedCards);

            if (response.isComplete === true) {
                const newState = SequentialMemoryGame.nextLevel();
                updateLevelDisplay();
                renderCards(newState.cards);
            }
        }

        if (response.success === false && response.reason === 'wrong_card') {
            updateCardsUI([]);
        }
    }

    function renderCards(cardsArray) {
        gameBoard.innerHTML = '';

        cardsArray.forEach(function(value) {
            const card = document.createElement('div');
            card.className = 'card';
            card.setAttribute('data-value', value);
            card.textContent = value;
            card.addEventListener('click', handleCardClickEvent);
            gameBoard.appendChild(card);
        });
    }

    function initializeGame() {
        applyTheme();
        const gameState = SequentialMemoryGame.initGame();
        updateLevelDisplay();
        renderCards(gameState.cards);
    }

    initializeGame();
})();
