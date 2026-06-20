import React from 'react';

const Exp = () => {
  return (
    <section className="timeline-container">
      <h2 className="section-title">Work Experience</h2>
      <p className="section-subtitle">
        A timeline of my professional experience and software developer internships.
      </p>

      <div className="timeline">
        {/* Experience 1 */}
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="experience-card glass-panel">
            <div className="experience-card-header">
              <div className="experience-title-box">
                <h3>Software Engineer</h3>
                <span className="company">RideAlot Software Solution</span>
              </div>
              <span className="experience-duration">Sep 2025 – Present</span>
            </div>
            <ul>
              <li>Develop and maintain web services using React.js, Java Spring Boot, and Hibernate JPA.</li>
              <li>Design secure database models in MySQL to optimize query execution and data storage.</li>
              <li>Collaborate with cross-functional teams to integrate APIs and release responsive application updates.</li>
            </ul>
          </div>
        </div>

        {/* Experience 2 */}
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="experience-card glass-panel">
            <div className="experience-card-header">
              <div className="experience-title-box">
                <h3>Java Full Stack Developer Intern</h3>
                <span className="company">JSpiders Academy</span>
              </div>
              <span className="experience-duration">Jul 2024 – Jan 2025</span>
            </div>
            <ul>
              <li>Gained deep knowledge in Core Java, JDBC, Servlets, Hibernate, and SQL queries.</li>
              <li>Built client-side user interfaces with React and connected them to Java backends.</li>
              <li>Worked in simulated Agile sprints, conducting code reviews, testing, and continuous debugging.</li>
            </ul>
          </div>
        </div>

        {/* Experience 3 */}
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="experience-card glass-panel">
            <div className="experience-card-header">
              <div className="experience-title-box">
                <h3>Java Full Stack Developer Intern</h3>
                <span className="company">Karthikeya Software Solutions</span>
              </div>
              <span className="experience-duration">Jan 2024 – Jun 2024</span>
            </div>
            <ul>
              <li>Contributed to database designs and RESTful API routes under the guidance of senior developers.</li>
              <li>Created interactive web layouts using CSS3, HTML5, and JavaScript.</li>
              <li>Participated in troubleshooting production bugs and optimizing web page speeds.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Exp;