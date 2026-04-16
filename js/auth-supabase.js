// ============================================
// DHARAVERSE — AUTH SYSTEM
// js/auth-supabase.js
// ============================================

// ============================================
// SIGNUP WITH EMAIL
// ============================================
async function signupWithEmail(email, password, name) {
  try {
    // Show loading
    showAuthMessage('Creating your account...', 'loading');

    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
      options: {
        data: {
          full_name: name
        },
        emailRedirectTo: 'https://dharaverse.com/auth.html'
      }
    });

    if (error) {
      showAuthMessage(error.message, 'error');
      return { success: false, error: error.message };
    }

    // Check if email confirmation is needed
    if (data.user && data.user.identities && data.user.identities.length === 0) {
      showAuthMessage('This email is already registered. Please login instead.', 'error');
      return { success: false, error: 'Email already exists' };
    }

    showAuthMessage('✅ Account created! Check your email to verify.', 'success');
    return { success: true, user: data.user };

  } catch (err) {
    console.error('Signup error:', err);
    showAuthMessage('Something went wrong. Please try again.', 'error');
    return { success: false, error: err.message };
  }
}

// ============================================
// LOGIN WITH EMAIL
// ============================================
async function loginWithEmail(email, password) {
  try {
    showAuthMessage('Logging in...', 'loading');

    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password
    });

    if (error) {
      if (error.message.includes('Invalid login')) {
        showAuthMessage('Wrong email or password.', 'error');
      } else if (error.message.includes('Email not confirmed')) {
        showAuthMessage('Please verify your email first. Check your inbox.', 'error');
      } else {
        showAuthMessage(error.message, 'error');
      }
      return { success: false, error: error.message };
    }

    // Update last login
    await supabase
      .from('users')
      .update({ last_login: new Date().toISOString() })
      .eq('id', data.user.id);

    // Cache premium status
    await cachePremiumStatus(data.user.id);

    showAuthMessage('✅ Login successful! Redirecting...', 'success');

    // Redirect after short delay
    setTimeout(() => {
      const redirectTo = localStorage.getItem('dharaverse_redirect') || '/dashboard.html';
      localStorage.removeItem('dharaverse_redirect');
      window.location.href = redirectTo;
    }, 1000);

    return { success: true, user: data.user };

  } catch (err) {
    console.error('Login error:', err);
    showAuthMessage('Something went wrong. Please try again.', 'error');
    return { success: false, error: err.message };
  }
}

// ============================================
// GOOGLE SIGN IN
// ============================================
async function signInWithGoogle() {
  try {
    showAuthMessage('Connecting to Google...', 'loading');

    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: 'https://dharaverse.com/auth.html',
        queryParams: {
          access_type: 'offline',
          prompt: 'consent'
        }
      }
    });

    if (error) {
      showAuthMessage('Google sign in failed: ' + error.message, 'error');
      return { success: false, error: error.message };
    }

    // Google will redirect, so no code runs after this
    return { success: true };

  } catch (err) {
    console.error('Google sign in error:', err);
    showAuthMessage('Something went wrong. Please try again.', 'error');
    return { success: false, error: err.message };
  }
}

// ============================================
// FORGOT PASSWORD
// ============================================
async function resetPassword(email) {
  try {
    showAuthMessage('Sending reset email...', 'loading');

    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: 'https://dharaverse.com/auth.html?mode=reset'
    });

    if (error) {
      showAuthMessage(error.message, 'error');
      return { success: false, error: error.message };
    }

    showAuthMessage('✅ Password reset email sent! Check your inbox.', 'success');
    return { success: true };

  } catch (err) {
    console.error('Reset password error:', err);
    showAuthMessage('Something went wrong. Please try again.', 'error');
    return { success: false, error: err.message };
  }
}

// ============================================
// UPDATE PASSWORD (after reset)
// ============================================
async function updatePassword(newPassword) {
  try {
    showAuthMessage('Updating password...', 'loading');

    const { error } = await supabase.auth.updateUser({
      password: newPassword
    });

    if (error) {
      showAuthMessage(error.message, 'error');
      return { success: false, error: error.message };
    }

    showAuthMessage('✅ Password updated successfully!', 'success');
    return { success: true };

  } catch (err) {
    console.error('Update password error:', err);
    showAuthMessage('Something went wrong. Please try again.', 'error');
    return { success: false, error: err.message };
  }
}

