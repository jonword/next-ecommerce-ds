import CatalogCard from "@/components/catalogcard";
import Filter from "@/components/filter";
import type { Products } from "@prisma/client";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import prisma from "@/lib/prisma";
import { useState } from "react";

interface Props {
  data: Products[];
}

const Catalog = ({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps> & Props) => {
  const [selectedcategory, setSelectedCategory] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(data);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    if (category === "") {
      setFilteredProducts(data);
    } else {
      const filtered = data.filter((product) => product.category === category);
      setFilteredProducts(filtered);
    }
  };

  const categories = [...new Set(data.map((product) => product.category))];

  return (
    <>
      <div className="pl-6 pt-4">
        <Filter
          categories={categories}
          products={data}
          onCategoryChange={handleCategoryChange}
          selected={selectedcategory}
        />
      </div>
      <div className="m-8" />
      <div className="flex min-h-screen flex-wrap justify-evenly gap-8 pt-2 mb-16">
        {selectedcategory === "" ? (
          data.map((p) => <CatalogCard key={p.id} product={p} />)
        ) : (
          <div className="flex h-full flex-wrap justify-evenly gap-8 pt-2 mb-16">
            {filteredProducts.map((p) => (
              <CatalogCard key={p.id} product={p} />
            ))}
          </div>
        )}
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
