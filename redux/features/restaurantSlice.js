import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  restaurant: null,
};

const restaurantSlice = createSlice({
  name: "restaurant",
  initialState,
  reducers: {
    updateRestaurant: (state, action) => {
      state.restaurant = action.payload;
    },
  },
  extraReducers: {},
});

export const { updateRestaurant } = restaurantSlice.actions;

export default restaurantSlice.reducer;
