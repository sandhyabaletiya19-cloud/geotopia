// geotopia/encyclopedia/strategic-locations/config.js

const API_CONFIG = {
    // Free tier APIs (upgrade to paid for production)
    shipTracking: {
        provider: 'AISHub', // Free alternative to MarineTraffic
        endpoint: 'https://data.aishub.net/ws.php',
        // Get free key at: http://www.aishub.net/
        apiKey: 'YOUR_AISHUB_KEY_HERE'
    },
    
    oilPrices: {
        provider: 'Alpha Vantage',
        endpoint: 'https://www.alphavantage.co/query',
        // Get free key at: https://www.alphavantage.co/support/#api-key
        apiKey: 'YOUR_ALPHAVANTAGE_KEY_HERE'
    },
    
    weather: {
        provider: 'OpenWeatherMap',
        endpoint: 'https://api.openweathermap.org/data/2.5/weather',
        // Get free key at: https://openweathermap.org/api
        apiKey: 'YOUR_OPENWEATHER_KEY_HERE'
    },
    
    news: {
        provider: 'NewsAPI',
        endpoint: 'https://newsapi.org/v2/everything',
        // Get free key at: https://newsapi.org/
        apiKey: 'YOUR_NEWSAPI_KEY_HERE'
    },
    
    ai: {
        provider: 'OpenAI',
        endpoint: 'https://api.openai.com/v1/chat/completions',
        // Get key at: https://platform.openai.com/api-keys
        apiKey: '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',
        model: 'gpt-4'
    },
    
    map: {
        provider: 'Mapbox',
        // Get free key at: https://account.mapbox.com/
        apiKey: 'YOUR_MAPBOX_KEY_HERE'
    }
};

// Rate limiting & caching
const CACHE_DURATION = {
    ships: 5 * 60 * 1000,        // 5 minutes
    prices: 15 * 60 * 1000,      // 15 minutes
    weather: 30 * 60 * 1000,     // 30 minutes
    news: 60 * 60 * 1000         // 1 hour
};

export default API_CONFIG;
