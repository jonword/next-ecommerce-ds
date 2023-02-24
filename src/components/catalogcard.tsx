import React from "react";
import Link from "next/link";
import Image from "next/image";

const CatalogCard = () => {
  return (
    <div>
      <Link href="/product">
        <Image
          src=""
          className="h-[270px] w-[370px] flex-shrink"
          alt="product name"
        />
      </Link>

      <div className="flex flex-col items-center p-2">
        <Link href="/product">
          <p className="hover:cursor-pointer hover:underline">product name</p>
        </Link>

        <p>$price</p>
      </div>
    </div>
  );
};

export default CatalogCard;
