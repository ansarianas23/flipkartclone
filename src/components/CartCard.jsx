import { useDispatch } from 'react-redux'
import cameraImg from '../assets/camera.jpg'
import { removeItem, updateCart } from '../features/cartSlice'
import { useState } from 'react'
import appwriteService from '../appwrite/config'

function CartCard({id, title, desc, price, mrp, imageUrl, specification, seller}) {

  const dispatch = useDispatch()
  const [quantity, setQuantity] = useState(1);


  // console.log("specs is" ,specification)

  const deleteCartItem = () =>{
    // dispatch(removeItem(id))
    appwriteService.deleteCartProduct(id);
    dispatch(updateCart());
  }

  return (
    <div className='bg-white w-full h-fit flex p-5 space-x-6 border-b-[1px]'>
      <div className='flex gap-4'>

        {/* left div */}
        <div className='flex flex-col items-center gap-4'>
          {/* Image div */}
          <div className='w-24 h-24 overflow-hidden'>
            <img className='w-full h-full object-contain' src={imageUrl} alt="" />
          </div>

          {/* quntity selector */}
          <div className='flex items-center space-x-2'>
            <button className='w-8 h-8 rounded-full border-gray-300 border-[1px] text-center'>-</button>
            <div className='w-[45px] h-[30px] border-gray-300 border-[1px]'>
              <input type="text" className='w-full h-full outline-none text-center' defaultValue={quantity}/>
            </div>
            <button className='w-8 h-8 rounded-full border-gray-300 border-[1px] text-center'>+</button>
          </div>

        </div>

        {/* Right Div */}
        <div className="left flex flex-col gap-4">
          <h4 className=''>{title}</h4>
          {/* seller div */}
          <div className='flex items-center space-x-2'>
            <p className='text-sm font-medium text-gray-400'>Seller: {seller}</p>
            <img className='w-auto h-[15px]' src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png" alt="" />
          </div>

          <div className='flex items-center gap-2'>
            <div className='text-sm line-through text-gray-400'>₹{mrp}</div>
            <div className='text-xl font-semibold'>₹{price}</div>
            <div className='text-sm font-semibold text-green-600'>{100 - Math.ceil((price/mrp) * 100)}% off</div>
          </div>

          <div className='flex gap-5 font-semibold'>
            <div className='uppercase cursor-pointer hover:text-flipkart-blue'>Save for later</div>
            <div onClick={deleteCartItem} className='uppercase cursor-pointer hover:text-flipkart-blue'>remove</div>
          </div>

        </div>


      </div>

          {/* <button onClick={rItem} className='border border-flipkart-orange hover:bg-white hover:text-flipkart-orange bg-flipkart-orange rounded-md py-1 px-2 my-2 text-white text-lg transition-all delay-75 ease-in-out w-fit'>Remove</button> */}

    </div>
  )
}

export default CartCard
