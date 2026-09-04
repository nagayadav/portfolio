import React, { useState } from 'react';
import project1 from './assets/Emp Manage System.png';
import project2 from './assets/BioMetric E-coomrce.png';
import project3 from './assets/ShopAlott.jpeg';
import project4 from './assets/EduAlott.png';
import ProjectModal from './components/ProjectModal';
import { soundFx } from './utils/audioSynth';

const projects = [
  {
    id: 1,
    title: "Employee Management System",
    description: "A full-fledged CRUD administration dashboard engineered to manage enterprise employee directories, department allocations, salary tiers, and role-based permissions.",
    image: project1,
    category: "backend",
    tags: ["Java", "Spring Boot", "React", "MySQL", "Hibernate"],
    link: "https://github.com/nagayadav/EMP-Management",
    btnText: "Source Code ➔",
    badge: "Full Stack CRUD"
  },
  {
    id: 2,
    title: "RideAlott Corporate Platform",
    description: "A high-performance corporate web platform designed to showcase services, fleet solutions, and custom client booking workflows with dynamic UI micro-interactions.",
    image: project2,
    category: "frontend",
    tags: ["React", "JavaScript (ES6+)", "HTML5 & CSS3", "UI/UX"],
    link: "https://ridealott.app/",
    btnText: "Live Demo 🚀",
    badge: "Live Enterprise Site"
  },
  {
    id: 3,
    title: "ShopAlott Grocery E-Commerce",
    description: "A scalable full-stack grocery shopping platform enabling customers to explore product catalogs, manage cart states, filter categories, and execute order checkouts.",
    image: project3,
    category: "backend",
    tags: ["Spring Boot", "Hibernate ORM", "React", "MySQL"],
    link: "https://www.shopalott.com/",
    btnText: "Live Platform 🚀",
    badge: "Full Stack E-Commerce"
  },
  {
    id: 4,
    title: "EduAlott Digital Learning Hub",
    description: "An interactive educational portal providing digital course catalogs, learning resources, student progress tracking dashboard, and fluid responsive design.",
    image: project4,
    category: "frontend",
    tags: ["React", "JavaScript", "CSS Glassmorphism", "REST UI"],
    link: "https://www.edualott.com/",
    btnText: "Live Portal 🚀",
    badge: "EdTech Application"
  }
];

const ProjectSection = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  const handleOpenModal = (project) => {
    soundFx.playChime();
    setSelectedProject(project);
  };

  return (
    <div className="portfolio-section-wrapper">
      <section className="project-container" id="portfolio">
        <h2 className="section-title">FEATURED <span className="highlight-text">PROJECTS</span></h2>
        <p className="section-subtitle">
          Demonstrating production-ready full-stack applications built using Java, Spring Boot, Hibernate, React, and MySQL. Every project reflects scalability, security, clean code architecture, and high UI usability. Click any card to inspect full technical architecture.
        </p>

        {/* Filter Controls */}
        <div className="project-controls">
          <div className="project-filters">
            <button 
              className={`filter-btn ${activeCategory === 'all' ? 'active' : ''}`}
              onClick={() => { soundFx.playClick(); setActiveCategory('all'); }}
            >
              All Projects ({projects.length})
            </button>
            <button 
              className={`filter-btn ${activeCategory === 'backend' ? 'active' : ''}`}
              onClick={() => { soundFx.playClick(); setActiveCategory('backend'); }}
            >
              🌱 Java & Backend
            </button>
            <button 
              className={`filter-btn ${activeCategory === 'frontend' ? 'active' : ''}`}
              onClick={() => { soundFx.playClick(); setActiveCategory('frontend'); }}
            >
              ⚛️ React & Frontend
            </button>
          </div>
        </div>

        <div className="project-grid">
          {filteredProjects.length === 0 ? (
            <div className="no-projects-msg">
              <p>No projects available in this category.</p>
            </div>
          ) : (
            filteredProjects.map((project) => (
              <div 
                key={project.id} 
                className="project-card glass-panel clickable-card"
                onClick={() => handleOpenModal(project)}
              >
                <div className="scan-laser"></div>
                <div className="project-img-container">
                  <img src={project.image} alt={project.title} className="project-card-img" />
                  <span className="project-badge-overlay">{project.badge}</span>
                </div>
                
                <div className="project-card-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  
                  <div className="project-tags">
                    {project.tags.map((tag, index) => (
                      <span key={index} className="project-tag">{tag}</span>
                    ))}
                  </div>
                  
                  <div className="project-card-actions">
                    <button className="project-btn" onClick={(e) => { e.stopPropagation(); handleOpenModal(project); }}>
                      Inspect Specs ➔
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </section>

      {/* Project Specs Inspection Modal */}
      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </div>
  );
};

export default ProjectSection;
