import React, { useState } from "react";
import "./Navbar.scss";
import { HashLink } from "react-router-hash-link";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
const hamburger = require("../logo/icons8-hamburger-menu-64.png");
function Navbar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  const handleExpanded = () => {
    setIsNavExpanded(!isNavExpanded);
  };
  return (
    <div className="container">
      <nav>
        <input type="checkbox" id="check" />
        <label htmlFor="check" className="checkbtn">
          <i
            className="fa-solid fa-bars fa-beat"
            style={{ color: "#6eeca7" }}
          ></i>
        </label>
        <label
          className="logo"
          style={{ fontFamily: "Playfair Display", fontWeight: "500px" }}
        >
          Simpa
        </label>
        <ul>
          <li>
            <HashLink smooth to="/#" className="link-list">
              Home
            </HashLink>
          </li>
          <li>
            <HashLink smooth to="/#about" className="link-list">
              About
            </HashLink>
          </li>
          <li>
            <HashLink smooth to="/#services" className="link-list">
              Services
            </HashLink>
          </li>
          <li>
            <HashLink smooth to="/#projects" className="link-list">
              Projects
            </HashLink>
          </li>
          <li>
            <HashLink smooth to="/#contact" className="link-list">
              Contact
            </HashLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
