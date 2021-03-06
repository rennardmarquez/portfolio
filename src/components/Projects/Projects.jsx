import React from "react";
import "./Projects.scss";

//components
import Project from "../Project/Project";
import SectionTitle from "../SectionTitle/SectionTitle";
import CovidTracker from "../../assets/covid-tracker.png";
import RoyalClothing from "../../assets/royal-clothing.png";

const Projects = () => (
  <div className="projects-container" id="projects">
    <SectionTitle number="02" title="Projects" />

    <div className="projects-content">
      <Project
        title="COVID-19 Tracker"
        description="The web app tracks the cumulative count of cases worldwide. Data was provided by John Hopkins University (which updates every 23:59 GMT)."
        imgSource={CovidTracker}
        alt="COVID-19 Tracker Project"
      />
      <Project
        title="Royal Clothing"
        description="A CRUD ecommerce website built from scratch! Built with React & Redux, Express and MongoDB."
        imgSource={RoyalClothing}
        alt="Royal Clothing Project"
        addClass="end"
      />
    </div>
  </div>
);

export default Projects;
