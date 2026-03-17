/* ========================================
   UPSC GEOGRAPHY - APPLICATION LOGIC
======================================== */

// ===== STATE MANAGEMENT =====
const AppState = {
    topics: [],
    filteredTopics: [],
    currentFilter: 'all',
    currentCategory: 'all',
    currentTopicIndex: 0,
    completed: JSON.parse(localStorage.getItem('upsc_completed') || '[]'),
    bookmarked: JSON.parse(localStorage.getItem('upsc_bookmarked') || '[]'),
    streak: parseInt(localStorage.getItem('upsc_streak') || '0'),
    lastVisit: localStorage.getItem('upsc_lastVisit') || ''
};

// ===== DOM ELEMENTS =====
const DOM = {
    loader: document.getElementById('loader'),
    topicsGrid: document.getElementById('topicsGrid'),
    categoryTabs: document.getElementById('categoryTabs'),
    searchInput: document.getElementById('searchInput'),
    modalOverlay: document.getElementById('modalOverlay'),
    modalContainer: document.getElementById('modalContainer'),
    modalClose: document.getElementById('modalClose'),
    progressFill: document.getElementById('progressFill'),
    progressText: document.getElementById('progressText'),
    totalTopics: document.getElementById('totalTopics'),
    completedTopics: document.getElementById('completedTopics'),
    bookmarkedTopics: document.getElementById('bookmarkedTopics'),
    streakDays: document.getElementById('streakDays')
};

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', () => {
    initApp();
});

function initApp() {
    // Combine all topic arrays
    let allTopics = [];
    
    // Add geomorphology topics
    if (typeof geomorphologyTopics !== 'undefined') {
        allTopics = [...allTopics, ...geomorphologyTopics];
        console.log('✅ Loaded Geomorphology:', geomorphologyTopics.length, 'topics');
    }
    
    // Add climatology topics
    if (typeof climatologyTopics1 !== 'undefined') {
        allTopics = [...allTopics, ...climatologyTopics1];
        console.log('✅ Loaded Climatology-1:', climatologyTopics1.length, 'topics');
    }
    
    // Check if we have any data
    if (allTopics.length === 0) {
        console.error('❌ No topics found!');
        DOM.loader.innerHTML = `
            <div class="loader-content">
                <div class="loader-icon">❌</div>
                <p style="color: #ef4444;">Data Not Found!</p>
                <p style="color: #94a3b8; font-size: 0.9rem;">Make sure data files are loaded</p>
            </div>
        `;
        return;
    }

    console.log('📊 Total topics loaded:', allTopics.length);

    // Store in AppState
    AppState.topics = allTopics;
    AppState.filteredTopics = allTopics;
    
    // Update streak
    updateStreak();
    
    // Render UI
    renderCategoryTabs();
    renderTopics();
    updateStats();
    
    // Setup event listeners
    setupEventListeners();
    
    // Hide loader
    setTimeout(() => {
        DOM.loader.classList.add('hidden');
    }, 800);
}
function flattenTopics() {
    AppState.topics = [];
    
    for (const [categoryKey, category] of Object.entries(UPSCData.categories)) {
        for (const [subcatKey, subcategory] of Object.entries(category.subcategories || {})) {
            for (const topic of subcategory.topics || []) {
                AppState.topics.push({
                    ...topic,
                    categoryKey,
                    categoryName: category.name,
                    categoryIcon: category.icon,
                    subcategoryKey: subcatKey,
                    subcategoryName: subcategory.name
                });
            }
        }
    }
    
    AppState.filteredTopics = [...AppState.topics];
}

// ===== RENDER FUNCTIONS =====
function renderCategoryTabs() {
    let html = `
        <button class="category-tab active" data-category="all">
            <i class="fas fa-globe"></i> All Topics
            <span class="count">${AppState.topics.length}</span>
        </button>
    `;
    
    for (const [key, category] of Object.entries(UPSCData.categories)) {
        const count = AppState.topics.filter(t => t.categoryKey === key).length;
        html += `
            <button class="category-tab" data-category="${key}">
                ${category.icon} ${category.name}
                <span class="count">${count}</span>
            </button>
        `;
    }
    
    DOM.categoryTabs.innerHTML = html;
}

