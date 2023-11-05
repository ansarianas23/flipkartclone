import { useDispatch, useSelector } from "react-redux"
import { logout } from "../features/authslice"
import { useNavigate } from "react-router-dom"
import authService from "../appwrite/auth"
import { LiaAngleRightSolid } from 'react-icons/lia'
import { FaPowerOff } from 'react-icons/fa'
import { RiWallet3Fill, RiFolderUserFill } from 'react-icons/ri'
import { BiSolidUser } from 'react-icons/bi'
import { useState } from "react"


function Profile() {

    const userData = useSelector(state => state.auth.userData)
    const [firstName, setFirstName] = useState('Ansari');
    const [lastName, setLastName] = useState('Anas');
    const [email, setEmail] = useState('ansariii.5130@gmail.comas');

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
    <div className="w-full h-full flex lg:flex-row flex-col space-y-4 lg:space-x-4">
      {/* left column */}
      <div className="flex flex-col space-y-4 w-full lg:w-[25%]">
        {/* left 1st div */}
        <div className="flex items-center p-3 space-x-3 shadow-sm w-full bg-white">
          <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/profile-pic-male_4811a1.svg" alt="" />
          <div className="flex flex-col">
            <span className="text-sm">Hello</span>
            <span className="font-medium">{firstName} {lastName}</span>
          </div>
        </div>

        {/* Left middle div */}
        <div className="flex flex-col shadow-sm w-full bg-white">

          <div className="flex justify-between items-center p-5 border-b-[1px] border-gray-100 cursor-pointer">
            <div className="flex items-center space-x-5">
              <span><img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDI0IDE4Ij48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC04LjY5NCAtMTEpIj48ZWxsaXBzZSBjeD0iMjAuNTU3IiBjeT0iMjAiIHJ4PSIyMC41NTciIHJ5PSIyMCIvPjxwYXRoIGZpbGw9IiMyODc0RjEiIGQ9Ik05IDExdjE3LjEwOGMwIC40OTMuNDEuODkyLjkxOC44OTJoNC45M3YtNS4yNTdoLTMuMDMzbDQuOTEyLTQuNzcgNC45NzIgNC44M2gtMy4wMzVWMjloMTIuNDE3Yy41MDcgMCAuOTE4LS40LjkxOC0uODkyVjExSDl6Ii8+PC9nPjwvc3ZnPg==" alt="" /></span>
              <span className="uppercase font-medium cursor-pointer hover:text-flipkart-blue text-gray-500">My orders</span>
            </div>
            <span><LiaAngleRightSolid/></span>
          </div>

          {/* Account Settings */}
          <div className="flex flex-col border-b-[1px] border-gray-100">
            <div className="flex items-center space-x-5 p-5">
              <BiSolidUser className="text-2xl text-flipkart-blue"/>
              <span className="uppercase font-medium text-gray-500">Account settings</span>
            </div>
            <div className="pl-16 py-3 text-sm hover:bg-blue-50 cursor-pointer hover:text-flipkart-blue">Profile Information</div>
            <div className="pl-16 py-3 text-sm hover:bg-blue-50 cursor-pointer hover:text-flipkart-blue">Manage Addresses</div>
            <div className="pl-16 py-3 text-sm hover:bg-blue-50 cursor-pointer hover:text-flipkart-blue">Pan Card Information</div>
          </div>

          {/* Payments */}
          <div className="flex flex-col border-b-[1px] border-gray-100">
            <div className="flex items-center space-x-5 p-5">
              <RiWallet3Fill className="text-2xl text-flipkart-blue"/>
              <span className="uppercase font-medium text-gray-500">Payments</span>
            </div>
            <div className="pl-16 py-3 text-sm hover:bg-blue-50 cursor-pointer hover:text-flipkart-blue">Gift Card</div>
            <div className="pl-16 py-3 text-sm hover:bg-blue-50 cursor-pointer hover:text-flipkart-blue">Saved UPI</div>
            <div className="pl-16 py-3 text-sm hover:bg-blue-50 cursor-pointer hover:text-flipkart-blue">Saved Cards</div>
          </div>

          {/* My stuff */}
          <div className="flex flex-col border-b-[1px] border-gray-100">
            <div className="flex items-center space-x-5 p-5">
              <RiFolderUserFill className="text-2xl text-flipkart-blue"/>
              <span className="uppercase font-medium text-gray-500">My stuff</span>
            </div>
            <div className="pl-16 py-3 text-sm hover:bg-blue-50 cursor-pointer hover:text-flipkart-blue">My Coupons</div>
            <div className="pl-16 py-3 text-sm hover:bg-blue-50 cursor-pointer hover:text-flipkart-blue">My Reviews & Ratings</div>
            <div className="pl-16 py-3 text-sm hover:bg-blue-50 cursor-pointer hover:text-flipkart-blue">All Notifications</div>
            <div className="pl-16 py-3 text-sm hover:bg-blue-50 cursor-pointer hover:text-flipkart-blue">My Wishlist</div>
          </div>


          <div onClick={logoutHandler} className="flex items-center p-5 space-x-5">
            <span className="text-xl text-flipkart-blue"><FaPowerOff /></span>
            <span className="text-gray-500 font-medium hover:text-flipkart-blue cursor-pointer">Logout</span>
          </div>

        </div>

        {/* left last div */}
        <div className="flex flex-col space-y-2 p-4 w-full shadow-sm bg-white">
          <span className="text-xs font-semibold">Frequently Visited:</span>
          <div className="text-xs space-x-2 text-gray-500">
            <span>Track Order</span>
            <span>Help Center</span>
          </div>
        </div>

      </div>

      {/* RIGHT INFO CONTAINER */}
      <div className="w-full lg:w-[75%] flex flex-col space-y-10 shadow-md bg-white py-5 px-7 relative">

        {/* Personal Information */}
        <div className="flex flex-col space-y-5">
          <div className="flex items-center space-x-3">
            <span className="font-medium text-lg">Personal Information</span>
            <span className="text-flipkart-blue cursor-pointer font-medium text-sm">Edit</span>
          </div>
          <form className="flex flex-wrap space-y-4 lg:space-y-0 lg:space-x-3">
            <input readOnly className="w-[250px] text-sm outline-none bg-gray-50 border-[1px] border-gray-300 p-3 hover:cursor-not-allowed text-gray-500" value={firstName} type="text" />
            <input readOnly className="w-[250px] text-sm outline-none bg-gray-50 border-[1px] border-gray-300 p-3 hover:cursor-not-allowed text-gray-500" value={lastName} type="text" />
          </form>
        </div>

        {/* Gender */}
        <div className="flex flex-col space-y-4">
          <span>Your Gender</span>
          <div className="flex space-x-2">
            <div className="flex space-x-2">
              <input readOnly type="radio" checked/>
              <span>Male</span>
            </div>
            <div className="flex space-x-2">
              <input readOnly type="radio" />
              <span>Female</span>
            </div>
          </div>
        </div>

        {/* Email Address */}
        <div className="flex flex-col space-y-5">
          <div className="flex items-center space-x-3">
            <span className="font-medium text-lg">Email Address</span>
            <span className="text-flipkart-blue cursor-pointer font-medium text-sm">Edit</span>
          </div>
          <form>
            <input readOnly className="w-[250px] text-sm outline-none bg-gray-50 border-[1px] border-gray-300 p-3 hover:cursor-not-allowed text-gray-500" value={email} type="text" />
          </form>
        </div>

        {/* Phone Number */}
        <div className="flex flex-col space-y-5">
          <div className="flex items-center space-x-3">
            <span className="font-medium text-lg">Mobile Number</span>
            <span className="text-flipkart-blue cursor-pointer font-medium text-sm">Edit</span>
          </div>
          <form>
            <input readOnly className="w-[250px] text-sm outline-none bg-gray-50 border-[1px] border-gray-300 p-3 hover:cursor-not-allowed text-gray-500" value={userData.phone} type="text" />
          </form>
        </div>


        {/* FAQ Container */}
        <div className="flex flex-col text-sm">
          <h3 className="text-lg font-medium mb-5">FAQs</h3>
          
          <span className="font-semibold">What happens when I update my email address (or mobile number)?</span>
          <span className="">Your login email id (or mobile number) changes, likewise. You'll receive all your account related communication on your updated email address (or mobile number).</span>

          <span className="font-semibold">When will my Flipkart account be updated with the new email address (or mobile number)?</span>
          <span className="">It happens as soon as you confirm the verification code sent to your email (or mobile) and save the changes.</span>

          <span className="font-semibold">What happens to my existing Flipkart account when I update my email address (or mobile number)?</span>
          <span className="">Updating your email address (or mobile number) doesn't invalidate your account. Your account remains fully functional. You'll continue seeing your Order history, saved information and personal details.</span>

          <span className="font-semibold">Does my Seller account get affected when I update my email address?</span>
          <span className="">Flipkart has a 'single sign-on' policy. Any changes will reflect in your Seller account also.</span>

          <span className="font-semibold text-flipkart-blue cursor-pointer text-sm mt-8 mb-36">Deactivate Account</span>
        </div>

        <div className="w-full absolute bottom-0 left-0">
          <img className="w-full object-fill" src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/myProfileFooter_4e9fe2.png" alt="" />
        </div>
      </div>
    </div>
    
  )
}

export default Profile
