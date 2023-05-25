import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <p>© {new Date().getFullYear()} Run with AIY. All Rights Reserved.</p>
      <p>
        <a href="/terms-of-service">Terms of Service</a> |{" "}
        <a href="/privacy-policy">Privacy Policy</a>
      </p>
    </div>
  );
};

export default Footer;
