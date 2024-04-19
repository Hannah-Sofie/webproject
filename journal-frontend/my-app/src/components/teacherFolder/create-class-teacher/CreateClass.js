import React, { useState } from "react";
import { Link } from "react-router-dom";
import classData from "./data/classdata.json";
import SidebarTeacher from "../sidebarTeacher/SidebarTeacher";
import Header from "../../header/Header";
import classIcon from "../create-class-teacher/images/class.png";
import earthImage from './images/earth.png';

function CreateClassPage() {
  const [isJoinModalOpen, setIsJoinModalOpen] = useState(false);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

  const handleOpenJoinModal = () => setIsJoinModalOpen(true);
  const handleCloseJoinModal = () => setIsJoinModalOpen(false);
  const handleOpenCreateModal = () => setIsCreateModalOpen(true);
  const handleCloseCreateModal = () => setIsCreateModalOpen(false);

  const getImage = (imageName) => {
    try {
      return require(`${imageName}`);
    } catch (e) {
      console.warn(`Failed to load image: ${imageName}`);
      return null;
    }
  };

  return (
    <div>
      <Header />
      <div className="page-container">
        <SidebarTeacher />
        <main className="main-content">
          <header className="page-header">
            <div className="banner">
              <img src={classIcon} alt="Class Management" className="hero-logo" />
              <h1>Class Management</h1>
            </div>
            <div className="page-actions">
              <button onClick={handleOpenCreateModal} className="action-button">+ Create Classroom</button>
              <button onClick={handleOpenJoinModal} className="action-button">+ Join Classroom</button>
            </div>
          </header>

          <div className="flex-container">
            {classData.map((classItem) => (
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

      {isJoinModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseJoinModal}>&times;</span>
            <h1>Join a class</h1>
            <label>Enter a class code</label>
            <form>
              <input type="text" placeholder="Class Code" className="form-input"/>
              <div className="form-buttons">
                <button type="button" className="button-cancel" onClick={handleCloseJoinModal}>Cancel</button>
                <button type="submit" className="button-secondary">Join</button>
              </div>
            </form>
          </div>
        </div>
      )}

{isCreateModalOpen && (
  <div className="modal center">
    <div className="modal-content">
      <button className="close" onClick={handleCloseCreateModal}>&times;</button>
      <h1 className="text-center">Create a class</h1>
      <div className="create-class-form-container center">
        <img src={earthImage} alt="Earth" className="earth-image"/>
        <form className="form-page">
          <div className="form-group">
            <label className="form-label">Class Name</label>
            <input type="text" className="form-input" placeholder="IDG2671 Webproject" />
          </div>
          <div className="form-group">
            <label className="form-label">Description</label>
            <input type="text" className="form-input" placeholder="Sustainability" />
          </div>
          <div className="form-group">
            <label className="form-label">Class code (for joining a class)</label>
            <input type="text" className="form-input" placeholder="865HUY" />
          </div>
          <div className="form-buttons">
            <button type="button" className="button button-cancel" onClick={handleCloseCreateModal}>Cancel</button>
            <button type="submit" className="button button-primary">Create</button>
          </div>
        </form>
      </div>
    </div>
  </div>
)}
    </div>
  );
}

export default CreateClassPage;
