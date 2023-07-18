import React, { useEffect } from "react";
import "./About.scss";
import { IoMdDownload } from "react-icons/io";
import ProgressBar from "react-bootstrap/ProgressBar";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { squareVariants } from "../../varients";
const pdf = require("../../assests/Resume/Front_end_Developer.pdf");

export default function About() {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  return (
    <motion.div
      id="about"
      variants={squareVariants}
      animate={controls}
      ref={ref}
      initial="hidden"
    >
      <div className="about-text">
        <h1 className="header">
          <span style={{ color: "#6ff4a5" }}>01.</span> About Me
        </h1>
      </div>
      <div className="container container-about">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 col-about">
            <h1>
              Hello,
              <br />
              World.
            </h1>
          </div>
          <div
            className="col-lg-6 col-md-6 col-sm-12 about2"
            // style={{ border: "1px solid yellow" }}
          >
            <div className="img-text">
              <h1>
                Hello! I'm <span style={{ color: "#6ff4a5" }}>Simpa</span>
                <br />
                Emmanuel
              </h1>
              <p>
                I'm a Frontend Developer & freelance web developer with over 3+
                years of expreiences in wide range of design and development
                disciplines. I'm passionate about music, technology and
                basically everything that lives on the internet. <br />
                <br />
                My work currently consists of a full time engineering role at
                Aipalbot Nigeria where we build software and also carry out
                mentorship program I find this balancing act to be super
                resourceful in terms of my learning as a frontend developer, as
                well as keeping up with the rapid expansion of developer tools,
                libraries, frameworks, etc.
                <br />
                <br /> Whether you're a business owner looking to get started on
                a app or web development project with a freelance web developer,
                a developer looking to collaborate on something cool, or just
                wanting to say hi, shoot me a message and let's work together.
              </p>
              <section className="skills">
                <h3>Skills</h3>
                <div>
                  <div className="skill-span">
                    <span>HTML</span>
                    <span>100%</span>
                  </div>

                  <ProgressBar
                    className="progress progress-sm"
                    variant="success"
                    now={100}
                    label={`${100}%`}
                    visuallyHidden
                  />
                </div>
                <div>
                  <div className="skill-span">
                    <span>CSS3</span>
                    <span>80%</span>
                  </div>

                  <ProgressBar
                    className="progress progress-sm"
                    variant="success"
                    now={80}
                    label={`${80}%`}
                    visuallyHidden
                  />
                </div>
                <div>
                  <div className="skill-span">
                    <span>Bootstrap</span>
                    <span>80%</span>
                  </div>

                  <ProgressBar
                    className="progress progress-sm"
                    variant="success"
                    now={80}
                    label={`${80}%`}
                    visuallyHidden
                  />
                </div>
                <div>
                  <div className="skill-span">
                    <span>Javascript</span>
                    <span>80%</span>
                  </div>

                  <ProgressBar
                    className="progress progress-sm"
                    variant="success"
                    now={80}
                    label={`${80}%`}
                    visuallyHidden
                  />
                </div>
                <div>
                  <div className="skill-span">
                    <span>React</span>
                    <span>75%</span>
                  </div>

                  <ProgressBar
                    className="progress progress-sm"
                    variant="success"
                    now={75}
                    label={`${77}%`}
                    visuallyHidden
                  />
                </div>
                <div>
                  <div className="skill-span">
                    <span>Typescript</span>
                    <span>70%</span>
                  </div>

                  <ProgressBar
                    className="progress progress-sm"
                    variant="success"
                    now={70}
                    label={`${70}%`}
                    visuallyHidden
                  />
                </div>
                <div>
                  <div className="skill-span">
                    <span>Redux</span>
                    <span>60%</span>
                  </div>

                  <ProgressBar
                    className="progress progress-sm"
                    variant="success"
                    now={60}
                    label={`${60}%`}
                    visuallyHidden
                  />
                </div>
                <div>
                  <div className="skill-span">
                    <span>Nodejs</span>
                    <span>70</span>
                  </div>

                  <ProgressBar
                    className="progress progress-sm"
                    variant="success"
                    now={70}
                    label={`${70}%`}
                    visuallyHidden
                  />
                </div>
              </section>
              <div className="about-button">
                <button type="button" className="btn btn-success">
                  <a href="https://github.com/simpa007?tab=repositories">
                    VIEW WORK
                  </a>
                </button>

                <button type="button" className="btn btn-outline-success ">
                  <a href={pdf} download>
                    DOWNLOAD CV <IoMdDownload />
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
