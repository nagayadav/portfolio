import React from 'react';

const experiences = [
  {
    title: "Software Engineer",
    company: "RideAlott Software Solutions",
    location: "Corporate Office",
    duration: "Sep 2025 – Present",
    type: "Full-Time",
    icon: "🚀",
    highlights: [
      "Engineered client web platform features using React, JavaScript (ES6+), and CSS layout systems.",
      "Collaborated with backend engineers to consume RESTful APIs and ensure seamless database integration.",
      "Optimized frontend performance, UI navigation flows, and cross-browser responsiveness."
    ],
    tech: ["React", "JavaScript", "HTML5/CSS3", "REST APIs", "Git"]
  },
  {
    title: "Java Full Stack Developer Intern",
    company: "JSpiders Academy",
    location: "Training Hub",
    duration: "Jul 2024 – Jan 2025",
    type: "Internship & Specialization",
    icon: "🎓",
    highlights: [
      "Mastered Java SE/EE core principles, OOP design, Collections Framework, Multithreading, and Exception Handling.",
      "Developed Spring Boot REST API micro-services connected with MySQL databases via Hibernate ORM.",
      "Built full-stack CRUD applications integrating React UI frontend components with Spring controllers."
    ],
    tech: ["Java", "Spring Boot", "Hibernate", "MySQL", "React", "Servlets"]
  },
  {
    title: "Java Full Stack Developer Intern",
    company: "Karthikeya Software Solutions",
    location: "Project Development",
    duration: "Jan 2024 – Jun 2024",
    type: "Internship",
    icon: "💻",
    highlights: [
      "Assisted in backend database schema designs and SQL query optimization for enterprise directories.",
      "Implemented JDBC database handlers, Servlets, and MVC design pattern structures.",
      "Participated in agile code reviews, debugging, and client requirement analysis."
    ],
    tech: ["Java", "JDBC", "Servlets", "SQL", "HTML/CSS"]
  }
];

const Exp = () => {
  return (
    <div className="experience-section-wrapper">
      <section className="timeline-container" id="experience">
        <h2 className="section-title">WORK <span className="highlight-text">EXPERIENCE</span></h2>
        <p className="section-subtitle">
          A timeline highlighting my hands-on software engineering experience, enterprise project implementations, and professional full-stack development journey.
        </p>

        <div className="timeline">
          {experiences.map((item, idx) => (
            <div className="timeline-item" key={idx}>
              <div className="timeline-dot-glow"></div>
              <div className="experience-card glass-panel">
                <div className="scan-laser"></div>
                <div className="cyber-corner-tl"></div>
                <div className="cyber-corner-br"></div>
                
                <div className="experience-card-header">
                  <div className="experience-title-box">
                    <div className="exp-role-badge">
                      <span className="exp-icon">{item.icon}</span>
                      <h3>{item.title}</h3>
                    </div>
                    <span className="company">🏢 {item.company}</span>
                  </div>
                  <div className="exp-meta-badge">
                    <span className="experience-duration">{item.duration}</span>
                    <span className="exp-type-tag">{item.type}</span>
                  </div>
                </div>

                <ul className="exp-highlights-list">
                  {item.highlights.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>

                <div className="exp-tech-tags">
                  {item.tech.map((t, i) => (
                    <span key={i} className="exp-tag">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Exp;