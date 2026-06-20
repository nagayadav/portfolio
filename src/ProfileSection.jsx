import React, { useState, useEffect } from "react";
import profileImg from "./assets/MEKALA NAGEDRABABU photo.jpg";
import CyberTerminal from "./components/CyberTerminal";

const roles = [
  "Java Full Stack Developer",
  "Software Engineer",
  "Spring Boot Specialist",
  "React Developer"
];

const ProfileSec = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    let timer;
    const fullText = roles[currentRoleIndex];

    const handleType = () => {
      if (!isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length + 1));
        setTypingSpeed(100);

        if (currentText === fullText) {
          timer = setTimeout(() => setIsDeleting(true), 2000);
          return;
        }
      } else {
        setCurrentText(fullText.substring(0, currentText.length - 1));
        setTypingSpeed(45);

        if (currentText === "") {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }

      timer = setTimeout(handleType, typingSpeed);
    };

    timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentRoleIndex, typingSpeed]);

  const handleContactClick = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="profile-container">
      <div className="left-section">
        <div className="description">
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap', marginBottom: '10px' }}>
            <img 
              src={profileImg} 
              alt="Nagendra Babu Mekala Avatar" 
              style={{
                width: '74px',
                height: '74px',
                objectFit: 'cover',
                borderRadius: '50%',
                border: '2.5px solid var(--accent-cyan)',
                boxShadow: '0 0 15px rgba(0, 255, 195, 0.35)',
              }}
            />
            <div>
              <h4>
                I am a <span style={{ color: 'var(--accent-cyan)' }}>{currentText}</span>
                <span className="typewriter-cursor">_</span>
              </h4>
              <h2 style={{ fontSize: '2.5rem' }}>Nagendra Babu Mekala</h2>
            </div>
          </div>
          <p>
            Hi, I'm a curious and committed Full Stack Developer who loves crafting modern web applications that are both highly functional and user-friendly. I specialize in building robust backend services using <strong>Java & Spring Boot</strong>, and creating responsive, elegant user interfaces with <strong>React</strong>. 
          </p>
          <p>
            I focus on writing clean, scalable code that solves real-world challenges. Let's collaborate to build something amazing!
          </p>
        </div>

        <div className="hero-footer">
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}>
            <button className="primary-btn" onClick={handleContactClick}>
              Let's Talk
              <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
            
            <div className="hero-socials">
              <a 
                href="https://www.linkedin.com/in/nagendrababumekala/" 
                target="_blank" 
                rel="noreferrer" 
                className="social-btn" 
                title="LinkedIn"
              >
                <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a 
                href="https://github.com/nagayadav" 
                target="_blank" 
                rel="noreferrer" 
                className="social-btn" 
                title="GitHub"
              >
                <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
              <a 
                href="mailto:nagendrababuyadav2003@gmail.com" 
                className="social-btn" 
                title="Email Me"
              >
                <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </a>
            </div>
          </div>

          <div className="quick-stack">
            <span className="quick-stack-badge">Java</span>
            <span className="quick-stack-badge">Spring Boot</span>
            <span className="quick-stack-badge">Hibernate / JPA</span>
            <span className="quick-stack-badge">React.js</span>
            <span className="quick-stack-badge">JavaScript (ES6+)</span>
            <span className="quick-stack-badge">MySQL</span>
            <span className="quick-stack-badge">REST APIs</span>
            <span className="quick-stack-badge">HTML5 & CSS3</span>
          </div>
        </div>
      </div>

      <div className="right-section">
        <CyberTerminal />
      </div>
    </section>
  );
};

export default ProfileSec;
