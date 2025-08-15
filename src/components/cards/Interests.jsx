import React from 'react';
import PropTypes from 'prop-types';
import IconContainer from '../../components/icons/IconContainer';

const Interests =  ({image, Head, description}) => {
  return (
    <div className='bg-[#212121] w-full [@media(min-width:1196px)]:w-[calc(50%-16px)] p-5 rounded-2xl flex flex-row items-center gap-4'>
      <div className='bg-[#181818] border-[#292929] border-4 rounded-full aspect-square w-18 min-w-18 grid place-items-center'>
        <IconContainer name={image} className='w-9 fill-white'/>
      </div>
      <div className='flex flex-col text-left'>
        <div className='font-bold mb-1'>{Head}</div>
        <div className='text-sm text-[#6c757d] font-sans font-normal'>{description}</div>
      </div>
    </div>
  )
}

Interests.propTypes = {
  image: PropTypes.string,
  Head: PropTypes.string,
  description: PropTypes.string,
}

export default Interests
