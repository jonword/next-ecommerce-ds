import React, { useState } from "react";
import { FaBars, FaLongArrowAltRight } from "react-icons/fa";
import { HiShoppingCart } from "react-icons/hi";
import { GiDrumKit } from "react-icons/gi";
import Link from "next/link";

const Header = () => {
  const [cartActive, setCartActive] = useState(false);

  const toggleCart = () => setCartActive(!cartActive);
  console.log(cartActive);

  return (
    <>
      <header className="flex h-28 w-full items-end justify-center bg-stone-800 pb-6 shadow-sm shadow-zinc-500 ">
        <div className=" text-yellow-100">
          <GiDrumKit size={30} />
        </div>
        <div className="flex  pt-4 pl-4">
          <Link href="/">
            <h1 className="font-title text-4xl tracking-widest text-stone-300">
              DRUMSHOP
            </h1>
          </Link>
        </div>
      </header>
      <nav className=" flex h-16 items-center justify-between border-b border-slate-500 px-2 md:px-8">
        <ul className="flex items-center justify-center gap-4 md:gap-8">
          <li className="hover:cursor-pointer hover:underline">
            <FaBars size={30} />
          </li>
        </ul>
        {/*TODO: ping animation when item added to cart */}
        <div className="hover:text-zinc-600 cursor-pointer">
          <button onClick={toggleCart}>
            <HiShoppingCart size={30} />
          </button>
        </div>

        {/*=== CART SIDEBAR ===*/}
        <div
          className={
            !cartActive
              ? `fixed right-[-100%] top-0 flex h-screen w-full max-w-[400px] flex-col bg-white/100 p-1 px-4 shadow-lg shadow-gray-300 duration-700`
              : `fixed right-0 top-0 flex h-full w-full max-w-[400px] flex-col bg-white/100 p-1 px-4  shadow-sm shadow-gray-300 duration-500`
          }
        >
          <div className="flex w-full items-center justify-between p-4">
            <h1 className="text-3xl">Cart</h1>
            <h1 className="text-2xl hover:cursor-pointer" onClick={toggleCart}>
              x
            </h1>
          </div>
          <div className="mt-4 border-b border-gray-500" />
          <p className="mt-4 text-center">Your cart is empty.</p>

          {/*===SUBTOTAL & CHECKOUT BUTTON */}
          <div className={`hidden`}>
            <div className="mt-4 flex justify-between px-4">
              <p>SUBTOTAL</p>
              <p>$price</p>
            </div>
            <div className="mt-4 flex justify-start pl-4 text-gray-500">
              <p>Taxes and shipping calculated at checkout</p>
            </div>
            <div className="mt-4 flex flex-col items-center justify-center gap-3">
              <Link href="/checkout">
                <button
                  className="flex items-center gap-2 bg-gray-900 py-4 px-20 text-white duration-300 hover:bg-gray-700"
                  onClick={toggleCart}
                >
                  <p>CHECK OUT</p>
                  <FaLongArrowAltRight />
                </button>
              </Link>
              <Link href="/cart">
                <button className="flex" onClick={toggleCart}>
                  <p className="border-b-2 border-gray-900 text-sm">
                    VIEW CART
                  </p>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
