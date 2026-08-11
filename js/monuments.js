const monuments = [
    // NORTH INDIA
    {
        name: "Taj Mahal",
        location: "Agra, Uttar Pradesh",
        region: "north",
        description: "World-famous 17th-century white marble mausoleum built by Shah Jahan, an eternal symbol of love.",
        image: "taj.jpg"
    },
    {
        name: "Red Fort",
        location: "New Delhi",
        region: "north",
        description: "Historic red sandstone citadel built by Shah Jahan, serving as the seat of Mughal power.",
        image: "red-fort.jpg"
    },
    {
        name: "Qutub Minar",
        location: "New Delhi",
        region: "north",
        description: "The world's tallest brick minaret at 72.5 meters, adorned with intricate iron pillar and carved calligraphic bands.",
        image: "qutub-minar.jpg"
    },
    {
        name: "Amer Fort",
        location: "Jaipur, Rajasthan",
        region: "north",
        description: "Spectacular hilltop fortress featuring Sheesh Mahal (Mirror Palace) overlooking Maota Lake.",
        image: "amer-fort.jpg"
    },
    {
        name: "Hawa Mahal",
        location: "Jaipur, Rajasthan",
        region: "north",
        description: "Five-story pink sandstone palace with 953 honeycombed jharokha windows built for royal ladies.",
        image: "hawa-mahal.jpg"
    },
    {
        name: "Golden Temple (Harmandir Sahib)",
        location: "Amritsar, Punjab",
        region: "north",
        description: "The holiest Sikh shrine clad in gold leaf, floating peacefully on the sacred Amrit Sarovar pool.",
        image: "punjab.jpeg"
    },
    {
        name: "Rakhigarhi Indus Valley Site",
        location: "Hisar, Haryana",
        region: "north",
        description: "The largest Bronze Age Indus Valley Civilization site featuring ancient brick drainage and pottery.",
        image: "haryana.jpeg"
    },
    {
        name: "Kedarnath Ancient Temple",
        location: "Garhwal, Uttarakhand",
        region: "north",
        description: "1200-year-old stone temple standing against snow-capped Himalayan peaks of the Garhwal range.",
        image: "uttarakhand.jpeg"
    },
    {
        name: "Shalimar Bagh Mughal Gardens",
        location: "Srinagar, Jammu & Kashmir",
        region: "north",
        description: "Royal Mughal terraced gardens built by Emperor Jahangir overlooking Dal Lake.",
        image: "jammu and kashmir.jpeg"
    },
    {
        name: "Leh Palace",
        location: "Leh, Ladakh",
        region: "north",
        description: "Nine-story royal palace modeled after Tibet's Potala Palace overlooking Leh town.",
        image: "ladakh.jpeg"
    },
    {
        name: "Le Corbusier Capitol Complex",
        location: "Chandigarh",
        region: "north",
        description: "UNESCO World Heritage modern architectural masterpiece housing Open Hand Monument.",
        image: "chandigarh.jpg"
    },

    // SOUTH INDIA
    {
        name: "Hampi Stone Chariot",
        location: "Hampi, Karnataka",
        region: "south",
        description: "Monolithic stone chariot and Vitthala temple ruins of the Vijayanagara Empire.",
        image: "hampi.jpg"
    },
    {
        name: "Brihadishvara Temple",
        location: "Thanjavur, Tamil Nadu",
        region: "south",
        description: "1000-year-old Chola architectural masterpiece with an 80-ton single granite stone apex dome.",
        image: "tamilnadu.jpg"
    },
    {
        name: "Meenakshi Amman Temple",
        location: "Madurai, Tamil Nadu",
        region: "south",
        description: "Dravidian temple complex featuring 14 soaring Gopuram towers adorned with thousands of colorful statues.",
        image: "meenakshi-temple.jpg"
    },
    {
        name: "Lepakshi Temple & Hanging Pillar",
        location: "Anantapur, Andhra Pradesh",
        region: "south",
        description: "16th-century Vijayanagara shrine famous for its miraculous pillar that hangs without touching ground.",
        image: "andhra pradesh.jpeg"
    },
    {
        name: "Charminar",
        location: "Hyderabad, Telangana",
        region: "south",
        description: "Global symbol of Hyderabad built in 1591 CE with four soaring 48-meter minarets.",
        image: "charminar.jpg"
    },
    {
        name: "Auroville Matrimandir",
        location: "Puducherry",
        region: "south",
        description: "Golden geodesic sphere dedicated to human unity amidst French colonial coastal heritage.",
        image: "puducherry.jpg"
    },

    // WEST INDIA
    {
        name: "Statue of Unity",
        location: "Kevadia, Gujarat",
        region: "west",
        description: "The world's tallest statue (182 meters) honoring Sardar Vallabhbhai Patel near Narmada river.",
        image: "statue-unity.jpg"
    },
    {
        name: "Gateway of India",
        location: "Mumbai, Maharashtra",
        region: "west",
        description: "Iconic basalt arch monument erected at Mumbai harbor during British Raj in 1911.",
        image: "gateway-of-india.jpg"
    },
    {
        name: "Ajanta & Ellora Caves",
        location: "Chhatrapati Sambhajinagar, Maharashtra",
        region: "west",
        description: "34 rock-cut basalt cave temples featuring Kailasa Temple — the world's largest monolithic carving.",
        image: "maharashtra.jpg"
    },
    {
        name: "Basilica of Bom Jesus",
        location: "Old Goa, Goa",
        region: "west",
        description: "16th-century UNESCO Portuguese Baroque church holding the mortal remains of St. Francis Xavier.",
        image: "goa.jpg"
    },
    {
        name: "Diu Fort",
        location: "Diu, Daman & Diu",
        region: "west",
        description: "Imposing coastal fortress surrounded by sea water moats and historical bronze cannons.",
        image: "daman and diu.jpg"
    },

    // CENTRAL INDIA
    {
        name: "Khajuraho Temples",
        location: "Chhatarpur, Madhya Pradesh",
        region: "central",
        description: "UNESCO Nagara temples built by Chandela dynasty renowned for exquisite stone carvings.",
        image: "khajuraho.jpg"
    },
    {
        name: "Sanchi Stupa",
        location: "Raisen, Madhya Pradesh",
        region: "central",
        description: "Oldest stone structure in India commissioned by Emperor Ashoka in 3rd century BCE.",
        image: "madhya pradesh.jpg"
    },
    {
        name: "Laxman Brick Temple",
        location: "Sirpur, Chhattisgarh",
        region: "central",
        description: "7th-century red brick temple, one of the finest surviving examples of Gupta era architecture.",
        image: "chhattisgarh.jpg"
    },

    // EAST & NORTH-EAST INDIA
    {
        name: "Konark Sun Temple",
        location: "Puri, Odisha",
        region: "east",
        description: "13th-century chariot temple with 24 intricately carved stone wheels acting as sundials.",
        image: "konark.jpg"
    },
    {
        name: "Victoria Memorial",
        location: "Kolkata, West Bengal",
        region: "east",
        description: "Grand white Makrana marble monument reflecting in garden pools, blending Indo-Saracenic styles.",
        image: "victoria-memorial.jpg"
    },
    {
        name: "Mahabodhi Temple",
        location: "Bodh Gaya, Bihar",
        region: "east",
        description: "UNESCO World Heritage temple marking the exact spot where Lord Buddha attained enlightenment.",
        image: "bihar.jpg"
    },
    {
        name: "Maluti Terracotta Temples",
        location: "Dumka, Jharkhand",
        region: "east",
        description: "Historic cluster of 72 terracotta temples depicting mythological scenes built in Bengali Chala style.",
        image: "jharkhand.jpg"
    },
    {
        name: "Rang Ghar",
        location: "Sivasagar, Assam",
        region: "east",
        description: "Two-story oval royal sports pavilion built by Ahom King Pramatta Singha in 1746.",
        image: "assam.jpg"
    },
    {
        name: "Tawang Monastery",
        location: "Tawang, Arunachal Pradesh",
        region: "east",
        description: "Perched at 10,000 ft, India's largest Buddhist monastery holding an 18-ft gilded Buddha.",
        image: "arunachal pradesh.jpg"
    },
    {
        name: "Cellular Jail (Kala Pani)",
        location: "Port Blair, Andaman & Nicobar",
        region: "east",
        description: "Colonial prison turned national memorial commemorating Indian freedom fighters.",
        image: "andaman ad nicobar.jpg"
    }
];


const container =
    document.getElementById(
        "monumentContainer"
    );


function displayMonuments(data) {

    container.innerHTML = "";


    if (data.length === 0) {

        container.innerHTML =
            "<p>No monuments found.</p>";

        return;
    }


    data.forEach(monument => {

        const card =
            document.createElement("div");

        card.className =
            "monument-card";


        card.innerHTML = `

            <img
                src="${monument.image}"
                alt="${monument.name}"
                onerror="this.onerror=null; this.src='scenery_bg.png';"
            >

            <div class="monument-content">

                <h2>
                    ${monument.name}
                </h2>

                <div class="monument-location">
                    📍 ${monument.location}
                </div>

                <p>
                    ${monument.description}
                </p>

                <a
                    href="#"
                    class="explore-btn"
                    onclick="showDetails('${monument.name}')"
                >
                    Discover →
                </a>

            </div>

        `;


        container.appendChild(card);

    });

}


/* FILTER */

function filterMonuments(region) {

    if (region === "all") {

        displayMonuments(monuments);

        return;
    }


    const filtered =
        monuments.filter(
            monument =>
                monument.region === region
        );


    displayMonuments(filtered);

}


/* SEARCH */

document
    .getElementById("monumentSearch")
    .addEventListener(
        "input",
        function () {

            const search =
                this.value.toLowerCase();


            const filtered =
                monuments.filter(
                    monument =>

                        monument.name
                            .toLowerCase()
                            .includes(search)

                        ||

                        monument.location
                            .toLowerCase()
                            .includes(search)
                );


            displayMonuments(filtered);

        }
    );


/* DETAILS */

function showDetails(name) {

    alert(
        "More information about " +
        name +
        " will be added in the next version."
    );

}


/* INITIAL LOAD */

displayMonuments(monuments);