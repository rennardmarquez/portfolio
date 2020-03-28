import React from "react";
import "./Header.scss";

//components
import { ReactComponent as Logo } from "../../assets/rm-logo.svg";

const Header = () => (
  <div className="header">
    <div className="logo-container">
      <a href="#home">
        <Logo className="logo" />
      </a>
      <a href="#home">RENNARD MARQUEZ</a>
    </div>

    <div className="menu">
      <a href="#about">
        <div className="link">About</div>
      </a>
      <a href="#projects">
        <div className="link">Projects</div>
      </a>
      <a href="#contact">
        <div className="link">Contact</div>
      </a>
      <div>+</div>
    </div>
  </div>
);

export default Header;
