// UPSC EXAM MODE ENGINE - BRUTAL BATTLEFIELD

let examQuestions = [];
let currentExamIndex = 0;
let examCorrect = 0;
let examWrong = 0;
let examSkipped = 0;
let selectedExamAnswer = null;
let questionTimer = 90;
let timerInterval = null;
let examStartTime = null;

function startExam() {
  // Select 100 random questions from all topics
  examQuestions = upscQuestions
    .sort(() => Math.random() - 0.5)
    .slice(0, 100);
  
  // Hide warning, show exam
  document.getElementById('examWarning').style.display = 'none';
  document.getElementById('examCard').style.display = 'block';
  
  examStartTime = Date.now();
  loadExamQuestion();
}

function loadExamQuestion() {
  const question = examQuestions[currentExamIndex];
  selectedExamAnswer = null;
  questionTimer = 90;
  
  // Update UI
  document.getElementById('currentQ').textContent = currentExamIndex + 1;
  document.getElementById('questionsLeft').textContent = 100 - (currentExamIndex + 1);
  document.getElementById('examQuestionText').textContent = question.question;
  
  // Load options
  const container = document.getElementById('examOptions');
  container.innerHTML = '';
  
  question.options.forEach((option, index) => {
    const optionDiv = document.createElement('div');
    optionDiv.className = 'option';
    optionDiv.innerHTML = `
      <div class="option-label">${String.fromCharCode(65 + index)}</div>
      <div>${option}</div>
    `;
    optionDiv.onclick = () => selectExamOption(index, optionDiv);
    container.appendChild(optionDiv);
  });
  
  // Start timer
  startQuestionTimer();
}

function startQuestionTimer() {
  const timerDisplay = document.getElementById('questionTimer');
  
  clearInterval(timerInterval);
  
  timerInterval = setInterval(() => {
    questionTimer--;
    timerDisplay.textContent = questionTimer;
    
    if (questionTimer <= 10) {
      timerDisplay.classList.add('warning');
    }
    
    if (questionTimer <= 0) {
      // Time's up - auto skip
      clearInterval(timerInterval);
      autoSkipQuestion();
    }
  }, 1000);
}

function selectExamOption(index, element) {
  // Remove previous selection
  document.querySelectorAll('.option').forEach(opt => {
    opt.classList.remove('selected');
  });
  
  // Set new selection
  element.classList.add('selected');
  selectedExamAnswer = index;
}

function submitExamAnswer() {
  if (selectedExamAnswer === null) {
    alert('Please select an answer!');
    return;
  }
  
  clearInterval(timerInterval);
  
  const question = examQuestions[currentExamIndex];
  const isCorrect = selectedExamAnswer === question.correct;
  
  if (isCorrect) {
    examCorrect++;
    playSound('correct');
  } else {
    examWrong++;
    playSound('wrong');
  }
  
  // Update live stats
  updateExamStats();
  
  // Move to next question
  currentExamIndex++;
  
  if (currentExamIndex < examQuestions.length) {
    setTimeout(() => {
      loadExamQuestion();
    }, 500);
  } else {
    endExam();
  }
}

function autoSkipQuestion() {
  examSkipped++;
  examWrong++; // Count as wrong
  
  updateExamStats();
  
  currentExamIndex++;
  
  if (currentExamIndex < examQuestions.length) {
    setTimeout(() => {
      loadExamQuestion();
    }, 500);
  } else {
    endExam();
  }
}

function updateExamStats() {
  const total = examCorrect + examWrong;
  const accuracy = total > 0 ? Math.round((examCorrect / total) * 100) : 0;
  
  document.getElementById('correctAnswers').textContent = examCorrect;
  document.getElementById('wrongAnswers').textContent = examWrong;
  document.getElementById('liveAccuracy').textContent = accuracy + '%';
}

