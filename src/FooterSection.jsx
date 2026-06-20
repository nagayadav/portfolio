import React from "react";

const FooterSection = () => {
  const handleLogoClick = (e) => {
    e.preventDefault();
    document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleLinkClick = (e, targetId) => {
    e.preventDefault();
    document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="footer-container">
      <div className="footer-content">
        <h3 className="footer-logo" onClick={handleLogoClick} style={{ cursor: 'pointer' }}>
          Nagendra<span>.dev</span>
        </h3>
        <p className="footer-tagline">Building Web Experiences That Matter 🚀</p>

        <div className="footer-links">
          <a href="#home" onClick={(e) => handleLinkClick(e, 'home')}>Home</a>
          <a href="#about" onClick={(e) => handleLinkClick(e, 'about')}>About</a>
          <a href="#services" onClick={(e) => handleLinkClick(e, 'services')}>Services</a>
          <a href="#portfolio" onClick={(e) => handleLinkClick(e, 'portfolio')}>Portfolio</a>
          <a href="#experience" onClick={(e) => handleLinkClick(e, 'experience')}>Experience</a>
          <a href="#contact" onClick={(e) => handleLinkClick(e, 'contact')}>Contact</a>
        </div>

        <div className="footer-socials">
          <a 
            href="https://www.linkedin.com/in/nagendrababumekala/" 
            target="_blank" 
            rel="noreferrer"
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
            title="GitHub"
          >
            <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
          </a>
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noreferrer"
            title="Instagram"
          >
            <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </a>
        </div>

        <p className="footer-bottom">© 2026 Nagendra Babu Mekala. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default FooterSection;
