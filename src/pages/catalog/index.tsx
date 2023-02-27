import React from "react";
import useSWR from "swr";
import CatalogCard from "@/components/catalogcard";
import type { Product } from "@/interfaces";
import { NextPage } from "next";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const Catalog: NextPage = () => {
  const { data, error, isLoading } = useSWR<Product[]>("/api/catalog", fetcher);

  if (error) return <div>Failed to load</div>;
  if (isLoading)
    return (
      <div className="flex justify-center items-center text-3xl animate-pulse text-stone-500">
        <h1>Loading...</h1>
      </div>
    );
  if (!data) return null;

  return (
    <>
      <p className="px-4">Catalog</p>
      <div className="m-2 border-b border-stone-700" />
      <div className="flex h-screen flex-wrap justify-evenly gap-8 pt-2">
        {data.map((p) => (
          <CatalogCard key={p.id} product={p} />
        ))}
      </div>
    </>
  );
};

export default Catalog;
