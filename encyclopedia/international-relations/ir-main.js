/* ====================================
   GEOTOPIA IR - MAIN APPLICATION LOGIC
   ==================================== */

// Global state
let currentCountry = null;
let currentPartner = null;

// ==========================================
// COUNTRY SELECTION
// ==========================================

function selectMainCountry(countryCode) {
  if (!countryCode) return;
  
  currentCountry = countryCode;
  const country = IR_DATA.countries[countryCode];
  
  if (!country) {
    console.error('Country not found:', countryCode);
    return;
  }
  
  // Hide hero, show relationship view
  document.getElementById('hero-section').style.display = 'none';
  document.getElementById('network-section').style.display = 'none';
  document.getElementById('relationship-view').classList.add('active');
  
  // Update header
  updateCountryHeader(countryCode, country);
  
  // Create mini network
  IR_VIZ.createCountryNetwork(countryCode);
  
  // Populate partner dropdown
  populatePartnerDropdown(countryCode);
  
  // Update stats
  updateRelationshipStats(countryCode);
  
  // Scroll to top
  window.scrollTo({top: 0, behavior: 'smooth'});
}

function updateCountryHeader(code, country) {
  document.getElementById('main-country-flag').src = `https://flagcdn.com/w320/${code.toLowerCase()}.png`;
  document.getElementById('main-country-flag').alt = country.name;
  document.getElementById('main-country-name').textContent = country.name;
  document.getElementById('main-country-info').textContent = 
    `${country.capital} • ${country.population} • ${country.region}`;
  document.getElementById('country-network-title').textContent = country.name + "'s";
}

function populatePartnerDropdown(countryCode) {
  const select = document.getElementById('partner-select');
  select.innerHTML = '<option value="">Choose partner country...</option>';
  
  // Get all countries except the selected one
  const partners = [];
  for (let code in IR_DATA.countries) {
    if (code !== countryCode) {
      partners.push({code, name: IR_DATA.countries[code].name});
    }
  }
  
  // Sort alphabetically
  partners.sort((a, b) => a.name.localeCompare(b.name));
  
  // Add to dropdown
  partners.forEach(partner => {
    const option = document.createElement('option');
    option.value = partner.code;
    option.textContent = `${IR_DATA.countries[partner.code].flag} ${partner.name}`;
    select.appendChild(option);
  });
}

function updateRelationshipStats(countryCode) {
  const relationships = IR_VIZ.getCountryRelationships(countryCode);
  
  document.getElementById('total-relationships').textContent = relationships.length;
  
  const strongAllies = relationships.filter(r => r.strength >= 8).length;
  document.getElementById('strong-allies').textContent = strongAllies;
  
  const conflicts = relationships.filter(r => r.strength < 4).length;
  document.getElementById('conflicts').textContent = conflicts;
}

// ==========================================
// BILATERAL RELATIONSHIP LOADING
// ==========================================

function loadBilateralRelation(partnerCode) {
  if (!currentCountry || !partnerCode) return;
  
  currentPartner = partnerCode;
  
  // Get relationship data
  const relKey = IR_DATA.getBilateralKey(currentCountry, partnerCode);
  const relationship = IR_DATA.relationships[relKey];
  
  if (!relationship) {
    showNoDataMessage(currentCountry, partnerCode);
    return;
  }
  
  // Show bilateral details section
  document.getElementById('bilateral-details').style.display = 'block';
  
  // Update bilateral header
  updateBilateralHeader(relationship);
  
  // Load all tabs
  loadOverviewTab(relationship);
  loadHistoricalTab(relationship);
  loadPoliticalTab(relationship);
  loadEconomicTab(relationship);
  loadDefenseTab(relationship);
  loadCulturalTab(relationship);
  loadConnectivityTab(relationship);
  loadMultilateralTab(relationship);
  loadChallengesTab(relationship);
  loadImaginedPeaceTab(relationship);
  
  // Scroll to bilateral section
  document.getElementById('bilateral-details').scrollIntoView({behavior: 'smooth'});
}

