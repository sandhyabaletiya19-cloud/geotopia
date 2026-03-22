// MISSING SPELLINGS - BRUTAL DIFFICULTY WORDS

const brutalWords = [
  {
    word: "GEOSYNCLINE",
    category: "Geomorphology",
    difficulty: "BRUTAL",
    hints: {
      definition: "A large-scale depression in Earth's crust containing thick sediment sequences",
      detail: "This geological structure forms the basis for mountain building through tectonic processes",
      image: "💧 Large sedimentary basin"
    },
    blanksPattern: "G _ _ S _ N _ L _ N E"
  },
  {
    word: "OROGRAPHIC",
    category: "Climatology",
    difficulty: "BRUTAL",
    hints: {
      definition: "Type of rainfall that occurs when moist air is forced to rise over mountains",
      detail: "This phenomenon creates rain shadows and is responsible for wet windward slopes",
      image: "⛰️ Mountain rainfall pattern"
    },
    blanksPattern: "O _ O _ R _ P _ I _"
  },
  {
    word: "ISTHMUS",
    category: "Landforms",
    difficulty: "HARD",
    hints: {
      definition: "A narrow strip of land connecting two larger landmasses with water on both sides",
      detail: "Famous examples include Panama and Suez - both have strategic canals",
      image: "🌉 Narrow land bridge"
    },
    blanksPattern: "I _ T _ M _ S"
  },
  {
    word: "PENEPLAIN",
    category: "Geomorphology",
    difficulty: "BRUTAL",
    hints: {
      definition: "A nearly flat erosion surface representing the final stage of landscape evolution",
      detail: "Named by geographer William Morris Davis in his cycle of erosion theory",
      image: "🏞️ Flat erosion surface"
    },
    blanksPattern: "P _ N _ P _ A _ N"
  },
  {
    word: "INSELBERG",
    category: "Landforms",
    difficulty: "BRUTAL",
    hints: {
      definition: "An isolated hill or mountain rising abruptly from a plain",
      detail: "German term meaning 'island mountain' - common in tropical and desert regions",
      image: "🏔️ Isolated hill"
    },
    blanksPattern: "I _ S _ L _ E _ G"
  },
  {
    word: "THERMOCLINE",
    category: "Oceanography",
    difficulty: "BRUTAL",
    hints: {
      definition: "A layer where water temperature changes rapidly with depth",
      detail: "Separates warm surface water from cold deep water in oceans and lakes",
      image: "🌡️ Temperature gradient layer"
    },
    blanksPattern: "T _ E _ M _ C _ I _ E"
  },
  {
    word: "ESCARPMENT",
    category: "Landforms",
    difficulty: "HARD",
    hints: {
      definition: "A long, steep slope or cliff at the edge of a plateau",
      detail: "Also called a scarp - formed by faulting or erosion",
      image: "🧗 Steep cliff face"
    },
    blanksPattern: "E _ C _ R _ M _ N _"
  },
  {
    word: "ARCHIPELAGO",
    category: "Physical Geography",
    difficulty: "HARD",
    hints: {
      definition: "A group or chain of islands clustered together",
      detail: "Indonesia is the world's largest archipelago with over 17,000 islands",
      image: "🏝️ Island chain"
    },
    blanksPattern: "A _ C _ I _ E _ A _ O"
  },
  {
    word: "MORAINE",
    category: "Glaciology",
    difficulty: "HARD",
    hints: {
      definition: "Debris deposited by a glacier",
      detail: "Can be lateral, medial, terminal, or ground moraine depending on location",
      image: "🧊 Glacial deposits"
    },
    blanksPattern: "M _ R _ I _ E"
  },
  {
    word: "KARST",
    category: "Geomorphology",
    difficulty: "HARD",
    hints: {
      definition: "Landscape formed from dissolution of soluble rocks like limestone",
      detail: "Features include sinkholes, caves, and underground drainage systems",
      image: "🕳️ Limestone landscape"
    },
    blanksPattern: "K _ R _ T"
  },
  {
    word: "FJORD",
    category: "Coastal Landforms",
    difficulty: "HARD",
    hints: {
      definition: "A long, narrow inlet of sea between high cliffs formed by glacial erosion",
      detail: "Most famous in Norway and New Zealand - can be over 1000 meters deep",
      image: "⛰️ Glacial inlet"
    },
    blanksPattern: "F _ O _ D"
  },
  {
    word: "YARDANG",
    category: "Aeolian Landforms",
    difficulty: "BRUTAL",
    hints: {
      definition: "Streamlined wind-eroded ridge oriented parallel to prevailing wind",
      detail: "Found in deserts - can be several meters to kilometers long",
      image: "🌬️ Wind erosion ridge"
    },
    blanksPattern: "Y _ R _ A _ G"
  },
  {
    word: "ABLATION",
    category: "Glaciology",
    difficulty: "BRUTAL",
    hints: {
      definition: "Removal of snow and ice from glacier by melting or evaporation",
      detail: "Opposite of accumulation - determines if a glacier grows or shrinks",
      image: "☀️ Glacier melting"
    },
    blanksPattern: "A _ L _ T _ O _"
  },
  {
    word: "DRUMLIN",
    category: "Glacial Landforms",
    difficulty: "BRUTAL",
    hints: {
      definition: "Elongated hill formed by glacial action with teardrop shape",
      detail: "Steeper end faces direction ice came from - often found in swarms",
      image: "🥚 Teardrop-shaped hill"
    },
    blanksPattern: "D _ U _ L _ N"
  },
  {
    word: "CONURBATION",
    category: "Urban Geography",
    difficulty: "BRUTAL",
    hints: {
      definition: "Extended urban area formed when several towns merge with suburbs",
      detail: "Examples include Tokyo-Yokohama and the English Midlands",
      image: "🏙️ Merged cities"
    },
    blanksPattern: "C _ N _ R _ A _ I _ N"
  },
  {
    word: "DENUDATION",
    category: "Geomorphology",
    difficulty: "BRUTAL",
    hints: {
      definition: "Wearing away of Earth's surface by weathering and erosion",
      detail: "Long-term process that lowers landmasses over geological time",
      image: "🌊 Surface wearing"
    },
    blanksPattern: "D _ N _ D _ T _ O _"
  },
  {
    word: "PEDIPLAIN",
    category: "Arid Landforms",
    difficulty: "BRUTAL",
    hints: {
      definition: "Gently inclined erosion surface formed in arid regions",
      detail: "Formed by parallel slope retreat - alternative to Davis's peneplain",
      image: "🏜️ Desert erosion surface"
    },
    blanksPattern: "P _ D _ P _ A _ N"
  },
  {
    word: "HALOCLINE",
    category: "Oceanography",
    difficulty: "BRUTAL",
    hints: {
      definition: "Layer in water where salinity changes rapidly with depth",
      detail: "Similar to thermocline but for salt concentration - affects ocean circulation",
      image: "🧂 Salinity gradient"
    },
    blanksPattern: "H _ L _ C _ I _ E"
  },
  {
    word: "OXBOW",
    category: "Fluvial Landforms",
    difficulty: "HARD",
    hints: {
      definition: "U-shaped lake formed when river meander is cut off",
      detail: "Named after U-shaped frame for oxen - common in floodplains",
      image: "🌊 Curved lake"
    },
    blanksPattern: "O _ B _ W"
  },
  {
    word: "CUESTA",
    category: "Landforms",
    difficulty: "BRUTAL",
    hints: {
      definition: "Ridge with steep scarp on one side and gentle slope on other",
      detail: "Formed from tilted sedimentary rock layers - Spanish for 'slope'",
      image: "⛰️ Asymmetric ridge"
    },
    blanksPattern: "C _ E _ T _"
  }
];
