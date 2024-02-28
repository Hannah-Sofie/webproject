import React from "react";
import "./styles.css";
import CustomButton from "./CustomButton";
import creativity2 from "./images/creativity2.png";

function RegisterPage() {
  return (
    <div>
      <div className="register-container">
        <div className="register-section">
          <img
            src={creativity2}
            alt="Creativity icon"
            className="creativity-icon"
          />
          <h1>Create an account</h1>
          <form className="register-form-mobile">
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
              path="/"
            />
            <p className="register-login-link">
              Already have an account? <a href="#login">Login here</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
