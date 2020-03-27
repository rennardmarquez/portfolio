import React from "react";
import "./SkillList.scss";

//components
import Skill from "../Skill/Skill";

const Skills = () => (
  <div className="skills">
    <h2>My Arsenal</h2>
    <p>Here are some of the technologies I currently use:</p>
    <ul className="skill-list">
      <Skill children="HTML & CSS" />
      <Skill children="JavaScript" />
      <Skill children="React & Redux" />
      <Skill children="Express" />
      <Skill children="MongoDB" />
      <Skill children="REST API" />
    </ul>
  </div>
);

export default Skills;
