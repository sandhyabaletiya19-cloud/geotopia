import React from 'react';
import { User, UserStreaks } from '../types/companion.types';
import { StreakService } from '../services/streak.service';
import { BadgeService } from '../services/badge.service';
import '../styles/companion.css';

interface StreakDisplayProps {
  user: User;
}

export const StreakDisplay: React.FC<StreakDisplayProps> = ({ user }) => {
  const streakService = new StreakService();
  const badgeService = new BadgeService();
  
  const maxStreak = streakService.getMaxStreak(user);
  const nextBadge = badgeService.getNextBadge(user);

  const renderStreakCard = (name: string, streak: any, icon: string) => {
    return (
      <div key={name} className={`streak-card ${streak.isProtected ? 'protected' : ''}`}>
        <div className="streak-icon">{icon}</div>
        <div className="streak-name">{name}</div>
        <div className="streak-current">🔥 {streak.current}</div>
        <div className="streak-longest">Best: {streak.longest}</div>
        {streak.isProtected && <div className="shield-badge">🛡️</div>}
      </div>
    );
  };

  return (
    <div className="streak-display">
      <div className="streak-header">
        <h3>Your Journey Progress</h3>
        <div className="max-streak">🔥 {maxStreak} Day Streak</div>
      </div>

      <div className="streak-grid">
        {renderStreakCard('Learning', user.streaks.learning, '📚')}
        {renderStreakCard('Games', user.streaks.games, '🎮')}
        {renderStreakCard('Quiz', user.streaks.quiz, '❓')}
        {renderStreakCard('Geo News', user.streaks.geoNews, '📰')}
      </div>

      {nextBadge && (
        <div className="next-badge">
          <p>Next Badge: <strong>{nextBadge.level}</strong></p>
          <p>{nextBadge.daysNeeded} more days to go! 🎯</p>
          <div className="progress-bar">
            <div 
              className="progress" 
              style={{ width: `${(maxStreak / (maxStreak + nextBadge.daysNeeded)) * 100}%` }}
            />
          </div>
        </div>
      )}

      <div className="badges-earned">
        <h4>Badges Collected</h4>
        <div className="badge-list">
          {user.badges.map(badge => {
            const visuals = badgeService.getBadgeVisuals(badge.level);
            return (
              <div 
                key={badge.id} 
                className="badge-item" 
                style={{ background: visuals.gradient }}
              >
                <div className="badge-icon-small">{visuals.icon}</div>
                <div className="badge-name">{badge.reward.title}</div>
                <div className="badge-date">
                  {badge.unlockedDate?.toLocaleDateString()}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="stats">
        <div className="stat">
          <span className="stat-label">Coins</span>
          <span className="stat-value">🪙 {user.coins}</span>
        </div>
        <div className="stat">
          <span className="stat-label">Total Active Days</span>
          <span className="stat-value">📅 {user.totalActiveDays}</span>
        </div>
      </div>
    </div>
  );
};
