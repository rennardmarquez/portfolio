import React from "react";
import "./Contact.scss";

//components
import SectionTitle from "../SectionTitle/SectionTitle";
import { ReactComponent as Twitter } from "../../assets/twitter.svg";
import { ReactComponent as LinkedIn } from "../../assets/linkedin.svg";
import { ReactComponent as Github } from "../../assets/github.svg";

const Contact = () => (
  <div className="contact-container" id="contact">
    <SectionTitle number="03" title="Contact" />

    <div className="contact-content">
      <div className="contact-header">
        Get in touch. I'd like to here from you!
      </div>
      <a href="mailto:marquezrennard@gmail.com">marquezrennard@gmail.com</a>

      <div className="icons">
        <a
          href="https://github.com/rennardmarquez"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github className="icon" />
        </a>
        <a
          href="https://linkedin.com/in/rennardmarquez"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedIn className="icon" />
        </a>
        <a
          href="https://twitter.com/rennardmarquez"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Twitter className="icon" />
        </a>
      </div>
    </div>
  </div>
);

export default Contact;
