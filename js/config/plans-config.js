/**
 * GEOGRAPHY APP - SUBSCRIPTION PLANS CONFIGURATION
 * Central configuration for all subscription plans
 */

window.GeoPlans = {
    // Plan definitions
    plans: {
        BASIC: {
            id: 'basic',
            name: 'Basic',
            description: 'Perfect for casual learners',
            color: '#6366f1',
            icon: '📚',
            features: {
                games: true,
                basicEncyclopedia: true,
                limitedCategories: 3,
                upsc: false,
                earthSimulator: false,
                fullEncyclopedia: false,
                advancedMaps: false
            },
            pricing: {
                monthly: {
                    INR: 99,
                    USD: 1.99
                },
                yearly: {
                    INR: 499,
                    USD: 9.99,
                    savings: '58%'
                }
            },
            contentAccess: {
                freeItems: 4,        // Show first 4 items free
                previewItems: 10,    // Show 10 items as preview (locked)
                categories: ['mountains', 'rivers', 'lakes']
            }
        },
        
        PRO: {
            id: 'pro',
            name: 'Pro',
            description: 'For serious geography enthusiasts',
            color: '#10b981',
            icon: '🌍',
            popular: true,  // Highlight as most popular
            features: {
                games: true,
                basicEncyclopedia: true,
                fullEncyclopedia: true,
                earthSimulator: true,
                advancedMaps: true,
                allCategories: true,
                upsc: false
            },
            pricing: {
                monthly: {
                    INR: 199,
                    USD: 3.99
                },
                yearly: {
                    INR: 999,
                    USD: 19.99,
                    savings: '58%'
                }
            },
            contentAccess: {
                freeItems: -1,       // Unlimited (-1 = all)
                categories: 'all',
                excludeUpsc: true
            }
        },
        
        UPSC_PRO: {
            id: 'upsc_pro',
            name: 'UPSC Pro',
            description: 'Complete UPSC Geography Mastery',
            color: '#f59e0b',
            icon: '🏆',
            badge: 'Best Value',
            features: {
                games: true,
                basicEncyclopedia: true,
                fullEncyclopedia: true,
                earthSimulator: true,
                advancedMaps: true,
                allCategories: true,
                upsc: true,
                upscQuestions: 5000,
                advancedConcepts: true,
                mockTests: true
            },
            pricing: {
                monthly: {
                    INR: 399,
                    USD: 6.99
                },
                yearly: {
                    INR: 1999,
                    USD: 34.99,
                    savings: '58%'
                }
            },
            contentAccess: {
                freeItems: -1,
                categories: 'all',
                includeUpsc: true
            }
        }
    },
    
    // Early bird offer configuration
    earlyBird: {
        enabled: true,
        maxUsers: 50,
        currentUsers: 0, // Updated from backend
        discount: {
            INR: 100,
            USD: 2
        },
        appliesTo: 'yearly',
        expiryDate: null, // Set dynamically
        message: '🎉 Early Bird Offer - ₹100 OFF!'
    },
    
    // Coupon codes
    coupons: {
        'GEO100': { discount: 100, currency: 'INR', type: 'fixed' },
        'LEARN20': { discount: 20, currency: 'all', type: 'percent' },
        'UPSC50': { discount: 50, currency: 'INR', type: 'fixed', validFor: ['UPSC_PRO'] },
        'STUDENT30': { discount: 30, currency: 'all', type: 'percent' }
    },
    
    // Category configuration
    categories: {
        mountains: { name: 'Mountains', icon: '🏔️', premium: false, dataFiles: 10 },
        deserts: { name: 'Deserts', icon: '🏜️', premium: false, dataFiles: 8 },
        coralReefs: { name: 'Coral Reefs', icon: '🪸', premium: false, dataFiles: 6 },
        lakes: { name: 'Lakes', icon: '💧', premium: false, dataFiles: 7 },
        rivers: { name: 'Rivers', icon: '🌊', premium: false, dataFiles: 9 },
        forests: { name: 'Forests', icon: '🌲', premium: false, dataFiles: 8 },
        islands: { name: 'Islands', icon: '🏝️', premium: false, dataFiles: 6 },
        oceans: { name: 'Oceans', icon: '🌏', premium: false, dataFiles: 5 },
        upsc: { name: 'UPSC Geography', icon: '📝', premium: true, dataFiles: 50 }
    },
    
    // Free content limits (for non-subscribers)
    freeAccess: {
        default: {
            visibleItems: 3,
            previewItems: 7,  // Shown but locked
            totalPreview: 10
        },
        upsc: {
            visibleItems: 2,
            previewItems: 3,
            totalPreview: 5
        }
    }
};

// Freeze to prevent modifications
Object.freeze(window.GeoPlans);
