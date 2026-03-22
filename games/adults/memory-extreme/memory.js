// MEMORY EXTREME - 12×12 GRID (144 CARDS)

let cards = [];
let flippedCards = [];
let matchedPairs = 0;
let moves = 0;
let timerInterval;
let startTime;
let canFlip = false;

function initGame() {
  // Generate 72 pairs (144 cards total)
  const cardPool = [...flagCards, ...capitalCards, ...landmarkCards];
  
  // Shuffle and take 72 unique items
  const selected = cardPool
    .sort(() => Math.random() - 0.5)
    .slice(0, 72);
  
  // Create pairs
  cards = [...selected, ...selected]
    .sort(() => Math.random() - 0.5);
  
  // Render grid
  const grid = document.getElementById('memoryGrid');
  grid.innerHTML = '';
  
  cards.forEach((card, index) => {
    const cardDiv = document.createElement('div');
    cardDiv.className = 'memory-card';
    cardDiv.innerHTML = `
      <div class="card-front">?</div>
      <div class="card-back">${card.icon}</div>
    `;
    cardDiv.dataset.index = index;
    cardDiv.dataset.value = card.value;
    cardDiv.onclick = () => flipCard(index);
    grid.appendChild(cardDiv);
  });
  
  // Show preview for 5 seconds
  showPreview();
}

function showPreview() {
  const overlay = document.getElementById('previewOverlay');
  const countdown = document.getElementById('countdown');
  
  // Flip all cards
  document.querySelectorAll('.memory-card').forEach(card => {
    card.classList.add('flipped');
  });
  
  let timeLeft = 5;
  const countInterval = setInterval(() => {
    timeLeft--;
    countdown.textContent = timeLeft;
    
    if (timeLeft <= 0) {
      clearInterval(countInterval);
      overlay.style.display = 'none';
      
      // Flip all cards back
      document.querySelectorAll('.memory-card').forEach(card => {
        card.classList.remove('flipped');
      });
      
      canFlip = true;
      startTimer();
    }
  }, 1000);
}

function flipCard(index) {
  if (!canFlip) return;
  if (flippedCards.length >= 2) return;
  
  const cardDiv = document.querySelectorAll('.memory-card')[index];
  if (cardDiv.classList.contains('flipped') || cardDiv.classList.contains('matched')) return;
  
  cardDiv.classList.add('flipped');
  flippedCards.push({ index, value: cardDiv.dataset.value });
  
  if (flippedCards.length === 2) {
    moves++;
    document.getElementById('moves').textContent = moves;
    
    canFlip = false;
    
    setTimeout(checkMatch, 800);
  }
}

function checkMatch() {
  const [card1, card2] = flippedCards;
  const cardDivs = document.querySelectorAll('.memory-card');
  
  if (card1.value === card2.value) {
    // Match!
    cardDivs[card1.index].classList.add('matched');
    cardDivs[card2.index].classList.add('matched');
    
    matchedPairs++;
    document.getElementById('matched').textContent = `${matchedPairs}/72`;
    
    playSound('correct');
    
    if (matchedPairs === 72) {
      endGame();
    }
  } else {
    // No match
    cardDivs[card1.index].classList.remove('flipped');
    cardDivs[card2.index].classList.remove('flipped');
    
    playSound('wrong');
  }
  
  flippedCards = [];
  canFlip = true;
}

function startTimer() {
  startTime = Date.now();
  timerInterval = setInterval(() => {
    const elapsed = Math.floor((Date.now() - startTime) / 1000);
    const mins = Math.floor(elapsed / 60);
    const secs = elapsed % 60;
    document.getElementById('timer').textContent = `${mins}:${secs.toString().padStart(2, '0')}`;
  }, 1000);
}

function endGame() {
  clearInterval(timerInterval);
  
  const elapsed = Math.floor((Date.now() - startTime) / 1000);
  const mins = Math.floor(elapsed / 60);
  const secs = elapsed % 60;
  
  // Calculate coins based on performance
  let coins = 50;
  if (elapsed < 180) coins = 100; // Under 3 minutes
  if (elapsed < 120) coins = 200; // Under 2 minutes
  
  // Save to global stats
  const globalStats = JSON.parse(localStorage.getItem('adultZoneStats')) || {
    totalCoins: 0,
    accuracy: 0,
    gamesPlayed: 0,
    streak: 0
  };
  
  globalStats.totalCoins += coins;
  globalStats.gamesPlayed += 1;
  
  localStorage.setItem('adultZoneStats', JSON.stringify(globalStats));
  
  alert(`🎉 COMPLETE!\n\nTime: ${mins}:${secs.toString().padStart(2, '0')}\nMoves: ${moves}\nCoins earned: ${coins}`);
}

function playSound(type) {
  // Same as trivia sound implementation
}

// Initialize
initGame();
