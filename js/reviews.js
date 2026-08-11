const initialReviews = [
    {
        id: "rev-1",
        name: "Ananya Deshmukh",
        location: "Mumbai, India",
        place: "Taj Mahal, Agra",
        rating: 5,
        date: "2 days ago",
        review: "Visiting the Taj Mahal at sunrise was a magical experience! The white marble glows in soft golden hues. Be sure to hire an official guide near the entrance gate to skip long ticket queues.",
        photo: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=800&q=80",
        video: "https://assets.mixkit.co/videos/preview/mixkit-taj-mahal-in-india-40660-large.mp4",
        likes: 42,
        verified: true
    },
    {
        id: "rev-2",
        name: "Marcus Vance",
        location: "London, UK",
        place: "Amer Fort, Jaipur",
        rating: 5,
        date: "5 days ago",
        review: "The mirror palace (Sheesh Mahal) inside Amer Fort left us speechless! Thousands of tiny mirrors reflection when lit by candlelight. Absolutely a must-visit in Rajasthan.",
        photo: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=80",
        video: null,
        likes: 35,
        verified: true
    },
    {
        id: "rev-3",
        name: "Rohan & Meera",
        location: "Bengaluru, India",
        place: "Hampi Chariot Ruins",
        rating: 5,
        date: "1 week ago",
        review: "Exploring the Vijayanagara boulder landscape on electric cycles was an unforgettable adventure! Vittala Temple's stone chariot is an architectural masterpiece.",
        photo: "https://images.unsplash.com/photo-1600100397608-f010e423b971?auto=format&fit=crop&w=800&q=80",
        video: "https://assets.mixkit.co/videos/preview/mixkit-ancient-temple-ruins-41223-large.mp4",
        likes: 29,
        verified: true
    },
    {
        id: "rev-4",
        name: "Dr. Vikram Singh",
        location: "Kolkata, India",
        place: "Konark Sun Temple",
        rating: 4.8,
        date: "2 weeks ago",
        review: "The 24 stone wheels acting as precise sundials demonstrate India's ancient astronomical genius. Do stay for the evening Light and Sound show!",
        photo: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=800&q=80",
        video: null,
        likes: 19,
        verified: true
    },
    {
        id: "rev-5",
        name: "Sophie Laurent",
        location: "Paris, France",
        place: "Kerala Backwaters",
        rating: 5,
        date: "3 weeks ago",
        review: "Cruising through Alleppey on a traditional wooden houseboat surrounded by coconut palms was pure serenity. The fresh fish curry cooked onboard was delicious!",
        photo: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=800&q=80",
        video: null,
        likes: 54,
        verified: true
    }
];

// STATE VARIABLES
let reviewsList = [...initialReviews];
let currentFilter = "all";
let uploadedPhotoData = null;
let uploadedVideoData = null;

// DOM ELEMENTS
const reviewsContainer = document.getElementById("reviewsContainer");
const selectedRatingInput = document.getElementById("selectedRating");
const ratingValText = document.getElementById("ratingValText");

// INITIALIZE RATING PICKER
function setRating(val) {
    if (selectedRatingInput) selectedRatingInput.value = val;
    
    const stars = document.querySelectorAll("#starPicker .star-pick");
    stars.forEach((star, idx) => {
        if (idx < val) {
            star.classList.add("active");
        } else {
            star.classList.remove("active");
        }
    });

    const ratingLabels = ["1.0 (Poor)", "2.0 (Fair)", "3.0 (Good)", "4.0 (Very Good)", "5.0 (Excellent)"];
    if (ratingValText) {
        ratingValText.textContent = `${val}.0 / 5.0 (${ratingLabels[val - 1]})`;
    }
}

// MEDIA FILE PREVIEW HANDLER
function previewMedia(type) {
    const previewBox = document.getElementById("mediaPreviewBox");
    const previewWrap = document.getElementById("previewWrap");
    if (!previewBox || !previewWrap) return;

    if (type === "photo") {
        const file = document.getElementById("photoFile").files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                uploadedPhotoData = e.target.result;
                renderPreviews();
            };
            reader.readAsDataURL(file);
        }
    } else if (type === "video") {
        const file = document.getElementById("videoFile").files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                uploadedVideoData = e.target.result;
                renderPreviews();
            };
            reader.readAsDataURL(file);
        }
    }
}

function renderPreviews() {
    const previewBox = document.getElementById("mediaPreviewBox");
    const previewWrap = document.getElementById("previewWrap");
    if (!previewBox || !previewWrap) return;

    previewWrap.innerHTML = "";
    let hasMedia = false;

    if (uploadedPhotoData) {
        hasMedia = true;
        const img = document.createElement("img");
        img.src = uploadedPhotoData;
        img.className = "thumb-preview";
        previewWrap.appendChild(img);
    }

    if (uploadedVideoData) {
        hasMedia = true;
        const vid = document.createElement("video");
        vid.src = uploadedVideoData;
        vid.controls = true;
        vid.className = "thumb-preview";
        previewWrap.appendChild(vid);
    }

    previewBox.style.display = hasMedia ? "block" : "none";
}

