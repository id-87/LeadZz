require("dotenv").config();
const PORT=process.env.PORT
const http = require("http");
const app = require("./app");
const connectDB = require("./config/db");

const server = http.createServer(app);

const { Server } = require("socket.io");

const io = new Server(server, {
  cors: {
    origin: "*"
  }
});


global.io = io;

connectDB();

io.on("connection", socket => {
  console.log("Client connected:", socket.id);
});


server.listen(PORT, () => {
  console.log("Server running on port 4000");
});