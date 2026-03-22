/**
 * GEOTOPIA TEENS ZONE - Leaderboard System
 * Manages local leaderboards for all games
 */

const TeensLeaderboard = {
    NAMESPACE: 'teens_',
    MAX_ENTRIES: 100,
    
    // Get leaderboard for a specific game
    getLeaderboard(gameId, limit = 10) {
        const key = `${this.NAMESPACE}leaderboard_${gameId}`;
        const data = JSON.parse(localStorage.getItem(key) || '[]');
        return data.slice(0, limit);
    },
    
    // Add a score to the leaderboard
    addScore(gameId, score, playerName = 'You') {
        const key = `${this.NAMESPACE}leaderboard_${gameId}`;
        const data = JSON.parse(localStorage.getItem(key) || '[]');
        
        const entry = {
            id: Date.now(),
            name: playerName,
            score: score,
            date: new Date().toISOString(),
            isPlayer: true
        };
        
        data.push(entry);
        
        // Sort by score descending
        data.sort((a, b) => b.score - a.score);
        
        // Keep only top entries
        const trimmed = data.slice(0, this.MAX_ENTRIES);
        
        localStorage.setItem(key, JSON.stringify(trimmed));
        
        // Return rank (1-indexed)
        return trimmed.findIndex(e => e.id === entry.id) + 1;
    },
    
    // Get player's best score for a game
    getPlayerBest(gameId) {
        const data = this.getLeaderboard(gameId, this.MAX_ENTRIES);
        const playerScores = data.filter(e => e.isPlayer);
        return playerScores.length > 0 ? playerScores[0].score : 0;
    },
    
    // Get player's rank for a game
    getPlayerRank(gameId) {
        const data = this.getLeaderboard(gameId, this.MAX_ENTRIES);
        const index = data.findIndex(e => e.isPlayer);
        return index >= 0 ? index + 1 : null;
    },
    
    // Get global leaderboard (combined from all games)
    getGlobalLeaderboard(limit = 10) {
        const allGames = [
            'flags-quiz', 'speed-round', 'capitals', 'memory',
            'trivia', 'landmarks', 'capital-match', 'word-master',
            'time-zone', 'distance-guess', 'climate-match', 'map-click'
        ];
        
        let allScores = [];
        
        allGames.forEach(gameId => {
            const scores = this.getLeaderboard(gameId, 10);
            scores.forEach(s => {
                allScores.push({
                    ...s,
                    game: gameId
                });
            });
        });
        
        // Aggregate by player
        const playerTotals = {};
        allScores.forEach(s => {
            const key = s.isPlayer ? 'You' : s.name;
            if (!playerTotals[key]) {
                playerTotals[key] = {
                    name: key,
                    totalScore: 0,
                    gamesPlayed: 0,
                    isPlayer: s.isPlayer
                };
            }
            playerTotals[key].totalScore += s.score;
            playerTotals[key].gamesPlayed++;
        });
        
        return Object.values(playerTotals)
            .sort((a, b) => b.totalScore - a.totalScore)
            .slice(0, limit);
    },
    
    // Clear leaderboard for a game
    clearLeaderboard(gameId) {
        const key = `${this.NAMESPACE}leaderboard_${gameId}`;
        localStorage.removeItem(key);
    },
    
    // Clear all leaderboards
    clearAllLeaderboards() {
        const allGames = [
            'flags-quiz', 'speed-round', 'capitals', 'memory',
            'trivia', 'landmarks', 'capital-match', 'word-master',
            'time-zone', 'distance-guess', 'climate-match', 'map-click'
        ];
        
        allGames.forEach(gameId => this.clearLeaderboard(gameId));
    }
};

window.TeensLeaderboard = TeensLeaderboard;
