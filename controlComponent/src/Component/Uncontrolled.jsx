import React, { useRef } from "react";

const Uncontrolled = () => {
  const inputRef = useRef(null);
  const updateValue = () => {
    console.log("Input Value:", inputRef.current.value);
  };
  return (
    <div>
      Uncontrolled
      <input
        type="text"
        ref={inputRef}
        placeholder="Enter your name"
        onChange={updateValue}
      />
    </div>
  );
};

export default Uncontrolled;
