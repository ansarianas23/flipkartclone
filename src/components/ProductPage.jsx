import React from 'react'
import { useParams } from 'react-router-dom';
import { BiSolidCart } from "react-icons/bi";
import { MdFlashOn } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux'
import { addTocart } from '../features/cartSlice'

function ProductPage() {

    const { id }  = useParams();
    const products = useSelector(state=>state.product.products)
    const matchedProduct = products.find((item)=> item.id == id )
    const parsedSpecs = JSON.parse(matchedProduct.specification[0])

    const dispatch = useDispatch();

    const handleAddtoCart = ()=>{
        dispatch(addTocart(matchedProduct))
    }

    const handleBuyNow = ()=>{
        // TODO
    }

  return (
    <div className='flex justify-between mx-auto mt-1 bg-white w-[72vw] h-auto '> 

      {/* left image Box */}
      <div className='flex flex-col'>
        <div className='border-[1px] w-[450px] h-[450px] py-5 flex justify-center items-center'>
            <img className='object-contain w-[70%] h-auto' src={matchedProduct.imageUrl} alt="productImage" />
        </div>
        <div className='w-full flex justify-between text-white mt-3'>
            <button onClick={handleAddtoCart} className='flex justify-center items-center uppercase font-semibold bg-flipkart-yellow py-4 w-[220px] rounded-sm shadow-md'>
                <BiSolidCart className='mr-1'/> Add to cart
            </button>
            <button onClick={handleBuyNow} className='flex justify-center items-center uppercase font-semibold bg-flipkart-orange py-4 w-[220px] rounded-sm shadow-md'>
               <MdFlashOn className='mr-1'/> Buy Now
            </button>
        </div>
      </div>

      {/* Right Info Div */}
      <div className='w-[66%]'>
        <p className='text-xl'>{matchedProduct.title}</p>
        <p className='font-semibold text-2xl'>₹{matchedProduct.price}</p>

        <div className='flex h-auto mt-5'>
            <span className='text-gray-400 text-sm font-medium pr-20'>Highlights</span>
            {/* <ul className='text-sm list-disc list-outside'> */}
            <ul className='marker:text-color list-inside list-disc text-gray-300 [&>li>p]:inline [&>li>p]:text-black'>
                <li><p>{parsedSpecs.ram}</p></li>
                <li><p>{parsedSpecs.display}</p></li>
                <li><p>{parsedSpecs.camera}</p></li>
                <li><p>{parsedSpecs.battery}</p></li>
                <li><p>{parsedSpecs.processor}</p></li>
            </ul>
        </div>

        {/* description */}
        <div className='flex w-full h-fit mt-5'>
          <span className='text-gray-400 text-sm font-medium pr-20'>Description</span>
          <p className='text-sm'>{matchedProduct.desc}</p>
        </div>

      </div>


    </div>
  )
}

export default ProductPage