function updateBilateralHeader(rel) {
  const countryA = IR_DATA.countries[rel.countryA];
  const countryB = IR_DATA.countries[rel.countryB];
  
  // Flags
  document.getElementById('country-a-flag').src = `https://flagcdn.com/w320/${rel.countryA.toLowerCase()}.png`;
  document.getElementById('country-b-flag').src = `https://flagcdn.com/w320/${rel.countryB.toLowerCase()}.png`;
  
  // Names
  document.getElementById('country-a-name').textContent = countryA.name;
  document.getElementById('country-b-name').textContent = countryB.name;
  
  // Strength
  const strengthScore = document.getElementById('strength-score');
  strengthScore.textContent = rel.strength.toFixed(1);
  
  const strengthCircle = document.getElementById('strength-circle');
  const color = IR_VIZ.getLinkColor(rel.strength);
  strengthCircle.style.background = `linear-gradient(135deg, ${color}, ${color}dd)`;
  
  // Type
  const typeText = rel.type.map(t => t.replace(/-/g, ' ').toUpperCase()).join(' • ');
  document.getElementById('relationship-type').textContent = typeText;
}

function showNoDataMessage(code1, code2) {
  const details = document.getElementById('bilateral-details');
  details.style.display = 'block';
  details.innerHTML = `
    <div style="padding: 4rem; text-align: center; background: rgba(255,255,255,0.05); border-radius: 20px; margin: 2rem 0;">
      <div style="font-size: 4rem; margin-bottom: 1rem;">📊</div>
      <h3 style="color: #fbbf24; margin-bottom: 1rem;">Detailed Data Coming Soon</h3>
      <p style="opacity: 0.8;">
        We're working on compiling comprehensive relationship data for 
        ${IR_DATA.countries[code1].name} ↔ ${IR_DATA.countries[code2].name}.
      </p>
      <p style="margin-top: 1rem; font-size: 0.9rem; opacity: 0.6;">
        Currently available: ${Object.keys(IR_DATA.relationships).length} detailed bilateral relationships.<br>
        Total to be added: 38,416 relationships.
      </p>
    </div>
  `;
}

// ==========================================
// TAB CONTENT LOADERS
// ==========================================

function loadOverviewTab(rel) {
  const container = document.getElementById('overview-content');
  if (!rel.overview) {
    container.innerHTML = '<p>Overview data not available.</p>';
    return;
  }
  
  container.innerHTML = `
    <div class="info-list">
      <li><strong>Current Status:</strong> ${rel.overview.status}</li>
      <li><strong>Relations Established:</strong> ${rel.overview.established}</li>
      <li><strong>Diplomatic Presence:</strong> ${rel.overview.embassy}</li>
      <li><strong>Key Fact:</strong> ${rel.overview.keyFact}</li>
    </div>
  `;
}

function loadHistoricalTab(rel) {
  const container = document.getElementById('historical-content');
  if (!rel.historical || !rel.historical.timeline) {
    container.innerHTML = '<p>Historical data not available.</p>';
    return;
  }
  
  container.innerHTML = '<div id="timeline-viz"></div>';
  IR_VIZ.createTimelineVisualization(rel.historical.timeline);
}

function loadPoliticalTab(rel) {
  const container = document.getElementById('political-content');
  if (!rel.political) {
    container.innerHTML = '<p>Political data not available.</p>';
    return;
  }
  
  let html = `<h3 style="margin-bottom: 1.5rem;">Current Status: ${rel.political.currentStatus}</h3>`;
  
  if (rel.political.majorIssues) {
    html += '<div id="issues-heatmap"></div>';
  }
  
  if (rel.political.dialogueMechanisms) {
    html += '<h4 style="margin: 2rem 0 1rem; color: #667eea;">Dialogue Mechanisms</h4><ul class="info-list">';
    rel.political.dialogueMechanisms.forEach(mech => {
      html += `<li><strong>${mech.name}:</strong> ${mech.status}</li>`;
    });
    html += '</ul>';
  }
  
  container.innerHTML = html;
  
  if (rel.political.majorIssues) {
    IR_VIZ.createIssuesHeatmap(rel.political.majorIssues);
  }
}

