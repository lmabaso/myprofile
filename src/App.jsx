import React from 'react'
import ContentSection from "./components/ContentSection";
import NavBarSection from "./components/NavBarSection";
import './App.css'

function App() {


  return (
    <>
      <div className='bg-none h-full w-full flex flex-row overflow-x-hidden overflow-y-hidden box-border '>
        <NavBarSection />
        <ContentSection />
      </div>
    </>
  )
}

export default App
