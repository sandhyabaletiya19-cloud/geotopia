/* ═══════════════════════════════════════════════════════════════
   🌍 UPSC GEOGRAPHY - COMPLETE APP.JS
   File: upsc-app.js
   This handles ALL interactivity
   ═══════════════════════════════════════════════════════════════ */

// ═══════════════════════════════════════════════════════════════
// 🚀 INITIALIZATION
// ═══════════════════════════════════════════════════════════════

document.addEventListener('DOMContentLoaded', function() {
    console.log('🌍 UPSC Geography App Starting...');
    
    // Hide loader after short delay
    setTimeout(() => {
        hideLoader();
        initApp();
    }, 1500);
});

// Hide Loading Screen
function hideLoader() {
    const loader = document.getElementById('loader');
    if (loader) {
        loader.classList.add('hidden');
        console.log('✅ Loader hidden');
    }
}

// Initialize App
function initApp() {
    console.log('📚 Initializing App...');
    
    // Check which page we're on
    const isMainPage = document.getElementById('categoriesContainer');
    const isProfilePage = document.querySelector('.profile-page');
    
    if (isMainPage) {
        initMainPage();
    } else if (isProfilePage) {
        initProfilePage();
    }
}

// ═══════════════════════════════════════════════════════════════
// 📚 MAIN PAGE FUNCTIONS
// ═══════════════════════════════════════════════════════════════

function initMainPage() {
    console.log('📖 Main page detected');
    
    renderCategories();
    initSearch();
    initFilters();
    initModal();
    initRandomTopic();
    updateStats();
    
    console.log('✅ Main page initialized');
}

// ─────────────────────────────────────────
// 📦 RENDER CATEGORIES & TOPICS
// ─────────────────────────────────────────

function renderCategories() {
    const container = document.getElementById('categoriesContainer');
    if (!container) return;
    
    // Check if data exists
    if (typeof UPSC_GEOGRAPHY_DATA === 'undefined') {
        container.innerHTML = `
            <div class="error-message">
                <h2>⚠️ Data Not Found</h2>
                <p>Make sure upsc-data.js is loaded before upsc-app.js</p>
            </div>
        `;
        console.error('❌ UPSC_GEOGRAPHY_DATA not found!');
        return;
    }
    
    const categories = UPSC_GEOGRAPHY_DATA.categories;
    const topics = UPSC_GEOGRAPHY_DATA.topics;
    
    let html = '';
    
    categories.forEach((category, index) => {
        // Filter topics for this category
        const categoryTopics = topics.filter(t => t.category === category.id);
        
        // Calculate progress (from localStorage)
        const completedCount = getCompletedCount(category.id);
        const totalCount = categoryTopics.length;
        const progressPercent = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;
        
        html += `
            <div class="category-block" data-category="${category.id}">
                <!-- Category Header -->
                <div class="category-header">
                    <div class="category-icon" style="background: ${category.color};">
                        <i class="${category.icon}"></i>
                    </div>
                    <div class="category-info">
                        <h2>${category.name}</h2>
                        <p>${category.description}</p>
                    </div>
                    <div class="category-progress">
                        <div class="progress-text">${completedCount}/${totalCount} Topics</div>
                        <div class="progress-bar">
                            <div class="progress-fill" style="width: ${progressPercent}%; background: ${category.color};"></div>
                        </div>
                    </div>
                </div>
                
                <!-- Topics Grid -->
                <div class="topics-grid">
                    ${renderTopicCards(categoryTopics, category)}
                </div>
            </div>
        `;
    });
    
    container.innerHTML = html;
    
    // Add click listeners to topic cards
    addTopicCardListeners();
    
    console.log(`✅ Rendered ${categories.length} categories with ${topics.length} topics`);
}

