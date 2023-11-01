import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { BiSolidCart } from "react-icons/bi";
import { MdFlashOn } from "react-icons/md";
import { AiFillStar } from "react-icons/ai";
import { useDispatch, useSelector } from 'react-redux'
import { addTocart } from '../features/cartSlice'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

function ProductPage() {

    const { id }  = useParams();
    const products = useSelector(state => state.product.products)
    const matchedProduct = products.find((item)=> item.id == id )
    const parsedSpecs = JSON.parse(matchedProduct.specification[0])
    const carts = useSelector(state => state.cart.carts)
    const navigate = useNavigate()

    const dispatch = useDispatch();



    const handleAddtoCart = ()=>{
        dispatch(addTocart(matchedProduct))
        setTimeout(() => {
          toast.success('Item Added To Cart', {
            position: "bottom-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
        }, 200);

        setTimeout(()=>{
          let num = carts?.includes(matchedProduct,0);
          console.log(num)
        },1000)

    }

    const handleBuyNow = ()=>{
      dispatch(addTocart(matchedProduct))
      navigate("/cart")
    }

  return (
    <div className='flex justify-between mx-auto p-4 mt-1 mb-3 bg-white w-[72vw] h-fit'> 

    {/* Toast Container */}
    <ToastContainer 
      position="bottom-center"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"/>

      {/* left image Box */}
      <div className='flex flex-col sticky top-20 h-fit'>
        <div className='border-[1px] w-[450px] h-[450px] py-5 flex justify-center items-center'>
            <img className='object-contain w-[70%] h-auto' src={matchedProduct.imageUrl} alt="productImage" />
        </div>
        <div className='w-full flex justify-between text-white mt-3'>
            <button onClick={handleAddtoCart} className='flex justify-center items-center uppercase font-semibold bg-flipkart-yellow py-4 w-[220px] rounded-sm shadow-md'>
                <BiSolidCart className='mr-1'/> Add to cart
            </button>
            <button onClick={handleBuyNow} className='flex justify-center items-center uppercase font-semibold bg-flipkart-orange py-4 w-[220px] rounded-sm shadow-md'>
               <MdFlashOn className='mr-1'/> Buy Now
            </button>
        </div>
      </div>

      {/* Right Info Div */}
      <div className='w-[65%] space-y-4'>
        <div className=''>
          <p className='text-xl'>{matchedProduct.title}</p>
        </div>

        {/* Rating */}
        <div className='flex items-center space-x-3'>
          <div className='bg-flipkart-green flex items-center w-fit rounded-sm px-1 py-[2px] space-x-1'>
            <span className='text-xs text-white font-medium'>4.2</span>
            <AiFillStar className='text-white text-xs'/>
          </div>

          <div className=''>
            <span className='text-sm font-medium text-gray-400'>Ratings</span>
          </div>

          <div>
            <img className='w-auto h-[20px]' src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png" alt="fk-assured-logo" />
          </div>
        </div>

        <div>
          <span className='text-sm font-medium text-flipkart-green'>Extra {matchedProduct.mrp -matchedProduct.price} off</span>
        </div>

        {/* Price */}
        <div className='flex items-center space-x-3'>
            <div className=' font-semibold text-2xl'>₹{matchedProduct.price}</div>
            <div className=' text-gray-400 text-sm line-through'>₹{matchedProduct.mrp}</div>
            <div className='text-sm font-semibold text-flipkart-green'>{100 - Math.ceil((matchedProduct.price/matchedProduct.mrp) * 100)}% off</div>
        </div>

        <div className='text-sm'>+ ₹49 Secured Packaging Fee</div>

        {/* Highlights */}
        <div className='flex h-auto mt-5'>
            <span className='text-gray-400 text-sm font-medium pr-20'>Highlights</span>
            <ul className='marker:text-color list-inside list-disc text-gray-300 [&>li>p]:inline [&>li>p]:text-black text-sm space-y-3'>
                <li><p>{parsedSpecs.ram}</p></li>
                <li><p>{parsedSpecs.display}</p></li>
                <li><p>{parsedSpecs.camera}</p></li>
                <li><p>{parsedSpecs.battery}</p></li>
                <li><p>{parsedSpecs.processor}</p></li>
            </ul>
        </div>

        {/* payment */}
        <div className='flex h-auto mt-5'>
            <span className='text-gray-400 text-sm font-medium pr-20'>Easy Payment <br />Options</span>
            <ul className='marker:text-color list-inside list-disc text-gray-300 [&>li>p]:inline [&>li>p]:text-black text-sm space-y-3'>
                <li><p>No cost EMI starting from ₹2,450/month</p></li>
                <li><p>Cash on Delivery</p></li>
                <li><p>Net banking & Credit/ Debit/ ATM card</p></li>
                <div className='text-flipkart-blue font-medium pl-5'>View Details</div>
            </ul>
        </div>

        {/* seller */}
        <div className='flex h-auto mt-5'>
            <span className='text-gray-400 text-sm font-medium pr-20'>Seller</span>
              <ul className='marker:text-color list-inside list-disc text-gray-300 [&>li>p]:inline [&>li>p]:text-black text-sm space-y-3'>
                  <div className='text-sm pl-5 font-medium text-flipkart-blue'>{matchedProduct.seller}</div>
                  <li><p>7 Days Service Center Replacement/Repair</p></li>
                  <li><p>GST invoice available</p></li>
              </ul>
        </div>

        <div className='w-[50%]'>
          <img className='w-full' src="https://rukminim2.flixcart.com/lockin/100/100/images/promotion_banner_v2_active.png?q=50" alt="" />
        </div>

        {/* description */}
        <div className='flex w-full h-fit mt-5'>
          <span className='text-gray-400 text-sm font-medium pr-20'>Description</span>
          <p className='text-sm'>{matchedProduct.desc}</p>
        </div>

      </div>


    </div>
  )
}

export default ProductPage
