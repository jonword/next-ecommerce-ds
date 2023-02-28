import React from "react";
import CatalogCard from "@/components/catalogcard";
import type { Product } from "@/interfaces";

type Props = {
  data: Product[];
};

export async function getServerSideProps() {
  const res = await fetch("http://localhost:3000/api/catalog");
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}

const Catalog = ({ data }: Props) => {
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
