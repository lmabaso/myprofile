import React from 'react'
import ContentSection from "../components/ContentSection";

const Content = () => {
  return (
    <div>Skills</div>
  )
}

const Skills = () => {
  return (
    <ContentSection element={<Content />} />
  )
}

export default Skills
