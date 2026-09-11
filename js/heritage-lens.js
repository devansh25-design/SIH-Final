/**
 * ================================================================
 * HERITAGE LENS — JavaScript Module
 * Bharat Heritage Explorer | heritage-lens.js
 * ================================================================
 *
 * Architecture:
 *   Camera Module  → capture frame as Blob
 *   Upload Module  → file input + validation
 *   API Module     → POST /scan (real or mock)
 *   UI Module      → confidence, result rendering, error states
 *   State Machine  → screen transitions
 *
 * To connect your Java backend:
 *   1. Set MOCK_MODE = false
 *   2. Ensure your servlet listens on POST /scan
 *   3. Accepts multipart/form-data with field "image"
 *   4. Returns JSON as documented below
 * ================================================================
 */

'use strict';

/* ─────────────────────────────────────────────────────────────
   CONFIGURATION
───────────────────────────────────────────────────────────── */

/**
 * MOCK_MODE = true  → Uses simulated backend response (development/demo)
 * MOCK_MODE = false → Calls real POST /scan endpoint
 */
const MOCK_MODE = false;

/** Backend endpoint — change to your servlet URL if needed */
const SCAN_ENDPOINT = 'http://localhost:3000/scan';

/** Max file size for upload validation (10 MB) */
const MAX_FILE_SIZE_BYTES = 10 * 1024 * 1024;

/** Valid image MIME types */
const VALID_IMAGE_TYPES = ['image/jpeg', 'image/png', 'image/webp', 'image/gif', 'image/heic'];

/* ─────────────────────────────────────────────────────────────
   SCREEN NAMES (state machine keys)
───────────────────────────────────────────────────────────── */
const SCREENS = {
    INTRO: 'intro',
    CAMERA: 'camera',
    PREVIEW: 'preview',
    SCANNING: 'scanning',
    RESULT: 'result',
    ERROR: 'error',
};

/* ─────────────────────────────────────────────────────────────
   CAMERA STATES
───────────────────────────────────────────────────────────── */
const CAMERA_STATES = {
    STARTING: 'CAMERA_STARTING',
    READY: 'CAMERA_READY',
    PERMISSION_DENIED: 'CAMERA_PERMISSION_DENIED',
    NOT_SUPPORTED: 'CAMERA_NOT_SUPPORTED',
    PHOTO_CAPTURED: 'PHOTO_CAPTURED',
};

/* ─────────────────────────────────────────────────────────────
   APPLICATION STATE
───────────────────────────────────────────────────────────── */
const AppState = {
    currentScreen: SCREENS.INTRO,
    cameraStream: null,       // MediaStream
    capturedBlob: null,       // Blob from camera or upload
    capturedDataUrl: null,       // Base64 preview URL
    cameraState: null,
    lastResult: null,       // Last API response
    mediumConfirmAccepted: false,
};

/* ─────────────────────────────────────────────────────────────
   DOM ELEMENT REFERENCES
───────────────────────────────────────────────────────────── */
const $ = id => document.getElementById(id);
const $$ = sel => document.querySelectorAll(sel);

const DOM = {
    // Screens
    screenIntro: $('hlScreenIntro'),
    screenCamera: $('hlScreenCamera'),
    screenPreview: $('hlScreenPreview'),
    screenScanning: $('hlScreenScanning'),
    screenResult: $('hlScreenResult'),
    screenError: $('hlScreenError'),

    // Camera
    cameraVideo: $('hlCameraVideo'),
    captureCanvas: $('hlCaptureCanvas'),
    captureBtn: $('hlCaptureBtn'),
    cameraCloseBtn: $('hlCameraCloseBtn'),
    cameraStatusText: $('hlCameraStatusText'),
    cameraScreen: $('hlScreenCamera'),

    // Camera state overlays
    overlayStarting: $('hlOverlayStarting'),
    overlayDenied: $('hlOverlayDenied'),
    overlayUnsupported: $('hlOverlayUnsupported'),

    // Upload
    fileInput: $('hlFileInput'),
    uploadBtnIntro: $('hlUploadBtnIntro'),
    uploadBtnCamera: $('hlUploadBtnCamera'),

    // Preview
    previewImage: $('hlPreviewImage'),

    // Scanning
    scanningImage: $('hlScanningImage'),
    scanSteps: $$('.hl-scanning-step'),

    // Result
    resultHeroImage: $('hlResultHeroImage'),
    resultName: $('hlResultName'),
    resultLocation: $('hlResultLocation'),
    resultMetaRow: $('hlResultMetaRow'),
    resultHistory: $('hlResultHistory'),
    resultArchitecture: $('hlResultArchitecture'),
    resultCultural: $('hlResultCultural'),
    resultMapTitle: $('hlResultMapTitle'),
    resultMapCoords: $('hlResultMapCoords'),
    resultConfBadge: $('hlResultConfBadge'),
    resultConfPct: $('hlResultConfPct'),
    resultConfLevel: $('hlResultConfLevel'),
    confBarFill: $('hlConfBarFill'),
    confBarPct: $('hlConfBarPct'),
    confBarLevel: $('hlConfBarLevel'),
    mediumConfSection: $('hlMediumConfSection'),
    mediumConfText: $('hlMediumConfText'),

    // Error
    errorIconWrap: $('hlErrorIconWrap'),
    errorIcon: $('hlErrorIcon'),
    errorHeading: $('hlErrorHeading'),
    errorDesc: $('hlErrorDesc'),
    errorTipsBox: $('hlErrorTipsBox'),
    errorActions: $('hlErrorActions'),

    // Toast
    toastContainer: $('hlToastContainer'),
};

