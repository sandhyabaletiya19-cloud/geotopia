/**
 * ================================================
 * FORESTS DATA - Part 2 (Forests 51-100)
 * Comprehensive data for world's forests
 * ================================================
 */

const forestsData2 = [
    {
        id: 51,
        name: "Dja Faunal Reserve",
        region: "Cameroon",
        area: 5260,
        image: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800&q=80",
        type: "Tropical Rainforest",
        countries: ["Cameroon"],
        climate: {
            rainfall: "1500-2000mm annually",
            temperature: "23-25°C average",
            humidity: "80-90%"
        },
        biodiversity: {
            animals: ["Western Lowland Gorilla", "Chimpanzee", "Forest Elephant", "Bongo"],
            birds: ["Grey-necked Rockfowl", "Forest Robin"],
            trees: ["African mahogany", "Iroko", "Sapelli"]
        },
        rivers: ["Dja River"],
        indigenous: ["Baka Pygmies"],
        issues: ["Poaching", "Logging concessions", "Mining"],
        conservation: ["UNESCO World Heritage Site", "Biosphere Reserve"],
        coordinates: { lat: 3.0000, lng: 13.0000 },
        description: "The Dja Reserve is one of the largest and best-protected rainforests in Africa, almost completely surrounded by the Dja River."
    },
    {
        id: 52,
        name: "Muir Woods",
        region: "California, USA",
        area: 2.2,
        image: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=800&q=80",
        type: "Temperate Rainforest",
        countries: ["United States"],
        climate: {
            rainfall: "1000-1200mm annually",
            temperature: "10-18°C average",
            humidity: "70-90%"
        },
        biodiversity: {
            animals: ["Black-tailed Deer", "Bobcat", "Banana Slug", "Spotted Owl"],
            birds: ["Steller's Jay", "Spotted Owl", "Winter Wren"],
            trees: ["Coast Redwood", "California Bay Laurel", "Tanoak"]
        },
        rivers: ["Redwood Creek"],
        indigenous: ["Coast Miwok"],
        issues: ["Visitor impact", "Root compaction", "Climate change"],
        conservation: ["National Monument", "UNESCO Biosphere Reserve part"],
        coordinates: { lat: 37.8970, lng: -122.5811 },
        description: "Muir Woods is a small but iconic old-growth coast redwood forest, one of the last remaining near San Francisco."
    },
    {
        id: 53,
        name: "Nyungwe Forest",
        region: "Rwanda",
        area: 1019,
        image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&q=80",
        type: "Tropical Montane Rainforest",
        countries: ["Rwanda"],
        climate: {
            rainfall: "1800-2500mm annually",
            temperature: "15-20°C average",
            humidity: "75-90%"
        },
        biodiversity: {
            animals: ["Chimpanzee", "Ruwenzori Colobus", "L'Hoest's Monkey", "Golden Monkey"],
            birds: ["Great Blue Turaco", "Ruwenzori Turaco", "Red-collared Babbler"],
            trees: ["Mountain forest species", "Orchids", "Giant lobelias"]
        },
        rivers: ["Nile River (source tributaries)"],
        indigenous: ["Batwa"],
        issues: ["Past deforestation (recovered)", "Encroachment threats"],
        conservation: ["National Park", "Source of Nile waters"],
        coordinates: { lat: -2.5000, lng: 29.2500 },
        description: "Nyungwe is one of the oldest montane rainforests in Africa and contains the source of the Nile River."
    },
    {
        id: 54,
        name: "Iwokrama Forest",
        region: "Guyana",
        area: 3710,
        image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=800&q=80",
        type: "Tropical Rainforest",
        countries: ["Guyana"],
        climate: {
            rainfall: "2000-3000mm annually",
            temperature: "25-28°C average",
            humidity: "80-90%"
        },
        biodiversity: {
            animals: ["Jaguar", "Giant Anteater", "Giant Otter", "Harpy Eagle"],
            birds: ["Harpy Eagle", "Scarlet Macaw", "Cock-of-the-rock"],
            trees: ["Greenheart", "Mora", "Wallaba"]
        },
        rivers: ["Essequibo River", "Burro Burro River"],
        indigenous: ["Makushi", "Patamona"],
        issues: ["Mining pressure", "Road impacts"],
        conservation: ["International Centre for Rainforest Conservation"],
        coordinates: { lat: 4.6700, lng: -58.8500 },
        description: "Iwokrama is a unique sustainable forestry and conservation model, maintaining one of the last intact rainforests in South America."
    },
    {
        id: 55,
        name: "Bavarian Forest",
        region: "Germany",
        area: 242,
        image: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&q=80",
        type: "Temperate Mixed Forest",
        countries: ["Germany"],
        climate: {
            rainfall: "1200-1800mm annually",
            temperature: "3-8°C average",
            humidity: "75-85%"
        },
        biodiversity: {
            animals: ["Lynx (reintroduced)", "Wolf", "Red Deer", "Wild Boar"],
            birds: ["Hazel Grouse", "Pygmy Owl", "Three-toed Woodpecker"],
            trees: ["Norway Spruce", "European Beech", "Silver Fir"]
        },
        rivers: ["Ilz River", "Regen River"],
        indigenous: ["Celtic tribes (historic)"],
        issues: ["Bark beetle (natural process allowed)", "Climate change"],
        conservation: ["First German National Park (1970)"],
        coordinates: { lat: 49.0000, lng: 13.3000 },
        description: "Germany's first national park allows natural processes, including bark beetle outbreaks, to shape the forest ecosystem."
    },
    {
        id: 56,
        name: "Belum-Temengor Forest",
        region: "Malaysia",
        area: 1175,
        image: "https://images.unsplash.com/photo-1586348943529-beaae6c28db9?w=800&q=80",
        type: "Tropical Rainforest",
        countries: ["Malaysia"],
        climate: {
            rainfall: "2500-3000mm annually",
            temperature: "24-30°C average",
            humidity: "80-90%"
        },
        biodiversity: {
            animals: ["Malayan Tiger", "Asian Elephant", "Sun Bear", "Tapir"],
            birds: ["Rhinoceros Hornbill", "Great Argus", "Malaysian Peacock-pheasant"],
            trees: ["Rafflesia (world's largest flower)", "Dipterocarp species"]
        },
        rivers: ["Perak River"],
        indigenous: ["Jahai", "Temiar"],
        issues: ["Logging pressure", "Dam impacts", "Poaching"],
        conservation: ["Royal Belum State Park", "Wildlife corridor"],
        coordinates: { lat: 5.5000, lng: 101.3000 },
        description: "Belum-Temengor is 130 million years old, even older than the Amazon, and is Malaysia's largest remaining forest complex."
    },
    {
        id: 57,
        name: "Cat Tien National Park",
        region: "Vietnam",
        area: 720,
        image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80",
        type: "Tropical Rainforest",
        countries: ["Vietnam"],
        climate: {
            rainfall: "2500-3000mm annually",
            temperature: "24-28°C average",
            humidity: "80-90%"
        },
        biodiversity: {
            animals: ["Gaur", "Asian Elephant", "Sun Bear", "Siamese Crocodile", "Pygmy Slow Loris"],
            birds: ["Orange-necked Partridge", "Germain's Peacock-pheasant"],
            trees: ["Dipterocarp", "Lagerstroemia", "Bamboo"]
        },
        rivers: ["Dong Nai River"],
        indigenous: ["Ma people", "Stieng"],
        issues: ["Agent Orange legacy", "Illegal logging", "Poaching"],
        conservation: ["UNESCO Biosphere Reserve"],
        coordinates: { lat: 11.4200, lng: 107.4200 },
        description: "Cat Tien is one of Vietnam's most important protected areas, recovering from the effects of the Vietnam War."
    },
    {
        id: 58,
        name: "Virunga Mountains Forest",
        region: "Rwanda, Uganda, DRC",
        area: 450,
        image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&q=80",
        type: "Tropical Montane Forest",
        countries: ["Rwanda", "Uganda", "Democratic Republic of Congo"],
        climate: {
            rainfall: "1800-2200mm annually",
            temperature: "10-15°C average",
            humidity: "80-95%"
        },
        biodiversity: {
            animals: ["Mountain Gorilla (1,000+ individuals)", "Golden Monkey", "Forest Elephant", "Buffalo"],
            birds: ["Ruwenzori Turaco", "Handsome Francolin"],
            trees: ["Hagenia", "Hypericum", "Bamboo", "Giant lobelia"]
        },
        rivers: ["Sources of Nile tributaries"],
        indigenous: ["Batwa Pygmies"],
        issues: ["Political instability (DRC)", "Human pressure", "Poaching"],
        conservation: ["Virunga NP (UNESCO)", "Volcanoes NP", "Mgahinga NP"],
        coordinates: { lat: -1.4500, lng: 29.5000 },
        description: "The Virunga Mountains harbor the world's remaining mountain gorillas, one of conservation's greatest success stories."
    },
    {
        id: 59,
        name: "Chattahoochee National Forest",
        region: "Georgia, USA",
        area: 3117,
        image: "https://images.unsplash.com/photo-1508193638397-1c4234db14d8?w=800&q=80",
        type: "Temperate Deciduous Forest",
        countries: ["United States"],
        climate: {
            rainfall: "1200-1800mm annually",
            temperature: "10-18°C average",
            humidity: "65-80%"
        },
        biodiversity: {
            animals: ["Black Bear", "White-tailed Deer", "Wild Turkey", "Eastern Box Turtle"],
            birds: ["Pileated Woodpecker", "Scarlet Tanager", "Wood Thrush"],
            trees: ["Oak", "Hickory", "Poplar", "Pine"]
        },
        rivers: ["Chattahoochee River (source)", "Toccoa River"],
        indigenous: ["Cherokee"],
        issues: ["Urban encroachment", "Invasive species"],
        conservation: ["National Forest", "Appalachian Trail"],
        coordinates: { lat: 34.7000, lng: -84.0000 },
        description: "The Chattahoochee contains the southernmost extent of the Appalachian Mountains and the beginning of the Appalachian Trail."
    },
    {
        id: 60,
        name: "Manu National Park",
        region: "Peru",
        area: 17163,
        image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=800&q=80",
        type: "Tropical Rainforest",
        countries: ["Peru"],
        climate: {
            rainfall: "2000-4000mm annually",
            temperature: "24-28°C average",
            humidity: "80-95%"
        },
        biodiversity: {
            animals: ["Jaguar", "Giant Otter", "Spectacled Bear", "13 monkey species", "Tapir"],
            birds: ["Over 1000 species", "Macaws", "Cock-of-the-rock"],
            trees: ["Giant ceiba", "Mahogany", "Brazil nut"]
        },
        rivers: ["Manu River", "Madre de Dios River"],
        indigenous: ["Matsigenka", "Uncontacted tribes"],
        issues: ["Illegal gold mining nearby", "Road threats"],
        conservation: ["UNESCO World Heritage Site", "Biosphere Reserve"],
        coordinates: { lat: -11.8500, lng: -71.4500 },
        description: "Manu contains more biodiversity than almost any other place on Earth, with over 1000 bird species and uncontacted indigenous tribes."
    },
    {
        id: 61,
        name: "Epping Forest",
        region: "England, UK",
        area: 24,
        image: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=800&q=80",
        type: "Temperate Deciduous Forest",
        countries: ["United Kingdom"],
        climate: {
            rainfall: "600-700mm annually",
            temperature: "9-11°C average",
            humidity: "75-85%"
        },
        biodiversity: {
            animals: ["Fallow Deer", "Muntjac", "Fox", "Badger"],
            birds: ["Woodpecker", "Nuthatch", "Treecreeper"],
            trees: ["Beech", "Oak", "Hornbeam (ancient pollards)"]
        },
        rivers: ["Lea Valley streams"],
        indigenous: ["Iron Age settlements (historic)"],
        issues: ["Visitor pressure", "Air pollution", "Invasive species"],
        conservation: ["Ancient Forest", "Site of Special Scientific Interest"],
        coordinates: { lat: 51.6500, lng: 0.0500 },
        description: "Epping Forest is an ancient wood pasture with pollarded trees and has been protected since 1878 as a public open space."
    },
    {
        id: 62,
        name: "Yasuni National Park",
        region: "Ecuador",
        area: 9820,
        image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=800&q=80",
        type: "Tropical Rainforest",
        countries: ["Ecuador"],
        climate: {
            rainfall: "2500-3500mm annually",
            temperature: "24-27°C average",
            humidity: "85-95%"
        },
        biodiversity: {
            animals: ["Jaguar", "Giant Armadillo", "Pink River Dolphin", "White-bellied Spider Monkey"],
            birds: ["Harpy Eagle", "Scarlet Macaw", "596 bird species"],
            trees: ["4000+ plant species per hectare (record)"]
        },
        rivers: ["Tiputini River", "Yasuní River"],
        indigenous: ["Waorani", "Tagaeri", "Taromenane (uncontacted)"],
        issues: ["Oil extraction", "Road construction", "Indigenous rights"],
        conservation: ["UNESCO Biosphere Reserve", "Most biodiverse place on Earth"],
        coordinates: { lat: -1.0000, lng: -75.5000 },
        description: "Yasuni is considered the most biodiverse place on the planet, with more species per hectare than anywhere else."
    },
    {
        id: 63,
        name: "Danum Valley Conservation Area",
        region: "Sabah, Malaysia",
        area: 438,
        image: "https://images.unsplash.com/photo-1572099606223-6e29045d7de3?w=800&q=80",
        type: "Tropical Lowland Rainforest",
        countries: ["Malaysia"],
        climate: {
            rainfall: "2700mm annually",
            temperature: "26-32°C average",
            humidity: "85-95%"
        },
        biodiversity: {
            animals: ["Bornean Orangutan", "Clouded Leopard", "Bornean Pygmy Elephant", "Sun Bear"],
            birds: ["Great Argus", "Rhinoceros Hornbill", "Bornean Bristlehead"],
            trees: ["Dipterocarp (70m tall)", "Strangler figs"]
        },
        rivers: ["Segama River"],
        indigenous: ["Dusun"],
        issues: ["Surrounding logging", "Isolation effects"],
        conservation: ["Class I Protection Forest", "Research station"],
        coordinates: { lat: 5.0000, lng: 117.8000 },
        description: "Danum Valley is one of the world's most complex ecosystems, with pristine primary rainforest never logged."
    },
    {
        id: 64,
        name: "Tai National Park",
        region: "Côte d'Ivoire",
        area: 5364,
        image: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800&q=80",
        type: "Tropical Rainforest",
        countries: ["Côte d'Ivoire"],
        climate: {
            rainfall: "1800-2200mm annually",
            temperature: "24-28°C average",
            humidity: "80-90%"
        },
        biodiversity: {
            animals: ["Chimpanzee (tool-using population)", "Pygmy Hippo", "Leopard", "Diana Monkey"],
            birds: ["White-breasted Guineafowl", "Yellow-casqued Hornbill"],
            trees: ["Large emergent trees", "Epiphytes"]
        },
        rivers: ["Cavally River", "Hana River"],
        indigenous: ["Guéré", "Wobé"],
        issues: ["Poaching", "Illegal logging", "Cocoa farming"],
        conservation: ["UNESCO World Heritage Site", "Biosphere Reserve"],
        coordinates: { lat: 5.7500, lng: -7.1500 },
        description: "Tai is the largest remaining tropical rainforest in West Africa and home to famous tool-using chimpanzees."
    },
    {
        id: 65,
        name: "Białowieża Primeval Forest",
        region: "Poland/Belarus",
        area: 1500,
        image: "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?w=800&q=80",
        type: "Temperate Primeval Forest",
        countries: ["Poland", "Belarus"],
        climate: {
            rainfall: "600-700mm annually",
            temperature: "6-8°C average",
            humidity: "75-85%"
        },
        biodiversity: {
            animals: ["European Bison (900+)", "Wolf", "Lynx", "Wild Boar"],
            birds: ["White-backed Woodpecker", "Pygmy Owl", "Eagles"],
            trees: ["500-year-old oaks", "Lime", "Hornbeam"]
        },
        rivers: ["Narew River"],
        indigenous: ["Slavic settlements"],
        issues: ["Logging controversies", "Political tensions"],
        conservation: ["UNESCO World Heritage Site"],
        coordinates: { lat: 52.7500, lng: 23.8500 },
        description: "The last remaining fragment of the primeval forest that covered the European Plain, home to Europe's largest land mammal."
    },
    {
        id: 66,
        name: "Gondwana Rainforests",
        region: "Australia",
        area: 3665,
        image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&q=80",
        type: "Subtropical/Temperate Rainforest",
        countries: ["Australia"],
        climate: {
            rainfall: "1500-3000mm annually",
            temperature: "15-25°C average",
            humidity: "70-90%"
        },
        biodiversity: {
            animals: ["Platypus", "Koala", "Parma Wallaby", "Albert's Lyrebird"],
            birds: ["Albert's Lyrebird", "Rufous Scrub-bird", "Paradise Riflebird"],
            trees: ["Antarctic Beech", "Hoop Pine", "Bunya Pine"]
        },
        rivers: ["Richmond River", "Clarence River"],
        indigenous: ["Bundjalung", "Gumbaynggirr"],
        issues: ["Fragmentation", "Weeds", "Climate change"],
        conservation: ["UNESCO World Heritage Site", "Multiple national parks"],
        coordinates: { lat: -28.5000, lng: 153.0000 },
        description: "These rainforests contain the most extensive subtropical rainforest in the world and direct links to Gondwana."
    },
    {
        id: 67,
        name: "Primorsky Krai Forests",
        region: "Russia",
        area: 40000,
        image: "https://images.unsplash.com/photo-1476231682828-37e571bc172f?w=800&q=80",
        type: "Temperate Mixed Forest",
        countries: ["Russia"],
        climate: {
            rainfall: "600-900mm annually",
            temperature: "-15 to 22°C (seasonal)",
            humidity: "60-80%"
        },
        biodiversity: {
            animals: ["Amur Tiger", "Amur Leopard", "Asiatic Black Bear", "Sika Deer"],
            birds: ["Blakiston's Fish Owl", "Scaly-sided Merganser"],
            trees: ["Korean Pine", "Mongolian Oak", "Manchurian Ash"]
        },
        rivers: ["Ussuri River", "Bikin River"],
        indigenous: ["Udege", "Nanai"],
        issues: ["Logging", "Poaching", "Forest fires"],
        conservation: ["Bikin River Tiger Reserve", "Land of the Leopard NP"],
        coordinates: { lat: 44.0000, lng: 135.0000 },
        description: "Home to the critically endangered Amur leopard and Amur tiger, this is one of the most biodiverse temperate forests in the world."
    },
    {
        id: 68,
        name: "Scottish Highlands Caledonian Forest",
        region: "Scotland, UK",
        area: 180,
        image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=800&q=80",
        type: "Boreal/Temperate Forest",
        countries: ["United Kingdom"],
        climate: {
            rainfall: "1000-3000mm annually",
            temperature: "5-12°C average",
            humidity: "75-90%"
        },
        biodiversity: {
            animals: ["Red Squirrel", "Pine Marten", "Red Deer", "Wildcat (rare)"],
            birds: ["Capercaillie", "Scottish Crossbill", "Crested Tit"],
            trees: ["Scots Pine", "Birch", "Rowan", "Juniper"]
        },
        rivers: ["Spey River", "Dee River"],
        indigenous: ["Picts (historic)"],
        issues: ["Only 1% remains", "Deer overgrazing", "Regeneration challenges"],
        conservation: ["Cairngorms NP", "Rewilding projects"],
        coordinates: { lat: 57.0000, lng: -5.0000 },
        description: "Fragments of the ancient Caledonian Forest that once covered much of Scotland, now the focus of major rewilding efforts."
    },
    {
        id: 69,
        name: "Parque Nacional da Serra da Bocaina",
        region: "Brazil",
        area: 1040,
        image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&q=80",
        type: "Atlantic Forest",
        countries: ["Brazil"],
        climate: {
            rainfall: "2000-2500mm annually",
            temperature: "18-25°C average",
            humidity: "80-90%"
        },
        biodiversity: {
            animals: ["Muriqui (Woolly Spider Monkey)", "Ocelot", "Maned Sloth"],
            birds: ["Black-fronted Piping Guan", "Seven-colored Tanager"],
            trees: ["Araucaria", "Various Atlantic Forest endemics"]
        },
        rivers: ["Mambucaba River"],
        indigenous: ["Guarani"],
        issues: ["Fragmentation", "Illegal hunting"],
        conservation: ["National Park", "Atlantic Forest Biosphere Reserve"],
        coordinates: { lat: -23.0000, lng: -44.5000 },
        description: "One of the largest protected areas of Atlantic Forest, linking mountains to coast through diverse ecosystems."
    },
    {
        id: 70,
        name: "Budongo Forest",
        region: "Uganda",
        area: 825,
        image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&q=80",
        type: "Tropical Rainforest",
        countries: ["Uganda"],
        climate: {
            rainfall: "1500-1800mm annually",
            temperature: "22-28°C average",
            humidity: "75-85%"
        },
        biodiversity: {
            animals: ["Chimpanzee (600+)", "Blue Monkey", "Olive Baboon", "Bush Baby"],
            birds: ["Chocolate-backed Kingfisher", "Yellow-footed Flycatcher"],
            trees: ["Mahogany", "Ironwood", "Fig trees"]
        },
        rivers: ["Sonso River"],
        indigenous: ["Local communities"],
        issues: ["Logging history", "Encroachment"],
        conservation: ["Forest Reserve", "Chimpanzee research site"],
        coordinates: { lat: 1.7500, lng: 31.5500 },
        description: "Budongo is Uganda's largest mahogany forest and home to one of East Africa's largest chimpanzee populations."
    },
    {
        id: 71,
        name: "Sherbrooke Forest",
        region: "Victoria, Australia",
        area: 22,
        image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&q=80",
        type: "Temperate Rainforest",
        countries: ["Australia"],
        climate: {
            rainfall: "1300mm annually",
            temperature: "10-20°C average",
            humidity: "70-85%"
        },
        biodiversity: {
            animals: ["Superb Lyrebird", "Wombat", "Platypus", "Sugar Glider"],
            birds: ["Superb Lyrebird", "King Parrot", "Crimson Rosella"],
            trees: ["Mountain Ash (tallest flowering plant)", "Tree Ferns", "Sassafras"]
        },
        rivers: ["Sherbrooke Creek"],
        indigenous: ["Wurundjeri"],
        issues: ["Urban edge effects", "Fire management"],
        conservation: ["Dandenong Ranges National Park"],
        coordinates: { lat: -37.8800, lng: 145.3500 },
        description: "Sherbrooke is famous for its Superb Lyrebirds, which mimic sounds including chainsaws and camera shutters."
    },
    {
        id: 72,
        name: "Ankarana Reserve",
        region: "Madagascar",
        area: 182,
        image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80",
        type: "Dry Deciduous Forest",
        countries: ["Madagascar"],
        climate: {
            rainfall: "1500-2000mm annually",
            temperature: "25-30°C average",
            humidity: "60-80%"
        },
        biodiversity: {
            animals: ["Crowned Lemur", "Sanford's Brown Lemur", "Fossa", "Leaf-tailed Geckos"],
            birds: ["Madagascar Fish Eagle", "Vanga species"],
            trees: ["Deciduous species", "Canyon vegetation"]
        },
        rivers: ["Underground rivers"],
        indigenous: ["Antakarana people"],
        issues: ["Sapphire mining", "Fire", "Hunting"],
        conservation: ["Special Reserve", "Tsingy limestone formations"],
        coordinates: { lat: -12.9500, lng: 49.1000 },
        description: "Ankarana features spectacular tsingy (limestone karst) formations with dry forest and caves containing crocodiles."
    },
    {
        id: 73,
        name: "El Yunque National Forest",
        region: "Puerto Rico, USA",
        area: 113,
        image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=800&q=80",
        type: "Tropical Rainforest",
        countries: ["United States (Puerto Rico)"],
        climate: {
            rainfall: "3000-5000mm annually",
            temperature: "21-25°C average",
            humidity: "85-95%"
        },
        biodiversity: {
            animals: ["Puerto Rican Parrot (critically endangered)", "Coquí frog", "Puerto Rican Boa"],
            birds: ["Puerto Rican Parrot", "Elfin Woods Warbler", "Puerto Rican Lizard Cuckoo"],
            trees: ["Sierra Palm", "Tabonuco", "Colorado tree"]
        },
        rivers: ["La Mina River", "Espíritu Santo River"],
        indigenous: ["Taíno (historic)"],
        issues: ["Hurricane damage", "Invasive species", "Climate change"],
        conservation: ["Only tropical rainforest in US National Forest System"],
        coordinates: { lat: 18.3000, lng: -65.8000 },
        description: "El Yunque is the only tropical rainforest in the US National Forest System and home to the endangered Puerto Rican Parrot."
    },
    {
        id: 74,
        name: "Lopé National Park",
        region: "Gabon",
        area: 4913,
        image: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800&q=80",
        type: "Tropical Rainforest/Savanna",
        countries: ["Gabon"],
        climate: {
            rainfall: "1500-2000mm annually",
            temperature: "24-28°C average",
            humidity: "80-90%"
        },
        biodiversity: {
            animals: ["Western Lowland Gorilla", "Forest Elephant", "Mandrill", "Chimpanzee"],
            birds: ["Grey-necked Rockfowl", "Forest species"],
            trees: ["Okoumé", "Rainforest species", "Savanna grasslands"]
        },
        rivers: ["Ogooué River"],
        indigenous: ["Pygmy groups"],
        issues: ["Poaching", "Logging surrounding areas"],
        conservation: ["UNESCO World Heritage Site", "Archaeological sites"],
        coordinates: { lat: -0.5000, lng: 11.5000 },
        description: "Lopé uniquely combines rainforest with relict savanna, containing both forest wildlife and archaeological sites from 400,000 years ago."
    },
    {
        id: 75,
        name: "Odzala-Kokoua National Park",
        region: "Republic of Congo",
        area: 13546,
        image: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800&q=80",
        type: "Tropical Rainforest",
        countries: ["Republic of Congo"],
        climate: {
            rainfall: "1500-1800mm annually",
            temperature: "24-27°C average",
            humidity: "80-90%"
        },
        biodiversity: {
            animals: ["Western Lowland Gorilla (highest density)", "Forest Elephant", "Bongo", "Forest Buffalo"],
            birds: ["Congo Grey Parrot", "Forest species"],
            trees: ["Rainforest canopy", "Clearings (bais)"]
        },
        rivers: ["Lekoli River", "Mambili River"],
        indigenous: ["BaAka Pygmies"],
        issues: ["Ebola outbreaks affecting gorillas", "Poaching"],
        conservation: ["Africa's oldest national park (1935)"],
        coordinates: { lat: 1.3000, lng: 14.8000 },
        description: "Odzala has the highest density of western lowland gorillas in the world and spectacular forest clearings for wildlife viewing."
    },
    {
        id: 76,
        name: "Araucaria Forest",
        region: "Brazil/Argentina",
        area: 2000,
        image: "https://images.unsplash.com/photo-1511497584788-876760111969?w=800&q=80",
        type: "Subtropical Highland Forest",
        countries: ["Brazil", "Argentina"],
        climate: {
            rainfall: "1500-2000mm annually",
            temperature: "12-18°C average",
            humidity: "75-85%"
        },
        biodiversity: {
            animals: ["Vinaceous Amazon Parrot", "Brown Howler Monkey", "Puma"],
            birds: ["Vinaceous Amazon", "Azure Jay"],
            trees: ["Araucaria angustifolia (Parana Pine)", "Yerba Mate"]
        },
        rivers: ["Iguaçu River tributaries"],
        indigenous: ["Guarani", "Kaingang"],
        issues: ["Only 3% remains", "Continued logging"],
        conservation: ["Araucárias National Park", "Various reserves"],
        coordinates: { lat: -26.0000, lng: -51.0000 },
        description: "The Araucaria forest is critically endangered, with only 3% of original extent remaining, dominated by ancient monkey-puzzle relatives."
    },
    {
        id: 77,
        name: "Sepilok Forest Reserve",
        region: "Sabah, Malaysia",
        area: 43,
        image: "https://images.unsplash.com/photo-1586348943529-beaae6c28db9?w=800&q=80",
        type: "Tropical Lowland Rainforest",
        countries: ["Malaysia"],
        climate: {
            rainfall: "3000mm annually",
            temperature: "26-32°C average",
            humidity: "80-95%"
        },
        biodiversity: {
            animals: ["Bornean Orangutan", "Proboscis Monkey", "Sun Bear", "Pygmy Elephant"],
            birds: ["Hornbills", "Kingfishers", "Pittas"],
            trees: ["Dipterocarp", "Fig trees", "Mangroves"]
        },
        rivers: ["Sepilok Bay"],
        indigenous: ["Local communities"],
        issues: ["Small size", "Edge effects"],
        conservation: ["Orangutan Rehabilitation Centre", "Sun Bear Conservation Centre"],
        coordinates: { lat: 5.8500, lng: 117.9500 },
        description: "Sepilok is world-famous for its orangutan rehabilitation program, helping orphaned orangutans return to the wild."
    },
    {
        id: 78,
        name: "Yakushima Cedar Forest",
        region: "Japan",
        area: 107,
        image: "https://images.unsplash.com/photo-1528164344705-47542687000d?w=800&q=80",
        type: "Temperate/Subtropical",
        countries: ["Japan"],
        climate: {
            rainfall: "4000-10000mm annually",
            temperature: "15-22°C average",
            humidity: "80-95%"
        },
        biodiversity: {
            animals: ["Yakushima Macaque", "Yakushima Deer", "Giant Flying Squirrel"],
            birds: ["Ryukyu Robin", "Japanese Wood Pigeon"],
            trees: ["Yakusugi (ancient cedars 1000+ years)", "Jomon Sugi (7000 years)"]
        },
        rivers: ["Anbo River", "Miyanoura River"],
        indigenous: ["Jomon people (prehistoric)"],
        issues: ["Tourism pressure", "Deer browsing"],
        conservation: ["UNESCO World Heritage Site"],
        coordinates: { lat: 30.3500, lng: 130.5000 },
        description: "Yakushima contains Japan's oldest trees, including Jomon Sugi estimated at 2,000-7,000 years old, inspiring Princess Mononoke."
    },
    {
        id: 79,
        name: "Sundarbans Mangrove Forest",
        region: "India/Bangladesh",
        area: 10000,
        image: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=800&q=80",
        type: "Mangrove Forest",
        countries: ["India", "Bangladesh"],
        climate: {
            rainfall: "1600-2000mm annually",
            temperature: "20-34°C",
            humidity: "70-85%"
        },
        biodiversity: {
            animals: ["Royal Bengal Tiger (mangrove-adapted)", "Saltwater Crocodile", "Ganges River Dolphin"],
            birds: ["Lesser Adjutant", "White-bellied Sea Eagle", "Kingfishers"],
            trees: ["Sundari (Heritiera fomes)", "Gewa", "Goran", "Keora"]
        },
        rivers: ["Ganges Delta distributaries"],
        indigenous: ["Munda", "Santhal"],
        issues: ["Rising sea levels", "Cyclones", "Tiger-human conflict"],
        conservation: ["UNESCO World Heritage Site (both countries)", "Tiger Reserve"],
        coordinates: { lat: 21.9500, lng: 89.1800 },
        description: "The world's largest mangrove forest, where tigers swim between islands and the landscape constantly shifts with the tides."
    },
    {
        id: 80,
        name: "Wolong National Nature Reserve",
        region: "Sichuan, China",
        area: 2000,
        image: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=800&q=80",
        type: "Temperate Montane Forest",
        countries: ["China"],
        climate: {
            rainfall: "800-900mm annually",
            temperature: "8-17°C average",
            humidity: "70-85%"
        },
        biodiversity: {
            animals: ["Giant Panda (150+)", "Red Panda", "Golden Snub-nosed Monkey", "Takin"],
            birds: ["Golden Pheasant", "Lady Amherst's Pheasant"],
            trees: ["Bamboo (panda food)", "Spruce", "Fir", "Birch"]
        },
        rivers: ["Pitiao River"],
        indigenous: ["Qiang people"],
        issues: ["2008 earthquake damage", "Road construction", "Climate change"],
        conservation: ["UNESCO Biosphere Reserve", "Panda breeding center"],
        coordinates: { lat: 31.0000, lng: 103.2000 },
        description: "Wolong is the most famous giant panda reserve, home to over 150 wild pandas and a major captive breeding program."
    },
    {
        id: 81,
        name: "Andringitra National Park",
        region: "Madagascar",
        area: 311,
        image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80",
        type: "Montane Rainforest/Grassland",
        countries: ["Madagascar"],
        climate: {
            rainfall: "1500-2000mm annually",
            temperature: "10-25°C (varies with altitude)",
            humidity: "70-85%"
        },
        biodiversity: {
            animals: ["Ring-tailed Lemur", "Diademed Sifaka", "Fossa"],
            birds: ["Benson's Rock Thrush", "Yellow-bellied Sunbird-asity"],
            trees: ["Montane forest", "High altitude scrub"]
        },
        rivers: ["Zomandao River"],
        indigenous: ["Betsileo people"],
        issues: ["Fire", "Grazing", "Climate change"],
        conservation: ["UNESCO World Heritage Site component"],
        coordinates: { lat: -22.2000, lng: 47.0000 },
        description: "Andringitra contains Madagascar's second-highest peak and unique high-altitude ecosystems found nowhere else."
    },
    {
        id: 82,
        name: "Los Llanos de Mojos",
        region: "Bolivia",
        area: 126100,
        image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80",
        type: "Flooded Forest/Savanna",
        countries: ["Bolivia"],
        climate: {
            rainfall: "1500-2000mm annually",
            temperature: "26-28°C average",
            humidity: "75-90%"
        },
        biodiversity: {
            animals: ["Marsh Deer", "Giant Anteater", "Maned Wolf", "Giant Otter"],
            birds: ["Hyacinth Macaw", "Jabiru", "Southern Screamer"],
            trees: ["Gallery forest", "Moriche palm", "Flooded forest"]
        },
        rivers: ["Mamoré River", "Beni River"],
        indigenous: ["Moxeño", "Ancient raised-field builders"],
        issues: ["Cattle ranching", "Fire", "Soy expansion"],
        conservation: ["Beni Biosphere Reserve"],
        coordinates: { lat: -14.0000, lng: -65.5000 },
        description: "A vast flooded grassland with forest islands, containing pre-Columbian earthworks and exceptional waterbird concentrations."
    },
    {
        id: 83,
        name: "Khao Yai National Park",
        region: "Thailand",
        area: 2168,
        image: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?w=800&q=80",
        type: "Tropical Rainforest",
        countries: ["Thailand"],
        climate: {
            rainfall: "2000-3000mm annually",
            temperature: "20-30°C average",
            humidity: "80-90%"
        },
        biodiversity: {
            animals: ["Asian Elephant", "Gaur", "Sambar Deer", "Gibbons", "Hornbills"],
            birds: ["Great Hornbill", "Wreathed Hornbill", "Siamese Fireback"],
            trees: ["Dipterocarp", "Bamboo", "Various hardwoods"]
        },
        rivers: ["Nakhon Nayok River sources"],
        indigenous: ["Local communities"],
        issues: ["Tourism pressure", "Poaching (reduced)"],
        conservation: ["UNESCO World Heritage Site", "Thailand's first national park"],
        coordinates: { lat: 14.4500, lng: 101.4000 },
        description: "Thailand's first national park (1962), Khao Yai forms part of the Dong Phayayen-Khao Yai Forest Complex World Heritage Site."
    },
    {
        id: 84,
        name: "Aokigahara Forest",
        region: "Japan",
        area: 35,
        image: "https://images.unsplash.com/photo-1528164344705-47542687000d?w=800&q=80",
        type: "Temperate Forest",
        countries: ["Japan"],
        climate: {
            rainfall: "1500mm annually",
            temperature: "6-22°C average",
            humidity: "70-85%"
        },
        biodiversity: {
            animals: ["Japanese Marten", "Asian Black Bear", "Japanese Serow"],
            birds: ["Various forest birds"],
            trees: ["Japanese Hemlock", "Hinoki Cypress", "Fuji Cherry"]
        },
        rivers: ["None (porous lava substrate)"],
        indigenous: ["Ainu (historic connection to region)"],
        issues: ["Reputation issues", "Forest management"],
        conservation: ["Part of Fuji-Hakone-Izu National Park"],
        coordinates: { lat: 35.4700, lng: 138.6200 },
        description: "Growing on the lava flows from Mount Fuji, Aokigahara is a dense, quiet forest with unique geological and ecological features."
    },
    {
        id: 85,
        name: "Cockscomb Basin Wildlife Sanctuary",
        region: "Belize",
        area: 518,
        image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80",
        type: "Tropical Rainforest",
        countries: ["Belize"],
        climate: {
            rainfall: "2500-3500mm annually",
            temperature: "24-28°C average",
            humidity: "80-90%"
        },
        biodiversity: {
            animals: ["Jaguar (highest density)", "Tapir", "Margay", "Ocelot"],
            birds: ["Scarlet Macaw", "King Vulture", "Keel-billed Toucan"],
            trees: ["Mahogany", "Sapodilla", "Cohune Palm"]
        },
        rivers: ["Cockscomb Branch of South Stann Creek"],
        indigenous: ["Maya (historic)"],
        issues: ["Hurricane damage", "Climate change"],
        conservation: ["World's first jaguar preserve"],
        coordinates: { lat: 16.8500, lng: -88.4000 },
        description: "The world's first jaguar preserve, Cockscomb has one of the highest jaguar densities anywhere, though cats are rarely seen."
    },
    {
        id: 86,
        name: "Namdapha National Park",
        region: "Arunachal Pradesh, India",
        area: 1985,
        image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&q=80",
        type: "Tropical/Subtropical Rainforest",
        countries: ["India"],
        climate: {
            rainfall: "2500-4500mm annually",
            temperature: "10-35°C (varies with altitude)",
            humidity: "75-95%"
        },
        biodiversity: {
            animals: ["Clouded Leopard", "Snow Leopard", "Hoolock Gibbon", "All 4 big cats of India"],
            birds: ["White-winged Wood Duck", "Blyth's Tragopan"],
            trees: ["Pinus merkusii (southernmost)", "Tropical species"]
        },
        rivers: ["Noa-Dihing River"],
        indigenous: ["Lisu", "Singpho"],
        issues: ["Insurgency (historic)", "Hunting", "Limited research"],
        conservation: ["Tiger Reserve", "Elephant Reserve"],
        coordinates: { lat: 27.5000, lng: 96.4000 },
        description: "Namdapha is the only park in the world that has four big cat species: tiger, leopard, clouded leopard, and snow leopard."
    },
    {
        id: 87,
        name: "Wuyi Mountains",
        region: "Fujian, China",
        area: 1100,
        image: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=800&q=80",
        type: "Subtropical Forest",
        countries: ["China"],
        climate: {
            rainfall: "2000mm annually",
            temperature: "12-22°C average",
            humidity: "75-85%"
        },
        biodiversity: {
            animals: ["Chinese Tiger (historic)", "Clouded Leopard", "Black Bear"],
            birds: ["Silver Pheasant", "Cabot's Tragopan"],
            trees: ["Tea plants (original Oolong/Black tea)", "Subtropical species"]
        },
        rivers: ["Nine Bends River"],
        indigenous: ["Min people"],
        issues: ["Tourism development", "Climate change"],
        conservation: ["UNESCO World Heritage Site (mixed)"],
        coordinates: { lat: 27.7000, lng: 117.7000 },
        description: "Wuyi is both a natural and cultural UNESCO site, being the birthplace of Oolong tea and containing outstanding biodiversity."
    },
    {
        id: 88,
        name: "Guiana Highlands",
        region: "Venezuela/Guyana/Brazil",
        area: 250000,
        image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=800&q=80",
        type: "Tropical Montane Forest",
        countries: ["Venezuela", "Guyana", "Brazil"],
        climate: {
            rainfall: "2000-4000mm annually",
            temperature: "18-27°C (varies with altitude)",
            humidity: "80-95%"
        },
        biodiversity: {
            animals: ["Giant Anteater", "Tepui fauna (endemic)", "Guianan Cock-of-the-rock"],
            birds: ["Tepui endemics", "Cock-of-the-rock", "Harpy Eagle"],
            trees: ["Tepui summit flora", "Carnivorous plants", "Cloud forest"]
        },
        rivers: ["Angel Falls (world's highest)", "Carrao River"],
        indigenous: ["Pemon", "Yanomami"],
        issues: ["Mining", "Climate change", "Access"],
        conservation: ["Canaima National Park (UNESCO)", "Various reserves"],
        coordinates: { lat: 5.0000, lng: -62.0000 },
        description: "The Tepuis (table-top mountains) of the Guiana Highlands inspired 'The Lost World' and harbor numerous endemic species."
    },
    {
        id: 89,
        name: "Papuk Nature Park",
        region: "Croatia",
        area: 336,
        image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=800&q=80",
        type: "Temperate Deciduous Forest",
        countries: ["Croatia"],
        climate: {
            rainfall: "800-1100mm annually",
            temperature: "8-12°C average",
            humidity: "70-80%"
        },
        biodiversity: {
            animals: ["Red Deer", "Wild Boar", "Roe Deer", "Fire Salamander"],
            birds: ["Black Stork", "Lesser Spotted Eagle"],
            trees: ["Beech", "Oak", "Silver Fir", "Hornbeam"]
        },
        rivers: ["Papuk streams"],
        indigenous: ["Illyrian settlements (historic)"],
        issues: ["Depopulation of villages", "Forest management"],
        conservation: ["UNESCO Global Geopark", "Nature Park"],
        coordinates: { lat: 45.5000, lng: 17.6000 },
        description: "Papuk is a geologically diverse mountain with ancient forests and unique rock formations forming a UNESCO Geopark."
    },
    {
        id: 90,
        name: "Sulawesi Rainforest",
        region: "Indonesia",
        area: 60000,
        image: "https://images.unsplash.com/photo-1572099606223-6e29045d7de3?w=800&q=80",
        type: "Tropical Rainforest",
        countries: ["Indonesia"],
        climate: {
            rainfall: "2000-3500mm annually",
            temperature: "26-32°C average",
            humidity: "80-90%"
        },
        biodiversity: {
            animals: ["Babirusa", "Anoa", "Sulawesi Crested Macaque", "Tarsier"],
            birds: ["Maleo", "Sulawesi Hornbill", "Sulawesi endemics"],
            trees: ["Ebony", "Dipterocarp", "Various palms"]
        },
        rivers: ["Lake Poso drainage", "Lariang River"],
        indigenous: ["Toraja", "To Wana", "Bajo"],
        issues: ["Logging", "Mining", "Wildlife trade"],
        conservation: ["Lore Lindu NP", "Tangkoko Reserve"],
        coordinates: { lat: -1.5000, lng: 121.0000 },
        description: "Sulawesi's unusual shape created unique biogeography with endemic species related to both Asian and Australian fauna."
    },
    {
        id: 91,
        name: "Table Mountain Forest",
        region: "South Africa",
        area: 221,
        image: "https://images.unsplash.com/photo-1516655855035-d5215bcb5604?w=800&q=80",
        type: "Fynbos/Afromontane Forest",
        countries: ["South Africa"],
        climate: {
            rainfall: "1500-2000mm annually",
            temperature: "14-20°C average",
            humidity: "65-80%"
        },
        biodiversity: {
            animals: ["Dassie (Rock Hyrax)", "Porcupine", "Caracal"],
            birds: ["Cape Sugarbird", "Orange-breasted Sunbird"],
            trees: ["Indigenous forest patches", "Fynbos vegetation", "Proteas"]
        },
        rivers: ["Table Mountain streams"],
        indigenous: ["Khoi", "San"],
        issues: ["Invasive species", "Fire management", "Urban pressure"],
        conservation: ["Table Mountain National Park", "UNESCO World Heritage Site"],
        coordinates: { lat: -33.9600, lng: 18.4000 },
        description: "Table Mountain is part of the Cape Floristic Region, the smallest yet richest of the world's six floral kingdoms."
    },
    {
        id: 92,
        name: "Fraser Island Rainforest",
        region: "Queensland, Australia",
        area: 1840,
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
        type: "Subtropical Rainforest",
        countries: ["Australia"],
        climate: {
            rainfall: "1500-1800mm annually",
            temperature: "18-27°C average",
            humidity: "70-85%"
        },
        biodiversity: {
            animals: ["Dingo (pure population)", "Sugar Glider", "Echidna"],
            birds: ["Powerful Owl", "Rose-crowned Fruit-dove"],
            trees: ["Satinay", "Brush Box", "Kauri Pine (on sand!)"]
        },
        rivers: ["Perched lakes", "Creeks"],
        indigenous: ["Butchulla people"],
        issues: ["Dingo management", "Tourism pressure", "Erosion"],
        conservation: ["UNESCO World Heritage Site", "K'gari (renamed)"],
        coordinates: { lat: -25.2000, lng: 153.1500 },
        description: "The world's largest sand island contains unique rainforest growing directly on sand dunes, defying ecological expectations."
    },
    {
        id: 93,
        name: "Kaeng Krachan National Park",
        region: "Thailand",
        area: 2915,
        image: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?w=800&q=80",
        type: "Tropical Rainforest",
        countries: ["Thailand"],
        climate: {
            rainfall: "2000-3000mm annually",
            temperature: "22-32°C average",
            humidity: "80-95%"
        },
        biodiversity: {
            animals: ["Tiger", "Elephant", "Gaur", "Clouded Leopard", "Tapir"],
            birds: ["Banded Pitta", "Great Hornbill", "Ratchet-tailed Treepie"],
            trees: ["Dipterocarp", "Bamboo", "Evergreen species"]
        },
        rivers: ["Phetchaburi River"],
        indigenous: ["Karen communities"],
        issues: ["Human-wildlife conflict", "Karen village issues"],
        conservation: ["Thailand's largest national park", "World Heritage nominated"],
        coordinates: { lat: 12.5000, lng: 99.5000 },
        description: "Thailand's largest national park, Kaeng Krachan contains pristine rainforest along the Myanmar border."
    },
    {
        id: 94,
        name: "Pench National Park",
        region: "India",
        area: 758,
        image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&q=80",
        type: "Tropical Dry Deciduous Forest",
        countries: ["India"],
        climate: {
            rainfall: "1200-1400mm annually",
            temperature: "12-42°C (seasonal)",
            humidity: "50-80%"
        },
        biodiversity: {
            animals: ["Bengal Tiger", "Indian Leopard", "Wild Dog", "Gaur"],
            birds: ["Indian Pitta", "Malabar Pied Hornbill"],
            trees: ["Teak", "Saja", "Dhawda", "Salai"]
        },
        rivers: ["Pench River"],
        indigenous: ["Gond tribes"],
        issues: ["Human-tiger conflict", "Corridor connectivity"],
        conservation: ["Tiger Reserve", "Inspiration for Jungle Book"],
        coordinates: { lat: 21.7000, lng: 79.3000 },
        description: "Pench inspired Rudyard Kipling's 'The Jungle Book' and remains prime tiger habitat in central India."
    },
    {
        id: 95,
        name: "Lambir Hills National Park",
        region: "Sarawak, Malaysia",
        area: 69,
        image: "https://images.unsplash.com/photo-1586348943529-beaae6c28db9?w=800&q=80",
        type: "Tropical Lowland Rainforest",
        countries: ["Malaysia"],
        climate: {
            rainfall: "3000mm annually",
            temperature: "26-32°C average",
            humidity: "85-95%"
        },
        biodiversity: {
            animals: ["Gibbons", "Slow Loris", "Flying Squirrel"],
            birds: ["Rhinoceros Hornbill", "Pittas", "Broadbills"],
            trees: ["1175 tree species (world record for diversity)", "Dipterocarp"]
        },
        rivers: ["Lambir streams"],
        indigenous: ["Iban", "Berawan"],
        issues: ["Small size", "Isolation"],
        conservation: ["National Park", "Important Bird Area"],
        coordinates: { lat: 4.2000, lng: 114.0000 },
        description: "Lambir holds the world record for tree species diversity, with 1,175 tree species in just 52 hectares of study plots."
    },
    {
        id: 96,
        name: "Dzanga-Sangha Reserve",
        region: "Central African Republic",
        area: 4222,
        image: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800&q=80",
        type: "Tropical Rainforest",
        countries: ["Central African Republic"],
        climate: {
            rainfall: "1400-1600mm annually",
            temperature: "24-28°C average",
            humidity: "80-90%"
        },
        biodiversity: {
            animals: ["Western Lowland Gorilla (habituated)", "Forest Elephant", "Bongo"],
            birds: ["Dja River Warbler", "Forest species"],
            trees: ["Tropical hardwoods", "Clearing vegetation"]
        },
        rivers: ["Sangha River", "Dzanga River"],
        indigenous: ["BaAka Pygmies (indigenous trackers)"],
        issues: ["Political instability", "Poaching", "Ebola"],
        conservation: ["Part of Sangha Trinational (UNESCO)"],
        coordinates: { lat: 2.8000, lng: 16.2000 },
        description: "Dzanga-Sangha is famous for Dzanga Bai, where up to 100 forest elephants gather daily at a forest clearing."
    },
    {
        id: 97,
        name: "Emas National Park",
        region: "Brazil",
        area: 1319,
        image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&q=80",
        type: "Cerrado (Savanna/Gallery Forest)",
        countries: ["Brazil"],
        climate: {
            rainfall: "1500-1700mm annually",
            temperature: "22-25°C average",
            humidity: "60-80%"
        },
        biodiversity: {
            animals: ["Maned Wolf", "Giant Anteater", "Giant Armadillo", "Pampas Deer"],
            birds: ["Greater Rhea", "Red-legged Seriema", "Hyacinth Macaw"],
            trees: ["Cerrado species", "Gallery forest along rivers"]
        },
        rivers: ["Formoso River tributaries"],
        indigenous: ["Historic indigenous areas"],
        issues: ["Surrounding agriculture", "Fire management"],
        conservation: ["UNESCO World Heritage Site"],
        coordinates: { lat: -18.1500, lng: -52.9000 },
        description: "Emas protects the Cerrado, a globally important savanna with gallery forests, one of the world's most threatened biomes."
    },
    {
        id: 98,
        name: "Phong Nha-Ke Bang",
        region: "Vietnam",
        area: 857,
        image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80",
        type: "Tropical Limestone Forest",
        countries: ["Vietnam"],
        climate: {
            rainfall: "2000-2500mm annually",
            temperature: "23-25°C average",
            humidity: "80-90%"
        },
        biodiversity: {
            animals: ["Saola", "Large-antlered Muntjac", "Langurs", "Civets"],
            birds: ["Sooty Babbler", "Short-tailed Scimitar-babbler"],
            trees: ["Limestone flora", "Primary forest species"]
        },
        rivers: ["Son River", "Underground rivers"],
        indigenous: ["Bru-Van Kieu", "Chut"],
        issues: ["Tourism development", "Cave tourism impact"],
        conservation: ["UNESCO World Heritage Site"],
        coordinates: { lat: 17.5000, lng: 106.0000 },
        description: "Phong Nha contains the world's largest cave (Son Doong), extraordinary karst landscapes, and recently discovered species."
    },
    {
        id: 99,
        name: "Białowieża Strict Reserve",
        region: "Poland",
        area: 47,
        image: "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?w=800&q=80",
        type: "Temperate Primeval Forest",
        countries: ["Poland"],
        climate: {
            rainfall: "600-700mm annually",
            temperature: "6-8°C average",
            humidity: "75-85%"
        },
        biodiversity: {
            animals: ["European Bison", "Wolf", "Lynx (traces of all three in one location)"],
            birds: ["White-backed Woodpecker", "Three-toed Woodpecker"],
            trees: ["500+ year old oaks", "Ancient lime, hornbeam, spruce"]
        },
        rivers: ["Narewka River"],
        indigenous: ["Protected since 1921"],
        issues: ["Strictly protected (no logging allowed)"],
        conservation: ["UNESCO World Heritage core zone"],
        coordinates: { lat: 52.7300, lng: 23.8700 },
        description: "The strict reserve is the best-preserved fragment of primeval forest, where no human intervention is allowed."
    },
    {
        id: 100,
        name: "Pasoh Forest Reserve",
        region: "Malaysia",
        area: 25,
        image: "https://images.unsplash.com/photo-1586348943529-beaae6c28db9?w=800&q=80",
        type: "Tropical Lowland Rainforest",
        countries: ["Malaysia"],
        climate: {
            rainfall: "2000mm annually",
            temperature: "25-32°C average",
            humidity: "80-95%"
        },
        biodiversity: {
            animals: ["Malayan Tiger (rare)", "Tapir", "Various primates"],
            birds: ["Great Argus", "Hornbills", "Pittas"],
            trees: ["Dipterocarp (814 species recorded)", "Pioneer species"]
        },
        rivers: ["Pasoh streams"],
        indigenous: ["Temuan"],
        issues: ["Small size", "Isolation", "Edge effects"],
        conservation: ["FRIM Research Station", "Long-term ecological research"],
        coordinates: { lat: 2.9800, lng: 102.3100 },
        description: "Pasoh is one of the world's most intensively studied tropical forests, with 50-hectare permanent research plots."
    }
];

// Make data available globally
if (typeof window !== 'undefined') {
    window.forestsData2 = forestsData2;
}
