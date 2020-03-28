import React from "react";
import "./SocialMedia.scss";

//components
import { ReactComponent as Github } from "../../assets/github.svg";
import { ReactComponent as LinkedIn } from "../../assets/linkedin.svg";
import { ReactComponent as Twitter } from "../../assets/twitter.svg";

const SocialMedia = () => (
  <div className="social-media">
    <a
      href="https://twitter.com/rennardmarquez"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Twitter className="social-media-icon" />
    </a>
    <a
      href="https://linkedin.com/rennardmarquez"
      target="_blank"
      rel="noopener noreferrer"
    >
      <LinkedIn className="social-media-icon" />
    </a>
    <a
      href="https://github.com/rennardmarquez"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Github className="social-media-icon" />
    </a>
  </div>
);

export default SocialMedia;
