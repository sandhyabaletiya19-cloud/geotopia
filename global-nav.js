/* ═══════════════════════════════════════════════════════════
   🏠 GLOBAL NAVIGATION - Auto Home Button for All Pages
   Just include this file in any page!
   ═══════════════════════════════════════════════════════════ */

(function() {
    // Detect folder depth to set correct path
    const path = window.location.pathname;
    const depth = (path.match(/\//g) || []).length;
    
    // Calculate path to home
    let homePath = 'index.html';
    
    // Check if we're in a subfolder
    if (path.includes('/atlas/') || 
        path.includes('/oceans/') || 
        path.includes('/encyclopedia/') ||
        path.includes('/countries/') ||
        path.includes('/continents/')) {
        homePath = '../index.html';
    }
    
    // Check if we're 2 levels deep
    if (path.includes('/oceans/profiles/') ||
        path.includes('/atlas/maps/')) {
        homePath = '../../index.html';
    }

    // Create floating home button
    const homeBtn = document.createElement('a');
    homeBtn.href = homePath;
    homeBtn.className = 'global-home-btn';
    homeBtn.innerHTML = '<i class="fas fa-home"></i>';
    homeBtn.title = 'Go to Home';
    
    // Create styles
    const styles = document.createElement('style');
    styles.textContent = `
        .global-home-btn {
            position: fixed;
            bottom: 30px;
            left: 30px;
            width: 55px;
            height: 55px;
            background: linear-gradient(135deg, #0077B6, #00B4D8);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-size: 1.4rem;
            text-decoration: none;
            box-shadow: 0 5px 25px rgba(0, 180, 216, 0.4);
            transition: all 0.3s ease;
            z-index: 9999;
            border: 2px solid rgba(255, 255, 255, 0.2);
        }
        
        .global-home-btn:hover {
            transform: translateY(-5px) scale(1.1);
            box-shadow: 0 10px 35px rgba(0, 180, 216, 0.6);
            background: linear-gradient(135deg, #00B4D8, #00FFE5);
        }
        
        .global-home-btn:active {
            transform: translateY(-2px) scale(1.05);
        }
        
        /* Tooltip on hover */
        .global-home-btn::before {
            content: 'Home';
            position: absolute;
            left: 70px;
            background: rgba(0, 0, 0, 0.8);
            color: white;
            padding: 8px 15px;
            border-radius: 8px;
            font-size: 0.9rem;
            font-weight: 500;
            white-space: nowrap;
            opacity: 0;
            pointer-events: none;
            transition: opacity 0.3s ease;
        }
        
        .global-home-btn:hover::before {
            opacity: 1;
        }
        
        /* Mobile responsive */
        @media (max-width: 768px) {
            .global-home-btn {
                bottom: 20px;
                left: 20px;
                width: 50px;
                height: 50px;
                font-size: 1.2rem;
            }
            
            .global-home-btn::before {
                display: none;
            }
        }
    `;
    
    // Add to page when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', addButton);
    } else {
        addButton();
    }
    
    function addButton() {
        document.head.appendChild(styles);
        document.body.appendChild(homeBtn);
    }
    
    console.log('🏠 Global Home Button Added!');
})();
