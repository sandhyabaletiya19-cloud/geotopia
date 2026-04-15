// ============================================
// DHARAVERSE - PAYMENT SYSTEM v2
// js/payment.js
// NO wrappers - everything is GLOBAL
// ============================================

var RAZORPAY_KEY = 'rzp_live_ScXeEzlZJLvNTL'; // ← Replace with your actual key

// ── PLAN CONFIG ──
var PLANS = {
    games: {
        name: 'Games Plan',
        icon: '🎮',
        description: 'All geography games unlocked',
        color: '#06B6D4',
        monthly: { inr: 4900,  usd: 200 },
        yearly:  { inr: 29900, usd: 700 },
        indiaOnly: false
    },
    upsc: {
        name: 'UPSC Plan',
        icon: '📚',
        description: 'Complete UPSC geography - India Only',
        color: '#6441A5',
        monthly: { inr: 9900,  usd: null },
        yearly:  { inr: 79900, usd: null },
        indiaOnly: true
    },
    pro: {
        name: 'Pro Plan',
        icon: '⭐',
        description: 'Everything except UPSC',
        color: '#D63384',
        monthly: { inr: 14900,  usd: 500 },
        yearly:  { inr: 119900, usd: 2200 },
        indiaOnly: false
    },
    ultimate: {
        name: 'Ultimate Plan',
        icon: '👑',
        description: 'Everything DharaVerse has to offer',
        color: '#FFD700',
        monthly: { inr: 39900,  usd: 700 },
        yearly:  { inr: 210000, usd: 3000 },
        indiaOnly: false
    }
};

// ── GET AMOUNT ──
function getAmount(planId, period, currency) {
    var plan = PLANS[planId];
    if (!plan) return 0;

    var pricing = (period === 'monthly') ? plan.monthly : plan.yearly;

    // Early bird for ultimate yearly INR
    if (planId === 'ultimate' && period === 'yearly' && currency === 'inr') {
        var ebCount = parseInt(localStorage.getItem('dv_earlybird_count') || '0');
        if (ebCount < 11) return 200000; // ₹2000
    }

    return pricing[currency] || 0;
}

// ── MAIN PAYMENT FUNCTION ──
function initPayment(planId, period) {
    period = period || 'yearly';

    console.log('💳 initPayment called | Plan:', planId, '| Period:', period);

    // ── ADMIN CHECK ──
    var isAdmin   = localStorage.getItem('dv_admin');
    var adminTime = parseInt(localStorage.getItem('dv_admin_time') || '0');
    var adminOk   = (isAdmin === 'true') &&
                    ((Date.now() - adminTime) < 24 * 60 * 60 * 1000);

    if (adminOk) {
        console.log('👑 Admin detected - simulating payment');
        var testAmount = {
            games: 299, upsc: 799, pro: 1199, ultimate: 2100
        }[planId] || 299;

        if (confirm(
            '👑 ADMIN TEST MODE\n\n' +
            'Plan: ' + (PLANS[planId] ? PLANS[planId].icon + ' ' + PLANS[planId].name : planId) + '\n' +
            'Period: ' + period + '\n' +
            'Amount: ₹' + testAmount + '\n\n' +
            'Click OK to simulate successful payment'
        )) {
            onPaymentSuccess(
                'ADMIN_TEST_' + Date.now(),
                planId,
                period,
                testAmount,
                'INR',
                'admin_test'
            );
        }
        return;
    }

    // ── AUTH CHECK ──
    var loggedIn = localStorage.getItem('dv_user_loggedin') === 'true';
    if (!loggedIn) {
        console.log('User not logged in - redirecting to auth');
        sessionStorage.setItem('dv_redirect_after_login', '/pricing.html');
        sessionStorage.setItem('dv_selected_plan', planId);
        sessionStorage.setItem('dv_selected_period', period);
        window.location.href = '/auth.html';
        return;
    }

    // ── PLAN EXISTS? ──
    var plan = PLANS[planId];
    if (!plan) {
        console.error('❌ Unknown plan:', planId);
        alert('Error: Unknown plan selected. Please refresh and try again.');
        return;
    }

    // ── INDIA CHECK ──
    var isIndia = localStorage.getItem('dv_user_isIndia') === 'true';
    console.log('Is India user:', isIndia);

    if (plan.indiaOnly && !isIndia) {
        showPaymentToast('This plan is available for India only 🇮🇳', 'warning');
        return;
    }

    // ── ALREADY ON THIS PLAN? ──
    var currentPlan = localStorage.getItem('dv_plan') || 'basic';
    if (currentPlan === planId) {
        showPaymentToast('You already have this plan active! 💜', 'info');
        return;
    }

    // ── ROUTE TO GATEWAY ──
    if (isIndia) {
        console.log('→ Opening Razorpay');
        payWithRazorpay(planId, period);
    } else {
        console.log('→ Opening PayPal');
        payWithPayPal(planId, period);
    }
}

