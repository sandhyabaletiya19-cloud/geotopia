/**
 * GEOTOPIA TEENS ZONE - Map Click Challenge
 * Click on countries on the map
 */

// Simplified country data with approximate clickable regions
// In production, you'd use actual SVG map paths
const REGION_COUNTRIES = {
    europe: [
        { name: "France", flag: "🇫🇷", code: "FR" },
        { name: "Germany", flag: "🇩🇪", code: "DE" },
        { name: "Italy", flag: "🇮🇹", code: "IT" },
        { name: "Spain", flag: "🇪🇸", code: "ES" },
        { name: "United Kingdom", flag: "🇬🇧", code: "GB" },
        { name: "Poland", flag: "🇵🇱", code: "PL" },
        { name: "Netherlands", flag: "🇳🇱", code: "NL" },
        { name: "Belgium", flag: "🇧🇪", code: "BE" },
        { name: "Sweden", flag: "🇸🇪", code: "SE" },
        { name: "Norway", flag: "🇳🇴", code: "NO" },
        { name: "Portugal", flag: "🇵🇹", code: "PT" },
        { name: "Greece", flag: "🇬🇷", code: "GR" }
    ],
    asia: [
        { name: "Japan", flag: "🇯🇵", code: "JP" },
        { name: "China", flag: "🇨🇳", code: "CN" },
        { name: "India", flag: "🇮🇳", code: "IN" },
        { name: "South Korea", flag: "🇰🇷", code: "KR" },
        { name: "Thailand", flag: "🇹🇭", code: "TH" },
        { name: "Vietnam", flag: "🇻🇳", code: "VN" },
        { name: "Indonesia", flag: "🇮🇩", code: "ID" },
        { name: "Malaysia", flag: "🇲🇾", code: "MY" },
        { name: "Philippines", flag: "🇵🇭", code: "PH" },
        { name: "Saudi Arabia", flag: "🇸🇦", code: "SA" }
    ],
    africa: [
        { name: "Egypt", flag: "🇪🇬", code: "EG" },
        { name: "South Africa", flag: "🇿🇦", code: "ZA" },
        { name: "Nigeria", flag: "🇳🇬", code: "NG" },
        { name: "Kenya", flag: "🇰🇪", code: "KE" },
        { name: "Morocco", flag: "🇲🇦", code: "MA" },
        { name: "Ethiopia", flag: "🇪🇹", code: "ET" },
        { name: "Ghana", flag: "🇬🇭", code: "GH" },
        { name: "Tanzania", flag: "🇹🇿", code: "TZ" },
        { name: "Algeria", flag: "🇩🇿", code: "DZ" },
        { name: "Tunisia", flag: "🇹🇳", code: "TN" }
    ],
    americas: [
        { name: "United States", flag: "🇺🇸", code: "US" },
        { name: "Canada", flag: "🇨🇦", code: "CA" },
        { name: "Mexico", flag: "🇲🇽", code: "MX" },
        { name: "Brazil", flag: "🇧🇷", code: "BR" },
        { name: "Argentina", flag: "🇦🇷", code: "AR" },
        { name: "Colombia", flag: "🇨🇴", code: "CO" },
        { name: "Peru", flag: "🇵🇪", code: "PE" },
        { name: "Chile", flag: "🇨🇱", code: "CL" },
        { name: "Venezuela", flag: "🇻🇪", code: "VE" },
        { name: "Cuba", flag: "🇨🇺", code: "CU" }
    ]
};

const CONFIG = {
    questionsPerGame: 10,
    timePerQuestion: 10,
    points: {
        base: 100,
        timeBonus: 15 // per second remaining
    }
};

let gameState = {
    region: 'europe',
    currentQuestion: 0,
    score: 0,
    correct: 0,
    questions: [],
    timeRemaining: 10,
    timerInterval: null,
    isAnswered: false,
    totalTime: 0,
    attempts: 0
};

document.addEventListener('DOMContentLoaded', initGame);

function initGame() {
    setupRegionSelection();
    showScreen('intro-screen');
}

function showScreen(screenId) {
    ['intro-screen', 'how-to-play-screen', 'question-screen', 'results-screen'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.style.display = 'none';
    });
    document.getElementById(screenId).style.display = 'flex';
}

