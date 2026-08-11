const hotelsData = [
    {
        id: "oberoi-amarvilas",
        name: "The Oberoi Amarvilas",
        type: "luxury",
        typeName: "👑 Palace & Luxury",
        location: "Agra, Uttar Pradesh",
        landmark: "📍 600 meters from Taj Mahal",
        region: "north",
        rating: 4.9,
        starCount: 5,
        reviewsCount: 1420,
        price: 32000,
        currency: "₹",
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
        fallbackImage: "taj.jpg",
        description: "Uninterrupted views of the iconic Taj Mahal from every room. Features terraced lawns, reflection pools, and regal Mughal-inspired architecture.",
        amenities: ["🏊 Swimming Pool", "🍽️ Royal Dining", "💆 Luxury Spa", "📶 Free WiFi", "🚗 Valet Parking", "☕ Butler Service"]
    },
    {
        id: "rambagh-palace",
        name: "Rambagh Palace Jaipur",
        type: "palace",
        typeName: "👑 Heritage Palace",
        location: "Jaipur, Rajasthan",
        landmark: "📍 12 mins from Hawa Mahal & Amer Fort",
        region: "north",
        rating: 4.9,
        starCount: 5,
        reviewsCount: 2150,
        price: 38000,
        currency: "₹",
        image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=80",
        fallbackImage: "amer-fort.jpg",
        description: "Former residence of the Maharaja of Jaipur. Known as the 'Jewel of Jaipur', featuring marbled corridors, manicured gardens, and peacock lawns.",
        amenities: ["👑 Maharaja Suites", "🏊 Indoor & Outdoor Pool", "🐎 Polo Bar", "💆 Jiva Spa", "📶 High-Speed WiFi"]
    },
    {
        id: "taj-lake-palace",
        name: "Taj Lake Palace Udaipur",
        type: "palace",
        typeName: "👑 Floating Heritage Palace",
        location: "Udaipur, Rajasthan",
        landmark: "📍 Floating on Lake Pichola",
        region: "north",
        rating: 4.9,
        starCount: 5,
        reviewsCount: 1890,
        price: 42000,
        currency: "₹",
        image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80",
        fallbackImage: "rajasthan.jpg",
        description: "18th-century white marble palace floating peacefully in Lake Pichola, accessible only by private boat transfers with royal greetings.",
        amenities: ["🛥️ Private Boat Arrival", "🏊 Floating Pool", "🍷 Sunset Cruises", "💆 Spa Boat", "🍽️ Fine Dining"]
    },
    {
        id: "evolve-back-hampi",
        name: "Evolve Back Hampi",
        type: "palace",
        typeName: "👑 Empire Heritage Resort",
        location: "Hampi, Karnataka",
        landmark: "📍 4 km from Hampi Chariot Ruins",
        region: "south",
        rating: 4.8,
        starCount: 5,
        reviewsCount: 980,
        price: 28000,
        currency: "₹",
        image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=80",
        fallbackImage: "hampi.jpg",
        description: "Designed in the grand 14th-century Vijayanagara architectural style with stone arched walkways, private Jacuzzis, and aqueduct pools.",
        amenities: ["🏊 Aqueduct Pool", "💆 Ayurvedic Spa", "🏛️ Guided Ruins Tour", "🍽️ Specialty Dining", "📶 Free WiFi"]
    },
    {
        id: "kumarakom-lake-resort",
        name: "Kumarakom Lake Resort",
        type: "luxury",
        typeName: "🌟 Backwater Luxury Resort",
        location: "Kumarakom, Kerala",
        landmark: "📍 Banks of Lake Vembanad",
        region: "south",
        rating: 4.8,
        starCount: 5,
        reviewsCount: 1310,
        price: 22000,
        currency: "₹",
        image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=800&q=80",
        fallbackImage: "kerala.jpg",
        description: "Reconstructed 16th-century traditional Kerala heritage villas featuring private pool courtyards, backwater cruises, and authentic Sadya feasts.",
        amenities: ["🛥️ Houseboat Cruises", "🏊 Meandering Pool", "💆 Kerala Ayurveda", "🍌 Banana Leaf Dining", "🎣 Fishing"]
    },
    {
        id: "mayfair-palm-beach",
        name: "Mayfair Palm Beach Resort",
        type: "luxury",
        typeName: "🌟 Coastal Heritage Resort",
        location: "Gopalpur, Odisha",
        landmark: "📍 1.5 hours from Puri & Konark Sun Temple",
        region: "east",
        rating: 4.7,
        starCount: 4,
        reviewsCount: 850,
        price: 14500,
        currency: "₹",
        image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
        fallbackImage: "konark.jpg",
        description: "Charming seaside luxury resort set amidst coconut groves and pristine private beaches on the Bay of Bengal coastline.",
        amenities: ["🏖️ Private Beach Access", "🏊 Infinity Pool", "💆 Wellness Spa", "🍽️ Fresh Seafood Grill", "📶 Free WiFi"]
    },
    {
        id: "imperial-new-delhi",
        name: "The Imperial New Delhi",
        type: "boutique",
        typeName: "🏡 Grand Colonial Heritage",
        location: "Janpath, New Delhi",
        landmark: "📍 15 mins from Red Fort & Qutub Minar",
        region: "north",
        rating: 4.8,
        starCount: 5,
        reviewsCount: 1620,
        price: 19500,
        currency: "₹",
        image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=80",
        fallbackImage: "red-fort.jpg",
        description: "Award-winning Victorian and Art Deco heritage hotel displaying 19th-century royal Indian art collections and palm-fringed gardens.",
        amenities: ["🎨 Art Gallery Walk", "🏊 Outdoor Pool", "🍸 Spice Route Restaurant", "💆 Imperial Spa", "🚗 Valet"]
    },
    {
        id: "leela-palace-bengaluru",
        name: "The Leela Palace",
        type: "palace",
        typeName: "👑 Royal Palace Hotel",
        location: "Bengaluru / Mysuru Road",
        landmark: "📍 Gateway to Mysore Palace & Belur",
        region: "south",
        rating: 4.9,
        starCount: 5,
        reviewsCount: 1740,
        price: 24000,
        currency: "₹",
        image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=800&q=80",
        fallbackImage: "karnataka.jpg",
        description: "Inspired by the royal palaces of the Vijayanagara dynasty, featuring gold leaf domes, brass statues, and 7 acres of lush gardens.",
        amenities: ["👑 Royal Suites", "🏊 Temperature Pool", "💆 ESPA Spa", "🍽️ Jamavar Fine Dining", "📶 High-Speed WiFi"]
    },
    {
        id: "taj-falaknuma-palace",
        name: "Taj Falaknuma Palace",
        type: "palace",
        typeName: "👑 Royal Nizam Palace",
        location: "Hyderabad, Telangana",
        landmark: "📍 5 km from Charminar & Golconda Fort",
        region: "south",
        rating: 4.9,
        starCount: 5,
        reviewsCount: 1290,
        price: 36000,
        currency: "₹",
        image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80",
        fallbackImage: "charminar.jpg",
        description: "Perched 2,000 feet above Hyderabad, the former residence of the Nizam features horse-drawn carriage arrivals and the world's longest dining table.",
        amenities: ["🐴 Horse Carriage Arrival", "🍽️ 101-Seater Dining", "🏊 Horizon Pool", "💆 Nizam Spa", "🎷 Live Sufi Music"]
    },
    {
        id: "taj-mahal-palace-mumbai",
        name: "The Taj Mahal Palace Mumbai",
        type: "palace",
        typeName: "👑 Historic Landmark Hotel",
        location: "Apollo Bunder, Mumbai",
        landmark: "📍 Directly opposite Gateway of India",
        region: "west",
        rating: 4.9,
        starCount: 5,
        reviewsCount: 3400,
        price: 31000,
        currency: "₹",
        image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=800&q=80",
        fallbackImage: "gateway-of-india.jpg",
        description: "Built in 1903, India's most famous harbor landmark hotel overlooking the Arabian Sea, combining Moorish, Oriental, and Florentine styles.",
        amenities: ["🌊 Sea View Rooms", "🏊 Outdoor Pool", "🍽️ Wasabi & Golden Dragon", "💆 Jiva Spa", "🚗 Airport Pickup"]
    },
    {
        id: "ahilya-fort-hotel",
        name: "Ahilya Fort Hotel",
        type: "boutique",
        typeName: "🏡 River Citadel Heritage",
        location: "Maheshwar, Madhya Pradesh",
        landmark: "📍 2 hours from Khajuraho & Sanchi Stupa",
        region: "central",
        rating: 4.8,
        starCount: 4,
        reviewsCount: 640,
        price: 18500,
        currency: "₹",
        image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=800&q=80",
        fallbackImage: "khajuraho.jpg",
        description: "18th-century fort perched high above the sacred Narmada River, built by Queen Ahilyabai Holkar. Features organic vegetable gardens and river boat rides.",
        amenities: ["🚣 Narmada Sunset Boat", "🥗 Organic Garden Meals", "🏊 Fort Swimming Pool", "📜 Heritage Library"]
    },
    {
        id: "oberoi-grand-kolkata",
        name: "The Oberoi Grand",
        type: "luxury",
        typeName: "🌟 Grand Colonial Landmark",
        location: "Chowringhee, Kolkata",
        landmark: "📍 10 mins from Victoria Memorial",
        region: "east",
        rating: 4.8,
        starCount: 5,
        reviewsCount: 1120,
        price: 15500,
        currency: "₹",
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
        fallbackImage: "victoria-memorial.jpg",
        description: "Known affectionately as the 'Grande Dame of Kolkata', offering neoclassical Victorian architecture, courtyard swimming pool, and heritage high tea.",
        amenities: ["🏊 Quadrangle Pool", "☕ Heritage High Tea", "💆 Oberoi Spa", "🍽️ Baan Thai Restaurant", "📶 Free WiFi"]
    },
    {
        id: "taj-fort-aguada",
        name: "Taj Fort Aguada Resort",
        type: "luxury",
        typeName: "🌟 Coastal Fort Resort",
        location: "Sinquerim, Goa",
        landmark: "📍 Built inside 17th-century Aguada Fort",
        region: "west",
        rating: 4.8,
        starCount: 5,
        reviewsCount: 1560,
        price: 21000,
        currency: "₹",
        image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
        fallbackImage: "goa.jpg",
        description: "India's first luxury beach resort, built directly into the ramparts of a 16th-century Portuguese fortress overlooking Arabian sea waves.",
        amenities: ["🏖️ Beachfront Access", "🏊 Seafront Pool", "⛵ Water Sports", "💆 Jiva Spa", "🍹 Sunset Bar"]
    },
    {
        id: "welcomheritage-fernhills",
        name: "Fernhills Royal Palace",
        type: "palace",
        typeName: "👑 Hill Palace Stay",
        location: "Ooty, Tamil Nadu",
        landmark: "📍 Gateway to Nilgiri & Madurai Temples",
        region: "south",
        rating: 4.7,
        starCount: 4,
        reviewsCount: 720,
        price: 16000,
        currency: "₹",
        image: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&w=800&q=80",
        fallbackImage: "tamilnadu.jpg",
        description: "50-acre royal estate built in 1844 as the summer palace of the Maharaja of Mysore, featuring Swiss chalet woodwork and cardamom plantations.",
        amenities: ["🌲 Cardamom Plantation Walk", "🔥 Fireplace Rooms", "🍷 Royal Dining", "📶 Free WiFi", "🚗 Valet"]
    },
    {
        id: "wildflower-hall-shimla",
        name: "Wildflower Hall Shimla",
        type: "luxury",
        typeName: "🌟 Himalayan Luxury Resort",
        location: "Shimla, Himachal Pradesh",
        landmark: "📍 8,300 ft altitude near Kangra Fort",
        region: "north",
        rating: 4.9,
        starCount: 5,
        reviewsCount: 990,
        price: 29000,
        currency: "₹",
        image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80",
        fallbackImage: "himachal.jpeg",
        description: "Former residence of Lord Kitchener set amidst 23 acres of cedar pine forests. Features an open-air heated infinity Jacuzzi with Himalayan peak views.",
        amenities: ["♨️ Heated Outdoor Jacuzzi", "🏊 Indoor Pool", "🌲 Cedar Forest Trekking", "💆 Spa Pavilion"]
    },
    {
        id: "ananda-himalayas",
        name: "Ananda in the Himalayas",
        type: "luxury",
        typeName: "🌿 Wellness Heritage Resort",
        location: "Rishikesh / Garhwal, Uttarakhand",
        landmark: "📍 Foothills near Kedarnath & Ganges",
        region: "north",
        rating: 4.9,
        starCount: 5,
        reviewsCount: 810,
        price: 45000,
        currency: "₹",
        image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=80",
        fallbackImage: "uttarakhand.jpeg",
        description: "100-acre Maharaja's Palace estate dedicated to authentic Ayurveda, Yoga, and Himalayan mountain meditation overlooking the Ganges river valley.",
        amenities: ["🧘 Outdoor Yoga Pavilion", "💆 24,000 sq ft Spa", "🥗 Organic Gourmet", "🏊 Heated Pool"]
    },
    {
        id: "khyber-resort-gulmarg",
        name: "The Khyber Himalayan Resort",
        type: "luxury",
        typeName: "🌟 Alpine Luxury Resort",
        location: "Gulmarg, Jammu & Kashmir",
        landmark: "📍 Near Shalimar Bagh & Gondola Ride",
        region: "north",
        rating: 4.8,
        starCount: 5,
        reviewsCount: 1150,
        price: 27000,
        currency: "₹",
        image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=80",
        fallbackImage: "jammu and kashmir.jpeg",
        description: "Clad in cedar timber and stone, offering panoramic views of snow-covered Pir Panjal mountain ranges and pine forests.",
        amenities: ["⛷️ Ski-in Ski-out Access", "🏊 Heated Indoor Pool", "☕ Kashmiri Kahwa Lounge", "💆 L'Occitane Spa"]
    },
    {
        id: "grand-dragon-ladakh",
        name: "The Grand Dragon Ladakh",
        type: "boutique",
        typeName: "🏡 High Altitude Eco Resort",
        location: "Leh, Ladakh",
        landmark: "📍 5 mins from Leh Palace & Gompas",
        region: "north",
        rating: 4.8,
        starCount: 4,
        reviewsCount: 780,
        price: 16500,
        currency: "₹",
        image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=80",
        fallbackImage: "ladakh.jpeg",
        description: "Solar-powered luxury hotel decorated with handmade Tibetan woodcarvings and brass artifacts, overlooking Stok Kangri mountain peak.",
        amenities: ["☀️ Solar Heated Rooms", "🏔️ Mountain View Terrace", "☕ Ladakhi Tea Lounge", "📶 High-Speed WiFi"]
    },
    {
        id: "hotel-mountview-chandigarh",
        name: "Hotel Mountview Chandigarh",
        type: "budget",
        typeName: "🌿 Civic Heritage Hotel",
        location: "Sector 10, Chandigarh",
        landmark: "📍 5 mins from Capitol Complex & Rock Garden",
        region: "north",
        rating: 4.6,
        starCount: 4,
        reviewsCount: 890,
        price: 8500,
        currency: "₹",
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
        fallbackImage: "chandigarh.jpg",
        description: "Surrounded by lush lawns in Chandigarh's prime green sector, featuring modern amenities and easy access to Le Corbusier heritage monuments.",
        amenities: ["🏊 Outdoor Pool", "🏋️ Fitness Center", "🍽️ Multi-Cuisine Restaurant", "📶 Free WiFi"]
    },
    {
        id: "fortune-bay-island",
        name: "Fortune Resort Bay Island",
        type: "budget",
        typeName: "🌿 Island Eco Resort",
        location: "Port Blair, Andaman",
        landmark: "📍 10 mins from Cellular Jail (Kala Pani)",
        region: "east",
        rating: 4.6,
        starCount: 4,
        reviewsCount: 920,
        price: 9800,
        currency: "₹",
        image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
        fallbackImage: "andaman ad nicobar.jpg",
        description: "Built using native Padauk timber on a cliff slope overlooking the deep blue waters of the Andaman Sea and Ross Island lighthouse.",
        amenities: ["🌊 Sea Facing Deck", "🏊 Swimming Pool", "🎣 Marine Excursions", "📶 Free WiFi"]
    }
];

