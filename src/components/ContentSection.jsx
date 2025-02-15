import React from 'react'
import PropTypes from 'prop-types'

const ContentSection = ({ element }) => {
  return (
    <div className='bg-none w-full h-full block py-5 mx-0'>
      <div className='bg-none text-black max-w-[1350px] h-full px-14'>
        <div
          id='desktop'
          className='bg-[#1a1a1a] h-full rounded-2xl p-8 overflow-y-auto
          [&::-webkit-scrollbar]:w-1
          [&::-webkit-scrollbar-track]:bg-[#111111]
          [&::-webkit-scrollbar-thumb]:bg-[#32343a]
          dark:[&::-webkit-scrollbar-track]:bg-neutral-700
          dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500'>
          <div id='container'>
            <div className='h-16 w-16 border-t-[3px] border-l-[3px] border-dotted border-[#aefd9c] float-left'></div>
            {element}
          </div>
        </div>
      </div>
    </div>
  )
}

ContentSection.propTypes = {
  element: PropTypes.element.isRequired,
}

export default ContentSection
