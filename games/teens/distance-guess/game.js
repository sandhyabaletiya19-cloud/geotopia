/**
 * GEOTOPIA TEENS ZONE - Distance Guess Game
 * Which country is closer?
 */

// Country coordinates (approximate capital city locations)
const COUNTRY_COORDS = {
    "France": { lat: 48.8566, lng: 2.3522, flag: "🇫🇷" },
    "Japan": { lat: 35.6762, lng: 139.6503, flag: "🇯🇵" },
    "Brazil": { lat: -15.7975, lng: -47.8919, flag: "🇧🇷" },
    "Australia": { lat: -35.2809, lng: 149.1300, flag: "🇦🇺" },
    "India": { lat: 28.6139, lng: 77.2090, flag: "🇮🇳" },
    "United States": { lat: 38.9072, lng: -77.0369, flag: "🇺🇸" },
    "South Africa": { lat: -25.7479, lng: 28.2293, flag: "🇿🇦" },
    "Russia": { lat: 55.7558, lng: 37.6173, flag: "🇷🇺" },
    "China": { lat: 39.9042, lng: 116.4074, flag: "🇨🇳" },
    "Germany": { lat: 52.5200, lng: 13.4050, flag: "🇩🇪" },
    "United Kingdom": { lat: 51.5074, lng: -0.1278, flag: "🇬🇧" },
    "Mexico": { lat: 19.4326, lng: -99.1332, flag: "🇲🇽" },
    "Egypt": { lat: 30.0444, lng: 31.2357, flag: "🇪🇬" },
    "Argentina": { lat: -34.6037, lng: -58.3816, flag: "🇦🇷" },
    "Canada": { lat: 45.4215, lng: -75.6972, flag: "🇨🇦" },
    "Italy": { lat: 41.9028, lng: 12.4964, flag: "🇮🇹" },
    "Spain": { lat: 40.4168, lng: -3.7038, flag: "🇪🇸" },
    "Turkey": { lat: 39.9334, lng: 32.8597, flag: "🇹🇷" },
    "Thailand": { lat: 13.7563, lng: 100.5018, flag: "🇹🇭" },
    "Nigeria": { lat: 9.0765, lng: 7.3986, flag: "🇳🇬" },
    "Indonesia": { lat: -6.2088, lng: 106.8456, flag: "🇮🇩" },
    "Poland": { lat: 52.2297, lng: 21.0122, flag: "🇵🇱" },
    "Kenya": { lat: -1.2921, lng: 36.8219, flag: "🇰🇪" },
    "Chile": { lat: -33.4489, lng: -70.6693, flag: "🇨🇱" },
    "Sweden": { lat: 59.3293, lng: 18.0686, flag: "🇸🇪" },
    "Morocco": { lat: 34.0209, lng: -6.8416, flag: "🇲🇦" },
    "New Zealand": { lat: -41.2865, lng: 174.7762, flag: "🇳🇿" },
    "Peru": { lat: -12.0464, lng: -77.0428, flag: "🇵🇪" },
    "Saudi Arabia": { lat: 24.7136, lng: 46.6753, flag: "🇸🇦" },
    "Vietnam": { lat: 21.0278, lng: 105.8342, flag: "🇻🇳" }
};

const CONFIG = {
    questionsPerGame: 10,
    points: {
        base: 100,
        streakMultiplier: 0.5
    }
};

let gameState = {
    currentQuestion: 0,
    score: 0,
    correct: 0,
    streak: 0,
    bestStreak: 0,
    questions: [],
    isAnswered: false
};

// Calculate distance between two points (Haversine formula)
function calculateDistance(lat1, lng1, lat2, lng2) {
    const R = 6371; // Earth's radius in km
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLng = (lng2 - lng1) * Math.PI / 180;
    const a = 
        Math.sin(dLat/2) * Math.sin(dLat/2) +
        Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
        Math.sin(dLng/2) * Math.sin(dLng/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    return Math.round(R * c);
}

document.addEventListener('DOMContentLoaded', initGame);

function initGame() {
    showScreen('intro-screen');
}

function showScreen(screenId) {
    ['intro-screen', 'how-to-play-screen', 'question-screen', 'results-screen'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.style.display = 'none';
    });
    document.getElementById(screenId).style.display = 'flex';
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
        currentQuestion: 0,
        score: 0,
        correct: 0,
        streak: 0,
        bestStreak: 0,
        questions: generateQuestions(),
        isAnswered: false
    };
    
    TeensUtils.startSession('distance-guess');
    generateProgressDots();
    showScreen('question-screen');
    loadQuestion();
}

