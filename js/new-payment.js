// ============================================
// DHARAVERSE - NEW PAYMENT SYSTEM (Supabase)
// File: /js/new-payment.js
// ============================================

function initNewPayment() {

    // ✅ Inside function = no conflict with other files
    var SUPABASE_FUNCTIONS_URL =
        'https://uubgjhchndervaamizzk.supabase.co/functions/v1';

    var RAZORPAY_KEY = "rzp key here";

    // ── SEND PAYMENT RECEIPT EMAIL (internal helper) ──
    async function sendPaymentReceiptEmail(
        email, name, plan, period,
        amount, currency, expiresAt, paymentId
    ) {
        try {
            await fetch(
                SUPABASE_FUNCTIONS_URL + '/send-payment-receipt',
                {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        email, name, plan, period,
                        amount, currency, expiresAt, paymentId
                    })
                }
            );
            console.log('💳 Receipt email sent to:', email);
        } catch(e) {
            // Email failure must NEVER break payment success
            console.warn('Receipt email failed (non-critical):', e.message);
        }
    }

    async function createOrder(planId, period, amount) {
        const user = await window.dharaverseDB.getCurrentUser();
        if (!user) {
            window.location.href = '/auth-new.html';
            return;
        }

        const response = await fetch(
            SUPABASE_FUNCTIONS_URL + '/create-order',
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    plan:   planId,
                    period: period,
                    amount: amount,
                    userId: user.id
                })
            }
        );
        return await response.json();
    }

    async function verifyPayment(data) {
        const response = await fetch(
            SUPABASE_FUNCTIONS_URL + '/verify-payment',
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            }
        );
        return await response.json();
    }

    async function startRazorpayPayment(planId, period, amount) {

        // ✅ Check Razorpay SDK loaded
        if (typeof Razorpay === 'undefined') {
            alert('Payment system loading... please try again.');
            return;
        }

        // ✅ Check user logged in
        const user = await window.dharaverseDB.getCurrentUser();
        if (!user) {
            window.location.href = '/auth-new.html?return=/pricing.html';
            return;
        }

        try {
            const order = await createOrder(planId, period, amount);

            if (!order || !order.id) {
                alert('Failed to create order. Please try again.');
                return;
            }

            const options = {
                key:      RAZORPAY_KEY,
                amount:   order.amount,
                currency: 'INR',
                name:     'DharaVerse',
                description: `${planId} Plan - ${period}`,
                order_id: order.id,
                theme: { color: '#8B5CF6' },

                handler: async function(response) {
                    try {
                        const currentUser =
                            await window.dharaverseDB.getCurrentUser();

                        const result = await verifyPayment({
                            razorpay_order_id:   response.razorpay_order_id,
                            razorpay_payment_id: response.razorpay_payment_id,
                            razorpay_signature:  response.razorpay_signature,
                            plan:     planId,
                            period:   period,
                            userId:   currentUser.id,
                            amount:   order.amount,
                            currency: 'INR'
                        });

                        if (result.success) {
                            // Clear premium cache
                            if (window.premiumCheck?.clearPremiumCache) {
                                window.premiumCheck.clearPremiumCache();
                            }

                            // ── SEND RECEIPT EMAIL ──
                            // Fire and forget
                            // Get user profile for name
                            var profile = await
                                window.dharaverseDB.getUserProfile(
                                    currentUser.id
                                );
                            var userName = (profile && profile.name)
                                || currentUser.email.split('@')[0];

                            // Get expiry from active subscription
                            var sub = await
                                window.dharaverseDB.getActiveSubscription(
                                    currentUser.id
                                );
                            var expiresAt = sub
                                ? sub.expires_at : null;

                            sendPaymentReceiptEmail(
                                currentUser.email,
                                userName,
                                planId,
                                period,
                                order.amount,
                                'INR',
                                expiresAt,
                                response.razorpay_payment_id
                            );

                            alert('✅ Payment successful! Premium activated.');
                            window.location.href = '/user-dashboard.html';
                        } else {
                            alert('❌ Payment verification failed.');
                        }
                    } catch(err) {
                        console.error('Verify error:', err);
                        alert('Error verifying payment. Contact support.');
                    }
                },

                modal: {
                    ondismiss: function() {
                        console.log('Payment modal closed');
                    }
                }
            };

            const rzp = new Razorpay(options);

            rzp.on('payment.failed', function(response) {
                alert('Payment failed: ' + response.error.description);
            });

            rzp.open();

        } catch(err) {
            console.error('Payment error:', err);
            alert('Something went wrong. Please try again.');
        }
    }

    // ✅ Export to window
    window.startRazorpayPayment = startRazorpayPayment;
    window.createOrder          = createOrder;
    window.verifyPayment        = verifyPayment;

    console.log('✅ New Payment System Ready');
}

// ✅ Smart init - wait for dharaverseDB
function tryInit() {
    if (window.dharaverseDB) {
        initNewPayment();
    } else {
        window.addEventListener('dvCoreReady', function() {
            initNewPayment();
        });

        // Backup poll
        var attempts = 0;
        var poll = setInterval(function() {
            attempts++;
            if (window.dharaverseDB) {
                clearInterval(poll);
                if (!window.startRazorpayPayment) {
                    initNewPayment();
                }
            }
            if (attempts > 100) {
                clearInterval(poll);
                console.error('❌ dharaverseDB never loaded');
            }
        }, 100);
    }
}

tryInit();
