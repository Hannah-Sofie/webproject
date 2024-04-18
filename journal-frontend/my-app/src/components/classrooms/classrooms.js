import React, { useState } from "react";
import { Link } from "react-router-dom";
import classdata from "./data/classdata.json";
import Sidebar from "../sidebar/Sidebar";
import Header from "../header/Header";
import classIcon from "../commonImages/class.png"

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

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <div>
      <Header />
      <div className="page-container">
        <Sidebar />
        <main className="main-content">
          <header className="page-header">
            <div className="banner">
              <img src={classIcon} alt="Class" className="hero-logo" />
              <h1>Class</h1>
            </div>
            <button onClick={handleOpenModal} className="header-link">
              +Join Classroom
            </button>
          </header>

          <div className="flex-container">
            {classdata.map((classItem) => (
              <article key={classItem.id} className="flex-item">
                <img src={getImage(classItem.image)} alt={`Class ${classItem.id}`} className="class-img" />
                <div className="flex-container center">
                  <h3>{classItem.title}</h3>
                </div>
                <p>{classItem.description}</p>
                  <Link to="/classroom-opened" className="open-classroom-link">Open classroom</Link>
              </article>
            ))}
          </div>
        </main>
      </div>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>&times;</span>
            <h1>Join a class</h1>
            <label className="modal-code" >Enter a class code</label>
            <form className="modal-form">
              <input type="text" placeholder="Class Code" />
              <div className="form-buttons">
                <button type="button" className="button-cancel" onClick={handleCloseModal}>Cancel</button>
                <button type="submit" className="button-primary">Join</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default OpenClassPage;
