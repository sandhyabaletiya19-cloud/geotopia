// ============================================
// DHARAVERSE - PAYMENT SYSTEM
// js/payment.js
// ============================================

const RAZORPAY_KEY = 'rzp_live_ScXeEzlZJLvNTL'; // ← Replace with your actual key

// ── PLAN CONFIG ──
const PLANS = {
    games: {
        name: 'Games Plan',
        description: 'All geography games unlocked',
        amount_inr: 29900,   // paise (₹299)
        amount_usd: 700,     // cents ($7)
        color: '#06B6D4',
        icon: '🎮'
    },
    upsc: {
        name: 'UPSC Plan',
        description: 'Complete UPSC geography preparation',
        amount_inr: 79900,   // ₹799
        amount_usd: 1400,    // $14
        color: '#8B5CF6',
        icon: '📚'
    },
    pro: {
        name: 'Pro Plan',
        description: 'Everything except UPSC — full explorer access',
        amount_inr: 119900,  // ₹1,199
        amount_usd: 2200,    // $22
        color: '#EC4899',
        icon: '⭐'
    },
    ultimate: {
        name: 'Ultimate Plan',
        description: 'Everything DharaVerse has to offer',
        amount_inr: 210000,  // ₹2,100
        amount_usd: 3000,    // $30
        color: '#FFD700',
        icon: '👑'
    }
};

// ── GET ULTIMATE PRICE (early bird check) ──
function getUltimateAmount() {
    const count = parseInt(localStorage.getItem('dv_earlybird_count') || '0');
    return count < 11 ? 200000 : 210000; // ₹2,000 or ₹2,100
}

// ── INIT PAYMENT ──
function initPayment(planId) {
    const plan = PLANS[planId];
    if (!plan) return;

    // Already on same or higher plan?
    const currentPlan = localStorage.getItem('dv_plan') || 'basic';
    const hierarchy = { basic: 0, games: 1, upsc: 1, pro: 2, ultimate: 3 };

    if (currentPlan === planId) {
        showToast('You already have this plan! 🎉', 'info');
        return;
    }

    if (hierarchy[currentPlan] >= hierarchy[planId] && currentPlan !== 'basic') {
        showToast('You already have a higher plan! 👑', 'info');
        return;
    }

    // Get amount
    const amount = planId === 'ultimate' ? getUltimateAmount() : plan.amount_inr;

    // Razorpay options
    const options = {
        key: RAZORPAY_KEY,
        amount: amount,
        currency: 'INR',
        name: 'DharaVerse',
        description: plan.description,
        image: 'https://dharaverse.com/logo.png',
        handler: function(response) {
            onPaymentSuccess(response, planId, amount);
        },
        prefill: {
            name:  localStorage.getItem('dv_user_name')  || '',
            email: localStorage.getItem('dv_user_email') || ''
        },
        notes: {
            plan: planId,
            plan_name: plan.name
        },
        theme: {
            color: plan.color
        },
        modal: {
            confirm_close: true,
            animation: true,
            ondismiss: function() {
                console.log('DharaVerse: Payment modal closed by user');
            }
        }
    };

    try {
        const rzp = new Razorpay(options);
        rzp.on('payment.failed', function(response) {
            onPaymentFailed(response, planId);
        });
        rzp.open();
    } catch (err) {
        console.error('Razorpay Error:', err);
        showToast('Payment gateway error. Please try again.', 'error');
    }
}

