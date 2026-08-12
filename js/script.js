console.log("Bharat Heritage Explorer loaded successfully!");

document.addEventListener('DOMContentLoaded', () => {
    // Hero Video & Visual Slider Controls
    const slides = document.querySelectorAll('.hero-slider-container .slide');
    const dots = document.querySelectorAll('.hero-slider-container .dot');
    const prevBtn = document.getElementById('prevSlide');
    const nextBtn = document.getElementById('nextSlide');
    const playPauseBtn = document.getElementById('playPauseBtn');
    const playPauseIcon = document.getElementById('playPauseIcon');
    const progressFill = document.getElementById('progressFill');
    const currentSlideNum = document.getElementById('currentSlideNum');
    const totalSlideNum = document.getElementById('totalSlideNum');

    if (!slides.length) return;

    let currentIndex = 0;
    let isPlaying = true;
    const slideDuration = 4000; // 6 seconds per slide
    let progressInterval = null;

    if (totalSlideNum) {
        totalSlideNum.textContent = String(slides.length).padStart(2, '0');
    }

    function showSlide(index) {
        if (index < 0) index = slides.length - 1;
        if (index >= slides.length) index = 0;
        currentIndex = index;

        slides.forEach((slide, idx) => {
            const isActive = idx === currentIndex;
            slide.classList.toggle('active', isActive);
            
            const video = slide.querySelector('video');
            if (video) {
                if (isActive) {
                    video.currentTime = 0;
                    const playPromise = video.play();
                    if (playPromise !== undefined) {
                        playPromise.catch(error => {
                            // Autoplay fallback: handles browser restriction if needed
                            console.log("Autoplay restricted or video offline, using poster fallback.");
                        });
                    }
                } else {
                    video.pause();
                }
            }
        });

        dots.forEach((dot, idx) => {
            dot.classList.toggle('active', idx === currentIndex);
        });

        if (currentSlideNum) {
            currentSlideNum.textContent = String(currentIndex + 1).padStart(2, '0');
        }

        resetProgressBar();
    }

    function resetProgressBar() {
        clearInterval(progressInterval);
        if (!progressFill) return;
        
        progressFill.style.width = '0%';
        if (!isPlaying) return;

        let elapsed = 0;
        const intervalStep = 50;

        progressInterval = setInterval(() => {
            elapsed += intervalStep;
            const percentage = Math.min((elapsed / slideDuration) * 100, 100);
            progressFill.style.width = percentage + '%';

            if (elapsed >= slideDuration) {
                clearInterval(progressInterval);
                nextSlide();
            }
        }, intervalStep);
    }

    function nextSlide() {
        showSlide(currentIndex + 1);
    }

    function prevSlide() {
        showSlide(currentIndex - 1);
    }

    function togglePlayPause() {
        isPlaying = !isPlaying;
        if (playPauseIcon) {
            playPauseIcon.textContent = isPlaying ? '⏸' : '▶';
        }
        if (isPlaying) {
            const currentVideo = slides[currentIndex].querySelector('video');
            if (currentVideo) currentVideo.play().catch(() => {});
            resetProgressBar();
        } else {
            clearInterval(progressInterval);
            const currentVideo = slides[currentIndex].querySelector('video');
            if (currentVideo) currentVideo.pause();
        }
    }

    if (nextBtn) nextBtn.addEventListener('click', () => { nextSlide(); });
    if (prevBtn) prevBtn.addEventListener('click', () => { prevSlide(); });
    if (playPauseBtn) playPauseBtn.addEventListener('click', togglePlayPause);

    dots.forEach((dot, idx) => {
        dot.addEventListener('click', () => showSlide(idx));
    });

    // Touch Swipe Gesture Support for Mobile / Tablets
    let touchStartX = 0;
    const sliderContainer = document.querySelector('.hero-slider-container');
    if (sliderContainer) {
        sliderContainer.addEventListener('touchstart', (e) => {
            touchStartX = e.touches[0].clientX;
        }, { passive: true });

        sliderContainer.addEventListener('touchend', (e) => {
            const touchEndX = e.changedTouches[0].clientX;
            if (touchStartX - touchEndX > 50) nextSlide();
            if (touchEndX - touchStartX > 50) prevSlide();
        }, { passive: true });
    }

    // Auto-scroll feature cards ("Explore Our Heritage Pillars")
    const featureCardsContainer = document.querySelector('.home-features-section .categories');
    if (featureCardsContainer) {
        const cards = featureCardsContainer.querySelectorAll('.category-card');
        const prevBtn = document.getElementById('pillarsPrevBtn');
        const nextBtn = document.getElementById('pillarsNextBtn');
        let autoSlideTimer = null;
        const slideIntervalTime = 3200; // 3.2 seconds per slide

        const getCardStep = () => {
            if (!cards.length) return 340;
            const firstCard = cards[0];
            const gap = parseFloat(window.getComputedStyle(featureCardsContainer).gap) || 20;
            return firstCard.offsetWidth + gap;
        };

        const slideNext = () => {
            if (!cards.length) return;
            const step = getCardStep();
            const maxScrollLeft = featureCardsContainer.scrollWidth - featureCardsContainer.clientWidth;
            const currentScroll = featureCardsContainer.scrollLeft;

            if (currentScroll >= maxScrollLeft - 15) {
                // Smooth loop back to beginning
                featureCardsContainer.scrollTo({ left: 0, behavior: 'smooth' });
            } else {
                featureCardsContainer.scrollTo({ left: currentScroll + step, behavior: 'smooth' });
            }
        };

        const slidePrev = () => {
            if (!cards.length) return;
            const step = getCardStep();
            const maxScrollLeft = featureCardsContainer.scrollWidth - featureCardsContainer.clientWidth;
            const currentScroll = featureCardsContainer.scrollLeft;

            if (currentScroll <= 15) {
                // Loop to end
                featureCardsContainer.scrollTo({ left: maxScrollLeft, behavior: 'smooth' });
            } else {
                featureCardsContainer.scrollTo({ left: currentScroll - step, behavior: 'smooth' });
            }
        };

        const startAutoSlide = () => {
            stopAutoSlide();
            autoSlideTimer = setInterval(slideNext, slideIntervalTime);
        };

        const stopAutoSlide = () => {
            if (autoSlideTimer) {
                clearInterval(autoSlideTimer);
                autoSlideTimer = null;
            }
        };

        const resetAutoSlide = () => {
            stopAutoSlide();
            startAutoSlide();
        };

        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                slideNext();
                resetAutoSlide();
            });
        }

        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                slidePrev();
                resetAutoSlide();
            });
        }

        featureCardsContainer.addEventListener('mouseenter', stopAutoSlide);
        featureCardsContainer.addEventListener('mouseleave', startAutoSlide);
        featureCardsContainer.addEventListener('touchstart', stopAutoSlide, { passive: true });
        featureCardsContainer.addEventListener('touchend', () => {
            setTimeout(startAutoSlide, 2500);
        }, { passive: true });

        startAutoSlide();
    }

    // Start Slider
    showSlide(0);
});