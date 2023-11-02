import React from 'react'
import ProductCard from './ProductCard'
import { useSelector } from 'react-redux'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function ProductSlider({title}) {

  const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 7,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 3,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
    }
};

  const products = useSelector(state => state.product.products)

  return (
    <div className='py-5 px-6'>
        <h1 className='text-2xl font-semibold pb-5'>{title}</h1>
          <Carousel
            swipeable={false}
            draggable={false}
            responsive={responsive}
            // autoPlay={true}
            // autoPlaySpeed={10000}
            // centerMode={true}
            // removeArrowOnDeviceType={["tablet", "mobile"]}
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
                />
                ))}
        </Carousel>
    </div>
  )
}

export default ProductSlider