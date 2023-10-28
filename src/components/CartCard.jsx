import { useDispatch } from 'react-redux'
import cameraImg from '../assets/camera.jpg'
import { removeItem } from '../features/cartSlice'
import { useState } from 'react'

function CartCard({id, title, desc, price, mrp, imageUrl, specification}) {

  const dispatch = useDispatch()
  const [quantity, setQuantity] = useState(1);

  console.log("specs is" ,specification)

  const rItem = () =>{
    dispatch(removeItem(id))
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
            <div className='w-[45px] h-[30px] border-gray-400 border-[1px]'>
              <input type="number" className='w-full h-full outline-none text-center' value={quantity}/>
            </div>
            <button className='w-8 h-8 rounded-full border-gray-300 border-[1px] text-center'>+</button>
          </div>

        </div>

        {/* Right Div */}
        <div className="left flex flex-col gap-4">
          <h4 className=''>{title}</h4>
          <p className='text-xs'>{specification}</p>
          <div className='flex items-center gap-2'>
            <div className='text-sm line-through text-gray-500'>₹{mrp}</div>
            <div className='text-xl font-semibold'>₹{price}</div>
          </div>

          <div className='flex gap-5 font-semibold'>
            <div className='uppercase cursor-pointer hover:text-flipkart-blue'>Save for later</div>
            <div onClick={rItem} className='uppercase cursor-pointer hover:text-flipkart-blue'>remove</div>
          </div>

        </div>


      </div>

          {/* <button onClick={rItem} className='border border-flipkart-orange hover:bg-white hover:text-flipkart-orange bg-flipkart-orange rounded-md py-1 px-2 my-2 text-white text-lg transition-all delay-75 ease-in-out w-fit'>Remove</button> */}

    </div>
  )
}

export default CartCard
