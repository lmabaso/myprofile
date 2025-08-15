import React, { Suspense } from 'react'

import Loading from "./components/Loading";
import NavBarSection from './components/navbar/NavBarSection';
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import About from './pages/About';
import Achievements from './pages/Achievements';
import Contact from './pages/Contact';
import Education from './pages/Education';
import Portfolio from './pages/Portfolio';
import Skills from './pages/Skills';
import Experience from "./pages/Experience";
import LetterGlitch from "./blocks/Backgrounds/LetterGlitch/LetterGlitch";

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Router basename='/myprofile'>
        {/* Main container with relative positioning */}
        <div className='relative min-h-screen w-full flex flex-row overflow-x-hidden overflow-y-hidden box-border'>
          <div className="fixed inset-0 -z-50">
            <LetterGlitch
              glitchSpeed={50}
              centerVignette={true}
              outerVignette={false}
              smooth={true}
            />
          </div>

          {/* Content container */}
          <div className="relative z-10 w-full flex flex-row">
            <NavBarSection />
            <div className="flex-grow">
              <Routes>
                <Route path='/'             element={<Loading />} />
                <Route path='/About'        element={<About />} />
                <Route path='/Achievements' element={<Achievements />} />
                <Route path='/Contact'      element={<Contact />} />
                <Route path='/Education'    element={<Education />} />
                <Route path='/Portfolio'    element={<Portfolio />} />
                <Route path='/Skills'       element={<Skills />} />
                <Route path='/Experience'   element={<Experience />} />
              </Routes>
            </div>
          </div>
        </div>
      </Router>
    </Suspense>
  )
}

export default App
