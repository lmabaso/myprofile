
import React from 'react'
import { NavLink } from 'react-router-dom';
import IconContainer from './icons/IconContainer';
import PropTypes from 'prop-types';

const navLinks = [
  { id: 1, name: "About",         label: "About Me",      status: "active", path: "/About"},
  { id: 2, name: "Education",     label: "Education",     status: "active", path: "/Education"},
  { id: 3, name: "Experience",    label: "Experience",    status: "active", path: "/Experience" },
  { id: 4, name: "Skills",        label: "Skills",        status: "active", path: "/Skills"},
  { id: 5, name: "Portfolio",     label: "Portfolio",     status: "active", path: "/Portfolio"},
  { id: 7, name: "Achievements",  label: "Achievements",  status: "active", path: "/Achievements"}
  // { id: 6, name: "Contact",       label: "Contact",       status: "active", path: "/Contact" }
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
              `cursor-pointer px-4 h-[50px] border-b border-[#232526] flex items-center
              ${isActive ? 'bg-[#2a2b2d] text-[#aefd9c]' : 'text-gray-300 hover:bg-[#37393a]'}`
            }
          >
            <IconContainer name={option.name} className={`h-5 w-10 fill-[#6c757d] px-3 ${!toggleSidebar ? 'mx-auto w-1/2' : ''}`} />
            {toggleSidebar ? <span className='text-[.95rem] font-bold'>{option.name}</span> : "" }
          </NavLink>
        )
      ))}
    </div>
  )
}
NavLinks.propTypes = {
  toggleSidebar: PropTypes.string
};

export default NavLinks
