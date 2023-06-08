import React from "react";
import "./whatAIY.css";

import Feature from "../../components/features/Features";

const WhatAIY = () => (
  <div className="aiy__whataiy section__margin" id="aiy">
    <div className="aiy__whataiy-feature">
      <Feature
        title="What is AIY"
        text="AIY is a  cutting-edge platform, powered by advanced GPT4 technology, is your secret weapon for creating top-notch applications. It not only aids in preparing compelling applications but also helps ace those English tests. Together, let's showcase your potential and make your dream a reality!"
      />
    </div>
    <div className="aiy__whataiy-heading">
      <h1>Your potentials are beyond your imagination</h1>
      <p>Explore AIY's services</p>
    </div>
    <div className="aiy__whataiy-container">
      <Feature
        title="Cheap"
        text="Experience the superior capabilities of AIY at just a fraction of the cost of traditional human assistance. Plus, all our services are currently free. Don't miss out on this unbeatable value!"
      />
      <Feature
        title="Empowerful"
        text="AIY, powered by OpenAI, offers precise grammar corrections, sophisticated vocabulary enhancement, and refined sentence structure adjustments to enrich students' English writing. Unleash your language potential with AIY's advanced language modelling and real-time feedback."
      />
      <Feature
        title="Efficiency"
        text="Improve your tasks in just a few clicks!"
      />
    </div>
  </div>
);

export default WhatAIY;
