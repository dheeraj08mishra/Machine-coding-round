import React, { useState } from "react";
import "./App.css";
import Dropdown from "./Dropdown.jsx";
const options = ["Option 1", "Option 2", "Option 3", "Option 4"];

import MultiSelectDropdown from "./MultiSelectDropdown.jsx";

function App() {
  // const [selectedOption, setSelectedOption] = useState(null);
  const [checkboxStates, setCheckboxStates] = useState(
    new Array(options.length).fill(false)
  );

  console.log("App Component Rendered");

  return (
    <div className="App">
      <h1>React Dropdwon Example</h1>
      <Dropdown
        items={options}
        checkboxStates={checkboxStates}
        setCheckboxStates={setCheckboxStates}
      />
      {/* {checkboxStates.map((state, index) =>
        state ? <p key={index}>{options[index]} is selected</p> : null
      )} */}
      <p>Selected: {options.filter((_, i) => checkboxStates[i]).join(", ")}</p>
      <hr />
      <MultiSelectDropdown />
    </div>
  );
}

export default App;
