import React from "react";
import "./sidebarTeacher.css";
import { Link } from "react-router-dom";
import list from "../membersList/list.svg";
import classimage from "../../classrooms/images/class.png";

function SidebarTeacher() {
  return (
    <nav className="sidebar">
      <Link to="/classrooms" className="nav-link">
        <img src={classimage} alt="Class" className="classnav-image" /> Class
      </Link>
      <Link to="/memberslist" className="nav-link active">
        <img src={list} alt="Reflections" className="classnav-image" /> Members
        list
      </Link>
    </nav>
  );
}

export default SidebarTeacher;
