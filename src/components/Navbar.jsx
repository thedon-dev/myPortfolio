import React from 'react'

function Navbar() {
  return (
    <div className='w-full absolute py-3 px-[7%] z-20'>
        <div className='rounded-xl w-full p-3 transition-all duration-300 group flex justify-center'>
            <a href="#hero" className='p-2 font-bold text-blue-500'>THEDON<span className='text-white'>.DEV</span></a>  

            {/* <div className='hidden group-hover:block content-center ms-[200px] transition-all duration-300'>
              <ul className='flex gap-10 text-sm font-bold text-black justify-center content-center'>
                <li className='hover:text-white cursor-pointer transition-all duration-300'>About</li>
                <li className='hover:text-white cursor-pointer transition-all duration-300'>Experience</li>
                <li className='hover:text-white cursor-pointer transition-all duration-300'>Project</li>
                <li className='hover:text-white cursor-pointer transition-all duration-300'>Galllery</li>
                <li className='hover:text-white cursor-pointer transition-all duration-300'>Contact</li>
              </ul>
            </div> */}

            <a href="" className='border-2 border-blue-500 text-blue-500 text-sm font-semibold py-2 px-4 rounded-md ms-auto hover:bg-blue-500 hover:text-white transition-all duration-300'>
              Resume
            </a>
        </div>
    </div>
  )
}

export default Navbar