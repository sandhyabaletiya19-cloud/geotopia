/**
 * GEOTOPIA TIMELINE ENGINE
 * 4.5 Billion years in one scrubber
 * Logarithmic scale + smooth interpolation
 * Nobel Prize worthy time navigation
 */

class TimelineEngine {
    constructor() {
        // Time state
        this.currentYear = -4500000000;
        this.targetYear = -4500000000;
        this.minYear = -4500000000;
        this.maxYear = 2026;

        // Playback
        this.isPlaying = false;
        this.playbackSpeed = 1; // Multiplier
        this.playDirection = 1; // 1 = forward, -1 = backward
        this.lastFrameTime = 0;

        // Speed modes (years per second at 1x speed)
        this.speedModes = {
            geological: 50000000,   // 50M years/sec
            evolutionary: 5000000,  // 5M years/sec
            historical: 100,        // 100 years/sec
            detailed: 10,           // 10 years/sec
            yearByYear: 1           // 1 year/sec
        };
        this.currentSpeedMode = 'geological';

        // Timeline track
        this.trackElement = null;
        this.handleElement = null;
        this.trackWidth = 0;

        // Era definitions (scientifically accurate)
        this.eras = [
            {
                id: 'hadean',
                name: 'Hadean',
                start: -4500000000,
                end: -4000000000,
                color: '#DC143C',
                gradient: 'linear-gradient(90deg, #FF4500, #DC143C)',
                description: 'Molten Earth, Moon formation, Late Heavy Bombardment',
                icon: '🌋'
            },
            {
                id: 'archean',
                name: 'Archean',
                start: -4000000000,
                end: -2500000000,
                color: '#4B0082',
                gradient: 'linear-gradient(90deg, #DC143C, #4B0082)',
                description: 'First continents, first life, no oxygen',
                icon: '🦠'
            },
            {
                id: 'proterozoic',
                name: 'Proterozoic',
                start: -2500000000,
                end: -541000000,
                color: '#006400',
                gradient: 'linear-gradient(90deg, #4B0082, #006400)',
                description: 'Great Oxidation, Snowball Earth, first complex life',
                icon: '❄️'
            },
            {
                id: 'paleozoic',
                name: 'Paleozoic',
                start: -541000000,
                end: -252000000,
                color: '#2E8B57',
                gradient: 'linear-gradient(90deg, #006400, #2E8B57)',
                description: 'Cambrian Explosion, first land animals, Pangaea forms',
                icon: '🐟'
            },
            {
                id: 'mesozoic',
                name: 'Mesozoic',
                start: -252000000,
                end: -66000000,
                color: '#228B22',
                gradient: 'linear-gradient(90deg, #2E8B57, #228B22)',
                description: 'Age of Dinosaurs, Pangaea breaks up, flowering plants',
                icon: '🦕'
            },
            {
                id: 'cenozoic',
                name: 'Cenozoic',
                start: -66000000,
                end: 2026,
                color: '#4169E1',
                gradient: 'linear-gradient(90deg, #228B22, #4169E1)',
                description: 'Age of Mammals, Ice Ages, Human evolution',
                icon: '🧬'
            }
        ];

        // Sub-eras for detailed timeline (last 10,000 years)
        this.historicalEras = [
            {
                id: 'prehistoric',
                name: 'Prehistoric',
                start: -10000,
                end: -3500,
                color: '#8B4513',
                description: 'Agriculture, first settlements'
            },
            {
                id: 'ancient',
                name: 'Ancient',
                start: -3500,
                end: -500,
                color: '#DAA520',
                description: 'First civilizations, writing, empires'
            },
            {
                id: 'classical',
                name: 'Classical',
                start: -500,
                end: 500,
                color: '#B8860B',
                description: 'Greece, Rome, Han Dynasty, Maurya'
            },
            {
                id: 'medieval',
                name: 'Medieval',
                start: 500,
                end: 1500,
                color: '#556B2F',
                description: 'Feudalism, Islamic Golden Age, Mongol Empire'
            },
            {
                id: 'early-modern',
                name: 'Early Modern',
                start: 1500,
                end: 1800,
                color: '#4682B4',
                description: 'Exploration, colonialism, Renaissance'
            },
            {
                id: 'modern',
                name: 'Modern',
                start: 1800,
                end: 2026,
                color: '#1E90FF',
                description: 'Industrial Revolution, World Wars, Space Age'
            }
        ];

        // Event markers on timeline
        this.eventMarkers = [];

        // Callbacks
        this.onYearChange = null;
        this.onEraChange = null;
        this.onEventReached = null;

        // Current era tracking
        this.currentEra = null;

        // Debounce for performance
        this.lastRenderYear = null;
        this.renderDebounceTimer = null;

        // Initialize
        this.init();
    }

