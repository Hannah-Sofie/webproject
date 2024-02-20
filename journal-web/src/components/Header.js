import React from "react";
import "./styles.css"; // Make sure to import the CSS file
import logo from "./images/diary.png"; // Make sure to import the image file

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
