import CategoriesBar from '../components/CategoriesBar'
import BannerImageSlider from '../components/BannerImageSlider'
import ProductSlider from '../components/ProductSlider'

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

        {/* Product Slider */}
        <div className="w-full h-fit mb-2 md:mb-5 bg-white z-10" >
          <ProductSlider title = "Best Mobile"/>
        </div>

        {/* <div className="w-full h-fit bg-white mb-5 overflow-x-auto">
          <ProductSlider title = "Best Laptops"/>
        </div> */}

      </div>
    </>
  )
}

export default HomePage
