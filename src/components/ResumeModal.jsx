import React from 'react';

const ResumeModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content glass-panel resume-modal" onClick={(e) => e.stopPropagation()}>
        <div className="scan-laser"></div>
        <button className="modal-close-btn" onClick={onClose}>✕</button>

        <div className="modal-header">
          <span className="modal-badge">OFFICIAL RESUME</span>
          <h2>Nagendra Babu Mekala - Full Stack Developer</h2>
        </div>

        <div className="resume-preview-body">
          <div className="resume-card-box">
            <h3>📄 Profile Summary</h3>
            <p>
              Dedicated Java Full Stack Developer with 1+ years of experience specializing in building robust RESTful backend services with <strong>Spring Boot, Hibernate, and MySQL</strong>, paired with high-performance <strong>React.js</strong> frontend interfaces.
            </p>
          </div>

          <div className="resume-grid-two">
            <div className="resume-card-box">
              <h3>⚡ Core Strengths</h3>
              <ul>
                <li>Java SE/EE & OOP Architecture</li>
                <li>Spring Boot & RESTful Microservices</li>
                <li>React.js SPA & Custom CSS Glassmorphism</li>
                <li>MySQL Database & Schema Design</li>
                <li>Git / GitHub Version Control</li>
              </ul>
            </div>

            <div className="resume-card-box">
              <h3>💼 Experience Snapshot</h3>
              <ul>
                <li><strong>Software Engineer</strong> @ RideAlott Software Solutions</li>
                <li><strong>Java Full Stack Intern</strong> @ JSpiders Academy</li>
                <li><strong>Java Full Stack Intern</strong> @ Karthikeya Solutions</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="modal-footer">
          <a 
            href="/Nagendra_Babu_Mekala.pdf" 
            download="Nagendra_Babu_Mekala_Resume.pdf"
            className="hero-primary-btn"
          >
            Download PDF Resume 📥
          </a>
          <a 
            href="/Nagendra_Babu_Mekala.pdf" 
            target="_blank" 
            rel="noreferrer"
            className="hero-secondary-btn"
          >
            View Full Screen PDF 👁️
          </a>
        </div>
      </div>
    </div>
  );
};

export default ResumeModal;
