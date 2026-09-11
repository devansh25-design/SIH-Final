-- ============================================================
-- heritage_explore — Sample / Seed Data
-- Bharat Heritage Explorer | SIH Prototype
-- ============================================================
-- Run AFTER schema.sql
-- Execute in MySQL Workbench:
--   SOURCE /path/to/database/seed_data.sql;
-- ============================================================

USE heritage_explore;


-- ============================================================
-- SECTION 1: STATES (28 States + 8 Union Territories)
-- ============================================================

INSERT INTO states (name, type, region, capital) VALUES
-- 28 States
('Andhra Pradesh',        'STATE',            'SOUTH',     'Amaravati'),
('Arunachal Pradesh',     'STATE',            'NORTHEAST', 'Itanagar'),
('Assam',                 'STATE',            'NORTHEAST', 'Dispur'),
('Bihar',                 'STATE',            'EAST',      'Patna'),
('Chhattisgarh',          'STATE',            'CENTRAL',   'Raipur'),
('Goa',                   'STATE',            'WEST',      'Panaji'),
('Gujarat',               'STATE',            'WEST',      'Gandhinagar'),
('Haryana',               'STATE',            'NORTH',     'Chandigarh'),
('Himachal Pradesh',      'STATE',            'NORTH',     'Shimla'),
('Jharkhand',             'STATE',            'EAST',      'Ranchi'),
('Karnataka',             'STATE',            'SOUTH',     'Bengaluru'),
('Kerala',                'STATE',            'SOUTH',     'Thiruvananthapuram'),
('Madhya Pradesh',        'STATE',            'CENTRAL',   'Bhopal'),
('Maharashtra',           'STATE',            'WEST',      'Mumbai'),
('Manipur',               'STATE',            'NORTHEAST', 'Imphal'),
('Meghalaya',             'STATE',            'NORTHEAST', 'Shillong'),
('Mizoram',               'STATE',            'NORTHEAST', 'Aizawl'),
('Nagaland',              'STATE',            'NORTHEAST', 'Kohima'),
('Odisha',                'STATE',            'EAST',      'Bhubaneswar'),
('Punjab',                'STATE',            'NORTH',     'Chandigarh'),
('Rajasthan',             'STATE',            'WEST',      'Jaipur'),
('Sikkim',                'STATE',            'NORTHEAST', 'Gangtok'),
('Tamil Nadu',            'STATE',            'SOUTH',     'Chennai'),
('Telangana',             'STATE',            'SOUTH',     'Hyderabad'),
('Tripura',               'STATE',            'NORTHEAST', 'Agartala'),
('Uttar Pradesh',         'STATE',            'NORTH',     'Lucknow'),
('Uttarakhand',           'STATE',            'NORTH',     'Dehradun'),
('West Bengal',           'STATE',            'EAST',      'Kolkata'),
-- 8 Union Territories
('Andaman and Nicobar Islands', 'UNION_TERRITORY', 'EAST',  'Port Blair'),
('Chandigarh',            'UNION_TERRITORY',  'NORTH',     'Chandigarh'),
('Dadra and Nagar Haveli and Daman and Diu', 'UNION_TERRITORY', 'WEST', 'Daman'),
('Delhi',                 'UNION_TERRITORY',  'NORTH',     'New Delhi'),
('Jammu and Kashmir',     'UNION_TERRITORY',  'NORTH',     'Srinagar'),
('Ladakh',                'UNION_TERRITORY',  'NORTH',     'Leh'),
('Lakshadweep',           'UNION_TERRITORY',  'SOUTH',     'Kavaratti'),
('Puducherry',            'UNION_TERRITORY',  'SOUTH',     'Puducherry');


-- ============================================================
-- SECTION 2: HERITAGE SITES (20 monuments)
-- Descriptions are accurate and suitable for a student prototype.
-- ============================================================

INSERT INTO heritage_sites
    (heritage_code, name, state_id, district, category, period,
     history, architecture, cultural_significance,
     latitude, longitude, image_url, is_unesco)
VALUES

