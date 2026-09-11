# Database Setup Guide

## Bharat Heritage Explorer — `heritage_explore` MySQL Database

---

## Prerequisites

| Requirement | Version |
| --- | --- |
| MySQL Server | 8.0 or above |
| MySQL Workbench | 8.0 or above |

> **Note:** MySQL Community Server and MySQL Workbench can be downloaded free from [https://dev.mysql.com/downloads/](https://dev.mysql.com/downloads/)

---

## File Overview

```text
database/
├── schema.sql       ← Run FIRST  — creates all 10 tables
├── seed_data.sql    ← Run SECOND — inserts sample data
└── README.md        ← This file
```

---

## Step-by-Step Setup

### Step 1 — Install MySQL

1. Download **MySQL Community Server** from [https://dev.mysql.com/downloads/mysql/](https://dev.mysql.com/downloads/mysql/)
2. Run the installer and choose the **Developer Default** setup type
3. Set a **root password** — keep this safe; you will need it for JDBC
4. Download and install **MySQL Workbench** from [https://dev.mysql.com/downloads/workbench/](https://dev.mysql.com/downloads/workbench/)

---

### Step 2 — Open MySQL Workbench

1. Launch MySQL Workbench
2. Click the **+** icon next to "MySQL Connections"
3. Configure a new connection:
   - **Connection Name:** `heritage_explore_local`
   - **Hostname:** `localhost`
   - **Port:** `3306`
   - **Username:** `root`
4. Click **Test Connection** and enter your root password
5. Click **OK** to save

---

### Step 3 — Run `schema.sql`

1. In MySQL Workbench, click your connection to open it
2. Click **File → Open SQL Script**
3. Navigate to your project folder and open `database/schema.sql`
4. Click the **⚡ (Execute All)** button or press `Ctrl + Shift + Enter`
5. You should see no errors in the output panel

This creates the `heritage_explore` database with 10 tables:

| Table | Purpose |
| --- | --- |
| `states` | All 28 states + 8 union territories |
| `heritage_sites` | Core heritage monument data |
| `heritage_images` | Multiple images per monument |
| `festivals` | Indian state festivals |
| `culture` | Regional art, craft, dance, cuisine |
| `hotels` | Heritage stays near monuments |
| `restaurants` | Regional heritage restaurants |
| `users` | Registered tourist accounts |
| `reviews` | Tourist reviews and photos |
| `heritage_scans` | Heritage Lens AI scan records |

---

### Step 4 — Run `seed_data.sql`

1. Click **File → Open SQL Script**
2. Open `database/seed_data.sql`
3. Click **⚡ Execute All**
4. Check the output for any errors

---

### Step 5 — Verify the Database

Run these queries in MySQL Workbench to confirm data was inserted correctly:

```sql
USE heritage_explore;

SELECT COUNT(*) AS total_states     FROM states;          -- Expected: 36
SELECT COUNT(*) AS heritage_sites   FROM heritage_sites;  -- Expected: 20
SELECT COUNT(*) AS festivals        FROM festivals;        -- Expected: 8
SELECT COUNT(*) AS culture_entries  FROM culture;          -- Expected: 6
SELECT COUNT(*) AS hotels           FROM hotels;           -- Expected: 3
SELECT COUNT(*) AS restaurants      FROM restaurants;      -- Expected: 3

-- View all heritage sites with their state names
SELECT hs.heritage_code, hs.name, s.name AS state, hs.category
FROM heritage_sites hs
JOIN states s ON hs.state_id = s.id
ORDER BY hs.heritage_code;

-- View tables created
SHOW TABLES;
```

---

### Step 6 — JDBC Connection (Java Backend)

Your Plain Java Servlet backend connects to this database using JDBC.

**JDBC URL format:**

```text
jdbc:mysql://localhost:3306/heritage_explore
```

**Java JDBC connection code:**

```java
// WEB-INF/classes/db/DBConnection.java

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class DBConnection {

    private static final String URL      = "jdbc:mysql://localhost:3306/heritage_explore";
    private static final String USER     = "root";
    private static final String PASSWORD = System.getenv("DB_PASSWORD"); // Load from environment

    public static Connection getConnection() throws SQLException {
        return DriverManager.getConnection(URL, USER, PASSWORD);
    }
}
```

> **IMPORTANT:** Never hard-code your MySQL password in Java source files.
> Store it as an environment variable (`DB_PASSWORD`) or in a server configuration file
> that is **not** committed to Git.

**Always use `PreparedStatement` for queries to prevent SQL injection:**

```java
String sql = "SELECT * FROM heritage_sites WHERE heritage_code = ?";
PreparedStatement ps = conn.prepareStatement(sql);
ps.setString(1, heritageCode);
ResultSet rs = ps.executeQuery();
```

**Required MySQL JDBC Driver:**

- Add `mysql-connector-j-8.x.x.jar` to your `WEB-INF/lib/` folder
- Download from: [https://dev.mysql.com/downloads/connector/j/](https://dev.mysql.com/downloads/connector/j/)

---

## Heritage Lens Database Flow

When a tourist uses the Heritage Lens camera feature, the data flow is:

```text
Tourist's Phone Camera
        ↓
JavaScript (heritage-lens.js)
        ↓
POST /scan  [multipart/form-data, field: "image"]
        ↓
Java Servlet (ScanServlet.java)
        ↓
Validate image → Send to Vision AI API
        ↓
Vision AI returns:
  • Monument Name (ai_prediction)
  • Confidence Score (e.g. 0.9600)
        ↓
Confidence Engine:
  • HIGH   if confidence >= 0.90
  • MEDIUM if confidence >= 0.70
  • LOW    if confidence <  0.70
        ↓
Look up heritage_code in heritage_sites table
  SELECT * FROM heritage_sites WHERE name LIKE ?
        ↓
JDBC Query → heritage_sites table
        ↓
Build JSON response with verified heritage information
        ↓
HTTP Response: application/json
        ↓
Frontend (heritage-lens.js) renders result screen
```

**Servlet saves every scan to `heritage_scans`:**

```java
String sql = """
    INSERT INTO heritage_scans
        (user_id, heritage_id, image_path, ai_prediction,
         confidence, confidence_level, scan_status)
    VALUES (?, ?, ?, ?, ?, ?, ?)
""";
PreparedStatement ps = conn.prepareStatement(sql);
ps.setObject(1, userId);        // NULL if anonymous
ps.setObject(2, heritageId);    // NULL if not recognized
ps.setString(3, imagePath);
ps.setString(4, aiPrediction);
ps.setBigDecimal(5, confidence);
ps.setString(6, confidenceLevel);  // "HIGH" / "MEDIUM" / "LOW"
ps.setString(7, scanStatus);       // "SUCCESS" / "LOW_CONFIDENCE" etc.
ps.executeUpdate();
```

---

## Security Rules

| Rule | Reason |
| --- | --- |
| Never store MySQL password in JavaScript | Frontend is public — anyone can view JS source |
| Never store AI API keys in JS | API keys in frontend can be stolen and abused |
| Never store passwords in plain text | Use bcrypt hashing in Java before INSERT |
| Always use PreparedStatement | Prevents SQL injection attacks |
| Never expose MySQL credentials in Git | Use `.gitignore` for config files with passwords |
| Database communicates only via Java Servlet | Frontend never connects directly to MySQL |

---

## `.gitignore` Recommendation

Add this to your project's `.gitignore` file to prevent accidental credential exposure:

```text
# Database credentials
db.properties
application.properties
*.env
```

---

## Quick Reference — Key SQL Queries for Servlets

```sql
-- Heritage Lens: Look up monument by heritage code
SELECT id, heritage_code, name, state_id, district, category, period,
       history, architecture, cultural_significance,
       latitude, longitude, image_url
FROM heritage_sites
WHERE heritage_code = ?;

-- Get state name for a heritage site
SELECT s.name AS state
FROM states s
JOIN heritage_sites hs ON hs.state_id = s.id
WHERE hs.heritage_code = ?;

-- Save a Heritage Lens scan record
INSERT INTO heritage_scans
    (user_id, heritage_id, image_path, ai_prediction, confidence, confidence_level, scan_status)
VALUES (?, ?, ?, ?, ?, ?, ?);

-- Get recent scans (admin analytics)
SELECT hs2.name AS monument, hs1.confidence, hs1.scan_status, hs1.scanned_at
FROM heritage_scans hs1
LEFT JOIN heritage_sites hs2 ON hs1.heritage_id = hs2.id
ORDER BY hs1.scanned_at DESC
LIMIT 50;
```

---

Database version: 1.0 | Bharat Heritage Explorer | SIH Prototype
