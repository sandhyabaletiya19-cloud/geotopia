/**
 * TreasureRunEngine - Treasure Hunt / Temple Run Style Game Engine
 * For Geotopia App
 * 
 * Grid-based treasure collection game with obstacle avoidance
 * Supports multiple levels with configurable layouts
 */

const TreasureRunEngine = (function() {
    
    // Private game state
    let state = {
        gridSize: { rows: 5, cols: 5 },
        playerPosition: { x: 0, y: 0 },
        playerStartPosition: { x: 0, y: 0 },
        treasurePositions: [],
        collectedTreasures: new Set(),
        obstacles: new Set(),
        currentLevel: 1,
        levels: [],
        isGameOver: false,
        isLevelComplete: false,
        totalMoves: 0,
        score: 0
    };

    // Direction vectors for movement
    const DIRECTIONS = {
        up:    { dx: 0,  dy: -1 },
        down:  { dx: 0,  dy: 1  },
        left:  { dx: -1, dy: 0  },
        right: { dx: 1,  dy: 0  }
    };

    // Default levels for quick start
    const DEFAULT_LEVELS = [
        {
            gridSize: { rows: 5, cols: 5 },
            playerStart: { x: 0, y: 0 },
            treasurePositions: [
                { x: 2, y: 1 },
                { x: 4, y: 2 },
                { x: 1, y: 4 }
            ],
            obstacles: [
                { x: 1, y: 1 },
                { x: 3, y: 2 },
                { x: 2, y: 3 }
            ]
        },
        {
            gridSize: { rows: 6, cols: 6 },
            playerStart: { x: 0, y: 0 },
            treasurePositions: [
                { x: 2, y: 2 },
                { x: 5, y: 1 },
                { x: 3, y: 4 },
                { x: 5, y: 5 }
            ],
            obstacles: [
                { x: 1, y: 1 },
                { x: 2, y: 1 },
                { x: 4, y: 3 },
                { x: 3, y: 3 },
                { x: 1, y: 4 }
            ]
        },
        {
            gridSize: { rows: 7, cols: 7 },
            playerStart: { x: 0, y: 0 },
            treasurePositions: [
                { x: 3, y: 1 },
                { x: 6, y: 2 },
                { x: 1, y: 5 },
                { x: 4, y: 4 },
                { x: 6, y: 6 }
            ],
            obstacles: [
                { x: 1, y: 1 },
                { x: 2, y: 2 },
                { x: 4, y: 2 },
                { x: 5, y: 3 },
                { x: 2, y: 4 },
                { x: 3, y: 5 },
                { x: 5, y: 5 }
            ]
        },
        {
            gridSize: { rows: 8, cols: 8 },
            playerStart: { x: 0, y: 0 },
            treasurePositions: [
                { x: 2, y: 0 },
                { x: 7, y: 1 },
                { x: 4, y: 3 },
                { x: 1, y: 5 },
                { x: 6, y: 5 },
                { x: 7, y: 7 }
            ],
            obstacles: [
                { x: 1, y: 1 },
                { x: 3, y: 1 },
                { x: 5, y: 2 },
                { x: 2, y: 3 },
                { x: 6, y: 3 },
                { x: 3, y: 4 },
                { x: 5, y: 4 },
                { x: 4, y: 6 },
                { x: 2, y: 7 }
            ]
        },
        {
            gridSize: { rows: 9, cols: 9 },
            playerStart: { x: 0, y: 4 },
            treasurePositions: [
                { x: 4, y: 0 },
                { x: 8, y: 2 },
                { x: 2, y: 4 },
                { x: 6, y: 4 },
                { x: 4, y: 6 },
                { x: 0, y: 8 },
                { x: 8, y: 8 }
            ],
            obstacles: [
                { x: 2, y: 1 },
                { x: 6, y: 1 },
                { x: 4, y: 2 },
                { x: 1, y: 3 },
                { x: 7, y: 3 },
                { x: 3, y: 4 },
                { x: 5, y: 4 },
                { x: 1, y: 5 },
                { x: 7, y: 5 },
                { x: 4, y: 7 },
                { x: 2, y: 8 },
                { x: 6, y: 8 }
            ]
        }
    ];

    // Create unique key for coordinate lookup
    function posKey(x, y) {
        return `${x},${y}`;
    }

    // Parse position key back to coordinates
    function parseKey(key) {
        const [x, y] = key.split(',').map(Number);
        return { x, y };
    }

    // Check if position is within grid bounds
    function isWithinBounds(x, y) {
        return x >= 0 && x < state.gridSize.cols && 
               y >= 0 && y < state.gridSize.rows;
    }

    // Check if position has an obstacle
    function hasObstacle(x, y) {
        return state.obstacles.has(posKey(x, y));
    }

    // Check if position has uncollected treasure
    function hasUnclaimedTreasure(x, y) {
        const key = posKey(x, y);
        return state.treasurePositions.some(t => posKey(t.x, t.y) === key) &&
               !state.collectedTreasures.has(key);
    }

    // Load level configuration into state
    function loadLevel(levelIndex) {
        const levelConfig = state.levels[levelIndex - 1];
        
        if (!levelConfig) {
            return false;
        }

        state.gridSize = { ...levelConfig.gridSize };
        state.playerStartPosition = { ...levelConfig.playerStart };
        state.playerPosition = { ...levelConfig.playerStart };
        state.treasurePositions = levelConfig.treasurePositions.map(t => ({ ...t }));
        
        // Convert obstacles array to Set for O(1) lookup
        state.obstacles = new Set(
            levelConfig.obstacles.map(o => posKey(o.x, o.y))
        );
        
        state.collectedTreasures = new Set();
        state.currentLevel = levelIndex;
        state.isGameOver = false;
        state.isLevelComplete = false;
        state.totalMoves = 0;

        return true;
    }

    // Calculate score based on performance
    function calculateLevelScore() {
        const treasurePoints = state.collectedTreasures.size * 100;
        const moveBonus = Math.max(0, 500 - state.totalMoves * 5);
        const levelBonus = state.currentLevel * 50;
        return treasurePoints + moveBonus + levelBonus;
    }

    // Deep clone an object
    function deepClone(obj) {
        return JSON.parse(JSON.stringify(obj));
    }

    // Public API
    return {
        
        /**
         * Initialize the game with configuration options
         * @param {Object} options - Game configuration
         * @param {Object} options.gridSize - { rows, cols } for single level init
         * @param {Array} options.treasurePositions - Array of {x, y} coordinates
         * @param {Array} options.obstacles - Array of {x, y} coordinates
         * @param {Object} options.playerStart - Starting position {x, y}
         * @param {Array} options.levels - Array of level configurations
         * @param {number} options.startLevel - Level to start from (default: 1)
         * @returns {Object} Initialization result
         */
        initGame(options = {}) {
            // Determine level source
            if (options.levels && options.levels.length > 0) {
                state.levels = deepClone(options.levels);
            } else if (options.gridSize) {
                // Single level from direct options
                state.levels = [{
                    gridSize: options.gridSize,
                    playerStart: options.playerStart || { x: 0, y: 0 },
                    treasurePositions: options.treasurePositions || [],
                    obstacles: options.obstacles || []
                }];
            } else {
                state.levels = deepClone(DEFAULT_LEVELS);
            }

            state.score = 0;
            const startLevel = options.startLevel || 1;
            
            const success = loadLevel(startLevel);
            
            return {
                success,
                level: state.currentLevel,
                gridSize: { ...state.gridSize },
                playerPosition: { ...state.playerPosition },
                totalTreasures: state.treasurePositions.length,
                totalLevels: state.levels.length,
                message: success ? 'Game initialized successfully' : 'Failed to load level'
            };
        },

        /**
         * Move player in specified direction
         * @param {string} direction - 'up', 'down', 'left', 'right'
         * @returns {Object} Move result with updated game state
         */
        movePlayer(direction) {
            // Validate direction input
            if (!DIRECTIONS[direction]) {
                return {
                    success: false,
                    reason: 'invalid_direction',
                    playerPosition: { ...state.playerPosition },
                    treasuresCollected: state.collectedTreasures.size,
                    isLevelComplete: state.isLevelComplete,
                    isGameOver: state.isGameOver
                };
            }

            // Prevent moves after game over
            if (state.isGameOver) {
                return {
                    success: false,
                    reason: 'game_over',
                    playerPosition: { ...state.playerPosition },
                    treasuresCollected: state.collectedTreasures.size,
                    isLevelComplete: state.isLevelComplete,
                    isGameOver: true,
                    message: 'Game over! Reset or go to next level.'
                };
            }

            // Prevent moves after level complete
            if (state.isLevelComplete) {
                return {
                    success: false,
                    reason: 'level_complete',
                    playerPosition: { ...state.playerPosition },
                    treasuresCollected: state.collectedTreasures.size,
                    isLevelComplete: true,
                    isGameOver: false,
                    message: 'Level complete! Proceed to next level.'
                };
            }

            const { dx, dy } = DIRECTIONS[direction];
            const newX = state.playerPosition.x + dx;
            const newY = state.playerPosition.y + dy;

            // Boundary check
            if (!isWithinBounds(newX, newY)) {
                return {
                    success: false,
                    reason: 'out_of_bounds',
                    playerPosition: { ...state.playerPosition },
                    treasuresCollected: state.collectedTreasures.size,
                    isLevelComplete: false,
                    isGameOver: false
                };
            }

            // Obstacle collision - triggers game over
            if (hasObstacle(newX, newY)) {
                state.isGameOver = true;
                return {
                    success: false,
                    reason: 'collision',
                    playerPosition: { ...state.playerPosition },
                    collisionPosition: { x: newX, y: newY },
                    treasuresCollected: state.collectedTreasures.size,
                    isLevelComplete: false,
                    isGameOver: true,
                    message: 'Hit an obstacle! Game over.'
                };
            }

            // Valid move - update player position
            state.playerPosition.x = newX;
            state.playerPosition.y = newY;
            state.totalMoves++;

            // Check for treasure at new position
            let treasureFound = false;
            if (hasUnclaimedTreasure(newX, newY)) {
                state.collectedTreasures.add(posKey(newX, newY));
                treasureFound = true;
            }

            // Check if all treasures collected
            const isComplete = state.collectedTreasures.size === state.treasurePositions.length;
            if (isComplete) {
                state.isLevelComplete = true;
                state.score += calculateLevelScore();
            }

            return {
                success: true,
                playerPosition: { ...state.playerPosition },
                treasuresCollected: state.collectedTreasures.size,
                totalTreasures: state.treasurePositions.length,
                treasureFound,
                isLevelComplete: isComplete,
                isGameOver: false,
                totalMoves: state.totalMoves,
                score: state.score,
                message: treasureFound ? 'Treasure collected!' : null
            };
        },

        /**
         * Reset current level to initial state
         * @returns {Object} Reset confirmation with initial state
         */
        resetGame() {
            const levelBeforeReset = state.currentLevel;
            loadLevel(state.currentLevel);
            
            return {
                success: true,
                playerPosition: { ...state.playerPosition },
                treasuresCollected: 0,
                totalTreasures: state.treasurePositions.length,
                level: state.currentLevel,
                isGameOver: false,
                isLevelComplete: false,
                message: `Level ${levelBeforeReset} reset`
            };
        },

        /**
         * Advance to the next level
         * @returns {Object} Next level info or game completion status
         */
        nextLevel() {
            const nextLevelIndex = state.currentLevel + 1;
            
            // Check if more levels exist
            if (nextLevelIndex > state.levels.length) {
                return {
                    success: false,
                    reason: 'no_more_levels',
                    isGameComplete: true,
                    finalScore: state.score,
                    levelsCompleted: state.currentLevel,
                    totalLevels: state.levels.length,
                    message: 'Congratulations! All levels completed!'
                };
            }

            const success = loadLevel(nextLevelIndex);
            
            return {
                success,
                level: state.currentLevel,
                gridSize: { ...state.gridSize },
                playerPosition: { ...state.playerPosition },
                totalTreasures: state.treasurePositions.length,
                totalLevels: state.levels.length,
                score: state.score,
                message: `Level ${state.currentLevel} loaded`
            };
        },

        /**
         * Get complete current game state
         * @returns {Object} Full game state snapshot
         */
        getState() {
            // Convert Sets back to arrays for external use
            const collectedArray = Array.from(state.collectedTreasures).map(parseKey);
            const obstaclesArray = Array.from(state.obstacles).map(parseKey);
            
            // Calculate remaining treasures
            const remainingTreasures = state.treasurePositions.filter(
                t => !state.collectedTreasures.has(posKey(t.x, t.y))
            );

            return {
                gridSize: { ...state.gridSize },
                playerPosition: { ...state.playerPosition },
                playerStart: { ...state.playerStartPosition },
                treasuresCollected: collectedArray,
                treasuresRemaining: remainingTreasures,
                treasureCount: {
                    collected: collectedArray.length,
                    remaining: remainingTreasures.length,
                    total: state.treasurePositions.length
                },
                obstacles: obstaclesArray,
                level: state.currentLevel,
                totalLevels: state.levels.length,
                isGameOver: state.isGameOver,
                isLevelComplete: state.isLevelComplete,
                totalMoves: state.totalMoves,
                score: state.score
            };
        },

        /**
         * Get 2D grid representation for UI rendering
         * @returns {Array} 2D array of cell objects
         */
        getGrid() {
            const grid = [];
            
            for (let y = 0; y < state.gridSize.rows; y++) {
                const row = [];
                for (let x = 0; x < state.gridSize.cols; x++) {
                    let cellType = 'empty';
                    let isPlayerHere = state.playerPosition.x === x && state.playerPosition.y === y;
                    
                    if (hasObstacle(x, y)) {
                        cellType = 'obstacle';
                    } else if (hasUnclaimedTreasure(x, y)) {
                        cellType = 'treasure';
                    } else if (state.collectedTreasures.has(posKey(x, y))) {
                        cellType = 'collected';
                    }
                    
                    row.push({
                        x,
                        y,
                        type: cellType,
                        hasPlayer: isPlayerHere,
                        isStart: state.playerStartPosition.x === x && state.playerStartPosition.y === y
                    });
                }
                grid.push(row);
            }
            
            return grid;
        },

        /**
         * Check if a specific move is valid without executing it
         * @param {string} direction - Direction to check
         * @returns {Object} Move validity information
         */
        canMove(direction) {
            if (!DIRECTIONS[direction]) {
                return { valid: false, reason: 'invalid_direction' };
            }
            
            if (state.isGameOver || state.isLevelComplete) {
                return { valid: false, reason: 'game_inactive' };
            }

            const { dx, dy } = DIRECTIONS[direction];
            const newX = state.playerPosition.x + dx;
            const newY = state.playerPosition.y + dy;

            if (!isWithinBounds(newX, newY)) {
                return { valid: false, reason: 'out_of_bounds' };
            }

            if (hasObstacle(newX, newY)) {
                return { 
                    valid: true, 
                    dangerous: true, 
                    reason: 'obstacle_ahead',
                    targetPosition: { x: newX, y: newY }
                };
            }

            return {
                valid: true,
                dangerous: false,
                targetPosition: { x: newX, y: newY },
                hasTreasure: hasUnclaimedTreasure(newX, newY)
            };
        },

        /**
         * Get all available moves from current position
         * @returns {Object} Move availability for each direction
         */
        getAvailableMoves() {
            const moves = {};
            
            for (const direction of Object.keys(DIRECTIONS)) {
                moves[direction] = this.canMove(direction);
            }
            
            return moves;
        },

        /**
         * Add a custom level to the game
         * @param {Object} levelConfig - Level configuration
         * @returns {Object} Result with new level count
         */
        addLevel(levelConfig) {
            if (!levelConfig || !levelConfig.gridSize || !levelConfig.treasurePositions) {
                return { 
                    success: false, 
                    reason: 'invalid_level_config',
                    message: 'Level must have gridSize and treasurePositions'
                };
            }

            // Validate grid size
            if (levelConfig.gridSize.rows < 3 || levelConfig.gridSize.cols < 3) {
                return {
                    success: false,
                    reason: 'grid_too_small',
                    message: 'Grid must be at least 3x3'
                };
            }

            state.levels.push({
                gridSize: { ...levelConfig.gridSize },
                playerStart: levelConfig.playerStart || { x: 0, y: 0 },
                treasurePositions: deepClone(levelConfig.treasurePositions),
                obstacles: deepClone(levelConfig.obstacles || [])
            });

            return {
                success: true,
                totalLevels: state.levels.length,
                newLevelIndex: state.levels.length,
                message: `Level ${state.levels.length} added`
            };
        },

        /**
         * Load a specific level by index
         * @param {number} levelIndex - Level number (1-based)
         * @returns {Object} Level load result
         */
        loadSpecificLevel(levelIndex) {
            if (levelIndex < 1 || levelIndex > state.levels.length) {
                return {
                    success: false,
                    reason: 'invalid_level',
                    message: `Level must be between 1 and ${state.levels.length}`
                };
            }

            const success = loadLevel(levelIndex);
            
            return {
                success,
                level: state.currentLevel,
                gridSize: { ...state.gridSize },
                playerPosition: { ...state.playerPosition },
                totalTreasures: state.treasurePositions.length,
                message: success ? `Level ${levelIndex} loaded` : 'Failed to load level'
            };
        },

        /**
         * Generate a random level with specified parameters
         * @param {Object} config - Generation configuration
         * @returns {Object} Generated level configuration
         */
        generateRandomLevel(config = {}) {
            const rows = config.rows || 6;
            const cols = config.cols || 6;
            const treasureCount = Math.min(config.treasures || 3, Math.floor((rows * cols) / 4));
            const obstacleCount = Math.min(config.obstacles || 5, Math.floor((rows * cols) / 3));

            const treasures = [];
            const obstacles = [];
            const used = new Set();

            // Reserve start position
            const startPos = config.playerStart || { x: 0, y: 0 };
            used.add(posKey(startPos.x, startPos.y));

            // Generate treasure positions
            let attempts = 0;
            while (treasures.length < treasureCount && attempts < 100) {
                const x = Math.floor(Math.random() * cols);
                const y = Math.floor(Math.random() * rows);
                const key = posKey(x, y);

                if (!used.has(key)) {
                    used.add(key);
                    treasures.push({ x, y });
                }
                attempts++;
            }

            // Generate obstacle positions
            attempts = 0;
            while (obstacles.length < obstacleCount && attempts < 100) {
                const x = Math.floor(Math.random() * cols);
                const y = Math.floor(Math.random() * rows);
                const key = posKey(x, y);

                if (!used.has(key)) {
                    used.add(key);
                    obstacles.push({ x, y });
                }
                attempts++;
            }

            const level = {
                gridSize: { rows, cols },
                playerStart: startPos,
                treasurePositions: treasures,
                obstacles: obstacles
            };

            // Optionally add to game levels
            if (config.addToGame) {
                this.addLevel(level);
            }

            return level;
        },

        /**
         * Get hint for next best move towards nearest treasure
         * @returns {Object} Suggested move with reasoning
         */
        getHint() {
            if (state.isGameOver) {
                return { hint: null, reason: 'game_over' };
            }

            const remaining = state.treasurePositions.filter(
                t => !state.collectedTreasures.has(posKey(t.x, t.y))
            );

            if (remaining.length === 0) {
                return { hint: null, reason: 'no_treasures_left' };
            }

            // Find nearest treasure using Manhattan distance
            let nearest = remaining[0];
            let minDist = Math.abs(nearest.x - state.playerPosition.x) + 
                          Math.abs(nearest.y - state.playerPosition.y);

            for (const treasure of remaining) {
                const dist = Math.abs(treasure.x - state.playerPosition.x) + 
                             Math.abs(treasure.y - state.playerPosition.y);
                if (dist < minDist) {
                    minDist = dist;
                    nearest = treasure;
                }
            }

            // Determine suggested direction
            const dx = nearest.x - state.playerPosition.x;
            const dy = nearest.y - state.playerPosition.y;

            // Build priority list of directions
            const priorityMoves = [];
            
            if (dx > 0) priorityMoves.push({ dir: 'right', priority: Math.abs(dx) });
            if (dx < 0) priorityMoves.push({ dir: 'left', priority: Math.abs(dx) });
            if (dy > 0) priorityMoves.push({ dir: 'down', priority: Math.abs(dy) });
            if (dy < 0) priorityMoves.push({ dir: 'up', priority: Math.abs(dy) });

            // Sort by priority (larger distance component first)
            priorityMoves.sort((a, b) => b.priority - a.priority);

            // Find first safe move
            let suggestedMove = null;
            for (const move of priorityMoves) {
                const check = this.canMove(move.dir);
                if (check.valid && !check.dangerous) {
                    suggestedMove = move.dir;
                    break;
                }
            }

            // If no direct path is safe, try any safe move
            if (!suggestedMove) {
                for (const dir of ['up', 'down', 'left', 'right']) {
                    const check = this.canMove(dir);
                    if (check.valid && !check.dangerous) {
                        suggestedMove = dir;
                        break;
                    }
                }
            }

            return {
                hint: suggestedMove,
                targetTreasure: { ...nearest },
                distance: minDist,
                treasuresRemaining: remaining.length,
                message: suggestedMove ? `Try moving ${suggestedMove}` : 'No safe moves available'
            };
        },

        /**
         * Teleport player to specific position (for special modes)
         * @param {number} x - Target X coordinate
         * @param {number} y - Target Y coordinate
         * @returns {Object} Teleport result
         */
        setPlayerPosition(x, y) {
            if (!isWithinBounds(x, y)) {
                return { success: false, reason: 'out_of_bounds' };
            }

            if (hasObstacle(x, y)) {
                return { success: false, reason: 'obstacle_at_position' };
            }

            state.playerPosition = { x, y };

            // Auto-collect treasure at new position
            let treasureFound = false;
            if (hasUnclaimedTreasure(x, y)) {
                state.collectedTreasures.add(posKey(x, y));
                treasureFound = true;
            }

            // Check completion
            const isComplete = state.collectedTreasures.size === state.treasurePositions.length;
            if (isComplete && !state.isLevelComplete) {
                state.isLevelComplete = true;
                state.score += calculateLevelScore();
            }

            return {
                success: true,
                playerPosition: { ...state.playerPosition },
                treasuresCollected: state.collectedTreasures.size,
                treasureFound,
                isLevelComplete: isComplete
            };
        },

        /**
         * Get statistics for current game session
         * @returns {Object} Game statistics
         */
        getStats() {
            return {
                currentLevel: state.currentLevel,
                totalLevels: state.levels.length,
                totalMoves: state.totalMoves,
                score: state.score,
                treasuresCollected: state.collectedTreasures.size,
                totalTreasuresInLevel: state.treasurePositions.length,
                isGameOver: state.isGameOver,
                isLevelComplete: state.isLevelComplete,
                efficiency: state.totalMoves > 0 
                    ? Math.round((state.collectedTreasures.size / state.totalMoves) * 100) / 100 
                    : 0
            };
        },

        /**
         * Serialize game state for saving
         * @returns {string} JSON string of game state
         */
        serialize() {
            return JSON.stringify({
                levels: state.levels,
                currentLevel: state.currentLevel,
                playerPosition: state.playerPosition,
                collectedTreasures: Array.from(state.collectedTreasures),
                totalMoves: state.totalMoves,
                score: state.score,
                isGameOver: state.isGameOver,
                isLevelComplete: state.isLevelComplete
            });
        },

        /**
         * Restore game state from serialized data
         * @param {string} data - JSON string from serialize()
         * @returns {Object} Restore result
         */
        deserialize(data) {
            try {
                const saved = JSON.parse(data);
                
                state.levels = saved.levels;
                state.currentLevel = saved.currentLevel;
                state.score = saved.score;
                
                // Load level structure
                loadLevel(saved.currentLevel);
                
                // Restore progress within level
                state.playerPosition = saved.playerPosition;
                state.collectedTreasures = new Set(saved.collectedTreasures);
                state.totalMoves = saved.totalMoves;
                state.isGameOver = saved.isGameOver;
                state.isLevelComplete = saved.isLevelComplete;

                return {
                    success: true,
                    level: state.currentLevel,
                    message: 'Game restored successfully'
                };
            } catch (e) {
                return {
                    success: false,
                    reason: 'parse_error',
                    message: 'Failed to restore game data'
                };
            }
        },

        /**
         * Get path visualization data for debugging
         * @returns {Object} Path and cell type mapping
         */
        getDebugInfo() {
            const cellMap = {};
            
            for (let y = 0; y < state.gridSize.rows; y++) {
                for (let x = 0; x < state.gridSize.cols; x++) {
                    const key = posKey(x, y);
                    let symbol = '.';
                    
                    if (hasObstacle(x, y)) symbol = 'X';
                    else if (hasUnclaimedTreasure(x, y)) symbol = 'T';
                    else if (state.collectedTreasures.has(key)) symbol = 'c';
                    
                    if (state.playerPosition.x === x && state.playerPosition.y === y) {
                        symbol = 'P';
                    }
                    
                    cellMap[key] = symbol;
                }
            }

            // Generate ASCII grid
            let asciiGrid = '';
            for (let y = 0; y < state.gridSize.rows; y++) {
                for (let x = 0; x < state.gridSize.cols; x++) {
                    asciiGrid += cellMap[posKey(x, y)] + ' ';
                }
                asciiGrid += '\n';
            }

            return {
                cellMap,
                asciiGrid,
                legend: {
                    '.': 'empty',
                    'X': 'obstacle',
                    'T': 'treasure',
                    'c': 'collected',
                    'P': 'player'
                }
            };
        }
    };
})();

// Export for different module systems
if (typeof module !== 'undefined' && module.exports) {
    module.exports = TreasureRunEngine;
}

if (typeof window !== 'undefined') {
    window.TreasureRunEngine = TreasureRunEngine;
}
