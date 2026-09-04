import React, { useState, useEffect } from "react";
import profileImg from "./assets/MEKALA NAGEDRABABU photo.jpg";
import ResumeModal from "./components/ResumeModal";
import { soundFx } from "./utils/audioSynth";

const skills = [
  "Java",
  "Spring Boot",
  "Hibernate / JPA",
  "MySQL",
  "React.js",
  "Next.js",
  "JavaScript (ES6+)",
  "HTML5 & CSS3",
  "REST APIs",
];

const roles = [
  "Java Full Stack Developer",
  "Freelance Software Developer",
  "Spring Boot Backend Engineer",
  "React Frontend Developer",
  "Custom Web App Freelancer",
];

const ProfileSec = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(120);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  useEffect(() => {
    const fullText = roles[currentRoleIndex];

    const handleTyping = () => {
      if (!isDeleting) {
        setDisplayedText(fullText.substring(0, displayedText.length + 1));
        if (displayedText === fullText) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setDisplayedText(fullText.substring(0, displayedText.length - 1));
        if (displayedText === "") {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    };

    const timer = setTimeout(handleTyping, isDeleting ? 60 : typingSpeed);
    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentRoleIndex, typingSpeed]);

  const handleScrollToContact = () => {
    soundFx.playClick();
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleOpenResume = () => {
    soundFx.playChime();
    setIsResumeOpen(true);
  };

  return (
    <div className="hero-container">
      <section className="hero">
        <div className="hero-left">
          <div className="hero-badge">
            <span className="pulse-dot"></span> Available for Full-Time Roles & Freelance Projects 🚀
          </div>
          
          <h1 className="hero-name">Nagendra Babu Mekala</h1>
          
          <div className="hero-typewriter">
            <span className="typewriter-prefix">I am a </span>
            <span className="typewriter-text">{displayedText}</span>
            <span className="typewriter-cursor">|</span>
          </div>

          <p className="hero-bio">
            Hi, I'm Nagendra — a committed Java Full Stack Developer & Freelance Software Engineer focused on architecting robust backend APIs with <strong>Spring Boot & Hibernate</strong> and building slick, custom web applications for clients with <strong>React</strong>. I transform complex business ideas into scalable, production-ready software solutions.
          </p>

          <div className="hero-actions">
            <button className="hero-primary-btn" onClick={handleScrollToContact}>
              Get In Touch ➔
            </button>
            <button className="hero-secondary-btn" onClick={handleOpenResume}>
              View Resume 📄
            </button>
          </div>

          {/* Quick Metrics Counter Bar */}
          <div className="hero-stats-grid">
            <div className="stat-card">
              <span className="stat-number">1+</span>
              <span className="stat-label">Years Exp</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">4+</span>
              <span className="stat-label">Major Projects</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">10+</span>
              <span className="stat-label">Core Techs</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">100%</span>
              <span className="stat-label">Dedication</span>
            </div>
          </div>

          <div className="skills-card glass-panel">
            <h2>Primary Tech Stack</h2>
            <div className="skills">
              {skills.map((skill) => (
                <span key={skill} className="skill-pill" onClick={() => soundFx.playClick()}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="hero-right">
          <div className="profile-img-frame">
            <div className="cyber-frame-border"></div>
            <img src={profileImg} alt="Nagendra Babu Mekala" className="profile-img" />
            <div className="profile-img-badge">
              <span>☕ Java & React</span>
            </div>
          </div>
        </div>
      </section>

      {/* Resume Viewer Modal */}
      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </div>
  );
};

export default ProfileSec;