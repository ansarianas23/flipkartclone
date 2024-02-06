import { Link } from 'react-router-dom'

function ProductCard({title, desc, price, mrp, id, imageUrl, height="250px", width="200px"}) {

  return (
    <Link to={`/productdetails/${id}`}>
      <div className={`w-[${width}] h-[${height}] border-[1px] rounded-sm flex flex-col justify-between items-center cursor-pointer py-2`}>
        <div className='w-[80%] h-[80%] rounded-md overflow-hidden hover:scale-105'>
          <img className='w-full h-auto' src={imageUrl} alt="" />
        </div>

        <div className='mt-3 flex flex-col items-center'>
          <h4 className='text-sm'>{title}</h4>
          <p className='font-semibold'>Incl of offers</p>
        </div>
      </div>
    </Link>
  )
}

export default ProductCard
