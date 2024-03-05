import React from "react";
import "./sidebar.css";
import { Link } from "react-router-dom";
import star from "../classrooms/images/star.png";
import classimage from "../classrooms/images/class.png";

function Sidebar() {
  return (
    <aside className="sidebar">
          <Link to="/reflections" className="reflections active">
            <img src={star} alt="Reflections" className="classnav-image" /> My
            reflections
          </Link>
          <Link to="/classrooms" className="classnav">
            <img src={classimage} alt="Class" className="classnav-image" />{" "}
            Class
          </Link>
    </aside>
  );
}

export default Sidebar;
