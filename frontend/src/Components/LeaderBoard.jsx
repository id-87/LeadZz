import React, { useEffect, useState } from "react";
import axios from "axios";

const LeaderBoard = () => {
  const [score, setScore] = useState(0);

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/score")
      .then(res => {
        setScore(res.data.totalScore);
      })
      .catch(err => {
        console.error("Error fetching score", err);
      });
  }, []);

  return (
    <div>
      <h1>Leaderboard</h1>
      <h2>Total Score: {score}</h2>
    </div>
  );
};

export default LeaderBoard;
