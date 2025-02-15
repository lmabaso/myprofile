import React from 'react';
import ContentSection from "../components/ContentSection";
import IconContainer from '../components/icons/CodeSandoxIcon';

const Content = () => {
  return (

      <div className='w-full font-[Orbitron] font-bold size-7 text-center '>
        <div className='mb-2 text-2xl items-center flex flex-row justify-center gap-1.5'>
          <IconContainer name='CodeSandox' className='h-6 w-6 fill-[#6c757d]' />
          <span className='text-[#6c757d]'>Summary of my</span>
        </div>
        <h3 className='text-white text-4xl'> Work <span className='text-[#aefd9c]'>Experience</span></h3>
      </div>
  )
}

const Experience = () => {
  return (
    <ContentSection element={<Content />} />
  )
}

export default Experience
