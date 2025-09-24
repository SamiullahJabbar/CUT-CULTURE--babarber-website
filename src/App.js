import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './pages/deshboard.tsx'; 
import Home from './pages/Home.tsx'; 
import About from './pages/About.tsx'; 
import Committees from './pages/Committees.tsx'; 
import Events from './pages/Events.tsx'; 
import Registration from './pages/Registration.tsx'; 
import Contact from './pages/Contact.tsx'; 
import layout from './components/HeaderFooter'; 

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Homepage />} />  */}
        <Route path="/" element={<Home />} /> 
        <Route path="About/" element={<About />} /> 
        <Route path="Committees/" element={<Committees />} /> 
        <Route path="Events/" element={<Events />} /> 
        <Route path="Registration/" element={<Registration />} /> 
        <Route path="Contact/" element={<Contact />} /> 
      </Routes>
    </Router>
  );
}

export default App;