import React from "react";
import useSWR from "swr";
import { useRouter } from "next/router";
import type { Product, ResponseError } from "@/interfaces";
import Image from "next/image";
import { NextPage } from "next";
import { formatCurrency } from "@/util/formatcurrency";

const fetcher = async (url: string) => {
  const res = await fetch(url);
  const data = await res.json();

  if (res.status !== 200) {
    throw new Error(data.message);
  }
  return data;
};

const SingleProduct = () => {
  const { query } = useRouter();
  const { data, error, isLoading } = useSWR<Product, ResponseError>(
    () => (query.id ? `/api/product/${query.id}` : null),
    fetcher
  );

  // TODO:  handle 1 item per order logic

  if (error) return <div>{error.message}</div>;
  if (isLoading) return <div>Loading...</div>;
  if (!data) return null;

  return (
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
        <p>{data.description}</p>
        <div className="flex justify-center">
          <button className="bg-zinc-800 px-12 py-4 text-white">
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
