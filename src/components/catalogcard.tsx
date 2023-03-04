import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Product } from "../interfaces/index";
import { formatCurrency } from "@/util/formatcurrency";

interface Props {
  product: Product;
}

const CatalogCard = ({ product }: Props) => {
  return (
    <div>
      <Link href={`/product/${product.id}`}>
        <Image
          src={product.image}
          height={280}
          width={380}
          className=""
          alt={product.name}
        />
      </Link>

      <div className="flex flex-col items-center p-2">
        <Link href={`/product/${product.id}`}>
          <p className="hover:cursor-pointer hover:underline">{product.name}</p>
        </Link>

        <p>{formatCurrency(product.price)}</p>
      </div>
    </div>
  );
};

export default CatalogCard;
