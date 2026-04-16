// ============================================
// DHARAVERSE — SUPABASE CLIENT CONNECTION
// js/supabase-client.js
// ============================================

// Supabase CDN (add this script tag in your HTML files)
// <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>

// YOUR SUPABASE CREDENTIALS (replace with your actual values)
const SUPABASE_URL = 'https://uubgjhchndervaamizzk.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_L-bJ9sLh-hFvB_x0YSePsQ_Kaq34Okv';

// Create Supabase client
const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// ============================================
// SESSION MANAGEMENT
// ============================================

// Get current logged in user
async function getCurrentUser() {
  try {
    const { data: { user }, error } = await supabase.auth.getUser();
    if (error) {
      console.log('No user logged in');
      return null;
    }
    return user;
  } catch (err) {
    console.error('Error getting user:', err);
    return null;
  }
}

// Get current session
async function getSession() {
  try {
    const { data: { session }, error } = await supabase.auth.getSession();
    if (error) {
      console.log('No active session');
      return null;
    }
    return session;
  } catch (err) {
    console.error('Error getting session:', err);
    return null;
  }
}

// Check if user is logged in
async function isLoggedIn() {
  const user = await getCurrentUser();
  return user !== null;
}

// ============================================
// USER PROFILE
// ============================================

// Get user profile from database
async function getUserProfile(userId) {
  try {
    const { data, error } = await supabase
      .from('users')
      .select('*')
      .eq('id', userId)
      .single();

    if (error) {
      console.error('Error fetching profile:', error);
      return null;
    }
    return data;
  } catch (err) {
    console.error('Error:', err);
    return null;
  }
}

// Update user profile
async function updateUserProfile(userId, updates) {
  try {
    const { data, error } = await supabase
      .from('users')
      .update(updates)
      .eq('id', userId)
      .select()
      .single();

    if (error) {
      console.error('Error updating profile:', error);
      return null;
    }
    return data;
  } catch (err) {
    console.error('Error:', err);
    return null;
  }
}

// ============================================
// SUBSCRIPTION CHECK
// ============================================

// Get active subscription for user
async function getActiveSubscription(userId) {
  try {
    const { data, error } = await supabase
      .from('subscriptions')
      .select('*')
      .eq('user_id', userId)
      .eq('status', 'active')
      .gte('expires_at', new Date().toISOString())
      .order('created_at', { ascending: false })
      .limit(1)
      .single();

    if (error) {
      // No active subscription found
      return null;
    }
    return data;
  } catch (err) {
    console.error('Error:', err);
    return null;
  }
}

// Check if user has premium access
async function checkPremiumStatus(userId) {
  const subscription = await getActiveSubscription(userId);
  
  if (subscription) {
    return {
      isPremium: true,
      plan: subscription.plan,
      period: subscription.period,
      expiresAt: subscription.expires_at,
      status: subscription.status
    };
  }

  return {
    isPremium: false,
    plan: null,
    period: null,
    expiresAt: null,
    status: null
  };
}

// ============================================
// PAYMENT HISTORY
// ============================================

// Get user's payment history
async function getPaymentHistory(userId) {
  try {
    const { data, error } = await supabase
      .from('payments')
      .select('*')
      .eq('user_id', userId)
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching payments:', error);
      return [];
    }
    return data;
  } catch (err) {
    console.error('Error:', err);
    return [];
  }
}

// ============================================
// AUTH STATE LISTENER
// ============================================

// Listen for auth changes (login/logout/token refresh)
supabase.auth.onAuthStateChange((event, session) => {
  console.log('Auth event:', event);
  
  if (event === 'SIGNED_IN') {
    console.log('User signed in:', session.user.email);
    // Cache user data in localStorage
    localStorage.setItem('dharaverse_user', JSON.stringify({
      id: session.user.id,
      email: session.user.email,
      name: session.user.user_metadata?.full_name || session.user.user_metadata?.name || '',
      loggedIn: true,
      lastSync: new Date().toISOString()
    }));
  }

  if (event === 'SIGNED_OUT') {
    console.log('User signed out');
    // Clear cached data
    localStorage.removeItem('dharaverse_user');
    localStorage.removeItem('dharaverse_premium');
    localStorage.removeItem('dharaverse_subscription');
  }

  if (event === 'TOKEN_REFRESHED') {
    console.log('Token refreshed');
  }
});

// ============================================
// EXPORTS (available globally)
// ============================================
window.dharaverseDB = {
  supabase,
  getCurrentUser,
  getSession,
  isLoggedIn,
  getUserProfile,
  updateUserProfile,
  getActiveSubscription,
  checkPremiumStatus,
  getPaymentHistory
};

console.log('✅ Supabase client initialized for DharaVerse');
