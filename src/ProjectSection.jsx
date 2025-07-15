import React from 'react';
// import './ProjectSection.css';
import project1 from './assets/Emp Manage System.png';
import project2 from './assets/BioMetric E-coomrce.png';
import project3 from './assets/PixBay.png';

const ProjectSection = () => {
  return (
    <section className="project-container">
      <h2 className="project-title">My Projects</h2>
      <p className="project-description">
        Here are some of the web applications I've built using technologies like Java, Spring Boot, React, and MySQL.
      </p>

      <div className="project-grid">
        {/* Project 1 */}
        <div className="project-card">
          <img src={project1} alt="Project 1" />
          <h3>Employee Management System</h3>
          <p>
            A CRUD-based web app built with Java, Spring Boot, React, and MySQL to manage employee data efficiently.
          </p>
          <a href="https://github.com/nagayadav/EMP-Management" className="project-btn">View Project</a>
        </div>

        {/* Project 2 */}
        <div className="project-card">
          <img src={project2} alt="Project 2" />
          <h3>Biometric E-Commerce</h3>
          <p>
            An e-commerce site selling biometric devices with a user-friendly interface and secure backend APIs.
          </p>
          <a href="https://github.com/nagayadav" className="project-btn">View Project</a>
        </div>

        {/* Project 3 */}
        {/* <div className="project-card">
          <img src={project3} alt="Project 3" />
          <h3>Hobbies Recommendation App</h3>
          <p>
            A hobby suggestion app built using Spring Boot and React based on user preferences and behavior.
          </p>
          <a href="#" className="project-btn">View Project</a>
        </div> */}
         <div className="project-card">
          <img src={project3} alt="Project 3" />
          <h3>PixBay Application</h3>
          <p>
            PixBay is a user-friendly image search application that allows users to explore and download high-quality, royalty-free photos and videos.

          </p>
          <a href="https://github.com/nagayadav/PixBay-Application" className="project-btn">View Project</a>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
