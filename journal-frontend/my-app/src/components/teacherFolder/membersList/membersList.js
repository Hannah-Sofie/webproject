import React from "react";
import Header from "../../header/Header";
import "./membersList.css";
import woman from "./woman.svg";
import man from "./man.svg";
import listIcon from "../../commonImages/list.svg";

import SidebarTeacher from "../sidebarTeacher/SidebarTeacher";

function MembersList() {
  return (
    <div>
      <Header />
      <div className="membersListContainer">
        <SidebarTeacher />
        <div className="memberslistBody">
          <div className="memberslistHeader">
            <img src={listIcon} alt="Members List" className="classnav-image" />
            <h1>Members List</h1>
          </div>
          <div className="memberslistMain">
            <div className="memberslist">
              <div className="memberslist-item">
                <h2>Username</h2>
                <div className="usernameWrapper">
                  <ul>
                    <li>
                      <img
                        src={woman}
                        alt="Profile"
                        className="profile-image"
                      />{" "}
                      agekarl
                    </li>
                    <li>
                      <img src={man} alt="Profile" className="profile-image" />{" "}
                      ronduc
                    </li>
                    <li>
                      <img
                        src={woman}
                        alt="Profile"
                        className="profile-image"
                      />{" "}
                      hegols
                    </li>
                    <li>
                      <img src={man} alt="Profile" className="profile-image" />{" "}
                      nilpet
                    </li>
                  </ul>
                </div>
              </div>
              <div className="memberslist-item">
                <h2>First name</h2>
                <div className="firstnameWrapper">
                  <ul>
                    <li>Agnete</li>
                    <li>Ronald</li>
                    <li>Hege</li>
                    <li>Nils</li>
                  </ul>
                </div>
              </div>
              <div className="memberslist-item">
                <h2>Last name</h2>
                <div className="lastnameWrapper">
                  <ul>
                    <li>Karlsen</li>
                    <li>Duck</li>
                    <li>Olsen</li>
                    <li>Petter</li>
                  </ul>
                </div>
              </div>
              <div className="memberslist-item">
                <h2>Email</h2>
                <div className="emailWrapper">
                  <ul>
                    <li>agekarl@stud.ntnu.no</li>
                    <li>ronduc@stud.ntnu.no</li>
                    <li>hegols@stud.ntnu.no</li>
                    <li>nilpet@stud.ntnu.no</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MembersList;
