/* ============================================
   UPSC GEOGRAPHY LEARNING SYSTEM
   Complete JavaScript Application
   ============================================ */

/* ============================================
   TABLE OF CONTENTS
   ============================================
   1. Global Variables & State
   2. Initialization
   3. Data Management
   4. UI Rendering - Topic Cards
   5. Category & Filtering
   6. Search Functionality
   7. Modal Management
   8. Mind Map Rendering
   9. Content Section Rendering
   10. Bookmarks System
   11. Progress Tracking
   12. Theme Management
   13. Toast Notifications
   14. Keyboard Shortcuts
   15. Animations & Particles
   16. Dashboard Functions
   17. Utilities
   18. Event Listeners
   ============================================ */

// ============================================
// 1. GLOBAL VARIABLES & STATE
// ============================================

const GeoMasterApp = {
    // Application State
    state: {
        allTopics: [],
        filteredTopics: [],
        currentCategory: 'all',
        currentTopic: null,
        currentTopicIndex: 0,
        searchQuery: '',
        filters: {
            difficulty: ['easy', 'medium', 'hard'],
            relevance: ['high', 'medium', 'low']
        },
        sortBy: 'default',
        viewMode: 'grid',
        isModalOpen: false,
        activeSection: 'mindmap',
        isLoading: true
    },

    // User Data (persisted to localStorage)
    userData: {
        name: 'UPSC Aspirant',
        avatar: '👨‍🎓',
        completedTopics: [],
        inProgressTopics: [],
        bookmarks: [],
        streakDays: 0,
        lastStudied: null,
        totalTimeSpent: 0,
        activityLog: [],
        achievements: [],
        settings: {
            theme: 'dark',
            animations: true,
            sounds: false
        }
    },

    // Category Definitions
    categories: {
        'all': { name: 'All Topics', icon: '📚', color: '#00D4FF' },
        'geomorphology': { name: 'Geomorphology', icon: '🌋', color: '#FF6B6B' },
        'climatology': { name: 'Climatology', icon: '🌤️', color: '#4ECDC4' },
        'oceanography': { name: 'Oceanography', icon: '🌊', color: '#00B4D8' },
        'biogeography': { name: 'Biogeography', icon: '🌿', color: '#2ECC71' },
        'landforms': { name: 'Landforms', icon: '🏔️', color: '#8B4513' },
        'india-physical': { name: 'India Physical', icon: '🗺️', color: '#9B59B6' },
        'india-climate': { name: 'India Climate', icon: '🌧️', color: '#3498DB' },
        'india-drainage': { name: 'India Drainage', icon: '💧', color: '#00CED1' },
        'india-resources': { name: 'India Resources', icon: '🌾', color: '#F39C12' },
        'economic': { name: 'Economic', icon: '📊', color: '#F1C40F' },
        'human': { name: 'Human', icon: '👥', color: '#E91E63' },
        'models': { name: 'Models', icon: '🔬', color: '#708090' },
        'environment': { name: 'Environment', icon: '♻️', color: '#27AE60' }
    },

    // Achievement Definitions
    achievements: [
        { id: 'first_topic', icon: '🎯', title: 'First Steps', desc: 'Complete your first topic', condition: (data) => data.completedTopics.length >= 1 },
        { id: 'five_topics', icon: '⭐', title: 'Rising Star', desc: 'Complete 5 topics', condition: (data) => data.completedTopics.length >= 5 },
        { id: 'ten_topics', icon: '🌟', title: 'Knowledge Seeker', desc: 'Complete 10 topics', condition: (data) => data.completedTopics.length >= 10 },
        { id: 'twenty_five', icon: '🏆', title: 'Geography Pro', desc: 'Complete 25 topics', condition: (data) => data.completedTopics.length >= 25 },
        { id: 'fifty_topics', icon: '👑', title: 'Master Explorer', desc: 'Complete 50 topics', condition: (data) => data.completedTopics.length >= 50 },
        { id: 'streak_3', icon: '🔥', title: 'On Fire', desc: '3 day study streak', condition: (data) => data.streakDays >= 3 },
        { id: 'streak_7', icon: '💪', title: 'Week Warrior', desc: '7 day study streak', condition: (data) => data.streakDays >= 7 },
        { id: 'streak_30', icon: '🎖️', title: 'Consistent Champion', desc: '30 day study streak', condition: (data) => data.streakDays >= 30 },
        { id: 'bookmark_10', icon: '🔖', title: 'Collector', desc: 'Bookmark 10 topics', condition: (data) => data.bookmarks.length >= 10 },
        { id: 'category_complete', icon: '📁', title: 'Category Master', desc: 'Complete all topics in a category', condition: (data) => GeoMasterApp.checkCategoryComplete(data) },
        { id: 'all_physical', icon: '🌍', title: 'Physical Geography Expert', desc: 'Complete all physical geography', condition: (data) => GeoMasterApp.checkPhysicalComplete(data) },
        { id: 'india_expert', icon: '🇮🇳', title: 'India Expert', desc: 'Complete all India geography', condition: (data) => GeoMasterApp.checkIndiaComplete(data) }
    ],

    // DOM Elements Cache
    elements: {},

    // Initialization
    init() {
        console.log('🌍 GeoMaster UPSC Initializing...');
        
        // Cache DOM elements
        this.cacheElements();
        
        // Load user data from localStorage
        this.loadUserData();
        
        // Load all topic data
        this.loadTopicData();
        
        // Setup event listeners
        this.setupEventListeners();
        
        // Initialize theme
        this.initTheme();
        
        // Update UI
        this.updateProgress();
        
        // Initialize animations
        this.initParticles();
        
        console.log('✅ GeoMaster UPSC Ready!');
    },

    // Cache frequently accessed DOM elements
    cacheElements() {
        this.elements = {
            // Main containers
            app: document.getElementById('app'),
            topicsGrid: document.getElementById('topicsGrid'),
            topicsContainer: document.getElementById('topicsContainer'),
            loadingState: document.getElementById('loadingState'),
            emptyState: document.getElementById('emptyState'),
            
            // Header elements
            searchInput: document.getElementById('searchInput'),
            searchResults: document.getElementById('searchResults'),
            searchClear: document.getElementById('searchClear'),
            progressPath: document.getElementById('progressPath'),
            progressText: document.getElementById('progressText'),
            bookmarkCount: document.getElementById('bookmarkCount'),
            themeToggle: document.getElementById('themeToggle'),
            
            // Category navigation
            categoryScroll: document.getElementById('categoryScroll'),
            categoryPills: document.querySelectorAll('.category-pill'),
            scrollLeft: document.getElementById('scrollLeft'),
            scrollRight: document.getElementById('scrollRight'),
            
            // Filter elements
            activeCategoryTag: document.getElementById('activeCategoryTag'),
            difficultyFilter: document.getElementById('difficultyFilter'),
            relevanceFilter: document.getElementById('relevanceFilter'),
            sortFilter: document.getElementById('sortFilter'),
            viewBtns: document.querySelectorAll('.view-btn'),
            resetFilters: document.getElementById('resetFilters'),
            
            // Stats
            totalTopics: document.getElementById('totalTopics'),
            completedTopics: document.getElementById('completedTopics'),
            inProgressTopics: document.getElementById('inProgressTopics'),
            streakDays: document.getElementById('streakDays'),
            
            // Modal elements
            topicModal: document.getElementById('topicModal'),
            modalBackdrop: document.getElementById('modalBackdrop'),
            modalBack: document.getElementById('modalBack'),
            modalClose: document.getElementById('modalClose'),
            modalIcon: document.getElementById('modalIcon'),
            modalTitle: document.getElementById('modalTitle'),
            modalCategory: document.getElementById('modalCategory'),
            modalDifficulty: document.getElementById('modalDifficulty'),
            modalRelevance: document.getElementById('modalRelevance'),
            modalBookmark: document.getElementById('modalBookmark'),
            modalThemeBg: document.getElementById('modalThemeBg'),
            modalContent: document.getElementById('modalContent'),
            navTabs: document.querySelectorAll('.nav-tab'),
            prevTopic: document.getElementById('prevTopic'),
            nextTopic: document.getElementById('nextTopic'),
            currentTopicNum: document.getElementById('currentTopicNum'),
            totalTopicNum: document.getElementById('totalTopicNum'),
            markCompleteBtn: document.getElementById('markCompleteBtn'),
            
            // Mind map elements
            mindmapContainer: document.getElementById('mindmapContainer'),
            mindmapCanvas: document.getElementById('mindmapCanvas'),
            mindmapCentral: document.getElementById('mindmapCentral'),
            mindmapBranches: document.getElementById('mindmapBranches'),
            
            // Content containers
            memoryHooksContainer: document.getElementById('memoryHooksContainer'),
            conceptBlocksContainer: document.getElementById('conceptBlocksContainer'),
            diagramsContainer: document.getElementById('diagramsContainer'),
            quickFactsContainer: document.getElementById('quickFactsContainer'),
            trapsContainer: document.getElementById('trapsContainer'),
            revisionContainer: document.getElementById('revisionContainer'),
            pyqsContainer: document.getElementById('pyqsContainer'),
            
            // Bookmarks sidebar
            bookmarksSidebar: document.getElementById('bookmarksSidebar'),
            bookmarksBtn: document.getElementById('bookmarksBtn'),
            closeSidebar: document.getElementById('closeSidebar'),
            bookmarksList: document.getElementById('bookmarksList'),
            bookmarksEmpty: document.getElementById('bookmarksEmpty'),
            clearBookmarks: document.getElementById('clearBookmarks'),
            
            // Toast container
            toastContainer: document.getElementById('toastContainer'),
            
            // Shortcuts modal
            shortcutsModal: document.getElementById('shortcutsModal'),
            closeShortcuts: document.getElementById('closeShortcuts'),
            
            // Scroll to top
            scrollTopBtn: document.getElementById('scrollTopBtn'),
            
            // Animated background
            animatedBg: document.getElementById('animated-bg'),
            particles: document.getElementById('particles'),
            floatingElements: document.getElementById('floatingElements')
        };
    }
};

// ============================================
// 2. INITIALIZATION FUNCTIONS
// ============================================

GeoMasterApp.loadUserData = function() {
    try {
        const savedData = localStorage.getItem('geomaster_userData');
        if (savedData) {
            const parsed = JSON.parse(savedData);
            this.userData = { ...this.userData, ...parsed };
            
            // Check and update streak
            this.updateStreak();
        }
    } catch (error) {
        console.error('Error loading user data:', error);
    }
};

GeoMasterApp.saveUserData = function() {
    try {
        localStorage.setItem('geomaster_userData', JSON.stringify(this.userData));
    } catch (error) {
        console.error('Error saving user data:', error);
    }
};

GeoMasterApp.loadTopicData = function() {
    this.state.isLoading = true;
    this.showLoading();
    
    // Simulate loading progress
    let progress = 0;
    const loadingBar = document.getElementById('loadingBar');
    const loadingInterval = setInterval(() => {
        progress += Math.random() * 15;
        if (progress > 90) progress = 90;
        if (loadingBar) {
            loadingBar.style.width = `${progress}%`;
        }
    }, 100);
    
    // Collect all topics from data files
    setTimeout(() => {
        try {
            this.state.allTopics = [];
            
            // Collect from all data sources
            const dataSources = [
                typeof geomorphologyData !== 'undefined' ? geomorphologyData : [],
                typeof climatology1Data !== 'undefined' ? climatology1Data : [],
                typeof climatology2Data !== 'undefined' ? climatology2Data : [],
                typeof oceanographyData !== 'undefined' ? oceanographyData : [],
                typeof biogeographyData !== 'undefined' ? biogeographyData : [],
                typeof landformsData !== 'undefined' ? landformsData : [],
                typeof indiaPhysicalData !== 'undefined' ? indiaPhysicalData : [],
                typeof indiaClimateData !== 'undefined' ? indiaClimateData : [],
                typeof indiaDrainageData !== 'undefined' ? indiaDrainageData : [],
                typeof indiaResourcesData !== 'undefined' ? indiaResourcesData : [],
                typeof humanData !== 'undefined' ? humanData : [],
                typeof economicData !== 'undefined' ? economicData : [],
                typeof modelsData !== 'undefined' ? modelsData : [],
                typeof environmentData !== 'undefined' ? environmentData : []
            ];
            
            dataSources.forEach(source => {
                if (Array.isArray(source)) {
                    this.state.allTopics.push(...source);
                }
            });
            
            // If no data loaded, use sample data
            if (this.state.allTopics.length === 0) {
                this.state.allTopics = this.getSampleTopics();
            }
            
            // Set filtered topics
            this.state.filteredTopics = [...this.state.allTopics];
            
            // Complete loading
            clearInterval(loadingInterval);
            if (loadingBar) {
                loadingBar.style.width = '100%';
            }
            
            setTimeout(() => {
                this.state.isLoading = false;
                this.hideLoading();
                this.renderTopics();
                this.updateCategoryCounts();
                this.updateStats();
            }, 300);
            
        } catch (error) {
            console.error('Error loading topic data:', error);
            clearInterval(loadingInterval);
            this.state.isLoading = false;
            this.hideLoading();
            this.showToast('Error loading data', 'Please refresh the page', 'error');
        }
    }, 500);
};

