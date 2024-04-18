import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "../sidebar/Sidebar";
import postImage from "./img/postimage.png";
import Header from "../header/Header";
import "./Post.css"

function Post() {
  return (
    <div>
      <Header />
      <div className="page-container">
        <Sidebar />
        <main className="main-content">
          <header className="page-header">
          <h1>Lecture 3</h1>
            <Link to="/classroom-opened" className="header-link">Back to classroom</Link>
          </header>
          <article className="post-wrapper">
            <img src={postImage} alt="Post" className="postimage" />
            <h1>Lecture 3</h1>
            <p>
              Thoughts and reflections about sustainability from today's class.
            </p>
            <div className="post-content">
              <p>
                Today's class on sustainability deeply resonated with me,
                sparking a profound reflection on how we interact with our
                environment.
              </p>
            </div>
          </article>
        </main>
      </div>
    </div>
  );
}

export default Post;