/* ─────────────────────────────────────────────────────────────
   STATE MACHINE — SCREEN TRANSITIONS
───────────────────────────────────────────────────────────── */

/**
 * Show a specific screen and hide all others.
 * @param {string} screenName - One of SCREENS.*
 */
function showScreen(screenName) {
    AppState.currentScreen = screenName;

    const screenMap = {
        [SCREENS.INTRO]: DOM.screenIntro,
        [SCREENS.CAMERA]: DOM.screenCamera,
        [SCREENS.PREVIEW]: DOM.screenPreview,
        [SCREENS.SCANNING]: DOM.screenScanning,
        [SCREENS.RESULT]: DOM.screenResult,
        [SCREENS.ERROR]: DOM.screenError,
    };

    // Hide all
    Object.values(screenMap).forEach(el => {
        if (el) {
            el.classList.remove('hl-screen--active');
        }
    });

    // Show target
    const target = screenMap[screenName];
    if (target) {
        target.classList.add('hl-screen--active');
        // Scroll to top on screen change
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

/* ─────────────────────────────────────────────────────────────
   CAMERA MODULE
───────────────────────────────────────────────────────────── */

/**
 * Request camera permission and start video stream.
 * Handles all error states gracefully.
 */
async function startCamera() {
    showScreen(SCREENS.CAMERA);
    setCameraState(CAMERA_STATES.STARTING);

    // Check browser support
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        setCameraState(CAMERA_STATES.NOT_SUPPORTED);
        return;
    }

    try {
        // Prefer rear/environment camera on mobile devices
        const constraints = {
            video: {
                facingMode: { ideal: 'environment' },
                width: { ideal: 1280 },
                height: { ideal: 720 },
            },
            audio: false,
        };

        const stream = await navigator.mediaDevices.getUserMedia(constraints);
        AppState.cameraStream = stream;

        DOM.cameraVideo.srcObject = stream;
        DOM.cameraVideo.setAttribute('playsinline', '');
        await DOM.cameraVideo.play();

        setCameraState(CAMERA_STATES.READY);

    } catch (err) {
        console.error('[HeritageCamera] Error:', err.name, err.message);

        if (err.name === 'NotAllowedError' || err.name === 'PermissionDeniedError') {
            setCameraState(CAMERA_STATES.PERMISSION_DENIED);
        } else if (
            err.name === 'NotFoundError' ||
            err.name === 'DevicesNotFoundError' ||
            err.name === 'NotReadableError'
        ) {
            setCameraState(CAMERA_STATES.NOT_SUPPORTED);
        } else {
            setCameraState(CAMERA_STATES.PERMISSION_DENIED);
        }
    }
}

/**
 * Stop camera stream and free resources.
 */
function stopCamera() {
    if (AppState.cameraStream) {
        AppState.cameraStream.getTracks().forEach(track => track.stop());
        AppState.cameraStream = null;
    }
    if (DOM.cameraVideo) {
        DOM.cameraVideo.srcObject = null;
    }
}

/**
 * Set the camera UI state (overlays, status text, screen class).
 * @param {string} state - One of CAMERA_STATES.*
 */
function setCameraState(state) {
    AppState.cameraState = state;

    // Hide all overlays first
    hideEl(DOM.overlayStarting);
    hideEl(DOM.overlayDenied);
    hideEl(DOM.overlayUnsupported);

    // Remove scan-ready class
    DOM.cameraScreen.classList.remove('hl-camera-screen--ready');

    switch (state) {
        case CAMERA_STATES.STARTING:
            showEl(DOM.overlayStarting);
            setStatusText('Starting camera...');
            break;

        case CAMERA_STATES.READY:
            setStatusText('Align the monument inside the frame');
            DOM.cameraScreen.classList.add('hl-camera-screen--ready');
            break;

        case CAMERA_STATES.PERMISSION_DENIED:
            showEl(DOM.overlayDenied);
            setStatusText('');
            break;

        case CAMERA_STATES.NOT_SUPPORTED:
            showEl(DOM.overlayUnsupported);
            setStatusText('');
            break;
    }
}

/**
 * Capture the current video frame as a Blob.
 */
async function capturePhoto() {
    if (!DOM.cameraVideo || !DOM.cameraVideo.readyState >= 2) {
        showToast('Camera not ready. Please wait.', 'error');
        return;
    }

    const video = DOM.cameraVideo;
    const canvas = DOM.captureCanvas;
    const ctx = canvas.getContext('2d');

    canvas.width = video.videoWidth || 1280;
    canvas.height = video.videoHeight || 720;
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

    // Convert to Blob
    canvas.toBlob(blob => {
        if (!blob) {
            showToast('Failed to capture image. Try again.', 'error');
            return;
        }
        AppState.capturedBlob = blob;
        AppState.capturedDataUrl = canvas.toDataURL('image/jpeg', 0.9);

        stopCamera();
        goToPreview();
    }, 'image/jpeg', 0.9);
}

/* ─────────────────────────────────────────────────────────────
   UPLOAD MODULE
───────────────────────────────────────────────────────────── */

/**
 * Open the file picker dialog.
 */
function openFilePicker() {
    if (DOM.fileInput) DOM.fileInput.click();
}

/**
 * Handle file selection from the input element.
 * Validates type, size and loadability.
 * @param {Event} e
 */
async function handleFileSelected(e) {
    const file = e.target.files && e.target.files[0];
    // Reset input so same file can be reselected
    e.target.value = '';

    if (!file) return;

    // Validate type
    if (!VALID_IMAGE_TYPES.includes(file.type)) {
        showError({
            icon: '🖼️',
            heading: 'Invalid Image Format',
            desc: 'Please select a valid image file (JPEG, PNG, WebP or HEIC).',
            actions: [
                { label: '↑ Try Upload Again', action: openFilePicker, primary: true },
                { label: '← Back to Home', action: () => showScreen(SCREENS.INTRO), primary: false },
            ],
        });
        return;
    }

    // Validate size
    if (file.size > MAX_FILE_SIZE_BYTES) {
        showError({
            icon: '⚖️',
            heading: 'Image Too Large',
            desc: `The image exceeds 10 MB. Please select a smaller image.`,
            actions: [
                { label: '↑ Try Upload Again', action: openFilePicker, primary: true },
                { label: '← Back', action: () => showScreen(SCREENS.INTRO), primary: false },
            ],
        });
        return;
    }

    // Validate that image loads
    try {
        const dataUrl = await fileToDataUrl(file);
        await loadImage(dataUrl);

        AppState.capturedBlob = file;
        AppState.capturedDataUrl = dataUrl;

        goToPreview();
    } catch {
        showError({
            icon: '🖼️',
            heading: 'Could Not Load Image',
            desc: 'The selected file could not be loaded. Please select a valid image.',
            actions: [
                { label: '↑ Try Upload Again', action: openFilePicker, primary: true },
            ],
        });
    }
}

/**
 * Convert File to Data URL.
 * @param {File} file
 * @returns {Promise<string>}
 */
function fileToDataUrl(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = () => reject(new Error('FileReader error'));
        reader.readAsDataURL(file);
    });
}

