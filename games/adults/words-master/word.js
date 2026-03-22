// WORD MASTER GAME ENGINE

let currentMode = 'typing';
let currentTerm = 0;
let score = 0;
let correctCount = 0;
let totalAttempts = 0;
let streak = 0;
let gameTerms = [];
let timerInterval;
let startTime;
let hintUsed = false;

function initGame() {
  // Select 20 random terms
  gameTerms = geoTerms
    .sort(() => Math.random() - 0.5)
    .slice(0, 20);
  
  startTime = Date.now();
  startTimer();
  loadTerm();
}

function startTimer() {
  timerInterval = setInterval(() => {
    const elapsed = Math.floor((Date.now() - startTime) / 1000);
    const mins = Math.floor(elapsed / 60);
    const secs = elapsed % 60;
    document.getElementById('timer').textContent = `${mins}:${secs.toString().padStart(2, '0')}`;
  }, 1000);
}

function changeMode(mode) {
  currentMode = mode;
  
  // Update button styles
  document.querySelectorAll('.mode-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  event.target.classList.add('active');
  
  // Show/hide modes
  if (mode === 'typing') {
    document.getElementById('typingMode').style.display = 'block';
    document.getElementById('matchMode').style.display = 'none';
  } else {
    document.getElementById('typingMode').style.display = 'none';
    document.getElementById('matchMode').style.display = 'block';
  }
  
  loadTerm();
}

function loadTerm() {
  hintUsed = false;
  const term = gameTerms[currentTerm];
  
  document.getElementById('progressText').textContent = `Term ${currentTerm + 1} of ${gameTerms.length}`;
  document.getElementById('definition').textContent = term.definition;
  document.getElementById('hintBox').classList.remove('show');
  document.getElementById('nextBtn').style.display = 'none';
  
  if (currentMode === 'typing') {
    const input = document.getElementById('termInput');
    input.value = '';
    input.className = 'term-input';
    input.disabled = false;
    input.focus();
  } else {
    loadMatchOptions();
  }
}

function loadMatchOptions() {
  const term = gameTerms[currentTerm];
  
  // Create 3 wrong options from other terms
  const wrongOptions = geoTerms
    .filter(t => t.term !== term.term)
    .sort(() => Math.random() - 0.5)
    .slice(0, 3)
    .map(t => t.term);
  
  // Combine with correct answer and shuffle
  const allOptions = [term.term, ...wrongOptions]
    .sort(() => Math.random() - 0.5);
  
  const grid = document.getElementById('optionsGrid');
  grid.innerHTML = '';
  
  allOptions.forEach(option => {
    const div = document.createElement('div');
    div.className = 'option-card';
    div.textContent = option;
    div.onclick = () => selectOption(div, option);
    grid.appendChild(div);
  });
}

function selectOption(element, selectedTerm) {
  const term = gameTerms[currentTerm];
  
  // Disable all options
  document.querySelectorAll('.option-card').forEach(opt => {
    opt.style.pointerEvents = 'none';
  });
  
  totalAttempts++;
  
  if (selectedTerm === term.term) {
    // Correct
    element.classList.add('correct');
    correctCount++;
    streak++;
    
    const coins = hintUsed ? 5 : (streak >= 5 ? 15 : 10);
    score += coins;
    showCoinPopup(coins);
    
    playSound('correct');
  } else {
    // Wrong
    element.classList.add('wrong');
    
    // Highlight correct answer
    document.querySelectorAll('.option-card').forEach(opt => {
      if (opt.textContent === term.term) {
        opt.classList.add('correct');
      }
    });
    
    streak = 0;
    playSound('wrong');
  }
  
  updateStats();
  document.getElementById('nextBtn').style.display = 'block';
}

function showHint() {
  const term = gameTerms[currentTerm];
  const hintBox = document.getElementById('hintBox');
  
  hintBox.textContent = `💡 Hint: ${term.hint}`;
  hintBox.classList.add('show');
  
  hintUsed = true;
}

function checkAnswer() {
  const input = document.getElementById('termInput');
  const userAnswer = input.value.trim().toLowerCase();
  const term = gameTerms[currentTerm];
  const correctAnswer = term.term.toLowerCase();
  
  input.disabled = true;
  totalAttempts++;
  
  // Check if answer is correct (allow minor spelling variations)
  const isCorrect = userAnswer === correctAnswer || 
                    levenshteinDistance(userAnswer, correctAnswer) <= 1;
  
  if (isCorrect) {
    input.classList.add('correct');
    correctCount++;
    streak++;
    
    const coins = hintUsed ? 5 : (streak >= 5 ? 20 : 10);
    score += coins;
    showCoinPopup(coins);
    
    playSound('correct');
  } else {
    input.classList.add('wrong');
    input.value = `Wrong! Correct: ${term.term}`;
    streak = 0;
    
    playSound('wrong');
  }
  
  updateStats();
  document.getElementById('nextBtn').style.display = 'block';
}

function levenshteinDistance(a, b) {
  const matrix = [];
  
  for (let i = 0; i <= b.length; i++) {
    matrix[i] = [i];
  }
  
  for (let j = 0; j <= a.length; j++) {
    matrix[0][j] = j;
  }
  
  for (let i = 1; i <= b.length; i++) {
    for (let j = 1; j <= a.length; j++) {
      if (b.charAt(i - 1) === a.charAt(j - 1)) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1,
          matrix[i][j - 1] + 1,
          matrix[i - 1][j] + 1
        );
      }
    }
  }
  
  return matrix[b.length][a.length];
}

