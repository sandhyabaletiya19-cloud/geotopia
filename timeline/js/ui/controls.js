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
            if (typeof GeoState !== 'undefined') {
                GeoState.set('ui.modalOpen', modalId);
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
            if (typeof GeoState !== 'undefined') {
                GeoState.set('ui.modalOpen', null);
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
        
        if (typeof GeoState !== 'undefined') {
            GeoState.set('ui.modalOpen', null);
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
        
        // Search geological events
        if (typeof GEOTOPIA_DATA !== 'undefined' && GEOTOPIA_DATA.allEvents) {
            GEOTOPIA_DATA.allEvents.forEach(event => {
                if (event.name && event.name.toLowerCase().includes(queryLower)) {
                    results.push({
                        type: 'event',
                        name: event.name,
                        year: event.year,
                        era: event.era || 'Unknown',
                        data: event
                    });
                }
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
        if (typeof GeoUtils !== 'undefined' && GeoUtils.formatYear) {
            return GeoUtils.formatYear(year);
        }
        
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
        if (typeof TimelineEngine !== 'undefined') {
            TimelineEngine.goToYear(year);
        } else if (typeof GeoState !== 'undefined') {
            GeoState.set('currentYear', year);
        }
        
        // Update info panel
        if (typeof InfoPanel !== 'undefined') {
            InfoPanel.showYearInfo(year);
        }
    }

    /**
     * Initialize map controls
     */
    function initMapControls() {
        // Zoom In
        if (elements.btnZoomIn) {
            elements.btnZoomIn.addEventListener('click', () => {
                if (typeof MapEngine !== 'undefined') {
                    MapEngine.zoomIn();
                }
            });
        }
        
        // Zoom Out
        if (elements.btnZoomOut) {
            elements.btnZoomOut.addEventListener('click', () => {
                if (typeof MapEngine !== 'undefined') {
                    MapEngine.zoomOut();
                }
            });
        }
        
        // Reset View
        if (elements.btnResetView) {
            elements.btnResetView.addEventListener('click', () => {
                if (typeof MapEngine !== 'undefined') {
                    MapEngine.resetView();
                }
            });
        }
        
        // Toggle 2D/3D
        if (elements.btnToggle3D) {
            elements.btnToggle3D.addEventListener('click', () => {
                if (typeof MapEngine !== 'undefined') {
                    MapEngine.toggleMode();
                }
                // Update button text
                const is3D = GeoState ? GeoState.get('map.is3D') : false;
                elements.btnToggle3D.textContent = is3D ? '🗺️' : '🌐';
                elements.btnToggle3D.title = is3D ? 'Switch to 2D' : 'Switch to 3D';
            });
        }
    }

    /**
     * Initialize timeline controls
     */
    function initTimelineControls() {
        // Play/Pause
        if (elements.btnPlayPause) {
            elements.btnPlayPause.addEventListener('click', togglePlayPause);
        }
        
        // Step Back
        if (elements.btnStepBack) {
            elements.btnStepBack.addEventListener('click', () => {
                if (typeof TimelineEngine !== 'undefined') {
                    TimelineEngine.stepBack();
                }
            });
        }
        
        // Step Forward
        if (elements.btnStepForward) {
            elements.btnStepForward.addEventListener('click', () => {
                if (typeof TimelineEngine !== 'undefined') {
                    TimelineEngine.stepForward();
                }
            });
        }
        
        // Speed Slider
        if (elements.speedSlider) {
            elements.speedSlider.addEventListener('input', function() {
                const speed = parseInt(this.value);
                if (elements.speedDisplay) {
                    elements.speedDisplay.textContent = speed + 'x';
                }
                if (typeof TimelineEngine !== 'undefined') {
                    TimelineEngine.setSpeed(speed);
                }
                if (typeof GeoState !== 'undefined') {
                    GeoState.set('timeline.speed', speed);
                }
            });
        }
        
        // Era Select
        if (elements.eraSelect) {
            elements.eraSelect.addEventListener('change', function() {
                const year = parseInt(this.value);
                goToYear(year);
            });
        }
    }

    /**
     * Toggle play/pause
     */
    function togglePlayPause() {
        const isPlaying = GeoState ? GeoState.get('timeline.isPlaying') : false;
        
        if (isPlaying) {
            pause();
        } else {
            play();
        }
    }

    /**
     * Start playback
     */
    function play() {
        if (typeof TimelineEngine !== 'undefined') {
            TimelineEngine.play();
        }
        
        if (elements.playIcon) {
            elements.playIcon.textContent = '⏸';
        }
        
        if (typeof GeoState !== 'undefined') {
            GeoState.set('timeline.isPlaying', true);
        }
    }

    /**
     * Pause playback
     */
    function pause() {
        if (typeof TimelineEngine !== 'undefined') {
            TimelineEngine.pause();
        }
        
        if (elements.playIcon) {
            elements.playIcon.textContent = '▶';
        }
        
        if (typeof GeoState !== 'undefined') {
            GeoState.set('timeline.isPlaying', false);
        }
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
                    if (typeof TimelineEngine !== 'undefined') {
                        TimelineEngine.stepBack();
                    }
                    break;
                    
                case 'ArrowRight': // Step forward
                    e.preventDefault();
                    if (typeof TimelineEngine !== 'undefined') {
                        TimelineEngine.stepForward();
                    }
                    break;
                    
                case 'ArrowUp': // Zoom in
                    e.preventDefault();
                    if (typeof MapEngine !== 'undefined') {
                        MapEngine.zoomIn();
                    }
                    break;
                    
                case 'ArrowDown': // Zoom out
                    e.preventDefault();
                    if (typeof MapEngine !== 'undefined') {
                        MapEngine.zoomOut();
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
                    if (typeof MapEngine !== 'undefined') {
                        MapEngine.resetView();
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
        
        if (typeof GeoState !== 'undefined') {
            GeoState.set('settings.quality', quality);
        }
        
        // Apply quality settings
        if (typeof MapEngine !== 'undefined') {
            MapEngine.setQuality(quality);
        }
        
        console.log('Quality changed to:', quality);
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
        setControlsEnabled
    };
})();

// Auto-initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        // Will be called by app.js
    });
}

console.log('🎮 UI Controls module loaded');