/**
 * Verify an image URL actually loads.
 * @param {string} src
 * @returns {Promise<void>}
 */
function loadImage(src) {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = resolve;
        img.onerror = () => reject(new Error('Image load failed'));
        img.src = src;
    });
}

/* ─────────────────────────────────────────────────────────────
   NAVIGATION HELPERS
───────────────────────────────────────────────────────────── */

/**
 * Show the preview screen with the captured/uploaded image.
 */
function goToPreview() {
    if (!AppState.capturedDataUrl) return;
    DOM.previewImage.src = AppState.capturedDataUrl;
    showScreen(SCREENS.PREVIEW);
}

/**
 * Retake: go back to camera (or intro if camera unavailable).
 */
function retake() {
    AppState.capturedBlob = null;
    AppState.capturedDataUrl = null;
    startCamera();
}

/* ─────────────────────────────────────────────────────────────
   API MODULE
───────────────────────────────────────────────────────────── */

/**
 * Entry point: start the heritage scan.
 * Sets up scanning UI then calls real or mock backend.
 */
async function scanHeritage() {
    if (!AppState.capturedBlob) {
        showToast('No image to scan. Please capture or upload one.', 'error');
        return;
    }

    // Show scanning screen
    if (DOM.scanningImage && AppState.capturedDataUrl) {
        DOM.scanningImage.src = AppState.capturedDataUrl;
    }

    showScreen(SCREENS.SCANNING);
    await runScanStepAnimation();

    try {
        let result;

        if (MOCK_MODE) {
            result = await mockScanRequest();
        } else {
            result = await realScanRequest(AppState.capturedBlob);
        }

        AppState.lastResult = result;
        handleScanResult(result);

    } catch (err) {
        console.error('[HeritageScan] Error:', err);
        handleScanError(err);
    }
}

/**
 * Animate the scanning progress steps sequentially.
 */
