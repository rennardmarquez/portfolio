import React from "react";
import "./Home.scss";

//components
import Email from "../Email/Email";
import SocialMedia from "../SocialMedia/SocialMedia";
import Astronaut from "../../assets/astronaut.png";

const Home = () => (
  <div className="home-container" id="home">
    <Email />
    <SocialMedia />
    <img src={Astronaut} alt="Astronaut" className="astronaut" />
    <h1 className="hello">Hello.</h1>
  </div>
);

export default Home;
