import { useSelector } from "react-redux"
import CartCard from "../components/CartCard"
import CheckoutTotal from "../components/CheckoutTotal"
import EmptyCartMessage from "../components/EmptyCartMessage";
import PlaceOrderBtn from "../components/PlaceOrderBtn";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function CartPage() {

  const carts = useSelector(state => state.cart.carts);

  useEffect(()=>{
    window.scrollTo({ top:0, behavior: 'auto'})
  })

  const location = useLocation();
  const { pathname } = location;

  return (
    <div className='w-full min-h-[93.8vh] py-5 px-2'>
      {/* Cart Items container */}
      <div className="flex max-w-[78rem] mx-auto flex-col lg:flex-row justify-between relative space-y-3 lg:space-y-0">
        {/* Cart Products Container */}
        {carts?.length >=1 && <div className="w-full lg:w-[69%] h-fit relative">
          {carts?.map((cartItem)=>(
            
            <CartCard
            key={cartItem.title}
            // id={cartItem.id}
            id={cartItem.$id}
            title={cartItem.title}
            desc = {cartItem.desc}
            price = {cartItem.price}
            mrp = {cartItem.mrp}
            imageUrl = {cartItem.imageUrl}
            specification = {cartItem.specification}
            seller = {cartItem.seller}
            />
            ))}

            {/* place order btn container*/}
            <div className="bg-white py-4 px-5 w-full h-fit flex flex-row-reverse shadow-md">
              <PlaceOrderBtn/>
            </div>
        </div>}

        {/* Checkout total container */}
        {<div className="w-full lg:w-[30%] h-fit sticky top-20">
          {carts?.length >= 1 && <CheckoutTotal/>}
        </div>}
        
      </div>

      {/* empty cart message container */}
      {carts?.length === 0 &&
      <div className="max-w-[78rem] mx-auto">
         <EmptyCartMessage/>
      </div>}

      {/* privacy policy Container*/}
      <div className="w-full flex flex-wrap space-y-3 md:space-y-0 md:space-x-3 justify-between border-t-[1px] text-sm text-gray-600 py-8 mt-10">
        <span>Policies: <span className="cursor-pointer">Returns Policy</span> | <span className="cursor-pointer">Terms of use</span> | <span className="cursor-pointer">Security</span> | <span className="cursor-pointer">Privacy</span> | <span className="cursor-pointer">Infringement</span> | ©2024 Flipkart Clone</span>
        {pathname == "/cart" || pathname=="/" && "flex-row"}
        <span>Need help? Visit the <span className="text-flipkart-blue cursor-pointer">Help Center</span> or <span className="text-flipkart-blue cursor-pointer">Contact Us</span></span>
      </div>
    </div>
  )
}

export default CartPage
