import React from 'react'
import ContentSection from "../components/ContentSection";

const Content = () => {
  return (
    <div>Contact</div>
  )
}

const Contact = () => {
  return (
    <ContentSection element={<Content />} />
  )
}

export default Contact
