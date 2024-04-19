import React from "react";
import { Link } from "react-router-dom";
import "./home.css";
import CustomButton from "./CustomButton";
import CircleAnimation from "../circleAnimation/CircleAnimation";
import Header from "../header/Header";
import idea from "./images/idea.png";
import creativity from "./images/creativity.png";

function LoginPage() {
  return (
    <div className="login-page">
      <Header />
      <CircleAnimation />
      <div className="login-container">
        <div className="login-section">
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
              src={creativity}
              alt="Creativity icon"
              className="creativity-icon"
            />
            <h2>Sign In</h2>
            <form className="login-form">
              <input
                type="email"
                className="register-input"
                placeholder="👤 Email/Username"
              />
              <input
                type="password"
                className="register-input"
                placeholder="🔒 Password"
              />
              <CustomButton
                className="home-button login-button"
                text="Login"
                bgcolor="var(--yellow)"
                color="var(--black)"
                path="/reflections"
              />
              <p className="register-login-link">
                Don't have an account? <Link to="/register">Register here</Link>
              </p>
              <p className="register-login-link">
                teacher? <Link to="/create-class-teacher">Go to teacher page</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;