function loadEconomicTab(rel) {
  const container = document.getElementById('economic-content');
  if (!rel.economic) {
    container.innerHTML = '<p>Economic data not available.</p>';
    return;
  }
  
  let html = '<div class="viz-grid">';
  
  // Trade chart
  if (rel.economic.trade) {
    html += `
      <div class="viz-card">
        <h4>Trade Volume Trends</h4>
        <canvas id="trade-chart" height="250"></canvas>
      </div>
    `;
  }
  
  // Exports pie chart
  if (rel.economic.topExportsFromIndia || rel.economic.topUSExports) {
    const exports = rel.economic.topExportsFromIndia || rel.economic.topUSExports;
    html += `
      <div class="viz-card">
        <h4>Export Composition</h4>
        <canvas id="exports-chart" height="250"></canvas>
      </div>
    `;
  }
  
  html += '</div>';
  
  // Trade balance info
  if (rel.economic.tradeBalance) {
    html += '<h4 style="margin: 2rem 0 1rem;">Trade Balance (2026)</h4>';
    html += '<ul class="info-list">';
    for (let key in rel.economic.tradeBalance) {
      html += `<li><strong>${key.replace(/([A-Z])/g, ' $1')}:</strong> ${rel.economic.tradeBalance[key]} ${rel.economic.tradeBalance.unit || ''}</li>`;
    }
    html += '</ul>';
  }
  
  // Trade potential
  if (rel.economic.tradePotential) {
    html += `
      <div style="margin-top: 2rem; padding: 1.5rem; background: rgba(251, 191, 36, 0.1); border-left: 4px solid #fbbf24; border-radius: 8px;">
        <h4 style="color: #fbbf24; margin-bottom: 1rem;">💡 Untapped Potential</h4>
        <p><strong>Estimated Potential:</strong> $${rel.economic.tradePotential.estimated}B</p>
        <p><strong>Current Actual:</strong> $${rel.economic.tradePotential.actual}B</p>
        <p><strong>Gap:</strong> $${rel.economic.tradePotential.gap}B (${((rel.economic.tradePotential.gap / rel.economic.tradePotential.estimated) * 100).toFixed(0)}% unrealized)</p>
      </div>
    `;
  }
  
  container.innerHTML = html;
  
  // Create charts
  if (rel.economic.trade) {
    setTimeout(() => IR_VIZ.createTradeChart(rel.economic), 100);
  }
  if (rel.economic.topExportsFromIndia || rel.economic.topUSExports) {
    const exports = rel.economic.topExportsFromIndia || rel.economic.topUSExports;
    setTimeout(() => IR_VIZ.createExportPieChart(exports), 100);
  }
}

function loadDefenseTab(rel) {
  const container = document.getElementById('defense-content');
  if (!rel.defense) {
    container.innerHTML = '<p>Defense data not available.</p>';
    return;
  }
  
  let html = '';
  
  // Military comparison
  if (rel.defense.militaryComparison) {
    html += `
      <div class="viz-card">
        <h4>Military Strength Comparison</h4>
        <canvas id="military-chart" height="300"></canvas>
      </div>
    `;
  }
  
  // Border info
  if (rel.defense.border) {
    html += '<h4 style="margin: 2rem 0 1rem;">Border Details</h4>';
    html += '<ul class="info-list">';
    for (let key in rel.defense.border) {
      if (key !== 'unit') {
        html += `<li><strong>${key.replace(/([A-Z])/g, ' $1')}:</strong> ${rel.defense.border[key]}</li>`;
      }
    }
    html += '</ul>';
  }
  
  // Ceasefire violations
  if (rel.defense.ceasefireViolations) {
    html += `
      <div class="viz-card" style="margin-top: 2rem;">
        <h4>Ceasefire Violations Timeline</h4>
        <canvas id="ceasefire-chart" height="250"></canvas>
      </div>
    `;
  }
  
  // Major wars
  if (rel.defense.majorWars) {
    html += '<h4 style="margin: 2rem 0 1rem;">Historical Conflicts</h4>';
    html += '<div class="timeline">';
    rel.defense.majorWars.forEach(war => {
      html += `
        <div class="timeline-item">
          <div class="year">${war.year}</div>
          <div class="event">${war.name}</div>
          <div class="impact">Duration: ${war.duration} | Outcome: ${war.outcome}</div>
          ${war.casualties ? `<div style="margin-top: 0.5rem; font-size: 0.9rem; opacity: 0.8;">Casualties: ${JSON.stringify(war.casualties)}</div>` : ''}
        </div>
      `;
    });
    html += '</div>';
  }
  
  container.innerHTML = html;
  
  // Create charts
  if (rel.defense.militaryComparison) {
    setTimeout(() => IR_VIZ.createMilitaryComparison(rel.defense.militaryComparison), 100);
  }
  if (rel.defense.ceasefireViolations) {
    setTimeout(() => IR_VIZ.createCeasefireChart(rel.defense.ceasefireViolations), 100);
  }
}