-- ── GUJARAT ──────────────────────────────────────────────
('GJ001', 'Rani ki Vav',
    (SELECT id FROM states WHERE name = 'Gujarat'),
    'Patan', 'Stepwell', '11th Century CE',
    'Rani ki Vav, meaning The Queen''s Stepwell, was built around 1063 CE by Queen Udayamati of the Solanki dynasty in memory of her husband, King Bhimdev I. Submerged for centuries and rediscovered in the 1980s, it was inscribed as a UNESCO World Heritage Site in 2014.',
    'The stepwell is designed as an inverted temple of the Maru-Gurjara style with seven levels of stairs and more than 500 principal sculptures depicting Vishnu in his ten incarnations (Dashavatara). Its shaft extends 30 metres deep into the earth.',
    'Rani ki Vav is featured on the Indian 100-rupee banknote. It reflects the advanced water management systems and artistic excellence of mediaeval Gujarat. It is one of the finest examples of stepwell architecture in India.',
    23.8587, 72.1016, 'rani-ki-vav.jpg', 1),

('GJ002', 'Adalaj Stepwell',
    (SELECT id FROM states WHERE name = 'Gujarat'),
    'Gandhinagar', 'Stepwell', '15th Century CE',
    'Adalaj Stepwell was built in 1499 CE by Queen Rudabai, wife of the Vaghela chief Veer Singh, and later completed under Sultan Mahmud Begada of the Gujarat Sultanate. It served as a cool resting place for travellers and villagers.',
    'The five-storeyed stepwell blends Hindu, Islamic, and Jain architectural motifs. The pillars, niches, and walls are richly carved with floral patterns, figurines, and geometric designs. Each landing has pavilions that allowed people to rest in natural cool air.',
    'Adalaj Stepwell is a symbol of religious harmony, combining multiple architectural traditions. It remains an important pilgrimage and tourist destination in Gujarat, reflecting the syncretic culture of mediaeval western India.',
    23.1653, 72.5802, 'adalaj-stepwell.jpg', 0),

('GJ003', 'Modhera Sun Temple',
    (SELECT id FROM states WHERE name = 'Gujarat'),
    'Mehsana', 'Temple', '11th Century CE',
    'The Modhera Sun Temple was built by King Bhimdev I of the Solanki dynasty in 1026 CE and is dedicated to the Hindu Sun God Surya. It was constructed so that the rising sun illuminates the sanctum sanctorum at the equinoxes.',
    'Built in the Maru-Gurjara style, the temple complex includes a Surya Kund (stepped tank), a Sabha Mandap (assembly hall), and the main shrine. The exterior is intricately carved with depictions of deities, apsaras, and geometric patterns.',
    'The temple is a masterpiece of ancient Indian solar architecture and astronomical knowledge. The annual Modhera Dance Festival held here celebrates classical Indian dance forms against the temple backdrop.',
    23.5833, 72.1333, 'modhera-sun-temple.jpg', 0),

-- ── MADHYA PRADESH ───────────────────────────────────────
('MP001', 'Sanchi Stupa',
    (SELECT id FROM states WHERE name = 'Madhya Pradesh'),
    'Raisen', 'Buddhist Monument', '3rd Century BCE',
    'The Great Stupa at Sanchi was originally commissioned by Emperor Ashoka in the 3rd century BCE to enshrine relics of the Buddha. It is one of the oldest stone structures in India and a major centre of Buddhist pilgrimage.',
    'The hemispherical stupa is surrounded by a stone railing (vedika) with four elaborately carved gateways (toranas) depicting scenes from the life of the Buddha and Jataka tales. The carvings are executed in high relief.',
    'Sanchi is a UNESCO World Heritage Site and one of the most important Buddhist pilgrimage centres in the world. It represents the spread of Buddhism under the Mauryan Empire and is a monument to India''s ancient cultural heritage.',
    23.4793, 77.7400, 'sanchi-stupa.jpg', 1),

('MP002', 'Khajuraho Group of Monuments',
    (SELECT id FROM states WHERE name = 'Madhya Pradesh'),
    'Chhatarpur', 'Temple Complex', '10th–11th Century CE',
    'The Khajuraho temples were built by the Chandela dynasty between 950 and 1050 CE. Originally there were about 85 temples of which 25 survive. They are dedicated to Hindu and Jain deities.',
    'Built in the Nagara style of North Indian temple architecture, the temples are famous for their erotic sculptures on the exterior walls. However, most of the carvings depict scenes of everyday life, celestial dancers, and mythological motifs.',
    'A UNESCO World Heritage Site since 1986, the Khajuraho temples represent the zenith of Chandela art and architecture. The annual Khajuraho Dance Festival attracts classical dancers from across India to perform at this historic venue.',
    24.8318, 79.9199, 'khajuraho.jpg', 1),

