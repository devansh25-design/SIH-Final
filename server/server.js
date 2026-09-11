/**
 * ================================================================
 * server.js — Heritage Explore Backend API Server
 * Bharat Heritage Explorer | SIH Prototype
 * ================================================================
 *
 * Endpoints:
 *   POST /scan              — Heritage Lens image scan (main endpoint)
 *   GET  /api/heritage      — All heritage sites (JSON)
 *   GET  /api/heritage/:code — Single site by heritage_code
 *   GET  /api/states        — All states/UTs
 *   GET  /health            — Health check
 *
 * POST /scan flow:
 *   1. Receive multipart image upload (field: "image")
 *   2. Simulate AI recognition by cycling through real DB monuments
 *   3. Query heritage_sites JOIN states for full monument data
 *   4. Return JSON in the exact format heritage-lens.js expects
 *
 * To integrate real Vision AI later:
 *   Replace the `simulateAiRecognition()` call with your actual
 *   Google Cloud Vision / TensorFlow / custom model call.
 * ================================================================
 */

'use strict';

const express = require('express');
const cors    = require('cors');
const multer  = require('multer');
const path    = require('path');
const fs      = require('fs');
const pool    = require('./db');

require('dotenv').config();

const app  = express();
const PORT = parseInt(process.env.PORT || '3000', 10);

/* ─────────────────────────────────────────────────────────────
   MIDDLEWARE
───────────────────────────────────────────────────────────── */

// Allow browser requests from any origin (file://, localhost, etc.)
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* ─────────────────────────────────────────────────────────────
   MULTER — Image Upload Storage
   Saves scan images to server/uploads/ (optional, for logging)
───────────────────────────────────────────────────────────── */

const uploadsDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadsDir)) {
    fs.mkdirSync(uploadsDir, { recursive: true });
}

const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, uploadsDir),
    filename:    (req, file, cb) => {
        const ts  = Date.now();
        const ext = path.extname(file.originalname) || '.jpg';
        cb(null, `scan_${ts}${ext}`);
    },
});

const upload = multer({
    storage,
    limits: { fileSize: 15 * 1024 * 1024 }, // 15 MB max
    fileFilter: (req, file, cb) => {
        const allowed = ['image/jpeg', 'image/png', 'image/webp', 'image/gif', 'image/heic'];
        if (allowed.includes(file.mimetype)) {
            cb(null, true);
        } else {
            cb(new Error('Invalid file type. Only images are allowed.'));
        }
    },
});

/* ─────────────────────────────────────────────────────────────
   SIMULATED AI RECOGNITION
   In a real deployment, replace this with your Vision AI call.
   Currently: picks a heritage site from the DB in round-robin
   order so every scan returns a different real monument.
───────────────────────────────────────────────────────────── */

let scanCounter = 0; // Increments with each scan to cycle through monuments

/**
 * Simulate AI by picking the next monument from the database.
 * Returns a heritage_code string (e.g. 'RJ001').
 *
 * @param {Pool} db - mysql2 connection pool
 * @returns {Promise<{heritageCode: string, confidence: number, confidenceLevel: string}>}
 */
async function simulateAiRecognition(db) {
    // Get total count of heritage sites
    const [[{ total }]] = await db.execute(
        'SELECT COUNT(*) AS total FROM heritage_sites'
    );

    if (total === 0) {
        return null;
    }

    // Round-robin offset
    const offset = scanCounter % total;
    scanCounter++;

    // Pick a heritage site at the current offset
    const [rows] = await db.execute(
        'SELECT heritage_code FROM heritage_sites ORDER BY id LIMIT 1 OFFSET ?',
        [offset]
    );

    if (!rows.length) return null;

    // Simulate a high-confidence match (0.91–0.99)
    const confidence      = parseFloat((0.91 + Math.random() * 0.08).toFixed(4));
    const confidenceLevel = confidence >= 0.90 ? 'HIGH'
                          : confidence >= 0.70 ? 'MEDIUM'
                          : 'LOW';

    return {
        heritageCode:  rows[0].heritage_code,
        confidence,
        confidenceLevel,
    };
}

/* ─────────────────────────────────────────────────────────────
   DATABASE QUERY HELPERS
───────────────────────────────────────────────────────────── */

