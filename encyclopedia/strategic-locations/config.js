// geotopia/encyclopedia/strategic-locations/config.js

const API_CONFIG = {
    // === REQUIRED (FREE) ===
    map: {
        provider: 'Mapbox',
        apiKey: 'YOUR_MAPBOX_KEY_HERE', // Get free: https://account.mapbox.com/
        fallback: 'OpenStreetMap' // Works without key
    },
    
    // === OPTIONAL (FREE) ===
    weather: {
        provider: 'OpenWeatherMap',
        endpoint: 'https://api.openweathermap.org/data/2.5/weather',
        apiKey: 'YOUR_OPENWEATHER_KEY_HERE', // Get free: https://openweathermap.org/api
        enabled: false, // Set to true when you have key
        useDemo: true   // Use demo data if no key
    },
    
    news: {
        provider: 'NewsAPI',
        endpoint: 'https://newsapi.org/v2/everything',
        apiKey: 'YOUR_NEWSAPI_KEY_HERE', // Get free: https://newsapi.org/register
        enabled: false,
        useDemo: true
    },
    
    oilPrices: {
        provider: 'Alpha Vantage',
        endpoint: 'https://www.alphavantage.co/query',
        apiKey: 'YOUR_ALPHAVANTAGE_KEY_HERE', // Get free: https://www.alphavantage.co/support/#api-key
        enabled: false,
        useDemo: true
    },
    
    // === AI (Optional - Use only when you have budget) ===
    ai: {
        provider: 'OpenAI',
        endpoint: 'https://api.openai.com/v1/chat/completions',
        apiKey: 'YOUR_OPENAI_KEY_HERE', // You already have this
        model: 'gpt-4o-mini', // Cheaper model: $0.00015 per 1K tokens
        enabled: false, // Set to true when you want to use
        useDemo: true   // Use template responses
    },
    
    // === SHIP TRACKING (Demo Mode Default) ===
    shipTracking: {
        provider: 'Demo', // Change to 'MarineTraffic' when you get paid plan
        endpoint: null,
        apiKey: null,
        useDemo: true, // Always use demo for now
        demoData: {
            // We'll generate realistic fake data
            updateInterval: 5000, // Update every 5 seconds for realism
            variance: 0.1 // 10% random variation
        }
    }
};

// Feature toggles - Turn on/off based on available keys
const FEATURES = {
    liveShipTracking: true,      // Always ON (using demo data)
    liveOilPrices: false,        // ON when you add Alpha Vantage key
    securityAlerts: false,       // ON when you add NewsAPI key
    weatherData: false,          // ON when you add OpenWeather key
    aiAnalysis: false,           // ON when you want to spend on OpenAI
    economicCalculator: true,    // Always ON (no API needed)
    interactiveMap: true         // Always ON (uses free Mapbox/OSM)
};

// Demo mode settings
const DEMO_CONFIG = {
    enabled: true,
    showBadge: true, // Shows "Demo Mode" badge
    realisticData: true, // Generate realistic-looking data
    messages: {
        demo: '📊 Demo Mode - Upgrade for live data',
        partial: '⚡ Limited API calls remaining',
        full: '🔴 Live Data Active'
    }
};

export { API_CONFIG, FEATURES, DEMO_CONFIG };
