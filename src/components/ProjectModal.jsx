import React from 'react';

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content glass-panel" onClick={(e) => e.stopPropagation()}>
        <div className="scan-laser"></div>
        <button className="modal-close-btn" onClick={onClose}>✕</button>

        <div className="modal-header">
          <span className="modal-badge">{project.badge}</span>
          <h2>{project.title}</h2>
        </div>

        <div className="modal-body">
          <div className="modal-img-wrapper">
            <img src={project.image} alt={project.title} className="modal-img" />
          </div>

          <div className="modal-details">
            <h3>Overview</h3>
            <p>{project.description}</p>

            <h3>Key Technical Highlights</h3>
            <ul className="modal-highlights">
              {project.category === 'backend' ? (
                <>
                  <li>🌱 Built RESTful API endpoints using <strong>Spring Boot</strong> controller & service layers.</li>
                  <li>🗄️ Relational database management with <strong>MySQL & Hibernate ORM</strong>.</li>
                  <li>🔒 Secure input validation, session tracking, and exception handling.</li>
                  <li>⚛️ Responsive UI frontend integrated with <strong>React</strong> state management.</li>
                </>
              ) : (
                <>
                  <li>⚛️ Engineered SPA architecture using <strong>React.js</strong> and modern hooks.</li>
                  <li>🎨 Styled with dynamic <strong>CSS Glassmorphic</strong> UI tokens and micro-interactions.</li>
                  <li>📱 Fully mobile-responsive layout across all device viewports.</li>
                  <li>⚡ Fast render lifecycle and optimized asset loading.</li>
                </>
              )}
            </ul>

            <h3>Technologies Employed</h3>
            <div className="project-tags">
              {project.tags.map((tag, idx) => (
                <span key={idx} className="project-tag">{tag}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="modal-footer">
          <a href={project.link} target="_blank" rel="noreferrer" className="hero-primary-btn">
            {project.btnText}
          </a>
          <button className="hero-secondary-btn" onClick={onClose}>
            Close Inspection
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
