import React, { useState } from "react";
import { FaLongArrowAltRight, FaWindowClose } from "react-icons/fa";
import { GiDrumKit } from "react-icons/gi";
import Link from "next/link";
import { Playfair_Display } from "next/font/google";
import { HiShoppingCart, HiUser } from "react-icons/hi";
import { useAppSelector } from "@/redux/hooks";
import { totalCartItemSelector, totalPriceSelector } from "@/redux/cartSlice";
import { formatCurrency } from "@/util/formatcurrency";
import CartCard from "./sidebarcartcard";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: "400",
});

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const cart = useAppSelector((state) => state.cart);
  const total = useAppSelector(totalCartItemSelector);
  const subtotal = useAppSelector(totalPriceSelector);

  const toggleCart = () => setIsActive(!isActive);

  return (
    <>
      <header className="flex h-20 w-full items-center justify-between border-b px-6">
        <div className="flex items-center gap-2 justify-start">
          <div className="text-green-900">
            <GiDrumKit size={20} />
          </div>
          <Link href="/">
            <h1
              className={` ${playfair.className} font-title text-2xl tracking-widest text-stone-700`}
            >
              DRUMSHOP
            </h1>
          </Link>
        </div>
        <nav className="flex relative">
          <div className="flex items-center justify-center">
            <Link href="/login">
              <button>
                <HiUser
                  size={20}
                  className="text-zinc-700 hover:text-zinc-600 duration-200"
                />
              </button>
            </Link>
            <button onClick={toggleCart}>
              <HiShoppingCart
                size={20}
                className="text-zinc-700 hover:text-zinc-600 duration-200"
              />
              <div
                className={
                  cart.length
                    ? `quantity-indicator absolute -right-2 -top-2 flex h-1 w-1 p-2 animate-pingOnce items-center justify-center text-gray-100 rounded-full bg-pink-700 text-[10px]`
                    : `hidden`
                }
                key={total}
              >
                {total}
              </div>
            </button>
          </div>
        </nav>
      </header>

      {/*===SIDEBAR===*/}
      <div
        className={
          !isActive
            ? `fixed right-[-100%] top-0 flex h-screen w-full max-w-[400px] flex-col bg-white/100 p-1 px-4 shadow-lg shadow-gray-800 duration-700`
            : `fixed right-0 top-0 flex h-full overflow-y-scroll w-full max-w-[400px] flex-col bg-white/100 p-1 px-4 pb-12 shadow-md shadow-gray-500 delay-75 duration-500`
        }
      >
        <div className="flex w-full items-center justify-between p-4">
          <h1 className="text-2xl">Cart</h1>
          <button
            className="text-2xl duration-100 hover:text-rose-700"
            onClick={toggleCart}
          >
            <FaWindowClose />
          </button>
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
            <p>TOTAL</p>
            <p>{formatCurrency(subtotal)}</p>
          </div>
          <div className="mt-4 flex flex-col items-center justify-center gap-3">
            <form
              className="flex justify-center"
              action="/api/checkout_sessions"
              method="POST"
            >
              <button
                className="flex items-center gap-2 bg-zinc-800 py-4 px-20 text-white duration-300 hover:bg-zinc-700"
                type="submit"
                role="link"
              >
                <p>CHECK OUT</p>
                <FaLongArrowAltRight />
              </button>
            </form>
            <Link href="/cart">
              <button
                className="flex items-center py-1 px-2 border-b-2 border-gray-900 duration-100 hover:text-zinc-600"
                onClick={toggleCart}
              >
                VIEW CART
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
