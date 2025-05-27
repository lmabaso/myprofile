import React from 'react'
import ContentSection from "../components/ContentSection";
import IconContainer from '../components/icons/CodeSandoxIcon';
import Heading from '../components/Heading';

const Content = () => {
  return (
    <div className='w-full font-[Orbitron] font-bold size-7 text-center '>
      <Heading section1='Explore' section2='My'  hSection2='true'  section3={'Skill Set'} />
    </div>
  )
}

const Skills = () => {
  return (
    <ContentSection element={<Content />} />
  )
}

export default Skills
