import { createContext, useContext, ReactNode, useState } from "react";
import { useLocalStorage } from "../util/useLocalStorage";
import type { Products } from "@prisma/client";

export interface CartItem {
  id: number;
  qty: number;
}

type CartProviderProps = {
  children: ReactNode;
};

type CartContext = {
  getItemQty: (id: number) => number;
  addToCart: (id: number) => void;
  removeFromCart: (id: number) => void;
  cartQty: number;
  cart: CartItem[];
};

const CartContext = createContext({} as CartContext);

export function useCart() {
  return useContext(CartContext);
}

export function CartProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useLocalStorage<CartItem[]>("cart", []);

  const cartQty = cart.reduce((qty, item) => item.qty + qty, 0);

  function getItemQty(id: number) {
    return cart.find((item) => item.id === id)?.qty || 0;
  }

  function addToCart(id: number) {
    setCart((currItems) => {
      if (currItems.find((item) => item.id === id)?.qty === 1) {
        return [...currItems, { id, qty: 1 }];
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, qty: item.qty + 1 };
          } else {
            return item;
          }
        });
      }
    });
  }

  function removeFromCart(id: number) {
    setCart((currItems) => {
      return currItems.filter((item) => item.id !== id);
    });
  }

  return (
    <CartContext.Provider
      value={{ getItemQty, addToCart, removeFromCart, cartQty, cart }}
    >
      {children}
    </CartContext.Provider>
  );
}
