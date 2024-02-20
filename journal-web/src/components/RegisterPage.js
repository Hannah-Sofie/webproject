// components/RegisterPage.js
import React from "react";
import "./styles.css";

function RegisterPage() {
  return (
    <div className="register-container">
      <h2 className="register-title">Create an account</h2>
      <form className="register-form">
        <input
          type="text"
          className="register-input"
          placeholder="First name"
        />
        <input type="text" className="register-input" placeholder="Last name" />
        <input type="email" className="register-input" placeholder="Email" />
        <input
          type="password"
          className="register-input"
          placeholder="Password"
        />
        <button type="submit" className="register-button">
          REGISTER
        </button>
        <p className="register-login-link">
          Already have an account? <a href="#login">Login here</a>
        </p>
      </form>
    </div>
  );
}

export default RegisterPage;
