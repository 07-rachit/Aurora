🌌 Aurora 2.0 – Beyond the Horizon

AI-Powered Mining Activity Monitoring using Sentinel-2 & Geospatial Intelligence

⸻

📌 Overview

Aurora 2.0 is an intelligent geospatial monitoring platform designed to detect, analyze, and regulate mining activities using multispectral satellite imagery and AI-driven time-series analysis.

The system leverages Sentinel-2 satellite data, adaptive machine learning, and geospatial boundary intelligence to:
	•	Monitor excavation progression
	•	Detect illegal encroachment into no-go zones
	•	Quantify excavation growth over time
	•	Provide clear, actionable analytics for regulators

This solution is developed as part of the AURORA 2.0 Hackathon in collaboration with VEDAS & SAC–ISRO.

⸻

🎯 Problem Statement

Traditional mining monitoring approaches suffer from:
	•	Manual inspections and delayed reporting
	•	Fixed thresholds that fail across different terrains and seasons
	•	Inability to distinguish natural land-cover change from excavation
	•	Lack of real-time, scalable enforcement tools

Aurora 2.0 addresses these gaps with a data-adaptive, mine-agnostic, and scalable monitoring system.

⸻

🚀 Key Features

🧠 Adaptive AI-Based Excavation Detection
	•	Learns mine-specific excavation signatures automatically
	•	No hard-coded thresholds
	•	Robust to seasonal vegetation changes

⚠️ No-Go Zone Violation Detection
	•	Detects encroachment into protected zones (forests, water bodies, habitations)
	•	Highlights violations directly on the map
	•	Enables early-stage enforcement

📈 Time-Series Mining Analytics
	•	Tracks cumulative excavation growth over time
	•	Computes excavation rate (ha/month)
	•	Filters out seasonal and transient noise

🌍 Interactive Geospatial Dashboard
	•	India-wide map visualization
	•	Layer toggles (mines, excavation, violations)
	•	Analytics dashboard with KPIs and charts

⸻

🧩 System Architecture

High-Level Pipeline:
	1.	Data Ingestion
	•	Sentinel-2 Level-2A multispectral imagery
	•	Legal mine boundaries (GeoJSON)
	•	No-go zone boundaries (GeoJSON)
	2.	Pre-Processing
	•	Cloud and shadow masking
	•	Radiometric normalization
	•	AOI clipping
	3.	Feature Engineering
	•	Spectral indices (NDVI, SWIR-based indices)
	•	Temporal smoothing
	•	Spectral-temporal fusion
	4.	Adaptive Learning
	•	Unsupervised clustering & anomaly detection
	•	Time-series change analysis
	•	Mine-specific adaptation
	5.	Detection & Analytics
	•	Excavation masks
	•	Area quantification
	•	Violation detection
	6.	Visualization
	•	Web-based interactive dashboard
	•	Analytics KPIs & charts

⸻

🛠️ Tech Stack

Frontend
	•	React (18)
	•	React Router
	•	Leaflet & React-Leaflet
	•	Axios
	•	Custom SVG analytics charts

Backend
	•	Node.js
	•	Express.js
	•	REST APIs
	•	Python ML integration (via child processes)

ML & Geospatial
	•	Sentinel-2 multispectral data
	•	Spectral indices (NDVI, SWIR)
	•	Time-series analysis
	•	Unsupervised ML techniques

⸻

📊 Analytics Dashboard (Highlights)
	•	Total Mines Detected
	•	Total Excavated Area (ha)
	•	No-Go Zone Violations
	•	Excavation Rate (ha/month)
	•	Excavation Growth Over Time (Line Chart)

Designed for clarity, interpretability, and regulatory decision-making.
🧪 Current Status
	•	✔ Frontend dashboard fully functional
	•	✔ Interactive map & analytics
	•	✔ Mock data integrated for demo
	•	🔄 Backend APIs ready for real data integration
	•	🔄 ML models extensible for further training

⸻

🌱 Future Scope
	•	Integration with live Sentinel-2 data via Google Earth Engine
	•	Automated alert notifications
	•	PDF/CSV compliance report generation
	•	UAV + satellite data fusion
	•	Nationwide deployment on platforms like VEDAS

⸻

🏆 Impact & Relevance

Aurora 2.0 enables:
	•	Responsible mining
	•	Environmental protection
	•	Data-driven governance
	•	Scalable, real-time enforcement

This solution aligns directly with India’s sustainable development goals and modern geospatial surveillance needs.

⸻

✨ Team & Hackathon

Developed for AURORA 2.0 – Beyond the Horizon Hackathon
In collaboration with VEDAS | SAC–ISRO | IIT Dharwad