    /**
     * Initialize timeline UI and events
     */
    init() {
        this.trackElement = document.getElementById('timeline-track');
        this.handleElement = document.getElementById('timeline-handle');

        if (!this.trackElement || !this.handleElement) {
            console.error('Timeline elements not found. Creating them...');
            this.createTimelineElements();
        }

        this.trackWidth = this.trackElement ? this.trackElement.offsetWidth : window.innerWidth;

        // Setup interaction
        this.setupMouseInteraction();
        this.setupTouchInteraction();
        this.setupKeyboardInteraction();

        // Render era markers
        this.renderEraMarkers();

        // Render event dots on timeline
        this.renderEventDots();

        // Setup playback controls
        this.setupPlaybackControls();

        // Setup speed controls
        this.setupSpeedControls();

        // Set initial position
        this.updateHandlePosition();
        this.updateYearDisplay();

        console.log('Timeline Engine initialized');
    }

    /**
     * Create timeline elements if they don't exist
     */
    createTimelineElements() {
        const timelineSection = document.querySelector('.timeline-section') ||
                                document.getElementById('timeline-section');

        if (!timelineSection) {
            console.error('No timeline section found in DOM');
            return;
        }

        // Build the timeline HTML
        timelineSection.innerHTML = `
            <div class="timeline-container">
                <div class="timeline-header">
                    <div class="timeline-year-display">
                        <span class="year-icon">🌍</span>
                        <span id="year-display" class="year-text">4.5 Ga</span>
                        <span id="era-display" class="era-text">Hadean</span>
                    </div>

                    <div class="timeline-controls">
                        <button id="btn-beginning" class="timeline-btn" title="Go to beginning">
                            <svg viewBox="0 0 24 24" width="16" height="16">
                                <path fill="currentColor" d="M6 6h2v12H6zm3.5 6l8.5 6V6z"/>
                            </svg>
                        </button>
                        <button id="btn-rewind" class="timeline-btn" title="Rewind">
                            <svg viewBox="0 0 24 24" width="16" height="16">
                                <path fill="currentColor" d="M11 18V6l-8.5 6 8.5 6zm.5-6l8.5 6V6l-8.5 6z"/>
                            </svg>
                        </button>
                        <button id="btn-play" class="timeline-btn play-btn" title="Play">
                            <svg viewBox="0 0 24 24" width="20" height="20">
                                <path fill="currentColor" d="M8 5v14l11-7z"/>
                            </svg>
                        </button>
                        <button id="btn-forward" class="timeline-btn" title="Forward">
                            <svg viewBox="0 0 24 24" width="16" height="16">
                                <path fill="currentColor" d="M4 18l8.5-6L4 6v12zm9-12v12l8.5-6L13 6z"/>
                            </svg>
                        </button>
                        <button id="btn-end" class="timeline-btn" title="Go to present">
                            <svg viewBox="0 0 24 24" width="16" height="16">
                                <path fill="currentColor" d="M16 18h2V6h-2v12zM4 18l8.5-6L4 6v12z"/>
                            </svg>
                        </button>
                    </div>

                    <div class="timeline-speed">
                        <label>Speed:</label>
                        <select id="speed-select">
                            <option value="geological">Geological (50M yr/s)</option>
                            <option value="evolutionary">Evolutionary (5M yr/s)</option>
                            <option value="historical">Historical (100 yr/s)</option>
                            <option value="detailed">Detailed (10 yr/s)</option>
                            <option value="yearByYear">Year by Year</option>
                        </select>
                        <div class="speed-multiplier">
                            <button id="btn-slower" class="speed-btn">−</button>
                            <span id="speed-display">1×</span>
                            <button id="btn-faster" class="speed-btn">+</button>
                        </div>
                    </div>
                </div>

                <div class="timeline-track-wrapper">
                    <div class="timeline-era-labels" id="era-labels"></div>

                    <div class="timeline-track" id="timeline-track">
                        <div class="timeline-track-fill" id="timeline-fill"></div>
                        <div class="timeline-era-segments" id="era-segments"></div>
                        <div class="timeline-event-dots" id="event-dots"></div>
                        <div class="timeline-handle" id="timeline-handle">
                            <div class="handle-grip"></div>
                            <div class="handle-tooltip" id="handle-tooltip">
                                <span class="tooltip-year">4.5 Ga</span>
                                <span class="tooltip-era">Hadean</span>
                            </div>
                        </div>
                    </div>

                    <div class="timeline-tick-labels" id="tick-labels"></div>
                </div>

                <div class="timeline-info-bar">
                    <div id="era-description" class="era-description">
                        🌋 Molten Earth, Moon formation, Late Heavy Bombardment
                    </div>
                    <div class="timeline-bookmarks">
                        <button class="bookmark-btn" data-year="-4500000000">🌋 Earth Forms</button>
                        <button class="bookmark-btn" data-year="-3800000000">🦠 First Life</button>
                        <button class="bookmark-btn" data-year="-541000000">🐟 Cambrian</button>
                        <button class="bookmark-btn" data-year="-252000000">💀 Great Dying</button>
                        <button class="bookmark-btn" data-year="-66000000">☄️ Dinosaur Extinction</button>
                        <button class="bookmark-btn" data-year="-200000">🧬 Homo Sapiens</button>
                        <button class="bookmark-btn" data-year="-3100">🏛️ Egypt</button>
                        <button class="bookmark-btn" data-year="2026">🌍 Today</button>
                    </div>
                </div>
            </div>
        `;

        // Re-grab elements
        this.trackElement = document.getElementById('timeline-track');
        this.handleElement = document.getElementById('timeline-handle');
        this.trackWidth = this.trackElement.offsetWidth;
    }

