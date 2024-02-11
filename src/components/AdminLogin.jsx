import React, { useState } from 'react'
import conf from '../config/conf';

const AdminLogin = ({ setIsAdminLoggedIn}) => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setErorr] = useState("");

  const handleLoginAdmin = (e)=>{
    e.preventDefault()
    if(email == conf.adminLoginEmail && password == conf.adminLoginPassword){
      setIsAdminLoggedIn("access-granted");
      setErorr("");
    }
    else{
      setIsAdminLoggedIn("access-denied");
      setErorr("Invalid Credentails");
    }
  }


  return (
    <>
      <form className='flex flex-col w-64 mx-auto mt-5 space-y-4 bg-white px-3 py-5 rounded-md'>
        <div>
          <label className='text-sm text-gray-600' htmlFor="email">Email</label>
          <input onChange={(e)=>{setEmail(e.target.value)}} value={email} id='email' className='w-full outline-none border-[1px] border-gray-400  rounded-md p-2' type="text" placeholder='Enter your Email'/>
        </div>

        <div>
          <label className='text-sm text-gray-600' htmlFor="password">Password</label>
          <input onChange={(e)=>{setPassword(e.target.value)}} value={password} id='password' className='w-full outline-none border-[1px] border-gray-400  rounded-md p-2' type="password" placeholder='Enter Your Password'/>
        </div>
        {error && <small className='text-red-600'>{error}</small>}

        <button onClick={handleLoginAdmin} className='bg-flipkart-btn-blue text-white w-full p-2 rounded-md font-medium'>Login</button>
        <p className='text-xs text-gray-400'>Admin Panel of Flipkart Clone developed by @Ansari Md Anas</p>
      </form>
    </>
  )
}

export default AdminLogin