async function runScanStepAnimation() {
    const steps = Array.from(DOM.scanSteps);
    const delays = [600, 1100, 1700, 2400];

    for (let i = 0; i < steps.length; i++) {
        await sleep(delays[i] || 800);
        // Mark previous as done
        if (i > 0) {
            steps[i - 1].classList.remove('hl-scanning-step--active');
            steps[i - 1].classList.add('hl-scanning-step--done');
        }
        steps[i].classList.add('hl-scanning-step--active');
    }

    // Mark last as done
    await sleep(600);
    if (steps[steps.length - 1]) {
        steps[steps.length - 1].classList.remove('hl-scanning-step--active');
        steps[steps.length - 1].classList.add('hl-scanning-step--done');
    }

    await sleep(400);
}

/**
 * REAL backend request via POST /scan.
 * @param {Blob|File} imageBlob
 * @returns {Promise<Object>} Parsed JSON response
 */
async function realScanRequest(imageBlob) {
    const formData = new FormData();
    formData.append('image', imageBlob, 'heritage-scan.jpg');

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 30000); // 30s timeout

    try {
        const response = await fetch(SCAN_ENDPOINT, {
            method: 'POST',
            body: formData,
            signal: controller.signal,
        });

        clearTimeout(timeoutId);

        if (!response.ok) {
            const errData = await response.json().catch(() => ({}));
            throw Object.assign(new Error(errData.message || 'Server error'), {
                type: 'SERVER_ERROR',
                status: response.status,
            });
        }

        const data = await response.json();
        return data;

    } catch (err) {
        clearTimeout(timeoutId);
        if (err.name === 'AbortError') {
            throw Object.assign(new Error('Request timed out'), { type: 'TIMEOUT' });
        }
        if (!navigator.onLine || err.message.toLowerCase().includes('fetch')) {
            throw Object.assign(new Error('Network unavailable'), { type: 'NETWORK' });
        }
        throw err;
    }
}

/**
 * MOCK backend — simulates different API response scenarios.
 * Useful during development before the Java backend is ready.
 * Change MOCK_SCENARIO to test different flows.
 */
async function mockScanRequest() {
    // Simulate network delay
    await sleep(2800);

    /**
     * Mock scenarios:
     * 'high'     → High confidence result
     * 'medium'   → Medium confidence (needs confirmation)
     * 'low'      → Low confidence (unable to identify)
     * 'not_found'→ Monument not in database
     * 'error'    → Simulated server error
     */
    const MOCK_SCENARIO = 'high';

    switch (MOCK_SCENARIO) {
        case 'high':
            return {
                success: true,
                heritageCode: 'RJ001',
                name: 'Amer Fort',
                confidence: 0.96,
                confidenceLevel: 'HIGH',
                state: 'Rajasthan',
                district: 'Jaipur',
                category: 'Fort & Palace',
                period: '16th Century',
                history: 'Amer Fort, also known as Amber Fort, is a fort located in Amer, Rajasthan, India. It was built by Raja Man Singh I in 1592 CE. The fort is known for its artistic Hindu style elements. With its large ramparts and series of gates and cobbled paths, the fort overlooks Maota Lake, which is the main source of water for the Amer Palace.',
                architecture: 'The fort complex spans an area of 4 sq km. Built mainly from red sandstone and white marble, the fort is a spectacular example of Rajput military architecture. It has four main sections each with its own courtyard. The Sheesh Mahal (Palace of Mirrors) within the fort is particularly famous for its intricate mirror work that can reflect a single candle flame into what appears to be thousands.',
                culturalSignificance: 'Amer Fort is a UNESCO World Heritage Site (inscribed 2013) as part of the Hill Forts of Rajasthan. The fort was a seat of power for the Kachwahas, a Rajput clan, for many centuries. It reflects a blend of Hindu and Mughal architectural styles, representing the cultural synthesis of the era. The annual Teej festival and other cultural events are celebrated here.',
                latitude: 26.9855,
                longitude: 75.8513,
                imageUrl: '',
            };

        case 'medium':
            return {
                success: true,
                heritageCode: 'GJ001',
                name: 'Rani ki Vav',
                confidence: 0.78,
                confidenceLevel: 'MEDIUM',
                state: 'Gujarat',
                district: 'Patan',
                category: 'Stepwell',
                period: '11th Century',
                history: 'Rani ki Vav (The Queen\'s Stepwell) was built in 1063 CE by Queen Udayamati of the Chaulukya dynasty in memory of her husband, King Bhimdev I. It was submerged and silted over for many centuries until it was rediscovered and excavated in the 1980s.',
                architecture: 'The stepwell is of the Maru-Gurjara architectural style and is designed as an inverted temple. It has seven levels of stairs, over 500 principal sculptures and more than a thousand minor ones. The deepest level has a shaft 30 metres deep and is decorated with images of Vishnu in his ten incarnations (Dashavatara).',
                culturalSignificance: 'Rani ki Vav is a UNESCO World Heritage Site. It is depicted on India\'s 100-rupee currency note. The stepwell was built to honour the memory of the king and to facilitate water management during the medieval period. It is considered one of the most ornate and intricately crafted stepwells in India.',
                latitude: 23.8587,
                longitude: 72.1016,
                imageUrl: '',
            };

        case 'low':
            return {
                success: false,
                confidence: 0.42,
                confidenceLevel: 'LOW',
                error: 'LOW_CONFIDENCE',
                message: 'The monument could not be identified with sufficient confidence.',
            };

        case 'not_found':
            return {
                success: false,
                confidence: 0.91,
                confidenceLevel: 'HIGH',
                error: 'HERITAGE_NOT_FOUND',
                name: 'Unidentified Structure',
                message: 'Monument identified but not found in the heritage database.',
            };

        case 'error':
        default:
            throw Object.assign(new Error('AI service temporarily unavailable'), {
                type: 'AI_UNAVAILABLE',
            });
    }
}

