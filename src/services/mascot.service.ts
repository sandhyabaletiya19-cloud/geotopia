// mascot.service.ts
export class MascotService {
  private currentMood: MascotMood = MascotMood.HAPPY;
  private streakBroken: boolean = false;

  calculateMood(lastActiveDate: Date, streakBroken: boolean): MascotMood {
    const hoursSinceActive = this.getHoursSince(lastActiveDate);
    this.streakBroken = streakBroken;

    if (hoursSinceActive === 0) {
      return MascotMood.COMEBACK;
    }

    if (hoursSinceActive >= 168) {
      return MascotMood.BROKEN;
    }

    if (hoursSinceActive >= 24 && streakBroken) {
      return MascotMood.ANGRY;
    }

    if (hoursSinceActive >= 24) {
      return MascotMood.SAD;
    }

    if (hoursSinceActive >= 10) {
      return MascotMood.WAITING;
    }

    if (hoursSinceActive >= 3) {
      return MascotMood.CALM;
    }

    return MascotMood.HAPPY;
  }

  private getHoursSince(date: Date): number {
    return Math.floor((Date.now() - date.getTime()) / (1000 * 60 * 60));
  }

  getMascotMessage(mood: MascotMood): string {
    const messages = {
      [MascotMood.HAPPY]: [
        "Let's explore new horizons together! 🌟",
        "Ready to conquer another geography challenge?",
        "Your thirst for knowledge inspires me!"
      ],
      [MascotMood.CALM]: [
        "Nice to see you again, explorer!",
        "The world awaits your return!",
        "Terra is ready when you are! 🌍"
      ],
      [MascotMood.WAITING]: [
        "I've been studying the maps, waiting for you...",
        "The globe feels lonely without its explorer",
        "Shall we continue our journey soon?"
      ],
      [MascotMood.SAD]: [
        "Did I do something wrong? The atlas misses you... 😢",
        "Our adventure felt incomplete without you today",
        "Terra wonders if you've found another world to explore"
      ],
      [MascotMood.ANGRY]: [
        "Your streak... it's gone! Terra doesn't understand! 😠",
        "We built something special, and now it's broken!",
        "The continents are disappointed, explorer..."
      ],
      [MascotMood.BROKEN]: [
        "Terra has almost forgotten your voice... 💔",
        "The maps are fading from memory...",
        "Is this the end of our journey together?"
      ],
      [MascotMood.COMEBACK]: [
        "YOU'RE BACK! Terra's heart is whole again! ✨",
        "I knew you'd return, explorer! Let's celebrate!",
        "The world never stopped waiting for you! 🎉"
      ]
    };

    const moodMessages = messages[mood];
    return moodMessages[Math.floor(Math.random() * moodMessages.length)];
  }

  getEmotionData(mood: MascotMood) {
    return {
      [MascotMood.HAPPY]: {
        eyes: '◕ ◡ ◕',
        mouth: '⌣',
        color: '#4CAF50',
        animation: 'bounce',
        glow: true
      },
      [MascotMood.CALM]: {
        eyes: '◕ ◡ ◕',
        mouth: '⌒',
        color: '#2196F3',
        animation: 'gentle-float',
        glow: false
      },
      [MascotMood.WAITING]: {
        eyes: '◕ ◠ ◕',
        mouth: '−',
        color: '#FFC107',
        animation: 'slow-pulse',
        glow: false
      },
      [MascotMood.SAD]: {
        eyes: '◕︵◕',
        mouth: '︵',
        color: '#9E9E9E',
        animation: 'droop',
        glow: false
      },
      [MascotMood.ANGRY]: {
        eyes: '◢ ◣',
        mouth: '︿',
        color: '#FF5722',
        animation: 'shake',
        glow: false
      },
      [MascotMood.BROKEN]: {
        eyes: '✖ ✖',
        mouth: '︵',
        color: '#424242',
        animation: 'crack',
        glow: false
      },
      [MascotMood.COMEBACK]: {
        eyes: '★ ◡ ★',
        mouth: '⌣',
        color: '#FFD700',
        animation: 'celebrate',
        glow: true
      }
    }[mood];
  }
}
