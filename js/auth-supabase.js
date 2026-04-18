// ============================================
// js/auth-supabase.js
// DharaVerse — Auth Functions
// ============================================

// Wait for supabase-client.js to load
function getClient() {
    return window.dharaverseDB?.client;
}

// ── SUPABASE FUNCTIONS URL ──
var SUPABASE_FUNCTIONS_URL =
    'https://uubgjhchndervaamizzk.supabase.co/functions/v1';

// ── SEND WELCOME EMAIL (internal helper) ──
async function sendWelcomeEmail(email, name) {
    try {
        await fetch(SUPABASE_FUNCTIONS_URL + '/send-welcome', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, name })
        });
        console.log('💜 Welcome email sent to:', email);
    } catch(e) {
        // Email failure must NEVER break signup
        console.warn('Welcome email failed (non-critical):', e.message);
    }
}

// ── SEND PASSWORD RESET EMAIL (internal helper) ──
async function sendPasswordResetEmail(email, name, resetLink) {
    try {
        await fetch(SUPABASE_FUNCTIONS_URL + '/send-password-reset', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, name, resetLink })
        });
        console.log('🔑 Reset email sent to:', email);
    } catch(e) {
        // Email failure must NEVER break reset flow
        console.warn('Reset email failed (non-critical):', e.message);
    }
}

// ── SIGNUP WITH EMAIL ──
async function signupWithEmail(email, password, name, country, isIndia) {
    try {
        const client = getClient();
        if (!client) throw new Error('Supabase client not ready');

        const { data, error } = await client.auth.signUp({
            email,
            password,
            options: {
                data: {
                    full_name: name,
                    country:   country,
                    is_india:  isIndia
                }
            }
        });

        if (error) return {
            success: false,
            error: formatAuthError(error.message)
        };

        // Check if needs email confirmation
        const needsConfirmation = !data.session;

        // ── SEND WELCOME EMAIL ──
        // Fire and forget — does not block signup
        if (data.user && data.user.email) {
            sendWelcomeEmail(data.user.email, name);
        }

        return {
            success: true,
            user: data.user,
            needsConfirmation
        };

    } catch(e) {
        console.error('Signup error:', e);
        return { success: false, error: e.message };
    }
}

// ── LOGIN WITH EMAIL ──
async function loginWithEmail(email, password) {
    try {
        const client = getClient();
        if (!client) throw new Error('Supabase client not ready');

        const { data, error } = await client.auth.signInWithPassword({
            email,
            password
        });

        if (error) return {
            success: false,
            error: formatAuthError(error.message)
        };

        // Update last login
        if (data.user) {
            await window.dharaverseDB.updateUserProfile(data.user.id, {
                last_login: new Date().toISOString()
            });
        }

        return { success: true, user: data.user };

    } catch(e) {
        console.error('Login error:', e);
        return { success: false, error: e.message };
    }
}

// ── GOOGLE SIGN IN ──
async function signInWithGoogle() {
    try {
        const client = getClient();
        if (!client) throw new Error('Supabase client not ready');

        const { error } = await client.auth.signInWithOAuth({
            provider: 'google',
            options: {
                redirectTo: 'https://dharaverse.com/auth-new.html'
            }
        });

        if (error) return {
            success: false,
            error: formatAuthError(error.message)
        };

        return { success: true };

    } catch(e) {
        return { success: false, error: e.message };
    }
}

// ── RESET PASSWORD ──
async function resetPassword(email) {
    try {
        const client = getClient();
        if (!client) throw new Error('Supabase client not ready');

        // Build the reset link
        var resetLink =
            'https://dharaverse.com/auth-new.html?reset=true';

        const { error } = await client.auth.resetPasswordForEmail(email, {
            redirectTo: resetLink
        });

        if (error) return {
            success: false,
            error: formatAuthError(error.message)
        };

        // ── SEND BRANDED RESET EMAIL ──
        // Fire and forget — does not block reset flow
        sendPasswordResetEmail(email, null, resetLink);

        return { success: true };

    } catch(e) {
        return { success: false, error: e.message };
    }
}

// ── UPDATE PASSWORD ──
async function updatePassword(newPassword) {
    try {
        const client = getClient();
        if (!client) throw new Error('Supabase client not ready');

        const { error } = await client.auth.updateUser({
            password: newPassword
        });

        if (error) return {
            success: false,
            error: formatAuthError(error.message)
        };

        return { success: true };

    } catch(e) {
        return { success: false, error: e.message };
    }
}

// ── LOGOUT ──
async function logout() {
    try {
        const client = getClient();
        if (!client) throw new Error('Supabase client not ready');

        const { error } = await client.auth.signOut();
        localStorage.removeItem('dv_premium_cache');

        if (error) return { success: false, error: error.message };
        return { success: true };

    } catch(e) {
        return { success: false, error: e.message };
    }
}

// ── IS LOGGED IN ──
async function isLoggedIn() {
    try {
        const client = getClient();
        if (!client) return false;
        const { data: { user } } = await client.auth.getUser();
        return !!user;
    } catch(e) { return false; }
}

// ── FORMAT AUTH ERRORS (user friendly) ──
function formatAuthError(msg) {
    if (!msg) return 'Something went wrong. Please try again.';
    const m = msg.toLowerCase();
    if (m.includes('invalid login') || m.includes('invalid credentials'))
        return 'Incorrect email or password. Please try again.';
    if (m.includes('email not confirmed'))
        return 'Please confirm your email first. Check your inbox.';
    if (m.includes('user already registered') ||
        m.includes('already been registered'))
        return 'An account with this email already exists. Please sign in.';
    if (m.includes('password should be'))
        return 'Password must be at least 8 characters.';
    if (m.includes('unable to validate email'))
        return 'Please enter a valid email address.';
    if (m.includes('email rate limit'))
        return 'Too many attempts. Please wait a few minutes.';
    if (m.includes('network'))
        return 'Network error. Please check your connection.';
    return msg;
}

// ── EXPORT ──
window.dharaverseAuth = {
    signupWithEmail,
    loginWithEmail,
    signInWithGoogle,
    resetPassword,
    updatePassword,
    logout,
    isLoggedIn
};

console.log('✅ Auth system ready for DharaVerse');
