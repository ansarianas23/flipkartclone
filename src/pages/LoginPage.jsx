import { useEffect } from 'react'
import Login from '../components/Login'

function LoginPage() {

  useEffect(()=>{
    window.scrollTo({ top:0, behavior: 'auto'})
  },[])

  return (
    <div className='w-full h-fit flex justify-center py-5'>
      <div className='max-w-[850px] h-[400px] md:h-[535px] mx-5'>
        <Login/>
      </div>
    </div>
  )
}

export default LoginPage
