import React from "react";
import { FaApple } from "react-icons/fa";

const Checkout = () => {
  return (
    <div>
      <div>
        <h1 className="text-2xl">Checkout</h1>
      </div>
      <div className="w-full h-full">
        <button className="flex items-center bg-gray-900 text-white p-3 px-12 rounded-md">
          <FaApple size={20} />
          <p className="text-xl">Pay</p>
        </button>
      </div>
    </div>
  );
};

export default Checkout;
