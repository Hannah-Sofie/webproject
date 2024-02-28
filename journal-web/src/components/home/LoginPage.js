import React from "react";
import "./styles.css";
import CustomButton from "./CustomButton";
import creativity from "./images/creativity.png";

function LoginPage() {
  return (
    <div>
      <div className="login-container">
        <div className="login-section">
          <img
            src={creativity}
            alt="Creativity icon"
            className="creativity-icon"
          />
          <h1>Sign In</h1>
          <form className="login-form-mobile">
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
              path="/"
            />
            <p className="register-login-link">
              Don't have an account? <a href="#login">Register here</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
