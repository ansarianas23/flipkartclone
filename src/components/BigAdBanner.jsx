import React from 'react'

const BigAdBanner = ({ AdUrl }) => {

    const styles = {
    backgroundImage: `url(${AdUrl})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100%'
  };

  return (
    <div className='col-span-8 h-[680px]'>
        <div style={styles}></div>
    </div>
  )
}

export default BigAdBanner