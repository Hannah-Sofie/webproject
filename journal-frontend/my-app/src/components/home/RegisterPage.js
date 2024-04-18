import React from "react";
import { Link } from "react-router-dom";
import "./home.css";
import CustomButton from "./CustomButton";
import CircleAnimation from "../circleAnimation/CircleAnimation";
import Header from "../header/Header";
import idea from "./images/idea.png";
import creativity2 from "./images/creativity2.png";

function RegisterPage() {
  return (
    <div className="register-page">
      <Header />
      <CircleAnimation />
      <div className="register-container">
        <div className="register-section">
          <div className="welcome-container">
            <img src={idea} alt="Idea icon" className="idea-icon" />
            <h1>Welcome to the Sustainability Diary</h1>
            <p>
              Write down your thoughts and bright ideas! Keep and eye on your
              sustainability journey🌱✨
            </p>
          </div>
          <div className="login-register-section">
            <img
              src={creativity2}
              alt="Creativity icon"
              className="creativity-icon"
            />
            <h2>Create an account</h2>
            <form className="register-form">
              <input
                type="text"
                className="register-input"
                placeholder="First name"
              />
              <input
                type="text"
                className="register-input"
                placeholder="Last name"
              />
              <input
                type="email"
                className="register-input"
                placeholder="Email"
              />
              <input
                type="password"
                className="register-input"
                placeholder="Password"
              />
              <CustomButton
                className="home-button register-button"
                text="Register"
                bgcolor="var(--yellow)"
                color="var(--black)"
                path="/reflections"
              />
              <p className="register-login-link">
                Already have an account? <Link to="/login">Login here</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;