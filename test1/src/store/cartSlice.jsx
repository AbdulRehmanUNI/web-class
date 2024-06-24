import { createSlice } from '@reduxjs/toolkit';
const initialCartState = [];

const cartSlice = createSlice({
  name: 'cart',
  initialState: initialCartState,
  reducers: {

    addToCart(state, action) {
      const existingIndex = state.findIndex((item) => item.id === action.payload.id);

      if (existingIndex >= 0) {
        state[existingIndex].quantity += 1;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart(state, action) {
      return state.filter((item) => item.id !== action.payload.id);
    },
    clearCart() {
      return initialCartState;
    },
  },
});

// Export the actions
export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

// Export the reducer
export default cartSlice.reducer;