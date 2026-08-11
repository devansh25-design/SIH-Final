// RESTAURANTS & HERITAGE DINING DATA
const restaurantData = [
    {
        id: 1,
        name: "1135 AD - Royal Fine Dining",
        city: "Jaipur, Rajasthan",
        landmark: "Amer Fort",
        category: "rajasthani",
        type: "Fine Dining",
        diet: "Veg & Non-Veg",
        rating: 4.9,
        reviewsCount: 1420,
        priceForTwo: "₹3,500 for two",
        priceRange: "luxury",
        image: "amer-fort.jpg",
        specialty: "Royal Rajputana Thali, Laal Maas, Ker Sangri",
        description: "Dine like royalty inside the 16th-century Amer Fort ramparts with ornate silver thalis, crystal chandeliers, and live classical sitar music.",
        address: "Amer Fort Complex, Devisinghpura, Jaipur, Rajasthan",
        distance: "0.1 km from Amer Fort",
        verified: true
    },
    {
        id: 2,
        name: "Bukhara - ITC Maurya",
        city: "New Delhi",
        landmark: "Red Fort & Qutub Minar",
        category: "north-indian",
        type: "Heritage Grill & Tandoor",
        diet: "Veg & Non-Veg",
        rating: 4.9,
        reviewsCount: 3200,
        priceForTwo: "₹5,000 for two",
        priceRange: "luxury",
        image: "red-fort.jpg",
        specialty: "Dal Bukhara, Sikandari Raan, Naan Bukhara",
        description: "World-renowned restaurant celebrated for slow-cooked Dal Bukhara (simmered for 18 hours over charcoal) and rustic clay oven delicacies.",
        address: "Diplomatic Enclave, Chanakyapuri, New Delhi",
        distance: "6.5 km from Qutub Minar",
        verified: true
    },
    {
        id: 3,
        name: "Karim's Historic Mughlai Eatery",
        city: "Old Delhi",
        landmark: "Jama Masjid & Red Fort",
        category: "north-indian",
        type: "Heritage Eatery",
        diet: "Non-Veg Specialty",
        rating: 4.7,
        reviewsCount: 5400,
        priceForTwo: "₹800 for two",
        priceRange: "budget",
        image: "qutub-minar.jpg",
        specialty: "Mutton Burra Kebab, Chicken Jahangiri, Shahi Tukda",
        description: "Established in 1913 near Jama Masjid, carrying forward royal recipes from the kitchens of the Mughal Emperors.",
        address: "Gali Kababian, Jama Masjid, Old Delhi",
        distance: "0.4 km from Red Fort",
        verified: true
    },
    {
        id: 4,
        name: "Chokhi Dhani Ethnic Dining Village",
        city: "Jaipur, Rajasthan",
        landmark: "Hawa Mahal & City Palace",
        category: "rajasthani",
        type: "Cultural Theme Dining",
        diet: "Pure Vegetarian",
        rating: 4.8,
        reviewsCount: 2890,
        priceForTwo: "₹1,800 for two",
        priceRange: "mid",
        image: "dal-baati.jpg",
        specialty: "Unlimited Rajasthani Royal Thali, Churma, Gatte ki Sabzi",
        description: "Immerse yourself in authentic Rajasthani village culture with folk music, Ghoomar dance, puppet shows, and a massive ghee-rich thali.",
        address: "12 Mile, Tonk Road, Jaipur, Rajasthan",
        distance: "12 km from Hawa Mahal",
        verified: true
    },
    {
        id: 5,
        name: "Kesar Da Dhaba",
        city: "Amritsar, Punjab",
        landmark: "Golden Temple",
        category: "north-indian",
        type: "Historic Heritage Dhaba",
        diet: "Pure Vegetarian",
        rating: 4.8,
        reviewsCount: 4100,
        priceForTwo: "₹600 for two",
        priceRange: "budget",
        image: "sarsondasaag.jpeg",
        specialty: "Dal Makhani, Lachha Paratha, Phirni",
        description: "Serving iconic Punjabi comfort food since 1916. Their signature slow-cooked Dal Makhani is infused with pure desi ghee.",
        address: "Chowk Passian, Near Town Hall, Amritsar, Punjab",
        distance: "0.8 km from Golden Temple",
        verified: true
    },
    {
        id: 6,
        name: "Mavalli Tiffin Room (MTR)",
        city: "Bengaluru, Karnataka",
        landmark: "Hampi & South Heritage Circuit",
        category: "south-indian",
        type: "Heritage Tiffin Center",
        diet: "Pure Vegetarian",
        rating: 4.7,
        reviewsCount: 3800,
        priceForTwo: "₹450 for two",
        priceRange: "budget",
        image: "kerala-sadya.jpg",
        specialty: "Rava Dosa, Masala Dosa, Filter Coffee, Chandrahara",
        description: "Iconic South Indian culinary institution operating since 1924, famous for inventing the Rava Dosa during WWII resource shortages.",
        address: "Lalbagh Road, Mavalli, Bengaluru, Karnataka",
        distance: "Central South Heritage Hub",
        verified: true
    },
    {
        id: 7,
        name: "Saravana Bhavan Royal Feast",
        city: "Madurai, Tamil Nadu",
        landmark: "Meenakshi Temple",
        category: "south-indian",
        type: "Banana Leaf Traditional",
        diet: "Pure Vegetarian",
        rating: 4.8,
        reviewsCount: 2650,
        priceForTwo: "₹500 for two",
        priceRange: "budget",
        image: "meenakshi-temple.jpg",
        specialty: "South Indian Meals on Banana Leaf, Sambar Rice, Payasam",
        description: "Authentic temple-style Tamil vegetarian feast served fresh on aromatic banana leaves with unlimited traditional gravies and payasam.",
        address: "West Tower Street, Near Meenakshi Temple, Madurai",
        distance: "0.2 km from Meenakshi Temple",
        verified: true
    },
    {
        id: 8,
        name: "6 Ballygunge Place",
        city: "Kolkata, West Bengal",
        landmark: "Victoria Memorial & Dakshineswar",
        category: "bengali",
        type: "Fine Heritage Dining",
        diet: "Veg & Non-Veg",
        rating: 4.8,
        reviewsCount: 2100,
        priceForTwo: "₹1,600 for two",
        priceRange: "mid",
        image: "victoria-memorial.jpg",
        specialty: "Koshi Mangsho, Dab Chingri, Luchi, Mishti Doi",
        description: "Housed in a restored 1920s colonial mansion, serving authentic zamindari Bengali thalis and fresh mustard fish delicacies.",
        address: "6 Ballygunge Place, Ballygunge, Kolkata",
        distance: "4.2 km from Victoria Memorial",
        verified: true
    },
    {
        id: 9,
        name: "Britto's Beachside Heritage Shack",
        city: "Baga, Goa",
        landmark: "Basilica of Bom Jesus & Fort Aguada",
        category: "coastal",
        type: "Seafood Shack & Dining",
        diet: "Coastal Seafood & Veg",
        rating: 4.6,
        reviewsCount: 3900,
        priceForTwo: "₹1,400 for two",
        priceRange: "mid",
        image: "goan-fish-curry.jpeg",
        specialty: "Goan Fish Curry Rice, Prawn Balchão, Bebinca Dessert",
        description: "Legendary Goan coastal eatery right on the beach, serving fiery Goan spice curries, grilled seafood, and chilled beverages.",
        address: "Baga Beach, Calangute, Goa",
        distance: "8 km from Fort Aguada",
        verified: true
    },
    {
        id: 10,
        name: "Laxmi Mishthan Bhandar (LMB)",
        city: "Jaipur, Rajasthan",
        landmark: "Hawa Mahal & Johari Bazaar",
        category: "rajasthani",
        type: "Heritage Sweet & Thali",
        diet: "Pure Vegetarian",
        rating: 4.8,
        reviewsCount: 3100,
        priceForTwo: "₹900 for two",
        priceRange: "mid",
        image: "dal-baati.jpg",
        specialty: "Rajasthani Royal Thali, Paneer Ghewar, Pyaz Kachori",
        description: "Established in 1727 alongside the founding of Jaipur's Pink City, world-famous for royal vegetarian thalis and traditional sweets.",
        address: "Johari Bazaar, Pink City, Jaipur, Rajasthan",
        distance: "0.5 km from Hawa Mahal",
        verified: true
    },
    {
        id: 11,
        name: "Paradise Biryani & Heritage Restaurant",
        city: "Hyderabad, Telangana",
        landmark: "Charminar & Golconda Fort",
        category: "north-indian",
        type: "Heritage Mughlai & Biryani",
        diet: "Veg & Non-Veg",
        rating: 4.7,
        reviewsCount: 6200,
        priceForTwo: "₹850 for two",
        priceRange: "budget",
        image: "charminar.jpg",
        specialty: "Hyderabadi Mutton Dum Biryani, Mirchi ka Salan, Double ka Meetha",
        description: "Operating near Charminar since 1953, globally famous for authentic slow-cooked Nizam-style Dum Biryani.",
        address: "Secunderabad & Charminar Road, Hyderabad",
        distance: "1.2 km from Charminar",
        verified: true
    },
    {
        id: 12,
        name: "Tunday Kababi",
        city: "Lucknow, Uttar Pradesh",
        landmark: "Bara Imambara & Rumi Darwaza",
        category: "north-indian",
        type: "Awadhi Heritage Eatery",
        diet: "Non-Veg Specialty",
        rating: 4.9,
        reviewsCount: 4800,
        priceForTwo: "₹500 for two",
        priceRange: "budget",
        image: "uttarpradesh.jpg",
        specialty: "Melt-in-mouth Galouti Kebab, Mughlai Paratha, Shahi Tukda",
        description: "Created in 1905 for the Nawab of Awadh, world-renowned for its secret 160-spice melt-in-the-mouth Galouti Kebabs.",
        address: "Akbari Gate, Chowk, Lucknow, Uttar Pradesh",
        distance: "1.5 km from Bara Imambara",
        verified: true
    },
    {
        id: 13,
        name: "Agashiye - House of MG",
        city: "Ahmedabad, Gujarat",
        landmark: "Sabarmati Ashram & Sun Temple Circuit",
        category: "rajasthani",
        type: "Rooftop Heritage Dining",
        diet: "Pure Vegetarian",
        rating: 4.9,
        reviewsCount: 1950,
        priceForTwo: "₹2,200 for two",
        priceRange: "mid",
        image: "gujarati-thali.jpg",
        specialty: "Unlimited Gujarati Royal Thali, Kadhi Khichdi, Basundi",
        description: "Set on the terrace of a restored 1924 heritage mansion, offering an authentic Gujarati royal dining experience.",
        address: "Opposite Sidi Saiyyed Mosque, Lal Darwaja, Ahmedabad",
        distance: "0.1 km from Sidi Saiyyed Mosque",
        verified: true
    },
    {
        id: 14,
        name: "Malabar Junction - Fort House",
        city: "Fort Kochi, Kerala",
        landmark: "Chinese Fishing Nets & Mattancherry",
        category: "coastal",
        type: "Waterfront Heritage Dining",
        diet: "Coastal & Veg",
        rating: 4.8,
        reviewsCount: 1680,
        priceForTwo: "₹1,800 for two",
        priceRange: "mid",
        image: "kerala.jpg",
        specialty: "Karimeen Pollichathu (Pearlspot Fish), Kerala Appam, Stew",
        description: "Overlooking the Arabian Sea, serving authentic coconut-infused Kerala seafood in a serene colonial courtyard setting.",
        address: "Calvathy Road, Fort Kochi, Kerala",
        distance: "0.5 km from Chinese Fishing Nets",
        verified: true
    },
    {
        id: 15,
        name: "Dasaprakash Heritage Restaurant",
        city: "Mysuru, Karnataka",
        landmark: "Mysore Palace",
        category: "south-indian",
        type: "Heritage Vegetarian",
        diet: "Pure Vegetarian",
        rating: 4.7,
        reviewsCount: 2150,
        priceForTwo: "₹650 for two",
        priceRange: "budget",
        image: "kerala-sadya.jpg",
        specialty: "Mysore Masala Dosa, Bisibelebath, Badam Halwa",
        description: "Iconic South Indian culinary landmark near Mysuru Palace, serving royal Udupi-style vegetarian thalis since 1938.",
        address: "Gandhi Square, Near Mysore Palace, Mysuru",
        distance: "0.6 km from Mysore Palace",
        verified: true
    },
    {
        id: 16,
        name: "Deena Nath Chaat Bhandar",
        city: "Varanasi, Uttar Pradesh",
        landmark: "Kashi Vishwanath & Dashashwamedh Ghat",
        category: "north-indian",
        type: "Heritage Street Food",
        diet: "Pure Vegetarian",
        rating: 4.8,
        reviewsCount: 3400,
        priceForTwo: "₹400 for two",
        priceRange: "budget",
        image: "uttarpradesh.jpg",
        specialty: "Tamatar Chaat, Palak Chaat, Kashi Thali, Rabri Jalebi",
        description: "Legendary Varanasi food sanctuary near the Kashi Vishwanath temple ghats, famous for clay-pot Tamatar Chaat and saffron Rabri.",
        address: "Luxa Road, Near Godowlia Chowk, Varanasi",
        distance: "0.8 km from Kashi Vishwanath Temple",
        verified: true
    },
    {
        id: 17,
        name: "Flurys Colonial Tearoom",
        city: "Kolkata, West Bengal",
        landmark: "Victoria Memorial & Park Street",
        category: "bengali",
        type: "Colonial Heritage Tearoom",
        diet: "Veg & Non-Veg",
        rating: 4.7,
        reviewsCount: 2900,
        priceForTwo: "₹1,200 for two",
        priceRange: "mid",
        image: "victoria-memorial.jpg",
        specialty: "English Heritage Breakfast, Rum Balls, Darjeeling Tea",
        description: "Established in 1927 on Park Street, Kolkata's most iconic colonial tearoom frequented by generations of artists and travelers.",
        address: "18A Park Street, Kolkata, West Bengal",
        distance: "1.5 km from Victoria Memorial",
        verified: true
    },
    {
        id: 18,
        name: "Gajalee Malvani Seafood",
        city: "Mumbai, Maharashtra",
        landmark: "Gateway of India & Marine Drive",
        category: "coastal",
        type: "Malvani Coastal Dining",
        diet: "Coastal Seafood & Veg",
        rating: 4.8,
        reviewsCount: 3120,
        priceForTwo: "₹2,500 for two",
        priceRange: "mid",
        image: "gateway-of-india.jpg",
        specialty: "Tandoori Crab, Bombil Fry, Sol Kadi, Lobster Curry",
        description: "Renowned Maharashtra coastal institution specializing in authentic spicy Malvani seafood, fresh crabs, and chilled Sol Kadi.",
        address: "Hanuman Road, Vile Parle East, Mumbai",
        distance: "Central Mumbai Coastal Hub",
        verified: true
    },
    {
        id: 19,
        name: "Peter Cat",
        city: "Kolkata, West Bengal",
        landmark: "Victoria Memorial & Indian Museum",
        category: "bengali",
        type: "Heritage Dining & Grill",
        diet: "Veg & Non-Veg",
        rating: 4.8,
        reviewsCount: 4300,
        priceForTwo: "₹1,800 for two",
        priceRange: "mid",
        image: "victoria-memorial.jpg",
        specialty: "Sizzling Cheelo Kebab, Butter Rice, Mutton Steak",
        description: "Famous Kolkata dining landmark operating since 1975, world-famous for inventing the signature sizzling Cheelo Kebab platter.",
        address: "18A Park Street, Near Stephen Court, Kolkata",
        distance: "1.2 km from Victoria Memorial",
        verified: true
    },
    {
        id: 20,
        name: "Fisherman's Wharf Sal River",
        city: "Cavelossim, Goa",
        landmark: "Basilica of Bom Jesus & South Goa Beaches",
        category: "coastal",
        type: "Riverfront Heritage Dining",
        diet: "Coastal & Veg",
        rating: 4.9,
        reviewsCount: 2750,
        priceForTwo: "₹2,000 for two",
        priceRange: "mid",
        image: "goan-fish-curry.jpeg",
        specialty: "Kingfish Rava Fry, Goan Crab Xacuti, Bebinca Dessert",
        description: "Set along the picturesque Sal River in Goa, combining authentic Goan spice recipes with live music and riverfront views.",
        address: "At the Riverside, Cavelossim, Mobor, Goa",
        distance: "South Goa Heritage Circuit",
        verified: true
    }
];

