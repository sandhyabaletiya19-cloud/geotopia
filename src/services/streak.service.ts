// streak.service.ts
export class StreakService {
  checkAndUpdateStreak(
    user: User,
    activityType: keyof UserStreaks
  ): { streakUpdated: boolean; streakBroken: boolean; shieldUsed: boolean } {
    const today = new Date().toISOString().split('T')[0];
    const streak = user.streaks[activityType];
    const lastActive = streak.lastActiveDate;

    // Same day - no change
    if (lastActive === today) {
      return { streakUpdated: false, streakBroken: false, shieldUsed: false };
    }

    const daysDiff = this.getDaysDifference(lastActive, today);

    // Consecutive day
    if (daysDiff === 1) {
      streak.current++;
      streak.lastActiveDate = today;
      if (streak.current > streak.longest) {
        streak.longest = streak.current;
      }
      return { streakUpdated: true, streakBroken: false, shieldUsed: false };
    }

    // Streak broken - check for shield
    if (daysDiff > 1) {
      const shieldUsed = this.tryUseShield(user);
      
      if (shieldUsed) {
        streak.lastActiveDate = today;
        streak.isProtected = true;
        return { streakUpdated: true, streakBroken: false, shieldUsed: true };
      }

      // No shield - streak breaks
      streak.current = 1;
      streak.lastActiveDate = today;
      streak.isProtected = false;
      return { streakUpdated: true, streakBroken: true, shieldUsed: false };
    }

    return { streakUpdated: false, streakBroken: false, shieldUsed: false };
  }

  private tryUseShield(user: User): boolean {
    const currentWeek = this.getCurrentWeek();

    // Free users - one-time shield
    if (!user.isPremium && !user.shields.free) {
      user.shields.free = true;
      return true;
    }

    // Premium users - weekly shield
    if (user.isPremium && user.shields.lastShieldWeek !== currentWeek) {
      user.shields.weeklyUsed = true;
      user.shields.lastShieldWeek = currentWeek;
      return true;
    }

    return false;
  }

  canReviveStreak(user: User): { canRevive: boolean; cost: number; reason?: string } {
    const currentMonth = new Date().toISOString().slice(0, 7);

    // Reset monthly counter if new month
    if (user.revivals.lastRevivalMonth !== currentMonth) {
      user.revivals.monthlyRevivalsUsed = 0;
      user.revivals.lastRevivalMonth = currentMonth;
    }

    if (!user.isPremium) {
      if (user.revivals.lifetimeRevivalsUsed >= REVIVAL_LIMITS.free) {
        return {
          canRevive: false,
          cost: 0,
          reason: 'Free users can only revive once. Upgrade to Premium for more!'
        };
      }
      if (user.coins < REVIVAL_COST.free) {
        return {
          canRevive: false,
          cost: REVIVAL_COST.free,
          reason: `Need ${REVIVAL_COST.free} coins to revive`
        };
      }
      return { canRevive: true, cost: REVIVAL_COST.free };
    }

    // Premium users
    if (user.revivals.monthlyRevivalsUsed >= REVIVAL_LIMITS.premium) {
      return {
        canRevive: false,
        cost: 0,
        reason: 'Monthly revival limit reached (5/5)'
      };
    }
    if (user.coins < REVIVAL_COST.premium) {
      return {
        canRevive: false,
        cost: REVIVAL_COST.premium,
        reason: `Need ${REVIVAL_COST.premium} coins to revive`
      };
    }
    return { canRevive: true, cost: REVIVAL_COST.premium };
  }

  reviveStreak(
    user: User,
    activityType: keyof UserStreaks
  ): { success: boolean; message: string } {
    const { canRevive, cost, reason } = this.canReviveStreak(user);

    if (!canRevive) {
      return { success: false, message: reason! };
    }

    // Deduct coins
    user.coins -= cost;

    // Restore streak
    const streak = user.streaks[activityType];
    streak.current = streak.longest || 1;

    // Update revival counters
    user.revivals.lifetimeRevivalsUsed++;
    user.revivals.monthlyRevivalsUsed++;

    return {
      success: true,
      message: `Streak revived! ${cost} coins spent. Your journey continues! 🌟`
    };
  }

  private getDaysDifference(date1: string, date2: string): number {
    const d1 = new Date(date1);
    const d2 = new Date(date2);
    const diffTime = Math.abs(d2.getTime() - d1.getTime());
    return Math.floor(diffTime / (1000 * 60 * 60 * 24));
  }

  private getCurrentWeek(): string {
    const now = new Date();
    const year = now.getFullYear();
    const week = Math.ceil(
      ((now.getTime() - new Date(year, 0, 1).getTime()) / 86400000 + 1) / 7
    );
    return `${year}-W${week}`;
  }

  getMaxStreak(user: User): number {
    return Math.max(
      user.streaks.learning.current,
      user.streaks.games.current,
      user.streaks.quiz.current,
      user.streaks.geoNews.current
    );
  }
}
