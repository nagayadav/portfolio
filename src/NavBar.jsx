import React, { useRef } from 'react';
import Home from './ProfileSection';
import AboutSection from './AboutSection';
import ServicesSection from './ServiceSecttion';
import Portfolio from './ProjectSection';  // Make sure filename is correctly capitalized
import Contact from './ContactSection';

const Navbar = () => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const portfolioRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <nav className="navbar">
        <h2>Nagendra Babu Mekala</h2>
        <ul>
          <li onClick={() => scrollToSection(homeRef)}>Home</li>
          <li onClick={() => scrollToSection(aboutRef)}>About</li>
          <li onClick={() => scrollToSection(servicesRef)}>Services</li>
          <li onClick={() => scrollToSection(portfolioRef)}>Portfolio</li>
          <li onClick={() => scrollToSection(contactRef)}>Contact</li>
        </ul>
      </nav>

      {/* Sections */}
      <div ref={homeRef}><Home /></div>
      <div ref={aboutRef}><AboutSection /></div>
      <div ref={servicesRef}><ServicesSection /></div>
      <div ref={portfolioRef}><Portfolio /></div>
      <div ref={contactRef}><Contact /></div>
    </>
  );
};

export default Navbar;