GeoMasterApp.getSampleTopics = function() {
    // Return sample topics if no data files are loaded
    return [
        {
            id: 'plate-tectonics',
            name: 'Plate Tectonics',
            icon: '🌍',
            category: 'geomorphology',
            theme: 'tectonic',
            difficulty: 'medium',
            upscRelevance: 'high',
            
            mindMap: {
                central: 'Plate Tectonics',
                branches: [
                    {
                        name: 'Types of Plates',
                        color: '#FF6B6B',
                        children: [
                            'Continental Plates - Lighter, Granitic',
                            'Oceanic Plates - Denser, Basaltic'
                        ]
                    },
                    {
                        name: 'Plate Boundaries',
                        color: '#4ECDC4',
                        children: [
                            'Divergent - Plates move apart',
                            'Convergent - Plates collide',
                            'Transform - Plates slide past'
                        ]
                    },
                    {
                        name: 'Driving Forces',
                        color: '#FFE66D',
                        children: [
                            'Convection Currents',
                            'Ridge Push',
                            'Slab Pull'
                        ]
                    }
                ]
            },
            
            memoryHooks: [
                {
                    type: 'mnemonic',
                    title: 'Remember Plate Boundaries',
                    content: 'DCT = Divergent (Divide), Convergent (Crash), Transform (Turn)',
                    icon: '🧠'
                },
                {
                    type: 'story',
                    title: 'The Dancing Continents',
                    content: 'Imagine continents as dance partners - some move apart (breakup), some collide (hug), some slide past (high-five)',
                    icon: '💃'
                },
                {
                    type: 'comparison',
                    title: 'Kitchen Analogy',
                    content: 'Plates float on mantle like dal floating on water when you heat it - convection!',
                    icon: '🍲'
                }
            ],
            
            conceptBlocks: [
                {
                    title: 'What are Tectonic Plates?',
                    icon: '🧩',
                    points: [
                        "Earth's crust divided into 15-20 rigid plates",
                        'Float on semi-fluid asthenosphere',
                        'Move 2-10 cm per year (speed of fingernail growth!)',
                        'Carry continents and ocean floors'
                    ]
                },
                {
                    title: 'Divergent Boundaries',
                    icon: '↔️',
                    points: [
                        'Plates move APART from each other',
                        'Creates: Mid-ocean ridges, Rift valleys',
                        'Example: Mid-Atlantic Ridge, East African Rift',
                        'Result: New crust forms, seafloor spreading'
                    ]
                },
                {
                    title: 'Convergent Boundaries',
                    icon: '💥',
                    points: [
                        'Plates move TOWARD each other',
                        'Ocean-Ocean = Island arcs (Japan)',
                        'Ocean-Continent = Volcanic mountains (Andes)',
                        'Continent-Continent = Fold mountains (Himalayas)'
                    ]
                }
            ],
            
            diagrams: [
                {
                    title: 'Plate Boundaries Comparison',
                    type: 'comparison-chart',
                    description: 'Show 3 columns: Divergent, Convergent, Transform with diagrams of plate movement, features formed, and examples'
                },
                {
                    title: 'Cross-section of Subduction',
                    type: 'cross-section',
                    description: 'Show oceanic plate diving under continental plate, with trench, volcano, and earthquake zones marked'
                }
            ],
            
            quickFacts: [
                '📍 Earth has 7 major + 8 minor tectonic plates',
                '📏 Pacific Plate is the LARGEST tectonic plate',
                '🏔️ Himalayas formed by Indian-Eurasian plate collision',
                '🌊 Atlantic Ocean is WIDENING by 2.5 cm/year',
                '🔥 Ring of Fire = 75% of world\'s volcanoes',
                '📅 Pangaea broke up ~200 million years ago',
                '⚡ 90% of earthquakes occur at plate boundaries'
            ],
            
            upscTraps: [
                {
                    trap: 'Confusing Ridge Push vs Slab Pull',
                    clarity: 'Ridge Push = pushes from mid-ocean ridge | Slab Pull = pulls from subducting slab (Slab Pull is STRONGER)'
                },
                {
                    trap: 'Mixing up Asthenosphere and Lithosphere',
                    clarity: 'Lithosphere = rigid outer layer (plates) | Asthenosphere = plastic layer below (plates float on it)'
                }
            ],
            
            revisionBox: {
                title: '⚡ 30-Second Revision',
                points: [
                    '15-20 plates float on asthenosphere',
                    '3 boundaries: Divergent (apart), Convergent (together), Transform (slide)',
                    'Driven by: Convection + Ridge Push + Slab Pull',
                    'Ring of Fire = Pacific plate edges',
                    'India moving north → Himalayas rising!'
                ]
            },
            
            pyqs: [
                {
                    year: 2019,
                    question: 'Explain the concept of seafloor spreading and its role in plate tectonics.',
                    type: 'Mains'
                },
                {
                    year: 2021,
                    question: 'The Ring of Fire is associated with which geographical feature?',
                    type: 'Prelims'
                }
            ]
        },
        {
            id: 'volcanoes',
            name: 'Volcanoes',
            icon: '🌋',
            category: 'geomorphology',
            theme: 'volcanic',
            difficulty: 'medium',
            upscRelevance: 'high',
            
            mindMap: {
                central: 'Volcanoes',
                branches: [
                    {
                        name: 'Types',
                        color: '#FF4444',
                        children: [
                            'Shield Volcanoes - Gentle slopes',
                            'Composite/Stratovolcanoes - Steep',
                            'Cinder Cone - Small, steep'
                        ]
                    },
                    {
                        name: 'Distribution',
                        color: '#FF6B35',
                        children: [
                            'Ring of Fire - Pacific',
                            'Mid-Atlantic Ridge',
                            'Hotspots - Hawaii'
                        ]
                    },
                    {
                        name: 'Products',
                        color: '#FFD700',
                        children: [
                            'Lava - Molten rock',
                            'Pyroclastic material',
                            'Volcanic gases'
                        ]
                    }
                ]
            },
            
            memoryHooks: [
                {
                    type: 'mnemonic',
                    title: 'Volcano Types',
                    content: 'SCC = Shield (flat), Composite (classic), Cinder (cone)',
                    icon: '🧠'
                },
                {
                    type: 'visual',
                    title: 'Shape Memory',
                    content: 'Shield = Warrior shield (flat) | Composite = Layer cake | Cinder = Ice cream cone',
                    icon: '👁️'
                }
            ],
            
            conceptBlocks: [
                {
                    title: 'What is a Volcano?',
                    icon: '🌋',
                    points: [
                        'Opening in Earth\'s crust',
                        'Allows magma, gases, ash to escape',
                        'Created at plate boundaries or hotspots',
                        'Can be active, dormant, or extinct'
                    ]
                },
                {
                    title: 'Shield Volcanoes',
                    icon: '🛡️',
                    points: [
                        'Broad, gentle slopes (like a shield)',
                        'Formed by low-viscosity basaltic lava',
                        'Non-explosive eruptions',
                        'Example: Mauna Loa, Hawaii'
                    ]
                },
                {
                    title: 'Composite Volcanoes',
                    icon: '🏔️',
                    points: [
                        'Steep-sided, cone-shaped',
                        'Alternating lava and pyroclastic layers',
                        'Explosive eruptions',
                        'Example: Mt. Fuji, Mt. Vesuvius'
                    ]
                }
            ],
            
            diagrams: [
                {
                    title: 'Volcano Types Comparison',
                    type: 'comparison-chart',
                    description: 'Visual comparison of shield, composite, and cinder cone volcanoes with shape, lava type, and eruption style'
                }
            ],
            
            quickFacts: [
                '🔥 75% of volcanoes are in the Ring of Fire',
                '🏝️ Hawaii formed entirely by volcanic activity',
                '📊 ~1,500 potentially active volcanoes worldwide',
                '🌡️ Lava temperature: 700°C to 1200°C',
                '💀 Volcanic gases include CO2, SO2, H2S',
                '🇮🇳 Only active volcano in India: Barren Island'
            ],
            
            upscTraps: [
                {
                    trap: 'All volcanoes are at plate boundaries',
                    clarity: 'Not true! Hotspot volcanoes (Hawaii) form in middle of plates'
                }
            ],
            
            revisionBox: {
                title: '⚡ 30-Second Revision',
                points: [
                    '3 types: Shield (gentle), Composite (steep), Cinder (small)',
                    'Most found at plate boundaries',
                    'Hotspots create island chains',
                    'India\'s only active: Barren Island (Andaman)',
                    'Ring of Fire = 75% of volcanoes'
                ]
            },
            
            pyqs: [
                {
                    year: 2020,
                    question: 'Differentiate between shield volcanoes and composite volcanoes.',
                    type: 'Mains'
                }
            ]
        },
        {
            id: 'indian-monsoon',
            name: 'Indian Monsoon',
            icon: '🌧️',
            category: 'india-climate',
            theme: 'monsoon',
            difficulty: 'hard',
            upscRelevance: 'high',
            
            mindMap: {
                central: 'Indian Monsoon',
                branches: [
                    {
                        name: 'Mechanism',
                        color: '#3498DB',
                        children: [
                            'Differential Heating',
                            'Shift of ITCZ',
                            'Somali Jet',
                            'Tibetan Plateau Effect'
                        ]
                    },
                    {
                        name: 'Types',
                        color: '#2ECC71',
                        children: [
                            'SW Monsoon (Jun-Sep)',
                            'NE Monsoon (Oct-Dec)'
                        ]
                    },
                    {
                        name: 'Branches',
                        color: '#9B59B6',
                        children: [
                            'Arabian Sea Branch',
                            'Bay of Bengal Branch'
                        ]
                    }
                ]
            },
            
            memoryHooks: [
                {
                    type: 'mnemonic',
                    title: 'Monsoon Onset Dates',
                    content: 'Kerala = June 1 | Mumbai = June 10 | Delhi = June 29',
                    icon: '📅'
                },
                {
                    type: 'story',
                    title: 'Journey of Monsoon',
                    content: 'Monsoon is like a guest arriving from sea - enters through Kerala door, travels north, gets tired by September, returns home',
                    icon: '🚶'
                }
            ],
            
            conceptBlocks: [
                {
                    title: 'What Drives the Monsoon?',
                    icon: '⚙️',
                    points: [
                        'Differential heating of land and sea',
                        'Low pressure over heated Indian subcontinent',
                        'High pressure over Indian Ocean',
                        'ITCZ shifts northward in summer'
                    ]
                },
                {
                    title: 'SW Monsoon Branches',
                    icon: '🌊',
                    points: [
                        'Arabian Sea Branch: Hits Western Ghats first',
                        'Bay of Bengal Branch: Curves around Bangladesh',
                        'Both converge over Ganga plains',
                        'Western Ghats cause orographic rainfall'
                    ]
                }
            ],
            
            diagrams: [
                {
                    title: 'Monsoon Wind Direction',
                    type: 'map',
                    description: 'India map showing SW monsoon wind arrows and rainfall distribution'
                }
            ],
            
            quickFacts: [
                '📅 SW Monsoon: June to September',
                '📅 NE Monsoon: October to December',
                '🌧️ India receives 75% rain from SW Monsoon',
                '🏔️ Mawsynram (Meghalaya) = Highest rainfall',
                '🏜️ Jaisalmer = Lowest rainfall',
                '🌪️ Monsoon trough causes monsoon depressions'
            ],
            
            upscTraps: [
                {
                    trap: 'Monsoon means just "rain"',
                    clarity: 'Monsoon = Seasonal reversal of winds, not just rainfall'
                },
                {
                    trap: 'Entire India gets SW monsoon rain',
                    clarity: 'Tamil Nadu gets most rain from NE monsoon (Oct-Dec)'
                }
            ],
            
            revisionBox: {
                title: '⚡ 30-Second Revision',
                points: [
                    'Caused by differential heating + ITCZ shift',
                    'SW monsoon: June-Sept (75% of rain)',
                    'Two branches: Arabian Sea & Bay of Bengal',
                    'NE monsoon: Oct-Dec (Tamil Nadu)',
                    'Mawsynram = wettest, Jaisalmer = driest'
                ]
            },
            
            pyqs: [
                {
                    year: 2022,
                    question: 'Explain the mechanism of Indian Monsoon with reference to Jet Streams.',
                    type: 'Mains'
                },
                {
                    year: 2021,
                    question: 'Which state receives maximum rainfall from NE Monsoon?',
                    type: 'Prelims'
                }
            ]
        }
    ];
};
// ============================================
// 3. DATA MANAGEMENT
// ============================================

GeoMasterApp.getTopicById = function(id) {
    return this.state.allTopics.find(topic => topic.id === id);
};

GeoMasterApp.getTopicsByCategory = function(category) {
    if (category === 'all') {
        return this.state.allTopics;
    }
    return this.state.allTopics.filter(topic => topic.category === category);
};

GeoMasterApp.getTopicProgress = function(topicId) {
    if (this.userData.completedTopics.includes(topicId)) {
        return 100;
    }
    if (this.userData.inProgressTopics.includes(topicId)) {
        return 50; // In progress
    }
    return 0;
};

GeoMasterApp.isTopicBookmarked = function(topicId) {
    return this.userData.bookmarks.includes(topicId);
};

// ============================================
// 4. UI RENDERING - TOPIC CARDS
// ============================================

GeoMasterApp.showLoading = function() {
    if (this.elements.loadingState) {
        this.elements.loadingState.classList.remove('hidden');
        this.elements.loadingState.style.display = 'flex';
    }
    if (this.elements.topicsGrid) {
        this.elements.topicsGrid.style.display = 'none';
    }
    if (this.elements.emptyState) {
        this.elements.emptyState.classList.add('hidden');
    }
};

GeoMasterApp.hideLoading = function() {
    if (this.elements.loadingState) {
        this.elements.loadingState.classList.add('hidden');
        this.elements.loadingState.style.display = 'none';
    }
    if (this.elements.topicsGrid) {
        this.elements.topicsGrid.style.display = 'grid';
    }
};

GeoMasterApp.renderTopics = function() {
    const grid = this.elements.topicsGrid;
    if (!grid) return;
    
    // Clear existing cards
    grid.innerHTML = '';
    
    const topics = this.state.filteredTopics;
    
    if (topics.length === 0) {
        this.showEmptyState();
        return;
    }
    
    this.hideEmptyState();
    
    // Create and append topic cards
    topics.forEach((topic, index) => {
        const card = this.createTopicCard(topic, index);
        grid.appendChild(card);
    });
    
    // Apply view mode
    if (this.state.viewMode === 'list') {
        grid.classList.add('list-view');
    } else {
        grid.classList.remove('list-view');
    }
    
    // Animate cards entrance
    this.animateCardsEntrance();
};

GeoMasterApp.createTopicCard = function(topic, index) {
    const card = document.createElement('div');
    card.className = 'topic-card';
    card.setAttribute('data-id', topic.id);
    card.setAttribute('data-category', topic.category);
    card.style.setProperty('--animation-delay', `${index * 0.05}s`);
    
    const progress = this.getTopicProgress(topic.id);
    const isBookmarked = this.isTopicBookmarked(topic.id);
    const isCompleted = progress === 100;
    
    const categoryInfo = this.categories[topic.category] || this.categories['all'];
    
    // Relevance stars
    const relevanceMap = { high: 3, medium: 2, low: 1 };
    const stars = relevanceMap[topic.upscRelevance] || 2;
    let starsHTML = '';
    for (let i = 0; i < 3; i++) {
        starsHTML += `<span class="star ${i < stars ? 'filled' : ''}">★</span>`;
    }
    
    card.innerHTML = `
        <div class="card-header">
            <div class="card-icon-wrapper">
                <span class="card-icon-glow"></span>
                <span class="card-icon">${topic.icon}</span>
            </div>
            <button class="card-bookmark ${isBookmarked ? 'bookmarked' : ''}" 
                    data-id="${topic.id}" 
                    aria-label="${isBookmarked ? 'Remove bookmark' : 'Add bookmark'}">
                🔖
            </button>
        </div>
        
        <div class="card-content">
            <span class="card-category" style="color: ${categoryInfo.color}">
                ${categoryInfo.icon} ${categoryInfo.name}
            </span>
            <h3 class="card-title">${topic.name}</h3>
            <p class="card-subtitle">${this.getTopicSubtitle(topic)}</p>
        </div>
        
        <div class="card-footer">
            <div class="card-meta">
                <span class="card-difficulty ${topic.difficulty}">${topic.difficulty}</span>
                <div class="card-relevance" title="UPSC Relevance: ${topic.upscRelevance}">
                    ${starsHTML}
                </div>
            </div>
            
            ${isCompleted ? `
                <span class="card-completed-badge" title="Completed">✓</span>
            ` : progress > 0 ? `
                <div class="card-progress" title="${progress}% complete">
                    <svg class="card-progress-ring" viewBox="0 0 36 36">
                        <circle class="card-progress-bg" cx="18" cy="18" r="15.5"/>
                        <circle class="card-progress-fill" cx="18" cy="18" r="15.5"
                            stroke-dasharray="${progress}, 100"/>
                    </svg>
                    <span class="card-progress-text">${progress}%</span>
                </div>
            ` : ''}
        </div>
    `;
    
    // Add click event
    card.addEventListener('click', (e) => {
        // Ignore if clicking bookmark button
        if (e.target.closest('.card-bookmark')) {
            return;
        }
        this.openTopicModal(topic.id);
    });
    
    // Add bookmark click event
    const bookmarkBtn = card.querySelector('.card-bookmark');
    if (bookmarkBtn) {
        bookmarkBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            this.toggleBookmark(topic.id);
        });
    }
    
    // Add hover effect for mouse position
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        card.style.setProperty('--mouse-x', `${x}%`);
        card.style.setProperty('--mouse-y', `${y}%`);
    });
    
    return card;
};

GeoMasterApp.getTopicSubtitle = function(topic) {
    // Generate subtitle from concept blocks or return default
    if (topic.conceptBlocks && topic.conceptBlocks.length > 0) {
        return topic.conceptBlocks[0].title;
    }
    if (topic.quickFacts && topic.quickFacts.length > 0) {
        // Get first quick fact, strip emoji
        return topic.quickFacts[0].replace(/^[^\w]+/, '').substring(0, 50) + '...';
    }
    return `Learn about ${topic.name}`;
};

