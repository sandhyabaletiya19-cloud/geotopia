/**
 * GEOTOPIA - American Civilizations
 * Olmec, Maya, Teotihuacan, Toltec, Aztec, Inca, Norte Chico, Mississippian
 */

const AMERICAS_CIVILIZATIONS = {
  region: 'Americas',
  color: '#228B22', // Forest Green
  timeRange: { start: -3000, end: 1572 },
  
  civilizations: [
    {
      id: 'norte-chico',
      name: 'Norte Chico (Caral-Supe)',
      timespan: { start: -3000, end: -1800 },
      center: { lat: -10.9, lng: -77.5 }, // Peru
      
      timeline: [
        {
          year: -3000,
          event: 'Norte Chico Civilization Emerges',
          type: 'major',
          importance: 9,
          mapState: {
            capital: { name: 'Caral', lat: -10.8931, lng: -77.5203 }
          },
          details: 'Oldest civilization in Americas develops in Peru.',
          significance: 'Contemporary with Egypt and Mesopotamia',
          characteristics: ['No pottery', 'No writing', 'Monumental architecture']
        },
        {
          year: -2627,
          event: 'Caral City Built',
          type: 'cultural',
          importance: 9,
          details: 'Oldest city in Americas constructed.',
          features: [
            'Six pyramids',
            'Circular plazas',
            'Residential areas',
            '150 acres'
          ],
          population: '3,000'
        },
        {
          year: -2500,
          event: 'Peak of Norte Chico',
          type: 'major',
          importance: 8,
          details: '30+ major sites with pyramids.',
          economy: 'Cotton for fishing nets traded for seafood',
          society: 'Peaceful (no fortifications, weapons, or warfare evidence)'
        },
        {
          year: -1800,
          event: 'Decline of Norte Chico',
          type: 'political',
          importance: 6,
          details: 'Civilization declines, population disperses.',
          causes: 'Unknown - possibly climate change',
          legacy: 'Foundation for later Andean civilizations'
        }
      ],
      
      achievements: [
        'Oldest American pyramids',
        'Quipu (string recording system)',
        'Irrigation systems',
        'Cotton cultivation',
        'Peaceful urban society'
      ],
      
      influence: {
        influenced: ['chavin', 'moche', 'inca'],
        tradeRoutes: ['pacific-coast']
      }
    },
    
    {
      id: 'olmec',
      name: 'Olmec Civilization',
      altNames: ['Mother Culture of Mesoamerica'],
      timespan: { start: -1500, end: -400 },
      center: { lat: 18.0, lng: -94.5 }, // Gulf Coast Mexico
      
      timeline: [
        {
          year: -1500,
          event: 'Olmec Civilization Emerges',
          type: 'political',
          importance: 9,
          mapState: {
            capital: { name: 'San Lorenzo', lat: 17.75, lng: -94.76 }
          },
          details: 'First major Mesoamerican civilization.',
          significance: '"Mother culture" of Mesoamerica'
        },
        {
          year: -1200,
          event: 'San Lorenzo Flourishes',
          type: 'major',
          importance: 8,
          details: 'First Olmec capital at peak.',
          population: '13,000',
          features: 'Colossal stone heads carved'
        },
        {
          year: -1150,
          event: 'Colossal Heads Created',
          type: 'cultural',
          importance: 9,
          details: '17 giant basalt heads carved (up to 50 tons each).',
          height: 'Up to 3.4 meters',
          transport: 'Stones moved 80+ km from mountains',
          mystery: 'Portraits of rulers or ballplayers'
        },
        {
          year: -900,
          event: 'La Venta Becomes Capital',
          type: 'political',
          importance: 8,
          mapState: {
            capital: { name: 'La Venta', lat: 18.1, lng: -94.05 }
          },
          details: 'Center shifts to La Venta after San Lorenzo destroyed.',
          pyramid: 'First Mesoamerican pyramid (34m tall)'
        },
        {
          year: -600,
          event: 'Olmec Writing Develops',
          type: 'cultural',
          importance: 8,
          details: 'Earliest Mesoamerican writing system.',
          significance: 'Precursor to Maya hieroglyphs'
        },
        {
          year: -400,
          event: 'Olmec Civilization Ends',
          type: 'political',
          importance: 7,
          details: 'La Venta abandoned, monuments defaced.',
          cause: 'Unknown - possibly environmental or social',
          legacy: 'Ideas spread to Maya, Zapotec, Aztec'
        }
      ],
      
      achievements: [
        'Colossal stone heads',
        'First Mesoamerican writing',
        'Long Count calendar (basis)',
        'Ballgame (ritual sport)',
        'Jade working',
        'First pyramid in Americas',
        'Rubber production',
        'Cacao use',
        'Jaguar worship'
      ],
      
      keyFigures: [
        { name: 'Unknown rulers', role: 'Portrayed in colossal heads', years: [-1200, -400] }
      ],
      
      influence: {
        influenced: ['maya', 'zapotec', 'teotihuacan', 'aztec'],
        culturalExports: ['Calendar', 'Writing', 'Ballgame', 'Religion']
      }
    },
    
    {
      id: 'maya',
      name: 'Maya Civilization',
      timespan: { start: -2000, end: 1697 },
      center: { lat: 17.0, lng: -89.0 }, // Guatemala/Yucatan
      
      timeline: [
        {
          year: -2000,
          event: 'Early Maya Period',
          type: 'political',
          importance: 7,
          details: 'Maya settlements emerge in Mesoamerica.',
          characteristics: 'Agriculture, villages'
        },
        {
          year: -400,
          event: 'Preclassic Maya Cities',
          type: 'major',
          importance: 8,
          details: 'Major cities like El Mirador constructed.',
          features: 'Pyramids, writing, Long Count calendar'
        },
        {
          year: -100,
          event: 'El Mirador at Peak',
          type: 'major',
          importance: 8,
          location: { lat: 17.75, lng: -89.92 },
          details: 'Largest Preclassic Maya city.',
          pyramid: 'La Danta - one of largest pyramids by volume in world',
          population: '100,000+'
        },
        {
          year: 250,
          event: 'Classic Maya Period Begins',
          type: 'major',
          importance: 9,
          details: 'Golden age of Maya civilization.',
          characteristics: ['Divine kingship', 'Hieroglyphic writing', 'Monumental art']
        },
        {
          year: 378,
          event: 'Teotihuacan Influence - "Entrada"',
          type: 'political',
          importance: 8,
          details: 'Mexican warriors intervene in Tikal.',
          location: { lat: 17.22, lng: -89.62 },
          result: 'New dynasty installed, Mexican influence'
        },
        {
          year: 562,
          event: 'Caracol Defeats Tikal',
          type: 'military',
          importance: 7,
          details: 'Major Maya superpower defeated.',
          aftermath: '130-year hiatus in Tikal monuments'
        },
        {
          year: 600,
          event: 'Peak of Classic Maya',
          type: 'major',
          importance: 9,
          mapState: {
            cities: [
              { name: 'Tikal', lat: 17.22, lng: -89.62 },
              { name: 'Calakmul', lat: 18.1, lng: -89.81 },
              { name: 'Palenque', lat: 17.48, lng: -92.05 },
              { name: 'Copan', lat: 14.84, lng: -89.14 },
              { name: 'Caracol', lat: 16.76, lng: -89.12 }
            ],
            population: '10-15 million total'
          },
          details: 'Maya civilization at height with 40+ kingdoms.',
          astronomy: 'Track Venus, Mars, predict eclipses',
          mathematics: 'Concept of zero independently invented'
        },
        {
          year: 615,
          event: 'K\'inich Janaab Pakal Becomes King',
          type: 'political',
          importance: 8,
          ruler: 'Pakal the Great',
          location: { lat: 17.48, lng: -92.05 }, // Palenque
          details: 'Greatest Maya king begins 68-year reign.',
          age: 'Crowned at age 12'
        },
        {
          year: 683,
          event: 'Death of Pakal',
          type: 'political',
          importance: 8,
          details: 'Pakal buried in Temple of Inscriptions.',
          tomb: 'Greatest Maya royal tomb ever found (1952)',
          sarcophagus: 'Famous carved lid (astronaut conspiracy theory subject)',
          age: '80 years old'
        },
        {
          year: 695,
          event: 'Tikal Defeats Calakmul',
          type: 'military',
          importance: 7,
          details: 'Tikal avenges earlier defeat, becomes supreme.',
          ruler: 'Jasaw Chan K\'awiil'
        },
        {
          year: 800,
          event: 'Classic Maya Collapse Begins',
          type: 'catastrophic',
          importance: 10,
          details: 'Major cities abandoned over 150 years.',
          causes: [
            'Prolonged drought',
            'Overpopulation',
            'Warfare',
            'Environmental degradation',
            'Political collapse'
          ],
          population_loss: '90-95% in some areas'
        },
        {
          year: 900,
          event: 'Classic Maya Collapse Complete',
          type: 'catastrophic',
          importance: 9,
          details: 'Southern lowland cities abandoned.',
          aftermath: 'Maya continue in Yucatan and highlands'
        },
        {
          year: 987,
          event: 'Chichen Itza Rises',
          type: 'political',
          importance: 8,
          location: { lat: 20.68, lng: -88.57 },
          details: 'Postclassic Maya-Toltec city flourishes.',
          features: 'El Castillo pyramid, cenote sacrifices'
        },
        {
          year: 1221,
          event: 'Chichen Itza Falls',
          type: 'political',
          importance: 6,
          details: 'City conquered by Mayapan confederation.'
        },
        {
          year: 1441,
          event: 'Mayapan Falls',
          type: 'political',
          importance: 6,
          details: 'Last Maya capital abandoned.',
          aftermath: 'Fragmented city-states'
        },
        {
          year: 1517,
          event: 'Spanish Contact',
          type: 'major',
          importance: 8,
          details: 'Hernández de Córdoba reaches Yucatan.',
          observation: 'Stone cities, advanced civilization'
        },
        {
          year: 1524,
          event: 'Spanish Conquest Begins',
          type: 'military',
          importance: 9,
          conquistador: 'Pedro de Alvarado',
          details: 'Spanish begin conquest of Maya lands.',
          resistance: 'Maya resist for 170 years'
        },
        {
          year: 1562,
          event: 'Diego de Landa Burns Maya Books',
          type: 'catastrophic',
          importance: 9,
          location: { lat: 20.97, lng: -89.62 }, // Maní
          details: 'Spanish bishop destroys Maya codices.',
          destroyed: '27 codices (thousands of books)',
          surviving: 'Only 4 Maya books survive today',
          irony: 'Same bishop later writes key Maya documentation'
        },
        {
          year: 1697,
          event: 'Fall of Tayasal - Last Maya Kingdom',
          type: 'political',
          importance: 8,
          location: { lat: 16.93, lng: -89.9 }, // Lake Petén Itzá
          details: 'Spanish conquer last independent Maya city.',
          kingdom: 'Itza Maya',
          significance: 'End of independent Maya states'
        }
      ],
      
      achievements: [
        'Hieroglyphic writing (fully phonetic)',
        'Concept of zero',
        'Most accurate pre-modern calendar',
        'Astronomical observations (Venus, eclipses)',
        'Corbelled arch architecture',
        'Stepped pyramids',
        'Codex books',
        'Blue pigment (Maya blue)',
        'Cacao cultivation (chocolate)',
        'Rubber balls for ballgame'
      ],
      
      keyFigures: [
        { name: 'K\'inich Janaab Pakal', role: 'Palenque King', years: [603, 683] },
        { name: 'Jasaw Chan K\'awiil', role: 'Tikal King', years: [682, 734] },
        { name: 'Lady Six Sky', role: 'Naranjo Queen', years: [682, 741] }
      ],
      
      influence: {
        influenced: ['aztec', 'mesoamerican-culture'],
        influencedBy: ['olmec'],
        tradeRoutes: ['mesoamerican-network', 'caribbean']
      }
    },
    
    {
      id: 'teotihuacan',
      name: 'Teotihuacan',
      timespan: { start: -200, end: 650 },
      center: { lat: 19.69, lng: -98.84 },
      
      timeline: [
        {
          year: -200,
          event: 'Teotihuacan Founded',
          type: 'political',
          importance: 8,
          mapState: {
            capital: { name: 'Teotihuacan', lat: 19.6925, lng: -98.8438 }
          },
          details: 'City begins in Valley of Mexico.',
          name: '"Place where the gods were created"'
        },
        {
          year: 100,
          event: 'Pyramid of the Sun Built',
          type: 'cultural',
          importance: 9,
          details: 'Third largest pyramid in world constructed.',
          dimensions: '225m base, 75m high',
          volume: '1.2 million cubic meters',
          significance: 'Largest structure in ancient Americas'
        },
        {
          year: 150,
          event: 'Avenue of the Dead Laid Out',
          type: 'cultural',
          importance: 8,
          details: 'Central avenue connecting major monuments.',
          length: '4 km',
          features: 'Pyramid of Moon at north end'
        },
        {
          year: 200,
          event: 'Feathered Serpent Temple',
          type: 'cultural',
          importance: 8,
          details: 'Temple with 365 serpent heads built.',
          sacrifice: '200+ sacrificed warriors buried',
          deity: 'Quetzalcoatl (Feathered Serpent)'
        },
        {
          year: 350,
          event: 'Teotihuacan at Peak',
          type: 'major',
          importance: 10,
          mapState: {
            population: '125,000-200,000',
            area: '20+ square km',
            influence: 'All of Mesoamerica'
          },
          details: 'Sixth largest city in world.',
          comparison: 'Larger than any European city of the time',
          economy: 'Obsidian trade, workshops',
          apartments: 'Multi-family apartment compounds'
        },
        {
          year: 378,
          event: 'Intervention in Maya Cities',
          type: 'military',
          importance: 8,
          details: 'Teotihuacan warriors establish new dynasty at Tikal.',
          general: 'Siyaj K\'ahk\' ("Fire is Born")',
          significance: 'Shows Teotihuacan\'s vast reach'
        },
        {
          year: 550,
          event: 'Collapse Begins',
          type: 'catastrophic',
          importance: 8,
          details: 'City begins to decline.',
          evidence: 'Elite buildings burned deliberately'
        },
        {
          year: 650,
          event: 'Teotihuacan Falls',
          type: 'catastrophic',
          importance: 9,
          details: 'City largely abandoned after burning.',
          cause: 'Internal revolt? Invasion? Climate?',
          mystery: 'Builders\' ethnicity and language unknown'
        }
      ],
      
      achievements: [
        'Largest pre-Columbian city',
        'Pyramid of the Sun',
        'Urban planning grid',
        'Multi-family apartments',
        'Obsidian industry',
        'Mesoamerican influence',
        'Talud-tablero architecture',
        'Mural painting'
      ],
      
      mysteries: [
        'No writing system found',
        'Rulers never identified',
        'Language unknown',
        'Ethnicity debated',
        'Cause of collapse unknown'
      ],
      
      influence: {
        influenced: ['toltec', 'aztec', 'maya'],
        influencedBy: ['olmec'],
        tradeRoutes: ['mesoamerican-obsidian']
      }
    },
    
    {
      id: 'aztec',
      name: 'Aztec Empire',
      altNames: ['Mexica'],
      timespan: { start: 1325, end: 1521 },
      center: { lat: 19.43, lng: -99.13 }, // Mexico City
      
      timeline: [
        {
          year: 1325,
          event: 'Tenochtitlan Founded',
          type: 'political',
          importance: 10,
          mapState: {
            capital: { name: 'Tenochtitlan', lat: 19.4326, lng: -99.1332 }
          },
          details: 'Aztecs found capital on island in Lake Texcoco.',
          legend: 'Eagle eating snake on cactus (Mexican flag)',
          location: 'Swampy island, became largest city in Americas'
        },
        {
          year: 1428,
          event: 'Triple Alliance Formed',
          type: 'political',
          importance: 9,
          allies: ['Tenochtitlan', 'Texcoco', 'Tlacopan'],
          details: 'Aztec-led alliance defeats Tepanec Empire.',
          significance: 'Aztec Empire begins'
        },
        {
          year: 1440,
          event: 'Moctezuma I - Imperial Expansion',
          type: 'political',
          importance: 9,
          ruler: 'Moctezuma I',
          details: 'Major conquests expand empire.',
          conquests: 'Gulf Coast, Oaxaca, Puebla',
          projects: 'Aqueduct, dike, Templo Mayor expansion'
        },
        {
          year: 1450,
          event: 'Great Famine',
          type: 'catastrophic',
          importance: 7,
          details: 'Four-year famine devastates central Mexico.',
          response: 'Flower Wars instituted for sacrifice captives'
        },
        {
          year: 1473,
          event: 'Conquest of Tlatelolco',
          type: 'military',
          importance: 7,
          details: 'Sister city absorbed, becomes great market.',
          market: 'Largest market in Americas (60,000 daily)'
        },
        {
          year: 1487,
          event: 'Templo Mayor Dedication',
          type: 'cultural',
          importance: 8,
          ruler: 'Ahuitzotl',
          details: 'Great Temple rededicated with mass sacrifice.',
          sacrifice: 'Thousands sacrificed over 4 days',
          controversy: 'Numbers debated (10,000-80,000 claimed)',
          purpose: 'Feed the sun, maintain cosmic order'
        },
        {
          year: 1500,
          event: 'Aztec Empire at Peak',
          type: 'major',
          importance: 9,
          mapState: {
            borders: [
              { lat: 21.0, lng: -105.0 }, // West
              { lat: 22.0, lng: -98.0 },  // North
              { lat: 16.0, lng: -96.0 },  // South
              { lat: 19.0, lng: -93.0 }   // East
            ],
            population: '5-6 million subjects',
            tribute: '371 towns'
          },
          details: 'Empire controls central Mexico.',
          tenochtitlan: '200,000-300,000 population (5x London)',
          economy: 'Tribute system, long-distance trade'
        },
        {
          year: 1502,
          event: 'Moctezuma II Becomes Emperor',
          type: 'political',
          importance: 8,
          ruler: 'Moctezuma II',
          details: 'Last effective Aztec emperor takes throne.',
          reign: 'Consolidation, religious focus'
        },
        {
          year: 1519,
          event: 'Spanish Arrival',
          type: 'major',
          importance: 10,
          date: 'April 22, 1519',
          details: 'Hernán Cortés lands on Mexican coast.',
          forces: '500 soldiers, 16 horses, few cannons',
          coincidence: 'Year "One Reed" - prophecy of Quetzalcoatl\'s return'
        },
        {
          year: 1519,
          event: 'Cortés Enters Tenochtitlan',
          type: 'major',
          importance: 10,
          date: 'November 8, 1519',
          details: 'Spanish enter Aztec capital as guests.',
          description: 'Spaniards amazed by city larger than any in Europe',
          quote: 'Bernal Díaz: "Like an enchanted vision... great towers, temples, buildings rising from the water"'
        },
        {
          year: 1520,
          event: 'La Noche Triste (Night of Sorrows)',
          type: 'military',
          importance: 9,
          date: 'June 30, 1520',
          details: 'Spanish flee Tenochtitlan with heavy losses.',
          casualties: '600+ Spanish, thousands of allies killed',
          cause: 'Aztec uprising after Spanish massacre at temple'
        },
        {
          year: 1520,
          event: 'Smallpox Epidemic',
          type: 'catastrophic',
          importance: 10,
          details: 'Smallpox devastates Aztec population.',
          deaths: 'Possibly 40% of population',
          victim: 'Emperor Cuitláhuac dies',
          significance: 'Disease more deadly than Spanish weapons'
        },
        {
          year: 1521,
          event: 'Fall of Tenochtitlan',
          type: 'catastrophic',
          importance: 10,
          date: 'August 13, 1521',
          details: 'Cortés conquers Aztec capital after 80-day siege.',
          tactics: [
            'Native allies (80,000+ Tlaxcalans)',
            'Brigantines on lake',
            'Destroying causeways',
            'Starvation'
          ],
          defender: 'Cuauhtémoc (last emperor)',
          aftermath: 'City destroyed, rebuilt as Mexico City',
          casualties: '100,000+ Aztec dead'
        }
      ],
      
      achievements: [
        'Tenochtitlan (engineering marvel on lake)',
        'Chinampas (floating gardens)',
        'Causeways and aqueducts',
        'Templo Mayor',
        'Aztec calendar stone',
        'Featherwork art',
        'Nahuatl poetry',
        'Complex tribute system',
        'Calmecac schools',
        'Chocolate and vanilla cultivation'
      ],
      
      keyFigures: [
        { name: 'Itzcoatl', role: 'Empire Founder', years: [1380, 1440] },
        { name: 'Moctezuma I', role: 'Expander', years: [1398, 1469] },
        { name: 'Moctezuma II', role: 'Last Great Emperor', years: [1466, 1520] },
        { name: 'Cuauhtémoc', role: 'Last Emperor', years: [1495, 1525] },
        { name: 'Hernán Cortés', role: 'Conqueror', years: [1485, 1547] }
      ],
      
      influence: {
        influenced: ['mexican-culture', 'spanish-empire'],
        influencedBy: ['toltec', 'teotihuacan', 'maya']
      }
    },
    
    {
      id: 'inca',
      name: 'Inca Empire',
      altNames: ['Tawantinsuyu'],
      timespan: { start: 1438, end: 1572 },
      center: { lat: -13.52, lng: -71.98 }, // Cusco
      
      timeline: [
        {
          year: 1200,
          event: 'Inca Tribe Settles Cusco',
          type: 'political',
          importance: 7,
          mapState: {
            capital: { name: 'Cusco', lat: -13.5319, lng: -71.9675 }
          },
          details: 'Small tribe settles in Cusco valley.',
          legend: 'Founded by Manco Cápac, sent by sun god'
        },
        {
          year: 1438,
          event: 'Pachacuti Founds Empire',
          type: 'political',
          importance: 10,
          ruler: 'Pachacuti ("World Shaker")',
          details: 'Prince defeats Chankas, transforms kingdom into empire.',
          achievement: 'Rebuilds Cusco in shape of puma',
          title: '"Alexander the Great of the Americas"'
        },
        {
          year: 1450,
          event: 'Machu Picchu Built',
          type: 'cultural',
          importance: 10,
          location: { lat: -13.1631, lng: -72.545 },
          details: 'Royal estate constructed for Pachacuti.',
          altitude: '2,430 meters',
          features: ['200 buildings', 'Terraces', 'Water channels', 'Astronomical alignments'],
          rediscovery: 'Hiram Bingham 1911'
        },
        {
          year: 1471,
          event: 'Tupac Inca Expands South',
          type: 'military',
          importance: 9,
          ruler: 'Tupac Inca Yupanqui',
          details: 'Conquers Chile, Ecuador, Bolivia.',
          extent: 'Empire stretches 4,000 km'
        },
        {
          year: 1493,
          event: 'Huayna Capac - Height of Empire',
          type: 'major',
          importance: 9,
          ruler: 'Huayna Capac',
          mapState: {
            borders: [
              { lat: 2.0, lng: -79.0 },   // Ecuador
              { lat: -35.0, lng: -71.0 }, // Central Chile
              { lat: -20.0, lng: -65.0 }, // Bolivia
              { lat: 0.0, lng: -75.0 }    // Amazon edge
            ],
            population: '10-12 million',
            length: '4,000 km (NY to LA)',
            area: '2 million km²'
          },
          details: 'Largest empire in pre-Columbian Americas.',
          roads: '40,000 km of paved roads',
          economy: 'No money, no markets - state distribution'
        },
        {
          year: 1525,
          event: 'Smallpox Reaches Inca Empire',
          type: 'catastrophic',
          importance: 10,
          details: 'European disease precedes Europeans.',
          victims: 'Huayna Capac and heir die',
          consequence: 'Civil war between sons Atahualpa and Huascar'
        },
        {
          year: 1532,
          event: 'Civil War Ends',
          type: 'political',
          importance: 8,
          victor: 'Atahualpa',
          details: 'Atahualpa defeats Huascar, becomes Sapa Inca.',
          timing: 'Just as Spanish arrive'
        },
        {
          year: 1532,
          event: 'Pizarro Arrives',
          type: 'major',
          importance: 10,
          date: 'September 1532',
          details: 'Francisco Pizarro lands with 168 men.',
          knowledge: 'Learned from Cortés\'s conquest of Mexico'
        },
        {
          year: 1532,
          event: 'Battle of Cajamarca',
          type: 'military',
          importance: 10,
          date: 'November 16, 1532',
          location: { lat: -7.16, lng: -78.52 },
          details: 'Spanish ambush and capture Atahualpa.',
          forces: '168 Spanish vs 80,000 Inca',
          outcome: [
            '7,000 Inca killed in hour',
            '0 Spanish killed',
            'Atahualpa captured'
          ],
          factors: ['Steel', 'Horses', 'Guns', 'Surprise', 'Inca confusion']
        },
        {
          year: 1533,
          event: 'Atahualpa\'s Ransom and Execution',
          type: 'political',
          importance: 9,
          ransom: 'Room filled with gold, twice with silver',
          value: '$50 million+ in modern terms',
          execution: 'Strangled after "trial" despite ransom paid',
          charge: 'Heresy, treason (against Spain)'
        },
        {
          year: 1533,
          event: 'Fall of Cusco',
          type: 'military',
          importance: 9,
          date: 'November 1533',
          details: 'Spanish capture Inca capital.',
          puppet: 'Manco Inca installed as puppet emperor'
        },
        {
          year: 1536,
          event: 'Manco Inca\'s Rebellion',
          type: 'military',
          importance: 8,
          details: 'Puppet emperor rebels, besieges Cusco.',
          force: '200,000 Inca warriors',
          outcome: 'Siege fails after 10 months',
          retreat: 'Manco establishes rebel state at Vilcabamba'
        },
        {
          year: 1572,
          event: 'Fall of Vilcabamba - End of Inca',
          type: 'catastrophic',
          importance: 9,
          ruler: 'Tupac Amaru',
          details: 'Spanish conquer last Inca stronghold.',
          execution: 'Tupac Amaru beheaded in Cusco plaza',
          significance: 'End of Inca royal line'
        }
      ],
      
      achievements: [
        'Machu Picchu',
        'Road system (40,000 km)',
        'Quipu (string records)',
        'Terraced agriculture',
        'Suspension bridges',
        'Freeze-drying food (chuño)',
        'Stonework without mortar',
        'Brain surgery (trepanning)',
        'Llama domestication',
        'Central planned economy',
        'MIT''A labor tax system'
      ],
      
      keyFigures: [
        { name: 'Pachacuti', role: 'Empire Founder', years: [1418, 1471] },
        { name: 'Tupac Inca', role: 'Expander', years: [1441, 1493] },
        { name: 'Huayna Capac', role: 'Peak Emperor', years: [1468, 1527] },
        { name: 'Atahualpa', role: 'Last Emperor', years: [1502, 1533] },
        { name: 'Manco Inca', role: 'Resistance Leader', years: [1516, 1544] },
        { name: 'Francisco Pizarro', role: 'Conqueror', years: [1478, 1541] }
      ],
      
      influence: {
        influenced: ['peru', 'andean-culture'],
        influencedBy: ['chavin', 'moche', 'tiwanaku'],
        tradeRoutes: ['inca-road-system']
      }
    },
    
    {
      id: 'mississippian',
      name: 'Mississippian Culture',
      timespan: { start: 800, end: 1600 },
      center: { lat: 38.66, lng: -90.06 }, // Cahokia
      
      timeline: [
        {
          year: 800,
          event: 'Mississippian Culture Emerges',
          type: 'political',
          importance: 7,
          details: 'Complex chiefdoms develop in Mississippi Valley.',
          characteristics: ['Mound building', 'Maize agriculture', 'Hierarchical society']
        },
        {
          year: 1050,
          event: 'Cahokia Founded',
          type: 'political',
          importance: 9,
          mapState: {
            capital: { name: 'Cahokia', lat: 38.6554, lng: -90.0618 }
          },
          details: 'Largest pre-Columbian city north of Mexico.',
          location: 'Near modern St. Louis'
        },
        {
          year: 1100,
          event: 'Monks Mound Completed',
          type: 'cultural',
          importance: 8,
          details: 'Largest earthwork in Americas completed.',
          dimensions: '100 feet high, 14 acre base',
          comparison: 'Larger base than Great Pyramid of Giza',
          labor: 'Estimated 15 million baskets of earth'
        },
        {
          year: 1150,
          event: 'Cahokia at Peak',
          type: 'major',
          importance: 9,
          mapState: {
            population: '10,000-20,000 (city), 40,000+ (region)',
            size: '6 square miles',
            mounds: '120 earthen mounds'
          },
          details: 'Larger than London at the time.',
          features: ['Woodhenge (astronomical)', 'Grand Plaza', 'Palisade walls']
        },
        {
          year: 1200,
          event: 'Moundville Flourishes',
          type: 'major',
          importance: 7,
          location: { lat: 33.0, lng: -87.6 }, // Alabama
          details: 'Second largest Mississippian center.',
          mounds: '29 mounds'
        },
        {
          year: 1350,
          event: 'Cahokia Abandoned',
          type: 'catastrophic',
          importance: 8,
          details: 'City abandoned for unknown reasons.',
          theories: ['Environmental degradation', 'Climate change', 'Warfare', 'Social collapse']
        },
        {
          year: 1540,
          event: 'De Soto Expedition Contacts',
          type: 'major',
          importance: 8,
          explorer: 'Hernando de Soto',
          details: 'Spanish expedition encounters Mississippian chiefdoms.',
          aftermath: 'Diseases devastate populations'
        },
        {
          year: 1600,
          event: 'Mississippian Decline',
          type: 'political',
          importance: 7,
          details: 'Culture largely collapses.',
          cause: 'European diseases, disruption',
          descendants: 'Natchez and other tribes preserve elements'
        }
      ],
      
      achievements: [
        'Cahokia (largest pre-Columbian settlement north of Mexico)',
        'Massive earthen mounds',
        'Woodhenge astronomical observatory',
        'Long-distance trade networks',
        'Chunkey game',
        'Shell gorgets and copper work',
        'Sophisticated agriculture'
      ],
      
      influence: {
        influenced: ['natchez', 'cherokee'],
        influencedBy: ['hopewell', 'mesoamerica']
      }
    }
  ]
};

// Register
if (typeof GEOTOPIA_DATA !== 'undefined') {
  GEOTOPIA_DATA.register(AMERICAS_CIVILIZATIONS);
}
