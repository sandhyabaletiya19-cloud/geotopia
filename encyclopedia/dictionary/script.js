/**
 * GEOTOPIA LEXICON - Premium Geography Encyclopedia
 * Version 2.0 - Complete JavaScript Application
 */

// =====================================================
// CONFIGURATION & STATE
// =====================================================

const CONFIG = {
  ITEMS_PER_PAGE: 50,
  SEARCH_DEBOUNCE: 300,
  ANIMATION_DELAY: 50,
  DEFAULT_IMAGE: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80',
  IMAGE_BASE_URL: 'https://images.unsplash.com/'
};

// Image mapping for categories
const CATEGORY_IMAGES = {
  'coastal': 'photo-1507525428034-b723cf961d3e?w=800&q=80',
  'mountains': 'photo-1464822759023-fed622ff2c3b?w=800&q=80',
  'water-bodies': 'photo-1432889490240-84df33d47091?w=800&q=80',
  'weather': 'photo-1534088568595-a066f410bcda?w=800&q=80',
  'biomes': 'photo-1448375240586-882707db888b?w=800&q=80',
  'geology': 'photo-1506905925346-21bda4d32df4?w=800&q=80',
  'landforms': 'photo-1469474968028-56623f02e42e?w=800&q=80',
  'atmosphere': 'photo-1534088568595-a066f410bcda?w=800&q=80',
  'space': 'photo-1462331940025-496dfbfc7564?w=800&q=80',
  'human-geography': 'photo-1449824913935-59a10b8d2000?w=800&q=80',
  'oceanography': 'photo-1518837695005-2083093ee35b?w=800&q=80',
  'glaciology': 'photo-1489549132488-d00b7eee80f1?w=800&q=80',
  'hydrology': 'photo-1432889490240-84df33d47091?w=800&q=80',
  'cartography': 'photo-1524661135-423995f22d0b?w=800&q=80',
  'climatology': 'photo-1504608524841-42fe6f032b4b?w=800&q=80',
  'soil-science': 'photo-1416879595882-3373a0480b5b?w=800&q=80',
  'ecology': 'photo-1441974231531-c6227db76b6e?w=800&q=80',
  'tectonics': 'photo-1518837695005-2083093ee35b?w=800&q=80',
  'geomorphology': 'photo-1506905925346-21bda4d32df4?w=800&q=80',
  'extraterrestrial': 'photo-1462331940025-496dfbfc7564?w=800&q=80'
};

// Category icons
const CATEGORY_ICONS = {
  'coastal': 'fa-water',
  'mountains': 'fa-mountain',
  'water-bodies': 'fa-droplet',
  'weather': 'fa-cloud-sun',
  'biomes': 'fa-tree',
  'geology': 'fa-gem',
  'landforms': 'fa-hill-rockslide',
  'atmosphere': 'fa-wind',
  'space': 'fa-meteor',
  'human-geography': 'fa-city',
  'oceanography': 'fa-fish',
  'glaciology': 'fa-snowflake',
  'hydrology': 'fa-faucet-drip',
  'cartography': 'fa-map',
  'climatology': 'fa-temperature-half',
  'soil-science': 'fa-seedling',
  'ecology': 'fa-leaf',
  'tectonics': 'fa-circle-radiation',
  'geomorphology': 'fa-layer-group',
  'extraterrestrial': 'fa-rocket'
};

// Application State
const state = {
  allTerms: [],
  filteredTerms: [],
  displayedCount: 0,
  currentLetter: null,
  currentCategory: 'all',
  searchQuery: '',
  currentTermIndex: -1,
  isLoading: true
};

// DOM Elements
let elements = {};

// =====================================================
// INITIALIZATION
// =====================================================

document.addEventListener('DOMContentLoaded', init);

async function init() {
  cacheElements();
  setupEventListeners();
  generateAlphabetNav();
  await loadTerms();
  setupInfiniteScroll();
  setupKeyboardNavigation();
  addScrollToTop();
}

