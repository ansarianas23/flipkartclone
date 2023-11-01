import { useSelector } from "react-redux"
import CartCard from "../components/CartCard"
import CheckoutTotal from "../components/CheckoutTotal"
import { AiFillSafetyCertificate } from "react-icons/ai";
import { Link } from "react-router-dom";
import EmptyCartMessage from "../components/EmptyCartMessage";
import PlaceOrderBtn from "../components/PlaceOrderBtn";

function CartPage() {

  const carts = useSelector(state => state.cart.carts)

  return (
    <div className='w-[65vw] min-h-[91vh] mx-auto mt-5 flex justify-between relative'>

      {/* Cart Products Container */}
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

          {/* place order btn container*/}
          <div className="bg-white py-4 px-5 w-full h-fit flex flex-row-reverse shadow-md">
            <PlaceOrderBtn/>
          </div>
      </div>}

      

      {/* Checkout total container */}
      {<div className="w-[30%] h-fit sticky top-20">
        {carts?.length >= 1 && <CheckoutTotal/>}
      </div>}
      
      {/* empty cart message container */}
      <div className="absolute w-full">
        {carts?.length === 0 && <EmptyCartMessage/>}
      </div>

    </div>
  )
}

export default CartPage
