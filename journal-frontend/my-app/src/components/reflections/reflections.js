import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Header from "../header/Header";
import Sidebar from "../sidebar/Sidebar";
import WriteNew from "./writeNew";
import "./reflections.css";

import icon from "../commonImages/star.svg"
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
        <div id="page-container">
          <Sidebar />
          <main>
            <div id="page-header">
              <h1><img src={icon} alt="cool little star icon"></img>My reflections</h1>
              <Link to="/reflections/write-new" id="header-link">
                + New Entry
              </Link>
            </div>

            <div id="reflections-container">
              {this.state.dummydata.map((reflection) => (
                <div
                  key={reflection.id}
                  className="reflections__list__item"
                >
                  <div>
                    <h2 className="reflections__list__item-title">
                      {reflection.title}
                    </h2>
                    <div className="flexrow">
                      <img
                        src={
                          reflection.status === "public"
                            ? UnlockedImage
                            : LockedImage
                        }
                        alt="Status"
                      />
                      <p className="reflections__list__item-status">
                        {reflection.status}
                      </p>
                    </div>
                  </div>
                  <div>
                    <p className="reflections__list__item-date">
                      {reflection.date}
                    </p>
                    <p className="reflections__list__item-time">
                      {reflection.time}
                    </p>
                  </div>
                  <div>
                    <img src={writeImage} alt="write" />
                    <img src={dotsImage} alt="dots" />
                  </div>
                </div>
              ))}
            </div>
            <Routes>
              <Route path="/write-new" element={<WriteNew />} />
            </Routes>
          </main>
        </div>
      </div>
    );
  }
}

export default Reflections;
