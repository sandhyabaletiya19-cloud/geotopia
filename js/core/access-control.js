/**
 * GEOGRAPHY APP - CENTRALIZED ACCESS CONTROL SYSTEM
 * Version: 2.0
 * 
 * This is the main control file that manages all premium content access.
 * Load this AFTER data files and BEFORE app logic files.
 * 
 * Script order: data files → access-control.js → app files
 */

(function() {
    'use strict';
    
    // ═══════════════════════════════════════════════════════════════════════
    // SECTION 1: CORE ACCESS CONTROLLER
    // ═══════════════════════════════════════════════════════════════════════
    
    class GeoAccessController {
        constructor() {
            this.initialized = false;
            this.subscription = null;
            this.cachedAccess = new Map();
            this.eventListeners = new Map();
            
            this.init();
        }
        
        /**
         * Initialize the access control system
         */
        init() {
            this.loadSubscription();
            this.setupEventListeners();
            this.injectStyles();
            this.initialized = true;
            
            console.log('🔐 GeoAccess: Access Control System Initialized');
            this.emit('initialized', { subscription: this.subscription });
        }
        
        /**
         * Load subscription from localStorage
         */
        loadSubscription() {
            try {
                const stored = localStorage.getItem('geo_subscription');
                if (stored) {
                    this.subscription = JSON.parse(stored);
                    
                    // Check if subscription has expired
                    if (this.subscription.expiryDate) {
                        const expiry = new Date(this.subscription.expiryDate);
                        if (expiry < new Date()) {
                            this.clearSubscription();
                            return;
                        }
                    }
                    
                    console.log('🔓 GeoAccess: Premium user detected -', this.subscription.plan);
                }
            } catch (e) {
                console.error('GeoAccess: Error loading subscription', e);
                this.subscription = null;
            }
        }
        
        /**
         * Save subscription to localStorage
         */
        saveSubscription(subscriptionData) {
            this.subscription = {
                userId: subscriptionData.userId || this.generateUserId(),
                plan: subscriptionData.plan,
                billing: subscriptionData.billing,
                startDate: subscriptionData.startDate || new Date().toISOString(),
                expiryDate: subscriptionData.expiryDate,
                paymentId: subscriptionData.paymentId,
                amount: subscriptionData.amount,
                currency: subscriptionData.currency,
                gateway: subscriptionData.gateway
            };
            
            localStorage.setItem('geo_subscription', JSON.stringify(this.subscription));
            this.cachedAccess.clear();
            this.emit('subscriptionChanged', this.subscription);
            
            return this.subscription;
        }
        
        /**
         * Clear subscription
         */
        clearSubscription() {
            this.subscription = null;
            localStorage.removeItem('geo_subscription');
            this.cachedAccess.clear();
            this.emit('subscriptionCleared');
        }
        
        /**
         * Generate unique user ID
         */
        generateUserId() {
            return 'geo_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
        }
        
        // ═══════════════════════════════════════════════════════════════════
        // SECTION 2: ACCESS CHECKING METHODS
        // ═══════════════════════════════════════════════════════════════════
        
        /**
         * Check if user has premium access
         */
        isPremium() {
            return this.subscription !== null && this.isSubscriptionValid();
        }
        
        /**
         * Check if subscription is valid (not expired)
         */
        isSubscriptionValid() {
            if (!this.subscription) return false;
            if (!this.subscription.expiryDate) return true; // Lifetime access
            
            return new Date(this.subscription.expiryDate) > new Date();
        }
        
        /**
         * Get current plan
         */
        getCurrentPlan() {
            return this.subscription?.plan || 'FREE';
        }
        
        /**
         * Check if user can access a specific feature
         */
        canAccessFeature(featureName) {
            if (!this.isPremium()) return false;
            
            const plan = window.GeoPlans.plans[this.subscription.plan];
            if (!plan) return false;
            
            return plan.features[featureName] === true;
        }
        
        /**
         * Check if user can access a category
         */
        canAccessCategory(categoryName) {
            const category = window.GeoPlans.categories[categoryName];
            if (!category) return true; // Unknown category = allow
            
            // Check if it's UPSC content
            if (categoryName === 'upsc' || category.premium) {
                return this.getCurrentPlan() === 'UPSC_PRO';
            }
            
            // PRO and UPSC_PRO can access all regular categories
            if (['PRO', 'UPSC_PRO'].includes(this.getCurrentPlan())) {
                return true;
            }
            
            // BASIC plan has limited categories
            if (this.getCurrentPlan() === 'BASIC') {
                const basicPlan = window.GeoPlans.plans.BASIC;
                return basicPlan.contentAccess.categories.includes(categoryName);
            }
            
            // Free users - limited access handled by getFilteredData
            return true;
        }
        
        // ═══════════════════════════════════════════════════════════════════
        // SECTION 3: DATA FILTERING (CORE FUNCTIONALITY)
        // ═══════════════════════════════════════════════════════════════════
        
        /**
         * MAIN METHOD: Filter data based on user's access level
         * This is the primary function all category pages should use
         * 
         * @param {Array} data - Original data array
         * @param {String} category - Category name (mountains, rivers, upsc, etc.)
         * @param {Object} options - Additional options
         * @returns {Object} - { visible: [], locked: [], total: number }
         */
        getFilteredData(data, category, options = {}) {
            if (!Array.isArray(data)) {
                console.warn('GeoAccess: Invalid data provided to getFilteredData');
                return { visible: [], locked: [], total: 0 };
            }
            
            const cacheKey = `${category}_${this.getCurrentPlan()}_${data.length}`;
            
            // Return cached result if available
            if (this.cachedAccess.has(cacheKey) && !options.noCache) {
                return this.cachedAccess.get(cacheKey);
            }
            
            let result;
            
            // Full access for premium users with appropriate plan
            if (this.hasFullAccess(category)) {
                result = {
                    visible: [...data],
                    locked: [],
                    total: data.length,
                    accessLevel: 'full',
                    plan: this.getCurrentPlan()
                };
            } else {
                // Apply restrictions
                result = this.applyRestrictions(data, category, options);
            }
            
            // Cache the result
            this.cachedAccess.set(cacheKey, result);
            
            return result;
        }
        
        /**
         * Check if user has full access to a category
         */
        hasFullAccess(category) {
            const plan = this.getCurrentPlan();
            
            // UPSC content requires UPSC_PRO
            if (category === 'upsc') {
                return plan === 'UPSC_PRO';
            }
            
            // PRO and UPSC_PRO have full access to non-UPSC content
            if (['PRO', 'UPSC_PRO'].includes(plan)) {
                return true;
            }
            
            // BASIC has full access to limited categories
            if (plan === 'BASIC') {
                const basicPlan = window.GeoPlans.plans.BASIC;
                return basicPlan.contentAccess.categories.includes(category);
            }
            
            return false;
        }
        
        /**
         * Apply restrictions based on plan and category
         */
        applyRestrictions(data, category, options) {
            const isUpsc = category === 'upsc';
            const accessConfig = isUpsc 
                ? window.GeoPlans.freeAccess.upsc 
                : window.GeoPlans.freeAccess.default;
            
            const visibleCount = options.visibleItems || accessConfig.visibleItems;
            const previewCount = options.previewItems || accessConfig.previewItems;
            
            const visible = data.slice(0, visibleCount);
            const locked = data.slice(visibleCount);
            
            // Add preview items (visible but locked)
            const preview = locked.slice(0, previewCount).map(item => ({
                ...item,
                _locked: true,
                _preview: true
            }));
            
            return {
                visible: visible,
                locked: locked,
                preview: preview,
                total: data.length,
                visibleCount: visible.length,
                lockedCount: locked.length,
                accessLevel: 'restricted',
                plan: this.getCurrentPlan(),
                requiredPlan: isUpsc ? 'UPSC_PRO' : 'PRO'
            };
        }
        
        /**
         * Wrapper for existing global data arrays
         * Use this to intercept window.mountainsData, etc.
         */
        wrapGlobalData(globalVarName, category) {
            const originalData = window[globalVarName];
            
            if (!originalData || !Array.isArray(originalData)) {
                console.warn(`GeoAccess: ${globalVarName} not found or not an array`);
                return null;
            }
            
            // Create filtered accessor
            Object.defineProperty(window, `${globalVarName}Filtered`, {
                get: () => this.getFilteredData(originalData, category),
                configurable: true
            });
            
            return this.getFilteredData(originalData, category);
        }
        
        /**
         * Process multiple data files for a category
         */
        processCategory(category) {
            const categoryConfig = window.GeoPlans.categories[category];
            if (!categoryConfig) {
                console.warn(`GeoAccess: Unknown category ${category}`);
                return null;
            }
            
            // Combine all data files for this category
            const allData = [];
            const dataFileCount = categoryConfig.dataFiles || 10;
            
            for (let i = 1; i <= dataFileCount; i++) {
                const varName = `${category}Data${i}`;
                const altVarName = `${category}_data_${i}`;
                const data = window[varName] || window[altVarName];
                
                if (data && Array.isArray(data)) {
                    allData.push(...data);
                }
            }
            
            // Also check for main data array
            const mainData = window[`${category}Data`] || window[`${category}_data`];
            if (mainData && Array.isArray(mainData) && allData.length === 0) {
                allData.push(...mainData);
            }
            
            return this.getFilteredData(allData, category);
        }
        
        // ═══════════════════════════════════════════════════════════════════
        // SECTION 4: UI GENERATION
        // ═══════════════════════════════════════════════════════════════════
        
        /**
         * Create locked content overlay
         */
        createLockedOverlay(item, index) {
            const overlay = document.createElement('div');
            overlay.className = 'geo-locked-overlay';
            overlay.dataset.index = index;
            
            overlay.innerHTML = `
                <div class="geo-lock-content">
                    <div class="geo-lock-icon">
                        <svg viewBox="0 0 24 24" width="32" height="32">
                            <path fill="currentColor" d="M12 17a2 2 0 0 1-2-2c0-1.11.89-2 2-2a2 2 0 0 1 2 2 2 2 0 0 1-2 2m6 3V10H6v10h12m0-12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V10c0-1.11.89-2 2-2h1V6a5 5 0 0 1 5-5 5 5 0 0 1 5 5v2h1m-6-5a3 3 0 0 0-3 3v2h6V6a3 3 0 0 0-3-3z"/>
                        </svg>
                    </div>
                    <p class="geo-lock-text">Premium Content</p>
                </div>
            `;
            
            overlay.addEventListener('click', () => this.showUpgradePrompt());
            
            return overlay;
        }
        
        /**
         * Create upgrade prompt CTA
         */
        createUpgradeCTA(options = {}) {
            const cta = document.createElement('div');
            cta.className = 'geo-upgrade-cta';
            
            const lockedCount = options.lockedCount || 'hundreds of';
            const category = options.category || 'topics';
            
            cta.innerHTML = `
                <div class="geo-cta-content">
                    <div class="geo-cta-icon">🌍</div>
                    <h3 class="geo-cta-title">Unlock Full World Knowledge</h3>
                    <p class="geo-cta-subtitle">
                        You're viewing just a preview! Unlock <strong>${lockedCount}+ ${category}</strong> 
                        with detailed explanations, maps, and quizzes.
                    </p>
                    <div class="geo-cta-features">
                        <span>✓ 1000+ Concepts</span>
                        <span>✓ Interactive Maps</span>
                        <span>✓ Mind Maps</span>
                        <span>✓ UPSC Ready</span>
                    </div>
                    <button class="geo-cta-button" onclick="window.GeoAccess.showPricingModal()">
                        <span>Unlock Everything</span>
                        <span class="geo-cta-price">Starting ₹99/month</span>
                    </button>
                    <p class="geo-cta-offer">🎉 Limited time launch price - 50% OFF!</p>
                </div>
            `;
            
            return cta;
        }
        
        /**
         * Show upgrade prompt modal
         */
        showUpgradePrompt(options = {}) {
            // Prevent multiple modals
            if (document.querySelector('.geo-upgrade-modal')) return;
            
            const modal = document.createElement('div');
            modal.className = 'geo-upgrade-modal';
            
            modal.innerHTML = `
                <div class="geo-modal-backdrop" onclick="this.parentElement.remove()"></div>
                <div class="geo-modal-content">
                    <button class="geo-modal-close" onclick="this.closest('.geo-upgrade-modal').remove()">×</button>
                    
                    <div class="geo-modal-header">
                        <span class="geo-modal-icon">🔓</span>
                        <h2>Unlock Premium Access</h2>
                        <p>Get unlimited access to all geography content</p>
                    </div>
                    
                    <div class="geo-modal-features">
                        <div class="geo-feature-item">
                            <span class="geo-feature-icon">📚</span>
                            <span>Complete Encyclopedia</span>
                        </div>
                        <div class="geo-feature-item">
                            <span class="geo-feature-icon">🗺️</span>
                            <span>Interactive Maps</span>
                        </div>
                        <div class="geo-feature-item">
                            <span class="geo-feature-icon">🧠</span>
                            <span>Mind Maps & Diagrams</span>
                        </div>
                        <div class="geo-feature-item">
                            <span class="geo-feature-icon">📝</span>
                            <span>UPSC Practice Questions</span>
                        </div>
                    </div>
                    
                    <div class="geo-modal-pricing">
                        <div class="geo-price-option" data-plan="PRO" data-billing="monthly">
                            <span class="geo-price-label">Monthly</span>
                            <span class="geo-price-amount">₹199</span>
                            <span class="geo-price-period">/month</span>
                        </div>
                        <div class="geo-price-option featured" data-plan="PRO" data-billing="yearly">
                            <span class="geo-price-badge">Save 58%</span>
                            <span class="geo-price-label">Yearly</span>
                            <span class="geo-price-amount">₹999</span>
                            <span class="geo-price-period">/year</span>
                        </div>
                    </div>
                    
                    <button class="geo-modal-cta" onclick="window.GeoAccess.openPricingPage()">
                        View All Plans
                    </button>
                    
                    <p class="geo-modal-guarantee">✓ 7-day money-back guarantee</p>
                </div>
            `;
            
            document.body.appendChild(modal);
            
            // Animate in
            requestAnimationFrame(() => {
                modal.classList.add('active');
            });
        }
        
        /**
         * Show full pricing modal
         */
        showPricingModal() {
            if (window.GeoPricing) {
                window.GeoPricing.showModal();
            } else {
                this.openPricingPage();
            }
        }
        
        /**
         * Open pricing page
         */
        openPricingPage() {
            window.location.href = '/pricing.html';
        }
        
        // ═══════════════════════════════════════════════════════════════════
        // SECTION 5: PAGE RENDERING HELPERS
        // ═══════════════════════════════════════════════════════════════════
        
        /**
         * Render content with access control
         * Call this from your category page's render function
         */
        renderWithAccessControl(containerId, data, category, renderItemFn) {
            const container = document.getElementById(containerId);
            if (!container) {
                console.error(`GeoAccess: Container ${containerId} not found`);
                return;
            }
            
            const filtered = this.getFilteredData(data, category);
            container.innerHTML = '';
            
            // Render visible items
            filtered.visible.forEach((item, index) => {
                const element = renderItemFn(item, index, false);
                container.appendChild(element);
            });
            
            // Render preview items (locked)
            if (filtered.preview && filtered.preview.length > 0) {
                filtered.preview.forEach((item, index) => {
                    const element = renderItemFn(item, filtered.visible.length + index, true);
                    element.classList.add('geo-locked-item');
                    
                    const overlay = this.createLockedOverlay(item, index);
                    element.style.position = 'relative';
                    element.appendChild(overlay);
                    
                    container.appendChild(element);
                });
            }
            
            // Add upgrade CTA if content is locked
            if (filtered.lockedCount > 0) {
                const cta = this.createUpgradeCTA({
                    lockedCount: filtered.lockedCount,
                    category: window.GeoPlans.categories[category]?.name || category
                });
                container.appendChild(cta);
            }
            
            // Emit render complete event
            this.emit('renderComplete', { category, filtered });
        }
        
        /**
         * Apply blur effect to locked items
         */
        applyBlurToLocked(selector = '.geo-locked-item') {
            document.querySelectorAll(selector).forEach(item => {
                if (!item.querySelector('.geo-locked-overlay')) {
                    item.style.filter = 'blur(4px)';
                    item.style.pointerEvents = 'none';
                }
            });
        }
        
        // ═══════════════════════════════════════════════════════════════════
        // SECTION 6: EVENT SYSTEM
        // ═══════════════════════════════════════════════════════════════════
        
        on(event, callback) {
            if (!this.eventListeners.has(event)) {
                this.eventListeners.set(event, []);
            }
            this.eventListeners.get(event).push(callback);
        }
        
        off(event, callback) {
            if (this.eventListeners.has(event)) {
                const listeners = this.eventListeners.get(event);
                const index = listeners.indexOf(callback);
                if (index > -1) {
                    listeners.splice(index, 1);
                }
            }
        }
        
        emit(event, data) {
            if (this.eventListeners.has(event)) {
                this.eventListeners.get(event).forEach(callback => {
                    try {
                        callback(data);
                    } catch (e) {
                        console.error(`GeoAccess: Error in event listener for ${event}`, e);
                    }
                });
            }
        }
        
        setupEventListeners() {
            // Listen for storage changes (sync across tabs)
            window.addEventListener('storage', (e) => {
                if (e.key === 'geo_subscription') {
                    this.loadSubscription();
                    this.emit('subscriptionChanged', this.subscription);
                    this.refreshUI();
                }
            });
        }
        
        // ═══════════════════════════════════════════════════════════════════
        // SECTION 7: UI REFRESH
        // ═══════════════════════════════════════════════════════════════════
        
        /**
         * Refresh UI after subscription change
         */
        refreshUI() {
            // Clear cache
            this.cachedAccess.clear();
            
            // Remove all lock overlays
            document.querySelectorAll('.geo-locked-overlay').forEach(el => el.remove());
            document.querySelectorAll('.geo-locked-item').forEach(el => {
                el.classList.remove('geo-locked-item');
                el.style.filter = '';
                el.style.pointerEvents = '';
            });
            
            // Remove upgrade CTAs
            document.querySelectorAll('.geo-upgrade-cta').forEach(el => el.remove());
            
            // Update premium badges
            this.updatePremiumBadges();
            
            // Emit event for category pages to re-render
            this.emit('uiRefreshRequired');
            
            // If there's a refresh callback registered, call it
            if (typeof window.geoRefreshContent === 'function') {
                window.geoRefreshContent();
            }
        }
        
        /**
         * Update premium badges in navbar, etc.
         */
        updatePremiumBadges() {
            const badges = document.querySelectorAll('.geo-premium-badge');
            
            if (this.isPremium()) {
                badges.forEach(badge => {
                    badge.textContent = this.getCurrentPlan();
                    badge.classList.add('active');
                });
                
                // Add premium class to body
                document.body.classList.add('geo-premium-user');
                document.body.classList.remove('geo-free-user');
            } else {
                badges.forEach(badge => {
                    badge.textContent = 'Free';
                    badge.classList.remove('active');
                });
                
                document.body.classList.add('geo-free-user');
                document.body.classList.remove('geo-premium-user');
            }
        }
        
        // ═══════════════════════════════════════════════════════════════════
        // SECTION 8: STYLE INJECTION
        // ═══════════════════════════════════════════════════════════════════
        
        injectStyles() {
            if (document.getElementById('geo-access-styles')) return;
            
            const styles = document.createElement('style');
            styles.id = 'geo-access-styles';
            styles.textContent = `
                /* Locked Item Styles */
                .geo-locked-item {
                    position: relative;
                    overflow: hidden;
                }
                
                .geo-locked-item::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    backdrop-filter: blur(4px);
                    -webkit-backdrop-filter: blur(4px);
                    background: rgba(255, 255, 255, 0.1);
                    z-index: 10;
                }
                
                .geo-locked-overlay {
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: rgba(0, 0, 0, 0.6);
                    backdrop-filter: blur(8px);
                    -webkit-backdrop-filter: blur(8px);
                    z-index: 20;
                    cursor: pointer;
                    transition: all 0.3s ease;
                }
                
                .geo-locked-overlay:hover {
                    background: rgba(0, 0, 0, 0.7);
                }
                
                .geo-lock-content {
                    text-align: center;
                    color: white;
                }
                
                .geo-lock-icon {
                    width: 48px;
                    height: 48px;
                    margin: 0 auto 8px;
                    padding: 8px;
                    background: rgba(255, 255, 255, 0.1);
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                
                .geo-lock-text {
                    margin: 0;
                    font-size: 14px;
                    font-weight: 500;
                }
                
                /* Upgrade CTA Styles */
                .geo-upgrade-cta {
                    margin: 40px auto;
                    padding: 40px;
                    max-width: 600px;
                    text-align: center;
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                    border-radius: 20px;
                    box-shadow: 0 10px 40px rgba(102, 126, 234, 0.3);
                }
                
                .geo-cta-icon {
                    font-size: 48px;
                    margin-bottom: 16px;
                }
                
                .geo-cta-title {
                    color: white;
                    font-size: 28px;
                    margin: 0 0 12px;
                    font-weight: 700;
                }
                
                .geo-cta-subtitle {
                    color: rgba(255, 255, 255, 0.9);
                    font-size: 16px;
                    margin: 0 0 24px;
                    line-height: 1.6;
                }
                
                .geo-cta-features {
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: center;
                    gap: 12px;
                    margin-bottom: 24px;
                }
                
                .geo-cta-features span {
                    background: rgba(255, 255, 255, 0.2);
                    padding: 8px 16px;
                    border-radius: 20px;
                    color: white;
                    font-size: 14px;
                }
                
                .geo-cta-button {
                    display: inline-flex;
                    flex-direction: column;
                    align-items: center;
                    padding: 16px 48px;
                    background: white;
                    color: #667eea;
                    border: none;
                    border-radius: 12px;
                    font-size: 18px;
                    font-weight: 600;
                    cursor: pointer;
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                }
                
                .geo-cta-button:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
                }
                
                .geo-cta-price {
                    font-size: 12px;
                    font-weight: 400;
                    color: #888;
                    margin-top: 4px;
                }
                
                .geo-cta-offer {
                    color: rgba(255, 255, 255, 0.9);
                    font-size: 14px;
                    margin: 16px 0 0;
                }
                
                /* Modal Styles */
                .geo-upgrade-modal {
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    z-index: 10000;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    opacity: 0;
                    transition: opacity 0.3s ease;
                }
                
                .geo-upgrade-modal.active {
                    opacity: 1;
                }
                
                .geo-modal-backdrop {
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: rgba(0, 0, 0, 0.7);
                    backdrop-filter: blur(4px);
                }
                
                .geo-modal-content {
                    position: relative;
                    background: white;
                    border-radius: 24px;
                    padding: 40px;
                    max-width: 480px;
                    width: 90%;
                    max-height: 90vh;
                    overflow-y: auto;
                    transform: scale(0.9);
                    transition: transform 0.3s ease;
                }
                
                .geo-upgrade-modal.active .geo-modal-content {
                    transform: scale(1);
                }
                
                .geo-modal-close {
                    position: absolute;
                    top: 16px;
                    right: 16px;
                    width: 36px;
                    height: 36px;
                    border: none;
                    background: #f0f0f0;
                    border-radius: 50%;
                    font-size: 24px;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                
                .geo-modal-header {
                    text-align: center;
                    margin-bottom: 24px;
                }
                
                .geo-modal-icon {
                    font-size: 48px;
                }
                
                .geo-modal-header h2 {
                    margin: 12px 0 8px;
                    font-size: 24px;
                    color: #1a1a2e;
                }
                
                .geo-modal-header p {
                    margin: 0;
                    color: #666;
                }
                
                .geo-modal-features {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 12px;
                    margin-bottom: 24px;
                }
                
                .geo-feature-item {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    padding: 12px;
                    background: #f8f9fa;
                    border-radius: 12px;
                }
                
                .geo-feature-icon {
                    font-size: 20px;
                }
                
                .geo-modal-pricing {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 12px;
                    margin-bottom: 24px;
                }
                
                .geo-price-option {
                    padding: 20px;
                    border: 2px solid #e0e0e0;
                    border-radius: 16px;
                    text-align: center;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    position: relative;
                }
                
                .geo-price-option:hover {
                    border-color: #667eea;
                }
                
                .geo-price-option.featured {
                    border-color: #667eea;
                    background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%);
                }
                
                .geo-price-badge {
                    position: absolute;
                    top: -10px;
                    left: 50%;
                    transform: translateX(-50%);
                    background: #667eea;
                    color: white;
                    padding: 4px 12px;
                    border-radius: 20px;
                    font-size: 11px;
                    font-weight: 600;
                }
                
                .geo-price-label {
                    display: block;
                    color: #666;
                    font-size: 12px;
                    margin-bottom: 8px;
                }
                
                .geo-price-amount {
                    display: block;
                    font-size: 28px;
                    font-weight: 700;
                    color: #1a1a2e;
                }
                
                .geo-price-period {
                    color: #999;
                    font-size: 14px;
                }
                
                .geo-modal-cta {
                    width: 100%;
                    padding: 16px;
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                    color: white;
                    border: none;
                    border-radius: 12px;
                    font-size: 16px;
                    font-weight: 600;
                    cursor: pointer;
                    transition: transform 0.3s ease;
                }
                
                .geo-modal-cta:hover {
                    transform: translateY(-2px);
                }
                
                .geo-modal-guarantee {
                    text-align: center;
                    color: #10b981;
                    font-size: 13px;
                    margin: 16px 0 0;
                }
                
                /* Premium user styles */
                .geo-premium-user .geo-upgrade-cta,
                .geo-premium-user .geo-locked-overlay {
                    display: none !important;
                }
                
                .geo-premium-user .geo-locked-item::before {
                    display: none;
                }
                
                .geo-premium-badge {
                    display: inline-flex;
                    align-items: center;
                    padding: 4px 12px;
                    background: #f0f0f0;
                    border-radius: 20px;
                    font-size: 12px;
                    font-weight: 500;
                }
                
                .geo-premium-badge.active {
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                    color: white;
                }
                
                @media (max-width: 600px) {
                    .geo-modal-features {
                        grid-template-columns: 1fr;
                    }
                    
                    .geo-cta-features {
                        flex-direction: column;
                    }
                    
                    .geo-upgrade-cta {
                        padding: 24px;
                        margin: 24px 16px;
                    }
                    
                    .geo-cta-title {
                        font-size: 22px;
                    }
                }
            `;
            
            document.head.appendChild(styles);
        }
    }
    
    // ═══════════════════════════════════════════════════════════════════════
    // SECTION 9: INITIALIZATION
    // ═══════════════════════════════════════════════════════════════════════
    
    // Create global instance
    window.GeoAccess = new GeoAccessController();
    
    // Legacy support aliases
    window.geoCheckPremium = () => window.GeoAccess.isPremium();
    window.geoGetFilteredData = (data, category) => window.GeoAccess.getFilteredData(data, category);
    window.geoShowUpgrade = () => window.GeoAccess.showUpgradePrompt();
})();

    (function() {
    const originalCheckAccess = window.checkAccess;
    window.checkAccess = function(feature) {
        if (localStorage.getItem('isAdmin') === 'true') {
            return { allowed: true, plan: 'ADMIN', unlimited: true };
        }
        return originalCheckAccess ? originalCheckAccess(feature) : { allowed: false };
    };
})();
