import React from "react";
import profileImg from "./assets/MEKALA NAGEDRABABU photo.jpg"; // replace with your image path

const ProfileSec = () => {
  return (
    <div className="profile-container">
      <div className="left-section">
        <div className="description">
          <h2>Nagendra Babu Mekala</h2>
          <h4>- Full Stack Developer</h4>
          <p>
            Hi, I'm Nagendra Babu Mekala — a curious and committed Java Full
            Stack Developer who loves crafting full-stack web apps that are both
            functional and user-friendly. I work mainly with Java, Spring Boot,
            React, and MySQL, and enjoy building clean, scalable code that
            solves real problems. Whether it's designing a database or bringing
            a UI to life, I thrive on learning new things and turning ideas into
            working solutions. I'm currently looking to collaborate, grow, and
            take on new challenges in the world of software development.
          </p>
        </div>
        <div className="skills">
          <h3>Skills</h3>
          <ul>
            <li>Java</li>
             <li>JDBC</li>
            <li>Servlets</li>
            <li>Spring</li>
            <li>Spring Boot</li>
            <li>SQL</li>
            <li>React</li>
            <li>HTML, CSS, JavaScript</li>
           
          </ul>
        </div>
      </div>

      <div className="right-section">
        <img src={profileImg} alt="Nagendra Babu Mekala" />
      </div>
    </div>
  );
};

export default ProfileSec;
