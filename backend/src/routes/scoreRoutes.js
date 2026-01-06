const express = require("express");
const router = express.Router();
const controller = require("../controllers/scoreController");

router.get("/score", controller.getScore);

module.exports = router;
