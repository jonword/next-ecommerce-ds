import React, { useState, useEffect } from "react";
import { Products } from "@prisma/client";

type Props = {
  products: Products[];
  selected: string;
  onCategoryChange: (category: string) => void;
};

const Filter = ({ products, selected, onCategoryChange }: Props) => {
  //const [selectedCategory, setSelectedCategory] = useState("");

  const handleClick = (category: string) => {
    onCategoryChange(category);
  };

  return (
    <div>
      <ul className="flex gap-4">
        <li key="all">
          <button onClick={() => handleClick("")}>all</button>
        </li>
        {[...new Set(products.map((product) => product.category))].map(
          (category) => (
            <li key={category}>
              <button onClick={() => handleClick(category)}>{category}</button>
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default Filter;
