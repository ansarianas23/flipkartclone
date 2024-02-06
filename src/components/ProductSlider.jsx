import React from 'react'
import ProductCard from './ProductCard'
import { useSelector } from 'react-redux'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

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

  return (
    <div className='w-full h-full py-5 px-6'>
        <h1 className='text-2xl font-semibold pb-5'>{title}</h1>
          <Carousel
            swipeable={false}
            draggable={false}
            responsive={responsive}
            // autoPlay={true}
            // autoPlaySpeed={10000}
            // centerMode={true}
            // removeArrowOnDeviceType={["tablet", "mobile"]}
            // centerMode={true}
            infinite={true}
            keyBoardControl={true}
            showDots={false}
            containerClass="carousel-container"
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
          >
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
                height={"250px"}
                width={"200px"}
                />
                ))}
        </Carousel>
    </div>
  )
}

export default ProductSlider