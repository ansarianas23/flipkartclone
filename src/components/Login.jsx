import { useEffect, useRef, useState } from "react"
import authService from "../appwrite/auth"
import { useDispatch } from "react-redux"
import { login as authLogin } from "../features/authslice"
import { Link, useNavigate } from 'react-router-dom'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

function Login() {
    let OTPLength = 6;
    const [error, setError] = useState("");
    const [phoneNo, setPhoneNo] = useState('');
    const [Otp, setOtp] = useState(Array(OTPLength).fill(""));
    const [uID, setUId] = useState('');
    const OTPinputRefs = useRef([]);

    const combinedOTP = String(Otp.join(""));

    // console.log("otp length", Otp)

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleOTPSend = async (e)=>{
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
      const session = await authService.loginByOtp({uID, combinedOTP});
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
              navigate("/home")
            }, 1500);
          }
      }
    }

    
    const handleChange =(index, e)=>{
      const value = e.target.value;
      if(isNaN(value)) return
    
      const newOTP = [...Otp]

      // allow only one input
      newOTP[index] = value.substring(value.length - 1);
    
      // console.log("newOTP",newOTP, "otp",otp)
      setOtp(newOTP);

      // Move focus to next input if current field is filled
      if(value && index <= OTPLength && OTPinputRefs.current[index+1]){
        OTPinputRefs.current[index+1].focus();
  
        // if(value && idx < length && OTPinputRefs.current[otp.indexOf("")].focus()){
        //   OTPinputRefs.current[otp.indexOf("")].focus();
        // }
      }
      Otp.every(checkEmptyOtpInput)
  
      function checkEmptyOtpInput(Otp) {
        if(Otp!==''){
          console.log("has number")
        }
        else{
          console.log("empty")
        }
      }

    }


    const handleClick = (index)=>{
      OTPinputRefs.current[index].setSelectionRange(1, 1);
  
      // Optional Validation
      if(index > 0 && !Otp[index - 1]){
        OTPinputRefs.current[Otp.indexOf("")].focus();
      }
    }

    const handleKeyDown = (index, e)=>{
      // Move focus to previous input field if pressed Backspace
     if(e.key === "Backspace" && !Otp[index] && index >0 && OTPinputRefs.current[index - 1]){
       OTPinputRefs.current[index-1].focus();
     }
   }

   useEffect(()=>{
    if(uID){
      OTPinputRefs.current[0].focus();
    }
  },[uID]);

  return (
    <div className="w-full h-full">
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

      <div className="flex flex-col md:flex-row w-full h-full bg-white overflow-hidden rounded-sm">
        {/* left div */}
        <div className="flex flex-col items-center justify-between w-full md:w-[40%] h-fit md:h-full bg-flipkart-blue py-3 md:py-10 px-4 md:px-8">
          <div className="flex flex-col text-white space-y-2 md:space-y-4">
            <h2 className="text-2xl md:text-[28px] font-medium">Login</h2>
            <p className="md:text-lg font-normal">Get access to your Orders, Wishlist and Recommendations</p>
          </div>
          <img className="w-36 md:w-auto mt-3 md:mt-0" src="https://www.bingocycles.com/images/login_img.png" alt="" />
        </div>

        {/*Otp send right div */}
        {!uID && <div className="flex flex-col md:justify-between px-5 md:px-10 pt-5 md:pt-16 pb-10 h-fit md:h-full w-full md:w-[60%]">
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

              <button disabled={phoneNo.length == 0? true : false} onClick={handleOTPSend} className="text-white bg-flipkart-orange font-medium w-full py-3 rounded-sm">Request OTP</button>
            </form>

            <Link to="/signup">
              <p className="text-flipkart-blue font-medium text-sm text-center mt-5 md:mt-auto">New to Flipkart? Create an account</p>
            </Link>
        </div>}
        
        {/*Otp verify right div */}
        {uID && <div className="flex flex-col px-5 md:px-10 pt-5 md:pt-16 pb-10 h-fit md:h-full w-full md:w-[60%]">
            <div className="flex flex-col space-y-4 md:space-y-10">
              <span className="inline-block text-center md:px-20">Please enter the OTP sent to {phoneNo}. 
                <span onClick={()=>{setUId('')}} className="text-flipkart-blue font-medium cursor-pointer"> Change</span>
              </span>

              <form className="flex flex-col gap-8">
                <div className="flex space-x-2 mx-auto">
                  {
                    Otp.map((value, index)=>{
                      return <input
                      key={index} 
                      className="h-8 w-8 outline-none border-b-[1.5px] text-center border-gray-300 font-semibold text-2xl focus:border-flipkart-blue" 
                      type="text"
                      value={value}
                      ref={(input)=> OTPinputRefs.current[index] = input}
                      onChange={(e)=>handleChange(index, e)} 
                      onClick={(e)=>handleClick(index)}
                      onKeyDown={(e)=>handleKeyDown(index, e)}
                      />
                    })
                  }
                </div>
                
                <button onClick={handleLogin} className="text-white w-fit bg-flipkart-blue font-medium w-full py-3 rounded-sm shadow-md">Verify</button>
              </form>
            </div>

              <p className="text-gray-400 text-sm text-center pt-6">Not received your code? 
                <span onClick={handleOTPSend} className="text-flipkart-blue font-medium cursor-pointer"> Resend code</span>
              </p>
        </div>}
      </div>


    </div>
  )
}

export default Login
