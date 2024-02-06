import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
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
import { GoGift } from "react-icons/go";
import { GoCreditCard } from "react-icons/go";
import { PiUserCircleLight } from "react-icons/pi";
import { MdKeyboardArrowDown } from "react-icons/md";
import { BsTag } from "react-icons/bs";
import { VscBell } from "react-icons/vsc";

function Header() {
  const carts = useSelector((state) => state.cart.carts);
  const userStatus = useSelector((state) => state.auth.status);

  const [toggleDropdown, setToggleDropdown] = useState(false);
  const [toggleDropdown2, setToggleDropdown2] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [filteredProductList, setFilteredProductList] = useState([]);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const products = useSelector(state => state.product.products);
  
  const handleOnChange = (e)=>{
    setSearchText(e.target.value)
    const filteredList = products?.filter((item)=> item["title"].toLowerCase().includes(searchText.toLowerCase()));
    setFilteredProductList(filteredList);
    // console.log(filteredProductList);
  }

  const handleSubmitOnClick = ()=>{
  }

  const logoutHandler = (e) => {
    e.preventDefault();
    authService.logout().then(() => {
      dispatch(logout());
      setTimeout(() => {
        navigate("/home");
      }, 1500);
    });
  };

  const location = useLocation();
  const { pathname } = location;
  // console.log(pathname)
  const paramId = useParams();
  // console.log("params,", paramId?.id);

  return (
      <div className={`${pathname== "/home" || pathname== "/"? "w-full" : "max-w-[78rem] mx-auto"} w-full grid md:flex justify-between md:justify-normal items-center grid-col-4 px-2 md:px-7 py-3 gap-y-3 relative`}>
        
        {/* left part main Logo */}
        <div className="col-span-3 md:col-span-1 order-1 mr-7">
            <Link to="/home">
            { pathname == "/home" || pathname=="/" ? <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg" alt="" />
            :
             <div className="flex flex-col">
              <img className="w-20" src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png" alt="" />
              <div className="text-white italic hover:underline text-xs flex space-x-1">
                <span>Explore</span>
                <span className="text-yellow-300 font-semibold">Plus</span>
                <img className="w-3 h-3" src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/plus_aef861.png" alt="fk-plus-logo" />
              </div>
             </div>}
            </Link>
        </div>

        {/* Middle search bar */}
        <div className={`w-full flex items-center relative col-span-4 md:col-span-3 order-3 md:order-2 row-span-1 ${pathname == "/home" || pathname=="/" ? "h-[40px] md:max-w-[54%] rounded-lg bg-blue-50" : "max-w-[48%] bg-white shadow-md h-[35px]"} relative`}>

          <button onClick={handleSubmitOnClick} className={`h-full w-fit px-2 bg-transparent cursor-pointer ${pathname == "/home" || pathname=="/" ? "order-first": "order-last"}`}>
            <AiOutlineSearch className="text-gray-500 text-2xl font-bold" />
          </button>

          <input
            className={`w-full h-full inline-block text-black outline-none bg-transparent text-lg placeholder:text-gray-500 placeholder:font-normal order-2 ${pathname == "/home" || pathname=="/" ? "order-last" : "placeholder:text-sm order-first px-5 text-sm"}`}
            type="text"
            placeholder="Search for products brand and more"
            onChange={handleOnChange}
            value={searchText}
            />

          
          {/* search Results */}
          {searchText.length> 0 && <div className="w-full h-fit absolute top-10 bg-white rounded-md overflow-hidden z-10">
            <ul>
              {
                filteredProductList.map((listItem)=> <Link to={`/productdetails/${listItem.id}`}><li onClick={()=>{setSearchText("")}} key={listItem.id} className="py-2 px-3 hover:bg-blue-50 cursor-pointer flex items-center"><AiOutlineSearch className="text-gray-500 text-xl mr-2" />{listItem.title}</li></Link>)
              }
            </ul>
          </div>}

        </div>

        {/* Right part */}
        <div className={`flex items-center w-fit h-fit gap-1 col-span-1 order-2 md:order-3 space-x-9 md:ml-5 
        ${pathname == "/home" || pathname=="/" && "flex-row"}
        ${pathname == "/cart" && "flex-row-reverse flex-grow"}`}>
            {/* login button */}
            <div onMouseEnter={() => setToggleDropdown(!toggleDropdown)}
                onMouseLeave={() => setToggleDropdown(false)}
                className={"flex items-center md:hover:text-black rounded-md text-white relative"}>

                <div className={`w-fit h-fit flex items-center ${pathname == "/home" || pathname=="/" ?"text-black hover:bg-blue-600 hover:text-white md:space-x-2 p-2 rounded-md": "text-flipkart-btn-blue bg-white font-medium py-1 px-10 shadow-md"}`}>
                  <PiUserCircleLight className={`text-3xl md:text-2xl top-10 ${pathname == "/home" || pathname=="/" ? "block" : "hidden"}`}/>

                  <span className={`hidden lg:inline-block ${pathname == "/home" || pathname=="/" ? "font-normal" : "font-semibold"}`}><Link to={userStatus? '/profile' :"/login"}>{userStatus ? "Account" : "Login"}</Link></span>
                  
                  <MdKeyboardArrowDown className={`${toggleDropdown? "rotate-180 transition-all ease-in-out" : ""} ${pathname == "/home" || pathname=="/" ? "block" : "hidden"}`}/>
                </div>

                {/*Account Login dropdown */}
                <div onMouseLeave={() => {setToggleDropdown(false)}}
                className={`hidden z-10 ${toggleDropdown ? "md:block" : "md:hidden"} w-[200px] absolute left-0 top-10 bg-white text-black rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] overflow-hidden ${pathname == "/home" || pathname=="/" ? "top-10" : "top-[33px]"}`}>
                <ul>
                    {!userStatus && <Link to="/signup">
                    <li className="w-full py-3 px-3 border-b-[1px] flex justify-between">
                        <span>New customer?</span>
                        <span className="text-flipkart-btn-blue font-semibold">Sign Up</span>
                    </li>
                    </Link>}

                    <Link to={userStatus ? "/profile" : "/login"}>
                    <li onClick={()=>{setToggleDropdown(false)}} className="px-4 py-[10px] cursor-pointer hover:bg-gray-100 text-sm flex items-center">
                        <span className="mr-2 text-lg"><AiOutlineUser/></span>
                        <span>My Profile</span>
                    </li>
                    </Link>

                    {userStatus && <li onClick={()=>{setToggleDropdown(false)}} className="px-4 py-[10px] cursor-pointer hover:bg-gray-100 text-sm flex items-center">
                        <img className="w-5 mr-2" src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/supercoin-ce8408.svg" alt="super-coin-logo" />
                        <span>SuperCoin Zone</span>
                    </li>}

                    <li className="px-4 py-[10px] cursor-pointer hover:bg-gray-100 text-sm flex items-center">
                        <img className="w-5 mr-2" src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkplus-4ff29a.svg" alt="Flipkart Plus Zone"/>
                        <span>Flipkart PLus Zone</span>
                    </li>

                    <Link to="/orders">
                    <li className="px-4 py-[10px] cursor-pointer hover:bg-gray-100 text-sm flex items-center">
                        <span className="mr-2 text-lg"><BsBoxSeam /></span>
                        <span>Orders</span>
                    </li>
                    </Link>

                    <Link to="/wishlist">
                    <li className="px-4 py-[10px] cursor-pointer hover:bg-gray-100 text-sm flex items-center">
                        <span className="mr-2 text-xl"><AiOutlineHeart /></span>
                        <span>Wishlist</span>
                    </li>
                    </Link>

                    {userStatus && <li className="px-4 py-[10px] cursor-pointer hover:bg-gray-100 text-sm flex items-center">
                        <span className="mr-2 text-xl"><BsTag /></span>
                        <span>Coupons</span>
                    </li>}

                    {!userStatus && <li className="px-4 py-[10px] cursor-pointer hover:bg-gray-100 text-sm flex items-center">
                        <span className="mr-2 text-lg"><GoGift /></span>
                        <span>Rewards</span>
                    </li>}

                    <li className="px-4 py-[10px] cursor-pointer hover:bg-gray-100 text-sm flex items-center">
                        <span className="mr-2 text-lg"><GoCreditCard /></span>
                        <span>Gift Cards</span>
                    </li>

                    {userStatus && <li className="px-4 py-[10px] cursor-pointer hover:bg-gray-100 text-sm flex items-center">
                        <span className="mr-2 text-lg"><VscBell /></span>
                        <span>Notofocations</span>
                    </li>}

                    {userStatus && (
                    <li
                        onClick={logoutHandler}
                        className="px-4 py-[10px] hover:bg-gray-100 text-sm flex items-center cursor-pointer">
                        <span><FiLogOut className="mr-2"/></span>
                        <span>Logout</span>
                    </li>
                    )}
                </ul>
                </div>
            </div>

            {/* cart */}
              <Link to="/cart">  
              <div className={`flex space-x-2 
              ${pathname == "/login" || pathname == "/profile" || pathname == "/signup" || pathname == `/productdetails/${paramId.id}` ? "text-white font-semibold" : "text-black"}
              ${pathname == "/cart" && "hidden"}`}>
                
                <div className="flex items-center relative">
                    <BsCart3 className="text-2xl md:text-xl" />
                    {/* Cart Count */}
                    {carts?.length >=1 && <div className="flex justify-center items-center w-[16px] h-[16px] absolute -top-2 -right-2 bg-flipkart-orange px-[6px] rounded-full text-xs font-bold">
                        {carts?.length}
                    </div>}
                </div>

                <span className="hidden lg:block">Cart</span>
              </div>
              </Link>

            {/* Become a seller */}
              <div className={`w-fit h-fit space-x-2 flex items-center cursor-pointer 
              ${pathname == "/cart" && "hidden"} 
              ${pathname == "/login" || pathname == "/profile" || pathname == "/signup" || pathname == `/productdetails/${paramId.id}` ? "text-white font-semibold" : "text-black"}`}>
                  <AiOutlineShop className="text-2xl text-inherit"/>
                  <div className="hidden xl:block">Become a Seller</div>
              </div>
            
            {/* other dropdown */}
            <div 
            onMouseEnter={()=>{toggleDropdown2? setToggleDropdown2(false) : setToggleDropdown2(true)}}
            onMouseLeave={() => {setToggleDropdown2(false)}} 
            className={`hidden relative border-[1px] border-transparent hover:border-gray-200 rounded-md p-2 cursor-pointer ${pathname == "/home" || pathname=="/" ?"text-black lg:block": "text-white hidden"}`}>
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
            </div>

        </div>

      </div>
  );
}

export default Header;
