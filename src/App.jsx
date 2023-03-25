import Navbar from './Components/Navbar';
import React from 'react';
import Hero from './Components/Hero';
import About from './Components/About';
import Footer from './Components/Footer';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      {/* skills */}
      <Skills />
      {/* project */}
      <Projects />
      {/* contact */}
      {/* footer */}
      <Footer />
    </div>
  );
}

export default App;
