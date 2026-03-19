import { BadgeLevel, NotificationConfig, MascotMood } from '../types/companion.types';

export const BADGE_REQUIREMENTS = {
  [BadgeLevel.COPPER]: { days: 3, coins: 50, title: 'Map Explorer' },
  [BadgeLevel.SILVER]: { days: 7, coins: 100, title: 'Globe Trekker' },
  [BadgeLevel.GOLD]: { days: 15, coins: 250, title: 'Atlas Guardian' },
  [BadgeLevel.DIAMOND]: { days: 30, coins: 500, title: 'World Navigator' },
  [BadgeLevel.PLATINUM]: { days: 60, coins: 1000, title: 'Continental Master' },
  [BadgeLevel.COSMIC]: { days: 100, coins: 2000, title: 'Stellar Cartographer' },
  [BadgeLevel.EARTH_MASTER]: { days: 365, coins: 5000, title: 'Earth Guardian' }
};

export const REVIVAL_COST = {
  free: 200,
  premium: 100
};

export const REVIVAL_LIMITS = {
  free: 1,
  premium: 5
};

export const NOTIFICATION_TIMINGS: NotificationConfig[] = [
  {
    hours: 2,
    message: "Your atlas is collecting dust! Ready to discover new territories? 🗺️",
    intensity: 'gentle'
  },
  {
    hours: 3,
    message: "The mountains are calling... Will you answer? ⛰️",
    intensity: 'gentle'
  },
  {
    hours: 24,
    message: "Your journey across the continents has paused. Terra is waiting for you! 🌍",
    intensity: 'emotional'
  },
  {
    hours: 72,
    message: "The compass needle spins aimlessly without you... Your streak needs you! 🧭",
    intensity: 'strong'
  },
  {
    hours: 168,
    message: "Seven seas crossed, seven days missed. Terra needs her explorer back! 💔",
    intensity: 'comeback'
  }
];

export const MOOD_TRANSITIONS = {
  [MascotMood.HAPPY]: { duration: 0, description: 'Active & Engaged' },
  [MascotMood.CALM]: { duration: 3, description: 'Recently Active' },
  [MascotMood.WAITING]: { duration: 10, description: 'Patiently Waiting' },
  [MascotMood.SAD]: { duration: 24, description: 'Missing You' },
  [MascotMood.ANGRY]: { duration: 24, description: 'Streak Lost!' },
  [MascotMood.BROKEN]: { duration: 168, description: 'Heartbroken' },
  [MascotMood.COMEBACK]: { duration: 0, description: 'Welcome Back!' }
};
