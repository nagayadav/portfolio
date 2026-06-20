import React from "react";

const ServicesSection = () => {
  return (
    <section className="services-container">
      <h2 className="section-title">My Services</h2>
      <p className="section-subtitle">
        I offer comprehensive web development services tailored to build modern, responsive, and scalable applications.
      </p>

      <div className="services-grid">
        {/* Web Development */}
        <div className="service-card">
          <div className="card-inner">
            <div className="card-front glass-panel">
              <div className="card-front-icon">
                <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1.2em" width="1.2em" xmlns="http://www.w3.org/2000/svg">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                  <line x1="8" y1="21" x2="16" y2="21"></line>
                  <line x1="12" y1="17" x2="12" y2="21"></line>
                </svg>
              </div>
              <div>
                <h3>Web Development</h3>
                <p>Building responsive, accessible, and user-centric web interfaces using modern standards and practices.</p>
              </div>
              <span className="card-front-arrow">Flip Card ➔</span>
            </div>
            <div className="card-back glass-panel">
              <h4>Web Development</h4>
              <ul>
                <li>Responsive UI with HTML/CSS</li>
                <li>Single Page Apps with React</li>
                <li>Clean, performant JavaScript</li>
                <li>Cross-browser compatibility</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Backend Development */}
        <div className="service-card">
          <div className="card-inner">
            <div className="card-front glass-panel">
              <div className="card-front-icon">
                <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1.2em" width="1.2em" xmlns="http://www.w3.org/2000/svg">
                  <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                  <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
                  <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3"></path>
                </svg>
              </div>
              <div>
                <h3>Backend Development</h3>
                <p>Designing secure RESTful APIs, robust database architectures, and server side structures.</p>
              </div>
              <span className="card-front-arrow">Flip Card ➔</span>
            </div>
            <div className="card-back glass-panel">
              <h4>Backend Features</h4>
              <ul>
                <li>RESTful API design & Spring Boot</li>
                <li>Database schemas using MySQL</li>
                <li>Security & authentication systems</li>
                <li>ORM integration with Hibernate</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Full Stack Development */}
        <div className="service-card">
          <div className="card-inner">
            <div className="card-front glass-panel">
              <div className="card-front-icon">
                <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1.2em" width="1.2em" xmlns="http://www.w3.org/2000/svg">
                  <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                  <polyline points="2 17 12 22 22 17"></polyline>
                  <polyline points="2 12 12 17 22 12"></polyline>
                </svg>
              </div>
              <div>
                <h3>Full Stack Integration</h3>
                <p>Delivering complete end-to-end applications from database design to production frontend deployments.</p>
              </div>
              <span className="card-front-arrow">Flip Card ➔</span>
            </div>
            <div className="card-back glass-panel">
              <h4>Full Stack Scope</h4>
              <ul>
                <li>End-to-end integration flow</li>
                <li>State management implementation</li>
                <li>JSON data serialization</li>
                <li>Deployment & DevOps basics</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
