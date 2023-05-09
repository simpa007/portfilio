import React from "react";
import "./Projects.scss";
import { url } from "inspector";
const netflix = require("../../img/netflix.PNG");
const portfilio = require("../../img/portfilio.PNG");
const faceRecongnition = require("../../img/face-recongnition.PNG");
const ecommerce = require("../../img/ecommerce.PNG");
export default function Projects() {
  const style1 = {
    border: " solid #3ecd5e ",
    padding: "10px",
    backgroundImage: `url(${netflix})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };
  const style2 = {
    border: " solid #e44002 ",
    padding: "10px",
    backgroundImage: `url(${faceRecongnition})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };
  const style3 = {
    border: " solid #952aff ",
    padding: "10px",
    backgroundImage: `url(${ecommerce})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };
  const style4 = {
    border: " solid #cd3e94 ",
    padding: "10px",
    backgroundImage: `url(${portfilio})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };
  return (
    <>
      <div id="projects" className="projects-text">
        <h1 className="header">
          <span style={{ color: "#6ff4a5" }}>03.</span> Projects
        </h1>
      </div>
      <div className="container">
        {/* first row */}
        <div className="row projects-row">
          <div
            className="col-lg-6 col-md-12 col-sm-12 projects-col"
            style={style1}
          ></div>
          <div className="col-lg-6 col-md-12 col-sm-12">
            <div className="projects-container ">
              <div className="projects-body">
                <h1 className="projects-header">A Netflix Clone </h1>
                <p className="projects-desc">A netflix clone</p>
                <p className="projects-tools">
                  Built with: React, themoviedb API, Firebase, netlify for
                  hosting.
                </p>
              </div>
              <div className="button">
                <button
                  type="button"
                  className="btn"
                  style={{ backgroundColor: "#3ecd5e", color: "#fff" }}
                >
                  <a href="https://mynextflix.netlify.app/">View Website</a>
                </button>

                <button
                  type="button"
                  className="btn btn-outline"
                  style={{ borderColor: "#3ecd5e", color: "#fff" }}
                >
                  <a href="https://github.com/simpa007/Netflix-Clone">
                    View Code
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* second row */}
        <div className="row projects-row">
          <div className="col-lg-6 col-md-12 col-sm-12 order1">
            <div className="projects-container">
              <div className="projects-body">
                <h1 className="projects-header">A Face Detection App</h1>
                <p className="projects-desc">
                  it detect faces on images and update the number of entries
                  entered by a user.
                </p>
                <p className="projects-tools">
                  Built with: React, Node, PostgresDB
                </p>
              </div>
              <div className="button">
                <button
                  type="button"
                  className="btn"
                  style={{ backgroundColor: "#e44002", color: "#fff" }}
                >
                  View Website
                </button>

                <button
                  type="button"
                  className="btn btn-outline"
                  style={{ borderColor: "#e44002", color: "#fff" }}
                >
                  View Code
                </button>
              </div>
            </div>
          </div>
          <div
            className="col-lg-6 col-md-12 col-sm-12 projects-col order2"
            style={style2}
          ></div>
        </div>
        {/* third row */}
        <div className="row projects-row">
          <div
            className="col-lg-6 col-md-12 col-sm-12 projects-col"
            style={style3}
          ></div>
          <div className="col-lg-6 col-md-12 col-sm-12">
            <div className="projects-container">
              <div className="projects-body">
                <h1 className="projects-header">Ecommerce App</h1>
                <p className="projects-desc">
                  A web app for buying clothes item with a payment system
                  integrated.
                </p>
                <p className="projects-tools">
                  Built with: React, Typescript, Redux, Firebase
                </p>
              </div>
              <div className="button">
                <button
                  type="button"
                  className="btn"
                  style={{ backgroundColor: "#952aff", color: "#fff" }}
                >
                  View Website
                </button>

                <button
                  type="button"
                  className="btn btn-outline"
                  style={{ borderColor: "#952aff", color: "#fff" }}
                >
                  View Code
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* fourth row */}
        <div className="row projects-row">
          <div className="col-lg-6 col-md-12 col-sm-12 order3">
            <div className="projects-container">
              <div className="projects-body">
                <h1 className="projects-header">A Portfilio App</h1>
                <p className="projects-desc">portfilio app</p>
                <p className="projects-tools">
                  Built with: React, nodejs, mongoDB, render for hosting.
                </p>
              </div>
              <div className="button">
                <button
                  type="button"
                  className="btn"
                  style={{ backgroundColor: "#cd3e94", color: "#fff" }}
                >
                  View Website
                </button>

                <button
                  type="button"
                  className="btn btn-outline"
                  style={{ borderColor: "#cd3e94", color: "#fff" }}
                >
                  View Code
                </button>
              </div>
            </div>
          </div>
          <div
            className="col-lg-6 col-md-12 col-sm-12 projects-col order4"
            style={style4}
          ></div>
        </div>
      </div>
    </>
  );
}
