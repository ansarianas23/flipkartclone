import React, { useState } from 'react'
import AdminLogin from '../components/AdminLogin'
import AddProductPanel from '../components/AddProductPanel'

const Adminpage = () => {

const [isAdminLoggedIn, setIsAdminLoggedIn] = useState("access-denied")


  return (
    <div className='w-full h-fit'>
      {/* login form */}
      {/* {isAdminLoggedIn === "access-denied" && <AdminLogin isAdminLoggedIn={isAdminLoggedIn} setIsAdminLoggedIn={setIsAdminLoggedIn}/>} */}

      {/* Admin Panel here */}
      {/* {isAdminLoggedIn === "access-granted" && <AddProductPanel/>} */}
      <AddProductPanel/>
    </div>
  )
}

export default Adminpage