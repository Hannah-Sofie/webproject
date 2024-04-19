import React from "react";
import { Link } from "react-router-dom";
import Header from "../header/Header";
import Sidebar from "../sidebar/Sidebar";
import "./reflections.css";

import icon from "../commonImages/star.svg";
import writeImage from "../commonImages/write.svg";
import dotsImage from "../commonImages/dots.svg";
import UnlockedImage from "../commonImages/unlocked.svg";
import LockedImage from "../commonImages/locked.svg";

class Reflections extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dummydata: [
        {
          id: 1,
          title: "Reflection 1",
          content: "This is the first reflection.",
          status: "Public",
          date: "2022-01-01",
          time: "12:00",
        },
        {
          id: 2,
          title: "Reflection 2",
          content: "This is the second reflection.",
          status: "Private",
          date: "2022-01-02",
          time: "13:00",
        },
        {
          id: 3,
          title: "Reflection 3",
          content: "This is the third reflection.",
          status: "Public",
          date: "2022-01-03",
          time: "14:00",
        },
      ],
    };
  }

  render() {
    return (
      <div>
        <Header />
        <div className="page-container">
          <Sidebar />
          <main className="main-content">
            <header className="page-header">
              <div className="banner">
                <img src={icon} alt="My reflections" className="hero-logo" />
                <h1>My Reflections</h1>
              </div>
              <Link to="/reflections/write-new" className="action-button">
              + New Entry
              </Link>
            </header>
            <div className="full-width">
              {this.state.dummydata.map((reflection) => (
                <article key={reflection.id} className="flex-item-full-width">
                  <img
                    src={reflection.status === "Public" ? UnlockedImage : LockedImage}
                    alt="Status"
                    className="status-icon"
                  />
                  <h2>{reflection.title}</h2>
                  <p>{reflection.status}</p>
                  <p>{reflection.date} {reflection.time}</p>
                  <div className="page-actions">
                    <Link to="/reflections/edit-reflection">
                      <img src={writeImage} alt="Edit" />
                    </Link>
                    <img src={dotsImage} alt="More options" />
                  </div>
                </article>
              ))}
            </div>
          </main>
        </div>
      </div>
    );
  }
}

export default Reflections;
