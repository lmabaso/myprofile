import React from 'react'

const ToggleButton = () => {
  return (
    <div>
      <label className='relative inline-flex items-center cursor-pointer'>
            <input type='checkbox' value="" className='sr-only peer' />
            <div className="peer ring-0 bg-rose-400 rounded-full outline-none duration-300 after:duration-500 w-8 h-8  shadow-md peer-checked:bg-[var(--primary-colour)]  peer-focus:outline-none  after:content-['✖'] after:rounded-full after:absolute after:outline-none after:h-6 after:w-6 after:bg-[#2f2f2f] after:top-1 after:left-1 after:flex after:justify-center after:items-center  peer-hover:after:scale-75 peer-checked:after:content-['✔'] after:-rotate-180 peer-checked:after:rotate-0"></div>
          </label>
    </div>
  )
}

export default ToggleButton
