/**
 * GEOGRAPHY APP - PAYMENT HANDLER
 * Supports Razorpay (India) and PayPal (International)
 */

(function() {
    'use strict';
    
    class GeoPaymentHandler {
        constructor() {
            this.razorpayLoaded = false;
            this.paypalLoaded = false;
            this.userCountry = null;
            this.currency = 'INR';
            this.earlyBirdUsed = false;
            
            this.init();
        }
        
        async init() {
            await this.detectUserLocation();
            this.loadPaymentScripts();
            
            console.log('💳 GeoPayment: Payment Handler Initialized');
            console.log(`   Country: ${this.userCountry}, Currency: ${this.currency}`);
        }
        
        // ═══════════════════════════════════════════════════════════════════
        // LOCATION & CURRENCY DETECTION
        // ═══════════════════════════════════════════════════════════════════
        
        async detectUserLocation() {
            // Method 1: Browser locale
            const locale = navigator.language || navigator.userLanguage;
            
            if (locale && locale.includes('IN')) {
                this.userCountry = 'IN';
                this.currency = 'INR';
                return;
            }
            
            // Method 2: Timezone
            const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
            if (timezone && timezone.includes('Kolkata') || timezone.includes('India')) {
                this.userCountry = 'IN';
                this.currency = 'INR';
                return;
            }
            
            // Method 3: IP-based detection (fallback)
            try {
                const response = await fetch('https://ipapi.co/json/', { timeout: 3000 });
                const data = await response.json();
                
                this.userCountry = data.country_code;
                this.currency = data.country_code === 'IN' ? 'INR' : 'USD';
            } catch (e) {
                // Default to USD for international
                this.userCountry = 'US';
                this.currency = 'USD';
            }
        }
        
        isIndianUser() {
            return this.userCountry === 'IN';
        }
        
        // ═══════════════════════════════════════════════════════════════════
        // SCRIPT LOADING
        // ═══════════════════════════════════════════════════════════════════
        
        loadPaymentScripts() {
            if (this.isIndianUser()) {
                this.loadRazorpay();
            } else {
                this.loadPayPal();
            }
        }
        
        loadRazorpay() {
            if (this.razorpayLoaded) return Promise.resolve();
            
            return new Promise((resolve, reject) => {
                const script = document.createElement('script');
                script.src = 'https://checkout.razorpay.com/v1/checkout.js';
                script.onload = () => {
                    this.razorpayLoaded = true;
                    resolve();
                };
                script.onerror = reject;
                document.head.appendChild(script);
            });
        }
        
        loadPayPal() {
            if (this.paypalLoaded) return Promise.resolve();
            
            // Replace with your PayPal client ID
            const clientId = 'YOUR_PAYPAL_CLIENT_ID';
            
            return new Promise((resolve, reject) => {
                const script = document.createElement('script');
                script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}&currency=USD`;
                script.onload = () => {
                    this.paypalLoaded = true;
                    resolve();
                };
                script.onerror = reject;
                document.head.appendChild(script);
            });
        }
        
        // ═══════════════════════════════════════════════════════════════════
        // PRICING CALCULATION
        // ═══════════════════════════════════════════════════════════════════
        
        getPrice(planId, billing, couponCode = null) {
            const plan = window.GeoPlans.plans[planId];
            if (!plan) throw new Error('Invalid plan');
            
            const currencyKey = this.currency;
            let price = plan.pricing[billing][currencyKey];
            let originalPrice = price;
            let discount = 0;
            let discountLabel = null;
            
            // Apply early bird discount for yearly plans
            if (billing === 'yearly' && this.canApplyEarlyBird()) {
                const earlyDiscount = window.GeoPlans.earlyBird.discount[currencyKey];
                price -= earlyDiscount;
                discount += earlyDiscount;
                discountLabel = window.GeoPlans.earlyBird.message;
            }
            
            // Apply coupon
            if (couponCode) {
                const couponDiscount = this.calculateCouponDiscount(couponCode, planId, price);
                if (couponDiscount > 0) {
                    price -= couponDiscount;
                    discount += couponDiscount;
                    discountLabel = `Coupon: ${couponCode}`;
                }
            }
            
            return {
                original: originalPrice,
                final: Math.max(price, 0),
                discount: discount,
                discountLabel: discountLabel,
                currency: currencyKey,
                currencySymbol: currencyKey === 'INR' ? '₹' : '$'
            };
        }
        
        canApplyEarlyBird() {
            const earlyBird = window.GeoPlans.earlyBird;
            return earlyBird.enabled && earlyBird.currentUsers < earlyBird.maxUsers;
        }
        
        calculateCouponDiscount(code, planId, currentPrice) {
            const coupon = window.GeoPlans.coupons[code.toUpperCase()];
            if (!coupon) return 0;
            
            // Check if coupon is valid for this plan
            if (coupon.validFor && !coupon.validFor.includes(planId)) {
                return 0;
            }
            
            // Check currency compatibility
            if (coupon.currency !== 'all' && coupon.currency !== this.currency) {
                return 0;
            }
            
            if (coupon.type === 'percent') {
                return Math.round(currentPrice * coupon.discount / 100);
            } else {
                return coupon.discount;
            }
        }
        
        // ═══════════════════════════════════════════════════════════════════
        // MAIN PAYMENT FUNCTION
        // ═══════════════════════════════════════════════════════════════════
        
        async initiatePayment(planId, billing, couponCode = null) {
            const priceInfo = this.getPrice(planId, billing, couponCode);
            
            if (this.isIndianUser()) {
                return this.processRazorpay(planId, billing, priceInfo);
            } else {
                return this.processPayPal(planId, billing, priceInfo);
            }
        }
        
        // ═══════════════════════════════════════════════════════════════════
        // RAZORPAY INTEGRATION
        // ═══════════════════════════════════════════════════════════════════
        
        async processRazorpay(planId, billing, priceInfo) {
            await this.loadRazorpay();
            
            const plan = window.GeoPlans.plans[planId];
            
            return new Promise((resolve, reject) => {
                const options = {
                    // Replace with your Razorpay Key ID
                    key: 'YOUR_RAZORPAY_KEY_ID',
                    amount: priceInfo.final * 100, // Amount in paise
                    currency: 'INR',
                    name: 'Geography App',
                    description: `${plan.name} Plan - ${billing === 'monthly' ? 'Monthly' : 'Yearly'}`,
                    image: '/assets/logo.png', // Your logo
                    
                    handler: (response) => {
                        // Payment successful
                        this.handlePaymentSuccess({
                            paymentId: response.razorpay_payment_id,
                            orderId: response.razorpay_order_id,
                            signature: response.razorpay_signature,
                            gateway: 'razorpay',
                            planId: planId,
                            billing: billing,
                            amount: priceInfo.final,
                            currency: 'INR'
                        });
                        resolve(response);
                    },
                    
                    prefill: {
                        name: '',
                        email: '',
                        contact: ''
                    },
                    
                    notes: {
                        planId: planId,
                        billing: billing
                    },
                    
                    theme: {
                        color: '#667eea'
                    },
                    
                    modal: {
                        ondismiss: () => {
                            reject(new Error('Payment cancelled'));
                        }
                    }
                };
                
                const razorpay = new Razorpay(options);
                razorpay.on('payment.failed', (response) => {
                    this.handlePaymentFailure(response.error);
                    reject(response.error);
                });
                
                razorpay.open();
            });
        }
        
        // ═══════════════════════════════════════════════════════════════════
        // PAYPAL INTEGRATION
        // ═══════════════════════════════════════════════════════════════════
        
        async processPayPal(planId, billing, priceInfo) {
            await this.loadPayPal();
            
            const plan = window.GeoPlans.plans[planId];
            
            return new Promise((resolve, reject) => {
                // Create PayPal buttons container if not exists
                let container = document.getElementById('geo-paypal-container');
                if (!container) {
                    container = document.createElement('div');
                    container.id = 'geo-paypal-container';
                    document.body.appendChild(container);
                }
                
                // Show PayPal modal
                this.showPayPalModal(planId, billing, priceInfo, resolve, reject);
            });
        }
        
        showPayPalModal(planId, billing, priceInfo, resolve, reject) {
            const plan = window.GeoPlans.plans[planId];
            
            // Create modal
            const modal = document.createElement('div');
            modal.className = 'geo-paypal-modal';
            modal.innerHTML = `
                <div class="geo-paypal-backdrop"></div>
                <div class="geo-paypal-content">
                    <button class="geo-paypal-close" onclick="this.closest('.geo-paypal-modal').remove()">×</button>
                    <h2>Complete Your Purchase</h2>
                    <div class="geo-paypal-summary">
                        <p><strong>${plan.name} Plan</strong></p>
                        <p>${billing === 'monthly' ? 'Monthly' : 'Yearly'} Subscription</p>
                        <p class="geo-paypal-price">${priceInfo.currencySymbol}${priceInfo.final}</p>
                    </div>
                    <div id="geo-paypal-buttons"></div>
                </div>
            `;
            
            document.body.appendChild(modal);
            
            // Render PayPal buttons
            paypal.Buttons({
                createOrder: (data, actions) => {
                    return actions.order.create({
                        purchase_units: [{
                            description: `${plan.name} Plan - ${billing}`,
                            amount: {
                                value: priceInfo.final.toString()
                            }
                        }]
                    });
                },
                
                onApprove: async (data, actions) => {
                    const order = await actions.order.capture();
                    
                    modal.remove();
                    
                    this.handlePaymentSuccess({
                        paymentId: order.id,
                        gateway: 'paypal',
                        planId: planId,
                        billing: billing,
                        amount: priceInfo.final,
                        currency: 'USD'
                    });
                    
                    resolve(order);
                },
                
                onCancel: () => {
                    modal.remove();
                    reject(new Error('Payment cancelled'));
                },
                
                onError: (err) => {
                    modal.remove();
                    this.handlePaymentFailure(err);
                    reject(err);
                }
            }).render('#geo-paypal-buttons');
        }
        
        // ═══════════════════════════════════════════════════════════════════
        // PAYMENT RESULT HANDLERS
        // ═══════════════════════════════════════════════════════════════════
        
        handlePaymentSuccess(paymentData) {
            // Calculate expiry date
            const startDate = new Date();
            const expiryDate = new Date(startDate);
            
            if (paymentData.billing === 'monthly') {
                expiryDate.setMonth(expiryDate.getMonth() + 1);
            } else {
                expiryDate.setFullYear(expiryDate.getFullYear() + 1);
            }
            
            // Save subscription
            const subscription = window.GeoAccess.saveSubscription({
                plan: paymentData.planId,
                billing: paymentData.billing,
                startDate: startDate.toISOString(),
                expiryDate: expiryDate.toISOString(),
                paymentId: paymentData.paymentId,
                amount: paymentData.amount,
                currency: paymentData.currency,
                gateway: paymentData.gateway
            });
            
            // Store transaction for backend sync
            this.storeTransaction(paymentData);
            
            // Show success UI
            this.showSuccessScreen(paymentData);
            
            // Refresh UI to unlock content
            window.GeoAccess.refreshUI();
            
            // Emit event
            window.GeoAccess.emit('paymentSuccess', paymentData);
        }
        
        handlePaymentFailure(error) {
            console.error('Payment failed:', error);
            
            this.showFailureScreen(error);
            
            window.GeoAccess.emit('paymentFailed', error);
        }
        
        storeTransaction(paymentData) {
            // Store locally for backend sync
            const transactions = JSON.parse(localStorage.getItem('geo_transactions') || '[]');
            transactions.push({
                ...paymentData,
                timestamp: new Date().toISOString(),
                synced: false
            });
            localStorage.setItem('geo_transactions', JSON.stringify(transactions));
            
            // Attempt to sync with backend
            this.syncWithBackend(paymentData);
        }
        
        async syncWithBackend(paymentData) {
            try {
                // Replace with your backend endpoint
                const response = await fetch('/api/payments/verify', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(paymentData)
                });
                
                if (response.ok) {
                    // Mark as synced
                    const transactions = JSON.parse(localStorage.getItem('geo_transactions') || '[]');
                    const updated = transactions.map(t => 
                        t.paymentId === paymentData.paymentId ? { ...t, synced: true } : t
                    );
                    localStorage.setItem('geo_transactions', JSON.stringify(updated));
                }
            } catch (e) {
                console.warn('Backend sync failed, will retry later');
            }
        }
        
        // ═══════════════════════════════════════════════════════════════════
        // SUCCESS/FAILURE SCREENS
        // ═══════════════════════════════════════════════════════════════════
        
        showSuccessScreen(paymentData) {
            const plan = window.GeoPlans.plans[paymentData.planId];
            
            const modal = document.createElement('div');
            modal.className = 'geo-result-modal success';
            modal.innerHTML = `
                <div class="geo-result-backdrop"></div>
                <div class="geo-result-content">
                    <div class="geo-result-icon">
                        <svg viewBox="0 0 24 24" width="64" height="64">
                            <circle cx="12" cy="12" r="10" fill="#10b981"/>
                            <path fill="white" d="M9 12l2 2 4-4" stroke="white" stroke-width="2" fill="none"/>
                        </svg>
                    </div>
                    <h2>Payment Successful! 🎉</h2>
                    <p>Welcome to <strong>${plan.name}</strong> Plan</p>
                    <div class="geo-result-details">
                        <p>Your subscription is now active.</p>
                        <p>You have full access to all ${plan.name} features.</p>
                    </div>
                    <button class="geo-result-button" onclick="this.closest('.geo-result-modal').remove(); location.reload();">
                        Start Exploring
                    </button>
                </div>
            `;
            
            document.body.appendChild(modal);
            
            // Add confetti effect
            this.celebrateSuccess();
        }
        
        showFailureScreen(error) {
            const modal = document.createElement('div');
            modal.className = 'geo-result-modal failure';
            modal.innerHTML = `
                <div class="geo-result-backdrop"></div>
                <div class="geo-result-content">
                    <div class="geo-result-icon">
                        <svg viewBox="0 0 24 24" width="64" height="64">
                            <circle cx="12" cy="12" r="10" fill="#ef4444"/>
                            <path fill="white" d="M15 9l-6 6M9 9l6 6" stroke="white" stroke-width="2"/>
                        </svg>
                    </div>
                    <h2>Payment Failed</h2>
                    <p>Don't worry, no amount was deducted.</p>
                    <div class="geo-result-details">
                        <p>Please try again or use a different payment method.</p>
                    </div>
                    <button class="geo-result-button" onclick="this.closest('.geo-result-modal').remove();">
                        Try Again
                    </button>
                    <button class="geo-result-secondary" onclick="window.open('mailto:support@geoapp.com')">
                        Contact Support
                    </button>
                </div>
            `;
            
            document.body.appendChild(modal);
        }
        
        celebrateSuccess() {
            // Simple confetti effect
            const colors = ['#667eea', '#764ba2', '#10b981', '#f59e0b', '#ef4444'];
            
            for (let i = 0; i < 50; i++) {
                setTimeout(() => {
                    const confetti = document.createElement('div');
                    confetti.className = 'geo-confetti';
                    confetti.style.cssText = `
                        position: fixed;
                        width: 10px;
                        height: 10px;
                        background: ${colors[Math.floor(Math.random() * colors.length)]};
                        left: ${Math.random() * 100}vw;
                        top: -10px;
                        border-radius: ${Math.random() > 0.5 ? '50%' : '0'};
                        z-index: 10001;
                        animation: confetti-fall 3s ease-out forwards;
                    `;
                    document.body.appendChild(confetti);
                    
                    setTimeout(() => confetti.remove(), 3000);
                }, i * 50);
            }
        }
        
        // ═══════════════════════════════════════════════════════════════════
        // COUPON VALIDATION
        // ═══════════════════════════════════════════════════════════════════
        
        validateCoupon(code, planId) {
            const coupon = window.GeoPlans.coupons[code.toUpperCase()];
            
            if (!coupon) {
                return { valid: false, message: 'Invalid coupon code' };
            }
            
            if (coupon.validFor && !coupon.validFor.includes(planId)) {
                return { valid: false, message: 'Coupon not valid for this plan' };
            }
            
            if (coupon.currency !== 'all' && coupon.currency !== this.currency) {
                return { valid: false, message: 'Coupon not valid in your region' };
            }
            
            return {
                valid: true,
                discount: coupon.discount,
                type: coupon.type,
                message: coupon.type === 'percent' 
                    ? `${coupon.discount}% off applied!`
                    : `${this.currency === 'INR' ? '₹' : '$'}${coupon.discount} off applied!`
            };
        }
    }
    
    // ═══════════════════════════════════════════════════════════════════════
    // ADDITIONAL STYLES
    // ═══════════════════════════════════════════════════════════════════════
    
    const paymentStyles = document.createElement('style');
    paymentStyles.textContent = `
        .geo-paypal-modal,
        .geo-result-modal {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            z-index: 10001;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        .geo-paypal-backdrop,
        .geo-result-backdrop {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.8);
        }
        
        .geo-paypal-content,
        .geo-result-content {
            position: relative;
            background: white;
            border-radius: 24px;
            padding: 40px;
            max-width: 400px;
            width: 90%;
            text-align: center;
        }
        
        .geo-paypal-close {
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
        }
        
        .geo-paypal-summary {
            background: #f8f9fa;
            padding: 20px;
            border-radius: 12px;
            margin: 20px 0;
        }
        
        .geo-paypal-price {
            font-size: 32px;
            font-weight: 700;
            color: #667eea;
        }
        
        #geo-paypal-buttons {
            margin-top: 20px;
        }
        
        .geo-result-icon {
            margin-bottom: 20px;
        }
        
        .geo-result-content h2 {
            margin: 0 0 12px;
            font-size: 24px;
        }
        
        .geo-result-details {
            margin: 20px 0;
            color: #666;
        }
        
        .geo-result-button {
            width: 100%;
            padding: 16px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            border: none;
            border-radius: 12px;
            font-size: 16px;
            font-weight: 600;
            cursor: pointer;
            margin-bottom: 12px;
        }
        
        .geo-result-secondary {
            width: 100%;
            padding: 12px;
            background: transparent;
            color: #666;
            border: 1px solid #ddd;
            border-radius: 12px;
            font-size: 14px;
            cursor: pointer;
        }
        
        @keyframes confetti-fall {
            to {
                transform: translateY(100vh) rotate(720deg);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(paymentStyles);
    
    // Create global instance
    window.GeoPayment = new GeoPaymentHandler();
    
})();
