import React from "react";
import "./sidebar.css";
import { Link } from "react-router-dom";
import star from "../open-class/images/star.png";
import classimage from "../open-class/images/class.png";

function Sidebar() {
  return (
    <aside className="sidebar">
          <Link to="/reflections" className="reflections active">
            <img src={star} alt="Reflections" className="classnav-image" /> My
            reflections
          </Link>
          <Link to="/open-class" className="classnav">
            <img src={classimage} alt="Class" className="classnav-image" />{" "}
            Class
          </Link>
    </aside>
  );
}

export default Sidebar;
