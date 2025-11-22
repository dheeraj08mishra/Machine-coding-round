import React, { useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import "../App.css";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const dropdownRef = useRef(null);

  return (
    <nav className="navbar">
      <h2 className="logo">MyApp</h2>

      {/* Hamburger Icon */}
      <div className="hamburger" onClick={() => setOpen(!open)}>
        <div className={open ? "bar rotate1" : "bar"}></div>
        <div className={open ? "bar fade" : "bar"}></div>
        <div className={open ? "bar rotate2" : "bar"}></div>
      </div>

      <div className={`nav-links ${open ? "open" : ""}`}>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search..."
          className="search-bar"
        />
        <NavLink to="/" className="nav-item" onClick={() => setOpen(false)}>
          Home
        </NavLink>

        <NavLink
          to="/about"
          className="nav-item"
          onClick={() => setOpen(false)}
        >
          About
        </NavLink>

        <div
          to="/contact"
          className="nav-item"
          ref={dropdownRef}
          onClick={() => setDropdownOpen(!dropdownOpen)}
        >
          Contact ▼
          {dropdownOpen && (
            <ul>
              <li
                onClick={() => console.log("Email Clicked")}
                className="dropdown-item"
              >
                Email
              </li>
              <li
                onClick={() => console.log("Phone Clicked")}
                className="dropdown-item"
              >
                Phone
              </li>
              <li
                onClick={() => console.log("Address Clicked")}
                className="dropdown-item"
              >
                Address
              </li>
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
