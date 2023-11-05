import React from 'react'
import { useEffect } from 'react'

function WishListPage() {

  useEffect(()=>{
    window.scrollTo({ top:0, behavior: 'auto'})
  },[])


  return (
    <div>
      im wishlist page
    </div>
  )
}

export default WishListPage
