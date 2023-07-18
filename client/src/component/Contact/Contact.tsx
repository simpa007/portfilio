import React, { useState, useEffect } from "react";
import "./Contact.scss";
import axios from "axios";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { squareVariants } from "../../varients";
import { HiOutlineMailOpen, HiLocationMarker, HiPhone } from "react-icons/hi";
import { BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";

export default function Contact() {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  const initialState = {
    name: "",
    email: "",
    message: "",
  };
  const [formFields, setFormFields] = useState(initialState);
  const { name, email, message } = formFields;

  const handleChange = (event: any) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = (event: any) => {
    const json = {
      name,
      email,
      message,
      joined: new Date(),
    };
    axios
      .post("https://portfilio-server.onrender.com", json)
      .then((user) => {
        if (!user.data) {
          alert("Please enter field");
        } else {
          alert("Successful");
          setFormFields(initialState);
        }
      })
      .catch((err) => {
        console.log("Something went wrong", err);
      });
    event.preventDefault();
  };

  return (
    <motion.div
      id="contact"
      variants={squareVariants}
      animate={controls}
      ref={ref}
      initial="hidden"
    >
      <div className="contact-text">
        <h1 className="header">
          <span style={{ color: "#6ff4a5" }}>04.</span> Contact
        </h1>
      </div>
      <div className="container row-contact">
        <div className="row contact">
          <div className="col-lg-6 col-md-6 col-sm-12 order-1">
            <div className="contact-info">
              <p>
                <span>
                  <HiOutlineMailOpen size="28px" />
                </span>
                simpaimmey@gmail.com
              </p>
              <p>
                <span>
                  <HiLocationMarker size="28px" />
                </span>
                Abuja, Nigeria.
              </p>
              <p>
                <span>
                  <HiPhone size="28px" />
                </span>
                +234-8073696557.
              </p>
            </div>
            <div className="contact-icon">
              <span>
                <a href="https://www.instagram.com/simpa_sol/">
                  <BsInstagram color="#fff" size="35px" />
                </a>
              </span>
              <span>
                <a href="https://twitter.com/Simpa_sol">
                  <BsTwitter color="#fff" size="35px" />
                </a>
              </span>
              <span>
                <a href="https://www.linkedin.com/in/simpa-emmanuel-67a5981a1/">
                  <BsLinkedin color="#fff" size="35px" />
                </a>
              </span>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-contact order-2">
            <form className="form" onSubmit={handleSubmit}>
              <div className="form__input">
                <input
                  type="input"
                  placeholder="Name"
                  className="input__field"
                  name="name"
                  value={name}
                  onChange={handleChange}
                />
              </div>
              <div className="form__input">
                <input
                  type="input"
                  placeholder="Email"
                  name="email"
                  value={email}
                  className="input__field"
                  onChange={handleChange}
                />
              </div>

              <textarea
                name="message"
                placeholder="Message"
                className="textarea"
                value={message}
                onChange={handleChange}
              />
              <button type="submit" className="btn">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
