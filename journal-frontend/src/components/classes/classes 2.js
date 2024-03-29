import React from "react";
import { Link } from "react-router-dom";
import "./classes.css";
import classIcon from "./images/classicon.png";
import test from "./images/test-img.png";
import Sidebar from "../sidebar/Sidebar";

function ClassesPage() {
  return (
    <body>
      <main>
        <div className="app-container">
          <Sidebar />
        </div>
        <div>
          <div id="page-header">
            <h1>
              <img src={classIcon} alt="3 people icon" />
              Class 1
            </h1>
            <button id="new-entry-button">+ New entry</button>
          </div>
          <div id="class-container">
            <img src={test} alt="test class header" />
            <div id="class-description">
              <h2>Class 1</h2>
              <p>
                Description of the class. Here you will learn things.
                Incredible.
              </p>
            </div>

            <div id="lectures-container">
              <div className="lecture">
                <img src={test} className="class-img" alt="Class header" />
                <h2>Lecture 1</h2>
                <p>
                  Lecture description. This is where the description of the
                  Lecture goes. Wow.
                </p>
                <hr />
                <h3>Author Name</h3>
                <Link to="/open-class">Open</Link>
              </div>
              <div className="lecture">
                <img src={test} className="class-img" alt="Class header" />
                <h2>Lecture 2</h2>
                <p>
                  Lecture description. This is where the description of the
                  Lecture goes. Wow.
                </p>
                <hr />
                <h3>Author Name</h3>
                <Link to="/open-class">Open</Link>
              </div>
              <div className="lecture">
                <img src={test} className="class-img" alt="Class header" />
                <h2>Lecture 3</h2>
                <p>
                  Lecture description. This is where the description of the
                  Lecture goes. Wow.
                </p>
                <hr />
                <h3>Author Name</h3>
                <Link to="/open-class">Open</Link>
              </div>
              <div className="lecture">
                <img src={test} className="class-img" alt="Class header" />
                <h2>Lecture 4</h2>
                <p>
                  Lecture description. This is where the description of the
                  Lecture goes. Wow.
                </p>
                <hr />
                <h3>Author Name</h3>
                <Link to="/open-class">Open</Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </body>
  );
}

export default ClassesPage;
