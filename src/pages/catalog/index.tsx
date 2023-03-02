import React, { useState } from "react";
import CatalogCard from "@/components/catalogcard";
import Nav from "@/components/nav";
import type { Product } from "@/interfaces";
import { GetServerSideProps } from "next";
import prisma from "@/lib/prisma";

interface CatalogProps {
  data: Product[];
}

const Catalog = ({ data }: CatalogProps) => {
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

export const getServerSideProps: GetServerSideProps = async () => {
  const data = await prisma.product.findMany();
  return {
    props: {
      data,
    },
  };
};

export default Catalog;
