/* ═══════════════════════════════════════════════════════════
   🏠 GLOBAL NAVIGATION - Home Button + Footer Links
   Auto-adds Home button and Legal links to ALL pages!
   ═══════════════════════════════════════════════════════════ */

(function() {
    // Detect folder depth to set correct path
    const path = window.location.pathname;
    
    // Calculate base path
    let basePath = '';
    
    if (path.includes('/atlas/') || 
        path.includes('/oceans/') || 
        path.includes('/encyclopedia/') ||
        path.includes('/countries/') ||
        path.includes('/continents/') ||
        path.includes('/legal/')) {
        basePath = '../';
    }
    
    // Check if 2 levels deep
    if (path.includes('/oceans/profiles/') ||
        path.includes('/atlas/maps/')) {
        basePath = '../../';
    }

    // ═══════════════════════════════════════════════════════
    // HOME BUTTON
    // ═══════════════════════════════════════════════════════
    
    const homeBtn = document.createElement('a');
    homeBtn.href = basePath + 'index.html';
    homeBtn.className = 'global-home-btn';
    homeBtn.innerHTML = '<i class="fas fa-home"></i>';
    homeBtn.title = 'Go to Home';

    // ═══════════════════════════════════════════════════════
    // FOOTER LINKS
    // ═══════════════════════════════════════════════════════
    
    const footer = document.createElement('div');
    footer.className = 'global-footer';
    footer.innerHTML = `
        <div class="global-footer-content">
            <p>© 2025 Geotopia. All rights reserved.</p>
            <div class="global-footer-links">
                <a href="${basePath}index.html"><i class="fas fa-home"></i> Home</a>
                <a href="${basePath}legal/privacy-policy.html"><i class="fas fa-shield-alt"></i> Privacy Policy</a>
                <a href="${basePath}legal/terms-and-conditions.html"><i class="fas fa-file-contract"></i> Terms & Conditions</a>
            </div>
        </div>
    `;
    
    // ═══════════════════════════════════════════════════════
    // STYLES
    // ═══════════════════════════════════════════════════════
    
    const styles = document.createElement('style');
    styles.textContent = `
        /* Home Button */
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
        
        /* Footer */
        .global-footer {
            background: rgba(0, 0, 0, 0.3);
            border-top: 1px solid rgba(255, 255, 255, 0.1);
            padding: 30px 20px;
            margin-top: 60px;
        }
        
        .global-footer-content {
            max-width: 1200px;
            margin: 0 auto;
            text-align: center;
        }
        
        .global-footer-content p {
            color: #666;
            font-size: 0.9rem;
            margin-bottom: 15px;
        }
        
        .global-footer-links {
            display: flex;
            justify-content: center;
            gap: 30px;
            flex-wrap: wrap;
        }
        
        .global-footer-links a {
            color: #00B4D8;
            text-decoration: none;
            font-size: 0.9rem;
            display: flex;
            align-items: center;
            gap: 6px;
            transition: color 0.3s;
        }
        
        .global-footer-links a:hover {
            color: #00FFE5;
        }
        
        .global-footer-links a i {
            font-size: 0.8rem;
        }
        
        /* Mobile */
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
            
            .global-footer-links {
                flex-direction: column;
                gap: 15px;
            }
        }
    `;
    
    // ═══════════════════════════════════════════════════════
    // ADD TO PAGE
    // ═══════════════════════════════════════════════════════
    
    function addElements() {
        document.head.appendChild(styles);
        document.body.appendChild(homeBtn);
        
        // Add footer before closing body (or after main content)
        const mainContainer = document.querySelector('.main-container, main, .container');
        if (mainContainer) {
            mainContainer.after(footer);
        } else {
            document.body.appendChild(footer);
        }
    }
    
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', addElements);
    } else {
        addElements();
    }
    
    console.log('🏠 Global Navigation Added! (Home + Footer)');
})();