/**
 * Fetch full heritage site data joined with state name.
 * @param {Pool}   db
 * @param {string} heritageCode  e.g. 'RJ001'
 * @returns {Promise<Object|null>}
 */
async function getHeritageSite(db, heritageCode) {
    const [rows] = await db.execute(`
        SELECT
            hs.heritage_code   AS heritageCode,
            hs.name,
            hs.district,
            hs.category,
            hs.period,
            hs.history,
            hs.architecture,
            hs.cultural_significance  AS culturalSignificance,
            hs.latitude,
            hs.longitude,
            hs.image_url       AS imageUrl,
            hs.is_unesco       AS isUnesco,
            st.name            AS state
        FROM heritage_sites hs
        JOIN states st ON hs.state_id = st.id
        WHERE hs.heritage_code = ?
        LIMIT 1
    `, [heritageCode]);

    return rows.length ? rows[0] : null;
}

/* ─────────────────────────────────────────────────────────────
   ROUTES
───────────────────────────────────────────────────────────── */

/**
 * GET /health
 * Quick health check — confirms server + DB are alive.
 */
app.get('/health', async (req, res) => {
    try {
        await pool.execute('SELECT 1');
        res.json({ status: 'ok', database: 'connected', timestamp: new Date().toISOString() });
    } catch (err) {
        res.status(503).json({ status: 'error', database: 'disconnected', error: err.message });
    }
});

/**
 * POST /scan
 * ─────────────────────────────────────────────────────────────
 * Main Heritage Lens endpoint. Accepts multipart/form-data
 * with a single field named "image".
 *
 * Response JSON (success):
 * {
 *   success:              true,
 *   heritageCode:         "RJ001",
 *   name:                 "Amer Fort",
 *   confidence:           0.96,
 *   confidenceLevel:      "HIGH",    // HIGH | MEDIUM | LOW
 *   state:                "Rajasthan",
 *   district:             "Jaipur",
 *   category:             "Fort",
 *   period:               "16th Century CE",
 *   history:              "...",
 *   architecture:         "...",
 *   culturalSignificance: "...",
 *   latitude:             26.9855,
 *   longitude:            75.8513,
 *   imageUrl:             "amer-fort.jpg",
 *   isUnesco:             true
 * }
 *
 * Response JSON (failure):
 * {
 *   success:         false,
 *   confidence:      0.42,
 *   confidenceLevel: "LOW",
 *   error:           "LOW_CONFIDENCE",
 *   message:         "..."
 * }
 */
app.post('/scan', upload.single('image'), async (req, res) => {
    const imagePath = req.file ? req.file.path : null;

    try {
        // ── Step 1: Simulate / run AI recognition ──────────────
        const aiResult = await simulateAiRecognition(pool);

        if (!aiResult) {
            return res.status(503).json({
                success:   false,
                error:     'DB_EMPTY',
                message:   'No heritage sites found in the database. Please run seed_data.sql first.',
            });
        }

        const { heritageCode, confidence, confidenceLevel } = aiResult;

        // ── Step 2: Low confidence — return early ──────────────
        if (confidenceLevel === 'LOW') {
            return res.json({
                success:         false,
                confidence,
                confidenceLevel,
                error:           'LOW_CONFIDENCE',
                message:         'The monument could not be identified with sufficient confidence. Please try again with a clearer image.',
            });
        }

        // ── Step 3: Look up monument in DB ────────────────────
        const site = await getHeritageSite(pool, heritageCode);

        if (!site) {
            return res.json({
                success:         false,
                confidence,
                confidenceLevel,
                error:           'HERITAGE_NOT_FOUND',
                name:            heritageCode,
                message:         'Monument identified but not found in the heritage database.',
            });
        }

        // ── Step 4: Log scan to heritage_scans table ──────────
        try {
            // Resolve heritage_id from code
            const [[siteRow]] = await pool.execute(
                'SELECT id FROM heritage_sites WHERE heritage_code = ?',
                [heritageCode]
            );
            if (siteRow) {
                await pool.execute(`
                    INSERT INTO heritage_scans
                        (heritage_id, image_path, ai_prediction, confidence, confidence_level, scan_status)
                    VALUES (?, ?, ?, ?, ?, 'SUCCESS')
                `, [
                    siteRow.id,
                    imagePath || null,
                    site.name,
                    confidence,
                    confidenceLevel,
                ]);
            }
        } catch (logErr) {
            // Non-fatal — don't let logging failure break the response
            console.warn('[Scan] ⚠️  Could not log scan to heritage_scans:', logErr.message);
        }

        // ── Step 5: Return full site data ─────────────────────
        return res.json({
            success: true,
            ...site,
            confidence,
            confidenceLevel,
        });

    } catch (err) {
        console.error('[POST /scan] Error:', err.message);
        return res.status(500).json({
            success: false,
            error:   'SERVER_ERROR',
            message: 'An internal server error occurred. Please try again.',
        });
    }
});

