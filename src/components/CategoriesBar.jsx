import { Link } from "react-router-dom";
import { categoriesList } from "../utils/categryList";
import LoadingSpinner from "./LoadingSpinner";


function CategoriesBar() {

  return (
    <div className="h-full w-fit flex overflow-x-auto p-2 md:p-4 scrollbar-hide space-x-6 md:space-x-16">
      {categoriesList?.map((item) => (
        <Link key={item.title} to={`/category/${item.title}`}>
          <div className="w-fit h-fit flex flex-col justify-between md:gap-2 items-center hover:cursor-pointer">
            <img className="w-[40px] md:w-[65px] h-[40px] md:h-[65px]" src={item.imgSrc} alt="logo" />
            <h3 className="text-center font-medium text-sm">{item.title}</h3>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default CategoriesBar;
