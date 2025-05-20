import React from 'react'
import { NavLink } from 'react-router-dom';
import IconContainer from '../icons/IconContainer';
import PropTypes from 'prop-types';

const navLinks = [
  { id: 1, name: "About",         label: "About Me",      status: "inactive", path: "/About"},
  { id: 2, name: "Education",     label: "Education",     status: "inactive", path: "/Education"},
  { id: 3, name: "Experience",    label: "Experience",    status: "inactive", path: "/Experience" },
  { id: 4, name: "Skills",        label: "Skills",        status: "inactive", path: "/Skills"},
  { id: 5, name: "Portfolio",     label: "Portfolio",     status: "inactive", path: "/Portfolio"},
  { id: 6, name: "Achievements",  label: "Achievements",  status: "inactive", path: "/Achievements"}
  // { id: 7, name: "Contact",       label: "Contact",       status: "active", path: "/Contact" }
];

const NavLinks = ({toggleSidebar}) => {
  return (
    <div className='w-full h-full flex flex-col '>
      {navLinks.map((option) => (
        option.status === "active" && (
          <NavLink
            key={option.id}
            to={option.path}
            className={({ isActive }) =>
              `cursor-pointer px-4 h-[55px] border-b border-[#232526] flex items-center
              ${isActive ?
                'bg-[#2a2b2d] fill-[#a7ff93] text-[#a7ff93] border-r-4 border-r-[#a7ff93]' :
                'text-gray-300 fill-[#6c757d] hover:text-[#a7ff93] hover:fill-[#a7ff93]'
              }`
            }>
            <IconContainer
              name={option.name}
              className={`h-5 w-10  px-3
                ${!toggleSidebar ? 'mx-auto w-1/2' : ''}`} />
            {toggleSidebar ? <span className='text-[.95rem] font-bold'>{option.name}</span> : "" }
          </NavLink>
        )
      ))}
    </div>
  )
}
NavLinks.propTypes = {
  toggleSidebar: PropTypes.bool
};

export default NavLinks
