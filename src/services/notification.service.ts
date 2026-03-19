// notification.service.ts
export class NotificationService {
  private audioContext: AudioContext;

  constructor() {
    this.audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
  }

  scheduleNotifications(user: User) {
    const hoursSinceActive = this.getHoursSince(user.lastActive);

    for (const config of NOTIFICATION_TIMINGS) {
      if (hoursSinceActive >= config.hours) {
        this.sendNotification(config, user);
        break; // Send only the most relevant one
      }
    }
  }

  private sendNotification(config: NotificationConfig, user: User) {
    if ('Notification' in window && Notification.permission === 'granted') {
      const notification = new Notification('Terra is waiting! 🌍', {
        body: config.message,
        icon: '/mascot-icon.png',
        badge: '/badge-icon.png',
        tag: 'geo-companion',
        requireInteraction: config.intensity === 'comeback'
      });

      notification.onclick = () => {
        window.focus();
        notification.close();
      };

      this.playNotificationSound(config.intensity);
    }
  }

  playNotificationSound(intensity: string) {
    const frequencies = {
      gentle: [523.25, 659.25], // C5, E5
      emotional: [440, 554.37], // A4, C#5
      strong: [392, 493.88], // G4, B4
      comeback: [523.25, 659.25, 783.99, 1046.50] // C5, E5, G5, C6
    };

    const freq = frequencies[intensity as keyof typeof frequencies];
    
    freq.forEach((f, i) => {
      setTimeout(() => {
        const oscillator = this.audioContext.createOscillator();
        const gainNode = this.audioContext.createGain();

        oscillator.connect(gainNode);
        gainNode.connect(this.audioContext.destination);

        oscillator.frequency.value = f;
        oscillator.type = 'sine';

        gainNode.gain.setValueAtTime(0.1, this.audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(
          0.01,
          this.audioContext.currentTime + 0.5
        );

        oscillator.start(this.audioContext.currentTime);
        oscillator.stop(this.audioContext.currentTime + 0.5);
      }, i * 150);
    });
  }

  private getHoursSince(date: Date): number {
    return Math.floor((Date.now() - date.getTime()) / (1000 * 60 * 60));
  }

  requestPermission() {
    if ('Notification' in window) {
      Notification.requestPermission();
    }
  }
}
