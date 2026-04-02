/* =====================================================
   UNITY ATLAS - Country Page JavaScript
   ===================================================== */

document.addEventListener('DOMContentLoaded', function() {
    initCountryPage();
});

function initCountryPage() {
    // Get country code from URL
    const urlParams = new URLSearchParams(window.location.search);
    const countryCode = urlParams.get('code');
    const highlightRelation = urlParams.get('relation');

    if (!countryCode) {
        showError('No country specified');
        return;
    }

    const country = dataManager.getCountry(countryCode);

    if (!country) {
        showError('Country not found');
        return;
    }

    // Update page
    document.title = `${country.name} | Unity Atlas`;
    document.getElementById('navCountryName').textContent = country.name;

    // Render country page
    renderCountryPage(country, highlightRelation);
}

function showError(message) {
    const main = document.getElementById('countryMain');
    main.innerHTML = `
        <div class="error-state">
            <h2>Error</h2>
            <p>${message}</p>
            <a href="index.html" class="back-link">← Back to all countries</a>
        </div>
    `;
}

function renderCountryPage(country, highlightRelation) {
    const main = document.getElementById('countryMain');
    const relations = dataManager.getCountryRelations(country.code);

    main.innerHTML = `
        <!-- Hero Section -->
        <section class="country-hero">
            <div class="country-hero-bg" style="
                --color-1: ${country.colors?.[0] || '#722F37'};
                --color-2: ${country.colors?.[1] || '#D4AF37'};
                --color-3: ${country.colors?.[2] || country.colors?.[0] || '#722F37'};
            "></div>
            <div class="country-hero-content">
                <div class="country-flag-large">${country.flag}</div>
                <h1 class="country-hero-name">${country.name}</h1>
                <p class="country-hero-official">${country.officialName}</p>
                <div class="country-hero-stats">
                    <div class="hero-stat">
                        <span class="hero-stat-value">${dataManager.formatNumber(country.population)}</span>
                        <span class="hero-stat-label">Population</span>
                    </div>
                    <div class="hero-stat">
                        <span class="hero-stat-value">$${country.gdp}B</span>
                        <span class="hero-stat-label">GDP</span>
                    </div>
                    <div class="hero-stat">
                        <span class="hero-stat-value">${dataManager.formatNumber(country.area)} km²</span>
                        <span class="hero-stat-label">Area</span>
                    </div>
                    <div class="hero-stat">
                        <span class="hero-stat-value">${relations.length}</span>
                        <span class="hero-stat-label">Key Relations</span>
                    </div>
                </div>
            </div>
        </section>

        <!-- Quick Info Bar -->
        <div class="country-quick-info">
            <div class="quick-info-item">
                <span>📍</span>
                <strong>${country.capital}</strong> (Capital)
            </div>
            <div class="quick-info-item">
                <span>🌍</span>
                <strong>${country.subregion}</strong>
            </div>
            <div class="quick-info-item">
                <span>💰</span>
                <strong>${country.currency}</strong>
            </div>
            <div class="quick-info-item">
                <span>🗣️</span>
                <strong>${country.languages?.join(', ') || 'N/A'}</strong>
            </div>
        </div>

        <!-- Main Content -->
        <div class="country-content">
            <!-- Relations Constellation -->
            <section class="content-section-card">
                <div class="section-header">
                    <div class="section-icon">🌐</div>
                    <h2 class="section-title">International Relations</h2>
                </div>
                
                <div class="relations-constellation" id="relationsConstellation">
                    ${renderConstellation(country, relations)}
                </div>

                <div class="relations-grid" id="relationsGrid">
                    ${relations.map(rel => renderRelationCard(rel, highlightRelation)).join('')}
                </div>
            </section>

            <!-- Organizations -->
            <section class="content-section-card">
                <div class="section-header">
                    <div class="section-icon">🏛️</div>
                    <h2 class="section-title">International Organizations</h2>
                </div>
                
                <div class="org-badges">
                    ${(country.organizations || []).map(orgCode => {
                        const org = dataManager.getOrganization(orgCode);
                        if (!org) return '';
                        return `
                            <a href="organizations.html?code=${orgCode}" class="org-badge">
                                <span class="org-badge-logo">${org.logo}</span>
                                <span class="org-badge-name">${org.name}</span>
                                <span class="org-badge-abbr">${org.abbr}</span>
                            </a>
                        `;
                    }).join('')}
                </div>
            </section>

            <!-- Country Info -->
            <section class="content-section-card">
                <div class="section-header">
                    <div class="section-icon">📊</div>
                    <h2 class="section-title">Country Profile</h2>
                </div>
                
                <div class="info-grid">
                    <div class="info-item">
                        <div class="info-label">
                            <span>🏛️</span> Capital
                        </div>
                        <div class="info-value">${country.capital}</div>
                    </div>
                    <div class="info-item">
                        <div class="info-label">
                            <span>👥</span> Population
                        </div>
                        <div class="info-value">${country.population.toLocaleString()}</div>
                    </div>
                    <div class="info-item">
                        <div class="info-label">
                            <span>📐</span> Area
                        </div>
                        <div class="info-value">${country.area.toLocaleString()} km²</div>
                    </div>
                    <div class="info-item">
                        <div class="info-label">
                            <span>💰</span> GDP
                        </div>
                        <div class="info-value">$${country.gdp} Billion</div>
                    </div>
                    <div class="info-item">
                        <div class="info-label">
                            <span>💵</span> Currency
                        </div>
                        <div class="info-value">${country.currency}</div>
                    </div>
                    <div class="info-item">
                        <div class="info-label">
                            <span>🗣️</span> Languages
                        </div>
                        <div class="info-value">${country.languages?.join(', ') || 'N/A'}</div>
                    </div>
                    <div class="info-item">
                        <div class="info-label">
                            <span>🌍</span> Region
                        </div>
                        <div class="info-value">${country.region}</div>
                    </div>
                    <div class="info-item">
                        <div class="info-label">
                            <span>📍</span> Subregion
                        </div>
                        <div class="info-value">${country.subregion}</div>
                    </div>
                </div>
            </section>

            <!-- Utopia Scenario -->
            <section class="content-section-card utopia-section">
                <div class="section-header">
                    <div class="section-icon">✨</div>
                    <h2 class="section-title">What If? A Vision of Peace</h2>
                </div>
                
                <div class="utopia-content">
                    <p class="utopia-intro">
                        Imagine if ${country.name} and all its partner nations resolved differences 
                        and collaborated fully for the benefit of humanity...
                    </p>
                    <div class="utopia-benefits">
                        <div class="utopia-benefit">
                            <span class="utopia-icon">💰</span>
                            <h4>Economic Prosperity</h4>
                            <p>Combined trade potential of $${Math.round(country.gdp * 0.3)}B+ in new economic activity</p>
                        </div>
                        <div class="utopia-benefit">
                            <span class="utopia-icon">🕊️</span>
                            <h4>Peace Dividend</h4>
                            <p>Resources redirected from defense to education, healthcare, and infrastructure</p>
                        </div>
                        <div class="utopia-benefit">
                            <span class="utopia-icon">🌱</span>
                            <h4>Environmental Action</h4>
                            <p>Joint climate initiatives across ${relations.length} partner nations</p>
                        </div>
                        <div class="utopia-benefit">
                            <span class="utopia-icon">🤝</span>
                            <h4>Human Connection</h4>
                            <p>Free movement of people, ideas, and culture across borders</p>
                        </div>
                    </div>
                    <blockquote class="utopia-quote">
                        "Despite religion, caste, country, or continent — we are humans first."
                    </blockquote>
                </div>
            </section>
        </div>

        <!-- Relation Detail Modal -->
        <div class="relation-modal" id="relationModal">
            <div class="relation-modal-content" id="relationModalContent">
                <!-- Populated dynamically -->
            </div>
        </div>
    `;

    // Initialize interactions
    initConstellationInteractions(country);
    initRelationCards(country);
    initShareButton(country);
}