// ============================================
// LOGOUT
// ============================================
async function logout() {
  try {
    const { error } = await supabase.auth.signOut();

    if (error) {
      console.error('Logout error:', error);
    }

    // Clear all cached data
    localStorage.removeItem('dharaverse_user');
    localStorage.removeItem('dharaverse_premium');
    localStorage.removeItem('dharaverse_subscription');
    localStorage.removeItem('dharaverse_redirect');

    // Redirect to home
    window.location.href = '/index.html';

  } catch (err) {
    console.error('Logout error:', err);
    // Force clear and redirect anyway
    localStorage.removeItem('dharaverse_user');
    localStorage.removeItem('dharaverse_premium');
    localStorage.removeItem('dharaverse_subscription');
    window.location.href = '/index.html';
  }
}

// ============================================
// CACHE PREMIUM STATUS IN LOCALSTORAGE
// ============================================
async function cachePremiumStatus(userId) {
  try {
    const premiumStatus = await window.dharaverseDB.checkPremiumStatus(userId);

    localStorage.setItem('dharaverse_premium', JSON.stringify({
      isPremium: premiumStatus.isPremium,
      plan: premiumStatus.plan,
      period: premiumStatus.period,
      expiresAt: premiumStatus.expiresAt,
      lastChecked: new Date().toISOString()
    }));

    // Also cache subscription details
    if (premiumStatus.isPremium) {
      localStorage.setItem('dharaverse_subscription', JSON.stringify({
        plan: premiumStatus.plan,
        period: premiumStatus.period,
        expiresAt: premiumStatus.expiresAt,
        status: premiumStatus.status
      }));
    } else {
      localStorage.removeItem('dharaverse_subscription');
    }

    return premiumStatus;
  } catch (err) {
    console.error('Error caching premium status:', err);
    return { isPremium: false };
  }
}

// ============================================
// CHECK AUTH STATE ON PAGE LOAD
// ============================================
async function checkAuthOnPageLoad() {
  try {
    const { data: { session } } = await supabase.auth.getSession();

    if (session && session.user) {
      // User is logged in
      const user = session.user;

      // Update cached user data
      localStorage.setItem('dharaverse_user', JSON.stringify({
        id: user.id,
        email: user.email,
        name: user.user_metadata?.full_name || user.user_metadata?.name || '',
        loggedIn: true,
        lastSync: new Date().toISOString()
      }));

      // Cache premium status
      await cachePremiumStatus(user.id);

      // Update UI
      updateUIForLoggedInUser(user);

      return { loggedIn: true, user: user };
    } else {
      // Not logged in
      localStorage.removeItem('dharaverse_user');
      updateUIForLoggedOutUser();
      return { loggedIn: false, user: null };
    }
  } catch (err) {
    console.error('Auth check error:', err);
    return { loggedIn: false, user: null };
  }
}

// ============================================
// UPDATE UI BASED ON AUTH STATE
// ============================================
function updateUIForLoggedInUser(user) {
  // Update navigation buttons
  const loginBtns = document.querySelectorAll('.login-btn, .auth-btn, #loginBtn');
  loginBtns.forEach(btn => {
    btn.textContent = user.user_metadata?.full_name || user.email.split('@')[0];
    btn.href = '/dashboard.html';
  });

  // Show logout button if exists
  const logoutBtns = document.querySelectorAll('.logout-btn, #logoutBtn');
  logoutBtns.forEach(btn => {
    btn.style.display = 'inline-block';
  });

  // Hide signup prompts
  const signupPrompts = document.querySelectorAll('.signup-prompt');
  signupPrompts.forEach(el => {
    el.style.display = 'none';
  });
}

function updateUIForLoggedOutUser() {
  // Reset navigation buttons
  const loginBtns = document.querySelectorAll('.login-btn, .auth-btn, #loginBtn');
  loginBtns.forEach(btn => {
    btn.textContent = 'Login';
    btn.href = '/auth.html';
  });

  // Hide logout button
  const logoutBtns = document.querySelectorAll('.logout-btn, #logoutBtn');
  logoutBtns.forEach(btn => {
    btn.style.display = 'none';
  });
}

