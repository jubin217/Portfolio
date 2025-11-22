import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-dark-900 text-slate-200 font-sans selection:bg-primary selection:text-dark-900">
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
    </div>
  );
}

export default App;