function renderConstellation(country, relations) {
    const orbits = [
        relations.slice(0, 4),   // Inner orbit - closest relations
        relations.slice(4, 10),  // Middle orbit
        relations.slice(10, 16)  // Outer orbit
    ];

    const orbitRadii = [125, 200, 275];
    
    let nodesHtml = '';
    
    orbits.forEach((orbitRelations, orbitIndex) => {
        const radius = orbitRadii[orbitIndex];
        const angleStep = (2 * Math.PI) / Math.max(orbitRelations.length, 1);
        
        orbitRelations.forEach((rel, i) => {
            const angle = angleStep * i - Math.PI / 2; // Start from top
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;
            
            nodesHtml += `
                <div class="constellation-node" 
                     data-code="${rel.country.code}"
                     style="transform: translate(calc(50% + ${x}px - 25px), calc(50% + ${y}px - 25px))">
                    <span class="node-flag">${rel.country.flag}</span>
                    <span class="node-name">${rel.country.name}</span>
                    <div class="node-strength">
                        <div class="node-strength-fill" style="width: ${rel.relationData.strength * 10}%"></div>
                    </div>
                </div>
            `;
        });
    });

    return `
        <div class="constellation-orbit orbit-1"></div>
        <div class="constellation-orbit orbit-2"></div>
        <div class="constellation-orbit orbit-3"></div>
        
        <div class="constellation-center">
            <span class="center-flag">${country.flag}</span>
            <span class="center-name">${country.name}</span>
        </div>
        
        ${nodesHtml}
    `;
}

