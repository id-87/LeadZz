const { v4: uuidv4 } = require("uuid");
const eventQueue = require("../queues/eventQueue");

exports.createEvent = async (req, res) => {
  const { button } = req.body;

  const eventId = uuidv4();

  console.log("Inside event Controller-> ",button, eventId)

  await eventQueue.add(
    "button-click",
    { eventId, button, timestamp: new Date() },
    { jobId: eventId }
  );

  res.json({ success: true });
};
