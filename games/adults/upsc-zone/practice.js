// UPSC PRACTICE MODE ENGINE

let selectedTopics = [];
let currentQuestionIndex = 0;
let sessionQuestions = [];
let sessionScore = 0;
let sessionCorrect = 0;
let sessionTotal = 0;
let currentStreak = 0;
let selectedAnswer = null;
let currentQuestion = null;

const topics = [
  { id: 'geomorphology', name: 'Geomorphology', count: 500 },
  { id: 'climatology', name: 'Climatology', count: 450 },
  { id: 'oceanography', name: 'Oceanography', count: 350 },
  { id: 'indian-geo', name: 'Indian Geography', count: 800 },
  { id: 'world-geo', name: 'World Geography', count: 600 },
  { id: 'resources', name: 'Resources & Agriculture', count: 400 },
  { id: 'economic-geo', name: 'Economic Geography', count: 350 },
  { id: 'mapping', name: 'Map Skills', count: 300 }
];

function initTopicSelector() {
  const grid = document.getElementById('topicGrid');
  grid.innerHTML = '';
  
  // Load saved topic performance
  const upscStats = JSON.parse(localStorage.getItem('upscStats')) || {};
  const topicPerformance = upscStats.topicPerformance || {};
  
  topics.forEach(topic => {
    const perf = topicPerformance[topic.id] || { correct: 0, total: 0 };
    const accuracy = perf.total > 0 ? Math.round((perf.correct / perf.total) * 100) : 0;
    
    const btn = document.createElement('div');
    btn.className = 'topic-btn';
    btn.onclick = () => toggleTopic(topic.id, btn);
    btn.innerHTML = `
      <div class="topic-name">${topic.name}</div>
      <div class="topic-stats">${topic.count} questions • ${accuracy}% accuracy</div>
    `;
    btn.dataset.topicId = topic.id;
    grid.appendChild(btn);
  });
}

function toggleTopic(topicId, element) {
  const index = selectedTopics.indexOf(topicId);
  
  if (index === -1) {
    selectedTopics.push(topicId);
    element.classList.add('selected');
  } else {
    selectedTopics.splice(index, 1);
    element.classList.remove('selected');
  }
}

function startPractice() {
  if (selectedTopics.length === 0) {
    alert('Please select at least one topic!');
    return;
  }
  
  // Filter questions by selected topics
  const availableQuestions = upscQuestions.filter(q => 
    selectedTopics.includes(q.topic)
  );
  
  if (availableQuestions.length === 0) {
    alert('No questions available for selected topics!');
    return;
  }
  
  // Get used questions
  const upscStats = JSON.parse(localStorage.getItem('upscStats')) || {};
  const usedQuestions = upscStats.usedQuestions || [];
  
  // Filter out used questions
  let unusedQuestions = availableQuestions.filter(q => 
    !usedQuestions.includes(q.id)
  );
  
  // If less than 20 unused, reset pool
  if (unusedQuestions.length < 20) {
    unusedQuestions = availableQuestions;
    upscStats.usedQuestions = [];
    localStorage.setItem('upscStats', JSON.stringify(upscStats));
  }
  
  // Select 20 random questions
  sessionQuestions = unusedQuestions
    .sort(() => Math.random() - 0.5)
    .slice(0, 20);
  
  // Hide topic selector, show question card
  document.getElementById('topicSelector').style.display = 'none';
  document.getElementById('questionCard').style.display = 'block';
  
  loadQuestion();
}

