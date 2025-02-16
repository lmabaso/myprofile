import React, { useState } from 'react'
import ToggleButton from './buttons/ToggleButton';
import NavHeader from './NavHeader';
import NavLinks from './NavLinks';
import ToggleSidebar from "./buttons/ToggleSidebar";

const NavBarSection = () => {
  const [toggleSidebar, setToggleSidebar] = useState(true);

  return (
    <div
      id='NavBarSection'
      className={`font-[lato] bg-[#1a1a1a] relative flex flex-col rounded-xl 
                  ${toggleSidebar ? 'min-w-[280px] w-[280px]' : 'min-w-[120px] w-[120px]'}}`
}>
      <ToggleSidebar setToggleSidebar={setToggleSidebar} />
      <NavHeader toggleSidebar={toggleSidebar} />
      <NavLinks toggleSidebar={toggleSidebar} />
      <footer className='h-[50px] flex justify-center gap-1.5 py-4 border-t border-[#232526]'>
        <ToggleButton />
      </footer>
    </div>
  )
}

export default NavBarSection
