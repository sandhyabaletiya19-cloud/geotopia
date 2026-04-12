// ============================================
// DHARAVERSE PAYMENT SYSTEM
// Razorpay Integration
// ============================================

const RAZORPAY_KEY = 'rzp_test_YOUR_KEY_HERE'; // Replace with your actual key

// Plan Configuration
const PLANS = {
    games: {
        name: 'Games Plan',
        description: 'All games unlimited access',
        amount_inr: 29900,     // Amount in paise (₹299 × 100)
        amount_usd: 700,       // Amount in cents ($7 × 100)
        color: '#06B6D4',
        icon: '🎮',
        features: ['games']
    },
    upsc: {
        name: 'UPSC Plan',
        description: 'Complete UPSC geography content',
        amount_inr: 79900,     // ₹799
        amount_usd: 1400,      // $14
        color: '#8B5CF6',
        icon: '📚',
        features: ['upsc']
    },
    pro: {
        name: 'Pro Plan',
        description: 'Everything except UPSC - Full explorer access',
        amount_inr: 119900,    // ₹1,199
        amount_usd: 2200,      // $22
        color: '#EC4899',
        icon: '⭐',
        features: ['games', 'encyclopedia', 'landscapes', 'continents', 'atlas', 'adfree']
    },
    ultimate: {
        name: 'Ultimate Plan',
        description: 'Everything DharaVerse has to offer',
        amount_inr: 210000,    // ₹2,100
        amount_usd: 3000,      // $30
        color: '#FFD700',
        icon: '👑',
        features: ['games', 'upsc', 'encyclopedia', 'landscapes', 'continents', 'atlas', 'adfree', 'priority']
    }
};

// ===== CHECK EARLY BIRD DISCOUNT =====
function getUltimatePrice() {
    const earlyBirdCount = parseInt(localStorage.getItem('dharaverse_earlybird_count') || '0');
    if (earlyBirdCount < 11) {
        return 200000; // ₹2,000 (early bird)
    }
    return 210000; // ₹2,100 (regular)
}

// ===== INITIALIZE PAYMENT =====
function initPayment(planId) {
    const plan = PLANS[planId];
    if (!plan) {
        alert('Invalid plan selected');
        return;
    }

    // Check if already purchased
    const currentPlan = localStorage.getItem('dharaverse_plan');
    if (currentPlan) {
        const planHierarchy = { games: 1, upsc: 1, pro: 2, ultimate: 3 };
        const currentLevel = planHierarchy[currentPlan] || 0;
        const newLevel = planHierarchy[planId] || 0;

        if (currentPlan === planId) {
            showNotification('You already have this plan! 🎉', 'info');
            return;
        }

        if (newLevel < currentLevel) {
            showNotification('You already have a higher plan! 👑', 'info');
            return;
        }
    }

    // Get amount (check early bird for ultimate)
    let amount = plan.amount_inr;
    if (planId === 'ultimate') {
        amount = getUltimatePrice();
    }

    // Create Razorpay options
    const options = {
        key: RAZORPAY_KEY,
        amount: amount,
        currency: 'INR',
        name: 'DharaVerse',
        description: plan.description,
        image: 'https://dharaverse.com/logo.png',
        handler: function(response) {
            handlePaymentSuccess(response, planId, amount);
        },
        prefill: {
            name: localStorage.getItem('dharaverse_user_name') || '',
            email: localStorage.getItem('dharaverse_user_email') || '',
        },
        notes: {
            plan: planId,
            plan_name: plan.name
        },
        theme: {
            color: plan.color
        },
        modal: {
            ondismiss: function() {
                console.log('Payment modal closed');
            },
            confirm_close: true,
            escape: true,
            animation: true
        }
    };

    // Open Razorpay
    try {
        const rzp = new Razorpay(options);

        rzp.on('payment.failed', function(response) {
            handlePaymentFailure(response, planId);
        });

        rzp.open();
    } catch (error) {
        console.error('Razorpay Error:', error);
        showNotification('Payment gateway error. Please try again.', 'error');
    }
}

