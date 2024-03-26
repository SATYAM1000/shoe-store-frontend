import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cartItems: [],
    },
    reducers: {
        addToCart: (state, action) => {
            const item = state.cartItems.find(
                (p) => p.slug === action.payload.slug
            );
            if (item) {
                item.quantity++;
                item.price = item.oneQunatityPrice * item.quantity;
            } else {
                state.cartItems.push({ ...action.payload, quantity: 1 });
            }
        },
        updateCart: (state, action) => {
            console.log("while updating ", action.payload);
            state.cartItems = state.cartItems.map((p) => {
                if (p.slug === action.payload.slug) {
                    if (action.payload.key === "quantity") {
                        p.price = p.oneQunatityPrice * action.payload.val; // Update price based on the new quantity
                    }
                    return { ...p, [action.payload.key]: action.payload.val };
                }
                return p;
            });
        },
        
        removeFromCart: (state, action) => {
            state.cartItems = state.cartItems.filter(
                (p) => p.slug !== action.payload.slug
            );
        },
    },
});

// Action creators are generated for each case reducer function
export const { addToCart, updateCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;