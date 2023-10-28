import React from 'react'
import { useParams } from 'react-router-dom';
import { products } from '../ProductsApi';
import { BiSolidCart } from "react-icons/bi";
import { MdFlashOn } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux'
import { addTocart } from '../features/cartSlice'

function ProductPage() {

    const { id }  = useParams();
    const product = products.find((item)=> item.id == id[1] )
    const dispatch = useDispatch();

    const handleAddtoCart = ()=>{
        dispatch(addTocart(product))
    }

    const handleBuyNow = ()=>{
        // TODO
    }

  return (
    <div className='flex justify-between mx-auto bg-white w-[72vw] h-auto '> 

      {/* left image Box */}
      <div className='flex flex-col'>
        <div className='border-[1px] w-[450px] h-[450px] py-5 flex justify-center items-center'>
            <img className='object-contain w-[70%] h-auto' src={product.imageUrl} alt="productImage" />
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
        <p className='text-xl'>{product.title}</p>
        <p className='font-semibold text-2xl'>₹{product.price}</p>

        <div className='flex h-auto'>
            <p className='text-gray-400 text-sm font-medium pr-20'>Highlights</p>
            {/* <ul className='text-sm list-disc list-outside'> */}
            <ul className='marker:text-color list-inside list-disc text-gray-300 [&>li>p]:inline [&>li>p]:text-black'>
                <li><p>{product.specification.ram}</p></li>
                <li><p>{product.specification.display}</p></li>
                <li><p>{product.specification.camera}</p></li>
                <li><p>{product.specification.battery}</p></li>
                <li><p>{product.specification.processor}</p></li>
            </ul>
        </div>
      </div>

    </div>
  )
}

export default ProductPage
