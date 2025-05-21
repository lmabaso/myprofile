import React, { useEffect, useState } from 'react';
import IconContainer from "../icons/IconContainer";

const ThemeButton = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? savedTheme === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light')
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
  };

  return (
    <button  onClick={toggleTheme} >
      {isDarkMode ?
        <IconContainer name='Sun'   className="w-9 h-9 fill-[#6c757d] hover:fill-[#aefd9c]"/> :
        <IconContainer name='Moon'  className="w-9 h-9 fill-[#6c757d] hover:fill-[#aefd9c] p-1"/>}
    </button>
  )
}

export default ThemeButton
