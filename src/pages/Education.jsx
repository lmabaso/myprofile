import React from 'react'
import ContentSection from "../components/ContentSection";
import IconContainer from '../components/icons/CodeSandoxIcon';
import Heading from "../components/Heading";

const Content = () => {
  return (
    <div className='w-full font-[Orbitron] font-bold size-7 text-center '>
      <Heading section1='This is my' section2='Educational'  hSection2='true'  section3={'Background'} />
    </div>
  )
}

const Education = () => {
  return (
    <ContentSection element={<Content />} />
  )
}

export default Education
