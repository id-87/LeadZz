const Score = require("../models/Score");

exports.getScore = async (req, res) => {
    console.log("📦 DB name:", Score.db.name);
  console.log("📂 Collection:", Score.collection.name);
  const scoreDoc = await Score.findOne();
console.log("📄 Score doc:", scoreDoc);
  if (!scoreDoc) {
    return res.json({ totalScore: 0 });
  }

  res.json({ totalScore: scoreDoc.totalScore });
};
