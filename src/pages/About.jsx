import React from 'react'
import ContentSection from "../components/ContentSection";

const Content = () => {
  return (
    <div> About </div>
  )
}

const About = () => {
  return (
    <ContentSection element={<Content />} />
  )
}

export default About
