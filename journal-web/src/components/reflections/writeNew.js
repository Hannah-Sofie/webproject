import React, { useState } from "react";
import styles from "./reflections.module.css";
import { useNavigate } from "react-router-dom";
import UnlockedImage from "./images/unlocked.svg";
import LockedImage from "./images/locked.svg";
import VedleggImage from "./images/vedleggImage.svg";
import Header from "../header/Header";

const Toggle = ({ isToggled, handleToggle }) => {
  return (
    <div className={styles["locked-status"]} onClick={handleToggle}>
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
    <body>
      <Header />
      <div className={styles.formpage}>
        <form className={styles.writenew} onSubmit={handleSubmit}>
          <label htmlFor="title" className={styles.firstLabel}>
            Title
          </label>
          <input type="text" id="title" name="title" />

          <label htmlFor="content">Content</label>
          <textarea id="content" name="content" />

          <label className={styles.vedleggimage} htmlFor="file-upload">
            <img src={VedleggImage} alt="Vedlegg" />
          </label>
          <input
            id="file-upload"
            type="file"
            style={{ display: "none" }}
            onChange={handleFileUpload}
          />

          <div className={styles.formline}></div>
          <div className={styles.formbuttons}>
            <button onClick={() => navigate("/reflections")}>Cancel</button>
            <input
              className={styles.submitbutton}
              type="submit"
              value="Submit"
              onClick={() => navigate("/reflections")}
            />
          </div>
          <Toggle isToggled={isToggled} handleToggle={handleToggle} />
        </form>
      </div>
    </body>
  );
}