// INITIALIZATION & RENDER
document.addEventListener('DOMContentLoaded', () => {
    renderRestaurants(restaurantData);

    // Event Listeners for Filters
    const searchInput = document.getElementById('restaurantSearch');
    const categoryFilter = document.getElementById('categoryFilter');
    const priceFilter = document.getElementById('priceFilter');
    const sortFilter = document.getElementById('sortFilter');

    if (searchInput) searchInput.addEventListener('input', filterRestaurants);
    if (categoryFilter) categoryFilter.addEventListener('change', filterRestaurants);
    if (priceFilter) priceFilter.addEventListener('change', filterRestaurants);
    if (sortFilter) sortFilter.addEventListener('change', filterRestaurants);

    // Booking Modal Handler
    const bookingForm = document.getElementById('restaurantBookingForm');
    if (bookingForm) {
        bookingForm.addEventListener('submit', handleTableReservation);
    }
});

// FILTER LOGIC
function filterRestaurants() {
    const searchTerm = document.getElementById('restaurantSearch').value.toLowerCase().trim();
    const selectedCategory = document.getElementById('categoryFilter').value;
    const selectedPrice = document.getElementById('priceFilter').value;
    const selectedSort = document.getElementById('sortFilter').value;

    let filtered = restaurantData.filter(item => {
        const matchSearch = item.name.toLowerCase().includes(searchTerm) ||
                            item.city.toLowerCase().includes(searchTerm) ||
                            item.landmark.toLowerCase().includes(searchTerm) ||
                            item.specialty.toLowerCase().includes(searchTerm);

        const matchCategory = (selectedCategory === 'all') || (item.category === selectedCategory);
        const matchPrice = (selectedPrice === 'all') || (item.priceRange === selectedPrice);

        return matchSearch && matchCategory && matchPrice;
    });

    // SORT LOGIC
    if (selectedSort === 'rating-desc') {
        filtered.sort((a, b) => b.rating - a.rating);
    } else if (selectedSort === 'reviews-desc') {
        filtered.sort((a, b) => b.reviewsCount - a.reviewsCount);
    } else if (selectedSort === 'name-asc') {
        filtered.sort((a, b) => a.name.localeCompare(b.name));
    }

    renderRestaurants(filtered);
}

