
import React from 'react'
import { NavLink } from 'react-router-dom';


const navLinks = [
  { id: 1, name: "About",         label: "About Me",      status: "active", path: "/About" },
  { id: 2, name: "Education",     label: "Education",     status: "active", path: "/Education" },
  { id: 3, name: "Skills",        label: "Skills",        status: "active", path: "/Skills" },
  { id: 4, name: "Portfolio",     label: "Portfolio",     status: "active", path: "/Portfolio" },
  { id: 5, name: "Achievements",  label: "Achievements",  status: "active", path: "/Achievements" },
  { id: 6, name: "Contact",       label: "Contact",       status: "active", path: "/Contact" }
];

const NavLinks = () => {
  return (
    <div className='w-full h-full flex flex-col '>
      {navLinks.map((option) => (
        option.status === "active" && (
          <NavLink
            key={option.id}
            to={option.path}
            className={({ isActive }) =>
              `cursor-pointer px-4 h-[50px] border-b border-[#232526] flex items-center ${
                isActive ? 'bg-[#2a2b2d] text-[#aefd9c]' : 'text-gray-300 hover:bg-[#232526]'
              }`
            }
          >
            <span className='text-[.95rem] font-bold'>{option.name}</span>
          </NavLink>
        )
      ))}
    </div>
  )
}

export default NavLinks
