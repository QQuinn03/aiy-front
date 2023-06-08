import React from "react";
import "./header.css";
import logo from "../../assets/logo-no-background.png";

const Header = () => {
  return (
    <div className="aiy_header section_padding" id="home">
      <div className="aiy_header-content">
        <div className="aiy_header-title_and_image">
          <h1>Let us run with AIY</h1>
          <img src={logo} alt="" className="aiy_header-image" />
        </div>
        <p>
          Chasing your dream university? Preparing for English tests? Or just
          learn some English? AIY has got you covered!
        </p>
      </div>
    </div>
  );
};

export default Header;
