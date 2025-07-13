
import React from "react";

const FooterSection = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <h3 className="footer-logo">Nagendra.dev</h3>
        <p className="footer-tagline">Building Web Experiences That Matter 🚀</p>

        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-socials">
          <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://github.com" target="_blank" rel="noreferrer">GitHub</a>
        </div>

        <p className="footer-bottom">© 2025 Nagendra Babu Mekala. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default FooterSection;
