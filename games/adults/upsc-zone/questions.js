// UPSC GEOGRAPHY QUESTIONS DATABASE
// Sample structure - expand to 5000+ questions

const upscQuestions = [
  {
    id: 1,
    topic: 'geomorphology',
    question: 'Which of the following is the primary agent of erosion in arid regions?',
    options: ['Water', 'Wind', 'Glacier', 'Sea waves'],
    correct: 1,
    explanation: 'In arid regions, wind is the dominant agent of erosion due to limited water availability. Wind erosion creates features like yardangs, desert pavements, and loess deposits.'
  },
  {
    id: 2,
    topic: 'indian-geo',
    question: 'The Western Ghats are an example of which type of mountain?',
    options: ['Fold mountain', 'Block mountain', 'Volcanic mountain', 'Residual mountain'],
    correct: 1,
    explanation: 'The Western Ghats are block mountains (horsts) formed by faulting during the breakup of Gondwana. They run parallel to the western coast of India.'
  },
  {
    id: 3,
    topic: 'climatology',
    question: 'The phenomenon of retreating monsoon in India is associated with:',
    options: ['Northeast monsoon', 'Southwest monsoon', 'Western disturbances', 'Jet streams'],
    correct: 0,
    explanation: 'Retreating monsoon (October-December) is associated with the northeast monsoon, which brings rainfall to Tamil Nadu and coastal Andhra Pradesh as winds move from land to sea.'
  },
  {
    id: 4,
    topic: 'oceanography',
    question: 'Which ocean current is responsible for moderating the climate of Western Europe?',
    options: ['Canary Current', 'Gulf Stream', 'Labrador Current', 'California Current'],
    correct: 1,
    explanation: 'The Gulf Stream is a warm ocean current that carries heat from the Gulf of Mexico to Western Europe, making its climate significantly warmer than other regions at similar latitudes.'
  },
  {
    id: 5,
    topic: 'geomorphology',
    question: 'A u-shaped valley is characteristic of which type of erosion?',
    options: ['River erosion', 'Glacial erosion', 'Wind erosion', 'Sea wave erosion'],
    correct: 1,
    explanation: 'U-shaped valleys are formed by glacial erosion. Moving glaciers carve out wide, U-shaped valleys, unlike rivers which create V-shaped valleys.'
  },
  {
    id: 6,
    topic: 'indian-geo',
    question: 'The highest peak in the Eastern Ghats is:',
    options: ['Anai Mudi', 'Dodda Betta', 'Mahendragiri', 'Arma Konda'],
    correct: 3,
    explanation: 'Arma Konda (also known as Sitamma Konda) at 1,680 meters is the highest peak in the Eastern Ghats, located in Andhra Pradesh.'
  },
  {
    id: 7,
    topic: 'world-geo',
    question: 'The Great Rift Valley is located in:',
    options: ['South America', 'Africa', 'Asia', 'Australia'],
    correct: 1,
    explanation: 'The Great Rift Valley extends from Lebanon in Asia to Mozambique in Africa. It is a result of tectonic plate divergence and contains numerous lakes and volcanoes.'
  },
  {
    id: 8,
    topic: 'climatology',
    question: 'Which of the following is NOT a greenhouse gas?',
    options: ['Carbon dioxide', 'Methane', 'Nitrogen', 'Nitrous oxide'],
    correct: 2,
    explanation: 'Nitrogen (N2) is not a greenhouse gas. While it makes up 78% of the atmosphere, it does not absorb infrared radiation. CO2, CH4, and N2O are all greenhouse gases.'
  },
  {
    id: 9,
    topic: 'resources',
    question: 'Which state is the largest producer of coffee in India?',
    options: ['Tamil Nadu', 'Kerala', 'Karnataka', 'Andhra Pradesh'],
    correct: 2,
    explanation: 'Karnataka produces about 70% of India\'s coffee, followed by Kerala and Tamil Nadu. The coffee-growing regions are mainly in the Western Ghats.'
  },
  {
    id: 10,
    topic: 'oceanography',
    question: 'The Sargasso Sea is unique because it:',
    options: ['Has no coastline', 'Is the saltiest sea', 'Is completely frozen', 'Contains freshwater'],
    correct: 0,
    explanation: 'The Sargasso Sea, located in the North Atlantic Ocean, is unique as it has no land boundaries and is defined by four ocean currents forming the North Atlantic Gyre.'
  }
  
  // ... ADD 4990 MORE QUESTIONS ...
  // Expand with questions covering:
  // - Geomorphology (500 questions)
  // - Climatology (450 questions)
  // - Oceanography (350 questions)
  // - Indian Geography (800 questions)
  // - World Geography (600 questions)
  // - Resources & Agriculture (400 questions)
  // - Economic Geography (350 questions)
  // - Map Skills (300 questions)
];

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = upscQuestions;
}
