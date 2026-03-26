/* ==== FILE: quiz-engine.js ==== */
class QuizGameEngine {
    constructor(app, type) {
        this.app = app;
        this.type = type;
        this.questions = [];
        this.usedQuestions = [];
        this.currentQuestion = null;
        this.questionIndex = 0;
        this.totalQuestions = 10;
        this.correctAnswers = 0;
        this.canAnswer = false;
    }
    
    init() {
        this.loadQuestions();
        this.questionIndex = 0;
        this.correctAnswers = 0;
        this.usedQuestions = [];
        this.showQuestion();
    }
    
    loadQuestions() {
        if (this.type === 'geography') {
            this.questions = this.getGeographyQuestions();
        } else {
            this.questions = this.getWordQuestions();
        }
    }
    
    getGeographyQuestions() {
        if (typeof GamesData !== 'undefined' && GamesData.quiz) {
            return [...GamesData.quiz];
        }
        
        return [
            { question: "What is the capital of France?", options: ["London", "Paris", "Berlin", "Madrid"], correct: 1 },
            { question: "Which continent is Egypt located in?", options: ["Asia", "Europe", "Africa", "South America"], correct: 2 },
            { question: "What is the largest ocean on Earth?", options: ["Atlantic", "Indian", "Arctic", "Pacific"], correct: 3 },
            { question: "Which country has the largest population?", options: ["USA", "India", "China", "Russia"], correct: 2 },
            { question: "What is the capital of Japan?", options: ["Seoul", "Beijing", "Tokyo", "Bangkok"], correct: 2 },
            { question: "Which river is the longest in the world?", options: ["Amazon", "Nile", "Mississippi", "Yangtze"], correct: 1 },
            { question: "Mount Everest is located in which mountain range?", options: ["Alps", "Andes", "Rockies", "Himalayas"], correct: 3 },
            { question: "What is the smallest country in the world?", options: ["Monaco", "Vatican City", "San Marino", "Liechtenstein"], correct: 1 },
            { question: "Which country is known as the Land of the Rising Sun?", options: ["China", "South Korea", "Japan", "Thailand"], correct: 2 },
            { question: "What is the capital of Australia?", options: ["Sydney", "Melbourne", "Canberra", "Perth"], correct: 2 },
            { question: "Which desert is the largest in the world?", options: ["Sahara", "Arabian", "Gobi", "Antarctic"], correct: 3 },
            { question: "What is the capital of Canada?", options: ["Toronto", "Vancouver", "Montreal", "Ottawa"], correct: 3 },
            { question: "Which country has the most time zones?", options: ["Russia", "USA", "China", "France"], correct: 3 },
            { question: "What is the longest wall in the world?", options: ["Berlin Wall", "Hadrian's Wall", "Great Wall of China", "Western Wall"], correct: 2 },
            { question: "Which is the largest island in the world?", options: ["Australia", "Greenland", "New Guinea", "Borneo"], correct: 1 },
            { question: "What is the capital of Brazil?", options: ["Rio de Janeiro", "São Paulo", "Brasília", "Salvador"], correct: 2 },
            { question: "Which African country was formerly known as Abyssinia?", options: ["Kenya", "Ethiopia", "Sudan", "Somalia"], correct: 1 },
            { question: "What is the highest waterfall in the world?", options: ["Niagara Falls", "Victoria Falls", "Angel Falls", "Iguazu Falls"], correct: 2 },
            { question: "Which country is home to the Taj Mahal?", options: ["Pakistan", "India", "Bangladesh", "Nepal"], correct: 1 },
            { question: "What is the capital of South Korea?", options: ["Busan", "Seoul", "Incheon", "Daegu"], correct: 1 }
        ];
    }
    
