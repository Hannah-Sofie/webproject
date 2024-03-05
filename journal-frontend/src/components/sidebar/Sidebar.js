import React from "react";
import "./sidebar.css";
import { Link } from "react-router-dom";
import star from "../open-class/images/star.png";
import classimage from "../open-class/images/class.png";

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="reflections">
        <img src={star} alt="Reflections" className="classnav-image" />
        <h1>
          <Link to="/reflections">My reflections</Link>
        </h1>
      </div>
      <div className="classnav">
        <img src={classimage} alt="Class" className="classnav-image" />
        <h1>
          <Link to="/classes">Class</Link>
        </h1>
      </div>
    </aside>
  );
}

export default Sidebar;
