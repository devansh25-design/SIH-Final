// COMPREHENSIVE HERITAGE SITES DATA FOR ALL 28 STATES & UTs IN INDIA
const heritageSites = [
    // NORTH INDIA
    {
        id: "up",
        name: "Uttar Pradesh",
        siteName: "Taj Mahal & Varanasi Ghats",
        location: "Agra & Varanasi, Uttar Pradesh",
        coords: [27.1751, 78.0421],
        region: "north",
        category: "monument",
        heritage: "Taj Mahal & Sacred Ghats",
        description: "Home to the Taj Mahal, Fatehpur Sikri, and Varanasi — the world's oldest living spiritual city along the Ganges.",
        fact: "Taj Mahal was designated a UNESCO World Heritage site in 1983 as a jewel of Muslim art in India.",
        image: "uttarpradesh.jpg"
    },
    {
        id: "rj",
        name: "Rajasthan",
        siteName: "Amer Fort & City Palaces",
        location: "Jaipur, Rajasthan",
        coords: [26.9855, 75.8513],
        region: "north",
        category: "fort",
        heritage: "Hill Forts & Royal Palaces",
        description: "Land of Maharajas featuring hilltop fortresses, Sheesh Mahal, Jaisalmer golden fort, and Thar desert traditions.",
        fact: "The Six Hill Forts of Rajasthan are collectively protected under UNESCO World Heritage.",
        image: "rajasthan.jpg"
    },
    {
        id: "pb",
        name: "Punjab",
        siteName: "Golden Temple (Harmandir Sahib)",
        location: "Amritsar, Punjab",
        coords: [31.6200, 74.8765],
        region: "north",
        category: "temple",
        heritage: "Golden Temple & Phulkari Art",
        description: "The spiritual heart of Sikhism with its gold-covered sanctuary floating on the Amrit Sarovar lake.",
        fact: "The Golden Temple operates the world's largest free community kitchen (Langar), serving over 100,000 meals daily.",
        image: "punjab.jpeg"
    },
    {
        id: "hr",
        name: "Haryana",
        siteName: "Rakhigarhi & Kurukshetra",
        location: "Hisar & Kurukshetra, Haryana",
        coords: [29.9695, 76.8783],
        region: "north",
        category: "monument",
        heritage: "Indus Valley & Vedic Heritage",
        description: "Home to Rakhigarhi — the largest Indus Valley Civilization site — and sacred Kurukshetra of Mahabharata epic.",
        fact: "Rakhigarhi settlements date back to 5500 BCE, revealing sophisticated urban planning and drainage.",
        image: "haryana.jpeg"
    },
    {
        id: "hp",
        name: "Himachal Pradesh",
        siteName: "Kangra Fort & Tabo Monastery",
        location: "Kangra & Spiti, Himachal Pradesh",
        coords: [32.1008, 76.2563],
        region: "north",
        category: "fort",
        heritage: "Himalayan Forts & Monasteries",
        description: "Ancient Himalayan mountain fortresses, wooden Pahari temples, and 1000-year-old Buddhist monasteries.",
        fact: "Kangra Fort is the oldest recorded fort in India, dating back to the ancient Trigarta Kingdom.",
        image: "himachal.jpeg"
    },
    {
        id: "uk",
        name: "Uttarakhand",
        siteName: "Kedarnath & Badrinath Char Dham",
        location: "Garhwal Himalayas, Uttarakhand",
        coords: [30.7346, 79.0669],
        region: "north",
        category: "temple",
        heritage: "Char Dham & Sacred Ganges",
        description: "The Land of the Gods (Devbhoomi) featuring ancient stone temples nestled in snowy Himalayan peaks.",
        fact: "Kedarnath Temple, constructed with interlocking stone blocks without mortar, survived the mega 2013 floods unscathed.",
        image: "uttarakhand.jpeg"
    },
    {
        id: "dl",
        name: "Delhi (UT)",
        siteName: "Red Fort & Qutub Minar",
        location: "New Delhi",
        coords: [28.6562, 77.2410],
        region: "north",
        category: "unesco",
        heritage: "Red Fort Citadel & Imperial Minarets",
        description: "The historic capital of seven empires boasting red sandstone fortresses, soaring minarets, and Mughal garden tombs.",
        fact: "Qutub Minar is the world's tallest brick minaret at 72.5 meters, built in 1192 CE.",
        image: "red-fort.jpg"
    },
    {
        id: "jk",
        name: "Jammu & Kashmir (UT)",
        siteName: "Shalimar Bagh & Martand Temple",
        location: "Srinagar & Anantnag, J&K",
        coords: [34.1480, 74.8710],
        region: "north",
        category: "culture",
        heritage: "Mughal Gardens & Kashmiri Crafts",
        description: "Terraced Mughal royal gardens overlooking Dal Lake, ancient Kashmiri stone temples, and Pashmina weaving.",
        fact: "Shalimar Bagh was built in 1619 by Mughal Emperor Jahangir for his beloved wife Noor Jahan.",
        image: "jammu and kashmir.jpeg"
    },
    {
        id: "la",
        name: "Ladakh (UT)",
        siteName: "Hemis & Thiksey Monasteries",
        location: "Leh, Ladakh",
        coords: [34.1526, 77.5771],
        region: "north",
        category: "culture",
        heritage: "High Altitude Himalayan Monasteries",
        description: "Dramatic cliffside Tibetan Buddhist Gompas, ancient Leh Palace, and high Himalayan silk route heritage.",
        fact: "Hemis Monastery hosts the annual masked Cham dance festival celebrating Guru Padmasambhava.",
        image: "ladakh.jpeg"
    },

    // SOUTH INDIA
    {
        id: "ka",
        name: "Karnataka",
        siteName: "Hampi Ruins & Mysore Palace",
        location: "Hampi & Mysuru, Karnataka",
        coords: [15.3350, 76.4600],
        region: "south",
        category: "unesco",
        heritage: "Ruins of Vijayanagara & Mysore Grandeur",
        description: "Boulder-strewn capital of the Vijayanagara Empire with stone chariots, alongside royal illuminated Mysore Palace.",
        fact: "Hampi was the second-largest city in the world during the 15th century.",
        image: "hampi.jpg"
    },
    {
        id: "tn",
        name: "Tamil Nadu",
        siteName: "Brihadishvara & Meenakshi Temples",
        location: "Thanjavur & Madurai, Tamil Nadu",
        coords: [10.7828, 79.1318],
        region: "south",
        category: "temple",
        heritage: "Great Living Chola Temples",
        description: "Soaring Dravidian Gopurams, 1000-year-old Chola granite architectural marvels, and Bharatanatyam heritage.",
        fact: "Brihadishvara Temple's 80-ton granite capstone was raised via a 6 km long earthen ramp.",
        image: "tamilnadu.jpg"
    },
    {
        id: "kl",
        name: "Kerala",
        siteName: "Padmanabhaswamy & Backwaters",
        location: "Thiruvananthapuram & Alleppey, Kerala",
        coords: [9.4981, 76.3388],
        region: "south",
        category: "culture",
        heritage: "Kathakali & Ancient Maritime Trade",
        description: "Classical Kathakali dance-drama, wooden temple architecture, spice trade ports, and serene backwaters.",
        fact: "Sree Padmanabhaswamy Temple is famous for its subterranean vaults containing ancient gold treasures.",
        image: "kerala.jpg"
    },
    {
        id: "ap",
        name: "Andhra Pradesh",
        siteName: "Lepakshi & Amaravati Stupa",
        location: "Anantapur & Guntur, Andhra Pradesh",
        coords: [13.6833, 79.3500],
        region: "south",
        category: "temple",
        heritage: "Hanging Pillars of Lepakshi",
        description: "16th-century Vijayanagara temple famous for its miraculous hanging pillar and monolithic Nandi bull.",
        fact: "Lepakshi Temple features a 27 ft long monolithic granite Nandi, the largest in India.",
        image: "andhra pradesh.jpeg"
    },
    {
        id: "tg",
        name: "Telangana",
        siteName: "Golconda Fort & Ramappa Temple",
        location: "Hyderabad & Warangal, Telangana",
        coords: [17.3833, 78.4011],
        region: "south",
        category: "unesco",
        heritage: "Kakatiya Dynasty & Golconda Citadel",
        description: "Historic diamond trade citadel of Golconda, Charminar monument, and UNESCO Ramappa floating brick temple.",
        fact: "Ramappa Temple was built using lightweight 'floating bricks' that float on water.",
        image: "telangana.jpeg"
    },
    {
        id: "py",
        name: "Puducherry (UT)",
        siteName: "Auroville & French Heritage Quarter",
        location: "Puducherry",
        coords: [11.9416, 79.8083],
        region: "south",
        category: "culture",
        heritage: "French Colonial Architecture",
        description: "Charming yellow-hued French colonial streetscapes, Matrimandir golden dome, and coastal heritage.",
        fact: "Puducherry was a French territory for over 280 years until 1954.",
        image: "puducherry.jpg"
    },

    // WEST INDIA
    {
        id: "gj",
        name: "Gujarat",
        siteName: "Rani ki Vav & Rann of Kutch",
        location: "Patan & Kutch, Gujarat",
        coords: [23.7842, 69.8597],
        region: "west",
        category: "unesco",
        heritage: "Stepwells & Kutch Textiles",
        description: "Intricately carved subterranean stepwells, Modhera Sun Temple, and vibrant white desert cultural heritage.",
        fact: "Rani ki Vav is an inverted temple stepwell built in 1063 CE with over 500 major sculptures.",
        image: "gujrat.jpg"
    },
    {
        id: "mh",
        name: "Maharashtra",
        siteName: "Ajanta & Ellora Caves",
        location: "Chhatrapati Sambhajinagar, Maharashtra",
        coords: [20.5519, 75.7033],
        region: "west",
        category: "unesco",
        heritage: "Rock-Cut Cave Temples",
        description: "34 rock-cut caves carved out of basaltic cliffs, featuring Kailasa Temple — the world's largest monolithic structure.",
        fact: "Kailasa Temple (Cave 16) was excavated top-down out of a single rock, removing 200,000 tons of basalt.",
        image: "maharashtra.jpg"
    },
    {
        id: "ga",
        name: "Goa",
        siteName: "Basilica of Bom Jesus & Old Goa",
        location: "Old Goa",
        coords: [15.5009, 73.9116],
        region: "west",
        category: "unesco",
        heritage: "Baroque Church Architecture",
        description: "16th-century Portuguese Baroque churches, marble altars, and UNESCO Manueline architectural heritage.",
        fact: "Basilica of Bom Jesus holds the mortal remains of St. Francis Xavier in a silver casket.",
        image: "goa.jpg"
    },

    // CENTRAL INDIA
    {
        id: "mp",
        name: "Madhya Pradesh",
        siteName: "Khajuraho & Sanchi Stupa",
        location: "Chhatarpur & Raisen, Madhya Pradesh",
        coords: [24.8318, 79.9199],
        region: "central",
        category: "unesco",
        heritage: "Chandela Sculptures & Ancient Stupas",
        description: "Masterpieces of Nagara temple architecture with intricate stone carvings, and 3rd century BCE Buddhist Sanchi Stupa.",
        fact: "Sanchi Stupa is the oldest stone structure in India, commissioned by Emperor Ashoka.",
        image: "madhya pradesh.jpg"
    },
    {
        id: "cg",
        name: "Chhattisgarh",
        siteName: "Sirpur Monuments & Chitrakote",
        location: "Mahasamund & Bastar, Chhattisgarh",
        coords: [19.2081, 81.7058],
        region: "central",
        category: "culture",
        heritage: "Ancient Brick Temples & Tribal Arts",
        description: "7th-century Laxman Temple built of red bricks, and ancient tribal metalcraft (Dhokra art) of Bastar.",
        fact: "Laxman Temple at Sirpur is one of the finest Indian brick temples surviving from the Gupta era.",
        image: "chhattisgarh.jpg"
    },

    // EAST & NORTH-EAST INDIA
    {
        id: "or",
        name: "Odisha",
        siteName: "Konark Sun Temple & Jagannath",
        location: "Puri & Konark, Odisha",
        coords: [19.8876, 86.0945],
        region: "east",
        category: "temple",
        heritage: "Chariot Sun Temple & Kalinga Style",
        description: "Colossal 13th-century stone chariot temple dedicated to Surya, and sacred coastal Jagannath Puri shrine.",
        fact: "Konark Sun Temple's stone wheels function as precise sundials showing time to the minute.",
        image: "konark.jpg"
    },
    {
        id: "wb",
        name: "West Bengal",
        siteName: "Victoria Memorial & Bishnupur",
        location: "Kolkata & Bankura, West Bengal",
        coords: [22.5448, 88.3426],
        region: "east",
        category: "culture",
        heritage: "Terracotta Temples & Literary Arts",
        description: "17th-century terracotta carved temples of Bishnupur, marble Victoria Memorial, and rich literary heritage.",
        fact: "Durga Puja of Kolkata is recognized on UNESCO's Intangible Cultural Heritage list.",
        image: "westbengal.jpg"
    },
    {
        id: "br",
        name: "Bihar",
        siteName: "Mahabodhi Temple & Nalanda",
        location: "Bodh Gaya & Nalanda, Bihar",
        coords: [24.6959, 84.9914],
        region: "east",
        category: "unesco",
        heritage: "Birthplace of Buddhism & Learning",
        description: "The sacred Bodhi Tree where Lord Buddha attained enlightenment, and 5th-century Nalanda Mahavihara university.",
        fact: "Nalanda was the ancient world's premier international residential university housing 10,000 scholars.",
        image: "bihar.jpg"
    },
    {
        id: "jh",
        name: "Jharkhand",
        siteName: "Baidyanath Dham & Maluti Temples",
        location: "Deoghar & Dumka, Jharkhand",
        coords: [24.4924, 86.7003],
        region: "east",
        category: "temple",
        heritage: "Ancient Jyotirlinga & Terracotta",
        description: "Sacred Jyotirlinga shrine at Deoghar, and 72 surviving terracotta temples of Maluti village.",
        fact: "Maluti village houses 72 exquisite 17th-century terracotta temples depicting scenes from Ramayana.",
        image: "jharkhand.jpg"
    },
    {
        id: "as",
        name: "Assam",
        siteName: "Kamakhya Temple & Rang Ghar",
        location: "Guwahati & Sivasagar, Assam",
        coords: [26.6500, 93.3500],
        region: "east",
        category: "temple",
        heritage: "Shakti Peeth & Ahom Dynasty Forts",
        description: "Ancient Kamakhya Shakti shrine, Rang Ghar amphitheater, and Ahom kingdom masonry royal palaces.",
        fact: "Rang Ghar at Sivasagar is one of the oldest surviving royal sports amphitheaters in Asia.",
        image: "assam.jpg"
    },
    {
        id: "ar",
        name: "Arunachal Pradesh",
        siteName: "Tawang Monastery",
        location: "Tawang, Arunachal Pradesh",
        coords: [27.5860, 91.8594],
        region: "east",
        category: "culture",
        heritage: "Largest Buddhist Monastery in India",
        description: "Perched at 10,000 ft in the Himalayas, Tawang Monastery is a 300-year-old citadel of Mahayana Buddhism.",
        fact: "Tawang Monastery was founded in 1680 CE and houses an 18-foot-tall gilded Buddha statue.",
        image: "arunachal pradesh.jpg"
    },
    {
        id: "ml",
        name: "Meghalaya",
        siteName: "Living Root Bridges",
        location: "Cherrapunji & Nongriat, Meghalaya",
        coords: [25.2986, 91.7317],
        region: "east",
        category: "culture",
        heritage: "Bio-engineered Living Root Bridges",
        description: "Hand-guided bio-engineering marvels where rubber tree roots are woven into sturdy living footbridges over centuries.",
        fact: "Double Decker Living Root Bridge in Nongriat has survived for over 250 years.",
        image: "meghalaya.jpg"
    },
    {
        id: "mn",
        name: "Manipur",
        siteName: "Kangla Fort & Loktak Lake",
        location: "Imphal, Manipur",
        coords: [24.8080, 93.9442],
        region: "east",
        category: "fort",
        heritage: "Royal Meitei Citadel",
        description: "Ancient seat of Meitei rulers surrounded by sacred moats, shrines, and traditional Manipuri Ras Leela dance.",
        fact: "Kangla Fort served as the royal power center of Manipur from 33 CE to 1891 CE.",
        image: "manipur.jpg"
    },
    {
        id: "mz",
        name: "Mizoram",
        siteName: "Reiek Heritage Village",
        location: "Reiek, Mizoram",
        coords: [23.6841, 92.6074],
        region: "east",
        category: "culture",
        heritage: "Traditional Mizo Tribal Dwellings",
        description: "Preserved bamboo tribal huts, Cheraw bamboo dance, and pristine cloud-draped mountain ridge heritage.",
        fact: "Cheraw is an intricate Mizo folk dance performed using rhythmic clapping of long bamboo staves.",
        image: "mizoram.jpg"
    },
    {
        id: "nl",
        name: "Nagaland",
        siteName: "Kohima Heritage Village",
        location: "Kohima, Nagaland",
        coords: [25.6747, 94.1100],
        region: "east",
        category: "culture",
        heritage: "Naga Morung Architecture",
        description: "Carved wooden Morungs of 17 indigenous Naga tribes, and historical World War II battlefield site at Kohima.",
        fact: "Kisama hosts the iconic Hornbill Festival, bringing together all 17 Naga tribes every December.",
        image: "nagaland.jpg"
    },
    {
        id: "sk",
        name: "Sikkim",
        siteName: "Rumtek & Pemayangtse Monastery",
        location: "Gangtok & Pelling, Sikkim",
        coords: [27.3276, 88.5616],
        region: "east",
        category: "culture",
        heritage: "Himalayan Buddhist Sacred Heritage",
        description: "17th-century Karma Kagyu monasteries displaying golden stupas, sacred thangkas, and views of Mount Kanchenjunga.",
        fact: "Pemayangtse Monastery houses a 7-tiered wooden sculpture of Guru Rinpoche's celestial palace carved by one lama.",
        image: "sikkim.jpg"
    },
    {
        id: "tr",
        name: "Tripura",
        siteName: "Ujjayanta Palace & Unakoti",
        location: "Agartala & Kailashahar, Tripura",
        coords: [23.8314, 91.2868],
        region: "east",
        category: "monument",
        heritage: "Neoclassical Palace & Rock Carvings",
        description: "Magnificent white royal palace of Manikya Kings, and 8th-century colossal rock-cut bas-reliefs at Unakoti.",
        fact: "Unakoti translates to 'one less than a crore' (9,99,999), famous for its giant rock carving of Lord Shiva.",
        image: "tripura.jpg"
    },
    {
        id: "an",
        name: "Andaman & Nicobar Islands (UT)",
        siteName: "Cellular Jail (Kala Pani)",
        location: "Port Blair, Andaman & Nicobar",
        coords: [11.6667, 92.7472],
        region: "east",
        category: "monument",
        heritage: "National Memorial & Freedom Struggle",
        description: "Historic colonial prison turned national memorial, commemorating freedom fighters who endured solitary confinement.",
        fact: "Cellular Jail had 698 solitary cells arranged radiating from a central watchtower like spokes of a wheel.",
        image: "andaman ad nicobar.jpg"
    },
    {
        id: "ch",
        name: "Chandigarh (UT)",
        siteName: "Capitol Complex & Rock Garden",
        location: "Chandigarh",
        coords: [30.7333, 76.7794],
        region: "north",
        category: "unesco",
        heritage: "Le Corbusier Architectural Modernism",
        description: "UNESCO World Heritage modern civic architecture by Le Corbusier, and Nek Chand's unique recycled Rock Garden.",
        fact: "The Rock Garden of Chandigarh is built entirely out of industrial and urban waste materials.",
        image: "chandigarh.jpg"
    },
    {
        id: "dd",
        name: "Dadra & Nagar Haveli and Daman & Diu (UT)",
        siteName: "Diu Fort & St. Paul's Church",
        location: "Diu & Daman",
        coords: [20.7144, 70.9874],
        region: "west",
        category: "fort",
        heritage: "Portuguese Maritime Citadel",
        description: "16th-century Portuguese coastal fortress surrounded by sea moats, cannons, and Gothic churches.",
        fact: "Diu Fort was constructed by Portuguese governor Nuno da Cunha in 1535 following a defense treaty.",
        image: "daman and diu.jpg"
    },
    {
        id: "ld",
        name: "Lakshadweep (UT)",
        siteName: "Agatti Coral Reef & Maritime Heritage",
        location: "Agatti Island, Lakshadweep",
        coords: [10.8533, 72.1948],
        region: "south",
        category: "culture",
        heritage: "Coral Atolls & Maritime Traditions",
        description: "Pristine coral reef lagoons, traditional coir handicrafts, and ancient Arabian Sea maritime heritage.",
        fact: "Lakshadweep is India's smallest Union Territory, comprising 36 coral islands covering just 32 sq km.",
        image: "lakshdweap.jpg"
    }
];