// HANDLE REVIEW FORM SUBMISSION
function handleReviewSubmit(e) {
    e.preventDefault();

    const name = document.getElementById("touristName").value.trim();
    const city = document.getElementById("touristCity").value.trim() || "India";
    const place = document.getElementById("placeSelect").value;
    const rating = parseFloat(document.getElementById("selectedRating").value) || 5;
    const text = document.getElementById("reviewText").value.trim();

    if (!name || !place || !text) {
        alert("Please complete all required fields (Name, Destination, and Review).");
        return;
    }

    const newReview = {
        id: "rev-" + Date.now(),
        name: name,
        location: city,
        place: place,
        rating: rating,
        date: "Just now",
        review: text,
        photo: uploadedPhotoData || null,
        video: uploadedVideoData || null,
        likes: 1,
        verified: true
    };

    // ADD TO TOP OF LIST
    reviewsList.unshift(newReview);

    // RESET FORM & PREVIEWS
    document.getElementById("reviewUploadForm").reset();
    uploadedPhotoData = null;
    uploadedVideoData = null;
    setRating(5);
    renderPreviews();

    // RE-RENDER FEED
    displayReviews(reviewsList);

    alert("🎉 Thank you! Your review and media have been posted to the traveler feed.");
}

// DISPLAY REVIEWS FEED
function displayReviews(data) {
    if (!reviewsContainer) return;
    reviewsContainer.innerHTML = "";

    if (data.length === 0) {
        reviewsContainer.innerHTML = `
            <div style="text-align: center; padding: 50px 20px; color: #94a3b8;">
                <p>No reviews match your selected filter.</p>
            </div>
        `;
        return;
    }

    data.forEach(item => {
        const card = document.createElement("div");
        card.className = "review-feed-card";

        const starsVisual = "⭐".repeat(Math.floor(item.rating));

        let mediaHTML = "";
        if (item.photo || item.video) {
            mediaHTML += `<div class="review-media-grid">`;
            if (item.photo) {
                mediaHTML += `
                    <div class="media-thumb-item" onclick="openMediaLightbox('${item.photo}', 'image')">
                        <img src="${item.photo}" alt="${item.place}" onerror="this.onerror=null; this.src='scenery_bg.png';">
                        <span class="media-zoom-badge">🔍 Photo</span>
                    </div>
                `;
            }
            if (item.video) {
                mediaHTML += `
                    <div class="media-thumb-item video-item" onclick="openMediaLightbox('${item.video}', 'video')">
                        <video src="${item.video}" preload="metadata" muted></video>
                        <span class="play-overlay-icon">▶</span>
                        <span class="media-zoom-badge">🎥 Video</span>
                    </div>
                `;
            }
            mediaHTML += `</div>`;
        }

        card.innerHTML = `
            <div class="review-card-header">
                <div class="reviewer-avatar">${item.name.charAt(0)}</div>
                <div class="reviewer-meta">
                    <h3>${item.name}</h3>
                    <span class="reviewer-location">📍 ${item.location} • <small class="verified-badge">✔ Verified Tourist</small></span>
                </div>
                <span class="review-date-tag">${item.date}</span>
            </div>

            <div class="review-place-tag">
                <span>📍 Destination: <strong>${item.place}</strong></span>
            </div>

            <div class="review-rating-bar">
                <span class="stars-gold">${starsVisual}</span>
                <span class="rating-num">${item.rating} / 5.0</span>
            </div>

            <p class="review-body-text">${item.review}</p>

            ${mediaHTML}

            <div class="review-card-actions">
                <button class="like-btn" onclick="likeReview('${item.id}', this)">
                    👍 Helpful (<span class="like-count">${item.likes}</span>)
                </button>
                <button class="share-btn" onclick="shareReview('${item.place}')">
                    🔗 Share Review
                </button>
            </div>
        `;

        reviewsContainer.appendChild(card);
    });
}

// FEED FILTERING
function filterFeed(filterType, btnEl) {
    currentFilter = filterType;
    document.querySelectorAll(".feed-filter-btn").forEach(b => b.classList.remove("active"));
    if (btnEl) btnEl.classList.add("active");

    let filtered = [...reviewsList];
    if (filterType === "photo") {
        filtered = filtered.filter(r => r.photo !== null);
    } else if (filterType === "video") {
        filtered = filtered.filter(r => r.video !== null);
    } else if (filterType === "top") {
        filtered = filtered.filter(r => r.rating >= 4.9);
    }

    displayReviews(filtered);
}

// LIKE COUNTER INTERACTION
function likeReview(id, btnEl) {
    const review = reviewsList.find(r => r.id === id);
    if (review) {
        review.likes += 1;
        const countSpan = btnEl.querySelector(".like-count");
        if (countSpan) countSpan.textContent = review.likes;
        btnEl.classList.add("liked");
    }
}

// SHARE REVIEW SIMULATION
function shareReview(place) {
    alert(`🔗 Review Link Copied!\nShare this review about ${place} with your travel friends.`);
}

// LIGHTBOX MODAL
function openMediaLightbox(url, type) {
    const modal = document.getElementById("mediaLightboxModal");
    const holder = document.getElementById("lightboxMediaHolder");
    if (!modal || !holder) return;

    holder.innerHTML = "";
    if (type === "image") {
        const img = document.createElement("img");
        img.src = url;
        holder.appendChild(img);
    } else if (type === "video") {
        const vid = document.createElement("video");
        vid.src = url;
        vid.controls = true;
        vid.autoplay = true;
        holder.appendChild(vid);
    }

    modal.style.display = "flex";
}

function closeMediaLightbox() {
    const modal = document.getElementById("mediaLightboxModal");
    if (modal) {
        modal.style.display = "none";
        const holder = document.getElementById("lightboxMediaHolder");
        if (holder) holder.innerHTML = "";
    }
}

// CLOSE MODAL ON OUTSIDE CLICK
window.addEventListener("click", (e) => {
    const modal = document.getElementById("mediaLightboxModal");
    if (e.target === modal) {
        closeMediaLightbox();
    }
});

// INITIAL DOM LOAD
document.addEventListener("DOMContentLoaded", () => {
    setRating(5);
    displayReviews(reviewsList);
});
