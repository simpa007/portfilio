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
    // <div className="container-fluid container1">
    //   <div className="brand-name">
    //     <h6>Simpa</h6>
    //   </div>
    //   <p className="hamburger" onClick={handleExpanded}>
    //     <img src={hamburger} alt="hamburger" />
    //   </p>

    //   <nav className={isNavExpanded ? "nav-details expanded" : "nav-details"}>
    //     <ul>
    // <li>
    //   <HashLink smooth to="/#" className="link-list">
    //     Home
    //   </HashLink>
    // </li>
    //       <li>
    //         <HashLink smooth to="/#about" className="link-list">
    //           About
    //         </HashLink>
    //       </li>
    //       <li>
    //         <HashLink smooth to="/#services" className="link-list">
    //           Services
    //         </HashLink>
    //       </li>
    //       <li>
    //         <HashLink smooth to="/#projects" className="link-list">
    //           Projects
    //         </HashLink>
    //       </li>
    //       <li>
    //         <HashLink smooth to="/#contact" className="link-list">
    //           Contact
    //         </HashLink>
    //       </li>
    //     </ul>
    //   </nav>

    //   <div className="social-handles">
    //     <span>
    //       <a href="">
    //         <BsFacebook color="#fff" />
    //       </a>
    //     </span>
    //     <span>
    //       <a href="">
    //         <BsGithub color="#fff" />
    //       </a>
    //     </span>
    //     <span>
    //       <a href="">
    //         <BsLinkedin color="#fff" />
    //       </a>
    //     </span>
    //   </div>
    // </div>
    <div className="container">
      <nav>
        <input type="checkbox" id="check" />
        <label htmlFor="check" className="checkbtn">
          <i
            className="fa-solid fa-bars fa-beat"
            style={{ color: "#6eeca7" }}
          ></i>
        </label>
        <label className="logo">Simpa</label>
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
