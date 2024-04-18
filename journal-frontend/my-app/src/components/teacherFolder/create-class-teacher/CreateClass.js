import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./createclass.css";
import classImage from "./images/class.png";
import earthImage from './images/earth.png';
import classData from "./data/classdata.json";
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
      <div className="page-container">
        <Sidebar />
        <main className="main-content">
          <header className="page-header">
            <div className="banner">
              <img src={classImage} alt="Class" className="hero-logo"/>
              <h1>Class</h1>
            </div>
            <div className="page-actions">
              <button onClick={handleOpenCreateModal} className="header-link">
                +Create Classroom
              </button>
              <button onClick={handleOpenJoinModal} className="header-link">
                +Join Classroom
              </button>
            </div>
          </header>

          <section className="lectures-container">
            {classData.map((classItem) => (
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

      {/* Join Modal */}
      {isJoinModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseJoinModal}>&times;</span>
              <h1>Join a class</h1>
              <label>Enter a class code</label>
              <form>
                <input type="text" placeholder="Class Code" />
                <div className="form-buttons">
                  <button type="button" className="cancel-btn" onClick={handleCloseJoinModal}>Cancel</button>
                  <button type="submit" className="submitbutton">Join</button>
                </div>
              </form>
            </div>
        </div>
      )}

      {/* Create Modal */}
      {isCreateModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <div className="create-form-container">
              <div>
                <h1>Create a class</h1>
                <img src={earthImage} alt="Earth" className="earth-image"/>
              </div>
              <div>
                <span className="close" onClick={handleCloseCreateModal}>&times;</span>
                <form>
                  <div className="form-group">
                    <label>Class Name</label>
                    <input type="text" placeholder="IDG2671 Webproject" />
                  </div>
                  <div className="form-group">
                    <label>Description</label>
                    <input type="text" placeholder="Sustainability" />
                  </div>
                  <div className="form-group">
                    <label>Class code (for joining a class)</label>
                    <input type="text" placeholder="865HUY" />
                  </div>
                  <div className="form-buttons">
                    <hr className="create-hr"/>
                    <button type="button" className="cancel-btn" onClick={handleCloseCreateModal}>Cancel</button>
                    <button type="submit" className="submitbutton">Create</button>
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
