import React from "react";
import Header from "../../header/Header";
import woman from "./woman.svg";
import man from "./man.svg";
import listIcon from "../../commonImages/list.svg";

import SidebarTeacher from "../sidebarTeacher/SidebarTeacher";
import "./membersList.css"; // Ensure you have the correct path to your CSS file

function MembersList() {
  const membersData = [
    {
      id: 1,
      username: "agekarl",
      firstName: "Agnete",
      lastName: "Karlsen",
      email: "agekarl@stud.ntnu.no",
      gender: "female",
    },
    {
      id: 2,
      username: "ronduc",
      firstName: "Ronald",
      lastName: "Duck",
      email: "ronduc@stud.ntnu.no",
      gender: "male",
    },
    {
      id: 3,
      username: "hegols",
      firstName: "Hege",
      lastName: "Olsen",
      email: "hegols@stud.ntnu.no",
      gender: "female",
    },
    {
      id: 4,
      username: "nilpet",
      firstName: "Nils",
      lastName: "Petter",
      email: "nilpet@stud.ntnu.no",
      gender: "male",
    },
  ];

  return (
    <div>
      <Header />
      <div className="page-container">
        <SidebarTeacher />
        <main className="main-content">
          <header className="page-header">
            <div className="banner">
              <img src={listIcon} alt="Members List" className="page-image" />
              <h1>Members List</h1>
            </div>
          </header>
          <section className="full-width">
            {membersData.map((member, index) => (
              <article key={index} className="flex-item-full-width">
                <img src={member.gender === "female" ? woman : man} alt="Profile" className="profile-image" />
                <h2>{member.username}</h2>
                <p>{member.firstName}</p>
                <p>{member.lastName}</p>
                <p>{member.email}</p>
              </article>
            ))}
          </section>
        </main>
      </div>
    </div>
  );
}

export default MembersList;