function cacheElements() {
  elements = {
    searchInput: document.getElementById('searchInput'),
    alphabetNav: document.getElementById('alphabetNav'),
    categoryFilter: document.getElementById('categoryFilter'),
    termGrid: document.getElementById('termGrid'),
    modal: document.getElementById('termModal'),
    modalClose: document.getElementById('modalClose'),
    prevTerm: document.getElementById('prevTerm'),
    nextTerm: document.getElementById('nextTerm'),
    modalBg: document.getElementById('modalBg'),
    modalCategory: document.getElementById('modalCategory'),
    modalName: document.getElementById('modalName'),
    modalHook: document.getElementById('modalHook'),
    modalDefinition: document.getElementById('modalDefinition'),
    modalType: document.getElementById('modalType'),
    modalLocation: document.getElementById('modalLocation'),
    modalFormation: document.getElementById('modalFormation'),
    modalExample: document.getElementById('modalExample'),
    modalFunFact: document.getElementById('modalFunFact'),
    modalEtymology: document.getElementById('modalEtymology'),
    modalRelated: document.getElementById('modalRelated')
  };
}

function setupEventListeners() {
  // Search with debounce
  let searchTimeout;
  elements.searchInput.addEventListener('input', (e) => {
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(() => {
      state.searchQuery = e.target.value.toLowerCase().trim();
      filterAndRenderTerms();
    }, CONFIG.SEARCH_DEBOUNCE);
  });

  // Category filter
  elements.categoryFilter.addEventListener('change', (e) => {
    state.currentCategory = e.target.value;
    state.currentLetter = null;
    updateAlphabetActiveState();
    filterAndRenderTerms();
  });

  // Modal controls
  elements.modalClose.addEventListener('click', closeModal);
  elements.modal.addEventListener('click', (e) => {
    if (e.target === elements.modal) closeModal();
  });
  elements.prevTerm.addEventListener('click', showPreviousTerm);
  elements.nextTerm.addEventListener('click', showNextTerm);
}

// =====================================================
// DATA LOADING
// =====================================================

async function loadTerms() {
  showLoading();
  
  try {
    // Try to load from terms.json
    const response = await fetch('terms.json');
    if (!response.ok) throw new Error('Failed to load terms.json');
    
    const data = await response.json();
    state.allTerms = data.terms || [];
    
    // Sort alphabetically
    state.allTerms.sort((a, b) => a.name.localeCompare(b.name));
    
    // Populate categories
    populateCategoryFilter();
    
    // Initial render
    filterAndRenderTerms();
    updateStatistics();
    
  } catch (error) {
    console.error('Error loading terms:', error);
    showError();
  }
  
  state.isLoading = false;
}

function showLoading() {
  elements.termGrid.innerHTML = `
    <div class="loading-container">
      <div class="loading-spinner"></div>
      <p class="loading-text">Loading Geography Lexicon...</p>
    </div>
  `;
}

function showError() {
  elements.termGrid.innerHTML = `
    <div class="no-results">
      <i class="fas fa-exclamation-triangle"></i>
      <h3>Unable to Load Terms</h3>
      <p>Please ensure terms.json is in the same directory and try refreshing the page.</p>
    </div>
  `;
}

// =====================================================
// ALPHABET NAVIGATION
// =====================================================

function generateAlphabetNav() {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  
  // Add "All" button
  const allBtn = document.createElement('button');
  allBtn.className = 'alphabet-btn active';
  allBtn.textContent = 'ALL';
  allBtn.dataset.letter = 'all';
  allBtn.addEventListener('click', () => {
    state.currentLetter = null;
    updateAlphabetActiveState('all');
    filterAndRenderTerms();
  });
  elements.alphabetNav.appendChild(allBtn);
  
  // Add letter buttons
  alphabet.forEach(letter => {
    const btn = document.createElement('button');
    btn.className = 'alphabet-btn';
    btn.textContent = letter;
    btn.dataset.letter = letter;
    btn.addEventListener('click', () => {
      state.currentLetter = letter;
      updateAlphabetActiveState(letter);
      filterAndRenderTerms();
    });
    elements.alphabetNav.appendChild(btn);
  });
}

function updateAlphabetActiveState(activeLetter = 'all') {
  const buttons = elements.alphabetNav.querySelectorAll('.alphabet-btn');
  buttons.forEach(btn => {
    btn.classList.remove('active');
    if (btn.dataset.letter === activeLetter || 
        (activeLetter === 'all' && btn.dataset.letter === 'all')) {
      btn.classList.add('active');
    }
  });
}

function updateAlphabetAvailability() {
  const availableLetters = new Set(
    state.filteredTerms.map(term => term.name.charAt(0).toUpperCase())
  );
  
  const buttons = elements.alphabetNav.querySelectorAll('.alphabet-btn');
  buttons.forEach(btn => {
    if (btn.dataset.letter === 'all') {
      btn.classList.remove('disabled');
    } else {
      btn.classList.toggle('disabled', !availableLetters.has(btn.dataset.letter));
    }
  });
}

