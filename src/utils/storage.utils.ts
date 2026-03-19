import { User } from '../types/companion.types';

const STORAGE_KEY = 'geo_companion_user_data';

export const saveUserData = (user: User): void => {
  try {
    const userData = {
      ...user,
      lastActive: user.lastActive.toISOString(),
      badges: user.badges.map(badge => ({
        ...badge,
        unlockedDate: badge.unlockedDate?.toISOString()
      }))
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(userData));
  } catch (error) {
    console.error('Failed to save user data:', error);
  }
};

export const loadUserData = (): User | null => {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    if (!data) return null;

    const parsed = JSON.parse(data);
    return {
      ...parsed,
      lastActive: new Date(parsed.lastActive),
      badges: parsed.badges.map((badge: any) => ({
        ...badge,
        unlockedDate: badge.unlockedDate ? new Date(badge.unlockedDate) : undefined
      }))
    };
  } catch (error) {
    console.error('Failed to load user data:', error);
    return null;
  }
};

export const getDefaultUser = (): User => {
  return {
    id: `user_${Date.now()}`,
    isPremium: false,
    coins: 100,
    lastActive: new Date(),
    streaks: {
      learning: { current: 0, longest: 0, lastActiveDate: '', isProtected: false },
      games: { current: 0, longest: 0, lastActiveDate: '', isProtected: false },
      quiz: { current: 0, longest: 0, lastActiveDate: '', isProtected: false },
      geoNews: { current: 0, longest: 0, lastActiveDate: '', isProtected: false }
    },
    revivals: {
      lifetimeRevivalsUsed: 0,
      monthlyRevivalsUsed: 0,
      lastRevivalMonth: new Date().toISOString().slice(0, 7)
    },
    shields: {
      free: false,
      weeklyUsed: false,
      lastShieldWeek: ''
    },
    badges: [],
    totalActiveDays: 0
  };
};
