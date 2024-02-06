import React from 'react'

const BoxAdBanner = ({ AdimageUrl }) => {
  return (
    <div className={`col-span-4 h-[680px] overflow-hidden bg-[url("${AdimageUrl}")] bg-no-repeat bg-cover bg-center`}>
    </div>
  )
}

export default BoxAdBanner
