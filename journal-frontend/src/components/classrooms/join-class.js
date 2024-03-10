import React, { useState } from "react";

function JoinClassPage() {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handleJoin = (event) => {
    event.preventDefault();
    alert("Classroom code submitted. Implement the submission logic.");
    setShowModal(false);
  };

  return (
    <div className="app-container">
      <button className="join-class-btn" onClick={toggleModal}>+ Join Class</button>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close-btn" onClick={toggleModal}>&times;</span>
            <h2>Enter Classroom Code</h2>
            <form onSubmit={handleJoin}>
              <input type="text" placeholder="Classroom Code" name="code" required />
              <button type="submit">Join</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default JoinClassPage;