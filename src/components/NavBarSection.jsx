import React from 'react'

const NavBarSection = () => {
  const navManu = [
    { id: 1, name: "About Me"     },
    { id: 2, name: "Education"    },
    { id: 3, name: "Skills"       },
    { id: 4, name: "Portfolio"    },
    { id: 5, name: "Achievements" },
    { id: 6, name: "Contact"      }
  ];
  return (
    <div className='font-[lato] bg-[#1a1a1a] min-w-[280px] w-[280px] relative flex flex-col rounded-xl'>
      <header className='flex justify-center items-center flex-col text-center p-5 border-b border-[#232526]'>
        <img
          src="./img/MyProfile.jpeg"
          alt="My Profile"
          className="w-35 h-35 rounded-2xl mb-3 border-8 border-[#1f2022]" />
        <strong className='w-full font-[Orbitron] text-xl mb-1.5' >
          Liberty <span className='text-[#aefd9c]'>Mabaso</span>
        </strong>
        <strong>Web Developer</strong>
        </header>
          <div className='w-full h-full flex flex-col '>
            {navManu.map((option, idx) => (
            <button
              key={idx}
              className='cursor-pointer px-4 h-[50px] border-b border-[#232526] text-left'>
              <div className='px-4 h-7'>
                <span className='text-[.95rem] font-bold'>{option.name}</span>
              </div>
            </button>
            ))}
          </div>
          <footer className='h-[50px] flex  justify-center gap-1.5 py-4 border-t border-[#232526]'>
            <div>Light Mode</div>
            <div>Curser effects</div>
          </footer>
        </div>
  )
}

export default NavBarSection
