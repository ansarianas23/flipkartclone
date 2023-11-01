import { useSelector } from "react-redux"
import { AiFillSafetyCertificate } from "react-icons/ai";

function CheckoutTotal() {

const carts = useSelector(state => state.cart.carts)
console.log(carts);

let totalPrice = carts?.reduce((tot, item)=>{
  return tot + item.price
},0)

let totalMrp = carts?.reduce((totMrp, item)=>{
  return totMrp + item.mrp
},0)


  return (
    <>
    <div className="w-full h-full flex flex-col bg-white">
      <span className="text-gray-500 font-semibold uppercase px-6 py-3 border-b-[1px]">Price Details</span> 

      <div className="px-6 py-4 border-dashed border-b-[1px] space-y-4">
        <div className="flex justify-between">
          <span className="">Price ({carts?.length} item)</span>     
          <span className="">₹{totalMrp}</span>     
        </div> 

        <div className="flex justify-between">
          <span className="">Discount</span>     
          {/* <span className=" text-green-600">- 100</span>      */}
          <span className=" text-green-600 font-medium">-₹{totalMrp - totalPrice}</span>     
        </div> 

        <div className="flex justify-between">
          <span className="">Delivery Charges</span>     
          <span className="text-green-600"><span className="line-through text-gray-500">₹40</span> Free</span>     
        </div>  

        <div className="flex justify-between">
          <span className="">Secured Packaging Fee</span>     
          <span>₹49</span>     
        </div>  
      </div>
      
        <div className="flex justify-between px-6 py-4 border-dashed border-b-[1px]">
          <span className="text-lg font-semibold">Total Amount: </span>     
          <span className="text-lg font-semibold">₹{totalPrice + 49}</span>     
        </div>

        <p className="text-green-600 px-6 py-3 font-semibold">You will save {(totalMrp - totalPrice) - 49} on this order</p>
    </div>
    
    <div className="w-full p-5 flex items-center space-x-3 ">
      <span className="text-2xl text-gray-500"><AiFillSafetyCertificate/></span>
      <span className="text-sm font-bold text-gray-400 text-clip">Safe and Secure Payments.Easy returns.100% Authentic products.</span>
    </div>
    </>
  )
}

export default CheckoutTotal

