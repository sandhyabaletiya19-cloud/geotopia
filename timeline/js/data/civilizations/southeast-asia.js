/**
 * GEOTOPIA - Southeast Asian Civilizations
 * Funan, Champa, Khmer, Srivijaya, Majapahit, Dai Viet, Ayutthaya
 */

const SOUTHEAST_ASIA_CIVILIZATIONS = {
  region: 'Southeast Asia',
  color: '#20B2AA', // Light Sea Green
  timeRange: { start: -100, end: 1800 },
  
  civilizations: [
    {
      id: 'funan',
      name: 'Funan Kingdom',
      timespan: { start: -100, end: 550 },
      center: { lat: 11.0, lng: 105.0 }, // Mekong Delta
      
      timeline: [
        {
          year: -100,
          event: 'Funan Kingdom Founded',
          type: 'political',
          importance: 7,
          mapState: {
            capital: { name: 'Oc Eo', lat: 10.3, lng: 105.1 }
          },
          details: 'First major Southeast Asian state.',
          founder: 'Legend: Brahmin Kaundinya marries naga princess',
          influence: 'Indianized kingdom'
        },
        {
          year: 200,
          event: 'Maritime Trade Hub',
          type: 'major',
          importance: 8,
          details: 'Controls Strait of Malacca trade route.',
          trade: ['China', 'India', 'Rome'],
          goods: ['Spices', 'Gold', 'Silk']
        },
        {
          year: 550,
          event: 'Absorbed by Chenla',
          type: 'political',
          importance: 6,
          details: 'Khmer predecessor state Chenla conquers Funan.'
        }
      ],
      
      achievements: [
        'Indianization of Southeast Asia',
        'Maritime trade networks',
        'Canal systems',
        'Sanskrit adoption'
      ],
      
      influence: {
        influenced: ['khmer-empire', 'champa'],
        influencedBy: ['india', 'china'],
        tradeRoutes: ['maritime-silk-road']
      }
    },
    
    {
      id: 'champa',
      name: 'Champa Kingdom',
      timespan: { start: 192, end: 1832 },
      center: { lat: 15.0, lng: 109.0 }, // Central Vietnam coast
      
      timeline: [
        {
          year: 192,
          event: 'Champa Kingdom Founded',
          type: 'political',
          importance: 7,
          details: 'Hindu kingdom on Vietnam coast.',
          religion: 'Shaivism (Shiva worship)'
        },
        {
          year: 400,
          event: 'Temple Building Period',
          type: 'cultural',
          importance: 7,
          details: 'Brick Hindu temples constructed.',
          architecture: 'My Son sanctuary complex'
        },
        {
          year: 1000,
          event: 'Champa-Khmer Wars',
          type: 'military',
          importance: 7,
          details: 'Centuries of conflict with Khmer Empire.',
          outcome: 'Alternating victories'
        },
        {
          year: 1177,
          event: 'Cham Sack of Angkor',
          type: 'military',
          importance: 8,
          details: 'Cham naval force captures Khmer capital.',
          aftermath: 'Jayavarman VII rebuilds, counterattacks'
        },
        {
          year: 1471,
          event: 'Vietnamese Conquest',
          type: 'catastrophic',
          importance: 8,
          details: 'Dai Viet destroys Cham capital, takes territory.',
          aftermath: 'Champa reduced to small state'
        },
        {
          year: 1832,
          event: 'Final Absorption into Vietnam',
          type: 'political',
          importance: 6,
          details: 'Last Cham territories annexed by Vietnam.'
        }
      ],
      
      achievements: [
        'My Son temple complex (UNESCO)',
        'Hindu brick architecture',
        'Maritime trade',
        'Sanskrit inscriptions',
        'Naval warfare'
      ],
      
      keyFigures: [
        { name: 'Che Bong Nga', role: 'Warrior King', years: [1360, 1390] }
      ],
      
      influence: {
        influenced: ['vietnamese-culture'],
        influencedBy: ['india', 'funan']
      }
    },
    
    {
      id: 'khmer-empire',
      name: 'Khmer Empire',
      timespan: { start: 802, end: 1431 },
      center: { lat: 13.4, lng: 103.9 }, // Angkor
      
      timeline: [
        {
          year: 802,
          event: 'Jayavarman II Founds Khmer Empire',
          type: 'political',
          importance: 9,
          ruler: 'Jayavarman II',
          details: 'Declares independence from Java, unites Khmer.',
          ritual: 'Devaraja (god-king) ceremony',
          capital: 'Mount Kulen'
        },
        {
          year: 889,
          event: 'Yashovarman I Founds Angkor',
          type: 'major',
          importance: 9,
          ruler: 'Yashovarman I',
          mapState: {
            capital: { name: 'Yashodharapura (Angkor)', lat: 13.4125, lng: 103.867 }
          },
          details: 'Capital city established at Angkor.',
          project: 'Massive reservoirs (baray) for irrigation'
        },
        {
          year: 1000,
          event: 'Khmer Golden Age',
          type: 'major',
          importance: 8,
          details: 'Empire controls much of mainland Southeast Asia.',
          territory: 'Modern Cambodia, Thailand, Laos, Vietnam',
          population: '1 million in Angkor (largest pre-industrial city)'
        },
        {
          year: 1113,
          event: 'Suryavarman II Becomes King',
          type: 'political',
          importance: 9,
          ruler: 'Suryavarman II',
          details: 'Greatest temple builder king.'
        },
        {
          year: 1122,
          event: 'Angkor Wat Construction Begins',
          type: 'cultural',
          importance: 10,
          location: { lat: 13.4125, lng: 103.867 },
          details: 'Largest religious monument in world constructed.',
          specifications: [
            'Area: 162.6 hectares',
            'Moat: 190m wide',
            'Central tower: 65m high',
            'Workers: 300,000+ (estimated)'
          ],
          dedication: 'Hindu temple to Vishnu',
          duration: '30 years construction'
        },
        {
          year: 1150,
          event: 'Angkor Wat Completed',
          type: 'cultural',
          importance: 10,
          details: 'Temple completed, became king\'s mausoleum.',
          significance: 'Largest religious structure ever built'
        },
        {
          year: 1177,
          event: 'Cham Invasion - Angkor Sacked',
          type: 'catastrophic',
          importance: 8,
          invader: 'Champa',
          details: 'Cham navy sails up rivers, captures Angkor.',
          aftermath: 'King killed, city looted'
        },
        {
          year: 1181,
          event: 'Jayavarman VII Liberates Angkor',
          type: 'military',
          importance: 9,
          ruler: 'Jayavarman VII',
          details: 'Defeats Cham, becomes greatest Khmer king.',
          religion: 'Converts empire to Mahayana Buddhism'
        },
        {
          year: 1190,
          event: 'Angkor Thom Built',
          type: 'cultural',
          importance: 9,
          location: { lat: 13.44, lng: 103.86 },
          details: 'New capital city with famous Bayon temple.',
          bayon: 'Temple with 216 giant stone faces'
        },
        {
          year: 1200,
          event: 'Khmer Empire at Maximum',
          type: 'major',
          importance: 9,
          mapState: {
            borders: [
              { lat: 18.0, lng: 99.0 }, // Burma border
              { lat: 18.0, lng: 108.0 }, // Vietnam
              { lat: 10.0, lng: 105.0 }, // Mekong Delta
              { lat: 7.0, lng: 99.0 }    // Malay Peninsula
            ],
            population: '1-2 million in Angkor'
          },
          details: 'Largest city in world until Industrial Revolution.',
          infrastructure: '1,000+ hospitals, roads, bridges, reservoirs'
        },
        {
          year: 1218,
          event: 'Death of Jayavarman VII',
          type: 'political',
          importance: 7,
          details: 'Last great Khmer king dies, decline begins.',
          cause: 'Overbuilding exhausted resources'
        },
        {
          year: 1300,
          event: 'Theravada Buddhism Adopted',
          type: 'cultural',
          importance: 7,
          details: 'Hinduism/Mahayana replaced by Theravada.',
          impact: 'Temple building ceases'
        },
        {
          year: 1350,
          event: 'Thai Attacks Begin',
          type: 'military',
          importance: 8,
          invader: 'Ayutthaya (Thai)',
          details: 'New Thai kingdom repeatedly attacks Angkor.'
        },
        {
          year: 1431,
          event: 'Angkor Abandoned',
          type: 'catastrophic',
          importance: 9,
          details: 'Thai capture Angkor, capital moved south.',
          aftermath: 'Jungle reclaims city',
          rediscovery: 'French explorer 1860'
        }
      ],
      
      achievements: [
        'Angkor Wat (largest religious monument)',
        'Angkor Thom (largest city before 1800)',
        'Bayon temple (216 stone faces)',
        'Massive water management system',
        'Sanskrit literature',
        'Stone carving mastery',
        'Road network'
      ],
      
      keyFigures: [
        { name: 'Jayavarman II', role: 'Founder', years: [770, 850] },
        { name: 'Suryavarman II', role: 'Angkor Wat Builder', years: [1090, 1150] },
        { name: 'Jayavarman VII', role: 'Greatest King', years: [1125, 1218] }
      ],
      
      influence: {
        influenced: ['thai-culture', 'cambodian-identity'],
        influencedBy: ['india', 'funan', 'java'],
        tradeRoutes: ['mekong-river', 'maritime-silk-road']
      }
    },
    
    {
      id: 'srivijaya',
      name: 'Srivijaya Empire',
      timespan: { start: 650, end: 1377 },
      center: { lat: -2.0, lng: 104.8 }, // Palembang, Sumatra
      
      timeline: [
        {
          year: 650,
          event: 'Srivijaya Empire Founded',
          type: 'political',
          importance: 8,
          mapState: {
            capital: { name: 'Palembang', lat: -2.9167, lng: 104.7458 }
          },
          details: 'Buddhist maritime empire in Sumatra.',
          power: 'Controls Strait of Malacca'
        },
        {
          year: 671,
          event: 'I Ching Visits',
          type: 'cultural',
          importance: 6,
          visitor: 'I Ching (Chinese monk)',
          details: 'Documents Srivijaya as Buddhist learning center.',
          observation: '1,000+ monks studying'
        },
        {
          year: 775,
          event: 'Srivijaya-Sailendra Alliance',
          type: 'political',
          importance: 7,
          details: 'Alliance/merger with Javanese Sailendra dynasty.',
          result: 'Borobudur built in Java'
        },
        {
          year: 850,
          event: 'Thalassocratic Peak',
          type: 'major',
          importance: 9,
          mapState: {
            controlled: [
              'Sumatra', 'Malay Peninsula', 'Java (parts)', 
              'Borneo (parts)', 'Philippines (parts)'
            ]
          },
          details: 'Controls all major sea trade routes.',
          trade: 'China-India-Arabia maritime route'
        },
        {
          year: 1025,
          event: 'Chola Invasion',
          type: 'catastrophic',
          importance: 8,
          invader: 'Rajendra Chola I',
          details: 'Indian Chola navy attacks Srivijaya.',
          aftermath: 'Trade disrupted, power weakened'
        },
        {
          year: 1200,
          event: 'Decline Begins',
          type: 'political',
          importance: 6,
          details: 'Regional ports rebel, Chinese trade direct.',
          causes: ['Chola raids', 'Rising Java', 'Direct China trade']
        },
        {
          year: 1377,
          event: 'Majapahit Conquest',
          type: 'political',
          importance: 7,
          details: 'Javanese Majapahit absorbs last Srivijaya territory.'
        }
      ],
      
      achievements: [
        'Maritime trade dominance',
        'Buddhist learning center',
        'Naval technology',
        'Malay language spread',
        'Sanskrit scholarship',
        'Port city development'
      ],
      
      influence: {
        influenced: ['malacca', 'malay-culture'],
        influencedBy: ['india', 'china'],
        tradeRoutes: ['strait-of-malacca', 'maritime-silk-road']
      }
    },
    
    {
      id: 'majapahit',
      name: 'Majapahit Empire',
      timespan: { start: 1293, end: 1527 },
      center: { lat: -7.5, lng: 112.7 }, // East Java
      
      timeline: [
        {
          year: 1293,
          event: 'Majapahit Founded',
          type: 'political',
          importance: 8,
          ruler: 'Raden Wijaya',
          details: 'Founded after repelling Mongol invasion.',
          origin: 'Used Mongol troops against rivals, then expelled them',
          mapState: {
            capital: { name: 'Trowulan', lat: -7.55, lng: 112.38 }
          }
        },
        {
          year: 1350,
          event: 'Hayam Wuruk\'s Reign - Golden Age',
          type: 'major',
          importance: 9,
          ruler: 'Hayam Wuruk',
          minister: 'Gajah Mada',
          details: 'Empire reaches peak under king and minister.'
        },
        {
          year: 1350,
          event: 'Palapa Oath',
          type: 'political',
          importance: 8,
          speaker: 'Gajah Mada',
          details: 'Prime minister swears to unite Nusantara (archipelago).',
          quote: 'I will not taste palapa (spices) until all is conquered',
          significance: 'Basis for modern Indonesian nationalism'
        },
        {
          year: 1365,
          event: 'Nagarakretagama Written',
          type: 'cultural',
          importance: 8,
          author: 'Mpu Prapanca',
          details: 'Epic poem describes Majapahit at its height.',
          content: 'Lists 98 tributary states'
        },
        {
          year: 1377,
          event: 'Maximum Extent',
          type: 'major',
          importance: 9,
          mapState: {
            borders: [
              { lat: 7.0, lng: 95.0 },   // Sumatra
              { lat: 8.0, lng: 127.0 },  // Timor
              { lat: -10.0, lng: 120.0 }, // Flores
              { lat: 7.0, lng: 118.0 }   // Borneo
            ],
            tributaries: 98
          },
          details: 'Claims over most of Indonesia, parts of Malaysia, Philippines.',
          note: 'Actual control varied; many tributaries loosely connected'
        },
        {
          year: 1389,
          event: 'Death of Hayam Wuruk',
          type: 'political',
          importance: 7,
          details: 'King dies, succession wars begin.'
        },
        {
          year: 1400,
          event: 'Civil War (Paregreg)',
          type: 'catastrophic',
          importance: 7,
          details: 'Succession conflict weakens empire.',
          duration: '5 years'
        },
        {
          year: 1478,
          event: 'Fall of Majapahit',
          type: 'political',
          importance: 8,
          details: 'Islamic Demak Sultanate defeats Majapahit.',
          aftermath: 'Hindu-Buddhist culture retreats to Bali'
        },
        {
          year: 1527,
          event: 'Final Majapahit Remnants Fall',
          type: 'political',
          importance: 6,
          details: 'Last Hindu-Buddhist holdouts absorbed.',
          legacy: 'Bali preserves culture to present'
        }
      ],
      
      achievements: [
        'Maritime empire uniting Indonesia',
        'Nagarakretagama literature',
        'Hindu-Buddhist architecture',
        'Javanese classical culture',
        'Trade networks',
        'Legal code (Kutaramanawa)'
      ],
      
      keyFigures: [
        { name: 'Gajah Mada', role: 'Prime Minister', years: [1290, 1364] },
        { name: 'Hayam Wuruk', role: 'Greatest King', years: [1334, 1389] }
      ],
      
      influence: {
        influenced: ['indonesian-identity', 'bali'],
        influencedBy: ['srivijaya', 'india'],
        tradeRoutes: ['spice-route', 'maritime-silk-road']
      }
    },
    
    {
      id: 'dai-viet',
      name: 'Dai Viet (Vietnam)',
      timespan: { start: 938, end: 1802 },
      center: { lat: 21.0, lng: 105.85 }, // Hanoi
      
      timeline: [
        {
          year: 938,
          event: 'Vietnamese Independence',
          type: 'political',
          importance: 9,
          victor: 'Ngo Quyen',
          battle: 'Battle of Bach Dang River',
          details: 'Defeats Chinese Southern Han navy using iron-tipped stakes.',
          significance: 'Ends 1,000 years of Chinese rule'
        },
        {
          year: 1009,
          event: 'Ly Dynasty Founded',
          type: 'political',
          importance: 8,
          ruler: 'Ly Thai To',
          mapState: {
            capital: { name: 'Thang Long (Hanoi)', lat: 21.0285, lng: 105.8542 }
          },
          details: 'First major Vietnamese dynasty.'
        },
        {
          year: 1075,
          event: 'Confucian Examinations Begin',
          type: 'cultural',
          importance: 7,
          details: 'Chinese-style civil service exams adopted.',
          significance: 'Confucian state model'
        },
        {
          year: 1225,
          event: 'Tran Dynasty',
          type: 'political',
          importance: 7,
          details: 'Tran dynasty rules, faces Mongol invasions.'
        },
        {
          year: 1258,
          event: 'First Mongol Invasion Repelled',
          type: 'military',
          importance: 8,
          invader: 'Mongke Khan',
          details: 'Vietnamese guerrilla tactics defeat Mongols.',
          result: 'Mongols withdraw'
        },
        {
          year: 1285,
          event: 'Second Mongol Invasion Repelled',
          type: 'military',
          importance: 9,
          invader: 'Kublai Khan',
          details: '500,000 Mongol troops invade.',
          hero: 'Tran Hung Dao',
          result: 'Scorched earth tactics, Mongols defeated'
        },
        {
          year: 1288,
          event: 'Third Mongol Invasion - Battle of Bach Dang',
          type: 'military',
          importance: 9,
          details: 'Same iron stake tactics destroy Mongol fleet.',
          hero: 'Tran Hung Dao',
          significance: 'Definitive Mongol defeat'
        },
        {
          year: 1407,
          event: 'Ming Chinese Occupation',
          type: 'catastrophic',
          importance: 7,
          details: 'China conquers and rules Vietnam.',
          duration: '20 years'
        },
        {
          year: 1427,
          event: 'Le Loi Expels Chinese',
          type: 'political',
          importance: 9,
          hero: 'Le Loi',
          details: 'Guerrilla war expels Ming, founds Le Dynasty.',
          legend: 'Magic sword from turtle'
        },
        {
          year: 1471,
          event: 'Conquest of Champa',
          type: 'military',
          importance: 8,
          details: 'Vietnam destroys Cham capital, expands south.',
          aftermath: 'Nam Tien (Southward march) continues'
        },
        {
          year: 1600,
          event: 'North-South Division',
          type: 'political',
          importance: 7,
          details: 'Vietnam split between Trinh (north) and Nguyen (south).',
          duration: '200 years of division'
        },
        {
          year: 1802,
          event: 'Nguyen Dynasty - Reunification',
          type: 'political',
          importance: 8,
          ruler: 'Gia Long',
          details: 'Vietnam reunified, Nguyen dynasty established.',
          mapState: {
            capital: { name: 'Hue', lat: 16.4637, lng: 107.5909 }
          }
        }
      ],
      
      achievements: [
        'Chu Nom writing system',
        'Guerrilla warfare tactics',
        'Bach Dang River victories',
        'Confucian civil service',
        'Water puppetry',
        'Temple of Literature'
      ],
      
      keyFigures: [
        { name: 'Ngo Quyen', role: 'Independence Hero', years: [897, 944] },
        { name: 'Tran Hung Dao', role: 'Mongol Defeater', years: [1228, 1300] },
        { name: 'Le Loi', role: 'Ming Expeller', years: [1385, 1433] }
      ],
      
      influence: {
        influenced: ['vietnamese-identity'],
        influencedBy: ['china', 'confucianism', 'buddhism']
      }
    },
    
    {
      id: 'ayutthaya',
      name: 'Ayutthaya Kingdom (Thailand)',
      timespan: { start: 1351, end: 1767 },
      center: { lat: 14.35, lng: 100.56 },
      
      timeline: [
        {
          year: 1351,
          event: 'Ayutthaya Founded',
          type: 'political',
          importance: 8,
          ruler: 'Ramathibodi I',
          mapState: {
            capital: { name: 'Ayutthaya', lat: 14.3532, lng: 100.5586 }
          },
          details: 'Thai kingdom established on island in rivers.',
          location: 'Island protected by three rivers'
        },
        {
          year: 1431,
          event: 'Conquest of Angkor',
          type: 'military',
          importance: 8,
          details: 'Ayutthaya sacks Khmer capital Angkor.',
          loot: 'Khmer artisans, royalty taken to Thailand',
          impact: 'Thai culture absorbs Khmer elements'
        },
        {
          year: 1511,
          event: 'Portuguese Arrive',
          type: 'major',
          importance: 7,
          details: 'First Europeans establish relations.',
          trade: 'Firearms introduced'
        },
        {
          year: 1569,
          event: 'Burmese Conquest',
          type: 'catastrophic',
          importance: 8,
          invader: 'Toungoo Burma',
          details: 'Burma captures and vassalizes Ayutthaya.',
          duration: '15 years'
        },
        {
          year: 1584,
          event: 'Independence Restored',
          type: 'political',
          importance: 8,
          hero: 'Naresuan the Great',
          details: 'Prince Naresuan defeats Burmese, restores independence.',
          legend: 'Elephant duel with Burmese prince'
        },
        {
          year: 1688,
          event: 'Greek Adventurer Era',
          type: 'political',
          importance: 6,
          figure: 'Constantine Phaulkon',
          details: 'Greek adventurer becomes prime minister.',
          aftermath: 'Killed in anti-foreigner coup'
        },
        {
          year: 1700,
          event: 'Golden Age of Ayutthaya',
          type: 'major',
          importance: 8,
          details: 'One of world\'s largest cities (1 million people).',
          description: 'Europeans: "Venice of the East"'
        },
        {
          year: 1767,
          event: 'Burmese Destruction of Ayutthaya',
          type: 'catastrophic',
          importance: 9,
          invader: 'Konbaung Burma',
          details: 'Burma completely destroys Ayutthaya.',
          destruction: 'City burned, population killed/enslaved',
          aftermath: 'Thonburi then Bangkok become capitals'
        }
      ],
      
      achievements: [
        '417 years of capital',
        'International trade hub',
        'Thai classical culture',
        'Royal ceremonies',
        'Temple architecture'
      ],
      
      keyFigures: [
        { name: 'Ramathibodi I', role: 'Founder', years: [1314, 1369] },
        { name: 'Naresuan the Great', role: 'Liberator', years: [1555, 1605] }
      ],
      
      influence: {
        influenced: ['thailand-modern'],
        influencedBy: ['khmer-empire', 'india', 'china']
      }
    }
  ]
};

// Register
if (typeof GEOTOPIA_DATA !== 'undefined') {
  GEOTOPIA_DATA.register(SOUTHEAST_ASIA_CIVILIZATIONS);
}