GeoMasterApp.animateCardsEntrance = function() {
    const cards = document.querySelectorAll('.topic-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            card.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 50);
    });
};

GeoMasterApp.showEmptyState = function() {
    if (this.elements.emptyState) {
        this.elements.emptyState.classList.remove('hidden');
    }
    if (this.elements.topicsGrid) {
        this.elements.topicsGrid.style.display = 'none';
    }
};

GeoMasterApp.hideEmptyState = function() {
    if (this.elements.emptyState) {
        this.elements.emptyState.classList.add('hidden');
    }
    if (this.elements.topicsGrid) {
        this.elements.topicsGrid.style.display = 'grid';
    }
};

// ============================================
// 5. CATEGORY & FILTERING
// ============================================

GeoMasterApp.setCategory = function(category) {
    this.state.currentCategory = category;
    
    // Update active pill
    document.querySelectorAll('.category-pill').forEach(pill => {
        pill.classList.remove('active');
        if (pill.dataset.category === category) {
            pill.classList.add('active');
        }
    });
    
    // Update filter tag
    if (this.elements.activeCategoryTag) {
        const categoryInfo = this.categories[category];
        this.elements.activeCategoryTag.textContent = categoryInfo ? categoryInfo.name : 'All Topics';
    }
    
    // Apply filters
    this.applyFilters();
};

GeoMasterApp.applyFilters = function() {
    let topics = [...this.state.allTopics];
    
    // Category filter
    if (this.state.currentCategory !== 'all') {
        topics = topics.filter(t => t.category === this.state.currentCategory);
    }
    
    // Search filter
    if (this.state.searchQuery) {
        const query = this.state.searchQuery.toLowerCase();
        topics = topics.filter(t => 
            t.name.toLowerCase().includes(query) ||
            t.category.toLowerCase().includes(query) ||
            (t.quickFacts && t.quickFacts.some(f => f.toLowerCase().includes(query)))
        );
    }
    
    // Difficulty filter
    topics = topics.filter(t => 
        this.state.filters.difficulty.includes(t.difficulty)
    );
    
    // Relevance filter
    topics = topics.filter(t => 
        this.state.filters.relevance.includes(t.upscRelevance)
    );
    
    // Sorting
    topics = this.sortTopics(topics);
    
    this.state.filteredTopics = topics;
    this.renderTopics();
};

GeoMasterApp.sortTopics = function(topics) {
    const sortBy = this.state.sortBy;
    
    switch (sortBy) {
        case 'name':
            return topics.sort((a, b) => a.name.localeCompare(b.name));
        
        case 'difficulty':
            const difficultyOrder = { easy: 1, medium: 2, hard: 3 };
            return topics.sort((a, b) => difficultyOrder[a.difficulty] - difficultyOrder[b.difficulty]);
        
        case 'relevance':
            const relevanceOrder = { high: 1, medium: 2, low: 3 };
            return topics.sort((a, b) => relevanceOrder[a.upscRelevance] - relevanceOrder[b.upscRelevance]);
        
        case 'progress':
            return topics.sort((a, b) => {
                const progressA = this.getTopicProgress(a.id);
                const progressB = this.getTopicProgress(b.id);
                return progressB - progressA;
            });
        
        default:
            return topics;
    }
};

GeoMasterApp.updateCategoryCounts = function() {
    const counts = { all: this.state.allTopics.length };
    
    // Count topics per category
    this.state.allTopics.forEach(topic => {
        counts[topic.category] = (counts[topic.category] || 0) + 1;
    });
    
    // Update count badges
    Object.keys(counts).forEach(category => {
        const countEl = document.getElementById(`${category}Count`);
        if (countEl) {
            countEl.textContent = counts[category];
        }
    });
    
    // Update allCount specifically
    if (this.elements.totalTopics) {
        this.elements.totalTopics.textContent = counts.all;
    }
};

GeoMasterApp.resetAllFilters = function() {
    this.state.currentCategory = 'all';
    this.state.searchQuery = '';
    this.state.filters = {
        difficulty: ['easy', 'medium', 'hard'],
        relevance: ['high', 'medium', 'low']
    };
    this.state.sortBy = 'default';
    
    // Reset UI
    document.querySelectorAll('.category-pill').forEach(pill => {
        pill.classList.remove('active');
        if (pill.dataset.category === 'all') {
            pill.classList.add('active');
        }
    });
    
    if (this.elements.searchInput) {
        this.elements.searchInput.value = '';
    }
    
    if (this.elements.activeCategoryTag) {
        this.elements.activeCategoryTag.textContent = 'All Topics';
    }
    
    // Reset checkboxes
    document.querySelectorAll('.dropdown-item input[type="checkbox"]').forEach(cb => {
        cb.checked = true;
    });
    
    // Reset sort buttons
    document.querySelectorAll('#sortMenu .dropdown-item').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.sort === 'default') {
            btn.classList.add('active');
        }
    });
    
    this.applyFilters();
    this.showToast('Filters Reset', 'Showing all topics', 'info');
};

GeoMasterApp.setViewMode = function(mode) {
    this.state.viewMode = mode;
    
    // Update buttons
    document.querySelectorAll('.view-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.view === mode) {
            btn.classList.add('active');
        }
    });
    
    // Update grid
    if (this.elements.topicsGrid) {
        if (mode === 'list') {
            this.elements.topicsGrid.classList.add('list-view');
        } else {
            this.elements.topicsGrid.classList.remove('list-view');
        }
    }
};
// ============================================
// 6. SEARCH FUNCTIONALITY
// ============================================

GeoMasterApp.initSearch = function() {
    const searchInput = this.elements.searchInput;
    const searchResults = this.elements.searchResults;
    const searchClear = this.elements.searchClear;
    
    if (!searchInput) return;
    
    // Debounced search
    let searchTimeout;
    
    searchInput.addEventListener('input', (e) => {
        clearTimeout(searchTimeout);
        const query = e.target.value.trim();
        
        searchTimeout = setTimeout(() => {
            this.handleSearch(query);
        }, 300);
    });
    
    // Focus search on Ctrl+K
    document.addEventListener('keydown', (e) => {
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
            e.preventDefault();
            searchInput.focus();
        }
    });
    
    // Clear search
    if (searchClear) {
        searchClear.addEventListener('click', () => {
            searchInput.value = '';
            this.state.searchQuery = '';
            this.hideSearchResults();
            this.applyFilters();
        });
    }
    
    // Close search results on outside click
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.search-container')) {
            this.hideSearchResults();
        }
    });
    
    // Handle search input focus
    searchInput.addEventListener('focus', () => {
        if (searchInput.value.trim()) {
            this.handleSearch(searchInput.value.trim());
        }
    });
};

GeoMasterApp.handleSearch = function(query) {
    this.state.searchQuery = query;
    
    if (!query) {
        this.hideSearchResults();
        this.applyFilters();
        return;
    }
    
    const results = this.searchTopics(query);
    this.showSearchResults(results);
    
    // Also filter the main grid
    this.applyFilters();
};

GeoMasterApp.searchTopics = function(query) {
    const q = query.toLowerCase();
    
    return this.state.allTopics.filter(topic => {
        // Search in name
        if (topic.name.toLowerCase().includes(q)) return true;
        
        // Search in category
        if (topic.category.toLowerCase().includes(q)) return true;
        
        // Search in quick facts
        if (topic.quickFacts && topic.quickFacts.some(f => f.toLowerCase().includes(q))) return true;
        
        // Search in concept blocks
        if (topic.conceptBlocks) {
            for (const block of topic.conceptBlocks) {
                if (block.title.toLowerCase().includes(q)) return true;
                if (block.points && block.points.some(p => p.toLowerCase().includes(q))) return true;
            }
        }
        
        // Search in memory hooks
        if (topic.memoryHooks) {
            for (const hook of topic.memoryHooks) {
                if (hook.title.toLowerCase().includes(q)) return true;
                if (hook.content.toLowerCase().includes(q)) return true;
            }
        }
        
        return false;
    }).slice(0, 8); // Limit to 8 results
};

GeoMasterApp.showSearchResults = function(results) {
    const container = this.elements.searchResults;
    if (!container) return;
    
    const content = container.querySelector('.search-results-content');
    if (!content) return;
    
    if (results.length === 0) {
        content.innerHTML = `
            <div class="search-no-results">
                <span style="font-size: 32px; opacity: 0.5;">🔍</span>
                <p>No topics found</p>
                <span style="font-size: 12px; color: var(--text-muted);">Try different keywords</span>
            </div>
        `;
    } else {
        content.innerHTML = results.map(topic => {
            const categoryInfo = this.categories[topic.category] || {};
            return `
                <div class="search-result-item" data-id="${topic.id}">
                    <span class="search-result-icon">${topic.icon}</span>
                    <div class="search-result-info">
                        <div class="search-result-name">${this.highlightMatch(topic.name, this.state.searchQuery)}</div>
                        <div class="search-result-category">${categoryInfo.icon || ''} ${categoryInfo.name || topic.category}</div>
                    </div>
                </div>
            `;
        }).join('');
        
        // Add click handlers
        content.querySelectorAll('.search-result-item').forEach(item => {
            item.addEventListener('click', () => {
                const topicId = item.dataset.id;
                this.hideSearchResults();
                this.elements.searchInput.value = '';
                this.state.searchQuery = '';
                this.openTopicModal(topicId);
            });
        });
    }
    
    container.classList.add('active');
};

GeoMasterApp.hideSearchResults = function() {
    if (this.elements.searchResults) {
        this.elements.searchResults.classList.remove('active');
    }
};

GeoMasterApp.highlightMatch = function(text, query) {
    if (!query) return text;
    
    const regex = new RegExp(`(${this.escapeRegex(query)})`, 'gi');
    return text.replace(regex, '<mark style="background: var(--accent-primary); color: var(--bg-primary); padding: 0 2px; border-radius: 2px;">$1</mark>');
};

GeoMasterApp.escapeRegex = function(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
};

// ============================================
// 7. MODAL MANAGEMENT
// ============================================

