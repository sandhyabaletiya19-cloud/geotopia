// TRIVIA GAME ENGINE - ADULT MODE

let currentQuestion = 0;
let score = 0;
let correctAnswers = 0;
let totalAnswers = 0;
let streak = 0;
let timerInterval;
let startTime;
let usedQuestions = new Set();

// Shuffle and select 20 random questions
let gameQuestions = [];

function initGame() {
  // Get 20 unique random questions
  let available = triviaQuestions.filter(q => !usedQuestions.has(q.id));
  
  // If less than 20 available, reset pool
  if (available.length < 20) {
    usedQuestions.clear();
    available = triviaQuestions;
  }
  
  // Shuffle and take 20
  gameQuestions = available
    .sort(() => Math.random() - 0.5)
    .slice(0, 20);
  
  // Mark as used
  gameQuestions.forEach(q => usedQuestions.add(q.id));
  
  // Save to localStorage
  localStorage.setItem('triviaUsedQuestions', JSON.stringify([...usedQuestions]));
  
  startTime = Date.now();
  startTimer();
  loadQuestion();
}

function startTimer() {
  timerInterval = setInterval(() => {
    const elapsed = Math.floor((Date.now() - startTime) / 1000);
    const mins = Math.floor(elapsed / 60);
    const secs = elapsed % 60;
    document.getElementById('timer').textContent = `${mins}:${secs.toString().padStart(2, '0')}`;
  }, 1000);
}

function loadQuestion() {
  const q = gameQuestions[currentQuestion];
  
  document.getElementById('questionNumber').textContent = `Question ${currentQuestion + 1} of ${gameQuestions.length}`;
  document.getElementById('questionText').textContent = q.question;
  
  const optionsContainer = document.getElementById('optionsContainer');
  optionsContainer.innerHTML = '';
  
  q.options.forEach((option, index) => {
    const optionDiv = document.createElement('div');
    optionDiv.className = 'option';
    optionDiv.textContent = option;
    optionDiv.onclick = () => selectAnswer(index);
    optionDiv.dataset.index = index;
    optionsContainer.appendChild(optionDiv);
  });
  
  document.getElementById('explanation').classList.remove('show');
  document.getElementById('nextBtn').style.display = 'none';
}

function selectAnswer(selectedIndex) {
  const q = gameQuestions[currentQuestion];
  const options = document.querySelectorAll('.option');
  
  // Disable all options
  options.forEach(opt => {
    opt.style.pointerEvents = 'none';
  });
  
  totalAnswers++;
  
  if (selectedIndex === q.correct) {
    // Correct answer
    options[selectedIndex].classList.add('correct');
    correctAnswers++;
    streak++;
    
    // Award coins
    const coins = streak >= 10 ? 20 : (streak >= 5 ? 10 : 5);
    score += coins;
    showCoinPopup(coins);
    
    playSound('correct');
  } else {
    // Wrong answer
    options[selectedIndex].classList.add('wrong');
    options[q.correct].classList.add('correct');
    streak = 0;
    
    playSound('wrong');
  }
  
  // Update stats
  updateStats();
  
  // Show explanation
  const explanationDiv = document.getElementById('explanation');
  explanationDiv.textContent = q.explanation;
  explanationDiv.classList.add('show');
  
  // Show next button
  document.getElementById('nextBtn').style.display = 'block';
}

function nextQuestion() {
  currentQuestion++;
  
  if (currentQuestion < gameQuestions.length) {
    loadQuestion();
  } else {
    endGame();
  }
}

function updateStats() {
  document.getElementById('score').textContent = score;
  document.getElementById('streak').textContent = streak;
  
  const accuracy = totalAnswers > 0 ? Math.round((correctAnswers / totalAnswers) * 100) : 0;
  document.getElementById('accuracy').textContent = accuracy + '%';
}

function endGame() {
  clearInterval(timerInterval);
  
  // Save stats to global
  const globalStats = JSON.parse(localStorage.getItem('adultZoneStats')) || {
    totalCoins: 0,
    accuracy: 0,
    gamesPlayed: 0,
    streak: 0
  };
  
  globalStats.totalCoins += score;
  globalStats.gamesPlayed += 1;
  globalStats.accuracy = Math.round((correctAnswers / totalAnswers) * 100);
  
  localStorage.setItem('adultZoneStats', JSON.stringify(globalStats));
  
  // Show result screen
  showResultScreen();
}

function showResultScreen() {
  const accuracy = Math.round((correctAnswers / totalAnswers) * 100);
  const elapsed = Math.floor((Date.now() - startTime) / 1000);
  const mins = Math.floor(elapsed / 60);
  const secs = elapsed % 60;
  
  document.querySelector('.question-card').innerHTML = `
    <div style="text-align: center; padding: 40px 0;">
      <h2 style="font-size: 42px; margin-bottom: 20px;">GAME COMPLETE</h2>
      
      <div style="margin: 40px 0;">
        <div style="font-size: 72px; color: var(--gold); font-weight: 700; margin-bottom: 10px;">
          ${score}
        </div>
        <div style="font-size: 18px; color: var(--text-secondary);">TOTAL COINS EARNED</div>
      </div>
      
      <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; margin: 40px 0;">
        <div>
          <div style="font-size: 36px; color: var(--electric-blue); font-weight: 600;">${accuracy}%</div>
          <div style="font-size: 14px; color: var(--text-secondary); margin-top: 8px;">ACCURACY</div>
        </div>
        <div>
          <div style="font-size: 36px; color: var(--success-green); font-weight: 600;">${correctAnswers}/${totalAnswers}</div>
          <div style="font-size: 14px; color: var(--text-secondary); margin-top: 8px;">CORRECT</div>
        </div>
        <div>
          <div style="font-size: 36px; color: var(--gold); font-weight: 600;">${mins}:${secs.toString().padStart(2, '0')}</div>
          <div style="font-size: 14px; color: var(--text-secondary); margin-top: 8px;">TIME TAKEN</div>
        </div>
      </div>
      
      <div style="margin-top: 60px; display: flex; gap: 16px; justify-content: center;">
        <button class="btn" onclick="location.href='../../index.html'">← Back to Hub</button>
        <button class="btn btn-primary" onclick="location.reload()">Play Again</button>
      </div>
    </div>
  `;
}

function showCoinPopup(coins) {
  const popup = document.createElement('div');
  popup.className = 'coin-popup';
  popup.textContent = `+${coins} 🪙`;
  document.body.appendChild(popup);
  
  setTimeout(() => popup.remove(), 1000);
}

function playSound(type) {
  // Minimal sound implementation
  const context = new (window.AudioContext || window.webkitAudioContext)();
  const oscillator = context.createOscillator();
  const gainNode = context.createGain();
  
  oscillator.connect(gainNode);
  gainNode.connect(context.destination);
  
  if (type === 'correct') {
    oscillator.frequency.value = 800;
    gainNode.gain.setValueAtTime(0.1, context.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, context.currentTime + 0.3);
  } else {
    oscillator.frequency.value = 200;
    gainNode.gain.setValueAtTime(0.15, context.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, context.currentTime + 0.2);
  }
  
  oscillator.start(context.currentTime);
  oscillator.stop(context.currentTime + 0.3);
}

// Load used questions from localStorage
const savedUsed = localStorage.getItem('triviaUsedQuestions');
if (savedUsed) {
  usedQuestions = new Set(JSON.parse(savedUsed));
}

// Initialize game
initGame();
