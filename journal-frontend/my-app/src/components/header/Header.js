import React from "react";
import { Link, useLocation } from 'react-router-dom';
import "./header.css";
import logo from "./images/diary.png";
import profile from "./images/profile.svg";

function Header() {
  const location = useLocation();

  return (
    <div className="header">
      <Link to="/" className="logo-container">
        <img src={logo} alt="Logo" className="logo-icon" />
        <span className="logo-text">Sustainability Diary</span>
      </Link>
      {location.pathname !== '/' && location.pathname !== '/login' && location.pathname !== '/register' &&
        <Link to="/profile">
          <img src={profile} alt="Profile" className="profile-icon" />
        </Link>
      }
    </div>
  );
}

export default Header;