GeoMasterApp.openTopicModal = function(topicId) {
    const topic = this.getTopicById(topicId);
    if (!topic) {
        this.showToast('Error', 'Topic not found', 'error');
        return;
    }
    
    this.state.currentTopic = topic;
    this.state.isModalOpen = true;
    
    // Find topic index in filtered list
    this.state.currentTopicIndex = this.state.filteredTopics.findIndex(t => t.id === topicId);
    
    // Update modal header
    this.updateModalHeader(topic);
    
    // Set theme background
    this.setModalTheme(topic.theme || 'default');
    
    // Reset to first section
    this.state.activeSection = 'mindmap';
    this.updateActiveSectionTab();
    
    // Render all content sections
    this.renderModalContent(topic);
    
    // Update navigation
    this.updateModalNavigation();
    
    // Update bookmark button
    this.updateModalBookmarkButton(topicId);
    
    // Mark as in progress
    this.markTopicInProgress(topicId);
    
    // Show modal
    if (this.elements.topicModal) {
        this.elements.topicModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    
    // Log activity
    this.logActivity('viewed', topic);
    
    // Focus management for accessibility
    setTimeout(() => {
        const closeBtn = this.elements.modalClose;
        if (closeBtn) closeBtn.focus();
    }, 100);
};

GeoMasterApp.closeTopicModal = function() {
    this.state.isModalOpen = false;
    this.state.currentTopic = null;
    
    if (this.elements.topicModal) {
        this.elements.topicModal.classList.remove('active');
        document.body.style.overflow = '';
    }
    
    // Clear theme particles
    this.clearModalParticles();
    
    // Re-render topics to update progress indicators
    this.renderTopics();
};

GeoMasterApp.updateModalHeader = function(topic) {
    if (this.elements.modalIcon) {
        this.elements.modalIcon.textContent = topic.icon;
    }
    
    if (this.elements.modalTitle) {
        this.elements.modalTitle.textContent = topic.name;
    }
    
    if (this.elements.modalCategory) {
        const categoryInfo = this.categories[topic.category] || {};
        this.elements.modalCategory.textContent = `${categoryInfo.icon || ''} ${categoryInfo.name || topic.category}`;
    }
    
    if (this.elements.modalDifficulty) {
        this.elements.modalDifficulty.textContent = topic.difficulty;
        this.elements.modalDifficulty.className = `difficulty-badge ${topic.difficulty}`;
    }
    
    if (this.elements.modalRelevance) {
        const stars = { high: '⭐⭐⭐', medium: '⭐⭐', low: '⭐' };
        this.elements.modalRelevance.textContent = stars[topic.upscRelevance] || '⭐⭐';
    }
};

GeoMasterApp.setModalTheme = function(theme) {
    const modalThemeBg = this.elements.modalThemeBg;
    if (!modalThemeBg) return;
    
    // Remove all theme classes
    const themeClasses = [
        'theme-tectonic', 'theme-volcanic', 'theme-earthquake',
        'theme-atmosphere', 'theme-wind', 'theme-cyclone', 'theme-monsoon',
        'theme-ocean', 'theme-current', 'theme-tide',
        'theme-soil', 'theme-forest', 'theme-biome',
        'theme-himalaya', 'theme-river', 'theme-plateau', 'theme-coastal', 'theme-desert',
        'theme-agriculture', 'theme-industry', 'theme-population',
        'theme-environment', 'theme-climate_change', 'theme-models'
    ];
    
    themeClasses.forEach(cls => modalThemeBg.classList.remove(cls));
    
    // Add new theme class
    modalThemeBg.classList.add(`theme-${theme}`);
    
    // Generate theme-specific particles
    this.generateModalParticles(theme);
};

GeoMasterApp.generateModalParticles = function(theme) {
    const container = document.getElementById('modalParticles');
    if (!container) return;
    
    // Clear existing particles
    container.innerHTML = '';
    
    const particleCount = 20;
    
    switch (theme) {
        case 'volcanic':
            for (let i = 0; i < particleCount; i++) {
                const ember = document.createElement('div');
                ember.className = 'ember';
                ember.style.left = `${Math.random() * 100}%`;
                ember.style.animationDelay = `${Math.random() * 3}s`;
                ember.style.animationDuration = `${2 + Math.random() * 2}s`;
                container.appendChild(ember);
            }
            break;
            
        case 'monsoon':
        case 'cyclone':
            for (let i = 0; i < 30; i++) {
                const drop = document.createElement('div');
                drop.className = theme === 'monsoon' ? 'monsoon-drop' : 'raindrop';
                drop.style.left = `${Math.random() * 100}%`;
                drop.style.animationDelay = `${Math.random() * 2}s`;
                drop.style.animationDuration = `${0.5 + Math.random() * 0.5}s`;
                container.appendChild(drop);
            }
            break;
            
        case 'ocean':
        case 'oceanography':
            for (let i = 0; i < 15; i++) {
                const bubble = document.createElement('div');
                bubble.className = 'bubble';
                bubble.style.left = `${Math.random() * 100}%`;
                bubble.style.width = `${5 + Math.random() * 10}px`;
                bubble.style.height = bubble.style.width;
                bubble.style.animationDelay = `${Math.random() * 5}s`;
                bubble.style.animationDuration = `${4 + Math.random() * 4}s`;
                container.appendChild(bubble);
            }
            break;
            
        case 'himalaya':
            for (let i = 0; i < 25; i++) {
                const snowflake = document.createElement('div');
                snowflake.className = 'snowflake';
                snowflake.textContent = '❄';
                snowflake.style.left = `${Math.random() * 100}%`;
                snowflake.style.fontSize = `${8 + Math.random() * 8}px`;
                snowflake.style.animationDelay = `${Math.random() * 5}s`;
                snowflake.style.animationDuration = `${5 + Math.random() * 5}s`;
                container.appendChild(snowflake);
            }
            break;
            
        case 'forest':
        case 'biogeography':
            const leaves = ['🍃', '🍂', '🌿'];
            for (let i = 0; i < 10; i++) {
                const leaf = document.createElement('div');
                leaf.className = 'falling-leaf';
                leaf.textContent = leaves[Math.floor(Math.random() * leaves.length)];
                leaf.style.left = `${Math.random() * 100}%`;
                leaf.style.animationDelay = `${Math.random() * 10}s`;
                leaf.style.animationDuration = `${8 + Math.random() * 5}s`;
                container.appendChild(leaf);
            }
            break;
            
        case 'wind':
        case 'atmosphere':
            for (let i = 0; i < 10; i++) {
                const line = document.createElement('div');
                line.className = 'wind-line';
                line.style.top = `${Math.random() * 100}%`;
                line.style.width = `${50 + Math.random() * 100}px`;
                line.style.animationDelay = `${Math.random() * 3}s`;
                line.style.animationDuration = `${2 + Math.random() * 2}s`;
                container.appendChild(line);
            }
            break;
            
        case 'desert':
            for (let i = 0; i < 30; i++) {
                const sand = document.createElement('div');
                sand.className = 'sand-particle';
                sand.style.left = `${Math.random() * 100}%`;
                sand.style.top = `${Math.random() * 100}%`;
                sand.style.animationDelay = `${Math.random() * 5}s`;
                container.appendChild(sand);
            }
            break;
            
        case 'tectonic':
        case 'earthquake':
            for (let i = 0; i < 5; i++) {
                const line = document.createElement('div');
                line.className = 'seismic-line';
                line.style.top = `${20 + i * 15}%`;
                line.style.animationDelay = `${i * 0.3}s`;
                container.appendChild(line);
            }
            break;
    }
};

GeoMasterApp.clearModalParticles = function() {
    const container = document.getElementById('modalParticles');
    if (container) {
        container.innerHTML = '';
    }
};

GeoMasterApp.updateModalNavigation = function() {
    const total = this.state.filteredTopics.length;
    const current = this.state.currentTopicIndex + 1;
    
    if (this.elements.currentTopicNum) {
        this.elements.currentTopicNum.textContent = current;
    }
    
    if (this.elements.totalTopicNum) {
        this.elements.totalTopicNum.textContent = total;
    }
    
    // Enable/disable nav buttons
    if (this.elements.prevTopic) {
        this.elements.prevTopic.disabled = this.state.currentTopicIndex <= 0;
    }
    
    if (this.elements.nextTopic) {
        this.elements.nextTopic.disabled = this.state.currentTopicIndex >= total - 1;
    }
};

GeoMasterApp.navigateTopic = function(direction) {
    const newIndex = this.state.currentTopicIndex + direction;
    
    if (newIndex < 0 || newIndex >= this.state.filteredTopics.length) {
        return;
    }
    
    const newTopic = this.state.filteredTopics[newIndex];
    if (newTopic) {
        this.openTopicModal(newTopic.id);
    }
};

GeoMasterApp.updateModalBookmarkButton = function(topicId) {
    const btn = this.elements.modalBookmark;
    if (!btn) return;
    
    const isBookmarked = this.isTopicBookmarked(topicId);
    btn.classList.toggle('bookmarked', isBookmarked);
    btn.setAttribute('aria-label', isBookmarked ? 'Remove bookmark' : 'Add bookmark');
};

GeoMasterApp.switchSection = function(sectionId) {
    this.state.activeSection = sectionId;
    this.updateActiveSectionTab();
    
    // Show/hide sections
    document.querySelectorAll('.content-section').forEach(section => {
        section.classList.remove('active');
    });
    
    const targetSection = document.getElementById(`section-${sectionId}`);
    if (targetSection) {
        targetSection.classList.add('active');
    }
};

GeoMasterApp.updateActiveSectionTab = function() {
    document.querySelectorAll('.nav-tab').forEach(tab => {
        tab.classList.remove('active');
        if (tab.dataset.section === this.state.activeSection) {
            tab.classList.add('active');
        }
    });
};

// ============================================
// 8. MIND MAP RENDERING
// ============================================

GeoMasterApp.renderMindMap = function(topic) {
    const container = this.elements.mindmapCanvas;
    if (!container || !topic.mindMap) return;
    
    const mindMap = topic.mindMap;
    
    // Set central node
    const centralNode = container.querySelector('.mindmap-central');
    if (centralNode) {
        centralNode.innerHTML = `<span class="central-text">${mindMap.central}</span>`;
    }
    
    // Render branches
    const branchesContainer = container.querySelector('.mindmap-branches') || container;
    
    // Clear existing branches except central
    const existingBranches = branchesContainer.querySelectorAll('.mindmap-branch');
    existingBranches.forEach(b => b.remove());
    
    if (!mindMap.branches || mindMap.branches.length === 0) return;
    
    const numBranches = mindMap.branches.length;
    const angleStep = 360 / numBranches;
    const radius = 180; // Distance from center
    
    mindMap.branches.forEach((branch, index) => {
        const angle = (angleStep * index) - 90; // Start from top
        const angleRad = (angle * Math.PI) / 180;
        
        const x = Math.cos(angleRad) * radius;
        const y = Math.sin(angleRad) * radius;
        
        const branchEl = document.createElement('div');
        branchEl.className = 'mindmap-branch';
        branchEl.style.cssText = `
            position: absolute;
            left: calc(50% + ${x}px);
            top: calc(50% + ${y}px);
            transform: translate(-50%, -50%);
            --branch-color: ${branch.color || '#4ECDC4'};
        `;
        
        // Create branch node
        const nodeEl = document.createElement('div');
        nodeEl.className = 'branch-node';
        nodeEl.innerHTML = `
            <div class="branch-title" style="color: ${branch.color}">${branch.name}</div>
            ${branch.children && branch.children.length > 0 ? `
                <div class="branch-children">
                    ${branch.children.map(child => `
                        <div class="branch-child">${child}</div>
                    `).join('')}
                </div>
            ` : ''}
        `;
        
        branchEl.appendChild(nodeEl);
        
        // Create connecting line
        const lineEl = document.createElement('div');
        lineEl.className = 'branch-line';
        
        // Calculate line properties
        const lineLength = Math.sqrt(x * x + y * y) - 75; // Subtract central node radius
        const lineAngle = Math.atan2(y, x) * (180 / Math.PI);
        
        lineEl.style.cssText = `
            position: absolute;
            left: 50%;
            top: 50%;
            width: ${lineLength}px;
            transform: rotate(${lineAngle}deg);
            transform-origin: left center;
            background: ${branch.color || '#4ECDC4'};
        `;
        
        branchesContainer.appendChild(lineEl);
        branchesContainer.appendChild(branchEl);
    });
    
    // Add animation
    this.animateMindMap();
};

GeoMasterApp.animateMindMap = function() {
    const branches = document.querySelectorAll('.mindmap-branch');
    const lines = document.querySelectorAll('.branch-line');
    
    // Animate lines first
    lines.forEach((line, index) => {
        line.style.opacity = '0';
        line.style.transform = line.style.transform + ' scaleX(0)';
        
        setTimeout(() => {
            line.style.transition = 'all 0.5s ease-out';
            line.style.opacity = '0.6';
            line.style.transform = line.style.transform.replace('scaleX(0)', 'scaleX(1)');
        }, 200 + index * 100);
    });
    
    // Then animate branches
    branches.forEach((branch, index) => {
        branch.style.opacity = '0';
        branch.style.transform = branch.style.transform + ' scale(0)';
        
        setTimeout(() => {
            branch.style.transition = 'all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
            branch.style.opacity = '1';
            branch.style.transform = branch.style.transform.replace('scale(0)', 'scale(1)');
        }, 400 + index * 100);
    });
};

// Mind Map Controls
GeoMasterApp.initMindMapControls = function() {
    let scale = 1;
    const minScale = 0.5;
    const maxScale = 2;
    
    const canvas = this.elements.mindmapCanvas;
    if (!canvas) return;
    
    const zoomIn = document.getElementById('zoomIn');
    const zoomOut = document.getElementById('zoomOut');
    const resetZoom = document.getElementById('resetZoom');
    const fullscreen = document.getElementById('fullscreen');
    
    const updateZoom = () => {
        canvas.style.transform = `scale(${scale})`;
    };
    
    if (zoomIn) {
        zoomIn.addEventListener('click', () => {
            if (scale < maxScale) {
                scale += 0.1;
                updateZoom();
            }
        });
    }
    
    if (zoomOut) {
        zoomOut.addEventListener('click', () => {
            if (scale > minScale) {
                scale -= 0.1;
                updateZoom();
            }
        });
    }
    
    if (resetZoom) {
        resetZoom.addEventListener('click', () => {
            scale = 1;
            updateZoom();
        });
    }
    
    if (fullscreen) {
        fullscreen.addEventListener('click', () => {
            const container = this.elements.mindmapContainer;
            if (!container) return;
            
            if (!document.fullscreenElement) {
                container.requestFullscreen().catch(err => {
                    console.log('Fullscreen error:', err);
                });
            } else {
                document.exitFullscreen();
            }
        });
    }
    
    // Mouse wheel zoom
    canvas.addEventListener('wheel', (e) => {
        if (e.ctrlKey) {
            e.preventDefault();
            const delta = e.deltaY > 0 ? -0.1 : 0.1;
            const newScale = Math.max(minScale, Math.min(maxScale, scale + delta));
            scale = newScale;
            updateZoom();
        }
    }, { passive: false });
};

// ============================================
// 9. CONTENT SECTION RENDERING
// ============================================

GeoMasterApp.renderModalContent = function(topic) {
    // Render all sections
    this.renderMindMap(topic);
    this.renderMemoryHooks(topic);
    this.renderConceptBlocks(topic);
    this.renderDiagrams(topic);
    this.renderQuickFacts(topic);
    this.renderUpscTraps(topic);
    this.renderRevisionBox(topic);
    this.renderPYQs(topic);
    
    // Update mark complete button
    this.updateMarkCompleteButton(topic.id);
};

GeoMasterApp.renderMemoryHooks = function(topic) {
    const container = this.elements.memoryHooksContainer;
    if (!container) return;
    
    if (!topic.memoryHooks || topic.memoryHooks.length === 0) {
        container.innerHTML = `
            <div class="empty-section">
                <span class="empty-icon">💡</span>
                <p>No memory hooks available for this topic</p>
            </div>
        `;
        return;
    }
    
    container.innerHTML = topic.memoryHooks.map((hook, index) => `
        <div class="memory-hook-card" data-type="${hook.type}" style="animation-delay: ${index * 0.1}s">
            <div class="hook-header">
                <div class="hook-icon">${hook.icon || '💡'}</div>
                <div class="hook-meta">
                    <span class="hook-type">${hook.type}</span>
                    <h4 class="hook-title">${hook.title}</h4>
                </div>
            </div>
            <div class="hook-content">
                ${hook.content}
            </div>
        </div>
    `).join('');
};

GeoMasterApp.renderConceptBlocks = function(topic) {
    const container = this.elements.conceptBlocksContainer;
    if (!container) return;
    
    if (!topic.conceptBlocks || topic.conceptBlocks.length === 0) {
        container.innerHTML = `
            <div class="empty-section">
                <span class="empty-icon">📦</span>
                <p>No concept blocks available for this topic</p>
            </div>
        `;
        return;
    }
    
    container.innerHTML = topic.conceptBlocks.map((block, index) => `
        <div class="concept-block" style="animation-delay: ${index * 0.1}s">
            <div class="concept-header">
                <div class="concept-icon">${block.icon || '📦'}</div>
                <h4 class="concept-title">${block.title}</h4>
            </div>
            <div class="concept-points">
                ${block.points.map(point => `
                    <div class="concept-point">
                        <span class="point-bullet"></span>
                        <span class="point-text">${this.formatPointText(point)}</span>
                    </div>
                `).join('')}
            </div>
        </div>
    `).join('');
};

GeoMasterApp.formatPointText = function(text) {
    // Remove leading bullet if present
    text = text.replace(/^[•\-\*]\s*/, '');
    
    // Highlight text between ** **
    text = text.replace(/\*\*(.*?)\*\*/g, '<span class="point-highlight">$1</span>');
    
    // Highlight text in CAPS (3+ letters)
    text = text.replace(/\b([A-Z]{3,})\b/g, '<span class="point-highlight">$1</span>');
    
    return text;
};

GeoMasterApp.renderDiagrams = function(topic) {
    const container = this.elements.diagramsContainer;
    if (!container) return;
    
    if (!topic.diagrams || topic.diagrams.length === 0) {
        container.innerHTML = `
            <div class="empty-section">
                <span class="empty-icon">🖼️</span>
                <p>No diagrams available for this topic</p>
            </div>
        `;
        return;
    }
    
    container.innerHTML = topic.diagrams.map((diagram, index) => `
        <div class="diagram-card" style="animation-delay: ${index * 0.1}s">
            <div class="diagram-preview">
                <div class="diagram-placeholder">
                    <span class="diagram-placeholder-icon">${this.getDiagramIcon(diagram.type)}</span>
                    <span class="diagram-placeholder-text">${diagram.type.replace('-', ' ').toUpperCase()}</span>
                </div>
                <button class="diagram-expand-btn" aria-label="Expand diagram">⛶</button>
            </div>
            <div class="diagram-info">
                <span class="diagram-type">📊 ${diagram.type.replace('-', ' ')}</span>
                <h4 class="diagram-title">${diagram.title}</h4>
                <p class="diagram-description">${diagram.description}</p>
            </div>
        </div>
    `).join('');
};

GeoMasterApp.getDiagramIcon = function(type) {
    const icons = {
        'comparison-chart': '📊',
        'cross-section': '🔍',
        'map': '🗺️',
        'flowchart': '🔀',
        'cycle': '🔄',
        'hierarchy': '📈',
        'timeline': '📅'
    };
    return icons[type] || '📋';
};

GeoMasterApp.renderQuickFacts = function(topic) {
    const container = this.elements.quickFactsContainer;
    if (!container) return;
    
    if (!topic.quickFacts || topic.quickFacts.length === 0) {
        container.innerHTML = `
            <div class="empty-section">
                <span class="empty-icon">⚡</span>
                <p>No quick facts available for this topic</p>
            </div>
        `;
        return;
    }
    
    container.innerHTML = topic.quickFacts.map((fact, index) => {
        // Extract emoji if present at start
        const emojiMatch = fact.match(/^(\p{Emoji}+)/u);
        const emoji = emojiMatch ? emojiMatch[1] : '📌';
        const text = emojiMatch ? fact.slice(emojiMatch[1].length).trim() : fact;
        
        return `
            <div class="quick-fact" style="animation-delay: ${index * 0.05}s">
                <div class="fact-icon">${emoji}</div>
                <div class="fact-content">
                    <span class="fact-text">${this.formatFactText(text)}</span>
                </div>
            </div>
        `;
    }).join('');
};

GeoMasterApp.formatFactText = function(text) {
    // Highlight numbers
    text = text.replace(/(\d+(?:\.\d+)?(?:\s*%)?)/g, '<span class="fact-number">$1</span>');
    
    // Highlight text in CAPS
    text = text.replace(/\b([A-Z]{2,})\b/g, '<span class="fact-highlight">$1</span>');
    
    return text;
};

GeoMasterApp.renderUpscTraps = function(topic) {
    const container = this.elements.trapsContainer;
    if (!container) return;
    
    if (!topic.upscTraps || topic.upscTraps.length === 0) {
        container.innerHTML = `
            <div class="empty-section">
                <span class="empty-icon">⚠️</span>
                <p>No UPSC traps documented for this topic</p>
            </div>
        `;
        return;
    }
    
    container.innerHTML = topic.upscTraps.map((trap, index) => `
        <div class="trap-card" style="animation-delay: ${index * 0.1}s">
            <div class="trap-header">
                <div class="trap-icon">⚠️</div>
                <div class="trap-label">
                    <span class="trap-badge">Common Confusion</span>
                    <h4 class="trap-title">${trap.trap}</h4>
                </div>
            </div>
            <div class="trap-content">
                <div class="trap-sections">
                    <div class="trap-wrong">
                        <div class="trap-section-header">
                            <span class="trap-section-icon">❌</span>
                            <span class="trap-section-title">Wrong Understanding</span>
                        </div>
                        <p class="trap-section-text">${trap.trap}</p>
                    </div>
                    <div class="trap-arrow">→</div>
                    <div class="trap-right">
                        <div class="trap-section-header">
                            <span class="trap-section-icon">✅</span>
                            <span class="trap-section-title">Correct Understanding</span>
                        </div>
                        <p class="trap-section-text">${trap.clarity}</p>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
};

GeoMasterApp.renderRevisionBox = function(topic) {
    const container = this.elements.revisionContainer;
    if (!container) return;
    
    if (!topic.revisionBox) {
        container.innerHTML = `
            <div class="empty-section">
                <span class="empty-icon">📝</span>
                <p>No revision summary available for this topic</p>
            </div>
        `;
        return;
    }
    
    const revision = topic.revisionBox;
    
    container.innerHTML = `
        <div class="revision-box">
            <div class="revision-header">
                <span class="revision-icon">⚡</span>
                <h3 class="revision-title">${revision.title || '30-Second Revision'}</h3>
                <span class="revision-timer">
                    <span>⏱️</span>
                    <span>30 sec</span>
                </span>
            </div>
            <div class="revision-points">
                ${revision.points.map((point, index) => `
                    <div class="revision-point" style="animation-delay: ${index * 0.1}s">
                        <span class="revision-bullet">${index + 1}</span>
                        <span class="revision-text">${this.formatRevisionPoint(point)}</span>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
};

GeoMasterApp.formatRevisionPoint = function(text) {
    // Remove leading bullet
    text = text.replace(/^[•\-\*]\s*/, '');
    
    // Highlight keywords (text before colon)
    text = text.replace(/^([^:]+):/g, '<span class="revision-keyword">$1:</span>');
    
    // Highlight text in brackets
    text = text.replace(/\(([^)]+)\)/g, '(<span class="revision-keyword">$1</span>)');
    
    return text;
};

GeoMasterApp.renderPYQs = function(topic) {
    const container = this.elements.pyqsContainer;
    if (!container) return;
    
    if (!topic.pyqs || topic.pyqs.length === 0) {
        container.innerHTML = `
            <div class="pyqs-empty">
                <span class="pyqs-empty-icon">📚</span>
                <p class="pyqs-empty-text">No previous year questions available for this topic</p>
            </div>
        `;
        return;
    }
    
    container.innerHTML = topic.pyqs.map((pyq, index) => `
        <div class="pyq-card" style="animation-delay: ${index * 0.1}s">
            <div class="pyq-header">
                <div class="pyq-meta">
                    <div class="pyq-year">${pyq.year}</div>
                    <div class="pyq-info">
                        <span class="pyq-exam">UPSC CSE</span>
                        <span class="pyq-paper">${pyq.type === 'Prelims' ? 'Preliminary Examination' : 'Main Examination'}</span>
                    </div>
                </div>
                <span class="pyq-type ${pyq.type.toLowerCase()}">${pyq.type}</span>
            </div>
            <div class="pyq-content">
                <p class="pyq-question">${pyq.question}</p>
                ${pyq.options ? `
                    <div class="pyq-options">
                        ${pyq.options.map((opt, i) => `
                            <div class="pyq-option" data-index="${i}">
                                <span class="option-letter">${String.fromCharCode(65 + i)}</span>
                                <span class="option-text">${opt}</span>
                            </div>
                        `).join('')}
                    </div>
                ` : ''}
            </div>
            <div class="pyq-footer">
                <button class="pyq-hint-btn">
                    <span>💡</span>
                    <span>Show Hint</span>
                </button>
                ${pyq.options ? `
                    <button class="pyq-check-btn">
                        <span>✓</span>
                        <span>Check Answer</span>
                    </button>
                ` : ''}
            </div>
        </div>
    `).join('');
};

GeoMasterApp.updateMarkCompleteButton = function(topicId) {
    const btn = this.elements.markCompleteBtn;
    if (!btn) return;
    
    const isCompleted = this.userData.completedTopics.includes(topicId);
    
    if (isCompleted) {
        btn.classList.add('completed');
        btn.innerHTML = `
            <span class="btn-icon">✓</span>
            <span class="btn-text">Completed!</span>
        `;
    } else {
        btn.classList.remove('completed');
        btn.innerHTML = `
            <span class="btn-icon">✓</span>
            <span class="btn-text">Mark as Completed</span>
        `;
    }
};
// ============================================
// 10. BOOKMARKS SYSTEM
// ============================================

GeoMasterApp.toggleBookmark = function(topicId) {
    const index = this.userData.bookmarks.indexOf(topicId);
    
    if (index === -1) {
        // Add bookmark
        this.userData.bookmarks.push(topicId);
        this.showToast('Bookmarked! 🔖', 'Topic added to your bookmarks', 'success');
        this.logActivity('bookmarked', this.getTopicById(topicId));
    } else {
        // Remove bookmark
        this.userData.bookmarks.splice(index, 1);
        this.showToast('Removed', 'Topic removed from bookmarks', 'info');
    }
    
    // Save to localStorage
    this.saveUserData();
    
    // Update UI
    this.updateBookmarkCount();
    this.updateBookmarkButtons(topicId);
    this.renderBookmarksSidebar();
    
    // Check achievements
    this.checkAchievements();
};

GeoMasterApp.updateBookmarkCount = function() {
    const count = this.userData.bookmarks.length;
    
    if (this.elements.bookmarkCount) {
        this.elements.bookmarkCount.textContent = count;
        this.elements.bookmarkCount.style.display = count > 0 ? 'flex' : 'none';
    }
};

GeoMasterApp.updateBookmarkButtons = function(topicId) {
    // Update card bookmark button
    const cardBtn = document.querySelector(`.card-bookmark[data-id="${topicId}"]`);
    if (cardBtn) {
        cardBtn.classList.toggle('bookmarked', this.isTopicBookmarked(topicId));
    }
    
    // Update modal bookmark button
    if (this.state.currentTopic && this.state.currentTopic.id === topicId) {
        this.updateModalBookmarkButton(topicId);
    }
};

GeoMasterApp.openBookmarksSidebar = function() {
    if (this.elements.bookmarksSidebar) {
        this.elements.bookmarksSidebar.classList.add('active');
        this.renderBookmarksSidebar();
    }
};

GeoMasterApp.closeBookmarksSidebar = function() {
    if (this.elements.bookmarksSidebar) {
        this.elements.bookmarksSidebar.classList.remove('active');
    }
};

GeoMasterApp.renderBookmarksSidebar = function() {
    const list = this.elements.bookmarksList;
    const empty = this.elements.bookmarksEmpty;
    
    if (!list) return;
    
    if (this.userData.bookmarks.length === 0) {
        list.innerHTML = '';
        if (empty) empty.style.display = 'flex';
        return;
    }
    
    if (empty) empty.style.display = 'none';
    
    list.innerHTML = this.userData.bookmarks.map(topicId => {
        const topic = this.getTopicById(topicId);
        if (!topic) return '';
        
        const categoryInfo = this.categories[topic.category] || {};
        
        return `
            <div class="bookmark-item" data-id="${topic.id}">
                <span class="bookmark-icon">${topic.icon}</span>
                <div class="bookmark-info">
                    <span class="bookmark-name">${topic.name}</span>
                    <span class="bookmark-category">${categoryInfo.icon || ''} ${categoryInfo.name || topic.category}</span>
                </div>
                <button class="bookmark-remove" data-id="${topic.id}" aria-label="Remove bookmark">
                    ✕
                </button>
            </div>
        `;
    }).join('');
    
    // Add click handlers
    list.querySelectorAll('.bookmark-item').forEach(item => {
        item.addEventListener('click', (e) => {
            if (e.target.closest('.bookmark-remove')) {
                return;
            }
            const topicId = item.dataset.id;
            this.closeBookmarksSidebar();
            this.openTopicModal(topicId);
        });
    });
    
    // Add remove handlers
    list.querySelectorAll('.bookmark-remove').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const topicId = btn.dataset.id;
            this.toggleBookmark(topicId);
        });
    });
};

GeoMasterApp.clearAllBookmarks = function() {
    if (this.userData.bookmarks.length === 0) {
        this.showToast('No Bookmarks', 'You have no bookmarks to clear', 'info');
        return;
    }
    
    if (confirm('Are you sure you want to clear all bookmarks?')) {
        this.userData.bookmarks = [];
        this.saveUserData();
        this.updateBookmarkCount();
        this.renderBookmarksSidebar();
        this.renderTopics(); // Update card bookmark buttons
        this.showToast('Cleared', 'All bookmarks have been removed', 'success');
    }
};

// ============================================
// 11. PROGRESS TRACKING
// ============================================

GeoMasterApp.markTopicInProgress = function(topicId) {
    // Skip if already completed
    if (this.userData.completedTopics.includes(topicId)) {
        return;
    }
    
    // Add to in-progress if not already there
    if (!this.userData.inProgressTopics.includes(topicId)) {
        this.userData.inProgressTopics.push(topicId);
        this.saveUserData();
        this.updateStats();
    }
};

GeoMasterApp.markTopicComplete = function(topicId) {
    // Remove from in-progress
    const inProgressIndex = this.userData.inProgressTopics.indexOf(topicId);
    if (inProgressIndex !== -1) {
        this.userData.inProgressTopics.splice(inProgressIndex, 1);
    }
    
    // Add to completed if not already there
    if (!this.userData.completedTopics.includes(topicId)) {
        this.userData.completedTopics.push(topicId);
        
        const topic = this.getTopicById(topicId);
        this.logActivity('completed', topic);
        
        // Update last studied date
        this.userData.lastStudied = new Date().toISOString().split('T')[0];
        
        // Update streak
        this.updateStreak();
        
        // Save
        this.saveUserData();
        
        // Show celebration
        this.showCompletionCelebration(topic);
        
        // Check achievements
        this.checkAchievements();
        
        // Update UI
        this.updateStats();
        this.updateProgress();
        this.updateMarkCompleteButton(topicId);
    } else {
        // Already completed - toggle off
        const index = this.userData.completedTopics.indexOf(topicId);
        this.userData.completedTopics.splice(index, 1);
        
        // Add back to in-progress
        if (!this.userData.inProgressTopics.includes(topicId)) {
            this.userData.inProgressTopics.push(topicId);
        }
        
        this.saveUserData();
        this.updateStats();
        this.updateProgress();
        this.updateMarkCompleteButton(topicId);
        
        this.showToast('Unmarked', 'Topic marked as incomplete', 'info');
    }
};

GeoMasterApp.showCompletionCelebration = function(topic) {
    // Show toast
    this.showToast(
        'Topic Completed! 🎉',
        `Great job mastering ${topic.name}!`,
        'success'
    );
    
    // Create confetti effect
    this.createConfetti();
};

GeoMasterApp.createConfetti = function() {
    const colors = ['#FF6B6B', '#4ECDC4', '#FFE66D', '#95E1D3', '#F38181'];
    const confettiCount = 50;
    
    const container = document.createElement('div');
    container.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 9999;
        overflow: hidden;
    `;
    
    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        const color = colors[Math.floor(Math.random() * colors.length)];
        const size = Math.random() * 10 + 5;
        const left = Math.random() * 100;
        const delay = Math.random() * 0.5;
        const duration = Math.random() * 2 + 2;
        
        confetti.style.cssText = `
            position: absolute;
            top: -20px;
            left: ${left}%;
            width: ${size}px;
            height: ${size}px;
            background: ${color};
            border-radius: ${Math.random() > 0.5 ? '50%' : '2px'};
            animation: confettiFall ${duration}s ease-out ${delay}s forwards;
        `;
        
        container.appendChild(confetti);
    }
    
    // Add keyframe animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes confettiFall {
            0% {
                transform: translateY(0) rotate(0deg);
                opacity: 1;
            }
            100% {
                transform: translateY(100vh) rotate(720deg);
                opacity: 0;
            }
        }
    `;
    
    document.head.appendChild(style);
    document.body.appendChild(container);
    
    // Remove after animation
    setTimeout(() => {
        container.remove();
        style.remove();
    }, 3000);
};

GeoMasterApp.updateStreak = function() {
    const today = new Date().toISOString().split('T')[0];
    const lastStudied = this.userData.lastStudied;
    
    if (!lastStudied) {
        // First time studying
        this.userData.streakDays = 1;
        this.userData.lastStudied = today;
        return;
    }
    
    const lastDate = new Date(lastStudied);
    const todayDate = new Date(today);
    const diffTime = todayDate - lastDate;
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 0) {
        // Same day - no change
        return;
    } else if (diffDays === 1) {
        // Consecutive day - increment streak
        this.userData.streakDays += 1;
        this.userData.lastStudied = today;
        
        // Show streak notification for milestones
        if ([3, 7, 14, 30, 50, 100].includes(this.userData.streakDays)) {
            this.showToast(
                `${this.userData.streakDays} Day Streak! 🔥`,
                'Keep up the amazing work!',
                'success'
            );
        }
    } else {
        // Streak broken
        this.userData.streakDays = 1;
        this.userData.lastStudied = today;
    }
};

GeoMasterApp.updateStats = function() {
    const completed = this.userData.completedTopics.length;
    const inProgress = this.userData.inProgressTopics.length;
    const total = this.state.allTopics.length;
    const streak = this.userData.streakDays;
    
    if (this.elements.totalTopics) {
        this.elements.totalTopics.textContent = total;
    }
    
    if (this.elements.completedTopics) {
        this.elements.completedTopics.textContent = completed;
    }
    
    if (this.elements.inProgressTopics) {
        this.elements.inProgressTopics.textContent = inProgress;
    }
    
    if (this.elements.streakDays) {
        this.elements.streakDays.textContent = streak;
    }
};

GeoMasterApp.updateProgress = function() {
    const completed = this.userData.completedTopics.length;
    const total = this.state.allTopics.length;
    const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;
    
    // Update header progress ring
    if (this.elements.progressPath) {
        this.elements.progressPath.setAttribute('stroke-dasharray', `${percentage}, 100`);
    }
    
    if (this.elements.progressText) {
        this.elements.progressText.textContent = `${percentage}%`;
    }
    
    // Update bookmark count
    this.updateBookmarkCount();
};

GeoMasterApp.logActivity = function(action, topic) {
    if (!topic) return;
    
    const activity = {
        action: action,
        topicId: topic.id,
        topicName: topic.name,
        topicIcon: topic.icon,
        timestamp: new Date().toISOString()
    };
    
    // Add to beginning of array
    this.userData.activityLog.unshift(activity);
    
    // Keep only last 50 activities
    if (this.userData.activityLog.length > 50) {
        this.userData.activityLog = this.userData.activityLog.slice(0, 50);
    }
    
    this.saveUserData();
};

GeoMasterApp.checkAchievements = function() {
    const newAchievements = [];
    
    this.achievements.forEach(achievement => {
        // Skip if already unlocked
        if (this.userData.achievements.includes(achievement.id)) {
            return;
        }
        
        // Check if condition is met
        if (achievement.condition(this.userData)) {
            this.userData.achievements.push(achievement.id);
            newAchievements.push(achievement);
        }
    });
    
    // Show achievement notifications
    newAchievements.forEach((achievement, index) => {
        setTimeout(() => {
            this.showAchievementUnlock(achievement);
        }, index * 1500);
    });
    
    if (newAchievements.length > 0) {
        this.saveUserData();
    }
};

GeoMasterApp.showAchievementUnlock = function(achievement) {
    // Show special achievement modal
    const modal = document.getElementById('achievementModal');
    if (modal) {
        const badge = document.getElementById('achievementBadge');
        const title = document.getElementById('achievementTitle');
        const desc = document.getElementById('achievementDesc');
        
        if (badge) badge.textContent = achievement.icon;
        if (title) title.textContent = achievement.title;
        if (desc) desc.textContent = achievement.desc;
        
        modal.classList.add('active');
        
        // Auto close after 5 seconds
        setTimeout(() => {
            modal.classList.remove('active');
        }, 5000);
    } else {
        // Fallback to toast
        this.showToast(
            `Achievement Unlocked! ${achievement.icon}`,
            `${achievement.title}: ${achievement.desc}`,
            'success'
        );
    }
};

GeoMasterApp.checkCategoryComplete = function(userData) {
    const categories = Object.keys(this.categories).filter(c => c !== 'all');
    
    for (const category of categories) {
        const categoryTopics = this.state.allTopics.filter(t => t.category === category);
        const completedInCategory = categoryTopics.filter(t => 
            userData.completedTopics.includes(t.id)
        );
        
        if (categoryTopics.length > 0 && completedInCategory.length === categoryTopics.length) {
            return true;
        }
    }
    
    return false;
};

GeoMasterApp.checkPhysicalComplete = function(userData) {
    const physicalCategories = ['geomorphology', 'climatology', 'oceanography', 'biogeography', 'landforms'];
    const physicalTopics = this.state.allTopics.filter(t => physicalCategories.includes(t.category));
    const completedPhysical = physicalTopics.filter(t => userData.completedTopics.includes(t.id));
    
    return physicalTopics.length > 0 && completedPhysical.length === physicalTopics.length;
};

GeoMasterApp.checkIndiaComplete = function(userData) {
    const indiaCategories = ['india-physical', 'india-climate', 'india-drainage', 'india-resources'];
    const indiaTopics = this.state.allTopics.filter(t => indiaCategories.includes(t.category));
    const completedIndia = indiaTopics.filter(t => userData.completedTopics.includes(t.id));
    
    return indiaTopics.length > 0 && completedIndia.length === indiaTopics.length;
};

// ============================================
// 12. THEME MANAGEMENT
// ============================================

GeoMasterApp.initTheme = function() {
    const savedTheme = this.userData.settings.theme || 'dark';
    this.setTheme(savedTheme);
};

GeoMasterApp.setTheme = function(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    this.userData.settings.theme = theme;
    this.saveUserData();
    
    // Update toggle button
    const toggle = this.elements.themeToggle;
    if (toggle) {
        toggle.classList.toggle('light', theme === 'light');
    }
};

GeoMasterApp.toggleTheme = function() {
    const currentTheme = this.userData.settings.theme || 'dark';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    this.setTheme(newTheme);
};

// ============================================
// 13. TOAST NOTIFICATIONS
// ============================================

GeoMasterApp.showToast = function(title, message, type = 'info', duration = 4000) {
    const container = this.elements.toastContainer;
    if (!container) return;
    
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    
    const icons = {
        success: '✓',
        error: '✕',
        warning: '⚠',
        info: 'ℹ'
    };
    
    toast.innerHTML = `
        <div class="toast-icon">${icons[type] || icons.info}</div>
        <div class="toast-content">
            <div class="toast-title">${title}</div>
            <div class="toast-message">${message}</div>
        </div>
        <button class="toast-close" aria-label="Close">✕</button>
        <div class="toast-progress" style="animation-duration: ${duration}ms"></div>
    `;
    
    // Add to container
    container.appendChild(toast);
    
    // Close button handler
    const closeBtn = toast.querySelector('.toast-close');
    closeBtn.addEventListener('click', () => {
        this.removeToast(toast);
    });
    
    // Auto remove after duration
    setTimeout(() => {
        this.removeToast(toast);
    }, duration);
    
    return toast;
};

GeoMasterApp.removeToast = function(toast) {
    if (!toast || !toast.parentNode) return;
    
    toast.classList.add('removing');
    
    setTimeout(() => {
        if (toast.parentNode) {
            toast.parentNode.removeChild(toast);
        }
    }, 300);
};

// ============================================
// 14. KEYBOARD SHORTCUTS
// ============================================

GeoMasterApp.initKeyboardShortcuts = function() {
    document.addEventListener('keydown', (e) => {
        // Ignore if typing in input
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
            // Allow Escape to close things
            if (e.key !== 'Escape') {
                return;
            }
        }
        
        // Escape - Close modals/sidebars
        if (e.key === 'Escape') {
            e.preventDefault();
            
            if (this.state.isModalOpen) {
                this.closeTopicModal();
            } else if (this.elements.bookmarksSidebar?.classList.contains('active')) {
                this.closeBookmarksSidebar();
            } else if (this.elements.searchResults?.classList.contains('active')) {
                this.hideSearchResults();
                this.elements.searchInput?.blur();
            } else if (this.elements.shortcutsModal?.classList.contains('active')) {
                this.closeShortcutsModal();
            }
            return;
        }
        
        // ? - Show keyboard shortcuts
        if (e.key === '?' && !e.ctrlKey && !e.metaKey) {
            e.preventDefault();
            this.openShortcutsModal();
            return;
        }
        
        // Modal-specific shortcuts
        if (this.state.isModalOpen) {
            // Arrow keys - Navigate sections
            if (e.key === 'ArrowLeft' && e.altKey) {
                e.preventDefault();
                this.navigateTopic(-1);
                return;
            }
            
            if (e.key === 'ArrowRight' && e.altKey) {
                e.preventDefault();
                this.navigateTopic(1);
                return;
            }
            
            // B - Toggle bookmark
            if (e.key === 'b' || e.key === 'B') {
                e.preventDefault();
                if (this.state.currentTopic) {
                    this.toggleBookmark(this.state.currentTopic.id);
                }
                return;
            }
            
            // Number keys - Switch sections
            const sectionKeys = ['1', '2', '3', '4', '5', '6', '7', '8'];
            const sections = ['mindmap', 'memory', 'concepts', 'diagrams', 'facts', 'traps', 'revision', 'pyqs'];
            
            if (sectionKeys.includes(e.key) && !e.ctrlKey && !e.metaKey) {
                const index = parseInt(e.key) - 1;
                if (index < sections.length) {
                    e.preventDefault();
                    this.switchSection(sections[index]);
                }
                return;
            }
        }
        
        // Global shortcuts
        
        // Ctrl+K - Focus search
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
            e.preventDefault();
            this.elements.searchInput?.focus();
            return;
        }
        
        // G then H - Go home (reset filters)
        if (e.key === 'g') {
            this._gPressed = true;
            setTimeout(() => {
                this._gPressed = false;
            }, 500);
            return;
        }
        
        if (e.key === 'h' && this._gPressed) {
            e.preventDefault();
            this.resetAllFilters();
            this._gPressed = false;
            return;
        }
    });
};

GeoMasterApp.openShortcutsModal = function() {
    if (this.elements.shortcutsModal) {
        this.elements.shortcutsModal.classList.add('active');
    }
};

GeoMasterApp.closeShortcutsModal = function() {
    if (this.elements.shortcutsModal) {
        this.elements.shortcutsModal.classList.remove('active');
    }
};

// ============================================
// 15. ANIMATIONS & PARTICLES
// ============================================

GeoMasterApp.initParticles = function() {
    const container = this.elements.particles;
    if (!container) return;
    
    // Create ambient particles for main page
    const particleCount = 30;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        const size = Math.random() * 4 + 2;
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        const duration = Math.random() * 20 + 10;
        const delay = Math.random() * 10;
        
        particle.style.cssText = `
            position: absolute;
            left: ${x}%;
            top: ${y}%;
            width: ${size}px;
            height: ${size}px;
            background: rgba(0, 212, 255, 0.3);
            border-radius: 50%;
            animation: particleFloat ${duration}s ease-in-out ${delay}s infinite;
        `;
        
        container.appendChild(particle);
    }
    
    // Add floating animation keyframes if not exists
    if (!document.getElementById('particleStyles')) {
        const style = document.createElement('style');
        style.id = 'particleStyles';
        style.textContent = `
            @keyframes particleFloat {
                0%, 100% {
                    transform: translate(0, 0) scale(1);
                    opacity: 0.3;
                }
                25% {
                    transform: translate(30px, -30px) scale(1.2);
                    opacity: 0.5;
                }
                50% {
                    transform: translate(-20px, -50px) scale(0.8);
                    opacity: 0.3;
                }
                75% {
                    transform: translate(-30px, 20px) scale(1.1);
                    opacity: 0.4;
                }
            }
        `;
        document.head.appendChild(style);
    }
};

GeoMasterApp.initScrollEffects = function() {
    // Scroll to top button
    const scrollBtn = this.elements.scrollTopBtn;
    
    if (scrollBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 500) {
                scrollBtn.classList.add('visible');
            } else {
                scrollBtn.classList.remove('visible');
            }
        });
        
        scrollBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    // Header scroll effect
    const header = document.querySelector('.main-header');
    let lastScroll = 0;
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.scrollY;
        
        if (header) {
            if (currentScroll > lastScroll && currentScroll > 100) {
                header.style.transform = 'translateY(-100%)';
            } else {
                header.style.transform = 'translateY(0)';
            }
        }
        
        lastScroll = currentScroll;
    });
};

GeoMasterApp.initCategoryScroll = function() {
    const scroll = this.elements.categoryScroll;
    const leftBtn = this.elements.scrollLeft;
    const rightBtn = this.elements.scrollRight;
    
    if (!scroll) return;
    
    const scrollAmount = 200;
    
    if (leftBtn) {
        leftBtn.addEventListener('click', () => {
            scroll.scrollBy({
                left: -scrollAmount,
                behavior: 'smooth'
            });
        });
    }
    
    if (rightBtn) {
        rightBtn.addEventListener('click', () => {
            scroll.scrollBy({
                left: scrollAmount,
                behavior: 'smooth'
            });
        });
    }
    
    // Update button visibility on scroll
    const updateScrollButtons = () => {
        if (leftBtn) {
            leftBtn.style.opacity = scroll.scrollLeft > 10 ? '1' : '0';
        }
        if (rightBtn) {
            const maxScroll = scroll.scrollWidth - scroll.clientWidth;
            rightBtn.style.opacity = scroll.scrollLeft < maxScroll - 10 ? '1' : '0';
        }
    };
    
    scroll.addEventListener('scroll', updateScrollButtons);
    window.addEventListener('resize', updateScrollButtons);
    
    // Initial check
    setTimeout(updateScrollButtons, 100);
};

// ============================================
// 16. DASHBOARD FUNCTIONS
// ============================================

GeoMasterApp.initDashboard = function() {
    console.log('📊 Initializing Dashboard...');
    
    // Check if on profile page
    if (!document.body.classList.contains('profile-page')) {
        return;
    }
    
    // Load user data
    this.loadUserData();
    
    // Load topic data for calculations
    this.loadTopicDataForDashboard();
    
    // Initialize dashboard components
    setTimeout(() => {
        this.renderDashboardStats();
        this.renderCategoryProgress();
        this.renderActivityTimeline();
        this.renderDashboardBookmarks();
        this.renderWeakAreas();
        this.renderRecommendations();
        this.initDashboardEventListeners();
    }, 300);
    
    // Initialize theme
    this.initTheme();
};

GeoMasterApp.loadTopicDataForDashboard = function() {
    this.state.allTopics = [];
    
    const dataSources = [
        typeof geomorphologyData !== 'undefined' ? geomorphologyData : [],
        typeof climatology1Data !== 'undefined' ? climatology1Data : [],
        typeof climatology2Data !== 'undefined' ? climatology2Data : [],
        typeof oceanographyData !== 'undefined' ? oceanographyData : [],
        typeof biogeographyData !== 'undefined' ? biogeographyData : [],
        typeof landformsData !== 'undefined' ? landformsData : [],
        typeof indiaPhysicalData !== 'undefined' ? indiaPhysicalData : [],
        typeof indiaClimateData !== 'undefined' ? indiaClimateData : [],
        typeof indiaDrainageData !== 'undefined' ? indiaDrainageData : [],
        typeof indiaResourcesData !== 'undefined' ? indiaResourcesData : [],
        typeof humanData !== 'undefined' ? humanData : [],
        typeof economicData !== 'undefined' ? economicData : [],
        typeof modelsData !== 'undefined' ? modelsData : [],
        typeof environmentData !== 'undefined' ? environmentData : []
    ];
    
    dataSources.forEach(source => {
        if (Array.isArray(source)) {
            this.state.allTopics.push(...source);
        }
    });
    
    // Use sample if no data
    if (this.state.allTopics.length === 0) {
        this.state.allTopics = this.getSampleTopics();
    }
};

GeoMasterApp.renderDashboardStats = function() {
    const completed = this.userData.completedTopics.length;
    const inProgress = this.userData.inProgressTopics.length;
    const total = this.state.allTopics.length;
    const remaining = total - completed;
    const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;
    
    // Update profile mini stats
    const miniCompleted = document.getElementById('miniCompleted');
    const miniStreak = document.getElementById('miniStreak');
    const miniBookmarks = document.getElementById('miniBookmarks');
    
    if (miniCompleted) miniCompleted.textContent = completed;
    if (miniStreak) miniStreak.textContent = this.userData.streakDays;
    if (miniBookmarks) miniBookmarks.textContent = this.userData.bookmarks.length;
    
    // Update avatar progress ring
    const avatarProgress = document.getElementById('avatarProgress');
    if (avatarProgress) {
        const circumference = 2 * Math.PI * 45; // radius = 45
        const offset = circumference - (percentage / 100) * circumference;
        avatarProgress.style.strokeDasharray = `${circumference}`;
        avatarProgress.style.strokeDashoffset = `${offset}`;
    }
    
    // Update level
    const level = Math.floor(completed / 5) + 1;
    const userLevel = document.getElementById('userLevel');
    if (userLevel) userLevel.textContent = `Lvl ${level}`;
    
    // Update user name
    const userName = document.getElementById('userName');
    if (userName) userName.textContent = this.userData.name;
    
    // Update avatar icon
    const avatarIcon = document.querySelector('.avatar-icon');
    if (avatarIcon) avatarIcon.textContent = this.userData.avatar;
    
    // Update main progress circle
    const overallProgressCircle = document.getElementById('overallProgressCircle');
    const overallPercent = document.getElementById('overallPercent');
    
    if (overallProgressCircle) {
        const circumference = 2 * Math.PI * 85; // radius = 85
        const offset = circumference - (percentage / 100) * circumference;
        overallProgressCircle.style.strokeDasharray = `${circumference}`;
        overallProgressCircle.style.strokeDashoffset = `${offset}`;
    }
    
    if (overallPercent) overallPercent.textContent = `${percentage}%`;
    
    // Update detail items
    const detailCompleted = document.getElementById('detailCompleted');
    const detailInProgress = document.getElementById('detailInProgress');
    const detailRemaining = document.getElementById('detailRemaining');
    
    if (detailCompleted) detailCompleted.textContent = completed;
    if (detailInProgress) detailInProgress.textContent = inProgress;
    if (detailRemaining) detailRemaining.textContent = remaining;
    
    // Update streak
    const streakNumber = document.getElementById('streakNumber');
    if (streakNumber) streakNumber.textContent = this.userData.streakDays;
    
    // Render streak calendar
    this.renderStreakCalendar();
    
    // Render time graph
    this.renderTimeGraph();
    
    // Render achievements
    this.renderAchievements();
};

GeoMasterApp.renderStreakCalendar = function() {
    const container = document.getElementById('streakCalendar');
    if (!container) return;
    
    const today = new Date();
    const days = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
    
    container.innerHTML = '';
    
    for (let i = 6; i >= 0; i--) {
        const date = new Date(today);
        date.setDate(date.getDate() - i);
        
        const dayOfWeek = date.getDay();
        const dateStr = date.toISOString().split('T')[0];
        
        const isActive = this.isStudyDay(dateStr);
        const isToday = i === 0;
        
        const dayEl = document.createElement('div');
        dayEl.className = `streak-day ${isActive ? 'active' : ''} ${isToday ? 'today' : ''}`;
        dayEl.textContent = days[dayOfWeek];
        
        container.appendChild(dayEl);
    }
};

GeoMasterApp.isStudyDay = function(dateStr) {
    // Check if there's activity on this date
    return this.userData.activityLog.some(activity => {
        const activityDate = activity.timestamp.split('T')[0];
        return activityDate === dateStr;
    });
};

GeoMasterApp.renderTimeGraph = function() {
    const container = document.getElementById('timeGraph');
    if (!container) return;
    
    // Generate mock data for last 7 days
    const data = [20, 45, 30, 60, 40, 55, 35];
    const maxVal = Math.max(...data);
    
    container.innerHTML = data.map((val, i) => `
        <div class="time-bar" style="height: ${(val / maxVal) * 40}px; opacity: ${0.5 + (i / data.length) * 0.5}"></div>
    `).join('');
};

GeoMasterApp.renderAchievements = function() {
    const container = document.getElementById('achievementsGrid');
    if (!container) return;
    
    container.innerHTML = this.achievements.slice(0, 8).map(achievement => {
        const isUnlocked = this.userData.achievements.includes(achievement.id);
        return `
            <div class="achievement-badge ${isUnlocked ? 'unlocked' : ''}" 
                 title="${achievement.title}: ${achievement.desc}">
                ${achievement.icon}
            </div>
        `;
    }).join('');
    
    const unlockedCount = document.getElementById('unlockedCount');
    const totalAchievements = document.getElementById('totalAchievements');
    
    if (unlockedCount) unlockedCount.textContent = this.userData.achievements.length;
    if (totalAchievements) totalAchievements.textContent = this.achievements.length;
};

GeoMasterApp.renderCategoryProgress = function() {
    const container = document.getElementById('categoryProgressGrid');
    if (!container) return;
    
    const categories = Object.keys(this.categories).filter(c => c !== 'all');
    
    container.innerHTML = categories.map(category => {
        const categoryInfo = this.categories[category];
        const categoryTopics = this.state.allTopics.filter(t => t.category === category);
        const completedCount = categoryTopics.filter(t => 
            this.userData.completedTopics.includes(t.id)
        ).length;
        const total = categoryTopics.length;
        const percentage = total > 0 ? Math.round((completedCount / total) * 100) : 0;
        
        return `
            <div class="category-progress-item">
                <div class="category-progress-icon" style="background: ${categoryInfo.color}20;">
                    ${categoryInfo.icon}
                </div>
                <div class="category-progress-info">
                    <div class="category-progress-name">${categoryInfo.name}</div>
                    <div class="category-progress-bar">
                        <div class="category-progress-fill" 
                             style="width: ${percentage}%; background: ${categoryInfo.color};">
                        </div>
                    </div>
                </div>
                <span class="category-progress-percent" style="color: ${categoryInfo.color}">
                    ${percentage}%
                </span>
            </div>
        `;
    }).join('');
};

GeoMasterApp.renderActivityTimeline = function() {
    const container = document.getElementById('activityTimeline');
    const emptyState = document.getElementById('activityEmpty');
    
    if (!container) return;
    
    const activities = this.userData.activityLog.slice(0, 10);
    
    if (activities.length === 0) {
        if (emptyState) emptyState.style.display = 'flex';
        return;
    }
    
    if (emptyState) emptyState.style.display = 'none';
    
    container.innerHTML = activities.map(activity => {
        const date = new Date(activity.timestamp);
        const timeAgo = this.getTimeAgo(date);
        
        const actionText = {
            'viewed': 'Studied',
            'completed': 'Completed',
            'bookmarked': 'Bookmarked'
        };
        
        return `
            <div class="activity-item">
                <div class="activity-header">
                    <span class="activity-action">
                        ${actionText[activity.action] || activity.action} 
                        <strong>${activity.topicName}</strong>
                    </span>
                    <span class="activity-time">${timeAgo}</span>
                </div>
                <div class="activity-topic">
                    <span class="activity-topic-icon">${activity.topicIcon}</span>
                    <span class="activity-topic-name">${activity.topicName}</span>
                </div>
            </div>
        `;
    }).join('');
};

GeoMasterApp.getTimeAgo = function(date) {
    const seconds = Math.floor((new Date() - date) / 1000);
    
    const intervals = {
        year: 31536000,
        month: 2592000,
        week: 604800,
        day: 86400,
        hour: 3600,
        minute: 60
    };
    
    for (const [unit, secondsInUnit] of Object.entries(intervals)) {
        const interval = Math.floor(seconds / secondsInUnit);
        if (interval >= 1) {
            return `${interval} ${unit}${interval > 1 ? 's' : ''} ago`;
        }
    }
    
    return 'Just now';
};

GeoMasterApp.renderDashboardBookmarks = function() {
    const container = document.getElementById('bookmarksScroll');
    const emptyState = document.getElementById('dashboardBookmarksEmpty');
    
    if (!container) return;
    
    if (this.userData.bookmarks.length === 0) {
        if (emptyState) emptyState.style.display = 'flex';
        container.innerHTML = '';
        return;
    }
    
    if (emptyState) emptyState.style.display = 'none';
    
    container.innerHTML = this.userData.bookmarks.slice(0, 8).map(topicId => {
        const topic = this.getTopicById(topicId);
        if (!topic) return '';
        
        const categoryInfo = this.categories[topic.category] || {};
        
        return `
            <div class="bookmark-card" data-id="${topic.id}">
                <span class="bookmark-card-icon">${topic.icon}</span>
                <div class="bookmark-card-name">${topic.name}</div>
                <div class="bookmark-card-category">${categoryInfo.name || topic.category}</div>
            </div>
        `;
    }).join('');
    
    // Add click handlers
    container.querySelectorAll('.bookmark-card').forEach(card => {
        card.addEventListener('click', () => {
            const topicId = card.dataset.id;
            window.location.href = `upsc.html?topic=${topicId}`;
        });
    });
};

GeoMasterApp.renderWeakAreas = function() {
    const container = document.getElementById('weakAreasGrid');
    const emptyState = document.getElementById('weakAreasEmpty');
    
    if (!container) return;
    
    // Find categories with lowest completion
    const categories = Object.keys(this.categories).filter(c => c !== 'all');
    
    const categoryStats = categories.map(category => {
        const categoryInfo = this.categories[category];
        const categoryTopics = this.state.allTopics.filter(t => t.category === category);
        const completedCount = categoryTopics.filter(t => 
            this.userData.completedTopics.includes(t.id)
        ).length;
        const total = categoryTopics.length;
        const percentage = total > 0 ? Math.round((completedCount / total) * 100) : 0;
        
        return {
            category,
            categoryInfo,
            completed: completedCount,
            total,
            percentage
        };
    }).filter(c => c.total > 0 && c.percentage < 50)
      .sort((a, b) => a.percentage - b.percentage)
      .slice(0, 3);
    
    if (categoryStats.length === 0) {
        if (emptyState) emptyState.style.display = 'flex';
        container.innerHTML = '';
        return;
    }
    
    if (emptyState) emptyState.style.display = 'none';
    
    container.innerHTML = categoryStats.map(stat => `
        <div class="weak-area-card">
            <div class="weak-area-header">
                <span class="weak-area-icon">${stat.categoryInfo.icon}</span>
                <span class="weak-area-name">${stat.categoryInfo.name}</span>
            </div>
            <div class="weak-area-stat">
                ${stat.completed}/${stat.total} completed (${stat.percentage}%)
            </div>
            <a href="upsc.html?category=${stat.category}" class="weak-area-btn">
                <span>📖</span> Study Now
            </a>
        </div>
    `).join('');
};

GeoMasterApp.renderRecommendations = function() {
    const container = document.getElementById('recommendationsGrid');
    if (!container) return;
    
    // Get topics not completed, sorted by relevance
    const recommendations = this.state.allTopics
        .filter(t => !this.userData.completedTopics.includes(t.id))
        .sort((a, b) => {
            const relevanceOrder = { high: 1, medium: 2, low: 3 };
            return (relevanceOrder[a.upscRelevance] || 2) - (relevanceOrder[b.upscRelevance] || 2);
        })
        .slice(0, 6);
    
    if (recommendations.length === 0) {
        container.innerHTML = `
            <div style="text-align: center; padding: 2rem; color: var(--text-tertiary);">
                <span style="font-size: 2rem;">🎉</span>
                <p>You've completed all topics!</p>
            </div>
        `;
        return;
    }
    
    container.innerHTML = recommendations.map(topic => {
        const categoryInfo = this.categories[topic.category] || {};
        
        let reason = 'High UPSC relevance';
        if (this.userData.inProgressTopics.includes(topic.id)) {
            reason = 'Continue where you left off';
        }
        
        return `
            <div class="recommendation-card" data-id="${topic.id}">
                <div class="recommendation-icon">${topic.icon}</div>
                <div class="recommendation-info">
                    <div class="recommendation-name">${topic.name}</div>
                    <div class="recommendation-reason">${reason}</div>
                </div>
                <span class="recommendation-arrow">→</span>
            </div>
        `;
    }).join('');
    
    // Add click handlers
    container.querySelectorAll('.recommendation-card').forEach(card => {
        card.addEventListener('click', () => {
            const topicId = card.dataset.id;
            window.location.href = `upsc.html?topic=${topicId}`;
        });
    });
};

GeoMasterApp.initDashboardEventListeners = function() {
    // Edit profile button
    const editProfileBtn = document.getElementById('editProfileBtn');
    const editProfileModal = document.getElementById('editProfileModal');
    const closeEditProfile = document.getElementById('closeEditProfile');
    const cancelEditProfile = document.getElementById('cancelEditProfile');
    const saveProfile = document.getElementById('saveProfile');
    const editProfileBackdrop = document.getElementById('editProfileBackdrop');
    
    if (editProfileBtn && editProfileModal) {
        editProfileBtn.addEventListener('click', () => {
            editProfileModal.classList.add('active');
            
            // Set current values
            const editName = document.getElementById('editName');
            if (editName) editName.value = this.userData.name;
            
            // Set active avatar
            document.querySelectorAll('.avatar-option').forEach(opt => {
                opt.classList.toggle('active', opt.dataset.avatar === this.userData.avatar);
            });
        });
    }
    
    if (closeEditProfile) {
        closeEditProfile.addEventListener('click', () => {
            editProfileModal.classList.remove('active');
        });
    }
    
    if (cancelEditProfile) {
        cancelEditProfile.addEventListener('click', () => {
            editProfileModal.classList.remove('active');
        });
    }
    
    if (editProfileBackdrop) {
        editProfileBackdrop.addEventListener('click', () => {
            editProfileModal.classList.remove('active');
        });
    }
    
    // Avatar options
    document.querySelectorAll('.avatar-option').forEach(opt => {
        opt.addEventListener('click', () => {
            document.querySelectorAll('.avatar-option').forEach(o => o.classList.remove('active'));
            opt.classList.add('active');
        });
    });
    
    if (saveProfile) {
        saveProfile.addEventListener('click', () => {
            const editName = document.getElementById('editName');
            const activeAvatar = document.querySelector('.avatar-option.active');
            
            if (editName && editName.value.trim()) {
                this.userData.name = editName.value.trim();
            }
            
            if (activeAvatar) {
                this.userData.avatar = activeAvatar.dataset.avatar;
            }
            
            this.saveUserData();
            editProfileModal.classList.remove('active');
            this.renderDashboardStats();
            this.showToast('Profile Updated', 'Your changes have been saved', 'success');
        });
    }
    
    // Export button
    const exportBtn = document.getElementById('exportBtn');
    if (exportBtn) {
        exportBtn.addEventListener('click', () => {
            this.exportProgress();
        });
    }
    
    // Import input
    const importInput = document.getElementById('importInput');
    if (importInput) {
        importInput.addEventListener('change', (e) => {
            this.importProgress(e.target.files[0]);
        });
    }
    
    // Reset button
    const resetBtn = document.getElementById('resetBtn');
    const resetConfirmModal = document.getElementById('resetConfirmModal');
    const cancelReset = document.getElementById('cancelReset');
    const confirmReset = document.getElementById('confirmReset');
    const resetConfirmBackdrop = document.getElementById('resetConfirmBackdrop');
    
    if (resetBtn && resetConfirmModal) {
        resetBtn.addEventListener('click', () => {
            resetConfirmModal.classList.add('active');
        });
    }
    
    if (cancelReset) {
        cancelReset.addEventListener('click', () => {
            resetConfirmModal.classList.remove('active');
        });
    }
    
    if (resetConfirmBackdrop) {
        resetConfirmBackdrop.addEventListener('click', () => {
            resetConfirmModal.classList.remove('active');
        });
    }
    
    if (confirmReset) {
        confirmReset.addEventListener('click', () => {
            this.resetAllProgress();
            resetConfirmModal.classList.remove('active');
        });
    }
    
    // Theme toggle
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            this.toggleTheme();
        });
    }
    
    // Achievement modal close
    const closeAchievement = document.getElementById('closeAchievement');
    const achievementModal = document.getElementById('achievementModal');
    
    if (closeAchievement && achievementModal) {
        closeAchievement.addEventListener('click', () => {
            achievementModal.classList.remove('active');
        });
    }
};

GeoMasterApp.exportProgress = function() {
    const data = {
        userData: this.userData,
        exportDate: new Date().toISOString(),
        version: '1.0'
    };
    
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement('a');
    a.href = url;
    a.download = `geomaster-progress-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    
    URL.revokeObjectURL(url);
    this.showToast('Exported! 📤', 'Your progress has been downloaded', 'success');
};

GeoMasterApp.importProgress = function(file) {
    if (!file) return;
    
    const reader = new FileReader();
    
    reader.onload = (e) => {
        try {
            const data = JSON.parse(e.target.result);
            
            if (data.userData) {
                this.userData = { ...this.userData, ...data.userData };
                this.saveUserData();
                this.renderDashboardStats();
                this.renderCategoryProgress();
                this.renderActivityTimeline();
                this.renderDashboardBookmarks();
                this.showToast('Imported! 📥', 'Your progress has been restored', 'success');
            } else {
                throw new Error('Invalid file format');
            }
        } catch (error) {
            console.error('Import error:', error);
            this.showToast('Import Failed', 'Invalid file format', 'error');
        }
    };
    
    reader.readAsText(file);
};

GeoMasterApp.resetAllProgress = function() {
    this.userData = {
        name: 'UPSC Aspirant',
        avatar: '👨‍🎓',
        completedTopics: [],
        inProgressTopics: [],
        bookmarks: [],
        streakDays: 0,
        lastStudied: null,
        totalTimeSpent: 0,
        activityLog: [],
        achievements: [],
        settings: {
            theme: this.userData.settings.theme,
            animations: true,
            sounds: false
        }
    };
    
    this.saveUserData();
    this.renderDashboardStats();
    this.renderCategoryProgress();
    this.renderActivityTimeline();
    this.renderDashboardBookmarks();
    this.renderWeakAreas();
    this.renderRecommendations();
    
    this.showToast('Progress Reset', 'All progress has been cleared', 'info');
};
// ============================================
// 17. UTILITIES
// ============================================

GeoMasterApp.debounce = function(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
};

GeoMasterApp.throttle = function(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
};

GeoMasterApp.formatDate = function(dateString) {
    const date = new Date(dateString);
    const options = { 
        year: 'numeric', 
        month: 'short', 
        day: 'numeric' 
    };
    return date.toLocaleDateString('en-IN', options);
};

GeoMasterApp.formatTime = function(minutes) {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    
    if (hours > 0) {
        return `${hours}h ${mins}m`;
    }
    return `${mins}m`;
};

GeoMasterApp.generateId = function() {
    return 'id_' + Math.random().toString(36).substr(2, 9);
};

GeoMasterApp.copyToClipboard = function(text) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(() => {
            this.showToast('Copied! 📋', 'Text copied to clipboard', 'success');
        }).catch(err => {
            console.error('Copy failed:', err);
            this.fallbackCopyToClipboard(text);
        });
    } else {
        this.fallbackCopyToClipboard(text);
    }
};