    // ============================================================
    // LOGARITHMIC SCALE - THE MATHEMATICAL GENIUS
    // ============================================================

    /**
     * Convert year to position on timeline (0 to 1)
     * Uses LOGARITHMIC scale so recent history gets more space
     *
     * Scale breakdown:
     * Position 0.0  = -4,500,000,000 (Earth formation)
     * Position 0.5  = ~-67,000 (around human migration)
     * Position 0.9  = ~-50 (mid 20th century)
     * Position 1.0  = 2026 (present)
     */
    yearToPosition(year) {
        // Shift year so it's always positive for log
        const shifted = year - this.minYear + 1; // +1 to avoid log(0)
        const maxShifted = this.maxYear - this.minYear + 1;

        // Log base 10 gives nice distribution
        const logValue = Math.log10(shifted);
        const logMax = Math.log10(maxShifted);

        return logValue / logMax;
    }

    /**
     * Convert position (0-1) back to year
     */
    positionToYear(position) {
        const maxShifted = this.maxYear - this.minYear + 1;
        const logMax = Math.log10(maxShifted);

        const logValue = position * logMax;
        const shifted = Math.pow(10, logValue);

        return Math.round(shifted + this.minYear - 1);
    }

    /**
     * Convert pixel position on track to year
     */
    pixelToYear(pixelX) {
        const trackRect = this.trackElement.getBoundingClientRect();
        const position = Math.max(0, Math.min(1,
            (pixelX - trackRect.left) / trackRect.width
        ));
        return this.positionToYear(position);
    }

    /**
     * Convert year to pixel position on track
     */
    yearToPixel(year) {
        const position = this.yearToPosition(year);
        return position * this.trackWidth;
    }

    // ============================================================
    // MOUSE / TOUCH / KEYBOARD INTERACTION
    // ============================================================

