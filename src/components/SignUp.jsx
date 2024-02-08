import { useState } from "react";
import authService from "../appwrite/auth";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login as authLogin } from "../features/authslice";
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

function SignUp() {

  const [phoneNo, setPhoneNo] = useState('')
  const [Otp, setOtp] = useState('')
  const [uID, setUId] = useState('');
  const [error, setError] = useState("");
  
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
        <div className="w-full md:w-[40%] h-fit md:h-full bg-flipkart-blue py-3 md:py-10 px-4 md:px-8">
          <div className="flex flex-col text-white space-y-2 md:space-y-4">
            <h2 className="text-2xl md:text-[28px] font-medium">Looks like you're new here!</h2>
            <p className="md:text-lg font-normal">Sign up with your mobile number to get started</p>
          </div>
        </div>

        {/* right div */}
        <div className="flex flex-col md:justify-between px-5 md:px-10 pt-5 md:pt-16 pb-10 h-fit md:h-full w-full md:w-[60%]">
            <form className="flex flex-col space-y-4">
              <input 
              className="outline-none border-b-[1px] border-gray-300 py-2 focus:border-flipkart-btn-blue transition-all ease-out" 
              type="text" 
              placeholder="Enter Mobile Number"/>

              <span className="text-xs text-gray-400">By continuing, you agree to Flipkart's  
                <span className="text-flipkart-blue cursor-pointer"> Terms of Use </span>
                 and
                <span className="text-flipkart-blue cursor-pointer"> Privacy Policy.</span>
              </span>
              
              <button className="text-white bg-flipkart-orange font-medium w-full py-3 rounded-sm uppercase">Continue</button>

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
