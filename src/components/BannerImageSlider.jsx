import { useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { useEffect } from "react";

function Slider() {

  const [currentImage, setCurrentImage] = useState(0); 


  const nextImage = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prevImage) => (prevImage - 1 + images.length) % images.length);
  };

  const images = [
    "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/0c706f11307528da.jpg?q=20",
    "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/e8afba7feffa58f9.jpg?q=20",
    "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/7fd0e4ab26429926.jpg?q=20",
    "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/a10d78bd3ae5316b.jpg?q=20",
    "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/352e6f0f8034fab5.jpg?q=20"
  ]


  useEffect(()=>{
    const intervalTimer = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 2500);

    return()=>{
      clearInterval(intervalTimer);
    }
  })

  return (
    <div className="flex w-full overflow-hidden relative">
      {/* Image container */}
      <div className="w-full h-fit flex transition-transform ease-in-out duration-300 transform -translate-x-full" style={{ transform: `translateX(${-currentImage * 100}%)` }}>
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className="w-full h-[180px] md:h-full"/>
        ))}
      </div>

      {/* Slider button container */}
      <div className='w-full h-fit flex justify-between absolute left-0 top-[50%] translate-y-[-50%]'>
        <span onClick={prevImage} className='bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] px-[2px] py-3 sm:px-1 sm:py-5 lg:px-3 lg:py-9 rounded-r-sm cursor-pointer'><FaAngleLeft /></span>
        <span onClick={nextImage} className='bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] px-[2px] py-3 sm:px-1 sm:py-5 lg:px-3 lg:py-9 rounded-l-sm cursor-pointer'><FaAngleRight /></span>
      </div>

    </div>
  );
}

export default Slider;
