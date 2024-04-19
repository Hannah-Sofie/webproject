import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../header/Header";

import UnlockedImage from "../commonImages/unlocked.svg";
import LockedImage from "../commonImages/locked.svg";
import VedleggImage from "../commonImages/vedleggImage.svg";

const Toggle = ({ isToggled, handleToggle }) => {
  return (
    <button className="icon-button" onClick={handleToggle} aria-label={isToggled ? "Unlock" : "Lock"}>
      <img src={isToggled ? UnlockedImage : LockedImage} alt={isToggled ? "Unlocked" : "Locked"} />
      <span>{isToggled ? "Shared" : "Not shared"}</span>
    </button>
  );
};

export default function WriteNew() {
  const navigate = useNavigate();
  const [isToggled, setToggle] = useState(false);

  const handleToggle = () => setToggle(!isToggled);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(isToggled); 
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    console.log(file); 
  };

  return (
    <>
      <Header />
      <div className="form-page">
        <form className="write-new" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="title" className="form-label">
              Title
            </label>
            <input type="text" id="title" className="form-input" name="title" placeholder="Title" />
          </div>

          <div className="form-group">
            <label htmlFor="content" className="form-label">Content</label>
            <textarea id="content" className="form-input" name="content" placeholder="Content" />
          </div>

          <div className="form-group attachment-group">
            <input
              id="file-upload"
              type="file"
              className="file-upload"
              onChange={handleFileUpload}
            />
          </div>

          <div class ="file-upload-section">
          <label className="icon-button" htmlFor="file-upload" aria-label="Upload File">
              <img src={VedleggImage} alt="Attachment" />
              <span>Attach file</span>
          </label>
          <div className="form-group toggle-group">
            <Toggle isToggled={isToggled} handleToggle={handleToggle} />
          </div>
          </div>

          <div className="form-buttons">
            <button type="button" className="button cancel-btn" onClick={() => navigate("/reflections")}>Cancel</button>
            <button type="submit" className="button submit-btn">Post</button>
          </div>
        </form>
      </div>
    </>
  );
}
