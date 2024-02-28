// HomePage.js
import React from "react";
import "./styles.css";
import CustomButton from "./CustomButton";
import CircleAnimation from "./CircleAnimation";
import idea from "./images/idea.png";
import pen from "./images/pen.png";
import Header from "./Header";

function HomePage() {
  return (
    <div className="home-page">
      <Header />
      <CircleAnimation />
      <div className="home-container">
        <div className="home-section">
          <div className="welcome-section">
            <img src={idea} alt="Idea icon" className="idea-icon" />
            <h1>Welcome to the Sustainability Diary</h1>
            <p>
              Write down your thoughts and bright ideas! Keep and eye on your
              sustainability journey🌱✨
            </p>
          </div>
          <div className="login-register-section">
            <div className="get-started">
              <img src={pen} alt="Pen icon" className="pen-icon" />
              <h2>Get started</h2>
            </div>
            <CustomButton
              className="home-button"
              text="Login"
              bgcolor="var(--yellow)"
              color="var(--black)"
              path="/login"
            />

            <CustomButton
              className="home-button"
              text="Register"
              bgcolor="var(--pure-white)"
              color="black"
              path="/register"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
