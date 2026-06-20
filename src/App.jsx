import React from 'react';
import CanvasBackground from './components/CanvasBackground.jsx';
import Navbar from './NavBar.jsx';
import FooterSection from './FooterSection.jsx';

const App = () => {
  return (
    <div className="app-root">
      <CanvasBackground />
      <Navbar />
      <FooterSection />
    </div>
  );
};

export default App;
