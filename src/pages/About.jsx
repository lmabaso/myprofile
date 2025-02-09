import React from 'react'
import ContentSection from "../components/ContentSection";
import NavHeader from '../components/NavHeader';

const Content = () => {
  return (
    <>
      <div className='w-full font-[Orbitron] font-bold size-7 text-center '>
        <div className='mb-2 text-2xl items-center flex flex-row justify-center gap-1.5'>
          <svg
          fill="#6c757d"
          viewBox="0 0 32 32"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          // width="1.4rem"
          // height="1.4rem"
          className='h-6 w-6'>
          <title>codesandbox</title>
          <path d="M6.795 9.253l9.126 5.179 9.147-5.223-4.837-2.745-4.261 2.431-4.286-2.459-4.89 2.818zM26.406 11.603l-9.144 5.195v10.337l4.964-2.869v-4.391l4.18-2.326v-5.946zM5.488 11.603v5.945l4.18 2.324v4.394l4.964 2.869v-10.337zM2.879 8.502l13.065-7.498 13.065 7.498 0.112 14.933-13.177 7.56-13.065-7.498z"></path>
          </svg>

          <span className='text-[#6c757d]'>Hello...</span>
        </div>
        <h3 className='text-white text-4xl'> I&apos;m <span className='text-[#aefd9c]'>Liberty Mabaso!</span></h3>
      </div>

    </>
  )
}

const About = () => {
  return (
    <ContentSection element={<Content />} />
  )
}

export default About
