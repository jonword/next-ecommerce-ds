import React, { useState } from "react";
import useSWR from "swr";
import CatalogCard from "@/components/catalogcard";
import type { Product } from "@/interfaces";
import Nav from "@/components/nav";
import { getCatalog } from "@/lib/getCatalog";

interface Props {
  data: Product[];
}

//const fetcher = (url: string) => fetch(url).then((res) => res.json());

const Catalog = ({ data }: Props) => {
  /*const { data, error, isLoading } = useSWR<Product[]>("/api/catalog", fetcher);*/

  /*if (error)
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
  */

  return (
    <>
      <Nav />
      <div className="m-8" />
      <div className="flex h-screen flex-wrap justify-evenly gap-8 pt-2">
        {data.map((p) => (
          <CatalogCard key={p.id} product={p} />
        ))}
      </div>
    </>
  );
};

export async function getStaticProps() {
  const data = await getCatalog();
  return {
    props: {
      data,
    },
  };
}

export default Catalog;
