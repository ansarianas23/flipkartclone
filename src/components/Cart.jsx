import { useSelector } from "react-redux"
import CartCard from "./CartCard"
import CheckoutTotal from "./CheckoutTotal"
import { AiFillSafetyCertificate } from "react-icons/ai";
import { Link } from "react-router-dom";

function Cart() {

  const carts = useSelector(state => state.cart.carts)


  return (
    <div className='w-[65vw] h-fit mx-auto mt-5 flex justify-between relative'>

      {/* Cart Products Card Container */}
      {carts?.length >=1 && <div className=" w-[69%] h-fit relative">
        {carts.map((cartItem)=>(
          
          <CartCard
          key={cartItem.title}
          id={cartItem.id}
          title={cartItem.title}
          desc = {cartItem.desc}
          price = {cartItem.price}
          mrp = {cartItem.mrp}
          imageUrl = {cartItem.imageUrl}
          specification = {cartItem.specification}
          seller = {cartItem.seller}
          />
          ))}

          {/* place order btn */}
          <div className="bg-white py-4 px-5 w-full h-fit flex flex-row-reverse shadow-md">
            <button className="uppercase text-white font-semibold px-14 py-3 bg-flipkart-orange ">place order</button>
          </div>
      </div>}

      

      {/* Checkout total component */}
      {<div className="w-[30%] h-fit sticky top-20">
        {carts?.length >= 1 && <CheckoutTotal/>}
        {carts?.length >= 1 && <div className="w-full p-5 flex items-center space-x-3 ">
          <span className="text-2xl text-gray-500"><AiFillSafetyCertificate/></span>
          <span className="text-sm font-bold text-gray-400">Safe and Secure Payments.Easy returns.100% Authentic products.</span>
        </div>}
      </div>}
      
      {/* empty cart message container */}
      {carts?.length === 0 && <div className="absolute left-[50%] top-[50%] translate-x-[-50%] bg-white w-full h-fit py-10 flex flex-col items-center">
        <img className="w-[200px] h-auto" src="https://rukminim2.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90" alt="" />
        <h3 className="text-gray-500 text-xl">Your Cart is empty</h3>
        <p className="text-xs">Explore our wide selection and find something you like</p>
      </div>}

    </div>
  )
}

export default Cart
