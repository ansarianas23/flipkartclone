
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import authService from "../appwrite/auth";
import { logout } from "../features/authslice";
import { AiOutlineSearch, AiOutlineDownload, AiOutlineShop } from "react-icons/ai";
import { BsCart3 } from "react-icons/bs";
import { PiDotsThreeVerticalBold } from "react-icons/pi";
import { AiOutlineUser, AiOutlineHeart } from "react-icons/ai";
import { BsBoxSeam, BsBell } from "react-icons/bs";
import { CiHeadphones } from "react-icons/ci";
import { HiMiniArrowTrendingUp } from "react-icons/hi2";
import { FiLogOut } from "react-icons/fi";

function Navbar() {
  const carts = useSelector((state) => state.cart.carts);
  const userStatus = useSelector((state) => state.auth.status);

  const [toggleDropdown, setToggleDropdown] = useState(false);
  const [toggleDropdown2, setToggleDropdown2] = useState(false);
  const currentPageLocation = window.location.href.toString().slice(22);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = (e) => {
    e.preventDefault();
    authService.logout().then(() => {
      dispatch(logout());
      setTimeout(() => {
        navigate("/home");
      }, 1500);
    });
  };

  const logoSrc ="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_plus-535108.svg";

  return (
      <div className={`${currentPageLocation == 'home'? 'bg-white text-black': 'bg-flipkart-blue'} w-full h-[65px] grid grid-cols-2 grid-rows-2 md:grid-cols-3`}>      {/* px-52 */}

        {/* left part */}
        <div className="w-fit h-fit bg-green-100">
          {/* main Logo */}
            <Link to="/home">
              <div>
                  <div className="flex flex-col items-center">
                    <span className={`${currentPageLocation == 'home'?"text-flipkart-btn-blue" : "text-white"} font-bold italic text-xl `}>Flipkart</span>
                    <div className="flex space-x-1 items-center">
                      <span className={`${currentPageLocation == 'home' ? "text-gray-400" : "text-white"} italic font-medium text-xs `}>Explore</span>
                      <span className="italic font-medium text-xs text-yellow-400">Plus</span>
                      <span className=""><img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/plus-brand-bc165b.svg" alt="" /></span>
                    </div>
                  </div>
              </div>
            </Link>
        </div>
        {/* Left Part End Here */}

        {/* Middle search bar */}
        <div className="col-span-3 md:col-span-1 w-[38vw] h-[40px] flex items-center rounded-sm bg-blue-50 order-3 md:order-2">
            <button className="h-full w-fit px-2 bg-transparent cursor-pointer">
              <AiOutlineSearch className="text-gray-500 text-2xl font-bold" />
            </button>

            <div className="w-full">
              <input
                className="w-full h-full text-black outline-none bg-transparent text-lg placeholder:text-gray-500 placeholder:font-normal"
                type="text"
                placeholder="Search for products brand and more"/>
            </div>

            {/* search Results */}
            {/* <div className="w-full h-fit absolute top-10 bg-white rounded-md overflow-hidden">
              <ul className="">
                <li className="py-2 px-3 hover:bg-blue-50 cursor-pointer">Lorem ipsum dolor sit amet.</li>
                <li className="py-2 px-3 hover:bg-blue-50 cursor-pointer">Lorem ipsum dolor sit amet.</li>
                <li className="py-2 px-3 hover:bg-blue-50 cursor-pointer">Lorem ipsum dolor sit amet.</li>
                <li className="py-2 px-3 hover:bg-blue-50 cursor-pointer">Lorem ipsum dolor sit amet.</li>
                <li className="py-2 px-3 hover:bg-blue-50 cursor-pointer">Lorem ipsum dolor sit amet.</li>
              </ul>
            </div> */}
        </div>
        {/* Middle search bar Ends Here */}

        {/* Right part */}
        <div className="flex w-fit h-fit gap-10 bg-red-100 col-span-1 order-2 md:order-3">
          
          {/* Become a seller */}
          <div className={`${currentPageLocation == 'home'? 'text-black' : 'text-white'} min-w-fit space-x-2 hidden md:flex items-center cursor-pointer`}>
            <AiOutlineShop className="text-2xl text-inherit"/>
            <span className="text-lg hidden xl:block">Become a Seller</span>
          </div>

          {/* login button */}
          <div onMouseEnter={() =>  toggleDropdown? setToggleDropdown(false) : setToggleDropdown(true)}
            onMouseLeave={() => setToggleDropdown(false)}
            className={`${currentPageLocation == 'home'? 'text-black hover:bg-gray-100 border-[1px] border-white hover:border-gray-300 rounded-md' : 'text-white'} flex items-center py-1 px-3 relative`}>
            <AiOutlineUser className="text-2xl mr-1"/>

            <Link to={userStatus? '/home' :"/login"}>
              <span className=" text-lg ">{userStatus ? "Account" : "Login"}</span>
            </Link>

            {/*Login dropdown */}
            <div onMouseLeave={() => {setToggleDropdown(false)}}
              className={`z-10 ${toggleDropdown ? "block" : "hidden"} w-[250px] absolute left-0 top-9 bg-white text-black rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] overflow-hidden`}>
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

                <Link to="/wishlist">
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
            <div className={`${currentPageLocation == 'home'? 'text-black' : 'text-white'} flex items-center space-x-2`}>
              {/* Cart Count */}
                <div className="w-fit h-fit relative">
                  <BsCart3 className="text-xl" />
                  {carts?.length >=1 && <div className="flex justify-center items-center w-[18px] h-[18px] absolute -top-2 -right-1 bg-flipkart-orange px-[6px] rounded-full text-xs text-white font-bold">
                    {carts?.length}
                  </div>}
                </div>

              <Link to="/cart">  
                  <p className="text-lg hidden xl:block">Cart</p>
              </Link>
            </div>

          {/* other dropdown */}
          {currentPageLocation == 'home' && <div onMouseEnter={()=>{toggleDropdown2? setToggleDropdown2(false) : setToggleDropdown2(true)}}
          onMouseLeave={() => {setToggleDropdown2(false)}} 
          className="hidden lg:block relative hover:bg-gray-100 border-[1px] border-white hover:border-gray-300 rounded-md p-2 cursor-pointer">
            <PiDotsThreeVerticalBold className={`text-2xl text-gray-500`} />

            <div className={`${toggleDropdown2? "block" : "hidden"} text-black bg-white rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] overflow-hidden absolute top-10 right-0 w-[220px]`}>
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
          </div>}

        </div>
        {/* Right Part End Here */}
      </div>
  );
}

export default Navbar;
