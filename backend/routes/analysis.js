const express = require("express");
const router = express.Router();

router.post("/run", (req, res) => {
  res.json({
    status: "Analysis triggered",
    message: "ML pipeline will run here"
  });
});

module.exports = router;