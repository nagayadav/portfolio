import React, { useState } from 'react';
import project1 from './assets/Emp Manage System.png';
import project2 from './assets/BioMetric E-coomrce.png';
import project3 from './assets/ShopAlott.jpeg';

const projects = [
  {
    id: 1,
    title: "Employee Management System",
    description: "A CRUD-based administration web application designed to track and manage employee directories, salaries, and system roles efficiently.",
    image: project1,
    category: "backend",
    tags: ["Java", "Spring Boot", "React", "MySQL"],
    link: "https://github.com/nagayadav/EMP-Management",
    btnText: "Repository"
  },
  {
    id: 2,
    title: "RideAlott Corporate Site",
    description: "A dynamic corporate web platform designed to showcase services, solutions, and custom client booking operations with fluid navigation.",
    image: project2,
    category: "frontend",
    tags: ["HTML & CSS", "JavaScript", "React", "UI/UX"],
    link: "https://ridealott.app/",
    btnText: "Live Link"
  },
  {
    id: 3,
    title: "ShopAlott Grocery Platform",
    description: "A full-stack e-commerce grocery ecosystem allowing users to browse fresh produce, maintain active cart items, and complete secure orders.",
    image: project3,
    category: "backend",
    tags: ["Spring Boot", "Hibernate", "React", "MySQL"],
    link: "https://www.shopalott.com/",
    btnText: "Live Link"
  }
];

const ProjectSection = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <section className="project-container">
      <h2 className="section-title">My Projects</h2>
      <p className="section-subtitle">
        Here are some of the applications I've built using Java, Spring Boot, Hibernate, React, and MySQL.
      </p>

      {/* Filter Tabs */}
      <div className="project-filters">
        <button 
          className={`filter-btn ${activeCategory === 'all' ? 'active' : ''}`}
          onClick={() => setActiveCategory('all')}
        >
          [ ALL PROJECTS ]
        </button>
        <button 
          className={`filter-btn ${activeCategory === 'backend' ? 'active' : ''}`}
          onClick={() => setActiveCategory('backend')}
        >
          [ JAVA & BACKEND ]
        </button>
        <button 
          className={`filter-btn ${activeCategory === 'frontend' ? 'active' : ''}`}
          onClick={() => setActiveCategory('frontend')}
        >
          [ JS & FRONTEND ]
        </button>
      </div>

      <div className="project-grid">
        {filteredProjects.map((project) => (
          <div key={project.id} className="project-card glass-panel">
            {/* High-tech Scanning Laser Effect */}
            <div className="scan-laser"></div>
            
            <div className="project-img-wrapper">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="project-card-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              
              <div className="project-tags">
                {project.tags.map((tag, index) => (
                  <span key={index} className="project-tag">{tag}</span>
                ))}
              </div>
              
              <div className="project-actions">
                <a href={project.link} target="_blank" rel="noreferrer" className="project-btn">
                  {project.btnText === 'Repository' ? (
                    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1.1em" width="1.1em" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                  ) : (
                    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1.1em" width="1.1em" xmlns="http://www.w3.org/2000/svg">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                  )}
                  {project.btnText}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;
