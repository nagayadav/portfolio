import React, { useState } from "react";

const AboutSection = () => {
  const [activeTab, setActiveTab] = useState("personal");

  return (
    <section className="about-container">
      <h2 className="section-title">About Me</h2>
      <p className="about-header-desc">
        I am a <strong>B.Tech graduate in Electronics and Communication Engineering</strong> who discovered a passion for software development. I transitioned from a non-IT background into software development through continuous training, self-directed learning, and hands-on project creation.
      </p>

      {/* Tabs Navigation */}
      <div className="about-tabs-nav">
        <button 
          className={`tab-nav-btn ${activeTab === 'personal' ? 'active' : ''}`}
          onClick={() => setActiveTab('personal')}
        >
          🧾 Profile
        </button>
        <button 
          className={`tab-nav-btn ${activeTab === 'skills' ? 'active' : ''}`}
          onClick={() => setActiveTab('skills')}
        >
          ⚡ Technical Skills
        </button>
        <button 
          className={`tab-nav-btn ${activeTab === 'education' ? 'active' : ''}`}
          onClick={() => setActiveTab('education')}
        >
          🎓 Education
        </button>
        <button 
          className={`tab-nav-btn ${activeTab === 'certs' ? 'active' : ''}`}
          onClick={() => setActiveTab('certs')}
        >
          📜 Certifications
        </button>
      </div>

      {/* Tabs Content panels */}
      <div className="about-tab-panel">
        
        {/* Tab 1: Personal Info */}
        {activeTab === 'personal' && (
          <div className="info-grid animate-fade">
            <div className="info-item">
              <span className="info-label">Date of Birth</span>
              <span className="info-value">02 June 2003</span>
            </div>
            <div className="info-item">
              <span className="info-label">Languages</span>
              <span className="info-value">English, Telugu</span>
            </div>
            <div className="info-item">
              <span className="info-label">Email</span>
              <span className="info-value">nagendrababuyadav2003@gmail.com</span>
            </div>
            <div className="info-item">
              <span className="info-label">Phone</span>
              <span className="info-value">+91 9908238544</span>
            </div>
            <div className="info-item">
              <span className="info-label">Location</span>
              <span className="info-value">Andhra Pradesh, India</span>
            </div>
            <div className="info-item">
              <span className="info-label">Interests</span>
              <span className="info-value">Web Tech, Database Design, System Logic</span>
            </div>
          </div>
        )}

        {/* Tab 2: Technical Skills Matrix */}
        {activeTab === 'skills' && (
          <div className="skills-grid">
            {/* Category 1: Backend */}
            <div className="skills-category-card glass-panel">
              <div className="scan-laser"></div>
              <h4>Backend & Core Stack</h4>
              
              <div className="skill-item">
                <div className="skill-info">
                  <span className="skill-name">Java SE (Core & Advanced)</span>
                  <span className="skill-percentage">90%</span>
                </div>
                <div className="skill-bar-bg">
                  <div className="skill-bar-fill" style={{ width: '90%' }}></div>
                </div>
              </div>

              <div className="skill-item">
                <div className="skill-info">
                  <span className="skill-name">Spring Boot Framework</span>
                  <span className="skill-percentage">85%</span>
                </div>
                <div className="skill-bar-bg">
                  <div className="skill-bar-fill" style={{ width: '85%' }}></div>
                </div>
              </div>

              <div className="skill-item">
                <div className="skill-info">
                  <span className="skill-name">Hibernate ORM / JPA</span>
                  <span className="skill-percentage">80%</span>
                </div>
                <div className="skill-bar-bg">
                  <div className="skill-bar-fill" style={{ width: '80%' }}></div>
                </div>
              </div>

              <div className="skill-item">
                <div className="skill-info">
                  <span className="skill-name">SQL Database & Schema Design</span>
                  <span className="skill-percentage">85%</span>
                </div>
                <div className="skill-bar-bg">
                  <div className="skill-bar-fill" style={{ width: '85%' }}></div>
                </div>
              </div>

              <div className="skill-item">
                <div className="skill-info">
                  <span className="skill-name">JDBC & Servlets</span>
                  <span className="skill-percentage">80%</span>
                </div>
                <div className="skill-bar-bg">
                  <div className="skill-bar-fill" style={{ width: '80%' }}></div>
                </div>
              </div>
            </div>

            {/* Category 2: Frontend */}
            <div className="skills-category-card glass-panel">
              <div className="scan-laser"></div>
              <h4>Frontend & Integration Stack</h4>

              <div className="skill-item">
                <div className="skill-info">
                  <span className="skill-name">React.js SPA</span>
                  <span className="skill-percentage">80%</span>
                </div>
                <div className="skill-bar-bg">
                  <div className="skill-bar-fill" style={{ width: '80%' }}></div>
                </div>
              </div>

              <div className="skill-item">
                <div className="skill-info">
                  <span className="skill-name">JavaScript (ES6+)</span>
                  <span className="skill-percentage">85%</span>
                </div>
                <div className="skill-bar-bg">
                  <div className="skill-bar-fill" style={{ width: '85%' }}></div>
                </div>
              </div>

              <div className="skill-item">
                <div className="skill-info">
                  <span className="skill-name">HTML5 & CSS3 Design</span>
                  <span className="skill-percentage">90%</span>
                </div>
                <div className="skill-bar-bg">
                  <div className="skill-bar-fill" style={{ width: '90%' }}></div>
                </div>
              </div>

              <div className="skill-item">
                <div className="skill-info">
                  <span className="skill-name">RESTful Web API Integration</span>
                  <span className="skill-percentage">85%</span>
                </div>
                <div className="skill-bar-bg">
                  <div className="skill-bar-fill" style={{ width: '85%' }}></div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Education */}
        {activeTab === 'education' && (
          <div className="education-timeline-grid">
            <div className="edu-card">
              <span className="edu-year">2020 – 2024</span>
              <h3 className="edu-degree">B.Tech in ECE</h3>
              <p className="edu-school">JNTU Anantapur</p>
              <p className="edu-grade">Result: CGPA <span>7.4 / 10</span></p>
            </div>
            
            <div className="edu-card">
              <span className="edu-year">2018 – 2020</span>
              <h3 className="edu-degree">Intermediate (MPC)</h3>
              <p className="edu-school">Priyadharshini Jr. College</p>
              <p className="edu-grade">Result: CGPA <span>8.11 / 10</span></p>
            </div>

            <div className="edu-card">
              <span className="edu-year">2018</span>
              <h3 className="edu-degree">SSC (Secondary School)</h3>
              <p className="edu-school">Z.P.P. High School, Revur</p>
              <p className="edu-grade">Result: CGPA <span>7.7 / 10</span></p>
            </div>
          </div>
        )}

        {/* Tab 4: Certifications */}
        {activeTab === 'certs' && (
          <div className="certs-grid">
            <div className="cert-card">
              <div className="cert-icon">☕</div>
              <div className="cert-info">
                <h4>Java Full Stack Development</h4>
                <p>JSpiders Academy</p>
              </div>
            </div>

            <div className="cert-card">
              <div className="cert-icon">🌱</div>
              <div className="cert-info">
                <h4>Spring Boot & REST APIs</h4>
                <p>Udemy Professional Training</p>
              </div>
            </div>

            <div className="cert-card">
              <div className="cert-icon">⚛️</div>
              <div className="cert-info">
                <h4>React Basics Certification</h4>
                <p>FreeCodeCamp Academy</p>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default AboutSection;