    getWordQuestions() {
        if (typeof GamesData !== 'undefined' && GamesData.words) {
            return [...GamesData.words];
        }
        
        return [
            { question: "Extremely happy and excited", options: ["Melancholy", "Elated", "Somber", "Pensive"], correct: 1 },
            { question: "To make something seem less important", options: ["Exaggerate", "Belittle", "Amplify", "Magnify"], correct: 1 },
            { question: "A person who loves books", options: ["Bibliophile", "Audiophile", "Cinephile", "Technophile"], correct: 0 },
            { question: "Lasting for a very short time", options: ["Eternal", "Perpetual", "Ephemeral", "Permanent"], correct: 2 },
            { question: "Having mixed feelings about something", options: ["Certain", "Ambivalent", "Decisive", "Resolute"], correct: 1 },
            { question: "To officially forbid something", options: ["Allow", "Permit", "Prohibit", "Encourage"], correct: 2 },
            { question: "A state of confusion and disorder", options: ["Order", "Harmony", "Chaos", "Peace"], correct: 2 },
            { question: "Showing great attention to detail", options: ["Careless", "Meticulous", "Sloppy", "Negligent"], correct: 1 },
            { question: "To make someone less angry", options: ["Aggravate", "Irritate", "Placate", "Provoke"], correct: 2 },
            { question: "Seemingly having unlimited knowledge", options: ["Ignorant", "Omniscient", "Naive", "Unaware"], correct: 1 },
            { question: "To happen at the same time", options: ["Precede", "Follow", "Coincide", "Delay"], correct: 2 },
            { question: "Extremely careful and precise", options: ["Reckless", "Punctilious", "Careless", "Hasty"], correct: 1 },
            { question: "A feeling of deep sadness", options: ["Joy", "Euphoria", "Melancholy", "Bliss"], correct: 2 },
            { question: "To make a situation worse", options: ["Improve", "Ameliorate", "Exacerbate", "Enhance"], correct: 2 },
            { question: "Having a harmful effect", options: ["Beneficial", "Detrimental", "Advantageous", "Helpful"], correct: 1 },
            { question: "To formally give up a throne", options: ["Ascend", "Abdicate", "Inherit", "Claim"], correct: 1 },
            { question: "Extremely beautiful and delicate", options: ["Ugly", "Exquisite", "Plain", "Ordinary"], correct: 1 },
            { question: "To officially declare someone not guilty", options: ["Convict", "Acquit", "Condemn", "Punish"], correct: 1 },
            { question: "Present everywhere at once", options: ["Absent", "Ubiquitous", "Rare", "Scarce"], correct: 1 },
            { question: "Showing a lack of courage", options: ["Brave", "Valiant", "Cowardly", "Heroic"], correct: 2 }
        ];
    }
    
    getNextQuestion() {
        const available = this.questions.filter(q => !this.usedQuestions.includes(q));
        
        if (available.length === 0) {
            this.usedQuestions = [];
            return this.questions[Math.floor(Math.random() * this.questions.length)];
        }
        
        const question = available[Math.floor(Math.random() * available.length)];
        this.usedQuestions.push(question);
        return question;
    }
    
    showQuestion() {
        if (this.questionIndex >= this.totalQuestions) {
            this.endQuiz();
            return;
        }
        
        this.currentQuestion = this.getNextQuestion();
        this.canAnswer = true;
        
        const progress = ((this.questionIndex) / this.totalQuestions) * 100;
        
        let html = '<div class="quiz-container">';
        html += `<div class="quiz-progress"><div class="quiz-progress-bar" style="width: ${progress}%"></div></div>`;
        html += `<div style="text-align: center; margin: 10px 0; font-size: 0.9rem;">Question ${this.questionIndex + 1} of ${this.totalQuestions}</div>`;
        html += `<div class="quiz-question">${this.type === 'geography' ? '🌍 ' : '📚 '}${this.currentQuestion.question}</div>`;
        html += '<div class="quiz-options">';
        
        this.currentQuestion.options.forEach((option, index) => {
            html += `<div class="quiz-option" data-index="${index}">${option}</div>`;
        });
        
        html += '</div></div>';
        this.app.render(html);
        
        document.querySelectorAll('.quiz-option').forEach(option => {
            option.addEventListener('click', () => this.handleAnswer(parseInt(option.dataset.index)));
        });
    }
    
    handleAnswer(selectedIndex) {
        if (!this.canAnswer) return;
        this.canAnswer = false;
        
        const options = document.querySelectorAll('.quiz-option');
        const correctIndex = this.currentQuestion.correct;
        
        options.forEach((option, index) => {
            option.style.pointerEvents = 'none';
            if (index === correctIndex) {
                option.classList.add('correct');
            } else if (index === selectedIndex && selectedIndex !== correctIndex) {
                option.classList.add('incorrect');
            }
        });
        
        if (selectedIndex === correctIndex) {
            this.correctAnswers++;
            const basePoints = 100;
            const levelBonus = this.app.level * 10;
            this.app.addScore(basePoints + levelBonus);
        } else {
            this.app.loseLife();
            if (this.app.lives <= 0) return;
        }
        
        this.questionIndex++;
        
        setTimeout(() => {
            if (this.questionIndex >= this.totalQuestions) {
                this.endQuiz();
            } else {
                this.showQuestion();
            }
        }, 1500);
    }
    
    endQuiz() {
        const percentage = (this.correctAnswers / this.totalQuestions) * 100;
        
        if (percentage >= 70) {
            this.app.addScore(500);
            if (this.app.level < 5) {
                this.app.levelUp();
            } else {
                this.app.gameWon();
            }
        } else {
            this.app.showMessage(`${this.correctAnswers}/${this.totalQuestions} correct. Try harder!`, 'error');
            setTimeout(() => {
                this.init();
            }, 2000);
        }
    }
    
    onLevelUp() {
        this.totalQuestions = 10 + (this.app.level - 1) * 2;
        this.init();
    }
    
    onPause(isPaused) {
        this.canAnswer = !isPaused;
    }
    
    cleanup() {
        this.canAnswer = false;
    }
}
