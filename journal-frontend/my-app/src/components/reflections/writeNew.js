import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../header/Header";
import "./writeNew.css";

import UnlockedImage from "../commonImages/unlocked.svg";
import LockedImage from "../commonImages/locked.svg";
import VedleggImage from "../commonImages/vedleggImage.svg";

const Toggle = ({ isToggled, handleToggle }) => {
  return (
    <div className="locked-status" onClick={handleToggle}>
      {isToggled ? (
        <img src={UnlockedImage} alt="On State" />
      ) : (
        <img src={LockedImage} alt="Off State" />
      )}
    </div>
  );
};

export default function WriteNew() {
  const navigate = useNavigate();
  const [isToggled, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!isToggled);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // access isToggled state and include it in form data
    console.log(isToggled);
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    console.log(file);
    // Here you can handle the file upload
  };

  return (
    <>
      <Header />
      <div className="formpage">
        <form className="writenew" onSubmit={handleSubmit}>
          <label htmlFor="title" className="title-label">
            Title
          </label>
          <input type="text" id="title" name="title" placeholder="Title" />

          <label htmlFor="content">Content</label>
          <textarea id="content" name="content" placeholder="Content" />

          <label className="vedleggimage" htmlFor="file-upload">
            <img src={VedleggImage} alt="Vedlegg" />
          </label>
          <input
            id="file-upload"
            type="file"
            style={{ display: "none" }}
            onChange={handleFileUpload}
          />

          <hr />
          <div className="formbuttons">
            <button onClick={() => navigate("/reflections")}>Cancel</button>
            <button className="submitbutton" onClick={() => navigate("/reflections")}>Post</button>
          </div>
          <Toggle isToggled={isToggled} handleToggle={handleToggle} />
        </form>
      </div>
    </>
  );
}
