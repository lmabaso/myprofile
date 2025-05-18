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
              <p>I am a web developer from Allandale, Midrand, South Africa. I got into tech from a young age and received my first personal computer in 2003. This sparked my curiosity and I have been learning about computers and technology ever since. I have always been an avid video gamer and enjoy playing a variety of games including FPS, Moba, Fighting, Racing, and FIFA. Chess is also another hobby of mine. I used to be actively involved in sports, particularly volleyball, high jump, and karate. These activities have taught me the importance of teamwork, discipline, and perseverance, which I apply to my work as a web developer.</p>
              <p>I love experimenting and trying new things because I am not afraid to fail. I believe that failure is just the first step in learning and taking risks is crucial in personal and professional growth. In developer. I am grateful for the opportunities technology has provided me and I am excited to see where my journey takes me next.</p>
              <i>“The expert at anything was once a beginner.” </i>– Helen Hayes
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
