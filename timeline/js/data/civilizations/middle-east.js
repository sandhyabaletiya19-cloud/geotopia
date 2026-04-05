/**
 * GEOTOPIA - Middle Eastern Civilizations
 * Sumer, Akkad, Babylon, Assyria, Persia, Phoenicia
 */

const MIDDLE_EAST_CIVILIZATIONS = {
  region: 'Middle East',
  color: '#DAA520', // Goldenrod
  timeRange: { start: -4500, end: -330 },
  
  civilizations: [
    {
      id: 'sumer',
      name: 'Sumer',
      timespan: { start: -4500, end: -1900 },
      center: { lat: 31.0, lng: 46.0 },
      
      timeline: [
        {
          year: -4500,
          event: 'First Sumerian Cities',
          type: 'major',
          importance: 10,
          details: 'Uruk, Ur, Eridu - world\'s first cities.',
          achievements: ['Irrigation', 'Ziggurats', 'City-states']
        },
        {
          year: -3500,
          event: 'Invention of Writing',
          type: 'cultural',
          importance: 10,
          details: 'Cuneiform script - world\'s first writing system.',
          significance: 'Beginning of recorded history'
        },
        {
          year: -3000,
          event: 'Invention of Wheel',
          type: 'major',
          importance: 10,
          details: 'Wheel revolutionizes transport and pottery.',
          culturalImpact: 'Foundational technology'
        },
        {
          year: -2100,
          event: 'Ur III Dynasty - Sumerian Renaissance',
          type: 'major',
          importance: 8,
          ruler: 'Ur-Nammu',
          achievements: ['First legal code', 'Ziggurats', 'Literature']
        },
        {
          year: -1900,
          event: 'Fall to Amorites',
          type: 'political',
          importance: 7,
          details: 'Sumerian civilization absorbed by Babylon.'
        }
      ],
      
      achievements: [
        'Writing (cuneiform)',
        'Wheel',
        'Mathematics (base-60)',
        'Astronomy',
        'Legal codes',
        'Epic of Gilgamesh',
        'Irrigation systems',
        'Bronze working',
        'Beer brewing'
      ],
      
      keyFigures: [
        { name: 'Gilgamesh', role: 'Legendary King', years: [-2800, -2500] },
        { name: 'Ur-Nammu', role: 'Law Maker', years: [-2112, -2095] }
      ],
      
      influence: {
        influenced: ['akkad', 'babylon', 'assyria', 'all-civilizations'],
        tradeRoutes: ['tigris-euphrates', 'persian-gulf']
      }
    },
    
    {
      id: 'babylon',
      name: 'Babylonian Empire',
      timespan: { start: -1895, end: -539 },
      center: { lat: 32.5, lng: 44.4 },
      
      timeline: [
        {
          year: -1792,
          event: 'Hammurabi Becomes King',
          type: 'political',
          importance: 10,
          ruler: 'Hammurabi',
          details: 'Greatest Babylonian king creates empire.'
        },
        {
          year: -1754,
          event: 'Code of Hammurabi',
          type: 'major',
          importance: 10,
          details: 'World\'s most famous ancient legal code - 282 laws.',
          principle: '"Eye for an eye, tooth for a tooth"',
          significance: 'Foundation of legal systems'
        },
        {
          year: -1595,
          event: 'Hittite Sack of Babylon',
          type: 'catastrophic',
          importance: 7,
          details: 'Old Babylonian period ends.'
        },
        {
          year: -626,
          event: 'Neo-Babylonian Empire',
          type: 'major',
          importance: 9,
          ruler: 'Nabopolassar',
          details: 'Chaldean dynasty creates new empire.'
        },
        {
          year: -605,
          event: 'Nebuchadnezzar II Becomes King',
          type: 'political',
          importance: 9,
          ruler: 'Nebuchadnezzar II',
          details: 'Greatest Neo-Babylonian king.'
        },
        {
          year: -587,
          event: 'Destruction of Jerusalem',
          type: 'military',
          importance: 10,
          details: 'Nebuchadnezzar conquers Judah, destroys First Temple.',
          aftermath: 'Babylonian Captivity of Jews'
        },
        {
          year: -575,
          event: 'Hanging Gardens Built (legendary)',
          type: 'cultural',
          importance: 9,
          details: 'One of Seven Wonders of Ancient World (possibly mythical).'
        },
        {
          year: -539,
          event: 'Persian Conquest',
          type: 'catastrophic',
          importance: 9,
          ruler: 'Cyrus the Great',
          details: 'Babylon falls to Persia without battle.'
        }
      ],
      
      achievements: [
        'Code of Hammurabi',
        'Hanging Gardens (legend)',
        'Ishtar Gate',
        'Astronomy/astrology',
        'Mathematics',
        'Babylon city'
      ],
      
      keyFigures: [
        { name: 'Hammurabi', role: 'Law Giver', years: [-1810, -1750] },
        { name: 'Nebuchadnezzar II', role: 'Empire Builder', years: [-642, -562] }
      ]
    },
    
    {
      id: 'persia',
      name: 'Persian Empire',
      timespan: { start: -550, end: -330 },
      center: { lat: 29.9, lng: 52.9 },
      
      timeline: [
        {
          year: -550,
          event: 'Cyrus the Great Founds Empire',
          type: 'political',
          importance: 10,
          ruler: 'Cyrus II',
          details: 'Unites Medes and Persians, begins conquest.'
        },
        {
          year: -539,
          event: 'Conquest of Babylon',
          type: 'military',
          importance: 9,
          details: 'Cyrus takes Babylon, frees Jewish exiles.',
          legacy: 'Remembered as liberator'
        },
        {
          year: -522,
          event: 'Darius I Becomes King',
          type: 'political',
          importance: 9,
          ruler: 'Darius I',
          details: 'Reorganizes empire into satrapies.'
        },
        {
          year: -520,
          event: 'Persepolis Construction',
          type: 'cultural',
          importance: 9,
          location: { lat: 29.9352, lng: 52.8916 },
          details: 'Magnificent capital with palatial complex.'
        },
        {
          year: -490,
          event: 'First Persian Invasion of Greece',
          type: 'military',
          importance: 9,
          details: 'Defeated at Marathon.'
        },
        {
          year: -480,
          event: 'Second Invasion - Xerxes',
          type: 'military',
          importance: 10,
          ruler: 'Xerxes I',
          details: 'Thermopylae victory, Salamis defeat.',
          outcome: 'Failed to conquer Greece'
        },
        {
          year: -334,
          event: 'Alexander Invades',
          type: 'military',
          importance: 10,
          details: 'Alexander the Great begins conquest of Persia.'
        },
        {
          year: -330,
          event: 'Fall of Persia',
          type: 'catastrophic',
          importance: 10,
          details: 'Alexander burns Persepolis, ends empire.',
          aftermath: 'Hellenistic period begins'
        }
      ],
      
      achievements: [
        'Largest empire in ancient world',
        'Royal Road (2,700 km)',
        'Postal system',
        'Zoroastrianism',
        'Tolerance policy',
        'Satrap administration',
        'Persian architecture'
      ],
      
      keyFigures: [
        { name: 'Cyrus II the Great', role: 'Founder', years: [-600, -530] },
        { name: 'Darius I', role: 'Organizer', years: [-550, -486] },
        { name: 'Xerxes I', role: 'Greek Invader', years: [-519, -465] }
      ],
      
      influence: {
        influenced: ['alexander', 'parthia', 'sassanids'],
        influencedBy: ['mesopotamia'],
        tradeRoutes: ['royal-road', 'silk-road']
      }
    }
  ]
};

if (typeof GEOTOPIA_DATA !== 'undefined') {
  GEOTOPIA_DATA.register(MIDDLE_EAST_CIVILIZATIONS);
}
