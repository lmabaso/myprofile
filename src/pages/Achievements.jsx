import React from 'react'
import ContentSection from "../components/ContentSection";

const Content = () => {
  return (
    <div>Achievements</div>
  )
}

const Achievements = () => {
  return (
    <ContentSection element={<Content />} />
  )
}

export default Achievements
