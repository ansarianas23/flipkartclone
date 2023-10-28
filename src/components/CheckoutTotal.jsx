import { useSelector } from "react-redux"

function CheckoutTotal() {

const carts = useSelector(state => state.cart.carts)

let totalPrice = carts?.reduce((tot, item)=>{
  return tot + item.price
},0)

  return (
    <div className="w-full h-full flex flex-col bg-white">
      <span className="text-gray-500 font-semibold uppercase px-5 py-2 border-b-[1px]">Price Details</span> 

      <div className="mx-5 py-4 border-dashed border-b-[1px] space-y-4">
        <div className="flex justify-between">
          <span className="">Price ({carts?.length} item)</span>     
          <span className="">{totalPrice}</span>     
        </div> 

        <div className="flex justify-between">
          <span className="">Discount</span>     
          <span className=" text-green-600">- 100</span>     
        </div> 

        <div className="flex justify-between">
          <span className="">Delivery Charges</span>     
          <span className="text-green-600">Free</span>     
        </div>  
      </div>
      
        <div className="flex justify-between mx-5 py-4 border-dashed border-b-[1px]">
          <span className="text-lg font-semibold">Total Amount: </span>     
          <span className="text-lg font-semibold">₹{totalPrice}</span>     
        </div>

        <p className="text-green-600 px-5 py-3 font-semibold">You will save 100 on this order</p>


    </div>
  )
}

export default CheckoutTotal
