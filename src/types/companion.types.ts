// Copy all the interface definitions from the first code block
export interface User {
  id: string;
  isPremium: boolean;
  coins: number;
  lastActive: Date;
  streaks: UserStreaks;
  revivals: RevivalData;
  shields: ShieldData;
  badges: Badge[];
  totalActiveDays: number;
}

export interface UserStreaks {
  learning: StreakData;
  games: StreakData;
  quiz: StreakData;
  geoNews: StreakData;
}

export interface StreakData {
  current: number;
  longest: number;
  lastActiveDate: string;
  isProtected: boolean;
}

export interface RevivalData {
  lifetimeRevivalsUsed: number;
  monthlyRevivalsUsed: number;
  lastRevivalMonth: string;
}

export interface ShieldData {
  free: boolean;
  weeklyUsed: boolean;
  lastShieldWeek: string;
}

export interface Badge {
  id: string;
  level: BadgeLevel;
  unlocked: boolean;
  unlockedDate?: Date;
  reward: Reward;
}

export enum BadgeLevel {
  COPPER = 'copper',
  SILVER = 'silver',
  GOLD = 'gold',
  DIAMOND = 'diamond',
  PLATINUM = 'platinum',
  COSMIC = 'cosmic',
  EARTH_MASTER = 'earth_master'
}

export interface Reward {
  coins: number;
  title?: string;
}

export enum MascotMood {
  HAPPY = 'happy',
  CALM = 'calm',
  WAITING = 'waiting',
  SAD = 'sad',
  ANGRY = 'angry',
  BROKEN = 'broken',
  COMEBACK = 'comeback'
}

export interface NotificationConfig {
  hours: number;
  message: string;
  intensity: 'gentle' | 'emotional' | 'strong' | 'comeback';
}
