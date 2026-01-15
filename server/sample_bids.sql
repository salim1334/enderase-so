-- Sample Bids for Enderase Solutions
-- Mix of OPEN and CLOSED bids for testing
-- Current date reference: 2026-01-15

-- Note: Replace 'staffId' values (1, 2) with actual staff IDs from your Users table
-- You can check with: SELECT id, username FROM Users WHERE role IN ('staff', 'admin');

-- ============================================
-- OPEN BIDS (Future closing dates)
-- ============================================

INSERT INTO Bids (tender_name, company_name, bid_bond_amount, document_price, additional_notes, region, bid_opening_date, bid_closing_date, staffId, createdAt, updatedAt) VALUES
(
  'Supply of Office Furniture and Equipment for Ministry of Education',
  'Ethiopian Ministry of Education',
  150000.00,
  500.00,
  'Bidders must provide samples of office chairs and desks. Delivery required within 60 days of contract signing. All items must meet ISO quality standards.',
  'Addis Ababa',
  '2026-01-20 09:00:00',
  '2026-02-15 14:30:00',
  1,
  NOW(),
  NOW()
),
(
  'Construction of G+4 School Building in Hawassa City',
  'Hawassa City Administration',
  500000.00,
  1200.00,
  'Project includes construction of classrooms, library, laboratory, and administrative offices. Timeline: 18 months. Contractors must have Grade 1 license.',
  'Sidama',
  '2026-01-25 10:00:00',
  '2026-03-10 16:00:00',
  1,
  NOW(),
  NOW()
),
(
  'Procurement of Medical Equipment for Tikur Anbessa Hospital',
  'Black Lion Specialized Hospital',
  300000.00,
  800.00,
  'Required: MRI machine, CT scanner, ultrasound machines (5 units), and patient monitoring systems. All equipment must be brand new with 3-year warranty.',
  'Addis Ababa',
  '2026-01-22 08:30:00',
  '2026-02-28 15:00:00',
  1,
  NOW(),
  NOW()
),
(
  'Road Construction and Asphalt Laying - Bahir Dar to Gondar Highway',
  'Ethiopian Roads Authority',
  2000000.00,
  2500.00,
  '85km highway construction and rehabilitation project. Must include drainage systems and road safety features. Grade 1 contractor required.',
  'Amhara',
  '2026-02-01 09:00:00',
  '2026-03-25 17:00:00',
  1,
  NOW(),
  NOW()
),
(
  'IT Infrastructure Upgrade for Commercial Bank of Ethiopia',
  'Commercial Bank of Ethiopia',
  250000.00,
  600.00,
  'Network infrastructure upgrade for 200+ branches nationwide. Includes servers, switches, routers, and cybersecurity solutions. Project duration: 12 months.',
  'Addis Ababa',
  NULL,
  '2026-02-20 14:00:00',
  1,
  NOW(),
  NOW()
),
(
  'Supply of Agricultural Equipment for Oromia Agricultural Bureau',
  'Oromia Agricultural Development Bureau',
  180000.00,
  450.00,
  'Required: Tractors (50 units), plowing equipment, irrigation systems, and grain storage silos. Equipment must be suitable for Ethiopian terrain.',
  'Oromia',
  '2026-01-28 10:00:00',
  '2026-02-25 16:30:00',
  1,
  NOW(),
  NOW()
),
(
  'Water Supply System Installation for Dire Dawa City',
  'Dire Dawa Water Supply Authority',
  400000.00,
  900.00,
  'Installation of modern water treatment plant and distribution network. Capacity: 50,000 cubic meters/day. Timeline: 24 months.',
  'Dire Dawa',
  '2026-02-05 09:00:00',
  '2026-03-15 15:00:00',
  1,
  NOW(),
  NOW()
),
(
  'Printing and Supply of Textbooks for Public Schools',
  'Ethiopian Education Materials Production Agency',
  120000.00,
  350.00,
  'Print and deliver 5 million textbooks (Grades 1-8) in Amharic, Oromiffa, and Tigrigna. Delivery: Before September 2026 academic year.',
  'Addis Ababa',
  '2026-01-30 08:00:00',
  '2026-02-18 17:00:00',
  1,
  NOW(),
  NOW()
);

-- ============================================
-- CLOSED BIDS (Past closing dates)
-- ============================================

