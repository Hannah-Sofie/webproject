import React from "react";
import "./styles.css"; // Assuming that the sidebar uses styles from here
import star from "./images/star.png";
import classimage from "./images/class.png";

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="reflections">
        <img src={star} alt="Reflections" className="classnav-image" />
        <h1>My reflections</h1>
      </div>
      <div className="classnav">
        <img src={classimage} alt="Class" className="classnav-image" />
        <h1>class</h1>
      </div>
    </aside>
  );
}

export default Sidebar;