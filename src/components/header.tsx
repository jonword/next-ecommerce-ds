import React, { useState } from "react";
import { FaBars } from "react-icons/fa";

import { GiDrumKit } from "react-icons/gi";
import Link from "next/link";
import { Product } from "@/interfaces";

interface Props {
  product: Product;
}

const Header = (props: Props) => {
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
    </>
  );
};

export default Header;
