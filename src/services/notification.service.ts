import { User, NotificationConfig } from '../types/companion.types';
import { NOTIFICATION_TIMINGS } from '../constants/companion.constants';

export class NotificationService {
  private audioContext: AudioContext | null = null;
  private sounds: Map<string, HTMLAudioElement> = new Map();
  private useAudioFiles: boolean = true; // Toggle between files and generated tones

  constructor() {
    this.initializeAudioContext();
    this.preloadSounds();
  }

  private initializeAudioContext() {
    try {
      this.audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    } catch (error) {
      console.warn('Web Audio API not supported:', error);
    }
  }

  private preloadSounds() {
    const soundFiles = {
      gentle: '/sounds/notification-gentle.mp3',
      emotional: '/sounds/notification-emotional.mp3',
      strong: '/sounds/notification-strong.mp3',
      comeback: '/sounds/notification-comeback.mp3',
      badgeUnlock: '/sounds/badge-unlock.mp3',
      streakBreak: '/sounds/streak-break.mp3',
      shieldProtect: '/sounds/shield-protect.mp3'
    };

    Object.entries(soundFiles).forEach(([key, path]) => {
      const audio = new Audio(path);
      audio.preload = 'auto';
      audio.volume = 0.5;
      
      // Handle loading errors gracefully
      audio.addEventListener('error', () => {
        console.warn(`Failed to load sound: ${path}, falling back to generated tones`);
        this.useAudioFiles = false;
      });
      
      this.sounds.set(key, audio);
    });
  }

  scheduleNotifications(user: User) {
    const hoursSinceActive = this.getHoursSince(user.lastActive);

    for (const config of NOTIFICATION_TIMINGS) {
      if (hoursSinceActive >= config.hours) {
        this.sendNotification(config, user);
        break;
      }
    }
  }

  private sendNotification(config: NotificationConfig, user: User) {
    if ('Notification' in window && Notification.permission === 'granted') {
      const notification = new Notification('Terra is waiting! 🌍', {
        body: config.message,
        icon: '/images/mascot-icon.png',
        badge: '/images/badge-icon.png',
        tag: 'geo-companion',
        requireInteraction: config.intensity === 'comeback',
        vibrate: this.getVibrationPattern(config.intensity)
      });

      notification.onclick = () => {
        window.focus();
        notification.close();
      };

      this.playNotificationSound(config.intensity);
    }
  }

  playNotificationSound(intensity: string) {
    if (this.useAudioFiles && this.sounds.has(intensity)) {
      this.playAudioFile(intensity);
    } else {
      this.playGeneratedTone(intensity);
    }
  }

  private playAudioFile(intensity: string) {
    const sound = this.sounds.get(intensity);
    if (sound) {
      sound.currentTime = 0;
      sound.play().catch(err => {
        console.warn('Audio playback failed:', err);
        this.playGeneratedTone(intensity);
      });
    }
  }

  private playGeneratedTone(intensity: string) {
    if (!this.audioContext) return;

    const frequencies = {
      gentle: [523.25, 659.25], // C5, E5
      emotional: [440, 554.37], // A4, C#5
      strong: [392, 493.88], // G4, B4
      comeback: [523.25, 659.25, 783.99, 1046.50] // C5, E5, G5, C6
    };

    const freq = frequencies[intensity as keyof typeof frequencies] || frequencies.gentle;

    freq.forEach((f, i) => {
      setTimeout(() => {
        this.playTone(f, 0.1, 0.5);
      }, i * 150);
    });
  }

  private playTone(frequency: number, volume: number, duration: number) {
    if (!this.audioContext) return;

    const oscillator = this.audioContext.createOscillator();
    const gainNode = this.audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(this.audioContext.destination);

    oscillator.frequency.value = frequency;
    oscillator.type = 'sine';

    gainNode.gain.setValueAtTime(volume, this.audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(
      0.01,
      this.audioContext.currentTime + duration
    );

    oscillator.start(this.audioContext.currentTime);
    oscillator.stop(this.audioContext.currentTime + duration);
  }

  // Special sounds for events
  playBadgeUnlockSound() {
    if (this.useAudioFiles && this.sounds.has('badgeUnlock')) {
      this.playAudioFile('badgeUnlock');
    } else {
      // Victory fanfare
      const melody = [
        { freq: 523.25, duration: 0.2 }, // C5
        { freq: 659.25, duration: 0.2 }, // E5
        { freq: 783.99, duration: 0.2 }, // G5
        { freq: 1046.50, duration: 0.4 } // C6
      ];

      melody.forEach((note, i) => {
        setTimeout(() => {
          this.playTone(note.freq, 0.15, note.duration);
        }, i * 200);
      });
    }
  }

  playStreakBreakSound() {
    if (this.useAudioFiles && this.sounds.has('streakBreak')) {
      this.playAudioFile('streakBreak');
    } else {
      // Descending sad tone
      const melody = [
        { freq: 523.25, duration: 0.3 }, // C5
        { freq: 392.00, duration: 0.3 }, // G4
        { freq: 261.63, duration: 0.5 }  // C4
      ];

      melody.forEach((note, i) => {
        setTimeout(() => {
          this.playTone(note.freq, 0.1, note.duration);
        }, i * 300);
      });
    }
  }

  playShieldProtectSound() {
    if (this.useAudioFiles && this.sounds.has('shieldProtect')) {
      this.playAudioFile('shieldProtect');
    } else {
      // Shield "ding" sound
      this.playTone(880, 0.2, 0.3); // A5
      setTimeout(() => this.playTone(1046.50, 0.15, 0.2), 100); // C6
    }
  }

  private getVibrationPattern(intensity: string): number[] {
    const patterns = {
      gentle: [100],
      emotional: [100, 50, 100],
      strong: [200, 100, 200],
      comeback: [100, 50, 100, 50, 100, 50, 200]
    };

    return patterns[intensity as keyof typeof patterns] || [100];
  }

  private getHoursSince(date: Date): number {
    return Math.floor((Date.now() - date.getTime()) / (1000 * 60 * 60));
  }

  requestPermission() {
    if ('Notification' in window && Notification.permission === 'default') {
      Notification.requestPermission();
    }
  }

  // Volume control
  setVolume(volume: number) {
    const clampedVolume = Math.max(0, Math.min(1, volume));
    this.sounds.forEach(sound => {
      sound.volume = clampedVolume;
    });
  }

  // Mute/Unmute
  mute() {
    this.sounds.forEach(sound => {
      sound.muted = true;
    });
  }

  unmute() {
    this.sounds.forEach(sound => {
      sound.muted = false;
    });
  }
}
