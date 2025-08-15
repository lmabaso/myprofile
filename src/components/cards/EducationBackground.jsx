import React from 'react';
import PropTypes from 'prop-types';
import IconContainer from '../../components/icons/IconContainer';

const EducationBackground = ({image, institute, course, from, to, description, tags }) => {
  return (
    <div className='p-5 flex flex-row w-full'>
      <div className='bg-[#181818] border-[#292929] border-4 rounded-full aspect-square w-24 min-w-24 h-24 min-h-24  mr-7 grid place-items-center'>
        <IconContainer name={image} className='w-9 fill-white' />
      </div>
      <div className='bg-[#212121] p-5 rounded-2xl flex flex-row items-center gap-4'>
        <div>
          <div className=''>{course}</div>
          <div className=''>{institute}</div>
        </div>
        <div>
          <div className=''>{from}</div>
          <div className=''>{to}</div>
        </div>
        <div className=''>{description}</div>
        <div className=''>{tags}</div>
      </div>
    </div>
  )
}

EducationBackground.propTypes = {
  image: PropTypes.string,
  Head: PropTypes.string,
  institute: PropTypes.string.isRequired,
  course: PropTypes.string.isRequired,
  from: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  description: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string),
};

export default EducationBackground
