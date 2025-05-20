import React, { useState } from 'react';
import TriangleIcon from '../icons/TriangleIcon';
import PropTypes from 'prop-types';

const ToggleSidebar = ({setToggleSidebar}) => {
  const [isFullView, toggleView] = useState(true);

  const handleClick = () => {
    const newState = !isFullView;
    toggleView(newState);  // Update local state
    setToggleSidebar(newState);  // Update parent state
  }

  return (
    <button
      onClick={handleClick}
      className={`absolute rounded-full flex justify-center items-center bg-[#1a1a1a] border-[#1f2022] border-2   transform  ${isFullView ? 'h-9 w-9 p-2 -rotate-90 top-17 right-[-6%]' : 'h-6 w-6 p-1.5 rotate-90 top-12 right-[-10%]'} `}>
      <TriangleIcon className="h-[50%] fill-[#6c757d]" />
    </button>
  )
}

ToggleSidebar.propTypes = {
  setToggleSidebar: PropTypes.func.isRequired
};

export default ToggleSidebar
