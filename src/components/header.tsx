import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { HiShoppingCart } from "react-icons/hi";
import { GiDrumKit } from "react-icons/gi";
import Link from "next/link";

const Header = () => {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => setMenuActive(!menuActive);

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
      <nav className="flex relative h-16 items-center justify-between border-b border-slate-500 px-2 md:px-8">
        <ul className="flex items-center justify-center gap-4 md:gap-8">
          <li
            className="hover:cursor-pointer hover:underline"
            onClick={toggleMenu}
          >
            <FaBars size={30} />
          </li>
        </ul>
        {/*TODO: ping animation when item added to cart */}
        <div className="hover:text-zinc-600 cursor-pointer">
          <button>
            <Link href="/cart">
              <HiShoppingCart size={30} />
            </Link>

            <div
              className={
                menuActive
                  ? `quantity-indicator absolute right-9 top-3 flex h-2 w-2 animate-pingOnce items-center justify-center rounded-full bg-red-700`
                  : `hidden`
              }
            >
              {/* TODO: is cart empty conditional*/}
            </div>
          </button>
        </div>

        {/*=== SIDEBAR MENU ===*/}
        <div
          className={
            !menuActive
              ? `fixed left-[-100%] top-0 flex h-full w-full max-w-[400px] flex-col bg-white/100 p-1 px-4 shadow-lg shadow-gray-300 duration-700`
              : `fixed left-0 top-0 flex h-full w-full max-w-[300px] flex-col bg-white/100 shadow-sm shadow-gray-300 duration-500`
          }
        >
          <div className="flex w-full items-center justify-between p-4">
            <button>
              <h1
                className="text-3xl hover:cursor-pointer"
                onClick={toggleMenu}
              >
                x
              </h1>
            </button>

            <h1 className="text-2xl">Menu</h1>
          </div>
          <div className="mt-4 border-b border-gray-500" />
          <div className="mt-4" />
          <div className="flex flex-col h-full w-full">
            <ul className="flex flex-col gap-10 pt-4">
              <li className="hover:cursor-pointer font-semibold hover:bg-slate-200 p-4 text-xl">
                Shop
              </li>
              <li className="hover:cursor-pointer font-semibold hover:bg-slate-200 p-4 text-xl">
                Drum Kits
              </li>
              <li className="hover:cursor-pointer font-semibold hover:bg-slate-200 p-4 text-xl">
                Snares
              </li>
              <li className="hover:cursor-pointer font-semibold hover:bg-slate-200 p-4 text-xl">
                Cymbals
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
