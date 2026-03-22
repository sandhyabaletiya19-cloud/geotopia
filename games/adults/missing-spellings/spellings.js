// MISSING SPELLINGS GAME ENGINE - BRUTAL MODE

let currentWord = 0;
let score = 0;
let solvedCount = 0;
let streak = 0;
let attemptsLeft = 3;
let gameWords = [];
let timerInterval;
let startTime;
let hintsUsed = [];

function initGame() {
  // Shuffle and select 15 words
  gameWords = brutalWords
    .sort(() => Math.random() - 0.5)
    .slice(0, 15);
  
  startTime = Date.now();
  startTimer();
  loadWord();
}

function startTimer() {
  timerInterval = setInterval(() => {
    const elapsed = Math.floor((Date.now() - startTime) / 1000);
    const mins = Math.floor(elapsed / 60);
    const secs = elapsed % 60;
    document.getElementById('timer').textContent = `${mins}:${secs.toString().padStart(2, '0')}`;
  }, 1000);
}

function loadWord() {
  const word = gameWords[currentWord];
  
  // Reset state
  attemptsLeft = 3;
  hintsUsed = [];
  
  // Update UI
  document.getElementById('categoryTag').textContent = word.category;
  document.getElementById('difficultyBadge').textContent = word.difficulty;
  document.getElementById('puzzleWord').textContent = word.blanksPattern;
  document.getElementById('attemptsCount').textContent = attemptsLeft;
  document.getElementById('solved').textContent = `${solvedCount}/15`;
  
  // Reset input
  const input = document.getElementById('answerInput');
  input.value = '';
  input.className = 'answer-input';
  input.disabled = false;
  input.focus();
  
  // Reset hints
  document.querySelectorAll('.hint-btn').forEach(btn => {
    btn.classList.remove('used');
  });
  document.getElementById('hintDisplay').classList.remove('show');
}

function showHint(hintNumber) {
  const word = gameWords[currentWord];
  const hintBtn = document.getElementById(`hintBtn${hintNumber}`);
  const hintDisplay = document.getElementById('hintDisplay');
  
  if (hintsUsed.includes(hintNumber)) return;
  
  hintsUsed.push(hintNumber);
  hintBtn.classList.add('used');
  
  let hintContent = '';
  let penalty = 0;
  
  if (hintNumber === 1) {
    hintContent = `<strong>Definition:</strong> ${word.hints.definition}`;
    penalty = 5;
  } else if (hintNumber === 2) {
    hintContent = `<strong>Detail:</strong> ${word.hints.detail}`;
    penalty = 10;
  } else if (hintNumber === 3) {
    hintContent = `<strong>Visual Clue:</strong> ${word.hints.image}`;
    penalty = 15;
  }
  
  hintDisplay.innerHTML = hintContent;
  hintDisplay.classList.add('show');
  
  // Apply penalty
  score = Math.max(0, score - penalty);
  updateStats();
  
  showPenaltyPopup(-penalty);
}

function checkAnswer() {
  const input = document.getElementById('answerInput');
  const userAnswer = input.value.trim().toUpperCase();
  const word = gameWords[currentWord];
  
  if (!userAnswer) {
    alert('Please enter an answer!');
    return;
  }
  
  if (userAnswer === word.word) {
    // CORRECT!
    input.classList.add('correct');
    input.disabled = true;
    
    solvedCount++;
    streak++;
    
    // Calculate points
    let points = 50;
    
    // Bonus for no hints
    if (hintsUsed.length === 0) points += 30;
    
    // Bonus for streak
    if (streak >= 5) points += 20;
    if (streak >= 10) points += 40;
    
    // Bonus for attempts left
    points += (attemptsLeft - 1) * 10;
    
    score += points;
    
    updateStats();
    showCoinPopup(points);
    playSound('correct');
    
    setTimeout(() => {
      if (currentWord < gameWords.length - 1) {
        currentWord++;
        loadWord();
      } else {
        endGame();
      }
    }, 2000);
    
  } else {
    // WRONG
    attemptsLeft--;
    document.getElementById('attemptsCount').textContent = attemptsLeft;
    
    input.classList.add('wrong');
    playSound('wrong');
    
    setTimeout(() => {
      input.classList.remove('wrong');
    }, 400);
    
    if (attemptsLeft === 0) {
      // Out of attempts
      input.value = `FAILED! Answer: ${word.word}`;
      input.disabled = true;
      input.classList.add('wrong');
      
      streak = 0;
      score = Math.max(0, score - 25);
      
      updateStats();
      
      setTimeout(() => {
        if (currentWord < gameWords.length - 1) {
          currentWord++;
          loadWord();
        } else {
          endGame();
        }
      }, 3000);
    }
  }
}