// REGIONAL STATES DATA FOR GRID CARDS
const states = heritageSites.map(site => ({
    name: site.name,
    region: site.region,
    heritage: site.heritage,
    description: site.description,
    image: site.image
}));

// DOM ELEMENTS
const container = document.getElementById("stateContainer");
const panelPlaceholder = document.getElementById("panelPlaceholder");
const panelCardContent = document.getElementById("panelCardContent");
const panelImage = document.getElementById("panelImage");
const panelTitle = document.getElementById("panelTitle");
const panelCategory = document.getElementById("panelCategory");
const panelRegion = document.getElementById("panelRegion");
const panelLocation = document.getElementById("panelLocation");
const panelDesc = document.getElementById("panelDesc");
const panelFact = document.getElementById("panelFact");
const panelActionBtn = document.getElementById("panelActionBtn");

let map = null;
let mapMarkers = [];
let currentCategory = "all";
let currentRegion = "all";

// INITIALIZE LEAFLET MAP
function initMap() {
    const mapElement = document.getElementById('indiaMap');
    if (!mapElement || typeof L === 'undefined') return;

    // Center on India
    map = L.map('indiaMap', {
        center: [22.5937, 78.9629],
        zoom: 5,
        zoomControl: true,
        scrollWheelZoom: false
    });

    // CartoDB Voyager Tile Layer for clean, beautiful map styling
    L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/">CARTO</a>',
        subdomains: 'abcd',
        maxZoom: 18
    }).addTo(map);

    renderMapMarkers(heritageSites);
}

