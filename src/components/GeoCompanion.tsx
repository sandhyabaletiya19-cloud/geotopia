import React, { useEffect, useState } from 'react';
import { MascotWidget } from './MascotWidget';
import { StreakDisplay } from './StreakDisplay';
import { User, UserStreaks } from '../types/companion.types';
import { StreakService } from '../services/streak.service';
import { BadgeService } from '../services/badge.service';
import { NotificationService } from '../services/notification.service';
import { UIEffectsService } from '../services/ui-effects.service';
import { saveUserData, loadUserData, getDefaultUser } from '../utils/storage.utils';
import '../styles/companion.css';

export const GeoCompanion: React.FC = () => {
  const [user, setUser] = useState<User>(() => loadUserData() || getDefaultUser());
  const [streakBroken, setStreakBroken] = useState(false);

  const streakService = new StreakService();
  const badgeService = new BadgeService();
  const notificationService = new NotificationService();
  const uiEffectsService = new UIEffectsService();

  useEffect(() => {
    // Request notification permission
    notificationService.requestPermission();

    // Schedule notifications
    const notificationInterval = setInterval(() => {
      notificationService.scheduleNotifications(user);
    }, 5 * 60 * 1000); // Check every 5 minutes

    // Apply UI effects
    const hoursSinceActive = Math.floor(
      (Date.now() - user.lastActive.getTime()) / (1000 * 60 * 60)
    );
    uiEffectsService.applyInactivityEffects(document.body, hoursSinceActive);

    return () => clearInterval(notificationInterval);
  }, [user.lastActive]);

  useEffect(() => {
    // Save user data whenever it changes
    saveUserData(user);
  }, [user]);

  const handleActivity = (activityType: keyof UserStreaks) => {
    const updatedUser = { ...user };
    updatedUser.lastActive = new Date();

    const result = streakService.checkAndUpdateStreak(updatedUser, activityType);

    if (result.streakBroken) {
      setStreakBroken(true);
      showStreakBrokenModal(activityType, updatedUser);
    }

    if (result.shieldUsed) {
      showNotification("🛡️ Your streak shield protected you! Keep going!", 'success');
    }

    // Check for new badges
    const newBadges = badgeService.checkAndAwardBadges(updatedUser);
    if (newBadges.length > 0) {
      showBadgeUnlocked(newBadges);
    }

    // Apply comeback effects if returning
    const hoursSinceActive = Math.floor(
      (Date.now() - user.lastActive.getTime()) / (1000 * 60 * 60)
    );
    if (hoursSinceActive > 3) {
      uiEffectsService.applyComebackEffects(document.body);
      notificationService.playNotificationSound('comeback');
    }

    setUser(updatedUser);
    setStreakBroken(false);
  };

  const showStreakBrokenModal = (activityType: keyof UserStreaks, currentUser: User) => {
    const { canRevive, cost, reason } = streakService.canReviveStreak(currentUser);

    const revive = () => {
      const updatedUser = { ...currentUser };
      const result = streakService.reviveStreak(updatedUser, activityType);
      if (result.success) {
        showNotification(result.message, 'success');
        setUser(updatedUser);
      }
    };

    // You can implement this as a modal component
    if (window.confirm(`Streak broken! ${canRevive ? `Revive for ${cost} coins?` : reason}`)) {
      if (canRevive) {
        revive();
      }
    }
  };

  const showBadgeUnlocked = (badges: any[]) => {
    badges.forEach(badge => {
      showNotification(
        `🎉 New Badge Unlocked: ${badge.reward.title}! +${badge.reward.coins} coins`,
        'success'
      );
    });
  };

  const showNotification = (message: string, type: 'success' | 'error' | 'info') => {
    // Simple notification - you can enhance this
    alert(message);
  };

  return (
    <div className="geo-companion">
      <MascotWidget 
        lastActiveDate={user.lastActive} 
        streakBroken={streakBroken} 
      />
      
      <StreakDisplay user={user} />

      {/* Activity Buttons */}
      <div className="activity-buttons">
        <button onClick={() => handleActivity('learning')} className="btn-primary">
          📚 Learn
        </button>
        <button onClick={() => handleActivity('games')} className="btn-primary">
          🎮 Play Game
        </button>
        <button onClick={() => handleActivity('quiz')} className="btn-primary">
          ❓ Take Quiz
        </button>
        <button onClick={() => handleActivity('geoNews')} className="btn-primary">
          📰 Read News
        </button>
      </div>
    </div>
  );
};
