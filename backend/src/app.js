const express = require("express");
const eventRoutes = require("./routes/eventRoutes");
const scoreRoutes = require("./routes/scoreRoutes");
const realtimeRoutes = require("./routes/realTimeRoutes");
const cors=require('cors')

const app = express();
app.use(cors())
app.use(express.json());
app.use("/api", eventRoutes);
app.use("/api", scoreRoutes);
app.use("/api/realtime", realtimeRoutes);

module.exports = app;
