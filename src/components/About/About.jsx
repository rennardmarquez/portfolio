import React from "react";
import "./About.scss";

//Components
import SkillList from "../SkillList/SkillList";
import Portrait from "../../assets/rennard-marquez.jpg";

const About = () => (
  <div className="about-container">
    <div className="about-title">
      <span className="number">01</span>
      <span>About</span>
    </div>

    <div className="about-content">
      <div className="content">
        <h2>
          I'm Rennard, a software developer & creative based in the Philippines.
          I make stuff (web apps) for the internet.
        </h2>

        <p>
          Funny stuff, awesome stuff, or business stuff — I build anything a
          website conveys (frontend) & operates (backend). Efficiency & design
          is a must for my applications.
        </p>
        <SkillList />
      </div>

      <div className="portrait-container">
        <img
          src={Portrait}
          alt="Rennard Marquez - Software Developer and Designer"
          className="portrait"
        />
      </div>
    </div>
  </div>
);

export default About;
