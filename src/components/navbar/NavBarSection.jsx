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
      className={`font-[lato] bg-[#1a1a1a] relative flex flex-col rounded-xl h-[calc(100vh-2rem)]
                  ${toggleSidebar ? ' min-w-[280px] w-[280px]' : ' min-w-[120px] w-[120px]'}
                `}>
      <ToggleSidebar setToggleSidebar={setToggleSidebar} />
      <NavHeader toggleSidebar={toggleSidebar} />
      <div className='h-full overflow-y-auto [&::-webkit-scrollbar]:w-1
                    [&::-webkit-scrollbar-track]:bg-[#111111]
                    [&::-webkit-scrollbar-thumb]:bg-[#32343a]
                    dark:[&::-webkit-scrollbar-track]:bg-neutral-700
                    dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500'>
        <NavLinks toggleSidebar={toggleSidebar} />
      </div>
      <footer
        className='sticky flex flex-row justify-center items-center py-2 gap-1.5 border-t border-[#232526]'>
        {/* <footer className='
            fixed bottom-0
            left-0
            right-0
            bg-[#1a1a1a]
            border-t border-[#232526]
            py-2 flex flex-row justify-center items-center gap-1.5
            z-10'
          > */}
        <ThemeButton />
      </footer>
    </div>
  )
}

export default NavBarSection
