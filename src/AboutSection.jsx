import React from "react";

const AboutSection = () => {
  return (
    <section className="about-container">
      <h2 className="about-title">About Me</h2>
      <p className="about-description">
        I'm a <strong>B.Tech graduate in Electronics and Communication Engineering</strong>, passionate about software development and skilled in Java, Spring Boot, and web technologies. From a non-IT background, I transitioned into tech through dedication and continuous learning.
      </p>

      

       
<div className="about-cards">
   {/* Personal Info Card */}
        <div className="about-card">
          <h3>🧾 Personal Info</h3>
          <p><strong>DOB:</strong> 02 June 2003</p>
          <p><strong>Languages:</strong> English, Telugu</p>
          <p><strong>Email:</strong> nagendrababuyadav2003@gmail.com</p>
          <p><strong>Phone:</strong> +91 9908238544</p>
          <p><strong>Location:</strong> Andhra Pradesh, India</p>
        </div>
        {/* Education Card */}
        <div className="about-card">
          <h3>🎓 Education</h3>
          <p>
            <strong>B.Tech in ECE</strong><br />
            JNTU Anantapur, 2024<br />
            CGPA: <span className="highlight">7.4</span>
          </p>
          <hr />
          <p>
            <strong>Intermediate (MPC)</strong><br />
            Priyadharshini Jr. College, 2020<br />
            CGPA: <span className="highlight">8.11</span>
          </p>
          <hr />
          <p>
            <strong>SSC</strong><br />
            Z.P.P. High School, Revur, 2018<br />
            CGPA: <span className="highlight">7.7</span>
          </p>
        </div>
        {/* Strengths, Goals, Certifications */}
        <div className="about-card">
          <h3>📜 Certifications</h3>
          <ul>
            <li>Java Full Stack Development - JSpiders</li>
            <li>Spring Boot & REST APIs - Udemy</li>
            <li>React Basics - FreeCodeCamp</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
