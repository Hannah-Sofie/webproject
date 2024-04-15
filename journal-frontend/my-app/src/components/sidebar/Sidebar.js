import React from "react";
import "./sidebar.css";
import { Link } from "react-router-dom";

import starIcon from "../commonImages/star.svg"
import classIcon from "../commonImages/class.png";

function Sidebar() {
  return (
    <nav className="sidebar">
          <Link to="/reflections" className="nav-link active">
            <img src={starIcon} alt="Reflections" className="classnav-image" /> My
            reflections
          </Link>
          <Link to="/classrooms" className="nav-link">
            <img src={classIcon} alt="Class" className="classnav-image" />{" "}
            Class
          </Link>
    </nav>
  );
}

export default Sidebar;
