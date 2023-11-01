import React from 'react'
import ProductCard from './ProductCard'
import { useSelector } from 'react-redux'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import { useRef } from 'react';

function ProductSlider({title}) {

  const products = useSelector(state => state.product.products)
  const ref = useRef(null);

  const handlePrevious = ()=>{
    ref.current?.scrollIntoView({behavior: 'smooth'});
  }
  const handleNext = ()=>{
    ref.current?.scrollIntoView({behavior: 'smooth'});
  }

  return (
    <div className='w-fit h-fit py-5 px-6 relative'>
        <h1 className='text-2xl font-semibold pb-5'>{title}</h1>
        <div ref={ref} className='flex gap-4 '>
            {products.map((eachItem) => (
                <ProductCard
                key={eachItem.title}
                title={eachItem.title}
                desc={eachItem.desc}
                price={eachItem.price}
                mrp={eachItem.mrp}
                imageUrl={eachItem.imageUrl}
                id={eachItem.id}
                seller = {eachItem.seller}
                />
                ))}
        </div>

        {/* <div className='absolute top-[45%] flex justify-between bg-red-300'>
          <div onClick={handlePrevious} className='text-xl text-gray-400 bg-white shadow-md rounded-sm py-8 px-2 cursor-pointer'>
            <FaAngleLeft />
          </div>
          
          <div onClick={handleNext} className='text-xl text-gray-400 bg-white shadow-md rounded-sm py-8 px-2 cursor-pointer'>
            <FaAngleRight />
          </div>
        </div> */}
    </div>
  )
}

export default ProductSlider