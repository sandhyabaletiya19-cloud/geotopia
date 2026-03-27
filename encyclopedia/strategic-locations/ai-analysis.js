// geotopia/encyclopedia/strategic-locations/ai-analysis.js

class AIAnalysisEngine {
    constructor() {
        this.analysisCache = new Map();
    }

    // === AI-POWERED SUPPLY CHAIN ANALYSIS ===
    async analyzeSupplyChain(commodity) {
        const cacheKey = `supply_chain_${commodity}`;
        
        if (this.analysisCache.has(cacheKey)) {
            return this.analysisCache.get(cacheKey);
        }

        const prompt = `As a geopolitical analyst, identify ALL strategic chokepoints critical to the global ${commodity} supply chain. For each chokepoint, provide:
1. Why it's critical for ${commodity}
2. Which countries depend on it most
3. What percentage of global ${commodity} trade passes through
4. Alternative routes if this closes
5. Risk assessment (1-10)

Format as JSON array.`;

        try {
            const response = await fetch(API_CONFIG.ai.endpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${API_CONFIG.ai.apiKey}`
                },
                body: JSON.stringify({
                    model: API_CONFIG.ai.model,
                    messages: [
                        {
                            role: 'system',
                            content: 'You are a world-class geopolitical and supply chain analyst specializing in strategic chokepoints and global trade routes.'
                        },
                        {
                            role: 'user',
                            content: prompt
                        }
                    ],
                    temperature: 0.3
                })
            });

            const data = await response.json();
            const analysis = JSON.parse(data.choices[0].message.content);
            
            // Enhance with our database
            const enhanced = this.enhanceWithLocalData(analysis, commodity);
            
            this.analysisCache.set(cacheKey, enhanced);
            return enhanced;
            
        } catch (error) {
            console.error('AI Analysis error:', error);
            return this.getTemplateAnalysis(commodity);
        }
    }

    enhanceWithLocalData(aiAnalysis, commodity) {
        return aiAnalysis.map(item => {
            // Match with our database
            const matchedLocation = this.findMatchingLocation(item.chokepoint);
            
            if (matchedLocation) {
                return {
                    ...item,
                    liveData: {
                        currentShips: 'Loading...',
                        recentAlerts: 'Loading...',
                        economicValue: matchedLocation.stats.annualTrade
                    },
                    interactiveMap: matchedLocation.mapLink,
                    detailPage: matchedLocation.detailPage
                };
            }
            
            return item;
        });
    }

    findMatchingLocation(name) {
        const allLocations = [
            ...strategicLocations.straits,
            ...strategicLocations.canals,
            ...strategicLocations.passes
        ];
        
        return allLocations.find(loc => 
            loc.name.toLowerCase().includes(name.toLowerCase()) ||
            name.toLowerCase().includes(loc.name.toLowerCase())
        );
    }

    // === SCENARIO ANALYSIS ===
    async generateScenarioReport(scenario) {
        const { event, location, duration, factors } = scenario;
        
        const prompt = `Analyze this geopolitical scenario:

EVENT: ${event}
LOCATION: ${location}
DURATION: ${duration} days
ADDITIONAL FACTORS: ${factors.join(', ')}

Provide a comprehensive analysis including:
1. Immediate economic impact (first 24-48 hours)
2. Short-term consequences (1-2 weeks)
3. Long-term implications (months)
4. Countries most affected (ranked)
5. Global supply chain disruptions
6. Likely geopolitical responses
7. Alternative routes/solutions
8. Historical precedents
9. Probability assessment

Be specific with numbers where possible. Format as detailed report.`;

        try {
            const response = await fetch(API_CONFIG.ai.endpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${API_CONFIG.ai.apiKey}`
                },
                body: JSON.stringify({
                    model: API_CONFIG.ai.model,
                    messages: [
                        {
                            role: 'system',
                            content: 'You are a senior geopolitical analyst at a top think tank, known for precise scenario planning and risk assessment.'
                        },
                        {
                            role: 'user',
                            content: prompt
                        }
                    ],
                    temperature: 0.4,
                    max_tokens: 2000
                })
            });

