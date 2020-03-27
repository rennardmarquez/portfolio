import React from "react";
import "./Skill.scss";

const Skill = ({ children }) => (
  <div className="skill">
    <li>{children}</li>
  </div>
);

export default Skill;
