import React from 'react'
import Profile from '../components/Profile'
import { useEffect } from 'react'

function ProfilePage() {

  useEffect(()=>{
    window.scrollTo({ top:0, behavior: 'auto'})
  },[])


  return (
    <div className='w-full flex justify-center'>
      <div className='mx-auto pt-4 pb-6 max-w-[78rem] h-fit shadow-sm'>
        <Profile/>
      </div>
    </div>
  )
}

export default ProfilePage