GeoMasterApp.fallbackCopyToClipboard = function(text) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-9999px';
    document.body.appendChild(textArea);
    textArea.select();
    
    try {
        document.execCommand('copy');
        this.showToast('Copied! 📋', 'Text copied to clipboard', 'success');
    } catch (err) {
        console.error('Fallback copy failed:', err);
        this.showToast('Copy Failed', 'Please copy manually', 'error');
    }
    
    document.body.removeChild(textArea);
};

GeoMasterApp.shareContent = function(title, text, url) {
    if (navigator.share) {
        navigator.share({
            title: title,
            text: text,
            url: url
        }).catch(err => {
            console.log('Share cancelled or failed:', err);
        });
    } else {
        // Fallback - copy URL
        this.copyToClipboard(url || window.location.href);
    }
};

GeoMasterApp.getQueryParams = function() {
    const params = new URLSearchParams(window.location.search);
    const result = {};
    
    for (const [key, value] of params) {
        result[key] = value;
    }
    
    return result;
};

GeoMasterApp.setQueryParam = function(key, value) {
    const url = new URL(window.location.href);
    url.searchParams.set(key, value);
    window.history.pushState({}, '', url);
};

GeoMasterApp.removeQueryParam = function(key) {
    const url = new URL(window.location.href);
    url.searchParams.delete(key);
    window.history.pushState({}, '', url);
};

