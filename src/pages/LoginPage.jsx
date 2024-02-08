import { useEffect } from 'react'
import Login from '../components/Login'

function LoginPage() {

  useEffect(()=>{
    window.scrollTo({ top:0, behavior: 'auto'})
  },[])

  return (
    <div className='w-full h-fit flex justify-center'>
      <div className='max-w-[850px] h-fit md:h-[535px] py-3 mx-1'>
        <Login/>
      </div>
    </div>
  )
}

export default LoginPage
