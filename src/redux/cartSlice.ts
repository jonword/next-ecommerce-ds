import { createSelector, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";
import type { Products } from "@prisma/client";

export interface CartItem {
  product: Products;
  qty: number;
}

export interface CartState {
  cart: CartItem[];
}

const initialState: CartState = {
  cart: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Products>) => {
      const item = state.cart.find((x) => x.product.id === action.payload.id);

      state.cart.push({
        product: action.payload,
        qty: 1,
      });
    },

    removeFromCart: (state, action: PayloadAction<Products>) => {
      state.cart = state.cart.filter((x) => x.product.id !== action.payload.id);
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
