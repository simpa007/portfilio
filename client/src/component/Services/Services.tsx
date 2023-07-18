import React, { useEffect } from "react";
import "./Services.scss";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { squareVariants } from "../../varients";
const figma = require("../../logo/icons8-figma-48.png");
const coreldraw = require("../../logo/icons8-coreldraw-48.png");
const mobile = require("../../logo/icons8-iphone-se-48.png");
const web = require("../../logo/icons8-web-design-48.png");
const wordpress = require("../../logo/icons8-wordpress-48.png");
const commercial = require("../../logo/icons8-commercial-48.png");
export default function Services() {
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
      <div className="services__text" id="services">
        <h1 className="header">
          <span style={{ color: "#6ff4a5" }}>02.</span> Services
        </h1>
      </div>

      <div className="ag-format-container">
        <div className="ag-courses_box">
          <div className="ag-courses_item">
            <a href="#" className="ag-courses-item_link">
              <div className="ag-courses-item_bg"></div>
              <div className="ag-courses-item_icon">
                <img src={figma} alt="" />
              </div>
              <div className="ag-courses-item_title">UI/UX Design</div>
            </a>
          </div>

          <div className="ag-courses_item">
            <a href="#" className="ag-courses-item_link">
              <div className="ag-courses-item_bg"></div>
              <div className="ag-courses-item_icon">
                <img src={web} alt="" />
              </div>
              <div className="ag-courses-item_title">Web Development</div>
            </a>
          </div>

          <div className="ag-courses_item">
            <a href="#" className="ag-courses-item_link">
              <div className="ag-courses-item_bg"></div>
              <div className="ag-courses-item_icon">
                <img src={commercial} alt="" />
              </div>
              <div className="ag-courses-item_title">Digital Marketing</div>
            </a>
          </div>

          <div className="ag-courses_item">
            <a href="#" className="ag-courses-item_link">
              <div className="ag-courses-item_bg"></div>
              <div className="ag-courses-item_icon">
                <img src={coreldraw} alt="" />
              </div>
              <div className="ag-courses-item_title">Graphic Design</div>
            </a>
          </div>

          <div className="ag-courses_item">
            <a href="#" className="ag-courses-item_link">
              <div className="ag-courses-item_bg"></div>
              <div className="ag-courses-item_icon">
                <img src={mobile} alt="" />
              </div>
              <div className="ag-courses-item_title">App Development</div>
            </a>
          </div>

          <div className="ag-courses_item">
            <a href="#" className="ag-courses-item_link">
              <div className="ag-courses-item_bg"></div>
              <div className="ag-courses-item_icon">
                <img src={wordpress} alt="" />
              </div>
              <div className="ag-courses-item_title">Web Design</div>
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
