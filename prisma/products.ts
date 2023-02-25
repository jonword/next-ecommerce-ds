import prisma from "./index";

export async function getAllProducts() {
  try {
    const products = await prisma.product.findMany({});
    return { products };
  } catch (error) {
    return { error };
  }
}

export async function getProductById(id: string) {
  try {
    const product = await prisma.product.findUnique({ where: { id } });
    return { product };
  } catch (error) {
    return { error };
  }
}
