import Navbar from './Components/Navbar';
import React from 'react';
import Hero from './Components/Hero';
import About from './Components/About';
import Footer from './Components/Footer';
import Skills from './Components/Skills';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      {/* skills */}
      <Skills />

      {/* project */}
      {/* contact */}
      {/* footer */}
      <Footer />
    </div>
  );
}

export default App;
