import React from 'react'
import ContentSection from '../components/ContentSection';
import IconContainer from '../components/icons/IconContainer';
import Card from '../components/Card';

const interests = [
  { id: 1,  name: "Book",  label: "Reading",     status: "active", desc: "Enhancing cognitive flexibility through literature analysis."},
  { id: 2,  name: "Reseach",  label: "AI Reseach",  status: "active", desc: "Building human-AI collaboration tools for creative workflows."},
  { id: 3,  name: "Chess",    label: "Chess",       status: "active", desc: "Sharpening strategic foresight via game theory patterns."},
  { id: 4,  name: "Gaming",   label: "Gaming",      status: "active", desc: "Cultivating rapid decision-making in resource-constrained scenarios."},
  { id: 5,  name: "Illustration", label: "Illustration", status: "inactive", desc: "Blending technical precision with visual storytelling."},
];

const Content = () => {
  console.log(window.innerWidth)
  return (
    <div className='w-full font-[Orbitron] font-bold size-7 text-center'>
      <div
        id='ContentHeader'
        className='fill-[#6c757d] text-[#6c757d] pt-5'>
        <div
          className='mb-2 text-2xl gap-1.5 text-center
                    items-center flex flex-row justify-center'>
          <IconContainer name='CodeSandox' className='h-6 w-6'/>
          <span className=''>Hello...</span>
        </div>
        <h3 className='text-white text-4xl'>
          I&apos;m <span className='text-[#aefd9c]'>Liberty Mabaso!</span>
          </h3>
      </div>
      <div
        id='ContentBody'
        className='fill-[#6c757d] pt-5 text-white '>
        <h4 className='font-bold flex items-center my-3 text-2xl'>
          <span className='text-[#aefd9c] text-[2rem] pr-3'>|</span>
          <span><span className='text-[#aefd9c]'>A little bit </span>about me... </span>
        </h4>
        <div className='min-[1196px]:flex min-[1196px]:gap-4'>
          <div className='max-[1195px]:flex max-[1195px]:justify-center max-[1195px]:items-center'>
            <IconContainer name='Developer' className={`h-56 px-3`} />
          </div>
          <div className='text-l font-sans font-normal flex items-center mb-4 text-left'>
            <div className="min-[1196px]:flex-1 font-sans text-left mb-4 min-[1196px]:mb-0">
              <p className="text-l mb-4">
                I have a clear, logical mind with a practical approach to problem-solving
                and a drive to see things through to completion.
              </p>
              <p className="text-l italic">
                “Logic will get you from A to B. Imagination will take you everywhere.
                But determination—practical, relentless determination—will ensure you
                finish the journey.”
                <span className="not-italic block mt-2">- Albert Einstein</span>
              </p>
            </div>
          </div>
        </div>
        <h4 className='font-bold flex items-center my-2 text-2xl'>
          <span className='text-[#aefd9c] text-[2rem] pr-3'>|</span>
          <span>Personal <span className='text-[#aefd9c]'>interests</span></span>
        </h4>
        <div className='flex flex-wrap gap-4'>
          {interests.map(interest =>
            interest.status === 'active' && (
              <Card
                key={interest.id}
                image={interest.name}
                Head={interest.label}
                description={interest.desc} />
            )
          )}
        </div>
      </div>
      <div id='ContentFooter' className='h-8'></div>
    </div>
  )
}

const About = () => {
  return (
    <ContentSection element={<Content />} />
  )
}

export default About
