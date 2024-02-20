import React, { useState } from "react";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";
import Header from "./components/Header"; // Make sure the path to the Header component is correct

function App() {
  const [currentPage, setCurrentPage] = useState("login");

  const renderPage = () => {
    if (currentPage === "login") {
      return <LoginPage />;
    } else if (currentPage === "register") {
      return <RegisterPage />;
    }
    // Add additional conditions for other pages if needed
  };

  return (
    <div className="App">
      <Header /> {/* This line adds the Header component to your layout */}
      {renderPage()}
      {/* Example buttons to switch between login and register pages */}
      <div>
        <button onClick={() => setCurrentPage("login")}>Login</button>
        <button onClick={() => setCurrentPage("register")}>Register</button>
      </div>
    </div>
  );
}

export default App;
