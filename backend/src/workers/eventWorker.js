const { Worker } = require("bullmq");
const connection = require("../config/redis");
const connectDB = require("../config/db");
const Score = require("../models/Score");
const axios=require('axios')



connectDB();


const pointsMap = {
  "Email Open": 10,
  "Page View": 5,
  "Form Submission": 20,
  "Demo request": 50,
  "Purchase": 100
};

new Worker(
  "event-queue",
  async job => {
    const { button } = job.data;
    console.log("Processing event:", button);

    const points = pointsMap[button] || 0;

    
    let scoreDoc = await Score.findOne();

    if (!scoreDoc) {
      scoreDoc = await Score.create({ totalScore: points });
    } else {
      scoreDoc.totalScore += points;
      scoreDoc.updatedAt = new Date();
      await scoreDoc.save();
    }
    console.log("Score updated:", scoreDoc.totalScore);
    await axios.post("http://localhost:4000/api/realtime/log", {
  button,
  addedPoints: points,
  totalScore: scoreDoc.totalScore,
  timestamp: new Date()
});




    console.log("Score updated:", scoreDoc.totalScore);
  },
  { connection }
);