// RENDER RESTAURANTS GRID
function renderRestaurants(list) {
    const container = document.getElementById('restaurantGridContainer');
    const countDisplay = document.getElementById('resultsCount');

    if (!container) return;

    if (countDisplay) {
        countDisplay.textContent = `Showing ${list.length} Heritage Restaurants`;
    }

    if (list.length === 0) {
        container.innerHTML = `
            <div class="no-results-box">
                <div class="no-results-icon">🍽️</div>
                <h3>No Heritage Restaurants Found</h3>
                <p>Try clearing your search query or selecting a different cuisine filter.</p>
            </div>
        `;
        return;
    }

    container.innerHTML = list.map(item => `
        <div class="restaurant-card">
            <div class="restaurant-card-content">
                <div class="badges-row">
                    <span class="type-badge">${item.type}</span>
                    <span class="diet-badge ${item.diet.includes('Pure') ? 'veg' : ''}">${item.diet}</span>
                </div>

                <div class="card-header-row">
                    <h2>${item.name}</h2>
                    ${item.verified ? '<span class="verified-icon" title="Verified Heritage Dining">✔</span>' : ''}
                </div>

                <p class="restaurant-location">📍 <strong>${item.city}</strong> • <span class="distance-tag">${item.distance}</span></p>

                <div class="rating-price-row">
                    <div class="rating-pill">
                        <span class="star-gold">⭐ ${item.rating}</span>
                        <span class="review-count">(${item.reviewsCount} reviews)</span>
                    </div>
                    <span class="price-display">💰 ${item.priceForTwo}</span>
                </div>

                <div class="specialty-box">
                    <span class="specialty-label">🔥 Signature Dishes:</span>
                    <p class="specialty-text">${item.specialty}</p>
                </div>

                <p class="restaurant-desc">${item.description}</p>

                <div class="card-footer-actions">
                    <button onclick="openBookingModal('${item.name.replace(/'/g, "\\'")}', '${item.city.replace(/'/g, "\\'")}')" class="btn reserve-btn">
                        <span>Reserve Table</span> 🍽️
                    </button>
                    <a href="tel:+919977717139" class="btn call-rest-btn" title="Call Restaurant Hotline">
                        📞 Call
                    </a>
                </div>
            </div>
        </div>
    `).join('');
}

