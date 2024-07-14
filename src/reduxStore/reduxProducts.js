import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  status: "fulfilled",
};
const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = "fulfilled";
      })
      .addCase(getProducts.pending, (state, action) => {
        state.status = "pending";
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.status = "rejected";
      });
  },
});

export default productSlice.reducer;

export const getProducts = createAsyncThunk("products", async () => {
  const data = await fetch("https://dummyjson.com/products");
  const result = await data.json();
  return result.products;
});
