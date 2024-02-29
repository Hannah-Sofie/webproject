import React from "react";
import "./styles.css";
import classimage from "./images/class.png";
import classdata from "./data/classdata.json";
import Sidebar from "./Sidebar";

function OpenClassPage() {
  const getImage = (imageName) => {
    try {
      return require(`${imageName}`);
    } catch (e) {
      console.warn(`Failed to load image: ${imageName}`);
      return null;
    }
  };

  return (
    <div className="app-container">
      <Sidebar />
      <main className="main-content">
        <header className="class-header">
          <div className="class-image">
            <img src={classimage} alt="Class" />
            <h1 className="class-header-text">Class</h1>
          </div>
          <button className="join-class-btn">+ Join class</button>
        </header>

        <section className="class-list">
          {classdata.map((classItem) => (
            <article key={classItem.id} className="class-card">
              <img
                src={getImage(classItem.image)}
                alt={`Class ${classItem.id}`}
              />
              <div className="class-info">
                <h3>{classItem.title}</h3>
                <p>{classItem.description}</p>
                <button class="open-classroom">Open classroom</button>
              </div>
            </article>
          ))}
        </section>
      </main>
    </div>
  );
}

export default OpenClassPage;
