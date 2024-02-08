import CategoriesBar from '../components/CategoriesBar'
import BannerImageSlider from '../components/BannerImageSlider'
import ProductSlider from '../components/ProductSlider'
import AdBanner from '../components/AdBanner'
import { useEffect } from 'react'
import ProductsBox from '../components/ProductsBox'
import BoxAdBanner from '../components/BoxAdBanner'

function HomePage() {

  useEffect(()=>{
    window.scrollTo({ top:0, behavior: 'auto'})
  },[])

  return (
    <>
      {/* width container */}
      <div className="w-full h-auto flex flex-col items-center mt-2 rounded-sm">

        {/* Category slider bar */}
        <div className="w-full flex justify-center h-fit mb-2 md:mb-4 order-2 md:order-1 bg-white">
          <CategoriesBar />
        </div>

        {/* Banner Image Slider */}
        <div className="w-full h-auto mb-2 md:mb-4 order-1 md:order-2">
          <BannerImageSlider />
        </div>

        {/* Product Slider 1*/}
        <div className="w-full h-fit mb-2 md:mb-4 bg-white z-10 order-3" >
          <ProductSlider title = "Best Mobile"/>
        </div>

        {/* Ad Banners 1*/}
        {/* <div className="w-full h-fit mb-2 md:mb-4 z-10" >
          <AdBanner/>
        </div> */}

        {/* Product Slider 2*/}
        <div className="w-full h-fit mb-2 md:mb-4 bg-white z-10 order-4" >
          <ProductSlider title = "Top Deals on Electronics"/>
        </div>

        {/* Products Box 1 with 4 products */}
        <div className="grid grid-cols-12 gap-4 w-full h-fit mb-2 md:mb-4 z-10 order-5" >
          <ProductsBox title = "End of Season Best Sellers"/>
          <ProductsBox title = "End of Season Best Sellers"/>
          <ProductsBox title = "End of Season Best Sellers"/>
        </div>

        {/* Products Box 2 with 4 products */}
        <div className="grid grid-cols-12 gap-4  w-full h-fit mb-2 md:mb-4 z-10 order-6" >
          <ProductsBox title = "Newly Added products"/>
          <BoxAdBanner AdimageUrl="https://rukminim2.flixcart.com/www/530/740/promos/26/09/2023/6c3c5fe2-c236-4fa2-8d97-595e1e01da01.jpg?q=80"/>
        </div>

        {/* Ad Banners 1*/}
        {/* <div className="w-full h-fit mb-2 md:mb-4 z-10" >
          <AdBanner/>
        </div> */}

      </div>
    </>
  )
}

export default HomePage