// CREATE CUSTOM MAP MARKER PINS
function createCustomPin(site) {
    const categoryClass = site.category || 'monument';
    let iconSymbol = '📍';
    if (categoryClass === 'temple') iconSymbol = '🛕';
    if (categoryClass === 'unesco') iconSymbol = '🌟';
    if (categoryClass === 'culture') iconSymbol = '🎭';
    if (categoryClass === 'fort' || categoryClass === 'monument') iconSymbol = '🏛️';

    return L.divIcon({
        className: 'custom-pin-wrapper',
        html: `<div class="custom-map-pin ${categoryClass}">${iconSymbol}</div>`,
        iconSize: [32, 32],
        iconAnchor: [16, 32],
        popupAnchor: [0, -32]
    });
}

// RENDER MARKERS ON MAP
function renderMapMarkers(sitesData) {
    if (!map) return;

    // Clear existing markers
    mapMarkers.forEach(marker => map.removeLayer(marker));
    mapMarkers = [];

    sitesData.forEach(site => {
        const marker = L.marker(site.coords, { icon: createCustomPin(site) }).addTo(map);

        // Bind Popup
        const popupHTML = `
            <div class="map-popup-card">
                <h4>${site.siteName}</h4>
                <p>📍 ${site.location}</p>
            </div>
        `;
        marker.bindPopup(popupHTML);

        // Marker Click Event -> Update Side Panel
        marker.on('click', () => {
            selectHeritageSite(site);
        });

        mapMarkers.push(marker);
    });
}