// ── RAZORPAY PAYMENT ──
function payWithRazorpay(planId, period) {
    var plan   = PLANS[planId];
    var amount = getAmount(planId, period, 'inr');

    console.log('Razorpay | Amount (paise):', amount);

    // Check Razorpay loaded
    if (typeof Razorpay === 'undefined') {
        console.error('❌ Razorpay SDK not loaded!');
        alert('Payment gateway is loading. Please wait 3 seconds and try again.');
        return;
    }

    // Check key is set
    if (!RAZORPAY_KEY || RAZORPAY_KEY.includes('YOUR_ACTUAL_KEY')) {
        console.error('❌ Razorpay key not set!');
        alert('Payment not configured yet. Please contact support.');
        return;
    }

    var options = {
        key:         RAZORPAY_KEY,
        amount:      amount,
        currency:    'INR',
        name:        'DharaVerse',
        description: plan.name + ' - ' + period,
        image:       'https://dharaverse.com/logo.png',

        handler: function(response) {
            console.log('✅ Razorpay payment success:', response);
            onPaymentSuccess(
                response.razorpay_payment_id,
                planId,
                period,
                amount / 100,
                'INR',
                'razorpay'
            );
        },

        prefill: {
            name:    localStorage.getItem('dv_user_name')  || '',
            email:   localStorage.getItem('dv_user_email') || '',
            contact: localStorage.getItem('dv_user_phone') || ''
        },

        notes: {
            plan:   planId,
            period: period
        },

        theme: {
            color: plan.color || '#6441A5'
        },

        modal: {
            confirm_close: true,
            animation:     true,
            ondismiss: function() {
                console.log('Razorpay modal closed by user');
            }
        }
    };

    try {
        var rzp = new Razorpay(options);

        rzp.on('payment.failed', function(response) {
            console.error('❌ Payment failed:', response.error);
            onPaymentFailed(
                planId,
                response.error.description,
                response.error.code
            );
        });

        rzp.open();
        console.log('✅ Razorpay popup opened');

    } catch (err) {
        console.error('❌ Razorpay error:', err);
        alert('Payment error: ' + err.message);
    }
}

// ── PAYPAL PAYMENT ──
function payWithPayPal(planId, period) {
    var plan      = PLANS[planId];
    var amount    = getAmount(planId, period, 'usd');
    var amountUSD = (amount / 100).toFixed(2);

    if (!amount) {
        showPaymentToast('This plan is not available internationally.', 'warning');
        return;
    }

    var paypalUrl = 'https://www.paypal.com/paypalme/dharaverse/' + amountUSD + 'USD';
    window.open(paypalUrl, '_blank');

    setTimeout(function() {
        var confirmed = confirm(
            '💳 PayPal Payment\n\n' +
            'Plan: ' + plan.icon + ' ' + plan.name + '\n' +
            'Period: ' + period + '\n' +
            'Amount: $' + amountUSD + ' USD\n\n' +
            'Did you complete the PayPal payment?\n' +
            'Click OK if payment was successful'
        );

        if (confirmed) {
            var txnId = 'PP_' + Date.now() + '_' +
                        Math.random().toString(36).substr(2, 6).toUpperCase();
            onPaymentSuccess(
                txnId, planId, period,
                parseFloat(amountUSD), 'USD', 'paypal'
            );
        }
    }, 3000);
}

