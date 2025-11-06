import React from "react";

const Child = ({ familyName, setFamilyName }) => {
  console.log("Child Component Rendered");
  return (
    <div style={{ border: "2px solid red", padding: 10 }}>
      <h4>Child Component</h4>
      <p> hello from. Family Name: {familyName}</p>
      <button onClick={() => setFamilyName("New Family Name from Child")}>
        Changed from Child
      </button>
    </div>
  );
};

export default Child;
