// ui-effects.service.ts
export class UIEffectsService {
  applyInactivityEffects(container: HTMLElement, hoursSinceActive: number) {
    const intensity = Math.min(hoursSinceActive / 168, 1); // 0 to 1 over 7 days

    // Fade colors
    const saturation = 100 - (intensity * 70);
    container.style.filter = `saturate(${saturation}%)`;

    // Add cracks
    if (intensity > 0.3) {
      this.addCracks(container, Math.floor(intensity * 5));
    }

    // Slow globe animation
    const globeElement = container.querySelector('.globe-animation') as HTMLElement;
    if (globeElement) {
      const speed = 1 - (intensity * 0.8);
      globeElement.style.animationDuration = `${20 / speed}s`;
    }
  }

  private addCracks(container: HTMLElement, count: number) {
    const existingCracks = container.querySelectorAll('.crack');
    existingCracks.forEach(crack => crack.remove());

    for (let i = 0; i < count; i++) {
      const crack = document.createElement('div');
      crack.className = 'crack';
      crack.style.cssText = `
        position: absolute;
        top: ${Math.random() * 100}%;
        left: ${Math.random() * 100}%;
        width: ${Math.random() * 100 + 50}px;
        height: 2px;
        background: linear-gradient(90deg, transparent, rgba(0,0,0,0.3), transparent);
        transform: rotate(${Math.random() * 360}deg);
        opacity: ${Math.random() * 0.5 + 0.3};
        pointer-events: none;
      `;
      container.appendChild(crack);
    }
  }

  applyComebackEffects(container: HTMLElement) {
    // Restore colors
    container.style.transition = 'filter 1s ease-out';
    container.style.filter = 'saturate(120%)';

    setTimeout(() => {
      container.style.filter = 'saturate(100%)';
    }, 2000);

    // Remove cracks with animation
    const cracks = container.querySelectorAll('.crack');
    cracks.forEach((crack, i) => {
      setTimeout(() => {
        (crack as HTMLElement).style.transition = 'opacity 0.5s';
        (crack as HTMLElement).style.opacity = '0';
        setTimeout(() => crack.remove(), 500);
      }, i * 100);
    });

    // Speed up globe
    const globeElement = container.querySelector('.globe-animation') as HTMLElement;
    if (globeElement) {
      globeElement.style.transition = 'animation-duration 1s';
      globeElement.style.animationDuration = '20s';
    }

    // Celebration particles
    this.createCelebrationParticles(container);
  }

  private createCelebrationParticles(container: HTMLElement) {
    const particles = ['🌟', '✨', '🎉', '🌍', '⭐', '💫'];
    
    for (let i = 0; i < 20; i++) {
      const particle = document.createElement('div');
      particle.textContent = particles[Math.floor(Math.random() * particles.length)];
      particle.className = 'celebration-particle';
      
      const startX = Math.random() * 100;
      const endX = startX + (Math.random() - 0.5) * 50;
      const duration = Math.random() * 2 + 1;
      
      particle.style.cssText = `
        position: absolute;
        left: ${startX}%;
        bottom: 0;
        font-size: ${Math.random() * 20 + 20}px;
        pointer-events: none;
        animation: float-up ${duration}s ease-out forwards;
        --end-x: ${endX}%;
      `;
      
      container.appendChild(particle);
      
      setTimeout(() => particle.remove(), duration * 1000);
    }
  }
}
