// /dhara/dhara-knowledge.js
window.DharaKnowledge = (function() {
    
    // Core Country Data (Fallback)
    var countries = {
        "india": { capital: "New Delhi", fact: "The world's largest democracy.", fox: "Strategic and ancient." },
        "france": { capital: "Paris", fact: "The largest country in the EU.", fox: "Cultured and sharp." }
    };

    // 100% FREE Knowledge Fetchers
    async function getWikiSummary(topic) {
        try {
            const url = `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(topic)}`;
            const response = await fetch(url);
            const data = await response.json();
            return data.extract || "I couldn't find sufficient data on that. Try being more specific.";
        } catch (e) {
            return "Knowledge is vast, but my connection to it just flickered. Ask again.";
        }
    }

    async function getCountryData(country) {
        try {
            const url = `https://restcountries.com/v3.1/name/${country}?fullText=true`;
            const response = await fetch(url);
            const data = await response.json();
            const c = data[0];
            return {
                name: c.name.common,
                capital: c.capital[0],
                population: c.population.toLocaleString(),
                region: c.region,
                fact: `It's located in ${c.subregion} and uses the ${Object.values(c.currencies)[0].name}.`
            };
        } catch (e) { return null; }
    }

    return {
        getWiki: getWikiSummary,
        getCountry: getCountryData,
        COUNTRIES: countries
    };
})();
console.log('🦊 Dhara connected to World Knowledge (Wikipedia + REST Countries)');
