import React, { useState, useEffect, useRef } from 'react';
import Home from './ProfileSection';
import AboutSection from './AboutSection';
import ServicesSection from './ServiceSecttion';
import Portfolio from './ProjectSection';
import Contact from './ContactSection';
import Experience from './exp';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const portfolioRef = useRef(null);
  const expRef = useRef(null);
  const contactRef = useRef(null);

  // Monitor scroll for styling navbar and active scroll spy
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Simple scroll spy logic
      const scrollPos = window.scrollY + 120;
      
      const aboutOffset = aboutRef.current?.offsetTop || 0;
      const servicesOffset = servicesRef.current?.offsetTop || 0;
      const portfolioOffset = portfolioRef.current?.offsetTop || 0;
      const expOffset = expRef.current?.offsetTop || 0;
      const contactOffset = contactRef.current?.offsetTop || 0;

      if (scrollPos >= contactOffset) {
        setActiveSection('contact');
      } else if (scrollPos >= expOffset) {
        setActiveSection('experience');
      } else if (scrollPos >= portfolioOffset) {
        setActiveSection('portfolio');
      } else if (scrollPos >= servicesOffset) {
        setActiveSection('services');
      } else if (scrollPos >= aboutOffset) {
        setActiveSection('about');
      } else {
        setActiveSection('home');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (ref, name) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(name);
    setMenuOpen(false);
  };

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <h2 onClick={() => scrollToSection(homeRef, 'home')}>
          Nagendra<span>.dev</span>
        </h2>
        
        {/* Hamburger menu button */}
        <div className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div>

        {/* Desktop Links */}
        <ul>
          <li className={activeSection === 'home' ? 'active' : ''} onClick={() => scrollToSection(homeRef, 'home')}>Home</li>
          <li className={activeSection === 'about' ? 'active' : ''} onClick={() => scrollToSection(aboutRef, 'about')}>About</li>
          <li className={activeSection === 'services' ? 'active' : ''} onClick={() => scrollToSection(servicesRef, 'services')}>Services</li>
          <li className={activeSection === 'portfolio' ? 'active' : ''} onClick={() => scrollToSection(portfolioRef, 'portfolio')}>Portfolio</li>
          <li className={activeSection === 'experience' ? 'active' : ''} onClick={() => scrollToSection(expRef, 'experience')}>Experience</li>
          <li className={activeSection === 'contact' ? 'active' : ''} onClick={() => scrollToSection(contactRef, 'contact')}>Contact</li>
        </ul>
      </nav>

      {/* Backdrop blur for open mobile menu */}
      <div className={`nav-backdrop ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(false)}></div>

      {/* Mobile Drawer Overlay */}
      <div className={`nav-menu-overlay ${menuOpen ? 'open' : ''}`}>
        <div className="nav-menu-overlay-close" onClick={() => setMenuOpen(false)}>
          ✕
        </div>
        <ul className="nav-menu-overlay-links">
          <li className={activeSection === 'home' ? 'active' : ''} onClick={() => scrollToSection(homeRef, 'home')}>Home</li>
          <li className={activeSection === 'about' ? 'active' : ''} onClick={() => scrollToSection(aboutRef, 'about')}>About</li>
          <li className={activeSection === 'services' ? 'active' : ''} onClick={() => scrollToSection(servicesRef, 'services')}>Services</li>
          <li className={activeSection === 'portfolio' ? 'active' : ''} onClick={() => scrollToSection(portfolioRef, 'portfolio')}>Portfolio</li>
          <li className={activeSection === 'experience' ? 'active' : ''} onClick={() => scrollToSection(expRef, 'experience')}>Experience</li>
          <li className={activeSection === 'contact' ? 'active' : ''} onClick={() => scrollToSection(contactRef, 'contact')}>Contact</li>
        </ul>
      </div>

      {/* Sections wrappers with matching IDs for layout and hooks */}
      <div id="home" ref={homeRef}><Home /></div>
      <div id="about" ref={aboutRef}><AboutSection /></div>
      <div id="services" ref={servicesRef}><ServicesSection /></div>
      <div id="portfolio" ref={portfolioRef}><Portfolio /></div>
      <div id="experience" ref={expRef}><Experience /></div>
      <div id="contact" ref={contactRef}><Contact /></div>
    </>
  );
};

export default Navbar;