// MODAL HANDLING
function openBookingModal(restaurantName, city) {
    const modal = document.getElementById('bookingModal');
    const select = document.getElementById('selectedRestaurantInput');
    if (select) {
        select.value = `${restaurantName} (${city})`;
    }
    if (modal) {
        modal.style.display = 'flex';
    }
}

function closeBookingModal() {
    const modal = document.getElementById('bookingModal');
    if (modal) {
        modal.style.display = 'none';
    }
}

// FORM RESERVATION SUBMIT
function handleTableReservation(e) {
    e.preventDefault();
    const restName = document.getElementById('selectedRestaurantInput').value;
    const userName = document.getElementById('guestName').value;
    const userPhone = document.getElementById('guestPhone').value;
    const date = document.getElementById('resDate').value;
    const guests = document.getElementById('resGuests').value;

    const alertBox = document.getElementById('reservationSuccessAlert');
    if (alertBox) {
        alertBox.style.display = 'block';
        alertBox.innerHTML = `
            ✔ <strong>Table Reservation Confirmed!</strong><br>
            Thank you <strong>${userName}</strong>! Your table for <strong>${guests} guest(s)</strong> at <strong>${restName}</strong> on <strong>${date}</strong> has been received.<br>
            Confirmation details sent to <strong>${userPhone}</strong>. Our helpline team (+91 99777 17139) is available for any special requests!
        `;
    }

    setTimeout(() => {
        closeBookingModal();
    }, 4000);
}
