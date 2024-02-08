import React, { useRef } from 'react'
import ProductCard from './ProductCard'
import { useSelector } from 'react-redux'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

function ProductSlider({title}) {

  const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1485 },
        items: 7,
    },
    laptop: {
        breakpoint: { max: 1485, min: 1070 },
        items: 5,
    },
    tablet: {
        breakpoint: { max: 1070, min: 877 },
        items: 4,
    },
    mobile3: {
        breakpoint: { max: 877, min: 680 },
        items: 3,
    },
    mobile2: {
        breakpoint: { max: 680, min: 475 },
        items: 2,
    },
    mobile1: {
        breakpoint: { max: 475, min: 0 },
        items: 2,
    }
};


  const products = useSelector(state => state.product.products);

  const sliderRef = useRef();
  const scrollAmount = 200;

  const movePrevious = ()=>{
    sliderRef.current.scrollLeft -= scrollAmount;
  }

  const moveNext = () =>{
    sliderRef.current.scrollLeft += scrollAmount;
  }

  return (
    <div className='w-full h-full pb-3 md:pb-5 px-3 md:px-6 relative'>
        <h1 className='text-lg md:text-xl font-semibold py-3 md:py-5'>{title}</h1>

        <div ref={sliderRef} className='w-full flex gap-2 md:gap-4 overflow-x-auto scrollbar-hide scroll-smooth'>
          {products.map((eachItem) => (
            <ProductCard
            key={eachItem.title}
            title={eachItem.title}
            desc={eachItem.desc}
            price={eachItem.price}
            mrp={eachItem.mrp}
            imageUrl={eachItem.imageUrl}
            id={eachItem.$id}
            seller = {eachItem.seller}
            height="250px"
            width="200px"
            />
            ))}
        </div>

        {/* Slider Buttons */}
          <div className='w-full h-fit flex justify-between absolute left-0 top-[43%]'>
            <span onClick={movePrevious} className='bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] md:px-3 px-2 py-7 md:py-9 rounded-r-sm cursor-pointer'><FaAngleLeft /></span>
            <span onClick={moveNext} className='bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] md:px-3 px-2 py-7 md:py-9 rounded-l-sm cursor-pointer'><FaAngleRight /></span>
          </div>
    </div>
  )
}

export default ProductSlider