function renderRelationCard(rel, highlight) {
    const isHighlighted = highlight === rel.country.code;
    
    return `
        <div class="relation-card ${isHighlighted ? 'highlighted' : ''}" data-code="${rel.country.code}">
            <div class="relation-card-header">
                <span class="relation-flag">${rel.country.flag}</span>
                <div class="relation-info">
                    <h4>${rel.country.name}</h4>
                    <span class="relation-type">${rel.relationData.type}</span>
                </div>
            </div>
            <div class="relation-strength-bar">
                <div class="relation-strength-fill" style="width: ${rel.relationData.strength * 10}%"></div>
            </div>
            <div class="relation-stats">
                <span>Strength: ${rel.relationData.strength}/10</span>
                <span>Trade: $${rel.relationData.tradeVolume}B</span>
            </div>
        </div>
    `;
}

function initConstellationInteractions(country) {
    const nodes = document.querySelectorAll('.constellation-node');
    
    nodes.forEach(node => {
        node.addEventListener('click', () => {
            const code = node.dataset.code;
            openRelationModal(country.code, code);
        });
    });
}

function initRelationCards(country) {
    const cards = document.querySelectorAll('.relation-card');
    
    cards.forEach(card => {
        card.addEventListener('click', () => {
            const code = card.dataset.code;
            openRelationModal(country.code, code);
        });
    });
}

function openRelationModal(fromCode, toCode) {
    const modal = document.getElementById('relationModal');
    const content = document.getElementById('relationModalContent');
    
    const fromCountry = dataManager.getCountry(fromCode);
    const toCountry = dataManager.getCountry(toCode);
    const relationData = dataManager.getRelationData(fromCode, toCode);
    
    content.innerHTML = `
        <button class="relation-modal-close" onclick="closeRelationModal()">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M18 6L6 18M6 6l12 12"/>
            </svg>
        </button>
        
        <div class="relation-modal-header">
            <div class="relation-modal-flag">${fromCountry.flag}</div>
            <div class="relation-modal-connector">
                <div class="relation-modal-line"></div>
                <span style="font-size: 0.75rem; color: var(--text-tertiary);">${relationData.type}</span>
            </div>
            <div class="relation-modal-flag">${toCountry.flag}</div>
        </div>
        
        <h2 style="text-align: center; margin-bottom: var(--space-xl);">
            ${fromCountry.name} & ${toCountry.name}
        </h2>
        
        <div class="info-grid">
            <div class="info-item">
                <div class="info-label">
                    <span>📊</span> Relation Strength
                </div>
                <div class="info-value">${relationData.strength}/10</div>
            </div>
            <div class="info-item">
                <div class="info-label">
                    <span>📅</span> Established
                </div>
                <div class="info-value">${relationData.established}</div>
            </div>
            <div class="info-item">
                <div class="info-label">
                    <span>💰</span> Trade Volume
                </div>
                <div class="info-value">$${relationData.tradeVolume}B</div>
            </div>
            <div class="info-item">
                <div class="info-label">
                    <span>🏛️</span> Shared Organizations
                </div>
                <div class="info-value">${relationData.sharedOrganizations.length}</div>
            </div>
        </div>
        
        ${relationData.sharedOrganizations.length > 0 ? `
            <div style="margin-top: var(--space-xl);">
                <h4 style="margin-bottom: var(--space-md);">Shared Organizations</h4>
                <div class="org-badges">
                    ${relationData.sharedOrganizations.map(orgCode => {
                        const org = dataManager.getOrganization(orgCode);
                        return org ? `
                            <div class="org-badge">
                                <span class="org-badge-logo">${org.logo}</span>
                                <span class="org-badge-name">${org.abbr}</span>
                            </div>
                        ` : '';
                    }).join('')}
                </div>
            </div>
        ` : ''}
        
        <div style="margin-top: var(--space-2xl); text-align: center;">
            <a href="country.html?code=${toCode}" class="cta-button">
                View ${toCountry.name} →
            </a>
        </div>
    `;
    
    modal.classList.add('active');
    
    // Close on background click
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeRelationModal();
        }
    });
}

function closeRelationModal() {
    const modal = document.getElementById('relationModal');
    modal.classList.remove('active');
}

function initShareButton(country) {
    const shareBtn = document.getElementById('shareBtn');
    if (!shareBtn) return;
    
    shareBtn.addEventListener('click', async () => {
        const shareData = {
            title: `${country.name} | Unity Atlas`,
            text: `Explore ${country.name}'s international relations on Unity Atlas`,
            url: window.location.href
        };
        
        try {
            if (navigator.share) {
                await navigator.share(shareData);
            } else {
                // Fallback: copy to clipboard
                await navigator.clipboard.writeText(window.location.href);
                alert('Link copied to clipboard!');
            }
        } catch (err) {
            console.error('Share failed:', err);
        }
    });
}

// Close modal on escape
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeRelationModal();
    }
});
