import React from "react";
import useSWR from "swr";
import CatalogCard from "@/components/catalogcard";
import type { Product } from "@/interfaces";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const Catalog = () => {
  const { data, error, isLoading } = useSWR<Product[]>("/api/catalog", fetcher);

  if (error) return <div>Failed to load</div>;
  if (isLoading)
    return (
      <div className="text-3xl flex items-center justify-center text-gray-500">
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
