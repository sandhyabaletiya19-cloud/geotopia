/**
 * GEOTOPIA TEENS ZONE - Time Zone Game
 * Calculate time differences between cities
 */

const CITIES = [
    { name: "London", flag: "🇬🇧", offset: 0 },
    { name: "New York", flag: "🇺🇸", offset: -5 },
    { name: "Los Angeles", flag: "🇺🇸", offset: -8 },
    { name: "Tokyo", flag: "🇯🇵", offset: 9 },
    { name: "Sydney", flag: "🇦🇺", offset: 11 },
    { name: "Dubai", flag: "🇦🇪", offset: 4 },
    { name: "Paris", flag: "🇫🇷", offset: 1 },
    { name: "Moscow", flag: "🇷🇺", offset: 3 },
    { name: "Singapore", flag: "🇸🇬", offset: 8 },
    { name: "Mumbai", flag: "🇮🇳", offset: 5.5 },
    { name: "Berlin", flag: "🇩🇪", offset: 1 },
    { name: "Beijing", flag: "🇨🇳", offset: 8 },
    { name: "São Paulo", flag: "🇧🇷", offset: -3 },
    { name: "Cairo", flag: "🇪🇬", offset: 2 },
    { name: "Bangkok", flag: "🇹🇭", offset: 7 }
];

const CONFIG = {
    questionsPerGame: 10,
    points: { correct: 100 }
};

let gameState = {
    mode: 'calculate',
    currentQuestion: 0,
    score: 0,
    correct: 0,
    questions: [],
    isAnswered: false
};

document.addEventListener('DOMContentLoaded', initGame);

function initGame() {
    setupModeSelection();
    showScreen('intro-screen');
}

function showScreen(screenId) {
    ['intro-screen', 'how-to-play-screen', 'question-screen', 'results-screen'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.style.display = 'none';
    });
    document.getElementById(screenId).style.display = 'flex';
}

function setupModeSelection() {
    document.querySelectorAll('.mode-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.mode-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            gameState.mode = btn.dataset.mode;
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
        isAnswered: false
    };
    
    TeensUtils.startSession('time-zone');
    generateProgressDots();
    showScreen('question-screen');
    loadQuestion();
}

function generateQuestions() {
    const questions = [];
    
    for (let i = 0; i < CONFIG.questionsPerGame; i++) {
        const shuffled = TeensUtils.shuffle([...CITIES]);
        const source = shuffled[0];
        const target = shuffled[1];
        
        // Random hour (0-23)
        const sourceHour = Math.floor(Math.random() * 24);
        const sourceMinute = Math.random() > 0.5 ? 0 : 30;
        
        // Calculate target time
        const diff = target.offset - source.offset;
        let targetHour = sourceHour + diff;
        let targetMinute = sourceMinute;
        
        // Handle half-hour offsets
        if (diff % 1 !== 0) {
            targetMinute = (targetMinute + 30) % 60;
            if (sourceMinute + 30 >= 60) targetHour++;
        }
        
        // Wrap around 24 hours
        while (targetHour < 0) targetHour += 24;
        while (targetHour >= 24) targetHour -= 24;
        
        targetHour = Math.floor(targetHour);
        
        const correctAnswer = formatTime(targetHour, targetMinute);
        
        // Generate wrong options
        const wrongOptions = [];
        while (wrongOptions.length < 3) {
            const wrongHour = Math.floor(Math.random() * 24);
            const wrongMinute = Math.random() > 0.5 ? 0 : 30;
            const wrongTime = formatTime(wrongHour, wrongMinute);
            if (wrongTime !== correctAnswer && !wrongOptions.includes(wrongTime)) {
                wrongOptions.push(wrongTime);
            }
        }
        
        questions.push({
            source,
            target,
            sourceTime: formatTime(sourceHour, sourceMinute),
            correctAnswer,
            options: TeensUtils.shuffle([correctAnswer, ...wrongOptions])
        });
    }
    
    return questions;
}

function formatTime(hour, minute) {
    return `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
}

function formatOffset(offset) {
    const sign = offset >= 0 ? '+' : '';
    if (offset % 1 !== 0) {
        return `UTC${sign}${Math.floor(offset)}:30`;
    }
    return `UTC${sign}${offset}`;
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
    
    document.getElementById('question-num').textContent = gameState.currentQuestion + 1;
    
    // Source city
    document.getElementById('source-flag').textContent = q.source.flag;
    document.getElementById('source-city').textContent = q.source.name;
    document.getElementById('source-tz').textContent = formatOffset(q.source.offset);
    document.getElementById('source-time').textContent = q.sourceTime;
    
    // Target city
    document.getElementById('target-flag').textContent = q.target.flag;
    document.getElementById('target-city').textContent = q.target.name;
    document.getElementById('target-tz').textContent = formatOffset(q.target.offset);
    
    document.getElementById('question-text').textContent = `What time is it in ${q.target.name}?`;
    
    // Options
    document.getElementById('options-grid').innerHTML = q.options.map(opt => `
        <button class="option-btn" onclick="selectAnswer('${opt}', this)">
            🕐 ${opt}
        </button>
    `).join('');
    
    // Update progress
    document.querySelectorAll('.progress-dot').forEach((dot, i) => {
        dot.classList.remove('active');
        if (i === gameState.currentQuestion) dot.classList.add('active');
    });
}

function selectAnswer(answer, btn) {
    if (gameState.isAnswered) return;
    gameState.isAnswered = true;
    
    const q = gameState.questions[gameState.currentQuestion];
    const isCorrect = answer === q.correctAnswer;
    const dots = document.querySelectorAll('.progress-dot');
    
    document.querySelectorAll('.option-btn').forEach(b => b.disabled = true);
    
    if (isCorrect) {
        btn.classList.add('correct');
        dots[gameState.currentQuestion].classList.add('correct');
        gameState.score += CONFIG.points.correct;
        gameState.correct++;
        document.getElementById('score').textContent = gameState.score;
        TeensSound.play('correct');
    } else {
        btn.classList.add('wrong');
        dots[gameState.currentQuestion].classList.add('wrong');
        
        document.querySelectorAll('.option-btn').forEach(b => {
            if (b.textContent.includes(q.correctAnswer)) b.classList.add('correct');
        });
        
        TeensSound.play('wrong');
    }
    
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
    document.getElementById('coins-amount').textContent = results.coinsEarned;
    
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
    window.location.href = '../index.html';
}