function loadCulturalTab(rel) {
  const container = document.getElementById('cultural-content');
  if (!rel.cultural) {
    container.innerHTML = '<p>Cultural data not available.</p>';
    return;
  }
  
  let html = '';
  
  // Shared heritage
  if (rel.cultural.sharedHeritage) {
    html += '<h4 style="color: #667eea; margin-bottom: 1rem;">🎭 Shared Heritage</h4>';
    html += '<ul class="info-list">';
    rel.cultural.sharedHeritage.forEach(item => {
      html += `<li>${item}</li>`;
    });
    html += '</ul>';
  }
  
  // People movement
  if (rel.cultural.peopleMovement) {
    html += '<h4 style="margin: 2rem 0 1rem;">👥 People-to-People Exchange</h4>';
    html += '<ul class="info-list">';
    for (let key in rel.cultural.peopleMovement) {
      if (key !== 'unit') {
        html += `<li><strong>${key.replace(/([A-Z])/g, ' $1')}:</strong> ${rel.cultural.peopleMovement[key]}</li>`;
      }
    }
    html += '</ul>';
  }
  
  // Sports rivalry
  if (rel.cultural.sportsRivalry) {
    html += '<h4 style="margin: 2rem 0 1rem;">🏏 Sports Rivalry</h4>';
    html += '<div style="padding: 1.5rem; background: rgba(102, 126, 234, 0.1); border-radius: 15px;">';
    html += `<p><strong>${rel.cultural.sportsRivalry.cricket ? 'Cricket Stats:' : 'Main Sport:'}</strong></p>`;
    if (rel.cultural.sportsRivalry.cricket) {
      html += `<ul style="margin-top: 1rem; list-style: none;">`;
      html += `<li>ODIs: India ${rel.cultural.sportsRivalry.cricket.odis.india} - Pakistan ${rel.cultural.sportsRivalry.cricket.odis.pakistan}</li>`;
      html += `<li>T20Is: India ${rel.cultural.sportsRivalry.cricket.t20is.india} - Pakistan ${rel.cultural.sportsRivalry.cricket.t20is.pakistan}</li>`;
      html += `<li>Tests: India ${rel.cultural.sportsRivalry.cricket.tests.india} - Pakistan ${rel.cultural.sportsRivalry.cricket.tests.pakistan}</li>`;
      html += `</ul>`;
    }
    html += '</div>';
  }
  
  container.innerHTML = html;
}

function loadConnectivityTab(rel) {
  const container = document.getElementById('connectivity-content');
  if (!rel.connectivity) {
    container.innerHTML = '<p>Connectivity data not available.</p>';
    return;
  }
  
  let html = '<div class="viz-grid">';
  
  const categories = ['land', 'rail', 'air', 'energy'];
  
  categories.forEach(cat => {
    if (rel.connectivity[cat]) {
      html += `
        <div class="viz-card">
          <h4>${cat.toUpperCase()} Connectivity</h4>
          <pre style="background: rgba(0,0,0,0.3); padding: 1rem; border-radius: 8px; font-size: 0.85rem; overflow-x: auto;">${JSON.stringify(rel.connectivity[cat], null, 2)}</pre>
        </div>
      `;
    }
  });
  
  html += '</div>';
  
  // Water diplomacy special section
  if (rel.waterDiplomacy) {
    html += '<div id="water-flow" style="margin-top: 2rem;"></div>';
  }
  
  container.innerHTML = html;
  
  if (rel.waterDiplomacy) {
    setTimeout(() => IR_VIZ.createWaterFlowDiagram(rel.waterDiplomacy), 100);
  }
}