function renderTopicCards(topics, category) {
    if (!topics || topics.length === 0) {
        return `<p class="no-topics">No topics available yet</p>`;
    }
    
    return topics.map(topic => {
        const isCompleted = isTopicCompleted(topic.id);
        const difficultyClass = topic.difficulty || 'medium';
        const themeClass = topic.theme || 'default';
        
        return `
            <div class="topic-card theme-${themeClass} ${isCompleted ? 'completed' : ''}" 
                 data-topic-id="${topic.id}">
                
                <!-- Card Background Animation -->
                <div class="card-background">
                    ${getThemeBackground(themeClass)}
                </div>
                
                <!-- Card Content -->
                <div class="card-content">
                    <div class="card-header">
                        <div class="card-icon" style="background: ${category.color};">
                            ${getTopicIcon(topic.theme)}
                        </div>
                        <div class="card-badges">
                            <span class="badge badge-${difficultyClass}">${difficultyClass}</span>
                            ${topic.importance === 'very-high' ? '<span class="badge badge-important">★ Important</span>' : ''}
                            ${isCompleted ? '<span class="badge badge-completed">✓ Done</span>' : ''}
                        </div>
                    </div>
                    
                    <h3 class="card-title">${topic.name}</h3>
                    
                    <div class="card-subtitle">
                        <i class="fas fa-layer-group"></i>
                        <span>${getCategoryName(topic.category)}</span>
                    </div>
                    
                    <div class="card-topics">
                        ${getTopicTags(topic)}
                    </div>
                    
                    <div class="card-footer">
                        <div class="card-meta">
                            <span><i class="fas fa-clock"></i> ${topic.studyTime || '30 min'}</span>
                            <span><i class="fas fa-brain"></i> ${topic.mnemonics ? topic.mnemonics.length : 0} tricks</span>
                        </div>
                        <div class="card-action">
                            Study <i class="fas fa-arrow-right"></i>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

// Get theme-specific background elements
function getThemeBackground(theme) {
    const backgrounds = {
        ocean: `
            <div class="ocean-bubbles">
                <div class="bubble"></div>
                <div class="bubble"></div>
                <div class="bubble"></div>
                <div class="bubble"></div>
                <div class="bubble"></div>
            </div>
        `,
        climate: `
            <div class="clouds-container">
                <div class="cloud cloud-1"></div>
                <div class="cloud cloud-2"></div>
                <div class="cloud cloud-3"></div>
            </div>
        `,
        volcano: `
            <div class="lava-container">
                <div class="lava-flow"></div>
                <div class="lava-flow"></div>
            </div>
            <div class="fire-particles">
                <div class="fire-particle"></div>
                <div class="fire-particle"></div>
                <div class="fire-particle"></div>
            </div>
        `,
        mountain: `
            <div class="mountain-silhouettes">
                <div class="mountain-layer mountain-layer-1"></div>
                <div class="mountain-layer mountain-layer-2"></div>
                <div class="mountain-layer mountain-layer-3"></div>
            </div>
        `,
        forest: `
            <div class="leaves-container">
                <div class="leaf">🍃</div>
                <div class="leaf">🍂</div>
                <div class="leaf">🍃</div>
            </div>
        `,
        river: `
            <div class="river-container">
                <div class="river-flow"></div>
            </div>
        `,
        tectonic: `
            <div class="fault-lines">
                <div class="fault-line"></div>
                <div class="fault-line"></div>
            </div>
        `,
        soil: `
            <div class="soil-layers">
                <div class="soil-layer layer-humus"></div>
                <div class="soil-layer layer-topsoil"></div>
                <div class="soil-layer layer-subsoil"></div>
            </div>
        `,
        default: ''
    };
    
    return backgrounds[theme] || backgrounds.default;
}

// Get topic icon based on theme
function getTopicIcon(theme) {
    const icons = {
        ocean: '🌊',
        climate: '☁️',
        volcano: '🌋',
        mountain: '🏔️',
        forest: '🌳',
        river: '💧',
        tectonic: '🌍',
        soil: '🌱',
        economic: '📊',
        population: '👥',
        environment: '🌿',
        default: '📚'
    };
    
    return icons[theme] || icons.default;
}

// Get category name
function getCategoryName(categoryId) {
    if (typeof UPSC_GEOGRAPHY_DATA === 'undefined') return categoryId;
    
    const category = UPSC_GEOGRAPHY_DATA.categories.find(c => c.id === categoryId);
    return category ? category.name : categoryId;
}

// Get topic tags from mindmap branches
function getTopicTags(topic) {
    if (!topic.mindMap || !topic.mindMap.branches) {
        return '<span class="topic-tag">General</span>';
    }
    
    return topic.mindMap.branches.slice(0, 3).map(branch => 
        `<span class="topic-tag">${branch.name.replace(/[🔴🟠🟡⬇️⬆️💨📍📊🌊🌡️❄️⚡📏🔄🌍🔬🌱☁️✈️📋🧱]/g, '').trim().substring(0, 15)}</span>`
    ).join('');
}

// ─────────────────────────────────────────
// 🔍 SEARCH FUNCTIONALITY
// ─────────────────────────────────────────

function initSearch() {
    const searchInput = document.getElementById('searchInput');
    const clearBtn = document.getElementById('clearSearch');
    
    if (!searchInput) return;
    
    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();
        filterTopics(query);
    });
    
    if (clearBtn) {
        clearBtn.addEventListener('click', () => {
            searchInput.value = '';
            filterTopics('');
        });
    }
}

function filterTopics(query) {
    const topicCards = document.querySelectorAll('.topic-card');
    const categoryBlocks = document.querySelectorAll('.category-block');
    
    if (!query) {
        // Show all
        topicCards.forEach(card => card.style.display = '');
        categoryBlocks.forEach(block => block.style.display = '');
        return;
    }
    
    topicCards.forEach(card => {
        const topicId = card.dataset.topicId;
        const topic = getTopicById(topicId);
        
        if (topic) {
            const searchText = `${topic.name} ${topic.category} ${topic.theme} ${JSON.stringify(topic.quickFacts || [])}`.toLowerCase();
            const matches = searchText.includes(query);
            card.style.display = matches ? '' : 'none';
        }
    });
    
    // Hide empty categories
    categoryBlocks.forEach(block => {
        const visibleCards = block.querySelectorAll('.topic-card[style=""], .topic-card:not([style])');
        const hasVisible = Array.from(block.querySelectorAll('.topic-card')).some(card => card.style.display !== 'none');
        block.style.display = hasVisible ? '' : 'none';
    });
}

// ─────────────────────────────────────────
// 🏷️ FILTER TABS
// ─────────────────────────────────────────

function initFilters() {
    const filterTabs = document.querySelectorAll('.filter-tab');
    
    filterTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Update active state
            filterTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            
            // Filter categories
            const filter = tab.dataset.filter;
            filterByCategory(filter);
        });
    });
}

function filterByCategory(filter) {
    const categoryBlocks = document.querySelectorAll('.category-block');
    
    categoryBlocks.forEach(block => {
        if (filter === 'all') {
            block.style.display = '';
        } else {
            block.style.display = block.dataset.category === filter ? '' : 'none';
        }
    });
}

// ─────────────────────────────────────────
// 🎭 MODAL (Topic Detail View)
// ─────────────────────────────────────────

function initModal() {
    const modal = document.getElementById('topicModal');
    const closeBtn = document.getElementById('closeModal');
    
    if (closeBtn) {
        closeBtn.addEventListener('click', closeModal);
    }
    
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal();
            }
        });
    }
    
    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeModal();
        }
    });
}

function addTopicCardListeners() {
    const topicCards = document.querySelectorAll('.topic-card');
    
    topicCards.forEach(card => {
        card.addEventListener('click', () => {
            const topicId = card.dataset.topicId;
            openTopicModal(topicId);
        });
    });
}

function openTopicModal(topicId) {
    const modal = document.getElementById('topicModal');
    const modalContent = document.getElementById('modalContent');
    
    if (!modal || !modalContent) return;
    
    const topic = getTopicById(topicId);
    
    if (!topic) {
        console.error('Topic not found:', topicId);
        return;
    }
    
    // Render modal content
    modalContent.innerHTML = renderTopicDetail(topic);
    
    // Show modal
    modal.classList.add('active');
    document.body.classList.add('no-scroll');
    
    // Track study time
    startStudyTimer(topicId);
    
    // Add complete button listener
    setTimeout(() => {
        const completeBtn = document.getElementById('markCompleteBtn');
        if (completeBtn) {
            completeBtn.addEventListener('click', () => markTopicComplete(topicId));
        }
    }, 100);
}

function closeModal() {
    const modal = document.getElementById('topicModal');
    if (modal) {
        modal.classList.remove('active');
        document.body.classList.remove('no-scroll');
        stopStudyTimer();
    }
}

function renderTopicDetail(topic) {
    const category = UPSC_GEOGRAPHY_DATA.categories.find(c => c.id === topic.category);
    const isCompleted = isTopicCompleted(topic.id);
    
    return `
        <!-- Modal Header -->
        <div class="modal-header theme-${topic.theme}">
            <div class="modal-title">
                <div class="modal-title-icon" style="background: ${category ? category.color : '#667eea'};">
                    ${getTopicIcon(topic.theme)}
                </div>
                <div>
                    <h2>${topic.name}</h2>
                    <div class="modal-meta">
                        <span><i class="fas fa-folder"></i> ${getCategoryName(topic.category)}</span>
                        <span><i class="fas fa-clock"></i> ${topic.studyTime || '30 min'}</span>
                        <span><i class="fas fa-signal"></i> ${topic.difficulty || 'Medium'}</span>
                        ${isCompleted ? '<span><i class="fas fa-check-circle"></i> Completed</span>' : ''}
                    </div>
                </div>
            </div>
        </div>
        
        <!-- Modal Body -->
        <div class="modal-body">
            
            <!-- 1️⃣ Mind Map Section -->
            ${renderMindMapSection(topic)}
            
            <!-- 2️⃣ Mnemonics Section -->
            ${renderMnemonicsSection(topic)}
            
            <!-- 3️⃣ Concepts Section -->
            ${renderConceptsSection(topic)}
            
            <!-- 4️⃣ Diagrams Section -->
            ${renderDiagramsSection(topic)}
            
            <!-- 5️⃣ Quick Facts Section -->
            ${renderQuickFactsSection(topic)}
            
            <!-- 6️⃣ UPSC Traps Section -->
            ${renderTrapsSection(topic)}
            
            <!-- 7️⃣ Revision Box -->
            ${renderRevisionSection(topic)}
            
            <!-- Action Buttons -->
            <div class="modal-actions">
                <button class="btn btn-primary" id="markCompleteBtn">
                    <i class="fas ${isCompleted ? 'fa-redo' : 'fa-check'}"></i>
                    ${isCompleted ? 'Mark for Revision' : 'Mark as Complete'}
                </button>
            </div>
            
        </div>
    `;
}

// ─────────────────────────────────────────
// 📊 RENDER SECTIONS
// ─────────────────────────────────────────

function renderMindMapSection(topic) {
    if (!topic.mindMap) return '';
    
    const { center, branches } = topic.mindMap;
    
    return `
        <div class="content-section">
            <div class="section-header">
                <div class="section-icon"><i class="fas fa-project-diagram"></i></div>
                <h3 class="section-title">Visual Mind Map</h3>
            </div>
            <div class="mind-map-container">
                <div class="mind-map">
                    <div class="mind-map-center">${center}</div>
                    <div class="mind-map-branches">
                        ${branches.map(branch => `
                            <div class="branch">
                                <div class="branch-main" style="border-color: ${branch.color}; color: ${branch.color};">
                                    ${branch.name}
                                </div>
                                <div class="branch-subs">
                                    ${branch.subs.map(sub => `
                                        <div class="branch-sub">${sub}</div>
                                    `).join('')}
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        </div>
    `;
}

function renderMnemonicsSection(topic) {
    if (!topic.mnemonics || topic.mnemonics.length === 0) return '';
    
    return `
        <div class="content-section">
            <div class="section-header">
                <div class="section-icon"><i class="fas fa-brain"></i></div>
                <h3 class="section-title">Memory Hooks & Mnemonics</h3>
            </div>
            <div class="mnemonics-grid">
                ${topic.mnemonics.map(mnemonic => `
                    <div class="mnemonic-card">
                        <h4>${mnemonic.title}</h4>
                        <div class="mnemonic-trick">${mnemonic.trick}</div>
                        ${mnemonic.meaning ? `
                            <div class="mnemonic-meaning">
                                ${mnemonic.meaning.map(m => `
                                    <div class="mnemonic-letter">
                                        <span class="letter-key">${m.letter}</span>
                                        <span class="letter-value"><strong>${m.word}</strong> - ${m.hint}</span>
                                    </div>
                                `).join('')}
                            </div>
                        ` : ''}
                        ${mnemonic.visual ? `
                            <div class="mnemonic-visual">💡 ${mnemonic.visual}</div>
                        ` : ''}
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

function renderConceptsSection(topic) {
    if (!topic.concepts || topic.concepts.length === 0) return '';
    
    return `
        <div class="content-section">
            <div class="section-header">
                <div class="section-icon"><i class="fas fa-cubes"></i></div>
                <h3 class="section-title">Micro Concept Blocks</h3>
            </div>
            <div class="concepts-grid">
                ${topic.concepts.map(concept => `
                    <div class="concept-block">
                        <h4 class="concept-title">${concept.icon || '📌'} ${concept.title}</h4>
                        <ul class="concept-points">
                            ${concept.points.map(point => `
                                <li>${point}</li>
                            `).join('')}
                        </ul>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

function renderDiagramsSection(topic) {
    if (!topic.diagrams || topic.diagrams.length === 0) return '';
    
    return `
        <div class="content-section">
            <div class="section-header">
                <div class="section-icon"><i class="fas fa-image"></i></div>
                <h3 class="section-title">Visual Diagrams</h3>
            </div>
            <div class="diagrams-grid">
                ${topic.diagrams.map(diagram => `
                    <div class="diagram-card">
                        <div class="diagram-visual">
                            ${diagram.icon || '📊'}
                        </div>
                        <div class="diagram-info">
                            <div class="diagram-type">${diagram.type}</div>
                            <h4 class="diagram-title">${diagram.title}</h4>
                            <p class="diagram-desc">${diagram.description}</p>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

function renderQuickFactsSection(topic) {
    if (!topic.quickFacts || topic.quickFacts.length === 0) return '';
    
    return `
        <div class="content-section">
            <div class="section-header">
                <div class="section-icon"><i class="fas fa-bolt"></i></div>
                <h3 class="section-title">Quick Facts for UPSC</h3>
            </div>
            <div class="quick-facts-list">
                ${topic.quickFacts.map(fact => `
                    <div class="quick-fact">
                        <div class="fact-icon">${fact.icon || '📌'}</div>
                        <div class="fact-text">${fact.fact}</div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

function renderTrapsSection(topic) {
    if (!topic.traps || topic.traps.length === 0) return '';
    
    return `
        <div class="content-section">
            <div class="section-header">
                <div class="section-icon"><i class="fas fa-exclamation-triangle"></i></div>
                <h3 class="section-title">Common UPSC Traps</h3>
            </div>
            <div class="traps-list">
                ${topic.traps.map(trap => `
                    <div class="trap-item">
                        <div class="trap-icon">⚠️</div>
                        <div class="trap-text">
                            <div class="trap-wrong">❌ Wrong: ${trap.wrong}</div>
                            <div class="trap-correct">✅ Correct: ${trap.correct}</div>
                            <div class="trap-explanation">💡 ${trap.explanation}</div>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

function renderRevisionSection(topic) {
    if (!topic.revision) return '';
    
    return `
        <div class="content-section">
            <div class="section-header">
                <div class="section-icon"><i class="fas fa-rocket"></i></div>
                <h3 class="section-title">Super Fast Revision</h3>
            </div>
            <div class="revision-box">
                <div class="revision-content">
                    <p><strong>📝 One-Liner:</strong> ${topic.revision.oneLiner}</p>
                    ${topic.revision.keyPoints ? `
                        <div class="revision-keypoints">
                            <strong>🎯 Key Points:</strong>
                            <ul>
                                ${topic.revision.keyPoints.map(point => `<li>${point}</li>`).join('')}
                            </ul>
                        </div>
                    ` : ''}
                    ${topic.revision.examTip ? `
                        <p class="revision-tip"><strong>💡 Exam Tip:</strong> ${topic.revision.examTip}</p>
                    ` : ''}
                </div>
            </div>
        </div>
    `;
}

// ─────────────────────────────────────────
// 🎲 RANDOM TOPIC
// ─────────────────────────────────────────

function initRandomTopic() {
    const randomBtn = document.getElementById('randomTopicBtn');
    
    if (randomBtn) {
        randomBtn.addEventListener('click', () => {
            const topics = UPSC_GEOGRAPHY_DATA.topics;
            const randomIndex = Math.floor(Math.random() * topics.length);
            const randomTopic = topics[randomIndex];
            openTopicModal(randomTopic.id);
        });
    }
}

// ─────────────────────────────────────────
// 📊 STATS & PROGRESS
// ─────────────────────────────────────────

function updateStats() {
    const totalTopicsEl = document.getElementById('totalTopics');
    const totalMnemonicsEl = document.getElementById('totalMnemonics');
    const totalDiagramsEl = document.getElementById('totalDiagrams');
    const completionRateEl = document.getElementById('completionRate');
    
    if (typeof UPSC_GEOGRAPHY_DATA === 'undefined') return;
    
    const topics = UPSC_GEOGRAPHY_DATA.topics;
    
    // Count totals
    const totalTopics = topics.length;
    let totalMnemonics = 0;
    let totalDiagrams = 0;
    
    topics.forEach(topic => {
        if (topic.mnemonics) totalMnemonics += topic.mnemonics.length;
        if (topic.diagrams) totalDiagrams += topic.diagrams.length;
    });
    
    // Get completion rate
    const completedTopics = getCompletedTopics().length;
    const completionRate = totalTopics > 0 ? Math.round((completedTopics / totalTopics) * 100) : 0;
    
    // Update DOM
    if (totalTopicsEl) totalTopicsEl.textContent = totalTopics + '+';
    if (totalMnemonicsEl) totalMnemonicsEl.textContent = totalMnemonics + '+';
    if (totalDiagramsEl) totalDiagramsEl.textContent = totalDiagrams + '+';
    if (completionRateEl) completionRateEl.textContent = completionRate + '%';
}

// ─────────────────────────────────────────
// 💾 LOCAL STORAGE FUNCTIONS
// ─────────────────────────────────────────

function getCompletedTopics() {
    const data = localStorage.getItem('upsc_completed_topics');
    return data ? JSON.parse(data) : [];
}

function isTopicCompleted(topicId) {
    return getCompletedTopics().includes(topicId);
}

function markTopicComplete(topicId) {
    let completed = getCompletedTopics();
    
    if (completed.includes(topicId)) {
        // Remove (for revision)
        completed = completed.filter(id => id !== topicId);
    } else {
        // Add
        completed.push(topicId);
    }
    
    localStorage.setItem('upsc_completed_topics', JSON.stringify(completed));
    
    // Refresh UI
    closeModal();
    renderCategories();
    updateStats();
    
    // Show notification
    showNotification(completed.includes(topicId) ? '✅ Topic marked as complete!' : '📝 Topic marked for revision');
}

function getCompletedCount(categoryId) {
    const completed = getCompletedTopics();
    const categoryTopics = UPSC_GEOGRAPHY_DATA.topics.filter(t => t.category === categoryId);
    return categoryTopics.filter(t => completed.includes(t.id)).length;
}

// ─────────────────────────────────────────
// ⏱️ STUDY TIMER
// ─────────────────────────────────────────

let studyTimerInterval = null;
let currentStudyTopic = null;
let studyStartTime = null;

function startStudyTimer(topicId) {
    currentStudyTopic = topicId;
    studyStartTime = Date.now();
}

function stopStudyTimer() {
    if (studyStartTime && currentStudyTopic) {
        const duration = Date.now() - studyStartTime;
        saveStudyTime(currentStudyTopic, duration);
    }
    currentStudyTopic = null;
    studyStartTime = null;
}

function saveStudyTime(topicId, duration) {
    let studyData = JSON.parse(localStorage.getItem('upsc_study_time') || '{}');
    studyData[topicId] = (studyData[topicId] || 0) + duration;
    localStorage.setItem('upsc_study_time', JSON.stringify(studyData));
}

// ─────────────────────────────────────────
// 🔔 NOTIFICATIONS
// ─────────────────────────────────────────

function showNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.innerHTML = message;
    notification.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: linear-gradient(135deg, #667eea, #764ba2);
        color: white;
        padding: 1rem 2rem;
        border-radius: 10px;
        box-shadow: 0 4px 20px rgba(0,0,0,0.3);
        z-index: 10000;
        animation: slideIn 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease forwards';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// ─────────────────────────────────────────
// 🔧 HELPER FUNCTIONS
// ─────────────────────────────────────────

function getTopicById(topicId) {
    if (typeof UPSC_GEOGRAPHY_DATA === 'undefined') return null;
    return UPSC_GEOGRAPHY_DATA.topics.find(t => t.id === topicId);
}

// ═══════════════════════════════════════════════════════════════
// 📊 PROFILE PAGE FUNCTIONS
// ═══════════════════════════════════════════════════════════════

function initProfilePage() {
    console.log('📊 Profile page detected');
    
    renderProfileStats();
    renderCategoryProgress();
    renderStudyCalendar();
    renderWeakTopics();
    renderAchievements();
    
    console.log('✅ Profile page initialized');
}

function renderProfileStats() {
    const topicsStudied = document.getElementById('topicsStudied');
    const mnemonicsLearned = document.getElementById('mnemonicsLearned');
    const diagramsViewed = document.getElementById('diagramsViewed');
    const studyTime = document.getElementById('studyTime');
    
    const completed = getCompletedTopics();
    const studyData = JSON.parse(localStorage.getItem('upsc_study_time') || '{}');
    
    // Calculate total study time
    let totalTime = Object.values(studyData).reduce((a, b) => a + b, 0);
    const hours = Math.floor(totalTime / 3600000);
    const minutes = Math.floor((totalTime % 3600000) / 60000);
    
    if (topicsStudied) topicsStudied.textContent = completed.length;
    if (mnemonicsLearned) mnemonicsLearned.textContent = completed.length * 3; // Estimate
    if (diagramsViewed) diagramsViewed.textContent = completed.length * 2; // Estimate
    if (studyTime) studyTime.textContent = hours > 0 ? `${hours}h ${minutes}m` : `${minutes}m`;
}

function renderCategoryProgress() {
    const container = document.getElementById('categoryProgress');
    if (!container || typeof UPSC_GEOGRAPHY_DATA === 'undefined') return;
    
    const categories = UPSC_GEOGRAPHY_DATA.categories;
    const topics = UPSC_GEOGRAPHY_DATA.topics;
    
    let html = '';
    
    categories.forEach(category => {
        const categoryTopics = topics.filter(t => t.category === category.id);
        const completedCount = getCompletedCount(category.id);
        const totalCount = categoryTopics.length;
        const percent = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;
        
        html += `
            <div class="progress-item">
                <div class="progress-info">
                    <span class="progress-name">
                        <i class="${category.icon}"></i> ${category.name}
                    </span>
                    <span class="progress-percent">${completedCount}/${totalCount} (${percent}%)</span>
                </div>
                <div class="progress-bar-full">
                    <div class="progress-bar-fill" style="width: ${percent}%; background: ${category.color};"></div>
                </div>
            </div>
        `;
    });
    
    container.innerHTML = html;
}

function renderStudyCalendar() {
    const container = document.getElementById('studyCalendar');
    if (!container) return;
    
    const studyData = JSON.parse(localStorage.getItem('upsc_study_dates') || '{}');
    
    let html = '';
    
    // Generate last 35 days (5 weeks)
    for (let i = 34; i >= 0; i--) {
        const date = new Date();
        date.setDate(date.getDate() - i);
        const dateKey = date.toISOString().split('T')[0];
        const count = studyData[dateKey] || 0;
        
        let heatClass = 'heat-0';
        if (count >= 6) heatClass = 'heat-3';
        else if (count >= 3) heatClass = 'heat-2';
        else if (count >= 1) heatClass = 'heat-1';
        
        html += `<div class="calendar-day ${heatClass}" title="${dateKey}: ${count} topics"></div>`;
    }
    
    container.innerHTML = html;
}

function renderWeakTopics() {
    const container = document.getElementById('weakTopicsGrid');
    if (!container || typeof UPSC_GEOGRAPHY_DATA === 'undefined') return;
    
    const completed = getCompletedTopics();
    const allTopics = UPSC_GEOGRAPHY_DATA.topics;
    const incomplete = allTopics.filter(t => !completed.includes(t.id)).slice(0, 6);
    
    if (incomplete.length === 0) {
        container.innerHTML = '<p class="all-complete">🎉 Great job! All topics completed!</p>';
        return;
    }
    
    container.innerHTML = incomplete.map(topic => `
        <div class="weak-topic" onclick="window.location.href='UPSC.html'">
            <i class="fas fa-exclamation-circle"></i>
            <div class="weak-topic-info">
                <div class="weak-topic-name">${topic.name}</div>
                <div class="weak-topic-category">${getCategoryName(topic.category)}</div>
            </div>
        </div>
    `).join('');
}

function renderAchievements() {
    const container = document.getElementById('achievementsGrid');
    if (!container) return;
    
    const completed = getCompletedTopics().length;
    
    const achievements = [
        { icon: '🌱', name: 'First Step', desc: 'Complete 1 topic', requirement: 1 },
        { icon: '📚', name: 'Scholar', desc: 'Complete 10 topics', requirement: 10 },
        { icon: '🎓', name: 'Expert', desc: 'Complete 25 topics', requirement: 25 },
        { icon: '🏆', name: 'Master', desc: 'Complete 50 topics', requirement: 50 },
        { icon: '👑', name: 'Legend', desc: 'Complete all topics', requirement: 100 },
        { icon: '🔥', name: '7-Day Streak', desc: 'Study 7 days in a row', requirement: -1 }
    ];
    
    container.innerHTML = achievements.map(ach => {
        const unlocked = completed >= ach.requirement;
        return `
            <div class="achievement ${unlocked ? '' : 'locked'}">
                <div class="achievement-icon">${ach.icon}</div>
                <div class="achievement-name">${ach.name}</div>
                <div class="achievement-desc">${ach.desc}</div>
            </div>
        `;
    }).join('');
}

// ═══════════════════════════════════════════════════════════════
// 🎨 ADD NOTIFICATION ANIMATION STYLES
// ═══════════════════════════════════════════════════════════════

const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    @keyframes slideOut {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
    .mnemonic-visual {
        margin-top: 1rem;
        padding: 0.8rem;
        background: rgba(255,255,255,0.05);
        border-radius: 8px;
        font-size: 0.9rem;
        color: rgba(255,255,255,0.8);
    }
    .trap-explanation {
        margin-top: 0.5rem;
        font-size: 0.85rem;
        color: rgba(255,255,255,0.6);
    }
    .modal-actions {
        display: flex;
        justify-content: center;
        padding: 2rem 0;
        border-top: 1px solid rgba(255,255,255,0.1);
        margin-top: 2rem;
    }
    .revision-keypoints ul {
        margin-top: 0.5rem;
        padding-left: 1.5rem;
    }
    .revision-keypoints li {
        margin-bottom: 0.3rem;
    }
    .revision-tip {
        margin-top: 1rem;
        padding: 0.8rem;
        background: rgba(102, 126, 234, 0.1);
        border-radius: 8px;
    }
    .all-complete {
        text-align: center;
        padding: 2rem;
        color: #43e97b;
    }
    .error-message {
        text-align: center;
        padding: 3rem;
        background: rgba(255,0,0,0.1);
        border-radius: 20px;
        margin: 2rem;
    }
    .error-message h2 {
        color: #f5576c;
        margin-bottom: 1rem;
    }
    .no-topics {
        color: rgba(255,255,255,0.5);
        padding: 1rem;
        text-align: center;
    }
    .badge-completed {
        background: rgba(67, 233, 123, 0.2);
        color: #43e97b;
    }
    .topic-card.completed {
        border-color: rgba(67, 233, 123, 0.3);
    }
    .topic-card.completed::after {
        content: '✓';
        position: absolute;
        top: 10px;
        right: 10px;
        width: 25px;
        height: 25px;
        background: #43e97b;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 0.8rem;
        z-index: 10;
    }
`;
document.head.appendChild(style);

console.log('📄 UPSC App.js loaded successfully!');
