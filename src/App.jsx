import React, { Suspense } from 'react'

import Loading from "./components/Loading";
import NavBarSection from './components/NavBarSection';
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import About from './pages/About';
import Achievements from './pages/Achievements';
import Contact from './pages/Contact';
import Education from './pages/Education';
import Portfolio from './pages/Portfolio';
import Skills from './pages/Skills';
import Experience from "./pages/Experience";

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Router basename='/myprofile'>
        <div className='bg-none h-full w-full flex flex-row overflow-x-hidden overflow-y-hidden box-border '>
          <NavBarSection />
          <Routes>
            <Route path='/'             element={<About />} />
            <Route path='/About'        element={<About />} />
            <Route path='/Achievements' element={<Achievements />} />
            <Route path='/Contact'      element={<Contact />} />
            <Route path='/Education'    element={<Education />} />
            <Route path='/Portfolio'    element={<Portfolio />} />
            <Route path='/Skills'       element={<Skills />} />
            <Route path='/Experience'   element={<Experience />} />
          </Routes>
        </div>
      </Router>
    </Suspense>
  )
}

export default App
