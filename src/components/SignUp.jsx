import { useEffect, useRef, useState } from "react";
import authService from "../appwrite/auth";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login as authLogin } from "../features/authslice";
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

function SignUp() {

  const [phoneNo, setPhoneNo] = useState('')
  const [uID, setUId] = useState('');
  const [error, setError] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const NumberInputRef = useRef();
  
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const create = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const userData = await authService.createAccount({
        email,
        password,
        name,
      });
      
      if (userData) {
        const userData = await authService.getCurrentUser();
        if (userData) {
          toast.success('Account Created successfully', {
            position: "bottom-center",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          dispatch(authLogin(userData));

          setTimeout(() => {
            navigate("/")
          }, 1500);

          // setting fields empty
          setName("");
          setEmail("");
          setPassword("");
        }
      }
    } catch (error) {
      setError(error);
    }
  };

  useEffect(()=>{
    !uID && NumberInputRef.current.focus();
  },[])

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

      <div className="flex flex-col md:flex-row w-full h-full bg-white">
        {/* left div */}
        <div className="flex flex-col items-center justify-between w-full md:w-[40%] h-fit md:h-full bg-flipkart-blue py-3 md:py-10 px-4 md:px-8">
          <div className="flex flex-col text-white space-y-2 md:space-y-4">
            <h2 className="text-2xl md:text-[28px] font-medium">Looks like you're new here!</h2>
            <p className="md:text-lg font-normal">Sign up with your mobile number to get started</p>
          </div>
          <img className="w-36 md:w-auto mt-3 md:mt-0" src="https://www.bingocycles.com/images/login_img.png" alt="" />
        </div>

        {/* right div */}
        <div className="flex flex-col md:justify-between px-5 md:px-10 pt-5 md:pt-16 pb-10 h-fit md:h-full w-full md:w-[60%]">
            <form className="flex flex-col space-y-4">

            <div className="relative w-full">
              <label htmlFor="number" onClick={()=> NumberInputRef.current.focus()} className={`${isFocused ? "absolute -top-2 text-xs" : "absolute top-[50%] translate-y-[-50%]"} transition-all ease-in-out text-gray-400 hover:cursor-text`}>Enter Mobile Number</label>
                <input
                ref={NumberInputRef} 
                className="w-full outline-none border-b-[1px] border-gray-300 py-2 focus:border-flipkart-btn-blue transition-all ease-out" 
                type="text"
                onChange={(e)=>{setPhoneNo(e.target.value)}}
                onFocus={()=>{setIsFocused(true)}}
                onBlur={()=>{phoneNo ? "" : setIsFocused(false)}}
                />
            </div>

              <span className="text-xs text-gray-400">By continuing, you agree to Flipkart's  
                <span className="text-flipkart-blue cursor-pointer"> Terms of Use </span>
                 and
                <span className="text-flipkart-blue cursor-pointer"> Privacy Policy.</span>
              </span>
              
              <button disabled={phoneNo? false : true} className={`${phoneNo ? "bg-flipkart-orange" : "bg-orange-300"} text-white  font-medium w-full py-3 rounded-sm uppercase`}>Continue</button>

              <Link to="/login">
                <span className="inline-block text-flipkart-blue bg-white font-medium w-full py-3 rounded-sm uppercase text-center shadow-md">Existing User?Log in</span>
              </Link>
            </form>
        </div>

      </div>


    </div>
  );
}

export default SignUp;
