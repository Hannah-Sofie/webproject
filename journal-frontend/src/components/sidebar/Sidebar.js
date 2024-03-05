import React from "react";
import "./sidebar.css";
import { Link } from "react-router-dom";
import star from "../classrooms/images/star.png";
import classimage from "../classrooms/images/class.png";

function Sidebar() {
  return (
    <nav className="sidebar">
          <Link to="/reflections" className="nav-link active">
            <img src={star} alt="Reflections" className="classnav-image" /> My
            reflections
          </Link>
          <Link to="/classrooms" className="nav-link">
            <img src={classimage} alt="Class" className="classnav-image" />{" "}
            Class
          </Link>
    </nav>
  );
}

export default Sidebar;
