/**
 * GEOTOPIA TEENS ZONE - Capital Match Game
 * Drag countries to their capitals
 */

let gameState = {
    pairs: 8,
    time: 90,
    timeRemaining: 90,
    timerInterval: null,
    matches: [],
    matchesMade: 0,
    mistakes: 0,
    selectedCountry: null,
    score: 0
};

document.addEventListener('DOMContentLoaded', initGame);

function initGame() {
    setupDifficultySelection();
    showScreen('intro-screen');
}

function showScreen(screenId) {
    ['intro-screen', 'how-to-play-screen', 'game-screen', 'results-screen'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.style.display = 'none';
    });
    document.getElementById(screenId).style.display = 'flex';
}

function setupDifficultySelection() {
    document.querySelectorAll('.diff-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.diff-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            gameState.pairs = parseInt(btn.dataset.pairs);
            gameState.time = parseInt(btn.dataset.time);
            TeensSound.play('click');
        });
    });
}

function showHowToPlay() {
    TeensSound.play('click');
    document.getElementById('how-to-play-screen').style.display = 'flex';
}

function hideHowToPlay() {
    TeensSound.play('click');
    document.getElementById('how-to-play-screen').style.display = 'none';
}

function startGame() {
    TeensSound.play('click');
    
    gameState.timeRemaining = gameState.time;
    gameState.matchesMade = 0;
    gameState.mistakes = 0;
    gameState.selectedCountry = null;
    gameState.score = 0;
    
    // Generate matches
    const countries = CountryData.getRandom(gameState.pairs);
    gameState.matches = countries.map(c => ({
        id: c.id,
        country: c.name,
        capital: c.capital,
        flag: c.flag,
        matched: false
    }));
    
    TeensUtils.startSession('capital-match');
    
    renderGame();
    showScreen('game-screen');
    startTimer();
}

function renderGame() {
    const countriesList = document.getElementById('countries-list');
    const capitalsList = document.getElementById('capitals-list');
    
    // Shuffle for display
    const shuffledCountries = TeensUtils.shuffle([...gameState.matches]);
    const shuffledCapitals = TeensUtils.shuffle([...gameState.matches]);
    
    countriesList.innerHTML = shuffledCountries.map(m => `
        <div class="match-card country-card" data-id="${m.id}" onclick="selectCountry(${m.id})" draggable="true">
            <span class="flag">${m.flag}</span>
            <span class="name">${m.country}</span>
        </div>
    `).join('');
    
    capitalsList.innerHTML = shuffledCapitals.map(m => `
        <div class="match-card capital-card" data-id="${m.id}" onclick="selectCapital(${m.id})">
            <span class="icon">🏛️</span>
            <span class="name">${m.capital}</span>
        </div>
    `).join('');
    
    document.getElementById('matches').textContent = gameState.matchesMade;
    
    // Setup drag events
    setupDragAndDrop();
}

function setupDragAndDrop() {
    document.querySelectorAll('.country-card').forEach(card => {
        card.addEventListener('dragstart', handleDragStart);
        card.addEventListener('dragend', handleDragEnd);
    });
    
    document.querySelectorAll('.capital-card').forEach(card => {
        card.addEventListener('dragover', handleDragOver);
        card.addEventListener('drop', handleDrop);
        card.addEventListener('dragleave', handleDragLeave);
    });
}

function handleDragStart(e) {
    e.target.classList.add('dragging');
    e.dataTransfer.setData('text/plain', e.target.dataset.id);
}

function handleDragEnd(e) {
    e.target.classList.remove('dragging');
}

function handleDragOver(e) {
    e.preventDefault();
    e.target.closest('.capital-card')?.classList.add('drop-target');
}

function handleDragLeave(e) {
    e.target.closest('.capital-card')?.classList.remove('drop-target');
}

function handleDrop(e) {
    e.preventDefault();
    const capitalCard = e.target.closest('.capital-card');
    capitalCard?.classList.remove('drop-target');
    
    const countryId = parseInt(e.dataTransfer.getData('text/plain'));
    const capitalId = parseInt(capitalCard.dataset.id);
    
    checkMatch(countryId, capitalId);
}