// ============================================
// 18. EVENT LISTENERS SETUP
// ============================================

GeoMasterApp.setupEventListeners = function() {
    console.log('🎯 Setting up event listeners...');
    
    // Initialize search
    this.initSearch();
    
    // Initialize keyboard shortcuts
    this.initKeyboardShortcuts();
    
    // Initialize scroll effects
    this.initScrollEffects();
    
    // Initialize category scroll
    this.initCategoryScroll();
    
    // Initialize mind map controls
    this.initMindMapControls();
    
    // Category pills click handlers
    document.querySelectorAll('.category-pill').forEach(pill => {
        pill.addEventListener('click', () => {
            const category = pill.dataset.category;
            this.setCategory(category);
        });
    });
    
    // Filter dropdowns
    this.setupFilterDropdowns();
    
    // View toggle buttons
    document.querySelectorAll('.view-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const view = btn.dataset.view;
            this.setViewMode(view);
        });
    });
    
    // Reset filters button
    if (this.elements.resetFilters) {
        this.elements.resetFilters.addEventListener('click', () => {
            this.resetAllFilters();
        });
    }
    
    // Theme toggle
    if (this.elements.themeToggle) {
        this.elements.themeToggle.addEventListener('click', () => {
            this.toggleTheme();
        });
    }
    
    // Bookmarks button
    if (this.elements.bookmarksBtn) {
        this.elements.bookmarksBtn.addEventListener('click', () => {
            this.openBookmarksSidebar();
        });
    }
    
    // Close bookmarks sidebar
    if (this.elements.closeSidebar) {
        this.elements.closeSidebar.addEventListener('click', () => {
            this.closeBookmarksSidebar();
        });
    }
    
    // Clear all bookmarks
    if (this.elements.clearBookmarks) {
        this.elements.clearBookmarks.addEventListener('click', () => {
            this.clearAllBookmarks();
        });
    }
    
    // Modal close handlers
    if (this.elements.modalBackdrop) {
        this.elements.modalBackdrop.addEventListener('click', () => {
            this.closeTopicModal();
        });
    }
    
    if (this.elements.modalBack) {
        this.elements.modalBack.addEventListener('click', () => {
            this.closeTopicModal();
        });
    }
    
    if (this.elements.modalClose) {
        this.elements.modalClose.addEventListener('click', () => {
            this.closeTopicModal();
        });
    }
    
    // Modal bookmark button
    if (this.elements.modalBookmark) {
        this.elements.modalBookmark.addEventListener('click', () => {
            if (this.state.currentTopic) {
                this.toggleBookmark(this.state.currentTopic.id);
            }
        });
    }
    
    // Modal share button
    const modalShare = document.getElementById('modalShare');
    if (modalShare) {
        modalShare.addEventListener('click', () => {
            if (this.state.currentTopic) {
                const topic = this.state.currentTopic;
                const url = `${window.location.origin}${window.location.pathname}?topic=${topic.id}`;
                this.shareContent(
                    `${topic.name} - GeoMaster UPSC`,
                    `Learn about ${topic.name} for UPSC Geography`,
                    url
                );
            }
        });
    }
    
    // Modal navigation tabs
    document.querySelectorAll('.nav-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            const section = tab.dataset.section;
            this.switchSection(section);
        });
    });
    
    // Previous/Next topic buttons
    if (this.elements.prevTopic) {
        this.elements.prevTopic.addEventListener('click', () => {
            this.navigateTopic(-1);
        });
    }
    
    if (this.elements.nextTopic) {
        this.elements.nextTopic.addEventListener('click', () => {
            this.navigateTopic(1);
        });
    }
    
    // Mark complete button
    if (this.elements.markCompleteBtn) {
        this.elements.markCompleteBtn.addEventListener('click', () => {
            if (this.state.currentTopic) {
                this.markTopicComplete(this.state.currentTopic.id);
            }
        });
    }
    
    // Keyboard shortcuts modal
    if (this.elements.closeShortcuts) {
        this.elements.closeShortcuts.addEventListener('click', () => {
            this.closeShortcutsModal();
        });
    }
    
    // Handle URL parameters on load
    this.handleUrlParams();
    
    // Window resize handler
    window.addEventListener('resize', this.debounce(() => {
        this.handleResize();
    }, 250));
    
    // Before unload - save state
    window.addEventListener('beforeunload', () => {
        this.saveUserData();
    });
    
    // Visibility change - update streak when returning
    document.addEventListener('visibilitychange', () => {
        if (!document.hidden) {
            this.updateStreak();
            this.saveUserData();
        }
    });
    
    console.log('✅ Event listeners setup complete');
};

