import React from 'react';
import IconContainer from "../icons/IconContainer";

const ThemeButton = () => {
  return (
    <>
    <IconContainer name='Sun'   className="w-9 h-9 fill-[#6c757d] hover:fill-[#aefd9c]" />
    <IconContainer name='Moon'  className="w-9 h-9 fill-[#6c757d] p-1 hover:fill-[#aefd9c]"/>
    </>
  )
}

export default ThemeButton
