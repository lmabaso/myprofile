import React from 'react'
import LoremIpsum from './LoremIpsum'


const ContentSection = () => {
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
          dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500   '>
          <div
            id='container'
            className=' '
          >
            <div className='h-18 w-18 border-t-3 border-l-3 border-dotted border-[#aefd9c]'>

            </div>
            <LoremIpsum />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContentSection
