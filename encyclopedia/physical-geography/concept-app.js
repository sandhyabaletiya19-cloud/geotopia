/**
 * UNIVERSAL CONCEPT RENDERER
 * Dynamically loads and renders concept pages based on URL parameters
 * Supports multiple render types: standard, mindmap, timeline, grid
 */

class ConceptRenderer {
  constructor() {
    this.urlParams = new URLSearchParams(window.location.search);
    this.topic = this.urlParams.get('topic');
    this.section = this.urlParams.get('section');
    this.currentStage = 1;
    
    // Load data based on topic
    this.loadTopicData();
  }
  
  // ========== IMAGE URL FIXER - ADD THIS METHOD HERE ==========
  fixImageURL(imageURL) {
    if (!imageURL) return 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80';
    
    // Check if it's the old broken Unsplash Source API
    if (imageURL.includes('source.unsplash.com')) {
      // Extract the size from URL (e.g., 800x600, 1600x900)
      const sizeMatch = imageURL.match(/\/(\d+)x(\d+)\//);
      const width = sizeMatch ? sizeMatch[1] : '800';
      
      // Extract search terms
      const searchMatch = imageURL.match(/\?(.+)$/);
      const searchTerms = searchMatch ? searchMatch[1].toLowerCase() : '';
      
      // Map search terms to working Unsplash image IDs
      const imageMap = {
        // Mountains general
        'mountain': 'photo-1506905925346-21bda4d32df4',
        'peak': 'photo-1464822759023-fed622ff2c3b',
        'summit': 'photo-1519681393784-d120267933ba',
        'landscape': 'photo-1506905925346-21bda4d32df4',
        'range': 'photo-1464822759023-fed622ff2c3b',
        
        // Specific ranges
        'himalayas': 'photo-1506905925346-21bda4d32df4',
        'everest': 'photo-1589802829985-817e51171b92',
        'andes': 'photo-1519681393784-d120267933ba',
        'alps': 'photo-1531366936337-7c912a4589a7',
        'matterhorn': 'photo-1531366936337-7c912a4589a7',
        'rocky': 'photo-1464822759023-fed622ff2c3b',
        'fuji': 'photo-1490806843957-31f4c9a91c65',
        'kilimanjaro': 'photo-1609198092458-38a293c7ac4b',
        'rainier': 'photo-1434394354979-a235cd36269d',
        'denali': 'photo-1551632811-561732d1e306',
        'k2': 'photo-1585409677983-0f6c41ca9c3b',
        'karakoram': 'photo-1585409677983-0f6c41ca9c3b',
        'atlas': 'photo-1489493887464-892be6d1daae',
        'caucasus': 'photo-1519681393784-d120267933ba',
        'ural': 'photo-1519681393784-d120267933ba',
        'appalachian': 'photo-1508739773434-c26b3d09e071',
        'sierra': 'photo-1426604966848-d7adac402bff',
        'teton': 'photo-1508193638397-1c4234db14d8',
        'yosemite': 'photo-1426604966848-d7adac402bff',
        'patagonia': 'photo-1519681393784-d120267933ba',
        'dolomites': 'photo-1531366936337-7c912a4589a7',
        'pyrenees': 'photo-1531366936337-7c912a4589a7',
        'carpathian': 'photo-1519681393784-d120267933ba',
        'alaska': 'photo-1551632811-561732d1e306',
        'nepal': 'photo-1506905925346-21bda4d32df4',
        'tibet': 'photo-1506905925346-21bda4d32df4',
        'swiss': 'photo-1531366936337-7c912a4589a7',
        'norway': 'photo-1519681393784-d120267933ba',
        'new zealand': 'photo-1469521669194-babb45599def',
        'cook': 'photo-1469521669194-babb45599def',
        'australian': 'photo-1494548162494-384bba4ab999',
        'drakensberg': 'photo-1489493887464-892be6d1daae',
        'ethiopia': 'photo-1489493887464-892be6d1daae',
        'rwenzori': 'photo-1489493887464-892be6d1daae',
        'hindu kush': 'photo-1585409677983-0f6c41ca9c3b',
        'tian shan': 'photo-1585409677983-0f6c41ca9c3b',
        'altai': 'photo-1519681393784-d120267933ba',
        'kunlun': 'photo-1585409677983-0f6c41ca9c3b',
        'pamir': 'photo-1585409677983-0f6c41ca9c3b',
        'zagros': 'photo-1489493887464-892be6d1daae',
        'elburz': 'photo-1519681393784-d120267933ba',
        'cascade': 'photo-1434394354979-a235cd36269d',
        'olympic': 'photo-1434394354979-a235cd36269d',
        'brooks': 'photo-1551632811-561732d1e306',
        'transantarctic': 'photo-1551632811-561732d1e306',
        'antarctica': 'photo-1551632811-561732d1e306',
        
        // Formation/geology
        'tectonic': 'photo-1509316785289-025f5b846b35',
        'geology': 'photo-1509316785289-025f5b846b35',
        'rocks': 'photo-1473448912268-2022ce9509d8',
        'rock': 'photo-1473448912268-2022ce9509d8',
        'collision': 'photo-1509316785289-025f5b846b35',
        'folded': 'photo-1473448912268-2022ce9509d8',
        'fault': 'photo-1509316785289-025f5b846b35',
        'sediment': 'photo-1473448912268-2022ce9509d8',
        
        // Volcanic
        'volcano': 'photo-1562114808-b4b33cf60f4f',
        'volcanic': 'photo-1562114808-b4b33cf60f4f',
        'vesuvius': 'photo-1562114808-b4b33cf60f4f',
        'etna': 'photo-1562114808-b4b33cf60f4f',
        'lava': 'photo-1562114808-b4b33cf60f4f',
        'krakatoa': 'photo-1562114808-b4b33cf60f4f',
        'st helens': 'photo-1562114808-b4b33cf60f4f',
        'popocatepetl': 'photo-1562114808-b4b33cf60f4f',
        'cotopaxi': 'photo-1562114808-b4b33cf60f4f',
        'mauna': 'photo-1562114808-b4b33cf60f4f',
        'hawaii': 'photo-1562114808-b4b33cf60f4f',
        
        // Water features
        'ocean': 'photo-1507525428034-b723cf961d3e',
        'sea': 'photo-1507525428034-b723cf961d3e',
        'ancient ocean': 'photo-1507525428034-b723cf961d3e',
        'glacier': 'photo-1551632811-561732d1e306',
        'ice': 'photo-1551632811-561732d1e306',
        'snow': 'photo-1551632811-561732d1e306',
        
        // Block mountains
        'block': 'photo-1426604966848-d7adac402bff',
        'nevada': 'photo-1426604966848-d7adac402bff',
        'fault block': 'photo-1426604966848-d7adac402bff',
        'black forest': 'photo-1519681393784-d120267933ba',
        'vosges': 'photo-1519681393784-d120267933ba',
        'harz': 'photo-1519681393784-d120267933ba',
        
        // Dome mountains
        'dome': 'photo-1494548162494-384bba4ab999',
        'black hills': 'photo-1494548162494-384bba4ab999',
        'adirondack': 'photo-1508739773434-c26b3d09e071',
        'half dome': 'photo-1426604966848-d7adac402bff',
        'uluru': 'photo-1494548162494-384bba4ab999',
        'sugarloaf': 'photo-1494548162494-384bba4ab999',
        'stone mountain': 'photo-1494548162494-384bba4ab999',
        
        // Plateau
        'plateau': 'photo-1509316785289-025f5b846b35',
        'colorado plateau': 'photo-1509316785289-025f5b846b35',
        'grand canyon': 'photo-1509316785289-025f5b846b35',
        'tepui': 'photo-1509316785289-025f5b846b35',
        'mesa': 'photo-1509316785289-025f5b846b35',
        'butte': 'photo-1509316785289-025f5b846b35',
        'deccan': 'photo-1489493887464-892be6d1daae',
        'tibet': 'photo-1506905925346-21bda4d32df4',
        
        // Default fallback
        'default': 'photo-1506905925346-21bda4d32df4'
      };
      
      // Find matching image
      let photoId = imageMap['default'];
      for (const [term, id] of Object.entries(imageMap)) {
        if (searchTerms.includes(term)) {
          photoId = id;
          break;
        }
      }
      
      // Return working Unsplash URL
      return `https://images.unsplash.com/${photoId}?w=${width}&q=80`;
    }
    
    // If URL is already correct format, return as is
    return imageURL;
  }
  // ========== END OF IMAGE URL FIXER ==========
  
  loadTopicData() {
    // Map of all physical geography topics to their data objects
    const topicDataMap = {
        'mountains': typeof mountainsData !== 'undefined' ? mountainsData : null,
        'volcanoes': typeof volcanoesData !== 'undefined' ? volcanoesData : null,
        'rivers': typeof riversData !== 'undefined' ? riversData : null,
        'waterfalls': typeof waterfallsData !== 'undefined' ? waterfallsData : null,
        'deserts': typeof desertsData !== 'undefined' ? desertsData : null,
        'forests': typeof forestsData !== 'undefined' ? forestsData : null,
        'coral-reefs': typeof coralReefsData !== 'undefined' ? coralReefsData : null,
        'oceans': typeof oceansData !== 'undefined' ? oceansData : null,
        'lakes': typeof lakesData !== 'undefined' ? lakesData : null,
        'islands': typeof islandsData !== 'undefined' ? islandsData : null,
    };

    // Check if topic exists and has data
    if (this.topic && topicDataMap[this.topic]) {
        this.data = topicDataMap[this.topic];
        this.init();
    } else {
        this.show404();
    }
}
  init() {
    if (!this.data || !this.data.sections[this.section]) {
      this.show404();
      return;
    }
    
    this.sectionData = this.data.sections[this.section];
    
    // Apply theme
    document.body.className = `concept-page ${this.data.meta.theme}`;
    
    // Update page title
    document.title = `${this.sectionData.title} | ${this.data.meta.name} | Geotopia`;
    
    // Render components
    this.renderHero();
    this.renderContent();
    this.renderNavigation();
    this.attachEventListeners();
    
    // Hide preloader
    setTimeout(() => {
      document.getElementById('preloader')?.classList.add('hidden');
    }, 300);
  }
  
  renderHero() {
    // Fix the hero image URL
    const heroImage = this.fixImageURL(this.sectionData.hero.image);
    
    const heroHTML = `
      <div class="hero-background">
        <img src="${heroImage}" alt="${this.sectionData.title}" class="hero-image">
        <div class="hero-overlay"></div>
      </div>
      <div class="hero-content">
        <div class="breadcrumb">
          <a href="index.html">📚 Physical Geography</a>
          <span class="separator">›</span>
          <a href="concept.html?topic=${this.topic}&section=definition">${this.data.meta.icon} ${this.data.meta.name}</a>
          <span class="separator">›</span>
          <span>${this.sectionData.title}</span>
        </div>
        <h1 class="hero-title">
          <span class="topic-icon">${this.data.meta.icon}</span>
          ${this.sectionData.title}
        </h1>
        <p class="hero-tagline">${this.sectionData.hero.tagline}</p>
      </div>
    `;
    
    document.getElementById('heroSection').innerHTML = heroHTML;
  }
  
  renderContent() {
    let contentHTML = '';
    
    // Render based on renderAs type
    const renderType = this.sectionData.renderAs || 'standard';
    
    switch(renderType) {
      case 'mindmap':
        contentHTML = this.renderMindmap();
        break;
      case 'timeline':
        contentHTML = this.renderTimeline();
        break;
      case 'grid':
        contentHTML = this.renderGrid();
        break;
      default:
        contentHTML = this.renderStandard();
    }
    
    document.getElementById('mainContent').innerHTML = contentHTML;
  }
  
  renderStandard() {
    const content = this.sectionData.content;
    
    let html = `
      <section class="content-section">
        <div class="container">
          <p class="section-intro">${content.introduction}</p>
          
          <div class="key-points-grid">
            ${content.keyPoints.map(point => `
              <div class="key-point-card">
                <div class="point-icon">${point.icon}</div>
                <div class="point-content">
                  <h3 class="point-label">${point.label}</h3>
                  <p class="point-text">${point.text}</p>
                  <p class="point-detail">${point.detail}</p>
                </div>
              </div>
            `).join('')}
          </div>
          
          ${content.comparison ? this.renderComparison(content.comparison) : ''}
          
          ${content.funFacts ? `
            <div class="fun-facts-section">
              <h3 class="fun-facts-title">🎯 Quick Facts</h3>
              <div class="fun-facts-grid">
                ${content.funFacts.map(fact => `
                  <div class="fun-fact">${fact}</div>
                `).join('')}
              </div>
            </div>
          ` : ''}
        </div>
      </section>
    `;
    
    return html;
  }
  
  renderComparison(comparison) {
    return `
      <div class="comparison-section">
        <h3 class="comparison-title">${comparison.title}</h3>
        <div class="comparison-table-wrapper">
          <table class="comparison-table">
            <thead>
              <tr>
                <th>Feature</th>
                <th>🏔️ Mountain</th>
                <th>🏞️ Hill</th>
                <th>🏜️ Plateau</th>
              </tr>
            </thead>
            <tbody>
              ${comparison.features.map(row => `
                <tr>
                  <td class="feature-cell">${row.feature}</td>
                  <td>${row.mountain}</td>
                  <td>${row.hill}</td>
                  <td>${row.plateau}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
    `;
  }
  
  renderMindmap() {
    const branches = this.sectionData.branches;
    
    return `
      <section class="mindmap-section">
        <div class="container">
          <div class="mindmap-intro">
            <p class="section-intro">Mountains form through different geological processes. Explore each type below:</p>
          </div>
          
          <div class="mindmap-branches">
            ${branches.map((branch, index) => this.renderBranch(branch, index)).join('')}
          </div>
          
          ${this.sectionData.comparisonTable ? this.renderComparisonTable(this.sectionData.comparisonTable) : ''}
        </div>
      </section>
    `;
  }
  
  renderBranch(branch, index) {
    return `
      <div class="branch" data-branch-id="${branch.id}" style="--branch-color: ${branch.color}">
        <div class="branch-header" role="button" tabindex="0">
          <div class="branch-title-group">
            <span class="branch-icon">${branch.icon}</span>
            <h3 class="branch-title">${branch.name}</h3>
          </div>
          <button class="expand-btn" aria-label="Expand ${branch.name}" aria-expanded="false">
            <span class="expand-icon">+</span>
          </button>
        </div>
        
        <div class="branch-content">
          <div class="branch-definition">
            <h4>📖 Definition</h4>
            <p>${branch.definition}</p>
          </div>
          
          <div class="formation-process">
            <h4>🔨 Formation Process</h4>
            <div class="formation-steps">
              ${branch.formation.steps.map((step, idx) => `
                <div class="formation-step">
                  <div class="step-header">
                    <span class="step-icon">${step.icon}</span>
                    <span class="step-number">Step ${step.step}</span>
                  </div>
                  <p class="step-text">${step.text}</p>
                </div>
                ${idx < branch.formation.steps.length - 1 ? '<div class="step-arrow">↓</div>' : ''}
              `).join('')}
            </div>
          </div>
          
          <div class="branch-characteristics">
            <h4>📋 Characteristics</h4>
            <ul class="characteristics-list">
              ${branch.characteristics.map(char => `<li>${char}</li>`).join('')}
            </ul>
          </div>
          
          <div class="branch-examples">
            <h4>🌍 Examples Around the World</h4>
            <div class="examples-grid">
              ${branch.examples.map(example => `
                <a href="${example.link}" class="example-card">
                  <div class="example-image" style="background-image: url('${this.fixImageURL(example.image)}')">
                    <div class="example-overlay"></div>
                  </div>
                  <div class="example-info">
                    <h5 class="example-name">${example.name}</h5>
                    <p class="example-location">📍 ${example.location}</p>
                    <p class="example-detail">⏳ ${example.age || example.status || ''}</p>
                    <p class="example-peak">🏔️ ${example.highestPeak || example.height || ''}</p>
                  </div>
                  <div class="example-hover">
                    <span class="hover-text">Explore Details →</span>
                  </div>
                </a>
              `).join('')}
            </div>
          </div>
        </div>
      </div>
    `;
  }
  
  renderTimeline() {
    const stages = this.sectionData.stages;
    
    return `
      <section class="timeline-section">
        <div class="container">
          <p class="section-intro">${this.sectionData.introduction}</p>
          
          <div class="timeline-viewer" id="timelineViewer">
            ${stages.map((stage, index) => `
              <div class="timeline-stage ${index === 0 ? 'active' : ''}" data-stage="${stage.stage}">
                <div class="stage-visual">
                  <div class="stage-image-wrapper">
                    <img src="${this.fixImageURL(stage.image)}" alt="${stage.title}" class="stage-image" loading="lazy">
                    <div class="stage-overlay"></div>
                  </div>
                </div>
                
                <div class="stage-content">
                  <div class="stage-header">
                    <span class="stage-number">Stage ${stage.stage} / ${stages.length}</span>
                    <h3 class="stage-title">${stage.title}</h3>
                    <span class="stage-timeframe">⏳ ${stage.timeframe}</span>
                  </div>
                  
                  <div class="stage-description">
                    <h4>Key Events:</h4>
                    <ul class="stage-list">
                      ${stage.description.map(desc => `
                        <li>${desc}</li>
                      `).join('')}
                    </ul>
                  </div>
                  
                  <div class="geological-process">
                    <h4>🔬 Geological Process:</h4>
                    <p>${stage.geologicalProcess}</p>
                  </div>
                </div>
              </div>
            `).join('')}
          </div>
          
          <div class="timeline-controls">
            <button id="prevStage" class="timeline-btn" disabled>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M12 16L6 10L12 4"/>
              </svg>
              <span>Previous</span>
            </button>
            
            <div class="stage-indicators">
              ${stages.map((stage, index) => `
                <button class="stage-dot ${index === 0 ? 'active' : ''}" 
                        data-stage="${stage.stage}"
                        aria-label="Go to stage ${stage.stage}">
                  <span class="dot-label">${stage.stage}</span>
                </button>
              `).join('')}
            </div>
            
            <button id="nextStage" class="timeline-btn">
              <span>Next</span>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M8 4L14 10L8 16"/>
              </svg>
            </button>
          </div>
          
          ${this.sectionData.terminology ? this.renderTerminology(this.sectionData.terminology) : ''}
        </div>
      </section>
    `;
  }
  
  renderTerminology(terminology) {
    return `
      <div class="terminology-section">
        <h3 class="terminology-title">${terminology.title}</h3>
        <div class="terms-grid">
          ${terminology.terms.map(term => `
            <div class="term-card">
              <div class="term-header">
                <h4 class="term-name">${term.term}</h4>
                <span class="term-pronunciation">${term.pronunciation}</span>
              </div>
              <p class="term-definition">${term.definition}</p>
              <div class="term-example">
                <strong>Example:</strong> ${term.example}
              </div>
              <div class="related-terms">
                <strong>Related:</strong>
                ${term.relatedTerms.map(related => `
                  <span class="related-tag">${related}</span>
                `).join('')}
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }
  
  renderGrid() {
    return `
      <section class="examples-section">
        <div class="container">
          <p class="section-intro">${this.sectionData.introduction}</p>
          
          <div class="examples-grid-featured">
            ${this.sectionData.featuredRanges.map(range => `
              <a href="${range.link}" class="range-card">
                <div class="range-image" style="background-image: url('${this.fixImageURL(range.image)}')">
                  <div class="range-overlay"></div>
                  <span class="range-icon">${range.icon}</span>
                </div>
                <div class="range-info">
                  <h3 class="range-name">${range.name}</h3>
                  <p class="range-meta">
                    <span class="meta-item">📍 ${range.continent}</span>
                    <span class="meta-item">🏔️ ${range.type}</span>
                  </p>
                  <div class="range-stats">
                    <div class="stat">
                      <span class="stat-label">Highest Peak</span>
                      <span class="stat-value">${range.highestPeak}</span>
                    </div>
                    <div class="stat">
                      <span class="stat-label">Length</span>
                      <span class="stat-value">${range.length}</span>
                    </div>
                  </div>
                  <div class="fun-fact-badge">💡 ${range.funFact}</div>
                </div>
                <div class="range-hover">
                  <span class="hover-text">Explore Full Profile →</span>
                </div>
              </a>
            `).join('')}
          </div>
          
          <div class="view-all-section">
            <a href="${this.sectionData.linkToExisting}" class="btn-view-all">
              View All ${this.data.meta.name} 
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M8 4L14 10L8 16"/>
              </svg>
            </a>
          </div>
          
          ${this.sectionData.upscRelevance ? this.renderUPSC(this.sectionData.upscRelevance) : ''}
        </div>
      </section>
    `;
  }
  
  renderUPSC(upsc) {
    return `
      <div class="upsc-section">
        <div class="upsc-header">
          <div class="upsc-badge">🎯 UPSC CSE</div>
          <h3>${upsc.title}</h3>
        </div>
        
        <div class="upsc-grid">
          <div class="upsc-box">
            <h4>📌 Important Topics for Exam:</h4>
            <ul class="upsc-list">
              ${upsc.topics.map(topic => `<li>${topic}</li>`).join('')}
            </ul>
          </div>
          
          <div class="upsc-box">
            <h4>❓ Sample Mains Questions:</h4>
            <ul class="upsc-list questions">
              ${upsc.sampleQuestions.map(q => `<li>${typeof q === 'object' ? q.question : q}</li>`).join('')}
            </ul>
          </div>
        </div>
      </div>
    `;
  }
  
  renderNavigation() {
    const sections = Object.keys(this.data.sections);
    
    const navHTML = `
      <div class="nav-container">
        <div class="nav-title">
          <span class="nav-icon">${this.data.meta.icon}</span>
          <span class="nav-text">${this.data.meta.name} Topics:</span>
        </div>
        <div class="nav-links">
          ${sections.map(sec => `
            <a href="concept.html?topic=${this.topic}&section=${sec}" 
               class="nav-link ${sec === this.section ? 'active' : ''}">
              ${this.data.sections[sec].title}
            </a>
          `).join('')}
        </div>
      </div>
    `;
    
    document.getElementById('conceptNav').innerHTML = navHTML;
  }
  
  renderComparisonTable(table) {
    return `
      <div class="comparison-table-section">
        <h3 class="table-title">${table.title}</h3>
        <div class="table-responsive">
          <table class="styled-table">
            <thead>
              <tr>
                ${table.headers.map(header => `<th>${header}</th>`).join('')}
              </tr>
            </thead>
            <tbody>
              ${table.rows.map(row => `
                <tr>
                  ${row.map((cell, index) => `
                    <td ${index === 0 ? 'class="first-col"' : ''}>${cell}</td>
                  `).join('')}
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
    `;
  }
  
  attachEventListeners() {
    // Mindmap branch expansion
    document.querySelectorAll('.branch-header').forEach(header => {
      header.addEventListener('click', (e) => {
        const branch = e.currentTarget.closest('.branch');
        const btn = branch.querySelector('.expand-btn');
        const icon = btn.querySelector('.expand-icon');
        const isExpanded = branch.classList.contains('expanded');
        
        branch.classList.toggle('expanded');
        icon.textContent = isExpanded ? '+' : '−';
        btn.setAttribute('aria-expanded', !isExpanded);
      });
      
      // Keyboard accessibility
      header.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          header.click();
        }
      });
    });
    
    // Timeline navigation
    const prevBtn = document.getElementById('prevStage');
    const nextBtn = document.getElementById('nextStage');
    
    if (prevBtn && nextBtn) {
      this.setupTimelineNavigation(prevBtn, nextBtn);
    }
    
    // Smooth scroll for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(anchor.getAttribute('href'));
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
  }
  
  setupTimelineNavigation(prevBtn, nextBtn) {
    const totalStages = this.sectionData.stages.length;
    
    const updateStage = (newStage) => {
      // Remove active class from all stages and dots
      document.querySelectorAll('.timeline-stage, .stage-dot').forEach(el => {
        el.classList.remove('active');
      });
      
      // Add active class to current stage and dot
      const activeStage = document.querySelector(`.timeline-stage[data-stage="${newStage}"]`);
      const activeDot = document.querySelector(`.stage-dot[data-stage="${newStage}"]`);
      
      if (activeStage) {
        activeStage.classList.add('active');
        activeStage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
      if (activeDot) activeDot.classList.add('active');
      
      this.currentStage = newStage;
      
      // Update button states
      prevBtn.disabled = this.currentStage === 1;
      nextBtn.disabled = this.currentStage === totalStages;
    };
    
    prevBtn.addEventListener('click', () => {
      if (this.currentStage > 1) {
        updateStage(this.currentStage - 1);
      }
    });
    
    nextBtn.addEventListener('click', () => {
      if (this.currentStage < totalStages) {
        updateStage(this.currentStage + 1);
      }
    });
    
    // Stage dots click handlers
    document.querySelectorAll('.stage-dot').forEach(dot => {
      dot.addEventListener('click', (e) => {
        const stage = parseInt(e.currentTarget.dataset.stage);
        updateStage(stage);
      });
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft' && !prevBtn.disabled) {
        prevBtn.click();
      } else if (e.key === 'ArrowRight' && !nextBtn.disabled) {
        nextBtn.click();
      }
    });
  }
  
  show404() {
    document.body.innerHTML = `
      <div class="error-404">
        <div class="error-content">
          <h1 class="error-title">404</h1>
          <p class="error-message">Topic or section not found</p>
          <p class="error-detail">
            ${this.topic ? `Topic: <strong>${this.topic}</strong>` : 'No topic specified'}<br>
            ${this.section ? `Section: <strong>${this.section}</strong>` : 'No section specified'}
          </p>
          <a href="index.html" class="btn-back">
            ← Back to Physical Geography
          </a>
        </div>
      </div>
    `;
    
    // Add basic 404 styles
    const style = document.createElement('style');
    style.textContent = `
      .error-404 {
        min-height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        text-align: center;
        padding: 2rem;
      }
      .error-content {
        max-width: 500px;
      }
      .error-title {
        font-size: 8rem;
        font-weight: 800;
        margin: 0;
        line-height: 1;
      }
      .error-message {
        font-size: 1.5rem;
        margin: 1rem 0;
      }
      .error-detail {
        opacity: 0.9;
        margin: 1.5rem 0;
      }
      .btn-back {
        display: inline-block;
        margin-top: 2rem;
        padding: 0.75rem 1.5rem;
        background: white;
        color: #667eea;
        text-decoration: none;
        border-radius: 0.5rem;
        font-weight: 600;
        transition: transform 0.3s;
      }
      .btn-back:hover {
        transform: translateY(-2px);
      }
    `;
    document.head.appendChild(style);
  }
}

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
  new ConceptRenderer();
});
