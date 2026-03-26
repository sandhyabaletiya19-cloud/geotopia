/**
 * ================================================
 * EDUCATION BASE - Shared JavaScript Module
 * Common functionality for all education pages
 * ================================================
 */

const EducationBase = {
    
    // ================================
    // CONFIGURATION
    // ================================
    config: {
        animationThreshold: 0.1,
        animationDelay: 100,
        scrollOffset: 80,
        quizPassScore: 70
    },

    // ================================
    // STATE
    // ================================
    state: {
        currentQuizQuestion: 0,
        quizScore: 0,
        quizAnswers: [],
        expandedBranches: new Set(),
        activeSection: null,
        isDarkMode: false
    },

    // ================================
    // INITIALIZATION
    // ================================
    init(topicData = null) {
        this.topicData = topicData;
        this.setupNavigation();
        this.setupScrollEffects();
        this.setupAnimations();
        this.setupMindMap();
        this.setupQuiz();
        this.setupBackToTop();
        this.setupTableOfContents();
        this.setupProgressBar();
        this.setupKeyboardNavigation();
        this.setupPrintStyles();
        
        // Hide preloader if exists
        this.hidePreloader();
        
        console.log('📚 Education Base initialized');
    },

    // ================================
    // NAVIGATION
    // ================================
    setupNavigation() {
        const nav = document.getElementById('mainNav');
        if (!nav) return;

        // Scroll effect
        window.addEventListener('scroll', () => {
            nav.classList.toggle('scrolled', window.scrollY > 50);
        });

        // Mobile menu toggle
        const menuToggle = document.getElementById('menuToggle');
        const navLinks = document.querySelector('.nav-links');
        
        if (menuToggle && navLinks) {
            menuToggle.addEventListener('click', () => {
                navLinks.classList.toggle('active');
                menuToggle.classList.toggle('active');
            });
        }

        // Smooth scroll for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(anchor.getAttribute('href'));
                if (target) {
                    const offset = this.config.scrollOffset;
                    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    },

    // ================================
    // SCROLL EFFECTS
    // ================================
    setupScrollEffects() {
        // Active section highlighting
        const sections = document.querySelectorAll('.edu-section[id]');
        const navLinks = document.querySelectorAll('.toc-link, .nav-link[href^="#"]');

        const observerOptions = {
            root: null,
            rootMargin: '-20% 0px -70% 0px',
            threshold: 0
        };

        const sectionObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.state.activeSection = entry.target.id;
                    
                    // Update nav links
                    navLinks.forEach(link => {
                        link.classList.toggle('active', 
                            link.getAttribute('href') === `#${entry.target.id}`
                        );
                    });

                    // Update progress
                    this.updateProgress();
                }
            });
        }, observerOptions);

        sections.forEach(section => sectionObserver.observe(section));

        // Parallax effect for hero
        const hero = document.querySelector('.edu-hero');
        if (hero) {
            window.addEventListener('scroll', () => {
                const scrolled = window.pageYOffset;
                const heroImage = hero.querySelector('.hero-image');
                if (heroImage && scrolled < hero.offsetHeight) {
                    heroImage.style.transform = `translateY(${scrolled * 0.3}px)`;
                }
            });
        }
    },

    // ================================
    // ANIMATIONS
    // ================================
    setupAnimations() {
        const animatedElements = document.querySelectorAll('.animate-on-scroll');
        
        const animationObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    // Staggered animation
                    setTimeout(() => {
                        entry.target.classList.add('animated');
                    }, index * this.config.animationDelay);
                    
                    // Unobserve after animation
                    animationObserver.unobserve(entry.target);
                }
            });
        }, { threshold: this.config.animationThreshold });

        animatedElements.forEach(el => animationObserver.observe(el));
    },

    // ================================
    // MIND MAP FUNCTIONALITY
    // ================================
    setupMindMap() {
        const branches = document.querySelectorAll('.mindmap-branch');
        
        branches.forEach(branch => {
            const header = branch.querySelector('.branch-header');
            if (!header) return;

            header.addEventListener('click', () => {
                this.toggleBranch(branch);
            });

            // Keyboard accessibility
            header.setAttribute('tabindex', '0');
            header.setAttribute('role', 'button');
            header.setAttribute('aria-expanded', 'false');
            
            header.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    this.toggleBranch(branch);
                }
            });
        });

        // Expand All / Collapse All buttons
        const expandAllBtn = document.getElementById('expandAllBranches');
        const collapseAllBtn = document.getElementById('collapseAllBranches');

        if (expandAllBtn) {
            expandAllBtn.addEventListener('click', () => this.expandAllBranches());
        }
        if (collapseAllBtn) {
            collapseAllBtn.addEventListener('click', () => this.collapseAllBranches());
        }
    },

    toggleBranch(branch) {
        const isExpanded = branch.classList.contains('expanded');
        const header = branch.querySelector('.branch-header');
        const toggle = branch.querySelector('.branch-toggle');
        
        branch.classList.toggle('expanded');
        
        if (header) {
            header.setAttribute('aria-expanded', !isExpanded);
        }
        
        if (toggle) {
            toggle.textContent = isExpanded ? '+' : '−';
        }

        // Track state
        const branchId = branch.dataset.branch || branch.dataset.type;
        if (branchId) {
            if (isExpanded) {
                this.state.expandedBranches.delete(branchId);
            } else {
                this.state.expandedBranches.add(branchId);
            }
        }

        // Animate content
        const content = branch.querySelector('.branch-content');
        if (content) {
            if (!isExpanded) {
                content.style.maxHeight = content.scrollHeight + 'px';
            } else {
                content.style.maxHeight = '0';
            }
        }
    },

    expandAllBranches() {
        document.querySelectorAll('.mindmap-branch').forEach(branch => {
            if (!branch.classList.contains('expanded')) {
                this.toggleBranch(branch);
            }
        });
    },

    collapseAllBranches() {
        document.querySelectorAll('.mindmap-branch.expanded').forEach(branch => {
            this.toggleBranch(branch);
        });
    },

    // ================================
    // QUIZ FUNCTIONALITY
    // ================================
    setupQuiz() {
        const quizContainer = document.getElementById('quizContainer');
        if (!quizContainer) return;

        const startBtn = document.getElementById('startQuiz');
        const nextBtn = document.getElementById('nextQuestion');
        const prevBtn = document.getElementById('prevQuestion');
        const submitBtn = document.getElementById('submitQuiz');
        const retryBtn = document.getElementById('retryQuiz');

        if (startBtn) {
            startBtn.addEventListener('click', () => this.startQuiz());
        }
        if (nextBtn) {
            nextBtn.addEventListener('click', () => this.nextQuestion());
        }
        if (prevBtn) {
            prevBtn.addEventListener('click', () => this.prevQuestion());
        }
        if (submitBtn) {
            submitBtn.addEventListener('click', () => this.submitQuiz());
        }
        if (retryBtn) {
            retryBtn.addEventListener('click', () => this.retryQuiz());
        }
    },

    startQuiz() {
        this.state.currentQuizQuestion = 0;
        this.state.quizScore = 0;
        this.state.quizAnswers = [];

        const intro = document.getElementById('quizIntro');
        const questions = document.getElementById('quizQuestions');
        
        if (intro) intro.style.display = 'none';
        if (questions) questions.style.display = 'block';

        this.showQuestion(0);
    },

    showQuestion(index) {
        const questions = this.topicData?.sections?.formation?.interactiveElements?.quiz?.questions;
        if (!questions || !questions[index]) return;

        const question = questions[index];
        const container = document.getElementById('questionContainer');
        if (!container) return;

        container.innerHTML = `
            <div class="quiz-progress">
                <span>Question ${index + 1} of ${questions.length}</span>
                <div class="progress-bar-mini">
                    <div class="progress-fill" style="width: ${((index + 1) / questions.length) * 100}%"></div>
                </div>
            </div>
            <h4 class="quiz-question">${question.question}</h4>
            <div class="quiz-options">
                ${question.options.map((option, i) => `
                    <label class="quiz-option ${this.state.quizAnswers[index] === i ? 'selected' : ''}">
                        <input type="radio" name="quizAnswer" value="${i}" 
                            ${this.state.quizAnswers[index] === i ? 'checked' : ''}>
                        <span class="option-marker">${String.fromCharCode(65 + i)}</span>
                        <span class="option-text">${option}</span>
                    </label>
                `).join('')}
            </div>
        `;

        // Add event listeners to options
        container.querySelectorAll('.quiz-option').forEach(option => {
            option.addEventListener('click', () => {
                container.querySelectorAll('.quiz-option').forEach(o => o.classList.remove('selected'));
                option.classList.add('selected');
                const input = option.querySelector('input');
                if (input) {
                    this.state.quizAnswers[index] = parseInt(input.value);
                }
            });
        });

        // Update navigation buttons
        this.updateQuizNavigation(index, questions.length);
    },

    updateQuizNavigation(index, total) {
        const prevBtn = document.getElementById('prevQuestion');
        const nextBtn = document.getElementById('nextQuestion');
        const submitBtn = document.getElementById('submitQuiz');

        if (prevBtn) prevBtn.style.display = index > 0 ? 'inline-flex' : 'none';
        if (nextBtn) nextBtn.style.display = index < total - 1 ? 'inline-flex' : 'none';
        if (submitBtn) submitBtn.style.display = index === total - 1 ? 'inline-flex' : 'none';
    },

    nextQuestion() {
        const questions = this.topicData?.sections?.formation?.interactiveElements?.quiz?.questions;
        if (this.state.currentQuizQuestion < questions.length - 1) {
            this.state.currentQuizQuestion++;
            this.showQuestion(this.state.currentQuizQuestion);
        }
    },

    prevQuestion() {
        if (this.state.currentQuizQuestion > 0) {
            this.state.currentQuizQuestion--;
            this.showQuestion(this.state.currentQuizQuestion);
        }
    },

    submitQuiz() {
        const questions = this.topicData?.sections?.formation?.interactiveElements?.quiz?.questions;
        if (!questions) return;

        // Calculate score
        let correct = 0;
        questions.forEach((q, i) => {
            if (this.state.quizAnswers[i] === q.correct) {
                correct++;
            }
        });

        this.state.quizScore = Math.round((correct / questions.length) * 100);

        // Show results
        const questionsContainer = document.getElementById('quizQuestions');
        const resultsContainer = document.getElementById('quizResults');

        if (questionsContainer) questionsContainer.style.display = 'none';
        if (resultsContainer) {
            resultsContainer.style.display = 'block';
            this.showQuizResults(questions, correct);
        }
    },

    showQuizResults(questions, correct) {
        const container = document.getElementById('quizResultsContent');
        if (!container) return;

        const passed = this.state.quizScore >= this.config.quizPassScore;
        const emoji = passed ? '🎉' : '📚';
        const message = passed 
            ? 'Great job! You have a solid understanding!' 
            : 'Keep learning! Review the material and try again.';

        container.innerHTML = `
            <div class="quiz-score ${passed ? 'passed' : 'failed'}">
                <span class="score-emoji">${emoji}</span>
                <span class="score-value">${this.state.quizScore}%</span>
                <span class="score-text">${correct} of ${questions.length} correct</span>
                <p class="score-message">${message}</p>
            </div>
            <div class="quiz-review">
                <h4>📝 Review Your Answers</h4>
                ${questions.map((q, i) => {
                    const userAnswer = this.state.quizAnswers[i];
                    const isCorrect = userAnswer === q.correct;
                    return `
                        <div class="review-item ${isCorrect ? 'correct' : 'incorrect'}">
                            <div class="review-header">
                                <span class="review-icon">${isCorrect ? '✅' : '❌'}</span>
                                <span class="review-question">${q.question}</span>
                            </div>
                            <div class="review-answer">
                                <p><strong>Your answer:</strong> ${q.options[userAnswer] || 'Not answered'}</p>
                                ${!isCorrect ? `<p><strong>Correct answer:</strong> ${q.options[q.correct]}</p>` : ''}
                                <p class="review-explanation"><strong>Explanation:</strong> ${q.explanation}</p>
                            </div>
                        </div>
                    `;
                }).join('')}
            </div>
        `;
    },

    retryQuiz() {
        const resultsContainer = document.getElementById('quizResults');
        const intro = document.getElementById('quizIntro');

        if (resultsContainer) resultsContainer.style.display = 'none';
        if (intro) intro.style.display = 'block';

        this.state.quizAnswers = [];
        this.state.quizScore = 0;
    },

    // ================================
    // BACK TO TOP
    // ================================
    setupBackToTop() {
        const backToTop = document.getElementById('backToTop');
        if (!backToTop) return;

        window.addEventListener('scroll', () => {
            backToTop.classList.toggle('visible', window.scrollY > 500);
        });

        backToTop.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    },

    // ================================
    // TABLE OF CONTENTS
    // ================================
    setupTableOfContents() {
        const tocContainer = document.getElementById('tableOfContents');
        if (!tocContainer) return;

        const sections = document.querySelectorAll('.edu-section[id]');
        
        if (sections.length === 0) return;

        let tocHTML = '<nav class="toc-nav"><h4>📑 Contents</h4><ul>';
        
        sections.forEach((section, index) => {
            const header = section.querySelector('h2');
            const title = header ? header.textContent : `Section ${index + 1}`;
            const sectionNumber = section.querySelector('.section-number');
            const number = sectionNumber ? sectionNumber.textContent : '';
            
            tocHTML += `
                <li>
                    <a href="#${section.id}" class="toc-link">
                        <span class="toc-number">${number}</span>
                        <span class="toc-title">${title.replace(number, '').trim()}</span>
                    </a>
                </li>
            `;
        });

        tocHTML += '</ul></nav>';
        tocContainer.innerHTML = tocHTML;

        // Make TOC sticky on scroll
        const toc = tocContainer.querySelector('.toc-nav');
        if (toc) {
            const tocTop = tocContainer.offsetTop;
            window.addEventListener('scroll', () => {
                if (window.pageYOffset > tocTop - 100) {
                    toc.classList.add('sticky');
                } else {
                    toc.classList.remove('sticky');
                }
            });
        }
    },

    // ================================
    // PROGRESS BAR
    // ================================
    setupProgressBar() {
        const progressBar = document.getElementById('readingProgress');
        if (!progressBar) {
            // Create progress bar if not exists
            const bar = document.createElement('div');
            bar.id = 'readingProgress';
            bar.className = 'reading-progress';
            bar.innerHTML = '<div class="reading-progress-bar"></div>';
            document.body.prepend(bar);
        }

        window.addEventListener('scroll', () => this.updateProgress());
    },

    updateProgress() {
        const progressBar = document.querySelector('.reading-progress-bar');
        if (!progressBar) return;

        const scrollTop = window.pageYOffset;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = (scrollTop / docHeight) * 100;

        progressBar.style.width = `${Math.min(progress, 100)}%`;
    },

    // ================================
    // KEYBOARD NAVIGATION
    // ================================
    setupKeyboardNavigation() {
        document.addEventListener('keydown', (e) => {
            // Escape key closes modals
            if (e.key === 'Escape') {
                this.closeAllModals();
            }

            // Arrow keys for quiz
            if (document.querySelector('#quizQuestions[style*="block"]')) {
                if (e.key === 'ArrowRight') {
                    this.nextQuestion();
                } else if (e.key === 'ArrowLeft') {
                    this.prevQuestion();
                }
            }

            // Number keys for quiz options
            if (e.key >= '1' && e.key <= '4') {
                const options = document.querySelectorAll('.quiz-option');
                const index = parseInt(e.key) - 1;
                if (options[index]) {
                    options[index].click();
                }
            }
        });
    },

    closeAllModals() {
        document.querySelectorAll('.modal.active, [class*="modal"].active').forEach(modal => {
            modal.classList.remove('active');
        });
    },

    // ================================
    // PRINT STYLES
    // ================================
    setupPrintStyles() {
        // Expand all sections before printing
        window.addEventListener('beforeprint', () => {
            this.expandAllBranches();
            document.body.classList.add('printing');
        });

        window.addEventListener('afterprint', () => {
            document.body.classList.remove('printing');
        });

        // Print button
        const printBtn = document.getElementById('printPage');
        if (printBtn) {
            printBtn.addEventListener('click', () => window.print());
        }
    },

    // ================================
    // PRELOADER
    // ================================
    hidePreloader() {
        const preloader = document.getElementById('preloader');
        if (!preloader) return;

        setTimeout(() => {
            preloader.classList.add('hidden');
            setTimeout(() => {
                preloader.style.display = 'none';
            }, 500);
        }, 800);
    },

    // ================================
    // UTILITY FUNCTIONS
    // ================================
    utils: {
        // Format numbers with commas
        formatNumber(num) {
            return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        },

        // Debounce function
        debounce(func, wait) {
            let timeout;
            return function executedFunction(...args) {
                const later = () => {
                    clearTimeout(timeout);
                    func(...args);
                };
                clearTimeout(timeout);
                timeout = setTimeout(later, wait);
            };
        },

        // Throttle function
        throttle(func, limit) {
            let inThrottle;
            return function(...args) {
                if (!inThrottle) {
                    func.apply(this, args);
                    inThrottle = true;
                    setTimeout(() => inThrottle = false, limit);
                }
            };
        },

        // Copy to clipboard
        async copyToClipboard(text) {
            try {
                await navigator.clipboard.writeText(text);
                return true;
            } catch (err) {
                console.error('Failed to copy:', err);
                return false;
            }
        },

        // Share page
        async sharePage(title, text, url) {
            if (navigator.share) {
                try {
                    await navigator.share({ title, text, url });
                    return true;
                } catch (err) {
                    console.log('Share cancelled');
                    return false;
                }
            } else {
                // Fallback to copy URL
                return this.copyToClipboard(url);
            }
        },

        // Get reading time estimate
        getReadingTime(text) {
            const wordsPerMinute = 200;
            const words = text.trim().split(/\s+/).length;
            return Math.ceil(words / wordsPerMinute);
        },

        // Smooth scroll to element
        scrollToElement(selector, offset = 80) {
            const element = document.querySelector(selector);
            if (element) {
                const top = element.getBoundingClientRect().top + window.pageYOffset - offset;
                window.scrollTo({ top, behavior: 'smooth' });
            }
        }
    },

    // ================================
    // DATA RENDERING
    // ================================
    render: {
        // Render stats grid
        statsGrid(stats, containerId) {
            const container = document.getElementById(containerId);
            if (!container || !stats) return;

            container.innerHTML = stats.map(stat => `
                <div class="stat-card animate-on-scroll">
                    <div class="stat-icon">${stat.icon}</div>
                    <div class="stat-value">${stat.value}</div>
                    <div class="stat-label">${stat.label}</div>
                </div>
            `).join('');
        },

        // Render feature list
        featureList(features, containerId) {
            const container = document.getElementById(containerId);
            if (!container || !features) return;

            container.innerHTML = features.map(feature => `
                <div class="feature-item animate-on-scroll">
                    <span class="feature-icon">${feature.icon}</span>
                    <div class="feature-content">
                        <h4>${feature.label}</h4>
                        <p>${feature.text}</p>
                        ${feature.detail ? `<p class="feature-detail">${feature.detail}</p>` : ''}
                    </div>
                </div>
            `).join('');
        },

        // Render importance cards
        importanceCards(cards, containerId) {
            const container = document.getElementById(containerId);
            if (!container || !cards) return;

            container.innerHTML = cards.map(card => `
                <div class="importance-card animate-on-scroll">
                    <div class="importance-icon">${card.icon}</div>
                    <h3>${card.title}</h3>
                    <p>${card.description}</p>
                </div>
            `).join('');
        },

        // Render timeline
        timeline(stages, containerId) {
            const container = document.getElementById(containerId);
            if (!container || !stages) return;

            container.innerHTML = stages.map((stage, index) => `
                <div class="timeline-item animate-on-scroll">
                    <div class="timeline-content">
                        <span class="timeline-number">${index + 1}</span>
                        <h3 class="timeline-title">${stage.title}</h3>
                        <p class="timeline-subtitle">${stage.timeframe}</p>
                        <p class="timeline-text">${stage.description.join(' ')}</p>
                    </div>
                </div>
            `).join('');
        },

        // Render comparison table
        comparisonTable(data, containerId) {
            const container = document.getElementById(containerId);
            if (!container || !data) return;

            container.innerHTML = `
                <table class="comparison-table">
                    <thead>
                        <tr>
                            ${data.headers.map(h => `<th>${h}</th>`).join('')}
                        </tr>
                    </thead>
                    <tbody>
                        ${data.rows.map(row => `
                            <tr>
                                ${row.map(cell => `<td>${cell}</td>`).join('')}
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            `;
        },

        // Render UPSC section
        upscSection(upscData, containerId) {
            const container = document.getElementById(containerId);
            if (!container || !upscData) return;

            container.innerHTML = `
                <div class="upsc-grid">
                    <div class="upsc-card">
                        <h4>📝 Key Topics</h4>
                        <ul>
                            ${upscData.topics.slice(0, 8).map(t => `<li>${t}</li>`).join('')}
                        </ul>
                    </div>
                    <div class="upsc-card">
                        <h4>❓ Sample Questions</h4>
                        ${upscData.sampleQuestions.slice(0, 2).map(q => `
                            <div class="sample-question">
                                <p class="question-type">${q.type} ${q.year || ''}</p>
                                <p class="question-text">${q.question}</p>
                                <p class="question-answer">${q.answer}</p>
                            </div>
                        `).join('')}
                    </div>
                    <div class="upsc-card">
                        <h4>📰 Current Affairs</h4>
                        <ul>
                            ${upscData.currentAffairsLinks.slice(0, 6).map(c => `
                                <li>${c.topic}: ${c.event}</li>
                            `).join('')}
                        </ul>
                    </div>
                </div>
            `;
        }
    },

    // ================================
    // THEME MANAGEMENT
    // ================================
    themes: {
        apply(themeName) {
            document.body.className = document.body.className
                .replace(/\w+-theme/g, '')
                .trim();
            document.body.classList.add(`${themeName}-theme`);
            localStorage.setItem('educationTheme', themeName);
        },

        get() {
            return localStorage.getItem('educationTheme') || 'default';
        },

        toggle() {
            EducationBase.state.isDarkMode = !EducationBase.state.isDarkMode;
            document.body.classList.toggle('dark-mode', EducationBase.state.isDarkMode);
            localStorage.setItem('darkMode', EducationBase.state.isDarkMode);
        },

        init() {
            const savedDarkMode = localStorage.getItem('darkMode') === 'true';
            if (savedDarkMode) {
                EducationBase.state.isDarkMode = true;
                document.body.classList.add('dark-mode');
            }
        }
    },

    // ================================
    // ANALYTICS (placeholder)
    // ================================
    analytics: {
        trackSection(sectionId) {
            // Implement your analytics tracking here
            console.log(`📊 Section viewed: ${sectionId}`);
        },

        trackQuizCompletion(score) {
            console.log(`📊 Quiz completed: ${score}%`);
        },

        trackTimeSpent(section, seconds) {
            console.log(`📊 Time spent on ${section}: ${seconds}s`);
        }
    }
};

// ================================
// GLOBAL HELPER FUNCTIONS
// ================================

// Toggle branch (for onclick handlers in HTML)
function toggleBranch(headerElement) {
    const branch = headerElement.closest('.mindmap-branch');
    if (branch) {
        EducationBase.toggleBranch(branch);
    }
}

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
    // Check if topic-specific data exists
    const topicData = window.mountainsEducationData || 
                      window.lakesEducationData || 
                      window.riversEducationData ||
                      window.oceansEducationData ||
                      window.coralReefsEducationData ||
                      window.islandsEducationData ||
                      window.desertsEducationData ||
                      window.volcanoesEducationData ||
                      window.waterfallsEducationData ||
                      window.forestsEducationData ||
                      null;

    EducationBase.init(topicData);
    EducationBase.themes.init();
});

// Export for module systems
if (typeof module !== 'undefined' && module.exports) {
    module.exports = EducationBase;
}
