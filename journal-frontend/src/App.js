import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/home/HomePage";
import LoginPage from "./components/home/LoginPage";
import RegisterPage from "./components/home/RegisterPage";
import OpenClassPage from "./components/open-class/OpenClass";
import Post from "./components/post/Post";
import Reflections from "./components/reflections/reflections";
import WriteNew from "./components/reflections/writeNew";
import ClassesPage from "./components/classes/classes";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/open-class" element={<OpenClassPage />} />
        <Route path="/post" element={<Post />} />
        <Route path="/reflections" element={<Reflections />} />
        <Route path="/reflections/write-new" element={<WriteNew />} />
        <Route path="/classes" element={<ClassesPage />} />
      </Routes>
    </Router>
  );
}

export default App;