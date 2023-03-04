import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { GiDrumKit } from "react-icons/gi";
import Link from "next/link";
import { HiShoppingCart } from "react-icons/hi";
import { useAppSelector } from "@/redux/hooks";
import { totalCartItemSelector } from "@/redux/cartSlice";

const Header = () => {
  const [menuActive, setMenuActive] = useState(false);
  const cart = useAppSelector((state) => state.cart);
  const total = useAppSelector(totalCartItemSelector);

  const toggleMenu = () => setMenuActive(!menuActive);

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
          <Link href="/cart">
            <button>
              <HiShoppingCart size={30} />
              <div
                className={
                  cart.length
                    ? `quantity-indicator absolute right-12 top-3 flex h-3 w-3 animate-pingOnce items-center justify-center rounded-full bg-red-800`
                    : `hidden`
                }
                key={total}
              ></div>
            </button>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Header;