-- ── RAJASTHAN ────────────────────────────────────────────
('RJ001', 'Amer Fort',
    (SELECT id FROM states WHERE name = 'Rajasthan'),
    'Jaipur', 'Fort', '16th Century CE',
    'Amer Fort was built primarily by Raja Man Singh I in 1592 CE on a hilltop overlooking Maota Lake near Jaipur. It served as the capital of the Kachwahas, a Rajput clan, for centuries before the capital moved to Jaipur.',
    'Constructed from red sandstone and white marble, the fort is designed in the Rajput style of architecture. Its highlights include the Sheesh Mahal (Palace of Mirrors), Ganesh Pol (gate), Diwan-i-Aam (Hall of Public Audience), and Sukh Niwas with a channel for natural air conditioning.',
    'Part of the UNESCO-listed Hill Forts of Rajasthan (2013), Amer Fort reflects the military architecture and royal lifestyle of Rajput rulers. Elephant rides to the fort remain a popular tourist experience.',
    26.9855, 75.8513, 'amer-fort.jpg', 1),

('RJ002', 'Hawa Mahal',
    (SELECT id FROM states WHERE name = 'Rajasthan'),
    'Jaipur', 'Palace', '18th Century CE',
    'Hawa Mahal (Palace of Winds) was built in 1799 CE by Maharaja Sawai Pratap Singh of Jaipur. It was designed to allow the royal women of the purdah system to observe street festivals without being seen.',
    'The five-storey pink sandstone facade has 953 small windows (jharokhas) decorated with intricate latticework. The upper floors can be accessed only by ramps (no staircase). The pyramid-shaped structure resembles the crown of Lord Krishna.',
    'Hawa Mahal is one of the most iconic symbols of Jaipur and Rajasthan. The unique window design creates natural ventilation keeping the palace cool even in summer. It is a fine example of Rajput architecture fused with Mughal influences.',
    26.9239, 75.8267, 'hawa-mahal.jpg', 0),

('RJ003', 'Chittorgarh Fort',
    (SELECT id FROM states WHERE name = 'Rajasthan'),
    'Chittorgarh', 'Fort', '7th Century CE onward',
    'Chittorgarh Fort is one of the largest forts in India, spread over 700 acres on a hill rising 180 metres above the plains. It served as the capital of the Mewar kingdom and withstood three major sieges — by Alauddin Khilji (1303), Bahadur Shah (1535), and Akbar (1568).',
    'The fort contains numerous palaces, temples, towers, and reservoirs within its 13 km perimeter. Notable structures include the Vijay Stambha (Tower of Victory), Kirti Stambha (Tower of Fame), Rana Kumbha Palace, and Padmini Palace.',
    'Part of the UNESCO Hill Forts of Rajasthan listing, Chittorgarh is a symbol of Rajput valour and the Rajasthani code of honour (Rajput dharma). The story of Rani Padmavati''s sacrifice is one of the most celebrated episodes of Rajput history.',
    24.8888, 74.6469, 'chittorgarh-fort.jpg', 1),

-- ── UTTAR PRADESH ────────────────────────────────────────
('UP001', 'Taj Mahal',
    (SELECT id FROM states WHERE name = 'Uttar Pradesh'),
    'Agra', 'Mausoleum', '17th Century CE',
    'The Taj Mahal was commissioned by Mughal Emperor Shah Jahan in 1632 CE in memory of his beloved wife Mumtaz Mahal, who died in 1631. Construction took approximately 21 years with a workforce of over 20,000 artisans. It was completed around 1653 CE.',
    'Built from white Makrana marble, the Taj Mahal features a central dome flanked by four minarets, set on a raised platform. The interiors are decorated with pietra dura inlay work using semi-precious stones. The garden is laid out in the Charbagh style with reflecting pools.',
    'The Taj Mahal is a UNESCO World Heritage Site and one of the Seven Wonders of the World. It is considered the finest example of Mughal architecture and a universal symbol of love. It receives approximately 7–8 million visitors annually.',
    27.1751, 78.0421, 'taj-mahal.jpg', 1),

