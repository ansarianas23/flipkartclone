import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import authService from "../appwrite/auth";
import { logout } from "../features/authslice";
import { AiOutlineSearch, AiOutlineDownload } from "react-icons/ai";
import { BiSolidCart } from "react-icons/bi";
import { PiDotsThreeVerticalBold } from "react-icons/pi";
import { AiOutlineUser, AiOutlineHeart } from "react-icons/ai";
import { BsBoxSeam, BsBell } from "react-icons/bs";
import { CiHeadphones } from "react-icons/ci";
import { HiMiniArrowTrendingUp } from "react-icons/hi2";
import { FiLogOut } from "react-icons/fi";

function Navbar() {
  const carts = useSelector((state) => state.cart.carts);
  const userStatus = useSelector((state) => state.auth.status);
  const userData = useSelector((state) => state.auth.userData);
  const [toggleDropdown, setToggleDropdown] = useState(false);
  const [toggleDropdown2, setToggleDropdown2] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = (e) => {
    e.preventDefault();
    authService.logout().then(() => {
      dispatch(logout());
    });
    setTimeout(() => {
      navigate("/");
    }, 1500);
  };

  const logoSrc =
    "https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_plus-535108.svg";

  return (
    <div className="bg-white w-full">
      <div className="w-[84vw] mx-auto flex justify-between items-cente lg:px-12 py-5 lg:py-3 ">
        {/* left part */}
        <div className="flex items-center">
          {/* main Logo */}
          <div className="mr-7 w-fit">
            <Link to="/home">
              <img
                src={logoSrc}
                width="130"
                height="38"
                alt="Flipkart"
                title="Flipkart"
              />
            </Link>
          </div>

          {/* Middle search bar */}
          <div className="w-[38vw] h-[40px] flex items-center rounded-lg bg-blue-50">
            <button className="h-full w-fit px-2 bg-transparent cursor-pointer">
              <AiOutlineSearch className="text-gray-500 text-2xl font-bold" />
            </button>

            <div className="w-full">
              <input
                className="w-full text-black outline-none rounded-sm bg-transparent text-lg placeholder:text-gray-500 placeholder:font-normal"
                type="text"
                placeholder="Search for products brand and more"
              />
            </div>
          </div>
        </div>

        {/* Right part */}
        <div className="flex justify-center items-center space-x-10 text-black">
          
          {/* Become a seller */}
          <div className="min-w-fit space-x-2 ml-20 hidden md:flex cursor-pointer">
            <img
              className="w-fit"
              src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/Store-9eeae2.svg"
              alt=""
            />
            <span className="text-lg hidden xl:block">Become a Seller</span>
          </div>

          {/* login button */}
          <div onMouseEnter={() =>  toggleDropdown? setToggleDropdown(false) : setToggleDropdown(true)}
            onMouseLeave={() => setToggleDropdown(false)}
            className={`flex items-center ${userStatus? "hover:bg-gray-100 hover:text-black": "hover:bg-flipkart-btn-blue hover:text-white"} py-2 px-3 rounded-md border-[1px] border-white hover:border-gray-300 relative`}>
            <AiOutlineUser className="text-2xl mr-1"/>
            <Link to="/login">
              <span className="text-lg">{userStatus ? "Account" : "Login"}</span>
            </Link>

            {/*Login dropdown */}
            <div
              onMouseLeave={() => {
                setToggleDropdown(false);
              }}
              className={`z-10 ${
                toggleDropdown ? "block" : "hidden"
              } w-[250px] absolute left-0 top-11 bg-white text-black rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] overflow-hidden`}
            >
              <ul>
                {!userStatus && <Link to="/signup">
                  <li className="w-full py-3 px-3 border-b-[1px] flex justify-between">
                    <span>New customer?</span>
                    <span className="text-flipkart-btn-blue font-semibold">Sign Up</span>
                  </li>
                </Link>}

                <Link to={userStatus ? "/profile" : "/login"}>
                  <li className="px-4 py-2 hover:bg-gray-100 text-sm flex items-center">
                    <span className="mr-1"><AiOutlineUser/></span>
                    <span>My Profile</span>
                  </li>
                </Link>

                <Link to="/orders">
                  <li className="px-4 py-2 hover:bg-gray-100 text-sm flex items-center">
                    <span className="mr-1"><BsBoxSeam /></span>
                    <span>Orders</span>
                  </li>
                </Link>

                <Link to="/">
                  <li className="px-4 py-2 hover:bg-gray-100 text-sm flex items-center">
                    <span className="mr-1"><AiOutlineHeart /></span>
                    <span>Wishlist</span>
                  </li>
                </Link>

                {userStatus && (
                  <li
                    onClick={logoutHandler}
                    className="px-4 py-2 hover:bg-gray-100 text-sm flex items-center cursor-pointer">
                      <span><FiLogOut className="mr-1"/></span>
                      <span>Logout</span>
                  </li>
                )}
              </ul>
            </div>
          </div>

          {/* cart */}
          <Link to="/cart">
            <div className="flex items-center space-x-2">

              {carts?.length >=1 && <div className="w-fit h-fit relative">
                <BiSolidCart className="text-2xl" />
                <div className="flex justify-center items-center w-[18px] h-[18px] absolute -top-2 -right-1 bg-flipkart-orange px-[6px] rounded-full text-xs text-white font-bold">
                  {carts?.length}
                </div>
              </div>}

              <div>
                <span className="text-lg hidden xl:block">Cart</span>
              </div>    
            </div>
          </Link>

          <div 
          onMouseEnter={()=>{
            toggleDropdown2? setToggleDropdown2(false) : setToggleDropdown2(true)
          }}
          onMouseLeave={() => {
            setToggleDropdown2(false);
          }} 
          className="relative hover:bg-gray-100 border-[1px] border-white hover:border-gray-300 rounded-md p-2 cursor-pointer">
            <PiDotsThreeVerticalBold className="text-2xl text-gray-500" />

            {/* other dropdown */}
            <div className={`${toggleDropdown2? "block" : "hidden"} bg-white rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] overflow-hidden absolute top-10 right-0 w-[220px]`}>
              <ul className="space-y-1">
                <li className="cursor-pointer hover:bg-gray-100 px-3 py-2 flex items-center">
                  <span className="mr-1"><BsBell/></span>
                  <span>Notification preferences</span>
                </li>
                <li className="cursor-pointer hover:bg-gray-100 px-3 py-2 flex items-center">
                  <span className="mr-1"><CiHeadphones/></span>
                  <span>24x7 Customer Care</span>
                </li>
                <li className="cursor-pointer hover:bg-gray-100 px-3 py-2 flex items-center">
                  <span className="mr-1"><HiMiniArrowTrendingUp/></span>
                  <span>Advertise</span>
                </li>
                <li className="cursor-pointer hover:bg-gray-100 px-3 py-2 flex items-center">
                  <span className="mr-1"><AiOutlineDownload/></span>
                  <span>Download App</span>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Navbar;
