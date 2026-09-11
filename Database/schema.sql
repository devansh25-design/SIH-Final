CREATE DATABASE IF NOT EXISTS heritage_explore
    CHARACTER SET utf8mb4
    COLLATE utf8mb4_unicode_ci;

USE heritage_explore;


CREATE TABLE IF NOT EXISTS states (
    id              INT             NOT NULL AUTO_INCREMENT,
    name            VARCHAR(100)    NOT NULL,
    type            ENUM('STATE', 'UNION_TERRITORY') NOT NULL DEFAULT 'STATE',
    region          ENUM('NORTH', 'SOUTH', 'EAST', 'WEST', 'NORTHEAST', 'CENTRAL') NOT NULL,
    capital         VARCHAR(100),
    created_at      TIMESTAMP       NOT NULL DEFAULT CURRENT_TIMESTAMP,

    PRIMARY KEY (id),
    UNIQUE KEY uq_state_name (name)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


CREATE TABLE IF NOT EXISTS heritage_sites (
    id                      INT             NOT NULL AUTO_INCREMENT,
    heritage_code           VARCHAR(20)     NOT NULL COMMENT 'e.g. GJ001, RJ002, UP001',
    name                    VARCHAR(200)    NOT NULL,
    state_id                INT             NOT NULL,
    district                VARCHAR(100)    NOT NULL,
    category                VARCHAR(100)    NOT NULL COMMENT 'e.g. Fort, Stepwell, Temple, Cave',
    period                  VARCHAR(100)    COMMENT 'e.g. 11th Century, 16th Century CE',
    history                 TEXT            COMMENT 'Verified historical description',
    architecture            TEXT            COMMENT 'Architectural description',
    cultural_significance   TEXT            COMMENT 'Cultural importance and significance',
    latitude                DOUBLE          COMMENT 'Geographic latitude (WGS84)',
    longitude               DOUBLE          COMMENT 'Geographic longitude (WGS84)',
    image_url               VARCHAR(500)    COMMENT 'Relative or absolute image path/URL',
    is_unesco               TINYINT(1)      NOT NULL DEFAULT 0 COMMENT '1 = UNESCO World Heritage Site',
    created_at              TIMESTAMP       NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at              TIMESTAMP       NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

    PRIMARY KEY (id),
    UNIQUE KEY uq_heritage_code (heritage_code),
    KEY idx_state_id (state_id),
    KEY idx_category (category),
    KEY idx_name (name),

    CONSTRAINT fk_sites_state
        FOREIGN KEY (state_id)
        REFERENCES states (id)
        ON DELETE RESTRICT
        ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


CREATE TABLE IF NOT EXISTS heritage_images (
    id              INT             NOT NULL AUTO_INCREMENT,
    heritage_id     INT             NOT NULL,
    image_url       VARCHAR(500)    NOT NULL,
    caption         VARCHAR(255),
    is_primary      TINYINT(1)      NOT NULL DEFAULT 0,
    created_at      TIMESTAMP       NOT NULL DEFAULT CURRENT_TIMESTAMP,

    PRIMARY KEY (id),
    KEY idx_heritage_id (heritage_id),

    CONSTRAINT fk_images_heritage
        FOREIGN KEY (heritage_id)
        REFERENCES heritage_sites (id)
        ON DELETE CASCADE
        ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


CREATE TABLE IF NOT EXISTS festivals (
    id              INT             NOT NULL AUTO_INCREMENT,
    name            VARCHAR(200)    NOT NULL,
    state_id        INT,
    description     TEXT,
    month           VARCHAR(50)     COMMENT 'Primary month of celebration',
    image_url       VARCHAR(500),
    created_at      TIMESTAMP       NOT NULL DEFAULT CURRENT_TIMESTAMP,

    PRIMARY KEY (id),
    KEY idx_festival_state (state_id),

    CONSTRAINT fk_festivals_state
        FOREIGN KEY (state_id)
        REFERENCES states (id)
        ON DELETE SET NULL
        ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;



CREATE TABLE IF NOT EXISTS culture (
    id              INT             NOT NULL AUTO_INCREMENT,
    title           VARCHAR(200)    NOT NULL,
    type            ENUM('ART', 'CRAFT', 'DANCE', 'MUSIC', 'CUISINE', 'TEXTILE') NOT NULL,
    state_id        INT,
    description     TEXT,
    image_url       VARCHAR(500),
    created_at      TIMESTAMP       NOT NULL DEFAULT CURRENT_TIMESTAMP,

    PRIMARY KEY (id),
    KEY idx_culture_state (state_id),
    KEY idx_culture_type (type),

    CONSTRAINT fk_culture_state
        FOREIGN KEY (state_id)
        REFERENCES states (id)
        ON DELETE SET NULL
        ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


CREATE TABLE IF NOT EXISTS hotels (
    id              INT             NOT NULL AUTO_INCREMENT,
    name            VARCHAR(200)    NOT NULL,
    heritage_id     INT             COMMENT 'Nearest heritage site (optional)',
    state_id        INT,
    city            VARCHAR(100),
    address         VARCHAR(500),
    stars           TINYINT         CHECK (stars BETWEEN 1 AND 5),
    price_per_night DECIMAL(10, 2),
    phone           VARCHAR(20),
    email           VARCHAR(150),
    website         VARCHAR(300),
    description     TEXT,
    image_url       VARCHAR(500),
    latitude        DOUBLE,
    longitude       DOUBLE,
    created_at      TIMESTAMP       NOT NULL DEFAULT CURRENT_TIMESTAMP,

    PRIMARY KEY (id),
    KEY idx_hotel_state (state_id),
    KEY idx_hotel_heritage (heritage_id),

    CONSTRAINT fk_hotels_state
        FOREIGN KEY (state_id)
        REFERENCES states (id)
        ON DELETE SET NULL
        ON UPDATE CASCADE,

    CONSTRAINT fk_hotels_heritage
        FOREIGN KEY (heritage_id)
        REFERENCES heritage_sites (id)
        ON DELETE SET NULL
        ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;



CREATE TABLE IF NOT EXISTS restaurants (
    id              INT             NOT NULL AUTO_INCREMENT,
    name            VARCHAR(200)    NOT NULL,
    heritage_id     INT             COMMENT 'Nearest heritage site (optional)',
    state_id        INT,
    city            VARCHAR(100),
    address         VARCHAR(500),
    cuisine_type    VARCHAR(100)    COMMENT 'e.g. Rajasthani, South Indian, Mughlai',
    price_range     ENUM('BUDGET', 'MID', 'PREMIUM') NOT NULL DEFAULT 'MID',
    phone           VARCHAR(20),
    description     TEXT,
    image_url       VARCHAR(500),
    latitude        DOUBLE,
    longitude       DOUBLE,
    created_at      TIMESTAMP       NOT NULL DEFAULT CURRENT_TIMESTAMP,

    PRIMARY KEY (id),
    KEY idx_restaurant_state (state_id),
    KEY idx_restaurant_heritage (heritage_id),

    CONSTRAINT fk_restaurants_state
        FOREIGN KEY (state_id)
        REFERENCES states (id)
        ON DELETE SET NULL
        ON UPDATE CASCADE,

    CONSTRAINT fk_restaurants_heritage
        FOREIGN KEY (heritage_id)
        REFERENCES heritage_sites (id)
        ON DELETE SET NULL
        ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;



CREATE TABLE IF NOT EXISTS users (
    id              INT             NOT NULL AUTO_INCREMENT,
    full_name       VARCHAR(150)    NOT NULL,
    email           VARCHAR(255)    NOT NULL,
    password_hash   VARCHAR(255)    NOT NULL COMMENT 'bcrypt hash — never store plain text',
    phone           VARCHAR(20),
    role            ENUM('USER', 'ADMIN') NOT NULL DEFAULT 'USER',
    is_active       TINYINT(1)      NOT NULL DEFAULT 1,
    created_at      TIMESTAMP       NOT NULL DEFAULT CURRENT_TIMESTAMP,
    last_login      TIMESTAMP       NULL DEFAULT NULL,

    PRIMARY KEY (id),
    UNIQUE KEY uq_user_email (email),
    KEY idx_user_role (role)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


CREATE TABLE IF NOT EXISTS reviews (
    id              INT             NOT NULL AUTO_INCREMENT,
    user_id         INT             NOT NULL,
    heritage_id     INT             NOT NULL,
    rating          TINYINT         NOT NULL CHECK (rating BETWEEN 1 AND 5),
    title           VARCHAR(200),
    body            TEXT,
    image_url       VARCHAR(500)    COMMENT 'Optional review photo uploaded by tourist',
    visit_date      DATE,
    is_approved     TINYINT(1)      NOT NULL DEFAULT 0,
    created_at      TIMESTAMP       NOT NULL DEFAULT CURRENT_TIMESTAMP,

    PRIMARY KEY (id),
    KEY idx_review_user (user_id),
    KEY idx_review_heritage (heritage_id),
    KEY idx_review_rating (rating),

    CONSTRAINT fk_reviews_user
        FOREIGN KEY (user_id)
        REFERENCES users (id)
        ON DELETE CASCADE
        ON UPDATE CASCADE,

    CONSTRAINT fk_reviews_heritage
        FOREIGN KEY (heritage_id)
        REFERENCES heritage_sites (id)
        ON DELETE CASCADE
        ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


CREATE TABLE IF NOT EXISTS heritage_scans (
    id                  INT             NOT NULL AUTO_INCREMENT,
    user_id             INT             NULL COMMENT 'NULL if anonymous scan',
    heritage_id         INT             NULL COMMENT 'NULL if monument not recognized',
    image_path          VARCHAR(500)    COMMENT 'Server-side path of uploaded scan image',
    ai_prediction       VARCHAR(200)    COMMENT 'Monument name returned by Vision AI',
    confidence          DECIMAL(5, 4)   COMMENT 'AI confidence score, e.g. 0.9600',
    confidence_level    ENUM('HIGH', 'MEDIUM', 'LOW') COMMENT 'HIGH>=0.90, MEDIUM 0.70-0.89, LOW<0.70',
    scan_status         ENUM('SUCCESS', 'LOW_CONFIDENCE', 'NOT_RECOGNIZED', 'ERROR')
                        NOT NULL DEFAULT 'NOT_RECOGNIZED',
    error_message       VARCHAR(500)    COMMENT 'Error detail if scan_status = ERROR',
    scanned_at          TIMESTAMP       NOT NULL DEFAULT CURRENT_TIMESTAMP,

    PRIMARY KEY (id),
    KEY idx_scan_user (user_id),
    KEY idx_scan_heritage (heritage_id),
    KEY idx_scan_status (scan_status),
    KEY idx_scan_confidence_level (confidence_level),
    KEY idx_scanned_at (scanned_at),

    CONSTRAINT fk_scans_user
        FOREIGN KEY (user_id)
        REFERENCES users (id)
        ON DELETE SET NULL
        ON UPDATE CASCADE,

    CONSTRAINT fk_scans_heritage
        FOREIGN KEY (heritage_id)
        REFERENCES heritage_sites (id)
        ON DELETE SET NULL
        ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

