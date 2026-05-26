// /ads/ads.js - DharaVerse Ad Manager
// Replace ALL ca-pub-XXXXXXXX with your actual Publisher ID

const DHARAVERSE_ADS = {
    publisherId: 'ca-pub-8567396490753612', // YOUR ID HERE
    
    // Ad slot IDs (get these from AdSense after approval)
    slots: {
        leaderboard: 'XXXXXXXXXX',    // 728x90 - top banner
        rectangle: 'XXXXXXXXXX',      // 300x250 - sidebar
        rectangle2: 'XXXXXXXXXX',     // 300x250 - sidebar 2
        midContent: 'XXXXXXXXXX',     // responsive - mid page
        beforeFooter: 'XXXXXXXXXX',   // responsive - before footer
        mobile: 'XXXXXXXXXX'          // 320x50 - mobile banner
    },
    
    // Initialize ads after page load
    init: function() {
        // Only load ads if AdSense is available
        if (typeof adsbygoogle !== 'undefined') {
            try {
                (adsbygoogle = window.adsbygoogle || []).push({});
            } catch(e) {
                console.log('Ad load error:', e);
            }
        }
    }
};