-- ── DELHI ────────────────────────────────────────────────
('DL001', 'Red Fort',
    (SELECT id FROM states WHERE name = 'Delhi'),
    'New Delhi', 'Fort', '17th Century CE',
    'Red Fort (Lal Qila) was constructed by Mughal Emperor Shah Jahan between 1638 and 1648 CE as the palace-fortress of the new capital Shahjahanabad. It remained the seat of Mughal power until 1857. The Prime Minister of India hoists the national flag here every Independence Day (15 August).',
    'Built from red sandstone, the fort measures approximately 900 metres by 550 metres. Key structures include the Lahori Gate, Delhi Gate, Diwan-i-Aam (Public Audience Hall), Diwan-i-Khas (Private Audience Hall), Rang Mahal, and Moti Masjid.',
    'A UNESCO World Heritage Site since 2007, Red Fort is a powerful symbol of India''s sovereignty and freedom. Its evening Sound and Light Show narrates the fort''s history. It represents the peak of Mughal civic and military architecture.',
    28.6562, 77.2410, 'red-fort.jpg', 1),

-- ── ODISHA ───────────────────────────────────────────────
('OD001', 'Konark Sun Temple',
    (SELECT id FROM states WHERE name = 'Odisha'),
    'Puri', 'Temple', '13th Century CE',
    'The Konark Sun Temple was built by King Narasimhadeva I of the Eastern Ganga dynasty around 1250 CE. The temple is designed as a massive stone chariot of the Sun God Surya, with 24 elaborately carved wheels that function as precise sundials.',
    'Built in the Kalinga style of architecture, the temple complex was originally 70 metres tall. The wheels, horses, and entire structure are carved in high relief with intricate sculptures of deities, celestial beings, and erotic figures. Much of the main tower (sikhara) has collapsed, but the Jagamohana (audience hall) remains.',
    'A UNESCO World Heritage Site since 1984, the Konark Sun Temple is regarded as one of the greatest works of Orissan art and architecture. It inspired the modern wheel symbol on India''s national flag and appears on Indian currency.',
    19.8876, 86.0945, 'konark.jpg', 1),

-- ── KARNATAKA ────────────────────────────────────────────
('KA001', 'Hampi',
    (SELECT id FROM states WHERE name = 'Karnataka'),
    'Vijayanagara', 'Archaeological Site', '14th–16th Century CE',
    'Hampi was the capital of the Vijayanagara Empire, one of the largest Hindu empires in Indian history, founded in 1336 CE. At its peak in the 15th–16th centuries, it was one of the richest cities in the world. It was sacked by the Deccan Sultanates in 1565 CE.',
    'The ruins of Hampi spread across 4,187 hectares and include the iconic Vittala Temple with its stone chariot and musical pillars, Virupaksha Temple, Lotus Mahal, Elephant Stables, and hundreds of monuments. The landscape is characterised by giant granite boulders.',
    'A UNESCO World Heritage Site since 1986, Hampi is one of the most evocative archaeological sites in India. It represents the artistic and architectural achievements of the Vijayanagara Empire and remains a major pilgrimage site for Hindus.',
    15.3350, 76.4600, 'hampi.jpg', 1),

-- ── MAHARASHTRA ──────────────────────────────────────────
('MH001', 'Ajanta Caves',
    (SELECT id FROM states WHERE name = 'Maharashtra'),
    'Aurangabad', 'Rock-cut Cave', '2nd Century BCE – 6th Century CE',
    'The Ajanta Caves are 30 rock-cut Buddhist cave monuments dating from the 2nd century BCE to approximately 480 CE. They were forgotten for centuries until rediscovered by British officer John Smith in 1819 during a tiger hunt.',
    'The caves contain paintings and rock-cut sculptures considered masterpieces of Buddhist religious art. The paintings depict scenes from the Jataka tales and the life of the Buddha using natural pigments. The artistic style influenced art across Asia.',
    'A UNESCO World Heritage Site since 1983, the Ajanta Caves provide the finest surviving examples of ancient Indian art. They represent a major milestone in the development of Buddhist art and influenced artistic traditions in Sri Lanka, China, and Central Asia.',
    20.5519, 75.7033, 'ajanta-caves.jpg', 1),