function loadQuestion() {
  currentQuestion = sessionQuestions[currentQuestionIndex];
  selectedAnswer = null;
  
  // Update UI
  document.getElementById('questionNumber').textContent = `Question ${currentQuestionIndex + 1}`;
  document.getElementById('topicLabel').textContent = getTopicName(currentQuestion.topic);
  document.getElementById('questionText').textContent = currentQuestion.question;
  document.getElementById('progressText').textContent = `Progress: ${currentQuestionIndex + 1}/20`;
  document.getElementById('progressBarFill').style.width = `${((currentQuestionIndex + 1) / 20) * 100}%`;
  
  // Check if bookmarked
  const upscStats = JSON.parse(localStorage.getItem('upscStats')) || {};
  const isBookmarked = (upscStats.bookmarkedQuestions || []).includes(currentQuestion.id);
  document.getElementById('bookmarkBtn').textContent = isBookmarked ? '★' : '☆';
  document.getElementById('bookmarkBtn').classList.toggle('bookmarked', isBookmarked);
  
  // Load options
  const container = document.getElementById('optionsContainer');
  container.innerHTML = '';
  
  currentQuestion.options.forEach((option, index) => {
    const optionDiv = document.createElement('div');
    optionDiv.className = 'option';
    optionDiv.innerHTML = `
      <div class="option-label">${String.fromCharCode(65 + index)}</div>
      <div>${option}</div>
    `;
    optionDiv.onclick = () => selectOption(index, optionDiv);
    container.appendChild(optionDiv);
  });
  
  // Reset explanation
  document.getElementById('explanationBox').classList.remove('show');
  document.getElementById('checkBtn').style.display = 'inline-block';
  document.getElementById('nextBtn').style.display = 'none';
}

function selectOption(index, element) {
  // Remove previous selection
  document.querySelectorAll('.option').forEach(opt => {
    opt.classList.remove('selected');
  });
  
  // Set new selection
  element.classList.add('selected');
  selectedAnswer = index;
}

function checkAnswer() {
  if (selectedAnswer === null) {
    alert('Please select an answer!');
    return;
  }
  
  const options = document.querySelectorAll('.option');
  const correctIndex = currentQuestion.correct;
  
  // Disable all options
  options.forEach(opt => opt.classList.add('disabled'));
  
  sessionTotal++;
  
  if (selectedAnswer === correctIndex) {
    // CORRECT
    options[selectedAnswer].classList.add('correct');
    sessionCorrect++;
    currentStreak++;
    
    const points = currentStreak >= 5 ? 15 : 10;
    sessionScore += points;
    
    playSound('correct');
    showCoinPopup(points);
    
  } else {
    // WRONG
    options[selectedAnswer].classList.add('wrong');
    options[correctIndex].classList.add('correct');
    currentStreak = 0;
    
    playSound('wrong');
  }
  
  // Update stats
  updateSessionStats();
  
  // Save to global stats
  const upscStats = JSON.parse(localStorage.getItem('upscStats')) || {
    totalQuestions: 0,
    correct: 0,
    topicPerformance: {},
    usedQuestions: []
  };
  
  upscStats.totalQuestions++;
  if (selectedAnswer === correctIndex) upscStats.correct++;
  
  // Track topic performance
  if (!upscStats.topicPerformance[currentQuestion.topic]) {
    upscStats.topicPerformance[currentQuestion.topic] = { correct: 0, total: 0 };
  }
  upscStats.topicPerformance[currentQuestion.topic].total++;
  if (selectedAnswer === correctIndex) {
    upscStats.topicPerformance[currentQuestion.topic].correct++;
  }
  
  // Mark as used
  if (!upscStats.usedQuestions.includes(currentQuestion.id)) {
    upscStats.usedQuestions.push(currentQuestion.id);
  }
  
  upscStats.globalAccuracy = Math.round((upscStats.correct / upscStats.totalQuestions) * 100);
  
  localStorage.setItem('upscStats', JSON.stringify(upscStats));
  
  // Show explanation
  const explanationBox = document.getElementById('explanationBox');
  document.getElementById('explanationText').textContent = currentQuestion.explanation;
  explanationBox.classList.add('show');
  
  // Show next button
  document.getElementById('checkBtn').style.display = 'none';
  document.getElementById('nextBtn').style.display = 'inline-block';
}