// ===== PAYMENT SUCCESS =====
function handlePaymentSuccess(response, planId, amount) {
    const plan = PLANS[planId];

    // Save to localStorage
    const paymentData = {
        plan: planId,
        planName: plan.name,
        paymentId: response.razorpay_payment_id,
        amount: amount / 100,
        currency: 'INR',
        date: new Date().toISOString(),
        features: plan.features
    };

    // Store plan
    localStorage.setItem('dharaverse_plan', planId);
    localStorage.setItem('dharaverse_payment_id', response.razorpay_payment_id);
    localStorage.setItem('dharaverse_plan_data', JSON.stringify(paymentData));
    localStorage.setItem('dharaverse_premium', 'true');
    localStorage.setItem('dharaverse_premium_date', new Date().toISOString());

    // Store features
    plan.features.forEach(feature => {
        localStorage.setItem(`dharaverse_feature_${feature}`, 'true');
    });

    // Update early bird counter for ultimate
    if (planId === 'ultimate') {
        const earlyBirdCount = parseInt(localStorage.getItem('dharaverse_earlybird_count') || '0');
        localStorage.setItem('dharaverse_earlybird_count', (earlyBirdCount + 1).toString());
    }

    // Save payment history
    const history = JSON.parse(localStorage.getItem('dharaverse_payment_history') || '[]');
    history.push(paymentData);
    localStorage.setItem('dharaverse_payment_history', JSON.stringify(history));

    // Redirect to success page
    window.location.href = `/payment-success.html?plan=${planId}&id=${response.razorpay_payment_id}&amount=${amount / 100}`;
}

// ===== PAYMENT FAILURE =====
function handlePaymentFailure(response, planId) {
    const errorData = {
        code: response.error.code,
        description: response.error.description,
        source: response.error.source,
        step: response.error.step,
        reason: response.error.reason,
        plan: planId,
        date: new Date().toISOString()
    };

    console.error('Payment Failed:', errorData);

    // Redirect to failure page
    const params = new URLSearchParams({
        plan: planId,
        reason: response.error.description || 'Payment failed',
        code: response.error.code || 'UNKNOWN'
    });

    window.location.href = `/payment-failed.html?${params.toString()}`;
}

// ===== NOTIFICATION SYSTEM =====
function showNotification(message, type = 'info') {
    // Remove existing notification
    const existing = document.querySelector('.dv-notification');
    if (existing) existing.remove();

    const colors = {
        info: '#3B82F6',
        success: '#4CAF50',
        error: '#EF4444',
        warning: '#F59E0B'
    };

    const icons = {
        info: 'fa-info-circle',
        success: 'fa-check-circle',
        error: 'fa-exclamation-circle',
        warning: 'fa-exclamation-triangle'
    };

    const notification = document.createElement('div');
    notification.className = 'dv-notification';
    notification.innerHTML = `
        <i class="fas ${icons[type]}"></i>
        <span>${message}</span>
    `;

    Object.assign(notification.style, {
        position: 'fixed',
        top: '20px',
        right: '20px',
        zIndex: '10000',
        padding: '16px 24px',
        background: colors[type],
        color: '#fff',
        borderRadius: '12px',
        fontFamily: "'Inter', sans-serif",
        fontSize: '15px',
        fontWeight: '600',
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        boxShadow: '0 10px 40px rgba(0,0,0,0.3)',
        animation: 'slideIn 0.3s ease',
        maxWidth: '400px'
    });

    // Add animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
    `;
    document.head.appendChild(style);

    document.body.appendChild(notification);

    // Auto remove after 4 seconds
    setTimeout(() => {
        notification.style.animation = 'slideIn 0.3s ease reverse';
        setTimeout(() => notification.remove(), 300);
    }, 4000);
}

// ===== UTILITY: Check if user has specific feature =====
function hasFeature(feature) {
    return localStorage.getItem(`dharaverse_feature_${feature}`) === 'true';
}

// ===== UTILITY: Get current plan =====
function getCurrentPlan() {
    return localStorage.getItem('dharaverse_plan') || 'basic';
}

// ===== UTILITY: Check if premium =====
function isPremium() {
    return localStorage.getItem('dharaverse_premium') === 'true';
}

// ===== UTILITY: Get plan display name =====
function getPlanDisplayName() {
    const plan = getCurrentPlan();
    const names = {
        basic: 'Basic (Free)',
        games: '🎮 Games',
        upsc: '📚 UPSC',
        pro: '⭐ Pro',
        ultimate: '👑 Ultimate'
    };
    return names[plan] || 'Basic (Free)';
}

console.log('💳 DharaVerse Payment System loaded');
console.log('📋 Current Plan:', getPlanDisplayName());
