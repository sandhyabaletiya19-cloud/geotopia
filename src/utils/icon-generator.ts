export class IconGenerator {
  private static iconCache: Map<string, string> = new Map();

  /**
   * Initialize and generate all icons on app startup
   */
  static initialize() {
    // Generate Terra mascot icons for all moods
    const moods = ['happy', 'sad', 'angry', 'calm', 'waiting', 'broken', 'comeback'];
    moods.forEach(mood => {
      const icon = this.generateTerraIcon(mood as any);
      this.iconCache.set(`terra-${mood}`, icon);
    });

    // Generate badge icon
    const badgeIcon = this.generateBadgeIcon();
    this.iconCache.set('badge', badgeIcon);

    console.log('✅ All icons generated successfully');
  }

  /**
   * Get cached icon by name
   */
  static getIcon(name: string): string {
    return this.iconCache.get(name) || this.iconCache.get('terra-happy') || '';
  }

  /**
   * Generate Terra mascot icon based on mood
   */
  static generateTerraIcon(
    mood: 'happy' | 'sad' | 'angry' | 'calm' | 'waiting' | 'broken' | 'comeback',
    size: number = 128
  ): string {
    const canvas = document.createElement('canvas');
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext('2d');

    if (!ctx) return '';

    // Colors based on mood
    const moodColors = {
      happy: { primary: '#4CAF50', secondary: '#2E7D32', glow: true },
      sad: { primary: '#9E9E9E', secondary: '#616161', glow: false },
      angry: { primary: '#FF5722', secondary: '#D84315', glow: false },
      calm: { primary: '#2196F3', secondary: '#1565C0', glow: false },
      waiting: { primary: '#FFC107', secondary: '#F57C00', glow: false },
      broken: { primary: '#424242', secondary: '#212121', glow: false },
      comeback: { primary: '#FFD700', secondary: '#FFA500', glow: true }
    };

    const colors = moodColors[mood];

    // Draw globe background with gradient
    const gradient = ctx.createRadialGradient(
      size * 0.4, size * 0.4, 0,
      size * 0.5, size * 0.5, size * 0.5
    );
    gradient.addColorStop(0, colors.primary);
    gradient.addColorStop(0.7, colors.secondary);
    gradient.addColorStop(1, colors.primary);

    ctx.beginPath();
    ctx.arc(size / 2, size / 2, size * 0.45, 0, Math.PI * 2);
    ctx.fillStyle = gradient;
    ctx.fill();

    // Draw continents (simplified landmasses)
    ctx.fillStyle = '#2E7D32';
    ctx.globalAlpha = 0.7;

    // North America/Europe region
    ctx.beginPath();
    ctx.ellipse(size * 0.3, size * 0.3, size * 0.12, size * 0.09, 0.3, 0, Math.PI * 2);
    ctx.fill();

    // Asia region
    ctx.beginPath();
    ctx.ellipse(size * 0.65, size * 0.25, size * 0.1, size * 0.08, -0.2, 0, Math.PI * 2);
    ctx.fill();

    // Africa/South America region
    ctx.beginPath();
    ctx.ellipse(size * 0.35, size * 0.6, size * 0.08, size * 0.12, 0.5, 0, Math.PI * 2);
    ctx.fill();

    // Australia/Oceania region
    ctx.beginPath();
    ctx.ellipse(size * 0.68, size * 0.65, size * 0.07, size * 0.05, 0.1, 0, Math.PI * 2);
    ctx.fill();

    ctx.globalAlpha = 1;

    // Draw ocean waves
    ctx.strokeStyle = '#1565C0';
    ctx.lineWidth = 2;
    ctx.globalAlpha = 0.4;

    for (let i = 0; i < 3; i++) {
      ctx.beginPath();
      ctx.arc(size * 0.25, size * 0.5 + i * size * 0.08, size * 0.06, 0, Math.PI);
      ctx.stroke();
    }

    ctx.globalAlpha = 1;

    // Draw face expressions
    ctx.fillStyle = '#333';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    const expressions = {
      happy: { leftEye: '◕', rightEye: '◕', mouth: '⌣', mouthSize: 0.2 },
      sad: { leftEye: '◕', rightEye: '◕', mouth: '︵', mouthSize: 0.18 },
      angry: { leftEye: '◢', rightEye: '◣', mouth: '︿', mouthSize: 0.18 },
      calm: { leftEye: '◕', rightEye: '◕', mouth: '⌒', mouthSize: 0.16 },
      waiting: { leftEye: '◕', rightEye: '◕', mouth: '−', mouthSize: 0.16 },
      broken: { leftEye: '✖', rightEye: '✖', mouth: '︵', mouthSize: 0.2 },
      comeback: { leftEye: '★', rightEye: '★', mouth: '⌣', mouthSize: 0.22 }
    };

    const expr = expressions[mood];

    // Draw eyes
    ctx.font = `bold ${size * 0.15}px Arial`;
    ctx.fillText(expr.leftEye, size * 0.38, size * 0.45);
    ctx.fillText(expr.rightEye, size * 0.62, size * 0.45);

    // Draw mouth
    ctx.font = `bold ${size * expr.mouthSize}px Arial`;
    ctx.fillText(expr.mouth, size * 0.5, size * 0.65);

    // Add glow effect for happy/comeback moods
    if (colors.glow) {
      ctx.strokeStyle = colors.primary;
      ctx.lineWidth = 4;
      ctx.globalAlpha = 0.4;
      ctx.beginPath();
      ctx.arc(size / 2, size / 2, size * 0.48, 0, Math.PI * 2);
      ctx.stroke();
      
      ctx.globalAlpha = 0.2;
      ctx.lineWidth = 6;
      ctx.beginPath();
      ctx.arc(size / 2, size / 2, size * 0.5, 0, Math.PI * 2);
      ctx.stroke();
      
      ctx.globalAlpha = 1;
    }

    // Add crack effect for broken mood
    if (mood === 'broken') {
      ctx.strokeStyle = '#000';
      ctx.lineWidth = 2;
      ctx.globalAlpha = 0.5;

      // Draw cracks
      ctx.beginPath();
      ctx.moveTo(size * 0.3, size * 0.2);
      ctx.lineTo(size * 0.5, size * 0.5);
      ctx.lineTo(size * 0.7, size * 0.3);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(size * 0.25, size * 0.6);
      ctx.lineTo(size * 0.5, size * 0.5);
      ctx.lineTo(size * 0.65, size * 0.75);
      ctx.stroke();

      ctx.globalAlpha = 1;
    }

    return canvas.toDataURL('image/png');
  }

  /**
   * Generate badge/trophy icon
   */
  static generateBadgeIcon(size: number = 128): string {
    const canvas = document.createElement('canvas');
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext('2d');

    if (!ctx) return '';

    // Draw badge background with gradient
    const gradient = ctx.createRadialGradient(
      size / 2, size / 2, 0,
      size / 2, size / 2, size / 2
    );
    gradient.addColorStop(0, '#FFD700');
    gradient.addColorStop(0.5, '#FFA500');
    gradient.addColorStop(1, '#FF8C00');

    ctx.beginPath();
    ctx.arc(size / 2, size / 2, size * 0.45, 0, Math.PI * 2);
    ctx.fillStyle = gradient;
    ctx.fill();

    // Draw outer ring
    ctx.strokeStyle = '#FFD700';
    ctx.lineWidth = 4;
    ctx.globalAlpha = 0.6;
    ctx.beginPath();
    ctx.arc(size / 2, size / 2, size * 0.48, 0, Math.PI * 2);
    ctx.stroke();
    ctx.globalAlpha = 1;

    // Draw trophy emoji
    ctx.font = `${size * 0.6}px Arial`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('🏆', size / 2, size / 2);

    // Add sparkles
    ctx.fillStyle = '#FFF';
    ctx.font = `${size * 0.15}px Arial`;
    ctx.fillText('✨', size * 0.2, size * 0.25);
    ctx.fillText('✨', size * 0.8, size * 0.25);
    ctx.fillText('✨', size * 0.15, size * 0.75);
    ctx.fillText('✨', size * 0.85, size * 0.75);

    return canvas.toDataURL('image/png');
  }

  /**
   * Generate simple emoji-based icon as fallback
   */
  static generateEmojiIcon(emoji: string, size: number = 128): string {
    const canvas = document.createElement('canvas');
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext('2d');

    if (!ctx) return '';

    // White background
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, size, size);

    // Draw emoji
    ctx.font = `${size * 0.75}px Arial`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(emoji, size / 2, size / 2);

    return canvas.toDataURL('image/png');
  }

  /**
   * Download icon to disk (for saving generated icons)
   */
  static downloadIcon(iconName: string, filename?: string) {
    const icon = this.getIcon(iconName);
    if (!icon) {
      console.error(`Icon ${iconName} not found`);
      return;
    }

    const link = document.createElement('a');
    link.href = icon;
    link.download = filename || `${iconName}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  /**
   * Download all icons as a ZIP (requires JSZip library)
   */
  static downloadAllIcons() {
    this.iconCache.forEach((dataURL, name) => {
      this.downloadIcon(name, `${name}.png`);
    });
  }
}

// Auto-initialize when imported
if (typeof window !== 'undefined') {
  // Initialize icons when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      IconGenerator.initialize();
    });
  } else {
    IconGenerator.initialize();
  }
}
