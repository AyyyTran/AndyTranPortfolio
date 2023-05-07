import Navbar from './Components/Navbar';
import React from 'react';
import Hero from './Components/Hero';
import About from './Components/About';
import Footer from './Components/Footer';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Skills />
      <About />
      {/* skills */}
      {/* project */}
      <Projects />
      {/* contact */}
      <Contact />
      {/* footer */}
      <Footer />
    </div>
  );
}

export default App;
