import React from "react";
import Child from "./Child.jsx";

const Parent = ({ familyName, setFamilyName }) => {
  console.log("Parent Component Rendered");
  return (
    <div style={{ border: "2px solid green", padding: 10 }}>
      <h2>Parent Component</h2>
      <h3>Family Name: {familyName}</h3>
      <button onClick={() => setFamilyName("New Family Name")}>
        Change Family Name
      </button>
      <Child familyName={familyName} setFamilyName={setFamilyName} />
    </div>
  );
};

export default Parent;
