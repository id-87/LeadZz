const { Queue } = require("bullmq");
const IORedis = require("ioredis");

const connection = new IORedis();

const eventQueue = new Queue("event-queue", {
  connection
});

module.exports = eventQueue;
