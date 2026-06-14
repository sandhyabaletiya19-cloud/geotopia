/* ═══════════════════════════════════════════════════════════
   DHARAVERSE MAP MYSTERY — SHARE SYSTEM
   File: /games/daily-mystery/js/share.js
   
   DEPENDS ON: state.js (window.GameState)
   USED BY: app.js (wires #share-btn), result.html
   
   EXPORTS:
     window.generateEmojiGrid()  → string (emoji grid)
     window.generateShareText()  → string (full share text)
     window.shareResult()        → Promise (share or copy)
   
   EMOJI MAPPING:
     Distance correct  → 🟩
     Distance <200km   → 🟨
     Distance <1000km  → 🟧
     Distance 1000km+  → ⬜
     Continent exact   → 🟢
     Continent hemi    → 🟡
     Continent wrong   → 🔴
   ═══════════════════════════════════════════════════════════ */

(function () {
  'use strict';

  // ═══════════════════════════════════════════════
  // 1. EMOJI MAPPINGS
  // ═══════════════════════════════════════════════

  /**
   * Distance tier → emoji
   * Maps distanceFeedback.tier from logic.js
   */
  var DISTANCE_EMOJI = {
    win:      '🟩',  // Correct / 0km
    burning:  '🟨',  // < 200km
    hot:      '🟧',  // 200-500km
    warm:     '🟧',  // 500-1000km
    cold:     '⬜',  // 1000-3000km
    freezing: '⬜',  // 3000-8000km
    arctic:   '⬜'   // 8000km+
  };

  /**
   * Continent match → emoji
   * Maps continentMatch.match from logic.js
   */
  var CONTINENT_EMOJI = {
    exact:      '🟢',
    hemisphere: '🟡',
    wrong:      '🔴'
  };

  /**
   * Size comparison → emoji
   * Maps sizeComparison.type from logic.js
   */
  var SIZE_EMOJI = {
    same:    '🟩',
    bigger:  '🔼',
    smaller: '🔽'
  };

  /**
   * Direction → compact emoji for share grid
   */
  var DIRECTION_EMOJI = {
    '⬆️': '⬆️',
    '↗️': '↗️',
    '➡️': '➡️',
    '↘️': '↘️',
    '⬇️': '⬇️',
    '↙️': '↙️',
    '⬅️': '⬅️',
    '↖️': '↖️',
    '🎯': '🎯'
  };


  // ═══════════════════════════════════════════════
  // 2. GENERATE EMOJI GRID
  // ═══════════════════════════════════════════════

  /**
   * Build the emoji grid from all guesses.
   * Each row = one guess = 4 emojis:
   *   [distance] [direction] [continent] [size]
   *
   * @returns {string} Multi-line emoji string
   *
   * Example output:
   *   ⬜ ↘️ 🔴 🔼
   *   🟧 ➡️ 🟡 🔽
   *   🟨 ↗️ 🟢 🟩
   *   🟩 🎯 🟢 🟩 ✅
   *
   * Used by: generateShareText(), result.html
   */
  window.generateEmojiGrid = function () {
    var guesses = window.GameState ? window.GameState.guesses : [];

    if (!guesses || guesses.length === 0) {
      return '(no guesses)';
    }

    var lines = [];

    for (var i = 0; i < guesses.length; i++) {
      var g = guesses[i];
      var line = [];

      // Column 1: Distance emoji
      var distTier = g.distanceFeedback ? g.distanceFeedback.tier : 'arctic';
      line.push(DISTANCE_EMOJI[distTier] || '⬜');

      // Column 2: Direction arrow
      var arrow = g.arrow || '⬆️';
      line.push(DIRECTION_EMOJI[arrow] || arrow);

      // Column 3: Continent emoji
      var contMatch = g.continentMatch ? g.continentMatch.match : 'wrong';
      line.push(CONTINENT_EMOJI[contMatch] || '🔴');

      // Column 4: Size emoji
      var sizeType = g.sizeComparison ? g.sizeComparison.type : 'bigger';
      line.push(SIZE_EMOJI[sizeType] || '🔼');

      // Mark correct row
      if (g.isCorrect) {
        line.push('✅');
      }

      lines.push(line.join(' '));
    }

    return lines.join('\n');
  };


  // ═══════════════════════════════════════════════
  // 3. GENERATE FULL SHARE TEXT
  // ═══════════════════════════════════════════════

  /**
   * Build the complete share message.
   * WhatsApp-friendly, works in any text field.
   *
   * @returns {string} Full share text
   *
   * Example:
   *   🌍 Map Mystery #47
   *   3/6 🎯 (Beat 78% of players!)
   *
   *   ⬜ ↘️ 🔴 🔼
   *   🟧 ➡️ 🟡 🔽
   *   🟩 🎯 🟢 🟩 ✅
   *
   *   🤯 "India landed on Moon's south pole"
   *   🔥 7 day streak
   *   Play: dharaverse.com/games/daily-mystery
   *
   * Used by: shareResult()
   */
  window.generateShareText = function () {
    var state   = window.GameState;
    var i18n    = window.i18n;
    var streak  = window.StreakManager ? window.StreakManager.data : null;

    if (!state) return '';

    var dayNum    = state.dayNumber || 1;
    var guesses   = state.guesses || [];
    var status    = state.gameStatus;
    var numGuesses = guesses.length;

    // ── Line 1: Header ─────────────────────────
    var header = '🌍 Map Mystery #' + dayNum;

    // ── Line 2: Result ─────────────────────────
    var resultLine;
    if (status === 'won') {
      resultLine = numGuesses + '/6 🎯';

      // Beat X% of players — mock stat for now
      // In Phase 2, fetch real stats from Supabase
      var beatPct = _estimateBeatPercent(numGuesses);
      if (beatPct > 0) {
        resultLine += ' (Beat ' + beatPct + '% of players!)';
      }
    } else {
      resultLine = 'X/6 😅 (Didn\'t get it today)';
    }

    // ── Emoji grid ─────────────────────────────
    var grid = window.generateEmojiGrid();

    // ── News fact line ──────────────────────────
    var newsEl = document.getElementById('news-fact');
    var factText = '';
    if (newsEl) {
      var textEl = newsEl.querySelector('.news-text');
      if (textEl && textEl.textContent &&
          textEl.textContent !== 'Loading today\'s hint...' &&
          textEl.textContent !== 'Hint unavailable today') {
        factText = '🤯 "' + textEl.textContent.trim() + '"';
      }
    }

    // ── Streak line ─────────────────────────────
    var streakLine = '';
    if (streak && streak.current > 1) {
      streakLine = '🔥 ' + streak.current + ' day streak';
    }

    // ── Link ────────────────────────────────────
    var link = 'Play: dharaverse.com/games/daily-mystery';

    // ── Assemble ────────────────────────────────
    var parts = [header, resultLine, '', grid];

    if (factText) parts.push('', factText);
    if (streakLine) parts.push(streakLine);
    parts.push(link);

    return parts.join('\n');
  };


  // ═══════════════════════════════════════════════
  // 4. ESTIMATE "BEAT X% OF PLAYERS"
  // ═══════════════════════════════════════════════

  /**
   * Estimate what percentage of players the user beat.
   * Based on typical Wordle-style distributions.
   * In Phase 2, replace with real Supabase data.
   *
   * @param {number} guessCount - Number of guesses taken (1-6)
   * @returns {number} Percentage beaten (0-99)
   */
  function _estimateBeatPercent(guessCount) {
    // Estimated cumulative distribution of players
    // who take N or more guesses (the user beats these)
    var distribution = {
      1: 99,  // Got in 1 — beat 99%
      2: 92,  // Got in 2 — beat 92%
      3: 75,  // Got in 3 — beat 75%
      4: 52,  // Got in 4 — beat 52%
      5: 28,  // Got in 5 — beat 28%
      6: 8    // Got in 6 — beat 8%
    };

    return distribution[guessCount] || 0;
  }


  // ═══════════════════════════════════════════════
  // 5. SHARE RESULT (main export)
  // ═══════════════════════════════════════════════

  /**
   * Share the result using Web Share API,
   * falling back to clipboard copy.
   *
   * Flow:
   * 1. Generate share text
   * 2. Try navigator.share() (mobile native)
   * 3. Fallback: copy to clipboard
   * 4. Show toast with result
   *
   * @returns {Promise<void>}
   *
   * Called by: app.js → #share-btn click listener
   */
  window.shareResult = function () {
    var text = window.generateShareText();

    if (!text) {
      if (window.UIController) {
        window.UIController.showToast('Nothing to share yet!', 'info', 2000);
      }
      return Promise.resolve();
    }

    // ── Try Web Share API (mobile native) ───────
    if (navigator.share && _isMobileOrTablet()) {
      return navigator.share({
        title: 'Map Mystery — Dharaverse',
        text: text,
        url: 'https://dharaverse.com/games/daily-mystery'
      })
      .then(function () {
        if (window.UIController) {
          window.UIController.showToast(
            '✅ Shared! Tell your friends to play!',
            'success',
            3000
          );
        }
        _trackShare('native');
      })
      .catch(function (err) {
        // User cancelled share — not an error
        if (err.name === 'AbortError') return;
        // Fallback to clipboard
        return _copyToClipboard(text);
      });
    }

    // ── Clipboard fallback ───────────────────────
    return _copyToClipboard(text);
  };


  // ═══════════════════════════════════════════════
  // 6. COPY TO CLIPBOARD
  // ═══════════════════════════════════════════════

  /**
   * Copy text to clipboard.
   * Tries modern API first, falls back to execCommand.
   *
   * @param {string} text
   * @returns {Promise<void>}
   */
  function _copyToClipboard(text) {
    // Modern clipboard API
    if (navigator.clipboard && navigator.clipboard.writeText) {
      return navigator.clipboard.writeText(text)
        .then(function () {
          _showCopiedToast();
          _trackShare('clipboard');
        })
        .catch(function () {
          _fallbackCopy(text);
        });
    }

    // Fallback: execCommand
    _fallbackCopy(text);
    return Promise.resolve();
  }

  /**
   * Legacy clipboard copy using execCommand.
   * Works in older browsers and iOS Safari.
   *
   * @param {string} text
   */
  function _fallbackCopy(text) {
    var textarea = document.createElement('textarea');
    textarea.value = text;

    // Position off-screen
    textarea.style.position = 'fixed';
    textarea.style.top = '-9999px';
    textarea.style.left = '-9999px';
    textarea.style.opacity = '0';
    textarea.setAttribute('readonly', '');
    textarea.setAttribute('aria-hidden', 'true');

    document.body.appendChild(textarea);

    // iOS Safari requires special selection
    if (navigator.userAgent.match(/ipad|iphone/i)) {
      var range = document.createRange();
      range.selectNodeContents(textarea);
      var selection = window.getSelection();
      selection.removeAllRanges();
      selection.addRange(range);
      textarea.setSelectionRange(0, 999999);
    } else {
      textarea.select();
    }

    var success = false;
    try {
      success = document.execCommand('copy');
    } catch (e) {
      success = false;
    }

    document.body.removeChild(textarea);

    if (success) {
      _showCopiedToast();
      _trackShare('fallback');
    } else {
      // Last resort — show the text in a prompt
      _showSharePrompt(text);
    }
  }

  /**
   * Show share text in a prompt for manual copy.
   * Last resort when all clipboard methods fail.
   *
   * @param {string} text
   */
  function _showSharePrompt(text) {
    // Create a modal-style overlay with the text
    var overlay = document.createElement('div');
    overlay.style.cssText = [
      'position:fixed',
      'inset:0',
      'z-index:9999',
      'background:rgba(0,0,0,0.85)',
      'display:flex',
      'align-items:center',
      'justify-content:center',
      'padding:20px'
    ].join(';');

    var box = document.createElement('div');
    box.style.cssText = [
      'background:#12122a',
      'border:1px solid rgba(139,92,246,0.3)',
      'border-radius:16px',
      'padding:20px',
      'max-width:480px',
      'width:100%',
      'color:#fff',
      'font-family:Inter,sans-serif'
    ].join(';');

    var title = document.createElement('p');
    title.style.cssText = 'font-weight:700;margin-bottom:12px;font-size:14px';
    title.textContent = 'Copy this to share:';

    var textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.cssText = [
      'width:100%',
      'background:#0a0a1a',
      'border:1px solid rgba(139,92,246,0.3)',
      'border-radius:8px',
      'color:#fff',
      'font-family:monospace',
      'font-size:12px',
      'padding:12px',
      'height:160px',
      'resize:none',
      'margin-bottom:12px'
    ].join(';');
    textArea.setAttribute('readonly', '');

    var closeBtn = document.createElement('button');
    closeBtn.textContent = 'Close ✕';
    closeBtn.style.cssText = [
      'padding:10px 20px',
      'background:linear-gradient(135deg,#8B5CF6,#6D28D9)',
      'color:#fff',
      'border:none',
      'border-radius:8px',
      'font-weight:600',
      'cursor:pointer',
      'width:100%'
    ].join(';');

    closeBtn.addEventListener('click', function () {
      document.body.removeChild(overlay);
    });

    box.appendChild(title);
    box.appendChild(textArea);
    box.appendChild(closeBtn);
    overlay.appendChild(box);
    document.body.appendChild(overlay);

    // Auto-select the text
    setTimeout(function () {
      textArea.focus();
      textArea.select();
    }, 100);
  }


  // ═══════════════════════════════════════════════
  // 7. HELPER: Show copied toast
  // ═══════════════════════════════════════════════

  function _showCopiedToast() {
    var msg = window.i18n
      ? window.i18n.t('share_copied')
      : 'Copied to clipboard! 📋';

    if (window.UIController) {
      window.UIController.showToast(msg, 'success', 3000);
    }
  }


  // ═══════════════════════════════════════════════
  // 8. HELPER: Detect mobile/tablet
  // ═══════════════════════════════════════════════

  /**
   * Check if user is on mobile or tablet.
   * navigator.share works best on these.
   *
   * @returns {boolean}
   */
  function _isMobileOrTablet() {
    return (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i
        .test(navigator.userAgent) ||
      (navigator.maxTouchPoints && navigator.maxTouchPoints > 2)
    );
  }


  // ═══════════════════════════════════════════════
  // 9. HELPER: Track share event (analytics hook)
  // ═══════════════════════════════════════════════

  /**
   * Track share events.
   * Currently just logs — hook into analytics in Phase 2.
   *
   * @param {string} method - "native"|"clipboard"|"fallback"
   */
  function _trackShare(method) {
    console.log('[share.js] Shared via:', method);

    // Phase 2: Send to analytics
    // gtag('event', 'share', { method: method });
  }


  // ═══════════════════════════════════════════════
  // 10. GENERATE RESULT FOR result.html
  // ═══════════════════════════════════════════════

  /**
   * Get structured result data for result.html page.
   * result.html reads this after game ends.
   *
   * @returns {object} Result data
   * {
   *   dayNumber:    number
   *   won:          boolean
   *   numGuesses:   number
   *   emojiGrid:    string
   *   shareText:    string
   *   countryName:  string
   *   countryFlag:  string
   *   streakCount:  number
   *   beatPercent:  number
   * }
   *
   * Called by: result.html on page load
   */
  window.getResultData = function () {
    var state  = window.GameState;
    var streak = window.StreakManager ? window.StreakManager.data : null;

    if (!state) return null;

    var numGuesses = state.guesses.length;
    var won        = state.gameStatus === 'won';

    return {
      dayNumber:   state.dayNumber || 1,
      won:         won,
      numGuesses:  numGuesses,
      emojiGrid:   window.generateEmojiGrid(),
      shareText:   window.generateShareText(),
      countryName: state.todayAnswer ? state.todayAnswer.name : '',
      countryFlag: state.todayAnswer ? state.todayAnswer.flag : '',
      countryId:   state.todayAnswer ? state.todayAnswer.id : '',
      streakCount: streak ? streak.current : 0,
      beatPercent: won ? _estimateBeatPercent(numGuesses) : 0
    };
  };


  // ═══════════════════════════════════════════════
  // 11. WHATSAPP DIRECT SHARE (bonus)
  // ═══════════════════════════════════════════════

  /**
   * Open WhatsApp with pre-filled share text.
   * Works on mobile where WhatsApp is installed.
   *
   * @returns {void}
   *
   * Called by: result.html WhatsApp button (optional)
   */
  window.shareWhatsApp = function () {
    var text = window.generateShareText();
    var encoded = encodeURIComponent(text);
    var url = 'https://wa.me/?text=' + encoded;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  /**
   * Open Twitter/X with pre-filled share text.
   * Truncated to 280 chars.
   *
   * @returns {void}
   *
   * Called by: result.html Twitter button (optional)
   */
  window.shareTwitter = function () {
    var state  = window.GameState;
    var dayNum = state ? state.dayNumber : 1;
    var won    = state ? state.gameStatus === 'won' : false;
    var n      = state ? state.guesses.length : 0;

    var tweetText = '🌍 Map Mystery #' + dayNum + '\n';
    tweetText += won ? (n + '/6 🎯') : 'X/6 😅';
    tweetText += '\n\n' + window.generateEmojiGrid();
    tweetText += '\n\nPlay at dharaverse.com/games/daily-mystery';

    // Truncate to 280 chars
    if (tweetText.length > 280) {
      tweetText = tweetText.substring(0, 277) + '...';
    }

    var encoded = encodeURIComponent(tweetText);
    var url = 'https://twitter.com/intent/tweet?text=' + encoded;
    window.open(url, '_blank', 'noopener,noreferrer');
  };


  console.log('[share.js] Share system loaded');

})();