/* ─────────────────────────────────────────────────────────────
   RESULT HANDLER
───────────────────────────────────────────────────────────── */

/**
 * Route scan API result to appropriate UI state.
 * @param {Object} result - Parsed JSON from backend
 */
function handleScanResult(result) {
    if (!result.success) {
        // Handle specific failure codes
        switch (result.error) {
            case 'LOW_CONFIDENCE':
                showLowConfidenceError(result.confidence);
                break;
            case 'HERITAGE_NOT_FOUND':
                showError({
                    icon: '🗄️',
                    heading: 'Not in Our Database',
                    desc: `We identified "${result.name || 'this structure'}" but couldn't find verified heritage information in our database. We're continually expanding our records.`,
                    actions: [
                        { label: '🔍 Scan Again', action: retake, primary: true },
                        { label: '← Home', action: () => showScreen(SCREENS.INTRO), primary: false },
                    ],
                });
                break;
            default:
                showError({
                    icon: '❌',
                    heading: 'Recognition Failed',
                    desc: result.message || 'Heritage recognition was unsuccessful. Please try again.',
                    actions: [
                        { label: '🔍 Scan Again', action: retake, primary: true },
                    ],
                });
        }
        return;
    }

    // Success — render by confidence level
    const confidence = result.confidence || 0;

    if (confidence < 0.70) {
        // Should not happen if backend is correct, but handle defensively
        showLowConfidenceError(confidence);
    } else {
        renderResult(result);
    }
}

/**
 * Handle API/network errors.
 * @param {Error} err
 */
function handleScanError(err) {
    const type = err.type || 'UNKNOWN';

    const errorConfigs = {
        NETWORK: {
            icon: '📡',
            heading: 'No Internet Connection',
            desc: 'Unable to connect to the heritage recognition service. Please check your internet connection and try again.',
        },
        TIMEOUT: {
            icon: '⏱️',
            heading: 'Recognition Timed Out',
            desc: 'The AI recognition service took too long to respond. This may be due to a slow connection or high server load.',
        },
        AI_UNAVAILABLE: {
            icon: '🤖',
            heading: 'AI Service Unavailable',
            desc: 'The heritage recognition AI is temporarily unavailable. Please try again in a few moments.',
        },
        SERVER_ERROR: {
            icon: '🔧',
            heading: 'Server Error',
            desc: `The Bharat Heritage Explorer server encountered an error (${err.status || 'unknown'}). Please try again later.`,
        },
    };

    const config = errorConfigs[type] || {
        icon: '❌',
        heading: 'Something Went Wrong',
        desc: 'An unexpected error occurred during heritage recognition. Please try again.',
    };

    showError({
        ...config,
        actions: [
            { label: '🔍 Scan Again', action: () => goToPreview(), primary: true },
            { label: '← Back to Home', action: () => showScreen(SCREENS.INTRO), primary: false },
        ],
    });
}

/* ─────────────────────────────────────────────────────────────
   RESULT RENDERER
───────────────────────────────────────────────────────────── */

/**
 * Render the full Heritage Result screen.
 * @param {Object} data - Verified API response
 */
