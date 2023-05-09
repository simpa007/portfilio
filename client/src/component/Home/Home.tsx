import React from "react";

import "./Home.scss";
const logo = require("../../img/undraw-bgremove.png");
const react = require("../../img/physics.png");
const nodejs = require("../../img/nodejs.png");
const python = require("../../img/python.png");
export default function Home() {
  return (
    <div id="home">
      <div className="container container-home">
        <div className="row row-home">
          <div
            className="col-md-6 col-sm-12 col-home"
            // style={{ border: "2px solid red" }}
          >
            <div className="home-body">
              <button
                type="button"
                style={{
                  outline: "none",
                  color: "#fff",
                  // borderColor: "#6ff4a5",
                }}
                className="btn btn-outline-success btn-lg"
              >
                Front-End Developer
              </button>
              <h1 className="home-text">
                Talk is Cheap.
                <br />
                Show me the code.
              </h1>
              <p className="home-subtext">
                I design and code beautifully simple things.
                <br />
                and I love what I do.
              </p>
              <p className="connect">
                <a href="https://wa.me/08073696557">LET'S CHAT!</a>
              </p>
            </div>

            <div className="experience">
              <h1>
                3<sup>+</sup>
              </h1>
              <span>
                YEARS
                <br /> EXPERIENCE
              </span>
            </div>
          </div>

          <div
            className="col-md-6 col-sm-12 home2"
            // style={{ border: "2px solid red" }}
          >
            <div className="dev-icon">
              <div>
                <img src={logo} alt="logo" className="logo" />
              </div>
              <div>
                <img src={python} alt="python" className="python" width={50} />
                <img src={react} alt="react" className="react" width={50} />
                <img src={nodejs} alt="nodejs" className="nodejs" width={50} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