// SELECT HERITAGE SITE AND UPDATE SIDE PANEL
function selectHeritageSite(site) {
    if (!panelCardContent || !panelPlaceholder) return;

    panelPlaceholder.classList.add("hidden");
    panelCardContent.classList.remove("hidden");

    panelImage.onerror = function() {
        this.onerror = null;
        this.src = "scenery_bg.png";
    };
    panelImage.src = site.image;
    panelImage.alt = site.siteName;
    panelTitle.textContent = site.siteName;
    panelLocation.textContent = `📍 ${site.location}`;
    panelCategory.textContent = site.category.toUpperCase();
    panelRegion.textContent = `${site.region.toUpperCase()} INDIA`;
    panelDesc.textContent = site.description;
    panelFact.textContent = site.fact;

    if (panelActionBtn) {
        panelActionBtn.onclick = () => {
            const gridCards = document.querySelectorAll('.state-card');
            gridCards.forEach(card => {
                const titleText = card.querySelector('h2')?.textContent || '';
                if (titleText.toLowerCase().includes(site.name.toLowerCase())) {
                    card.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    card.style.border = '2px solid #f59e0b';
                    setTimeout(() => { card.style.border = ''; }, 2500);
                }
            });
        };
    }
}

// REGION PAN & ZOOM COORDINATES
const regionBounds = {
    all: { center: [22.5937, 78.9629], zoom: 5 },
    north: { center: [29.5, 76.5], zoom: 6 },
    south: { center: [13.0, 77.5], zoom: 6 },
    west: { center: [20.5, 73.5], zoom: 6 },
    east: { center: [24.0, 88.5], zoom: 6 },
    central: { center: [22.0, 80.0], zoom: 6 }
};

