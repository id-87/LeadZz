const { QueueScheduler } = require("bullmq");
const connection = require("../config/redis");

new QueueScheduler("event-queue", { connection });
