

function CategoriesBar() {

  const categories = [
    {
      imgSrc:
        "https://rukminim1.flixcart.com/fk-p-flap/64/64/image/790b539a57f7b8cd.png?q=100",
      title: "Top Offers",
    },
    {
      imgSrc:
        "https://rukminim1.flixcart.com/fk-p-flap/64/64/image/444802d58a814f57.png?q=100",
      title: "Mobile & Tablets",
    },
    {
      imgSrc:
        "https://rukminim1.flixcart.com/fk-p-flap/64/64/image/ce3744f59fadb72e.png?q=100",
      title: "Electronics",
    },
    {
      imgSrc:
        "https://rukminim1.flixcart.com/fk-p-flap/64/64/image/5b8ad952a656b015.png?q=100",
      title: "TV & Appliances",
    },
    {
      imgSrc:
        "https://rukminim1.flixcart.com/fk-p-flap/64/64/image/e4b01f3d783c49a1.png?q=100",
      title: "Fashion",
    },
    {
      imgSrc:
        "https://rukminim1.flixcart.com/fk-p-flap/64/64/image/9e4acc1d8929bcc6.png?q=100",
      title: "Beauty",
    },
    {
      imgSrc:
        "https://rukminim1.flixcart.com/fk-p-flap/64/64/image/9ba7be5608413886.png?q=100",
      title: "Home & Kitchen",
    },
    {
      imgSrc:
        "https://rukminim1.flixcart.com/fk-p-flap/64/64/image/dc9cb4d7bd005f70.png?q=100",
      title: "Furniture",
    },
    {
      imgSrc:
        "https://rukminim1.flixcart.com/fk-p-flap/64/64/image/683d71deb68235d5.png?q=100",
      title: "Flights",
    },
    {
      imgSrc:
        "https://rukminim1.flixcart.com/fk-p-flap/64/64/image/280a9406b5a7fdc8.png?q=100",
      title: "Grocery",
    },
  ];

  return (
    <div className="w-full h-full flex overflow-x-scroll justify-center py-4 bg-white">
      {categories.map((item) => (
        <div key={item.title} className="flex flex-col items-center px-5 hover:cursor-pointer">
          <img className="max-w-[70px] max-h-[70px]" src={item.imgSrc} alt="logo" />
          <h3 className="text-center font-medium text-sm mt-3">{item.title}</h3>
        </div>
      ))}
    </div>
  );
}

export default CategoriesBar;
