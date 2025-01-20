import React from 'react'

function Language({img, name}) {
  return (
    <div className='flex gap-2 content-center text-black bg-white rounded-full p-3'>
        <img src={img} alt="" className='w-6 h-6'/>
        <p className='text-sm my-auto'>{name}</p>
    </div>
  )
}

export default Language