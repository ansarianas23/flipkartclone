import React from 'react'
import SignUp from '../components/SignUp'
import { useEffect } from 'react'

function SignUpPage() {

  useEffect(()=>{
    window.scrollTo({ top:0, behavior: 'auto'})
  },[])

  return (
    <div className='w-full flex h-fit justify-center pt-5'>
      <SignUp/>
    </div>
  )
}

export default SignUpPage