// MAP REGION FILTER BUTTON CLICKS
document.querySelectorAll('.map-filter-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        document.querySelectorAll('.map-filter-btn').forEach(b => b.classList.remove('active'));
        this.classList.add('active');

        const region = this.getAttribute('data-region');
        currentRegion = region;

        applyFilters();

        // Pan Map Smoothly
        if (map && regionBounds[region]) {
            map.flyTo(regionBounds[region].center, regionBounds[region].zoom, {
                duration: 1.2
            });
        }
    });
});

// MAP CATEGORY PILL CLICKS
document.querySelectorAll('.category-pill').forEach(pill => {
    pill.addEventListener('click', function() {
        document.querySelectorAll('.category-pill').forEach(p => p.classList.remove('active'));
        this.classList.add('active');

        currentCategory = this.getAttribute('data-category');
        applyFilters();
    });
});

// APPLY COMBINED FILTERS
function applyFilters() {
    let filteredSites = heritageSites;

    if (currentRegion !== "all") {
        filteredSites = filteredSites.filter(site => site.region === currentRegion);
    }

    if (currentCategory !== "all") {
        filteredSites = filteredSites.filter(site => site.category === currentCategory || (currentCategory === 'monument' && site.category === 'fort'));
    }

    renderMapMarkers(filteredSites);

    // Sync State Grid Cards
    const filteredStateCards = states.filter(s => {
        const matchesRegion = currentRegion === "all" || s.region === currentRegion;
        return matchesRegion;
    });
    displayStates(filteredStateCards);
}

