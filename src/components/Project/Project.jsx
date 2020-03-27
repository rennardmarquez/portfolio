import React from "react";
import "./Project.scss";

//components
import { ReactComponent as Github } from "../../assets/github.svg";
import { ReactComponent as ExternalLink } from "../../assets/external-link.svg";

const Project = ({ title, description, imgSource, alt }) => (
  <div className="project-container">
    <div className="content">
      <div className="title">{title}</div>
      <div className="description">{description}</div>
      <div className="links">
        <Github className="icon" />
        <ExternalLink className="icon" />
      </div>
    </div>
    <div className="project-image">
      <img src={imgSource} alt={alt} />
    </div>
  </div>
);

export default Project;
