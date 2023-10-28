import ProductCard from "./ProductCard";
import { products } from "../ProductsApi";
import Slider from "./Slider";
import CategoriesBar from "./categoriesBar";
import Footer from "./Footer";
import ProductSlider from "./ProductSlider";

function Products() {
  return (
    <>
      {/* width container */}
      <div className="w-[84vw] md:max-w-[100rem] h-auto flex flex-col items-center mt-2 mx-auto rounded-sm">

        {/* Category slider bar */}
        <div className="w-full h-fit mb-5">
          <CategoriesBar />
        </div>

        {/* Image Slider */}
        <div className="w-full h-auto mb-5 overflow-hidden">
          <Slider />
        </div>

        {/* products container */}
        {/* <div className="flex flex-wrap gap-10 max-w-fit p-10 bg-white">
          {products.map((eachItem) => (
            <ProductCard
              key={eachItem.title}
              title={eachItem.title}
              desc={eachItem.desc}
              price={eachItem.price}
              mrp={eachItem.mrp}
              imageUrl={eachItem.imageUrl}
              id={eachItem.id}
            />
          ))}
        </div> */}

        <div className="w-full h-fit bg-white mb-5 overflow-x-auto">
          <ProductSlider/>
        </div>

      </div>

      {/* Footer */}
      <div className="w-full h-auto">
        <Footer />
      </div>
      
    </>
  );
}

export default Products;
