import { useState } from "react"
import authService from "../appwrite/auth"
import { useDispatch } from "react-redux"
import { login as authLogin } from "../features/authslice"
import { Link, useNavigate } from 'react-router-dom'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

function Login() {
    // const [email, setEmail] = useState("")
    // const [password, setPassword] = useState("")
    // const [inputType, setInputType] = useState("password")
    const [error, setError] = useState("")
    const [phoneNo, setPhoneNo] = useState('')
    const [Otp, setOtp] = useState('')
    const [uID, setUId] = useState('');

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleOTP = async (e)=>{
        e.preventDefault();
        try {
          const userSessionToken = await authService.getLoginOtp(phoneNo)
        if(userSessionToken){
          const userID = userSessionToken.userId
          if(userID){
            setUId(userID)
          }
        }
        } catch (error) {
          setError(error.message)
        }
    }

    const handleLogin = async (e) =>{
      e.preventDefault();
      const session = await authService.loginByOtp({uID, Otp})
      if(session){
        const userInfo = await authService.getCurrentUser()
          if(userInfo){
            toast.success('You are logged in successfully', {
            position: "bottom-center",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });

            dispatch(authLogin(userInfo))
            setTimeout(() => {
              navigate("/")
            }, 1500);
          }
      }
    }


    
  return (
    <div className="w-fit h-fit">
      {/* Toast Container */}
      <ToastContainer 
      position="bottom-center"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"/>

      <div className="flex w-[845px] h-[535px] bg-white">
        {/* left div */}
        <div className="w-[40%] h-full bg-flipkart-blue py-10 px-8">
          <div className="flex flex-col text-white space-y-4">
            <h2 className="text-[28px] font-medium">Login</h2>
            <p className="text-lg font-normal">Get access to your Orders, Wishlist and Recommendations</p>
          </div>
        </div>

        {/*Otp send right div */}
        {!uID && <div className="flex flex-col justify-between px-10 pt-16 pb-10 h-full w-[60%]">
            <form className="flex flex-col space-y-6">
              <input
              onChange={(e)=>{setPhoneNo(e.target.value)}} 
              className="outline-none border-b-[1px] border-gray-300 py-2 focus:border-flipkart-btn-blue transition-all ease-out" 
              type="text" 
              placeholder="Enter Email/Mobile Number"/>

              <span className="text-xs text-gray-400">By continuing, you agree to Flipkart's  
                <span className="text-flipkart-blue cursor-pointer"> Terms of Use </span>
                 and
                <span className="text-flipkart-blue cursor-pointer"> Privacy Policy.</span>
              </span>

              <button disabled={phoneNo.length == 0? true : false} onClick={handleOTP} className="text-white bg-flipkart-orange font-medium w-full py-3 rounded-sm">Request OTP</button>
            </form>

            <Link to="/signup">
              <p className="text-flipkart-blue font-medium text-sm text-center">New to Flipkart? Create an account</p>
            </Link>
        </div>}
        
        {/*Otp verify right div */}
        {uID && <div className="flex flex-col px-10 pt-16 pb-10 h-full w-[60%]">
            <form className="flex flex-col space-y-10">
              <span className="inline-block text-center px-20">Please enter the OTP sent to {phoneNo}. 
                <span onClick={()=>{setUId('')}} className="text-flipkart-blue font-medium cursor-pointer"> Change</span>
              </span>

              <input
              onChange={(e)=>{setOtp(e.target.value)}} 
              className="outline-none border-b-[1px] border-gray-300 py-2 focus:border-flipkart-btn-blue transition-all ease-out" 
              type="text" 
              placeholder="Enter OTP"/>

              <button onClick={handleLogin} className="text-white bg-flipkart-blue font-medium w-full py-3 rounded-sm">Verify</button>
            </form>

              <p className="text-gray-400 text-sm text-center pt-6">Not received your code? 
                <span onClick={handleOTP} className="text-flipkart-blue font-medium cursor-pointer"> Resend code</span>
              </p>
        </div>}
      </div>


    </div>
  )
}

export default Login