// ============================================
// AUTH MESSAGE DISPLAY
// ============================================
function showAuthMessage(message, type) {
  const msgBox = document.getElementById('authMessage');
  if (!msgBox) {
    console.log(`Auth ${type}: ${message}`);
    return;
  }

  msgBox.textContent = message;
  msgBox.className = 'auth-message';

  if (type === 'error') {
    msgBox.classList.add('auth-error');
    msgBox.style.color = '#ff4444';
    msgBox.style.background = '#fff0f0';
  } else if (type === 'success') {
    msgBox.classList.add('auth-success');
    msgBox.style.color = '#00c851';
    msgBox.style.background = '#f0fff0';
  } else if (type === 'loading') {
    msgBox.classList.add('auth-loading');
    msgBox.style.color = '#ffbb33';
    msgBox.style.background = '#fff8f0';
  }

  msgBox.style.display = 'block';
  msgBox.style.padding = '12px 16px';
  msgBox.style.borderRadius = '8px';
  msgBox.style.marginTop = '10px';
  msgBox.style.textAlign = 'center';
  msgBox.style.fontSize = '14px';
}

// ============================================
// HANDLE URL PARAMS (for redirects from Google/email)
// ============================================
async function handleAuthRedirect() {
  const urlParams = new URLSearchParams(window.location.search);
  const hashParams = new URLSearchParams(window.location.hash.substring(1));

  // Check for password reset
  if (urlParams.get('mode') === 'reset' || hashParams.get('type') === 'recovery') {
    // Show password reset form
    showResetPasswordForm();
    return;
  }

  // Check for email confirmation
  if (hashParams.get('type') === 'signup' || hashParams.get('type') === 'email_change') {
    showAuthMessage('✅ Email verified successfully! You can now login.', 'success');
    return;
  }

  // Check if returning from Google sign in
  const { data: { session } } = await supabase.auth.getSession();
  if (session) {
    // Update last login
    await supabase
      .from('users')
      .update({ last_login: new Date().toISOString() })
      .eq('id', session.user.id);

    // Cache premium
    await cachePremiumStatus(session.user.id);

    // Redirect
    const redirectTo = localStorage.getItem('dharaverse_redirect') || '/dashboard.html';
    localStorage.removeItem('dharaverse_redirect');
    window.location.href = redirectTo;
  }
}

function showResetPasswordForm() {
  const authForm = document.getElementById('authFormContainer');
  if (authForm) {
    authForm.innerHTML = `
      <h2>Reset Your Password</h2>
      <form id="resetForm">
        <input type="password" id="newPassword" placeholder="New Password (min 8 characters)" minlength="8" required>
        <input type="password" id="confirmPassword" placeholder="Confirm New Password" minlength="8" required>
        <button type="submit">Update Password</button>
      </form>
      <div id="authMessage"></div>
    `;

    document.getElementById('resetForm').addEventListener('submit', async (e) => {
      e.preventDefault();
      const newPass = document.getElementById('newPassword').value;
      const confirmPass = document.getElementById('confirmPassword').value;

      if (newPass !== confirmPass) {
        showAuthMessage('Passwords do not match!', 'error');
        return;
      }

      if (newPass.length < 8) {
        showAuthMessage('Password must be at least 8 characters.', 'error');
        return;
      }

      const result = await updatePassword(newPass);
      if (result.success) {
        setTimeout(() => {
          window.location.href = '/dashboard.html';
        }, 2000);
      }
    });
  }
}

// ============================================
// REQUIRE LOGIN (for protected pages)
// ============================================
async function requireLogin(redirectUrl) {
  const { loggedIn } = await checkAuthOnPageLoad();

  if (!loggedIn) {
    // Save where user wanted to go
    localStorage.setItem('dharaverse_redirect', redirectUrl || window.location.pathname);
    // Redirect to auth page
    window.location.href = '/auth.html';
    return false;
  }

  return true;
}

// ============================================
// EXPORTS (available globally)
// ============================================
window.dharaverseAuth = {
  signupWithEmail,
  loginWithEmail,
  signInWithGoogle,
  resetPassword,
  updatePassword,
  logout,
  checkAuthOnPageLoad,
  handleAuthRedirect,
  requireLogin,
  cachePremiumStatus
};

console.log('✅ Auth system initialized for DharaVerse');
