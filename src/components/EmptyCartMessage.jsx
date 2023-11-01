import React from "react";

function EmptyCartMessage() {
  return (
    <>
      <div className="bg-white w-full h-fit py-10 flex flex-col items-center">
        <img
          className="w-[200px] h-auto"
          src="https://rukminim2.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90"
          alt=""/>
        <h3 className="text-gray-500 text-xl">Your Cart is empty</h3>
        <p className="text-xs">Explore our wide selection and find something you like</p>
      </div>
    </>
  );
}

export default EmptyCartMessage;
