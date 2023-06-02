import React, { useState } from "react";
import "./navbar.css";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../assets/logo-no-background.png";

const Menu = () => (
  <>
    <p>
      <a href="#home"> Home</a>
    </p>
    <p>
      <a href="#aiy"> What is AIY</a>
    </p>
    <p>
      <a href="#Service"> Services</a>
    </p>
    <p>
      <a href="#Demo"> Demo</a>
    </p>
  </>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="aiy_navbar">
      <div className="aiy_navbar-links">
        <div className="aiy_navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="aiy_navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="aiy_navbar-sign">
        <p> Sign in </p>
        <button type="button">Sign up</button>
      </div>

      <div className="aiy_navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#507EA8"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#507EA8"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="aiy_navbar-menu_container scale-up center">
            <div className="aiy_navbar-menu_container-links">
              <Menu />
            </div>
            <div className="aiy__navbar-menu_container-links-sign">
              <p>Sign in</p>
              <button type="button">Sign up</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
