import React, { useState } from 'react';
import NavHeader from './NavHeader';
import NavLinks from './NavLinks';
import ToggleSidebar from "../buttons/ToggleSidebar";
import ThemeButton from '../buttons/ThemeButton';

const NavBarSection = () => {
  const [toggleSidebar, setToggleSidebar] = useState(true);

  return (
    <div
      id='NavBarSection'
      className={`font-[lato] bg-[#1a1a1a] relative flex flex-col rounded-xl
                  ${toggleSidebar ? ' min-w-[280px] w-[280px]' : ' min-w-[120px] w-[120px]'}
                `}>
      <ToggleSidebar setToggleSidebar={setToggleSidebar} />
      <NavHeader toggleSidebar={toggleSidebar} />
      <NavLinks toggleSidebar={toggleSidebar} />
      <footer
        className='flex flex-row justify-center items-center py-2 gap-1.5 border-t border-[#232526]'>
        <ThemeButton />
      </footer>
    </div>
  )
}

export default NavBarSection
