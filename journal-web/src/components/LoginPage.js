// components/LoginPage.js
import React from "react";
import "./styles.css"; // Ensur

function LoginPage() {
  return (
    <div className="login-container">
      <h2 className="login-title">Sign in</h2>
      <form className="login-form">
        <input
          type="text"
          className="login-input"
          placeholder="Username/email"
        />
        <input type="password" className="login-input" placeholder="Password" />
        <button type="submit" className="login-button">
          LOGIN
        </button>
        <p className="login-register-link">
          Don't have an account? <a href="#register">Register here</a>
        </p>
      </form>
    </div>
  );
}

export default LoginPage;
