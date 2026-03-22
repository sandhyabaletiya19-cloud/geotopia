// GLOBAL STATS MANAGEMENT SYSTEM

class StatsManager {
  constructor() {
    this.storageKey = 'adultZoneStats';
    this.upscStorageKey = 'upscStats';
  }

  // Get adult zone stats
  getAdultStats() {
    const stats = localStorage.getItem(this.storageKey);
    return stats ? JSON.parse(stats) : {
      totalCoins: 0,
      accuracy: 0,
      gamesPlayed: 0,
      streak: 0,
      bestScores: {
        trivia: 0,
        memory: 0,
        wordMaster: 0,
        scrabble: 0,
        spelling: 0
      }
    };
  }

  // Update adult zone stats
  updateAdultStats(newStats) {
    const current = this.getAdultStats();
    const updated = { ...current, ...newStats };
    localStorage.setItem(this.storageKey, JSON.stringify(updated));
    return updated;
  }

  // Add coins
  addCoins(amount) {
    const stats = this.getAdultStats();
    stats.totalCoins += amount;
    localStorage.setItem(this.storageKey, JSON.stringify(stats));
    return stats.totalCoins;
  }

  // Get UPSC stats
  getUPSCStats() {
    const stats = localStorage.getItem(this.upscStorageKey);
    return stats ? JSON.parse(stats) : {
      totalQuestions: 0,
      correct: 0,
      wrong: 0,
      globalAccuracy: 0,
      strongTopics: 0,
      weakTopics: 0,
      topicPerformance: {},
      usedQuestions: [],
      bookmarkedQuestions: [],
      mistakeReview: []
    };
  }

  // Update UPSC stats
  updateUPSCStats(newStats) {
    const current = this.getUPSCStats();
    const updated = { ...current, ...newStats };
    localStorage.setItem(this.upscStorageKey, JSON.stringify(updated));
    return updated;
  }

  // Track question attempt
  trackQuestion(questionId, topic, isCorrect) {
    const stats = this.getUPSCStats();
    
    stats.totalQuestions++;
    if (isCorrect) {
      stats.correct++;
    } else {
      stats.wrong++;
      stats.mistakeReview.push(questionId);
    }
    
    stats.globalAccuracy = Math.round((stats.correct / stats.totalQuestions) * 100);
    
    // Track topic performance
    if (!stats.topicPerformance[topic]) {
      stats.topicPerformance[topic] = { correct: 0, total: 0 };
    }
    stats.topicPerformance[topic].total++;
    if (isCorrect) stats.topicPerformance[topic].correct++;
    
    // Mark question as used
    if (!stats.usedQuestions.includes(questionId)) {
      stats.usedQuestions.push(questionId);
    }
    
    // Update strong/weak topics
    this.updateTopicStrength(stats);
    
    localStorage.setItem(this.upscStorageKey, JSON.stringify(stats));
    return stats;
  }

  // Calculate strong/weak topics
  updateTopicStrength(stats) {
    let strong = 0;
    let weak = 0;
    
    Object.keys(stats.topicPerformance).forEach(topic => {
      const perf = stats.topicPerformance[topic];
      const accuracy = (perf.correct / perf.total) * 100;
      
      if (accuracy >= 75) strong++;
      if (accuracy < 60) weak++;
    });
    
    stats.strongTopics = strong;
    stats.weakTopics = weak;
  }

  // Bookmark question
  toggleBookmark(questionId) {
    const stats = this.getUPSCStats();
    const index = stats.bookmarkedQuestions.indexOf(questionId);
    
    if (index === -1) {
      stats.bookmarkedQuestions.push(questionId);
    } else {
      stats.bookmarkedQuestions.splice(index, 1);
    }
    
    localStorage.setItem(this.upscStorageKey, JSON.stringify(stats));
    return stats.bookmarkedQuestions.includes(questionId);
  }

  // Reset stats
  resetAdultStats() {
    localStorage.removeItem(this.storageKey);
  }

  resetUPSCStats() {
    localStorage.removeItem(this.upscStorageKey);
  }
}

// Global instance
const statsManager = new StatsManager();
