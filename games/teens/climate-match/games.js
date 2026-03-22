/**
 * GEOTOPIA TEENS ZONE - Climate Match Game
 * Match climates to regions
 */

const CLIMATE_DATA = [
    {
        climate: "Desert",
        icon: "🏜️",
        description: "Hot and dry with minimal rainfall",
        regions: ["Sahara Desert", "Arabian Desert", "Gobi Desert", "Kalahari Desert", "Mojave Desert"],
        wrongRegions: ["Amazon Basin", "Siberia", "Alps", "Caribbean Islands"]
    },
    {
        climate: "Tropical Rainforest",
        icon: "🌴",
        description: "Hot, humid with heavy rainfall year-round",
        regions: ["Amazon Rainforest", "Congo Basin", "Southeast Asian Rainforests", "Central American Rainforests"],
        wrongRegions: ["Sahara Desert", "Arctic", "Mediterranean Coast", "Patagonia"]
    },
    {
        climate: "Polar/Tundra",
        icon: "❄️",
        description: "Extremely cold with permafrost",
        regions: ["Antarctica", "Arctic Region", "Northern Siberia", "Northern Canada", "Greenland"],
        wrongRegions: ["Amazon Basin", "Sahara Desert", "India", "Australia"]
    },
    {
        climate: "Temperate",
        icon: "🌳",
        description: "Moderate temperatures with four distinct seasons",
        regions: ["Western Europe", "Eastern United States", "Japan", "New Zealand", "Southern Australia"],
        wrongRegions: ["Sahara Desert", "Amazon Basin", "Antarctica", "Central Africa"]
    },
    {
        climate: "Mediterranean",
        icon: "🌊",
        description: "Mild wet winters and hot dry summers",
        regions: ["Southern Europe", "California", "Chile", "South Africa (Cape)", "Southern Australia"],
        wrongRegions: ["Amazon Basin", "Siberia", "Central Africa", "Antarctica"]
    },
    {
        climate: "Savanna",
        icon: "🦁",
        description: "Tropical grassland with wet and dry seasons",
        regions: ["East African Savanna", "Brazilian Cerrado", "Northern Australia", "Indian Subcontinent"],
        wrongRegions: ["Antarctica", "Amazon Rainforest", "Siberia", "Alps"]
    },
    {
        climate: "Monsoon",
        icon: "🌧️",
        description: "Seasonal heavy rainfall with dry periods",
        regions: ["India", "Southeast Asia", "Northern Australia", "West Africa"],
        wrongRegions: ["Sahara Desert", "Antarctica", "Mediterranean", "Amazon Basin"]
    },
    {
        climate: "Alpine/Mountain",
        icon: "🏔️",
        description: "Cold temperatures that decrease with altitude",
        regions: ["Himalayas", "Alps", "Andes", "Rocky Mountains", "African Highlands"],
        wrongRegions: ["Sahara Desert", "Amazon Basin", "Caribbean Islands", "Netherlands"]
    },
    {
        climate: "Subarctic/Taiga",
        icon: "🌲",
        description: "Cold winters with coniferous forests",
        regions: ["Northern Russia", "Canada", "Scandinavia", "Alaska"],
        wrongRegions: ["Amazon Basin", "Sahara Desert", "Caribbean", "Australia"]
    },
    {
        climate: "Steppe",
        icon: "🌾",
        description: "Semi-arid grassland with extreme temperatures",
        regions: ["Central Asia", "American Great Plains", "Patagonia", "South African Veld"],
        wrongRegions: ["Amazon Rainforest", "Antarctica", "Caribbean Islands", "Southeast Asia"]
    },
    {
        climate: "Oceanic",
        icon: "🌫️",
        description: "Mild and humid throughout the year",
        regions: ["British Isles", "Pacific Northwest", "New Zealand", "Chile", "Western Europe"],
        wrongRegions: ["Sahara Desert", "Central Asia", "Antarctica", "Amazon Basin"]
    },
    {
        climate: "Continental",
        icon: "🌡️",
        description: "Hot summers and very cold winters",
        regions: ["Central Russia", "Central North America", "Central Europe", "Northern China"],
        wrongRegions: ["Caribbean Islands", "Amazon Basin", "Mediterranean Coast", "Tropical Africa"]
    }
];

const CONFIG = {
    questionsPerGame: 12,
    points: { correct: 100 }
};

let gameState = {
    mode: 'climate-to-region',
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
    
    TeensUtils.startSession('climate-match');
    generateProgressDots();
    showScreen('question-screen');
    loadQuestion();
}

function generateQuestions() {
    const questions = [];
    const shuffledClimate = TeensUtils.shuffle([...CLIMATE_DATA]).slice(0, CONFIG.questionsPerGame);
    
    shuffledClimate.forEach(data => {
        if (gameState.mode === 'climate-to-region') {
            // Show climate, pick region
            const correctRegion = data.regions[Math.floor(Math.random() * data.regions.length)];
            const wrongOptions = TeensUtils.shuffle(data.wrongRegions).slice(0, 3);
            
            questions.push({
                display: {
                    icon: data.icon,
                    title: data.climate,
                    desc: data.description
                },
                questionText: "Which region has this climate?",
                correctAnswer: correctRegion,
                options: TeensUtils.shuffle([correctRegion, ...wrongOptions])
            });
        } else {
            // Show region, pick climate
            const correctRegion = data.regions[Math.floor(Math.random() * data.regions.length)];
            const wrongClimates = CLIMATE_DATA
                .filter(c => c.climate !== data.climate)
                .sort(() => Math.random() - 0.5)
                .slice(0, 3);
            
            questions.push({
                display: {
                    icon: "🌍",
                    title: correctRegion,
                    desc: "Select the correct climate type"
                },
                questionText: "What climate does this region have?",
                correctAnswer: data.climate,
                options: TeensUtils.shuffle([
                    data.climate,
                    ...wrongClimates.map(c => c.climate)
                ])
            });
        }
    });
    
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
    
    // Update question card
    document.getElementById('question-icon').textContent = q.display.icon;
    document.getElementById('question-title').textContent = q.display.title;
    document.getElementById('question-desc').textContent = q.display.desc;
    document.getElementById('question-text').textContent = q.questionText;
    
    // Generate options
    document.getElementById('options-grid').innerHTML = q.options.map(opt => {
        const climateData = CLIMATE_DATA.find(c => c.climate === opt);
        const icon = climateData ? climateData.icon : '🌍';
        
        return `
            <button class="option-btn" onclick="selectAnswer('${opt.replace(/'/g, "\\'")}', this)">
                <span class="option-icon">${icon}</span>
                <span>${opt}</span>
            </button>
        `;
    }).join('');
    
    // Update progress dots
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
        
        // Show correct answer
        document.querySelectorAll('.option-btn').forEach(b => {
            if (b.textContent.includes(q.correctAnswer)) {
                b.classList.add('correct');
            }
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
    
    const pct = (gameState.correct / CONFIG.questionsPerGame) * 100;
    document.getElementById('results-icon').textContent = pct >= 80 ? '🏆' : pct >= 50 ? '⭐' : '🌡️';
    document.getElementById('results-title').textContent = pct >= 80 ? 'Climate Expert!' : pct >= 50 ? 'Good Work!' : 'Keep Learning!';
    
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
