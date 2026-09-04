import React from "react";
import webDevImg from "./assets/service_web_dev.png";
import backendDevImg from "./assets/service_backend_dev.png";
import fullstackDevImg from "./assets/service_fullstack_dev.png";

const ServicesSection = () => {
  return (
    <div className="services-section-wrapper">
      <section className="services-container" id="services">
        <h2 className="section-title">MY <span className="highlight-text">SERVICES</span></h2>
        <p className="section-subtitle">
          I offer end-to-end software engineering solutions tailored to build modern, highly performant, and scalable applications. Available for full-time software engineering roles and custom client <strong>freelance web development projects</strong>.
        </p>

        <div className="services-grid">
          {/* Web Development */}
          <div className="service-card glass-panel">
            <div className="scan-laser"></div>
            <div className="card-inner">
              <div className="card-front">
                <div className="card-img-wrapper">
                  <img src={webDevImg} alt="Web Development" className="service-card-img" />
                </div>
                <h3 className="card-front-title">Frontend Engineering</h3>
                <span className="card-badge">React & UI/UX</span>
              </div>
              <div className="card-back">
                <h3 className="card-back-title">Frontend Engineering</h3>
                <p className="card-back-desc">
                  Designing dynamic, lightning-fast single-page web applications with modern state management, micro-animations, and responsive design systems.
                </p>
                <ul className="card-back-list">
                  <li>⚡ Responsive UI with HTML5 & CSS3</li>
                  <li>⚛️ Modern Single Page Apps with React</li>
                  <li>📱 Cross-browser & mobile compatibility</li>
                  <li>🎯 Clean, maintainable JavaScript (ES6+)</li>
                </ul>
                <span className="card-flip-hint">Hover / Click to inspect ➔</span>
              </div>
            </div>
          </div>

          {/* Backend Development */}
          <div className="service-card glass-panel">
            <div className="scan-laser"></div>
            <div className="card-inner">
              <div className="card-front">
                <div className="card-img-wrapper">
                  <img src={backendDevImg} alt="Backend Development" className="service-card-img" />
                </div>
                <h3 className="card-front-title">Backend & API Architecture</h3>
                <span className="card-badge">Java & Spring Boot</span>
              </div>
              <div className="card-back">
                <h3 className="card-back-title">Backend Architecture</h3>
                <p className="card-back-desc">
                  Building enterprise-grade Java backend systems, RESTful API endpoints, secure user authentication, and optimized database queries.
                </p>
                <ul className="card-back-list">
                  <li>🌱 RESTful API Design with Spring Boot</li>
                  <li>🗄️ Relational Schema & MySQL Query Tuning</li>
                  <li>🔒 Security, JWT & Session Management</li>
                  <li>⚡ ORM Integration with Hibernate / JPA</li>
                </ul>
                <span className="card-flip-hint">Hover / Click to inspect ➔</span>
              </div>
            </div>
          </div>

          {/* Full Stack Development */}
          <div className="service-card glass-panel">
            <div className="scan-laser"></div>
            <div className="card-inner">
              <div className="card-front">
                <div className="card-img-wrapper">
                  <img src={fullstackDevImg} alt="Full Stack Development" className="service-card-img" />
                </div>
                <h3 className="card-front-title">Full Stack Integration</h3>
                <span className="card-badge">End-to-End System</span>
              </div>
              <div className="card-back">
                <h3 className="card-back-title">Full Stack Integration</h3>
                <p className="card-back-desc">
                  Delivering fully integrated web products connecting custom frontend interfaces seamlessly with robust backend database layers.
                </p>
                <ul className="card-back-list">
                  <li>🔄 Seamless REST API & React State Binding</li>
                  <li>⚙️ Full System CRUD Operation Handling</li>
                  <li>🛡️ Data Integrity & Serialization Logic</li>
                  <li>🚀 Deployment-ready Code Architecture</li>
                </ul>
                <span className="card-flip-hint">Hover / Click to inspect ➔</span>
              </div>
            </div>
          </div>

          {/* Custom Freelance Web Projects */}
          <div className="service-card glass-panel">
            <div className="scan-laser"></div>
            <div className="card-inner">
              <div className="card-front">
                <div className="card-img-wrapper">
                  <img src={webDevImg} alt="Freelance Projects" className="service-card-img" />
                </div>
                <h3 className="card-front-title">Custom Freelance Development</h3>
                <span className="card-badge">Freelance & Contracts</span>
              </div>
              <div className="card-back">
                <h3 className="card-back-title">Custom Freelance Projects</h3>
                <p className="card-back-desc">
                  Providing contract & freelance software development services for startups, businesses, and individual clients seeking custom web solutions.
                </p>
                <ul className="card-back-list">
                  <li>💼 Custom Business Sites & Corporate Apps</li>
                  <li>🛒 E-Commerce & Management Dashboards</li>
                  <li>⚡ API Development & Database Setup</li>
                  <li>⏱️ On-Time Delivery & Clean Maintainable Code</li>
                </ul>
                <span className="card-flip-hint">Hover / Click to inspect ➔</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesSection;
