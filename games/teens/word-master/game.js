/**
 * GEOTOPIA TEENS ZONE - Word Master Game
 * Geography vocabulary learning
 */

const VOCABULARY = [
    { term: "ARCHIPELAGO", definition: "A group or chain of islands", fill: "An _____ is a group of islands." },
    { term: "PENINSULA", definition: "Land surrounded by water on three sides", fill: "A _____ is land with water on three sides." },
    { term: "PLATEAU", definition: "A flat, elevated area of land", fill: "A _____ is a flat area at high elevation." },
    { term: "FJORD", definition: "A narrow sea inlet between steep cliffs", fill: "A _____ is a narrow inlet between cliffs." },
    { term: "DELTA", definition: "Land formed at the mouth of a river", fill: "A _____ forms where a river meets the sea." },
    { term: "ISTHMUS", definition: "A narrow strip of land connecting two larger areas", fill: "An _____ connects two larger land masses." },
    { term: "ATOLL", definition: "A ring-shaped coral reef or island", fill: "An _____ is a circular coral formation." },
    { term: "SAVANNA", definition: "A grassy plain with few trees", fill: "A _____ is a tropical grassland." },
    { term: "TUNDRA", definition: "A treeless Arctic region with permafrost", fill: "The _____ is a cold, treeless biome." },
    { term: "TAIGA", definition: "A forest of coniferous trees in cold regions", fill: "The _____ is a northern conifer forest." },
    { term: "ESTUARY", definition: "Where a river meets the sea", fill: "An _____ is where fresh and salt water mix." },
    { term: "TRIBUTARY", definition: "A river that flows into a larger river", fill: "A _____ feeds into a main river." },
    { term: "BASIN", definition: "An area drained by a river and its tributaries", fill: "A river _____ collects water from streams." },
    { term: "CANYON", definition: "A deep valley with steep sides", fill: "A _____ is carved by a river over time." },
    { term: "GLACIER", definition: "A slow-moving mass of ice", fill: "A _____ is a river of ice." },
    { term: "MONSOON", definition: "A seasonal wind pattern bringing heavy rain", fill: "A _____ brings seasonal rains to Asia." },
    { term: "LATITUDE", definition: "Distance north or south of the equator", fill: "_____ measures position north or south." },
    { term: "LONGITUDE", definition: "Distance east or west of the Prime Meridian", fill: "_____ measures position east or west." },
    { term: "EQUATOR", definition: "An imaginary line at 0° latitude", fill: "The _____ divides Earth into hemispheres." },
    { term: "MERIDIAN", definition: "An imaginary line running north-south", fill: "A _____ connects the poles." },
    { term: "HEMISPHERE", definition: "Half of Earth's surface", fill: "The Northern _____ is above the equator." },
    { term: "TROPICS", definition: "The warm region near the equator", fill: "The _____ are the warmest climate zones." },
    { term: "PERMAFROST", definition: "Permanently frozen ground", fill: "_____ never thaws, even in summer." },
    { term: "EROSION", definition: "The wearing away of land by natural forces", fill: "_____ shapes landscapes over time." },
    { term: "VOLCANO", definition: "An opening where lava escapes from Earth", fill: "A _____ erupts molten rock." },
    { term: "EARTHQUAKE", definition: "Shaking caused by moving tectonic plates", fill: "An _____ occurs along fault lines." },
    { term: "TSUNAMI", definition: "A huge wave caused by underwater earthquakes", fill: "A _____ can devastate coastal areas." },
    { term: "REEF", definition: "A ridge of rock or coral near the water surface", fill: "A coral _____ teems with marine life." },
    { term: "DESERT", definition: "A dry region with very little rainfall", fill: "A _____ receives under 25cm of rain yearly." },
    { term: "OASIS", definition: "A fertile spot in a desert with water", fill: "An _____ provides water in the desert." }
];

const CONFIG = {
    questionsPerGame: 10,
    points: { correct: 100 }
};

