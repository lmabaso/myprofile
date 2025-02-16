import React from 'react'


const NavHeader = () => {
  return (
    <header className='flex justify-center items-center flex-col text-center p-5 border-b border-[#232526]'>
      <img
        src="./img/MyProfile.jpeg"
        alt="My Profile"
        className="w-35 h-35 rounded-2xl mb-3 border-8 border-[#1f2022]" />
      <strong className='w-full font-[Orbitron] text-xl mb-1.5' >
        Liberty <span className='text-[#aefd9c]'>Mabaso</span>
      </strong>
      <strong>Web Developer</strong>
    </header>
  )
}

export default NavHeader
