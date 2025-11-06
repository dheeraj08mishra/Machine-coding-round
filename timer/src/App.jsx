import { useState, useEffect } from "react";
import "./App.css";

function App() {
  console.log("App Rendered", new Date().toLocaleTimeString());
  const [second, setSecond] = useState(0);
  const [minute, setMinute] = useState(0);
  const [hour, setHour] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSecond((prevSecond) => prevSecond + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (second === 60) {
      setSecond(0);
      setMinute((prevMinute) => prevMinute + 1);
    }
    if (minute === 60) {
      setMinute(0);
      setHour((prevHour) => prevHour + 1);
    }
    if (hour === 24) {
      setHour(0);
    }
  }, [second, minute, hour]);

  return (
    <>
      <h1>Timer</h1>
      <div className="timer">
        <span>
          {String(hour).padStart(2, "0")}:{String(minute).padStart(2, "0")}:
          {String(second).padStart(2, "0")}
        </span>
      </div>
    </>
  );
}

export default App;