function setupRegionSelection() {
    document.querySelectorAll('.region-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.region-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            gameState.region = btn.dataset.region;
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
    
    gameState = {
        ...gameState,
        currentQuestion: 0,
        score: 0,
        correct: 0,
        questions: generateQuestions(),
        timeRemaining: CONFIG.timePerQuestion,
        timerInterval: null,
        isAnswered: false,
        totalTime: 0,
        attempts: 0
    };
    
    TeensUtils.startSession('map-click');
    loadMap();
    showScreen('question-screen');
    loadQuestion();
}

function generateQuestions() {
    const countries = [...REGION_COUNTRIES[gameState.region]];
    return TeensUtils.shuffle(countries).slice(0, CONFIG.questionsPerGame);
}

function loadMap() {
    const container = document.getElementById('map-container');
    const countries = REGION_COUNTRIES[gameState.region];
    
    // Create a simple interactive grid map
    // In production, use actual SVG map of the region
    const gridSize = Math.ceil(Math.sqrt(countries.length));
    
    let html = '<div class="simple-map-grid" style="display: grid; grid-template-columns: repeat(' + gridSize + ', 1fr); gap: 10px; padding: 20px; height: 100%;">';
    
    countries.forEach(country => {
        html += `
            <div class="map-country" 
                 data-code="${country.code}" 
                 data-name="${country.name}"
                 onclick="handleMapClick('${country.code}')"
                 style="
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    background: var(--bg-tertiary);
                    border: 2px solid var(--glass-border);
                    border-radius: var(--radius-md);
                    cursor: pointer;
                    transition: all 0.2s ease;
                    padding: 10px;
                 ">
                <span style="font-size: 2rem;">${country.flag}</span>
                <span style="font-size: 0.7rem; color: var(--text-muted); margin-top: 5px; text-align: center;">${country.name}</span>
            </div>
        `;
    });
    
    html += '</div>';
    container.innerHTML = html;
    
    // Add hover effect
    container.querySelectorAll('.map-country').forEach(el => {
        el.addEventListener('mouseenter', () => {
            if (!el.classList.contains('correct') && !el.classList.contains('wrong')) {
                el.style.borderColor = 'var(--cyan)';
                el.style.transform = 'scale(1.05)';
            }
        });
        el.addEventListener('mouseleave', () => {
            if (!el.classList.contains('correct') && !el.classList.contains('wrong')) {
                el.style.borderColor = 'var(--glass-border)';
                el.style.transform = 'scale(1)';
            }
        });
    });
}

function loadQuestion() {
    const q = gameState.questions[gameState.currentQuestion];
    gameState.isAnswered = false;
    gameState.attempts = 0;
    
    document.getElementById('question-num').textContent = gameState.currentQuestion + 1;
    document.getElementById('target-flag').textContent = q.flag;
    document.getElementById('target-name').textContent = q.name;
    
    // Reset all countries
    document.querySelectorAll('.map-country').forEach(el => {
        el.classList.remove('correct', 'wrong', 'highlight');
        el.style.background = 'var(--bg-tertiary)';
        el.style.borderColor = 'var(--glass-border)';
        el.style.pointerEvents = 'auto';
    });
    
    startTimer();
}

function startTimer() {
    gameState.timeRemaining = CONFIG.timePerQuestion;
    document.getElementById('timer').textContent = gameState.timeRemaining;
    
    const timerBar = document.getElementById('timer-bar');
    timerBar.style.transition = 'none';
    timerBar.style.width = '100%';
    
    setTimeout(() => {
        timerBar.style.transition = `width ${CONFIG.timePerQuestion}s linear`;
        timerBar.style.width = '0%';
    }, 50);
    
    clearInterval(gameState.timerInterval);
    gameState.timerInterval = setInterval(() => {
        gameState.timeRemaining--;
        document.getElementById('timer').textContent = gameState.timeRemaining;
        
        if (gameState.timeRemaining === 3) {
            TeensSound.play('timeWarning');
        }
        
        if (gameState.timeRemaining <= 0) {
            clearInterval(gameState.timerInterval);
            if (!gameState.isAnswered) timeOut();
        }
    }, 1000);
}

function handleMapClick(code) {
    if (gameState.isAnswered) return;
    
    const q = gameState.questions[gameState.currentQuestion];
    const clickedEl = document.querySelector(`.map-country[data-code="${code}"]`);
    
    gameState.attempts++;
    
    if (code === q.code) {
        // Correct!
        gameState.isAnswered = true;
        clearInterval(gameState.timerInterval);
        
        clickedEl.classList.add('correct');
        clickedEl.style.background = 'var(--green)';
        clickedEl.style.borderColor = 'var(--green)';
        
        const timeBonus = gameState.timeRemaining * CONFIG.points.timeBonus;
        const attemptPenalty = (gameState.attempts - 1) * 25;
        const points = Math.max(CONFIG.points.base + timeBonus - attemptPenalty, 50);
        
        gameState.score += points;
        gameState.correct++;
        gameState.totalTime += (CONFIG.timePerQuestion - gameState.timeRemaining);
        
        document.getElementById('score').textContent = gameState.score;
        
        showFeedback('✓ Correct!', 'correct');
        TeensSound.play('correct');
        
        // Disable all countries
        document.querySelectorAll('.map-country').forEach(el => {
            el.style.pointerEvents = 'none';
        });
        
        setTimeout(nextQuestion, 1500);
    } else {
        // Wrong
        clickedEl.classList.add('wrong');
        clickedEl.style.background = 'var(--red)';
        clickedEl.style.borderColor = 'var(--red)';
        clickedEl.style.pointerEvents = 'none';
        
        TeensSound.play('wrong');
        showFeedback('✗ Try again!', 'wrong');
        
        // Reset wrong after brief delay
        setTimeout(() => {
            clickedEl.style.background = 'rgba(255, 51, 102, 0.3)';
        }, 300);
    }
}

function timeOut() {
    gameState.isAnswered = true;
    
    const q = gameState.questions[gameState.currentQuestion];
    
    // Highlight correct answer
    const correctEl = document.querySelector(`.map-country[data-code="${q.code}"]`);
    if (correctEl) {
        correctEl.style.background = 'var(--yellow)';
        correctEl.style.borderColor = 'var(--yellow)';
    }
    
    showFeedback("⏱️ Time's up!", 'wrong');
    TeensSound.play('wrong');
    
    document.querySelectorAll('.map-country').forEach(el => {
        el.style.pointerEvents = 'none';
    });
    
    setTimeout(nextQuestion, 2000);
}

function showFeedback(message, type) {
    const feedback = document.getElementById('click-feedback');
    feedback.textContent = message;
    feedback.className = `click-feedback ${type} show`;
    
    setTimeout(() => {
        feedback.classList.remove('show');
    }, 1000);
}

function nextQuestion() {
    gameState.currentQuestion++;
    
    if (gameState.currentQuestion >= CONFIG.questionsPerGame) {
        endGame();
    } else {
        loadQuestion();
    }
}

function endGame() {
    clearInterval(gameState.timerInterval);
    TeensSound.play('gameOver');
    
    TeensUtils.updateSession({
        score: gameState.score,
        correct: gameState.correct,
        total: CONFIG.questionsPerGame
    });
    
    const results = TeensUtils.endSession();
    
    const avgTime = gameState.correct > 0 ? (gameState.totalTime / gameState.correct).toFixed(1) : 0;
    
    document.getElementById('final-score').textContent = gameState.score;
    document.getElementById('correct-count').textContent = `${gameState.correct}/${CONFIG.questionsPerGame}`;
    document.getElementById('accuracy-stat').textContent = `${Math.round((gameState.correct / CONFIG.questionsPerGame) * 100)}%`;
    document.getElementById('avg-time-stat').textContent = `${avgTime}s`;
    document.getElementById('coins-amount').textContent = results.coinsEarned;
    
    const pct = (gameState.correct / CONFIG.questionsPerGame) * 100;
    document.getElementById('results-icon').textContent = pct >= 80 ? '🏆' : pct >= 50 ? '⭐' : '🗺️';
    document.getElementById('results-title').textContent = pct >= 80 ? 'Map Master!' : pct >= 50 ? 'Good Navigator!' : 'Keep Exploring!';
    
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
