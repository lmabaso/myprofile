import React from 'react'
import ContentSection from "../components/ContentSection";

const Content = () => {
  return (
    <div>Portfolio</div>
  )
}

const Portfolio = () => {
  return (
    <ContentSection element={<Content />} />
  )
}

export default Portfolio
