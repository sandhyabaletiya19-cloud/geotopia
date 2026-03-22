// UPSC STATS TRACKING SYSTEM

class UPSCTracker {
  constructor() {
    this.storageKey = 'upscStats';
  }

  // Get all UPSC stats
  getStats() {
    const stats = localStorage.getItem(this.storageKey);
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
      mistakeReview: [],
      examResults: []
    };
  }

  // Update stats
  updateStats(newStats) {
    const current = this.getStats();
    const updated = { ...current, ...newStats };
    localStorage.setItem(this.storageKey, JSON.stringify(updated));
    return updated;
  }

  // Track question attempt
  trackQuestion(questionId, topic, isCorrect) {
    const stats = this.getStats();
    
    stats.totalQuestions++;
    if (isCorrect) {
      stats.correct++;
    } else {
      stats.wrong++;
      if (!stats.mistakeReview.includes(questionId)) {
        stats.mistakeReview.push(questionId);
      }
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
    
    localStorage.setItem(this.storageKey, JSON.stringify(stats));
    return stats;
  }

  // Calculate strong/weak topics
  updateTopicStrength(stats) {
    let strong = 0;
    let weak = 0;
    
    Object.keys(stats.topicPerformance).forEach(topic => {
      const perf = stats.topicPerformance[topic];
      if (perf.total === 0) return;
      
      const accuracy = (perf.correct / perf.total) * 100;
      
      if (accuracy >= 75) strong++;
      if (accuracy < 60) weak++;
    });
    
    stats.strongTopics = strong;
    stats.weakTopics = weak;
  }

  // Toggle bookmark
  toggleBookmark(questionId) {
    const stats = this.getStats();
    const index = stats.bookmarkedQuestions.indexOf(questionId);
    
    if (index === -1) {
      stats.bookmarkedQuestions.push(questionId);
    } else {
      stats.bookmarkedQuestions.splice(index, 1);
    }
    
    localStorage.setItem(this.storageKey, JSON.stringify(stats));
    return stats.bookmarkedQuestions.includes(questionId);
  }

  // Check if question is bookmarked
  isBookmarked(questionId) {
    const stats = this.getStats();
    return stats.bookmarkedQuestions.includes(questionId);
  }

  // Get unused questions for a topic
  getUnusedQuestions(allQuestions, topics = []) {
    const stats = this.getStats();
    const usedSet = new Set(stats.usedQuestions);
    
    let filtered = allQuestions.filter(q => !usedSet.has(q.id));
    
    if (topics.length > 0) {
      filtered = filtered.filter(q => topics.includes(q.topic));
    }
    
    // If too few unused questions, reset the pool
    if (filtered.length < 20) {
      stats.usedQuestions = [];
      localStorage.setItem(this.storageKey, JSON.stringify(stats));
      filtered = allQuestions;
      
      if (topics.length > 0) {
        filtered = filtered.filter(q => topics.includes(q.topic));
      }
    }
    
    return filtered;
  }

  // Save exam result
  saveExamResult(result) {
    const stats = this.getStats();
    
    if (!stats.examResults) {
      stats.examResults = [];
    }
    
    stats.examResults.push({
      ...result,
      date: new Date().toISOString()
    });
    
    localStorage.setItem(this.storageKey, JSON.stringify(stats));
  }

  // Get exam history
  getExamHistory() {
    const stats = this.getStats();
    return stats.examResults || [];
  }

  // Reset all stats
  reset() {
    localStorage.removeItem(this.storageKey);
  }

  // Get topic accuracy
  getTopicAccuracy(topic) {
    const stats = this.getStats();
    const perf = stats.topicPerformance[topic];
    
    if (!perf || perf.total === 0) return 0;
    
    return Math.round((perf.correct / perf.total) * 100);
  }

  // Get weakest topics
  getWeakestTopics(count = 3) {
    const stats = this.getStats();
    
    return Object.entries(stats.topicPerformance)
      .map(([topic, data]) => ({
        topic,
        accuracy: data.total > 0 ? Math.round((data.correct / data.total) * 100) : 0,
        total: data.total
      }))
      .filter(t => t.total > 0)
      .sort((a, b) => a.accuracy - b.accuracy)
      .slice(0, count);
  }
}

// Global instance
const upscTracker = new UPSCTracker();
