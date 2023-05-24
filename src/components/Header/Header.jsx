import React from "react";
const Header = () => {
  return (
    <header id="header">
      <ul class="nav" id="nav">
        <li>HOME</li>
        <li>ABOUT</li>
        <li>MY WORKS</li>
        <li>CONTACT</li>
      </ul>

      <div class="menu_toggle">
        <div class="bar half top"></div>
        <div class="bar"></div>
        <div class="bar half bottom"></div>
      </div>
    </header>
  );
};

export default Header;
