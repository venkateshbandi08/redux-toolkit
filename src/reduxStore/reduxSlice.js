import { createSlice, nanoid } from "@reduxjs/toolkit";

const cartState = [];

const cartSlice = createSlice({
  name: "cart",
  initialState: cartState,
  reducers: {
    addToCart: (state, action) => {
      const item = {
        id: nanoid(),
        ...action.payload,
      };
      state.push(item);
    },
    removeFromCart: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
