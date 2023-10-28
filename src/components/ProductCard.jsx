import { Link } from 'react-router-dom'

function ProductCard({title, desc, price, mrp, id, imageUrl}) {

  return (
    // <Link to={`productdetails/:${id}`}>
    <Link to={`/productdetails/:${id}`}>
      <div className='border-[1px] rounded-sm w-[200px] h-[250px] flex flex-col justify-between items-center cursor-pointer py-2'>
        <div className='w-[80%] h-auto rounded-md overflow-hidden hover:scale-105'>
          <img className='w-full h-auto' src={imageUrl} alt="" />
        </div>

        <div className='mt-3 flex flex-col items-center'>
          <h4 className='text-sm'>{title}</h4>
          {/* <p className=''>{desc.slice(0, 30)}</p> */}
          <p className='font-semibold'>Incl of offers</p>
        </div>
      </div>
    </Link>
  )
}

export default ProductCard