GeoMasterApp.setupFilterDropdowns = function() {
    // Difficulty filter
    const difficultyFilter = document.getElementById('difficultyFilter');
    const difficultyMenu = document.getElementById('difficultyMenu');
    
    if (difficultyFilter && difficultyMenu) {
        difficultyFilter.addEventListener('click', (e) => {
            e.stopPropagation();
            this.toggleDropdown('difficulty');
        });
        
        difficultyMenu.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
            checkbox.addEventListener('change', () => {
                this.updateDifficultyFilter();
            });
        });
    }
    
    // Relevance filter
    const relevanceFilter = document.getElementById('relevanceFilter');
    const relevanceMenu = document.getElementById('relevanceMenu');
    
    if (relevanceFilter && relevanceMenu) {
        relevanceFilter.addEventListener('click', (e) => {
            e.stopPropagation();
            this.toggleDropdown('relevance');
        });
        
        relevanceMenu.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
            checkbox.addEventListener('change', () => {
                this.updateRelevanceFilter();
            });
        });
    }
    
    // Sort filter
    const sortFilter = document.getElementById('sortFilter');
    const sortMenu = document.getElementById('sortMenu');
    
    if (sortFilter && sortMenu) {
        sortFilter.addEventListener('click', (e) => {
            e.stopPropagation();
            this.toggleDropdown('sort');
        });
        
        sortMenu.querySelectorAll('.dropdown-item').forEach(item => {
            item.addEventListener('click', () => {
                const sort = item.dataset.sort;
                this.setSortOrder(sort);
                
                // Update active state
                sortMenu.querySelectorAll('.dropdown-item').forEach(i => i.classList.remove('active'));
                item.classList.add('active');
                
                // Close dropdown
                sortFilter.parentElement.classList.remove('open');
            });
        });
    }
    
    // Close dropdowns on outside click
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.filter-dropdown')) {
            document.querySelectorAll('.filter-dropdown').forEach(dropdown => {
                dropdown.classList.remove('open');
            });
        }
    });
};

