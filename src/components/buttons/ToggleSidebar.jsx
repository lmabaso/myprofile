import React from 'react';
import TriangleIcon from '../icons/TriangleIcon';

const ToggleSidebar = () => {
  return (
    <button className='w-9 h-9 top-17 absolute rounded-full flex justify-center items-center bg-[#1a1a1a] border-[#1f2022] border-2 p-3 -rotate-90 transform right-[-6%]'>
      <TriangleIcon className="h-full w-full fill-[#6c757d] " />
    </button>
  )
}

export default ToggleSidebar
