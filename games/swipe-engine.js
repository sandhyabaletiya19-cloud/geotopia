/**
 * SwipeGameEngine - Fruit Ninja Style Swipe Game Engine
 * For Geotopia App
 * 
 * Handles object spawning, swipe detection, scoring, and game state
 * Designed for touch/swipe-based fruit cutting gameplay
 */

const SwipeGameEngine = (function() {
    
    // Private game state
    let state = {
        objects: [],
        score: 0,
        lives: 3,
        maxLives: 3,
        combo: 0,
        maxCombo: 0,
        totalCuts: 0,
        totalMissed: 0,
        totalBombsCut: 0,
        isGameOver: false,
        isPaused: false,
        gameTime: 0,
        lastSpawnTime: 0,
        spawnRate: 1200,
        gravity: 0.4,
        bombChance: 0.12,
        difficulty: 1,
        objectIdCounter: 0,
        objectTypes: [],
        canvas: { width: 400, height: 600 },
        spawnZones: [],
        activeEffects: [],
        streakBonus: 0
    };

    // Default fruit/object types with properties
    const DEFAULT_OBJECT_TYPES = [
        { 
            type: 'fruit', 
            name: 'apple', 
            points: 10, 
            color: '#e74c3c',
            radius: 35,
            weight: 1.0,
            rarity: 'common'
        },
        { 
            type: 'fruit', 
            name: 'orange', 
            points: 10, 
            color: '#f39c12',
            radius: 32,
            weight: 1.0,
            rarity: 'common'
        },
        { 
            type: 'fruit', 
            name: 'watermelon', 
            points: 15, 
            color: '#27ae60',
            radius: 45,
            weight: 1.2,
            rarity: 'common'
        },
        { 
            type: 'fruit', 
            name: 'banana', 
            points: 10, 
            color: '#f1c40f',
            radius: 30,
            weight: 0.8,
            rarity: 'common'
        },
        { 
            type: 'fruit', 
            name: 'pineapple', 
            points: 20, 
            color: '#d35400',
            radius: 40,
            weight: 1.3,
            rarity: 'uncommon'
        },
        { 
            type: 'fruit', 
            name: 'grape', 
            points: 25, 
            color: '#8e44ad',
            radius: 25,
            weight: 0.7,
            rarity: 'uncommon'
        },
        { 
            type: 'fruit', 
            name: 'coconut', 
            points: 30, 
            color: '#795548',
            radius: 38,
            weight: 1.5,
            rarity: 'rare'
        },
        { 
            type: 'fruit', 
            name: 'starfruit', 
            points: 50, 
            color: '#ffeb3b',
            radius: 35,
            weight: 0.9,
            rarity: 'rare'
        },
        { 
            type: 'bomb', 
            name: 'bomb', 
            points: -100, 
            color: '#2c3e50',
            radius: 35,
            weight: 1.2,
            rarity: 'common',
            dangerous: true
        },
        { 
            type: 'bomb', 
            name: 'dynamite', 
            points: -150, 
            color: '#c0392b',
            radius: 30,
            weight: 1.0,
            rarity: 'uncommon',
            dangerous: true,
            chainReaction: true
        },
        {
            type: 'powerup',
            name: 'freeze',
            points: 0,
            color: '#00bcd4',
            radius: 30,
            weight: 0.6,
            rarity: 'rare',
            effect: 'slow_time'
        },
        {
            type: 'powerup',
            name: 'frenzy',
            points: 0,
            color: '#ff5722',
            radius: 30,
            weight: 0.6,
            rarity: 'rare',
            effect: 'double_points'
        },
        {
            type: 'powerup',
            name: 'extralife',
            points: 0,
            color: '#4caf50',
            radius: 28,
            weight: 0.5,
            rarity: 'legendary',
            effect: 'add_life'
        }
    ];

    // Utility functions
    function generateId() {
        return `obj_${++state.objectIdCounter}_${Date.now()}`;
    }

    function randomRange(min, max) {
        return Math.random() * (max - min) + min;
    }

    function randomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function clamp(value, min, max) {
        return Math.max(min, Math.min(max, value));
    }

    function deepClone(obj) {
        return JSON.parse(JSON.stringify(obj));
    }

    // Distance between two points
    function distance(x1, y1, x2, y2) {
        const dx = x2 - x1;
        const dy = y2 - y1;
        return Math.sqrt(dx * dx + dy * dy);
    }

    // Line segment to circle intersection detection
    function lineIntersectsCircle(x1, y1, x2, y2, cx, cy, radius) {
        const dx = x2 - x1;
        const dy = y2 - y1;
        const fx = x1 - cx;
        const fy = y1 - cy;

        const a = dx * dx + dy * dy;
        const b = 2 * (fx * dx + fy * dy);
        const c = (fx * fx + fy * fy) - radius * radius;

        let discriminant = b * b - 4 * a * c;

        if (discriminant < 0) {
            return false;
        }

        discriminant = Math.sqrt(discriminant);

        const t1 = (-b - discriminant) / (2 * a);
        const t2 = (-b + discriminant) / (2 * a);

        // Check if intersection point is within line segment bounds
        if ((t1 >= 0 && t1 <= 1) || (t2 >= 0 && t2 <= 1)) {
            return true;
        }

        // Also check if circle contains either endpoint
        if (distance(x1, y1, cx, cy) <= radius || distance(x2, y2, cx, cy) <= radius) {
            return true;
        }

        return false;
    }

    // Check if swipe path intersects with an object
    function checkSwipeIntersection(swipePath, object) {
        if (!swipePath || swipePath.length < 2) return false;

        const radius = object.radius || 30;

        // Check each segment of the swipe path
        for (let i = 0; i < swipePath.length - 1; i++) {
            const p1 = swipePath[i];
            const p2 = swipePath[i + 1];

            if (lineIntersectsCircle(p1.x, p1.y, p2.x, p2.y, object.x, object.y, radius)) {
                // Calculate intersection point (approximate as midpoint of segment)
                const intersectX = (p1.x + p2.x) / 2;
                const intersectY = (p1.y + p2.y) / 2;
                
                // Calculate swipe angle
                const angle = Math.atan2(p2.y - p1.y, p2.x - p1.x);
                
                return {
                    hit: true,
                    intersectPoint: { x: intersectX, y: intersectY },
                    swipeAngle: angle,
                    swipeVelocity: distance(p1.x, p1.y, p2.x, p2.y)
                };
            }
        }

        return { hit: false };
    }

    // Select object type based on rarity and difficulty
    function selectObjectType(forceType = null) {
        const types = state.objectTypes;

        if (forceType) {
            const matching = types.filter(t => t.type === forceType || t.name === forceType);
            if (matching.length > 0) {
                return matching[randomInt(0, matching.length - 1)];
            }
        }

        // Determine if this should be a bomb
        const bombChance = state.bombChance + (state.difficulty - 1) * 0.02;
        if (Math.random() < bombChance) {
            const bombs = types.filter(t => t.type === 'bomb');
            return bombs[randomInt(0, bombs.length - 1)];
        }

        // Determine if this should be a powerup (rare)
        const powerupChance = 0.03 + state.difficulty * 0.005;
        if (Math.random() < powerupChance) {
            const powerups = types.filter(t => t.type === 'powerup');
            if (powerups.length > 0) {
                return powerups[randomInt(0, powerups.length - 1)];
            }
        }

        // Select fruit based on rarity weights
        const fruits = types.filter(t => t.type === 'fruit');
        const rarityWeights = {
            common: 60,
            uncommon: 25 + state.difficulty * 2,
            rare: 10 + state.difficulty * 3,
            legendary: 2 + state.difficulty
        };

        const totalWeight = Object.values(rarityWeights).reduce((a, b) => a + b, 0);
        let roll = Math.random() * totalWeight;

        let selectedRarity = 'common';
        for (const [rarity, weight] of Object.entries(rarityWeights)) {
            roll -= weight;
            if (roll <= 0) {
                selectedRarity = rarity;
                break;
            }
        }

        const candidates = fruits.filter(f => f.rarity === selectedRarity);
        if (candidates.length === 0) {
            return fruits[randomInt(0, fruits.length - 1)];
        }

        return candidates[randomInt(0, candidates.length - 1)];
    }

    // Calculate spawn velocity based on position and difficulty
    function calculateSpawnVelocity(spawnX) {
        const centerX = state.canvas.width / 2;
        const distFromCenter = spawnX - centerX;

        // Base upward velocity
        const baseVy = -14 - state.difficulty * 0.5;
        const vyVariance = 2;
        const vy = baseVy + randomRange(-vyVariance, vyVariance);

        // Horizontal velocity pushes towards center
        const pushToCenter = -distFromCenter * 0.02;
        const vxBase = randomRange(-2, 2) + pushToCenter;
        const vx = clamp(vxBase, -4, 4);

        return { vx, vy };
    }

    // Apply active effects to points
    function applyEffectsToPoints(basePoints) {
        let multiplier = 1;

        for (const effect of state.activeEffects) {
            if (effect.type === 'double_points') {
                multiplier *= 2;
            }
        }

        return Math.round(basePoints * multiplier);
    }

    // Check and apply powerup effects
    function applyPowerupEffect(powerup) {
        const effectDuration = 5000; // 5 seconds

        switch (powerup.effect) {
            case 'slow_time':
                state.activeEffects.push({
                    id: generateId(),
                    type: 'slow_time',
                    startTime: state.gameTime,
                    duration: effectDuration,
                    multiplier: 0.5
                });
                return { effect: 'slow_time', message: 'Time Slowed!', duration: effectDuration };

            case 'double_points':
                state.activeEffects.push({
                    id: generateId(),
                    type: 'double_points',
                    startTime: state.gameTime,
                    duration: effectDuration,
                    multiplier: 2
                });
                return { effect: 'double_points', message: 'Double Points!', duration: effectDuration };

            case 'add_life':
                if (state.lives < state.maxLives) {
                    state.lives++;
                    return { effect: 'add_life', message: 'Extra Life!', livesGained: 1 };
                }
                // Convert to bonus points if at max lives
                return { effect: 'bonus_points', message: 'Bonus Points!', points: 100 };

            default:
                return { effect: 'unknown' };
        }
    }

    // Update active effects (remove expired ones)
    function updateActiveEffects() {
        state.activeEffects = state.activeEffects.filter(
            effect => state.gameTime - effect.startTime < effect.duration
        );
    }

    // Get time multiplier from active effects
    function getTimeMultiplier() {
        for (const effect of state.activeEffects) {
            if (effect.type === 'slow_time') {
                return effect.multiplier;
            }
        }
        return 1;
    }

    // Calculate combo multiplier
    function getComboMultiplier() {
        if (state.combo < 3) return 1;
        if (state.combo < 5) return 1.5;
        if (state.combo < 10) return 2;
        if (state.combo < 15) return 2.5;
        if (state.combo < 25) return 3;
        return 4;
    }

    // Generate split pieces when fruit is cut
    function generateSplitPieces(object, swipeData) {
        const angle = swipeData.swipeAngle || 0;
        const perpAngle = angle + Math.PI / 2;

        const splitVelocity = 3 + swipeData.swipeVelocity * 0.1;

        return [
            {
                id: generateId(),
                parentId: object.id,
                type: 'piece',
                name: object.name + '_half1',
                x: object.x,
                y: object.y,
                vx: object.vx + Math.cos(perpAngle) * splitVelocity,
                vy: object.vy + Math.sin(perpAngle) * splitVelocity - 2,
                radius: object.radius * 0.6,
                rotation: object.rotation,
                rotationSpeed: randomRange(-10, 10),
                color: object.color,
                alpha: 1,
                fadeRate: 0.02
            },
            {
                id: generateId(),
                parentId: object.id,
                type: 'piece',
                name: object.name + '_half2',
                x: object.x,
                y: object.y,
                vx: object.vx - Math.cos(perpAngle) * splitVelocity,
                vy: object.vy - Math.sin(perpAngle) * splitVelocity - 2,
                radius: object.radius * 0.6,
                rotation: object.rotation,
                rotationSpeed: randomRange(-10, 10),
                color: object.color,
                alpha: 1,
                fadeRate: 0.02
            }
        ];
    }

    // Public API
    return {

        /**
         * Initialize the game with configuration options
         * @param {Object} options - Game configuration
         * @returns {Object} Initialization result
         */
        initGame(options = {}) {
            // Reset all state
            state.objects = [];
            state.score = 0;
            state.lives = options.maxLives || 3;
            state.maxLives = options.maxLives || 3;
            state.combo = 0;
            state.maxCombo = 0;
            state.totalCuts = 0;
            state.totalMissed = 0;
            state.totalBombsCut = 0;
            state.isGameOver = false;
            state.isPaused = false;
            state.gameTime = 0;
            state.lastSpawnTime = 0;
            state.objectIdCounter = 0;
            state.activeEffects = [];
            state.streakBonus = 0;

            // Configure game parameters
            state.spawnRate = options.spawnRate || 1200;
            state.gravity = options.gravity || 0.4;
            state.bombChance = clamp(options.bombChance || 0.12, 0, 0.5);
            state.difficulty = clamp(options.difficulty || 1, 1, 10);

            // Set canvas size
            if (options.canvasSize) {
                state.canvas = {
                    width: options.canvasSize.width || 400,
                    height: options.canvasSize.height || 600
                };
            }

            // Configure object types
            if (options.objects && Array.isArray(options.objects) && options.objects.length > 0) {
                state.objectTypes = options.objects.map(obj => ({
                    type: obj.type || 'fruit',
                    name: obj.name || 'item',
                    points: obj.points !== undefined ? obj.points : 10,
                    color: obj.color || '#ffffff',
                    radius: obj.radius || 30,
                    weight: obj.weight || 1.0,
                    rarity: obj.rarity || 'common',
                    dangerous: obj.dangerous || false,
                    effect: obj.effect || null,
                    chainReaction: obj.chainReaction || false
                }));
            } else {
                state.objectTypes = deepClone(DEFAULT_OBJECT_TYPES);
            }

            // Define spawn zones
            state.spawnZones = [
                { x: state.canvas.width * 0.15, weight: 1 },
                { x: state.canvas.width * 0.35, weight: 2 },
                { x: state.canvas.width * 0.5, weight: 3 },
                { x: state.canvas.width * 0.65, weight: 2 },
                { x: state.canvas.width * 0.85, weight: 1 }
            ];

            return {
                success: true,
                lives: state.lives,
                maxLives: state.maxLives,
                score: 0,
                difficulty: state.difficulty,
                canvasSize: { ...state.canvas },
                objectTypes: state.objectTypes.length,
                message: 'Game initialized successfully'
            };
        },

        /**
         * Spawn a new object into the game
         * @param {string} forceType - Optional forced object type/name
         * @returns {Object} Spawned object data or null
         */
        spawnObject(forceType = null) {
            if (state.isGameOver || state.isPaused) {
                return null;
            }

            // Select object type
            const template = selectObjectType(forceType);
            if (!template) {
                return null;
            }

            // Determine spawn position (weighted random from spawn zones)
            const totalWeight = state.spawnZones.reduce((sum, z) => sum + z.weight, 0);
            let roll = Math.random() * totalWeight;
            let spawnX = state.canvas.width / 2;

            for (const zone of state.spawnZones) {
                roll -= zone.weight;
                if (roll <= 0) {
                    spawnX = zone.x + randomRange(-30, 30);
                    break;
                }
            }

            spawnX = clamp(spawnX, 50, state.canvas.width - 50);
            const spawnY = state.canvas.height + 50;

            // Calculate velocity
            const { vx, vy } = calculateSpawnVelocity(spawnX);

            // Apply weight to gravity effect
            const gravityMultiplier = template.weight || 1.0;

            // Create new object
            const newObject = {
                id: generateId(),
                type: template.type,
                name: template.name,
                x: spawnX,
                y: spawnY,
                vx: vx,
                vy: vy,
                radius: template.radius || 30,
                points: template.points,
                color: template.color,
                weight: gravityMultiplier,
                rarity: template.rarity,
                dangerous: template.dangerous || false,
                effect: template.effect,
                chainReaction: template.chainReaction || false,
                rotation: randomRange(0, Math.PI * 2),
                rotationSpeed: randomRange(-0.2, 0.2),
                spawnTime: state.gameTime,
                isCut: false,
                isOffScreen: false,
                hasPeaked: false,
                peakY: Infinity
            };

            state.objects.push(newObject);

            return {
                id: newObject.id,
                type: newObject.type,
                name: newObject.name,
                x: newObject.x,
                y: newObject.y,
                radius: newObject.radius,
                color: newObject.color
            };
        },

        /**
         * Handle a swipe gesture input
         * @param {Array} swipePath - Array of {x, y} points forming the swipe
         * @returns {Object} Swipe result with hit objects and updated state
         */
        handleSwipe(swipePath) {
            // Validate game state
            if (state.isGameOver) {
                return {
                    success: false,
                    reason: 'game_over',
                    hitObjects: [],
                    score: state.score,
                    lives: state.lives,
                    combo: state.combo,
                    isGameOver: true
                };
            }

            if (state.isPaused) {
                return {
                    success: false,
                    reason: 'game_paused',
                    hitObjects: [],
                    score: state.score,
                    lives: state.lives,
                    combo: state.combo,
                    isGameOver: false
                };
            }

            // Validate swipe path
            if (!swipePath || !Array.isArray(swipePath) || swipePath.length < 2) {
                return {
                    success: false,
                    reason: 'invalid_swipe_path',
                    message: 'Swipe path must contain at least 2 points',
                    hitObjects: [],
                    score: state.score,
                    lives: state.lives,
                    combo: state.combo,
                    isGameOver: false
                };
            }

            const hitObjects = [];
            const splitPieces = [];
            const effects = [];
            let bombHit = null;
            let pointsGained = 0;
            let fruitsHitThisSwipe = 0;

            // Check each active object for intersection
            for (const obj of state.objects) {
                // Skip already processed objects
                if (obj.isCut || obj.isOffScreen || obj.type === 'piece') {
                    continue;
                }

                const intersection = checkSwipeIntersection(swipePath, obj);

                if (intersection.hit) {
                    obj.isCut = true;
                    obj.cutTime = state.gameTime;
                    obj.cutData = intersection;

                    const hitResult = {
                        id: obj.id,
                        type: obj.type,
                        name: obj.name,
                        x: obj.x,
                        y: obj.y,
                        radius: obj.radius,
                        color: obj.color,
                        intersectPoint: intersection.intersectPoint,
                        swipeAngle: intersection.swipeAngle
                    };

                    // Handle different object types
                    if (obj.type === 'bomb') {
                        bombHit = obj;
                        hitResult.isBomb = true;
                        hitResult.chainReaction = obj.chainReaction;
                        state.totalBombsCut++;

                    } else if (obj.type === 'powerup') {
                        const powerupResult = applyPowerupEffect(obj);
                        hitResult.isPowerup = true;
                        hitResult.effect = powerupResult;
                        effects.push(powerupResult);

                        if (powerupResult.points) {
                            pointsGained += powerupResult.points;
                        }

                    } else if (obj.type === 'fruit') {
                        fruitsHitThisSwipe++;
                        state.combo++;
                        state.totalCuts++;

                        // Calculate points with combo and effects
                        const comboMultiplier = getComboMultiplier();
                        let points = applyEffectsToPoints(obj.points);
                        points = Math.round(points * comboMultiplier);

                        // Bonus for multiple fruits in single swipe
                        if (fruitsHitThisSwipe > 1) {
                            points += fruitsHitThisSwipe * 5;
                        }

                        hitResult.points = points;
                        hitResult.comboMultiplier = comboMultiplier;
                        hitResult.basePoints = obj.points;
                        pointsGained += points;

                        // Generate split pieces for visual effect
                        const pieces = generateSplitPieces(obj, intersection);
                        splitPieces.push(...pieces);
                    }

                    hitObjects.push(hitResult);
                }
            }

            // Add split pieces to objects
            state.objects.push(...splitPieces);

            // Update max combo
            state.maxCombo = Math.max(state.maxCombo, state.combo);

            // Handle bomb hit - game over
            if (bombHit) {
                state.isGameOver = true;
                state.lives = 0;
                state.combo = 0;

                // Chain reaction: destroy nearby objects for dramatic effect
                if (bombHit.chainReaction) {
                    const nearbyObjects = state.objects.filter(
                        o => !o.isCut && distance(o.x, o.y, bombHit.x, bombHit.y) < 150
                    );
                    nearbyObjects.forEach(o => {
                        o.isCut = true;
                        o.cutTime = state.gameTime;
                        o.chainDestroyed = true;
                    });
                }

                return {
                    success: true,
                    bombHit: true,
                    chainReaction: bombHit.chainReaction,
                    hitObjects,
                    splitPieces: splitPieces.length,
                    score: state.score,
                    lives: 0,
                    combo: 0,
                    isGameOver: true,
                    message: bombHit.chainReaction ? 'Chain Reaction! Game Over!' : 'Bomb Hit! Game Over!'
                };
            }

            // Update score
            state.score += pointsGained;

            // Reset combo if no fruits hit
            if (fruitsHitThisSwipe === 0 && hitObjects.length === 0) {
                // Don't reset combo on miss - only reset on missed falling fruit
            }

            return {
                success: hitObjects.length > 0,
                hitObjects,
                splitPieces: splitPieces.length,
                effects,
                pointsGained,
                combo: state.combo,
                comboMultiplier: getComboMultiplier(),
                fruitsHit: fruitsHitThisSwipe,
                score: state.score,
                lives: state.lives,
                isGameOver: false,
                activeEffects: state.activeEffects.map(e => ({
                    type: e.type,
                    remainingTime: e.duration - (state.gameTime - e.startTime)
                }))
            };
        },

        /**
         * Update game state (call each frame)
         * @param {number} deltaTime - Time since last update in milliseconds
         * @returns {Object} Updated game state
         */
        update(deltaTime = 16) {
            if (state.isGameOver) {
                return {
                    objects: state.objects.filter(o => !o.isOffScreen).map(o => ({ ...o })),
                    score: state.score,
                    lives: state.lives,
                    combo: state.combo,
                    isGameOver: true,
                    gameTime: state.gameTime
                };
            }

            if (state.isPaused) {
                return {
                    objects: state.objects.filter(o => !o.isOffScreen).map(o => ({ ...o })),
                    score: state.score,
                    lives: state.lives,
                    combo: state.combo,
                    isPaused: true,
                    isGameOver: false,
                    gameTime: state.gameTime
                };
            }

            // Apply time multiplier from effects
            const timeMultiplier = getTimeMultiplier();
            const effectiveDelta = deltaTime * timeMultiplier;

            state.gameTime += deltaTime;

            // Update active effects
            updateActiveEffects();

            const objectsToRemove = [];
            let missedFruits = 0;

            // Update each object
            for (const obj of state.objects) {
                if (obj.isOffScreen) {
                    objectsToRemove.push(obj.id);
                    continue;
                }

                // Apply physics
                const gravityEffect = state.gravity * (obj.weight || 1) * (effectiveDelta / 16);
                obj.vy += gravityEffect;
                obj.x += obj.vx * (effectiveDelta / 16);
                obj.y += obj.vy * (effectiveDelta / 16);
                obj.rotation += obj.rotationSpeed * (effectiveDelta / 16);

                // Track peak height (for miss detection)
                if (obj.vy > 0 && !obj.hasPeaked) {
                    obj.hasPeaked = true;
                    obj.peakY = obj.y;
                }

                // Handle piece fade out
                if (obj.type === 'piece') {
                    obj.alpha = Math.max(0, (obj.alpha || 1) - (obj.fadeRate || 0.02));
                    if (obj.alpha <= 0 || obj.y > state.canvas.height + 100) {
                        obj.isOffScreen = true;
                        objectsToRemove.push(obj.id);
                    }
                    continue;
                }

                // Check if object has fallen off screen
                if (obj.y > state.canvas.height + 100) {
                    obj.isOffScreen = true;

                    // Count missed fruits (not bombs, not powerups, not cut)
                    if (!obj.isCut && obj.type === 'fruit') {
                        missedFruits++;
                        state.totalMissed++;
                    }

                    objectsToRemove.push(obj.id);
                }

                // Also remove if gone off sides
                if (obj.x < -100 || obj.x > state.canvas.width + 100) {
                    obj.isOffScreen = true;
                    objectsToRemove.push(obj.id);
                }

                // Remove cut objects after animation delay
                if (obj.isCut && state.gameTime - obj.cutTime > 300) {
                    objectsToRemove.push(obj.id);
                }
            }

            // Remove processed objects
            const removeSet = new Set(objectsToRemove);
            state.objects = state.objects.filter(o => !removeSet.has(o.id));

            // Handle missed fruits
            if (missedFruits > 0) {
                state.lives = Math.max(0, state.lives - missedFruits);
                state.combo = 0; // Reset combo on miss

                if (state.lives <= 0) {
                    state.isGameOver = true;
                }
            }

            // Auto-spawn logic
            const adjustedSpawnRate = state.spawnRate / (1 + (state.difficulty - 1) * 0.1);
            if (state.gameTime - state.lastSpawnTime >= adjustedSpawnRate) {
                this.spawnObject();
                state.lastSpawnTime = state.gameTime;

                // Multi-spawn chance increases with difficulty
                const multiSpawnChance = 0.2 + (state.difficulty - 1) * 0.08;
                if (Math.random() < multiSpawnChance) {
                    setTimeout(() => this.spawnObject(), randomInt(50, 200));
                }
                if (state.difficulty > 5 && Math.random() < 0.2) {
                    setTimeout(() => this.spawnObject(), randomInt(150, 350));
                }
            }

            // Gradual difficulty increase
            if (state.gameTime > 0 && state.gameTime % 30000 < deltaTime) {
                state.difficulty = Math.min(10, state.difficulty + 0.5);
            }

            return {
                objects: state.objects.map(o => ({
                    id: o.id,
                    type: o.type,
                    name: o.name,
                    x: o.x,
                    y: o.y,
                    vx: o.vx,
                    vy: o.vy,
                    radius: o.radius,
                    color: o.color,
                    rotation: o.rotation,
                    isCut: o.isCut,
                    alpha: o.alpha
                })),
                missedFruits,
                score: state.score,
                lives: state.lives,
                combo: state.combo,
                comboMultiplier: getComboMultiplier(),
                isGameOver: state.isGameOver,
                gameTime: state.gameTime,
                activeEffects: state.activeEffects.map(e => ({
                    type: e.type,
                    remainingTime: Math.max(0, e.duration - (state.gameTime - e.startTime))
                })),
                difficulty: state.difficulty
            };
        },

        /**
         * Reset game to initial state
         * @returns {Object} Reset confirmation
         */
        resetGame() {
            const savedOptions = {
                maxLives: state.maxLives,
                spawnRate: state.spawnRate,
                gravity: state.gravity,
                bombChance: state.bombChance,
                difficulty: 1, // Reset difficulty
                canvasSize: { ...state.canvas },
                objects: state.objectTypes
            };

            return this.initGame(savedOptions);
        },

        /**
         * Get current game state
         * @returns {Object} Complete game state
         */
        getState() {
            return {
                objects: state.objects.filter(o => !o.isOffScreen).map(o => ({
                    id: o.id,
                    type: o.type,
                    name: o.name,
                    x: o.x,
                    y: o.y,
                    vx: o.vx,
                    vy: o.vy,
                    radius: o.radius,
                    color: o.color,
                    rotation: o.rotation,
                    isCut: o.isCut,
                    dangerous: o.dangerous,
                    effect: o.effect,
                    alpha: o.alpha
                })),
                score: state.score,
                lives: state.lives,
                maxLives: state.maxLives,
                combo: state.combo,
                maxCombo: state.maxCombo,
                comboMultiplier: getComboMultiplier(),
                totalCuts: state.totalCuts,
                totalMissed: state.totalMissed,
                isGameOver: state.isGameOver,
                isPaused: state.isPaused,
                gameTime: state.gameTime,
                difficulty: state.difficulty,
                activeEffects: state.activeEffects.map(e => ({
                    type: e.type,
                    remainingTime: Math.max(0, e.duration - (state.gameTime - e.startTime))
                }))
            };
        },

        /**
         * Pause the game
         * @returns {Object} Pause state
         */
        pause() {
            state.isPaused = true;
            return { 
                success: true, 
                isPaused: true,
                message: 'Game paused'
            };
        },

        /**
         * Resume the game
         * @returns {Object} Resume state
         */
        resume() {
            if (!state.isGameOver) {
                state.isPaused = false;
            }
            return { 
                success: !state.isGameOver, 
                isPaused: state.isPaused,
                isGameOver: state.isGameOver,
                message: state.isGameOver ? 'Cannot resume - game over' : 'Game resumed'
            };
        },

        /**
         * Set game difficulty
         * @param {number} level - Difficulty level (1-10)
         * @returns {Object} New difficulty settings
         */
        setDifficulty(level) {
            state.difficulty = clamp(level, 1, 10);

            // Adjust game parameters based on difficulty
            const baseSpawnRate = 1200;
            state.spawnRate = Math.max(400, baseSpawnRate - (state.difficulty - 1) * 80);
            state.bombChance = clamp(0.12 + (state.difficulty - 1) * 0.025, 0.12, 0.4);

            return {
                difficulty: state.difficulty,
                spawnRate: state.spawnRate,
                bombChance: state.bombChance,
                message: `Difficulty set to ${state.difficulty}`
            };
        },

        /**
         * Add an extra life (for rewards/powerups)
         * @returns {Object} Updated life count
         */
        addLife() {
            if (state.lives < state.maxLives && !state.isGameOver) {
                state.lives++;
                return { 
                    success: true, 
                    lives: state.lives, 
                    maxLives: state.maxLives 
                };
            }
            return { 
                success: false, 
                lives: state.lives, 
                maxLives: state.maxLives,
                reason: state.isGameOver ? 'game_over' : 'max_lives'
            };
        },

        /**
         * Get game statistics
         * @returns {Object} Game statistics
         */
        getStats() {
            const accuracy = state.totalCuts + state.totalMissed > 0
                ? Math.round((state.totalCuts / (state.totalCuts + state.totalMissed)) * 100)
                : 0;

            return {
                score: state.score,
                highScore: state.score, // Would need persistent storage for true high score
                totalCuts: state.totalCuts,
                totalMissed: state.totalMissed,
                totalBombsCut: state.totalBombsCut,
                accuracy: accuracy,
                maxCombo: state.maxCombo,
                gameTime: Math.round(state.gameTime / 1000),
                difficulty: state.difficulty,
                fruitsPerSecond: state.gameTime > 0 
                    ? Math.round((state.totalCuts / (state.gameTime / 1000)) * 100) / 100 
                    : 0
            };
        },

        /**
         * Spawn multiple objects at once (for special events)
         * @param {number} count - Number of objects to spawn
         * @param {string} type - Optional forced type
         * @returns {Array} Spawned objects
         */
        spawnBurst(count = 5, type = null) {
            const spawned = [];
            const delay = 100;

            for (let i = 0; i < count; i++) {
                setTimeout(() => {
                    const obj = this.spawnObject(type);
                    if (obj) spawned.push(obj);
                }, i * delay);
            }

            return {
                count,
                type: type || 'random',
                message: `Spawning burst of ${count} objects`
            };
        },

        /**
         * Clear all objects from screen (for special abilities)
         * @param {boolean} countAsMissed - Whether to count fruits as missed
         * @returns {Object} Clear result
         */
        clearScreen(countAsMissed = false) {
            const clearedCount = state.objects.length;
            const fruitsCleared = state.objects.filter(o => o.type === 'fruit' && !o.isCut).length;

            if (countAsMissed) {
                state.totalMissed += fruitsCleared;
                state.lives = Math.max(0, state.lives - fruitsCleared);
                
                if (state.lives <= 0) {
                    state.isGameOver = true;
                }
            }

            state.objects = [];

            return {
                clearedCount,
                fruitsCleared,
                lives: state.lives,
                isGameOver: state.isGameOver
            };
        },

        /**
         * Add custom object type
         * @param {Object} objectConfig - Object configuration
         * @returns {Object} Result
         */
        addObjectType(objectConfig) {
            if (!objectConfig || !objectConfig.name) {
                return { success: false, reason: 'invalid_config' };
            }

            const newType = {
                type: objectConfig.type || 'fruit',
                name: objectConfig.name,
                points: objectConfig.points !== undefined ? objectConfig.points : 10,
                color: objectConfig.color || '#ffffff',
                radius: objectConfig.radius || 30,
                weight: objectConfig.weight || 1.0,
                rarity: objectConfig.rarity || 'common',
                dangerous: objectConfig.dangerous || false,
                effect: objectConfig.effect || null
            };

            state.objectTypes.push(newType);

            return {
                success: true,
                totalTypes: state.objectTypes.length,
                addedType: newType.name
            };
        },

        /**
         * Get object types configuration
         * @returns {Array} Object types
         */
        getObjectTypes() {
            return state.objectTypes.map(t => ({ ...t }));
        },

        /**
         * Serialize game state for saving
         * @returns {string} JSON string
         */
        serialize() {
            return JSON.stringify({
                score: state.score,
                lives: state.lives,
                maxLives: state.maxLives,
                combo: state.combo,
                maxCombo: state.maxCombo,
                totalCuts: state.totalCuts,
                totalMissed: state.totalMissed,
                difficulty: state.difficulty,
                gameTime: state.gameTime,
                spawnRate: state.spawnRate,
                bombChance: state.bombChance,
                canvas: state.canvas,
                objectTypes: state.objectTypes
            });
        },

        /**
         * Deserialize and restore game state
         * @param {string} data - JSON string from serialize
         * @returns {Object} Restore result
         */
        deserialize(data) {
            try {
                const saved = JSON.parse(data);

                this.initGame({
                    maxLives: saved.maxLives,
                    spawnRate: saved.spawnRate,
                    bombChance: saved.bombChance,
                    difficulty: saved.difficulty,
                    canvasSize: saved.canvas,
                    objects: saved.objectTypes
                });

                state.score = saved.score || 0;
                state.lives = saved.lives || state.maxLives;
                state.combo = saved.combo || 0;
                state.maxCombo = saved.maxCombo || 0;
                state.totalCuts = saved.totalCuts || 0;
                state.totalMissed = saved.totalMissed || 0;
                state.gameTime = saved.gameTime || 0;
                state.lastSpawnTime = state.gameTime;

                return {
                    success: true,
                    score: state.score,
                    lives: state.lives,
                    message: 'Game state restored'
                };
            } catch (e) {
                return {
                    success: false,
                    reason: 'parse_error',
                    message: 'Failed to restore game state'
                };
            }
        },

        /**
         * Get information about active objects for debugging
         * @returns {Object} Debug information
         */
        getDebugInfo() {
            const byType = {};
            for (const obj of state.objects) {
                byType[obj.type] = (byType[obj.type] || 0) + 1;
            }

            return {
                totalObjects: state.objects.length,
                objectsByType: byType,
                activeEffects: state.activeEffects.length,
                gameTime: state.gameTime,
                lastSpawnTime: state.lastSpawnTime,
                difficulty: state.difficulty,
                spawnRate: state.spawnRate,
                timeMultiplier: getTimeMultiplier(),
                comboMultiplier: getComboMultiplier(),
                memoryEstimate: JSON.stringify(state.objects).length + ' bytes'
            };
        },

        /**
         * Register callback for game events (for UI integration)
         * Not stateful - UI should call getState() after events
         */
        getEventTypes() {
            return [
                'object_spawned',
                'object_cut',
                'bomb_hit',
                'fruit_missed',
                'combo_break',
                'powerup_activated',
                'level_up',
                'game_over'
            ];
        }
    };
})();

// Export for different module systems
if (typeof module !== 'undefined' && module.exports) {
    module.exports = SwipeGameEngine;
}

if (typeof window !== 'undefined') {
    window.SwipeGameEngine = SwipeGameEngine;
}
