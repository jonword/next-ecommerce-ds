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
      <nav className="flex relative h-16 items-center justify-evenly border-b border-slate-500 px-2 md:px-12">
        <ul className="flex items-end justify-center gap-4 md:gap-8">
          <Link href="/catalog">
            <li className="hover:cursor-pointer hover:underline">Shop</li>
          </Link>

          <li className="hover:cursor-pointer hover:underline">Drum Kits</li>
          <li className="hover:cursor-pointer hover:underline">Snares</li>
          <li className="hover:cursor-pointer hover:underline">Cymbals</li>
          <li className="hover:cursor-pointer hover:underline">
            <Link href="/cart">
              <HiShoppingCart size={30} />
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Header;
