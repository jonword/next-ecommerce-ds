import prisma from "../../../../prisma/index";

export async function getProductById(id: number) {
  try {
    const product = await prisma.product.findUnique({ where: { id } });
    return { product };
  } catch (error) {
    return { error };
  }
}
