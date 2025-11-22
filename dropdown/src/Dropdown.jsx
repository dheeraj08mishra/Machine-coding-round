import React, { useState, useRef, useEffect } from "react";

const Dropdown = ({ items, checkboxStates, setCheckboxStates }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const [indexHovered, setIndexHovered] = useState(-1);

  const handleSelect = (idx) => {
    const updated = checkboxStates.map((state, index) => {
      return index === idx ? !state : state;
    });
    setCheckboxStates(updated);
    // onSelect(item);
    setIsOpen(false); // close after select
    if (indexHovered === -1) {
      setIndexHovered(0);
    }
  };
  const openDropDown = () => {
    setIsOpen(true);
    if (indexHovered === -1) {
      setIndexHovered(0);
    }
  };

  //   useEffect(() => {
  //     const handleClickOutside = (event) => {
  //       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
  //         setIsOpen(false);
  //         setIndexHovered(-1);
  //       }
  //     };

  //     document.addEventListener("mousedown", handleClickOutside);
  //     return () => {
  //       document.removeEventListener("mousedown", handleClickOutside);
  //     };
  //   }, []);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (isOpen) {
        if (event.key === "Escape") {
          setIsOpen(false);
          setIndexHovered(-1);
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const selectedItems = items.filter((_, idx) => checkboxStates[idx]);
  const label =
    selectedItems.length > 0 ? selectedItems.join(", ") : "Select options";

  return (
    <div
      ref={dropdownRef}
      style={{ position: "relative", display: "inline-block" }}
    >
      <button onClick={() => openDropDown()}>{label}</button>

      {/* Dropdown Menu */}

      <ul>
        {items.map((item, idx) => (
          <li key={idx} onClick={() => handleSelect(idx)}>
            <input
              type="checkbox"
              readOnly
              checked={checkboxStates[idx] || false}
            />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;
