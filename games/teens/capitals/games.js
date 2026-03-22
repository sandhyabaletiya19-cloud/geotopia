/**
 * GEOTOPIA TEENS ZONE - Capital Quiz Game
 * Normal mode: Country → Capital
 * Reverse mode: Capital → Country
 * Mixed mode: Random alternation
 */

const CONFIG = {
    questionsPerGame: 10,
    timers: {
        easy: 20,
        normal: 15,
        hard: 10
    },
    points: {
        base: 100,
        timeBonus: 10,
        streakMultiplier: 0.5
    }
};

let gameState = {
    mode: 'normal',
    difficulty: 'normal',
    currentQuestion: 0,
    score: 0,
    correct: 0,
    streak: 0,
    bestStreak: 0,
    questions: [],
    timeRemaining: 15,
    timerInterval: null,
    isAnswered: false
};

// Initialize
document.addEventListener('DOMContentLoaded', initGame);

function initGame() {
    TeensUtils.initUsedQuestions('capitals');
    setupSelections();
    showScreen('intro-screen');
}

function showScreen(screenId) {
    ['intro-screen', 'how-to-play-screen', 'question-screen', 'results-screen'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.style.display = 'none';
    });
    
    const screen = document.getElementById(screenId);
    if (screen) screen.style.display = 'flex';
}

function setupSelections() {
    // Mode buttons
    document.querySelectorAll('.mode-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.mode-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            gameState.mode = btn.dataset.mode;
            TeensSound.play('click');
        });
    });
    
    // Difficulty buttons
    document.querySelectorAll('.diff-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.diff-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            gameState.difficulty = btn.dataset.diff;
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
        streak: 0,
        bestStreak: 0,
        questions: generateQuestions(),
        timeRemaining: CONFIG.timers[gameState.difficulty],
        timerInterval: null,
        isAnswered: false
    };
    
    TeensUtils.startSession('capitals');
    generateProgressDots();
    showScreen('question-screen');
    loadQuestion();
}

function generateQuestions() {
    const questions = [];
    const usedCountries = new Set();
    
    for (let i = 0; i < CONFIG.questionsPerGame; i++) {
        let country;
        do {
            country = CountryData.getRandom();
        } while (usedCountries.has(country.id));
        usedCountries.add(country.id);
        
        // Determine question type
        let type;
        if (gameState.mode === 'mixed') {
            type = Math.random() > 0.5 ? 'normal' : 'reverse';
        } else {
            type = gameState.mode;
        }
        
        let question, correctAnswer, wrongOptions;
        
        if (type === 'normal') {
            question = country.name;
            correctAnswer = country.capital;
            wrongOptions = COUNTRIES
                .filter(c => c.id !== country.id)
                .sort(() => Math.random() - 0.5)
                .slice(0, 3)
                .map(c => c.capital);
        } else {
            question = country.capital;
            correctAnswer = country.name;
            wrongOptions = COUNTRIES
                .filter(c => c.id !== country.id)
                .sort(() => Math.random() - 0.5)
                .slice(0, 3)
                .map(c => c.name);
        }
        
        questions.push({
            id: `capital_${country.id}_${Date.now()}`,
            type: type,
            question: question,
            correctAnswer: correctAnswer,
            options: TeensUtils.shuffle([correctAnswer, ...wrongOptions]),
            flag: country.flag
        });
    }
    
    return questions;
}

function generateProgressDots() {
    const container = document.getElementById('progress-dots');
    container.innerHTML = Array(CONFIG.questionsPerGame)
        .fill(0)
        .map((_, i) => `<span class="progress-dot ${i === 0 ? 'active' : ''}"></span>`)
        .join('');
}

function loadQuestion() {
    const q = gameState.questions[gameState.currentQuestion];
    gameState.isAnswered = false;
    
    // Update badge
    const badgeIcon = document.getElementById('badge-icon');
    const badgeText = document.getElementById('badge-text');
    
    if (q.type === 'normal') {
        badgeIcon.textContent = '🌍';
        badgeText.textContent = 'Country → Capital';
        document.getElementById('question-emoji').textContent = q.flag;
    } else {
        badgeIcon.textContent = '🏛️';
        badgeText.textContent = 'Capital → Country';
        document.getElementById('question-emoji').textContent = '🏛️';
    }
    
    // Update question
    document.getElementById('question-main').textContent = q.question;
    
    // Update options
    document.getElementById('options-grid').innerHTML = q.options.map(opt => `
        <button class="option-btn" onclick="selectAnswer('${opt.replace(/'/g, "\\'")}', this)">
            ${opt}
        </button>
    `).join('');
    
    // Update progress
    document.querySelectorAll('.progress-dot').forEach((dot, i) => {
        dot.classList.toggle('active', i === gameState.currentQuestion);
    });
    
    startTimer();
}

function startTimer() {
    gameState.timeRemaining = CONFIG.timers[gameState.difficulty];
    updateTimerDisplay();
    
    const timerBar = document.getElementById('timer-bar');
    timerBar.style.transition = 'none';
    timerBar.style.width = '100%';
    
    setTimeout(() => {
        timerBar.style.transition = `width ${gameState.timeRemaining}s linear`;
        timerBar.style.width = '0%';
    }, 50);
    
    clearInterval(gameState.timerInterval);
    gameState.timerInterval = setInterval(() => {
        gameState.timeRemaining--;
        updateTimerDisplay();
        
        if (gameState.timeRemaining === 3) {
            TeensSound.play('timeWarning');
            TeensUtils.vibrate([100, 50, 100]);
        }
        
        if (gameState.timeRemaining <= 0) {
            clearInterval(gameState.timerInterval);
            if (!gameState.isAnswered) timeOut();
        }
    }, 1000);
}

