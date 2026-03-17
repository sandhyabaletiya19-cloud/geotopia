/* ============================================
   MOUNTAINS EXPLORER - DATA COMBINER
   This file combines all mountain data from 
   the 10 separate data files into one array
   ============================================ */

(function() {
    'use strict';

    // ============================================
    // COMBINE ALL MOUNTAIN DATA
    // ============================================
    
    // Initialize the main data array
    window.MOUNTAINS_DATA = [];

    // Combine data from all 10 files
    // Each file exports: MOUNTAINS_DATA_1 through MOUNTAINS_DATA_10
    
    const dataFiles = [
        typeof MOUNTAINS_DATA_1 !== 'undefined' ? MOUNTAINS_DATA_1 : [],
        typeof MOUNTAINS_DATA_2 !== 'undefined' ? MOUNTAINS_DATA_2 : [],
        typeof MOUNTAINS_DATA_3 !== 'undefined' ? MOUNTAINS_DATA_3 : [],
        typeof MOUNTAINS_DATA_4 !== 'undefined' ? MOUNTAINS_DATA_4 : [],
        typeof MOUNTAINS_DATA_5 !== 'undefined' ? MOUNTAINS_DATA_5 : [],
        typeof MOUNTAINS_DATA_6 !== 'undefined' ? MOUNTAINS_DATA_6 : [],
        typeof MOUNTAINS_DATA_7 !== 'undefined' ? MOUNTAINS_DATA_7 : [],
        typeof MOUNTAINS_DATA_8 !== 'undefined' ? MOUNTAINS_DATA_8 : [],
        typeof MOUNTAINS_DATA_9 !== 'undefined' ? MOUNTAINS_DATA_9 : [],
        typeof MOUNTAINS_DATA_10 !== 'undefined' ? MOUNTAINS_DATA_10 : []
    ];

    // Merge all data files
    dataFiles.forEach(data => {
        if (Array.isArray(data)) {
            window.MOUNTAINS_DATA = window.MOUNTAINS_DATA.concat(data);
        }
    });

    // ============================================
    // DATA VALIDATION & PROCESSING
    // ============================================

    // Ensure all mountains have required fields
    window.MOUNTAINS_DATA = window.MOUNTAINS_DATA.map((mountain, index) => {
        // Generate ID if not present
        if (!mountain.id) {
            mountain.id = mountain.name.toLowerCase().replace(/[^a-z0-9]+/g, '-');
        }

        // Ensure countries array exists
        if (!mountain.countries || !Array.isArray(mountain.countries)) {
            mountain.countries = [{ name: 'Unknown', code: 'UN' }];
        }

        // Ensure coordinates exist
        if (!mountain.coordinates || !Array.isArray(mountain.coordinates)) {
            mountain.coordinates = [0, 0];
        }

        // Ensure elevation exists
        if (typeof mountain.elevation !== 'number') {
            mountain.elevation = 0;
        }

        // Set default zoom if not present
        if (!mountain.defaultZoom) {
            mountain.defaultZoom = 10;
        }

        // Set default image if not present
        if (!mountain.image) {
            mountain.image = 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=400&q=80';
        }

        // Set background image if not present
        if (!mountain.backgroundImage) {
            mountain.backgroundImage = mountain.image.replace('w=400', 'w=1920');
        }

        // Ensure boolean flags
        mountain.eightThousander = mountain.elevation >= 8000;
        mountain.sevenSummit = mountain.sevenSummit || false;
        mountain.deathZone = mountain.elevation >= 8000;
        mountain.technicalClimbing = mountain.technicalClimbing || false;
        mountain.permitRequired = mountain.permitRequired || false;

        return mountain;
    });

    // ============================================
    // SORT BY ELEVATION (HIGHEST FIRST)
    // ============================================
    window.MOUNTAINS_DATA.sort((a, b) => b.elevation - a.elevation);

    // ============================================
    // STATISTICS & HELPERS
    // ============================================

    window.MOUNTAINS_STATS = {
        total: window.MOUNTAINS_DATA.length,
        
        eightThousanders: window.MOUNTAINS_DATA.filter(m => m.eightThousander).length,
        
        sevenSummits: window.MOUNTAINS_DATA.filter(m => m.sevenSummit).length,
        
        volcanic: window.MOUNTAINS_DATA.filter(m => m.formation && m.formation.type === 'Volcanic').length,
        
        highestPeak: window.MOUNTAINS_DATA.length > 0 ? window.MOUNTAINS_DATA[0] : null,
        
        countries: [...new Set(
            window.MOUNTAINS_DATA.flatMap(m => m.countries.map(c => c.name))
        )].length,
        
        continents: [...new Set(
            window.MOUNTAINS_DATA.map(m => m.continent)
        )],
        
        ranges: [...new Set(
            window.MOUNTAINS_DATA.map(m => m.mountainRange).filter(Boolean)
        )].sort(),
        
        byContinent: (continent) => {
            return window.MOUNTAINS_DATA.filter(m => m.continent === continent);
        },
        
        byRange: (range) => {
            return window.MOUNTAINS_DATA.filter(m => m.mountainRange === range);
        },
        
        byCountry: (countryName) => {
            return window.MOUNTAINS_DATA.filter(m => 
                m.countries.some(c => c.name === countryName)
            );
        },
        
        search: (query) => {
            const q = query.toLowerCase();
            return window.MOUNTAINS_DATA.filter(m =>
                m.name.toLowerCase().includes(q) ||
                m.countries.some(c => c.name.toLowerCase().includes(q)) ||
                m.mountainRange.toLowerCase().includes(q) ||
                m.continent.toLowerCase().includes(q)
            );
        },
        
        getById: (id) => {
            return window.MOUNTAINS_DATA.find(m => m.id === id);
        },
        
        getRank: (mountainId) => {
            return window.MOUNTAINS_DATA.findIndex(m => m.id === mountainId) + 1;
        }
    };

    // ============================================
    // COUNTRY CODE MAPPINGS
    // ============================================
    window.COUNTRY_CODES = {
        'Afghanistan': 'AF',
        'Argentina': 'AR',
        'Australia': 'AU',
        'Austria': 'AT',
        'Bolivia': 'BO',
        'Cameroon': 'CM',
        'Canada': 'CA',
        'Chile': 'CL',
        'China': 'CN',
        'DR Congo': 'CD',
        'Ecuador': 'EC',
        'Ethiopia': 'ET',
        'France': 'FR',
        'Germany': 'DE',
        'Greece': 'GR',
        'India': 'IN',
        'Indonesia': 'ID',
        'Iran': 'IR',
        'Italy': 'IT',
        'Japan': 'JP',
        'Kazakhstan': 'KZ',
        'Kenya': 'KE',
        'Kyrgyzstan': 'KG',
        'Mexico': 'MX',
        'Morocco': 'MA',
        'Nepal': 'NP',
        'New Zealand': 'NZ',
        'Norway': 'NO',
        'Pakistan': 'PK',
        'Peru': 'PE',
        'Poland': 'PL',
        'Romania': 'RO',
        'Russia': 'RU',
        'Slovakia': 'SK',
        'Slovenia': 'SI',
        'South Africa': 'ZA',
        'Spain': 'ES',
        'Switzerland': 'CH',
        'Tajikistan': 'TJ',
        'Tanzania': 'TZ',
        'Turkey': 'TR',
        'Uganda': 'UG',
        'UK': 'GB',
        'USA': 'US',
        'Antarctica': 'AQ'
    };

    // ============================================
    // MOUNTAIN RANGE DATA
    // ============================================
    window.MOUNTAIN_RANGES = {
        'Himalayas': {
            continent: 'Asia',
            countries: ['Nepal', 'China', 'India', 'Bhutan', 'Pakistan'],
            highestPeak: 'Mount Everest',
            length: '2,400 km'
        },
        'Karakoram': {
            continent: 'Asia',
            countries: ['Pakistan', 'China', 'India'],
            highestPeak: 'K2',
            length: '500 km'
        },
        'Alps': {
            continent: 'Europe',
            countries: ['France', 'Switzerland', 'Italy', 'Austria', 'Germany', 'Slovenia'],
            highestPeak: 'Mont Blanc',
            length: '1,200 km'
        },
        'Andes': {
            continent: 'South America',
            countries: ['Argentina', 'Chile', 'Peru', 'Bolivia', 'Ecuador', 'Colombia', 'Venezuela'],
            highestPeak: 'Aconcagua',
            length: '7,000 km'
        },
        'Rocky Mountains': {
            continent: 'North America',
            countries: ['USA', 'Canada'],
            highestPeak: 'Mount Elbert',
            length: '4,800 km'
        },
        'Alaska Range': {
            continent: 'North America',
            countries: ['USA'],
            highestPeak: 'Denali',
            length: '650 km'
        },
        'Caucasus': {
            continent: 'Europe',
            countries: ['Russia', 'Georgia', 'Azerbaijan'],
            highestPeak: 'Mount Elbrus',
            length: '1,100 km'
        },
        'Hindu Kush': {
            continent: 'Asia',
            countries: ['Afghanistan', 'Pakistan'],
            highestPeak: 'Tirich Mir',
            length: '800 km'
        },
        'Pamir': {
            continent: 'Asia',
            countries: ['Tajikistan', 'Kyrgyzstan', 'Afghanistan', 'China'],
            highestPeak: 'Ismoil Somoni Peak',
            length: '500 km'
        },
        'Tian Shan': {
            continent: 'Asia',
            countries: ['China', 'Kyrgyzstan', 'Kazakhstan'],
            highestPeak: 'Jengish Chokusu',
            length: '2,500 km'
        },
        'Cascade Range': {
            continent: 'North America',
            countries: ['USA', 'Canada'],
            highestPeak: 'Mount Rainier',
            length: '1,100 km'
        },
        'Sierra Nevada': {
            continent: 'North America',
            countries: ['USA'],
            highestPeak: 'Mount Whitney',
            length: '640 km'
        },
        'Atlas': {
            continent: 'Africa',
            countries: ['Morocco', 'Algeria', 'Tunisia'],
            highestPeak: 'Toubkal',
            length: '2,500 km'
        },
        'Rwenzori': {
            continent: 'Africa',
            countries: ['Uganda', 'DR Congo'],
            highestPeak: 'Mount Stanley',
            length: '120 km'
        },
        'Transantarctic': {
            continent: 'Antarctica',
            countries: ['Antarctica'],
            highestPeak: 'Mount Kirkpatrick',
            length: '3,500 km'
        }
    };

    // ============================================
    // DIFFICULTY LEVELS
    // ============================================
    window.DIFFICULTY_LEVELS = {
        'Walk-up': {
            level: 1,
            description: 'No technical climbing required, hiking only',
            color: '#27ae60'
        },
        'Easy': {
            level: 2,
            description: 'Basic mountaineering skills required',
            color: '#2ecc71'
        },
        'Moderate': {
            level: 3,
            description: 'Intermediate mountaineering skills, some technical sections',
            color: '#f39c12'
        },
        'Difficult': {
            level: 4,
            description: 'Advanced skills, technical climbing required',
            color: '#e67e22'
        },
        'Very Difficult': {
            level: 5,
            description: 'Expert skills, sustained technical climbing',
            color: '#d35400'
        },
        'Extremely Difficult': {
            level: 6,
            description: 'Elite mountaineers only, extreme conditions',
            color: '#c0392b'
        },
        'Exceptionally Difficult': {
            level: 7,
            description: 'Most challenging climbs in the world',
            color: '#8e44ad'
        }
    };

    // ============================================
    // CONSOLE OUTPUT
    // ============================================
    console.log(`%c⛰️ Mountains Explorer Data Loaded`, 'font-size: 16px; font-weight: bold; color: #3498db;');
    console.log(`%c📊 Total Mountains: ${window.MOUNTAINS_DATA.length}`, 'color: #2ecc71;');
    console.log(`%c🏔️ Eight-Thousanders: ${window.MOUNTAINS_STATS.eightThousanders}`, 'color: #e74c3c;');
    console.log(`%c⭐ Seven Summits: ${window.MOUNTAINS_STATS.sevenSummits}`, 'color: #f39c12;');
    console.log(`%c🌋 Volcanic Peaks: ${window.MOUNTAINS_STATS.volcanic}`, 'color: #9b59b6;');
    console.log(`%c🌍 Countries: ${window.MOUNTAINS_STATS.countries}`, 'color: #1abc9c;');
    console.log(`%c🗻 Mountain Ranges: ${window.MOUNTAINS_STATS.ranges.length}`, 'color: #34495e;');

    // ============================================
    // EXPORT CHECK
    // ============================================
    if (window.MOUNTAINS_DATA.length === 0) {
        console.warn('⚠️ No mountain data loaded. Ensure all data files are included before mountains-data.js');
    }

})();