GeoMasterApp.toggleDropdown = function(type) {
    const dropdowns = {
        difficulty: document.getElementById('difficultyFilter')?.parentElement,
        relevance: document.getElementById('relevanceFilter')?.parentElement,
        sort: document.getElementById('sortFilter')?.parentElement
    };
    
    // Close all other dropdowns
    Object.keys(dropdowns).forEach(key => {
        if (key !== type && dropdowns[key]) {
            dropdowns[key].classList.remove('open');
        }
    });
    
    // Toggle current dropdown
    if (dropdowns[type]) {
        dropdowns[type].classList.toggle('open');
    }
};

GeoMasterApp.updateDifficultyFilter = function() {
    const checkboxes = document.querySelectorAll('#difficultyMenu input[type="checkbox"]');
    const selected = [];
    
    checkboxes.forEach(cb => {
        if (cb.checked) {
            selected.push(cb.value);
        }
    });
    
    this.state.filters.difficulty = selected.length > 0 ? selected : ['easy', 'medium', 'hard'];
    this.applyFilters();
};

GeoMasterApp.updateRelevanceFilter = function() {
    const checkboxes = document.querySelectorAll('#relevanceMenu input[type="checkbox"]');
    const selected = [];
    
    checkboxes.forEach(cb => {
        if (cb.checked) {
            selected.push(cb.value);
        }
    });
    
    this.state.filters.relevance = selected.length > 0 ? selected : ['high', 'medium', 'low'];
    this.applyFilters();
};

GeoMasterApp.setSortOrder = function(sort) {
    this.state.sortBy = sort;
    this.applyFilters();
};

GeoMasterApp.handleUrlParams = function() {
    const params = this.getQueryParams();
    
    // Open topic if specified
    if (params.topic) {
        setTimeout(() => {
            const topic = this.getTopicById(params.topic);
            if (topic) {
                this.openTopicModal(params.topic);
            }
        }, 500);
    }
    
    // Set category if specified
    if (params.category) {
        setTimeout(() => {
            this.setCategory(params.category);
        }, 300);
    }
    
    // Set search query if specified
    if (params.search) {
        setTimeout(() => {
            if (this.elements.searchInput) {
                this.elements.searchInput.value = params.search;
                this.handleSearch(params.search);
            }
        }, 300);
    }
};

GeoMasterApp.handleResize = function() {
    // Re-render mind map on resize if modal is open
    if (this.state.isModalOpen && this.state.currentTopic) {
        this.renderMindMap(this.state.currentTopic);
    }
    
    // Update category scroll buttons
    const scroll = this.elements.categoryScroll;
    if (scroll) {
        const event = new Event('scroll');
        scroll.dispatchEvent(event);
    }
};

// ============================================
// 19. FINAL INITIALIZATION
// ============================================

// Wait for DOM to be ready
document.addEventListener('DOMContentLoaded', function() {
    // Check if we're on the main page or profile page
    const isProfilePage = document.body.classList.contains('profile-page');
    
    if (isProfilePage) {
        // Initialize dashboard
        GeoMasterApp.cacheElements();
        GeoMasterApp.initDashboard();
    } else {
        // Initialize main app
        GeoMasterApp.init();
    }
});

// Handle page navigation (for SPAs or back button)
window.addEventListener('popstate', function(event) {
    const params = GeoMasterApp.getQueryParams();
    
    if (params.topic) {
        GeoMasterApp.openTopicModal(params.topic);
    } else if (GeoMasterApp.state.isModalOpen) {
        GeoMasterApp.closeTopicModal();
    }
    
    if (params.category) {
        GeoMasterApp.setCategory(params.category);
    }
});

// Service Worker Registration (for PWA capabilities)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        // Uncomment below to enable service worker
        // navigator.serviceWorker.register('/sw.js')
        //     .then(registration => {
        //         console.log('SW registered:', registration);
        //     })
        //     .catch(error => {
        //         console.log('SW registration failed:', error);
        //     });
    });
}

// Export for global access
window.GeoMasterApp = GeoMasterApp;

// ============================================
// 20. POLYFILLS & COMPATIBILITY
// ============================================

// Polyfill for Element.closest()
if (!Element.prototype.closest) {
    Element.prototype.closest = function(s) {
        var el = this;
        do {
            if (Element.prototype.matches.call(el, s)) return el;
            el = el.parentElement || el.parentNode;
        } while (el !== null && el.nodeType === 1);
        return null;
    };
}

// Polyfill for Element.matches()
if (!Element.prototype.matches) {
    Element.prototype.matches = 
        Element.prototype.matchesSelector || 
        Element.prototype.mozMatchesSelector ||
        Element.prototype.msMatchesSelector || 
        Element.prototype.oMatchesSelector || 
        Element.prototype.webkitMatchesSelector ||
        function(s) {
            var matches = (this.document || this.ownerDocument).querySelectorAll(s),
                i = matches.length;
            while (--i >= 0 && matches.item(i) !== this) {}
            return i > -1;
        };
}

// Polyfill for Array.includes()
if (!Array.prototype.includes) {
    Array.prototype.includes = function(searchElement, fromIndex) {
        if (this == null) {
            throw new TypeError('"this" is null or not defined');
        }
        var o = Object(this);
        var len = o.length >>> 0;
        if (len === 0) {
            return false;
        }
        var n = fromIndex | 0;
        var k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);
        while (k < len) {
            if (o[k] === searchElement) {
                return true;
            }
            k++;
        }
        return false;
    };
}

// Polyfill for String.includes()
if (!String.prototype.includes) {
    String.prototype.includes = function(search, start) {
        if (typeof start !== 'number') {
            start = 0;
        }
        if (start + search.length > this.length) {
            return false;
        } else {
            return this.indexOf(search, start) !== -1;
        }
    };
}

// Polyfill for Object.entries()
if (!Object.entries) {
    Object.entries = function(obj) {
        var ownProps = Object.keys(obj),
            i = ownProps.length,
            resArray = new Array(i);
        while (i--)
            resArray[i] = [ownProps[i], obj[ownProps[i]]];
        return resArray;
    };
}

// Polyfill for requestAnimationFrame
(function() {
    var lastTime = 0;
    var vendors = ['ms', 'moz', 'webkit', 'o'];
    for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
        window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame'] 
                                   || window[vendors[x]+'CancelRequestAnimationFrame'];
    }
 
    if (!window.requestAnimationFrame)
        window.requestAnimationFrame = function(callback, element) {
            var currTime = new Date().getTime();
            var timeToCall = Math.max(0, 16 - (currTime - lastTime));
            var id = window.setTimeout(function() { callback(currTime + timeToCall); }, 
              timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        };
 
    if (!window.cancelAnimationFrame)
        window.cancelAnimationFrame = function(id) {
            clearTimeout(id);
        };
}());

console.log('🌍 GeoMaster UPSC App Loaded Successfully!');
console.log('📚 Total Functions:', Object.keys(GeoMasterApp).length);
console.log('🎯 Ready for UPSC Geography Learning!');
