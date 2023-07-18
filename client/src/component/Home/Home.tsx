import React, { useState, useEffect } from "react";
import { motion, easeInOut } from "framer-motion";
import "./Home.scss";
const logo = require("../../img/bgremove.png");
const react = require("../../img/physics.png");
const nodejs = require("../../img/nodejs.png");
const python = require("../../img/python.png");
const wordpress = require("../../img/wordpress.png");
export default function Home() {
  const [text, setText] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const randomText = getRadomText();
      setText(randomText);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const getRadomText = () => {
    const texts = [
      "Web Developer",
      "Front-end Developer",
      "Full-Stack Developer",
    ];
    let randomIndex = Math.floor(Math.random() * texts.length);
    return texts[randomIndex];
  };
  return (
    <div id="home">
      <div className="container container-home">
        <div className="row row-home">
          <motion.div
            className="col-md-6 col-sm-12 col-home"
            initial={{ y: "100vh" }}
            animate={{ y: 0 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
          >
            <div className="home-body">
              <h1 className="header">
                I'm a{" "}
                <motion.span
                  style={{ color: "#6ff4a5" }}
                  initial={{ x: -100, opacity: 0 }}
                  animate={{
                    x: 0,
                    opacity: 1,
                    transition: { duration: 0.2, ease: easeInOut },
                  }}
                  exit={{
                    x: -100,
                    opacity: 0,
                    transition: { duration: 0.2, ease: easeInOut },
                  }}
                >
                  {text}
                </motion.span>
              </h1>

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
          </motion.div>

          <motion.div
            className="col-md-6 col-sm-12 home2"
            // style={{ border: "2px solid red" }}
            initial={{ y: "-100vh" }}
            animate={{ y: 0 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
          >
            <div className="dev-icon">
              <div>
                <img src={logo} alt="logo" className="logo" />
              </div>
              <div>
                <img src={python} alt="python" className="python" width={50} />
                <img src={react} alt="react" className="react" width={50} />
                <img src={nodejs} alt="nodejs" className="nodejs" width={50} />
                <img
                  src={wordpress}
                  alt="wordpress"
                  className="wordpress"
                  width={50}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