// STATE MANAGEMENT
let currentRegion = "all";
let currentType = "all";

// DOM ELEMENTS
const hotelContainer = document.getElementById("hotelContainer");
const hotelSearchInput = document.getElementById("hotelSearch");
const sortSelect = document.getElementById("sortSelect");

// DISPLAY HOTELS
function displayHotels(data) {
    if (!hotelContainer) return;
    hotelContainer.innerHTML = "";

    if (data.length === 0) {
        hotelContainer.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 60px 20px;">
                <p style="font-size: 18px; color: #94a3b8; margin-bottom: 15px;">No hotels match your search or selected filters.</p>
                <button onclick="resetHotelFilters()" class="btn primary">Reset All Filters 🔄</button>
            </div>
        `;
        return;
    }

    data.forEach(hotel => {
        const card = document.createElement("div");
        card.className = "hotel-card";

        const starRatingVisual = "⭐".repeat(hotel.starCount || 5);
        const formattedPrice = hotel.currency + hotel.price.toLocaleString("en-IN");
        const reviewsFormatted = hotel.reviewsCount.toLocaleString("en-IN");

        card.innerHTML = `
            <div class="hotel-card-image">
                <img src="${hotel.image}" alt="${hotel.name}" onerror="this.onerror=null; this.src='${hotel.fallbackImage || 'scenery_bg.png'}';">
                <span class="hotel-type-badge">${hotel.typeName}</span>
            </div>
            <div class="hotel-card-body">
                <div class="hotel-card-header">
                    <h2>${hotel.name}</h2>
                </div>

                <!-- PROMINENT HOTEL STAR RATING DISPLAY -->
                <div class="hotel-rating-display">
                    <span class="stars-gold">${starRatingVisual}</span>
                    <span class="rating-score">${hotel.rating} / 5.0</span>
                    <span class="review-count">(${reviewsFormatted} reviews)</span>
                </div>

                <div class="hotel-location-text">${hotel.landmark}</div>
                <p class="hotel-desc-short">${hotel.description}</p>
                <div class="hotel-amenities-preview">
                    ${hotel.amenities.slice(0, 3).map(a => `<span class="mini-tag">${a}</span>`).join('')}
                </div>
                <div class="hotel-card-footer">
                    <div class="price-box">
                        <span class="price-label">Starting from</span>
                        <span class="price-val">${formattedPrice} <small>/ night</small></span>
                    </div>
                    <button class="hotel-view-btn" onclick="openHotelModal('${hotel.id}')">View Details →</button>
                </div>
            </div>
        `;

        hotelContainer.appendChild(card);
    });
}

// FILTER & SORT LOGIC
function applyHotelFilters() {
    let filtered = hotelsData;

    // Region Filter
    if (currentRegion !== "all") {
        filtered = filtered.filter(h => h.region === currentRegion);
    }

    // Type Filter
    if (currentType !== "all") {
        filtered = filtered.filter(h => h.type === currentType);
    }

    // Search Query
    const searchVal = hotelSearchInput ? hotelSearchInput.value.toLowerCase().trim() : "";
    if (searchVal) {
        filtered = filtered.filter(h =>
            h.name.toLowerCase().includes(searchVal) ||
            h.location.toLowerCase().includes(searchVal) ||
            h.landmark.toLowerCase().includes(searchVal) ||
            h.description.toLowerCase().includes(searchVal)
        );
    }

    // Sorting
    const sortVal = sortSelect ? sortSelect.value : "recommended";
    if (sortVal === "rating") {
        filtered = [...filtered].sort((a, b) => b.rating - a.rating);
    } else if (sortVal === "price-low") {
        filtered = [...filtered].sort((a, b) => a.price - b.price);
    } else if (sortVal === "price-high") {
        filtered = [...filtered].sort((a, b) => b.price - a.price);
    }

    displayHotels(filtered);
}

// FILTER BUTTON CLICKS
function filterRegion(region, btnEl) {
    currentRegion = region;
    document.querySelectorAll(".hotel-region-btn").forEach(b => b.classList.remove("active"));
    if (btnEl) btnEl.classList.add("active");
    applyHotelFilters();
}

function filterType(type, btnEl) {
    currentType = type;
    document.querySelectorAll(".category-pill").forEach(b => b.classList.remove("active"));
    if (btnEl) btnEl.classList.add("active");
    applyHotelFilters();
}

function resetHotelFilters() {
    currentRegion = "all";
    currentType = "all";
    if (hotelSearchInput) hotelSearchInput.value = "";
    if (sortSelect) sortSelect.value = "recommended";
    document.querySelectorAll(".hotel-region-btn").forEach(b => b.classList.toggle("active", b.getAttribute("data-region") === "all"));
    document.querySelectorAll(".category-pill").forEach(b => b.classList.toggle("active", b.getAttribute("data-type") === "all"));
    applyHotelFilters();
}

// SEARCH EVENT LISTENER
if (hotelSearchInput) {
    hotelSearchInput.addEventListener("input", applyHotelFilters);
}

// MODAL POPUP FUNCTIONALITY
function openHotelModal(hotelId) {
    const hotel = hotelsData.find(h => h.id === hotelId);
    if (!hotel) return;

    const modal = document.getElementById("hotelModal");
    if (!modal) return;

    const imgEl = document.getElementById("modalHotelImage");
    imgEl.src = hotel.image;
    imgEl.onerror = function() { this.src = hotel.fallbackImage || "scenery_bg.png"; };

    document.getElementById("modalHotelBadge").textContent = hotel.typeName;
    document.getElementById("modalHotelTitle").textContent = hotel.name;
    document.getElementById("modalHotelLocation").textContent = `📍 ${hotel.location}`;
    document.getElementById("modalHotelLandmark").textContent = hotel.landmark;

    const starVisual = "⭐".repeat(hotel.starCount || 5);
    document.getElementById("modalHotelRating").textContent = `${starVisual} ${hotel.rating} / 5.0 (${hotel.reviewsCount.toLocaleString("en-IN")} verified reviews)`;
    document.getElementById("modalHotelPrice").textContent = `${hotel.currency}${hotel.price.toLocaleString("en-IN")} / night`;
    document.getElementById("modalHotelDesc").textContent = hotel.description;

    const amenitiesWrap = document.getElementById("modalHotelAmenities");
    if (amenitiesWrap) {
        amenitiesWrap.innerHTML = hotel.amenities.map(a => `<span class="amenity-tag">${a}</span>`).join("");
    }

    modal.style.display = "flex";
}

function closeHotelModal() {
    const modal = document.getElementById("hotelModal");
    if (modal) modal.style.display = "none";
}

function simulateBooking() {
    alert("🎉 Room Reservation Simulation:\nYour booking request has been initiated! In a production deployment, this connects directly to hotel APIs.");
    closeHotelModal();
}

// CLOSE MODAL ON OUTSIDE CLICK
window.addEventListener("click", (e) => {
    const modal = document.getElementById("hotelModal");
    if (e.target === modal) {
        closeHotelModal();
    }
});

// INITIAL LOAD
document.addEventListener("DOMContentLoaded", () => {
    applyHotelFilters();
});