('MH002', 'Ellora Caves',
    (SELECT id FROM states WHERE name = 'Maharashtra'),
    'Aurangabad', 'Rock-cut Cave', '6th–11th Century CE',
    'The Ellora Caves are 34 rock-cut temples and monasteries belonging to Buddhist, Hindu, and Jain traditions, built between the 6th and 11th centuries CE. Cave 16, the Kailasa Temple, is the largest monolithic rock-cut structure in the world.',
    'The Kailasa Temple was carved top-down out of a single basalt cliff, requiring the removal of approximately 200,000 tonnes of rock. The entire complex is unmatched in scale, representing a vertical excavation of 100 feet into the rock face.',
    'A UNESCO World Heritage Site since 1983, Ellora represents the synthesis of three major Indian religions and demonstrates remarkable artistic talent. The coexistence of Buddhist, Hindu, and Jain monuments at one site reflects India''s tradition of religious tolerance.',
    20.0269, 75.1797, 'ellora-caves.jpg', 1),

-- ── TAMIL NADU ───────────────────────────────────────────
('TN001', 'Brihadeeswarar Temple',
    (SELECT id FROM states WHERE name = 'Tamil Nadu'),
    'Thanjavur', 'Temple', '11th Century CE',
    'The Brihadeeswarar Temple (also called Rajarajeswaram) was built by the Chola Emperor Rajaraja I between 1003 and 1010 CE in Thanjavur. It is the largest temple in India built entirely from granite and remains an active place of worship.',
    'The temple tower (vimana) rises 66 metres and is topped by a monolithic granite capstone (kumbam) weighing approximately 80 tonnes. The main hall contains murals from the Chola period. The temple showcases Dravidian architecture at its finest.',
    'A UNESCO World Heritage Site as part of the Great Living Chola Temples (1987), the Brihadeeswarar Temple reflects the power and cultural achievement of the Chola Empire. It hosts major religious festivals including Mahashivaratri and Karthigai Deepam.',
    10.7825, 79.1317, 'brihadeeswarar-temple.jpg', 1),

-- ── ANDHRA PRADESH ───────────────────────────────────────
('AP001', 'Buddhist Monuments of Amaravati',
    (SELECT id FROM states WHERE name = 'Andhra Pradesh'),
    'Guntur', 'Buddhist Monument', '3rd Century BCE – 3rd Century CE',
    'The Amaravati Stupa was one of the most magnificent Buddhist structures in ancient India, built between the 3rd century BCE and 3rd century CE. It served as a major centre of Buddhist learning and missionary activity. Many of its sculptures are now in the Chennai Museum and British Museum.',
    'The original stupa was large with an elaborately decorated outer drum covered in carved marble slabs depicting scenes from the life of the Buddha and Jataka stories. The Amaravati sculptural school is considered one of three great schools of early Indian art.',
    'Amaravati is the site from which Buddhism spread to Sri Lanka and Southeast Asia. A new Amaravati Museum and reconstructed stupa have been developed. It is central to Andhra Pradesh''s Buddhist heritage tourism circuit.',
    16.5754, 80.3573, 'amaravati-stupa.jpg', 0),

-- ── KERALA ───────────────────────────────────────────────
('KL001', 'Mattancherry Palace',
    (SELECT id FROM states WHERE name = 'Kerala'),
    'Ernakulam', 'Palace', '16th Century CE',
    'Mattancherry Palace (Dutch Palace) was built by the Portuguese around 1545 CE and presented to the Kochi King Veera Kerala Varma as a gift. The Dutch renovated it significantly in 1663 CE, giving rise to its alternative name.',
    'The palace is a typical example of the Kerala architectural style (tharavadu) with low-pitched sloping roofs, narrow verandahs, and large courtyards. It is renowned for its royal murals depicting scenes from the Ramayana and Puranic legends.',
    'The murals at Mattancherry Palace are considered among the best examples of traditional Kerala mural painting and are important to the study of South Indian art history. The palace museum displays royal artefacts of the Cochin rulers.',
    9.9574, 76.2581, 'mattancherry-palace.jpg', 0),

