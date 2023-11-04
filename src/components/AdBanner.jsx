import React from 'react'

function AdBanner() {
  return (
    <div className='w-full h-full grid grid-cols-3 gap-3'>
      <div className='col-span-1 h-fit'>
        <img className='w-full h-auto' src="https://rukminim1.flixcart.com/fk-p-flap/520/280/image/ff5fe829530cf197.jpg?q=20" alt="" />
      </div>
      <div className='col-span-1 h-fit'>
        <img className='w-full h-auto' src="https://rukminim1.flixcart.com/fk-p-flap/520/280/image/07b437dc74cb4f25.jpg?q=20" alt="" />
      </div>
      <div className='col-span-1 h-fit'>
        <img className='w-full h-auto' src="https://rukminim1.flixcart.com/fk-p-flap/520/280/image/001d5002a4adeeaf.jpg?q=20" alt="" />
      </div>
    </div>
  )
}

export default AdBanner
