/* ============================================
   GEOTOPIA CORE ENGINE
   Handles: Search | Rendering | Map | Pro System
   ============================================ */

// ===== GLOBAL STATE =====
let lexiconData = [];      // Free data
let proLexiconData = [];   // Paid data
let fuseInstance = null;   // Search engine
let mapInstance = null;    // Leaflet map
let currentEntry = null;
let isProUser = false;     // Change to true after Razorpay/Stripe success (localStorage)

// ===== DOM ELEMENTS =====
const searchInput = document.getElementById('searchInput');
const resultsList = document.getElementById('resultsList');
const resultCount = document.getElementById('resultCount');
const definitionContent = document.getElementById('definitionContent');
const welcomeState = document.querySelector('.welcome-state');
const proModal = document.getElementById('proModal');
const modalClose = document.getElementById('modalClose');
const modalBackdrop = document.getElementById('modalBackdrop');
const quickFilters = document.querySelectorAll('.filter-btn');
const randomTermBtn = document.getElementById('randomTermBtn');
const voiceBtn = document.getElementById('voiceBtn');

// ===== INIT APPLICATION =====
document.addEventListener('DOMContentLoaded', async () => {
    await loadData();
    initSearch();
    initMap();
    initEventListeners();
    checkProStatus();
    loadPopularTerms();
});

// 1. LOAD DATA (This is critical - we fetch our JSON files)
async function loadData() {
    try {
        const [lexicon, proLexicon] = await Promise.all([
            fetch('lexicon.json').then(res => res.json()),
            fetch('pro-lexicon.json').then(res => res.json())
        ]);
        
        lexiconData = lexicon;
        proLexiconData = proLexicon;
        
        console.log(`✅ Loaded ${lexiconData.length} free terms, ${proLexiconData.length} pro terms`);
    } catch (error) {
        console.error('❌ Error loading data:', error);
        resultsList.innerHTML = '<p style="color: red;">Error loading dictionary data.</p>';
    }
}

// 2. INITIALIZE FUZZY SEARCH (Fuse.js)
function initSearch() {
    const allData = [...lexiconData, ...proLexiconData];
    
    const options = {
        keys: ['title', 'type', 'keywords'],
        threshold: 0.3,  // 0 = exact match, 1 = match anything
        includeScore: true,
        minMatchCharLength: 2
    };
    
    fuseInstance = new Fuse(allData, options);
}

// 3. INITIALIZE MAP (Leaflet.js)
function initMap() {
    mapInstance = L.map('map', {
        zoomControl: false,
        attributionControl: false
    }).setView([20, 0], 2); // World view
    
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
        attribution: '&copy; OpenStreetMap'
    }).addTo(mapInstance);
}

// 4. EVENT LISTENERS
function initEventListeners() {
    // Search input
    searchInput.addEventListener('input', debounce(handleSearch, 300));
    
    // Voice search
    voiceBtn.addEventListener('click', initVoiceSearch);
    
    // Filter buttons
    quickFilters.forEach(btn => {
        btn.addEventListener('click', () => handleFilter(btn));
    });
    
    // Random term
    randomTermBtn.addEventListener('click', showRandomTerm);
    
    // Modal close
    modalClose.addEventListener('click', closeProModal);
    modalBackdrop.addEventListener('click', closeProModal);
    
    // Map fullscreen
    document.getElementById('mapFullscreen')?.addEventListener('click', toggleMapFullscreen);
}

// ===== SEARCH FUNCTIONALITY =====
function handleSearch(e) {
    const query = e.target.value.trim();
    
    if (query.length === 0) {
        loadPopularTerms();
        return;
    }
    
    if (query.length < 2) return; // Don't search for single letters
    
    const results = fuseInstance.search(query).slice(0, 20); // Top 20 results
    renderSearchResults(results.map(r => r.item));
}

function renderSearchResults(results) {
    resultCount.textContent = `${results.length} results`;
    
    if (results.length === 0) {
        resultsList.innerHTML = '<p style="padding: 20px; text-align: center; color: #999;">No results found. Try another term.</p>';
        return;
    }
    
    resultsList.innerHTML = results.map(item => `
        <div class="result-item ${item.pro && !isProUser ? 'pro-locked' : ''}" 
             data-id="${item.id}" 
             data-pro="${item.pro}">
            <div class="result-title">
                ${item.title}
                ${item.pro && !isProUser ? '<span class="pro-lock">🔒</span>' : ''}
            </div>
            <div class="result-type">${item.type}</div>
        </div>
    `).join('');
    
    // Add click listeners to results
    document.querySelectorAll('.result-item').forEach(el => {
        el.addEventListener('click', () => {
            const id = el.dataset.id;
            const isPro = el.dataset.pro === 'true';
            showDefinition(id, isPro);
            
            // Update active state
            document.querySelectorAll('.result-item').forEach(r => r.classList.remove('active'));
            el.classList.add('active');
        });
    });
}

// Load popular terms on start
function loadPopularTerms() {
    const popular = [...lexiconData].sort(() => 0.5 - Math.random()).slice(0, 10);
    renderSearchResults(popular);
    resultCount.textContent = 'Popular';
}

