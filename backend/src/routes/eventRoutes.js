const express = require("express");
const router = express.Router();
const controller = require("../controllers/eventController");

router.post("/event", controller.createEvent);

module.exports = router;