// ── PAYMENT SUCCESS ──
function onPaymentSuccess(response, planId, amount) {
    const plan = PLANS[planId];

    // Define what each plan unlocks
    const PLAN_FEATURES = {
        games: {
            games: 'all',
            upsc: 3,
            landscapes: 7,
            continents: 'all',
            encyclopedia: 2,
            atlas: 7,
            exploreCountries: 7,
            bharat: 3,
            adfree: false,
            spinGlobe: 'all',
            timeline: 'all',
            earthSystems: 'all',
            earthSimulator: 'all'
        },
        upsc: {
            games: 3,
            upsc: 'all',
            landscapes: 7,
            continents: 'all',
            encyclopedia: 2,
            atlas: 7,
            exploreCountries: 7,
            bharat: 3,
            adfree: false,
            spinGlobe: 'all',
            timeline: 'all',
            earthSystems: 'all',
            earthSimulator: 'all'
        },
        pro: {
            games: 'all',
            upsc: 0,           // LOCKED
            landscapes: 'all',
            continents: 'all',
            encyclopedia: 'all',
            atlas: 'all',
            exploreCountries: 'all',
            bharat: 'all',
            adfree: true,
            spinGlobe: 'all',
            timeline: 'all',
            earthSystems: 'all',
            earthSimulator: 'all'
        },
        ultimate: {
            games: 'all',
            upsc: 'all',
            landscapes: 'all',
            continents: 'all',
            encyclopedia: 'all',
            atlas: 'all',
            exploreCountries: 'all',
            bharat: 'all',
            adfree: true,
            spinGlobe: 'all',
            timeline: 'all',
            earthSystems: 'all',
            earthSimulator: 'all'
        }
    };

    // Save plan to localStorage
    const features = PLAN_FEATURES[planId];
    localStorage.setItem('dv_plan', planId);
    localStorage.setItem('dv_payment_id', response.razorpay_payment_id);
    localStorage.setItem('dv_plan_features', JSON.stringify(features));
    localStorage.setItem('dv_premium', 'true');
    localStorage.setItem('dv_purchase_date', new Date().toISOString());

    // Save payment history
    const history = JSON.parse(localStorage.getItem('dv_payment_history') || '[]');
    history.push({
        planId,
        planName: plan.name,
        paymentId: response.razorpay_payment_id,
        amount: amount / 100,
        date: new Date().toISOString()
    });
    localStorage.setItem('dv_payment_history', JSON.stringify(history));

    // Update early bird count for ultimate
    if (planId === 'ultimate') {
        const count = parseInt(localStorage.getItem('dv_earlybird_count') || '0');
        localStorage.setItem('dv_earlybird_count', (count + 1).toString());
    }

    // Redirect to success page
    window.location.href = `/payment-success.html?plan=${planId}&id=${response.razorpay_payment_id}&amount=${amount / 100}`;
}

// ── PAYMENT FAILED ──
function onPaymentFailed(response, planId) {
    const params = new URLSearchParams({
        plan:   planId,
        reason: response.error.description || 'Payment could not be processed',
        code:   response.error.code || 'UNKNOWN'
    });
    window.location.href = `/payment-failed.html?${params}`;
}

// ── TOAST NOTIFICATION ──
function showToast(message, type = 'info') {
    const existing = document.querySelector('.dv-toast');
    if (existing) existing.remove();

    const colors = {
        info:    '#3B82F6',
        success: '#4CAF50',
        error:   '#EF4444',
        warning: '#F59E0B'
    };

    const icons = {
        info:    'fa-info-circle',
        success: 'fa-check-circle',
        error:   'fa-exclamation-circle',
        warning: 'fa-exclamation-triangle'
    };

    const toast = document.createElement('div');
    toast.className = 'dv-toast';
    toast.innerHTML = `<i class="fas ${icons[type]}"></i> ${message}`;

    Object.assign(toast.style, {
        position:   'fixed',
        top:        '24px',
        right:      '24px',
        zIndex:     '99999',
        padding:    '14px 22px',
        background: colors[type],
        color:      '#fff',
        borderRadius: '12px',
        fontFamily: "'Inter', sans-serif",
        fontSize:   '14px',
        fontWeight: '600',
        display:    'flex',
        alignItems: 'center',
        gap:        '10px',
        boxShadow:  '0 8px 30px rgba(0,0,0,0.3)',
        maxWidth:   '360px',
        animation:  'dvSlideIn 0.3s ease'
    });

    const style = document.createElement('style');
    style.textContent = `@keyframes dvSlideIn { from { transform:translateX(110%); opacity:0; } to { transform:translateX(0); opacity:1; } }`;
    document.head.appendChild(style);

    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 4000);
}

// ── UTILITIES (usable from any page) ──
window.DVPayment = {
    initPayment,
    showToast,
    getCurrentPlan: () => localStorage.getItem('dv_plan') || 'basic',
    isPremium: () => localStorage.getItem('dv_premium') === 'true',
    getPaymentId: () => localStorage.getItem('dv_payment_id') || null,
    getPurchaseDate: () => localStorage.getItem('dv_purchase_date') || null
};

console.log('💳 DharaVerse Payment System Ready');
