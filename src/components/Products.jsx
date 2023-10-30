import ProductCard from "./ProductCard";
import Slider from "./Slider";
import CategoriesBar from "./CategoriesBar";
import Footer from "./Footer";
import ProductSlider from "./ProductSlider";

function Products() {


  return (
    <>
      {/* width container */}
      <div className="w-[84vw] md:max-w-[100rem] h-auto flex flex-col items-center mt-2 mx-auto rounded-sm">

        {/* Category slider bar */}
        <div className="w-full h-fit mb-5 bg-white flex justify-center">
          <CategoriesBar/>
        </div>

        {/* Image Slider */}
        <div className="w-full h-auto mb-5 overflow-hidden">
          <Slider />
        </div>

        <div className="w-full h-fit bg-white mb-5 overflow-x-auto">
          <ProductSlider/>
        </div>

      </div>

      {/* Footer */}
      {/* <div className="w-full h-auto absolute bottom-0">
        <Footer />
      </div> */}
      
    </>
  );
}

export default Products;
