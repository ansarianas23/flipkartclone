import { useDispatch, useSelector } from "react-redux"
import { logout } from "../features/authslice"
import { useNavigate } from "react-router-dom"
import authService from "../appwrite/auth"


function Profile() {

    const userData = useSelector(state => state.auth.userData)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const logoutHandler = (e) =>{
        e.preventDefault();
        authService.logout().then(() => {
          dispatch(logout())
      })
      setTimeout(() => {
        navigate("/")
      }, 1500);
    }


  return (
    <div className='w-[50%] min-h-[25vh] bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] mx-auto mt-20 rounded-md p-10'>
      <h2 className='text-2xl'>Your Profile</h2>
      <p className="mt-2">Name: {userData? userData.name : ""}</p>
      <p className="mt-2">Email: {userData? userData.email : ""}</p>
      <p className="mt-2">Phone: {userData? userData.phone : ""}</p>


      <button
      onClick={logoutHandler}
       className="bg-flipkart-orange hover:bg-orange-300 transition rounded-sm text-white py-2 mt-10 w-full">Logout</button>

    </div>
  )
}

export default Profile
