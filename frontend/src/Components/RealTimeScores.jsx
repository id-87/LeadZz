import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:4000");

const RealTimeScores = () => {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    socket.on("score:log", data => {
      setLogs(prev => [data, ...prev]);
    });

    return () => {
      socket.off("score:log");
    };
  }, []);

  return (
    <div>
      <h1>Real Time Scores</h1>

      {logs.length === 0 && <p>No events yet</p>}

      <ul>
        {logs.map((log, index) => (
          <li key={index}>
            <strong>{log.button}</strong> → +{log.addedPoints} points  
            (Total: {log.totalScore})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RealTimeScores;
