import Link from "next/link";
import React from "react";
import { HiShoppingCart } from "react-icons/hi";

const Nav = () => {
  return (
    <nav className="flex relative h-16 items-center justify-between border-b border-slate-500 px-2 md:px-12">
      <div></div>
      <div className="flex items-start justify-center ">
        <ul className="flex gap-8">
          <li className="hover:cursor-pointer hover:underline">Drum Kits</li>
          <li className="hover:cursor-pointer hover:underline">Snares</li>
          <li className="hover:cursor-pointer hover:underline">Cymbals</li>
        </ul>
      </div>
      <div>
        <Link href="/cart">
          <HiShoppingCart size={30} />
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
