import React from 'react'

function Language({img, name}) {
  return (
    <div className='flex gap-2 content-center'>
        <img src={img} alt="" className='w-7 h-7'/>
        <p className='text-sm my-auto'>{name}</p>
    </div>
  )
}

export default Language