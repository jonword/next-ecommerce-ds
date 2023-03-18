import React from "react";
import CartPageCard from "@/components/cartpagecard";
import { totalCartItemSelector, totalPriceSelector } from "@/redux/cartSlice";
import { useAppSelector } from "@/redux/hooks";
import { formatCurrency } from "@/util/formatcurrency";
import Link from "next/link";
import { BsArrowLeftShort } from "react-icons/bs";

const Cart = () => {
  const cart = useAppSelector((state) => state.cart);
  const total = useAppSelector(totalCartItemSelector);
  const subtotal = useAppSelector(totalPriceSelector);
  return (
    <div>
      {cart.length ? (
        <>
          <h1 className="lg:mx-60 mt-4 text-3xl pl-4">My Cart</h1>
          <div className="flex flex-col lg:flex-row lg:justify-between gap-8 lg:mx-60 pb-12">
            <div className="w-full">
              {cart.map((item) => (
                <CartPageCard cartItem={item} key={item.product.id} />
              ))}
            </div>
            <div className="flex flex-col gap-6 p-2 pb-6 w-full lg:max-w-md lg:max-h-52 justify-between">
              <div className="flex justify-between">
                <p>Total</p>
                <p>{formatCurrency(subtotal)}</p>
              </div>
              <div className="mt-4 flex justify-start text-gray-500">
                <p>Taxes and shipping calculated at checkout</p>
              </div>
              <div className="flex justify-center">
                <button className="flex items-center gap-2 bg-gray-900 py-4 px-20 text-white duration-300 hover:bg-gray-700">
                  <p>CHECK OUT</p>
                </button>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div>
          <h1 className="mt-4 pl-4 text-center text-xl">Your cart is empty.</h1>
          <div className="mx-60 my-4" />
          <div className="flex pl-4 pt-4 justify-center items-center">
            <Link href="/catalog">
              <BsArrowLeftShort size={25} className="animate-bounce" />
            </Link>
            <Link href="/catalog">
              <p className="hover:underline text-xl font-semibold">
                back to catalog
              </p>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
