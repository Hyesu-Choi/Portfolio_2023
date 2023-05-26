import React from "react";
import { Link } from "react-scroll";
const Header = () => {
  return (
    <div id="header" className="header">
      <ul className="nav" id="nav">
        <Link to="home" smooth={true} spy={true} activeClass="nav-active">
          <li className="nav-link">HOME</li>
        </Link>
        <Link to="about" smooth={true} spy={true} activeClass="nav-active">
          <li className="nav-link">ABOUT</li>
        </Link>
        <Link to="works" smooth={true} spy={true} activeClass="nav-active">
          <li className="nav-link">MY WORKS</li>
        </Link>
        <Link to="contact" smooth={true} spy={true} activeClass="nav-active">
          <li className="nav-link">CONTACT</li>
        </Link>
      </ul>

      <div className="menu_toggle">
        <div className="bar half top"></div>
        <div className="bar"></div>
        <div className="bar half bottom"></div>
      </div>
    </div>
  );
};

export default Header;
