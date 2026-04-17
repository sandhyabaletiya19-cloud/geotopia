// ============================================
// js/premium-check.js
// DharaVerse — Premium Status Checker
// ============================================

const PREMIUM_CACHE_KEY = 'dv_premium_cache';
const CACHE_TTL = 5 * 60 * 1000; // 5 minutes

// ── PLAN HIERARCHY ──
const PLAN_LEVELS = {
    'free':     0,
    'games':    1,
    'upsc':     2,
    'pro':      3,
    'ultimate': 4
};

// ── GET CACHED STATUS ──
function getCachedPremium() {
    try {
        const raw = localStorage.getItem(PREMIUM_CACHE_KEY);
        if (!raw) return null;

        const cached = JSON.parse(raw);
        const age = Date.now() - cached.timestamp;

        if (age > CACHE_TTL) {
            localStorage.removeItem(PREMIUM_CACHE_KEY);
            return null;
        }
        return cached;
    } catch(e) {
        localStorage.removeItem(PREMIUM_CACHE_KEY);
        return null;
    }
}

// ── SET CACHE ──
function setCachedPremium(data) {
    try {
        localStorage.setItem(PREMIUM_CACHE_KEY, JSON.stringify({
            ...data,
            timestamp: Date.now()
        }));
    } catch(e) {
        console.warn('Could not cache premium status');
    }
}

// ── CLEAR CACHE ──
function clearPremiumCache() {
    localStorage.removeItem(PREMIUM_CACHE_KEY);
}

// ── CHECK TRIAL STATUS ──
function checkTrialStatus() {
    try {
        const trialData = localStorage.getItem('dv_trial');
        if (!trialData) return { isOnTrial: false, trialExpired: false };

        const trial = JSON.parse(trialData);
        const now = Date.now();
        const expires = new Date(trial.expires).getTime();

        if (now < expires) {
            return {
                isOnTrial: true,
                trialExpired: false,
                expiresAt: trial.expires,
                timeLeft: expires - now
            };
        } else {
            return {
                isOnTrial: false,
                trialExpired: true
            };
        }
    } catch(e) {
        return { isOnTrial: false, trialExpired: false };
    }
}

// ══════════════════════════════════════
// MAIN FUNCTION — GET PREMIUM STATUS
// ══════════════════════════════════════
async function getPremiumStatus() {
    try {
        // 1. Check cache first
        const cached = getCachedPremium();
        if (cached) {
            console.log('📦 Premium status from cache:', cached.plan);
            return cached;
        }

        // 2. Check trial
        const trial = checkTrialStatus();
        if (trial.isOnTrial) {
            const status = {
                isPremium: true,
                plan: 'ultimate',
                period: 'trial',
                isTrial: true,
                trialExpiresAt: trial.expiresAt,
                trialTimeLeft: trial.timeLeft,
                source: 'trial'
            };
            setCachedPremium(status);
            return status;
        }

        // 3. Check if logged in
        if (!window.dharaverseDB) {
            return getFreePlan('no_client');
        }

        const user = await window.dharaverseDB.getCurrentUser();
        if (!user) {
            // Not logged in — check trial expired
            if (trial.trialExpired) {
                return getFreePlan('trial_expired');
            }
            return getFreePlan('not_logged_in');
        }

        // 4. Check Supabase subscription
        const sub = await window.dharaverseDB.getActiveSubscription(user.id);

        if (sub) {
            const status = {
                isPremium: true,
                plan: sub.plan,
                period: sub.period,
                expiresAt: sub.expires_at,
                isTrial: false,
                userId: user.id,
                userEmail: user.email,
                source: 'subscription'
            };
            setCachedPremium(status);
            console.log('✅ Premium confirmed:', sub.plan);
            return status;
        }

        // 5. Logged in but no subscription
        const freeStatus = getFreePlan('no_subscription');
        freeStatus.userId = user.id;
        freeStatus.userEmail = user.email;
        freeStatus.isLoggedIn = true;
        setCachedPremium(freeStatus);
        return freeStatus;

    } catch(e) {
        console.error('Premium check error:', e);
        return getFreePlan('error');
    }
}

// ── FREE PLAN HELPER ──
function getFreePlan(reason) {
    return {
        isPremium: false,
        plan: 'free',
        period: null,
        isTrial: false,
        isLoggedIn: false,
        source: reason
    };
}

// ══════════════════════════════════════
// ACCESS LEVEL CHECKERS
// ══════════════════════════════════════

// Can user access this plan's content?
async function canAccess(requiredPlan) {
    const status = await getPremiumStatus();
    const userLevel = PLAN_LEVELS[status.plan] ?? 0;
    const requiredLevel = PLAN_LEVELS[requiredPlan] ?? 0;
    return userLevel >= requiredLevel;
}

// Can user access games?
async function canAccessGames() {
    return await canAccess('games');
}

// Can user access UPSC?
async function canAccessUPSC() {
    const status = await getPremiumStatus();
    // UPSC is India-only but accessible on pro/ultimate too
    const level = PLAN_LEVELS[status.plan] ?? 0;
    return level >= PLAN_LEVELS['upsc'];
}

// Can user access pro content?
async function canAccessPro() {
    return await canAccess('pro');
}

// Is user on ultimate plan?
async function isUltimate() {
    return await canAccess('ultimate');
}

// ══════════════════════════════════════
// FREE CARD LIMITS
// ══════════════════════════════════════
const FREE_LIMITS = {
    landscape: 7,   // 7 free cards on landscape pages
    games: 3,        // 3 free games
    upsc: 3          // 3 free UPSC topics
};

function getFreeLimit(pageType) {
    return FREE_LIMITS[pageType] ?? 7;
}

// Check if card index is within free limit
function isWithinFreeLimit(cardIndex, pageType) {
    const limit = getFreeLimit(pageType);
    return cardIndex < limit; // 0-based index
}

// ══════════════════════════════════════
// UI HELPERS
// ══════════════════════════════════════

// Get plan display name
function getPlanDisplayName(plan) {
    const names = {
        'free':     'Free',
        'games':    '🎮 Games',
        'upsc':     '📚 UPSC',
        'pro':      '⭐ Pro',
        'ultimate': '👑 Ultimate'
    };
    return names[plan] || 'Free';
}

// Get plan color
function getPlanColor(plan) {
    const colors = {
        'free':     '#888888',
        'games':    '#3B82F6',
        'upsc':     '#10B981',
        'pro':      '#F59E0B',
        'ultimate': '#8B5CF6'
    };
    return colors[plan] || '#888888';
}

// Format trial time remaining
function formatTrialTimeLeft(ms) {
    if (!ms || ms <= 0) return 'Expired';
    const hours = Math.floor(ms / (1000 * 60 * 60));
    const minutes = Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60));
    if (hours > 0) return `${hours}h ${minutes}m left`;
    return `${minutes}m left`;
}

// ── EXPORT ──
window.premiumCheck = {
    getPremiumStatus,
    canAccess,
    canAccessGames,
    canAccessUPSC,
    canAccessPro,
    isUltimate,
    getFreeLimit,
    isWithinFreeLimit,
    clearPremiumCache,
    checkTrialStatus,
    getPlanDisplayName,
    getPlanColor,
    formatTrialTimeLeft,
    PLAN_LEVELS,
    FREE_LIMITS
};

console.log('✅ Premium check system ready');
