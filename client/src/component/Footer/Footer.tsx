import React from "react";
import { HashLink } from "react-router-hash-link";
import "./Footer.scss";
function Footer() {
  return (
    <div className="container-fluid" style={{ borderTop: "2px solid #6eeca7" }}>
      <div className="container footer-container">
        <p>
          Copyright 2023 &#169; All Right Reserved Design by <span>Simpa</span>
        </p>
      </div>
    </div>
  );
}

export default Footer;