function loadMultilateralTab(rel) {
  const container = document.getElementById('multilateral-content');
  if (!rel.multilateral) {
    container.innerHTML = '<p>Multilateral data not available.</p>';
    return;
  }
  
  let html = '<h3 style="margin-bottom: 1.5rem;">Shared Memberships</h3>';
  
  for (let org in rel.multilateral) {
    if (typeof rel.multilateral[org] === 'object') {
      html += `
        <div style="margin: 1.5rem 0; padding: 1.5rem; background: rgba(255,255,255,0.05); border-radius: 15px; border-left: 4px solid #667eea;">
          <h4 style="color: #667eea; margin-bottom: 1rem;">${org}</h4>
          <ul class="info-list">
      `;
      
      for (let key in rel.multilateral[org]) {
        if (typeof rel.multilateral[org][key] !== 'object') {
          html += `<li><strong>${key}:</strong> ${rel.multilateral[org][key]}</li>`;
        }
      }
      
      html += '</ul></div>';
    }
  }
  
  container.innerHTML = html;
}

function loadChallengesTab(rel) {
  const container = document.getElementById('challenges-content');
  if (!rel.challenges && !rel.opportunities) {
    container.innerHTML = '<p>Challenges data not available.</p>';
    return;
  }
  
  let html = '';
  
  if (rel.challenges) {
    html += '<h3 style="color: #f87171; margin-bottom: 1.5rem;">⚠️ Major Challenges</h3>';
    rel.challenges.forEach((challenge, i) => {
      html += `
        <div style="margin: 1rem 0; padding: 1.5rem; background: rgba(248, 113, 113, 0.1); border-left: 4px solid #f87171; border-radius: 10px;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
            <strong style="font-size: 1.1rem;">${i + 1}. ${challenge.challenge}</strong>
            ${challenge.severity ? `<span style="background: #f87171; padding: 0.25rem 0.75rem; border-radius: 20px; font-size: 0.85rem;">${challenge.severity}/10</span>` : ''}
          </div>
          ${challenge.description ? `<p style="margin-top: 0.75rem; opacity: 0.9;">${challenge.description}</p>` : ''}
          ${challenge.solutions ? `<p style="margin-top: 0.75rem; font-size: 0.9rem;"><strong>Solutions:</strong> ${Array.isArray(challenge.solutions) ? challenge.solutions.join(', ') : challenge.solutions}</p>` : ''}
        </div>
      `;
    });
  }
  
  if (rel.opportunities) {
    html += '<h3 style="color: #4ade80; margin: 3rem 0 1.5rem;">💡 Opportunities</h3>';
    rel.opportunities.forEach((opp, i) => {
      html += `
        <div style="margin: 1rem 0; padding: 1.5rem; background: rgba(74, 222, 128, 0.1); border-left: 4px solid #4ade80; border-radius: 10px;">
          <strong style="font-size: 1.1rem;">${i + 1}. ${opp.opportunity}</strong>
          ${opp.potential ? `<p style="margin-top: 0.5rem;"><strong>Potential:</strong> ${opp.potential}</p>` : ''}
          ${opp.benefits ? `<p style="margin-top: 0.5rem;"><strong>Benefits:</strong> ${opp.benefits}</p>` : ''}
          ${opp.requirement ? `<p style="margin-top: 0.5rem; font-size: 0.9rem; opacity: 0.8;"><strong>Requirement:</strong> ${opp.requirement}</p>` : ''}
        </div>
      `;
    });
  }
  
  container.innerHTML = html;
}

