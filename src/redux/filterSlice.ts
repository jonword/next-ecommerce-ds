import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";
import type { Products } from "@prisma/client";

interface Product {
  product: Products;
}

interface FilterState {}

const initialState: FilterState = {
  product: [],
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    filterByCategory: (state, action) => {},
  },
});
