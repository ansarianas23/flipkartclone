import React from 'react'
import { products } from '../ProductsApi'
import ProductCard from './ProductCard'

function ProductSlider() {
  return (
    <div className='min-w-fit h-fit py-5 px-3'>
        <h1 className='text-2xl font-semibold pb-5'>Best Mobile</h1>
        <div className='flex gap-4 overflow-hidden'>
            {products.map((eachItem) => (
                <ProductCard
                key={eachItem.title}
                title={eachItem.title}
                desc={eachItem.desc}
                price={eachItem.price}
                mrp={eachItem.mrp}
                imageUrl={eachItem.imageUrl}
                id={eachItem.id}
                />
                ))}
        </div>
    </div>
  )
}

export default ProductSlider