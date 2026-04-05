/**
 * GEOTOPIA - Info Panel
 * Displays detailed information about events, eras, and civilizations
 */

const InfoPanel = (function() {
    'use strict';

    // DOM Elements
    let panel, title, body, closeBtn;
    let currentContent = null;

    /**
     * Initialize info panel
     */
    function init() {
        console.log('📋 Initializing Info Panel...');
        
        panel = document.getElementById('info-panel');
        title = document.getElementById('info-title');
        body = document.getElementById('info-body');
        closeBtn = document.getElementById('info-close');
        
        if (closeBtn) {
            closeBtn.addEventListener('click', hide);
        }
        
        // Subscribe to state changes
        if (typeof GeoState !== 'undefined') {
            GeoState.subscribe('currentYear', (year) => {
                showYearInfo(year);
            });
        }
        
        console.log('✅ Info Panel initialized');
    }

    /**
     * Show info panel
     */
    function show() {
        if (panel) {
            panel.classList.add('expanded');
        }
    }

    /**
     * Hide info panel
     */
    function hide() {
        if (panel) {
            panel.classList.remove('expanded');
        }
    }

    /**
     * Toggle info panel
     */
    function toggle() {
        if (panel) {
            panel.classList.toggle('expanded');
        }
    }

    /**
     * Show information for a specific year
     */
    function showYearInfo(year) {
        const era = getEraForYear(year);
        const events = getEventsAtYear(year);
        
        // Update title
        if (title) {
            title.textContent = era.name;
        }
        
        // Build content
        let html = '';
        
        // Era description
        html += `
            <div class="info-section era-info">
                <div class="era-badge" style="background: ${era.color}">
                    ${era.icon} ${era.name}
                </div>
                <p class="era-description">${era.description}</p>
                <div class="era-timespan">
                    <span class="era-start">${formatYear(era.start)}</span>
                    <span class="era-separator">→</span>
                    <span class="era-end">${formatYear(era.end)}</span>
                </div>
            </div>
        `;
        
        // Current year display
        html += `
            <div class="info-section current-time">
                <h3>Current Time</h3>
                <div class="time-display">
                    <span class="time-year">${formatYear(year)}</span>
                </div>
            </div>
        `;
        
        // Events at this time
        if (events.length > 0) {
            html += `
                <div class="info-section events-section">
                    <h3>Events at This Time</h3>
                    <ul class="events-list">
            `;
            
            events.forEach(event => {
                html += `
                    <li class="event-item" data-event-id="${event.id || ''}">
                        <span class="event-icon">${getEventIcon(event.type)}</span>
                        <div class="event-content">
                            <span class="event-name">${event.name}</span>
                            <span class="event-type">${event.type || 'Event'}</span>
                        </div>
                    </li>
                `;
            });
            
            html += `
                    </ul>
                </div>
            `;
        }
        
        // Key facts for era
        if (era.facts && era.facts.length > 0) {
            html += `
                <div class="info-section facts-section">
                    <h3>Key Facts</h3>
                    <ul class="facts-list">
            `;
            
            era.facts.forEach(fact => {
                html += `<li>${fact}</li>`;
            });
            
            html += `
                    </ul>
                </div>
            `;
        }
        
        // Update body
        if (body) {
            body.innerHTML = html;
        }
        
        // Bind event clicks
        bindEventClicks();
        
        currentContent = { year, era, events };
    }

    /**
     * Show detailed event information
     */
    function showEventDetail(event) {
        if (!event) return;
        
        // Update title
        if (title) {
            title.textContent = event.name || 'Event Details';
        }
        
        // Build content
        let html = `
            <div class="info-section event-detail">
                <div class="event-header">
                    <span class="event-icon large">${getEventIcon(event.type)}</span>
                    <div class="event-title-group">
                        <h2>${event.name}</h2>
                        <span class="event-date">${formatYear(event.year)}</span>
                    </div>
                </div>
        `;
        
        // Description
        if (event.description || event.details) {
            html += `
                <div class="event-description">
                    <p>${event.description || event.details}</p>
                </div>
            `;
        }
        
        // Location
        if (event.coordinates) {
            html += `
                <div class="event-location">
                    <h4>📍 Location</h4>
                    <p>${event.location || `${event.coordinates.lat.toFixed(2)}°, ${event.coordinates.lng.toFixed(2)}°`}</p>
                </div>
            `;
        }
        
        // Importance
        if (event.importance) {
            const stars = '★'.repeat(event.importance) + '☆'.repeat(10 - event.importance);
            html += `
                <div class="event-importance">
                    <h4>Significance</h4>
                    <span class="stars">${stars}</span>
                </div>
            `;
        }
        
        // Key figures
        if (event.figures && event.figures.length > 0) {
            html += `
                <div class="event-figures">
                    <h4>👤 Key Figures</h4>
                    <ul>
                        ${event.figures.map(f => `<li>${f}</li>`).join('')}
                    </ul>
                </div>
            `;
        }
        
        // Casualties (for battles/disasters)
        if (event.casualties) {
            html += `
                <div class="event-casualties">
                    <h4>⚠️ Casualties</h4>
                    <span class="casualty-count">${event.casualties.toLocaleString()}</span>
                </div>
            `;
        }
        
        // Back button
        html += `
            <button class="btn-back" id="btn-back-to-year">
                ← Back to Timeline
            </button>
        `;
        
        html += `</div>`;
        
        // Update body
        if (body) {
            body.innerHTML = html;
            
            // Bind back button
            const backBtn = document.getElementById('btn-back-to-year');
            if (backBtn) {
                backBtn.addEventListener('click', () => {
                    showYearInfo(event.year);
                });
            }
        }
        
        show();
    }

    /**
     * Show civilization information
     */
    function showCivilization(civ) {
        if (!civ) return;
        
        // Update title
        if (title) {
            title.textContent = civ.name;
        }
        
        let html = `
            <div class="info-section civilization-detail">
                <div class="civ-header" style="border-color: ${civ.color || '#888'}">
                    <h2>${civ.name}</h2>
                    <span class="civ-timespan">
                        ${formatYear(civ.timespan?.start || civ.startYear)} - 
                        ${formatYear(civ.timespan?.end || civ.endYear)}
                    </span>
                </div>
        `;
        
        // Capital
        if (civ.capital) {
            html += `
                <div class="civ-capital">
                    <h4>🏛️ Capital</h4>
                    <p>${civ.capital.name || civ.capital}</p>
                </div>
            `;
        }
        
        // Description
        if (civ.description) {
            html += `
                <div class="civ-description">
                    <p>${civ.description}</p>
                </div>
            `;
        }
        
        // Achievements
        if (civ.achievements && civ.achievements.length > 0) {
            html += `
                <div class="civ-achievements">
                    <h4>🏆 Achievements</h4>
                    <ul>
                        ${civ.achievements.slice(0, 5).map(a => `<li>${a}</li>`).join('')}
                    </ul>
                </div>
            `;
        }
        
        // Key figures
        if (civ.keyFigures && civ.keyFigures.length > 0) {
            html += `
                <div class="civ-figures">
                    <h4>👑 Key Figures</h4>
                    <ul>
                        ${civ.keyFigures.slice(0, 5).map(f => `<li>${f.name || f}</li>`).join('')}
                    </ul>
                </div>
            `;
        }
        
        html += `</div>`;
        
        if (body) {
            body.innerHTML = html;
        }
        
        show();
    }

    /**
     * Get era information for a year
     */
    function getEraForYear(year) {
        // Geological eras
        if (year <= -4000000000) {
            return {
                name: 'Hadean Eon',
                icon: '🌋',
                color: 'linear-gradient(135deg, #FF4500, #DC143C)',
                description: 'The hellish beginning of Earth. Molten surface, constant bombardment, formation of Moon.',
                start: -4500000000,
                end: -4000000000,
                facts: [
                    'Earth formed from solar nebula',
                    'Moon created by giant impact',
                    'Surface entirely molten lava',
                    'Constant asteroid bombardment',
                    'No atmosphere or water'
                ]
            };
        } else if (year <= -2500000000) {
            return {
                name: 'Archean Eon',
                icon: '🦠',
                color: 'linear-gradient(135deg, #8B0000, #4B0082)',
                description: 'First life emerges. Bacterial mats, early oceans, toxic atmosphere.',
                start: -4000000000,
                end: -2500000000,
                facts: [
                    'First life appears (bacteria)',
                    'Oceans form',
                    'First continents emerge',
                    'Atmosphere is methane-rich',
                    'Stromatolites build oxygen'
                ]
            };
        } else if (year <= -541000000) {
            return {
                name: 'Proterozoic Eon',
                icon: '❄️',
                color: 'linear-gradient(135deg, #4B0082, #006400)',
                description: 'Great Oxidation Event. Snowball Earth. Complex life evolves.',
                start: -2500000000,
                end: -541000000,
                facts: [
                    'Oxygen fills atmosphere',
                    'Snowball Earth episodes',
                    'First multicellular life',
                    'Supercontinent Rodinia forms',
                    'Ediacaran fauna appears'
                ]
            };
        } else if (year <= -252000000) {
            return {
                name: 'Paleozoic Era',
                icon: '🌿',
                color: 'linear-gradient(135deg, #228B22, #006400)',
                description: 'Explosion of life. Fish, plants, insects, reptiles colonize land.',
                start: -541000000,
                end: -252000000,
                facts: [
                    'Cambrian Explosion',
                    'First fish, then land animals',
                    'Forests cover Earth',
                    'Giant insects (dragonflies 70cm)',
                    'Ends with greatest extinction'
                ]
            };
        } else if (year <= -66000000) {
            return {
                name: 'Mesozoic Era',
                icon: '🦖',
                color: 'linear-gradient(135deg, #32CD32, #00CED1)',
                description: 'Age of Dinosaurs. Pangaea breaks up. First mammals and birds.',
                start: -252000000,
                end: -66000000,
                facts: [
                    'Dinosaurs dominate',
                    'First mammals',
                    'First birds (from dinosaurs)',
                    'First flowers',
                    'Asteroid ends era'
                ]
            };
        } else if (year <= -10000) {
            return {
                name: 'Cenozoic Era',
                icon: '🦣',
                color: 'linear-gradient(135deg, #00CED1, #1E90FF)',
                description: 'Age of Mammals. Ice ages. Human evolution.',
                start: -66000000,
                end: -10000,
                facts: [
                    'Mammals diversify',
                    'Grasslands spread',
                    'Ice ages begin',
                    'Human ancestors evolve',
                    'Modern continents form'
                ]
            };
        } else if (year <= 500) {
            return {
                name: 'Ancient Civilizations',
                icon: '🏛️',
                color: 'linear-gradient(135deg, #DAA520, #8B4513)',
                description: 'Rise of human civilizations. Agriculture, cities, empires.',
                start: -10000,
                end: 500,
                facts: [
                    'Agriculture begins',
                    'First cities built',
                    'Writing invented',
                    'Great empires rise',
                    'Philosophy, science emerge'
                ]
            };
        } else if (year <= 1500) {
            return {
                name: 'Medieval Period',
                icon: '⚔️',
                color: 'linear-gradient(135deg, #8B4513, #4B0082)',
                description: 'Middle Ages. Feudalism, crusades, plagues, Renaissance.',
                start: 500,
                end: 1500,
                facts: [
                    'Fall of Rome',
                    'Rise of Islam',
                    'Vikings, Mongols',
                    'Black Death',
                    'Renaissance begins'
                ]
            };
        } else if (year <= 1900) {
            return {
                name: 'Early Modern Period',
                icon: '⛵',
                color: 'linear-gradient(135deg, #4B0082, #00008B)',
                description: 'Age of Exploration. Colonialism, revolutions, industrialization.',
                start: 1500,
                end: 1900,
                facts: [
                    'European exploration',
                    'Colonial empires',
                    'Scientific Revolution',
                    'American/French Revolutions',
                    'Industrial Revolution'
                ]
            };
        } else {
            return {
                name: 'Modern Era',
                icon: '🌐',
                color: 'linear-gradient(135deg, #1E90FF, #00CED1)',
                description: 'World wars, technology, globalization, digital age.',
                start: 1900,
                end: 2026,
                facts: [
                    'World Wars',
                    'Space exploration',
                    'Digital revolution',
                    'Globalization',
                    'Climate crisis'
                ]
            };
        }
    }

    /**
     * Get events at a specific year (within tolerance)
     */
    function getEventsAtYear(year) {
        const events = [];
        
        // Calculate tolerance based on era
        let tolerance;
        if (year < -1000000000) {
            tolerance = 100000000; // 100 million years for early Earth
        } else if (year < -1000000) {
            tolerance = 1000000; // 1 million years for late geological
        } else if (year < -10000) {
            tolerance = 10000; // 10,000 years for prehistory
        } else if (year < 0) {
            tolerance = 100; // 100 years for ancient history
        } else {
            tolerance = 10; // 10 years for modern history
        }
        
        // Search in GEOTOPIA_DATA if available
        if (typeof GEOTOPIA_DATA !== 'undefined' && GEOTOPIA_DATA.allEvents) {
            GEOTOPIA_DATA.allEvents.forEach(event => {
                if (Math.abs(event.year - year) <= tolerance) {
                    events.push(event);
                }
            });
        }
        
        return events.slice(0, 10); // Limit to 10 events
    }

    /**
     * Get icon for event type
     */
    function getEventIcon(type) {
        const icons = {
            'geological': '🌋',
            'biological': '🧬',
            'extinction': '💀',
            'climate': '🌡️',
            'impact': '☄️',
            'evolution': '🦎',
            'political': '👑',
            'military': '⚔️',
            'cultural': '🎭',
            'scientific': '🔬',
            'disaster': '🌊',
            'construction': '🏛️',
            'exploration': '🧭',
            'religious': '🙏',
            'economic': '💰',
            'social': '👥'
        };
        return icons[type] || '📌';
    }

    /**
     * Format year for display
     */
    function formatYear(year) {
        if (typeof GeoUtils !== 'undefined' && GeoUtils.formatYear) {
            return GeoUtils.formatYear(year);
        }
        
        const absYear = Math.abs(year);
        if (absYear >= 1000000000) {
            return (absYear / 1000000000).toFixed(2) + ' billion years ago';
        } else if (absYear >= 1000000) {
            return (absYear / 1000000).toFixed(1) + ' million years ago';
        } else if (absYear >= 10000) {
            return (absYear / 1000).toFixed(0) + ',000 years ago';
        } else if (year < 0) {
            return absYear.toLocaleString() + ' BCE';
        } else {
            return year.toLocaleString() + ' CE';
        }
    }

    /**
     * Bind click events to event items
     */
    function bindEventClicks() {
        const eventItems = document.querySelectorAll('.event-item');
        eventItems.forEach(item => {
            item.addEventListener('click', function() {
                const eventId = this.getAttribute('data-event-id');
                if (eventId && typeof GEOTOPIA_DATA !== 'undefined') {
                    const event = GEOTOPIA_DATA.getEventById(eventId);
                    if (event) {
                        showEventDetail(event);
                    }
                }
            });
        });
    }

    /**
     * Update panel for current state
     */
    function update() {
        if (typeof GeoState !== 'undefined') {
            const year = GeoState.get('currentYear');
            showYearInfo(year);
        }
    }

    // Public API
    return {
        init,
        show,
        hide,
        toggle,
        showYearInfo,
        showEventDetail,
        showCivilization,
        getEraForYear,
        update
    };
})();

// Initialize when DOM ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        // Will be called by app.js
    });
}

console.log('📋 Info Panel module loaded');
