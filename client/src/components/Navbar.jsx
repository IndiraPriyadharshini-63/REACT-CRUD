import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Hamburger from "../assets/hamburger.svg";
import Brand from "../assets/logo.png";

import "../styles/Navbar.css";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

    const logOut = () => {
    alert("you logged out");
    window.localStorage.clear();
    window.location.href = "./login";
  };
  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
            <h1>Logo</h1>
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
        <i class="bi bi-list"></i>
          
        </div>
        <div className={`nav-elements  ${showNavbar && 'active'}`}>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/create">Add Tasks</NavLink>
            </li>
            <li>
              <NavLink to="/files">Files</NavLink>
            </li>
            <li>
              <NavLink to="/create-event">Events</NavLink>
            </li>
            <li>
              <NavLink to="/login" onClick={logOut}>Logout</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
