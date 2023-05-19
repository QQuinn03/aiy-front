import React from "react";

import ServiceDropdown from "./ServiceDropdown";
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
          <p>
            Are you applying to college? Don't let the challenge of writing
            deter your plans. With GPT4-powered technology, you can create
            personalized writing effectively. We offer help in articulating your
            thoughts and experiences, enabling you to create genuine and
            compelling university applications!
          </p>
        </div>
      </div>
      <ServiceDropdown />
      <Footer />
    </div>
  );
};

export default HomePage;
