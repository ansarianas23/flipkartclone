import React from 'react'

const BoxAdBanner = ({AdimageUrl}) => {
  // console.log("AdimageUrl",AdimageUrl , typeof AdimageUrl)

  return (
    <div className={`col-span-full md:col-span-4 h-[680px] overflow-hidden bg-[url("${AdimageUrl}")] bg-no-repeat bg-cover bg-center bgAd`}>
    </div>
  )
}

export default BoxAdBanner
