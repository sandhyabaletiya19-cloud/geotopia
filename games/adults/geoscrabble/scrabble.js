// GEOSCRABBLE GAME ENGINE

let currentLetters = [];
let totalScore = 0;
let wordsFormed = 0;
let longestWord = 0;
let wordHistory = [];
let gameTime = 300; // 5 minutes
let timerInterval;

const vowels = ['A', 'E', 'I', 'O', 'U'];
const commonConsonants = ['R', 'S', 'T', 'L', 'N', 'D', 'C'];
const allConsonants = ['B', 'C', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'V', 'W', 'X', 'Y', 'Z'];

function initGame() {
  generateLetters();
  startTimer();
}

function generateLetters() {
  currentLetters = [];
  
  // Generate 12 letters with balanced distribution
  // 4 vowels
  for (let i = 0; i < 4; i++) {
    currentLetters.push(vowels[Math.floor(Math.random() * vowels.length)]);
  }
  
  // 5 common consonants
  for (let i = 0; i < 5; i++) {
    currentLetters.push(commonConsonants[Math.floor(Math.random() * commonConsonants.length)]);
  }
  
  // 3 any consonants
  for (let i = 0; i < 3; i++) {
    currentLetters.push(allConsonants[Math.floor(Math.random() * allConsonants.length)]);
  }
  
  // Shuffle
  currentLetters.sort(() => Math.random() - 0.5);
  
  renderLetters();
}

function renderLetters() {
  const pool = document.getElementById('lettersPool');
  pool.innerHTML = '';
  
  currentLetters.forEach((letter, index) => {
    const tile = document.createElement('div');
    tile.className = 'letter-tile';
    tile.innerHTML = `
      ${letter}
      <span class="letter-points">${letterPoints[letter]}</span>
    `;
    tile.dataset.index = index;
    pool.appendChild(tile);
  });
}

function shuffleLetters() {
  currentLetters.sort(() => Math.random() - 0.5);
  renderLetters();
  playSound('shuffle');
}

function newLetters() {
  if (confirm('Get new letters? This will cost you 10 points.')) {
    totalScore = Math.max(0, totalScore - 10);
    updateStats();
    generateLetters();
  }
}

function submitWord() {
  const input = document.getElementById('wordInput');
  const word = input.value.trim().toUpperCase();
  
  if (word.length < 3) {
    alert('Word must be at least 3 letters!');
    return;
  }
  
  // Check if letters are available
  const wordLetters = word.split('');
  const availableLetters = [...currentLetters];
  
  for (let letter of wordLetters) {
    const index = availableLetters.indexOf(letter);
    if (index === -1) {
      alert('You don\'t have all the letters for this word!');
      return;
    }
    availableLetters.splice(index, 1);
  }
  
  // Validate geography word
  const validation = isValidGeoWord(word);
  
  if (!validation.valid) {
    alert('Not a valid geography word! Try terms like RIVER, STRAIT, ARCTIC, etc.');
    playSound('wrong');
    return;
  }
  
  // Check if already used
  if (wordHistory.some(w => w.word === word)) {
    alert('You already used this word!');
    return;
  }
  
  // Calculate score
  const points = calculateWordScore(word, validation);
  
  // Bonus for long words
  let bonus = 0;
  if (word.length >= 7) bonus = 20;
  else if (word.length >= 6) bonus = 10;
  
  const finalPoints = points + bonus;
  
  // Update game state
  totalScore += finalPoints;
  wordsFormed++;
  if (word.length > longestWord) longestWord = word.length;
  
  wordHistory.unshift({
    word: word,
    points: finalPoints,
    type: validation.type,
    multiplier: validation.multiplier
  });
  
  // Update UI
  updateStats();
  addToHistory(word, finalPoints, validation);
  showCoinPopup(finalPoints);
  
  // Clear input
  input.value = '';
  
  playSound('correct');
  
  // Give option to get new letters
  if (confirm(`Great! You scored ${finalPoints} points!\n\nGet new letters? (Free this time)`)) {
    generateLetters();
  }
}

function addToHistory(word, points, validation) {
  const historyContainer = document.getElementById('wordHistory');
  
  if (wordHistory.length === 1) {
    historyContainer.innerHTML = '';
  }
  
  const item = document.createElement('div');
  item.className = 'history-item';
  item.innerHTML = `
    <div>
      <div class="history-word">${word}</div>
      <div class="history-type">
        ${validation.type.toUpperCase()} ${validation.multiplier > 1 ? `(${validation.multiplier}× MULTIPLIER!)` : ''}
      </div>
    </div>
    <div class="history-points">+${points}</div>
  `;
  
  historyContainer.insertBefore(item, historyContainer.firstChild);
}

function updateStats() {
  document.getElementById('totalScore').textContent = totalScore;
  document.getElementById('wordsFormed').textContent = wordsFormed;
  document.getElementById('longestWord').textContent = longestWord;
}

function startTimer() {
  timerInterval = setInterval(() => {
    gameTime--;
    
    const mins = Math.floor(gameTime / 60);
    const secs = gameTime % 60;
    const timerEl = document.getElementById('timer');
    timerEl.textContent = `${mins}:${secs.toString().padStart(2, '0')}`;
    
    if (gameTime <= 30) {
      timerEl.classList.add('danger');
    }
    
    if (gameTime <= 0) {
      endGame();
    }
  }, 1000);
}

function endGame() {
  clearInterval(timerInterval);
  
  // Save to global stats
  const globalStats = JSON.parse(localStorage.getItem('adultZoneStats')) || {
    totalCoins: 0,
    accuracy: 0,
    gamesPlayed: 0,
    streak: 0
  };
  
  globalStats.totalCoins += totalScore;
  globalStats.gamesPlayed += 1;
  
  localStorage.setItem('adultZoneStats', JSON.stringify(globalStats));
  
  alert(`TIME'S UP!\n\nFinal Score: ${totalScore}\nWords Formed: ${wordsFormed}\nLongest Word: ${longestWord} letters\n\nCoins earned: ${totalScore}`);
  
  if (confirm('Play again?')) {
    location.reload();
  } else {
    location.href = '../index.html';
  }
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
  } else if (type === 'shuffle') {
    oscillator.frequency.value = 400;
    gainNode.gain.setValueAtTime(0.08, context.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, context.currentTime + 0.2);
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
document.getElementById('wordInput').addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    submitWord();
  }
});
