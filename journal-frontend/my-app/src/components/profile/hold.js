import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/home/HomePage";
import LoginPage from "./components/home/LoginPage";
import RegisterPage from "./components/home/RegisterPage";
import ClassroomsPage from "./components/classrooms/classrooms";
import Post from "./components/post/Post";
import Reflections from "./components/reflections/reflections";
import WriteNew from "./components/reflections/writeNew";
import EditReflection from "./components/reflections/editReflection";
import OpenedClassPage from "./components/classroom-opened/classroom-opened";
import JoinClassPage from "./components/classrooms/join-class"
import CreateClassPage from "./components/create-class-teacher/CreateClass";
import Profile from "./components/profile/profile";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/classrooms" element={<ClassroomsPage />} />
        <Route path="/post" element={<Post />} />
        <Route path="/reflections/*" element={<Reflections />} />
        <Route path="/reflections/write-new" element={<WriteNew />} />
        <Route path="/reflections/edit-reflection" element={<EditReflection />} />
        <Route path="/classroom-opened" element={<OpenedClassPage />} />
        <Route path="/join-class" element={<JoinClassPage />} />
        <Route path="/create-class-teacher" element={<CreateClassPage />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
