import { useDispatch, useSelector } from "react-redux"
import { logout } from "../features/authslice"
import { useNavigate } from "react-router-dom"
import authService from "../appwrite/auth"
import { LiaAngleRightSolid } from 'react-icons/lia'
import { FaPowerOff } from 'react-icons/fa'
import { RiWallet3Fill, RiFolderUserFill } from 'react-icons/ri'
import { BiSolidUser } from 'react-icons/bi'
import { useEffect, useState } from "react"
import WishListProductCard from "../components/WishListProductCard"
import appwriteService from "../appwrite/config"
import { Query } from "appwrite"



function WishListPage() {

    const [firstName, setFirstName] = useState('Ansari');
    const [lastName, setLastName] = useState('Anas');
    const userStatus = useSelector(state => state.auth.status)
    const userData = useSelector(state => state.auth.userData)
    const [WishlistProducts, setWishlistProducts] = useState([]);
    

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

    useEffect(()=>{
      // to scroll to top wutomatically when page is loaded
      window.scrollTo({ top:0, behavior: 'auto'})

      // to load database based wishList user speciffic
      if(userStatus){
        // console.log("userStatus clg")
        appwriteService.getWishListProducts([Query.equal("userId", userData.$id)])
        .then((product)=>{
          if(product){
            // console.log(product)
            setWishlistProducts(product.documents);
          }
        })
      }else if(!userStatus){
        // dispatch(clearCart())
      }
    },[userStatus])

  return (
    <div className="w-full h-full flex lg:flex-row flex-col gap-4 md:space-y-0 lg:space-x-4 py-4">
      {/* left div column */}
      <div className="flex flex-col space-y-4 w-full lg:w-[25%] order-2 lg:order-1">
        {/* left 1st div */}
        <div className="flex items-center p-3 space-x-3 shadow-md w-full bg-white">
          <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/profile-pic-male_4811a1.svg" alt="" />
          <div className="flex flex-col">
            <span className="text-sm">Hello</span>
            <span className="font-medium">{firstName} {lastName}</span>
          </div>
        </div>

        {/* Left middle div */}
        <div className="flex flex-col shadow-md w-full bg-white">

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
        <div className="flex flex-col space-y-2 p-4 w-full shadow-md bg-white">
          <span className="text-xs font-semibold">Frequently Visited:</span>
          <div className="text-xs space-x-2 text-gray-500">
            <span>Track Order</span>
            <span>Help Center</span>
          </div>
        </div>

      </div>

      {/* Right WishList product Container */}
      <div className="w-full lg:w-[75%] h-fit flex flex-col shadow-md bg-white relative order-1 lg:order-2">
        <h3 className="border-b-[1px] border-gray-200 p-4 font-medium text-lg">My Wishlist ({WishlistProducts?.length})</h3>

        {
          WishlistProducts?.map((wishProd)=> <WishListProductCard
            key={wishProd.title}
            id={wishProd.$id}
            title={wishProd.title}
            desc = {wishProd.desc}
            price = {wishProd.price}
            mrp = {wishProd.mrp}
            imageUrl = {wishProd.imageUrl}
            specification = {wishProd.specification}
            seller = {wishProd.seller}
          />)
        }
      </div>
    </div>
    
  )
}

export default WishListPage





