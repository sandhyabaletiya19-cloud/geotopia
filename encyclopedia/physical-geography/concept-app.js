/**
 * UNIVERSAL CONCEPT RENDERER
 * Complete version with all image mappings
 * Just copy-paste - no modifications needed
 */

class ConceptRenderer {
  constructor() {
    this.urlParams = new URLSearchParams(window.location.search);
    this.topic = this.urlParams.get('topic');
    this.section = this.urlParams.get('section');
    this.currentStage = 1;
    this.loadTopicData();
  }

  // ==================== IMAGE URL FIXER ====================
  fixImageURL(imageURL) {
    if (!imageURL) {
      return 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80';
    }
    
    // If already a working Unsplash URL, return as-is
    if (imageURL.includes('images.unsplash.com')) {
      return imageURL;
    }
    
    // Fix broken source.unsplash.com URLs
    if (imageURL.includes('source.unsplash.com')) {
      const sizeMatch = imageURL.match(/\/(\d+)x(\d+)/);
      const width = sizeMatch ? sizeMatch[1] : '800';
      const searchMatch = imageURL.match(/\?(.+)$/);
      const searchTerms = searchMatch ? searchMatch[1].toLowerCase() : '';
      
      // COMPLETE IMAGE MAPPING FOR ALL TOPICS
      const imageMap = {
        // ========== MOUNTAINS ==========
        'mountain': 'photo-1506905925346-21bda4d32df4',
        'mountains': 'photo-1506905925346-21bda4d32df4',
        'peak': 'photo-1464822759023-fed622ff2c3b',
        'summit': 'photo-1519681393784-d120267933ba',
        'range': 'photo-1464822759023-fed622ff2c3b',
        'himalayas': 'photo-1506905925346-21bda4d32df4',
        'himalaya': 'photo-1506905925346-21bda4d32df4',
        'everest': 'photo-1589802829985-817e51171b92',
        'andes': 'photo-1519681393784-d120267933ba',
        'alps': 'photo-1531366936337-7c912a4589a7',
        'rocky': 'photo-1464822759023-fed622ff2c3b',
        'rockies': 'photo-1464822759023-fed622ff2c3b',
        'fuji': 'photo-1490806843957-31f4c9a91c65',
        'kilimanjaro': 'photo-1609198092458-38a293c7ac4b',
        'denali': 'photo-1551632811-561732d1e306',
        'k2': 'photo-1585409677983-0f6c41ca9c3b',
        'karakoram': 'photo-1585409677983-0f6c41ca9c3b',
        'appalachian': 'photo-1508739773434-c26b3d09e071',
        'sierra': 'photo-1426604966848-d7adac402bff',
        'cascade': 'photo-1434394354979-a235cd36269d',
        'tectonic': 'photo-1509316785289-025f5b846b35',
        'geology': 'photo-1509316785289-025f5b846b35',
        'fold': 'photo-1506905925346-21bda4d32df4',
        'folded': 'photo-1506905925346-21bda4d32df4',
        'block': 'photo-1426604966848-d7adac402bff',
        'fault': 'photo-1509316785289-025f5b846b35',
        'dome': 'photo-1494548162494-384bba4ab999',
        'plateau': 'photo-1509316785289-025f5b846b35',
        'erosion': 'photo-1473448912268-2022ce9509d8',
        'sediment': 'photo-1473448912268-2022ce9509d8',
        'collision': 'photo-1509316785289-025f5b846b35',
        'convergent': 'photo-1509316785289-025f5b846b35',
        'divergent': 'photo-1509316785289-025f5b846b35',
        'subduction': 'photo-1509316785289-025f5b846b35',
        'orogeny': 'photo-1506905925346-21bda4d32df4',
        'orogenic': 'photo-1506905925346-21bda4d32df4',
        'uplift': 'photo-1506905925346-21bda4d32df4',

        // ========== VOLCANOES ==========
        'volcano': 'photo-1490806843957-31f4c9a91c65',
        'volcanoes': 'photo-1490806843957-31f4c9a91c65',
        'volcanic': 'photo-1490806843957-31f4c9a91c65',
        'eruption': 'photo-1490806843957-31f4c9a91c65',
        'erupt': 'photo-1490806843957-31f4c9a91c65',
        'lava': 'photo-1490806843957-31f4c9a91c65',
        'magma': 'photo-1490806843957-31f4c9a91c65',
        'crater': 'photo-1490806843957-31f4c9a91c65',
        'caldera': 'photo-1490806843957-31f4c9a91c65',
        'vesuvius': 'photo-1562114808-b4b33cf60f4f',
        'etna': 'photo-1562114808-b4b33cf60f4f',
        'krakatoa': 'photo-1490806843957-31f4c9a91c65',
        'kilauea': 'photo-1490806843957-31f4c9a91c65',
        'mauna': 'photo-1490806843957-31f4c9a91c65',
        'helens': 'photo-1490806843957-31f4c9a91c65',
        'st helens': 'photo-1490806843957-31f4c9a91c65',
        'yellowstone': 'photo-1490806843957-31f4c9a91c65',
        'cotopaxi': 'photo-1490806843957-31f4c9a91c65',
        'popocatepetl': 'photo-1490806843957-31f4c9a91c65',
        'pinatubo': 'photo-1490806843957-31f4c9a91c65',
        'stromboli': 'photo-1562114808-b4b33cf60f4f',
        'ring of fire': 'photo-1490806843957-31f4c9a91c65',
        'hotspot': 'photo-1490806843957-31f4c9a91c65',
        'shield': 'photo-1490806843957-31f4c9a91c65',
        'composite': 'photo-1490806843957-31f4c9a91c65',
        'stratovolcano': 'photo-1490806843957-31f4c9a91c65',
        'cinder': 'photo-1490806843957-31f4c9a91c65',
        'ash': 'photo-1490806843957-31f4c9a91c65',
        'pyroclastic': 'photo-1490806843957-31f4c9a91c65',
        'dormant': 'photo-1490806843957-31f4c9a91c65',
        'active': 'photo-1490806843957-31f4c9a91c65',
        'extinct': 'photo-1490806843957-31f4c9a91c65',

        // ========== RIVERS ==========
        'river': 'photo-1501785888041-af3ef285b470',
        'rivers': 'photo-1501785888041-af3ef285b470',
        'stream': 'photo-1501785888041-af3ef285b470',
        'tributary': 'photo-1501785888041-af3ef285b470',
        'delta': 'photo-1501785888041-af3ef285b470',
        'estuary': 'photo-1501785888041-af3ef285b470',
        'meander': 'photo-1501785888041-af3ef285b470',
        'rapids': 'photo-1501785888041-af3ef285b470',
        'gorge': 'photo-1501785888041-af3ef285b470',
        'canyon': 'photo-1509316785289-025f5b846b35',
        'nile': 'photo-1501785888041-af3ef285b470',
        'amazon': 'photo-1501785888041-af3ef285b470',
        'yangtze': 'photo-1501785888041-af3ef285b470',
        'mississippi': 'photo-1501785888041-af3ef285b470',
        'ganges': 'photo-1501785888041-af3ef285b470',
        'ganga': 'photo-1501785888041-af3ef285b470',
        'danube': 'photo-1501785888041-af3ef285b470',
        'rhine': 'photo-1501785888041-af3ef285b470',
        'congo': 'photo-1501785888041-af3ef285b470',
        'mekong': 'photo-1501785888041-af3ef285b470',
        'indus': 'photo-1501785888041-af3ef285b470',
        'brahmaputra': 'photo-1501785888041-af3ef285b470',
        'thames': 'photo-1501785888041-af3ef285b470',
        'seine': 'photo-1501785888041-af3ef285b470',
        'volga': 'photo-1501785888041-af3ef285b470',
        'drainage': 'photo-1501785888041-af3ef285b470',
        'basin': 'photo-1501785888041-af3ef285b470',
        'floodplain': 'photo-1501785888041-af3ef285b470',
        'oxbow': 'photo-1501785888041-af3ef285b470',
        'alluvial': 'photo-1501785888041-af3ef285b470',
        'freshwater': 'photo-1501785888041-af3ef285b470',

        // ========== WATERFALLS ==========
        'waterfall': 'photo-1432405972618-c60b0225b8f9',
        'waterfalls': 'photo-1432405972618-c60b0225b8f9',
        'falls': 'photo-1432405972618-c60b0225b8f9',
        'niagara': 'photo-1432405972618-c60b0225b8f9',
        'victoria falls': 'photo-1432405972618-c60b0225b8f9',
        'angel falls': 'photo-1432405972618-c60b0225b8f9',
        'angel': 'photo-1432405972618-c60b0225b8f9',
        'iguazu': 'photo-1432405972618-c60b0225b8f9',
        'iguacu': 'photo-1432405972618-c60b0225b8f9',
        'plunge': 'photo-1432405972618-c60b0225b8f9',
        'horsetail': 'photo-1432405972618-c60b0225b8f9',
        'cataract': 'photo-1432405972618-c60b0225b8f9',
        'cascading': 'photo-1432405972618-c60b0225b8f9',

        // ========== DESERTS ==========
        'desert': 'photo-1509316785289-025f5b846b35',
        'deserts': 'photo-1509316785289-025f5b846b35',
        'sahara': 'photo-1509316785289-025f5b846b35',
        'gobi': 'photo-1509316785289-025f5b846b35',
        'arabian': 'photo-1509316785289-025f5b846b35',
        'kalahari': 'photo-1509316785289-025f5b846b35',
        'atacama': 'photo-1509316785289-025f5b846b35',
        'mojave': 'photo-1509316785289-025f5b846b35',
        'sonoran': 'photo-1509316785289-025f5b846b35',
        'thar': 'photo-1509316785289-025f5b846b35',
        'namib': 'photo-1509316785289-025f5b846b35',
        'namibian': 'photo-1509316785289-025f5b846b35',
        'patagonian': 'photo-1509316785289-025f5b846b35',
        'sand': 'photo-1509316785289-025f5b846b35',
        'dune': 'photo-1509316785289-025f5b846b35',
        'dunes': 'photo-1509316785289-025f5b846b35',
        'oasis': 'photo-1509316785289-025f5b846b35',
        'arid': 'photo-1509316785289-025f5b846b35',
        'dry': 'photo-1509316785289-025f5b846b35',
        'barren': 'photo-1509316785289-025f5b846b35',
        'hot desert': 'photo-1509316785289-025f5b846b35',
        'cold desert': 'photo-1509316785289-025f5b846b35',
        'rain shadow': 'photo-1509316785289-025f5b846b35',
        'subtropical': 'photo-1509316785289-025f5b846b35',

        // ========== LAKES ==========
        'lake': 'photo-1439066615861-d1af74d74000',
        'lakes': 'photo-1439066615861-d1af74d74000',
        'pond': 'photo-1439066615861-d1af74d74000',
        'superior': 'photo-1439066615861-d1af74d74000',
        'baikal': 'photo-1439066615861-d1af74d74000',
        'tanganyika': 'photo-1439066615861-d1af74d74000',
        'michigan': 'photo-1439066615861-d1af74d74000',
        'titicaca': 'photo-1439066615861-d1af74d74000',
        'caspian': 'photo-1439066615861-d1af74d74000',
        'great salt': 'photo-1439066615861-d1af74d74000',
        'crater lake': 'photo-1439066615861-d1af74d74000',
        'glacial lake': 'photo-1439066615861-d1af74d74000',
        'tectonic lake': 'photo-1439066615861-d1af74d74000',
        'oxbow lake': 'photo-1439066615861-d1af74d74000',
        'freshwater lake': 'photo-1439066615861-d1af74d74000',
        'saline': 'photo-1439066615861-d1af74d74000',
        'lagoon': 'photo-1439066615861-d1af74d74000',

        // ========== ISLANDS ==========
        'island': 'photo-1559128010-7c1ad6e1b6a5',
        'islands': 'photo-1559128010-7c1ad6e1b6a5',
        'archipelago': 'photo-1559128010-7c1ad6e1b6a5',
        'greenland': 'photo-1559128010-7c1ad6e1b6a5',
        'madagascar': 'photo-1559128010-7c1ad6e1b6a5',
        'borneo': 'photo-1559128010-7c1ad6e1b6a5',
        'sumatra': 'photo-1559128010-7c1ad6e1b6a5',
        'java': 'photo-1559128010-7c1ad6e1b6a5',
        'honshu': 'photo-1559128010-7c1ad6e1b6a5',
        'britain': 'photo-1559128010-7c1ad6e1b6a5',
        'iceland': 'photo-1559128010-7c1ad6e1b6a5',
        'cuba': 'photo-1559128010-7c1ad6e1b6a5',
        'sri lanka': 'photo-1559128010-7c1ad6e1b6a5',
        'maldives': 'photo-1559128010-7c1ad6e1b6a5',
        'hawaii': 'photo-1559128010-7c1ad6e1b6a5',
        'galapagos': 'photo-1559128010-7c1ad6e1b6a5',
        'fiji': 'photo-1559128010-7c1ad6e1b6a5',
        'seychelles': 'photo-1559128010-7c1ad6e1b6a5',
        'andaman': 'photo-1559128010-7c1ad6e1b6a5',
        'nicobar': 'photo-1559128010-7c1ad6e1b6a5',
        'lakshadweep': 'photo-1559128010-7c1ad6e1b6a5',
        'continental island': 'photo-1559128010-7c1ad6e1b6a5',
        'volcanic island': 'photo-1559128010-7c1ad6e1b6a5',
        'coral island': 'photo-1559128010-7c1ad6e1b6a5',
        'barrier island': 'photo-1559128010-7c1ad6e1b6a5',
        'tropical': 'photo-1559128010-7c1ad6e1b6a5',

        // ========== CORAL REEFS ==========
        'coral': 'photo-1546026423-cc4642628d2b',
        'reef': 'photo-1546026423-cc4642628d2b',
        'reefs': 'photo-1546026423-cc4642628d2b',
        'great barrier': 'photo-1546026423-cc4642628d2b',
        'barrier reef': 'photo-1546026423-cc4642628d2b',
        'fringing': 'photo-1546026423-cc4642628d2b',
        'fringing reef': 'photo-1546026423-cc4642628d2b',
        'atoll': 'photo-1546026423-cc4642628d2b',
        'polyp': 'photo-1546026423-cc4642628d2b',
        'marine': 'photo-1546026423-cc4642628d2b',
        'underwater': 'photo-1546026423-cc4642628d2b',
        'snorkeling': 'photo-1546026423-cc4642628d2b',
        'diving': 'photo-1546026423-cc4642628d2b',
        'aquatic': 'photo-1546026423-cc4642628d2b',

        // ========== OCEANS ==========
        'ocean': 'photo-1507525428034-b723cf961d3e',
        'oceans': 'photo-1507525428034-b723cf961d3e',
        'sea': 'photo-1507525428034-b723cf961d3e',
        'pacific': 'photo-1507525428034-b723cf961d3e',
        'atlantic': 'photo-1507525428034-b723cf961d3e',
        'indian ocean': 'photo-1507525428034-b723cf961d3e',
        'arctic ocean': 'photo-1507525428034-b723cf961d3e',
        'southern ocean': 'photo-1507525428034-b723cf961d3e',
        'antarctic': 'photo-1507525428034-b723cf961d3e',
        'mediterranean': 'photo-1507525428034-b723cf961d3e',
        'caribbean': 'photo-1507525428034-b723cf961d3e',
        'bay': 'photo-1507525428034-b723cf961d3e',
        'gulf': 'photo-1507525428034-b723cf961d3e',
        'strait': 'photo-1507525428034-b723cf961d3e',
        'channel': 'photo-1507525428034-b723cf961d3e',
        'trench': 'photo-1507525428034-b723cf961d3e',
        'mariana': 'photo-1507525428034-b723cf961d3e',
        'abyssal': 'photo-1507525428034-b723cf961d3e',
        'continental shelf': 'photo-1507525428034-b723cf961d3e',
        'tide': 'photo-1507525428034-b723cf961d3e',
        'current': 'photo-1507525428034-b723cf961d3e',
        'wave': 'photo-1507525428034-b723cf961d3e',
        'waves': 'photo-1507525428034-b723cf961d3e',
        'coast': 'photo-1507525428034-b723cf961d3e',
        'coastal': 'photo-1507525428034-b723cf961d3e',
        'beach': 'photo-1507525428034-b723cf961d3e',
        'shore': 'photo-1507525428034-b723cf961d3e',

        // ========== FORESTS ==========
        'forest': 'photo-1448375240586-882707db888b',
        'forests': 'photo-1448375240586-882707db888b',
        'rainforest': 'photo-1448375240586-882707db888b',
        'jungle': 'photo-1448375240586-882707db888b',
        'woodland': 'photo-1448375240586-882707db888b',
        'tree': 'photo-1448375240586-882707db888b',
        'trees': 'photo-1448375240586-882707db888b',
        'amazon forest': 'photo-1448375240586-882707db888b',
        'amazon rainforest': 'photo-1448375240586-882707db888b',
        'boreal': 'photo-1448375240586-882707db888b',
        'taiga': 'photo-1448375240586-882707db888b',
        'coniferous': 'photo-1448375240586-882707db888b',
        'deciduous': 'photo-1448375240586-882707db888b',
        'temperate': 'photo-1448375240586-882707db888b',
        'tropical forest': 'photo-1448375240586-882707db888b',
        'mangrove': 'photo-1448375240586-882707db888b',
        'canopy': 'photo-1448375240586-882707db888b',
        'biodiversity': 'photo-1448375240586-882707db888b',

        // ========== GLACIERS & ICE ==========
        'glacier': 'photo-1551632811-561732d1e306',
        'glaciers': 'photo-1551632811-561732d1e306',
        'ice': 'photo-1551632811-561732d1e306',
        'iceberg': 'photo-1551632811-561732d1e306',
        'snow': 'photo-1551632811-561732d1e306',
        'frozen': 'photo-1551632811-561732d1e306',
        'arctic': 'photo-1551632811-561732d1e306',
        'antarctic': 'photo-1551632811-561732d1e306',
        'polar': 'photo-1551632811-561732d1e306',

        // ========== DEFAULT ==========
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
      
      return `https://images.unsplash.com/${photoId}?w=${width}&q=80`;
    }
    
    // Return original if not source.unsplash.com
    return imageURL;
  }

  // ==================== DATA LOADING ====================
  loadTopicData() {
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

    if (this.topic && topicDataMap[this.topic]) {
      this.data = topicDataMap[this.topic];
      this.init();
    } else {
      this.show404();
    }
  }

  // ==================== INITIALIZATION ====================
  init() {
    if (!this.data || !this.data.sections || !this.data.sections[this.section]) {
      this.show404();
      return;
    }
    
    this.sectionData = this.data.sections[this.section];
    
    // Apply theme
    document.body.className = `concept-page ${this.data.meta.theme || 'mountains-theme'}`;
    
    // Update page title
    document.title = `${this.sectionData.title} | ${this.data.meta.name} | Geotopia`;
    
    // Render all components
    this.renderHero();
    this.renderContent();
    this.renderNavigation();
    this.attachEventListeners();
    
    // Hide preloader
    setTimeout(() => {
      document.getElementById('preloader')?.classList.add('hidden');
    }, 300);
  }

  // ==================== HERO RENDERING ====================
  renderHero() {
    const heroImage = this.fixImageURL(this.sectionData.hero?.image);
    const tagline = this.sectionData.hero?.tagline || '';
    
    const heroHTML = `
      <div class="hero-background">
        <img src="${heroImage}" alt="${this.sectionData.title}" class="hero-image" onerror="this.src='https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80'">
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
        <p class="hero-tagline">${tagline}</p>
      </div>
    `;
    
    document.getElementById('heroSection').innerHTML = heroHTML;
  }

  // ==================== CONTENT RENDERING ====================
  renderContent() {
    let contentHTML = '';
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

  // ==================== STANDARD RENDER ====================
  renderStandard() {
    const content = this.sectionData.content || {};
    const introduction = content.introduction || '';
    const keyPoints = content.keyPoints || [];
    const funFacts = content.funFacts || [];
    
    let html = `
      <section class="content-section">
        <div class="container">
          <p class="section-intro">${introduction}</p>
          
          ${keyPoints.length > 0 ? `
            <div class="key-points-grid">
              ${keyPoints.map(point => `
                <div class="key-point-card">
                  <div class="point-icon">${point.icon || '📌'}</div>
                  <div class="point-content">
                    <h3 class="point-label">${point.label || ''}</h3>
                    <p class="point-text">${point.text || ''}</p>
                    <p class="point-detail">${point.detail || ''}</p>
                  </div>
                </div>
              `).join('')}
            </div>
          ` : ''}
          
          ${content.comparison ? this.renderComparison(content.comparison) : ''}
${this.sectionData.comparisonTable ? this.renderComparisonTable(this.sectionData.comparisonTable) : ''}
          
          ${funFacts.length > 0 ? `
            <div class="fun-facts-section">
              <h3 class="fun-facts-title">🎯 Quick Facts</h3>
              <div class="fun-facts-grid">
                ${funFacts.map(fact => `
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

  // ==================== COMPARISON RENDER ====================
  renderComparison(comparison) {
    if (!comparison || !comparison.features) return '';
    
    return `
      <div class="comparison-section">
        <h3 class="comparison-title">${comparison.title || 'Comparison'}</h3>
        <div class="comparison-table-wrapper">
          <table class="comparison-table">
            <thead>
              <tr>
                <th>Feature</th>
                ${comparison.headers ? comparison.headers.map(h => `<th>${h}</th>`).join('') : '<th>Type A</th><th>Type B</th>'}
              </tr>
            </thead>
            <tbody>
              ${comparison.features.map(row => `
                <tr>
                  <td class="feature-cell">${row.feature || ''}</td>
                  ${row.values ? row.values.map(v => `<td>${v}</td>`).join('') : `
                    <td>${row.mountain || row.typeA || ''}</td>
                    <td>${row.hill || row.typeB || ''}</td>
                    <td>${row.plateau || row.typeC || ''}</td>
                  `}
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
    `;
  }

  // ==================== MINDMAP RENDER ====================
  renderMindmap() {
    const branches = this.sectionData.branches || [];
    
    return `
      <section class="mindmap-section">
        <div class="container">
          <div class="mindmap-intro">
            <p class="section-intro">${this.sectionData.introduction || 'Explore the different types below:'}</p>
          </div>
          
          <div class="mindmap-branches">
            ${branches.map((branch, index) => this.renderBranch(branch, index)).join('')}
          </div>
          
          ${this.sectionData.comparisonTable ? this.renderComparisonTable(this.sectionData.comparisonTable) : ''}
        </div>
      </section>
    `;
  }

  // ==================== BRANCH RENDER ====================
  renderBranch(branch, index) {
    const examples = branch.examples || [];
    const characteristics = branch.characteristics || [];
    const formation = branch.formation || { steps: [] };
    
    return `
      <div class="branch" data-branch-id="${branch.id || index}" style="--branch-color: ${branch.color || '#6366f1'}">
        <div class="branch-header" role="button" tabindex="0">
          <div class="branch-title-group">
            <span class="branch-icon">${branch.icon || '📌'}</span>
            <h3 class="branch-title">${branch.name || 'Untitled'}</h3>
          </div>
          <button class="expand-btn" aria-label="Expand ${branch.name}" aria-expanded="false">
            <span class="expand-icon">+</span>
          </button>
        </div>
        
        <div class="branch-content">
          <div class="branch-definition">
            <h4>📖 Definition</h4>
            <p>${branch.definition || ''}</p>
          </div>
          
          ${formation.steps && formation.steps.length > 0 ? `
            <div class="formation-process">
              <h4>🔨 Formation Process</h4>
              <div class="formation-steps">
                ${formation.steps.map((step, idx) => `
                  <div class="formation-step">
                    <div class="step-header">
                      <span class="step-icon">${step.icon || '🔹'}</span>
                      <span class="step-number">Step ${step.step || idx + 1}</span>
                    </div>
                    <p class="step-text">${step.text || ''}</p>
                  </div>
                  ${idx < formation.steps.length - 1 ? '<div class="step-arrow">↓</div>' : ''}
                `).join('')}
              </div>
            </div>
          ` : ''}
          
          ${characteristics.length > 0 ? `
            <div class="branch-characteristics">
              <h4>📋 Characteristics</h4>
              <ul class="characteristics-list">
                ${characteristics.map(char => `<li>${char}</li>`).join('')}
              </ul>
            </div>
          ` : ''}
          
          ${examples.length > 0 ? `
            <div class="branch-examples">
              <h4>🌍 Examples Around the World</h4>
              <div class="examples-grid">
                ${examples.map(example => `
                  <a href="${example.link || '#'}" class="example-card">
                    <div class="example-image" style="background-image: url('${this.fixImageURL(example.image)}')">
                      <div class="example-overlay"></div>
                    </div>
                    <div class="example-info">
                      <h5 class="example-name">${example.name || ''}</h5>
                      <p class="example-location">📍 ${example.location || ''}</p>
                      ${example.age ? `<p class="example-detail">⏳ ${example.age}</p>` : ''}
                      ${example.status ? `<p class="example-detail">📊 ${example.status}</p>` : ''}
                      ${example.highestPeak ? `<p class="example-peak">🏔️ ${example.highestPeak}</p>` : ''}
                      ${example.height ? `<p class="example-peak">📏 ${example.height}</p>` : ''}
                    </div>
                    <div class="example-hover">
                      <span class="hover-text">Explore Details →</span>
                    </div>
                  </a>
                `).join('')}
              </div>
            </div>
          ` : ''}
        </div>
      </div>
    `;
  }

  // ==================== TIMELINE RENDER ====================
  renderTimeline() {
    const stages = this.sectionData.stages || [];
    
    return `
      <section class="timeline-section">
        <div class="container">
          <p class="section-intro">${this.sectionData.introduction || ''}</p>
          
          <div class="timeline-viewer" id="timelineViewer">
            ${stages.map((stage, index) => `
              <div class="timeline-stage ${index === 0 ? 'active' : ''}" data-stage="${stage.stage || index + 1}">
                <div class="stage-visual">
                  <div class="stage-image-wrapper">
                    <img src="${this.fixImageURL(stage.image)}" alt="${stage.title || ''}" class="stage-image" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80'">
                    <div class="stage-overlay"></div>
                  </div>
                </div>
                
                <div class="stage-content">
                  <div class="stage-header">
                    <span class="stage-number">Stage ${stage.stage || index + 1} / ${stages.length}</span>
                    <h3 class="stage-title">${stage.title || ''}</h3>
                    <span class="stage-timeframe">⏳ ${stage.timeframe || ''}</span>
                  </div>
                  
                  <div class="stage-description">
                    <h4>Key Events:</h4>
                    <ul class="stage-list">
                      ${(stage.description || []).map(desc => `
                        <li>${desc}</li>
                      `).join('')}
                    </ul>
                  </div>
                  
                  ${stage.geologicalProcess ? `
                    <div class="geological-process">
                      <h4>🔬 Geological Process:</h4>
                      <p>${stage.geologicalProcess}</p>
                    </div>
                  ` : ''}
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
                        data-stage="${stage.stage || index + 1}"
                        aria-label="Go to stage ${stage.stage || index + 1}">
                  <span class="dot-label">${stage.stage || index + 1}</span>
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

  // ==================== TERMINOLOGY RENDER ====================
  renderTerminology(terminology) {
    if (!terminology || !terminology.terms) return '';
    
    return `
      <div class="terminology-section">
        <h3 class="terminology-title">${terminology.title || 'Key Terminology'}</h3>
        <div class="terms-grid">
          ${terminology.terms.map(term => `
            <div class="term-card">
              <div class="term-header">
                <h4 class="term-name">${term.term || ''}</h4>
                <span class="term-pronunciation">${term.pronunciation || ''}</span>
              </div>
              <p class="term-definition">${term.definition || ''}</p>
              ${term.example ? `
                <div class="term-example">
                  <strong>Example:</strong> ${term.example}
                </div>
              ` : ''}
              ${term.relatedTerms && term.relatedTerms.length > 0 ? `
                <div class="related-terms">
                  <strong>Related:</strong>
                  ${term.relatedTerms.map(related => `
                    <span class="related-tag">${related}</span>
                  `).join('')}
                </div>
              ` : ''}
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  // ==================== GRID RENDER ====================
  renderGrid() {
    const featuredRanges = this.sectionData.featuredRanges || [];
    
    return `
      <section class="examples-section">
        <div class="container">
          <p class="section-intro">${this.sectionData.introduction || ''}</p>
          
          <div class="examples-grid-featured">
            ${featuredRanges.map(range => `
              <a href="${range.link || '#'}" class="range-card">
                <div class="range-image" style="background-image: url('${this.fixImageURL(range.image)}')">
                  <div class="range-overlay"></div>
                  <span class="range-icon">${range.icon || '🏔️'}</span>
                </div>
                <div class="range-info">
                  <h3 class="range-name">${range.name || ''}</h3>
                  <p class="range-meta">
                    <span class="meta-item">📍 ${range.continent || range.location || ''}</span>
                    <span class="meta-item">🏔️ ${range.type || ''}</span>
                  </p>
                  <div class="range-stats">
                    <div class="stat">
                      <span class="stat-label">Highest Peak</span>
                      <span class="stat-value">${range.highestPeak || 'N/A'}</span>
                    </div>
                    <div class="stat">
                      <span class="stat-label">Length</span>
                      <span class="stat-value">${range.length || 'N/A'}</span>
                    </div>
                  </div>
                  ${range.funFact ? `<div class="fun-fact-badge">💡 ${range.funFact}</div>` : ''}
                </div>
                <div class="range-hover">
                  <span class="hover-text">Explore Full Profile →</span>
                </div>
              </a>
            `).join('')}
          </div>
          
          ${this.sectionData.linkToExisting ? `
            <div class="view-all-section">
              <a href="${this.sectionData.linkToExisting}" class="btn-view-all">
                View All ${this.data.meta.name} 
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M8 4L14 10L8 16"/>
                </svg>
              </a>
            </div>
          ` : ''}
          
          ${this.sectionData.upscRelevance ? this.renderUPSC(this.sectionData.upscRelevance) : ''}
        </div>
      </section>
    `;
  }

  // ==================== UPSC RENDER ====================
  renderUPSC(upsc) {
    if (!upsc) return '';
    
    return `
      <div class="upsc-section">
        <div class="upsc-header">
          <div class="upsc-badge">🎯 UPSC CSE</div>
          <h3>${upsc.title || 'Exam Relevance'}</h3>
        </div>
        
        <div class="upsc-grid">
          ${upsc.topics && upsc.topics.length > 0 ? `
            <div class="upsc-box">
              <h4>📌 Important Topics for Exam:</h4>
              <ul class="upsc-list">
                ${upsc.topics.map(topic => `<li>${topic}</li>`).join('')}
              </ul>
            </div>
          ` : ''}
          
          ${upsc.sampleQuestions && upsc.sampleQuestions.length > 0 ? `
            <div class="upsc-box">
              <h4>❓ Sample Mains Questions:</h4>
              <ul class="upsc-list questions">
                ${upsc.sampleQuestions.map(q => `<li>${typeof q === 'object' ? q.question : q}</li>`).join('')}
              </ul>
            </div>
          ` : ''}
        </div>
      </div>
    `;
  }

  // ==================== NAVIGATION RENDER ====================
  renderNavigation() {
    const sections = Object.keys(this.data.sections || {});
    
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

  // ==================== COMPARISON TABLE ====================
  renderComparisonTable(table) {
    if (!table || !table.rows) return '';
    
    return `
      <div class="comparison-table-section">
        <h3 class="table-title">${table.title || 'Comparison'}</h3>
        <div class="table-responsive">
          <table class="styled-table">
            <thead>
              <tr>
                ${(table.headers || []).map(header => `<th>${header}</th>`).join('')}
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

  // ==================== EVENT LISTENERS ====================
  attachEventListeners() {
  // Branch expansion
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
  
  header.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      header.click();
    }
  });
});

// Keyboard support for branch expansion
document.addEventListener('keypress', (e) => {
  if (e.key !== 'Enter' && e.key !== ' ') return;
  
  const header = e.target.closest('.branch-header');
  if (!header) return;
  
  e.preventDefault();
  header.click();
});
    
    // Timeline navigation
    const prevBtn = document.getElementById('prevStage');
    const nextBtn = document.getElementById('nextStage');
    
    if (prevBtn && nextBtn) {
      this.setupTimelineNavigation(prevBtn, nextBtn);
    }
    
    // Smooth scroll
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

  // ==================== TIMELINE NAVIGATION ====================
  setupTimelineNavigation(prevBtn, nextBtn) {
    const stages = this.sectionData.stages || [];
    const totalStages = stages.length;
    
    const updateStage = (newStage) => {
      document.querySelectorAll('.timeline-stage, .stage-dot').forEach(el => {
        el.classList.remove('active');
      });
      
      const activeStage = document.querySelector(`.timeline-stage[data-stage="${newStage}"]`);
      const activeDot = document.querySelector(`.stage-dot[data-stage="${newStage}"]`);
      
      if (activeStage) {
        activeStage.classList.add('active');
        activeStage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
      if (activeDot) activeDot.classList.add('active');
      
      this.currentStage = newStage;
      prevBtn.disabled = this.currentStage === 1;
      nextBtn.disabled = this.currentStage === totalStages;
    };
    
    prevBtn.addEventListener('click', () => {
      if (this.currentStage > 1) updateStage(this.currentStage - 1);
    });
    
    nextBtn.addEventListener('click', () => {
      if (this.currentStage < totalStages) updateStage(this.currentStage + 1);
    });
    
    document.querySelectorAll('.stage-dot').forEach(dot => {
      dot.addEventListener('click', (e) => {
        const stage = parseInt(e.currentTarget.dataset.stage);
        updateStage(stage);
      });
    });
    
    document.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft' && !prevBtn.disabled) prevBtn.click();
      else if (e.key === 'ArrowRight' && !nextBtn.disabled) nextBtn.click();
    });
  }

  // ==================== 404 ERROR ====================
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
          <a href="index.html" class="btn-back">← Back to Physical Geography</a>
        </div>
      </div>
      <style>
        .error-404 {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          text-align: center;
          padding: 2rem;
          font-family: 'Poppins', sans-serif;
        }
        .error-content { max-width: 500px; }
        .error-title { font-size: 8rem; font-weight: 800; margin: 0; line-height: 1; }
        .error-message { font-size: 1.5rem; margin: 1rem 0; }
        .error-detail { opacity: 0.9; margin: 1.5rem 0; }
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
        .btn-back:hover { transform: translateY(-2px); }
      </style>
    `;
  }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  new ConceptRenderer();
});
