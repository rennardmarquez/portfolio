import React from "react";
import "./SocialMedia.scss";

//components
import { ReactComponent as GithubLogo } from "../../assets/github.svg";
import { ReactComponent as LinkedInLogo } from "../../assets/linkedin.svg";
import { ReactComponent as TwitterLogo } from "../../assets/twitter.svg";

const SocialMedia = () => (
  <div className="social-media">
    <GithubLogo className="icon" />
    <LinkedInLogo className="icon" />
    <TwitterLogo className="icon" />
  </div>
);

export default SocialMedia;