INSERT INTO Bids (tender_name, company_name, bid_bond_amount, document_price, additional_notes, region, bid_opening_date, bid_closing_date, staffId, createdAt, updatedAt) VALUES
(
  'CARE Ethiopia - Supply of Tools and Pipe Wrenches',
  'CARE Ethiopia',
  25000.00,
  500.00,
  'CARE Ethiopia invites eligible bidders for the purchase of various tools and pipe wrenches for humanitarian projects. Quality certification required.',
  'Addis Ababa',
  NULL,
  '2025-12-29 14:30:00',
  1,
  '2025-12-25 10:00:00',
  '2025-12-25 10:00:00'
),
(
  'Procurement of Solar Panels for Rural Electrification',
  'Ethiopian Electric Utility',
  350000.00,
  750.00,
  'Supply and installation of solar panels for 100 rural villages. Total capacity: 5MW. Includes maintenance training for local technicians.',
  'Southern Nations',
  '2025-12-15 09:00:00',
  '2026-01-10 16:00:00',
  1,
  '2025-12-10 08:00:00',
  '2025-12-10 08:00:00'
),
(
  'Vehicle Fleet Purchase for Federal Police Commission',
  'Ethiopian Federal Police Commission',
  600000.00,
  1000.00,
  'Purchase of 200 patrol vehicles (4x4 SUVs) with communication equipment. Vehicles must be equipped for Ethiopian road conditions.',
  'Addis Ababa',
  '2025-11-20 10:00:00',
  '2025-12-28 15:00:00',
  1,
  '2025-11-15 09:00:00',
  '2025-11-15 09:00:00'
),
(
  'Construction of Community Health Centers in Tigray Region',
  'Tigray Regional Health Bureau',
  280000.00,
  650.00,
  'Construction of 15 health centers across rural areas. Each facility to include examination rooms, pharmacy, and laboratory. Timeline: 15 months.',
  'Tigray',
  '2025-11-25 09:00:00',
  '2026-01-05 14:00:00',
  1,
  '2025-11-20 10:00:00',
  '2025-11-20 10:00:00'
),
(
  'Furniture and Equipment for New University Campus',
  'Addis Ababa University',
  200000.00,
  550.00,
  'Supply of lecture hall furniture, laboratory equipment, library furnishings, and dormitory beds for 5,000 students. Delivery: 90 days.',
  'Addis Ababa',
  '2025-12-01 08:30:00',
  '2026-01-08 16:30:00',
  1,
  '2025-11-28 09:00:00',
  '2025-11-28 09:00:00'
),
(
  'Telecommunications Network Expansion - Ethio Telecom',
  'Ethio Telecom',
  800000.00,
  1500.00,
  '4G/5G network expansion to 50 rural towns. Includes base stations, transmission equipment, and fiber optic cables. Grade 1 telecom contractor required.',
  'National (All Regions)',
  '2025-10-15 09:00:00',
  '2025-12-20 17:00:00',
  1,
  '2025-10-10 08:00:00',
  '2025-10-10 08:00:00'
),
(
  'Security Systems Installation for Bole International Airport',
  'Ethiopian Airports Enterprise',
  450000.00,
  950.00,
  'Installation of advanced security scanners, CCTV systems, and access control systems. Must meet international aviation security standards.',
  'Addis Ababa',
  '2025-11-10 10:00:00',
  '2025-12-31 15:00:00',
  1,
  '2025-11-05 09:00:00',
  '2025-11-05 09:00:00'
);

-- ============================================
-- ADDITIONAL OPEN BIDS (Closing Soon)
-- ============================================

INSERT INTO Bids (tender_name, company_name, bid_bond_amount, document_price, additional_notes, region, bid_opening_date, bid_closing_date, staffId, createdAt, updatedAt) VALUES
(
  'Emergency Food Supply for Drought-Affected Areas',
  'Ethiopian Disaster Risk Management Commission',
  150000.00,
  400.00,
  'URGENT: Supply of emergency food packages (wheat, oil, beans) for 100,000 families. Delivery within 30 days. Bidders must have warehousing capacity.',
  'Somali Region',
  '2026-01-16 08:00:00',
  '2026-01-22 17:00:00',
  1,
  NOW(),
  NOW()
),
(
  'Public Transport Bus Fleet Modernization - Addis Ababa',
  'Addis Ababa Transport Authority',
  700000.00,
  1100.00,
  'Purchase of 300 modern city buses (air-conditioned, wheelchair accessible). Must meet Euro 5 emission standards. Training for drivers included.',
  'Addis Ababa',
  '2026-01-18 09:00:00',
  '2026-01-25 16:00:00',
  1,
  NOW(),
  NOW()
),
(
  'Construction of Waste Management Facility',
  'Addis Ababa Sanitation Service',
  550000.00,
  850.00,
  'Design and construction of modern waste management and recycling facility. Capacity: 500 tons/day. Includes waste-to-energy plant.',
  'Addis Ababa',
  NULL,
  '2026-01-28 15:00:00',
  1,
  NOW(),
  NOW()
);

-- ============================================
-- Summary:
-- - 8 OPEN bids (closing dates in the future)
-- - 7 CLOSED bids (closing dates in the past)
-- - 3 CLOSING SOON bids (within 2 weeks)
-- Total: 18 sample bids
-- ============================================

-- To verify the data after insertion:
-- SELECT tender_name, company_name, region, bid_closing_date, 
--        CASE 
--          WHEN bid_closing_date > NOW() THEN 'OPEN' 
--          ELSE 'CLOSED' 
--        END AS status
-- FROM Bids
-- ORDER BY bid_closing_date DESC;
