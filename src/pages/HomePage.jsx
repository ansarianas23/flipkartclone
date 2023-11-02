import CategoriesBar from '../components/CategoriesBar'
import BannerImageSlider from '../components/BannerImageSlider'
import ProductSlider from '../components/ProductSlider'

function HomePage() {
  return (
    <>
      {/* width container */}
      <div className="w-[84vw] md:max-w-[100rem] h-auto flex flex-col items-center mt-2 mx-auto rounded-sm">

        {/* Category slider bar */}
        <div className="w-full h-fit mb-5 bg-white flex justify-center">
          <CategoriesBar />
        </div>

        {/* Image Slider */}
        <div className="w-full h-auto mb-5 overflow-hidden">
          <BannerImageSlider />
        </div>

        {/* Product Slider */}
        <div className="w-full h-fit bg-white mb-5" >
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
