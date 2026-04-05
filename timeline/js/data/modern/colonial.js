/**
 * COLONIAL ERA (1500-1800)
 * European expansion, colonization, global trade networks
 */

const COLONIAL_ERA = {
  era: 'Colonial Period',
  timeRange: { start: 1500, end: 1800 },
  color: '#8B4513',
  
  empires: [
    {
      id: 'spanish-empire',
      name: 'Spanish Empire',
      capital: { name: 'Madrid', lat: 40.4168, lng: -3.7038 },
      color: '#FFC300',
      timespan: { start: 1492, end: 1898 },
      
      timeline: [
        {
          year: 1492,
          event: 'Columbus Reaches Americas',
          type: 'exploration',
          importance: 10,
          coordinates: { lat: 25.0, lng: -76.0 },
          mapState: {
            newTerritories: ['hispaniola'],
            tradeRoutes: ['trans-atlantic-1']
          },
          details: 'Christopher Columbus lands in the Caribbean, beginning European colonization of the Americas.',
          figures: ['Christopher Columbus', 'Isabella I of Castile', 'Ferdinand II of Aragon']
        },
        {
          year: 1519,
          event: 'Cortés Conquers Aztec Empire',
          type: 'conquest',
          importance: 9,
          coordinates: { lat: 19.4326, lng: -99.1332 },
          mapState: {
            conquered: ['aztec-empire'],
            newTerritories: ['new-spain']
          },
          details: 'Hernán Cortés defeats the Aztec Empire, establishing Spanish control over Mexico.',
          casualties: 240000,
          figures: ['Hernán Cortés', 'Moctezuma II']
        },
        {
          year: 1532,
          event: 'Conquest of Inca Empire',
          type: 'conquest',
          importance: 9,
          coordinates: { lat: -12.0464, lng: -77.0428 },
          mapState: {
            conquered: ['inca-empire'],
            newTerritories: ['viceroyalty-peru']
          },
          details: 'Francisco Pizarro conquers the Inca Empire, bringing Andean civilizations under Spanish rule.',
          casualties: 200000,
          figures: ['Francisco Pizarro', 'Atahualpa']
        },
        {
          year: 1588,
          event: 'Spanish Armada Defeated',
          type: 'military',
          importance: 8,
          coordinates: { lat: 50.3755, lng: -4.1427 },
          mapState: {
            navalBattle: true,
            powerShift: 'england-rises'
          },
          details: 'English navy defeats the Spanish Armada, marking the decline of Spanish naval dominance.',
          casualties: 20000,
          figures: ['Philip II of Spain', 'Elizabeth I of England']
        },
        {
          year: 1598,
          event: 'Colonization of Philippines',
          type: 'colonization',
          importance: 7,
          coordinates: { lat: 14.5995, lng: 120.9842 },
          mapState: {
            newTerritories: ['philippines'],
            tradeRoutes: ['manila-galleon']
          },
          details: 'Spain establishes full control over the Philippines, creating the Manila Galleon trade route.',
          figures: ['Miguel López de Legazpi']
        },
        {
          year: 1700,
          event: 'War of Spanish Succession Begins',
          type: 'political',
          importance: 7,
          coordinates: { lat: 40.4168, lng: -3.7038 },
          mapState: {
            conflict: 'european-wide'
          },
          details: 'Succession crisis leads to European-wide war over Spanish throne.',
          figures: ['Philip V of Spain', 'Charles VI']
        }
      ],
      
      territories: {
        1500: ['iberia', 'canary-islands'],
        1550: ['iberia', 'canary-islands', 'new-spain', 'peru', 'chile', 'cuba', 'hispaniola'],
        1600: ['iberia', 'canary-islands', 'new-spain', 'peru', 'chile', 'cuba', 'hispaniola', 'philippines', 'netherlands'],
        1650: ['iberia', 'canary-islands', 'new-spain', 'peru', 'chile', 'cuba', 'hispaniola', 'philippines'],
        1700: ['iberia', 'new-spain', 'peru', 'chile', 'cuba', 'hispaniola', 'philippines'],
        1750: ['iberia', 'new-spain', 'peru', 'chile', 'cuba', 'hispaniola', 'philippines'],
        1800: ['iberia', 'new-spain', 'peru', 'cuba', 'hispaniola', 'philippines']
      },
      
      tradeRoutes: [
        {
          id: 'manila-galleon',
          from: { lat: 14.5995, lng: 120.9842 },
          to: { lat: 16.8531, lng: -99.8237 },
          active: { start: 1565, end: 1815 },
          goods: ['silver', 'silk', 'spices', 'porcelain']
        },
        {
          id: 'treasure-fleet',
          from: { lat: 23.1136, lng: -82.3666 },
          to: { lat: 37.3891, lng: -5.9845 },
          active: { start: 1566, end: 1790 },
          goods: ['gold', 'silver', 'emeralds', 'tobacco']
        }
      ],
      
      culturalImpact: {
        language: 'Spanish spread across Americas and Philippines',
        religion: 'Catholicism established in colonies',
        architecture: 'Spanish colonial style',
        cuisine: 'Fusion of European and indigenous foods'
      }
    },
    
    {
      id: 'portuguese-empire',
      name: 'Portuguese Empire',
      capital: { name: 'Lisbon', lat: 38.7223, lng: -9.1393 },
      color: '#006B3F',
      timespan: { start: 1415, end: 1999 },
      
      timeline: [
        {
          year: 1498,
          event: 'Vasco da Gama Reaches India',
          type: 'exploration',
          importance: 10,
          coordinates: { lat: 11.2588, lng: 75.7804 },
          mapState: {
            tradeRoutes: ['cape-route'],
            newOutposts: ['calicut']
          },
          details: 'First European to reach India by sea, opening direct trade route.',
          figures: ['Vasco da Gama']
        },
        {
          year: 1500,
          event: 'Discovery of Brazil',
          type: 'exploration',
          importance: 9,
          coordinates: { lat: -12.9714, lng: -38.5014 },
          mapState: {
            newTerritories: ['brazil']
          },
          details: 'Pedro Álvares Cabral claims Brazil for Portugal.',
          figures: ['Pedro Álvares Cabral']
        },
        {
          year: 1510,
          event: 'Conquest of Goa',
          type: 'conquest',
          importance: 8,
          coordinates: { lat: 15.2993, lng: 74.1240 },
          mapState: {
            newTerritories: ['goa'],
            militaryBase: true
          },
          details: 'Afonso de Albuquerque conquers Goa, establishing Portuguese India capital.',
          figures: ['Afonso de Albuquerque']
        },
        {
          year: 1511,
          event: 'Capture of Malacca',
          type: 'conquest',
          importance: 8,
          coordinates: { lat: 2.2005, lng: 102.2538 },
          mapState: {
            newTerritories: ['malacca'],
            tradeHub: true
          },
          details: 'Portugal controls the strategic Strait of Malacca.',
          figures: ['Afonso de Albuquerque']
        },
        {
          year: 1557,
          event: 'Establishment of Macau',
          type: 'settlement',
          importance: 7,
          coordinates: { lat: 22.1987, lng: 113.5439 },
          mapState: {
            newOutposts: ['macau'],
            tradeRoutes: ['china-trade']
          },
          details: 'Portugal establishes trading post in China.',
          figures: ['Leonel de Sousa']
        },
        {
          year: 1580,
          event: 'Iberian Union',
          type: 'political',
          importance: 8,
          coordinates: { lat: 38.7223, lng: -9.1393 },
          mapState: {
            union: 'spain-portugal',
            combinedEmpire: true
          },
          details: 'Portugal and Spain united under Spanish crown (until 1640).',
          figures: ['Philip II of Spain']
        },
        {
          year: 1640,
          event: 'Portuguese Restoration',
          type: 'political',
          importance: 7,
          coordinates: { lat: 38.7223, lng: -9.1393 },
          mapState: {
            independence: true
          },
          details: 'Portugal regains independence from Spain.',
          figures: ['John IV of Portugal']
        },
        {
          year: 1755,
          event: 'Lisbon Earthquake',
          type: 'disaster',
          importance: 8,
          coordinates: { lat: 38.7223, lng: -9.1393 },
          mapState: {
            cityDestroyed: true
          },
          details: 'Massive earthquake destroys Lisbon, killing 60,000 people.',
          casualties: 60000,
          figures: ['Marquis of Pombal']
        }
      ],
      
      territories: {
        1500: ['portugal', 'madeira', 'azores', 'cape-verde'],
        1550: ['portugal', 'madeira', 'azores', 'cape-verde', 'brazil', 'goa', 'malacca', 'mozambique', 'angola'],
        1600: ['portugal', 'brazil', 'goa', 'macau', 'mozambique', 'angola', 'east-timor'],
        1650: ['portugal', 'brazil', 'goa', 'macau', 'mozambique', 'angola'],
        1700: ['portugal', 'brazil', 'goa', 'macau', 'mozambique', 'angola'],
        1750: ['portugal', 'brazil', 'goa', 'macau', 'mozambique', 'angola'],
        1800: ['portugal', 'brazil', 'goa', 'macau', 'mozambique', 'angola']
      },
      
      tradeRoutes: [
        {
          id: 'cape-route',
          waypoints: [
            { lat: 38.7223, lng: -9.1393 },
            { lat: -33.9249, lng: 18.4241 },
            { lat: 11.2588, lng: 75.7804 }
          ],
          active: { start: 1498, end: 1869 },
          goods: ['spices', 'silk', 'gems', 'tea']
        }
      ]
    },
    
    {
      id: 'dutch-empire',
      name: 'Dutch Empire',
      capital: { name: 'Amsterdam', lat: 52.3676, lng: 4.9041 },
      color: '#FF6600',
      timespan: { start: 1602, end: 1975 },
      
      timeline: [
        {
          year: 1602,
          event: 'Dutch East India Company Founded',
          type: 'economic',
          importance: 10,
          coordinates: { lat: 52.3676, lng: 4.9041 },
          mapState: {
            corporation: 'VOC',
            tradeMonopoly: 'east-indies'
          },
          details: 'World\'s first publicly traded company, VOC becomes dominant force in Asian trade.',
          figures: ['Johan van Oldenbarnevelt']
        },
        {
          year: 1619,
          event: 'Foundation of Batavia',
          type: 'settlement',
          importance: 8,
          coordinates: { lat: -6.2088, lng: 106.8456 },
          mapState: {
            newTerritories: ['batavia'],
            regionalCapital: true
          },
          details: 'Jan Pieterszoon Coen establishes Batavia (Jakarta) as VOC headquarters.',
          figures: ['Jan Pieterszoon Coen']
        },
        {
          year: 1624,
          event: 'Colonization of Taiwan',
          type: 'colonization',
          importance: 7,
          coordinates: { lat: 23.0, lng: 120.5 },
          mapState: {
            newTerritories: ['formosa']
          },
          details: 'Dutch establish Fort Zeelandia in Taiwan.',
          duration: 38
        },
        {
          year: 1652,
          event: 'Cape Colony Founded',
          type: 'settlement',
          importance: 8,
          coordinates: { lat: -33.9249, lng: 18.4241 },
          mapState: {
            newTerritories: ['cape-colony'],
            resupplyStation: true
          },
          details: 'Jan van Riebeeck establishes Cape Colony as resupply station.',
          figures: ['Jan van Riebeeck']
        },
        {
          year: 1667,
          event: 'Treaty of Breda',
          type: 'political',
          importance: 7,
          coordinates: { lat: 51.5897, lng: 4.7760 },
          mapState: {
            territorySwap: {
              gained: ['suriname'],
              lost: ['new-amsterdam']
            }
          },
          details: 'Netherlands trades New Amsterdam (New York) to England for Suriname.',
          figures: ['Johan de Witt']
        },
        {
          year: 1688,
          event: 'Glorious Revolution',
          type: 'political',
          importance: 8,
          coordinates: { lat: 51.5074, lng: -0.1278 },
          mapState: {
            alliance: 'anglo-dutch'
          },
          details: 'William of Orange becomes King of England, uniting Dutch and English interests.',
          figures: ['William III of Orange']
        }
      ],
      
      territories: {
        1600: ['netherlands'],
        1650: ['netherlands', 'batavia', 'cape-colony', 'new-amsterdam', 'formosa', 'malacca'],
        1700: ['netherlands', 'batavia', 'cape-colony', 'suriname', 'curacao', 'malacca'],
        1750: ['netherlands', 'dutch-east-indies', 'cape-colony', 'suriname', 'curacao'],
        1800: ['netherlands', 'dutch-east-indies', 'suriname', 'curacao']
      },
      
      tradeRoutes: [
        {
          id: 'voc-route',
          waypoints: [
            { lat: 52.3676, lng: 4.9041 },
            { lat: -33.9249, lng: 18.4241 },
            { lat: -6.2088, lng: 106.8456 }
          ],
          active: { start: 1602, end: 1799 },
          goods: ['spices', 'textiles', 'tea', 'porcelain']
        }
      ]
    },
    
    {
      id: 'british-empire',
      name: 'British Empire',
      capital: { name: 'London', lat: 51.5074, lng: -0.1278 },
      color: '#C8102E',
      timespan: { start: 1583, end: 1997 },
      
      timeline: [
        {
          year: 1607,
          event: 'Jamestown Founded',
          type: 'settlement',
          importance: 8,
          coordinates: { lat: 37.2707, lng: -76.7075 },
          mapState: {
            newTerritories: ['virginia']
          },
          details: 'First permanent English settlement in North America.',
          figures: ['John Smith']
        },
        {
          year: 1620,
          event: 'Mayflower Landing',
          type: 'settlement',
          importance: 7,
          coordinates: { lat: 41.9584, lng: -70.6673 },
          mapState: {
            newTerritories: ['plymouth']
          },
          details: 'Pilgrims establish Plymouth Colony.',
          figures: ['William Bradford']
        },
        {
          year: 1757,
          event: 'Battle of Plassey',
          type: 'military',
          importance: 10,
          coordinates: { lat: 23.8103, lng: 88.2328 },
          mapState: {
            conquered: ['bengal'],
            britishIndia: 'begins'
          },
          details: 'Robert Clive\'s victory establishes British dominance in India.',
          figures: ['Robert Clive', 'Siraj ud-Daulah']
        },
        {
          year: 1763,
          event: 'Treaty of Paris',
          type: 'political',
          importance: 9,
          coordinates: { lat: 48.8566, lng: 2.3522 },
          mapState: {
            newTerritories: ['canada', 'florida'],
            dominance: 'north-america'
          },
          details: 'Britain gains Canada and Florida, becoming dominant colonial power.',
          figures: ['George III']
        },
        {
          year: 1770,
          event: 'Cook Claims Australia',
          type: 'exploration',
          importance: 9,
          coordinates: { lat: -33.8688, lng: 151.2093 },
          mapState: {
            newTerritories: ['new-south-wales']
          },
          details: 'James Cook claims Australia\'s east coast for Britain.',
          figures: ['James Cook']
        },
        {
          year: 1788,
          event: 'First Fleet Arrives in Australia',
          type: 'settlement',
          importance: 8,
          coordinates: { lat: -33.8688, lng: 151.2093 },
          mapState: {
            penalColony: true
          },
          details: 'Britain establishes penal colony in Sydney.',
          figures: ['Arthur Phillip']
        }
      ],
      
      territories: {
        1600: ['england', 'wales', 'ireland-partial'],
        1650: ['great-britain', 'ireland-partial', 'virginia', 'massachusetts', 'maryland', 'barbados'],
        1700: ['great-britain', 'ireland', 'thirteen-colonies', 'hudson-bay', 'jamaica', 'gibraltar'],
        1750: ['great-britain', 'ireland', 'thirteen-colonies', 'canada-partial', 'bengal', 'jamaica'],
        1800: ['great-britain', 'ireland', 'canada', 'bengal', 'madras', 'bombay', 'australia', 'jamaica', 'gibraltar']
      }
    },
    
    {
      id: 'french-empire',
      name: 'French Colonial Empire',
      capital: { name: 'Paris', lat: 48.8566, lng: 2.3522 },
      color: '#002395',
      timespan: { start: 1534, end: 1980 },
      
      timeline: [
        {
          year: 1534,
          event: 'Cartier Explores Canada',
          type: 'exploration',
          importance: 7,
          coordinates: { lat: 46.8139, lng: -71.2080 },
          mapState: {
            explored: ['st-lawrence']
          },
          details: 'Jacques Cartier explores the St. Lawrence River.',
          figures: ['Jacques Cartier']
        },
        {
          year: 1608,
          event: 'Quebec City Founded',
          type: 'settlement',
          importance: 8,
          coordinates: { lat: 46.8139, lng: -71.2080 },
          mapState: {
            newTerritories: ['new-france']
          },
          details: 'Samuel de Champlain establishes Quebec City.',
          figures: ['Samuel de Champlain']
        },
        {
          year: 1682,
          event: 'La Salle Claims Louisiana',
          type: 'exploration',
          importance: 8,
          coordinates: { lat: 29.9511, lng: -90.0715 },
          mapState: {
            newTerritories: ['louisiana']
          },
          details: 'René-Robert Cavelier claims Mississippi River basin for France.',
          figures: ['René-Robert Cavelier']
        },
        {
          year: 1763,
          event: 'Loss of New France',
          type: 'political',
          importance: 9,
          coordinates: { lat: 48.8566, lng: 2.3522 },
          mapState: {
            lostTerritories: ['canada', 'louisiana-east']
          },
          details: 'Seven Years\' War ends with France losing most North American territories.',
          figures: ['Louis XV']
        }
      ],
      
      territories: {
        1600: ['france'],
        1650: ['france', 'new-france', 'martinique', 'guadeloupe'],
        1700: ['france', 'new-france', 'louisiana', 'martinique', 'guadeloupe', 'haiti', 'pondicherry'],
        1750: ['france', 'new-france', 'louisiana', 'haiti', 'martinique'],
        1800: ['france', 'martinique', 'guadeloupe', 'reunion', 'senegal']
      }
    }
  ],
  
  globalEvents: [
    {
      year: 1492,
      event: 'Colombian Exchange Begins',
      type: 'cultural',
      importance: 10,
      globalImpact: true,
      details: 'Transfer of plants, animals, diseases between Old and New Worlds transforms both.',
      effects: {
        americas: ['European diseases kill 90% of indigenous population', 'Horses, cattle, wheat introduced'],
        eurasia: ['Potatoes, tomatoes, maize transform agriculture', 'Population boom from new crops'],
        africa: ['Slave trade intensifies', 'New crops introduced']
      }
    },
    {
      year: 1500,
      event: 'Age of Gunpowder Empires',
      type: 'military',
      importance: 9,
      details: 'Firearms revolutionize warfare, enabling new empires.',
      affectedRegions: ['ottoman', 'safavid', 'mughal', 'europe']
    },
    {
      year: 1517,
      event: 'Protestant Reformation',
      type: 'religious',
      importance: 10,
      coordinates: { lat: 51.5167, lng: 11.9667 },
      details: 'Martin Luther\'s 95 Theses spark religious upheaval in Europe.',
      figures: ['Martin Luther'],
      globalImpact: {
        europe: 'Religious wars, political fragmentation',
        americas: 'Protestant colonization',
        africa: 'Different missionary approaches'
      }
    },
    {
      year: 1618,
      event: 'Thirty Years\' War Begins',
      type: 'military',
      importance: 9,
      coordinates: { lat: 50.0755, lng: 14.4378 },
      duration: 30,
      casualties: 8000000,
      details: 'Devastating religious war transforms Europe.',
      affectedRegions: ['holy-roman-empire', 'france', 'spain', 'sweden']
    },
    {
      year: 1648,
      event: 'Peace of Westphalia',
      type: 'political',
      importance: 10,
      coordinates: { lat: 51.9607, lng: 7.6261 },
      details: 'Establishes modern nation-state system and religious tolerance.',
      globalImpact: 'Foundation of modern international law'
    },
    {
      year: 1650,
      event: 'Scientific Revolution Peak',
      type: 'scientific',
      importance: 10,
      details: 'Newton, Galileo, Descartes transform understanding of nature.',
      figures: ['Isaac Newton', 'Galileo Galilei', 'René Descartes'],
      discoveries: ['Laws of motion', 'Calculus', 'Heliocentric model']
    },
    {
      year: 1689,
      event: 'Glorious Revolution',
      type: 'political',
      importance: 9,
      coordinates: { lat: 51.5074, lng: -0.1278 },
      details: 'Establishes constitutional monarchy in England.',
      figures: ['William III', 'Mary II'],
      globalImpact: 'Model for future democratic revolutions'
    },
    {
      year: 1700,
      event: 'Global Trade Network Mature',
      type: 'economic',
      importance: 10,
      details: 'First truly global economy emerges, connecting all continents.',
      tradeGoods: ['silver', 'spices', 'silk', 'sugar', 'slaves', 'tea', 'coffee'],
      routes: ['trans-atlantic', 'trans-pacific', 'cape-route', 'silk-road']
    },
    {
      year: 1756,
      event: 'Seven Years\' War Begins',
      type: 'military',
      importance: 10,
      globalImpact: true,
      details: 'First truly global war, fought on five continents.',
      duration: 7,
      theaters: ['europe', 'north-america', 'south-america', 'africa', 'asia'],
      outcome: 'British dominance established'
    },
    {
      year: 1776,
      event: 'American Revolution',
      type: 'political',
      importance: 10,
      coordinates: { lat: 39.9526, lng: -75.1652 },
      details: 'Thirteen Colonies declare independence from Britain.',
      figures: ['George Washington', 'Thomas Jefferson', 'Benjamin Franklin'],
      globalImpact: 'Inspires future independence movements'
    },
    {
      year: 1789,
      event: 'French Revolution',
      type: 'political',
      importance: 10,
      coordinates: { lat: 48.8566, lng: 2.3522 },
      details: 'Overthrow of monarchy, rise of republicanism.',
      figures: ['Maximilien Robespierre', 'Napoleon Bonaparte'],
      globalImpact: 'Spreads ideas of liberty, equality, fraternity'
    }
  ],
  
  slaveTradeRoutes: [
    {
      id: 'middle-passage',
      from: { lat: 6.3703, lng: 2.3912 }, // West Africa
      to: { lat: 14.0583, lng: -87.2072 }, // Caribbean
      active: { start: 1500, end: 1850 },
      enslaved: 12500000,
      mortality: 0.15,
      details: 'Horrific forced migration of Africans to Americas.',
      majorPorts: [
        { name: 'Elmina', lat: 5.0831, lng: -1.3509 },
        { name: 'Luanda', lat: -8.8368, lng: 13.2343 },
        { name: 'Charleston', lat: 32.7765, lng: -79.9311 },
        { name: 'Salvador', lat: -12.9714, lng: -38.5014 },
        { name: 'Havana', lat: 23.1136, lng: -82.3666 }
      ]
    }
  ],
  
  economicImpacts: {
    europe: {
      priceRevolution: 'Massive inflation from American silver',
      capitalism: 'Joint-stock companies emerge',
      banking: 'Modern banking systems develop'
    },
    americas: {
      population: 'Indigenous population collapses 90%',
      economy: 'Plantation economy established',
      ecology: 'Introduction of Old World species'
    },
    africa: {
      slaveTrade: '12.5 million enslaved, devastating societies',
      politics: 'Coastal kingdoms rise, interior weakens',
      demographics: 'Population stagnation for 200 years'
    },
    asia: {
      trade: 'Direct European contact',
      silver: 'Massive influx from American mines',
      colonization: 'Coastal areas fall under European control'
    }
  }
};

// Register with master data engine
if (typeof GEOTOPIA_DATA !== 'undefined') {
  GEOTOPIA_DATA.register(COLONIAL_ERA);
}
