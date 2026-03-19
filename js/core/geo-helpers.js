/**
 * GEOGRAPHY APP - UTILITY HELPERS
 * Common utility functions
 */

(function() {
    'use strict';
    
    window.GeoHelpers = {
        /**
         * Format currency
         */
        formatCurrency(amount, currency = 'INR') {
            const symbols = { INR: '₹', USD: '$', EUR: '€', GBP: '£' };
            return `${symbols[currency] || ''}${amount}`;
        },
        
        /**
         * Format date
         */
        formatDate(dateString) {
            const date = new Date(dateString);
            return date.toLocaleDateString('en-IN', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            });
        },
        
        /**
         * Calculate days until expiry
         */
        daysUntilExpiry(expiryDate) {
            const now = new Date();
            const expiry = new Date(expiryDate);
            const diff = expiry - now;
            return Math.ceil(diff / (1000 * 60 * 60 * 24));
        },
        
        /**
         * Check if subscription is expiring soon
         */
        isExpiringSoon(expiryDate, days = 7) {
            return this.daysUntilExpiry(expiryDate) <= days;
        },
        
        /**
         * Generate random ID
         */
        generateId(prefix = 'geo') {
            return `${prefix}_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
        },
        
        /**
         * Debounce function
         */
        debounce(func, wait = 300) {
            let timeout;
            return function executedFunction(...args) {
                const later = () => {
                    clearTimeout(timeout);
                    func(...args);
                };
                clearTimeout(timeout);
                timeout = setTimeout(later, wait);
            };
        },
        
        /**
         * Throttle function
         */
        throttle(func, limit = 300) {
            let inThrottle;
            return function(...args) {
                if (!inThrottle) {
                    func.apply(this, args);
                    inThrottle = true;
                    setTimeout(() => inThrottle = false, limit);
                }
            };
        },
        
        /**
         * Show toast notification
         */
        showToast(message, type = 'info', duration = 3000) {
            const toast = document.createElement('div');
            toast.className = `geo-toast geo-toast-${type}`;
            toast.textContent = message;
            
            const styles = {
                position: 'fixed',
                bottom: '24px',
                right: '24px',
                background: type === 'error' ? '#ef4444' : type === 'success' ? '#10b981' : '#667eea',
                color: 'white',
                padding: '16px 24px',
                borderRadius: '12px',
                fontWeight: '500',
                boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
                zIndex: '10000',
                animation: 'slideInRight 0.3s ease',
                maxWidth: '300px'
            };
            
            Object.assign(toast.style, styles);
            document.body.appendChild(toast);
            
            setTimeout(() => {
                toast.style.animation = 'slideOutRight 0.3s ease';
                setTimeout(() => toast.remove(), 300);
            }, duration);
        },
        
        /**
         * Copy to clipboard
         */
        async copyToClipboard(text) {
            try {
                await navigator.clipboard.writeText(text);
                this.showToast('Copied to clipboard!', 'success');
                return true;
            } catch (err) {
                console.error('Copy failed:', err);
                return false;
            }
        },
        
        /**
         * Share content
         */
        async share(data) {
            if (navigator.share) {
                try {
                    await navigator.share(data);
                    return true;
                } catch (err) {
                    console.log('Share cancelled');
                    return false;
                }
            } else {
                // Fallback: copy link
                if (data.url) {
                    return this.copyToClipboard(data.url);
                }
                return false;
            }
        },
        
        /**
         * Format large numbers
         */
        formatNumber(num) {
            if (num >= 1000000) {
                return (num / 1000000).toFixed(1) + 'M';
            } else if (num >= 1000) {
                return (num / 1000).toFixed(1) + 'K';
            }
            return num.toString();
        }
    };
    
    // Add toast animations
    const toastStyles = document.createElement('style');
    toastStyles.textContent = `
        @keyframes slideInRight {
            from {
                transform: translateX(400px);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        
        @keyframes slideOutRight {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(400px);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(toastStyles);
    
})();
