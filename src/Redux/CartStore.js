import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice"; // Use the renamed `cartSlice`

const store = configureStore({
    reducer: {
        cartData: cartSlice, // Ensure you use the correct reducer name
    },
});

export default store;
