const MISSING_LETTERS_DATABASE = {
    // Easy - 3-4 letters missing
    easy: [
        { word: "FRANCE", missing: 2 },
        { word: "BRAZIL", missing: 2 },
        { word: "CANADA", missing: 2 },
        { word: "ITALY", missing: 2 },
        { word: "SPAIN", missing: 2 },
        { word: "EGYPT", missing: 2 },
        { word: "JAPAN", missing: 2 },
        { word: "INDIA", missing: 2 },
        { word: "CHINA", missing: 2 },
        { word: "PERU", missing: 2 },
        { word: "CHILE", missing: 2 },
        { word: "KENYA", missing: 2 },
        { word: "PARIS", missing: 2 },
        { word: "LONDON", missing: 2 },
        { word: "TOKYO", missing: 2 },
        { word: "ROME", missing: 2 },
        { word: "CAIRO", missing: 2 },
        { word: "BERLIN", missing: 2 },
        { word: "MADRID", missing: 2 },
        { word: "ATHENS", missing: 2 },
        // Rivers & Natural
        { word: "NILE", missing: 2 },
        { word: "AMAZON", missing: 2 },
        { word: "ALPS", missing: 2 },
        { word: "SAHARA", missing: 2 },
        { word: "EVEREST", missing: 2 }
    ],

    // Medium - 4-5 letters missing
    medium: [
        { word: "AUSTRALIA", missing: 3 },
        { word: "ARGENTINA", missing: 3 },
        { word: "SWITZERLAND", missing: 4 },
        { word: "NETHERLANDS", missing: 4 },
        { word: "PORTUGAL", missing: 3 },
        { word: "COLOMBIA", missing: 3 },
        { word: "THAILAND", missing: 3 },
        { word: "SINGAPORE", missing: 3 },
        { word: "VENEZUELA", missing: 3 },
        { word: "INDONESIA", missing: 3 },
        { word: "PAKISTAN", missing: 3 },
        { word: "ETHIOPIA", missing: 3 },
        { word: "BUDAPEST", missing: 3 },
        { word: "ISTANBUL", missing: 3 },
        { word: "BANGKOK", missing: 3 },
        { word: "STOCKHOLM", missing: 4 },
        { word: "AMSTERDAM", missing: 3 },
        { word: "VIENNA", missing: 3 },
        { word: "PRAGUE", missing: 3 },
        { word: "DUBLIN", missing: 3 },
        // Natural features
        { word: "HIMALAYA", missing: 3 },
        { word: "ATLANTIC", missing: 3 },
        { word: "PACIFIC", missing: 3 },
        { word: "MEDITERRANEAN", missing: 5 },
        { word: "CARIBBEAN", missing: 3 }
    ],

    // Hard - 5-6 letters missing
    hard: [
        { word: "UZBEKISTAN", missing: 4 },
        { word: "MOZAMBIQUE", missing: 4 },
        { word: "KAZAKHSTAN", missing: 4 },
        { word: "AZERBAIJAN", missing: 4 },
        { word: "LIECHTENSTEIN", missing: 5 },
        { word: "TURKMENISTAN", missing: 5 },
        { word: "KYRGYZSTAN", missing: 4 },
        { word: "AFGHANISTAN", missing: 4 },
        { word: "MADAGASCAR", missing: 4 },
        { word: "MAURITANIA", missing: 4 },
        { word: "OUAGADOUGOU", missing: 4 },
        { word: "TEGUCIGALPA", missing: 4 },
        { word: "BRATISLAVA", missing: 4 },
        { word: "REYKJAVIK", missing: 4 },
        { word: "COPENHAGEN", missing: 4 },
        { word: "PHILADELPHIA", missing: 5 },
        { word: "JOHANNESBURG", missing: 5 },
        { word: "CONSTANTINOPLE", missing: 6 },
        { word: "ADDIS ABABA", missing: 4 },
        { word: "KUALA LUMPUR", missing: 5 },
        // Natural
        { word: "KILIMANJARO", missing: 4 },
        { word: "MISSISSIPPI", missing: 4 },
        { word: "PATAGONIA", missing: 4 },
        { word: "ANTARCTICA", missing: 4 },
        { word: "YELLOWSTONE", missing: 4 }
    ],

    // Expert - 6+ letters missing
    expert: [
        { word: "CZECHOSLOVAKIA", missing: 6 },
        { word: "CONSTANTINOPLE", missing: 6 },
        { word: "BANDAR SERI BEGAWAN", missing: 7 },
        { word: "NUKU ALOFA", missing: 4 },
        { word: "PARAMARIBO", missing: 4 },
        { word: "ULAANBAATAR", missing: 5 },
        { word: "ANTANANARIVO", missing: 5 },
        { word: "YAMOUSSOUKRO", missing: 5 },
        { word: "BISSAU", missing: 3 },
        { word: "DUSHANBE", missing: 3 }
    ]
};

// Function to generate missing letter puzzle
function generateMissingLettersPuzzle(difficulty) {
    const pool = MISSING_LETTERS_DATABASE[difficulty];
    const item = pool[Math.floor(Math.random() * pool.length)];
    const word = item.word;
    const numMissing = item.missing;
    
    // Select random positions to remove
    const positions = [];
    const availablePos = [];
    
    for (let i = 0; i < word.length; i++) {
        if (word[i] !== ' ') availablePos.push(i);
    }
    
    while (positions.length < Math.min(numMissing, availablePos.length)) {
        const idx = availablePos[Math.floor(Math.random() * availablePos.length)];
        if (!positions.includes(idx)) {
            positions.push(idx);
        }
    }
    
    return {
        word: word,
        missingIndices: positions.sort((a, b) => a - b),
        answer: word,
        hint: `${word.replace(/\s/g, '').length} letters total`
    };
}
