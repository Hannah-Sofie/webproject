import React from "react";
import { useLocation, Link } from 'react-router-dom';
import "./header.css";
import logo from "./images/diary.png";
import profile from "./images/profile.svg";

function Header() {
  const location = useLocation();

  return (
    <div className="header">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo-icon" />
        <span className="logo-text">Sustainability Diary</span>
      </div>
      {location.pathname !== '/' && location.pathname !== '/login' && location.pathname !== '/register' && 
        <Link to="/profile">
          <img src={profile} alt="Profile" className="logo-icon" />
        </Link>
      }
    </div>
  );
}

export default Header;