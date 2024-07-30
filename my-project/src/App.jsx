import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header.jsx';
import Hero from './Components/Hero.jsx';
import Events from './Components/Events.jsx';
import Footer from './Components/Footer.jsx';
import Contact from './pages/Contact.jsx';
import EventCarousel from './Components/Events.jsx';
import { Engi } from './pages/Engi.jsx';
import { FAQ } from './Components/FAQ.jsx';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
      
        <Route path="/" element={
          <>
            <Hero />
            <Events />
            <FAQ/>
          </>
        } />

          <Route path = "/Events" element = {
          <EventCarousel/>
        }/>

      <Route path = '/Engi' element = {<Engi/>}/>
        <Route path="/contactus" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
