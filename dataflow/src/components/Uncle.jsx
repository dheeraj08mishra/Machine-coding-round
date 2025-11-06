import React from "react";

const Uncle = ({ familyName, setFamilyName }) => {
  console.log("Uncle Component Rendered");
  return (
    <div>
      <h4>Uncle Component</h4>
      <p> hello from. Family Name: {familyName}</p>
      <button onClick={() => setFamilyName("New Family Name from Uncle")}>
        Changed from Uncle
      </button>
    </div>
  );
};

export default Uncle;
