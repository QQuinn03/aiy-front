import React from "react";

import "./footer.css";

const Footer = () => (
  <div className="gpt3__footer section_padding grident-bg">
    <div className="gpt3__footer-heading">
      <h1 className="gradient__text">Run to your future faster than others</h1>
    </div>

    <div className="gpt3__footer-links">
      <div className="gpt3__footer-links_div">
        <h4>About this Site</h4>
        <p>Developer of AIY</p>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Get in touch</h4>
        <p>Social Media</p>
        <p>Email: wwwrunwithaiy@gmail.com</p>
      </div>
    </div>

    <div className="gpt3__footer-copyright">
      <p>© {new Date().getFullYear()} Run with AIY. All Rights Reserved.</p>
    </div>
  </div>
);

export default Footer;