function skipWord() {
  if (!confirm('Skip this word? You will lose 20 points and your streak will reset.')) {
    return;
  }
  
  const word = gameWords[currentWord];
  const input = document.getElementById('answerInput');
  
  input.value = `SKIPPED! Answer: ${word.word}`;
  input.disabled = true;
  input.classList.add('wrong');
  
  score = Math.max(0, score - 20);
  streak = 0;
  
  updateStats();
  showPenaltyPopup(-20);
  
  setTimeout(() => {
    if (currentWord < gameWords.length - 1) {
      currentWord++;
      loadWord();
    } else {
      endGame();
    }
  }, 2500);
}

function updateStats() {
  document.getElementById('score').textContent = score;
  document.getElementById('streak').textContent = streak;
  document.getElementById('solved').textContent = `${solvedCount}/15`;
}

function endGame() {
  clearInterval(timerInterval);
  
  const elapsed = Math.floor((Date.now() - startTime) / 1000);
  const mins = Math.floor(elapsed / 60);
  const secs = elapsed % 60;
  const accuracy = Math.round((solvedCount / gameWords.length) * 100);
  
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
  document.querySelector('.spelling-card').innerHTML = `
    <div style="text-align: center; padding: 60px 20px;">
      <h2 style="font-size: 48px; margin-bottom: 30px; color: var(--gold);">BRUTAL MODE COMPLETE</h2>
      
      <div style="margin: 50px 0;">
        <div style="font-size: 80px; color: #d4af37; font-weight: 700; margin-bottom: 10px;">
          ${score}
        </div>
        <div style="font-size: 18px; color: #999;">FINAL SCORE</div>
      </div>
      
      <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 30px; margin: 50px 0; max-width: 600px; margin-left: auto; margin-right: auto;">
        <div>
          <div style="font-size: 40px; color: #00d0ff; font-weight: 600;">${solvedCount}/${gameWords.length}</div>
          <div style="font-size: 14px; color: #999; margin-top: 8px;">SOLVED</div>
        </div>
        <div>
          <div style="font-size: 40px; color: ${accuracy >= 70 ? '#00ff88' : '#ff0033'}; font-weight: 600;">${accuracy}%</div>
          <div style="font-size: 14px; color: #999; margin-top: 8px;">ACCURACY</div>
        </div>
        <div>
          <div style="font-size: 40px; color: #d4af37; font-weight: 600;">${mins}:${secs.toString().padStart(2, '0')}</div>
          <div style="font-size: 14px; color: #999; margin-top: 8px;">TIME</div>
        </div>
      </div>
      
      ${accuracy >= 80 ? '<div style="font-size: 20px; color: #00ff88; margin: 30px 0;">🏆 EXCEPTIONAL PERFORMANCE!</div>' : ''}
      ${accuracy < 50 ? '<div style="font-size: 18px; color: #ff0033; margin: 30px 0;">Keep practicing. These are brutal for a reason.</div>' : ''}
      
      <div style="margin-top: 70px; display: flex; gap: 20px; justify-content: center;">
        <button class="btn btn-secondary" onclick="location.href='../index.html'">← Back to Hub</button>
        <button class="btn btn-primary" onclick="location.reload()">Challenge Again</button>
      </div>
    </div>
  `;
}

function showCoinPopup(coins) {
  const popup = document.createElement('div');
  popup.className = 'coin-popup';
  popup.textContent = `+${coins} 🪙`;
  popup.style.color = '#d4af37';
  document.body.appendChild(popup);
  
  setTimeout(() => popup.remove(), 1000);
}

function showPenaltyPopup(penalty) {
  const popup = document.createElement('div');
  popup.className = 'coin-popup';
  popup.textContent = `${penalty} 🪙`;
  popup.style.color = '#ff0033';
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
    oscillator.frequency.value = 880;
    gainNode.gain.setValueAtTime(0.12, context.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, context.currentTime + 0.4);
  } else {
    oscillator.frequency.value = 180;
    gainNode.gain.setValueAtTime(0.18, context.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, context.currentTime + 0.3);
  }
  
  oscillator.start(context.currentTime);
  oscillator.stop(context.currentTime + 0.4);
}

// Initialize game
initGame();

// Allow Enter key to submit
document.getElementById('answerInput').addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    checkAnswer();
  }
});
