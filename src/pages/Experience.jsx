import React from 'react';
import ContentSection from "../components/ContentSection";
import IconContainer from '../components/icons/CodeSandoxIcon';
import Heading from '../components/Heading';

const Content = () => {
  return (
    <div className='w-full font-[Orbitron] font-bold size-7 text-center '>
      <Heading section1='Summary of my' section2='Work'  hSection3='true'  section3={'Experience'} />
    </div>
  )
}

const Experience = () => {
  return (
    <ContentSection element={<Content />} />
  )
}

export default Experience
