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
      <div className="flex pl-6 pt-4 items-start justify-start "></div>
      <div className="m-8" />
      <div className="flex h-full flex-wrap justify-evenly gap-8 pt-2 mb-16">
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
