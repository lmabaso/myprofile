import React from 'react'
import ContentSection from "../components/ContentSection";

const Content = () => {
  return (
    <div>Education</div>
  )
}

const Education = () => {
  return (
    <ContentSection element={<Content />} />
  )
}

export default Education
