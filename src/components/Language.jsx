import React from 'react'

function Language({img, name}) {
  return (
    <div className='flex gap-2 content-center'>
        <img src={img} alt="" className='w-5 h-5'/>
        <p className='text-xs my-auto'>{name}</p>
    </div>
  )
}

export default Language