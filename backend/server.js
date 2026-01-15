const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 5002;

app.use(cors());
app.use(express.json());

// ------------------ HEALTH ------------------
app.get("/", (req, res) => {
  res.send("Aurora 2.0 Backend running");
});

// ------------------ SAFE GEOJSON LOADER ------------------
const sendGeoJSON = (file, res) => {
  const filePath = path.join(__dirname, "data", file);

  if (!fs.existsSync(filePath)) {
    return res.status(500).json({
      error: `${file} not found`
    });
  }

  try {
    const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
    res.json(data);
  } catch (err) {
    res.status(500).json({
      error: `${file} is invalid JSON`,
      details: err.message
    });
  }
};

// ------------------ ROUTES ------------------
app.get("/geo/mines", (req, res) => sendGeoJSON("mines.geojson", res));
app.get("/geo/nogo", (req, res) => sendGeoJSON("nogo.geojson", res));

app.get("/analysis/violations", (req, res) =>
  sendGeoJSON("violations.geojson", res)
);

app.get("/analysis/excavation", (req, res) =>
  sendGeoJSON("excavation.geojson", res)
);

app.get("/analysis/timeseries", (req, res) => {
  res.json([
    { date: "2024-01", area: 10 },
    { date: "2024-03", area: 18 },
    { date: "2024-06", area: 27 },
    { date: "2024-09", area: 35 },
    { date: "2024-12", area: 42 }
  ]);
});

app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});