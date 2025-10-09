import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './pages/deshboard.tsx'; 
import Home from './pages/Home.tsx'; 
import About from './pages/About.tsx'; 
import ServicesPage from './pages/ServicesPage.tsx'; 
import BookingPage from './pages/BookingPage.tsx'; 
import Contact from './pages/Contact.tsx'; 
import layout from './components/HeaderFooter'; 

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Homepage />} />  */}
        <Route path="/" element={<Home />} /> 
        <Route path="About/" element={<About />} /> 
        <Route path="ServicesPage/" element={<ServicesPage />} /> 
        <Route path="BookingPage/" element={<BookingPage />} /> 
        <Route path="Contact/" element={<Contact />} /> 
      </Routes>
    </Router>
  );
}

export default App;