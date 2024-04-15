import React from "react";
import "./sidebarTeacher.css";
import { Link } from "react-router-dom";
import listIcon from "../../commonImages/list.svg";
import classIcon from "../../commonImages/class.png";
function SidebarTeacher() {
  return (
    <nav className="sidebar">
      <Link to="/create-class-teacher" className="nav-link">
        <img src={classIcon} alt="Class" className="classnav-image" /> Class
      </Link>
      <Link to="/memberslist" className="nav-link active">
        <img src={listIcon} alt="Reflections" className="classnav-image" />{" "}
        Members list
      </Link>
    </nav>
  );
}

export default SidebarTeacher;
