import React from 'react'
import { useSelector } from 'react-redux';
import ProductCard from './ProductCard';

const ProductsBox = ({ title }) => {

    const products = useSelector(state => state.product.products);

  return (
    <div className='col-span-full md:col-span-6 lg:col-span-4 h-fit lg:min-h-[680px] flex flex-col px-3 pb-3 bg-white'>
      <h2 className='text-lg md:text-xl font-semibold py-3 md:py-5'>{title}</h2>

      <div className='flex justify-center flex-wrap gap-3'>
        {products.slice(0,4).map?.((product)=>{
            return <ProductCard 
            key={product.title}
            title={product.title}
            desc={product.desc}
            price={product.price}
            mrp={product.mrp}
            imageUrl={product.imageUrl}
            id={product.id}
            seller={product.seller}
            />
        })}
      </div>
    </div>
  )
}

export default ProductsBox