function renderTopics() {
    if (AppState.filteredTopics.length === 0) {
        DOM.topicsGrid.innerHTML = `
            <div class="no-results">
                <i class="fas fa-search" style="font-size: 3rem; color: var(--text-muted); margin-bottom: 20px;"></i>
                <h3>No topics found</h3>
                <p>Try a different search term or category</p>
            </div>
        `;
        return;
    }
    
    let html = '';
    
    AppState.filteredTopics.forEach((topic, index) => {
        const isCompleted = AppState.completed.includes(topic.id);
        const isBookmarked = AppState.bookmarked.includes(topic.id);
        const color = getTopicColor(topic.theme || topic.categoryKey);
        
        html += `
            <div class="topic-card ${isCompleted ? 'completed' : ''}" 
                 data-index="${index}"
                 style="--card-color: ${color.main}; --card-color-light: ${color.light};">
                <div class="card-header">
                    <div class="card-icon">${topic.icon || '📚'}</div>
                    <div class="card-title">
                        <h3>${topic.title}</h3>
                        <span>${topic.subcategoryName}</span>
                    </div>
                </div>
                <div class="card-preview">
                    ${(topic.tags || []).slice(0, 3).map(tag => `
                        <span class="preview-tag">${tag}</span>
                    `).join('')}
                </div>
                <div class="card-footer">
                    <div class="difficulty">
                        ${[1,2,3].map(i => `
                            <span class="${i <= (topic.difficulty || 2) ? 'active' : ''}"></span>
                        `).join('')}
                    </div>
                    <button class="card-action">Learn →</button>
                </div>
            </div>
        `;
    });
    
    DOM.topicsGrid.innerHTML = html;
}

function getTopicColor(theme) {
    const colors = {
        geomorphology: { main: '#92400e', light: '#fbbf24' },
        climatology: { main: '#0369a1', light: '#38bdf8' },
        oceanography: { main: '#1e40af', light: '#60a5fa' },
        biogeography: { main: '#166534', light: '#4ade80' },
        physical: { main: '#059669', light: '#34d399' },
        india: { main: '#ea580c', light: '#fb923c' },
        human: { main: '#7c3aed', light: '#a78bfa' },
        economic: { main: '#0891b2', light: '#22d3ee' },
        environment: { main: '#16a34a', light: '#4ade80' },
        default: { main: '#4f46e5', light: '#818cf8' }
    };
    
    return colors[theme] || colors.default;
}

function updateStats() {
    DOM.totalTopics.textContent = AppState.topics.length;
    DOM.completedTopics.textContent = AppState.completed.length;
    DOM.bookmarkedTopics.textContent = AppState.bookmarked.length;
    DOM.streakDays.textContent = AppState.streak;
    
    // Update progress ring
    const progress = AppState.topics.length > 0 
        ? Math.round((AppState.completed.length / AppState.topics.length) * 100) 
        : 0;
    
    DOM.progressFill.setAttribute('stroke-dasharray', `${progress}, 100`);
    DOM.progressText.textContent = `${progress}%`;
}

function updateStreak() {
    const today = new Date().toDateString();
    const yesterday = new Date(Date.now() - 86400000).toDateString();
    
    if (AppState.lastVisit === today) {
        // Already visited today
        return;
    } else if (AppState.lastVisit === yesterday) {
        // Streak continues
        AppState.streak++;
    } else if (AppState.lastVisit !== '') {
        // Streak broken
        AppState.streak = 1;
    } else {
        // First visit
        AppState.streak = 1;
    }
    
    AppState.lastVisit = today;
    localStorage.setItem('upsc_streak', AppState.streak);
    localStorage.setItem('upsc_lastVisit', today);
}

// ===== MODAL FUNCTIONS =====
function openModal(index) {
    const topic = AppState.filteredTopics[index];
    AppState.currentTopicIndex = index;
    
    const color = getTopicColor(topic.theme || topic.categoryKey);
    
    // Set modal header
    document.getElementById('modalIcon').textContent = topic.icon || '📚';
    document.getElementById('modalTitle').textContent = topic.title;
    document.getElementById('modalCategory').textContent = topic.categoryName;
    document.getElementById('modalDifficulty').textContent = 
        ['Easy', 'Medium', 'Hard'][topic.difficulty - 1] || 'Medium';
    
    // Set header color
    document.getElementById('modalHeader').style.background = 
        `linear-gradient(135deg, ${color.main}, ${color.light})`;
    
    // Update action buttons
    updateModalActions(topic.id);
    
    // Render content
    renderModalContent(topic);
    
    // Show modal
    DOM.modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Activate first section
    document.querySelector('.modal-nav-btn').click();
}

function closeModal() {
    DOM.modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
}

function updateModalActions(topicId) {
    const bookmarkBtn = document.getElementById('bookmarkBtn');
    const completeBtn = document.getElementById('completeBtn');
    
    if (AppState.bookmarked.includes(topicId)) {
        bookmarkBtn.classList.add('active');
        bookmarkBtn.innerHTML = '<i class="fas fa-bookmark"></i>';
    } else {
        bookmarkBtn.classList.remove('active');
        bookmarkBtn.innerHTML = '<i class="far fa-bookmark"></i>';
    }
    
    if (AppState.completed.includes(topicId)) {
        completeBtn.classList.add('active');
        completeBtn.innerHTML = '<i class="fas fa-check-circle"></i>';
    } else {
        completeBtn.classList.remove('active');
        completeBtn.innerHTML = '<i class="far fa-check-circle"></i>';
    }
}

