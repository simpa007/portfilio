import React, { useState } from "react";
import axios from "axios";
import "./Contact.scss";
import { HiOutlineMailOpen, HiLocationMarker, HiPhone } from "react-icons/hi";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
export default function Contact() {
  const [formFields, setFormFields] = useState({
    name: "",
    email: "",
    message: "",
  });
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
      .post("http://localhost:4000/contact", json)
      .then((user) => {
        if (!user.data.name || !user.data.email || !user.data.message) {
          console.log("Please enter field");
        } else {
          console.log(user.data);
        }
      })
      .catch((err) => {
        console.log("Something went wrong", err);
      });
    event.preventDefault();
  };

  return (
    <div id="contact">
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
                Lagos, Nigeria.
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
                <a href="">
                  <BsFacebook color="#fff" size="35px" />
                </a>
              </span>
              <span>
                <a href="">
                  <BsGithub color="#fff" size="35px" />
                </a>
              </span>
              <span>
                <a href="">
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
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
