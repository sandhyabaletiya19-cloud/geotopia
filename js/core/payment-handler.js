// ============================================
// /js/core/payment-handler.js
// DharaVerse — Payment Handler (Stub)
// Real payments handled by new-payment.js
// ============================================

(function() {
    'use strict';

    // Legacy support — old GeoPayment calls
    // Real payment is in new-payment.js
    window.GeoPayment = {
        initiatePayment: function(planId, billing) {
            // Map old plan names to new plan names
            var planMap = {
                'BASIC':    'games',
                'PRO':      'pro',
                'UPSC_PRO': 'ultimate'
            };

            var billingMap = {
                'monthly': 'monthly',
                'yearly':  'yearly'
            };

            var newPlan    = planMap[planId]    || planId.toLowerCase();
            var newBilling = billingMap[billing] || billing;

            // Use new payment system
            if (window.startRazorpayPayment) {
                window.startRazorpayPayment(newPlan, newBilling, 0);
            } else {
                window.location.href = '/pricing.html';
            }
        },

        isIndianUser: function() { return true; },
        currency:     'INR',
        userCountry:  'IN'
    };

    console.log('✅ Payment Handler (bridge) loaded');

})();
