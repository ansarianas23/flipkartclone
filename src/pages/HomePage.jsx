import CategoriesBar from '../components/CategoriesBar'
import BannerImageSlider from '../components/BannerImageSlider'
import ProductSlider from '../components/ProductSlider'
import AdBanner from '../components/AdBanner'

function HomePage() {
  return (
    <>
      {/* width container */}
      <div className="h-auto flex flex-col items-center mt-2 rounded-sm mx-2">

        {/* Category slider bar */}
        <div className="w-full h-fit mb-2 md:mb-5 bg-white flex justify-center">
          <CategoriesBar />
        </div>

        {/* Banner Image Slider */}
        <div className="w-full h-auto mb-2 md:mb-5 ">
          <BannerImageSlider />
        </div>

        {/* Product Slider 1*/}
        <div className="w-full h-fit mb-2 md:mb-5 bg-white z-10" >
          <ProductSlider title = "Best Mobile"/>
        </div>

        {/* Ad Banners 1*/}
        <div className="w-full h-fit mb-2 md:mb-5 bg-white z-10" >
          <AdBanner/>
        </div>

        {/* Product Slider 1*/}
        <div className="w-full h-fit mb-2 md:mb-5 bg-white z-10" >
          <ProductSlider title = "Top Deals on Electronics"/>
        </div>

        {/* Ad Banners 1*/}
        <div className="w-full h-fit mb-2 md:mb-5 bg-white z-10" >
          <AdBanner/>
        </div>

      </div>
    </>
  )
}

export default HomePage