// For touch devices
function selectCountry(id) {
    const cards = document.querySelectorAll('.country-card');
    cards.forEach(c => c.classList.remove('selected'));
    
    const card = document.querySelector(`.country-card[data-id="${id}"]`);
    card?.classList.add('selected');
    
    gameState.selectedCountry = id;
    TeensSound.play('click');
}

function selectCapital(id) {
    if (gameState.selectedCountry === null) {
        showToast('Select a country first!', 'error');
        return;
    }
    
    checkMatch(gameState.selectedCountry, id);
    gameState.selectedCountry = null;
    document.querySelectorAll('.country-card').forEach(c => c.classList.remove('selected'));
}

function checkMatch(countryId, capitalId) {
    const countryCard = document.querySelector(`.country-card[data-id="${countryId}"]`);
    const capitalCard = document.querySelector(`.capital-card[data-id="${capitalId}"]`);
    
    if (countryId === capitalId) {
        // Correct match!
        countryCard.classList.add('correct');
        capitalCard.classList.add('correct');
        
        gameState.matchesMade++;
        gameState.score += 100 + Math.floor(gameState.timeRemaining / 2);
        
        document.getElementById('matches').textContent = gameState.matchesMade;
        
        TeensSound.play('match');
        
        setTimeout(() => {
            countryCard.style.display = 'none';
            capitalCard.style.display = 'none';
            
            if (gameState.matchesMade >= gameState.pairs) {
                endGame(true);
            }
        }, 500);
    } else {
        // Wrong match
        countryCard.classList.add('wrong');
        capitalCard.classList.add('wrong');
        
        gameState.mistakes++;
        gameState.timeRemaining = Math.max(0, gameState.timeRemaining - 5);
        
        TeensSound.play('wrong');
        showToast('Wrong match! -5 seconds', 'error');
        
        setTimeout(() => {
            countryCard.classList.remove('wrong');
            capitalCard.classList.remove('wrong');
        }, 500);
    }
}

function startTimer() {
    const timerBar = document.getElementById('timer-bar');
    timerBar.style.width = '100%';
    
    clearInterval(gameState.timerInterval);
    gameState.timerInterval = setInterval(() => {
        gameState.timeRemaining--;
        document.getElementById('timer').textContent = gameState.timeRemaining;
        
        const pct = (gameState.timeRemaining / gameState.time) * 100;
        timerBar.style.width = `${pct}%`;
        
        if (gameState.timeRemaining === 10) {
            TeensSound.play('timeWarning');
        }
        
        if (gameState.timeRemaining <= 0) {
            endGame(false);
        }
    }, 1000);
}

function endGame(won) {
    clearInterval(gameState.timerInterval);
    
    if (won) {
        gameState.score += gameState.timeRemaining * 10;
        TeensSound.play('correct');
    } else {
        TeensSound.play('gameOver');
    }
    
    TeensUtils.updateSession({
        score: gameState.score,
        correct: gameState.matchesMade,
        total: gameState.pairs
    });
    
    const results = TeensUtils.endSession();
    
    document.getElementById('final-score').textContent = gameState.score;
    document.getElementById('time-remaining').textContent = `${gameState.timeRemaining}s`;
    document.getElementById('matches-made').textContent = `${gameState.matchesMade}/${gameState.pairs}`;
    document.getElementById('mistakes-made').textContent = gameState.mistakes;
    document.getElementById('coins-amount').textContent = results.coinsEarned;
    
    document.getElementById('results-icon').textContent = won ? '🎯' : '⏱️';
    document.getElementById('results-title').textContent = won ? 'All Matched!' : "Time's Up!";
    
    document.getElementById('new-high-score').style.display = results.isNewHighScore ? 'block' : 'none';
    if (results.isNewHighScore) TeensSound.play('newHighScore');
    
    showScreen('results-screen');
}

function restartGame() {
    TeensSound.play('click');
    startGame();
}

function exitGame() {
    TeensSound.play('click');
    clearInterval(gameState.timerInterval);
    window.location.href = '../index.html';
}

function showToast(message, type = 'success') {
    const toast = document.getElementById('toast');
    toast.querySelector('.toast-icon').textContent = type === 'success' ? '✓' : '✗';
    toast.querySelector('.toast-message').textContent = message;
    toast.className = `toast ${type} show`;
    setTimeout(() => toast.classList.remove('show'), 2000);
}