function endExam() {
  clearInterval(timerInterval);
  
  const totalTime = Math.floor((Date.now() - examStartTime) / 1000);
  const mins = Math.floor(totalTime / 60);
  const secs = totalTime % 60;
  const accuracy = Math.round((examCorrect / 100) * 100);
  
  // Save to global UPSC stats
  const upscStats = JSON.parse(localStorage.getItem('upscStats')) || {
    totalQuestions: 0,
    correct: 0,
    examResults: []
  };
  
  upscStats.totalQuestions += 100;
  upscStats.correct += examCorrect;
  upscStats.globalAccuracy = Math.round((upscStats.correct / upscStats.totalQuestions) * 100);
  
  upscStats.examResults = upscStats.examResults || [];
  upscStats.examResults.push({
    date: new Date().toISOString(),
    correct: examCorrect,
    wrong: examWrong,
    skipped: examSkipped,
    accuracy: accuracy,
    timeInSeconds: totalTime
  });
  
  localStorage.setItem('upscStats', JSON.stringify(upscStats));
  
  // Check if qualifies for "8% Club"
  const is8PercentClub = accuracy >= 92;
  
  // Show result
  document.querySelector('.exam-question-card').innerHTML = `
    <div style="text-align: center; padding: 60px 20px;">
      <h2 style="font-size: 56px; margin-bottom: 30px; color: var(--blood-red);">EXAM COMPLETE</h2>
      
      ${is8PercentClub ? `
        <div style="margin: 40px 0; padding: 30px; background: linear-gradient(135deg, rgba(212, 175, 55, 0.1), rgba(0, 208, 255, 0.1)); border: 2px solid var(--gold); border-radius: 12px;">
          <div style="font-size: 48px; margin-bottom: 10px;">🏆</div>
          <div style="font-size: 28px; color: var(--gold); font-weight: 700; margin-bottom: 10px;">
            WELCOME TO THE 8% CLUB
          </div>
          <div style="font-size: 14px; color: var(--text-secondary);">
            Less than 8% of users ever reach 92%+ accuracy in Exam Mode.
          </div>
        </div>
      ` : ''}
      
      <div style="margin: 50px 0;">
        <div style="font-size: 96px; color: ${accuracy >= 70 ? 'var(--success-green)' : 'var(--blood-red)'}; font-weight: 700; margin-bottom: 10px;">
          ${accuracy}%
        </div>
        <div style="font-size: 18px; color: var(--text-secondary);">FINAL ACCURACY</div>
      </div>
      
      <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; margin: 50px 0; max-width: 800px; margin-left: auto; margin-right: auto;">
        <div>
          <div style="font-size: 40px; color: var(--success-green); font-weight: 600;">${examCorrect}</div>
          <div style="font-size: 14px; color: var(--text-secondary); margin-top: 8px;">CORRECT</div>
        </div>
        <div>
          <div style="font-size: 40px; color: var(--blood-red); font-weight: 600;">${examWrong}</div>
          <div style="font-size: 14px; color: var(--text-secondary); margin-top: 8px;">WRONG</div>
        </div>
        <div>
          <div style="font-size: 40px; color: var(--electric-blue); font-weight: 600;">${examSkipped}</div>
          <div style="font-size: 14px; color: var(--text-secondary); margin-top: 8px;">SKIPPED</div>
        </div>
        <div>
          <div style="font-size: 40px; color: var(--gold); font-weight: 600;">${mins}:${secs.toString().padStart(2, '0')}</div>
          <div style="font-size: 14px; color: var(--text-secondary); margin-top: 8px;">TIME</div>
        </div>
      </div>
      
      ${accuracy >= 85 ? '<div style="font-size: 22px; color: var(--success-green); margin: 30px 0;">🎯 UPSC-READY. You\'re a weapon.</div>' : ''}
      ${accuracy >= 70 && accuracy < 85 ? '<div style="font-size: 20px; color: var(--electric-blue); margin: 30px 0;">💪 Strong performance. Keep sharpening.</div>' : ''}
      ${accuracy < 70 ? '<div style="font-size: 20px; color: var(--blood-red); margin: 30px 0;">⚔️ The battlefield exposed your weaknesses. Train harder.</div>' : ''}
      
      <div style="margin-top: 70px; display: flex; gap: 20px; justify-content: center;">
        <button class="btn" onclick="location.href='index.html'">← Back to UPSC Hub</button>
        <button class="btn btn-primary" onclick="location.reload()">Retake Exam</button>
      </div>
    </div>
  `;
}

function playSound(type) {
  const context = new (window.AudioContext || window.webkitAudioContext)();
  const oscillator = context.createOscillator();
  const gainNode = context.createGain();
  
  oscillator.connect(gainNode);
  gainNode.connect(context.destination);
  
  if (type === 'correct') {
    oscillator.frequency.value = 880;
    gainNode.gain.setValueAtTime(0.08, context.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, context.currentTime + 0.2);
  } else {
    oscillator.frequency.value = 200;
    gainNode.gain.setValueAtTime(0.12, context.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, context.currentTime + 0.15);
  }
  
  oscillator.start(context.currentTime);
  oscillator.stop(context.currentTime + 0.2);
}
