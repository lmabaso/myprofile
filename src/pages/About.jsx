import React from 'react'
import ContentSection from "../components/ContentSection";
import IconContainer from '../components/icons/IconContainer';

const Content = () => {
  return (
    <div className='w-full font-[Orbitron] font-bold size-7 text-center'>
      <div
        id="ContentHeader"
        className='fill-[#6c757d] text-[#6c757d] pt-5'>
        <div
          className='mb-2 text-2xl gap-1.5 text-center
                    items-center flex flex-row justify-center'>
          <IconContainer name='CodeSandox' className='h-6 w-6' />
          <span className=''>Hello...</span>
        </div>
        <h3 className='text-white text-4xl'> I&apos;m <span className='text-[#aefd9c]'>Liberty Mabaso!</span></h3>
      </div>
      <div
        id="ContentBody"
        className='fill-[#6c757d] pt-5 text-white '>
        <h4 className='font-bold flex items-center mb-4 text-2xl'>
          <span className='text-[#aefd9c] text-[2rem] pr-1'>|</span>
          <span><span className='text-[#aefd9c]'>A little bit </span>about me... </span>
          <div id='InnerBody'></div>
        </h4>
        <div className='flex'>
          <div>
            <IconContainer
              name='Developer'
              className={`h-56 px-3`}
            />
          </div>
          <div className='text-l font-sans font-normal flex items-center mb-4 text-left'>
            <span>
              <p>I’m Liberty Mabaso, a web developer based in Midrand, South Africa, with five years of hands-on experience in technology. <br />My journey began in 2003 when I first explored computer systems, sparking a lifelong passion for problem-solving and technical experimentation.</p>
            </span>
          </div>
        </div>

        <h4 className='font-bold flex items-center mb-4 text-2xl'>
          <span className='text-[#aefd9c] text-[2rem] pr-1'>|</span>
          <span>Personal <span className='text-[#aefd9c]'>interests</span></span>
          <div id='InnerBody'></div>
        </h4>
      </div>
    </div>
  )
}

const About = () => {
  return (
    <ContentSection element={<Content />} />
  )
}

export default About