let gameState = {
    mode: 'mcq',
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
        questions: TeensUtils.shuffle([...VOCABULARY]).slice(0, CONFIG.questionsPerGame),
        isAnswered: false
    };
    
    TeensUtils.startSession('word-master');
    generateProgressDots();
    showScreen('question-screen');
    loadQuestion();
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
    
    // Hide all input types
    document.getElementById('word-display').style.display = 'none';
    document.getElementById('definition-display').style.display = 'none';
    document.getElementById('options-grid').style.display = 'none';
    document.getElementById('typing-area').style.display = 'none';
    document.getElementById('fill-area').style.display = 'none';
    
    // Update progress dots
    document.querySelectorAll('.progress-dot').forEach((dot, i) => {
        dot.classList.remove('active');
        if (i === gameState.currentQuestion) dot.classList.add('active');
    });
    
    if (gameState.mode === 'mcq') {
        loadMCQ(q);
    } else if (gameState.mode === 'typing') {
        loadTyping(q);
    } else {
        loadFill(q);
    }
}

function loadMCQ(q) {
    document.getElementById('word-display').style.display = 'block';
    document.getElementById('options-grid').style.display = 'grid';
    
    document.getElementById('word-term').textContent = q.term;
    
    // Generate wrong options
    const wrongDefs = VOCABULARY
        .filter(v => v.term !== q.term)
        .sort(() => Math.random() - 0.5)
        .slice(0, 3)
        .map(v => v.definition);
    
    const options = TeensUtils.shuffle([q.definition, ...wrongDefs]);
    
    document.getElementById('options-grid').innerHTML = options.map(opt => `
        <button class="option-btn" onclick="selectMCQ('${opt.replace(/'/g, "\\'")}', this)">
            ${opt}
        </button>
    `).join('');
}

function loadTyping(q) {
    document.getElementById('definition-display').style.display = 'block';
    document.getElementById('typing-area').style.display = 'flex';
    
    document.getElementById('definition-text').textContent = q.definition;
    document.getElementById('typing-input').value = '';
    document.getElementById('typing-input').focus();
}

function loadFill(q) {
    document.getElementById('fill-area').style.display = 'block';
    
    document.getElementById('fill-sentence').innerHTML = q.fill.replace('_____', '<span class="blank">_____</span>');
    
    const wrongTerms = VOCABULARY
        .filter(v => v.term !== q.term)
        .sort(() => Math.random() - 0.5)
        .slice(0, 3)
        .map(v => v.term);
    
    const options = TeensUtils.shuffle([q.term, ...wrongTerms]);
    
    document.getElementById('fill-options').innerHTML = options.map(opt => `
        <button onclick="selectFill('${opt}', this)">${opt}</button>
    `).join('');
}

function selectMCQ(answer, btn) {
    if (gameState.isAnswered) return;
    processAnswer(answer === gameState.questions[gameState.currentQuestion].definition, btn);
}

function selectFill(answer, btn) {
    if (gameState.isAnswered) return;
    processAnswer(answer === gameState.questions[gameState.currentQuestion].term, btn);
}

function submitTyping() {
    if (gameState.isAnswered) return;
    
    const input = document.getElementById('typing-input').value.trim().toUpperCase();
    const correct = gameState.questions[gameState.currentQuestion].term;
    
    processAnswer(input === correct);
}

function processAnswer(isCorrect, btn = null) {
    gameState.isAnswered = true;
    
    const dots = document.querySelectorAll('.progress-dot');
    
    if (isCorrect) {
        if (btn) btn.classList.add('correct');
        dots[gameState.currentQuestion].classList.add('correct');
        gameState.score += CONFIG.points.correct;
        gameState.correct++;
        document.getElementById('score').textContent = gameState.score;
        TeensSound.play('correct');
    } else {
        if (btn) btn.classList.add('wrong');
        dots[gameState.currentQuestion].classList.add('wrong');
        TeensSound.play('wrong');
        
        // Show correct answer
        if (gameState.mode === 'typing') {
            showToast(`Correct: ${gameState.questions[gameState.currentQuestion].term}`, 'error');
        }
    }
    
    // Disable all buttons
    document.querySelectorAll('.option-btn, .fill-options button').forEach(b => b.disabled = true);
    
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
    document.getElementById('words-learned').textContent = gameState.correct;
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

function showToast(message, type = 'success') {
    const toast = document.getElementById('toast');
    toast.querySelector('.toast-icon').textContent = type === 'success' ? '✓' : '✗';
    toast.querySelector('.toast-message').textContent = message;
    toast.className = `toast ${type} show`;
    setTimeout(() => toast.classList.remove('show'), 3000);
}

// Enter key for typing mode
document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && gameState.mode === 'typing' && !gameState.isAnswered) {
        submitTyping();
    }
});
