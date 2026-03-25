// games-app.js

(function() {
    const gameBoard = document.querySelector('.game-board');
    const levelDisplay = document.getElementById('level-display');
    const themeSelector = document.getElementById('theme-selector');
    const gameSelector = document.getElementById('game-selector');

    let currentTheme = 'kids';
    let currentGame = 'memory';

    function applyTheme() {
        document.body.className = 'theme-' + currentTheme;
    }

    function setTheme(theme) {
        currentTheme = theme;
        applyTheme();
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

    function resetUI() {
        const cards = gameBoard.querySelectorAll('.card');
        cards.forEach(function(card) {
            card.classList.remove('active');
        });
    }

    function handleCardClickEvent(event) {
        const card = event.currentTarget;
        const cardValue = parseInt(card.getAttribute('data-value'), 10);
        const response = SequentialMemoryGame.handleCardClick(cardValue);

        if (response.reason === 'already_opened') {
            return;
        }

        if (response.success === true) {
            updateCardsUI(response.openedCards);

            if (response.isComplete === true) {
                const newState = SequentialMemoryGame.nextLevel();
                updateLevelDisplay();
                renderCards(newState.cards);
            }
        }

        if (response.success === false && response.reason === 'wrong_card') {
            resetUI();
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

    function renderMemoryGame() {
        const gameState = SequentialMemoryGame.initGame();
        updateLevelDisplay();
        renderCards(gameState.cards);
    }

    function renderQuizGame() {
        gameBoard.innerHTML = '';
        levelDisplay.textContent = '';

        const comingSoon = document.createElement('div');
        comingSoon.className = 'coming-soon';
        comingSoon.textContent = 'Coming Soon...';
        gameBoard.appendChild(comingSoon);
    }

    function switchGame(game) {
        currentGame = game;

        if (currentGame === 'memory') {
            renderMemoryGame();
        } else if (currentGame === 'quiz') {
            renderQuizGame();
        }
    }

    function initializeGame() {
        applyTheme();

        if (currentGame === 'memory') {
            renderMemoryGame();
        } else if (currentGame === 'quiz') {
            renderQuizGame();
        }
    }

    if (themeSelector) {
        themeSelector.addEventListener('change', function(event) {
            setTheme(event.target.value);
        });

        themeSelector.addEventListener('click', function(event) {
            if (event.target.hasAttribute('data-theme')) {
                setTheme(event.target.getAttribute('data-theme'));
            }
        });
    }

    if (gameSelector) {
        gameSelector.addEventListener('change', function(event) {
            switchGame(event.target.value);
        });

        gameSelector.addEventListener('click', function(event) {
            if (event.target.hasAttribute('data-game')) {
                switchGame(event.target.getAttribute('data-game'));
            }
        });
    }

    initializeGame();
})();