function generateQuestions() {
    const questions = [];
    const countryNames = Object.keys(COUNTRY_COORDS);
    
    for (let i = 0; i < CONFIG.questionsPerGame; i++) {
        const shuffled = TeensUtils.shuffle([...countryNames]);
        const reference = shuffled[0];
        const optionA = shuffled[1];
        const optionB = shuffled[2];
        
        const refCoords = COUNTRY_COORDS[reference];
        const distA = calculateDistance(
            refCoords.lat, refCoords.lng,
            COUNTRY_COORDS[optionA].lat, COUNTRY_COORDS[optionA].lng
        );
        const distB = calculateDistance(
            refCoords.lat, refCoords.lng,
            COUNTRY_COORDS[optionB].lat, COUNTRY_COORDS[optionB].lng
        );
        
        questions.push({
            reference: {
                name: reference,
                flag: COUNTRY_COORDS[reference].flag
            },
            optionA: {
                name: optionA,
                flag: COUNTRY_COORDS[optionA].flag,
                distance: distA
            },
            optionB: {
                name: optionB,
                flag: COUNTRY_COORDS[optionB].flag,
                distance: distB
            },
            correctAnswer: distA < distB ? 'A' : 'B'
        });
    }
    
    return questions;
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
    
    // Reference country
    document.getElementById('reference-flag').textContent = q.reference.flag;
    document.getElementById('reference-name').textContent = q.reference.name;
    
    // Options
    document.getElementById('flag-a').textContent = q.optionA.flag;
    document.getElementById('name-a').textContent = q.optionA.name;
    document.getElementById('distance-a').textContent = '';
    
    document.getElementById('flag-b').textContent = q.optionB.flag;
    document.getElementById('name-b').textContent = q.optionB.name;
    document.getElementById('distance-b').textContent = '';
    
    // Reset option styles
    document.getElementById('option-a').className = 'distance-option';
    document.getElementById('option-b').className = 'distance-option';
    document.getElementById('option-a').disabled = false;
    document.getElementById('option-b').disabled = false;
    
    // Update progress dots
    document.querySelectorAll('.progress-dot').forEach((dot, i) => {
        dot.classList.remove('active');
        if (i === gameState.currentQuestion) dot.classList.add('active');
    });
}

function selectOption(choice) {
    if (gameState.isAnswered) return;
    gameState.isAnswered = true;
    
    const q = gameState.questions[gameState.currentQuestion];
    const isCorrect = choice === q.correctAnswer;
    const dots = document.querySelectorAll('.progress-dot');
    
    // Disable buttons
    document.getElementById('option-a').disabled = true;
    document.getElementById('option-b').disabled = true;
    
    // Show distances
    document.getElementById('distance-a').textContent = `${q.optionA.distance.toLocaleString()} km`;
    document.getElementById('distance-b').textContent = `${q.optionB.distance.toLocaleString()} km`;
    
    // Mark correct/wrong
    const correctOption = q.correctAnswer === 'A' ? 'option-a' : 'option-b';
    const wrongOption = q.correctAnswer === 'A' ? 'option-b' : 'option-a';
    
    document.getElementById(correctOption).classList.add('correct');
    
    if (isCorrect) {
        dots[gameState.currentQuestion].classList.add('correct');
        
        // Calculate score with streak bonus
        const basePoints = CONFIG.points.base;
        const streakBonus = Math.floor(basePoints * gameState.streak * CONFIG.points.streakMultiplier);
        gameState.score += basePoints + streakBonus;
        gameState.correct++;
        gameState.streak++;
        
        if (gameState.streak > gameState.bestStreak) {
            gameState.bestStreak = gameState.streak;
        }
        
        if (gameState.streak >= 2) {
            showCombo(gameState.streak);
        }
        
        TeensSound.play('correct');
        updateScoreDisplay();
    } else {
        document.getElementById(choice === 'A' ? 'option-a' : 'option-b').classList.add('wrong');
        dots[gameState.currentQuestion].classList.add('wrong');
        
        gameState.streak = 0;
        
        TeensSound.play('wrong');
        updateScoreDisplay();
    }
    
    setTimeout(nextQuestion, 2000);
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
        total: CONFIG.questionsPerGame,
        bestStreak: gameState.bestStreak
    });
    
    const results = TeensUtils.endSession();
    
    // Update results screen
    document.getElementById('final-score').textContent = gameState.score;
    document.getElementById('correct-count').textContent = `${gameState.correct}/${CONFIG.questionsPerGame}`;
    document.getElementById('accuracy-stat').textContent = `${Math.round((gameState.correct / CONFIG.questionsPerGame) * 100)}%`;
    document.getElementById('best-streak-stat').textContent = gameState.bestStreak;
    document.getElementById('coins-amount').textContent = results.coinsEarned;
    
    // Results title based on performance
    const pct = (gameState.correct / CONFIG.questionsPerGame) * 100;
    document.getElementById('results-icon').textContent = pct >= 80 ? '🏆' : pct >= 50 ? '⭐' : '📏';
    document.getElementById('results-title').textContent = pct >= 80 ? 'Geography Pro!' : pct >= 50 ? 'Good Navigator!' : 'Keep Exploring!';
    
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