-- ── WEST BENGAL ──────────────────────────────────────────
('WB001', 'Victoria Memorial',
    (SELECT id FROM states WHERE name = 'West Bengal'),
    'Kolkata', 'Memorial', '20th Century CE',
    'Victoria Memorial was built between 1906 and 1921 CE to commemorate Queen Victoria, Empress of India. It was designed by Sir William Emerson in the Indo-Saracenic style. Lord Curzon, the Viceroy of India, was the principal initiator of the project.',
    'The building is constructed from white Makrana marble (the same marble used in the Taj Mahal) with a central dome surrounded by towers and turrets. A bronze statue of Queen Victoria sits at the main entrance. The building houses 25 galleries.',
    'Victoria Memorial is one of the most iconic landmarks of Kolkata and Bengal. It now functions as a museum under the Ministry of Culture, displaying Mughal and British period artefacts, paintings, and maps. It is a symbol of the Indo-British colonial heritage of Kolkata.',
    22.5448, 88.3426, 'victoria-memorial.jpg', 0),

-- ── BIHAR ────────────────────────────────────────────────
('BIH001', 'Nalanda Mahavihara',
    (SELECT id FROM states WHERE name = 'Bihar'),
    'Nalanda', 'University / Monastery', '5th–12th Century CE',
    'Nalanda Mahavihara was one of the greatest centres of learning in the ancient world, established in the 5th century CE during the Gupta period. It attracted scholars from China, Korea, Japan, Tibet, Mongolia, Turkey, Sri Lanka, and Southeast Asia. It was destroyed by Bakhtiyar Khilji around 1200 CE.',
    'The archaeological site contains ruins of monasteries, temples, and lecture halls constructed in red brick. The remains reveal the layout of a vast residential university with multiple courtyards, dormitories, libraries, and teaching halls.',
    'Nalanda is a UNESCO World Heritage Site (2016). It represents the highest tradition of intellectual inquiry and religious scholarship in ancient India. The Nalanda International University was revived nearby in 2014 to honour this legacy.',
    25.1355, 85.4434, 'nalanda.jpg', 1),

-- ── TELANGANA ────────────────────────────────────────────
('TEL001', 'Charminar',
    (SELECT id FROM states WHERE name = 'Telangana'),
    'Hyderabad', 'Monument / Mosque', '16th Century CE',
    'Charminar was built in 1591 CE by Muhammad Quli Qutb Shah, the fifth ruler of the Qutb Shahi dynasty, to commemorate the founding of Hyderabad and to give thanks for the end of a plague epidemic. Its name means Four Towers (Char = Four, Minar = Tower).',
    'The monument is built from granite, lime mortar, and pulverised marble. It features four grand arches facing the four cardinal directions, four minarets each 48.7 metres tall, and a mosque on the top floor. The building is a blend of Indo-Islamic and Persian architecture.',
    'Charminar is the most recognised symbol of Hyderabad and an emblem of Telangana state. The surrounding Laad Bazaar is famous for bangles, pearls, and traditional Hyderabadi crafts. The monument represents the glory of the Qutb Shahi dynasty and the composite culture of Hyderabad.',
    17.3616, 78.4747, 'charminar.jpg', 0);


-- ============================================================
-- SECTION 3: FESTIVALS (Sample data)
-- ============================================================

INSERT INTO festivals (name, state_id, description, month, image_url)
VALUES
('Navratri',
    (SELECT id FROM states WHERE name = 'Gujarat'),
    'Navratri is a nine-night festival dedicated to the worship of Goddess Durga. In Gujarat it is celebrated with colourful Garba and Dandiya Raas folk dances performed outdoors. It is one of the largest folk dance festivals in the world.',
    'October', 'navratri.jpg'),

('Durga Puja',
    (SELECT id FROM states WHERE name = 'West Bengal'),
    'Durga Puja is the biggest festival of West Bengal, celebrating the victory of Goddess Durga over the demon Mahishasura. Elaborate pandals (temporary structures) with artistic installations are set up across Kolkata for five days of worship, cultural programmes, and community celebrations.',
    'October', 'durga-puja.jpg'),

('Bihu',
    (SELECT id FROM states WHERE name = 'Assam'),
    'Bihu refers to three important festivals of Assam marking the agricultural seasons. Bohag Bihu (spring), Magh Bihu (harvest), and Kati Bihu (autumn). Bohag Bihu is the most celebrated, featuring traditional Bihu dance and music.',
    'April', 'bihu.jpg'),

