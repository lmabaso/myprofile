import React from 'react'
import PropTypes from 'prop-types';

const NavHeader = ({toggleSidebar}) => {
  return (
    <header className='flex justify-center items-center flex-col text-center p-5 border-b border-[#232526]'>
      <img
        src="./img/MyProfile.jpeg"
        alt="My Profile"
        className="w-35 rounded-2xl mb-3 border-8 border-[#1f2022]" />
      {toggleSidebar ? <strong className='w-full font-[Orbitron] text-xl mb-1.5' >
        Liberty <span className='text-[#aefd9c]'>Mabaso {toggleSidebar}</span>
      </strong> : ""}
      {toggleSidebar ? <strong>Web Developer</strong> :""}
    </header>
  )
}

NavHeader.propTypes = {
  toggleSidebar: PropTypes.string
};

export default NavHeader
