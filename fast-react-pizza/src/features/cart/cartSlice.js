import { configureStore } from '@reduxjs/toolkit';

const initialState = {
  cart: [],
};

const cartSlice = configureStore({
  name: 'cart',
  initialState,
  reducer: {},
});
