// badge.service.ts
export class BadgeService {
  checkAndAwardBadges(user: User): Badge[] {
    const maxStreak = new StreakService().getMaxStreak(user);
    const newBadges: Badge[] = [];

    for (const [level, requirements] of Object.entries(BADGE_REQUIREMENTS)) {
      const existingBadge = user.badges.find(b => b.level === level);

      if (!existingBadge && maxStreak >= requirements.days) {
        const newBadge: Badge = {
          id: `${level}-${Date.now()}`,
          level: level as BadgeLevel,
          unlocked: true,
          unlockedDate: new Date(),
          reward: {
            coins: requirements.coins,
            title: requirements.title
          }
        };

        user.badges.push(newBadge);
        user.coins += requirements.coins;
        newBadges.push(newBadge);
      }
    }

    return newBadges;
  }

  getNextBadge(user: User): { level: BadgeLevel; daysNeeded: number } | null {
    const maxStreak = new StreakService().getMaxStreak(user);

    for (const [level, requirements] of Object.entries(BADGE_REQUIREMENTS)) {
      const hasBadge = user.badges.some(b => b.level === level && b.unlocked);
      
      if (!hasBadge) {
        return {
          level: level as BadgeLevel,
          daysNeeded: requirements.days - maxStreak
        };
      }
    }

    return null;
  }

  getBadgeVisuals(level: BadgeLevel) {
    return {
      [BadgeLevel.COPPER]: {
        icon: '🥉',
        color: '#CD7F32',
        gradient: 'linear-gradient(135deg, #CD7F32, #A0522D)',
        particles: '✨'
      },
      [BadgeLevel.SILVER]: {
        icon: '🥈',
        color: '#C0C0C0',
        gradient: 'linear-gradient(135deg, #C0C0C0, #A8A8A8)',
        particles: '⭐'
      },
      [BadgeLevel.GOLD]: {
        icon: '🥇',
        color: '#FFD700',
        gradient: 'linear-gradient(135deg, #FFD700, #FFA500)',
        particles: '🌟'
      },
      [BadgeLevel.DIAMOND]: {
        icon: '💎',
        color: '#B9F2FF',
        gradient: 'linear-gradient(135deg, #B9F2FF, #00CED1)',
        particles: '💫'
      },
      [BadgeLevel.PLATINUM]: {
        icon: '🏆',
        color: '#E5E4E2',
        gradient: 'linear-gradient(135deg, #E5E4E2, #BCC6CC)',
        particles: '✨💫'
      },
      [BadgeLevel.COSMIC]: {
        icon: '🌌',
        color: '#4B0082',
        gradient: 'linear-gradient(135deg, #4B0082, #8A2BE2, #FF1493)',
        particles: '🌠⭐💫'
      },
      [BadgeLevel.EARTH_MASTER]: {
        icon: '🌍',
        color: '#00FF00',
        gradient: 'linear-gradient(135deg, #00FF00, #00CED1, #FFD700)',
        particles: '🌟✨💫🌠'
      }
    }[level];
  }
}
