import React from 'react'
import ToggleButton from './ToggleButton';
import NavHeader from './NavHeader';
import NavLinks from './NavLinks';
import ToggleSidebar from "./buttons/ToggleSidebar";

const NavBarSection = () => {
  return (
    <div className='font-[lato] bg-[#1a1a1a] min-w-[280px] w-[280px] relative flex flex-col rounded-xl'>
      <ToggleSidebar />
      <NavHeader />
      <NavLinks />
      <footer className='h-[50px] flex justify-center gap-1.5 py-4 border-t border-[#232526]'>
        <ToggleButton />
      </footer>
    </div>
  )
}

export default NavBarSection
