import React, { useState } from "react";
import "./Navbar.scss";
import { HashLink } from "react-router-hash-link";
const hamburger = require("../logo/icons8-hamburger-menu-64.png");
function Navbar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  // const handleExpanded = () => {
  //   setIsNavExpanded(!isNavExpanded);
  // };
  return (
    <nav className="navbar navbar-expand-lg  navbar-dark navbar-1">
      <div className="container">
        <a className="navbar-brand logo" href="#">
          Simpa
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i
            className="fa-solid fa-bars fa-beat"
            style={{ color: "#6eeca7" }}
          ></i>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNavDropdown"
        >
          <ul className="navbar-nav">
            <li className="nav-item mx-3">
              <HashLink smooth to="/#" className="nav-link">
                Home
              </HashLink>
            </li>
            <li className="nav-item mx-3">
              <HashLink smooth to="/#about" className="nav-link">
                About
              </HashLink>
            </li>
            <li className="nav-item mx-3">
              <HashLink smooth to="/#services" className="nav-link">
                Services
              </HashLink>
            </li>

            <li className="nav-item mx-3">
              <HashLink smooth to="/#projects" className="nav-link">
                Projects
              </HashLink>
            </li>
            <li className="nav-item mx-3">
              <HashLink smooth to="/#contact" className="nav-link">
                Contact
              </HashLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
