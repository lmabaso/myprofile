import React from 'react'

const Loading = () => {
  return (
    <div className='bg-[#1a1a1a] h-full w-full absolute left-0 top-0 flex flex-col justify-center items-center'>
      <div className="flex flex-row gap-5 text-[#aefd9c] text-4xl items-center">
        <div className="w-4 h-4 rounded-full bg-[#aefd9c] animate-[ping_1.5s_0.9s_ease-in-out_infinite]"></div>
        <div className="w-4 h-4 rounded-full bg-[#aefd9c] animate-[ping_1.5s_0.7s_ease-in-out_infinite]"></div>
        <div className="w-4 h-4 rounded-full bg-[#aefd9c] animate-[ping_1.5s_0.5s_ease-in-out_infinite]"></div>
        <span className="mx-6">Loading</span>
        <div className="w-4 h-4 rounded-full bg-[#aefd9c] animate-[ping_1.5s_0.5s_ease-in-out_infinite]"></div>
        <div className="w-4 h-4 rounded-full bg-[#aefd9c] animate-[ping_1.5s_0.7s_ease-in-out_infinite]"></div>
        <div className="w-4 h-4 rounded-full bg-[#aefd9c] animate-[ping_1.5s_0.9s_ease-in-out_infinite]"></div>
      </div>
    </div>

  )
}

export default Loading
