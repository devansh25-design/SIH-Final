const cultureData = {
    food: [
        {
            name: "Gujarati Thali",
            location: "Gujarat",
            description: "A traditional feast balancing sweet, savory, and spicy flavors featuring Dhokla, Rotli, Dal, and Kadhi.",
            image: "gujarati-thali.jpg",
            type: "Traditional Culinary Art"
        },
        {
            name: "Rajasthani Dal Baati Churma",
            location: "Rajasthan",
            description: "An iconic desert dish combining hard baked wheat balls (Baati), spiced lentil curry (Dal), and crushed sweet ghee mix (Churma).",
            image: "dal-baati.jpg",
            type: "Royal Heritage Cuisine"
        },
        {
            name: "Kerala Sadya Feast",
            location: "Kerala",
            description: "A grand 26-dish vegetarian banquet served on fresh banana leaves during Onam, featuring Avial, Sambar, and Payasam.",
            image: "kerala-sadya.jpg",
            type: "Festive Banquet Tradition"
        },
        {
            name: "Golden Temple Langar (Guru Ram Das Langar)",
            location: "Amritsar, Punjab",
            description: "The sacred 500-year-old Sikh tradition of serving free, hot vegetarian meals to over 100,000 pilgrims daily, embodying human equality, selfless volunteer service (Sewa), and community spirit.",
            image: "langar-hall-amritsar.jpg",
            type: "Sacred Community Kitchen & Sewa"
        }
    ],

    art: [
        {
            name: "Madhubani Folk Painting",
            location: "Mithila, Bihar",
            description: "Ancient wall and canvas art created using twigs, fingers, and natural dyes featuring mythological and nature motifs.",
            image: "madhubani.jpg",
            type: "Traditional Folk Painting"
        },
        {
            name: "Pattachitra Scroll Painting",
            location: "Raghurajpur, Odisha",
            description: "Detailed cloth-based scroll paintings telling stories of Lord Jagannath with natural mineral pigments.",
            image: "pattachitra.jpg",
            type: "UNESCO Recognized Craft"
        },
        {
            name: "Kutch Mirror & Thread Work",
            location: "Kutch, Gujarat",
            description: "Signature embroidery technique featuring bright silk threads, mirror work (Abhla), and intricate geometric stitches.",
            image: "kutch-embroidery.jpg",
            type: "Handicraft & Textile Art"
        },
        {
            name: "Arabic & Islamic Calligraphy Art",
            location: "Old Delhi & Hyderabad",
            description: "Master calligraphy artisans using traditional reed pens (Qalam) and hand-formulated natural inks to craft intricate manuscript art and ornamental scripts.",
            image: "arabic-calligraphy.jpg",
            type: "Heritage Manuscript & Calligraphy Art"
        },
        {
            name: "Basilica of Bom Jesus & Baroque Architecture",
            location: "Old Goa, Goa",
            description: "A 16th-century UNESCO World Heritage landmark built in classical Mannerist Baroque architectural style, renowned for its unplastered granite facade and gilded wood-carved altars.",
            image: "basilica-bom-jesus.jpg",
            type: "UNESCO Heritage Sacred Architecture"
        }
    ],

    dance: [
        {
            name: "Qawwali Performance at Nizamuddin Dargah",
            location: "Nizamuddin West, New Delhi",
            description: "Mesmerizing Sufi devotional music performed every Thursday evening in the marble courtyard of Hazrat Nizamuddin Auliya Dargah, featuring harmonium rhythms and spiritual ecstasy.",
            image: "qawwali-nizamuddin.jpg",
            type: "Sufi Devotional Music & Tradition"
        },
        {
            name: "Garba & Raas",
            location: "Gujarat",
            description: "Enchanting folk dance performed in concentric circles around a sacred lamp or Goddess idol during Navratri.",
            image: "garba.jpg",
            type: "Folk Dance Tradition"
        },
        {
            name: "Bharatanatyam",
            location: "Tamil Nadu",
            description: "One of the oldest classical dance forms of India, renowned for sculpture-like poses, mudras, and expressive Nritta.",
            image: "bharatanatyam.jpg",
            type: "Classical Temple Dance"
        },
        {
            name: "Kathak",
            location: "Uttar Pradesh & North India",
            description: "Classical storytelling dance characterized by rhythmic footwork (Tatkkar), rapid pirouettes (Chakkars), and ghungroo bell resonance.",
            image: "kathak.jpg",
            type: "Classical Storytelling Dance"
        },
        {
            name: "Assamese Bihu Dance",
            location: "Assam",
            description: "Exuberant spring folk dance performed with rapid hand movements and rhythmic swaying to Dhol drums and Pepa flutes.",
            image: "bihu.jpg",
            type: "Spring Harvest Dance"
        },
        {
            name: "Naga Tribal Warrior Dance",
            location: "Nagaland",
            description: "Energetic tribal dance performed by Naga warriors donning hornbill feathered crowns, spears, and handwoven shawls.",
            image: "hornbill.jpg",
            type: "Indigenous Tribal Dance"
        }
    ],

    clothing: [
        {
            name: "Bandhani Tie & Dye",
            location: "Gujarat & Rajasthan",
            description: "Traditional textile dyeing art where fabric is plucked with fingernails into thousands of tiny knots before dyeing.",
            image: "bandhani.jpg",
            type: "Heritage Textile Craft"
        },
        {
            name: "Indian Silk Saree Heritage",
            location: "Across India (Banaras, Kanchipuram)",
            description: "An unstitched 6-yard garment woven in gold zari silk, serving as the timeless symbol of Indian grace.",
            image: "saree.jpg",
            type: "Traditional National Garment"
        },
        {
            name: "Phulkari Embroidery",
            location: "Punjab",
            description: "Lively floral embroidery technique stitched with unspun silk threads (Pat) on coarse cotton fabric.",
            image: "phulkari.jpg",
            type: "Heritage Textile Craft"
        },
        {
            name: "Muga Silk Mekhela Chador",
            location: "Assam",
            description: "Two-piece golden silk garment made from wild Muga silkworms native exclusively to the Brahmaputra valley.",
            image: "bihu.jpg",
            type: "Regional Traditional Attire"
        }
    ]
};

const container = document.getElementById("cultureContainer");

function showCulture(category, btnElement) {
    const data = cultureData[category];
    if (!container || !data) return;

    container.innerHTML = "";

    data.forEach(item => {
        const card = document.createElement("div");
        card.className = "culture-card";

        card.innerHTML = `
            <img src="${item.image}" alt="${item.name}" onerror="this.onerror=null; this.src='scenery_bg.png';">
            <div class="culture-content">
                <h2>${item.name}</h2>
                <div class="culture-location">📍 ${item.location}</div>
                <p>${item.description}</p>
                <span class="culture-type">${item.type}</span>
            </div>
        `;

        container.appendChild(card);
    });

    // Update active tab styling
    document.querySelectorAll(".culture-tabs button").forEach(button => {
        button.classList.remove("active");
    });

    if (btnElement) {
        btnElement.classList.add("active");
    } else {
        const activeBtn = Array.from(document.querySelectorAll(".culture-tabs button")).find(b => b.getAttribute("onclick")?.includes(category));
        if (activeBtn) activeBtn.classList.add("active");
    }
}

// INITIAL LOAD
document.addEventListener("DOMContentLoaded", () => {
    showCulture("food");
});