('Hornbill Festival',
    (SELECT id FROM states WHERE name = 'Nagaland'),
    'The Hornbill Festival, held in December, is a week-long cultural festival showcasing the traditions, songs, dances, and food of all Naga tribes. It is held at the Kisama Heritage Village near Kohima and promotes Nagaland''s cultural heritage.',
    'December', 'hornbill.jpg'),

('Pongal',
    (SELECT id FROM states WHERE name = 'Tamil Nadu'),
    'Pongal is a four-day harvest festival celebrated in Tamil Nadu, Andhra Pradesh, and Telangana in January. It is dedicated to the Sun God and marks the end of the winter solstice. The festival involves cooking the first rice of the harvest season in new clay pots.',
    'January', 'pongal.jpg'),

('Chhath Puja',
    (SELECT id FROM states WHERE name = 'Bihar'),
    'Chhath Puja is a four-day Hindu festival dedicated to the Sun God Surya and Chhathi Maiya. Celebrated along riverbanks across Bihar, Jharkhand, and Uttar Pradesh, devotees offer prayers to the setting and rising sun while standing in water.',
    'November', 'chhath.jpg'),

('Onam',
    (SELECT id FROM states WHERE name = 'Kerala'),
    'Onam is the state festival of Kerala, celebrated for ten days to welcome the mythological King Mahabali. The festival includes Pookalam (floral arrangements), boat races (Vallam Kali), traditional Onam Sadhya feast, and Kathakali performances.',
    'August', 'onam.jpg'),

('Holi',
    (SELECT id FROM states WHERE name = 'Uttar Pradesh'),
    'Holi, the Festival of Colours, is celebrated across India but is especially vibrant in Uttar Pradesh, particularly in Mathura, Vrindavan, and Barsana. Revellers throw coloured powder and water at each other to celebrate the triumph of good over evil.',
    'March', 'holi.jpg');


-- ============================================================
-- SECTION 4: CULTURE (Sample data)
-- ============================================================

INSERT INTO culture (title, type, state_id, description, image_url)
VALUES
('Bharatanatyam',
    'DANCE',
    (SELECT id FROM states WHERE name = 'Tamil Nadu'),
    'Bharatanatyam is one of the oldest and most widely practised classical dance forms of India, originating from the temples of Tamil Nadu. It is known for its grace, purity, and sculptural poses, and encompasses nritta (pure dance), nritya (expressional dance), and natya (dramatic dance).',
    'bharatanatyam.jpg'),

('Kathak',
    'DANCE',
    (SELECT id FROM states WHERE name = 'Uttar Pradesh'),
    'Kathak is one of the eight major Indian classical dance forms, originating in North India. The name derives from the Sanskrit katha (story). It is characterised by fast footwork, spins (chakkar), expressive gestures (mudras), and storytelling through mime.',
    'kathak.jpg'),

('Madhubani Painting',
    'ART',
    (SELECT id FROM states WHERE name = 'Bihar'),
    'Madhubani painting is a traditional folk art practised in the Mithila region of Bihar. Created using natural dyes and pigments on cloth, paper, and walls, the paintings depict mythological scenes, nature, and everyday life with bold geometric patterns and vibrant colours.',
    'madhubani.jpg'),

('Warli Tribal Art',
    'ART',
    (SELECT id FROM states WHERE name = 'Maharashtra'),
    'Warli is a form of tribal art originating from the Warli tribal community of Maharashtra. Painted using white rice paste on mud walls, the art depicts scenes of everyday life, harvests, and festivals using geometric shapes such as circles, triangles, and squares.',
    'Warli Tribal Wall Art.jpeg'),

('Phulkari Embroidery',
    'CRAFT',
    (SELECT id FROM states WHERE name = 'Punjab'),
    'Phulkari meaning flower work is a form of embroidery art from Punjab. Traditionally done on coarse cotton cloth using colourful silk threads in a darning stitch, Phulkari is used to create shawls, dupattas, and head coverings.',
    'phulkari.jpg'),

('Gujarati Thali',
    'CUISINE',
    (SELECT id FROM states WHERE name = 'Gujarat'),
    'The traditional Gujarati Thali is a complete vegetarian meal served in a round tray with small bowls (katoris). A typical thali includes dal, kadhi, various sabzis, rice, rotli (bread), papad, pickles, chutney, and a sweet such as shrikhand or halwa.',
    'gujarati-thali.jpg');


