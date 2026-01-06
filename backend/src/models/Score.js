const mongoose = require("mongoose");

const scoreSchema = new mongoose.Schema({
  totalScore: {
    type: Number,
    default: 0
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Score", scoreSchema);
