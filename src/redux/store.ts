import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import { loadState, saveState } from "@/util/localstorage";

const persistedState = loadState();

export const store = configureStore({
  reducer: cartReducer,
  preloadedState: persistedState,
});

store.subscribe(() => {
  saveState(store.getState());
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
