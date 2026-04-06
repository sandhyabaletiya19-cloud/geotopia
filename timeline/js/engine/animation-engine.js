// ============================================
// GEOTOPIA ANIMATION ENGINE
// Cinematic loading sequence: Big Bang → Modern Earth
// ============================================

class LoadingSequence {
  constructor() {
    this.container = document.getElementById('loading-screen');
    this.canvas = document.getElementById('loading-canvas');
    this.ctx = this.canvas ? this.canvas.getContext('2d') : null;
    this.progressBar = document.querySelector('.loading-progress-fill');
    this.title = document.querySelector('.loading-title');
    
    // Particles
    this.particles = [];
    this.animationId = null;
    
    // Progress
    this.progress = 0;
    this.currentPhase = 0;
    
    // Phases
    this.phases = [
      { name: 'Big Bang', duration: 1000, color: '#ffffff' },
      { name: 'Accretion', duration: 1000, color: '#ff6600' },
      { name: 'Cooling', duration: 1000, color: '#cc3300' },
      { name: 'Life Emerges', duration: 1000, color: '#00ff00' },
      { name: 'Modern Earth', duration: 1000, color: '#4682b4' },
      { name: 'Ready', duration: 500, color: '#ffffff' }
    ];
  }
  
  // ============================================
  // MAIN SEQUENCE
  // ============================================
  
  /**
   * Play complete loading sequence
   */
  async play() {
    if (!this.canvas || !this.ctx) {
      console.warn('Loading canvas not found');
      return;
    }
    
    // Setup canvas
    this.resizeCanvas();
    
    // Play phases
    for (let i = 0; i < this.phases.length; i++) {
      this.currentPhase = i;
      await this.playPhase(i);
    }
    
    // Cleanup
    this.cleanup();
  }
  
  /**
   * Play single phase
   */
  async playPhase(phaseIndex) {
    const phase = this.phases[phaseIndex];
    
    // Update title
    if (this.title) {
      gsap.to(this.title, {
        opacity: 0,
        duration: 0.3,
        onComplete: () => {
          this.title.textContent = phase.name;
          gsap.to(this.title, { opacity: 1, duration: 0.3 });
        }
      });
    }
    
    // Play phase animation
    switch(phaseIndex) {
      case 0:
        await this.phaseBigBang();
        break;
      case 1:
        await this.phaseAccretion();
        break;
      case 2:
        await this.phaseCooling();
        break;
      case 3:
        await this.phaseLife();
        break;
      case 4:
        await this.phaseModern();
        break;
      case 5:
        await this.phaseReady();
        break;
    }
    
    // Update progress
    this.progress = ((phaseIndex + 1) / this.phases.length) * 100;
    if (this.progressBar) {
      gsap.to(this.progressBar, {
        width: `${this.progress}%`,
        duration: 0.5,
        ease: 'power2.out'
      });
    }
  }
  
  // ============================================
  // PHASE 1: BIG BANG
  // ============================================
  
