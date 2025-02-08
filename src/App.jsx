import React from 'react'

import NavBarSection from "./components/NavBarSection";
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import About from './pages/About';
import Achievements from './pages/Achievements';
import Contact from './pages/Contact';
import Education from './pages/Education';
import Portfolio from './pages/Portfolio';
import Skills from './pages/Skills';

function App() {
  return (
    <Router basename="/myprofile">
      <div className='bg-none h-full w-full flex flex-row overflow-x-hidden overflow-y-hidden box-border '>
        <NavBarSection />
        <Routes>
          <Route path="/"             element={<About />} />
          <Route path="/Achievements" element={<Achievements />} />
          <Route path="/Contact"      element={<Contact />} />
          <Route path="/Education"    element={<Education />} />
          <Route path="/Portfolio"    element={<Portfolio />} />
          <Route path="/Skills"       element={<Skills />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
