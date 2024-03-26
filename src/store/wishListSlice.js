import { createSlice } from "@reduxjs/toolkit";

export const wishlistSlice = createSlice({
    name: "wishlist",
    initialState: {
        wishlistItems: [],
    },
    reducers: {
        addToWishlist: (state, action) => {
            const itemExists = state.wishlistItems.some(
                (item) => item.slug === action.payload.slug
            );
            if (!itemExists) {
                state.wishlistItems.push(action.payload);
            }
        },
        removeFromWishlist: (state, action) => {
            state.wishlistItems = state.wishlistItems.filter(
                (item) => item.id !== action.payload.id
            );
        },
    },
});

// Action creators are generated for each case reducer function
export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;

export default wishlistSlice.reducer;
