import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",  // No extra space here
    initialState: [],
    reducers: {
        addToCart: (state, action) => {
            state.push(action.payload);
        },
        removeFromCart: (state, action) => {
            return state.filter(item => item.id !== action.payload.id);
        }
    }
});

// Correctly destructure the actions
export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
