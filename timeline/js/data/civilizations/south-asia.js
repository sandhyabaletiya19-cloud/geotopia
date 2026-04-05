/**
 * GEOTOPIA - South Asian Civilizations
 * Indus Valley, Vedic Period, Maurya, Gupta, Chola, Delhi Sultanate, Mughal Empire
 */

const SOUTH_ASIA_CIVILIZATIONS = {
  region: 'South Asia',
  color: '#FF6B35', // Deep Orange
  timeRange: { start: -3300, end: 1857 },
  
  civilizations: [
    {
      id: 'indus-valley',
      name: 'Indus Valley Civilization',
      altNames: ['Harappan Civilization'],
      timespan: { start: -3300, end: -1300 },
      center: { lat: 27.3, lng: 68.0 }, // Mohenjo-Daro area
      
      timeline: [
        {
          year: -3300,
          event: 'Early Harappan Period Begins',
          type: 'political',
          importance: 8,
          details: 'Agricultural settlements develop along Indus River.',
          mapState: {
            territory: [
              { lat: 30.0, lng: 66.0 },
              { lat: 30.0, lng: 76.0 },
              { lat: 23.0, lng: 76.0 },
              { lat: 23.0, lng: 66.0 }
            ]
          },
          achievements: ['Pottery', 'Agriculture', 'Animal domestication']
        },
        {
          year: -2600,
          event: 'Mature Harappan Period - Urban Civilization',
          type: 'major',
          importance: 10,
          mapState: {
            cities: [
              { name: 'Mohenjo-Daro', lat: 27.3242, lng: 68.1386, population: 40000 },
              { name: 'Harappa', lat: 30.6313, lng: 72.8656, population: 35000 },
              { name: 'Lothal', lat: 22.5222, lng: 72.2486 },
              { name: 'Dholavira', lat: 23.8862, lng: 70.2098 },
              { name: 'Kalibangan', lat: 29.4717, lng: 74.1308 }
            ],
            area: '1,260,000 km²'
          },
          details: 'World\'s largest Bronze Age civilization emerges with 1,000+ settlements.',
          achievements: [
            'Grid-planned cities',
            'Standardized weights and measures',
            'Advanced drainage systems',
            'Indoor plumbing',
            'Public baths (Great Bath)',
            'Undeciphered script'
          ],
          population: '5 million (estimated)'
        },
        {
          year: -2500,
          event: 'Great Bath of Mohenjo-Daro Built',
          type: 'cultural',
          importance: 8,
          location: { lat: 27.3242, lng: 68.1386 },
          details: 'Earliest known public water tank, possibly for religious bathing.',
          dimensions: '12m x 7m x 2.4m deep',
          significance: 'Indicates ritual importance of water'
        },
        {
          year: -2350,
          event: 'Peak of Harappan Trade Networks',
          type: 'major',
          importance: 8,
          details: 'Trade extends to Mesopotamia, Afghanistan, Central Asia.',
          tradeGoods: ['Cotton textiles', 'Beads', 'Ivory', 'Copper'],
          partners: ['Sumer', 'Dilmun (Bahrain)', 'Oman']
        },
        {
          year: -2200,
          event: 'Climate Change Begins',
          type: 'catastrophic',
          importance: 7,
          details: 'Monsoons weaken, rivers shift, agriculture affected.',
          causes: ['Weakening monsoons', 'River course changes', 'Drought cycles']
        },
        {
          year: -1900,
          event: 'Decline Begins - Cities Abandoned',
          type: 'catastrophic',
          importance: 8,
          details: 'Major cities begin to be abandoned, population disperses.',
          causes: ['Climate change', 'Sarasvati River drying', 'Possible disease'],
          aftermath: 'Shift to smaller settlements, rural economy'
        },
        {
          year: -1300,
          event: 'End of Indus Valley Civilization',
          type: 'political',
          importance: 7,
          details: 'Final abandonment of major sites, Vedic culture emerges.',
          legacy: 'Influenced subsequent Indian civilizations'
        }
      ],
      
      achievements: [
        'First urban sanitation systems',
        'Standardized weights (accuracy to 0.05%)',
        'Grid city planning',
        'Fired brick construction',
        'Cotton cultivation and textiles',
        'Bronze metallurgy',
        'Bead-making technology',
        'Dental surgery (earliest evidence)',
        'Sign/symbol writing system'
      ],
      
      mysteries: [
        'Script remains undeciphered',
        'No evidence of kings, palaces, or temples found',
        'No evidence of warfare or weapons',
        'Remarkably egalitarian society'
      ],
      
      influence: {
        influenced: ['vedic-period', 'hinduism'],
        tradeRoutes: ['indus-river', 'persian-gulf', 'central-asia']
      }
    },
    
    {
      id: 'vedic-period',
      name: 'Vedic Civilization',
      timespan: { start: -1500, end: -500 },
      center: { lat: 28.5, lng: 77.0 }, // Ganges-Yamuna region
      
      timeline: [
        {
          year: -1500,
          event: 'Indo-Aryan Migration',
          type: 'major',
          importance: 9,
          details: 'Indo-European peoples migrate into Indian subcontinent.',
          origin: 'Central Asia (possibly via Iran)',
          impact: 'Sanskrit language, Vedic religion introduced'
        },
        {
          year: -1400,
          event: 'Rigveda Composition Begins',
          type: 'cultural',
          importance: 10,
          details: 'Oldest Hindu scripture begins to be composed.',
          content: '1,028 hymns to gods (Indra, Agni, Varuna)',
          significance: 'Oldest religious text still in continuous use',
          language: 'Vedic Sanskrit'
        },
        {
          year: -1200,
          event: 'Iron Age Begins in India',
          type: 'major',
          importance: 7,
          details: 'Iron technology enables clearing of Gangetic forests.',
          impact: 'Agricultural expansion, population growth'
        },
        {
          year: -1000,
          event: 'Later Vedas Composed',
          type: 'cultural',
          importance: 8,
          details: 'Yajurveda, Samaveda, Atharvaveda written.',
          additions: 'Ritual procedures, magical spells, philosophy'
        },
        {
          year: -900,
          event: 'Varna System Develops',
          type: 'social',
          importance: 9,
          details: 'Four-fold social division codified.',
          varnas: ['Brahmins (priests)', 'Kshatriyas (warriors)', 'Vaishyas (merchants)', 'Shudras (servants)'],
          significance: 'Foundation of caste system'
        },
        {
          year: -800,
          event: 'Upanishads Composed',
          type: 'cultural',
          importance: 10,
          details: 'Philosophical texts exploring nature of reality and self.',
          concepts: ['Brahman (universal soul)', 'Atman (individual soul)', 'Karma', 'Moksha', 'Samsara'],
          significance: 'Foundation of Hindu philosophy'
        },
        {
          year: -600,
          event: 'Mahajanapadas Period',
          type: 'political',
          importance: 8,
          details: '16 great kingdoms (mahajanapadas) emerge in North India.',
          kingdoms: ['Magadha', 'Kosala', 'Vajji', 'Kashi', 'Avanti', 'Gandhara'],
          mapState: {
            kingdoms: [
              { name: 'Magadha', lat: 25.0, lng: 85.5 },
              { name: 'Kosala', lat: 27.0, lng: 82.0 },
              { name: 'Gandhara', lat: 34.0, lng: 72.0 }
            ]
          }
        },
        {
          year: -563,
          event: 'Birth of Buddha (Siddhartha Gautama)',
          type: 'cultural',
          importance: 10,
          location: { lat: 27.47, lng: 83.28 }, // Lumbini
          details: 'Founder of Buddhism born in Lumbini (modern Nepal).',
          family: 'Shakya clan prince'
        },
        {
          year: -540,
          event: 'Birth of Mahavira',
          type: 'cultural',
          importance: 9,
          details: 'Founder of Jainism born in Vaishali.',
          teachings: ['Non-violence (ahimsa)', 'Asceticism', 'Multiple aspects of truth']
        },
        {
          year: -528,
          event: 'Buddha\'s Enlightenment',
          type: 'cultural',
          importance: 10,
          location: { lat: 24.7, lng: 84.99 }, // Bodh Gaya
          details: 'Siddhartha achieves enlightenment under Bodhi tree.',
          teachings: ['Four Noble Truths', 'Noble Eightfold Path', 'Middle Way'],
          significance: 'Birth of Buddhism as world religion'
        },
        {
          year: -500,
          event: 'End of Vedic Period',
          type: 'political',
          importance: 7,
          details: 'Major kingdoms consolidate, classical period begins.',
          transition: 'Rise of Magadha dominance'
        }
      ],
      
      achievements: [
        'Vedas (sacred texts)',
        'Upanishads (philosophy)',
        'Sanskrit literature',
        'Hindu religious foundations',
        'Mathematical concepts',
        'Yoga and meditation',
        'Caste social organization',
        'Buddhism founded',
        'Jainism founded'
      ],
      
      keyFigures: [
        { name: 'Vyasa', role: 'Legendary author of Mahabharata', years: [-1500, -1400] },
        { name: 'Buddha', role: 'Founder of Buddhism', years: [-563, -483] },
        { name: 'Mahavira', role: 'Founder of Jainism', years: [-540, -468] },
        { name: 'Panini', role: 'Sanskrit grammarian', years: [-520, -460] }
      ],
      
      influence: {
        influenced: ['hinduism', 'buddhism', 'jainism', 'all-indian-civilization'],
        influencedBy: ['indus-valley', 'indo-europeans']
      }
    },
    
    {
      id: 'maurya-empire',
      name: 'Maurya Empire',
      timespan: { start: -322, end: -185 },
      center: { lat: 25.6, lng: 85.1 }, // Pataliputra
      
      timeline: [
        {
          year: -322,
          event: 'Chandragupta Maurya Founds Empire',
          type: 'political',
          importance: 10,
          ruler: 'Chandragupta Maurya',
          mapState: {
            capital: { name: 'Pataliputra', lat: 25.612, lng: 85.144 },
            expansion: 'begins'
          },
          details: 'Chandragupta overthrows Nanda dynasty, creates first pan-Indian empire.',
          advisor: 'Chanakya (Kautilya)'
        },
        {
          year: -305,
          event: 'War with Seleucid Empire',
          type: 'military',
          importance: 8,
          details: 'Chandragupta defeats Seleucus I, gains Afghanistan and Baluchistan.',
          treaty: 'Marriage alliance, 500 war elephants given to Seleucus',
          ambassador: 'Megasthenes visits Pataliputra'
        },
        {
          year: -298,
          event: 'Chandragupta\'s Jain Retirement',
          type: 'cultural',
          importance: 6,
          details: 'Legend: Chandragupta renounces throne, becomes Jain monk, fasts to death.',
          location: 'Shravanabelagola, Karnataka'
        },
        {
          year: -268,
          event: 'Ashoka Becomes Emperor',
          type: 'political',
          importance: 10,
          ruler: 'Ashoka the Great',
          details: 'Third Mauryan emperor, initially a ruthless conqueror.',
          succession: 'Possibly killed brothers for throne'
        },
        {
          year: -261,
          event: 'Kalinga War',
          type: 'military',
          importance: 10,
          location: { lat: 20.5, lng: 85.8 }, // Odisha
          details: 'Brutal conquest of Kalinga with massive casualties.',
          casualties: '100,000 killed, 150,000 deported',
          significance: 'Most significant event - transforms Ashoka'
        },
        {
          year: -260,
          event: 'Ashoka\'s Conversion to Buddhism',
          type: 'cultural',
          importance: 10,
          details: 'Horrified by Kalinga war, Ashoka embraces Buddhism and non-violence.',
          transformation: 'From "Ashoka the Fierce" to "Ashoka the Pious"',
          policy: 'Dhamma (righteousness, non-violence, tolerance)'
        },
        {
          year: -257,
          event: 'Ashoka\'s Edicts Carved',
          type: 'cultural',
          importance: 9,
          details: 'Rock and pillar edicts across empire proclaim Dhamma.',
          content: ['Non-violence', 'Religious tolerance', 'Welfare policies', 'Animal protection'],
          pillars: 'Lion Capital becomes symbol of India',
          script: 'Brahmi script (ancestor of most Indian scripts)'
        },
        {
          year: -250,
          event: 'Third Buddhist Council',
          type: 'cultural',
          importance: 8,
          location: { lat: 25.6, lng: 85.1 }, // Pataliputra
          details: 'Ashoka convenes council, sends missionaries across Asia.',
          missions: ['Sri Lanka', 'Burma', 'Central Asia', 'Greece']
        },
        {
          year: -250,
          event: 'Mauryan Empire at Peak',
          type: 'major',
          importance: 9,
          mapState: {
            borders: [
              { lat: 35.0, lng: 65.0 }, // Afghanistan
              { lat: 35.0, lng: 88.0 }, // Bengal
              { lat: 8.0, lng: 80.0 },  // South India
              { lat: 25.0, lng: 65.0 }  // Pakistan
            ],
            population: '50-60 million',
            area: '5 million km²'
          },
          details: 'Largest Indian empire until British Raj, covers most of South Asia.'
        },
        {
          year: -232,
          event: 'Death of Ashoka',
          type: 'political',
          importance: 9,
          details: 'Ashoka dies, empire begins to fragment.',
          legacy: 'Greatest Indian ruler, spreader of Buddhism'
        },
        {
          year: -185,
          event: 'Fall of Maurya Empire',
          type: 'political',
          importance: 8,
          details: 'Last Mauryan emperor assassinated by general Pushyamitra.',
          aftermath: 'Shunga dynasty established'
        }
      ],
      
      achievements: [
        'First Indian empire unifying subcontinent',
        'Ashoka\'s Edicts (earliest Indian writing)',
        'Buddhist spread across Asia',
        'Arthashastra (political treatise)',
        'Road network',
        'Postal system',
        'Welfare state concepts',
        'Religious tolerance policy',
        'Brahmi script standardization'
      ],
      
      keyFigures: [
        { name: 'Chandragupta Maurya', role: 'Empire Founder', years: [-340, -298] },
        { name: 'Chanakya (Kautilya)', role: 'Strategist, wrote Arthashastra', years: [-375, -283] },
        { name: 'Ashoka', role: 'Buddhist Emperor', years: [-304, -232] }
      ],
      
      influence: {
        influenced: ['buddhism-spread', 'sri-lanka', 'southeast-asia', 'all-indian-empires'],
        influencedBy: ['vedic-period', 'buddhism', 'jainism']
      }
    },
    
    {
      id: 'gupta-empire',
      name: 'Gupta Empire',
      altNames: ['Golden Age of India'],
      timespan: { start: 320, end: 550 },
      center: { lat: 25.4, lng: 83.0 }, // Varanasi region
      
      timeline: [
        {
          year: 320,
          event: 'Chandragupta I Founds Gupta Empire',
          type: 'political',
          importance: 9,
          ruler: 'Chandragupta I',
          mapState: {
            capital: { name: 'Pataliputra', lat: 25.612, lng: 85.144 }
          },
          details: 'Marriage alliance with Lichchhavi princess establishes Gupta power.',
          era: 'Beginning of Gupta Era (calendar still used)'
        },
        {
          year: 335,
          event: 'Samudragupta\'s Conquests',
          type: 'military',
          importance: 9,
          ruler: 'Samudragupta',
          details: 'Extensive military campaigns expand empire across India.',
          victories: 'Defeated 9 kings in north, 12 in south',
          mapState: {
            expansion: 'major',
            vassals: ['South India', 'Nepal', 'Assam']
          }
        },
        {
          year: 375,
          event: 'Chandragupta II - Golden Age',
          type: 'major',
          importance: 10,
          ruler: 'Chandragupta II (Vikramaditya)',
          details: 'Height of Gupta civilization, "Golden Age of India".',
          capital: 'Court attracts scholars from across world'
        },
        {
          year: 380,
          event: 'Defeat of Sakas',
          type: 'military',
          importance: 7,
          details: 'Western India conquered from Saka rulers.',
          gain: 'Access to Arabian Sea trade'
        },
        {
          year: 400,
          event: 'Fa Xian Visits India',
          type: 'cultural',
          importance: 7,
          visitor: 'Fa Xian (Chinese monk)',
          details: 'Chinese pilgrim documents prosperous, peaceful Gupta India.',
          description: 'People wealthy, crime rare, hospitals free'
        },
        {
          year: 405,
          event: 'Nalanda University Founded',
          type: 'cultural',
          importance: 10,
          location: { lat: 25.1355, lng: 85.4427 },
          details: 'World\'s first residential university established.',
          students: '10,000 students from Korea, Japan, China, Tibet, Turkey',
          subjects: ['Buddhism', 'Logic', 'Grammar', 'Medicine', 'Astronomy'],
          significance: 'Model for modern universities'
        },
        {
          year: 410,
          event: 'Indian Mathematicians Calculate Pi',
          type: 'cultural',
          importance: 8,
          details: 'Advanced mathematical achievements during Gupta period.',
          discoveries: ['Decimal system', 'Zero concept', 'Pi approximation']
        },
        {
          year: 450,
          event: 'Kalidasa\'s Golden Age',
          type: 'cultural',
          importance: 9,
          details: 'Greatest Sanskrit poet writes masterpieces.',
          works: ['Shakuntala', 'Meghaduta (Cloud Messenger)', 'Kumarasambhava'],
          significance: 'Sanskrit classical literature peak'
        },
        {
          year: 455,
          event: 'Aryabhata\'s Astronomical Treatise',
          type: 'cultural',
          importance: 10,
          details: 'Aryabhata writes revolutionary mathematical and astronomical work.',
          discoveries: [
            'Earth rotates on its axis',
            'Pi = 3.1416 (accurate to 4 decimals)',
            'Solar system model',
            'Algebra equations',
            'Place value system with zero'
          ],
          work: 'Aryabhatiya',
          significance: 'Foundation of Indian mathematics'
        },
        {
          year: 460,
          event: 'Huna (Hun) Invasions Begin',
          type: 'military',
          importance: 8,
          details: 'White Huns (Hephthalites) begin invading from Central Asia.',
          impact: 'Weakens Gupta military'
        },
        {
          year: 500,
          event: 'Toramana and Mihirakula Invasions',
          type: 'catastrophic',
          importance: 8,
          invader: 'Mihirakula (Hun king)',
          details: 'Brutal Hun invasions devastate North India.',
          description: 'Described as cruel destroyer'
        },
        {
          year: 550,
          event: 'Gupta Empire Collapses',
          type: 'catastrophic',
          importance: 8,
          details: 'Empire fragments into smaller kingdoms.',
          causes: ['Hun invasions', 'Weak successors', 'Regional breakaways'],
          aftermath: 'Regional kingdoms period'
        }
      ],
      
      achievements: [
        'Concept of zero (mathematics)',
        'Decimal number system',
        'Aryabhata\'s astronomy',
        'Nalanda University',
        'Sanskrit literature (Kalidasa)',
        'Ajanta & Ellora cave paintings',
        'Iron Pillar of Delhi (rust-free)',
        'Surgery techniques (Sushruta)',
        'Temple architecture',
        'Hindu sculpture'
      ],
      
      keyFigures: [
        { name: 'Chandragupta I', role: 'Founder', years: [320, 335] },
        { name: 'Samudragupta', role: 'Conqueror', years: [335, 375] },
        { name: 'Chandragupta II', role: 'Golden Age Emperor', years: [375, 415] },
        { name: 'Kalidasa', role: 'Poet/Playwright', years: [350, 430] },
        { name: 'Aryabhata', role: 'Mathematician/Astronomer', years: [476, 550] },
        { name: 'Varahamihira', role: 'Astronomer', years: [505, 587] }
      ],
      
      influence: {
        influenced: ['southeast-asia', 'china', 'islamic-world', 'mathematics'],
        influencedBy: ['maurya-empire', 'greco-buddhist'],
        culturalExports: ['Buddhism', 'Hinduism', 'Sanskrit', 'Mathematics', 'Zero']
      }
    },
    
    {
      id: 'chola-dynasty',
      name: 'Chola Dynasty',
      timespan: { start: -300, end: 1279 },
      center: { lat: 10.8, lng: 79.1 }, // Thanjavur
      peakPeriod: { start: 850, end: 1200 },
      
      timeline: [
        {
          year: -300,
          event: 'Early Chola Period',
          type: 'political',
          importance: 6,
          details: 'Ancient Cholas mentioned in Sangam literature.',
          capital: 'Uraiyur'
        },
        {
          year: 850,
          event: 'Medieval Chola Dynasty Founded',
          type: 'political',
          importance: 8,
          ruler: 'Vijayalaya Chola',
          details: 'Cholas rise from Pallava vassals to independent power.',
          mapState: {
            capital: { name: 'Thanjavur', lat: 10.787, lng: 79.138 }
          }
        },
        {
          year: 985,
          event: 'Rajaraja Chola I Becomes King',
          type: 'political',
          importance: 9,
          ruler: 'Rajaraja Chola I',
          details: 'Greatest Chola king begins reign.',
          achievements: ['Naval power', 'Temple building', 'Administration']
        },
        {
          year: 1010,
          event: 'Brihadeeswara Temple Completed',
          type: 'cultural',
          importance: 9,
          location: { lat: 10.7826, lng: 79.1317 },
          details: 'One of largest and tallest Hindu temples ever built.',
          specifications: [
            'Height: 66 meters',
            'Dome: 80-ton single granite block',
            'No cement used'
          ],
          significance: 'UNESCO World Heritage Site'
        },
        {
          year: 1014,
          event: 'Rajendra Chola I - Naval Supremacy',
          type: 'political',
          importance: 9,
          ruler: 'Rajendra Chola I',
          details: 'Son of Rajaraja expands maritime empire.',
          achievements: ['Greatest naval power in Indian Ocean', 'Gangaikonda Cholapuram capital']
        },
        {
          year: 1025,
          event: 'Chola Naval Expedition to Southeast Asia',
          type: 'military',
          importance: 10,
          details: 'Rajendra\'s fleet conquers Srivijaya (Indonesia/Malaysia).',
          extent: 'From Maldives to Indonesia',
          mapState: {
            controlled: ['Sri Lanka', 'Maldives', 'Malay Peninsula', 'Sumatra'],
            influence: ['Cambodia', 'Burma', 'Vietnam']
          },
          significance: 'Only Indian empire to control overseas territories'
        },
        {
          year: 1044,
          event: 'Chola Empire at Peak',
          type: 'major',
          importance: 9,
          mapState: {
            borders: [
              { lat: 20.0, lng: 77.0 }, // Deccan
              { lat: 8.0, lng: 77.0 },  // Kerala
              { lat: 6.0, lng: 80.0 },  // Sri Lanka
              { lat: -5.0, lng: 105.0 } // Sumatra (influence)
            ]
          },
          details: 'Empire spans South India, Sri Lanka, Maldives, Southeast Asia.',
          navy: 'Largest in Indian Ocean',
          trade: 'China, Arabia, Africa'
        },
        {
          year: 1070,
          event: 'Kulottunga Chola I',
          type: 'political',
          importance: 7,
          ruler: 'Kulottunga Chola I',
          details: 'Last great Chola king, sent embassy to China.'
        },
        {
          year: 1200,
          event: 'Decline Begins',
          type: 'political',
          importance: 6,
          details: 'Pandyas and Hoysalas challenge Chola supremacy.',
          causes: ['Succession disputes', 'Rise of neighbors']
        },
        {
          year: 1279,
          event: 'End of Chola Dynasty',
          type: 'political',
          importance: 7,
          details: 'Last Chola king defeated by Pandyas.',
          aftermath: 'Tamil Nadu under Pandya, later Vijayanagara'
        }
      ],
      
      achievements: [
        'Greatest Indian naval power',
        'Brihadeeswara Temple',
        'Chola bronze sculptures (finest in world)',
        'Local self-government system',
        'Revenue administration',
        'Southeast Asian colonization',
        'Tamil literature',
        'Dravidian temple architecture'
      ],
      
      keyFigures: [
        { name: 'Rajaraja Chola I', role: 'Temple Builder, Conqueror', years: [985, 1014] },
        { name: 'Rajendra Chola I', role: 'Naval Emperor', years: [1014, 1044] }
      ],
      
      influence: {
        influenced: ['southeast-asia', 'sri-lanka', 'indian-ocean-trade'],
        influencedBy: ['pallava', 'hindu-temples']
      }
    },
    
    {
      id: 'delhi-sultanate',
      name: 'Delhi Sultanate',
      timespan: { start: 1206, end: 1526 },
      center: { lat: 28.6, lng: 77.2 }, // Delhi
      
      timeline: [
        {
          year: 1192,
          event: 'Battle of Tarain II',
          type: 'military',
          importance: 9,
          victor: 'Muhammad of Ghor',
          defeated: 'Prithviraj Chauhan',
          location: { lat: 29.4, lng: 77.0 },
          details: 'Muslim conquest of North India begins.',
          significance: 'End of Hindu rule in Delhi'
        },
        {
          year: 1206,
          event: 'Slave Dynasty Founded',
          type: 'political',
          importance: 9,
          ruler: 'Qutb ud-Din Aibak',
          mapState: {
            capital: { name: 'Delhi', lat: 28.6139, lng: 77.2090 }
          },
          details: 'Former slave becomes Sultan, founds Delhi Sultanate.',
          dynasty: 'Mamluk (Slave) Dynasty (1206-1290)'
        },
        {
          year: 1210,
          event: 'Qutub Minar Construction Begins',
          type: 'cultural',
          importance: 8,
          location: { lat: 28.5245, lng: 77.1855 },
          details: 'Tallest brick minaret in world begins construction.',
          height: '72.5 meters',
          significance: 'Symbol of Islamic rule in India'
        },
        {
          year: 1290,
          event: 'Khalji Dynasty',
          type: 'political',
          importance: 7,
          ruler: 'Jalal ud-Din Khalji',
          details: 'Turkic Khalji dynasty takes power.'
        },
        {
          year: 1296,
          event: 'Alauddin Khalji Conquers',
          type: 'political',
          importance: 8,
          ruler: 'Alauddin Khalji',
          details: 'Most powerful Delhi Sultan, expands empire to South India.',
          achievements: ['Price controls', 'Spy network', 'Military reforms']
        },
        {
          year: 1303,
          event: 'Mongol Invasions Repelled',
          type: 'military',
          importance: 8,
          details: 'Alauddin successfully defends against multiple Mongol invasions.',
          significance: 'Saved India from Mongol devastation'
        },
        {
          year: 1320,
          event: 'Tughlaq Dynasty',
          type: 'political',
          importance: 7,
          ruler: 'Ghiyath al-Din Tughlaq',
          details: 'Tughlaq dynasty begins 100-year rule.'
        },
        {
          year: 1325,
          event: 'Muhammad bin Tughlaq',
          type: 'political',
          importance: 7,
          ruler: 'Muhammad bin Tughlaq',
          details: 'Brilliant but eccentric sultan, many ambitious failed projects.',
          failures: ['Moving capital to Daulatabad', 'Token currency']
        },
        {
          year: 1333,
          event: 'Ibn Battuta Visits',
          type: 'cultural',
          importance: 6,
          visitor: 'Ibn Battuta',
          details: 'Moroccan traveler documents Delhi Sultanate.',
          role: 'Served as qadi (judge) for 8 years'
        },
        {
          year: 1398,
          event: 'Timur\'s Invasion',
          type: 'catastrophic',
          importance: 9,
          invader: 'Timur (Tamerlane)',
          details: 'Timur sacks Delhi, massacres 100,000.',
          casualties: '100,000 prisoners executed before battle',
          aftermath: 'Delhi devastated, Sultanate crippled'
        },
        {
          year: 1414,
          event: 'Sayyid Dynasty',
          type: 'political',
          importance: 5,
          details: 'Weak dynasty controls only Delhi region.'
        },
        {
          year: 1451,
          event: 'Lodi Dynasty',
          type: 'political',
          importance: 6,
          ruler: 'Bahlul Lodi',
          details: 'Afghan Lodi dynasty, last of Delhi Sultanate.'
        },
        {
          year: 1526,
          event: 'Battle of Panipat - Sultanate Falls',
          type: 'catastrophic',
          importance: 10,
          location: { lat: 29.4, lng: 77.0 },
          victor: 'Babur',
          defeated: 'Ibrahim Lodi',
          details: 'Babur defeats last Delhi Sultan, founds Mughal Empire.',
          weapons: 'First use of field artillery and firearms in India'
        }
      ],
      
      achievements: [
        'Qutub Minar',
        'Indo-Islamic architecture',
        'Persian as court language',
        'Market controls',
        'Military innovations',
        'Spread of Islam in India',
        'Sufi tradition'
      ],
      
      keyFigures: [
        { name: 'Qutb ud-Din Aibak', role: 'Founder', years: [1206, 1210] },
        { name: 'Iltutmish', role: 'Consolidator', years: [1211, 1236] },
        { name: 'Razia Sultan', role: 'Only female Sultan', years: [1236, 1240] },
        { name: 'Alauddin Khalji', role: 'Powerful Sultan', years: [1296, 1316] }
      ],
      
      influence: {
        influenced: ['mughal-empire', 'indo-islamic-culture'],
        influencedBy: ['islamic-world', 'persia', 'central-asia']
      }
    },
    
    {
      id: 'mughal-empire',
      name: 'Mughal Empire',
      timespan: { start: 1526, end: 1857 },
      center: { lat: 27.2, lng: 78.0 }, // Agra
      
      timeline: [
        {
          year: 1526,
          event: 'Babur Founds Mughal Empire',
          type: 'political',
          importance: 10,
          ruler: 'Babur',
          location: { lat: 29.4, lng: 77.0 }, // Panipat
          details: 'Babur defeats Delhi Sultanate, establishes Mughal dynasty.',
          ancestry: 'Descended from Timur and Genghis Khan',
          weapons: 'Guns and artillery decisive'
        },
        {
          year: 1530,
          event: 'Humayun Becomes Emperor',
          type: 'political',
          importance: 6,
          ruler: 'Humayun',
          details: 'Babur\'s son inherits unstable empire.'
        },
        {
          year: 1540,
          event: 'Humayun Exiled by Sher Shah',
          type: 'political',
          importance: 7,
          details: 'Afghan Sher Shah defeats Humayun, rules North India.',
          achievements: 'Grand Trunk Road, administrative reforms'
        },
        {
          year: 1556,
          event: 'Akbar Becomes Emperor at 13',
          type: 'political',
          importance: 10,
          ruler: 'Akbar the Great',
          details: 'Greatest Mughal emperor begins 49-year reign.',
          regent: 'Bairam Khan'
        },
        {
          year: 1556,
          event: 'Second Battle of Panipat',
          type: 'military',
          importance: 8,
          details: 'Akbar defeats Hindu king Hemu, secures throne.',
          significance: 'Mughal dominance established'
        },
        {
          year: 1571,
          event: 'Fatehpur Sikri Built',
          type: 'cultural',
          importance: 8,
          location: { lat: 27.0939, lng: 77.6611 },
          details: 'Akbar builds magnificent new capital.',
          architecture: 'Blend of Hindu and Islamic styles',
          abandoned: 'After 14 years due to water shortage'
        },
        {
          year: 1575,
          event: 'Ibadat Khana Debates',
          type: 'cultural',
          importance: 8,
          details: 'Akbar hosts religious debates with Hindus, Muslims, Christians, Jains.',
          outcome: 'Din-i-Ilahi (syncretic religion) founded'
        },
        {
          year: 1580,
          event: 'Akbar\'s Religious Tolerance',
          type: 'political',
          importance: 9,
          details: 'Akbar abolishes jizya tax on non-Muslims.',
          policies: ['Religious freedom', 'Hindu ministers', 'Rajput marriages'],
          significance: 'Most tolerant medieval ruler'
        },
        {
          year: 1600,
          event: 'Mughal Empire at Height under Akbar',
          type: 'major',
          importance: 9,
          mapState: {
            borders: [
              { lat: 35.0, lng: 70.0 }, // Afghanistan
              { lat: 35.0, lng: 88.0 }, // Bengal
              { lat: 15.0, lng: 75.0 }, // Deccan
              { lat: 25.0, lng: 65.0 }  // Sind
            ],
            population: '100 million'
          },
          details: 'Empire covers most of India with 100 million people.',
          economy: '25% of world GDP'
        },
        {
          year: 1605,
          event: 'Death of Akbar',
          type: 'political',
          importance: 8,
          details: 'Akbar dies after 49-year reign, Jahangir succeeds.',
          legacy: 'Greatest Mughal, united India'
        },
        {
          year: 1628,
          event: 'Shah Jahan Becomes Emperor',
          type: 'political',
          importance: 9,
          ruler: 'Shah Jahan',
          details: 'Builder emperor begins reign.',
          meaning: 'Shah Jahan means "King of the World"'
        },
        {
          year: 1631,
          event: 'Death of Mumtaz Mahal',
          type: 'personal',
          importance: 7,
          details: 'Shah Jahan\'s beloved wife dies in childbirth (14th child).',
          aftermath: 'Emperor commissions Taj Mahal'
        },
        {
          year: 1632,
          event: 'Taj Mahal Construction Begins',
          type: 'cultural',
          importance: 10,
          location: { lat: 27.1751, lng: 78.0421 },
          details: 'Construction of world\'s most famous mausoleum begins.',
          workforce: '20,000 workers for 22 years',
          cost: '32 million rupees (≈$1 billion today)',
          materials: 'White marble from Rajasthan, gems from across Asia'
        },
        {
          year: 1648,
          event: 'Red Fort Completed',
          type: 'cultural',
          importance: 8,
          location: { lat: 28.6562, lng: 77.241 },
          details: 'Shah Jahan\'s new capital in Delhi completed.',
          significance: 'Symbol of Mughal power'
        },
        {
          year: 1653,
          event: 'Taj Mahal Completed',
          type: 'cultural',
          importance: 10,
          details: 'Taj Mahal finished after 22 years of construction.',
          architects: 'Ustad Ahmad Lahori (possibly)',
          significance: 'Symbol of eternal love, World Wonder'
        },
        {
          year: 1658,
          event: 'Aurangzeb Imprisons Shah Jahan',
          type: 'political',
          importance: 8,
          ruler: 'Aurangzeb',
          details: 'Aurangzeb defeats brothers, imprisons father, seizes throne.',
          imprisonment: 'Shah Jahan spends 8 years gazing at Taj Mahal'
        },
        {
          year: 1679,
          event: 'Aurangzeb Reimpose Jizya',
          type: 'political',
          importance: 8,
          details: 'Conservative Aurangzeb restores tax on non-Muslims.',
          consequences: 'Hindu unrest, Maratha resistance'
        },
        {
          year: 1680,
          event: 'Maratha Wars Begin',
          type: 'military',
          importance: 8,
          opponent: 'Maratha Confederacy',
          details: 'Prolonged wars against Hindu Marathas drain empire.',
          duration: '27 years until Aurangzeb\'s death'
        },
        {
          year: 1689,
          event: 'Mughal Empire at Largest Extent',
          type: 'major',
          importance: 8,
          mapState: {
            borders: [
              { lat: 35.0, lng: 65.0 },
              { lat: 35.0, lng: 95.0 },
              { lat: 8.0, lng: 78.0 },
              { lat: 10.0, lng: 65.0 }
            ],
            area: '4 million km²',
            population: '160 million (quarter of world)'
          },
          details: 'Empire reaches maximum size but overextended.'
        },
        {
          year: 1707,
          event: 'Death of Aurangzeb',
          type: 'political',
          importance: 9,
          details: 'Last strong Mughal dies, empire begins rapid decline.',
          cause: 'Wars exhausted treasury and military',
          aftermath: 'Succession wars, regional breakaways'
        },
        {
          year: 1739,
          event: 'Nadir Shah Sacks Delhi',
          type: 'catastrophic',
          importance: 9,
          invader: 'Nadir Shah of Persia',
          details: 'Persian invasion, Delhi massacred, Peacock Throne stolen.',
          loot: 'Koh-i-Noor diamond, Peacock Throne taken to Persia',
          casualties: '20,000-30,000 killed in one day'
        },
        {
          year: 1757,
          event: 'Battle of Plassey',
          type: 'military',
          importance: 10,
          location: { lat: 23.8, lng: 88.3 },
          details: 'British East India Company defeats Bengal Nawab.',
          significance: 'Beginning of British rule in India'
        },
        {
          year: 1803,
          event: 'Mughal Emperor Under British Protection',
          type: 'political',
          importance: 7,
          details: 'British capture Delhi, Mughal emperor becomes figurehead.',
          status: 'Nominal rule over Red Fort only'
        },
        {
          year: 1857,
          event: 'Indian Rebellion - End of Mughal Empire',
          type: 'catastrophic',
          importance: 10,
          details: 'Great Rebellion fails, last Mughal Bahadur Shah II exiled.',
          aftermath: 'Direct British Crown rule begins (British Raj)',
          end: 'End of 330 years of Mughal presence'
        }
      ],
      
      achievements: [
        'Taj Mahal',
        'Red Fort',
        'Fatehpur Sikri',
        'Mughal miniature painting',
        'Indo-Islamic architecture',
        'Urdu language',
        'Mughal cuisine',
        'Administrative system',
        'Religious tolerance (under Akbar)',
        'Gardens (Shalimar)',
        'Textile industry (muslin, chintz)'
      ],
      
      keyFigures: [
        { name: 'Babur', role: 'Founder', years: [1526, 1530] },
        { name: 'Akbar', role: 'Greatest Emperor', years: [1556, 1605] },
        { name: 'Shah Jahan', role: 'Builder of Taj Mahal', years: [1628, 1658] },
        { name: 'Aurangzeb', role: 'Last Great Emperor', years: [1658, 1707] },
        { name: 'Mumtaz Mahal', role: 'Beloved Queen', years: [1593, 1631] }
      ],
      
      influence: {
        influenced: ['indian-cuisine', 'urdu', 'indo-islamic-art', 'modern-india'],
        influencedBy: ['persia', 'central-asia', 'delhi-sultanate', 'india']
      }
    }
  ]
};

// Register
if (typeof GEOTOPIA_DATA !== 'undefined') {
  GEOTOPIA_DATA.register(SOUTH_ASIA_CIVILIZATIONS);
}