function loadImaginedPeaceTab(rel) {
  const container = document.getElementById('imagined-content');
  if (!rel.imaginedPeace) {
    container.innerHTML = '<p>Imagined peace scenario not available.</p>';
    return;
  }
  
  const peace = rel.imaginedPeace;
  
  let html = `
    <div class="imagined-peace">
      <h3>${peace.title}</h3>
      ${peace.subtitle ? `<p style="text-align: center; font-size: 1.2rem; opacity: 0.9; margin-bottom: 2rem;">${peace.subtitle}</p>` : ''}
  `;
  
  // Economic impact
  if (peace.economicImpact) {
    html += `
      <div class="peace-grid">
        <div class="peace-card">
          <h4>💰 Economic Impact</h4>
          ${peace.economicImpact.combinedGDP ? `<div class="metric">$${peace.economicImpact.combinedGDP}T</div>` : ''}
          <p>${peace.economicImpact.description || ''}</p>
        </div>
    `;
  }
  
  // Geopolitical
  if (peace.geopoliticalPower || peace.geopolitical) {
    const geo = peace.geopoliticalPower || peace.geopolitical;
    html += `
        <div class="peace-card">
          <h4>🌍 Geopolitical Power</h4>
          ${geo.UNSCseat || geo.unsc ? `<p><strong>UNSC:</strong> ${geo.UNSCseat || geo.unsc}</p>` : ''}
          ${geo.militaryRank ? `<p><strong>Military Rank:</strong> #${geo.militaryRank}</p>` : ''}
          ${geo.globalInfluence || geo.influence ? `<p>${geo.globalInfluence || geo.influence}</p>` : ''}
        </div>
    `;
  }
  
  // Infrastructure
  if (peace.infrastructure) {
    html += `
        <div class="peace-card">
          <h4>🚄 Infrastructure</h4>
          <ul style="list-style: none; padding: 0;">
            ${peace.infrastructure.railways ? `<li>🚂 ${peace.infrastructure.railways}</li>` : ''}
            ${peace.infrastructure.highways ? `<li>🛣️ ${peace.infrastructure.highways}</li>` : ''}
            ${peace.infrastructure.ports ? `<li>⚓ ${peace.infrastructure.ports}</li>` : ''}
          </ul>
        </div>
    `;
  }
  
  // Cultural
  if (peace.culturalRenaissance || peace.cultural) {
    const cult = peace.culturalRenaissance || peace.cultural;
    html += `
        <div class="peace-card">
          <h4>🎭 Cultural Renaissance</h4>
          <p>${cult.description || cult.cinema || JSON.stringify(cult)}</p>
        </div>
    `;
  }
  
  html += '</div>'; // Close peace-grid
  
  // Main message
  if (peace.message) {
    html += `
      <div class="peace-message">
        ${peace.message.split('\n').map(line => line.trim()).filter(line => line).map(line => `<p>${line}</p>`).join('')}
      </div>
    `;
  }
  
  html += '</div>'; // Close imagined-peace
  
  container.innerHTML = html;
}

// ==========================================
// TAB SWITCHING
// ==========================================

document.addEventListener('DOMContentLoaded', function() {
  const tabs = document.querySelectorAll('.tab');
  
  tabs.forEach(tab => {
    tab.addEventListener('click', function() {
      const targetTab = this.dataset.tab;
      
      // Remove active from all tabs
      tabs.forEach(t => t.classList.remove('active'));
      document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
      });
      
      // Add active to clicked tab
      this.classList.add('active');
      const targetContent = document.getElementById(targetTab + '-content');
      if (targetContent) {
        targetContent.classList.add('active');
      }
    });
  });
});

// ==========================================
// NAVIGATION
// ==========================================

function closeRelationshipView() {
  document.getElementById('relationship-view').classList.remove('active');
  document.getElementById('hero-section').style.display = 'flex';
  document.getElementById('network-section').style.display = 'block';
  
  // Reset selections
  currentCountry = null;
  currentPartner = null;
  document.getElementById('main-country-select').value = '';
  document.getElementById('bilateral-details').style.display = 'none';
  
  window.scrollTo({top: 0, behavior: 'smooth'});
}

// ==========================================
// NETWORK CONTROLS
// ==========================================

function resetNetwork() {
  IR_VIZ.resetNetwork();
}

function toggleLabels() {
  IR_VIZ.toggleLabels();
}

function filterByStrength(value) {
  document.getElementById('strength-value').textContent = value;
  IR_VIZ.filterByStrength(parseFloat(value));
}

// ==========================================
// ERROR REPORTING
// ==========================================

function reportError() {
  const message = `Report a data error:\n\nPlease email: geotopia@example.com\n\nInclude:\n- Country pair\n- Section with error\n- Correct information\n- Source\n\nThank you for helping us maintain accuracy!`;
  alert(message);
}

// ==========================================
// EXPORT FUNCTIONS
// ==========================================

if (typeof window !== 'undefined') {
  window.selectMainCountry = selectMainCountry;
  window.loadBilateralRelation = loadBilateralRelation;
  window.closeRelationshipView = closeRelationshipView;
  window.resetNetwork = resetNetwork;
  window.toggleLabels = toggleLabels;
  window.filterByStrength = filterByStrength;
  window.reportError = reportError;
}
