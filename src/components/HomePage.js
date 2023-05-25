import React from "react";

import Service from "./Service";
import Footer from "./Footer";
import "../App.css";

const HomePage = () => {
  return (
    <div>
      <div className="container">
        <div className="title-container">
          <h1 className="title">Welcome to Run with AIY</h1>
        </div>

        <div className="paragraph-box">
          <p className="text-color">
            Chasing your dream university in an English-speaking country?
            Nervous about applications and tests? We've got you covered! Our
            cutting-edge platform, powered by advanced GPT4 technology, is your
            secret weapon for creating top-notch applications. It not only aids
            in preparing compelling applications but also helps ace those
            English tests. Together, let's showcase your potential and make your
            dream a reality!
          </p>
        </div>
      </div>
      <Service />
      <Footer />
    </div>
  );
};

export default HomePage;
