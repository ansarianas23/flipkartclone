import React from "react";
import { useSelector } from "react-redux";

function EmptyCartMessage() {

  const userStatus = useSelector((state) => state.auth.status);

  return (
    <>
      {userStatus ? <div className="bg-white w-full h-fit py-10 flex flex-col items-center">
        <img
          className="w-[200px] h-auto"
          src="https://rukminim2.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90"
          alt=""/>
        <h3 className="text-lg">Your Cart is empty!</h3>
        <p className="text-xs text-center px-1">Explore our wide selection and find something you like</p>
      </div> 
      :
      <div className="bg-white w-full h-fit py-10 flex flex-col items-center shadow-md space-y-4">
        <img
          className="w-[220px] h-auto"
          src="https://rukminim2.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90"
          alt=""/>
        <h3 className="text-lg">Missing Cart Items?</h3>
        <p className="text-xs">Login to see the items you added previously</p>
        <button className="bg-flipkart-orange text-white py-[10px] px-[70px] shadow-md rounded-sm text-sm">Login</button>
    </div>
      }
    </>
  );
}

export default EmptyCartMessage;
