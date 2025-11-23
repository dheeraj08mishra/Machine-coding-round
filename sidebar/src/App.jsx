import { useState } from "react";
import "./App.css";

function App() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <h2>Side Bar</h2>
      <button onClick={() => setOpen(!open)} className="navbar">
        ☰
      </button>
      <div className={`sidebar ${open ? "open" : ""}`}>
        {open && (
          <nav className="nav-menu">
            <ul className="nav-list">
              <li className="nav-item">Home</li>
              <li className="nav-item">About</li>
              <li className="nav-item">Contact</li>
              <li className="nav-item">Services</li>
            </ul>
          </nav>
        )}
      </div>
    </>
  );
}

export default App;
