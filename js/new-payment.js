// ============================================
// DHARAVERSE - NEW PAYMENT SYSTEM (Supabase)
// ============================================

const SUPABASE_FUNCTIONS_URL =
  "https://uubgjhchndervaamizzk.supabase.co/functions/v1";

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
      headers: {
        "Content-Type": "application/json"
      },
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
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    }
  );

  return await response.json();
}

async function startRazorpayPayment(planId, period, amount) {

  const order = await createOrder(planId, period, amount);

  if (!order.id) {
    alert("Failed to create order");
    return;
  }

  const options = {
    key: RAZORPAY_KEY,
    amount: order.amount,
    currency: "INR",
    name: "DharaVerse",
    description: `${planId} - ${period}`,
    order_id: order.id,

    handler: async function (response) {

      const user = await window.dharaverseDB.getCurrentUser();

      const result = await verifyPayment({
        razorpay_order_id: response.razorpay_order_id,
        razorpay_payment_id: response.razorpay_payment_id,
        razorpay_signature: response.razorpay_signature,
        plan: planId,
        period: period,
        userId: user.id,
        amount: order.amount,
        currency: "INR"
      });

      if (result.success) {
        alert("✅ Payment successful! Premium activated.");
        window.location.href = "/dashboard.html";
      } else {
        alert("Payment verification failed.");
      }
    }
  };

  const rzp = new Razorpay(options);
  rzp.open();
}

window.startRazorpayPayment = startRazorpayPayment;

console.log("✅ New Payment System Ready");
