import CatalogCard from "@/components/catalogcard";
import type { Products } from "@prisma/client";
import { GetServerSideProps } from "next";
import prisma from "@/lib/prisma";

interface Props {
  data: Products[];
}

const Catalog = ({ data }: Props) => {
  return (
    <>
      <div className="flex pl-6 pt-4 items-start justify-start ">
        <ul className="flex gap-4">
          <li className="hover:cursor-pointer hover:underline">Drum Kits</li>
          <li className="hover:cursor-pointer hover:underline">Snares</li>
          <li className="hover:cursor-pointer hover:underline">Cymbals</li>
        </ul>
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
