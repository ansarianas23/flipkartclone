

function CategoriesBar() {

  const categories = [
    {
      imgSrc:
        "https://rukminim1.flixcart.com/flap/64/64/image/29327f40e9c4d26b.png?q=100",
      title: "Grocery",
    },
    {
      imgSrc:
        "https://rukminim1.flixcart.com/flap/64/64/image/22fddf3c7da4c4f4.png?q=100",
      title: "Mobiles",
    },
    {
      imgSrc:
        "https://rukminim1.flixcart.com/fk-p-flap/64/64/image/0d75b34f7d8fbcb3.png?q=100",
      title: "Fashion",
    },
    {
      imgSrc:
        "https://rukminim1.flixcart.com/flap/64/64/image/69c6589653afdb9a.png?q=100",
      title: "Electronics",
    },
    {
      imgSrc:
        "https://rukminim1.flixcart.com/flap/64/64/image/ab7e2b022a4587dd.jpg?q=100",
      title: "Home & Furniture",
    },
    {
      imgSrc:
        "https://rukminim1.flixcart.com/flap/64/64/image/0ff199d1bd27eb98.png?q=100",
      title: "Appliances",
    },
    {
      imgSrc:
        "https://rukminim1.flixcart.com/flap/64/64/image/71050627a56b4693.png?q=100",
      title: "Travel",
    },
    {
      imgSrc:
        "https://rukminim1.flixcart.com/flap/64/64/image/dff3f7adcf3a90c6.png?q=100",
      title: "Beauty",
    },
    {
      imgSrc:
        "https://rukminim1.flixcart.com/fk-p-flap/64/64/image/05d708653beff580.png?q=100",
      title: "Two Wheelers",
    },
  ];

  return (
    <div className=" h-full flex overflow-x-auto py-4 scrollbar-hide">
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
