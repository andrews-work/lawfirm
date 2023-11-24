// App.js
import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Business from './pages/Business';
import Refugee from './pages/Refugee';
import Court from './pages/Court';
import Family from './pages/Family';
import Team from './pages/Team';
import Contact from './pages/Contact';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/business" element={<Business />} />
      <Route path="/refugee" element={<Refugee />} />
      <Route path="/court" element={<Court />} />
      <Route path="/team" element={<Team />} />
      <Route path="/family" element={<Family />} />
      <Route path="/business" element={<Business />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;
