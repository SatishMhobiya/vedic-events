import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Packages from './components/Packages';
import MiniPackages from './components/MiniPackages';
import ClientLogos from './components/ClientLogos';
import Gallery from './components/Gallery';
import WhyChooseUs from './components/WhyChooseUs';
import EventIdea from './components/EventIdea';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      {/* <About /> */}
      <Gallery />
      <MiniPackages />
      <Packages />
      {/* <ClientLogos /> */}
      {/* <WhyChooseUs /> */}
      {/* <EventIdea /> */}
      {/* <Testimonials /> */}
      <Footer />
    </div>
  );
}

export default App;

