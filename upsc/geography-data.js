// geography-data.js
const geographyData = {
  "Physical Geography": {
    "Geomorphology": [
      {
        question: "What is the theory of plate tectonics?",
        answer: "The theory that Earth's outer shell is divided into several plates that glide over the mantle. These plates interact at boundaries causing earthquakes, volcanoes, and mountain formation.",
        tags: ["plate tectonics", "earth structure"]
      },
      {
        question: "Explain the process of weathering.",
        answer: "Weathering is the breakdown of rocks at Earth's surface through physical (mechanical), chemical, or biological processes without involving movement of the material.",
        tags: ["weathering", "erosion"]
      },
      {
        question: "What are the major landforms created by glaciers?",
        answer: "U-shaped valleys, cirques, arêtes, horns, moraines, drumlins, eskers, and fjords are major glacial landforms.",
        tags: ["glaciers", "landforms"]
      }
    ],
    "Climatology": [
      {
        question: "What is the Coriolis effect?",
        answer: "The deflection of moving objects (including air and water) caused by Earth's rotation. It deflects to the right in Northern Hemisphere and left in Southern Hemisphere.",
        tags: ["coriolis", "atmospheric circulation"]
      },
      {
        question: "Explain the Indian Monsoon system.",
        answer: "Seasonal reversal of winds caused by differential heating of land and ocean. SW monsoon (June-Sept) brings rainfall; NE monsoon (Oct-Dec) affects Tamil Nadu and coastal Andhra.",
        tags: ["monsoon", "India", "climate"]
      },
      {
        question: "What are jet streams?",
        answer: "High-speed winds in the upper troposphere flowing from west to east. They influence weather patterns and are caused by temperature gradients and Earth's rotation.",
        tags: ["jet streams", "atmospheric circulation"]
      }
    ],
    "Oceanography": [
      {
        question: "What causes ocean currents?",
        answer: "Wind, temperature and salinity differences (thermohaline circulation), Coriolis effect, and tides. Warm currents flow from equator to poles; cold currents flow from poles to equator.",
        tags: ["ocean currents", "circulation"]
      },
      {
        question: "Explain El Niño and La Niña.",
        answer: "El Niño: Warming of Pacific Ocean surface; weakens trade winds; affects global weather. La Niña: Opposite phenomenon with cooling; strengthens trade winds.",
        tags: ["ENSO", "climate variability"]
      }
    ]
  },
  "Human Geography": {
    "Population": [
      {
        question: "What is demographic transition theory?",
        answer: "Theory explaining population change through 4-5 stages: High birth/death rates → Declining death rates → Declining birth rates → Low birth/death rates → (Possibly declining population).",
        tags: ["population", "demographic transition"]
      },
      {
        question: "Explain population distribution in India.",
        answer: "Highly uneven. High density: Gangetic plains, coastal areas, deltas. Low density: Himalayan region, deserts, hilly areas. Factors: Climate, soil, water, economic opportunities.",
        tags: ["India", "population distribution"]
      }
    ],
    "Settlement": [
      {
        question: "Differentiate between rural and urban settlements.",
        answer: "Rural: Primary activities, lower density, agriculture-based, smaller population. Urban: Secondary/tertiary activities, higher density, diverse economy, larger population, better infrastructure.",
        tags: ["settlements", "rural", "urban"]
      }
    ],
    "Migration": [
      {
        question: "What are push and pull factors of migration?",
        answer: "Push: Unemployment, poverty, disasters, conflict, lack of services. Pull: Better jobs, education, healthcare, safety, higher living standards.",
        tags: ["migration", "push-pull factors"]
      }
    ]
  },
  "Economic Geography": {
    "Agriculture": [
      {
        question: "What is Green Revolution in India?",
        answer: "Agricultural transformation (1960s-70s) using HYV seeds, fertilizers, irrigation, and mechanization. Increased wheat and rice production significantly, mainly in Punjab, Haryana, and western UP.",
        tags: ["Green Revolution", "India", "agriculture"]
      },
      {
        question: "Explain different types of farming in India.",
        answer: "Subsistence (primitive & intensive), Plantation, Commercial, Mixed, Dairy, Horticulture, Organic farming. Each suited to different regions and economic conditions.",
        tags: ["farming types", "India"]
      }
    ],
    "Industry": [
      {
        question: "What are factors affecting industrial location?",
        answer: "Raw materials, power, labor, capital, market, transport, government policy, climate, and historical factors influence where industries locate.",
        tags: ["industrial location", "factors"]
      }
    ]
  },
  "India-Specific": {
    "Physical Features": [
      {
        question: "Describe the physiographic divisions of India.",
        answer: "1) The Himalayas 2) Northern Plains 3) Peninsular Plateau 4) Coastal Plains 5) Islands. Each has distinct geological history, relief, and resources.",
        tags: ["India", "physiography"]
      },
      {
        question: "What is the importance of the Himalayas?",
        answer: "Climate barrier (blocks cold winds, traps monsoon), perennial rivers, biodiversity, tourism, strategic defense, glaciers (water source), hydropower potential.",
        tags: ["Himalayas", "India"]
      }
    ],
    "Climate": [
      {
        question: "Explain the climate regions of India.",
        answer: "Tropical wet (Western Ghats), Tropical dry (Deccan), Subtropical humid (Northern plains), Mountain (Himalayas), Arid (Rajasthan), Semi-arid (Rain shadow areas).",
        tags: ["India", "climate regions"]
      }
    ],
    "Resources": [
      {
        question: "Describe the distribution of coal in India.",
        answer: "Gondwana coalfields (90%): Jharkhand, Odisha, Chhattisgarh, West Bengal, Madhya Pradesh. Tertiary coal: Assam, Arunachal Pradesh, Meghalaya.",
        tags: ["India", "coal", "mineral resources"]
      }
    ]
  }
};

// Make it available globally
if (typeof module !== 'undefined' && module.exports) {
  module.exports = geographyData;
}