function renderResult(data) {
    const confidence = data.confidence || 0;
    const confLevel = getConfidenceLevel(confidence);
    const confPct = Math.round(confidence * 100);
    const confLevelLabel = { HIGH: 'High confidence', MEDIUM: 'Possible match', LOW: 'Low confidence' }[confLevel];
    const confBadgeClass = { HIGH: 'hl-confidence-badge--high', MEDIUM: 'hl-confidence-badge--medium', LOW: 'hl-confidence-badge--low' }[confLevel];

    // ── Hero image ──
    if (DOM.resultHeroImage) {
        if (data.imageUrl) {
            DOM.resultHeroImage.src = data.imageUrl;
            DOM.resultHeroImage.alt = data.name;
        } else if (AppState.capturedDataUrl) {
            // Use captured image as fallback
            DOM.resultHeroImage.src = AppState.capturedDataUrl;
            DOM.resultHeroImage.alt = data.name || 'Heritage Monument';
        }
    }

    // ── Confidence badge on hero ──
    if (DOM.resultConfBadge) {
        DOM.resultConfBadge.className = `hl-confidence-badge ${confBadgeClass}`;
    }
    if (DOM.resultConfPct) {
        DOM.resultConfPct.textContent = `${confPct}%`;
    }
    if (DOM.resultConfLevel) {
        DOM.resultConfLevel.textContent = confLevelLabel;
    }

    // ── Monument name + location ──
    if (DOM.resultName) DOM.resultName.textContent = data.name || 'Heritage Monument';
    if (DOM.resultLocation) DOM.resultLocation.textContent = `${data.district || ''}, ${data.state || ''}`.replace(/^,\s*/, '').replace(/,\s*$/, '');

    // ── Meta chips (category, period, state) ──
    if (DOM.resultMetaRow) {
        DOM.resultMetaRow.innerHTML = [
            data.category ? `<span class="hl-result-meta-chip">🏛️ ${data.category}</span>` : '',
            data.period ? `<span class="hl-result-meta-chip">📅 ${data.period}</span>` : '',
            data.state ? `<span class="hl-result-meta-chip">📍 ${data.state}</span>` : '',
        ].join('');
    }

    // ── Confidence meter ──
    if (DOM.confBarFill) {
        DOM.confBarFill.style.width = '0%'; // Reset for animation
        DOM.confBarFill.className = `hl-confidence-bar-fill hl-confidence-bar-fill--${confLevel.toLowerCase()}`;
        setTimeout(() => {
            DOM.confBarFill.style.width = `${confPct}%`;
        }, 200);
    }
    if (DOM.confBarPct) DOM.confBarPct.textContent = `${confPct}% Confidence`;
    if (DOM.confBarLevel) {
        DOM.confBarLevel.textContent = confLevelLabel;
        DOM.confBarLevel.className = `hl-confidence-level-text hl-confidence-level-text--${confLevel.toLowerCase()}`;
    }

    // ── Info sections ──
    if (DOM.resultHistory) DOM.resultHistory.textContent = data.history || 'Historical information will be available soon.';
    if (DOM.resultArchitecture) DOM.resultArchitecture.textContent = data.architecture || 'Architectural information will be available soon.';
    if (DOM.resultCultural) DOM.resultCultural.textContent = data.culturalSignificance || 'Cultural significance information will be available soon.';

    // ── Map / Coordinates ──
    if (DOM.resultMapTitle) DOM.resultMapTitle.textContent = `${data.district || ''}, ${data.state || ''}`.replace(/^,\s*/, '');
    if (DOM.resultMapCoords && data.latitude && data.longitude) {
        DOM.resultMapCoords.textContent = `${data.latitude.toFixed(4)}°N, ${data.longitude.toFixed(4)}°E`;
    }

    // ── Medium confidence confirmation ──
    if (DOM.mediumConfSection) {
        if (confLevel === 'MEDIUM' && !AppState.mediumConfirmAccepted) {
            DOM.mediumConfSection.classList.remove('hl-hidden');
            if (DOM.mediumConfText) {
                DOM.mediumConfText.textContent = `Is this ${data.name}?`;
            }
        } else {
            DOM.mediumConfSection.classList.add('hl-hidden');
        }
    }

    showScreen(SCREENS.RESULT);

    // Open first accordion section by default
    const firstSection = document.querySelector('.hl-result-section');
    if (firstSection) firstSection.classList.add('hl-section-open');
}

/* ─────────────────────────────────────────────────────────────
   ERROR / CONFIDENCE UI
───────────────────────────────────────────────────────────── */

/**
 * Show the low-confidence error with tips.
 * @param {number} confidence - 0–1
 */
function showLowConfidenceError(confidence) {
    const pct = Math.round((confidence || 0) * 100);

    showError({
        icon: '🔍',
        iconWarning: true,
        heading: "Couldn't Identify This Heritage Site",
        desc: `${pct}% Confidence — We couldn't confidently match this monument to our heritage database.`,
        tips: [
            'Capture the monument from the front',
            'Move closer to the structure',
            'Ensure good lighting conditions',
            'Avoid blurry or partial images',
            'Try a different angle',
        ],
        actions: [
            { label: '🔍 Scan Again', action: retake, primary: true },
            { label: '↑ Upload Different Image', action: openFilePicker, primary: false },
        ],
    });
}

/**
 * Render the error screen with dynamic content.
 * @param {Object} config
 * @param {string}   config.icon
 * @param {boolean}  [config.iconWarning]
 * @param {string}   config.heading
 * @param {string}   config.desc
 * @param {string[]} [config.tips]
 * @param {Array}    config.actions
 */
