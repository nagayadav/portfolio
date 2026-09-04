import React, { useState } from "react";

const AboutSection = () => {
  const [activeTab, setActiveTab] = useState("education");

  return (
    <div className="about-section-wrapper">
      <section className="about-container" id="about">
        <h2 className="section-title">
          ABOUT <span className="highlight-text">ME</span>
        </h2>
        
        <p className="about-header-desc">
          I am a <strong>B.Tech graduate in Electronics and Communication Engineering</strong> who discovered a strong passion for software architecture and web development. Through continuous self-directed learning, intensive academy training, and hands-on full-stack project building, I successfully transitioned into full-stack engineering with expertise across <strong>Java, Spring Boot, React, and MySQL</strong>.
        </p>

        {/* Tabs Navigation */}
        <div className="about-tabs-nav">
          <button 
            className={`tab-nav-btn ${activeTab === 'personal' ? 'active' : ''}`}
            onClick={() => setActiveTab('personal')}
          >
            👤 Personal Profile
          </button>
          <button 
            className={`tab-nav-btn ${activeTab === 'skills' ? 'active' : ''}`}
            onClick={() => setActiveTab('skills')}
          >
            ⚡ Technical Matrix
          </button>
          <button 
            className={`tab-nav-btn ${activeTab === 'education' ? 'active' : ''}`}
            onClick={() => setActiveTab('education')}
          >
            🎓 Education Journey
          </button>
          <button 
            className={`tab-nav-btn ${activeTab === 'certs' ? 'active' : ''}`}
            onClick={() => setActiveTab('certs')}
          >
            📜 Certifications
          </button>
        </div>

        {/* Tabs Content panels */}
        <div className="about-tab-panel glass-panel">
          <div className="scan-laser"></div>
          
          {/* Tab 1: Profile / Personal Info */}
          {activeTab === 'personal' && (
            <div className="info-grid animate-fade">
              <div className="info-item">
                <span className="info-label">Full Name</span>
                <span className="info-value">Nagendra Babu Mekala</span>
              </div>
              <div className="info-item">
                <span className="info-label">Date of Birth</span>
                <span className="info-value">02 June 2003</span>
              </div>
              <div className="info-item">
                <span className="info-label">Languages</span>
                <span className="info-value">English (Professional), Telugu (Native)</span>
              </div>
              <div className="info-item">
                <span className="info-label">Email Address</span>
                <span className="info-value email-value">nagendrababuyadav2003@gmail.com</span>
              </div>
              <div className="info-item">
                <span className="info-label">Phone / Mobile</span>
                <span className="info-value">+91 9908238544</span>
              </div>
              <div className="info-item">
                <span className="info-label">Location</span>
                <span className="info-value">Andhra Pradesh, India</span>
              </div>
              <div className="info-item full-width">
                <span className="info-label">Core Interests</span>
                <span className="info-value">Full Stack Web Architecture, RESTful Services, SQL Query Optimization, UI/UX Micro-Interactions</span>
              </div>
            </div>
          )}

          {/* Tab 2: Technical Skills Matrix */}
          {activeTab === 'skills' && (
            <div className="skills-grid animate-fade">
              <div className="skills-category-card">
                <h4>🌱 Backend & Database Stack</h4>
                
                <div className="skill-item">
                  <div className="skill-info">
                    <span className="skill-name">Java SE & OOP Architecture</span>
                    <span className="skill-percentage">90%</span>
                  </div>
                  <div className="skill-bar-bg">
                    <div className="skill-bar-fill" style={{ width: '90%' }}></div>
                  </div>
                </div>

                <div className="skill-item">
                  <div className="skill-info">
                    <span className="skill-name">Spring Boot Framework & REST APIs</span>
                    <span className="skill-percentage">88%</span>
                  </div>
                  <div className="skill-bar-bg">
                    <div className="skill-bar-fill" style={{ width: '88%' }}></div>
                  </div>
                </div>

                <div className="skill-item">
                  <div className="skill-info">
                    <span className="skill-name">Hibernate ORM & JPA</span>
                    <span className="skill-percentage">82%</span>
                  </div>
                  <div className="skill-bar-bg">
                    <div className="skill-bar-fill" style={{ width: '82%' }}></div>
                  </div>
                </div>

                <div className="skill-item">
                  <div className="skill-info">
                    <span className="skill-name">MySQL & Schema Design</span>
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

              <div className="skills-category-card">
                <h4>⚛️ Frontend & Integration Stack</h4>

                <div className="skill-item">
                  <div className="skill-info">
                    <span className="skill-name">React.js & Next.js</span>
                    <span className="skill-percentage">88%</span>
                  </div>
                  <div className="skill-bar-bg">
                    <div className="skill-bar-fill" style={{ width: '88%' }}></div>
                  </div>
                </div>

                <div className="skill-item">
                  <div className="skill-info">
                    <span className="skill-name">JavaScript (ES6+) & Async Logic</span>
                    <span className="skill-percentage">86%</span>
                  </div>
                  <div className="skill-bar-bg">
                    <div className="skill-bar-fill" style={{ width: '86%' }}></div>
                  </div>
                </div>

                <div className="skill-item">
                  <div className="skill-info">
                    <span className="skill-name">HTML5 & CSS3 Glassmorphism</span>
                    <span className="skill-percentage">92%</span>
                  </div>
                  <div className="skill-bar-bg">
                    <div className="skill-bar-fill" style={{ width: '92%' }}></div>
                  </div>
                </div>

                <div className="skill-item">
                  <div className="skill-info">
                    <span className="skill-name">Git & GitHub Version Control</span>
                    <span className="skill-percentage">85%</span>
                  </div>
                  <div className="skill-bar-bg">
                    <div className="skill-bar-fill" style={{ width: '85%' }}></div>
                  </div>
                </div>

                <div className="skill-item">
                  <div className="skill-info">
                    <span className="skill-name">REST API Integration & JSON</span>
                    <span className="skill-percentage">90%</span>
                  </div>
                  <div className="skill-bar-bg">
                    <div className="skill-bar-fill" style={{ width: '90%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Tab 3: Education */}
          {activeTab === 'education' && (
            <div className="education-timeline-grid animate-fade">
              <div className="edu-card">
                <div className="edu-header">
                  <span className="edu-year">2020 – 2024</span>
                  <span className="edu-tag">Bachelor Degree</span>
                </div>
                <h3 className="edu-degree">B.Tech in Electronics & Communication (ECE)</h3>
                <p className="edu-school">🏛️ JNTU Anantapur</p>
                <p className="edu-grade">Academic Score: <span>CGPA 7.4 / 10</span></p>
              </div>
              
              <div className="edu-card">
                <div className="edu-header">
                  <span className="edu-year">2018 – 2020</span>
                  <span className="edu-tag">Higher Secondary</span>
                </div>
                <h3 className="edu-degree">Intermediate (MPC - Math, Physics, Chem)</h3>
                <p className="edu-school">🏫 Priyadharshini Jr. College</p>
                <p className="edu-grade">Academic Score: <span>CGPA 8.11 / 10</span></p>
              </div>

              <div className="edu-card">
                <div className="edu-header">
                  <span className="edu-year">2018</span>
                  <span className="edu-tag">Secondary School</span>
                </div>
                <h3 className="edu-degree">SSC (Secondary School Certificate)</h3>
                <p className="edu-school">🏫 Z.P.P. High School, Revur</p>
                <p className="edu-grade">Academic Score: <span>CGPA 7.7 / 10</span></p>
              </div>
            </div>
          )}

          {/* Tab 4: Certifications */}
          {activeTab === 'certs' && (
            <div className="certs-grid animate-fade">
              <div className="cert-card">
                <div className="cert-icon">💻</div>
                <div className="cert-info">
                  <h4>Java Full Stack Developer Certification</h4>
                  <p>Karthikeya Software Solutions</p>
                  <span className="cert-badge">Verified</span>
                </div>
              </div>

              <div className="cert-card">
                <div className="cert-icon">☕</div>
                <div className="cert-info">
                  <h4>Java Full Stack Development Specialization</h4>
                  <p>JSpiders Academy</p>
                  <span className="cert-badge">Verified</span>
                </div>
              </div>

              <div className="cert-card">
                <div className="cert-icon">🌱</div>
                <div className="cert-info">
                  <h4>Spring Boot & Microservices REST APIs</h4>
                  <p>Udemy Professional Training</p>
                  <span className="cert-badge">Verified</span>
                </div>
              </div>

              <div className="cert-card">
                <div className="cert-icon">⚛️</div>
                <div className="cert-info">
                  <h4>React.js Modern Web Development</h4>
                  <p>FreeCodeCamp Academy</p>
                  <span className="cert-badge">Verified</span>
                </div>
              </div>
            </div>
          )}

        </div>
      </section>
    </div>
  );
};

export default AboutSection;