function updateTimerDisplay() {
    const timerEl = document.getElementById('timer');
    const timerDisplay = document.getElementById('timer-display');
    
    timerEl.textContent = gameState.timeRemaining;
    
    if (gameState.timeRemaining <= 3) {
        timerDisplay.style.color = 'var(--red)';
    } else if (gameState.timeRemaining <= 5) {
        timerDisplay.style.color = 'var(--yellow)';
    } else {
        timerDisplay.style.color = 'var(--cyan)';
    }
}

function selectAnswer(answer, btn) {
    if (gameState.isAnswered) return;
    gameState.isAnswered = true;
    clearInterval(gameState.timerInterval);
    
    const q = gameState.questions[gameState.currentQuestion];
    const isCorrect = answer === q.correctAnswer;
    const dots = document.querySelectorAll('.progress-dot');
    
    document.querySelectorAll('.option-btn').forEach(b => b.disabled = true);
    
    if (isCorrect) {
        btn.classList.add('correct');
        dots[gameState.currentQuestion].classList.add('correct');
        
        TeensSound.play('correct');
        TeensUtils.vibrate([50]);
        
        const basePoints = CONFIG.points.base;
        const timeBonus = gameState.timeRemaining * CONFIG.points.timeBonus;
        const streakBonus = Math.floor(basePoints * gameState.streak * CONFIG.points.streakMultiplier);
        
        gameState.score += basePoints + timeBonus + streakBonus;
        gameState.correct++;
        gameState.streak++;
        
        if (gameState.streak > gameState.bestStreak) {
            gameState.bestStreak = gameState.streak;
        }
        
        if (gameState.streak >= 2) showCombo(gameState.streak);
        
        updateScoreDisplay();
    } else {
        btn.classList.add('wrong');
        dots[gameState.currentQuestion].classList.add('wrong');
        
        document.querySelectorAll('.option-btn').forEach(b => {
            if (b.textContent.trim() === q.correctAnswer) {
                b.classList.add('correct');
            }
        });
        
        TeensSound.play('wrong');
        TeensUtils.vibrate([100, 50, 100]);
        
        gameState.streak = 0;
        updateScoreDisplay();
    }
    
    setTimeout(nextQuestion, 1500);
}

function timeOut() {
    gameState.isAnswered = true;
    
    const q = gameState.questions[gameState.currentQuestion];
    const dots = document.querySelectorAll('.progress-dot');
    
    dots[gameState.currentQuestion].classList.add('wrong');
    
    document.querySelectorAll('.option-btn').forEach(btn => {
        btn.disabled = true;
        if (btn.textContent.trim() === q.correctAnswer) {
            btn.classList.add('correct');
        }
    });
    
    TeensSound.play('wrong');
    showToast("⏱️ Time's up!", 'error');
    
    gameState.streak = 0;
    updateScoreDisplay();
    
    setTimeout(nextQuestion, 1500);
}

function nextQuestion() {
    gameState.currentQuestion++;
    
    if (gameState.currentQuestion >= CONFIG.questionsPerGame) {
        endGame();
    } else {
        loadQuestion();
    }
}

function showCombo(streak) {
    const indicator = document.getElementById('combo-indicator');
    document.getElementById('combo-count').textContent = streak;
    
    indicator.classList.add('show');
    TeensSound.play('combo');
    
    setTimeout(() => indicator.classList.remove('show'), 1000);
}

function updateScoreDisplay() {
    document.getElementById('score').textContent = gameState.score;
    document.getElementById('streak').textContent = gameState.streak;
}

function endGame() {
    TeensSound.play('gameOver');
    
    TeensUtils.updateSession({
        score: gameState.score,
        correct: gameState.correct,
        total: CONFIG.questionsPerGame,
        streak: gameState.streak,
        bestStreak: gameState.bestStreak
    });
    
    const results = TeensUtils.endSession();
    
    // Update results
    document.getElementById('final-score').textContent = gameState.score;
    document.getElementById('correct-count').textContent = `${gameState.correct}/${CONFIG.questionsPerGame}`;
    document.getElementById('accuracy-stat').textContent = `${Math.round((gameState.correct / CONFIG.questionsPerGame) * 100)}%`;
    document.getElementById('best-streak-stat').textContent = gameState.bestStreak;
    document.getElementById('coins-amount').textContent = results.coinsEarned;
    
    const pct = (gameState.correct / CONFIG.questionsPerGame) * 100;
    const iconEl = document.getElementById('results-icon');
    const titleEl = document.getElementById('results-title');
    
    if (pct === 100) {
        iconEl.textContent = '👑';
        titleEl.textContent = 'PERFECT!';
    } else if (pct >= 80) {
        iconEl.textContent = '🏆';
        titleEl.textContent = 'Excellent!';
    } else if (pct >= 60) {
        iconEl.textContent = '⭐';
        titleEl.textContent = 'Good Job!';
    } else if (pct >= 40) {
        iconEl.textContent = '💪';
        titleEl.textContent = 'Keep Trying!';
    } else {
        iconEl.textContent = '📚';
        titleEl.textContent = 'Study More!';
    }
    
    if (results.isNewHighScore) {
        document.getElementById('new-high-score').style.display = 'block';
        TeensSound.play('newHighScore');
    } else {
        document.getElementById('new-high-score').style.display = 'none';
    }
    
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
