import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalQty: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const isExistItem = state.items.find(
        (item) => item._id === action.payload._id
      );
      if (isExistItem) {
        state.items = state.items.map((item) =>
          item._id === action.payload._id
            ? { ...item, qty: item.qty + 1 }
            : item
        );
        state.totalQty += 1;
        state.totalPrice += action.payload.price;
      } else {
        const pushItem = { ...action.payload, qty: 1 };
        state.items = [...state.items, pushItem];
        state.totalQty += 1;
        state.totalPrice += action.payload.price;
      }
    },
    removeFromCart: (state, action) => {
      const getItem = state.items.find(
        (item) => item._id === action.payload._id
      );
      if (getItem.qty === 1) {
        state.items = state.items.filter(
          (item) => item._id !== action.payload._id
        );
        state.totalQty -= 1;
        state.totalPrice -= action.payload.price;
      } else {
        state.items = state.items.map((item) =>
          item._id === action.payload._id
            ? { ...item, qty: item.qty - 1 }
            : item
        );
        state.totalQty -= 1;
        state.totalPrice -= action.payload.price;
      }
    },
    clearCart: (state) => {
      state.items = [];
      state.totalPrice = 0;
      state.totalQty = 0;
    },
  },
  extraReducers: {},
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
