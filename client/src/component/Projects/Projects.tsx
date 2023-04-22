import React from "react";
import "./Projects.scss";
import Button from "react-bootstrap/Button";
export default function Projects() {
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
            style={{ backgroundColor: " #3ecd5e" }}
          ></div>
          <div className="col-lg-6 col-md-12 col-sm-12">
            <div className="projects-container ">
              <div className="projects-body">
                <h1 className="projects-header">Name of App</h1>
                <p className="projects-desc">project description</p>
                <p className="projects-tools">technologies used</p>
              </div>
              <div className="button">
                <button
                  type="button"
                  className="btn"
                  style={{ backgroundColor: "#3ecd5e", color: "#fff" }}
                >
                  View Website
                </button>

                <button
                  type="button"
                  className="btn btn-outline"
                  style={{ borderColor: "#3ecd5e", color: "#fff" }}
                >
                  View Code
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
                <h1 className="projects-header">Name of App</h1>
                <p className="projects-desc">project description</p>
                <p className="projects-tools">technologies used</p>
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
            style={{ backgroundColor: " #e44002" }}
          ></div>
        </div>
        {/* third row */}
        <div className="row projects-row">
          <div
            className="col-lg-6 col-md-12 col-sm-12 projects-col"
            style={{ backgroundColor: " #952aff" }}
          ></div>
          <div className="col-lg-6 col-md-12 col-sm-12">
            <div className="projects-container">
              <div className="projects-body">
                <h1 className="projects-header">Name of App</h1>
                <p className="projects-desc">project description</p>
                <p className="projects-tools">technologies used</p>
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
                <h1 className="projects-header">Name of App</h1>
                <p className="projects-desc">project description</p>
                <p className="projects-tools">technologies used</p>
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
            style={{ backgroundColor: "#cd3e94" }}
          ></div>
        </div>
      </div>
    </>
  );
}
