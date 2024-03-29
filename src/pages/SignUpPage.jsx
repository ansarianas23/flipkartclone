import React from 'react'
import SignUp from '../components/SignUp'
import { useEffect } from 'react'

function SignUpPage() {

  useEffect(()=>{
    window.scrollTo({ top:0, behavior: 'auto'})
  },[])

  return (
    <div className='w-full flex h-fit justify-center '>
      <div className='max-w-[850px] h-fit md:h-[535px] py-3 mx-1'>
        <SignUp/>
      </div>
    </div>
  )
}

export default SignUpPage
