import React from "react";
import ServiceDropdown from "./ServiceDropdown";
import Footer from "./Footer";
import "../App.css";

const HomePage = () => {
  return (
    <div>
      <div className="container">
        <h1 className="title">Welcome to Run with AIY</h1>

        <div className="paragraph-box">
          <p color="white">
            Are you applying for universities abroad? Don't let the stress of
            writings hold you back from your plans. With AIY's powerful AI based
            technology, we help you complete the personalized writings fast in
            just a few clicks!
          </p>
        </div>
      </div>
      <ServiceDropdown />
      <Footer />
    </div>
  );
};

export default HomePage;
