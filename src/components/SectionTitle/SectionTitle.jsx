import React from "react";
import "./SectionTitle.scss";

const SectionTitle = ({ number, title }) => (
  <div className="section-title">
    <span className="number">{number}</span>
    <span>{title}</span>
  </div>
);

export default SectionTitle;
