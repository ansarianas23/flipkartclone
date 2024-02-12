import React from 'react'

const BigAdBanner = ({ AdUrl }) => {

    const styles = {
    backgroundImage: `url(${AdUrl})`
  };

  return (
    <div className='col-span-full md:col-span-6 lg:col-span-8 h-[150px] md:h-[680px] bg-orange-100'>
        <div className='md:bg-center bg-no-repeat bg-cover h-full' style={styles}></div>
    </div>
  )
}

export default BigAdBanner