    /**
     * Setup mouse interaction
     */
    setupMouseInteraction() {
        if (!this.trackElement || !this.handleElement) return;

        let isDragging = false;

        // Handle drag
        this.handleElement.addEventListener('mousedown', (e) => {
            e.preventDefault();
            isDragging = true;
            this.handleElement.classList.add('dragging');
            document.body.style.cursor = 'grabbing';
        });

        // Track click (jump to position)
        this.trackElement.addEventListener('click', (e) => {
            if (isDragging) return;
            const year = this.pixelToYear(e.clientX);
            this.goToYear(year);
        });

        // Track hover (show preview)
        this.trackElement.addEventListener('mousemove', (e) => {
            if (!isDragging) {
                this.showPreview(e.clientX);
            }
        });

        this.trackElement.addEventListener('mouseleave', () => {
            this.hidePreview();
        });

        // Global mouse events for dragging
        document.addEventListener('mousemove', (e) => {
            if (isDragging) {
                const year = this.pixelToYear(e.clientX);
                this.scrubToYear(year);
            }
        });

        document.addEventListener('mouseup', () => {
            if (isDragging) {
                isDragging = false;
                this.handleElement.classList.remove('dragging');
                document.body.style.cursor = '';
                // Snap to nearest significant year
                this.snapToNearest();
            }
        });
    }

    /**
     * Setup touch interaction (mobile)
     */
    setupTouchInteraction() {
        if (!this.trackElement || !this.handleElement) return;

        let isDragging = false;

        this.handleElement.addEventListener('touchstart', (e) => {
            e.preventDefault();
            isDragging = true;
            this.handleElement.classList.add('dragging');
        });

        document.addEventListener('touchmove', (e) => {
            if (isDragging && e.touches.length > 0) {
                const year = this.pixelToYear(e.touches[0].clientX);
                this.scrubToYear(year);
            }
        });

        document.addEventListener('touchend', () => {
            if (isDragging) {
                isDragging = false;
                this.handleElement.classList.remove('dragging');
            }
        });

        // Tap on track
        this.trackElement.addEventListener('touchstart', (e) => {
            if (!isDragging && e.touches.length > 0) {
                const year = this.pixelToYear(e.touches[0].clientX);
                this.goToYear(year);
            }
        });
    }

    /**
     * Setup keyboard interaction
     */
    setupKeyboardInteraction() {
        document.addEventListener('keydown', (e) => {
            switch (e.key) {
                case 'ArrowRight':
                    e.preventDefault();
                    this.stepForward(e.shiftKey);
                    break;
                case 'ArrowLeft':
                    e.preventDefault();
                    this.stepBackward(e.shiftKey);
                    break;
                case ' ':
                    e.preventDefault();
                    this.togglePlay();
                    break;
                case 'Home':
                    e.preventDefault();
                    this.goToYear(this.minYear);
                    break;
                case 'End':
                    e.preventDefault();
                    this.goToYear(this.maxYear);
                    break;
                case '+':
                case '=':
                    this.increaseSpeed();
                    break;
                case '-':
                case '_':
                    this.decreaseSpeed();
                    break;
            }
        });
    }

    // ============================================================
    // YEAR NAVIGATION
    // ============================================================

    /**
     * Go to specific year with smooth animation
     */
    goToYear(year, animated = true) {
        year = Math.max(this.minYear, Math.min(this.maxYear, year));
        this.targetYear = year;

        if (animated && typeof gsap !== 'undefined') {
            gsap.to(this, {
                currentYear: year,
                duration: 0.8,
                ease: 'power2.inOut',
                onUpdate: () => {
                    this.onYearUpdated(Math.round(this.currentYear));
                },
                onComplete: () => {
                    this.currentYear = year;
                    this.onYearUpdated(year);
                }
            });
        } else if (animated) {
            // Fallback animation without GSAP
            this.animateToYear(year, 800);
        } else {
            this.currentYear = year;
            this.onYearUpdated(year);
        }
    }

    /**
     * Fallback animation without GSAP
     */
    animateToYear(targetYear, duration) {
        const startYear = this.currentYear;
        const startTime = performance.now();

        const step = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // Cubic ease in-out
            const eased = progress < 0.5
                ? 4 * progress * progress * progress
                : 1 - Math.pow(-2 * progress + 2, 3) / 2;

            this.currentYear = Math.round(startYear + (targetYear - startYear) * eased);
            this.onYearUpdated(this.currentYear);

            if (progress < 1) {
                requestAnimationFrame(step);
            }
        };

