import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { body: data } = req;
  const newUser = await prisma.user.create({
    data,
  });
  return res.status(201).json(newUser);
}
