import { configureStore } from "@reduxjs/toolkit";

import cartSlice from "./features/cartSlice";
import restaurantSlice from "./features/restaurantSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice,
    restaurant: restaurantSlice,
  },
});

export default store;
