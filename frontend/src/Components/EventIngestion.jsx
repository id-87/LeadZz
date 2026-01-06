import React from "react";
import axios from "axios";

const EventIngestion = () => {
  const triggerEvent = async (buttonName) => {
    try {
      await axios.post("http://localhost:4000/api/event", {
        button: buttonName
      });
    } catch (err) {
      console.error("Failed to trigger event", err);
    }
  };

  return (
    <div>
      <h1>Trigger Events</h1>

      <button onClick={() => triggerEvent("Email Open")}>
        Email Open
      </button>

      <button onClick={() => triggerEvent("Page View")}>
        Page View
      </button>

      <button onClick={() => triggerEvent("Form Submission")}>
        Form Submission
      </button>

      <button onClick={() => triggerEvent("Demo request")}>
        Demo request
      </button>

      <button onClick={() => triggerEvent("Purchase")}>
        Purchase
      </button>
    </div>
  );
};

export default EventIngestion;