function nextQuestion() {
  currentQuestionIndex++;
  
  if (currentQuestionIndex < sessionQuestions.length) {
    loadQuestion();
  } else {
    endSession();
  }
}

function toggleBookmark() {
  const upscStats = JSON.parse(localStorage.getItem('upscStats')) || {
    bookmarkedQuestions: []
  };
  
  const index = upscStats.bookmarkedQuestions.indexOf(currentQuestion.id);
  const btn = document.getElementById('bookmarkBtn');
  
  if (index === -1) {
    upscStats.bookmarkedQuestions.push(currentQuestion.id);
    btn.textContent = '★';
    btn.classList.add('bookmarked');
  } else {
    upscStats.bookmarkedQuestions.splice(index, 1);
    btn.textContent = '☆';
    btn.classList.remove('bookmarked');
  }
  
  localStorage.setItem('upscStats', JSON.stringify(upscStats));
}

function updateSessionStats() {
  const accuracy = sessionTotal > 0 ? Math.round((sessionCorrect / sessionTotal) * 100) : 0;
  
  document.getElementById('sessionScore').textContent = sessionScore;
  document.getElementById('sessionAccuracy').textContent = accuracy + '%';
  document.getElementById('questionsAttempted').textContent = sessionTotal;
  document.getElementById('currentStreak').textContent = currentStreak;
}

function endSession() {
  const accuracy = Math.round((sessionCorrect / sessionTotal) * 100);
  
  document.querySelector('.question-card').innerHTML = `
    <div style="text-align: center; padding: 60px 20px;">
      <h2 style="font-size: 48px; margin-bottom: 30px; color: var(--gold);">PRACTICE SESSION COMPLETE</h2>
      
      <div style="margin: 50px 0;">
        <div style="font-size: 80px; color: var(--gold); font-weight: 700; margin-bottom: 10px;">
          ${sessionScore}
        </div>
        <div style="font-size: 18px; color: var(--text-secondary);">TOTAL POINTS</div>
      </div>
      
      <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 30px; margin: 50px 0; max-width: 700px; margin-left: auto; margin-right: auto;">
        <div>
          <div style="font-size: 48px; color: var(--electric-blue); font-weight: 600;">${accuracy}%</div>
          <div style="font-size: 14px; color: var(--text-secondary); margin-top: 8px;">ACCURACY</div>
        </div>
        <div>
          <div style="font-size: 48px; color: var(--success-green); font-weight: 600;">${sessionCorrect}/${sessionTotal}</div>
          <div style="font-size: 14px; color: var(--text-secondary); margin-top: 8px;">CORRECT</div>
        </div>
        <div>
          <div style="font-size: 48px; color: var(--gold); font-weight: 600;">${currentStreak}</div>
          <div style="font-size: 14px; color: var(--text-secondary); margin-top: 8px;">BEST STREAK</div>
        </div>
      </div>
      
      ${accuracy >= 80 ? '<div style="font-size: 22px; color: var(--success-green); margin: 30px 0;">🏆 OUTSTANDING! You\'re UPSC-ready.</div>' : ''}
      ${accuracy < 60 ? '<div style="font-size: 18px; color: var(--blood-red); margin: 30px 0;">⚠️ Focus on weak topics. Review explanations.</div>' : ''}
      
      <div style="margin-top: 70px; display: flex; gap: 20px; justify-content: center;">
        <button class="btn" onclick="location.href='index.html'">← Back to UPSC Hub</button>
        <button class="btn btn-primary" onclick="location.reload()">New Session</button>
      </div>
    </div>
  `;
}

function getTopicName(topicId) {
  const topic = topics.find(t => t.id === topicId);
  return topic ? topic.name : topicId;
}

function showCoinPopup(coins) {
  const popup = document.createElement('div');
  popup.className = 'coin-popup';
  popup.textContent = `+${coins} pts`;
  popup.style.color = 'var(--gold)';
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

// Initialize on load
initTopicSelector();