  async phaseBigBang() {
    return new Promise(resolve => {
      const duration = 1000;
      const startTime = performance.now();
      
      // Create explosion particles
      for (let i = 0; i < 1000; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 5 + 2;
        
        this.particles.push({
          x: this.canvas.width / 2,
          y: this.canvas.height / 2,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          life: 1,
          size: Math.random() * 3 + 1,
          color: `hsl(${Math.random() * 60 + 20}, 100%, 70%)`
        });
      }
      
      const animate = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Clear canvas
        this.ctx.fillStyle = 'rgba(0, 5, 16, 0.1)';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        
        // Update and draw particles
        this.particles.forEach(p => {
          p.x += p.vx;
          p.y += p.vy;
          p.life -= 0.01;
          
          if (p.life > 0) {
            this.ctx.fillStyle = p.color;
            this.ctx.globalAlpha = p.life;
            this.ctx.fillRect(p.x, p.y, p.size, p.size);
          }
        });
        
        this.ctx.globalAlpha = 1;
        
        // Center flash
        const flashSize = Math.max(1, progress * 200); // Ensure minimum size of 1
        const gradient = this.ctx.createRadialGradient(
          this.canvas.width / 2, this.canvas.height / 2, 0,
          this.canvas.width / 2, this.canvas.height / 2, flashSize
        );
        gradient.addColorStop(0, `rgba(255, 255, 255, ${1 - progress})`);
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');

        this.ctx.fillStyle = gradient;
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          resolve();
        }
      };
      
      requestAnimationFrame(animate);
    });
  }
  
  // ============================================
  // PHASE 2: ACCRETION
  // ============================================
  
  async phaseAccretion() {
    return new Promise(resolve => {
      const duration = 1000;
      const startTime = performance.now();
      const centerX = this.canvas.width / 2;
      const centerY = this.canvas.height / 2;
      
      // Clear old particles
      this.particles = [];
      
      // Create orbiting particles
      for (let i = 0; i < 500; i++) {
        const angle = Math.random() * Math.PI * 2;
        const distance = Math.random() * 200 + 100;
        
        this.particles.push({
          angle,
          distance,
          speed: Math.random() * 0.02 + 0.01,
          size: Math.random() * 2 + 1,
          color: `hsl(${Math.random() * 30 + 15}, 100%, 60%)`
        });
      }
      
      const animate = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Clear canvas
        this.ctx.fillStyle = 'rgba(0, 5, 16, 0.2)';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        
        // Draw forming sphere
        const sphereRadius = progress * 80;
        const gradient = this.ctx.createRadialGradient(
          centerX, centerY, 0,
          centerX, centerY, sphereRadius
        );
        gradient.addColorStop(0, '#ff6600');
        gradient.addColorStop(1, '#cc3300');
        
        this.ctx.fillStyle = gradient;
        this.ctx.beginPath();
        this.ctx.arc(centerX, centerY, sphereRadius, 0, Math.PI * 2);
        this.ctx.fill();
        
        // Draw and move particles
        this.particles.forEach(p => {
          p.angle += p.speed;
          p.distance -= progress * 0.5; // Pull towards center
          
          const x = centerX + Math.cos(p.angle) * p.distance;
          const y = centerY + Math.sin(p.angle) * p.distance;
          
          this.ctx.fillStyle = p.color;
          this.ctx.fillRect(x, y, p.size, p.size);
        });
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          resolve();
        }
      };
      
      requestAnimationFrame(animate);
    });
  }
  
  // ============================================
  // PHASE 3: COOLING
  // ============================================
  
  async phaseCooling() {
    return new Promise(resolve => {
      const duration = 1000;
      const startTime = performance.now();
      const centerX = this.canvas.width / 2;
      const centerY = this.canvas.height / 2;
      const radius = 80;
      
      const animate = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Clear canvas
        this.ctx.fillStyle = '#000510';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        
        // Interpolate color from red to dark gray
        const r = Math.floor(255 * (1 - progress) + 100 * progress);
        const g = Math.floor(100 * progress);
        const b = Math.floor(100 * progress);
        
        const gradient = this.ctx.createRadialGradient(
          centerX, centerY, 0,
          centerX, centerY, radius
        );
        gradient.addColorStop(0, `rgb(${r + 50}, ${g + 50}, ${b})`);
        gradient.addColorStop(1, `rgb(${r}, ${g}, ${b})`);
        
        this.ctx.fillStyle = gradient;
        this.ctx.beginPath();
        this.ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
        this.ctx.fill();
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          resolve();
        }
      };
      
      requestAnimationFrame(animate);
    });
  }
  
  // ============================================
  // PHASE 4: LIFE EMERGES
  // ============================================
  
  async phaseLife() {
    return new Promise(resolve => {
      const duration = 1000;
      const startTime = performance.now();
      const centerX = this.canvas.width / 2;
      const centerY = this.canvas.height / 2;
      const radius = 80;
      
      const animate = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Clear canvas
        this.ctx.fillStyle = '#000510';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        
        // Draw planet with growing green
        const gradient = this.ctx.createRadialGradient(
          centerX, centerY, 0,
          centerX, centerY, radius
        );
        
        const greenAmount = progress;
        gradient.addColorStop(0, `rgb(${100 * (1 - greenAmount) + 50 * greenAmount}, ${100 + 155 * greenAmount}, ${100 * (1 - greenAmount) + 50 * greenAmount})`);
        gradient.addColorStop(1, `rgb(${50 * (1 - greenAmount)}, ${100 + 100 * greenAmount}, ${50 * (1 - greenAmount)})`);
        
        this.ctx.fillStyle = gradient;
        this.ctx.beginPath();
        this.ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
        this.ctx.fill();
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          resolve();
        }
      };
      
      requestAnimationFrame(animate);
    });
  }
  
  // ============================================
  // PHASE 5: MODERN EARTH
  // ============================================
  
  async phaseModern() {
    return new Promise(resolve => {
      const duration = 1000;
      const startTime = performance.now();
      const centerX = this.canvas.width / 2;
      const centerY = this.canvas.height / 2;
      const radius = 80;
      
      const animate = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Clear canvas
        this.ctx.fillStyle = '#000510';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        
        // Draw blue marble
        const gradient = this.ctx.createRadialGradient(
          centerX - 20, centerY - 20, 0,
          centerX, centerY, radius
        );
        gradient.addColorStop(0, '#87CEEB');
        gradient.addColorStop(0.5, '#4682B4');
        gradient.addColorStop(1, '#1E3A5F');
        
        this.ctx.fillStyle = gradient;
        this.ctx.beginPath();
        this.ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
        this.ctx.fill();
        
        // Add green continents (simplified)
        this.ctx.fillStyle = '#228B22';
        this.ctx.globalAlpha = progress;
        this.ctx.beginPath();
        this.ctx.arc(centerX + 20, centerY - 10, 15, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.globalAlpha = 1;
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          resolve();
        }
      };
      
      requestAnimationFrame(animate);
    });
  }
  
  // ============================================
  // PHASE 6: READY
  // ============================================
  
  async phaseReady() {
    return new Promise(resolve => {
      gsap.to(this.title, {
        scale: 1.5,
        duration: 0.5,
        ease: 'back.out(1.7)',
        onComplete: resolve
      });
    });
  }
  
  // ============================================
  // UTILITIES
  // ============================================
  
  /**
   * Resize canvas to fill container
   */
  resizeCanvas() {
    if (!this.canvas) return;
    
    this.canvas.width = this.container.clientWidth;
    this.canvas.height = this.container.clientHeight;
  }
  
  /**
   * Cleanup
   */
  cleanup() {
    this.particles = [];
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
    }
  }
}

// Make globally available
window.LoadingSequence = LoadingSequence;
