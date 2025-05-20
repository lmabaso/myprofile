import React from 'react';
import PropTypes from 'prop-types';
import IconContainer from '../components/icons/IconContainer';

const Card = ({image, Head, description}) => {
  return (
    <div className='bg-[#212121] w-full md:w-[calc(50%-16px)] p-5 rounded-2xl flex flex-row items-center gap-4'>
      <div className='bg-[#181818] border-[#292929] border-4 rounded-full h-18 w-18 grid place-items-center'>
        <IconContainer name={image} className='h-11 w-11 fill-white' />
      </div>
      <div className='flex flex-col text-left'>
        <div className='font-bold mb-1'>{Head}</div>
        <div className='text-sm text-[#6c757d] font-sans font-normal'>{description}</div>
      </div>
    </div>

  )
}

Card.propTypes = {
  image: PropTypes.element.isRequired,
  Head: PropTypes.element.isRequired,
  description: PropTypes.element.isRequired,
}

export default Card
