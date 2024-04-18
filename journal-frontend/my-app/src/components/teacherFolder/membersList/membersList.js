import React from "react";
import Header from "../../header/Header";
import woman from "./woman.svg";
import man from "./man.svg";
import listIcon from "../../commonImages/list.svg";

import SidebarTeacher from "../sidebarTeacher/SidebarTeacher";

function MembersList() {
  return (
    <div>
      <Header />
      <div className="page-container">
        <SidebarTeacher />
        <main className="main-content">
          <header className="page-header">
            <img src={listIcon} alt="Members List" className="page-image" />
            <h1 className="page-title">Members List</h1>
          </header>
          <section className="lectures-container">
            <div className="memberslist">
              <div className="class-card">
                <h2>Username</h2>
                <div className="info-wrapper">
                  <ul>
                    <li><img src={woman} alt="Profile" className="profile-image" /> agekarl</li>
                    <li><img src={man} alt="Profile" className="profile-image" /> ronduc</li>
                    <li><img src={woman} alt="Profile" className="profile-image" /> hegols</li>
                    <li><img src={man} alt="Profile" className="profile-image" /> nilpet</li>
                  </ul>
                </div>
              </div>
              <div className="class-card">
                <h2>First name</h2>
                <div className="info-wrapper">
                  <ul>
                    <li>Agnete</li>
                    <li>Ronald</li>
                    <li>Hege</li>
                    <li>Nils</li>
                  </ul>
                </div>
              </div>
              <div className="class-card">
                <h2>Last name</h2>
                <div className="info-wrapper">
                  <ul>
                    <li>Karlsen</li>
                    <li>Duck</li>
                    <li>Olsen</li>
                    <li>Petter</li>
                  </ul>
                </div>
              </div>
              <div className="class-card">
                <h2>Email</h2>
                <div className="info-wrapper">
                  <ul>
                    <li>agekarl@stud.ntnu.no</li>
                    <li>ronduc@stud.ntnu.no</li>
                    <li>hegols@stud.ntnu.no</li>
                    <li>nilpet@stud.ntnu.no</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default MembersList;
