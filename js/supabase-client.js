// ============================================
// js/supabase-client.js
// DharaVerse — Supabase Client
// ============================================

// Supabase credentials
const DHARAVERSE_SUPABASE_URL = 'https://uubgjhchndervaamizzk.supabase.co';
const DHARAVERSE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV1YmdqaGNobmRlcnZhYW1penprIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzYzMjg3OTUsImV4cCI6MjA5MTkwNDc5NX0.3KVEDCVcM67VQNDfls9nMRsnJT1vqxLSr4yUES_6bRQ';

// Create client — named "dharaClient" to avoid conflict with Supabase CDN's "supabase"
const dharaClient = window.supabase.createClient(
    DHARAVERSE_SUPABASE_URL, 
    DHARAVERSE_ANON_KEY
);

// ── GET CURRENT USER ──
async function getCurrentUser() {
    try {
        const { data: { user } } = await dharaClient.auth.getUser();
        return user;
    } catch(e) { return null; }
}

// ── GET SESSION ──
async function getSession() {
    try {
        const { data: { session } } = await dharaClient.auth.getSession();
        return session;
    } catch(e) { return null; }
}

// ── IS LOGGED IN ──
async function isLoggedIn() {
    const user = await getCurrentUser();
    return !!user;
}

// ── GET USER PROFILE ──
async function getUserProfile(userId) {
    try {
        const { data, error } = await dharaClient
            .from('users')
            .select('*')
            .eq('id', userId)
            .single();
        if (error) return null;
        return data;
    } catch(e) { return null; }
}

// ── UPDATE USER PROFILE ──
async function updateUserProfile(userId, updates) {
    try {
        const { data, error } = await dharaClient
            .from('users')
            .update(updates)
            .eq('id', userId);
        if (error) return { success: false, error: error.message };
        return { success: true };
    } catch(e) { return { success: false, error: e.message }; }
}


// ── GET ACTIVE SUBSCRIPTION ──
async function getActiveSubscription(userId) {
    try {
        const { data, error } = await dharaClient
            .from('subscriptions')
            .select('*')
            .eq('user_id', userId)
            .eq('status', 'active')
            .gt('expires_at', new Date().toISOString())
            .order('expires_at', { ascending: false })
            .limit(1)
            .maybeSingle(); // ← change .single() to .maybeSingle()
        if (error) return null;
        return data;
    } catch(e) { return null; }
}

// ── CHECK PREMIUM STATUS ──
async function checkPremiumStatus(userId) {
    const sub = await getActiveSubscription(userId);
    if (!sub) return { isPremium: false, plan: null };
    return {
        isPremium: true,
        plan: sub.plan,
        period: sub.period,
        expiresAt: sub.expires_at
    };
}

// ── GET PAYMENT HISTORY ──
async function getPaymentHistory(userId) {
    try {
        const { data, error } = await dharaClient
            .from('payments')
            .select('*')
            .eq('user_id', userId)
            .order('created_at', { ascending: false });
        if (error) return [];
        return data;
    } catch(e) { return []; }
}

// ── AUTH STATE CHANGE ──
dharaClient.auth.onAuthStateChange((event, session) => {
    console.log('Auth event:', event);
    if (event === 'SIGNED_IN') {
        console.log('User signed in:', session?.user?.email);
    }
    if (event === 'SIGNED_OUT') {
        console.log('User signed out');
        localStorage.removeItem('dv_premium_cache');
    }
});

// ── EXPORT ──
window.dharaverseDB = {
    client: dharaClient,
    getCurrentUser,
    getSession,
    isLoggedIn,
    getUserProfile,
    updateUserProfile,
    getActiveSubscription,
    checkPremiumStatus,
    getPaymentHistory
};

console.log('✅ Supabase client ready for DharaVerse');
