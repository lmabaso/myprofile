import React from 'react';
import PropTypes from 'prop-types';
import IconContainer from './icons/IconContainer';

const Heading = ({ section1 , section2, hSection2, section3, hSection3 }) => {
  return (
    <div  id='Header' className='fill-[#6c757d] text-[#6c757d] pt-5'>
      <div className='mb-2 text-2xl gap-1.5 text-center
                      items-center flex flex-row justify-center'>
        <IconContainer name='CodeSandox' className='h-6 w-6'/>
        <span id='section1' className=''>{ section1 }</span>
      </div>
      <h3 id='Section2' className='text-white text-4xl'>
        { hSection2 ? (<span className='text-[#aefd9c]'> { section2 }  </span>) : section2 }
        { section2 && section3 && ' '}
        { hSection3 ? (<span className='text-[#aefd9c]'> { section3 } </span>) : section3 }
      </h3>
    </div>
  )
}

Heading.propTypes = {
  section1: PropTypes.string,
  section2: PropTypes.string,
  section3: PropTypes.string,
  hSection2: PropTypes.bool,
  hSection3: PropTypes.bool,
}

export default Heading
