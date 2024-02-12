import React from 'react'

function MaxWidthContainer({ children }) {
  return (
    <div className='max-w-[1630px] mx-auto'>
      {children}
    </div>
  )
}

export default MaxWidthContainer
