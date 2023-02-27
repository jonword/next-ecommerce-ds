import React from "react";
import { FaBars } from "react-icons/fa";
import { HiShoppingCart } from "react-icons/hi";
import { GiDrumKit } from "react-icons/gi";
import Link from "next/link";

const Header = () => {
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
        <div className="hover:text-zinc-600 cursor-pointer">
          <Link href="/cart">
            <HiShoppingCart size={30} />
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Header;
