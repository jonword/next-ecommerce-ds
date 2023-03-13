import Link from "next/link";
import Image from "next/image";
import { formatCurrency } from "@/util/formatcurrency";
import { BsArrowLeftShort } from "react-icons/bs";
import { GetServerSideProps } from "next";
import type { Products } from "@prisma/client";
import prisma from "@/lib/prisma";
import { useAppDispatch } from "@/redux/hooks";
import { addToCart } from "@/redux/cartSlice";

interface Props {
  data: Products;
}

interface CartItem {
  product: Products;
  qty: number;
}

const SingleProduct = ({ data }: Props) => {
  const dispatch = useAppDispatch();

  return (
    <>
      <div className="flex pl-4 pt-4 items-center">
        <Link href="/catalog">
          <BsArrowLeftShort size={25} />
        </Link>
        <Link href="/catalog">
          <p className="hover:underline">back to catalog</p>
        </Link>
      </div>

      <div className="mt-2 flex h-screen w-full flex-col items-center justify-start gap-8 lg:mt-20 lg:flex-row lg:items-start lg:justify-evenly">
        <p className="text-2xl font-medium lg:hidden">{data.name}</p>
        <div>
          <Image
            src={data.image}
            alt={data.name}
            width={400}
            height={400}
            className=""
          />
        </div>
        <div className="flex flex-col gap-8 pl-4">
          <p className="hidden text-2xl font-medium lg:block">{data.name}</p>
          <p>{formatCurrency(data.price)}</p>
          <div className="w-96">
            <p>{data.description}</p>
          </div>

          <div className="flex justify-center">
            <button
              className="bg-zinc-800 duration-300 shadow-sm shadow-slate-600 hover:bg-zinc-600 px-12 py-4 text-white"
              onClick={() => dispatch(addToCart(data))}
            >
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const data = await prisma.products.findUnique({
    where: {
      id: Number(params?.id),
    },
  });
  return {
    props: {
      data: data,
    },
  };
};
