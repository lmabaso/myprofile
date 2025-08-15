import React from 'react'
import ContentSection from "../components/ContentSection";
import IconContainer from '../components/icons/CodeSandoxIcon';
import Heading from "../components/Heading";
import Card from '../components/Card';

const EducationBackground = [
  {
    id: 1,
    Logo: "Book",
    institute: "Harvard University",
    Course: 'PhD in Computer Science',
    from: "Sep 2022",
    to: " Jun 2024",
    desc: "Currently pursuing a PhD with a focus on deep learning and its real-world applications, particularly i",
    tags: ['DEEP LEARNING', 'COMPUTER VISION', 'AI RESEARCH', 'ALGORITHMS']
  },
  {
    id: 2,
    Logo: "Book",
    institute: "Harvard University",
    Course: 'PhD in Computer Science',
    from: "Sep 2022",
    to: " Jun 2024",
    desc: "Currently pursuing a PhD with a focus on deep learning and its real-world applications, particularly i",
    tags: ['DEEP LEARNING', 'COMPUTER VISION', 'AI RESEARCH', 'ALGORITHMS']
  },
];

const Content = () => {
  return (
    <div className='w-full font-[Orbitron] font-bold size-7 text-center '>
      <Heading section1='This is my' section2='Educational' hSection2 section3={'Background'} />
      <div
        id='ContentBody'
        className='fill-[#6c757d] pt-5 text-white '>
        {EducationBackground.map((option) => (
          <Card
            cardType='EducationBackground'
            key={option.id}
            image={option.Logo}
            course={option.Course}
            institute={option.institute}
            from={option.from}
            to={option.to}
            description={option.desc}
            tags={option.tags}  />
        ))}

      </div>
    </div>
  )
}

const Education = () => {
  return (
    <ContentSection element={<Content />} />
  )
}

export default Education
