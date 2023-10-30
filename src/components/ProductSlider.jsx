import React from 'react'
import ProductCard from './ProductCard'
import { ID } from 'appwrite'
import { useSelector } from 'react-redux'

function ProductSlider() {

  const products = useSelector(state => state.product.products)

  return (
    <div className='min-w-fit h-fit py-5 px-3'>
        <h1 className='text-2xl font-semibold pb-5'>Best Mobile</h1>
        <div className='flex gap-4 overflow-hidden'>
            {products.map((eachItem) => (
                <ProductCard
                key={ID.unique()}
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
    </div>
  )
}

export default ProductSlider