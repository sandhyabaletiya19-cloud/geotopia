/**
 * GEOTOPIA - African Civilizations
 * Ancient Egypt, Nubia, Carthage, Axum, Ghana, Mali, Songhai, Great Zimbabwe, Ethiopia
 */

const AFRICA_CIVILIZATIONS = {
  region: 'Africa',
  color: '#FFD700', // Gold
  timeRange: { start: -3100, end: 2026 },
  
  civilizations: [
    {
      id: 'egypt-ancient',
      name: 'Ancient Egypt',
      timespan: { start: -3100, end: -30 },
      center: { lat: 26.8206, lng: 30.8025 }, // Luxor
      
      timeline: [
        {
          year: -3100,
          event: 'Unification of Upper and Lower Egypt',
          type: 'political',
          importance: 10,
          ruler: 'Narmer (Menes)',
          mapState: {
            borders: [
              { lat: 31.0, lng: 31.5 }, // Nile Delta
              { lat: 30.0, lng: 32.0 },
              { lat: 24.0, lng: 33.0 }, // First Cataract
              { lat: 24.0, lng: 30.0 },
              { lat: 31.0, lng: 29.0 }
            ],
            capital: { name: 'Memphis', lat: 29.8, lng: 31.2 },
            color: '#FFD700'
          },
          details: 'King Narmer united Upper and Lower Egypt, establishing the First Dynasty and beginning 3000 years of pharaonic rule.',
          achievements: ['First unified nation-state', 'Hieroglyphic writing system', 'Centralized government']
        },
        {
          year: -2686,
          event: 'Old Kingdom Begins - Age of Pyramids',
          type: 'major',
          importance: 9,
          ruler: 'Djoser',
          mapState: {
            expansion: 'stable',
            monuments: [
              { name: 'Step Pyramid of Djoser', lat: 29.8714, lng: 31.2166 }
            ]
          },
          details: 'The Old Kingdom saw the construction of the great pyramids at Giza and the establishment of divine kingship.',
          achievements: ['Pyramid construction', 'Advanced mathematics', 'Sophisticated bureaucracy']
        },
        {
          year: -2560,
          event: 'Great Pyramid of Giza Constructed',
          type: 'major',
          importance: 10,
          ruler: 'Khufu',
          mapState: {
            monuments: [
              { name: 'Great Pyramid', lat: 29.9792, lng: 31.1342, size: 'massive' }
            ]
          },
          details: 'The Great Pyramid, built for Pharaoh Khufu, remained the tallest human-made structure for 3,800 years.',
          achievements: ['Engineering marvel', 'Mathematical precision', 'Organizational capability'],
          culturalImpact: 'Symbol of ancient civilization for millennia'
        },
        {
          year: -2181,
          event: 'First Intermediate Period - Kingdom Fractures',
          type: 'catastrophic',
          importance: 7,
          details: 'Central authority collapsed, leading to civil war and regional fragmentation.',
          causes: ['Climate change', 'Famine', 'Political instability']
        },
        {
          year: -2055,
          event: 'Middle Kingdom - Reunification',
          type: 'political',
          importance: 8,
          ruler: 'Mentuhotep II',
          mapState: {
            capital: { name: 'Thebes', lat: 25.7, lng: 32.6 },
            expansion: 'growing'
          },
          details: 'Egypt reunified under Theban rulers, beginning a golden age of art and literature.',
          achievements: ['Literary classics', 'Irrigation projects', 'Trade expansion']
        },
        {
          year: -1550,
          event: 'New Kingdom - Imperial Egypt',
          type: 'major',
          importance: 9,
          ruler: 'Ahmose I',
          mapState: {
            borders: [
              { lat: 33.0, lng: 32.0 }, // Extended to Syria
              { lat: 32.0, lng: 35.0 },
              { lat: 20.0, lng: 35.0 }, // Extended to Nubia
              { lat: 15.0, lng: 30.0 },
              { lat: 24.0, lng: 25.0 },
              { lat: 31.0, lng: 27.0 }
            ],
            vassals: ['Nubia', 'Canaan', 'Syria']
          },
          details: 'Egypt became an imperial power, controlling territory from Nubia to Syria.',
          achievements: ['Military expansion', 'Monumental architecture', 'Diplomatic relations']
        },
        {
          year: -1353,
          event: 'Akhenaten\'s Monotheistic Revolution',
          type: 'cultural',
          importance: 8,
          ruler: 'Akhenaten',
          details: 'Pharaoh Akhenaten attempted to replace traditional polytheism with worship of Aten (sun disk).',
          culturalImpact: 'First known monotheistic movement',
          consequences: 'Reversed after his death by Tutankhamun'
        },
        {
          year: -1274,
          event: 'Battle of Kadesh',
          type: 'military',
          importance: 8,
          ruler: 'Ramesses II',
          location: { lat: 34.5, lng: 36.5 },
          opponent: 'Hittite Empire',
          details: 'Largest chariot battle in history between Egypt and Hittites, ended in stalemate.',
          outcome: 'First recorded peace treaty in history (1258 BCE)'
        },
        {
          year: -1258,
          event: 'Egyptian-Hittite Peace Treaty',
          type: 'political',
          importance: 9,
          details: 'First surviving international peace treaty, establishing borders and mutual defense.',
          significance: 'Model for modern international relations'
        },
        {
          year: -1077,
          event: 'Third Intermediate Period - Fragmentation',
          type: 'political',
          importance: 6,
          details: 'Egypt split into rival dynasties, with Libyan and Nubian rulers.',
          causes: ['Economic decline', 'Foreign incursions', 'Priestly power struggles']
        },
        {
          year: -664,
          event: 'Late Period - Brief Restoration',
          type: 'political',
          importance: 6,
          details: 'Psamtik I reunified Egypt with Assyrian support, beginning the Saite Dynasty.'
        },
        {
          year: -525,
          event: 'Persian Conquest',
          type: 'political',
          importance: 7,
          ruler: 'Cambyses II (Persia)',
          details: 'Egypt became a Persian province, ending native rule.',
          mapState: {
            controlled: 'Persian Empire'
          }
        },
        {
          year: -332,
          event: 'Alexander the Great Conquers Egypt',
          type: 'political',
          importance: 8,
          ruler: 'Alexander III of Macedon',
          details: 'Alexander liberated Egypt from Persian rule and was crowned pharaoh.',
          mapState: {
            capital: { name: 'Alexandria', lat: 31.2, lng: 29.9 }
          }
        },
        {
          year: -305,
          event: 'Ptolemaic Dynasty Begins',
          type: 'political',
          importance: 8,
          ruler: 'Ptolemy I Soter',
          details: 'Greek-speaking Macedonian dynasty rules Egypt, blending Greek and Egyptian culture.',
          achievements: ['Library of Alexandria', 'Lighthouse of Alexandria', 'Hellenistic culture']
        },
        {
          year: -51,
          event: 'Cleopatra VII Becomes Queen',
          type: 'political',
          importance: 8,
          ruler: 'Cleopatra VII',
          details: 'Last active pharaoh of Egypt, allied with Julius Caesar and Mark Antony.',
          culturalImpact: 'Symbol of female power and ancient Egypt'
        },
        {
          year: -30,
          event: 'Roman Conquest - End of Ancient Egypt',
          type: 'catastrophic',
          importance: 10,
          details: 'Octavian (Augustus) defeats Cleopatra and Mark Antony. Egypt becomes Roman province.',
          significance: 'End of 3,000 years of pharaonic civilization',
          mapState: {
            controlled: 'Roman Empire'
          }
        }
      ],
      
      achievements: [
        'Pyramids of Giza',
        'Hieroglyphic writing',
        'Papyrus production',
        'Advanced medicine',
        'Mathematics and geometry',
        'Calendar system',
        'Mummification',
        'Monumental architecture',
        'Irrigation systems',
        'Astronomy'
      ],
      
      keyFigures: [
        { name: 'Narmer', role: 'Unifier of Egypt', years: [-3100, -3050] },
        { name: 'Imhotep', role: 'Architect, Physician', years: [-2650, -2600] },
        { name: 'Khufu', role: 'Pyramid Builder', years: [-2589, -2566] },
        { name: 'Hatshepsut', role: 'Female Pharaoh', years: [-1479, -1458] },
        { name: 'Akhenaten', role: 'Monotheist Reformer', years: [-1353, -1336] },
        { name: 'Tutankhamun', role: 'Boy King', years: [-1332, -1323] },
        { name: 'Ramesses II', role: 'Great Builder', years: [-1279, -1213] },
        { name: 'Cleopatra VII', role: 'Last Pharaoh', years: [-51, -30] }
      ],
      
      influence: {
        influenced: ['nubia', 'phoenicia', 'greece-ancient', 'persia'],
        influencedBy: ['mesopotamia'],
        tradeRoutes: ['mediterranean', 'red-sea', 'nile'],
        culturalExchange: ['writing', 'architecture', 'religion', 'mathematics']
      }
    },
    
    {
      id: 'nubia-kush',
      name: 'Nubia (Kush)',
      timespan: { start: -2500, end: 350 },
      center: { lat: 18.0, lng: 33.0 }, // Meroe
      
      timeline: [
        {
          year: -2500,
          event: 'Kingdom of Kerma Emerges',
          type: 'political',
          importance: 7,
          mapState: {
            borders: [
              { lat: 20.0, lng: 31.0 },
              { lat: 20.0, lng: 35.0 },
              { lat: 15.0, lng: 35.0 },
              { lat: 15.0, lng: 31.0 }
            ],
            capital: { name: 'Kerma', lat: 19.6, lng: 30.4 }
          },
          details: 'First Nubian kingdom, rich in gold and trade.',
          achievements: ['Advanced pottery', 'Trade networks', 'Fortifications']
        },
        {
          year: -1070,
          event: 'Kingdom of Kush Founded',
          type: 'political',
          importance: 8,
          mapState: {
            capital: { name: 'Napata', lat: 18.5, lng: 31.8 }
          },
          details: 'Independent Kushite kingdom established after Egyptian withdrawal.'
        },
        {
          year: -747,
          event: 'Kushite Conquest of Egypt',
          type: 'military',
          importance: 9,
          ruler: 'Piye',
          details: 'Nubian pharaohs conquer Egypt, establishing the 25th Dynasty.',
          mapState: {
            borders: [
              { lat: 31.0, lng: 32.0 }, // Controlled all of Egypt
              { lat: 15.0, lng: 35.0 }
            ]
          },
          achievements: ['United Nile Valley', 'Egyptian cultural renaissance']
        },
        {
          year: -656,
          event: 'Assyrian Invasion - Retreat to Nubia',
          type: 'military',
          importance: 7,
          details: 'Assyrians drive Kushite pharaohs from Egypt back to Nubia.'
        },
        {
          year: -300,
          event: 'Capital Moves to Meroe',
          type: 'political',
          importance: 7,
          mapState: {
            capital: { name: 'Meroe', lat: 16.9, lng: 33.7 }
          },
          details: 'Meroe becomes new capital, develops independent Meroitic script.',
          achievements: ['Meroitic writing', 'Iron production', 'Pyramid building']
        },
        {
          year: 350,
          event: 'Axumite Conquest - Kingdom Falls',
          type: 'catastrophic',
          importance: 8,
          details: 'Kingdom of Axum conquers Meroe, ending Kushite civilization.'
        }
      ],
      
      achievements: [
        'Pyramids of Meroe',
        'Meroitic script',
        'Iron smelting',
        'Gold trade',
        'Archery mastery',
        'Female rulers (Kandakes)'
      ],
      
      keyFigures: [
        { name: 'Piye', role: 'Conqueror of Egypt', years: [-747, -716] },
        { name: 'Taharqa', role: 'Pharaoh of Egypt', years: [-690, -664] },
        { name: 'Amanirenas', role: 'Warrior Queen', years: [-40, -10] }
      ],
      
      influence: {
        influenced: ['axum'],
        influencedBy: ['egypt-ancient'],
        tradeRoutes: ['nile', 'red-sea', 'trans-saharan']
      }
    },
    
    {
      id: 'carthage',
      name: 'Carthage',
      timespan: { start: -814, end: -146 },
      center: { lat: 36.8, lng: 10.3 }, // Tunis
      
      timeline: [
        {
          year: -814,
          event: 'Founding of Carthage',
          type: 'political',
          importance: 8,
          founder: 'Dido (legendary)',
          mapState: {
            capital: { name: 'Carthage', lat: 36.8529, lng: 10.3233 },
            color: '#9B30FF'
          },
          details: 'Phoenician colonists from Tyre establish Carthage in North Africa.',
          achievements: ['Strategic harbor', 'Trade network']
        },
        {
          year: -600,
          event: 'Carthaginian Thalassocracy',
          type: 'major',
          importance: 8,
          mapState: {
            controlled: ['western-mediterranean', 'north-africa-coast', 'sardinia', 'sicily-west', 'iberia-south']
          },
          details: 'Carthage dominates western Mediterranean trade and naval power.',
          achievements: ['Naval supremacy', 'Trade monopolies', 'Colonial empire']
        },
        {
          year: -264,
          event: 'First Punic War Begins',
          type: 'military',
          importance: 9,
          opponent: 'Roman Republic',
          details: 'Rome challenges Carthaginian control of Sicily, beginning 23-year war.',
          location: { lat: 37.5, lng: 14.0 } // Sicily
        },
        {
          year: -241,
          event: 'First Punic War Ends - Loss of Sicily',
          type: 'political',
          importance: 8,
          details: 'Carthage loses Sicily to Rome, pays massive indemnity.',
          consequences: 'Loss of naval dominance'
        },
        {
          year: -218,
          event: 'Hannibal Crosses the Alps',
          type: 'military',
          importance: 10,
          ruler: 'Hannibal Barca',
          details: 'Hannibal leads army with war elephants over Alps to invade Italy.',
          culturalImpact: 'One of history\'s greatest military feats'
        },
        {
          year: -216,
          event: 'Battle of Cannae',
          type: 'military',
          importance: 10,
          details: 'Hannibal achieves history\'s greatest tactical victory, destroying Roman army.',
          casualties: '50,000-70,000 Romans killed',
          significance: 'Studied in military academies for 2,000 years'
        },
        {
          year: -202,
          event: 'Battle of Zama - Hannibal Defeated',
          type: 'military',
          importance: 9,
          opponent: 'Scipio Africanus',
          details: 'Rome defeats Hannibal in North Africa, ending Second Punic War.'
        },
        {
          year: -149,
          event: 'Third Punic War Begins',
          type: 'military',
          importance: 8,
          details: 'Rome besieges Carthage for final destruction.'
        },
        {
          year: -146,
          event: 'Destruction of Carthage',
          type: 'catastrophic',
          importance: 10,
          details: 'Rome completely destroys Carthage, ending Punic civilization. City burned for 17 days.',
          casualties: '150,000 killed, 50,000 enslaved',
          aftermath: 'Site cursed and salted (legend)',
          mapState: {
            destroyed: true,
            controlled: 'Roman Republic'
          }
        }
      ],
      
      achievements: [
        'Advanced naval technology',
        'Maritime trade empire',
        'Military tactics',
        'Alphabet spread',
        'Agricultural innovations',
        'Urban planning'
      ],
      
      keyFigures: [
        { name: 'Dido', role: 'Legendary Founder', years: [-814, -760] },
        { name: 'Hamilcar Barca', role: 'General', years: [-275, -228] },
        { name: 'Hannibal Barca', role: 'Greatest General', years: [-247, -183] },
        { name: 'Scipio Africanus', role: 'Roman Conqueror', years: [-236, -183] }
      ],
      
      influence: {
        influenced: ['rome'],
        influencedBy: ['phoenicia'],
        rivalries: ['rome'],
        tradeRoutes: ['mediterranean', 'trans-saharan']
      }
    },
    
    {
      id: 'axum',
      name: 'Kingdom of Axum',
      timespan: { start: -100, end: 940 },
      center: { lat: 14.1, lng: 38.7 }, // Axum, Ethiopia
      
      timeline: [
        {
          year: -100,
          event: 'Kingdom of Axum Established',
          type: 'political',
          importance: 7,
          mapState: {
            capital: { name: 'Axum', lat: 14.1308, lng: 38.7167 }
          },
          details: 'Axumite kingdom emerges in Ethiopian highlands.'
        },
        {
          year: 330,
          event: 'Ezana Converts to Christianity',
          type: 'cultural',
          importance: 9,
          ruler: 'King Ezana',
          details: 'Axum becomes one of first Christian kingdoms, adopting Coptic Christianity.',
          significance: 'Ethiopian Christianity continues to present day'
        },
        {
          year: 350,
          event: 'Conquest of Meroe',
          type: 'military',
          importance: 8,
          details: 'Axum destroys Kingdom of Kush, controls Red Sea trade.',
          mapState: {
            expansion: 'major',
            controlled: ['eritrea', 'yemen-parts']
          }
        },
        {
          year: 520,
          event: 'Height of Axumite Power',
          type: 'major',
          importance: 8,
          details: 'Axum controls Red Sea trade, mints gold coins, builds great stelae.',
          achievements: ['Obelisks of Axum', 'Trade with Rome/Persia/India', 'Naval power']
        },
        {
          year: 640,
          event: 'Islamic Expansion - Trade Decline',
          type: 'political',
          importance: 7,
          details: 'Arab conquest of Egypt and North Africa isolates Christian Axum.',
          consequences: 'Loss of Mediterranean trade'
        },
        {
          year: 940,
          event: 'Zagwe Dynasty - Axum Falls',
          type: 'political',
          importance: 7,
          details: 'Non-Axumite dynasty seizes power, ending kingdom.'
        }
      ],
      
      achievements: [
        'Ge\'ez script',
        'Giant stelae/obelisks',
        'Coinage system',
        'Red Sea trade dominance',
        'Christian literature',
        'Terrace agriculture'
      ],
      
      keyFigures: [
        { name: 'Ezana', role: 'Christian Converter', years: [320, 360] },
        { name: 'Kaleb', role: 'Warrior King', years: [520, 540] }
      ],
      
      influence: {
        influenced: ['ethiopia'],
        influencedBy: ['nubia-kush', 'arabia'],
        tradeRoutes: ['red-sea', 'indian-ocean']
      }
    },
    
    {
      id: 'ghana-empire',
      name: 'Ghana Empire',
      timespan: { start: 300, end: 1240 },
      center: { lat: 15.0, lng: -8.0 }, // Ancient Ghana
      
      timeline: [
        {
          year: 300,
          event: 'Ghana Empire Forms',
          type: 'political',
          importance: 7,
          mapState: {
            borders: [
              { lat: 18.0, lng: -12.0 },
              { lat: 18.0, lng: -4.0 },
              { lat: 12.0, lng: -4.0 },
              { lat: 12.0, lng: -12.0 }
            ],
            capital: { name: 'Koumbi Saleh', lat: 15.8, lng: -8.0 }
          },
          details: 'Soninke people establish Ghana Empire, controlling Saharan gold trade.'
        },
        {
          year: 800,
          event: 'Golden Age of Ghana',
          type: 'major',
          importance: 8,
          details: 'Ghana becomes richest empire in Africa, controlling gold-salt trade.',
          achievements: ['Gold trade monopoly', 'Iron weapons', 'Cavalry forces'],
          wealth: 'King said to own 1,000 horses with gold-adorned saddles'
        },
        {
          year: 1076,
          event: 'Almoravid Conquest',
          type: 'military',
          importance: 7,
          details: 'Muslim Almoravids conquer Ghana, forcing Islamic conversion.',
          consequences: 'Beginning of decline'
        },
        {
          year: 1240,
          event: 'Absorbed into Mali Empire',
          type: 'political',
          importance: 7,
          details: 'Ghana territories incorporated into rising Mali Empire.'
        }
      ],
      
      achievements: [
        'Trans-Saharan trade control',
        'Gold production',
        'Military organization',
        'Iron smelting',
        'Urban centers'
      ],
      
      influence: {
        influenced: ['mali'],
        tradeRoutes: ['trans-saharan']
      }
    },
    
    {
      id: 'mali-empire',
      name: 'Mali Empire',
      timespan: { start: 1235, end: 1670 },
      center: { lat: 13.0, lng: -8.0 }, // Bamako area
      
      timeline: [
        {
          year: 1235,
          event: 'Sundiata Keita Founds Mali',
          type: 'political',
          importance: 9,
          ruler: 'Sundiata Keita',
          mapState: {
            capital: { name: 'Niani', lat: 11.75, lng: -8.28 },
            color: '#FFD700'
          },
          details: 'Sundiata defeats Sosso king, establishes Mali Empire.',
          culturalImpact: 'Epic of Sundiata - West African literary masterpiece'
        },
        {
          year: 1312,
          event: 'Mansa Musa Becomes Emperor',
          type: 'political',
          importance: 10,
          ruler: 'Mansa Musa',
          details: 'Richest person in human history takes throne.'
        },
        {
          year: 1324,
          event: 'Mansa Musa\'s Hajj to Mecca',
          type: 'cultural',
          importance: 10,
          ruler: 'Mansa Musa',
          mapState: {
            route: [
              { lat: 12.65, lng: -8.0 }, // Niani
              { lat: 16.0, lng: 0.0 }, // Gao
              { lat: 20.0, lng: 18.0 }, // Across Sahara
              { lat: 30.0, lng: 31.2 }, // Cairo
              { lat: 21.4, lng: 39.8 }  // Mecca
            ]
          },
          details: 'Mansa Musa travels to Mecca with 60,000 people, so much gold it crashes Egyptian economy for decade.',
          wealth: 'Gave away so much gold it caused inflation',
          culturalImpact: 'Put Mali on world maps',
          achievements: ['Built mosques across route', 'Established libraries', 'Diplomatic relations']
        },
        {
          year: 1330,
          event: 'Height of Mali Empire',
          type: 'major',
          importance: 9,
          mapState: {
            borders: [
              { lat: 18.0, lng: -13.0 },
              { lat: 18.0, lng: 5.0 },
              { lat: 8.0, lng: 5.0 },
              { lat: 8.0, lng: -13.0 }
            ],
            cities: [
              { name: 'Timbuktu', lat: 16.77, lng: -3.0, importance: 10 },
              { name: 'Gao', lat: 16.27, lng: -0.04 },
              { name: 'Djenne', lat: 13.9, lng: -4.55 }
            ]
          },
          details: 'Mali controls vast territory, Timbuktu becomes legendary center of learning.',
          achievements: ['Sankore University', '25,000+ students', 'Manuscripts in Arabic']
        },
        {
          year: 1468,
          event: 'Songhay Captures Timbuktu',
          type: 'military',
          importance: 8,
          details: 'Rising Songhay Empire seizes Mali\'s key cities.'
        },
        {
          year: 1670,
          event: 'Mali Empire Ends',
          type: 'political',
          importance: 6,
          details: 'Reduced to small kingdom, eventually absorbed by neighbors.'
        }
      ],
      
      achievements: [
        'Timbuktu libraries (700,000+ manuscripts)',
        'Sankore University',
        'Gold trade monopoly',
        'Islamic scholarship',
        'Griot oral tradition',
        'Advanced architecture'
      ],
      
      keyFigures: [
        { name: 'Sundiata Keita', role: 'Founder', years: [1217, 1255] },
        { name: 'Mansa Musa', role: 'Richest Emperor', years: [1312, 1337] }
      ],
      
      influence: {
        influenced: ['songhay', 'islamic-world'],
        influencedBy: ['ghana-empire', 'islam'],
        tradeRoutes: ['trans-saharan', 'niger-river']
      }
    },
    
    {
      id: 'songhay',
      name: 'Songhay Empire',
      timespan: { start: 1464, end: 1591 },
      center: { lat: 16.3, lng: -0.05 }, // Gao
      
      timeline: [
        {
          year: 1464,
          event: 'Sonni Ali Founds Empire',
          type: 'political',
          importance: 8,
          ruler: 'Sonni Ali',
          mapState: {
            capital: { name: 'Gao', lat: 16.2667, lng: -0.0444 }
          },
          details: 'Military genius Sonni Ali creates largest empire in African history.'
        },
        {
          year: 1468,
          event: 'Conquest of Timbuktu',
          type: 'military',
          importance: 8,
          details: 'Songhay seizes Timbuktu from Mali, controls Saharan trade.'
        },
        {
          year: 1493,
          event: 'Askia Muhammad the Great',
          type: 'political',
          importance: 9,
          ruler: 'Askia Muhammad',
          details: 'New dynasty establishes professional bureaucracy, expands empire.',
          mapState: {
            borders: [
              { lat: 20.0, lng: -10.0 },
              { lat: 20.0, lng: 10.0 },
              { lat: 10.0, lng: 10.0 },
              { lat: 10.0, lng: -10.0 }
            ]
          },
          achievements: ['Standardized weights/measures', 'Legal system', 'Postal service']
        },
        {
          year: 1591,
          event: 'Battle of Tondibi - Moroccan Conquest',
          type: 'catastrophic',
          importance: 9,
          details: 'Moroccan army with firearms defeats Songhay, ending empire.',
          significance: 'Guns vs. swords - technology shift in warfare',
          aftermath: 'Fragmentation of West Africa'
        }
      ],
      
      achievements: [
        'Largest pre-colonial African empire',
        'Professional army',
        'Bureaucratic administration',
        'Islamic scholarship',
        'Trade infrastructure'
      ],
      
      keyFigures: [
        { name: 'Sonni Ali', role: 'Military Founder', years: [1464, 1492] },
        { name: 'Askia Muhammad', role: 'Great Administrator', years: [1493, 1528] }
      ],
      
      influence: {
        influenced: ['west-africa'],
        influencedBy: ['mali'],
        tradeRoutes: ['trans-saharan', 'niger-river']
      }
    },
    
    {
      id: 'great-zimbabwe',
      name: 'Great Zimbabwe',
      timespan: { start: 1100, end: 1450 },
      center: { lat: -20.27, lng: 30.93 },
      
      timeline: [
        {
          year: 1100,
          event: 'Great Zimbabwe Founded',
          type: 'political',
          importance: 8,
          mapState: {
            capital: { name: 'Great Zimbabwe', lat: -20.2708, lng: 30.9333 }
          },
          details: 'Shona people build stone city, controlling gold and ivory trade.'
        },
        {
          year: 1250,
          event: 'Height of Power',
          type: 'major',
          importance: 8,
          details: 'Population reaches 18,000. Great Enclosure constructed.',
          achievements: ['Massive stone walls (no mortar)', 'Gold trade with Swahili coast', 'Cattle wealth'],
          mapState: {
            monuments: [
              { name: 'Great Enclosure', lat: -20.2708, lng: 30.9333, type: 'walls' }
            ]
          }
        },
        {
          year: 1450,
          event: 'Abandonment',
          type: 'catastrophic',
          importance: 7,
          details: 'City abandoned, possibly due to resource depletion.',
          causes: ['Deforestation', 'Soil exhaustion', 'Trade route changes']
        }
      ],
      
      achievements: [
        'Monumental stone architecture',
        'Dry-stone walling technique',
        'Gold and ivory trade',
        'Cattle domestication',
        'Soapstone carving (Zimbabwe Birds)'
      ],
      
      influence: {
        influenced: ['mutapa-kingdom'],
        tradeRoutes: ['indian-ocean', 'swahili-coast']
      }
    }
  ]
};

// Register with master data engine
if (typeof GEOTOPIA_DATA !== 'undefined') {
  GEOTOPIA_DATA.register(AFRICA_CIVILIZATIONS);
}
