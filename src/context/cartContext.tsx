import { Products } from "@prisma/client";
import { createContext, useContext, ReactNode, useState } from "react";

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
};

const CartContext = createContext({} as CartContext);

export function useCart() {
  return useContext(CartContext);
}

export function CartProvider({ children }: CartProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  function getItemQty(id: number) {
    return cartItems.find((item) => item.id === id)?.qty || 0;
  }

  function addToCart(id: number) {
    setCartItems((currItems) => {
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
    setCartItems((currItems) => {
      return currItems.filter((item) => item.id !== id);
    });
  }
  return (
    <CartContext.Provider value={{ getItemQty, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}