            const data = await response.json();
            return this.formatScenarioReport(data.choices[0].message.content, scenario);
            
        } catch (error) {
            console.error('Scenario analysis error:', error);
            return this.getTemplateScenario(scenario);
        }
    }

    formatScenarioReport(aiResponse, scenario) {
        return {
            scenario,
            analysis: aiResponse,
            generatedAt: new Date(),
            confidence: this.assessConfidence(scenario),
            relatedLocations: this.findRelatedLocations(scenario.location),
            downloadPDF: () => this.generatePDF(aiResponse, scenario)
        };
    }

    assessConfidence(scenario) {
        // Confidence based on data availability and historical precedents
        let confidence = 70;
        
        if (this.findMatchingLocation(scenario.location)) confidence += 15;
        if (scenario.duration <= 30) confidence += 10;
        if (this.hasHistoricalPrecedent(scenario)) confidence += 5;
        
        return Math.min(confidence, 95);
    }

    hasHistoricalPrecedent(scenario) {
        const location = this.findMatchingLocation(scenario.location);
        return location?.historicalEvents?.length > 0;
    }

    findRelatedLocations(locationName) {
        const location = this.findMatchingLocation(locationName);
        if (!location) return [];
        
        // Find locations in same region or affecting same countries
        const allLocations = [
            ...strategicLocations.straits,
            ...strategicLocations.canals
        ];
        
        return allLocations.filter(loc => 
            loc.region === location.region ||
            Object.keys(loc.criticalFor).some(country => 
                Object.keys(location.criticalFor).includes(country)
            )
        );
    }

    // === COMPARATIVE ANALYSIS ===
    async compareLocations(locationIds) {
        const locations = locationIds.map(id => this.findLocationById(id)).filter(Boolean);
        
        if (locations.length < 2) {
            throw new Error('Need at least 2 locations to compare');
        }

        const comparison = {
            locations: locations.map(loc => loc.name),
            metrics: {
                importance: this.compareMetric(locations, 'importance'),
                dailyShips: this.compareMetric(locations, loc => loc.stats.dailyShips),
                economicValue: this.compareMetric(locations, loc => loc.stats.annualTrade),
                alternatives: this.compareAlternatives(locations),
                riskLevel: this.compareRisks(locations)
            },
            aiInsights: await this.getAIComparison(locations)
        };

        return comparison;
    }

    findLocationById(id) {
        return [...strategicLocations.straits, ...strategicLocations.canals, ...strategicLocations.passes]
            .find(loc => loc.id === id);
    }

    compareMetric(locations, metricGetter) {
        return locations.map(loc => ({
            location: loc.name,
            value: typeof metricGetter === 'string' ? loc[metricGetter] : metricGetter(loc)
        })).sort((a, b) => b.value - a.value);
    }

    compareAlternatives(locations) {
        return locations.map(loc => ({
            location: loc.name,
            hasAlternatives: loc.alternatives?.length > 0,
            alternatives: loc.alternatives || [],
            viability: this.assessAlternativeViability(loc.alternatives)
        }));
    }

    assessAlternativeViability(alternatives) {
        if (!alternatives || alternatives.length === 0) return 'None';
        if (alternatives.every(alt => alt.includes('no') || alt.includes('not built'))) return 'Low';
        return 'Medium';
    }

    compareRisks(locations) {
        return locations.map(loc => ({
            location: loc.name,
            threats: loc.threats || [],
            riskScore: this.calculateRiskScore(loc),
            riskLevel: this.getRiskLevel(this.calculateRiskScore(loc))
        })).sort((a, b) => b.riskScore - a.riskScore);
    }

    calculateRiskScore(location) {
        let score = 0;
        
        // More importance = higher risk
        score += location.importance * 0.5;
        
        // More threats = higher risk
        score += (location.threats?.length || 0) * 5;
        
        // No alternatives = higher risk
        if (!location.alternatives || location.alternatives.length === 0) score += 20;
        
        // Historical incidents = higher risk
        score += (location.historicalEvents?.length || 0) * 2;
        
        return Math.min(score, 100);
    }

    getRiskLevel(score) {
        if (score >= 80) return 'Critical';
        if (score >= 60) return 'High';
        if (score >= 40) return 'Medium';
        return 'Low';
    }

    async getAIComparison(locations) {
        const prompt = `Compare these strategic chokepoints and provide insights on which is more critical for global trade and why:

${locations.map((loc, i) => `${i + 1}. ${loc.name} - ${loc.type} in ${loc.region}`).join('\n')}

Provide:
1. Ranking by strategic importance
2. Key differentiators
3. Which closure would be most catastrophic
4. Interdependencies between them`;

        try {
            const response = await fetch(API_CONFIG.ai.endpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${API_CONFIG.ai.apiKey}`
                },
                body: JSON.stringify({
                    model: API_CONFIG.ai.model,
                    messages: [
                        { role: 'system', content: 'You are a strategic analyst specializing in global chokepoints.' },
                        { role: 'user', content: prompt }
                    ],
                    temperature: 0.3
                })
            });

            const data = await response.json();
            return data.choices[0].message.content;
            
        } catch (error) {
            return 'AI comparison unavailable - using local data only.';
        }
    }

    // === TEMPLATE RESPONSES (Fallbacks) ===
    getTemplateAnalysis(commodity) {
        const templates = {
            'lithium': [
                {
                    chokepoint: 'Strait of Malacca',
                    reason: '70% of lithium shipments from Australia to battery factories in China/Japan/Korea',
                    risk: 9,
                    countries: ['China', 'Japan', 'South Korea'],
                    percentage: 70
                },
                {
                    chokepoint: 'Panama Canal',
                    reason: 'Lithium from South America (Chile, Argentina) to Asia and Europe',
                    risk: 7,
                    countries: ['Chile', 'Argentina', 'China'],
                    percentage: 25
                }
            ],
            'oil': [
                {
                    chokepoint: 'Strait of Hormuz',
                    reason: '21% of global petroleum passes through',
                    risk: 10,
                    countries: ['Saudi Arabia', 'Iran', 'UAE', 'Iraq', 'Kuwait'],
                    percentage: 21
                },
                {
                    chokepoint: 'Strait of Malacca',
                    reason: 'Primary route for Middle East oil to Asia',
                    risk: 9,
                    countries: ['China', 'Japan', 'India', 'South Korea'],
                    percentage: 16
                }
            ]
        };
        
        return templates[commodity.toLowerCase()] || [];
    }

    getTemplateScenario(scenario) {
        return {
            scenario,
            analysis: `Based on historical data, a ${scenario.duration}-day closure of ${scenario.location} would result in significant global impact. Alternative routes would add substantial costs and time.`,
            generatedAt: new Date(),
            confidence: 65,
            relatedLocations: []
        };
    }

    // === PDF GENERATION ===
    generatePDF(content, scenario) {
        // This would integrate with a PDF library like jsPDF
        console.log('Generating PDF report for:', scenario);
        alert('PDF generation feature - would create downloadable report with charts and full analysis');
    }
}

const aiAnalysisEngine = new AIAnalysisEngine();
export default aiAnalysisEngine;
