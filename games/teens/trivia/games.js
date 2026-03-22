/**
 * GEOTOPIA TEENS ZONE - Geography Trivia Game
 * 1000+ questions across multiple categories
 */

const CONFIG = {
    questionsPerGame: 15,
    timePerQuestion: 20,
    points: {
        correct: 100,
        timeBonus: 5,
        skipPenalty: -50
    }
};

const CATEGORY_INFO = {
    all: { icon: '🌐', name: 'All Topics' },
    physical: { icon: '🏔️', name: 'Physical' },
    countries: { icon: '🌍', name: 'Countries' },
    climate: { icon: '🌡️', name: 'Climate' },
    maps: { icon: '🗺️', name: 'Maps' },
    facts: { icon: '📊', name: 'Facts' }
};

let gameState = {
    category: 'all',
    difficulty: 0,
    currentQuestion: 0,
    score: 0,
    correct: 0,
    skipped: 0,
    questions: [],
    timeRemaining: 20,
    timerInterval: null,
    isAnswered: false
};

document.addEventListener('DOMContentLoaded', initGame);

function initGame() {
    TeensUtils.initUsedQuestions('trivia');
    setupSelections();
    showScreen('intro-screen');
}

function showScreen(screenId) {
    ['intro-screen', 'how-to-play-screen', 'question-screen', 'results-screen'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.style.display = 'none';
    });
    document.getElementById(screenId).style.display = 'flex';
}

function setupSelections() {
    document.querySelectorAll('.cat-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            gameState.category = btn.dataset.cat;
            TeensSound.play('click');
        });
    });
    
    document.querySelectorAll('.diff-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.diff-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            gameState.difficulty = parseInt(btn.dataset.diff);
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
        skipped: 0,
        questions: generateQuestions(),
        timeRemaining: CONFIG.timePerQuestion,
        timerInterval: null,
        isAnswered: false
    };
    
    TeensUtils.startSession('trivia');
    generateProgressDots();
    showScreen('question-screen');
    loadQuestion();
}

function generateQuestions() {
    let pool = [...TRIVIA_QUESTIONS];
    
    if (gameState.category !== 'all') {
        pool = pool.filter(q => q.category === gameState.category);
    }
    
    if (gameState.difficulty !== 0) {
        pool = pool.filter(q => q.difficulty === gameState.difficulty);
    }
    
    return TeensUtils.shuffle(pool).slice(0, CONFIG.questionsPerGame);
}

function generateProgressDots() {
    document.getElementById('progress-dots').innerHTML = Array(CONFIG.questionsPerGame)
        .fill(0)
        .map((_, i) => `<span class="progress-dot ${i === 0 ? 'active' : ''}"></span>`)
        .join('');
}

function loadQuestion() {
    const q = gameState.questions[gameState.currentQuestion];
    gameState.isAnswered = false;
    
    // Update category badge
    const catInfo = CATEGORY_INFO[q.category] || CATEGORY_INFO.all;
    document.getElementById('cat-icon').textContent = catInfo.icon;
    document.getElementById('cat-name').textContent = catInfo.name;
    
    // Update question
    document.getElementById('question-text').textContent = q.question;
    document.getElementById('question-num').textContent = gameState.currentQuestion + 1;
    
    // Update options
    document.getElementById('options-grid').innerHTML = q.options.map(opt => `
        <button class="option-btn" onclick="selectAnswer('${opt.replace(/'/g, "\\'")}', this)">
            ${opt}
        </button>
    `).join('');
    
    // Update progress
    document.querySelectorAll('.progress-dot').forEach((dot, i) => {
        dot.classList.remove('active');
        if (i === gameState.currentQuestion) dot.classList.add('active');
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

function selectAnswer(answer, btn) {
    if (gameState.isAnswered) return;
    gameState.isAnswered = true;
    clearInterval(gameState.timerInterval);
    
    const q = gameState.questions[gameState.currentQuestion];
    const isCorrect = answer === q.answer;
    const dots = document.querySelectorAll('.progress-dot');
    
    document.querySelectorAll('.option-btn').forEach(b => b.disabled = true);
    
    if (isCorrect) {
        btn.classList.add('correct');
        dots[gameState.currentQuestion].classList.add('correct');
        
        const points = CONFIG.points.correct + (gameState.timeRemaining * CONFIG.points.timeBonus);
        gameState.score += points;
        gameState.correct++;
        
        TeensSound.play('correct');
        document.getElementById('score').textContent = gameState.score;
    } else {
        btn.classList.add('wrong');
        dots[gameState.currentQuestion].classList.add('wrong');
        
        document.querySelectorAll('.option-btn').forEach(b => {
            if (b.textContent.trim() === q.answer) b.classList.add('correct');
        });
        
        TeensSound.play('wrong');
    }
    
    setTimeout(nextQuestion, 1500);
}

function skipQuestion() {
    if (gameState.isAnswered) return;
    gameState.isAnswered = true;
    clearInterval(gameState.timerInterval);
    
    gameState.score += CONFIG.points.skipPenalty;
    if (gameState.score < 0) gameState.score = 0;
    gameState.skipped++;
    
    document.getElementById('score').textContent = gameState.score;
    document.querySelectorAll('.progress-dot')[gameState.currentQuestion].classList.add('wrong');
    
    TeensSound.play('click');
    showToast('Question skipped! -50 pts', 'error');
    
    setTimeout(nextQuestion, 500);
}

function timeOut() {
    gameState.isAnswered = true;
    
    const q = gameState.questions[gameState.currentQuestion];
    document.querySelectorAll('.progress-dot')[gameState.currentQuestion].classList.add('wrong');
    
    document.querySelectorAll('.option-btn').forEach(btn => {
        btn.disabled = true;
        if (btn.textContent.trim() === q.answer) btn.classList.add('correct');
    });
    
    TeensSound.play('wrong');
    showToast("⏱️ Time's up!", 'error');
    
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

function endGame() {
    TeensSound.play('gameOver');
    
    TeensUtils.updateSession({
        score: gameState.score,
        correct: gameState.correct,
        total: CONFIG.questionsPerGame
    });
    
    const results = TeensUtils.endSession();
    
    document.getElementById('final-score').textContent = gameState.score;
    document.getElementById('correct-count').textContent = `${gameState.correct}/${CONFIG.questionsPerGame}`;
    document.getElementById('accuracy-stat').textContent = `${Math.round((gameState.correct / CONFIG.questionsPerGame) * 100)}%`;
    document.getElementById('skipped-stat').textContent = gameState.skipped;
    document.getElementById('coins-amount').textContent = results.coinsEarned;
    
    const pct = (gameState.correct / CONFIG.questionsPerGame) * 100;
    document.getElementById('results-icon').textContent = pct >= 80 ? '🏆' : pct >= 50 ? '⭐' : '📚';
    document.getElementById('results-title').textContent = pct >= 80 ? 'Excellent!' : pct >= 50 ? 'Good Job!' : 'Keep Learning!';
    
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
