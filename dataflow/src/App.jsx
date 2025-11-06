import React, { useState } from "react";
import Parent from "./components/Parent.jsx";
import Uncle from "./components/Uncle.jsx";
import "./App.css";

function App() {
  console.log("App Component Rendered");
  const [familyName, setFamilyName] = useState("Mishra");
  return (
    <div style={{ border: "2px solid blue", padding: 10 }}>
      <h2>Grand Parent Component</h2>
      <h3>Family Name: {familyName}</h3>
      <Parent familyName={familyName} setFamilyName={setFamilyName} />
      <Uncle familyName={familyName} setFamilyName={setFamilyName} />
    </div>
  );
}

export default App;
