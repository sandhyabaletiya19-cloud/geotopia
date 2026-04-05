/**
 * GEOTOPIA - Oceanian Civilizations
 * Aboriginal Australians, Lapita, Polynesian Expansion, Easter Island
 */

const OCEANIA_CIVILIZATIONS = {
  region: 'Oceania',
  color: '#00CED1', // Dark Turquoise
  timeRange: { start: -50000, end: 1800 },
  
  civilizations: [
    {
      id: 'aboriginal-australia',
      name: 'Aboriginal Australians',
      timespan: { start: -50000, end: 1788 },
      center: { lat: -25.0, lng: 135.0 }, // Central Australia
      
      timeline: [
        {
          year: -50000,
          event: 'First Humans Reach Australia',
          type: 'major',
          importance: 10,
          details: 'Humans cross from Southeast Asia during Ice Age.',
          method: 'Land bridges and short sea crossings',
          significance: 'Oldest continuous culture on Earth'
        },
        {
          year: -40000,
          event: 'Lake Mungo Burials',
          type: 'cultural',
          importance: 9,
          location: { lat: -33.7, lng: 143.1 },
          details: 'Oldest known ritual burials in world.',
          evidence: 'Ochre pigment, cremation, grave goods',
          significance: 'Demonstrates spiritual beliefs'
        },
        {
          year: -35000,
          event: 'Rock Art Traditions Begin',
          type: 'cultural',
          importance: 9,
          details: 'Oldest art tradition in world begins.',
          locations: ['Kimberley', 'Arnhem Land', 'Kakadu'],
          styles: 'Evolve over 35,000 years'
        },
        {
          year: -30000,
          event: 'Megafauna Extinction',
          type: 'catastrophic',
          importance: 8,
          details: 'Giant animals (diprotodon, giant kangaroo) go extinct.',
          debate: 'Human hunting vs climate change',
          impact: 'Changed ecosystem and diet'
        },
        {
          year: -20000,
          event: 'Ice Age Maximum',
          type: 'environmental',
          importance: 7,
          details: 'Sea levels 130m lower, Australia larger.',
          connected: 'Tasmania, New Guinea connected to mainland'
        },
        {
          year: -10000,
          event: 'Tasmania Isolated',
          type: 'environmental',
          importance: 7,
          details: 'Rising seas separate Tasmania.',
          consequence: 'Isolated for 12,000 years until European contact'
        },
        {
          year: -5000,
          event: 'Dingo Introduced',
          type: 'cultural',
          importance: 6,
          details: 'Dingo arrives from Asia.',
          impact: 'Thylacinex extinct on mainland'
        },
        {
          year: -4000,
          event: 'Complex Trade Networks',
          type: 'major',
          importance: 7,
          details: 'Continent-wide trade established.',
          goods: ['Ochre', 'Stone tools', 'Pearl shell', 'Pituri (tobacco)'],
          routes: 'Thousands of kilometers'
        },
        {
          year: 1606,
          event: 'First European Contact',
          type: 'major',
          importance: 8,
          explorer: 'Willem Janszoon (Dutch)',
          location: { lat: -12.0, lng: 142.0 }, // Cape York
          details: 'Europeans encounter Aboriginal people.'
        },
        {
          year: 1770,
          event: 'Cook Claims Australia',
          type: 'political',
          importance: 9,
          explorer: 'James Cook',
          details: 'Britain claims eastern Australia.',
          fiction: 'Terra nullius (land belonging to no one)'
        },
        {
          year: 1788,
          event: 'First Fleet Arrives',
          type: 'catastrophic',
          importance: 10,
          date: 'January 26, 1788',
          location: { lat: -33.86, lng: 151.21 }, // Sydney
          details: 'British colonization begins.',
          population: 'Aboriginal: 750,000+',
          consequences: [
            'Diseases (smallpox killed 50%+ in some areas)',
            'Dispossession',
            'Violence',
            'Cultural destruction'
          ]
        }
      ],
      
      achievements: [
        'World\'s oldest continuous culture (65,000+ years)',
        'Oldest rock art tradition',
        'Sophisticated land management (fire-stick farming)',
        'Dreamtime cosmology',
        'Boomerang and woomera technology',
        '250+ language groups',
        'Song lines navigation',
        'Complex kinship systems',
        'Sustainable resource management'
      ],
      
      culture: {
        spirituality: 'Dreamtime - creation beings shaped landscape',
        society: 'Complex kinship, no chiefs or formal hierarchy',
        technology: 'Adapted to all Australian environments',
        knowledge: 'Oral traditions preserving tens of thousands of years of history'
      },
      
      influence: {
        influenced: ['australian-culture'],
        isolation: 'Developed independently for 50,000 years'
      }
    },
    
    {
      id: 'lapita',
      name: 'Lapita Culture',
      timespan: { start: -1600, end: -500 },
      center: { lat: -5.0, lng: 150.0 }, // Bismarck Archipelago
      
      timeline: [
        {
          year: -1600,
          event: 'Lapita Culture Emerges',
          type: 'major',
          importance: 9,
          location: { lat: -5.0, lng: 150.0 },
          details: 'Seafaring culture develops in Bismarck Archipelago.',
          characteristic: 'Distinctive dentate-stamped pottery',
          origin: 'Taiwanese/Island Southeast Asian ancestry'
        },
        {
          year: -1500,
          event: 'Expansion into Melanesia',
          type: 'major',
          importance: 8,
          details: 'Lapita people spread through Solomon Islands.',
          navigation: 'Open-ocean voyaging technology'
        },
        {
          year: -1300,
          event: 'Reach Fiji',
          type: 'major',
          importance: 8,
          location: { lat: -18.0, lng: 178.0 },
          details: 'Lapita settlements established in Fiji.',
          distance: '4,000 km from origin'
        },
        {
          year: -1200,
          event: 'Reach Tonga and Samoa',
          type: 'major',
          importance: 9,
          details: 'Lapita reach western Polynesia.',
          significance: 'Polynesian culture develops here',
          pause: '"Long Pause" - 1,000 years before further expansion'
        },
        {
          year: -500,
          event: 'Lapita Culture Transforms',
          type: 'cultural',
          importance: 7,
          details: 'Lapita pottery tradition ends.',
          successor: 'Ancestral Polynesian culture emerges in Tonga/Samoa'
        }
      ],
      
      achievements: [
        'Pacific colonization begins',
        'Open-ocean navigation',
        'Outrigger canoe technology',
        'Distinctive pottery',
        'Long-distance voyaging',
        'Tropical horticulture'
      ],
      
      influence: {
        influenced: ['polynesia', 'melanesia'],
        influencedBy: ['taiwan', 'island-southeast-asia']
      }
    },
    
    {
      id: 'polynesia',
      name: 'Polynesian Expansion',
      timespan: { start: -1000, end: 1300 },
      center: { lat: -15.0, lng: -150.0 }, // Central Pacific
      
      timeline: [
        {
          year: -1000,
          event: 'Polynesian Culture Develops',
          type: 'cultural',
          importance: 9,
          location: { lat: -18.0, lng: -175.0 }, // Tonga/Samoa
          details: 'Distinctive Polynesian culture emerges from Lapita.',
          features: ['Language', 'Religion', 'Social structure', 'Navigation']
        },
        {
          year: -200,
          event: 'Expansion Resumes - Marquesas',
          type: 'major',
          importance: 9,
          location: { lat: -9.0, lng: -139.5 },
          details: 'Polynesians reach Marquesas Islands.',
          distance: '4,000 km voyage',
          significance: 'Gateway to Eastern Polynesia'
        },
        {
          year: 300,
          event: 'Easter Island Settled',
          type: 'major',
          importance: 9,
          location: { lat: -27.1, lng: -109.35 },
          details: 'Most remote inhabited island settled.',
          distance: '3,500 km from nearest land',
          name: 'Rapa Nui'
        },
        {
          year: 400,
          event: 'Hawaii Reached',
          type: 'major',
          importance: 9,
          location: { lat: 21.3, lng: -157.8 },
          details: 'Hawaiian Islands settled from Marquesas.',
          distance: '4,000 km northward voyage',
          isolation: 'Most isolated archipelago on Earth'
        },
        {
          year: 700,
          event: 'Tahiti Settled',
          type: 'major',
          importance: 8,
          location: { lat: -17.7, lng: -149.4 },
          details: 'Society Islands become cultural center.',
          significance: 'Launch point for further voyages'
        },
        {
          year: 800,
          event: 'Second Wave to Hawaii',
          type: 'major',
          importance: 7,
          details: 'Contact between Tahiti and Hawaii.',
          result: 'Cultural exchange, kapu system develops'
        },
        {
          year: 1000,
          event: 'Moai Construction Begins',
          type: 'cultural',
          importance: 9,
          location: { lat: -27.1, lng: -109.35 }, // Easter Island
          details: 'Easter Islanders begin carving giant stone statues.',
          moai: 'Nearly 900 statues over 500 years',
          size: 'Up to 10m tall, 82 tons',
          mystery: 'How moved? (Walking, rollers, sledges?)'
        },
        {
          year: 1200,
          event: 'New Zealand Reached',
          type: 'major',
          importance: 10,
          location: { lat: -41.0, lng: 175.0 },
          details: 'Last major landmass colonized.',
          colonizers: 'Māori from Eastern Polynesia (probably Society Islands)',
          significance: 'Final step in Polynesian expansion',
          change: 'Adapted to temperate climate'
        },
        {
          year: 1250,
          event: 'Moa Hunting Period',
          type: 'major',
          importance: 7,
          location: { lat: -44.0, lng: 170.0 },
          details: 'Māori hunt giant flightless birds.',
          species: 'Nine species of moa',
          extinction: 'All extinct within 200 years'
        },
        {
          year: 1300,
          event: 'Long-Distance Voyaging Declines',
          type: 'cultural',
          importance: 6,
          details: 'Inter-island contact decreases.',
          cause: 'Populations established, less incentive',
          isolation: 'Islands develop distinct cultures'
        },
        {
          year: 1400,
          event: 'Easter Island Ecological Collapse',
          type: 'catastrophic',
          importance: 8,
          details: 'Deforestation leads to societal collapse.',
          cause: 'Trees cut for moving moai, canoes, fuel',
          consequence: 'No more canoes, moai construction ends',
          population: 'Crash from 15,000 to few thousand',
          warfare: 'Moai toppled in conflicts'
        },
        {
          year: 1500,
          event: 'Hawaiian Chiefdoms Consolidate',
          type: 'political',
          importance: 7,
          details: 'Complex chiefdoms develop on major islands.',
          system: 'Ali\'i (chiefs), kapu (taboo system)'
        },
        {
          year: 1642,
          event: 'First European Contact - New Zealand',
          type: 'major',
          importance: 8,
          explorer: 'Abel Tasman (Dutch)',
          details: 'Tasman encounters Māori.',
          outcome: 'Four Dutch killed, no landing'
        },
        {
          year: 1722,
          event: 'Easter Island European Contact',
          type: 'major',
          importance: 7,
          explorer: 'Jacob Roggeveen (Dutch)',
          date: 'Easter Sunday, 1722 (hence name)',
          observation: 'Europeans see moai still standing'
        },
        {
          year: 1769,
          event: 'Cook in New Zealand and Tahiti',
          type: 'major',
          importance: 8,
          explorer: 'James Cook',
          details: 'Detailed European contact with Polynesia.',
          companion: 'Tupaia (Tahitian navigator)',
          discovery: 'Cook amazed by extent of Polynesian world'
        },
        {
          year: 1778,
          event: 'Cook Reaches Hawaii',
          type: 'major',
          importance: 9,
          explorer: 'James Cook',
          details: 'First European contact with Hawaii.',
          tragedy: 'Cook killed 1779 in dispute'
        }
      ],
      
      achievements: [
        'Greatest maritime expansion in human history',
        'Non-instrument navigation (star compass, wave reading)',
        'Double-hulled voyaging canoes',
        'Colonized area larger than any empire (Polynesian Triangle: 25 million km²)',
        'Easter Island moai',
        'Hawaiian temple complexes (heiau)',
        'Māori carving and tattooing (tā moko)',
        'Oral history and genealogies',
        'Sustainable Pacific agriculture (taro, breadfruit, coconut)',
        'Polynesian languages (related across 10,000 km)'
      ],
      
      navigation: {
        methods: [
          'Star compass (rising/setting positions)',
          'Wave patterns (reflection off islands)',
          'Bird flight paths',
          'Cloud patterns (reflect land)',
          'Phosphorescence',
          'Mental "star maps"'
        ],
        vessels: 'Double-hulled canoes up to 30m long',
        provisions: 'Pigs, chickens, dogs, taro, coconut, breadfruit'
      },
      
      keyFigures: [
        { name: 'Kupe', role: 'Legendary discoverer of New Zealand', years: [900, 1000] },
        { name: 'Kamehameha I', role: 'United Hawaii', years: [1758, 1819] },
        { name: 'Tupaia', role: 'Navigator who drew Pacific map', years: [1725, 1770] }
      ],
      
      influence: {
        influenced: ['pacific-cultures'],
        influencedBy: ['lapita'],
        extent: 'Hawaii to New Zealand to Easter Island (Polynesian Triangle)'
      }
    }
  ]
};

// Register
if (typeof GEOTOPIA_DATA !== 'undefined') {
  GEOTOPIA_DATA.register(OCEANIA_CIVILIZATIONS);
}
