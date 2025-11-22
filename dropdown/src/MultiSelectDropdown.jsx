import React, { useState } from "react";
// import "./styles.css";
const options = [
  "option 1",
  "option 2",
  "option 3",
  "option 4",
  "option 5",
  "option 6",
  "option 7",
  "option 8",
  "option 9",
  "option 10",
];

function MultiSelectDropdown() {
  const [selectedOptions, setSelectedOptions] = useState(
    new Array(10).fill(false)
  );
  const [selectedValues, setSelectedValues] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (idx) => {
    const updated = selectedOptions.map((state, index) => {
      return index === idx ? !state : state;
    });
    setSelectedOptions(updated);
    // onSelect(item);
    // setIsOpen(false); // close after select
    // if (indexHovered === -1) {
    //   setIndexHovered(0);
    // }
  };

  const handleSubmit = () => {
    const selected = options.filter((_, idx) => selectedOptions[idx]);
    setSelectedValues(selected);
    console.log("Selected Values: ", selected);
  };

  const resetSelection = () => {
    setSelectedOptions(new Array(10).fill(false));
    setSelectedValues([]);
  };
  return (
    <div className="dropdown-container">
      <h2 className="dropdown-title">Multiselect Dropdown Menu</h2>
      <label className="dropdown-label">Select Options:</label>
      <div className="dropdown-wrapper">
        <button onClick={() => setIsOpen(!isOpen)} className="dropdown-toggle">
          <span className="dropdown-icon">Icon</span>
          <span className="dropdown-button-label">Choose Options</span>
        </button>
        {isOpen && (
          <ul className="dropdown-menu">
            <li onClick={() => resetSelection(null)} className="dropdown-reset">
              Reset Selection
            </li>
            {options.map((item, index) => (
              <li key={index} className="dropdown-option">
                <input
                  checked={selectedOptions[index]}
                  type="checkbox"
                  onChange={() => handleSelect(index)}
                />
                <span className="option-label">Option {index + 1} </span>
              </li>
            ))}
          </ul>
        )}
      </div>

      <button onClick={() => handleSubmit()} className="submit-button">
        Submit
      </button>
      <div className="result-area">
        <h3>Selected Options: {selectedValues.join(", ")}</h3>
      </div>
    </div>
  );
}

export default MultiSelectDropdown;
