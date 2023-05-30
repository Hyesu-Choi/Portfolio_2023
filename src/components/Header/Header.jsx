import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
const Header = () => {
  const [click, setClick] = useState(false);

  const [scrollY, setScrollY] = useState(0);
  const [headerStatus, setHeaderStatus] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  const handleHeader = () => {
    setScrollY(window.pageYOffset);
    if (scrollY > 80) {
      setHeaderStatus(true);
    } else {
      setHeaderStatus(false);
    }
  };

  useEffect(() => {
    const watch = () => {
      window.addEventListener("scroll", handleHeader);
    };
    watch();
    return () => {
      window.removeEventListener("scroll", handleHeader);
    };
  });

  return (
    <div
      id="header"
      className={headerStatus ? "header scroll-header" : "header"}
    >
      <ul className={click ? "nav open" : "nav"} id="nav">
        <Link to="home" smooth={true} spy={true} activeClass="nav-active">
          <li className="nav-link">HOME</li>
        </Link>
        <Link
          to="about"
          smooth={true}
          spy={true}
          activeClass="nav-active"
          offset={-80}
        >
          <li className="nav-link">ABOUT</li>
        </Link>
        <Link
          to="works"
          smooth={true}
          spy={true}
          activeClass="nav-active"
          offset={-150}
        >
          <li className="nav-link">MY WORKS</li>
        </Link>
        <Link
          to="contact"
          smooth={true}
          spy={true}
          activeClass="nav-active"
          offset={-360}
        >
          <li className="nav-link">CONTACT</li>
        </Link>
      </ul>

      <div
        className={click ? "menu_toggle open" : "menu_toggle"}
        onClick={handleClick}
      >
        <div className="bar half top"></div>
        <div className="bar"></div>
        <div className="bar half bottom"></div>
      </div>
    </div>
  );
};

export default Header;
