import React from "react";
import "./header.css";
import logo from "./images/diary.png";

function Header() {
  return (
    <div className="header">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo-icon" />
        <span className="logo-text">Sustainability Diary</span>
      </div>
    </div>
  );
}

export default Header;
