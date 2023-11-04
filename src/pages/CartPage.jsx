import { useSelector } from "react-redux"
import CartCard from "../components/CartCard"
import CheckoutTotal from "../components/CheckoutTotal"
import EmptyCartMessage from "../components/EmptyCartMessage";
import PlaceOrderBtn from "../components/PlaceOrderBtn";

function CartPage() {

  const carts = useSelector(state => state.cart.carts)

  return (
    <div className='w-full h-fit py-5 px-2'>
      <div className="flex max-w-[78rem] mx-auto flex-col lg:flex-row justify-between relative space-y-3 lg:space-y-0">
        {/* Cart Products Container */}
        {carts?.length >=1 && <div className="w-full lg:w-[69%] h-fit relative">
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
        {<div className="w-full lg:w-[30%] h-fit sticky top-20">
          {carts?.length >= 1 && <CheckoutTotal/>}
        </div>}
        
        {/* empty cart message container */}
        <div className="absolute w-full">
          {carts?.length === 0 && <EmptyCartMessage/>}
        </div>

        </div>
    </div>
  )
}

export default CartPage
