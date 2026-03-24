/**
 * PHYSICAL GEOGRAPHY HUB PAGE
 * Handles interactions for index.html
 */

class PhysicalGeographyHub {
  constructor() {
    this.init();
  }
  
  init() {
    // Hide preloader
    this.hidePreloader();
    
    // Animate stats on scroll
    this.animateStats();
    
    // Setup mobile menu
    this.setupMobileMenu();
    
    // Setup theme toggle
    this.setupThemeToggle();
    
    // Setup back to top button
    this.setupBackToTop();
    
    // Setup scroll animations
    this.setupScrollAnimations();
    
    // Setup navbar scroll effects
    this.setupNavbarScroll();
  }
  
  hidePreloader() {
    window.addEventListener('load', () => {
      setTimeout(() => {
        const preloader = document.getElementById('preloader');
        if (preloader) {
          preloader.classList.add('hidden');
        }
      }, 500);
    });
  }
  
  animateStats() {
    const stats = document.querySelectorAll('.stat-value[data-count]');
    
    const animateCount = (element) => {
      const target = parseInt(element.dataset.count);
      const duration = 2000;
      const step = target / (duration / 16);
      let current = 0;
      
      const timer = setInterval(() => {
        current += step;
        if (current >= target) {
          element.textContent = target;
          clearInterval(timer);
        } else {
          element.textContent = Math.floor(current);
        }
      }, 16);
    };
    
    // Intersection Observer for triggering animation
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
          entry.target.classList.add('animated');
          animateCount(entry.target);
        }
      });
    }, { threshold: 0.5 });
    
    stats.forEach(stat => observer.observe(stat));
  }
  
  setupMobileMenu() {
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const mobileMenu = document.getElementById('mobileMenu');
    const navLinks = document.getElementById('navLinks');
    
    if (mobileMenuToggle) {
      mobileMenuToggle.addEventListener('click', () => {
        mobileMenuToggle.classList.toggle('active');
        
        // For desktop nav
        if (navLinks) {
          navLinks.classList.toggle('active');
        }
        
        // For mobile menu
        if (mobileMenu) {
          mobileMenu.classList.toggle('active');
        }
      });
    }
    
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (mobileMenu && !e.target.closest('.main-nav')) {
        mobileMenu.classList.remove('active');
        if (mobileMenuToggle) {
          mobileMenuToggle.classList.remove('active');
        }
      }
    });
    
    // Close menu on link click
    document.querySelectorAll('.mobile-nav-link').forEach(link => {
      link.addEventListener('click', () => {
        if (mobileMenu) {
          mobileMenu.classList.remove('active');
        }
        if (mobileMenuToggle) {
          mobileMenuToggle.classList.remove('active');
        }
      });
    });
  }
  
  setupThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = themeToggle?.querySelector('.theme-icon');
    
    // Check saved theme
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.body.classList.toggle('light-mode', savedTheme === 'light');
    if (themeIcon) {
      themeIcon.textContent = savedTheme === 'light' ? '☀️' : '🌙';
    }
    
    if (themeToggle) {
      themeToggle.addEventListener('click', () => {
        const isLight = document.body.classList.toggle('light-mode');
        localStorage.setItem('theme', isLight ? 'light' : 'dark');
        if (themeIcon) {
          themeIcon.textContent = isLight ? '☀️' : '🌙';
        }
      });
    }
  }
  
  setupBackToTop() {
    const backToTop = document.getElementById('backToTop');
    
    if (!backToTop) return;
    
    let scrollTimeout;
    
    window.addEventListener('scroll', () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        if (window.scrollY > 400) {
          backToTop.classList.add('visible');
        } else {
          backToTop.classList.remove('visible');
        }
      }, 100);
    }, { passive: true });
    
    backToTop.addEventListener('click', () => {
      window.scrollTo({ 
        top: 0, 
        behavior: 'smooth' 
      });
    });
  }
  
  setupScrollAnimations() {
    // Fade in elements on scroll
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('aos-animate');
        }
      });
    }, observerOptions);
    
    // Animate cards
    document.querySelectorAll('.topic-card, .intro-card, .concept-card, .feature-link-card').forEach(card => {
      card.setAttribute('data-aos', 'fade-up');
      observer.observe(card);
    });
  }
  
  setupNavbarScroll() {
    const nav = document.getElementById('mainNav');
    let lastScroll = 0;
    
    window.addEventListener('scroll', () => {
      const currentScroll = window.scrollY;
      
      // Add scrolled class
      if (currentScroll > 100) {
        nav?.classList.add('scrolled');
      } else {
        nav?.classList.remove('scrolled');
      }
      
      // Hide/show navbar
      if (currentScroll > lastScroll && currentScroll > 500) {
        nav?.classList.add('hidden');
      } else {
        nav?.classList.remove('hidden');
      }
      
      lastScroll = currentScroll;
    }, { passive: true });
  }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  new PhysicalGeographyHub();
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      const offsetTop = target.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  });
});

// Add loading state to images
document.querySelectorAll('.topic-image img').forEach(img => {
  img.addEventListener('load', function() {
    this.classList.add('loaded');
  });
  
  img.addEventListener('error', function() {
    console.error('Failed to load image:', this.src);
    // Fallback image
    this.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="800" height="600"%3E%3Crect fill="%23667eea" width="800" height="600"/%3E%3Ctext fill="%23fff" font-family="Arial" font-size="40" x="50%25" y="50%25" text-anchor="middle" dominant-baseline="middle"%3EImage Not Available%3C/text%3E%3C/svg%3E';
  });
});

// Console easter egg
console.log('%c🌍 Physical Geography Hub', 'color: #667eea; font-size: 24px; font-weight: bold;');
console.log('%cExplore the wonders of Earth!', 'color: #764ba2; font-size: 16px;');
