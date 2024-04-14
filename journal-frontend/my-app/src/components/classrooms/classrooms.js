import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./classrooms.css";
import classimage from "./images/class.png";
import classdata from "./data/classdata.json";
import Sidebar from "../sidebar/Sidebar";
import Header from "../header/Header";

function OpenClassPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const getImage = (imageName) => {
    try {
      return require(`${imageName}`);
    } catch (e) {
      console.warn(`Failed to load image: ${imageName}`);
      return null;
    }
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <Header />
      <div className="app-container">
        <Sidebar />
        <main className="main-content">
          <header className="class-header">
            <div className="class-image">
              <img src={classimage} alt="Class" />
              <h1 className="class-header-text">Class</h1>
            </div>
            <button onClick={handleOpenModal} className="join-class-btn">
              +Join Classroom
            </button>
          </header>

          <section className="class-list">
            {classdata.map((classItem) => (
              <article key={classItem.id} className="class-card">
                <img src={getImage(classItem.image)} alt={`Class ${classItem.id}`} />
                <div className="class-info">
                  <h3>{classItem.title}</h3>
                  <p>{classItem.description}</p>
                  <Link to="/classroom-opened" className="open-classroom-link">Open classroom</Link>
                </div>
              </article>
            ))}
          </section>
        </main>
      </div>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>&times;</span>
            <h1>Join a class</h1>
            <label class="modal-code">Enter a class code</label>
            <form class="modal-form">
              <input type="text" placeholder="865HUY" />
              <div>
              <hr></hr>
              <button type="submit" class="cancel-btn">Cancel</button>
              <button type="submit" class="join-btn">Join</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default OpenClassPage;