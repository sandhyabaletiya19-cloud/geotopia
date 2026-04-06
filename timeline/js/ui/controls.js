/**
 * GEOTOPIA - UI Controls
 * Handles buttons, modals, search functionality
 */

const UIControls = (function() {
    'use strict';

    // DOM Elements cache
    let elements = {};

    /**
     * Initialize all UI controls
     */
    function init() {
        console.log('🎮 Initializing UI Controls...');
        
        cacheElements();
        bindEvents();
        initModals();
        initSearch();
        initMapControls();
        initTimelineControls();
        initKeyboardShortcuts();
        
        console.log('✅ UI Controls initialized');
    }

    /**
     * Cache DOM elements for performance
     */
    function cacheElements() {
        elements = {
            // Header buttons
            btnSearch: document.getElementById('btn-search'),
            btnInfo: document.getElementById('btn-info'),
            btnSettings: document.getElementById('btn-settings'),
            
            // Modals
            searchModal: document.getElementById('search-modal'),
            aboutModal: document.getElementById('about-modal'),
            settingsModal: document.getElementById('settings-modal'),
            modalCloseButtons: document.querySelectorAll('.modal-close'),
            
            // Search
            searchInput: document.getElementById('search-input'),
            searchResults: document.getElementById('search-results'),
            
            // Map controls
            btnZoomIn: document.getElementById('btn-zoom-in'),
            btnZoomOut: document.getElementById('btn-zoom-out'),
            btnResetView: document.getElementById('btn-reset-view'),
            btnToggle3D: document.getElementById('btn-toggle-3d'),
            
            // Timeline controls
            btnPlayPause: document.getElementById('btn-play-pause'),
            btnStepBack: document.getElementById('btn-step-back'),
            btnStepForward: document.getElementById('btn-step-forward'),
            playIcon: document.getElementById('play-icon'),
            speedSlider: document.getElementById('speed-slider'),
            speedDisplay: document.getElementById('speed-display'),
            eraSelect: document.getElementById('era-select'),
            
            // Settings
            qualitySelect: document.getElementById('quality-select'),
            
            // Info panel
            infoClose: document.getElementById('info-close'),
            infoPanel: document.getElementById('info-panel')
        };
    }

    /**
     * Bind all event listeners
     */
    function bindEvents() {
        // Header navigation
        if (elements.btnSearch) {
            elements.btnSearch.addEventListener('click', () => openModal('search-modal'));
        }
        if (elements.btnInfo) {
            elements.btnInfo.addEventListener('click', () => openModal('about-modal'));
        }
        if (elements.btnSettings) {
            elements.btnSettings.addEventListener('click', () => openModal('settings-modal'));
        }
        
        // Info panel close
        if (elements.infoClose) {
            elements.infoClose.addEventListener('click', () => {
                if (elements.infoPanel) {
                    elements.infoPanel.classList.remove('expanded');
                }
            });
        }
        
        // Settings changes
        if (elements.qualitySelect) {
            elements.qualitySelect.addEventListener('change', handleQualityChange);
        }
    }

    /**
     * Initialize modal functionality
     */
    function initModals() {
        // Close button handlers
        elements.modalCloseButtons.forEach(btn => {
            btn.addEventListener('click', function() {
                const modalId = this.getAttribute('data-modal');
                if (modalId) {
                    closeModal(modalId);
                } else {
                    // Close parent modal
                    const modal = this.closest('.modal');
                    if (modal) {
                        closeModal(modal.id);
                    }
                }
            });
        });
        
        // Click outside to close
        document.querySelectorAll('.modal').forEach(modal => {
            modal.addEventListener('click', function(e) {
                if (e.target === this) {
                    closeModal(this.id);
                }
            });
        });
        
        // Escape key to close
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                closeAllModals();
            }
        });
    }

    /**
     * Open a modal by ID
     */
    function openModal(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
            
            // Focus search input if search modal
            if (modalId === 'search-modal' && elements.searchInput) {
                setTimeout(() => elements.searchInput.focus(), 100);
            }
            
            // Update state
            if (typeof state !== 'undefined') {
                state.activeModal = modalId;
            }
        }
    }

    /**
     * Close a modal by ID
     */
    function closeModal(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.classList.remove('active');
            document.body.style.overflow = '';
            
            // Update state
            if (typeof state !== 'undefined') {
                state.activeModal = null;
            }
        }
    }

    /**
     * Close all modals
     */
    function closeAllModals() {
        document.querySelectorAll('.modal.active').forEach(modal => {
            modal.classList.remove('active');
        });
        document.body.style.overflow = '';
        
        if (typeof state !== 'undefined') {
            state.activeModal = null;
        }
    }

    /**
     * Initialize search functionality
     */
    function initSearch() {
        if (!elements.searchInput || !elements.searchResults) return;
        
        let searchTimeout;
        
        elements.searchInput.addEventListener('input', function() {
            clearTimeout(searchTimeout);
            const query = this.value.trim();
            
            if (query.length < 2) {
                elements.searchResults.innerHTML = '<p class="search-hint">Type at least 2 characters to search...</p>';
                return;
            }
            
            // Debounce search
            searchTimeout = setTimeout(() => {
                performSearch(query);
            }, 300);
        });
        
        // Initial hint
        elements.searchResults.innerHTML = '<p class="search-hint">Search for events, civilizations, or time periods...</p>';
    }

    /**
     * Perform search across all data
     */
    function performSearch(query) {
        const results = [];
        const queryLower = query.toLowerCase();
        
        // Search in GEOTOPIA_DATA
        if (typeof GEOTOPIA_DATA !== 'undefined' && typeof GEOTOPIA_DATA.searchEvents === 'function') {
            const dataResults = GEOTOPIA_DATA.searchEvents(query);
            dataResults.forEach(event => {
                results.push({
                    type: 'event',
                    name: event.name || event.event || 'Unknown Event',
                    year: event.year,
                    era: event.eraName || event.era || 'Unknown',
                    data: event
                });
            });
        }
        
        // Search eras
        const eras = ['Hadean', 'Archean', 'Proterozoic', 'Paleozoic', 'Mesozoic', 'Cenozoic'];
        eras.forEach(era => {
            if (era.toLowerCase().includes(queryLower)) {
                results.push({
                    type: 'era',
                    name: era + ' Era',
                    year: getEraStartYear(era),
                    era: era,
                    data: { era }
                });
            }
        });
        
        // Search civilizations
        const civilizations = [
            { name: 'Ancient Egypt', year: -3100 },
            { name: 'Mesopotamia', year: -3500 },
            { name: 'Ancient Greece', year: -800 },
            { name: 'Roman Empire', year: -509 },
            { name: 'Han Dynasty', year: -206 },
            { name: 'Maya Civilization', year: -2000 },
            { name: 'Inca Empire', year: 1438 },
            { name: 'Aztec Empire', year: 1428 },
            { name: 'Byzantine Empire', year: 330 },
            { name: 'Ottoman Empire', year: 1299 },
            { name: 'Mongol Empire', year: 1206 },
            { name: 'British Empire', year: 1583 }
        ];
        
        civilizations.forEach(civ => {
            if (civ.name.toLowerCase().includes(queryLower)) {
                results.push({
                    type: 'civilization',
                    name: civ.name,
                    year: civ.year,
                    era: 'Civilization',
                    data: civ
                });
            }
        });
        
        // Display results
        displaySearchResults(results, query);
    }

    /**
     * Get era start year
     */
    function getEraStartYear(era) {
        const eraYears = {
            'Hadean': -4500000000,
            'Archean': -4000000000,
            'Proterozoic': -2500000000,
            'Paleozoic': -541000000,
            'Mesozoic': -252000000,
            'Cenozoic': -66000000
        };
        return eraYears[era] || 0;
    }

    /**
     * Display search results
     */
    function displaySearchResults(results, query) {
        if (!elements.searchResults) return;
        
        if (results.length === 0) {
            elements.searchResults.innerHTML = `
                <p class="search-no-results">No results found for "${query}"</p>
            `;
            return;
        }
        
        // Sort by relevance (exact match first, then by year)
        results.sort((a, b) => {
            const aExact = a.name.toLowerCase() === query.toLowerCase();
            const bExact = b.name.toLowerCase() === query.toLowerCase();
            if (aExact && !bExact) return -1;
            if (!aExact && bExact) return 1;
            return b.year - a.year;
        });
        
        // Limit to 20 results
        const limitedResults = results.slice(0, 20);
        
        let html = `<p class="search-count">${results.length} result${results.length !== 1 ? 's' : ''} found</p>`;
        
        html += '<ul class="search-results-list">';
        limitedResults.forEach(result => {
            const icon = getResultIcon(result.type);
            const yearDisplay = formatYearShort(result.year);
            
            html += `
                <li class="search-result-item" data-year="${result.year}" data-type="${result.type}">
                    <span class="result-icon">${icon}</span>
                    <div class="result-content">
                        <span class="result-name">${highlightMatch(result.name, query)}</span>
                        <span class="result-meta">${result.era} • ${yearDisplay}</span>
                    </div>
                </li>
            `;
        });
        html += '</ul>';
        
        elements.searchResults.innerHTML = html;
        
        // Bind click events to results
        elements.searchResults.querySelectorAll('.search-result-item').forEach(item => {
            item.addEventListener('click', function() {
                const year = parseInt(this.getAttribute('data-year'));
                goToYear(year);
                closeModal('search-modal');
            });
        });
    }

    /**
     * Get icon for result type
     */
    function getResultIcon(type) {
        const icons = {
            'event': '📅',
            'era': '🌍',
            'civilization': '🏛️',
            'person': '👤',
            'battle': '⚔️',
            'discovery': '🔬'
        };
        return icons[type] || '📌';
    }

    /**
     * Format year for display (short)
     */
    function formatYearShort(year) {
        const absYear = Math.abs(year);
        if (absYear >= 1000000000) {
            return (absYear / 1000000000).toFixed(1) + ' BYA';
        } else if (absYear >= 1000000) {
            return (absYear / 1000000).toFixed(1) + ' MYA';
        } else if (year < 0) {
            return absYear.toLocaleString() + ' BCE';
        } else {
            return year.toLocaleString() + ' CE';
        }
    }

    /**
     * Highlight matching text
     */
    function highlightMatch(text, query) {
        const regex = new RegExp(`(${query})`, 'gi');
        return text.replace(regex, '<mark>$1</mark>');
    }

    /**
     * Go to specific year
     */
    function goToYear(year) {
        if (typeof state !== 'undefined' && typeof state.setYear === 'function') {
            state.setYear(year, true);
        }
    }

    /**
     * Calculate step size based on current year
     */
    function calculateStep() {
        const currentYear = (typeof state !== 'undefined') ? state.currentYear : 0;
        const absYear = Math.abs(currentYear);
        
        if (absYear > 1000000000) return 50000000;   // 50M years
        if (absYear > 100000000) return 5000000;     // 5M years
        if (absYear > 10000000) return 500000;       // 500k years
        if (absYear > 1000000) return 50000;         // 50k years
        if (absYear > 100000) return 5000;           // 5k years
        if (absYear > 10000) return 500;             // 500 years
        if (absYear > 1000) return 50;               // 50 years
        return 5;                                     // 5 years
    }

    /**
     * Step backward in time
     */
    function stepBack() {
        if (typeof state === 'undefined') return;
        
        const step = calculateStep();
        const newYear = state.currentYear - step;
        
        if (newYear >= -4500000000) {
            state.setYear(newYear, true);
        }
        
        console.log('Step back to:', newYear);
    }

    /**
     * Step forward in time
     */
    function stepForward() {
        if (typeof state === 'undefined') return;
        
        const step = calculateStep();
        const newYear = state.currentYear + step;
        
        if (newYear <= 2026) {
            state.setYear(newYear, true);
        }
        
        console.log('Step forward to:', newYear);
    }

    /**
     * Initialize map controls
     */
    function initMapControls() {
        // Zoom In
        if (elements.btnZoomIn) {
            elements.btnZoomIn.addEventListener('click', () => {
                console.log('Zoom in clicked');
                if (window.geotopiaApp && window.geotopiaApp.mapEngine) {
                    const mapEngine = window.geotopiaApp.mapEngine;
                    if (mapEngine.projection) {
                        const currentScale = mapEngine.projection.scale();
                        mapEngine.projection.scale(currentScale * 1.3);
                        mapEngine.render();
                    }
                }
            });
        }
        
        // Zoom Out
        if (elements.btnZoomOut) {
            elements.btnZoomOut.addEventListener('click', () => {
                console.log('Zoom out clicked');
                if (window.geotopiaApp && window.geotopiaApp.mapEngine) {
                    const mapEngine = window.geotopiaApp.mapEngine;
                    if (mapEngine.projection) {
                        const currentScale = mapEngine.projection.scale();
                        mapEngine.projection.scale(currentScale / 1.3);
                        mapEngine.render();
                    }
                }
            });
        }
        
        // Reset View
        if (elements.btnResetView) {
            elements.btnResetView.addEventListener('click', () => {
                console.log('Reset view clicked');
                if (window.geotopiaApp && window.geotopiaApp.mapEngine) {
                    const mapEngine = window.geotopiaApp.mapEngine;
                    if (mapEngine.projection && mapEngine.container) {
                        mapEngine.projection.rotate([0, -20]);
                        mapEngine.projection.scale(
                            Math.min(mapEngine.container.clientWidth, mapEngine.container.clientHeight) / 2.5
                        );
                        mapEngine.render();
                    }
                }
            });
        }
        
        // Toggle 2D/3D
        if (elements.btnToggle3D) {
            elements.btnToggle3D.addEventListener('click', () => {
                console.log('Toggle 3D clicked');
                if (window.geotopiaApp && window.geotopiaApp.mapEngine) {
                    const mapEngine = window.geotopiaApp.mapEngine;
                    const newMode = mapEngine.mode === '2d' ? '3d' : '2d';
                    mapEngine.setMode(newMode);
                    
                    // Update button text
                    elements.btnToggle3D.textContent = newMode === '3d' ? '🗺️' : '🌐';
                    elements.btnToggle3D.title = newMode === '3d' ? 'Switch to 2D' : 'Switch to 3D';
                }
            });
        }
    }

    /**
     * Initialize timeline controls
     */
    function initTimelineControls() {
        // Play/Pause
        if (elements.btnPlayPause) {
            elements.btnPlayPause.addEventListener('click', () => {
                console.log('Play/Pause clicked');
                togglePlayPause();
            });
        }
        
        // Step Back
        if (elements.btnStepBack) {
            elements.btnStepBack.addEventListener('click', () => {
                console.log('Step back clicked');
                stepBack();
            });
        }
        
        // Step Forward
        if (elements.btnStepForward) {
            elements.btnStepForward.addEventListener('click', () => {
                console.log('Step forward clicked');
                stepForward();
            });
        }
        
        // Speed Slider
        if (elements.speedSlider) {
            elements.speedSlider.addEventListener('input', function() {
                const speed = parseInt(this.value);
                console.log('Speed changed to:', speed);
                
                if (elements.speedDisplay) {
                    elements.speedDisplay.textContent = speed + 'x';
                }
                
                if (typeof state !== 'undefined') {
                    state.playbackSpeed = speed;
                }
            });
        }
        
        // Era Select
        if (elements.eraSelect) {
            elements.eraSelect.addEventListener('change', function() {
                const year = parseInt(this.value);
                console.log('Era selected, jumping to:', year);
                goToYear(year);
            });
        }
    }

    /**
     * Toggle play/pause
     */
    function togglePlayPause() {
        if (typeof state === 'undefined') return;
        
        if (state.isPlaying) {
            pause();
        } else {
            play();
        }
    }

    /**
     * Start playback
     */
    function play() {
        console.log('Starting playback');
        
        if (typeof state !== 'undefined') {
            state.isPlaying = true;
            state.emit('playStateChange', { isPlaying: true });
            startPlaybackLoop();
        }
        
        if (elements.playIcon) {
            elements.playIcon.textContent = '⏸';
        }
    }

    /**
     * Pause playback
     */
    function pause() {
        console.log('Pausing playback');
        
        if (typeof state !== 'undefined') {
            state.isPlaying = false;
            state.emit('playStateChange', { isPlaying: false });
        }
        
        if (elements.playIcon) {
            elements.playIcon.textContent = '▶';
        }
    }

    /**
     * Playback animation loop
     */
    let playbackAnimationId = null;
    
    function startPlaybackLoop() {
        if (playbackAnimationId) {
            cancelAnimationFrame(playbackAnimationId);
        }
        
        function animate() {
            if (typeof state === 'undefined' || !state.isPlaying) {
                return;
            }
            
            const step = calculateStep() * (state.playbackSpeed || 1) * (state.playbackDirection || 1);
            const newYear = state.currentYear + step * 0.016; // ~60fps
            
            // Check bounds
            if (newYear > 2026) {
                state.setYear(2026);
                pause();
                return;
            }
            
            if (newYear < -4500000000) {
                state.setYear(-4500000000);
                pause();
                return;
            }
            
            state.setYear(newYear);
            
            playbackAnimationId = requestAnimationFrame(animate);
        }
        
        playbackAnimationId = requestAnimationFrame(animate);
    }

    /**
     * Update play button state
     */
    function updatePlayButton(isPlaying) {
        if (elements.playIcon) {
            elements.playIcon.textContent = isPlaying ? '⏸' : '▶';
        }
    }

    /**
     * Initialize keyboard shortcuts
     */
    function initKeyboardShortcuts() {
        document.addEventListener('keydown', function(e) {
            // Ignore if typing in input
            if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
                return;
            }
            
            switch (e.key) {
                case ' ': // Spacebar - Play/Pause
                    e.preventDefault();
                    togglePlayPause();
                    break;
                    
                case 'ArrowLeft': // Step back
                    e.preventDefault();
                    stepBack();
                    break;
                    
                case 'ArrowRight': // Step forward
                    e.preventDefault();
                    stepForward();
                    break;
                    
                case 'ArrowUp': // Zoom in
                    e.preventDefault();
                    if (elements.btnZoomIn) {
                        elements.btnZoomIn.click();
                    }
                    break;
                    
                case 'ArrowDown': // Zoom out
                    e.preventDefault();
                    if (elements.btnZoomOut) {
                        elements.btnZoomOut.click();
                    }
                    break;
                    
                case 'f': // Fullscreen
                case 'F':
                    e.preventDefault();
                    toggleFullscreen();
                    break;
                    
                case 's': // Search
                case 'S':
                    if (e.ctrlKey || e.metaKey) {
                        e.preventDefault();
                        openModal('search-modal');
                    }
                    break;
                    
                case '/': // Search (alternative)
                    e.preventDefault();
                    openModal('search-modal');
                    break;
                    
                case 'r': // Reset view
                case 'R':
                    e.preventDefault();
                    if (elements.btnResetView) {
                        elements.btnResetView.click();
                    }
                    break;
                    
                case '1': // Go to Hadean
                    goToYear(-4500000000);
                    break;
                    
                case '2': // Go to Archean
                    goToYear(-4000000000);
                    break;
                    
                case '3': // Go to Proterozoic
                    goToYear(-2500000000);
                    break;
                    
                case '4': // Go to Paleozoic
                    goToYear(-541000000);
                    break;
                    
                case '5': // Go to Mesozoic
                    goToYear(-252000000);
                    break;
                    
                case '6': // Go to Cenozoic
                    goToYear(-66000000);
                    break;
                    
                case '0': // Go to today
                    goToYear(2026);
                    break;
            }
        });
    }

    /**
     * Toggle fullscreen mode
     */
    function toggleFullscreen() {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen().catch(err => {
                console.log('Fullscreen error:', err);
            });
        } else {
            document.exitFullscreen();
        }
    }

    /**
     * Handle quality change
     */
    function handleQualityChange() {
        const quality = elements.qualitySelect.value;
        console.log('Quality changed to:', quality);
        
        if (typeof state !== 'undefined') {
            state.settings.quality = quality;
        }
    }

    /**
     * Show notification/toast
     */
    function showNotification(message, type = 'info', duration = 3000) {
        // Remove existing notifications
        const existing = document.querySelector('.notification');
        if (existing) {
            existing.remove();
        }
        
        // Create notification
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <span class="notification-message">${message}</span>
            <button class="notification-close">×</button>
        `;
        
        // Add to DOM
        document.body.appendChild(notification);
        
        // Animate in
        requestAnimationFrame(() => {
            notification.classList.add('show');
        });
        
        // Close button
        notification.querySelector('.notification-close').addEventListener('click', () => {
            notification.classList.remove('show');
            setTimeout(() => notification.remove(), 300);
        });
        
        // Auto-remove
        if (duration > 0) {
            setTimeout(() => {
                notification.classList.remove('show');
                setTimeout(() => notification.remove(), 300);
            }, duration);
        }
    }

    /**
     * Disable/enable controls during loading
     */
    function setControlsEnabled(enabled) {
        const controls = [
            elements.btnPlayPause,
            elements.btnStepBack,
            elements.btnStepForward,
            elements.speedSlider,
            elements.eraSelect,
            elements.btnZoomIn,
            elements.btnZoomOut,
            elements.btnResetView,
            elements.btnToggle3D
        ];
        
        controls.forEach(control => {
            if (control) {
                control.disabled = !enabled;
            }
        });
    }

    // Public API
    return {
        init,
        openModal,
        closeModal,
        closeAllModals,
        play,
        pause,
        togglePlayPause,
        updatePlayButton,
        goToYear,
        showNotification,
        setControlsEnabled,
        stepBack,
        stepForward,
        calculateStep
    };
})();

// Auto-initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        // Will be called by app.js
    });
}

console.log('🎮 UI Controls module loaded');
