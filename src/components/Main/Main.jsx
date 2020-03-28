import React from "react";
import "./Main.scss";

//Components
import Home from "../Home/Home";
import About from "../About/About";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";

const Main = () => (
  <div className="main-container">
    <Home id="#" />
    <About />
    <Projects />
    <Contact />
  </div>
);

export default Main;
