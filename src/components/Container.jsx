import React from 'react'

function Container({ children }) {
  return (
    <div className='max-w-[100rem] mx-auto px-2'>
      {children}
    </div>
  )
}

export default Container
