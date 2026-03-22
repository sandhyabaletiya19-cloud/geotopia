// GEOGRAPHY WORD DICTIONARY + PROPER NOUNS

const geoWords = [
  // Common geography terms
  "arctic", "river", "delta", "ocean", "strait", "canyon", "valley", 
  "plain", "coast", "beach", "cliff", "island", "desert", "forest",
  "mountain", "volcano", "glacier", "iceberg", "erosion", "plateau",
  "basin", "ridge", "summit", "peak", "slope", "cave", "gorge",
  "fjord", "lagoon", "reef", "tide", "wave", "current", "estuary",
  "tributary", "watershed", "source", "mouth", "bank", "channel",
  "trench", "abyss", "seamount", "guyot", "atoll", "coral",
  "mangrove", "swamp", "marsh", "bog", "fen", "wetland",
  "tundra", "taiga", "savanna", "prairie", "steppe", "pampas",
  "latitude", "longitude", "equator", "tropic", "pole", "meridian",
  "hemisphere", "zone", "region", "terrain", "landscape", "horizon",
  "climate", "weather", "season", "monsoon", "drought", "flood",
  "soil", "rock", "mineral", "ore", "fossil", "sediment",
  "crust", "mantle", "core", "magma", "lava", "earthquake",
  "tsunami", "cyclone", "tornado", "hurricane", "typhoon", "storm"
];

const properNouns = [
  // Straits
  { word: "gibraltar", type: "strait", multiplier: 2 },
  { word: "malacca", type: "strait", multiplier: 2 },
  { word: "hormuz", type: "strait", multiplier: 2 },
  { word: "bering", type: "strait", multiplier: 2 },
  { word: "magellan", type: "strait", multiplier: 2 },
  { word: "bosporus", type: "strait", multiplier: 2 },
  { word: "dover", type: "strait", multiplier: 2 },
  
  // Mountains
  { word: "everest", type: "mountain", multiplier: 2 },
  { word: "andes", type: "mountain", multiplier: 2 },
  { word: "alps", type: "mountain", multiplier: 2 },
  { word: "rockies", type: "mountain", multiplier: 2 },
  { word: "himalayas", type: "mountain", multiplier: 2 },
  { word: "kilimanjaro", type: "mountain", multiplier: 2 },
  
  // Oceans/Seas
  { word: "pacific", type: "ocean", multiplier: 2 },
  { word: "atlantic", type: "ocean", multiplier: 2 },
  { word: "indian", type: "ocean", multiplier: 2 },
  { word: "arctic", type: "ocean", multiplier: 2 },
  { word: "mediterranean", type: "sea", multiplier: 2 },
  { word: "caribbean", type: "sea", multiplier: 2 },
  { word: "caspian", type: "sea", multiplier: 2 },
  
  // Rivers
  { word: "amazon", type: "river", multiplier: 2 },
  { word: "nile", type: "river", multiplier: 2 },
  { word: "ganges", type: "river", multiplier: 2 },
  { word: "mississippi", type: "river", multiplier: 2 },
  { word: "danube", type: "river", multiplier: 2 },
  { word: "rhine", type: "river", multiplier: 2 },
  { word: "yangtze", type: "river", multiplier: 2 },
  
  // Deserts
  { word: "sahara", type: "desert", multiplier: 2 },
  { word: "gobi", type: "desert", multiplier: 2 },
  { word: "atacama", type: "desert", multiplier: 2 },
  { word: "kalahari", type: "desert", multiplier: 2 },
  
  // Countries
  { word: "india", type: "country", multiplier: 2 },
  { word: "china", type: "country", multiplier: 2 },
  { word: "japan", type: "country", multiplier: 2 },
  { word: "brazil", type: "country", multiplier: 2 },
  { word: "canada", type: "country", multiplier: 2 },
  { word: "russia", type: "country", multiplier: 2 },
  { word: "france", type: "country", multiplier: 2 },
  { word: "spain", type: "country", multiplier: 2 },
  { word: "egypt", type: "country", multiplier: 2 }
];

const letterPoints = {
  'A': 1, 'E': 1, 'I': 1, 'O': 1, 'U': 1, 'L': 1, 'N': 1, 'S': 1, 'T': 1, 'R': 1,
  'D': 2, 'G': 2,
  'B': 3, 'C': 3, 'M': 3, 'P': 3,
  'F': 4, 'H': 4, 'V': 4, 'W': 4, 'Y': 4,
  'K': 5,
  'J': 8, 'X': 8,
  'Q': 10, 'Z': 10
};

function isValidGeoWord(word) {
  word = word.toLowerCase();
  
  // Check if it's a common geo word
  if (geoWords.includes(word)) {
    return { valid: true, type: 'common', multiplier: 1 };
  }
  
  // Check if it's a proper noun
  const proper = properNouns.find(p => p.word === word);
  if (proper) {
    return { valid: true, type: proper.type, multiplier: proper.multiplier };
  }
  
  return { valid: false };
}

function calculateWordScore(word, validation) {
  let baseScore = 0;
  
  for (let letter of word.toUpperCase()) {
    baseScore += letterPoints[letter] || 0;
  }
  
  // Apply multiplier for proper nouns
  return baseScore * validation.multiplier;
}