function renderModalContent(topic) {
    const content = document.getElementById('modalContent');
    
    content.innerHTML = `
        <!-- Mind Map Section -->
        <div class="content-section active" data-section="mindmap">
            ${renderMindMap(topic)}
        </div>
        
        <!-- Memory Hooks Section -->
        <div class="content-section" data-section="memory">
            ${renderMemoryHooks(topic)}
        </div>
        
        <!-- Concepts Section -->
        <div class="content-section" data-section="concepts">
            ${renderConcepts(topic)}
        </div>
        
        <!-- Quick Facts Section -->
        <div class="content-section" data-section="facts">
            ${renderFacts(topic)}
        </div>
        
        <!-- UPSC Traps Section -->
        <div class="content-section" data-section="traps">
            ${renderTraps(topic)}
        </div>
        
        <!-- Revision Section -->
        <div class="content-section" data-section="revision">
            ${renderRevision(topic)}
        </div>
    `;
}

function renderMindMap(topic) {
    if (!topic.mindMap) return '<p>Mind map not available</p>';
    
    const branches = topic.mindMap.branches || [];
    
    return `
        <div class="mindmap-container">
            <div class="mindmap-center">
                ${topic.icon || '📚'} ${topic.mindMap.central || topic.title}
            </div>
            <div class="mindmap-branches">
                ${branches.map((branch, i) => `
                    <div class="mindmap-branch" style="--branch-color: ${getBranchColor(i)}">
                        <div class="branch-title">
                            <i class="fas fa-angle-right"></i>
                            ${branch.label}
                        </div>
                        <div class="branch-items">
                            ${branch.items.map(item => `
                                <div class="branch-item">${item}</div>
                            `).join('')}
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

function getBranchColor(index) {
    const colors = ['#ef4444', '#f59e0b', '#10b981', '#3b82f6', '#8b5cf6', '#ec4899'];
    return colors[index % colors.length];
}

function renderMemoryHooks(topic) {
    if (!topic.memoryHooks || topic.memoryHooks.length === 0) {
        return '<p>Memory hooks not available</p>';
    }
    
    return `
        <div class="memory-hooks">
            ${topic.memoryHooks.map((hook, i) => `
                <div class="memory-card" style="--memory-color: ${getBranchColor(i)}">
                    <span class="memory-type">${hook.type}</span>
                    <div class="memory-content">
                        <h4>${hook.title}</h4>
                        <p>${hook.content}</p>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
}

function renderConcepts(topic) {
    if (!topic.concepts || topic.concepts.length === 0) {
        return '<p>Concepts not available</p>';
    }
    
    return `
        <div class="concept-grid">
            ${topic.concepts.map((concept, i) => `
                <div class="concept-card">
                    <div class="concept-number">${i + 1}</div>
                    <h4>${concept.title}</h4>
                    <p>${concept.content}</p>
                </div>
            `).join('')}
        </div>
    `;
}

function renderFacts(topic) {
    if (!topic.quickFacts || topic.quickFacts.length === 0) {
        return '<p>Quick facts not available</p>';
    }
    
    return `
        <div class="facts-list">
            ${topic.quickFacts.map(fact => `
                <div class="fact-item">
                    <i class="fas fa-bolt fact-icon"></i>
                    <span class="fact-text">${fact}</span>
                </div>
            `).join('')}
        </div>
    `;
}

function renderTraps(topic) {
    if (!topic.upscTraps || topic.upscTraps.length === 0) {
        return '<p>UPSC traps not available</p>';
    }
    
    return `
        <div class="traps-container">
            ${topic.upscTraps.map(trap => `
                <div class="trap-card">
                    <div class="trap-header">
                        <i class="fas fa-exclamation-triangle"></i>
                        <h4>${trap.title}</h4>
                    </div>
                    <div class="trap-wrong">
                        <i class="fas fa-times-circle"></i>
                        <p><strong>Common Mistake:</strong> ${trap.wrong}</p>
                    </div>
                    <div class="trap-correct">
                        <i class="fas fa-check-circle"></i>
                        <p><strong>Correct Understanding:</strong> ${trap.correct}</p>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
}

function renderRevision(topic) {
    if (!topic.revision || topic.revision.length === 0) {
        return '<p>Revision points not available</p>';
    }
    
    return `
        <div class="revision-box">
            <h3 class="revision-title">
                <i class="fas fa-compress-arrows-alt"></i>
                Super Fast Revision
            </h3>
            <div class="revision-points">
                ${topic.revision.map(point => `
                    <div class="revision-point">
                        <i class="fas fa-star"></i>
                        <span>${point}</span>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

// ===== EVENT LISTENERS =====
function setupEventListeners() {
    // Category tabs
    DOM.categoryTabs.addEventListener('click', (e) => {
        const tab = e.target.closest('.category-tab');
        if (!tab) return;
        
        document.querySelectorAll('.category-tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        
        AppState.currentCategory = tab.dataset.category;
        filterTopics();
    });
    
    // Nav buttons
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            AppState.currentFilter = btn.dataset.filter;
            filterTopics();
        });
    });
    
    // Search
    DOM.searchInput.addEventListener('input', debounce(() => {
        filterTopics();
    }, 300));
    
    // Topic cards
    DOM.topicsGrid.addEventListener('click', (e) => {
        const card = e.target.closest('.topic-card');
        if (card) {
            openModal(parseInt(card.dataset.index));
        }
    });
    
    // Modal close
    DOM.modalClose.addEventListener('click', closeModal);
    DOM.modalOverlay.addEventListener('click', (e) => {
        if (e.target === DOM.modalOverlay) closeModal();
    });
    
    // Modal navigation
    document.querySelector('.modal-nav').addEventListener('click', (e) => {
        const btn = e.target.closest('.modal-nav-btn');
        if (!btn) return;
        
        document.querySelectorAll('.modal-nav-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        document.querySelectorAll('.content-section').forEach(s => s.classList.remove('active'));
        document.querySelector(`.content-section[data-section="${btn.dataset.section}"]`).classList.add('active');
    });
    
    // Bookmark button
    document.getElementById('bookmarkBtn').addEventListener('click', () => {
        const topic = AppState.filteredTopics[AppState.currentTopicIndex];
        toggleBookmark(topic.id);
    });
    
    // Complete button
    document.getElementById('completeBtn').addEventListener('click', () => {
        const topic = AppState.filteredTopics[AppState.currentTopicIndex];
        toggleComplete(topic.id);
    });
    
    // Previous/Next
    document.getElementById('prevTopic').addEventListener('click', () => {
        if (AppState.currentTopicIndex > 0) {
            openModal(AppState.currentTopicIndex - 1);
        }
    });
    
    document.getElementById('nextTopic').addEventListener('click', () => {
        if (AppState.currentTopicIndex < AppState.filteredTopics.length - 1) {
            openModal(AppState.currentTopicIndex + 1);
        }
    });
    
    // Keyboard
    document.addEventListener('keydown', (e) => {
        if (!DOM.modalOverlay.classList.contains('active')) return;
        
        if (e.key === 'Escape') closeModal();
        if (e.key === 'ArrowLeft') document.getElementById('prevTopic').click();
        if (e.key === 'ArrowRight') document.getElementById('nextTopic').click();
    });
}

