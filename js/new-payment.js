// ============================================
// DHARAVERSE - NEW PAYMENT SYSTEM (Supabase)
// File: /js/new-payment.js
// ============================================

const SUPABASE_FUNCTIONS_URL =
  "https://uubgjhchndervaamizzk.supabase.co/functions/v1";

// ✅ ADDED: Razorpay key
const RAZORPAY_KEY = "rzp_live_ScXeEzlZJLvNTL";
// Replace with your actual Razorpay key
// rzp_test_XXXX for testing
// rzp_live_XXXX for production

async function createOrder(planId, period, amount) {
  const user = await window.dharaverseDB.getCurrentUser();
  if (!user) {
    window.location.href = "/auth-new.html";
    return;
  }

  const response = await fetch(
    `${SUPABASE_FUNCTIONS_URL}/create-order`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        plan: planId,
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
    `${SUPABASE_FUNCTIONS_URL}/verify-payment`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    }
  );

  return await response.json();
}

async function startRazorpayPayment(planId, period, amount) {

  // ✅ Check Razorpay SDK loaded
  if (typeof Razorpay === 'undefined') {
    alert("Payment system loading... please try again in a moment.");
    return;
  }

  // ✅ Check user logged in
  const user = await window.dharaverseDB.getCurrentUser();
  if (!user) {
    window.location.href = "/auth-new.html?return=/pricing.html";
    return;
  }

  try {
    const order = await createOrder(planId, period, amount);

    if (!order || !order.id) {
      alert("Failed to create order. Please try again.");
      return;
    }

    const options = {
      key: RAZORPAY_KEY,
      amount: order.amount,
      currency: "INR",
      name: "DharaVerse",
      description: `${planId} Plan - ${period}`,
      order_id: order.id,
      theme: { color: "#8B5CF6" },

      handler: async function (response) {
        try {
          const currentUser = await window.dharaverseDB.getCurrentUser();

          const result = await verifyPayment({
            razorpay_order_id:   response.razorpay_order_id,
            razorpay_payment_id: response.razorpay_payment_id,
            razorpay_signature:  response.razorpay_signature,
            plan:     planId,
            period:   period,
            userId:   currentUser.id,
            amount:   order.amount,
            currency: "INR"
          });

          if (result.success) {
            // ✅ Clear premium cache so new plan loads
            if (window.premiumCheck?.clearPremiumCache) {
              window.premiumCheck.clearPremiumCache();
            }
            alert("✅ Payment successful! Premium activated.");
            window.location.href = "/dashboard.html";
          } else {
            alert("❌ Payment verification failed. Contact support.");
          }
        } catch (err) {
          console.error("Verify error:", err);
          alert("Error verifying payment. Please contact support.");
        }
      },

      modal: {
        ondismiss: function() {
          console.log("Payment modal closed by user");
        }
      }
    };

    const rzp = new Razorpay(options);

    rzp.on('payment.failed', function(response) {
      console.error("Payment failed:", response.error);
      alert("Payment failed: " + response.error.description);
    });

    rzp.open();

  } catch (err) {
    console.error("Payment error:", err);
    alert("Something went wrong. Please try again.");
  }
}

// ✅ Export to window
window.startRazorpayPayment = startRazorpayPayment;
window.createOrder = createOrder;
window.verifyPayment = verifyPayment;

console.log("✅ New Payment System Ready");
