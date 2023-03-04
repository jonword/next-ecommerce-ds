import { CartItem } from "@/redux/cartSlice";
import { formatCurrency } from "@/util/formatcurrency";
import Image from "next/image";
import { AppDispatch } from "@/redux/store";
import { removeFromCart } from "@/redux/cartSlice";
import { useAppDispatch } from "@/redux/hooks";

interface Props {
  cartItem: CartItem;
}

const CartCard = ({ cartItem }: Props) => {
  const dispatch = useAppDispatch();
  return (
    <>
      <div className="my-2 w-full" />
      <div className="flex h-48 w-full items-center gap-8 justify-between border-b">
        <div className="flex flex-col pl-2">
          <Image
            src={cartItem.product.image}
            alt={cartItem.product.name}
            height={200}
            width={300}
            className=""
          />
        </div>
        <div className="pr-2 w-full flex flex-col">
          <p className="font-semibold">{cartItem.product.name}</p>
          <p className="">{formatCurrency(cartItem.product.price)}</p>
          <div>
            <button onClick={() => dispatch(removeFromCart(cartItem.product))}>
              <p className="text-gray-400 hover:text-red-700 hover:cursor-pointer hover:underline">
                remove
              </p>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartCard;