// ── PAYMENT SUCCESS ──
// ── PAYMENT SUCCESS ──
function onPaymentSuccess(paymentId, planId, period, amount, currency, gateway) {
    console.log('🎉 Payment Success! Saving data...');

    var plan   = PLANS[planId];
    var now    = new Date();
    var expiry = new Date();

    if (period === 'monthly') {
        expiry.setMonth(expiry.getMonth() + 1);
    } else {
        expiry.setFullYear(expiry.getFullYear() + 1);
    }

    var planData = {
        planId:       planId,
        planName:     plan ? plan.name : planId,
        period:       period,
        paymentId:    paymentId,
        amount:       amount,
        currency:     currency,
        gateway:      gateway,
        purchaseDate: now.toISOString(),
        expiryDate:   expiry.toISOString()
    };

    // =============================================
    // SAVE EVERYTHING FIRST — BEFORE REDIRECT
    // =============================================

    try {
        localStorage.setItem('dv_plan',          planId);
        localStorage.setItem('dv_plan_data',     JSON.stringify(planData));
        localStorage.setItem('dv_plan_period',   period);
        localStorage.setItem('dv_plan_expiry',   expiry.toISOString());
        localStorage.setItem('dv_premium',       'true');
        localStorage.setItem('dv_payment_id',    paymentId);
        localStorage.setItem('dv_purchase_date', now.toISOString());

        var ultimateFeatures = {
            games:            Infinity,
            upsc:             planId === 'upsc' || planId === 'ultimate' ? Infinity : (planId === 'pro' ? 0 : 3),
            landscapes:       planId === 'pro' || planId === 'ultimate' ? Infinity : 7,
            continents:       Infinity,
            encyclopedia:     planId === 'pro' || planId === 'ultimate' ? Infinity : 2,
            atlas:            planId === 'pro' || planId === 'ultimate' ? Infinity : 7,
            exploreCountries: planId === 'pro' || planId === 'ultimate' ? Infinity : 7,
            bharat:           planId === 'pro' || planId === 'ultimate' ? Infinity : 3,
            spinGlobe:        Infinity,
            timeline:         Infinity,
            earthSystems:     Infinity,
            earthSimulator:   Infinity,
            adfree:           planId === 'pro' || planId === 'ultimate'
        };

        localStorage.setItem('dv_plan_features', JSON.stringify(ultimateFeatures));

        if (planId === 'ultimate' && period === 'yearly') {
            var ebCount = parseInt(localStorage.getItem('dv_earlybird_count') || '0');
            localStorage.setItem('dv_earlybird_count', String(ebCount + 1));
        }

        var history = [];
        try {
            history = JSON.parse(localStorage.getItem('dv_payment_history') || '[]');
        } catch (e) {
            history = [];
        }
        history.push(planData);
        localStorage.setItem('dv_payment_history', JSON.stringify(history));

        try {
            var user = JSON.parse(localStorage.getItem('dv_user') || '{}');
            user.plan       = planId;
            user.planExpiry = expiry.toISOString();
            localStorage.setItem('dv_user', JSON.stringify(user));
        } catch (e) {}

        // ⭐ BRIDGE FOR PREMIUM-WRAPPER.JS ⭐
        localStorage.setItem('dharaverse_premium', JSON.stringify({
            isPremium:   true,
            expiryDate:  expiry.toISOString(),
            plan:        planId,
            planName:    plan ? plan.name : planId,
            period:      period,
            paymentId:   paymentId,
            activatedAt: now.toISOString()
        }));

        console.log('✅ All data saved successfully');

    } catch (err) {
        console.error('❌ Error saving data:', err);
    }

    // =============================================
    // VERIFY DATA WAS SAVED BEFORE REDIRECT
    // =============================================

    var savedPlan = localStorage.getItem('dv_plan');
    var savedPremium = localStorage.getItem('dv_premium');
    var savedBridge = localStorage.getItem('dharaverse_premium');

    if (savedPlan && savedPremium && savedBridge) {
        console.log('✅ Verified: All data saved. Redirecting...');
        window.location.href = '/payment-success.html?' +
            'plan='     + planId +
            '&period='  + period +
            '&id='      + paymentId +
            '&amount='  + amount +
            '&currency='+ currency +
            '&gateway=' + gateway;
    } else {
        console.error('❌ Data not saved! Retrying...');
        
        // RETRY saving
        localStorage.setItem('dv_plan', planId);
        localStorage.setItem('dv_premium', 'true');
        localStorage.setItem('dv_plan_expiry', expiry.toISOString());
        localStorage.setItem('dharaverse_premium', JSON.stringify({
            isPremium: true,
            expiryDate: expiry.toISOString(),
            plan: planId
        }));

        // Wait then redirect
        setTimeout(function() {
            window.location.href = '/payment-success.html?' +
                'plan='     + planId +
                '&period='  + period +
                '&id='      + paymentId +
                '&amount='  + amount +
                '&currency='+ currency +
                '&gateway=' + gateway;
        }, 1000);
    }
}