-- ============================================================
-- SECTION 5: HOTELS (Sample data linked to heritage sites)
-- ============================================================

INSERT INTO hotels (name, heritage_id, state_id, city, address, stars, price_per_night, description, image_url)
VALUES
('ITC Mughal, Agra',
    (SELECT id FROM heritage_sites WHERE heritage_code = 'UP001'),
    (SELECT id FROM states WHERE name = 'Uttar Pradesh'),
    'Agra', 'Taj Ganj, Agra, Uttar Pradesh 282001',
    5, 12000.00,
    'A five-star luxury hotel offering views of the Taj Mahal, featuring Mughal-inspired architecture, spa facilities, and authentic Mughal cuisine.',
    NULL),

('Hotel Pearl Palace, Jaipur',
    (SELECT id FROM heritage_sites WHERE heritage_code = 'RJ001'),
    (SELECT id FROM states WHERE name = 'Rajasthan'),
    'Jaipur', 'Hari Kishan Somani Marg, Hathroi Fort, Ajmer Road, Jaipur',
    3, 2500.00,
    'A charming heritage-styled budget hotel in Jaipur known for its rooftop restaurant, hand-painted rooms, and proximity to Hawa Mahal and Amer Fort.',
    NULL),

('Heritage Village Resort, Manesar',
    NULL,
    (SELECT id FROM states WHERE name = 'Haryana'),
    'Gurugram', 'Delhi-Jaipur Highway, Manesar, Haryana',
    4, 7000.00,
    'A heritage resort recreating traditional Rajasthani village ambience with mud huts, folk performances, and cuisine from the royal kitchens of Rajasthan.',
    NULL);


-- ============================================================
-- SECTION 6: RESTAURANTS (Sample data)
-- ============================================================

INSERT INTO restaurants (name, heritage_id, state_id, city, cuisine_type, price_range, description, image_url)
VALUES
('Karim''s, Old Delhi',
    (SELECT id FROM heritage_sites WHERE heritage_code = 'DL001'),
    (SELECT id FROM states WHERE name = 'Delhi'),
    'New Delhi', 'Mughlai', 'MID',
    'One of the oldest and most renowned restaurants near Red Fort, Karim''s has been serving authentic Mughlai cuisine since 1913. Famous for its mutton korma, seekh kebab, and nihari.',
    NULL),

('Chokhi Dhani, Jaipur',
    NULL,
    (SELECT id FROM states WHERE name = 'Rajasthan'),
    'Jaipur', 'Rajasthani', 'PREMIUM',
    'A cultural village resort and restaurant in Jaipur serving authentic Rajasthani dal-baati-churma, gatte ki sabzi, and ker sangri in a traditional village setting with folk performances.',
    'dal-baati.jpg'),

('Saravana Bhavan, Chennai',
    NULL,
    (SELECT id FROM states WHERE name = 'Tamil Nadu'),
    'Chennai', 'South Indian Vegetarian', 'BUDGET',
    'A legendary South Indian restaurant chain renowned for its crispy dosas, idlis, sambar, and filter coffee. An essential dining experience when visiting Tamil Nadu.',
    NULL);


-- ============================================================
-- SECTION 7: SAMPLE USERS (hashed passwords — demo only)
-- DO NOT use these passwords in production.
-- Passwords below are bcrypt placeholders. Replace with real hashes.
-- ============================================================

INSERT INTO users (full_name, email, password_hash, role)
VALUES
('Admin User',
    'admin@bharatheritageexplorer.org',
    '$2a$12$PLACEHOLDER_HASH_REPLACE_IN_PRODUCTION_ONLY_DEMO',
    'ADMIN'),
('Test Tourist',
    'tourist@example.com',
    '$2a$12$PLACEHOLDER_HASH_REPLACE_IN_PRODUCTION_ONLY_DEMO',
    'USER');


-- ============================================================
-- END OF SEED DATA
-- ============================================================
-- Verify with:
--   SELECT COUNT(*) FROM states;            -- Expected: 36
--   SELECT COUNT(*) FROM heritage_sites;    -- Expected: 20
--   SELECT COUNT(*) FROM festivals;         -- Expected: 8
--   SELECT COUNT(*) FROM culture;           -- Expected: 6
-- ============================================================
