import { Link } from 'react-router-dom'

function ProductCard({title, desc, price, mrp, id, imageUrl, height="250px", width="200px"}) {

  return (
    <Link to={`/productdetails/${id}`}>
      <div className={`w-[150px] h-[200px] md:w-[200px] md:h-[250px] flex flex-col items-center justify-between border-[1px] rounded-sm cursor-pointer py-2`}>
        <div className='w-[80%] h-[80%] rounded-md overflow-hidden hover:scale-105 ease-in-out delay-75'>
          <img className='w-full h-auto' src={imageUrl} alt="" />
        </div>

        <div className='mt-3 flex flex-col items-center'>
          <h4 className='text-sm text-center'>{title?.slice(0, 20)}...</h4>
          <p className='font-semibold text-sm md:text-base'>Incl of offers</p>
        </div>
      </div>
    </Link>
  )
}

export default ProductCard



// Shimmer UI Card Component
export const ProductCardShimmerUI = () => {
  return (
    <div className={`min-w-[150px] h-[200px] md:min-w-[200px] md:h-[250px] flex flex-col items-center justify-between border-[1px] rounded-sm cursor-pointer py-2 `}>
      <div className='w-[80%] h-[80%] rounded-md overflow-hidden hover:scale-105 ease-in-out delay-75 bg-gray-200 shimmer-effect'></div>

      <div className='mt-3 flex flex-col items-center space-y-2'>
        <div className='w-28 h-3 bg-gray-200 shimmer-effect'></div>
        <div className='w-20 h-3 bg-gray-200 shimmer-effect'></div>
      </div>
    </div>
  )
}

