/**
 * CORAL REEFS DATA MODULE - COMPLETE ENCYCLOPEDIA VERSION
 * Comprehensive educational content about Coral Reefs
 * Format: Universal concept data structure
 */

const coralReefsData = {
  meta: {
    name: 'Coral Reefs',
    icon: '🪸',
    theme: 'coral-reefs-theme',
    existingPagesLink: '/encyclopedia/coral-reefs/'
  },
  
  sections: {
    // =============================
    // SECTION 1: DEFINITION
    // =============================
    definition: {
      title: 'What is a Coral Reef?',
      hero: {
        image: 'https://images.unsplash.com/photo-1546026423-cc4642628d2b?w=1600&h=900&fit=crop',
        tagline: 'Introduction to Coral Reefs - The Rainforests of the Sea'
      },
      content: `
        <p>A <strong>coral reef</strong> is a complex underwater ecosystem characterized by reef-building corals. These are underwater structures made from calcium carbonate secreted by corals, which are marine invertebrate animals belonging to the class Anthozoa of phylum Cnidaria.</p>
        
        <p>Coral reefs are formed by colonies of coral polyps held together by calcium carbonate. Most coral reefs are built from stony corals, whose polyps cluster in groups. They are among the most biodiverse and productive ecosystems on Earth, often called the "rainforests of the sea."</p>
        
        <p>Despite covering less than 0.1% of the ocean floor, coral reefs support approximately 25% of all marine species, including fish, mollusks, worms, crustaceans, echinoderms, sponges, tunicates, and other cnidarians. These remarkable structures provide ecosystem services worth billions of dollars annually through fisheries, tourism, and coastal protection.</p>
        
        <div class="info-box">
          <h4>Key Characteristics:</h4>
          <ul>
            <li><strong>Living Structures:</strong> Built by living organisms over thousands of years</li>
            <li><strong>Symbiotic Relationship:</strong> Coral polyps live in symbiosis with zooxanthellae algae</li>
            <li><strong>Tropical Waters:</strong> Primarily found in warm, shallow, clear waters</li>
            <li><strong>Calcium Carbonate:</strong> Skeletons made of limestone (CaCO₃)</li>
            <li><strong>Slow Growth:</strong> Grow only 0.3 to 10 centimeters per year</li>
          </ul>
        </div>
      `
    },

    // =============================
    // SECTION 2: TYPES
    // =============================
    types: {
      title: 'Types of Coral Reefs',
      hero: {
        image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1600&h=900&fit=crop',
        tagline: 'Explore the Different Classifications of Coral Reefs'
      },
      content: `
        <p>Coral reefs are classified into several distinct types based on their location, structure, and formation process. Each type has unique characteristics and ecological significance.</p>

        <div class="type-card">
          <h3>1. Fringing Reefs</h3>
          <img src="https://images.unsplash.com/photo-1582967788606-a171c1080cb0?w=800&h=500&fit=crop" alt="Fringing Reef" />
          <p><strong>Fringing reefs</strong> are the most common type of reef, growing directly from the shore or bordering the coastline with little or no separation from land. They develop in shallow waters and extend outward from the coast like a submerged platform.</p>
          <ul>
            <li><strong>Location:</strong> Directly attached to shorelines</li>
            <li><strong>Lagoon:</strong> Narrow or absent shallow lagoon between reef and shore</li>
            <li><strong>Examples:</strong> Reefs along the Red Sea coast, many Caribbean islands</li>
            <li><strong>Depth:</strong> Typically found in waters less than 30 meters deep</li>
          </ul>
        </div>

        <div class="type-card">
          <h3>2. Barrier Reefs</h3>
          <img src="https://images.unsplash.com/photo-1583952775747-b5e1c2350dea?w=800&h=500&fit=crop" alt="Barrier Reef" />
          <p><strong>Barrier reefs</strong> are similar to fringing reefs but are separated from land by a deeper, wider lagoon. They run parallel to the coastline but are located farther offshore, often forming a barrier between the open sea and the coast.</p>
          <ul>
            <li><strong>Location:</strong> Offshore, parallel to coastline</li>
            <li><strong>Lagoon:</strong> Deep, wide lagoon between reef and mainland</li>
            <li><strong>Examples:</strong> Great Barrier Reef (Australia), Belize Barrier Reef</li>
            <li><strong>Size:</strong> Often very large, extending hundreds of kilometers</li>
            <li><strong>Formation:</strong> Develop as land subsides or sea levels rise</li>
          </ul>
        </div>

        <div class="type-card">
          <h3>3. Atolls</h3>
          <img src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=500&fit=crop" alt="Atoll" />
          <p><strong>Atolls</strong> are ring-shaped coral reefs, islands, or series of islets that encircle a lagoon partially or completely. They form in the open ocean, typically around submerged volcanic islands.</p>
          <ul>
            <li><strong>Shape:</strong> Circular or oval ring surrounding a central lagoon</li>
            <li><strong>Formation:</strong> Develop around sinking volcanic islands</li>
            <li><strong>Location:</strong> Open ocean, often far from continental landmasses</li>
            <li><strong>Examples:</strong> Maldives, Marshall Islands, Bikini Atoll</li>
            <li><strong>Darwin's Theory:</strong> Form through subsidence of volcanic islands</li>
          </ul>
        </div>

        <div class="type-card">
          <h3>4. Patch Reefs</h3>
          <img src="https://images.unsplash.com/photo-1587139223877-04cb899fa3e8?w=800&h=500&fit=crop" alt="Patch Reef" />
          <p><strong>Patch reefs</strong> are small, isolated reefs that grow up from the floor of an island platform or continental shelf. They typically occur in lagoons between the shore and barrier reefs or in atoll lagoons.</p>
          <ul>
            <li><strong>Size:</strong> Small, isolated formations</li>
            <li><strong>Location:</strong> Often found in lagoons or between other reef structures</li>
            <li><strong>Shape:</strong> Irregular, scattered formations</li>
            <li><strong>Depth:</strong> Can occur at various depths within the photic zone</li>
          </ul>
        </div>

        <div class="type-card">
          <h3>5. Bank/Platform Reefs</h3>
          <img src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=500&fit=crop" alt="Platform Reef" />
          <p><strong>Bank or platform reefs</strong> are reefs that develop on continental shelves with irregular shapes and no obvious relationship to landmasses. They grow in various directions depending on local conditions.</p>
          <ul>
            <li><strong>Formation:</strong> Grow on submerged banks or platforms</li>
            <li><strong>Shape:</strong> Irregular, no specific orientation to land</li>
            <li><strong>Examples:</strong> Found in the Gulf of Mexico, parts of Caribbean</li>
            <li><strong>Characteristics:</strong> May have lagoons within the reef structure</li>
          </ul>
        </div>

        <div class="info-box">
          <h4>Classification by Coral Type:</h4>
          <ul>
            <li><strong>Hard Coral Reefs:</strong> Built by stony (scleractinian) corals with calcium carbonate skeletons</li>
            <li><strong>Soft Coral Communities:</strong> Dominated by flexible corals without rigid skeletons</li>
            <li><strong>Deep-Water Coral Reefs:</strong> Found in cold, deep waters (200-1,000+ meters)</li>
            <li><strong>Tropical Coral Reefs:</strong> Warm-water reefs in shallow tropical seas</li>
          </ul>
        </div>
      `
    },

    // =============================
    // SECTION 3: FORMATION
    // =============================
    formation: {
      title: 'Formation and Characteristics of Coral Reefs',
      hero: {
        image: 'https://images.unsplash.com/photo-1582967788606-a171c1080cb0?w=1600&h=900&fit=crop',
        tagline: 'Understanding How Coral Reefs Form and Thrive'
      },
      content: `
        <h3>How Coral Reefs Form</h3>
        <p>Coral reef formation is a complex, slow process that can take thousands to millions of years. Understanding this process reveals the remarkable nature of these living structures.</p>

        <div class="formation-stage">
          <h4>1. Initial Settlement (Larval Stage)</h4>
          <img src="https://images.unsplash.com/photo-1546026423-cc4642628d2b?w=800&h=500&fit=crop" alt="Coral Formation" />
          <p>Coral reefs begin when free-swimming coral larvae (planulae) attach themselves to submerged rocks or hard surfaces along the edges of islands or continents. Once attached, the larvae transform into polyps—small, soft-bodied organisms related to sea anemones.</p>
        </div>

        <div class="formation-stage">
          <h4>2. Polyp Colony Development</h4>
          <p>Each polyp secretes calcium carbonate (limestone) from its base, creating a hard, protective skeleton called a corallite. The polyp divides repeatedly through asexual reproduction (budding), forming a colony of genetically identical polyps. Each colony grows on the skeletons of previous generations.</p>
          <ul>
            <li>Individual polyps are typically 1-3mm in diameter</li>
            <li>Colonies can contain thousands to millions of polyps</li>
            <li>Growth rates vary: 0.3-10 cm per year depending on species</li>
          </ul>
        </div>

        <div class="formation-stage">
          <h4>3. Symbiotic Relationship</h4>
          <img src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=500&fit=crop" alt="Coral Symbiosis" />
          <p>Most reef-building corals have a symbiotic relationship with microscopic algae called zooxanthellae that live within their tissues. This relationship is crucial for reef formation:</p>
          <ul>
            <li><strong>Photosynthesis:</strong> Zooxanthellae photosynthesize, providing up to 90% of coral energy needs</li>
            <li><strong>Calcification:</strong> Algae help corals produce calcium carbonate more efficiently</li>
            <li><strong>Color:</strong> Zooxanthellae give corals their vibrant colors</li>
            <li><strong>Nutrition Exchange:</strong> Corals provide protection and nutrients; algae provide sugars and oxygen</li>
          </ul>
        </div>

        <div class="formation-stage">
          <h4>4. Reef Structure Building</h4>
          <p>As colonies grow and spread, they create the three-dimensional structure of a reef. Different coral species grow in various formations—branching, massive, plate-like, or encrusting—creating complex habitats with numerous crevices and caves.</p>
        </div>

        <div class="formation-stage">
          <h4>5. Reef Evolution (Darwin's Theory)</h4>
          <img src="https://images.unsplash.com/photo-1583952775747-b5e1c2350dea?w=800&h=500&fit=crop" alt="Reef Evolution" />
          <p>Charles Darwin proposed a theory explaining the progression from fringing reefs to atolls:</p>
          <ol>
            <li><strong>Stage 1:</strong> Fringing reef forms around a volcanic island</li>
            <li><strong>Stage 2:</strong> Island subsides, reef continues growing upward, creating a barrier reef with a lagoon</li>
            <li><strong>Stage 3:</strong> Island completely submerges, leaving a ring-shaped atoll</li>
          </ol>
        </div>

        <h3>Essential Conditions for Coral Reef Formation</h3>
        <div class="conditions-grid">
          <div class="condition-card">
            <h4>🌡️ Temperature</h4>
            <ul>
              <li><strong>Optimal Range:</strong> 23-29°C (73-84°F)</li>
              <li><strong>Minimum:</strong> 18°C (64°F)</li>
              <li><strong>Maximum Tolerance:</strong> 30-32°C (86-90°F)</li>
              <li>Corals are very sensitive to temperature changes</li>
            </ul>
          </div>

          <div class="condition-card">
            <h4>☀️ Light</h4>
            <ul>
              <li>Require abundant sunlight for zooxanthellae photosynthesis</li>
              <li>Most reefs occur in waters less than 50 meters deep</li>
              <li>Clear water with minimal sediment</li>
              <li>Typically found in the photic zone</li>
            </ul>
          </div>

          <div class="condition-card">
            <h4>💧 Water Quality</h4>
            <ul>
              <li><strong>Salinity:</strong> 32-42 parts per thousand</li>
              <li><strong>Clarity:</strong> Clear water for light penetration</li>
              <li><strong>Low Nutrients:</strong> Paradoxically thrive in nutrient-poor waters</li>
              <li><strong>pH:</strong> 8.1-8.4 (slightly alkaline)</li>
            </ul>
          </div>

          <div class="condition-card">
            <h4>🌊 Water Movement</h4>
            <ul>
              <li>Moderate wave action delivers nutrients and oxygen</li>
              <li>Currents remove sediment and waste products</li>
              <li>Prevents stagnation and promotes circulation</li>
              <li>Too much turbulence can damage coral structures</li>
            </ul>
          </div>

          <div class="condition-card">
            <h4>🪨 Substrate</h4>
            <ul>
              <li>Require hard, stable surfaces for larval attachment</li>
              <li>Rocky or dead coral substrate ideal</li>
              <li>Cannot colonize soft, shifting sand or mud</li>
              <li>Volcanic rock, limestone, or dead reef material</li>
            </ul>
          </div>

          <div class="condition-card">
            <h4>📍 Location</h4>
            <ul>
              <li>Primarily between 30°N and 30°S latitude</li>
              <li>Tropical and subtropical regions</li>
              <li>Western coasts of continents (warmer currents)</li>
              <li>Away from river mouths (sediment and freshwater)</li>
            </ul>
          </div>
        </div>

        <h3>Reef Zonation and Structure</h3>
        <div class="info-box">
          <p>Coral reefs are divided into distinct zones based on depth, wave energy, and distance from shore:</p>
          
          <h4>Typical Reef Zones:</h4>
          <ol>
            <li><strong>Reef Crest:</strong> Shallowest part with highest wave energy; dominated by hardy, wave-resistant corals</li>
            <li><strong>Fore Reef (Reef Slope):</strong> Seaward side sloping down; highest coral diversity</li>
            <li><strong>Reef Flat:</strong> Shallow, flat area between crest and shore; variable conditions</li>
            <li><strong>Lagoon:</strong> Protected area behind barrier reefs; calmer waters with patch reefs</li>
            <li><strong>Back Reef:</strong> Leeward side protected from waves; fine sediment accumulation</li>
          </ol>
        </div>

        <h3>Ecological Characteristics</h3>
        <div class="ecology-section">
          <h4>Biodiversity Hotspots</h4>
          <p>Coral reefs support extraordinary biodiversity despite covering less than 0.1% of the ocean:</p>
          <ul>
            <li>Over 4,000 species of fish</li>
            <li>Approximately 800 species of hard corals</li>
            <li>Thousands of mollusk, crustacean, and other invertebrate species</li>
            <li>Critical breeding and nursery grounds for marine life</li>
            <li>Complex food webs with numerous ecological niches</li>
          </ul>

          <h4>Productivity</h4>
          <p>Reefs are among Earth's most productive ecosystems:</p>
          <ul>
            <li>High primary productivity despite nutrient-poor waters</li>
            <li>Efficient nutrient recycling within the ecosystem</li>
            <li>Symbiotic relationships maximize energy efficiency</li>
            <li>Support commercial and subsistence fisheries</li>
          </ul>

          <h4>Reproduction Methods</h4>
          <p>Corals reproduce both sexually and asexually:</p>
          <ul>
            <li><strong>Asexual:</strong> Budding, fragmentation, and polyp bail-out</li>
            <li><strong>Sexual:</strong> Mass spawning events, often synchronized with lunar cycles</li>
            <li><strong>Broadcast Spawning:</strong> Release eggs and sperm into water column</li>
            <li><strong>Brooding:</strong> Some species internally fertilize and release developed larvae</li>
          </ul>
        </div>

        <div class="warning-box">
          <h4>⚠️ Threats to Coral Reefs</h4>
          <p>Coral reefs face numerous threats that affect their formation and survival:</p>
          <ul>
            <li><strong>Climate Change:</strong> Ocean warming causes coral bleaching; ocean acidification inhibits calcification</li>
            <li><strong>Pollution:</strong> Agricultural runoff, sewage, and plastic contamination</li>
            <li><strong>Overfishing:</strong> Disrupts ecological balance and food webs</li>
            <li><strong>Destructive Fishing:</strong> Blast fishing and cyanide poisoning</li>
            <li><strong>Coastal Development:</strong> Sedimentation, habitat destruction</li>
            <li><strong>Tourism Impact:</strong> Physical damage from anchors, divers, boats</li>
            <li><strong>Coral Disease:</strong> Increasing prevalence of bacterial and fungal infections</li>
          </ul>
        </div>
      `
    },

    // =============================
    // SECTION 4: EXAMPLES
    // =============================
    examples: {
      title: 'Famous Coral Reefs Around the World',
      hero: {
        image: 'https://images.unsplash.com/photo-1583952775747-b5e1c2350dea?w=1600&h=900&fit=crop',
        tagline: 'Explore the World\'s Most Magnificent Coral Reef Systems'
      },
      renderAs: 'grid',
      introduction: `
        <p>Coral reefs around the world showcase the incredible diversity and beauty of these marine ecosystems. From the massive Great Barrier Reef to remote atolls, each reef system has unique characteristics and ecological significance. Here are some of the world's most remarkable coral reefs:</p>
      `,
      linkToExisting: '../../coral-reefs/coral-reefs.html',
      items: [
        {
          name: 'Great Barrier Reef',
          location: 'Queensland, Australia',
          image: 'https://images.unsplash.com/photo-1587139223877-04cb899fa3e8?w=600&h=400&fit=crop',
          description: 'The world\'s largest coral reef system, spanning over 2,300 kilometers with 2,900 individual reefs and 900 islands. Home to 1,500 fish species, 400 coral species, and countless other marine organisms.',
          facts: [
            'Area: 344,400 km² (larger than Italy)',
            'Age: Approximately 500,000 years old',
            'UNESCO World Heritage Site (1981)',
            'Visible from space',
            'Contains 10% of world\'s total fish species',
            'Supports 64,000 jobs in tourism',
            'Generates $6.4 billion annually'
          ]
        },
        {
          name: 'Mesoamerican Barrier Reef',
          location: 'Mexico, Belize, Guatemala, Honduras',
          image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=400&fit=crop',
          description: 'The second-largest barrier reef system in the world, stretching over 1,000 kilometers along the Caribbean coast of Central America. Features the famous Great Blue Hole.',
          facts: [
            'Length: Over 1,000 km',
            'Spans 4 countries',
            'Home to 500+ fish species',
            '65 species of stony coral',
            'Includes Great Blue Hole (407m wide)',
            'Critical for regional fisheries',
            'Supports 2 million people'
          ]
        },
        {
          name: 'Red Sea Coral Reef',
          location: 'Egypt, Israel, Jordan, Saudi Arabia',
          image: 'https://images.unsplash.com/photo-1546026423-cc4642628d2b?w=600&h=400&fit=crop',
          description: 'One of the most northerly tropical reefs, extending over 2,000 kilometers. Known for exceptional coral diversity, unique endemic species, and remarkable heat tolerance.',
          facts: [
            'Length: Over 2,000 km',
            '200+ hard coral species',
            '1,200+ fish species',
            'High heat tolerance (up to 34°C)',
            'Age: 5,000-7,000 years',
            'Some of world\'s best diving sites',
            'Includes Ras Mohammed National Park'
          ]
        },
        {
          name: 'New Caledonia Barrier Reef',
          location: 'New Caledonia, Pacific Ocean',
          image: 'https://images.unsplash.com/photo-1582967788606-a171c1080cb0?w=600&h=400&fit=crop',
          description: 'The world\'s second-longest double barrier reef, surrounding the main island with exceptional biodiversity and pristine condition.',
          facts: [
            'Length: 1,500 km',
            'Area: 40,000 km² lagoon',
            'UNESCO World Heritage Site',
            '1,000+ fish species',
            '350+ coral species',
            'Home to dugongs',
            'Relatively pristine condition'
          ]
        },
        {
          name: 'Raja Ampat Reefs',
          location: 'West Papua, Indonesia',
          image: 'https://images.unsplash.com/photo-1583952775747-b5e1c2350dea?w=600&h=400&fit=crop',
          description: 'Often called the "epicenter of marine biodiversity," this archipelago hosts the richest coral diversity on Earth with over 75% of all known coral species.',
          facts: [
            '1,500+ small islands',
            '75% of all coral species (537 species)',
            '1,300+ reef fish species',
            '700+ mollusk species',
            'Part of Coral Triangle',
            'Highest marine biodiversity globally',
            'Manta ray cleaning stations'
          ]
        },
        {
          name: 'Maldives Coral Reefs',
          location: 'Maldives, Indian Ocean',
          image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=400&fit=crop',
          description: 'A chain of 26 atolls containing approximately 1,190 coral islands. Famous for pristine white beaches, crystal-clear lagoons, and vibrant house reefs.',
          facts: [
            '26 natural atolls',
            '1,190 islands',
            '200+ coral species',
            '1,000+ fish species',
            'Double chain of atolls',
            'Average elevation: 1.5m above sea level',
            'World-renowned diving destination'
          ]
        },
        {
          name: 'Florida Reef Tract',
          location: 'Florida Keys, USA',
          image: 'https://images.unsplash.com/photo-1546026423-cc4642628d2b?w=600&h=400&fit=crop',
          description: 'The only living barrier reef in the continental United States, extending about 360 kilometers from southern Miami to the Dry Tortugas.',
          facts: [
            'Length: 360 km',
            'Third-largest barrier reef globally',
            'Only continental US barrier reef',
            '45 coral species',
            '500+ fish species',
            'John Pennekamp Coral Reef State Park',
            'Major conservation efforts underway'
          ]
        },
        {
          name: 'Tubbataha Reefs',
          location: 'Sulu Sea, Philippines',
          image: 'https://images.unsplash.com/photo-1587139223877-04cb899fa3e8?w=600&h=400&fit=crop',
          description: 'A pristine atoll reef system in the middle of the Sulu Sea, protected as a UNESCO World Heritage Site. Known for exceptional marine biodiversity.',
          facts: [
            'Area: 97,030 hectares',
            'UNESCO World Heritage Site (1993)',
            '600+ fish species',
            '360+ coral species',
            '11 shark species',
            'Important turtle nesting site',
            'Strictly protected (no-take zone)'
          ]
        },
        {
          name: 'Andros Barrier Reef',
          location: 'Andros Island, Bahamas',
          image: 'https://images.unsplash.com/photo-1582967788606-a171c1080cb0?w=600&h=400&fit=crop',
          description: 'The third-largest barrier reef in the world, extending over 225 kilometers along the eastern shore of Andros Island. Features dramatic wall diving.',
          facts: [
            'Length: 225+ km',
            'Third-largest barrier reef',
            'Tongue of the Ocean nearby (1,800m deep)',
            'Over 164 fish species',
            'Blue holes and underwater caves',
            'Relatively unexplored',
            'Critical nursery habitat'
          ]
        },
        {
          name: 'Apo Reef',
          location: 'Mindoro, Philippines',
          image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=400&fit=crop',
          description: 'The largest contiguous coral reef system in the Philippines and the second-largest in the world. A protected natural park known for pristine conditions.',
          facts: [
            'Area: 34 km²',
            'Second-largest contiguous reef globally',
            '400+ coral species',
            '500+ fish species',
            'Natural park status',
            'Minimal human impact',
            'Important shark habitat'
          ]
        },
        {
          name: 'Ningaloo Reef',
          location: 'Western Australia',
          image: 'https://images.unsplash.com/photo-1583952775747-b5e1c2350dea?w=600&h=400&fit=crop',
          description: 'One of the longest nearshore reefs in the world, extending over 260 kilometers. Famous for whale shark encounters and pristine condition.',
          facts: [
            'Length: 260 km',
            'UNESCO World Heritage Site',
            '300+ coral species',
            '500+ fish species',
            'Whale shark aggregation site',
            'Accessible from shore',
            'Minimal coastal development'
          ]
        },
        {
          name: 'Palancar Reef',
          location: 'Cozumel, Mexico',
          image: 'https://images.unsplash.com/photo-1546026423-cc4642628d2b?w=600&h=400&fit=crop',
          description: 'Part of the Mesoamerican Barrier Reef, famous for its coral formations, swim-throughs, and vibrant marine life. One of the world\'s top dive sites.',
          facts: [
            'Part of Mesoamerican Barrier Reef',
            'Multiple dive zones',
            'Dramatic coral formations',
            'Strong currents (drift diving)',
            '100+ coral species',
            'Iconic swim-through tunnels',
            'World-class visibility'
          ]
        }
      ]
    },

    // =============================
    // SECTION 5: IMPORTANCE
    // =============================
    importance: {
      title: 'Importance and Ecological Services of Coral Reefs',
      hero: {
        image: 'https://images.unsplash.com/photo-1587139223877-04cb899fa3e8?w=1600&h=900&fit=crop',
        tagline: 'Why Coral Reefs Matter for Our Planet and Humanity'
      },
      content: `
        <p>Coral reefs are among the most valuable ecosystems on Earth, providing essential services to both marine life and human populations. Despite covering less than 0.1% of the ocean floor, their impact is immense and far-reaching.</p>

        <h3>Ecological Importance</h3>
        <div class="importance-card">
          <h4>🐠 Marine Biodiversity</h4>
          <ul>
            <li>Support 25% of all marine species despite occupying <0.1% of ocean area</li>
            <li>Provide habitat, feeding grounds, and nurseries for thousands of species</li>
            <li>Create complex three-dimensional structures with countless niches</li>
            <li>Serve as "biodiversity hotspots" comparable to tropical rainforests</li>
            <li>Support intricate food webs from plankton to apex predators</li>
          </ul>
        </div>

        <div class="importance-card">
          <h4>🔄 Nutrient Cycling</h4>
          <ul>
            <li>Efficiently recycle nutrients in nutrient-poor tropical waters</li>
            <li>Convert dissolved nutrients into living biomass</li>
            <li>Provide nutrients to surrounding ecosystems</li>
            <li>Support productivity through symbiotic relationships</li>
          </ul>
        </div>

        <h3>Economic Importance</h3>
        <div class="importance-card">
          <h4>🎣 Fisheries</h4>
          <ul>
            <li>Provide livelihoods for over 500 million people globally</li>
            <li>Support commercial and artisanal fisheries worth billions annually</li>
            <li>Serve as nursery grounds for commercially important species</li>
            <li>Contribute to food security in tropical developing nations</li>
            <li>Estimated value: $6.8 billion annually in fisheries alone</li>
          </ul>
        </div>

        <div class="importance-card">
          <h4>✈️ Tourism</h4>
          <ul>
            <li>Generate approximately $36 billion annually in tourism revenue</li>
            <li>Support millions of jobs in coastal communities</li>
            <li>Attract divers, snorkelers, and marine enthusiasts worldwide</li>
            <li>Provide recreational opportunities and cultural experiences</li>
            <li>Contribute significantly to national economies of island nations</li>
          </ul>
        </div>

        <div class="importance-card">
          <h4>🏖️ Coastal Protection</h4>
          <ul>
            <li>Reduce wave energy by an average of 97%</li>
            <li>Protect coastlines from erosion and storm damage</li>
            <li>Save billions in coastal infrastructure protection costs</li>
            <li>Estimated to protect $94 billion in property globally</li>
            <li>Reduce flooding risk for 200+ million coastal residents</li>
            <li>Particularly crucial during hurricanes and typhoons</li>
          </ul>
        </div>

        <h3>Medical and Scientific Importance</h3>
        <div class="importance-card">
          <h4>💊 Pharmaceutical Resources</h4>
          <ul>
            <li>Source of compounds for treating cancer, arthritis, and infections</li>
            <li>Provide unique chemicals for medical research</li>
            <li>Coral skeletons used in bone grafts (similar to human bone structure)</li>
            <li>Potential for discovering new antibiotics and antivirals</li>
            <li>Estimated potential value: billions in pharmaceutical applications</li>
          </ul>
        </div>

        <div class="importance-card">
          <h4>🔬 Scientific Research</h4>
          <ul>
            <li>Living laboratories for studying marine ecology and evolution</li>
            <li>Climate archives (coral cores reveal historical ocean conditions)</li>
            <li>Model organisms for understanding symbiosis</li>
            <li>Indicators of ocean health and climate change</li>
            <li>Contribute to understanding of calcification processes</li>
          </ul>
        </div>

        <h3>Cultural and Social Importance</h3>
        <div class="importance-card">
          <h4>🏝️ Cultural Heritage</h4>
          <ul>
            <li>Sacred sites for many indigenous and island cultures</li>
            <li>Integral to traditional practices and ceremonies</li>
            <li>Source of cultural identity for Pacific Island nations</li>
            <li>Featured in folklore, art, and traditional knowledge</li>
            <li>Connect communities to their marine environment</li>
          </ul>
        </div>

        <div class="importance-card">
          <h4>📚 Educational Value</h4>
          <ul>
            <li>Inspire marine conservation and environmental awareness</li>
            <li>Provide opportunities for scientific education</li>
            <li>Demonstrate complex ecological relationships</li>
            <li>Raise awareness about climate change impacts</li>
          </ul>
        </div>

        <h3>Climate Regulation</h3>
        <div class="importance-card">
          <h4>🌍 Carbon Cycling</h4>
          <ul>
            <li>Contribute to global carbon cycling through calcification</li>
            <li>Store carbon in calcium carbonate structures</li>
            <li>Influence atmospheric CO₂ levels over geological timescales</li>
            <li>Part of ocean's carbon sequestration system</li>
          </ul>
        </div>

        <div class="stat-box">
          <h3>Coral Reef Economic Value</h3>
          <ul>
            <li><strong>Total Global Value:</strong> $375 billion annually</li>
            <li><strong>Tourism:</strong> $36 billion/year</li>
            <li><strong>Fisheries:</strong> $6.8 billion/year</li>
            <li><strong>Coastal Protection:</strong> $9 billion/year in avoided damages</li>
            <li><strong>Per Hectare Value:</strong> Up to $352,000/year</li>
            <li><strong>People Dependent:</strong> 500+ million globally</li>
          </ul>
        </div>

        <div class="warning-box">
          <h4>⚠️ Threats to These Values</h4>
          <p>Climate change and human activities threaten all these ecosystem services:</p>
          <ul>
            <li>50% of coral reefs have been lost in the past 30 years</li>
            <li>90% could be threatened by 2030 without action</li>
            <li>Mass bleaching events increasing in frequency and severity</li>
            <li>Economic losses could reach hundreds of billions if reefs collapse</li>
            <li>Urgent conservation action needed to preserve these values</li>
          </ul>
        </div>
      `
    },

    // =============================
    // SECTION 6: CONSERVATION
    // =============================
    conservation: {
      title: 'Coral Reef Conservation and Protection',
      hero: {
        image: 'https://images.unsplash.com/photo-1583952775747-b5e1c2350dea?w=1600&h=900&fit=crop',
        tagline: 'Protecting Our Underwater Treasures for Future Generations'
      },
      content: `
        <p>Coral reefs face unprecedented threats from climate change, pollution, and human activities. Conservation efforts worldwide aim to protect and restore these vital ecosystems through various strategies and initiatives.</p>

        <h3>Major Threats to Coral Reefs</h3>
        <div class="threat-card">
          <h4>🌡️ Climate Change</h4>
          <ul>
            <li><strong>Coral Bleaching:</strong> Rising ocean temperatures cause corals to expel zooxanthellae, losing color and energy source</li>
            <li><strong>Ocean Acidification:</strong> Increased CO₂ absorption reduces pH, inhibiting coral calcification</li>
            <li><strong>Sea Level Rise:</strong> May exceed coral growth rates, drowning reefs</li>
            <li><strong>Extreme Weather:</strong> More intense storms physically damage reef structures</li>
            <li>Major bleaching events occurred in 1998, 2010, 2016, 2020, and 2024</li>
          </ul>
        </div>

        <div class="threat-card">
          <h4>🏭 Pollution</h4>
          <ul>
            <li><strong>Agricultural Runoff:</strong> Excess nutrients cause algae blooms that smother corals</li>
            <li><strong>Sewage:</strong> Introduces pathogens and increases disease prevalence</li>
            <li><strong>Plastic Pollution:</strong> Entangles corals, blocks light, introduces toxins</li>
            <li><strong>Chemical Contamination:</strong> Pesticides, heavy metals, and oil damage coral health</li>
            <li><strong>Sediment:</strong> Coastal development increases sediment, blocking sunlight</li>
          </ul>
        </div>

        <div class="threat-card">
          <h4>🎣 Overfishing and Destructive Practices</h4>
          <ul>
            <li><strong>Overfishing:</strong> Removes herbivorous fish, allowing algae overgrowth</li>
            <li><strong>Blast Fishing:</strong> Explosives destroy entire reef sections</li>
            <li><strong>Cyanide Fishing:</strong> Poisons corals and non-target species</li>
            <li><strong>Bottom Trawling:</strong> Nets physically destroy coral structures</li>
            <li>Disrupts ecological balance and food webs</li>
          </ul>
        </div>

        <div class="threat-card">
          <h4>🏗️ Coastal Development</h4>
          <ul>
            <li>Sedimentation from construction smothers corals</li>
            <li>Dredging destroys reef habitats directly</li>
            <li>Increased boat traffic causes anchor damage</li>
            <li>Light pollution affects coral reproduction</li>
            <li>Coastal hardening alters natural sediment dynamics</li>
          </ul>
        </div>

        <h3>Conservation Strategies</h3>
        
        <div class="strategy-card">
          <h4>🏞️ Marine Protected Areas (MPAs)</h4>
          <img src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=500&fit=crop" alt="Marine Protected Area" />
          <p>Establishing no-take zones and regulated areas to protect coral ecosystems:</p>
          <ul>
            <li><strong>No-Take Reserves:</strong> Completely prohibit fishing and extraction</li>
            <li><strong>Multiple-Use Areas:</strong> Allow sustainable activities with restrictions</li>
            <li><strong>Size Matters:</strong> Larger MPAs more effective for reef protection</li>
            <li><strong>Success Stories:</strong> Great Barrier Reef Marine Park, Papahānaumokuākea</li>
            <li>Currently, ~15% of coral reefs are in MPAs</li>
            <li>Goal: Protect 30% of ocean by 2030</li>
          </ul>
        </div>

        <div class="strategy-card">
          <h4>🔬 Coral Restoration</h4>
          <img src="https://images.unsplash.com/photo-1582967788606-a171c1080cb0?w=800&h=500&fit=crop" alt="Coral Restoration" />
          <p>Active intervention to rebuild damaged reefs and increase resilience:</p>
          <ul>
            <li><strong>Coral Gardening:</strong> Grow coral fragments in nurseries, transplant to reefs</li>
            <li><strong>Microfragmentation:</strong> Accelerate coral growth through small fragments</li>
            <li><strong>Larval Propagation:</strong> Collect and settle coral larvae on degraded reefs</li>
            <li><strong>Assisted Evolution:</strong> Breed heat-tolerant coral strains</li>
            <li><strong>3D Printing:</strong> Create artificial reef structures for coral settlement</li>
            <li>Success rates vary; long-term monitoring essential</li>
          </ul>
        </div>

        <div class="strategy-card">
          <h4>🌡️ Climate Action</h4>
          <p>Addressing root causes of reef decline through climate mitigation:</p>
          <ul>
            <li><strong>Emission Reduction:</strong> Limit global warming to 1.5°C target</li>
            <li><strong>Renewable Energy:</strong> Transition away from fossil fuels</li>
            <li><strong>Carbon Sequestration:</strong> Develop technologies to remove atmospheric CO₂</li>
            <li><strong>International Agreements:</strong> Paris Agreement implementation</li>
            <li>Without climate action, other conservation efforts may be insufficient</li>
          </ul>
        </div>

        <div class="strategy-card">
          <h4>💧 Water Quality Management</h4>
          <p>Reducing land-based pollution reaching coral reefs:</p>
          <ul>
            <li><strong>Watershed Management:</strong> Control agricultural runoff and erosion</li>
            <li><strong>Sewage Treatment:</strong> Improve wastewater infrastructure</li>
            <li><strong>Sustainable Agriculture:</strong> Reduce fertilizer and pesticide use</li>
            <li><strong>Coastal Buffers:</strong> Maintain mangroves and wetlands as filters</li>
            <li><strong>Regulation:</strong> Enforce water quality standards</li>
          </ul>
        </div>

        <div class="strategy-card">
          <h4>🎣 Sustainable Fisheries</h4>
          <p>Managing fishing to maintain reef ecosystem balance:</p>
          <ul>
            <li><strong>Catch Limits:</strong> Science-based quotas prevent overfishing</li>
            <li><strong>Size Restrictions:</strong> Allow fish to reproduce before harvest</li>
            <li><strong>Gear Restrictions:</strong> Ban destructive fishing methods</li>
            <li><strong>Herbivore Protection:</strong> Protect algae-eating fish crucial for reef health</li>
            <li><strong>Community-Based Management:</strong> Involve local fishers in conservation</li>
          </ul>
        </div>

        <div class="strategy-card">
          <h4>🏖️ Sustainable Tourism</h4>
          <p>Minimize tourism impacts while supporting local economies:</p>
          <ul>
            <li><strong>Mooring Buoys:</strong> Prevent anchor damage</li>
            <li><strong>Visitor Education:</strong> Teach proper snorkeling/diving etiquette</li>
            <li><strong>Capacity Limits:</strong> Control visitor numbers</li>
            <li><strong>Reef-Safe Sunscreen:</strong> Ban harmful chemicals (oxybenzone, octinoxate)</li>
            <li><strong>Certification Programs:</strong> Green Fins, Blue Flag initiatives</li>
            <li>Tourism fees fund conservation efforts</li>
          </ul>
        </div>

        <h3>Research and Monitoring</h3>
        <div class="research-section">
          <h4>📊 Monitoring Programs</h4>
          <ul>
            <li><strong>Global Coral Reef Monitoring Network:</strong> Coordinates worldwide reef health assessment</li>
            <li><strong>Coral Reef Watch (NOAA):</strong> Satellite monitoring for bleaching risk</li>
            <li><strong>Reef Check:</strong> Citizen science monitoring program</li>
            <li><strong>Long-term Research:</strong> Track changes over decades</li>
            <li><strong>eDNA Sampling:</strong> Assess biodiversity through water samples</li>
          </ul>

          <h4>🧬 Scientific Research</h4>
          <ul>
            <li>Study coral resilience and adaptation mechanisms</li>
            <li>Investigate assisted evolution and selective breeding</li>
            <li>Develop early warning systems for bleaching events</li>
            <li>Research coral microbiomes and disease</li>
            <li>Model future reef scenarios under climate change</li>
          </ul>
        </div>

        <h3>Community Engagement and Education</h3>
        <div class="community-section">
          <h4>👥 Local Community Involvement</h4>
          <ul>
            <li><strong>Co-Management:</strong> Share management between government and communities</li>
            <li><strong>Alternative Livelihoods:</strong> Develop sustainable income sources</li>
            <li><strong>Traditional Knowledge:</strong> Incorporate indigenous practices</li>
            <li><strong>Capacity Building:</strong> Train local conservation practitioners</li>
            <li>Communities most successful when they benefit from conservation</li>
          </ul>

          <h4>📚 Education and Awareness</h4>
          <ul>
            <li>School programs teaching reef ecology and conservation</li>
            <li>Public awareness campaigns about threats and solutions</li>
            <li>Media and documentaries highlighting reef importance</li>
            <li>Eco-tourism as educational opportunity</li>
            <li>Social media engagement for global awareness</li>
          </ul>
        </div>

        <h3>Success Stories</h3>
        <div class="success-box">
          <h4>✅ Conservation Wins</h4>
          <ul>
            <li><strong>Apo Island, Philippines:</strong> Community-managed marine reserve increased fish biomass by 400%</li>
            <li><strong>Bonaire National Marine Park:</strong> Caribbean reef maintained coral cover through strong protection</li>
            <li><strong>Great Barrier Reef:</strong> Zoning system balances conservation and use across 344,000 km²</li>
            <li><strong>Coral Restoration:</strong> Caribbean Acropora Restoration program planted 90,000+ corals</li>
            <li><strong>Palau:</strong> Created world's sixth-largest marine sanctuary (500,000 km²)</li>
          </ul>
        </div>

        <h3>What You Can Do</h3>
        <div class="action-box">
          <h4>🌊 Individual Actions</h4>
          <ul>
            <li><strong>Reduce Carbon Footprint:</strong> Use renewable energy, reduce consumption, choose sustainable transport</li>
            <li><strong>Use Reef-Safe Products:</strong> Choose mineral-based sunscreens, avoid harmful chemicals</li>
            <li><strong>Sustainable Seafood:</strong> Choose sustainably sourced fish, avoid destructive fisheries</li>
            <li><strong>Responsible Tourism:</strong> Don't touch corals, use mooring buoys, follow guidelines</li>
            <li><strong>Reduce Plastic:</strong> Minimize single-use plastics that end up in oceans</li>
            <li><strong>Support Conservation:</strong> Donate to reef protection organizations</li>
            <li><strong>Raise Awareness:</strong> Educate others about reef importance</li>
            <li><strong>Political Action:</strong> Support policies protecting oceans and addressing climate change</li>
          </ul>
        </div>

        <div class="info-box">
          <h4>🏛️ Major Conservation Organizations</h4>
          <ul>
            <li><strong>Coral Restoration Foundation:</strong> World's largest reef restoration organization</li>
            <li><strong>The Nature Conservancy:</strong> Global coral reef conservation programs</li>
            <li><strong>Reef Check Foundation:</strong> Community-based monitoring and conservation</li>
            <li><strong>Coral Triangle Initiative:</strong> Six-nation partnership protecting marine resources</li>
            <li><strong>50 Reefs Initiative:</strong> Identifying and protecting most resilient reefs</li>
            <li><strong>International Coral Reef Initiative:</strong> UN partnership for reef conservation</li>
          </ul>
        </div>

        <div class="hope-box">
          <h4>💚 Reasons for Hope</h4>
          <p>Despite challenges, there are reasons to be optimistic about coral reef futures:</p>
          <ul>
            <li>Some coral populations show natural heat tolerance and adaptation</li>
            <li>Restoration techniques improving rapidly in effectiveness</li>
            <li>Growing global awareness and political will for ocean protection</li>
            <li>Expanding network of marine protected areas</li>
            <li>Innovative technologies offering new conservation tools</li>
            <li>Successful community-based conservation models emerging</li>
            <li>Resilient reefs recovering when local stressors removed</li>
          </ul>
          <p><strong>With coordinated global action, we can secure a future for coral reefs and the millions who depend on them.</strong></p>
        </div>
      `
    }
  }
};

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = coralReefsData;
}
