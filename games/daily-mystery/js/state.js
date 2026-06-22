/* ═══════════════════════════════════════════════════════════
   DHARAVERSE — GAME STATE
   File: /games/daily-mystery/js/state.js
   
   Picks daily country, saves progress to localStorage
   ═══════════════════════════════════════════════════════════ */

(function() {
  'use strict';

  const State = {
    
    MAX_GUESSES: 6,
    STORAGE_KEY: 'dv-game-state',
    STREAK_KEY: 'dv-streak',
    
    // Current game state (in memory)
    current: {
      targetCountry: null,
      guesses: [],
      gameOver: false,
      won: false,
      date: null
    },
    
    /**
     * Initialize game state — pick today's country, load saved progress
     */
    init: function() {
      const today = this.getTodayKey();
      const savedState = this.loadSavedState();
      
      // If saved state matches today, restore it
      if (savedState && savedState.date === today) {
        this.current = savedState;
        console.log('[State] Restored saved game:', this.current);
      } else {
        // New day — pick a new country
        this.current = {
          targetCountry: this.pickTodayCountry(),
          guesses: [],
          gameOver: false,
          won: false,
          date: today
        };
        this.save();
        console.log('[State] New game started. Target:', this.current.targetCountry.name);
      }
      
      return this.current;
    },
    
    /**
     * Get today's date as a string (resets at midnight IST)
     */
    getTodayKey: function() {
      const now = new Date();
      const istOffset = 5.5 * 60 * 60 * 1000;
      const utcNow = now.getTime() + (now.getTimezoneOffset() * 60 * 1000);
      const istNow = new Date(utcNow + istOffset);
      return istNow.toISOString().split('T')[0]; // "2025-01-15"
    },
    
    /**
     * Pick today's country deterministically based on date
     * Same date = same country for everyone
     */
    pickTodayCountry: function() {
      const today = this.getTodayKey();
      
      // Filter out territories (non-sovereign)
      const eligible = window.COUNTRIES.filter(c => !c.isTerritory);
      
      // Create deterministic hash from date string
      let hash = 0;
      for (let i = 0; i < today.length; i++) {
        hash = ((hash << 5) - hash) + today.charCodeAt(i);
        hash = hash & hash;
      }
      
      const index = Math.abs(hash) % eligible.length;
      return eligible[index];
    },
    
    /**
     * Submit a guess — returns evaluation result
     */
    submitGuess: function(countryId) {
      if (this.current.gameOver) {
        return { error: 'Game is already over' };
      }
      
      if (this.current.guesses.length >= this.MAX_GUESSES) {
        return { error: 'No guesses remaining' };
      }
      
      const guessedCountry = window.COUNTRY_LOOKUP[countryId];
      if (!guessedCountry) {
        return { error: 'Invalid country' };
      }
      
      // Check if already guessed
      const alreadyGuessed = this.current.guesses.some(g => g.guessedCountry.id === countryId);
      if (alreadyGuessed) {
        return { error: 'You already guessed this country' };
      }
      
      const guessNumber = this.current.guesses.length + 1;
      const result = window.Logic.evaluateGuess(
        guessedCountry,
        this.current.targetCountry,
        guessNumber
      );
      
      // Save the guess
      this.current.guesses.push(result);
      
      // Check win/lose condition
      if (result.isCorrect) {
        this.current.won = true;
        this.current.gameOver = true;
        this.updateStreak(true);
      } else if (this.current.guesses.length >= this.MAX_GUESSES) {
        this.current.gameOver = true;
        this.updateStreak(false);
      }
      
      this.save();
      return result;
    },
    
    /**
     * Save state to localStorage
     */
    save: function() {
      try {
        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.current));
      } catch (e) {
        console.error('[State] Failed to save:', e);
      }
    },
    
    /**
     * Load saved state from localStorage
     */
    loadSavedState: function() {
      try {
        const data = localStorage.getItem(this.STORAGE_KEY);
        return data ? JSON.parse(data) : null;
      } catch (e) {
        console.error('[State] Failed to load:', e);
        return null;
      }
    },
    
    /**
     * Get current streak
     */
    getStreak: function() {
      try {
        const data = localStorage.getItem(this.STREAK_KEY);
        if (!data) return { current: 0, best: 0, lastWinDate: null };
        return JSON.parse(data);
      } catch (e) {
        return { current: 0, best: 0, lastWinDate: null };
      }
    },
    
    /**
     * Update streak after game ends
     */
    updateStreak: function(won) {
      const streak = this.getStreak();
      const today = this.getTodayKey();
      
      if (won) {
        // Check if last win was yesterday
        if (streak.lastWinDate) {
          const lastDate = new Date(streak.lastWinDate);
          const todayDate = new Date(today);
          const diffDays = Math.floor((todayDate - lastDate) / (1000 * 60 * 60 * 24));
          
          if (diffDays === 1) {
            streak.current += 1;
          } else if (diffDays > 1) {
            streak.current = 1;
          }
          // If diffDays === 0, already won today (shouldn't happen)
        } else {
          streak.current = 1;
        }
        
        streak.lastWinDate = today;
        streak.best = Math.max(streak.best, streak.current);
      } else {
        streak.current = 0;
      }
      
      try {
        localStorage.setItem(this.STREAK_KEY, JSON.stringify(streak));
      } catch (e) {
        console.error('[State] Failed to save streak:', e);
      }
      
      return streak;
    },
    
    /**
     * Reset for testing only
     */
    reset: function() {
      localStorage.removeItem(this.STORAGE_KEY);
      console.log('[State] Reset complete');
    }
  };
  
  window.State = State;
  console.log('[State] Loaded');
  
})();
