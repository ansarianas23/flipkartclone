import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

function Slider() {
  return (
    <div className="w-full h-full">
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showArrows={true}
        showIndicators={true}
        showThumbs={false}
        interval={3000}
      >
        <div>
          <img
            loading="lazy"
            src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/6e0a9c81fc82ce85.png?q=20"
            alt="bannerImg"/>
        </div>

        <div>
          <img
            loading="lazy"
            src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/f7120be1e8d98812.jpg?q=20"
            alt="bannerImg"/>
        </div>

        <div>
          <img
            loading="lazy"
            src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/1881ab9b1221de4d.jpeg?q=20"
            alt="bannerImg"/>
        </div>

        <div>
          <img
            loading="lazy"
            src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/1e05c74a01f71a51.jpg?q=20"
            alt="bannerImg"/>
        </div>

        <div>
          <img
            loading="lazy"
            src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/eceea0652b4a0227.jpeg?q=20"
            alt="bannerImg"/>
        </div>
      </Carousel>
    </div>
  );
}

export default Slider;
