import React, { useState } from 'react';
import { User, Badge, BadgeLevel } from '../types/companion.types';
import { BadgeService } from '../services/badge.service';
import { BADGE_REQUIREMENTS } from '../constants/companion.constants';
import '../styles/companion.css';

interface BadgeShowcaseProps {
  user: User;
  onClose?: () => void;
}

export const BadgeShowcase: React.FC<BadgeShowcaseProps> = ({ user, onClose }) => {
  const [selectedBadge, setSelectedBadge] = useState<Badge | null>(null);
  const badgeService = new BadgeService();

  const allBadgeLevels = Object.keys(BADGE_REQUIREMENTS) as BadgeLevel[];

  const getBadgeStatus = (level: BadgeLevel) => {
    const userBadge = user.badges.find(b => b.level === level);
    const requirements = BADGE_REQUIREMENTS[level];
    const maxStreak = Math.max(
      user.streaks.learning.current,
      user.streaks.games.current,
      user.streaks.quiz.current,
      user.streaks.geoNews.current
    );

    return {
      unlocked: !!userBadge,
      badge: userBadge,
      progress: Math.min((maxStreak / requirements.days) * 100, 100),
      daysRemaining: Math.max(requirements.days - maxStreak, 0),
      requirements
    };
  };

  const renderBadgeCard = (level: BadgeLevel) => {
    const status = getBadgeStatus(level);
    const visuals = badgeService.getBadgeVisuals(level);

    return (
      <div
        key={level}
        className={`badge-showcase-card ${status.unlocked ? 'unlocked' : 'locked'}`}
        onClick={() => setSelectedBadge(status.badge || null)}
        style={{
          background: status.unlocked ? visuals.gradient : '#e0e0e0',
          cursor: 'pointer',
          position: 'relative'
        }}
      >
        {/* Badge Icon */}
        <div className={`badge-showcase-icon ${status.unlocked ? 'animate-badge' : 'grayscale'}`}>
          {status.unlocked ? visuals.icon : '🔒'}
        </div>

        {/* Badge Title */}
        <div className="badge-showcase-title">
          {status.unlocked ? status.requirements.title : '???'}
        </div>

        {/* Badge Level */}
        <div className="badge-showcase-level">
          {level.replace('_', ' ').toUpperCase()}
        </div>

        {/* Progress or Unlocked Date */}
        {status.unlocked ? (
          <div className="badge-showcase-date">
            Unlocked: {status.badge?.unlockedDate?.toLocaleDateString()}
          </div>
        ) : (
          <div className="badge-showcase-progress">
            <div className="progress-text">
              {status.daysRemaining} days to go
            </div>
            <div className="progress-bar-small">
              <div
                className="progress-fill"
                style={{ width: `${status.progress}%` }}
              />
            </div>
          </div>
        )}

        {/* Reward */}
        <div className="badge-showcase-reward">
          {status.unlocked ? '✅' : `🪙 ${status.requirements.coins}`}
        </div>

        {/* Particles for unlocked badges */}
        {status.unlocked && (
          <div className="badge-particles">{visuals.particles}</div>
        )}
      </div>
    );
  };

  const renderBadgeDetail = () => {
    if (!selectedBadge) return null;

    const visuals = badgeService.getBadgeVisuals(selectedBadge.level);
    const requirements = BADGE_REQUIREMENTS[selectedBadge.level];

    return (
      <div className="badge-detail-modal" onClick={() => setSelectedBadge(null)}>
        <div className="badge-detail-content" onClick={(e) => e.stopPropagation()}>
          <button className="close-btn" onClick={() => setSelectedBadge(null)}>
            ✕
          </button>

          <div
            className="badge-detail-header"
            style={{ background: visuals.gradient }}
          >
            <div className="badge-detail-icon animate-badge-large">
              {visuals.icon}
            </div>
            <h2>{selectedBadge.reward.title}</h2>
            <p className="badge-detail-level">
              {selectedBadge.level.replace('_', ' ').toUpperCase()}
            </p>
          </div>

          <div className="badge-detail-body">
            <div className="detail-row">
              <span className="detail-label">Unlocked On:</span>
              <span className="detail-value">
                {selectedBadge.unlockedDate?.toLocaleDateString('en-US', {
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </span>
            </div>

            <div className="detail-row">
              <span className="detail-label">Streak Required:</span>
              <span className="detail-value">{requirements.days} days</span>
            </div>

            <div className="detail-row">
              <span className="detail-label">Coins Earned:</span>
              <span className="detail-value">🪙 {selectedBadge.reward.coins}</span>
            </div>

            <div className="detail-row">
              <span className="detail-label">Special Title:</span>
              <span className="detail-value highlight">{selectedBadge.reward.title}</span>
            </div>

            <div className="achievement-message">
              <p>🎉 You've proven yourself as a dedicated geography explorer!</p>
              <p>Terra is proud of your commitment to learning about our world.</p>
            </div>
          </div>

          <div className="badge-detail-particles">
            {visuals.particles}
          </div>
        </div>
      </div>
    );
  };

  const unlockedCount = user.badges.filter(b => b.unlocked).length;
  const totalBadges = allBadgeLevels.length;
  const completionPercentage = (unlockedCount / totalBadges) * 100;

  return (
    <div className="badge-showcase">
      {/* Header Section */}
      <div className="badge-showcase-header">
        <h2>🏆 Badge Collection</h2>
        <p className="badge-showcase-subtitle">
          Celebrate your geography learning journey
        </p>

        {/* Progress Overview */}
        <div className="badge-overview">
          <div className="badge-stats">
            <div className="stat-item">
              <span className="stat-number">{unlockedCount}</span>
              <span className="stat-label">Unlocked</span>
            </div>
            <div className="stat-divider">/</div>
            <div className="stat-item">
              <span className="stat-number">{totalBadges}</span>
              <span className="stat-label">Total</span>
            </div>
          </div>

          <div className="completion-progress">
            <div className="completion-bar">
              <div
                className="completion-fill"
                style={{ width: `${completionPercentage}%` }}
              >
                <span className="completion-text">
                  {Math.round(completionPercentage)}%
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Badge Grid */}
      <div className="badge-showcase-grid">
        {allBadgeLevels.map(level => renderBadgeCard(level))}
      </div>

      {/* Motivation Section */}
      {unlockedCount < totalBadges && (
        <div className="badge-motivation">
          <p className="motivation-text">
            🌟 Keep exploring! {totalBadges - unlockedCount} more badge{totalBadges - unlockedCount !== 1 ? 's' : ''} to collect!
          </p>
        </div>
      )}

      {/* Master Achievement */}
      {unlockedCount === totalBadges && (
        <div className="master-achievement">
          <div className="master-icon">👑</div>
          <h3>EARTH MASTER ACHIEVED!</h3>
          <p>You've unlocked all badges. You are a true geography champion! 🌍</p>
        </div>
      )}

      {/* Close Button (if modal) */}
      {onClose && (
        <button className="showcase-close-btn" onClick={onClose}>
          Close
        </button>
      )}

      {/* Badge Detail Modal */}
      {renderBadgeDetail()}
    </div>
  );
};
