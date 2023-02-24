import React from "react";
import CatalogCard from "@/components/catalogcard";

const Catalog = () => {
  return (
    <>
      <p className="px-4">Catalog</p>
      <div className="m-2 border-b border-stone-700" />
      <div className="flex h-screen flex-wrap justify-evenly gap-8 pt-2">
        <CatalogCard />
      </div>
    </>
  );
};

export default Catalog;
