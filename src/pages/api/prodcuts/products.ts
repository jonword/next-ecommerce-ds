import prisma from "../../../../prisma/index";

export async function getAllProducts() {
  try {
    const products = await prisma.product.findMany();
    return { products };
  } catch (error) {
    return { error };
  }
}