function nextTerm() {
  currentTerm++;
  
  if (currentTerm < gameTerms.length) {
    loadTerm();
  } else {
    endGame();
  }
}

function updateStats() {
  document.getElementById('score').textContent = score;
  document.getElementById('correct').textContent = correctCount;
  document.getElementById('streak').textContent = streak;
}

function endGame() {
  clearInterval(timerInterval);
  
  const accuracy = Math.round((correctCount / totalAttempts) * 100);
  const elapsed = Math.floor((Date.now() - startTime) / 1000);
  const mins = Math.floor(elapsed / 60);
  const secs = elapsed % 60;
  
  // Save to global stats
  const globalStats = JSON.parse(localStorage.getItem('adultZoneStats')) || {
    totalCoins: 0,
    accuracy: 0,
    gamesPlayed: 0,
    streak: 0
  };
  
  globalStats.totalCoins += score;
  globalStats.gamesPlayed += 1;
  globalStats.accuracy = accuracy;
  
  localStorage.setItem('adultZoneStats', JSON.stringify(globalStats));
  
  // Show result
  document.querySelector('.word-card').innerHTML = `
    <div style="text-align: center; padding: 40px 0;">
      <h2 style="font-size: 42px; margin-bottom: 20px;">SESSION COMPLETE</h2>
      
      <div style="margin: 40px 0;">
        <div style="font-size: 72px; color: var(--gold); font-weight: 700; margin-bottom: 10px;">
          ${score}
        </div>
        <div style="font-size: 18px; color: var(--text-secondary);">TOTAL COINS</div>
      </div>
      
      <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; margin: 40px 0;">
        <div>
          <div style="font-size: 36px; color: var(--electric-blue); font-weight: 600;">${accuracy}%</div>
          <div style="font-size: 14px; color: var(--text-secondary); margin-top: 8px;">ACCURACY</div>
        </div>
        <div>
          <div style="font-size: 36px; color: var(--success-green); font-weight: 600;">${correctCount}/${totalAttempts}</div>
          <div style="font-size: 14px; color: var(--text-secondary); margin-top: 8px;">CORRECT</div>
        </div>
        <div>
          <div style="font-size: 36px; color: var(--gold); font-weight: 600;">${mins}:${secs.toString().padStart(2, '0')}</div>
          <div style="font-size: 14px; color: var(--text-secondary); margin-top: 8px;">TIME</div>
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

// Initialize game
initGame();

// Allow Enter key to submit
document.getElementById('termInput').addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    checkAnswer();
  }
});