// DISPLAY STATE GRID CARDS
function displayStates(data) {
    if (!container) return;
    container.innerHTML = "";

    if (data.length === 0) {
        container.innerHTML = "<p style='grid-column: 1/-1; text-align:center; padding:30px; font-size:16px; color:#64748b;'>No heritage locations match your search or filter.</p>";
        return;
    }

    data.forEach(state => {
        const card = document.createElement("div");
        card.className = "state-card";

        card.innerHTML = `
            <img src="${state.image}" alt="${state.name}" onerror="this.onerror=null; this.src='scenery_bg.png';">
            <div class="state-info">
                <h2>${state.name}</h2>
                <p>${state.description}</p>
                <span>✦ ${state.heritage}</span>
            </div>
        `;

        container.appendChild(card);
    });
}

// FILTER STATES FUNCTION (FOR GRID BUTTONS)
function filterStates(region) {
    currentRegion = region;

    // Update map region button active state
    document.querySelectorAll('.map-filter-btn').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-region') === region);
    });

    // Update state grid button active state
    document.querySelectorAll('.state-filter-btn').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('onclick')?.includes(region));
    });

    applyFilters();

    if (map && regionBounds[region]) {
        map.flyTo(regionBounds[region].center, regionBounds[region].zoom, { duration: 1.2 });
    }
}

// SEARCH INPUT EVENT LISTENER
const searchInput = document.getElementById("searchInput");
if (searchInput) {
    searchInput.addEventListener("input", function () {
        const search = this.value.toLowerCase();

        const filteredSites = heritageSites.filter(site =>
            site.name.toLowerCase().includes(search) ||
            site.siteName.toLowerCase().includes(search) ||
            site.heritage.toLowerCase().includes(search) ||
            site.location.toLowerCase().includes(search)
        );

        renderMapMarkers(filteredSites);

        const filteredStateCards = states.filter(state =>
            state.name.toLowerCase().includes(search) ||
            state.heritage.toLowerCase().includes(search)
        );
        displayStates(filteredStateCards);
    });
}

// INITIALIZATION ON DOM LOAD
document.addEventListener('DOMContentLoaded', () => {
    displayStates(states);
    initMap();
});
