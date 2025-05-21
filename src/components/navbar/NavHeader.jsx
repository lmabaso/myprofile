import React from 'react';
import PropTypes from 'prop-types';

const NavHeader = ({toggleSidebar}) => {
  return (
    <header className='flex justify-center items-center flex-col text-center p-5 border-b border-[#232526] gap-1'>
      <img
        src="./img/MyProfile.jpeg"
        alt="My Profile"
        className={`rounded-2xl border-[#1f2022] ${toggleSidebar  ? ' border-8 max-w-35 w-35'
          : ' border-4 max-w-[80px] w-[80px]'}'`} />
      {toggleSidebar ?
        <div className='font-bold'>
          <div className='w-full font-[Orbitron] text-xl mb-1.5 mt-3'>
            Liberty <span className='text-[#aefd9c]'>Mabaso </span>
          </div>
          <div className='text-[#6c757d]'>Web Developer</div>
        </div> : ''}
    </header>
  )
}

NavHeader.propTypes = {
  toggleSidebar: PropTypes.bool
};

export default NavHeader
