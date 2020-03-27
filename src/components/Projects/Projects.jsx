import React from "react";
import "./Projects.scss";

//components
import Project from "../Project/Project";
import CovidTracker from "../../assets/covid-tracker.png";

const Projects = () => (
  <div className="projects-container">
    <div className="projects-title">
      <span className="number">01</span>
      <span>Projects</span>
    </div>

    <div className="projects-content">
      <Project
        title="COVID-19 Tracker"
        description="The web app tracks the cumulative count of cases worldwide. Data was provided by John Hopkins University (which updates every 23:59 GMT)."
        imgSource={CovidTracker}
        alt="COVID-19 Tracker Project"
      />
    </div>
  </div>
);

export default Projects;
