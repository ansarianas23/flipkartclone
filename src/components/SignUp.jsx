import { useState } from "react";
import authService from "../appwrite/auth";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login as authLogin } from "../features/authslice";
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [inputType, setInputType] = useState("password")

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
    <div className=" bg-white w-[350px] h-fit rounded-md relative flex flex-col items-center pt-5 mx-auto mt-20 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">

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


      <h1 className="text-center text-3xl font-medium">Sign Up</h1>
      <form className="w-[80%] flex flex-col">
        <label className="mb-2" htmlFor="email">
          Name:{" "}
        </label>
        <input
          onChange={(e) => {
            setName(e.target.value);
          }}
          id="username"
          className="mb-4 outline-none border rounded-sm py-1 px-2 border-black"
          type="text"
          placeholder="Enter your username here"
          value={name}
        />

        <label className="mb-2" htmlFor="email">
          Email:{" "}
        </label>
        <input
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          id="email"
          className="outline-none border rounded-sm py-1 px-2 border-black"
          type="text"
          placeholder="Enter your email here"
          value={email}
        />

        <div className="flex flex-col relative">
          <label className="mt-5 mb-2" htmlFor="password">
            Password
          </label>

          <div className="flex items-center">
            <input
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              id="password"
              className="w-full outline-none border rounded-sm py-1 px-2 border-black pr-7"
              type={inputType}
              placeholder="Enter your password here"
              value={password}
            />

            <div
              onClick={() => {
                inputType === "password"
                  ? setInputType("text")
                  : setInputType("password");
              }}
              className="ml-1 absolute right-2"
            >
              {inputType === "password" ? (
                <AiOutlineEye className="cursor-pointer" />
              ) : (
                <AiOutlineEyeInvisible className="cursor-pointer" />
              )}
            </div>
          </div>
        </div>

        <button
          disabled={
            name.length === 0 && email.length == 0 && password.length == 0
              ? true
              : false
          }
          onClick={create}
          className={`${
            email.length == 0 && password.length == 0
              ? "bg-orange-300"
              : "bg-flipkart-orange"
          } rounded-sm  text-white py-2 mt-10`}
        >
          Sign up
        </button>
      </form>

      <div className="my-4">
        <Link to="/login">
          <span className="underline hover:text-flipkart-orange transition">
            Login
          </span>
        </Link>
      </div>
    </div>
  );
}

export default SignUp;
