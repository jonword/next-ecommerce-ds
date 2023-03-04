import React, { useState } from "react";
import { FaBars, FaLongArrowAltRight } from "react-icons/fa";
import { GiDrumKit } from "react-icons/gi";
import Link from "next/link";
import { HiShoppingCart } from "react-icons/hi";
import { useAppSelector } from "@/redux/hooks";
import { totalCartItemSelector, totalPriceSelector } from "@/redux/cartSlice";
import { formatCurrency } from "@/util/formatcurrency";
import CartCard from "./cartcard";

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const cart = useAppSelector((state) => state.cart);
  const total = useAppSelector(totalCartItemSelector);
  const subtotal = useAppSelector(totalPriceSelector);

  const toggleCart = () => setIsActive(!isActive);

  return (
    <>
      <header className="flex h-28 w-full items-end pl-8 justify-start bg-stone-800 pb-6 shadow-sm shadow-zinc-500 ">
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
      <nav className="flex relative h-16 justify-end items-center border-b border-slate-200 px-8 md:px-12">
        <div>
          <button onClick={toggleCart}>
            <HiShoppingCart size={30} />
            <div
              className={
                cart.length
                  ? `quantity-indicator absolute right-7 top-2 flex h-3 w-3 animate-pingOnce items-center justify-center text-gray-100 p-2 rounded-full bg-pink-700 text-xs`
                  : `hidden`
              }
              key={total}
            >
              {total}
            </div>
          </button>
        </div>
      </nav>

      {/*===SIDEBAR===*/}
      <div
        className={
          !isActive
            ? `fixed right-[-100%] top-0 flex h-screen w-full max-w-[400px] flex-col bg-white/100 p-1 px-4 shadow-lg shadow-gray-300 duration-700`
            : `fixed right-0 top-0 flex h-full overflow-y-scroll w-full max-w-[400px] flex-col bg-white/100 p-1 px-4 pb-12 shadow-sm shadow-gray-300 duration-500`
        }
      >
        <div className="flex w-full items-center justify-between p-4">
          <h1 className="text-2xl">Cart</h1>
          <h1 className="text-2xl hover:cursor-pointer" onClick={toggleCart}>
            x
          </h1>
        </div>
        <div className="mt-4 border-b border-gray-500" />
        {cart.length ? (
          <>
            {cart.map((item) => (
              <CartCard cartItem={item} key={item.product.id} />
            ))}
          </>
        ) : (
          <p className="mt-4 text-center">Your cart is empty.</p>
        )}
        {/*===SUBTOTAL & CHECKOUT BUTTON */}
        <div className={cart.length ? `` : `hidden`}>
          <div className="mt-4 flex justify-between px-4">
            <p>SUBTOTAL</p>
            <p>{formatCurrency(subtotal)}</p>
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
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