// =====================================================
// CATEGORY FILTER
// =====================================================

function populateCategoryFilter() {
  const categories = new Set(state.allTerms.map(term => term.category));
  const sortedCategories = Array.from(categories).sort();
  
  sortedCategories.forEach(category => {
    const option = document.createElement('option');
    option.value = category;
    option.textContent = formatCategoryName(category);
    elements.categoryFilter.appendChild(option);
  });
}

function formatCategoryName(category) {
  return category
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

// =====================================================
// FILTERING & RENDERING
// =====================================================

function filterAndRenderTerms() {
  // Apply filters
  state.filteredTerms = state.allTerms.filter(term => {
    // Category filter
    if (state.currentCategory !== 'all' && term.category !== state.currentCategory) {
      return false;
    }
    
    // Letter filter
    if (state.currentLetter && !term.name.toUpperCase().startsWith(state.currentLetter)) {
      return false;
    }
    
    // Search filter
    if (state.searchQuery) {
      const searchFields = [
        term.name,
        term.hook,
        term.definition,
        term.category,
        term.type,
        ...(term.relatedTerms || [])
      ].join(' ').toLowerCase();
      
      if (!searchFields.includes(state.searchQuery)) {
        return false;
      }
    }
    
    return true;
  });
  
  // Update UI
  updateAlphabetAvailability();
  renderTerms();
  updateStatistics();
}

function renderTerms(append = false) {
  if (!append) {
    state.displayedCount = 0;
    elements.termGrid.innerHTML = '';
  }
  
  if (state.filteredTerms.length === 0) {
    showNoResults();
    return;
  }
  
  // Get next batch
  const startIndex = state.displayedCount;
  const endIndex = Math.min(startIndex + CONFIG.ITEMS_PER_PAGE, state.filteredTerms.length);
  const termsToRender = state.filteredTerms.slice(startIndex, endIndex);
  
  // Group by letter for headings
  let currentLetter = '';
  const fragment = document.createDocumentFragment();
  
  termsToRender.forEach((term, index) => {
    const termLetter = term.name.charAt(0).toUpperCase();
    
    // Add letter heading if new letter and not searching
    if (!state.searchQuery && termLetter !== currentLetter) {
      currentLetter = termLetter;
      
      // Only add heading if this is the first term with this letter overall
      const isFirstOfLetter = state.filteredTerms.findIndex(
        t => t.name.charAt(0).toUpperCase() === termLetter
      ) === startIndex + index;
      
      if (isFirstOfLetter || !append) {
        const heading = document.createElement('div');
        heading.className = 'letter-heading';
        heading.innerHTML = `<h2>${termLetter}</h2>`;
        fragment.appendChild(heading);
      }
    }
    
    // Create card
    const card = createTermCard(term, startIndex + index);
    card.style.animationDelay = `${(index % 10) * CONFIG.ANIMATION_DELAY}ms`;
    fragment.appendChild(card);
  });
  
  elements.termGrid.appendChild(fragment);
  state.displayedCount = endIndex;
  
  // Add load more button if needed
  if (state.displayedCount < state.filteredTerms.length) {
    addLoadMoreButton();
  }
}

function createTermCard(term, index) {
  const card = document.createElement('article');
  card.className = 'term-card';
  card.dataset.index = index;
  
  const imageUrl = getImageUrl(term);
  const icon = CATEGORY_ICONS[term.category] || 'fa-globe';
  
  card.innerHTML = `
    <div class="card-background" style="background-image: url('${imageUrl}')"></div>
    <div class="card-content">
      <span class="card-category ${term.category}">
        <i class="fas ${icon}"></i>
        ${formatCategoryName(term.category)}
      </span>
      <h3 class="card-title">${highlightSearchTerm(term.name)}</h3>
      <p class="card-hook">${highlightSearchTerm(term.hook)}</p>
      <div class="card-footer">
        <span class="card-type">${term.type || 'Geographic Term'}</span>
        <span class="card-arrow">
          <i class="fas fa-arrow-right"></i>
        </span>
      </div>
    </div>
  `;
  
  card.addEventListener('click', () => openModal(index));
  
  return card;
}

function getImageUrl(term) {
  const categoryImage = CATEGORY_IMAGES[term.category];
  if (categoryImage) {
    return CONFIG.IMAGE_BASE_URL + categoryImage;
  }
  return CONFIG.DEFAULT_IMAGE;
}

function highlightSearchTerm(text) {
  if (!state.searchQuery || !text) return text;
  
  const regex = new RegExp(`(${escapeRegex(state.searchQuery)})`, 'gi');
  return text.replace(regex, '<span class="highlight">$1</span>');
}

function escapeRegex(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function showNoResults() {
  elements.termGrid.innerHTML = `
    <div class="no-results">
      <i class="fas fa-search"></i>
      <h3>No Terms Found</h3>
      <p>Try adjusting your search or filters to find what you're looking for.</p>
    </div>
  `;
}

function addLoadMoreButton() {
  const existing = document.querySelector('.load-more-container');
  if (existing) existing.remove();
  
  const container = document.createElement('div');
  container.className = 'load-more-container';
  
  const remaining = state.filteredTerms.length - state.displayedCount;
  
  container.innerHTML = `
    <button class="load-more-btn">
      Load More (${remaining} remaining)
    </button>
  `;
  
  container.querySelector('button').addEventListener('click', () => {
    container.remove();
    renderTerms(true);
  });
  
  elements.termGrid.appendChild(container);
}

// =====================================================
// MODAL FUNCTIONALITY
// =====================================================

  function openModal(index) {
  state.currentTermIndex = index;
  const term = state.filteredTerms[index];
  
  if (!term) return;
  
  // Set background
  const imageUrl = getImageUrl(term);
  elements.modalBg.style.backgroundImage = `url('${imageUrl}')`;
  
  // Set content
  elements.modalCategory.innerHTML = `
    <i class="fas ${CATEGORY_ICONS[term.category] || 'fa-globe'}"></i>
    ${formatCategoryName(term.category)}
  `;
  elements.modalName.textContent = term.name;
  elements.modalHook.textContent = term.hook;
  elements.modalDefinition.textContent = term.definition;
  
  // Quick facts
  elements.modalType.innerHTML = `<span class="fact-label">Type</span>${term.type || 'N/A'}`;
  elements.modalLocation.innerHTML = `<span class="fact-label">Location</span>${term.location || 'N/A'}`;
  elements.modalFormation.innerHTML = `<span class="fact-label">Formation</span>${term.formation || 'N/A'}`;
  elements.modalExample.innerHTML = `<span class="fact-label">Examples</span>${term.example || 'N/A'}`;
  
  // Fun fact
  elements.modalFunFact.textContent = term.funFact || 'No fun fact available.';
  
  // Etymology
  elements.modalEtymology.textContent = term.etymology || 'Etymology unknown.';
  
  // Related terms
  renderRelatedTerms(term.relatedTerms || []);
  
  // Update navigation buttons
  updateModalNavigation();
  
  // Show modal
  elements.modal.classList.add('active');
  document.body.style.overflow = 'hidden';
  
  // Trigger animation
  requestAnimationFrame(() => {
    elements.modal.classList.add('visible');
  });
}

function renderRelatedTerms(relatedTerms) {
  if (!relatedTerms.length) {
    elements.modalRelated.innerHTML = '';
    return;
  }
  
  elements.modalRelated.innerHTML = `
    <p class="related-terms-title">Related Terms</p>
    <div class="related-terms-list">
      ${relatedTerms.map(term => `
        <button class="related-term-pill" data-term="${term}">${term}</button>
      `).join('')}
    </div>
  `;
  
  // Add click handlers for related terms
  elements.modalRelated.querySelectorAll('.related-term-pill').forEach(pill => {
    pill.addEventListener('click', () => {
      const termName = pill.dataset.term;
      searchAndOpenTerm(termName);
    });
  });
}

function searchAndOpenTerm(termName) {
  // Find the term in all terms
  const index = state.allTerms.findIndex(
    t => t.name.toLowerCase() === termName.toLowerCase() ||
         t.id === termName.toLowerCase().replace(/\s+/g, '-')
  );
  
  if (index !== -1) {
    // Reset filters to show all terms
    state.currentCategory = 'all';
    state.currentLetter = null;
    state.searchQuery = '';
    elements.searchInput.value = '';
    elements.categoryFilter.value = 'all';
    updateAlphabetActiveState('all');
    
    // Filter terms
    state.filteredTerms = [...state.allTerms];
    
    // Find the new index in filtered terms
    const filteredIndex = state.filteredTerms.findIndex(
      t => t.name.toLowerCase() === termName.toLowerCase()
    );
    
    if (filteredIndex !== -1) {
      openModal(filteredIndex);
    }
  }
}

function closeModal() {
  elements.modal.classList.remove('visible');
  
  setTimeout(() => {
    elements.modal.classList.remove('active');
    document.body.style.overflow = '';
  }, 300);
}

function updateModalNavigation() {
  elements.prevTerm.disabled = state.currentTermIndex <= 0;
  elements.nextTerm.disabled = state.currentTermIndex >= state.filteredTerms.length - 1;
}

function showPreviousTerm() {
  if (state.currentTermIndex > 0) {
    openModal(state.currentTermIndex - 1);
  }
}

function showNextTerm() {
  if (state.currentTermIndex < state.filteredTerms.length - 1) {
    openModal(state.currentTermIndex + 1);
  }
}

// =====================================================
// INFINITE SCROLL
// =====================================================

function setupInfiniteScroll() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !state.isLoading) {
        const loadMoreBtn = document.querySelector('.load-more-btn');
        if (loadMoreBtn) {
          loadMoreBtn.click();
        }
      }
    });
  }, {
    rootMargin: '200px'
  });
  
  // Observe the load more container when it appears
  const mutationObserver = new MutationObserver((mutations) => {
    mutations.forEach(mutation => {
      mutation.addedNodes.forEach(node => {
        if (node.classList && node.classList.contains('load-more-container')) {
          observer.observe(node);
        }
      });
    });
  });
  
  mutationObserver.observe(elements.termGrid, { childList: true });
}

