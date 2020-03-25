import React from "react";
import "./Main.scss";

//Components
import Menu from "../Menu/Menu";
import Home from "../Home/Home";
import About from "../About/About";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";

const Main = () => (
  <div className="main-container">
    <Menu />
    <Home />
    <About />
    <Projects />
    <Contact />
  </div>
);

export default Main;
