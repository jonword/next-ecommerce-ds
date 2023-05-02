import CatalogCard from "@/components/catalogcard";
import type { Products } from "@prisma/client";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import prisma from "@/lib/prisma";
import { useState } from "react";
import { products } from "@/data/data";
import Filter from "@/components/filter";
import { useSelector } from "react-redux";

interface Props {
  data: Products[];
}

const Catalog = ({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps> & Props) => {
  const [category, setCategory] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(data);

  const handleCategoryChange = (category: string) => {
    setCategory(category);
    if (category === "") {
      setFilteredProducts(data);
    } else {
      const filtered = data.filter((product) => product.category === category);
      setFilteredProducts(filtered);
    }
  };

  return (
    <>
      <div className="pl-6 pt-4">
        <Filter
          products={data}
          onCategoryChange={handleCategoryChange}
          selected={category}
        />
      </div>
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
