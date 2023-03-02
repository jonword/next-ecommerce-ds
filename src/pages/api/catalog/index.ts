import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "prisma";

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const products = await prisma.product.findMany();
  res.json(products);
}
