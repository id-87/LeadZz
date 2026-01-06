const mongoose = require("mongoose");

const EventSchema = new mongoose.Schema({
  eventId: { type: String, unique: true },
  eventType: String,
  timestamp: Date,
  source: String
});

module.exports = mongoose.model("Event", EventSchema);
