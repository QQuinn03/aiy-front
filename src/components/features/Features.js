import React from "react";
import "./features.css";

const Feature = ({ title, text, classColor }) => (
  <div className={`aiy__features-container__feature ${classColor}`}>
    <div className="aiy__features-container__feature-title">
      <div />

      <h1>{title}</h1>
    </div>
    <div className="aiy__features-container_feature-text">
      <p>{text}</p>
    </div>
  </div>
);

export default Feature;