// ── PAYMENT FAILED ──
function onPaymentFailed(planId, reason, code) {
    console.error('Payment Failed:', planId, reason, code);

    window.location.href = '/payment-failed.html?' +
        'plan='   + (planId || 'unknown') +
        '&reason='+ encodeURIComponent(reason || 'Payment could not be processed') +
        '&code='  + encodeURIComponent(code   || 'UNKNOWN');
}

// ── TOAST NOTIFICATION ──
function showPaymentToast(message, type) {
    type = type || 'info';

    var existing = document.querySelector('.dv-pay-toast');
    if (existing) existing.remove();

    var colors = {
        info:    '#6441A5',
        success: '#4CAF50',
        error:   '#EF4444',
        warning: '#F59E0B'
    };

    var toast       = document.createElement('div');
    toast.className = 'dv-pay-toast';
    toast.textContent = message;
    toast.style.cssText =
        'position:fixed;top:20px;right:20px;z-index:99999;' +
        'padding:14px 22px;' +
        'background:' + (colors[type] || '#6441A5') + ';' +
        'color:#fff;border-radius:12px;' +
        'font-family:Inter,sans-serif;' +
        'font-size:14px;font-weight:600;' +
        'box-shadow:0 8px 30px rgba(0,0,0,0.3);' +
        'max-width:360px;cursor:pointer;';

    toast.onclick = function() { toast.remove(); };
    document.body.appendChild(toast);
    setTimeout(function() {
        if (toast.parentElement) toast.remove();
    }, 5000);
}

// ============================================
// MAKE EVERYTHING GLOBALLY ACCESSIBLE
// This is the most important part!
// ============================================
window.initPayment      = initPayment;
window.payWithRazorpay  = payWithRazorpay;
window.payWithPayPal    = payWithPayPal;
window.onPaymentSuccess = onPaymentSuccess;
window.onPaymentFailed  = onPaymentFailed;
window.showPaymentToast = showPaymentToast;
window.getAmount        = getAmount;
window.PLANS            = PLANS;
window.DVPayment        = {
    initPayment:      initPayment,
    PLANS:            PLANS,
    getAmount:        getAmount,
    showPaymentToast: showPaymentToast
};

console.log('💳 DharaVerse Payment System READY');
console.log('✅ initPayment:', typeof window.initPayment);
console.log('✅ Razorpay SDK:', typeof Razorpay);
