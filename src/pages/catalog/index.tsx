import CatalogCard from "@/components/catalogcard";
import type { Products } from "@prisma/client";
import { GetServerSideProps } from "next";
import prisma from "@/lib/prisma";
import { useState } from "react";

interface Props {
  data: Products[];
}

const Catalog = ({ data }: Props) => {
  const [category, setCategory] = useState(null);

  return (
    <>
      <div className="flex pl-6 pt-4 items-start justify-start ">
        <div className="flex gap-4">
          <button className="hover:cursor-pointer hover:underline">All</button>
          <button
            className="hover:cursor-pointer hover:underline"
            value="drumkit"
          >
            Drum Kits
          </button>
          <button
            className="hover:cursor-pointer hover:underline"
            value="snare"
          >
            Snares
          </button>
          <button
            className="hover:cursor-pointer hover:underline"
            value="cymbal"
          >
            Cymbals
          </button>
        </div>
      </div>
      <div className="m-8" />
      <div className="flex h-screen flex-wrap justify-evenly gap-8 pt-2">
        {data.map((p) => (
          <CatalogCard key={p.id} product={p} />
        ))}
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const data = await prisma.products.findMany();

  return {
    props: {
      data,
    },
  };
};

export default Catalog;
