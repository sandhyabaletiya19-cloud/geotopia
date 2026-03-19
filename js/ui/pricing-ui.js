/**
 * GEOGRAPHY APP - PRICING PAGE UI
 */

(function() {
    'use strict';
    
    class GeoPricingUI {
        constructor() {
            this.currentBilling = 'monthly';
            this.selectedPlan = null;
            this.appliedCoupon = null;
            
            this.init();
        }
        
        init() {
            this.renderPricingCards();
            this.renderComparisonTable();
            this.setupEventListeners();
            this.checkEarlyBird();
            this.checkExistingSubscription();
        }
        
        // ═══════════════════════════════════════════════════════════════════
        // RENDER PRICING CARDS
        // ═══════════════════════════════════════════════════════════════════
        
        renderPricingCards() {
            const container = document.getElementById('pricingCards');
            if (!container) return;
            
            container.innerHTML = '';
            
            const planOrder = ['BASIC', 'PRO', 'UPSC_PRO'];
            
            planOrder.forEach(planId => {
                const plan = window.GeoPlans.plans[planId];
                const card = this.createPricingCard(planId, plan);
                container.appendChild(card);
            });
        }
        
        createPricingCard(planId, plan) {
            const priceInfo = window.GeoPayment.getPrice(planId, this.currentBilling, this.appliedCoupon);
            
            const card = document.createElement('div');
            card.className = `pricing-card ${plan.popular ? 'popular' : ''}`;
            card.dataset.plan = planId;
            
            // Feature list
            const featuresList = this.getFeaturesList(planId);
            
            card.innerHTML = `
                ${plan.popular ? '<span class="card-badge">Most Popular</span>' : ''}
                ${plan.badge ? `<span class="card-badge">${plan.badge}</span>` : ''}
                
                <div class="card-icon">${plan.icon}</div>
                <h3 class="card-name">${plan.name}</h3>
                <p class="card-description">${plan.description}</p>
                
                <div class="card-price">
                    ${priceInfo.discount > 0 ? `<span class="price-original">${priceInfo.currencySymbol}${priceInfo.original}</span>` : ''}
                    <span class="price-amount">${priceInfo.currencySymbol}${priceInfo.final}</span>
                    <span class="price-period">/${this.currentBilling === 'monthly' ? 'month' : 'year'}</span>
                    ${priceInfo.discount > 0 ? `<span class="price-discount">${priceInfo.discountLabel}</span>` : ''}
                </div>
                
                <ul class="card-features">
                    ${featuresList.map(f => `
                        <li>
                            <span class="feature-icon ${f.included ? 'included' : 'excluded'}">
                                ${f.included ? '✓' : '✕'}
                            </span>
                            <span>${f.name}</span>
                        </li>
                    `).join('')}
                </ul>
                
                <button class="card-cta ${plan.popular ? 'primary' : 'secondary'}" data-plan="${planId}">
                    Get ${plan.name}
                </button>
            `;
            
            return card;
        }
        
        getFeaturesList(planId) {
            const allFeatures = [
                { key: 'games', name: 'Geography Games' },
                { key: 'basicEncyclopedia', name: 'Basic Encyclopedia' },
                { key: 'fullEncyclopedia', name: 'Full Encyclopedia' },
                { key: 'earthSimulator', name: 'Earth Simulator' },
                { key: 'advancedMaps', name: 'Advanced Maps' },
                { key: 'upsc', name: 'UPSC Quiz (5000+ Q)' },
                { key: 'advancedConcepts', name: 'Advanced Concepts' },
                { key: 'mockTests', name: 'Mock Tests' }
            ];
            
            const plan = window.GeoPlans.plans[planId];
            
            return allFeatures.map(f => ({
                name: f.name,
                included: plan.features[f.key] === true
            }));
        }
        
        // ═══════════════════════════════════════════════════════════════════
        // RENDER COMPARISON TABLE
        // ═══════════════════════════════════════════════════════════════════
        
        renderComparisonTable() {
            const container = document.getElementById('comparisonTable');
            if (!container) return;
            
            const features = [
                { name: 'Geography Games', key: 'games' },
                { name: 'Basic Encyclopedia', key: 'basicEncyclopedia' },
                { name: 'Full Encyclopedia', key: 'fullEncyclopedia' },
                { name: 'Earth Simulator', key: 'earthSimulator' },
                { name: 'Advanced Maps', key: 'advancedMaps' },
                { name: 'UPSC Quiz Section', key: 'upsc' },
                { name: 'Advanced Concepts', key: 'advancedConcepts' },
                { name: 'Mock Tests', key: 'mockTests' }
            ];
            
            const plans = ['BASIC', 'PRO', 'UPSC_PRO'];
            
            container.innerHTML = `
                <table>
                    <thead>
                        <tr>
                            <th>Feature</th>
                            ${plans.map(p => `<th>${window.GeoPlans.plans[p].name}</th>`).join('')}
                        </tr>
                    </thead>
                    <tbody>
                        ${features.map(f => `
                            <tr>
                                <td>${f.name}</td>
                                ${plans.map(p => {
                                    const included = window.GeoPlans.plans[p].features[f.key];
                                    return `<td><span class="${included ? 'check' : 'cross'}">${included ? '✓' : '✕'}</span></td>`;
                                }).join('')}
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            `;
        }
        
        // ═══════════════════════════════════════════════════════════════════
        // EVENT LISTENERS
        // ═══════════════════════════════════════════════════════════════════
        
        setupEventListeners() {
            // Billing toggle
            document.querySelectorAll('.toggle-btn').forEach(btn => {
                btn.addEventListener('click', () => {
                    document.querySelectorAll('.toggle-btn').forEach(b => b.classList.remove('active'));
                    btn.classList.add('active');
                    this.currentBilling = btn.dataset.billing;
                    this.renderPricingCards();
                });
            });
            
            // Plan selection
            document.addEventListener('click', (e) => {
                if (e.target.classList.contains('card-cta')) {
                    const planId = e.target.dataset.plan;
                    this.handlePlanSelection(planId);
                }
            });
            
            // Coupon
            const couponBtn = document.getElementById('applyCoupon');
            if (couponBtn) {
                couponBtn.addEventListener('click', () => this.applyCoupon());
            }
            
            // FAQ
            document.querySelectorAll('.faq-question').forEach(btn => {
                btn.addEventListener('click', () => {
                    const item = btn.closest('.faq-item');
                    item.classList.toggle('active');
                });
            });
        }
        
        // ═══════════════════════════════════════════════════════════════════
        // PLAN SELECTION & PAYMENT
        // ═══════════════════════════════════════════════════════════════════
        
        async handlePlanSelection(planId) {
            this.selectedPlan = planId;
            
            // Check if already subscribed to this or higher plan
            if (window.GeoAccess.isPremium()) {
                const currentPlan = window.GeoAccess.getCurrentPlan();
                if (this.isPlanHigherOrEqual(currentPlan, planId)) {
                    this.showMessage('You already have this or a higher plan!', 'info');
                    return;
                }
            }
            
            // Show loading state
            const btn = document.querySelector(`[data-plan="${planId}"]`);
            const originalText = btn.textContent;
            btn.textContent = 'Processing...';
            btn.disabled = true;
            
            try {
                await window.GeoPayment.initiatePayment(
                    planId,
                    this.currentBilling,
                    this.appliedCoupon
                );
            } catch (error) {
                console.error('Payment error:', error);
            } finally {
                btn.textContent = originalText;
                btn.disabled = false;
            }
        }
        
        isPlanHigherOrEqual(currentPlan, newPlan) {
            const hierarchy = { 'FREE': 0, 'BASIC': 1, 'PRO': 2, 'UPSC_PRO': 3 };
            return hierarchy[currentPlan] >= hierarchy[newPlan];
        }
        
        // ═══════════════════════════════════════════════════════════════════
        // COUPON HANDLING
        // ═══════════════════════════════════════════════════════════════════
        
        applyCoupon() {
            const input = document.getElementById('couponInput');
            const message = document.getElementById('couponMessage');
            const code = input.value.trim().toUpperCase();
            
            if (!code) {
                message.textContent = 'Please enter a coupon code';
                message.className = 'coupon-message error';
                return;
            }
            
            // Validate coupon (we'll validate for all plans for now)
            const result = window.GeoPayment.validateCoupon(code, 'PRO');
            
            if (result.valid) {
                this.appliedCoupon = code;
                message.textContent = result.message;
                message.className = 'coupon-message success';
                this.renderPricingCards();
            } else {
                this.appliedCoupon = null;
                message.textContent = result.message;
                message.className = 'coupon-message error';
            }
        }
        
        // ═══════════════════════════════════════════════════════════════════
        // EARLY BIRD CHECK
        // ═══════════════════════════════════════════════════════════════════
        
        checkEarlyBird() {
            const badge = document.getElementById('earlyBirdBadge');
            if (!badge) return;
            
            const earlyBird = window.GeoPlans.earlyBird;
            
            if (earlyBird.enabled && earlyBird.currentUsers < earlyBird.maxUsers) {
                const remaining = earlyBird.maxUsers - earlyBird.currentUsers;
                badge.textContent = `🎉 Early Bird Offer - Only ${remaining} spots left!`;
                badge.style.display = 'inline-block';
            } else {
                badge.style.display = 'none';
            }
        }
        
        // ═══════════════════════════════════════════════════════════════════
        // EXISTING SUBSCRIPTION CHECK
        // ═══════════════════════════════════════════════════════════════════
        
        checkExistingSubscription() {
            if (window.GeoAccess.isPremium()) {
                const plan = window.GeoAccess.getCurrentPlan();
                const card = document.querySelector(`[data-plan="${plan}"]`);
                
                if (card) {
                    const btn = card.querySelector('.card-cta');
                    btn.textContent = 'Current Plan';
                    btn.disabled = true;
                    btn.style.opacity = '0.6';
                }
            }
        }
        
        // ═══════════════════════════════════════════════════════════════════
        // UTILITY
        // ═══════════════════════════════════════════════════════════════════
        
        showMessage(text, type = 'info') {
            const toast = document.createElement('div');
            toast.className = `geo-toast ${type}`;
            toast.textContent = text;
            toast.style.cssText = `
                position: fixed;
                bottom: 24px;
                left: 50%;
                transform: translateX(-50%);
                background: ${type === 'error' ? '#ef4444' : type === 'success' ? '#10b981' : '#667eea'};
                color: white;
                padding: 16px 32px;
                border-radius: 12px;
                font-weight: 500;
                z-index: 10000;
                animation: slideUp 0.3s ease;
            `;
            
            document.body.appendChild(toast);
            
            setTimeout(() => {
                toast.style.animation = 'slideDown 0.3s ease';
                setTimeout(() => toast.remove(), 300);
            }, 3000);
        }
    }
    
    // Add toast animation
    const toastStyles = document.createElement('style');
    toastStyles.textContent = `
        @keyframes slideUp {
            from { transform: translateX(-50%) translateY(100px); opacity: 0; }
            to { transform: translateX(-50%) translateY(0); opacity: 1; }
        }
        @keyframes slideDown {
            from { transform: translateX(-50%) translateY(0); opacity: 1; }
            to { transform: translateX(-50%) translateY(100px); opacity: 0; }
        }
    `;
    document.head.appendChild(toastStyles);
    
    // Initialize
    window.GeoPricing = new GeoPricingUI();
    
})();
