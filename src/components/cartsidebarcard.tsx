import React from "react";
import { CartItem } from "../interfaces";
import image4 from "../assets/images/image-product-4.jpg";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { totalPriceSelector } from "../redux/cartSlice";
import { formatCurrency } from "../util/formatcurrency";
import Image from "next/image";

interface Props {
  cartItem: CartItem;
}

const CartSidebarCard = ({ cartItem }: Props) => {
  const dispatch = useAppDispatch();
  const totalPrice = useAppSelector(totalPriceSelector);

  return (
    <>
      <div className="my-2 w-full" />
      <div className="flex h-48 w-full items-center justify-evenly border-b">
        <div className="flex flex-col pl-2">
          <Image
            src=""
            alt=""
            className="h-24 w-24 bg-gray-200
          "
          />
        </div>
        <div className="pr-2">
          <p>{cartItem.product.name}</p>
          <p className="">{formatCurrency(cartItem.product.price)}</p>
          <div className="flex w-24 justify-center gap-8 border-t border-b p-1">
            <p className="hover:cursor-pointer">-</p>
            <p>{cartItem.qty}</p>
            <p className="hover:cursor-pointer">+</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartSidebarCard;
