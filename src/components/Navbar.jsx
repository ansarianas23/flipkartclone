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

  return (
      <div className="w-full grid md:flex justify-between md:justify-normal items-center grid-col-4 px-2 md:px-7 py-3 gap-y-3 relative">

        {/* left part main Logo */}
        <div className="col-span-3 md:col-span-1 order-1 mr-7">
            <Link to="/home">
              <div className="w-fit">
                  <div className="flex flex-col items-center">
                    <span className="text-white font-bold italic text-xl">Flipkart</span>
                    <div className="flex space-x-1 items-center">
                      <span className="text-white italic font-medium text-xs">Explore</span>
                      <span className="italic font-medium text-xs text-yellow-400">Plus</span>
                      <span className=""><img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/plus-brand-bc165b.svg" alt="" /></span>
                    </div>
                  </div>
              </div>
            </Link>
        </div>

        {/* Middle search bar */}
        <div className="w-full md:max-w-[50%] h-[40px] flex items-center rounded-sm bg-blue-50 relative col-span-4 md:col-span-3 order-3 md:order-2 row-span-1">
          <button className="h-full w-fit px-2 bg-transparent cursor-pointer">
            <AiOutlineSearch className="text-gray-500 text-2xl font-bold" />
          </button>

          <div className="w-full">
            <input
              className="w-full h-full inline-block text-black outline-none bg-transparent text-lg placeholder:text-gray-500 placeholder:font-normal"
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

        {/* Right part */}
        <div className="flex justify-between items-center w-auto h-auto gap-1 md:gap-10 col-span-1 order-2 md:order-3 md:absolute md:right-5">
          
            {/* Become a seller */}
            <div className="text-white w-fit h-fit space-x-2 hidden md:flex items-center cursor-pointer">
                <AiOutlineShop className="text-2xl text-inherit"/>
                <div className="text-lg hidden xl:block">Become a Seller</div>
            </div>

            {/* login button */}
            <div onMouseEnter={() =>  toggleDropdown? setToggleDropdown(false) : setToggleDropdown(true)}
                onMouseLeave={() => setToggleDropdown(false)}
                className={"flex items-center md:hover:bg-white md:hover:text-black rounded-md text-white md:py-1 md:px-3 relative"}>

                  <div>
                    <Link to={userStatus? '/profile' :"/login"}>
                      <div className="w-fit h-fit flex items-center md:space-x-2">
                        <AiOutlineUser className="text-3xl md:text-2xl"/>
                        <span className=" text-lg hidden lg:inline-block">{userStatus ? "Account" : "Login"}</span>
                      </div>
                    </Link>
                  </div>

                {/*Login dropdown */}
                <div onMouseLeave={() => {setToggleDropdown(false)}}
                className={`hidden z-10 ${toggleDropdown ? "md:block" : "md:hidden"} w-[250px] absolute left-0 top-9 bg-white text-black rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] overflow-hidden`}>
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
              <Link to="/cart">  
              <div className="flex space-x-2 text-white">
                <div className="flex items-center relative">
                    <BsCart3 className="text-2xl md:text-xl" />
                    {/* Cart Count */}
                    {carts?.length >=1 && <div className="flex justify-center items-center w-[16px] h-[16px] absolute -top-2 -right-2 bg-flipkart-orange px-[6px] rounded-full text-xs font-bold">
                        {carts?.length}
                    </div>}
                </div>

                <div>
                  <div className="text-lg hidden lg:block">Cart</div>
                </div>
              </div>
              </Link>
            
            {/* other dropdown */}
            {currentPageLocation == 'home' && <div onMouseEnter={()=>{toggleDropdown2? setToggleDropdown2(false) : setToggleDropdown2(true)}}
            onMouseLeave={() => {setToggleDropdown2(false)}} 
            className="hidden lg:block relative hover:bg-white border-[1px] border-white rounded-md p-2 cursor-pointer text-white hover:text-black">
                <PiDotsThreeVerticalBold className="text-2xl" />

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

      </div>
  );
}

export default Navbar;
