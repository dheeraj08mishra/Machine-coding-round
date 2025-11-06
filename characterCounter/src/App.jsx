import { useState } from "react";
import "./App.css";

function App() {
  const [inputValue, setInputValue] = useState(50);
  const [textAreaValue, setTextAreaValue] = useState("");
  const [warning, setWarning] = useState("");

  const updateCount = (e) => {
    setTextAreaValue(e.target.value);
    if (e.target.value.length > inputValue) {
      setWarning(
        `Limit exceeded by ${e.target.value.length - inputValue} characters`
      );
    } else if (
      e.target.value.length > inputValue * 0.95 ||
      e.target.value.length === inputValue
    ) {
      setWarning("you are close to the limit!");
    } else {
      setWarning("");
    }
  };

  return (
    <>
      <div>
        <h1>Character Counter</h1>
        <div>
          <label>Enter a number (0-1000): </label>
          <input
            type="number"
            min={0}
            max={1000}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </div>
        <div>
          <label>Text Area (max {inputValue} characters): </label>

          <textarea
            className="text"
            placeholder="Start Typing"
            data-testid="textarea"
            onChange={updateCount}
          ></textarea>
        </div>
        <div>
          <h2>
            Character Count: {textAreaValue.length}/{inputValue}
          </h2>
          <p>{warning}</p>
        </div>
      </div>
    </>
  );
}

export default App;
