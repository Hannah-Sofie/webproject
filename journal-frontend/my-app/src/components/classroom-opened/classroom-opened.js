import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "../sidebar/Sidebar";
import Header from "../header/Header";
import classIcon from "../commonImages/class.png";
import classImg from "./images/class-img.png";
import lecture1 from "./images/lecture1.png";
import lecture2 from "./images/lecture2.png";
import lecture3 from "./images/lecture3.png";
import lecture4 from "./images/lecture4.png";

function OpenedClassPage() {
  return (
    <>
      <Header />
      <div className="page-container">
        <Sidebar />
        <main className="main-content">
          <header className="page-header">
            <div className="banner">
              <img src={classIcon} alt="Class" className="hero-logo" />
              <h1>Class 1</h1>
            </div>
            <Link to="/reflections/write-new" className="header-link">
              + New Entry
            </Link>
          </header>
          
          <div className="class-container">
            <img src={classImg} alt="Class" className="banner-img" />
            <div className="class-description">
              <h2>Class 1</h2>
              <div className="flex-item-full-width">
              <p>
                Description of the class. Here you will learn things.
                Incredible.
              </p>
            </div>
            </div>

            <div className="flex-container">
              <div className="flex-item">
                <img src={lecture1} alt="Lecture 1" className="class-img" />
                <h2>Lecture 1</h2>
                <p>Lecture description. This is where the description of the Lecture goes. Wow.</p>
                <hr />
                <h3>Author Name</h3>
                <Link to="/post" className="open-classroom-link">Open</Link>
              </div>
              <div className="flex-item">
                <img src={lecture2} alt="Lecture 2" className="class-img" />
                <h2>Lecture 2</h2>
                <p>Lecture description. This is where the description of the Lecture goes. Wow.</p>
                <hr />
                <h3>Author Name</h3>
                <Link to="/post" className="open-classroom-link">Open</Link>
              </div>
              <div className="flex-item">
                <img src={lecture3} alt="Lecture 3" className="class-img" />
                <h2>Lecture 3</h2>
                <p>Lecture description. This is where the description of the Lecture goes. Wow.</p>
                <hr />
                <h3>Author Name</h3>
                <Link to="/post" className="open-classroom-link">Open</Link>
              </div>
              <div className="flex-item">
                <img src={lecture4} alt="Lecture 4" className="class-img" />
                <h2>Lecture 4</h2>
                <p>Lecture description. This is where the description of the Lecture goes. Wow.</p>
                <hr />
                <h3>Author Name</h3>
                <Link to="/post" className="open-classroom-link">Open</Link>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default OpenedClassPage;
