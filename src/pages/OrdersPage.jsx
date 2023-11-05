import React from 'react'
import { useEffect } from 'react'

function OrdersPage() {

  useEffect(()=>{
    window.scrollTo({ top:0, behavior: 'auto'})
  },[])

  return (
    <div>
      im order page
    </div>
  )
}

export default OrdersPage
