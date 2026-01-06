Event-Driven Lead Scoring System

This project is an event-driven lead scoring system built using Node.js, Express, BullMQ, Redis, MongoDB Atlas, Socket.io, and React. User interaction events are sent to a backend API, queued using Redis, processed asynchronously by a worker, persisted in MongoDB, and broadcast to the frontend in real time using WebSockets. The frontend allows manual event triggering, displays the current score, and shows live event logs.

Commands to Run the Project Locally

1. Clone the repository
git clone <repository-url>
cd LeadZz

2. Backend setup
cd backend
npm install

Create a .env file inside the backend directory:
MONGO_URI=<your_mongodb_connection_string>

3. Start Redis using Docker
docker run -d --name redis-demo -p 6379:6379 redis
or
docker start redis-demo

4. Start the backend server
node src/server.js

5. Start the worker process (new terminal)
node src/workers/eventWorker.js

6. Frontend setup
cd ../frontend
npm install
npm run dev
