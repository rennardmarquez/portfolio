import React from "react";
import "./Contact.scss";

//components
import { ReactComponent as Twitter } from "../../assets/twitter.svg";
import { ReactComponent as LinkedIn } from "../../assets/linkedin.svg";
import { ReactComponent as Github } from "../../assets/github.svg";

const Contact = () => (
  <div className="contact-container">
    <div className="projects-title">
      <span className="number">03</span>
      <span>Contact</span>
    </div>

    <div className="contact-content">
      <div className="contact-header">
        Get in touch. I'd like to here from you!
      </div>
      <a href="mailto:marquezrennard@gmail.com">marquezrennard@gmail.com</a>

      <div className="icons">
        <Twitter className="icon" />
        <LinkedIn className="icon" />
        <Github className="icon" />
      </div>
    </div>
  </div>
);

export default Contact;
