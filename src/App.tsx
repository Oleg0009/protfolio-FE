import React, { useEffect, useRef, useState } from 'react';
import HeroSection from './components/sections/HeroSection';
import './App.css';
import ExperienceSection from './components/sections/ExperienceSection';
import AboutSection from './components/sections/AboutSection';
import NavBar from './components/base/NavBar';
import SkillsSection from './components/sections/SkillsSection';
import ContactUsSection from './components/sections/ContactUsSection';

function App() {
  const [scroll, updateScroll] = useState()
  useEffect(() => {

  })
  return (
    <main id='scroller' className="scroller">
      <NavBar />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <SkillsSection />
      <ContactUsSection />
    </main>
  );
}

export default App;
