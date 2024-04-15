import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "../sidebar/Sidebar";
import "./Post.css";
import postImage from "./img/postimage.png";
import Header from "../header/Header";

function Post() {
  return (
    <>
      <Header />
      <div id="page-container" className="post">
        <Sidebar />
        <div className="postMain">
          <Link to="/classroom-opened" id="header-link">Back to classroom</Link>
          <div className="postwrapper">

            <div className="postHeader">
              <img src={postImage} alt="#" />
              <h1>Lecture 3</h1>
              <p>
                Thoughts and reflections about sustainability from todays class.
              </p>
            </div>
            
            <article className="postBody">
              <p>
                Today's class on sustainability deeply resonated with me,
                sparking a profound reflection on how we interact with our
                environment.
              </p>
            </article>
          </div>
        </div>
      </div>
    </>
  );
}

export default Post;
