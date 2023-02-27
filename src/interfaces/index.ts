export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
};

export type ResponseError = {
  message: string;
};

export interface CartItem {
  product: Product;
  qty: number;
}

export interface CartState {
  cart: CartItem[];
}