function showError(config) {
    if (DOM.errorIcon) DOM.errorIcon.textContent = config.icon || '❌';
    if (DOM.errorIconWrap) {
        DOM.errorIconWrap.className = config.iconWarning
            ? 'hl-error-icon-wrap hl-error-icon-wrap--warning'
            : 'hl-error-icon-wrap';
    }
    if (DOM.errorHeading) DOM.errorHeading.textContent = config.heading || '';
    if (DOM.errorDesc) DOM.errorDesc.textContent = config.desc || '';

    // Tips
    if (DOM.errorTipsBox) {
        if (config.tips && config.tips.length > 0) {
            DOM.errorTipsBox.innerHTML = `
                <div class="hl-tips-heading">TIPS FOR BETTER RESULTS</div>
                <ul class="hl-tips-list">
                    ${config.tips.map(tip => `<li>${tip}</li>`).join('')}
                </ul>
            `;
            showEl(DOM.errorTipsBox);
        } else {
            hideEl(DOM.errorTipsBox);
        }
    }

    // Actions
    if (DOM.errorActions && config.actions) {
        DOM.errorActions.innerHTML = config.actions.map(action => {
            const cls = action.primary ? 'hl-btn-primary' : 'hl-btn-secondary';
            return `<button class="${cls}" data-action="${action.label}">${action.label}</button>`;
        }).join('');

        // Bind click events
        DOM.errorActions.querySelectorAll('button').forEach((btn, i) => {
            btn.addEventListener('click', () => {
                if (config.actions[i] && typeof config.actions[i].action === 'function') {
                    config.actions[i].action();
                }
            });
        });
    }

    showScreen(SCREENS.ERROR);
}

/* ─────────────────────────────────────────────────────────────
   CONFIDENCE UTILITIES
───────────────────────────────────────────────────────────── */

/**
 * Map a 0-1 confidence value to HIGH / MEDIUM / LOW.
 * @param {number} confidence
 * @returns {'HIGH'|'MEDIUM'|'LOW'}
 */
function getConfidenceLevel(confidence) {
    if (confidence >= 0.90) return 'HIGH';
    if (confidence >= 0.70) return 'MEDIUM';
    return 'LOW';
}

/* ─────────────────────────────────────────────────────────────
   TOAST NOTIFICATION
───────────────────────────────────────────────────────────── */

/**
 * Show a temporary toast notification.
 * @param {string} message
 * @param {'info'|'error'|'success'} type
 */
function showToast(message, type = 'info') {
    if (!DOM.toastContainer) return;

    const icons = { info: 'ℹ️', error: '⚠️', success: '✅' };
    const toast = document.createElement('div');
    toast.className = `hl-toast hl-toast--${type}`;
    toast.innerHTML = `<span>${icons[type] || 'ℹ️'}</span><span>${message}</span>`;

    DOM.toastContainer.appendChild(toast);

    setTimeout(() => {
        toast.style.animation = 'hlToastOut 0.35s ease forwards';
        setTimeout(() => toast.remove(), 380);
    }, 3500);
}

/* ─────────────────────────────────────────────────────────────
   DOM UTILITIES
───────────────────────────────────────────────────────────── */

function showEl(el) { if (el) el.classList.remove('hl-hidden'); }
function hideEl(el) { if (el) el.classList.add('hl-hidden'); }
function sleep(ms) { return new Promise(resolve => setTimeout(resolve, ms)); }

function setStatusText(text) {
    if (DOM.cameraStatusText) DOM.cameraStatusText.textContent = text;
}

/* ─────────────────────────────────────────────────────────────
   ACCORDION — Result Sections
───────────────────────────────────────────────────────────── */

/**
 * Toggle expand/collapse of a result section.
 * @param {HTMLElement} header
 */
function toggleResultSection(header) {
    const section = header.closest('.hl-result-section');
    if (!section) return;
    section.classList.toggle('hl-section-open');
}

/* ─────────────────────────────────────────────────────────────
   MAP LINK
───────────────────────────────────────────────────────────── */

/**
 * Open Google Maps for the monument coordinates.
 */
function openMap() {
    const result = AppState.lastResult;
    if (result && result.latitude && result.longitude) {
        const url = `https://www.google.com/maps/search/?api=1&query=${result.latitude},${result.longitude}`;
        window.open(url, '_blank', 'noopener,noreferrer');
    } else {
        showToast('Map coordinates not available.', 'info');
    }
}

/* ─────────────────────────────────────────────────────────────
   SHARE
───────────────────────────────────────────────────────────── */

/**
 * Share the heritage result using Web Share API or clipboard fallback.
 */
async function shareResult() {
    const result = AppState.lastResult;
    if (!result) return;

    const text = `I discovered ${result.name} in ${result.district}, ${result.state} using Heritage Lens on Bharat Heritage Explorer! 🏛️`;

    if (navigator.share) {
        try {
            await navigator.share({
                title: `Heritage Lens — ${result.name}`,
                text,
                url: window.location.href,
            });
        } catch (err) {
            if (err.name !== 'AbortError') {
                copyToClipboard(text);
            }
        }
    } else {
        copyToClipboard(text);
    }
}

function copyToClipboard(text) {
    navigator.clipboard.writeText(text)
        .then(() => showToast('Copied to clipboard!', 'success'))
        .catch(() => showToast('Could not copy text.', 'error'));
}

/* ─────────────────────────────────────────────────────────────
   EVENT WIRING — init all button listeners
───────────────────────────────────────────────────────────── */