// =====================================================
// KEYBOARD NAVIGATION
// =====================================================

function setupKeyboardNavigation() {
  document.addEventListener('keydown', (e) => {
    // Close modal on Escape
    if (e.key === 'Escape' && elements.modal.classList.contains('active')) {
      closeModal();
      return;
    }
    
    // Navigate modal with arrow keys
    if (elements.modal.classList.contains('active')) {
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        showPreviousTerm();
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        showNextTerm();
      }
      return;
    }
    
    // Focus search on Ctrl+K or /
    if ((e.ctrlKey && e.key === 'k') || (e.key === '/' && document.activeElement !== elements.searchInput)) {
      e.preventDefault();
      elements.searchInput.focus();
      elements.searchInput.select();
    }
  });
}

// =====================================================
// SCROLL TO TOP
// =====================================================

function addScrollToTop() {
  const button = document.createElement('button');
  button.className = 'scroll-top';
  button.innerHTML = '<i class="fas fa-chevron-up"></i>';
  button.setAttribute('aria-label', 'Scroll to top');
  
  button.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
  
  document.body.appendChild(button);
  
  // Show/hide based on scroll position
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        if (window.scrollY > 500) {
          button.classList.add('visible');
        } else {
          button.classList.remove('visible');
        }
        ticking = false;
      });
      ticking = true;
    }
  });
}

