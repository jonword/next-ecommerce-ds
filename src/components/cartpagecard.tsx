import React from "react";
import Link from "next/link";
import Image from "next/image";
import { CartItem } from "@/redux/cartSlice";
import { removeFromCart } from "@/redux/cartSlice";
import { useAppDispatch } from "@/redux/hooks";
import { formatCurrency } from "@/util/formatcurrency";

interface Props {
  cartItem: CartItem;
}

const CartPageCard = ({ cartItem }: Props) => {
  const dispatch = useAppDispatch();
  return (
    <>
      <div className="flex h-48 w-full items-center gap-8 border-b p-2">
        <div className="flex flex-col p-2">
          <Link href={`/product/${cartItem.product.id}`}>
            <Image
              src={cartItem.product.image}
              alt={cartItem.product.name}
              height={100}
              width={200}
              className=""
            />
          </Link>
        </div>
        <div className="pr-2 w-full flex flex-col">
          <Link href={`/product/${cartItem.product.id}`}>
            <p className="font-semibold">{cartItem.product.name}</p>
          </Link>

          <p className="">{formatCurrency(cartItem.product.price)}</p>
        </div>
        <div>
          <button onClick={() => dispatch(removeFromCart(cartItem.product))}>
            <p className="text-gray-400 hover:text-red-700 hover:cursor-pointer hover:underline pr-4">
              remove
            </p>
          </button>
        </div>
      </div>
    </>
  );
};

export default CartPageCard;
