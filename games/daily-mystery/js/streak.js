/* ═══════════════════════════════════════════════════════════
   DHARAVERSE MAP MYSTERY — STREAK MANAGER
   File: /games/daily-mystery/js/streak.js
   
   DEPENDS ON: state.js (reads localStorage "dmm_streak" key)
   USED BY: app.js, ui.js
   
   EXPORTS:
     window.StreakManager = {
       data: { current, best, lastPlayedDate,
               totalWins, totalGames, badges },
       load()
       save()
       update(won)
       getBadgeName(streak)
       getShareableBadge()
       checkMilestone()
     }
   
   LOCALSTORAGE KEY: "dmm_streak"
   
   BADGE MILESTONES:
     3   → "On a Roll 🎯"
     7   → "Explorer 🗺️"
     30  → "Cartographer 🧭"
     100 → "Globe Master 🌍"
     365 → "Legend 🏆"
   ═══════════════════════════════════════════════════════════ */

(function () {
  'use strict';

  // ─────────────────────────────────────────────
  // CONSTANTS
  // ─────────────────────────────────────────────

  var LS_KEY = 'dmm_streak';

  /**
   * Badge milestone definitions.
   * Each entry: { streak, id, name, emoji, message }
   * Ordered ascending so we can check in sequence.
   */
  var MILESTONES = [
    {
      streak:  3,
      id:      'on_a_roll',
      name:    'On a Roll',
      emoji:   '🎯',
      message: 'You\'re on a roll! 3 days straight! 🎯',
      shareText: '🎯 I just earned the "On a Roll" badge on Map Mystery!'
    },
    {
      streak:  7,
      id:      'explorer',
      name:    'Explorer',
      emoji:   '🗺️',
      message: 'Explorer badge unlocked! A whole week! 🗺️',
      shareText: '🗺️ I just earned the "Explorer" badge on Map Mystery! 7 day streak!'
    },
    {
      streak:  14,
      id:      'navigator',
      name:    'Navigator',
      emoji:   '🧭',
      message: 'Navigator badge! Two solid weeks! 🧭',
      shareText: '🧭 14 day streak on Map Mystery! Navigator badge unlocked!'
    },
    {
      streak:  30,
      id:      'cartographer',
      name:    'Cartographer',
      emoji:   '🗺️',
      message: 'CARTOGRAPHER! One whole month! Unreal! 🗺️',
      shareText: '🗺️ 30 day streak on Map Mystery! Cartographer badge earned!'
    },
    {
      streak:  50,
      id:      'geographer',
      name:    'Geographer',
      emoji:   '🌐',
      message: '50 days! You\'re basically a geographer now! 🌐',
      shareText: '🌐 50 day streak on Map Mystery! Geographer badge!'
    },
    {
      streak:  100,
      id:      'globe_master',
      name:    'Globe Master',
      emoji:   '🌍',
      message: '100 DAYS! You are the Globe Master! 🌍',
      shareText: '🌍 100 day streak on Map Mystery! Globe Master badge unlocked!'
    },
    {
      streak:  200,
      id:      'world_champion',
      name:    'World Champion',
      emoji:   '🏆',
      message: '200 days! World Champion status achieved! 🏆',
      shareText: '🏆 200 day streak on Map Mystery! World Champion!'
    },
    {
      streak:  365,
      id:      'legend',
      name:    'Legend',
      emoji:   '🏆',
      message: 'ONE FULL YEAR! You are an absolute LEGEND! 🏆',
      shareText: '🏆 365 day streak on Map Mystery! I am a LEGEND!'
    }
  ];

  /**
   * Default streak data structure.
   */
  var DEFAULT_DATA = {
    current:        0,      // Current streak count
    best:           0,      // All-time best streak
    lastPlayedDate: null,   // "YYYY-MM-DD" of last played game
    lastWonDate:    null,   // "YYYY-MM-DD" of last won game
    totalWins:      0,      // All-time wins
    totalGames:     0,      // All-time games played
    badges:         [],     // Array of earned badge IDs
    newBadge:       null    // Most recently earned badge (cleared after display)
  };


  // ═══════════════════════════════════════════════
  // DATE HELPER
  // ═══════════════════════════════════════════════

  /**
   * Get today's date as "YYYY-MM-DD" string in UTC.
   * Mirrors the same function in state.js (kept local to avoid dep).
   */
  function getTodayUTC() {
    var now   = new Date();
    var year  = now.getUTCFullYear();
    var month = String(now.getUTCMonth() + 1).padStart(2, '0');
    var day   = String(now.getUTCDate()).padStart(2, '0');
    return year + '-' + month + '-' + day;
  }

  /**
   * Get yesterday's date as "YYYY-MM-DD" string in UTC.
   */
  function getYesterdayUTC() {
    var now = new Date();
    var yesterday = new Date(Date.UTC(
      now.getUTCFullYear(),
      now.getUTCMonth(),
      now.getUTCDate() - 1
    ));
    var year  = yesterday.getUTCFullYear();
    var month = String(yesterday.getUTCMonth() + 1).padStart(2, '0');
    var day   = String(yesterday.getUTCDate()).padStart(2, '0');
    return year + '-' + month + '-' + day;
  }

  /**
   * Check if two date strings are consecutive days.
   * @param {string} dateA "YYYY-MM-DD"
   * @param {string} dateB "YYYY-MM-DD"
   * @returns {boolean} true if dateB is the day after dateA
   */
  function isConsecutiveDay(dateA, dateB) {
    if (!dateA || !dateB) return false;
    var a = new Date(dateA + 'T00:00:00Z');
    var b = new Date(dateB + 'T00:00:00Z');
    var diffMs   = b.getTime() - a.getTime();
    var diffDays = Math.round(diffMs / 86400000);
    return diffDays === 1;
  }


  // ═══════════════════════════════════════════════
  // LOCALSTORAGE HELPERS
  // ═══════════════════════════════════════════════

  function lsGet(key) {
    try {
      var raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : null;
    } catch (e) {
      console.warn('[streak.js] Read error:', e);
      return null;
    }
  }

  function lsSet(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      console.warn('[streak.js] Write error:', e);
    }
  }


  // ═══════════════════════════════════════════════
  // STREAK MANAGER — exported to window
  // ═══════════════════════════════════════════════

  window.StreakManager = {

    /**
     * Current streak data.
     * Read by: ui.js → updateStreakDisplay()
     * Read by: share.js → generateShareText()
     * Read by: app.js → handleGameEnd()
     */
    data: JSON.parse(JSON.stringify(DEFAULT_DATA)),


    // ═══════════════════════════════════════════
    // 1. LOAD
    // Called by: app.js → init()
    // ═══════════════════════════════════════════

    /**
     * Load streak data from localStorage.
     * Merges with defaults to handle missing keys.
     * Also validates streak hasn't broken due to missed day.
     *
     * @returns {void}
     */
    load: function () {
      var saved = lsGet(LS_KEY);

      if (!saved) {
        // No saved data — fresh start
        this.data = JSON.parse(JSON.stringify(DEFAULT_DATA));
        console.log('[streak.js] No saved streak, starting fresh');
        return;
      }

      // Merge with defaults
      var data = JSON.parse(JSON.stringify(DEFAULT_DATA));
      for (var key in saved) {
        if (saved.hasOwnProperty(key)) {
          data[key] = saved[key];
        }
      }

      // Ensure badges is an array
      if (!Array.isArray(data.badges)) {
        data.badges = [];
      }

      this.data = data;

      // Validate streak integrity
      // If last played was not today or yesterday, streak is broken
      var today     = getTodayUTC();
      var yesterday = getYesterdayUTC();
      var lastPlayed = this.data.lastPlayedDate;

      if (lastPlayed &&
          lastPlayed !== today &&
          lastPlayed !== yesterday) {
        // Streak is broken — missed at least one day
        console.log('[streak.js] Streak broken! Last played:', lastPlayed);
        this.data.current = 0;
        this.save();
      }

      console.log(
        '[streak.js] Loaded streak:', this.data.current,
        '| Best:', this.data.best,
        '| Badges:', this.data.badges.length
      );
    },


    // ═══════════════════════════════════════════
    // 2. SAVE
    // Called by: update(), internally
    // ═══════════════════════════════════════════

    /**
     * Persist current streak data to localStorage.
     *
     * @returns {void}
     */
    save: function () {
      lsSet(LS_KEY, this.data);
    },


    // ═══════════════════════════════════════════
    // 3. UPDATE (after game ends)
    // Called by: app.js → handleGameEnd()
    // ═══════════════════════════════════════════

    /**
     * Update streak after a game ends.
     * Handles win/lose, consecutive day check, badge unlocks.
     *
     * @param {boolean} won - Whether player won today
     * @returns {object} {
     *   newBadge:    object|null  — newly earned badge or null
     *   streakBroke: boolean      — true if streak reset to 0
     *   newStreak:   number       — current streak after update
     *   isNewBest:   boolean      — true if new best streak set
     * }
     *
     * Called by: app.js → handleGameEnd()
     */
    update: function (won) {
      var today     = getTodayUTC();
      var yesterday = getYesterdayUTC();
      var lastPlayed = this.data.lastPlayedDate;

      // Prevent double-counting same day
      if (lastPlayed === today) {
        console.log('[streak.js] Already updated today, skipping');
        return {
          newBadge:    null,
          streakBroke: false,
          newStreak:   this.data.current,
          isNewBest:   false
        };
      }

      // Update play count
      this.data.totalGames++;

      var streakBroke = false;
      var isNewBest   = false;
      var newBadge    = null;

      if (won) {
        this.data.totalWins++;
        this.data.lastWonDate = today;

        // Check if streak continues
        if (!lastPlayed) {
          // First ever win — start streak
          this.data.current = 1;
        } else if (lastPlayed === yesterday) {
          // Played yesterday — streak continues
          this.data.current++;
        } else {
          // Missed a day — restart streak at 1
          this.data.current = 1;
          streakBroke = (lastPlayed !== null);
        }

        // Update best
        if (this.data.current > this.data.best) {
          this.data.best = this.data.current;
          isNewBest = true;
        }

        // Check for new badge
        newBadge = this._checkAndAwardBadge();

      } else {
        // Lost — streak resets to 0
        if (this.data.current > 0) {
          streakBroke = true;
        }
        this.data.current = 0;
      }

      // Update last played date
      this.data.lastPlayedDate = today;

      // Store new badge for UI to display
      this.data.newBadge = newBadge ? newBadge.id : null;

      // Save
      this.save();

      console.log(
        '[streak.js] Updated:',
        won ? 'WON' : 'LOST',
        '| Streak:', this.data.current,
        '| Best:', this.data.best,
        '| New badge:', newBadge ? newBadge.name : 'none'
      );

      return {
        newBadge:    newBadge,
        streakBroke: streakBroke,
        newStreak:   this.data.current,
        isNewBest:   isNewBest
      };
    },


    // ═══════════════════════════════════════════
    // 4. CHECK AND AWARD BADGE (internal)
    // Called by: update()
    // ═══════════════════════════════════════════

    /**
     * Check if current streak qualifies for a new badge.
     * Awards the badge if not already earned.
     *
     * @returns {object|null} Badge object or null
     */
    _checkAndAwardBadge: function () {
      var current = this.data.current;
      var earned  = this.data.badges;
      var newBadge = null;

      // Check milestones in reverse (highest first)
      // so we award the highest applicable badge
      for (var i = MILESTONES.length - 1; i >= 0; i--) {
        var milestone = MILESTONES[i];

        if (current >= milestone.streak &&
            earned.indexOf(milestone.id) === -1) {
          // New badge earned
          this.data.badges.push(milestone.id);
          newBadge = milestone;

          console.log('[streak.js] New badge earned:', milestone.name);
          break; // Only award one badge at a time
        }
      }

      return newBadge;
    },


    // ═══════════════════════════════════════════
    // 5. GET BADGE NAME
    // Called by: ui.js, i18n.js
    // ═══════════════════════════════════════════

    /**
     * Get badge name for a given streak count.
     * Returns the highest applicable badge name.
     *
     * @param {number} streak - Streak count
     * @returns {string} Badge name (e.g. "Explorer 🗺️")
     *
     * Used by: i18n.js t('streak_{n}') fallback
     */
    getBadgeName: function (streak) {
      var result = '';

      for (var i = 0; i < MILESTONES.length; i++) {
        if (streak >= MILESTONES[i].streak) {
          result = MILESTONES[i].name + ' ' + MILESTONES[i].emoji;
        }
      }

      return result || (streak + ' day streak 🔥');
    },


    // ═══════════════════════════════════════════
    // 6. GET CURRENT MILESTONE
    // ═══════════════════════════════════════════

    /**
     * Get the current highest earned milestone.
     *
     * @returns {object|null} Milestone object or null
     */
    getCurrentMilestone: function () {
      var current = this.data.current;
      var result  = null;

      for (var i = 0; i < MILESTONES.length; i++) {
        if (current >= MILESTONES[i].streak) {
          result = MILESTONES[i];
        }
      }

      return result;
    },


    // ═══════════════════════════════════════════
    // 7. GET NEXT MILESTONE
    // ═══════════════════════════════════════════

    /**
     * Get the next milestone the user is working toward.
     *
     * @returns {object|null} Next milestone or null if max reached
     */
    getNextMilestone: function () {
      var current = this.data.current;

      for (var i = 0; i < MILESTONES.length; i++) {
        if (current < MILESTONES[i].streak) {
          return MILESTONES[i];
        }
      }

      return null; // Max milestone reached
    },


    // ═══════════════════════════════════════════
    // 8. CHECK MILESTONE (public)
    // Called by: app.js → handleGameEnd()
    // ═══════════════════════════════════════════

    /**
     * Check if there's a pending new milestone to show.
     * Called after update() to get display data.
     *
     * @returns {object|null} Milestone to display, or null
     *
     * Used by: app.js → show badge toast
     */
    checkMilestone: function () {
      if (!this.data.newBadge) return null;

      // Find the badge object
      var badgeId = this.data.newBadge;

      for (var i = 0; i < MILESTONES.length; i++) {
        if (MILESTONES[i].id === badgeId) {
          // Clear the pending badge
          this.data.newBadge = null;
          this.save();
          return MILESTONES[i];
        }
      }

      return null;
    },


    // ═══════════════════════════════════════════
    // 9. GET SHAREABLE BADGE
    // Called by: share.js, result.html
    // ═══════════════════════════════════════════

    /**
     * Get share text for the user's current badge.
     *
     * @returns {string} Badge share text
     *
     * Used by: share.js → generateShareText()
     */
    getShareableBadge: function () {
      var milestone = this.getCurrentMilestone();
      if (!milestone) return '';
      return milestone.shareText || '';
    },


    // ═══════════════════════════════════════════
    // 10. GET ALL BADGES
    // ═══════════════════════════════════════════

    /**
     * Get all earned badges with full details.
     *
     * @returns {Array} Array of earned milestone objects
     */
    getAllBadges: function () {
      var earned   = this.data.badges;
      var result   = [];

      for (var i = 0; i < MILESTONES.length; i++) {
        if (earned.indexOf(MILESTONES[i].id) !== -1) {
          result.push(MILESTONES[i]);
        }
      }

      return result;
    },


    // ═══════════════════════════════════════════
    // 11. GET PROGRESS TO NEXT BADGE
    // ═══════════════════════════════════════════

    /**
     * Get progress toward next badge as percentage.
     *
     * @returns {object} {
     *   current:  number  — current streak
     *   needed:   number  — streak needed for next badge
     *   percent:  number  — 0-100
     *   next:     object  — next milestone
     *   daysLeft: number  — days until next badge
     * }
     */
    getProgressToNext: function () {
      var current = this.data.current;
      var next    = this.getNextMilestone();

      if (!next) {
        return {
          current:  current,
          needed:   365,
          percent:  100,
          next:     null,
          daysLeft: 0
        };
      }

      // Find previous milestone as the start of this range
      var prevThreshold = 0;
      for (var i = 0; i < MILESTONES.length; i++) {
        if (MILESTONES[i].streak < next.streak) {
          prevThreshold = MILESTONES[i].streak;
        }
      }

      var range    = next.streak - prevThreshold;
      var progress = current - prevThreshold;
      var percent  = Math.round((progress / range) * 100);
      var daysLeft = next.streak - current;

      return {
        current:  current,
        needed:   next.streak,
        percent:  Math.max(0, Math.min(100, percent)),
        next:     next,
        daysLeft: daysLeft
      };
    },


    // ═══════════════════════════════════════════
    // 12. RESET (for testing only)
    // ═══════════════════════════════════════════

    /**
     * Reset all streak data.
     * ONLY for testing — not exposed in production UI.
     *
     * @returns {void}
     */
    _reset: function () {
      this.data = JSON.parse(JSON.stringify(DEFAULT_DATA));
      this.save();
      console.log('[streak.js] Streak data reset');
    },


    // ═══════════════════════════════════════════
    // 13. GET STATS SUMMARY
    // ═══════════════════════════════════════════

    /**
     * Get a summary object for display in UI.
     *
     * @returns {object} Summary for sidebar/result display
     */
    getSummary: function () {
      var next = this.getProgressToNext();

      return {
        current:      this.data.current,
        best:         this.data.best,
        totalWins:    this.data.totalWins,
        totalGames:   this.data.totalGames,
        winRate:      this.data.totalGames > 0
                        ? Math.round((this.data.totalWins / this.data.totalGames) * 100)
                        : 0,
        badges:       this.getAllBadges(),
        badgeCount:   this.data.badges.length,
        nextBadge:    next.next,
        daysToNext:   next.daysLeft,
        progressPct:  next.percent,
        currentBadge: this.getCurrentMilestone()
      };
    }

  }; // end StreakManager


  // ═══════════════════════════════════════════════
  // BADGE TOAST HELPER
  // ═══════════════════════════════════════════════

  /**
   * Show an animated badge unlock toast.
   * Called by app.js after update() returns a new badge.
   *
   * @param {object} badge - Milestone object
   * @returns {void}
   *
   * Called by: app.js → handleGameEnd()
   */
  window.showBadgeToast = function (badge) {
    if (!badge || !window.UIController) return;

    // First toast: badge name
    setTimeout(function () {
      window.UIController.showToast(
        badge.emoji + ' ' + badge.message,
        'success',
        5000
      );
    }, 1000);

    // Glow the streak badge in header
    var streakBadge = document.getElementById('streak-display');
    if (streakBadge) {
      setTimeout(function () {
        streakBadge.classList.add('streak-glow', 'badge-reveal');

        setTimeout(function () {
          streakBadge.classList.remove('badge-reveal');
        }, 1000);
      }, 800);
    }
  };


  console.log('[streak.js] Streak Manager loaded');

})();