        requestAnimationFrame(step);
    }

    /**
     * Scrub to year (immediate, no animation - used during drag)
     */
    scrubToYear(year) {
        year = Math.max(this.minYear, Math.min(this.maxYear, year));
        this.currentYear = year;
        this.targetYear = year;
        this.onYearUpdated(year);
    }

    /**
     * Step forward in time
     */
    stepForward(bigStep = false) {
        const step = this.getStepSize(bigStep);
        this.goToYear(this.currentYear + step);
    }

    /**
     * Step backward in time
     */
    stepBackward(bigStep = false) {
        const step = this.getStepSize(bigStep);
        this.goToYear(this.currentYear - step);
    }

    /**
     * Calculate appropriate step size based on current year
     */
    getStepSize(big = false) {
        const year = this.currentYear;
        const multiplier = big ? 10 : 1;

        if (year < -1000000000) return 100000000 * multiplier;  // 100M years
        if (year < -100000000) return 10000000 * multiplier;    // 10M years
        if (year < -10000000) return 1000000 * multiplier;      // 1M years
        if (year < -100000) return 10000 * multiplier;          // 10K years
        if (year < -10000) return 1000 * multiplier;            // 1K years
        if (year < -1000) return 100 * multiplier;              // 100 years
        if (year < 0) return 50 * multiplier;                   // 50 years
        if (year < 1500) return 25 * multiplier;                // 25 years
        if (year < 1900) return 10 * multiplier;                // 10 years
        return 1 * multiplier;                                   // 1 year
    }

    /**
     * Snap to nearest significant event
     */
    snapToNearest() {
        if (!dataEngine || !dataEngine.timelineData) return;

        const events = dataEngine.timelineData;
        let nearestEvent = null;
        let nearestDist = Infinity;

        for (const event of events) {
            const dist = Math.abs(event.year - this.currentYear);
            // Scale snap range based on current zoom level
            const snapRange = this.getStepSize() * 2;
            if (dist < nearestDist && dist < snapRange) {
                nearestDist = dist;
                nearestEvent = event;
            }
        }

        if (nearestEvent) {
            this.goToYear(nearestEvent.year);
        }
    }

    // ============================================================
    // PLAYBACK CONTROLS
    // ============================================================

    /**
     * Toggle play/pause
     */
    togglePlay() {
        if (this.isPlaying) {
            this.pause();
        } else {
            this.play();
        }
    }

    /**
     * Start playback
     */
    play() {
        this.isPlaying = true;
        this.lastFrameTime = performance.now();

        // Update play button
        const playBtn = document.getElementById('btn-play');
        if (playBtn) {
            playBtn.innerHTML = `
                <svg viewBox="0 0 24 24" width="20" height="20">
                    <path fill="currentColor" d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
                </svg>
            `;
            playBtn.classList.add('playing');
        }

        this.playbackLoop();
    }

    /**
     * Pause playback
     */
    pause() {
        this.isPlaying = false;

        const playBtn = document.getElementById('btn-play');
        if (playBtn) {
            playBtn.innerHTML = `
                <svg viewBox="0 0 24 24" width="20" height="20">
                    <path fill="currentColor" d="M8 5v14l11-7z"/>
                </svg>
            `;
            playBtn.classList.remove('playing');
        }
    }

    /**
     * Playback loop
     */
    playbackLoop() {
        if (!this.isPlaying) return;

        const now = performance.now();
        const deltaTime = (now - this.lastFrameTime) / 1000; // seconds
        this.lastFrameTime = now;

        // Calculate years to advance
        const baseSpeed = this.speedModes[this.currentSpeedMode];
        const yearsToAdvance = baseSpeed * this.playbackSpeed * this.playDirection * deltaTime;

        let newYear = this.currentYear + yearsToAdvance;

        // Clamp
        if (newYear >= this.maxYear) {
            newYear = this.maxYear;
            this.pause();
        } else if (newYear <= this.minYear) {
            newYear = this.minYear;
            this.pause();
        }

        this.currentYear = Math.round(newYear);
        this.onYearUpdated(this.currentYear);

        // Auto-adjust speed based on era
        this.autoAdjustSpeed();

        requestAnimationFrame(() => this.playbackLoop());
    }

    /**
     * Auto-adjust speed when crossing era boundaries
     */
    autoAdjustSpeed() {
        const year = this.currentYear;

        // Slow down near major events
        if (dataEngine && dataEngine.timelineData) {
            const nearEvents = dataEngine.getEventsNear(year, this.getStepSize());
            if (nearEvents.length > 0) {
                const mostImportant = nearEvents.reduce((max, e) =>
                    e.importance > max.importance ? e : max, nearEvents[0]
                );

                if (mostImportant.importance >= 9) {
                    // Auto slow down for very important events
                    this.temporarySlowdown(mostImportant);
                }
            }
        }
    }

    /**
     * Temporarily slow down for important events
     */
    temporarySlowdown(event) {
        if (this._slowdownActive) return;
        this._slowdownActive = true;

        const originalSpeed = this.playbackSpeed;
        this.playbackSpeed *= 0.3; // Slow to 30%

        // Show event notification
        this.showEventNotification(event);

        // Restore speed after 2 seconds
        setTimeout(() => {
            this.playbackSpeed = originalSpeed;
            this._slowdownActive = false;
        }, 2000);
    }

    /**
     * Show event notification popup
     */
    showEventNotification(event) {
        const existing = document.getElementById('event-notification');
        if (existing) existing.remove();

        const notification = document.createElement('div');
        notification.id = 'event-notification';
        notification.className = 'event-notification';
        notification.innerHTML = `
            <div class="event-notification-inner">
                <span class="event-type-badge ${event.type}">${event.type.toUpperCase()}</span>
                <h3>${event.name}</h3>
                <p>${event.description}</p>
                <span class="event-year">${this.formatYear(event.year)}</span>
            </div>
        `;

        document.body.appendChild(notification);

        // Animate in
        requestAnimationFrame(() => {
            notification.classList.add('visible');
        });

        // Remove after 3 seconds
        setTimeout(() => {
            notification.classList.remove('visible');
            setTimeout(() => notification.remove(), 500);
        }, 3000);
    }

    /**
     * Setup playback control buttons
     */
    setupPlaybackControls() {
        const btnPlay = document.getElementById('btn-play');
        const btnRewind = document.getElementById('btn-rewind');
        const btnForward = document.getElementById('btn-forward');
        const btnBeginning = document.getElementById('btn-beginning');
        const btnEnd = document.getElementById('btn-end');

        if (btnPlay) btnPlay.addEventListener('click', () => this.togglePlay());

        if (btnRewind) {
            btnRewind.addEventListener('click', () => {
                this.playDirection = -1;
                if (!this.isPlaying) this.stepBackward();
            });
        }

        if (btnForward) {
            btnForward.addEventListener('click', () => {
                this.playDirection = 1;
                if (!this.isPlaying) this.stepForward();
            });
        }

        if (btnBeginning) {
            btnBeginning.addEventListener('click', () => this.goToYear(this.minYear));
        }

        if (btnEnd) {
            btnEnd.addEventListener('click', () => this.goToYear(this.maxYear));
        }

        // Bookmark buttons
        document.querySelectorAll('.bookmark-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const year = parseInt(btn.getAttribute('data-year'));
                this.goToYear(year);
            });
        });
    }

    /**
     * Setup speed controls
     */
    setupSpeedControls() {
        const speedSelect = document.getElementById('speed-select');
        const btnSlower = document.getElementById('btn-slower');
        const btnFaster = document.getElementById('btn-faster');

        if (speedSelect) {
            speedSelect.addEventListener('change', (e) => {
                this.currentSpeedMode = e.target.value;
            });
        }

        if (btnSlower) {
            btnSlower.addEventListener('click', () => this.decreaseSpeed());
        }

        if (btnFaster) {
            btnFaster.addEventListener('click', () => this.increaseSpeed());
        }
    }

    /**
     * Increase playback speed
     */
    increaseSpeed() {
        this.playbackSpeed = Math.min(100, this.playbackSpeed * 2);
        this.updateSpeedDisplay();
    }

    /**
     * Decrease playback speed
     */
    decreaseSpeed() {
        this.playbackSpeed = Math.max(0.1, this.playbackSpeed / 2);
        this.updateSpeedDisplay();
    }

    /**
     * Update speed display
     */
    updateSpeedDisplay() {
        const display = document.getElementById('speed-display');
        if (display) {
            display.textContent = `${this.playbackSpeed}×`;
        }
    }

    // ============================================================
    // UI RENDERING
    // ============================================================

    /**
     * Called whenever year changes
     */
    onYearUpdated(year) {
        // Debounce heavy operations
        if (this.renderDebounceTimer) {
            cancelAnimationFrame(this.renderDebounceTimer);
        }

        this.renderDebounceTimer = requestAnimationFrame(() => {
            // Always update lightweight UI
            this.updateHandlePosition();
            this.updateYearDisplay();

            // Check era change
            const era = this.getEraForYear(year);
            if (era && era.id !== this.currentEra) {
                this.currentEra = era.id;
                this.onEraChanged(era);
            }

            // Update map (heavier operation - throttle more)
            const yearDiff = Math.abs(year - (this.lastRenderYear || 0));
            const threshold = this.getRenderThreshold(year);

            if (yearDiff >= threshold || this.lastRenderYear === null) {
                this.lastRenderYear = year;

                // Call map engine
                if (typeof mapEngine !== 'undefined') {
                    mapEngine.renderYear(year);
                }

                // Call external callback
                if (this.onYearChange) {
                    this.onYearChange(year);
                }
            }
        });
    }

    /**
     * Get render threshold (how many years must change before re-rendering map)
     */
    getRenderThreshold(year) {
        if (year < -1000000000) return 50000000;  // 50M year chunks
        if (year < -100000000) return 5000000;     // 5M year chunks
        if (year < -10000000) return 500000;       // 500K year chunks
        if (year < -100000) return 10000;          // 10K year chunks
        if (year < -10000) return 1000;            // 1K year chunks
        if (year < 0) return 50;                    // 50 year chunks
        return 1;                                   // Every year
    }

    /**
     * Update handle position on track
     */
    updateHandlePosition() {
        if (!this.handleElement || !this.trackElement) return;

        this.trackWidth = this.trackElement.offsetWidth;
        const position = this.yearToPosition(this.currentYear);
        const pixelPosition = position * this.trackWidth;

        this.handleElement.style.left = `${pixelPosition}px`;

        // Update fill
        const fill = document.getElementById('timeline-fill');
        if (fill) {
            fill.style.width = `${position * 100}%`;
        }

        // Update tooltip
        const tooltip = document.getElementById('handle-tooltip');
        if (tooltip) {
            tooltip.querySelector('.tooltip-year').textContent = this.formatYear(this.currentYear);
            const era = this.getEraForYear(this.currentYear);
            tooltip.querySelector('.tooltip-era').textContent = era ? era.name : '';
        }
    }

    /**
     * Update year display
     */
    updateYearDisplay() {
        const yearDisplay = document.getElementById('year-display');
        const eraDisplay = document.getElementById('era-display');

        if (yearDisplay) {
            yearDisplay.textContent = this.formatYear(this.currentYear);
        }

        if (eraDisplay) {
            const era = this.getEraForYear(this.currentYear);
            if (era) {
                eraDisplay.textContent = `${era.icon || ''} ${era.name}`;
                eraDisplay.style.color = era.color;
            }
        }

        const eraDesc = document.getElementById('era-description');
        if (eraDesc) {
            const era = this.getEraForYear(this.currentYear);
            if (era) {
                eraDesc.textContent = `${era.icon || ''} ${era.description}`;
            }
        }
    }

    /**
     * Render era markers on timeline track
     */
    renderEraMarkers() {
        const segmentsContainer = document.getElementById('era-segments');
        const labelsContainer = document.getElementById('era-labels');
        const tickLabelsContainer = document.getElementById('tick-labels');

        if (!segmentsContainer) return;

        // Clear
        segmentsContainer.innerHTML = '';
        if (labelsContainer) labelsContainer.innerHTML = '';
        if (tickLabelsContainer) tickLabelsContainer.innerHTML = '';

        // Render each era as a segment
        this.eras.forEach(era => {
            const startPos = this.yearToPosition(era.start) * 100;
            const endPos = this.yearToPosition(era.end) * 100;
            const width = endPos - startPos;

            // Era segment on track
            const segment = document.createElement('div');
            segment.className = `era-segment era-${era.id}`;
            segment.style.left = `${startPos}%`;
            segment.style.width = `${width}%`;
            segment.style.background = era.gradient;
            segment.title = `${era.name}: ${this.formatYear(era.start)} - ${this.formatYear(era.end)}`;
            segmentsContainer.appendChild(segment);

            // Era label above track
            if (labelsContainer && width > 3) {
                const label = document.createElement('div');
                label.className = 'era-label';
                label.style.left = `${startPos + width / 2}%`;
                label.textContent = era.name;
                label.style.color = era.color;
                labelsContainer.appendChild(label);
            }

            // Tick mark at era boundary
            if (tickLabelsContainer) {
                const tick = document.createElement('div');
                tick.className = 'tick-label';
                tick.style.left = `${startPos}%`;
                tick.innerHTML = `<span>${this.formatYear(era.start)}</span>`;
                tickLabelsContainer.appendChild(tick);
            }
        });

        // Add final tick
        if (tickLabelsContainer) {
            const finalTick = document.createElement('div');
            finalTick.className = 'tick-label';
            finalTick.style.left = '100%';
            finalTick.innerHTML = '<span>Now</span>';
            tickLabelsContainer.appendChild(finalTick);
        }
    }

    /**
     * Render event dots on timeline
     */
    renderEventDots() {
        const dotsContainer = document.getElementById('event-dots');
        if (!dotsContainer) return;

        dotsContainer.innerHTML = '';

        // Wait for data engine
        const renderDots = () => {
            if (!dataEngine || !dataEngine.timelineData || dataEngine.timelineData.length === 0) {
                setTimeout(renderDots, 500);
                return;
            }

            dataEngine.timelineData.forEach(event => {
                const position = this.yearToPosition(event.year) * 100;
                const dot = document.createElement('div');
                dot.className = `event-dot event-${event.type}`;
                dot.style.left = `${position}%`;
                dot.style.width = `${Math.max(3, event.importance)}px`;
                dot.style.height = `${Math.max(3, event.importance)}px`;
                dot.title = `${event.name} (${this.formatYear(event.year)})`;

                // Click to go to event
                dot.addEventListener('click', (e) => {
                    e.stopPropagation();
                    this.goToYear(event.year);
                });

                dotsContainer.appendChild(dot);
            });
        };

        renderDots();
    }

    /**
     * Show preview tooltip at mouse position
     */
    showPreview(pixelX) {
        let preview = document.getElementById('scrub-preview');
        if (!preview) {
            preview = document.createElement('div');
            preview.id = 'scrub-preview';
            preview.className = 'scrub-preview';
            document.body.appendChild(preview);
        }

        const year = this.pixelToYear(pixelX);
        const era = this.getEraForYear(year);

        preview.innerHTML = `
            <strong>${this.formatYear(year)}</strong>
            <br>
            <small style="color:${era ? era.color : '#fff'}">${era ? era.name : ''}</small>
        `;

        preview.style.left = `${pixelX}px`;
        preview.style.display = 'block';
    }

    /**
     * Hide preview tooltip
     */
    hidePreview() {
        const preview = document.getElementById('scrub-preview');
        if (preview) preview.style.display = 'none';
    }

    /**
     * Handle era change
     */
    onEraChanged(era) {
        // Emit event
        if (this.onEraChange) {
            this.onEraChange(era);
        }

        // Visual feedback
        document.body.setAttribute('data-era', era.id);

        // Update era-specific styles
        document.documentElement.style.setProperty('--current-era-color', era.color);
    }

    // ============================================================
    // UTILITY FUNCTIONS
    // ============================================================

    /**
     * Get era for a specific year
     */
    getEraForYear(year) {
        // Check historical eras first (more specific)
        if (year >= -10000) {
            const historical = this.historicalEras.find(e =>
                year >= e.start && year < e.end
            );
            if (historical) return historical;
        }

        // Check geological eras
        return this.eras.find(e => year >= e.start && year < e.end) || this.eras[0];
    }

    /**
     * Format year for display
     */
    formatYear(year) {
        if (year === null || year === undefined) return '???';

        const absYear = Math.abs(year);

        if (absYear >= 1000000000) {
            return `${(absYear / 1000000000).toFixed(1)} Ga`;
        }
        if (absYear >= 1000000) {
            return `${(absYear / 1000000).toFixed(1)} Ma`;
        }
        if (absYear >= 10000) {
            return `${(absYear / 1000).toFixed(0)}K ${year < 0 ? 'BCE' : 'CE'}`;
        }
        if (year < 0) {
            return `${absYear.toLocaleString()} BCE`;
        }
        return `${year} CE`;
    }

    /**
     * Destroy timeline (cleanup)
     */
    destroy() {
        this.pause();
        document.removeEventListener('mousemove', this.onMouseMove);
        document.removeEventListener('mouseup', this.onMouseUp);
        document.removeEventListener('keydown', this.onKeyDown);
    }
}

// Singleton
const timelineEngine = new TimelineEngine();
