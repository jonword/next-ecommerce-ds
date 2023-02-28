import React from "react";
import useSWR from "swr";
import { useRouter } from "next/router";
import type { Product, ResponseError } from "@/interfaces";
import Image from "next/image";
import { NextPage } from "next";
import { formatCurrency } from "@/util/formatcurrency";
import { BsArrowLeftShort } from "react-icons/bs";
import Link from "next/link";

const fetcher = async (url: string) => {
  const res = await fetch(url);
  const data = await res.json();

  if (res.status !== 200) {
    throw new Error(data.message);
  }
  return data;
};

const SingleProduct: NextPage = () => {
  const { query } = useRouter();
  const { data, error, isLoading } = useSWR<Product, ResponseError>(
    () => (query.id ? `/api/product/${query.id}` : null),
    fetcher
  );

  // TODO:  handle 1 item per order logic

  if (error)
    return (
      <div className="text-3xl flex items-center justify-center">
        Failed to load
      </div>
    );
  if (isLoading)
    return (
      <div className="text-3xl flex items-center justify-center text-gray-500 animate-pulse">
        <h1>Loading...</h1>
      </div>
    );
  if (!data) return null;

  return (
    <>
      <div className="flex pl-4 pt-2 items-center">
        <Link href="/catalog">
          <BsArrowLeftShort size={25} />
        </Link>
        <Link href="/catalog">
          <p className="">back to catalog</p>
        </Link>
      </div>

      <div className="lg: mt-8 flex h-screen w-full flex-col items-center justify-start gap-8 lg:mt-20 lg:flex-row lg:items-start lg:justify-evenly">
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
            <button className="bg-zinc-800 px-12 py-4 text-white">
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
