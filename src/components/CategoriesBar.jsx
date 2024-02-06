import { categoriesList } from "../utils/categryList";


function CategoriesBar() {

  return (
    <div className="h-full w-fit flex overflow-x-auto py-4 px-4 scrollbar-hide space-x-10 md:space-x-16">
      {categoriesList?.map((item) => (
        <div key={item.title} className="w-fit h-fit flex flex-col items-center hover:cursor-pointer">
          <img className="w-[55px] md:w-[65px] h-[55px] md:h-[65px]" src={item.imgSrc} alt="logo" />
          <h3 className="text-center font-medium text-sm mt-3">{item.title}</h3>
        </div>
      ))}
    </div>
  );
}

export default CategoriesBar;
