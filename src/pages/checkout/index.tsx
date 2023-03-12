import React from "react";
import { FaApple } from "react-icons/fa";

const Checkout = () => {
  return (
    <div className="w-full h-full">
      <h1 className="text-2xl">Checkout</h1>
      <div className="flex flex-col gap-4 justify-center items-center">
        <div>
          <button className="flex items-center bg-gray-900 text-white p-3 px-24 rounded-md">
            <FaApple size={20} />
            <p className="text-xl">Pay</p>
          </button>
        </div>
        <div className="border-b border-gray-400 w-96" />
        <form className="flex flex-col w-96 gap-2">
          <input
            type="text"
            placeholder="Email"
            name="email"
            className="p-1 border border-gray-800 rounded-sm"
          />
          <label>Shipping Address</label>
          <input
            type="text"
            placeholder="First Name"
            className="p-1 border border-gray-800 rounded-sm"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="p-1 border border-gray-800 rounded-sm"
          />
          <input
            type="text"
            placeholder="Address 1"
            className="p-1 border border-gray-800 rounded-sm"
          />
          <input
            type="text"
            placeholder="Address 2"
            className="p-1 border border-gray-800 rounded-sm"
          />
          <select className="p-1 border border-gray-800 rounded-sm">
            <option value="">Please choose an option</option>
            <option value="united states">United States</option>
          </select>
          <input
            type="number"
            placeholder="ZIP Code"
            className="p-1 border border-gray-800 rounded-sm"
          />
          <input
            type="text"
            placeholder="City"
            className="p-1 border border-gray-800 rounded-sm"
          />
          <input
            type="text"
            placeholder="State"
            className="p-1 border border-gray-800 rounded-sm"
          />
          <input
            type="number"
            placeholder="Phone Number"
            className="p-1 border border-gray-800 rounded-sm"
          />
        </form>
      </div>
    </div>
  );
};

export default Checkout;
