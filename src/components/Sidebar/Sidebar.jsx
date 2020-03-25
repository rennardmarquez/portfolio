import React from "react";
import "./Sidebar.scss";

//components
import { ReactComponent as GithubLogo } from "../../assets/github.svg";
import { ReactComponent as LinkedInLogo } from "../../assets/linkedin.svg";
import { ReactComponent as TwitterLogo } from "../../assets/twitter.svg";

const Sidebar = () => (
  <div className="sidebar">
    <div className="social-media">
      <GithubLogo className="icon" />
      <LinkedInLogo className="icon" />
      <TwitterLogo className="icon" />
    </div>
  </div>
);

export default Sidebar;