// =====================================================
// STATISTICS
// =====================================================

function updateStatistics() {
  // Remove existing stats bar if present
  const existingStats = document.querySelector('.stats-bar');
  if (existingStats) existingStats.remove();
  
  // Create stats bar
  const statsBar = document.createElement('div');
  statsBar.className = 'stats-bar';
  
  const totalTerms = state.allTerms.length;
  const filteredCount = state.filteredTerms.length;
  const categories = new Set(state.allTerms.map(t => t.category)).size;
  
  statsBar.innerHTML = `
    <div class="stat-item">
      <span class="stat-value">${totalTerms.toLocaleString()}</span>
      <span class="stat-label">Total Terms</span>
    </div>
    <div class="stat-item">
      <span class="stat-value">${filteredCount.toLocaleString()}</span>
      <span class="stat-label">Showing</span>
    </div>
    <div class="stat-item">
      <span class="stat-value">${categories}</span>
      <span class="stat-label">Categories</span>
    </div>
  `;
  
  // Insert after header
  const header = document.querySelector('.header');
  header.appendChild(statsBar);
}

// =====================================================
// UTILITY FUNCTIONS
// =====================================================

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

function throttle(func, limit) {
  let inThrottle;
  return function(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

// =====================================================
// SERVICE WORKER REGISTRATION (Optional PWA)
// =====================================================

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then(registration => {
        console.log('SW registered:', registration.scope);
      })
      .catch(error => {
        console.log('SW registration failed:', error);
      });
  });
}

// =====================================================
// EXPORTS (if using modules)
// =====================================================

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    state,
    openModal,
    closeModal,
    filterAndRenderTerms
  };
}
