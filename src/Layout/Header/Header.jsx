import React from "react";
import "./Header.css";
function Header() {
  return (
    <div className="header">
      <div className="logo-div">
        <h1 className="logo">LOGO</h1>
      </div>
      <div className="central-header">
        <a href="#" className="nav-links">
          My Collection
        </a>
        <a href="#" className="nav-links">
          Farming
        </a>
        <a href="#" className="nav-links">
          Berry Juicer
        </a>
      </div>
    </div>
  );
}

export default Header;