// ===== DEFINITION RENDERING =====
async function showDefinition(id, isProEntry) {
    // PAYWALL CHECK
    if (isProEntry && !isProUser) {
        showProModal();
        return;
    }
    
    // Find entry in both datasets
    let entry = lexiconData.find(e => e.id === id) || proLexiconData.find(e => e.id === id);
    if (!entry) return;
    
    currentEntry = entry;
    
    // Hide welcome, show content
    welcomeState.style.display = 'none';
    definitionContent.style.display = 'block';
    
    // Render definition
    definitionContent.innerHTML = `
        <div class="def-header">
            <h1 class="def-title">${entry.title}</h1>
            <div class="def-meta">
                <span class="meta-badge">${entry.type}</span>
                ${entry.pro ? '<span class="meta-badge pro-badge-inline">PRO</span>' : ''}
                ${entry.region ? `<span class="meta-badge">${entry.region}</span>` : ''}
            </div>
        </div>
        
        <div class="def-body">
            <!-- PRONUNCIATION -->
            ${entry.pronunciation ? `
                <div class="pronunciation-box">
                    <strong>Pronunciation:</strong> /${entry.pronunciation}/ 
                    <button onclick="speakText('${entry.title}')">🔊</button>
                </div>
            ` : ''}
            
            <!-- SHORT DEFINITION -->
            <p class="def-short"><strong>${entry.content.short}</strong></p>
            
            <!-- LONG DEFINITION -->
            <h3>Overview</h3>
            <div>${entry.content.long}</div>
            
            <!-- ETYMOLOGY (PRO CONTENT) -->
            ${entry.content.etymology ? `
                <div class="${entry.pro && !isProUser ? 'pro-blur' : ''}">
                    <h3>Etymology & Origin</h3>
                    <p>${entry.content.etymology}</p>
                    ${entry.pro && !isProUser ? '<div class="unlock-overlay"><button onclick="showProModal()">🔓 Unlock with Pro</button></div>' : ''}
                </div>
            ` : ''}
            
            <!-- FACTS -->
            ${entry.content.facts ? `
                <h3>Key Facts</h3>
                <ul>
                    ${entry.content.facts.map(fact => `<li>${fact}</li>`).join('')}
                </ul>
            ` : ''}
            
            <!-- MEDIA -->
            ${entry.media ? `
                <h3>Visual Reference</h3>
                <img src="${entry.media}" alt="${entry.title}" style="width: 100%; border-radius: 12px; margin-top: 10px;">
            ` : ''}
        </div>
    `;
    
    // Update map if coordinates exist
    if (entry.coords && entry.coords.length === 2) {
        updateMap(entry.coords, entry.title);
    }
}

// ===== MAP FUNCTIONALITY =====
function updateMap(coords, title) {
    mapInstance.setView(coords, 6);
    
    // Clear existing markers
    mapInstance.eachLayer(layer => {
        if (layer instanceof L.Marker) {
            mapInstance.removeLayer(layer);
        }
    });
    
    // Add new marker
    L.marker(coords)
        .addTo(mapInstance)
        .bindPopup(`<b>${title}</b>`)
        .openPopup();
}

function toggleMapFullscreen() {
    const mapContainer = document.querySelector('.map-container');
    mapContainer.classList.toggle('fullscreen');
    setTimeout(() => mapInstance.invalidateSize(), 300);
}

// ===== PRO SYSTEM =====
function showProModal() {
    proModal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function closeProModal() {
    proModal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

function checkProStatus() {
    // In production: check with your backend after payment
    isProUser = localStorage.getItem('geotopiaPro') === 'true';
    
    if (isProUser) {
        document.querySelectorAll('.pro-filter').forEach(el => {
            el.textContent = '⭐ Pro Active';
            el.style.pointerEvents = 'none';
        });
    }
}

// Call this after successful payment
function activatePro() {
    isProUser = true;
    localStorage.setItem('geotopiaPro', 'true');
    location.reload(); // Reload to show pro content
}

// ===== FILTER SYSTEM =====
function handleFilter(btn) {
    quickFilters.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    
    const filter = btn.dataset.filter;
    
    if (filter === 'pro') {
        if (!isProUser) {
            showProModal();
            return;
        }
        renderSearchResults(proLexiconData.slice(0, 20));
        return;
    }
    
    if (filter === 'all') {
        loadPopularTerms();
        return;
    }
    
    const filtered = lexiconData.filter(item => item.type === filter);
    renderSearchResults(filtered);
}

// ===== UTILITY FUNCTIONS =====
function showRandomTerm() {
    const allData = isProUser ? [...lexiconData, ...proLexiconData] : lexiconData;
    const random = allData[Math.floor(Math.random() * allData.length)];
    showDefinition(random.id, random.pro);
}

function speakText(text) {
    if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'en-US';
        speechSynthesis.speak(utterance);
    }
}

function initVoiceSearch() {
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        const recognition = new SpeechRecognition();
        
        recognition.lang = 'en-US';
        recognition.onresult = (event) => {
            searchInput.value = event.results[0][0].transcript;
            handleSearch({ target: searchInput });
        };
        
        recognition.start();
        voiceBtn.textContent = '🎙️';
        
        recognition.onend = () => {
            voiceBtn.textContent = '🎤';
        };
    } else {
        alert('Voice search not supported in this browser');
    }
}

// Debounce function to optimize search performance
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
