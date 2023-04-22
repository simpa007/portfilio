import React from "react";
import "./About.scss";
import { IoMdDownload } from "react-icons/io";
import ProgressBar from "react-bootstrap/ProgressBar";
const pdf = require("../../assests/Resume/Front-End Developer.pdf");
// const profile = require("../../img/undraw_Pic_profile-removebg.png");
export default function About() {
  return (
    <div id="about">
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
                Non laboris consequat labore adipisicing dolore velit dolore
                deserunt velit eiusmod aute cupidatat occaecat proident. Amet
                laboris consectetur adipisicing eiusmod consequat veniam cillum
                nisi cillum cillum elit. Labore sunt qui magna veniam qui.
                Laborum adipisicing laborum commodo proident irure aliqua
                laborum. Incididunt proident fugiat deserunt id aute voluptate.
                Magna eu officia est incididunt eu culpa ullamco ipsum culpa
                excepteur proident irure aliqua laborum. Officia in adipisicing
                fugiat velit cupidatat fugiat velit aute dolore proident sunt ex
                occaecat.
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
    </div>
  );
}
