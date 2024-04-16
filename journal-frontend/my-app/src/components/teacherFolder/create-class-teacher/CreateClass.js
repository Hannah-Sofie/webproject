import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./createclass.css";
import classimage from "./images/class.png";
import earthImage from './images/earth.png';
import classdata from "./data/classdata.json";
import Sidebar from "../sidebarTeacher/SidebarTeacher";
import Header from "../../header/Header";

function CreateClassPage() {
  const [isJoinModalOpen, setIsJoinModalOpen] = useState(false);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

  const getImage = (imageName) => {
    try {
      return require(`${imageName}`);
    } catch (e) {
      console.warn(`Failed to load image: ${imageName}`);
      return null;
    }
  };

  const handleOpenJoinModal = () => setIsJoinModalOpen(true);
  const handleCloseJoinModal = () => setIsJoinModalOpen(false);
  const handleOpenCreateModal = () => setIsCreateModalOpen(true);
  const handleCloseCreateModal = () => setIsCreateModalOpen(false);

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
            <button onClick={handleOpenCreateModal} className="create-class-btn">
              +Create Classroom
            </button>
            <button onClick={handleOpenJoinModal} className="join-class-btn">
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

      {isJoinModalOpen && (
        <div className="modal">
         <div className="modal-content">
          <span className="close" onClick={handleCloseJoinModal}>&times;</span>
            <h1>Join a class</h1>
            <label className="modal-code">Enter a class code</label>
            <form className="modal-form">
              <input type="text" placeholder="Class Code" />
              <div>
                <button type="button" className="cancel-btn" onClick={handleCloseJoinModal}>Cancel</button>
                <button type="submit" className="join-btn">Join</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {isCreateModalOpen && (
        <div className="modal">
        <div className="modal-content">
          <div className="create-form-container">
            <div>
          <h1 className="create-form-headline">Create a class</h1>
          <img src={earthImage} alt="Earth" className="earth-image"/>
          </div>
            <div>
          <div className="create-close" onClick={handleCloseCreateModal}>&times;</div>
            <form className="modal-form">
              <div className="create-form-group">
                <label for="classname">Class Name</label>
                <input type="text" className="create-classname" placeholder="IDG2671 Webproject" />
              </div>
              <div className="create-form-group">
                <label for="classname">description</label>
                <input type="text" className="create-classname" placeholder="Sustainability" />
              </div>
              <div className="create-form-group">
                <label for="classname">Class code (for joining a class)</label>
                <input type="text" className="create-classname" placeholder="865HUY" />
              </div>
              <div className="create-button-container">
              <hr className="create-hr"></hr>
                <button type="button" className="create-cancel-btn" onClick={handleCloseCreateModal}>Cancel</button>
                <button type="submit" className="create-create-btn">Create</button>
              </div>
            </form>
            </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CreateClassPage;
