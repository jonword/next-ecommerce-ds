import { NextApiRequest, NextApiResponse } from "next";
import { products } from "@/data/data";
import type { Product, ResponseError } from "@/interfaces";

export default function productHandler(
  req: NextApiRequest,
  res: NextApiResponse<Product | ResponseError>
) {
  const { query } = req;
  const { id } = query;
  const product = products.find((p) => p.id === id);

  return product
    ? res.status(200).json(product)
    : res.status(404).json({ message: "item not found" });
}
