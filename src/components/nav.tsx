import Link from "next/link";
import React from "react";
import { HiShoppingCart } from "react-icons/hi";

const Nav = () => {
  return (
    <nav className="flex relative h-16 justify-end items-center border-b border-slate-500 px-8 md:px-12">
      <div>
        <Link href="/cart">
          <HiShoppingCart size={30} />
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
