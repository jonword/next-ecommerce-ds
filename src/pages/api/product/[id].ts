import { NextApiRequest, NextApiResponse } from "next";

import prisma from "@/lib/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const prodId = parseInt(req.query.id as string);

  const product = await prisma.products.findUnique({
    where: { id: prodId },
  });

  return product
    ? res.send(product)
    : res.status(404).json({ message: "item not found" });
}
