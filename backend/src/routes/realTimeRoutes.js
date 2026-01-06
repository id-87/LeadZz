const express = require("express");
const router = express.Router();

router.post("/log", (req, res) => {
  console.log("📡 Realtime log received:", req.body);

  global.io.emit("score:log", req.body);

  res.json({ success: true });
});

module.exports = router;
