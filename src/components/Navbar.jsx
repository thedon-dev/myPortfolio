import React from 'react'

function Navbar() {
  return (
    <div className='w-full absolute py-3 px-[7%] z-20'>
        <div className='rounded-xl w-full p-3 transition-all duration-300 group flex justify-center'>
            <a href="/" className='p-2 font-bold text-blue-500 text-start hover:scale-125 transition-all duration-300 ease-in'>THEDON<span className='text-white'>.DEV</span></a>  

            <a href="" className='border-2 border-blue-500 text-blue-500 text-sm font-semibold py-2 px-4 rounded-md ms-auto hover:bg-blue-500 hover:text-white transition-all duration-300'>
              Resume
            </a>
        </div>
    </div>
  )
}

export default Navbar