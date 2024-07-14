import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./reduxSlice";
import productSlice from "./reduxProducts";

const store = configureStore({
  reducer: {
    cart: cartSlice,
    products: productSlice,
  },
});

export default store;
