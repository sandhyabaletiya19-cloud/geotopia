/* ========================================
   UPSC GEOGRAPHY - BASE DATA STRUCTURE
   Message 2: Categories + Structure
   
   HOW TO USE:
   1. Keep this file as the MAIN data file
   2. Additional topic files will MERGE into this
   3. Load this FIRST, then load topic files
======================================== */

const UPSCData = {
    // ===== METADATA =====
    version: "2.0.0",
    lastUpdated: "2024",
    totalTopics: 94, // Will grow as we add files
    
    // ===== ALL CATEGORIES =====
    categories: {
        
        // ========================================
        // I. PHYSICAL GEOGRAPHY
        // ========================================
        physical: {
            name: "Physical Geography",
            icon: "🌍",
            color: "#059669",
            description: "Earth's natural features, processes, and patterns",
            
            subcategories: {
                geomorphology: {
                    name: "Geomorphology",
                    icon: "🏔️",
                    color: "#92400e",
                    topicCount: 8,
                    topics: [] // Filled by data-geomorphology.js
                },
                
                climatology: {
                    name: "Climatology",
                    icon: "🌤️",
                    color: "#0369a1",
                    topicCount: 10,
                    topics: [] // Filled by data-climatology.js
                },
                
                oceanography: {
                    name: "Oceanography",
                    icon: "🌊",
                    color: "#1e40af",
                    topicCount: 6,
                    topics: [] // Filled by data-oceanography.js
                },
                
                biogeography: {
                    name: "Biogeography & Soil",
                    icon: "🌱",
                    color: "#166534",
                    topicCount: 8,
                    topics: [] // Filled by data-biogeography.js
                }
            }
        },
        
        // ========================================
        // II. GEOGRAPHY OF INDIA
        // ========================================
        india: {
            name: "Geography of India",
            icon: "🇮🇳",
            color: "#ea580c",
            description: "Physical features, climate, resources of India",
            
            subcategories: {
                indiaPhysical: {
                    name: "Physical Features",
                    icon: "🏔️",
                    color: "#9a3412",
                    topicCount: 8,
                    topics: [] // Filled by data-india-physical.js
                },
                
                indiaDrainage: {
                    name: "Drainage System",
                    icon: "🏞️",
                    color: "#0e7490",
                    topicCount: 6,
                    topics: [] // Filled by data-india-drainage.js
                },
                
                indiaClimate: {
                    name: "Climate",
                    icon: "🌧️",
                    color: "#1d4ed8",
                    topicCount: 6,
                    topics: [] // Filled by data-india-climate.js
                },
                
                indiaVegetation: {
                    name: "Natural Vegetation",
                    icon: "🌳",
                    color: "#15803d",
                    topicCount: 5,
                    topics: [] // Filled by data-india-vegetation.js
                },
                
                indiaResources: {
                    name: "Resources & Agriculture",
                    icon: "🌾",
                    color: "#a16207",
                    topicCount: 8,
                    topics: [] // Filled by data-india-resources.js
                }
            }
        },
        
        // ========================================
        // III. HUMAN GEOGRAPHY
        // ========================================
        human: {
            name: "Human Geography",
            icon: "👥",
            color: "#7c3aed",
            description: "Population, settlements, migration patterns",
            
            subcategories: {
                population: {
                    name: "Population Geography",
                    icon: "👨‍👩‍👧‍👦",
                    color: "#6d28d9",
                    topicCount: 8,
                    topics: [] // Filled by data-human-geography.js
                }
            }
        },
        
        // ========================================
        // IV. ECONOMIC GEOGRAPHY
        // ========================================
        economic: {
            name: "Economic Geography",
            icon: "💰",
            color: "#0891b2",
            description: "Economic activities, industries, trade",
            
            subcategories: {
                economicActivities: {
                    name: "Economic Activities",
                    icon: "🏭",
                    color: "#0e7490",
                    topicCount: 7,
                    topics: [] // Filled by data-economic-geography.js
                }
            }
        },
        
        // ========================================
        // V. MODELS & THEORIES
        // ========================================
        models: {
            name: "Models & Theories",
            icon: "📐",
            color: "#be185d",
            description: "Geographic theories and models for UPSC",
            
            subcategories: {
                theories: {
                    name: "Geographic Models",
                    icon: "📊",
                    color: "#9d174d",
                    topicCount: 6,
                    topics: [] // Filled by data-models.js
                }
            }
        },
        
        // ========================================
        // VI. ENVIRONMENTAL GEOGRAPHY
        // ========================================
        environment: {
            name: "Environmental Geography",
            icon: "♻️",
            color: "#16a34a",
            description: "Environment, climate change, disasters",
            
            subcategories: {
                environmental: {
                    name: "Environment & Conservation",
                    icon: "🌿",
                    color: "#15803d",
                    topicCount: 8,
                    topics: [] // Filled by data-environment.js
                }
            }
        }
    },
    
    // ===== THEME COLORS FOR TOPICS =====
    themes: {
        geomorphology: {
            main: "#92400e",
            light: "#fbbf24",
            gradient: "linear-gradient(135deg, #92400e, #b45309)",
            bgPattern: "mountains"
        },
        climatology: {
            main: "#0369a1",
            light: "#38bdf8",
            gradient: "linear-gradient(135deg, #0369a1, #0284c7)",
            bgPattern: "clouds"
        },
        oceanography: {
            main: "#1e40af",
            light: "#60a5fa",
            gradient: "linear-gradient(135deg, #1e40af, #2563eb)",
            bgPattern: "waves"
        },
        biogeography: {
            main: "#166534",
            light: "#4ade80",
            gradient: "linear-gradient(135deg, #166534, #15803d)",
            bgPattern: "vegetation"
        },
        india: {
            main: "#ea580c",
            light: "#fb923c",
            gradient: "linear-gradient(135deg, #ea580c, #f97316)",
            bgPattern: "india-map"
        },
        human: {
            main: "#7c3aed",
            light: "#a78bfa",
            gradient: "linear-gradient(135deg, #7c3aed, #8b5cf6)",
            bgPattern: "people"
        },
        economic: {
            main: "#0891b2",
            light: "#22d3ee",
            gradient: "linear-gradient(135deg, #0891b2, #06b6d4)",
            bgPattern: "industry"
        },
        models: {
            main: "#be185d",
            light: "#f472b6",
            gradient: "linear-gradient(135deg, #be185d, #db2777)",
            bgPattern: "graphs"
        },
        environment: {
            main: "#16a34a",
            light: "#4ade80",
            gradient: "linear-gradient(135deg, #16a34a, #22c55e)",
            bgPattern: "nature"
        }
    },
    
    // ===== DIFFICULTY LEVELS =====
    difficulty: {
        1: { label: "Basic", color: "#22c55e" },
        2: { label: "Moderate", color: "#f59e0b" },
        3: { label: "Advanced", color: "#ef4444" }
    },
    
    // ===== TOPIC TEMPLATE =====
    // Use this structure for all topics
    topicTemplate: {
        id: "unique-id",
        title: "Topic Title",
        icon: "📚",
        theme: "geomorphology", // matches themes above
        difficulty: 2, // 1-3
        tags: ["tag1", "tag2"],
        
        mindMap: {
            central: "Central Concept",
            branches: [
                {
                    label: "Branch 1",
                    items: ["Item 1", "Item 2", "Item 3"]
                }
            ]
        },
        
        memoryHooks: [
            {
                type: "🎯 Mnemonic",
                title: "Memory Title",
                content: "Memory content with <span class='mnemonic-highlight'>highlights</span>"
            }
        ],
        
        concepts: [
            {
                title: "Concept Title",
                content: "2-3 line explanation"
            }
        ],
        
        quickFacts: [
            "<strong>Fact label:</strong> Fact content"
        ],
        
        upscTraps: [
            {
                title: "Trap Title",
                wrong: "Common wrong understanding",
                correct: "Correct understanding"
            }
        ],
        
        revision: [
            "Quick revision point 1",
            "Quick revision point 2"
        ]
    }
};

// ===== HELPER FUNCTION TO ADD TOPICS =====
function addTopicsToCategory(categoryKey, subcategoryKey, topics) {
    if (UPSCData.categories[categoryKey] && 
        UPSCData.categories[categoryKey].subcategories[subcategoryKey]) {
        UPSCData.categories[categoryKey].subcategories[subcategoryKey].topics.push(...topics);
        console.log(`✅ Added ${topics.length} topics to ${categoryKey}/${subcategoryKey}`);
    } else {
        console.error(`❌ Category not found: ${categoryKey}/${subcategoryKey}`);
    }
}

// Make globally available
window.UPSCData = UPSCData;
window.addTopicsToCategory = addTopicsToCategory;

console.log("📚 UPSC Geography Base Data Loaded");
console.log("📂 Categories:", Object.keys(UPSCData.categories).length);
