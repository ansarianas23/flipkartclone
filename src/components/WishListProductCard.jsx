import { AiFillStar } from "react-icons/ai"
import { MdDelete } from "react-icons/md";
import appwriteService from "../appwrite/config";


const WishListProductCard = ({id, title, desc, price, mrp, imageUrl, specification, seller}) => {

  const deleteWishListItem = () =>{
    appwriteService.deleteSingleWishListProduct(id);
  }


    return (
      <div className="w-full px-5 py-5 flex border-b-[1px] border-gray-200 cursor-pointer group">
        {/* Left image div */}
        <div className="w-20 h-fit bg-red-200">
          <img className="w-full h-full" src={imageUrl} alt="wishlist-product-image"/>
        </div>
        
        {/* Right Product info div */}
        <div className="w-full flex flex-col ml-10 relative">
          {/* Title */}
          <span className="group-hover:text-flipkart-blue mr-4">{title}</span>
  
          {/* Rating */}
          <div className="flex pt-1 pb-4 gap-3">
            <div className='bg-flipkart-green flex items-center w-fit rounded-[4px] px-1 py-[2px] space-x-1'>
                <span className='text-xs text-white font-medium'>4.2</span>
                <AiFillStar className='text-white text-xs'/>
            </div>
            <img className='h-5' src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png" alt="fk-assured-logo" />
          </div>
  
          {/* Price */}
          <div className="flex items-center gap-2">
            <span className="font-medium text-2xl">₹{price}</span>
            <span className="line-through text-gray-400 text-sm">₹{mrp}</span>
            <span className="text-sm font-medium text-flipkart-green">75% off</span>
          </div>


          {/* remove logo */}
          <span onClick={deleteWishListItem} className="text-stone-400 absolute right-0 top-0 text-lg hover:bg-gray-200 p-2 rounded-full"><MdDelete /></span>
        </div>
  
      </div>
    )
  }


export default WishListProductCard