// ===== FILTER FUNCTIONS =====
function filterTopics() {
    const search = DOM.searchInput.value.toLowerCase();
    
    AppState.filteredTopics = AppState.topics.filter(topic => {
        // Category filter
        if (AppState.currentCategory !== 'all' && topic.categoryKey !== AppState.currentCategory) {
            return false;
        }
        
        // Type filter (physical, india, human, etc.)
        if (AppState.currentFilter !== 'all') {
            // You can customize this logic based on your categories
        }
        
        // Search filter
        if (search) {
            const searchText = `${topic.title} ${topic.tags?.join(' ')} ${topic.categoryName}`.toLowerCase();
            if (!searchText.includes(search)) return false;
        }
        
        return true;
    });
    
    renderTopics();
}

// ===== UTILITY FUNCTIONS =====
function toggleBookmark(topicId) {
    const index = AppState.bookmarked.indexOf(topicId);
    if (index > -1) {
        AppState.bookmarked.splice(index, 1);
    } else {
        AppState.bookmarked.push(topicId);
    }
    
    localStorage.setItem('upsc_bookmarked', JSON.stringify(AppState.bookmarked));
    updateModalActions(topicId);
    updateStats();
    renderTopics();
}

function toggleComplete(topicId) {
    const index = AppState.completed.indexOf(topicId);
    if (index > -1) {
        AppState.completed.splice(index, 1);
    } else {
        AppState.completed.push(topicId);
    }
    
    localStorage.setItem('upsc_completed', JSON.stringify(AppState.completed));
    updateModalActions(topicId);
    updateStats();
    renderTopics();
}

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Export for debugging
window.AppState = AppState;
