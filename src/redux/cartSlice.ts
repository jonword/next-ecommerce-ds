import { createSelector, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Product, CartItem, CartState } from "@/interfaces";
import { RootState } from "./store";

const initialState: CartState = {
  cart: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      const item = state.cart.find((x) => x.product.id === action.payload.id);

      if (item) {
        item.qty++;
      } else {
        state.cart.push({
          product: action.payload,
          qty: 1,
        });
      }
    },

    removeFromCart: (state, action: PayloadAction<Product>) => {
      const removeItem = (state.cart = state.cart.filter(
        (item) => item.product.id !== action.payload.id
      ));
      state.cart = removeItem;
    },
  },
});

const cart = (state: RootState) => state.cart;

export const totalCartItemSelector = createSelector([cart], (cart) =>
  cart.reduce((total: number, curr: CartItem) => (total += curr.qty), 0)
);

export const totalPriceSelector = createSelector([cart], (cart) =>
  cart.reduce(
    (total: number, curr: CartItem) => (total += curr.qty * curr.product.price),
    0
  )
);

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
