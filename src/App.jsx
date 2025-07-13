import React from 'react'
import Navbar from './NavBar.jsx'
import ProfileSection from './ProfileSection.jsx'
import About from './AboutSection.jsx'
import ServicesSection from './ServiceSecttion.jsx'
import ProjectSection from './ProjectSection.jsx'
import ExperienceTimeline from './Experiencesection.jsx'
import ContactSection from './ContactSection.jsx'
import FooterSection from './FooterSection.jsx'
const App = () => {
  return (
    <div>
      <Navbar/>
      {/* <ProfileSection/>
      <About/>
      <ServicesSection/>
      <ProjectSection/>
      <ExperienceTimeline/>
      <ContactSection/>*/}
      <FooterSection/> 
    </div>
  )
}

export default App