function initEventListeners() {

    // ── INTRO SCREEN ──

    const openCameraBtn = $('hlOpenCameraBtn');
    if (openCameraBtn) {
        openCameraBtn.addEventListener('click', startCamera);
    }

    if (DOM.uploadBtnIntro) {
        DOM.uploadBtnIntro.addEventListener('click', openFilePicker);
    }

    // ── FILE INPUT ──
    if (DOM.fileInput) {
        DOM.fileInput.addEventListener('change', handleFileSelected);
    }

    // ── CAMERA SCREEN ──

    if (DOM.captureBtn) {
        DOM.captureBtn.addEventListener('click', capturePhoto);
    }

    if (DOM.cameraCloseBtn) {
        DOM.cameraCloseBtn.addEventListener('click', () => {
            stopCamera();
            showScreen(SCREENS.INTRO);
        });
    }

    if (DOM.uploadBtnCamera) {
        DOM.uploadBtnCamera.addEventListener('click', () => {
            stopCamera();
            openFilePicker();
        });
    }

    // Camera overlay: Try Again
    const tryAgainBtn = $('hlTryAgainBtn');
    if (tryAgainBtn) {
        tryAgainBtn.addEventListener('click', startCamera);
    }

    // Camera overlay: Upload Instead (from denied)
    const uploadInsteadBtn = $('hlUploadInsteadBtn');
    if (uploadInsteadBtn) {
        uploadInsteadBtn.addEventListener('click', () => {
            stopCamera();
            showScreen(SCREENS.INTRO);
            openFilePicker();
        });
    }

    // Camera overlay: Upload (from unsupported)
    const uploadUnsupportedBtn = $('hlUploadUnsupportedBtn');
    if (uploadUnsupportedBtn) {
        uploadUnsupportedBtn.addEventListener('click', () => {
            showScreen(SCREENS.INTRO);
            openFilePicker();
        });
    }

    // ── PREVIEW SCREEN ──

    const retakeBtn = $('hlRetakeBtn');
    if (retakeBtn) {
        retakeBtn.addEventListener('click', retake);
    }

    const scanBtn = $('hlScanBtn');
    if (scanBtn) {
        scanBtn.addEventListener('click', scanHeritage);
    }

    // ── RESULT SCREEN ──

    // Accordion sections
    document.querySelectorAll('.hl-result-section-header').forEach(header => {
        header.addEventListener('click', () => toggleResultSection(header));
        header.addEventListener('keydown', e => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                toggleResultSection(header);
            }
        });
    });

    // View on Map
    const mapBtn = $('hlViewMapBtn');
    if (mapBtn) {
        mapBtn.addEventListener('click', openMap);
    }

    // Share
    const shareBtn = $('hlShareBtn');
    if (shareBtn) {
        shareBtn.addEventListener('click', shareResult);
    }

    // Scan Another
    const scanAnotherBtn = $('hlScanAnotherBtn');
    if (scanAnotherBtn) {
        scanAnotherBtn.addEventListener('click', () => {
            AppState.capturedBlob = null;
            AppState.capturedDataUrl = null;
            AppState.lastResult = null;
            AppState.mediumConfirmAccepted = false;
            // Reset scanning steps
            DOM.scanSteps.forEach(step => {
                step.classList.remove('hl-scanning-step--active', 'hl-scanning-step--done');
            });
            startCamera();
        });
    }

    // Medium confidence: Yes Continue
    const mediumYesBtn = $('hlMediumYesBtn');
    if (mediumYesBtn) {
        mediumYesBtn.addEventListener('click', () => {
            AppState.mediumConfirmAccepted = true;
            if (DOM.mediumConfSection) DOM.mediumConfSection.classList.add('hl-hidden');
        });
    }

    // Medium confidence: Scan Again
    const mediumScanAgainBtn = $('hlMediumScanAgainBtn');
    if (mediumScanAgainBtn) {
        mediumScanAgainBtn.addEventListener('click', () => {
            AppState.mediumConfirmAccepted = false;
            retake();
        });
    }

    // Explore Nearby (placeholder — link to explore page)
    const exploreNearbyBtn = $('hlExploreNearbyBtn');
    if (exploreNearbyBtn) {
        exploreNearbyBtn.addEventListener('click', () => {
            window.location.href = 'explore.html';
        });
    }

    // Back buttons (all screens → intro)
    document.querySelectorAll('[data-hl-back]').forEach(btn => {
        btn.addEventListener('click', () => {
            stopCamera();
            showScreen(SCREENS.INTRO);
        });
    });

    // Keyboard: Escape closes camera
    document.addEventListener('keydown', e => {
        if (e.key === 'Escape' && AppState.currentScreen === SCREENS.CAMERA) {
            stopCamera();
            showScreen(SCREENS.INTRO);
        }
    });
}

/* ─────────────────────────────────────────────────────────────
   BOOT
───────────────────────────────────────────────────────────── */

/**
 * Initialize the Heritage Lens application.
 */
function init() {
    showScreen(SCREENS.INTRO);
    initEventListeners();
    console.log(
        '%c[Heritage Lens] Initialized%c MOCK_MODE=' + MOCK_MODE,
        'color:#f59e0b;font-weight:bold;',
        'color:#94a3b8;'
    );
}

// Start when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
