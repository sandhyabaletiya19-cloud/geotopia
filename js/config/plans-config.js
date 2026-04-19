// ============================================
// /js/config/plans-config.js
// DharaVerse — Plans Config (Bridge)
// ============================================

window.GeoPlans = {
    plans: {
        BASIC: {
            id: 'games',
            name: 'Games',
            pricing: {
                monthly: { INR: 49,  USD: 2  },
                yearly:  { INR: 299, USD: 7  }
            }
        },
        PRO: {
            id: 'pro',
            name: 'Pro',
            popular: true,
            pricing: {
                monthly: { INR: 149, USD: 5  },
                yearly:  { INR: 1199,USD: 22 }
            }
        },
        UPSC_PRO: {
            id: 'upsc',
            name: 'UPSC',
            pricing: {
                monthly: { INR: 99,  USD: 0  },
                yearly:  { INR: 799, USD: 0  }
            }
        },
        ULTIMATE: {
            id: 'ultimate',
            name: 'Ultimate',
            pricing: {
                monthly: { INR: 399, USD: 7  },
                yearly:  { INR: 2100,USD: 30 }
            }
        }
    },

    categories: {
        mountains:  { name: 'Mountains',  premium: false },
        deserts:    { name: 'Deserts',    premium: false },
        lakes:      { name: 'Lakes',      premium: false },
        rivers:     { name: 'Rivers',     premium: false },
        forests:    { name: 'Forests',    premium: false },
        islands:    { name: 'Islands',    premium: false },
        oceans:     { name: 'Oceans',     premium: false },
        coralReefs: { name: 'Coral Reefs',premium: false },
        upsc:       { name: 'UPSC',       premium: true  }
    },

    freeAccess: {
        default: { visibleItems: 7, previewItems: 3 },
        upsc:    { visibleItems: 3, previewItems: 2 }
    },

    earlyBird: { enabled: false },
    coupons:   {}
};

console.log('✅ Plans config loaded');