/**
 * GET /api/heritage
 * Returns all heritage sites with state name, ordered by state then name.
 */
app.get('/api/heritage', async (req, res) => {
    try {
        const [rows] = await pool.execute(`
            SELECT
                hs.id,
                hs.heritage_code    AS heritageCode,
                hs.name,
                hs.district,
                hs.category,
                hs.period,
                hs.history,
                hs.architecture,
                hs.cultural_significance AS culturalSignificance,
                hs.latitude,
                hs.longitude,
                hs.image_url        AS imageUrl,
                hs.is_unesco        AS isUnesco,
                st.name             AS state,
                st.region
            FROM heritage_sites hs
            JOIN states st ON hs.state_id = st.id
            ORDER BY st.name, hs.name
        `);
        res.json({ success: true, count: rows.length, data: rows });
    } catch (err) {
        console.error('[GET /api/heritage] Error:', err.message);
        res.status(500).json({ success: false, message: err.message });
    }
});

/**
 * GET /api/heritage/:code
 * Returns a single heritage site by its heritage_code (e.g. /api/heritage/RJ001).
 */
app.get('/api/heritage/:code', async (req, res) => {
    try {
        const site = await getHeritageSite(pool, req.params.code.toUpperCase());
        if (!site) {
            return res.status(404).json({ success: false, message: `Heritage code '${req.params.code}' not found.` });
        }
        res.json({ success: true, data: site });
    } catch (err) {
        console.error('[GET /api/heritage/:code] Error:', err.message);
        res.status(500).json({ success: false, message: err.message });
    }
});

/**
 * GET /api/states
 * Returns all states and union territories.
 */
app.get('/api/states', async (req, res) => {
    try {
        const [rows] = await pool.execute(
            'SELECT id, name, type, region, capital FROM states ORDER BY type, name'
        );
        res.json({ success: true, count: rows.length, data: rows });
    } catch (err) {
        console.error('[GET /api/states] Error:', err.message);
        res.status(500).json({ success: false, message: err.message });
    }
});

/* ─────────────────────────────────────────────────────────────
   404 FALLBACK
───────────────────────────────────────────────────────────── */
app.use((req, res) => {
    res.status(404).json({ success: false, message: `Route '${req.path}' not found.` });
});

/* ─────────────────────────────────────────────────────────────
   ERROR HANDLER
───────────────────────────────────────────────────────────── */
app.use((err, req, res, next) => {
    if (err instanceof multer.MulterError) {
        return res.status(400).json({ success: false, message: `Upload error: ${err.message}` });
    }
    console.error('[Server Error]', err.message);
    res.status(500).json({ success: false, message: err.message || 'Internal Server Error' });
});

/* ─────────────────────────────────────────────────────────────
   START SERVER
───────────────────────────────────────────────────────────── */
app.listen(PORT, () => {
    console.log('');
    console.log('┌─────────────────────────────────────────────────┐');
    console.log('│   🏛️  Heritage Explorer Backend Server           │');
    console.log('│   Bharat Heritage Explorer | SIH Prototype      │');
    console.log('├─────────────────────────────────────────────────┤');
    console.log(`│   POST /scan           → Heritage Lens endpoint  │`);
    console.log(`│   GET  /api/heritage   → All monuments           │`);
    console.log(`│   GET  /api/states     → All states / UTs        │`);
    console.log(`│   GET  /health         → Health check            │`);
    console.log('├─────────────────────────────────────────────────┤');
    console.log(`│   🚀 Listening on http://localhost:${PORT}          │`);
    console.log('└─────────────────────────────────────────────────┘');
    console.log('');
});
