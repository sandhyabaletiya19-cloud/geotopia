// ============================================
// js/auth-supabase.js
// DharaVerse — Auth Functions
// ============================================

function getClient() {
    return window.dharaverseDB?.client;
}

var SUPABASE_FUNCTIONS_URL =
    'https://uubgjhchndervaamizzk.supabase.co/functions/v1';

var SUPABASE_ANON_KEY =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV1YmdqaGNobmRlcnZhYW1penprIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzYzMjg3OTUsImV4cCI6MjA5MTkwNDc5NX0.3KVEDCVcM67VQNDfls9nMRsnJT1vqxLSr4yUES_6bRQ';

// ── SEND WELCOME EMAIL ──
async function sendWelcomeEmail(email, name) {
    try {
        var res = await fetch(
            SUPABASE_FUNCTIONS_URL + '/send-welcome',
            {
                method: 'POST',
                headers: {
                    'Content-Type':  'application/json',
                    'Authorization': 'Bearer ' + SUPABASE_ANON_KEY
                },
                body: JSON.stringify({ email: email, name: name })
            }
        );
        var data = await res.json();
        console.log('💜 Welcome email response:', data);
    } catch(e) {
        console.warn('Welcome email failed (non-critical):', e.message);
    }
}

// ── SEND PASSWORD RESET EMAIL ──
async function sendPasswordResetEmail(email, name, resetLink) {
    try {
        var res = await fetch(
            SUPABASE_FUNCTIONS_URL + '/send-password-reset',
            {
                method: 'POST',
                headers: {
                    'Content-Type':  'application/json',
                    'Authorization': 'Bearer ' + SUPABASE_ANON_KEY
                },
                body: JSON.stringify({
                    email:     email,
                    name:      name,
                    resetLink: resetLink
                })
            }
        );
        var data = await res.json();
        console.log('🔑 Reset email response:', data);
    } catch(e) {
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

        const needsConfirmation = !data.session;

        // Send welcome email
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

        var resetLink =
            'https://dharaverse.com/auth-new.html?reset=true';

        const { error } = await client.auth.resetPasswordForEmail(email, {
            redirectTo: resetLink
        });

        if (error) return {
            success: false,
            error: formatAuthError(error.message)
        };

        // Send branded reset email
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

// ── FORMAT AUTH ERRORS ──
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
