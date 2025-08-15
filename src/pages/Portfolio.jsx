import React from 'react'
import ContentSection from "../components/ContentSection";
import IconContainer from '../components/icons/CodeSandoxIcon';
import Heading from '../components/Heading';

const Content = () => {
  return (
    <div className='w-full font-[Orbitron] font-bold size-7 text-center '>
      <Heading section1='Take a look at' section2='My' hSection3 section3={'Portfolio'} />
    </div>
  )
}

const Portfolio = () => {
  return (
    <ContentSection element={<Content />} />
  )
}

export default Portfolio
