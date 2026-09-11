/**
 * db.js — MySQL Connection Pool
 * Bharat Heritage Explorer | Heritage Lens Backend
 *
 * Uses mysql2 promise pool for async/await query support.
 * Credentials loaded from .env via dotenv.
 */

'use strict';

const mysql  = require('mysql2/promise');
require('dotenv').config();

const pool = mysql.createPool({
    host:               process.env.DB_HOST     || 'localhost',
    user:               process.env.DB_USER     || 'root',
    password:           process.env.DB_PASSWORD || '',
    database:           process.env.DB_NAME     || 'heritage_explore',
    port:               parseInt(process.env.DB_PORT || '3306', 10),
    waitForConnections: true,
    connectionLimit:    10,
    queueLimit:         0,
    charset:            'utf8mb4',
});

// Verify connection on startup
pool.getConnection()
    .then(conn => {
        console.log('[DB] ✅ Connected to MySQL — heritage_explore');
        conn.release();
    })
    .catch(err => {
        console.error('[DB] ❌ MySQL connection failed:', err.message);
        console.error('[DB] 👉 Check your .env file (DB_HOST, DB_USER, DB_PASSWORD, DB_NAME)');
        process.exit(1);
    });

module.exports = pool;
