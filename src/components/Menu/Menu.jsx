import React from "react";
import "./Menu.scss";

//components
import { ReactComponent as Logo } from "../../assets/rm-logo.svg";

const Menu = () => (
  <div className="header">
    <div className="logo-container">
      <Logo className="logo" />
      <span className="name">RENNARD MARQUEZ</span>
    </div>

    <div className="menu">
      <div className="about">About</div>
      <div className="projects">Projects</div>
      <div className="Contact">Contact</div>
      <div>+</div>
    </div>
  </div>
);

export default Menu;
