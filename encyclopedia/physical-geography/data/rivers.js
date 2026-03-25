const riversData = {
  meta: {
    name: "Rivers",
    icon: "🏞️",
    theme: "rivers-theme"
  },
  sections: {
    definition: {
      title: "What are Rivers?",
      renderAs: "standard",
      hero: {
        image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1920&q=80",
        tagline: "Natural flowing watercourses that shape landscapes and sustain life"
      },
      content: {
        introduction: "A river is a natural flowing watercourse, usually freshwater, flowing towards an ocean, sea, lake, or another river. Rivers are a crucial part of the hydrological cycle and play a vital role in shaping the Earth's landscape through erosion and deposition.",
        keyPoints: [
          {
            icon: "💧",
            label: "Water Source",
            text: "Fed by precipitation, springs, or glacial melt",
            detail: "Rivers collect water from their drainage basin or watershed"
          },
          {
            icon: "🌊",
            label: "Flow Direction",
            text: "Always flows downhill due to gravity",
            detail: "From higher elevation (source) to lower elevation (mouth)"
          },
          {
            icon: "🏔️",
            label: "Erosion Power",
            text: "Carves valleys, canyons, and gorges",
            detail: "Rivers are primary agents of landscape modification"
          },
          {
            icon: "🌾",
            label: "Life Support",
            text: "Essential for civilizations and ecosystems",
            detail: "Provides water for drinking, agriculture, and transportation"
          }
        ],
        comparison: {
          title: "Rivers vs Streams vs Creeks",
          headers: ["Feature", "River", "Stream", "Creek"],
          features: [
            { feature: "Size", values: ["Large", "Medium", "Small"] },
            { feature: "Width", values: ["10m to several km", "1-10 meters", "Less than 5 meters"] },
            { feature: "Depth", values: ["Deep", "Moderate", "Shallow"] },
            { feature: "Flow Volume", values: ["High", "Moderate", "Low"] },
            { feature: "Tributaries", values: ["Many", "Some", "Few or none"] }
          ]
        },
        funFacts: [
          "🌍 The Nile is the longest river (6,650 km), but Amazon carries the most water",
          "💧 Rivers contain only 0.0001% of Earth's total water",
          "🏛️ All ancient civilizations developed along river banks",
          "🔄 A single drop of water takes 90 days to travel the entire Mississippi River",
          "🐟 Rivers support 40% of all fish species despite covering tiny area"
        ]
      }
    },
    types: {
      title: "Types of Rivers",
      renderAs: "mindmap",
      hero: {
        image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1920&q=80",
        tagline: "Classification based on origin, flow pattern, and characteristics"
      },
      introduction: "Rivers can be classified in multiple ways - by their source, drainage pattern, age, or the terrain they flow through. Understanding these types helps in studying hydrology and geomorphology.",
      branches: [
        {
          id: "perennial",
          name: "Perennial Rivers",
          icon: "💧",
          color: "#4a90e2",
          definition: "Rivers that flow throughout the year, regardless of seasons. They are fed by rain, glaciers, or springs continuously.",
          formation: {
            steps: [
              { step: 1, icon: "🏔️", text: "Originate from glaciers, lakes, or permanent springs" },
              { step: 2, icon: "🌧️", text: "Receive continuous water from rainfall or snowmelt" },
              { step: 3, icon: "💧", text: "Groundwater contribution maintains flow during dry periods" },
              { step: 4, icon: "🌊", text: "Flow continuously to the sea or lake throughout the year" }
            ]
          },
          characteristics: [
            "Flow throughout all seasons",
            "Usually originate from glaciers or perennial springs",
            "Support diverse aquatic ecosystems",
            "Major source of irrigation and drinking water",
            "Often have large drainage basins"
          ],
          examples: [
            {
              name: "Ganges River",
              location: "India & Bangladesh",
              age: "Flows 2,525 km",
              highestPeak: "Gangotri Glacier origin",
              image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&q=80",
              link: "#"
            },
            {
              name: "Amazon River",
              location: "South America",
              age: "6,400 km length",
              highestPeak: "20% of freshwater to ocean",
              image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&q=80",
              link: "#"
            },
            {
              name: "Nile River",
              location: "Africa",
              age: "6,650 km - longest river",
              highestPeak: "Flows through 11 countries",
              image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&q=80",
              link: "#"
            }
          ]
        },
        {
          id: "seasonal",
          name: "Seasonal Rivers",
          icon: "🌦️",
          color: "#f4a261",
          definition: "Rivers that flow only during certain seasons, typically the rainy season. They dry up or reduce significantly during dry periods.",
          formation: {
            steps: [
              { step: 1, icon: "🌧️", text: "Monsoon or seasonal rains fill the river channel" },
              { step: 2, icon: "🌊", text: "River flows actively during wet season" },
              { step: 3, icon: "☀️", text: "Flow reduces as rain decreases" },
              { step: 4, icon: "🏜️", text: "River dries up or becomes very shallow in dry season" }
            ]
          },
          characteristics: [
            "Flow depends on monsoon or seasonal rainfall",
            "May dry up completely in summer",
            "Common in tropical and semi-arid regions",
            "Often have wide, sandy beds",
            "Flash floods common during monsoons"
          ],
          examples: [
            {
              name: "Sabarmati River",
              location: "Gujarat, India",
              status: "Seasonal flow",
              image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&q=80",
              link: "#"
            },
            {
              name: "Luni River",
              location: "Rajasthan, India",
              status: "Flows mainly in monsoon",
              image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&q=80",
              link: "#"
            }
          ]
        },
        {
          id: "antecedent",
          name: "Antecedent Rivers",
          icon: "⛰️",
          color: "#10b981",
          definition: "Rivers that existed before the mountains rose and maintained their original course by cutting through the rising mountains.",
          formation: {
            steps: [
              { step: 1, icon: "🌊", text: "River establishes its course on a plain" },
              { step: 2, icon: "⬆️", text: "Tectonic forces begin uplifting the land" },
              { step: 3, icon: "🪨", text: "River cuts down as fast as land rises" },
              { step: 4, icon: "🏔️", text: "River creates deep gorges through mountains" }
            ]
          },
          characteristics: [
            "Older than the mountains they cross",
            "Cut deep gorges through mountain ranges",
            "Maintain original drainage direction",
            "Found in tectonically active regions",
            "Examples of river persistence over geological time"
          ],
          examples: [
            {
              name: "Indus River",
              location: "Tibet to Arabian Sea",
              age: "Older than Himalayas",
              highestPeak: "Cuts through Himalayas",
              image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&q=80",
              link: "#"
            },
            {
              name: "Brahmaputra River",
              location: "Tibet, India, Bangladesh",
              age: "Antecedent origin",
              highestPeak: "Deepest gorge at Namcha Barwa",
              image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&q=80",
              link: "#"
            },
            {
              name: "Sutlej River",
              location: "Tibet to Punjab",
              age: "Pre-Himalayan origin",
              highestPeak: "Shipki La gorge",
              image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&q=80",
              link: "#"
            }
          ]
        },
        {
          id: "consequent",
          name: "Consequent Rivers",
          icon: "📐",
          color: "#8b5cf6",
          definition: "Rivers that flow in the direction of the original slope of the land, following the natural gradient of the terrain.",
          formation: {
            steps: [
              { step: 1, icon: "🏔️", text: "Land surface forms with initial slope" },
              { step: 2, icon: "🌧️", text: "Rainfall collects and flows downslope" },
              { step: 3, icon: "💧", text: "Channels form following the gradient" },
              { step: 4, icon: "🌊", text: "River system develops along original slope" }
            ]
          },
          characteristics: [
            "Follow the original slope of land",
            "Direction determined by initial terrain",
            "First rivers to form on new land surface",
            "Often parallel to each other",
            "Common on newly emerged coastal plains"
          ],
          examples: [
            {
              name: "Rivers of Western Ghats",
              location: "India (west-flowing)",
              status: "Follow slope to Arabian Sea",
              image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&q=80",
              link: "#"
            },
            {
              name: "East-flowing Peninsular Rivers",
              location: "India",
              status: "Godavari, Krishna, Kaveri",
              image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&q=80",
              link: "#"
            }
          ]
        },
        {
          id: "subsequent",
          name: "Subsequent Rivers",
          icon: "🔀",
          color: "#ec4899",
          definition: "Rivers that develop later than consequent rivers, following zones of weakness like fault lines or softer rock bands.",
          formation: {
            steps: [
              { step: 1, icon: "🌊", text: "Consequent rivers establish initial drainage" },
              { step: 2, icon: "🪨", text: "Erosion exposes softer rock layers" },
              { step: 3, icon: "💧", text: "New streams develop along weak zones" },
              { step: 4, icon: "🔀", text: "Subsequent rivers form perpendicular to consequent rivers" }
            ]
          },
          characteristics: [
            "Develop after consequent rivers",
            "Follow lines of geological weakness",
            "Often flow perpendicular to consequent streams",
            "Erode along softer rock bands",
            "Create trellis drainage patterns"
          ],
          examples: [
            {
              name: "Chambal River",
              location: "Central India",
              status: "Tributary of Yamuna",
              image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&q=80",
              link: "#"
            },
            {
              name: "Son River",
              location: "Central India",
              status: "Follows geological weakness",
              image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&q=80",
              link: "#"
            }
          ]
        }
      ],
      comparisonTable: {
        title: "Comparison of River Types",
        headers: ["Type", "Origin", "Flow Pattern", "Example"],
        rows: [
          ["Perennial", "Glaciers/Springs", "Year-round", "Ganges, Amazon"],
          ["Seasonal", "Rainfall", "Monsoon only", "Sabarmati, Luni"],
          ["Antecedent", "Pre-mountain", "Cuts through mountains", "Indus, Brahmaputra"],
          ["Consequent", "Initial slope", "Follows terrain", "Godavari, Krishna"],
          ["Subsequent", "Weak zones", "Along faults", "Chambal, Son"]
        ]
      }
    },
    formation: {
      title: "How Rivers Form",
      renderAs: "timeline",
      hero: {
        image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1920&q=80",
        tagline: "The journey from source to sea"
      },
      introduction: "Rivers form through a combination of precipitation, surface runoff, and groundwater seepage. The process involves collection, concentration, and flow of water over millions of years, creating the river systems we see today.",
      stages: [
        {
          stage: 1,
          title: "Precipitation & Collection",
          timeframe: "Continuous process",
          image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&q=80",
          description: [
            "Rain or snow falls over a catchment area (watershed)",
            "Water collects on the surface and begins to flow downhill",
            "Small rivulets form and join together",
            "Groundwater also contributes to river flow"
          ],
          geologicalProcess: "The hydrological cycle drives river formation. Precipitation falls on highlands, and gravity pulls water downslope, concentrating flow into channels."
        },
        {
          stage: 2,
          title: "Channel Formation",
          timeframe: "Thousands of years",
          image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&q=80",
          description: [
            "Flowing water erodes soil and rock",
            "V-shaped valleys form in upper course",
            "Channel deepens and widens over time",
            "Tributaries join to form larger streams"
          ],
          geologicalProcess: "Hydraulic action, abrasion, and chemical weathering work together to carve river channels. The river erodes vertically in steep terrain and laterally in flatter areas."
        },
        {
          stage: 3,
          title: "Valley Development",
          timeframe: "Hundreds of thousands of years",
          image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&q=80",
          description: [
            "River widens its valley through lateral erosion",
            "Meanders develop in middle course",
            "Floodplains form from deposited sediment",
            "Oxbow lakes may form from cut-off meanders"
          ],
          geologicalProcess: "As the river matures, it shifts from downcutting to lateral erosion. The valley floor widens, and the river begins to meander across its floodplain."
        },
        {
          stage: 4,
          title: "Delta or Estuary Formation",
          timeframe: "Ongoing process",
          image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&q=80",
          description: [
            "River reaches base level (sea or lake)",
            "Velocity decreases, sediment is deposited",
            "Delta forms if sediment exceeds erosion by sea",
            "Estuary forms if sea erodes faster than deposition"
          ],
          geologicalProcess: "At the river mouth, reduced velocity causes the river to deposit its sediment load. Deltas build outward while estuaries are drowned river valleys shaped by tides."
        }
      ],
      terminology: {
        title: "Essential River Terminology",
        terms: [
          {
            term: "Watershed",
            pronunciation: "/ˈwɔːtərʃed/",
            definition: "The entire area drained by a river and its tributaries; also called drainage basin or catchment area.",
            example: "The Ganges watershed covers parts of India, Nepal, and Bangladesh.",
            relatedTerms: ["Drainage basin", "Catchment", "River basin"]
          },
          {
            term: "Tributary",
            pronunciation: "/ˈtrɪbjʊtəri/",
            definition: "A smaller river or stream that flows into a larger river.",
            example: "The Yamuna is a major tributary of the Ganges.",
            relatedTerms: ["Confluent", "Feeder stream", "Branch"]
          },
          {
            term: "Meander",
            pronunciation: "/miˈændər/",
            definition: "A winding curve or bend in a river, typical of the middle and lower course.",
            example: "The Mississippi River has extensive meanders in its lower course.",
            relatedTerms: ["Oxbow lake", "Point bar", "Cut bank"]
          },
          {
            term: "Delta",
            pronunciation: "/ˈdeltə/",
            definition: "A landform created by deposition of sediment at the mouth of a river.",
            example: "The Sundarbans is part of the Ganges-Brahmaputra Delta.",
            relatedTerms: ["Distributary", "Alluvial fan", "Estuary"]
          },
          {
            term: "Floodplain",
            pronunciation: "/ˈflʌdpleɪn/",
            definition: "Flat land adjacent to a river that is subject to periodic flooding.",
            example: "The Indo-Gangetic Plain is a vast floodplain.",
            relatedTerms: ["Alluvium", "Levee", "Meander belt"]
          },
          {
            term: "Estuary",
            pronunciation: "/ˈestʃuəri/",
            definition: "A partially enclosed coastal body where freshwater from rivers mixes with saltwater from the sea.",
            example: "The Narmada River has an estuary rather than a delta.",
            relatedTerms: ["Tidal river", "Brackish water", "Ria"]
          }
        ]
      }
    },
    examples: {
      title: "Famous Rivers of the World",
      renderAs: "grid",
      hero: {
        image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1920&q=80",
        tagline: "Exploring the world's most significant rivers"
      },
      introduction: "Rivers have shaped human civilization since ancient times. They provide water, transportation, fertile soil, and energy. Here are some of the world's most significant rivers.",
      featuredRanges: [
        {
          name: "Amazon River",
          icon: "🌿",
          continent: "South America",
          type: "Tropical Rainforest River",
          highestPeak: "209,000 m³/s discharge",
          length: "6,400 km",
          image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&q=80",
          funFact: "Carries 20% of all freshwater that flows into the world's oceans",
          link: "#"
        },
        {
          name: "Nile River",
          icon: "🏛️",
          continent: "Africa",
          type: "Desert River",
          highestPeak: "Longest river in world",
          length: "6,650 km",
          image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&q=80",
          funFact: "Flows north through 11 countries; cradle of Egyptian civilization",
          link: "#"
        },
        {
          name: "Ganges River",
          icon: "🙏",
          continent: "Asia",
          type: "Himalayan River",
          highestPeak: "Sacred to 1 billion people",
          length: "2,525 km",
          image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&q=80",
          funFact: "Supports over 400 million people - most populated river basin",
          link: "#"
        },
        {
          name: "Yangtze River",
          icon: "🐉",
          continent: "Asia",
          type: "Glacier-fed River",
          highestPeak: "Longest river in Asia",
          length: "6,300 km",
          image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&q=80",
          funFact: "Three Gorges Dam is world's largest hydroelectric power station",
          link: "#"
        },
        {
          name: "Mississippi River",
          icon: "🦅",
          continent: "North America",
          type: "Continental River",
          highestPeak: "2nd longest in N. America",
          length: "3,730 km",
          image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&q=80",
          funFact: "Drains 31 US states and 2 Canadian provinces",
          link: "#"
        },
        {
          name: "Danube River",
          icon: "🏰",
          continent: "Europe",
          type: "International River",
          highestPeak: "Flows through 10 countries",
          length: "2,850 km",
          image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&q=80",
          funFact: "Second longest river in Europe after the Volga",
          link: "#"
        }
      ],
     linkToExisting: "../../rivers.html",
      upscRelevance: {
        title: "UPSC Relevance - Rivers",
        topics: [
          "Indian River Systems - Himalayan vs Peninsular",
          "River interlinking projects and controversies",
          "Drainage patterns and their significance",
          "River pollution and conservation (Namami Gange)",
          "Hydroelectric potential of Indian rivers",
          "International river water disputes",
          "Flood management and river basin planning",
          "Deltaic regions and their importance"
        ],
        sampleQuestions: [
          "Compare and contrast the Himalayan and Peninsular river systems of India.",
          "Discuss the concept of antecedent and consequent rivers with Indian examples.",
          "Evaluate the environmental and social implications of river interlinking projects in India.",
          "Explain the formation of deltas with reference to the Sundarbans.",
          "Analyze the causes and consequences of river pollution in India. Suggest remedial measures."
        ]
      }
    }
  }
};
