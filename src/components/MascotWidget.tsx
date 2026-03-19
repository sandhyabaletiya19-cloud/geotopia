import React, { useEffect, useState } from 'react';
import { MascotService } from '../services/mascot.service';
import { MascotMood } from '../types/companion.types';
import { MOOD_TRANSITIONS } from '../constants/companion.constants';
import '../styles/companion.css';

interface MascotWidgetProps {
  lastActiveDate: Date;
  streakBroken: boolean;
}

export const MascotWidget: React.FC<MascotWidgetProps> = ({ lastActiveDate, streakBroken }) => {
  const [mood, setMood] = useState<MascotMood>(MascotMood.HAPPY);
  const [message, setMessage] = useState<string>('');
  const mascotService = new MascotService();

  useEffect(() => {
    const updateMascot = () => {
      const currentMood = mascotService.calculateMood(lastActiveDate, streakBroken);
      setMood(currentMood);
      setMessage(mascotService.getMascotMessage(currentMood));
    };

    updateMascot();
    const interval = setInterval(updateMascot, 60000); // Update every minute

    return () => clearInterval(interval);
  }, [lastActiveDate, streakBroken]);

  const emotion = mascotService.getEmotionData(mood);

  return (
    <div className="mascot-container">
      <div className={`mascot ${emotion.animation}`} style={{ color: emotion.color }}>
        <div className={`mascot-face ${emotion.glow ? 'glow' : ''}`}>
          <div className="mascot-eyes">{emotion.eyes}</div>
          <div className="mascot-mouth">{emotion.mouth}</div>
        </div>
        <div className="mascot-body">
          <div className="mascot-globe">🌍</div>
        </div>
      </div>
      <div className="mascot-message">{message}</div>
      <div className="mascot-mood-label">{MOOD_TRANSITIONS[mood].description}</div>
    </div>
  );
};
