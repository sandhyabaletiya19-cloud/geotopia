/**
 * ================================================
 * MOUNTAINS EDUCATION PAGE - Application Script
 * Renders mountainsData into interactive education page
 * ================================================
 */

const MountainsEducation = {
    
    // State
    state: {
        data: null,
        currentQuizQuestion: 0,
        quizAnswers: [],
        quizScore: 0,
        expandedSections: new Set(),
        activeFilter: { continent: 'all', type: 'all' }
    },

    // ================================
    // INITIALIZATION
    // ================================
    init() {
        // Load data
        if (typeof mountainsData !== 'undefined') {
            this.state.data = mountainsData;
            this.render();
            this.setupEventListeners();
            this.setupScrollEffects();
        } else {
            console.error('mountainsData not found!');
        }
    },

    // ================================
    // MAIN RENDER
    // ================================
    render() {
        const data = this.state.data;
        
        // Render Hero
        this.renderHero(data);
        
        // Render Definition Section
        this.renderDefinition(data.sections.definition);
        
        // Render Types Section
        this.renderTypes(data.sections.types);
        
        // Render Formation Section
        this.renderFormation(data.sections.formation);
        
        // Render Examples Section
        this.renderExamples(data.sections.examples);
        
        // Render UPSC Section
        this.renderUPSC(data.sections.examples.upscRelevance);
    },

    // ================================
    // HERO SECTION
    // ================================
    renderHero(data) {
        const hero = data.sections.definition.hero;
        
        document.getElementById('heroImage').src = hero.image;
        document.getElementById('heroTitle').textContent = `Understanding ${data.meta.name}`;
        document.getElementById('heroTagline').textContent = hero.tagline;
    },

    // ================================
    // DEFINITION SECTION
    // ================================
    renderDefinition(section) {
        // Introduction
        document.getElementById('definitionIntro').textContent = section.content.introduction;
        
        // Key Points
        const keyPointsGrid = document.getElementById('keyPointsGrid');
        keyPointsGrid.innerHTML = section.content.keyPoints.map(point => `
            <div class="key-point-card" data-expanded="false">
                <div class="key-point-header">
                    <span class="key-point-icon">${point.icon}</span>
                    <div class="key-point-info">
                        <h4>${point.label}</h4>
                        <p class="key-point-text">${point.text}</p>
                    </div>
                    <button class="expand-btn" aria-label="Expand">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M6 9l6 6 6-6"/>
                        </svg>
                    </button>
                </div>
                <div class="key-point-detail">
                    <p>${point.detail}</p>
                </div>
            </div>
        `).join('');
        
        // Comparison Table
        const comparison = section.content.comparison;
        document.getElementById('comparisonTitle').innerHTML = `📊 ${comparison.title}`;
        
        const table = document.getElementById('comparisonTable');
        table.innerHTML = `
            <thead>
                <tr>
                    <th>Feature</th>
                    <th>Mountain</th>
                    <th>Hill</th>
                    <th>Plateau</th>
                </tr>
            </thead>
            <tbody>
                ${comparison.features.map(row => `
                    <tr>
                        <td><strong>${row.feature}</strong></td>
                        <td>${row.mountain}</td>
                        <td>${row.hill}</td>
                        <td>${row.plateau}</td>
                    </tr>
                `).join('')}
            </tbody>
        `;
        
        // Fun Facts
        const funFactsGrid = document.getElementById('funFactsGrid');
        funFactsGrid.innerHTML = section.content.funFacts.map(fact => `
            <div class="fun-fact-item">
                <span class="fact-text">${fact}</span>
            </div>
        `).join('');
    },

    // ================================
    // TYPES SECTION
    // ================================
    renderTypes(section) {
        const typeBranches = document.getElementById('typeBranches');
        
        typeBranches.innerHTML = section.branches.map((branch, index) => `
            <div class="type-branch" data-type="${branch.id}" style="--branch-color: ${branch.color}">
                <div class="branch-connector"></div>
                
                <div class="branch-card">
                    <div class="branch-header" data-branch="${branch.id}">
                        <span class="branch-icon">${branch.icon}</span>
                        <div class="branch-info">
                            <h3 class="branch-name">${branch.name}</h3>
                            <span class="branch-count">${branch.examples.length} examples</span>
                        </div>
                        <button class="branch-expand-btn">
                            <span class="expand-icon">+</span>
                        </button>
                    </div>
                    
                    <div class="branch-content" id="branch-${branch.id}">
                        <!-- Definition -->
                        <div class="branch-section">
                            <h4>📖 Definition</h4>
                            <p>${branch.definition}</p>
                        </div>
                        
                        <!-- Formation Steps -->
                        <div class="branch-section">
                            <h4>⚙️ ${branch.formation.title}</h4>
                            <div class="formation-steps">
                                ${branch.formation.steps.map(step => `
                                    <div class="formation-step">
                                        <span class="step-icon">${step.icon}</span>
                                        <span class="step-number">${step.step}</span>
                                        <span class="step-text">${step.text}</span>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                        
                        <!-- Characteristics -->
                        <div class="branch-section">
                            <h4>🔍 Characteristics</h4>
                            <ul class="characteristics-list">
                                ${branch.characteristics.map(char => `
                                    <li>${char}</li>
                                `).join('')}
                            </ul>
                        </div>
                        
                        <!-- Examples Preview -->
                        <div class="branch-section">
                            <h4>🌍 Notable Examples</h4>
                            <div class="examples-preview">
                                ${branch.examples.slice(0, 4).map(ex => `
                                    <div class="example-chip">
                                        <span class="example-name">${ex.name}</span>
                                        <span class="example-location">${ex.location.split('(')[0]}</span>
                                    </div>
                                `).join('')}
                                ${branch.examples.length > 4 ? `
                                    <button class="view-all-btn" data-type="${branch.id}">
                                        +${branch.examples.length - 4} more
                                    </button>
                                ` : ''}
                            </div>
                        </div>
                        
                        <!-- View Full Details Button -->
                        <button class="btn btn-primary view-details-btn" data-type="${branch.id}">
                            View Full Details
                        </button>
                    </div>
                </div>
            </div>
        `).join('');
        
        // Types Comparison Table
        const typesComparison = section.comparisonTable;
        const typesTable = document.getElementById('typesComparisonTable');
        
        typesTable.innerHTML = `
            <thead>
                <tr>
                    ${typesComparison.headers.map(h => `<th>${h}</th>`).join('')}
                </tr>
            </thead>
            <tbody>
                ${typesComparison.rows.map(row => `
                    <tr>
                        ${row.map((cell, i) => `<td>${i === 0 ? `<strong>${cell}</strong>` : cell}</td>`).join('')}
                    </tr>
                `).join('')}
            </tbody>
        `;
    },

    // ================================
    // FORMATION SECTION
    // ================================
    renderFormation(section) {
        // Introduction
        document.getElementById('formationIntro').textContent = section.introduction;
        
        // Timeline
        const timeline = document.getElementById('formationTimeline');
        timeline.innerHTML = section.stages.map((stage, index) => `
            <div class="timeline-item" data-stage="${stage.stage}">
                <div class="timeline-marker">
                    <span class="marker-number">${stage.stage}</span>
                </div>
                
                <div class="timeline-card">
                    <div class="timeline-header" data-stage="${stage.stage}">
                        <div class="timeline-meta">
                            <span class="timeline-timeframe">${stage.timeframe}</span>
                        </div>
                        <h3 class="timeline-title">${stage.title}</h3>
                        <button class="timeline-expand-btn">
                            <span class="expand-icon">+</span>
                        </button>
                    </div>
                    
                    <div class="timeline-content" id="timeline-${stage.stage}">
                        <div class="timeline-image">
                            <img src="${stage.image}" alt="${stage.title}" loading="lazy">
                        </div>
                        
                        <div class="timeline-description">
                            <ul>
                                ${stage.description.map(desc => `<li>${desc}</li>`).join('')}
                            </ul>
                        </div>
                        
                        <div class="timeline-features">
                            <h4>🔑 Key Features</h4>
                            <div class="features-list">
                                ${stage.keyFeatures.map(f => `
                                    <span class="feature-tag">${f}</span>
                                `).join('')}
                            </div>
                        </div>
                        
                        <div class="timeline-evidence">
                            <h4>🔬 Evidence</h4>
                            <ul>
                                ${stage.evidence.map(e => `<li>${e}</li>`).join('')}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        `).join('');
        
        // Terminology
        const terminologyGrid = document.getElementById('terminologyGrid');
        terminologyGrid.innerHTML = section.terminology.terms.map(term => `
            <div class="term-card" data-expanded="false">
                <div class="term-header">
                    <h4 class="term-name">${term.term}</h4>
                    <span class="term-pronunciation">${term.pronunciation}</span>
                    <button class="term-expand-btn">+</button>
                </div>
                <div class="term-content">
                    <p class="term-definition">${term.definition}</p>
                    <div class="term-example">
                        <strong>Example:</strong> ${term.example}
                    </div>
                    <div class="term-related">
                        <strong>Related:</strong>
                        ${term.relatedTerms.map(t => `<span class="related-tag">${t}</span>`).join('')}
                    </div>
                </div>
            </div>
        `).join('');
        
        // Quiz
        this.setupQuiz(section.interactiveElements.quiz);
    },

    // ================================
    // QUIZ FUNCTIONALITY
    // ================================
    setupQuiz(quizData) {
        this.quizData = quizData.questions;
        document.getElementById('quizQuestionCount').textContent = this.quizData.length;
    },

    startQuiz() {
        this.state.currentQuizQuestion = 0;
        this.state.quizAnswers = [];
        this.state.quizScore = 0;
        
        document.getElementById('quizStart').style.display = 'none';
        document.getElementById('quizQuestions').style.display = 'block';
        document.getElementById('quizResults').style.display = 'none';
        
        this.renderQuestion();
    },

    renderQuestion() {
        const question = this.quizData[this.state.currentQuizQuestion];
        const total = this.quizData.length;
        const current = this.state.currentQuizQuestion + 1;
        
        // Update progress
        document.getElementById('quizProgressFill').style.width = `${(current / total) * 100}%`;
        document.getElementById('quizProgressText').textContent = `Question ${current} of ${total}`;
        
        // Render question
        const questionCard = document.getElementById('questionCard');
        questionCard.innerHTML = `
            <h3 class="question-text">${question.question}</h3>
            <div class="options-list">
                ${question.options.map((option, i) => `
                    <label class="option-item ${this.state.quizAnswers[this.state.currentQuizQuestion] === i ? 'selected' : ''}">
                        <input type="radio" name="quizOption" value="${i}" 
                            ${this.state.quizAnswers[this.state.currentQuizQuestion] === i ? 'checked' : ''}>
                        <span class="option-marker">${String.fromCharCode(65 + i)}</span>
                        <span class="option-text">${option}</span>
                    </label>
                `).join('')}
            </div>
        `;
        
        // Update nav buttons
        document.getElementById('prevQuestionBtn').disabled = current === 1;
        document.getElementById('nextQuestionBtn').style.display = current === total ? 'none' : 'inline-flex';
        document.getElementById('submitQuizBtn').style.display = current === total ? 'inline-flex' : 'none';
    },

    selectAnswer(index) {
        this.state.quizAnswers[this.state.currentQuizQuestion] = index;
        this.renderQuestion();
    },

    nextQuestion() {
        if (this.state.currentQuizQuestion < this.quizData.length - 1) {
            this.state.currentQuizQuestion++;
            this.renderQuestion();
        }
    },

    prevQuestion() {
        if (this.state.currentQuizQuestion > 0) {
            this.state.currentQuizQuestion--;
            this.renderQuestion();
        }
    },

    submitQuiz() {
        // Calculate score
        let correct = 0;
        this.quizData.forEach((q, i) => {
            if (this.state.quizAnswers[i] === q.correct) {
                correct++;
            }
        });
        
        this.state.quizScore = Math.round((correct / this.quizData.length) * 100);
        
        // Show results
        document.getElementById('quizQuestions').style.display = 'none';
        document.getElementById('quizResults').style.display = 'block';
        
        const passed = this.state.quizScore >= 70;
        
        document.getElementById('quizResults').innerHTML = `
            <div class="results-card ${passed ? 'passed' : 'failed'}">
                <div class="results-score">
                    <span class="score-emoji">${passed ? '🎉' : '📚'}</span>
                    <span class="score-value">${this.state.quizScore}%</span>
                    <span class="score-text">${correct} of ${this.quizData.length} correct</span>
                </div>
                
                <p class="results-message">
                    ${passed 
                        ? 'Excellent! You have a solid understanding of mountain formation!' 
                        : 'Keep learning! Review the material and try again.'}
                </p>
                
                <div class="results-review">
                    <h4>📝 Review Answers</h4>
                    ${this.quizData.map((q, i) => {
                        const isCorrect = this.state.quizAnswers[i] === q.correct;
                        return `
                            <div class="review-item ${isCorrect ? 'correct' : 'incorrect'}">
                                <div class="review-header">
                                    <span class="review-icon">${isCorrect ? '✅' : '❌'}</span>
                                    <span class="review-question">${q.question}</span>
                                </div>
                                <div class="review-details">
                                    <p><strong>Your answer:</strong> ${q.options[this.state.quizAnswers[i]] || 'Not answered'}</p>
                                    ${!isCorrect ? `<p><strong>Correct answer:</strong> ${q.options[q.correct]}</p>` : ''}
                                    <p class="review-explanation"><strong>Explanation:</strong> ${q.explanation}</p>
                                </div>
                            </div>
                        `;
                    }).join('')}
                </div>
                
                <button class="btn btn-primary" onclick="MountainsEducation.retryQuiz()">
                    Try Again
                </button>
            </div>
        `;
    },

    retryQuiz() {
        document.getElementById('quizResults').style.display = 'none';
        document.getElementById('quizStart').style.display = 'flex';
    },

    // ================================
    // EXAMPLES SECTION
    // ================================
    renderExamples(section) {
        document.getElementById('examplesIntro').textContent = section.introduction;
        this.renderExamplesGrid(section.featuredRanges);
    },

    renderExamplesGrid(ranges) {
        const { continent, type } = this.state.activeFilter;
        
        let filtered = ranges;
        
        if (continent !== 'all') {
            filtered = filtered.filter(r => r.continent.includes(continent));
        }
        
        if (type !== 'all') {
            filtered = filtered.filter(r => r.type.includes(type));
        }
        
        const grid = document.getElementById('examplesGrid');
        
        if (filtered.length === 0) {
            grid.innerHTML = `
                <div class="empty-state">
                    <span class="empty-icon">🏔️</span>
                    <p>No mountain ranges match your filters.</p>
                    <button class="btn btn-secondary" onclick="MountainsEducation.resetFilters()">Reset Filters</button>
                </div>
            `;
            return;
        }
        
        grid.innerHTML = filtered.map(range => `
            <div class="example-card">
                <div class="example-image">
                    <img src="${range.image}" alt="${range.name}" loading="lazy">
                    <span class="example-icon">${range.icon}</span>
                </div>
                <div class="example-content">
                    <h3 class="example-name">${range.name}</h3>
                    <div class="example-meta">
                        <span class="meta-item">📍 ${range.continent}</span>
                        <span class="meta-item">📏 ${range.highestPeak.split('(')[0]}</span>
                    </div>
                    <span class="example-type">${range.type}</span>
                    <p class="example-fact">${range.funFact}</p>
                    <a href="${range.link}" class="btn btn-sm btn-outline">Learn More →</a>
                </div>
            </div>
        `).join('');
    },

    filterExamples(filterType, value) {
        this.state.activeFilter[filterType] = value;
        this.renderExamplesGrid(this.state.data.sections.examples.featuredRanges);
    },

    resetFilters() {
        this.state.activeFilter = { continent: 'all', type: 'all' };
        document.getElementById('continentFilter').value = 'all';
        document.getElementById('typeFilter').value = 'all';
        this.renderExamplesGrid(this.state.data.sections.examples.featuredRanges);
    },

    // ================================
    // UPSC SECTION
    // ================================
    renderUPSC(upsc) {
        // Introduction
        document.getElementById('upscIntro').textContent = upsc.introduction;
        
        // Topics
        const topicsGrid = document.getElementById('upscTopicsGrid');
        topicsGrid.innerHTML = upsc.topics.map(topic => `
            <div class="topic-item">
                <span class="topic-bullet">→</span>
                <span class="topic-text">${topic}</span>
            </div>
        `).join('');
        
        // Sample Questions
        const questionsAccordion = document.getElementById('upscQuestionsAccordion');
        questionsAccordion.innerHTML = upsc.sampleQuestions.map((q, i) => `
            <div class="question-accordion" data-expanded="false">
                <div class="accordion-header" data-index="${i}">
                    <div class="question-meta">
                        <span class="question-type ${q.type.toLowerCase()}">${q.type}</span>
                        ${q.year ? `<span class="question-year">${q.year}</span>` : ''}
                        ${q.marks ? `<span class="question-marks">${q.marks} marks</span>` : ''}
                    </div>
                    <p class="question-text">${q.question}</p>
                    <button class="accordion-toggle">+</button>
                </div>
                <div class="accordion-content">
                    <div class="answer-box">
                        <strong>${q.type === 'Prelims' ? 'Answer:' : 'Approach:'}</strong>
                        <p>${q.answer || q.approach}</p>
                    </div>
                </div>
            </div>
        `).join('');
        
        // Key Concepts
        const conceptsGrid = document.getElementById('upscConceptsGrid');
        conceptsGrid.innerHTML = upsc.keyConceptsForExam.map(concept => `
            <div class="concept-card">
                <div class="concept-header">
                    <h4>${concept.concept}</h4>
                    <span class="importance-badge ${concept.importance.toLowerCase().replace(' ', '-')}">${concept.importance}</span>
                </div>
                <p class="concept-details">${concept.details}</p>
                <p class="concept-relevance"><strong>Exam Relevance:</strong> ${concept.examRelevance}</p>
            </div>
        `).join('');
        
        // Current Affairs
        const currentAffairs = document.getElementById('currentAffairsList');
        currentAffairs.innerHTML = upsc.currentAffairsLinks.map(item => `
            <div class="current-affair-item">
                <span class="affair-icon">📰</span>
                <span class="affair-text">${item}</span>
            </div>
        `).join('');
    },

    // ================================
    // TYPE MODAL
    // ================================
    openTypeModal(typeId) {
        const branch = this.state.data.sections.types.branches.find(b => b.id === typeId);
        if (!branch) return;
        
        const modal = document.getElementById('typeModal');
        const modalBody = document.getElementById('modalBody');
        
        modalBody.innerHTML = `
            <div class="modal-header" style="--branch-color: ${branch.color}">
                <span class="modal-icon">${branch.icon}</span>
                <h2>${branch.name}</h2>
            </div>
            
            <div class="modal-section">
                <h3>📖 Definition</h3>
                <p>${branch.definition}</p>
            </div>
            
            <div class="modal-section">
                <h3>⚙️ Formation Process</h3>
                <div class="modal-steps">
                    ${branch.formation.steps.map(step => `
                        <div class="modal-step">
                            <div class="step-marker">
                                <span class="step-icon">${step.icon}</span>
                                <span class="step-num">${step.step}</span>
                            </div>
                            <p>${step.text}</p>
                        </div>
                    `).join('')}
                </div>
            </div>
            
            <div class="modal-section">
                <h3>🔍 Characteristics</h3>
                <ul class="modal-characteristics">
                    ${branch.characteristics.map(c => `<li>${c}</li>`).join('')}
                </ul>
            </div>
            
            <div class="modal-section">
                <h3>🌍 Examples (${branch.examples.length})</h3>
                <div class="modal-examples-grid">
                    ${branch.examples.map(ex => `
                        <div class="modal-example-card">
                            <img src="${ex.image}" alt="${ex.name}" loading="lazy">
                            <div class="modal-example-info">
                                <h4>${ex.name}</h4>
                                <p class="location">${ex.location}</p>
                                <p class="peak"><strong>Highest:</strong> ${ex.highestPeak || 'N/A'}</p>
                                ${ex.notableFeatures ? `
                                    <ul class="notable-features">
                                        ${ex.notableFeatures.slice(0, 3).map(f => `<li>${f}</li>`).join('')}
                                    </ul>
                                ` : ''}
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
            
            ${branch.distribution ? `
                <div class="modal-section">
                    <h3>🗺️ Distribution</h3>
                    <p><strong>Continents:</strong> ${branch.distribution.continents.join(', ')}</p>
                    ${branch.distribution.majorBelts || branch.distribution.majorRegions ? `
                        <div class="distribution-regions">
                            ${(branch.distribution.majorBelts || branch.distribution.majorRegions || []).map(region => `
                                <div class="region-card">
                                    <h4>${region.name}</h4>
                                    <p><strong>Extent:</strong> ${region.extent || region.length || 'N/A'}</p>
                                    <p>${region.features}</p>
                                </div>
                            `).join('')}
                        </div>
                    ` : ''}
                </div>
            ` : ''}
        `;
        
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    },

    closeTypeModal() {
        document.getElementById('typeModal').classList.remove('active');
        document.body.style.overflow = '';
    },

    // ================================
    // EVENT LISTENERS
    // ================================
    setupEventListeners() {
        // Key Points expand
        document.querySelectorAll('.key-point-card').forEach(card => {
            card.querySelector('.key-point-header').addEventListener('click', () => {
                const isExpanded = card.dataset.expanded === 'true';
                card.dataset.expanded = !isExpanded;
            });
        });
        
        // Fun Facts toggle
        document.getElementById('funFactsToggle').addEventListener('click', () => {
            const content = document.getElementById('funFactsContent');
            const icon = document.querySelector('#funFactsToggle .expand-icon');
            const isExpanded = content.classList.toggle('expanded');
            icon.textContent = isExpanded ? '−' : '+';
        });
        
        // Type branches expand
        document.querySelectorAll('.branch-header').forEach(header => {
            header.addEventListener('click', () => {
                const branchId = header.dataset.branch;
                const content = document.getElementById(`branch-${branchId}`);
                const icon = header.querySelector('.expand-icon');
                const isExpanded = content.classList.toggle('expanded');
                icon.textContent = isExpanded ? '−' : '+';
                header.closest('.branch-card').classList.toggle('expanded', isExpanded);
            });
        });
        
        // View Details buttons
        document.querySelectorAll('.view-details-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                this.openTypeModal(btn.dataset.type);
            });
        });
        
        // Timeline expand
        document.querySelectorAll('.timeline-header').forEach(header => {
            header.addEventListener('click', () => {
                const stage = header.dataset.stage;
                const content = document.getElementById(`timeline-${stage}`);
                const icon = header.querySelector('.expand-icon');
                const isExpanded = content.classList.toggle('expanded');
                icon.textContent = isExpanded ? '−' : '+';
                header.closest('.timeline-card').classList.toggle('expanded', isExpanded);
            });
        });
        
        // Terminology cards
        document.querySelectorAll('.term-card').forEach(card => {
            card.querySelector('.term-header').addEventListener('click', () => {
                const isExpanded = card.dataset.expanded === 'true';
                card.dataset.expanded = !isExpanded;
                card.querySelector('.term-expand-btn').textContent = isExpanded ? '+' : '−';
            });
        });
        
        // Quiz
        document.getElementById('startQuizBtn').addEventListener('click', () => this.startQuiz());
        document.getElementById('nextQuestionBtn').addEventListener('click', () => this.nextQuestion());
        document.getElementById('prevQuestionBtn').addEventListener('click', () => this.prevQuestion());
        document.getElementById('submitQuizBtn').addEventListener('click', () => this.submitQuiz());
        
        // Quiz options (delegated)
        document.getElementById('questionCard').addEventListener('change', (e) => {
            if (e.target.name === 'quizOption') {
                this.selectAnswer(parseInt(e.target.value));
            }
        });
        
        // Filters
        document.getElementById('continentFilter').addEventListener('change', (e) => {
            this.filterExamples('continent', e.target.value);
        });
        document.getElementById('typeFilter').addEventListener('change', (e) => {
            this.filterExamples('type', e.target.value);
        });
        
        // UPSC Questions accordion
        document.querySelectorAll('.accordion-header').forEach(header => {
            header.addEventListener('click', () => {
                const accordion = header.closest('.question-accordion');
                const isExpanded = accordion.dataset.expanded === 'true';
                accordion.dataset.expanded = !isExpanded;
                header.querySelector('.accordion-toggle').textContent = isExpanded ? '+' : '−';
            });
        });
        
        // Modal close
        document.getElementById('modalClose').addEventListener('click', () => this.closeTypeModal());
        document.getElementById('modalOverlay').addEventListener('click', () => this.closeTypeModal());
        
        // Escape key closes modal
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') this.closeTypeModal();
        });
        
        // Back to top
        document.getElementById('backToTop').addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    },

    // ================================
    // SCROLL EFFECTS
    // ================================
    setupScrollEffects() {
        // Navigation scroll
        window.addEventListener('scroll', () => {
            const nav = document.getElementById('mainNav');
            nav.classList.toggle('scrolled', window.scrollY > 50);
            
            const backToTop = document.getElementById('backToTop');
            backToTop.classList.toggle('visible', window.scrollY > 500);
            
            // Reading progress
            const scrollTop = window.pageYOffset;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = (scrollTop / docHeight) * 100;
            document.querySelector('.reading-progress-bar').style.width = `${progress}%`;
            
            // TOC active link
            this.updateTocActive();
        });
        
        // TOC sticky
        const tocNav = document.getElementById('tocNav');
        const tocTop = tocNav.offsetTop;
        
        window.addEventListener('scroll', () => {
            tocNav.classList.toggle('sticky', window.scrollY > tocTop);
        });
    },

    updateTocActive() {
        const sections = document.querySelectorAll('.edu-section[id]');
        const scrollPos = window.scrollY + 150;
        
        sections.forEach(section => {
            const top = section.offsetTop;
            const height = section.offsetHeight;
            const id = section.id;
            
            if (scrollPos >= top && scrollPos < top + height) {
                document.querySelectorAll('.toc-link').forEach(link => {
                    link.classList.toggle('active', link.dataset.section === id);
                });
            }
        });
    }
};

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
    MountainsEducation.init();
});
