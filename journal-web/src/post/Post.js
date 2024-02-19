import './Post.css'
import postImage from './img/postimage.png'
import logo from './img/logo.png'
import star from './img/star.png'
import group from './img/group.png'

function Post() {
  return (
    <div className="postContent">
      <div className="navigation">
        <img src={logo} alt="logo" />
        <p>Sustainability Diary</p>
      </div>
      <div className="post">
        <div className="postSidebar">
          <a className="sidebarButton" href="#">
            <img src={star} alt="#" />
            <p>My reflections</p>
          </a>
          <a className="sidebarButton" href="#">
            <img src={group} alt="#" />
            <p>Class</p>
          </a>
        </div>
        <div className="postMain">
          <a className="postBackButton" href="#">Back to feed</a>
          <div className="postwrapper">
            <div className="postHeader">
              <div className="postImage" >
                <img src={postImage} alt="#" />
              </div>
              <h1>Lecture 3</h1>
              <p>
                Thoughts and reflections about sustainability from todays class.
              </p>
            </div>
            <div className="postBody">
              <p>
                Today's class on sustainability deeply resonated with me, sparking a profound reflection on how we interact with our environment. We discussed the critical balance between development and the preservation of our natural world, emphasizing the urgent need for sustainable practices in every aspect of life. The concept of sustainability is not just about environmental protection but encompasses economic and social dimensions, ensuring equitable access to resources for all. This holistic approach challenges us to rethink our lifestyles, consumption patterns, and the impact of our daily choices. It's clear that achieving sustainability requires a collective effort, innovative solutions, and a commitment to making lasting changes for the betterment of our planet and future generations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
