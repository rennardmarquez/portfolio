import React from "react";
import "./Home.scss";

//components
import Email from "../Email/Email";
import SocialMedia from "../SocialMedia/SocialMedia";

const Home = () => (
  <div className="home-container">
    <Email />
    <SocialMedia />
    <h1 className="hello">Hello.</h1>
    <span className="title">Software Developer & Designer</span>
  </div>
);

export default Home;
