import React from 'react'
import ContentSection from "../components/ContentSection";
import IconContainer from '../components/icons/IconContainer';

const interests = [
  { id: 1,  name: "Reading",  label: "Reading",     status: "active", desc: "Enhancing cognitive flexibility through literature analysis."},
  { id: 2,  name: "Reseach",  label: "AI Reseach",  status: "active", desc: "Building human-AI collaboration tools for creative workflows."},
  { id: 3,  name: "Chess",    label: "Chess",       status: "active", desc: "Sharpening strategic foresight via game theory patterns."},
  { id: 4,  name: "Gaming",   label: "Gaming",      status: "active", desc: "Cultivating rapid decision-making in resource-constrained scenarios."},
  { id: 5,  name: "Illustration", label: "Illustration", status: "active", desc: "Blending technical precision with visual storytelling."},
];

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
        <h4 className='font-bold flex items-center my-3 text-2xl'>
          <span className='text-[#aefd9c] text-[2rem] pr-3'>|</span>
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
              <p>I have a clear, logical mind with a practical approach to problem-solving and a drive to see things through to completion.</p><br />
              <p><i>“Logic will get you from A to B. Imagination will take you everywhere. But determination—practical, relentless determination—will ensure you finish the journey.” </i>&nbsp;- ALBERT EINSTEIN</p>
            </span>
          </div>
        </div>

        <h4 className='font-bold flex items-center my-2 text-2xl'>
          <span className='text-[#aefd9c] text-[2rem] pr-3'>|</span>
          <span>Personal <span className='text-[#aefd9c]'>interests</span></span>
          <div id='InnerBody'></div>
        </h4>
        <div className='flex flex-wrap gap-4'>
          {interests.map(interest =>
            <div
              key={interest.id}
              className='bg-[#212121] w-full md:w-[calc(50%-16px)] p-5 rounded-2xl flex flex-row items-center gap-4'
            >
              <div className='bg-[#181818] border-[#292929] border-4 rounded-full h-18 w-18 grid place-items-center'>
                <IconContainer name={interest.name} className='h-11 w-11 fill-white' />
              </div>
              <div className='flex flex-col text-left'>
                <div className='font-bold mb-1'>{interest.label}</div>
                <div className='text-sm text-[#6c757d] font-sans font-normal'>{interest.desc}</div>
              </div>
            </div>)}
        </div>
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
