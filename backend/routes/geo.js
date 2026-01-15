const express = require("express");
const fs = require("fs");
const path = require("path");

const router = express.Router();

router.get("/mines", (req, res) => {
  const mines = JSON.parse(
    fs.readFileSync(path.join(__dirname, "../data/mines.geojson"))
  );
  res.json(mines);
});

router.get("/nogo", (req, res) => {
  const nogo = JSON.parse(
    fs.readFileSync(path.join(__dirname, "../data/nogo.geojson"))
  );
  res.json(nogo);
});

module.exports = router;