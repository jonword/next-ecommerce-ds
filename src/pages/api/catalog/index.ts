import type { NextApiRequest, NextApiResponse } from "next";
import { products } from "@/data/data";
import { Product } from "@/interfaces";

export default function handler(
  _req: NextApiRequest,
  res: NextApiResponse<Product[]>
) {
  return res.status(200).json(products);
}
